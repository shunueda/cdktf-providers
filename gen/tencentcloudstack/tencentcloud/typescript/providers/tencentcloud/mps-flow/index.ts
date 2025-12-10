// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_flow
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MpsFlowConfig extends cdktf.TerraformMetaArguments {
  /**
  * The event ID associated with this Flow. Each flow can only be associated with one Event.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_flow#event_id MpsFlow#event_id}
  */
  readonly eventId?: string;
  /**
  * Flow name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_flow#flow_name MpsFlow#flow_name}
  */
  readonly flowName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_flow#id MpsFlow#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Maximum bandwidth, unit bps, optional [10000000, 20000000, 50000000].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_flow#max_bandwidth MpsFlow#max_bandwidth}
  */
  readonly maxBandwidth: number;
  /**
  * input_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_flow#input_group MpsFlow#input_group}
  */
  readonly inputGroup?: MpsFlowInputGroup[] | cdktf.IResolvable;
}
export interface MpsFlowInputGroupHlsPullSettingsSourceAddresses {
  /**
  * The URL address of the HLS origin site.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_flow#url MpsFlow#url}
  */
  readonly url: string;
}

export function mpsFlowInputGroupHlsPullSettingsSourceAddressesToTerraform(struct?: MpsFlowInputGroupHlsPullSettingsSourceAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function mpsFlowInputGroupHlsPullSettingsSourceAddressesToHclTerraform(struct?: MpsFlowInputGroupHlsPullSettingsSourceAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsFlowInputGroupHlsPullSettingsSourceAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MpsFlowInputGroupHlsPullSettingsSourceAddresses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsFlowInputGroupHlsPullSettingsSourceAddresses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._url = value.url;
    }
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
}

export class MpsFlowInputGroupHlsPullSettingsSourceAddressesList extends cdktf.ComplexList {
  public internalValue? : MpsFlowInputGroupHlsPullSettingsSourceAddresses[] | cdktf.IResolvable

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
  public get(index: number): MpsFlowInputGroupHlsPullSettingsSourceAddressesOutputReference {
    return new MpsFlowInputGroupHlsPullSettingsSourceAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MpsFlowInputGroupHlsPullSettings {
  /**
  * source_addresses block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_flow#source_addresses MpsFlow#source_addresses}
  */
  readonly sourceAddresses: MpsFlowInputGroupHlsPullSettingsSourceAddresses[] | cdktf.IResolvable;
}

export function mpsFlowInputGroupHlsPullSettingsToTerraform(struct?: MpsFlowInputGroupHlsPullSettingsOutputReference | MpsFlowInputGroupHlsPullSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_addresses: cdktf.listMapper(mpsFlowInputGroupHlsPullSettingsSourceAddressesToTerraform, true)(struct!.sourceAddresses),
  }
}


export function mpsFlowInputGroupHlsPullSettingsToHclTerraform(struct?: MpsFlowInputGroupHlsPullSettingsOutputReference | MpsFlowInputGroupHlsPullSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source_addresses: {
      value: cdktf.listMapperHcl(mpsFlowInputGroupHlsPullSettingsSourceAddressesToHclTerraform, true)(struct!.sourceAddresses),
      isBlock: true,
      type: "list",
      storageClassType: "MpsFlowInputGroupHlsPullSettingsSourceAddressesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsFlowInputGroupHlsPullSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsFlowInputGroupHlsPullSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceAddresses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddresses = this._sourceAddresses?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsFlowInputGroupHlsPullSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sourceAddresses.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sourceAddresses.internalValue = value.sourceAddresses;
    }
  }

