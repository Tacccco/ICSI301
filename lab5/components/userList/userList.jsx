import React from 'react';
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
}
from '@material-ui/core';
import './userList.css';

/**
 * Define UserList, a React componment of CS142 project #5
 */
class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      // userList: [],
      index: -1,
    };
    this.handleUserItemClickBound=newIndex=>this.handleUserItemClick.bind(this, newIndex);
  }

  handleUserItemClick(newIndex){
    this.setState({index:newIndex});
  }
  getList(){
    const userList=[];
    const users=window.cs142models.userListModel();
    for(var i=0; i<users.length;i++){
      userList.push((
        <ListItem 
          button
          selected={this.index===i}
          onClick={(i)=>this.handleUserItemClick(i)} >
            <ListItemText primary={`${users[i].first_name}`} />
          </ListItem>
      ));
      userList.push((<Divider />));
    }
    return userList;
  }
  

  render() {
    return (
      <div>
        <Typography variant="body">
          UsersList:
        </Typography>
        <List component="nav">
          {this.getList()}
        </List>
      </div>
    );
  }
}

export default UserList;
