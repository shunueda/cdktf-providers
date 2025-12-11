// https://registry.terraform.io/providers/latitudesh/latitudesh/2.8.4/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LatitudeshProviderConfig {
  /**
  * Latitude.sh API authentication token. Can also be set via the LATITUDESH_AUTH_TOKEN environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/latitudesh/latitudesh/2.8.4/docs#auth_token LatitudeshProvider#auth_token}
  */
  readonly authToken?: string;
  /**
  * The project ID to use for all resources. If not set, project must be defined in the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/latitudesh/latitudesh/2.8.4/docs#project LatitudeshProvider#project}
  */
  readonly project?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/latitudesh/latitudesh/2.8.4/docs#alias LatitudeshProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/latitudesh/latitudesh/2.8.4/docs latitudesh}
*/
export class LatitudeshProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "latitudesh";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LatitudeshProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LatitudeshProvider to import
  * @param importFromId The id of the existing LatitudeshProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/latitudesh/latitudesh/2.8.4/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LatitudeshProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "latitudesh", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/latitudesh/latitudesh/2.8.4/docs latitudesh} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LatitudeshProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: LatitudeshProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'latitudesh',
      terraformGeneratorMetadata: {
        providerName: 'latitudesh',
        providerVersion: '2.8.4',
        providerVersionConstraint: '2.8.4'
      },
      terraformProviderSource: 'latitudesh/latitudesh'
    });
    this._authToken = config.authToken;
    this._project = config.project;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_token - computed: false, optional: true, required: false
  private _authToken?: string; 
  public get authToken() {
    return this._authToken;
  }
  public set authToken(value: string | undefined) {
    this._authToken = value;
  }
  public resetAuthToken() {
    this._authToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTokenInput() {
    return this._authToken;
  }

  // project - computed: false, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this._project;
  }
  public set project(value: string | undefined) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
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
      auth_token: cdktf.stringToTerraform(this._authToken),
      project: cdktf.stringToTerraform(this._project),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_token: {
        value: cdktf.stringToHclTerraform(this._authToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
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
