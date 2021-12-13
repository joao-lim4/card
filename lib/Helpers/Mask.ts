export const CardMask = (number: string):string => {
    return number.replace(/\D/g,"")
        .replace(/^(\d{4})(\d)/g,"$1 $2")
        .replace(/^(\d{4})\s(\d{4})(\d)/g,"$1 $2 $3")
        .replace(/^(\d{4})\s(\d{4})\s(\d{4})(\d)/g,"$1 $2 $3 $4");
}

export const ValidateMask = (number: string): string => {
    return number.replace(/\D/g,"")
        .replace(/^(\d{2})(\d)/g,"$1/$2")
}