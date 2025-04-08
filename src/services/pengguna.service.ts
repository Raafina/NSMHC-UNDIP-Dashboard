import instance from "@/libs/axios/instance";
import endpoint from "./endpoint.constants";
import { IUpdatePenggunaPayload, IUpdatePenggunaPasswordPayload } from "@/types/Pengguna";

const penggunaServices = {
    getAllPengguna: (params: string) => instance.get(`${endpoint.USER}/all?${params}`),
    getDetailPengguna: (id: string) => instance.get(`${endpoint.USER}/${id}/detail`),
    getPasswordPengguna: (id: string) => instance.get(`${endpoint.USER}/${id}/security`),
    updatePengguna: (id: string, payload: IUpdatePenggunaPayload) => instance.put(`${endpoint.USER}/${id}/edit`, payload),
    updatePasswordPengguna: (id: string, payload: IUpdatePenggunaPasswordPayload) => instance.put(`${endpoint.USER}/${id}/security`, payload)
};

export default penggunaServices

