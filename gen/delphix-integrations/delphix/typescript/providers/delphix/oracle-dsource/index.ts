// https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OracleDsourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#backup_level_enabled OracleDsource#backup_level_enabled}
  */
  readonly backupLevelEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#bandwidth_limit OracleDsource#bandwidth_limit}
  */
  readonly bandwidthLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#check_logical OracleDsource#check_logical}
  */
  readonly checkLogical?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#compressed_linking_enabled OracleDsource#compressed_linking_enabled}
  */
  readonly compressedLinkingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#description OracleDsource#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#diagnose_no_logging_faults OracleDsource#diagnose_no_logging_faults}
  */
  readonly diagnoseNoLoggingFaults?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#do_not_resume OracleDsource#do_not_resume}
  */
  readonly doNotResume?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#double_sync OracleDsource#double_sync}
  */
  readonly doubleSync?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#encrypted_linking_enabled OracleDsource#encrypted_linking_enabled}
  */
  readonly encryptedLinkingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#environment_user_id OracleDsource#environment_user_id}
  */
  readonly environmentUserId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#external_file_path OracleDsource#external_file_path}
  */
  readonly externalFilePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#fallback_azure_vault_name OracleDsource#fallback_azure_vault_name}
  */
  readonly fallbackAzureVaultName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#fallback_azure_vault_secret_key OracleDsource#fallback_azure_vault_secret_key}
  */
  readonly fallbackAzureVaultSecretKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#fallback_azure_vault_username_key OracleDsource#fallback_azure_vault_username_key}
  */
  readonly fallbackAzureVaultUsernameKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#fallback_cyberark_vault_query_string OracleDsource#fallback_cyberark_vault_query_string}
  */
  readonly fallbackCyberarkVaultQueryString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#fallback_hashicorp_vault_engine OracleDsource#fallback_hashicorp_vault_engine}
  */
  readonly fallbackHashicorpVaultEngine?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#fallback_hashicorp_vault_secret_key OracleDsource#fallback_hashicorp_vault_secret_key}
  */
  readonly fallbackHashicorpVaultSecretKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#fallback_hashicorp_vault_secret_path OracleDsource#fallback_hashicorp_vault_secret_path}
  */
  readonly fallbackHashicorpVaultSecretPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#fallback_hashicorp_vault_username_key OracleDsource#fallback_hashicorp_vault_username_key}
  */
  readonly fallbackHashicorpVaultUsernameKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#fallback_password OracleDsource#fallback_password}
  */
  readonly fallbackPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#fallback_username OracleDsource#fallback_username}
  */
  readonly fallbackUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#fallback_vault OracleDsource#fallback_vault}
  */
  readonly fallbackVault?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#files_for_full_backup OracleDsource#files_for_full_backup}
  */
  readonly filesForFullBackup?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#files_per_set OracleDsource#files_per_set}
  */
  readonly filesPerSet?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#force_full_backup OracleDsource#force_full_backup}
  */
  readonly forceFullBackup?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#group_id OracleDsource#group_id}
  */
  readonly groupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#ignore_tag_changes OracleDsource#ignore_tag_changes}
  */
  readonly ignoreTagChanges?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#link_now OracleDsource#link_now}
  */
  readonly linkNow?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#log_sync_enabled OracleDsource#log_sync_enabled}
  */
  readonly logSyncEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#log_sync_interval OracleDsource#log_sync_interval}
  */
  readonly logSyncInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#log_sync_mode OracleDsource#log_sync_mode}
  */
  readonly logSyncMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#make_current_account_owner OracleDsource#make_current_account_owner}
  */
  readonly makeCurrentAccountOwner?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#name OracleDsource#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#non_sys_azure_vault_name OracleDsource#non_sys_azure_vault_name}
  */
  readonly nonSysAzureVaultName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#non_sys_azure_vault_secret_key OracleDsource#non_sys_azure_vault_secret_key}
  */
  readonly nonSysAzureVaultSecretKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#non_sys_azure_vault_username_key OracleDsource#non_sys_azure_vault_username_key}
  */
  readonly nonSysAzureVaultUsernameKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#non_sys_cyberark_vault_query_string OracleDsource#non_sys_cyberark_vault_query_string}
  */
  readonly nonSysCyberarkVaultQueryString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#non_sys_hashicorp_vault_engine OracleDsource#non_sys_hashicorp_vault_engine}
  */
  readonly nonSysHashicorpVaultEngine?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#non_sys_hashicorp_vault_secret_key OracleDsource#non_sys_hashicorp_vault_secret_key}
  */
  readonly nonSysHashicorpVaultSecretKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#non_sys_hashicorp_vault_secret_path OracleDsource#non_sys_hashicorp_vault_secret_path}
  */
  readonly nonSysHashicorpVaultSecretPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#non_sys_hashicorp_vault_username_key OracleDsource#non_sys_hashicorp_vault_username_key}
  */
  readonly nonSysHashicorpVaultUsernameKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#non_sys_password OracleDsource#non_sys_password}
  */
  readonly nonSysPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#non_sys_username OracleDsource#non_sys_username}
  */
  readonly nonSysUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#non_sys_vault OracleDsource#non_sys_vault}
  */
  readonly nonSysVault?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#number_of_connections OracleDsource#number_of_connections}
  */
  readonly numberOfConnections?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#pre_provisioning_enabled OracleDsource#pre_provisioning_enabled}
  */
  readonly preProvisioningEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#rman_channels OracleDsource#rman_channels}
  */
  readonly rmanChannels?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#rollback_on_failure OracleDsource#rollback_on_failure}
  */
  readonly rollbackOnFailure?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#skip_space_check OracleDsource#skip_space_check}
  */
  readonly skipSpaceCheck?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#skip_wait_for_snapshot_creation OracleDsource#skip_wait_for_snapshot_creation}
  */
  readonly skipWaitForSnapshotCreation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#source_value OracleDsource#source_value}
  */
  readonly sourceValue: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#wait_time OracleDsource#wait_time}
  */
  readonly waitTime?: number;
  /**
  * ops_post_sync block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#ops_post_sync OracleDsource#ops_post_sync}
  */
  readonly opsPostSync?: OracleDsourceOpsPostSync[] | cdktf.IResolvable;
  /**
  * ops_pre_log_sync block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#ops_pre_log_sync OracleDsource#ops_pre_log_sync}
  */
  readonly opsPreLogSync?: OracleDsourceOpsPreLogSync[] | cdktf.IResolvable;
  /**
  * ops_pre_sync block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#ops_pre_sync OracleDsource#ops_pre_sync}
  */
  readonly opsPreSync?: OracleDsourceOpsPreSync[] | cdktf.IResolvable;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#tags OracleDsource#tags}
  */
  readonly tags?: OracleDsourceTags[] | cdktf.IResolvable;
}
export interface OracleDsourceOpsPostSyncCredentialsEnvVars {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#azure_vault_name OracleDsource#azure_vault_name}
  */
  readonly azureVaultName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#azure_vault_secret_key OracleDsource#azure_vault_secret_key}
  */
  readonly azureVaultSecretKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#azure_vault_username_key OracleDsource#azure_vault_username_key}
  */
  readonly azureVaultUsernameKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#base_var_name OracleDsource#base_var_name}
  */
  readonly baseVarName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#cyberark_vault_query_string OracleDsource#cyberark_vault_query_string}
  */
  readonly cyberarkVaultQueryString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#hashicorp_vault_engine OracleDsource#hashicorp_vault_engine}
  */
  readonly hashicorpVaultEngine?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#hashicorp_vault_secret_key OracleDsource#hashicorp_vault_secret_key}
  */
  readonly hashicorpVaultSecretKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#hashicorp_vault_secret_path OracleDsource#hashicorp_vault_secret_path}
  */
  readonly hashicorpVaultSecretPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#hashicorp_vault_username_key OracleDsource#hashicorp_vault_username_key}
  */
  readonly hashicorpVaultUsernameKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#password OracleDsource#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#vault OracleDsource#vault}
  */
  readonly vault?: string;
}

export function oracleDsourceOpsPostSyncCredentialsEnvVarsToTerraform(struct?: OracleDsourceOpsPostSyncCredentialsEnvVars | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    azure_vault_name: cdktf.stringToTerraform(struct!.azureVaultName),
    azure_vault_secret_key: cdktf.stringToTerraform(struct!.azureVaultSecretKey),
    azure_vault_username_key: cdktf.stringToTerraform(struct!.azureVaultUsernameKey),
    base_var_name: cdktf.stringToTerraform(struct!.baseVarName),
    cyberark_vault_query_string: cdktf.stringToTerraform(struct!.cyberarkVaultQueryString),
    hashicorp_vault_engine: cdktf.stringToTerraform(struct!.hashicorpVaultEngine),
    hashicorp_vault_secret_key: cdktf.stringToTerraform(struct!.hashicorpVaultSecretKey),
    hashicorp_vault_secret_path: cdktf.stringToTerraform(struct!.hashicorpVaultSecretPath),
    hashicorp_vault_username_key: cdktf.stringToTerraform(struct!.hashicorpVaultUsernameKey),
    password: cdktf.stringToTerraform(struct!.password),
    vault: cdktf.stringToTerraform(struct!.vault),
  }
}


