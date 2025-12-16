// https://registry.terraform.io/providers/honeycombio/honeycombio/0.44.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HoneycombioProviderConfig {
  /**
  * The Honeycomb API key to use. It can also be set via the `HONEYCOMB_API_KEY` or `HONEYCOMBIO_APIKEY` environment variables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.44.0/docs#api_key HoneycombioProvider#api_key}
  */
  readonly apiKey?: string;
  /**
  * The ID portion of the Honeycomb Management API key to use. It can also be set via the `HONEYCOMB_KEY_ID` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.44.0/docs#api_key_id HoneycombioProvider#api_key_id}
  */
  readonly apiKeyId?: string;
  /**
  * The secret portion of the Honeycomb Management API key to use. It can also be set via the `HONEYCOMB_KEY_SECRET` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.44.0/docs#api_key_secret HoneycombioProvider#api_key_secret}
  */
  readonly apiKeySecret?: string;
  /**
  * Override the URL of the Honeycomb API. Defaults to `https://api.honeycomb.io`. It can also be set via the `HONEYCOMB_API_ENDPOINT` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.44.0/docs#api_url HoneycombioProvider#api_url}
  */
  readonly apiUrl?: string;
  /**
  * Enable the API client's debug logs. By default, a `TF_LOG` setting of debug or higher will enable this.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.44.0/docs#debug HoneycombioProvider#debug}
  */
  readonly debug?: boolean | cdktf.IResolvable;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.44.0/docs#alias HoneycombioProvider#alias}
  */
  readonly alias?: string;
  /**
  * features block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.44.0/docs#features HoneycombioProvider#features}
  */
  readonly features?: HoneycombioProviderFeatures;
}
export interface HoneycombioProviderFeaturesColumn {
  /**
  * This changes the creation behavior of the column resource to import an existing column if it already exists, rather than erroring out.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.44.0/docs#import_on_conflict HoneycombioProvider#import_on_conflict}
  */
  readonly importOnConflict?: boolean | cdktf.IResolvable;
}

export function honeycombioProviderFeaturesColumnToTerraform(struct?: HoneycombioProviderFeaturesColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    import_on_conflict: cdktf.booleanToTerraform(struct!.importOnConflict),
  }
}


