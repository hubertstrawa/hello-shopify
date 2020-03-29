import { TextStyle } from '@shopify/polaris';
import { Page, EmptyState, Layout } from '@shopify/polaris';
import { ResourcePicker, TitleBar } from '@shopify/app-bridge-react';

const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

class Index extends React.Component {
  state = { open: false };
  render() {

    return (
    <Page>
      <TitleBar
      primaryAction={{
        content: 'Select products',
        onAction: () => this.setState({ open: true }),
      }}
      />
      <h1>Test</h1>    
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