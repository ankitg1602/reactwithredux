import React, {Component} from 'react';
import SelectOption from './../../components/Select'
import { AgGridReact } from 'ag-grid-react';
import TopBar from './../../components/TopBar';
import api from './api'

class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            selectedOption: {},
            selectedValue: '',
            columnDefs: [{
                headerName: "Transaction Id",  field: "transId", filter: "agTextColumnFilter",
                filterParams: {
                  applyButton: true,
                  resetButton: true
                }
            }, {
                headerName: "Items Purchased",  field: "itemsPurchased",
            }, {
                headerName: "Amount in US Dollars",  field: "amount",
                  valueSetter: function(params) {
                      api.updateSpendHistory({
                          transId: params.data.transId,
                          amount: params.newValue
                      })
                      params.data.amount = params.newValue;
                      return true
                  }
            }, {
                headerName: "Date of Transaction",  field: "dateOfTrans", filter: "agTextColumnFilter",
                filterParams: {
                  applyButton: true,
                  resetButton: true
                }
            }, {
                headerName: "Merchant",  field: "merchant", filter: "agTextColumnFilter",
                filterParams: {
                  applyButton: true,
                  resetButton: true
                }
            }],
            rowData: [],
            defaultColDef: {
                editable: true,
                resizable: true
              },
            columnDefsContact: [{
                headerName: "Contact Name",  field: "contactName",filter: "agTextColumnFilter",
                filterParams: {
                  applyButton: true,
                  resetButton: true
                }
            }, {
                headerName: "Contact Title",  field: "contactTitle",
            }, {
                headerName: "Company Name",  field: "companyName", filter: "agTextColumnFilter",
                filterParams: {
                  applyButton: true,
                  resetButton: true
                }
            }, {
                headerName: "Address",  field: "address",
            }, {
                headerName: "Industry",  field: "industry", filter: "agTextColumnFilter",
                filterParams: {
                  applyButton: true,
                  resetButton: true
                }
            }],
            rowDataContact: []
        }
    }

    onGridReady = params => {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    
        params.api.sizeColumnsToFit();
      };

      onChanged = async (value) => {
        let selValue = ''
        if (value.value === "2") {
            selValue = "2"
            const rowDataContact = await api.clientContacts();
            this.setState({
                rowDataContact: rowDataContact.data.data,
                defaultColDef: {
                    editable: false,
                    resizable: true
                  },
            })
        } else {
            selValue = "1"
            const data = await api.getspendHistory();
            this.setState({
                rowData: data.data.data,
                defaultColDef: {
                    editable: true,
                    resizable: true
                  },
            })
        }

       
        this.setState({
            selectedValue: selValue,
            selectedOption: value
        })
      }

      componentDidMount =  async () => {
        const data =await  api.getspendHistory() ;
          this.setState({
              rowData: data.data.data,
              selectedValue: "1",
              selectedOption: { value: '1', label: 'Clients Spend History' }
          })
      }

      onLogout = () => {
        debugger
        this.props.history.push('/login')
    }

    render() {
        const selDropDownValue = this.state.selectedValue
        return (<div>
            <div style={{width: '100%',height: '30px', textAlign: 'right', padding: '10px', backgroundColor: 'silver'}}>
            <button onClick={this.onLogout} style={{padding: '5px', margin:'5px 30px'}}>Logout</button>
        </div>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', padding: '20px'}}>
                <div style={{width: '250px'}}>
                <SelectOption selectedOption={this.state.selectedOption} onSelectedChanged={this.onChanged} />
                </div>
            
            </div>
            
           
            
            <div className="ag-theme-balham" style={{height: '200px', margin: '20px 40px', overflow: 'hidden'}} >
            {
                selDropDownValue === "1" ?  <AgGridReact columnDefs={this.state.columnDefs} rowData={this.state.rowData} defaultColDef={this.state.defaultColDef} onGridReady={this.onGridReady} sizeColumnsToFit={true}/>
               : <AgGridReact columnDefs={this.state.columnDefsContact} rowData={this.state.rowDataContact} sizeColumnsToFit={true} />

            }
               
            </div>
        </div>)
        
    }
}

export default Dashboard