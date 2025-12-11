// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_unified_audit_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSafeUnifiedAuditPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_unified_audit_policy#compartment_id DataSafeUnifiedAuditPolicy#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_unified_audit_policy#defined_tags DataSafeUnifiedAuditPolicy#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_unified_audit_policy#description DataSafeUnifiedAuditPolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_unified_audit_policy#display_name DataSafeUnifiedAuditPolicy#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_unified_audit_policy#freeform_tags DataSafeUnifiedAuditPolicy#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_unified_audit_policy#id DataSafeUnifiedAuditPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_unified_audit_policy#security_policy_id DataSafeUnifiedAuditPolicy#security_policy_id}
  */
  readonly securityPolicyId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_unified_audit_policy#status DataSafeUnifiedAuditPolicy#status}
  */
  readonly status: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_unified_audit_policy#unified_audit_policy_definition_id DataSafeUnifiedAuditPolicy#unified_audit_policy_definition_id}
  */
  readonly unifiedAuditPolicyDefinitionId: string;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_unified_audit_policy#conditions DataSafeUnifiedAuditPolicy#conditions}
  */
  readonly conditions: DataSafeUnifiedAuditPolicyConditions[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_unified_audit_policy#timeouts DataSafeUnifiedAuditPolicy#timeouts}
  */
  readonly timeouts?: DataSafeUnifiedAuditPolicyTimeouts;
}
export interface DataSafeUnifiedAuditPolicyConditions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_unified_audit_policy#attribute_set_id DataSafeUnifiedAuditPolicy#attribute_set_id}
  */
  readonly attributeSetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_unified_audit_policy#entity_selection DataSafeUnifiedAuditPolicy#entity_selection}
  */
  readonly entitySelection: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_unified_audit_policy#entity_type DataSafeUnifiedAuditPolicy#entity_type}
  */
  readonly entityType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_unified_audit_policy#operation_status DataSafeUnifiedAuditPolicy#operation_status}
  */
  readonly operationStatus: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_unified_audit_policy#role_names DataSafeUnifiedAuditPolicy#role_names}
  */
  readonly roleNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_unified_audit_policy#user_names DataSafeUnifiedAuditPolicy#user_names}
  */
  readonly userNames?: string[];
}

export function dataSafeUnifiedAuditPolicyConditionsToTerraform(struct?: DataSafeUnifiedAuditPolicyConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_set_id: cdktf.stringToTerraform(struct!.attributeSetId),
    entity_selection: cdktf.stringToTerraform(struct!.entitySelection),
    entity_type: cdktf.stringToTerraform(struct!.entityType),
    operation_status: cdktf.stringToTerraform(struct!.operationStatus),
    role_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.roleNames),
    user_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.userNames),
  }
}


