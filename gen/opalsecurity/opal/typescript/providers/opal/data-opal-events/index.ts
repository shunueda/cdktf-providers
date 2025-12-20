// https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/data-sources/events
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpalEventsConfig extends cdktf.TerraformMetaArguments {
  /**
  * An actor filter for the events. Supply the ID of the actor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/data-sources/events#actor_filter DataOpalEvents#actor_filter}
  */
  readonly actorFilter?: string;
  /**
  * An API filter for the events. Supply the name and preview of the API token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/data-sources/events#api_token_filter DataOpalEvents#api_token_filter}
  */
  readonly apiTokenFilter?: string;
  /**
  * The pagination cursor value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/data-sources/events#cursor DataOpalEvents#cursor}
  */
  readonly cursor?: string;
  /**
  * An end date filter for the events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/data-sources/events#end_date_filter DataOpalEvents#end_date_filter}
  */
  readonly endDateFilter?: string;
  /**
  * An event type filter for the events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/data-sources/events#event_type_filter DataOpalEvents#event_type_filter}
  */
  readonly eventTypeFilter?: string;
  /**
  * An object filter for the events. Supply the ID of the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/data-sources/events#object_filter DataOpalEvents#object_filter}
  */
  readonly objectFilter?: string;
  /**
  * Number of results to return per page. Default is 200.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/data-sources/events#page_size DataOpalEvents#page_size}
  */
  readonly pageSize?: number;
  /**
  * A start date filter for the events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/data-sources/events#start_date_filter DataOpalEvents#start_date_filter}
  */
  readonly startDateFilter?: string;
}
export interface DataOpalEventsResultsSubEvents {
}

