// https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VdbConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#appdata_source_params Vdb#appdata_source_params}
  */
  readonly appdataSourceParams?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#archive_log Vdb#archive_log}
  */
  readonly archiveLog?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#auto_select_repository Vdb#auto_select_repository}
  */
  readonly autoSelectRepository?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#auxiliary_template_id Vdb#auxiliary_template_id}
  */
  readonly auxiliaryTemplateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#bookmark_id Vdb#bookmark_id}
  */
  readonly bookmarkId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#cdb_id Vdb#cdb_id}
  */
  readonly cdbId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#cdb_tde_keystore_password Vdb#cdb_tde_keystore_password}
  */
  readonly cdbTdeKeystorePassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#cdc_on_provision Vdb#cdc_on_provision}
  */
  readonly cdcOnProvision?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#cluster_node_ids Vdb#cluster_node_ids}
  */
  readonly clusterNodeIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#config_params Vdb#config_params}
  */
  readonly configParams?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#custom_env_files Vdb#custom_env_files}
  */
  readonly customEnvFiles?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#custom_env_vars Vdb#custom_env_vars}
  */
  readonly customEnvVars?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#database_name Vdb#database_name}
  */
  readonly databaseName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#db_password Vdb#db_password}
  */
  readonly dbPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#db_username Vdb#db_username}
  */
  readonly dbUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#engine_id Vdb#engine_id}
  */
  readonly engineId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#environment_id Vdb#environment_id}
  */
  readonly environmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#environment_user_id Vdb#environment_user_id}
  */
  readonly environmentUserId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#file_mapping_rules Vdb#file_mapping_rules}
  */
  readonly fileMappingRules?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#ignore_tag_changes Vdb#ignore_tag_changes}
  */
  readonly ignoreTagChanges?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#instance_name Vdb#instance_name}
  */
  readonly instanceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#listener_ids Vdb#listener_ids}
  */
  readonly listenerIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#make_current_account_owner Vdb#make_current_account_owner}
  */
  readonly makeCurrentAccountOwner?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#masked Vdb#masked}
  */
  readonly masked?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#mount_point Vdb#mount_point}
  */
  readonly mountPoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#name Vdb#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#new_dbid Vdb#new_dbid}
  */
  readonly newDbid?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#online_log_groups Vdb#online_log_groups}
  */
  readonly onlineLogGroups?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#online_log_size Vdb#online_log_size}
  */
  readonly onlineLogSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#open_reset_logs Vdb#open_reset_logs}
  */
  readonly openResetLogs?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#os_password Vdb#os_password}
  */
  readonly osPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#os_username Vdb#os_username}
  */
  readonly osUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#parent_tde_keystore_password Vdb#parent_tde_keystore_password}
  */
  readonly parentTdeKeystorePassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#parent_tde_keystore_path Vdb#parent_tde_keystore_path}
  */
  readonly parentTdeKeystorePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#post_script Vdb#post_script}
  */
  readonly postScript?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#pre_script Vdb#pre_script}
  */
  readonly preScript?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#provision_type Vdb#provision_type}
  */
  readonly provisionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#recovery_model Vdb#recovery_model}
  */
  readonly recoveryModel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#repository_id Vdb#repository_id}
  */
  readonly repositoryId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#retention_policy_id Vdb#retention_policy_id}
  */
  readonly retentionPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#snapshot_id Vdb#snapshot_id}
  */
  readonly snapshotId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#snapshot_policy_id Vdb#snapshot_policy_id}
  */
  readonly snapshotPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#source_data_id Vdb#source_data_id}
  */
  readonly sourceDataId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#target_group_id Vdb#target_group_id}
  */
  readonly targetGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#target_vcdb_tde_keystore_path Vdb#target_vcdb_tde_keystore_path}
  */
  readonly targetVcdbTdeKeystorePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#tde_exported_key_file_secret Vdb#tde_exported_key_file_secret}
  */
  readonly tdeExportedKeyFileSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#tde_key_identifier Vdb#tde_key_identifier}
  */
  readonly tdeKeyIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#template_id Vdb#template_id}
  */
  readonly templateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#timestamp Vdb#timestamp}
  */
  readonly timestamp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#timestamp_in_database_timezone Vdb#timestamp_in_database_timezone}
  */
  readonly timestampInDatabaseTimezone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#truncate_log_on_checkpoint Vdb#truncate_log_on_checkpoint}
  */
  readonly truncateLogOnCheckpoint?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#unique_name Vdb#unique_name}
  */
  readonly uniqueName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#vcdb_database_name Vdb#vcdb_database_name}
  */
  readonly vcdbDatabaseName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#vcdb_name Vdb#vcdb_name}
  */
  readonly vcdbName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#vcdb_tde_key_identifier Vdb#vcdb_tde_key_identifier}
  */
  readonly vcdbTdeKeyIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#vdb_restart Vdb#vdb_restart}
  */
  readonly vdbRestart?: boolean | cdktf.IResolvable;
  /**
  * additional_mount_points block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#additional_mount_points Vdb#additional_mount_points}
  */
  readonly additionalMountPoints?: VdbAdditionalMountPoints[] | cdktf.IResolvable;
  /**
  * configure_clone block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#configure_clone Vdb#configure_clone}
  */
  readonly configureClone?: VdbConfigureClone[] | cdktf.IResolvable;
  /**
  * oracle_rac_custom_env_files block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#oracle_rac_custom_env_files Vdb#oracle_rac_custom_env_files}
  */
  readonly oracleRacCustomEnvFiles?: VdbOracleRacCustomEnvFiles[] | cdktf.IResolvable;
  /**
  * oracle_rac_custom_env_vars block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#oracle_rac_custom_env_vars Vdb#oracle_rac_custom_env_vars}
  */
  readonly oracleRacCustomEnvVars?: VdbOracleRacCustomEnvVars[] | cdktf.IResolvable;
  /**
  * post_refresh block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#post_refresh Vdb#post_refresh}
  */
  readonly postRefresh?: VdbPostRefresh[] | cdktf.IResolvable;
  /**
  * post_rollback block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#post_rollback Vdb#post_rollback}
  */
  readonly postRollback?: VdbPostRollback[] | cdktf.IResolvable;
  /**
  * post_snapshot block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#post_snapshot Vdb#post_snapshot}
  */
  readonly postSnapshot?: VdbPostSnapshot[] | cdktf.IResolvable;
  /**
  * post_start block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#post_start Vdb#post_start}
  */
  readonly postStart?: VdbPostStart[] | cdktf.IResolvable;
  /**
  * post_stop block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#post_stop Vdb#post_stop}
  */
  readonly postStop?: VdbPostStop[] | cdktf.IResolvable;
  /**
  * pre_refresh block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#pre_refresh Vdb#pre_refresh}
  */
  readonly preRefresh?: VdbPreRefresh[] | cdktf.IResolvable;
  /**
  * pre_rollback block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#pre_rollback Vdb#pre_rollback}
  */
  readonly preRollback?: VdbPreRollback[] | cdktf.IResolvable;
  /**
  * pre_snapshot block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#pre_snapshot Vdb#pre_snapshot}
  */
  readonly preSnapshot?: VdbPreSnapshot[] | cdktf.IResolvable;
  /**
  * pre_start block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#pre_start Vdb#pre_start}
  */
  readonly preStart?: VdbPreStart[] | cdktf.IResolvable;
  /**
  * pre_stop block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#pre_stop Vdb#pre_stop}
  */
  readonly preStop?: VdbPreStop[] | cdktf.IResolvable;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#tags Vdb#tags}
  */
  readonly tags?: VdbTags[] | cdktf.IResolvable;
}
export interface VdbAdditionalMountPoints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#environment_id Vdb#environment_id}
  */
  readonly environmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#mount_path Vdb#mount_path}
  */
  readonly mountPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#shared_path Vdb#shared_path}
  */
  readonly sharedPath: string;
}

export function vdbAdditionalMountPointsToTerraform(struct?: VdbAdditionalMountPoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    environment_id: cdktf.stringToTerraform(struct!.environmentId),
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    shared_path: cdktf.stringToTerraform(struct!.sharedPath),
  }
}


