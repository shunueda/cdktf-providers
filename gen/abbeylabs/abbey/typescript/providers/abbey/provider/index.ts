// https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AbbeyProviderConfig {
  /**
  * The authentication token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs#bearer_auth AbbeyProvider#bearer_auth}
  */
  readonly bearerAuth: string;
  /**
  * The API host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs#server_url AbbeyProvider#server_url}
  */
  readonly serverUrl?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs#alias AbbeyProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs abbey}
*/
export class AbbeyProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "abbey";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AbbeyProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AbbeyProvider to import
  * @param importFromId The id of the existing AbbeyProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AbbeyProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "abbey", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs abbey} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AbbeyProviderConfig
  */
  public constructor(scope: Construct, id: string, config: AbbeyProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'abbey',
      terraformGeneratorMetadata: {
        providerName: 'abbey',
        providerVersion: '0.2.9',
        providerVersionConstraint: '0.2.9'
      },
      terraformProviderSource: 'abbeylabs/abbey'
    });
    this._bearerAuth = config.bearerAuth;
    this._serverUrl = config.serverUrl;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bearer_auth - computed: false, optional: false, required: true
  private _bearerAuth?: string; 
  public get bearerAuth() {
    return this._bearerAuth;
  }
  public set bearerAuth(value: string | undefined) {
    this._bearerAuth = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bearerAuthInput() {
    return this._bearerAuth;
  }

  // server_url - computed: false, optional: true, required: false
  private _serverUrl?: string; 
  public get serverUrl() {
    return this._serverUrl;
  }
  public set serverUrl(value: string | undefined) {
    this._serverUrl = value;
  }
  public resetServerUrl() {
    this._serverUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverUrlInput() {
    return this._serverUrl;
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
      bearer_auth: cdktf.stringToTerraform(this._bearerAuth),
      server_url: cdktf.stringToTerraform(this._serverUrl),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bearer_auth: {
        value: cdktf.stringToHclTerraform(this._bearerAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_url: {
        value: cdktf.stringToHclTerraform(this._serverUrl),
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
