export const formatCourseName = (code) => {
  if (!code) return '';
  
  const map = {
    'BBA': 'BBA',
    'BCA': 'BCA',
    'BCOM': 'B.Com',
    'BA': 'BA',
    // Legacy codes
    'BComCA': 'B.Com (CA)',
    'BComBM': 'B.Com (BM)'
  };

  return map[code] || code;
};
