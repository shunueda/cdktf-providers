// https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.28/docs/data-sources/db_service_start_stop_schedule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTessellDbServiceStartStopScheduleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the schedule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.28/docs/data-sources/db_service_start_stop_schedule#id DataTessellDbServiceStartStopSchedule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataTessellDbServiceStartStopScheduleMetadata {
}

export function dataTessellDbServiceStartStopScheduleMetadataToTerraform(struct?: DataTessellDbServiceStartStopScheduleMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServiceStartStopScheduleMetadataToHclTerraform(struct?: DataTessellDbServiceStartStopScheduleMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServiceStartStopScheduleMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServiceStartStopScheduleMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServiceStartStopScheduleMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // schedule_counter - computed: true, optional: false, required: false
  public get scheduleCounter() {
    return this.getNumberAttribute('schedule_counter');
  }
}

export class DataTessellDbServiceStartStopScheduleMetadataList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServiceStartStopScheduleMetadataOutputReference {
    return new DataTessellDbServiceStartStopScheduleMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServiceStartStopScheduleScheduleInfoOneTime {
}

export function dataTessellDbServiceStartStopScheduleScheduleInfoOneTimeToTerraform(struct?: DataTessellDbServiceStartStopScheduleScheduleInfoOneTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServiceStartStopScheduleScheduleInfoOneTimeToHclTerraform(struct?: DataTessellDbServiceStartStopScheduleScheduleInfoOneTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServiceStartStopScheduleScheduleInfoOneTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServiceStartStopScheduleScheduleInfoOneTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServiceStartStopScheduleScheduleInfoOneTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // db_service_start_at - computed: true, optional: false, required: false
  public get dbServiceStartAt() {
    return this.getStringAttribute('db_service_start_at');
  }

  // db_service_stop_at - computed: true, optional: false, required: false
  public get dbServiceStopAt() {
    return this.getStringAttribute('db_service_stop_at');
  }
}

export class DataTessellDbServiceStartStopScheduleScheduleInfoOneTimeList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServiceStartStopScheduleScheduleInfoOneTimeOutputReference {
    return new DataTessellDbServiceStartStopScheduleScheduleInfoOneTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServiceStartStopScheduleScheduleInfoRecurringScheduleExpiry {
}

export function dataTessellDbServiceStartStopScheduleScheduleInfoRecurringScheduleExpiryToTerraform(struct?: DataTessellDbServiceStartStopScheduleScheduleInfoRecurringScheduleExpiry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServiceStartStopScheduleScheduleInfoRecurringScheduleExpiryToHclTerraform(struct?: DataTessellDbServiceStartStopScheduleScheduleInfoRecurringScheduleExpiry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServiceStartStopScheduleScheduleInfoRecurringScheduleExpiryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServiceStartStopScheduleScheduleInfoRecurringScheduleExpiry | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServiceStartStopScheduleScheduleInfoRecurringScheduleExpiry | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // after_occurrences - computed: true, optional: false, required: false
  public get afterOccurrences() {
    return this.getNumberAttribute('after_occurrences');
  }

  // never - computed: true, optional: false, required: false
  public get never() {
    return this.getBooleanAttribute('never');
  }

  // on - computed: true, optional: false, required: false
  public get on() {
    return this.getStringAttribute('on');
  }
}

export class DataTessellDbServiceStartStopScheduleScheduleInfoRecurringScheduleExpiryList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServiceStartStopScheduleScheduleInfoRecurringScheduleExpiryOutputReference {
    return new DataTessellDbServiceStartStopScheduleScheduleInfoRecurringScheduleExpiryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServiceStartStopScheduleScheduleInfoRecurringWeeklySchedule {
}

export function dataTessellDbServiceStartStopScheduleScheduleInfoRecurringWeeklyScheduleToTerraform(struct?: DataTessellDbServiceStartStopScheduleScheduleInfoRecurringWeeklySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServiceStartStopScheduleScheduleInfoRecurringWeeklyScheduleToHclTerraform(struct?: DataTessellDbServiceStartStopScheduleScheduleInfoRecurringWeeklySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServiceStartStopScheduleScheduleInfoRecurringWeeklyScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServiceStartStopScheduleScheduleInfoRecurringWeeklySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServiceStartStopScheduleScheduleInfoRecurringWeeklySchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // days - computed: true, optional: false, required: false
  public get days() {
    return this.getListAttribute('days');
  }
}

export class DataTessellDbServiceStartStopScheduleScheduleInfoRecurringWeeklyScheduleList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServiceStartStopScheduleScheduleInfoRecurringWeeklyScheduleOutputReference {
    return new DataTessellDbServiceStartStopScheduleScheduleInfoRecurringWeeklyScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServiceStartStopScheduleScheduleInfoRecurring {
}

export function dataTessellDbServiceStartStopScheduleScheduleInfoRecurringToTerraform(struct?: DataTessellDbServiceStartStopScheduleScheduleInfoRecurring): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServiceStartStopScheduleScheduleInfoRecurringToHclTerraform(struct?: DataTessellDbServiceStartStopScheduleScheduleInfoRecurring): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServiceStartStopScheduleScheduleInfoRecurringOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServiceStartStopScheduleScheduleInfoRecurring | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServiceStartStopScheduleScheduleInfoRecurring | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // daily_schedule - computed: true, optional: false, required: false
  public get dailySchedule() {
    return this.getBooleanAttribute('daily_schedule');
  }

  // db_service_start_at - computed: true, optional: false, required: false
  public get dbServiceStartAt() {
    return this.getStringAttribute('db_service_start_at');
  }

  // db_service_stop_at - computed: true, optional: false, required: false
  public get dbServiceStopAt() {
    return this.getStringAttribute('db_service_stop_at');
  }

  // schedule_expiry - computed: true, optional: false, required: false
  private _scheduleExpiry = new DataTessellDbServiceStartStopScheduleScheduleInfoRecurringScheduleExpiryList(this, "schedule_expiry", false);
  public get scheduleExpiry() {
    return this._scheduleExpiry;
  }

  // schedule_start_date - computed: true, optional: false, required: false
  public get scheduleStartDate() {
    return this.getStringAttribute('schedule_start_date');
  }

  // weekly_schedule - computed: true, optional: false, required: false
  private _weeklySchedule = new DataTessellDbServiceStartStopScheduleScheduleInfoRecurringWeeklyScheduleList(this, "weekly_schedule", false);
  public get weeklySchedule() {
    return this._weeklySchedule;
  }
}

export class DataTessellDbServiceStartStopScheduleScheduleInfoRecurringList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServiceStartStopScheduleScheduleInfoRecurringOutputReference {
    return new DataTessellDbServiceStartStopScheduleScheduleInfoRecurringOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServiceStartStopScheduleScheduleInfo {
}

export function dataTessellDbServiceStartStopScheduleScheduleInfoToTerraform(struct?: DataTessellDbServiceStartStopScheduleScheduleInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServiceStartStopScheduleScheduleInfoToHclTerraform(struct?: DataTessellDbServiceStartStopScheduleScheduleInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServiceStartStopScheduleScheduleInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServiceStartStopScheduleScheduleInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServiceStartStopScheduleScheduleInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // one_time - computed: true, optional: false, required: false
  private _oneTime = new DataTessellDbServiceStartStopScheduleScheduleInfoOneTimeList(this, "one_time", false);
  public get oneTime() {
    return this._oneTime;
  }

  // recurring - computed: true, optional: false, required: false
  private _recurring = new DataTessellDbServiceStartStopScheduleScheduleInfoRecurringList(this, "recurring", false);
  public get recurring() {
    return this._recurring;
  }
}

export class DataTessellDbServiceStartStopScheduleScheduleInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServiceStartStopScheduleScheduleInfoOutputReference {
    return new DataTessellDbServiceStartStopScheduleScheduleInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.28/docs/data-sources/db_service_start_stop_schedule tessell_db_service_start_stop_schedule}
*/
export class DataTessellDbServiceStartStopSchedule extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tessell_db_service_start_stop_schedule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTessellDbServiceStartStopSchedule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTessellDbServiceStartStopSchedule to import
  * @param importFromId The id of the existing DataTessellDbServiceStartStopSchedule that should be imported. Refer to the {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.28/docs/data-sources/db_service_start_stop_schedule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTessellDbServiceStartStopSchedule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tessell_db_service_start_stop_schedule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.28/docs/data-sources/db_service_start_stop_schedule tessell_db_service_start_stop_schedule} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTessellDbServiceStartStopScheduleConfig
  */
  public constructor(scope: Construct, id: string, config: DataTessellDbServiceStartStopScheduleConfig) {
    super(scope, id, {
      terraformResourceType: 'tessell_db_service_start_stop_schedule',
      terraformGeneratorMetadata: {
        providerName: 'tessell',
        providerVersion: '0.0.28',
        providerVersionConstraint: '0.0.28'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // date_created - computed: true, optional: false, required: false
  public get dateCreated() {
    return this.getStringAttribute('date_created');
  }

  // date_modified - computed: true, optional: false, required: false
  public get dateModified() {
    return this.getStringAttribute('date_modified');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // last_run - computed: true, optional: false, required: false
  public get lastRun() {
    return this.getStringAttribute('last_run');
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new DataTessellDbServiceStartStopScheduleMetadataList(this, "metadata", false);
  public get metadata() {
    return this._metadata;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // schedule_info - computed: true, optional: false, required: false
  private _scheduleInfo = new DataTessellDbServiceStartStopScheduleScheduleInfoList(this, "schedule_info", false);
  public get scheduleInfo() {
    return this._scheduleInfo;
  }

  // service_id - computed: true, optional: false, required: false
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
