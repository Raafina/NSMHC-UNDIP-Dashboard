import instance from "@/libs/axios/instance";
import endpoint from "./endpoint.constants";

const contentServices = {
    getAllContentProgress: (params: string) => instance.get(`${endpoint.CONTENT}/progress?${params}`),
}

export default contentServices