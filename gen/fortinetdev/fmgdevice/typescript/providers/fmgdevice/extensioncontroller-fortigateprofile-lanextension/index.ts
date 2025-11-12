// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extensioncontroller_fortigateprofile_lanextension
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ExtensioncontrollerFortigateprofileLanextensionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extensioncontroller_fortigateprofile_lanextension#backhaul_interface ExtensioncontrollerFortigateprofileLanextension#backhaul_interface}
  */
  readonly backhaulInterface?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extensioncontroller_fortigateprofile_lanextension#backhaul_ip ExtensioncontrollerFortigateprofileLanextension#backhaul_ip}
  */
  readonly backhaulIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extensioncontroller_fortigateprofile_lanextension#device_name ExtensioncontrollerFortigateprofileLanextension#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extensioncontroller_fortigateprofile_lanextension#device_vdom ExtensioncontrollerFortigateprofileLanextension#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extensioncontroller_fortigateprofile_lanextension#fortigate_profile ExtensioncontrollerFortigateprofileLanextension#fortigate_profile}
  */
  readonly fortigateProfile: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extensioncontroller_fortigateprofile_lanextension#id ExtensioncontrollerFortigateprofileLanextension#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extensioncontroller_fortigateprofile_lanextension#ipsec_tunnel ExtensioncontrollerFortigateprofileLanextension#ipsec_tunnel}
  */
  readonly ipsecTunnel?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extensioncontroller_fortigateprofile_lanextension fmgdevice_extensioncontroller_fortigateprofile_lanextension}
*/
export class ExtensioncontrollerFortigateprofileLanextension extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_extensioncontroller_fortigateprofile_lanextension";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ExtensioncontrollerFortigateprofileLanextension resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ExtensioncontrollerFortigateprofileLanextension to import
  * @param importFromId The id of the existing ExtensioncontrollerFortigateprofileLanextension that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extensioncontroller_fortigateprofile_lanextension#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ExtensioncontrollerFortigateprofileLanextension to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_extensioncontroller_fortigateprofile_lanextension", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extensioncontroller_fortigateprofile_lanextension fmgdevice_extensioncontroller_fortigateprofile_lanextension} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ExtensioncontrollerFortigateprofileLanextensionConfig
  */
  public constructor(scope: Construct, id: string, config: ExtensioncontrollerFortigateprofileLanextensionConfig) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_extensioncontroller_fortigateprofile_lanextension',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1',
        providerVersionConstraint: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._backhaulInterface = config.backhaulInterface;
    this._backhaulIp = config.backhaulIp;
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._fortigateProfile = config.fortigateProfile;
    this._id = config.id;
    this._ipsecTunnel = config.ipsecTunnel;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backhaul_interface - computed: true, optional: true, required: false
  private _backhaulInterface?: string[]; 
  public get backhaulInterface() {
    return cdktf.Fn.tolist(this.getListAttribute('backhaul_interface'));
  }
  public set backhaulInterface(value: string[]) {
    this._backhaulInterface = value;
  }
  public resetBackhaulInterface() {
    this._backhaulInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backhaulInterfaceInput() {
    return this._backhaulInterface;
  }

  // backhaul_ip - computed: false, optional: true, required: false
  private _backhaulIp?: string; 
  public get backhaulIp() {
    return this.getStringAttribute('backhaul_ip');
  }
  public set backhaulIp(value: string) {
    this._backhaulIp = value;
  }
  public resetBackhaulIp() {
    this._backhaulIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backhaulIpInput() {
    return this._backhaulIp;
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

  // fortigate_profile - computed: false, optional: false, required: true
  private _fortigateProfile?: string; 
  public get fortigateProfile() {
    return this.getStringAttribute('fortigate_profile');
  }
  public set fortigateProfile(value: string) {
    this._fortigateProfile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fortigateProfileInput() {
    return this._fortigateProfile;
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

  // ipsec_tunnel - computed: false, optional: true, required: false
  private _ipsecTunnel?: string; 
  public get ipsecTunnel() {
    return this.getStringAttribute('ipsec_tunnel');
  }
  public set ipsecTunnel(value: string) {
    this._ipsecTunnel = value;
  }
  public resetIpsecTunnel() {
    this._ipsecTunnel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecTunnelInput() {
    return this._ipsecTunnel;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backhaul_interface: cdktf.listMapper(cdktf.stringToTerraform, false)(this._backhaulInterface),
      backhaul_ip: cdktf.stringToTerraform(this._backhaulIp),
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      fortigate_profile: cdktf.stringToTerraform(this._fortigateProfile),
      id: cdktf.stringToTerraform(this._id),
      ipsec_tunnel: cdktf.stringToTerraform(this._ipsecTunnel),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backhaul_interface: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._backhaulInterface),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      backhaul_ip: {
        value: cdktf.stringToHclTerraform(this._backhaulIp),
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
      fortigate_profile: {
        value: cdktf.stringToHclTerraform(this._fortigateProfile),
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
      ipsec_tunnel: {
        value: cdktf.stringToHclTerraform(this._ipsecTunnel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
