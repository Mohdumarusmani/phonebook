import React, { PureComponent } from 'react';

import ContactList from 'components/ContactList'
import PaginationNav from 'components/PaginationNav';

import request from 'utils/request'

class Home extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            docs: 5,
            page: 1,
            count: 0,
            contacts: []
        }
    }

    componentDidMount() {
      const params = new URLSearchParams(this.props.location.search); 
      const page = params.get('page') || 1; 
      this.setState({page}, () => {
        this.getContacts();
      })

      this.getContactCount();
    }

    componentDidUpdate(prevprops) {
      if(prevprops.location.search !== this.props.location.search) {
        const params = new URLSearchParams(this.props.location.search); 
        const page = params.get('page');
        this.setState({page},() => {
          this.getContacts();
        })
      }
    }

    getContactCount = () => {
      request.getContactCount((data) => {
        this.setState({count : data})
      });
    }


    getContacts = () => {
      let page = this.state.page || 1
      page = Math.max(1,page)
      
      let docs = this.state.docs;

      request.getContacts((page-1)*docs, docs, (data) => {
          this.setState({
              contacts: data
          })
      })
  }


    render() {
        return (
          <>
            <div className="row">
              <div className="col">
                <ContactList contacts={this.state.contacts}/>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <PaginationNav  page={this.state.page} count={this.state.count} docs={this.state.docs}/>
              </div>
            </div>
          </>
        );
    }
}

export default Home;