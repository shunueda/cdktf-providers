// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/disaster_recovery_automatic_dr_configurations
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDisasterRecoveryAutomaticDrConfigurationsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/disaster_recovery_automatic_dr_configurations#automatic_dr_configuration_id DataOciDisasterRecoveryAutomaticDrConfigurations#automatic_dr_configuration_id}
  */
  readonly automaticDrConfigurationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/disaster_recovery_automatic_dr_configurations#display_name DataOciDisasterRecoveryAutomaticDrConfigurations#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/disaster_recovery_automatic_dr_configurations#dr_protection_group_id DataOciDisasterRecoveryAutomaticDrConfigurations#dr_protection_group_id}
  */
  readonly drProtectionGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/disaster_recovery_automatic_dr_configurations#id DataOciDisasterRecoveryAutomaticDrConfigurations#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/disaster_recovery_automatic_dr_configurations#lifecycle_state_not_equal_to DataOciDisasterRecoveryAutomaticDrConfigurations#lifecycle_state_not_equal_to}
  */
  readonly lifecycleStateNotEqualTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/disaster_recovery_automatic_dr_configurations#state DataOciDisasterRecoveryAutomaticDrConfigurations#state}
  */
  readonly state?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/disaster_recovery_automatic_dr_configurations#filter DataOciDisasterRecoveryAutomaticDrConfigurations#filter}
  */
  readonly filter?: DataOciDisasterRecoveryAutomaticDrConfigurationsFilter[] | cdktf.IResolvable;
}
export interface DataOciDisasterRecoveryAutomaticDrConfigurationsAutomaticDrConfigurationCollectionItemsMembers {
}

