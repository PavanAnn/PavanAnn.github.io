import { Theme } from '@aws-amplify/ui-react';

export interface CustomBrandingImages {
   defaultLogo: string;
   favIcon: string;
   homePageBanner: string;
   catalogBanner: string;
   appsBanner: string;
}

export type AVAILABLE_FONTS = 'ROBOTO' | 'INTER' | 'NUNITO';

export interface CustomBrandingFonts {
   fontHeading: AVAILABLE_FONTS;
   fontBody: AVAILABLE_FONTS;
}

export interface CustomBrandingColors {
   backgroundColorHeader: string;
   backgroundColorBody: string;
   backgroundColorFooter: string;
}

export interface CustomBrandingButtons {
   buttonColorPrimaryFill: string;
   buttonColorPrimaryText: string;
   buttonColorSecondaryText: string;
   buttonColorSecondaryBorder: string;
   buttonColorTertiaryText: string;
}
export interface CustomBranding
   extends CustomBrandingImages,
      CustomBrandingFonts,
      CustomBrandingColors,
      CustomBrandingButtons {}

export default function getCustomBranding(param: CustomBranding): Theme {
   return {
      name: 'Custom theme',
      tokens: {
         /* @ts-expect-error does not exist in type Tokens */
         images: {
            defaultLogo: param?.defaultLogo,
            favIcon: param?.favIcon,
            homePageBanner: param?.homePageBanner,
            appsBanner: param?.appsBanner,
            catalogBanner: param?.catalogBanner,
         },
         fonts: {
            default: {
               static: param?.fontBody,
               variable: param?.fontBody,
            },
         },
         colors: {
            font: {
               success: '#35A45A',
               warning: '#F5BB44',
               error: '#FF525E',
            },
            neutral: {
               10: { value: 'rgba(0,0,0)' },
               20: { value: 'rgb(238, 238, 238)' },
               40: { value: 'rgb(196, 196, 196)' },
               60: { value: 'rgb(128, 128, 128)' },
               100: { value: 'rgb(44, 44, 44)' },
            },
         },
         components: {
            button: {
               borderColor: param?.buttonColorSecondaryBorder,
               color: param?.buttonColorSecondaryText,
               _hover: {
                  backgroundColor: '{colors.white}',
                  borderColor: param?.buttonColorSecondaryBorder,
                  color: param?.buttonColorSecondaryText,
               },
               _active: {
                  backgroundColor: '{colors.white}',
                  borderColor: param?.buttonColorSecondaryBorder,
                  color: param?.buttonColorSecondaryText,
               },
               _focus: {
                  backgroundColor: '{colors.white}',
                  borderColor: param?.buttonColorSecondaryBorder,
                  color: param?.buttonColorSecondaryText,
                  boxShadow: '0 0 0 0',
               },

               primary: {
                  backgroundColor: param?.buttonColorPrimaryFill,
                  borderColor: param?.buttonColorPrimaryFill,
                  color: param?.buttonColorPrimaryText,
                  _hover: {
                     backgroundColor: param?.buttonColorPrimaryFill,
                     borderColor: param?.buttonColorPrimaryFill,
                     color: param?.buttonColorPrimaryText,
                  },
                  _active: {
                     backgroundColor: param?.buttonColorPrimaryFill,
                     borderColor: param?.buttonColorPrimaryFill,
                     color: param?.buttonColorPrimaryText,
                  },
                  _focus: {
                     backgroundColor: param?.buttonColorPrimaryFill,
                     borderColor: param?.buttonColorPrimaryFill,
                     color: param?.buttonColorPrimaryText,
                     boxShadow: '0 0 0 0',
                  },
               },

               link: {
                  backgroundColor: '{transparent}',
                  color: param?.buttonColorTertiaryText,
                  borderColor: '{none}',

                  _hover: {
                     backgroundColor: '{transparent}',
                     color: param?.buttonColorTertiaryText,
                     borderColor: '{none}',
                  },
                  _active: {
                     backgroundColor: '{transparent}',
                     color: param?.buttonColorTertiaryText,
                     borderColor: '{none}',
                  },
                  _focus: {
                     backgroundColor: '{transparent}',
                     color: param?.buttonColorTertiaryText,
                     borderColor: '{none}',
                     boxShadow: '0 0 0 0',
                  },
               },
            },
            text: {
               primary: {
                  color: { value: param?.buttonColorTertiaryText },
               },
            },
            loader: {
               strokeEmpty: { value: '{colors.neutral.20}' },
               strokeFilled: { value: param?.buttonColorPrimaryFill },
               small: {
                  width: { value: '3rem' },

                  height: { value: '3rem' },
               },
               large: {
                  width: { value: '5rem' },
                  height: { value: '5rem' },
               },
            },
            link: {
               color: param?.buttonColorTertiaryText,
               focus: {
                  color: { value: param?.buttonColorTertiaryText },
               },
               hover: {
                  color: { value: param?.buttonColorTertiaryText },
               },
               active: {
                  color: { value: param?.buttonColorTertiaryText },
               },
            },
            tabs: {
               item: {
                  color: { value: '{colors.neutral.40}' },
                  fontSize: { value: '{fontSizes.medium}' },
                  fontWeight: { value: '{fontWeights.bold}' },
                  _active: {
                     borderColor: { value: param?.buttonColorPrimaryFill },
                  },
               },
            },
            alert: {
               heading: {
                  fontSize: { value: '{fontSizes.large}' },
                  fontWeight: { value: '{fontWeights.bold}' },
               },
               success: {
                  backgroundColor: { value: 'rgba(16, 123, 59, 0.15)' },
               },
               error: {
                  backgroundColor: { value: 'rgba(215, 0, 38, 0.15)' },
               },
            },
            checkbox: {
               icon: {
                  backgroundColor: param?.buttonColorPrimaryFill,
               },
            },
         },
         fontSizes: {
            xs: '12px',
            small: '14px',
            medium: '16px',
            large: '20px',
            xl: '24px',
            xxl: '32px',
            xxxl: '40px',
            xxxxl: '48px',
         },
         space: {
            xs: '4px',
            small: '8px',
            medium: '16px',
            large: '24px',
            xl: '32px',
            xxl: '40px',
            xxxl: '48px',
         },
         radii: {
            xs: '4px',
            small: '8px',
            medium: '16px',
            large: '24px',
         },
         borderWidths: {
            small: '1px',
            medium: '2px',
            large: '3px',
         },
      },
      overrides: [],
   };
}
