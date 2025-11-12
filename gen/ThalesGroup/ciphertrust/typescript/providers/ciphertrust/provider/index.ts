// https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CiphertrustProviderConfig {
  /**
  * HTTPS URL of the CipherTrust instance. An address need not be provided when creating a cluster of CipherTrust instances. address can be set in the provider block, via the CM_ADDRESS environment variable or in ~/.ciphertrust/config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs#address CiphertrustProvider#address}
  */
  readonly address?: string;
  /**
  * CipherTrust authentication domain of the user. This is the domain where the user was created. auth_domain can be set in the provider block, via the CM_AUTH_DOMAIN environment variable or in ~/.ciphertrust/config. Default is the empty string (root domain).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs#auth_domain CiphertrustProvider#auth_domain}
  */
  readonly authDomain?: string;
  /**
  * Some AWS key operations, for example, replication, can take some time to complete. This specifies how long to wait for an operation to complete in seconds. aws_operation_timeout can be set in the provider block or in ~/.ciphertrust/config. Default is 480.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs#aws_operation_timeout CiphertrustProvider#aws_operation_timeout}
  */
  readonly awsOperationTimeout?: number;
  /**
  * Azure key operations can take time to complete. This specifies how long to wait for an operation to complete in seconds. azure_operation_timeout can be set in the provider block or in ~/.ciphertrust/config. Default is 240.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs#azure_operation_timeout CiphertrustProvider#azure_operation_timeout}
  */
  readonly azureOperationTimeout?: number;
  /**
  * CipherTrust domain to log in to. domain can be set in the provider block, via the CM_DOMAIN environment variable or in ~/.ciphertrust/config. Default is the empty string (root domain).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs#domain CiphertrustProvider#domain}
  */
  readonly domain?: string;
  /**
  * Some Google Cloud operations, for example, schedule destroy, are not synchronous. This specifies how long to wait for an operation to complete in seconds. gcp_operation_timeout can be set in the provider block or in ~/.ciphertrust/config. Default is 120.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs#gcp_operation_timeout CiphertrustProvider#gcp_operation_timeout}
  */
  readonly gcpOperationTimeout?: number;
  /**
  * HSM connection operations are not synchronous. This specifies how long to wait for an operation to complete in seconds. hsm_operation_timeout can be set in the provider block or in ~/.ciphertrust/config. Default is 120.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs#hsm_operation_timeout CiphertrustProvider#hsm_operation_timeout}
  */
  readonly hsmOperationTimeout?: number;
  /**
  * Log file name. log_file can be set in the provider block or in ~/.ciphertrust/config. Default is ctp.log.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs#log_file CiphertrustProvider#log_file}
  */
  readonly logFile?: string;
  /**
  * Logging level. log_level can be set in the provider block or in ~/.ciphertrust/config. Default is info. Options: debug, info, warning or error. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs#log_level CiphertrustProvider#log_level}
  */
  readonly logLevel?: string;
  /**
  * Set as false to verify the server's certificate chain and host name. no_ssl_verify can be set in the provider block or in ~/.ciphertrust/config. Default is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs#no_ssl_verify CiphertrustProvider#no_ssl_verify}
  */
  readonly noSslVerify?: boolean | cdktf.IResolvable;
  /**
  * Password of a CipherTrust user. password can be set in the provider block, via the CM_PASSWORD environment variable or in ~/.ciphertrust/config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs#password CiphertrustProvider#password}
  */
  readonly password?: string;
  /**
  * In the case of a CipherTrust Manager cluster behind a load balancer a small delay after creating CipherTrust Manager resources may be required to allow for replication to other cluster instances. replication_delay_ms can be set in the provider block, via the CM_REPLICATION_DELAY environment variable or in ~/.ciphertrust/config. Default is 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs#replication_delay_ms CiphertrustProvider#replication_delay_ms}
  */
  readonly replicationDelayMs?: number;
  /**
  * CipherTrust rest api timeout in seconds. rest_api_timeout can be set in the provider block or in ~/.ciphertrust/config. Default is 60.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs#rest_api_timeout CiphertrustProvider#rest_api_timeout}
  */
  readonly restApiTimeout?: number;
  /**
  * Username of a CipherTrust user. username can be set in the provider block, via the CM_USERNAME environment variable or in ~/.ciphertrust/config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs#username CiphertrustProvider#username}
  */
  readonly username?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs#alias CiphertrustProvider#alias}
  */
  readonly alias?: string;
  /**
  * cloud_key_manager block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs#cloud_key_manager CiphertrustProvider#cloud_key_manager}
  */
  readonly cloudKeyManager?: CiphertrustProviderCloudKeyManager;
}
export interface CiphertrustProviderCloudKeyManagerAzure {
  /**
  * Should ciphertrust_azure_key resources be purged when destroyed? Defaults to true. If not true, the key will only be soft-deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs#purge_keys_on_delete CiphertrustProvider#purge_keys_on_delete}
  */
  readonly purgeKeysOnDelete?: boolean | cdktf.IResolvable;
  /**
  * Should ciphertrust_azure_key resources recover Soft-Deleted keys if an attempt is made to create a key of the same name? Defaults to true. If true, the key will be recovered and a new key will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs#recover_soft_deleted_keys CiphertrustProvider#recover_soft_deleted_keys}
  */
  readonly recoverSoftDeletedKeys?: boolean | cdktf.IResolvable;
  /**
  * Should CipherTrust Manager retain key backups when the key is purged? Defaults to true. If true, a purged key will be retained by CipherTrust Manager and it can be restored from a key backup using the CipherTrust Cloud Key Manager User Interface or CipherTrust Cloud Key Manager API. It will not be possible to create a key of the same name in CipherTrust Manager until it is restored. If false, it will not be possible to restore the key from a backup but it will be possible to create a new key with the same name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs#retain_key_backups_after_purge CiphertrustProvider#retain_key_backups_after_purge}
  */
  readonly retainKeyBackupsAfterPurge?: boolean | cdktf.IResolvable;
}

