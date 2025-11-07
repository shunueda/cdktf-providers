// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_accesscontrollist_layer3ipv4rules_move
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WirelesscontrollerAccesscontrollistLayer3Ipv4RulesMoveConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_accesscontrollist_layer3ipv4rules_move#access_control_list WirelesscontrollerAccesscontrollistLayer3Ipv4RulesMove#access_control_list}
  */
  readonly accessControlList: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_accesscontrollist_layer3ipv4rules_move#device_name WirelesscontrollerAccesscontrollistLayer3Ipv4RulesMove#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_accesscontrollist_layer3ipv4rules_move#device_vdom WirelesscontrollerAccesscontrollistLayer3Ipv4RulesMove#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_accesscontrollist_layer3ipv4rules_move#id WirelesscontrollerAccesscontrollistLayer3Ipv4RulesMove#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_accesscontrollist_layer3ipv4rules_move#layer3_ipv4_rules WirelesscontrollerAccesscontrollistLayer3Ipv4RulesMove#layer3_ipv4_rules}
  */
  readonly layer3Ipv4Rules: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_accesscontrollist_layer3ipv4rules_move#option WirelesscontrollerAccesscontrollistLayer3Ipv4RulesMove#option}
  */
  readonly option: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_accesscontrollist_layer3ipv4rules_move#state_pos WirelesscontrollerAccesscontrollistLayer3Ipv4RulesMove#state_pos}
  */
  readonly statePos?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_accesscontrollist_layer3ipv4rules_move#target WirelesscontrollerAccesscontrollistLayer3Ipv4RulesMove#target}
  */
  readonly target: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_accesscontrollist_layer3ipv4rules_move fmgdevice_wirelesscontroller_accesscontrollist_layer3ipv4rules_move}
*/
export class WirelesscontrollerAccesscontrollistLayer3Ipv4RulesMove extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_wirelesscontroller_accesscontrollist_layer3ipv4rules_move";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WirelesscontrollerAccesscontrollistLayer3Ipv4RulesMove resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WirelesscontrollerAccesscontrollistLayer3Ipv4RulesMove to import
  * @param importFromId The id of the existing WirelesscontrollerAccesscontrollistLayer3Ipv4RulesMove that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_accesscontrollist_layer3ipv4rules_move#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WirelesscontrollerAccesscontrollistLayer3Ipv4RulesMove to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_wirelesscontroller_accesscontrollist_layer3ipv4rules_move", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_accesscontrollist_layer3ipv4rules_move fmgdevice_wirelesscontroller_accesscontrollist_layer3ipv4rules_move} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WirelesscontrollerAccesscontrollistLayer3Ipv4RulesMoveConfig
  */
  public constructor(scope: Construct, id: string, config: WirelesscontrollerAccesscontrollistLayer3Ipv4RulesMoveConfig) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_wirelesscontroller_accesscontrollist_layer3ipv4rules_move',
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
    this._accessControlList = config.accessControlList;
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._id = config.id;
    this._layer3Ipv4Rules = config.layer3Ipv4Rules;
    this._option = config.option;
    this._statePos = config.statePos;
    this._target = config.target;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_control_list - computed: false, optional: false, required: true
  private _accessControlList?: string; 
  public get accessControlList() {
    return this.getStringAttribute('access_control_list');
  }
  public set accessControlList(value: string) {
    this._accessControlList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessControlListInput() {
    return this._accessControlList;
  }

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

  // layer3_ipv4_rules - computed: false, optional: false, required: true
  private _layer3Ipv4Rules?: string; 
  public get layer3Ipv4Rules() {
    return this.getStringAttribute('layer3_ipv4_rules');
  }
  public set layer3Ipv4Rules(value: string) {
    this._layer3Ipv4Rules = value;
  }
  // Temporarily expose input value. Use with caution.
  public get layer3Ipv4RulesInput() {
    return this._layer3Ipv4Rules;
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
      access_control_list: cdktf.stringToTerraform(this._accessControlList),
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      id: cdktf.stringToTerraform(this._id),
      layer3_ipv4_rules: cdktf.stringToTerraform(this._layer3Ipv4Rules),
      option: cdktf.stringToTerraform(this._option),
      state_pos: cdktf.stringToTerraform(this._statePos),
      target: cdktf.stringToTerraform(this._target),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_control_list: {
        value: cdktf.stringToHclTerraform(this._accessControlList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      layer3_ipv4_rules: {
        value: cdktf.stringToHclTerraform(this._layer3Ipv4Rules),
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
