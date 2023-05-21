import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

class HttpRequestsService {
  private readonly axiosInstance: AxiosInstance;

  constructor(baseURL: string) {
    this.axiosInstance = axios.create({
      baseURL,
      timeout: 5000, // Adjust the timeout as per your requirement
    });
  }

  public async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await this.axiosInstance.get<T>(url, config);
    return response.data;
  }

  public async post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await this.axiosInstance.post<T>(url, data, config);
    return response.data;
  }

  public async put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await this.axiosInstance.put<T>(url, data, config);
    return response.data;
  }

  public async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await this.axiosInstance.delete<T>(url, config);
    return response.data;
  }
}

export default HttpRequestsService;


//USE EXAMPLE
// const apiService = new HttpRequestsService('https://example.com/api');

// // Make a GET request
// apiService.get<User[]>('/users')
//   .then((users: User[]) => {
//     // Handle the response data
//     console.log(users);
//   })
//   .catch((error: Error) => {
//     // Handle the error
//     console.error(error);
//   });

// // Make a POST request
// const newUser: User = { name: 'John Doe', email: 'john@example.com' };
// apiService.post<User>('/users', newUser)
//   .then((createdUser: User) => {
//     // Handle the response data
//     console.log(createdUser);
//   })
//   .catch((error: Error) => {
//     // Handle the error
//     console.error(error);
//   });