
/*
const baseURL = 'http://localhost:8080/auth'; // Update with your backend URL

const ApplicationService = {
  register: async (userData) => {
    try {
      const response = await post(`${baseURL}/register`, userData);
      return response.data;
    } catch (error) {
      console.error('Error registering user:', error);
      throw error;
    }
  },
  
  login: async (credentials) => {
    try {
      const response = await post(`${baseURL}/login`, credentials);
      return response.data;
    } catch (error) {
      console.error('Error authenticating user:', error);
      throw error;
    }
  },
  
  getUserDetails: async () => {
    try {
      const response = await get(`${baseURL}/user-details`);
      return response.data;
    } catch (error) {
      console.error('Error getting user details:', error);
      throw error;
    }
  }
};

export default ApplicationService;
*/