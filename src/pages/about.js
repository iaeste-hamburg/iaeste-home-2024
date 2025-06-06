import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Section, Icon, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
import { FaRegGem, FaRegLifeRing, FaRegCalendarCheck, FaRegStar } from "react-icons/fa";
import { MdFace } from "react-icons/md";
import { AiOutlineThunderbolt } from "react-icons/ai";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"about"} />
		<Helmet>
			<title>
				About | Website Example
			</title>
			<meta name={"description"} content={"It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference."} />
			<meta property={"og:title"} content={"About | Website Example"} />
			<meta property={"og:description"} content={"It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference."} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/website-example-quarkly.png?v=2020-11-05T19:48:01.806Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/670812fbe5d277001898861a/images/IAESTE.svg?v=2024-10-10T18:51:27.162Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/670812fbe5d277001898861a/images/IAESTE.svg?v=2024-10-10T18:51:27.162Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/670812fbe5d277001898861a/images/IAESTE.svg?v=2024-10-10T18:51:27.162Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/670812fbe5d277001898861a/images/IAESTE.svg?v=2024-10-10T18:51:27.162Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/670812fbe5d277001898861a/images/IAESTE.svg?v=2024-10-10T18:51:27.162Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/670812fbe5d277001898861a/images/IAESTE.svg?v=2024-10-10T18:51:27.162Z"} />
			<meta name={"msapplication-TileColor"} content={"#2b79ea"} />
		</Helmet>
		<Components.IaesteHeader>
			<Override slot="image" src="https://uploads.quarkly.io/670812fbe5d277001898861a/images/Logo1.png?v=2024-10-10T18:58:50.598Z" width="160px" />
			<Override slot="overrideOverride4" width="auto">
				Outgoing
				<br />
				(for students)
			</Override>
			<Override slot="overrideOverride" width="110px" />
		</Components.IaesteHeader>
		<Section quarkly-title="Hero" padding="25px 0 75px 0" lg-padding="25px 0 25px 0" justify-content="center">
			<Override
				slot="SectionContent"
				min-width="auto"
				width="100%"
				margin="0px 32px 0px 32px"
				md-margin="0px 16px 0px 16px"
			/>
			<Box
				align-items="center"
				display="flex"
				justify-content="center"
				background="radial-gradient(at center,--color-darkL2 23.3%,rgba(0,0,0,0) 82.4%),linear-gradient(180deg,rgba(155, 108, 252, 0.15) 0%,transparent 100%) 0 0 no-repeat,--color-darkL2"
				md-min-height="360px"
				sm-min-height="180px"
				width="100%"
				min-height="480px"
			>
				<Text
					font="--headline1"
					margin="0px 0px 0px 0px"
					quarkly-title="Title"
					sm-text-align="center"
					text-align="center"
					md-font="--headline2"
					display="flex"
					align-items="center"
					color="--light"
					justify-content="center"
					sm-font="normal 900 42px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
					lg-font="--headline2"
				>
					About Us.
				</Text>
			</Box>
		</Section>
		<Section
			padding="90px 0px 100px 0px"
			background="--color-lightD1"
			border-style="solid"
			lg-padding="50px 0px 50px 0px"
			justify-content="center"
			quarkly-title="About"
			box-sizing="border-box"
			border-width="1px 0px 1px 0px"
			md-padding="50px 0px 50px 0px"
			sm-padding="0px 0 0px 0"
			border-color="--color-lightD2"
		>
			<Override
				slot="SectionContent"
				sm-padding="24px 0px 24px 0px"
				width="100%"
				md-margin="0px 16px 0px 16px"
				min-width="auto"
				align-items="center"
				margin="0px 32px 0px 32px"
			/>
			<Text
				opacity="0.6"
				letter-spacing="1px"
				margin="0px 0px 10px 0px"
				lg-text-align="center"
				font="--base"
				color="--dark"
				lg-margin="0px 0px 6px 0px"
				quarkly-title="Title"
				text-transform="uppercase"
				text-align="center"
			>
				Who we are
			</Text>
			<Text
				letter-spacing="1px"
				color="--dark"
				text-align="center"
				width="85%"
				lg-font="--lead"
				sm-font="--base"
				font="--headline3"
				margin="0px 0px 0px 0px"
			>
				We’re a group of creatives who've built a business to make the world a better place.
			</Text>
		</Section>
		<Section
			box-sizing="border-box"
			padding="100px 0px 100px 0px"
			quarkly-title="Our Services"
			xl-padding="100px 0px 100px 0px"
			lg-padding="50px 0px 50px 0px"
			justify-content="center"
		>
			<Override
				slot="SectionContent"
				width="100%"
				margin="0px 32px 0px 32px"
				md-margin="0px 16px 0px 16px"
				min-width="auto"
				align-items="center"
			/>
			<Text
				letter-spacing="1px"
				lg-margin="0px 0px 6px 0px"
				quarkly-title="Title"
				margin="0px 0px 10px 0px"
				color="--dark"
				opacity="0.6"
				text-align="center"
				text-transform="uppercase"
				lg-text-align="center"
				font="--base"
			>
				WHAT WE DO BEST
			</Text>
			<Text
				lg-margin="0px 0px 48px 0px"
				md-font="--headline3"
				sm-margin="0px 0px 36px 0px"
				font="--headline2"
				margin="0px 0px 72px 0px"
				color="--dark"
				text-align="center"
				lg-text-align="center"
			>
				Our Services
			</Text>
			<Box
				grid-template-columns="repeat(3, 1fr)"
				lg-grid-template-columns="repeat(2, 1fr)"
				md-grid-template-columns="1fr"
				width="100%"
				display="grid"
				grid-gap="32px"
			>
				<Box display="flex" flex-direction="column" align-items="center" justify-content="center">
					<Icon
						category="fa"
						icon={FaRegGem}
						size="82px"
						margin="0px 0px 19px 0px"
						font="36px sans-serif"
						color="--primary"
					/>
					<Text color="--darkL2" font="--lead" margin="0px 0px 10px 0px" display="inline-block">
						High Quality
					</Text>
					<Text
						lg-text-align="center"
						text-align="center"
						font="--base"
						margin="0px 0px 0px 0px"
						display="inline-block"
						opacity="0.6"
						color="--darkL2"
					>
						It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger.
					</Text>
				</Box>
				<Box display="flex" flex-direction="column" align-items="center" justify-content="center">
					<Icon
						category="fa"
						icon={FaRegLifeRing}
						size="82px"
						margin="0px 0px 19px 0px"
						font="36px sans-serif"
						color="--primary"
					/>
					<Text font="--lead" margin="0px 0px 10px 0px" display="inline-block" color="--darkL2">
						Best Support
					</Text>
					<Text
						opacity="0.6"
						color="--darkL2"
						lg-text-align="center"
						text-align="center"
						font="--base"
						margin="0px 0px 0px 0px"
						display="inline-block"
					>
						It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger.
					</Text>
				</Box>
				<Box justify-content="center" display="flex" flex-direction="column" align-items="center">
					<Icon
						font="36px sans-serif"
						color="--primary"
						category="md"
						icon={MdFace}
						size="82px"
						margin="0px 0px 19px 0px"
					/>
					<Text font="--lead" margin="0px 0px 10px 0px" display="inline-block" color="--darkL2">
						Personal Approach
					</Text>
					<Text
						text-align="center"
						font="--base"
						margin="0px 0px 0px 0px"
						display="inline-block"
						opacity="0.6"
						color="--darkL2"
						lg-text-align="center"
					>
						It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger.
					</Text>
				</Box>
				<Box display="flex" flex-direction="column" align-items="center" justify-content="center">
					<Icon
						category="fa"
						icon={FaRegCalendarCheck}
						size="82px"
						margin="0px 0px 19px 0px"
						font="36px sans-serif"
						color="--primary"
					/>
					<Text font="--lead" margin="0px 0px 10px 0px" display="inline-block" color="--darkL2">
						Flexible Schedule
					</Text>
					<Text
						font="--base"
						margin="0px 0px 0px 0px"
						display="inline-block"
						opacity="0.6"
						color="--darkL2"
						lg-text-align="center"
						text-align="center"
					>
						It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger.
					</Text>
				</Box>
				<Box display="flex" flex-direction="column" align-items="center" justify-content="center">
					<Icon
						font="36px sans-serif"
						color="--primary"
						category="fa"
						icon={FaRegStar}
						size="82px"
						margin="0px 0px 19px 0px"
					/>
					<Text color="--darkL2" font="--lead" margin="0px 0px 10px 0px" display="inline-block">
						Extensive Experience
					</Text>
					<Text
						margin="0px 0px 0px 0px"
						display="inline-block"
						opacity="0.6"
						color="--darkL2"
						lg-text-align="center"
						text-align="center"
						font="--base"
					>
						It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger.
					</Text>
				</Box>
				<Box display="flex" flex-direction="column" align-items="center" justify-content="center">
					<Icon
						color="--primary"
						category="ai"
						icon={AiOutlineThunderbolt}
						size="82px"
						margin="0px 0px 19px 0px"
						font="36px sans-serif"
					/>
					<Text font="--lead" margin="0px 0px 10px 0px" display="inline-block" color="--darkL2">
						Better Efficiency
					</Text>
					<Text
						font="--base"
						margin="0px 0px 0px 0px"
						display="inline-block"
						opacity="0.6"
						color="--darkL2"
						lg-text-align="center"
						text-align="center"
					>
						It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger.
					</Text>
				</Box>
			</Box>
		</Section>
		<Section
			padding="80px 0px 80px 0px"
			quarkly-title="About"
			background="--color-lightD1"
			lg-padding="50px 0px 50px 0px"
			justify-content="center"
			box-sizing="border-box"
			border-width="1px 0px 1px 0px"
			border-style="solid"
			border-color="--color-lightD2"
		>
			<Override
				slot="SectionContent"
				align-items="center"
				width="100%"
				margin="0px 32px 0px 32px"
				md-margin="0px 16px 0px 16px"
				min-width="auto"
			/>
			<Box
				display="grid"
				grid-gap="32px"
				grid-template-columns="repeat(3, 1fr)"
				width="100%"
				lg-grid-template-columns="1fr"
			>
				<Text
					color="--darkL2"
					lg-margin="0px 0px 0px 0px"
					md-font="--lead"
					font="--headline3"
					margin="0px 0px 10px 0px"
					display="inline-block"
				>
					Hi! I'm a paragraph.{" "}
				</Text>
				<Text
					display="inline-block"
					opacity="0.6"
					color="--darkL2"
					lg-text-align="left"
					text-align="left"
					font="--base"
					margin="0px 0px 0px 0px"
				>
					Click here to add your own text and edit me. It’s a piece of cake. I’m a great space for you to tell a story and let your site visitors know more about you. Talk about your business and what products and services you offer.
				</Text>
				<Text
					margin="0px 0px 0px 0px"
					display="inline-block"
					opacity="0.6"
					color="--darkL2"
					lg-text-align="left"
					text-align="left"
					font="--base"
				>
					Share how you came up with the idea for your company and what makes you different from your competitors. Make your business stand out and show your visitors who you are.
				</Text>
			</Box>
		</Section>
		<Section
			padding="75px 0 50px 0"
			lg-padding="50px 0 25px 0"
			lg-height="auto"
			justify-content="center"
			quarkly-title="USP"
		>
			<Override
				slot="SectionContent"
				width="100%"
				margin="0px 32px 0px 32px"
				md-margin="0px 16px 0px 16px"
				min-width="auto"
			/>
			<Box
				min-height="480px"
				display="flex"
				justify-content="center"
				background="linear-gradient(180deg,rgba(24, 29, 34, 0.5) 0%,transparent 100%) 0 0 no-repeat,--color-lightD1 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-fireworks.svg?v=2020-11-06T17:22:27.801Z) center center/cover no-repeat"
				lg-min-height="420px"
				sm-min-height="280px"
				padding="36px 24px 36px 24px"
				align-items="center"
				flex-direction="column"
				md-min-height="360px"
			>
				<Text
					margin="10px 0px 15px 0px"
					font="--headline2"
					text-align="center"
					quarkly-title="Title"
					color="--light"
					md-font="--headline3"
				>
					Make It Work.
				</Text>
				<Text
					margin="0px 0px 28px 0px"
					font="--lead"
					opacity="0.6"
					text-align="center"
					quarkly-title="Description"
					color="--light"
					max-width="720px"
				>
					Good design adds value faster than it adds cost.
				</Text>
				<Button
					letter-spacing="0.5px"
					transition="opacity .15s ease 0s"
					z-index="5"
					margin="10px auto 0px auto"
					padding="8px 36px 8px 36px"
					position="relative"
					opacity="1"
					hover-opacity=".85"
					hover-box-shadow="none"
					active-box-shadow="none"
					width="fit-content"
					font="--lead"
					focus-box-shadow="none"
					md-font="--base"
					color="--darkL2"
					background="--color-light"
				>
					Start Now
				</Button>
			</Box>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"670f7a17b153825dca7dd82d"}>
				{"a {\n            color: white;\n        }"}
			</style>
		</RawHtml>
	</Theme>;
});