export function dataOciDisasterRecoveryAutomaticDrConfigurationsAutomaticDrConfigurationCollectionItemsMembersToTerraform(struct?: DataOciDisasterRecoveryAutomaticDrConfigurationsAutomaticDrConfigurationCollectionItemsMembers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDisasterRecoveryAutomaticDrConfigurationsAutomaticDrConfigurationCollectionItemsMembersToHclTerraform(struct?: DataOciDisasterRecoveryAutomaticDrConfigurationsAutomaticDrConfigurationCollectionItemsMembers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDisasterRecoveryAutomaticDrConfigurationsAutomaticDrConfigurationCollectionItemsMembersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDisasterRecoveryAutomaticDrConfigurationsAutomaticDrConfigurationCollectionItemsMembers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDisasterRecoveryAutomaticDrConfigurationsAutomaticDrConfigurationCollectionItemsMembers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_auto_failover_enabled - computed: true, optional: false, required: false
  public get isAutoFailoverEnabled() {
    return this.getBooleanAttribute('is_auto_failover_enabled');
  }

  // is_auto_switchover_enabled - computed: true, optional: false, required: false
  public get isAutoSwitchoverEnabled() {
    return this.getBooleanAttribute('is_auto_switchover_enabled');
  }

  // member_id - computed: true, optional: false, required: false
  public get memberId() {
    return this.getStringAttribute('member_id');
  }

  // member_type - computed: true, optional: false, required: false
  public get memberType() {
    return this.getStringAttribute('member_type');
  }
}

export class DataOciDisasterRecoveryAutomaticDrConfigurationsAutomaticDrConfigurationCollectionItemsMembersList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDisasterRecoveryAutomaticDrConfigurationsAutomaticDrConfigurationCollectionItemsMembersOutputReference {
    return new DataOciDisasterRecoveryAutomaticDrConfigurationsAutomaticDrConfigurationCollectionItemsMembersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDisasterRecoveryAutomaticDrConfigurationsAutomaticDrConfigurationCollectionItems {
}

export function dataOciDisasterRecoveryAutomaticDrConfigurationsAutomaticDrConfigurationCollectionItemsToTerraform(struct?: DataOciDisasterRecoveryAutomaticDrConfigurationsAutomaticDrConfigurationCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDisasterRecoveryAutomaticDrConfigurationsAutomaticDrConfigurationCollectionItemsToHclTerraform(struct?: DataOciDisasterRecoveryAutomaticDrConfigurationsAutomaticDrConfigurationCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDisasterRecoveryAutomaticDrConfigurationsAutomaticDrConfigurationCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDisasterRecoveryAutomaticDrConfigurationsAutomaticDrConfigurationCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDisasterRecoveryAutomaticDrConfigurationsAutomaticDrConfigurationCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // default_failover_dr_plan_id - computed: true, optional: false, required: false
  public get defaultFailoverDrPlanId() {
    return this.getStringAttribute('default_failover_dr_plan_id');
  }

  // default_switchover_dr_plan_id - computed: true, optional: false, required: false
  public get defaultSwitchoverDrPlanId() {
    return this.getStringAttribute('default_switchover_dr_plan_id');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // dr_protection_group_id - computed: true, optional: false, required: false
  public get drProtectionGroupId() {
    return this.getStringAttribute('dr_protection_group_id');
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

  // last_automatic_dr_execution_submit_details - computed: true, optional: false, required: false
  public get lastAutomaticDrExecutionSubmitDetails() {
    return this.getStringAttribute('last_automatic_dr_execution_submit_details');
  }

  // last_automatic_dr_execution_submit_status - computed: true, optional: false, required: false
  public get lastAutomaticDrExecutionSubmitStatus() {
    return this.getStringAttribute('last_automatic_dr_execution_submit_status');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // members - computed: true, optional: false, required: false
  private _members = new DataOciDisasterRecoveryAutomaticDrConfigurationsAutomaticDrConfigurationCollectionItemsMembersList(this, "members", false);
  public get members() {
    return this._members;
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

  // time_last_automatic_dr_execution_submit_attempt - computed: true, optional: false, required: false
  public get timeLastAutomaticDrExecutionSubmitAttempt() {
    return this.getStringAttribute('time_last_automatic_dr_execution_submit_attempt');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }
}

export class DataOciDisasterRecoveryAutomaticDrConfigurationsAutomaticDrConfigurationCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDisasterRecoveryAutomaticDrConfigurationsAutomaticDrConfigurationCollectionItemsOutputReference {
    return new DataOciDisasterRecoveryAutomaticDrConfigurationsAutomaticDrConfigurationCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDisasterRecoveryAutomaticDrConfigurationsAutomaticDrConfigurationCollection {
}

export function dataOciDisasterRecoveryAutomaticDrConfigurationsAutomaticDrConfigurationCollectionToTerraform(struct?: DataOciDisasterRecoveryAutomaticDrConfigurationsAutomaticDrConfigurationCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDisasterRecoveryAutomaticDrConfigurationsAutomaticDrConfigurationCollectionToHclTerraform(struct?: DataOciDisasterRecoveryAutomaticDrConfigurationsAutomaticDrConfigurationCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDisasterRecoveryAutomaticDrConfigurationsAutomaticDrConfigurationCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDisasterRecoveryAutomaticDrConfigurationsAutomaticDrConfigurationCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDisasterRecoveryAutomaticDrConfigurationsAutomaticDrConfigurationCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciDisasterRecoveryAutomaticDrConfigurationsAutomaticDrConfigurationCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciDisasterRecoveryAutomaticDrConfigurationsAutomaticDrConfigurationCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDisasterRecoveryAutomaticDrConfigurationsAutomaticDrConfigurationCollectionOutputReference {
    return new DataOciDisasterRecoveryAutomaticDrConfigurationsAutomaticDrConfigurationCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDisasterRecoveryAutomaticDrConfigurationsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/disaster_recovery_automatic_dr_configurations#name DataOciDisasterRecoveryAutomaticDrConfigurations#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/disaster_recovery_automatic_dr_configurations#regex DataOciDisasterRecoveryAutomaticDrConfigurations#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/disaster_recovery_automatic_dr_configurations#values DataOciDisasterRecoveryAutomaticDrConfigurations#values}
  */
  readonly values: string[];
}

export function dataOciDisasterRecoveryAutomaticDrConfigurationsFilterToTerraform(struct?: DataOciDisasterRecoveryAutomaticDrConfigurationsFilter | cdktf.IResolvable): any {
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


export function dataOciDisasterRecoveryAutomaticDrConfigurationsFilterToHclTerraform(struct?: DataOciDisasterRecoveryAutomaticDrConfigurationsFilter | cdktf.IResolvable): any {
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

export class DataOciDisasterRecoveryAutomaticDrConfigurationsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDisasterRecoveryAutomaticDrConfigurationsFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciDisasterRecoveryAutomaticDrConfigurationsFilter | cdktf.IResolvable | undefined) {
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

export class DataOciDisasterRecoveryAutomaticDrConfigurationsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciDisasterRecoveryAutomaticDrConfigurationsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciDisasterRecoveryAutomaticDrConfigurationsFilterOutputReference {
    return new DataOciDisasterRecoveryAutomaticDrConfigurationsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/disaster_recovery_automatic_dr_configurations oci_disaster_recovery_automatic_dr_configurations}
*/
export class DataOciDisasterRecoveryAutomaticDrConfigurations extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_disaster_recovery_automatic_dr_configurations";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDisasterRecoveryAutomaticDrConfigurations resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDisasterRecoveryAutomaticDrConfigurations to import
  * @param importFromId The id of the existing DataOciDisasterRecoveryAutomaticDrConfigurations that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/disaster_recovery_automatic_dr_configurations#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDisasterRecoveryAutomaticDrConfigurations to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_disaster_recovery_automatic_dr_configurations", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/disaster_recovery_automatic_dr_configurations oci_disaster_recovery_automatic_dr_configurations} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDisasterRecoveryAutomaticDrConfigurationsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDisasterRecoveryAutomaticDrConfigurationsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_disaster_recovery_automatic_dr_configurations',
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
    this._automaticDrConfigurationId = config.automaticDrConfigurationId;
    this._displayName = config.displayName;
    this._drProtectionGroupId = config.drProtectionGroupId;
    this._id = config.id;
    this._lifecycleStateNotEqualTo = config.lifecycleStateNotEqualTo;
    this._state = config.state;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // automatic_dr_configuration_collection - computed: true, optional: false, required: false
  private _automaticDrConfigurationCollection = new DataOciDisasterRecoveryAutomaticDrConfigurationsAutomaticDrConfigurationCollectionList(this, "automatic_dr_configuration_collection", false);
  public get automaticDrConfigurationCollection() {
    return this._automaticDrConfigurationCollection;
  }

  // automatic_dr_configuration_id - computed: false, optional: true, required: false
  private _automaticDrConfigurationId?: string; 
  public get automaticDrConfigurationId() {
    return this.getStringAttribute('automatic_dr_configuration_id');
  }
  public set automaticDrConfigurationId(value: string) {
    this._automaticDrConfigurationId = value;
  }
  public resetAutomaticDrConfigurationId() {
    this._automaticDrConfigurationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticDrConfigurationIdInput() {
    return this._automaticDrConfigurationId;
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

  // dr_protection_group_id - computed: false, optional: false, required: true
  private _drProtectionGroupId?: string; 
  public get drProtectionGroupId() {
    return this.getStringAttribute('dr_protection_group_id');
  }
  public set drProtectionGroupId(value: string) {
    this._drProtectionGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get drProtectionGroupIdInput() {
    return this._drProtectionGroupId;
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

  // lifecycle_state_not_equal_to - computed: false, optional: true, required: false
  private _lifecycleStateNotEqualTo?: string; 
  public get lifecycleStateNotEqualTo() {
    return this.getStringAttribute('lifecycle_state_not_equal_to');
  }
  public set lifecycleStateNotEqualTo(value: string) {
    this._lifecycleStateNotEqualTo = value;
  }
  public resetLifecycleStateNotEqualTo() {
    this._lifecycleStateNotEqualTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleStateNotEqualToInput() {
    return this._lifecycleStateNotEqualTo;
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

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciDisasterRecoveryAutomaticDrConfigurationsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciDisasterRecoveryAutomaticDrConfigurationsFilter[] | cdktf.IResolvable) {
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
      automatic_dr_configuration_id: cdktf.stringToTerraform(this._automaticDrConfigurationId),
      display_name: cdktf.stringToTerraform(this._displayName),
      dr_protection_group_id: cdktf.stringToTerraform(this._drProtectionGroupId),
      id: cdktf.stringToTerraform(this._id),
      lifecycle_state_not_equal_to: cdktf.stringToTerraform(this._lifecycleStateNotEqualTo),
      state: cdktf.stringToTerraform(this._state),
      filter: cdktf.listMapper(dataOciDisasterRecoveryAutomaticDrConfigurationsFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      automatic_dr_configuration_id: {
        value: cdktf.stringToHclTerraform(this._automaticDrConfigurationId),
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
      dr_protection_group_id: {
        value: cdktf.stringToHclTerraform(this._drProtectionGroupId),
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
      lifecycle_state_not_equal_to: {
        value: cdktf.stringToHclTerraform(this._lifecycleStateNotEqualTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciDisasterRecoveryAutomaticDrConfigurationsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciDisasterRecoveryAutomaticDrConfigurationsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
