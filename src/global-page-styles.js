import React from "react";
import { transformVar } from "@quarkly/atomize";
import { createGlobalStyle } from "styled-components";

const pageStyles = {
    "404": {
        "font": "--headline3",
        "color": "#b30b0b"
    },
    "index": {
        "font": "--headline3",
        "color": "#b30b0b"
    },
    "about": {
        "font": "--headline3",
        "color": "#b30b0b"
    },
    "team": {
        "font": "--headline3",
        "color": "#b30b0b"
    },
    "work": {
        "font": "--headline3",
        "color": "#b30b0b"
    }
};

const PageStyles = createGlobalStyle`
    body {
        ${({ styles }) =>
            Object.entries(styles || {}).map(
                ([prop, value]) => `${prop}: ${transformVar(prop, value)};`
            )}
    }
`;
export const GlobalQuarklyPageStyles = ({ pageUrl }) => <PageStyles styles={pageStyles[pageUrl]} />
