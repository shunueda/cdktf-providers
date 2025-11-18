// https://registry.terraform.io/providers/linode/linode/3.6.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LinodeProviderConfig {
  /**
  * The path to a Linode API CA file to trust.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs#api_ca_path LinodeProvider#api_ca_path}
  */
  readonly apiCaPath?: string;
  /**
  * The version of Linode API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs#api_version LinodeProvider#api_version}
  */
  readonly apiVersion?: string;
  /**
  * The path to the Linode config file to use. (default `~/.config/linode`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs#config_path LinodeProvider#config_path}
  */
  readonly configPath?: string;
  /**
  * The Linode config profile to use. (default `default`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs#config_profile LinodeProvider#config_profile}
  */
  readonly configProfile?: string;
  /**
  * Disable the internal caching system that backs certain Linode API requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs#disable_internal_cache LinodeProvider#disable_internal_cache}
  */
  readonly disableInternalCache?: boolean | cdktf.IResolvable;
  /**
  * The rate in milliseconds to poll for events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs#event_poll_ms LinodeProvider#event_poll_ms}
  */
  readonly eventPollMs?: number;
  /**
  * The rate in milliseconds to poll for LKE events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs#lke_event_poll_ms LinodeProvider#lke_event_poll_ms}
  */
  readonly lkeEventPollMs?: number;
  /**
  * The rate in milliseconds to poll for an LKE node to be ready.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs#lke_node_ready_poll_ms LinodeProvider#lke_node_ready_poll_ms}
  */
  readonly lkeNodeReadyPollMs?: number;
  /**
  * Maximum delay in milliseconds before retrying a request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs#max_retry_delay_ms LinodeProvider#max_retry_delay_ms}
  */
  readonly maxRetryDelayMs?: number;
  /**
  * Minimum delay in milliseconds before retrying a request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs#min_retry_delay_ms LinodeProvider#min_retry_delay_ms}
  */
  readonly minRetryDelayMs?: number;
  /**
  * The access key to be used in linode_object_storage_bucket and linode_object_storage_object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs#obj_access_key LinodeProvider#obj_access_key}
  */
  readonly objAccessKey?: string;
  /**
  * If true, when deleting a linode_object_storage_bucket any objects and versions will be force deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs#obj_bucket_force_delete LinodeProvider#obj_bucket_force_delete}
  */
  readonly objBucketForceDelete?: boolean | cdktf.IResolvable;
  /**
  * The secret key to be used in linode_object_storage_bucket and linode_object_storage_object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs#obj_secret_key LinodeProvider#obj_secret_key}
  */
  readonly objSecretKey?: string;
  /**
  * If true, temporary object keys will be created implicitly at apply-time for the linode_object_storage_object and linode_object_sorage_bucket resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs#obj_use_temp_keys LinodeProvider#obj_use_temp_keys}
  */
  readonly objUseTempKeys?: boolean | cdktf.IResolvable;
  /**
  * If true, Linode Instances will not be rebooted on config and interface changes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs#skip_implicit_reboots LinodeProvider#skip_implicit_reboots}
  */
  readonly skipImplicitReboots?: boolean | cdktf.IResolvable;
  /**
  * Skip waiting for a linode_instance resource to finish deleting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs#skip_instance_delete_poll LinodeProvider#skip_instance_delete_poll}
  */
  readonly skipInstanceDeletePoll?: boolean | cdktf.IResolvable;
  /**
  * Skip waiting for a linode_instance resource to be running.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs#skip_instance_ready_poll LinodeProvider#skip_instance_ready_poll}
  */
  readonly skipInstanceReadyPoll?: boolean | cdktf.IResolvable;
  /**
  * The token that allows you access to your Linode account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs#token LinodeProvider#token}
  */
  readonly token?: string;
  /**
  * An HTTP User-Agent Prefix to prepend in API requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs#ua_prefix LinodeProvider#ua_prefix}
  */
  readonly uaPrefix?: string;
  /**
  * The HTTP(S) API address of the Linode API to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs#url LinodeProvider#url}
  */
  readonly url?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs#alias LinodeProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs linode}
