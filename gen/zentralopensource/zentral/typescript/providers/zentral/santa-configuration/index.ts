// https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/santa_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SantaConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Restrict the reporting of 'Allow Unknown' events to a percentage (0-100) of hosts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/santa_configuration#allow_unknown_shard SantaConfiguration#allow_unknown_shard}
  */
  readonly allowUnknownShard?: number;
  /**
  * A regex to allow if the binary, certificate, or Team ID scopes did not allow/block execution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/santa_configuration#allowed_path_regex SantaConfiguration#allowed_path_regex}
  */
  readonly allowedPathRegex?: string;
  /**
  * The number of rules to download or events to upload per request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/santa_configuration#batch_size SantaConfiguration#batch_size}
  */
  readonly batchSize?: number;
  /**
  * If set to `true` blocking USB Mass storage feature is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/santa_configuration#block_usb_mount SantaConfiguration#block_usb_mount}
  */
  readonly blockUsbMount?: boolean | cdktf.IResolvable;
  /**
  * A regex to block if the binary, certificate, or Team ID scopes did not allow/block an execution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/santa_configuration#blocked_path_regex SantaConfiguration#blocked_path_regex}
  */
  readonly blockedPathRegex?: string;
  /**
  * If `true`, mTLS is required between Santa and Zentral.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/santa_configuration#client_certificate_auth SantaConfiguration#client_certificate_auth}
  */
  readonly clientCertificateAuth?: boolean | cdktf.IResolvable;
  /**
  * Client mode of the Santa configuration. Valid values are `MONITOR` and `LOCKDOWN`. Defaults to `MONITOR`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/santa_configuration#client_mode SantaConfiguration#client_mode}
  */
  readonly clientMode?: string;
  /**
  * Restrict the upload of all execution events to Zentral, including those that were explicitly allowed, to a percentage (0-100) of hosts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/santa_configuration#enable_all_event_upload_shard SantaConfiguration#enable_all_event_upload_shard}
  */
  readonly enableAllEventUploadShard?: number;
  /**
  * If set to `true` the bundle scanning feature is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/santa_configuration#enable_bundles SantaConfiguration#enable_bundles}
  */
  readonly enableBundles?: boolean | cdktf.IResolvable;
  /**
  * If set to `true` the transitive rule feature is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/santa_configuration#enable_transitive_rules SantaConfiguration#enable_transitive_rules}
  */
  readonly enableTransitiveRules?: boolean | cdktf.IResolvable;
  /**
  * The max time to wait before performing a full sync with the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/santa_configuration#full_sync_interval SantaConfiguration#full_sync_interval}
  */
  readonly fullSyncInterval?: number;
  /**
  * Name of the Santa configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/santa_configuration#name SantaConfiguration#name}
  */
  readonly name: string;
  /**
  * Array of strings for arguments to pass to `mount -o`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/santa_configuration#remount_usb_mode SantaConfiguration#remount_usb_mode}
  */
  readonly remountUsbMode?: string[];
  /**
  * If 100, 200, 300, incidents will be automatically opened and closed when the santa agent rules are out of sync.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/santa_configuration#sync_incident_severity SantaConfiguration#sync_incident_severity}
  */
  readonly syncIncidentSeverity?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/santa_configuration zentral_santa_configuration}
