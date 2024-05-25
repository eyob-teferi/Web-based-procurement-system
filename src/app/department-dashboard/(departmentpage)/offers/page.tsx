
import {useState, useEffect, Suspense} from 'react';

import {redirect, useRouter} from 'next/navigation'
import Link from 'next/link';

import map from 'lodash/map';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import GigCard from '@/app/ui/gig-card';
import { Gig } from './[id]/page';
import { cookies } from 'next/headers';


export async function getAllGigs(): Promise<Gig[] > {
   
    const cookieStore = cookies()
    const jwt = cookieStore.get('jwt')?.value;
      const res = await fetch('http://localhost:1323/department/gigs',{headers: {
        Cookie: `jwt=${jwt};`
    }})

 
  
      if (!res.ok) {
        //todo
      }
  
  
    
      return res.json()
    
   
    }


export default async function Home() {

  const gigs = await getAllGigs();

  console.log(gigs)
// const gigs: Gig[] = [
//     {
//         id: '1',
//         title: 'Gig 1',
//         description: 'Gig 1 description',
//         imagesUrls: ['https://a0.muscache.com/im/pictures/8efb200c-6dcb-460d-a367-caa511506077.jpg?im_w=960',
//         'https://a0.muscache.com/im/pictures/ae1b48e9-24e9-43fb-93f5-1c683d76259a.jpg?im_w=720',
//         'https://a0.muscache.com/im/pictures/fd08b331-2b46-4fb6-8f57-63687c4b2377.jpg?im_w=720',
//         'https://a0.muscache.com/im/pictures/27331726-bf50-40dd-8abc-ca9643f8f663.jpg?im_w=720'
// ],
// price:3000
//     },
//     {
//         id: '1',
//         title: 'Gig 1',
//         description: 'Gig 1 description',
//         imagesUrls: ['https://a0.muscache.com/im/pictures/8efb200c-6dcb-460d-a367-caa511506077.jpg?im_w=960',
//         'https://a0.muscache.com/im/pictures/ae1b48e9-24e9-43fb-93f5-1c683d76259a.jpg?im_w=720',
//         'https://a0.muscache.com/im/pictures/fd08b331-2b46-4fb6-8f57-63687c4b2377.jpg?im_w=720',
//         'https://a0.muscache.com/im/pictures/27331726-bf50-40dd-8abc-ca9643f8f663.jpg?im_w=720'
// ],
// price:3000
//     },
//     {
//         id: '1',
//         title: 'Gig 1',
//         description: 'Gig 1 description',
//         imagesUrls: ['https://a0.muscache.com/im/pictures/8efb200c-6dcb-460d-a367-caa511506077.jpg?im_w=960',
//         'https://a0.muscache.com/im/pictures/ae1b48e9-24e9-43fb-93f5-1c683d76259a.jpg?im_w=720',
//         'https://a0.muscache.com/im/pictures/fd08b331-2b46-4fb6-8f57-63687c4b2377.jpg?im_w=720',
//         'https://a0.muscache.com/im/pictures/27331726-bf50-40dd-8abc-ca9643f8f663.jpg?im_w=720'
// ],
// price:3000
//     },
// ]

  if(gigs.length === 0) {
    return <div className="flex justify-center items-center">There are no gigs</div>
  }
  console.log("gigs",gigs)


 

  return (
    <Box sx={{paddingTop:'170px', display:'flex', justifyContent:'center'}}>
      {/* <Suspense fallback={<Loading />}> */}
      <Grid container spacing={1} justifyContent={'center'}>

      {map(gigs, (gig, index) => {
        return( 
          <Grid key={index} item lg={3} md={4} sm={6} xs={12}>
          
                <GigCard id={gig.id} images={gig.imagesUrl} price={gig.price} title={gig.title} />
          
            </Grid>
        )
      })}
      </Grid>

  
 
      {/* </Suspense> */}
    </Box>
  )
}
