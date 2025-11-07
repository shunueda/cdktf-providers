// https://registry.terraform.io/providers/aztfmod/azurecaf/1.2.31/docs/resources/name
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NameConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aztfmod/azurecaf/1.2.31/docs/resources/name#clean_input Name#clean_input}
  */
  readonly cleanInput?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aztfmod/azurecaf/1.2.31/docs/resources/name#id Name#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aztfmod/azurecaf/1.2.31/docs/resources/name#name Name#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aztfmod/azurecaf/1.2.31/docs/resources/name#passthrough Name#passthrough}
  */
  readonly passthrough?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aztfmod/azurecaf/1.2.31/docs/resources/name#prefixes Name#prefixes}
  */
  readonly prefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aztfmod/azurecaf/1.2.31/docs/resources/name#random_length Name#random_length}
  */
  readonly randomLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aztfmod/azurecaf/1.2.31/docs/resources/name#random_seed Name#random_seed}
  */
  readonly randomSeed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aztfmod/azurecaf/1.2.31/docs/resources/name#resource_type Name#resource_type}
  */
  readonly resourceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aztfmod/azurecaf/1.2.31/docs/resources/name#resource_types Name#resource_types}
  */
  readonly resourceTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aztfmod/azurecaf/1.2.31/docs/resources/name#separator Name#separator}
  */
  readonly separator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aztfmod/azurecaf/1.2.31/docs/resources/name#suffixes Name#suffixes}
  */
  readonly suffixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aztfmod/azurecaf/1.2.31/docs/resources/name#use_slug Name#use_slug}
  */
  readonly useSlug?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aztfmod/azurecaf/1.2.31/docs/resources/name azurecaf_name}
*/
export class Name extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurecaf_name";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Name resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Name to import
  * @param importFromId The id of the existing Name that should be imported. Refer to the {@link https://registry.terraform.io/providers/aztfmod/azurecaf/1.2.31/docs/resources/name#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Name to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurecaf_name", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aztfmod/azurecaf/1.2.31/docs/resources/name azurecaf_name} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NameConfig = {}
  */
  public constructor(scope: Construct, id: string, config: NameConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'azurecaf_name',
      terraformGeneratorMetadata: {
        providerName: 'azurecaf',
        providerVersion: '1.2.31'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cleanInput = config.cleanInput;
    this._id = config.id;
    this._name = config.name;
    this._passthrough = config.passthrough;
    this._prefixes = config.prefixes;
    this._randomLength = config.randomLength;
    this._randomSeed = config.randomSeed;
    this._resourceType = config.resourceType;
    this._resourceTypes = config.resourceTypes;
    this._separator = config.separator;
    this._suffixes = config.suffixes;
    this._useSlug = config.useSlug;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // clean_input - computed: false, optional: true, required: false
  private _cleanInput?: boolean | cdktf.IResolvable; 
  public get cleanInput() {
    return this.getBooleanAttribute('clean_input');
  }
  public set cleanInput(value: boolean | cdktf.IResolvable) {
    this._cleanInput = value;
  }
  public resetCleanInput() {
    this._cleanInput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cleanInputInput() {
    return this._cleanInput;
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

  // passthrough - computed: false, optional: true, required: false
  private _passthrough?: boolean | cdktf.IResolvable; 
  public get passthrough() {
    return this.getBooleanAttribute('passthrough');
  }
  public set passthrough(value: boolean | cdktf.IResolvable) {
    this._passthrough = value;
  }
  public resetPassthrough() {
    this._passthrough = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passthroughInput() {
    return this._passthrough;
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

  // random_length - computed: false, optional: true, required: false
  private _randomLength?: number; 
  public get randomLength() {
    return this.getNumberAttribute('random_length');
  }
  public set randomLength(value: number) {
    this._randomLength = value;
  }
  public resetRandomLength() {
    this._randomLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get randomLengthInput() {
    return this._randomLength;
  }

  // random_seed - computed: false, optional: true, required: false
  private _randomSeed?: number; 
  public get randomSeed() {
    return this.getNumberAttribute('random_seed');
  }
  public set randomSeed(value: number) {
    this._randomSeed = value;
  }
  public resetRandomSeed() {
    this._randomSeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get randomSeedInput() {
    return this._randomSeed;
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

  // resource_types - computed: false, optional: true, required: false
  private _resourceTypes?: string[]; 
  public get resourceTypes() {
    return this.getListAttribute('resource_types');
  }
  public set resourceTypes(value: string[]) {
    this._resourceTypes = value;
  }
  public resetResourceTypes() {
    this._resourceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypesInput() {
    return this._resourceTypes;
  }

  // result - computed: true, optional: false, required: false
  public get result() {
    return this.getStringAttribute('result');
  }

  // results - computed: true, optional: false, required: false
  private _results = new cdktf.StringMap(this, "results");
  public get results() {
    return this._results;
  }

  // separator - computed: false, optional: true, required: false
  private _separator?: string; 
  public get separator() {
    return this.getStringAttribute('separator');
  }
  public set separator(value: string) {
    this._separator = value;
  }
  public resetSeparator() {
    this._separator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get separatorInput() {
    return this._separator;
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

  // use_slug - computed: false, optional: true, required: false
  private _useSlug?: boolean | cdktf.IResolvable; 
  public get useSlug() {
    return this.getBooleanAttribute('use_slug');
  }
  public set useSlug(value: boolean | cdktf.IResolvable) {
    this._useSlug = value;
  }
  public resetUseSlug() {
    this._useSlug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSlugInput() {
    return this._useSlug;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      clean_input: cdktf.booleanToTerraform(this._cleanInput),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      passthrough: cdktf.booleanToTerraform(this._passthrough),
      prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._prefixes),
      random_length: cdktf.numberToTerraform(this._randomLength),
      random_seed: cdktf.numberToTerraform(this._randomSeed),
      resource_type: cdktf.stringToTerraform(this._resourceType),
      resource_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._resourceTypes),
      separator: cdktf.stringToTerraform(this._separator),
      suffixes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._suffixes),
      use_slug: cdktf.booleanToTerraform(this._useSlug),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      clean_input: {
        value: cdktf.booleanToHclTerraform(this._cleanInput),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      passthrough: {
        value: cdktf.booleanToHclTerraform(this._passthrough),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      prefixes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._prefixes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      random_length: {
        value: cdktf.numberToHclTerraform(this._randomLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      random_seed: {
        value: cdktf.numberToHclTerraform(this._randomSeed),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      resource_type: {
        value: cdktf.stringToHclTerraform(this._resourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._resourceTypes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      separator: {
        value: cdktf.stringToHclTerraform(this._separator),
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
      use_slug: {
        value: cdktf.booleanToHclTerraform(this._useSlug),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
