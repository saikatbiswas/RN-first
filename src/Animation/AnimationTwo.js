import React, {useEffect, useRef } from 'react';
import { View, Text, Button, StyleSheet, Animated, Easing } from 'react-native';


const AnimationTwo = () =>{
    const firstAnim = useRef(new Animated.Value(1)).current;
    const redSqu = useRef(new Animated.ValueXY()).current;
    const blueSqu = useRef(new Animated.Value(1)).current;
  
    const runAnimation = () =>{
        Animated.sequence([
            Animated.timing(firstAnim,{
                toValue:0,
                duration:1000,
                useNativeDriver:true
            }),

            Animated.parallel([
                Animated.spring(redSqu,{
                    toValue:{x:100,y:100},
                    duration:2000,
                    easing:Easing.elastic(1)
                }),
                Animated.timing(blueSqu,{
                    toValue:0,
                    duration:1000,
                    useNativeDriver:true
                })
            ])

        ]).start();
        
        // Animated.timing(movEl,{
        //     toValue:{x:100,y:300},
        //     duration:2000,
        //     delay:1000,
        //     easing:Easing.cubic,
        //     useNativeDriver:false

        // }).start();
    }

    return(
        <View style={styles.container}>
            <Button title="Run Animation" 
                onPress={runAnimation} 
            />
            <Animated.View
                style={{
                    opacity:firstAnim
                }}
            >
                <View style={styles.first}>
                    <Text>Animation One</Text>
                </View>
            </Animated.View>
            <Animated.View
                style={redSqu.getLayout()}
            >
                <View style={styles.square}>
                    <Text>Animation One</Text>
                </View>
            </Animated.View>
            <Animated.View
                style={{
                    opacity: blueSqu,
                    transform:[
                        {
                            translateX:blueSqu.interpolate({
                                inputRange:[0,1],
                                outputRange:[300,0]
                            })
                        },
                        {
                            translateY:blueSqu.interpolate({
                                inputRange:[0,1],
                                outputRange:[500,0]
                            }) 
                        }
                    ]
                }}
            >
                <View style={styles.square_two}>
                    <Text>Animation Two</Text>
                </View>
            </Animated.View>
            

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#ffffff'
    },
    square:{
        backgroundColor: 'red',
        width:100,
        height:100
    },
    square_two:{
        backgroundColor: 'blue',
        width:100,
        height:100
    },
    first:{
        backgroundColor: 'green',
        width:100,
        height:100
    }
});

export default AnimationTwo;