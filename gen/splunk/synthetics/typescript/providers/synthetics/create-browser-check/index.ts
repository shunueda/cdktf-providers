// https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CreateBrowserCheckConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#auto_retry CreateBrowserCheck#auto_retry}
  */
  readonly autoRetry?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#auto_update_user_agent CreateBrowserCheck#auto_update_user_agent}
  */
  readonly autoUpdateUserAgent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#enabled CreateBrowserCheck#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#enforce_ssl_validation CreateBrowserCheck#enforce_ssl_validation}
  */
  readonly enforceSslValidation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#frequency CreateBrowserCheck#frequency}
  */
  readonly frequency: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#http_method CreateBrowserCheck#http_method}
  */
  readonly httpMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#http_request_body CreateBrowserCheck#http_request_body}
  */
  readonly httpRequestBody?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#id CreateBrowserCheck#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#integrations CreateBrowserCheck#integrations}
  */
  readonly integrations?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#last_updated CreateBrowserCheck#last_updated}
  */
  readonly lastUpdated?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#locations CreateBrowserCheck#locations}
  */
  readonly locations?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#name CreateBrowserCheck#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#round_robin CreateBrowserCheck#round_robin}
  */
  readonly roundRobin?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#tags CreateBrowserCheck#tags}
  */
  readonly tags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#type CreateBrowserCheck#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#url CreateBrowserCheck#url}
  */
  readonly url: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#user_agent CreateBrowserCheck#user_agent}
  */
  readonly userAgent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#wait_for_full_metrics CreateBrowserCheck#wait_for_full_metrics}
  */
  readonly waitForFullMetrics?: boolean | cdktf.IResolvable;
  /**
  * blackout_periods block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#blackout_periods CreateBrowserCheck#blackout_periods}
  */
  readonly blackoutPeriods?: CreateBrowserCheckBlackoutPeriods[] | cdktf.IResolvable;
  /**
  * browser block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#browser CreateBrowserCheck#browser}
  */
  readonly browser?: CreateBrowserCheckBrowser[] | cdktf.IResolvable;
  /**
  * check_connection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#check_connection CreateBrowserCheck#check_connection}
  */
  readonly checkConnection?: CreateBrowserCheckCheckConnection[] | cdktf.IResolvable;
  /**
  * cookies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#cookies CreateBrowserCheck#cookies}
  */
  readonly cookies?: CreateBrowserCheckCookies[] | cdktf.IResolvable;
  /**
  * dns_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#dns_overrides CreateBrowserCheck#dns_overrides}
  */
  readonly dnsOverrides?: CreateBrowserCheckDnsOverrides[] | cdktf.IResolvable;
  /**
  * excluded_files block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#excluded_files CreateBrowserCheck#excluded_files}
  */
  readonly excludedFiles?: CreateBrowserCheckExcludedFiles[] | cdktf.IResolvable;
  /**
  * http_request_headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#http_request_headers CreateBrowserCheck#http_request_headers}
  */
  readonly httpRequestHeaders?: CreateBrowserCheckHttpRequestHeaders[] | cdktf.IResolvable;
  /**
  * javascript_files block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#javascript_files CreateBrowserCheck#javascript_files}
  */
  readonly javascriptFiles?: CreateBrowserCheckJavascriptFiles[] | cdktf.IResolvable;
  /**
  * notifications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#notifications CreateBrowserCheck#notifications}
  */
  readonly notifications?: CreateBrowserCheckNotifications[] | cdktf.IResolvable;
  /**
  * steps block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#steps CreateBrowserCheck#steps}
  */
  readonly steps?: CreateBrowserCheckSteps[] | cdktf.IResolvable;
  /**
  * success_criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#success_criteria CreateBrowserCheck#success_criteria}
  */
  readonly successCriteria?: CreateBrowserCheckSuccessCriteria[] | cdktf.IResolvable;
  /**
  * threshold_monitors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#threshold_monitors CreateBrowserCheck#threshold_monitors}
  */
  readonly thresholdMonitors?: CreateBrowserCheckThresholdMonitors[] | cdktf.IResolvable;
  /**
  * viewport block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#viewport CreateBrowserCheck#viewport}
  */
  readonly viewport?: CreateBrowserCheckViewport[] | cdktf.IResolvable;
}
export interface CreateBrowserCheckBlackoutPeriods {
}

