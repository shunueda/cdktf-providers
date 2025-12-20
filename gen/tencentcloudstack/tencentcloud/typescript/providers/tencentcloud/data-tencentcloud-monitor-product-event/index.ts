// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/monitor_product_event
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudMonitorProductEventConfig extends cdktf.TerraformMetaArguments {
  /**
  * End timestamp for this query, eg:`1588232111`. Default start time is `now-3000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/monitor_product_event#end_time DataTencentcloudMonitorProductEvent#end_time}
  */
  readonly endTime?: number;
  /**
  * Event name filtering, such as `guest_reboot` indicates that the machine restart.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/monitor_product_event#event_name DataTencentcloudMonitorProductEvent#event_name}
  */
  readonly eventName?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/monitor_product_event#id DataTencentcloudMonitorProductEvent#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Affect objects, such as `ins-19708ino`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/monitor_product_event#instance_id DataTencentcloudMonitorProductEvent#instance_id}
  */
  readonly instanceId?: string[];
  /**
  * Alarm status configuration filter, 1means configured, 0(default) means not configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/monitor_product_event#is_alarm_config DataTencentcloudMonitorProductEvent#is_alarm_config}
  */
  readonly isAlarmConfig?: number;
  /**
  * Product type filtering, such as `cvm` for cloud server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/monitor_product_event#product_name DataTencentcloudMonitorProductEvent#product_name}
  */
  readonly productName?: string[];
  /**
  * Project ID filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/monitor_product_event#project_id DataTencentcloudMonitorProductEvent#project_id}
  */
  readonly projectId?: string[];
  /**
  * Region filter, such as `gz`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/monitor_product_event#region_list DataTencentcloudMonitorProductEvent#region_list}
  */
  readonly regionList?: string[];
  /**
  * Used to store results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/monitor_product_event#result_output_file DataTencentcloudMonitorProductEvent#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * Start timestamp for this query, eg:`1588230000`. Default start time is `now-3600`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/monitor_product_event#start_time DataTencentcloudMonitorProductEvent#start_time}
  */
  readonly startTime?: number;
  /**
  * Event status filter, value range `-`,`alarm`,`recover`, indicating recovered, unrecovered and stateless.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/monitor_product_event#status DataTencentcloudMonitorProductEvent#status}
  */
  readonly status?: string[];
  /**
  * Event type filtering, with value range `abnormal`,`status_change`, indicating state change and abnormal events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/monitor_product_event#type DataTencentcloudMonitorProductEvent#type}
  */
  readonly type?: string[];
  /**
  * dimensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/monitor_product_event#dimensions DataTencentcloudMonitorProductEvent#dimensions}
  */
  readonly dimensions?: DataTencentcloudMonitorProductEventDimensions[] | cdktf.IResolvable;
}
export interface DataTencentcloudMonitorProductEventListAdditionMsg {
}

