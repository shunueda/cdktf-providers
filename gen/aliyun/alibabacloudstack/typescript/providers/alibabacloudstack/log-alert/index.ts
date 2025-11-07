// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/log_alert
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogAlertConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/log_alert#alert_description LogAlert#alert_description}
  */
  readonly alertDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/log_alert#alert_displayname LogAlert#alert_displayname}
  */
  readonly alertDisplayname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/log_alert#alert_name LogAlert#alert_name}
  */
  readonly alertName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/log_alert#condition LogAlert#condition}
  */
  readonly condition: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/log_alert#dashboard LogAlert#dashboard}
  */
  readonly dashboard: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/log_alert#id LogAlert#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/log_alert#mute_until LogAlert#mute_until}
  */
  readonly muteUntil?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/log_alert#notify_threshold LogAlert#notify_threshold}
  */
  readonly notifyThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/log_alert#project_name LogAlert#project_name}
  */
  readonly projectName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/log_alert#schedule_interval LogAlert#schedule_interval}
  */
  readonly scheduleInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/log_alert#schedule_type LogAlert#schedule_type}
  */
  readonly scheduleType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/log_alert#throttling LogAlert#throttling}
  */
  readonly throttling?: string;
  /**
  * notification_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/log_alert#notification_list LogAlert#notification_list}
  */
  readonly notificationList: LogAlertNotificationListStruct[] | cdktf.IResolvable;
  /**
  * query_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/log_alert#query_list LogAlert#query_list}
  */
  readonly queryList: LogAlertQueryListStruct[] | cdktf.IResolvable;
}
export interface LogAlertNotificationListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/log_alert#content LogAlert#content}
  */
  readonly content: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/log_alert#email_list LogAlert#email_list}
  */
  readonly emailList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/log_alert#headers LogAlert#headers}
  */
  readonly headers?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/log_alert#method LogAlert#method}
  */
  readonly method?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/log_alert#mobile_list LogAlert#mobile_list}
  */
  readonly mobileList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/log_alert#service_uri LogAlert#service_uri}
  */
  readonly serviceUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/log_alert#type LogAlert#type}
  */
  readonly type: string;
}

