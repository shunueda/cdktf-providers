// https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.3/docs/resources/vault_start
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VaultStartConfig extends cdktf.TerraformMetaArguments {
  /**
  * The fully qualified path to the vault binary
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.3/docs/resources/vault_start#bin_path VaultStart#bin_path}
  */
  readonly binPath: string;
  /**
  * 
  * - `config.api_addr` (String) The Vault [api_addr](https://developer.hashicorp.com/vault/docs/configuration#api_addr) value
  * - `config.cluster_addr` (String) The Vault [cluster_addr](https://developer.hashicorp.com/vault/docs/configuration#cluster_addr) value
  * - `config.cluster_name` (String) The Vault [cluster_addr](https://developer.hashicorp.com/vault/docs/configuration#cluster_addr) value
  * - `config.listener` (Object) The Vault [listener](https://developer.hashicorp.com/vault/docs/configuration/listener) stanza
  * - `config.listener.type` (String) The Vault [listener](https://developer.hashicorp.com/vault/docs/configuration/listener/tcp) stanza value. Currently 'tcp' is the only supported listener
  * - `config.listener.attributes` (Object) The Vault [listener](https://developer.hashicorp.com/vault/docs/configuration/listener/tcp#tcp-listener-parameters) top-level parameters for the listener
  * - `config.listener.telemetry` (Object) The Vault listener [telemetry](https://developer.hashicorp.com/vault/docs/configuration/listener/tcp#telemetry-parameters) stanza
  * - `config.listener.profiling` (Object) The Vault listener [profiling](https://developer.hashicorp.com/vault/docs/configuration/listener/tcp#profiling-parameters) stanza
  * - `config.listener.inflight_requests_logging` (Object) The Vault listener [inflight_requests_logging](https://developer.hashicorp.com/vault/docs/configuration/listener/tcp#inflight_requests_logging-parameters) stanza
  * - `config.listener.custom_response_headers` (Object) The Vault listener [custom_response_headers](https://developer.hashicorp.com/vault/docs/configuration/listener/tcp#custom_response_headers-parameters) stanza
  * - `config.log_level` (String) The Vault [log_level](https://developer.hashicorp.com/vault/docs/configuration#log_level)
  * - `config.storage` (Object) The Vault [storage](https://developer.hashicorp.com/vault/docs/configuration/storage) stanza
  * - `config.storage.type` (String) The Vault [storage](https://developer.hashicorp.com/vault/docs/configuration/storage) type
  * - `config.storage.attributes` (Object) The Vault [storage](https://developer.hashicorp.com/vault/docs/configuration/storage) parameters for the given storage type
  * - `config.storage.retry_join` (Object) The Vault integrated storage [retry_join](https://developer.hashicorp.com/vault/docs/configuration/storage/raft#retry_join-stanza) stanza
  * - `config.seal` (Object) The Vault [seal](https://developer.hashicorp.com/vault/docs/configuration/seal) stanza
  * - `config.seal.type` (String) The Vault [seal](https://developer.hashicorp.com/vault/docs/configuration/seal) type
  * - `config.seal.attributes` (String) The Vault [seal](https://developer.hashicorp.com/vault/docs/configuration/seal) parameters for the given seal type
  * - `config.seals` (Object) Vault Enterprise [HA seal](https://developer.hashicorp.com/vault/docs/configuration/seal/seal-ha) configuration. Cannot be used in conjunction with `config.seal`. Up to three seals can be defined but only one is required.
  * - `config.seals.primary` (Object) The primary [HA seal](https://developer.hashicorp.com/vault/docs/configuration/seal/seal-ha) stanza. Primary has priority 1
  * - `config.seals.primary.type` (String) The Vault [seal](https://developer.hashicorp.com/vault/docs/configuration/seal) type
  * - `config.seals.primary.attributes` (String) The Vault [seal](https://developer.hashicorp.com/vault/docs/configuration/seal) parameters for the given seal type
  * - `config.seals.secondary` (Object) The secondary [HA seal](https://developer.hashicorp.com/vault/docs/configuration/seal/seal-ha) stanza. Secondary has priority 2
  * - `config.seals.secondary.type` (String) The Vault [seal](https://developer.hashicorp.com/vault/docs/configuration/seal) type
  * - `config.seals.secondary.attributes` (String) The Vault [seal](https://developer.hashicorp.com/vault/docs/configuration/seal) parameters for the given seal type
  * - `config.seals.tertiary` (Object) The tertiary [HA seal](https://developer.hashicorp.com/vault/docs/configuration/seal/seal-ha) stanza. Tertiary has priority 3
  * - `config.seals.tertiary.type` (String) The Vault [seal](https://developer.hashicorp.com/vault/docs/configuration/seal) type
  * - `config.seals.tertiary.attributes` (String) The Vault [seal](https://developer.hashicorp.com/vault/docs/configuration/seal) parameters for the given seal type
  * - `config.telemetry` (Object) The Vault [telemetry](https://developer.hashicorp.com/vault/docs/configuration/telemetry#telemetry-parameters) stanza
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.3/docs/resources/vault_start#config VaultStart#config}
  */
  readonly config: VaultStartConfigA;
  /**
  * The path where Vault configuration will reside
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.3/docs/resources/vault_start#config_dir VaultStart#config_dir}
  */
  readonly configDir?: string;
  /**
  * The preferred method of configuring vault. Valid options are 'file' or 'env'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.3/docs/resources/vault_start#config_mode VaultStart#config_mode}
  */
  readonly configMode?: string;
  /**
  * An optional map of key/value pairs for additional environment variables to set when running the vault service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.3/docs/resources/vault_start#environment VaultStart#environment}
  */
  readonly environment?: { [key: string]: string };
  /**
  * The Vault Enterprise license
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.3/docs/resources/vault_start#license VaultStart#license}
  */
  readonly license?: string;
  /**
  * Whether or not Enos will be responsible for creating and managing the systemd unit for Vault
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.3/docs/resources/vault_start#manage_service VaultStart#manage_service}
  */
  readonly manageService?: boolean | cdktf.IResolvable;
  /**
  * 
  * - `transport.ssh` (Object) the ssh transport configuration
  * - `transport.ssh.user` (String) the ssh login user|string
  * - `transport.ssh.host` (String) the remote host to access
  * - `transport.ssh.private_key` (String) the private key as a string
  * - `transport.ssh.private_key_path` (String) the path to a private key file
  * - `transport.ssh.passphrase` (String) a passphrase if the private key requires one
  * - `transport.ssh.passphrase_path` (String) a path to a file with the passphrase for the private key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.3/docs/resources/vault_start#transport VaultStart#transport}
  */
  readonly transport?: { [key: string]: any };
  /**
  * The systemd unit name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.3/docs/resources/vault_start#unit_name VaultStart#unit_name}
  */
  readonly unitName?: string;
  /**
  * The local service user name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.3/docs/resources/vault_start#username VaultStart#username}
  */
  readonly username?: string;
}
export interface VaultStartConfigSeal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.3/docs/resources/vault_start#attributes VaultStart#attributes}
  */
  readonly attributes: { [key: string]: any };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.3/docs/resources/vault_start#type VaultStart#type}
  */
  readonly type: string;
}

