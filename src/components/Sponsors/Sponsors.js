
import React from 'react';
import { Container } from '../../globalStyles';
import {
	SponsorSection,
	SponsorColumn,
	SponsorText,
	SponsorTitle,
	SponsorRow,
	SponsorWrapper,
	SponsorImage,
	SponsorTextWrapper,
} from './SponsorStyles';
import { sponsorsData } from '../../data/SponsorsData';

const Sponsors = () => {
	return (
		<SponsorSection id="sponsors">
			<Container>
				<SponsorTextWrapper>
					<SponsorTitle>Our Sponsors</SponsorTitle>
					<SponsorText>We're empowered to have such reputed names supporting our mission.</SponsorText>
				</SponsorTextWrapper>

				<SponsorRow>
					{sponsorsData.map((sponsors, sponsorsIndex) => (
						<SponsorColumn key={sponsorsIndex}>
							{sponsors.map((el, index) => (
								<SponsorWrapper key={index}>
									<SponsorImage src={`./images/companies/${el.name}.png`} />
								</SponsorWrapper>
							))}
						</SponsorColumn>
					))}
				</SponsorRow>
			</Container>
		</SponsorSection>
	);
};

export default Sponsors;