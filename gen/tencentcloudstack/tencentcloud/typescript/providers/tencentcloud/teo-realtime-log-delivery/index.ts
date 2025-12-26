// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/teo_realtime_log_delivery
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TeoRealtimeLogDeliveryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data delivery area, possible values are: `mainland`: within mainland China; `overseas`: worldwide (excluding mainland China).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/teo_realtime_log_delivery#area TeoRealtimeLogDelivery#area}
  */
  readonly area: string;
  /**
  * The status of the real-time log delivery task. The values are: `enabled`: enabled; `disabled`: disabled. Leave it blank to keep the original configuration. Not required when creating.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/teo_realtime_log_delivery#delivery_status TeoRealtimeLogDelivery#delivery_status}
  */
  readonly deliveryStatus?: string;
  /**
  * List of entities (seven-layer domain names or four-layer proxy instances) corresponding to real-time log delivery tasks. Example values are as follows: Seven-layer domain name: `domain.example.com`; four-layer proxy instance: sid-2s69eb5wcms7. For values, refer to: `https://cloud.tencent.com/document/api/1552/80690`, `https://cloud.tencent.com/document/api/1552/86336`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/teo_realtime_log_delivery#entity_list TeoRealtimeLogDelivery#entity_list}
  */
  readonly entityList: string[];
  /**
  * A list of preset fields for delivery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/teo_realtime_log_delivery#fields TeoRealtimeLogDelivery#fields}
  */
  readonly fields: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/teo_realtime_log_delivery#id TeoRealtimeLogDelivery#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Data delivery type, the values are: `domain`: site acceleration log; `application`: four-layer proxy log; `web-rateLiming`: rate limit and CC attack protection log; `web-attack`: managed rule log; `web-rule`: custom rule log; `web-bot`: Bot management log.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/teo_realtime_log_delivery#log_type TeoRealtimeLogDelivery#log_type}
  */
  readonly logType: string;
  /**
  * The sampling ratio is in thousandths, with a value range of 1-1000. For example, filling in 605 means the sampling ratio is 60.5%. Leaving it blank means the sampling ratio is 100%.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/teo_realtime_log_delivery#sample TeoRealtimeLogDelivery#sample}
  */
  readonly sample: number;
  /**
  * The name of the real-time log delivery task. The format is a combination of numbers, English, -, and _. The maximum length is 200 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/teo_realtime_log_delivery#task_name TeoRealtimeLogDelivery#task_name}
  */
  readonly taskName: string;
  /**
  * The real-time log delivery task type. The possible values are: `cls`: push to Tencent Cloud CLS; `custom_endpoint`: push to a custom HTTP(S) address; `s3`: push to an AWS S3 compatible storage bucket address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/teo_realtime_log_delivery#task_type TeoRealtimeLogDelivery#task_type}
  */
  readonly taskType: string;
  /**
  * ID of the site.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/teo_realtime_log_delivery#zone_id TeoRealtimeLogDelivery#zone_id}
  */
  readonly zoneId: string;
  /**
  * cls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/teo_realtime_log_delivery#cls TeoRealtimeLogDelivery#cls}
  */
  readonly cls?: TeoRealtimeLogDeliveryCls;
  /**
  * custom_endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/teo_realtime_log_delivery#custom_endpoint TeoRealtimeLogDelivery#custom_endpoint}
  */
  readonly customEndpoint?: TeoRealtimeLogDeliveryCustomEndpoint;
  /**
  * custom_fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/teo_realtime_log_delivery#custom_fields TeoRealtimeLogDelivery#custom_fields}
  */
  readonly customFields?: TeoRealtimeLogDeliveryCustomFields[] | cdktf.IResolvable;
  /**
  * delivery_conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/teo_realtime_log_delivery#delivery_conditions TeoRealtimeLogDelivery#delivery_conditions}
  */
  readonly deliveryConditions?: TeoRealtimeLogDeliveryDeliveryConditions[] | cdktf.IResolvable;
  /**
  * log_format block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/teo_realtime_log_delivery#log_format TeoRealtimeLogDelivery#log_format}
  */
  readonly logFormat?: TeoRealtimeLogDeliveryLogFormat;
  /**
  * s3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/teo_realtime_log_delivery#s3 TeoRealtimeLogDelivery#s3}
  */
  readonly s3?: TeoRealtimeLogDeliveryS3;
}
export interface TeoRealtimeLogDeliveryCls {
  /**
  * Tencent Cloud CLS log set ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/teo_realtime_log_delivery#log_set_id TeoRealtimeLogDelivery#log_set_id}
  */
  readonly logSetId: string;
  /**
  * The region where the Tencent Cloud CLS log set is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/teo_realtime_log_delivery#log_set_region TeoRealtimeLogDelivery#log_set_region}
  */
  readonly logSetRegion: string;
  /**
  * Tencent Cloud CLS log topic ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/teo_realtime_log_delivery#topic_id TeoRealtimeLogDelivery#topic_id}
  */
  readonly topicId: string;
}

