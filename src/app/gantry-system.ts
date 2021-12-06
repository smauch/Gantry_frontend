export interface GantrySystem {
    status: number,
    errorStr: string,
    pendingCandyReq: boolean,
    connected: boolean,
    upTime: number,
    availableCandies: number[],
    processedCandies: number
}
