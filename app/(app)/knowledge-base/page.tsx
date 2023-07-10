import { HeroTitle } from '@/components/hero-titile';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Icons, Icon } from '../../../components/icons';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { DeleteIcon } from 'lucide-react';

const invoices = [
  {
    invoice: 'INV001',
    paymentStatus: 'Paid',
    totalAmount: '$250.00',
    paymentMethod: 'Credit Card'
  },
  {
    invoice: 'INV002',
    paymentStatus: 'Pending',
    totalAmount: '$150.00',
    paymentMethod: 'PayPal'
  },
  {
    invoice: 'INV003',
    paymentStatus: 'Unpaid',
    totalAmount: '$350.00',
    paymentMethod: 'Bank Transfer'
  },
  {
    invoice: 'INV004',
    paymentStatus: 'Paid',
    totalAmount: '$450.00',
    paymentMethod: 'Credit Card'
  },
  {
    invoice: 'INV005',
    paymentStatus: 'Paid',
    totalAmount: '$550.00',
    paymentMethod: 'PayPal'
  },
  {
    invoice: 'INV006',
    paymentStatus: 'Pending',
    totalAmount: '$200.00',
    paymentMethod: 'Bank Transfer'
  },
  {
    invoice: 'INV007',
    paymentStatus: 'Unpaid',
    totalAmount: '$300.00',
    paymentMethod: 'Credit Card'
  }
];

export default function KnowledgeBase() {
  return (
    <>
      <div className="pb-8 flex flex-row justify-between">
        <HeroTitle
          title="Your AI Knowledge Base"
          description="Out of the box, your AI has an impressive understanding of the world and can talk on a variety of topics. Knowledge Base is a way for you to supplement it with specific additional knowledge about your website, company, products etc."
          className='basis-9/12'
        />
        
        <Button>Manage Sources</Button>
        
      </div>
      <h1 className='mb-3'>Import from URL</h1>
      <div className="flex w-full items-center space-x-2">
        <Input
          type="email"
          placeholder="EmailURL address, e.g. https://getgpt.co"
          className=""
        />
        <Button type="submit" className='px-14'>Fetch</Button>
      </div>

      <div className="mt-8 shadow-orange-500 drop-shadow-md rounded-2xl overflow-hidden ">
        <Table className="bg-white text-left w-full ">
          <TableHeader>
            <TableRow className=''>
              <TableHead className="w-[100px]">Title</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Source</TableHead>
              <TableHead>Last Edited</TableHead>
              <TableHead className="text-right"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.invoice}>
                <TableCell className="font-medium">{invoice.invoice}</TableCell>
                <TableCell>{invoice.paymentStatus}</TableCell>
                <TableCell>{invoice.paymentMethod}</TableCell>
                <TableCell>{invoice.totalAmount}</TableCell>
                <TableCell className="text-right space-x-2 ">
                    <Button variant="outline" size="sm" className='h-7'>Retrain</Button>
                    <Button variant="destructive" size="icon" className='h-7 w-7' >
                      <Icons.delete className='h-4 w-4' />
                    </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
