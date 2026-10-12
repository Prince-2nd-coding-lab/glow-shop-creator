import { describe, expect, it } from 'vitest';
import { products, bagTotal, whatsappUrl } from '../lib/catalog';
describe('Isaro supplied catalog', () => {
 it('uses the supplied sunscreen price',()=>expect(products.find(p=>p.id==='sunscreen')?.price).toBe(36000));
 it('uses the supplied serum price',()=>expect(products.find(p=>p.id==='niacinamide')?.price).toBe(37000));
 it('uses the supplied dark spot cream price',()=>expect(products.find(p=>p.id==='dark-spots')?.price).toBe(29000));
 it('uses the supplied lip balm price',()=>expect(products.find(p=>p.id==='lip-balm')?.price).toBe(6900));
 it('does not invent prices for unpriced products',()=>expect(products.filter(p=>['vitamin-c','moisturizer'].includes(p.id)).map(p=>p.price)).toEqual([null,null]));
 it('totals selected quantities',()=>expect(bagTotal({sunscreen:2,'lip-balm':1})).toBe(78900));
 it('orders through the supplied WhatsApp number',()=>expect(whatsappUrl('Hello')).toBe('https://wa.me/250788964441?text=Hello'));
});
