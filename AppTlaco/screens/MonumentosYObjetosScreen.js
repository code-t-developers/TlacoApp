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
import { DrawerActions } from 'react-navigation-drawer'
import { HeaderButtons, Item} from 'react-navigation-header-buttons';

import {CATEGORIES} from '../data/datos';
import MonumentosGridTitle from '../components/MonumentosGridTitle';
import BloqueadoGridTitle from '../components/bloqueadoGridTitle';
import HeaderButton from '../components/HeaderButton';


const MonumentosYObjetosScreen = props =>{
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

MonumentosYObjetosScreen.navigationOptions = navData =>{
	return {
	  headerLeft : () => (<HeaderButtons HeaderButtonComponent = {HeaderButton}>
		<Item 
		  title = "Menu"
		  iconName = 'ios-menu'
		  onPress = {() => {
			navData.navigation.dispatch(DrawerActions.toggleDrawer());
		  }}
		/>
	  </HeaderButtons>)
	};
}
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

export default MonumentosYObjetosScreen;