import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Section, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"employers"} />
		<Helmet>
			<title>
				For employers | IAESTE Hamburg
			</title>
			<meta name={"description"} content={"IAESTE Hamburg offers students the opportunity for exclusive  international internships in engineering, science, and related fields. Run by univerity volunteers from Hamburg's universities , the local committee supports both outgoing students seeking placements abroad and incoming interns in Hamburg. They assist with accommodation, cultural activities, and administrative tasks, ensuring a smooth and enriching experience for all participants."} />
			<meta property={"og:title"} content={"For employers | IAESTE Hamburg"} />
			<meta property={"og:description"} content={"IAESTE Hamburg offers students the opportunity for exclusive  international internships in engineering, science, and related fields. Run by univerity volunteers from Hamburg's universities , the local committee supports both outgoing students seeking placements abroad and incoming interns in Hamburg. They assist with accommodation, cultural activities, and administrative tasks, ensuring a smooth and enriching experience for all participants."} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/670812fbe5d277001898861a/images/IAESTE.svg?v=2024-10-10T18:51:27.162Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/670812fbe5d277001898861a/images/IAESTE.svg?v=2024-10-10T18:51:27.162Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/670812fbe5d277001898861a/images/IAESTE.svg?v=2024-10-10T18:51:27.162Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/670812fbe5d277001898861a/images/IAESTE.svg?v=2024-10-10T18:51:27.162Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/670812fbe5d277001898861a/images/IAESTE.svg?v=2024-10-10T18:51:27.162Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/670812fbe5d277001898861a/images/IAESTE.svg?v=2024-10-10T18:51:27.162Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/670812fbe5d277001898861a/images/IAESTE.svg?v=2024-10-10T18:51:27.162Z"} />
			<meta name={"msapplication-TileColor"} content={"#2b79ea"} />
		</Helmet>
		<Components.IaesteHeader>
			<Override slot="image" src="https://uploads.quarkly.io/670812fbe5d277001898861a/images/Logo1.png?v=2024-10-10T18:58:50.598Z" id="logo" />
			<Override
				slot="overrideOverride3"
				id="menuentry"
				word-break="normal"
				className="menuentry"
				width="max-content"
			/>
			<Override slot="overrideOverride" width="max-content" />
		</Components.IaesteHeader>
		<Section padding="25px 0 75px 0" lg-padding="25px 0 25px 0" justify-content="center" quarkly-title="Hero">
			<Override
				slot="SectionContent"
				width="100%"
				margin="0px 32px 0px 32px"
				md-margin="0px 16px 0px 16px"
				min-width="auto"
			/>
			<Box
				sm-min-height="180px"
				width="100%"
				min-height="480px"
				align-items="center"
				justify-content="center"
				background="radial-gradient(at center,--color-darkL2 23.3%,rgba(0,0,0,0) 82.4%),linear-gradient(180deg,rgba(155, 108, 252, 0.15) 0%,transparent 100%) 0 0 no-repeat,--color-darkL2"
				md-min-height="360px"
				display="inline-block"
			>
				<Text
					justify-content="left"
					quarkly-title="Title"
					text-align="left"
					sm-text-align="center"
					md-font="--headline2"
					font="--headline2"
					margin="0px 0px 0px 0px"
					display="flex"
					align-items="center"
					color="--light"
					sm-font="normal 900 42px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
					lg-font="--headline2"
					position="relative"
					top="20px"
					left="20px"
				>
					Grow your company's
				</Text>
				<Text
					display="inline-block"
					position="relative"
					left="20px"
					top="20px"
					font="--headline3"
					color="#ffffff"
				>
					Cultural Capital
				</Text>
				<Text
					display="block"
					position="relative"
					left="20px"
					top="0px"
					color="#ffffff"
				>
					Social Impact
				</Text>
				<Text
					display="block"
					position="relative"
					left="20px"
					top="0px"
					color="#ffffff"
				>
					Global Business
				</Text>
			</Box>
		</Section>
		<Section
			border-color="--color-lightD2"
			border-style="solid"
			border-width="1px 0px 1px 0px"
			sm-padding="24px 0 24px 0"
			quarkly-title="About"
			box-sizing="border-box"
			background="--color-lightD1"
			padding="90px 0px 100px 0px"
			lg-padding="50px 0px 50px 0px"
			justify-content="center"
		>
			<Override
				slot="SectionContent"
				align-items="center"
				margin="0px 32px 0px 32px"
				width="100%"
				md-margin="0px 16px 0px 16px"
				min-width="auto"
			/>
			<Text
				color="--dark"
				lg-text-align="center"
				lg-margin="0px 0px 6px 0px"
				quarkly-title="Title"
				text-transform="uppercase"
				text-align="center"
				font="--base"
				opacity="0.6"
				letter-spacing="1px"
				margin="0px 0px 10px 0px"
			>
				OUR PROJECTS
			</Text>
			<Text
				text-align="center"
				width="85%"
				lg-font="--lead"
				sm-font="--base"
				font="--headline3"
				margin="0px 0px 0px 0px"
				letter-spacing="1px"
				color="--dark"
			>
				We’re a group of creatives who've built a business to make the world a better place.
			</Text>
		</Section>
		<Section lg-padding="60px 0 60px 0" quarkly-title="Info" justify-content="center" padding="100px 0 80px 0">
			<Override
				slot="SectionContent"
				width="100%"
				md-margin="0px 16px 0px 16px"
				min-width="auto"
				margin="0px 32px 0px 32px"
			/>
			<Box grid-gap="32px" grid-template-columns="2fr 3fr" lg-grid-template-columns="1fr" display="grid">
				<Box
					min-width="100px"
					min-height="100px"
					display="flex"
					flex-direction="column"
					align-items="flex-start"
				>
					<Text
						margin="0px 0px 10px 0px"
						color="--dark"
						opacity="0.6"
						lg-text-align="center"
						text-transform="uppercase"
						font="--base"
						letter-spacing="1px"
						lg-margin="0px 0px 6px 0px"
						quarkly-title="Title"
					>
						Web design
					</Text>
					<Text
						color="--dark"
						lg-text-align="center"
						md-margin="0px 0px 16px 0px"
						md-font="--headline3"
						font="--headline2"
						margin="0px 0px 28px 0px"
					>
						Project #1
					</Text>
					<Text
						md-font="--base"
						font="--lead"
						margin="0px 0px 20px 0px"
						color="--darkL2"
						opacity="0.6"
						lg-text-align="left"
					>
						It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.
					</Text>
					<Link
						margin="9px 0px 0px 0px"
						hover-transform="translateY(-4px)"
						transition="transform --transitionDuration-fast --transitionTimingFunction-easeInOut 0s"
						color="--light"
						padding="8px 18px 8px 18px"
						font="--base"
						letter-spacing="0.5px"
						text-align="center"
						href="/contact"
						text-decoration-line="initial"
						background="--color-primary"
					>
						I Want One Too!
					</Link>
				</Box>
				<Box
					transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
					lg-order="-1"
					width="100%"
					background="--color-lightD2 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-sea-first.svg?v=2020-11-06T16:37:39.391Z) center center/100% no-repeat"
					margin="0px 0px 0px 0px"
					padding="0px 0px 60% 0px"
					height="0px"
					hover-background="--color-lightD2 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-sea-first.svg?v=2020-11-06T16:37:39.391Z) center center/110% no-repeat"
				/>
			</Box>
			<Box
				display="grid"
				grid-gap="32px"
				grid-template-columns="2fr 3fr"
				margin="92px 0px 0px 0px"
				lg-grid-template-columns="1fr"
				lg-margin="56px 0px 0px 0px"
			>
				<Box
					min-width="100px"
					min-height="100px"
					display="flex"
					flex-direction="column"
					align-items="flex-start"
				>
					<Text
						quarkly-title="Title"
						font="--base"
						color="--dark"
						lg-margin="0px 0px 6px 0px"
						lg-text-align="center"
						margin="0px 0px 10px 0px"
						letter-spacing="1px"
						opacity="0.6"
						text-transform="uppercase"
					>
						Mobile app
					</Text>
					<Text
						margin="0px 0px 28px 0px"
						color="--dark"
						lg-text-align="center"
						md-margin="0px 0px 16px 0px"
						md-font="--headline3"
						font="--headline2"
					>
						Project #2
					</Text>
					<Text
						opacity="0.6"
						lg-text-align="left"
						md-font="--base"
						font="--lead"
						margin="0px 0px 20px 0px"
						color="--darkL2"
					>
						It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.
					</Text>
					<Link
						href="/contact"
						color="--light"
						letter-spacing="0.5px"
						margin="9px 0px 0px 0px"
						background="--color-primary"
						hover-transform="translateY(-4px)"
						transition="transform --transitionDuration-fast --transitionTimingFunction-easeInOut 0s"
						text-decoration-line="initial"
						padding="8px 18px 8px 18px"
						font="--base"
						text-align="center"
					>
						I Want One Too!
					</Link>
				</Box>
				<Box
					transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
					lg-order="-1"
					width="100%"
					background="--color-lightD2 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-sea-second.svg?v=2020-11-06T17:14:59.136Z) center center/100% no-repeat"
					margin="0px 0px 0px 0px"
					padding="0px 0px 60% 0px"
					height="0px"
					hover-background="--color-lightD2 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-sea-second.svg?v=2020-11-06T17:14:59.136Z) center center/110% no-repeat"
				/>
			</Box>
			<Box
				display="grid"
				grid-gap="32px"
				grid-template-columns="2fr 3fr"
				margin="92px 0px 0px 0px"
				lg-grid-template-columns="1fr"
				lg-margin="56px 0px 0px 0px"
			>
				<Box
					min-width="100px"
					min-height="100px"
					display="flex"
					flex-direction="column"
					align-items="flex-start"
				>
					<Text
						letter-spacing="1px"
						opacity="0.6"
						quarkly-title="Title"
						lg-margin="0px 0px 6px 0px"
						text-transform="uppercase"
						font="--base"
						margin="0px 0px 10px 0px"
						color="--dark"
						lg-text-align="center"
					>
						Web app
					</Text>
					<Text
						md-font="--headline3"
						font="--headline2"
						margin="0px 0px 28px 0px"
						color="--dark"
						lg-text-align="center"
						md-margin="0px 0px 16px 0px"
					>
						Project #3
					</Text>
					<Text
						lg-text-align="left"
						md-font="--base"
						font="--lead"
						margin="0px 0px 20px 0px"
						color="--darkL2"
						opacity="0.6"
					>
						It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.
					</Text>
					<Link
						background="--color-primary"
						text-decoration-line="initial"
						text-align="center"
						padding="8px 18px 8px 18px"
						font="--base"
						letter-spacing="0.5px"
						transition="transform --transitionDuration-fast --transitionTimingFunction-easeInOut 0s"
						margin="9px 0px 0px 0px"
						hover-transform="translateY(-4px)"
						href="/contact"
						color="--light"
					>
						I Want One Too!
					</Link>
				</Box>
				<Box
					background="--color-lightD2 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-sea-third.svg?v=2020-11-06T17:15:50.700Z) center center/100% no-repeat"
					margin="0px 0px 0px 0px"
					padding="0px 0px 60% 0px"
					height="0px"
					hover-background="--color-lightD2 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-sea-third.svg?v=2020-11-06T17:15:50.700Z) center center/110% no-repeat"
					transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
					lg-order="-1"
					width="100%"
				/>
			</Box>
		</Section>
		<Section
			box-sizing="border-box"
			quarkly-title="About"
			background="--color-lightD1"
			border-style="solid"
			border-color="--color-lightD2"
			lg-padding="50px 0px 50px 0px"
			padding="80px 0px 80px 0px"
			border-width="1px 0px 1px 0px"
			justify-content="center"
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
				grid-template-columns="1fr 2fr"
				lg-grid-template-columns="1fr"
				grid-gap="32px"
				width="100%"
			>
				<Text
					color="--darkL2"
					lg-margin="0px 0px 0px 0px"
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
				flex-direction="column"
				lg-min-height="420px"
				sm-min-height="280px"
				min-height="480px"
				padding="36px 24px 36px 24px"
				display="flex"
				align-items="center"
				justify-content="center"
				background="linear-gradient(180deg,rgba(24, 29, 34, 0.5) 0%,transparent 100%) 0 0 no-repeat,--color-lightD1 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-fireworks.svg?v=2020-11-06T17:22:27.801Z) center center/cover no-repeat"
				md-min-height="360px"
			>
				<Text
					font="--headline2"
					text-align="center"
					quarkly-title="Title"
					color="--light"
					md-font="--headline3"
					margin="10px 0px 15px 0px"
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
					margin="10px auto 0px auto"
					width="fit-content"
					color="--darkL2"
					transition="opacity .15s ease 0s"
					z-index="5"
					active-box-shadow="none"
					background="--color-light"
					opacity="1"
					md-font="--base"
					padding="8px 36px 8px 36px"
					letter-spacing="0.5px"
					position="relative"
					hover-box-shadow="none"
					font="--lead"
					hover-opacity=".85"
					focus-box-shadow="none"
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
				{"a {\n            color: white;\n        }\n#logo {\n            width: 160px;\n        }\n#menuentry {\n           width: max-content !important;\n        }"}
			</style>
		</RawHtml>
	</Theme>;
});