  // source_addresses - computed: false, optional: false, required: true
  private _sourceAddresses = new MpsFlowInputGroupHlsPullSettingsSourceAddressesList(this, "source_addresses", false);
  public get sourceAddresses() {
    return this._sourceAddresses;
  }
  public putSourceAddresses(value: MpsFlowInputGroupHlsPullSettingsSourceAddresses[] | cdktf.IResolvable) {
    this._sourceAddresses.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressesInput() {
    return this._sourceAddresses.internalValue;
  }
}
export interface MpsFlowInputGroupResilientStream {
  /**
  * Delay time, in seconds, currently supports a range of 10 to 300 seconds. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_flow#buffer_time MpsFlow#buffer_time}
  */
  readonly bufferTime?: number;
  /**
  * Whether to enable the delayed broadcast smooth spit stream, true is enabled, false is not enabled, and the default is not enabled. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_flow#enable MpsFlow#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
}

export function mpsFlowInputGroupResilientStreamToTerraform(struct?: MpsFlowInputGroupResilientStreamOutputReference | MpsFlowInputGroupResilientStream): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    buffer_time: cdktf.numberToTerraform(struct!.bufferTime),
    enable: cdktf.booleanToTerraform(struct!.enable),
  }
}


export function mpsFlowInputGroupResilientStreamToHclTerraform(struct?: MpsFlowInputGroupResilientStreamOutputReference | MpsFlowInputGroupResilientStream): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    buffer_time: {
      value: cdktf.numberToHclTerraform(struct!.bufferTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsFlowInputGroupResilientStreamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsFlowInputGroupResilientStream | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bufferTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferTime = this._bufferTime;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsFlowInputGroupResilientStream | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bufferTime = undefined;
      this._enable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bufferTime = value.bufferTime;
      this._enable = value.enable;
    }
  }

  // buffer_time - computed: false, optional: true, required: false
  private _bufferTime?: number; 
  public get bufferTime() {
    return this.getNumberAttribute('buffer_time');
  }
  public set bufferTime(value: number) {
    this._bufferTime = value;
  }
  public resetBufferTime() {
    this._bufferTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferTimeInput() {
    return this._bufferTime;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }
}
export interface MpsFlowInputGroupRtmpPullSettingsSourceAddresses {
  /**
  * StreamKey information of the RTMP source site.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_flow#stream_key MpsFlow#stream_key}
  */
  readonly streamKey: string;
  /**
  * TcUrl address of the RTMP source server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_flow#tc_url MpsFlow#tc_url}
  */
  readonly tcUrl: string;
}

export function mpsFlowInputGroupRtmpPullSettingsSourceAddressesToTerraform(struct?: MpsFlowInputGroupRtmpPullSettingsSourceAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    stream_key: cdktf.stringToTerraform(struct!.streamKey),
    tc_url: cdktf.stringToTerraform(struct!.tcUrl),
  }
}


