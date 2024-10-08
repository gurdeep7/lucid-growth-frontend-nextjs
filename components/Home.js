import InputField from '../components/InputField';
import SubmitButton from '../components/SubmitButton';
import ResultSection from '../components/ResultSection';
import useSslChecker from '../hooks/useSslChecker';
import Spinner from '@/components/Spinner';

const Home = ({ initialResult, initialError, initialDomain }) => {
  const {
    domain,
    error,
    result,
    loading,
    handleChange,
    handleCheck,
  } = useSslChecker(initialDomain, initialResult, initialError);

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen p-8 ${
        result?.validityStatus === undefined
          ? 'bg-gray-50'
          : result?.validityStatus === 'Valid'
          ? 'bg-green-100'
          : 'bg-red-100'
      }`}
    >
      <h1 className="text-3xl font-bold mb-6">SSL Certificate Checker</h1>
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <InputField
          value={domain}
          onChange={handleChange}
          placeholder="Enter domain name"
        />
        <div className="flex justify-center mb-4">
          <SubmitButton onClick={handleCheck}>Check SSL Certificate</SubmitButton>
        </div>
        {loading ? (
          <Spinner />
        ) : (
          <>
            {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
            {result && <ResultSection result={result} />}
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
