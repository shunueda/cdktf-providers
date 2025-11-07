// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_managedswitch_ipsourceguard_bindingentry
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwitchcontrollerManagedswitchIpsourceguardBindingentryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_managedswitch_ipsourceguard_bindingentry#device_name SwitchcontrollerManagedswitchIpsourceguardBindingentry#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_managedswitch_ipsourceguard_bindingentry#device_vdom SwitchcontrollerManagedswitchIpsourceguardBindingentry#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_managedswitch_ipsourceguard_bindingentry#entry_name SwitchcontrollerManagedswitchIpsourceguardBindingentry#entry_name}
  */
  readonly entryName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_managedswitch_ipsourceguard_bindingentry#id SwitchcontrollerManagedswitchIpsourceguardBindingentry#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_managedswitch_ipsourceguard_bindingentry#ip SwitchcontrollerManagedswitchIpsourceguardBindingentry#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_managedswitch_ipsourceguard_bindingentry#ip_source_guard SwitchcontrollerManagedswitchIpsourceguardBindingentry#ip_source_guard}
  */
  readonly ipSourceGuard: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_managedswitch_ipsourceguard_bindingentry#mac SwitchcontrollerManagedswitchIpsourceguardBindingentry#mac}
  */
  readonly mac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_managedswitch_ipsourceguard_bindingentry#managed_switch SwitchcontrollerManagedswitchIpsourceguardBindingentry#managed_switch}
  */
  readonly managedSwitch: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_managedswitch_ipsourceguard_bindingentry fmgdevice_switchcontroller_managedswitch_ipsourceguard_bindingentry}
*/
export class SwitchcontrollerManagedswitchIpsourceguardBindingentry extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_switchcontroller_managedswitch_ipsourceguard_bindingentry";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwitchcontrollerManagedswitchIpsourceguardBindingentry resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwitchcontrollerManagedswitchIpsourceguardBindingentry to import
  * @param importFromId The id of the existing SwitchcontrollerManagedswitchIpsourceguardBindingentry that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_managedswitch_ipsourceguard_bindingentry#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwitchcontrollerManagedswitchIpsourceguardBindingentry to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_switchcontroller_managedswitch_ipsourceguard_bindingentry", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_managedswitch_ipsourceguard_bindingentry fmgdevice_switchcontroller_managedswitch_ipsourceguard_bindingentry} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwitchcontrollerManagedswitchIpsourceguardBindingentryConfig
  */
  public constructor(scope: Construct, id: string, config: SwitchcontrollerManagedswitchIpsourceguardBindingentryConfig) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_switchcontroller_managedswitch_ipsourceguard_bindingentry',
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
    this._entryName = config.entryName;
    this._id = config.id;
    this._ip = config.ip;
    this._ipSourceGuard = config.ipSourceGuard;
    this._mac = config.mac;
    this._managedSwitch = config.managedSwitch;
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

  // entry_name - computed: false, optional: true, required: false
  private _entryName?: string; 
  public get entryName() {
    return this.getStringAttribute('entry_name');
  }
  public set entryName(value: string) {
    this._entryName = value;
  }
  public resetEntryName() {
    this._entryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryNameInput() {
    return this._entryName;
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

  // ip - computed: true, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // ip_source_guard - computed: false, optional: false, required: true
  private _ipSourceGuard?: string; 
  public get ipSourceGuard() {
    return this.getStringAttribute('ip_source_guard');
  }
  public set ipSourceGuard(value: string) {
    this._ipSourceGuard = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSourceGuardInput() {
    return this._ipSourceGuard;
  }

  // mac - computed: true, optional: true, required: false
  private _mac?: string; 
  public get mac() {
    return this.getStringAttribute('mac');
  }
  public set mac(value: string) {
    this._mac = value;
  }
  public resetMac() {
    this._mac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macInput() {
    return this._mac;
  }

  // managed_switch - computed: false, optional: false, required: true
  private _managedSwitch?: string; 
  public get managedSwitch() {
    return this.getStringAttribute('managed_switch');
  }
  public set managedSwitch(value: string) {
    this._managedSwitch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managedSwitchInput() {
    return this._managedSwitch;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      entry_name: cdktf.stringToTerraform(this._entryName),
      id: cdktf.stringToTerraform(this._id),
      ip: cdktf.stringToTerraform(this._ip),
      ip_source_guard: cdktf.stringToTerraform(this._ipSourceGuard),
      mac: cdktf.stringToTerraform(this._mac),
      managed_switch: cdktf.stringToTerraform(this._managedSwitch),
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
      entry_name: {
        value: cdktf.stringToHclTerraform(this._entryName),
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
      ip: {
        value: cdktf.stringToHclTerraform(this._ip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_source_guard: {
        value: cdktf.stringToHclTerraform(this._ipSourceGuard),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mac: {
        value: cdktf.stringToHclTerraform(this._mac),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      managed_switch: {
        value: cdktf.stringToHclTerraform(this._managedSwitch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
