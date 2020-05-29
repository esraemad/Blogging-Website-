import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import "./App.css";

import Home from "./Components/Pages/Home";
import Register from "./Components/Pages/Register";
import AddBlog from "./Components/Pages/BlogForm";
import Login from "./Components/Pages/Login";
import Profile from "./Components/Pages/Profile";
import NotFound from "./Components/Pages/Notfound";
import BlogDetail from "./Components/Pages/BlogDetail";
import Users from "./Components/Pages/Users";
import GetStart from "./Components/Pages/GetStart";
import BlogForm from "./Components/Pages/BlogForm";





class App extends Component {
  state = {
   Blogs: [] ,
    // Blogs: [
    //   { id: 1, title: "Travel-1", desc: "This is Travel 1",type: 1, tag: 1, creator:'u1'},
    //   { id: 2, title: "Travel-2", desc: "This is Travel 2",type: 2, tag: 2, creator:'u2'},
    //   { id: 3, title: "Travel-3", desc: "This is Travel 3",type: 3, tag: 3, creator:'u3'},
    //   { id: 4, title: "Travel-4", desc: "This is Travel 4",type: 4, tag: 4, creator:'u4'},
    //   { id: 5, title: "Travel-5", desc: "This is Travel 1",type: 5, tag: 5, creator:'u5' },
    //   { id: 6, title: "Travel-6", desc: "This is Travel 2",type: 6, tag: 6, creator:'u6'},
    //   { id: 7, title: "Travel-7", desc: "This is Travel 3",type: 7, tag: 7, creator:'u7'},
    //   { id: 8, title: "Travel-8", desc: "This is Travel 4",type: 1, tag: 8, creator:'u8'},
  
      
    // ],
    types: [
      { id: 0, name: "All" },
      { id: 1, name: " Beache" },
      { id: 2, name: "Historical" },
      { id: 4, name: "Shopping" },
      { id: 5, name: "Park" },
      { id: 6, name: "Mountain" },
      { id: 7, name: "Camping" },
      
    ],

    tagss : [
      { id: 0, name: "Trip" },
      { id: 1, name: " Camp" },
      { id: 2, name: "Sea" },
      { id: 4, name: "Night" },
      { id: 5, name: "Parks" },
      { id: 6, name: "Historical" },
      { id: 7, name: "Beach" },
      { id: 8, name: "Sky" },
      { id: 9, name: "Shopping" },
      { id: 10, name: "Food" },
      { id: 11, name: "Lifestyle" },
      { id: 12, name: "Adventure" },
    ],

    pageSize:3,
    activePage:1,
    activeFilter:0,
    activeTag:0,
  };

  //////////////////////BACK END

  componentDidMount() {
    fetch("http://localhost:3000/Blogs")
      .then(res => res.json())
      .then(data => this.setState({ Blogs: data }));
  }



  //Pagination 
  HandelPageChange = page => {
    this.setState({ activePage: page });
  }

  HandleFilterChange = type => {
    this.setState({activeFilter: type.id , activePage :1 });
  };

  HandleTagChange = tag => {
    this.setState({activeTag: tag.id , activePage :1 });
  };
  
  //////////// BAck End ADD
  handleAdd = blog => {
    //Cloe
    const Blogs = [...this.state.Blogs];
    //Edit
    Blogs.unshift(blog);
    //Stste
    this.setState({ Blogs });
  };

  
  render() {
    return (
      <React.Fragment>
      {/* <Nav/> */}
      <main>
       <Switch>

       <Route path="/" exact render={(props)=> <Home  
        {...props}
        Blogs={this.state.Blogs} 
        pageSize={this.state.pageSize}
        activePage={this.state.activePage}
        types={this.state.types}
        tagss = {this.state.tagss}
        activeFilter={this.state.activeFilter}
        activeTag={this.state.activeTag}
        OnPageChange = {this.HandelPageChange}
        OnFilterChange = {this.HandleFilterChange}
        OnTagChange = {this.HandleTagChange}
   
        
        />
      }/>

    <Route path="/blogs/add" render={(props)=> <BlogForm 
     {...props}
     types={this.state.types} 
     onAdd={this.handleAdd}
    //  onAdd={this.handleAdd}
    
    /> 
   }/>
        <Route path="/start"render={(props)=> <GetStart  
        {...props}
        Blogs={this.state.Blogs} 
        pageSize={this.state.pageSize}
        activePage={this.state.activePage}
        types={this.state.types}
        tagss = {this.state.tagss}
        activeFilter={this.state.activeFilter}
        activeTag={this.state.activeTag}
        OnPageChange = {this.HandelPageChange}

        />
      }/>
       <Route path="/register" component={Register}/>
       <Route path="/login" component={Login}/>
       <Route path="/profile" component={Profile}/>

        <Route path="/blogdetail/:id" render={(props)=> <BlogDetail  
        {...props}
        Blogs={this.state.Blogs} 
        />
      }/>

        <Route path="/users" component={Users}/>
        <Route path="/notfound" component={NotFound}/>
       

       
       
       <Redirect to="/notfound" />
        <Redirect  from="/" to="/home" />

       </Switch>
      </main>
       
        
      </React.Fragment>
    );
  }
}

export default App;