export function createBrowserCheckBlackoutPeriodsToTerraform(struct?: CreateBrowserCheckBlackoutPeriods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function createBrowserCheckBlackoutPeriodsToHclTerraform(struct?: CreateBrowserCheckBlackoutPeriods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CreateBrowserCheckBlackoutPeriodsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CreateBrowserCheckBlackoutPeriods | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CreateBrowserCheckBlackoutPeriods | cdktf.IResolvable | undefined) {
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

export class CreateBrowserCheckBlackoutPeriodsList extends cdktf.ComplexList {
  public internalValue? : CreateBrowserCheckBlackoutPeriods[] | cdktf.IResolvable

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
  public get(index: number): CreateBrowserCheckBlackoutPeriodsOutputReference {
    return new CreateBrowserCheckBlackoutPeriodsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CreateBrowserCheckBrowser {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#type CreateBrowserCheck#type}
  */
  readonly type?: string;
}

export function createBrowserCheckBrowserToTerraform(struct?: CreateBrowserCheckBrowser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function createBrowserCheckBrowserToHclTerraform(struct?: CreateBrowserCheckBrowser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class CreateBrowserCheckBrowserOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CreateBrowserCheckBrowser | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CreateBrowserCheckBrowser | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
    }
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

export class CreateBrowserCheckBrowserList extends cdktf.ComplexList {
  public internalValue? : CreateBrowserCheckBrowser[] | cdktf.IResolvable

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
  public get(index: number): CreateBrowserCheckBrowserOutputReference {
    return new CreateBrowserCheckBrowserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CreateBrowserCheckCheckConnection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#download_bandwidth CreateBrowserCheck#download_bandwidth}
  */
  readonly downloadBandwidth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#latency CreateBrowserCheck#latency}
  */
  readonly latency?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#packet_loss CreateBrowserCheck#packet_loss}
  */
  readonly packetLoss?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#upload_bandwidth CreateBrowserCheck#upload_bandwidth}
  */
  readonly uploadBandwidth?: number;
}

export function createBrowserCheckCheckConnectionToTerraform(struct?: CreateBrowserCheckCheckConnection | cdktf.IResolvable): any {
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


export function createBrowserCheckCheckConnectionToHclTerraform(struct?: CreateBrowserCheckCheckConnection | cdktf.IResolvable): any {
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

export class CreateBrowserCheckCheckConnectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CreateBrowserCheckCheckConnection | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CreateBrowserCheckCheckConnection | cdktf.IResolvable | undefined) {
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

export class CreateBrowserCheckCheckConnectionList extends cdktf.ComplexList {
  public internalValue? : CreateBrowserCheckCheckConnection[] | cdktf.IResolvable

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
  public get(index: number): CreateBrowserCheckCheckConnectionOutputReference {
    return new CreateBrowserCheckCheckConnectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CreateBrowserCheckCookies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#domain CreateBrowserCheck#domain}
  */
  readonly domain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#key CreateBrowserCheck#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#path CreateBrowserCheck#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#value CreateBrowserCheck#value}
  */
  readonly value?: string;
}

export function createBrowserCheckCookiesToTerraform(struct?: CreateBrowserCheckCookies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
    key: cdktf.stringToTerraform(struct!.key),
    path: cdktf.stringToTerraform(struct!.path),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function createBrowserCheckCookiesToHclTerraform(struct?: CreateBrowserCheckCookies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
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

export class CreateBrowserCheckCookiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CreateBrowserCheckCookies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CreateBrowserCheckCookies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domain = undefined;
      this._key = undefined;
      this._path = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domain = value.domain;
      this._key = value.key;
      this._path = value.path;
      this._value = value.value;
    }
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

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
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

export class CreateBrowserCheckCookiesList extends cdktf.ComplexList {
  public internalValue? : CreateBrowserCheckCookies[] | cdktf.IResolvable

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
  public get(index: number): CreateBrowserCheckCookiesOutputReference {
    return new CreateBrowserCheckCookiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CreateBrowserCheckDnsOverrides {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#original_domain CreateBrowserCheck#original_domain}
  */
  readonly originalDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#original_host CreateBrowserCheck#original_host}
  */
  readonly originalHost?: string;
}

export function createBrowserCheckDnsOverridesToTerraform(struct?: CreateBrowserCheckDnsOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    original_domain: cdktf.stringToTerraform(struct!.originalDomain),
    original_host: cdktf.stringToTerraform(struct!.originalHost),
  }
}


export function createBrowserCheckDnsOverridesToHclTerraform(struct?: CreateBrowserCheckDnsOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    original_domain: {
      value: cdktf.stringToHclTerraform(struct!.originalDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    original_host: {
      value: cdktf.stringToHclTerraform(struct!.originalHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CreateBrowserCheckDnsOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CreateBrowserCheckDnsOverrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._originalDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.originalDomain = this._originalDomain;
    }
    if (this._originalHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.originalHost = this._originalHost;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CreateBrowserCheckDnsOverrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._originalDomain = undefined;
      this._originalHost = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._originalDomain = value.originalDomain;
      this._originalHost = value.originalHost;
    }
  }

  // original_domain - computed: false, optional: true, required: false
  private _originalDomain?: string; 
  public get originalDomain() {
    return this.getStringAttribute('original_domain');
  }
  public set originalDomain(value: string) {
    this._originalDomain = value;
  }
  public resetOriginalDomain() {
    this._originalDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originalDomainInput() {
    return this._originalDomain;
  }

  // original_host - computed: false, optional: true, required: false
  private _originalHost?: string; 
  public get originalHost() {
    return this.getStringAttribute('original_host');
  }
  public set originalHost(value: string) {
    this._originalHost = value;
  }
  public resetOriginalHost() {
    this._originalHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originalHostInput() {
    return this._originalHost;
  }
}

export class CreateBrowserCheckDnsOverridesList extends cdktf.ComplexList {
  public internalValue? : CreateBrowserCheckDnsOverrides[] | cdktf.IResolvable

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
  public get(index: number): CreateBrowserCheckDnsOverridesOutputReference {
    return new CreateBrowserCheckDnsOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CreateBrowserCheckExcludedFiles {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#exclusion_type CreateBrowserCheck#exclusion_type}
  */
  readonly exclusionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#pattern CreateBrowserCheck#pattern}
  */
  readonly pattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#preset_name CreateBrowserCheck#preset_name}
  */
  readonly presetName?: string;
}

export function createBrowserCheckExcludedFilesToTerraform(struct?: CreateBrowserCheckExcludedFiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclusion_type: cdktf.stringToTerraform(struct!.exclusionType),
    pattern: cdktf.stringToTerraform(struct!.pattern),
    preset_name: cdktf.stringToTerraform(struct!.presetName),
  }
}


export function createBrowserCheckExcludedFilesToHclTerraform(struct?: CreateBrowserCheckExcludedFiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclusion_type: {
      value: cdktf.stringToHclTerraform(struct!.exclusionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preset_name: {
      value: cdktf.stringToHclTerraform(struct!.presetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CreateBrowserCheckExcludedFilesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CreateBrowserCheckExcludedFiles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclusionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusionType = this._exclusionType;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    if (this._presetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.presetName = this._presetName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CreateBrowserCheckExcludedFiles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exclusionType = undefined;
      this._pattern = undefined;
      this._presetName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exclusionType = value.exclusionType;
      this._pattern = value.pattern;
      this._presetName = value.presetName;
    }
  }

  // exclusion_type - computed: false, optional: true, required: false
  private _exclusionType?: string; 
  public get exclusionType() {
    return this.getStringAttribute('exclusion_type');
  }
  public set exclusionType(value: string) {
    this._exclusionType = value;
  }
  public resetExclusionType() {
    this._exclusionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionTypeInput() {
    return this._exclusionType;
  }

  // pattern - computed: false, optional: true, required: false
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }

  // preset_name - computed: false, optional: true, required: false
  private _presetName?: string; 
  public get presetName() {
    return this.getStringAttribute('preset_name');
  }
  public set presetName(value: string) {
    this._presetName = value;
  }
  public resetPresetName() {
    this._presetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presetNameInput() {
    return this._presetName;
  }
}

export class CreateBrowserCheckExcludedFilesList extends cdktf.ComplexList {
  public internalValue? : CreateBrowserCheckExcludedFiles[] | cdktf.IResolvable

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
  public get(index: number): CreateBrowserCheckExcludedFilesOutputReference {
    return new CreateBrowserCheckExcludedFilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CreateBrowserCheckHttpRequestHeaders {
}

export function createBrowserCheckHttpRequestHeadersToTerraform(struct?: CreateBrowserCheckHttpRequestHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function createBrowserCheckHttpRequestHeadersToHclTerraform(struct?: CreateBrowserCheckHttpRequestHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CreateBrowserCheckHttpRequestHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CreateBrowserCheckHttpRequestHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CreateBrowserCheckHttpRequestHeaders | cdktf.IResolvable | undefined) {
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

export class CreateBrowserCheckHttpRequestHeadersList extends cdktf.ComplexList {
  public internalValue? : CreateBrowserCheckHttpRequestHeaders[] | cdktf.IResolvable

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
  public get(index: number): CreateBrowserCheckHttpRequestHeadersOutputReference {
    return new CreateBrowserCheckHttpRequestHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CreateBrowserCheckJavascriptFiles {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#id CreateBrowserCheck#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#name CreateBrowserCheck#name}
  */
  readonly name?: string;
}

export function createBrowserCheckJavascriptFilesToTerraform(struct?: CreateBrowserCheckJavascriptFiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function createBrowserCheckJavascriptFilesToHclTerraform(struct?: CreateBrowserCheckJavascriptFiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CreateBrowserCheckJavascriptFilesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CreateBrowserCheckJavascriptFiles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CreateBrowserCheckJavascriptFiles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
    }
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
}

export class CreateBrowserCheckJavascriptFilesList extends cdktf.ComplexList {
  public internalValue? : CreateBrowserCheckJavascriptFiles[] | cdktf.IResolvable

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
  public get(index: number): CreateBrowserCheckJavascriptFilesOutputReference {
    return new CreateBrowserCheckJavascriptFilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CreateBrowserCheckNotificationsEscalationsNotificationWindow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#duration_in_minutes CreateBrowserCheck#duration_in_minutes}
  */
  readonly durationInMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#end_time CreateBrowserCheck#end_time}
  */
  readonly endTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#start_time CreateBrowserCheck#start_time}
  */
  readonly startTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#time_zone CreateBrowserCheck#time_zone}
  */
  readonly timeZone?: string;
}

export function createBrowserCheckNotificationsEscalationsNotificationWindowToTerraform(struct?: CreateBrowserCheckNotificationsEscalationsNotificationWindow | cdktf.IResolvable): any {
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


export function createBrowserCheckNotificationsEscalationsNotificationWindowToHclTerraform(struct?: CreateBrowserCheckNotificationsEscalationsNotificationWindow | cdktf.IResolvable): any {
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

export class CreateBrowserCheckNotificationsEscalationsNotificationWindowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CreateBrowserCheckNotificationsEscalationsNotificationWindow | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CreateBrowserCheckNotificationsEscalationsNotificationWindow | cdktf.IResolvable | undefined) {
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

export class CreateBrowserCheckNotificationsEscalationsNotificationWindowList extends cdktf.ComplexList {
  public internalValue? : CreateBrowserCheckNotificationsEscalationsNotificationWindow[] | cdktf.IResolvable

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
  public get(index: number): CreateBrowserCheckNotificationsEscalationsNotificationWindowOutputReference {
    return new CreateBrowserCheckNotificationsEscalationsNotificationWindowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CreateBrowserCheckNotificationsEscalationsNotifyWhoLinks {
}

export function createBrowserCheckNotificationsEscalationsNotifyWhoLinksToTerraform(struct?: CreateBrowserCheckNotificationsEscalationsNotifyWhoLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function createBrowserCheckNotificationsEscalationsNotifyWhoLinksToHclTerraform(struct?: CreateBrowserCheckNotificationsEscalationsNotifyWhoLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CreateBrowserCheckNotificationsEscalationsNotifyWhoLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CreateBrowserCheckNotificationsEscalationsNotifyWhoLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CreateBrowserCheckNotificationsEscalationsNotifyWhoLinks | undefined) {
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

export class CreateBrowserCheckNotificationsEscalationsNotifyWhoLinksList extends cdktf.ComplexList {

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
  public get(index: number): CreateBrowserCheckNotificationsEscalationsNotifyWhoLinksOutputReference {
    return new CreateBrowserCheckNotificationsEscalationsNotifyWhoLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CreateBrowserCheckNotificationsEscalationsNotifyWho {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#call CreateBrowserCheck#call}
  */
  readonly call?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#custom_user_email CreateBrowserCheck#custom_user_email}
  */
  readonly customUserEmail?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#email CreateBrowserCheck#email}
  */
  readonly email?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#id CreateBrowserCheck#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#sms CreateBrowserCheck#sms}
  */
  readonly sms?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#type CreateBrowserCheck#type}
  */
  readonly type?: string;
}

export function createBrowserCheckNotificationsEscalationsNotifyWhoToTerraform(struct?: CreateBrowserCheckNotificationsEscalationsNotifyWho | cdktf.IResolvable): any {
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


export function createBrowserCheckNotificationsEscalationsNotifyWhoToHclTerraform(struct?: CreateBrowserCheckNotificationsEscalationsNotifyWho | cdktf.IResolvable): any {
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

export class CreateBrowserCheckNotificationsEscalationsNotifyWhoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CreateBrowserCheckNotificationsEscalationsNotifyWho | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CreateBrowserCheckNotificationsEscalationsNotifyWho | cdktf.IResolvable | undefined) {
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
  private _links = new CreateBrowserCheckNotificationsEscalationsNotifyWhoLinksList(this, "links", true);
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

export class CreateBrowserCheckNotificationsEscalationsNotifyWhoList extends cdktf.ComplexList {
  public internalValue? : CreateBrowserCheckNotificationsEscalationsNotifyWho[] | cdktf.IResolvable

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
  public get(index: number): CreateBrowserCheckNotificationsEscalationsNotifyWhoOutputReference {
    return new CreateBrowserCheckNotificationsEscalationsNotifyWhoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CreateBrowserCheckNotificationsEscalations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#after_minutes CreateBrowserCheck#after_minutes}
  */
  readonly afterMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#call CreateBrowserCheck#call}
  */
  readonly call?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#email CreateBrowserCheck#email}
  */
  readonly email?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#sms CreateBrowserCheck#sms}
  */
  readonly sms?: boolean | cdktf.IResolvable;
  /**
  * notification_window block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#notification_window CreateBrowserCheck#notification_window}
  */
  readonly notificationWindow?: CreateBrowserCheckNotificationsEscalationsNotificationWindow[] | cdktf.IResolvable;
  /**
  * notify_who block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#notify_who CreateBrowserCheck#notify_who}
  */
  readonly notifyWho?: CreateBrowserCheckNotificationsEscalationsNotifyWho[] | cdktf.IResolvable;
}

export function createBrowserCheckNotificationsEscalationsToTerraform(struct?: CreateBrowserCheckNotificationsEscalations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    after_minutes: cdktf.numberToTerraform(struct!.afterMinutes),
    call: cdktf.booleanToTerraform(struct!.call),
    email: cdktf.booleanToTerraform(struct!.email),
    sms: cdktf.booleanToTerraform(struct!.sms),
    notification_window: cdktf.listMapper(createBrowserCheckNotificationsEscalationsNotificationWindowToTerraform, true)(struct!.notificationWindow),
    notify_who: cdktf.listMapper(createBrowserCheckNotificationsEscalationsNotifyWhoToTerraform, true)(struct!.notifyWho),
  }
}


export function createBrowserCheckNotificationsEscalationsToHclTerraform(struct?: CreateBrowserCheckNotificationsEscalations | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(createBrowserCheckNotificationsEscalationsNotificationWindowToHclTerraform, true)(struct!.notificationWindow),
      isBlock: true,
      type: "set",
      storageClassType: "CreateBrowserCheckNotificationsEscalationsNotificationWindowList",
    },
    notify_who: {
      value: cdktf.listMapperHcl(createBrowserCheckNotificationsEscalationsNotifyWhoToHclTerraform, true)(struct!.notifyWho),
      isBlock: true,
      type: "set",
      storageClassType: "CreateBrowserCheckNotificationsEscalationsNotifyWhoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CreateBrowserCheckNotificationsEscalationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CreateBrowserCheckNotificationsEscalations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CreateBrowserCheckNotificationsEscalations | cdktf.IResolvable | undefined) {
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
  private _notificationWindow = new CreateBrowserCheckNotificationsEscalationsNotificationWindowList(this, "notification_window", true);
  public get notificationWindow() {
    return this._notificationWindow;
  }
  public putNotificationWindow(value: CreateBrowserCheckNotificationsEscalationsNotificationWindow[] | cdktf.IResolvable) {
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
  private _notifyWho = new CreateBrowserCheckNotificationsEscalationsNotifyWhoList(this, "notify_who", true);
  public get notifyWho() {
    return this._notifyWho;
  }
  public putNotifyWho(value: CreateBrowserCheckNotificationsEscalationsNotifyWho[] | cdktf.IResolvable) {
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

export class CreateBrowserCheckNotificationsEscalationsList extends cdktf.ComplexList {
  public internalValue? : CreateBrowserCheckNotificationsEscalations[] | cdktf.IResolvable

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
  public get(index: number): CreateBrowserCheckNotificationsEscalationsOutputReference {
    return new CreateBrowserCheckNotificationsEscalationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CreateBrowserCheckNotificationsNotificationWindows {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#duration_in_minutes CreateBrowserCheck#duration_in_minutes}
  */
  readonly durationInMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#end_time CreateBrowserCheck#end_time}
  */
  readonly endTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#start_time CreateBrowserCheck#start_time}
  */
  readonly startTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#time_zone CreateBrowserCheck#time_zone}
  */
  readonly timeZone?: string;
}

export function createBrowserCheckNotificationsNotificationWindowsToTerraform(struct?: CreateBrowserCheckNotificationsNotificationWindows | cdktf.IResolvable): any {
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


export function createBrowserCheckNotificationsNotificationWindowsToHclTerraform(struct?: CreateBrowserCheckNotificationsNotificationWindows | cdktf.IResolvable): any {
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

export class CreateBrowserCheckNotificationsNotificationWindowsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CreateBrowserCheckNotificationsNotificationWindows | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CreateBrowserCheckNotificationsNotificationWindows | cdktf.IResolvable | undefined) {
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

export class CreateBrowserCheckNotificationsNotificationWindowsList extends cdktf.ComplexList {
  public internalValue? : CreateBrowserCheckNotificationsNotificationWindows[] | cdktf.IResolvable

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
  public get(index: number): CreateBrowserCheckNotificationsNotificationWindowsOutputReference {
    return new CreateBrowserCheckNotificationsNotificationWindowsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CreateBrowserCheckNotificationsNotifyWhoLinks {
}

export function createBrowserCheckNotificationsNotifyWhoLinksToTerraform(struct?: CreateBrowserCheckNotificationsNotifyWhoLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function createBrowserCheckNotificationsNotifyWhoLinksToHclTerraform(struct?: CreateBrowserCheckNotificationsNotifyWhoLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CreateBrowserCheckNotificationsNotifyWhoLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CreateBrowserCheckNotificationsNotifyWhoLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CreateBrowserCheckNotificationsNotifyWhoLinks | undefined) {
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

export class CreateBrowserCheckNotificationsNotifyWhoLinksList extends cdktf.ComplexList {

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
  public get(index: number): CreateBrowserCheckNotificationsNotifyWhoLinksOutputReference {
    return new CreateBrowserCheckNotificationsNotifyWhoLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CreateBrowserCheckNotificationsNotifyWho {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#call CreateBrowserCheck#call}
  */
  readonly call?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#custom_user_email CreateBrowserCheck#custom_user_email}
  */
  readonly customUserEmail?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#email CreateBrowserCheck#email}
  */
  readonly email?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#id CreateBrowserCheck#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#sms CreateBrowserCheck#sms}
  */
  readonly sms?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#type CreateBrowserCheck#type}
  */
  readonly type?: string;
}

export function createBrowserCheckNotificationsNotifyWhoToTerraform(struct?: CreateBrowserCheckNotificationsNotifyWho | cdktf.IResolvable): any {
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


export function createBrowserCheckNotificationsNotifyWhoToHclTerraform(struct?: CreateBrowserCheckNotificationsNotifyWho | cdktf.IResolvable): any {
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

export class CreateBrowserCheckNotificationsNotifyWhoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CreateBrowserCheckNotificationsNotifyWho | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CreateBrowserCheckNotificationsNotifyWho | cdktf.IResolvable | undefined) {
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
  private _links = new CreateBrowserCheckNotificationsNotifyWhoLinksList(this, "links", true);
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

export class CreateBrowserCheckNotificationsNotifyWhoList extends cdktf.ComplexList {
  public internalValue? : CreateBrowserCheckNotificationsNotifyWho[] | cdktf.IResolvable

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
  public get(index: number): CreateBrowserCheckNotificationsNotifyWhoOutputReference {
    return new CreateBrowserCheckNotificationsNotifyWhoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CreateBrowserCheckNotifications {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#call CreateBrowserCheck#call}
  */
  readonly call?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#email CreateBrowserCheck#email}
  */
  readonly email?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#muted CreateBrowserCheck#muted}
  */
  readonly muted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#notify_after_failure_count CreateBrowserCheck#notify_after_failure_count}
  */
  readonly notifyAfterFailureCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#notify_on_location_failure CreateBrowserCheck#notify_on_location_failure}
  */
  readonly notifyOnLocationFailure?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#sms CreateBrowserCheck#sms}
  */
  readonly sms?: boolean | cdktf.IResolvable;
  /**
  * escalations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#escalations CreateBrowserCheck#escalations}
  */
  readonly escalations?: CreateBrowserCheckNotificationsEscalations[] | cdktf.IResolvable;
  /**
  * notification_windows block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#notification_windows CreateBrowserCheck#notification_windows}
  */
  readonly notificationWindows?: CreateBrowserCheckNotificationsNotificationWindows[] | cdktf.IResolvable;
  /**
  * notify_who block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#notify_who CreateBrowserCheck#notify_who}
  */
  readonly notifyWho?: CreateBrowserCheckNotificationsNotifyWho[] | cdktf.IResolvable;
}

export function createBrowserCheckNotificationsToTerraform(struct?: CreateBrowserCheckNotifications | cdktf.IResolvable): any {
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
    escalations: cdktf.listMapper(createBrowserCheckNotificationsEscalationsToTerraform, true)(struct!.escalations),
    notification_windows: cdktf.listMapper(createBrowserCheckNotificationsNotificationWindowsToTerraform, true)(struct!.notificationWindows),
    notify_who: cdktf.listMapper(createBrowserCheckNotificationsNotifyWhoToTerraform, true)(struct!.notifyWho),
  }
}


export function createBrowserCheckNotificationsToHclTerraform(struct?: CreateBrowserCheckNotifications | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(createBrowserCheckNotificationsEscalationsToHclTerraform, true)(struct!.escalations),
      isBlock: true,
      type: "set",
      storageClassType: "CreateBrowserCheckNotificationsEscalationsList",
    },
    notification_windows: {
      value: cdktf.listMapperHcl(createBrowserCheckNotificationsNotificationWindowsToHclTerraform, true)(struct!.notificationWindows),
      isBlock: true,
      type: "set",
      storageClassType: "CreateBrowserCheckNotificationsNotificationWindowsList",
    },
    notify_who: {
      value: cdktf.listMapperHcl(createBrowserCheckNotificationsNotifyWhoToHclTerraform, true)(struct!.notifyWho),
      isBlock: true,
      type: "set",
      storageClassType: "CreateBrowserCheckNotificationsNotifyWhoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CreateBrowserCheckNotificationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CreateBrowserCheckNotifications | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CreateBrowserCheckNotifications | cdktf.IResolvable | undefined) {
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
  private _escalations = new CreateBrowserCheckNotificationsEscalationsList(this, "escalations", true);
  public get escalations() {
    return this._escalations;
  }
  public putEscalations(value: CreateBrowserCheckNotificationsEscalations[] | cdktf.IResolvable) {
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
  private _notificationWindows = new CreateBrowserCheckNotificationsNotificationWindowsList(this, "notification_windows", true);
  public get notificationWindows() {
    return this._notificationWindows;
  }
  public putNotificationWindows(value: CreateBrowserCheckNotificationsNotificationWindows[] | cdktf.IResolvable) {
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
  private _notifyWho = new CreateBrowserCheckNotificationsNotifyWhoList(this, "notify_who", true);
  public get notifyWho() {
    return this._notifyWho;
  }
  public putNotifyWho(value: CreateBrowserCheckNotificationsNotifyWho[] | cdktf.IResolvable) {
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

export class CreateBrowserCheckNotificationsList extends cdktf.ComplexList {
  public internalValue? : CreateBrowserCheckNotifications[] | cdktf.IResolvable

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
  public get(index: number): CreateBrowserCheckNotificationsOutputReference {
    return new CreateBrowserCheckNotificationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CreateBrowserCheckSteps {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#how CreateBrowserCheck#how}
  */
  readonly how?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#item_method CreateBrowserCheck#item_method}
  */
  readonly itemMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#name CreateBrowserCheck#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#position CreateBrowserCheck#position}
  */
  readonly position?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#value CreateBrowserCheck#value}
  */
  readonly value?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#variable_name CreateBrowserCheck#variable_name}
  */
  readonly variableName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#what CreateBrowserCheck#what}
  */
  readonly what?: string;
}

export function createBrowserCheckStepsToTerraform(struct?: CreateBrowserCheckSteps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    how: cdktf.stringToTerraform(struct!.how),
    item_method: cdktf.stringToTerraform(struct!.itemMethod),
    name: cdktf.stringToTerraform(struct!.name),
    position: cdktf.numberToTerraform(struct!.position),
    value: cdktf.stringToTerraform(struct!.value),
    variable_name: cdktf.stringToTerraform(struct!.variableName),
    what: cdktf.stringToTerraform(struct!.what),
  }
}


export function createBrowserCheckStepsToHclTerraform(struct?: CreateBrowserCheckSteps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    how: {
      value: cdktf.stringToHclTerraform(struct!.how),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    item_method: {
      value: cdktf.stringToHclTerraform(struct!.itemMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    position: {
      value: cdktf.numberToHclTerraform(struct!.position),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    variable_name: {
      value: cdktf.stringToHclTerraform(struct!.variableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    what: {
      value: cdktf.stringToHclTerraform(struct!.what),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CreateBrowserCheckStepsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CreateBrowserCheckSteps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._how !== undefined) {
      hasAnyValues = true;
      internalValueResult.how = this._how;
    }
    if (this._itemMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.itemMethod = this._itemMethod;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._position !== undefined) {
      hasAnyValues = true;
      internalValueResult.position = this._position;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._variableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.variableName = this._variableName;
    }
    if (this._what !== undefined) {
      hasAnyValues = true;
      internalValueResult.what = this._what;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CreateBrowserCheckSteps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._how = undefined;
      this._itemMethod = undefined;
      this._name = undefined;
      this._position = undefined;
      this._value = undefined;
      this._variableName = undefined;
      this._what = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._how = value.how;
      this._itemMethod = value.itemMethod;
      this._name = value.name;
      this._position = value.position;
      this._value = value.value;
      this._variableName = value.variableName;
      this._what = value.what;
    }
  }

  // how - computed: false, optional: true, required: false
  private _how?: string; 
  public get how() {
    return this.getStringAttribute('how');
  }
  public set how(value: string) {
    this._how = value;
  }
  public resetHow() {
    this._how = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get howInput() {
    return this._how;
  }

  // item_method - computed: false, optional: true, required: false
  private _itemMethod?: string; 
  public get itemMethod() {
    return this.getStringAttribute('item_method');
  }
  public set itemMethod(value: string) {
    this._itemMethod = value;
  }
  public resetItemMethod() {
    this._itemMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemMethodInput() {
    return this._itemMethod;
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

  // position - computed: false, optional: true, required: false
  private _position?: number; 
  public get position() {
    return this.getNumberAttribute('position');
  }
  public set position(value: number) {
    this._position = value;
  }
  public resetPosition() {
    this._position = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position;
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

  // variable_name - computed: false, optional: true, required: false
  private _variableName?: string; 
  public get variableName() {
    return this.getStringAttribute('variable_name');
  }
  public set variableName(value: string) {
    this._variableName = value;
  }
  public resetVariableName() {
    this._variableName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variableNameInput() {
    return this._variableName;
  }

  // what - computed: false, optional: true, required: false
  private _what?: string; 
  public get what() {
    return this.getStringAttribute('what');
  }
  public set what(value: string) {
    this._what = value;
  }
  public resetWhat() {
    this._what = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whatInput() {
    return this._what;
  }
}

export class CreateBrowserCheckStepsList extends cdktf.ComplexList {
  public internalValue? : CreateBrowserCheckSteps[] | cdktf.IResolvable

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
  public get(index: number): CreateBrowserCheckStepsOutputReference {
    return new CreateBrowserCheckStepsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CreateBrowserCheckSuccessCriteria {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#action_type CreateBrowserCheck#action_type}
  */
  readonly actionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#comparison_string CreateBrowserCheck#comparison_string}
  */
  readonly comparisonString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#created_at CreateBrowserCheck#created_at}
  */
  readonly createdAt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#updated_at CreateBrowserCheck#updated_at}
  */
  readonly updatedAt?: string;
}

export function createBrowserCheckSuccessCriteriaToTerraform(struct?: CreateBrowserCheckSuccessCriteria | cdktf.IResolvable): any {
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


export function createBrowserCheckSuccessCriteriaToHclTerraform(struct?: CreateBrowserCheckSuccessCriteria | cdktf.IResolvable): any {
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

export class CreateBrowserCheckSuccessCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CreateBrowserCheckSuccessCriteria | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CreateBrowserCheckSuccessCriteria | cdktf.IResolvable | undefined) {
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

export class CreateBrowserCheckSuccessCriteriaList extends cdktf.ComplexList {
  public internalValue? : CreateBrowserCheckSuccessCriteria[] | cdktf.IResolvable

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
  public get(index: number): CreateBrowserCheckSuccessCriteriaOutputReference {
    return new CreateBrowserCheckSuccessCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CreateBrowserCheckThresholdMonitors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#comparison_type CreateBrowserCheck#comparison_type}
  */
  readonly comparisonType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#matcher CreateBrowserCheck#matcher}
  */
  readonly matcher?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#metric_name CreateBrowserCheck#metric_name}
  */
  readonly metricName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#value CreateBrowserCheck#value}
  */
  readonly value?: number;
}

export function createBrowserCheckThresholdMonitorsToTerraform(struct?: CreateBrowserCheckThresholdMonitors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison_type: cdktf.stringToTerraform(struct!.comparisonType),
    matcher: cdktf.stringToTerraform(struct!.matcher),
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function createBrowserCheckThresholdMonitorsToHclTerraform(struct?: CreateBrowserCheckThresholdMonitors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comparison_type: {
      value: cdktf.stringToHclTerraform(struct!.comparisonType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    matcher: {
      value: cdktf.stringToHclTerraform(struct!.matcher),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_name: {
      value: cdktf.stringToHclTerraform(struct!.metricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CreateBrowserCheckThresholdMonitorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CreateBrowserCheckThresholdMonitors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparisonType !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparisonType = this._comparisonType;
    }
    if (this._matcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.matcher = this._matcher;
    }
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CreateBrowserCheckThresholdMonitors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparisonType = undefined;
      this._matcher = undefined;
      this._metricName = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparisonType = value.comparisonType;
      this._matcher = value.matcher;
      this._metricName = value.metricName;
      this._value = value.value;
    }
  }

  // comparison_type - computed: false, optional: true, required: false
  private _comparisonType?: string; 
  public get comparisonType() {
    return this.getStringAttribute('comparison_type');
  }
  public set comparisonType(value: string) {
    this._comparisonType = value;
  }
  public resetComparisonType() {
    this._comparisonType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonTypeInput() {
    return this._comparisonType;
  }

  // matcher - computed: false, optional: true, required: false
  private _matcher?: string; 
  public get matcher() {
    return this.getStringAttribute('matcher');
  }
  public set matcher(value: string) {
    this._matcher = value;
  }
  public resetMatcher() {
    this._matcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matcherInput() {
    return this._matcher;
  }

  // metric_name - computed: false, optional: true, required: false
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  public resetMetricName() {
    this._metricName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
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

export class CreateBrowserCheckThresholdMonitorsList extends cdktf.ComplexList {
  public internalValue? : CreateBrowserCheckThresholdMonitors[] | cdktf.IResolvable

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
  public get(index: number): CreateBrowserCheckThresholdMonitorsOutputReference {
    return new CreateBrowserCheckThresholdMonitorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CreateBrowserCheckViewport {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#height CreateBrowserCheck#height}
  */
  readonly height?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#width CreateBrowserCheck#width}
  */
  readonly width?: number;
}

export function createBrowserCheckViewportToTerraform(struct?: CreateBrowserCheckViewport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    height: cdktf.numberToTerraform(struct!.height),
    width: cdktf.numberToTerraform(struct!.width),
  }
}


export function createBrowserCheckViewportToHclTerraform(struct?: CreateBrowserCheckViewport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    height: {
      value: cdktf.numberToHclTerraform(struct!.height),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    width: {
      value: cdktf.numberToHclTerraform(struct!.width),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CreateBrowserCheckViewportOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CreateBrowserCheckViewport | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._height !== undefined) {
      hasAnyValues = true;
      internalValueResult.height = this._height;
    }
    if (this._width !== undefined) {
      hasAnyValues = true;
      internalValueResult.width = this._width;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CreateBrowserCheckViewport | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._height = undefined;
      this._width = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._height = value.height;
      this._width = value.width;
    }
  }

  // height - computed: false, optional: true, required: false
  private _height?: number; 
  public get height() {
    return this.getNumberAttribute('height');
  }
  public set height(value: number) {
    this._height = value;
  }
  public resetHeight() {
    this._height = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heightInput() {
    return this._height;
  }

  // width - computed: false, optional: true, required: false
  private _width?: number; 
  public get width() {
    return this.getNumberAttribute('width');
  }
  public set width(value: number) {
    this._width = value;
  }
  public resetWidth() {
    this._width = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widthInput() {
    return this._width;
  }
}

export class CreateBrowserCheckViewportList extends cdktf.ComplexList {
  public internalValue? : CreateBrowserCheckViewport[] | cdktf.IResolvable

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
  public get(index: number): CreateBrowserCheckViewportOutputReference {
    return new CreateBrowserCheckViewportOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check synthetics_create_browser_check}
*/
export class CreateBrowserCheck extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "synthetics_create_browser_check";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CreateBrowserCheck resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CreateBrowserCheck to import
  * @param importFromId The id of the existing CreateBrowserCheck that should be imported. Refer to the {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CreateBrowserCheck to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "synthetics_create_browser_check", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check synthetics_create_browser_check} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CreateBrowserCheckConfig
  */
  public constructor(scope: Construct, id: string, config: CreateBrowserCheckConfig) {
    super(scope, id, {
      terraformResourceType: 'synthetics_create_browser_check',
      terraformGeneratorMetadata: {
        providerName: 'synthetics',
        providerVersion: '2.0.16',
        providerVersionConstraint: '2.0.16'
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
    this._autoUpdateUserAgent = config.autoUpdateUserAgent;
    this._enabled = config.enabled;
    this._enforceSslValidation = config.enforceSslValidation;
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
    this._type = config.type;
    this._url = config.url;
    this._userAgent = config.userAgent;
    this._waitForFullMetrics = config.waitForFullMetrics;
    this._blackoutPeriods.internalValue = config.blackoutPeriods;
    this._browser.internalValue = config.browser;
    this._checkConnection.internalValue = config.checkConnection;
    this._cookies.internalValue = config.cookies;
    this._dnsOverrides.internalValue = config.dnsOverrides;
    this._excludedFiles.internalValue = config.excludedFiles;
    this._httpRequestHeaders.internalValue = config.httpRequestHeaders;
    this._javascriptFiles.internalValue = config.javascriptFiles;
    this._notifications.internalValue = config.notifications;
    this._steps.internalValue = config.steps;
    this._successCriteria.internalValue = config.successCriteria;
    this._thresholdMonitors.internalValue = config.thresholdMonitors;
    this._viewport.internalValue = config.viewport;
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

  // auto_update_user_agent - computed: false, optional: true, required: false
  private _autoUpdateUserAgent?: boolean | cdktf.IResolvable; 
  public get autoUpdateUserAgent() {
    return this.getBooleanAttribute('auto_update_user_agent');
  }
  public set autoUpdateUserAgent(value: boolean | cdktf.IResolvable) {
    this._autoUpdateUserAgent = value;
  }
  public resetAutoUpdateUserAgent() {
    this._autoUpdateUserAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoUpdateUserAgentInput() {
    return this._autoUpdateUserAgent;
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

  // enforce_ssl_validation - computed: false, optional: true, required: false
  private _enforceSslValidation?: boolean | cdktf.IResolvable; 
  public get enforceSslValidation() {
    return this.getBooleanAttribute('enforce_ssl_validation');
  }
  public set enforceSslValidation(value: boolean | cdktf.IResolvable) {
    this._enforceSslValidation = value;
  }
  public resetEnforceSslValidation() {
    this._enforceSslValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceSslValidationInput() {
    return this._enforceSslValidation;
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

  // user_agent - computed: false, optional: true, required: false
  private _userAgent?: string; 
  public get userAgent() {
    return this.getStringAttribute('user_agent');
  }
  public set userAgent(value: string) {
    this._userAgent = value;
  }
  public resetUserAgent() {
    this._userAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAgentInput() {
    return this._userAgent;
  }

  // wait_for_full_metrics - computed: false, optional: true, required: false
  private _waitForFullMetrics?: boolean | cdktf.IResolvable; 
  public get waitForFullMetrics() {
    return this.getBooleanAttribute('wait_for_full_metrics');
  }
  public set waitForFullMetrics(value: boolean | cdktf.IResolvable) {
    this._waitForFullMetrics = value;
  }
  public resetWaitForFullMetrics() {
    this._waitForFullMetrics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForFullMetricsInput() {
    return this._waitForFullMetrics;
  }

  // blackout_periods - computed: false, optional: true, required: false
  private _blackoutPeriods = new CreateBrowserCheckBlackoutPeriodsList(this, "blackout_periods", true);
  public get blackoutPeriods() {
    return this._blackoutPeriods;
  }
  public putBlackoutPeriods(value: CreateBrowserCheckBlackoutPeriods[] | cdktf.IResolvable) {
    this._blackoutPeriods.internalValue = value;
  }
  public resetBlackoutPeriods() {
    this._blackoutPeriods.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blackoutPeriodsInput() {
    return this._blackoutPeriods.internalValue;
  }

  // browser - computed: false, optional: true, required: false
  private _browser = new CreateBrowserCheckBrowserList(this, "browser", true);
  public get browser() {
    return this._browser;
  }
  public putBrowser(value: CreateBrowserCheckBrowser[] | cdktf.IResolvable) {
    this._browser.internalValue = value;
  }
  public resetBrowser() {
    this._browser.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get browserInput() {
    return this._browser.internalValue;
  }

  // check_connection - computed: false, optional: true, required: false
  private _checkConnection = new CreateBrowserCheckCheckConnectionList(this, "check_connection", true);
  public get checkConnection() {
    return this._checkConnection;
  }
  public putCheckConnection(value: CreateBrowserCheckCheckConnection[] | cdktf.IResolvable) {
    this._checkConnection.internalValue = value;
  }
  public resetCheckConnection() {
    this._checkConnection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkConnectionInput() {
    return this._checkConnection.internalValue;
  }

  // cookies - computed: false, optional: true, required: false
  private _cookies = new CreateBrowserCheckCookiesList(this, "cookies", true);
  public get cookies() {
    return this._cookies;
  }
  public putCookies(value: CreateBrowserCheckCookies[] | cdktf.IResolvable) {
    this._cookies.internalValue = value;
  }
  public resetCookies() {
    this._cookies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookiesInput() {
    return this._cookies.internalValue;
  }

  // dns_overrides - computed: false, optional: true, required: false
  private _dnsOverrides = new CreateBrowserCheckDnsOverridesList(this, "dns_overrides", true);
  public get dnsOverrides() {
    return this._dnsOverrides;
  }
  public putDnsOverrides(value: CreateBrowserCheckDnsOverrides[] | cdktf.IResolvable) {
    this._dnsOverrides.internalValue = value;
  }
  public resetDnsOverrides() {
    this._dnsOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsOverridesInput() {
    return this._dnsOverrides.internalValue;
  }

  // excluded_files - computed: false, optional: true, required: false
  private _excludedFiles = new CreateBrowserCheckExcludedFilesList(this, "excluded_files", true);
  public get excludedFiles() {
    return this._excludedFiles;
  }
  public putExcludedFiles(value: CreateBrowserCheckExcludedFiles[] | cdktf.IResolvable) {
    this._excludedFiles.internalValue = value;
  }
  public resetExcludedFiles() {
    this._excludedFiles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedFilesInput() {
    return this._excludedFiles.internalValue;
  }

  // http_request_headers - computed: false, optional: true, required: false
  private _httpRequestHeaders = new CreateBrowserCheckHttpRequestHeadersList(this, "http_request_headers", false);
  public get httpRequestHeaders() {
    return this._httpRequestHeaders;
  }
  public putHttpRequestHeaders(value: CreateBrowserCheckHttpRequestHeaders[] | cdktf.IResolvable) {
    this._httpRequestHeaders.internalValue = value;
  }
  public resetHttpRequestHeaders() {
    this._httpRequestHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRequestHeadersInput() {
    return this._httpRequestHeaders.internalValue;
  }

  // javascript_files - computed: false, optional: true, required: false
  private _javascriptFiles = new CreateBrowserCheckJavascriptFilesList(this, "javascript_files", true);
  public get javascriptFiles() {
    return this._javascriptFiles;
  }
  public putJavascriptFiles(value: CreateBrowserCheckJavascriptFiles[] | cdktf.IResolvable) {
    this._javascriptFiles.internalValue = value;
  }
  public resetJavascriptFiles() {
    this._javascriptFiles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get javascriptFilesInput() {
    return this._javascriptFiles.internalValue;
  }

  // notifications - computed: false, optional: true, required: false
  private _notifications = new CreateBrowserCheckNotificationsList(this, "notifications", true);
  public get notifications() {
    return this._notifications;
  }
  public putNotifications(value: CreateBrowserCheckNotifications[] | cdktf.IResolvable) {
    this._notifications.internalValue = value;
  }
  public resetNotifications() {
    this._notifications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationsInput() {
    return this._notifications.internalValue;
  }

  // steps - computed: false, optional: true, required: false
  private _steps = new CreateBrowserCheckStepsList(this, "steps", true);
  public get steps() {
    return this._steps;
  }
  public putSteps(value: CreateBrowserCheckSteps[] | cdktf.IResolvable) {
    this._steps.internalValue = value;
  }
  public resetSteps() {
    this._steps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepsInput() {
    return this._steps.internalValue;
  }

  // success_criteria - computed: false, optional: true, required: false
  private _successCriteria = new CreateBrowserCheckSuccessCriteriaList(this, "success_criteria", true);
  public get successCriteria() {
    return this._successCriteria;
  }
  public putSuccessCriteria(value: CreateBrowserCheckSuccessCriteria[] | cdktf.IResolvable) {
    this._successCriteria.internalValue = value;
  }
  public resetSuccessCriteria() {
    this._successCriteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successCriteriaInput() {
    return this._successCriteria.internalValue;
  }

  // threshold_monitors - computed: false, optional: true, required: false
  private _thresholdMonitors = new CreateBrowserCheckThresholdMonitorsList(this, "threshold_monitors", true);
  public get thresholdMonitors() {
    return this._thresholdMonitors;
  }
  public putThresholdMonitors(value: CreateBrowserCheckThresholdMonitors[] | cdktf.IResolvable) {
    this._thresholdMonitors.internalValue = value;
  }
  public resetThresholdMonitors() {
    this._thresholdMonitors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdMonitorsInput() {
    return this._thresholdMonitors.internalValue;
  }

  // viewport - computed: false, optional: true, required: false
  private _viewport = new CreateBrowserCheckViewportList(this, "viewport", true);
  public get viewport() {
    return this._viewport;
  }
  public putViewport(value: CreateBrowserCheckViewport[] | cdktf.IResolvable) {
    this._viewport.internalValue = value;
  }
  public resetViewport() {
    this._viewport.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewportInput() {
    return this._viewport.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_retry: cdktf.booleanToTerraform(this._autoRetry),
      auto_update_user_agent: cdktf.booleanToTerraform(this._autoUpdateUserAgent),
      enabled: cdktf.booleanToTerraform(this._enabled),
      enforce_ssl_validation: cdktf.booleanToTerraform(this._enforceSslValidation),
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
      type: cdktf.stringToTerraform(this._type),
      url: cdktf.stringToTerraform(this._url),
      user_agent: cdktf.stringToTerraform(this._userAgent),
      wait_for_full_metrics: cdktf.booleanToTerraform(this._waitForFullMetrics),
      blackout_periods: cdktf.listMapper(createBrowserCheckBlackoutPeriodsToTerraform, true)(this._blackoutPeriods.internalValue),
      browser: cdktf.listMapper(createBrowserCheckBrowserToTerraform, true)(this._browser.internalValue),
      check_connection: cdktf.listMapper(createBrowserCheckCheckConnectionToTerraform, true)(this._checkConnection.internalValue),
      cookies: cdktf.listMapper(createBrowserCheckCookiesToTerraform, true)(this._cookies.internalValue),
      dns_overrides: cdktf.listMapper(createBrowserCheckDnsOverridesToTerraform, true)(this._dnsOverrides.internalValue),
      excluded_files: cdktf.listMapper(createBrowserCheckExcludedFilesToTerraform, true)(this._excludedFiles.internalValue),
      http_request_headers: cdktf.listMapper(createBrowserCheckHttpRequestHeadersToTerraform, true)(this._httpRequestHeaders.internalValue),
      javascript_files: cdktf.listMapper(createBrowserCheckJavascriptFilesToTerraform, true)(this._javascriptFiles.internalValue),
      notifications: cdktf.listMapper(createBrowserCheckNotificationsToTerraform, true)(this._notifications.internalValue),
      steps: cdktf.listMapper(createBrowserCheckStepsToTerraform, true)(this._steps.internalValue),
      success_criteria: cdktf.listMapper(createBrowserCheckSuccessCriteriaToTerraform, true)(this._successCriteria.internalValue),
      threshold_monitors: cdktf.listMapper(createBrowserCheckThresholdMonitorsToTerraform, true)(this._thresholdMonitors.internalValue),
      viewport: cdktf.listMapper(createBrowserCheckViewportToTerraform, true)(this._viewport.internalValue),
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
      auto_update_user_agent: {
        value: cdktf.booleanToHclTerraform(this._autoUpdateUserAgent),
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
      enforce_ssl_validation: {
        value: cdktf.booleanToHclTerraform(this._enforceSslValidation),
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
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_agent: {
        value: cdktf.stringToHclTerraform(this._userAgent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wait_for_full_metrics: {
        value: cdktf.booleanToHclTerraform(this._waitForFullMetrics),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      blackout_periods: {
        value: cdktf.listMapperHcl(createBrowserCheckBlackoutPeriodsToHclTerraform, true)(this._blackoutPeriods.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CreateBrowserCheckBlackoutPeriodsList",
      },
      browser: {
        value: cdktf.listMapperHcl(createBrowserCheckBrowserToHclTerraform, true)(this._browser.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CreateBrowserCheckBrowserList",
      },
      check_connection: {
        value: cdktf.listMapperHcl(createBrowserCheckCheckConnectionToHclTerraform, true)(this._checkConnection.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CreateBrowserCheckCheckConnectionList",
      },
      cookies: {
        value: cdktf.listMapperHcl(createBrowserCheckCookiesToHclTerraform, true)(this._cookies.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CreateBrowserCheckCookiesList",
      },
      dns_overrides: {
        value: cdktf.listMapperHcl(createBrowserCheckDnsOverridesToHclTerraform, true)(this._dnsOverrides.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CreateBrowserCheckDnsOverridesList",
      },
      excluded_files: {
        value: cdktf.listMapperHcl(createBrowserCheckExcludedFilesToHclTerraform, true)(this._excludedFiles.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CreateBrowserCheckExcludedFilesList",
      },
      http_request_headers: {
        value: cdktf.listMapperHcl(createBrowserCheckHttpRequestHeadersToHclTerraform, true)(this._httpRequestHeaders.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CreateBrowserCheckHttpRequestHeadersList",
      },
      javascript_files: {
        value: cdktf.listMapperHcl(createBrowserCheckJavascriptFilesToHclTerraform, true)(this._javascriptFiles.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CreateBrowserCheckJavascriptFilesList",
      },
      notifications: {
        value: cdktf.listMapperHcl(createBrowserCheckNotificationsToHclTerraform, true)(this._notifications.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CreateBrowserCheckNotificationsList",
      },
      steps: {
        value: cdktf.listMapperHcl(createBrowserCheckStepsToHclTerraform, true)(this._steps.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CreateBrowserCheckStepsList",
      },
      success_criteria: {
        value: cdktf.listMapperHcl(createBrowserCheckSuccessCriteriaToHclTerraform, true)(this._successCriteria.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CreateBrowserCheckSuccessCriteriaList",
      },
      threshold_monitors: {
        value: cdktf.listMapperHcl(createBrowserCheckThresholdMonitorsToHclTerraform, true)(this._thresholdMonitors.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CreateBrowserCheckThresholdMonitorsList",
      },
      viewport: {
        value: cdktf.listMapperHcl(createBrowserCheckViewportToHclTerraform, true)(this._viewport.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CreateBrowserCheckViewportList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
