import { Task } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/tasks`;

const getTasks = async (): Promise<Task[]> => {
  const res = await fetch(URL);

  return res.json();
};

export default getTasks;
