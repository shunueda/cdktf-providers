// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_rip_interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterRipInterfaceAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_rip_interface#auth_keychain RouterRipInterfaceA#auth_keychain}
  */
  readonly authKeychain?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_rip_interface#auth_mode RouterRipInterfaceA#auth_mode}
  */
  readonly authMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_rip_interface#auth_string RouterRipInterfaceA#auth_string}
  */
  readonly authString?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_rip_interface#device_name RouterRipInterfaceA#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_rip_interface#device_vdom RouterRipInterfaceA#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_rip_interface#flags RouterRipInterfaceA#flags}
  */
  readonly flags?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_rip_interface#id RouterRipInterfaceA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_rip_interface#name RouterRipInterfaceA#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_rip_interface#receive_version RouterRipInterfaceA#receive_version}
  */
  readonly receiveVersion?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_rip_interface#send_version RouterRipInterfaceA#send_version}
  */
  readonly sendVersion?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_rip_interface#send_version2_broadcast RouterRipInterfaceA#send_version2_broadcast}
  */
  readonly sendVersion2Broadcast?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_rip_interface#split_horizon RouterRipInterfaceA#split_horizon}
  */
  readonly splitHorizon?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_rip_interface#split_horizon_status RouterRipInterfaceA#split_horizon_status}
  */
  readonly splitHorizonStatus?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_rip_interface fmgdevice_router_rip_interface}
*/
export class RouterRipInterfaceA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_router_rip_interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterRipInterfaceA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterRipInterfaceA to import
  * @param importFromId The id of the existing RouterRipInterfaceA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_rip_interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterRipInterfaceA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_router_rip_interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_rip_interface fmgdevice_router_rip_interface} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterRipInterfaceAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: RouterRipInterfaceAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_router_rip_interface',
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
    this._authKeychain = config.authKeychain;
    this._authMode = config.authMode;
    this._authString = config.authString;
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._flags = config.flags;
    this._id = config.id;
    this._name = config.name;
    this._receiveVersion = config.receiveVersion;
    this._sendVersion = config.sendVersion;
    this._sendVersion2Broadcast = config.sendVersion2Broadcast;
    this._splitHorizon = config.splitHorizon;
    this._splitHorizonStatus = config.splitHorizonStatus;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_keychain - computed: true, optional: true, required: false
  private _authKeychain?: string[]; 
  public get authKeychain() {
    return cdktf.Fn.tolist(this.getListAttribute('auth_keychain'));
  }
  public set authKeychain(value: string[]) {
    this._authKeychain = value;
  }
  public resetAuthKeychain() {
    this._authKeychain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authKeychainInput() {
    return this._authKeychain;
  }

  // auth_mode - computed: true, optional: true, required: false
  private _authMode?: string; 
  public get authMode() {
    return this.getStringAttribute('auth_mode');
  }
  public set authMode(value: string) {
    this._authMode = value;
  }
  public resetAuthMode() {
    this._authMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authModeInput() {
    return this._authMode;
  }

  // auth_string - computed: true, optional: true, required: false
  private _authString?: string[]; 
  public get authString() {
    return cdktf.Fn.tolist(this.getListAttribute('auth_string'));
  }
  public set authString(value: string[]) {
    this._authString = value;
  }
  public resetAuthString() {
    this._authString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authStringInput() {
    return this._authString;
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

  // flags - computed: true, optional: true, required: false
  private _flags?: number; 
  public get flags() {
    return this.getNumberAttribute('flags');
  }
  public set flags(value: number) {
    this._flags = value;
  }
  public resetFlags() {
    this._flags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flagsInput() {
    return this._flags;
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // receive_version - computed: true, optional: true, required: false
  private _receiveVersion?: string[]; 
  public get receiveVersion() {
    return cdktf.Fn.tolist(this.getListAttribute('receive_version'));
  }
  public set receiveVersion(value: string[]) {
    this._receiveVersion = value;
  }
  public resetReceiveVersion() {
    this._receiveVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiveVersionInput() {
    return this._receiveVersion;
  }

  // send_version - computed: true, optional: true, required: false
  private _sendVersion?: string[]; 
  public get sendVersion() {
    return cdktf.Fn.tolist(this.getListAttribute('send_version'));
  }
  public set sendVersion(value: string[]) {
    this._sendVersion = value;
  }
  public resetSendVersion() {
    this._sendVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendVersionInput() {
    return this._sendVersion;
  }

  // send_version2_broadcast - computed: false, optional: true, required: false
  private _sendVersion2Broadcast?: string; 
  public get sendVersion2Broadcast() {
    return this.getStringAttribute('send_version2_broadcast');
  }
  public set sendVersion2Broadcast(value: string) {
    this._sendVersion2Broadcast = value;
  }
  public resetSendVersion2Broadcast() {
    this._sendVersion2Broadcast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendVersion2BroadcastInput() {
    return this._sendVersion2Broadcast;
  }

  // split_horizon - computed: true, optional: true, required: false
  private _splitHorizon?: string; 
  public get splitHorizon() {
    return this.getStringAttribute('split_horizon');
  }
  public set splitHorizon(value: string) {
    this._splitHorizon = value;
  }
  public resetSplitHorizon() {
    this._splitHorizon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitHorizonInput() {
    return this._splitHorizon;
  }

  // split_horizon_status - computed: true, optional: true, required: false
  private _splitHorizonStatus?: string; 
  public get splitHorizonStatus() {
    return this.getStringAttribute('split_horizon_status');
  }
  public set splitHorizonStatus(value: string) {
    this._splitHorizonStatus = value;
  }
  public resetSplitHorizonStatus() {
    this._splitHorizonStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitHorizonStatusInput() {
    return this._splitHorizonStatus;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_keychain: cdktf.listMapper(cdktf.stringToTerraform, false)(this._authKeychain),
      auth_mode: cdktf.stringToTerraform(this._authMode),
      auth_string: cdktf.listMapper(cdktf.stringToTerraform, false)(this._authString),
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      flags: cdktf.numberToTerraform(this._flags),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      receive_version: cdktf.listMapper(cdktf.stringToTerraform, false)(this._receiveVersion),
      send_version: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sendVersion),
      send_version2_broadcast: cdktf.stringToTerraform(this._sendVersion2Broadcast),
      split_horizon: cdktf.stringToTerraform(this._splitHorizon),
      split_horizon_status: cdktf.stringToTerraform(this._splitHorizonStatus),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_keychain: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._authKeychain),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      auth_mode: {
        value: cdktf.stringToHclTerraform(this._authMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_string: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._authString),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      flags: {
        value: cdktf.numberToHclTerraform(this._flags),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      receive_version: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._receiveVersion),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      send_version: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sendVersion),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      send_version2_broadcast: {
        value: cdktf.stringToHclTerraform(this._sendVersion2Broadcast),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      split_horizon: {
        value: cdktf.stringToHclTerraform(this._splitHorizon),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      split_horizon_status: {
        value: cdktf.stringToHclTerraform(this._splitHorizonStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