export function vdbAdditionalMountPointsToHclTerraform(struct?: VdbAdditionalMountPoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    environment_id: {
      value: cdktf.stringToHclTerraform(struct!.environmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount_path: {
      value: cdktf.stringToHclTerraform(struct!.mountPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shared_path: {
      value: cdktf.stringToHclTerraform(struct!.sharedPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VdbAdditionalMountPointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VdbAdditionalMountPoints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._environmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentId = this._environmentId;
    }
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    if (this._sharedPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedPath = this._sharedPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VdbAdditionalMountPoints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._environmentId = undefined;
      this._mountPath = undefined;
      this._sharedPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._environmentId = value.environmentId;
      this._mountPath = value.mountPath;
      this._sharedPath = value.sharedPath;
    }
  }

  // environment_id - computed: false, optional: true, required: false
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  public resetEnvironmentId() {
    this._environmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
  }

  // mount_path - computed: false, optional: true, required: false
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  public resetMountPath() {
    this._mountPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
  }

  // shared_path - computed: false, optional: false, required: true
  private _sharedPath?: string; 
  public get sharedPath() {
    return this.getStringAttribute('shared_path');
  }
  public set sharedPath(value: string) {
    this._sharedPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedPathInput() {
    return this._sharedPath;
  }
}

export class VdbAdditionalMountPointsList extends cdktf.ComplexList {
  public internalValue? : VdbAdditionalMountPoints[] | cdktf.IResolvable

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
  public get(index: number): VdbAdditionalMountPointsOutputReference {
    return new VdbAdditionalMountPointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VdbConfigureClone {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#command Vdb#command}
  */
  readonly command: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#name Vdb#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#shell Vdb#shell}
  */
  readonly shell?: string;
}

export function vdbConfigureCloneToTerraform(struct?: VdbConfigureClone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.stringToTerraform(struct!.command),
    name: cdktf.stringToTerraform(struct!.name),
    shell: cdktf.stringToTerraform(struct!.shell),
  }
}


export function vdbConfigureCloneToHclTerraform(struct?: VdbConfigureClone | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VdbConfigureCloneOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VdbConfigureClone | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VdbConfigureClone | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._command = undefined;
      this._name = undefined;
      this._shell = undefined;
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
    }
  }

  // command - computed: false, optional: false, required: true
  private _command?: string; 
  public get command() {
    return this.getStringAttribute('command');
  }
  public set command(value: string) {
    this._command = value;
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
}

export class VdbConfigureCloneList extends cdktf.ComplexList {
  public internalValue? : VdbConfigureClone[] | cdktf.IResolvable

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
  public get(index: number): VdbConfigureCloneOutputReference {
    return new VdbConfigureCloneOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VdbOracleRacCustomEnvFiles {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#node_id Vdb#node_id}
  */
  readonly nodeId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#path_parameters Vdb#path_parameters}
  */
  readonly pathParameters?: string;
}

export function vdbOracleRacCustomEnvFilesToTerraform(struct?: VdbOracleRacCustomEnvFiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_id: cdktf.stringToTerraform(struct!.nodeId),
    path_parameters: cdktf.stringToTerraform(struct!.pathParameters),
  }
}


export function vdbOracleRacCustomEnvFilesToHclTerraform(struct?: VdbOracleRacCustomEnvFiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_id: {
      value: cdktf.stringToHclTerraform(struct!.nodeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path_parameters: {
      value: cdktf.stringToHclTerraform(struct!.pathParameters),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VdbOracleRacCustomEnvFilesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VdbOracleRacCustomEnvFiles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeId = this._nodeId;
    }
    if (this._pathParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathParameters = this._pathParameters;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VdbOracleRacCustomEnvFiles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeId = undefined;
      this._pathParameters = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeId = value.nodeId;
      this._pathParameters = value.pathParameters;
    }
  }

  // node_id - computed: false, optional: false, required: true
  private _nodeId?: string; 
  public get nodeId() {
    return this.getStringAttribute('node_id');
  }
  public set nodeId(value: string) {
    this._nodeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeIdInput() {
    return this._nodeId;
  }

  // path_parameters - computed: false, optional: true, required: false
  private _pathParameters?: string; 
  public get pathParameters() {
    return this.getStringAttribute('path_parameters');
  }
  public set pathParameters(value: string) {
    this._pathParameters = value;
  }
  public resetPathParameters() {
    this._pathParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathParametersInput() {
    return this._pathParameters;
  }
}

export class VdbOracleRacCustomEnvFilesList extends cdktf.ComplexList {
  public internalValue? : VdbOracleRacCustomEnvFiles[] | cdktf.IResolvable

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
  public get(index: number): VdbOracleRacCustomEnvFilesOutputReference {
    return new VdbOracleRacCustomEnvFilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VdbOracleRacCustomEnvVars {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#name Vdb#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#node_id Vdb#node_id}
  */
  readonly nodeId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#value Vdb#value}
  */
  readonly value?: string;
}

export function vdbOracleRacCustomEnvVarsToTerraform(struct?: VdbOracleRacCustomEnvVars | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    node_id: cdktf.stringToTerraform(struct!.nodeId),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function vdbOracleRacCustomEnvVarsToHclTerraform(struct?: VdbOracleRacCustomEnvVars | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_id: {
      value: cdktf.stringToHclTerraform(struct!.nodeId),
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

export class VdbOracleRacCustomEnvVarsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VdbOracleRacCustomEnvVars | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nodeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeId = this._nodeId;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VdbOracleRacCustomEnvVars | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._nodeId = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._nodeId = value.nodeId;
      this._value = value.value;
    }
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

  // node_id - computed: false, optional: false, required: true
  private _nodeId?: string; 
  public get nodeId() {
    return this.getStringAttribute('node_id');
  }
  public set nodeId(value: string) {
    this._nodeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeIdInput() {
    return this._nodeId;
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

export class VdbOracleRacCustomEnvVarsList extends cdktf.ComplexList {
  public internalValue? : VdbOracleRacCustomEnvVars[] | cdktf.IResolvable

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
  public get(index: number): VdbOracleRacCustomEnvVarsOutputReference {
    return new VdbOracleRacCustomEnvVarsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VdbPostRefresh {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#command Vdb#command}
  */
  readonly command: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#name Vdb#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#shell Vdb#shell}
  */
  readonly shell?: string;
}

export function vdbPostRefreshToTerraform(struct?: VdbPostRefresh | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.stringToTerraform(struct!.command),
    name: cdktf.stringToTerraform(struct!.name),
    shell: cdktf.stringToTerraform(struct!.shell),
  }
}


export function vdbPostRefreshToHclTerraform(struct?: VdbPostRefresh | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VdbPostRefreshOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VdbPostRefresh | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VdbPostRefresh | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._command = undefined;
      this._name = undefined;
      this._shell = undefined;
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
    }
  }

  // command - computed: false, optional: false, required: true
  private _command?: string; 
  public get command() {
    return this.getStringAttribute('command');
  }
  public set command(value: string) {
    this._command = value;
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
}

export class VdbPostRefreshList extends cdktf.ComplexList {
  public internalValue? : VdbPostRefresh[] | cdktf.IResolvable

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
  public get(index: number): VdbPostRefreshOutputReference {
    return new VdbPostRefreshOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VdbPostRollback {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#command Vdb#command}
  */
  readonly command: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#name Vdb#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#shell Vdb#shell}
  */
  readonly shell?: string;
}

export function vdbPostRollbackToTerraform(struct?: VdbPostRollback | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.stringToTerraform(struct!.command),
    name: cdktf.stringToTerraform(struct!.name),
    shell: cdktf.stringToTerraform(struct!.shell),
  }
}


export function vdbPostRollbackToHclTerraform(struct?: VdbPostRollback | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VdbPostRollbackOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VdbPostRollback | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VdbPostRollback | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._command = undefined;
      this._name = undefined;
      this._shell = undefined;
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
    }
  }

  // command - computed: false, optional: false, required: true
  private _command?: string; 
  public get command() {
    return this.getStringAttribute('command');
  }
  public set command(value: string) {
    this._command = value;
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
}

export class VdbPostRollbackList extends cdktf.ComplexList {
  public internalValue? : VdbPostRollback[] | cdktf.IResolvable

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
  public get(index: number): VdbPostRollbackOutputReference {
    return new VdbPostRollbackOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VdbPostSnapshot {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#command Vdb#command}
  */
  readonly command: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#name Vdb#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#shell Vdb#shell}
  */
  readonly shell?: string;
}

export function vdbPostSnapshotToTerraform(struct?: VdbPostSnapshot | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.stringToTerraform(struct!.command),
    name: cdktf.stringToTerraform(struct!.name),
    shell: cdktf.stringToTerraform(struct!.shell),
  }
}


export function vdbPostSnapshotToHclTerraform(struct?: VdbPostSnapshot | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VdbPostSnapshotOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VdbPostSnapshot | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VdbPostSnapshot | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._command = undefined;
      this._name = undefined;
      this._shell = undefined;
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
    }
  }

  // command - computed: false, optional: false, required: true
  private _command?: string; 
  public get command() {
    return this.getStringAttribute('command');
  }
  public set command(value: string) {
    this._command = value;
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
}

export class VdbPostSnapshotList extends cdktf.ComplexList {
  public internalValue? : VdbPostSnapshot[] | cdktf.IResolvable

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
  public get(index: number): VdbPostSnapshotOutputReference {
    return new VdbPostSnapshotOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VdbPostStart {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#command Vdb#command}
  */
  readonly command: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#name Vdb#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#shell Vdb#shell}
  */
  readonly shell?: string;
}

export function vdbPostStartToTerraform(struct?: VdbPostStart | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.stringToTerraform(struct!.command),
    name: cdktf.stringToTerraform(struct!.name),
    shell: cdktf.stringToTerraform(struct!.shell),
  }
}


export function vdbPostStartToHclTerraform(struct?: VdbPostStart | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VdbPostStartOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VdbPostStart | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VdbPostStart | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._command = undefined;
      this._name = undefined;
      this._shell = undefined;
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
    }
  }

  // command - computed: false, optional: false, required: true
  private _command?: string; 
  public get command() {
    return this.getStringAttribute('command');
  }
  public set command(value: string) {
    this._command = value;
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
}

export class VdbPostStartList extends cdktf.ComplexList {
  public internalValue? : VdbPostStart[] | cdktf.IResolvable

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
  public get(index: number): VdbPostStartOutputReference {
    return new VdbPostStartOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VdbPostStop {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#command Vdb#command}
  */
  readonly command: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#name Vdb#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#shell Vdb#shell}
  */
  readonly shell?: string;
}

export function vdbPostStopToTerraform(struct?: VdbPostStop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.stringToTerraform(struct!.command),
    name: cdktf.stringToTerraform(struct!.name),
    shell: cdktf.stringToTerraform(struct!.shell),
  }
}


export function vdbPostStopToHclTerraform(struct?: VdbPostStop | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VdbPostStopOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VdbPostStop | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VdbPostStop | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._command = undefined;
      this._name = undefined;
      this._shell = undefined;
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
    }
  }

  // command - computed: false, optional: false, required: true
  private _command?: string; 
  public get command() {
    return this.getStringAttribute('command');
  }
  public set command(value: string) {
    this._command = value;
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
}

export class VdbPostStopList extends cdktf.ComplexList {
  public internalValue? : VdbPostStop[] | cdktf.IResolvable

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
  public get(index: number): VdbPostStopOutputReference {
    return new VdbPostStopOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VdbPreRefresh {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#command Vdb#command}
  */
  readonly command: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#name Vdb#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#shell Vdb#shell}
  */
  readonly shell?: string;
}

export function vdbPreRefreshToTerraform(struct?: VdbPreRefresh | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.stringToTerraform(struct!.command),
    name: cdktf.stringToTerraform(struct!.name),
    shell: cdktf.stringToTerraform(struct!.shell),
  }
}


export function vdbPreRefreshToHclTerraform(struct?: VdbPreRefresh | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VdbPreRefreshOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VdbPreRefresh | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VdbPreRefresh | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._command = undefined;
      this._name = undefined;
      this._shell = undefined;
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
    }
  }

  // command - computed: false, optional: false, required: true
  private _command?: string; 
  public get command() {
    return this.getStringAttribute('command');
  }
  public set command(value: string) {
    this._command = value;
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
}

export class VdbPreRefreshList extends cdktf.ComplexList {
  public internalValue? : VdbPreRefresh[] | cdktf.IResolvable

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
  public get(index: number): VdbPreRefreshOutputReference {
    return new VdbPreRefreshOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VdbPreRollback {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#command Vdb#command}
  */
  readonly command: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#name Vdb#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#shell Vdb#shell}
  */
  readonly shell?: string;
}

export function vdbPreRollbackToTerraform(struct?: VdbPreRollback | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.stringToTerraform(struct!.command),
    name: cdktf.stringToTerraform(struct!.name),
    shell: cdktf.stringToTerraform(struct!.shell),
  }
}


export function vdbPreRollbackToHclTerraform(struct?: VdbPreRollback | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VdbPreRollbackOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VdbPreRollback | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VdbPreRollback | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._command = undefined;
      this._name = undefined;
      this._shell = undefined;
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
    }
  }

  // command - computed: false, optional: false, required: true
  private _command?: string; 
  public get command() {
    return this.getStringAttribute('command');
  }
  public set command(value: string) {
    this._command = value;
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
}

export class VdbPreRollbackList extends cdktf.ComplexList {
  public internalValue? : VdbPreRollback[] | cdktf.IResolvable

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
  public get(index: number): VdbPreRollbackOutputReference {
    return new VdbPreRollbackOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VdbPreSnapshot {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#command Vdb#command}
  */
  readonly command: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#name Vdb#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#shell Vdb#shell}
  */
  readonly shell?: string;
}

export function vdbPreSnapshotToTerraform(struct?: VdbPreSnapshot | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.stringToTerraform(struct!.command),
    name: cdktf.stringToTerraform(struct!.name),
    shell: cdktf.stringToTerraform(struct!.shell),
  }
}


export function vdbPreSnapshotToHclTerraform(struct?: VdbPreSnapshot | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VdbPreSnapshotOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VdbPreSnapshot | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VdbPreSnapshot | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._command = undefined;
      this._name = undefined;
      this._shell = undefined;
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
    }
  }

  // command - computed: false, optional: false, required: true
  private _command?: string; 
  public get command() {
    return this.getStringAttribute('command');
  }
  public set command(value: string) {
    this._command = value;
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
}

export class VdbPreSnapshotList extends cdktf.ComplexList {
  public internalValue? : VdbPreSnapshot[] | cdktf.IResolvable

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
  public get(index: number): VdbPreSnapshotOutputReference {
    return new VdbPreSnapshotOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VdbPreStart {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#command Vdb#command}
  */
  readonly command: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#name Vdb#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#shell Vdb#shell}
  */
  readonly shell?: string;
}

export function vdbPreStartToTerraform(struct?: VdbPreStart | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.stringToTerraform(struct!.command),
    name: cdktf.stringToTerraform(struct!.name),
    shell: cdktf.stringToTerraform(struct!.shell),
  }
}


export function vdbPreStartToHclTerraform(struct?: VdbPreStart | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VdbPreStartOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VdbPreStart | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VdbPreStart | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._command = undefined;
      this._name = undefined;
      this._shell = undefined;
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
    }
  }

  // command - computed: false, optional: false, required: true
  private _command?: string; 
  public get command() {
    return this.getStringAttribute('command');
  }
  public set command(value: string) {
    this._command = value;
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
}

export class VdbPreStartList extends cdktf.ComplexList {
  public internalValue? : VdbPreStart[] | cdktf.IResolvable

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
  public get(index: number): VdbPreStartOutputReference {
    return new VdbPreStartOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VdbPreStop {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#command Vdb#command}
  */
  readonly command: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#name Vdb#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#shell Vdb#shell}
  */
  readonly shell?: string;
}

export function vdbPreStopToTerraform(struct?: VdbPreStop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.stringToTerraform(struct!.command),
    name: cdktf.stringToTerraform(struct!.name),
    shell: cdktf.stringToTerraform(struct!.shell),
  }
}


export function vdbPreStopToHclTerraform(struct?: VdbPreStop | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VdbPreStopOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VdbPreStop | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VdbPreStop | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._command = undefined;
      this._name = undefined;
      this._shell = undefined;
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
    }
  }

  // command - computed: false, optional: false, required: true
  private _command?: string; 
  public get command() {
    return this.getStringAttribute('command');
  }
  public set command(value: string) {
    this._command = value;
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
}

export class VdbPreStopList extends cdktf.ComplexList {
  public internalValue? : VdbPreStop[] | cdktf.IResolvable

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
  public get(index: number): VdbPreStopOutputReference {
    return new VdbPreStopOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VdbTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#key Vdb#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#value Vdb#value}
  */
  readonly value?: string;
}

export function vdbTagsToTerraform(struct?: VdbTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function vdbTagsToHclTerraform(struct?: VdbTags | cdktf.IResolvable): any {
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

export class VdbTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VdbTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VdbTags | cdktf.IResolvable | undefined) {
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

export class VdbTagsList extends cdktf.ComplexList {
  public internalValue? : VdbTags[] | cdktf.IResolvable

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
  public get(index: number): VdbTagsOutputReference {
    return new VdbTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb delphix_vdb}
*/
export class Vdb extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "delphix_vdb";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Vdb resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Vdb to import
  * @param importFromId The id of the existing Vdb that should be imported. Refer to the {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Vdb to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "delphix_vdb", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.1/docs/resources/vdb delphix_vdb} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VdbConfig = {}
  */
  public constructor(scope: Construct, id: string, config: VdbConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'delphix_vdb',
      terraformGeneratorMetadata: {
        providerName: 'delphix',
        providerVersion: '4.1.1',
        providerVersionConstraint: '4.1.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appdataSourceParams = config.appdataSourceParams;
    this._archiveLog = config.archiveLog;
    this._autoSelectRepository = config.autoSelectRepository;
    this._auxiliaryTemplateId = config.auxiliaryTemplateId;
    this._bookmarkId = config.bookmarkId;
    this._cdbId = config.cdbId;
    this._cdbTdeKeystorePassword = config.cdbTdeKeystorePassword;
    this._cdcOnProvision = config.cdcOnProvision;
    this._clusterNodeIds = config.clusterNodeIds;
    this._configParams = config.configParams;
    this._customEnvFiles = config.customEnvFiles;
    this._customEnvVars = config.customEnvVars;
    this._databaseName = config.databaseName;
    this._dbPassword = config.dbPassword;
    this._dbUsername = config.dbUsername;
    this._engineId = config.engineId;
    this._environmentId = config.environmentId;
    this._environmentUserId = config.environmentUserId;
    this._fileMappingRules = config.fileMappingRules;
    this._ignoreTagChanges = config.ignoreTagChanges;
    this._instanceName = config.instanceName;
    this._listenerIds = config.listenerIds;
    this._makeCurrentAccountOwner = config.makeCurrentAccountOwner;
    this._masked = config.masked;
    this._mountPoint = config.mountPoint;
    this._name = config.name;
    this._newDbid = config.newDbid;
    this._onlineLogGroups = config.onlineLogGroups;
    this._onlineLogSize = config.onlineLogSize;
    this._openResetLogs = config.openResetLogs;
    this._osPassword = config.osPassword;
    this._osUsername = config.osUsername;
    this._parentTdeKeystorePassword = config.parentTdeKeystorePassword;
    this._parentTdeKeystorePath = config.parentTdeKeystorePath;
    this._postScript = config.postScript;
    this._preScript = config.preScript;
    this._provisionType = config.provisionType;
    this._recoveryModel = config.recoveryModel;
    this._repositoryId = config.repositoryId;
    this._retentionPolicyId = config.retentionPolicyId;
    this._snapshotId = config.snapshotId;
    this._snapshotPolicyId = config.snapshotPolicyId;
    this._sourceDataId = config.sourceDataId;
    this._targetGroupId = config.targetGroupId;
    this._targetVcdbTdeKeystorePath = config.targetVcdbTdeKeystorePath;
    this._tdeExportedKeyFileSecret = config.tdeExportedKeyFileSecret;
    this._tdeKeyIdentifier = config.tdeKeyIdentifier;
    this._templateId = config.templateId;
    this._timestamp = config.timestamp;
    this._timestampInDatabaseTimezone = config.timestampInDatabaseTimezone;
    this._truncateLogOnCheckpoint = config.truncateLogOnCheckpoint;
    this._uniqueName = config.uniqueName;
    this._vcdbDatabaseName = config.vcdbDatabaseName;
    this._vcdbName = config.vcdbName;
    this._vcdbTdeKeyIdentifier = config.vcdbTdeKeyIdentifier;
    this._vdbRestart = config.vdbRestart;
    this._additionalMountPoints.internalValue = config.additionalMountPoints;
    this._configureClone.internalValue = config.configureClone;
    this._oracleRacCustomEnvFiles.internalValue = config.oracleRacCustomEnvFiles;
    this._oracleRacCustomEnvVars.internalValue = config.oracleRacCustomEnvVars;
    this._postRefresh.internalValue = config.postRefresh;
    this._postRollback.internalValue = config.postRollback;
    this._postSnapshot.internalValue = config.postSnapshot;
    this._postStart.internalValue = config.postStart;
    this._postStop.internalValue = config.postStop;
    this._preRefresh.internalValue = config.preRefresh;
    this._preRollback.internalValue = config.preRollback;
    this._preSnapshot.internalValue = config.preSnapshot;
    this._preStart.internalValue = config.preStart;
    this._preStop.internalValue = config.preStop;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // appdata_config_params - computed: true, optional: false, required: false
  public get appdataConfigParams() {
    return this.getStringAttribute('appdata_config_params');
  }

  // appdata_source_params - computed: true, optional: true, required: false
  private _appdataSourceParams?: string; 
  public get appdataSourceParams() {
    return this.getStringAttribute('appdata_source_params');
  }
  public set appdataSourceParams(value: string) {
    this._appdataSourceParams = value;
  }
  public resetAppdataSourceParams() {
    this._appdataSourceParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appdataSourceParamsInput() {
    return this._appdataSourceParams;
  }

  // archive_log - computed: false, optional: true, required: false
  private _archiveLog?: boolean | cdktf.IResolvable; 
  public get archiveLog() {
    return this.getBooleanAttribute('archive_log');
  }
  public set archiveLog(value: boolean | cdktf.IResolvable) {
    this._archiveLog = value;
  }
  public resetArchiveLog() {
    this._archiveLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveLogInput() {
    return this._archiveLog;
  }

  // auto_select_repository - computed: false, optional: true, required: false
  private _autoSelectRepository?: boolean | cdktf.IResolvable; 
  public get autoSelectRepository() {
    return this.getBooleanAttribute('auto_select_repository');
  }
  public set autoSelectRepository(value: boolean | cdktf.IResolvable) {
    this._autoSelectRepository = value;
  }
  public resetAutoSelectRepository() {
    this._autoSelectRepository = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSelectRepositoryInput() {
    return this._autoSelectRepository;
  }

  // auxiliary_template_id - computed: false, optional: true, required: false
  private _auxiliaryTemplateId?: string; 
  public get auxiliaryTemplateId() {
    return this.getStringAttribute('auxiliary_template_id');
  }
  public set auxiliaryTemplateId(value: string) {
    this._auxiliaryTemplateId = value;
  }
  public resetAuxiliaryTemplateId() {
    this._auxiliaryTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auxiliaryTemplateIdInput() {
    return this._auxiliaryTemplateId;
  }

  // bookmark_id - computed: false, optional: true, required: false
  private _bookmarkId?: string; 
  public get bookmarkId() {
    return this.getStringAttribute('bookmark_id');
  }
  public set bookmarkId(value: string) {
    this._bookmarkId = value;
  }
  public resetBookmarkId() {
    this._bookmarkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bookmarkIdInput() {
    return this._bookmarkId;
  }

  // cdb_id - computed: true, optional: true, required: false
  private _cdbId?: string; 
  public get cdbId() {
    return this.getStringAttribute('cdb_id');
  }
  public set cdbId(value: string) {
    this._cdbId = value;
  }
  public resetCdbId() {
    this._cdbId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdbIdInput() {
    return this._cdbId;
  }

  // cdb_tde_keystore_password - computed: false, optional: true, required: false
  private _cdbTdeKeystorePassword?: string; 
  public get cdbTdeKeystorePassword() {
    return this.getStringAttribute('cdb_tde_keystore_password');
  }
  public set cdbTdeKeystorePassword(value: string) {
    this._cdbTdeKeystorePassword = value;
  }
  public resetCdbTdeKeystorePassword() {
    this._cdbTdeKeystorePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdbTdeKeystorePasswordInput() {
    return this._cdbTdeKeystorePassword;
  }

  // cdc_on_provision - computed: false, optional: true, required: false
  private _cdcOnProvision?: boolean | cdktf.IResolvable; 
  public get cdcOnProvision() {
    return this.getBooleanAttribute('cdc_on_provision');
  }
  public set cdcOnProvision(value: boolean | cdktf.IResolvable) {
    this._cdcOnProvision = value;
  }
  public resetCdcOnProvision() {
    this._cdcOnProvision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdcOnProvisionInput() {
    return this._cdcOnProvision;
  }

  // cluster_node_ids - computed: false, optional: true, required: false
  private _clusterNodeIds?: string[]; 
  public get clusterNodeIds() {
    return this.getListAttribute('cluster_node_ids');
  }
  public set clusterNodeIds(value: string[]) {
    this._clusterNodeIds = value;
  }
  public resetClusterNodeIds() {
    this._clusterNodeIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNodeIdsInput() {
    return this._clusterNodeIds;
  }

  // config_params - computed: true, optional: true, required: false
  private _configParams?: string; 
  public get configParams() {
    return this.getStringAttribute('config_params');
  }
  public set configParams(value: string) {
    this._configParams = value;
  }
  public resetConfigParams() {
    this._configParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configParamsInput() {
    return this._configParams;
  }

  // creation_date - computed: true, optional: false, required: false
  public get creationDate() {
    return this.getStringAttribute('creation_date');
  }

  // custom_env_files - computed: false, optional: true, required: false
  private _customEnvFiles?: string[]; 
  public get customEnvFiles() {
    return this.getListAttribute('custom_env_files');
  }
  public set customEnvFiles(value: string[]) {
    this._customEnvFiles = value;
  }
  public resetCustomEnvFiles() {
    this._customEnvFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customEnvFilesInput() {
    return this._customEnvFiles;
  }

  // custom_env_vars - computed: false, optional: true, required: false
  private _customEnvVars?: { [key: string]: string }; 
  public get customEnvVars() {
    return this.getStringMapAttribute('custom_env_vars');
  }
  public set customEnvVars(value: { [key: string]: string }) {
    this._customEnvVars = value;
  }
  public resetCustomEnvVars() {
    this._customEnvVars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customEnvVarsInput() {
    return this._customEnvVars;
  }

  // database_name - computed: true, optional: true, required: false
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  public resetDatabaseName() {
    this._databaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
  }

  // database_type - computed: true, optional: false, required: false
  public get databaseType() {
    return this.getStringAttribute('database_type');
  }

  // database_version - computed: true, optional: false, required: false
  public get databaseVersion() {
    return this.getStringAttribute('database_version');
  }

  // db_password - computed: false, optional: true, required: false
  private _dbPassword?: string; 
  public get dbPassword() {
    return this.getStringAttribute('db_password');
  }
  public set dbPassword(value: string) {
    this._dbPassword = value;
  }
  public resetDbPassword() {
    this._dbPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbPasswordInput() {
    return this._dbPassword;
  }

  // db_username - computed: false, optional: true, required: false
  private _dbUsername?: string; 
  public get dbUsername() {
    return this.getStringAttribute('db_username');
  }
  public set dbUsername(value: string) {
    this._dbUsername = value;
  }
  public resetDbUsername() {
    this._dbUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbUsernameInput() {
    return this._dbUsername;
  }

  // engine_id - computed: true, optional: true, required: false
  private _engineId?: string; 
  public get engineId() {
    return this.getStringAttribute('engine_id');
  }
  public set engineId(value: string) {
    this._engineId = value;
  }
  public resetEngineId() {
    this._engineId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineIdInput() {
    return this._engineId;
  }

  // environment_id - computed: true, optional: true, required: false
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  public resetEnvironmentId() {
    this._environmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
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

  // file_mapping_rules - computed: false, optional: true, required: false
  private _fileMappingRules?: string; 
  public get fileMappingRules() {
    return this.getStringAttribute('file_mapping_rules');
  }
  public set fileMappingRules(value: string) {
    this._fileMappingRules = value;
  }
  public resetFileMappingRules() {
    this._fileMappingRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileMappingRulesInput() {
    return this._fileMappingRules;
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
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

  // instance_name - computed: true, optional: true, required: false
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  public resetInstanceName() {
    this._instanceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // jdbc_connection_string - computed: true, optional: false, required: false
  public get jdbcConnectionString() {
    return this.getStringAttribute('jdbc_connection_string');
  }

  // listener_ids - computed: false, optional: true, required: false
  private _listenerIds?: string[]; 
  public get listenerIds() {
    return this.getListAttribute('listener_ids');
  }
  public set listenerIds(value: string[]) {
    this._listenerIds = value;
  }
  public resetListenerIds() {
    this._listenerIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerIdsInput() {
    return this._listenerIds;
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

  // masked - computed: false, optional: true, required: false
  private _masked?: boolean | cdktf.IResolvable; 
  public get masked() {
    return this.getBooleanAttribute('masked');
  }
  public set masked(value: boolean | cdktf.IResolvable) {
    this._masked = value;
  }
  public resetMasked() {
    this._masked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskedInput() {
    return this._masked;
  }

  // mount_point - computed: true, optional: true, required: false
  private _mountPoint?: string; 
  public get mountPoint() {
    return this.getStringAttribute('mount_point');
  }
  public set mountPoint(value: string) {
    this._mountPoint = value;
  }
  public resetMountPoint() {
    this._mountPoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPointInput() {
    return this._mountPoint;
  }

  // name - computed: true, optional: true, required: false
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

  // new_dbid - computed: false, optional: true, required: false
  private _newDbid?: boolean | cdktf.IResolvable; 
  public get newDbid() {
    return this.getBooleanAttribute('new_dbid');
  }
  public set newDbid(value: boolean | cdktf.IResolvable) {
    this._newDbid = value;
  }
  public resetNewDbid() {
    this._newDbid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newDbidInput() {
    return this._newDbid;
  }

  // online_log_groups - computed: false, optional: true, required: false
  private _onlineLogGroups?: number; 
  public get onlineLogGroups() {
    return this.getNumberAttribute('online_log_groups');
  }
  public set onlineLogGroups(value: number) {
    this._onlineLogGroups = value;
  }
  public resetOnlineLogGroups() {
    this._onlineLogGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlineLogGroupsInput() {
    return this._onlineLogGroups;
  }

  // online_log_size - computed: false, optional: true, required: false
  private _onlineLogSize?: number; 
  public get onlineLogSize() {
    return this.getNumberAttribute('online_log_size');
  }
  public set onlineLogSize(value: number) {
    this._onlineLogSize = value;
  }
  public resetOnlineLogSize() {
    this._onlineLogSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlineLogSizeInput() {
    return this._onlineLogSize;
  }

  // open_reset_logs - computed: false, optional: true, required: false
  private _openResetLogs?: boolean | cdktf.IResolvable; 
  public get openResetLogs() {
    return this.getBooleanAttribute('open_reset_logs');
  }
  public set openResetLogs(value: boolean | cdktf.IResolvable) {
    this._openResetLogs = value;
  }
  public resetOpenResetLogs() {
    this._openResetLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openResetLogsInput() {
    return this._openResetLogs;
  }

  // os_password - computed: false, optional: true, required: false
  private _osPassword?: string; 
  public get osPassword() {
    return this.getStringAttribute('os_password');
  }
  public set osPassword(value: string) {
    this._osPassword = value;
  }
  public resetOsPassword() {
    this._osPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osPasswordInput() {
    return this._osPassword;
  }

  // os_username - computed: false, optional: true, required: false
  private _osUsername?: string; 
  public get osUsername() {
    return this.getStringAttribute('os_username');
  }
  public set osUsername(value: string) {
    this._osUsername = value;
  }
  public resetOsUsername() {
    this._osUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osUsernameInput() {
    return this._osUsername;
  }

  // parent_dsource_id - computed: true, optional: false, required: false
  public get parentDsourceId() {
    return this.getStringAttribute('parent_dsource_id');
  }

  // parent_id - computed: true, optional: false, required: false
  public get parentId() {
    return this.getStringAttribute('parent_id');
  }

  // parent_tde_keystore_password - computed: false, optional: true, required: false
  private _parentTdeKeystorePassword?: string; 
  public get parentTdeKeystorePassword() {
    return this.getStringAttribute('parent_tde_keystore_password');
  }
  public set parentTdeKeystorePassword(value: string) {
    this._parentTdeKeystorePassword = value;
  }
  public resetParentTdeKeystorePassword() {
    this._parentTdeKeystorePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentTdeKeystorePasswordInput() {
    return this._parentTdeKeystorePassword;
  }

  // parent_tde_keystore_path - computed: false, optional: true, required: false
  private _parentTdeKeystorePath?: string; 
  public get parentTdeKeystorePath() {
    return this.getStringAttribute('parent_tde_keystore_path');
  }
  public set parentTdeKeystorePath(value: string) {
    this._parentTdeKeystorePath = value;
  }
  public resetParentTdeKeystorePath() {
    this._parentTdeKeystorePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentTdeKeystorePathInput() {
    return this._parentTdeKeystorePath;
  }

  // post_script - computed: false, optional: true, required: false
  private _postScript?: string; 
  public get postScript() {
    return this.getStringAttribute('post_script');
  }
  public set postScript(value: string) {
    this._postScript = value;
  }
  public resetPostScript() {
    this._postScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postScriptInput() {
    return this._postScript;
  }

  // pre_script - computed: false, optional: true, required: false
  private _preScript?: string; 
  public get preScript() {
    return this.getStringAttribute('pre_script');
  }
  public set preScript(value: string) {
    this._preScript = value;
  }
  public resetPreScript() {
    this._preScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preScriptInput() {
    return this._preScript;
  }

  // provision_type - computed: false, optional: true, required: false
  private _provisionType?: string; 
  public get provisionType() {
    return this.getStringAttribute('provision_type');
  }
  public set provisionType(value: string) {
    this._provisionType = value;
  }
  public resetProvisionType() {
    this._provisionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionTypeInput() {
    return this._provisionType;
  }

  // recovery_model - computed: false, optional: true, required: false
  private _recoveryModel?: string; 
  public get recoveryModel() {
    return this.getStringAttribute('recovery_model');
  }
  public set recoveryModel(value: string) {
    this._recoveryModel = value;
  }
  public resetRecoveryModel() {
    this._recoveryModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryModelInput() {
    return this._recoveryModel;
  }

  // repository_id - computed: false, optional: true, required: false
  private _repositoryId?: string; 
  public get repositoryId() {
    return this.getStringAttribute('repository_id');
  }
  public set repositoryId(value: string) {
    this._repositoryId = value;
  }
  public resetRepositoryId() {
    this._repositoryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryIdInput() {
    return this._repositoryId;
  }

  // retention_policy_id - computed: false, optional: true, required: false
  private _retentionPolicyId?: string; 
  public get retentionPolicyId() {
    return this.getStringAttribute('retention_policy_id');
  }
  public set retentionPolicyId(value: string) {
    this._retentionPolicyId = value;
  }
  public resetRetentionPolicyId() {
    this._retentionPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPolicyIdInput() {
    return this._retentionPolicyId;
  }

  // root_parent_id - computed: true, optional: false, required: false
  public get rootParentId() {
    return this.getStringAttribute('root_parent_id');
  }

  // snapshot_id - computed: false, optional: true, required: false
  private _snapshotId?: string; 
  public get snapshotId() {
    return this.getStringAttribute('snapshot_id');
  }
  public set snapshotId(value: string) {
    this._snapshotId = value;
  }
  public resetSnapshotId() {
    this._snapshotId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotIdInput() {
    return this._snapshotId;
  }

  // snapshot_policy_id - computed: false, optional: true, required: false
  private _snapshotPolicyId?: string; 
  public get snapshotPolicyId() {
    return this.getStringAttribute('snapshot_policy_id');
  }
  public set snapshotPolicyId(value: string) {
    this._snapshotPolicyId = value;
  }
  public resetSnapshotPolicyId() {
    this._snapshotPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotPolicyIdInput() {
    return this._snapshotPolicyId;
  }

  // source_data_id - computed: false, optional: true, required: false
  private _sourceDataId?: string; 
  public get sourceDataId() {
    return this.getStringAttribute('source_data_id');
  }
  public set sourceDataId(value: string) {
    this._sourceDataId = value;
  }
  public resetSourceDataId() {
    this._sourceDataId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDataIdInput() {
    return this._sourceDataId;
  }

  // target_group_id - computed: false, optional: true, required: false
  private _targetGroupId?: string; 
  public get targetGroupId() {
    return this.getStringAttribute('target_group_id');
  }
  public set targetGroupId(value: string) {
    this._targetGroupId = value;
  }
  public resetTargetGroupId() {
    this._targetGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetGroupIdInput() {
    return this._targetGroupId;
  }

  // target_vcdb_tde_keystore_path - computed: false, optional: true, required: false
  private _targetVcdbTdeKeystorePath?: string; 
  public get targetVcdbTdeKeystorePath() {
    return this.getStringAttribute('target_vcdb_tde_keystore_path');
  }
  public set targetVcdbTdeKeystorePath(value: string) {
    this._targetVcdbTdeKeystorePath = value;
  }
  public resetTargetVcdbTdeKeystorePath() {
    this._targetVcdbTdeKeystorePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetVcdbTdeKeystorePathInput() {
    return this._targetVcdbTdeKeystorePath;
  }

  // tde_exported_key_file_secret - computed: false, optional: true, required: false
  private _tdeExportedKeyFileSecret?: string; 
  public get tdeExportedKeyFileSecret() {
    return this.getStringAttribute('tde_exported_key_file_secret');
  }
  public set tdeExportedKeyFileSecret(value: string) {
    this._tdeExportedKeyFileSecret = value;
  }
  public resetTdeExportedKeyFileSecret() {
    this._tdeExportedKeyFileSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tdeExportedKeyFileSecretInput() {
    return this._tdeExportedKeyFileSecret;
  }

  // tde_key_identifier - computed: false, optional: true, required: false
  private _tdeKeyIdentifier?: string; 
  public get tdeKeyIdentifier() {
    return this.getStringAttribute('tde_key_identifier');
  }
  public set tdeKeyIdentifier(value: string) {
    this._tdeKeyIdentifier = value;
  }
  public resetTdeKeyIdentifier() {
    this._tdeKeyIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tdeKeyIdentifierInput() {
    return this._tdeKeyIdentifier;
  }

  // template_id - computed: false, optional: true, required: false
  private _templateId?: string; 
  public get templateId() {
    return this.getStringAttribute('template_id');
  }
  public set templateId(value: string) {
    this._templateId = value;
  }
  public resetTemplateId() {
    this._templateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIdInput() {
    return this._templateId;
  }

  // timestamp - computed: false, optional: true, required: false
  private _timestamp?: string; 
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }
  public set timestamp(value: string) {
    this._timestamp = value;
  }
  public resetTimestamp() {
    this._timestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampInput() {
    return this._timestamp;
  }

  // timestamp_in_database_timezone - computed: false, optional: true, required: false
  private _timestampInDatabaseTimezone?: string; 
  public get timestampInDatabaseTimezone() {
    return this.getStringAttribute('timestamp_in_database_timezone');
  }
  public set timestampInDatabaseTimezone(value: string) {
    this._timestampInDatabaseTimezone = value;
  }
  public resetTimestampInDatabaseTimezone() {
    this._timestampInDatabaseTimezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampInDatabaseTimezoneInput() {
    return this._timestampInDatabaseTimezone;
  }

  // truncate_log_on_checkpoint - computed: false, optional: true, required: false
  private _truncateLogOnCheckpoint?: boolean | cdktf.IResolvable; 
  public get truncateLogOnCheckpoint() {
    return this.getBooleanAttribute('truncate_log_on_checkpoint');
  }
  public set truncateLogOnCheckpoint(value: boolean | cdktf.IResolvable) {
    this._truncateLogOnCheckpoint = value;
  }
  public resetTruncateLogOnCheckpoint() {
    this._truncateLogOnCheckpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get truncateLogOnCheckpointInput() {
    return this._truncateLogOnCheckpoint;
  }

  // unique_name - computed: false, optional: true, required: false
  private _uniqueName?: string; 
  public get uniqueName() {
    return this.getStringAttribute('unique_name');
  }
  public set uniqueName(value: string) {
    this._uniqueName = value;
  }
  public resetUniqueName() {
    this._uniqueName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqueNameInput() {
    return this._uniqueName;
  }

  // vcdb_database_name - computed: false, optional: true, required: false
  private _vcdbDatabaseName?: string; 
  public get vcdbDatabaseName() {
    return this.getStringAttribute('vcdb_database_name');
  }
  public set vcdbDatabaseName(value: string) {
    this._vcdbDatabaseName = value;
  }
  public resetVcdbDatabaseName() {
    this._vcdbDatabaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcdbDatabaseNameInput() {
    return this._vcdbDatabaseName;
  }

  // vcdb_name - computed: false, optional: true, required: false
  private _vcdbName?: string; 
  public get vcdbName() {
    return this.getStringAttribute('vcdb_name');
  }
  public set vcdbName(value: string) {
    this._vcdbName = value;
  }
  public resetVcdbName() {
    this._vcdbName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcdbNameInput() {
    return this._vcdbName;
  }

  // vcdb_tde_key_identifier - computed: false, optional: true, required: false
  private _vcdbTdeKeyIdentifier?: string; 
  public get vcdbTdeKeyIdentifier() {
    return this.getStringAttribute('vcdb_tde_key_identifier');
  }
  public set vcdbTdeKeyIdentifier(value: string) {
    this._vcdbTdeKeyIdentifier = value;
  }
  public resetVcdbTdeKeyIdentifier() {
    this._vcdbTdeKeyIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcdbTdeKeyIdentifierInput() {
    return this._vcdbTdeKeyIdentifier;
  }

  // vdb_restart - computed: true, optional: true, required: false
  private _vdbRestart?: boolean | cdktf.IResolvable; 
  public get vdbRestart() {
    return this.getBooleanAttribute('vdb_restart');
  }
  public set vdbRestart(value: boolean | cdktf.IResolvable) {
    this._vdbRestart = value;
  }
  public resetVdbRestart() {
    this._vdbRestart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdbRestartInput() {
    return this._vdbRestart;
  }

  // additional_mount_points - computed: false, optional: true, required: false
  private _additionalMountPoints = new VdbAdditionalMountPointsList(this, "additional_mount_points", false);
  public get additionalMountPoints() {
    return this._additionalMountPoints;
  }
  public putAdditionalMountPoints(value: VdbAdditionalMountPoints[] | cdktf.IResolvable) {
    this._additionalMountPoints.internalValue = value;
  }
  public resetAdditionalMountPoints() {
    this._additionalMountPoints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalMountPointsInput() {
    return this._additionalMountPoints.internalValue;
  }

  // configure_clone - computed: false, optional: true, required: false
  private _configureClone = new VdbConfigureCloneList(this, "configure_clone", false);
  public get configureClone() {
    return this._configureClone;
  }
  public putConfigureClone(value: VdbConfigureClone[] | cdktf.IResolvable) {
    this._configureClone.internalValue = value;
  }
  public resetConfigureClone() {
    this._configureClone.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configureCloneInput() {
    return this._configureClone.internalValue;
  }

  // oracle_rac_custom_env_files - computed: false, optional: true, required: false
  private _oracleRacCustomEnvFiles = new VdbOracleRacCustomEnvFilesList(this, "oracle_rac_custom_env_files", false);
  public get oracleRacCustomEnvFiles() {
    return this._oracleRacCustomEnvFiles;
  }
  public putOracleRacCustomEnvFiles(value: VdbOracleRacCustomEnvFiles[] | cdktf.IResolvable) {
    this._oracleRacCustomEnvFiles.internalValue = value;
  }
  public resetOracleRacCustomEnvFiles() {
    this._oracleRacCustomEnvFiles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oracleRacCustomEnvFilesInput() {
    return this._oracleRacCustomEnvFiles.internalValue;
  }

  // oracle_rac_custom_env_vars - computed: false, optional: true, required: false
  private _oracleRacCustomEnvVars = new VdbOracleRacCustomEnvVarsList(this, "oracle_rac_custom_env_vars", false);
  public get oracleRacCustomEnvVars() {
    return this._oracleRacCustomEnvVars;
  }
  public putOracleRacCustomEnvVars(value: VdbOracleRacCustomEnvVars[] | cdktf.IResolvable) {
    this._oracleRacCustomEnvVars.internalValue = value;
  }
  public resetOracleRacCustomEnvVars() {
    this._oracleRacCustomEnvVars.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oracleRacCustomEnvVarsInput() {
    return this._oracleRacCustomEnvVars.internalValue;
  }

  // post_refresh - computed: false, optional: true, required: false
  private _postRefresh = new VdbPostRefreshList(this, "post_refresh", false);
  public get postRefresh() {
    return this._postRefresh;
  }
  public putPostRefresh(value: VdbPostRefresh[] | cdktf.IResolvable) {
    this._postRefresh.internalValue = value;
  }
  public resetPostRefresh() {
    this._postRefresh.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postRefreshInput() {
    return this._postRefresh.internalValue;
  }

  // post_rollback - computed: false, optional: true, required: false
  private _postRollback = new VdbPostRollbackList(this, "post_rollback", false);
  public get postRollback() {
    return this._postRollback;
  }
  public putPostRollback(value: VdbPostRollback[] | cdktf.IResolvable) {
    this._postRollback.internalValue = value;
  }
  public resetPostRollback() {
    this._postRollback.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postRollbackInput() {
    return this._postRollback.internalValue;
  }

  // post_snapshot - computed: false, optional: true, required: false
  private _postSnapshot = new VdbPostSnapshotList(this, "post_snapshot", false);
  public get postSnapshot() {
    return this._postSnapshot;
  }
  public putPostSnapshot(value: VdbPostSnapshot[] | cdktf.IResolvable) {
    this._postSnapshot.internalValue = value;
  }
  public resetPostSnapshot() {
    this._postSnapshot.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postSnapshotInput() {
    return this._postSnapshot.internalValue;
  }

  // post_start - computed: false, optional: true, required: false
  private _postStart = new VdbPostStartList(this, "post_start", false);
  public get postStart() {
    return this._postStart;
  }
  public putPostStart(value: VdbPostStart[] | cdktf.IResolvable) {
    this._postStart.internalValue = value;
  }
  public resetPostStart() {
    this._postStart.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postStartInput() {
    return this._postStart.internalValue;
  }

  // post_stop - computed: false, optional: true, required: false
  private _postStop = new VdbPostStopList(this, "post_stop", false);
  public get postStop() {
    return this._postStop;
  }
  public putPostStop(value: VdbPostStop[] | cdktf.IResolvable) {
    this._postStop.internalValue = value;
  }
  public resetPostStop() {
    this._postStop.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postStopInput() {
    return this._postStop.internalValue;
  }

  // pre_refresh - computed: false, optional: true, required: false
  private _preRefresh = new VdbPreRefreshList(this, "pre_refresh", false);
  public get preRefresh() {
    return this._preRefresh;
  }
  public putPreRefresh(value: VdbPreRefresh[] | cdktf.IResolvable) {
    this._preRefresh.internalValue = value;
  }
  public resetPreRefresh() {
    this._preRefresh.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preRefreshInput() {
    return this._preRefresh.internalValue;
  }

  // pre_rollback - computed: false, optional: true, required: false
  private _preRollback = new VdbPreRollbackList(this, "pre_rollback", false);
  public get preRollback() {
    return this._preRollback;
  }
  public putPreRollback(value: VdbPreRollback[] | cdktf.IResolvable) {
    this._preRollback.internalValue = value;
  }
  public resetPreRollback() {
    this._preRollback.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preRollbackInput() {
    return this._preRollback.internalValue;
  }

  // pre_snapshot - computed: false, optional: true, required: false
  private _preSnapshot = new VdbPreSnapshotList(this, "pre_snapshot", false);
  public get preSnapshot() {
    return this._preSnapshot;
  }
  public putPreSnapshot(value: VdbPreSnapshot[] | cdktf.IResolvable) {
    this._preSnapshot.internalValue = value;
  }
  public resetPreSnapshot() {
    this._preSnapshot.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preSnapshotInput() {
    return this._preSnapshot.internalValue;
  }

  // pre_start - computed: false, optional: true, required: false
  private _preStart = new VdbPreStartList(this, "pre_start", false);
  public get preStart() {
    return this._preStart;
  }
  public putPreStart(value: VdbPreStart[] | cdktf.IResolvable) {
    this._preStart.internalValue = value;
  }
  public resetPreStart() {
    this._preStart.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preStartInput() {
    return this._preStart.internalValue;
  }

  // pre_stop - computed: false, optional: true, required: false
  private _preStop = new VdbPreStopList(this, "pre_stop", false);
  public get preStop() {
    return this._preStop;
  }
  public putPreStop(value: VdbPreStop[] | cdktf.IResolvable) {
    this._preStop.internalValue = value;
  }
  public resetPreStop() {
    this._preStop.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preStopInput() {
    return this._preStop.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new VdbTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: VdbTags[] | cdktf.IResolvable) {
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
      appdata_source_params: cdktf.stringToTerraform(this._appdataSourceParams),
      archive_log: cdktf.booleanToTerraform(this._archiveLog),
      auto_select_repository: cdktf.booleanToTerraform(this._autoSelectRepository),
      auxiliary_template_id: cdktf.stringToTerraform(this._auxiliaryTemplateId),
      bookmark_id: cdktf.stringToTerraform(this._bookmarkId),
      cdb_id: cdktf.stringToTerraform(this._cdbId),
      cdb_tde_keystore_password: cdktf.stringToTerraform(this._cdbTdeKeystorePassword),
      cdc_on_provision: cdktf.booleanToTerraform(this._cdcOnProvision),
      cluster_node_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._clusterNodeIds),
      config_params: cdktf.stringToTerraform(this._configParams),
      custom_env_files: cdktf.listMapper(cdktf.stringToTerraform, false)(this._customEnvFiles),
      custom_env_vars: cdktf.hashMapper(cdktf.stringToTerraform)(this._customEnvVars),
      database_name: cdktf.stringToTerraform(this._databaseName),
      db_password: cdktf.stringToTerraform(this._dbPassword),
      db_username: cdktf.stringToTerraform(this._dbUsername),
      engine_id: cdktf.stringToTerraform(this._engineId),
      environment_id: cdktf.stringToTerraform(this._environmentId),
      environment_user_id: cdktf.stringToTerraform(this._environmentUserId),
      file_mapping_rules: cdktf.stringToTerraform(this._fileMappingRules),
      ignore_tag_changes: cdktf.booleanToTerraform(this._ignoreTagChanges),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      listener_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._listenerIds),
      make_current_account_owner: cdktf.booleanToTerraform(this._makeCurrentAccountOwner),
      masked: cdktf.booleanToTerraform(this._masked),
      mount_point: cdktf.stringToTerraform(this._mountPoint),
      name: cdktf.stringToTerraform(this._name),
      new_dbid: cdktf.booleanToTerraform(this._newDbid),
      online_log_groups: cdktf.numberToTerraform(this._onlineLogGroups),
      online_log_size: cdktf.numberToTerraform(this._onlineLogSize),
      open_reset_logs: cdktf.booleanToTerraform(this._openResetLogs),
      os_password: cdktf.stringToTerraform(this._osPassword),
      os_username: cdktf.stringToTerraform(this._osUsername),
      parent_tde_keystore_password: cdktf.stringToTerraform(this._parentTdeKeystorePassword),
      parent_tde_keystore_path: cdktf.stringToTerraform(this._parentTdeKeystorePath),
      post_script: cdktf.stringToTerraform(this._postScript),
      pre_script: cdktf.stringToTerraform(this._preScript),
      provision_type: cdktf.stringToTerraform(this._provisionType),
      recovery_model: cdktf.stringToTerraform(this._recoveryModel),
      repository_id: cdktf.stringToTerraform(this._repositoryId),
      retention_policy_id: cdktf.stringToTerraform(this._retentionPolicyId),
      snapshot_id: cdktf.stringToTerraform(this._snapshotId),
      snapshot_policy_id: cdktf.stringToTerraform(this._snapshotPolicyId),
      source_data_id: cdktf.stringToTerraform(this._sourceDataId),
      target_group_id: cdktf.stringToTerraform(this._targetGroupId),
      target_vcdb_tde_keystore_path: cdktf.stringToTerraform(this._targetVcdbTdeKeystorePath),
      tde_exported_key_file_secret: cdktf.stringToTerraform(this._tdeExportedKeyFileSecret),
      tde_key_identifier: cdktf.stringToTerraform(this._tdeKeyIdentifier),
      template_id: cdktf.stringToTerraform(this._templateId),
      timestamp: cdktf.stringToTerraform(this._timestamp),
      timestamp_in_database_timezone: cdktf.stringToTerraform(this._timestampInDatabaseTimezone),
      truncate_log_on_checkpoint: cdktf.booleanToTerraform(this._truncateLogOnCheckpoint),
      unique_name: cdktf.stringToTerraform(this._uniqueName),
      vcdb_database_name: cdktf.stringToTerraform(this._vcdbDatabaseName),
      vcdb_name: cdktf.stringToTerraform(this._vcdbName),
      vcdb_tde_key_identifier: cdktf.stringToTerraform(this._vcdbTdeKeyIdentifier),
      vdb_restart: cdktf.booleanToTerraform(this._vdbRestart),
      additional_mount_points: cdktf.listMapper(vdbAdditionalMountPointsToTerraform, true)(this._additionalMountPoints.internalValue),
      configure_clone: cdktf.listMapper(vdbConfigureCloneToTerraform, true)(this._configureClone.internalValue),
      oracle_rac_custom_env_files: cdktf.listMapper(vdbOracleRacCustomEnvFilesToTerraform, true)(this._oracleRacCustomEnvFiles.internalValue),
      oracle_rac_custom_env_vars: cdktf.listMapper(vdbOracleRacCustomEnvVarsToTerraform, true)(this._oracleRacCustomEnvVars.internalValue),
      post_refresh: cdktf.listMapper(vdbPostRefreshToTerraform, true)(this._postRefresh.internalValue),
      post_rollback: cdktf.listMapper(vdbPostRollbackToTerraform, true)(this._postRollback.internalValue),
      post_snapshot: cdktf.listMapper(vdbPostSnapshotToTerraform, true)(this._postSnapshot.internalValue),
      post_start: cdktf.listMapper(vdbPostStartToTerraform, true)(this._postStart.internalValue),
      post_stop: cdktf.listMapper(vdbPostStopToTerraform, true)(this._postStop.internalValue),
      pre_refresh: cdktf.listMapper(vdbPreRefreshToTerraform, true)(this._preRefresh.internalValue),
      pre_rollback: cdktf.listMapper(vdbPreRollbackToTerraform, true)(this._preRollback.internalValue),
      pre_snapshot: cdktf.listMapper(vdbPreSnapshotToTerraform, true)(this._preSnapshot.internalValue),
      pre_start: cdktf.listMapper(vdbPreStartToTerraform, true)(this._preStart.internalValue),
      pre_stop: cdktf.listMapper(vdbPreStopToTerraform, true)(this._preStop.internalValue),
      tags: cdktf.listMapper(vdbTagsToTerraform, true)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      appdata_source_params: {
        value: cdktf.stringToHclTerraform(this._appdataSourceParams),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      archive_log: {
        value: cdktf.booleanToHclTerraform(this._archiveLog),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_select_repository: {
        value: cdktf.booleanToHclTerraform(this._autoSelectRepository),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auxiliary_template_id: {
        value: cdktf.stringToHclTerraform(this._auxiliaryTemplateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bookmark_id: {
        value: cdktf.stringToHclTerraform(this._bookmarkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cdb_id: {
        value: cdktf.stringToHclTerraform(this._cdbId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cdb_tde_keystore_password: {
        value: cdktf.stringToHclTerraform(this._cdbTdeKeystorePassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cdc_on_provision: {
        value: cdktf.booleanToHclTerraform(this._cdcOnProvision),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cluster_node_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._clusterNodeIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      config_params: {
        value: cdktf.stringToHclTerraform(this._configParams),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_env_files: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._customEnvFiles),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      custom_env_vars: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._customEnvVars),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      database_name: {
        value: cdktf.stringToHclTerraform(this._databaseName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_password: {
        value: cdktf.stringToHclTerraform(this._dbPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_username: {
        value: cdktf.stringToHclTerraform(this._dbUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      engine_id: {
        value: cdktf.stringToHclTerraform(this._engineId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment_user_id: {
        value: cdktf.stringToHclTerraform(this._environmentUserId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_mapping_rules: {
        value: cdktf.stringToHclTerraform(this._fileMappingRules),
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
      instance_name: {
        value: cdktf.stringToHclTerraform(this._instanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      listener_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._listenerIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      make_current_account_owner: {
        value: cdktf.booleanToHclTerraform(this._makeCurrentAccountOwner),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      masked: {
        value: cdktf.booleanToHclTerraform(this._masked),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mount_point: {
        value: cdktf.stringToHclTerraform(this._mountPoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      new_dbid: {
        value: cdktf.booleanToHclTerraform(this._newDbid),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      online_log_groups: {
        value: cdktf.numberToHclTerraform(this._onlineLogGroups),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      online_log_size: {
        value: cdktf.numberToHclTerraform(this._onlineLogSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      open_reset_logs: {
        value: cdktf.booleanToHclTerraform(this._openResetLogs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      os_password: {
        value: cdktf.stringToHclTerraform(this._osPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      os_username: {
        value: cdktf.stringToHclTerraform(this._osUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent_tde_keystore_password: {
        value: cdktf.stringToHclTerraform(this._parentTdeKeystorePassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent_tde_keystore_path: {
        value: cdktf.stringToHclTerraform(this._parentTdeKeystorePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      post_script: {
        value: cdktf.stringToHclTerraform(this._postScript),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pre_script: {
        value: cdktf.stringToHclTerraform(this._preScript),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provision_type: {
        value: cdktf.stringToHclTerraform(this._provisionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recovery_model: {
        value: cdktf.stringToHclTerraform(this._recoveryModel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repository_id: {
        value: cdktf.stringToHclTerraform(this._repositoryId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retention_policy_id: {
        value: cdktf.stringToHclTerraform(this._retentionPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snapshot_id: {
        value: cdktf.stringToHclTerraform(this._snapshotId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snapshot_policy_id: {
        value: cdktf.stringToHclTerraform(this._snapshotPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_data_id: {
        value: cdktf.stringToHclTerraform(this._sourceDataId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_group_id: {
        value: cdktf.stringToHclTerraform(this._targetGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_vcdb_tde_keystore_path: {
        value: cdktf.stringToHclTerraform(this._targetVcdbTdeKeystorePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tde_exported_key_file_secret: {
        value: cdktf.stringToHclTerraform(this._tdeExportedKeyFileSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tde_key_identifier: {
        value: cdktf.stringToHclTerraform(this._tdeKeyIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_id: {
        value: cdktf.stringToHclTerraform(this._templateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timestamp: {
        value: cdktf.stringToHclTerraform(this._timestamp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timestamp_in_database_timezone: {
        value: cdktf.stringToHclTerraform(this._timestampInDatabaseTimezone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      truncate_log_on_checkpoint: {
        value: cdktf.booleanToHclTerraform(this._truncateLogOnCheckpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      unique_name: {
        value: cdktf.stringToHclTerraform(this._uniqueName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vcdb_database_name: {
        value: cdktf.stringToHclTerraform(this._vcdbDatabaseName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vcdb_name: {
        value: cdktf.stringToHclTerraform(this._vcdbName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vcdb_tde_key_identifier: {
        value: cdktf.stringToHclTerraform(this._vcdbTdeKeyIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdb_restart: {
        value: cdktf.booleanToHclTerraform(this._vdbRestart),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      additional_mount_points: {
        value: cdktf.listMapperHcl(vdbAdditionalMountPointsToHclTerraform, true)(this._additionalMountPoints.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VdbAdditionalMountPointsList",
      },
      configure_clone: {
        value: cdktf.listMapperHcl(vdbConfigureCloneToHclTerraform, true)(this._configureClone.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VdbConfigureCloneList",
      },
      oracle_rac_custom_env_files: {
        value: cdktf.listMapperHcl(vdbOracleRacCustomEnvFilesToHclTerraform, true)(this._oracleRacCustomEnvFiles.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VdbOracleRacCustomEnvFilesList",
      },
      oracle_rac_custom_env_vars: {
        value: cdktf.listMapperHcl(vdbOracleRacCustomEnvVarsToHclTerraform, true)(this._oracleRacCustomEnvVars.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VdbOracleRacCustomEnvVarsList",
      },
      post_refresh: {
        value: cdktf.listMapperHcl(vdbPostRefreshToHclTerraform, true)(this._postRefresh.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VdbPostRefreshList",
      },
      post_rollback: {
        value: cdktf.listMapperHcl(vdbPostRollbackToHclTerraform, true)(this._postRollback.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VdbPostRollbackList",
      },
      post_snapshot: {
        value: cdktf.listMapperHcl(vdbPostSnapshotToHclTerraform, true)(this._postSnapshot.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VdbPostSnapshotList",
      },
      post_start: {
        value: cdktf.listMapperHcl(vdbPostStartToHclTerraform, true)(this._postStart.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VdbPostStartList",
      },
      post_stop: {
        value: cdktf.listMapperHcl(vdbPostStopToHclTerraform, true)(this._postStop.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VdbPostStopList",
      },
      pre_refresh: {
        value: cdktf.listMapperHcl(vdbPreRefreshToHclTerraform, true)(this._preRefresh.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VdbPreRefreshList",
      },
      pre_rollback: {
        value: cdktf.listMapperHcl(vdbPreRollbackToHclTerraform, true)(this._preRollback.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VdbPreRollbackList",
      },
      pre_snapshot: {
        value: cdktf.listMapperHcl(vdbPreSnapshotToHclTerraform, true)(this._preSnapshot.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VdbPreSnapshotList",
      },
      pre_start: {
        value: cdktf.listMapperHcl(vdbPreStartToHclTerraform, true)(this._preStart.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VdbPreStartList",
      },
      pre_stop: {
        value: cdktf.listMapperHcl(vdbPreStopToHclTerraform, true)(this._preStop.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VdbPreStopList",
      },
      tags: {
        value: cdktf.listMapperHcl(vdbTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VdbTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
