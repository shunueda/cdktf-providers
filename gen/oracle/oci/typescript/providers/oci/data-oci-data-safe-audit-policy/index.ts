// https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/data_safe_audit_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDataSafeAuditPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/data_safe_audit_policy#audit_policy_id DataOciDataSafeAuditPolicy#audit_policy_id}
  */
  readonly auditPolicyId: string;
}
export interface DataOciDataSafeAuditPolicyAuditConditionsEnableConditions {
}

export function dataOciDataSafeAuditPolicyAuditConditionsEnableConditionsToTerraform(struct?: DataOciDataSafeAuditPolicyAuditConditionsEnableConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeAuditPolicyAuditConditionsEnableConditionsToHclTerraform(struct?: DataOciDataSafeAuditPolicyAuditConditionsEnableConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeAuditPolicyAuditConditionsEnableConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeAuditPolicyAuditConditionsEnableConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeAuditPolicyAuditConditionsEnableConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // entity_names - computed: true, optional: false, required: false
  public get entityNames() {
    return this.getListAttribute('entity_names');
  }

  // entity_selection - computed: true, optional: false, required: false
  public get entitySelection() {
    return this.getStringAttribute('entity_selection');
  }

  // entity_type - computed: true, optional: false, required: false
  public get entityType() {
    return this.getStringAttribute('entity_type');
  }

  // operation_status - computed: true, optional: false, required: false
  public get operationStatus() {
    return this.getStringAttribute('operation_status');
  }
}

export class DataOciDataSafeAuditPolicyAuditConditionsEnableConditionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeAuditPolicyAuditConditionsEnableConditionsOutputReference {
    return new DataOciDataSafeAuditPolicyAuditConditionsEnableConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeAuditPolicyAuditConditions {
}

export function dataOciDataSafeAuditPolicyAuditConditionsToTerraform(struct?: DataOciDataSafeAuditPolicyAuditConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeAuditPolicyAuditConditionsToHclTerraform(struct?: DataOciDataSafeAuditPolicyAuditConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeAuditPolicyAuditConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeAuditPolicyAuditConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeAuditPolicyAuditConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // audit_policy_name - computed: true, optional: false, required: false
  public get auditPolicyName() {
    return this.getStringAttribute('audit_policy_name');
  }

  // enable_conditions - computed: true, optional: false, required: false
  private _enableConditions = new DataOciDataSafeAuditPolicyAuditConditionsEnableConditionsList(this, "enable_conditions", false);
  public get enableConditions() {
    return this._enableConditions;
  }

  // is_data_safe_service_account_audited - computed: true, optional: false, required: false
  public get isDataSafeServiceAccountAudited() {
    return this.getBooleanAttribute('is_data_safe_service_account_audited');
  }

  // is_priv_users_managed_by_data_safe - computed: true, optional: false, required: false
  public get isPrivUsersManagedByDataSafe() {
    return this.getBooleanAttribute('is_priv_users_managed_by_data_safe');
  }
}

export class DataOciDataSafeAuditPolicyAuditConditionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeAuditPolicyAuditConditionsOutputReference {
    return new DataOciDataSafeAuditPolicyAuditConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeAuditPolicyAuditSpecifications {
}

export function dataOciDataSafeAuditPolicyAuditSpecificationsToTerraform(struct?: DataOciDataSafeAuditPolicyAuditSpecifications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeAuditPolicyAuditSpecificationsToHclTerraform(struct?: DataOciDataSafeAuditPolicyAuditSpecifications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeAuditPolicyAuditSpecificationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeAuditPolicyAuditSpecifications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeAuditPolicyAuditSpecifications | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // audit_policy_category - computed: true, optional: false, required: false
  public get auditPolicyCategory() {
    return this.getStringAttribute('audit_policy_category');
  }

  // audit_policy_name - computed: true, optional: false, required: false
  public get auditPolicyName() {
    return this.getStringAttribute('audit_policy_name');
  }

  // database_policy_names - computed: true, optional: false, required: false
  public get databasePolicyNames() {
    return this.getListAttribute('database_policy_names');
  }

  // enable_status - computed: true, optional: false, required: false
  public get enableStatus() {
    return this.getStringAttribute('enable_status');
  }

  // enabled_entities - computed: true, optional: false, required: false
  public get enabledEntities() {
    return this.getStringAttribute('enabled_entities');
  }

  // is_created - computed: true, optional: false, required: false
  public get isCreated() {
    return this.getBooleanAttribute('is_created');
  }

  // is_enabled_for_all_users - computed: true, optional: false, required: false
  public get isEnabledForAllUsers() {
    return this.getBooleanAttribute('is_enabled_for_all_users');
  }

  // is_seeded_in_data_safe - computed: true, optional: false, required: false
  public get isSeededInDataSafe() {
    return this.getBooleanAttribute('is_seeded_in_data_safe');
  }

  // is_seeded_in_target - computed: true, optional: false, required: false
  public get isSeededInTarget() {
    return this.getBooleanAttribute('is_seeded_in_target');
  }

  // is_view_only - computed: true, optional: false, required: false
  public get isViewOnly() {
    return this.getBooleanAttribute('is_view_only');
  }

  // partially_enabled_msg - computed: true, optional: false, required: false
  public get partiallyEnabledMsg() {
    return this.getStringAttribute('partially_enabled_msg');
  }
}

export class DataOciDataSafeAuditPolicyAuditSpecificationsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeAuditPolicyAuditSpecificationsOutputReference {
    return new DataOciDataSafeAuditPolicyAuditSpecificationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/data_safe_audit_policy oci_data_safe_audit_policy}
*/
export class DataOciDataSafeAuditPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_data_safe_audit_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDataSafeAuditPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDataSafeAuditPolicy to import
  * @param importFromId The id of the existing DataOciDataSafeAuditPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/data_safe_audit_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDataSafeAuditPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_data_safe_audit_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/data_safe_audit_policy oci_data_safe_audit_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDataSafeAuditPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDataSafeAuditPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_data_safe_audit_policy',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.27.0',
        providerVersionConstraint: '7.27.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._auditPolicyId = config.auditPolicyId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // audit_conditions - computed: true, optional: false, required: false
  private _auditConditions = new DataOciDataSafeAuditPolicyAuditConditionsList(this, "audit_conditions", false);
  public get auditConditions() {
    return this._auditConditions;
  }

  // audit_policy_id - computed: false, optional: false, required: true
  private _auditPolicyId?: string; 
  public get auditPolicyId() {
    return this.getStringAttribute('audit_policy_id');
  }
  public set auditPolicyId(value: string) {
    this._auditPolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get auditPolicyIdInput() {
    return this._auditPolicyId;
  }

  // audit_specifications - computed: true, optional: false, required: false
  private _auditSpecifications = new DataOciDataSafeAuditPolicyAuditSpecificationsList(this, "audit_specifications", false);
  public get auditSpecifications() {
    return this._auditSpecifications;
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_data_safe_service_account_excluded - computed: true, optional: false, required: false
  public get isDataSafeServiceAccountExcluded() {
    return this.getBooleanAttribute('is_data_safe_service_account_excluded');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // provision_trigger - computed: true, optional: false, required: false
  public get provisionTrigger() {
    return this.getNumberAttribute('provision_trigger');
  }

  // retrieve_from_target_trigger - computed: true, optional: false, required: false
  public get retrieveFromTargetTrigger() {
    return this.getNumberAttribute('retrieve_from_target_trigger');
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

  // target_id - computed: true, optional: false, required: false
  public get targetId() {
    return this.getStringAttribute('target_id');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_last_provisioned - computed: true, optional: false, required: false
  public get timeLastProvisioned() {
    return this.getStringAttribute('time_last_provisioned');
  }

  // time_last_retrieved - computed: true, optional: false, required: false
  public get timeLastRetrieved() {
    return this.getStringAttribute('time_last_retrieved');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      audit_policy_id: cdktf.stringToTerraform(this._auditPolicyId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      audit_policy_id: {
        value: cdktf.stringToHclTerraform(this._auditPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
