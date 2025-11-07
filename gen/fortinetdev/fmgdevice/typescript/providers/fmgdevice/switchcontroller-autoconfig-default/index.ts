// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_autoconfig_default
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwitchcontrollerAutoconfigDefaultConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_autoconfig_default#device_name SwitchcontrollerAutoconfigDefault#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_autoconfig_default#device_vdom SwitchcontrollerAutoconfigDefault#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_autoconfig_default#fgt_policy SwitchcontrollerAutoconfigDefault#fgt_policy}
  */
  readonly fgtPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_autoconfig_default#icl_policy SwitchcontrollerAutoconfigDefault#icl_policy}
  */
  readonly iclPolicy?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_autoconfig_default#id SwitchcontrollerAutoconfigDefault#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_autoconfig_default#isl_policy SwitchcontrollerAutoconfigDefault#isl_policy}
  */
  readonly islPolicy?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_autoconfig_default fmgdevice_switchcontroller_autoconfig_default}
*/
export class SwitchcontrollerAutoconfigDefault extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_switchcontroller_autoconfig_default";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwitchcontrollerAutoconfigDefault resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwitchcontrollerAutoconfigDefault to import
  * @param importFromId The id of the existing SwitchcontrollerAutoconfigDefault that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_autoconfig_default#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwitchcontrollerAutoconfigDefault to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_switchcontroller_autoconfig_default", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_autoconfig_default fmgdevice_switchcontroller_autoconfig_default} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwitchcontrollerAutoconfigDefaultConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SwitchcontrollerAutoconfigDefaultConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_switchcontroller_autoconfig_default',
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
    this._fgtPolicy = config.fgtPolicy;
    this._iclPolicy = config.iclPolicy;
    this._id = config.id;
    this._islPolicy = config.islPolicy;
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

  // fgt_policy - computed: true, optional: true, required: false
  private _fgtPolicy?: string; 
  public get fgtPolicy() {
    return this.getStringAttribute('fgt_policy');
  }
  public set fgtPolicy(value: string) {
    this._fgtPolicy = value;
  }
  public resetFgtPolicy() {
    this._fgtPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fgtPolicyInput() {
    return this._fgtPolicy;
  }

  // icl_policy - computed: true, optional: true, required: false
  private _iclPolicy?: string[]; 
  public get iclPolicy() {
    return cdktf.Fn.tolist(this.getListAttribute('icl_policy'));
  }
  public set iclPolicy(value: string[]) {
    this._iclPolicy = value;
  }
  public resetIclPolicy() {
    this._iclPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iclPolicyInput() {
    return this._iclPolicy;
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

  // isl_policy - computed: true, optional: true, required: false
  private _islPolicy?: string[]; 
  public get islPolicy() {
    return cdktf.Fn.tolist(this.getListAttribute('isl_policy'));
  }
  public set islPolicy(value: string[]) {
    this._islPolicy = value;
  }
  public resetIslPolicy() {
    this._islPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get islPolicyInput() {
    return this._islPolicy;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      fgt_policy: cdktf.stringToTerraform(this._fgtPolicy),
      icl_policy: cdktf.listMapper(cdktf.stringToTerraform, false)(this._iclPolicy),
      id: cdktf.stringToTerraform(this._id),
      isl_policy: cdktf.listMapper(cdktf.stringToTerraform, false)(this._islPolicy),
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
      fgt_policy: {
        value: cdktf.stringToHclTerraform(this._fgtPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      icl_policy: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._iclPolicy),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      isl_policy: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._islPolicy),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
