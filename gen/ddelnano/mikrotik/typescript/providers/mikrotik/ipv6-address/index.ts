// https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/ipv6_address
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Ipv6AddressConfig extends cdktf.TerraformMetaArguments {
  /**
  * The IPv6 address and prefix length of the interface using slash notation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/ipv6_address#address Ipv6Address#address}
  */
  readonly address: string;
  /**
  * Whether to enable stateless address configuration. The prefix of that address is automatically advertised to hosts using ICMPv6 protocol. The option is set by default for addresses with prefix length 64. Default: `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/ipv6_address#advertise Ipv6Address#advertise}
  */
  readonly advertise?: boolean | cdktf.IResolvable;
  /**
  * The comment for the IPv6 address assignment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/ipv6_address#comment Ipv6Address#comment}
  */
  readonly comment?: string;
  /**
  * Whether to disable IPv6 address. Default: `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/ipv6_address#disabled Ipv6Address#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Whether to calculate EUI-64 address and use it as last 64 bits of the IPv6 address. Default: `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/ipv6_address#eui_64 Ipv6Address#eui_64}
  */
  readonly eui64?: boolean | cdktf.IResolvable;
  /**
  * Name of the pool from which prefix will be taken to construct IPv6 address taking last part of the address from address property. Default: `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/ipv6_address#from_pool Ipv6Address#from_pool}
  */
  readonly fromPool?: string;
  /**
  * The interface on which the IPv6 address is assigned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/ipv6_address#interface Ipv6Address#interface}
  */
  readonly interface: string;
  /**
  * If set indicates that address is anycast address and Duplicate Address Detection should not be performed. Default: `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/ipv6_address#no_dad Ipv6Address#no_dad}
  */
  readonly noDad?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/ipv6_address mikrotik_ipv6_address}
*/
export class Ipv6Address extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mikrotik_ipv6_address";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Ipv6Address resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ipv6Address to import
  * @param importFromId The id of the existing Ipv6Address that should be imported. Refer to the {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/ipv6_address#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ipv6Address to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mikrotik_ipv6_address", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/ipv6_address mikrotik_ipv6_address} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ipv6AddressConfig
  */
  public constructor(scope: Construct, id: string, config: Ipv6AddressConfig) {
    super(scope, id, {
      terraformResourceType: 'mikrotik_ipv6_address',
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
    this._advertise = config.advertise;
    this._comment = config.comment;
    this._disabled = config.disabled;
    this._eui64 = config.eui64;
    this._fromPool = config.fromPool;
    this._interface = config.interface;
    this._noDad = config.noDad;
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

  // advertise - computed: true, optional: true, required: false
  private _advertise?: boolean | cdktf.IResolvable; 
  public get advertise() {
    return this.getBooleanAttribute('advertise');
  }
  public set advertise(value: boolean | cdktf.IResolvable) {
    this._advertise = value;
  }
  public resetAdvertise() {
    this._advertise = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseInput() {
    return this._advertise;
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

  // eui_64 - computed: true, optional: true, required: false
  private _eui64?: boolean | cdktf.IResolvable; 
  public get eui64() {
    return this.getBooleanAttribute('eui_64');
  }
  public set eui64(value: boolean | cdktf.IResolvable) {
    this._eui64 = value;
  }
  public resetEui64() {
    this._eui64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eui64Input() {
    return this._eui64;
  }

  // from_pool - computed: true, optional: true, required: false
  private _fromPool?: string; 
  public get fromPool() {
    return this.getStringAttribute('from_pool');
  }
  public set fromPool(value: string) {
    this._fromPool = value;
  }
  public resetFromPool() {
    this._fromPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromPoolInput() {
    return this._fromPool;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // no_dad - computed: true, optional: true, required: false
  private _noDad?: boolean | cdktf.IResolvable; 
  public get noDad() {
    return this.getBooleanAttribute('no_dad');
  }
  public set noDad(value: boolean | cdktf.IResolvable) {
    this._noDad = value;
  }
  public resetNoDad() {
    this._noDad = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noDadInput() {
    return this._noDad;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address: cdktf.stringToTerraform(this._address),
      advertise: cdktf.booleanToTerraform(this._advertise),
      comment: cdktf.stringToTerraform(this._comment),
      disabled: cdktf.booleanToTerraform(this._disabled),
      eui_64: cdktf.booleanToTerraform(this._eui64),
      from_pool: cdktf.stringToTerraform(this._fromPool),
      interface: cdktf.stringToTerraform(this._interface),
      no_dad: cdktf.booleanToTerraform(this._noDad),
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
      advertise: {
        value: cdktf.booleanToHclTerraform(this._advertise),
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
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      eui_64: {
        value: cdktf.booleanToHclTerraform(this._eui64),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      from_pool: {
        value: cdktf.stringToHclTerraform(this._fromPool),
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
      no_dad: {
        value: cdktf.booleanToHclTerraform(this._noDad),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
