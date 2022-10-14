import create from "zustand";

// unsafe merge state
// and mew properties will added or existing properties will be changed
// but the type of value of the property must not change
function mergeState(baseState, newState) {
  if (
    typeof newState === "object" &&
    !Array.isArray(newState) &&
    newState !== null
  ) {
    const keys = Object.keys(newState);
    keys.forEach((key) => {
      // create a new key in base if not exists
      if (!(key in baseState)) {
        baseState[key] = {};
      }
      if (typeof newState[key] === "object" && !Array.isArray(newState[key]))
        mergeState(baseState[key], newState[key]);
      else baseState[key] = newState[key];
    });
  }
}

const useStore = create((set) => {
  return {
    setPage: (pageName, newState) =>
      set((state) => {
        const pageState = JSON.parse(JSON.stringify(state[pageName]));
        mergeState(pageState, newState);
        return { [pageName]: pageState };
      }),
  };
});

export function updateStoreStateFromController(pageName, newState) {
  useStore.getState().setPage(pageName, newState);
}

const desktopModeProps = {
  ...{
  "Home": {
    "logo": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "alignSelf": "auto",
        "width": "128.964px",
        "height": "20.9961px",
        "cursor": "pointer",
        "clear": "none",
        "paddingTop": "5px",
        "paddingBottom": "5px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/logo.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Menu1": {
      "styles": {
        "display": "none",
        "boxShadow": "0px 00px 0px 0px ",
        "justifyContent": "space-around",
        "flexDirection": "row",
        "alignSelf": "center",
        "position": "relative",
        "float": "right"
      },
      "custom": {
        "open": true,
        "iconHeight": 24,
        "iconWidth": 24,
        "alignRight": true
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div5": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "387.4380px",
        "height": "30px",
        "float": "right",
        "overflow": "hidden"
      },
      "callbacks": {}
    },
    "Dropdown6": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "float": "none",
        "wordWrap": "initial",
        "textAlign": "right",
        "alignSelf": "auto",
        "paddingRight": "15px",
        "position": "relative",
        "right": null,
        "cursor": "pointer",
        "paddingLeft": "",
        "paddingBottom": "",
        "fontFamily": "Roboto",
        "fontWeight": 400,
        "fontSize": "18px",
        "height": "30px",
        "width": "80.25px",
        "marginRight": "",
        "marginLeft": "10px"
      },
      "custom": {
        "values": [
          "Pages"
        ],
        "selectedValue": "Pages"
      },
      "callbacks": {
        "onChange": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Portfolio": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "float": "none",
        "paddingRight": "15px",
        "paddingLeft": "15px",
        "fontFamily": "Roboto",
        "fontSize": "18px",
        "fontWeight": 400
      },
      "custom": {
        "text": "Portfolio",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "About": {
      "styles": {
        "cursor": "pointer",
        "boxShadow": "0px 00px 0px 0px "
      },
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "contact": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "paddingRight": "15px",
        "paddingLeft": "15px",
        "fontFamily": "Roboto",
        "fontSize": "18px",
        "fontWeight": 400
      },
      "custom": {
        "text": "Contact",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image3": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "float": "right"
      },
      "custom": {
        "alt": "Cart View",
        "src": "/app-assets/bag-icon.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox7": {
      "styles": {},
      "custom": {
        "text": "Contact Me"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox8": {
      "styles": {},
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox9": {
      "styles": {},
      "custom": {
        "text": "Talks"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox10": {
      "styles": {},
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image4": {
      "styles": {
        "width": "250px",
        "flexGrow": null,
        "cursor": "pointer"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Frame%20327.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image5": {
      "styles": {
        "width": "32px",
        "flexGrow": null
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/logo_only.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button1": {
      "styles": {
        "color": "#ffffff",
        "backgroundColor": "#00204B",
        "paddingTop": "8px",
        "paddingLeft": "15px",
        "paddingBottom": "8px",
        "paddingRight": "15px",
        "fontSize": "16px",
        "borderRadius": "4px",
        "outline": "none",
        "fontWeight": 600,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "none",
        "borderColor": "#F1945A",
        "cursor": "pointer",
        "userSelect": "none",
        "fontFamily": "IBM Plex Sans",
        "width": "",
        "flexGrow": null,
        "height": "40px"
      },
      "custom": {
        "text": "Contact Me"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex2": {
      "styles": {
        "display": "flex"
      },
      "callbacks": {}
    },
    "TextBox11": {
      "styles": {
        "cursor": "pointer"
      },
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox12": {
      "styles": {
        "cursor": "pointer"
      },
      "custom": {
        "text": "Talks"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox13": {
      "styles": {
        "cursor": "pointer"
      },
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex3": {
      "styles": {
        "display": "flex"
      },
      "callbacks": {}
    },
    "Flex4": {
      "styles": {
        "display": "none"
      },
      "callbacks": {}
    },
    "Flex5": {
      "styles": {
        "display": "flex"
      },
      "callbacks": {}
    },
    "Menu2": {
      "styles": {
        "display": "none"
      },
      "custom": {
        "open": true,
        "iconHeight": 24,
        "iconWidth": 24,
        "alignRight": true
      },
      "callbacks": {}
    },
    "Flex6": {
      "styles": {
        "display": "flex",
        "columnGap": "30px",
        "color": "#1F2937",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 500
      },
      "callbacks": {}
    },
    "Flex7": {
      "styles": {
        "display": "flex"
      },
      "callbacks": {}
    },
    "Flex8": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "columnGap": "10px",
        "width": "250px",
        "justifyContent": "flex-end"
      },
      "callbacks": {}
    },
    "Flex9": {
      "styles": {
        "display": "flex",
        "flexGrow": null,
        "alignItems": "center",
        "justifyContent": "center"
      },
      "callbacks": {}
    },
    "TextBox14": {
      "styles": {},
      "custom": {
        "text": "Contact Me"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox15": {
      "styles": {},
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox16": {
      "styles": {},
      "custom": {
        "text": "Talks"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox17": {
      "styles": {},
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image8": {
      "styles": {
        "width": "32px",
        "flexGrow": null
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/logo_only.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex11": {
      "styles": {
        "display": "flex"
      },
      "callbacks": {}
    },
    "Flex13": {
      "styles": {
        "display": "none"
      },
      "callbacks": {}
    },
    "Menu3": {
      "styles": {
        "display": "none"
      },
      "custom": {
        "open": true,
        "iconHeight": 24,
        "iconWidth": 24,
        "alignRight": true
      },
      "callbacks": {}
    },
    "Flex16": {
      "styles": {
        "display": "flex"
      },
      "callbacks": {}
    },
    "Flex17": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "columnGap": "10px",
        "width": "413.438px",
        "justifyContent": "flex-end",
        "boxShadow": "0px 00px 0px 0px ",
        "height": "30px"
      },
      "callbacks": {}
    },
    "TextBox21": {
      "styles": {},
      "custom": {
        "text": "Contact Me"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox22": {
      "styles": {},
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox23": {
      "styles": {},
      "custom": {
        "text": "Talks"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox24": {
      "styles": {},
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image10": {
      "styles": {
        "width": "250px",
        "flexGrow": null,
        "cursor": "pointer"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Frame%20327.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image11": {
      "styles": {
        "width": "32px",
        "flexGrow": null
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/logo_only.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex21": {
      "styles": {
        "display": "flex"
      },
      "callbacks": {}
    },
    "TextBox25": {
      "styles": {
        "cursor": "pointer"
      },
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox26": {
      "styles": {
        "cursor": "pointer"
      },
      "custom": {
        "text": "Talks"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox27": {
      "styles": {
        "cursor": "pointer"
      },
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex22": {
      "styles": {
        "display": "flex"
      },
      "callbacks": {}
    },
    "Flex23": {
      "styles": {
        "display": "none"
      },
      "callbacks": {}
    },
    "Flex25": {
      "styles": {
        "display": "flex",
        "columnGap": "30px",
        "color": "#1F2937",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 500
      },
      "callbacks": {}
    },
    "TextBox28": {
      "styles": {},
      "custom": {
        "text": "Contact Me"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox29": {
      "styles": {},
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox30": {
      "styles": {},
      "custom": {
        "text": "Talks"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox31": {
      "styles": {},
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image12": {
      "styles": {
        "width": "250px",
        "flexGrow": null,
        "cursor": "pointer"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Frame%20327.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image13": {
      "styles": {
        "width": "32px",
        "flexGrow": null
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/logo_only.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button4": {
      "styles": {
        "color": "#ffffff",
        "backgroundColor": "#00204B",
        "paddingTop": "8px",
        "paddingLeft": "15px",
        "paddingBottom": "8px",
        "paddingRight": "15px",
        "fontSize": "16px",
        "borderRadius": "4px",
        "outline": "none",
        "fontWeight": 600,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "none",
        "borderColor": "#F1945A",
        "cursor": "pointer",
        "userSelect": "none",
        "fontFamily": "IBM Plex Sans",
        "width": "",
        "flexGrow": null,
        "height": "40px"
      },
      "custom": {
        "text": "Contact Me"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex30": {
      "styles": {
        "display": "flex"
      },
      "callbacks": {}
    },
    "TextBox32": {
      "styles": {
        "cursor": "pointer"
      },
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox33": {
      "styles": {
        "cursor": "pointer"
      },
      "custom": {
        "text": "Talks"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox34": {
      "styles": {
        "cursor": "pointer"
      },
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex31": {
      "styles": {
        "display": "flex"
      },
      "callbacks": {}
    },
    "Flex32": {
      "styles": {
        "display": "none"
      },
      "callbacks": {}
    },
    "Flex33": {
      "styles": {
        "display": "flex"
      },
      "callbacks": {}
    },
    "Menu5": {
      "styles": {
        "display": "none"
      },
      "custom": {
        "open": true,
        "iconHeight": 24,
        "iconWidth": 24,
        "alignRight": true
      },
      "callbacks": {}
    },
    "Flex34": {
      "styles": {
        "display": "flex",
        "columnGap": "30px",
        "color": "#1F2937",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 500
      },
      "callbacks": {}
    },
    "TextBox35": {
      "styles": {},
      "custom": {
        "text": "Contact Me"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox36": {
      "styles": {},
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox37": {
      "styles": {},
      "custom": {
        "text": "Talks"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox38": {
      "styles": {},
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image14": {
      "styles": {
        "width": "250px",
        "flexGrow": null,
        "cursor": "pointer"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Frame%20327.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image15": {
      "styles": {
        "width": "32px",
        "flexGrow": null
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/logo_only.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button5": {
      "styles": {
        "color": "#ffffff",
        "backgroundColor": "#00204B",
        "paddingTop": "8px",
        "paddingLeft": "15px",
        "paddingBottom": "8px",
        "paddingRight": "15px",
        "fontSize": "16px",
        "borderRadius": "4px",
        "outline": "none",
        "fontWeight": 600,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "none",
        "borderColor": "#F1945A",
        "cursor": "pointer",
        "userSelect": "none",
        "fontFamily": "IBM Plex Sans",
        "width": "",
        "flexGrow": null,
        "height": "40px"
      },
      "custom": {
        "text": "Contact Me"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex40": {
      "styles": {
        "display": "flex"
      },
      "callbacks": {}
    },
    "TextBox39": {
      "styles": {
        "cursor": "pointer"
      },
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox40": {
      "styles": {
        "cursor": "pointer"
      },
      "custom": {
        "text": "Talks"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox41": {
      "styles": {
        "cursor": "pointer"
      },
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex41": {
      "styles": {
        "display": "flex"
      },
      "callbacks": {}
    },
    "Flex42": {
      "styles": {
        "display": "none"
      },
      "callbacks": {}
    },
    "Flex43": {
      "styles": {
        "display": "flex"
      },
      "callbacks": {}
    },
    "Menu6": {
      "styles": {
        "display": "none"
      },
      "custom": {
        "open": true,
        "iconHeight": 24,
        "iconWidth": 24,
        "alignRight": true
      },
      "callbacks": {}
    },
    "Flex44": {
      "styles": {
        "display": "flex",
        "columnGap": "30px",
        "color": "#1F2937",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 500
      },
      "callbacks": {}
    },
    "Flex45": {
      "styles": {
        "display": "flex"
      },
      "callbacks": {}
    },
    "Flex46": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "columnGap": "10px",
        "width": "250px",
        "justifyContent": "flex-end"
      },
      "callbacks": {}
    },
    "Flex47": {
      "styles": {
        "display": "flex",
        "flexGrow": null,
        "alignItems": "center",
        "justifyContent": "center"
      },
      "callbacks": {}
    },
    "TextBox42": {
      "styles": {},
      "custom": {
        "text": "Contact Me"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox43": {
      "styles": {},
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox44": {
      "styles": {},
      "custom": {
        "text": "Talks"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox45": {
      "styles": {},
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image16": {
      "styles": {
        "width": "250px",
        "flexGrow": null,
        "cursor": "pointer"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Frame%20327.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image17": {
      "styles": {
        "width": "32px",
        "flexGrow": null
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/logo_only.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button6": {
      "styles": {
        "color": "#ffffff",
        "backgroundColor": "#00204B",
        "paddingTop": "",
        "paddingLeft": "",
        "paddingBottom": "",
        "paddingRight": "",
        "fontSize": "16px",
        "borderRadius": "14px",
        "outline": "none",
        "fontWeight": 600,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "none",
        "borderColor": "#F1945A",
        "cursor": "pointer",
        "userSelect": "none",
        "fontFamily": "IBM Plex Sans",
        "width": "25px",
        "flexGrow": null,
        "height": "25px",
        "boxShadow": "0px 00px 0px 0px "
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex49": {
      "styles": {
        "display": "flex"
      },
      "callbacks": {}
    },
    "TextBox46": {
      "styles": {
        "cursor": "pointer"
      },
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox47": {
      "styles": {
        "cursor": "pointer"
      },
      "custom": {
        "text": "Talks"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox48": {
      "styles": {
        "cursor": "pointer"
      },
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex50": {
      "styles": {
        "display": "flex"
      },
      "callbacks": {}
    },
    "Flex51": {
      "styles": {
        "display": "none"
      },
      "callbacks": {}
    },
    "Flex52": {
      "styles": {
        "display": "flex"
      },
      "callbacks": {}
    },
    "Menu7": {
      "styles": {
        "display": "none"
      },
      "custom": {
        "open": true,
        "iconHeight": 24,
        "iconWidth": 24,
        "alignRight": true
      },
      "callbacks": {}
    },
    "Flex53": {
      "styles": {
        "display": "flex",
        "columnGap": "30px",
        "color": "#1F2937",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 500
      },
      "callbacks": {}
    },
    "Flex54": {
      "styles": {
        "display": "flex"
      },
      "callbacks": {}
    },
    "Flex55": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "columnGap": "10px",
        "width": "250px",
        "justifyContent": "flex-end"
      },
      "callbacks": {}
    },
    "Flex56": {
      "styles": {
        "display": "flex",
        "flexGrow": null,
        "alignItems": "center",
        "justifyContent": "center"
      },
      "callbacks": {}
    },
    "Image18": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px "
      },
      "custom": {
        "alt": "No preview available"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox49": {
      "styles": {},
      "custom": {
        "text": "Contact Me"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox50": {
      "styles": {},
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox51": {
      "styles": {},
      "custom": {
        "text": "Talks"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox52": {
      "styles": {},
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image19": {
      "styles": {
        "width": "250px",
        "flexGrow": null,
        "cursor": "pointer",
        "boxShadow": "0px 00px 0px 0px ",
        "float": "left",
        "marginRight": "666px"
      },
      "custom": {
        "alt": "logo",
        "src": "/app-assets/logo.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image20": {
      "styles": {
        "width": "32px",
        "flexGrow": null
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/logo_only.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button7": {
      "styles": {
        "color": "#ffffff",
        "backgroundColor": "#00204B",
        "paddingTop": "",
        "paddingLeft": "",
        "paddingBottom": "",
        "paddingRight": "",
        "fontSize": "16px",
        "borderRadius": "14px",
        "outline": "none",
        "fontWeight": 600,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "none",
        "borderColor": "#F1945A",
        "cursor": "pointer",
        "userSelect": "none",
        "fontFamily": "IBM Plex Sans",
        "width": "25px",
        "flexGrow": null,
        "height": "25px",
        "boxShadow": "0px 00px 0px 0px "
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex58": {
      "styles": {
        "display": "flex"
      },
      "callbacks": {}
    },
    "TextBox53": {
      "styles": {
        "cursor": "pointer"
      },
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox54": {
      "styles": {
        "cursor": "pointer"
      },
      "custom": {
        "text": "Talks"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox55": {
      "styles": {
        "cursor": "pointer"
      },
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex59": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px "
      },
      "callbacks": {}
    },
    "Flex60": {
      "styles": {
        "display": "none"
      },
      "callbacks": {}
    },
    "Flex61": {
      "styles": {
        "display": "flex"
      },
      "callbacks": {}
    },
    "Menu8": {
      "styles": {
        "display": "none"
      },
      "custom": {
        "open": true,
        "iconHeight": 24,
        "iconWidth": 24,
        "alignRight": true
      },
      "callbacks": {}
    },
    "Flex62": {
      "styles": {
        "display": "flex",
        "columnGap": "30px",
        "color": "#1F2937",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 500,
        "boxShadow": "0px 00px 0px 0px "
      },
      "callbacks": {}
    },
    "Header": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "100%",
        "height": "94px",
        "paddingTop": "32px",
        "paddingBottom": "32px",
        "display": "block",
        "position": "relative",
        "zIndex": 1000,
        "bottom": 0,
        "right": 0,
        "top": 0,
        "left": 0
      },
      "callbacks": {}
    },
    "TextBox56": {
      "styles": {},
      "custom": {
        "text": "Contact Me"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox57": {
      "styles": {},
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox58": {
      "styles": {},
      "custom": {
        "text": "Talks"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox59": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px "
      },
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image22": {
      "styles": {
        "width": "",
        "flexGrow": null,
        "cursor": "pointer",
        "boxShadow": "0px 00px 0px 0px ",
        "paddingRight": "",
        "position": "static",
        "float": "left",
        "lineHeight": "30px",
        "alignSelf": "center",
        "left": -10,
        "marginLeft": "56px",
        "marginBottom": "27px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/logo.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image23": {
      "styles": {
        "width": "32px",
        "flexGrow": null
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/logo.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button8": {
      "styles": {
        "color": "#ffffff",
        "backgroundColor": "#000000",
        "paddingTop": "",
        "paddingLeft": "",
        "paddingBottom": "",
        "paddingRight": "",
        "fontSize": "16px",
        "borderRadius": "14px",
        "outline": "none",
        "fontWeight": 600,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "none",
        "borderColor": "#F1945A",
        "cursor": "pointer",
        "userSelect": "none",
        "fontFamily": "IBM Plex Sans",
        "width": "20px",
        "flexGrow": null,
        "height": "20px",
        "boxShadow": "0px 00px 0px 0px ",
        "left": -22,
        "position": "relative",
        "bottom": -13
      },
      "custom": {
        "text": "0"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          },
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex68": {
      "styles": {
        "display": "flex"
      },
      "callbacks": {}
    },
    "Talks": {
      "styles": {
        "cursor": "pointer",
        "boxShadow": "0px 00px 0px 0px "
      },
      "custom": {
        "text": "Talks"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex69": {
      "styles": {
        "display": "flex"
      },
      "callbacks": {}
    },
    "Flex70": {
      "styles": {
        "display": "none"
      },
      "callbacks": {}
    },
    "Flex71": {
      "styles": {
        "display": "flex"
      },
      "callbacks": {}
    },
    "Menu9": {
      "styles": {
        "display": "none",
        "boxShadow": "0px 00px 0px 0px "
      },
      "custom": {
        "open": true,
        "iconHeight": 24,
        "iconWidth": 24,
        "alignRight": true
      },
      "callbacks": {}
    },
    "Flex72": {
      "styles": {
        "display": "flex",
        "columnGap": "30px",
        "color": "#1F2937",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": 500,
        "boxShadow": "0px 00px 0px 0px ",
        "float": "none",
        "rowGap": "5px",
        "fontSize": "18px"
      },
      "callbacks": {}
    },
    "Flex73": {
      "styles": {
        "display": "flex"
      },
      "callbacks": {}
    },
    "Flex74": {
      "styles": {
        "display": "inline-flex",
        "alignItems": "center",
        "columnGap": "10px",
        "width": "400.438px",
        "justifyContent": "flex-end",
        "boxShadow": "0px 00px 0px 0px ",
        "float": "right",
        "position": "absolute",
        "cursor": "pointer",
        "lineHeight": "30px",
        "height": "30px",
        "flexDirection": "row",
        "flexWrap": "nowrap",
        "backgroundAttachment": "local",
        "backgroundOrigin": "padding-box",
        "backgroundClip": "padding-box",
        "WebkitBackgroundClip": "padding-box",
        "right": 0,
        "alignSelf": "center",
        "marginLeft": "",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "18px",
        "paddingBottom": "",
        "top": 15,
        "bottom": 0,
        "left": null,
        "paddingTop": ""
      },
      "callbacks": {}
    },
    "Flex76": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "flex-start",
        "paddingLeft": "",
        "paddingRight": "",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "18px",
        "marginTop": "",
        "paddingBottom": "",
        "paddingTop": "30px",
        "boxShadow": "0px 00px 0px 0px ",
        "height": "30px",
        "width": "",
        "marginLeft": "",
        "marginRight": "",
        "position": "relative"
      },
      "callbacks": {}
    },
    "Image24": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "float": "right",
        "width": "26px",
        "height": "28px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/bag-icon.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Dropdown9": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "borderStyle": "none",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "18px"
      },
      "custom": {
        "values": [
          "Pages 1",
          "Pages 1",
          "Pages 1",
          "Pages 1"
        ],
        "displayedValues": [
          "Pages"
        ],
        "selectedValue": "Ultimate pages"
      },
      "callbacks": {}
    },
    "Div18": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "",
        "height": "504px",
        "paddingLeft": "",
        "paddingRight": "",
        "display": "block",
        "paddingTop": "50px",
        "paddingBottom": "0px",
        "marginBottom": "12px",
        "marginTop": "0px"
      },
      "callbacks": {}
    },
    "TextBox63": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "position": "relative",
        "fontFamily": "IBM Plex Sans",
        "lineHeight": "70px",
        "fontSize": "60px",
        "wordWrap": "break-word",
        "marginTop": "",
        "marginLeft": "90px",
        "top": 0
      },
      "custom": {
        "text": "I'm Sam, and I design "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox64": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "lineHeight": "70px",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "60px",
        "marginLeft": "90px"
      },
      "custom": {
        "text": "user interfaces for startups"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox65": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "22px",
        "lineHeight": "36px",
        "marginLeft": "",
        "width": "650px",
        "height": "",
        "marginRight": ""
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ad minim veniam quis nostrud"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div19": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "display": "inline-block",
        "width": "404px",
        "height": "5px",
        "backgroundColor": "#020202",
        "borderStyle": "none",
        "marginLeft": "90px"
      },
      "callbacks": {}
    },
    "Div20": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "",
        "height": "2108px"
      },
      "callbacks": {}
    },
    "TextBox68": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "48px",
        "lineHeight": "64px",
        "textAlign": "center",
        "width": "100%"
      },
      "custom": {
        "text": "Past Projects"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div21": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "90%",
        "height": "636px",
        "textAlign": "left",
        "position": "relative",
        "display": "block",
        "marginLeft": "50px",
        "marginTop": "20px",
        "alignSelf": "auto",
        "borderRadius": "",
        "borderStyle": "solid",
        "borderColor": "#c5c5c5",
        "borderWidth": "1px",
        "marginRight": "50px"
      },
      "callbacks": {}
    },
    "Div23": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "50%",
        "height": "636px",
        "marginTop": "",
        "top": null,
        "position": "relative",
        "float": "right",
        "backgroundColor": "#000000",
        "backgroundImage": "url(\"/app-assets/appx2.jpg\")",
        "backgroundClip": "padding-box",
        "WebkitBackgroundClip": "padding-box",
        "backgroundAttachment": "fixed",
        "backgroundPositionY": "",
        "backgroundPositionX": "",
        "backgroundOrigin": "border-box",
        "borderStyle": "none"
      },
      "callbacks": {}
    },
    "Div24": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "635px",
        "height": "636px",
        "display": "contents",
        "float": "right",
        "top": -19,
        "alignSelf": "flex-start"
      },
      "callbacks": {}
    },
    "Div27": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "paddingTop": "93px"
      },
      "callbacks": {}
    },
    "TextBox69": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "right": 0,
        "width": "50px",
        "position": "relative",
        "float": "left"
      },
      "custom": {
        "text": "App X"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox70": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "80px",
        "float": "left"
      },
      "custom": {
        "text": "Web Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div30": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "50%",
        "display": "block",
        "height": "50%",
        "top": 149,
        "bottom": 0,
        "paddingTop": "",
        "position": "relative"
      },
      "callbacks": {}
    },
    "Div32": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "35%",
        "height": "20px",
        "paddingLeft": "",
        "marginLeft": "25px",
        "paddingTop": "55px",
        "paddingBottom": "",
        "position": "relative",
        "left": null,
        "display": "block"
      },
      "callbacks": {}
    },
    "TextBox72": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "Roboto",
        "fontSize": "18px",
        "lineHeight": "20px",
        "fontWeight": 400,
        "alignSelf": "flex-start",
        "width": "50px",
        "float": "left",
        "position": "relative",
        "marginLeft": ""
      },
      "custom": {
        "text": "App X"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox74": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "outlineStyle": "none",
        "backgroundColor": "#878787",
        "position": "relative",
        "width": "20px",
        "height": "0.8px",
        "left": 70,
        "bottom": -9,
        "marginRight": "30px",
        "marginLeft": "60px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox75": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "Roboto",
        "color": "#0d0d0d",
        "fontSize": "18px",
        "lineHeight": "20px",
        "position": "relative",
        "float": "right",
        "marginRight": "",
        "marginLeft": ""
      },
      "custom": {
        "text": "Web Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox76": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "100%",
        "height": "",
        "fontFamily": "Roboto",
        "fontSize": "24px",
        "lineHeight": "28px",
        "textAlign": "left",
        "marginLeft": "",
        "alignSelf": "auto",
        "position": "relative",
        "left": null,
        "overflow": "auto",
        "float": "none",
        "backgroundAttachment": "local",
        "paddingTop": "10px",
        "paddingBottom": "5px",
        "paddingRight": "",
        "paddingLeft": "25px"
      },
      "custom": {
        "text": "Website design for finance startup"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox77": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "350px",
        "marginLeft": "30px",
        "paddingLeft": "",
        "paddingTop": "10px",
        "fontFamily": "Roboto",
        "fontSize": "",
        "color": "#868383"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing slit mattis faucibus odio feugiat arcu scelerisque drogon sit amenot"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox78": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontSize": "20px",
        "width": "140px",
        "height": "22px",
        "paddingTop": "10px",
        "marginTop": "10px",
        "right": null,
        "left": 25,
        "position": "relative",
        "fontFamily": "Roboto"
      },
      "custom": {
        "text": "View Projects"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox79": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "backgroundColor": "#000000",
        "height": "",
        "width": "35%",
        "marginLeft": "22px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox80": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "Roboto",
        "color": "#0d0d0d",
        "fontSize": "18px",
        "lineHeight": "20px",
        "position": "relative",
        "float": "right",
        "marginRight": "",
        "marginLeft": ""
      },
      "custom": {
        "text": "Web Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox81": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "outlineStyle": "none",
        "backgroundColor": "#878787",
        "position": "relative",
        "width": "20px",
        "height": "0.8px",
        "left": null,
        "bottom": -9,
        "marginRight": "30px",
        "marginLeft": "60px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox82": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "Roboto",
        "fontSize": "18px",
        "lineHeight": "20px",
        "fontWeight": 400,
        "alignSelf": "flex-start",
        "width": "50px",
        "float": "left",
        "position": "relative",
        "marginLeft": ""
      },
      "custom": {
        "text": "App X"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox83": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "backgroundColor": "#000000",
        "height": "",
        "width": "35%",
        "marginLeft": "22px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox84": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontSize": "20px",
        "width": "140px",
        "height": "22px",
        "paddingTop": "10px",
        "marginTop": "10px",
        "right": null,
        "left": 25,
        "position": "relative",
        "fontFamily": "Roboto"
      },
      "custom": {
        "text": "View Projects"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox85": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "350px",
        "marginLeft": "30px",
        "paddingLeft": "",
        "paddingTop": "10px",
        "fontFamily": "Roboto",
        "fontSize": "",
        "color": "#868383"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing slit mattis faucibus odio feugiat arcu scelerisque drogon sit amenot"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox86": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "100%",
        "height": "",
        "fontFamily": "Roboto",
        "fontSize": "24px",
        "lineHeight": "28px",
        "textAlign": "left",
        "marginLeft": "",
        "alignSelf": "auto",
        "position": "relative",
        "left": null,
        "overflow": "auto",
        "float": "none",
        "backgroundAttachment": "local",
        "paddingTop": "10px",
        "paddingBottom": "5px",
        "paddingRight": "",
        "paddingLeft": "25px"
      },
      "custom": {
        "text": "Website design for finance startup"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div44": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "35%",
        "height": "20px",
        "paddingLeft": "",
        "marginLeft": "25px",
        "paddingTop": "55px",
        "paddingBottom": "",
        "position": "relative",
        "left": null,
        "display": "block"
      },
      "callbacks": {}
    },
    "Div45": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "50%",
        "display": "block",
        "height": "50%",
        "top": 149,
        "bottom": 0,
        "paddingTop": "",
        "position": "relative"
      },
      "callbacks": {}
    },
    "Div46": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "635px",
        "height": "636px",
        "display": "contents",
        "float": "right",
        "top": -19,
        "alignSelf": "flex-start"
      },
      "callbacks": {}
    },
    "Div47": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "50%",
        "height": "636px",
        "marginTop": "",
        "top": null,
        "position": "relative",
        "float": "right",
        "backgroundColor": "#000000",
        "backgroundImage": "url(\"/app-assets/appx2.jpg\")",
        "backgroundClip": "padding-box",
        "WebkitBackgroundClip": "padding-box",
        "backgroundAttachment": "fixed",
        "backgroundPositionY": "",
        "backgroundPositionX": "",
        "backgroundOrigin": "border-box",
        "borderStyle": "none"
      },
      "callbacks": {}
    },
    "TextBox87": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "Roboto",
        "color": "#0d0d0d",
        "fontSize": "18px",
        "lineHeight": "20px",
        "position": "relative",
        "float": "right",
        "marginRight": "",
        "marginLeft": ""
      },
      "custom": {
        "text": "Web Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox88": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "outlineStyle": "none",
        "backgroundColor": "#878787",
        "position": "relative",
        "width": "20px",
        "height": "0.8px",
        "left": null,
        "bottom": -9,
        "marginRight": "30px",
        "marginLeft": "60px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox89": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "Roboto",
        "fontSize": "18px",
        "lineHeight": "20px",
        "fontWeight": 400,
        "alignSelf": "flex-start",
        "width": "50px",
        "float": "left",
        "position": "relative",
        "marginLeft": ""
      },
      "custom": {
        "text": "App X"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox90": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "backgroundColor": "#000000",
        "height": "",
        "width": "35%",
        "marginLeft": "22px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox91": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontSize": "20px",
        "width": "140px",
        "height": "22px",
        "paddingTop": "10px",
        "marginTop": "10px",
        "right": null,
        "left": 25,
        "position": "relative",
        "fontFamily": "Roboto"
      },
      "custom": {
        "text": "View Projects"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox92": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "350px",
        "marginLeft": "30px",
        "paddingLeft": "",
        "paddingTop": "10px",
        "fontFamily": "Roboto",
        "fontSize": "",
        "color": "#868383"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing slit mattis faucibus odio feugiat arcu scelerisque drogon sit amenot"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox93": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "100%",
        "height": "",
        "fontFamily": "Roboto",
        "fontSize": "24px",
        "lineHeight": "28px",
        "textAlign": "left",
        "marginLeft": "",
        "alignSelf": "auto",
        "position": "relative",
        "left": null,
        "overflow": "auto",
        "float": "none",
        "backgroundAttachment": "local",
        "paddingTop": "10px",
        "paddingBottom": "5px",
        "paddingRight": "",
        "paddingLeft": "25px"
      },
      "custom": {
        "text": "Website design for finance startup"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div49": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "35%",
        "height": "20px",
        "paddingLeft": "",
        "marginLeft": "25px",
        "paddingTop": "55px",
        "paddingBottom": "",
        "position": "relative",
        "left": null,
        "display": "block"
      },
      "callbacks": {}
    },
    "Div50": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "50%",
        "display": "block",
        "height": "50%",
        "top": 149,
        "bottom": 0,
        "paddingTop": "",
        "position": "relative"
      },
      "callbacks": {}
    },
    "Div51": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "635px",
        "height": "636px",
        "display": "contents",
        "float": "right",
        "top": -19,
        "alignSelf": "flex-start"
      },
      "callbacks": {}
    },
    "Div52": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "50%",
        "height": "636px",
        "marginTop": "",
        "top": null,
        "position": "relative",
        "float": "right",
        "backgroundColor": "#000000",
        "backgroundImage": "url(\"/app-assets/appx2.jpg\")",
        "backgroundClip": "padding-box",
        "WebkitBackgroundClip": "padding-box",
        "backgroundAttachment": "fixed",
        "backgroundPositionY": "",
        "backgroundPositionX": "",
        "backgroundOrigin": "border-box",
        "borderStyle": "none"
      },
      "callbacks": {}
    },
    "Div53": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "90%",
        "height": "636px",
        "textAlign": "left",
        "position": "relative",
        "display": "block",
        "marginLeft": "50px",
        "marginTop": "20px",
        "alignSelf": "auto",
        "borderRadius": "",
        "borderStyle": "solid",
        "borderColor": "#c5c5c5",
        "borderWidth": "1px",
        "marginRight": "50px"
      },
      "callbacks": {}
    },
    "TextBox94": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "Roboto",
        "color": "#0d0d0d",
        "fontSize": "18px",
        "lineHeight": "20px",
        "position": "relative",
        "float": "right",
        "marginRight": "",
        "marginLeft": ""
      },
      "custom": {
        "text": "Web Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox95": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "outlineStyle": "none",
        "backgroundColor": "#878787",
        "position": "relative",
        "width": "20px",
        "height": "0.8px",
        "left": null,
        "bottom": -9,
        "marginRight": "30px",
        "marginLeft": "60px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox96": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "Roboto",
        "fontSize": "18px",
        "lineHeight": "20px",
        "fontWeight": 400,
        "alignSelf": "flex-start",
        "width": "50px",
        "float": "left",
        "position": "relative",
        "marginLeft": ""
      },
      "custom": {
        "text": "App X"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox97": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "backgroundColor": "#000000",
        "height": "",
        "width": "35%",
        "marginLeft": "22px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox98": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontSize": "20px",
        "width": "140px",
        "height": "22px",
        "paddingTop": "10px",
        "marginTop": "10px",
        "right": null,
        "left": 25,
        "position": "relative",
        "fontFamily": "Roboto"
      },
      "custom": {
        "text": "View Projects"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox99": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "350px",
        "marginLeft": "30px",
        "paddingLeft": "",
        "paddingTop": "10px",
        "fontFamily": "Roboto",
        "fontSize": "",
        "color": "#868383"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing slit mattis faucibus odio feugiat arcu scelerisque drogon sit amenot"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox100": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "100%",
        "height": "",
        "fontFamily": "Roboto",
        "fontSize": "24px",
        "lineHeight": "28px",
        "textAlign": "left",
        "marginLeft": "",
        "alignSelf": "auto",
        "position": "relative",
        "left": null,
        "overflow": "auto",
        "float": "none",
        "backgroundAttachment": "local",
        "paddingTop": "10px",
        "paddingBottom": "5px",
        "paddingRight": "",
        "paddingLeft": "25px"
      },
      "custom": {
        "text": "Website design for finance startup"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div54": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "35%",
        "height": "20px",
        "paddingLeft": "",
        "marginLeft": "25px",
        "paddingTop": "55px",
        "paddingBottom": "",
        "position": "relative",
        "left": null,
        "display": "block"
      },
      "callbacks": {}
    },
    "TextBox104": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "backgroundColor": "#000000",
        "height": "",
        "width": "35%",
        "marginLeft": "22px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox105": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontSize": "20px",
        "width": "140px",
        "height": "22px",
        "paddingTop": "10px",
        "marginTop": "10px",
        "right": null,
        "left": null,
        "position": "relative",
        "fontFamily": "Roboto",
        "marginLeft": "30px"
      },
      "custom": {
        "text": "About me "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox106": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "350px",
        "marginLeft": "30px",
        "paddingLeft": "",
        "paddingTop": "10px",
        "fontFamily": "Roboto",
        "fontSize": "",
        "color": "#868383"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing slit mattis faucibus odio feugiat arcu scelerisque drogon sit amenot"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div64": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "height": "300px"
      },
      "callbacks": {}
    },
    "TextBox110": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginLeft": "30px",
        "paddingTop": "10px",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "48px",
        "lineHeight": "64px"
      },
      "custom": {
        "text": "Who's behind all this great work ?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox111": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginLeft": "30px",
        "paddingTop": "10px",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "48px",
        "lineHeight": "64px"
      },
      "custom": {
        "text": "Who's behind all this great work ?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox112": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "350px",
        "marginLeft": "30px",
        "paddingLeft": "",
        "paddingTop": "10px",
        "fontFamily": "Roboto",
        "fontSize": "",
        "color": "#868383"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing slit mattis faucibus odio feugiat arcu scelerisque drogon sit amenot"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox113": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontSize": "20px",
        "width": "140px",
        "height": "22px",
        "paddingTop": "10px",
        "marginTop": "10px",
        "right": null,
        "left": null,
        "position": "relative",
        "fontFamily": "Roboto",
        "marginLeft": "30px"
      },
      "custom": {
        "text": "About me "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox114": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "backgroundColor": "#000000",
        "height": "",
        "width": "35%",
        "marginLeft": "22px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox115": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginLeft": "30px",
        "paddingTop": "10px",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "48px",
        "lineHeight": "64px"
      },
      "custom": {
        "text": "Who's behind all this great work ?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox116": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "350px",
        "marginLeft": "30px",
        "paddingLeft": "",
        "paddingTop": "10px",
        "fontFamily": "Roboto",
        "fontSize": "",
        "color": "#868383"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing slit mattis faucibus odio feugiat arcu scelerisque drogon sit amenot"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox117": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontSize": "20px",
        "width": "140px",
        "height": "22px",
        "paddingTop": "10px",
        "marginTop": "10px",
        "right": null,
        "left": null,
        "position": "relative",
        "fontFamily": "Roboto",
        "marginLeft": "30px"
      },
      "custom": {
        "text": "About me "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox118": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "backgroundColor": "#000000",
        "height": "",
        "width": "35%",
        "marginLeft": "22px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div71": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "635px",
        "height": "636px",
        "display": "contents",
        "float": "right",
        "top": -19,
        "alignSelf": "flex-start"
      },
      "callbacks": {}
    },
    "Div72": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "50%",
        "display": "block",
        "height": "50%",
        "top": null,
        "bottom": 0,
        "paddingTop": "",
        "position": "relative"
      },
      "callbacks": {}
    },
    "Div73": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "90%",
        "height": "636px",
        "textAlign": "left",
        "position": "relative",
        "display": "block",
        "marginLeft": "50px",
        "marginTop": "40px",
        "alignSelf": "auto",
        "borderRadius": "",
        "borderStyle": "solid",
        "borderColor": "#c5c5c5",
        "borderWidth": "1px",
        "marginRight": "50px",
        "paddingTop": "20px",
        "paddingBottom": "",
        "marginBottom": "20px"
      },
      "callbacks": {}
    },
    "Image25": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "right": -502,
        "position": "relative",
        "top": -17
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/about%20me.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div81": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "height": "989px",
        "marginTop": "20px",
        "paddingTop": "10px"
      },
      "callbacks": {}
    },
    "Div82": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginBottom": "20px",
        "marginTop": "20px"
      },
      "callbacks": {}
    },
    "Div83": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "height": "860px"
      },
      "callbacks": {}
    },
    "Flex80": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "alignSelf": "center",
        "alignItems": "center",
        "justifyContent": "center",
        "marginLeft": "50px",
        "marginRight": "50px"
      },
      "callbacks": {}
    },
    "Div84": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "height": "334px",
        "width": "362.2px",
        "display": "block",
        "paddingLeft": "",
        "paddingTop": "",
        "paddingRight": "",
        "paddingBottom": "",
        "marginLeft": "10px",
        "marginTop": "10px",
        "marginRight": "10px",
        "marginBottom": "10px",
        "borderWidth": "",
        "borderRadius": "2px",
        "borderStyle": "none",
        "borderBottomWidth": "2px",
        "borderBottomStyle": "solid"
      },
      "callbacks": {}
    },
    "Image27": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginBottom": "32px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/ui.ux.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox120": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "26px",
        "lineHeight": "34px",
        "color": "#000000",
        "marginBottom": "16px"
      },
      "custom": {
        "text": "UI/UX Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox121": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "18px",
        "lineHeight": "30fpx",
        "color": "#686868",
        "backgroundColor": ""
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox122": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "18px",
        "lineHeight": "30fpx",
        "color": "#686868"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox123": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "26px",
        "lineHeight": "34px",
        "color": "#000000",
        "marginBottom": "16px"
      },
      "custom": {
        "text": "UI/UX Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image28": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginBottom": "32px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/product.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div90": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "height": "334px",
        "width": "362.2px",
        "display": "block",
        "paddingLeft": "",
        "paddingTop": "",
        "paddingRight": "",
        "paddingBottom": "",
        "marginLeft": "10px",
        "marginTop": "10px",
        "marginRight": "10px",
        "marginBottom": "10px",
        "borderWidth": "",
        "borderRadius": "2px",
        "borderStyle": "none",
        "borderBottomWidth": "2px",
        "borderBottomStyle": "solid"
      },
      "callbacks": {}
    },
    "TextBox124": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "18px",
        "lineHeight": "30fpx",
        "color": "#686868"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox125": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "26px",
        "lineHeight": "34px",
        "color": "#000000",
        "marginBottom": "16px"
      },
      "custom": {
        "text": "UI/UX Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image29": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginBottom": "32px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/web%20design.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div91": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "height": "334px",
        "width": "362.2px",
        "display": "block",
        "paddingLeft": "",
        "paddingTop": "",
        "paddingRight": "",
        "paddingBottom": "",
        "marginLeft": "10px",
        "marginTop": "10px",
        "marginRight": "10px",
        "marginBottom": "10px",
        "borderWidth": "",
        "borderRadius": "2px",
        "borderStyle": "none",
        "borderBottomWidth": "2px",
        "borderBottomStyle": "solid"
      },
      "callbacks": {}
    },
    "Image30": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginBottom": "32px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/motion%20graphics.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox126": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "26px",
        "lineHeight": "34px",
        "color": "#000000",
        "marginBottom": "16px"
      },
      "custom": {
        "text": "UI/UX Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox127": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "18px",
        "lineHeight": "30fpx",
        "color": "#686868"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image31": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginBottom": "32px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/brand%20design.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox128": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "26px",
        "lineHeight": "34px",
        "color": "#000000",
        "marginBottom": "16px"
      },
      "custom": {
        "text": "UI/UX Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox129": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "18px",
        "lineHeight": "30fpx",
        "color": "#686868"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox130": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "18px",
        "lineHeight": "30fpx",
        "color": "#686868",
        "backgroundColor": ""
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox131": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "26px",
        "lineHeight": "34px",
        "color": "#000000",
        "marginBottom": "16px"
      },
      "custom": {
        "text": "UI/UX Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image32": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginBottom": "32px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/user%20reaseach.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div92": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "height": "334px",
        "width": "362.2px",
        "display": "block",
        "paddingLeft": "",
        "paddingTop": "",
        "paddingRight": "",
        "paddingBottom": "",
        "marginLeft": "10px",
        "marginTop": "10px",
        "marginRight": "10px",
        "marginBottom": "10px",
        "borderWidth": "",
        "borderRadius": "2px",
        "borderStyle": "none",
        "borderBottomWidth": "2px",
        "borderBottomStyle": "solid"
      },
      "callbacks": {}
    },
    "Div93": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "height": "334px",
        "width": "362.2px",
        "display": "block",
        "paddingLeft": "",
        "paddingTop": "",
        "paddingRight": "",
        "paddingBottom": "",
        "marginLeft": "10px",
        "marginTop": "10px",
        "marginRight": "10px",
        "marginBottom": "10px",
        "borderWidth": "",
        "borderRadius": "2px",
        "borderStyle": "none",
        "borderBottomWidth": "2px",
        "borderBottomStyle": "solid"
      },
      "callbacks": {}
    },
    "Div94": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "height": "334px",
        "width": "362.2px",
        "display": "block",
        "paddingLeft": "",
        "paddingTop": "",
        "paddingRight": "",
        "paddingBottom": "",
        "marginLeft": "10px",
        "marginTop": "10px",
        "marginRight": "10px",
        "marginBottom": "10px",
        "borderWidth": "",
        "borderRadius": "2px",
        "borderStyle": "none",
        "borderBottomWidth": "2px",
        "borderBottomStyle": "solid"
      },
      "callbacks": {}
    },
    "Flex82": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "alignSelf": "center",
        "alignItems": "center",
        "justifyContent": "center",
        "marginRight": "50px",
        "marginLeft": "50px"
      },
      "callbacks": {}
    },
    "TextBox132": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "Roboto",
        "color": "#0d0d0d",
        "fontSize": "18px",
        "lineHeight": "20px",
        "position": "relative",
        "float": "right",
        "marginRight": "",
        "marginLeft": ""
      },
      "custom": {
        "text": "Web Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox133": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "outlineStyle": "none",
        "backgroundColor": "#878787",
        "position": "relative",
        "width": "20px",
        "height": "0.8px",
        "left": 70,
        "bottom": -9,
        "marginRight": "30px",
        "marginLeft": "60px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox134": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "Roboto",
        "fontSize": "18px",
        "lineHeight": "20px",
        "fontWeight": 400,
        "alignSelf": "flex-start",
        "width": "50px",
        "float": "left",
        "position": "relative",
        "marginLeft": ""
      },
      "custom": {
        "text": "App X"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox135": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "backgroundColor": "#000000",
        "height": "",
        "width": "35%",
        "marginLeft": "22px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox136": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontSize": "20px",
        "width": "140px",
        "height": "22px",
        "paddingTop": "10px",
        "marginTop": "10px",
        "right": null,
        "left": 25,
        "position": "relative",
        "fontFamily": "Roboto"
      },
      "custom": {
        "text": "View Projects"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox137": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "350px",
        "marginLeft": "30px",
        "paddingLeft": "",
        "paddingTop": "10px",
        "fontFamily": "Roboto",
        "fontSize": "",
        "color": "#868383"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing slit mattis faucibus odio feugiat arcu scelerisque drogon sit amenot"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox138": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "100%",
        "height": "",
        "fontFamily": "Roboto",
        "fontSize": "24px",
        "lineHeight": "28px",
        "textAlign": "left",
        "marginLeft": "",
        "alignSelf": "auto",
        "position": "relative",
        "left": null,
        "overflow": "auto",
        "float": "none",
        "backgroundAttachment": "local",
        "paddingTop": "10px",
        "paddingBottom": "5px",
        "paddingRight": "",
        "paddingLeft": "25px"
      },
      "custom": {
        "text": "Website design for finance startup"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div95": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "35%",
        "height": "20px",
        "paddingLeft": "",
        "marginLeft": "25px",
        "paddingTop": "55px",
        "paddingBottom": "",
        "position": "relative",
        "left": null,
        "display": "block"
      },
      "callbacks": {}
    },
    "Div96": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "50%",
        "display": "block",
        "height": "50%",
        "top": 149,
        "bottom": 0,
        "paddingTop": "",
        "position": "relative"
      },
      "callbacks": {}
    },
    "Div97": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "635px",
        "height": "636px",
        "display": "contents",
        "float": "right",
        "top": -19,
        "alignSelf": "flex-start"
      },
      "callbacks": {}
    },
    "Div98": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "50%",
        "height": "636px",
        "marginTop": "",
        "top": null,
        "position": "relative",
        "float": "right",
        "backgroundColor": "#000000",
        "backgroundImage": "url(\"/app-assets/appx2.jpg\")",
        "backgroundClip": "padding-box",
        "WebkitBackgroundClip": "padding-box",
        "backgroundAttachment": "fixed",
        "backgroundPositionY": "",
        "backgroundPositionX": "",
        "backgroundOrigin": "border-box",
        "borderStyle": "none"
      },
      "callbacks": {}
    },
    "Div99": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "90%",
        "height": "636px",
        "textAlign": "left",
        "position": "relative",
        "display": "block",
        "marginLeft": "50px",
        "marginTop": "20px",
        "alignSelf": "auto",
        "borderRadius": "",
        "borderStyle": "solid",
        "borderColor": "#c5c5c5",
        "borderWidth": "1px",
        "marginRight": "50px"
      },
      "callbacks": {}
    },
    "TextBox139": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "Roboto",
        "fontSize": "18px",
        "lineHeight": "20px",
        "fontWeight": 400,
        "alignSelf": "flex-start",
        "width": "50px",
        "float": "left",
        "position": "relative",
        "marginLeft": ""
      },
      "custom": {
        "text": "App X"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox140": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "outlineStyle": "none",
        "backgroundColor": "#878787",
        "position": "relative",
        "width": "20px",
        "height": "0.8px",
        "left": 70,
        "bottom": -9,
        "marginRight": "30px",
        "marginLeft": "60px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox141": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "Roboto",
        "color": "#0d0d0d",
        "fontSize": "18px",
        "lineHeight": "20px",
        "position": "relative",
        "float": "right",
        "marginRight": "",
        "marginLeft": ""
      },
      "custom": {
        "text": "Web Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div100": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "35%",
        "height": "20px",
        "paddingLeft": "",
        "marginLeft": "25px",
        "paddingTop": "55px",
        "paddingBottom": "",
        "position": "relative",
        "left": null,
        "display": "block"
      },
      "callbacks": {}
    },
    "TextBox142": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "100%",
        "height": "",
        "fontFamily": "Roboto",
        "fontSize": "24px",
        "lineHeight": "28px",
        "textAlign": "left",
        "marginLeft": "",
        "alignSelf": "auto",
        "position": "relative",
        "left": null,
        "overflow": "auto",
        "float": "none",
        "backgroundAttachment": "local",
        "paddingTop": "10px",
        "paddingBottom": "5px",
        "paddingRight": "",
        "paddingLeft": "25px"
      },
      "custom": {
        "text": "Website design for finance startup"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox143": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "350px",
        "marginLeft": "30px",
        "paddingLeft": "",
        "paddingTop": "10px",
        "fontFamily": "Roboto",
        "fontSize": "",
        "color": "#868383"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing slit mattis faucibus odio feugiat arcu scelerisque drogon sit amenot"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox144": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontSize": "20px",
        "width": "140px",
        "height": "22px",
        "paddingTop": "10px",
        "marginTop": "10px",
        "right": null,
        "left": 25,
        "position": "relative",
        "fontFamily": "Roboto"
      },
      "custom": {
        "text": "View Projects"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox145": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "backgroundColor": "#000000",
        "height": "",
        "width": "35%",
        "marginLeft": "22px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox146": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "Roboto",
        "fontSize": "18px",
        "lineHeight": "20px",
        "fontWeight": 400,
        "alignSelf": "flex-start",
        "width": "50px",
        "float": "left",
        "position": "relative",
        "marginLeft": ""
      },
      "custom": {
        "text": "App X"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox147": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "outlineStyle": "none",
        "backgroundColor": "#878787",
        "position": "relative",
        "width": "20px",
        "height": "0.8px",
        "left": null,
        "bottom": -9,
        "marginRight": "30px",
        "marginLeft": "60px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox148": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "Roboto",
        "color": "#0d0d0d",
        "fontSize": "18px",
        "lineHeight": "20px",
        "position": "relative",
        "float": "right",
        "marginRight": "",
        "marginLeft": ""
      },
      "custom": {
        "text": "Web Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox149": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "Roboto",
        "color": "#0d0d0d",
        "fontSize": "18px",
        "lineHeight": "20px",
        "position": "relative",
        "float": "right",
        "marginRight": "",
        "marginLeft": ""
      },
      "custom": {
        "text": "Web Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox150": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "outlineStyle": "none",
        "backgroundColor": "#878787",
        "position": "relative",
        "width": "20px",
        "height": "0.8px",
        "left": 70,
        "bottom": -9,
        "marginRight": "30px",
        "marginLeft": "60px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox151": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "Roboto",
        "fontSize": "18px",
        "lineHeight": "20px",
        "fontWeight": 400,
        "alignSelf": "flex-start",
        "width": "50px",
        "float": "left",
        "position": "relative",
        "marginLeft": ""
      },
      "custom": {
        "text": "App X"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div104": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "35%",
        "height": "20px",
        "paddingLeft": "",
        "marginLeft": "25px",
        "paddingTop": "55px",
        "paddingBottom": "",
        "position": "relative",
        "left": null,
        "display": "block"
      },
      "callbacks": {}
    },
    "TextBox152": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "100%",
        "height": "",
        "fontFamily": "Roboto",
        "fontSize": "24px",
        "lineHeight": "28px",
        "textAlign": "left",
        "marginLeft": "",
        "alignSelf": "auto",
        "position": "relative",
        "left": null,
        "overflow": "auto",
        "float": "none",
        "backgroundAttachment": "local",
        "paddingTop": "10px",
        "paddingBottom": "5px",
        "paddingRight": "",
        "paddingLeft": "25px"
      },
      "custom": {
        "text": "Website design for finance startup"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox153": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "350px",
        "marginLeft": "30px",
        "paddingLeft": "",
        "paddingTop": "10px",
        "fontFamily": "Roboto",
        "fontSize": "",
        "color": "#868383"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing slit mattis faucibus odio feugiat arcu scelerisque drogon sit amenot"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox154": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontSize": "20px",
        "width": "140px",
        "height": "22px",
        "paddingTop": "10px",
        "marginTop": "10px",
        "right": null,
        "left": 25,
        "position": "relative",
        "fontFamily": "Roboto"
      },
      "custom": {
        "text": "View Projects"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox155": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "backgroundColor": "#000000",
        "height": "",
        "width": "35%",
        "marginLeft": "22px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox156": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "backgroundColor": "#000000",
        "height": "",
        "width": "35%",
        "marginLeft": "22px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox157": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontSize": "20px",
        "width": "140px",
        "height": "22px",
        "paddingTop": "10px",
        "marginTop": "10px",
        "right": null,
        "left": 25,
        "position": "relative",
        "fontFamily": "Roboto"
      },
      "custom": {
        "text": "View Projects"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox158": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "350px",
        "marginLeft": "30px",
        "paddingLeft": "",
        "paddingTop": "10px",
        "fontFamily": "Roboto",
        "fontSize": "",
        "color": "#868383"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing slit mattis faucibus odio feugiat arcu scelerisque drogon sit amenot"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox159": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "100%",
        "height": "",
        "fontFamily": "Roboto",
        "fontSize": "24px",
        "lineHeight": "28px",
        "textAlign": "left",
        "marginLeft": "",
        "alignSelf": "auto",
        "position": "relative",
        "left": null,
        "overflow": "auto",
        "float": "none",
        "backgroundAttachment": "local",
        "paddingTop": "10px",
        "paddingBottom": "5px",
        "paddingRight": "",
        "paddingLeft": "25px"
      },
      "custom": {
        "text": "Website design for finance startup"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div105": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "35%",
        "height": "20px",
        "paddingLeft": "",
        "marginLeft": "25px",
        "paddingTop": "55px",
        "paddingBottom": "",
        "position": "relative",
        "left": null,
        "display": "block"
      },
      "callbacks": {}
    },
    "Div107": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "50%",
        "height": "636px",
        "marginTop": "",
        "top": null,
        "position": "relative",
        "float": "right",
        "backgroundColor": "#000000",
        "backgroundImage": "url(\"/app-assets/appx2.jpg\")",
        "backgroundClip": "padding-box",
        "WebkitBackgroundClip": "padding-box",
        "backgroundAttachment": "fixed",
        "backgroundPositionY": "",
        "backgroundPositionX": "",
        "backgroundOrigin": "border-box",
        "borderStyle": "none"
      },
      "callbacks": {}
    },
    "Div108": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "635px",
        "height": "636px",
        "display": "contents",
        "float": "right",
        "top": -19,
        "alignSelf": "flex-start"
      },
      "callbacks": {}
    },
    "Div109": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "50%",
        "display": "block",
        "height": "50%",
        "top": 149,
        "bottom": 0,
        "paddingTop": "",
        "position": "relative"
      },
      "callbacks": {}
    },
    "TextBox162": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "Roboto",
        "color": "#0d0d0d",
        "fontSize": "18px",
        "lineHeight": "20px",
        "position": "relative",
        "float": "right",
        "marginRight": "",
        "marginLeft": ""
      },
      "custom": {
        "text": "Web Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox163": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "outlineStyle": "none",
        "backgroundColor": "#878787",
        "position": "relative",
        "width": "20px",
        "height": "0.8px",
        "left": null,
        "bottom": -9,
        "marginRight": "30px",
        "marginLeft": "60px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox164": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "Roboto",
        "fontSize": "18px",
        "lineHeight": "20px",
        "fontWeight": 400,
        "alignSelf": "flex-start",
        "width": "50px",
        "float": "left",
        "position": "relative",
        "marginLeft": ""
      },
      "custom": {
        "text": "App X"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox165": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "backgroundColor": "#000000",
        "height": "",
        "width": "35%",
        "marginLeft": "22px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox166": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontSize": "20px",
        "width": "140px",
        "height": "22px",
        "paddingTop": "10px",
        "marginTop": "10px",
        "right": null,
        "left": 25,
        "position": "relative",
        "fontFamily": "Roboto"
      },
      "custom": {
        "text": "View Projects"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox167": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "350px",
        "marginLeft": "30px",
        "paddingLeft": "",
        "paddingTop": "10px",
        "fontFamily": "Roboto",
        "fontSize": "",
        "color": "#868383"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing slit mattis faucibus odio feugiat arcu scelerisque drogon sit amenot"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox168": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "100%",
        "height": "",
        "fontFamily": "Roboto",
        "fontSize": "24px",
        "lineHeight": "28px",
        "textAlign": "left",
        "marginLeft": "",
        "alignSelf": "auto",
        "position": "relative",
        "left": null,
        "overflow": "auto",
        "float": "none",
        "backgroundAttachment": "local",
        "paddingTop": "10px",
        "paddingBottom": "5px",
        "paddingRight": "",
        "paddingLeft": "25px"
      },
      "custom": {
        "text": "Website design for finance startup"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div117": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "35%",
        "height": "20px",
        "paddingLeft": "",
        "marginLeft": "25px",
        "paddingTop": "55px",
        "paddingBottom": "",
        "position": "relative",
        "left": null,
        "display": "block"
      },
      "callbacks": {}
    },
    "TextBox169": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "Roboto",
        "color": "#0d0d0d",
        "fontSize": "18px",
        "lineHeight": "20px",
        "position": "relative",
        "float": "right",
        "marginRight": "",
        "marginLeft": ""
      },
      "custom": {
        "text": "Web Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox170": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "outlineStyle": "none",
        "backgroundColor": "#878787",
        "position": "relative",
        "width": "20px",
        "height": "0.8px",
        "left": null,
        "bottom": -9,
        "marginRight": "30px",
        "marginLeft": "60px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox171": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "Roboto",
        "fontSize": "18px",
        "lineHeight": "20px",
        "fontWeight": 400,
        "alignSelf": "flex-start",
        "width": "50px",
        "float": "left",
        "position": "relative",
        "marginLeft": ""
      },
      "custom": {
        "text": "App X"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox172": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "backgroundColor": "#000000",
        "height": "",
        "width": "35%",
        "marginLeft": "22px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox173": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontSize": "20px",
        "width": "140px",
        "height": "22px",
        "paddingTop": "10px",
        "marginTop": "10px",
        "right": null,
        "left": 25,
        "position": "relative",
        "fontFamily": "Roboto"
      },
      "custom": {
        "text": "View Projects"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox174": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "350px",
        "marginLeft": "30px",
        "paddingLeft": "",
        "paddingTop": "10px",
        "fontFamily": "Roboto",
        "fontSize": "",
        "color": "#868383"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing slit mattis faucibus odio feugiat arcu scelerisque drogon sit amenot"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox175": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "100%",
        "height": "",
        "fontFamily": "Roboto",
        "fontSize": "24px",
        "lineHeight": "28px",
        "textAlign": "left",
        "marginLeft": "",
        "alignSelf": "auto",
        "position": "relative",
        "left": null,
        "overflow": "auto",
        "float": "none",
        "backgroundAttachment": "local",
        "paddingTop": "10px",
        "paddingBottom": "5px",
        "paddingRight": "",
        "paddingLeft": "25px"
      },
      "custom": {
        "text": "Website design for finance startup"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div122": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "35%",
        "height": "20px",
        "paddingLeft": "",
        "marginLeft": "25px",
        "paddingTop": "55px",
        "paddingBottom": "",
        "position": "relative",
        "left": null,
        "display": "block"
      },
      "callbacks": {}
    },
    "TextBox176": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "Roboto",
        "fontSize": "18px",
        "lineHeight": "20px",
        "fontWeight": 400,
        "alignSelf": "flex-start",
        "width": "50px",
        "float": "left",
        "position": "relative",
        "marginLeft": ""
      },
      "custom": {
        "text": "App X"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox177": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "outlineStyle": "none",
        "backgroundColor": "#878787",
        "position": "relative",
        "width": "20px",
        "height": "0.8px",
        "left": 70,
        "bottom": -9,
        "marginRight": "30px",
        "marginLeft": "60px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox178": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "Roboto",
        "color": "#0d0d0d",
        "fontSize": "18px",
        "lineHeight": "20px",
        "position": "relative",
        "float": "right",
        "marginRight": "",
        "marginLeft": ""
      },
      "custom": {
        "text": "Web Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox183": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "Roboto",
        "fontSize": "18px",
        "lineHeight": "20px",
        "fontWeight": 400,
        "alignSelf": "flex-start",
        "width": "50px",
        "float": "left",
        "position": "relative",
        "marginLeft": ""
      },
      "custom": {
        "text": "App X"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox184": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "outlineStyle": "none",
        "backgroundColor": "#878787",
        "position": "relative",
        "width": "20px",
        "height": "0.8px",
        "left": null,
        "bottom": -9,
        "marginRight": "30px",
        "marginLeft": "60px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox185": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "Roboto",
        "color": "#0d0d0d",
        "fontSize": "18px",
        "lineHeight": "20px",
        "position": "relative",
        "float": "right",
        "marginRight": "",
        "marginLeft": ""
      },
      "custom": {
        "text": "Web Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox186": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "Roboto",
        "color": "#0d0d0d",
        "fontSize": "18px",
        "lineHeight": "20px",
        "position": "relative",
        "float": "right",
        "marginRight": "",
        "marginLeft": ""
      },
      "custom": {
        "text": "Web Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox187": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "outlineStyle": "none",
        "backgroundColor": "#878787",
        "position": "relative",
        "width": "20px",
        "height": "0.8px",
        "left": 70,
        "bottom": -9,
        "marginRight": "30px",
        "marginLeft": "60px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox188": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "Roboto",
        "fontSize": "18px",
        "lineHeight": "20px",
        "fontWeight": 400,
        "alignSelf": "flex-start",
        "width": "50px",
        "float": "left",
        "position": "relative",
        "marginLeft": ""
      },
      "custom": {
        "text": "App X"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div143": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "",
        "height": "2100px",
        "marginTop": "5px"
      },
      "callbacks": {}
    },
    "TextBox202": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "Roboto",
        "color": "#0d0d0d",
        "fontSize": "18px",
        "lineHeight": "20px",
        "position": "relative",
        "float": "right",
        "marginRight": "",
        "marginLeft": ""
      },
      "custom": {
        "text": "Web Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox203": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "outlineStyle": "none",
        "backgroundColor": "#878787",
        "position": "relative",
        "width": "20px",
        "height": "0.8px",
        "left": null,
        "bottom": -9,
        "marginRight": "30px",
        "marginLeft": "60px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox204": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "Roboto",
        "fontSize": "18px",
        "lineHeight": "20px",
        "fontWeight": 400,
        "alignSelf": "flex-start",
        "width": "50px",
        "float": "left",
        "position": "relative",
        "marginLeft": ""
      },
      "custom": {
        "text": "App X"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox205": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "backgroundColor": "#000000",
        "height": "",
        "width": "35%",
        "marginLeft": "22px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox206": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontSize": "20px",
        "width": "140px",
        "height": "22px",
        "paddingTop": "10px",
        "marginTop": "10px",
        "right": null,
        "left": 25,
        "position": "relative",
        "fontFamily": "Roboto"
      },
      "custom": {
        "text": "View Projects"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox207": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "350px",
        "marginLeft": "30px",
        "paddingLeft": "",
        "paddingTop": "10px",
        "fontFamily": "Roboto",
        "fontSize": "",
        "color": "#868383"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing slit mattis faucibus odio feugiat arcu scelerisque drogon sit amenot"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox208": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "100%",
        "height": "",
        "fontFamily": "Roboto",
        "fontSize": "24px",
        "lineHeight": "28px",
        "textAlign": "left",
        "marginLeft": "",
        "alignSelf": "auto",
        "position": "relative",
        "left": null,
        "overflow": "auto",
        "float": "none",
        "backgroundAttachment": "local",
        "paddingTop": "10px",
        "paddingBottom": "5px",
        "paddingRight": "",
        "paddingLeft": "25px"
      },
      "custom": {
        "text": "Website design for finance startup"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div144": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "35%",
        "height": "20px",
        "paddingLeft": "",
        "marginLeft": "25px",
        "paddingTop": "55px",
        "paddingBottom": "",
        "position": "relative",
        "left": null,
        "display": "block"
      },
      "callbacks": {}
    },
    "TextBox209": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "Roboto",
        "color": "#0d0d0d",
        "fontSize": "18px",
        "lineHeight": "20px",
        "position": "relative",
        "float": "right",
        "marginRight": "",
        "marginLeft": ""
      },
      "custom": {
        "text": "Web Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox210": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "outlineStyle": "none",
        "backgroundColor": "#878787",
        "position": "relative",
        "width": "20px",
        "height": "0.8px",
        "left": null,
        "bottom": -9,
        "marginRight": "30px",
        "marginLeft": "60px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox211": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "Roboto",
        "fontSize": "18px",
        "lineHeight": "20px",
        "fontWeight": 400,
        "alignSelf": "flex-start",
        "width": "50px",
        "float": "left",
        "position": "relative",
        "marginLeft": ""
      },
      "custom": {
        "text": "App X"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox216": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "Roboto",
        "color": "#0d0d0d",
        "fontSize": "18px",
        "lineHeight": "20px",
        "position": "relative",
        "float": "right",
        "marginRight": "",
        "marginLeft": ""
      },
      "custom": {
        "text": "Web Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox217": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "outlineStyle": "none",
        "backgroundColor": "#878787",
        "position": "relative",
        "width": "20px",
        "height": "0.8px",
        "left": null,
        "bottom": -9,
        "marginRight": "30px",
        "marginLeft": "60px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox218": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "Roboto",
        "fontSize": "18px",
        "lineHeight": "20px",
        "fontWeight": 400,
        "alignSelf": "flex-start",
        "width": "50px",
        "float": "left",
        "position": "relative",
        "marginLeft": ""
      },
      "custom": {
        "text": "App X"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox219": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "backgroundColor": "#000000",
        "height": "",
        "width": "35%",
        "marginLeft": "22px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox220": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontSize": "20px",
        "width": "140px",
        "height": "22px",
        "paddingTop": "10px",
        "marginTop": "10px",
        "right": null,
        "left": 25,
        "position": "relative",
        "fontFamily": "Roboto"
      },
      "custom": {
        "text": "View Projects"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox221": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "350px",
        "marginLeft": "30px",
        "paddingLeft": "",
        "paddingTop": "10px",
        "fontFamily": "Roboto",
        "fontSize": "",
        "color": "#868383"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing slit mattis faucibus odio feugiat arcu scelerisque drogon sit amenot"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox222": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "100%",
        "height": "",
        "fontFamily": "Roboto",
        "fontSize": "24px",
        "lineHeight": "28px",
        "textAlign": "left",
        "marginLeft": "",
        "alignSelf": "auto",
        "position": "relative",
        "left": null,
        "overflow": "auto",
        "float": "none",
        "backgroundAttachment": "local",
        "paddingTop": "10px",
        "paddingBottom": "5px",
        "paddingRight": "",
        "paddingLeft": "25px"
      },
      "custom": {
        "text": "Website design for finance startup"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div154": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "35%",
        "height": "20px",
        "paddingLeft": "",
        "marginLeft": "25px",
        "paddingTop": "55px",
        "paddingBottom": "",
        "position": "relative",
        "left": null,
        "display": "block"
      },
      "callbacks": {}
    },
    "TextBox225": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "Roboto",
        "color": "#0d0d0d",
        "fontSize": "18px",
        "lineHeight": "20px",
        "position": "relative",
        "float": "left",
        "marginRight": "",
        "marginLeft": ""
      },
      "custom": {
        "text": "Web Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox233": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "Roboto",
        "color": "#0d0d0d",
        "fontSize": "18px",
        "lineHeight": "20px",
        "position": "relative",
        "float": "right",
        "marginRight": "",
        "marginLeft": ""
      },
      "custom": {
        "text": "Web Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox234": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "outlineStyle": "none",
        "backgroundColor": "#878787",
        "position": "relative",
        "width": "20px",
        "height": "0.8px",
        "left": 70,
        "bottom": -9,
        "marginRight": "30px",
        "marginLeft": "60px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox235": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "Roboto",
        "fontSize": "18px",
        "lineHeight": "20px",
        "fontWeight": 400,
        "alignSelf": "flex-start",
        "width": "50px",
        "float": "left",
        "position": "relative",
        "marginLeft": ""
      },
      "custom": {
        "text": "App X"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox236": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "100%",
        "height": "",
        "fontFamily": "Roboto",
        "fontSize": "18px",
        "lineHeight": "28px",
        "textAlign": "left",
        "marginLeft": "",
        "alignSelf": "auto",
        "position": "relative",
        "left": null,
        "overflow": "auto",
        "float": "none",
        "backgroundAttachment": "local",
        "paddingTop": "10px",
        "paddingBottom": "5px",
        "paddingRight": "",
        "paddingLeft": "25px",
        "color": "#686868"
      },
      "custom": {
        "text": "Design - September 1, 2022"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox237": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "350px",
        "marginLeft": "30px",
        "paddingLeft": "",
        "paddingTop": "10px",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "24px",
        "color": "#000000",
        "lineHeight": "30px"
      },
      "custom": {
        "text": "What did I learn from doing 50+ design sprints?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox239": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "backgroundColor": "#000000",
        "height": "",
        "width": "35%",
        "marginLeft": "22px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox240": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "backgroundColor": "#000000",
        "height": "",
        "width": "35%",
        "marginLeft": "22px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox241": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontSize": "20px",
        "width": "140px",
        "height": "22px",
        "paddingTop": "10px",
        "marginTop": "10px",
        "right": null,
        "left": 25,
        "position": "relative",
        "fontFamily": "Roboto"
      },
      "custom": {
        "text": "View Projects"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox242": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "350px",
        "marginLeft": "30px",
        "paddingLeft": "",
        "paddingTop": "10px",
        "fontFamily": "Roboto",
        "fontSize": "",
        "color": "#868383"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing slit mattis faucibus odio feugiat arcu scelerisque drogon sit amenot"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox243": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "100%",
        "height": "",
        "fontFamily": "Roboto",
        "fontSize": "24px",
        "lineHeight": "28px",
        "textAlign": "left",
        "marginLeft": "",
        "alignSelf": "auto",
        "position": "relative",
        "left": null,
        "overflow": "auto",
        "float": "none",
        "backgroundAttachment": "local",
        "paddingTop": "10px",
        "paddingBottom": "5px",
        "paddingRight": "",
        "paddingLeft": "25px"
      },
      "custom": {
        "text": "Website design for finance startup"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div164": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "35%",
        "height": "20px",
        "paddingLeft": "",
        "marginLeft": "25px",
        "paddingTop": "55px",
        "paddingBottom": "",
        "position": "relative",
        "left": null,
        "display": "block"
      },
      "callbacks": {}
    },
    "Div167": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "635px",
        "height": "636px",
        "display": "contents",
        "float": "right",
        "top": -19,
        "alignSelf": "flex-start"
      },
      "callbacks": {}
    },
    "Div168": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "40%",
        "display": "block",
        "height": "50%",
        "top": 129,
        "bottom": 0,
        "paddingTop": "",
        "position": "relative"
      },
      "callbacks": {}
    },
    "Div172": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "height": "300px"
      },
      "callbacks": {}
    },
    "Div173": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "90%",
        "height": "436px",
        "textAlign": "left",
        "position": "relative",
        "display": "block",
        "marginLeft": "50px",
        "marginTop": "20px",
        "alignSelf": "auto",
        "borderRadius": "",
        "borderStyle": "solid",
        "borderColor": "#c5c5c5",
        "borderWidth": "1px",
        "marginRight": "50px"
      },
      "callbacks": {}
    },
    "TextBox245": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "48px",
        "lineHeight": "64px",
        "textAlign": "left",
        "width": "70%",
        "backgroundAttachment": "fixed",
        "float": "left"
      },
      "custom": {
        "text": "Article & News"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div175": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "",
        "height": "1200px"
      },
      "callbacks": {}
    },
    "TextBox246": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "24px",
        "lineHeight": "26px",
        "textAlign": "center",
        "position": "relative",
        "float": "right",
        "backgroundAttachment": "scroll",
        "paddingTop": "15px"
      },
      "custom": {
        "text": "Browse more articles"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex83": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "marginLeft": "50px",
        "marginRight": "50px"
      },
      "callbacks": {}
    },
    "Image33": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "30px",
        "height": "30px",
        "marginTop": "10px"
      },
      "custom": {
        "alt": "",
        "src": "/app-assets/arrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex86": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px #000000",
        "marginLeft": "50px",
        "marginRight": "50px"
      },
      "callbacks": {}
    },
    "TextBox247": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px #000000",
        "fontSize": "48px",
        "lineHeight": "64px",
        "fontFamily": "IBM Plex Sans",
        "width": "75%",
        "borderBottomWidth": "4px",
        "borderBottomStyle": "solid"
      },
      "custom": {
        "text": "Interested in working together? Get in touch today."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button9": {
      "styles": {
        "color": "#00000099",
        "backgroundColor": "#ffffff",
        "paddingTop": "14px",
        "paddingLeft": "25px",
        "paddingBottom": "14px",
        "paddingRight": "15px",
        "fontSize": "70px",
        "borderRadius": "55%",
        "outline": "none",
        "fontWeight": 400,
        "textAlign": "center",
        "borderWidth": "3px",
        "borderStyle": "solid",
        "borderColor": "#000000",
        "cursor": "pointer",
        "userSelect": "none",
        "boxShadow": "0px 00px 0px 0px ",
        "height": "120px",
        "width": "120px",
        "fontFamily": "IBM Plex Sans",
        "wordWrap": "normal",
        "lineHeight": "",
        "alignSelf": "auto",
        "minHeight": "%",
        "overflow": "visible",
        "backgroundOrigin": "border-box",
        "backgroundAttachment": "local",
        "backgroundPositionY": "",
        "backgroundClip": "padding-box",
        "WebkitBackgroundClip": "padding-box",
        "position": "relative",
        "float": "right",
        "marginLeft": "15px",
        "marginRight": "15px"
      },
      "custom": {
        "text": ">"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div176": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px #000000",
        "height": "400px",
        "marginLeft": "50px",
        "marginRight": "50px"
      },
      "callbacks": {}
    },
    "TextBox250": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px #000000",
        "marginLeft": "50px",
        "marginRight": "200px",
        "paddingBottom": "",
        "marginBottom": "",
        "marginTop": "24px",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "22px",
        "lineHeight": "36px",
        "color": "#686868"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit nulla arcu porttitor molestie sed mauris sollicitudin id ornare egestas."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex87": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "height": "",
        "width": "%",
        "marginLeft": "50px",
        "marginRight": "50px"
      },
      "callbacks": {}
    },
    "Div177": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "35%",
        "overflow": "auto",
        "height": "400px"
      },
      "callbacks": {}
    },
    "Div178": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "45%"
      },
      "callbacks": {}
    },
    "Div179": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "20%",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "18px",
        "lineHeight": "20px",
        "paddingTop": "5px",
        "paddingRight": "5px",
        "paddingBottom": "5px",
        "paddingLeft": "5px",
        "height": "300px"
      },
      "callbacks": {}
    },
    "Image34": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px #000000"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/logo.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox251": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px #000000",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "18px",
        "lineHeight": "30px",
        "color": "#686868",
        "marginTop": "35px",
        "marginBottom": "53px"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet tragon consectetur adipiscing elit mattis faucibus odio feugiat arcu scelerisque"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Input1": {
      "styles": {
        "boxSizing": "border-box",
        "fontVariant": "tabular-nums",
        "fontFeatureSettings": "tnum",
        "paddingTop": "14px",
        "paddingLeft": "11px",
        "paddingBottom": "14px",
        "paddingRight": "11px",
        "color": "#000000d9",
        "fontSize": "14px",
        "backgroundColor": "#fff",
        "backgroundImage": "none",
        "borderWidth": "",
        "borderStyle": "solid",
        "borderColor": "#d9d9d9",
        "borderRadius": "",
        "boxShadow": "0px 00px 0px 0px ",
        "borderBottomWidth": "2px",
        "borderBottomStyle": "solid",
        "borderBottomColor": "#000000",
        "width": "100%",
        "borderTopStyle": "none",
        "fontFamily": "IBM Plex Sans",
        "lineHeight": "20px",
        "borderLeftStyle": "none",
        "borderRightStyle": "none"
      },
      "custom": {
        "value": "",
        "placeholder": "Enter your Email"
      },
      "callbacks": {}
    },
    "Flex88": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "marginTop": "52px"
      },
      "callbacks": {}
    },
    "TextBox253": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px #000000",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "22px",
        "lineHeight": "20px"
      },
      "custom": {
        "text": "Subscribe"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/"
            }
          }
        ]
      }
    },
    "Image35": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px #000000",
        "width": "25px",
        "height": "25px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/"
            }
          }
        ]
      }
    },
    "TextBox255": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "20px",
        "lineHeight": "30px",
        "marginBottom": "26px"
      },
      "custom": {
        "text": "Menu"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex89": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px #000000",
        "height": "400px"
      },
      "callbacks": {}
    },
    "Div180": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "18px",
        "lineHeight": "20px",
        "paddingTop": "5px",
        "paddingRight": "5px",
        "paddingLeft": "5px",
        "paddingBottom": "5px",
        "display": "block",
        "position": "relative",
        "width": "30%",
        "height": "300px"
      },
      "callbacks": {}
    },
    "TextBox256": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "paddingTop": "5px",
        "paddingBottom": "5px",
        "paddingLeft": "",
        "paddingRight": ""
      },
      "custom": {
        "text": "Home V1"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox257": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "paddingTop": "5px",
        "paddingBottom": "5px"
      },
      "custom": {
        "text": "Home V1"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox258": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "paddingTop": "5px",
        "paddingBottom": "5px"
      },
      "custom": {
        "text": "Home V1"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox259": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "paddingTop": "5px",
        "paddingBottom": "5px"
      },
      "custom": {
        "text": "Home V1"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox260": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "paddingTop": "5px",
        "paddingBottom": "5px"
      },
      "custom": {
        "text": "Home V1"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox261": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "paddingTop": "5px",
        "paddingBottom": "5px"
      },
      "custom": {
        "text": "Home V1"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox272": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "Roboto",
        "color": "#0d0d0d",
        "fontSize": "18px",
        "lineHeight": "20px",
        "position": "relative",
        "float": "right",
        "marginRight": "",
        "marginLeft": ""
      },
      "custom": {
        "text": "Web Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox273": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "outlineStyle": "none",
        "backgroundColor": "#878787",
        "position": "relative",
        "width": "20px",
        "height": "0.8px",
        "left": null,
        "bottom": -9,
        "marginRight": "30px",
        "marginLeft": "60px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox274": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "Roboto",
        "fontSize": "18px",
        "lineHeight": "20px",
        "fontWeight": 400,
        "alignSelf": "flex-start",
        "width": "50px",
        "float": "left",
        "position": "relative",
        "marginLeft": ""
      },
      "custom": {
        "text": "App X"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox275": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "backgroundColor": "#000000",
        "height": "",
        "width": "35%",
        "marginLeft": "22px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox276": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontSize": "20px",
        "width": "140px",
        "height": "22px",
        "paddingTop": "10px",
        "marginTop": "10px",
        "right": null,
        "left": 25,
        "position": "relative",
        "fontFamily": "Roboto"
      },
      "custom": {
        "text": "View Projects"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox277": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "350px",
        "marginLeft": "30px",
        "paddingLeft": "",
        "paddingTop": "10px",
        "fontFamily": "Roboto",
        "fontSize": "",
        "color": "#868383"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing slit mattis faucibus odio feugiat arcu scelerisque drogon sit amenot"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox278": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "100%",
        "height": "",
        "fontFamily": "Roboto",
        "fontSize": "24px",
        "lineHeight": "28px",
        "textAlign": "left",
        "marginLeft": "",
        "alignSelf": "auto",
        "position": "relative",
        "left": null,
        "overflow": "auto",
        "float": "none",
        "backgroundAttachment": "local",
        "paddingTop": "10px",
        "paddingBottom": "5px",
        "paddingRight": "",
        "paddingLeft": "25px"
      },
      "custom": {
        "text": "Website design for finance startup"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div183": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "35%",
        "height": "20px",
        "paddingLeft": "",
        "marginLeft": "25px",
        "paddingTop": "55px",
        "paddingBottom": "",
        "position": "relative",
        "left": null,
        "display": "block"
      },
      "callbacks": {}
    },
    "TextBox279": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "Roboto",
        "color": "#0d0d0d",
        "fontSize": "18px",
        "lineHeight": "20px",
        "position": "relative",
        "float": "right",
        "marginRight": "",
        "marginLeft": ""
      },
      "custom": {
        "text": "Web Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox280": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "outlineStyle": "none",
        "backgroundColor": "#878787",
        "position": "relative",
        "width": "20px",
        "height": "0.8px",
        "left": null,
        "bottom": -9,
        "marginRight": "30px",
        "marginLeft": "60px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox281": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "Roboto",
        "fontSize": "18px",
        "lineHeight": "20px",
        "fontWeight": 400,
        "alignSelf": "flex-start",
        "width": "50px",
        "float": "left",
        "position": "relative",
        "marginLeft": ""
      },
      "custom": {
        "text": "App X"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox282": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "backgroundColor": "#000000",
        "height": "",
        "width": "35%",
        "marginLeft": "22px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox283": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontSize": "20px",
        "width": "140px",
        "height": "22px",
        "paddingTop": "10px",
        "marginTop": "10px",
        "right": null,
        "left": 25,
        "position": "relative",
        "fontFamily": "Roboto"
      },
      "custom": {
        "text": "View Projects"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox284": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "350px",
        "marginLeft": "30px",
        "paddingLeft": "",
        "paddingTop": "10px",
        "fontFamily": "Roboto",
        "fontSize": "",
        "color": "#868383"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing slit mattis faucibus odio feugiat arcu scelerisque drogon sit amenot"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox285": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "100%",
        "height": "",
        "fontFamily": "Roboto",
        "fontSize": "24px",
        "lineHeight": "28px",
        "textAlign": "left",
        "marginLeft": "",
        "alignSelf": "auto",
        "position": "relative",
        "left": null,
        "overflow": "auto",
        "float": "none",
        "backgroundAttachment": "local",
        "paddingTop": "10px",
        "paddingBottom": "5px",
        "paddingRight": "",
        "paddingLeft": "25px"
      },
      "custom": {
        "text": "Website design for finance startup"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div188": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "35%",
        "height": "20px",
        "paddingLeft": "",
        "marginLeft": "25px",
        "paddingTop": "55px",
        "paddingBottom": "",
        "position": "relative",
        "left": null,
        "display": "block"
      },
      "callbacks": {}
    },
    "TextBox286": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "paddingTop": "5px",
        "paddingBottom": "5px"
      },
      "custom": {
        "text": "Home V1"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox287": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "paddingTop": "5px",
        "paddingBottom": "5px"
      },
      "custom": {
        "text": "Home V1"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox288": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "paddingTop": "5px",
        "paddingBottom": "5px"
      },
      "custom": {
        "text": "Home V1"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox289": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "paddingTop": "5px",
        "paddingBottom": "5px"
      },
      "custom": {
        "text": "Home V1"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox290": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "paddingTop": "5px",
        "paddingBottom": "5px"
      },
      "custom": {
        "text": "Home V1"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox291": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "paddingTop": "5px",
        "paddingBottom": "5px",
        "paddingLeft": "",
        "paddingRight": ""
      },
      "custom": {
        "text": "Home V1"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div193": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "18px",
        "lineHeight": "20px",
        "paddingTop": "5px",
        "paddingRight": "5px",
        "paddingLeft": "5px",
        "paddingBottom": "5px",
        "display": "block",
        "position": "relative",
        "width": "30%",
        "height": "300px"
      },
      "callbacks": {}
    },
    "TextBox292": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "paddingTop": "5px",
        "paddingBottom": "5px"
      },
      "custom": {
        "text": "Home V1"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox293": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "paddingTop": "5px",
        "paddingBottom": "5px"
      },
      "custom": {
        "text": "Home V1"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox294": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "paddingTop": "5px",
        "paddingBottom": "5px"
      },
      "custom": {
        "text": "Home V1"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox295": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "paddingTop": "5px",
        "paddingBottom": "5px"
      },
      "custom": {
        "text": "Home V1"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox296": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "paddingTop": "5px",
        "paddingBottom": "5px"
      },
      "custom": {
        "text": "Home V1"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox297": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "paddingTop": "5px",
        "paddingBottom": "5px",
        "paddingLeft": "",
        "paddingRight": ""
      },
      "custom": {
        "text": "Home V1"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div194": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "18px",
        "lineHeight": "20px",
        "paddingTop": "5px",
        "paddingRight": "5px",
        "paddingLeft": "5px",
        "paddingBottom": "5px",
        "display": "block",
        "position": "relative",
        "width": "30%",
        "height": "300px"
      },
      "callbacks": {}
    },
    "TextBox298": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "paddingTop": "5px",
        "paddingBottom": "5px"
      },
      "custom": {
        "text": "Licenses"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox299": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "paddingTop": "5px",
        "paddingBottom": "5px"
      },
      "custom": {
        "text": "Password protected"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox300": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "paddingTop": "5px",
        "paddingBottom": "5px"
      },
      "custom": {
        "text": "404 Not Found"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox301": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "paddingTop": "5px",
        "paddingBottom": "5px"
      },
      "custom": {
        "text": "Style Guide"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox302": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "paddingTop": "5px",
        "paddingBottom": "5px"
      },
      "custom": {
        "text": "Start here"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox303": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "paddingTop": "",
        "paddingBottom": "26px",
        "paddingLeft": "",
        "paddingRight": ""
      },
      "custom": {
        "text": "Utility Pages"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div195": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "18px",
        "lineHeight": "20px",
        "paddingTop": "5px",
        "paddingRight": "5px",
        "paddingLeft": "5px",
        "paddingBottom": "5px",
        "display": "block",
        "position": "relative"
      },
      "callbacks": {}
    },
    "TextBox304": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px "
      },
      "custom": {
        "text": "Changelog"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox305": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "paddingTop": "5px",
        "paddingBottom": "5px",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "18px",
        "fontWeight": 400,
        "borderBottomWidth": "2px",
        "borderBottomStyle": "solid",
        "width": "150px"
      },
      "custom": {
        "text": "More Template"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div196": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "float": "right",
        "width": "50%",
        "height": "636px"
      },
      "callbacks": {}
    },
    "Image36": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "height": "600px",
        "float": "right",
        "position": "static",
        "marginBottom": "",
        "paddingTop": "30px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/about%20me%20photo.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex90": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "marginLeft": "50px",
        "marginRight": "50px"
      },
      "callbacks": {}
    },
    "TextBox306": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "350%",
        "width": "80%"
      },
      "custom": {
        "text": "My Work skills"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image37": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "25px",
        "height": "25px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/"
            }
          }
        ]
      }
    },
    "TextBox308": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "26px",
        "lineHeight": "20px"
      },
      "custom": {
        "text": "Browse resume"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/"
            }
          }
        ]
      }
    },
    "Flex92": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "float": "right",
        "alignItems": "flex-end",
        "position": "static"
      },
      "callbacks": {}
    },
    "TextBox312": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "backgroundColor": "#000000",
        "height": "",
        "width": "35%",
        "marginLeft": "22px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox313": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "350px",
        "marginLeft": "30px",
        "paddingLeft": "",
        "paddingTop": "10px",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "24px",
        "color": "#000000",
        "lineHeight": "30px"
      },
      "custom": {
        "text": "5 free hot typographies to download in 2022"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox314": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "100%",
        "height": "",
        "fontFamily": "Roboto",
        "fontSize": "18px",
        "lineHeight": "28px",
        "textAlign": "left",
        "marginLeft": "",
        "alignSelf": "auto",
        "position": "relative",
        "left": null,
        "overflow": "auto",
        "float": "none",
        "backgroundAttachment": "local",
        "paddingTop": "10px",
        "paddingBottom": "5px",
        "paddingRight": "",
        "paddingLeft": "25px",
        "color": "#686868"
      },
      "custom": {
        "text": "Design - September 1, 2022"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div199": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "60%",
        "float": "right",
        "height": "436px"
      },
      "callbacks": {}
    },
    "Image39": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "overflow": "auto",
        "boxSizing": "inherit",
        "width": "100%",
        "paddingTop": "39px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/img%201.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image40": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "overflow": "auto",
        "boxSizing": "inherit",
        "width": "100%",
        "paddingTop": "39px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/img2.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox315": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "backgroundColor": "#000000",
        "height": "",
        "width": "35%",
        "marginLeft": "22px"
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox316": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "350px",
        "marginLeft": "30px",
        "paddingLeft": "",
        "paddingTop": "10px",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "24px",
        "color": "#000000",
        "lineHeight": "30px"
      },
      "custom": {
        "text": "What did I learn from doing 50+ design sprints?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox317": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "100%",
        "height": "",
        "fontFamily": "Roboto",
        "fontSize": "18px",
        "lineHeight": "28px",
        "textAlign": "left",
        "marginLeft": "",
        "alignSelf": "auto",
        "position": "relative",
        "left": null,
        "overflow": "auto",
        "float": "none",
        "backgroundAttachment": "local",
        "paddingTop": "10px",
        "paddingBottom": "5px",
        "paddingRight": "",
        "paddingLeft": "25px",
        "color": "#686868"
      },
      "custom": {
        "text": "Design - September 1, 2022"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div200": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "60%",
        "float": "right",
        "height": "436px"
      },
      "callbacks": {}
    },
    "Div201": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "40%",
        "display": "block",
        "height": "50%",
        "top": 129,
        "bottom": 0,
        "paddingTop": "",
        "position": "relative"
      },
      "callbacks": {}
    },
    "Div202": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "635px",
        "height": "636px",
        "display": "contents",
        "float": "right",
        "top": -19,
        "alignSelf": "flex-start"
      },
      "callbacks": {}
    },
    "Div203": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "90%",
        "height": "436px",
        "textAlign": "left",
        "position": "relative",
        "display": "block",
        "marginLeft": "50px",
        "marginTop": "20px",
        "alignSelf": "auto",
        "borderRadius": "",
        "borderStyle": "solid",
        "borderColor": "#c5c5c5",
        "borderWidth": "1px",
        "marginRight": "50px"
      },
      "callbacks": {}
    },
    "Div204": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "height": "300px"
      },
      "callbacks": {}
    },
    "Image43": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px #000000",
        "width": "25px",
        "height": "25px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/"
            }
          }
        ]
      }
    },
    "TextBox320": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "28px",
        "lineHeight": "20px"
      },
      "custom": {
        "text": "Browse portfolio"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/"
            }
          }
        ]
      }
    },
    "Flex95": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "marginTop": "52px",
        "alignSelf": "center",
        "alignItems": "center",
        "justifyContent": "center",
        "paddingTop": "151px"
      },
      "callbacks": {}
    }
  }
}};

