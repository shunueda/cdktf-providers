// https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/dhcp_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DhcpServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether to add dynamic ARP entry. If set to no either ARP mode should be enabled on that interface or static ARP entries should be administratively defined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/dhcp_server#add_arp DhcpServer#add_arp}
  */
  readonly addArp?: boolean | cdktf.IResolvable;
  /**
  * IP pool, from which to take IP addresses for the clients. If set to static-only, then only the clients that have a static lease (added in lease submenu) will be allowed. Default: `static-only`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/dhcp_server#address_pool DhcpServer#address_pool}
  */
  readonly addressPool?: string;
  /**
  * Option changes the way how server responds to DHCP requests. Default: `yes`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/dhcp_server#authoritative DhcpServer#authoritative}
  */
  readonly authoritative?: string;
  /**
  * Disable this DHCP server instance. Default: `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/dhcp_server#disabled DhcpServer#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Interface on which server will be running. Default: `*0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/dhcp_server#interface DhcpServer#interface}
  */
  readonly interface?: string;
  /**
  * Script that will be executed after lease is assigned or de-assigned. Internal "global" variables that can be used in the script.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/dhcp_server#lease_script DhcpServer#lease_script}
  */
  readonly leaseScript?: string;
  /**
  * Reference name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/dhcp_server#name DhcpServer#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/dhcp_server mikrotik_dhcp_server}
*/
export class DhcpServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mikrotik_dhcp_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DhcpServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DhcpServer to import
  * @param importFromId The id of the existing DhcpServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/dhcp_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DhcpServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mikrotik_dhcp_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/dhcp_server mikrotik_dhcp_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DhcpServerConfig
  */
  public constructor(scope: Construct, id: string, config: DhcpServerConfig) {
    super(scope, id, {
      terraformResourceType: 'mikrotik_dhcp_server',
      terraformGeneratorMetadata: {
        providerName: 'mikrotik',
        providerVersion: '0.16.1',
        providerVersionConstraint: '0.16.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addArp = config.addArp;
    this._addressPool = config.addressPool;
    this._authoritative = config.authoritative;
    this._disabled = config.disabled;
    this._interface = config.interface;
    this._leaseScript = config.leaseScript;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // add_arp - computed: true, optional: true, required: false
  private _addArp?: boolean | cdktf.IResolvable; 
  public get addArp() {
    return this.getBooleanAttribute('add_arp');
  }
  public set addArp(value: boolean | cdktf.IResolvable) {
    this._addArp = value;
  }
  public resetAddArp() {
    this._addArp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addArpInput() {
    return this._addArp;
  }

  // address_pool - computed: true, optional: true, required: false
  private _addressPool?: string; 
  public get addressPool() {
    return this.getStringAttribute('address_pool');
  }
  public set addressPool(value: string) {
    this._addressPool = value;
  }
  public resetAddressPool() {
    this._addressPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressPoolInput() {
    return this._addressPool;
  }

  // authoritative - computed: true, optional: true, required: false
  private _authoritative?: string; 
  public get authoritative() {
    return this.getStringAttribute('authoritative');
  }
  public set authoritative(value: string) {
    this._authoritative = value;
  }
  public resetAuthoritative() {
    this._authoritative = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authoritativeInput() {
    return this._authoritative;
  }

  // disabled - computed: true, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interface - computed: true, optional: true, required: false
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // lease_script - computed: true, optional: true, required: false
  private _leaseScript?: string; 
  public get leaseScript() {
    return this.getStringAttribute('lease_script');
  }
  public set leaseScript(value: string) {
    this._leaseScript = value;
  }
  public resetLeaseScript() {
    this._leaseScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leaseScriptInput() {
    return this._leaseScript;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      add_arp: cdktf.booleanToTerraform(this._addArp),
      address_pool: cdktf.stringToTerraform(this._addressPool),
      authoritative: cdktf.stringToTerraform(this._authoritative),
      disabled: cdktf.booleanToTerraform(this._disabled),
      interface: cdktf.stringToTerraform(this._interface),
      lease_script: cdktf.stringToTerraform(this._leaseScript),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      add_arp: {
        value: cdktf.booleanToHclTerraform(this._addArp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      address_pool: {
        value: cdktf.stringToHclTerraform(this._addressPool),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authoritative: {
        value: cdktf.stringToHclTerraform(this._authoritative),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      interface: {
        value: cdktf.stringToHclTerraform(this._interface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lease_script: {
        value: cdktf.stringToHclTerraform(this._leaseScript),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
