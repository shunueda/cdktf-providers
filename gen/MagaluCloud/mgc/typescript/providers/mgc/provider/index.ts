// https://registry.terraform.io/providers/magalucloud/mgc/0.39.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MgcProviderConfig {
  /**
  * The Magalu API Key for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.39.0/docs#api_key MgcProvider#api_key}
  */
  readonly apiKey: string;
  /**
  * The environment to use. Options: prod / pre-prod / dev-qa. Default is prod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.39.0/docs#env MgcProvider#env}
  */
  readonly env?: string;
  /**
  * Configuration settings for Object Storage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.39.0/docs#object_storage MgcProvider#object_storage}
  */
  readonly objectStorage?: MgcProviderObjectStorage;
  /**
  * The region to use for resources. Options: br-ne1 / br-se1. Default is br-se1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.39.0/docs#region MgcProvider#region}
  */
  readonly region?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.39.0/docs#alias MgcProvider#alias}
  */
  readonly alias?: string;
}
export interface MgcProviderObjectStorageKeyPair {
  /**
  * The API Key Access ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.39.0/docs#key_id MgcProvider#key_id}
  */
  readonly keyId: string;
  /**
  * The API Key Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.39.0/docs#key_secret MgcProvider#key_secret}
  */
  readonly keySecret: string;
}

export function mgcProviderObjectStorageKeyPairToTerraform(struct?: MgcProviderObjectStorageKeyPair | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_id: cdktf.stringToTerraform(struct!.keyId),
    key_secret: cdktf.stringToTerraform(struct!.keySecret),
  }
}


export function mgcProviderObjectStorageKeyPairToHclTerraform(struct?: MgcProviderObjectStorageKeyPair | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_id: {
      value: cdktf.stringToHclTerraform(struct!.keyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_secret: {
      value: cdktf.stringToHclTerraform(struct!.keySecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface MgcProviderObjectStorage {
  /**
  * Bucket Key Pair configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.39.0/docs#key_pair MgcProvider#key_pair}
  */
  readonly keyPair: MgcProviderObjectStorageKeyPair;
}

export function mgcProviderObjectStorageToTerraform(struct?: MgcProviderObjectStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_pair: mgcProviderObjectStorageKeyPairToTerraform(struct!.keyPair),
  }
}


export function mgcProviderObjectStorageToHclTerraform(struct?: MgcProviderObjectStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_pair: {
      value: mgcProviderObjectStorageKeyPairToHclTerraform(struct!.keyPair),
      isBlock: true,
      type: "struct",
      storageClassType: "MgcProviderObjectStorageKeyPair",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


/**
* Represents a {@link https://registry.terraform.io/providers/magalucloud/mgc/0.39.0/docs mgc}
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
  * @param importFromId The id of the existing MgcProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/magalucloud/mgc/0.39.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MgcProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mgc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/magalucloud/mgc/0.39.0/docs mgc} Resource
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
        providerVersion: '0.39.0'
      },
      terraformProviderSource: 'MagaluCloud/mgc'
    });
    this._apiKey = config.apiKey;
    this._env = config.env;
    this._objectStorage = config.objectStorage;
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

  // object_storage - computed: false, optional: true, required: false
  private _objectStorage?: MgcProviderObjectStorage; 
  public get objectStorage() {
    return this._objectStorage;
  }
  public set objectStorage(value: MgcProviderObjectStorage | undefined) {
    this._objectStorage = value;
  }
  public resetObjectStorage() {
    this._objectStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectStorageInput() {
    return this._objectStorage;
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
      object_storage: mgcProviderObjectStorageToTerraform(this._objectStorage),
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
      object_storage: {
        value: mgcProviderObjectStorageToHclTerraform(this._objectStorage),
        isBlock: true,
        type: "struct",
        storageClassType: "MgcProviderObjectStorage",
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
