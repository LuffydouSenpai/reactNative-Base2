import {Component} from 'react';
import {StyleSheet, View, Text, TextInput, Button, ScrollView, FlatList } from 'react-native';

class TodoList extends Component{
    
    constructor(props){
        super(props)
    }
    
    state = {
        list: [],
        inputTxt: ""
    }
    
    title = "Ma TodoList";

    insertList(){
        /* console.log({key:this.state.inputTxt}) */        
        
        /* if(!this.state.list.includes({key:this.state.inputTxt})){
            let listTmp = this.state.list;
            listTmp.push({key:this.state.inputTxt});
            this.setState({list:listTmp});
        } */

        if (this.state.list.length===0){
            let listTmp = this.state.list;
            listTmp.push({key:this.state.inputTxt});
            this.setState({list:listTmp});
        }else{
            this.state.list.map((value)=>{
                if(this.state.inputTxt !== value.key){
                    console.log(value.key)
                    let listTmp = this.state.list;
                    listTmp.push({key:this.state.inputTxt});
                    this.setState({list:listTmp});
                }
            })
        }

        

        this.setState({inputTxt:""});

        console.dir(this.state.list)
    }

    deleteItem(index){
        console.log(index)

        let listTmp = this.state.list;
        listTmp.splice(index, 1)
        this.setState({list:listTmp});
    }

    render(){
        return (
            <View>
                <Text style={[this.styles.redColor]}>{this.title}</Text>
                <TextInput onChangeText={(text)=>{this.setState({inputTxt:text})}} value={this.state.inputTxt}></TextInput>
                <Button title="OK" onPress={()=>{this.state.inputTxt.length !== 0 && this.insertList()}}></Button>
                <ScrollView>
                    <FlatList
                        data={this.state.list}
                        renderItem={({item, index}) => <Text>
                        {item.key}
                        <Button
                            title="X"
                            onPress={()=>{this.deleteItem(index)}}
                        ></Button>
                        </Text>}
                    />
                </ScrollView>
            </View>
        );  
    } 

    styles = StyleSheet.create({
        redColor: {
            textAlign: 'center',
            color: 'red'
        }
    });
}

export default TodoList;