export function honeycombioProviderFeaturesColumnToHclTerraform(struct?: HoneycombioProviderFeaturesColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    import_on_conflict: {
      value: cdktf.booleanToHclTerraform(struct!.importOnConflict),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface HoneycombioProviderFeaturesDataset {
  /**
  * This changes the creation behavior of the dataset resource to import an existing dataset if it already exists, rather than erroring out.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.44.0/docs#import_on_conflict HoneycombioProvider#import_on_conflict}
  */
  readonly importOnConflict?: boolean | cdktf.IResolvable;
}

export function honeycombioProviderFeaturesDatasetToTerraform(struct?: HoneycombioProviderFeaturesDataset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    import_on_conflict: cdktf.booleanToTerraform(struct!.importOnConflict),
  }
}


export function honeycombioProviderFeaturesDatasetToHclTerraform(struct?: HoneycombioProviderFeaturesDataset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    import_on_conflict: {
      value: cdktf.booleanToHclTerraform(struct!.importOnConflict),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface HoneycombioProviderFeatures {
  /**
  * column block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.44.0/docs#column HoneycombioProvider#column}
  */
  readonly column?: HoneycombioProviderFeaturesColumn;
  /**
  * dataset block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.44.0/docs#dataset HoneycombioProvider#dataset}
  */
  readonly dataset?: HoneycombioProviderFeaturesDataset;
}

export function honeycombioProviderFeaturesToTerraform(struct?: HoneycombioProviderFeatures): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column: honeycombioProviderFeaturesColumnToTerraform(struct!.column),
    dataset: honeycombioProviderFeaturesDatasetToTerraform(struct!.dataset),
  }
}


export function honeycombioProviderFeaturesToHclTerraform(struct?: HoneycombioProviderFeatures): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    column: {
      value: honeycombioProviderFeaturesColumnToHclTerraform(struct!.column),
      isBlock: true,
      type: "list",
      storageClassType: "HoneycombioProviderFeaturesColumnList",
    },
    dataset: {
      value: honeycombioProviderFeaturesDatasetToHclTerraform(struct!.dataset),
      isBlock: true,
      type: "list",
      storageClassType: "HoneycombioProviderFeaturesDatasetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


/**
* Represents a {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.44.0/docs honeycombio}
*/
export class HoneycombioProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "honeycombio";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HoneycombioProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HoneycombioProvider to import
  * @param importFromId The id of the existing HoneycombioProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.44.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HoneycombioProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "honeycombio", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.44.0/docs honeycombio} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HoneycombioProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: HoneycombioProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'honeycombio',
      terraformGeneratorMetadata: {
        providerName: 'honeycombio',
        providerVersion: '0.44.0',
        providerVersionConstraint: '0.44.0'
      },
      terraformProviderSource: 'honeycombio/honeycombio'
    });
    this._apiKey = config.apiKey;
    this._apiKeyId = config.apiKeyId;
    this._apiKeySecret = config.apiKeySecret;
    this._apiUrl = config.apiUrl;
    this._debug = config.debug;
    this._alias = config.alias;
    this._features = config.features;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_key - computed: false, optional: true, required: false
  private _apiKey?: string; 
  public get apiKey() {
    return this._apiKey;
  }
  public set apiKey(value: string | undefined) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // api_key_id - computed: false, optional: true, required: false
  private _apiKeyId?: string; 
  public get apiKeyId() {
    return this._apiKeyId;
  }
  public set apiKeyId(value: string | undefined) {
    this._apiKeyId = value;
  }
  public resetApiKeyId() {
    this._apiKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyIdInput() {
    return this._apiKeyId;
  }

  // api_key_secret - computed: false, optional: true, required: false
  private _apiKeySecret?: string; 
  public get apiKeySecret() {
    return this._apiKeySecret;
  }
  public set apiKeySecret(value: string | undefined) {
    this._apiKeySecret = value;
  }
  public resetApiKeySecret() {
    this._apiKeySecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeySecretInput() {
    return this._apiKeySecret;
  }

  // api_url - computed: false, optional: true, required: false
  private _apiUrl?: string; 
  public get apiUrl() {
    return this._apiUrl;
  }
  public set apiUrl(value: string | undefined) {
    this._apiUrl = value;
  }
  public resetApiUrl() {
    this._apiUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiUrlInput() {
    return this._apiUrl;
  }

  // debug - computed: false, optional: true, required: false
  private _debug?: boolean | cdktf.IResolvable; 
  public get debug() {
    return this._debug;
  }
  public set debug(value: boolean | cdktf.IResolvable | undefined) {
    this._debug = value;
  }
  public resetDebug() {
    this._debug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugInput() {
    return this._debug;
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

  // features - computed: false, optional: true, required: false
  private _features?: HoneycombioProviderFeatures; 
  public get features() {
    return this._features;
  }
  public set features(value: HoneycombioProviderFeatures | undefined) {
    this._features = value;
  }
  public resetFeatures() {
    this._features = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featuresInput() {
    return this._features;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_key: cdktf.stringToTerraform(this._apiKey),
      api_key_id: cdktf.stringToTerraform(this._apiKeyId),
      api_key_secret: cdktf.stringToTerraform(this._apiKeySecret),
      api_url: cdktf.stringToTerraform(this._apiUrl),
      debug: cdktf.booleanToTerraform(this._debug),
      alias: cdktf.stringToTerraform(this._alias),
      features: honeycombioProviderFeaturesToTerraform(this._features),
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
      api_key_id: {
        value: cdktf.stringToHclTerraform(this._apiKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_key_secret: {
        value: cdktf.stringToHclTerraform(this._apiKeySecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_url: {
        value: cdktf.stringToHclTerraform(this._apiUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      debug: {
        value: cdktf.booleanToHclTerraform(this._debug),
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
      features: {
        value: honeycombioProviderFeaturesToHclTerraform(this._features),
        isBlock: true,
        type: "list",
        storageClassType: "HoneycombioProviderFeaturesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