export function vaultStartConfigSealToTerraform(struct?: VaultStartConfigSeal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attributes: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.attributes),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function vaultStartConfigSealToHclTerraform(struct?: VaultStartConfigSeal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attributes: {
      value: cdktf.hashMapperHcl(cdktf.anyToHclTerraform)(struct!.attributes),
      isBlock: false,
      type: "map",
      storageClassType: "anyMap",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VaultStartConfigSealOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VaultStartConfigSeal | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VaultStartConfigSeal | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributes = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributes = value.attributes;
      this._type = value.type;
    }
  }

  // attributes - computed: false, optional: false, required: true
  private _attributes?: { [key: string]: any }; 
  public get attributes() {
    return this.getAnyMapAttribute('attributes');
  }
  public set attributes(value: { [key: string]: any }) {
    this._attributes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface VaultStartConfigA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.3/docs/resources/vault_start#api_addr VaultStart#api_addr}
  */
  readonly apiAddr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.3/docs/resources/vault_start#cluster_addr VaultStart#cluster_addr}
  */
  readonly clusterAddr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.3/docs/resources/vault_start#cluster_name VaultStart#cluster_name}
  */
  readonly clusterName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.3/docs/resources/vault_start#listener VaultStart#listener}
  */
  readonly listener: { [key: string]: any };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.3/docs/resources/vault_start#log_level VaultStart#log_level}
  */
  readonly logLevel: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.3/docs/resources/vault_start#seal VaultStart#seal}
  */
  readonly seal: VaultStartConfigSeal;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.3/docs/resources/vault_start#seals VaultStart#seals}
  */
  readonly seals: { [key: string]: any };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.3/docs/resources/vault_start#storage VaultStart#storage}
  */
  readonly storage: { [key: string]: any };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.3/docs/resources/vault_start#telemetry VaultStart#telemetry}
  */
  readonly telemetry: { [key: string]: any };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.3/docs/resources/vault_start#ui VaultStart#ui}
  */
  readonly ui: boolean | cdktf.IResolvable;
}

