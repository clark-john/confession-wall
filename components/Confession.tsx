import { Stack, Grid, Box, Link, Text } from '@chakra-ui/react'

export const Confession = (props: any) => {
	return (
		<Stack>
			<Grid bg={props.color} borderRadius={20} pt={3} pb={5} px={6} gap={3}>
				<Box pt={2} fontSize='1.5rem'> {props.title} </Box>
				<Box>
					{props.content}
				</Box>
				<Box // @ts-ignore
					visibility={!props.withWebsite ? "hidden" : ""}>
					Link: {' '}
					<Link href={props.websiteLink} isExternal>
						<span>{props.websiteName}</span> 
					</Link> 
				</Box>
			</Grid>
		</Stack>
	)
}