export function mpsFlowInputGroupRtmpPullSettingsSourceAddressesToHclTerraform(struct?: MpsFlowInputGroupRtmpPullSettingsSourceAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    stream_key: {
      value: cdktf.stringToHclTerraform(struct!.streamKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tc_url: {
      value: cdktf.stringToHclTerraform(struct!.tcUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsFlowInputGroupRtmpPullSettingsSourceAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MpsFlowInputGroupRtmpPullSettingsSourceAddresses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._streamKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamKey = this._streamKey;
    }
    if (this._tcUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcUrl = this._tcUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsFlowInputGroupRtmpPullSettingsSourceAddresses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._streamKey = undefined;
      this._tcUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._streamKey = value.streamKey;
      this._tcUrl = value.tcUrl;
    }
  }

  // stream_key - computed: false, optional: false, required: true
  private _streamKey?: string; 
  public get streamKey() {
    return this.getStringAttribute('stream_key');
  }
  public set streamKey(value: string) {
    this._streamKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamKeyInput() {
    return this._streamKey;
  }

  // tc_url - computed: false, optional: false, required: true
  private _tcUrl?: string; 
  public get tcUrl() {
    return this.getStringAttribute('tc_url');
  }
  public set tcUrl(value: string) {
    this._tcUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tcUrlInput() {
    return this._tcUrl;
  }
}

export class MpsFlowInputGroupRtmpPullSettingsSourceAddressesList extends cdktf.ComplexList {
  public internalValue? : MpsFlowInputGroupRtmpPullSettingsSourceAddresses[] | cdktf.IResolvable

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
  public get(index: number): MpsFlowInputGroupRtmpPullSettingsSourceAddressesOutputReference {
    return new MpsFlowInputGroupRtmpPullSettingsSourceAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MpsFlowInputGroupRtmpPullSettings {
  /**
  * source_addresses block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_flow#source_addresses MpsFlow#source_addresses}
  */
  readonly sourceAddresses: MpsFlowInputGroupRtmpPullSettingsSourceAddresses[] | cdktf.IResolvable;
}

export function mpsFlowInputGroupRtmpPullSettingsToTerraform(struct?: MpsFlowInputGroupRtmpPullSettingsOutputReference | MpsFlowInputGroupRtmpPullSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_addresses: cdktf.listMapper(mpsFlowInputGroupRtmpPullSettingsSourceAddressesToTerraform, true)(struct!.sourceAddresses),
  }
}


export function mpsFlowInputGroupRtmpPullSettingsToHclTerraform(struct?: MpsFlowInputGroupRtmpPullSettingsOutputReference | MpsFlowInputGroupRtmpPullSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source_addresses: {
      value: cdktf.listMapperHcl(mpsFlowInputGroupRtmpPullSettingsSourceAddressesToHclTerraform, true)(struct!.sourceAddresses),
      isBlock: true,
      type: "list",
      storageClassType: "MpsFlowInputGroupRtmpPullSettingsSourceAddressesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsFlowInputGroupRtmpPullSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsFlowInputGroupRtmpPullSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceAddresses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddresses = this._sourceAddresses?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsFlowInputGroupRtmpPullSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sourceAddresses.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sourceAddresses.internalValue = value.sourceAddresses;
    }
  }

  // source_addresses - computed: false, optional: false, required: true
  private _sourceAddresses = new MpsFlowInputGroupRtmpPullSettingsSourceAddressesList(this, "source_addresses", false);
  public get sourceAddresses() {
    return this._sourceAddresses;
  }
  public putSourceAddresses(value: MpsFlowInputGroupRtmpPullSettingsSourceAddresses[] | cdktf.IResolvable) {
    this._sourceAddresses.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressesInput() {
    return this._sourceAddresses.internalValue;
  }
}
export interface MpsFlowInputGroupRtpSettings {
  /**
  * Defaults to none, optional values[none].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_flow#fec MpsFlow#fec}
  */
  readonly fec?: string;
  /**
  * Idle timeout, the default is 5000, the unit is ms, and the range is [1000, 10000].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_flow#idle_timeout MpsFlow#idle_timeout}
  */
  readonly idleTimeout?: number;
}

export function mpsFlowInputGroupRtpSettingsToTerraform(struct?: MpsFlowInputGroupRtpSettingsOutputReference | MpsFlowInputGroupRtpSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fec: cdktf.stringToTerraform(struct!.fec),
    idle_timeout: cdktf.numberToTerraform(struct!.idleTimeout),
  }
}


export function mpsFlowInputGroupRtpSettingsToHclTerraform(struct?: MpsFlowInputGroupRtpSettingsOutputReference | MpsFlowInputGroupRtpSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fec: {
      value: cdktf.stringToHclTerraform(struct!.fec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    idle_timeout: {
      value: cdktf.numberToHclTerraform(struct!.idleTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsFlowInputGroupRtpSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsFlowInputGroupRtpSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fec !== undefined) {
      hasAnyValues = true;
      internalValueResult.fec = this._fec;
    }
    if (this._idleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleTimeout = this._idleTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsFlowInputGroupRtpSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fec = undefined;
      this._idleTimeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fec = value.fec;
      this._idleTimeout = value.idleTimeout;
    }
  }

  // fec - computed: true, optional: true, required: false
  private _fec?: string; 
  public get fec() {
    return this.getStringAttribute('fec');
  }
  public set fec(value: string) {
    this._fec = value;
  }
  public resetFec() {
    this._fec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fecInput() {
    return this._fec;
  }

  // idle_timeout - computed: true, optional: true, required: false
  private _idleTimeout?: number; 
  public get idleTimeout() {
    return this.getNumberAttribute('idle_timeout');
  }
  public set idleTimeout(value: number) {
    this._idleTimeout = value;
  }
  public resetIdleTimeout() {
    this._idleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInput() {
    return this._idleTimeout;
  }
}
export interface MpsFlowInputGroupRtspPullSettingsSourceAddresses {
  /**
  * The URL address of the RTSP source site.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_flow#url MpsFlow#url}
  */
  readonly url: string;
}

export function mpsFlowInputGroupRtspPullSettingsSourceAddressesToTerraform(struct?: MpsFlowInputGroupRtspPullSettingsSourceAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function mpsFlowInputGroupRtspPullSettingsSourceAddressesToHclTerraform(struct?: MpsFlowInputGroupRtspPullSettingsSourceAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsFlowInputGroupRtspPullSettingsSourceAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MpsFlowInputGroupRtspPullSettingsSourceAddresses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsFlowInputGroupRtspPullSettingsSourceAddresses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._url = value.url;
    }
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
}

export class MpsFlowInputGroupRtspPullSettingsSourceAddressesList extends cdktf.ComplexList {
  public internalValue? : MpsFlowInputGroupRtspPullSettingsSourceAddresses[] | cdktf.IResolvable

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
  public get(index: number): MpsFlowInputGroupRtspPullSettingsSourceAddressesOutputReference {
    return new MpsFlowInputGroupRtspPullSettingsSourceAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MpsFlowInputGroupRtspPullSettings {
  /**
  * source_addresses block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_flow#source_addresses MpsFlow#source_addresses}
  */
  readonly sourceAddresses: MpsFlowInputGroupRtspPullSettingsSourceAddresses[] | cdktf.IResolvable;
}

export function mpsFlowInputGroupRtspPullSettingsToTerraform(struct?: MpsFlowInputGroupRtspPullSettingsOutputReference | MpsFlowInputGroupRtspPullSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_addresses: cdktf.listMapper(mpsFlowInputGroupRtspPullSettingsSourceAddressesToTerraform, true)(struct!.sourceAddresses),
  }
}


export function mpsFlowInputGroupRtspPullSettingsToHclTerraform(struct?: MpsFlowInputGroupRtspPullSettingsOutputReference | MpsFlowInputGroupRtspPullSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source_addresses: {
      value: cdktf.listMapperHcl(mpsFlowInputGroupRtspPullSettingsSourceAddressesToHclTerraform, true)(struct!.sourceAddresses),
      isBlock: true,
      type: "list",
      storageClassType: "MpsFlowInputGroupRtspPullSettingsSourceAddressesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsFlowInputGroupRtspPullSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsFlowInputGroupRtspPullSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceAddresses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddresses = this._sourceAddresses?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsFlowInputGroupRtspPullSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sourceAddresses.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sourceAddresses.internalValue = value.sourceAddresses;
    }
  }

  // source_addresses - computed: false, optional: false, required: true
  private _sourceAddresses = new MpsFlowInputGroupRtspPullSettingsSourceAddressesList(this, "source_addresses", false);
  public get sourceAddresses() {
    return this._sourceAddresses;
  }
  public putSourceAddresses(value: MpsFlowInputGroupRtspPullSettingsSourceAddresses[] | cdktf.IResolvable) {
    this._sourceAddresses.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressesInput() {
    return this._sourceAddresses.internalValue;
  }
}
export interface MpsFlowInputGroupSrtSettingsSourceAddresses {
  /**
  * Peer IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_flow#ip MpsFlow#ip}
  */
  readonly ip: string;
  /**
  * Peer port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_flow#port MpsFlow#port}
  */
  readonly port: number;
}

export function mpsFlowInputGroupSrtSettingsSourceAddressesToTerraform(struct?: MpsFlowInputGroupSrtSettingsSourceAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function mpsFlowInputGroupSrtSettingsSourceAddressesToHclTerraform(struct?: MpsFlowInputGroupSrtSettingsSourceAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsFlowInputGroupSrtSettingsSourceAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MpsFlowInputGroupSrtSettingsSourceAddresses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsFlowInputGroupSrtSettingsSourceAddresses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ip = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ip = value.ip;
      this._port = value.port;
    }
  }

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}

export class MpsFlowInputGroupSrtSettingsSourceAddressesList extends cdktf.ComplexList {
  public internalValue? : MpsFlowInputGroupSrtSettingsSourceAddresses[] | cdktf.IResolvable

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
  public get(index: number): MpsFlowInputGroupSrtSettingsSourceAddressesOutputReference {
    return new MpsFlowInputGroupSrtSettingsSourceAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MpsFlowInputGroupSrtSettings {
  /**
  * Delay, default 0, unit ms, range [0, 3000].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_flow#latency MpsFlow#latency}
  */
  readonly latency?: number;
  /**
  * SRT mode, optional [LISTENER|CALLER], default is LISTENER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_flow#mode MpsFlow#mode}
  */
  readonly mode?: string;
  /**
  * The decryption key, which is empty by default, means no encryption. Only ascii code values can be filled in, and the length is [10, 79].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_flow#passphrase MpsFlow#passphrase}
  */
  readonly passphrase?: string;
  /**
  * Key length, default is 0, optional [0|16|24|32].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_flow#pb_key_len MpsFlow#pb_key_len}
  */
  readonly pbKeyLen?: number;
  /**
  * Peer timeout, default is 5000, unit ms, range is [1000, 10000].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_flow#peer_idle_timeout MpsFlow#peer_idle_timeout}
  */
  readonly peerIdleTimeout?: number;
  /**
  * Peer delay, the default is 0, the unit is ms, and the range is [0, 3000].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_flow#peer_latency MpsFlow#peer_latency}
  */
  readonly peerLatency?: number;
  /**
  * Receiving delay, default is 120, unit ms, range is [0, 3000].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_flow#recv_latency MpsFlow#recv_latency}
  */
  readonly recvLatency?: number;
  /**
  * Stream ID, optional uppercase and lowercase letters, numbers and special characters (.#!:&amp;,=_-), length 0~512. For specific format, please refer to:https://github.com/Haivision/srt/blob/master/docs/features/access-control.md#standard-keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_flow#stream_id MpsFlow#stream_id}
  */
  readonly streamId?: string;
  /**
  * source_addresses block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_flow#source_addresses MpsFlow#source_addresses}
  */
  readonly sourceAddresses?: MpsFlowInputGroupSrtSettingsSourceAddresses[] | cdktf.IResolvable;
}

export function mpsFlowInputGroupSrtSettingsToTerraform(struct?: MpsFlowInputGroupSrtSettingsOutputReference | MpsFlowInputGroupSrtSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    latency: cdktf.numberToTerraform(struct!.latency),
    mode: cdktf.stringToTerraform(struct!.mode),
    passphrase: cdktf.stringToTerraform(struct!.passphrase),
    pb_key_len: cdktf.numberToTerraform(struct!.pbKeyLen),
    peer_idle_timeout: cdktf.numberToTerraform(struct!.peerIdleTimeout),
    peer_latency: cdktf.numberToTerraform(struct!.peerLatency),
    recv_latency: cdktf.numberToTerraform(struct!.recvLatency),
    stream_id: cdktf.stringToTerraform(struct!.streamId),
    source_addresses: cdktf.listMapper(mpsFlowInputGroupSrtSettingsSourceAddressesToTerraform, true)(struct!.sourceAddresses),
  }
}


export function mpsFlowInputGroupSrtSettingsToHclTerraform(struct?: MpsFlowInputGroupSrtSettingsOutputReference | MpsFlowInputGroupSrtSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    latency: {
      value: cdktf.numberToHclTerraform(struct!.latency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    passphrase: {
      value: cdktf.stringToHclTerraform(struct!.passphrase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pb_key_len: {
      value: cdktf.numberToHclTerraform(struct!.pbKeyLen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    peer_idle_timeout: {
      value: cdktf.numberToHclTerraform(struct!.peerIdleTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    peer_latency: {
      value: cdktf.numberToHclTerraform(struct!.peerLatency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recv_latency: {
      value: cdktf.numberToHclTerraform(struct!.recvLatency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stream_id: {
      value: cdktf.stringToHclTerraform(struct!.streamId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_addresses: {
      value: cdktf.listMapperHcl(mpsFlowInputGroupSrtSettingsSourceAddressesToHclTerraform, true)(struct!.sourceAddresses),
      isBlock: true,
      type: "list",
      storageClassType: "MpsFlowInputGroupSrtSettingsSourceAddressesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsFlowInputGroupSrtSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsFlowInputGroupSrtSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._latency !== undefined) {
      hasAnyValues = true;
      internalValueResult.latency = this._latency;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._passphrase !== undefined) {
      hasAnyValues = true;
      internalValueResult.passphrase = this._passphrase;
    }
    if (this._pbKeyLen !== undefined) {
      hasAnyValues = true;
      internalValueResult.pbKeyLen = this._pbKeyLen;
    }
    if (this._peerIdleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerIdleTimeout = this._peerIdleTimeout;
    }
    if (this._peerLatency !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerLatency = this._peerLatency;
    }
    if (this._recvLatency !== undefined) {
      hasAnyValues = true;
      internalValueResult.recvLatency = this._recvLatency;
    }
    if (this._streamId !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamId = this._streamId;
    }
    if (this._sourceAddresses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddresses = this._sourceAddresses?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsFlowInputGroupSrtSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._latency = undefined;
      this._mode = undefined;
      this._passphrase = undefined;
      this._pbKeyLen = undefined;
      this._peerIdleTimeout = undefined;
      this._peerLatency = undefined;
      this._recvLatency = undefined;
      this._streamId = undefined;
      this._sourceAddresses.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._latency = value.latency;
      this._mode = value.mode;
      this._passphrase = value.passphrase;
      this._pbKeyLen = value.pbKeyLen;
      this._peerIdleTimeout = value.peerIdleTimeout;
      this._peerLatency = value.peerLatency;
      this._recvLatency = value.recvLatency;
      this._streamId = value.streamId;
      this._sourceAddresses.internalValue = value.sourceAddresses;
    }
  }

  // latency - computed: true, optional: true, required: false
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

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // passphrase - computed: true, optional: true, required: false
  private _passphrase?: string; 
  public get passphrase() {
    return this.getStringAttribute('passphrase');
  }
  public set passphrase(value: string) {
    this._passphrase = value;
  }
  public resetPassphrase() {
    this._passphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passphraseInput() {
    return this._passphrase;
  }

  // pb_key_len - computed: true, optional: true, required: false
  private _pbKeyLen?: number; 
  public get pbKeyLen() {
    return this.getNumberAttribute('pb_key_len');
  }
  public set pbKeyLen(value: number) {
    this._pbKeyLen = value;
  }
  public resetPbKeyLen() {
    this._pbKeyLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pbKeyLenInput() {
    return this._pbKeyLen;
  }

  // peer_idle_timeout - computed: true, optional: true, required: false
  private _peerIdleTimeout?: number; 
  public get peerIdleTimeout() {
    return this.getNumberAttribute('peer_idle_timeout');
  }
  public set peerIdleTimeout(value: number) {
    this._peerIdleTimeout = value;
  }
  public resetPeerIdleTimeout() {
    this._peerIdleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerIdleTimeoutInput() {
    return this._peerIdleTimeout;
  }

  // peer_latency - computed: true, optional: true, required: false
  private _peerLatency?: number; 
  public get peerLatency() {
    return this.getNumberAttribute('peer_latency');
  }
  public set peerLatency(value: number) {
    this._peerLatency = value;
  }
  public resetPeerLatency() {
    this._peerLatency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerLatencyInput() {
    return this._peerLatency;
  }

  // recv_latency - computed: true, optional: true, required: false
  private _recvLatency?: number; 
  public get recvLatency() {
    return this.getNumberAttribute('recv_latency');
  }
  public set recvLatency(value: number) {
    this._recvLatency = value;
  }
  public resetRecvLatency() {
    this._recvLatency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recvLatencyInput() {
    return this._recvLatency;
  }

  // stream_id - computed: true, optional: true, required: false
  private _streamId?: string; 
  public get streamId() {
    return this.getStringAttribute('stream_id');
  }
  public set streamId(value: string) {
    this._streamId = value;
  }
  public resetStreamId() {
    this._streamId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamIdInput() {
    return this._streamId;
  }

  // source_addresses - computed: false, optional: true, required: false
  private _sourceAddresses = new MpsFlowInputGroupSrtSettingsSourceAddressesList(this, "source_addresses", false);
  public get sourceAddresses() {
    return this._sourceAddresses;
  }
  public putSourceAddresses(value: MpsFlowInputGroupSrtSettingsSourceAddresses[] | cdktf.IResolvable) {
    this._sourceAddresses.internalValue = value;
  }
  public resetSourceAddresses() {
    this._sourceAddresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressesInput() {
    return this._sourceAddresses.internalValue;
  }
}
export interface MpsFlowInputGroup {
  /**
  * The input IP whitelist, the format is CIDR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_flow#allow_ip_list MpsFlow#allow_ip_list}
  */
  readonly allowIpList?: string[];
  /**
  * Input description with a length of [0, 255].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_flow#description MpsFlow#description}
  */
  readonly description?: string;
  /**
  * The active/standby switch of the input, [OPEN|CLOSE] is optional, and the default is CLOSE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_flow#fail_over MpsFlow#fail_over}
  */
  readonly failOver?: string;
  /**
  * Input name, you can fill in uppercase and lowercase letters, numbers and underscores, and the length is [1, 32].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_flow#input_name MpsFlow#input_name}
  */
  readonly inputName: string;
  /**
  * Input protocol, optional [SRT|RTP|RTMP|RTMP_PULL].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_flow#protocol MpsFlow#protocol}
  */
  readonly protocol: string;
  /**
  * hls_pull_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_flow#hls_pull_settings MpsFlow#hls_pull_settings}
  */
  readonly hlsPullSettings?: MpsFlowInputGroupHlsPullSettings;
  /**
  * resilient_stream block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_flow#resilient_stream MpsFlow#resilient_stream}
  */
  readonly resilientStream?: MpsFlowInputGroupResilientStream;
  /**
  * rtmp_pull_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_flow#rtmp_pull_settings MpsFlow#rtmp_pull_settings}
  */
  readonly rtmpPullSettings?: MpsFlowInputGroupRtmpPullSettings;
  /**
  * rtp_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_flow#rtp_settings MpsFlow#rtp_settings}
  */
  readonly rtpSettings?: MpsFlowInputGroupRtpSettings;
  /**
  * rtsp_pull_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_flow#rtsp_pull_settings MpsFlow#rtsp_pull_settings}
  */
  readonly rtspPullSettings?: MpsFlowInputGroupRtspPullSettings;
  /**
  * srt_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_flow#srt_settings MpsFlow#srt_settings}
  */
  readonly srtSettings?: MpsFlowInputGroupSrtSettings;
}

export function mpsFlowInputGroupToTerraform(struct?: MpsFlowInputGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_ip_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowIpList),
    description: cdktf.stringToTerraform(struct!.description),
    fail_over: cdktf.stringToTerraform(struct!.failOver),
    input_name: cdktf.stringToTerraform(struct!.inputName),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    hls_pull_settings: mpsFlowInputGroupHlsPullSettingsToTerraform(struct!.hlsPullSettings),
    resilient_stream: mpsFlowInputGroupResilientStreamToTerraform(struct!.resilientStream),
    rtmp_pull_settings: mpsFlowInputGroupRtmpPullSettingsToTerraform(struct!.rtmpPullSettings),
    rtp_settings: mpsFlowInputGroupRtpSettingsToTerraform(struct!.rtpSettings),
    rtsp_pull_settings: mpsFlowInputGroupRtspPullSettingsToTerraform(struct!.rtspPullSettings),
    srt_settings: mpsFlowInputGroupSrtSettingsToTerraform(struct!.srtSettings),
  }
}


export function mpsFlowInputGroupToHclTerraform(struct?: MpsFlowInputGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_ip_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowIpList),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fail_over: {
      value: cdktf.stringToHclTerraform(struct!.failOver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    input_name: {
      value: cdktf.stringToHclTerraform(struct!.inputName),
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
    hls_pull_settings: {
      value: mpsFlowInputGroupHlsPullSettingsToHclTerraform(struct!.hlsPullSettings),
      isBlock: true,
      type: "list",
      storageClassType: "MpsFlowInputGroupHlsPullSettingsList",
    },
    resilient_stream: {
      value: mpsFlowInputGroupResilientStreamToHclTerraform(struct!.resilientStream),
      isBlock: true,
      type: "list",
      storageClassType: "MpsFlowInputGroupResilientStreamList",
    },
    rtmp_pull_settings: {
      value: mpsFlowInputGroupRtmpPullSettingsToHclTerraform(struct!.rtmpPullSettings),
      isBlock: true,
      type: "list",
      storageClassType: "MpsFlowInputGroupRtmpPullSettingsList",
    },
    rtp_settings: {
      value: mpsFlowInputGroupRtpSettingsToHclTerraform(struct!.rtpSettings),
      isBlock: true,
      type: "list",
      storageClassType: "MpsFlowInputGroupRtpSettingsList",
    },
    rtsp_pull_settings: {
      value: mpsFlowInputGroupRtspPullSettingsToHclTerraform(struct!.rtspPullSettings),
      isBlock: true,
      type: "list",
      storageClassType: "MpsFlowInputGroupRtspPullSettingsList",
    },
    srt_settings: {
      value: mpsFlowInputGroupSrtSettingsToHclTerraform(struct!.srtSettings),
      isBlock: true,
      type: "list",
      storageClassType: "MpsFlowInputGroupSrtSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsFlowInputGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MpsFlowInputGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowIpList !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowIpList = this._allowIpList;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._failOver !== undefined) {
      hasAnyValues = true;
      internalValueResult.failOver = this._failOver;
    }
    if (this._inputName !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputName = this._inputName;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._hlsPullSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hlsPullSettings = this._hlsPullSettings?.internalValue;
    }
    if (this._resilientStream?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resilientStream = this._resilientStream?.internalValue;
    }
    if (this._rtmpPullSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rtmpPullSettings = this._rtmpPullSettings?.internalValue;
    }
    if (this._rtpSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rtpSettings = this._rtpSettings?.internalValue;
    }
    if (this._rtspPullSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rtspPullSettings = this._rtspPullSettings?.internalValue;
    }
    if (this._srtSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.srtSettings = this._srtSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsFlowInputGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowIpList = undefined;
      this._description = undefined;
      this._failOver = undefined;
      this._inputName = undefined;
      this._protocol = undefined;
      this._hlsPullSettings.internalValue = undefined;
      this._resilientStream.internalValue = undefined;
      this._rtmpPullSettings.internalValue = undefined;
      this._rtpSettings.internalValue = undefined;
      this._rtspPullSettings.internalValue = undefined;
      this._srtSettings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowIpList = value.allowIpList;
      this._description = value.description;
      this._failOver = value.failOver;
      this._inputName = value.inputName;
      this._protocol = value.protocol;
      this._hlsPullSettings.internalValue = value.hlsPullSettings;
      this._resilientStream.internalValue = value.resilientStream;
      this._rtmpPullSettings.internalValue = value.rtmpPullSettings;
      this._rtpSettings.internalValue = value.rtpSettings;
      this._rtspPullSettings.internalValue = value.rtspPullSettings;
      this._srtSettings.internalValue = value.srtSettings;
    }
  }

  // allow_ip_list - computed: false, optional: true, required: false
  private _allowIpList?: string[]; 
  public get allowIpList() {
    return cdktf.Fn.tolist(this.getListAttribute('allow_ip_list'));
  }
  public set allowIpList(value: string[]) {
    this._allowIpList = value;
  }
  public resetAllowIpList() {
    this._allowIpList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowIpListInput() {
    return this._allowIpList;
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

  // fail_over - computed: true, optional: true, required: false
  private _failOver?: string; 
  public get failOver() {
    return this.getStringAttribute('fail_over');
  }
  public set failOver(value: string) {
    this._failOver = value;
  }
  public resetFailOver() {
    this._failOver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failOverInput() {
    return this._failOver;
  }

  // input_name - computed: false, optional: false, required: true
  private _inputName?: string; 
  public get inputName() {
    return this.getStringAttribute('input_name');
  }
  public set inputName(value: string) {
    this._inputName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputNameInput() {
    return this._inputName;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // hls_pull_settings - computed: false, optional: true, required: false
  private _hlsPullSettings = new MpsFlowInputGroupHlsPullSettingsOutputReference(this, "hls_pull_settings");
  public get hlsPullSettings() {
    return this._hlsPullSettings;
  }
  public putHlsPullSettings(value: MpsFlowInputGroupHlsPullSettings) {
    this._hlsPullSettings.internalValue = value;
  }
  public resetHlsPullSettings() {
    this._hlsPullSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hlsPullSettingsInput() {
    return this._hlsPullSettings.internalValue;
  }

  // resilient_stream - computed: false, optional: true, required: false
  private _resilientStream = new MpsFlowInputGroupResilientStreamOutputReference(this, "resilient_stream");
  public get resilientStream() {
    return this._resilientStream;
  }
  public putResilientStream(value: MpsFlowInputGroupResilientStream) {
    this._resilientStream.internalValue = value;
  }
  public resetResilientStream() {
    this._resilientStream.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resilientStreamInput() {
    return this._resilientStream.internalValue;
  }

  // rtmp_pull_settings - computed: false, optional: true, required: false
  private _rtmpPullSettings = new MpsFlowInputGroupRtmpPullSettingsOutputReference(this, "rtmp_pull_settings");
  public get rtmpPullSettings() {
    return this._rtmpPullSettings;
  }
  public putRtmpPullSettings(value: MpsFlowInputGroupRtmpPullSettings) {
    this._rtmpPullSettings.internalValue = value;
  }
  public resetRtmpPullSettings() {
    this._rtmpPullSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rtmpPullSettingsInput() {
    return this._rtmpPullSettings.internalValue;
  }

  // rtp_settings - computed: false, optional: true, required: false
  private _rtpSettings = new MpsFlowInputGroupRtpSettingsOutputReference(this, "rtp_settings");
  public get rtpSettings() {
    return this._rtpSettings;
  }
  public putRtpSettings(value: MpsFlowInputGroupRtpSettings) {
    this._rtpSettings.internalValue = value;
  }
  public resetRtpSettings() {
    this._rtpSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rtpSettingsInput() {
    return this._rtpSettings.internalValue;
  }

  // rtsp_pull_settings - computed: false, optional: true, required: false
  private _rtspPullSettings = new MpsFlowInputGroupRtspPullSettingsOutputReference(this, "rtsp_pull_settings");
  public get rtspPullSettings() {
    return this._rtspPullSettings;
  }
  public putRtspPullSettings(value: MpsFlowInputGroupRtspPullSettings) {
    this._rtspPullSettings.internalValue = value;
  }
  public resetRtspPullSettings() {
    this._rtspPullSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rtspPullSettingsInput() {
    return this._rtspPullSettings.internalValue;
  }

  // srt_settings - computed: false, optional: true, required: false
  private _srtSettings = new MpsFlowInputGroupSrtSettingsOutputReference(this, "srt_settings");
  public get srtSettings() {
    return this._srtSettings;
  }
  public putSrtSettings(value: MpsFlowInputGroupSrtSettings) {
    this._srtSettings.internalValue = value;
  }
  public resetSrtSettings() {
    this._srtSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srtSettingsInput() {
    return this._srtSettings.internalValue;
  }
}

export class MpsFlowInputGroupList extends cdktf.ComplexList {
  public internalValue? : MpsFlowInputGroup[] | cdktf.IResolvable

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
  public get(index: number): MpsFlowInputGroupOutputReference {
    return new MpsFlowInputGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_flow tencentcloud_mps_flow}
*/
export class MpsFlow extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_mps_flow";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MpsFlow resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MpsFlow to import
  * @param importFromId The id of the existing MpsFlow that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_flow#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MpsFlow to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_mps_flow", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_flow tencentcloud_mps_flow} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MpsFlowConfig
  */
  public constructor(scope: Construct, id: string, config: MpsFlowConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_mps_flow',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.43',
        providerVersionConstraint: '1.82.43'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._eventId = config.eventId;
    this._flowName = config.flowName;
    this._id = config.id;
    this._maxBandwidth = config.maxBandwidth;
    this._inputGroup.internalValue = config.inputGroup;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // flow_name - computed: false, optional: false, required: true
  private _flowName?: string; 
  public get flowName() {
    return this.getStringAttribute('flow_name');
  }
  public set flowName(value: string) {
    this._flowName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flowNameInput() {
    return this._flowName;
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

  // max_bandwidth - computed: false, optional: false, required: true
  private _maxBandwidth?: number; 
  public get maxBandwidth() {
    return this.getNumberAttribute('max_bandwidth');
  }
  public set maxBandwidth(value: number) {
    this._maxBandwidth = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBandwidthInput() {
    return this._maxBandwidth;
  }

  // input_group - computed: false, optional: true, required: false
  private _inputGroup = new MpsFlowInputGroupList(this, "input_group", false);
  public get inputGroup() {
    return this._inputGroup;
  }
  public putInputGroup(value: MpsFlowInputGroup[] | cdktf.IResolvable) {
    this._inputGroup.internalValue = value;
  }
  public resetInputGroup() {
    this._inputGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputGroupInput() {
    return this._inputGroup.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      event_id: cdktf.stringToTerraform(this._eventId),
      flow_name: cdktf.stringToTerraform(this._flowName),
      id: cdktf.stringToTerraform(this._id),
      max_bandwidth: cdktf.numberToTerraform(this._maxBandwidth),
      input_group: cdktf.listMapper(mpsFlowInputGroupToTerraform, true)(this._inputGroup.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      event_id: {
        value: cdktf.stringToHclTerraform(this._eventId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flow_name: {
        value: cdktf.stringToHclTerraform(this._flowName),
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
      max_bandwidth: {
        value: cdktf.numberToHclTerraform(this._maxBandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      input_group: {
        value: cdktf.listMapperHcl(mpsFlowInputGroupToHclTerraform, true)(this._inputGroup.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MpsFlowInputGroupList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