export function dataOpalEventsResultsSubEventsToTerraform(struct?: DataOpalEventsResultsSubEvents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalEventsResultsSubEventsToHclTerraform(struct?: DataOpalEventsResultsSubEvents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalEventsResultsSubEventsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpalEventsResultsSubEvents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalEventsResultsSubEvents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // sub_event_type - computed: true, optional: false, required: false
  public get subEventType() {
    return this.getStringAttribute('sub_event_type');
  }
}

export class DataOpalEventsResultsSubEventsList extends cdktf.ComplexList {

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
  public get(index: number): DataOpalEventsResultsSubEventsOutputReference {
    return new DataOpalEventsResultsSubEventsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpalEventsResults {
}

export function dataOpalEventsResultsToTerraform(struct?: DataOpalEventsResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalEventsResultsToHclTerraform(struct?: DataOpalEventsResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalEventsResultsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpalEventsResults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalEventsResults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // actor_email - computed: true, optional: false, required: false
  public get actorEmail() {
    return this.getStringAttribute('actor_email');
  }

  // actor_ip_address - computed: true, optional: false, required: false
  public get actorIpAddress() {
    return this.getStringAttribute('actor_ip_address');
  }

  // actor_name - computed: true, optional: false, required: false
  public get actorName() {
    return this.getStringAttribute('actor_name');
  }

  // actor_user_id - computed: true, optional: false, required: false
  public get actorUserId() {
    return this.getStringAttribute('actor_user_id');
  }

  // api_token_name - computed: true, optional: false, required: false
  public get apiTokenName() {
    return this.getStringAttribute('api_token_name');
  }

  // api_token_preview - computed: true, optional: false, required: false
  public get apiTokenPreview() {
    return this.getStringAttribute('api_token_preview');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // event_id - computed: true, optional: false, required: false
  public get eventId() {
    return this.getStringAttribute('event_id');
  }

  // event_type - computed: true, optional: false, required: false
  public get eventType() {
    return this.getStringAttribute('event_type');
  }

  // sub_events - computed: true, optional: false, required: false
  private _subEvents = new DataOpalEventsResultsSubEventsList(this, "sub_events", false);
  public get subEvents() {
    return this._subEvents;
  }
}

export class DataOpalEventsResultsList extends cdktf.ComplexList {

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
  public get(index: number): DataOpalEventsResultsOutputReference {
    return new DataOpalEventsResultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/data-sources/events opal_events}
*/
export class DataOpalEvents extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opal_events";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOpalEvents resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOpalEvents to import
  * @param importFromId The id of the existing DataOpalEvents that should be imported. Refer to the {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/data-sources/events#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOpalEvents to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opal_events", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/data-sources/events opal_events} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpalEventsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOpalEventsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'opal_events',
      terraformGeneratorMetadata: {
        providerName: 'opal',
        providerVersion: '3.4.0',
        providerVersionConstraint: '3.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._actorFilter = config.actorFilter;
    this._apiTokenFilter = config.apiTokenFilter;
    this._cursor = config.cursor;
    this._endDateFilter = config.endDateFilter;
    this._eventTypeFilter = config.eventTypeFilter;
    this._objectFilter = config.objectFilter;
    this._pageSize = config.pageSize;
    this._startDateFilter = config.startDateFilter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // actor_filter - computed: false, optional: true, required: false
  private _actorFilter?: string; 
  public get actorFilter() {
    return this.getStringAttribute('actor_filter');
  }
  public set actorFilter(value: string) {
    this._actorFilter = value;
  }
  public resetActorFilter() {
    this._actorFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actorFilterInput() {
    return this._actorFilter;
  }

  // api_token_filter - computed: false, optional: true, required: false
  private _apiTokenFilter?: string; 
  public get apiTokenFilter() {
    return this.getStringAttribute('api_token_filter');
  }
  public set apiTokenFilter(value: string) {
    this._apiTokenFilter = value;
  }
  public resetApiTokenFilter() {
    this._apiTokenFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTokenFilterInput() {
    return this._apiTokenFilter;
  }

  // cursor - computed: false, optional: true, required: false
  private _cursor?: string; 
  public get cursor() {
    return this.getStringAttribute('cursor');
  }
  public set cursor(value: string) {
    this._cursor = value;
  }
  public resetCursor() {
    this._cursor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cursorInput() {
    return this._cursor;
  }

  // end_date_filter - computed: false, optional: true, required: false
  private _endDateFilter?: string; 
  public get endDateFilter() {
    return this.getStringAttribute('end_date_filter');
  }
  public set endDateFilter(value: string) {
    this._endDateFilter = value;
  }
  public resetEndDateFilter() {
    this._endDateFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endDateFilterInput() {
    return this._endDateFilter;
  }

  // event_type_filter - computed: false, optional: true, required: false
  private _eventTypeFilter?: string; 
  public get eventTypeFilter() {
    return this.getStringAttribute('event_type_filter');
  }
  public set eventTypeFilter(value: string) {
    this._eventTypeFilter = value;
  }
  public resetEventTypeFilter() {
    this._eventTypeFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTypeFilterInput() {
    return this._eventTypeFilter;
  }

  // next - computed: true, optional: false, required: false
  public get next() {
    return this.getStringAttribute('next');
  }

  // object_filter - computed: false, optional: true, required: false
  private _objectFilter?: string; 
  public get objectFilter() {
    return this.getStringAttribute('object_filter');
  }
  public set objectFilter(value: string) {
    this._objectFilter = value;
  }
  public resetObjectFilter() {
    this._objectFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectFilterInput() {
    return this._objectFilter;
  }

  // page_size - computed: false, optional: true, required: false
  private _pageSize?: number; 
  public get pageSize() {
    return this.getNumberAttribute('page_size');
  }
  public set pageSize(value: number) {
    this._pageSize = value;
  }
  public resetPageSize() {
    this._pageSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageSizeInput() {
    return this._pageSize;
  }

  // previous - computed: true, optional: false, required: false
  public get previous() {
    return this.getStringAttribute('previous');
  }

  // results - computed: true, optional: false, required: false
  private _results = new DataOpalEventsResultsList(this, "results", false);
  public get results() {
    return this._results;
  }

  // start_date_filter - computed: false, optional: true, required: false
  private _startDateFilter?: string; 
  public get startDateFilter() {
    return this.getStringAttribute('start_date_filter');
  }
  public set startDateFilter(value: string) {
    this._startDateFilter = value;
  }
  public resetStartDateFilter() {
    this._startDateFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startDateFilterInput() {
    return this._startDateFilter;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      actor_filter: cdktf.stringToTerraform(this._actorFilter),
      api_token_filter: cdktf.stringToTerraform(this._apiTokenFilter),
      cursor: cdktf.stringToTerraform(this._cursor),
      end_date_filter: cdktf.stringToTerraform(this._endDateFilter),
      event_type_filter: cdktf.stringToTerraform(this._eventTypeFilter),
      object_filter: cdktf.stringToTerraform(this._objectFilter),
      page_size: cdktf.numberToTerraform(this._pageSize),
      start_date_filter: cdktf.stringToTerraform(this._startDateFilter),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      actor_filter: {
        value: cdktf.stringToHclTerraform(this._actorFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_token_filter: {
        value: cdktf.stringToHclTerraform(this._apiTokenFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cursor: {
        value: cdktf.stringToHclTerraform(this._cursor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      end_date_filter: {
        value: cdktf.stringToHclTerraform(this._endDateFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      event_type_filter: {
        value: cdktf.stringToHclTerraform(this._eventTypeFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      object_filter: {
        value: cdktf.stringToHclTerraform(this._objectFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      page_size: {
        value: cdktf.numberToHclTerraform(this._pageSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      start_date_filter: {
        value: cdktf.stringToHclTerraform(this._startDateFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
