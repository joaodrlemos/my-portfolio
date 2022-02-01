export const changeLang = (lan) => {
    
    if(lan==='en'){
        return {
            type:'TO_PT',
        };
    }

    else if(lan==='pt'){
        return {
            type:'TO_EN',
        };
    }
}

export const toggleMenu = () => {

    return {
        type:'TOGGLE_MENU',
    }
}

