// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_audit_policy_management
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSafeAuditPolicyManagementConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_audit_policy_management#compartment_id DataSafeAuditPolicyManagement#compartment_id}
  */
  readonly compartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_audit_policy_management#defined_tags DataSafeAuditPolicyManagement#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_audit_policy_management#description DataSafeAuditPolicyManagement#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_audit_policy_management#display_name DataSafeAuditPolicyManagement#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_audit_policy_management#freeform_tags DataSafeAuditPolicyManagement#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_audit_policy_management#id DataSafeAuditPolicyManagement#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_audit_policy_management#is_data_safe_service_account_excluded DataSafeAuditPolicyManagement#is_data_safe_service_account_excluded}
  */
  readonly isDataSafeServiceAccountExcluded?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_audit_policy_management#provision_trigger DataSafeAuditPolicyManagement#provision_trigger}
  */
  readonly provisionTrigger?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_audit_policy_management#retrieve_from_target_trigger DataSafeAuditPolicyManagement#retrieve_from_target_trigger}
  */
  readonly retrieveFromTargetTrigger?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_audit_policy_management#target_id DataSafeAuditPolicyManagement#target_id}
  */
  readonly targetId?: string;
  /**
  * audit_conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_audit_policy_management#audit_conditions DataSafeAuditPolicyManagement#audit_conditions}
  */
  readonly auditConditions?: DataSafeAuditPolicyManagementAuditConditions[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_audit_policy_management#timeouts DataSafeAuditPolicyManagement#timeouts}
  */
  readonly timeouts?: DataSafeAuditPolicyManagementTimeouts;
}
export interface DataSafeAuditPolicyManagementAuditSpecifications {
}

