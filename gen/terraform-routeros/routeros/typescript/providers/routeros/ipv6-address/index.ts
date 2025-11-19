// https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ipv6_address
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Ipv6AddressConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ipv6_address#___path___ Ipv6Address#___path___}
  */
  readonly path?: string;
  /**
  * IPv6 address. Using the eui_64 and from_pool options can transform the original address! [See docs](https://wiki.mikrotik.com/wiki/Manual:IPv6/Address#Properties)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ipv6_address#address Ipv6Address#address}
  */
  readonly address?: string;
  /**
  * Whether to enable stateless address configuration. The prefix of that address is automatically advertised to hosts using ICMPv6 protocol. The option is set by default for addresses with prefix length 64.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ipv6_address#advertise Ipv6Address#advertise}
  */
  readonly advertise?: boolean | cdktf.IResolvable;
  /**
  * If newly created address is manual link-local address this setting allows to override dynamically created IPv6 link-local address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ipv6_address#auto_link_local Ipv6Address#auto_link_local}
  */
  readonly autoLinkLocal?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ipv6_address#comment Ipv6Address#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ipv6_address#disabled Ipv6Address#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Whether to calculate EUI-64 address and use it as last 64 bits of the IPv6 address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ipv6_address#eui_64 Ipv6Address#eui_64}
  */
  readonly eui64?: boolean | cdktf.IResolvable;
  /**
  * Name of the pool from which prefix will be taken to construct IPv6 address taking last part of the address from address property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ipv6_address#from_pool Ipv6Address#from_pool}
  */
  readonly fromPool?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ipv6_address#id Ipv6Address#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ipv6_address#interface Ipv6Address#interface}
  */
  readonly interface: string;
  /**
  * If set indicates that address is anycast address and Duplicate Address Detection should not be performed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ipv6_address#no_dad Ipv6Address#no_dad}
  */
  readonly noDad?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ipv6_address routeros_ipv6_address}
*/
export class Ipv6Address extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_ipv6_address";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Ipv6Address resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ipv6Address to import
  * @param importFromId The id of the existing Ipv6Address that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ipv6_address#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ipv6Address to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_ipv6_address", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ipv6_address routeros_ipv6_address} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ipv6AddressConfig
  */
  public constructor(scope: Construct, id: string, config: Ipv6AddressConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_ipv6_address',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.92.1',
        providerVersionConstraint: '1.92.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._path = config.path;
    this._address = config.address;
    this._advertise = config.advertise;
    this._autoLinkLocal = config.autoLinkLocal;
    this._comment = config.comment;
    this._disabled = config.disabled;
    this._eui64 = config.eui64;
    this._fromPool = config.fromPool;
    this._id = config.id;
    this._interface = config.interface;
    this._noDad = config.noDad;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ___path___ - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('___path___');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // actual_interface - computed: true, optional: false, required: false
  public get actualInterface() {
    return this.getStringAttribute('actual_interface');
  }

  // address - computed: true, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // advertise - computed: false, optional: true, required: false
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

  // auto_link_local - computed: false, optional: true, required: false
  private _autoLinkLocal?: boolean | cdktf.IResolvable; 
  public get autoLinkLocal() {
    return this.getBooleanAttribute('auto_link_local');
  }
  public set autoLinkLocal(value: boolean | cdktf.IResolvable) {
    this._autoLinkLocal = value;
  }
  public resetAutoLinkLocal() {
    this._autoLinkLocal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoLinkLocalInput() {
    return this._autoLinkLocal;
  }

  // comment - computed: false, optional: true, required: false
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

  // deprecated - computed: true, optional: false, required: false
  public get deprecated() {
    return this.getBooleanAttribute('deprecated');
  }

  // disabled - computed: false, optional: true, required: false
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

  // dynamic - computed: true, optional: false, required: false
  public get dynamic() {
    return this.getBooleanAttribute('dynamic');
  }

  // eui_64 - computed: false, optional: true, required: false
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

  // from_pool - computed: false, optional: true, required: false
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

  // global - computed: true, optional: false, required: false
  public get global() {
    return this.getBooleanAttribute('global');
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

  // invalid - computed: true, optional: false, required: false
  public get invalid() {
    return this.getBooleanAttribute('invalid');
  }

  // link_local - computed: true, optional: false, required: false
  public get linkLocal() {
    return this.getBooleanAttribute('link_local');
  }

  // no_dad - computed: false, optional: true, required: false
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

  // slave - computed: true, optional: false, required: false
  public get slave() {
    return this.getBooleanAttribute('slave');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      address: cdktf.stringToTerraform(this._address),
      advertise: cdktf.booleanToTerraform(this._advertise),
      auto_link_local: cdktf.booleanToTerraform(this._autoLinkLocal),
      comment: cdktf.stringToTerraform(this._comment),
      disabled: cdktf.booleanToTerraform(this._disabled),
      eui_64: cdktf.booleanToTerraform(this._eui64),
      from_pool: cdktf.stringToTerraform(this._fromPool),
      id: cdktf.stringToTerraform(this._id),
      interface: cdktf.stringToTerraform(this._interface),
      no_dad: cdktf.booleanToTerraform(this._noDad),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ___path___: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      auto_link_local: {
        value: cdktf.booleanToHclTerraform(this._autoLinkLocal),
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
