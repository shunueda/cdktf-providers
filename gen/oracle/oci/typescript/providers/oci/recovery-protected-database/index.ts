// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/recovery_protected_database
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RecoveryProtectedDatabaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/recovery_protected_database#compartment_id RecoveryProtectedDatabase#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/recovery_protected_database#database_id RecoveryProtectedDatabase#database_id}
  */
  readonly databaseId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/recovery_protected_database#database_size RecoveryProtectedDatabase#database_size}
  */
  readonly databaseSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/recovery_protected_database#db_unique_name RecoveryProtectedDatabase#db_unique_name}
  */
  readonly dbUniqueName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/recovery_protected_database#defined_tags RecoveryProtectedDatabase#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/recovery_protected_database#deletion_schedule RecoveryProtectedDatabase#deletion_schedule}
  */
  readonly deletionSchedule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/recovery_protected_database#display_name RecoveryProtectedDatabase#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/recovery_protected_database#freeform_tags RecoveryProtectedDatabase#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/recovery_protected_database#id RecoveryProtectedDatabase#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/recovery_protected_database#is_redo_logs_shipped RecoveryProtectedDatabase#is_redo_logs_shipped}
  */
  readonly isRedoLogsShipped?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/recovery_protected_database#password RecoveryProtectedDatabase#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/recovery_protected_database#protection_policy_id RecoveryProtectedDatabase#protection_policy_id}
  */
  readonly protectionPolicyId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/recovery_protected_database#subscription_id RecoveryProtectedDatabase#subscription_id}
  */
  readonly subscriptionId?: string;
  /**
  * recovery_service_subnets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/recovery_protected_database#recovery_service_subnets RecoveryProtectedDatabase#recovery_service_subnets}
  */
  readonly recoveryServiceSubnets: RecoveryProtectedDatabaseRecoveryServiceSubnets[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/recovery_protected_database#timeouts RecoveryProtectedDatabase#timeouts}
  */
  readonly timeouts?: RecoveryProtectedDatabaseTimeouts;
}
export interface RecoveryProtectedDatabaseMetrics {
}