export function dataSafeUnifiedAuditPolicyConditionsToHclTerraform(struct?: DataSafeUnifiedAuditPolicyConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_set_id: {
      value: cdktf.stringToHclTerraform(struct!.attributeSetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    role_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.roleNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    user_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.userNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSafeUnifiedAuditPolicyConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSafeUnifiedAuditPolicyConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeSetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeSetId = this._attributeSetId;
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
    if (this._roleNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleNames = this._roleNames;
    }
    if (this._userNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.userNames = this._userNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSafeUnifiedAuditPolicyConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeSetId = undefined;
      this._entitySelection = undefined;
      this._entityType = undefined;
      this._operationStatus = undefined;
      this._roleNames = undefined;
      this._userNames = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeSetId = value.attributeSetId;
      this._entitySelection = value.entitySelection;
      this._entityType = value.entityType;
      this._operationStatus = value.operationStatus;
      this._roleNames = value.roleNames;
      this._userNames = value.userNames;
    }
  }

  // attribute_set_id - computed: true, optional: true, required: false
  private _attributeSetId?: string; 
  public get attributeSetId() {
    return this.getStringAttribute('attribute_set_id');
  }
  public set attributeSetId(value: string) {
    this._attributeSetId = value;
  }
  public resetAttributeSetId() {
    this._attributeSetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeSetIdInput() {
    return this._attributeSetId;
  }

  // entity_selection - computed: false, optional: false, required: true
  private _entitySelection?: string; 
  public get entitySelection() {
    return this.getStringAttribute('entity_selection');
  }
  public set entitySelection(value: string) {
    this._entitySelection = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entitySelectionInput() {
    return this._entitySelection;
  }

  // entity_type - computed: false, optional: false, required: true
  private _entityType?: string; 
  public get entityType() {
    return this.getStringAttribute('entity_type');
  }
  public set entityType(value: string) {
    this._entityType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityTypeInput() {
    return this._entityType;
  }

  // operation_status - computed: false, optional: false, required: true
  private _operationStatus?: string; 
  public get operationStatus() {
    return this.getStringAttribute('operation_status');
  }
  public set operationStatus(value: string) {
    this._operationStatus = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationStatusInput() {
    return this._operationStatus;
  }

  // role_names - computed: true, optional: true, required: false
  private _roleNames?: string[]; 
  public get roleNames() {
    return this.getListAttribute('role_names');
  }
  public set roleNames(value: string[]) {
    this._roleNames = value;
  }
  public resetRoleNames() {
    this._roleNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleNamesInput() {
    return this._roleNames;
  }

  // user_names - computed: true, optional: true, required: false
  private _userNames?: string[]; 
  public get userNames() {
    return this.getListAttribute('user_names');
  }
  public set userNames(value: string[]) {
    this._userNames = value;
  }
  public resetUserNames() {
    this._userNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNamesInput() {
    return this._userNames;
  }
}

export class DataSafeUnifiedAuditPolicyConditionsList extends cdktf.ComplexList {
  public internalValue? : DataSafeUnifiedAuditPolicyConditions[] | cdktf.IResolvable

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
  public get(index: number): DataSafeUnifiedAuditPolicyConditionsOutputReference {
    return new DataSafeUnifiedAuditPolicyConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSafeUnifiedAuditPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_unified_audit_policy#create DataSafeUnifiedAuditPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_unified_audit_policy#delete DataSafeUnifiedAuditPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_unified_audit_policy#update DataSafeUnifiedAuditPolicy#update}
  */
  readonly update?: string;
}

export function dataSafeUnifiedAuditPolicyTimeoutsToTerraform(struct?: DataSafeUnifiedAuditPolicyTimeouts | cdktf.IResolvable): any {
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


export function dataSafeUnifiedAuditPolicyTimeoutsToHclTerraform(struct?: DataSafeUnifiedAuditPolicyTimeouts | cdktf.IResolvable): any {
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

export class DataSafeUnifiedAuditPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSafeUnifiedAuditPolicyTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSafeUnifiedAuditPolicyTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_unified_audit_policy oci_data_safe_unified_audit_policy}
*/
export class DataSafeUnifiedAuditPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_data_safe_unified_audit_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSafeUnifiedAuditPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSafeUnifiedAuditPolicy to import
  * @param importFromId The id of the existing DataSafeUnifiedAuditPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_unified_audit_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSafeUnifiedAuditPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_data_safe_unified_audit_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_unified_audit_policy oci_data_safe_unified_audit_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSafeUnifiedAuditPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataSafeUnifiedAuditPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_data_safe_unified_audit_policy',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
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
    this._securityPolicyId = config.securityPolicyId;
    this._status = config.status;
    this._unifiedAuditPolicyDefinitionId = config.unifiedAuditPolicyDefinitionId;
    this._conditions.internalValue = config.conditions;
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

  // enabled_entities - computed: true, optional: false, required: false
  public get enabledEntities() {
    return this.getStringAttribute('enabled_entities');
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

  // is_seeded - computed: true, optional: false, required: false
  public get isSeeded() {
    return this.getBooleanAttribute('is_seeded');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // security_policy_id - computed: false, optional: false, required: true
  private _securityPolicyId?: string; 
  public get securityPolicyId() {
    return this.getStringAttribute('security_policy_id');
  }
  public set securityPolicyId(value: string) {
    this._securityPolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityPolicyIdInput() {
    return this._securityPolicyId;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
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

  // unified_audit_policy_definition_id - computed: false, optional: false, required: true
  private _unifiedAuditPolicyDefinitionId?: string; 
  public get unifiedAuditPolicyDefinitionId() {
    return this.getStringAttribute('unified_audit_policy_definition_id');
  }
  public set unifiedAuditPolicyDefinitionId(value: string) {
    this._unifiedAuditPolicyDefinitionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unifiedAuditPolicyDefinitionIdInput() {
    return this._unifiedAuditPolicyDefinitionId;
  }

  // conditions - computed: false, optional: false, required: true
  private _conditions = new DataSafeUnifiedAuditPolicyConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: DataSafeUnifiedAuditPolicyConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataSafeUnifiedAuditPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataSafeUnifiedAuditPolicyTimeouts) {
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
      security_policy_id: cdktf.stringToTerraform(this._securityPolicyId),
      status: cdktf.stringToTerraform(this._status),
      unified_audit_policy_definition_id: cdktf.stringToTerraform(this._unifiedAuditPolicyDefinitionId),
      conditions: cdktf.listMapper(dataSafeUnifiedAuditPolicyConditionsToTerraform, true)(this._conditions.internalValue),
      timeouts: dataSafeUnifiedAuditPolicyTimeoutsToTerraform(this._timeouts.internalValue),
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
      security_policy_id: {
        value: cdktf.stringToHclTerraform(this._securityPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unified_audit_policy_definition_id: {
        value: cdktf.stringToHclTerraform(this._unifiedAuditPolicyDefinitionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      conditions: {
        value: cdktf.listMapperHcl(dataSafeUnifiedAuditPolicyConditionsToHclTerraform, true)(this._conditions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataSafeUnifiedAuditPolicyConditionsList",
      },
      timeouts: {
        value: dataSafeUnifiedAuditPolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataSafeUnifiedAuditPolicyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
