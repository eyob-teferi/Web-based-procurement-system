

import {useState} from 'react';
import Image from 'next/image';
import { ReadonlyURLSearchParams, useSearchParams } from 'next/navigation';
import reduce from 'lodash/reduce';
import slice from 'lodash/slice';
import map from 'lodash/map';
import {} from 'lodash/'
// import { DateRange } from 'react-date-range';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Rating from '@mui/material/Rating';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import { AiFillStar, AiOutlineHeart } from 'react-icons/ai';
import {BiSolidMedal} from 'react-icons/bi';
import {BsDoorClosed} from 'react-icons/bs';
import {MdCalendarToday} from 'react-icons/md';
import {RiPencilRuler2Line} from 'react-icons/ri';
import { GoShare } from 'react-icons/go';
import { fetchWithCredentials } from '@/utils/fetcher';
import useSWR from 'swr';
import { cookies } from 'next/headers';



export interface Gig {
    
    id: string;
    supplierFirstName ?: string;
    supplierLastName ?: string;
    location ?: string
    supplierId: string;
    title: string;
    imagesUrl: string[];
    description: string;
    createdAt: Date;
    price: number;
}
async function getGigData(id:string): Promise<Gig> {
    const cookieStore = cookies()
    const jwt = cookieStore.get('jwt')?.value;

      const res = await fetch(`http://localhost:1323/department/gig/${id}`,  {headers: {
        Cookie: `jwt=${jwt};`
    }});
  
      if (!res.ok) {
        // Handle error
      }
  
      const gig: Gig = await res.json();
  
      
      
      const supplierRes = await fetch(`http://localhost:1323/department/supplier/${gig.supplierId}`,  {headers: {
          Cookie: `jwt=${jwt};`
        }});
  
        if (!supplierRes.ok) {
            // Handle error
        }
        
        const supplier: { firstName: string, lastName: string, location: string } = await supplierRes.json();
        gig.supplierFirstName = supplier.firstName
        gig.supplierLastName = supplier.lastName
        console.log("gg",gig)
  
          
        
  
        // Wait for all department details to be fetched
        return gig;
      
    

  }
