import React, { Component } from 'react';
import { Button, View, backgroundImage, TextInput, TouchableOpacity, Text, ScrollView, StatusBar, Image, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


function AgenciesList({ navigation }) {
    return (
     
        <View style={styles.container}>
          <StatusBar />
          {/* <View style = {styles.header}>
            <Text style = {styles.header_text}>Concerned Agencies</Text>
          </View> */}
          <ScrollView>
          
                <TouchableOpacity onPress={() => navigation.navigate('Police')}>
                  <View style={styles.item}>
                    <Text style={{color:'#f1ffff',fontSize:17,fontWeight:"bold"}}>Nigeria Police Force</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('FRSC')}>
                  <View style={styles.item}>
                    <Text style={{color:'#f1ffff',fontSize:17,fontWeight:"bold"}}>FRSC</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Fire_Service')}>
                  <View style={styles.item}>
                    <Text style={{color:'#f1ffff',fontSize:17,fontWeight:"bold"}}>Federal Fire Service</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('NEMA')}>
                  <View style={styles.item}>
                    <Text style={{color:'#f1ffff',fontSize:17,fontWeight:"bold"}}>NEMA</Text>
                  </View>
                </TouchableOpacity>
             
             
          </ScrollView>
        </View>
     
    )
  }


function Police({ navigation }) {
  return(
    <View style={styles.container}>
        
      <ScrollView>
        <View style={styles.body}>
            <Image source={require('../../../assets/img/police.jpg')}  style={styles.logo} />
                <Text style={styles.content}> 
                The Nigeria Police Force is the principal law enforcement and the lead security agency in Nigeria with a staff strength of about 371,800. There are currently plans to increase the force to 650,000, adding 280,000 new recruits to the existing 370,000.
                  Founded: 1930
                  Motto: Police is your friend
                  Population: 206 million
                
                VISION STATEMENT

                    To make Nigeria safer and more secure for economic development and growth; to create a safe and secure environment for everyone living in Nigeria.

                    MISSION STATEMENT

                    1. To partner with other relevant Security Agencies and the public in gathering, collating and sharing information and intelligence with the intention of ensuring the safety and security of the country

                    2. To participate in efforts aimed at addressing the root causes of crime while ensuring that any criminal act is investigated so as to bring the criminals to justice in a fair and professional manner

                    3. To engender an efficient, effective, well-trained and highly motivated workforce, with deliberate efforts aimed at improving the capacity and welfare of all officers and men of the Force

                    4. To build a people’s friendly Police Force that will respect and uphold the fundamental rights of all citizens.

                    5. To build a gender sensitive and gender friendly Police Force that will give equal opportunity to female Police Officers, while at the same time respecting their peculiarities
                </Text>
                <Text>
                     
                      CONTACT ADDRESS
                      Louis Edet House
                      Force Headquartes
                      Garki,Shehu Shagari Way, AbujaPhone:+22 004 324 1124
                </Text>
        </View>
      </ScrollView>

   </View>
  )
}


function FRSC({ navigation }) {
  return(
    <View style={styles.container}>
       
      <ScrollView>
        <View style={styles.body}>
            <Image source={require('../../../assets/img/police.png')}  style={styles.logo} />
                <Text style={styles.content}>Federal Road Safety Corps is the Government Agency with statutory responsibilities for road safety administration in Nigeria. Founded in 1988,[1] the Federal Road Safety Corps (FRSC) operates in all Nigerian states as well as the Federal Capital Territory and is the leading agency in Nigeria on road safety administration and management. The statutory functions include: Making the highways safe for motorists and other road users as well as checking road worthiness of vehicles, recommending works and infrastructures to eliminate or minimize accidents on the highways and educating motorists and members of the public on the importance of road discipline on the highways.

                      The FRSC is currently headed by Boboye O Oyeyemi, MFR, whose title of Corps Marshal is the highest rank in the Corps ranking system.
                </Text>
        </View>
      </ScrollView>

   </View>
  )
}


function Fire_Service({ navigation }) {
  return(
    <View style={styles.container}>
        
      <ScrollView>
        <View style={styles.body}>
            <Image source={require('../../../assets/img/fire.png')}  style={styles.logo} />
                <Text style={styles.content}>The Federal Fire Service has the statutory responsibility for rescue fire prevention, mitigation, fire fighting as well as paramedical and information services. The Federal Government reform of the Fire Services in the country in 2007 redefined the mandate of the Service as Regulation of the State and Private Fire Services, Prescription and monitoring of standards for the promotion of fire education, fire prevention, safety, mitigation and investigation, Ensuring effective discharge of the functions of the State Fire Services, Provision of policy direction for the Nation’s Fire Services, Ensuring the standardization of fire and rescue equipment  manufactured or imported into Nigeria, Encouraging the establishment by the State Fire Services of adequate number of fire stations and fire posts, Establishing the National Fire Academy to meet the training requirements of fire fighters in the country and beyond and Coordination of national emergencies.
                </Text>
                <Text>
                 + The Head Office is Located at::Old Secretariat Area 1 Garki Abuja FCT Abuja Nigeria. 

                 + Customer Care::
                  +234 (0) 700 009 9999
                  Hours Of Operation
                  Mondays - Fridays: 9:00AM - 5:00PM
                  Weekends and National Holidays: Chat Only.

                + Official Website:: info@interior.gov.ng
                </Text>
        </View>
      </ScrollView>

   </View>
  )
}



