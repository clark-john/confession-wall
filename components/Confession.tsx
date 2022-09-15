import React from 'react';
import { Stack, Grid, Box, Link, Flex, Button } from '@chakra-ui/react';
import { FaEnvelope, FaGlobe } from 'react-icons/fa';
import chroma from 'chroma-js';
import { ConfessionData } from 'utils/interfaces';

export const Confession: React.FC<ConfessionData> = ({ title, content, color, withWebsite, websiteLink, websiteName }) => {
	const isDark = chroma(color).hsl()[2] < 0.42;
	return (
		<Stack>
			<Grid bg={color} borderRadius={20} pt={3} pb={5} px={6} gap={3} color={isDark ? 'white' : 'black'} flexWrap="wrap">
				<Box pt={2} fontSize='1.5rem'> {title} </Box>
				<Box>
					{content} {' '}
				</Box>
				<Flex // @ts-ignore
					visibility={!withWebsite ? "hidden" : ""}
					alignItems="center"
					gap={1}
				>
					<FaGlobe />
					Link: {' '}
					<Link href={websiteLink} isExternal>
						<span className="link">
							<Button size='xs'>{websiteName}</Button>
						</span> 
					</Link> 
					<style jsx scoped>
						{`
							.link {
								color: ${isDark ? "white" : "black"} !important;
								transition: filter 150ms;
							}
							.link:hover {
								filter: brightness(.8)
							}
						`}
					</style>
				</Flex>
			</Grid>
		</Stack>
	);
};