import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { classList, Animation, createElement, closest, isNullOrUndefined } from '@syncfusion/ej2-base';
import { GridComponent, ColumnsDirective, ColumnDirective,Filter, IFilter,Inject,Grid, VirtualScroll, Sort,SelectionType, Selection  } from '@syncfusion/ej2-react-grids';
import {DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { CheckBox  } from '@syncfusion/ej2-react-buttons';
import { orderDetails } from './data';
import { SampleBase } from '../common/sample-base';
import { Slider } from '@syncfusion/ej2-react-inputs';
import { Query, DataManager, Predicate } from '@syncfusion/ej2-data';
import './grid-overview.css';


function statusTemplate(props):any { 
     
  return(<div id="status" className="statustemp">
  <span className="statustxt">{props.Status}</span>
</div>)
}
function ratingTemplate(props):any {
  return(<div className="rating">
            <span className="star"></span>
            <span className="star"></span>
            <span className="star"></span>
            <span className="star"></span>
            <span className="star"></span>
        </div>)
}
function progessTemplate(props):any {
  return(  <div id="myProgress" className="pbar">
  <div id="myBar" className="bar">
    <div id="label" className="barlabel"></div>
  </div>
</div>)
}
let loc = { width: '31px' , height: '24px'};
function trustTemplate(props):any {
  var Trustworthiness = props.Trustworthiness == "Sufficient" ? 'src/grid/images/Sufficient.png' : props.Trustworthiness == "InSufficient" ? 'src/grid/images/InSufficient.png' : 'src/grid/images/Perfect.png' ;
  return(<div> <img style={loc} src={Trustworthiness} />
  <span id="Trusttext">{props.Trustworthiness}</span></div>)
}

function empTemplate(props):any {
 return(<div>
      <div className="empimg">
        <span className="e-userimg">
        </span>
      </div> 
      <span id="Emptext">{props.Employees}</span>
    </div>)
}
function coltemplate(props):any {
  return(<div className="Mapimage">
  <img src="src/grid/images/Map.png" className="e-image" /> <span>  </span> 
  <span id="locationtext">{props.Location}</span>
</div>)
}
function trustdetails(props):any{
    if (props.Trustworthiness === "Select All") {
        return (<span></span>);
    }
    let loc = { width: '31px' , height: '24px'};   
    let Trustworthiness = props.Trustworthiness == "Sufficient" ? 'src/grid/images/Sufficient.png' : props.Trustworthiness == "InSufficient" ? 'src/grid/images/InSufficient.png' : 'src/grid/images/Perfect.png' ;
    return (<div><img style={loc} src={Trustworthiness} /> <span id="Trusttext">{props.Trustworthiness}</span></div>);
}
function ratingDetails(props): any{   
    let ele = [];
    for (var i = 0; i < 5; i++) {
        if (i < props.Rating) {
        ele.push(<span className="star checked"></span>);
        }           
         else {
           ele.push(<span className="star"></span>)
        }
    }
        return <div className="rating">{ele}</div>;    
}
function statusdetails(props):any {
    if (props.Status === "Select All") {
        return (<span>Select All</span>);
    }     
    if (props.Status === "Active") {
        return (
            <div className="statustemp e-activecolor">
            <span className="statustxt e-activecolor">Active</span>
            </div>)     
    }
    if (props.Status === "InActive") {
      return (
          <div className="statustemp e-inactivecolor">
          <span className="statustxt e-inactivecolor">InActive</span>
          </div>)
           }  
  } 
function getData(dataCount?: number): object {  
  let check: boolean[] = [true, false];
  let Employees: string[] = [
      'Michael', 'Kathryn', 'Tamer', 'Martin', 'Davolio', 'Nancy', 'Fuller', 'Leverling', 'Peacock',
      'Margaret', 'Buchanan', 'Janet', 'Andrew', 'Callahan', 'Laura', 'Dodsworth', 'Anne',
      'Bergs', 'Vinet', 'Anton', 'Fleet', 'Zachery', 'Van', 'King', 'Jack', 'Rose'];
  let Designation: string[] = ['Manager', 'CFO', 'Designer', 'Developer', 'Program Directory', 'System Analyst', 'Project Lead']
  let Mail: string[] = ['sample.com', 'arpy.com', 'rpy.com', 'mail.com', 'jourrapide.com']
  let category: string[] = ['Energy', 'Financial', 'Technology', 'Industrial']
  let Location: string[] = ['UK', 'USA', 'Sweden', 'France', 'Canada', 'Argentina', 'Austria', 'Germany', 'Mexico']
  let Status: string[] = ['Active', 'InActive'];
  let Trustworthiness: string[] = ['Perfect', 'Sufficient', 'InSufficient'];
  let tradeData: Object[] = [];
  let Address: string[] = ["59 rue de l'Abbaye", "Luisenstr. 48", "Rua do Pa??o, 67", "2, rue du Commerce", "Boulevard Tirou, 255",
      "Rua do Pa??o, 67", "Hauptstr. 31", "Starenweg 5", "Rua do Mercado, 12", "Carrera 22 con Ave. Carlos Soublette #8-35", "Kirchgasse 6",
      "Sierras de Granada 9993", "Mehrheimerstr. 369", "Rua da Panificadora, 12", "2817 Milton Dr.", "Kirchgasse 6", "??kergatan 24", "24, place Kl??ber",
      "Torikatu 38", "Berliner Platz 43", "5?? Ave. Los Palos Grandes", "1029 - 12th Ave. S.",
      "Torikatu 38", "P.O. Box 555", "2817 Milton Dr.", "Taucherstra??e 10", "59 rue de l'Abbaye", "Via Ludovico il Moro 22",
      "Avda. Azteca 123", "Heerstr. 22", "Berguvsv??gen  8", "Magazinweg 7", "Berguvsv??gen  8", "Gran V??a, 1", "Gran V??a, 1",
      "Carrera 52 con Ave. Bol??var #65-98 Llano Largo", "Magazinweg 7", "Taucherstra??e 10", "Taucherstra??e 10",
      "Av. Copacabana, 267", "Strada Provinciale 124", "Fauntleroy Circus", "Av. dos Lus??adas, 23",
      "Rua da Panificadora, 12", "Av. In??s de Castro, 414", "Avda. Azteca 123", "2817 Milton Dr."]
  let EmployeeImg = ['usermale', 'userfemale'];
  if (typeof dataCount === 'string') {
      dataCount = parseInt(dataCount);
  }
  for (let i: number = 1; i <= dataCount; i++) {
      let code = 10000;
      tradeData.push({
          'check': check[Math.floor(Math.random() * check.length)],
          'EmployeeID': code + i,
          'Employees': Employees[Math.floor(Math.random() * Employees.length)] + ' ' + Employees[Math.floor(Math.random() * Employees.length)],
          'Designation': Designation[Math.floor(Math.random() * Designation.length)],
          'Location': Location[Math.floor(Math.random() * Location.length)],
          'Status': Status[Math.floor(Math.random() * Status.length)],
          'Trustworthiness': Trustworthiness[Math.floor(Math.random() * Trustworthiness.length)],
          'Rating': Math.floor(Math.random() * 5),
          'Software': Math.floor(Math.random() * 100),
          'EmployeeImg': EmployeeImg[Math.floor(Math.random() * EmployeeImg.length)],
          'CurrentSalary': Math.floor((Math.random() * 100000)),
          'Address': Address[Math.floor(Math.random() * Address.length)],
      })
      let emp = tradeData[i - 1]["Employees"];
      let sName = emp.substr(0, emp.indexOf(' ')).toLowerCase();
      tradeData[i - 1]['Mail'] = sName + (Math.floor(Math.random() * 100) + 10) + '@' + Mail[Math.floor(Math.random() * Mail.length)];

  }
  return tradeData;
}
export class OverView extends SampleBase<{}, {}> { 
  public dReady: boolean = false;
  private dtTime: boolean = false;
  private isDataBound: boolean = false;
  public isDataChanged: boolean = true;
  private intervalFun: any;
  private clrIntervalFun: any;
  private clrIntervalFun1: any;
  private clrIntervalFun2: any;
  public dropSlectedIndex: number = null;
  public ddObj: DropDownListComponent
  public gridInstance: GridComponent;
  public stTime: any; 
  private ddlData: { [key: string]: Object }[] = [
    { text: '1,000 Rows and 11 Columns', value: '1000' },
    { text: '10,000 Rows and 11 Columns', value: '10000' },
    { text: '1,00,000 Rows and 11 Columns', value: '100000' }      
  ];
 
  private fields: object = { text: 'text', value: 'value' };
 
  public onQueryCellInfo(args:any): void {
       if (args.column.field === 'Employees') {
            if (args.data.EmployeeImg === 'usermale') {
                args.cell.querySelector('.e-userimg').classList.add("sf-icon-Male");
            } else {
                args.cell.querySelector('.e-userimg').classList.add("sf-icon-FeMale");
            }
        }
        if (args.column.field === 'Status') {
            if (args.cell.textContent === "Active") {
                args.cell.querySelector(".statustxt").classList.add("e-activecolor");
                args.cell.querySelector(".statustemp").classList.add("e-activecolor");
            }
            if (args.cell.textContent === "InActive") {
                args.cell.querySelector(".statustxt").classList.add("e-inactivecolor");
                args.cell.querySelector(".statustemp").classList.add("e-inactivecolor");
            }
        }
        if (args.column.field === 'Rating') {
            if (args.column.field === 'Rating') {
                for (var i = 0; i < args.data.Rating; i++) {
                    args.cell.querySelectorAll("span")[i].classList.add("checked");
                }
            }
        }
        if (args.column.field === "Software") {
            if (args.data.Software <= 20) {
                args.data.Software = args.data.Software + 30;
            }
            args.cell.querySelector(".bar").style.width = args.data.Software + "%";
            args.cell.querySelector(".barlabel").textContent = args.data.Software + "%";           
            if (args.data.Status === "InActive") {
                args.cell.querySelector(".bar").classList.add("progressdisable");
            }
        }    
  }
  public onDataBound(): void {
    clearTimeout(this.clrIntervalFun);
    clearInterval(this.intervalFun);
    this.dtTime = true;
  }
  public onComplete(args:any): void{
    if (args.requestType === "filterchoicerequest") {
        if (args.filterModel.options.field === "Trustworthiness" || args.filterModel.options.field === "Rating" || args.filterModel.options.field === "Status") {
            var span = args.filterModel.dialogObj.element.querySelectorAll('.e-selectall')[0];
            if(!isNullOrUndefined(span)) {
                closest(span, '.e-ftrchk').classList.add("e-hide");
            }
        }
    }
  } 
  public getTradeData: Object = getData(1000); 
  public onChange(): void {
	this.ddObj.hidePopup();
    this.gridInstance.showSpinner();
    this.dropSlectedIndex = null;
    let index: number = this.ddObj.value as number;
    clearTimeout(this.clrIntervalFun2);
    this.clrIntervalFun2 = setTimeout(() => {
        this.isDataChanged = true;
        this.stTime = null;
        let contentElement: Element = this.gridInstance.contentModule.getPanel().firstChild as Element;
        contentElement.scrollLeft = 0;
        contentElement.scrollTop = 0;
        this.gridInstance.pageSettings.currentPage = 1;
        this.stTime = performance.now();
        this.gridInstance.dataSource = getData(index);
        this.gridInstance.hideSpinner();
    }, 100);
  }
  public check : IFilter = {
    type: 'CheckBox'
  }
  public select : any = {
      persistSelection: true,
      type: "Multiple",
      checkboxOnly: true
  }
  public onLoad(args:any): void {      
        (document.getElementById('overviewgrid') as any).ej2_instances[0].on('data-ready', ()=> {
            this.dReady = true; 
            this.stTime = performance.now();
         });
        document.getElementById('overviewgrid').addEventListener('DOMSubtreeModified', () => {
        if (this.dReady && this.stTime && this.isDataChanged) {
            let msgEle = document.getElementById('msg');
            let val: any = (performance.now() - this.stTime).toFixed(0);
            this.stTime = null;
            this.dReady = false;
            this.dtTime = false;
            this.isDataChanged = false;
            msgEle.innerHTML = 'Load Time: ' + "<b>" + val + "</b>" + '<b>ms</b>';
            msgEle.classList.remove('e-hide')
        }
     })
    }
  public Filter : any = {
    type: 'Menu'
  }     
  public status : any = {
    type: 'CheckBox',
    itemTemplate: statusdetails
  }      
  public trust : any = {
    type: 'CheckBox',
    itemTemplate: trustdetails
  }   
  public rating : any = {
    type: 'CheckBox',
    itemTemplate: ratingDetails
  }    
  render() {    
    return (
      <div className='control-pane'>
        <div className='control-section'>
        <div>
        <DropDownListComponent id="games" width='220' dataSource={this.ddlData} index={0} ref={(dropdownlist) => { this.ddObj = dropdownlist }} fields={this.fields} change={this.onChange.bind(this)} placeholder="Select a Data Range" popupHeight="240px" />
        <span id='msg'></span>
        <br/>
        </div>
          <GridComponent id="overviewgrid" dataSource={this.getTradeData} enableHover={false} enableVirtualization={true} rowHeight={38} height='600' ref={(g) => { this.gridInstance = g }} actionComplete={this.onComplete.bind(this)} load={this.onLoad.bind(this)} queryCellInfo={this.onQueryCellInfo.bind(this)} dataBound={this.onDataBound.bind(this)} filterSettings={this.Filter} allowFiltering={true} allowSorting={true} allowSelection={true} selectionSettings={this.select} >
            <ColumnsDirective>
            <ColumnDirective type='checkbox' allowSorting={false} allowFiltering={false}  width='60'></ColumnDirective>
              <ColumnDirective field='EmployeeID' visible={false} headerText='Employee ID' isPrimaryKey={true} width='130'></ColumnDirective>
              <ColumnDirective field='Employees' headerText='Employee Name' width='230'clipMode='EllipsisWithTooltip' template={empTemplate} filter={this.check} />
              <ColumnDirective field='Designation'  headerText='Designation' width='170' filter={this.check} clipMode='EllipsisWithTooltip' />
              <ColumnDirective field='Mail' headerText='Mail' filter={this.Filter} width='230'></ColumnDirective>
              <ColumnDirective field='Location' headerText='Location' width='140' filter={this.check} template={coltemplate}></ColumnDirective>
              <ColumnDirective field='Status' headerText='Status' filter={this.status}  template={statusTemplate} width='130'></ColumnDirective>
              <ColumnDirective field='Trustworthiness' filter={this.trust} headerText='Trustworthiness' template={trustTemplate} width='160'></ColumnDirective>
              <ColumnDirective field='Rating' headerText='Rating' filter={this.rating}  template={ratingTemplate} width='160' />
              <ColumnDirective field='Software' allowFiltering={false} allowSorting={false} headerText='Software Proficiency' width='180' template={progessTemplate} format='C2' />
              <ColumnDirective field='CurrentSalary' headerText='Current Salary' filter={this.Filter} width='160' format='C2'></ColumnDirective>
              <ColumnDirective field='Address' headerText='Address' width='240' filter={this.Filter} clipMode="EllipsisWithTooltip" ></ColumnDirective>
            </ColumnsDirective>
            <Inject services={[Filter,VirtualScroll,Sort]} />
          </GridComponent>
        </div>  
        <style>
            @import 'src/grid/Grid/style.css';
        </style>
<div id="action-description">
    <p>This sample demonstrates the overview of basic grid features with its performance metrics of large data. To change datasource count, select rows and columns count from dropdown.</p>
</div>

<div id="description">
    <p>
        The Grid is used to display and manipulate tabular data with configuration options to control 
        the way the data is presented and manipulated. 
        It will pull the data from a data source, such as an array of JSON objects, OData web services,
        or <code><a target="_blank" className="code"
        href="http://ej2.syncfusion.com/documentation/data/api-dataManager.html">
        DataManager</a></code> binding data fields to columns. 
        Also, displaying a column header to identify the field with support for grouped records.
    </p>
    <p>
        In this demo, Grid features such as <code>Virtual Scrolling, Filtering, Sorting, Column Template </code> etc... are used along with large data source.
    </p>
    <p>
        More information on the Grid instantiation can be found in this
        <a target="_blank" href="http://ej2.syncfusion.com/react/documentation/grid/getting-started.html">
            documentation section</a>.
    </p>
</div>
</div>
    )
  }
}