*/
export class SantaConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zentral_santa_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SantaConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SantaConfiguration to import
  * @param importFromId The id of the existing SantaConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/santa_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SantaConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zentral_santa_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/santa_configuration zentral_santa_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SantaConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: SantaConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'zentral_santa_configuration',
      terraformGeneratorMetadata: {
        providerName: 'zentral',
        providerVersion: '0.1.67',
        providerVersionConstraint: '0.1.67'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowUnknownShard = config.allowUnknownShard;
    this._allowedPathRegex = config.allowedPathRegex;
    this._batchSize = config.batchSize;
    this._blockUsbMount = config.blockUsbMount;
    this._blockedPathRegex = config.blockedPathRegex;
    this._clientCertificateAuth = config.clientCertificateAuth;
    this._clientMode = config.clientMode;
    this._enableAllEventUploadShard = config.enableAllEventUploadShard;
    this._enableBundles = config.enableBundles;
    this._enableTransitiveRules = config.enableTransitiveRules;
    this._fullSyncInterval = config.fullSyncInterval;
    this._name = config.name;
    this._remountUsbMode = config.remountUsbMode;
    this._syncIncidentSeverity = config.syncIncidentSeverity;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_unknown_shard - computed: true, optional: true, required: false
  private _allowUnknownShard?: number; 
  public get allowUnknownShard() {
    return this.getNumberAttribute('allow_unknown_shard');
  }
  public set allowUnknownShard(value: number) {
    this._allowUnknownShard = value;
  }
  public resetAllowUnknownShard() {
    this._allowUnknownShard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUnknownShardInput() {
    return this._allowUnknownShard;
  }

  // allowed_path_regex - computed: true, optional: true, required: false
  private _allowedPathRegex?: string; 
  public get allowedPathRegex() {
    return this.getStringAttribute('allowed_path_regex');
  }
  public set allowedPathRegex(value: string) {
    this._allowedPathRegex = value;
  }
  public resetAllowedPathRegex() {
    this._allowedPathRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedPathRegexInput() {
    return this._allowedPathRegex;
  }

  // batch_size - computed: true, optional: true, required: false
  private _batchSize?: number; 
  public get batchSize() {
    return this.getNumberAttribute('batch_size');
  }
  public set batchSize(value: number) {
    this._batchSize = value;
  }
  public resetBatchSize() {
    this._batchSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchSizeInput() {
    return this._batchSize;
  }

  // block_usb_mount - computed: true, optional: true, required: false
  private _blockUsbMount?: boolean | cdktf.IResolvable; 
  public get blockUsbMount() {
    return this.getBooleanAttribute('block_usb_mount');
  }
  public set blockUsbMount(value: boolean | cdktf.IResolvable) {
    this._blockUsbMount = value;
  }
  public resetBlockUsbMount() {
    this._blockUsbMount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockUsbMountInput() {
    return this._blockUsbMount;
  }

  // blocked_path_regex - computed: true, optional: true, required: false
  private _blockedPathRegex?: string; 
  public get blockedPathRegex() {
    return this.getStringAttribute('blocked_path_regex');
  }
  public set blockedPathRegex(value: string) {
    this._blockedPathRegex = value;
  }
  public resetBlockedPathRegex() {
    this._blockedPathRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockedPathRegexInput() {
    return this._blockedPathRegex;
  }

  // client_certificate_auth - computed: true, optional: true, required: false
  private _clientCertificateAuth?: boolean | cdktf.IResolvable; 
  public get clientCertificateAuth() {
    return this.getBooleanAttribute('client_certificate_auth');
  }
  public set clientCertificateAuth(value: boolean | cdktf.IResolvable) {
    this._clientCertificateAuth = value;
  }
  public resetClientCertificateAuth() {
    this._clientCertificateAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateAuthInput() {
    return this._clientCertificateAuth;
  }

  // client_mode - computed: true, optional: true, required: false
  private _clientMode?: string; 
  public get clientMode() {
    return this.getStringAttribute('client_mode');
  }
  public set clientMode(value: string) {
    this._clientMode = value;
  }
  public resetClientMode() {
    this._clientMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientModeInput() {
    return this._clientMode;
  }

  // enable_all_event_upload_shard - computed: true, optional: true, required: false
  private _enableAllEventUploadShard?: number; 
  public get enableAllEventUploadShard() {
    return this.getNumberAttribute('enable_all_event_upload_shard');
  }
  public set enableAllEventUploadShard(value: number) {
    this._enableAllEventUploadShard = value;
  }
  public resetEnableAllEventUploadShard() {
    this._enableAllEventUploadShard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAllEventUploadShardInput() {
    return this._enableAllEventUploadShard;
  }

  // enable_bundles - computed: true, optional: true, required: false
  private _enableBundles?: boolean | cdktf.IResolvable; 
  public get enableBundles() {
    return this.getBooleanAttribute('enable_bundles');
  }
  public set enableBundles(value: boolean | cdktf.IResolvable) {
    this._enableBundles = value;
  }
  public resetEnableBundles() {
    this._enableBundles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableBundlesInput() {
    return this._enableBundles;
  }

  // enable_transitive_rules - computed: true, optional: true, required: false
  private _enableTransitiveRules?: boolean | cdktf.IResolvable; 
  public get enableTransitiveRules() {
    return this.getBooleanAttribute('enable_transitive_rules');
  }
  public set enableTransitiveRules(value: boolean | cdktf.IResolvable) {
    this._enableTransitiveRules = value;
  }
  public resetEnableTransitiveRules() {
    this._enableTransitiveRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTransitiveRulesInput() {
    return this._enableTransitiveRules;
  }

  // full_sync_interval - computed: true, optional: true, required: false
  private _fullSyncInterval?: number; 
  public get fullSyncInterval() {
    return this.getNumberAttribute('full_sync_interval');
  }
  public set fullSyncInterval(value: number) {
    this._fullSyncInterval = value;
  }
  public resetFullSyncInterval() {
    this._fullSyncInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullSyncIntervalInput() {
    return this._fullSyncInterval;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // remount_usb_mode - computed: true, optional: true, required: false
  private _remountUsbMode?: string[]; 
  public get remountUsbMode() {
    return cdktf.Fn.tolist(this.getListAttribute('remount_usb_mode'));
  }
  public set remountUsbMode(value: string[]) {
    this._remountUsbMode = value;
  }
  public resetRemountUsbMode() {
    this._remountUsbMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remountUsbModeInput() {
    return this._remountUsbMode;
  }

  // sync_incident_severity - computed: true, optional: true, required: false
  private _syncIncidentSeverity?: number; 
  public get syncIncidentSeverity() {
    return this.getNumberAttribute('sync_incident_severity');
  }
  public set syncIncidentSeverity(value: number) {
    this._syncIncidentSeverity = value;
  }
  public resetSyncIncidentSeverity() {
    this._syncIncidentSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncIncidentSeverityInput() {
    return this._syncIncidentSeverity;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_unknown_shard: cdktf.numberToTerraform(this._allowUnknownShard),
      allowed_path_regex: cdktf.stringToTerraform(this._allowedPathRegex),
      batch_size: cdktf.numberToTerraform(this._batchSize),
      block_usb_mount: cdktf.booleanToTerraform(this._blockUsbMount),
      blocked_path_regex: cdktf.stringToTerraform(this._blockedPathRegex),
      client_certificate_auth: cdktf.booleanToTerraform(this._clientCertificateAuth),
      client_mode: cdktf.stringToTerraform(this._clientMode),
      enable_all_event_upload_shard: cdktf.numberToTerraform(this._enableAllEventUploadShard),
      enable_bundles: cdktf.booleanToTerraform(this._enableBundles),
      enable_transitive_rules: cdktf.booleanToTerraform(this._enableTransitiveRules),
      full_sync_interval: cdktf.numberToTerraform(this._fullSyncInterval),
      name: cdktf.stringToTerraform(this._name),
      remount_usb_mode: cdktf.listMapper(cdktf.stringToTerraform, false)(this._remountUsbMode),
      sync_incident_severity: cdktf.numberToTerraform(this._syncIncidentSeverity),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_unknown_shard: {
        value: cdktf.numberToHclTerraform(this._allowUnknownShard),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      allowed_path_regex: {
        value: cdktf.stringToHclTerraform(this._allowedPathRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      batch_size: {
        value: cdktf.numberToHclTerraform(this._batchSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      block_usb_mount: {
        value: cdktf.booleanToHclTerraform(this._blockUsbMount),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      blocked_path_regex: {
        value: cdktf.stringToHclTerraform(this._blockedPathRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_certificate_auth: {
        value: cdktf.booleanToHclTerraform(this._clientCertificateAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      client_mode: {
        value: cdktf.stringToHclTerraform(this._clientMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_all_event_upload_shard: {
        value: cdktf.numberToHclTerraform(this._enableAllEventUploadShard),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable_bundles: {
        value: cdktf.booleanToHclTerraform(this._enableBundles),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_transitive_rules: {
        value: cdktf.booleanToHclTerraform(this._enableTransitiveRules),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      full_sync_interval: {
        value: cdktf.numberToHclTerraform(this._fullSyncInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remount_usb_mode: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._remountUsbMode),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      sync_incident_severity: {
        value: cdktf.numberToHclTerraform(this._syncIncidentSeverity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
