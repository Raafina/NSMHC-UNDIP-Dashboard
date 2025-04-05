import instance from "@/libs/axios/instance";

const berandaServices = {
    getUserSummary: () => instance.get(`/progress/summary`),
    getUserVisitorSummary: () => instance.get(`/user/open/summary`),
}

export default berandaServices