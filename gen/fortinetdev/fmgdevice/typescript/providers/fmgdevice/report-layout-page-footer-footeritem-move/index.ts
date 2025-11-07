// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout_page_footer_footeritem_move
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ReportLayoutPageFooterFooteritemMoveConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout_page_footer_footeritem_move#device_name ReportLayoutPageFooterFooteritemMove#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout_page_footer_footeritem_move#device_vdom ReportLayoutPageFooterFooteritemMove#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout_page_footer_footeritem_move#footer_item ReportLayoutPageFooterFooteritemMove#footer_item}
  */
  readonly footerItem: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout_page_footer_footeritem_move#id ReportLayoutPageFooterFooteritemMove#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout_page_footer_footeritem_move#layout ReportLayoutPageFooterFooteritemMove#layout}
  */
  readonly layout: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout_page_footer_footeritem_move#option ReportLayoutPageFooterFooteritemMove#option}
  */
  readonly option: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout_page_footer_footeritem_move#state_pos ReportLayoutPageFooterFooteritemMove#state_pos}
  */
  readonly statePos?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout_page_footer_footeritem_move#target ReportLayoutPageFooterFooteritemMove#target}
  */
  readonly target: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout_page_footer_footeritem_move fmgdevice_report_layout_page_footer_footeritem_move}
*/
export class ReportLayoutPageFooterFooteritemMove extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_report_layout_page_footer_footeritem_move";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ReportLayoutPageFooterFooteritemMove resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ReportLayoutPageFooterFooteritemMove to import
  * @param importFromId The id of the existing ReportLayoutPageFooterFooteritemMove that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout_page_footer_footeritem_move#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ReportLayoutPageFooterFooteritemMove to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_report_layout_page_footer_footeritem_move", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout_page_footer_footeritem_move fmgdevice_report_layout_page_footer_footeritem_move} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ReportLayoutPageFooterFooteritemMoveConfig
  */
  public constructor(scope: Construct, id: string, config: ReportLayoutPageFooterFooteritemMoveConfig) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_report_layout_page_footer_footeritem_move',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._footerItem = config.footerItem;
    this._id = config.id;
    this._layout = config.layout;
    this._option = config.option;
    this._statePos = config.statePos;
    this._target = config.target;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // device_vdom - computed: true, optional: true, required: false
  private _deviceVdom?: string; 
  public get deviceVdom() {
    return this.getStringAttribute('device_vdom');
  }
  public set deviceVdom(value: string) {
    this._deviceVdom = value;
  }
  public resetDeviceVdom() {
    this._deviceVdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceVdomInput() {
    return this._deviceVdom;
  }

  // footer_item - computed: false, optional: false, required: true
  private _footerItem?: string; 
  public get footerItem() {
    return this.getStringAttribute('footer_item');
  }
  public set footerItem(value: string) {
    this._footerItem = value;
  }
  // Temporarily expose input value. Use with caution.
  public get footerItemInput() {
    return this._footerItem;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // layout - computed: false, optional: false, required: true
  private _layout?: string; 
  public get layout() {
    return this.getStringAttribute('layout');
  }
  public set layout(value: string) {
    this._layout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get layoutInput() {
    return this._layout;
  }

  // option - computed: false, optional: false, required: true
  private _option?: string; 
  public get option() {
    return this.getStringAttribute('option');
  }
  public set option(value: string) {
    this._option = value;
  }
  // Temporarily expose input value. Use with caution.
  public get optionInput() {
    return this._option;
  }

  // state_pos - computed: true, optional: true, required: false
  private _statePos?: string; 
  public get statePos() {
    return this.getStringAttribute('state_pos');
  }
  public set statePos(value: string) {
    this._statePos = value;
  }
  public resetStatePos() {
    this._statePos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statePosInput() {
    return this._statePos;
  }

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      footer_item: cdktf.stringToTerraform(this._footerItem),
      id: cdktf.stringToTerraform(this._id),
      layout: cdktf.stringToTerraform(this._layout),
      option: cdktf.stringToTerraform(this._option),
      state_pos: cdktf.stringToTerraform(this._statePos),
      target: cdktf.stringToTerraform(this._target),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_vdom: {
        value: cdktf.stringToHclTerraform(this._deviceVdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      footer_item: {
        value: cdktf.stringToHclTerraform(this._footerItem),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      layout: {
        value: cdktf.stringToHclTerraform(this._layout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      option: {
        value: cdktf.stringToHclTerraform(this._option),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state_pos: {
        value: cdktf.stringToHclTerraform(this._statePos),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target: {
        value: cdktf.stringToHclTerraform(this._target),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
