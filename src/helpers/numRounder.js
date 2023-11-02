const sizes = ["", "K", "M"];
export const numRounder = (value) => {
    if (parseInt(value) == 0) return 0
    const i = parseInt(Math.floor(Math.log(value) / Math.log(1000)));
    return Math.round(value / Math.pow(1000, i), 2) + " " + sizes[i];
}