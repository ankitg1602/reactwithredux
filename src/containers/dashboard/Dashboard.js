import React, {Component} from 'react';
import SelectOption from './../../components/Select'
import { AgGridReact } from 'ag-grid-react';
import TopBar from './../../components/TopBar';

class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            selectedOption: {value: null, label: null},
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
            rowData: [{
                transId: 12, itemsPurchased: 34, amount: 1234, dateOfTrans: '21212', merchant: 344
            }],
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
            rowDataContact: [{
                contactName: 12, contactTitle: 34, companyName: 1234, address: '21212', industry: 344
            }]
        }
    }

    onGridReady = params => {
        debugger
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    
        params.api.sizeColumnsToFit();
      };
    render() {
        return (<div>
            <TopBar/>
            <SelectOption {...this.state} />
            <br/>
            <br/>
            <br/>
            <div className="ag-theme-balham" style={{height: '500px'}}>
                <AgGridReact columnDefs={this.state.columnDefs} rowData={this.state.rowData} defaultColDef={this.state.defaultColDef} onGridReady={this.onGridReady}>

                </AgGridReact>

            </div>
            <div className="ag-theme-balham" style={{height: '500px'}}>
                <AgGridReact columnDefs={this.state.columnDefsContact} rowData={this.state.rowDataContact}>

                </AgGridReact>

            </div>
        </div>)
        
    }
}

export default Dashboard