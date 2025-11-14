// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/data_safe_unified_audit_policy_definitions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDataSafeUnifiedAuditPolicyDefinitionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/data_safe_unified_audit_policy_definitions#access_level DataOciDataSafeUnifiedAuditPolicyDefinitions#access_level}
  */
  readonly accessLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/data_safe_unified_audit_policy_definitions#compartment_id DataOciDataSafeUnifiedAuditPolicyDefinitions#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/data_safe_unified_audit_policy_definitions#compartment_id_in_subtree DataOciDataSafeUnifiedAuditPolicyDefinitions#compartment_id_in_subtree}
  */
  readonly compartmentIdInSubtree?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/data_safe_unified_audit_policy_definitions#display_name DataOciDataSafeUnifiedAuditPolicyDefinitions#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/data_safe_unified_audit_policy_definitions#id DataOciDataSafeUnifiedAuditPolicyDefinitions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/data_safe_unified_audit_policy_definitions#is_seeded DataOciDataSafeUnifiedAuditPolicyDefinitions#is_seeded}
  */
  readonly isSeeded?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/data_safe_unified_audit_policy_definitions#state DataOciDataSafeUnifiedAuditPolicyDefinitions#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/data_safe_unified_audit_policy_definitions#unified_audit_policy_category DataOciDataSafeUnifiedAuditPolicyDefinitions#unified_audit_policy_category}
  */
  readonly unifiedAuditPolicyCategory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/data_safe_unified_audit_policy_definitions#unified_audit_policy_definition_id DataOciDataSafeUnifiedAuditPolicyDefinitions#unified_audit_policy_definition_id}
  */
  readonly unifiedAuditPolicyDefinitionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/data_safe_unified_audit_policy_definitions#unified_audit_policy_name DataOciDataSafeUnifiedAuditPolicyDefinitions#unified_audit_policy_name}
  */
  readonly unifiedAuditPolicyName?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/data_safe_unified_audit_policy_definitions#filter DataOciDataSafeUnifiedAuditPolicyDefinitions#filter}
  */
  readonly filter?: DataOciDataSafeUnifiedAuditPolicyDefinitionsFilter[] | cdktf.IResolvable;
}
export interface DataOciDataSafeUnifiedAuditPolicyDefinitionsUnifiedAuditPolicyDefinitionCollectionItems {
}

