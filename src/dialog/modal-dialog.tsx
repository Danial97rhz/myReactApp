import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { DialogComponent } from '@syncfusion/ej2-react-popups';
import { CheckBoxComponent } from '@syncfusion/ej2-react-buttons';
import { ChangeEventArgs } from '@syncfusion/ej2-buttons';
import { PropertyPane } from '../common/property-pane';
import { SampleBase } from '../common/sample-base';
import './modal-dialog.css';

export class Modal extends SampleBase<{}, {hideDialog: boolean;}> {
    private dialogInstance: DialogComponent;
    public checkboxObj: CheckBoxComponent;
    private animationSettings: Object;
    private buttons;
    private buttonRef;
    private buttonElement: HTMLElement;
    constructor(props: {}) {
        super(props);
        this.state = {
            hideDialog : true
        };
        this.buttonElement = null;
        this.buttonRef = element => {
            this.buttonElement = element;
        };
        this.animationSettings = { effect: 'None' };
        this.buttons = [{
            // Click the footer buttons to hide the Dialog
            click: () => {
                this.dialogInstance.hide();
            },
            // Accessing button component properties by buttonModel property
            buttonModel: {
                //Enables the primary button
                isPrimary: true,
                content: 'OK'
            }
        }];
      }

    // function to handle the CheckBox change event
    private onChange(args: ChangeEventArgs) {
        if(args.checked) {
            this.dialogInstance.overlayClick = () => {
                this.setState({ hideDialog: false });
            };
        } else {
            this.dialogInstance.overlayClick = () => {
                this.setState({ hideDialog: true });
            };
        }
    }
    // To Open dialog
    private buttonClick(): void {
        this.setState({ hideDialog: true });
    }

   private dialogClose(): void {
    this.setState({ hideDialog: false });
        this.buttonElement.style.display='inline-block';
    }
    private dialogOpen(): void {
        this.buttonElement.style.display='none';
    }

  public render(): JSX.Element {
    return (
      <div className='control-pane'>
        <div className='control-section modal-dialog-target'>
            <div id='target' className='col-lg-8'>
            <button className="e-control e-btn dlgbtn dlgbtn-position" ref={this.buttonRef} onClick={this.buttonClick.bind(this)}>Open</button>
            {/* Rendering modal Dialog by enabling 'isModal' as true */}
            <DialogComponent id="modalDialog" isModal={true} buttons={this.buttons} header='Software Update' width='335px' content='Your current software version is up to date.' 
            ref={dialog => this.dialogInstance = dialog}
            target='#target' visible={this.state.hideDialog} open={this.dialogOpen.bind(this)} close={this.dialogClose.bind(this)} animationSettings={this.animationSettings}></DialogComponent>
            </div>
          <div className='col-lg-4 property-section'>
                        <PropertyPane title='Properties'>
                            <table id='property' title='Properties' className='property-panel-table table-width'>
                            <tbody>
                                <tr>
                                    <td className='table-td'>
                                    <div className='dialog-td-font'>Close on overlay click</div>
                                    </td>
                                    <td>
                                    <CheckBoxComponent checked={false} ref={(scope) => { this.checkboxObj = scope; }} change={ this.onChange.bind(this) } ></CheckBoxComponent>
                                    </td>
                                </tr>
                            </tbody>
                            </table>
                        </PropertyPane>
                    </div>
                </div>
        <div id="action-description">
        <p>
        This sample demonstrates that the modal behavior of dialog component. Choose "close on overlay" option from property panel to decide whether the dialog can be closed when clicking overlay.
        Click ???open??? to show the dialog again, if it is in closed state. 
        </p>
        </div>
        <div id="description">
        <p>
            The modal dialog prevents to access the parent application. So, the user should interact with the dialog before continuing with the parent application. 
        </p>
        <p>More information on the modal behavior of Dialog can be found in
        the <a target="_blank" href="http://ej2.syncfusion.com/react/documentation/dialog/getting-started.html#modal-dialog">
        documentation section</a>.</p>
        </div>
      </div>
    );
  }
}