export function dataTencentcloudMonitorProductEventListAdditionMsgToTerraform(struct?: DataTencentcloudMonitorProductEventListAdditionMsg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMonitorProductEventListAdditionMsgToHclTerraform(struct?: DataTencentcloudMonitorProductEventListAdditionMsg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMonitorProductEventListAdditionMsgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudMonitorProductEventListAdditionMsg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMonitorProductEventListAdditionMsg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataTencentcloudMonitorProductEventListAdditionMsgList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudMonitorProductEventListAdditionMsgOutputReference {
    return new DataTencentcloudMonitorProductEventListAdditionMsgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMonitorProductEventListDimensions {
}

export function dataTencentcloudMonitorProductEventListDimensionsToTerraform(struct?: DataTencentcloudMonitorProductEventListDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMonitorProductEventListDimensionsToHclTerraform(struct?: DataTencentcloudMonitorProductEventListDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMonitorProductEventListDimensionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudMonitorProductEventListDimensions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMonitorProductEventListDimensions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataTencentcloudMonitorProductEventListDimensionsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudMonitorProductEventListDimensionsOutputReference {
    return new DataTencentcloudMonitorProductEventListDimensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMonitorProductEventListGroupInfo {
}

export function dataTencentcloudMonitorProductEventListGroupInfoToTerraform(struct?: DataTencentcloudMonitorProductEventListGroupInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMonitorProductEventListGroupInfoToHclTerraform(struct?: DataTencentcloudMonitorProductEventListGroupInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMonitorProductEventListGroupInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudMonitorProductEventListGroupInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMonitorProductEventListGroupInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getStringAttribute('group_id');
  }

  // group_name - computed: true, optional: false, required: false
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
}

export class DataTencentcloudMonitorProductEventListGroupInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudMonitorProductEventListGroupInfoOutputReference {
    return new DataTencentcloudMonitorProductEventListGroupInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMonitorProductEventListStruct {
}

export function dataTencentcloudMonitorProductEventListStructToTerraform(struct?: DataTencentcloudMonitorProductEventListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMonitorProductEventListStructToHclTerraform(struct?: DataTencentcloudMonitorProductEventListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMonitorProductEventListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudMonitorProductEventListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMonitorProductEventListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // addition_msg - computed: true, optional: false, required: false
  private _additionMsg = new DataTencentcloudMonitorProductEventListAdditionMsgList(this, "addition_msg", false);
  public get additionMsg() {
    return this._additionMsg;
  }

  // dimensions - computed: true, optional: false, required: false
  private _dimensions = new DataTencentcloudMonitorProductEventListDimensionsList(this, "dimensions", false);
  public get dimensions() {
    return this._dimensions;
  }

  // event_cname - computed: true, optional: false, required: false
  public get eventCname() {
    return this.getStringAttribute('event_cname');
  }

  // event_ename - computed: true, optional: false, required: false
  public get eventEname() {
    return this.getStringAttribute('event_ename');
  }

  // event_id - computed: true, optional: false, required: false
  public get eventId() {
    return this.getNumberAttribute('event_id');
  }

  // event_name - computed: true, optional: false, required: false
  public get eventName() {
    return this.getStringAttribute('event_name');
  }

  // group_info - computed: true, optional: false, required: false
  private _groupInfo = new DataTencentcloudMonitorProductEventListGroupInfoList(this, "group_info", false);
  public get groupInfo() {
    return this._groupInfo;
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // instance_name - computed: true, optional: false, required: false
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }

  // is_alarm_config - computed: true, optional: false, required: false
  public get isAlarmConfig() {
    return this.getNumberAttribute('is_alarm_config');
  }

  // product_cname - computed: true, optional: false, required: false
  public get productCname() {
    return this.getStringAttribute('product_cname');
  }

  // product_ename - computed: true, optional: false, required: false
  public get productEname() {
    return this.getStringAttribute('product_ename');
  }

  // product_name - computed: true, optional: false, required: false
  public get productName() {
    return this.getStringAttribute('product_name');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // support_alarm - computed: true, optional: false, required: false
  public get supportAlarm() {
    return this.getNumberAttribute('support_alarm');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getNumberAttribute('update_time');
  }
}

export class DataTencentcloudMonitorProductEventListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudMonitorProductEventListStructOutputReference {
    return new DataTencentcloudMonitorProductEventListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMonitorProductEventDimensions {
  /**
  * Instance dimension name, eg: `deviceWanIp` for internet ip.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/monitor_product_event#name DataTencentcloudMonitorProductEvent#name}
  */
  readonly name?: string;
  /**
  * Instance dimension value, eg: `119.119.119.119` for internet ip.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/monitor_product_event#value DataTencentcloudMonitorProductEvent#value}
  */
  readonly value?: string;
}

export function dataTencentcloudMonitorProductEventDimensionsToTerraform(struct?: DataTencentcloudMonitorProductEventDimensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataTencentcloudMonitorProductEventDimensionsToHclTerraform(struct?: DataTencentcloudMonitorProductEventDimensions | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTencentcloudMonitorProductEventDimensionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudMonitorProductEventDimensions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMonitorProductEventDimensions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataTencentcloudMonitorProductEventDimensionsList extends cdktf.ComplexList {
  public internalValue? : DataTencentcloudMonitorProductEventDimensions[] | cdktf.IResolvable

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
  public get(index: number): DataTencentcloudMonitorProductEventDimensionsOutputReference {
    return new DataTencentcloudMonitorProductEventDimensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/monitor_product_event tencentcloud_monitor_product_event}
*/
export class DataTencentcloudMonitorProductEvent extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_monitor_product_event";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudMonitorProductEvent resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudMonitorProductEvent to import
  * @param importFromId The id of the existing DataTencentcloudMonitorProductEvent that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/monitor_product_event#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudMonitorProductEvent to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_monitor_product_event", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/monitor_product_event tencentcloud_monitor_product_event} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudMonitorProductEventConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudMonitorProductEventConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_monitor_product_event',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.47',
        providerVersionConstraint: '1.82.47'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._endTime = config.endTime;
    this._eventName = config.eventName;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._isAlarmConfig = config.isAlarmConfig;
    this._productName = config.productName;
    this._projectId = config.projectId;
    this._regionList = config.regionList;
    this._resultOutputFile = config.resultOutputFile;
    this._startTime = config.startTime;
    this._status = config.status;
    this._type = config.type;
    this._dimensions.internalValue = config.dimensions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // event_name - computed: false, optional: true, required: false
  private _eventName?: string[]; 
  public get eventName() {
    return this.getListAttribute('event_name');
  }
  public set eventName(value: string[]) {
    this._eventName = value;
  }
  public resetEventName() {
    this._eventName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventNameInput() {
    return this._eventName;
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
  private _instanceId?: string[]; 
  public get instanceId() {
    return this.getListAttribute('instance_id');
  }
  public set instanceId(value: string[]) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // is_alarm_config - computed: false, optional: true, required: false
  private _isAlarmConfig?: number; 
  public get isAlarmConfig() {
    return this.getNumberAttribute('is_alarm_config');
  }
  public set isAlarmConfig(value: number) {
    this._isAlarmConfig = value;
  }
  public resetIsAlarmConfig() {
    this._isAlarmConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAlarmConfigInput() {
    return this._isAlarmConfig;
  }

  // list - computed: true, optional: false, required: false
  private _list = new DataTencentcloudMonitorProductEventListStructList(this, "list", false);
  public get list() {
    return this._list;
  }

  // product_name - computed: false, optional: true, required: false
  private _productName?: string[]; 
  public get productName() {
    return this.getListAttribute('product_name');
  }
  public set productName(value: string[]) {
    this._productName = value;
  }
  public resetProductName() {
    this._productName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productNameInput() {
    return this._productName;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string[]; 
  public get projectId() {
    return this.getListAttribute('project_id');
  }
  public set projectId(value: string[]) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // region_list - computed: false, optional: true, required: false
  private _regionList?: string[]; 
  public get regionList() {
    return this.getListAttribute('region_list');
  }
  public set regionList(value: string[]) {
    this._regionList = value;
  }
  public resetRegionList() {
    this._regionList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionListInput() {
    return this._regionList;
  }

  // result_output_file - computed: false, optional: true, required: false
  private _resultOutputFile?: string; 
  public get resultOutputFile() {
    return this.getStringAttribute('result_output_file');
  }
  public set resultOutputFile(value: string) {
    this._resultOutputFile = value;
  }
  public resetResultOutputFile() {
    this._resultOutputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultOutputFileInput() {
    return this._resultOutputFile;
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

  // status - computed: false, optional: true, required: false
  private _status?: string[]; 
  public get status() {
    return this.getListAttribute('status');
  }
  public set status(value: string[]) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string[]; 
  public get type() {
    return this.getListAttribute('type');
  }
  public set type(value: string[]) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // dimensions - computed: false, optional: true, required: false
  private _dimensions = new DataTencentcloudMonitorProductEventDimensionsList(this, "dimensions", false);
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: DataTencentcloudMonitorProductEventDimensions[] | cdktf.IResolvable) {
    this._dimensions.internalValue = value;
  }
  public resetDimensions() {
    this._dimensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      end_time: cdktf.numberToTerraform(this._endTime),
      event_name: cdktf.listMapper(cdktf.stringToTerraform, false)(this._eventName),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.listMapper(cdktf.stringToTerraform, false)(this._instanceId),
      is_alarm_config: cdktf.numberToTerraform(this._isAlarmConfig),
      product_name: cdktf.listMapper(cdktf.stringToTerraform, false)(this._productName),
      project_id: cdktf.listMapper(cdktf.stringToTerraform, false)(this._projectId),
      region_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._regionList),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      start_time: cdktf.numberToTerraform(this._startTime),
      status: cdktf.listMapper(cdktf.stringToTerraform, false)(this._status),
      type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._type),
      dimensions: cdktf.listMapper(dataTencentcloudMonitorProductEventDimensionsToTerraform, true)(this._dimensions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      end_time: {
        value: cdktf.numberToHclTerraform(this._endTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      event_name: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._eventName),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_id: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._instanceId),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      is_alarm_config: {
        value: cdktf.numberToHclTerraform(this._isAlarmConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      product_name: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._productName),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      project_id: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._projectId),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      region_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._regionList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
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
      status: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._status),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      type: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._type),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      dimensions: {
        value: cdktf.listMapperHcl(dataTencentcloudMonitorProductEventDimensionsToHclTerraform, true)(this._dimensions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataTencentcloudMonitorProductEventDimensionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
