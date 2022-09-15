import { Confession } from './Confession';
import { Container, Grid, Box, useMediaQuery } from '@chakra-ui/react';
import { ConfessionData } from 'utils/interfaces';
import React from 'react';

type Confessions = { confessionsArray: Array<ConfessionData> }

export const ConfessionsContainer: React.FC<Confessions> = ({ confessionsArray }) => {
	const [isMobile] = useMediaQuery("(max-width: 463px)");
	const confessions = confessionsArray.map((conf: any) => {
		return (
			<div key={conf.id}>
				<Confession 
					title={conf.title}
					content={conf.content}
					color={conf.color}  
					withWebsite={conf.withWebsite}
					websiteName={conf.websiteName}
					websiteLink={conf.websiteLink}
				/> 
			</div>
		);
	});
	return (
		<Box mt={5}>
			<Grid 
				templateColumns={`repeat(${isMobile ? "1, 100%" : "3, 30%"})`} 
				gap={7} 
				justifyContent='center'
				mx={10}
			>
				{confessions.reverse()}
			</Grid>
		</Box>
	);
};
