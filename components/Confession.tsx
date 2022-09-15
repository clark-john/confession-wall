import React from 'react';
import { Stack, Grid, Box, Link, Text } from '@chakra-ui/react';
import { FaEnvelope } from 'react-icons/fa';
import chroma from 'chroma-js';
import { ConfessionData } from 'utils/interfaces';

export const Confession: React.FC<ConfessionData> = ({ title, content, color, withWebsite, websiteLink, websiteName }) => (
	<Stack>
		<Grid bg={color} borderRadius={20} pt={3} pb={5} px={6} gap={3} color={chroma(color).hsv()[2] < 0.5 ? 'white' : 'black'} flexWrap="wrap">
			<Box pt={2} fontSize='1.5rem'> {title} </Box>
			<Box>
				{content}
			</Box>
			<Box // @ts-ignore
				visibility={!withWebsite ? "hidden" : ""}>
				Link: {' '}
				<Link href={websiteLink} isExternal>
					<span>{websiteName}</span> 
				</Link> 
			</Box>
		</Grid>
	</Stack>
);
