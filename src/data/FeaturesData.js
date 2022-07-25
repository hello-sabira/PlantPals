import React from 'react';
import { BsPhone } from 'react-icons/bs';

import { RiPlantFill } from 'react-icons/ri';
import { BsTrash } from 'react-icons/bs';
import { GiPaintedPottery } from 'react-icons/gi';
import { BiBookOpen } from 'react-icons/bi';
import { AiOutlineFileSearch } from 'react-icons/ai';
import { FaPhotoVideo } from 'react-icons/fa';

const iconStyle = (Icon) => <Icon size="3rem" color="#fefefe" />;

export const featuresData = [
	{
		name: 'PlantMe',
		description:
			'Planting seasonal trees through our sapling planting events.',
		icon: iconStyle(RiPlantFill),
		imgClass: 'one',
	},
	{
		name: 'CleanUp',
		description: 'Protecting and stewarding natural parks and open spaces through trash cleaning meetups.',
		icon: iconStyle(BsTrash),
		imgClass: 'two',
	},
	{
		name: 'Pottery',
		description: 'Connecting adults and children to mother nature through pottery lessons.',
		icon: iconStyle(GiPaintedPottery),
		imgClass: 'three',
	},
	{
		name: 'Education',
		description: 'Teaching the community how to fight climate change via meetings & workshops.',
		icon: iconStyle(BiBookOpen),
		imgClass: 'four',
	},
	{
		name: 'Research',
		description: 'Running crowdfunding campaigns for environmental research purposes.',
		icon: iconStyle(AiOutlineFileSearch),
		imgClass: 'five',
	},
	{
		name: 'Photography',
		description: 'Holding competitions to capture the beauty of nature.',
		icon: iconStyle(FaPhotoVideo),
		imgClass: 'six',
	},
];