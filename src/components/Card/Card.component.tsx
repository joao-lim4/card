import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { RelativeView, CenterView, TextView, CardRelativeView,FrontCard, BlurView, CircleBlur } from "./Styles";
import { CSSProperties } from "styled-components";




type CardProps = {
    typeCard?: "default",
    cardViewCSS?: CSSProperties
}


const Card: React.FC<CardProps> = ({typeCard="default", cardViewCSS}): JSX.Element => {

    return (
        <RelativeView>
            <CenterView>
                <TextView>
                    <CardRelativeView style={{...cardViewCSS}}>
                        <FrontCard>
                            {/* <CircleBlur width="100px" height="100px" borderRadius="50%" background="red" top="-10px" left="-10px" /> */}
                            <BlurView>

                            </BlurView>
                        </FrontCard>
                    </CardRelativeView>
                </TextView>
            </CenterView>
        </RelativeView>
    );
}


export { Card };