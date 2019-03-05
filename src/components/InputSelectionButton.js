import React from "react"
import { StyleSheet, View, TouchableHighlight } from "react-native"
import { themeBlue } from "../consts"

export default class InputSelectionButton extends React.Component {
	render() {
		let style = styles.rects
		if (this.props.selected || this.props.secondTimeSelected) {
			style = { ...style, ...styles.selected }
		}
		if (this.props.secondTimeSelected) {
			style = { ...style, ...styles.secondTimeSelected }
		}
		return (
			<TouchableHighlight
				onPress={this.props.onPress}
				underlayColor="#ffffff00"
			>
				<View style={style}>{this.props.children}</View>
			</TouchableHighlight>
		)
	}
}

const styles = StyleSheet.create({
	rects: {
		margin: 6,
		padding: 6,
		backgroundColor: "#f8f8f8",
		borderRadius: 4,
		maxWidth: 140,
		alignItems: "center"
	},
	selected: {
		backgroundColor: themeBlue,
		borderRadius: 4,
		shadowColor: themeBlue,
		shadowOffset: {
			width: 0,
			height: 6
		},
		shadowOpacity: 0.2,
		shadowRadius: 6,
		elevation: 4
	},
	secondTimeSelected: {
		backgroundColor: "green"
	}
})