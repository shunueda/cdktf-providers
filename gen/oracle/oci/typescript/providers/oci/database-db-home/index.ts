// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_db_home
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabaseDbHomeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_db_home#database_software_image_id DatabaseDbHome#database_software_image_id}
  */
  readonly databaseSoftwareImageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_db_home#db_system_id DatabaseDbHome#db_system_id}
  */
  readonly dbSystemId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_db_home#db_version DatabaseDbHome#db_version}
  */
  readonly dbVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_db_home#defined_tags DatabaseDbHome#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_db_home#display_name DatabaseDbHome#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_db_home#enable_database_delete DatabaseDbHome#enable_database_delete}
  */
  readonly enableDatabaseDelete?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_db_home#freeform_tags DatabaseDbHome#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_db_home#id DatabaseDbHome#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_db_home#is_desupported_version DatabaseDbHome#is_desupported_version}
  */
  readonly isDesupportedVersion?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_db_home#is_unified_auditing_enabled DatabaseDbHome#is_unified_auditing_enabled}
  */
  readonly isUnifiedAuditingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_db_home#kms_key_id DatabaseDbHome#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_db_home#kms_key_version_id DatabaseDbHome#kms_key_version_id}
  */
  readonly kmsKeyVersionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_db_home#source DatabaseDbHome#source}
  */
  readonly source?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_db_home#vm_cluster_id DatabaseDbHome#vm_cluster_id}
  */
  readonly vmClusterId?: string;
  /**
  * database block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_db_home#database DatabaseDbHome#database}
  */
  readonly database?: DatabaseDbHomeDatabase;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_db_home#timeouts DatabaseDbHome#timeouts}
  */
  readonly timeouts?: DatabaseDbHomeTimeouts;
}
export interface DatabaseDbHomeDatabaseConnectionStrings {
}

export function databaseDbHomeDatabaseConnectionStringsToTerraform(struct?: DatabaseDbHomeDatabaseConnectionStrings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseDbHomeDatabaseConnectionStringsToHclTerraform(struct?: DatabaseDbHomeDatabaseConnectionStrings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseDbHomeDatabaseConnectionStringsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DatabaseDbHomeDatabaseConnectionStrings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseDbHomeDatabaseConnectionStrings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // all_connection_strings - computed: true, optional: false, required: false
  private _allConnectionStrings = new cdktf.StringMap(this, "all_connection_strings");
  public get allConnectionStrings() {
    return this._allConnectionStrings;
  }

  // cdb_default - computed: true, optional: false, required: false
  public get cdbDefault() {
    return this.getStringAttribute('cdb_default');
  }

  // cdb_ip_default - computed: true, optional: false, required: false
  public get cdbIpDefault() {
    return this.getStringAttribute('cdb_ip_default');
  }
}

export class DatabaseDbHomeDatabaseConnectionStringsList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseDbHomeDatabaseConnectionStringsOutputReference {
    return new DatabaseDbHomeDatabaseConnectionStringsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_db_home#backup_retention_policy_on_terminate DatabaseDbHome#backup_retention_policy_on_terminate}
  */
  readonly backupRetentionPolicyOnTerminate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_db_home#dbrs_policy_id DatabaseDbHome#dbrs_policy_id}
  */
  readonly dbrsPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_db_home#id DatabaseDbHome#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_db_home#is_remote DatabaseDbHome#is_remote}
  */
  readonly isRemote?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_db_home#is_retention_lock_enabled DatabaseDbHome#is_retention_lock_enabled}
  */
  readonly isRetentionLockEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_db_home#remote_region DatabaseDbHome#remote_region}
  */
  readonly remoteRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_db_home#type DatabaseDbHome#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_db_home#vpc_password DatabaseDbHome#vpc_password}
  */
  readonly vpcPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_db_home#vpc_user DatabaseDbHome#vpc_user}
  */
  readonly vpcUser?: string;
}

export function databaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsToTerraform(struct?: DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_retention_policy_on_terminate: cdktf.stringToTerraform(struct!.backupRetentionPolicyOnTerminate),
    dbrs_policy_id: cdktf.stringToTerraform(struct!.dbrsPolicyId),
    id: cdktf.stringToTerraform(struct!.id),
    is_remote: cdktf.booleanToTerraform(struct!.isRemote),
    is_retention_lock_enabled: cdktf.booleanToTerraform(struct!.isRetentionLockEnabled),
    remote_region: cdktf.stringToTerraform(struct!.remoteRegion),
    type: cdktf.stringToTerraform(struct!.type),
    vpc_password: cdktf.stringToTerraform(struct!.vpcPassword),
    vpc_user: cdktf.stringToTerraform(struct!.vpcUser),
  }
}


