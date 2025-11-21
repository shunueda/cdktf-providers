// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cls_alarm_notice
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClsAlarmNoticeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cls_alarm_notice#id ClsAlarmNotice#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Alarm notice name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cls_alarm_notice#name ClsAlarmNotice#name}
  */
  readonly name: string;
  /**
  * Tag description list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cls_alarm_notice#tags ClsAlarmNotice#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Notice type. Value: Trigger, Recovery, All.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cls_alarm_notice#type ClsAlarmNotice#type}
  */
  readonly type: string;
  /**
  * notice_receivers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cls_alarm_notice#notice_receivers ClsAlarmNotice#notice_receivers}
  */
  readonly noticeReceivers?: ClsAlarmNoticeNoticeReceivers[] | cdktf.IResolvable;
  /**
  * web_callbacks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cls_alarm_notice#web_callbacks ClsAlarmNotice#web_callbacks}
  */
  readonly webCallbacks?: ClsAlarmNoticeWebCallbacks[] | cdktf.IResolvable;
}
export interface ClsAlarmNoticeNoticeReceivers {
  /**
  * End time allowed to receive messages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cls_alarm_notice#end_time ClsAlarmNotice#end_time}
  */
  readonly endTime?: string;
  /**
  * Index. The input parameter is invalid, but the output parameter is valid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cls_alarm_notice#index ClsAlarmNotice#index}
  */
  readonly index?: number;
  /**
  * Notice content ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cls_alarm_notice#notice_content_id ClsAlarmNotice#notice_content_id}
  */
  readonly noticeContentId?: string;
  /**
  * Receiver channels, Value: Email, Sms, WeChat, Phone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cls_alarm_notice#receiver_channels ClsAlarmNotice#receiver_channels}
  */
  readonly receiverChannels: string[];
  /**
  * Receiver id list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cls_alarm_notice#receiver_ids ClsAlarmNotice#receiver_ids}
  */
  readonly receiverIds: number[];
  /**
  * Receiver type, Uin or Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cls_alarm_notice#receiver_type ClsAlarmNotice#receiver_type}
  */
  readonly receiverType: string;
  /**
  * Start time allowed to receive messages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cls_alarm_notice#start_time ClsAlarmNotice#start_time}
  */
  readonly startTime?: string;
}

export function clsAlarmNoticeNoticeReceiversToTerraform(struct?: ClsAlarmNoticeNoticeReceivers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_time: cdktf.stringToTerraform(struct!.endTime),
    index: cdktf.numberToTerraform(struct!.index),
    notice_content_id: cdktf.stringToTerraform(struct!.noticeContentId),
    receiver_channels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.receiverChannels),
    receiver_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.receiverIds),
    receiver_type: cdktf.stringToTerraform(struct!.receiverType),
    start_time: cdktf.stringToTerraform(struct!.startTime),
  }
}


