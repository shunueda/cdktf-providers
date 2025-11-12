// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/event_series_audit_logs_summary
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDnacenterEventSeriesAuditLogsSummaryConfig extends cdktf.TerraformMetaArguments {
  /**
  * category query parameter. Audit Log notification's event category. Supported values: INFO, WARN, ERROR, ALERT, TASK_PROGRESS, TASK_FAILURE, TASK_COMPLETE, COMMAND, QUERY, CONVERSATION
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/event_series_audit_logs_summary#category DataDnacenterEventSeriesAuditLogsSummary#category}
  */
  readonly category?: string;
  /**
  * context query parameter. Audit Log notification's event correlationId.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/event_series_audit_logs_summary#context DataDnacenterEventSeriesAuditLogsSummary#context}
  */
  readonly context?: string;
  /**
  * description query parameter. String full/partial search (Provided input string is case insensitively matched for records).
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/event_series_audit_logs_summary#description DataDnacenterEventSeriesAuditLogsSummary#description}
  */
  readonly description?: string;
  /**
  * deviceId query parameter. Audit Log notification's deviceId.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/event_series_audit_logs_summary#device_id DataDnacenterEventSeriesAuditLogsSummary#device_id}
  */
  readonly deviceId?: string;
  /**
  * domain query parameter. Audit Log notification's event domain.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/event_series_audit_logs_summary#domain DataDnacenterEventSeriesAuditLogsSummary#domain}
  */
  readonly domain?: string;
  /**
  * endTime query parameter. End Time in milliseconds since Epoch Eg. 1597961437211 (when provided startTime is mandatory)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/event_series_audit_logs_summary#end_time DataDnacenterEventSeriesAuditLogsSummary#end_time}
  */
  readonly endTime?: number;
  /**
  * eventHierarchy query parameter. Audit Log notification's event eventHierarchy. Example: "US.CA.San Jose" OR "US.CA" OR "CA.San Jose" Delimiter for hierarchy separation is ".".
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/event_series_audit_logs_summary#event_hierarchy DataDnacenterEventSeriesAuditLogsSummary#event_hierarchy}
  */
  readonly eventHierarchy?: string;
  /**
  * eventId query parameter. Audit Log notification's event ID. 
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/event_series_audit_logs_summary#event_id DataDnacenterEventSeriesAuditLogsSummary#event_id}
  */
  readonly eventId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/event_series_audit_logs_summary#id DataDnacenterEventSeriesAuditLogsSummary#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * instanceId query parameter. InstanceID of the Audit Log.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/event_series_audit_logs_summary#instance_id DataDnacenterEventSeriesAuditLogsSummary#instance_id}
  */
  readonly instanceId?: string;
  /**
  * isParentOnly query parameter. Parameter to filter parent only audit-logs.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/event_series_audit_logs_summary#is_parent_only DataDnacenterEventSeriesAuditLogsSummary#is_parent_only}
  */
  readonly isParentOnly?: boolean | cdktf.IResolvable;
  /**
  * isSystemEvents query parameter. Parameter to filter system generated audit-logs.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/event_series_audit_logs_summary#is_system_events DataDnacenterEventSeriesAuditLogsSummary#is_system_events}
  */
  readonly isSystemEvents?: boolean | cdktf.IResolvable;
  /**
  * name query parameter. Audit Log notification event name.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/event_series_audit_logs_summary#name DataDnacenterEventSeriesAuditLogsSummary#name}
  */
  readonly name?: string;
  /**
  * parentInstanceId query parameter. Parent Audit Log record's instanceID.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/event_series_audit_logs_summary#parent_instance_id DataDnacenterEventSeriesAuditLogsSummary#parent_instance_id}
  */
  readonly parentInstanceId?: string;
  /**
  * severity query parameter. Audit Log notification's event severity. Supported values: 1, 2, 3, 4, 5.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/event_series_audit_logs_summary#severity DataDnacenterEventSeriesAuditLogsSummary#severity}
  */
  readonly severity?: string;
  /**
  * siteId query parameter. Audit Log notification's siteId.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/event_series_audit_logs_summary#site_id DataDnacenterEventSeriesAuditLogsSummary#site_id}
  */
  readonly siteId?: string;
  /**
  * source query parameter. Audit Log notification's event source.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/event_series_audit_logs_summary#source DataDnacenterEventSeriesAuditLogsSummary#source}
  */
  readonly source?: string;
  /**
  * startTime query parameter. Start Time in milliseconds since Epoch Eg. 1597950637211 (when provided endTime is mandatory)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/event_series_audit_logs_summary#start_time DataDnacenterEventSeriesAuditLogsSummary#start_time}
  */
  readonly startTime?: number;
  /**
  * subDomain query parameter. Audit Log notification's event sub-domain.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/event_series_audit_logs_summary#sub_domain DataDnacenterEventSeriesAuditLogsSummary#sub_domain}
  */
  readonly subDomain?: string;
  /**
  * userId query parameter. Audit Log notification's event userId.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/event_series_audit_logs_summary#user_id DataDnacenterEventSeriesAuditLogsSummary#user_id}
  */
  readonly userId?: string;
}
export interface DataDnacenterEventSeriesAuditLogsSummaryItems {
}

