'use client'
import React, { useState, useEffect } from 'react';
import { Department } from '../admin-dashboard/(adminpage)/setbudget/page';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface Requisition {
 id: string;
 itemName: string;
 // Add more properties as per the actual Requisition type
}

interface BidTableProps {
 departments: Department[];
}

const BidTable: React.FC<BidTableProps> = (props) => {
 const [requisitions, setRequisitions] = useState<Requisition[]>([]);
 const [expanded, setExpanded] = useState<string | false>(false);
 const router = useRouter()

 const getRequisitions = async (id: string): Promise<Requisition[]> => {
   try {
     const res = await fetch(`http://localhost:1323/admin/requistions/${id}`, {
       method: 'GET',
       credentials: 'include'
     });
     
     if (!res.ok) {
       throw new Error('Failed to fetch requisitions for the department');
     }

     const requisitionsData: Requisition[] = await res.json();
     return requisitionsData;
   } catch (error) {
     console.error('Error fetching requisitions:', error);
     return [];
   }
 };

 const handleChange = (panel: string, departmentId: string) => async (
   event: React.ChangeEvent<{}>,
   isExpanded: boolean
 ) => {
   if (expanded !== panel) {
     const requisitionsData = await getRequisitions(departmentId);
     setRequisitions(requisitionsData);
   }
   setExpanded(isExpanded ? panel : false);
 };

 return (
   <>
     {props.departments.map((department, index) => (
       <Accordion
       className='mb-2'
         key={index}
         expanded={expanded === department.id}
         onChange={handleChange(department.id, department.id)}
       >
         <AccordionSummary expandIcon={<ExpandMoreIcon />}>
           <span>{department.departmentName} requisitions</span>
         </AccordionSummary>
         <AccordionDetails>
           
             {requisitions.map((req, index) => (
               <Link className='block' key={index} href={`admin-dashboard/bids/${req.id}`}>{req.itemName}</Link>
             ))}
           
         </AccordionDetails>
       </Accordion>
     ))}
   </>
 );
};

export default BidTable;
