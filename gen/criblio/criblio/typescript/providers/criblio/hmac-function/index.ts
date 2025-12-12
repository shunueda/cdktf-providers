// https://registry.terraform.io/providers/criblio/criblio/1.20.60/docs/resources/hmac_function
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HmacFunctionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.60/docs/resources/hmac_function#description HmacFunction#description}
  */
  readonly description?: string;
  /**
  * The consumer group to which this instance belongs. Defaults to 'Cribl'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.60/docs/resources/hmac_function#group_id HmacFunction#group_id}
  */
  readonly groupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.60/docs/resources/hmac_function#header_expression HmacFunction#header_expression}
  */
  readonly headerExpression: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.60/docs/resources/hmac_function#header_name HmacFunction#header_name}
  */
  readonly headerName: string;
  /**
  * Unique ID to PATCH
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.60/docs/resources/hmac_function#id HmacFunction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * must be one of ["cribl", "cribl-custom", "custom"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.60/docs/resources/hmac_function#lib HmacFunction#lib}
  */
  readonly lib: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.60/docs/resources/hmac_function#string_builders HmacFunction#string_builders}
  */
  readonly stringBuilders: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.60/docs/resources/hmac_function#string_delim HmacFunction#string_delim}
  */
  readonly stringDelim?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/criblio/criblio/1.20.60/docs/resources/hmac_function criblio_hmac_function}
*/
export class HmacFunction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "criblio_hmac_function";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HmacFunction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HmacFunction to import
  * @param importFromId The id of the existing HmacFunction that should be imported. Refer to the {@link https://registry.terraform.io/providers/criblio/criblio/1.20.60/docs/resources/hmac_function#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HmacFunction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "criblio_hmac_function", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/criblio/criblio/1.20.60/docs/resources/hmac_function criblio_hmac_function} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HmacFunctionConfig
  */
  public constructor(scope: Construct, id: string, config: HmacFunctionConfig) {
    super(scope, id, {
      terraformResourceType: 'criblio_hmac_function',
      terraformGeneratorMetadata: {
        providerName: 'criblio',
        providerVersion: '1.20.60',
        providerVersionConstraint: '1.20.60'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._groupId = config.groupId;
    this._headerExpression = config.headerExpression;
    this._headerName = config.headerName;
    this._id = config.id;
    this._lib = config.lib;
    this._stringBuilders = config.stringBuilders;
    this._stringDelim = config.stringDelim;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // group_id - computed: false, optional: false, required: true
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // header_expression - computed: false, optional: false, required: true
  private _headerExpression?: string; 
  public get headerExpression() {
    return this.getStringAttribute('header_expression');
  }
  public set headerExpression(value: string) {
    this._headerExpression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerExpressionInput() {
    return this._headerExpression;
  }

  // header_name - computed: false, optional: false, required: true
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // lib - computed: false, optional: false, required: true
  private _lib?: string; 
  public get lib() {
    return this.getStringAttribute('lib');
  }
  public set lib(value: string) {
    this._lib = value;
  }
  // Temporarily expose input value. Use with caution.
  public get libInput() {
    return this._lib;
  }

  // string_builders - computed: false, optional: false, required: true
  private _stringBuilders?: string[]; 
  public get stringBuilders() {
    return this.getListAttribute('string_builders');
  }
  public set stringBuilders(value: string[]) {
    this._stringBuilders = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stringBuildersInput() {
    return this._stringBuilders;
  }

  // string_delim - computed: true, optional: true, required: false
  private _stringDelim?: string; 
  public get stringDelim() {
    return this.getStringAttribute('string_delim');
  }
  public set stringDelim(value: string) {
    this._stringDelim = value;
  }
  public resetStringDelim() {
    this._stringDelim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringDelimInput() {
    return this._stringDelim;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      group_id: cdktf.stringToTerraform(this._groupId),
      header_expression: cdktf.stringToTerraform(this._headerExpression),
      header_name: cdktf.stringToTerraform(this._headerName),
      id: cdktf.stringToTerraform(this._id),
      lib: cdktf.stringToTerraform(this._lib),
      string_builders: cdktf.listMapper(cdktf.stringToTerraform, false)(this._stringBuilders),
      string_delim: cdktf.stringToTerraform(this._stringDelim),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_id: {
        value: cdktf.stringToHclTerraform(this._groupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      header_expression: {
        value: cdktf.stringToHclTerraform(this._headerExpression),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      header_name: {
        value: cdktf.stringToHclTerraform(this._headerName),
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
      lib: {
        value: cdktf.stringToHclTerraform(this._lib),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      string_builders: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._stringBuilders),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      string_delim: {
        value: cdktf.stringToHclTerraform(this._stringDelim),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
