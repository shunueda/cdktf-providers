// https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/ces_event_details_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpentelekomcloudCesEventDetailsV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/ces_event_details_v1#event_level DataOpentelekomcloudCesEventDetailsV1#event_level}
  */
  readonly eventLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/ces_event_details_v1#event_name DataOpentelekomcloudCesEventDetailsV1#event_name}
  */
  readonly eventName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/ces_event_details_v1#event_source DataOpentelekomcloudCesEventDetailsV1#event_source}
  */
  readonly eventSource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/ces_event_details_v1#event_state DataOpentelekomcloudCesEventDetailsV1#event_state}
  */
  readonly eventState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/ces_event_details_v1#event_type DataOpentelekomcloudCesEventDetailsV1#event_type}
  */
  readonly eventType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/ces_event_details_v1#event_user DataOpentelekomcloudCesEventDetailsV1#event_user}
  */
  readonly eventUser?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/ces_event_details_v1#from DataOpentelekomcloudCesEventDetailsV1#from}
  */
  readonly from?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/ces_event_details_v1#id DataOpentelekomcloudCesEventDetailsV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/ces_event_details_v1#limit DataOpentelekomcloudCesEventDetailsV1#limit}
  */
  readonly limit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/ces_event_details_v1#to DataOpentelekomcloudCesEventDetailsV1#to}
  */
  readonly to?: number;
}
export interface DataOpentelekomcloudCesEventDetailsV1EventInfoDetail {
}

