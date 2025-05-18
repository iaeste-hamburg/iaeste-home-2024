import React from "react";
import { useOverrides, Override } from "@quarkly/components";
import { Text, Icon, Strong, Box, Link, Section } from "@quarkly/widgets";
import { FaInstagram, FaMailBulk } from "react-icons/fa";
import { IoIosPin } from "react-icons/io";
const defaultProps = {
	"quarkly-title": "USP",
	"padding": "75px 0 50px 0",
	"lg-padding": "50px 0 25px 0",
	"lg-height": "auto",
	"justify-content": "center",
	"border-color": "#ec0808"
};
const overrides = {
	"box": {
		"kind": "Box",
		"props": {
			"justify-content": "center",
			"flex-direction": "column",
			"md-min-height": "360px",
			"min-height": "480px",
			"padding": "36px 24px 36px 24px",
			"align-items": "center",
			"sm-min-height": "280px",
			"display": "flex",
			"lg-min-height": "420px",
			"mix-blend-mode": "screen",
			"border-color": "#F7FBFF"
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"color": "rgb(11, 61, 89,1)",
			"md-font": "--headline3",
			"margin": "10px 0px 15px 0px",
			"font": "--headline2",
			"text-align": "center",
			"quarkly-title": "Title",
			"border-color": "rgb(11, 61, 89)",
			"children": "Get In Touch!"
		}
	},
	"box1": {
		"kind": "Box",
		"props": {
			"min-width": "100px",
			"min-height": "100px",
			"display": "flex",
			"flex-direction": "row",
			"flex-wrap": "no-wrap"
		}
	},
	"icon": {
		"kind": "Icon",
		"props": {
			"category": "fa",
			"icon": FaInstagram,
			"size": "64px",
			"border-color": "#ffffff",
			"color": "#000000"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"color": "rgb(11, 61, 89, 1)",
			"opacity": "1",
			"lg-text-align": "center",
			"text-align": "center",
			"md-margin": "16px 0px 0px 0px",
			"sm-margin": "0px 0px 0px 0px",
			"font": "normal 500 20px/1.5 --fontFamily-googleNunitoSans",
			"margin": "16px 0px 16px 1em",
			"children": <Strong
				overflow-wrap="normal"
				word-break="normal"
				white-space="normal"
				text-indent="0"
				text-overflow="clip"
				hyphens="manual"
				user-select="auto"
				pointer-events="auto"
			>
				@iaestehamburg
			</Strong>
		}
	},
	"box2": {
		"kind": "Box",
		"props": {
			"min-width": "100px",
			"min-height": "100px",
			"display": "flex",
			"flex-direction": "row",
			"flex-wrap": "no-wrap"
		}
	},
	"icon1": {
		"kind": "Icon",
		"props": {
			"category": "fa",
			"icon": FaMailBulk,
			"size": "64px",
			"border-color": "#ffffff",
			"color": "#000000"
		}
	},
	"text2": {
		"kind": "Text",
		"props": {
			"color": "rgb(11, 61, 89,1)",
			"opacity": "1",
			"lg-text-align": "center",
			"text-align": "center",
			"md-margin": "16px 0px 0px 0px",
			"sm-margin": "0px 0px 0px 0px",
			"font": "normal 500 20px/1.5 --fontFamily-googleNunitoSans",
			"margin": "16px 0px 16px 1em",
			"children": <Strong
				overflow-wrap="normal"
				word-break="normal"
				white-space="normal"
				text-indent="0"
				text-overflow="clip"
				hyphens="manual"
				user-select="auto"
				pointer-events="auto"
			>
				<Link href="mailto:info%20%C3%A4-t%20iaeste-hamburg.de" font="20px/30px --fontFamily-googleNunitoSans" color="rgb(11, 61, 89, 1)">
					info ä-t iaeste-hamburg.de
				</Link>
			</Strong>
		}
	},
	"box3": {
		"kind": "Box",
		"props": {
			"min-width": "100px",
			"min-height": "100px",
			"display": "flex",
			"flex-direction": "row",
			"flex-wrap": "no-wrap"
		}
	},
	"icon2": {
		"kind": "Icon",
		"props": {
			"category": "io",
			"icon": IoIosPin,
			"size": "64px",
			"border-color": "#ffffff",
			"color": "#000000"
		}
	},
	"text3": {
		"kind": "Text",
		"props": {
			"color": "rgb(11, 61, 89,1)",
			"opacity": "1",
			"lg-text-align": "center",
			"text-align": "center",
			"md-margin": "16px 0px 0px 0px",
			"sm-margin": "0px 0px 0px 0px",
			"font": "normal 500 20px/1.5 --fontFamily-googleNunitoSans",
			"margin": "16px 0px 16px 1em",
			"children": <Link href="https://maps.app.goo.gl/tMnBegozjpGcTtgB7" color="rgb(11, 61, 89)" target="_blank">
				Schloßmühlendamm 30-32, Room 223, 21073 Hamburg
			</Link>
		}
	}
};

const EsteFooter = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Override
			slot="SectionContent"
			md-margin="0px 16px 0px 16px"
			min-width="auto"
			width="100%"
			margin="0px 32px 0px 32px"
			opacity="1"
		/>
		<Box {...override("box")}>
			<Text {...override("text")} />
			<Box {...override("box1")}>
				<Icon {...override("icon")} />
				<Text {...override("text1")} />
			</Box>
			<Box {...override("box2")}>
				<Icon {...override("icon1")} />
				<Text {...override("text2")} />
			</Box>
			<Box {...override("box3")}>
				<Icon {...override("icon2")} />
				<Text {...override("text3")} />
			</Box>
		</Box>
		{children}
	</Section>;
};

Object.assign(EsteFooter, { ...Section,
	defaultProps,
	overrides
});
export default EsteFooter;