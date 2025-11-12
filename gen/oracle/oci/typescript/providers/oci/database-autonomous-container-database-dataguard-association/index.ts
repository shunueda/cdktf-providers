// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_autonomous_container_database_dataguard_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabaseAutonomousContainerDatabaseDataguardAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_autonomous_container_database_dataguard_association#autonomous_container_database_dataguard_association_id DatabaseAutonomousContainerDatabaseDataguardAssociation#autonomous_container_database_dataguard_association_id}
  */
  readonly autonomousContainerDatabaseDataguardAssociationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_autonomous_container_database_dataguard_association#autonomous_container_database_id DatabaseAutonomousContainerDatabaseDataguardAssociation#autonomous_container_database_id}
  */
  readonly autonomousContainerDatabaseId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_autonomous_container_database_dataguard_association#fast_start_fail_over_lag_limit_in_seconds DatabaseAutonomousContainerDatabaseDataguardAssociation#fast_start_fail_over_lag_limit_in_seconds}
  */
  readonly fastStartFailOverLagLimitInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_autonomous_container_database_dataguard_association#id DatabaseAutonomousContainerDatabaseDataguardAssociation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_autonomous_container_database_dataguard_association#is_automatic_failover_enabled DatabaseAutonomousContainerDatabaseDataguardAssociation#is_automatic_failover_enabled}
  */
  readonly isAutomaticFailoverEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_autonomous_container_database_dataguard_association#migrate_trigger DatabaseAutonomousContainerDatabaseDataguardAssociation#migrate_trigger}
  */
  readonly migrateTrigger?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_autonomous_container_database_dataguard_association#peer_autonomous_container_database_compartment_id DatabaseAutonomousContainerDatabaseDataguardAssociation#peer_autonomous_container_database_compartment_id}
  */
  readonly peerAutonomousContainerDatabaseCompartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_autonomous_container_database_dataguard_association#peer_autonomous_container_database_display_name DatabaseAutonomousContainerDatabaseDataguardAssociation#peer_autonomous_container_database_display_name}
  */
  readonly peerAutonomousContainerDatabaseDisplayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_autonomous_container_database_dataguard_association#peer_autonomous_vm_cluster_id DatabaseAutonomousContainerDatabaseDataguardAssociation#peer_autonomous_vm_cluster_id}
  */
  readonly peerAutonomousVmClusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_autonomous_container_database_dataguard_association#peer_cloud_autonomous_vm_cluster_id DatabaseAutonomousContainerDatabaseDataguardAssociation#peer_cloud_autonomous_vm_cluster_id}
  */
  readonly peerCloudAutonomousVmClusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_autonomous_container_database_dataguard_association#peer_db_unique_name DatabaseAutonomousContainerDatabaseDataguardAssociation#peer_db_unique_name}
  */
  readonly peerDbUniqueName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_autonomous_container_database_dataguard_association#protection_mode DatabaseAutonomousContainerDatabaseDataguardAssociation#protection_mode}
  */
  readonly protectionMode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_autonomous_container_database_dataguard_association#standby_maintenance_buffer_in_days DatabaseAutonomousContainerDatabaseDataguardAssociation#standby_maintenance_buffer_in_days}
  */
  readonly standbyMaintenanceBufferInDays?: number;
  /**
  * peer_autonomous_container_database_backup_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_autonomous_container_database_dataguard_association#peer_autonomous_container_database_backup_config DatabaseAutonomousContainerDatabaseDataguardAssociation#peer_autonomous_container_database_backup_config}
  */
  readonly peerAutonomousContainerDatabaseBackupConfig?: DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_autonomous_container_database_dataguard_association#timeouts DatabaseAutonomousContainerDatabaseDataguardAssociation#timeouts}
  */
  readonly timeouts?: DatabaseAutonomousContainerDatabaseDataguardAssociationTimeouts;
}
export interface DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_autonomous_container_database_dataguard_association#backup_retention_policy_on_terminate DatabaseAutonomousContainerDatabaseDataguardAssociation#backup_retention_policy_on_terminate}
  */
  readonly backupRetentionPolicyOnTerminate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_autonomous_container_database_dataguard_association#dbrs_policy_id DatabaseAutonomousContainerDatabaseDataguardAssociation#dbrs_policy_id}
  */
  readonly dbrsPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_autonomous_container_database_dataguard_association#id DatabaseAutonomousContainerDatabaseDataguardAssociation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_autonomous_container_database_dataguard_association#internet_proxy DatabaseAutonomousContainerDatabaseDataguardAssociation#internet_proxy}
  */
  readonly internetProxy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_autonomous_container_database_dataguard_association#is_remote DatabaseAutonomousContainerDatabaseDataguardAssociation#is_remote}
  */
  readonly isRemote?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_autonomous_container_database_dataguard_association#is_retention_lock_enabled DatabaseAutonomousContainerDatabaseDataguardAssociation#is_retention_lock_enabled}
  */
  readonly isRetentionLockEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_autonomous_container_database_dataguard_association#remote_region DatabaseAutonomousContainerDatabaseDataguardAssociation#remote_region}
  */
  readonly remoteRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_autonomous_container_database_dataguard_association#type DatabaseAutonomousContainerDatabaseDataguardAssociation#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_autonomous_container_database_dataguard_association#vpc_password DatabaseAutonomousContainerDatabaseDataguardAssociation#vpc_password}
  */
  readonly vpcPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_autonomous_container_database_dataguard_association#vpc_user DatabaseAutonomousContainerDatabaseDataguardAssociation#vpc_user}
  */
  readonly vpcUser?: string;
}