*/
export class LinodeProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "linode";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LinodeProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LinodeProvider to import
  * @param importFromId The id of the existing LinodeProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LinodeProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "linode", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs linode} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LinodeProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: LinodeProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'linode',
      terraformGeneratorMetadata: {
        providerName: 'linode',
        providerVersion: '3.6.0',
        providerVersionConstraint: '3.6.0'
      },
      terraformProviderSource: 'linode/linode'
    });
    this._apiCaPath = config.apiCaPath;
    this._apiVersion = config.apiVersion;
    this._configPath = config.configPath;
    this._configProfile = config.configProfile;
    this._disableInternalCache = config.disableInternalCache;
    this._eventPollMs = config.eventPollMs;
    this._lkeEventPollMs = config.lkeEventPollMs;
    this._lkeNodeReadyPollMs = config.lkeNodeReadyPollMs;
    this._maxRetryDelayMs = config.maxRetryDelayMs;
    this._minRetryDelayMs = config.minRetryDelayMs;
    this._objAccessKey = config.objAccessKey;
    this._objBucketForceDelete = config.objBucketForceDelete;
    this._objSecretKey = config.objSecretKey;
    this._objUseTempKeys = config.objUseTempKeys;
    this._skipImplicitReboots = config.skipImplicitReboots;
    this._skipInstanceDeletePoll = config.skipInstanceDeletePoll;
    this._skipInstanceReadyPoll = config.skipInstanceReadyPoll;
    this._token = config.token;
    this._uaPrefix = config.uaPrefix;
    this._url = config.url;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_ca_path - computed: false, optional: true, required: false
  private _apiCaPath?: string; 
  public get apiCaPath() {
    return this._apiCaPath;
  }
  public set apiCaPath(value: string | undefined) {
    this._apiCaPath = value;
  }
  public resetApiCaPath() {
    this._apiCaPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiCaPathInput() {
    return this._apiCaPath;
  }

  // api_version - computed: false, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this._apiVersion;
  }
  public set apiVersion(value: string | undefined) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // config_path - computed: false, optional: true, required: false
  private _configPath?: string; 
  public get configPath() {
    return this._configPath;
  }
  public set configPath(value: string | undefined) {
    this._configPath = value;
  }
  public resetConfigPath() {
    this._configPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configPathInput() {
    return this._configPath;
  }

  // config_profile - computed: false, optional: true, required: false
  private _configProfile?: string; 
  public get configProfile() {
    return this._configProfile;
  }
  public set configProfile(value: string | undefined) {
    this._configProfile = value;
  }
  public resetConfigProfile() {
    this._configProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configProfileInput() {
    return this._configProfile;
  }

  // disable_internal_cache - computed: false, optional: true, required: false
  private _disableInternalCache?: boolean | cdktf.IResolvable; 
  public get disableInternalCache() {
    return this._disableInternalCache;
  }
  public set disableInternalCache(value: boolean | cdktf.IResolvable | undefined) {
    this._disableInternalCache = value;
  }
  public resetDisableInternalCache() {
    this._disableInternalCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInternalCacheInput() {
    return this._disableInternalCache;
  }

  // event_poll_ms - computed: false, optional: true, required: false
  private _eventPollMs?: number; 
  public get eventPollMs() {
    return this._eventPollMs;
  }
  public set eventPollMs(value: number | undefined) {
    this._eventPollMs = value;
  }
  public resetEventPollMs() {
    this._eventPollMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventPollMsInput() {
    return this._eventPollMs;
  }

  // lke_event_poll_ms - computed: false, optional: true, required: false
  private _lkeEventPollMs?: number; 
  public get lkeEventPollMs() {
    return this._lkeEventPollMs;
  }
  public set lkeEventPollMs(value: number | undefined) {
    this._lkeEventPollMs = value;
  }
  public resetLkeEventPollMs() {
    this._lkeEventPollMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lkeEventPollMsInput() {
    return this._lkeEventPollMs;
  }

  // lke_node_ready_poll_ms - computed: false, optional: true, required: false
  private _lkeNodeReadyPollMs?: number; 
  public get lkeNodeReadyPollMs() {
    return this._lkeNodeReadyPollMs;
  }
  public set lkeNodeReadyPollMs(value: number | undefined) {
    this._lkeNodeReadyPollMs = value;
  }
  public resetLkeNodeReadyPollMs() {
    this._lkeNodeReadyPollMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lkeNodeReadyPollMsInput() {
    return this._lkeNodeReadyPollMs;
  }

  // max_retry_delay_ms - computed: false, optional: true, required: false
  private _maxRetryDelayMs?: number; 
  public get maxRetryDelayMs() {
    return this._maxRetryDelayMs;
  }
  public set maxRetryDelayMs(value: number | undefined) {
    this._maxRetryDelayMs = value;
  }
  public resetMaxRetryDelayMs() {
    this._maxRetryDelayMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetryDelayMsInput() {
    return this._maxRetryDelayMs;
  }

  // min_retry_delay_ms - computed: false, optional: true, required: false
  private _minRetryDelayMs?: number; 
  public get minRetryDelayMs() {
    return this._minRetryDelayMs;
  }
  public set minRetryDelayMs(value: number | undefined) {
    this._minRetryDelayMs = value;
  }
  public resetMinRetryDelayMs() {
    this._minRetryDelayMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minRetryDelayMsInput() {
    return this._minRetryDelayMs;
  }

  // obj_access_key - computed: false, optional: true, required: false
  private _objAccessKey?: string; 
  public get objAccessKey() {
    return this._objAccessKey;
  }
  public set objAccessKey(value: string | undefined) {
    this._objAccessKey = value;
  }
  public resetObjAccessKey() {
    this._objAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objAccessKeyInput() {
    return this._objAccessKey;
  }

  // obj_bucket_force_delete - computed: false, optional: true, required: false
  private _objBucketForceDelete?: boolean | cdktf.IResolvable; 
  public get objBucketForceDelete() {
    return this._objBucketForceDelete;
  }
  public set objBucketForceDelete(value: boolean | cdktf.IResolvable | undefined) {
    this._objBucketForceDelete = value;
  }
  public resetObjBucketForceDelete() {
    this._objBucketForceDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objBucketForceDeleteInput() {
    return this._objBucketForceDelete;
  }

  // obj_secret_key - computed: false, optional: true, required: false
  private _objSecretKey?: string; 
  public get objSecretKey() {
    return this._objSecretKey;
  }
  public set objSecretKey(value: string | undefined) {
    this._objSecretKey = value;
  }
  public resetObjSecretKey() {
    this._objSecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objSecretKeyInput() {
    return this._objSecretKey;
  }

  // obj_use_temp_keys - computed: false, optional: true, required: false
  private _objUseTempKeys?: boolean | cdktf.IResolvable; 
  public get objUseTempKeys() {
    return this._objUseTempKeys;
  }
  public set objUseTempKeys(value: boolean | cdktf.IResolvable | undefined) {
    this._objUseTempKeys = value;
  }
  public resetObjUseTempKeys() {
    this._objUseTempKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objUseTempKeysInput() {
    return this._objUseTempKeys;
  }

  // skip_implicit_reboots - computed: false, optional: true, required: false
  private _skipImplicitReboots?: boolean | cdktf.IResolvable; 
  public get skipImplicitReboots() {
    return this._skipImplicitReboots;
  }
  public set skipImplicitReboots(value: boolean | cdktf.IResolvable | undefined) {
    this._skipImplicitReboots = value;
  }
  public resetSkipImplicitReboots() {
    this._skipImplicitReboots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipImplicitRebootsInput() {
    return this._skipImplicitReboots;
  }

  // skip_instance_delete_poll - computed: false, optional: true, required: false
  private _skipInstanceDeletePoll?: boolean | cdktf.IResolvable; 
  public get skipInstanceDeletePoll() {
    return this._skipInstanceDeletePoll;
  }
  public set skipInstanceDeletePoll(value: boolean | cdktf.IResolvable | undefined) {
    this._skipInstanceDeletePoll = value;
  }
  public resetSkipInstanceDeletePoll() {
    this._skipInstanceDeletePoll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipInstanceDeletePollInput() {
    return this._skipInstanceDeletePoll;
  }

  // skip_instance_ready_poll - computed: false, optional: true, required: false
  private _skipInstanceReadyPoll?: boolean | cdktf.IResolvable; 
  public get skipInstanceReadyPoll() {
    return this._skipInstanceReadyPoll;
  }
  public set skipInstanceReadyPoll(value: boolean | cdktf.IResolvable | undefined) {
    this._skipInstanceReadyPoll = value;
  }
  public resetSkipInstanceReadyPoll() {
    this._skipInstanceReadyPoll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipInstanceReadyPollInput() {
    return this._skipInstanceReadyPoll;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this._token;
  }
  public set token(value: string | undefined) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // ua_prefix - computed: false, optional: true, required: false
  private _uaPrefix?: string; 
  public get uaPrefix() {
    return this._uaPrefix;
  }
  public set uaPrefix(value: string | undefined) {
    this._uaPrefix = value;
  }
  public resetUaPrefix() {
    this._uaPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uaPrefixInput() {
    return this._uaPrefix;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this._url;
  }
  public set url(value: string | undefined) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
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
      api_ca_path: cdktf.stringToTerraform(this._apiCaPath),
      api_version: cdktf.stringToTerraform(this._apiVersion),
      config_path: cdktf.stringToTerraform(this._configPath),
      config_profile: cdktf.stringToTerraform(this._configProfile),
      disable_internal_cache: cdktf.booleanToTerraform(this._disableInternalCache),
      event_poll_ms: cdktf.numberToTerraform(this._eventPollMs),
      lke_event_poll_ms: cdktf.numberToTerraform(this._lkeEventPollMs),
      lke_node_ready_poll_ms: cdktf.numberToTerraform(this._lkeNodeReadyPollMs),
      max_retry_delay_ms: cdktf.numberToTerraform(this._maxRetryDelayMs),
      min_retry_delay_ms: cdktf.numberToTerraform(this._minRetryDelayMs),
      obj_access_key: cdktf.stringToTerraform(this._objAccessKey),
      obj_bucket_force_delete: cdktf.booleanToTerraform(this._objBucketForceDelete),
      obj_secret_key: cdktf.stringToTerraform(this._objSecretKey),
      obj_use_temp_keys: cdktf.booleanToTerraform(this._objUseTempKeys),
      skip_implicit_reboots: cdktf.booleanToTerraform(this._skipImplicitReboots),
      skip_instance_delete_poll: cdktf.booleanToTerraform(this._skipInstanceDeletePoll),
      skip_instance_ready_poll: cdktf.booleanToTerraform(this._skipInstanceReadyPoll),
      token: cdktf.stringToTerraform(this._token),
      ua_prefix: cdktf.stringToTerraform(this._uaPrefix),
      url: cdktf.stringToTerraform(this._url),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_ca_path: {
        value: cdktf.stringToHclTerraform(this._apiCaPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_version: {
        value: cdktf.stringToHclTerraform(this._apiVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_path: {
        value: cdktf.stringToHclTerraform(this._configPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_profile: {
        value: cdktf.stringToHclTerraform(this._configProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_internal_cache: {
        value: cdktf.booleanToHclTerraform(this._disableInternalCache),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      event_poll_ms: {
        value: cdktf.numberToHclTerraform(this._eventPollMs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      lke_event_poll_ms: {
        value: cdktf.numberToHclTerraform(this._lkeEventPollMs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      lke_node_ready_poll_ms: {
        value: cdktf.numberToHclTerraform(this._lkeNodeReadyPollMs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_retry_delay_ms: {
        value: cdktf.numberToHclTerraform(this._maxRetryDelayMs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_retry_delay_ms: {
        value: cdktf.numberToHclTerraform(this._minRetryDelayMs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      obj_access_key: {
        value: cdktf.stringToHclTerraform(this._objAccessKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      obj_bucket_force_delete: {
        value: cdktf.booleanToHclTerraform(this._objBucketForceDelete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      obj_secret_key: {
        value: cdktf.stringToHclTerraform(this._objSecretKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      obj_use_temp_keys: {
        value: cdktf.booleanToHclTerraform(this._objUseTempKeys),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      skip_implicit_reboots: {
        value: cdktf.booleanToHclTerraform(this._skipImplicitReboots),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      skip_instance_delete_poll: {
        value: cdktf.booleanToHclTerraform(this._skipInstanceDeletePoll),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      skip_instance_ready_poll: {
        value: cdktf.booleanToHclTerraform(this._skipInstanceReadyPoll),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      token: {
        value: cdktf.stringToHclTerraform(this._token),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ua_prefix: {
        value: cdktf.stringToHclTerraform(this._uaPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
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