const Page =async ({ params }: { params: { id: string } }) => {
    const gig = await getGigData(params.id)
    // const { data, error:err1, isLoading:loading1 } = useSWR(`http://localhost:1323/department/gig/${params.id}`, fetchWithCredentials); 
    console.log(gig)

    // const { data: supplier, error, isLoading } = useSWR(`http://localhost:1323/admin/department/supplier/${gig.supplierId}`, fetchWithCredentials); 
    // gig.supplierFirstName = supplier.firstName
    // gig.supplierLastName = supplier.lastName
    // gig.country = supplier.location

//   const roomData = {
//     id:32232,
//     description:{
//       title:'Modern fariytale holiday home',
//       info1:`Restaurant available from 8am till 10pm.
            
//       Food Range :
//       Breakfast - RM15
//       Lunch - RM15 - RM20
//       Dinner - RM25 - RM35`
//     },
//     roomType:'cabin',
//     isRentedEntirely:true,
//     rating:5,
//     city:'Stege',
//     country: 'Denmark',
//     images:['https://a0.muscache.com/im/pictures/8efb200c-6dcb-460d-a367-caa511506077.jpg?im_w=960',
//             'https://a0.muscache.com/im/pictures/ae1b48e9-24e9-43fb-93f5-1c683d76259a.jpg?im_w=720',
//             'https://a0.muscache.com/im/pictures/fd08b331-2b46-4fb6-8f57-63687c4b2377.jpg?im_w=720',
//             'https://a0.muscache.com/im/pictures/27331726-bf50-40dd-8abc-ca9643f8f663.jpg?im_w=720'
//   ],
//     price:2323,
//     checkIn: new Date(),
//     checkOut: new Date(),
//     hostedBy:'John Doe',
//     max_no_adults:6,
//     max_no_children:4,
//     max_no_infants:3,
//     max_no_pets:2,
//     numberOfBathRooms:4,
//     bedRooms:[
//       {
//        bed: [
//         {
//           isDouble:true
//         }
//        ]
//       },
//       {
//         bed: [
//           {
//             isDouble:true
//           },
//           {
//             isDouble:true
//           }
//          ]
//       },
//       {
//         bed: [
//           {
//             isDouble:true
//           }
//          ]
//       }
//     ],
//     offerings:[
//       {
//         name:'wifi',
//         svgLink:'/images/room/wifi.png'

//       },
//       {
//         name:'smoking',
//         isOffered:true,
//         svgLink:'/images/room/smoking.png'

//       },
//       {
//         name:'wifi',
//         isOffered:true,
//         svgLink:'/images/room/wifi.png'

//       },
//     ],
//     reviews:{
//       cleanliness:4,
//       communication:5,
//       checkIn:5,
//       accuracy:4,
//       location:3,
//       value:5,
//       reviewers:[
//         {
//         name:'john doe',
//         location:{
//           country:'United Kingdom',
//           city:'London'
//         },
//         ratedAt:new Date(2023, 7),
//         comment:'fantastic place bcbdhcbdshbcdshcbdhcbdcbdschjcdscvdcvsvcdsvcdcvsdchvjdhcvsdcvsdjcvshdcvsdjcvvcjdschjdcvhcvdcvdshjvdhjvsjh',
//         rating:5
//       }
//     ]
//     }

//   }


 
  return (
    <Box sx={{paddingTop:'90px', paddingX:'20px'}}>
      <Stack direction={'row'} justifyContent={'space-between'} sx={{marginBottom:'40px'}}>
        
      <Stack gap={1}>
        <Typography fontSize={'30px'} fontWeight={'bold'}>{gig.title}</Typography>
        <Stack direction={'row'} gap={0.5}>
          

          .
          <Stack direction={'row'} alignItems={'center'}>
            <BiSolidMedal />
            <Typography>Superhost</Typography>
          </Stack>
          .
            <Typography  sx={{ fontWeight:'bold'}}>{gig.country}</Typography>
        </Stack>
      </Stack>
      <Stack direction={'row'} gap={0.5} alignItems={'flex-end'}>
      

        <Stack direction={'row'} alignItems={'center'}  sx={{textDecoration: 'underline', cursor: 'pointer'}}>
          < AiOutlineHeart/>
          <Typography fontWeight={'bold'}>Save</Typography>
        </Stack>
        
      </Stack>
      </Stack>

   <Stack direction={'row'} gap={1} sx={{height:'280px'}}>
          <Box sx={{position:'relative',width:'50%'}}>

              <Image src={gig.imagesUrl[0]} alt={'image1'} fill={true} style={{borderRadius: '20px 0 0 20px'}} />
          </Box>
            
      
        
    

        <Stack gap={1} sx={{width:'50%'}}>
          <Stack gap={1} sx={{height:'50%'}} direction={'row'}>
            <Box sx={{position:'relative', width:'50%', height:'100%'}}>

              <Image src={gig.imagesUrl[1]} alt={'image2'} fill={true}/>
            </Box>
           
            <Box sx={{position:'relative', width:'50%', height:'100%'}}>

              <Image src={gig.imagesUrl[2]} alt={'image2'} fill={true} style={{borderRadius: '0 20px 20px 0'}}/>
            </Box>
        
          </Stack>
           
          <Stack gap={1} sx={{height:'50%'}} direction={'row'}>

              <Box sx={{position:'relative', width:'50%', height:'100%'}}>

              <Image src={gig.imagesUrl[3]} alt={'image2'} fill={true} />
            </Box>
         
            <Box sx={{position:'relative', width:'50%', height:'100%'}}>

              <Image src={gig.imagesUrl[3]} alt={'image2'} fill={true} style={{borderRadius: '0 20px 20px 0'}}/>
            </Box>
          </Stack>
        </Stack>
          

   </Stack>
   <Box sx={{position:'relative'}}>
   <Stack sx={{width:'60%', marginTop:'5px'}} >
      <Stack justifyContent={'space-between'} direction={'row'} sx={{marginBottom:'10px'}}>
    

     
      </Stack>
      <Divider/>

      <Stack spacing={2} sx={{paddingY:'13px'}}>
            <Stack alignItems={'flex-start'} direction={'row'} gap={4}>
              <RiPencilRuler2Line size={30}/>
              <Stack>
                <Typography fontWeight={'bold'}>Offered by</Typography>
                <Typography color={'grey'}>{gig.supplierFirstName} {gig.supplierLastName}</Typography>
              </Stack>
            </Stack>

         

      </Stack>
      <Divider />
       <Typography component={'pre'}>{gig.description}</Typography>
       <Divider sx={{marginY:'20px'}}/>
       <Stack>
       
      
          
         

          
            {/* <Typography>{daysDiff} nights in {roomData.city}</Typography>
            <Typography>{dateRange.startDate?.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })} - {dateRange.endDate?.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}</Typography>

            <DateRange
              months={2}
              ranges={[dateRange]}
              onChange={()=>{}}
              showDateDisplay={false}
              direction="horizontal"
            /> */}

       
       </Stack>
   </Stack>
      <Box sx={{ width:'40%',float: 'right',display:'flex', justifyContent:'center',
        position: 'sticky',bottom: 0, borderRadius:'15px', padding:'10px'}}>
        <Box sx={{width:'80%', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)', padding:'30px'}}>
          <Stack>
            <Stack justifyContent={'space-between'} direction={'row'}>
              <Typography fontWeight={'bold'}>Total: ${gig.price}</Typography>
              {/* <Typography>Total before tax</Typography> */}
            
              </Stack> 
    
{/*             
            <Button onClick= {() => {}} sx={{textTransform: 'capitalize',fontSize: '14px',
        fontWeight: 'bold',paddingY:'10px',marginY:'10px', color:'white',borderRadius:'20px', backgroundColor:'#ff385c', "&:hover": {
            backgroundColor: "#f2274c"}}}>Request</Button> */}
     
             {/* <Stack justifyContent={'space-between'} direction={'row'}> */}
              {/* /  <Typography onClick={() => {}} sx={{textDecoration: 'underline', cursor: 'pointer', fontWeight:'bold'}}>{roomData.price} X {daysDiff}</Typography> */}
                {/* <Typography>${roomData.price * daysDiff}</Typography> */}
            {/* </Stack>  */}
    
            <Divider sx={{marginY:'20px'}}/>
      
          </Stack>
         </Box>
        </Box> 
      </Box>
    </Box>
  )
}

export default Page;