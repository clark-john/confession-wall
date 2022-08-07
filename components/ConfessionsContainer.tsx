import { Confession } from './Confession'
import { Container, Grid, Box } from '@chakra-ui/react'

export const ConfessionsContainer = (props: any) => {
	const confs = props.confessionsArray
	const confessions = confs.map((conf: any) => {
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
		)
	})
	return (
		<Box mt={5}>
			<Grid 
				templateColumns='repeat(3, 30%)' 
				gap={7} 
				justifyContent='center'
			>
				{confessions.reverse()}
			</Grid>
		</Box>
	)
}
