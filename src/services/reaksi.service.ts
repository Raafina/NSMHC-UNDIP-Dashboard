import instance from "@/libs/axios/instance";
import endpoint from "./endpoint.constants";

const reaksiServices = {
    getAllReaksi: (params: string) => instance.get(`${endpoint.REACTION}?${params}`),
};

export default reaksiServices