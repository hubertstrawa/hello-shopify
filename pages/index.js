import { TextStyle } from '@shopify/polaris';
import { Page, EmptyState, Layout } from '@shopify/polaris';
import { ResourcePicker, TitleBar } from '@shopify/app-bridge-react';
import Link from 'next/link'
import {useState} from 'react'

const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

class Index extends React.Component {
  state = { open: false, text: '' };

  handleChange = (event) => {
    this.setState(({text: event.target.value}));
  }
  
  render() {

    return (
    <Page>
      <TitleBar
      primaryAction={{
        content: 'Select products',
        onAction: () => this.setState({ open: true }),
      }}
      />
      <div>
        <p>Enter your store</p>
        <input type="text" value={this.state.text} onChange={this.handleChange}/><br/><br/>
        <Link href={{ pathname: '/export', query: { shop: this.state.text } }}><a>click here</a></Link>
      </div>   
      <Layout>
        <EmptyState
          heading="Discount your products temporarily"
          action={{
            content: 'Select products',
            onAction: () => this.setState({ open: true }),
          }}
          image={img}
        >
          <p>Select products to change their price temporarily.</p>
        </EmptyState>
      </Layout>
    </Page>
    );
  }

  handleSelection = (resources) => {
    const idsFromResources = resources.selection.map((product) => product.id);
    this.setState({ open: false })
    //console.log(resources)
    console.log(idsFromResources)
  };
}

export default Index