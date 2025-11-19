// https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ipv6_nd_prefix
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Ipv6NdPrefixConfig extends cdktf.TerraformMetaArguments {
  /**
  * If this option is specified, this prefix will be combined with the IPv4 address of the interface name to produce a valid 6to4 prefix. The first 16 bits of this prefix will be replaced by 2002 and the next 32 bits of this prefix will be replaced by the IPv4 address assigned to the interface name at configuration time. The remaining 80 bits of the prefix (including the SLA ID) will be advertised as specified in the configuration file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ipv6_nd_prefix#6to4_interface Ipv6NdPrefix#6to4_interface}
  */
  readonly 6To4Interface?: string;
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ipv6_nd_prefix#___path___ Ipv6NdPrefix#___path___}
  */
  readonly path?: string;
  /**
  * When set, indicates that this prefix can be used for autonomous address configuration. Otherwise, prefix information is silently ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ipv6_nd_prefix#autonomous Ipv6NdPrefix#autonomous}
  */
  readonly autonomous?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ipv6_nd_prefix#comment Ipv6NdPrefix#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ipv6_nd_prefix#disabled Ipv6NdPrefix#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ipv6_nd_prefix#id Ipv6NdPrefix#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Interface name on which stateless auto-configuration will be running.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ipv6_nd_prefix#interface Ipv6NdPrefix#interface}
  */
  readonly interface: string;
  /**
  * When set, indicates that this prefix can be used for on-link determination. When not set the advertisement makes no statement about the on-link or off-link properties of the prefix. For instance, the prefix might be used for address configuration with some of the addresses belonging to the prefix being on-link and others being off-link.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ipv6_nd_prefix#on_link Ipv6NdPrefix#on_link}
  */
  readonly onLink?: boolean | cdktf.IResolvable;
  /**
  * Timeframe (relative to the time the packet is sent) after which generated address becomes `deprecated`. Deprecated is used only for already existing connections and is usable until valid lifetime expires.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ipv6_nd_prefix#preferred_lifetime Ipv6NdPrefix#preferred_lifetime}
  */
  readonly preferredLifetime?: string;
  /**
  * A prefix from which stateless address autoconfiguration generates the valid address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ipv6_nd_prefix#prefix Ipv6NdPrefix#prefix}
  */
  readonly prefix: string;
  /**
  * The length of time (relative to the time the packet is sent) an address remains in the valid state. The valid lifetime must be greater than or equal to the preferred lifetime.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ipv6_nd_prefix#valid_lifetime Ipv6NdPrefix#valid_lifetime}
  */
  readonly validLifetime?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ipv6_nd_prefix routeros_ipv6_nd_prefix}
*/
export class Ipv6NdPrefix extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_ipv6_nd_prefix";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Ipv6NdPrefix resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ipv6NdPrefix to import
  * @param importFromId The id of the existing Ipv6NdPrefix that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ipv6_nd_prefix#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ipv6NdPrefix to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_ipv6_nd_prefix", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ipv6_nd_prefix routeros_ipv6_nd_prefix} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ipv6NdPrefixConfig
  */
  public constructor(scope: Construct, id: string, config: Ipv6NdPrefixConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_ipv6_nd_prefix',
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
    this._6To4Interface = config.6To4Interface;
    this._path = config.path;
    this._autonomous = config.autonomous;
    this._comment = config.comment;
    this._disabled = config.disabled;
    this._id = config.id;
    this._interface = config.interface;
    this._onLink = config.onLink;
    this._preferredLifetime = config.preferredLifetime;
    this._prefix = config.prefix;
    this._validLifetime = config.validLifetime;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // 6to4_interface - computed: false, optional: true, required: false
  private _6To4Interface?: string; 
  public get 6To4Interface() {
    return this.getStringAttribute('6to4_interface');
  }
  public set 6To4Interface(value: string) {
    this._6To4Interface = value;
  }
  public reset6To4Interface() {
    this._6To4Interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get 6To4InterfaceInput() {
    return this._6To4Interface;
  }

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

  // autonomous - computed: false, optional: true, required: false
  private _autonomous?: boolean | cdktf.IResolvable; 
  public get autonomous() {
    return this.getBooleanAttribute('autonomous');
  }
  public set autonomous(value: boolean | cdktf.IResolvable) {
    this._autonomous = value;
  }
  public resetAutonomous() {
    this._autonomous = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autonomousInput() {
    return this._autonomous;
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

  // on_link - computed: false, optional: true, required: false
  private _onLink?: boolean | cdktf.IResolvable; 
  public get onLink() {
    return this.getBooleanAttribute('on_link');
  }
  public set onLink(value: boolean | cdktf.IResolvable) {
    this._onLink = value;
  }
  public resetOnLink() {
    this._onLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onLinkInput() {
    return this._onLink;
  }

  // preferred_lifetime - computed: false, optional: true, required: false
  private _preferredLifetime?: string; 
  public get preferredLifetime() {
    return this.getStringAttribute('preferred_lifetime');
  }
  public set preferredLifetime(value: string) {
    this._preferredLifetime = value;
  }
  public resetPreferredLifetime() {
    this._preferredLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredLifetimeInput() {
    return this._preferredLifetime;
  }

  // prefix - computed: false, optional: false, required: true
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // valid_lifetime - computed: false, optional: true, required: false
  private _validLifetime?: string; 
  public get validLifetime() {
    return this.getStringAttribute('valid_lifetime');
  }
  public set validLifetime(value: string) {
    this._validLifetime = value;
  }
  public resetValidLifetime() {
    this._validLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validLifetimeInput() {
    return this._validLifetime;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      6to4_interface: cdktf.stringToTerraform(this._6To4Interface),
      ___path___: cdktf.stringToTerraform(this._path),
      autonomous: cdktf.booleanToTerraform(this._autonomous),
      comment: cdktf.stringToTerraform(this._comment),
      disabled: cdktf.booleanToTerraform(this._disabled),
      id: cdktf.stringToTerraform(this._id),
      interface: cdktf.stringToTerraform(this._interface),
      on_link: cdktf.booleanToTerraform(this._onLink),
      preferred_lifetime: cdktf.stringToTerraform(this._preferredLifetime),
      prefix: cdktf.stringToTerraform(this._prefix),
      valid_lifetime: cdktf.stringToTerraform(this._validLifetime),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      6to4_interface: {
        value: cdktf.stringToHclTerraform(this._6To4Interface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ___path___: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      autonomous: {
        value: cdktf.booleanToHclTerraform(this._autonomous),
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
      on_link: {
        value: cdktf.booleanToHclTerraform(this._onLink),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      preferred_lifetime: {
        value: cdktf.stringToHclTerraform(this._preferredLifetime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prefix: {
        value: cdktf.stringToHclTerraform(this._prefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      valid_lifetime: {
        value: cdktf.stringToHclTerraform(this._validLifetime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
