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
import BloqueadoGridTitle from '../components/bloqueadoGridTitle';


const DesbloqueadosGridScreen = props =>{
	const renderGridItem=(itemData)=>{
		if( itemData.item.status === 'DES'){
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

		return (
			<BloqueadoGridTitle 
				title={itemData.item.title} 
				color={itemData.item.color}
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
/*
CategoriesScreen.navigationOptions = {
	headerTitle: 'Meal Categories'
	}*/

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

export default DesbloqueadosGridScreen;