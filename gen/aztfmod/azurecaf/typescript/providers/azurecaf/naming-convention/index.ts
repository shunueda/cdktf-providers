// https://registry.terraform.io/providers/aztfmod/azurecaf/1.2.31/docs/resources/naming_convention
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NamingConventionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aztfmod/azurecaf/1.2.31/docs/resources/naming_convention#convention NamingConvention#convention}
  */
  readonly convention?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aztfmod/azurecaf/1.2.31/docs/resources/naming_convention#id NamingConvention#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aztfmod/azurecaf/1.2.31/docs/resources/naming_convention#max_length NamingConvention#max_length}
  */
  readonly maxLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aztfmod/azurecaf/1.2.31/docs/resources/naming_convention#name NamingConvention#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aztfmod/azurecaf/1.2.31/docs/resources/naming_convention#postfix NamingConvention#postfix}
  */
  readonly postfix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aztfmod/azurecaf/1.2.31/docs/resources/naming_convention#prefix NamingConvention#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aztfmod/azurecaf/1.2.31/docs/resources/naming_convention#prefixes NamingConvention#prefixes}
  */
  readonly prefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aztfmod/azurecaf/1.2.31/docs/resources/naming_convention#resource_type NamingConvention#resource_type}
  */
  readonly resourceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aztfmod/azurecaf/1.2.31/docs/resources/naming_convention#suffixes NamingConvention#suffixes}
  */
  readonly suffixes?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/aztfmod/azurecaf/1.2.31/docs/resources/naming_convention azurecaf_naming_convention}
*/
export class NamingConvention extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurecaf_naming_convention";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NamingConvention resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NamingConvention to import
  * @param importFromId The id of the existing NamingConvention that should be imported. Refer to the {@link https://registry.terraform.io/providers/aztfmod/azurecaf/1.2.31/docs/resources/naming_convention#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NamingConvention to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurecaf_naming_convention", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aztfmod/azurecaf/1.2.31/docs/resources/naming_convention azurecaf_naming_convention} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NamingConventionConfig = {}
  */
  public constructor(scope: Construct, id: string, config: NamingConventionConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'azurecaf_naming_convention',
      terraformGeneratorMetadata: {
        providerName: 'azurecaf',
        providerVersion: '1.2.31',
        providerVersionConstraint: '1.2.31'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._convention = config.convention;
    this._id = config.id;
    this._maxLength = config.maxLength;
    this._name = config.name;
    this._postfix = config.postfix;
    this._prefix = config.prefix;
    this._prefixes = config.prefixes;
    this._resourceType = config.resourceType;
    this._suffixes = config.suffixes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // convention - computed: false, optional: true, required: false
  private _convention?: string; 
  public get convention() {
    return this.getStringAttribute('convention');
  }
  public set convention(value: string) {
    this._convention = value;
  }
  public resetConvention() {
    this._convention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conventionInput() {
    return this._convention;
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

  // max_length - computed: false, optional: true, required: false
  private _maxLength?: number; 
  public get maxLength() {
    return this.getNumberAttribute('max_length');
  }
  public set maxLength(value: number) {
    this._maxLength = value;
  }
  public resetMaxLength() {
    this._maxLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLengthInput() {
    return this._maxLength;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // postfix - computed: false, optional: true, required: false
  private _postfix?: string; 
  public get postfix() {
    return this.getStringAttribute('postfix');
  }
  public set postfix(value: string) {
    this._postfix = value;
  }
  public resetPostfix() {
    this._postfix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postfixInput() {
    return this._postfix;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // prefixes - computed: false, optional: true, required: false
  private _prefixes?: string[]; 
  public get prefixes() {
    return this.getListAttribute('prefixes');
  }
  public set prefixes(value: string[]) {
    this._prefixes = value;
  }
  public resetPrefixes() {
    this._prefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixesInput() {
    return this._prefixes;
  }

  // resource_type - computed: false, optional: true, required: false
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  public resetResourceType() {
    this._resourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // result - computed: true, optional: false, required: false
  public get result() {
    return this.getStringAttribute('result');
  }

  // suffixes - computed: false, optional: true, required: false
  private _suffixes?: string[]; 
  public get suffixes() {
    return this.getListAttribute('suffixes');
  }
  public set suffixes(value: string[]) {
    this._suffixes = value;
  }
  public resetSuffixes() {
    this._suffixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixesInput() {
    return this._suffixes;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      convention: cdktf.stringToTerraform(this._convention),
      id: cdktf.stringToTerraform(this._id),
      max_length: cdktf.numberToTerraform(this._maxLength),
      name: cdktf.stringToTerraform(this._name),
      postfix: cdktf.stringToTerraform(this._postfix),
      prefix: cdktf.stringToTerraform(this._prefix),
      prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._prefixes),
      resource_type: cdktf.stringToTerraform(this._resourceType),
      suffixes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._suffixes),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      convention: {
        value: cdktf.stringToHclTerraform(this._convention),
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
      max_length: {
        value: cdktf.numberToHclTerraform(this._maxLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      postfix: {
        value: cdktf.stringToHclTerraform(this._postfix),
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
      prefixes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._prefixes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      resource_type: {
        value: cdktf.stringToHclTerraform(this._resourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      suffixes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._suffixes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
