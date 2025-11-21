// https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/database_scheduling_policy_recommended_scheduled_actions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatabaseSchedulingPolicyRecommendedScheduledActionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/database_scheduling_policy_recommended_scheduled_actions#id DataOciDatabaseSchedulingPolicyRecommendedScheduledActions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/database_scheduling_policy_recommended_scheduled_actions#plan_intent DataOciDatabaseSchedulingPolicyRecommendedScheduledActions#plan_intent}
  */
  readonly planIntent: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/database_scheduling_policy_recommended_scheduled_actions#scheduling_policy_id DataOciDatabaseSchedulingPolicyRecommendedScheduledActions#scheduling_policy_id}
  */
  readonly schedulingPolicyId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/database_scheduling_policy_recommended_scheduled_actions#scheduling_policy_target_resource_id DataOciDatabaseSchedulingPolicyRecommendedScheduledActions#scheduling_policy_target_resource_id}
  */
  readonly schedulingPolicyTargetResourceId: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/database_scheduling_policy_recommended_scheduled_actions#filter DataOciDatabaseSchedulingPolicyRecommendedScheduledActions#filter}
  */
  readonly filter?: DataOciDatabaseSchedulingPolicyRecommendedScheduledActionsFilter[] | cdktf.IResolvable;
}
export interface DataOciDatabaseSchedulingPolicyRecommendedScheduledActionsRecommendedScheduledActionsCollectionItemsActionMembers {
}

