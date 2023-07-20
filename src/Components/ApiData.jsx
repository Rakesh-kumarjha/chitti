import axios from 'axios';

const signup = async (formData) => {
  try {
    
    const response = await axios.post('http://localhost:4000/signup', formData);

    
    return { success: response.data.success };
  } catch (error) {
    
    return { success: false, error: 'Signup failed. Please try again later.' };
  }
};

export default { signup };
