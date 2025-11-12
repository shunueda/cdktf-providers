// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_interface_ipv6
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemInterfaceIpv6AConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_interface_ipv6#id SystemInterfaceIpv6A#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_interface_ipv6#interface SystemInterfaceIpv6A#interface}
  */
  readonly interface: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_interface_ipv6#ip6_address SystemInterfaceIpv6A#ip6_address}
  */
  readonly ip6Address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_interface_ipv6#ip6_allowaccess SystemInterfaceIpv6A#ip6_allowaccess}
  */
  readonly ip6Allowaccess?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_interface_ipv6#ip6_autoconf SystemInterfaceIpv6A#ip6_autoconf}
  */
  readonly ip6Autoconf?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_interface_ipv6 fortimanager_system_interface_ipv6}
*/
export class SystemInterfaceIpv6A extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_system_interface_ipv6";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemInterfaceIpv6A resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemInterfaceIpv6A to import
  * @param importFromId The id of the existing SystemInterfaceIpv6A that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_interface_ipv6#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemInterfaceIpv6A to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_system_interface_ipv6", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_interface_ipv6 fortimanager_system_interface_ipv6} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemInterfaceIpv6AConfig
  */
  public constructor(scope: Construct, id: string, config: SystemInterfaceIpv6AConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_system_interface_ipv6',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0',
        providerVersionConstraint: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._interface = config.interface;
    this._ip6Address = config.ip6Address;
    this._ip6Allowaccess = config.ip6Allowaccess;
    this._ip6Autoconf = config.ip6Autoconf;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // ip6_address - computed: true, optional: true, required: false
  private _ip6Address?: string; 
  public get ip6Address() {
    return this.getStringAttribute('ip6_address');
  }
  public set ip6Address(value: string) {
    this._ip6Address = value;
  }
  public resetIp6Address() {
    this._ip6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6AddressInput() {
    return this._ip6Address;
  }

  // ip6_allowaccess - computed: true, optional: true, required: false
  private _ip6Allowaccess?: string[]; 
  public get ip6Allowaccess() {
    return cdktf.Fn.tolist(this.getListAttribute('ip6_allowaccess'));
  }
  public set ip6Allowaccess(value: string[]) {
    this._ip6Allowaccess = value;
  }
  public resetIp6Allowaccess() {
    this._ip6Allowaccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6AllowaccessInput() {
    return this._ip6Allowaccess;
  }

  // ip6_autoconf - computed: true, optional: true, required: false
  private _ip6Autoconf?: string; 
  public get ip6Autoconf() {
    return this.getStringAttribute('ip6_autoconf');
  }
  public set ip6Autoconf(value: string) {
    this._ip6Autoconf = value;
  }
  public resetIp6Autoconf() {
    this._ip6Autoconf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6AutoconfInput() {
    return this._ip6Autoconf;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      interface: cdktf.stringToTerraform(this._interface),
      ip6_address: cdktf.stringToTerraform(this._ip6Address),
      ip6_allowaccess: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ip6Allowaccess),
      ip6_autoconf: cdktf.stringToTerraform(this._ip6Autoconf),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      ip6_address: {
        value: cdktf.stringToHclTerraform(this._ip6Address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip6_allowaccess: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ip6Allowaccess),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ip6_autoconf: {
        value: cdktf.stringToHclTerraform(this._ip6Autoconf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
