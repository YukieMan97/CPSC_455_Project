
import axios from "axios";

export default class imageClient {
    static async getAllImages() {
        try {
            const response = axios.get("/api/v1/images");
            return response
        } catch (e) {
            console.log(e.message())
        }
    }

    static async getImagebyId(id) {
        try {
            const response = axios.get(`/api/v1/images/${id}`);
            return response
        } catch (e) {
            console.log(e.message())
        }
    }

    static async deleteImageById(id) {
        try {
            const response = axios.delete(`/api/v1/images/${id}`);
            return response
        } catch (e) {
            console.log(e.message())
        }
    }

    static async addImages(imageFiles) {
        try {
            const formData = new FormData();
            imageFiles.forEach(imageFile => {
                formData.append('photo', imageFile);
            });
            const config = {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            }
            const response = axios.post(`/api/v1/images/`, formData, config);
            return response
        } catch (e) {
            console.log(e)
        }
    }
}
