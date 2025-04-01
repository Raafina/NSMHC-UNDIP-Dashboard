import instance from "@/libs/axios/instance"
import { ILogin } from "@/types/Auth"

const authServices = {
    login: (payload: ILogin) => instance.post(`/login-admin`, payload),
}

export default authServices;