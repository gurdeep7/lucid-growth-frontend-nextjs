import { BACKEND_URL } from '@/config';
import axios from 'axios';

export const fetchSslInfo = async (domain) => {
  try {
    const { data } = await axios.post(`${BACKEND_URL}/api/ssl-info`, { domain });
    return {
      validityStatus: data.validity.valid || 'Unknown',
      expirationDate: data.validity.validTo || 'Unknown',
      issuer: data.issuer || 'Unknown',
      subject: data.subject || 'Unknown',
      validForDomain: data.validForDomain || 'Unknown',
      caValidityCheck: data.caValid || 'Unknown',
      isSelfSigned: data.selfSigned || 'Unknown',
      crlOcspStatus: data.revoked || 'Unknown',
    };
  } catch (error) {
    console.log(error)
    throw new Error('Failed to retrieve SSL certificate information.');
  }
};