export function dataDnacenterEventSeriesAuditLogsSummaryItemsToTerraform(struct?: DataDnacenterEventSeriesAuditLogsSummaryItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterEventSeriesAuditLogsSummaryItemsToHclTerraform(struct?: DataDnacenterEventSeriesAuditLogsSummaryItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterEventSeriesAuditLogsSummaryItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterEventSeriesAuditLogsSummaryItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterEventSeriesAuditLogsSummaryItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }

  // max_timestamp - computed: true, optional: false, required: false
  public get maxTimestamp() {
    return this.getNumberAttribute('max_timestamp');
  }

  // min_timestamp - computed: true, optional: false, required: false
  public get minTimestamp() {
    return this.getNumberAttribute('min_timestamp');
  }
}

export class DataDnacenterEventSeriesAuditLogsSummaryItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterEventSeriesAuditLogsSummaryItemsOutputReference {
    return new DataDnacenterEventSeriesAuditLogsSummaryItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/event_series_audit_logs_summary dnacenter_event_series_audit_logs_summary}
*/
export class DataDnacenterEventSeriesAuditLogsSummary extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_event_series_audit_logs_summary";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDnacenterEventSeriesAuditLogsSummary resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDnacenterEventSeriesAuditLogsSummary to import
  * @param importFromId The id of the existing DataDnacenterEventSeriesAuditLogsSummary that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/event_series_audit_logs_summary#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDnacenterEventSeriesAuditLogsSummary to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_event_series_audit_logs_summary", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/event_series_audit_logs_summary dnacenter_event_series_audit_logs_summary} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDnacenterEventSeriesAuditLogsSummaryConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDnacenterEventSeriesAuditLogsSummaryConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_event_series_audit_logs_summary',
      terraformGeneratorMetadata: {
        providerName: 'dnacenter',
        providerVersion: '1.1.21',
        providerVersionConstraint: '1.1.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._category = config.category;
    this._context = config.context;
    this._description = config.description;
    this._deviceId = config.deviceId;
    this._domain = config.domain;
    this._endTime = config.endTime;
    this._eventHierarchy = config.eventHierarchy;
    this._eventId = config.eventId;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._isParentOnly = config.isParentOnly;
    this._isSystemEvents = config.isSystemEvents;
    this._name = config.name;
    this._parentInstanceId = config.parentInstanceId;
    this._severity = config.severity;
    this._siteId = config.siteId;
    this._source = config.source;
    this._startTime = config.startTime;
    this._subDomain = config.subDomain;
    this._userId = config.userId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // category - computed: false, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // context - computed: false, optional: true, required: false
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  public resetContext() {
    this._context = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // description - computed: false, optional: true, required: false
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

  // device_id - computed: false, optional: true, required: false
  private _deviceId?: string; 
  public get deviceId() {
    return this.getStringAttribute('device_id');
  }
  public set deviceId(value: string) {
    this._deviceId = value;
  }
  public resetDeviceId() {
    this._deviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdInput() {
    return this._deviceId;
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // end_time - computed: false, optional: true, required: false
  private _endTime?: number; 
  public get endTime() {
    return this.getNumberAttribute('end_time');
  }
  public set endTime(value: number) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // event_hierarchy - computed: false, optional: true, required: false
  private _eventHierarchy?: string; 
  public get eventHierarchy() {
    return this.getStringAttribute('event_hierarchy');
  }
  public set eventHierarchy(value: string) {
    this._eventHierarchy = value;
  }
  public resetEventHierarchy() {
    this._eventHierarchy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventHierarchyInput() {
    return this._eventHierarchy;
  }

  // event_id - computed: false, optional: true, required: false
  private _eventId?: string; 
  public get eventId() {
    return this.getStringAttribute('event_id');
  }
  public set eventId(value: string) {
    this._eventId = value;
  }
  public resetEventId() {
    this._eventId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventIdInput() {
    return this._eventId;
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

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // is_parent_only - computed: false, optional: true, required: false
  private _isParentOnly?: boolean | cdktf.IResolvable; 
  public get isParentOnly() {
    return this.getBooleanAttribute('is_parent_only');
  }
  public set isParentOnly(value: boolean | cdktf.IResolvable) {
    this._isParentOnly = value;
  }
  public resetIsParentOnly() {
    this._isParentOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isParentOnlyInput() {
    return this._isParentOnly;
  }

  // is_system_events - computed: false, optional: true, required: false
  private _isSystemEvents?: boolean | cdktf.IResolvable; 
  public get isSystemEvents() {
    return this.getBooleanAttribute('is_system_events');
  }
  public set isSystemEvents(value: boolean | cdktf.IResolvable) {
    this._isSystemEvents = value;
  }
  public resetIsSystemEvents() {
    this._isSystemEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSystemEventsInput() {
    return this._isSystemEvents;
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataDnacenterEventSeriesAuditLogsSummaryItemsList(this, "items", false);
  public get items() {
    return this._items;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // parent_instance_id - computed: false, optional: true, required: false
  private _parentInstanceId?: string; 
  public get parentInstanceId() {
    return this.getStringAttribute('parent_instance_id');
  }
  public set parentInstanceId(value: string) {
    this._parentInstanceId = value;
  }
  public resetParentInstanceId() {
    this._parentInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInstanceIdInput() {
    return this._parentInstanceId;
  }

  // severity - computed: false, optional: true, required: false
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // site_id - computed: false, optional: true, required: false
  private _siteId?: string; 
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
  public set siteId(value: string) {
    this._siteId = value;
  }
  public resetSiteId() {
    this._siteId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: number; 
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }
  public set startTime(value: number) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // sub_domain - computed: false, optional: true, required: false
  private _subDomain?: string; 
  public get subDomain() {
    return this.getStringAttribute('sub_domain');
  }
  public set subDomain(value: string) {
    this._subDomain = value;
  }
  public resetSubDomain() {
    this._subDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subDomainInput() {
    return this._subDomain;
  }

  // user_id - computed: false, optional: true, required: false
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  public resetUserId() {
    this._userId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      category: cdktf.stringToTerraform(this._category),
      context: cdktf.stringToTerraform(this._context),
      description: cdktf.stringToTerraform(this._description),
      device_id: cdktf.stringToTerraform(this._deviceId),
      domain: cdktf.stringToTerraform(this._domain),
      end_time: cdktf.numberToTerraform(this._endTime),
      event_hierarchy: cdktf.stringToTerraform(this._eventHierarchy),
      event_id: cdktf.stringToTerraform(this._eventId),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      is_parent_only: cdktf.booleanToTerraform(this._isParentOnly),
      is_system_events: cdktf.booleanToTerraform(this._isSystemEvents),
      name: cdktf.stringToTerraform(this._name),
      parent_instance_id: cdktf.stringToTerraform(this._parentInstanceId),
      severity: cdktf.stringToTerraform(this._severity),
      site_id: cdktf.stringToTerraform(this._siteId),
      source: cdktf.stringToTerraform(this._source),
      start_time: cdktf.numberToTerraform(this._startTime),
      sub_domain: cdktf.stringToTerraform(this._subDomain),
      user_id: cdktf.stringToTerraform(this._userId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      category: {
        value: cdktf.stringToHclTerraform(this._category),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      context: {
        value: cdktf.stringToHclTerraform(this._context),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_id: {
        value: cdktf.stringToHclTerraform(this._deviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      end_time: {
        value: cdktf.numberToHclTerraform(this._endTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      event_hierarchy: {
        value: cdktf.stringToHclTerraform(this._eventHierarchy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      event_id: {
        value: cdktf.stringToHclTerraform(this._eventId),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_parent_only: {
        value: cdktf.booleanToHclTerraform(this._isParentOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_system_events: {
        value: cdktf.booleanToHclTerraform(this._isSystemEvents),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent_instance_id: {
        value: cdktf.stringToHclTerraform(this._parentInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      severity: {
        value: cdktf.stringToHclTerraform(this._severity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site_id: {
        value: cdktf.stringToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source: {
        value: cdktf.stringToHclTerraform(this._source),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_time: {
        value: cdktf.numberToHclTerraform(this._startTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sub_domain: {
        value: cdktf.stringToHclTerraform(this._subDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_id: {
        value: cdktf.stringToHclTerraform(this._userId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