export function oracleDsourceOpsPostSyncCredentialsEnvVarsToHclTerraform(struct?: OracleDsourceOpsPostSyncCredentialsEnvVars | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    azure_vault_name: {
      value: cdktf.stringToHclTerraform(struct!.azureVaultName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    azure_vault_secret_key: {
      value: cdktf.stringToHclTerraform(struct!.azureVaultSecretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    azure_vault_username_key: {
      value: cdktf.stringToHclTerraform(struct!.azureVaultUsernameKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    base_var_name: {
      value: cdktf.stringToHclTerraform(struct!.baseVarName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cyberark_vault_query_string: {
      value: cdktf.stringToHclTerraform(struct!.cyberarkVaultQueryString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hashicorp_vault_engine: {
      value: cdktf.stringToHclTerraform(struct!.hashicorpVaultEngine),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hashicorp_vault_secret_key: {
      value: cdktf.stringToHclTerraform(struct!.hashicorpVaultSecretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hashicorp_vault_secret_path: {
      value: cdktf.stringToHclTerraform(struct!.hashicorpVaultSecretPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hashicorp_vault_username_key: {
      value: cdktf.stringToHclTerraform(struct!.hashicorpVaultUsernameKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vault: {
      value: cdktf.stringToHclTerraform(struct!.vault),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OracleDsourceOpsPostSyncCredentialsEnvVarsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OracleDsourceOpsPostSyncCredentialsEnvVars | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._azureVaultName !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureVaultName = this._azureVaultName;
    }
    if (this._azureVaultSecretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureVaultSecretKey = this._azureVaultSecretKey;
    }
    if (this._azureVaultUsernameKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureVaultUsernameKey = this._azureVaultUsernameKey;
    }
    if (this._baseVarName !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseVarName = this._baseVarName;
    }
    if (this._cyberarkVaultQueryString !== undefined) {
      hasAnyValues = true;
      internalValueResult.cyberarkVaultQueryString = this._cyberarkVaultQueryString;
    }
    if (this._hashicorpVaultEngine !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashicorpVaultEngine = this._hashicorpVaultEngine;
    }
    if (this._hashicorpVaultSecretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashicorpVaultSecretKey = this._hashicorpVaultSecretKey;
    }
    if (this._hashicorpVaultSecretPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashicorpVaultSecretPath = this._hashicorpVaultSecretPath;
    }
    if (this._hashicorpVaultUsernameKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashicorpVaultUsernameKey = this._hashicorpVaultUsernameKey;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._vault !== undefined) {
      hasAnyValues = true;
      internalValueResult.vault = this._vault;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleDsourceOpsPostSyncCredentialsEnvVars | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._azureVaultName = undefined;
      this._azureVaultSecretKey = undefined;
      this._azureVaultUsernameKey = undefined;
      this._baseVarName = undefined;
      this._cyberarkVaultQueryString = undefined;
      this._hashicorpVaultEngine = undefined;
      this._hashicorpVaultSecretKey = undefined;
      this._hashicorpVaultSecretPath = undefined;
      this._hashicorpVaultUsernameKey = undefined;
      this._password = undefined;
      this._vault = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._azureVaultName = value.azureVaultName;
      this._azureVaultSecretKey = value.azureVaultSecretKey;
      this._azureVaultUsernameKey = value.azureVaultUsernameKey;
      this._baseVarName = value.baseVarName;
      this._cyberarkVaultQueryString = value.cyberarkVaultQueryString;
      this._hashicorpVaultEngine = value.hashicorpVaultEngine;
      this._hashicorpVaultSecretKey = value.hashicorpVaultSecretKey;
      this._hashicorpVaultSecretPath = value.hashicorpVaultSecretPath;
      this._hashicorpVaultUsernameKey = value.hashicorpVaultUsernameKey;
      this._password = value.password;
      this._vault = value.vault;
    }
  }

  // azure_vault_name - computed: false, optional: true, required: false
  private _azureVaultName?: string; 
  public get azureVaultName() {
    return this.getStringAttribute('azure_vault_name');
  }
  public set azureVaultName(value: string) {
    this._azureVaultName = value;
  }
  public resetAzureVaultName() {
    this._azureVaultName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureVaultNameInput() {
    return this._azureVaultName;
  }

  // azure_vault_secret_key - computed: false, optional: true, required: false
  private _azureVaultSecretKey?: string; 
  public get azureVaultSecretKey() {
    return this.getStringAttribute('azure_vault_secret_key');
  }
  public set azureVaultSecretKey(value: string) {
    this._azureVaultSecretKey = value;
  }
  public resetAzureVaultSecretKey() {
    this._azureVaultSecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureVaultSecretKeyInput() {
    return this._azureVaultSecretKey;
  }

  // azure_vault_username_key - computed: false, optional: true, required: false
  private _azureVaultUsernameKey?: string; 
  public get azureVaultUsernameKey() {
    return this.getStringAttribute('azure_vault_username_key');
  }
  public set azureVaultUsernameKey(value: string) {
    this._azureVaultUsernameKey = value;
  }
  public resetAzureVaultUsernameKey() {
    this._azureVaultUsernameKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureVaultUsernameKeyInput() {
    return this._azureVaultUsernameKey;
  }

  // base_var_name - computed: false, optional: false, required: true
  private _baseVarName?: string; 
  public get baseVarName() {
    return this.getStringAttribute('base_var_name');
  }
  public set baseVarName(value: string) {
    this._baseVarName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseVarNameInput() {
    return this._baseVarName;
  }

  // cyberark_vault_query_string - computed: false, optional: true, required: false
  private _cyberarkVaultQueryString?: string; 
  public get cyberarkVaultQueryString() {
    return this.getStringAttribute('cyberark_vault_query_string');
  }
  public set cyberarkVaultQueryString(value: string) {
    this._cyberarkVaultQueryString = value;
  }
  public resetCyberarkVaultQueryString() {
    this._cyberarkVaultQueryString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cyberarkVaultQueryStringInput() {
    return this._cyberarkVaultQueryString;
  }

  // hashicorp_vault_engine - computed: false, optional: true, required: false
  private _hashicorpVaultEngine?: string; 
  public get hashicorpVaultEngine() {
    return this.getStringAttribute('hashicorp_vault_engine');
  }
  public set hashicorpVaultEngine(value: string) {
    this._hashicorpVaultEngine = value;
  }
  public resetHashicorpVaultEngine() {
    this._hashicorpVaultEngine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashicorpVaultEngineInput() {
    return this._hashicorpVaultEngine;
  }

  // hashicorp_vault_secret_key - computed: false, optional: true, required: false
  private _hashicorpVaultSecretKey?: string; 
  public get hashicorpVaultSecretKey() {
    return this.getStringAttribute('hashicorp_vault_secret_key');
  }
  public set hashicorpVaultSecretKey(value: string) {
    this._hashicorpVaultSecretKey = value;
  }
  public resetHashicorpVaultSecretKey() {
    this._hashicorpVaultSecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashicorpVaultSecretKeyInput() {
    return this._hashicorpVaultSecretKey;
  }

  // hashicorp_vault_secret_path - computed: false, optional: true, required: false
  private _hashicorpVaultSecretPath?: string; 
  public get hashicorpVaultSecretPath() {
    return this.getStringAttribute('hashicorp_vault_secret_path');
  }
  public set hashicorpVaultSecretPath(value: string) {
    this._hashicorpVaultSecretPath = value;
  }
  public resetHashicorpVaultSecretPath() {
    this._hashicorpVaultSecretPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashicorpVaultSecretPathInput() {
    return this._hashicorpVaultSecretPath;
  }

  // hashicorp_vault_username_key - computed: false, optional: true, required: false
  private _hashicorpVaultUsernameKey?: string; 
  public get hashicorpVaultUsernameKey() {
    return this.getStringAttribute('hashicorp_vault_username_key');
  }
  public set hashicorpVaultUsernameKey(value: string) {
    this._hashicorpVaultUsernameKey = value;
  }
  public resetHashicorpVaultUsernameKey() {
    this._hashicorpVaultUsernameKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashicorpVaultUsernameKeyInput() {
    return this._hashicorpVaultUsernameKey;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // vault - computed: false, optional: true, required: false
  private _vault?: string; 
  public get vault() {
    return this.getStringAttribute('vault');
  }
  public set vault(value: string) {
    this._vault = value;
  }
  public resetVault() {
    this._vault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultInput() {
    return this._vault;
  }
}

export class OracleDsourceOpsPostSyncCredentialsEnvVarsList extends cdktf.ComplexList {
  public internalValue? : OracleDsourceOpsPostSyncCredentialsEnvVars[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OracleDsourceOpsPostSyncCredentialsEnvVarsOutputReference {
    return new OracleDsourceOpsPostSyncCredentialsEnvVarsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OracleDsourceOpsPostSync {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#command OracleDsource#command}
  */
  readonly command?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#name OracleDsource#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#shell OracleDsource#shell}
  */
  readonly shell?: string;
  /**
  * credentials_env_vars block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#credentials_env_vars OracleDsource#credentials_env_vars}
  */
  readonly credentialsEnvVars?: OracleDsourceOpsPostSyncCredentialsEnvVars[] | cdktf.IResolvable;
}

export function oracleDsourceOpsPostSyncToTerraform(struct?: OracleDsourceOpsPostSync | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.stringToTerraform(struct!.command),
    name: cdktf.stringToTerraform(struct!.name),
    shell: cdktf.stringToTerraform(struct!.shell),
    credentials_env_vars: cdktf.listMapper(oracleDsourceOpsPostSyncCredentialsEnvVarsToTerraform, true)(struct!.credentialsEnvVars),
  }
}


export function oracleDsourceOpsPostSyncToHclTerraform(struct?: OracleDsourceOpsPostSync | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    command: {
      value: cdktf.stringToHclTerraform(struct!.command),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shell: {
      value: cdktf.stringToHclTerraform(struct!.shell),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credentials_env_vars: {
      value: cdktf.listMapperHcl(oracleDsourceOpsPostSyncCredentialsEnvVarsToHclTerraform, true)(struct!.credentialsEnvVars),
      isBlock: true,
      type: "list",
      storageClassType: "OracleDsourceOpsPostSyncCredentialsEnvVarsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OracleDsourceOpsPostSyncOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OracleDsourceOpsPostSync | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._shell !== undefined) {
      hasAnyValues = true;
      internalValueResult.shell = this._shell;
    }
    if (this._credentialsEnvVars?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsEnvVars = this._credentialsEnvVars?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleDsourceOpsPostSync | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._command = undefined;
      this._name = undefined;
      this._shell = undefined;
      this._credentialsEnvVars.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._command = value.command;
      this._name = value.name;
      this._shell = value.shell;
      this._credentialsEnvVars.internalValue = value.credentialsEnvVars;
    }
  }

  // command - computed: false, optional: true, required: false
  private _command?: string; 
  public get command() {
    return this.getStringAttribute('command');
  }
  public set command(value: string) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // element_id - computed: true, optional: false, required: false
  public get elementId() {
    return this.getStringAttribute('element_id');
  }

  // has_credentials - computed: true, optional: false, required: false
  public get hasCredentials() {
    return this.getBooleanAttribute('has_credentials');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // shell - computed: false, optional: true, required: false
  private _shell?: string; 
  public get shell() {
    return this.getStringAttribute('shell');
  }
  public set shell(value: string) {
    this._shell = value;
  }
  public resetShell() {
    this._shell = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shellInput() {
    return this._shell;
  }

  // credentials_env_vars - computed: false, optional: true, required: false
  private _credentialsEnvVars = new OracleDsourceOpsPostSyncCredentialsEnvVarsList(this, "credentials_env_vars", false);
  public get credentialsEnvVars() {
    return this._credentialsEnvVars;
  }
  public putCredentialsEnvVars(value: OracleDsourceOpsPostSyncCredentialsEnvVars[] | cdktf.IResolvable) {
    this._credentialsEnvVars.internalValue = value;
  }
  public resetCredentialsEnvVars() {
    this._credentialsEnvVars.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsEnvVarsInput() {
    return this._credentialsEnvVars.internalValue;
  }
}

export class OracleDsourceOpsPostSyncList extends cdktf.ComplexList {
  public internalValue? : OracleDsourceOpsPostSync[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OracleDsourceOpsPostSyncOutputReference {
    return new OracleDsourceOpsPostSyncOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OracleDsourceOpsPreLogSyncCredentialsEnvVars {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#azure_vault_name OracleDsource#azure_vault_name}
  */
  readonly azureVaultName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#azure_vault_secret_key OracleDsource#azure_vault_secret_key}
  */
  readonly azureVaultSecretKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#azure_vault_username_key OracleDsource#azure_vault_username_key}
  */
  readonly azureVaultUsernameKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#base_var_name OracleDsource#base_var_name}
  */
  readonly baseVarName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#cyberark_vault_query_string OracleDsource#cyberark_vault_query_string}
  */
  readonly cyberarkVaultQueryString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#hashicorp_vault_engine OracleDsource#hashicorp_vault_engine}
  */
  readonly hashicorpVaultEngine?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#hashicorp_vault_secret_key OracleDsource#hashicorp_vault_secret_key}
  */
  readonly hashicorpVaultSecretKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#hashicorp_vault_secret_path OracleDsource#hashicorp_vault_secret_path}
  */
  readonly hashicorpVaultSecretPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#hashicorp_vault_username_key OracleDsource#hashicorp_vault_username_key}
  */
  readonly hashicorpVaultUsernameKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#password OracleDsource#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#vault OracleDsource#vault}
  */
  readonly vault?: string;
}

export function oracleDsourceOpsPreLogSyncCredentialsEnvVarsToTerraform(struct?: OracleDsourceOpsPreLogSyncCredentialsEnvVars | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    azure_vault_name: cdktf.stringToTerraform(struct!.azureVaultName),
    azure_vault_secret_key: cdktf.stringToTerraform(struct!.azureVaultSecretKey),
    azure_vault_username_key: cdktf.stringToTerraform(struct!.azureVaultUsernameKey),
    base_var_name: cdktf.stringToTerraform(struct!.baseVarName),
    cyberark_vault_query_string: cdktf.stringToTerraform(struct!.cyberarkVaultQueryString),
    hashicorp_vault_engine: cdktf.stringToTerraform(struct!.hashicorpVaultEngine),
    hashicorp_vault_secret_key: cdktf.stringToTerraform(struct!.hashicorpVaultSecretKey),
    hashicorp_vault_secret_path: cdktf.stringToTerraform(struct!.hashicorpVaultSecretPath),
    hashicorp_vault_username_key: cdktf.stringToTerraform(struct!.hashicorpVaultUsernameKey),
    password: cdktf.stringToTerraform(struct!.password),
    vault: cdktf.stringToTerraform(struct!.vault),
  }
}


export function oracleDsourceOpsPreLogSyncCredentialsEnvVarsToHclTerraform(struct?: OracleDsourceOpsPreLogSyncCredentialsEnvVars | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    azure_vault_name: {
      value: cdktf.stringToHclTerraform(struct!.azureVaultName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    azure_vault_secret_key: {
      value: cdktf.stringToHclTerraform(struct!.azureVaultSecretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    azure_vault_username_key: {
      value: cdktf.stringToHclTerraform(struct!.azureVaultUsernameKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    base_var_name: {
      value: cdktf.stringToHclTerraform(struct!.baseVarName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cyberark_vault_query_string: {
      value: cdktf.stringToHclTerraform(struct!.cyberarkVaultQueryString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hashicorp_vault_engine: {
      value: cdktf.stringToHclTerraform(struct!.hashicorpVaultEngine),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hashicorp_vault_secret_key: {
      value: cdktf.stringToHclTerraform(struct!.hashicorpVaultSecretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hashicorp_vault_secret_path: {
      value: cdktf.stringToHclTerraform(struct!.hashicorpVaultSecretPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hashicorp_vault_username_key: {
      value: cdktf.stringToHclTerraform(struct!.hashicorpVaultUsernameKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vault: {
      value: cdktf.stringToHclTerraform(struct!.vault),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OracleDsourceOpsPreLogSyncCredentialsEnvVarsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OracleDsourceOpsPreLogSyncCredentialsEnvVars | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._azureVaultName !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureVaultName = this._azureVaultName;
    }
    if (this._azureVaultSecretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureVaultSecretKey = this._azureVaultSecretKey;
    }
    if (this._azureVaultUsernameKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureVaultUsernameKey = this._azureVaultUsernameKey;
    }
    if (this._baseVarName !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseVarName = this._baseVarName;
    }
    if (this._cyberarkVaultQueryString !== undefined) {
      hasAnyValues = true;
      internalValueResult.cyberarkVaultQueryString = this._cyberarkVaultQueryString;
    }
    if (this._hashicorpVaultEngine !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashicorpVaultEngine = this._hashicorpVaultEngine;
    }
    if (this._hashicorpVaultSecretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashicorpVaultSecretKey = this._hashicorpVaultSecretKey;
    }
    if (this._hashicorpVaultSecretPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashicorpVaultSecretPath = this._hashicorpVaultSecretPath;
    }
    if (this._hashicorpVaultUsernameKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashicorpVaultUsernameKey = this._hashicorpVaultUsernameKey;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._vault !== undefined) {
      hasAnyValues = true;
      internalValueResult.vault = this._vault;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleDsourceOpsPreLogSyncCredentialsEnvVars | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._azureVaultName = undefined;
      this._azureVaultSecretKey = undefined;
      this._azureVaultUsernameKey = undefined;
      this._baseVarName = undefined;
      this._cyberarkVaultQueryString = undefined;
      this._hashicorpVaultEngine = undefined;
      this._hashicorpVaultSecretKey = undefined;
      this._hashicorpVaultSecretPath = undefined;
      this._hashicorpVaultUsernameKey = undefined;
      this._password = undefined;
      this._vault = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._azureVaultName = value.azureVaultName;
      this._azureVaultSecretKey = value.azureVaultSecretKey;
      this._azureVaultUsernameKey = value.azureVaultUsernameKey;
      this._baseVarName = value.baseVarName;
      this._cyberarkVaultQueryString = value.cyberarkVaultQueryString;
      this._hashicorpVaultEngine = value.hashicorpVaultEngine;
      this._hashicorpVaultSecretKey = value.hashicorpVaultSecretKey;
      this._hashicorpVaultSecretPath = value.hashicorpVaultSecretPath;
      this._hashicorpVaultUsernameKey = value.hashicorpVaultUsernameKey;
      this._password = value.password;
      this._vault = value.vault;
    }
  }

  // azure_vault_name - computed: false, optional: true, required: false
  private _azureVaultName?: string; 
  public get azureVaultName() {
    return this.getStringAttribute('azure_vault_name');
  }
  public set azureVaultName(value: string) {
    this._azureVaultName = value;
  }
  public resetAzureVaultName() {
    this._azureVaultName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureVaultNameInput() {
    return this._azureVaultName;
  }

  // azure_vault_secret_key - computed: false, optional: true, required: false
  private _azureVaultSecretKey?: string; 
  public get azureVaultSecretKey() {
    return this.getStringAttribute('azure_vault_secret_key');
  }
  public set azureVaultSecretKey(value: string) {
    this._azureVaultSecretKey = value;
  }
  public resetAzureVaultSecretKey() {
    this._azureVaultSecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureVaultSecretKeyInput() {
    return this._azureVaultSecretKey;
  }

  // azure_vault_username_key - computed: false, optional: true, required: false
  private _azureVaultUsernameKey?: string; 
  public get azureVaultUsernameKey() {
    return this.getStringAttribute('azure_vault_username_key');
  }
  public set azureVaultUsernameKey(value: string) {
    this._azureVaultUsernameKey = value;
  }
  public resetAzureVaultUsernameKey() {
    this._azureVaultUsernameKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureVaultUsernameKeyInput() {
    return this._azureVaultUsernameKey;
  }

  // base_var_name - computed: false, optional: false, required: true
  private _baseVarName?: string; 
  public get baseVarName() {
    return this.getStringAttribute('base_var_name');
  }
  public set baseVarName(value: string) {
    this._baseVarName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseVarNameInput() {
    return this._baseVarName;
  }

  // cyberark_vault_query_string - computed: false, optional: true, required: false
  private _cyberarkVaultQueryString?: string; 
  public get cyberarkVaultQueryString() {
    return this.getStringAttribute('cyberark_vault_query_string');
  }
  public set cyberarkVaultQueryString(value: string) {
    this._cyberarkVaultQueryString = value;
  }
  public resetCyberarkVaultQueryString() {
    this._cyberarkVaultQueryString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cyberarkVaultQueryStringInput() {
    return this._cyberarkVaultQueryString;
  }

  // hashicorp_vault_engine - computed: false, optional: true, required: false
  private _hashicorpVaultEngine?: string; 
  public get hashicorpVaultEngine() {
    return this.getStringAttribute('hashicorp_vault_engine');
  }
  public set hashicorpVaultEngine(value: string) {
    this._hashicorpVaultEngine = value;
  }
  public resetHashicorpVaultEngine() {
    this._hashicorpVaultEngine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashicorpVaultEngineInput() {
    return this._hashicorpVaultEngine;
  }

  // hashicorp_vault_secret_key - computed: false, optional: true, required: false
  private _hashicorpVaultSecretKey?: string; 
  public get hashicorpVaultSecretKey() {
    return this.getStringAttribute('hashicorp_vault_secret_key');
  }
  public set hashicorpVaultSecretKey(value: string) {
    this._hashicorpVaultSecretKey = value;
  }
  public resetHashicorpVaultSecretKey() {
    this._hashicorpVaultSecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashicorpVaultSecretKeyInput() {
    return this._hashicorpVaultSecretKey;
  }

  // hashicorp_vault_secret_path - computed: false, optional: true, required: false
  private _hashicorpVaultSecretPath?: string; 
  public get hashicorpVaultSecretPath() {
    return this.getStringAttribute('hashicorp_vault_secret_path');
  }
  public set hashicorpVaultSecretPath(value: string) {
    this._hashicorpVaultSecretPath = value;
  }
  public resetHashicorpVaultSecretPath() {
    this._hashicorpVaultSecretPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashicorpVaultSecretPathInput() {
    return this._hashicorpVaultSecretPath;
  }

  // hashicorp_vault_username_key - computed: false, optional: true, required: false
  private _hashicorpVaultUsernameKey?: string; 
  public get hashicorpVaultUsernameKey() {
    return this.getStringAttribute('hashicorp_vault_username_key');
  }
  public set hashicorpVaultUsernameKey(value: string) {
    this._hashicorpVaultUsernameKey = value;
  }
  public resetHashicorpVaultUsernameKey() {
    this._hashicorpVaultUsernameKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashicorpVaultUsernameKeyInput() {
    return this._hashicorpVaultUsernameKey;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // vault - computed: false, optional: true, required: false
  private _vault?: string; 
  public get vault() {
    return this.getStringAttribute('vault');
  }
  public set vault(value: string) {
    this._vault = value;
  }
  public resetVault() {
    this._vault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultInput() {
    return this._vault;
  }
}

export class OracleDsourceOpsPreLogSyncCredentialsEnvVarsList extends cdktf.ComplexList {
  public internalValue? : OracleDsourceOpsPreLogSyncCredentialsEnvVars[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OracleDsourceOpsPreLogSyncCredentialsEnvVarsOutputReference {
    return new OracleDsourceOpsPreLogSyncCredentialsEnvVarsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OracleDsourceOpsPreLogSync {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#command OracleDsource#command}
  */
  readonly command?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#name OracleDsource#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#shell OracleDsource#shell}
  */
  readonly shell?: string;
  /**
  * credentials_env_vars block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#credentials_env_vars OracleDsource#credentials_env_vars}
  */
  readonly credentialsEnvVars?: OracleDsourceOpsPreLogSyncCredentialsEnvVars[] | cdktf.IResolvable;
}

export function oracleDsourceOpsPreLogSyncToTerraform(struct?: OracleDsourceOpsPreLogSync | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.stringToTerraform(struct!.command),
    name: cdktf.stringToTerraform(struct!.name),
    shell: cdktf.stringToTerraform(struct!.shell),
    credentials_env_vars: cdktf.listMapper(oracleDsourceOpsPreLogSyncCredentialsEnvVarsToTerraform, true)(struct!.credentialsEnvVars),
  }
}


export function oracleDsourceOpsPreLogSyncToHclTerraform(struct?: OracleDsourceOpsPreLogSync | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    command: {
      value: cdktf.stringToHclTerraform(struct!.command),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shell: {
      value: cdktf.stringToHclTerraform(struct!.shell),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credentials_env_vars: {
      value: cdktf.listMapperHcl(oracleDsourceOpsPreLogSyncCredentialsEnvVarsToHclTerraform, true)(struct!.credentialsEnvVars),
      isBlock: true,
      type: "list",
      storageClassType: "OracleDsourceOpsPreLogSyncCredentialsEnvVarsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OracleDsourceOpsPreLogSyncOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OracleDsourceOpsPreLogSync | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._shell !== undefined) {
      hasAnyValues = true;
      internalValueResult.shell = this._shell;
    }
    if (this._credentialsEnvVars?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsEnvVars = this._credentialsEnvVars?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleDsourceOpsPreLogSync | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._command = undefined;
      this._name = undefined;
      this._shell = undefined;
      this._credentialsEnvVars.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._command = value.command;
      this._name = value.name;
      this._shell = value.shell;
      this._credentialsEnvVars.internalValue = value.credentialsEnvVars;
    }
  }

  // command - computed: false, optional: true, required: false
  private _command?: string; 
  public get command() {
    return this.getStringAttribute('command');
  }
  public set command(value: string) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // element_id - computed: true, optional: false, required: false
  public get elementId() {
    return this.getStringAttribute('element_id');
  }

  // has_credentials - computed: true, optional: false, required: false
  public get hasCredentials() {
    return this.getBooleanAttribute('has_credentials');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // shell - computed: false, optional: true, required: false
  private _shell?: string; 
  public get shell() {
    return this.getStringAttribute('shell');
  }
  public set shell(value: string) {
    this._shell = value;
  }
  public resetShell() {
    this._shell = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shellInput() {
    return this._shell;
  }

  // credentials_env_vars - computed: false, optional: true, required: false
  private _credentialsEnvVars = new OracleDsourceOpsPreLogSyncCredentialsEnvVarsList(this, "credentials_env_vars", false);
  public get credentialsEnvVars() {
    return this._credentialsEnvVars;
  }
  public putCredentialsEnvVars(value: OracleDsourceOpsPreLogSyncCredentialsEnvVars[] | cdktf.IResolvable) {
    this._credentialsEnvVars.internalValue = value;
  }
  public resetCredentialsEnvVars() {
    this._credentialsEnvVars.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsEnvVarsInput() {
    return this._credentialsEnvVars.internalValue;
  }
}

export class OracleDsourceOpsPreLogSyncList extends cdktf.ComplexList {
  public internalValue? : OracleDsourceOpsPreLogSync[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OracleDsourceOpsPreLogSyncOutputReference {
    return new OracleDsourceOpsPreLogSyncOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OracleDsourceOpsPreSyncCredentialsEnvVars {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#azure_vault_name OracleDsource#azure_vault_name}
  */
  readonly azureVaultName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#azure_vault_secret_key OracleDsource#azure_vault_secret_key}
  */
  readonly azureVaultSecretKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#azure_vault_username_key OracleDsource#azure_vault_username_key}
  */
  readonly azureVaultUsernameKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#base_var_name OracleDsource#base_var_name}
  */
  readonly baseVarName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#cyberark_vault_query_string OracleDsource#cyberark_vault_query_string}
  */
  readonly cyberarkVaultQueryString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#hashicorp_vault_engine OracleDsource#hashicorp_vault_engine}
  */
  readonly hashicorpVaultEngine?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#hashicorp_vault_secret_key OracleDsource#hashicorp_vault_secret_key}
  */
  readonly hashicorpVaultSecretKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#hashicorp_vault_secret_path OracleDsource#hashicorp_vault_secret_path}
  */
  readonly hashicorpVaultSecretPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#hashicorp_vault_username_key OracleDsource#hashicorp_vault_username_key}
  */
  readonly hashicorpVaultUsernameKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#password OracleDsource#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#vault OracleDsource#vault}
  */
  readonly vault?: string;
}

export function oracleDsourceOpsPreSyncCredentialsEnvVarsToTerraform(struct?: OracleDsourceOpsPreSyncCredentialsEnvVars | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    azure_vault_name: cdktf.stringToTerraform(struct!.azureVaultName),
    azure_vault_secret_key: cdktf.stringToTerraform(struct!.azureVaultSecretKey),
    azure_vault_username_key: cdktf.stringToTerraform(struct!.azureVaultUsernameKey),
    base_var_name: cdktf.stringToTerraform(struct!.baseVarName),
    cyberark_vault_query_string: cdktf.stringToTerraform(struct!.cyberarkVaultQueryString),
    hashicorp_vault_engine: cdktf.stringToTerraform(struct!.hashicorpVaultEngine),
    hashicorp_vault_secret_key: cdktf.stringToTerraform(struct!.hashicorpVaultSecretKey),
    hashicorp_vault_secret_path: cdktf.stringToTerraform(struct!.hashicorpVaultSecretPath),
    hashicorp_vault_username_key: cdktf.stringToTerraform(struct!.hashicorpVaultUsernameKey),
    password: cdktf.stringToTerraform(struct!.password),
    vault: cdktf.stringToTerraform(struct!.vault),
  }
}


export function oracleDsourceOpsPreSyncCredentialsEnvVarsToHclTerraform(struct?: OracleDsourceOpsPreSyncCredentialsEnvVars | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    azure_vault_name: {
      value: cdktf.stringToHclTerraform(struct!.azureVaultName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    azure_vault_secret_key: {
      value: cdktf.stringToHclTerraform(struct!.azureVaultSecretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    azure_vault_username_key: {
      value: cdktf.stringToHclTerraform(struct!.azureVaultUsernameKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    base_var_name: {
      value: cdktf.stringToHclTerraform(struct!.baseVarName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cyberark_vault_query_string: {
      value: cdktf.stringToHclTerraform(struct!.cyberarkVaultQueryString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hashicorp_vault_engine: {
      value: cdktf.stringToHclTerraform(struct!.hashicorpVaultEngine),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hashicorp_vault_secret_key: {
      value: cdktf.stringToHclTerraform(struct!.hashicorpVaultSecretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hashicorp_vault_secret_path: {
      value: cdktf.stringToHclTerraform(struct!.hashicorpVaultSecretPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hashicorp_vault_username_key: {
      value: cdktf.stringToHclTerraform(struct!.hashicorpVaultUsernameKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vault: {
      value: cdktf.stringToHclTerraform(struct!.vault),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OracleDsourceOpsPreSyncCredentialsEnvVarsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OracleDsourceOpsPreSyncCredentialsEnvVars | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._azureVaultName !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureVaultName = this._azureVaultName;
    }
    if (this._azureVaultSecretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureVaultSecretKey = this._azureVaultSecretKey;
    }
    if (this._azureVaultUsernameKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureVaultUsernameKey = this._azureVaultUsernameKey;
    }
    if (this._baseVarName !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseVarName = this._baseVarName;
    }
    if (this._cyberarkVaultQueryString !== undefined) {
      hasAnyValues = true;
      internalValueResult.cyberarkVaultQueryString = this._cyberarkVaultQueryString;
    }
    if (this._hashicorpVaultEngine !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashicorpVaultEngine = this._hashicorpVaultEngine;
    }
    if (this._hashicorpVaultSecretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashicorpVaultSecretKey = this._hashicorpVaultSecretKey;
    }
    if (this._hashicorpVaultSecretPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashicorpVaultSecretPath = this._hashicorpVaultSecretPath;
    }
    if (this._hashicorpVaultUsernameKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashicorpVaultUsernameKey = this._hashicorpVaultUsernameKey;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._vault !== undefined) {
      hasAnyValues = true;
      internalValueResult.vault = this._vault;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleDsourceOpsPreSyncCredentialsEnvVars | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._azureVaultName = undefined;
      this._azureVaultSecretKey = undefined;
      this._azureVaultUsernameKey = undefined;
      this._baseVarName = undefined;
      this._cyberarkVaultQueryString = undefined;
      this._hashicorpVaultEngine = undefined;
      this._hashicorpVaultSecretKey = undefined;
      this._hashicorpVaultSecretPath = undefined;
      this._hashicorpVaultUsernameKey = undefined;
      this._password = undefined;
      this._vault = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._azureVaultName = value.azureVaultName;
      this._azureVaultSecretKey = value.azureVaultSecretKey;
      this._azureVaultUsernameKey = value.azureVaultUsernameKey;
      this._baseVarName = value.baseVarName;
      this._cyberarkVaultQueryString = value.cyberarkVaultQueryString;
      this._hashicorpVaultEngine = value.hashicorpVaultEngine;
      this._hashicorpVaultSecretKey = value.hashicorpVaultSecretKey;
      this._hashicorpVaultSecretPath = value.hashicorpVaultSecretPath;
      this._hashicorpVaultUsernameKey = value.hashicorpVaultUsernameKey;
      this._password = value.password;
      this._vault = value.vault;
    }
  }

  // azure_vault_name - computed: false, optional: true, required: false
  private _azureVaultName?: string; 
  public get azureVaultName() {
    return this.getStringAttribute('azure_vault_name');
  }
  public set azureVaultName(value: string) {
    this._azureVaultName = value;
  }
  public resetAzureVaultName() {
    this._azureVaultName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureVaultNameInput() {
    return this._azureVaultName;
  }

  // azure_vault_secret_key - computed: false, optional: true, required: false
  private _azureVaultSecretKey?: string; 
  public get azureVaultSecretKey() {
    return this.getStringAttribute('azure_vault_secret_key');
  }
  public set azureVaultSecretKey(value: string) {
    this._azureVaultSecretKey = value;
  }
  public resetAzureVaultSecretKey() {
    this._azureVaultSecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureVaultSecretKeyInput() {
    return this._azureVaultSecretKey;
  }

  // azure_vault_username_key - computed: false, optional: true, required: false
  private _azureVaultUsernameKey?: string; 
  public get azureVaultUsernameKey() {
    return this.getStringAttribute('azure_vault_username_key');
  }
  public set azureVaultUsernameKey(value: string) {
    this._azureVaultUsernameKey = value;
  }
  public resetAzureVaultUsernameKey() {
    this._azureVaultUsernameKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureVaultUsernameKeyInput() {
    return this._azureVaultUsernameKey;
  }

  // base_var_name - computed: false, optional: false, required: true
  private _baseVarName?: string; 
  public get baseVarName() {
    return this.getStringAttribute('base_var_name');
  }
  public set baseVarName(value: string) {
    this._baseVarName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseVarNameInput() {
    return this._baseVarName;
  }

  // cyberark_vault_query_string - computed: false, optional: true, required: false
  private _cyberarkVaultQueryString?: string; 
  public get cyberarkVaultQueryString() {
    return this.getStringAttribute('cyberark_vault_query_string');
  }
  public set cyberarkVaultQueryString(value: string) {
    this._cyberarkVaultQueryString = value;
  }
  public resetCyberarkVaultQueryString() {
    this._cyberarkVaultQueryString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cyberarkVaultQueryStringInput() {
    return this._cyberarkVaultQueryString;
  }

  // hashicorp_vault_engine - computed: false, optional: true, required: false
  private _hashicorpVaultEngine?: string; 
  public get hashicorpVaultEngine() {
    return this.getStringAttribute('hashicorp_vault_engine');
  }
  public set hashicorpVaultEngine(value: string) {
    this._hashicorpVaultEngine = value;
  }
  public resetHashicorpVaultEngine() {
    this._hashicorpVaultEngine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashicorpVaultEngineInput() {
    return this._hashicorpVaultEngine;
  }

  // hashicorp_vault_secret_key - computed: false, optional: true, required: false
  private _hashicorpVaultSecretKey?: string; 
  public get hashicorpVaultSecretKey() {
    return this.getStringAttribute('hashicorp_vault_secret_key');
  }
  public set hashicorpVaultSecretKey(value: string) {
    this._hashicorpVaultSecretKey = value;
  }
  public resetHashicorpVaultSecretKey() {
    this._hashicorpVaultSecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashicorpVaultSecretKeyInput() {
    return this._hashicorpVaultSecretKey;
  }

  // hashicorp_vault_secret_path - computed: false, optional: true, required: false
  private _hashicorpVaultSecretPath?: string; 
  public get hashicorpVaultSecretPath() {
    return this.getStringAttribute('hashicorp_vault_secret_path');
  }
  public set hashicorpVaultSecretPath(value: string) {
    this._hashicorpVaultSecretPath = value;
  }
  public resetHashicorpVaultSecretPath() {
    this._hashicorpVaultSecretPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashicorpVaultSecretPathInput() {
    return this._hashicorpVaultSecretPath;
  }

  // hashicorp_vault_username_key - computed: false, optional: true, required: false
  private _hashicorpVaultUsernameKey?: string; 
  public get hashicorpVaultUsernameKey() {
    return this.getStringAttribute('hashicorp_vault_username_key');
  }
  public set hashicorpVaultUsernameKey(value: string) {
    this._hashicorpVaultUsernameKey = value;
  }
  public resetHashicorpVaultUsernameKey() {
    this._hashicorpVaultUsernameKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashicorpVaultUsernameKeyInput() {
    return this._hashicorpVaultUsernameKey;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // vault - computed: false, optional: true, required: false
  private _vault?: string; 
  public get vault() {
    return this.getStringAttribute('vault');
  }
  public set vault(value: string) {
    this._vault = value;
  }
  public resetVault() {
    this._vault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultInput() {
    return this._vault;
  }
}

export class OracleDsourceOpsPreSyncCredentialsEnvVarsList extends cdktf.ComplexList {
  public internalValue? : OracleDsourceOpsPreSyncCredentialsEnvVars[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OracleDsourceOpsPreSyncCredentialsEnvVarsOutputReference {
    return new OracleDsourceOpsPreSyncCredentialsEnvVarsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OracleDsourceOpsPreSync {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#command OracleDsource#command}
  */
  readonly command?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#name OracleDsource#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#shell OracleDsource#shell}
  */
  readonly shell?: string;
  /**
  * credentials_env_vars block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#credentials_env_vars OracleDsource#credentials_env_vars}
  */
  readonly credentialsEnvVars?: OracleDsourceOpsPreSyncCredentialsEnvVars[] | cdktf.IResolvable;
}

export function oracleDsourceOpsPreSyncToTerraform(struct?: OracleDsourceOpsPreSync | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.stringToTerraform(struct!.command),
    name: cdktf.stringToTerraform(struct!.name),
    shell: cdktf.stringToTerraform(struct!.shell),
    credentials_env_vars: cdktf.listMapper(oracleDsourceOpsPreSyncCredentialsEnvVarsToTerraform, true)(struct!.credentialsEnvVars),
  }
}


export function oracleDsourceOpsPreSyncToHclTerraform(struct?: OracleDsourceOpsPreSync | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    command: {
      value: cdktf.stringToHclTerraform(struct!.command),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shell: {
      value: cdktf.stringToHclTerraform(struct!.shell),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credentials_env_vars: {
      value: cdktf.listMapperHcl(oracleDsourceOpsPreSyncCredentialsEnvVarsToHclTerraform, true)(struct!.credentialsEnvVars),
      isBlock: true,
      type: "list",
      storageClassType: "OracleDsourceOpsPreSyncCredentialsEnvVarsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OracleDsourceOpsPreSyncOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OracleDsourceOpsPreSync | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._shell !== undefined) {
      hasAnyValues = true;
      internalValueResult.shell = this._shell;
    }
    if (this._credentialsEnvVars?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsEnvVars = this._credentialsEnvVars?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleDsourceOpsPreSync | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._command = undefined;
      this._name = undefined;
      this._shell = undefined;
      this._credentialsEnvVars.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._command = value.command;
      this._name = value.name;
      this._shell = value.shell;
      this._credentialsEnvVars.internalValue = value.credentialsEnvVars;
    }
  }

  // command - computed: false, optional: true, required: false
  private _command?: string; 
  public get command() {
    return this.getStringAttribute('command');
  }
  public set command(value: string) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // element_id - computed: true, optional: false, required: false
  public get elementId() {
    return this.getStringAttribute('element_id');
  }

  // has_credentials - computed: true, optional: false, required: false
  public get hasCredentials() {
    return this.getBooleanAttribute('has_credentials');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // shell - computed: false, optional: true, required: false
  private _shell?: string; 
  public get shell() {
    return this.getStringAttribute('shell');
  }
  public set shell(value: string) {
    this._shell = value;
  }
  public resetShell() {
    this._shell = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shellInput() {
    return this._shell;
  }

  // credentials_env_vars - computed: false, optional: true, required: false
  private _credentialsEnvVars = new OracleDsourceOpsPreSyncCredentialsEnvVarsList(this, "credentials_env_vars", false);
  public get credentialsEnvVars() {
    return this._credentialsEnvVars;
  }
  public putCredentialsEnvVars(value: OracleDsourceOpsPreSyncCredentialsEnvVars[] | cdktf.IResolvable) {
    this._credentialsEnvVars.internalValue = value;
  }
  public resetCredentialsEnvVars() {
    this._credentialsEnvVars.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsEnvVarsInput() {
    return this._credentialsEnvVars.internalValue;
  }
}

export class OracleDsourceOpsPreSyncList extends cdktf.ComplexList {
  public internalValue? : OracleDsourceOpsPreSync[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OracleDsourceOpsPreSyncOutputReference {
    return new OracleDsourceOpsPreSyncOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OracleDsourceTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#key OracleDsource#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#value OracleDsource#value}
  */
  readonly value?: string;
}

export function oracleDsourceTagsToTerraform(struct?: OracleDsourceTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function oracleDsourceTagsToHclTerraform(struct?: OracleDsourceTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OracleDsourceTagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OracleDsourceTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleDsourceTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class OracleDsourceTagsList extends cdktf.ComplexList {
  public internalValue? : OracleDsourceTags[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OracleDsourceTagsOutputReference {
    return new OracleDsourceTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource delphix_oracle_dsource}
*/
export class OracleDsource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "delphix_oracle_dsource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OracleDsource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OracleDsource to import
  * @param importFromId The id of the existing OracleDsource that should be imported. Refer to the {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OracleDsource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "delphix_oracle_dsource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/oracle_dsource delphix_oracle_dsource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OracleDsourceConfig
  */
  public constructor(scope: Construct, id: string, config: OracleDsourceConfig) {
    super(scope, id, {
      terraformResourceType: 'delphix_oracle_dsource',
      terraformGeneratorMetadata: {
        providerName: 'delphix',
        providerVersion: '4.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._backupLevelEnabled = config.backupLevelEnabled;
    this._bandwidthLimit = config.bandwidthLimit;
    this._checkLogical = config.checkLogical;
    this._compressedLinkingEnabled = config.compressedLinkingEnabled;
    this._description = config.description;
    this._diagnoseNoLoggingFaults = config.diagnoseNoLoggingFaults;
    this._doNotResume = config.doNotResume;
    this._doubleSync = config.doubleSync;
    this._encryptedLinkingEnabled = config.encryptedLinkingEnabled;
    this._environmentUserId = config.environmentUserId;
    this._externalFilePath = config.externalFilePath;
    this._fallbackAzureVaultName = config.fallbackAzureVaultName;
    this._fallbackAzureVaultSecretKey = config.fallbackAzureVaultSecretKey;
    this._fallbackAzureVaultUsernameKey = config.fallbackAzureVaultUsernameKey;
    this._fallbackCyberarkVaultQueryString = config.fallbackCyberarkVaultQueryString;
    this._fallbackHashicorpVaultEngine = config.fallbackHashicorpVaultEngine;
    this._fallbackHashicorpVaultSecretKey = config.fallbackHashicorpVaultSecretKey;
    this._fallbackHashicorpVaultSecretPath = config.fallbackHashicorpVaultSecretPath;
    this._fallbackHashicorpVaultUsernameKey = config.fallbackHashicorpVaultUsernameKey;
    this._fallbackPassword = config.fallbackPassword;
    this._fallbackUsername = config.fallbackUsername;
    this._fallbackVault = config.fallbackVault;
    this._filesForFullBackup = config.filesForFullBackup;
    this._filesPerSet = config.filesPerSet;
    this._forceFullBackup = config.forceFullBackup;
    this._groupId = config.groupId;
    this._ignoreTagChanges = config.ignoreTagChanges;
    this._linkNow = config.linkNow;
    this._logSyncEnabled = config.logSyncEnabled;
    this._logSyncInterval = config.logSyncInterval;
    this._logSyncMode = config.logSyncMode;
    this._makeCurrentAccountOwner = config.makeCurrentAccountOwner;
    this._name = config.name;
    this._nonSysAzureVaultName = config.nonSysAzureVaultName;
    this._nonSysAzureVaultSecretKey = config.nonSysAzureVaultSecretKey;
    this._nonSysAzureVaultUsernameKey = config.nonSysAzureVaultUsernameKey;
    this._nonSysCyberarkVaultQueryString = config.nonSysCyberarkVaultQueryString;
    this._nonSysHashicorpVaultEngine = config.nonSysHashicorpVaultEngine;
    this._nonSysHashicorpVaultSecretKey = config.nonSysHashicorpVaultSecretKey;
    this._nonSysHashicorpVaultSecretPath = config.nonSysHashicorpVaultSecretPath;
    this._nonSysHashicorpVaultUsernameKey = config.nonSysHashicorpVaultUsernameKey;
    this._nonSysPassword = config.nonSysPassword;
    this._nonSysUsername = config.nonSysUsername;
    this._nonSysVault = config.nonSysVault;
    this._numberOfConnections = config.numberOfConnections;
    this._preProvisioningEnabled = config.preProvisioningEnabled;
    this._rmanChannels = config.rmanChannels;
    this._rollbackOnFailure = config.rollbackOnFailure;
    this._skipSpaceCheck = config.skipSpaceCheck;
    this._skipWaitForSnapshotCreation = config.skipWaitForSnapshotCreation;
    this._sourceValue = config.sourceValue;
    this._waitTime = config.waitTime;
    this._opsPostSync.internalValue = config.opsPostSync;
    this._opsPreLogSync.internalValue = config.opsPreLogSync;
    this._opsPreSync.internalValue = config.opsPreSync;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_level_enabled - computed: false, optional: true, required: false
  private _backupLevelEnabled?: boolean | cdktf.IResolvable; 
  public get backupLevelEnabled() {
    return this.getBooleanAttribute('backup_level_enabled');
  }
  public set backupLevelEnabled(value: boolean | cdktf.IResolvable) {
    this._backupLevelEnabled = value;
  }
  public resetBackupLevelEnabled() {
    this._backupLevelEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupLevelEnabledInput() {
    return this._backupLevelEnabled;
  }

  // bandwidth_limit - computed: false, optional: true, required: false
  private _bandwidthLimit?: number; 
  public get bandwidthLimit() {
    return this.getNumberAttribute('bandwidth_limit');
  }
  public set bandwidthLimit(value: number) {
    this._bandwidthLimit = value;
  }
  public resetBandwidthLimit() {
    this._bandwidthLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthLimitInput() {
    return this._bandwidthLimit;
  }

  // check_logical - computed: false, optional: true, required: false
  private _checkLogical?: boolean | cdktf.IResolvable; 
  public get checkLogical() {
    return this.getBooleanAttribute('check_logical');
  }
  public set checkLogical(value: boolean | cdktf.IResolvable) {
    this._checkLogical = value;
  }
  public resetCheckLogical() {
    this._checkLogical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkLogicalInput() {
    return this._checkLogical;
  }

  // compressed_linking_enabled - computed: false, optional: true, required: false
  private _compressedLinkingEnabled?: boolean | cdktf.IResolvable; 
  public get compressedLinkingEnabled() {
    return this.getBooleanAttribute('compressed_linking_enabled');
  }
  public set compressedLinkingEnabled(value: boolean | cdktf.IResolvable) {
    this._compressedLinkingEnabled = value;
  }
  public resetCompressedLinkingEnabled() {
    this._compressedLinkingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressedLinkingEnabledInput() {
    return this._compressedLinkingEnabled;
  }

  // content_type - computed: true, optional: false, required: false
  public get contentType() {
    return this.getStringAttribute('content_type');
  }

  // creation_date - computed: true, optional: false, required: false
  public get creationDate() {
    return this.getStringAttribute('creation_date');
  }

  // current_timeflow_id - computed: true, optional: false, required: false
  public get currentTimeflowId() {
    return this.getStringAttribute('current_timeflow_id');
  }

  // data_uuid - computed: true, optional: false, required: false
  public get dataUuid() {
    return this.getStringAttribute('data_uuid');
  }

  // database_type - computed: true, optional: false, required: false
  public get databaseType() {
    return this.getStringAttribute('database_type');
  }

  // database_version - computed: true, optional: false, required: false
  public get databaseVersion() {
    return this.getStringAttribute('database_version');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // diagnose_no_logging_faults - computed: false, optional: true, required: false
  private _diagnoseNoLoggingFaults?: boolean | cdktf.IResolvable; 
  public get diagnoseNoLoggingFaults() {
    return this.getBooleanAttribute('diagnose_no_logging_faults');
  }
  public set diagnoseNoLoggingFaults(value: boolean | cdktf.IResolvable) {
    this._diagnoseNoLoggingFaults = value;
  }
  public resetDiagnoseNoLoggingFaults() {
    this._diagnoseNoLoggingFaults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diagnoseNoLoggingFaultsInput() {
    return this._diagnoseNoLoggingFaults;
  }

  // do_not_resume - computed: false, optional: true, required: false
  private _doNotResume?: boolean | cdktf.IResolvable; 
  public get doNotResume() {
    return this.getBooleanAttribute('do_not_resume');
  }
  public set doNotResume(value: boolean | cdktf.IResolvable) {
    this._doNotResume = value;
  }
  public resetDoNotResume() {
    this._doNotResume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doNotResumeInput() {
    return this._doNotResume;
  }

  // double_sync - computed: false, optional: true, required: false
  private _doubleSync?: boolean | cdktf.IResolvable; 
  public get doubleSync() {
    return this.getBooleanAttribute('double_sync');
  }
  public set doubleSync(value: boolean | cdktf.IResolvable) {
    this._doubleSync = value;
  }
  public resetDoubleSync() {
    this._doubleSync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doubleSyncInput() {
    return this._doubleSync;
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // encrypted_linking_enabled - computed: false, optional: true, required: false
  private _encryptedLinkingEnabled?: boolean | cdktf.IResolvable; 
  public get encryptedLinkingEnabled() {
    return this.getBooleanAttribute('encrypted_linking_enabled');
  }
  public set encryptedLinkingEnabled(value: boolean | cdktf.IResolvable) {
    this._encryptedLinkingEnabled = value;
  }
  public resetEncryptedLinkingEnabled() {
    this._encryptedLinkingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedLinkingEnabledInput() {
    return this._encryptedLinkingEnabled;
  }

  // engine_id - computed: true, optional: false, required: false
  public get engineId() {
    return this.getStringAttribute('engine_id');
  }

  // engine_name - computed: true, optional: false, required: false
  public get engineName() {
    return this.getStringAttribute('engine_name');
  }

  // environment_user_id - computed: false, optional: true, required: false
  private _environmentUserId?: string; 
  public get environmentUserId() {
    return this.getStringAttribute('environment_user_id');
  }
  public set environmentUserId(value: string) {
    this._environmentUserId = value;
  }
  public resetEnvironmentUserId() {
    this._environmentUserId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentUserIdInput() {
    return this._environmentUserId;
  }

  // exported_data_directory - computed: true, optional: false, required: false
  public get exportedDataDirectory() {
    return this.getStringAttribute('exported_data_directory');
  }

  // external_file_path - computed: false, optional: true, required: false
  private _externalFilePath?: string; 
  public get externalFilePath() {
    return this.getStringAttribute('external_file_path');
  }
  public set externalFilePath(value: string) {
    this._externalFilePath = value;
  }
  public resetExternalFilePath() {
    this._externalFilePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalFilePathInput() {
    return this._externalFilePath;
  }

  // fallback_azure_vault_name - computed: false, optional: true, required: false
  private _fallbackAzureVaultName?: string; 
  public get fallbackAzureVaultName() {
    return this.getStringAttribute('fallback_azure_vault_name');
  }
  public set fallbackAzureVaultName(value: string) {
    this._fallbackAzureVaultName = value;
  }
  public resetFallbackAzureVaultName() {
    this._fallbackAzureVaultName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackAzureVaultNameInput() {
    return this._fallbackAzureVaultName;
  }

  // fallback_azure_vault_secret_key - computed: false, optional: true, required: false
  private _fallbackAzureVaultSecretKey?: string; 
  public get fallbackAzureVaultSecretKey() {
    return this.getStringAttribute('fallback_azure_vault_secret_key');
  }
  public set fallbackAzureVaultSecretKey(value: string) {
    this._fallbackAzureVaultSecretKey = value;
  }
  public resetFallbackAzureVaultSecretKey() {
    this._fallbackAzureVaultSecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackAzureVaultSecretKeyInput() {
    return this._fallbackAzureVaultSecretKey;
  }

  // fallback_azure_vault_username_key - computed: false, optional: true, required: false
  private _fallbackAzureVaultUsernameKey?: string; 
  public get fallbackAzureVaultUsernameKey() {
    return this.getStringAttribute('fallback_azure_vault_username_key');
  }
  public set fallbackAzureVaultUsernameKey(value: string) {
    this._fallbackAzureVaultUsernameKey = value;
  }
  public resetFallbackAzureVaultUsernameKey() {
    this._fallbackAzureVaultUsernameKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackAzureVaultUsernameKeyInput() {
    return this._fallbackAzureVaultUsernameKey;
  }

  // fallback_cyberark_vault_query_string - computed: false, optional: true, required: false
  private _fallbackCyberarkVaultQueryString?: string; 
  public get fallbackCyberarkVaultQueryString() {
    return this.getStringAttribute('fallback_cyberark_vault_query_string');
  }
  public set fallbackCyberarkVaultQueryString(value: string) {
    this._fallbackCyberarkVaultQueryString = value;
  }
  public resetFallbackCyberarkVaultQueryString() {
    this._fallbackCyberarkVaultQueryString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackCyberarkVaultQueryStringInput() {
    return this._fallbackCyberarkVaultQueryString;
  }

  // fallback_hashicorp_vault_engine - computed: false, optional: true, required: false
  private _fallbackHashicorpVaultEngine?: string; 
  public get fallbackHashicorpVaultEngine() {
    return this.getStringAttribute('fallback_hashicorp_vault_engine');
  }
  public set fallbackHashicorpVaultEngine(value: string) {
    this._fallbackHashicorpVaultEngine = value;
  }
  public resetFallbackHashicorpVaultEngine() {
    this._fallbackHashicorpVaultEngine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackHashicorpVaultEngineInput() {
    return this._fallbackHashicorpVaultEngine;
  }

  // fallback_hashicorp_vault_secret_key - computed: false, optional: true, required: false
  private _fallbackHashicorpVaultSecretKey?: string; 
  public get fallbackHashicorpVaultSecretKey() {
    return this.getStringAttribute('fallback_hashicorp_vault_secret_key');
  }
  public set fallbackHashicorpVaultSecretKey(value: string) {
    this._fallbackHashicorpVaultSecretKey = value;
  }
  public resetFallbackHashicorpVaultSecretKey() {
    this._fallbackHashicorpVaultSecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackHashicorpVaultSecretKeyInput() {
    return this._fallbackHashicorpVaultSecretKey;
  }

  // fallback_hashicorp_vault_secret_path - computed: false, optional: true, required: false
  private _fallbackHashicorpVaultSecretPath?: string; 
  public get fallbackHashicorpVaultSecretPath() {
    return this.getStringAttribute('fallback_hashicorp_vault_secret_path');
  }
  public set fallbackHashicorpVaultSecretPath(value: string) {
    this._fallbackHashicorpVaultSecretPath = value;
  }
  public resetFallbackHashicorpVaultSecretPath() {
    this._fallbackHashicorpVaultSecretPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackHashicorpVaultSecretPathInput() {
    return this._fallbackHashicorpVaultSecretPath;
  }

  // fallback_hashicorp_vault_username_key - computed: false, optional: true, required: false
  private _fallbackHashicorpVaultUsernameKey?: string; 
  public get fallbackHashicorpVaultUsernameKey() {
    return this.getStringAttribute('fallback_hashicorp_vault_username_key');
  }
  public set fallbackHashicorpVaultUsernameKey(value: string) {
    this._fallbackHashicorpVaultUsernameKey = value;
  }
  public resetFallbackHashicorpVaultUsernameKey() {
    this._fallbackHashicorpVaultUsernameKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackHashicorpVaultUsernameKeyInput() {
    return this._fallbackHashicorpVaultUsernameKey;
  }

  // fallback_password - computed: false, optional: true, required: false
  private _fallbackPassword?: string; 
  public get fallbackPassword() {
    return this.getStringAttribute('fallback_password');
  }
  public set fallbackPassword(value: string) {
    this._fallbackPassword = value;
  }
  public resetFallbackPassword() {
    this._fallbackPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackPasswordInput() {
    return this._fallbackPassword;
  }

  // fallback_username - computed: false, optional: true, required: false
  private _fallbackUsername?: string; 
  public get fallbackUsername() {
    return this.getStringAttribute('fallback_username');
  }
  public set fallbackUsername(value: string) {
    this._fallbackUsername = value;
  }
  public resetFallbackUsername() {
    this._fallbackUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackUsernameInput() {
    return this._fallbackUsername;
  }

  // fallback_vault - computed: false, optional: true, required: false
  private _fallbackVault?: string; 
  public get fallbackVault() {
    return this.getStringAttribute('fallback_vault');
  }
  public set fallbackVault(value: string) {
    this._fallbackVault = value;
  }
  public resetFallbackVault() {
    this._fallbackVault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackVaultInput() {
    return this._fallbackVault;
  }

  // files_for_full_backup - computed: false, optional: true, required: false
  private _filesForFullBackup?: number[]; 
  public get filesForFullBackup() {
    return this.getNumberListAttribute('files_for_full_backup');
  }
  public set filesForFullBackup(value: number[]) {
    this._filesForFullBackup = value;
  }
  public resetFilesForFullBackup() {
    this._filesForFullBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filesForFullBackupInput() {
    return this._filesForFullBackup;
  }

  // files_per_set - computed: false, optional: true, required: false
  private _filesPerSet?: number; 
  public get filesPerSet() {
    return this.getNumberAttribute('files_per_set');
  }
  public set filesPerSet(value: number) {
    this._filesPerSet = value;
  }
  public resetFilesPerSet() {
    this._filesPerSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filesPerSetInput() {
    return this._filesPerSet;
  }

  // force_full_backup - computed: false, optional: true, required: false
  private _forceFullBackup?: boolean | cdktf.IResolvable; 
  public get forceFullBackup() {
    return this.getBooleanAttribute('force_full_backup');
  }
  public set forceFullBackup(value: boolean | cdktf.IResolvable) {
    this._forceFullBackup = value;
  }
  public resetForceFullBackup() {
    this._forceFullBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceFullBackupInput() {
    return this._forceFullBackup;
  }

  // group_id - computed: false, optional: true, required: false
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // group_name - computed: true, optional: false, required: false
  public get groupName() {
    return this.getStringAttribute('group_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ignore_tag_changes - computed: false, optional: true, required: false
  private _ignoreTagChanges?: boolean | cdktf.IResolvable; 
  public get ignoreTagChanges() {
    return this.getBooleanAttribute('ignore_tag_changes');
  }
  public set ignoreTagChanges(value: boolean | cdktf.IResolvable) {
    this._ignoreTagChanges = value;
  }
  public resetIgnoreTagChanges() {
    this._ignoreTagChanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreTagChangesInput() {
    return this._ignoreTagChanges;
  }

  // is_appdata - computed: true, optional: false, required: false
  public get isAppdata() {
    return this.getBooleanAttribute('is_appdata');
  }

  // is_detached - computed: true, optional: false, required: false
  public get isDetached() {
    return this.getBooleanAttribute('is_detached');
  }

  // is_replica - computed: true, optional: false, required: false
  public get isReplica() {
    return this.getBooleanAttribute('is_replica');
  }

  // link_now - computed: false, optional: true, required: false
  private _linkNow?: boolean | cdktf.IResolvable; 
  public get linkNow() {
    return this.getBooleanAttribute('link_now');
  }
  public set linkNow(value: boolean | cdktf.IResolvable) {
    this._linkNow = value;
  }
  public resetLinkNow() {
    this._linkNow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkNowInput() {
    return this._linkNow;
  }

  // log_sync_enabled - computed: true, optional: true, required: false
  private _logSyncEnabled?: boolean | cdktf.IResolvable; 
  public get logSyncEnabled() {
    return this.getBooleanAttribute('log_sync_enabled');
  }
  public set logSyncEnabled(value: boolean | cdktf.IResolvable) {
    this._logSyncEnabled = value;
  }
  public resetLogSyncEnabled() {
    this._logSyncEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logSyncEnabledInput() {
    return this._logSyncEnabled;
  }

  // log_sync_interval - computed: false, optional: true, required: false
  private _logSyncInterval?: number; 
  public get logSyncInterval() {
    return this.getNumberAttribute('log_sync_interval');
  }
  public set logSyncInterval(value: number) {
    this._logSyncInterval = value;
  }
  public resetLogSyncInterval() {
    this._logSyncInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logSyncIntervalInput() {
    return this._logSyncInterval;
  }

  // log_sync_mode - computed: false, optional: true, required: false
  private _logSyncMode?: string; 
  public get logSyncMode() {
    return this.getStringAttribute('log_sync_mode');
  }
  public set logSyncMode(value: string) {
    this._logSyncMode = value;
  }
  public resetLogSyncMode() {
    this._logSyncMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logSyncModeInput() {
    return this._logSyncMode;
  }

  // make_current_account_owner - computed: false, optional: true, required: false
  private _makeCurrentAccountOwner?: boolean | cdktf.IResolvable; 
  public get makeCurrentAccountOwner() {
    return this.getBooleanAttribute('make_current_account_owner');
  }
  public set makeCurrentAccountOwner(value: boolean | cdktf.IResolvable) {
    this._makeCurrentAccountOwner = value;
  }
  public resetMakeCurrentAccountOwner() {
    this._makeCurrentAccountOwner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get makeCurrentAccountOwnerInput() {
    return this._makeCurrentAccountOwner;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // non_sys_azure_vault_name - computed: false, optional: true, required: false
  private _nonSysAzureVaultName?: string; 
  public get nonSysAzureVaultName() {
    return this.getStringAttribute('non_sys_azure_vault_name');
  }
  public set nonSysAzureVaultName(value: string) {
    this._nonSysAzureVaultName = value;
  }
  public resetNonSysAzureVaultName() {
    this._nonSysAzureVaultName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonSysAzureVaultNameInput() {
    return this._nonSysAzureVaultName;
  }

  // non_sys_azure_vault_secret_key - computed: false, optional: true, required: false
  private _nonSysAzureVaultSecretKey?: string; 
  public get nonSysAzureVaultSecretKey() {
    return this.getStringAttribute('non_sys_azure_vault_secret_key');
  }
  public set nonSysAzureVaultSecretKey(value: string) {
    this._nonSysAzureVaultSecretKey = value;
  }
  public resetNonSysAzureVaultSecretKey() {
    this._nonSysAzureVaultSecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonSysAzureVaultSecretKeyInput() {
    return this._nonSysAzureVaultSecretKey;
  }

  // non_sys_azure_vault_username_key - computed: false, optional: true, required: false
  private _nonSysAzureVaultUsernameKey?: string; 
  public get nonSysAzureVaultUsernameKey() {
    return this.getStringAttribute('non_sys_azure_vault_username_key');
  }
  public set nonSysAzureVaultUsernameKey(value: string) {
    this._nonSysAzureVaultUsernameKey = value;
  }
  public resetNonSysAzureVaultUsernameKey() {
    this._nonSysAzureVaultUsernameKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonSysAzureVaultUsernameKeyInput() {
    return this._nonSysAzureVaultUsernameKey;
  }

  // non_sys_cyberark_vault_query_string - computed: false, optional: true, required: false
  private _nonSysCyberarkVaultQueryString?: string; 
  public get nonSysCyberarkVaultQueryString() {
    return this.getStringAttribute('non_sys_cyberark_vault_query_string');
  }
  public set nonSysCyberarkVaultQueryString(value: string) {
    this._nonSysCyberarkVaultQueryString = value;
  }
  public resetNonSysCyberarkVaultQueryString() {
    this._nonSysCyberarkVaultQueryString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonSysCyberarkVaultQueryStringInput() {
    return this._nonSysCyberarkVaultQueryString;
  }

  // non_sys_hashicorp_vault_engine - computed: false, optional: true, required: false
  private _nonSysHashicorpVaultEngine?: string; 
  public get nonSysHashicorpVaultEngine() {
    return this.getStringAttribute('non_sys_hashicorp_vault_engine');
  }
  public set nonSysHashicorpVaultEngine(value: string) {
    this._nonSysHashicorpVaultEngine = value;
  }
  public resetNonSysHashicorpVaultEngine() {
    this._nonSysHashicorpVaultEngine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonSysHashicorpVaultEngineInput() {
    return this._nonSysHashicorpVaultEngine;
  }

  // non_sys_hashicorp_vault_secret_key - computed: false, optional: true, required: false
  private _nonSysHashicorpVaultSecretKey?: string; 
  public get nonSysHashicorpVaultSecretKey() {
    return this.getStringAttribute('non_sys_hashicorp_vault_secret_key');
  }
  public set nonSysHashicorpVaultSecretKey(value: string) {
    this._nonSysHashicorpVaultSecretKey = value;
  }
  public resetNonSysHashicorpVaultSecretKey() {
    this._nonSysHashicorpVaultSecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonSysHashicorpVaultSecretKeyInput() {
    return this._nonSysHashicorpVaultSecretKey;
  }

  // non_sys_hashicorp_vault_secret_path - computed: false, optional: true, required: false
  private _nonSysHashicorpVaultSecretPath?: string; 
  public get nonSysHashicorpVaultSecretPath() {
    return this.getStringAttribute('non_sys_hashicorp_vault_secret_path');
  }
  public set nonSysHashicorpVaultSecretPath(value: string) {
    this._nonSysHashicorpVaultSecretPath = value;
  }
  public resetNonSysHashicorpVaultSecretPath() {
    this._nonSysHashicorpVaultSecretPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonSysHashicorpVaultSecretPathInput() {
    return this._nonSysHashicorpVaultSecretPath;
  }

  // non_sys_hashicorp_vault_username_key - computed: false, optional: true, required: false
  private _nonSysHashicorpVaultUsernameKey?: string; 
  public get nonSysHashicorpVaultUsernameKey() {
    return this.getStringAttribute('non_sys_hashicorp_vault_username_key');
  }
  public set nonSysHashicorpVaultUsernameKey(value: string) {
    this._nonSysHashicorpVaultUsernameKey = value;
  }
  public resetNonSysHashicorpVaultUsernameKey() {
    this._nonSysHashicorpVaultUsernameKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonSysHashicorpVaultUsernameKeyInput() {
    return this._nonSysHashicorpVaultUsernameKey;
  }

  // non_sys_password - computed: false, optional: true, required: false
  private _nonSysPassword?: string; 
  public get nonSysPassword() {
    return this.getStringAttribute('non_sys_password');
  }
  public set nonSysPassword(value: string) {
    this._nonSysPassword = value;
  }
  public resetNonSysPassword() {
    this._nonSysPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonSysPasswordInput() {
    return this._nonSysPassword;
  }

  // non_sys_username - computed: false, optional: true, required: false
  private _nonSysUsername?: string; 
  public get nonSysUsername() {
    return this.getStringAttribute('non_sys_username');
  }
  public set nonSysUsername(value: string) {
    this._nonSysUsername = value;
  }
  public resetNonSysUsername() {
    this._nonSysUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonSysUsernameInput() {
    return this._nonSysUsername;
  }

  // non_sys_vault - computed: false, optional: true, required: false
  private _nonSysVault?: string; 
  public get nonSysVault() {
    return this.getStringAttribute('non_sys_vault');
  }
  public set nonSysVault(value: string) {
    this._nonSysVault = value;
  }
  public resetNonSysVault() {
    this._nonSysVault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonSysVaultInput() {
    return this._nonSysVault;
  }

  // number_of_connections - computed: false, optional: true, required: false
  private _numberOfConnections?: number; 
  public get numberOfConnections() {
    return this.getNumberAttribute('number_of_connections');
  }
  public set numberOfConnections(value: number) {
    this._numberOfConnections = value;
  }
  public resetNumberOfConnections() {
    this._numberOfConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfConnectionsInput() {
    return this._numberOfConnections;
  }

  // pre_provisioning_enabled - computed: false, optional: true, required: false
  private _preProvisioningEnabled?: boolean | cdktf.IResolvable; 
  public get preProvisioningEnabled() {
    return this.getBooleanAttribute('pre_provisioning_enabled');
  }
  public set preProvisioningEnabled(value: boolean | cdktf.IResolvable) {
    this._preProvisioningEnabled = value;
  }
  public resetPreProvisioningEnabled() {
    this._preProvisioningEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preProvisioningEnabledInput() {
    return this._preProvisioningEnabled;
  }

  // retention_policy_id - computed: true, optional: false, required: false
  public get retentionPolicyId() {
    return this.getStringAttribute('retention_policy_id');
  }

  // rman_channels - computed: false, optional: true, required: false
  private _rmanChannels?: number; 
  public get rmanChannels() {
    return this.getNumberAttribute('rman_channels');
  }
  public set rmanChannels(value: number) {
    this._rmanChannels = value;
  }
  public resetRmanChannels() {
    this._rmanChannels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rmanChannelsInput() {
    return this._rmanChannels;
  }

  // rollback_on_failure - computed: false, optional: true, required: false
  private _rollbackOnFailure?: boolean | cdktf.IResolvable; 
  public get rollbackOnFailure() {
    return this.getBooleanAttribute('rollback_on_failure');
  }
  public set rollbackOnFailure(value: boolean | cdktf.IResolvable) {
    this._rollbackOnFailure = value;
  }
  public resetRollbackOnFailure() {
    this._rollbackOnFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollbackOnFailureInput() {
    return this._rollbackOnFailure;
  }

  // skip_space_check - computed: false, optional: true, required: false
  private _skipSpaceCheck?: boolean | cdktf.IResolvable; 
  public get skipSpaceCheck() {
    return this.getBooleanAttribute('skip_space_check');
  }
  public set skipSpaceCheck(value: boolean | cdktf.IResolvable) {
    this._skipSpaceCheck = value;
  }
  public resetSkipSpaceCheck() {
    this._skipSpaceCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipSpaceCheckInput() {
    return this._skipSpaceCheck;
  }

  // skip_wait_for_snapshot_creation - computed: false, optional: true, required: false
  private _skipWaitForSnapshotCreation?: boolean | cdktf.IResolvable; 
  public get skipWaitForSnapshotCreation() {
    return this.getBooleanAttribute('skip_wait_for_snapshot_creation');
  }
  public set skipWaitForSnapshotCreation(value: boolean | cdktf.IResolvable) {
    this._skipWaitForSnapshotCreation = value;
  }
  public resetSkipWaitForSnapshotCreation() {
    this._skipWaitForSnapshotCreation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipWaitForSnapshotCreationInput() {
    return this._skipWaitForSnapshotCreation;
  }

  // source_id - computed: true, optional: false, required: false
  public get sourceId() {
    return this.getStringAttribute('source_id');
  }

  // source_value - computed: false, optional: false, required: true
  private _sourceValue?: string; 
  public get sourceValue() {
    return this.getStringAttribute('source_value');
  }
  public set sourceValue(value: string) {
    this._sourceValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceValueInput() {
    return this._sourceValue;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // sync_policy_id - computed: true, optional: false, required: false
  public get syncPolicyId() {
    return this.getStringAttribute('sync_policy_id');
  }

  // wait_time - computed: false, optional: true, required: false
  private _waitTime?: number; 
  public get waitTime() {
    return this.getNumberAttribute('wait_time');
  }
  public set waitTime(value: number) {
    this._waitTime = value;
  }
  public resetWaitTime() {
    this._waitTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitTimeInput() {
    return this._waitTime;
  }

  // ops_post_sync - computed: false, optional: true, required: false
  private _opsPostSync = new OracleDsourceOpsPostSyncList(this, "ops_post_sync", false);
  public get opsPostSync() {
    return this._opsPostSync;
  }
  public putOpsPostSync(value: OracleDsourceOpsPostSync[] | cdktf.IResolvable) {
    this._opsPostSync.internalValue = value;
  }
  public resetOpsPostSync() {
    this._opsPostSync.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opsPostSyncInput() {
    return this._opsPostSync.internalValue;
  }

  // ops_pre_log_sync - computed: false, optional: true, required: false
  private _opsPreLogSync = new OracleDsourceOpsPreLogSyncList(this, "ops_pre_log_sync", false);
  public get opsPreLogSync() {
    return this._opsPreLogSync;
  }
  public putOpsPreLogSync(value: OracleDsourceOpsPreLogSync[] | cdktf.IResolvable) {
    this._opsPreLogSync.internalValue = value;
  }
  public resetOpsPreLogSync() {
    this._opsPreLogSync.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opsPreLogSyncInput() {
    return this._opsPreLogSync.internalValue;
  }

  // ops_pre_sync - computed: false, optional: true, required: false
  private _opsPreSync = new OracleDsourceOpsPreSyncList(this, "ops_pre_sync", false);
  public get opsPreSync() {
    return this._opsPreSync;
  }
  public putOpsPreSync(value: OracleDsourceOpsPreSync[] | cdktf.IResolvable) {
    this._opsPreSync.internalValue = value;
  }
  public resetOpsPreSync() {
    this._opsPreSync.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opsPreSyncInput() {
    return this._opsPreSync.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new OracleDsourceTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: OracleDsourceTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backup_level_enabled: cdktf.booleanToTerraform(this._backupLevelEnabled),
      bandwidth_limit: cdktf.numberToTerraform(this._bandwidthLimit),
      check_logical: cdktf.booleanToTerraform(this._checkLogical),
      compressed_linking_enabled: cdktf.booleanToTerraform(this._compressedLinkingEnabled),
      description: cdktf.stringToTerraform(this._description),
      diagnose_no_logging_faults: cdktf.booleanToTerraform(this._diagnoseNoLoggingFaults),
      do_not_resume: cdktf.booleanToTerraform(this._doNotResume),
      double_sync: cdktf.booleanToTerraform(this._doubleSync),
      encrypted_linking_enabled: cdktf.booleanToTerraform(this._encryptedLinkingEnabled),
      environment_user_id: cdktf.stringToTerraform(this._environmentUserId),
      external_file_path: cdktf.stringToTerraform(this._externalFilePath),
      fallback_azure_vault_name: cdktf.stringToTerraform(this._fallbackAzureVaultName),
      fallback_azure_vault_secret_key: cdktf.stringToTerraform(this._fallbackAzureVaultSecretKey),
      fallback_azure_vault_username_key: cdktf.stringToTerraform(this._fallbackAzureVaultUsernameKey),
      fallback_cyberark_vault_query_string: cdktf.stringToTerraform(this._fallbackCyberarkVaultQueryString),
      fallback_hashicorp_vault_engine: cdktf.stringToTerraform(this._fallbackHashicorpVaultEngine),
      fallback_hashicorp_vault_secret_key: cdktf.stringToTerraform(this._fallbackHashicorpVaultSecretKey),
      fallback_hashicorp_vault_secret_path: cdktf.stringToTerraform(this._fallbackHashicorpVaultSecretPath),
      fallback_hashicorp_vault_username_key: cdktf.stringToTerraform(this._fallbackHashicorpVaultUsernameKey),
      fallback_password: cdktf.stringToTerraform(this._fallbackPassword),
      fallback_username: cdktf.stringToTerraform(this._fallbackUsername),
      fallback_vault: cdktf.stringToTerraform(this._fallbackVault),
      files_for_full_backup: cdktf.listMapper(cdktf.numberToTerraform, false)(this._filesForFullBackup),
      files_per_set: cdktf.numberToTerraform(this._filesPerSet),
      force_full_backup: cdktf.booleanToTerraform(this._forceFullBackup),
      group_id: cdktf.stringToTerraform(this._groupId),
      ignore_tag_changes: cdktf.booleanToTerraform(this._ignoreTagChanges),
      link_now: cdktf.booleanToTerraform(this._linkNow),
      log_sync_enabled: cdktf.booleanToTerraform(this._logSyncEnabled),
      log_sync_interval: cdktf.numberToTerraform(this._logSyncInterval),
      log_sync_mode: cdktf.stringToTerraform(this._logSyncMode),
      make_current_account_owner: cdktf.booleanToTerraform(this._makeCurrentAccountOwner),
      name: cdktf.stringToTerraform(this._name),
      non_sys_azure_vault_name: cdktf.stringToTerraform(this._nonSysAzureVaultName),
      non_sys_azure_vault_secret_key: cdktf.stringToTerraform(this._nonSysAzureVaultSecretKey),
      non_sys_azure_vault_username_key: cdktf.stringToTerraform(this._nonSysAzureVaultUsernameKey),
      non_sys_cyberark_vault_query_string: cdktf.stringToTerraform(this._nonSysCyberarkVaultQueryString),
      non_sys_hashicorp_vault_engine: cdktf.stringToTerraform(this._nonSysHashicorpVaultEngine),
      non_sys_hashicorp_vault_secret_key: cdktf.stringToTerraform(this._nonSysHashicorpVaultSecretKey),
      non_sys_hashicorp_vault_secret_path: cdktf.stringToTerraform(this._nonSysHashicorpVaultSecretPath),
      non_sys_hashicorp_vault_username_key: cdktf.stringToTerraform(this._nonSysHashicorpVaultUsernameKey),
      non_sys_password: cdktf.stringToTerraform(this._nonSysPassword),
      non_sys_username: cdktf.stringToTerraform(this._nonSysUsername),
      non_sys_vault: cdktf.stringToTerraform(this._nonSysVault),
      number_of_connections: cdktf.numberToTerraform(this._numberOfConnections),
      pre_provisioning_enabled: cdktf.booleanToTerraform(this._preProvisioningEnabled),
      rman_channels: cdktf.numberToTerraform(this._rmanChannels),
      rollback_on_failure: cdktf.booleanToTerraform(this._rollbackOnFailure),
      skip_space_check: cdktf.booleanToTerraform(this._skipSpaceCheck),
      skip_wait_for_snapshot_creation: cdktf.booleanToTerraform(this._skipWaitForSnapshotCreation),
      source_value: cdktf.stringToTerraform(this._sourceValue),
      wait_time: cdktf.numberToTerraform(this._waitTime),
      ops_post_sync: cdktf.listMapper(oracleDsourceOpsPostSyncToTerraform, true)(this._opsPostSync.internalValue),
      ops_pre_log_sync: cdktf.listMapper(oracleDsourceOpsPreLogSyncToTerraform, true)(this._opsPreLogSync.internalValue),
      ops_pre_sync: cdktf.listMapper(oracleDsourceOpsPreSyncToTerraform, true)(this._opsPreSync.internalValue),
      tags: cdktf.listMapper(oracleDsourceTagsToTerraform, true)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backup_level_enabled: {
        value: cdktf.booleanToHclTerraform(this._backupLevelEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bandwidth_limit: {
        value: cdktf.numberToHclTerraform(this._bandwidthLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      check_logical: {
        value: cdktf.booleanToHclTerraform(this._checkLogical),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      compressed_linking_enabled: {
        value: cdktf.booleanToHclTerraform(this._compressedLinkingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      diagnose_no_logging_faults: {
        value: cdktf.booleanToHclTerraform(this._diagnoseNoLoggingFaults),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      do_not_resume: {
        value: cdktf.booleanToHclTerraform(this._doNotResume),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      double_sync: {
        value: cdktf.booleanToHclTerraform(this._doubleSync),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      encrypted_linking_enabled: {
        value: cdktf.booleanToHclTerraform(this._encryptedLinkingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      environment_user_id: {
        value: cdktf.stringToHclTerraform(this._environmentUserId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_file_path: {
        value: cdktf.stringToHclTerraform(this._externalFilePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fallback_azure_vault_name: {
        value: cdktf.stringToHclTerraform(this._fallbackAzureVaultName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fallback_azure_vault_secret_key: {
        value: cdktf.stringToHclTerraform(this._fallbackAzureVaultSecretKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fallback_azure_vault_username_key: {
        value: cdktf.stringToHclTerraform(this._fallbackAzureVaultUsernameKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fallback_cyberark_vault_query_string: {
        value: cdktf.stringToHclTerraform(this._fallbackCyberarkVaultQueryString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fallback_hashicorp_vault_engine: {
        value: cdktf.stringToHclTerraform(this._fallbackHashicorpVaultEngine),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fallback_hashicorp_vault_secret_key: {
        value: cdktf.stringToHclTerraform(this._fallbackHashicorpVaultSecretKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fallback_hashicorp_vault_secret_path: {
        value: cdktf.stringToHclTerraform(this._fallbackHashicorpVaultSecretPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fallback_hashicorp_vault_username_key: {
        value: cdktf.stringToHclTerraform(this._fallbackHashicorpVaultUsernameKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fallback_password: {
        value: cdktf.stringToHclTerraform(this._fallbackPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fallback_username: {
        value: cdktf.stringToHclTerraform(this._fallbackUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fallback_vault: {
        value: cdktf.stringToHclTerraform(this._fallbackVault),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      files_for_full_backup: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._filesForFullBackup),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      files_per_set: {
        value: cdktf.numberToHclTerraform(this._filesPerSet),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      force_full_backup: {
        value: cdktf.booleanToHclTerraform(this._forceFullBackup),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      group_id: {
        value: cdktf.stringToHclTerraform(this._groupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ignore_tag_changes: {
        value: cdktf.booleanToHclTerraform(this._ignoreTagChanges),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      link_now: {
        value: cdktf.booleanToHclTerraform(this._linkNow),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      log_sync_enabled: {
        value: cdktf.booleanToHclTerraform(this._logSyncEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      log_sync_interval: {
        value: cdktf.numberToHclTerraform(this._logSyncInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      log_sync_mode: {
        value: cdktf.stringToHclTerraform(this._logSyncMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      make_current_account_owner: {
        value: cdktf.booleanToHclTerraform(this._makeCurrentAccountOwner),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      non_sys_azure_vault_name: {
        value: cdktf.stringToHclTerraform(this._nonSysAzureVaultName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      non_sys_azure_vault_secret_key: {
        value: cdktf.stringToHclTerraform(this._nonSysAzureVaultSecretKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      non_sys_azure_vault_username_key: {
        value: cdktf.stringToHclTerraform(this._nonSysAzureVaultUsernameKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      non_sys_cyberark_vault_query_string: {
        value: cdktf.stringToHclTerraform(this._nonSysCyberarkVaultQueryString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      non_sys_hashicorp_vault_engine: {
        value: cdktf.stringToHclTerraform(this._nonSysHashicorpVaultEngine),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      non_sys_hashicorp_vault_secret_key: {
        value: cdktf.stringToHclTerraform(this._nonSysHashicorpVaultSecretKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      non_sys_hashicorp_vault_secret_path: {
        value: cdktf.stringToHclTerraform(this._nonSysHashicorpVaultSecretPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      non_sys_hashicorp_vault_username_key: {
        value: cdktf.stringToHclTerraform(this._nonSysHashicorpVaultUsernameKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      non_sys_password: {
        value: cdktf.stringToHclTerraform(this._nonSysPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      non_sys_username: {
        value: cdktf.stringToHclTerraform(this._nonSysUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      non_sys_vault: {
        value: cdktf.stringToHclTerraform(this._nonSysVault),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      number_of_connections: {
        value: cdktf.numberToHclTerraform(this._numberOfConnections),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pre_provisioning_enabled: {
        value: cdktf.booleanToHclTerraform(this._preProvisioningEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      rman_channels: {
        value: cdktf.numberToHclTerraform(this._rmanChannels),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rollback_on_failure: {
        value: cdktf.booleanToHclTerraform(this._rollbackOnFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      skip_space_check: {
        value: cdktf.booleanToHclTerraform(this._skipSpaceCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      skip_wait_for_snapshot_creation: {
        value: cdktf.booleanToHclTerraform(this._skipWaitForSnapshotCreation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      source_value: {
        value: cdktf.stringToHclTerraform(this._sourceValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wait_time: {
        value: cdktf.numberToHclTerraform(this._waitTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ops_post_sync: {
        value: cdktf.listMapperHcl(oracleDsourceOpsPostSyncToHclTerraform, true)(this._opsPostSync.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OracleDsourceOpsPostSyncList",
      },
      ops_pre_log_sync: {
        value: cdktf.listMapperHcl(oracleDsourceOpsPreLogSyncToHclTerraform, true)(this._opsPreLogSync.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OracleDsourceOpsPreLogSyncList",
      },
      ops_pre_sync: {
        value: cdktf.listMapperHcl(oracleDsourceOpsPreSyncToHclTerraform, true)(this._opsPreSync.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OracleDsourceOpsPreSyncList",
      },
      tags: {
        value: cdktf.listMapperHcl(oracleDsourceTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OracleDsourceTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
