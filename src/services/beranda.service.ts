import instance from "@/libs/axios/instance";

const berandaServices = {
    getUserSummary: () => instance.get(`/progress/summary`),
    getUserVisitorSummary: () => instance.get(`/user/open/summary`),
    getUserReactionSummary: () => instance.get(`/reaction/summary`),
    getUserAnswerSummary: () => instance.get(`/question/answer`),
}

export default berandaServices