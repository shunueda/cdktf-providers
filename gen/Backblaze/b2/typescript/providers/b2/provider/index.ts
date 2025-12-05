// https://registry.terraform.io/providers/backblaze/b2/0.12.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface B2ProviderConfig {
  /**
  * B2 Application Key (B2_APPLICATION_KEY env).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/backblaze/b2/0.12.0/docs#application_key B2Provider#application_key}
  */
  readonly applicationKey?: string;
  /**
  * B2 Application Key ID (B2_APPLICATION_KEY_ID env).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/backblaze/b2/0.12.0/docs#application_key_id B2Provider#application_key_id}
  */
  readonly applicationKeyId?: string;
  /**
  * B2 endpoint - the string 'production' or a custom B2 API URL (B2_ENDPOINT env). You should not need to set this unless you work at Backblaze. Defaults to `production`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/backblaze/b2/0.12.0/docs#endpoint B2Provider#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/backblaze/b2/0.12.0/docs#alias B2Provider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/backblaze/b2/0.12.0/docs b2}
*/
export class B2Provider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "b2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a B2Provider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the B2Provider to import
  * @param importFromId The id of the existing B2Provider that should be imported. Refer to the {@link https://registry.terraform.io/providers/backblaze/b2/0.12.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the B2Provider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "b2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/backblaze/b2/0.12.0/docs b2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options B2ProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: B2ProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'b2',
      terraformGeneratorMetadata: {
        providerName: 'b2',
        providerVersion: '0.12.0',
        providerVersionConstraint: '0.12.0'
      },
      terraformProviderSource: 'Backblaze/b2'
    });
    this._applicationKey = config.applicationKey;
    this._applicationKeyId = config.applicationKeyId;
    this._endpoint = config.endpoint;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_key - computed: false, optional: true, required: false
  private _applicationKey?: string; 
  public get applicationKey() {
    return this._applicationKey;
  }
  public set applicationKey(value: string | undefined) {
    this._applicationKey = value;
  }
  public resetApplicationKey() {
    this._applicationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationKeyInput() {
    return this._applicationKey;
  }

  // application_key_id - computed: false, optional: true, required: false
  private _applicationKeyId?: string; 
  public get applicationKeyId() {
    return this._applicationKeyId;
  }
  public set applicationKeyId(value: string | undefined) {
    this._applicationKeyId = value;
  }
  public resetApplicationKeyId() {
    this._applicationKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationKeyIdInput() {
    return this._applicationKeyId;
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this._endpoint;
  }
  public set endpoint(value: string | undefined) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
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
      application_key: cdktf.stringToTerraform(this._applicationKey),
      application_key_id: cdktf.stringToTerraform(this._applicationKeyId),
      endpoint: cdktf.stringToTerraform(this._endpoint),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_key: {
        value: cdktf.stringToHclTerraform(this._applicationKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      application_key_id: {
        value: cdktf.stringToHclTerraform(this._applicationKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint: {
        value: cdktf.stringToHclTerraform(this._endpoint),
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
