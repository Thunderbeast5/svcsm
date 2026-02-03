import React, { useEffect, useMemo, useState } from 'react';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from 'firebase/firestore';
import { db } from '../../firebase';

const AdminNoticesNews = () => {
  const noticesCol = useMemo(() => collection(db, 'notices'), []);

  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState('');

  const [items, setItems] = useState([]);

  const [editingId, setEditingId] = useState(null);
  const [text, setText] = useState('');
  const [active, setActive] = useState(true);

  const load = async () => {
    setError('');
    setIsLoading(true);
    try {
      const q = query(noticesCol, orderBy('createdAt', 'desc'));
      const snap = await getDocs(q);
      const rows = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
      setItems(rows);
    } catch (e) {
      setError(e?.message || 'Failed to load notices');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    void load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [noticesCol]);

  const resetForm = () => {
    setEditingId(null);
    setText('');
    setActive(true);
  };

  const startEdit = (row) => {
    setEditingId(row.id);
    setText(row.text || '');
    setActive(Boolean(row.active));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    setIsSaving(true);
    setError('');

    try {
      if (editingId) {
        await updateDoc(doc(db, 'notices', editingId), {
          text: text.trim(),
          active,
          updatedAt: serverTimestamp(),
        });
      } else {
        await addDoc(noticesCol, {
          text: text.trim(),
          active,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
        });
      }

      resetForm();
      await load();
    } catch (err) {
      setError(err?.message || 'Failed to save notice');
    } finally {
      setIsSaving(false);
    }
  };

  const toggleActive = async (row) => {
    setError('');
    try {
      await updateDoc(doc(db, 'notices', row.id), {
        active: !row.active,
        updatedAt: serverTimestamp(),
      });
      await load();
    } catch (e) {
      setError(e?.message || 'Failed to update notice');
    }
  };

  const remove = async (row) => {
    setError('');
    try {
      await deleteDoc(doc(db, 'notices', row.id));
      await load();
    } catch (e) {
      setError(e?.message || 'Failed to delete notice');
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-6 border-b border-gray-100 bg-gray-50/50">
        <h3 className="font-bold text-gray-800 text-lg">Notices & News</h3>
        <p className="text-sm text-gray-500 mt-1">Manage the news ticker shown on the homepage.</p>
      </div>

      {error && <div className="p-6 text-sm text-red-700 bg-red-50 border-b border-red-100">{error}</div>}

      <div className="p-6 border-b border-gray-100">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-start">
          <div className="lg:col-span-2">
            <label className="block text-sm font-bold mb-2 text-gray-700">Notice Text</label>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows={3}
              className="w-full p-3 border-2 rounded-lg focus:ring-2"
              style={{ borderColor: '#B8860B' }}
              placeholder="E.g., HSC Board Exam Schedule Released"
            />
          </div>

          <div className="space-y-3">
            <div>
              <label className="block text-sm font-bold mb-2 text-gray-700">Status</label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={active}
                  onChange={(e) => setActive(e.target.checked)}
                  className="w-5 h-5 cursor-pointer"
                  style={{ accentColor: '#800020' }}
                />
                <span className="text-sm text-gray-700">Active (show on site)</span>
              </label>
            </div>

            <div className="flex gap-3">
              <button
                type="submit"
                disabled={isSaving}
                className="px-5 py-3 rounded-lg font-bold text-white bg-sv-maroon hover:bg-red-800 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {editingId ? (isSaving ? 'Updating...' : 'Update') : isSaving ? 'Saving...' : 'Add'}
              </button>

              {editingId && (
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-5 py-3 rounded-lg font-bold text-gray-700 bg-gray-100 hover:bg-gray-200"
                >
                  Cancel
                </button>
              )}
            </div>
          </div>
        </form>
      </div>

      <div className="p-6">
        {isLoading ? (
          <div className="text-sm text-gray-500">Loading...</div>
        ) : items.length === 0 ? (
          <div className="text-sm text-gray-500">No notices yet.</div>
        ) : (
          <div className="space-y-3">
            {items.map((row) => (
              <div
                key={row.id}
                className="border border-gray-200 rounded-lg p-4 flex flex-col md:flex-row md:items-center gap-4 justify-between"
              >
                <div className="min-w-0">
                  <div className="text-sm font-bold text-gray-800 truncate">{row.text}</div>
                  <div className="text-xs text-gray-500 mt-1">{row.active ? 'Active' : 'Inactive'}</div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => startEdit(row)}
                    className="px-4 py-2 rounded-lg text-sm font-bold bg-sv-blue text-white hover:bg-sv-blue/90"
                  >
                    Edit
                  </button>

                  <button
                    type="button"
                    onClick={() => toggleActive(row)}
                    className="px-4 py-2 rounded-lg text-sm font-bold bg-gray-100 text-gray-800 hover:bg-gray-200"
                  >
                    {row.active ? 'Deactivate' : 'Activate'}
                  </button>

                  <button
                    type="button"
                    onClick={() => remove(row)}
                    className="px-4 py-2 rounded-lg text-sm font-bold bg-red-50 text-red-700 hover:bg-red-100"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminNoticesNews;
