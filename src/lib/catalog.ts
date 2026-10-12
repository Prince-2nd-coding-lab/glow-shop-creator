import lipBalm from '@/assets/lip-balm.asset.json';
import sunscreen from '@/assets/sunscreen.asset.json';
import darkSpots from '@/assets/dark-spots.asset.json';
import vitaminC from '@/assets/vitamin-c.asset.json';
import moisturizer from '@/assets/moisturizer.asset.json';
import niacinamide from '@/assets/niacinamide.asset.json';
export const products = [
 {id:'sunscreen',brand:'Beauty of Joseon',name:'Relief Sun Sunscreen',category:'Sun protection',description:'Your daily Korean sunscreen essential. Ask us about the best sun protection for your routine.',price:36000,oldPrice:45000,image:sunscreen.url,tag:'Everyday essential'},
 {id:'niacinamide',brand:'Anua',name:'Niacinamide 10% + TXA Serum',category:'Serums',description:'A niacinamide serum for oily and acne-prone skin. Chat with us about adding it to your skincare routine.',price:37000,oldPrice:41000,image:niacinamide.url,tag:'Skin favourite'},
 {id:'dark-spots',brand:'Arencia',name:'Dark Spot Correcting Cream',category:'Moisturizers',description:'Targeted care for the appearance of dark spots. Contact Isaro for product details and personalised guidance.',price:29000,oldPrice:32000,image:darkSpots.url,tag:'Targeted care'},
 {id:'lip-balm',brand:'Vaseline',name:'Lip Therapy Balm',category:'Lip care',description:'A little everyday care for your lips. Message us to check available varieties.',price:6900,oldPrice:10000,image:lipBalm.url,tag:'Little luxury'},
 {id:'vitamin-c',brand:'TruSkin',name:'Vitamin C Serum',category:'Serums',description:'Vitamin C skincare for your daily routine. Message us for current pricing and availability.',price:null,oldPrice:null,image:vitaminC.url,tag:'Glow essentials'},
 {id:'moisturizer',brand:'La Roche-Posay & CeraVe',name:'Daily Moisturizing Care',category:'Moisturizers',description:'Explore our La Roche-Posay and CeraVe skincare selection. Ask us for available products and prices.',price:null,oldPrice:null,image:moisturizer.url,tag:'Daily care'},
];
export type Product = typeof products[number];
export const formatPrice = (value:number) => `RWF ${value.toLocaleString('en-US')}`;
export const whatsappUrl = (message:string) => `https://wa.me/250788964441?text=${encodeURIComponent(message)}`;
export function bagTotal(bag:Record<string,number>) { return products.reduce((total,p)=>total+(p.price ?? 0)*(bag[p.id] ?? 0),0); }
