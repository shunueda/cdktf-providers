// https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ChronosphereProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs#api_token ChronosphereProvider#api_token}
  */
  readonly apiToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs#disable_dryrun ChronosphereProvider#disable_dryrun}
  */
  readonly disableDryrun?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs#entity_namespace ChronosphereProvider#entity_namespace}
  */
  readonly entityNamespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs#org ChronosphereProvider#org}
  */
  readonly org: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs#unstable ChronosphereProvider#unstable}
  */
  readonly unstable?: boolean | cdktf.IResolvable;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs#alias ChronosphereProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs chronosphere}
*/
export class ChronosphereProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "chronosphere";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ChronosphereProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ChronosphereProvider to import
  * @param importFromId The id of the existing ChronosphereProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ChronosphereProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "chronosphere", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs chronosphere} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ChronosphereProviderConfig
  */
  public constructor(scope: Construct, id: string, config: ChronosphereProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'chronosphere',
      terraformGeneratorMetadata: {
        providerName: 'chronosphere',
        providerVersion: '1.18.0',
        providerVersionConstraint: '1.18.0'
      },
      terraformProviderSource: 'chronosphereio/chronosphere'
    });
    this._apiToken = config.apiToken;
    this._disableDryrun = config.disableDryrun;
    this._entityNamespace = config.entityNamespace;
    this._org = config.org;
    this._unstable = config.unstable;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_token - computed: false, optional: true, required: false
  private _apiToken?: string; 
  public get apiToken() {
    return this._apiToken;
  }
  public set apiToken(value: string | undefined) {
    this._apiToken = value;
  }
  public resetApiToken() {
    this._apiToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTokenInput() {
    return this._apiToken;
  }

  // disable_dryrun - computed: false, optional: true, required: false
  private _disableDryrun?: boolean | cdktf.IResolvable; 
  public get disableDryrun() {
    return this._disableDryrun;
  }
  public set disableDryrun(value: boolean | cdktf.IResolvable | undefined) {
    this._disableDryrun = value;
  }
  public resetDisableDryrun() {
    this._disableDryrun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableDryrunInput() {
    return this._disableDryrun;
  }

  // entity_namespace - computed: false, optional: true, required: false
  private _entityNamespace?: string; 
  public get entityNamespace() {
    return this._entityNamespace;
  }
  public set entityNamespace(value: string | undefined) {
    this._entityNamespace = value;
  }
  public resetEntityNamespace() {
    this._entityNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityNamespaceInput() {
    return this._entityNamespace;
  }

  // org - computed: false, optional: false, required: true
  private _org?: string; 
  public get org() {
    return this._org;
  }
  public set org(value: string | undefined) {
    this._org = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgInput() {
    return this._org;
  }

  // unstable - computed: false, optional: true, required: false
  private _unstable?: boolean | cdktf.IResolvable; 
  public get unstable() {
    return this._unstable;
  }
  public set unstable(value: boolean | cdktf.IResolvable | undefined) {
    this._unstable = value;
  }
  public resetUnstable() {
    this._unstable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unstableInput() {
    return this._unstable;
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
      api_token: cdktf.stringToTerraform(this._apiToken),
      disable_dryrun: cdktf.booleanToTerraform(this._disableDryrun),
      entity_namespace: cdktf.stringToTerraform(this._entityNamespace),
      org: cdktf.stringToTerraform(this._org),
      unstable: cdktf.booleanToTerraform(this._unstable),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_token: {
        value: cdktf.stringToHclTerraform(this._apiToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_dryrun: {
        value: cdktf.booleanToHclTerraform(this._disableDryrun),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      entity_namespace: {
        value: cdktf.stringToHclTerraform(this._entityNamespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org: {
        value: cdktf.stringToHclTerraform(this._org),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unstable: {
        value: cdktf.booleanToHclTerraform(this._unstable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
