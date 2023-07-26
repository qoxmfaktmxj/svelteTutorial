export function match(param){
    return /^\d+$/.test(param);
}

// productid=integer 에서 위 정규식 못들어가도록 (문자 못들어가게 함 )