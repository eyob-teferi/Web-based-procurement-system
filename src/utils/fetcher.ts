// import { cookies } from "next/headers";

export default async function fetcher<JSON = any>(
    input: RequestInfo,
    init?: RequestInit
  ): Promise<JSON> {
    const res = await fetch(input, init)
    return res.json()
  }

  export const fetchWithCredentials = async (url:string) => {
    // const cookieStore = cookies()
    // const jwt = cookieStore.get('jwt')?.value;
    const response = await fetch(url, { credentials: 'include' });
    return response.json();
  };