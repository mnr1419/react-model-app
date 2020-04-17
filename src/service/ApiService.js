import axios from "axios";
const BASE_URL = "http://localhost:2222/spring-boot-app/department";

class ApriService {
  getAllDepartments() {
    return axios.get(BASE_URL);
  }
  saveDepartment(departmentDetails) {
    return axios.post(BASE_URL, departmentDetails);
  }
}
export default new ApriService();
