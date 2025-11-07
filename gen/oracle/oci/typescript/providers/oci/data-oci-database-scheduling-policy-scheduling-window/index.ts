// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_scheduling_policy_scheduling_window
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatabaseSchedulingPolicySchedulingWindowConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_scheduling_policy_scheduling_window#scheduling_policy_id DataOciDatabaseSchedulingPolicySchedulingWindow#scheduling_policy_id}
  */
  readonly schedulingPolicyId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_scheduling_policy_scheduling_window#scheduling_window_id DataOciDatabaseSchedulingPolicySchedulingWindow#scheduling_window_id}
  */
  readonly schedulingWindowId: string;
}
export interface DataOciDatabaseSchedulingPolicySchedulingWindowWindowPreferenceDaysOfWeek {
}

export function dataOciDatabaseSchedulingPolicySchedulingWindowWindowPreferenceDaysOfWeekToTerraform(struct?: DataOciDatabaseSchedulingPolicySchedulingWindowWindowPreferenceDaysOfWeek): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseSchedulingPolicySchedulingWindowWindowPreferenceDaysOfWeekToHclTerraform(struct?: DataOciDatabaseSchedulingPolicySchedulingWindowWindowPreferenceDaysOfWeek): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseSchedulingPolicySchedulingWindowWindowPreferenceDaysOfWeekOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseSchedulingPolicySchedulingWindowWindowPreferenceDaysOfWeek | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseSchedulingPolicySchedulingWindowWindowPreferenceDaysOfWeek | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataOciDatabaseSchedulingPolicySchedulingWindowWindowPreferenceDaysOfWeekList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseSchedulingPolicySchedulingWindowWindowPreferenceDaysOfWeekOutputReference {
    return new DataOciDatabaseSchedulingPolicySchedulingWindowWindowPreferenceDaysOfWeekOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseSchedulingPolicySchedulingWindowWindowPreferenceMonths {
}

export function dataOciDatabaseSchedulingPolicySchedulingWindowWindowPreferenceMonthsToTerraform(struct?: DataOciDatabaseSchedulingPolicySchedulingWindowWindowPreferenceMonths): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseSchedulingPolicySchedulingWindowWindowPreferenceMonthsToHclTerraform(struct?: DataOciDatabaseSchedulingPolicySchedulingWindowWindowPreferenceMonths): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseSchedulingPolicySchedulingWindowWindowPreferenceMonthsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseSchedulingPolicySchedulingWindowWindowPreferenceMonths | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseSchedulingPolicySchedulingWindowWindowPreferenceMonths | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataOciDatabaseSchedulingPolicySchedulingWindowWindowPreferenceMonthsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseSchedulingPolicySchedulingWindowWindowPreferenceMonthsOutputReference {
    return new DataOciDatabaseSchedulingPolicySchedulingWindowWindowPreferenceMonthsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseSchedulingPolicySchedulingWindowWindowPreference {
}

export function dataOciDatabaseSchedulingPolicySchedulingWindowWindowPreferenceToTerraform(struct?: DataOciDatabaseSchedulingPolicySchedulingWindowWindowPreference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseSchedulingPolicySchedulingWindowWindowPreferenceToHclTerraform(struct?: DataOciDatabaseSchedulingPolicySchedulingWindowWindowPreference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseSchedulingPolicySchedulingWindowWindowPreferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseSchedulingPolicySchedulingWindowWindowPreference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseSchedulingPolicySchedulingWindowWindowPreference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // days_of_week - computed: true, optional: false, required: false
  private _daysOfWeek = new DataOciDatabaseSchedulingPolicySchedulingWindowWindowPreferenceDaysOfWeekList(this, "days_of_week", false);
  public get daysOfWeek() {
    return this._daysOfWeek;
  }

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getNumberAttribute('duration');
  }

  // is_enforced_duration - computed: true, optional: false, required: false
  public get isEnforcedDuration() {
    return this.getBooleanAttribute('is_enforced_duration');
  }

  // months - computed: true, optional: false, required: false
  private _months = new DataOciDatabaseSchedulingPolicySchedulingWindowWindowPreferenceMonthsList(this, "months", false);
  public get months() {
    return this._months;
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }

  // weeks_of_month - computed: true, optional: false, required: false
  public get weeksOfMonth() {
    return this.getNumberListAttribute('weeks_of_month');
  }
}

export class DataOciDatabaseSchedulingPolicySchedulingWindowWindowPreferenceList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseSchedulingPolicySchedulingWindowWindowPreferenceOutputReference {
    return new DataOciDatabaseSchedulingPolicySchedulingWindowWindowPreferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_scheduling_policy_scheduling_window oci_database_scheduling_policy_scheduling_window}
*/
export class DataOciDatabaseSchedulingPolicySchedulingWindow extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_scheduling_policy_scheduling_window";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDatabaseSchedulingPolicySchedulingWindow resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDatabaseSchedulingPolicySchedulingWindow to import
  * @param importFromId The id of the existing DataOciDatabaseSchedulingPolicySchedulingWindow that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_scheduling_policy_scheduling_window#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDatabaseSchedulingPolicySchedulingWindow to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_scheduling_policy_scheduling_window", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_scheduling_policy_scheduling_window oci_database_scheduling_policy_scheduling_window} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatabaseSchedulingPolicySchedulingWindowConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDatabaseSchedulingPolicySchedulingWindowConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_scheduling_policy_scheduling_window',
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
    this._schedulingPolicyId = config.schedulingPolicyId;
    this._schedulingWindowId = config.schedulingWindowId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
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

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
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

  // scheduling_window_id - computed: false, optional: false, required: true
  private _schedulingWindowId?: string; 
  public get schedulingWindowId() {
    return this.getStringAttribute('scheduling_window_id');
  }
  public set schedulingWindowId(value: string) {
    this._schedulingWindowId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingWindowIdInput() {
    return this._schedulingWindowId;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_next_scheduling_window_starts - computed: true, optional: false, required: false
  public get timeNextSchedulingWindowStarts() {
    return this.getStringAttribute('time_next_scheduling_window_starts');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // window_preference - computed: true, optional: false, required: false
  private _windowPreference = new DataOciDatabaseSchedulingPolicySchedulingWindowWindowPreferenceList(this, "window_preference", false);
  public get windowPreference() {
    return this._windowPreference;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      scheduling_policy_id: cdktf.stringToTerraform(this._schedulingPolicyId),
      scheduling_window_id: cdktf.stringToTerraform(this._schedulingWindowId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      scheduling_policy_id: {
        value: cdktf.stringToHclTerraform(this._schedulingPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scheduling_window_id: {
        value: cdktf.stringToHclTerraform(this._schedulingWindowId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
