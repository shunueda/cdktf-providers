// https://registry.terraform.io/providers/magalucloud/mgc/0.40.1/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MgcProviderConfig {
  /**
  * The Magalu API Key for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.1/docs#api_key MgcProvider#api_key}
  */
  readonly apiKey: string;
  /**
  * The environment to use. Options: prod / pre-prod / dev-qa. Default is prod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.1/docs#env MgcProvider#env}
  */
  readonly env?: string;
  /**
  * Key Pair ID for Object Storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.1/docs#key_pair_id MgcProvider#key_pair_id}
  */
  readonly keyPairId?: string;
  /**
  * Key Pair Secret for Object Storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.1/docs#key_pair_secret MgcProvider#key_pair_secret}
  */
  readonly keyPairSecret?: string;
  /**
  * The region to use for resources. Options: br-ne1 / br-se1. Default is br-se1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.1/docs#region MgcProvider#region}
  */
  readonly region?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.1/docs#alias MgcProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.1/docs mgc}
*/
export class MgcProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mgc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MgcProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MgcProvider to import
  * @param importFromId The id of the existing MgcProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.1/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MgcProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mgc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.1/docs mgc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MgcProviderConfig
  */
  public constructor(scope: Construct, id: string, config: MgcProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'mgc',
      terraformGeneratorMetadata: {
        providerName: 'mgc',
        providerVersion: '0.40.1',
        providerVersionConstraint: '0.40.1'
      },
      terraformProviderSource: 'MagaluCloud/mgc'
    });
    this._apiKey = config.apiKey;
    this._env = config.env;
    this._keyPairId = config.keyPairId;
    this._keyPairSecret = config.keyPairSecret;
    this._region = config.region;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_key - computed: false, optional: false, required: true
  private _apiKey?: string; 
  public get apiKey() {
    return this._apiKey;
  }
  public set apiKey(value: string | undefined) {
    this._apiKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // env - computed: false, optional: true, required: false
  private _env?: string; 
  public get env() {
    return this._env;
  }
  public set env(value: string | undefined) {
    this._env = value;
  }
  public resetEnv() {
    this._env = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env;
  }

  // key_pair_id - computed: false, optional: true, required: false
  private _keyPairId?: string; 
  public get keyPairId() {
    return this._keyPairId;
  }
  public set keyPairId(value: string | undefined) {
    this._keyPairId = value;
  }
  public resetKeyPairId() {
    this._keyPairId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPairIdInput() {
    return this._keyPairId;
  }

  // key_pair_secret - computed: false, optional: true, required: false
  private _keyPairSecret?: string; 
  public get keyPairSecret() {
    return this._keyPairSecret;
  }
  public set keyPairSecret(value: string | undefined) {
    this._keyPairSecret = value;
  }
  public resetKeyPairSecret() {
    this._keyPairSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPairSecretInput() {
    return this._keyPairSecret;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this._region;
  }
  public set region(value: string | undefined) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
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
      api_key: cdktf.stringToTerraform(this._apiKey),
      env: cdktf.stringToTerraform(this._env),
      key_pair_id: cdktf.stringToTerraform(this._keyPairId),
      key_pair_secret: cdktf.stringToTerraform(this._keyPairSecret),
      region: cdktf.stringToTerraform(this._region),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_key: {
        value: cdktf.stringToHclTerraform(this._apiKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      env: {
        value: cdktf.stringToHclTerraform(this._env),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_pair_id: {
        value: cdktf.stringToHclTerraform(this._keyPairId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_pair_secret: {
        value: cdktf.stringToHclTerraform(this._keyPairSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
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
