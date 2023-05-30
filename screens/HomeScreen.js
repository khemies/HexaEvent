import { StyleSheet, Text, View , FlatList } from 'react-native'
import React, {useState, useEffect} from 'react'
import CustomView from '../components/CustomView';
import AppText from '../components/AppText';
import LinkText from '../components/LinkText';
import AllEventsScreen from './AllEventsScreen';
import ItemList from '../components/list/ItemList';
import routes from '../navigation/routes';
import colors from '../config/colors';
import { getEvents } from '../controller/eventsApi';
import { useSelector } from 'react-redux';
import TextTitle from '../components/TextTitle';



export default function HomeScreen(props) {
const [events , setEvents] = useState([])
const navigate = props.navigation.navigate

const getEventsHandler = async () => {
  getEvents().then(res => setEvents([...res.data.results]) ).catch(e => console.log(e))
}

// let state = useSelector(state => state.location)
// console.log(state)

useEffect(() => {
  getEventsHandler()
}, [])

if (events.length > 0 ){

  return (
    <CustomView style={styles.container}>
      <CustomView style={styles.testContainer}>
        <AppText style={{ fontWeight: "700" }}>Nearby Events</AppText>
        <LinkText
          textStyle={{ color: colors.blueLink, fontWeight: "700" }}
          onPress={() => navigate(routes.ALL_EVENTS, { data: events })}
        >
          {"See all > "}
        </LinkText>
      </CustomView>

      <FlatList
        data={events}
        keyExtractor={({ item }) => {
          const itemId = item?.id;
          return itemId ? `item_${itemId}` : Math.random().toString();
        }}
        renderItem={({ item }) => {
          return <ItemList item={item} key={item?.id} />;
        }}
      />
    </CustomView>
  );}
  else {
    return (
      <CustomView  style={styles.container} >
        <TextTitle style={{color : colors.greyPlaceholder }} >No Nearby events</TextTitle>
      </CustomView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  testContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    justifyContent: "space-between",
    width: "60%",
    padding: "2%",
    marginVertical: "5%"
    
   
   
  },
});