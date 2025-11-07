// https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/dhcp_lease
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DhcpLeaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * The IP address of the DHCP lease to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/dhcp_lease#address DhcpLease#address}
  */
  readonly address: string;
  /**
  * Whether to block access for this DHCP client (true|false). Default: `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/dhcp_lease#blocked DhcpLease#blocked}
  */
  readonly blocked?: boolean | cdktf.IResolvable;
  /**
  * The comment of the DHCP lease to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/dhcp_lease#comment DhcpLease#comment}
  */
  readonly comment?: string;
  /**
  * The MAC addreess of the DHCP lease to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/dhcp_lease#macaddress DhcpLease#macaddress}
  */
  readonly macaddress: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/dhcp_lease mikrotik_dhcp_lease}
*/
export class DhcpLease extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mikrotik_dhcp_lease";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DhcpLease resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DhcpLease to import
  * @param importFromId The id of the existing DhcpLease that should be imported. Refer to the {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/dhcp_lease#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DhcpLease to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mikrotik_dhcp_lease", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/dhcp_lease mikrotik_dhcp_lease} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DhcpLeaseConfig
  */
  public constructor(scope: Construct, id: string, config: DhcpLeaseConfig) {
    super(scope, id, {
      terraformResourceType: 'mikrotik_dhcp_lease',
      terraformGeneratorMetadata: {
        providerName: 'mikrotik',
        providerVersion: '0.16.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._address = config.address;
    this._blocked = config.blocked;
    this._comment = config.comment;
    this._macaddress = config.macaddress;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // blocked - computed: true, optional: true, required: false
  private _blocked?: boolean | cdktf.IResolvable; 
  public get blocked() {
    return this.getBooleanAttribute('blocked');
  }
  public set blocked(value: boolean | cdktf.IResolvable) {
    this._blocked = value;
  }
  public resetBlocked() {
    this._blocked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockedInput() {
    return this._blocked;
  }

  // comment - computed: true, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // dynamic - computed: true, optional: false, required: false
  public get dynamic() {
    return this.getBooleanAttribute('dynamic');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // macaddress - computed: false, optional: false, required: true
  private _macaddress?: string; 
  public get macaddress() {
    return this.getStringAttribute('macaddress');
  }
  public set macaddress(value: string) {
    this._macaddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get macaddressInput() {
    return this._macaddress;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address: cdktf.stringToTerraform(this._address),
      blocked: cdktf.booleanToTerraform(this._blocked),
      comment: cdktf.stringToTerraform(this._comment),
      macaddress: cdktf.stringToTerraform(this._macaddress),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address: {
        value: cdktf.stringToHclTerraform(this._address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      blocked: {
        value: cdktf.booleanToHclTerraform(this._blocked),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      macaddress: {
        value: cdktf.stringToHclTerraform(this._macaddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
