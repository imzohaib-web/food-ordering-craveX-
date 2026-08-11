import { CheckCircle2, Flame, Truck, PackageCheck } from 'lucide-react';

export const ORDER_STATUS_STEPS = [
  {
    id: 'received',
    stepNumber: '01',
    label: 'Order Received',
    title: 'Your order has been received!',
    description: 'We have received your order and sent it to our kitchen.',
    icon: CheckCircle2,
  },
  {
    id: 'preparing',
    stepNumber: '02',
    label: 'Preparing',
    title: '🔥 Our kitchen is working its magic!',
    description: 'Your food is being prepared fresh with quality ingredients.',
    icon: Flame,
  },
  {
    id: 'out_for_delivery',
    stepNumber: '03',
    label: 'Out for Delivery',
    title: '🚀 Your order is on the way!',
    description: 'Our rider has picked up your meal and is speeding to your doorstep.',
    icon: Truck,
  },
  {
    id: 'delivered',
    stepNumber: '04',
    label: 'Delivered',
    title: '🎉 Enjoy your CraveX meal!',
    description: 'Your order has been delivered successfully. Bon appétit!',
    icon: PackageCheck,
  },
];

export function getStatusIndex(statusId) {
  const normalized = (statusId || '').toLowerCase().replace(/\s+/g, '_');
  const index = ORDER_STATUS_STEPS.findIndex((s) => s.id === normalized);
  return index >= 0 ? index : 0;
}
