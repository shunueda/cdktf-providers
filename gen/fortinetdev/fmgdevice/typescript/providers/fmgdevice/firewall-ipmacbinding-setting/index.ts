// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_ipmacbinding_setting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirewallIpmacbindingSettingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_ipmacbinding_setting#bindthroughfw FirewallIpmacbindingSetting#bindthroughfw}
  */
  readonly bindthroughfw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_ipmacbinding_setting#bindtofw FirewallIpmacbindingSetting#bindtofw}
  */
  readonly bindtofw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_ipmacbinding_setting#device_name FirewallIpmacbindingSetting#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_ipmacbinding_setting#device_vdom FirewallIpmacbindingSetting#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_ipmacbinding_setting#id FirewallIpmacbindingSetting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_ipmacbinding_setting#undefinedhost FirewallIpmacbindingSetting#undefinedhost}
  */
  readonly undefinedhost?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_ipmacbinding_setting fmgdevice_firewall_ipmacbinding_setting}
*/
export class FirewallIpmacbindingSetting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_firewall_ipmacbinding_setting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FirewallIpmacbindingSetting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FirewallIpmacbindingSetting to import
  * @param importFromId The id of the existing FirewallIpmacbindingSetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_ipmacbinding_setting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FirewallIpmacbindingSetting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_firewall_ipmacbinding_setting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_ipmacbinding_setting fmgdevice_firewall_ipmacbinding_setting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FirewallIpmacbindingSettingConfig = {}
  */
  public constructor(scope: Construct, id: string, config: FirewallIpmacbindingSettingConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_firewall_ipmacbinding_setting',
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
    this._bindthroughfw = config.bindthroughfw;
    this._bindtofw = config.bindtofw;
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._id = config.id;
    this._undefinedhost = config.undefinedhost;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bindthroughfw - computed: false, optional: true, required: false
  private _bindthroughfw?: string; 
  public get bindthroughfw() {
    return this.getStringAttribute('bindthroughfw');
  }
  public set bindthroughfw(value: string) {
    this._bindthroughfw = value;
  }
  public resetBindthroughfw() {
    this._bindthroughfw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindthroughfwInput() {
    return this._bindthroughfw;
  }

  // bindtofw - computed: true, optional: true, required: false
  private _bindtofw?: string; 
  public get bindtofw() {
    return this.getStringAttribute('bindtofw');
  }
  public set bindtofw(value: string) {
    this._bindtofw = value;
  }
  public resetBindtofw() {
    this._bindtofw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindtofwInput() {
    return this._bindtofw;
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

  // undefinedhost - computed: false, optional: true, required: false
  private _undefinedhost?: string; 
  public get undefinedhost() {
    return this.getStringAttribute('undefinedhost');
  }
  public set undefinedhost(value: string) {
    this._undefinedhost = value;
  }
  public resetUndefinedhost() {
    this._undefinedhost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get undefinedhostInput() {
    return this._undefinedhost;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bindthroughfw: cdktf.stringToTerraform(this._bindthroughfw),
      bindtofw: cdktf.stringToTerraform(this._bindtofw),
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      id: cdktf.stringToTerraform(this._id),
      undefinedhost: cdktf.stringToTerraform(this._undefinedhost),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bindthroughfw: {
        value: cdktf.stringToHclTerraform(this._bindthroughfw),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bindtofw: {
        value: cdktf.stringToHclTerraform(this._bindtofw),
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
      undefinedhost: {
        value: cdktf.stringToHclTerraform(this._undefinedhost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