export function ciphertrustProviderCloudKeyManagerAzureToTerraform(struct?: CiphertrustProviderCloudKeyManagerAzure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    purge_keys_on_delete: cdktf.booleanToTerraform(struct!.purgeKeysOnDelete),
    recover_soft_deleted_keys: cdktf.booleanToTerraform(struct!.recoverSoftDeletedKeys),
    retain_key_backups_after_purge: cdktf.booleanToTerraform(struct!.retainKeyBackupsAfterPurge),
  }
}


export function ciphertrustProviderCloudKeyManagerAzureToHclTerraform(struct?: CiphertrustProviderCloudKeyManagerAzure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    purge_keys_on_delete: {
      value: cdktf.booleanToHclTerraform(struct!.purgeKeysOnDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    recover_soft_deleted_keys: {
      value: cdktf.booleanToHclTerraform(struct!.recoverSoftDeletedKeys),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    retain_key_backups_after_purge: {
      value: cdktf.booleanToHclTerraform(struct!.retainKeyBackupsAfterPurge),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface CiphertrustProviderCloudKeyManager {
  /**
  * azure block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs#azure CiphertrustProvider#azure}
  */
  readonly azure?: CiphertrustProviderCloudKeyManagerAzure;
}

export function ciphertrustProviderCloudKeyManagerToTerraform(struct?: CiphertrustProviderCloudKeyManager): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    azure: ciphertrustProviderCloudKeyManagerAzureToTerraform(struct!.azure),
  }
}


export function ciphertrustProviderCloudKeyManagerToHclTerraform(struct?: CiphertrustProviderCloudKeyManager): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    azure: {
      value: ciphertrustProviderCloudKeyManagerAzureToHclTerraform(struct!.azure),
      isBlock: true,
      type: "list",
      storageClassType: "CiphertrustProviderCloudKeyManagerAzureList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


/**
* Represents a {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs ciphertrust}
*/
export class CiphertrustProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ciphertrust";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CiphertrustProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CiphertrustProvider to import
  * @param importFromId The id of the existing CiphertrustProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CiphertrustProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ciphertrust", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs ciphertrust} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CiphertrustProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CiphertrustProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'ciphertrust',
      terraformGeneratorMetadata: {
        providerName: 'ciphertrust',
        providerVersion: '0.11.3',
        providerVersionConstraint: '0.11.3'
      },
      terraformProviderSource: 'ThalesGroup/ciphertrust'
    });
    this._address = config.address;
    this._authDomain = config.authDomain;
    this._awsOperationTimeout = config.awsOperationTimeout;
    this._azureOperationTimeout = config.azureOperationTimeout;
    this._domain = config.domain;
    this._gcpOperationTimeout = config.gcpOperationTimeout;
    this._hsmOperationTimeout = config.hsmOperationTimeout;
    this._logFile = config.logFile;
    this._logLevel = config.logLevel;
    this._noSslVerify = config.noSslVerify;
    this._password = config.password;
    this._replicationDelayMs = config.replicationDelayMs;
    this._restApiTimeout = config.restApiTimeout;
    this._username = config.username;
    this._alias = config.alias;
    this._cloudKeyManager = config.cloudKeyManager;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this._address;
  }
  public set address(value: string | undefined) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // auth_domain - computed: false, optional: true, required: false
  private _authDomain?: string; 
  public get authDomain() {
    return this._authDomain;
  }
  public set authDomain(value: string | undefined) {
    this._authDomain = value;
  }
  public resetAuthDomain() {
    this._authDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authDomainInput() {
    return this._authDomain;
  }

  // aws_operation_timeout - computed: false, optional: true, required: false
  private _awsOperationTimeout?: number; 
  public get awsOperationTimeout() {
    return this._awsOperationTimeout;
  }
  public set awsOperationTimeout(value: number | undefined) {
    this._awsOperationTimeout = value;
  }
  public resetAwsOperationTimeout() {
    this._awsOperationTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsOperationTimeoutInput() {
    return this._awsOperationTimeout;
  }

  // azure_operation_timeout - computed: false, optional: true, required: false
  private _azureOperationTimeout?: number; 
  public get azureOperationTimeout() {
    return this._azureOperationTimeout;
  }
  public set azureOperationTimeout(value: number | undefined) {
    this._azureOperationTimeout = value;
  }
  public resetAzureOperationTimeout() {
    this._azureOperationTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureOperationTimeoutInput() {
    return this._azureOperationTimeout;
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this._domain;
  }
  public set domain(value: string | undefined) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // gcp_operation_timeout - computed: false, optional: true, required: false
  private _gcpOperationTimeout?: number; 
  public get gcpOperationTimeout() {
    return this._gcpOperationTimeout;
  }
  public set gcpOperationTimeout(value: number | undefined) {
    this._gcpOperationTimeout = value;
  }
  public resetGcpOperationTimeout() {
    this._gcpOperationTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpOperationTimeoutInput() {
    return this._gcpOperationTimeout;
  }

  // hsm_operation_timeout - computed: false, optional: true, required: false
  private _hsmOperationTimeout?: number; 
  public get hsmOperationTimeout() {
    return this._hsmOperationTimeout;
  }
  public set hsmOperationTimeout(value: number | undefined) {
    this._hsmOperationTimeout = value;
  }
  public resetHsmOperationTimeout() {
    this._hsmOperationTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hsmOperationTimeoutInput() {
    return this._hsmOperationTimeout;
  }

  // log_file - computed: false, optional: true, required: false
  private _logFile?: string; 
  public get logFile() {
    return this._logFile;
  }
  public set logFile(value: string | undefined) {
    this._logFile = value;
  }
  public resetLogFile() {
    this._logFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFileInput() {
    return this._logFile;
  }

  // log_level - computed: false, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this._logLevel;
  }
  public set logLevel(value: string | undefined) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }

  // no_ssl_verify - computed: false, optional: true, required: false
  private _noSslVerify?: boolean | cdktf.IResolvable; 
  public get noSslVerify() {
    return this._noSslVerify;
  }
  public set noSslVerify(value: boolean | cdktf.IResolvable | undefined) {
    this._noSslVerify = value;
  }
  public resetNoSslVerify() {
    this._noSslVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noSslVerifyInput() {
    return this._noSslVerify;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this._password;
  }
  public set password(value: string | undefined) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // replication_delay_ms - computed: false, optional: true, required: false
  private _replicationDelayMs?: number; 
  public get replicationDelayMs() {
    return this._replicationDelayMs;
  }
  public set replicationDelayMs(value: number | undefined) {
    this._replicationDelayMs = value;
  }
  public resetReplicationDelayMs() {
    this._replicationDelayMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationDelayMsInput() {
    return this._replicationDelayMs;
  }

  // rest_api_timeout - computed: false, optional: true, required: false
  private _restApiTimeout?: number; 
  public get restApiTimeout() {
    return this._restApiTimeout;
  }
  public set restApiTimeout(value: number | undefined) {
    this._restApiTimeout = value;
  }
  public resetRestApiTimeout() {
    this._restApiTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restApiTimeoutInput() {
    return this._restApiTimeout;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this._username;
  }
  public set username(value: string | undefined) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
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

  // cloud_key_manager - computed: false, optional: true, required: false
  private _cloudKeyManager?: CiphertrustProviderCloudKeyManager; 
  public get cloudKeyManager() {
    return this._cloudKeyManager;
  }
  public set cloudKeyManager(value: CiphertrustProviderCloudKeyManager | undefined) {
    this._cloudKeyManager = value;
  }
  public resetCloudKeyManager() {
    this._cloudKeyManager = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudKeyManagerInput() {
    return this._cloudKeyManager;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address: cdktf.stringToTerraform(this._address),
      auth_domain: cdktf.stringToTerraform(this._authDomain),
      aws_operation_timeout: cdktf.numberToTerraform(this._awsOperationTimeout),
      azure_operation_timeout: cdktf.numberToTerraform(this._azureOperationTimeout),
      domain: cdktf.stringToTerraform(this._domain),
      gcp_operation_timeout: cdktf.numberToTerraform(this._gcpOperationTimeout),
      hsm_operation_timeout: cdktf.numberToTerraform(this._hsmOperationTimeout),
      log_file: cdktf.stringToTerraform(this._logFile),
      log_level: cdktf.stringToTerraform(this._logLevel),
      no_ssl_verify: cdktf.booleanToTerraform(this._noSslVerify),
      password: cdktf.stringToTerraform(this._password),
      replication_delay_ms: cdktf.numberToTerraform(this._replicationDelayMs),
      rest_api_timeout: cdktf.numberToTerraform(this._restApiTimeout),
      username: cdktf.stringToTerraform(this._username),
      alias: cdktf.stringToTerraform(this._alias),
      cloud_key_manager: ciphertrustProviderCloudKeyManagerToTerraform(this._cloudKeyManager),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address: {
        value: cdktf.stringToHclTerraform(this._address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_domain: {
        value: cdktf.stringToHclTerraform(this._authDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_operation_timeout: {
        value: cdktf.numberToHclTerraform(this._awsOperationTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      azure_operation_timeout: {
        value: cdktf.numberToHclTerraform(this._azureOperationTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gcp_operation_timeout: {
        value: cdktf.numberToHclTerraform(this._gcpOperationTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hsm_operation_timeout: {
        value: cdktf.numberToHclTerraform(this._hsmOperationTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      log_file: {
        value: cdktf.stringToHclTerraform(this._logFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_level: {
        value: cdktf.stringToHclTerraform(this._logLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      no_ssl_verify: {
        value: cdktf.booleanToHclTerraform(this._noSslVerify),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replication_delay_ms: {
        value: cdktf.numberToHclTerraform(this._replicationDelayMs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rest_api_timeout: {
        value: cdktf.numberToHclTerraform(this._restApiTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
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
      cloud_key_manager: {
        value: ciphertrustProviderCloudKeyManagerToHclTerraform(this._cloudKeyManager),
        isBlock: true,
        type: "list",
        storageClassType: "CiphertrustProviderCloudKeyManagerList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
