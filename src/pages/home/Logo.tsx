import * as React from "react"

import "./Logo.css"

export interface ILogoProps {
    className?: string
}

export default class Logo extends React.Component<ILogoProps, {}> {
    public shouldComponentUpdate() {
        return false
    }

    public render() {
        return this.getSvg()
    }

    private getSvg() {
        const subscriptStyles: React.CSSProperties = {
            fontStyle:"italic",
            fontVariant:"normal",
            fontWeight:400,
            fontStretch:"normal",
            fontSize:"36.5px",
            lineHeight:"125%",
            fontFamily:"'Courgette', cursive",  // this has to changed; TODO: make it from google fonts
            textAlign:"start"
        }

        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1052.36 744.09" className={"LogoSvg " + this.props.className}>
                <g transform="translate(0 -308.27)" id="layer1">
                    <path style={this.getSvgDelay()} className="particle geel" id="rect3614" d="M12.36 545.68l52.77-33.01 51.04-.43 53.68-16.17.08 53.28-157.94 14.86z" />
                    <path style={this.getSvgDelay()} className="particle rood" id="rect3617" d="M11.94 564.43l157.99-15.08v87.56l-50.05.45-3.05-69.14H68.85l-3.17 188.25-53.75-31.7z"/>
                    <path style={this.getSvgDelay()} className="particle groen" id="rect3620" d="M11.82 722.41l53.35 33.92v129.65l-53.95 23.6z" />
                    <path style={this.getSvgDelay()} className="particle blauw" id="rect3623" d="M11.22 909.59l53.95-23.6v100.33H11.22z" />
                    <path style={this.getSvgDelay()} className="particle groen" id="rect3626" d="M64.73 388.89l105.13 49.67-50.96 37 .44-13.07c-21.1-26.25-37.46-19.66-52.01-.4l-.7 48.95-54.44 37.74.21-109.7c4.69-30 24.63-47.2 52.33-50.2z"/>
                    <path style={this.getSvgDelay()} className="particle blauw" id="rect3629" d="M118.9 475.7l50.96-37.14-.13 57.44-52.7 15.68z" />
                    <path style={this.getSvgDelay()} className="particle blauw" id="rect3632" d="M64.73 388.89l56.62.19c22.37.07 44.88 30.88 48.46 49.45z" />
                    <path style={this.getSvgDelay()} id="rect3635" d="M207.31 544.47l54.5 1.03-.47 91.99-54.12-.48z" className="particle rood" />
                    <path style={this.getSvgDelay()} id="rect3638" d="M207.45 492.25l54-12.91-.1 66.16-53.98-1.13z" className="particle geel" />
                    <path style={this.getSvgDelay()} id="rect3641" d="M207.23 449.67l54.22 29.67-54 12.91z" className="particle groen" />
                    <path style={this.getSvgDelay()} id="rect3644" d="M207.42 388.9h56.09l-56.19 21.22z" className="particle geel" />
                    <path style={this.getSvgDelay()} id="rect3647" d="M207.32 410.12l54.95-21.62 1.15 17.02c76.98-3.8 90.78 11.26 101.76 38.14l-71.14 24.1c-10.52-4.54-20.6-7.22-32.04-6.87l-.55 18.64-54.22-29.86z" className="particle blauw" />
                    <path style={this.getSvgDelay()} id="rect3650" d="M294.04 467.76l71.14-24.1c4.03 21.69 2.05 53.43 2 80.36l-54.96-26.2c-.2-13.67-10.37-28.22-18.18-30.06z" className="particle geel" />
                    <path style={this.getSvgDelay()} id="rect3653" d="M312.22 497.81l55.1 26.27-54.96 10.15z" className="particle groen" />
                    <path style={this.getSvgDelay()} id="rect3656" d="M312.36 534.23l54.83-10.42-.45 211.4z" className="particle rood" />
                    <path style={this.getSvgDelay()} id="rect3659" d="M312.36 534.23l54.38 200.97-53.2 29.02z" className="particle groen" />
                    <path style={this.getSvgDelay()} id="rect3662" d="M313.54 764.22l53.2-29.02-.55 180.1-52.98 22.54z" className="particle blauw" />
                    <path style={this.getSvgDelay()} id="rect3665" d="M313.2 936.72l53-21.42v75.28l-51.5-1.28z" className="particle geel" />
                    <path style={this.getSvgDelay()} d="M464.8 413.78l98.7-25.24-1.14 53.24c-23.65-1.1-47.97-.1-68.77 4.51z" id="rect3793" className="particle geel" />
                    <path style={this.getSvgDelay()} d="M563.5 388.54l-142.05 36.33c26.4-26.78 70.16-43.51 142.04-36.33z" id="rect3798" className="particle blauw" />
                    <path style={this.getSvgDelay()} d="M421.44 424.87l43.36-11.09 28.72 32.44z" id="rect3823" className="particle rood" />
                    <path style={this.getSvgDelay()} d="M404.53 465.2c1.48-16.22 4.56-29.29 16.9-40.33l72.1 21.35c-22.8 6.14-36.6 27.73-38.36 69.93l-52.97-7.74z" id="rect3826" className="particle paars" />
                    <path style={this.getSvgDelay()} d="M402.2 508.41l52.97 7.74c-1.18 25.59 1.14 47.69 14.89 58.35l-67-32z" id="rect3829" className="particle rood" />
                    <path style={this.getSvgDelay()} d="M403.07 542.5l66.99 32c5.3 3.52 11.4 6.82 23.8 8.4l69.63 31.12v23.68c-108.02 20.64-161.47 3.37-160.42-95.2z" id="rect3832" className="particle groen" />
                    <path style={this.getSvgDelay()} d="M493.86 582.9c24.66 3.18 47.57 4.15 69.63 4.06v27.06z" id="rect3835" className="particle blauw" />
                    <path style={this.getSvgDelay()} d="M596.19 388.54h55.24v102.85l-55.24-19.17z" id="rect3838" className="particle geel" />
                    <path style={this.getSvgDelay()} d="M596.19 472.22l55.24 19.17-55.24 8.9z" id="rect3841" className="particle paars" />
                    <path style={this.getSvgDelay()} d="M596.19 500.29l55.24-8.9v109.36l-55.24-52.6z" id="rect3844" className="particle blauw" />
                    <path style={this.getSvgDelay()} d="M596.19 548.16l55.24 52.59-55.24 26.6z" id="rect3847" className="particle groen" />
                    <path style={this.getSvgDelay()} d="M596.19 627.35l55.24-25.3v35.65h-55.24z" id="rect3850" className="particle geel" />
                    <path style={this.getSvgDelay()} d="M686.75 434.42c2.97-14.87 10.9-37.77 44.59-44l65.08-.86c16.16 2.09 45.97 4 51.08 52.37l.3 28.05-55.44 7.24-.48-11.6c-.8-28.85-45.7-28.74-50.26-.42l-.2 17.72-54.65 7.84z" id="rect3853" className="particle geel" />
                    <path style={this.getSvgDelay()} d="M686.77 490.76l54.66-7.84-.36 32.06-54.23-15.02z" id="rect3856" className="particle rood" />
                    <path style={this.getSvgDelay()} d="M686.84 499.96l54.23 15.02-.46 41.35-52.94 34z" id="rect3859" className="particle groen" />
                    <path style={this.getSvgDelay()} d="M792.36 477.22l55.44-7.24.26 33.5-55.7 25.6z" id="rect3862" className="particle groen" />
                    <path style={this.getSvgDelay()} d="M792.36 529.07l55.7-25.59.32 40.6z" id="rect3865" className="particle geel" />
                    <path style={this.getSvgDelay()} d="M740.61 556.33l.81 7.85c-.5 30.17 51.4 32.24 51.12-.45l-.18-34.66 56.02 15.02V595c-1.48 24.45-14.79 43.87-50.55 43.89l-64.14.45c-41.1-1.06-43.71-34.8-46.02-49.01z" id="rect3868" className="particle paars" />
                    <path style={this.getSvgDelay()} className="particle paars" d="M883.06 546.02l54.5 1.03-.47 91.99-54.13-.48z" id="path3437" />
                    <path style={this.getSvgDelay()} className="particle geel" d="M883.2 493.8l54-12.72-.11 65.97-53.97-1.13z" id="path3439" />
                    <path style={this.getSvgDelay()} className="particle groen" d="M882.97 451.22l54.97 29.47-54.75 13.11z" id="path3441" />
                    <path style={this.getSvgDelay()} className="particle geel" d="M883.16 390.44h56.1l-56.2 21.23z" id="path3443" />
                    <path style={this.getSvgDelay()} className="particle blauw" d="M883.07 411.67L938 390.05l1.15 17.02c76.98-3.8 90.78 11.26 101.76 38.14l-71.13 24.1c-10.52-4.54-20.6-7.22-32.04-6.87l-.56 18.64-54.22-29.86z" id="path3445" />
                    <path style={this.getSvgDelay()} className="particle geel" d="M969.79 469.31l71.13-24.1c4.03 21.69 2.06 53.43 2.01 80.36l-54.11-27.06c.7-17.78-13.68-25.78-19.03-29.2z" id="path3447" />
                    <path style={this.getSvgDelay()} className="particle groen" d="M988.82 498.5l54.25 27.13-54.96 10.15z" id="path3449" />
                    <path style={this.getSvgDelay()} className="particle rood" d="M988.1 535.77l54.83-10.4-.45 211.38z" id="path3451" />
                    <path style={this.getSvgDelay()} className="particle groen" d="M988.1 535.78l54.38 200.97-53.2 29.02z" id="path3453" />
                    <path style={this.getSvgDelay()} className="particle blauw" d="M989.28 765.77l53.2-29.02-.54 180.1-52.99 22.54z" id="path3455" />
                    <path style={this.getSvgDelay()} className="particle geel" d="M988.95 938.27l52.99-21.42v75.28l-51.5-1.28z" id="path3457" />
                    <g id="g3767">
                        <path className="bottomWord" d="M380.91 850.37a70.84 70.84 0 0 0 0 8.27c1.6 18.64 11.05 29.58 24.87 29.58 6.23 0 10.86-3.52 14.13-8.56 2.53-3.9 4.2-8.84 4.2-14.74 0-.95-.13-1.43-.44-1.71-.19-.2-.3-.2-1.48-.2-1.17 0-1.3 0-1.48.2-.31.28-.43.66-.43 1.43 0 3.04-.74 6.46-1.85 9.12-1.92 4.47-5.06 7.42-8.7 8.37-.5.1-1.3.1-2.23.1-5.98 0-10.3-2.86-13.01-7.7-2.35-4.38-3.33-10.27-3.33-19.97s.98-15.6 3.33-19.97c2.71-4.85 7.1-7.7 12.95-7.7 1.3 0 1.6 0 2.22.19 3.46 1.04 5.99 3.99 7.72 8.27a33.03 33.03 0 0 1 2.46 10.36c.07.76.25 1.14.5 1.43.24.19.3.19 1.66.19 1.36 0 1.42 0 1.67-.2.37-.28.43.3.43-6.46v-13.12c0-6.75-.06-6.18-.43-6.47-.12-.19-.5-.19-.8-.19-.31 0-.68 0-.8.2-.07.09-1.18 1.52-2.41 3.04l-2.28 2.95c-.07 0-.25-.2-.44-.48a86.38 86.38 0 0 0-2.28-2.28 13.33 13.33 0 0 0-8.94-3.43c-13.95 0-23.2 10.84-24.8 29.48z" />
                        <path className="bottomWord" d="M452.36 887.17h.74v-5.9h-6.66v-24.34h3.58c3.82 0 4.2 0 5.06.48 1.79.95 3.2 3.23 3.82 6.18.31 1.43.37 2.19.37 7.6 0 5.52 0 6.1.31 7.7.25 1.06.68 2.39 1.05 3.24 1.97 4.19 6.1 6.09 13.02 6.09.62 0 1.3 0 1.54-.1 3.15-.85 5.61-4.75 5.8-9.7 0-.95-.06-1.33-.3-1.8-.26-.57-.38-.57-1.61-.57-1.24 0-1.36 0-1.6.57-.2.38-.32.66-.38 1.9-.18 2.47-1.17 4.85-2.9 4.85-2.1 0-3.33-1.71-4.07-4.95-.8-3.42-.86-10.84-1.42-13.4-.61-4-2.34-7.23-5.06-9.42-.37-.38-.61-.57-.55-.57a17.55 17.55 0 0 0 5.74-4.56 17.75 17.75 0 0 0 3.33-8.18c.06-.57.06-1.43.06-2.38 0-4-.8-6.56-2.16-9.13a16.72 16.72 0 0 0-12.22-8.46c-2.03-.38-3.02-.38-15.36-.38h-12.03v5.9h6.66v53.44h-6.66v5.9h.74c1.17-.3 8.4-.3 10.55-.3 2.16 0 9.44 0 10.61.3zm7.34-57.05c1 .95 1.42 1.9 1.8 3.52.36 1.61.36 2.37.36 6.18v2.09c0 5.99-1.85 8.75-5.12 9.6-1.3.48-1.72.48-6.1.57h-4.2v-24.24h6.05c3.2 0 5.3.19 7.21 2.28z" />
                        <path className="bottomWord" d="M501.93 850.66h-1.98V828.4h4.32c4.32 0 5.68.1 6.97.38 5.86 1.14 7.84 6.65 8.58 16.16.06.67.12 1.33.18 1.52v.38h3.83v-.38c-.31-1.04-1.6-22.53-1.92-23.58v-.38h-38.3v5.9h6.65v52.87h-6.66v5.9h39.36v-.3c.19-.28 2.66-26.62 2.84-26.9v-.29h-3.82c0 .2-.5 4.37-.62 5.42-.68 4.85-1.67 8.46-2.96 10.75-3.02 5.23-7.04 5.42-14.07 5.42h-4.38v-24.73h1.98c2.03.1 2.59.2 3.45.57 2.34 1.24 3.02 3.71 3.15 8.75v1.8h3.82v-28.14h-3.82v1.8c-.19 7.43-1.67 9.14-6.6 9.33z" />
                        <path className="bottomWord" d="M546.1 887.17h.6v-5.9h-2.77c-2.59 0-2.71 0-2.71-.18.06-.1.68-2.48 1.42-5.33l1.35-5.23h15.74l2.71 10.65c0 .1-1.23.1-2.71.1h-2.78v5.9h.8c1.11-.3 8.52-.3 10.68-.3 2.03 0 8.7 0 9.8.3h.68v-5.9h-3.2c-3.03 0-3.21 0-3.21-.2 0 0-15.06-58.76-15.61-59.42-.43-.77-.68-.86-2.28-.86-1.24 0-1.42 0-1.73.19-.19.1-.43.38-.56.67-.55.66-15.6 59.43-15.6 59.43 0 .19-.2.19-3.21.19h-3.21v5.9h.55c.87-.3 5.55-.3 7.1-.3 1.54 0 7.34 0 8.14.3zm5.8-22.53h-6.36c0-.1 6.1-23.68 6.23-24.16.06-.19.68 2.19 3.2 11.98l3.21 12.08-6.29.1z" />
                        <path className="bottomWord" d="M583.98 846.76v.57h3.83v-.57c.49-7.51.92-10.46 1.9-12.93a7.45 7.45 0 0 1 4.33-4.38c1.1-.47 1.6-.47 4.5-.57h2.72v52.4h-9.44v5.9h.98c1.48-.3 10.55-.3 13.27-.3 2.65 0 11.84 0 13.33.3h.98v-5.9h-9.44v-52.4h2.72c2.9.1 3.4.1 4.5.57a7.45 7.45 0 0 1 4.32 4.38c.99 2.47 1.42 5.42 1.91 12.93v.57h3.83v-.57l-1.3-23.2v-.57h-41.64v.57l-1.3 23.2z" />
                        <path className="bottomWord" d="M655.35 887.17h.8v-5.9h-7.03v-53.43h7.03v-5.9h-.8c-1.23.29-8.82.29-11.04.29-2.22 0-9.87 0-11.1-.29h-.81v5.9h7.03v53.44h-7.03v5.9h.8c1.24-.3 8.89-.3 11.1-.3 2.23 0 9.88 0 11.05.3z" />
                        <path className="bottomWord" d="M694.25 821.94h-.61v5.9h5.43l-5.87 20.82c-3.2 11.41-5.8 20.83-5.86 20.92l-5.92-20.73-5.86-21.01h5.43v-5.9h-.8c-1.11.29-8.64.29-10.74.29-2.03 0-8.33 0-9.5-.29h-.68v5.9h6.1l8.21 29.38c8.95 31.76 8.4 29.86 9.01 30.43l.37.19h3.15l.3-.2c.62-.56.07 1.34 9.02-30.42l8.2-29.38h6.1v-5.9h-.48c-.75.29-5.43.29-6.85.29-1.6 0-7.28-.1-8.15-.29z" />
                        <path className="bottomWord" d="M735.84 887.17h.8v-5.9h-7.03v-53.43h7.04v-5.9h-.8c-1.24.29-8.83.29-11.05.29-2.22 0-9.87 0-11.1-.29h-.8v5.9h7.03v53.44h-7.04v5.9h.8c1.24-.3 8.89-.3 11.11-.3 2.22 0 9.87 0 11.04.3z" />
                        <path className="bottomWord" d="M740.75 846.76v.57h3.83v-.57c.5-7.51.92-10.46 1.91-12.93a7.45 7.45 0 0 1 4.32-4.38c1.11-.47 1.6-.47 4.5-.57h2.72v52.4h-9.44v5.9h.99c1.48-.3 10.55-.3 13.26-.3 2.65 0 11.85 0 13.33.3h.98v-5.9h-9.44v-52.4h2.72c2.9.1 3.4.1 4.5.57a7.45 7.45 0 0 1 4.32 4.38c.99 2.47 1.42 5.42 1.91 12.93v.57H785v-.57l-1.3-23.2v-.57h-41.64v.57l-1.3 23.2z" />
                        <path className="bottomWord" d="M824.95 887.17h.8v-5.9h-6.72v-20.15l14.38-33.28h6.6v-5.9h-.5c-.8.29-5.49.29-6.97.29-1.54 0-7.46-.1-8.2-.29h-.62v5.9h2.35c1.23 0 2.28 0 2.28.1l-10.86 25.1-5.43-12.56c-2.96-6.94-5.43-12.55-5.43-12.64h4.63v-5.9h-.8c-1.24.29-8.95.29-11.17.29-2.04 0-8.64 0-9.81-.29h-.68v5.9h6.6l14.32 33.18v20.26h-6.67v5.9h.74c1.17-.3 8.46-.3 10.61-.3 2.16 0 9.38 0 10.55.3z" />
                    </g>
                    <text x="381.9" y="934.28" style={subscriptStyles}>
                        <tspan id="tspan3787" x="381.9" y="934.28">Glass - Jewelry - Decoration</tspan>
                    </text>
                </g>
            </svg>
        )
    }

    private getSvgDelay(): React.CSSProperties {
        return {
            animationDelay: (Math.random() * 1.5) + "s"
        }
    }
}