export function vaultStartConfigAToTerraform(struct?: VaultStartConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_addr: cdktf.stringToTerraform(struct!.apiAddr),
    cluster_addr: cdktf.stringToTerraform(struct!.clusterAddr),
    cluster_name: cdktf.stringToTerraform(struct!.clusterName),
    listener: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.listener),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
    seal: vaultStartConfigSealToTerraform(struct!.seal),
    seals: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.seals),
    storage: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.storage),
    telemetry: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.telemetry),
    ui: cdktf.booleanToTerraform(struct!.ui),
  }
}


export function vaultStartConfigAToHclTerraform(struct?: VaultStartConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_addr: {
      value: cdktf.stringToHclTerraform(struct!.apiAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_addr: {
      value: cdktf.stringToHclTerraform(struct!.clusterAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_name: {
      value: cdktf.stringToHclTerraform(struct!.clusterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    listener: {
      value: cdktf.hashMapperHcl(cdktf.anyToHclTerraform)(struct!.listener),
      isBlock: false,
      type: "map",
      storageClassType: "anyMap",
    },
    log_level: {
      value: cdktf.stringToHclTerraform(struct!.logLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    seal: {
      value: vaultStartConfigSealToHclTerraform(struct!.seal),
      isBlock: true,
      type: "struct",
      storageClassType: "VaultStartConfigSeal",
    },
    seals: {
      value: cdktf.hashMapperHcl(cdktf.anyToHclTerraform)(struct!.seals),
      isBlock: false,
      type: "map",
      storageClassType: "anyMap",
    },
    storage: {
      value: cdktf.hashMapperHcl(cdktf.anyToHclTerraform)(struct!.storage),
      isBlock: false,
      type: "map",
      storageClassType: "anyMap",
    },
    telemetry: {
      value: cdktf.hashMapperHcl(cdktf.anyToHclTerraform)(struct!.telemetry),
      isBlock: false,
      type: "map",
      storageClassType: "anyMap",
    },
    ui: {
      value: cdktf.booleanToHclTerraform(struct!.ui),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VaultStartConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VaultStartConfigA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiAddr = this._apiAddr;
    }
    if (this._clusterAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterAddr = this._clusterAddr;
    }
    if (this._clusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterName = this._clusterName;
    }
    if (this._listener !== undefined) {
      hasAnyValues = true;
      internalValueResult.listener = this._listener;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    if (this._seal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seal = this._seal?.internalValue;
    }
    if (this._seals !== undefined) {
      hasAnyValues = true;
      internalValueResult.seals = this._seals;
    }
    if (this._storage !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage;
    }
    if (this._telemetry !== undefined) {
      hasAnyValues = true;
      internalValueResult.telemetry = this._telemetry;
    }
    if (this._ui !== undefined) {
      hasAnyValues = true;
      internalValueResult.ui = this._ui;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VaultStartConfigA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiAddr = undefined;
      this._clusterAddr = undefined;
      this._clusterName = undefined;
      this._listener = undefined;
      this._logLevel = undefined;
      this._seal.internalValue = undefined;
      this._seals = undefined;
      this._storage = undefined;
      this._telemetry = undefined;
      this._ui = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiAddr = value.apiAddr;
      this._clusterAddr = value.clusterAddr;
      this._clusterName = value.clusterName;
      this._listener = value.listener;
      this._logLevel = value.logLevel;
      this._seal.internalValue = value.seal;
      this._seals = value.seals;
      this._storage = value.storage;
      this._telemetry = value.telemetry;
      this._ui = value.ui;
    }
  }

  // api_addr - computed: false, optional: false, required: true
  private _apiAddr?: string; 
  public get apiAddr() {
    return this.getStringAttribute('api_addr');
  }
  public set apiAddr(value: string) {
    this._apiAddr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiAddrInput() {
    return this._apiAddr;
  }

  // cluster_addr - computed: false, optional: false, required: true
  private _clusterAddr?: string; 
  public get clusterAddr() {
    return this.getStringAttribute('cluster_addr');
  }
  public set clusterAddr(value: string) {
    this._clusterAddr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterAddrInput() {
    return this._clusterAddr;
  }

  // cluster_name - computed: false, optional: false, required: true
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // listener - computed: false, optional: false, required: true
  private _listener?: { [key: string]: any }; 
  public get listener() {
    return this.getAnyMapAttribute('listener');
  }
  public set listener(value: { [key: string]: any }) {
    this._listener = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerInput() {
    return this._listener;
  }

  // log_level - computed: false, optional: false, required: true
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }

  // seal - computed: false, optional: false, required: true
  private _seal = new VaultStartConfigSealOutputReference(this, "seal");
  public get seal() {
    return this._seal;
  }
  public putSeal(value: VaultStartConfigSeal) {
    this._seal.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sealInput() {
    return this._seal.internalValue;
  }

  // seals - computed: false, optional: false, required: true
  private _seals?: { [key: string]: any }; 
  public get seals() {
    return this.getAnyMapAttribute('seals');
  }
  public set seals(value: { [key: string]: any }) {
    this._seals = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sealsInput() {
    return this._seals;
  }

  // storage - computed: false, optional: false, required: true
  private _storage?: { [key: string]: any }; 
  public get storage() {
    return this.getAnyMapAttribute('storage');
  }
  public set storage(value: { [key: string]: any }) {
    this._storage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage;
  }

  // telemetry - computed: false, optional: false, required: true
  private _telemetry?: { [key: string]: any }; 
  public get telemetry() {
    return this.getAnyMapAttribute('telemetry');
  }
  public set telemetry(value: { [key: string]: any }) {
    this._telemetry = value;
  }
  // Temporarily expose input value. Use with caution.
  public get telemetryInput() {
    return this._telemetry;
  }

  // ui - computed: false, optional: false, required: true
  private _ui?: boolean | cdktf.IResolvable; 
  public get ui() {
    return this.getBooleanAttribute('ui');
  }
  public set ui(value: boolean | cdktf.IResolvable) {
    this._ui = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uiInput() {
    return this._ui;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.3/docs/resources/vault_start enos_vault_start}
*/
export class VaultStart extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "enos_vault_start";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VaultStart resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VaultStart to import
  * @param importFromId The id of the existing VaultStart that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.3/docs/resources/vault_start#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VaultStart to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "enos_vault_start", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.3/docs/resources/vault_start enos_vault_start} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VaultStartConfig
  */
  public constructor(scope: Construct, id: string, config: VaultStartConfig) {
    super(scope, id, {
      terraformResourceType: 'enos_vault_start',
      terraformGeneratorMetadata: {
        providerName: 'enos',
        providerVersion: '0.6.3',
        providerVersionConstraint: '0.6.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._binPath = config.binPath;
    this._config.internalValue = config.config;
    this._configDir = config.configDir;
    this._configMode = config.configMode;
    this._environment = config.environment;
    this._license = config.license;
    this._manageService = config.manageService;
    this._transport = config.transport;
    this._unitName = config.unitName;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bin_path - computed: false, optional: false, required: true
  private _binPath?: string; 
  public get binPath() {
    return this.getStringAttribute('bin_path');
  }
  public set binPath(value: string) {
    this._binPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get binPathInput() {
    return this._binPath;
  }

  // config - computed: false, optional: false, required: true
  private _config = new VaultStartConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: VaultStartConfigA) {
    this._config.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // config_dir - computed: false, optional: true, required: false
  private _configDir?: string; 
  public get configDir() {
    return this.getStringAttribute('config_dir');
  }
  public set configDir(value: string) {
    this._configDir = value;
  }
  public resetConfigDir() {
    this._configDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configDirInput() {
    return this._configDir;
  }

  // config_mode - computed: false, optional: true, required: false
  private _configMode?: string; 
  public get configMode() {
    return this.getStringAttribute('config_mode');
  }
  public set configMode(value: string) {
    this._configMode = value;
  }
  public resetConfigMode() {
    this._configMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configModeInput() {
    return this._configMode;
  }

  // environment - computed: false, optional: true, required: false
  private _environment?: { [key: string]: string }; 
  public get environment() {
    return this.getStringMapAttribute('environment');
  }
  public set environment(value: { [key: string]: string }) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // license - computed: false, optional: true, required: false
  private _license?: string; 
  public get license() {
    return this.getStringAttribute('license');
  }
  public set license(value: string) {
    this._license = value;
  }
  public resetLicense() {
    this._license = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseInput() {
    return this._license;
  }

  // manage_service - computed: false, optional: true, required: false
  private _manageService?: boolean | cdktf.IResolvable; 
  public get manageService() {
    return this.getBooleanAttribute('manage_service');
  }
  public set manageService(value: boolean | cdktf.IResolvable) {
    this._manageService = value;
  }
  public resetManageService() {
    this._manageService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manageServiceInput() {
    return this._manageService;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // transport - computed: false, optional: true, required: false
  private _transport?: { [key: string]: any }; 
  public get transport() {
    return this.getAnyMapAttribute('transport');
  }
  public set transport(value: { [key: string]: any }) {
    this._transport = value;
  }
  public resetTransport() {
    this._transport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportInput() {
    return this._transport;
  }

  // unit_name - computed: false, optional: true, required: false
  private _unitName?: string; 
  public get unitName() {
    return this.getStringAttribute('unit_name');
  }
  public set unitName(value: string) {
    this._unitName = value;
  }
  public resetUnitName() {
    this._unitName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitNameInput() {
    return this._unitName;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bin_path: cdktf.stringToTerraform(this._binPath),
      config: vaultStartConfigAToTerraform(this._config.internalValue),
      config_dir: cdktf.stringToTerraform(this._configDir),
      config_mode: cdktf.stringToTerraform(this._configMode),
      environment: cdktf.hashMapper(cdktf.stringToTerraform)(this._environment),
      license: cdktf.stringToTerraform(this._license),
      manage_service: cdktf.booleanToTerraform(this._manageService),
      transport: cdktf.hashMapper(cdktf.anyToTerraform)(this._transport),
      unit_name: cdktf.stringToTerraform(this._unitName),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bin_path: {
        value: cdktf.stringToHclTerraform(this._binPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config: {
        value: vaultStartConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VaultStartConfigA",
      },
      config_dir: {
        value: cdktf.stringToHclTerraform(this._configDir),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_mode: {
        value: cdktf.stringToHclTerraform(this._configMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._environment),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      license: {
        value: cdktf.stringToHclTerraform(this._license),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      manage_service: {
        value: cdktf.booleanToHclTerraform(this._manageService),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      transport: {
        value: cdktf.hashMapperHcl(cdktf.anyToHclTerraform)(this._transport),
        isBlock: false,
        type: "map",
        storageClassType: "anyMap",
      },
      unit_name: {
        value: cdktf.stringToHclTerraform(this._unitName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
