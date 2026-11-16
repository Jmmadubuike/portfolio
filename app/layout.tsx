import "./globals.css";
import type { Metadata, Viewport } from "next";
import WhatsAppLink from "@/components/WhatsAppLink";
const siteUrl="https://www.josephmmadubuike.com";
const title="Joseph Mmadubuike | Creator of Kwechiri & Systems Architect";
const description="Joseph Mmadubuike is the creator of Kwechiri, an Igbo-first programming language published on npm and available in VS Code, and a systems architect building African digital infrastructure.";

export const metadata:Metadata={metadataBase:new URL(siteUrl),title:{default:title,template:"%s | Joseph Mmadubuike"},description,applicationName:"Joseph Mmadubuike",authors:[{name:"Joseph Mmadubuike",url:siteUrl}],creator:"Joseph Mmadubuike",keywords:["Joseph Mmadubuike","Kwechiri","Kwechiri creator","Igbo-first programming language","Igbo programming language","Kwechiri npm","Kwechiri VS Code","systems architect","African digital infrastructure","BuzzBuntu","African technology"],alternates:{canonical:"/"},icons:{icon:"/images/brand/favicon.png",shortcut:"/images/brand/favicon.png",apple:"/images/brand/favicon.png"},manifest:"/manifest.webmanifest",openGraph:{type:"website",locale:"en_NG",url:"/",title,description,siteName:"Joseph Mmadubuike",images:[{url:"/opengraph-image",width:1200,height:630,alt:"Joseph Mmadubuike — Creator of Kwechiri and Systems Architect"}]},twitter:{card:"summary_large_image",title,description,creator:"@jmmadubuike",images:["/opengraph-image"]},robots:{index:true,follow:true,googleBot:{index:true,follow:true,"max-image-preview":"large","max-snippet":-1,"max-video-preview":-1}}};
export const viewport:Viewport={width:"device-width",initialScale:1,themeColor:"#07111F",colorScheme:"dark"};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body>{children}<WhatsAppLink/></body></html>}
