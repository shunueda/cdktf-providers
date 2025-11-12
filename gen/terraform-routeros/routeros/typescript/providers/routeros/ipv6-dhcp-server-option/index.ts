// https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/ipv6_dhcp_server_option
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Ipv6DhcpServerOptionConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/ipv6_dhcp_server_option#___path___ Ipv6DhcpServerOption#___path___}
  */
  readonly path?: string;
  /**
  * Dhcp option [code](https://www.ipamworldwide.com/ipam/isc-dhcpv6-options.html).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/ipv6_dhcp_server_option#code Ipv6DhcpServerOption#code}
  */
  readonly code: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/ipv6_dhcp_server_option#comment Ipv6DhcpServerOption#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/ipv6_dhcp_server_option#id Ipv6DhcpServerOption#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Descriptive name of the option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/ipv6_dhcp_server_option#name Ipv6DhcpServerOption#name}
  */
  readonly name: string;
  /**
  * Parameter's value. Available data types for options are:
  *     - `'test'` -> ASCII to Hex 0x74657374
  *     - `'10.10.10.10'` -> Unicode IP to Hex 0x0a0a0a0a
  *     - `s'10.10.10.10'` -> ASCII to Hex 0x31302e31302e31302e3130
  *     - `s'160'` -> ASCII to Hex 0x313630
  *     - `'10'` -> Decimal to Hex 0x0a
  *     - `0x0a0a` -> No conversion
  *     - `$(VARIABLE)` -> hardcoded values
  * 
  * 	RouterOS has predefined variables that can be used:
  *     - `HOSTNAME` - client hostname
  *     - `RADIUS_MT_STR1` - from radius MT attr nr. `24`
  *     - `RADIUS_MT_STR2` - from radius MT attr nr. `25`
  *     - `REMOTE_ID` - agent remote-id
  *     - `NETWORK_GATEWAY - the first gateway from `/ip dhcp-server network`, note that this option won't work if used from lease.
  * 
  * Now it is also possible to combine data types into one, for example: `0x01'vards'$(HOSTNAME)`For example if HOSTNAME is 'kvm', then raw value will be 0x0176617264736b766d.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/ipv6_dhcp_server_option#value Ipv6DhcpServerOption#value}
  */
  readonly value?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/ipv6_dhcp_server_option routeros_ipv6_dhcp_server_option}
*/
export class Ipv6DhcpServerOption extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_ipv6_dhcp_server_option";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Ipv6DhcpServerOption resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ipv6DhcpServerOption to import
  * @param importFromId The id of the existing Ipv6DhcpServerOption that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/ipv6_dhcp_server_option#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ipv6DhcpServerOption to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_ipv6_dhcp_server_option", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/ipv6_dhcp_server_option routeros_ipv6_dhcp_server_option} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ipv6DhcpServerOptionConfig
  */
  public constructor(scope: Construct, id: string, config: Ipv6DhcpServerOptionConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_ipv6_dhcp_server_option',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.91.0',
        providerVersionConstraint: '1.91.0'
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
    this._code = config.code;
    this._comment = config.comment;
    this._id = config.id;
    this._name = config.name;
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

  // raw_value - computed: true, optional: false, required: false
  public get rawValue() {
    return this.getStringAttribute('raw_value');
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
      code: cdktf.numberToTerraform(this._code),
      comment: cdktf.stringToTerraform(this._comment),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
