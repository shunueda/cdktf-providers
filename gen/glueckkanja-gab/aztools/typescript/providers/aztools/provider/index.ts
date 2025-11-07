// https://registry.terraform.io/providers/glueckkanja-gab/aztools/0.0.7/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AztoolsProviderConfig {
  /**
  * Default convention for all naming results. Possible values 'default', 'passthrough'. Default 'default'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/glueckkanja-gab/aztools/0.0.7/docs#convention AztoolsProvider#convention}
  */
  readonly convention?: string;
  /**
  * Environment parameter. Default 'sandbox'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/glueckkanja-gab/aztools/0.0.7/docs#environment AztoolsProvider#environment}
  */
  readonly environment?: string;
  /**
  * Default hash length for resource schema. Overrrides all naminng schema configurations defined in json files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/glueckkanja-gab/aztools/0.0.7/docs#hash_length AztoolsProvider#hash_length}
  */
  readonly hashLength?: number;
  /**
  * Namig result formating. Default 'false'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/glueckkanja-gab/aztools/0.0.7/docs#lowercase AztoolsProvider#lowercase}
  */
  readonly lowercase?: boolean | cdktf.IResolvable;
  /**
  * Path to the config file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/glueckkanja-gab/aztools/0.0.7/docs#schema_locations_path AztoolsProvider#schema_locations_path}
  */
  readonly schemaLocationsPath?: string;
  /**
  * Url to the config file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/glueckkanja-gab/aztools/0.0.7/docs#schema_locations_url AztoolsProvider#schema_locations_url}
  */
  readonly schemaLocationsUrl?: string;
  /**
  * Path to the config file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/glueckkanja-gab/aztools/0.0.7/docs#schema_naming_path AztoolsProvider#schema_naming_path}
  */
  readonly schemaNamingPath?: string;
  /**
  * Path to the config file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/glueckkanja-gab/aztools/0.0.7/docs#schema_naming_url AztoolsProvider#schema_naming_url}
  */
  readonly schemaNamingUrl?: string;
  /**
  * Naming schema separator. Default '-'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/glueckkanja-gab/aztools/0.0.7/docs#separator AztoolsProvider#separator}
  */
  readonly separator?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/glueckkanja-gab/aztools/0.0.7/docs#alias AztoolsProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/glueckkanja-gab/aztools/0.0.7/docs aztools}
*/
export class AztoolsProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aztools";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AztoolsProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AztoolsProvider to import
  * @param importFromId The id of the existing AztoolsProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/glueckkanja-gab/aztools/0.0.7/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AztoolsProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aztools", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/glueckkanja-gab/aztools/0.0.7/docs aztools} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AztoolsProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AztoolsProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aztools',
      terraformGeneratorMetadata: {
        providerName: 'aztools',
        providerVersion: '0.0.7'
      },
      terraformProviderSource: 'glueckkanja-gab/aztools'
    });
    this._convention = config.convention;
    this._environment = config.environment;
    this._hashLength = config.hashLength;
    this._lowercase = config.lowercase;
    this._schemaLocationsPath = config.schemaLocationsPath;
    this._schemaLocationsUrl = config.schemaLocationsUrl;
    this._schemaNamingPath = config.schemaNamingPath;
    this._schemaNamingUrl = config.schemaNamingUrl;
    this._separator = config.separator;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // convention - computed: false, optional: true, required: false
  private _convention?: string; 
  public get convention() {
    return this._convention;
  }
  public set convention(value: string | undefined) {
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
    return this._environment;
  }
  public set environment(value: string | undefined) {
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
    return this._hashLength;
  }
  public set hashLength(value: number | undefined) {
    this._hashLength = value;
  }
  public resetHashLength() {
    this._hashLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashLengthInput() {
    return this._hashLength;
  }

  // lowercase - computed: false, optional: true, required: false
  private _lowercase?: boolean | cdktf.IResolvable; 
  public get lowercase() {
    return this._lowercase;
  }
  public set lowercase(value: boolean | cdktf.IResolvable | undefined) {
    this._lowercase = value;
  }
  public resetLowercase() {
    this._lowercase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowercaseInput() {
    return this._lowercase;
  }

  // schema_locations_path - computed: false, optional: true, required: false
  private _schemaLocationsPath?: string; 
  public get schemaLocationsPath() {
    return this._schemaLocationsPath;
  }
  public set schemaLocationsPath(value: string | undefined) {
    this._schemaLocationsPath = value;
  }
  public resetSchemaLocationsPath() {
    this._schemaLocationsPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaLocationsPathInput() {
    return this._schemaLocationsPath;
  }

  // schema_locations_url - computed: false, optional: true, required: false
  private _schemaLocationsUrl?: string; 
  public get schemaLocationsUrl() {
    return this._schemaLocationsUrl;
  }
  public set schemaLocationsUrl(value: string | undefined) {
    this._schemaLocationsUrl = value;
  }
  public resetSchemaLocationsUrl() {
    this._schemaLocationsUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaLocationsUrlInput() {
    return this._schemaLocationsUrl;
  }

  // schema_naming_path - computed: false, optional: true, required: false
  private _schemaNamingPath?: string; 
  public get schemaNamingPath() {
    return this._schemaNamingPath;
  }
  public set schemaNamingPath(value: string | undefined) {
    this._schemaNamingPath = value;
  }
  public resetSchemaNamingPath() {
    this._schemaNamingPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaNamingPathInput() {
    return this._schemaNamingPath;
  }

  // schema_naming_url - computed: false, optional: true, required: false
  private _schemaNamingUrl?: string; 
  public get schemaNamingUrl() {
    return this._schemaNamingUrl;
  }
  public set schemaNamingUrl(value: string | undefined) {
    this._schemaNamingUrl = value;
  }
  public resetSchemaNamingUrl() {
    this._schemaNamingUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaNamingUrlInput() {
    return this._schemaNamingUrl;
  }

  // separator - computed: false, optional: true, required: false
  private _separator?: string; 
  public get separator() {
    return this._separator;
  }
  public set separator(value: string | undefined) {
    this._separator = value;
  }
  public resetSeparator() {
    this._separator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get separatorInput() {
    return this._separator;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      convention: cdktf.stringToTerraform(this._convention),
      environment: cdktf.stringToTerraform(this._environment),
      hash_length: cdktf.numberToTerraform(this._hashLength),
      lowercase: cdktf.booleanToTerraform(this._lowercase),
      schema_locations_path: cdktf.stringToTerraform(this._schemaLocationsPath),
      schema_locations_url: cdktf.stringToTerraform(this._schemaLocationsUrl),
      schema_naming_path: cdktf.stringToTerraform(this._schemaNamingPath),
      schema_naming_url: cdktf.stringToTerraform(this._schemaNamingUrl),
      separator: cdktf.stringToTerraform(this._separator),
      alias: cdktf.stringToTerraform(this._alias),
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
      lowercase: {
        value: cdktf.booleanToHclTerraform(this._lowercase),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      schema_locations_path: {
        value: cdktf.stringToHclTerraform(this._schemaLocationsPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schema_locations_url: {
        value: cdktf.stringToHclTerraform(this._schemaLocationsUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schema_naming_path: {
        value: cdktf.stringToHclTerraform(this._schemaNamingPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schema_naming_url: {
        value: cdktf.stringToHclTerraform(this._schemaNamingUrl),
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
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
