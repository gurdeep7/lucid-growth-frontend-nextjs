import { useState, useEffect } from 'react';
import { fetchSslInfo } from '../services/sslService';

const useSslChecker = (initialDomain, initialResult, initialError) => {
  const [domain, setDomain] = useState(initialDomain || '');
  const [error, setError] = useState(initialError || null);
  const [result, setResult] = useState(initialResult || null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setError(null)
     }, [])
  const handleChange = (e) => {
    setDomain(e.target.value);
    if (error) {
      setError(null); // Clear error when user starts typing
    }
  };

  const handleCheck = async () => {
    setLoading(true);
    const domainRegex = /^(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+(?:[a-zA-Z]{2,})$/;
    if (domain && domainRegex.test(domain)) {
      try {
        const result = await fetchSslInfo(domain);
        setResult(result);
        setError(null); // Clear error if successful
      } catch (error) {
        setError(error.message);
        setResult(null); // Clear previous results
      } finally{
        setLoading(false);
      }
    } else {
      setError('Invalid domain format. Please enter a valid domain.');
      setResult(null); // Clear previous results
    }
  };

  return {
    domain,
    error,
    result,
    loading,
    handleChange,
    handleCheck,
  };
};

export default useSslChecker;
