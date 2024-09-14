import moment from "moment";

const ResultSection = ({ result }) => (
    <div className="mt-6 p-4 border rounded-lg bg-gray-50 shadow-md">
      <h2 className="text-xl font-semibold mb-4">SSL Certificate Details</h2>
      <p><strong>Validity Status:</strong> {result.validityStatus}</p>
      <p><strong>Expiration Date:</strong> {moment(result.expirationDate).format('MMMM D, YYYY')}</p>
      <p><strong>Issuer Details:</strong> {result.issuer}</p>
      <p><strong>Subject Details:</strong> {result.subject}</p>
      <p><strong>Valid for Domain:</strong> {result.validForDomain ? 'Yes' : 'No'}</p>
      <p><strong>CA Validity Check:</strong> {result.caValidityCheck ? 'Valid' : 'Invalid'}</p>
      <p><strong>Certificate Self-Signed:</strong> {result.isSelfSigned ? 'Yes' : 'No'}</p>
      <p><strong>CRL/OCSP Status:</strong> {result.crlOcspStatus}</p>
    </div>
  );
  
  export default ResultSection;
  