import React, {Component} from 'react';
import SelectOption from './../../components/Select'
import { AgGridReact } from 'ag-grid-react';
import api from './api'

class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            sizeColumnsToFit: true,
            selectedOption: {},
            selectedValue: '',
            columnDefs: [{
                headerName: "Transaction Id",  field: "transId", filter: "agTextColumnFilter",
                filterParams: {
                  applyButton: true,
                  resetButton: true
                },
                editable: false,
                filter: "agNumberColumnFilter",
                filterable: true
                // filterParams: {
                //     defaultOption: "startsWith",
                //     caseSensitive: true,
                //     suppressAndOrCondition: true
                // }
            }, {
                headerName: "Items Purchased",  field: "itemsPurchased",filter: "agNumberColumnFilter",
                filterable: false,
                editable: false,
            }, {
                headerName: "Amount in US Dollars",  
                field: "amount",filter: "agNumberColumnFilter",
                filterable: false,
                cellStyle: params => {
                    return this.cellStyle();
                  }, 
                editable: true,
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
                editable: false,
                filterParams: {
                  applyButton: true,
                  resetButton: true
                }
            }, {
                headerName: "Merchant",  field: "merchant", filter: "agTextColumnFilter",
                editable: false,
                filterParams: {
                  applyButton: true,
                  resetButton: true
                }
            }],
            rowData: [],
            defaultColDef: {
                editable: true,
                resizable: true,
                filter: true,
                sortable: true,
              },
            columnDefsContact: [{
                headerName: "Contact Name",  field: "contactName",filter: "agTextColumnFilter",
                filterParams: {
                  applyButton: true,
                  resetButton: true
                }
            }, {
                headerName: "Contact Title",  field: "contactTitle",filter: "agTextColumnFilter",
                filterable: true
            }, {
                headerName: "Company Name",  field: "companyName", filter: "agTextColumnFilter",
                filterParams: {
                  applyButton: true,
                  resetButton: true
                }
            }, {
                headerName: "Address",  field: "address",filter: "agTextColumnFilter",
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

    cellStyle = () => {
        return {
            background: '#f5f7f7',
            border: '1px solid #95A5A6',
            borderRadius: '2px',
            height: '28px'
          } 
    }

   

    onGridReady = params => {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;    
        params.api.sizeColumnsToFit();
      };

      onGridReady2 = params => {
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
                    resizable: true,
                  },
            })
        } else {
            selValue = "1"
            const data = await api.getspendHistory();
            this.setState({
                rowData: data.data.data,
                defaultColDef: {
                    editable: true,
                    resizable: true,
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
        if (!localStorage.getItem('userId')) {
            this.props.history.push('/')
          }
        this.setState({
            rowData: data.data.data,
            selectedValue: "1",
            selectedOption: { value: '1', label: 'Clients Spend History' }
        })
      }

      componentDidUpdate(prevprops,prevstate){
            setTimeout(()=>this.gridApi.sizeColumnsToFit(), 0);
      }

    onLogout = () => {
        localStorage.removeItem('userId')
        this.props.history.push('/')
    }

    render() {
        const selDropDownValue = this.state.selectedValue
        const sizeColumnsToFit = this.state.sizeColumnsToFit
        return (<div>
                   <div style={{textAlign: 'right', padding: '10px', backgroundColor: 'silver'}}>
                         <button onClick={this.onLogout} style={{padding: '5px', margin:'5px 30px'}}>Logout</button>
                  </div>
                  <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', padding: '20px'}}>
                        <div style={{width: '250px'}}>
                             <SelectOption selectedOption={this.state.selectedOption} onSelectedChanged={this.onChanged} />
                        </div>
                  </div>
                  <div className="ag-theme-balham" style={{height: '200px', margin: '20px 40px', overflow: 'hidden'}} >
                    {
                        selDropDownValue === "1" ?  <AgGridReact columnDefs={this.state.columnDefs} rowData={this.state.rowData} defaultColDef={this.state.defaultColDef} onGridReady={this.onGridReady} sizeColumnsToFit={sizeColumnsToFit} floatingFilter={true}/>
                    : <AgGridReact columnDefs={this.state.columnDefsContact} rowData={this.state.rowDataContact} sizeColumnsToFit={sizeColumnsToFit} onGridReady={this.onGridReady2} floatingFilter={true}/>
                    }
              </div>
        </div>)
        
    }
}

export default Dashboard