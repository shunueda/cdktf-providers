// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mps_output
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MpsOutputConfig extends cdktf.TerraformMetaArguments {
  /**
  * Flow ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mps_output#flow_id MpsOutput#flow_id}
  */
  readonly flowId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mps_output#id MpsOutput#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * output block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mps_output#output MpsOutput#output}
  */
  readonly output: MpsOutputOutput;
}
export interface MpsOutputOutputRtmpSettingsDestinations {
  /**
  * relayed StreamKey, in the format: stream?key=value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mps_output#stream_key MpsOutput#stream_key}
  */
  readonly streamKey: string;
  /**
  * relayed URL, the format is: rtmp://domain/live.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mps_output#url MpsOutput#url}
  */
  readonly url: string;
}

export function mpsOutputOutputRtmpSettingsDestinationsToTerraform(struct?: MpsOutputOutputRtmpSettingsDestinations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    stream_key: cdktf.stringToTerraform(struct!.streamKey),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function mpsOutputOutputRtmpSettingsDestinationsToHclTerraform(struct?: MpsOutputOutputRtmpSettingsDestinations | cdktf.IResolvable): any {
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

export class MpsOutputOutputRtmpSettingsDestinationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MpsOutputOutputRtmpSettingsDestinations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._streamKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamKey = this._streamKey;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsOutputOutputRtmpSettingsDestinations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._streamKey = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._streamKey = value.streamKey;
      this._url = value.url;
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

export class MpsOutputOutputRtmpSettingsDestinationsList extends cdktf.ComplexList {
  public internalValue? : MpsOutputOutputRtmpSettingsDestinations[] | cdktf.IResolvable

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
  public get(index: number): MpsOutputOutputRtmpSettingsDestinationsOutputReference {
    return new MpsOutputOutputRtmpSettingsDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MpsOutputOutputRtmpSettings {
  /**
  * RTMP Chunk size, range is [4096, 40960].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mps_output#chunk_size MpsOutput#chunk_size}
  */
  readonly chunkSize?: number;
  /**
  * destinations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mps_output#destinations MpsOutput#destinations}
  */
  readonly destinations: MpsOutputOutputRtmpSettingsDestinations[] | cdktf.IResolvable;
}

export function mpsOutputOutputRtmpSettingsToTerraform(struct?: MpsOutputOutputRtmpSettingsOutputReference | MpsOutputOutputRtmpSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    chunk_size: cdktf.numberToTerraform(struct!.chunkSize),
    destinations: cdktf.listMapper(mpsOutputOutputRtmpSettingsDestinationsToTerraform, true)(struct!.destinations),
  }
}


export function mpsOutputOutputRtmpSettingsToHclTerraform(struct?: MpsOutputOutputRtmpSettingsOutputReference | MpsOutputOutputRtmpSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    chunk_size: {
      value: cdktf.numberToHclTerraform(struct!.chunkSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    destinations: {
      value: cdktf.listMapperHcl(mpsOutputOutputRtmpSettingsDestinationsToHclTerraform, true)(struct!.destinations),
      isBlock: true,
      type: "list",
      storageClassType: "MpsOutputOutputRtmpSettingsDestinationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsOutputOutputRtmpSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsOutputOutputRtmpSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chunkSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.chunkSize = this._chunkSize;
    }
    if (this._destinations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinations = this._destinations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsOutputOutputRtmpSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._chunkSize = undefined;
      this._destinations.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._chunkSize = value.chunkSize;
      this._destinations.internalValue = value.destinations;
    }
  }

  // chunk_size - computed: false, optional: true, required: false
  private _chunkSize?: number; 
  public get chunkSize() {
    return this.getNumberAttribute('chunk_size');
  }
  public set chunkSize(value: number) {
    this._chunkSize = value;
  }
  public resetChunkSize() {
    this._chunkSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chunkSizeInput() {
    return this._chunkSize;
  }

  // destinations - computed: false, optional: false, required: true
  private _destinations = new MpsOutputOutputRtmpSettingsDestinationsList(this, "destinations", false);
  public get destinations() {
    return this._destinations;
  }
  public putDestinations(value: MpsOutputOutputRtmpSettingsDestinations[] | cdktf.IResolvable) {
    this._destinations.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationsInput() {
    return this._destinations.internalValue;
  }
}
export interface MpsOutputOutputRtpSettingsDestinations {
  /**
  * The target IP of the relay.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mps_output#ip MpsOutput#ip}
  */
  readonly ip: string;
  /**
  * Destination port for relays.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mps_output#port MpsOutput#port}
  */
  readonly port: number;
}

export function mpsOutputOutputRtpSettingsDestinationsToTerraform(struct?: MpsOutputOutputRtpSettingsDestinations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function mpsOutputOutputRtpSettingsDestinationsToHclTerraform(struct?: MpsOutputOutputRtpSettingsDestinations | cdktf.IResolvable): any {
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

export class MpsOutputOutputRtpSettingsDestinationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MpsOutputOutputRtpSettingsDestinations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MpsOutputOutputRtpSettingsDestinations | cdktf.IResolvable | undefined) {
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

export class MpsOutputOutputRtpSettingsDestinationsList extends cdktf.ComplexList {
  public internalValue? : MpsOutputOutputRtpSettingsDestinations[] | cdktf.IResolvable

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
  public get(index: number): MpsOutputOutputRtpSettingsDestinationsOutputReference {
    return new MpsOutputOutputRtpSettingsDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MpsOutputOutputRtpSettings {
  /**
  * You can only fill in none.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mps_output#fec MpsOutput#fec}
  */
  readonly fec: string;
  /**
  * Idle timeout, unit ms.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mps_output#idle_timeout MpsOutput#idle_timeout}
  */
  readonly idleTimeout: number;
  /**
  * destinations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mps_output#destinations MpsOutput#destinations}
  */
  readonly destinations: MpsOutputOutputRtpSettingsDestinations[] | cdktf.IResolvable;
}

export function mpsOutputOutputRtpSettingsToTerraform(struct?: MpsOutputOutputRtpSettingsOutputReference | MpsOutputOutputRtpSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fec: cdktf.stringToTerraform(struct!.fec),
    idle_timeout: cdktf.numberToTerraform(struct!.idleTimeout),
    destinations: cdktf.listMapper(mpsOutputOutputRtpSettingsDestinationsToTerraform, true)(struct!.destinations),
  }
}


export function mpsOutputOutputRtpSettingsToHclTerraform(struct?: MpsOutputOutputRtpSettingsOutputReference | MpsOutputOutputRtpSettings): any {
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
    destinations: {
      value: cdktf.listMapperHcl(mpsOutputOutputRtpSettingsDestinationsToHclTerraform, true)(struct!.destinations),
      isBlock: true,
      type: "list",
      storageClassType: "MpsOutputOutputRtpSettingsDestinationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsOutputOutputRtpSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsOutputOutputRtpSettings | undefined {
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
    if (this._destinations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinations = this._destinations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsOutputOutputRtpSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fec = undefined;
      this._idleTimeout = undefined;
      this._destinations.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fec = value.fec;
      this._idleTimeout = value.idleTimeout;
      this._destinations.internalValue = value.destinations;
    }
  }

  // fec - computed: false, optional: false, required: true
  private _fec?: string; 
  public get fec() {
    return this.getStringAttribute('fec');
  }
  public set fec(value: string) {
    this._fec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fecInput() {
    return this._fec;
  }

  // idle_timeout - computed: false, optional: false, required: true
  private _idleTimeout?: number; 
  public get idleTimeout() {
    return this.getNumberAttribute('idle_timeout');
  }
  public set idleTimeout(value: number) {
    this._idleTimeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInput() {
    return this._idleTimeout;
  }

  // destinations - computed: false, optional: false, required: true
  private _destinations = new MpsOutputOutputRtpSettingsDestinationsList(this, "destinations", false);
  public get destinations() {
    return this._destinations;
  }
  public putDestinations(value: MpsOutputOutputRtpSettingsDestinations[] | cdktf.IResolvable) {
    this._destinations.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationsInput() {
    return this._destinations.internalValue;
  }
}
export interface MpsOutputOutputSrtSettingsDestinations {
  /**
  * Output IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mps_output#ip MpsOutput#ip}
  */
  readonly ip: string;
  /**
  * output port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mps_output#port MpsOutput#port}
  */
  readonly port: number;
}

export function mpsOutputOutputSrtSettingsDestinationsToTerraform(struct?: MpsOutputOutputSrtSettingsDestinations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function mpsOutputOutputSrtSettingsDestinationsToHclTerraform(struct?: MpsOutputOutputSrtSettingsDestinations | cdktf.IResolvable): any {
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

export class MpsOutputOutputSrtSettingsDestinationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MpsOutputOutputSrtSettingsDestinations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MpsOutputOutputSrtSettingsDestinations | cdktf.IResolvable | undefined) {
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

export class MpsOutputOutputSrtSettingsDestinationsList extends cdktf.ComplexList {
  public internalValue? : MpsOutputOutputSrtSettingsDestinations[] | cdktf.IResolvable

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
  public get(index: number): MpsOutputOutputSrtSettingsDestinationsOutputReference {
    return new MpsOutputOutputSrtSettingsDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MpsOutputOutputSrtSettings {
  /**
  * The total delay of relaying SRT, the default is 0, the unit is ms, and the range is [0, 3000].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mps_output#latency MpsOutput#latency}
  */
  readonly latency?: number;
  /**
  * SRT mode, optional [LISTENER|CALLER], default is CALLER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mps_output#mode MpsOutput#mode}
  */
  readonly mode?: string;
  /**
  * The encryption key for relaying SRT, which is empty by default, indicating no encryption. Only ascii code values can be filled in, and the length is [10, 79].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mps_output#passphrase MpsOutput#passphrase}
  */
  readonly passphrase?: string;
  /**
  * The key length of relay SRT, the default is 0, optional [0|16|24|32].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mps_output#pb_key_len MpsOutput#pb_key_len}
  */
  readonly pbKeyLen?: number;
  /**
  * The peer idle timeout for relaying SRT, the default is 5000, the unit is ms, and the range is [1000, 10000].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mps_output#peer_idle_timeout MpsOutput#peer_idle_timeout}
  */
  readonly peerIdleTimeout?: number;
  /**
  * The peer delay of relaying SRT, the default is 0, the unit is ms, and the range is [0, 3000].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mps_output#peer_latency MpsOutput#peer_latency}
  */
  readonly peerLatency?: number;
  /**
  * The reception delay of relay SRT, the default is 120, the unit is ms, the range is [0, 3000].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mps_output#recv_latency MpsOutput#recv_latency}
  */
  readonly recvLatency?: number;
  /**
  * relay the stream ID of SRT. You can choose uppercase and lowercase letters, numbers and special characters (.#!:&amp;,=_-). The length is 0~512.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mps_output#stream_id MpsOutput#stream_id}
  */
  readonly streamId?: string;
  /**
  * destinations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mps_output#destinations MpsOutput#destinations}
  */
  readonly destinations: MpsOutputOutputSrtSettingsDestinations[] | cdktf.IResolvable;
}

export function mpsOutputOutputSrtSettingsToTerraform(struct?: MpsOutputOutputSrtSettingsOutputReference | MpsOutputOutputSrtSettings): any {
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
    destinations: cdktf.listMapper(mpsOutputOutputSrtSettingsDestinationsToTerraform, true)(struct!.destinations),
  }
}


export function mpsOutputOutputSrtSettingsToHclTerraform(struct?: MpsOutputOutputSrtSettingsOutputReference | MpsOutputOutputSrtSettings): any {
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
    destinations: {
      value: cdktf.listMapperHcl(mpsOutputOutputSrtSettingsDestinationsToHclTerraform, true)(struct!.destinations),
      isBlock: true,
      type: "list",
      storageClassType: "MpsOutputOutputSrtSettingsDestinationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsOutputOutputSrtSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsOutputOutputSrtSettings | undefined {
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
    if (this._destinations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinations = this._destinations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsOutputOutputSrtSettings | undefined) {
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
      this._destinations.internalValue = undefined;
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
      this._destinations.internalValue = value.destinations;
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

  // stream_id - computed: false, optional: true, required: false
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

  // destinations - computed: false, optional: false, required: true
  private _destinations = new MpsOutputOutputSrtSettingsDestinationsList(this, "destinations", false);
  public get destinations() {
    return this._destinations;
  }
  public putDestinations(value: MpsOutputOutputSrtSettingsDestinations[] | cdktf.IResolvable) {
    this._destinations.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationsInput() {
    return this._destinations.internalValue;
  }
}
export interface MpsOutputOutput {
  /**
  * IP whitelist list, the format is CIDR, such as 0.0.0.0/0. When the Protocol is RTMP_PULL, it is valid, and if it is empty, it means that the client IP is not limited.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mps_output#allow_ip_list MpsOutput#allow_ip_list}
  */
  readonly allowIpList?: string[];
  /**
  * Output description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mps_output#description MpsOutput#description}
  */
  readonly description: string;
  /**
  * The maximum number of concurrent pull streams, the maximum is 4, and the default is 4. Only SRT or RTMP_PULL can set this parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mps_output#max_concurrent MpsOutput#max_concurrent}
  */
  readonly maxConcurrent?: number;
  /**
  * The name of the output.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mps_output#output_name MpsOutput#output_name}
  */
  readonly outputName: string;
  /**
  * Output region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mps_output#output_region MpsOutput#output_region}
  */
  readonly outputRegion: string;
  /**
  * Output protocol, optional [SRT|RTP|RTMP|RTMP_PULL].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mps_output#protocol MpsOutput#protocol}
  */
  readonly protocol: string;
  /**
  * rtmp_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mps_output#rtmp_settings MpsOutput#rtmp_settings}
  */
  readonly rtmpSettings?: MpsOutputOutputRtmpSettings;
  /**
  * rtp_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mps_output#rtp_settings MpsOutput#rtp_settings}
  */
  readonly rtpSettings?: MpsOutputOutputRtpSettings;
  /**
  * srt_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mps_output#srt_settings MpsOutput#srt_settings}
  */
  readonly srtSettings?: MpsOutputOutputSrtSettings;
}

export function mpsOutputOutputToTerraform(struct?: MpsOutputOutputOutputReference | MpsOutputOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_ip_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowIpList),
    description: cdktf.stringToTerraform(struct!.description),
    max_concurrent: cdktf.numberToTerraform(struct!.maxConcurrent),
    output_name: cdktf.stringToTerraform(struct!.outputName),
    output_region: cdktf.stringToTerraform(struct!.outputRegion),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    rtmp_settings: mpsOutputOutputRtmpSettingsToTerraform(struct!.rtmpSettings),
    rtp_settings: mpsOutputOutputRtpSettingsToTerraform(struct!.rtpSettings),
    srt_settings: mpsOutputOutputSrtSettingsToTerraform(struct!.srtSettings),
  }
}


export function mpsOutputOutputToHclTerraform(struct?: MpsOutputOutputOutputReference | MpsOutputOutput): any {
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
    max_concurrent: {
      value: cdktf.numberToHclTerraform(struct!.maxConcurrent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    output_name: {
      value: cdktf.stringToHclTerraform(struct!.outputName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_region: {
      value: cdktf.stringToHclTerraform(struct!.outputRegion),
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
    rtmp_settings: {
      value: mpsOutputOutputRtmpSettingsToHclTerraform(struct!.rtmpSettings),
      isBlock: true,
      type: "list",
      storageClassType: "MpsOutputOutputRtmpSettingsList",
    },
    rtp_settings: {
      value: mpsOutputOutputRtpSettingsToHclTerraform(struct!.rtpSettings),
      isBlock: true,
      type: "list",
      storageClassType: "MpsOutputOutputRtpSettingsList",
    },
    srt_settings: {
      value: mpsOutputOutputSrtSettingsToHclTerraform(struct!.srtSettings),
      isBlock: true,
      type: "list",
      storageClassType: "MpsOutputOutputSrtSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsOutputOutputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsOutputOutput | undefined {
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
    if (this._maxConcurrent !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrent = this._maxConcurrent;
    }
    if (this._outputName !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputName = this._outputName;
    }
    if (this._outputRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputRegion = this._outputRegion;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._rtmpSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rtmpSettings = this._rtmpSettings?.internalValue;
    }
    if (this._rtpSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rtpSettings = this._rtpSettings?.internalValue;
    }
    if (this._srtSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.srtSettings = this._srtSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsOutputOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowIpList = undefined;
      this._description = undefined;
      this._maxConcurrent = undefined;
      this._outputName = undefined;
      this._outputRegion = undefined;
      this._protocol = undefined;
      this._rtmpSettings.internalValue = undefined;
      this._rtpSettings.internalValue = undefined;
      this._srtSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowIpList = value.allowIpList;
      this._description = value.description;
      this._maxConcurrent = value.maxConcurrent;
      this._outputName = value.outputName;
      this._outputRegion = value.outputRegion;
      this._protocol = value.protocol;
      this._rtmpSettings.internalValue = value.rtmpSettings;
      this._rtpSettings.internalValue = value.rtpSettings;
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

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // max_concurrent - computed: false, optional: true, required: false
  private _maxConcurrent?: number; 
  public get maxConcurrent() {
    return this.getNumberAttribute('max_concurrent');
  }
  public set maxConcurrent(value: number) {
    this._maxConcurrent = value;
  }
  public resetMaxConcurrent() {
    this._maxConcurrent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentInput() {
    return this._maxConcurrent;
  }

  // output_name - computed: false, optional: false, required: true
  private _outputName?: string; 
  public get outputName() {
    return this.getStringAttribute('output_name');
  }
  public set outputName(value: string) {
    this._outputName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputNameInput() {
    return this._outputName;
  }

  // output_region - computed: false, optional: false, required: true
  private _outputRegion?: string; 
  public get outputRegion() {
    return this.getStringAttribute('output_region');
  }
  public set outputRegion(value: string) {
    this._outputRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputRegionInput() {
    return this._outputRegion;
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

  // rtmp_settings - computed: false, optional: true, required: false
  private _rtmpSettings = new MpsOutputOutputRtmpSettingsOutputReference(this, "rtmp_settings");
  public get rtmpSettings() {
    return this._rtmpSettings;
  }
  public putRtmpSettings(value: MpsOutputOutputRtmpSettings) {
    this._rtmpSettings.internalValue = value;
  }
  public resetRtmpSettings() {
    this._rtmpSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rtmpSettingsInput() {
    return this._rtmpSettings.internalValue;
  }

  // rtp_settings - computed: false, optional: true, required: false
  private _rtpSettings = new MpsOutputOutputRtpSettingsOutputReference(this, "rtp_settings");
  public get rtpSettings() {
    return this._rtpSettings;
  }
  public putRtpSettings(value: MpsOutputOutputRtpSettings) {
    this._rtpSettings.internalValue = value;
  }
  public resetRtpSettings() {
    this._rtpSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rtpSettingsInput() {
    return this._rtpSettings.internalValue;
  }

  // srt_settings - computed: false, optional: true, required: false
  private _srtSettings = new MpsOutputOutputSrtSettingsOutputReference(this, "srt_settings");
  public get srtSettings() {
    return this._srtSettings;
  }
  public putSrtSettings(value: MpsOutputOutputSrtSettings) {
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
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mps_output tencentcloud_mps_output}
*/
export class MpsOutput extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_mps_output";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MpsOutput resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MpsOutput to import
  * @param importFromId The id of the existing MpsOutput that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mps_output#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MpsOutput to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_mps_output", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mps_output tencentcloud_mps_output} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MpsOutputConfig
  */
  public constructor(scope: Construct, id: string, config: MpsOutputConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_mps_output',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.38',
        providerVersionConstraint: '1.82.38'
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
    this._output.internalValue = config.output;
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

  // output - computed: false, optional: false, required: true
  private _output = new MpsOutputOutputOutputReference(this, "output");
  public get output() {
    return this._output;
  }
  public putOutput(value: MpsOutputOutput) {
    this._output.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputInput() {
    return this._output.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      flow_id: cdktf.stringToTerraform(this._flowId),
      id: cdktf.stringToTerraform(this._id),
      output: mpsOutputOutputToTerraform(this._output.internalValue),
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
      output: {
        value: mpsOutputOutputToHclTerraform(this._output.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MpsOutputOutputList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
