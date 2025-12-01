// https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ip_dhcp_server_option_matcher
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpDhcpServerOptionMatcherConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ip_dhcp_server_option_matcher#___path___ IpDhcpServerOptionMatcher#___path___}
  */
  readonly path?: string;
  /**
  * IP pool, from which to take IP addresses for the clients. If set to static-only, then only the clients that have a static lease (added in lease submenu) will be allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ip_dhcp_server_option_matcher#address_pool IpDhcpServerOptionMatcher#address_pool}
  */
  readonly addressPool?: string;
  /**
  * DHCP option code. All codes are available at http://www.iana.org/assignments/bootp-dhcp-parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ip_dhcp_server_option_matcher#code IpDhcpServerOptionMatcher#code}
  */
  readonly code: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ip_dhcp_server_option_matcher#comment IpDhcpServerOptionMatcher#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ip_dhcp_server_option_matcher#disabled IpDhcpServerOptionMatcher#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ip_dhcp_server_option_matcher#id IpDhcpServerOptionMatcher#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Matching method:
  * 
  * - exact: option should match exactly to value
  * - substring: value can match anywhere in the option string; at the start, middle, or end.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ip_dhcp_server_option_matcher#matching_type IpDhcpServerOptionMatcher#matching_type}
  */
  readonly matchingType?: string;
  /**
  * Changing the name of this resource will force it to be recreated.
  * 	> The links of other configuration properties to this resource may be lost!
  * 	> Changing the name of the resource outside of a Terraform will result in a loss of control integrity for that resource!
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ip_dhcp_server_option_matcher#name IpDhcpServerOptionMatcher#name}
  */
  readonly name: string;
  /**
  * A custom set of DHCP options defined in the Option Sets menu.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ip_dhcp_server_option_matcher#option_set IpDhcpServerOptionMatcher#option_set}
  */
  readonly optionSet?: string;
  /**
  * Server name which serves option matcher.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ip_dhcp_server_option_matcher#server IpDhcpServerOptionMatcher#server}
  */
  readonly server?: string;
  /**
  * A value that will be searched for in option.
  * Available data types for value are:
  * 
  * - string
  * - HEX
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ip_dhcp_server_option_matcher#value IpDhcpServerOptionMatcher#value}
  */
  readonly value?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ip_dhcp_server_option_matcher routeros_ip_dhcp_server_option_matcher}
*/
export class IpDhcpServerOptionMatcher extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_ip_dhcp_server_option_matcher";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpDhcpServerOptionMatcher resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpDhcpServerOptionMatcher to import
  * @param importFromId The id of the existing IpDhcpServerOptionMatcher that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ip_dhcp_server_option_matcher#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpDhcpServerOptionMatcher to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_ip_dhcp_server_option_matcher", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ip_dhcp_server_option_matcher routeros_ip_dhcp_server_option_matcher} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpDhcpServerOptionMatcherConfig
  */
  public constructor(scope: Construct, id: string, config: IpDhcpServerOptionMatcherConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_ip_dhcp_server_option_matcher',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.95.0',
        providerVersionConstraint: '1.95.0'
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
    this._addressPool = config.addressPool;
    this._code = config.code;
    this._comment = config.comment;
    this._disabled = config.disabled;
    this._id = config.id;
    this._matchingType = config.matchingType;
    this._name = config.name;
    this._optionSet = config.optionSet;
    this._server = config.server;
    this._value = config.value;
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

  // address_pool - computed: false, optional: true, required: false
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

  // code - computed: false, optional: false, required: true
  private _code?: number; 
  public get code() {
    return this.getNumberAttribute('code');
  }
  public set code(value: number) {
    this._code = value;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
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

  // matching_type - computed: false, optional: true, required: false
  private _matchingType?: string; 
  public get matchingType() {
    return this.getStringAttribute('matching_type');
  }
  public set matchingType(value: string) {
    this._matchingType = value;
  }
  public resetMatchingType() {
    this._matchingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchingTypeInput() {
    return this._matchingType;
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

  // option_set - computed: false, optional: true, required: false
  private _optionSet?: string; 
  public get optionSet() {
    return this.getStringAttribute('option_set');
  }
  public set optionSet(value: string) {
    this._optionSet = value;
  }
  public resetOptionSet() {
    this._optionSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionSetInput() {
    return this._optionSet;
  }

  // server - computed: false, optional: true, required: false
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      address_pool: cdktf.stringToTerraform(this._addressPool),
      code: cdktf.numberToTerraform(this._code),
      comment: cdktf.stringToTerraform(this._comment),
      disabled: cdktf.booleanToTerraform(this._disabled),
      id: cdktf.stringToTerraform(this._id),
      matching_type: cdktf.stringToTerraform(this._matchingType),
      name: cdktf.stringToTerraform(this._name),
      option_set: cdktf.stringToTerraform(this._optionSet),
      server: cdktf.stringToTerraform(this._server),
      value: cdktf.stringToTerraform(this._value),
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
      address_pool: {
        value: cdktf.stringToHclTerraform(this._addressPool),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      code: {
        value: cdktf.numberToHclTerraform(this._code),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      matching_type: {
        value: cdktf.stringToHclTerraform(this._matchingType),
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
      option_set: {
        value: cdktf.stringToHclTerraform(this._optionSet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server: {
        value: cdktf.stringToHclTerraform(this._server),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      value: {
        value: cdktf.stringToHclTerraform(this._value),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
