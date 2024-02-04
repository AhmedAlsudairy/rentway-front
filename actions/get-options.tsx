import { Option } from "@/types";


const URL = `${process.env.NEXT_PUBLIC_API_URL}/options`;


const getOptions = async ():Promise<Option[]>  =>{


const res = await fetch(URL)


return res.json()



}


export default getOptions