import ShowcaseData, { IData } from "./pages/common/ShowcaseData";

function InitProxy() {
    let showcaseData: IData[] = []

    // @ts-ignore
    if (window.SHOWCASE_DATA == undefined) { // only in test env
        showcaseData = [
            { url: "http://via.placeholder.com/350x150", name: "f1", description: "", keywords: ["mooi", "top"] },
            { url: "http://via.placeholder.com/150x275", name: "f2", description: "", keywords: ["mooi", "super"] },
            { url: "http://via.placeholder.com/390x200", name: "f3", description: "", keywords: ["lekker", "top"] },
            { url: "http://via.placeholder.com/100x300", name: "f4", description: "", keywords: ["mooi", "top"] },
            { url: "http://via.placeholder.com/300x100", name: "f5", description: "", keywords: ["lelijk", "mooi"] },
            { url: "http://via.placeholder.com/350x150", name: "f6", description: "", keywords: ["misschien", "ikweethetniet"] },
            { url: "http://via.placeholder.com/200x390", name: "f7", description: "", keywords: ["ikweethetniet", "top"] }
        ] as IData[]
    } else { // only in prod env
        // @ts-ignore
        showcaseData = window.SHOWCASE_DATA as IData[]
    }

    new ShowcaseData(showcaseData) // make data available for the hole application
}

export default InitProxy
export const initDataProxy =  InitProxy