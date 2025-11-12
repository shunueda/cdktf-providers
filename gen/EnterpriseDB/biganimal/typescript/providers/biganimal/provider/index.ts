// https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BiganimalProviderConfig {
  /**
  * BigAnimal Access Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs#ba_access_key BiganimalProvider#ba_access_key}
  */
  readonly baAccessKey?: string;
  /**
  * BigAnimal API URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs#ba_api_uri BiganimalProvider#ba_api_uri}
  */
  readonly baApiUri?: string;
  /**
  * BigAnimal Bearer Token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs#ba_bearer_token BiganimalProvider#ba_bearer_token}
  */
  readonly baBearerToken?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs#alias BiganimalProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs biganimal}
*/
export class BiganimalProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "biganimal";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BiganimalProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BiganimalProvider to import
  * @param importFromId The id of the existing BiganimalProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BiganimalProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "biganimal", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs biganimal} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BiganimalProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: BiganimalProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'biganimal',
      terraformGeneratorMetadata: {
        providerName: 'biganimal',
        providerVersion: '3.1.1',
        providerVersionConstraint: '3.1.1'
      },
      terraformProviderSource: 'EnterpriseDB/biganimal'
    });
    this._baAccessKey = config.baAccessKey;
    this._baApiUri = config.baApiUri;
    this._baBearerToken = config.baBearerToken;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ba_access_key - computed: false, optional: true, required: false
  private _baAccessKey?: string; 
  public get baAccessKey() {
    return this._baAccessKey;
  }
  public set baAccessKey(value: string | undefined) {
    this._baAccessKey = value;
  }
  public resetBaAccessKey() {
    this._baAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baAccessKeyInput() {
    return this._baAccessKey;
  }

  // ba_api_uri - computed: false, optional: true, required: false
  private _baApiUri?: string; 
  public get baApiUri() {
    return this._baApiUri;
  }
  public set baApiUri(value: string | undefined) {
    this._baApiUri = value;
  }
  public resetBaApiUri() {
    this._baApiUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baApiUriInput() {
    return this._baApiUri;
  }

  // ba_bearer_token - computed: false, optional: true, required: false
  private _baBearerToken?: string; 
  public get baBearerToken() {
    return this._baBearerToken;
  }
  public set baBearerToken(value: string | undefined) {
    this._baBearerToken = value;
  }
  public resetBaBearerToken() {
    this._baBearerToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baBearerTokenInput() {
    return this._baBearerToken;
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
      ba_access_key: cdktf.stringToTerraform(this._baAccessKey),
      ba_api_uri: cdktf.stringToTerraform(this._baApiUri),
      ba_bearer_token: cdktf.stringToTerraform(this._baBearerToken),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ba_access_key: {
        value: cdktf.stringToHclTerraform(this._baAccessKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ba_api_uri: {
        value: cdktf.stringToHclTerraform(this._baApiUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ba_bearer_token: {
        value: cdktf.stringToHclTerraform(this._baBearerToken),
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
