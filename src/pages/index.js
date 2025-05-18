import React from "react";
import theme from "theme";
import { Theme, Link, Strong, Text, Section, Box, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Home | IAESTE Hamburg
			</title>
			<meta name={"description"} content={"IAESTE Hamburg offers students the opportunity for exclusive  international internships in engineering, science, and related fields. Run by univerity volunteers from Hamburg's universities , the local committee supports both outgoing students seeking placements abroad and incoming interns in Hamburg. They assist with accommodation, cultural activities, and administrative tasks, ensuring a smooth and enriching experience for all participants."} />
			<meta property={"og:title"} content={"Home | IAESTE Hamburg"} />
			<meta property={"og:description"} content={"IAESTE Hamburg offers students the opportunity for exclusive  international internships in engineering, science, and related fields. Run by univerity volunteers from Hamburg's universities , the local committee supports both outgoing students seeking placements abroad and incoming interns in Hamburg. They assist with accommodation, cultural activities, and administrative tasks, ensuring a smooth and enriching experience for all participants."} />
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
			<Override
				slot="button"
				type="link"
				href="#footer"
				text-decoration-line="initial"
				text-align="center"
				position="static"
				padding="auto 18px 0 18px"
				height="max-content"
			>
				Contact Us
			</Override>
			<Override slot="overrideOverride" width="max-content" />
			<Override slot="SectionContent" height="initial" />
		</Components.IaesteHeader>
		<Section
			lg-padding="25px 0 25px 0"
			sm-padding="0px 0 25px 0"
			justify-content="center"
			padding="25px 0 33px 0"
			sm-align-items="center"
			sm-justify-content="center"
			quarkly-title="Hero"
		>
			<Override
				slot="SectionContent"
				md-margin="0px 16px 0px 16px"
				width="100%"
				background="linear-gradient(180deg,rgba(76, 10, 213, 0.2) 0%,transparent 100%) 0 0 no-repeat,#191C23 url(https://uploads.quarkly.io/670812fbe5d277001898861a/images/small_jonas-tebbe-j22K61_1peg-unsplash-33fec401.jpg?v=2024-10-10T18:33:14.058Z) center center/cover repeat scroll padding-box"
				height="620px"
				justify-content="flex-start"
				sm-width="100%"
				min-width="auto"
				margin="0px 32px 0px 32px"
				align-items="flex-end"
				lg-height="520px"
				md-height="420px"
				md-padding="0px 24px 0px 24px"
				overflow="visible"
				display="flex"
				flex-direction="column"
				flex-wrap="no-wrap"
				padding="0px 0px 0px 6vh"
			/>
			<Text
				font="normal 500 60px/1.5 --fontFamily-googleNunitoSans"
				margin="12vh 0px 0px 0px"
				sm-text-align="center"
				sm-width="80%"
				lg-text-align="center"
				lg-font="--headline2"
				color="rgb(11, 61, 89,1)"
				background="rgba(0,0,0, 0)"
			>
				<Strong>
					IAESTE Hamburg
				</Strong>
			</Text>
			<Text
				sm-text-align="center"
				sm-width="80%"
				md-text-align="center"
				font="normal 400 24px/1.5 --fontFamily-googleNunitoSans"
				color="rgb(11, 61, 89)"
				margin="10px 0px 35px 0px"
				text-transform="uppercase"
			>
				Work. Experience. Discover.
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
			</Text>
		</Section>
		<Section
			padding="0 0px 0px 0px"
			quarkly-title="Works"
			box-sizing="border-box"
			lg-padding="50px 30px 50px 30px"
			justify-content="center"
		>
			<Override
				slot="SectionContent"
				width="100%"
				min-width="auto"
				margin="0px 32px 0px 32px"
				md-margin="0px 0px 0px 0px"
				align-items="center"
			/>
			<Box
				lg-grid-template-columns="repeat(2, 1fr)"
				md-grid-template-columns="1fr"
				width="100%"
				display="grid"
				grid-gap="32px"
				grid-template-columns="repeat(3, 1fr)"
				background="rgba(0, 0, 0, 0) url() 0% 0% /auto repeat scroll padding-box"
			>
				<Box
					width="100%"
					background="--color-lightD2 url(https://uploads.quarkly.io/670812fbe5d277001898861a/images/Outgoing.jpg?v=2024-10-11T18:10:37.078Z) center center/100% no-repeat"
					padding="0px 0px 60% 0px"
					height="0px"
					hover-background="--color-lightD2 url(https://uploads.quarkly.io/670812fbe5d277001898861a/images/Outgoing.jpg?v=2024-10-11T18:10:37.078Z) center center/110% no-repeat"
					transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
					pointer-events="none"
				>
					<Link
						text-align="center"
						margin="48px 0px 0px 0px"
						hover-transform="translateY(-4px)"
						href="/about"
						color="--light"
						font="--base"
						transition="transform --transitionDuration-fast --transitionTimingFunction-easeInOut 0s"
						md-margin="36px 0px 0px 0px"
						text-decoration-line="initial"
						letter-spacing="0.5px"
						background="--color-primary"
						lg-margin="24px 0px 0px 0px"
						padding="8px 18px 8px 18px"
						position="relative"
						top="10em"
						left="1em"
					>
						Outgoing
					</Link>
				</Box>
				<Box
					width="100%"
					background="--color-lightD2 url(https://uploads.quarkly.io/670812fbe5d277001898861a/images/incmoing.png?v=2024-10-11T18:11:18.394Z) center center/100% no-repeat"
					padding="0px 0px 60% 0px"
					height="0px"
					transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
					hover-background="--color-lightD2 url(https://uploads.quarkly.io/670812fbe5d277001898861a/images/incmoing.png?v=2024-10-11T18:11:18.394Z) center center/110% no-repeat"
				>
					<Link
						text-align="center"
						margin="48px 0px 0px 0px"
						hover-transform="translateY(-4px)"
						href="/team"
						color="--light"
						padding="8px 18px 8px 18px"
						font="--base"
						transition="transform --transitionDuration-fast --transitionTimingFunction-easeInOut 0s"
						md-margin="36px 0px 0px 0px"
						text-decoration-line="initial"
						letter-spacing="0.5px"
						background="--color-primary"
						lg-margin="24px 0px 0px 0px"
						position="relative"
						top="10em"
						left="1em"
					>
						Incoming
					</Link>
				</Box>
				<Box
					width="100%"
					background="--color-lightD2 url(https://uploads.quarkly.io/670812fbe5d277001898861a/images/Handshake.jpg?v=2024-10-11T18:11:38.740Z) center center/100% no-repeat"
					padding="0px 0px 60% 0px"
					height="0px"
					hover-background="--color-lightD2 url(https://uploads.quarkly.io/670812fbe5d277001898861a/images/Handshake.jpg?v=2024-10-11T18:11:38.740Z) center center/110% no-repeat"
					transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
				>
					<Link
						text-align="center"
						margin="48px 0px 0px 0px"
						hover-transform="translateY(-4px)"
						href="/work"
						color="--light"
						padding="8px 18px 8px 18px"
						font="--base"
						transition="transform --transitionDuration-fast --transitionTimingFunction-easeInOut 0s"
						md-margin="36px 0px 0px 0px"
						text-decoration-line="initial"
						letter-spacing="0.5px"
						background="--color-primary"
						lg-margin="24px 0px 0px 0px"
						position="relative"
						top="10em"
						left="1em"
					>
						Companies
					</Link>
				</Box>
			</Box>
		</Section>
		<Section
			box-sizing="border-box"
			lg-padding="50px 30px 50px 30px"
			id="mission"
			padding="90px 0px 100px 0px"
			quarkly-title="About"
			border-color="--color-lightD2"
			border-style="solid"
			border-width="1px 0px 1px 0px"
			sm-padding="24px 0 24px 0"
			background="--color-lightD1"
			justify-content="center"
			margin="90px 0 0 0"
		>
			<Override
				slot="SectionContent"
				md-margin="0px 16px 0px 16px"
				align-items="center"
				width="100%"
				min-width="auto"
				margin="0px 32px 0px 32px"
			/>
			<Text
				text-align="center"
				font="--base"
				opacity="0.6"
				letter-spacing="1px"
				margin="0px 0px 10px 0px"
				lg-margin="0px 0px 6px 0px"
				quarkly-title="Title"
				text-transform="uppercase"
				color="--dark"
				lg-text-align="center"
			>
				THE IAESTE Mission
			</Text>
			<Text
				letter-spacing="1px"
				color="rgb(11, 61, 89,1)"
				text-align="center"
				width="85%"
				lg-font="--lead"
				sm-font="--base"
				font="normal 500 48px/1.2 'AvenirNextCyrRegular', sans-serif"
				margin="0px 0px 0px 0px"
			>
				Connecting students and employers in more than 80 countries worldwide.
			</Text>
		</Section>
		<Section padding="80px 0 20px 0" quarkly-title="Customers" lg-padding="50px 0 50px 0" justify-content="center">
			<Override
				slot="SectionContent"
				min-width="auto"
				align-items="center"
				width="100%"
				md-margin="0px 16px 0px 16px"
				align-self="auto"
				display="block"
			/>
			<Text
				color="--dark"
				text-align="center"
				lg-margin="0px 0px 6px 0px"
				text-transform="uppercase"
				lg-text-align="center"
				quarkly-title="Title"
				font="--base"
				margin="0px 0px 10px 0px"
				letter-spacing="1px"
				opacity="0.6"
			>
				supported by:
			</Text>
			<Box
				lg-grid-template-columns="repeat(6, 1fr)"
				sm-grid-template-columns="1fr"
				display="flex"
				width="100%"
				grid-gap="32px"
				grid-template-columns="repeat(5, 1fr)"
				align-items="center"
				flex-direction="row"
				justify-content="center"
				flex-wrap="no-wrap"
				margin="auto 0 0 0"
			>
				<Box
					sm-align-items="center"
					sm-margin="0px 0px 0px 20px"
					lg-grid-column="3 / span 2"
					sm-grid-column="auto / auto"
					sm-display="flex"
				>
					<Image src="https://uploads.quarkly.io/670812fbe5d277001898861a/images/Ausw%C3%A4rtiges_Amt_Logo.svg?v=2024-10-11T18:43:15.224Z" display="block" />
				</Box>
				<Box
					lg-grid-column="5 / span 2"
					sm-grid-column="auto / auto"
					sm-display="flex"
					sm-align-items="center"
					sm-margin="0px 0px 0px 20px"
				>
					<Image src="https://uploads.quarkly.io/670812fbe5d277001898861a/images/daad_logo_suppl_de+en_v_messe_rgb.png?v=2024-10-11T18:43:25.993Z" display="block" srcSet="https://smartuploads.quarkly.io/670812fbe5d277001898861a/images/daad_logo_suppl_de+en_v_messe_rgb.png?v=2024-10-11T18%3A43%3A25.993Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/670812fbe5d277001898861a/images/daad_logo_suppl_de+en_v_messe_rgb.png?v=2024-10-11T18%3A43%3A25.993Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/670812fbe5d277001898861a/images/daad_logo_suppl_de+en_v_messe_rgb.png?v=2024-10-11T18%3A43%3A25.993Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/670812fbe5d277001898861a/images/daad_logo_suppl_de+en_v_messe_rgb.png?v=2024-10-11T18%3A43%3A25.993Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/670812fbe5d277001898861a/images/daad_logo_suppl_de+en_v_messe_rgb.png?v=2024-10-11T18%3A43%3A25.993Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/670812fbe5d277001898861a/images/daad_logo_suppl_de+en_v_messe_rgb.png?v=2024-10-11T18%3A43%3A25.993Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/670812fbe5d277001898861a/images/daad_logo_suppl_de+en_v_messe_rgb.png?v=2024-10-11T18%3A43%3A25.993Z&quality=85&w=3200 3200w" sizes="(max-width: 479px) 100vw,(max-width: 767px) 100vw,(max-width: 991px) 100vw,(max-width: 1199px) 100vw,100vw" />
				</Box>
				<Box
					lg-grid-column="2 / span 2"
					sm-grid-column="auto / auto"
					sm-display="flex"
					sm-align-items="center"
					sm-margin="0px 0px 0px 20px"
				>
					<Image src="https://uploads.quarkly.io/670812fbe5d277001898861a/images/TUHH_logo-wortmarke_en_rgb.svg?v=2024-10-11T18:43:35.154Z" display="block" />
					<Text
						color="--darkL2"
						opacity="0.6"
						lg-text-align="center"
						text-align="center"
						md-margin="16px 0px 0px 0px"
						sm-margin="0px 0px 0px 0px"
						font="--base"
					>
						{"                                        "}
					</Text>
				</Box>
			</Box>
		</Section>
		<Components.EsteFooter padding="0 0 0 0" background="rgb(11, 61, 89,1)">
			<Override slot="box" height="min-content" width="100% border-box" padding="0 24px 0 24px" />
			<Override slot="text" color="#ffffff" />
			<Override slot="text1" color="--light" />
			<Override slot="icon" color="--light" />
			<Override slot="text2" color="--light" />
			<Override slot="icon1" color="--light" />
			<Override slot="icon2" color="--light" />
			<Override
				slot="text3"
				color="--light"
				text-align="center"
				pointer-events="none"
				user-select="none"
				as="span"
			/>
			<Override slot="SectionContent" id="footer" />
		</Components.EsteFooter>
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
				{"a {\n            color: white;\n        }\n\n#logo {\n            width: 160px;\n        }\n#menuentry {\n           width: max-content !important;\n        }"}
			</style>
		</RawHtml>
	</Theme>;
});