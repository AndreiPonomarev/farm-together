

export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
export const fetcher = (input: RequestInfo, init?: RequestInit) => fetch(input, init).then(res => res.json())