export function clsAlarmNoticeNoticeReceiversToHclTerraform(struct?: ClsAlarmNoticeNoticeReceivers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_time: {
      value: cdktf.stringToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index: {
      value: cdktf.numberToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    notice_content_id: {
      value: cdktf.stringToHclTerraform(struct!.noticeContentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    receiver_channels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.receiverChannels),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    receiver_ids: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.receiverIds),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    receiver_type: {
      value: cdktf.stringToHclTerraform(struct!.receiverType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClsAlarmNoticeNoticeReceiversOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClsAlarmNoticeNoticeReceivers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._noticeContentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.noticeContentId = this._noticeContentId;
    }
    if (this._receiverChannels !== undefined) {
      hasAnyValues = true;
      internalValueResult.receiverChannels = this._receiverChannels;
    }
    if (this._receiverIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.receiverIds = this._receiverIds;
    }
    if (this._receiverType !== undefined) {
      hasAnyValues = true;
      internalValueResult.receiverType = this._receiverType;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClsAlarmNoticeNoticeReceivers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endTime = undefined;
      this._index = undefined;
      this._noticeContentId = undefined;
      this._receiverChannels = undefined;
      this._receiverIds = undefined;
      this._receiverType = undefined;
      this._startTime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endTime = value.endTime;
      this._index = value.index;
      this._noticeContentId = value.noticeContentId;
      this._receiverChannels = value.receiverChannels;
      this._receiverIds = value.receiverIds;
      this._receiverType = value.receiverType;
      this._startTime = value.startTime;
    }
  }

  // end_time - computed: false, optional: true, required: false
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // index - computed: true, optional: true, required: false
  private _index?: number; 
  public get index() {
    return this.getNumberAttribute('index');
  }
  public set index(value: number) {
    this._index = value;
  }
  public resetIndex() {
    this._index = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // notice_content_id - computed: false, optional: true, required: false
  private _noticeContentId?: string; 
  public get noticeContentId() {
    return this.getStringAttribute('notice_content_id');
  }
  public set noticeContentId(value: string) {
    this._noticeContentId = value;
  }
  public resetNoticeContentId() {
    this._noticeContentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noticeContentIdInput() {
    return this._noticeContentId;
  }

  // receiver_channels - computed: false, optional: false, required: true
  private _receiverChannels?: string[]; 
  public get receiverChannels() {
    return cdktf.Fn.tolist(this.getListAttribute('receiver_channels'));
  }
  public set receiverChannels(value: string[]) {
    this._receiverChannels = value;
  }
  // Temporarily expose input value. Use with caution.
  public get receiverChannelsInput() {
    return this._receiverChannels;
  }

  // receiver_ids - computed: false, optional: false, required: true
  private _receiverIds?: number[]; 
  public get receiverIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('receiver_ids')));
  }
  public set receiverIds(value: number[]) {
    this._receiverIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get receiverIdsInput() {
    return this._receiverIds;
  }

  // receiver_type - computed: false, optional: false, required: true
  private _receiverType?: string; 
  public get receiverType() {
    return this.getStringAttribute('receiver_type');
  }
  public set receiverType(value: string) {
    this._receiverType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get receiverTypeInput() {
    return this._receiverType;
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }
}

export class ClsAlarmNoticeNoticeReceiversList extends cdktf.ComplexList {
  public internalValue? : ClsAlarmNoticeNoticeReceivers[] | cdktf.IResolvable

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
  public get(index: number): ClsAlarmNoticeNoticeReceiversOutputReference {
    return new ClsAlarmNoticeNoticeReceiversOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClsAlarmNoticeWebCallbacks {
  /**
  * Request body.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cls_alarm_notice#body ClsAlarmNotice#body}
  */
  readonly body?: string;
  /**
  * Callback type, Values: Http, WeCom, DingTalk, Lark.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cls_alarm_notice#callback_type ClsAlarmNotice#callback_type}
  */
  readonly callbackType: string;
  /**
  * Request headers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cls_alarm_notice#headers ClsAlarmNotice#headers}
  */
  readonly headers?: string[];
  /**
  * Index. The input parameter is invalid, but the output parameter is valid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cls_alarm_notice#index ClsAlarmNotice#index}
  */
  readonly index?: number;
  /**
  * Method, POST or PUT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cls_alarm_notice#method ClsAlarmNotice#method}
  */
  readonly method?: string;
  /**
  * Telephone list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cls_alarm_notice#mobiles ClsAlarmNotice#mobiles}
  */
  readonly mobiles?: string[];
  /**
  * Notice content ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cls_alarm_notice#notice_content_id ClsAlarmNotice#notice_content_id}
  */
  readonly noticeContentId?: string;
  /**
  * Remind type. 0: Do not remind; 1: Specified person; 2: Everyone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cls_alarm_notice#remind_type ClsAlarmNotice#remind_type}
  */
  readonly remindType?: number;
  /**
  * Callback url.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cls_alarm_notice#url ClsAlarmNotice#url}
  */
  readonly url: string;
  /**
  * User ID list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cls_alarm_notice#user_ids ClsAlarmNotice#user_ids}
  */
  readonly userIds?: string[];
  /**
  * Integration configuration ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cls_alarm_notice#web_callback_id ClsAlarmNotice#web_callback_id}
  */
  readonly webCallbackId?: string;
}

export function clsAlarmNoticeWebCallbacksToTerraform(struct?: ClsAlarmNoticeWebCallbacks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: cdktf.stringToTerraform(struct!.body),
    callback_type: cdktf.stringToTerraform(struct!.callbackType),
    headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.headers),
    index: cdktf.numberToTerraform(struct!.index),
    method: cdktf.stringToTerraform(struct!.method),
    mobiles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mobiles),
    notice_content_id: cdktf.stringToTerraform(struct!.noticeContentId),
    remind_type: cdktf.numberToTerraform(struct!.remindType),
    url: cdktf.stringToTerraform(struct!.url),
    user_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.userIds),
    web_callback_id: cdktf.stringToTerraform(struct!.webCallbackId),
  }
}


export function clsAlarmNoticeWebCallbacksToHclTerraform(struct?: ClsAlarmNoticeWebCallbacks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body: {
      value: cdktf.stringToHclTerraform(struct!.body),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    callback_type: {
      value: cdktf.stringToHclTerraform(struct!.callbackType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.headers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    index: {
      value: cdktf.numberToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mobiles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.mobiles),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    notice_content_id: {
      value: cdktf.stringToHclTerraform(struct!.noticeContentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remind_type: {
      value: cdktf.numberToHclTerraform(struct!.remindType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.userIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    web_callback_id: {
      value: cdktf.stringToHclTerraform(struct!.webCallbackId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClsAlarmNoticeWebCallbacksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClsAlarmNoticeWebCallbacks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._callbackType !== undefined) {
      hasAnyValues = true;
      internalValueResult.callbackType = this._callbackType;
    }
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._mobiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.mobiles = this._mobiles;
    }
    if (this._noticeContentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.noticeContentId = this._noticeContentId;
    }
    if (this._remindType !== undefined) {
      hasAnyValues = true;
      internalValueResult.remindType = this._remindType;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._userIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.userIds = this._userIds;
    }
    if (this._webCallbackId !== undefined) {
      hasAnyValues = true;
      internalValueResult.webCallbackId = this._webCallbackId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClsAlarmNoticeWebCallbacks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._body = undefined;
      this._callbackType = undefined;
      this._headers = undefined;
      this._index = undefined;
      this._method = undefined;
      this._mobiles = undefined;
      this._noticeContentId = undefined;
      this._remindType = undefined;
      this._url = undefined;
      this._userIds = undefined;
      this._webCallbackId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._body = value.body;
      this._callbackType = value.callbackType;
      this._headers = value.headers;
      this._index = value.index;
      this._method = value.method;
      this._mobiles = value.mobiles;
      this._noticeContentId = value.noticeContentId;
      this._remindType = value.remindType;
      this._url = value.url;
      this._userIds = value.userIds;
      this._webCallbackId = value.webCallbackId;
    }
  }

  // body - computed: false, optional: true, required: false
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // callback_type - computed: false, optional: false, required: true
  private _callbackType?: string; 
  public get callbackType() {
    return this.getStringAttribute('callback_type');
  }
  public set callbackType(value: string) {
    this._callbackType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get callbackTypeInput() {
    return this._callbackType;
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: string[]; 
  public get headers() {
    return cdktf.Fn.tolist(this.getListAttribute('headers'));
  }
  public set headers(value: string[]) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // index - computed: true, optional: true, required: false
  private _index?: number; 
  public get index() {
    return this.getNumberAttribute('index');
  }
  public set index(value: number) {
    this._index = value;
  }
  public resetIndex() {
    this._index = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
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

  // mobiles - computed: false, optional: true, required: false
  private _mobiles?: string[]; 
  public get mobiles() {
    return cdktf.Fn.tolist(this.getListAttribute('mobiles'));
  }
  public set mobiles(value: string[]) {
    this._mobiles = value;
  }
  public resetMobiles() {
    this._mobiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mobilesInput() {
    return this._mobiles;
  }

  // notice_content_id - computed: false, optional: true, required: false
  private _noticeContentId?: string; 
  public get noticeContentId() {
    return this.getStringAttribute('notice_content_id');
  }
  public set noticeContentId(value: string) {
    this._noticeContentId = value;
  }
  public resetNoticeContentId() {
    this._noticeContentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noticeContentIdInput() {
    return this._noticeContentId;
  }

  // remind_type - computed: false, optional: true, required: false
  private _remindType?: number; 
  public get remindType() {
    return this.getNumberAttribute('remind_type');
  }
  public set remindType(value: number) {
    this._remindType = value;
  }
  public resetRemindType() {
    this._remindType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remindTypeInput() {
    return this._remindType;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // user_ids - computed: false, optional: true, required: false
  private _userIds?: string[]; 
  public get userIds() {
    return cdktf.Fn.tolist(this.getListAttribute('user_ids'));
  }
  public set userIds(value: string[]) {
    this._userIds = value;
  }
  public resetUserIds() {
    this._userIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdsInput() {
    return this._userIds;
  }

  // web_callback_id - computed: false, optional: true, required: false
  private _webCallbackId?: string; 
  public get webCallbackId() {
    return this.getStringAttribute('web_callback_id');
  }
  public set webCallbackId(value: string) {
    this._webCallbackId = value;
  }
  public resetWebCallbackId() {
    this._webCallbackId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webCallbackIdInput() {
    return this._webCallbackId;
  }
}

export class ClsAlarmNoticeWebCallbacksList extends cdktf.ComplexList {
  public internalValue? : ClsAlarmNoticeWebCallbacks[] | cdktf.IResolvable

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
  public get(index: number): ClsAlarmNoticeWebCallbacksOutputReference {
    return new ClsAlarmNoticeWebCallbacksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cls_alarm_notice tencentcloud_cls_alarm_notice}
*/
export class ClsAlarmNotice extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cls_alarm_notice";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClsAlarmNotice resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClsAlarmNotice to import
  * @param importFromId The id of the existing ClsAlarmNotice that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cls_alarm_notice#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClsAlarmNotice to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cls_alarm_notice", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cls_alarm_notice tencentcloud_cls_alarm_notice} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClsAlarmNoticeConfig
  */
  public constructor(scope: Construct, id: string, config: ClsAlarmNoticeConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cls_alarm_notice',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.37',
        providerVersionConstraint: '1.82.37'
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
    this._name = config.name;
    this._tags = config.tags;
    this._type = config.type;
    this._noticeReceivers.internalValue = config.noticeReceivers;
    this._webCallbacks.internalValue = config.webCallbacks;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
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

  // notice_receivers - computed: false, optional: true, required: false
  private _noticeReceivers = new ClsAlarmNoticeNoticeReceiversList(this, "notice_receivers", false);
  public get noticeReceivers() {
    return this._noticeReceivers;
  }
  public putNoticeReceivers(value: ClsAlarmNoticeNoticeReceivers[] | cdktf.IResolvable) {
    this._noticeReceivers.internalValue = value;
  }
  public resetNoticeReceivers() {
    this._noticeReceivers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noticeReceiversInput() {
    return this._noticeReceivers.internalValue;
  }

  // web_callbacks - computed: false, optional: true, required: false
  private _webCallbacks = new ClsAlarmNoticeWebCallbacksList(this, "web_callbacks", false);
  public get webCallbacks() {
    return this._webCallbacks;
  }
  public putWebCallbacks(value: ClsAlarmNoticeWebCallbacks[] | cdktf.IResolvable) {
    this._webCallbacks.internalValue = value;
  }
  public resetWebCallbacks() {
    this._webCallbacks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webCallbacksInput() {
    return this._webCallbacks.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      type: cdktf.stringToTerraform(this._type),
      notice_receivers: cdktf.listMapper(clsAlarmNoticeNoticeReceiversToTerraform, true)(this._noticeReceivers.internalValue),
      web_callbacks: cdktf.listMapper(clsAlarmNoticeWebCallbacksToTerraform, true)(this._webCallbacks.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notice_receivers: {
        value: cdktf.listMapperHcl(clsAlarmNoticeNoticeReceiversToHclTerraform, true)(this._noticeReceivers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClsAlarmNoticeNoticeReceiversList",
      },
      web_callbacks: {
        value: cdktf.listMapperHcl(clsAlarmNoticeWebCallbacksToHclTerraform, true)(this._webCallbacks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClsAlarmNoticeWebCallbacksList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