const breakpointProps = {
  ...{
  "Home": {
    "478": {
      "Image4": {
        "styles": {
          "width": "250px"
        }
      },
      "Image5": {
        "styles": {
          "width": "32px"
        }
      },
      "Image8": {
        "styles": {
          "width": "32px"
        }
      },
      "Image10": {
        "styles": {
          "width": "250px"
        }
      },
      "Image11": {
        "styles": {
          "width": "32px"
        }
      },
      "Image12": {
        "styles": {
          "width": "250px"
        }
      },
      "Image13": {
        "styles": {
          "width": "32px"
        }
      },
      "Image14": {
        "styles": {
          "width": "250px"
        }
      },
      "Image15": {
        "styles": {
          "width": "32px"
        }
      },
      "Image16": {
        "styles": {
          "width": "250px"
        }
      },
      "Image17": {
        "styles": {
          "width": "32px"
        }
      },
      "Image19": {
        "styles": {
          "width": "250px"
        }
      },
      "Image20": {
        "styles": {
          "width": "32px"
        }
      },
      "TextBox56": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px ",
          "overflow": "hidden"
        }
      },
      "TextBox57": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px ",
          "overflow": "hidden"
        }
      },
      "TextBox58": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px ",
          "overflow": "hidden"
        }
      },
      "TextBox59": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px ",
          "overflow": "hidden"
        }
      },
      "Image22": {
        "styles": {
          "width": "250px"
        }
      },
      "Image23": {
        "styles": {
          "width": "32px"
        }
      },
      "Div21": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px "
        }
      },
      "Div53": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px "
        }
      },
      "Div73": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px "
        }
      },
      "Div99": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px "
        }
      },
      "Div173": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px "
        }
      },
      "Div203": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px "
        }
      }
    },
    "991": {
      "Image5": {
        "styles": {
          "cursor": "pointer"
        }
      },
      "Flex2": {
        "styles": {
          "flexDirection": "column",
          "columnGap": "",
          "rowGap": "16px",
          "marginTop": "20px",
          "alignItems": "flex-end",
          "width": "100px"
        }
      },
      "Flex3": {
        "styles": {
          "display": "none"
        }
      },
      "Flex4": {
        "styles": {
          "display": "flex"
        }
      },
      "Flex5": {
        "styles": {
          "display": "none"
        }
      },
      "Menu2": {
        "styles": {
          "display": "flex",
          "cursor": "pointer"
        }
      },
      "Flex6": {
        "styles": {
          "display": "none"
        }
      },
      "Image8": {
        "styles": {
          "cursor": "pointer"
        }
      },
      "Flex11": {
        "styles": {
          "flexDirection": "column",
          "columnGap": "",
          "rowGap": "16px",
          "marginTop": "20px",
          "alignItems": "flex-end",
          "width": "100px"
        }
      },
      "Flex13": {
        "styles": {
          "display": "flex"
        }
      },
      "Menu3": {
        "styles": {
          "display": "flex",
          "cursor": "pointer"
        }
      },
      "Image11": {
        "styles": {
          "cursor": "pointer"
        }
      },
      "Flex21": {
        "styles": {
          "flexDirection": "column",
          "columnGap": "",
          "rowGap": "16px",
          "marginTop": "20px",
          "alignItems": "flex-end",
          "width": "100px"
        }
      },
      "Flex22": {
        "styles": {
          "display": "none"
        }
      },
      "Flex23": {
        "styles": {
          "display": "flex"
        }
      },
      "Flex25": {
        "styles": {
          "display": "none"
        }
      },
      "Image13": {
        "styles": {
          "cursor": "pointer"
        }
      },
      "Flex30": {
        "styles": {
          "flexDirection": "column",
          "columnGap": "",
          "rowGap": "16px",
          "marginTop": "20px",
          "alignItems": "flex-end",
          "width": "100px"
        }
      },
      "Flex31": {
        "styles": {
          "display": "none"
        }
      },
      "Flex32": {
        "styles": {
          "display": "flex"
        }
      },
      "Flex33": {
        "styles": {
          "display": "none"
        }
      },
      "Menu5": {
        "styles": {
          "display": "flex",
          "cursor": "pointer"
        }
      },
      "Flex34": {
        "styles": {
          "display": "none"
        }
      },
      "Image15": {
        "styles": {
          "cursor": "pointer"
        }
      },
      "Flex40": {
        "styles": {
          "flexDirection": "column",
          "columnGap": "",
          "rowGap": "16px",
          "marginTop": "20px",
          "alignItems": "flex-end",
          "width": "100px"
        }
      },
      "Flex41": {
        "styles": {
          "display": "none"
        }
      },
      "Flex42": {
        "styles": {
          "display": "flex"
        }
      },
      "Flex43": {
        "styles": {
          "display": "none"
        }
      },
      "Menu6": {
        "styles": {
          "display": "flex",
          "cursor": "pointer"
        }
      },
      "Flex44": {
        "styles": {
          "display": "none"
        }
      },
      "Image17": {
        "styles": {
          "cursor": "pointer"
        }
      },
      "Flex49": {
        "styles": {
          "flexDirection": "column",
          "columnGap": "",
          "rowGap": "16px",
          "marginTop": "20px",
          "alignItems": "flex-end",
          "width": "100px"
        }
      },
      "Flex50": {
        "styles": {
          "display": "none"
        }
      },
      "Flex51": {
        "styles": {
          "display": "flex"
        }
      },
      "Flex52": {
        "styles": {
          "display": "none"
        }
      },
      "Menu7": {
        "styles": {
          "display": "flex",
          "cursor": "pointer"
        }
      },
      "Flex53": {
        "styles": {
          "display": "none"
        }
      },
      "Image20": {
        "styles": {
          "cursor": "pointer"
        }
      },
      "Flex58": {
        "styles": {
          "flexDirection": "column",
          "columnGap": "",
          "rowGap": "16px",
          "marginTop": "20px",
          "alignItems": "flex-end",
          "width": "100px"
        }
      },
      "Flex59": {
        "styles": {
          "display": "none"
        }
      },
      "Flex60": {
        "styles": {
          "display": "flex"
        }
      },
      "Flex61": {
        "styles": {
          "display": "none"
        }
      },
      "Menu8": {
        "styles": {
          "display": "flex",
          "cursor": "pointer"
        }
      },
      "Flex62": {
        "styles": {
          "display": "none"
        }
      },
      "TextBox56": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px "
        }
      },
      "Image23": {
        "styles": {
          "cursor": "pointer",
          "boxShadow": "0px 00px 0px 0px "
        }
      },
      "Flex68": {
        "styles": {
          "flexDirection": "column",
          "columnGap": "",
          "rowGap": "16px",
          "marginTop": "20px",
          "alignItems": "flex-end",
          "width": "100px"
        }
      },
      "Flex69": {
        "styles": {
          "display": "none"
        }
      },
      "Flex70": {
        "styles": {
          "display": "flex"
        }
      },
      "Flex71": {
        "styles": {
          "display": "none"
        }
      },
      "Menu9": {
        "styles": {
          "display": "flex",
          "cursor": "pointer",
          "boxShadow": "0px 00px 0px 0px "
        }
      },
      "Flex72": {
        "styles": {
          "display": "none"
        }
      },
      "Div21": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px "
        }
      },
      "TextBox76": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px "
        }
      },
      "TextBox86": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px "
        }
      },
      "TextBox93": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px "
        }
      },
      "Div53": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px "
        }
      },
      "TextBox100": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px "
        }
      },
      "Div73": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px "
        }
      },
      "TextBox138": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px "
        }
      },
      "Div99": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px "
        }
      },
      "TextBox142": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px "
        }
      },
      "TextBox152": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px "
        }
      },
      "TextBox159": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px "
        }
      },
      "TextBox168": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px "
        }
      },
      "TextBox175": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px "
        }
      },
      "TextBox208": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px "
        }
      },
      "TextBox222": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px "
        }
      },
      "TextBox236": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px "
        }
      },
      "TextBox243": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px "
        }
      },
      "Div173": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px "
        }
      },
      "TextBox278": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px "
        }
      },
      "TextBox285": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px "
        }
      },
      "TextBox314": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px "
        }
      },
      "TextBox317": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px "
        }
      },
      "Div203": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px "
        }
      }
    }
  }
}};