export function dataOciDatabaseSchedulingPolicyRecommendedScheduledActionsRecommendedScheduledActionsCollectionItemsActionMembersToTerraform(struct?: DataOciDatabaseSchedulingPolicyRecommendedScheduledActionsRecommendedScheduledActionsCollectionItemsActionMembers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseSchedulingPolicyRecommendedScheduledActionsRecommendedScheduledActionsCollectionItemsActionMembersToHclTerraform(struct?: DataOciDatabaseSchedulingPolicyRecommendedScheduledActionsRecommendedScheduledActionsCollectionItemsActionMembers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseSchedulingPolicyRecommendedScheduledActionsRecommendedScheduledActionsCollectionItemsActionMembersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseSchedulingPolicyRecommendedScheduledActionsRecommendedScheduledActionsCollectionItemsActionMembers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseSchedulingPolicyRecommendedScheduledActionsRecommendedScheduledActionsCollectionItemsActionMembers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // estimated_time_in_mins - computed: true, optional: false, required: false
  public get estimatedTimeInMins() {
    return this.getNumberAttribute('estimated_time_in_mins');
  }

  // member_id - computed: true, optional: false, required: false
  public get memberId() {
    return this.getStringAttribute('member_id');
  }

  // member_order - computed: true, optional: false, required: false
  public get memberOrder() {
    return this.getNumberAttribute('member_order');
  }
}

export class DataOciDatabaseSchedulingPolicyRecommendedScheduledActionsRecommendedScheduledActionsCollectionItemsActionMembersList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseSchedulingPolicyRecommendedScheduledActionsRecommendedScheduledActionsCollectionItemsActionMembersOutputReference {
    return new DataOciDatabaseSchedulingPolicyRecommendedScheduledActionsRecommendedScheduledActionsCollectionItemsActionMembersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseSchedulingPolicyRecommendedScheduledActionsRecommendedScheduledActionsCollectionItems {
}

export function dataOciDatabaseSchedulingPolicyRecommendedScheduledActionsRecommendedScheduledActionsCollectionItemsToTerraform(struct?: DataOciDatabaseSchedulingPolicyRecommendedScheduledActionsRecommendedScheduledActionsCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseSchedulingPolicyRecommendedScheduledActionsRecommendedScheduledActionsCollectionItemsToHclTerraform(struct?: DataOciDatabaseSchedulingPolicyRecommendedScheduledActionsRecommendedScheduledActionsCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseSchedulingPolicyRecommendedScheduledActionsRecommendedScheduledActionsCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseSchedulingPolicyRecommendedScheduledActionsRecommendedScheduledActionsCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseSchedulingPolicyRecommendedScheduledActionsRecommendedScheduledActionsCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action_members - computed: true, optional: false, required: false
  private _actionMembers = new DataOciDatabaseSchedulingPolicyRecommendedScheduledActionsRecommendedScheduledActionsCollectionItemsActionMembersList(this, "action_members", false);
  public get actionMembers() {
    return this._actionMembers;
  }

  // action_order - computed: true, optional: false, required: false
  public get actionOrder() {
    return this.getNumberAttribute('action_order');
  }

  // action_params - computed: true, optional: false, required: false
  private _actionParams = new cdktf.StringMap(this, "action_params");
  public get actionParams() {
    return this._actionParams;
  }

  // action_type - computed: true, optional: false, required: false
  public get actionType() {
    return this.getStringAttribute('action_type');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // estimated_time_in_mins - computed: true, optional: false, required: false
  public get estimatedTimeInMins() {
    return this.getNumberAttribute('estimated_time_in_mins');
  }

  // scheduling_window_id - computed: true, optional: false, required: false
  public get schedulingWindowId() {
    return this.getStringAttribute('scheduling_window_id');
  }
}

export class DataOciDatabaseSchedulingPolicyRecommendedScheduledActionsRecommendedScheduledActionsCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseSchedulingPolicyRecommendedScheduledActionsRecommendedScheduledActionsCollectionItemsOutputReference {
    return new DataOciDatabaseSchedulingPolicyRecommendedScheduledActionsRecommendedScheduledActionsCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseSchedulingPolicyRecommendedScheduledActionsRecommendedScheduledActionsCollection {
}

export function dataOciDatabaseSchedulingPolicyRecommendedScheduledActionsRecommendedScheduledActionsCollectionToTerraform(struct?: DataOciDatabaseSchedulingPolicyRecommendedScheduledActionsRecommendedScheduledActionsCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseSchedulingPolicyRecommendedScheduledActionsRecommendedScheduledActionsCollectionToHclTerraform(struct?: DataOciDatabaseSchedulingPolicyRecommendedScheduledActionsRecommendedScheduledActionsCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseSchedulingPolicyRecommendedScheduledActionsRecommendedScheduledActionsCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseSchedulingPolicyRecommendedScheduledActionsRecommendedScheduledActionsCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseSchedulingPolicyRecommendedScheduledActionsRecommendedScheduledActionsCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciDatabaseSchedulingPolicyRecommendedScheduledActionsRecommendedScheduledActionsCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciDatabaseSchedulingPolicyRecommendedScheduledActionsRecommendedScheduledActionsCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseSchedulingPolicyRecommendedScheduledActionsRecommendedScheduledActionsCollectionOutputReference {
    return new DataOciDatabaseSchedulingPolicyRecommendedScheduledActionsRecommendedScheduledActionsCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseSchedulingPolicyRecommendedScheduledActionsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/database_scheduling_policy_recommended_scheduled_actions#name DataOciDatabaseSchedulingPolicyRecommendedScheduledActions#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/database_scheduling_policy_recommended_scheduled_actions#regex DataOciDatabaseSchedulingPolicyRecommendedScheduledActions#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/database_scheduling_policy_recommended_scheduled_actions#values DataOciDatabaseSchedulingPolicyRecommendedScheduledActions#values}
  */
  readonly values: string[];
}

export function dataOciDatabaseSchedulingPolicyRecommendedScheduledActionsFilterToTerraform(struct?: DataOciDatabaseSchedulingPolicyRecommendedScheduledActionsFilter | cdktf.IResolvable): any {
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


export function dataOciDatabaseSchedulingPolicyRecommendedScheduledActionsFilterToHclTerraform(struct?: DataOciDatabaseSchedulingPolicyRecommendedScheduledActionsFilter | cdktf.IResolvable): any {
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

export class DataOciDatabaseSchedulingPolicyRecommendedScheduledActionsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseSchedulingPolicyRecommendedScheduledActionsFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciDatabaseSchedulingPolicyRecommendedScheduledActionsFilter | cdktf.IResolvable | undefined) {
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

export class DataOciDatabaseSchedulingPolicyRecommendedScheduledActionsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciDatabaseSchedulingPolicyRecommendedScheduledActionsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciDatabaseSchedulingPolicyRecommendedScheduledActionsFilterOutputReference {
    return new DataOciDatabaseSchedulingPolicyRecommendedScheduledActionsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/database_scheduling_policy_recommended_scheduled_actions oci_database_scheduling_policy_recommended_scheduled_actions}
*/
export class DataOciDatabaseSchedulingPolicyRecommendedScheduledActions extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_scheduling_policy_recommended_scheduled_actions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDatabaseSchedulingPolicyRecommendedScheduledActions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDatabaseSchedulingPolicyRecommendedScheduledActions to import
  * @param importFromId The id of the existing DataOciDatabaseSchedulingPolicyRecommendedScheduledActions that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/database_scheduling_policy_recommended_scheduled_actions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDatabaseSchedulingPolicyRecommendedScheduledActions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_scheduling_policy_recommended_scheduled_actions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/database_scheduling_policy_recommended_scheduled_actions oci_database_scheduling_policy_recommended_scheduled_actions} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatabaseSchedulingPolicyRecommendedScheduledActionsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDatabaseSchedulingPolicyRecommendedScheduledActionsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_scheduling_policy_recommended_scheduled_actions',
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
    this._id = config.id;
    this._planIntent = config.planIntent;
    this._schedulingPolicyId = config.schedulingPolicyId;
    this._schedulingPolicyTargetResourceId = config.schedulingPolicyTargetResourceId;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // plan_intent - computed: false, optional: false, required: true
  private _planIntent?: string; 
  public get planIntent() {
    return this.getStringAttribute('plan_intent');
  }
  public set planIntent(value: string) {
    this._planIntent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get planIntentInput() {
    return this._planIntent;
  }

  // recommended_scheduled_actions_collection - computed: true, optional: false, required: false
  private _recommendedScheduledActionsCollection = new DataOciDatabaseSchedulingPolicyRecommendedScheduledActionsRecommendedScheduledActionsCollectionList(this, "recommended_scheduled_actions_collection", false);
  public get recommendedScheduledActionsCollection() {
    return this._recommendedScheduledActionsCollection;
  }

  // scheduling_policy_id - computed: false, optional: false, required: true
  private _schedulingPolicyId?: string; 
  public get schedulingPolicyId() {
    return this.getStringAttribute('scheduling_policy_id');
  }
  public set schedulingPolicyId(value: string) {
    this._schedulingPolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingPolicyIdInput() {
    return this._schedulingPolicyId;
  }

  // scheduling_policy_target_resource_id - computed: false, optional: false, required: true
  private _schedulingPolicyTargetResourceId?: string; 
  public get schedulingPolicyTargetResourceId() {
    return this.getStringAttribute('scheduling_policy_target_resource_id');
  }
  public set schedulingPolicyTargetResourceId(value: string) {
    this._schedulingPolicyTargetResourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingPolicyTargetResourceIdInput() {
    return this._schedulingPolicyTargetResourceId;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciDatabaseSchedulingPolicyRecommendedScheduledActionsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciDatabaseSchedulingPolicyRecommendedScheduledActionsFilter[] | cdktf.IResolvable) {
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
      id: cdktf.stringToTerraform(this._id),
      plan_intent: cdktf.stringToTerraform(this._planIntent),
      scheduling_policy_id: cdktf.stringToTerraform(this._schedulingPolicyId),
      scheduling_policy_target_resource_id: cdktf.stringToTerraform(this._schedulingPolicyTargetResourceId),
      filter: cdktf.listMapper(dataOciDatabaseSchedulingPolicyRecommendedScheduledActionsFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plan_intent: {
        value: cdktf.stringToHclTerraform(this._planIntent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scheduling_policy_id: {
        value: cdktf.stringToHclTerraform(this._schedulingPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scheduling_policy_target_resource_id: {
        value: cdktf.stringToHclTerraform(this._schedulingPolicyTargetResourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciDatabaseSchedulingPolicyRecommendedScheduledActionsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciDatabaseSchedulingPolicyRecommendedScheduledActionsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
