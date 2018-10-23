import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ListView,View} from 'react-native';
import {EmployeeListRequestedAction} from './EmployeeListActions';
import ListItem from '../../Components/Custom/ListItem';

class EmployeeListForm extends Component{

    constructor() {
        super();
        console.ignoredYellowBox = [
        'Setting a timer',
        'isMounted'
        ];
    }

    componentWillMount(){
        this.props.EmployeeListRequestedAction();
        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps){
        this.createDataSource(nextProps);
    }

    createDataSource({employees}){
        const ds = new ListView.DataSource({
            rowHasChanged: (r1,r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(employees);
    }

    renderRow(employee) {
        return <ListItem employee={employee} />
    }

    render(){
        return (
            <View>
                <ListView
                        enableEmptySections
                        dataSource={this.dataSource}
                        renderRow = {this.renderRow}
                />
            </View>
        );
    }
}

const mapStateToProps = state => {
    const employees = _.map(state.AppStateEmployeeList, (val,uid) => {
        return {...val, uid}; // {shift:'Monday',name:'SS', phone:'XX', id: 'XXXXXX'}
    });
    return {employees};
};

export default connect(mapStateToProps,{EmployeeListRequestedAction}) (EmployeeListForm);