function getViewportDimension() {
  const width = Math.min(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
  const height = Math.min(
    document.documentElement.clientHeight || 0,
    window.innerHeight || 0
  );
  return { width, height };
}

function getEffectiveBreakpointWidths(pageName, windowWidth) {
  if (breakpointProps[pageName] === undefined) {
    return [];
  }
  const widths = Object.keys(breakpointProps[pageName]);
  return widths
    .filter((curr) => {
      return parseInt(curr) >= windowWidth;
    })
    .sort((a, b) => {
      return parseInt(b) - parseInt(a);
    });
}

/**
 *
 * effective props is combination of
 */
function getEffectivePropsForPage(pageName) {
  const { width } = getViewportDimension();
  // effectiveProps initially has local changes
  let effectiveProps = JSON.parse(
    JSON.stringify(useStore.getState()[pageName])
  );
  const effectiveWidths = getEffectiveBreakpointWidths(pageName, width);
  effectiveWidths.forEach((effectiveWidth) => {
    const compAliases = Object.keys(breakpointProps[pageName][effectiveWidth]);
    compAliases.forEach((compAlias) => {
      const propNames = Object.keys(
        breakpointProps[pageName][effectiveWidth][compAlias]
      );
      propNames.forEach((propName) => {
        effectiveProps[compAlias][propName] = {
          ...useStore.getState()[pageName][compAlias][propName],
          ...breakpointProps[pageName][effectiveWidth][compAlias][propName],
        };
      });
    });
  });
  return effectiveProps;
}

export function setEffectivePropsForPage(pageName) {
  const effectiveProps = getEffectivePropsForPage(pageName);
  useStore.getState().setPage(pageName, effectiveProps);
}

useStore.setState(desktopModeProps);

export default useStore;