export function logAlertNotificationListStructToTerraform(struct?: LogAlertNotificationListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    email_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.emailList),
    headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.headers),
    method: cdktf.stringToTerraform(struct!.method),
    mobile_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mobileList),
    service_uri: cdktf.stringToTerraform(struct!.serviceUri),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function logAlertNotificationListStructToHclTerraform(struct?: LogAlertNotificationListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.emailList),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.headers),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mobile_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.mobileList),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    service_uri: {
      value: cdktf.stringToHclTerraform(struct!.serviceUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogAlertNotificationListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogAlertNotificationListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._emailList !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailList = this._emailList;
    }
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._mobileList !== undefined) {
      hasAnyValues = true;
      internalValueResult.mobileList = this._mobileList;
    }
    if (this._serviceUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceUri = this._serviceUri;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogAlertNotificationListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content = undefined;
      this._emailList = undefined;
      this._headers = undefined;
      this._method = undefined;
      this._mobileList = undefined;
      this._serviceUri = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content = value.content;
      this._emailList = value.emailList;
      this._headers = value.headers;
      this._method = value.method;
      this._mobileList = value.mobileList;
      this._serviceUri = value.serviceUri;
      this._type = value.type;
    }
  }

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // email_list - computed: false, optional: true, required: false
  private _emailList?: string[]; 
  public get emailList() {
    return cdktf.Fn.tolist(this.getListAttribute('email_list'));
  }
  public set emailList(value: string[]) {
    this._emailList = value;
  }
  public resetEmailList() {
    this._emailList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailListInput() {
    return this._emailList;
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: { [key: string]: string }; 
  public get headers() {
    return this.getStringMapAttribute('headers');
  }
  public set headers(value: { [key: string]: string }) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // mobile_list - computed: false, optional: true, required: false
  private _mobileList?: string[]; 
  public get mobileList() {
    return cdktf.Fn.tolist(this.getListAttribute('mobile_list'));
  }
  public set mobileList(value: string[]) {
    this._mobileList = value;
  }
  public resetMobileList() {
    this._mobileList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mobileListInput() {
    return this._mobileList;
  }

  // service_uri - computed: false, optional: true, required: false
  private _serviceUri?: string; 
  public get serviceUri() {
    return this.getStringAttribute('service_uri');
  }
  public set serviceUri(value: string) {
    this._serviceUri = value;
  }
  public resetServiceUri() {
    this._serviceUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceUriInput() {
    return this._serviceUri;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class LogAlertNotificationListStructList extends cdktf.ComplexList {
  public internalValue? : LogAlertNotificationListStruct[] | cdktf.IResolvable

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
  public get(index: number): LogAlertNotificationListStructOutputReference {
    return new LogAlertNotificationListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogAlertQueryListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/log_alert#chart_title LogAlert#chart_title}
  */
  readonly chartTitle: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/log_alert#end LogAlert#end}
  */
  readonly end: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/log_alert#logstore LogAlert#logstore}
  */
  readonly logstore: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/log_alert#query LogAlert#query}
  */
  readonly query: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/log_alert#start LogAlert#start}
  */
  readonly start: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/log_alert#time_span_type LogAlert#time_span_type}
  */
  readonly timeSpanType?: string;
}

export function logAlertQueryListStructToTerraform(struct?: LogAlertQueryListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    chart_title: cdktf.stringToTerraform(struct!.chartTitle),
    end: cdktf.stringToTerraform(struct!.end),
    logstore: cdktf.stringToTerraform(struct!.logstore),
    query: cdktf.stringToTerraform(struct!.query),
    start: cdktf.stringToTerraform(struct!.start),
    time_span_type: cdktf.stringToTerraform(struct!.timeSpanType),
  }
}


export function logAlertQueryListStructToHclTerraform(struct?: LogAlertQueryListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    chart_title: {
      value: cdktf.stringToHclTerraform(struct!.chartTitle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end: {
      value: cdktf.stringToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logstore: {
      value: cdktf.stringToHclTerraform(struct!.logstore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start: {
      value: cdktf.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_span_type: {
      value: cdktf.stringToHclTerraform(struct!.timeSpanType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogAlertQueryListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogAlertQueryListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chartTitle !== undefined) {
      hasAnyValues = true;
      internalValueResult.chartTitle = this._chartTitle;
    }
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._logstore !== undefined) {
      hasAnyValues = true;
      internalValueResult.logstore = this._logstore;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    if (this._timeSpanType !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeSpanType = this._timeSpanType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogAlertQueryListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._chartTitle = undefined;
      this._end = undefined;
      this._logstore = undefined;
      this._query = undefined;
      this._start = undefined;
      this._timeSpanType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._chartTitle = value.chartTitle;
      this._end = value.end;
      this._logstore = value.logstore;
      this._query = value.query;
      this._start = value.start;
      this._timeSpanType = value.timeSpanType;
    }
  }

  // chart_title - computed: false, optional: false, required: true
  private _chartTitle?: string; 
  public get chartTitle() {
    return this.getStringAttribute('chart_title');
  }
  public set chartTitle(value: string) {
    this._chartTitle = value;
  }
  // Temporarily expose input value. Use with caution.
  public get chartTitleInput() {
    return this._chartTitle;
  }

  // end - computed: false, optional: false, required: true
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // logstore - computed: false, optional: false, required: true
  private _logstore?: string; 
  public get logstore() {
    return this.getStringAttribute('logstore');
  }
  public set logstore(value: string) {
    this._logstore = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logstoreInput() {
    return this._logstore;
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // start - computed: false, optional: false, required: true
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }

  // time_span_type - computed: false, optional: true, required: false
  private _timeSpanType?: string; 
  public get timeSpanType() {
    return this.getStringAttribute('time_span_type');
  }
  public set timeSpanType(value: string) {
    this._timeSpanType = value;
  }
  public resetTimeSpanType() {
    this._timeSpanType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeSpanTypeInput() {
    return this._timeSpanType;
  }
}

export class LogAlertQueryListStructList extends cdktf.ComplexList {
  public internalValue? : LogAlertQueryListStruct[] | cdktf.IResolvable

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
  public get(index: number): LogAlertQueryListStructOutputReference {
    return new LogAlertQueryListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/log_alert alibabacloudstack_log_alert}
*/
export class LogAlert extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_log_alert";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LogAlert resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogAlert to import
  * @param importFromId The id of the existing LogAlert that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/log_alert#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogAlert to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_log_alert", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/log_alert alibabacloudstack_log_alert} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogAlertConfig
  */
  public constructor(scope: Construct, id: string, config: LogAlertConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_log_alert',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.19'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alertDescription = config.alertDescription;
    this._alertDisplayname = config.alertDisplayname;
    this._alertName = config.alertName;
    this._condition = config.condition;
    this._dashboard = config.dashboard;
    this._id = config.id;
    this._muteUntil = config.muteUntil;
    this._notifyThreshold = config.notifyThreshold;
    this._projectName = config.projectName;
    this._scheduleInterval = config.scheduleInterval;
    this._scheduleType = config.scheduleType;
    this._throttling = config.throttling;
    this._notificationList.internalValue = config.notificationList;
    this._queryList.internalValue = config.queryList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alert_description - computed: false, optional: true, required: false
  private _alertDescription?: string; 
  public get alertDescription() {
    return this.getStringAttribute('alert_description');
  }
  public set alertDescription(value: string) {
    this._alertDescription = value;
  }
  public resetAlertDescription() {
    this._alertDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertDescriptionInput() {
    return this._alertDescription;
  }

  // alert_displayname - computed: false, optional: false, required: true
  private _alertDisplayname?: string; 
  public get alertDisplayname() {
    return this.getStringAttribute('alert_displayname');
  }
  public set alertDisplayname(value: string) {
    this._alertDisplayname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alertDisplaynameInput() {
    return this._alertDisplayname;
  }

  // alert_name - computed: false, optional: false, required: true
  private _alertName?: string; 
  public get alertName() {
    return this.getStringAttribute('alert_name');
  }
  public set alertName(value: string) {
    this._alertName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alertNameInput() {
    return this._alertName;
  }

  // condition - computed: false, optional: false, required: true
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // dashboard - computed: false, optional: false, required: true
  private _dashboard?: string; 
  public get dashboard() {
    return this.getStringAttribute('dashboard');
  }
  public set dashboard(value: string) {
    this._dashboard = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardInput() {
    return this._dashboard;
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

  // mute_until - computed: true, optional: true, required: false
  private _muteUntil?: number; 
  public get muteUntil() {
    return this.getNumberAttribute('mute_until');
  }
  public set muteUntil(value: number) {
    this._muteUntil = value;
  }
  public resetMuteUntil() {
    this._muteUntil = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get muteUntilInput() {
    return this._muteUntil;
  }

  // notify_threshold - computed: false, optional: true, required: false
  private _notifyThreshold?: number; 
  public get notifyThreshold() {
    return this.getNumberAttribute('notify_threshold');
  }
  public set notifyThreshold(value: number) {
    this._notifyThreshold = value;
  }
  public resetNotifyThreshold() {
    this._notifyThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyThresholdInput() {
    return this._notifyThreshold;
  }

  // project_name - computed: false, optional: false, required: true
  private _projectName?: string; 
  public get projectName() {
    return this.getStringAttribute('project_name');
  }
  public set projectName(value: string) {
    this._projectName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName;
  }

  // schedule_interval - computed: false, optional: true, required: false
  private _scheduleInterval?: string; 
  public get scheduleInterval() {
    return this.getStringAttribute('schedule_interval');
  }
  public set scheduleInterval(value: string) {
    this._scheduleInterval = value;
  }
  public resetScheduleInterval() {
    this._scheduleInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleIntervalInput() {
    return this._scheduleInterval;
  }

  // schedule_type - computed: false, optional: true, required: false
  private _scheduleType?: string; 
  public get scheduleType() {
    return this.getStringAttribute('schedule_type');
  }
  public set scheduleType(value: string) {
    this._scheduleType = value;
  }
  public resetScheduleType() {
    this._scheduleType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleTypeInput() {
    return this._scheduleType;
  }

  // throttling - computed: false, optional: true, required: false
  private _throttling?: string; 
  public get throttling() {
    return this.getStringAttribute('throttling');
  }
  public set throttling(value: string) {
    this._throttling = value;
  }
  public resetThrottling() {
    this._throttling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throttlingInput() {
    return this._throttling;
  }

  // notification_list - computed: false, optional: false, required: true
  private _notificationList = new LogAlertNotificationListStructList(this, "notification_list", false);
  public get notificationList() {
    return this._notificationList;
  }
  public putNotificationList(value: LogAlertNotificationListStruct[] | cdktf.IResolvable) {
    this._notificationList.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationListInput() {
    return this._notificationList.internalValue;
  }

  // query_list - computed: false, optional: false, required: true
  private _queryList = new LogAlertQueryListStructList(this, "query_list", false);
  public get queryList() {
    return this._queryList;
  }
  public putQueryList(value: LogAlertQueryListStruct[] | cdktf.IResolvable) {
    this._queryList.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryListInput() {
    return this._queryList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alert_description: cdktf.stringToTerraform(this._alertDescription),
      alert_displayname: cdktf.stringToTerraform(this._alertDisplayname),
      alert_name: cdktf.stringToTerraform(this._alertName),
      condition: cdktf.stringToTerraform(this._condition),
      dashboard: cdktf.stringToTerraform(this._dashboard),
      id: cdktf.stringToTerraform(this._id),
      mute_until: cdktf.numberToTerraform(this._muteUntil),
      notify_threshold: cdktf.numberToTerraform(this._notifyThreshold),
      project_name: cdktf.stringToTerraform(this._projectName),
      schedule_interval: cdktf.stringToTerraform(this._scheduleInterval),
      schedule_type: cdktf.stringToTerraform(this._scheduleType),
      throttling: cdktf.stringToTerraform(this._throttling),
      notification_list: cdktf.listMapper(logAlertNotificationListStructToTerraform, true)(this._notificationList.internalValue),
      query_list: cdktf.listMapper(logAlertQueryListStructToTerraform, true)(this._queryList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alert_description: {
        value: cdktf.stringToHclTerraform(this._alertDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alert_displayname: {
        value: cdktf.stringToHclTerraform(this._alertDisplayname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alert_name: {
        value: cdktf.stringToHclTerraform(this._alertName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      condition: {
        value: cdktf.stringToHclTerraform(this._condition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dashboard: {
        value: cdktf.stringToHclTerraform(this._dashboard),
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
      mute_until: {
        value: cdktf.numberToHclTerraform(this._muteUntil),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      notify_threshold: {
        value: cdktf.numberToHclTerraform(this._notifyThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project_name: {
        value: cdktf.stringToHclTerraform(this._projectName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule_interval: {
        value: cdktf.stringToHclTerraform(this._scheduleInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule_type: {
        value: cdktf.stringToHclTerraform(this._scheduleType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      throttling: {
        value: cdktf.stringToHclTerraform(this._throttling),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notification_list: {
        value: cdktf.listMapperHcl(logAlertNotificationListStructToHclTerraform, true)(this._notificationList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LogAlertNotificationListStructList",
      },
      query_list: {
        value: cdktf.listMapperHcl(logAlertQueryListStructToHclTerraform, true)(this._queryList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LogAlertQueryListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