export function dataSafeAuditPolicyManagementAuditSpecificationsToTerraform(struct?: DataSafeAuditPolicyManagementAuditSpecifications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSafeAuditPolicyManagementAuditSpecificationsToHclTerraform(struct?: DataSafeAuditPolicyManagementAuditSpecifications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSafeAuditPolicyManagementAuditSpecificationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSafeAuditPolicyManagementAuditSpecifications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSafeAuditPolicyManagementAuditSpecifications | undefined) {
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

export class DataSafeAuditPolicyManagementAuditSpecificationsList extends cdktf.ComplexList {

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
  public get(index: number): DataSafeAuditPolicyManagementAuditSpecificationsOutputReference {
    return new DataSafeAuditPolicyManagementAuditSpecificationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSafeAuditPolicyManagementAuditConditionsEnableConditions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_audit_policy_management#entity_names DataSafeAuditPolicyManagement#entity_names}
  */
  readonly entityNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_audit_policy_management#entity_selection DataSafeAuditPolicyManagement#entity_selection}
  */
  readonly entitySelection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_audit_policy_management#entity_type DataSafeAuditPolicyManagement#entity_type}
  */
  readonly entityType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_audit_policy_management#operation_status DataSafeAuditPolicyManagement#operation_status}
  */
  readonly operationStatus?: string;
}

export function dataSafeAuditPolicyManagementAuditConditionsEnableConditionsToTerraform(struct?: DataSafeAuditPolicyManagementAuditConditionsEnableConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entity_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.entityNames),
    entity_selection: cdktf.stringToTerraform(struct!.entitySelection),
    entity_type: cdktf.stringToTerraform(struct!.entityType),
    operation_status: cdktf.stringToTerraform(struct!.operationStatus),
  }
}


export function dataSafeAuditPolicyManagementAuditConditionsEnableConditionsToHclTerraform(struct?: DataSafeAuditPolicyManagementAuditConditionsEnableConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entity_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.entityNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    entity_selection: {
      value: cdktf.stringToHclTerraform(struct!.entitySelection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entity_type: {
      value: cdktf.stringToHclTerraform(struct!.entityType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operation_status: {
      value: cdktf.stringToHclTerraform(struct!.operationStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSafeAuditPolicyManagementAuditConditionsEnableConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entityNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityNames = this._entityNames;
    }
    if (this._entitySelection !== undefined) {
      hasAnyValues = true;
      internalValueResult.entitySelection = this._entitySelection;
    }
    if (this._entityType !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityType = this._entityType;
    }
    if (this._operationStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.operationStatus = this._operationStatus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSafeAuditPolicyManagementAuditConditionsEnableConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._entityNames = undefined;
      this._entitySelection = undefined;
      this._entityType = undefined;
      this._operationStatus = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._entityNames = value.entityNames;
      this._entitySelection = value.entitySelection;
      this._entityType = value.entityType;
      this._operationStatus = value.operationStatus;
    }
  }

  // entity_names - computed: true, optional: true, required: false
  private _entityNames?: string[]; 
  public get entityNames() {
    return this.getListAttribute('entity_names');
  }
  public set entityNames(value: string[]) {
    this._entityNames = value;
  }
  public resetEntityNames() {
    this._entityNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityNamesInput() {
    return this._entityNames;
  }

  // entity_selection - computed: true, optional: true, required: false
  private _entitySelection?: string; 
  public get entitySelection() {
    return this.getStringAttribute('entity_selection');
  }
  public set entitySelection(value: string) {
    this._entitySelection = value;
  }
  public resetEntitySelection() {
    this._entitySelection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entitySelectionInput() {
    return this._entitySelection;
  }

  // entity_type - computed: true, optional: true, required: false
  private _entityType?: string; 
  public get entityType() {
    return this.getStringAttribute('entity_type');
  }
  public set entityType(value: string) {
    this._entityType = value;
  }
  public resetEntityType() {
    this._entityType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityTypeInput() {
    return this._entityType;
  }

  // operation_status - computed: true, optional: true, required: false
  private _operationStatus?: string; 
  public get operationStatus() {
    return this.getStringAttribute('operation_status');
  }
  public set operationStatus(value: string) {
    this._operationStatus = value;
  }
  public resetOperationStatus() {
    this._operationStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationStatusInput() {
    return this._operationStatus;
  }
}

export class DataSafeAuditPolicyManagementAuditConditionsEnableConditionsList extends cdktf.ComplexList {
  public internalValue? : DataSafeAuditPolicyManagementAuditConditionsEnableConditions[] | cdktf.IResolvable

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
  public get(index: number): DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference {
    return new DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSafeAuditPolicyManagementAuditConditions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_audit_policy_management#audit_policy_name DataSafeAuditPolicyManagement#audit_policy_name}
  */
  readonly auditPolicyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_audit_policy_management#is_data_safe_service_account_audited DataSafeAuditPolicyManagement#is_data_safe_service_account_audited}
  */
  readonly isDataSafeServiceAccountAudited?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_audit_policy_management#is_enabled DataSafeAuditPolicyManagement#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_audit_policy_management#is_priv_users_managed_by_data_safe DataSafeAuditPolicyManagement#is_priv_users_managed_by_data_safe}
  */
  readonly isPrivUsersManagedByDataSafe?: boolean | cdktf.IResolvable;
  /**
  * enable_conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_audit_policy_management#enable_conditions DataSafeAuditPolicyManagement#enable_conditions}
  */
  readonly enableConditions?: DataSafeAuditPolicyManagementAuditConditionsEnableConditions[] | cdktf.IResolvable;
}

export function dataSafeAuditPolicyManagementAuditConditionsToTerraform(struct?: DataSafeAuditPolicyManagementAuditConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audit_policy_name: cdktf.stringToTerraform(struct!.auditPolicyName),
    is_data_safe_service_account_audited: cdktf.booleanToTerraform(struct!.isDataSafeServiceAccountAudited),
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    is_priv_users_managed_by_data_safe: cdktf.booleanToTerraform(struct!.isPrivUsersManagedByDataSafe),
    enable_conditions: cdktf.listMapper(dataSafeAuditPolicyManagementAuditConditionsEnableConditionsToTerraform, true)(struct!.enableConditions),
  }
}


export function dataSafeAuditPolicyManagementAuditConditionsToHclTerraform(struct?: DataSafeAuditPolicyManagementAuditConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audit_policy_name: {
      value: cdktf.stringToHclTerraform(struct!.auditPolicyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_data_safe_service_account_audited: {
      value: cdktf.booleanToHclTerraform(struct!.isDataSafeServiceAccountAudited),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_priv_users_managed_by_data_safe: {
      value: cdktf.booleanToHclTerraform(struct!.isPrivUsersManagedByDataSafe),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_conditions: {
      value: cdktf.listMapperHcl(dataSafeAuditPolicyManagementAuditConditionsEnableConditionsToHclTerraform, true)(struct!.enableConditions),
      isBlock: true,
      type: "list",
      storageClassType: "DataSafeAuditPolicyManagementAuditConditionsEnableConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSafeAuditPolicyManagementAuditConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSafeAuditPolicyManagementAuditConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auditPolicyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.auditPolicyName = this._auditPolicyName;
    }
    if (this._isDataSafeServiceAccountAudited !== undefined) {
      hasAnyValues = true;
      internalValueResult.isDataSafeServiceAccountAudited = this._isDataSafeServiceAccountAudited;
    }
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._isPrivUsersManagedByDataSafe !== undefined) {
      hasAnyValues = true;
      internalValueResult.isPrivUsersManagedByDataSafe = this._isPrivUsersManagedByDataSafe;
    }
    if (this._enableConditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableConditions = this._enableConditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSafeAuditPolicyManagementAuditConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._auditPolicyName = undefined;
      this._isDataSafeServiceAccountAudited = undefined;
      this._isEnabled = undefined;
      this._isPrivUsersManagedByDataSafe = undefined;
      this._enableConditions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._auditPolicyName = value.auditPolicyName;
      this._isDataSafeServiceAccountAudited = value.isDataSafeServiceAccountAudited;
      this._isEnabled = value.isEnabled;
      this._isPrivUsersManagedByDataSafe = value.isPrivUsersManagedByDataSafe;
      this._enableConditions.internalValue = value.enableConditions;
    }
  }

  // audit_policy_name - computed: true, optional: true, required: false
  private _auditPolicyName?: string; 
  public get auditPolicyName() {
    return this.getStringAttribute('audit_policy_name');
  }
  public set auditPolicyName(value: string) {
    this._auditPolicyName = value;
  }
  public resetAuditPolicyName() {
    this._auditPolicyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditPolicyNameInput() {
    return this._auditPolicyName;
  }

  // is_data_safe_service_account_audited - computed: true, optional: true, required: false
  private _isDataSafeServiceAccountAudited?: boolean | cdktf.IResolvable; 
  public get isDataSafeServiceAccountAudited() {
    return this.getBooleanAttribute('is_data_safe_service_account_audited');
  }
  public set isDataSafeServiceAccountAudited(value: boolean | cdktf.IResolvable) {
    this._isDataSafeServiceAccountAudited = value;
  }
  public resetIsDataSafeServiceAccountAudited() {
    this._isDataSafeServiceAccountAudited = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDataSafeServiceAccountAuditedInput() {
    return this._isDataSafeServiceAccountAudited;
  }

  // is_enabled - computed: true, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // is_priv_users_managed_by_data_safe - computed: true, optional: true, required: false
  private _isPrivUsersManagedByDataSafe?: boolean | cdktf.IResolvable; 
  public get isPrivUsersManagedByDataSafe() {
    return this.getBooleanAttribute('is_priv_users_managed_by_data_safe');
  }
  public set isPrivUsersManagedByDataSafe(value: boolean | cdktf.IResolvable) {
    this._isPrivUsersManagedByDataSafe = value;
  }
  public resetIsPrivUsersManagedByDataSafe() {
    this._isPrivUsersManagedByDataSafe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPrivUsersManagedByDataSafeInput() {
    return this._isPrivUsersManagedByDataSafe;
  }

  // enable_conditions - computed: false, optional: true, required: false
  private _enableConditions = new DataSafeAuditPolicyManagementAuditConditionsEnableConditionsList(this, "enable_conditions", false);
  public get enableConditions() {
    return this._enableConditions;
  }
  public putEnableConditions(value: DataSafeAuditPolicyManagementAuditConditionsEnableConditions[] | cdktf.IResolvable) {
    this._enableConditions.internalValue = value;
  }
  public resetEnableConditions() {
    this._enableConditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableConditionsInput() {
    return this._enableConditions.internalValue;
  }
}

export class DataSafeAuditPolicyManagementAuditConditionsList extends cdktf.ComplexList {
  public internalValue? : DataSafeAuditPolicyManagementAuditConditions[] | cdktf.IResolvable

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
  public get(index: number): DataSafeAuditPolicyManagementAuditConditionsOutputReference {
    return new DataSafeAuditPolicyManagementAuditConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSafeAuditPolicyManagementTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_audit_policy_management#create DataSafeAuditPolicyManagement#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_audit_policy_management#delete DataSafeAuditPolicyManagement#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_audit_policy_management#update DataSafeAuditPolicyManagement#update}
  */
  readonly update?: string;
}

export function dataSafeAuditPolicyManagementTimeoutsToTerraform(struct?: DataSafeAuditPolicyManagementTimeouts | cdktf.IResolvable): any {
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


export function dataSafeAuditPolicyManagementTimeoutsToHclTerraform(struct?: DataSafeAuditPolicyManagementTimeouts | cdktf.IResolvable): any {
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

export class DataSafeAuditPolicyManagementTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSafeAuditPolicyManagementTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSafeAuditPolicyManagementTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_audit_policy_management oci_data_safe_audit_policy_management}
*/
export class DataSafeAuditPolicyManagement extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_data_safe_audit_policy_management";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSafeAuditPolicyManagement resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSafeAuditPolicyManagement to import
  * @param importFromId The id of the existing DataSafeAuditPolicyManagement that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_audit_policy_management#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSafeAuditPolicyManagement to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_data_safe_audit_policy_management", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_audit_policy_management oci_data_safe_audit_policy_management} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSafeAuditPolicyManagementConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSafeAuditPolicyManagementConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'oci_data_safe_audit_policy_management',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.26.1',
        providerVersionConstraint: '7.26.1'
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
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._isDataSafeServiceAccountExcluded = config.isDataSafeServiceAccountExcluded;
    this._provisionTrigger = config.provisionTrigger;
    this._retrieveFromTargetTrigger = config.retrieveFromTargetTrigger;
    this._targetId = config.targetId;
    this._auditConditions.internalValue = config.auditConditions;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // audit_specifications - computed: true, optional: false, required: false
  private _auditSpecifications = new DataSafeAuditPolicyManagementAuditSpecificationsList(this, "audit_specifications", false);
  public get auditSpecifications() {
    return this._auditSpecifications;
  }

  // compartment_id - computed: true, optional: true, required: false
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  public resetCompartmentId() {
    this._compartmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
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

  // description - computed: true, optional: true, required: false
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

  // is_data_safe_service_account_excluded - computed: true, optional: true, required: false
  private _isDataSafeServiceAccountExcluded?: boolean | cdktf.IResolvable; 
  public get isDataSafeServiceAccountExcluded() {
    return this.getBooleanAttribute('is_data_safe_service_account_excluded');
  }
  public set isDataSafeServiceAccountExcluded(value: boolean | cdktf.IResolvable) {
    this._isDataSafeServiceAccountExcluded = value;
  }
  public resetIsDataSafeServiceAccountExcluded() {
    this._isDataSafeServiceAccountExcluded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDataSafeServiceAccountExcludedInput() {
    return this._isDataSafeServiceAccountExcluded;
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // provision_trigger - computed: false, optional: true, required: false
  private _provisionTrigger?: boolean | cdktf.IResolvable; 
  public get provisionTrigger() {
    return this.getBooleanAttribute('provision_trigger');
  }
  public set provisionTrigger(value: boolean | cdktf.IResolvable) {
    this._provisionTrigger = value;
  }
  public resetProvisionTrigger() {
    this._provisionTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionTriggerInput() {
    return this._provisionTrigger;
  }

  // retrieve_from_target_trigger - computed: false, optional: true, required: false
  private _retrieveFromTargetTrigger?: boolean | cdktf.IResolvable; 
  public get retrieveFromTargetTrigger() {
    return this.getBooleanAttribute('retrieve_from_target_trigger');
  }
  public set retrieveFromTargetTrigger(value: boolean | cdktf.IResolvable) {
    this._retrieveFromTargetTrigger = value;
  }
  public resetRetrieveFromTargetTrigger() {
    this._retrieveFromTargetTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retrieveFromTargetTriggerInput() {
    return this._retrieveFromTargetTrigger;
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

  // target_id - computed: false, optional: true, required: false
  private _targetId?: string; 
  public get targetId() {
    return this.getStringAttribute('target_id');
  }
  public set targetId(value: string) {
    this._targetId = value;
  }
  public resetTargetId() {
    this._targetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetIdInput() {
    return this._targetId;
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

  // audit_conditions - computed: false, optional: true, required: false
  private _auditConditions = new DataSafeAuditPolicyManagementAuditConditionsList(this, "audit_conditions", false);
  public get auditConditions() {
    return this._auditConditions;
  }
  public putAuditConditions(value: DataSafeAuditPolicyManagementAuditConditions[] | cdktf.IResolvable) {
    this._auditConditions.internalValue = value;
  }
  public resetAuditConditions() {
    this._auditConditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditConditionsInput() {
    return this._auditConditions.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataSafeAuditPolicyManagementTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataSafeAuditPolicyManagementTimeouts) {
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
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      is_data_safe_service_account_excluded: cdktf.booleanToTerraform(this._isDataSafeServiceAccountExcluded),
      provision_trigger: cdktf.booleanToTerraform(this._provisionTrigger),
      retrieve_from_target_trigger: cdktf.booleanToTerraform(this._retrieveFromTargetTrigger),
      target_id: cdktf.stringToTerraform(this._targetId),
      audit_conditions: cdktf.listMapper(dataSafeAuditPolicyManagementAuditConditionsToTerraform, true)(this._auditConditions.internalValue),
      timeouts: dataSafeAuditPolicyManagementTimeoutsToTerraform(this._timeouts.internalValue),
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
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      is_data_safe_service_account_excluded: {
        value: cdktf.booleanToHclTerraform(this._isDataSafeServiceAccountExcluded),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      provision_trigger: {
        value: cdktf.booleanToHclTerraform(this._provisionTrigger),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      retrieve_from_target_trigger: {
        value: cdktf.booleanToHclTerraform(this._retrieveFromTargetTrigger),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      target_id: {
        value: cdktf.stringToHclTerraform(this._targetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      audit_conditions: {
        value: cdktf.listMapperHcl(dataSafeAuditPolicyManagementAuditConditionsToHclTerraform, true)(this._auditConditions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataSafeAuditPolicyManagementAuditConditionsList",
      },
      timeouts: {
        value: dataSafeAuditPolicyManagementTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataSafeAuditPolicyManagementTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
