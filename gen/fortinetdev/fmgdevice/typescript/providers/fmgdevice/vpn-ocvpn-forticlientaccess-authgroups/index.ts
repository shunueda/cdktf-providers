// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ocvpn_forticlientaccess_authgroups
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpnOcvpnForticlientaccessAuthgroupsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ocvpn_forticlientaccess_authgroups#auth_group VpnOcvpnForticlientaccessAuthgroups#auth_group}
  */
  readonly authGroup?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ocvpn_forticlientaccess_authgroups#device_name VpnOcvpnForticlientaccessAuthgroups#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ocvpn_forticlientaccess_authgroups#device_vdom VpnOcvpnForticlientaccessAuthgroups#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ocvpn_forticlientaccess_authgroups#id VpnOcvpnForticlientaccessAuthgroups#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ocvpn_forticlientaccess_authgroups#name VpnOcvpnForticlientaccessAuthgroups#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ocvpn_forticlientaccess_authgroups#overlays VpnOcvpnForticlientaccessAuthgroups#overlays}
  */
  readonly overlays?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ocvpn_forticlientaccess_authgroups fmgdevice_vpn_ocvpn_forticlientaccess_authgroups}
*/
export class VpnOcvpnForticlientaccessAuthgroups extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_vpn_ocvpn_forticlientaccess_authgroups";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpnOcvpnForticlientaccessAuthgroups resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpnOcvpnForticlientaccessAuthgroups to import
  * @param importFromId The id of the existing VpnOcvpnForticlientaccessAuthgroups that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ocvpn_forticlientaccess_authgroups#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpnOcvpnForticlientaccessAuthgroups to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_vpn_ocvpn_forticlientaccess_authgroups", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ocvpn_forticlientaccess_authgroups fmgdevice_vpn_ocvpn_forticlientaccess_authgroups} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpnOcvpnForticlientaccessAuthgroupsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: VpnOcvpnForticlientaccessAuthgroupsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_vpn_ocvpn_forticlientaccess_authgroups',
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
    this._authGroup = config.authGroup;
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._id = config.id;
    this._name = config.name;
    this._overlays = config.overlays;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_group - computed: true, optional: true, required: false
  private _authGroup?: string[]; 
  public get authGroup() {
    return cdktf.Fn.tolist(this.getListAttribute('auth_group'));
  }
  public set authGroup(value: string[]) {
    this._authGroup = value;
  }
  public resetAuthGroup() {
    this._authGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authGroupInput() {
    return this._authGroup;
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

  // overlays - computed: true, optional: true, required: false
  private _overlays?: string[]; 
  public get overlays() {
    return cdktf.Fn.tolist(this.getListAttribute('overlays'));
  }
  public set overlays(value: string[]) {
    this._overlays = value;
  }
  public resetOverlays() {
    this._overlays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overlaysInput() {
    return this._overlays;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_group: cdktf.listMapper(cdktf.stringToTerraform, false)(this._authGroup),
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      overlays: cdktf.listMapper(cdktf.stringToTerraform, false)(this._overlays),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_group: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._authGroup),
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
      overlays: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._overlays),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