export function recoveryProtectedDatabaseMetricsToTerraform(struct?: RecoveryProtectedDatabaseMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function recoveryProtectedDatabaseMetricsToHclTerraform(struct?: RecoveryProtectedDatabaseMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class RecoveryProtectedDatabaseMetricsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RecoveryProtectedDatabaseMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecoveryProtectedDatabaseMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backup_space_estimate_in_gbs - computed: true, optional: false, required: false
  public get backupSpaceEstimateInGbs() {
    return this.getNumberAttribute('backup_space_estimate_in_gbs');
  }

  // backup_space_used_in_gbs - computed: true, optional: false, required: false
  public get backupSpaceUsedInGbs() {
    return this.getNumberAttribute('backup_space_used_in_gbs');
  }

  // current_retention_period_in_seconds - computed: true, optional: false, required: false
  public get currentRetentionPeriodInSeconds() {
    return this.getNumberAttribute('current_retention_period_in_seconds');
  }

  // db_size_in_gbs - computed: true, optional: false, required: false
  public get dbSizeInGbs() {
    return this.getNumberAttribute('db_size_in_gbs');
  }

  // is_redo_logs_enabled - computed: true, optional: false, required: false
  public get isRedoLogsEnabled() {
    return this.getBooleanAttribute('is_redo_logs_enabled');
  }

  // minimum_recovery_needed_in_days - computed: true, optional: false, required: false
  public get minimumRecoveryNeededInDays() {
    return this.getNumberAttribute('minimum_recovery_needed_in_days');
  }

  // retention_period_in_days - computed: true, optional: false, required: false
  public get retentionPeriodInDays() {
    return this.getNumberAttribute('retention_period_in_days');
  }

  // unprotected_window_in_seconds - computed: true, optional: false, required: false
  public get unprotectedWindowInSeconds() {
    return this.getNumberAttribute('unprotected_window_in_seconds');
  }
}

export class RecoveryProtectedDatabaseMetricsList extends cdktf.ComplexList {

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
  public get(index: number): RecoveryProtectedDatabaseMetricsOutputReference {
    return new RecoveryProtectedDatabaseMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RecoveryProtectedDatabaseRecoveryServiceSubnets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/recovery_protected_database#recovery_service_subnet_id RecoveryProtectedDatabase#recovery_service_subnet_id}
  */
  readonly recoveryServiceSubnetId: string;
}

export function recoveryProtectedDatabaseRecoveryServiceSubnetsToTerraform(struct?: RecoveryProtectedDatabaseRecoveryServiceSubnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    recovery_service_subnet_id: cdktf.stringToTerraform(struct!.recoveryServiceSubnetId),
  }
}


export function recoveryProtectedDatabaseRecoveryServiceSubnetsToHclTerraform(struct?: RecoveryProtectedDatabaseRecoveryServiceSubnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    recovery_service_subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.recoveryServiceSubnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RecoveryProtectedDatabaseRecoveryServiceSubnets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recoveryServiceSubnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.recoveryServiceSubnetId = this._recoveryServiceSubnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecoveryProtectedDatabaseRecoveryServiceSubnets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._recoveryServiceSubnetId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._recoveryServiceSubnetId = value.recoveryServiceSubnetId;
    }
  }

  // recovery_service_subnet_id - computed: false, optional: false, required: true
  private _recoveryServiceSubnetId?: string; 
  public get recoveryServiceSubnetId() {
    return this.getStringAttribute('recovery_service_subnet_id');
  }
  public set recoveryServiceSubnetId(value: string) {
    this._recoveryServiceSubnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryServiceSubnetIdInput() {
    return this._recoveryServiceSubnetId;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class RecoveryProtectedDatabaseRecoveryServiceSubnetsList extends cdktf.ComplexList {
  public internalValue? : RecoveryProtectedDatabaseRecoveryServiceSubnets[] | cdktf.IResolvable

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
  public get(index: number): RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference {
    return new RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RecoveryProtectedDatabaseTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/recovery_protected_database#create RecoveryProtectedDatabase#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/recovery_protected_database#delete RecoveryProtectedDatabase#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/recovery_protected_database#update RecoveryProtectedDatabase#update}
  */
  readonly update?: string;
}

export function recoveryProtectedDatabaseTimeoutsToTerraform(struct?: RecoveryProtectedDatabaseTimeouts | cdktf.IResolvable): any {
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


export function recoveryProtectedDatabaseTimeoutsToHclTerraform(struct?: RecoveryProtectedDatabaseTimeouts | cdktf.IResolvable): any {
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

export class RecoveryProtectedDatabaseTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RecoveryProtectedDatabaseTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RecoveryProtectedDatabaseTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/recovery_protected_database oci_recovery_protected_database}
*/
export class RecoveryProtectedDatabase extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_recovery_protected_database";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RecoveryProtectedDatabase resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RecoveryProtectedDatabase to import
  * @param importFromId The id of the existing RecoveryProtectedDatabase that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/recovery_protected_database#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RecoveryProtectedDatabase to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_recovery_protected_database", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/recovery_protected_database oci_recovery_protected_database} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RecoveryProtectedDatabaseConfig
  */
  public constructor(scope: Construct, id: string, config: RecoveryProtectedDatabaseConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_recovery_protected_database',
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
    this._compartmentId = config.compartmentId;
    this._databaseId = config.databaseId;
    this._databaseSize = config.databaseSize;
    this._dbUniqueName = config.dbUniqueName;
    this._definedTags = config.definedTags;
    this._deletionSchedule = config.deletionSchedule;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._isRedoLogsShipped = config.isRedoLogsShipped;
    this._password = config.password;
    this._protectionPolicyId = config.protectionPolicyId;
    this._subscriptionId = config.subscriptionId;
    this._recoveryServiceSubnets.internalValue = config.recoveryServiceSubnets;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
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

  // database_size - computed: true, optional: true, required: false
  private _databaseSize?: string; 
  public get databaseSize() {
    return this.getStringAttribute('database_size');
  }
  public set databaseSize(value: string) {
    this._databaseSize = value;
  }
  public resetDatabaseSize() {
    this._databaseSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseSizeInput() {
    return this._databaseSize;
  }

  // db_unique_name - computed: false, optional: false, required: true
  private _dbUniqueName?: string; 
  public get dbUniqueName() {
    return this.getStringAttribute('db_unique_name');
  }
  public set dbUniqueName(value: string) {
    this._dbUniqueName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbUniqueNameInput() {
    return this._dbUniqueName;
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

  // deletion_schedule - computed: true, optional: true, required: false
  private _deletionSchedule?: string; 
  public get deletionSchedule() {
    return this.getStringAttribute('deletion_schedule');
  }
  public set deletionSchedule(value: string) {
    this._deletionSchedule = value;
  }
  public resetDeletionSchedule() {
    this._deletionSchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionScheduleInput() {
    return this._deletionSchedule;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // health - computed: true, optional: false, required: false
  public get health() {
    return this.getStringAttribute('health');
  }

  // health_details - computed: true, optional: false, required: false
  public get healthDetails() {
    return this.getStringAttribute('health_details');
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

  // is_read_only_resource - computed: true, optional: false, required: false
  public get isReadOnlyResource() {
    return this.getBooleanAttribute('is_read_only_resource');
  }

  // is_redo_logs_shipped - computed: true, optional: true, required: false
  private _isRedoLogsShipped?: boolean | cdktf.IResolvable; 
  public get isRedoLogsShipped() {
    return this.getBooleanAttribute('is_redo_logs_shipped');
  }
  public set isRedoLogsShipped(value: boolean | cdktf.IResolvable) {
    this._isRedoLogsShipped = value;
  }
  public resetIsRedoLogsShipped() {
    this._isRedoLogsShipped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRedoLogsShippedInput() {
    return this._isRedoLogsShipped;
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // metrics - computed: true, optional: false, required: false
  private _metrics = new RecoveryProtectedDatabaseMetricsList(this, "metrics", false);
  public get metrics() {
    return this._metrics;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // policy_locked_date_time - computed: true, optional: false, required: false
  public get policyLockedDateTime() {
    return this.getStringAttribute('policy_locked_date_time');
  }

  // protection_policy_id - computed: false, optional: false, required: true
  private _protectionPolicyId?: string; 
  public get protectionPolicyId() {
    return this.getStringAttribute('protection_policy_id');
  }
  public set protectionPolicyId(value: string) {
    this._protectionPolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionPolicyIdInput() {
    return this._protectionPolicyId;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // subscription_id - computed: true, optional: true, required: false
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  public resetSubscriptionId() {
    this._subscriptionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
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

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // vpc_user_name - computed: true, optional: false, required: false
  public get vpcUserName() {
    return this.getStringAttribute('vpc_user_name');
  }

  // recovery_service_subnets - computed: false, optional: false, required: true
  private _recoveryServiceSubnets = new RecoveryProtectedDatabaseRecoveryServiceSubnetsList(this, "recovery_service_subnets", false);
  public get recoveryServiceSubnets() {
    return this._recoveryServiceSubnets;
  }
  public putRecoveryServiceSubnets(value: RecoveryProtectedDatabaseRecoveryServiceSubnets[] | cdktf.IResolvable) {
    this._recoveryServiceSubnets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryServiceSubnetsInput() {
    return this._recoveryServiceSubnets.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new RecoveryProtectedDatabaseTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: RecoveryProtectedDatabaseTimeouts) {
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
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      database_id: cdktf.stringToTerraform(this._databaseId),
      database_size: cdktf.stringToTerraform(this._databaseSize),
      db_unique_name: cdktf.stringToTerraform(this._dbUniqueName),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      deletion_schedule: cdktf.stringToTerraform(this._deletionSchedule),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      is_redo_logs_shipped: cdktf.booleanToTerraform(this._isRedoLogsShipped),
      password: cdktf.stringToTerraform(this._password),
      protection_policy_id: cdktf.stringToTerraform(this._protectionPolicyId),
      subscription_id: cdktf.stringToTerraform(this._subscriptionId),
      recovery_service_subnets: cdktf.listMapper(recoveryProtectedDatabaseRecoveryServiceSubnetsToTerraform, true)(this._recoveryServiceSubnets.internalValue),
      timeouts: recoveryProtectedDatabaseTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_id: {
        value: cdktf.stringToHclTerraform(this._databaseId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_size: {
        value: cdktf.stringToHclTerraform(this._databaseSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_unique_name: {
        value: cdktf.stringToHclTerraform(this._dbUniqueName),
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
      deletion_schedule: {
        value: cdktf.stringToHclTerraform(this._deletionSchedule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      is_redo_logs_shipped: {
        value: cdktf.booleanToHclTerraform(this._isRedoLogsShipped),
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
      protection_policy_id: {
        value: cdktf.stringToHclTerraform(this._protectionPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscription_id: {
        value: cdktf.stringToHclTerraform(this._subscriptionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recovery_service_subnets: {
        value: cdktf.listMapperHcl(recoveryProtectedDatabaseRecoveryServiceSubnetsToHclTerraform, true)(this._recoveryServiceSubnets.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RecoveryProtectedDatabaseRecoveryServiceSubnetsList",
      },
      timeouts: {
        value: recoveryProtectedDatabaseTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RecoveryProtectedDatabaseTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
