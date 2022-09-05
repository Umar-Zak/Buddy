import moment from "moment";

const format = (time)=>{
    const date = new Date(time)
    return moment([date.getFullYear(), date.getMonth(), date.getDate()]).fromNow()
}
export default {
    format
}