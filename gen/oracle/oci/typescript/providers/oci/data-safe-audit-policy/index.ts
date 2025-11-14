// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_audit_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSafeAuditPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_audit_policy#audit_policy_id DataSafeAuditPolicy#audit_policy_id}
  */
  readonly auditPolicyId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_audit_policy#compartment_id DataSafeAuditPolicy#compartment_id}
  */
  readonly compartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_audit_policy#defined_tags DataSafeAuditPolicy#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_audit_policy#description DataSafeAuditPolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_audit_policy#display_name DataSafeAuditPolicy#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_audit_policy#freeform_tags DataSafeAuditPolicy#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_audit_policy#id DataSafeAuditPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_audit_policy#provision_trigger DataSafeAuditPolicy#provision_trigger}
  */
  readonly provisionTrigger?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_audit_policy#retrieve_from_target_trigger DataSafeAuditPolicy#retrieve_from_target_trigger}
  */
  readonly retrieveFromTargetTrigger?: number;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_audit_policy#timeouts DataSafeAuditPolicy#timeouts}
  */
  readonly timeouts?: DataSafeAuditPolicyTimeouts;
}
export interface DataSafeAuditPolicyAuditConditionsEnableConditions {
}

export function dataSafeAuditPolicyAuditConditionsEnableConditionsToTerraform(struct?: DataSafeAuditPolicyAuditConditionsEnableConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSafeAuditPolicyAuditConditionsEnableConditionsToHclTerraform(struct?: DataSafeAuditPolicyAuditConditionsEnableConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSafeAuditPolicyAuditConditionsEnableConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSafeAuditPolicyAuditConditionsEnableConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSafeAuditPolicyAuditConditionsEnableConditions | undefined) {
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

export class DataSafeAuditPolicyAuditConditionsEnableConditionsList extends cdktf.ComplexList {

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
  public get(index: number): DataSafeAuditPolicyAuditConditionsEnableConditionsOutputReference {
    return new DataSafeAuditPolicyAuditConditionsEnableConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSafeAuditPolicyAuditConditions {
}

export function dataSafeAuditPolicyAuditConditionsToTerraform(struct?: DataSafeAuditPolicyAuditConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSafeAuditPolicyAuditConditionsToHclTerraform(struct?: DataSafeAuditPolicyAuditConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSafeAuditPolicyAuditConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSafeAuditPolicyAuditConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSafeAuditPolicyAuditConditions | undefined) {
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
  private _enableConditions = new DataSafeAuditPolicyAuditConditionsEnableConditionsList(this, "enable_conditions", false);
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

export class DataSafeAuditPolicyAuditConditionsList extends cdktf.ComplexList {

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
  public get(index: number): DataSafeAuditPolicyAuditConditionsOutputReference {
    return new DataSafeAuditPolicyAuditConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSafeAuditPolicyAuditSpecifications {
}

export function dataSafeAuditPolicyAuditSpecificationsToTerraform(struct?: DataSafeAuditPolicyAuditSpecifications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSafeAuditPolicyAuditSpecificationsToHclTerraform(struct?: DataSafeAuditPolicyAuditSpecifications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSafeAuditPolicyAuditSpecificationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSafeAuditPolicyAuditSpecifications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSafeAuditPolicyAuditSpecifications | undefined) {
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

export class DataSafeAuditPolicyAuditSpecificationsList extends cdktf.ComplexList {

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
  public get(index: number): DataSafeAuditPolicyAuditSpecificationsOutputReference {
    return new DataSafeAuditPolicyAuditSpecificationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSafeAuditPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_audit_policy#create DataSafeAuditPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_audit_policy#delete DataSafeAuditPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_audit_policy#update DataSafeAuditPolicy#update}
  */
  readonly update?: string;
}

export function dataSafeAuditPolicyTimeoutsToTerraform(struct?: DataSafeAuditPolicyTimeouts | cdktf.IResolvable): any {
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


export function dataSafeAuditPolicyTimeoutsToHclTerraform(struct?: DataSafeAuditPolicyTimeouts | cdktf.IResolvable): any {
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

export class DataSafeAuditPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSafeAuditPolicyTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSafeAuditPolicyTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_audit_policy oci_data_safe_audit_policy}
*/
export class DataSafeAuditPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_data_safe_audit_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSafeAuditPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSafeAuditPolicy to import
  * @param importFromId The id of the existing DataSafeAuditPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_audit_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSafeAuditPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_data_safe_audit_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_audit_policy oci_data_safe_audit_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSafeAuditPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataSafeAuditPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_data_safe_audit_policy',
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
    this._auditPolicyId = config.auditPolicyId;
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._provisionTrigger = config.provisionTrigger;
    this._retrieveFromTargetTrigger = config.retrieveFromTargetTrigger;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // audit_conditions - computed: true, optional: false, required: false
  private _auditConditions = new DataSafeAuditPolicyAuditConditionsList(this, "audit_conditions", false);
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
  private _auditSpecifications = new DataSafeAuditPolicyAuditSpecificationsList(this, "audit_specifications", false);
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

  // is_data_safe_service_account_excluded - computed: true, optional: false, required: false
  public get isDataSafeServiceAccountExcluded() {
    return this.getBooleanAttribute('is_data_safe_service_account_excluded');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // provision_trigger - computed: false, optional: true, required: false
  private _provisionTrigger?: number; 
  public get provisionTrigger() {
    return this.getNumberAttribute('provision_trigger');
  }
  public set provisionTrigger(value: number) {
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
  private _retrieveFromTargetTrigger?: number; 
  public get retrieveFromTargetTrigger() {
    return this.getNumberAttribute('retrieve_from_target_trigger');
  }
  public set retrieveFromTargetTrigger(value: number) {
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataSafeAuditPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataSafeAuditPolicyTimeouts) {
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
      audit_policy_id: cdktf.stringToTerraform(this._auditPolicyId),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      provision_trigger: cdktf.numberToTerraform(this._provisionTrigger),
      retrieve_from_target_trigger: cdktf.numberToTerraform(this._retrieveFromTargetTrigger),
      timeouts: dataSafeAuditPolicyTimeoutsToTerraform(this._timeouts.internalValue),
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
      provision_trigger: {
        value: cdktf.numberToHclTerraform(this._provisionTrigger),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retrieve_from_target_trigger: {
        value: cdktf.numberToHclTerraform(this._retrieveFromTargetTrigger),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeouts: {
        value: dataSafeAuditPolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataSafeAuditPolicyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
