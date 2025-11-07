// https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_option_code
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DhcpOptionCodeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Indicates whether the option value is an array of the type or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_option_code#array DhcpOptionCode#array}
  */
  readonly array?: boolean | cdktf.IResolvable;
  /**
  * The option code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_option_code#code DhcpOptionCode#code}
  */
  readonly code: number;
  /**
  * The description for the option code. May contain 0 to 1024 characters. Can include UTF-8.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_option_code#comment DhcpOptionCode#comment}
  */
  readonly comment?: string;
  /**
  * The name of the option code. Must contain 1 to 256 characters. Can include UTF-8.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_option_code#name DhcpOptionCode#name}
  */
  readonly name: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_option_code#option_space DhcpOptionCode#option_space}
  */
  readonly optionSpace: string;
  /**
  * The option type for the option code. Valid values are:
  *   * _address4_
  *   * _address6_
  *   * _boolean_
  *   * _empty_
  *   * _fqdn_
  *   * _int8_
  *   * _int16_
  *   * _int32_
  *   * _text_
  *   * _uint8_
  *   * _uint16_
  *   * _uint32_
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_option_code#type DhcpOptionCode#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_option_code bloxone_dhcp_option_code}
*/
export class DhcpOptionCode extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bloxone_dhcp_option_code";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DhcpOptionCode resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DhcpOptionCode to import
  * @param importFromId The id of the existing DhcpOptionCode that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_option_code#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DhcpOptionCode to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bloxone_dhcp_option_code", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_option_code bloxone_dhcp_option_code} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DhcpOptionCodeConfig
  */
  public constructor(scope: Construct, id: string, config: DhcpOptionCodeConfig) {
    super(scope, id, {
      terraformResourceType: 'bloxone_dhcp_option_code',
      terraformGeneratorMetadata: {
        providerName: 'bloxone',
        providerVersion: '1.5.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._array = config.array;
    this._code = config.code;
    this._comment = config.comment;
    this._name = config.name;
    this._optionSpace = config.optionSpace;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // array - computed: true, optional: true, required: false
  private _array?: boolean | cdktf.IResolvable; 
  public get array() {
    return this.getBooleanAttribute('array');
  }
  public set array(value: boolean | cdktf.IResolvable) {
    this._array = value;
  }
  public resetArray() {
    this._array = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arrayInput() {
    return this._array;
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

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // option_space - computed: false, optional: false, required: true
  private _optionSpace?: string; 
  public get optionSpace() {
    return this.getStringAttribute('option_space');
  }
  public set optionSpace(value: string) {
    this._optionSpace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get optionSpaceInput() {
    return this._optionSpace;
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      array: cdktf.booleanToTerraform(this._array),
      code: cdktf.numberToTerraform(this._code),
      comment: cdktf.stringToTerraform(this._comment),
      name: cdktf.stringToTerraform(this._name),
      option_space: cdktf.stringToTerraform(this._optionSpace),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      array: {
        value: cdktf.booleanToHclTerraform(this._array),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      option_space: {
        value: cdktf.stringToHclTerraform(this._optionSpace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