export function databaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsToHclTerraform(struct?: DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_retention_policy_on_terminate: {
      value: cdktf.stringToHclTerraform(struct!.backupRetentionPolicyOnTerminate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dbrs_policy_id: {
      value: cdktf.stringToHclTerraform(struct!.dbrsPolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_remote: {
      value: cdktf.booleanToHclTerraform(struct!.isRemote),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_retention_lock_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isRetentionLockEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    remote_region: {
      value: cdktf.stringToHclTerraform(struct!.remoteRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_password: {
      value: cdktf.stringToHclTerraform(struct!.vpcPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_user: {
      value: cdktf.stringToHclTerraform(struct!.vpcUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupRetentionPolicyOnTerminate !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupRetentionPolicyOnTerminate = this._backupRetentionPolicyOnTerminate;
    }
    if (this._dbrsPolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbrsPolicyId = this._dbrsPolicyId;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._isRemote !== undefined) {
      hasAnyValues = true;
      internalValueResult.isRemote = this._isRemote;
    }
    if (this._isRetentionLockEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isRetentionLockEnabled = this._isRetentionLockEnabled;
    }
    if (this._remoteRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteRegion = this._remoteRegion;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._vpcPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcPassword = this._vpcPassword;
    }
    if (this._vpcUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcUser = this._vpcUser;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backupRetentionPolicyOnTerminate = undefined;
      this._dbrsPolicyId = undefined;
      this._id = undefined;
      this._isRemote = undefined;
      this._isRetentionLockEnabled = undefined;
      this._remoteRegion = undefined;
      this._type = undefined;
      this._vpcPassword = undefined;
      this._vpcUser = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backupRetentionPolicyOnTerminate = value.backupRetentionPolicyOnTerminate;
      this._dbrsPolicyId = value.dbrsPolicyId;
      this._id = value.id;
      this._isRemote = value.isRemote;
      this._isRetentionLockEnabled = value.isRetentionLockEnabled;
      this._remoteRegion = value.remoteRegion;
      this._type = value.type;
      this._vpcPassword = value.vpcPassword;
      this._vpcUser = value.vpcUser;
    }
  }

  // backup_retention_policy_on_terminate - computed: true, optional: true, required: false
  private _backupRetentionPolicyOnTerminate?: string; 
  public get backupRetentionPolicyOnTerminate() {
    return this.getStringAttribute('backup_retention_policy_on_terminate');
  }
  public set backupRetentionPolicyOnTerminate(value: string) {
    this._backupRetentionPolicyOnTerminate = value;
  }
  public resetBackupRetentionPolicyOnTerminate() {
    this._backupRetentionPolicyOnTerminate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupRetentionPolicyOnTerminateInput() {
    return this._backupRetentionPolicyOnTerminate;
  }

  // dbrs_policy_id - computed: true, optional: true, required: false
  private _dbrsPolicyId?: string; 
  public get dbrsPolicyId() {
    return this.getStringAttribute('dbrs_policy_id');
  }
  public set dbrsPolicyId(value: string) {
    this._dbrsPolicyId = value;
  }
  public resetDbrsPolicyId() {
    this._dbrsPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbrsPolicyIdInput() {
    return this._dbrsPolicyId;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // is_remote - computed: true, optional: true, required: false
  private _isRemote?: boolean | cdktf.IResolvable; 
  public get isRemote() {
    return this.getBooleanAttribute('is_remote');
  }
  public set isRemote(value: boolean | cdktf.IResolvable) {
    this._isRemote = value;
  }
  public resetIsRemote() {
    this._isRemote = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRemoteInput() {
    return this._isRemote;
  }

  // is_retention_lock_enabled - computed: true, optional: true, required: false
  private _isRetentionLockEnabled?: boolean | cdktf.IResolvable; 
  public get isRetentionLockEnabled() {
    return this.getBooleanAttribute('is_retention_lock_enabled');
  }
  public set isRetentionLockEnabled(value: boolean | cdktf.IResolvable) {
    this._isRetentionLockEnabled = value;
  }
  public resetIsRetentionLockEnabled() {
    this._isRetentionLockEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRetentionLockEnabledInput() {
    return this._isRetentionLockEnabled;
  }

  // remote_region - computed: true, optional: true, required: false
  private _remoteRegion?: string; 
  public get remoteRegion() {
    return this.getStringAttribute('remote_region');
  }
  public set remoteRegion(value: string) {
    this._remoteRegion = value;
  }
  public resetRemoteRegion() {
    this._remoteRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteRegionInput() {
    return this._remoteRegion;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // vpc_password - computed: false, optional: true, required: false
  private _vpcPassword?: string; 
  public get vpcPassword() {
    return this.getStringAttribute('vpc_password');
  }
  public set vpcPassword(value: string) {
    this._vpcPassword = value;
  }
  public resetVpcPassword() {
    this._vpcPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcPasswordInput() {
    return this._vpcPassword;
  }

  // vpc_user - computed: false, optional: true, required: false
  private _vpcUser?: string; 
  public get vpcUser() {
    return this.getStringAttribute('vpc_user');
  }
  public set vpcUser(value: string) {
    this._vpcUser = value;
  }
  public resetVpcUser() {
    this._vpcUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcUserInput() {
    return this._vpcUser;
  }
}

export class DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList extends cdktf.ComplexList {
  public internalValue? : DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetails[] | cdktf.IResolvable

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
  public get(index: number): DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference {
    return new DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseDbHomeDatabaseDbBackupConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_db_home#auto_backup_enabled DatabaseDbHome#auto_backup_enabled}
  */
  readonly autoBackupEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_db_home#auto_backup_window DatabaseDbHome#auto_backup_window}
  */
  readonly autoBackupWindow?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_db_home#auto_full_backup_day DatabaseDbHome#auto_full_backup_day}
  */
  readonly autoFullBackupDay?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_db_home#auto_full_backup_window DatabaseDbHome#auto_full_backup_window}
  */
  readonly autoFullBackupWindow?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_db_home#backup_deletion_policy DatabaseDbHome#backup_deletion_policy}
  */
  readonly backupDeletionPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_db_home#recovery_window_in_days DatabaseDbHome#recovery_window_in_days}
  */
  readonly recoveryWindowInDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_db_home#run_immediate_full_backup DatabaseDbHome#run_immediate_full_backup}
  */
  readonly runImmediateFullBackup?: boolean | cdktf.IResolvable;
  /**
  * backup_destination_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_db_home#backup_destination_details DatabaseDbHome#backup_destination_details}
  */
  readonly backupDestinationDetails?: DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetails[] | cdktf.IResolvable;
}

export function databaseDbHomeDatabaseDbBackupConfigToTerraform(struct?: DatabaseDbHomeDatabaseDbBackupConfigOutputReference | DatabaseDbHomeDatabaseDbBackupConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_backup_enabled: cdktf.booleanToTerraform(struct!.autoBackupEnabled),
    auto_backup_window: cdktf.stringToTerraform(struct!.autoBackupWindow),
    auto_full_backup_day: cdktf.stringToTerraform(struct!.autoFullBackupDay),
    auto_full_backup_window: cdktf.stringToTerraform(struct!.autoFullBackupWindow),
    backup_deletion_policy: cdktf.stringToTerraform(struct!.backupDeletionPolicy),
    recovery_window_in_days: cdktf.numberToTerraform(struct!.recoveryWindowInDays),
    run_immediate_full_backup: cdktf.booleanToTerraform(struct!.runImmediateFullBackup),
    backup_destination_details: cdktf.listMapper(databaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsToTerraform, true)(struct!.backupDestinationDetails),
  }
}


export function databaseDbHomeDatabaseDbBackupConfigToHclTerraform(struct?: DatabaseDbHomeDatabaseDbBackupConfigOutputReference | DatabaseDbHomeDatabaseDbBackupConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_backup_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.autoBackupEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    auto_backup_window: {
      value: cdktf.stringToHclTerraform(struct!.autoBackupWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auto_full_backup_day: {
      value: cdktf.stringToHclTerraform(struct!.autoFullBackupDay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auto_full_backup_window: {
      value: cdktf.stringToHclTerraform(struct!.autoFullBackupWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backup_deletion_policy: {
      value: cdktf.stringToHclTerraform(struct!.backupDeletionPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recovery_window_in_days: {
      value: cdktf.numberToHclTerraform(struct!.recoveryWindowInDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    run_immediate_full_backup: {
      value: cdktf.booleanToHclTerraform(struct!.runImmediateFullBackup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    backup_destination_details: {
      value: cdktf.listMapperHcl(databaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsToHclTerraform, true)(struct!.backupDestinationDetails),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseDbHomeDatabaseDbBackupConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseDbHomeDatabaseDbBackupConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoBackupEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoBackupEnabled = this._autoBackupEnabled;
    }
    if (this._autoBackupWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoBackupWindow = this._autoBackupWindow;
    }
    if (this._autoFullBackupDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoFullBackupDay = this._autoFullBackupDay;
    }
    if (this._autoFullBackupWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoFullBackupWindow = this._autoFullBackupWindow;
    }
    if (this._backupDeletionPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupDeletionPolicy = this._backupDeletionPolicy;
    }
    if (this._recoveryWindowInDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.recoveryWindowInDays = this._recoveryWindowInDays;
    }
    if (this._runImmediateFullBackup !== undefined) {
      hasAnyValues = true;
      internalValueResult.runImmediateFullBackup = this._runImmediateFullBackup;
    }
    if (this._backupDestinationDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupDestinationDetails = this._backupDestinationDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseDbHomeDatabaseDbBackupConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoBackupEnabled = undefined;
      this._autoBackupWindow = undefined;
      this._autoFullBackupDay = undefined;
      this._autoFullBackupWindow = undefined;
      this._backupDeletionPolicy = undefined;
      this._recoveryWindowInDays = undefined;
      this._runImmediateFullBackup = undefined;
      this._backupDestinationDetails.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoBackupEnabled = value.autoBackupEnabled;
      this._autoBackupWindow = value.autoBackupWindow;
      this._autoFullBackupDay = value.autoFullBackupDay;
      this._autoFullBackupWindow = value.autoFullBackupWindow;
      this._backupDeletionPolicy = value.backupDeletionPolicy;
      this._recoveryWindowInDays = value.recoveryWindowInDays;
      this._runImmediateFullBackup = value.runImmediateFullBackup;
      this._backupDestinationDetails.internalValue = value.backupDestinationDetails;
    }
  }

  // auto_backup_enabled - computed: true, optional: true, required: false
  private _autoBackupEnabled?: boolean | cdktf.IResolvable; 
  public get autoBackupEnabled() {
    return this.getBooleanAttribute('auto_backup_enabled');
  }
  public set autoBackupEnabled(value: boolean | cdktf.IResolvable) {
    this._autoBackupEnabled = value;
  }
  public resetAutoBackupEnabled() {
    this._autoBackupEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoBackupEnabledInput() {
    return this._autoBackupEnabled;
  }

  // auto_backup_window - computed: true, optional: true, required: false
  private _autoBackupWindow?: string; 
  public get autoBackupWindow() {
    return this.getStringAttribute('auto_backup_window');
  }
  public set autoBackupWindow(value: string) {
    this._autoBackupWindow = value;
  }
  public resetAutoBackupWindow() {
    this._autoBackupWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoBackupWindowInput() {
    return this._autoBackupWindow;
  }

  // auto_full_backup_day - computed: false, optional: true, required: false
  private _autoFullBackupDay?: string; 
  public get autoFullBackupDay() {
    return this.getStringAttribute('auto_full_backup_day');
  }
  public set autoFullBackupDay(value: string) {
    this._autoFullBackupDay = value;
  }
  public resetAutoFullBackupDay() {
    this._autoFullBackupDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoFullBackupDayInput() {
    return this._autoFullBackupDay;
  }

  // auto_full_backup_window - computed: true, optional: true, required: false
  private _autoFullBackupWindow?: string; 
  public get autoFullBackupWindow() {
    return this.getStringAttribute('auto_full_backup_window');
  }
  public set autoFullBackupWindow(value: string) {
    this._autoFullBackupWindow = value;
  }
  public resetAutoFullBackupWindow() {
    this._autoFullBackupWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoFullBackupWindowInput() {
    return this._autoFullBackupWindow;
  }

  // backup_deletion_policy - computed: true, optional: true, required: false
  private _backupDeletionPolicy?: string; 
  public get backupDeletionPolicy() {
    return this.getStringAttribute('backup_deletion_policy');
  }
  public set backupDeletionPolicy(value: string) {
    this._backupDeletionPolicy = value;
  }
  public resetBackupDeletionPolicy() {
    this._backupDeletionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupDeletionPolicyInput() {
    return this._backupDeletionPolicy;
  }

  // recovery_window_in_days - computed: true, optional: true, required: false
  private _recoveryWindowInDays?: number; 
  public get recoveryWindowInDays() {
    return this.getNumberAttribute('recovery_window_in_days');
  }
  public set recoveryWindowInDays(value: number) {
    this._recoveryWindowInDays = value;
  }
  public resetRecoveryWindowInDays() {
    this._recoveryWindowInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryWindowInDaysInput() {
    return this._recoveryWindowInDays;
  }

  // run_immediate_full_backup - computed: true, optional: true, required: false
  private _runImmediateFullBackup?: boolean | cdktf.IResolvable; 
  public get runImmediateFullBackup() {
    return this.getBooleanAttribute('run_immediate_full_backup');
  }
  public set runImmediateFullBackup(value: boolean | cdktf.IResolvable) {
    this._runImmediateFullBackup = value;
  }
  public resetRunImmediateFullBackup() {
    this._runImmediateFullBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runImmediateFullBackupInput() {
    return this._runImmediateFullBackup;
  }

  // backup_destination_details - computed: false, optional: true, required: false
  private _backupDestinationDetails = new DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList(this, "backup_destination_details", false);
  public get backupDestinationDetails() {
    return this._backupDestinationDetails;
  }
  public putBackupDestinationDetails(value: DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetails[] | cdktf.IResolvable) {
    this._backupDestinationDetails.internalValue = value;
  }
  public resetBackupDestinationDetails() {
    this._backupDestinationDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupDestinationDetailsInput() {
    return this._backupDestinationDetails.internalValue;
  }
}
export interface DatabaseDbHomeDatabaseEncryptionKeyLocationDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_db_home#azure_encryption_key_id DatabaseDbHome#azure_encryption_key_id}
  */
  readonly azureEncryptionKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_db_home#hsm_password DatabaseDbHome#hsm_password}
  */
  readonly hsmPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_db_home#provider_type DatabaseDbHome#provider_type}
  */
  readonly providerType: string;
}

export function databaseDbHomeDatabaseEncryptionKeyLocationDetailsToTerraform(struct?: DatabaseDbHomeDatabaseEncryptionKeyLocationDetailsOutputReference | DatabaseDbHomeDatabaseEncryptionKeyLocationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    azure_encryption_key_id: cdktf.stringToTerraform(struct!.azureEncryptionKeyId),
    hsm_password: cdktf.stringToTerraform(struct!.hsmPassword),
    provider_type: cdktf.stringToTerraform(struct!.providerType),
  }
}


export function databaseDbHomeDatabaseEncryptionKeyLocationDetailsToHclTerraform(struct?: DatabaseDbHomeDatabaseEncryptionKeyLocationDetailsOutputReference | DatabaseDbHomeDatabaseEncryptionKeyLocationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    azure_encryption_key_id: {
      value: cdktf.stringToHclTerraform(struct!.azureEncryptionKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hsm_password: {
      value: cdktf.stringToHclTerraform(struct!.hsmPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider_type: {
      value: cdktf.stringToHclTerraform(struct!.providerType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseDbHomeDatabaseEncryptionKeyLocationDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseDbHomeDatabaseEncryptionKeyLocationDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._azureEncryptionKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureEncryptionKeyId = this._azureEncryptionKeyId;
    }
    if (this._hsmPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.hsmPassword = this._hsmPassword;
    }
    if (this._providerType !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerType = this._providerType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseDbHomeDatabaseEncryptionKeyLocationDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._azureEncryptionKeyId = undefined;
      this._hsmPassword = undefined;
      this._providerType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._azureEncryptionKeyId = value.azureEncryptionKeyId;
      this._hsmPassword = value.hsmPassword;
      this._providerType = value.providerType;
    }
  }

  // azure_encryption_key_id - computed: true, optional: true, required: false
  private _azureEncryptionKeyId?: string; 
  public get azureEncryptionKeyId() {
    return this.getStringAttribute('azure_encryption_key_id');
  }
  public set azureEncryptionKeyId(value: string) {
    this._azureEncryptionKeyId = value;
  }
  public resetAzureEncryptionKeyId() {
    this._azureEncryptionKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureEncryptionKeyIdInput() {
    return this._azureEncryptionKeyId;
  }

  // hsm_password - computed: false, optional: true, required: false
  private _hsmPassword?: string; 
  public get hsmPassword() {
    return this.getStringAttribute('hsm_password');
  }
  public set hsmPassword(value: string) {
    this._hsmPassword = value;
  }
  public resetHsmPassword() {
    this._hsmPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hsmPasswordInput() {
    return this._hsmPassword;
  }

  // provider_type - computed: false, optional: false, required: true
  private _providerType?: string; 
  public get providerType() {
    return this.getStringAttribute('provider_type');
  }
  public set providerType(value: string) {
    this._providerType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerTypeInput() {
    return this._providerType;
  }
}
export interface DatabaseDbHomeDatabaseStorageSizeDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_db_home#data_storage_size_in_gb DatabaseDbHome#data_storage_size_in_gb}
  */
  readonly dataStorageSizeInGb: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_db_home#reco_storage_size_in_gbs DatabaseDbHome#reco_storage_size_in_gbs}
  */
  readonly recoStorageSizeInGbs: number;
}

export function databaseDbHomeDatabaseStorageSizeDetailsToTerraform(struct?: DatabaseDbHomeDatabaseStorageSizeDetailsOutputReference | DatabaseDbHomeDatabaseStorageSizeDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_storage_size_in_gb: cdktf.numberToTerraform(struct!.dataStorageSizeInGb),
    reco_storage_size_in_gbs: cdktf.numberToTerraform(struct!.recoStorageSizeInGbs),
  }
}


export function databaseDbHomeDatabaseStorageSizeDetailsToHclTerraform(struct?: DatabaseDbHomeDatabaseStorageSizeDetailsOutputReference | DatabaseDbHomeDatabaseStorageSizeDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_storage_size_in_gb: {
      value: cdktf.numberToHclTerraform(struct!.dataStorageSizeInGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reco_storage_size_in_gbs: {
      value: cdktf.numberToHclTerraform(struct!.recoStorageSizeInGbs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseDbHomeDatabaseStorageSizeDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseDbHomeDatabaseStorageSizeDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataStorageSizeInGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataStorageSizeInGb = this._dataStorageSizeInGb;
    }
    if (this._recoStorageSizeInGbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.recoStorageSizeInGbs = this._recoStorageSizeInGbs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseDbHomeDatabaseStorageSizeDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataStorageSizeInGb = undefined;
      this._recoStorageSizeInGbs = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataStorageSizeInGb = value.dataStorageSizeInGb;
      this._recoStorageSizeInGbs = value.recoStorageSizeInGbs;
    }
  }

  // data_storage_size_in_gb - computed: false, optional: false, required: true
  private _dataStorageSizeInGb?: number; 
  public get dataStorageSizeInGb() {
    return this.getNumberAttribute('data_storage_size_in_gb');
  }
  public set dataStorageSizeInGb(value: number) {
    this._dataStorageSizeInGb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStorageSizeInGbInput() {
    return this._dataStorageSizeInGb;
  }

  // reco_storage_size_in_gbs - computed: false, optional: false, required: true
  private _recoStorageSizeInGbs?: number; 
  public get recoStorageSizeInGbs() {
    return this.getNumberAttribute('reco_storage_size_in_gbs');
  }
  public set recoStorageSizeInGbs(value: number) {
    this._recoStorageSizeInGbs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recoStorageSizeInGbsInput() {
    return this._recoStorageSizeInGbs;
  }

  // redo_log_storage_size_in_gbs - computed: true, optional: false, required: false
  public get redoLogStorageSizeInGbs() {
    return this.getNumberAttribute('redo_log_storage_size_in_gbs');
  }
}
export interface DatabaseDbHomeDatabase {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_db_home#admin_password DatabaseDbHome#admin_password}
  */
  readonly adminPassword: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_db_home#backup_id DatabaseDbHome#backup_id}
  */
  readonly backupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_db_home#backup_tde_password DatabaseDbHome#backup_tde_password}
  */
  readonly backupTdePassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_db_home#character_set DatabaseDbHome#character_set}
  */
  readonly characterSet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_db_home#database_id DatabaseDbHome#database_id}
  */
  readonly databaseId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_db_home#database_software_image_id DatabaseDbHome#database_software_image_id}
  */
  readonly databaseSoftwareImageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_db_home#db_name DatabaseDbHome#db_name}
  */
  readonly dbName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_db_home#db_workload DatabaseDbHome#db_workload}
  */
  readonly dbWorkload?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_db_home#defined_tags DatabaseDbHome#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_db_home#freeform_tags DatabaseDbHome#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_db_home#key_store_id DatabaseDbHome#key_store_id}
  */
  readonly keyStoreId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_db_home#kms_key_id DatabaseDbHome#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_db_home#kms_key_version_id DatabaseDbHome#kms_key_version_id}
  */
  readonly kmsKeyVersionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_db_home#ncharacter_set DatabaseDbHome#ncharacter_set}
  */
  readonly ncharacterSet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_db_home#pdb_name DatabaseDbHome#pdb_name}
  */
  readonly pdbName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_db_home#pluggable_databases DatabaseDbHome#pluggable_databases}
  */
  readonly pluggableDatabases?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_db_home#tde_wallet_password DatabaseDbHome#tde_wallet_password}
  */
  readonly tdeWalletPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_db_home#time_stamp_for_point_in_time_recovery DatabaseDbHome#time_stamp_for_point_in_time_recovery}
  */
  readonly timeStampForPointInTimeRecovery?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_db_home#vault_id DatabaseDbHome#vault_id}
  */
  readonly vaultId?: string;
  /**
  * db_backup_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_db_home#db_backup_config DatabaseDbHome#db_backup_config}
  */
  readonly dbBackupConfig?: DatabaseDbHomeDatabaseDbBackupConfig;
  /**
  * encryption_key_location_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_db_home#encryption_key_location_details DatabaseDbHome#encryption_key_location_details}
  */
  readonly encryptionKeyLocationDetails?: DatabaseDbHomeDatabaseEncryptionKeyLocationDetails;
  /**
  * storage_size_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_db_home#storage_size_details DatabaseDbHome#storage_size_details}
  */
  readonly storageSizeDetails?: DatabaseDbHomeDatabaseStorageSizeDetails;
}

export function databaseDbHomeDatabaseToTerraform(struct?: DatabaseDbHomeDatabaseOutputReference | DatabaseDbHomeDatabase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_password: cdktf.stringToTerraform(struct!.adminPassword),
    backup_id: cdktf.stringToTerraform(struct!.backupId),
    backup_tde_password: cdktf.stringToTerraform(struct!.backupTdePassword),
    character_set: cdktf.stringToTerraform(struct!.characterSet),
    database_id: cdktf.stringToTerraform(struct!.databaseId),
    database_software_image_id: cdktf.stringToTerraform(struct!.databaseSoftwareImageId),
    db_name: cdktf.stringToTerraform(struct!.dbName),
    db_workload: cdktf.stringToTerraform(struct!.dbWorkload),
    defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.definedTags),
    freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.freeformTags),
    key_store_id: cdktf.stringToTerraform(struct!.keyStoreId),
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    kms_key_version_id: cdktf.stringToTerraform(struct!.kmsKeyVersionId),
    ncharacter_set: cdktf.stringToTerraform(struct!.ncharacterSet),
    pdb_name: cdktf.stringToTerraform(struct!.pdbName),
    pluggable_databases: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.pluggableDatabases),
    tde_wallet_password: cdktf.stringToTerraform(struct!.tdeWalletPassword),
    time_stamp_for_point_in_time_recovery: cdktf.stringToTerraform(struct!.timeStampForPointInTimeRecovery),
    vault_id: cdktf.stringToTerraform(struct!.vaultId),
    db_backup_config: databaseDbHomeDatabaseDbBackupConfigToTerraform(struct!.dbBackupConfig),
    encryption_key_location_details: databaseDbHomeDatabaseEncryptionKeyLocationDetailsToTerraform(struct!.encryptionKeyLocationDetails),
    storage_size_details: databaseDbHomeDatabaseStorageSizeDetailsToTerraform(struct!.storageSizeDetails),
  }
}


export function databaseDbHomeDatabaseToHclTerraform(struct?: DatabaseDbHomeDatabaseOutputReference | DatabaseDbHomeDatabase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_password: {
      value: cdktf.stringToHclTerraform(struct!.adminPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backup_id: {
      value: cdktf.stringToHclTerraform(struct!.backupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backup_tde_password: {
      value: cdktf.stringToHclTerraform(struct!.backupTdePassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    character_set: {
      value: cdktf.stringToHclTerraform(struct!.characterSet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_id: {
      value: cdktf.stringToHclTerraform(struct!.databaseId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_software_image_id: {
      value: cdktf.stringToHclTerraform(struct!.databaseSoftwareImageId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db_name: {
      value: cdktf.stringToHclTerraform(struct!.dbName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db_workload: {
      value: cdktf.stringToHclTerraform(struct!.dbWorkload),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    defined_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.definedTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    freeform_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.freeformTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    key_store_id: {
      value: cdktf.stringToHclTerraform(struct!.keyStoreId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_version_id: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyVersionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ncharacter_set: {
      value: cdktf.stringToHclTerraform(struct!.ncharacterSet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pdb_name: {
      value: cdktf.stringToHclTerraform(struct!.pdbName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pluggable_databases: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.pluggableDatabases),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tde_wallet_password: {
      value: cdktf.stringToHclTerraform(struct!.tdeWalletPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_stamp_for_point_in_time_recovery: {
      value: cdktf.stringToHclTerraform(struct!.timeStampForPointInTimeRecovery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vault_id: {
      value: cdktf.stringToHclTerraform(struct!.vaultId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db_backup_config: {
      value: databaseDbHomeDatabaseDbBackupConfigToHclTerraform(struct!.dbBackupConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseDbHomeDatabaseDbBackupConfigList",
    },
    encryption_key_location_details: {
      value: databaseDbHomeDatabaseEncryptionKeyLocationDetailsToHclTerraform(struct!.encryptionKeyLocationDetails),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseDbHomeDatabaseEncryptionKeyLocationDetailsList",
    },
    storage_size_details: {
      value: databaseDbHomeDatabaseStorageSizeDetailsToHclTerraform(struct!.storageSizeDetails),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseDbHomeDatabaseStorageSizeDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseDbHomeDatabaseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseDbHomeDatabase | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminPassword = this._adminPassword;
    }
    if (this._backupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupId = this._backupId;
    }
    if (this._backupTdePassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupTdePassword = this._backupTdePassword;
    }
    if (this._characterSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.characterSet = this._characterSet;
    }
    if (this._databaseId !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseId = this._databaseId;
    }
    if (this._databaseSoftwareImageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseSoftwareImageId = this._databaseSoftwareImageId;
    }
    if (this._dbName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbName = this._dbName;
    }
    if (this._dbWorkload !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbWorkload = this._dbWorkload;
    }
    if (this._definedTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.definedTags = this._definedTags;
    }
    if (this._freeformTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.freeformTags = this._freeformTags;
    }
    if (this._keyStoreId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyStoreId = this._keyStoreId;
    }
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._kmsKeyVersionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyVersionId = this._kmsKeyVersionId;
    }
    if (this._ncharacterSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.ncharacterSet = this._ncharacterSet;
    }
    if (this._pdbName !== undefined) {
      hasAnyValues = true;
      internalValueResult.pdbName = this._pdbName;
    }
    if (this._pluggableDatabases !== undefined) {
      hasAnyValues = true;
      internalValueResult.pluggableDatabases = this._pluggableDatabases;
    }
    if (this._tdeWalletPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.tdeWalletPassword = this._tdeWalletPassword;
    }
    if (this._timeStampForPointInTimeRecovery !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeStampForPointInTimeRecovery = this._timeStampForPointInTimeRecovery;
    }
    if (this._vaultId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultId = this._vaultId;
    }
    if (this._dbBackupConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbBackupConfig = this._dbBackupConfig?.internalValue;
    }
    if (this._encryptionKeyLocationDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionKeyLocationDetails = this._encryptionKeyLocationDetails?.internalValue;
    }
    if (this._storageSizeDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageSizeDetails = this._storageSizeDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseDbHomeDatabase | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adminPassword = undefined;
      this._backupId = undefined;
      this._backupTdePassword = undefined;
      this._characterSet = undefined;
      this._databaseId = undefined;
      this._databaseSoftwareImageId = undefined;
      this._dbName = undefined;
      this._dbWorkload = undefined;
      this._definedTags = undefined;
      this._freeformTags = undefined;
      this._keyStoreId = undefined;
      this._kmsKeyId = undefined;
      this._kmsKeyVersionId = undefined;
      this._ncharacterSet = undefined;
      this._pdbName = undefined;
      this._pluggableDatabases = undefined;
      this._tdeWalletPassword = undefined;
      this._timeStampForPointInTimeRecovery = undefined;
      this._vaultId = undefined;
      this._dbBackupConfig.internalValue = undefined;
      this._encryptionKeyLocationDetails.internalValue = undefined;
      this._storageSizeDetails.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adminPassword = value.adminPassword;
      this._backupId = value.backupId;
      this._backupTdePassword = value.backupTdePassword;
      this._characterSet = value.characterSet;
      this._databaseId = value.databaseId;
      this._databaseSoftwareImageId = value.databaseSoftwareImageId;
      this._dbName = value.dbName;
      this._dbWorkload = value.dbWorkload;
      this._definedTags = value.definedTags;
      this._freeformTags = value.freeformTags;
      this._keyStoreId = value.keyStoreId;
      this._kmsKeyId = value.kmsKeyId;
      this._kmsKeyVersionId = value.kmsKeyVersionId;
      this._ncharacterSet = value.ncharacterSet;
      this._pdbName = value.pdbName;
      this._pluggableDatabases = value.pluggableDatabases;
      this._tdeWalletPassword = value.tdeWalletPassword;
      this._timeStampForPointInTimeRecovery = value.timeStampForPointInTimeRecovery;
      this._vaultId = value.vaultId;
      this._dbBackupConfig.internalValue = value.dbBackupConfig;
      this._encryptionKeyLocationDetails.internalValue = value.encryptionKeyLocationDetails;
      this._storageSizeDetails.internalValue = value.storageSizeDetails;
    }
  }

  // admin_password - computed: false, optional: false, required: true
  private _adminPassword?: string; 
  public get adminPassword() {
    return this.getStringAttribute('admin_password');
  }
  public set adminPassword(value: string) {
    this._adminPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPasswordInput() {
    return this._adminPassword;
  }

  // backup_id - computed: true, optional: true, required: false
  private _backupId?: string; 
  public get backupId() {
    return this.getStringAttribute('backup_id');
  }
  public set backupId(value: string) {
    this._backupId = value;
  }
  public resetBackupId() {
    this._backupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupIdInput() {
    return this._backupId;
  }

  // backup_tde_password - computed: true, optional: true, required: false
  private _backupTdePassword?: string; 
  public get backupTdePassword() {
    return this.getStringAttribute('backup_tde_password');
  }
  public set backupTdePassword(value: string) {
    this._backupTdePassword = value;
  }
  public resetBackupTdePassword() {
    this._backupTdePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupTdePasswordInput() {
    return this._backupTdePassword;
  }

  // character_set - computed: true, optional: true, required: false
  private _characterSet?: string; 
  public get characterSet() {
    return this.getStringAttribute('character_set');
  }
  public set characterSet(value: string) {
    this._characterSet = value;
  }
  public resetCharacterSet() {
    this._characterSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get characterSetInput() {
    return this._characterSet;
  }

  // connection_strings - computed: true, optional: false, required: false
  private _connectionStrings = new DatabaseDbHomeDatabaseConnectionStringsList(this, "connection_strings", false);
  public get connectionStrings() {
    return this._connectionStrings;
  }

  // database_id - computed: true, optional: true, required: false
  private _databaseId?: string; 
  public get databaseId() {
    return this.getStringAttribute('database_id');
  }
  public set databaseId(value: string) {
    this._databaseId = value;
  }
  public resetDatabaseId() {
    this._databaseId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseIdInput() {
    return this._databaseId;
  }

  // database_software_image_id - computed: true, optional: true, required: false
  private _databaseSoftwareImageId?: string; 
  public get databaseSoftwareImageId() {
    return this.getStringAttribute('database_software_image_id');
  }
  public set databaseSoftwareImageId(value: string) {
    this._databaseSoftwareImageId = value;
  }
  public resetDatabaseSoftwareImageId() {
    this._databaseSoftwareImageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseSoftwareImageIdInput() {
    return this._databaseSoftwareImageId;
  }

  // db_name - computed: true, optional: true, required: false
  private _dbName?: string; 
  public get dbName() {
    return this.getStringAttribute('db_name');
  }
  public set dbName(value: string) {
    this._dbName = value;
  }
  public resetDbName() {
    this._dbName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbNameInput() {
    return this._dbName;
  }

  // db_unique_name - computed: true, optional: false, required: false
  public get dbUniqueName() {
    return this.getStringAttribute('db_unique_name');
  }

  // db_workload - computed: true, optional: true, required: false
  private _dbWorkload?: string; 
  public get dbWorkload() {
    return this.getStringAttribute('db_workload');
  }
  public set dbWorkload(value: string) {
    this._dbWorkload = value;
  }
  public resetDbWorkload() {
    this._dbWorkload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbWorkloadInput() {
    return this._dbWorkload;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_store_id - computed: true, optional: true, required: false
  private _keyStoreId?: string; 
  public get keyStoreId() {
    return this.getStringAttribute('key_store_id');
  }
  public set keyStoreId(value: string) {
    this._keyStoreId = value;
  }
  public resetKeyStoreId() {
    this._keyStoreId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyStoreIdInput() {
    return this._keyStoreId;
  }

  // kms_key_id - computed: false, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // kms_key_version_id - computed: false, optional: true, required: false
  private _kmsKeyVersionId?: string; 
  public get kmsKeyVersionId() {
    return this.getStringAttribute('kms_key_version_id');
  }
  public set kmsKeyVersionId(value: string) {
    this._kmsKeyVersionId = value;
  }
  public resetKmsKeyVersionId() {
    this._kmsKeyVersionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyVersionIdInput() {
    return this._kmsKeyVersionId;
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // ncharacter_set - computed: true, optional: true, required: false
  private _ncharacterSet?: string; 
  public get ncharacterSet() {
    return this.getStringAttribute('ncharacter_set');
  }
  public set ncharacterSet(value: string) {
    this._ncharacterSet = value;
  }
  public resetNcharacterSet() {
    this._ncharacterSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ncharacterSetInput() {
    return this._ncharacterSet;
  }

  // one_off_patches - computed: true, optional: false, required: false
  public get oneOffPatches() {
    return this.getListAttribute('one_off_patches');
  }

  // pdb_name - computed: true, optional: true, required: false
  private _pdbName?: string; 
  public get pdbName() {
    return this.getStringAttribute('pdb_name');
  }
  public set pdbName(value: string) {
    this._pdbName = value;
  }
  public resetPdbName() {
    this._pdbName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pdbNameInput() {
    return this._pdbName;
  }

  // pluggable_databases - computed: true, optional: true, required: false
  private _pluggableDatabases?: string[]; 
  public get pluggableDatabases() {
    return this.getListAttribute('pluggable_databases');
  }
  public set pluggableDatabases(value: string[]) {
    this._pluggableDatabases = value;
  }
  public resetPluggableDatabases() {
    this._pluggableDatabases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluggableDatabasesInput() {
    return this._pluggableDatabases;
  }

  // sid_prefix - computed: true, optional: false, required: false
  public get sidPrefix() {
    return this.getStringAttribute('sid_prefix');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // tde_wallet_password - computed: true, optional: true, required: false
  private _tdeWalletPassword?: string; 
  public get tdeWalletPassword() {
    return this.getStringAttribute('tde_wallet_password');
  }
  public set tdeWalletPassword(value: string) {
    this._tdeWalletPassword = value;
  }
  public resetTdeWalletPassword() {
    this._tdeWalletPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tdeWalletPasswordInput() {
    return this._tdeWalletPassword;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_stamp_for_point_in_time_recovery - computed: true, optional: true, required: false
  private _timeStampForPointInTimeRecovery?: string; 
  public get timeStampForPointInTimeRecovery() {
    return this.getStringAttribute('time_stamp_for_point_in_time_recovery');
  }
  public set timeStampForPointInTimeRecovery(value: string) {
    this._timeStampForPointInTimeRecovery = value;
  }
  public resetTimeStampForPointInTimeRecovery() {
    this._timeStampForPointInTimeRecovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeStampForPointInTimeRecoveryInput() {
    return this._timeStampForPointInTimeRecovery;
  }

  // vault_id - computed: true, optional: true, required: false
  private _vaultId?: string; 
  public get vaultId() {
    return this.getStringAttribute('vault_id');
  }
  public set vaultId(value: string) {
    this._vaultId = value;
  }
  public resetVaultId() {
    this._vaultId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultIdInput() {
    return this._vaultId;
  }

  // db_backup_config - computed: false, optional: true, required: false
  private _dbBackupConfig = new DatabaseDbHomeDatabaseDbBackupConfigOutputReference(this, "db_backup_config");
  public get dbBackupConfig() {
    return this._dbBackupConfig;
  }
  public putDbBackupConfig(value: DatabaseDbHomeDatabaseDbBackupConfig) {
    this._dbBackupConfig.internalValue = value;
  }
  public resetDbBackupConfig() {
    this._dbBackupConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbBackupConfigInput() {
    return this._dbBackupConfig.internalValue;
  }

  // encryption_key_location_details - computed: false, optional: true, required: false
  private _encryptionKeyLocationDetails = new DatabaseDbHomeDatabaseEncryptionKeyLocationDetailsOutputReference(this, "encryption_key_location_details");
  public get encryptionKeyLocationDetails() {
    return this._encryptionKeyLocationDetails;
  }
  public putEncryptionKeyLocationDetails(value: DatabaseDbHomeDatabaseEncryptionKeyLocationDetails) {
    this._encryptionKeyLocationDetails.internalValue = value;
  }
  public resetEncryptionKeyLocationDetails() {
    this._encryptionKeyLocationDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyLocationDetailsInput() {
    return this._encryptionKeyLocationDetails.internalValue;
  }

  // storage_size_details - computed: false, optional: true, required: false
  private _storageSizeDetails = new DatabaseDbHomeDatabaseStorageSizeDetailsOutputReference(this, "storage_size_details");
  public get storageSizeDetails() {
    return this._storageSizeDetails;
  }
  public putStorageSizeDetails(value: DatabaseDbHomeDatabaseStorageSizeDetails) {
    this._storageSizeDetails.internalValue = value;
  }
  public resetStorageSizeDetails() {
    this._storageSizeDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageSizeDetailsInput() {
    return this._storageSizeDetails.internalValue;
  }
}
export interface DatabaseDbHomeTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_db_home#create DatabaseDbHome#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_db_home#delete DatabaseDbHome#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_db_home#update DatabaseDbHome#update}
  */
  readonly update?: string;
}

export function databaseDbHomeTimeoutsToTerraform(struct?: DatabaseDbHomeTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function databaseDbHomeTimeoutsToHclTerraform(struct?: DatabaseDbHomeTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseDbHomeTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabaseDbHomeTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseDbHomeTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_db_home oci_database_db_home}
*/
export class DatabaseDbHome extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_db_home";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatabaseDbHome resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatabaseDbHome to import
  * @param importFromId The id of the existing DatabaseDbHome that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_db_home#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatabaseDbHome to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_db_home", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_db_home oci_database_db_home} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabaseDbHomeConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DatabaseDbHomeConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'oci_database_db_home',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._databaseSoftwareImageId = config.databaseSoftwareImageId;
    this._dbSystemId = config.dbSystemId;
    this._dbVersion = config.dbVersion;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._enableDatabaseDelete = config.enableDatabaseDelete;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._isDesupportedVersion = config.isDesupportedVersion;
    this._isUnifiedAuditingEnabled = config.isUnifiedAuditingEnabled;
    this._kmsKeyId = config.kmsKeyId;
    this._kmsKeyVersionId = config.kmsKeyVersionId;
    this._source = config.source;
    this._vmClusterId = config.vmClusterId;
    this._database.internalValue = config.database;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // database_software_image_id - computed: true, optional: true, required: false
  private _databaseSoftwareImageId?: string; 
  public get databaseSoftwareImageId() {
    return this.getStringAttribute('database_software_image_id');
  }
  public set databaseSoftwareImageId(value: string) {
    this._databaseSoftwareImageId = value;
  }
  public resetDatabaseSoftwareImageId() {
    this._databaseSoftwareImageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseSoftwareImageIdInput() {
    return this._databaseSoftwareImageId;
  }

  // db_home_location - computed: true, optional: false, required: false
  public get dbHomeLocation() {
    return this.getStringAttribute('db_home_location');
  }

  // db_system_id - computed: true, optional: true, required: false
  private _dbSystemId?: string; 
  public get dbSystemId() {
    return this.getStringAttribute('db_system_id');
  }
  public set dbSystemId(value: string) {
    this._dbSystemId = value;
  }
  public resetDbSystemId() {
    this._dbSystemId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbSystemIdInput() {
    return this._dbSystemId;
  }

  // db_version - computed: true, optional: true, required: false
  private _dbVersion?: string; 
  public get dbVersion() {
    return this.getStringAttribute('db_version');
  }
  public set dbVersion(value: string) {
    this._dbVersion = value;
  }
  public resetDbVersion() {
    this._dbVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbVersionInput() {
    return this._dbVersion;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // enable_database_delete - computed: false, optional: true, required: false
  private _enableDatabaseDelete?: boolean | cdktf.IResolvable; 
  public get enableDatabaseDelete() {
    return this.getBooleanAttribute('enable_database_delete');
  }
  public set enableDatabaseDelete(value: boolean | cdktf.IResolvable) {
    this._enableDatabaseDelete = value;
  }
  public resetEnableDatabaseDelete() {
    this._enableDatabaseDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDatabaseDeleteInput() {
    return this._enableDatabaseDelete;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // is_desupported_version - computed: true, optional: true, required: false
  private _isDesupportedVersion?: boolean | cdktf.IResolvable; 
  public get isDesupportedVersion() {
    return this.getBooleanAttribute('is_desupported_version');
  }
  public set isDesupportedVersion(value: boolean | cdktf.IResolvable) {
    this._isDesupportedVersion = value;
  }
  public resetIsDesupportedVersion() {
    this._isDesupportedVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDesupportedVersionInput() {
    return this._isDesupportedVersion;
  }

  // is_unified_auditing_enabled - computed: true, optional: true, required: false
  private _isUnifiedAuditingEnabled?: boolean | cdktf.IResolvable; 
  public get isUnifiedAuditingEnabled() {
    return this.getBooleanAttribute('is_unified_auditing_enabled');
  }
  public set isUnifiedAuditingEnabled(value: boolean | cdktf.IResolvable) {
    this._isUnifiedAuditingEnabled = value;
  }
  public resetIsUnifiedAuditingEnabled() {
    this._isUnifiedAuditingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isUnifiedAuditingEnabledInput() {
    return this._isUnifiedAuditingEnabled;
  }

  // kms_key_id - computed: true, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // kms_key_version_id - computed: true, optional: true, required: false
  private _kmsKeyVersionId?: string; 
  public get kmsKeyVersionId() {
    return this.getStringAttribute('kms_key_version_id');
  }
  public set kmsKeyVersionId(value: string) {
    this._kmsKeyVersionId = value;
  }
  public resetKmsKeyVersionId() {
    this._kmsKeyVersionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyVersionIdInput() {
    return this._kmsKeyVersionId;
  }

  // last_patch_history_entry_id - computed: true, optional: false, required: false
  public get lastPatchHistoryEntryId() {
    return this.getStringAttribute('last_patch_history_entry_id');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // source - computed: true, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // vm_cluster_id - computed: true, optional: true, required: false
  private _vmClusterId?: string; 
  public get vmClusterId() {
    return this.getStringAttribute('vm_cluster_id');
  }
  public set vmClusterId(value: string) {
    this._vmClusterId = value;
  }
  public resetVmClusterId() {
    this._vmClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmClusterIdInput() {
    return this._vmClusterId;
  }

  // database - computed: false, optional: true, required: false
  private _database = new DatabaseDbHomeDatabaseOutputReference(this, "database");
  public get database() {
    return this._database;
  }
  public putDatabase(value: DatabaseDbHomeDatabase) {
    this._database.internalValue = value;
  }
  public resetDatabase() {
    this._database.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DatabaseDbHomeTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DatabaseDbHomeTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      database_software_image_id: cdktf.stringToTerraform(this._databaseSoftwareImageId),
      db_system_id: cdktf.stringToTerraform(this._dbSystemId),
      db_version: cdktf.stringToTerraform(this._dbVersion),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      display_name: cdktf.stringToTerraform(this._displayName),
      enable_database_delete: cdktf.booleanToTerraform(this._enableDatabaseDelete),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      is_desupported_version: cdktf.booleanToTerraform(this._isDesupportedVersion),
      is_unified_auditing_enabled: cdktf.booleanToTerraform(this._isUnifiedAuditingEnabled),
      kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
      kms_key_version_id: cdktf.stringToTerraform(this._kmsKeyVersionId),
      source: cdktf.stringToTerraform(this._source),
      vm_cluster_id: cdktf.stringToTerraform(this._vmClusterId),
      database: databaseDbHomeDatabaseToTerraform(this._database.internalValue),
      timeouts: databaseDbHomeTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      database_software_image_id: {
        value: cdktf.stringToHclTerraform(this._databaseSoftwareImageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_system_id: {
        value: cdktf.stringToHclTerraform(this._dbSystemId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_version: {
        value: cdktf.stringToHclTerraform(this._dbVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_database_delete: {
        value: cdktf.booleanToHclTerraform(this._enableDatabaseDelete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_desupported_version: {
        value: cdktf.booleanToHclTerraform(this._isDesupportedVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_unified_auditing_enabled: {
        value: cdktf.booleanToHclTerraform(this._isUnifiedAuditingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      kms_key_id: {
        value: cdktf.stringToHclTerraform(this._kmsKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kms_key_version_id: {
        value: cdktf.stringToHclTerraform(this._kmsKeyVersionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source: {
        value: cdktf.stringToHclTerraform(this._source),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vm_cluster_id: {
        value: cdktf.stringToHclTerraform(this._vmClusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database: {
        value: databaseDbHomeDatabaseToHclTerraform(this._database.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseDbHomeDatabaseList",
      },
      timeouts: {
        value: databaseDbHomeTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatabaseDbHomeTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
