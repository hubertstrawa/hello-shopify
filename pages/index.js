import { TextStyle } from '@shopify/polaris';
import { Page, EmptyState, Layout } from '@shopify/polaris';
import { ResourcePicker, TitleBar } from '@shopify/app-bridge-react';

const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

class Index extends React.Component {
  state = { open: false };
  render() {

    function downloadData(contentType,data,filename){
	 
      let link=document.createElement("A");
      link.setAttribute("href",encodeURI("data:"+contentType+","+data));
      link.setAttribute("style","display:none");
      link.setAttribute("download",filename);
      document.body.appendChild(link); //needed for firefox
      console.log(link.outerHTML);
      link.click();
      setTimeout(function(){
          document.body.removeChild(link);
      },1000);
   }

   function fromToXml(form){
    let xmldata=['<?xml version="1.0"?>'];
      xmldata.push("<form>");
    let inputs=form.elements;
    for(let i=0;i<inputs.length;i++){
        let el=document.createElement("ELEMENT");
      if (inputs[i].name){
          el.setAttribute("name",inputs[i].name);
        el.setAttribute("value",inputs[i].value);
        xmldata.push(el.outerHTML);
      }
      
    }
    xmldata.push("</form>");
    return xmldata.join("\n");
}


 function download(frm) {
  console.log('download')
    let data=fromToXml(frm);
  console.log(data);
  
  downloadData("text/xml",data,"export.xml");
}

    return (
    <Page>
      <TitleBar
      primaryAction={{
        content: 'Select products',
        onAction: () => this.setState({ open: true }),
      }}
      /> 

      <form action="" method="post">
        <label for="firstname">First Name:</label>  
        <input type="text" name="firstname" id="firstname" />

        <label for="lastName">Last Name:</label>
        <input type="text" name="lastname" id="lastname"/>
      <button type="button" onclick={download(this.form)} id="submitButton">Download</button>
      </form>

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