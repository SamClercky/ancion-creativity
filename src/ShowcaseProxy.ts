import ShowcaseData, { IData } from "./pages/common/ShowcaseData";
import luster from "./luster.jpg"

function InitProxy() {
    let showcaseData: IData[] = []

    // @ts-ignore
    if (window.SHOWCASE_DATA == undefined) { // only in test env
        showcaseData = [
            { url: "http://via.placeholder.com/350x150", name: "f1", description: "", keywords: ["mooi", "top"], isBig: true },
            { url: "http://via.placeholder.com/150x275", name: "f2", description: "", keywords: ["mooi", "super"], isBig: true },
            { url: "http://via.placeholder.com/390x200", name: "f3", description: "", keywords: ["lekker", "top"], isBig: true },
            { url: "http://via.placeholder.com/100x300", name: "f4", description: "", keywords: ["mooi", "top"], isBig: true },
            { url: "http://via.placeholder.com/300x100", name: "f5", description: "", keywords: ["lelijk", "mooi"], isBig: true },
            { url: "http://via.placeholder.com/350x150", name: "f6", description: "", keywords: ["misschien", "ikweethetniet"], isBig: true },
            { url: "http://via.placeholder.com/200x390", name: "f7", description: "", keywords: ["ikweethetniet", "top"], isBig: false },
            { url: luster, name: "Tuinluster", description: "Ik heb de oude luster ontmanteld en in de tuin gehangen. Om het een beetje vrolijker te maken, heb ik er gekleurde glaasjes op gesoldeerd. 's Avonds verlichten de kaarsjes de luster op. Deze luster is nog niet klaar. Ik zou ze nog graag in het zwart verven.", keywords: ["luster", "glas", "tuindecoratie", "lichtjes", "kaarsen"], isBig: true}
        ] as IData[]
    } else { // only in prod env
        // @ts-ignore
        showcaseData = window.SHOWCASE_DATA as IData[]
    }
    showcaseData = showcaseData.reverse()

    new ShowcaseData(showcaseData) // make data available for the hole application
}

export default InitProxy
export const initDataProxy =  InitProxy