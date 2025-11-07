// https://registry.terraform.io/providers/glueckkanja-gab/aztools/0.0.7/docs/resources/resource_name
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ResourceNameConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/glueckkanja-gab/aztools/0.0.7/docs/resources/resource_name#convention ResourceName#convention}
  */
  readonly convention?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/glueckkanja-gab/aztools/0.0.7/docs/resources/resource_name#environment ResourceName#environment}
  */
  readonly environment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/glueckkanja-gab/aztools/0.0.7/docs/resources/resource_name#hash_length ResourceName#hash_length}
  */
  readonly hashLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/glueckkanja-gab/aztools/0.0.7/docs/resources/resource_name#id ResourceName#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/glueckkanja-gab/aztools/0.0.7/docs/resources/resource_name#location ResourceName#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/glueckkanja-gab/aztools/0.0.7/docs/resources/resource_name#name ResourceName#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/glueckkanja-gab/aztools/0.0.7/docs/resources/resource_name#name_precedence ResourceName#name_precedence}
  */
  readonly namePrecedence?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/glueckkanja-gab/aztools/0.0.7/docs/resources/resource_name#prefixes ResourceName#prefixes}
  */
  readonly prefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/glueckkanja-gab/aztools/0.0.7/docs/resources/resource_name#resource_type ResourceName#resource_type}
  */
  readonly resourceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/glueckkanja-gab/aztools/0.0.7/docs/resources/resource_name#separator ResourceName#separator}
  */
  readonly separator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/glueckkanja-gab/aztools/0.0.7/docs/resources/resource_name#suffixes ResourceName#suffixes}
  */
  readonly suffixes?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/glueckkanja-gab/aztools/0.0.7/docs/resources/resource_name aztools_resource_name}
*/
export class ResourceName extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aztools_resource_name";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ResourceName resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ResourceName to import
  * @param importFromId The id of the existing ResourceName that should be imported. Refer to the {@link https://registry.terraform.io/providers/glueckkanja-gab/aztools/0.0.7/docs/resources/resource_name#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ResourceName to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aztools_resource_name", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/glueckkanja-gab/aztools/0.0.7/docs/resources/resource_name aztools_resource_name} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ResourceNameConfig
  */
  public constructor(scope: Construct, id: string, config: ResourceNameConfig) {
    super(scope, id, {
      terraformResourceType: 'aztools_resource_name',
      terraformGeneratorMetadata: {
        providerName: 'aztools',
        providerVersion: '0.0.7'
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
    this._environment = config.environment;
    this._hashLength = config.hashLength;
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._namePrecedence = config.namePrecedence;
    this._prefixes = config.prefixes;
    this._resourceType = config.resourceType;
    this._separator = config.separator;
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

  // environment - computed: false, optional: true, required: false
  private _environment?: string; 
  public get environment() {
    return this.getStringAttribute('environment');
  }
  public set environment(value: string) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // hash_length - computed: false, optional: true, required: false
  private _hashLength?: number; 
  public get hashLength() {
    return this.getNumberAttribute('hash_length');
  }
  public set hashLength(value: number) {
    this._hashLength = value;
  }
  public resetHashLength() {
    this._hashLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashLengthInput() {
    return this._hashLength;
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

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
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

  // name_precedence - computed: false, optional: true, required: false
  private _namePrecedence?: string[]; 
  public get namePrecedence() {
    return this.getListAttribute('name_precedence');
  }
  public set namePrecedence(value: string[]) {
    this._namePrecedence = value;
  }
  public resetNamePrecedence() {
    this._namePrecedence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namePrecedenceInput() {
    return this._namePrecedence;
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

  // resource_type - computed: false, optional: false, required: true
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // result - computed: true, optional: false, required: false
  public get result() {
    return this.getStringAttribute('result');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      convention: cdktf.stringToTerraform(this._convention),
      environment: cdktf.stringToTerraform(this._environment),
      hash_length: cdktf.numberToTerraform(this._hashLength),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      name_precedence: cdktf.listMapper(cdktf.stringToTerraform, false)(this._namePrecedence),
      prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._prefixes),
      resource_type: cdktf.stringToTerraform(this._resourceType),
      separator: cdktf.stringToTerraform(this._separator),
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
      environment: {
        value: cdktf.stringToHclTerraform(this._environment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hash_length: {
        value: cdktf.numberToHclTerraform(this._hashLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
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
      name_precedence: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._namePrecedence),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
