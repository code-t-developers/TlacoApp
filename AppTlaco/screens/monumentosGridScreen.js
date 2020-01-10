import React from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Platform
} from 'react-native';

import {CATEGORIES} from '../data/datos';
import MonumentosGridTitle from '../components/MonumentosGridTitle';


const MonumentosGridScreen = props =>{
	const renderGridItem=(itemData)=>{
	return (
		<MonumentosGridTitle 
		title={itemData.item.title} 
		color={itemData.item.color}
		onSelect={() =>{
			props.navigation.navigate(
				{
					routeName: 'Monumento',
				}
			);
		}}
		/>
		);
}

	return(

		<FlatList 
		keyExtractor={(item,index) => item.id}
		data={CATEGORIES}
		renderItem={renderGridItem}
		numColumns={2} />
		);
};


const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

export default MonumentosGridScreen;