export function dataOciDataSafeUnifiedAuditPolicyDefinitionsUnifiedAuditPolicyDefinitionCollectionItemsToTerraform(struct?: DataOciDataSafeUnifiedAuditPolicyDefinitionsUnifiedAuditPolicyDefinitionCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeUnifiedAuditPolicyDefinitionsUnifiedAuditPolicyDefinitionCollectionItemsToHclTerraform(struct?: DataOciDataSafeUnifiedAuditPolicyDefinitionsUnifiedAuditPolicyDefinitionCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeUnifiedAuditPolicyDefinitionsUnifiedAuditPolicyDefinitionCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeUnifiedAuditPolicyDefinitionsUnifiedAuditPolicyDefinitionCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeUnifiedAuditPolicyDefinitionsUnifiedAuditPolicyDefinitionCollectionItems | undefined) {
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

  // is_seeded - computed: true, optional: false, required: false
  public get isSeeded() {
    return this.getBooleanAttribute('is_seeded');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // policy_definition_statement - computed: true, optional: false, required: false
  public get policyDefinitionStatement() {
    return this.getStringAttribute('policy_definition_statement');
  }

  // policy_name - computed: true, optional: false, required: false
  public get policyName() {
    return this.getStringAttribute('policy_name');
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

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // unified_audit_policy_definition_id - computed: true, optional: false, required: false
  public get unifiedAuditPolicyDefinitionId() {
    return this.getStringAttribute('unified_audit_policy_definition_id');
  }
}

export class DataOciDataSafeUnifiedAuditPolicyDefinitionsUnifiedAuditPolicyDefinitionCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeUnifiedAuditPolicyDefinitionsUnifiedAuditPolicyDefinitionCollectionItemsOutputReference {
    return new DataOciDataSafeUnifiedAuditPolicyDefinitionsUnifiedAuditPolicyDefinitionCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeUnifiedAuditPolicyDefinitionsUnifiedAuditPolicyDefinitionCollection {
}

export function dataOciDataSafeUnifiedAuditPolicyDefinitionsUnifiedAuditPolicyDefinitionCollectionToTerraform(struct?: DataOciDataSafeUnifiedAuditPolicyDefinitionsUnifiedAuditPolicyDefinitionCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeUnifiedAuditPolicyDefinitionsUnifiedAuditPolicyDefinitionCollectionToHclTerraform(struct?: DataOciDataSafeUnifiedAuditPolicyDefinitionsUnifiedAuditPolicyDefinitionCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeUnifiedAuditPolicyDefinitionsUnifiedAuditPolicyDefinitionCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeUnifiedAuditPolicyDefinitionsUnifiedAuditPolicyDefinitionCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeUnifiedAuditPolicyDefinitionsUnifiedAuditPolicyDefinitionCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciDataSafeUnifiedAuditPolicyDefinitionsUnifiedAuditPolicyDefinitionCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciDataSafeUnifiedAuditPolicyDefinitionsUnifiedAuditPolicyDefinitionCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeUnifiedAuditPolicyDefinitionsUnifiedAuditPolicyDefinitionCollectionOutputReference {
    return new DataOciDataSafeUnifiedAuditPolicyDefinitionsUnifiedAuditPolicyDefinitionCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeUnifiedAuditPolicyDefinitionsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/data_safe_unified_audit_policy_definitions#name DataOciDataSafeUnifiedAuditPolicyDefinitions#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/data_safe_unified_audit_policy_definitions#regex DataOciDataSafeUnifiedAuditPolicyDefinitions#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/data_safe_unified_audit_policy_definitions#values DataOciDataSafeUnifiedAuditPolicyDefinitions#values}
  */
  readonly values: string[];
}

export function dataOciDataSafeUnifiedAuditPolicyDefinitionsFilterToTerraform(struct?: DataOciDataSafeUnifiedAuditPolicyDefinitionsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    regex: cdktf.booleanToTerraform(struct!.regex),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataOciDataSafeUnifiedAuditPolicyDefinitionsFilterToHclTerraform(struct?: DataOciDataSafeUnifiedAuditPolicyDefinitionsFilter | cdktf.IResolvable): any {
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
    regex: {
      value: cdktf.booleanToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOciDataSafeUnifiedAuditPolicyDefinitionsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeUnifiedAuditPolicyDefinitionsFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeUnifiedAuditPolicyDefinitionsFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._regex = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._regex = value.regex;
      this._values = value.values;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: boolean | cdktf.IResolvable; 
  public get regex() {
    return this.getBooleanAttribute('regex');
  }
  public set regex(value: boolean | cdktf.IResolvable) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataOciDataSafeUnifiedAuditPolicyDefinitionsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciDataSafeUnifiedAuditPolicyDefinitionsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciDataSafeUnifiedAuditPolicyDefinitionsFilterOutputReference {
    return new DataOciDataSafeUnifiedAuditPolicyDefinitionsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/data_safe_unified_audit_policy_definitions oci_data_safe_unified_audit_policy_definitions}
*/
export class DataOciDataSafeUnifiedAuditPolicyDefinitions extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_data_safe_unified_audit_policy_definitions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDataSafeUnifiedAuditPolicyDefinitions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDataSafeUnifiedAuditPolicyDefinitions to import
  * @param importFromId The id of the existing DataOciDataSafeUnifiedAuditPolicyDefinitions that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/data_safe_unified_audit_policy_definitions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDataSafeUnifiedAuditPolicyDefinitions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_data_safe_unified_audit_policy_definitions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/data_safe_unified_audit_policy_definitions oci_data_safe_unified_audit_policy_definitions} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDataSafeUnifiedAuditPolicyDefinitionsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDataSafeUnifiedAuditPolicyDefinitionsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_data_safe_unified_audit_policy_definitions',
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
    this._accessLevel = config.accessLevel;
    this._compartmentId = config.compartmentId;
    this._compartmentIdInSubtree = config.compartmentIdInSubtree;
    this._displayName = config.displayName;
    this._id = config.id;
    this._isSeeded = config.isSeeded;
    this._state = config.state;
    this._unifiedAuditPolicyCategory = config.unifiedAuditPolicyCategory;
    this._unifiedAuditPolicyDefinitionId = config.unifiedAuditPolicyDefinitionId;
    this._unifiedAuditPolicyName = config.unifiedAuditPolicyName;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_level - computed: false, optional: true, required: false
  private _accessLevel?: string; 
  public get accessLevel() {
    return this.getStringAttribute('access_level');
  }
  public set accessLevel(value: string) {
    this._accessLevel = value;
  }
  public resetAccessLevel() {
    this._accessLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLevelInput() {
    return this._accessLevel;
  }

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

  // compartment_id_in_subtree - computed: false, optional: true, required: false
  private _compartmentIdInSubtree?: boolean | cdktf.IResolvable; 
  public get compartmentIdInSubtree() {
    return this.getBooleanAttribute('compartment_id_in_subtree');
  }
  public set compartmentIdInSubtree(value: boolean | cdktf.IResolvable) {
    this._compartmentIdInSubtree = value;
  }
  public resetCompartmentIdInSubtree() {
    this._compartmentIdInSubtree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInSubtreeInput() {
    return this._compartmentIdInSubtree;
  }

  // display_name - computed: false, optional: true, required: false
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

  // is_seeded - computed: false, optional: true, required: false
  private _isSeeded?: boolean | cdktf.IResolvable; 
  public get isSeeded() {
    return this.getBooleanAttribute('is_seeded');
  }
  public set isSeeded(value: boolean | cdktf.IResolvable) {
    this._isSeeded = value;
  }
  public resetIsSeeded() {
    this._isSeeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSeededInput() {
    return this._isSeeded;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // unified_audit_policy_category - computed: false, optional: true, required: false
  private _unifiedAuditPolicyCategory?: string; 
  public get unifiedAuditPolicyCategory() {
    return this.getStringAttribute('unified_audit_policy_category');
  }
  public set unifiedAuditPolicyCategory(value: string) {
    this._unifiedAuditPolicyCategory = value;
  }
  public resetUnifiedAuditPolicyCategory() {
    this._unifiedAuditPolicyCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unifiedAuditPolicyCategoryInput() {
    return this._unifiedAuditPolicyCategory;
  }

  // unified_audit_policy_definition_collection - computed: true, optional: false, required: false
  private _unifiedAuditPolicyDefinitionCollection = new DataOciDataSafeUnifiedAuditPolicyDefinitionsUnifiedAuditPolicyDefinitionCollectionList(this, "unified_audit_policy_definition_collection", false);
  public get unifiedAuditPolicyDefinitionCollection() {
    return this._unifiedAuditPolicyDefinitionCollection;
  }

  // unified_audit_policy_definition_id - computed: false, optional: true, required: false
  private _unifiedAuditPolicyDefinitionId?: string; 
  public get unifiedAuditPolicyDefinitionId() {
    return this.getStringAttribute('unified_audit_policy_definition_id');
  }
  public set unifiedAuditPolicyDefinitionId(value: string) {
    this._unifiedAuditPolicyDefinitionId = value;
  }
  public resetUnifiedAuditPolicyDefinitionId() {
    this._unifiedAuditPolicyDefinitionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unifiedAuditPolicyDefinitionIdInput() {
    return this._unifiedAuditPolicyDefinitionId;
  }

  // unified_audit_policy_name - computed: false, optional: true, required: false
  private _unifiedAuditPolicyName?: string; 
  public get unifiedAuditPolicyName() {
    return this.getStringAttribute('unified_audit_policy_name');
  }
  public set unifiedAuditPolicyName(value: string) {
    this._unifiedAuditPolicyName = value;
  }
  public resetUnifiedAuditPolicyName() {
    this._unifiedAuditPolicyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unifiedAuditPolicyNameInput() {
    return this._unifiedAuditPolicyName;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciDataSafeUnifiedAuditPolicyDefinitionsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciDataSafeUnifiedAuditPolicyDefinitionsFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_level: cdktf.stringToTerraform(this._accessLevel),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      compartment_id_in_subtree: cdktf.booleanToTerraform(this._compartmentIdInSubtree),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      is_seeded: cdktf.booleanToTerraform(this._isSeeded),
      state: cdktf.stringToTerraform(this._state),
      unified_audit_policy_category: cdktf.stringToTerraform(this._unifiedAuditPolicyCategory),
      unified_audit_policy_definition_id: cdktf.stringToTerraform(this._unifiedAuditPolicyDefinitionId),
      unified_audit_policy_name: cdktf.stringToTerraform(this._unifiedAuditPolicyName),
      filter: cdktf.listMapper(dataOciDataSafeUnifiedAuditPolicyDefinitionsFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_level: {
        value: cdktf.stringToHclTerraform(this._accessLevel),
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
      compartment_id_in_subtree: {
        value: cdktf.booleanToHclTerraform(this._compartmentIdInSubtree),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_seeded: {
        value: cdktf.booleanToHclTerraform(this._isSeeded),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unified_audit_policy_category: {
        value: cdktf.stringToHclTerraform(this._unifiedAuditPolicyCategory),
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
      unified_audit_policy_name: {
        value: cdktf.stringToHclTerraform(this._unifiedAuditPolicyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciDataSafeUnifiedAuditPolicyDefinitionsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciDataSafeUnifiedAuditPolicyDefinitionsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