function NEMA({ navigation }) {
  return(
    <View style={styles.container}>
        
      <ScrollView>
        <View style={styles.body}>
            <Image source={require('../../../assets/img/nema.png')}  style={styles.logo} />
                <Text style={styles.content}>
                The National Emergency Management Agency of Nigeria was established via Act 12 as amended by Act 50 of 1999, to manage disasters in Nigeria. Therefore, from inception, NEMA has been tackling disaster related issues through the establishment of concrete structures and measures. Such measures as the education of the public in order to raise their level of awareness and reduce the effects of disasters in the Country.
                   The National Emergency Management Agency (NEMA) was 
                  established via Act 12 as amended by Act 50 of 1999, 
                  to manage disasters in Nigeria. It has been tackling disaster 
                  related issues through the establishment of concrete structures. 
                
                FUNCTIONS OF NEMA
                              The Act vested the authority of managing disasters in Nigeria NEMA. According to the enabling law; the Agency shall among the other things,
                              (a) Formulate policy on all activities relating to the disaster management in Nigeria and co-ordinate the plans and programmes for efficient and effect response to disasters at national level;
                              (b) Monitor the state of preparedness of all 
                              FACILITIES AND INFRASTUCTURES NEMA ADOPTS FOR COORDINATING DISASTER MANAGEMENT
                              Mission Control Centre (MCC)
                              The mission Control Centre located in the Headquarters of NEMA is a computer based satellite technology that uses the COSPAS-SARSAT hi-tech system/facility. The system is designed to pick distress alerts and location data to assist in Search and Rescue Operation, using spacecraft and ground facilities to detect and locate the signals of distress beacons operating on 406 MHz. When there is a distress alert from the beacon located on a ship or aircraft, the satellite system transmits the signal to the ground segment facilities from where the data is processed and transmitted to the appropriate Mission Control Centre (MCC). The MCC now alerts the nearest Rescue Coordinating Centres (RCC) or Disaster Reaction Units (DRU) of the Army, Air Force, and the Navy for appropriate and immediate action.

                              Geographic Information System (GIS)
                              The agency has established a functional GIS lab for early warning and precision in response to the management. The lab collects spatial data, analyses and prepares useful information that helps to aid responses to disaster. It is one of the significant facilities of the agency for its disaster risk reduction programme.

                              Mobile clinics
                              Time is a crucial element in disaster management. In recognition of this, the agency obtained approval and procured facilities for mobile clinics that have been strategically stationed in Abuja, Kaduna, Lagos and Port Harcourt to be deployed in the event of any major disaster. While arrangements are on to acquire more of the clinics, the agency has also procured a good number of ambulances stationed in Abuja and all the six zonal offices.

                              Helicopter for Search and Rescue
                              The agency has in place a helicopter for search and rescue. The helicopter is station in Abuja and manned by Officers of the Nigerian Air force. Necessary arrangements are being concluded to acquire additional helicopter which we hope that with time there would be one for each of the six geo-political zones.
                </Text>
        </View>
      </ScrollView>

   </View>
  )
}







export default class Agency extends Component {
 
render(){
  return(
    <NavigationContainer independent={true}>
        <MyStack />
  </NavigationContainer>
  );
}
    
}

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Concerned Angecies" component={AgenciesList} initialRouteName={true} />
      <Stack.Screen name="Police" component={Police} />
      <Stack.Screen name="FRSC" component={FRSC} />
      <Stack.Screen name="Fire_Service" component={Fire_Service} />
      <Stack.Screen name="NEMA" component={NEMA} />
    </Stack.Navigator>
  );
}


const styles = StyleSheet.create ({
    item:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 30,
      margin: 2,
      borderColor: '#42A5F5',
      borderWidth: 4,
      backgroundColor: '#42A5F5',
      
    },
      container:{
        flex: 1,
        backgroundColor:'#eee'
      },
        header:{
          width: '100%',
          height:'10%',
          backgroundColor: 'blue',
          justifyContent:'center',
          alignItems: 'center',
          borderBottomColor: "black",
          marginBottom:'4'
        },
        header_text:{
          fontWeight:"bold",
          fontSize: 20,
          color:'#fff'
        },
        logo:{
          justifyContent:'center',
          alignContent:'center',
          padding:15,
          maxHeight:80,
          maxWidth:'20%',
          marginLeft:'38%',
          marginRight:'38%',
          borderRadius:7,
          marginBottom:'5%',
          marginTop:'2%'
        },
        content:{
          fontSize:20
        },
        body:{
          width:'90%',
          marginLeft:'5%',
          marginRight:'5%',
          height:'100%',
          letterSpacing:10
        }
})


