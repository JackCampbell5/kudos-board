
export function catTranslate(category){
    switch (category) {
        case "all":
            return "Home"
        case "recent":
            return "Recent"
        case "celebration":
            return "Celebration"
        case "thanks":
            return "Thank You"
        case "inspo":
            return "Inspiration"
    }

}


export function convertToTitleCase(str) {
    if (!str) {
      return "";
    }
    return str.toLowerCase().replace(/\b\w/g, (s) => s.toUpperCase());
}
