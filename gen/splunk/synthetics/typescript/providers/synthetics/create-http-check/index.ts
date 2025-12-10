// https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_http_check
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CreateHttpCheckConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_http_check#auto_retry CreateHttpCheck#auto_retry}
  */
  readonly autoRetry?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_http_check#enabled CreateHttpCheck#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_http_check#frequency CreateHttpCheck#frequency}
  */
  readonly frequency: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_http_check#http_method CreateHttpCheck#http_method}
  */
  readonly httpMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_http_check#http_request_body CreateHttpCheck#http_request_body}
  */
  readonly httpRequestBody?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_http_check#id CreateHttpCheck#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_http_check#integrations CreateHttpCheck#integrations}
  */
  readonly integrations?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_http_check#last_updated CreateHttpCheck#last_updated}
  */
  readonly lastUpdated?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_http_check#locations CreateHttpCheck#locations}
  */
  readonly locations?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_http_check#name CreateHttpCheck#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_http_check#round_robin CreateHttpCheck#round_robin}
  */
  readonly roundRobin?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_http_check#tags CreateHttpCheck#tags}
  */
  readonly tags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_http_check#url CreateHttpCheck#url}
  */
  readonly url: string;
  /**
  * blackout_periods block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_http_check#blackout_periods CreateHttpCheck#blackout_periods}
  */
  readonly blackoutPeriods?: CreateHttpCheckBlackoutPeriods[] | cdktf.IResolvable;
  /**
  * check_connection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_http_check#check_connection CreateHttpCheck#check_connection}
  */
  readonly checkConnection?: CreateHttpCheckCheckConnection[] | cdktf.IResolvable;
  /**
  * http_request_headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_http_check#http_request_headers CreateHttpCheck#http_request_headers}
  */
  readonly httpRequestHeaders?: CreateHttpCheckHttpRequestHeaders[] | cdktf.IResolvable;
  /**
  * notifications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_http_check#notifications CreateHttpCheck#notifications}
  */
  readonly notifications?: CreateHttpCheckNotifications[] | cdktf.IResolvable;
  /**
  * success_criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_http_check#success_criteria CreateHttpCheck#success_criteria}
  */
  readonly successCriteria?: CreateHttpCheckSuccessCriteria[] | cdktf.IResolvable;
}
export interface CreateHttpCheckBlackoutPeriods {
}

