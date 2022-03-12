export const getTimeLeft = (timeTo) => {
    const nowTS = Date.now()
    const dInMs = 1000 * 60 * 60 * 24
    const hInMs = 1000 * 60 * 60
    const mInMs = 1000 * 60
    const msLeft = timeTo - nowTS + hInMs
    const dLeftRaw = msLeft / dInMs
    const days = Math.floor(dLeftRaw)
    const hLeftRaw = ((dLeftRaw - days) * dInMs) / hInMs
    const hours = Math.floor(hLeftRaw)
    const mLeftRaw = ((hLeftRaw - hours) * hInMs) / mInMs
    const minutes = Math.floor(mLeftRaw)

    return {
        days,
        hours,
        minutes
    }
}
