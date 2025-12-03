// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/mps_input
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MpsInputConfig extends cdktf.TerraformMetaArguments {
  /**
  * Flow ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/mps_input#flow_id MpsInput#flow_id}
  */
  readonly flowId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/mps_input#id MpsInput#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * input_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/mps_input#input_group MpsInput#input_group}
  */
  readonly inputGroup?: MpsInputInputGroup;
}
export interface MpsInputInputGroupHlsPullSettingsSourceAddresses {
  /**
  * The URL address of the HLS origin site.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/mps_input#url MpsInput#url}
  */
  readonly url: string;
}

export function mpsInputInputGroupHlsPullSettingsSourceAddressesToTerraform(struct?: MpsInputInputGroupHlsPullSettingsSourceAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function mpsInputInputGroupHlsPullSettingsSourceAddressesToHclTerraform(struct?: MpsInputInputGroupHlsPullSettingsSourceAddresses | cdktf.IResolvable): any {
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

export class MpsInputInputGroupHlsPullSettingsSourceAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MpsInputInputGroupHlsPullSettingsSourceAddresses | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MpsInputInputGroupHlsPullSettingsSourceAddresses | cdktf.IResolvable | undefined) {
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

export class MpsInputInputGroupHlsPullSettingsSourceAddressesList extends cdktf.ComplexList {
  public internalValue? : MpsInputInputGroupHlsPullSettingsSourceAddresses[] | cdktf.IResolvable

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
  public get(index: number): MpsInputInputGroupHlsPullSettingsSourceAddressesOutputReference {
    return new MpsInputInputGroupHlsPullSettingsSourceAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MpsInputInputGroupHlsPullSettings {
  /**
  * source_addresses block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/mps_input#source_addresses MpsInput#source_addresses}
  */
  readonly sourceAddresses: MpsInputInputGroupHlsPullSettingsSourceAddresses[] | cdktf.IResolvable;
}

export function mpsInputInputGroupHlsPullSettingsToTerraform(struct?: MpsInputInputGroupHlsPullSettingsOutputReference | MpsInputInputGroupHlsPullSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_addresses: cdktf.listMapper(mpsInputInputGroupHlsPullSettingsSourceAddressesToTerraform, true)(struct!.sourceAddresses),
  }
}


export function mpsInputInputGroupHlsPullSettingsToHclTerraform(struct?: MpsInputInputGroupHlsPullSettingsOutputReference | MpsInputInputGroupHlsPullSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source_addresses: {
      value: cdktf.listMapperHcl(mpsInputInputGroupHlsPullSettingsSourceAddressesToHclTerraform, true)(struct!.sourceAddresses),
      isBlock: true,
      type: "list",
      storageClassType: "MpsInputInputGroupHlsPullSettingsSourceAddressesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsInputInputGroupHlsPullSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsInputInputGroupHlsPullSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceAddresses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddresses = this._sourceAddresses?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsInputInputGroupHlsPullSettings | undefined) {
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
  private _sourceAddresses = new MpsInputInputGroupHlsPullSettingsSourceAddressesList(this, "source_addresses", false);
  public get sourceAddresses() {
    return this._sourceAddresses;
  }
  public putSourceAddresses(value: MpsInputInputGroupHlsPullSettingsSourceAddresses[] | cdktf.IResolvable) {
    this._sourceAddresses.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressesInput() {
    return this._sourceAddresses.internalValue;
  }
}
export interface MpsInputInputGroupResilientStream {
  /**
  * Delay time, in seconds, currently supports a range of 10 to 300 seconds. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/mps_input#buffer_time MpsInput#buffer_time}
  */
  readonly bufferTime?: number;
  /**
  * Whether to enable the delayed broadcast smooth spit stream, true is enabled, false is not enabled, and the default is not enabled. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/mps_input#enable MpsInput#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
}

export function mpsInputInputGroupResilientStreamToTerraform(struct?: MpsInputInputGroupResilientStreamOutputReference | MpsInputInputGroupResilientStream): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    buffer_time: cdktf.numberToTerraform(struct!.bufferTime),
    enable: cdktf.booleanToTerraform(struct!.enable),
  }
}


export function mpsInputInputGroupResilientStreamToHclTerraform(struct?: MpsInputInputGroupResilientStreamOutputReference | MpsInputInputGroupResilientStream): any {
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

export class MpsInputInputGroupResilientStreamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsInputInputGroupResilientStream | undefined {
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

  public set internalValue(value: MpsInputInputGroupResilientStream | undefined) {
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
export interface MpsInputInputGroupRtmpPullSettingsSourceAddresses {
  /**
  * StreamKey information of the RTMP source site.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/mps_input#stream_key MpsInput#stream_key}
  */
  readonly streamKey: string;
  /**
  * TcUrl address of the RTMP source server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/mps_input#tc_url MpsInput#tc_url}
  */
  readonly tcUrl: string;
}

export function mpsInputInputGroupRtmpPullSettingsSourceAddressesToTerraform(struct?: MpsInputInputGroupRtmpPullSettingsSourceAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    stream_key: cdktf.stringToTerraform(struct!.streamKey),
    tc_url: cdktf.stringToTerraform(struct!.tcUrl),
  }
}


export function mpsInputInputGroupRtmpPullSettingsSourceAddressesToHclTerraform(struct?: MpsInputInputGroupRtmpPullSettingsSourceAddresses | cdktf.IResolvable): any {
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

export class MpsInputInputGroupRtmpPullSettingsSourceAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MpsInputInputGroupRtmpPullSettingsSourceAddresses | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MpsInputInputGroupRtmpPullSettingsSourceAddresses | cdktf.IResolvable | undefined) {
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

export class MpsInputInputGroupRtmpPullSettingsSourceAddressesList extends cdktf.ComplexList {
  public internalValue? : MpsInputInputGroupRtmpPullSettingsSourceAddresses[] | cdktf.IResolvable

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
  public get(index: number): MpsInputInputGroupRtmpPullSettingsSourceAddressesOutputReference {
    return new MpsInputInputGroupRtmpPullSettingsSourceAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MpsInputInputGroupRtmpPullSettings {
  /**
  * source_addresses block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/mps_input#source_addresses MpsInput#source_addresses}
  */
  readonly sourceAddresses: MpsInputInputGroupRtmpPullSettingsSourceAddresses[] | cdktf.IResolvable;
}

export function mpsInputInputGroupRtmpPullSettingsToTerraform(struct?: MpsInputInputGroupRtmpPullSettingsOutputReference | MpsInputInputGroupRtmpPullSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_addresses: cdktf.listMapper(mpsInputInputGroupRtmpPullSettingsSourceAddressesToTerraform, true)(struct!.sourceAddresses),
  }
}


export function mpsInputInputGroupRtmpPullSettingsToHclTerraform(struct?: MpsInputInputGroupRtmpPullSettingsOutputReference | MpsInputInputGroupRtmpPullSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source_addresses: {
      value: cdktf.listMapperHcl(mpsInputInputGroupRtmpPullSettingsSourceAddressesToHclTerraform, true)(struct!.sourceAddresses),
      isBlock: true,
      type: "list",
      storageClassType: "MpsInputInputGroupRtmpPullSettingsSourceAddressesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsInputInputGroupRtmpPullSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsInputInputGroupRtmpPullSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceAddresses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddresses = this._sourceAddresses?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsInputInputGroupRtmpPullSettings | undefined) {
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
  private _sourceAddresses = new MpsInputInputGroupRtmpPullSettingsSourceAddressesList(this, "source_addresses", false);
  public get sourceAddresses() {
    return this._sourceAddresses;
  }
  public putSourceAddresses(value: MpsInputInputGroupRtmpPullSettingsSourceAddresses[] | cdktf.IResolvable) {
    this._sourceAddresses.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressesInput() {
    return this._sourceAddresses.internalValue;
  }
}
export interface MpsInputInputGroupRtpSettings {
  /**
  * Defaults to &#39;none&#39;, optional values[&#39;none&#39;].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/mps_input#fec MpsInput#fec}
  */
  readonly fec?: string;
  /**
  * Idle timeout, the default is 5000, the unit is ms, and the range is [1000, 10000].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/mps_input#idle_timeout MpsInput#idle_timeout}
  */
  readonly idleTimeout?: number;
}

export function mpsInputInputGroupRtpSettingsToTerraform(struct?: MpsInputInputGroupRtpSettingsOutputReference | MpsInputInputGroupRtpSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fec: cdktf.stringToTerraform(struct!.fec),
    idle_timeout: cdktf.numberToTerraform(struct!.idleTimeout),
  }
}


export function mpsInputInputGroupRtpSettingsToHclTerraform(struct?: MpsInputInputGroupRtpSettingsOutputReference | MpsInputInputGroupRtpSettings): any {
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

export class MpsInputInputGroupRtpSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsInputInputGroupRtpSettings | undefined {
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

  public set internalValue(value: MpsInputInputGroupRtpSettings | undefined) {
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
export interface MpsInputInputGroupRtspPullSettingsSourceAddresses {
  /**
  * The URL address of the RTSP source site.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/mps_input#url MpsInput#url}
  */
  readonly url: string;
}

export function mpsInputInputGroupRtspPullSettingsSourceAddressesToTerraform(struct?: MpsInputInputGroupRtspPullSettingsSourceAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function mpsInputInputGroupRtspPullSettingsSourceAddressesToHclTerraform(struct?: MpsInputInputGroupRtspPullSettingsSourceAddresses | cdktf.IResolvable): any {
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

export class MpsInputInputGroupRtspPullSettingsSourceAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MpsInputInputGroupRtspPullSettingsSourceAddresses | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MpsInputInputGroupRtspPullSettingsSourceAddresses | cdktf.IResolvable | undefined) {
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

export class MpsInputInputGroupRtspPullSettingsSourceAddressesList extends cdktf.ComplexList {
  public internalValue? : MpsInputInputGroupRtspPullSettingsSourceAddresses[] | cdktf.IResolvable

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
  public get(index: number): MpsInputInputGroupRtspPullSettingsSourceAddressesOutputReference {
    return new MpsInputInputGroupRtspPullSettingsSourceAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MpsInputInputGroupRtspPullSettings {
  /**
  * source_addresses block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/mps_input#source_addresses MpsInput#source_addresses}
  */
  readonly sourceAddresses: MpsInputInputGroupRtspPullSettingsSourceAddresses[] | cdktf.IResolvable;
}

export function mpsInputInputGroupRtspPullSettingsToTerraform(struct?: MpsInputInputGroupRtspPullSettingsOutputReference | MpsInputInputGroupRtspPullSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_addresses: cdktf.listMapper(mpsInputInputGroupRtspPullSettingsSourceAddressesToTerraform, true)(struct!.sourceAddresses),
  }
}


export function mpsInputInputGroupRtspPullSettingsToHclTerraform(struct?: MpsInputInputGroupRtspPullSettingsOutputReference | MpsInputInputGroupRtspPullSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source_addresses: {
      value: cdktf.listMapperHcl(mpsInputInputGroupRtspPullSettingsSourceAddressesToHclTerraform, true)(struct!.sourceAddresses),
      isBlock: true,
      type: "list",
      storageClassType: "MpsInputInputGroupRtspPullSettingsSourceAddressesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsInputInputGroupRtspPullSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsInputInputGroupRtspPullSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceAddresses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddresses = this._sourceAddresses?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsInputInputGroupRtspPullSettings | undefined) {
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
  private _sourceAddresses = new MpsInputInputGroupRtspPullSettingsSourceAddressesList(this, "source_addresses", false);
  public get sourceAddresses() {
    return this._sourceAddresses;
  }
  public putSourceAddresses(value: MpsInputInputGroupRtspPullSettingsSourceAddresses[] | cdktf.IResolvable) {
    this._sourceAddresses.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressesInput() {
    return this._sourceAddresses.internalValue;
  }
}
export interface MpsInputInputGroupSrtSettingsSourceAddresses {
  /**
  * Peer IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/mps_input#ip MpsInput#ip}
  */
  readonly ip: string;
  /**
  * Peer port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/mps_input#port MpsInput#port}
  */
  readonly port: number;
}

export function mpsInputInputGroupSrtSettingsSourceAddressesToTerraform(struct?: MpsInputInputGroupSrtSettingsSourceAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function mpsInputInputGroupSrtSettingsSourceAddressesToHclTerraform(struct?: MpsInputInputGroupSrtSettingsSourceAddresses | cdktf.IResolvable): any {
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

export class MpsInputInputGroupSrtSettingsSourceAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MpsInputInputGroupSrtSettingsSourceAddresses | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MpsInputInputGroupSrtSettingsSourceAddresses | cdktf.IResolvable | undefined) {
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

export class MpsInputInputGroupSrtSettingsSourceAddressesList extends cdktf.ComplexList {
  public internalValue? : MpsInputInputGroupSrtSettingsSourceAddresses[] | cdktf.IResolvable

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
  public get(index: number): MpsInputInputGroupSrtSettingsSourceAddressesOutputReference {
    return new MpsInputInputGroupSrtSettingsSourceAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MpsInputInputGroupSrtSettings {
  /**
  * Delay, default 0, unit ms, range [0, 3000].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/mps_input#latency MpsInput#latency}
  */
  readonly latency?: number;
  /**
  * SRT mode, optional [LISTENER|CALLER], default is LISTENER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/mps_input#mode MpsInput#mode}
  */
  readonly mode?: string;
  /**
  * The decryption key, which is empty by default, means no encryption. Only ascii code values can be filled in, and the length is [10, 79].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/mps_input#passphrase MpsInput#passphrase}
  */
  readonly passphrase?: string;
  /**
  * Key length, default is 0, optional [0|16|24|32].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/mps_input#pb_key_len MpsInput#pb_key_len}
  */
  readonly pbKeyLen?: number;
  /**
  * Peer timeout, default is 5000, unit ms, range is [1000, 10000].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/mps_input#peer_idle_timeout MpsInput#peer_idle_timeout}
  */
  readonly peerIdleTimeout?: number;
  /**
  * Peer delay, the default is 0, the unit is ms, and the range is [0, 3000].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/mps_input#peer_latency MpsInput#peer_latency}
  */
  readonly peerLatency?: number;
  /**
  * Receiving delay, default is 120, unit ms, range is [0, 3000].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/mps_input#recv_latency MpsInput#recv_latency}
  */
  readonly recvLatency?: number;
  /**
  * Stream ID, optional uppercase and lowercase letters, numbers and special characters (.#!:&amp;,=_-), length 0~512. Specific format can refer to:https://github.com/Haivision/srt/blob/master/docs/features/access-control.md#standard-keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/mps_input#stream_id MpsInput#stream_id}
  */
  readonly streamId?: string;
  /**
  * source_addresses block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/mps_input#source_addresses MpsInput#source_addresses}
  */
  readonly sourceAddresses?: MpsInputInputGroupSrtSettingsSourceAddresses[] | cdktf.IResolvable;
}

export function mpsInputInputGroupSrtSettingsToTerraform(struct?: MpsInputInputGroupSrtSettingsOutputReference | MpsInputInputGroupSrtSettings): any {
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
    source_addresses: cdktf.listMapper(mpsInputInputGroupSrtSettingsSourceAddressesToTerraform, true)(struct!.sourceAddresses),
  }
}


export function mpsInputInputGroupSrtSettingsToHclTerraform(struct?: MpsInputInputGroupSrtSettingsOutputReference | MpsInputInputGroupSrtSettings): any {
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
      value: cdktf.listMapperHcl(mpsInputInputGroupSrtSettingsSourceAddressesToHclTerraform, true)(struct!.sourceAddresses),
      isBlock: true,
      type: "list",
      storageClassType: "MpsInputInputGroupSrtSettingsSourceAddressesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsInputInputGroupSrtSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsInputInputGroupSrtSettings | undefined {
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

  public set internalValue(value: MpsInputInputGroupSrtSettings | undefined) {
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
  private _sourceAddresses = new MpsInputInputGroupSrtSettingsSourceAddressesList(this, "source_addresses", false);
  public get sourceAddresses() {
    return this._sourceAddresses;
  }
  public putSourceAddresses(value: MpsInputInputGroupSrtSettingsSourceAddresses[] | cdktf.IResolvable) {
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
export interface MpsInputInputGroup {
  /**
  * The input IP whitelist, the format is CIDR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/mps_input#allow_ip_list MpsInput#allow_ip_list}
  */
  readonly allowIpList?: string[];
  /**
  * The input description with a length of [0, 255].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/mps_input#description MpsInput#description}
  */
  readonly description?: string;
  /**
  * The active/standby switch of the input, [OPEN|CLOSE] is optional, and the default is CLOSE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/mps_input#fail_over MpsInput#fail_over}
  */
  readonly failOver?: string;
  /**
  * The input name, you can fill in uppercase and lowercase letters, numbers and underscores, and the length is [1, 32].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/mps_input#input_name MpsInput#input_name}
  */
  readonly inputName: string;
  /**
  * Input protocol, optional [SRT|RTP|RTMP|RTMP_PULL].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/mps_input#protocol MpsInput#protocol}
  */
  readonly protocol: string;
  /**
  * hls_pull_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/mps_input#hls_pull_settings MpsInput#hls_pull_settings}
  */
  readonly hlsPullSettings?: MpsInputInputGroupHlsPullSettings;
  /**
  * resilient_stream block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/mps_input#resilient_stream MpsInput#resilient_stream}
  */
  readonly resilientStream?: MpsInputInputGroupResilientStream;
  /**
  * rtmp_pull_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/mps_input#rtmp_pull_settings MpsInput#rtmp_pull_settings}
  */
  readonly rtmpPullSettings?: MpsInputInputGroupRtmpPullSettings;
  /**
  * rtp_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/mps_input#rtp_settings MpsInput#rtp_settings}
  */
  readonly rtpSettings?: MpsInputInputGroupRtpSettings;
  /**
  * rtsp_pull_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/mps_input#rtsp_pull_settings MpsInput#rtsp_pull_settings}
  */
  readonly rtspPullSettings?: MpsInputInputGroupRtspPullSettings;
  /**
  * srt_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/mps_input#srt_settings MpsInput#srt_settings}
  */
  readonly srtSettings?: MpsInputInputGroupSrtSettings;
}

export function mpsInputInputGroupToTerraform(struct?: MpsInputInputGroupOutputReference | MpsInputInputGroup): any {
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
    hls_pull_settings: mpsInputInputGroupHlsPullSettingsToTerraform(struct!.hlsPullSettings),
    resilient_stream: mpsInputInputGroupResilientStreamToTerraform(struct!.resilientStream),
    rtmp_pull_settings: mpsInputInputGroupRtmpPullSettingsToTerraform(struct!.rtmpPullSettings),
    rtp_settings: mpsInputInputGroupRtpSettingsToTerraform(struct!.rtpSettings),
    rtsp_pull_settings: mpsInputInputGroupRtspPullSettingsToTerraform(struct!.rtspPullSettings),
    srt_settings: mpsInputInputGroupSrtSettingsToTerraform(struct!.srtSettings),
  }
}


export function mpsInputInputGroupToHclTerraform(struct?: MpsInputInputGroupOutputReference | MpsInputInputGroup): any {
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
      value: mpsInputInputGroupHlsPullSettingsToHclTerraform(struct!.hlsPullSettings),
      isBlock: true,
      type: "list",
      storageClassType: "MpsInputInputGroupHlsPullSettingsList",
    },
    resilient_stream: {
      value: mpsInputInputGroupResilientStreamToHclTerraform(struct!.resilientStream),
      isBlock: true,
      type: "list",
      storageClassType: "MpsInputInputGroupResilientStreamList",
    },
    rtmp_pull_settings: {
      value: mpsInputInputGroupRtmpPullSettingsToHclTerraform(struct!.rtmpPullSettings),
      isBlock: true,
      type: "list",
      storageClassType: "MpsInputInputGroupRtmpPullSettingsList",
    },
    rtp_settings: {
      value: mpsInputInputGroupRtpSettingsToHclTerraform(struct!.rtpSettings),
      isBlock: true,
      type: "list",
      storageClassType: "MpsInputInputGroupRtpSettingsList",
    },
    rtsp_pull_settings: {
      value: mpsInputInputGroupRtspPullSettingsToHclTerraform(struct!.rtspPullSettings),
      isBlock: true,
      type: "list",
      storageClassType: "MpsInputInputGroupRtspPullSettingsList",
    },
    srt_settings: {
      value: mpsInputInputGroupSrtSettingsToHclTerraform(struct!.srtSettings),
      isBlock: true,
      type: "list",
      storageClassType: "MpsInputInputGroupSrtSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsInputInputGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsInputInputGroup | undefined {
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

  public set internalValue(value: MpsInputInputGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
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
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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

  // allow_ip_list - computed: true, optional: true, required: false
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
  private _hlsPullSettings = new MpsInputInputGroupHlsPullSettingsOutputReference(this, "hls_pull_settings");
  public get hlsPullSettings() {
    return this._hlsPullSettings;
  }
  public putHlsPullSettings(value: MpsInputInputGroupHlsPullSettings) {
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
  private _resilientStream = new MpsInputInputGroupResilientStreamOutputReference(this, "resilient_stream");
  public get resilientStream() {
    return this._resilientStream;
  }
  public putResilientStream(value: MpsInputInputGroupResilientStream) {
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
  private _rtmpPullSettings = new MpsInputInputGroupRtmpPullSettingsOutputReference(this, "rtmp_pull_settings");
  public get rtmpPullSettings() {
    return this._rtmpPullSettings;
  }
  public putRtmpPullSettings(value: MpsInputInputGroupRtmpPullSettings) {
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
  private _rtpSettings = new MpsInputInputGroupRtpSettingsOutputReference(this, "rtp_settings");
  public get rtpSettings() {
    return this._rtpSettings;
  }
  public putRtpSettings(value: MpsInputInputGroupRtpSettings) {
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
  private _rtspPullSettings = new MpsInputInputGroupRtspPullSettingsOutputReference(this, "rtsp_pull_settings");
  public get rtspPullSettings() {
    return this._rtspPullSettings;
  }
  public putRtspPullSettings(value: MpsInputInputGroupRtspPullSettings) {
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
  private _srtSettings = new MpsInputInputGroupSrtSettingsOutputReference(this, "srt_settings");
  public get srtSettings() {
    return this._srtSettings;
  }
  public putSrtSettings(value: MpsInputInputGroupSrtSettings) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/mps_input tencentcloud_mps_input}
*/
export class MpsInput extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_mps_input";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MpsInput resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MpsInput to import
  * @param importFromId The id of the existing MpsInput that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/mps_input#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MpsInput to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_mps_input", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/mps_input tencentcloud_mps_input} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MpsInputConfig
  */
  public constructor(scope: Construct, id: string, config: MpsInputConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_mps_input',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.40',
        providerVersionConstraint: '1.82.40'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._flowId = config.flowId;
    this._id = config.id;
    this._inputGroup.internalValue = config.inputGroup;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // flow_id - computed: false, optional: false, required: true
  private _flowId?: string; 
  public get flowId() {
    return this.getStringAttribute('flow_id');
  }
  public set flowId(value: string) {
    this._flowId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flowIdInput() {
    return this._flowId;
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

  // input_group - computed: false, optional: true, required: false
  private _inputGroup = new MpsInputInputGroupOutputReference(this, "input_group");
  public get inputGroup() {
    return this._inputGroup;
  }
  public putInputGroup(value: MpsInputInputGroup) {
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
      flow_id: cdktf.stringToTerraform(this._flowId),
      id: cdktf.stringToTerraform(this._id),
      input_group: mpsInputInputGroupToTerraform(this._inputGroup.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      flow_id: {
        value: cdktf.stringToHclTerraform(this._flowId),
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
      input_group: {
        value: mpsInputInputGroupToHclTerraform(this._inputGroup.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MpsInputInputGroupList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
