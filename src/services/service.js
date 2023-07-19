import axios from "axios";
class Service {
  service;
  constructor() {
    let service = axios.create({
      headers: {
        "Content-Type": "application/json",
      },
    });
    this.service = service;
  }
}
export default Service;
