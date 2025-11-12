// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_interface_ipv6_dhcp6iapdlist
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemInterfaceIpv6Dhcp6IapdlistConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_interface_ipv6_dhcp6iapdlist#device_name SystemInterfaceIpv6Dhcp6Iapdlist#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_interface_ipv6_dhcp6iapdlist#iaid SystemInterfaceIpv6Dhcp6Iapdlist#iaid}
  */
  readonly iaid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_interface_ipv6_dhcp6iapdlist#id SystemInterfaceIpv6Dhcp6Iapdlist#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_interface_ipv6_dhcp6iapdlist#interface SystemInterfaceIpv6Dhcp6Iapdlist#interface}
  */
  readonly interface: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_interface_ipv6_dhcp6iapdlist#prefix_hint SystemInterfaceIpv6Dhcp6Iapdlist#prefix_hint}
  */
  readonly prefixHint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_interface_ipv6_dhcp6iapdlist#prefix_hint_plt SystemInterfaceIpv6Dhcp6Iapdlist#prefix_hint_plt}
  */
  readonly prefixHintPlt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_interface_ipv6_dhcp6iapdlist#prefix_hint_vlt SystemInterfaceIpv6Dhcp6Iapdlist#prefix_hint_vlt}
  */
  readonly prefixHintVlt?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_interface_ipv6_dhcp6iapdlist fmgdevice_system_interface_ipv6_dhcp6iapdlist}
*/
export class SystemInterfaceIpv6Dhcp6Iapdlist extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_system_interface_ipv6_dhcp6iapdlist";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemInterfaceIpv6Dhcp6Iapdlist resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemInterfaceIpv6Dhcp6Iapdlist to import
  * @param importFromId The id of the existing SystemInterfaceIpv6Dhcp6Iapdlist that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_interface_ipv6_dhcp6iapdlist#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemInterfaceIpv6Dhcp6Iapdlist to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_system_interface_ipv6_dhcp6iapdlist", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_interface_ipv6_dhcp6iapdlist fmgdevice_system_interface_ipv6_dhcp6iapdlist} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemInterfaceIpv6Dhcp6IapdlistConfig
  */
  public constructor(scope: Construct, id: string, config: SystemInterfaceIpv6Dhcp6IapdlistConfig) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_system_interface_ipv6_dhcp6iapdlist',
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
    this._deviceName = config.deviceName;
    this._iaid = config.iaid;
    this._id = config.id;
    this._interface = config.interface;
    this._prefixHint = config.prefixHint;
    this._prefixHintPlt = config.prefixHintPlt;
    this._prefixHintVlt = config.prefixHintVlt;
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

  // iaid - computed: false, optional: true, required: false
  private _iaid?: number; 
  public get iaid() {
    return this.getNumberAttribute('iaid');
  }
  public set iaid(value: number) {
    this._iaid = value;
  }
  public resetIaid() {
    this._iaid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iaidInput() {
    return this._iaid;
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

  // interface - computed: false, optional: false, required: true
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // prefix_hint - computed: true, optional: true, required: false
  private _prefixHint?: string; 
  public get prefixHint() {
    return this.getStringAttribute('prefix_hint');
  }
  public set prefixHint(value: string) {
    this._prefixHint = value;
  }
  public resetPrefixHint() {
    this._prefixHint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixHintInput() {
    return this._prefixHint;
  }

  // prefix_hint_plt - computed: true, optional: true, required: false
  private _prefixHintPlt?: number; 
  public get prefixHintPlt() {
    return this.getNumberAttribute('prefix_hint_plt');
  }
  public set prefixHintPlt(value: number) {
    this._prefixHintPlt = value;
  }
  public resetPrefixHintPlt() {
    this._prefixHintPlt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixHintPltInput() {
    return this._prefixHintPlt;
  }

  // prefix_hint_vlt - computed: true, optional: true, required: false
  private _prefixHintVlt?: number; 
  public get prefixHintVlt() {
    return this.getNumberAttribute('prefix_hint_vlt');
  }
  public set prefixHintVlt(value: number) {
    this._prefixHintVlt = value;
  }
  public resetPrefixHintVlt() {
    this._prefixHintVlt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixHintVltInput() {
    return this._prefixHintVlt;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_name: cdktf.stringToTerraform(this._deviceName),
      iaid: cdktf.numberToTerraform(this._iaid),
      id: cdktf.stringToTerraform(this._id),
      interface: cdktf.stringToTerraform(this._interface),
      prefix_hint: cdktf.stringToTerraform(this._prefixHint),
      prefix_hint_plt: cdktf.numberToTerraform(this._prefixHintPlt),
      prefix_hint_vlt: cdktf.numberToTerraform(this._prefixHintVlt),
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
      iaid: {
        value: cdktf.numberToHclTerraform(this._iaid),
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
      interface: {
        value: cdktf.stringToHclTerraform(this._interface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prefix_hint: {
        value: cdktf.stringToHclTerraform(this._prefixHint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prefix_hint_plt: {
        value: cdktf.numberToHclTerraform(this._prefixHintPlt),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      prefix_hint_vlt: {
        value: cdktf.numberToHclTerraform(this._prefixHintVlt),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