export function createHttpCheckBlackoutPeriodsToTerraform(struct?: CreateHttpCheckBlackoutPeriods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function createHttpCheckBlackoutPeriodsToHclTerraform(struct?: CreateHttpCheckBlackoutPeriods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CreateHttpCheckBlackoutPeriodsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CreateHttpCheckBlackoutPeriods | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CreateHttpCheckBlackoutPeriods | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // duration_in_minutes - computed: true, optional: false, required: false
  public get durationInMinutes() {
    return this.getNumberAttribute('duration_in_minutes');
  }

  // end_date - computed: true, optional: false, required: false
  public get endDate() {
    return this.getStringAttribute('end_date');
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // is_repeat - computed: true, optional: false, required: false
  public get isRepeat() {
    return this.getBooleanAttribute('is_repeat');
  }

  // monthly_repeat_type - computed: true, optional: false, required: false
  public get monthlyRepeatType() {
    return this.getStringAttribute('monthly_repeat_type');
  }

  // repeat_type - computed: true, optional: false, required: false
  public get repeatType() {
    return this.getStringAttribute('repeat_type');
  }

  // start_date - computed: true, optional: false, required: false
  public get startDate() {
    return this.getStringAttribute('start_date');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }

  // timezone - computed: true, optional: false, required: false
  public get timezone() {
    return this.getStringAttribute('timezone');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
}

export class CreateHttpCheckBlackoutPeriodsList extends cdktf.ComplexList {
  public internalValue? : CreateHttpCheckBlackoutPeriods[] | cdktf.IResolvable

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
  public get(index: number): CreateHttpCheckBlackoutPeriodsOutputReference {
    return new CreateHttpCheckBlackoutPeriodsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CreateHttpCheckCheckConnection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_http_check#download_bandwidth CreateHttpCheck#download_bandwidth}
  */
  readonly downloadBandwidth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_http_check#latency CreateHttpCheck#latency}
  */
  readonly latency?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_http_check#packet_loss CreateHttpCheck#packet_loss}
  */
  readonly packetLoss?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_http_check#upload_bandwidth CreateHttpCheck#upload_bandwidth}
  */
  readonly uploadBandwidth?: number;
}

export function createHttpCheckCheckConnectionToTerraform(struct?: CreateHttpCheckCheckConnection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    download_bandwidth: cdktf.numberToTerraform(struct!.downloadBandwidth),
    latency: cdktf.numberToTerraform(struct!.latency),
    packet_loss: cdktf.numberToTerraform(struct!.packetLoss),
    upload_bandwidth: cdktf.numberToTerraform(struct!.uploadBandwidth),
  }
}


export function createHttpCheckCheckConnectionToHclTerraform(struct?: CreateHttpCheckCheckConnection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    download_bandwidth: {
      value: cdktf.numberToHclTerraform(struct!.downloadBandwidth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    latency: {
      value: cdktf.numberToHclTerraform(struct!.latency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packet_loss: {
      value: cdktf.numberToHclTerraform(struct!.packetLoss),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    upload_bandwidth: {
      value: cdktf.numberToHclTerraform(struct!.uploadBandwidth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CreateHttpCheckCheckConnectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CreateHttpCheckCheckConnection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._downloadBandwidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.downloadBandwidth = this._downloadBandwidth;
    }
    if (this._latency !== undefined) {
      hasAnyValues = true;
      internalValueResult.latency = this._latency;
    }
    if (this._packetLoss !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetLoss = this._packetLoss;
    }
    if (this._uploadBandwidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.uploadBandwidth = this._uploadBandwidth;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CreateHttpCheckCheckConnection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._downloadBandwidth = undefined;
      this._latency = undefined;
      this._packetLoss = undefined;
      this._uploadBandwidth = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._downloadBandwidth = value.downloadBandwidth;
      this._latency = value.latency;
      this._packetLoss = value.packetLoss;
      this._uploadBandwidth = value.uploadBandwidth;
    }
  }

  // download_bandwidth - computed: false, optional: true, required: false
  private _downloadBandwidth?: number; 
  public get downloadBandwidth() {
    return this.getNumberAttribute('download_bandwidth');
  }
  public set downloadBandwidth(value: number) {
    this._downloadBandwidth = value;
  }
  public resetDownloadBandwidth() {
    this._downloadBandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downloadBandwidthInput() {
    return this._downloadBandwidth;
  }

  // latency - computed: false, optional: true, required: false
  private _latency?: number; 
  public get latency() {
    return this.getNumberAttribute('latency');
  }
  public set latency(value: number) {
    this._latency = value;
  }
  public resetLatency() {
    this._latency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latencyInput() {
    return this._latency;
  }

  // packet_loss - computed: false, optional: true, required: false
  private _packetLoss?: number; 
  public get packetLoss() {
    return this.getNumberAttribute('packet_loss');
  }
  public set packetLoss(value: number) {
    this._packetLoss = value;
  }
  public resetPacketLoss() {
    this._packetLoss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetLossInput() {
    return this._packetLoss;
  }

  // upload_bandwidth - computed: false, optional: true, required: false
  private _uploadBandwidth?: number; 
  public get uploadBandwidth() {
    return this.getNumberAttribute('upload_bandwidth');
  }
  public set uploadBandwidth(value: number) {
    this._uploadBandwidth = value;
  }
  public resetUploadBandwidth() {
    this._uploadBandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadBandwidthInput() {
    return this._uploadBandwidth;
  }
}

export class CreateHttpCheckCheckConnectionList extends cdktf.ComplexList {
  public internalValue? : CreateHttpCheckCheckConnection[] | cdktf.IResolvable

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
  public get(index: number): CreateHttpCheckCheckConnectionOutputReference {
    return new CreateHttpCheckCheckConnectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CreateHttpCheckHttpRequestHeaders {
}

export function createHttpCheckHttpRequestHeadersToTerraform(struct?: CreateHttpCheckHttpRequestHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function createHttpCheckHttpRequestHeadersToHclTerraform(struct?: CreateHttpCheckHttpRequestHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CreateHttpCheckHttpRequestHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CreateHttpCheckHttpRequestHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CreateHttpCheckHttpRequestHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // user_agent - computed: true, optional: false, required: false
  public get userAgent() {
    return this.getStringAttribute('user_agent');
  }
}

export class CreateHttpCheckHttpRequestHeadersList extends cdktf.ComplexList {
  public internalValue? : CreateHttpCheckHttpRequestHeaders[] | cdktf.IResolvable

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
  public get(index: number): CreateHttpCheckHttpRequestHeadersOutputReference {
    return new CreateHttpCheckHttpRequestHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CreateHttpCheckNotificationsEscalationsNotificationWindow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_http_check#duration_in_minutes CreateHttpCheck#duration_in_minutes}
  */
  readonly durationInMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_http_check#end_time CreateHttpCheck#end_time}
  */
  readonly endTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_http_check#start_time CreateHttpCheck#start_time}
  */
  readonly startTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_http_check#time_zone CreateHttpCheck#time_zone}
  */
  readonly timeZone?: string;
}

export function createHttpCheckNotificationsEscalationsNotificationWindowToTerraform(struct?: CreateHttpCheckNotificationsEscalationsNotificationWindow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration_in_minutes: cdktf.numberToTerraform(struct!.durationInMinutes),
    end_time: cdktf.stringToTerraform(struct!.endTime),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    time_zone: cdktf.stringToTerraform(struct!.timeZone),
  }
}


export function createHttpCheckNotificationsEscalationsNotificationWindowToHclTerraform(struct?: CreateHttpCheckNotificationsEscalationsNotificationWindow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration_in_minutes: {
      value: cdktf.numberToHclTerraform(struct!.durationInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    end_time: {
      value: cdktf.stringToHclTerraform(struct!.endTime),
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
    time_zone: {
      value: cdktf.stringToHclTerraform(struct!.timeZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CreateHttpCheckNotificationsEscalationsNotificationWindowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CreateHttpCheckNotificationsEscalationsNotificationWindow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._durationInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.durationInMinutes = this._durationInMinutes;
    }
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._timeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CreateHttpCheckNotificationsEscalationsNotificationWindow | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._durationInMinutes = undefined;
      this._endTime = undefined;
      this._startTime = undefined;
      this._timeZone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._durationInMinutes = value.durationInMinutes;
      this._endTime = value.endTime;
      this._startTime = value.startTime;
      this._timeZone = value.timeZone;
    }
  }

  // duration_in_minutes - computed: false, optional: true, required: false
  private _durationInMinutes?: number; 
  public get durationInMinutes() {
    return this.getNumberAttribute('duration_in_minutes');
  }
  public set durationInMinutes(value: number) {
    this._durationInMinutes = value;
  }
  public resetDurationInMinutes() {
    this._durationInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInMinutesInput() {
    return this._durationInMinutes;
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

  // time_zone - computed: false, optional: true, required: false
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  public resetTimeZone() {
    this._timeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }
}

export class CreateHttpCheckNotificationsEscalationsNotificationWindowList extends cdktf.ComplexList {
  public internalValue? : CreateHttpCheckNotificationsEscalationsNotificationWindow[] | cdktf.IResolvable

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
  public get(index: number): CreateHttpCheckNotificationsEscalationsNotificationWindowOutputReference {
    return new CreateHttpCheckNotificationsEscalationsNotificationWindowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CreateHttpCheckNotificationsEscalationsNotifyWhoLinks {
}

export function createHttpCheckNotificationsEscalationsNotifyWhoLinksToTerraform(struct?: CreateHttpCheckNotificationsEscalationsNotifyWhoLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function createHttpCheckNotificationsEscalationsNotifyWhoLinksToHclTerraform(struct?: CreateHttpCheckNotificationsEscalationsNotifyWhoLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CreateHttpCheckNotificationsEscalationsNotifyWhoLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CreateHttpCheckNotificationsEscalationsNotifyWhoLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CreateHttpCheckNotificationsEscalationsNotifyWhoLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // self_html - computed: true, optional: false, required: false
  public get selfHtml() {
    return this.getStringAttribute('self_html');
  }
}

export class CreateHttpCheckNotificationsEscalationsNotifyWhoLinksList extends cdktf.ComplexList {

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
  public get(index: number): CreateHttpCheckNotificationsEscalationsNotifyWhoLinksOutputReference {
    return new CreateHttpCheckNotificationsEscalationsNotifyWhoLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CreateHttpCheckNotificationsEscalationsNotifyWho {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_http_check#call CreateHttpCheck#call}
  */
  readonly call?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_http_check#custom_user_email CreateHttpCheck#custom_user_email}
  */
  readonly customUserEmail?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_http_check#email CreateHttpCheck#email}
  */
  readonly email?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_http_check#id CreateHttpCheck#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_http_check#sms CreateHttpCheck#sms}
  */
  readonly sms?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_http_check#type CreateHttpCheck#type}
  */
  readonly type?: string;
}

export function createHttpCheckNotificationsEscalationsNotifyWhoToTerraform(struct?: CreateHttpCheckNotificationsEscalationsNotifyWho | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    call: cdktf.booleanToTerraform(struct!.call),
    custom_user_email: cdktf.stringToTerraform(struct!.customUserEmail),
    email: cdktf.booleanToTerraform(struct!.email),
    id: cdktf.numberToTerraform(struct!.id),
    sms: cdktf.booleanToTerraform(struct!.sms),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function createHttpCheckNotificationsEscalationsNotifyWhoToHclTerraform(struct?: CreateHttpCheckNotificationsEscalationsNotifyWho | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    call: {
      value: cdktf.booleanToHclTerraform(struct!.call),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    custom_user_email: {
      value: cdktf.stringToHclTerraform(struct!.customUserEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email: {
      value: cdktf.booleanToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sms: {
      value: cdktf.booleanToHclTerraform(struct!.sms),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class CreateHttpCheckNotificationsEscalationsNotifyWhoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CreateHttpCheckNotificationsEscalationsNotifyWho | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._call !== undefined) {
      hasAnyValues = true;
      internalValueResult.call = this._call;
    }
    if (this._customUserEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.customUserEmail = this._customUserEmail;
    }
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._sms !== undefined) {
      hasAnyValues = true;
      internalValueResult.sms = this._sms;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CreateHttpCheckNotificationsEscalationsNotifyWho | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._call = undefined;
      this._customUserEmail = undefined;
      this._email = undefined;
      this._id = undefined;
      this._sms = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._call = value.call;
      this._customUserEmail = value.customUserEmail;
      this._email = value.email;
      this._id = value.id;
      this._sms = value.sms;
      this._type = value.type;
    }
  }

  // call - computed: false, optional: true, required: false
  private _call?: boolean | cdktf.IResolvable; 
  public get call() {
    return this.getBooleanAttribute('call');
  }
  public set call(value: boolean | cdktf.IResolvable) {
    this._call = value;
  }
  public resetCall() {
    this._call = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callInput() {
    return this._call;
  }

  // custom_user_email - computed: false, optional: true, required: false
  private _customUserEmail?: string; 
  public get customUserEmail() {
    return this.getStringAttribute('custom_user_email');
  }
  public set customUserEmail(value: string) {
    this._customUserEmail = value;
  }
  public resetCustomUserEmail() {
    this._customUserEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customUserEmailInput() {
    return this._customUserEmail;
  }

  // email - computed: false, optional: true, required: false
  private _email?: boolean | cdktf.IResolvable; 
  public get email() {
    return this.getBooleanAttribute('email');
  }
  public set email(value: boolean | cdktf.IResolvable) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // links - computed: true, optional: false, required: false
  private _links = new CreateHttpCheckNotificationsEscalationsNotifyWhoLinksList(this, "links", true);
  public get links() {
    return this._links;
  }

  // sms - computed: false, optional: true, required: false
  private _sms?: boolean | cdktf.IResolvable; 
  public get sms() {
    return this.getBooleanAttribute('sms');
  }
  public set sms(value: boolean | cdktf.IResolvable) {
    this._sms = value;
  }
  public resetSms() {
    this._sms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsInput() {
    return this._sms;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class CreateHttpCheckNotificationsEscalationsNotifyWhoList extends cdktf.ComplexList {
  public internalValue? : CreateHttpCheckNotificationsEscalationsNotifyWho[] | cdktf.IResolvable

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
  public get(index: number): CreateHttpCheckNotificationsEscalationsNotifyWhoOutputReference {
    return new CreateHttpCheckNotificationsEscalationsNotifyWhoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CreateHttpCheckNotificationsEscalations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_http_check#after_minutes CreateHttpCheck#after_minutes}
  */
  readonly afterMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_http_check#call CreateHttpCheck#call}
  */
  readonly call?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_http_check#email CreateHttpCheck#email}
  */
  readonly email?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_http_check#sms CreateHttpCheck#sms}
  */
  readonly sms?: boolean | cdktf.IResolvable;
  /**
  * notification_window block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_http_check#notification_window CreateHttpCheck#notification_window}
  */
  readonly notificationWindow?: CreateHttpCheckNotificationsEscalationsNotificationWindow[] | cdktf.IResolvable;
  /**
  * notify_who block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_http_check#notify_who CreateHttpCheck#notify_who}
  */
  readonly notifyWho?: CreateHttpCheckNotificationsEscalationsNotifyWho[] | cdktf.IResolvable;
}

export function createHttpCheckNotificationsEscalationsToTerraform(struct?: CreateHttpCheckNotificationsEscalations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    after_minutes: cdktf.numberToTerraform(struct!.afterMinutes),
    call: cdktf.booleanToTerraform(struct!.call),
    email: cdktf.booleanToTerraform(struct!.email),
    sms: cdktf.booleanToTerraform(struct!.sms),
    notification_window: cdktf.listMapper(createHttpCheckNotificationsEscalationsNotificationWindowToTerraform, true)(struct!.notificationWindow),
    notify_who: cdktf.listMapper(createHttpCheckNotificationsEscalationsNotifyWhoToTerraform, true)(struct!.notifyWho),
  }
}


export function createHttpCheckNotificationsEscalationsToHclTerraform(struct?: CreateHttpCheckNotificationsEscalations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    after_minutes: {
      value: cdktf.numberToHclTerraform(struct!.afterMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    call: {
      value: cdktf.booleanToHclTerraform(struct!.call),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    email: {
      value: cdktf.booleanToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sms: {
      value: cdktf.booleanToHclTerraform(struct!.sms),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    notification_window: {
      value: cdktf.listMapperHcl(createHttpCheckNotificationsEscalationsNotificationWindowToHclTerraform, true)(struct!.notificationWindow),
      isBlock: true,
      type: "set",
      storageClassType: "CreateHttpCheckNotificationsEscalationsNotificationWindowList",
    },
    notify_who: {
      value: cdktf.listMapperHcl(createHttpCheckNotificationsEscalationsNotifyWhoToHclTerraform, true)(struct!.notifyWho),
      isBlock: true,
      type: "set",
      storageClassType: "CreateHttpCheckNotificationsEscalationsNotifyWhoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CreateHttpCheckNotificationsEscalationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CreateHttpCheckNotificationsEscalations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._afterMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.afterMinutes = this._afterMinutes;
    }
    if (this._call !== undefined) {
      hasAnyValues = true;
      internalValueResult.call = this._call;
    }
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._sms !== undefined) {
      hasAnyValues = true;
      internalValueResult.sms = this._sms;
    }
    if (this._notificationWindow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationWindow = this._notificationWindow?.internalValue;
    }
    if (this._notifyWho?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyWho = this._notifyWho?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CreateHttpCheckNotificationsEscalations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._afterMinutes = undefined;
      this._call = undefined;
      this._email = undefined;
      this._sms = undefined;
      this._notificationWindow.internalValue = undefined;
      this._notifyWho.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._afterMinutes = value.afterMinutes;
      this._call = value.call;
      this._email = value.email;
      this._sms = value.sms;
      this._notificationWindow.internalValue = value.notificationWindow;
      this._notifyWho.internalValue = value.notifyWho;
    }
  }

  // after_minutes - computed: false, optional: true, required: false
  private _afterMinutes?: number; 
  public get afterMinutes() {
    return this.getNumberAttribute('after_minutes');
  }
  public set afterMinutes(value: number) {
    this._afterMinutes = value;
  }
  public resetAfterMinutes() {
    this._afterMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get afterMinutesInput() {
    return this._afterMinutes;
  }

  // call - computed: false, optional: true, required: false
  private _call?: boolean | cdktf.IResolvable; 
  public get call() {
    return this.getBooleanAttribute('call');
  }
  public set call(value: boolean | cdktf.IResolvable) {
    this._call = value;
  }
  public resetCall() {
    this._call = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callInput() {
    return this._call;
  }

  // email - computed: false, optional: true, required: false
  private _email?: boolean | cdktf.IResolvable; 
  public get email() {
    return this.getBooleanAttribute('email');
  }
  public set email(value: boolean | cdktf.IResolvable) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // is_repeat - computed: true, optional: false, required: false
  public get isRepeat() {
    return this.getBooleanAttribute('is_repeat');
  }

  // sms - computed: false, optional: true, required: false
  private _sms?: boolean | cdktf.IResolvable; 
  public get sms() {
    return this.getBooleanAttribute('sms');
  }
  public set sms(value: boolean | cdktf.IResolvable) {
    this._sms = value;
  }
  public resetSms() {
    this._sms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsInput() {
    return this._sms;
  }

  // notification_window - computed: false, optional: true, required: false
  private _notificationWindow = new CreateHttpCheckNotificationsEscalationsNotificationWindowList(this, "notification_window", true);
  public get notificationWindow() {
    return this._notificationWindow;
  }
  public putNotificationWindow(value: CreateHttpCheckNotificationsEscalationsNotificationWindow[] | cdktf.IResolvable) {
    this._notificationWindow.internalValue = value;
  }
  public resetNotificationWindow() {
    this._notificationWindow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationWindowInput() {
    return this._notificationWindow.internalValue;
  }

  // notify_who - computed: false, optional: true, required: false
  private _notifyWho = new CreateHttpCheckNotificationsEscalationsNotifyWhoList(this, "notify_who", true);
  public get notifyWho() {
    return this._notifyWho;
  }
  public putNotifyWho(value: CreateHttpCheckNotificationsEscalationsNotifyWho[] | cdktf.IResolvable) {
    this._notifyWho.internalValue = value;
  }
  public resetNotifyWho() {
    this._notifyWho.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyWhoInput() {
    return this._notifyWho.internalValue;
  }
}

export class CreateHttpCheckNotificationsEscalationsList extends cdktf.ComplexList {
  public internalValue? : CreateHttpCheckNotificationsEscalations[] | cdktf.IResolvable

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
  public get(index: number): CreateHttpCheckNotificationsEscalationsOutputReference {
    return new CreateHttpCheckNotificationsEscalationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CreateHttpCheckNotificationsNotificationWindows {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_http_check#duration_in_minutes CreateHttpCheck#duration_in_minutes}
  */
  readonly durationInMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_http_check#end_time CreateHttpCheck#end_time}
  */
  readonly endTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_http_check#start_time CreateHttpCheck#start_time}
  */
  readonly startTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_http_check#time_zone CreateHttpCheck#time_zone}
  */
  readonly timeZone?: string;
}

export function createHttpCheckNotificationsNotificationWindowsToTerraform(struct?: CreateHttpCheckNotificationsNotificationWindows | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration_in_minutes: cdktf.numberToTerraform(struct!.durationInMinutes),
    end_time: cdktf.stringToTerraform(struct!.endTime),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    time_zone: cdktf.stringToTerraform(struct!.timeZone),
  }
}


export function createHttpCheckNotificationsNotificationWindowsToHclTerraform(struct?: CreateHttpCheckNotificationsNotificationWindows | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration_in_minutes: {
      value: cdktf.numberToHclTerraform(struct!.durationInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    end_time: {
      value: cdktf.stringToHclTerraform(struct!.endTime),
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
    time_zone: {
      value: cdktf.stringToHclTerraform(struct!.timeZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CreateHttpCheckNotificationsNotificationWindowsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CreateHttpCheckNotificationsNotificationWindows | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._durationInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.durationInMinutes = this._durationInMinutes;
    }
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._timeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CreateHttpCheckNotificationsNotificationWindows | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._durationInMinutes = undefined;
      this._endTime = undefined;
      this._startTime = undefined;
      this._timeZone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._durationInMinutes = value.durationInMinutes;
      this._endTime = value.endTime;
      this._startTime = value.startTime;
      this._timeZone = value.timeZone;
    }
  }

  // duration_in_minutes - computed: false, optional: true, required: false
  private _durationInMinutes?: number; 
  public get durationInMinutes() {
    return this.getNumberAttribute('duration_in_minutes');
  }
  public set durationInMinutes(value: number) {
    this._durationInMinutes = value;
  }
  public resetDurationInMinutes() {
    this._durationInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInMinutesInput() {
    return this._durationInMinutes;
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

  // time_zone - computed: false, optional: true, required: false
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  public resetTimeZone() {
    this._timeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }
}

export class CreateHttpCheckNotificationsNotificationWindowsList extends cdktf.ComplexList {
  public internalValue? : CreateHttpCheckNotificationsNotificationWindows[] | cdktf.IResolvable

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
  public get(index: number): CreateHttpCheckNotificationsNotificationWindowsOutputReference {
    return new CreateHttpCheckNotificationsNotificationWindowsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CreateHttpCheckNotificationsNotifyWhoLinks {
}

export function createHttpCheckNotificationsNotifyWhoLinksToTerraform(struct?: CreateHttpCheckNotificationsNotifyWhoLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function createHttpCheckNotificationsNotifyWhoLinksToHclTerraform(struct?: CreateHttpCheckNotificationsNotifyWhoLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CreateHttpCheckNotificationsNotifyWhoLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CreateHttpCheckNotificationsNotifyWhoLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CreateHttpCheckNotificationsNotifyWhoLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // self_html - computed: true, optional: false, required: false
  public get selfHtml() {
    return this.getStringAttribute('self_html');
  }
}

export class CreateHttpCheckNotificationsNotifyWhoLinksList extends cdktf.ComplexList {

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
  public get(index: number): CreateHttpCheckNotificationsNotifyWhoLinksOutputReference {
    return new CreateHttpCheckNotificationsNotifyWhoLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CreateHttpCheckNotificationsNotifyWho {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_http_check#call CreateHttpCheck#call}
  */
  readonly call?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_http_check#custom_user_email CreateHttpCheck#custom_user_email}
  */
  readonly customUserEmail?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_http_check#email CreateHttpCheck#email}
  */
  readonly email?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_http_check#id CreateHttpCheck#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_http_check#sms CreateHttpCheck#sms}
  */
  readonly sms?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_http_check#type CreateHttpCheck#type}
  */
  readonly type?: string;
}

export function createHttpCheckNotificationsNotifyWhoToTerraform(struct?: CreateHttpCheckNotificationsNotifyWho | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    call: cdktf.booleanToTerraform(struct!.call),
    custom_user_email: cdktf.stringToTerraform(struct!.customUserEmail),
    email: cdktf.booleanToTerraform(struct!.email),
    id: cdktf.numberToTerraform(struct!.id),
    sms: cdktf.booleanToTerraform(struct!.sms),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function createHttpCheckNotificationsNotifyWhoToHclTerraform(struct?: CreateHttpCheckNotificationsNotifyWho | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    call: {
      value: cdktf.booleanToHclTerraform(struct!.call),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    custom_user_email: {
      value: cdktf.stringToHclTerraform(struct!.customUserEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email: {
      value: cdktf.booleanToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sms: {
      value: cdktf.booleanToHclTerraform(struct!.sms),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class CreateHttpCheckNotificationsNotifyWhoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CreateHttpCheckNotificationsNotifyWho | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._call !== undefined) {
      hasAnyValues = true;
      internalValueResult.call = this._call;
    }
    if (this._customUserEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.customUserEmail = this._customUserEmail;
    }
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._sms !== undefined) {
      hasAnyValues = true;
      internalValueResult.sms = this._sms;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CreateHttpCheckNotificationsNotifyWho | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._call = undefined;
      this._customUserEmail = undefined;
      this._email = undefined;
      this._id = undefined;
      this._sms = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._call = value.call;
      this._customUserEmail = value.customUserEmail;
      this._email = value.email;
      this._id = value.id;
      this._sms = value.sms;
      this._type = value.type;
    }
  }

  // call - computed: false, optional: true, required: false
  private _call?: boolean | cdktf.IResolvable; 
  public get call() {
    return this.getBooleanAttribute('call');
  }
  public set call(value: boolean | cdktf.IResolvable) {
    this._call = value;
  }
  public resetCall() {
    this._call = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callInput() {
    return this._call;
  }

  // custom_user_email - computed: false, optional: true, required: false
  private _customUserEmail?: string; 
  public get customUserEmail() {
    return this.getStringAttribute('custom_user_email');
  }
  public set customUserEmail(value: string) {
    this._customUserEmail = value;
  }
  public resetCustomUserEmail() {
    this._customUserEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customUserEmailInput() {
    return this._customUserEmail;
  }

  // email - computed: false, optional: true, required: false
  private _email?: boolean | cdktf.IResolvable; 
  public get email() {
    return this.getBooleanAttribute('email');
  }
  public set email(value: boolean | cdktf.IResolvable) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // links - computed: true, optional: false, required: false
  private _links = new CreateHttpCheckNotificationsNotifyWhoLinksList(this, "links", true);
  public get links() {
    return this._links;
  }

  // sms - computed: false, optional: true, required: false
  private _sms?: boolean | cdktf.IResolvable; 
  public get sms() {
    return this.getBooleanAttribute('sms');
  }
  public set sms(value: boolean | cdktf.IResolvable) {
    this._sms = value;
  }
  public resetSms() {
    this._sms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsInput() {
    return this._sms;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class CreateHttpCheckNotificationsNotifyWhoList extends cdktf.ComplexList {
  public internalValue? : CreateHttpCheckNotificationsNotifyWho[] | cdktf.IResolvable

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
  public get(index: number): CreateHttpCheckNotificationsNotifyWhoOutputReference {
    return new CreateHttpCheckNotificationsNotifyWhoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CreateHttpCheckNotifications {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_http_check#call CreateHttpCheck#call}
  */
  readonly call?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_http_check#email CreateHttpCheck#email}
  */
  readonly email?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_http_check#muted CreateHttpCheck#muted}
  */
  readonly muted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_http_check#notify_after_failure_count CreateHttpCheck#notify_after_failure_count}
  */
  readonly notifyAfterFailureCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_http_check#notify_on_location_failure CreateHttpCheck#notify_on_location_failure}
  */
  readonly notifyOnLocationFailure?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_http_check#sms CreateHttpCheck#sms}
  */
  readonly sms?: boolean | cdktf.IResolvable;
  /**
  * escalations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_http_check#escalations CreateHttpCheck#escalations}
  */
  readonly escalations?: CreateHttpCheckNotificationsEscalations[] | cdktf.IResolvable;
  /**
  * notification_windows block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_http_check#notification_windows CreateHttpCheck#notification_windows}
  */
  readonly notificationWindows?: CreateHttpCheckNotificationsNotificationWindows[] | cdktf.IResolvable;
  /**
  * notify_who block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_http_check#notify_who CreateHttpCheck#notify_who}
  */
  readonly notifyWho?: CreateHttpCheckNotificationsNotifyWho[] | cdktf.IResolvable;
}

export function createHttpCheckNotificationsToTerraform(struct?: CreateHttpCheckNotifications | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    call: cdktf.booleanToTerraform(struct!.call),
    email: cdktf.booleanToTerraform(struct!.email),
    muted: cdktf.booleanToTerraform(struct!.muted),
    notify_after_failure_count: cdktf.numberToTerraform(struct!.notifyAfterFailureCount),
    notify_on_location_failure: cdktf.booleanToTerraform(struct!.notifyOnLocationFailure),
    sms: cdktf.booleanToTerraform(struct!.sms),
    escalations: cdktf.listMapper(createHttpCheckNotificationsEscalationsToTerraform, true)(struct!.escalations),
    notification_windows: cdktf.listMapper(createHttpCheckNotificationsNotificationWindowsToTerraform, true)(struct!.notificationWindows),
    notify_who: cdktf.listMapper(createHttpCheckNotificationsNotifyWhoToTerraform, true)(struct!.notifyWho),
  }
}


export function createHttpCheckNotificationsToHclTerraform(struct?: CreateHttpCheckNotifications | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    call: {
      value: cdktf.booleanToHclTerraform(struct!.call),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    email: {
      value: cdktf.booleanToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    muted: {
      value: cdktf.booleanToHclTerraform(struct!.muted),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    notify_after_failure_count: {
      value: cdktf.numberToHclTerraform(struct!.notifyAfterFailureCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    notify_on_location_failure: {
      value: cdktf.booleanToHclTerraform(struct!.notifyOnLocationFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sms: {
      value: cdktf.booleanToHclTerraform(struct!.sms),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    escalations: {
      value: cdktf.listMapperHcl(createHttpCheckNotificationsEscalationsToHclTerraform, true)(struct!.escalations),
      isBlock: true,
      type: "set",
      storageClassType: "CreateHttpCheckNotificationsEscalationsList",
    },
    notification_windows: {
      value: cdktf.listMapperHcl(createHttpCheckNotificationsNotificationWindowsToHclTerraform, true)(struct!.notificationWindows),
      isBlock: true,
      type: "set",
      storageClassType: "CreateHttpCheckNotificationsNotificationWindowsList",
    },
    notify_who: {
      value: cdktf.listMapperHcl(createHttpCheckNotificationsNotifyWhoToHclTerraform, true)(struct!.notifyWho),
      isBlock: true,
      type: "set",
      storageClassType: "CreateHttpCheckNotificationsNotifyWhoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CreateHttpCheckNotificationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CreateHttpCheckNotifications | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._call !== undefined) {
      hasAnyValues = true;
      internalValueResult.call = this._call;
    }
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._muted !== undefined) {
      hasAnyValues = true;
      internalValueResult.muted = this._muted;
    }
    if (this._notifyAfterFailureCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyAfterFailureCount = this._notifyAfterFailureCount;
    }
    if (this._notifyOnLocationFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyOnLocationFailure = this._notifyOnLocationFailure;
    }
    if (this._sms !== undefined) {
      hasAnyValues = true;
      internalValueResult.sms = this._sms;
    }
    if (this._escalations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.escalations = this._escalations?.internalValue;
    }
    if (this._notificationWindows?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationWindows = this._notificationWindows?.internalValue;
    }
    if (this._notifyWho?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyWho = this._notifyWho?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CreateHttpCheckNotifications | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._call = undefined;
      this._email = undefined;
      this._muted = undefined;
      this._notifyAfterFailureCount = undefined;
      this._notifyOnLocationFailure = undefined;
      this._sms = undefined;
      this._escalations.internalValue = undefined;
      this._notificationWindows.internalValue = undefined;
      this._notifyWho.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._call = value.call;
      this._email = value.email;
      this._muted = value.muted;
      this._notifyAfterFailureCount = value.notifyAfterFailureCount;
      this._notifyOnLocationFailure = value.notifyOnLocationFailure;
      this._sms = value.sms;
      this._escalations.internalValue = value.escalations;
      this._notificationWindows.internalValue = value.notificationWindows;
      this._notifyWho.internalValue = value.notifyWho;
    }
  }

  // call - computed: false, optional: true, required: false
  private _call?: boolean | cdktf.IResolvable; 
  public get call() {
    return this.getBooleanAttribute('call');
  }
  public set call(value: boolean | cdktf.IResolvable) {
    this._call = value;
  }
  public resetCall() {
    this._call = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callInput() {
    return this._call;
  }

  // email - computed: false, optional: true, required: false
  private _email?: boolean | cdktf.IResolvable; 
  public get email() {
    return this.getBooleanAttribute('email');
  }
  public set email(value: boolean | cdktf.IResolvable) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // muted - computed: false, optional: true, required: false
  private _muted?: boolean | cdktf.IResolvable; 
  public get muted() {
    return this.getBooleanAttribute('muted');
  }
  public set muted(value: boolean | cdktf.IResolvable) {
    this._muted = value;
  }
  public resetMuted() {
    this._muted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mutedInput() {
    return this._muted;
  }

  // notify_after_failure_count - computed: false, optional: true, required: false
  private _notifyAfterFailureCount?: number; 
  public get notifyAfterFailureCount() {
    return this.getNumberAttribute('notify_after_failure_count');
  }
  public set notifyAfterFailureCount(value: number) {
    this._notifyAfterFailureCount = value;
  }
  public resetNotifyAfterFailureCount() {
    this._notifyAfterFailureCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyAfterFailureCountInput() {
    return this._notifyAfterFailureCount;
  }

  // notify_on_location_failure - computed: false, optional: true, required: false
  private _notifyOnLocationFailure?: boolean | cdktf.IResolvable; 
  public get notifyOnLocationFailure() {
    return this.getBooleanAttribute('notify_on_location_failure');
  }
  public set notifyOnLocationFailure(value: boolean | cdktf.IResolvable) {
    this._notifyOnLocationFailure = value;
  }
  public resetNotifyOnLocationFailure() {
    this._notifyOnLocationFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyOnLocationFailureInput() {
    return this._notifyOnLocationFailure;
  }

  // sms - computed: false, optional: true, required: false
  private _sms?: boolean | cdktf.IResolvable; 
  public get sms() {
    return this.getBooleanAttribute('sms');
  }
  public set sms(value: boolean | cdktf.IResolvable) {
    this._sms = value;
  }
  public resetSms() {
    this._sms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsInput() {
    return this._sms;
  }

  // escalations - computed: false, optional: true, required: false
  private _escalations = new CreateHttpCheckNotificationsEscalationsList(this, "escalations", true);
  public get escalations() {
    return this._escalations;
  }
  public putEscalations(value: CreateHttpCheckNotificationsEscalations[] | cdktf.IResolvable) {
    this._escalations.internalValue = value;
  }
  public resetEscalations() {
    this._escalations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get escalationsInput() {
    return this._escalations.internalValue;
  }

  // notification_windows - computed: false, optional: true, required: false
  private _notificationWindows = new CreateHttpCheckNotificationsNotificationWindowsList(this, "notification_windows", true);
  public get notificationWindows() {
    return this._notificationWindows;
  }
  public putNotificationWindows(value: CreateHttpCheckNotificationsNotificationWindows[] | cdktf.IResolvable) {
    this._notificationWindows.internalValue = value;
  }
  public resetNotificationWindows() {
    this._notificationWindows.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationWindowsInput() {
    return this._notificationWindows.internalValue;
  }

  // notify_who - computed: false, optional: true, required: false
  private _notifyWho = new CreateHttpCheckNotificationsNotifyWhoList(this, "notify_who", true);
  public get notifyWho() {
    return this._notifyWho;
  }
  public putNotifyWho(value: CreateHttpCheckNotificationsNotifyWho[] | cdktf.IResolvable) {
    this._notifyWho.internalValue = value;
  }
  public resetNotifyWho() {
    this._notifyWho.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyWhoInput() {
    return this._notifyWho.internalValue;
  }
}

export class CreateHttpCheckNotificationsList extends cdktf.ComplexList {
  public internalValue? : CreateHttpCheckNotifications[] | cdktf.IResolvable

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
  public get(index: number): CreateHttpCheckNotificationsOutputReference {
    return new CreateHttpCheckNotificationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CreateHttpCheckSuccessCriteria {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_http_check#action_type CreateHttpCheck#action_type}
  */
  readonly actionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_http_check#comparison_string CreateHttpCheck#comparison_string}
  */
  readonly comparisonString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_http_check#created_at CreateHttpCheck#created_at}
  */
  readonly createdAt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_http_check#updated_at CreateHttpCheck#updated_at}
  */
  readonly updatedAt?: string;
}

export function createHttpCheckSuccessCriteriaToTerraform(struct?: CreateHttpCheckSuccessCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_type: cdktf.stringToTerraform(struct!.actionType),
    comparison_string: cdktf.stringToTerraform(struct!.comparisonString),
    created_at: cdktf.stringToTerraform(struct!.createdAt),
    updated_at: cdktf.stringToTerraform(struct!.updatedAt),
  }
}


export function createHttpCheckSuccessCriteriaToHclTerraform(struct?: CreateHttpCheckSuccessCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_type: {
      value: cdktf.stringToHclTerraform(struct!.actionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    comparison_string: {
      value: cdktf.stringToHclTerraform(struct!.comparisonString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    created_at: {
      value: cdktf.stringToHclTerraform(struct!.createdAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    updated_at: {
      value: cdktf.stringToHclTerraform(struct!.updatedAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CreateHttpCheckSuccessCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CreateHttpCheckSuccessCriteria | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionType = this._actionType;
    }
    if (this._comparisonString !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparisonString = this._comparisonString;
    }
    if (this._createdAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.createdAt = this._createdAt;
    }
    if (this._updatedAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.updatedAt = this._updatedAt;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CreateHttpCheckSuccessCriteria | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionType = undefined;
      this._comparisonString = undefined;
      this._createdAt = undefined;
      this._updatedAt = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionType = value.actionType;
      this._comparisonString = value.comparisonString;
      this._createdAt = value.createdAt;
      this._updatedAt = value.updatedAt;
    }
  }

  // action_type - computed: false, optional: true, required: false
  private _actionType?: string; 
  public get actionType() {
    return this.getStringAttribute('action_type');
  }
  public set actionType(value: string) {
    this._actionType = value;
  }
  public resetActionType() {
    this._actionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionTypeInput() {
    return this._actionType;
  }

  // comparison_string - computed: false, optional: true, required: false
  private _comparisonString?: string; 
  public get comparisonString() {
    return this.getStringAttribute('comparison_string');
  }
  public set comparisonString(value: string) {
    this._comparisonString = value;
  }
  public resetComparisonString() {
    this._comparisonString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonStringInput() {
    return this._comparisonString;
  }

  // created_at - computed: false, optional: true, required: false
  private _createdAt?: string; 
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }
  public set createdAt(value: string) {
    this._createdAt = value;
  }
  public resetCreatedAt() {
    this._createdAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdAtInput() {
    return this._createdAt;
  }

  // updated_at - computed: false, optional: true, required: false
  private _updatedAt?: string; 
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
  public set updatedAt(value: string) {
    this._updatedAt = value;
  }
  public resetUpdatedAt() {
    this._updatedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedAtInput() {
    return this._updatedAt;
  }
}

export class CreateHttpCheckSuccessCriteriaList extends cdktf.ComplexList {
  public internalValue? : CreateHttpCheckSuccessCriteria[] | cdktf.IResolvable

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
  public get(index: number): CreateHttpCheckSuccessCriteriaOutputReference {
    return new CreateHttpCheckSuccessCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_http_check synthetics_create_http_check}
*/
export class CreateHttpCheck extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "synthetics_create_http_check";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CreateHttpCheck resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CreateHttpCheck to import
  * @param importFromId The id of the existing CreateHttpCheck that should be imported. Refer to the {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_http_check#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CreateHttpCheck to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "synthetics_create_http_check", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_http_check synthetics_create_http_check} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CreateHttpCheckConfig
  */
  public constructor(scope: Construct, id: string, config: CreateHttpCheckConfig) {
    super(scope, id, {
      terraformResourceType: 'synthetics_create_http_check',
      terraformGeneratorMetadata: {
        providerName: 'synthetics',
        providerVersion: '2.0.17',
        providerVersionConstraint: '2.0.17'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoRetry = config.autoRetry;
    this._enabled = config.enabled;
    this._frequency = config.frequency;
    this._httpMethod = config.httpMethod;
    this._httpRequestBody = config.httpRequestBody;
    this._id = config.id;
    this._integrations = config.integrations;
    this._lastUpdated = config.lastUpdated;
    this._locations = config.locations;
    this._name = config.name;
    this._roundRobin = config.roundRobin;
    this._tags = config.tags;
    this._url = config.url;
    this._blackoutPeriods.internalValue = config.blackoutPeriods;
    this._checkConnection.internalValue = config.checkConnection;
    this._httpRequestHeaders.internalValue = config.httpRequestHeaders;
    this._notifications.internalValue = config.notifications;
    this._successCriteria.internalValue = config.successCriteria;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_retry - computed: false, optional: true, required: false
  private _autoRetry?: boolean | cdktf.IResolvable; 
  public get autoRetry() {
    return this.getBooleanAttribute('auto_retry');
  }
  public set autoRetry(value: boolean | cdktf.IResolvable) {
    this._autoRetry = value;
  }
  public resetAutoRetry() {
    this._autoRetry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRetryInput() {
    return this._autoRetry;
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

  // frequency - computed: false, optional: false, required: true
  private _frequency?: number; 
  public get frequency() {
    return this.getNumberAttribute('frequency');
  }
  public set frequency(value: number) {
    this._frequency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }

  // http_method - computed: false, optional: true, required: false
  private _httpMethod?: string; 
  public get httpMethod() {
    return this.getStringAttribute('http_method');
  }
  public set httpMethod(value: string) {
    this._httpMethod = value;
  }
  public resetHttpMethod() {
    this._httpMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMethodInput() {
    return this._httpMethod;
  }

  // http_request_body - computed: false, optional: true, required: false
  private _httpRequestBody?: string; 
  public get httpRequestBody() {
    return this.getStringAttribute('http_request_body');
  }
  public set httpRequestBody(value: string) {
    this._httpRequestBody = value;
  }
  public resetHttpRequestBody() {
    this._httpRequestBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRequestBodyInput() {
    return this._httpRequestBody;
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

  // integrations - computed: false, optional: true, required: false
  private _integrations?: number[]; 
  public get integrations() {
    return this.getNumberListAttribute('integrations');
  }
  public set integrations(value: number[]) {
    this._integrations = value;
  }
  public resetIntegrations() {
    this._integrations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationsInput() {
    return this._integrations;
  }

  // last_updated - computed: true, optional: true, required: false
  private _lastUpdated?: string; 
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }
  public set lastUpdated(value: string) {
    this._lastUpdated = value;
  }
  public resetLastUpdated() {
    this._lastUpdated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastUpdatedInput() {
    return this._lastUpdated;
  }

  // locations - computed: false, optional: true, required: false
  private _locations?: number[]; 
  public get locations() {
    return this.getNumberListAttribute('locations');
  }
  public set locations(value: number[]) {
    this._locations = value;
  }
  public resetLocations() {
    this._locations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationsInput() {
    return this._locations;
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

  // round_robin - computed: false, optional: true, required: false
  private _roundRobin?: boolean | cdktf.IResolvable; 
  public get roundRobin() {
    return this.getBooleanAttribute('round_robin');
  }
  public set roundRobin(value: boolean | cdktf.IResolvable) {
    this._roundRobin = value;
  }
  public resetRoundRobin() {
    this._roundRobin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roundRobinInput() {
    return this._roundRobin;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
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

  // blackout_periods - computed: false, optional: true, required: false
  private _blackoutPeriods = new CreateHttpCheckBlackoutPeriodsList(this, "blackout_periods", true);
  public get blackoutPeriods() {
    return this._blackoutPeriods;
  }
  public putBlackoutPeriods(value: CreateHttpCheckBlackoutPeriods[] | cdktf.IResolvable) {
    this._blackoutPeriods.internalValue = value;
  }
  public resetBlackoutPeriods() {
    this._blackoutPeriods.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blackoutPeriodsInput() {
    return this._blackoutPeriods.internalValue;
  }

  // check_connection - computed: false, optional: true, required: false
  private _checkConnection = new CreateHttpCheckCheckConnectionList(this, "check_connection", true);
  public get checkConnection() {
    return this._checkConnection;
  }
  public putCheckConnection(value: CreateHttpCheckCheckConnection[] | cdktf.IResolvable) {
    this._checkConnection.internalValue = value;
  }
  public resetCheckConnection() {
    this._checkConnection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkConnectionInput() {
    return this._checkConnection.internalValue;
  }

  // http_request_headers - computed: false, optional: true, required: false
  private _httpRequestHeaders = new CreateHttpCheckHttpRequestHeadersList(this, "http_request_headers", false);
  public get httpRequestHeaders() {
    return this._httpRequestHeaders;
  }
  public putHttpRequestHeaders(value: CreateHttpCheckHttpRequestHeaders[] | cdktf.IResolvable) {
    this._httpRequestHeaders.internalValue = value;
  }
  public resetHttpRequestHeaders() {
    this._httpRequestHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRequestHeadersInput() {
    return this._httpRequestHeaders.internalValue;
  }

  // notifications - computed: false, optional: true, required: false
  private _notifications = new CreateHttpCheckNotificationsList(this, "notifications", true);
  public get notifications() {
    return this._notifications;
  }
  public putNotifications(value: CreateHttpCheckNotifications[] | cdktf.IResolvable) {
    this._notifications.internalValue = value;
  }
  public resetNotifications() {
    this._notifications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationsInput() {
    return this._notifications.internalValue;
  }

  // success_criteria - computed: false, optional: true, required: false
  private _successCriteria = new CreateHttpCheckSuccessCriteriaList(this, "success_criteria", true);
  public get successCriteria() {
    return this._successCriteria;
  }
  public putSuccessCriteria(value: CreateHttpCheckSuccessCriteria[] | cdktf.IResolvable) {
    this._successCriteria.internalValue = value;
  }
  public resetSuccessCriteria() {
    this._successCriteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successCriteriaInput() {
    return this._successCriteria.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_retry: cdktf.booleanToTerraform(this._autoRetry),
      enabled: cdktf.booleanToTerraform(this._enabled),
      frequency: cdktf.numberToTerraform(this._frequency),
      http_method: cdktf.stringToTerraform(this._httpMethod),
      http_request_body: cdktf.stringToTerraform(this._httpRequestBody),
      id: cdktf.stringToTerraform(this._id),
      integrations: cdktf.listMapper(cdktf.numberToTerraform, false)(this._integrations),
      last_updated: cdktf.stringToTerraform(this._lastUpdated),
      locations: cdktf.listMapper(cdktf.numberToTerraform, false)(this._locations),
      name: cdktf.stringToTerraform(this._name),
      round_robin: cdktf.booleanToTerraform(this._roundRobin),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      url: cdktf.stringToTerraform(this._url),
      blackout_periods: cdktf.listMapper(createHttpCheckBlackoutPeriodsToTerraform, true)(this._blackoutPeriods.internalValue),
      check_connection: cdktf.listMapper(createHttpCheckCheckConnectionToTerraform, true)(this._checkConnection.internalValue),
      http_request_headers: cdktf.listMapper(createHttpCheckHttpRequestHeadersToTerraform, true)(this._httpRequestHeaders.internalValue),
      notifications: cdktf.listMapper(createHttpCheckNotificationsToTerraform, true)(this._notifications.internalValue),
      success_criteria: cdktf.listMapper(createHttpCheckSuccessCriteriaToTerraform, true)(this._successCriteria.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_retry: {
        value: cdktf.booleanToHclTerraform(this._autoRetry),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      frequency: {
        value: cdktf.numberToHclTerraform(this._frequency),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      http_method: {
        value: cdktf.stringToHclTerraform(this._httpMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_request_body: {
        value: cdktf.stringToHclTerraform(this._httpRequestBody),
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
      integrations: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._integrations),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      last_updated: {
        value: cdktf.stringToHclTerraform(this._lastUpdated),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      locations: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._locations),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      round_robin: {
        value: cdktf.booleanToHclTerraform(this._roundRobin),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      blackout_periods: {
        value: cdktf.listMapperHcl(createHttpCheckBlackoutPeriodsToHclTerraform, true)(this._blackoutPeriods.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CreateHttpCheckBlackoutPeriodsList",
      },
      check_connection: {
        value: cdktf.listMapperHcl(createHttpCheckCheckConnectionToHclTerraform, true)(this._checkConnection.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CreateHttpCheckCheckConnectionList",
      },
      http_request_headers: {
        value: cdktf.listMapperHcl(createHttpCheckHttpRequestHeadersToHclTerraform, true)(this._httpRequestHeaders.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CreateHttpCheckHttpRequestHeadersList",
      },
      notifications: {
        value: cdktf.listMapperHcl(createHttpCheckNotificationsToHclTerraform, true)(this._notifications.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CreateHttpCheckNotificationsList",
      },
      success_criteria: {
        value: cdktf.listMapperHcl(createHttpCheckSuccessCriteriaToHclTerraform, true)(this._successCriteria.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CreateHttpCheckSuccessCriteriaList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
