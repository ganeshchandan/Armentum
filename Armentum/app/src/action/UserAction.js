export function upadteTabSelection(value){
    return {
        type : "SELECT_HEADER_TAB",
        value : value
    }
}

export function upadteLinkSelection(value){
    return {
        type : "SELECT_LINK_HEADER",
        value : value
    }
}