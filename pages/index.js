import Home from '../components/Home'; // Adjust the import path if necessary

async function fetchInitialData() {

  const initialDomain = 'www.linkedin.com'; 
  const initialResult = null; 
  const initialError = null; 

  return { initialDomain, initialResult, initialError };
}

export async function getServerSideProps() {
  const { initialDomain, initialResult, initialError } = await fetchInitialData();
  return {
    props: {
      initialDomain,
      initialResult,
      initialError,
    },
  };
}

export default function IndexPage({ initialDomain, initialResult, initialError }) {
  return (
    <Home 
      initialDomain={initialDomain} 
      initialResult={initialResult} 
      initialError={initialError} 
    />
  );
}