export function databaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsToTerraform(struct?: DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_retention_policy_on_terminate: cdktf.stringToTerraform(struct!.backupRetentionPolicyOnTerminate),
    dbrs_policy_id: cdktf.stringToTerraform(struct!.dbrsPolicyId),
    id: cdktf.stringToTerraform(struct!.id),
    internet_proxy: cdktf.stringToTerraform(struct!.internetProxy),
    is_remote: cdktf.booleanToTerraform(struct!.isRemote),
    is_retention_lock_enabled: cdktf.booleanToTerraform(struct!.isRetentionLockEnabled),
    remote_region: cdktf.stringToTerraform(struct!.remoteRegion),
    type: cdktf.stringToTerraform(struct!.type),
    vpc_password: cdktf.stringToTerraform(struct!.vpcPassword),
    vpc_user: cdktf.stringToTerraform(struct!.vpcUser),
  }
}


export function databaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsToHclTerraform(struct?: DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails | cdktf.IResolvable): any {
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
    internet_proxy: {
      value: cdktf.stringToHclTerraform(struct!.internetProxy),
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

export class DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails | cdktf.IResolvable | undefined {
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
    if (this._internetProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.internetProxy = this._internetProxy;
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

  public set internalValue(value: DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backupRetentionPolicyOnTerminate = undefined;
      this._dbrsPolicyId = undefined;
      this._id = undefined;
      this._internetProxy = undefined;
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
      this._internetProxy = value.internetProxy;
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

  // internet_proxy - computed: true, optional: true, required: false
  private _internetProxy?: string; 
  public get internetProxy() {
    return this.getStringAttribute('internet_proxy');
  }
  public set internetProxy(value: string) {
    this._internetProxy = value;
  }
  public resetInternetProxy() {
    this._internetProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetProxyInput() {
    return this._internetProxy;
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

  // vpc_password - computed: true, optional: true, required: false
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

  // vpc_user - computed: true, optional: true, required: false
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

export class DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList extends cdktf.ComplexList {
  public internalValue? : DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails[] | cdktf.IResolvable

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
  public get(index: number): DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference {
    return new DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_autonomous_container_database_dataguard_association#recovery_window_in_days DatabaseAutonomousContainerDatabaseDataguardAssociation#recovery_window_in_days}
  */
  readonly recoveryWindowInDays?: number;
  /**
  * backup_destination_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_autonomous_container_database_dataguard_association#backup_destination_details DatabaseAutonomousContainerDatabaseDataguardAssociation#backup_destination_details}
  */
  readonly backupDestinationDetails?: DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails[] | cdktf.IResolvable;
}

export function databaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigToTerraform(struct?: DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference | DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    recovery_window_in_days: cdktf.numberToTerraform(struct!.recoveryWindowInDays),
    backup_destination_details: cdktf.listMapper(databaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsToTerraform, true)(struct!.backupDestinationDetails),
  }
}


export function databaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigToHclTerraform(struct?: DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference | DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    recovery_window_in_days: {
      value: cdktf.numberToHclTerraform(struct!.recoveryWindowInDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    backup_destination_details: {
      value: cdktf.listMapperHcl(databaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsToHclTerraform, true)(struct!.backupDestinationDetails),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recoveryWindowInDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.recoveryWindowInDays = this._recoveryWindowInDays;
    }
    if (this._backupDestinationDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupDestinationDetails = this._backupDestinationDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._recoveryWindowInDays = undefined;
      this._backupDestinationDetails.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._recoveryWindowInDays = value.recoveryWindowInDays;
      this._backupDestinationDetails.internalValue = value.backupDestinationDetails;
    }
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

  // backup_destination_details - computed: false, optional: true, required: false
  private _backupDestinationDetails = new DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList(this, "backup_destination_details", false);
  public get backupDestinationDetails() {
    return this._backupDestinationDetails;
  }
  public putBackupDestinationDetails(value: DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails[] | cdktf.IResolvable) {
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
export interface DatabaseAutonomousContainerDatabaseDataguardAssociationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_autonomous_container_database_dataguard_association#create DatabaseAutonomousContainerDatabaseDataguardAssociation#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_autonomous_container_database_dataguard_association#delete DatabaseAutonomousContainerDatabaseDataguardAssociation#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_autonomous_container_database_dataguard_association#update DatabaseAutonomousContainerDatabaseDataguardAssociation#update}
  */
  readonly update?: string;
}

export function databaseAutonomousContainerDatabaseDataguardAssociationTimeoutsToTerraform(struct?: DatabaseAutonomousContainerDatabaseDataguardAssociationTimeouts | cdktf.IResolvable): any {
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


export function databaseAutonomousContainerDatabaseDataguardAssociationTimeoutsToHclTerraform(struct?: DatabaseAutonomousContainerDatabaseDataguardAssociationTimeouts | cdktf.IResolvable): any {
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

export class DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabaseAutonomousContainerDatabaseDataguardAssociationTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DatabaseAutonomousContainerDatabaseDataguardAssociationTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_autonomous_container_database_dataguard_association oci_database_autonomous_container_database_dataguard_association}
*/
export class DatabaseAutonomousContainerDatabaseDataguardAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_autonomous_container_database_dataguard_association";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatabaseAutonomousContainerDatabaseDataguardAssociation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatabaseAutonomousContainerDatabaseDataguardAssociation to import
  * @param importFromId The id of the existing DatabaseAutonomousContainerDatabaseDataguardAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_autonomous_container_database_dataguard_association#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatabaseAutonomousContainerDatabaseDataguardAssociation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_autonomous_container_database_dataguard_association", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_autonomous_container_database_dataguard_association oci_database_autonomous_container_database_dataguard_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabaseAutonomousContainerDatabaseDataguardAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: DatabaseAutonomousContainerDatabaseDataguardAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_autonomous_container_database_dataguard_association',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0',
        providerVersionConstraint: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autonomousContainerDatabaseDataguardAssociationId = config.autonomousContainerDatabaseDataguardAssociationId;
    this._autonomousContainerDatabaseId = config.autonomousContainerDatabaseId;
    this._fastStartFailOverLagLimitInSeconds = config.fastStartFailOverLagLimitInSeconds;
    this._id = config.id;
    this._isAutomaticFailoverEnabled = config.isAutomaticFailoverEnabled;
    this._migrateTrigger = config.migrateTrigger;
    this._peerAutonomousContainerDatabaseCompartmentId = config.peerAutonomousContainerDatabaseCompartmentId;
    this._peerAutonomousContainerDatabaseDisplayName = config.peerAutonomousContainerDatabaseDisplayName;
    this._peerAutonomousVmClusterId = config.peerAutonomousVmClusterId;
    this._peerCloudAutonomousVmClusterId = config.peerCloudAutonomousVmClusterId;
    this._peerDbUniqueName = config.peerDbUniqueName;
    this._protectionMode = config.protectionMode;
    this._standbyMaintenanceBufferInDays = config.standbyMaintenanceBufferInDays;
    this._peerAutonomousContainerDatabaseBackupConfig.internalValue = config.peerAutonomousContainerDatabaseBackupConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apply_lag - computed: true, optional: false, required: false
  public get applyLag() {
    return this.getStringAttribute('apply_lag');
  }

  // apply_rate - computed: true, optional: false, required: false
  public get applyRate() {
    return this.getStringAttribute('apply_rate');
  }

  // autonomous_container_database_dataguard_association_id - computed: true, optional: true, required: false
  private _autonomousContainerDatabaseDataguardAssociationId?: string; 
  public get autonomousContainerDatabaseDataguardAssociationId() {
    return this.getStringAttribute('autonomous_container_database_dataguard_association_id');
  }
  public set autonomousContainerDatabaseDataguardAssociationId(value: string) {
    this._autonomousContainerDatabaseDataguardAssociationId = value;
  }
  public resetAutonomousContainerDatabaseDataguardAssociationId() {
    this._autonomousContainerDatabaseDataguardAssociationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autonomousContainerDatabaseDataguardAssociationIdInput() {
    return this._autonomousContainerDatabaseDataguardAssociationId;
  }

  // autonomous_container_database_id - computed: false, optional: false, required: true
  private _autonomousContainerDatabaseId?: string; 
  public get autonomousContainerDatabaseId() {
    return this.getStringAttribute('autonomous_container_database_id');
  }
  public set autonomousContainerDatabaseId(value: string) {
    this._autonomousContainerDatabaseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autonomousContainerDatabaseIdInput() {
    return this._autonomousContainerDatabaseId;
  }

  // fast_start_fail_over_lag_limit_in_seconds - computed: true, optional: true, required: false
  private _fastStartFailOverLagLimitInSeconds?: number; 
  public get fastStartFailOverLagLimitInSeconds() {
    return this.getNumberAttribute('fast_start_fail_over_lag_limit_in_seconds');
  }
  public set fastStartFailOverLagLimitInSeconds(value: number) {
    this._fastStartFailOverLagLimitInSeconds = value;
  }
  public resetFastStartFailOverLagLimitInSeconds() {
    this._fastStartFailOverLagLimitInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastStartFailOverLagLimitInSecondsInput() {
    return this._fastStartFailOverLagLimitInSeconds;
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

  // is_automatic_failover_enabled - computed: true, optional: true, required: false
  private _isAutomaticFailoverEnabled?: boolean | cdktf.IResolvable; 
  public get isAutomaticFailoverEnabled() {
    return this.getBooleanAttribute('is_automatic_failover_enabled');
  }
  public set isAutomaticFailoverEnabled(value: boolean | cdktf.IResolvable) {
    this._isAutomaticFailoverEnabled = value;
  }
  public resetIsAutomaticFailoverEnabled() {
    this._isAutomaticFailoverEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAutomaticFailoverEnabledInput() {
    return this._isAutomaticFailoverEnabled;
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // migrate_trigger - computed: false, optional: true, required: false
  private _migrateTrigger?: number; 
  public get migrateTrigger() {
    return this.getNumberAttribute('migrate_trigger');
  }
  public set migrateTrigger(value: number) {
    this._migrateTrigger = value;
  }
  public resetMigrateTrigger() {
    this._migrateTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get migrateTriggerInput() {
    return this._migrateTrigger;
  }

  // peer_autonomous_container_database_compartment_id - computed: true, optional: true, required: false
  private _peerAutonomousContainerDatabaseCompartmentId?: string; 
  public get peerAutonomousContainerDatabaseCompartmentId() {
    return this.getStringAttribute('peer_autonomous_container_database_compartment_id');
  }
  public set peerAutonomousContainerDatabaseCompartmentId(value: string) {
    this._peerAutonomousContainerDatabaseCompartmentId = value;
  }
  public resetPeerAutonomousContainerDatabaseCompartmentId() {
    this._peerAutonomousContainerDatabaseCompartmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerAutonomousContainerDatabaseCompartmentIdInput() {
    return this._peerAutonomousContainerDatabaseCompartmentId;
  }

  // peer_autonomous_container_database_dataguard_association_id - computed: true, optional: false, required: false
  public get peerAutonomousContainerDatabaseDataguardAssociationId() {
    return this.getStringAttribute('peer_autonomous_container_database_dataguard_association_id');
  }

  // peer_autonomous_container_database_display_name - computed: false, optional: false, required: true
  private _peerAutonomousContainerDatabaseDisplayName?: string; 
  public get peerAutonomousContainerDatabaseDisplayName() {
    return this.getStringAttribute('peer_autonomous_container_database_display_name');
  }
  public set peerAutonomousContainerDatabaseDisplayName(value: string) {
    this._peerAutonomousContainerDatabaseDisplayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerAutonomousContainerDatabaseDisplayNameInput() {
    return this._peerAutonomousContainerDatabaseDisplayName;
  }

  // peer_autonomous_container_database_id - computed: true, optional: false, required: false
  public get peerAutonomousContainerDatabaseId() {
    return this.getStringAttribute('peer_autonomous_container_database_id');
  }

  // peer_autonomous_vm_cluster_id - computed: true, optional: true, required: false
  private _peerAutonomousVmClusterId?: string; 
  public get peerAutonomousVmClusterId() {
    return this.getStringAttribute('peer_autonomous_vm_cluster_id');
  }
  public set peerAutonomousVmClusterId(value: string) {
    this._peerAutonomousVmClusterId = value;
  }
  public resetPeerAutonomousVmClusterId() {
    this._peerAutonomousVmClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerAutonomousVmClusterIdInput() {
    return this._peerAutonomousVmClusterId;
  }

  // peer_cloud_autonomous_vm_cluster_id - computed: true, optional: true, required: false
  private _peerCloudAutonomousVmClusterId?: string; 
  public get peerCloudAutonomousVmClusterId() {
    return this.getStringAttribute('peer_cloud_autonomous_vm_cluster_id');
  }
  public set peerCloudAutonomousVmClusterId(value: string) {
    this._peerCloudAutonomousVmClusterId = value;
  }
  public resetPeerCloudAutonomousVmClusterId() {
    this._peerCloudAutonomousVmClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerCloudAutonomousVmClusterIdInput() {
    return this._peerCloudAutonomousVmClusterId;
  }

  // peer_db_unique_name - computed: true, optional: true, required: false
  private _peerDbUniqueName?: string; 
  public get peerDbUniqueName() {
    return this.getStringAttribute('peer_db_unique_name');
  }
  public set peerDbUniqueName(value: string) {
    this._peerDbUniqueName = value;
  }
  public resetPeerDbUniqueName() {
    this._peerDbUniqueName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerDbUniqueNameInput() {
    return this._peerDbUniqueName;
  }

  // peer_lifecycle_state - computed: true, optional: false, required: false
  public get peerLifecycleState() {
    return this.getStringAttribute('peer_lifecycle_state');
  }

  // peer_role - computed: true, optional: false, required: false
  public get peerRole() {
    return this.getStringAttribute('peer_role');
  }

  // protection_mode - computed: false, optional: false, required: true
  private _protectionMode?: string; 
  public get protectionMode() {
    return this.getStringAttribute('protection_mode');
  }
  public set protectionMode(value: string) {
    this._protectionMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionModeInput() {
    return this._protectionMode;
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // standby_maintenance_buffer_in_days - computed: true, optional: true, required: false
  private _standbyMaintenanceBufferInDays?: number; 
  public get standbyMaintenanceBufferInDays() {
    return this.getNumberAttribute('standby_maintenance_buffer_in_days');
  }
  public set standbyMaintenanceBufferInDays(value: number) {
    this._standbyMaintenanceBufferInDays = value;
  }
  public resetStandbyMaintenanceBufferInDays() {
    this._standbyMaintenanceBufferInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standbyMaintenanceBufferInDaysInput() {
    return this._standbyMaintenanceBufferInDays;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_last_role_changed - computed: true, optional: false, required: false
  public get timeLastRoleChanged() {
    return this.getStringAttribute('time_last_role_changed');
  }

  // time_last_synced - computed: true, optional: false, required: false
  public get timeLastSynced() {
    return this.getStringAttribute('time_last_synced');
  }

  // transport_lag - computed: true, optional: false, required: false
  public get transportLag() {
    return this.getStringAttribute('transport_lag');
  }

  // peer_autonomous_container_database_backup_config - computed: false, optional: true, required: false
  private _peerAutonomousContainerDatabaseBackupConfig = new DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference(this, "peer_autonomous_container_database_backup_config");
  public get peerAutonomousContainerDatabaseBackupConfig() {
    return this._peerAutonomousContainerDatabaseBackupConfig;
  }
  public putPeerAutonomousContainerDatabaseBackupConfig(value: DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig) {
    this._peerAutonomousContainerDatabaseBackupConfig.internalValue = value;
  }
  public resetPeerAutonomousContainerDatabaseBackupConfig() {
    this._peerAutonomousContainerDatabaseBackupConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerAutonomousContainerDatabaseBackupConfigInput() {
    return this._peerAutonomousContainerDatabaseBackupConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DatabaseAutonomousContainerDatabaseDataguardAssociationTimeouts) {
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
      autonomous_container_database_dataguard_association_id: cdktf.stringToTerraform(this._autonomousContainerDatabaseDataguardAssociationId),
      autonomous_container_database_id: cdktf.stringToTerraform(this._autonomousContainerDatabaseId),
      fast_start_fail_over_lag_limit_in_seconds: cdktf.numberToTerraform(this._fastStartFailOverLagLimitInSeconds),
      id: cdktf.stringToTerraform(this._id),
      is_automatic_failover_enabled: cdktf.booleanToTerraform(this._isAutomaticFailoverEnabled),
      migrate_trigger: cdktf.numberToTerraform(this._migrateTrigger),
      peer_autonomous_container_database_compartment_id: cdktf.stringToTerraform(this._peerAutonomousContainerDatabaseCompartmentId),
      peer_autonomous_container_database_display_name: cdktf.stringToTerraform(this._peerAutonomousContainerDatabaseDisplayName),
      peer_autonomous_vm_cluster_id: cdktf.stringToTerraform(this._peerAutonomousVmClusterId),
      peer_cloud_autonomous_vm_cluster_id: cdktf.stringToTerraform(this._peerCloudAutonomousVmClusterId),
      peer_db_unique_name: cdktf.stringToTerraform(this._peerDbUniqueName),
      protection_mode: cdktf.stringToTerraform(this._protectionMode),
      standby_maintenance_buffer_in_days: cdktf.numberToTerraform(this._standbyMaintenanceBufferInDays),
      peer_autonomous_container_database_backup_config: databaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigToTerraform(this._peerAutonomousContainerDatabaseBackupConfig.internalValue),
      timeouts: databaseAutonomousContainerDatabaseDataguardAssociationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      autonomous_container_database_dataguard_association_id: {
        value: cdktf.stringToHclTerraform(this._autonomousContainerDatabaseDataguardAssociationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      autonomous_container_database_id: {
        value: cdktf.stringToHclTerraform(this._autonomousContainerDatabaseId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fast_start_fail_over_lag_limit_in_seconds: {
        value: cdktf.numberToHclTerraform(this._fastStartFailOverLagLimitInSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_automatic_failover_enabled: {
        value: cdktf.booleanToHclTerraform(this._isAutomaticFailoverEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      migrate_trigger: {
        value: cdktf.numberToHclTerraform(this._migrateTrigger),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      peer_autonomous_container_database_compartment_id: {
        value: cdktf.stringToHclTerraform(this._peerAutonomousContainerDatabaseCompartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peer_autonomous_container_database_display_name: {
        value: cdktf.stringToHclTerraform(this._peerAutonomousContainerDatabaseDisplayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peer_autonomous_vm_cluster_id: {
        value: cdktf.stringToHclTerraform(this._peerAutonomousVmClusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peer_cloud_autonomous_vm_cluster_id: {
        value: cdktf.stringToHclTerraform(this._peerCloudAutonomousVmClusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peer_db_unique_name: {
        value: cdktf.stringToHclTerraform(this._peerDbUniqueName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protection_mode: {
        value: cdktf.stringToHclTerraform(this._protectionMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      standby_maintenance_buffer_in_days: {
        value: cdktf.numberToHclTerraform(this._standbyMaintenanceBufferInDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      peer_autonomous_container_database_backup_config: {
        value: databaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigToHclTerraform(this._peerAutonomousContainerDatabaseBackupConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigList",
      },
      timeouts: {
        value: databaseAutonomousContainerDatabaseDataguardAssociationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatabaseAutonomousContainerDatabaseDataguardAssociationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