export function dataOpentelekomcloudCesEventDetailsV1EventInfoDetailToTerraform(struct?: DataOpentelekomcloudCesEventDetailsV1EventInfoDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpentelekomcloudCesEventDetailsV1EventInfoDetailToHclTerraform(struct?: DataOpentelekomcloudCesEventDetailsV1EventInfoDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpentelekomcloudCesEventDetailsV1EventInfoDetail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpentelekomcloudCesEventDetailsV1EventInfoDetail | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content - computed: true, optional: false, required: false
  public get content() {
    return this.getStringAttribute('content');
  }

  // event_level - computed: true, optional: false, required: false
  public get eventLevel() {
    return this.getStringAttribute('event_level');
  }

  // event_state - computed: true, optional: false, required: false
  public get eventState() {
    return this.getStringAttribute('event_state');
  }

  // event_type - computed: true, optional: false, required: false
  public get eventType() {
    return this.getStringAttribute('event_type');
  }

  // event_user - computed: true, optional: false, required: false
  public get eventUser() {
    return this.getStringAttribute('event_user');
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getStringAttribute('group_id');
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // resource_name - computed: true, optional: false, required: false
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }
}

export class DataOpentelekomcloudCesEventDetailsV1EventInfoDetailList extends cdktf.ComplexList {

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
  public get(index: number): DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference {
    return new DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpentelekomcloudCesEventDetailsV1EventInfo {
}

export function dataOpentelekomcloudCesEventDetailsV1EventInfoToTerraform(struct?: DataOpentelekomcloudCesEventDetailsV1EventInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpentelekomcloudCesEventDetailsV1EventInfoToHclTerraform(struct?: DataOpentelekomcloudCesEventDetailsV1EventInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpentelekomcloudCesEventDetailsV1EventInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpentelekomcloudCesEventDetailsV1EventInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // detail - computed: true, optional: false, required: false
  private _detail = new DataOpentelekomcloudCesEventDetailsV1EventInfoDetailList(this, "detail", false);
  public get detail() {
    return this._detail;
  }

  // event_id - computed: true, optional: false, required: false
  public get eventId() {
    return this.getStringAttribute('event_id');
  }

  // event_name - computed: true, optional: false, required: false
  public get eventName() {
    return this.getStringAttribute('event_name');
  }

  // event_source - computed: true, optional: false, required: false
  public get eventSource() {
    return this.getStringAttribute('event_source');
  }

  // time - computed: true, optional: false, required: false
  public get time() {
    return this.getNumberAttribute('time');
  }
}

export class DataOpentelekomcloudCesEventDetailsV1EventInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference {
    return new DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpentelekomcloudCesEventDetailsV1MetaData {
}

export function dataOpentelekomcloudCesEventDetailsV1MetaDataToTerraform(struct?: DataOpentelekomcloudCesEventDetailsV1MetaData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpentelekomcloudCesEventDetailsV1MetaDataToHclTerraform(struct?: DataOpentelekomcloudCesEventDetailsV1MetaData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpentelekomcloudCesEventDetailsV1MetaData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpentelekomcloudCesEventDetailsV1MetaData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // total - computed: true, optional: false, required: false
  public get total() {
    return this.getNumberAttribute('total');
  }
}

export class DataOpentelekomcloudCesEventDetailsV1MetaDataList extends cdktf.ComplexList {

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
  public get(index: number): DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference {
    return new DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/ces_event_details_v1 opentelekomcloud_ces_event_details_v1}
*/
export class DataOpentelekomcloudCesEventDetailsV1 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_ces_event_details_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOpentelekomcloudCesEventDetailsV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOpentelekomcloudCesEventDetailsV1 to import
  * @param importFromId The id of the existing DataOpentelekomcloudCesEventDetailsV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/ces_event_details_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOpentelekomcloudCesEventDetailsV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opentelekomcloud_ces_event_details_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/ces_event_details_v1 opentelekomcloud_ces_event_details_v1} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpentelekomcloudCesEventDetailsV1Config
  */
  public constructor(scope: Construct, id: string, config: DataOpentelekomcloudCesEventDetailsV1Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_ces_event_details_v1',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud',
        providerVersion: '1.36.54',
        providerVersionConstraint: '1.36.54'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._eventLevel = config.eventLevel;
    this._eventName = config.eventName;
    this._eventSource = config.eventSource;
    this._eventState = config.eventState;
    this._eventType = config.eventType;
    this._eventUser = config.eventUser;
    this._from = config.from;
    this._id = config.id;
    this._limit = config.limit;
    this._to = config.to;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // event_info - computed: true, optional: false, required: false
  private _eventInfo = new DataOpentelekomcloudCesEventDetailsV1EventInfoList(this, "event_info", false);
  public get eventInfo() {
    return this._eventInfo;
  }

  // event_level - computed: false, optional: true, required: false
  private _eventLevel?: string; 
  public get eventLevel() {
    return this.getStringAttribute('event_level');
  }
  public set eventLevel(value: string) {
    this._eventLevel = value;
  }
  public resetEventLevel() {
    this._eventLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventLevelInput() {
    return this._eventLevel;
  }

  // event_name - computed: false, optional: false, required: true
  private _eventName?: string; 
  public get eventName() {
    return this.getStringAttribute('event_name');
  }
  public set eventName(value: string) {
    this._eventName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventNameInput() {
    return this._eventName;
  }

  // event_source - computed: false, optional: true, required: false
  private _eventSource?: string; 
  public get eventSource() {
    return this.getStringAttribute('event_source');
  }
  public set eventSource(value: string) {
    this._eventSource = value;
  }
  public resetEventSource() {
    this._eventSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventSourceInput() {
    return this._eventSource;
  }

  // event_sources - computed: true, optional: false, required: false
  public get eventSources() {
    return this.getListAttribute('event_sources');
  }

  // event_state - computed: false, optional: true, required: false
  private _eventState?: string; 
  public get eventState() {
    return this.getStringAttribute('event_state');
  }
  public set eventState(value: string) {
    this._eventState = value;
  }
  public resetEventState() {
    this._eventState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventStateInput() {
    return this._eventState;
  }

  // event_type - computed: false, optional: false, required: true
  private _eventType?: string; 
  public get eventType() {
    return this.getStringAttribute('event_type');
  }
  public set eventType(value: string) {
    this._eventType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTypeInput() {
    return this._eventType;
  }

  // event_user - computed: false, optional: true, required: false
  private _eventUser?: string; 
  public get eventUser() {
    return this.getStringAttribute('event_user');
  }
  public set eventUser(value: string) {
    this._eventUser = value;
  }
  public resetEventUser() {
    this._eventUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventUserInput() {
    return this._eventUser;
  }

  // event_users - computed: true, optional: false, required: false
  public get eventUsers() {
    return this.getListAttribute('event_users');
  }

  // from - computed: false, optional: true, required: false
  private _from?: number; 
  public get from() {
    return this.getNumberAttribute('from');
  }
  public set from(value: number) {
    this._from = value;
  }
  public resetFrom() {
    this._from = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
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

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // meta_data - computed: true, optional: false, required: false
  private _metaData = new DataOpentelekomcloudCesEventDetailsV1MetaDataList(this, "meta_data", false);
  public get metaData() {
    return this._metaData;
  }

  // to - computed: false, optional: true, required: false
  private _to?: number; 
  public get to() {
    return this.getNumberAttribute('to');
  }
  public set to(value: number) {
    this._to = value;
  }
  public resetTo() {
    this._to = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      event_level: cdktf.stringToTerraform(this._eventLevel),
      event_name: cdktf.stringToTerraform(this._eventName),
      event_source: cdktf.stringToTerraform(this._eventSource),
      event_state: cdktf.stringToTerraform(this._eventState),
      event_type: cdktf.stringToTerraform(this._eventType),
      event_user: cdktf.stringToTerraform(this._eventUser),
      from: cdktf.numberToTerraform(this._from),
      id: cdktf.stringToTerraform(this._id),
      limit: cdktf.numberToTerraform(this._limit),
      to: cdktf.numberToTerraform(this._to),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      event_level: {
        value: cdktf.stringToHclTerraform(this._eventLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      event_name: {
        value: cdktf.stringToHclTerraform(this._eventName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      event_source: {
        value: cdktf.stringToHclTerraform(this._eventSource),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      event_state: {
        value: cdktf.stringToHclTerraform(this._eventState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      event_type: {
        value: cdktf.stringToHclTerraform(this._eventType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      event_user: {
        value: cdktf.stringToHclTerraform(this._eventUser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      from: {
        value: cdktf.numberToHclTerraform(this._from),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      limit: {
        value: cdktf.numberToHclTerraform(this._limit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      to: {
        value: cdktf.numberToHclTerraform(this._to),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