export function teoRealtimeLogDeliveryClsToTerraform(struct?: TeoRealtimeLogDeliveryClsOutputReference | TeoRealtimeLogDeliveryCls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_set_id: cdktf.stringToTerraform(struct!.logSetId),
    log_set_region: cdktf.stringToTerraform(struct!.logSetRegion),
    topic_id: cdktf.stringToTerraform(struct!.topicId),
  }
}


export function teoRealtimeLogDeliveryClsToHclTerraform(struct?: TeoRealtimeLogDeliveryClsOutputReference | TeoRealtimeLogDeliveryCls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log_set_id: {
      value: cdktf.stringToHclTerraform(struct!.logSetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_set_region: {
      value: cdktf.stringToHclTerraform(struct!.logSetRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topic_id: {
      value: cdktf.stringToHclTerraform(struct!.topicId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoRealtimeLogDeliveryClsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoRealtimeLogDeliveryCls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logSetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.logSetId = this._logSetId;
    }
    if (this._logSetRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.logSetRegion = this._logSetRegion;
    }
    if (this._topicId !== undefined) {
      hasAnyValues = true;
      internalValueResult.topicId = this._topicId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoRealtimeLogDeliveryCls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logSetId = undefined;
      this._logSetRegion = undefined;
      this._topicId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logSetId = value.logSetId;
      this._logSetRegion = value.logSetRegion;
      this._topicId = value.topicId;
    }
  }

  // log_set_id - computed: false, optional: false, required: true
  private _logSetId?: string; 
  public get logSetId() {
    return this.getStringAttribute('log_set_id');
  }
  public set logSetId(value: string) {
    this._logSetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logSetIdInput() {
    return this._logSetId;
  }

  // log_set_region - computed: false, optional: false, required: true
  private _logSetRegion?: string; 
  public get logSetRegion() {
    return this.getStringAttribute('log_set_region');
  }
  public set logSetRegion(value: string) {
    this._logSetRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logSetRegionInput() {
    return this._logSetRegion;
  }

  // topic_id - computed: false, optional: false, required: true
  private _topicId?: string; 
  public get topicId() {
    return this.getStringAttribute('topic_id');
  }
  public set topicId(value: string) {
    this._topicId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicIdInput() {
    return this._topicId;
  }
}
export interface TeoRealtimeLogDeliveryCustomEndpointHeaders {
  /**
  * HTTP header name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/teo_realtime_log_delivery#name TeoRealtimeLogDelivery#name}
  */
  readonly name: string;
  /**
  * HTTP header value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/teo_realtime_log_delivery#value TeoRealtimeLogDelivery#value}
  */
  readonly value: string;
}

export function teoRealtimeLogDeliveryCustomEndpointHeadersToTerraform(struct?: TeoRealtimeLogDeliveryCustomEndpointHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function teoRealtimeLogDeliveryCustomEndpointHeadersToHclTerraform(struct?: TeoRealtimeLogDeliveryCustomEndpointHeaders | cdktf.IResolvable): any {
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

export class TeoRealtimeLogDeliveryCustomEndpointHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TeoRealtimeLogDeliveryCustomEndpointHeaders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: TeoRealtimeLogDeliveryCustomEndpointHeaders | cdktf.IResolvable | undefined) {
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class TeoRealtimeLogDeliveryCustomEndpointHeadersList extends cdktf.ComplexList {
  public internalValue? : TeoRealtimeLogDeliveryCustomEndpointHeaders[] | cdktf.IResolvable

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
  public get(index: number): TeoRealtimeLogDeliveryCustomEndpointHeadersOutputReference {
    return new TeoRealtimeLogDeliveryCustomEndpointHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TeoRealtimeLogDeliveryCustomEndpoint {
  /**
  * Fill in a custom SecretId to generate an encrypted signature. This parameter is required if the source site requires authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/teo_realtime_log_delivery#access_id TeoRealtimeLogDelivery#access_id}
  */
  readonly accessId?: string;
  /**
  * Fill in the custom SecretKey to generate the encrypted signature. This parameter is required if the source site requires authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/teo_realtime_log_delivery#access_key TeoRealtimeLogDelivery#access_key}
  */
  readonly accessKey?: string;
  /**
  * Data compression type, the possible values are: `gzip`: use gzip compression. If it is not filled in, compression is not enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/teo_realtime_log_delivery#compress_type TeoRealtimeLogDelivery#compress_type}
  */
  readonly compressType?: string;
  /**
  * When sending logs via POST request, the application layer protocol type used can be: `http`: HTTP protocol; `https`: HTTPS protocol. If not filled in, the protocol type will be parsed according to the filled in URL address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/teo_realtime_log_delivery#protocol TeoRealtimeLogDelivery#protocol}
  */
  readonly protocol?: string;
  /**
  * The custom HTTP interface address for real-time log delivery. Currently, only HTTP/HTTPS protocols are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/teo_realtime_log_delivery#url TeoRealtimeLogDelivery#url}
  */
  readonly url: string;
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/teo_realtime_log_delivery#headers TeoRealtimeLogDelivery#headers}
  */
  readonly headers?: TeoRealtimeLogDeliveryCustomEndpointHeaders[] | cdktf.IResolvable;
}

export function teoRealtimeLogDeliveryCustomEndpointToTerraform(struct?: TeoRealtimeLogDeliveryCustomEndpointOutputReference | TeoRealtimeLogDeliveryCustomEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_id: cdktf.stringToTerraform(struct!.accessId),
    access_key: cdktf.stringToTerraform(struct!.accessKey),
    compress_type: cdktf.stringToTerraform(struct!.compressType),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    url: cdktf.stringToTerraform(struct!.url),
    headers: cdktf.listMapper(teoRealtimeLogDeliveryCustomEndpointHeadersToTerraform, true)(struct!.headers),
  }
}


export function teoRealtimeLogDeliveryCustomEndpointToHclTerraform(struct?: TeoRealtimeLogDeliveryCustomEndpointOutputReference | TeoRealtimeLogDeliveryCustomEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_id: {
      value: cdktf.stringToHclTerraform(struct!.accessId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    access_key: {
      value: cdktf.stringToHclTerraform(struct!.accessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compress_type: {
      value: cdktf.stringToHclTerraform(struct!.compressType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    headers: {
      value: cdktf.listMapperHcl(teoRealtimeLogDeliveryCustomEndpointHeadersToHclTerraform, true)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "TeoRealtimeLogDeliveryCustomEndpointHeadersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoRealtimeLogDeliveryCustomEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoRealtimeLogDeliveryCustomEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessId = this._accessId;
    }
    if (this._accessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKey = this._accessKey;
    }
    if (this._compressType !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressType = this._compressType;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoRealtimeLogDeliveryCustomEndpoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessId = undefined;
      this._accessKey = undefined;
      this._compressType = undefined;
      this._protocol = undefined;
      this._url = undefined;
      this._headers.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessId = value.accessId;
      this._accessKey = value.accessKey;
      this._compressType = value.compressType;
      this._protocol = value.protocol;
      this._url = value.url;
      this._headers.internalValue = value.headers;
    }
  }

  // access_id - computed: false, optional: true, required: false
  private _accessId?: string; 
  public get accessId() {
    return this.getStringAttribute('access_id');
  }
  public set accessId(value: string) {
    this._accessId = value;
  }
  public resetAccessId() {
    this._accessId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessIdInput() {
    return this._accessId;
  }

  // access_key - computed: false, optional: true, required: false
  private _accessKey?: string; 
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }
  public set accessKey(value: string) {
    this._accessKey = value;
  }
  public resetAccessKey() {
    this._accessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey;
  }

  // compress_type - computed: false, optional: true, required: false
  private _compressType?: string; 
  public get compressType() {
    return this.getStringAttribute('compress_type');
  }
  public set compressType(value: string) {
    this._compressType = value;
  }
  public resetCompressType() {
    this._compressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressTypeInput() {
    return this._compressType;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
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

  // headers - computed: false, optional: true, required: false
  private _headers = new TeoRealtimeLogDeliveryCustomEndpointHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: TeoRealtimeLogDeliveryCustomEndpointHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }
}
export interface TeoRealtimeLogDeliveryCustomFields {
  /**
  * Whether to deliver this field. If left blank, this field will not be delivered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/teo_realtime_log_delivery#enabled TeoRealtimeLogDelivery#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Extract data from the specified location in the HTTP request and response. The values are: `ReqHeader`: extract the specified field value from the HTTP request header; `RspHeader`: extract the specified field value from the HTTP response header; `Cookie`: extract the specified field value from the Cookie.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/teo_realtime_log_delivery#name TeoRealtimeLogDelivery#name}
  */
  readonly name: string;
  /**
  * The name of the parameter whose value needs to be extracted, for example: Accept-Language.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/teo_realtime_log_delivery#value TeoRealtimeLogDelivery#value}
  */
  readonly value: string;
}

export function teoRealtimeLogDeliveryCustomFieldsToTerraform(struct?: TeoRealtimeLogDeliveryCustomFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function teoRealtimeLogDeliveryCustomFieldsToHclTerraform(struct?: TeoRealtimeLogDeliveryCustomFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
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

export class TeoRealtimeLogDeliveryCustomFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TeoRealtimeLogDeliveryCustomFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
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

  public set internalValue(value: TeoRealtimeLogDeliveryCustomFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
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
      this._enabled = value.enabled;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class TeoRealtimeLogDeliveryCustomFieldsList extends cdktf.ComplexList {
  public internalValue? : TeoRealtimeLogDeliveryCustomFields[] | cdktf.IResolvable

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
  public get(index: number): TeoRealtimeLogDeliveryCustomFieldsOutputReference {
    return new TeoRealtimeLogDeliveryCustomFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TeoRealtimeLogDeliveryDeliveryConditionsConditions {
  /**
  * The key of the filter condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/teo_realtime_log_delivery#key TeoRealtimeLogDelivery#key}
  */
  readonly key: string;
  /**
  * Query condition operator, operation types are: `equals`: equal; `notEquals`: not equal; `include`: include; `notInclude`: not include; `startWith`: start with value; `notStartWith`: not start with value; `endWith`: end with value; `notEndWith`: not end with value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/teo_realtime_log_delivery#operator TeoRealtimeLogDelivery#operator}
  */
  readonly operator: string;
  /**
  * The value of the filter condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/teo_realtime_log_delivery#value TeoRealtimeLogDelivery#value}
  */
  readonly value: string[];
}

export function teoRealtimeLogDeliveryDeliveryConditionsConditionsToTerraform(struct?: TeoRealtimeLogDeliveryDeliveryConditionsConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.value),
  }
}


export function teoRealtimeLogDeliveryDeliveryConditionsConditionsToHclTerraform(struct?: TeoRealtimeLogDeliveryDeliveryConditionsConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.value),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoRealtimeLogDeliveryDeliveryConditionsConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TeoRealtimeLogDeliveryDeliveryConditionsConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoRealtimeLogDeliveryDeliveryConditionsConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string[]; 
  public get value() {
    return this.getListAttribute('value');
  }
  public set value(value: string[]) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class TeoRealtimeLogDeliveryDeliveryConditionsConditionsList extends cdktf.ComplexList {
  public internalValue? : TeoRealtimeLogDeliveryDeliveryConditionsConditions[] | cdktf.IResolvable

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
  public get(index: number): TeoRealtimeLogDeliveryDeliveryConditionsConditionsOutputReference {
    return new TeoRealtimeLogDeliveryDeliveryConditionsConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TeoRealtimeLogDeliveryDeliveryConditions {
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/teo_realtime_log_delivery#conditions TeoRealtimeLogDelivery#conditions}
  */
  readonly conditions?: TeoRealtimeLogDeliveryDeliveryConditionsConditions[] | cdktf.IResolvable;
}

export function teoRealtimeLogDeliveryDeliveryConditionsToTerraform(struct?: TeoRealtimeLogDeliveryDeliveryConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conditions: cdktf.listMapper(teoRealtimeLogDeliveryDeliveryConditionsConditionsToTerraform, true)(struct!.conditions),
  }
}


export function teoRealtimeLogDeliveryDeliveryConditionsToHclTerraform(struct?: TeoRealtimeLogDeliveryDeliveryConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conditions: {
      value: cdktf.listMapperHcl(teoRealtimeLogDeliveryDeliveryConditionsConditionsToHclTerraform, true)(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "TeoRealtimeLogDeliveryDeliveryConditionsConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoRealtimeLogDeliveryDeliveryConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TeoRealtimeLogDeliveryDeliveryConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoRealtimeLogDeliveryDeliveryConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditions.internalValue = value.conditions;
    }
  }

  // conditions - computed: false, optional: true, required: false
  private _conditions = new TeoRealtimeLogDeliveryDeliveryConditionsConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: TeoRealtimeLogDeliveryDeliveryConditionsConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }
}

export class TeoRealtimeLogDeliveryDeliveryConditionsList extends cdktf.ComplexList {
  public internalValue? : TeoRealtimeLogDeliveryDeliveryConditions[] | cdktf.IResolvable

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
  public get(index: number): TeoRealtimeLogDeliveryDeliveryConditionsOutputReference {
    return new TeoRealtimeLogDeliveryDeliveryConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TeoRealtimeLogDeliveryLogFormat {
  /**
  * A string to be added before each log delivery batch. Each log delivery batch may contain multiple log records.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/teo_realtime_log_delivery#batch_prefix TeoRealtimeLogDelivery#batch_prefix}
  */
  readonly batchPrefix?: string;
  /**
  * A string to append after each log delivery batch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/teo_realtime_log_delivery#batch_suffix TeoRealtimeLogDelivery#batch_suffix}
  */
  readonly batchSuffix?: string;
  /**
  * In a single log record, a string is inserted between fields as a separator. The possible values are: `	`: tab character; `,`: comma; `;`: semicolon.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/teo_realtime_log_delivery#field_delimiter TeoRealtimeLogDelivery#field_delimiter}
  */
  readonly fieldDelimiter?: string;
  /**
  * The default output format type for log delivery. The possible values are: `json`: Use the default log output format JSON Lines. The fields in a single log are presented as key-value pairs; `csv`: Use the default log output format csv. Only field values are presented in a single log, without field names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/teo_realtime_log_delivery#format_type TeoRealtimeLogDelivery#format_type}
  */
  readonly formatType: string;
  /**
  * The string inserted between log records as a separator. The possible values are: `
  * `: newline character; `	`: tab character; `,`: comma.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/teo_realtime_log_delivery#record_delimiter TeoRealtimeLogDelivery#record_delimiter}
  */
  readonly recordDelimiter?: string;
  /**
  * A string to prepend to each log record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/teo_realtime_log_delivery#record_prefix TeoRealtimeLogDelivery#record_prefix}
  */
  readonly recordPrefix?: string;
  /**
  * A string to append to each log record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/teo_realtime_log_delivery#record_suffix TeoRealtimeLogDelivery#record_suffix}
  */
  readonly recordSuffix?: string;
}

export function teoRealtimeLogDeliveryLogFormatToTerraform(struct?: TeoRealtimeLogDeliveryLogFormatOutputReference | TeoRealtimeLogDeliveryLogFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    batch_prefix: cdktf.stringToTerraform(struct!.batchPrefix),
    batch_suffix: cdktf.stringToTerraform(struct!.batchSuffix),
    field_delimiter: cdktf.stringToTerraform(struct!.fieldDelimiter),
    format_type: cdktf.stringToTerraform(struct!.formatType),
    record_delimiter: cdktf.stringToTerraform(struct!.recordDelimiter),
    record_prefix: cdktf.stringToTerraform(struct!.recordPrefix),
    record_suffix: cdktf.stringToTerraform(struct!.recordSuffix),
  }
}


export function teoRealtimeLogDeliveryLogFormatToHclTerraform(struct?: TeoRealtimeLogDeliveryLogFormatOutputReference | TeoRealtimeLogDeliveryLogFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    batch_prefix: {
      value: cdktf.stringToHclTerraform(struct!.batchPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    batch_suffix: {
      value: cdktf.stringToHclTerraform(struct!.batchSuffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_delimiter: {
      value: cdktf.stringToHclTerraform(struct!.fieldDelimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format_type: {
      value: cdktf.stringToHclTerraform(struct!.formatType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    record_delimiter: {
      value: cdktf.stringToHclTerraform(struct!.recordDelimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    record_prefix: {
      value: cdktf.stringToHclTerraform(struct!.recordPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    record_suffix: {
      value: cdktf.stringToHclTerraform(struct!.recordSuffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoRealtimeLogDeliveryLogFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoRealtimeLogDeliveryLogFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchPrefix = this._batchPrefix;
    }
    if (this._batchSuffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchSuffix = this._batchSuffix;
    }
    if (this._fieldDelimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldDelimiter = this._fieldDelimiter;
    }
    if (this._formatType !== undefined) {
      hasAnyValues = true;
      internalValueResult.formatType = this._formatType;
    }
    if (this._recordDelimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordDelimiter = this._recordDelimiter;
    }
    if (this._recordPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordPrefix = this._recordPrefix;
    }
    if (this._recordSuffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordSuffix = this._recordSuffix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoRealtimeLogDeliveryLogFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._batchPrefix = undefined;
      this._batchSuffix = undefined;
      this._fieldDelimiter = undefined;
      this._formatType = undefined;
      this._recordDelimiter = undefined;
      this._recordPrefix = undefined;
      this._recordSuffix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._batchPrefix = value.batchPrefix;
      this._batchSuffix = value.batchSuffix;
      this._fieldDelimiter = value.fieldDelimiter;
      this._formatType = value.formatType;
      this._recordDelimiter = value.recordDelimiter;
      this._recordPrefix = value.recordPrefix;
      this._recordSuffix = value.recordSuffix;
    }
  }

  // batch_prefix - computed: false, optional: true, required: false
  private _batchPrefix?: string; 
  public get batchPrefix() {
    return this.getStringAttribute('batch_prefix');
  }
  public set batchPrefix(value: string) {
    this._batchPrefix = value;
  }
  public resetBatchPrefix() {
    this._batchPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchPrefixInput() {
    return this._batchPrefix;
  }

  // batch_suffix - computed: false, optional: true, required: false
  private _batchSuffix?: string; 
  public get batchSuffix() {
    return this.getStringAttribute('batch_suffix');
  }
  public set batchSuffix(value: string) {
    this._batchSuffix = value;
  }
  public resetBatchSuffix() {
    this._batchSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchSuffixInput() {
    return this._batchSuffix;
  }

  // field_delimiter - computed: false, optional: true, required: false
  private _fieldDelimiter?: string; 
  public get fieldDelimiter() {
    return this.getStringAttribute('field_delimiter');
  }
  public set fieldDelimiter(value: string) {
    this._fieldDelimiter = value;
  }
  public resetFieldDelimiter() {
    this._fieldDelimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldDelimiterInput() {
    return this._fieldDelimiter;
  }

  // format_type - computed: false, optional: false, required: true
  private _formatType?: string; 
  public get formatType() {
    return this.getStringAttribute('format_type');
  }
  public set formatType(value: string) {
    this._formatType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formatTypeInput() {
    return this._formatType;
  }

  // record_delimiter - computed: false, optional: true, required: false
  private _recordDelimiter?: string; 
  public get recordDelimiter() {
    return this.getStringAttribute('record_delimiter');
  }
  public set recordDelimiter(value: string) {
    this._recordDelimiter = value;
  }
  public resetRecordDelimiter() {
    this._recordDelimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordDelimiterInput() {
    return this._recordDelimiter;
  }

  // record_prefix - computed: false, optional: true, required: false
  private _recordPrefix?: string; 
  public get recordPrefix() {
    return this.getStringAttribute('record_prefix');
  }
  public set recordPrefix(value: string) {
    this._recordPrefix = value;
  }
  public resetRecordPrefix() {
    this._recordPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordPrefixInput() {
    return this._recordPrefix;
  }

  // record_suffix - computed: false, optional: true, required: false
  private _recordSuffix?: string; 
  public get recordSuffix() {
    return this.getStringAttribute('record_suffix');
  }
  public set recordSuffix(value: string) {
    this._recordSuffix = value;
  }
  public resetRecordSuffix() {
    this._recordSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordSuffixInput() {
    return this._recordSuffix;
  }
}
export interface TeoRealtimeLogDeliveryS3 {
  /**
  * The Access Key ID used to access the bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/teo_realtime_log_delivery#access_id TeoRealtimeLogDelivery#access_id}
  */
  readonly accessId: string;
  /**
  * The secret key used to access the bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/teo_realtime_log_delivery#access_key TeoRealtimeLogDelivery#access_key}
  */
  readonly accessKey: string;
  /**
  * Bucket name and log storage directory, for example: `your_bucket_name/EO-logs/`. If this directory does not exist in the bucket, it will be created automatically.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/teo_realtime_log_delivery#bucket TeoRealtimeLogDelivery#bucket}
  */
  readonly bucket: string;
  /**
  * Data compression type, the values are: gzip: gzip compression. If it is not filled in, compression is not enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/teo_realtime_log_delivery#compress_type TeoRealtimeLogDelivery#compress_type}
  */
  readonly compressType?: string;
  /**
  * URLs that do not include bucket names or paths, for example: `https://storage.googleapis.com`, `https://s3.ap-northeast-2.amazonaws.com`, `https://cos.ap-nanjing.myqcloud.com`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/teo_realtime_log_delivery#endpoint TeoRealtimeLogDelivery#endpoint}
  */
  readonly endpoint: string;
  /**
  * The region where the bucket is located, for example: ap-northeast-2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/teo_realtime_log_delivery#region TeoRealtimeLogDelivery#region}
  */
  readonly region: string;
}

export function teoRealtimeLogDeliveryS3ToTerraform(struct?: TeoRealtimeLogDeliveryS3OutputReference | TeoRealtimeLogDeliveryS3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_id: cdktf.stringToTerraform(struct!.accessId),
    access_key: cdktf.stringToTerraform(struct!.accessKey),
    bucket: cdktf.stringToTerraform(struct!.bucket),
    compress_type: cdktf.stringToTerraform(struct!.compressType),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function teoRealtimeLogDeliveryS3ToHclTerraform(struct?: TeoRealtimeLogDeliveryS3OutputReference | TeoRealtimeLogDeliveryS3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_id: {
      value: cdktf.stringToHclTerraform(struct!.accessId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    access_key: {
      value: cdktf.stringToHclTerraform(struct!.accessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compress_type: {
      value: cdktf.stringToHclTerraform(struct!.compressType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoRealtimeLogDeliveryS3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoRealtimeLogDeliveryS3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessId = this._accessId;
    }
    if (this._accessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKey = this._accessKey;
    }
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._compressType !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressType = this._compressType;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoRealtimeLogDeliveryS3 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessId = undefined;
      this._accessKey = undefined;
      this._bucket = undefined;
      this._compressType = undefined;
      this._endpoint = undefined;
      this._region = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessId = value.accessId;
      this._accessKey = value.accessKey;
      this._bucket = value.bucket;
      this._compressType = value.compressType;
      this._endpoint = value.endpoint;
      this._region = value.region;
    }
  }

  // access_id - computed: false, optional: false, required: true
  private _accessId?: string; 
  public get accessId() {
    return this.getStringAttribute('access_id');
  }
  public set accessId(value: string) {
    this._accessId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessIdInput() {
    return this._accessId;
  }

  // access_key - computed: false, optional: false, required: true
  private _accessKey?: string; 
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }
  public set accessKey(value: string) {
    this._accessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey;
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // compress_type - computed: false, optional: true, required: false
  private _compressType?: string; 
  public get compressType() {
    return this.getStringAttribute('compress_type');
  }
  public set compressType(value: string) {
    this._compressType = value;
  }
  public resetCompressType() {
    this._compressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressTypeInput() {
    return this._compressType;
  }

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/teo_realtime_log_delivery tencentcloud_teo_realtime_log_delivery}
*/
export class TeoRealtimeLogDelivery extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_teo_realtime_log_delivery";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TeoRealtimeLogDelivery resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TeoRealtimeLogDelivery to import
  * @param importFromId The id of the existing TeoRealtimeLogDelivery that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/teo_realtime_log_delivery#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TeoRealtimeLogDelivery to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_teo_realtime_log_delivery", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/teo_realtime_log_delivery tencentcloud_teo_realtime_log_delivery} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TeoRealtimeLogDeliveryConfig
  */
  public constructor(scope: Construct, id: string, config: TeoRealtimeLogDeliveryConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_teo_realtime_log_delivery',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.49',
        providerVersionConstraint: '1.82.49'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._area = config.area;
    this._deliveryStatus = config.deliveryStatus;
    this._entityList = config.entityList;
    this._fields = config.fields;
    this._id = config.id;
    this._logType = config.logType;
    this._sample = config.sample;
    this._taskName = config.taskName;
    this._taskType = config.taskType;
    this._zoneId = config.zoneId;
    this._cls.internalValue = config.cls;
    this._customEndpoint.internalValue = config.customEndpoint;
    this._customFields.internalValue = config.customFields;
    this._deliveryConditions.internalValue = config.deliveryConditions;
    this._logFormat.internalValue = config.logFormat;
    this._s3.internalValue = config.s3;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // area - computed: false, optional: false, required: true
  private _area?: string; 
  public get area() {
    return this.getStringAttribute('area');
  }
  public set area(value: string) {
    this._area = value;
  }
  // Temporarily expose input value. Use with caution.
  public get areaInput() {
    return this._area;
  }

  // delivery_status - computed: true, optional: true, required: false
  private _deliveryStatus?: string; 
  public get deliveryStatus() {
    return this.getStringAttribute('delivery_status');
  }
  public set deliveryStatus(value: string) {
    this._deliveryStatus = value;
  }
  public resetDeliveryStatus() {
    this._deliveryStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryStatusInput() {
    return this._deliveryStatus;
  }

  // entity_list - computed: false, optional: false, required: true
  private _entityList?: string[]; 
  public get entityList() {
    return this.getListAttribute('entity_list');
  }
  public set entityList(value: string[]) {
    this._entityList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityListInput() {
    return this._entityList;
  }

  // fields - computed: false, optional: false, required: true
  private _fields?: string[]; 
  public get fields() {
    return this.getListAttribute('fields');
  }
  public set fields(value: string[]) {
    this._fields = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields;
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

  // log_type - computed: false, optional: false, required: true
  private _logType?: string; 
  public get logType() {
    return this.getStringAttribute('log_type');
  }
  public set logType(value: string) {
    this._logType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logTypeInput() {
    return this._logType;
  }

  // sample - computed: false, optional: false, required: true
  private _sample?: number; 
  public get sample() {
    return this.getNumberAttribute('sample');
  }
  public set sample(value: number) {
    this._sample = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleInput() {
    return this._sample;
  }

  // task_id - computed: true, optional: false, required: false
  public get taskId() {
    return this.getStringAttribute('task_id');
  }

  // task_name - computed: false, optional: false, required: true
  private _taskName?: string; 
  public get taskName() {
    return this.getStringAttribute('task_name');
  }
  public set taskName(value: string) {
    this._taskName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskNameInput() {
    return this._taskName;
  }

  // task_type - computed: false, optional: false, required: true
  private _taskType?: string; 
  public get taskType() {
    return this.getStringAttribute('task_type');
  }
  public set taskType(value: string) {
    this._taskType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskTypeInput() {
    return this._taskType;
  }

  // zone_id - computed: false, optional: false, required: true
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // cls - computed: false, optional: true, required: false
  private _cls = new TeoRealtimeLogDeliveryClsOutputReference(this, "cls");
  public get cls() {
    return this._cls;
  }
  public putCls(value: TeoRealtimeLogDeliveryCls) {
    this._cls.internalValue = value;
  }
  public resetCls() {
    this._cls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clsInput() {
    return this._cls.internalValue;
  }

  // custom_endpoint - computed: false, optional: true, required: false
  private _customEndpoint = new TeoRealtimeLogDeliveryCustomEndpointOutputReference(this, "custom_endpoint");
  public get customEndpoint() {
    return this._customEndpoint;
  }
  public putCustomEndpoint(value: TeoRealtimeLogDeliveryCustomEndpoint) {
    this._customEndpoint.internalValue = value;
  }
  public resetCustomEndpoint() {
    this._customEndpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customEndpointInput() {
    return this._customEndpoint.internalValue;
  }

  // custom_fields - computed: false, optional: true, required: false
  private _customFields = new TeoRealtimeLogDeliveryCustomFieldsList(this, "custom_fields", false);
  public get customFields() {
    return this._customFields;
  }
  public putCustomFields(value: TeoRealtimeLogDeliveryCustomFields[] | cdktf.IResolvable) {
    this._customFields.internalValue = value;
  }
  public resetCustomFields() {
    this._customFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customFieldsInput() {
    return this._customFields.internalValue;
  }

  // delivery_conditions - computed: false, optional: true, required: false
  private _deliveryConditions = new TeoRealtimeLogDeliveryDeliveryConditionsList(this, "delivery_conditions", false);
  public get deliveryConditions() {
    return this._deliveryConditions;
  }
  public putDeliveryConditions(value: TeoRealtimeLogDeliveryDeliveryConditions[] | cdktf.IResolvable) {
    this._deliveryConditions.internalValue = value;
  }
  public resetDeliveryConditions() {
    this._deliveryConditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryConditionsInput() {
    return this._deliveryConditions.internalValue;
  }

  // log_format - computed: false, optional: true, required: false
  private _logFormat = new TeoRealtimeLogDeliveryLogFormatOutputReference(this, "log_format");
  public get logFormat() {
    return this._logFormat;
  }
  public putLogFormat(value: TeoRealtimeLogDeliveryLogFormat) {
    this._logFormat.internalValue = value;
  }
  public resetLogFormat() {
    this._logFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFormatInput() {
    return this._logFormat.internalValue;
  }

  // s3 - computed: false, optional: true, required: false
  private _s3 = new TeoRealtimeLogDeliveryS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
  public putS3(value: TeoRealtimeLogDeliveryS3) {
    this._s3.internalValue = value;
  }
  public resetS3() {
    this._s3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      area: cdktf.stringToTerraform(this._area),
      delivery_status: cdktf.stringToTerraform(this._deliveryStatus),
      entity_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._entityList),
      fields: cdktf.listMapper(cdktf.stringToTerraform, false)(this._fields),
      id: cdktf.stringToTerraform(this._id),
      log_type: cdktf.stringToTerraform(this._logType),
      sample: cdktf.numberToTerraform(this._sample),
      task_name: cdktf.stringToTerraform(this._taskName),
      task_type: cdktf.stringToTerraform(this._taskType),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      cls: teoRealtimeLogDeliveryClsToTerraform(this._cls.internalValue),
      custom_endpoint: teoRealtimeLogDeliveryCustomEndpointToTerraform(this._customEndpoint.internalValue),
      custom_fields: cdktf.listMapper(teoRealtimeLogDeliveryCustomFieldsToTerraform, true)(this._customFields.internalValue),
      delivery_conditions: cdktf.listMapper(teoRealtimeLogDeliveryDeliveryConditionsToTerraform, true)(this._deliveryConditions.internalValue),
      log_format: teoRealtimeLogDeliveryLogFormatToTerraform(this._logFormat.internalValue),
      s3: teoRealtimeLogDeliveryS3ToTerraform(this._s3.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      area: {
        value: cdktf.stringToHclTerraform(this._area),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delivery_status: {
        value: cdktf.stringToHclTerraform(this._deliveryStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entity_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._entityList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      fields: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._fields),
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
      log_type: {
        value: cdktf.stringToHclTerraform(this._logType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sample: {
        value: cdktf.numberToHclTerraform(this._sample),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      task_name: {
        value: cdktf.stringToHclTerraform(this._taskName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      task_type: {
        value: cdktf.stringToHclTerraform(this._taskType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_id: {
        value: cdktf.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cls: {
        value: teoRealtimeLogDeliveryClsToHclTerraform(this._cls.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TeoRealtimeLogDeliveryClsList",
      },
      custom_endpoint: {
        value: teoRealtimeLogDeliveryCustomEndpointToHclTerraform(this._customEndpoint.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TeoRealtimeLogDeliveryCustomEndpointList",
      },
      custom_fields: {
        value: cdktf.listMapperHcl(teoRealtimeLogDeliveryCustomFieldsToHclTerraform, true)(this._customFields.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TeoRealtimeLogDeliveryCustomFieldsList",
      },
      delivery_conditions: {
        value: cdktf.listMapperHcl(teoRealtimeLogDeliveryDeliveryConditionsToHclTerraform, true)(this._deliveryConditions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TeoRealtimeLogDeliveryDeliveryConditionsList",
      },
      log_format: {
        value: teoRealtimeLogDeliveryLogFormatToHclTerraform(this._logFormat.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TeoRealtimeLogDeliveryLogFormatList",
      },
      s3: {
        value: teoRealtimeLogDeliveryS3ToHclTerraform(this._s3.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TeoRealtimeLogDeliveryS3List",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
