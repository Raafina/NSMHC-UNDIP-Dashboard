import instance from "@/libs/axios/instance";
import endpoint from "./endpoint.constants";

const penggunaServices = {
    getAllPengguna: (params: string) => instance.get(`${endpoint.USER}/all?${params}`),
    getDetailPengguna: (id: string) => instance.get(`${endpoint.USER}/${id}/detail`),
    getPasswordPengguna: (id: string) => instance.get(`${endpoint.USER}/${id}/security`),
    updatePengguna: (id: string, payload: any) => instance.put(`${endpoint.USER}/${id}/edit`, payload),
    updatePasswordPengguna: (id: string, payload: any) => instance.put(`${endpoint.USER}/${id}/security`, payload)

};

export default penggunaServices