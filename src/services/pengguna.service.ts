import instance from "@/libs/axios/instance";
import endpoint from "./endpoint.constants";

const penggunaServices = {
    getAllPengguna: (params: string) => instance.get(`${endpoint.USER}/all?${params}`),
};

export default penggunaServices