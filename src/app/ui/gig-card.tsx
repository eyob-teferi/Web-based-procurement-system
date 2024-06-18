'use client'
import {useState} from 'react';
import { useSearchParams } from 'next/navigation'
import Image from 'next/image';
import Link from 'next/link';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { AiFillStar, AiOutlineRight, AiOutlineLeft, AiOutlineHeart } from 'react-icons/ai';

interface GigCardProps {
    id: string,
    images: string[],
 

    price: number,

    title?: string

}
const GigCard = (props: GigCardProps) => {
    const [displayedImage, setDisplayedImage] = useState(0);
   

    

  return (
      <Box sx={{width:'250px', height:'fit-content', position:'relative', display:'flex', justifyContent:'center'}}>
            <IconButton sx={{position:'absolute', right:0, zIndex:5}}>
                <AiOutlineHeart color='white' />
            </IconButton>
            <IconButton  onClick={() => {
                    if(displayedImage <= 0) {
                        return;
                    }
                    setDisplayedImage(displayedImage - 1);
                }}  sx={{position:'absolute', left:0, top: '50%',  transform: 'translateY(-50%)', zIndex:5 }}>
                <AiOutlineLeft color='white' />
                </IconButton>
                <IconButton onClick={() => {
                    if(displayedImage == props.images?.length-1) {
                        return;
                    }
                    setDisplayedImage(displayedImage + 1);
                }}  sx={{position:'absolute', right:0, top: '50%',  transform: 'translateY(-50%)', zIndex:5}}>
                <AiOutlineRight color='white'/>
                </IconButton>
        <Link href={`/department-dashboard/offers/${props.id}`}>

    <Stack>
            <Box sx={{width:'250px', height:'250px', position:'relative'}}>
                <Image 
                    src={props.images[displayedImage]}
                    style={{objectFit: "cover"}}
                    alt='image'
                    fill={true}
                />

            </Box>
            {/* <Stack justifyContent={'space-between'} direction={'row'}>
                <Typography fontWeight={'bold'}>{props.city}, {props.country}</Typography>
                <Stack gap={0.5} direction={'row'} alignItems={'center'}>
                    <AiFillStar />
                    <Typography>{props.rating}</Typography>
                </Stack>
            </Stack> */}
            <Typography color={'grey'} variant='body2'>{props.title}</Typography>
            <Typography   sx={{textDecoration: 'underline'}} onClick={() => {}}><strong>${props.price}</strong> total before taxes</Typography>
    </Stack>
</Link>
    </Box>
  )
}

export default GigCard