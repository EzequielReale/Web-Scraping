import axios from "axios";

class WebsiteService {
    constructor() {
        let service = axios.create({ baseURL: 'http://localhost:3000' })
        this.service = service
    }

    getWebsites() {
        return new Promise((resolve, reject) => {
            this.service.get('/websites').then(
                response => { resolve(response.data) }
            )
                .catch(err => { reject(err) })
        });
    }

    getWebsite(id) {
        return new Promise((resolve, reject) => {
            this.service.get(`/websites/${id}`)
                .then(response => resolve(response.data))
                .catch(err => reject(err));
        });
    }

    createWebsite(website) {
        return new Promise((resolve, reject) => {
            this.service.post('/websites', website)
                .then(response => resolve(response.data))
                .catch(err => reject(err));
        });
    }

    updateWebsite(website) {
        return new Promise((resolve, reject) => {
            this.service.put(`/websites/${website.id}`, website)
                .then(response => resolve(response.data))
                .catch(err => reject(err));
        });
    }

    deleteWebsite(id) {
        return new Promise((resolve, reject) => {
            this.service.delete(`/websites/${id}`)
                .then(response => resolve(response.data))
                .catch(err => reject(err));
        });
    }

    getFrequency(websiteId) {
        return new Promise((resolve, reject) => {
            this.service.get(`/websites/${websiteId}/frequency`)
                .then(response => resolve(response.data))
                .catch(err => reject(err));
        });
    }

}

export { WebsiteService }
export default new WebsiteService()