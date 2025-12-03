// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tcm_mesh
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TcmMeshConfig extends cdktf.TerraformMetaArguments {
  /**
  * Mesh name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tcm_mesh#display_name TcmMesh#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tcm_mesh#id TcmMesh#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Mesh ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tcm_mesh#mesh_id TcmMesh#mesh_id}
  */
  readonly meshId?: string;
  /**
  * Mesh version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tcm_mesh#mesh_version TcmMesh#mesh_version}
  */
  readonly meshVersion: string;
  /**
  * Mesh type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tcm_mesh#type TcmMesh#type}
  */
  readonly type: string;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tcm_mesh#config TcmMesh#config}
  */
  readonly config: TcmMeshConfigA;
  /**
  * tag_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tcm_mesh#tag_list TcmMesh#tag_list}
  */
  readonly tagList?: TcmMeshTagListStruct[] | cdktf.IResolvable;
}
export interface TcmMeshConfigInject {
  /**
  * IP ranges that should not be proxied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tcm_mesh#exclude_ip_ranges TcmMesh#exclude_ip_ranges}
  */
  readonly excludeIpRanges?: string[];
  /**
  * Let istio-proxy(sidecar) start first, before app container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tcm_mesh#hold_application_until_proxy_starts TcmMesh#hold_application_until_proxy_starts}
  */
  readonly holdApplicationUntilProxyStarts?: boolean | cdktf.IResolvable;
  /**
  * Let istio-proxy(sidecar) stop last, after app container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tcm_mesh#hold_proxy_until_application_ends TcmMesh#hold_proxy_until_application_ends}
  */
  readonly holdProxyUntilApplicationEnds?: boolean | cdktf.IResolvable;
}

export function tcmMeshConfigInjectToTerraform(struct?: TcmMeshConfigInjectOutputReference | TcmMeshConfigInject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_ip_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludeIpRanges),
    hold_application_until_proxy_starts: cdktf.booleanToTerraform(struct!.holdApplicationUntilProxyStarts),
    hold_proxy_until_application_ends: cdktf.booleanToTerraform(struct!.holdProxyUntilApplicationEnds),
  }
}


export function tcmMeshConfigInjectToHclTerraform(struct?: TcmMeshConfigInjectOutputReference | TcmMeshConfigInject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_ip_ranges: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludeIpRanges),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    hold_application_until_proxy_starts: {
      value: cdktf.booleanToHclTerraform(struct!.holdApplicationUntilProxyStarts),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hold_proxy_until_application_ends: {
      value: cdktf.booleanToHclTerraform(struct!.holdProxyUntilApplicationEnds),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TcmMeshConfigInjectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TcmMeshConfigInject | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludeIpRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeIpRanges = this._excludeIpRanges;
    }
    if (this._holdApplicationUntilProxyStarts !== undefined) {
      hasAnyValues = true;
      internalValueResult.holdApplicationUntilProxyStarts = this._holdApplicationUntilProxyStarts;
    }
    if (this._holdProxyUntilApplicationEnds !== undefined) {
      hasAnyValues = true;
      internalValueResult.holdProxyUntilApplicationEnds = this._holdProxyUntilApplicationEnds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TcmMeshConfigInject | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludeIpRanges = undefined;
      this._holdApplicationUntilProxyStarts = undefined;
      this._holdProxyUntilApplicationEnds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludeIpRanges = value.excludeIpRanges;
      this._holdApplicationUntilProxyStarts = value.holdApplicationUntilProxyStarts;
      this._holdProxyUntilApplicationEnds = value.holdProxyUntilApplicationEnds;
    }
  }

  // exclude_ip_ranges - computed: false, optional: true, required: false
  private _excludeIpRanges?: string[]; 
  public get excludeIpRanges() {
    return cdktf.Fn.tolist(this.getListAttribute('exclude_ip_ranges'));
  }
  public set excludeIpRanges(value: string[]) {
    this._excludeIpRanges = value;
  }
  public resetExcludeIpRanges() {
    this._excludeIpRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeIpRangesInput() {
    return this._excludeIpRanges;
  }

  // hold_application_until_proxy_starts - computed: false, optional: true, required: false
  private _holdApplicationUntilProxyStarts?: boolean | cdktf.IResolvable; 
  public get holdApplicationUntilProxyStarts() {
    return this.getBooleanAttribute('hold_application_until_proxy_starts');
  }
  public set holdApplicationUntilProxyStarts(value: boolean | cdktf.IResolvable) {
    this._holdApplicationUntilProxyStarts = value;
  }
  public resetHoldApplicationUntilProxyStarts() {
    this._holdApplicationUntilProxyStarts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holdApplicationUntilProxyStartsInput() {
    return this._holdApplicationUntilProxyStarts;
  }

  // hold_proxy_until_application_ends - computed: false, optional: true, required: false
  private _holdProxyUntilApplicationEnds?: boolean | cdktf.IResolvable; 
  public get holdProxyUntilApplicationEnds() {
    return this.getBooleanAttribute('hold_proxy_until_application_ends');
  }
  public set holdProxyUntilApplicationEnds(value: boolean | cdktf.IResolvable) {
    this._holdProxyUntilApplicationEnds = value;
  }
  public resetHoldProxyUntilApplicationEnds() {
    this._holdProxyUntilApplicationEnds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holdProxyUntilApplicationEndsInput() {
    return this._holdProxyUntilApplicationEnds;
  }
}
export interface TcmMeshConfigIstioSmartDns {
  /**
  * Enable auto allocate address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tcm_mesh#istio_meta_dns_auto_allocate TcmMesh#istio_meta_dns_auto_allocate}
  */
  readonly istioMetaDnsAutoAllocate?: boolean | cdktf.IResolvable;
  /**
  * Enable dns proxy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tcm_mesh#istio_meta_dns_capture TcmMesh#istio_meta_dns_capture}
  */
  readonly istioMetaDnsCapture?: boolean | cdktf.IResolvable;
}

export function tcmMeshConfigIstioSmartDnsToTerraform(struct?: TcmMeshConfigIstioSmartDnsOutputReference | TcmMeshConfigIstioSmartDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    istio_meta_dns_auto_allocate: cdktf.booleanToTerraform(struct!.istioMetaDnsAutoAllocate),
    istio_meta_dns_capture: cdktf.booleanToTerraform(struct!.istioMetaDnsCapture),
  }
}


export function tcmMeshConfigIstioSmartDnsToHclTerraform(struct?: TcmMeshConfigIstioSmartDnsOutputReference | TcmMeshConfigIstioSmartDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    istio_meta_dns_auto_allocate: {
      value: cdktf.booleanToHclTerraform(struct!.istioMetaDnsAutoAllocate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    istio_meta_dns_capture: {
      value: cdktf.booleanToHclTerraform(struct!.istioMetaDnsCapture),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TcmMeshConfigIstioSmartDnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TcmMeshConfigIstioSmartDns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._istioMetaDnsAutoAllocate !== undefined) {
      hasAnyValues = true;
      internalValueResult.istioMetaDnsAutoAllocate = this._istioMetaDnsAutoAllocate;
    }
    if (this._istioMetaDnsCapture !== undefined) {
      hasAnyValues = true;
      internalValueResult.istioMetaDnsCapture = this._istioMetaDnsCapture;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TcmMeshConfigIstioSmartDns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._istioMetaDnsAutoAllocate = undefined;
      this._istioMetaDnsCapture = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._istioMetaDnsAutoAllocate = value.istioMetaDnsAutoAllocate;
      this._istioMetaDnsCapture = value.istioMetaDnsCapture;
    }
  }

  // istio_meta_dns_auto_allocate - computed: false, optional: true, required: false
  private _istioMetaDnsAutoAllocate?: boolean | cdktf.IResolvable; 
  public get istioMetaDnsAutoAllocate() {
    return this.getBooleanAttribute('istio_meta_dns_auto_allocate');
  }
  public set istioMetaDnsAutoAllocate(value: boolean | cdktf.IResolvable) {
    this._istioMetaDnsAutoAllocate = value;
  }
  public resetIstioMetaDnsAutoAllocate() {
    this._istioMetaDnsAutoAllocate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get istioMetaDnsAutoAllocateInput() {
    return this._istioMetaDnsAutoAllocate;
  }

  // istio_meta_dns_capture - computed: false, optional: true, required: false
  private _istioMetaDnsCapture?: boolean | cdktf.IResolvable; 
  public get istioMetaDnsCapture() {
    return this.getBooleanAttribute('istio_meta_dns_capture');
  }
  public set istioMetaDnsCapture(value: boolean | cdktf.IResolvable) {
    this._istioMetaDnsCapture = value;
  }
  public resetIstioMetaDnsCapture() {
    this._istioMetaDnsCapture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get istioMetaDnsCaptureInput() {
    return this._istioMetaDnsCapture;
  }
}
export interface TcmMeshConfigIstioTracingApm {
  /**
  * Whether enable APM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tcm_mesh#enable TcmMesh#enable}
  */
  readonly enable: boolean | cdktf.IResolvable;
  /**
  * Instance id of the APM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tcm_mesh#instance_id TcmMesh#instance_id}
  */
  readonly instanceId?: string;
  /**
  * Region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tcm_mesh#region TcmMesh#region}
  */
  readonly region?: string;
}

export function tcmMeshConfigIstioTracingApmToTerraform(struct?: TcmMeshConfigIstioTracingApmOutputReference | TcmMeshConfigIstioTracingApm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    instance_id: cdktf.stringToTerraform(struct!.instanceId),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function tcmMeshConfigIstioTracingApmToHclTerraform(struct?: TcmMeshConfigIstioTracingApmOutputReference | TcmMeshConfigIstioTracingApm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    instance_id: {
      value: cdktf.stringToHclTerraform(struct!.instanceId),
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

export class TcmMeshConfigIstioTracingApmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TcmMeshConfigIstioTracingApm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TcmMeshConfigIstioTracingApm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enable = undefined;
      this._instanceId = undefined;
      this._region = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enable = value.enable;
      this._instanceId = value.instanceId;
      this._region = value.region;
    }
  }

  // enable - computed: false, optional: false, required: true
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}
export interface TcmMeshConfigIstioTracingZipkin {
  /**
  * Zipkin address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tcm_mesh#address TcmMesh#address}
  */
  readonly address: string;
}

export function tcmMeshConfigIstioTracingZipkinToTerraform(struct?: TcmMeshConfigIstioTracingZipkinOutputReference | TcmMeshConfigIstioTracingZipkin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
  }
}


export function tcmMeshConfigIstioTracingZipkinToHclTerraform(struct?: TcmMeshConfigIstioTracingZipkinOutputReference | TcmMeshConfigIstioTracingZipkin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TcmMeshConfigIstioTracingZipkinOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TcmMeshConfigIstioTracingZipkin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TcmMeshConfigIstioTracingZipkin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._address = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._address = value.address;
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }
}
export interface TcmMeshConfigIstioTracing {
  /**
  * Whether enable tracing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tcm_mesh#enable TcmMesh#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Tracing sampling, 0.0-1.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tcm_mesh#sampling TcmMesh#sampling}
  */
  readonly sampling?: number;
  /**
  * apm block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tcm_mesh#apm TcmMesh#apm}
  */
  readonly apm?: TcmMeshConfigIstioTracingApm;
  /**
  * zipkin block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tcm_mesh#zipkin TcmMesh#zipkin}
  */
  readonly zipkin?: TcmMeshConfigIstioTracingZipkin;
}

export function tcmMeshConfigIstioTracingToTerraform(struct?: TcmMeshConfigIstioTracingOutputReference | TcmMeshConfigIstioTracing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    sampling: cdktf.numberToTerraform(struct!.sampling),
    apm: tcmMeshConfigIstioTracingApmToTerraform(struct!.apm),
    zipkin: tcmMeshConfigIstioTracingZipkinToTerraform(struct!.zipkin),
  }
}


export function tcmMeshConfigIstioTracingToHclTerraform(struct?: TcmMeshConfigIstioTracingOutputReference | TcmMeshConfigIstioTracing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sampling: {
      value: cdktf.numberToHclTerraform(struct!.sampling),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    apm: {
      value: tcmMeshConfigIstioTracingApmToHclTerraform(struct!.apm),
      isBlock: true,
      type: "list",
      storageClassType: "TcmMeshConfigIstioTracingApmList",
    },
    zipkin: {
      value: tcmMeshConfigIstioTracingZipkinToHclTerraform(struct!.zipkin),
      isBlock: true,
      type: "list",
      storageClassType: "TcmMeshConfigIstioTracingZipkinList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TcmMeshConfigIstioTracingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TcmMeshConfigIstioTracing | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._sampling !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampling = this._sampling;
    }
    if (this._apm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apm = this._apm?.internalValue;
    }
    if (this._zipkin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zipkin = this._zipkin?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TcmMeshConfigIstioTracing | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enable = undefined;
      this._sampling = undefined;
      this._apm.internalValue = undefined;
      this._zipkin.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enable = value.enable;
      this._sampling = value.sampling;
      this._apm.internalValue = value.apm;
      this._zipkin.internalValue = value.zipkin;
    }
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

  // sampling - computed: true, optional: true, required: false
  private _sampling?: number; 
  public get sampling() {
    return this.getNumberAttribute('sampling');
  }
  public set sampling(value: number) {
    this._sampling = value;
  }
  public resetSampling() {
    this._sampling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingInput() {
    return this._sampling;
  }

  // apm - computed: false, optional: true, required: false
  private _apm = new TcmMeshConfigIstioTracingApmOutputReference(this, "apm");
  public get apm() {
    return this._apm;
  }
  public putApm(value: TcmMeshConfigIstioTracingApm) {
    this._apm.internalValue = value;
  }
  public resetApm() {
    this._apm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apmInput() {
    return this._apm.internalValue;
  }

  // zipkin - computed: false, optional: true, required: false
  private _zipkin = new TcmMeshConfigIstioTracingZipkinOutputReference(this, "zipkin");
  public get zipkin() {
    return this._zipkin;
  }
  public putZipkin(value: TcmMeshConfigIstioTracingZipkin) {
    this._zipkin.internalValue = value;
  }
  public resetZipkin() {
    this._zipkin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zipkinInput() {
    return this._zipkin.internalValue;
  }
}
export interface TcmMeshConfigIstio {
  /**
  * Disable http retry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tcm_mesh#disable_http_retry TcmMesh#disable_http_retry}
  */
  readonly disableHttpRetry?: boolean | cdktf.IResolvable;
  /**
  * Disable policy checks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tcm_mesh#disable_policy_checks TcmMesh#disable_policy_checks}
  */
  readonly disablePolicyChecks?: boolean | cdktf.IResolvable;
  /**
  * Enable HTTP/1.0 support.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tcm_mesh#enable_pilot_http TcmMesh#enable_pilot_http}
  */
  readonly enablePilotHttp?: boolean | cdktf.IResolvable;
  /**
  * Outbound traffic policy, REGISTRY_ONLY or ALLOW_ANY, see https://istio.io/latest/docs/reference/config/istio.mesh.v1alpha1/#MeshConfig-OutboundTrafficPolicy-Mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tcm_mesh#outbound_traffic_policy TcmMesh#outbound_traffic_policy}
  */
  readonly outboundTrafficPolicy: string;
  /**
  * smart_dns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tcm_mesh#smart_dns TcmMesh#smart_dns}
  */
  readonly smartDns?: TcmMeshConfigIstioSmartDns;
  /**
  * tracing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tcm_mesh#tracing TcmMesh#tracing}
  */
  readonly tracing?: TcmMeshConfigIstioTracing;
}

export function tcmMeshConfigIstioToTerraform(struct?: TcmMeshConfigIstioOutputReference | TcmMeshConfigIstio): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_http_retry: cdktf.booleanToTerraform(struct!.disableHttpRetry),
    disable_policy_checks: cdktf.booleanToTerraform(struct!.disablePolicyChecks),
    enable_pilot_http: cdktf.booleanToTerraform(struct!.enablePilotHttp),
    outbound_traffic_policy: cdktf.stringToTerraform(struct!.outboundTrafficPolicy),
    smart_dns: tcmMeshConfigIstioSmartDnsToTerraform(struct!.smartDns),
    tracing: tcmMeshConfigIstioTracingToTerraform(struct!.tracing),
  }
}


export function tcmMeshConfigIstioToHclTerraform(struct?: TcmMeshConfigIstioOutputReference | TcmMeshConfigIstio): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_http_retry: {
      value: cdktf.booleanToHclTerraform(struct!.disableHttpRetry),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_policy_checks: {
      value: cdktf.booleanToHclTerraform(struct!.disablePolicyChecks),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_pilot_http: {
      value: cdktf.booleanToHclTerraform(struct!.enablePilotHttp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    outbound_traffic_policy: {
      value: cdktf.stringToHclTerraform(struct!.outboundTrafficPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    smart_dns: {
      value: tcmMeshConfigIstioSmartDnsToHclTerraform(struct!.smartDns),
      isBlock: true,
      type: "list",
      storageClassType: "TcmMeshConfigIstioSmartDnsList",
    },
    tracing: {
      value: tcmMeshConfigIstioTracingToHclTerraform(struct!.tracing),
      isBlock: true,
      type: "list",
      storageClassType: "TcmMeshConfigIstioTracingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TcmMeshConfigIstioOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TcmMeshConfigIstio | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableHttpRetry !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableHttpRetry = this._disableHttpRetry;
    }
    if (this._disablePolicyChecks !== undefined) {
      hasAnyValues = true;
      internalValueResult.disablePolicyChecks = this._disablePolicyChecks;
    }
    if (this._enablePilotHttp !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePilotHttp = this._enablePilotHttp;
    }
    if (this._outboundTrafficPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundTrafficPolicy = this._outboundTrafficPolicy;
    }
    if (this._smartDns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.smartDns = this._smartDns?.internalValue;
    }
    if (this._tracing?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tracing = this._tracing?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TcmMeshConfigIstio | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableHttpRetry = undefined;
      this._disablePolicyChecks = undefined;
      this._enablePilotHttp = undefined;
      this._outboundTrafficPolicy = undefined;
      this._smartDns.internalValue = undefined;
      this._tracing.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableHttpRetry = value.disableHttpRetry;
      this._disablePolicyChecks = value.disablePolicyChecks;
      this._enablePilotHttp = value.enablePilotHttp;
      this._outboundTrafficPolicy = value.outboundTrafficPolicy;
      this._smartDns.internalValue = value.smartDns;
      this._tracing.internalValue = value.tracing;
    }
  }

  // disable_http_retry - computed: false, optional: true, required: false
  private _disableHttpRetry?: boolean | cdktf.IResolvable; 
  public get disableHttpRetry() {
    return this.getBooleanAttribute('disable_http_retry');
  }
  public set disableHttpRetry(value: boolean | cdktf.IResolvable) {
    this._disableHttpRetry = value;
  }
  public resetDisableHttpRetry() {
    this._disableHttpRetry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableHttpRetryInput() {
    return this._disableHttpRetry;
  }

  // disable_policy_checks - computed: false, optional: true, required: false
  private _disablePolicyChecks?: boolean | cdktf.IResolvable; 
  public get disablePolicyChecks() {
    return this.getBooleanAttribute('disable_policy_checks');
  }
  public set disablePolicyChecks(value: boolean | cdktf.IResolvable) {
    this._disablePolicyChecks = value;
  }
  public resetDisablePolicyChecks() {
    this._disablePolicyChecks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disablePolicyChecksInput() {
    return this._disablePolicyChecks;
  }

  // enable_pilot_http - computed: false, optional: true, required: false
  private _enablePilotHttp?: boolean | cdktf.IResolvable; 
  public get enablePilotHttp() {
    return this.getBooleanAttribute('enable_pilot_http');
  }
  public set enablePilotHttp(value: boolean | cdktf.IResolvable) {
    this._enablePilotHttp = value;
  }
  public resetEnablePilotHttp() {
    this._enablePilotHttp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePilotHttpInput() {
    return this._enablePilotHttp;
  }

  // outbound_traffic_policy - computed: false, optional: false, required: true
  private _outboundTrafficPolicy?: string; 
  public get outboundTrafficPolicy() {
    return this.getStringAttribute('outbound_traffic_policy');
  }
  public set outboundTrafficPolicy(value: string) {
    this._outboundTrafficPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundTrafficPolicyInput() {
    return this._outboundTrafficPolicy;
  }

  // smart_dns - computed: false, optional: true, required: false
  private _smartDns = new TcmMeshConfigIstioSmartDnsOutputReference(this, "smart_dns");
  public get smartDns() {
    return this._smartDns;
  }
  public putSmartDns(value: TcmMeshConfigIstioSmartDns) {
    this._smartDns.internalValue = value;
  }
  public resetSmartDns() {
    this._smartDns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smartDnsInput() {
    return this._smartDns.internalValue;
  }

  // tracing - computed: false, optional: true, required: false
  private _tracing = new TcmMeshConfigIstioTracingOutputReference(this, "tracing");
  public get tracing() {
    return this._tracing;
  }
  public putTracing(value: TcmMeshConfigIstioTracing) {
    this._tracing.internalValue = value;
  }
  public resetTracing() {
    this._tracing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tracingInput() {
    return this._tracing.internalValue;
  }
}
export interface TcmMeshConfigPrometheusCustomProm {
  /**
  * Authentication type of the prometheus.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tcm_mesh#auth_type TcmMesh#auth_type}
  */
  readonly authType: string;
  /**
  * Whether it is public address, default false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tcm_mesh#is_public_addr TcmMesh#is_public_addr}
  */
  readonly isPublicAddr?: boolean | cdktf.IResolvable;
  /**
  * Password of the prometheus, used in basic authentication type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tcm_mesh#password TcmMesh#password}
  */
  readonly password?: string;
  /**
  * Url of the prometheus.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tcm_mesh#url TcmMesh#url}
  */
  readonly url: string;
  /**
  * Username of the prometheus, used in basic authentication type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tcm_mesh#username TcmMesh#username}
  */
  readonly username?: string;
  /**
  * Vpc id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tcm_mesh#vpc_id TcmMesh#vpc_id}
  */
  readonly vpcId?: string;
}

export function tcmMeshConfigPrometheusCustomPromToTerraform(struct?: TcmMeshConfigPrometheusCustomPromOutputReference | TcmMeshConfigPrometheusCustomProm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_type: cdktf.stringToTerraform(struct!.authType),
    is_public_addr: cdktf.booleanToTerraform(struct!.isPublicAddr),
    password: cdktf.stringToTerraform(struct!.password),
    url: cdktf.stringToTerraform(struct!.url),
    username: cdktf.stringToTerraform(struct!.username),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
  }
}


export function tcmMeshConfigPrometheusCustomPromToHclTerraform(struct?: TcmMeshConfigPrometheusCustomPromOutputReference | TcmMeshConfigPrometheusCustomProm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_type: {
      value: cdktf.stringToHclTerraform(struct!.authType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_public_addr: {
      value: cdktf.booleanToHclTerraform(struct!.isPublicAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
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
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TcmMeshConfigPrometheusCustomPromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TcmMeshConfigPrometheusCustomProm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authType = this._authType;
    }
    if (this._isPublicAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.isPublicAddr = this._isPublicAddr;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TcmMeshConfigPrometheusCustomProm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authType = undefined;
      this._isPublicAddr = undefined;
      this._password = undefined;
      this._url = undefined;
      this._username = undefined;
      this._vpcId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authType = value.authType;
      this._isPublicAddr = value.isPublicAddr;
      this._password = value.password;
      this._url = value.url;
      this._username = value.username;
      this._vpcId = value.vpcId;
    }
  }

  // auth_type - computed: false, optional: false, required: true
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // is_public_addr - computed: true, optional: true, required: false
  private _isPublicAddr?: boolean | cdktf.IResolvable; 
  public get isPublicAddr() {
    return this.getBooleanAttribute('is_public_addr');
  }
  public set isPublicAddr(value: boolean | cdktf.IResolvable) {
    this._isPublicAddr = value;
  }
  public resetIsPublicAddr() {
    this._isPublicAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPublicAddrInput() {
    return this._isPublicAddr;
  }

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
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

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // vpc_id - computed: true, optional: true, required: false
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }
}
export interface TcmMeshConfigPrometheus {
  /**
  * Instance id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tcm_mesh#instance_id TcmMesh#instance_id}
  */
  readonly instanceId?: string;
  /**
  * Region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tcm_mesh#region TcmMesh#region}
  */
  readonly region?: string;
  /**
  * Subnet id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tcm_mesh#subnet_id TcmMesh#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Vpc id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tcm_mesh#vpc_id TcmMesh#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * custom_prom block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tcm_mesh#custom_prom TcmMesh#custom_prom}
  */
  readonly customProm?: TcmMeshConfigPrometheusCustomProm;
}

export function tcmMeshConfigPrometheusToTerraform(struct?: TcmMeshConfigPrometheusOutputReference | TcmMeshConfigPrometheus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_id: cdktf.stringToTerraform(struct!.instanceId),
    region: cdktf.stringToTerraform(struct!.region),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
    custom_prom: tcmMeshConfigPrometheusCustomPromToTerraform(struct!.customProm),
  }
}


export function tcmMeshConfigPrometheusToHclTerraform(struct?: TcmMeshConfigPrometheusOutputReference | TcmMeshConfigPrometheus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_id: {
      value: cdktf.stringToHclTerraform(struct!.instanceId),
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
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_prom: {
      value: tcmMeshConfigPrometheusCustomPromToHclTerraform(struct!.customProm),
      isBlock: true,
      type: "list",
      storageClassType: "TcmMeshConfigPrometheusCustomPromList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TcmMeshConfigPrometheusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TcmMeshConfigPrometheus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    if (this._customProm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customProm = this._customProm?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TcmMeshConfigPrometheus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instanceId = undefined;
      this._region = undefined;
      this._subnetId = undefined;
      this._vpcId = undefined;
      this._customProm.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instanceId = value.instanceId;
      this._region = value.region;
      this._subnetId = value.subnetId;
      this._vpcId = value.vpcId;
      this._customProm.internalValue = value.customProm;
    }
  }

  // instance_id - computed: true, optional: true, required: false
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // subnet_id - computed: true, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // vpc_id - computed: true, optional: true, required: false
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // custom_prom - computed: false, optional: true, required: false
  private _customProm = new TcmMeshConfigPrometheusCustomPromOutputReference(this, "custom_prom");
  public get customProm() {
    return this._customProm;
  }
  public putCustomProm(value: TcmMeshConfigPrometheusCustomProm) {
    this._customProm.internalValue = value;
  }
  public resetCustomProm() {
    this._customProm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPromInput() {
    return this._customProm.internalValue;
  }
}
export interface TcmMeshConfigSidecarResourcesLimits {
  /**
  * Resource type name, `cpu/memory`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tcm_mesh#name TcmMesh#name}
  */
  readonly name?: string;
  /**
  * Resource quantity, example: cpu-`100m`, memory-`1Gi`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tcm_mesh#quantity TcmMesh#quantity}
  */
  readonly quantity?: string;
}

export function tcmMeshConfigSidecarResourcesLimitsToTerraform(struct?: TcmMeshConfigSidecarResourcesLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    quantity: cdktf.stringToTerraform(struct!.quantity),
  }
}


export function tcmMeshConfigSidecarResourcesLimitsToHclTerraform(struct?: TcmMeshConfigSidecarResourcesLimits | cdktf.IResolvable): any {
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
    quantity: {
      value: cdktf.stringToHclTerraform(struct!.quantity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TcmMeshConfigSidecarResourcesLimitsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TcmMeshConfigSidecarResourcesLimits | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._quantity !== undefined) {
      hasAnyValues = true;
      internalValueResult.quantity = this._quantity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TcmMeshConfigSidecarResourcesLimits | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._quantity = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._quantity = value.quantity;
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

  // quantity - computed: false, optional: true, required: false
  private _quantity?: string; 
  public get quantity() {
    return this.getStringAttribute('quantity');
  }
  public set quantity(value: string) {
    this._quantity = value;
  }
  public resetQuantity() {
    this._quantity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quantityInput() {
    return this._quantity;
  }
}

export class TcmMeshConfigSidecarResourcesLimitsList extends cdktf.ComplexList {
  public internalValue? : TcmMeshConfigSidecarResourcesLimits[] | cdktf.IResolvable

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
  public get(index: number): TcmMeshConfigSidecarResourcesLimitsOutputReference {
    return new TcmMeshConfigSidecarResourcesLimitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TcmMeshConfigSidecarResourcesRequests {
  /**
  * Resource type name, `cpu/memory`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tcm_mesh#name TcmMesh#name}
  */
  readonly name?: string;
  /**
  * Resource quantity, example: cpu-`100m`, memory-`1Gi`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tcm_mesh#quantity TcmMesh#quantity}
  */
  readonly quantity?: string;
}

export function tcmMeshConfigSidecarResourcesRequestsToTerraform(struct?: TcmMeshConfigSidecarResourcesRequests | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    quantity: cdktf.stringToTerraform(struct!.quantity),
  }
}


export function tcmMeshConfigSidecarResourcesRequestsToHclTerraform(struct?: TcmMeshConfigSidecarResourcesRequests | cdktf.IResolvable): any {
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
    quantity: {
      value: cdktf.stringToHclTerraform(struct!.quantity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TcmMeshConfigSidecarResourcesRequestsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TcmMeshConfigSidecarResourcesRequests | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._quantity !== undefined) {
      hasAnyValues = true;
      internalValueResult.quantity = this._quantity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TcmMeshConfigSidecarResourcesRequests | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._quantity = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._quantity = value.quantity;
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

  // quantity - computed: false, optional: true, required: false
  private _quantity?: string; 
  public get quantity() {
    return this.getStringAttribute('quantity');
  }
  public set quantity(value: string) {
    this._quantity = value;
  }
  public resetQuantity() {
    this._quantity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quantityInput() {
    return this._quantity;
  }
}

export class TcmMeshConfigSidecarResourcesRequestsList extends cdktf.ComplexList {
  public internalValue? : TcmMeshConfigSidecarResourcesRequests[] | cdktf.IResolvable

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
  public get(index: number): TcmMeshConfigSidecarResourcesRequestsOutputReference {
    return new TcmMeshConfigSidecarResourcesRequestsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TcmMeshConfigSidecarResources {
  /**
  * limits block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tcm_mesh#limits TcmMesh#limits}
  */
  readonly limits?: TcmMeshConfigSidecarResourcesLimits[] | cdktf.IResolvable;
  /**
  * requests block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tcm_mesh#requests TcmMesh#requests}
  */
  readonly requests?: TcmMeshConfigSidecarResourcesRequests[] | cdktf.IResolvable;
}

export function tcmMeshConfigSidecarResourcesToTerraform(struct?: TcmMeshConfigSidecarResourcesOutputReference | TcmMeshConfigSidecarResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: cdktf.listMapper(tcmMeshConfigSidecarResourcesLimitsToTerraform, true)(struct!.limits),
    requests: cdktf.listMapper(tcmMeshConfigSidecarResourcesRequestsToTerraform, true)(struct!.requests),
  }
}


export function tcmMeshConfigSidecarResourcesToHclTerraform(struct?: TcmMeshConfigSidecarResourcesOutputReference | TcmMeshConfigSidecarResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limits: {
      value: cdktf.listMapperHcl(tcmMeshConfigSidecarResourcesLimitsToHclTerraform, true)(struct!.limits),
      isBlock: true,
      type: "set",
      storageClassType: "TcmMeshConfigSidecarResourcesLimitsList",
    },
    requests: {
      value: cdktf.listMapperHcl(tcmMeshConfigSidecarResourcesRequestsToHclTerraform, true)(struct!.requests),
      isBlock: true,
      type: "set",
      storageClassType: "TcmMeshConfigSidecarResourcesRequestsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TcmMeshConfigSidecarResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TcmMeshConfigSidecarResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limits?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits?.internalValue;
    }
    if (this._requests?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TcmMeshConfigSidecarResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._limits.internalValue = undefined;
      this._requests.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._limits.internalValue = value.limits;
      this._requests.internalValue = value.requests;
    }
  }

  // limits - computed: false, optional: true, required: false
  private _limits = new TcmMeshConfigSidecarResourcesLimitsList(this, "limits", true);
  public get limits() {
    return this._limits;
  }
  public putLimits(value: TcmMeshConfigSidecarResourcesLimits[] | cdktf.IResolvable) {
    this._limits.internalValue = value;
  }
  public resetLimits() {
    this._limits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits.internalValue;
  }

  // requests - computed: false, optional: true, required: false
  private _requests = new TcmMeshConfigSidecarResourcesRequestsList(this, "requests", true);
  public get requests() {
    return this._requests;
  }
  public putRequests(value: TcmMeshConfigSidecarResourcesRequests[] | cdktf.IResolvable) {
    this._requests.internalValue = value;
  }
  public resetRequests() {
    this._requests.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests.internalValue;
  }
}
export interface TcmMeshConfigTracingApm {
  /**
  * Whether enable APM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tcm_mesh#enable TcmMesh#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Instance id of the APM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tcm_mesh#instance_id TcmMesh#instance_id}
  */
  readonly instanceId?: string;
  /**
  * Region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tcm_mesh#region TcmMesh#region}
  */
  readonly region?: string;
}

export function tcmMeshConfigTracingApmToTerraform(struct?: TcmMeshConfigTracingApmOutputReference | TcmMeshConfigTracingApm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    instance_id: cdktf.stringToTerraform(struct!.instanceId),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function tcmMeshConfigTracingApmToHclTerraform(struct?: TcmMeshConfigTracingApmOutputReference | TcmMeshConfigTracingApm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    instance_id: {
      value: cdktf.stringToHclTerraform(struct!.instanceId),
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

export class TcmMeshConfigTracingApmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TcmMeshConfigTracingApm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TcmMeshConfigTracingApm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enable = undefined;
      this._instanceId = undefined;
      this._region = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enable = value.enable;
      this._instanceId = value.instanceId;
      this._region = value.region;
    }
  }

  // enable - computed: true, optional: true, required: false
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

  // instance_id - computed: true, optional: true, required: false
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}
export interface TcmMeshConfigTracingZipkin {
  /**
  * Zipkin address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tcm_mesh#address TcmMesh#address}
  */
  readonly address: string;
}

export function tcmMeshConfigTracingZipkinToTerraform(struct?: TcmMeshConfigTracingZipkinOutputReference | TcmMeshConfigTracingZipkin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
  }
}


export function tcmMeshConfigTracingZipkinToHclTerraform(struct?: TcmMeshConfigTracingZipkinOutputReference | TcmMeshConfigTracingZipkin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TcmMeshConfigTracingZipkinOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TcmMeshConfigTracingZipkin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TcmMeshConfigTracingZipkin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._address = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._address = value.address;
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }
}
export interface TcmMeshConfigTracing {
  /**
  * Whether enable tracing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tcm_mesh#enable TcmMesh#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Tracing sampling, 0.0-1.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tcm_mesh#sampling TcmMesh#sampling}
  */
  readonly sampling?: number;
  /**
  * apm block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tcm_mesh#apm TcmMesh#apm}
  */
  readonly apm?: TcmMeshConfigTracingApm;
  /**
  * zipkin block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tcm_mesh#zipkin TcmMesh#zipkin}
  */
  readonly zipkin?: TcmMeshConfigTracingZipkin;
}

export function tcmMeshConfigTracingToTerraform(struct?: TcmMeshConfigTracingOutputReference | TcmMeshConfigTracing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    sampling: cdktf.numberToTerraform(struct!.sampling),
    apm: tcmMeshConfigTracingApmToTerraform(struct!.apm),
    zipkin: tcmMeshConfigTracingZipkinToTerraform(struct!.zipkin),
  }
}


export function tcmMeshConfigTracingToHclTerraform(struct?: TcmMeshConfigTracingOutputReference | TcmMeshConfigTracing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sampling: {
      value: cdktf.numberToHclTerraform(struct!.sampling),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    apm: {
      value: tcmMeshConfigTracingApmToHclTerraform(struct!.apm),
      isBlock: true,
      type: "list",
      storageClassType: "TcmMeshConfigTracingApmList",
    },
    zipkin: {
      value: tcmMeshConfigTracingZipkinToHclTerraform(struct!.zipkin),
      isBlock: true,
      type: "list",
      storageClassType: "TcmMeshConfigTracingZipkinList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TcmMeshConfigTracingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TcmMeshConfigTracing | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._sampling !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampling = this._sampling;
    }
    if (this._apm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apm = this._apm?.internalValue;
    }
    if (this._zipkin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zipkin = this._zipkin?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TcmMeshConfigTracing | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enable = undefined;
      this._sampling = undefined;
      this._apm.internalValue = undefined;
      this._zipkin.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enable = value.enable;
      this._sampling = value.sampling;
      this._apm.internalValue = value.apm;
      this._zipkin.internalValue = value.zipkin;
    }
  }

  // enable - computed: true, optional: true, required: false
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

  // sampling - computed: true, optional: true, required: false
  private _sampling?: number; 
  public get sampling() {
    return this.getNumberAttribute('sampling');
  }
  public set sampling(value: number) {
    this._sampling = value;
  }
  public resetSampling() {
    this._sampling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingInput() {
    return this._sampling;
  }

  // apm - computed: false, optional: true, required: false
  private _apm = new TcmMeshConfigTracingApmOutputReference(this, "apm");
  public get apm() {
    return this._apm;
  }
  public putApm(value: TcmMeshConfigTracingApm) {
    this._apm.internalValue = value;
  }
  public resetApm() {
    this._apm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apmInput() {
    return this._apm.internalValue;
  }

  // zipkin - computed: false, optional: true, required: false
  private _zipkin = new TcmMeshConfigTracingZipkinOutputReference(this, "zipkin");
  public get zipkin() {
    return this._zipkin;
  }
  public putZipkin(value: TcmMeshConfigTracingZipkin) {
    this._zipkin.internalValue = value;
  }
  public resetZipkin() {
    this._zipkin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zipkinInput() {
    return this._zipkin.internalValue;
  }
}
export interface TcmMeshConfigA {
  /**
  * inject block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tcm_mesh#inject TcmMesh#inject}
  */
  readonly inject?: TcmMeshConfigInject;
  /**
  * istio block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tcm_mesh#istio TcmMesh#istio}
  */
  readonly istio?: TcmMeshConfigIstio;
  /**
  * prometheus block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tcm_mesh#prometheus TcmMesh#prometheus}
  */
  readonly prometheus?: TcmMeshConfigPrometheus;
  /**
  * sidecar_resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tcm_mesh#sidecar_resources TcmMesh#sidecar_resources}
  */
  readonly sidecarResources?: TcmMeshConfigSidecarResources;
  /**
  * tracing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tcm_mesh#tracing TcmMesh#tracing}
  */
  readonly tracing?: TcmMeshConfigTracing;
}

export function tcmMeshConfigAToTerraform(struct?: TcmMeshConfigAOutputReference | TcmMeshConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inject: tcmMeshConfigInjectToTerraform(struct!.inject),
    istio: tcmMeshConfigIstioToTerraform(struct!.istio),
    prometheus: tcmMeshConfigPrometheusToTerraform(struct!.prometheus),
    sidecar_resources: tcmMeshConfigSidecarResourcesToTerraform(struct!.sidecarResources),
    tracing: tcmMeshConfigTracingToTerraform(struct!.tracing),
  }
}


export function tcmMeshConfigAToHclTerraform(struct?: TcmMeshConfigAOutputReference | TcmMeshConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inject: {
      value: tcmMeshConfigInjectToHclTerraform(struct!.inject),
      isBlock: true,
      type: "list",
      storageClassType: "TcmMeshConfigInjectList",
    },
    istio: {
      value: tcmMeshConfigIstioToHclTerraform(struct!.istio),
      isBlock: true,
      type: "list",
      storageClassType: "TcmMeshConfigIstioList",
    },
    prometheus: {
      value: tcmMeshConfigPrometheusToHclTerraform(struct!.prometheus),
      isBlock: true,
      type: "list",
      storageClassType: "TcmMeshConfigPrometheusList",
    },
    sidecar_resources: {
      value: tcmMeshConfigSidecarResourcesToHclTerraform(struct!.sidecarResources),
      isBlock: true,
      type: "list",
      storageClassType: "TcmMeshConfigSidecarResourcesList",
    },
    tracing: {
      value: tcmMeshConfigTracingToHclTerraform(struct!.tracing),
      isBlock: true,
      type: "list",
      storageClassType: "TcmMeshConfigTracingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TcmMeshConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TcmMeshConfigA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inject?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inject = this._inject?.internalValue;
    }
    if (this._istio?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.istio = this._istio?.internalValue;
    }
    if (this._prometheus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prometheus = this._prometheus?.internalValue;
    }
    if (this._sidecarResources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sidecarResources = this._sidecarResources?.internalValue;
    }
    if (this._tracing?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tracing = this._tracing?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TcmMeshConfigA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inject.internalValue = undefined;
      this._istio.internalValue = undefined;
      this._prometheus.internalValue = undefined;
      this._sidecarResources.internalValue = undefined;
      this._tracing.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inject.internalValue = value.inject;
      this._istio.internalValue = value.istio;
      this._prometheus.internalValue = value.prometheus;
      this._sidecarResources.internalValue = value.sidecarResources;
      this._tracing.internalValue = value.tracing;
    }
  }

  // inject - computed: false, optional: true, required: false
  private _inject = new TcmMeshConfigInjectOutputReference(this, "inject");
  public get inject() {
    return this._inject;
  }
  public putInject(value: TcmMeshConfigInject) {
    this._inject.internalValue = value;
  }
  public resetInject() {
    this._inject.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get injectInput() {
    return this._inject.internalValue;
  }

  // istio - computed: false, optional: true, required: false
  private _istio = new TcmMeshConfigIstioOutputReference(this, "istio");
  public get istio() {
    return this._istio;
  }
  public putIstio(value: TcmMeshConfigIstio) {
    this._istio.internalValue = value;
  }
  public resetIstio() {
    this._istio.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get istioInput() {
    return this._istio.internalValue;
  }

  // prometheus - computed: false, optional: true, required: false
  private _prometheus = new TcmMeshConfigPrometheusOutputReference(this, "prometheus");
  public get prometheus() {
    return this._prometheus;
  }
  public putPrometheus(value: TcmMeshConfigPrometheus) {
    this._prometheus.internalValue = value;
  }
  public resetPrometheus() {
    this._prometheus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prometheusInput() {
    return this._prometheus.internalValue;
  }

  // sidecar_resources - computed: false, optional: true, required: false
  private _sidecarResources = new TcmMeshConfigSidecarResourcesOutputReference(this, "sidecar_resources");
  public get sidecarResources() {
    return this._sidecarResources;
  }
  public putSidecarResources(value: TcmMeshConfigSidecarResources) {
    this._sidecarResources.internalValue = value;
  }
  public resetSidecarResources() {
    this._sidecarResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sidecarResourcesInput() {
    return this._sidecarResources.internalValue;
  }

  // tracing - computed: false, optional: true, required: false
  private _tracing = new TcmMeshConfigTracingOutputReference(this, "tracing");
  public get tracing() {
    return this._tracing;
  }
  public putTracing(value: TcmMeshConfigTracing) {
    this._tracing.internalValue = value;
  }
  public resetTracing() {
    this._tracing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tracingInput() {
    return this._tracing.internalValue;
  }
}
export interface TcmMeshTagListStruct {
  /**
  * Tag key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tcm_mesh#key TcmMesh#key}
  */
  readonly key: string;
  /**
  * Passthrough to other related product.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tcm_mesh#passthrough TcmMesh#passthrough}
  */
  readonly passthrough?: boolean | cdktf.IResolvable;
  /**
  * Tag value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tcm_mesh#value TcmMesh#value}
  */
  readonly value: string;
}

export function tcmMeshTagListStructToTerraform(struct?: TcmMeshTagListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    passthrough: cdktf.booleanToTerraform(struct!.passthrough),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function tcmMeshTagListStructToHclTerraform(struct?: TcmMeshTagListStruct | cdktf.IResolvable): any {
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
    passthrough: {
      value: cdktf.booleanToHclTerraform(struct!.passthrough),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class TcmMeshTagListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TcmMeshTagListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._passthrough !== undefined) {
      hasAnyValues = true;
      internalValueResult.passthrough = this._passthrough;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TcmMeshTagListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._passthrough = undefined;
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
      this._passthrough = value.passthrough;
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

  // passthrough - computed: false, optional: true, required: false
  private _passthrough?: boolean | cdktf.IResolvable; 
  public get passthrough() {
    return this.getBooleanAttribute('passthrough');
  }
  public set passthrough(value: boolean | cdktf.IResolvable) {
    this._passthrough = value;
  }
  public resetPassthrough() {
    this._passthrough = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passthroughInput() {
    return this._passthrough;
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

export class TcmMeshTagListStructList extends cdktf.ComplexList {
  public internalValue? : TcmMeshTagListStruct[] | cdktf.IResolvable

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
  public get(index: number): TcmMeshTagListStructOutputReference {
    return new TcmMeshTagListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tcm_mesh tencentcloud_tcm_mesh}
*/
export class TcmMesh extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_tcm_mesh";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TcmMesh resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TcmMesh to import
  * @param importFromId The id of the existing TcmMesh that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tcm_mesh#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TcmMesh to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_tcm_mesh", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tcm_mesh tencentcloud_tcm_mesh} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TcmMeshConfig
  */
  public constructor(scope: Construct, id: string, config: TcmMeshConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_tcm_mesh',
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
    this._displayName = config.displayName;
    this._id = config.id;
    this._meshId = config.meshId;
    this._meshVersion = config.meshVersion;
    this._type = config.type;
    this._config.internalValue = config.config;
    this._tagList.internalValue = config.tagList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // mesh_id - computed: true, optional: true, required: false
  private _meshId?: string; 
  public get meshId() {
    return this.getStringAttribute('mesh_id');
  }
  public set meshId(value: string) {
    this._meshId = value;
  }
  public resetMeshId() {
    this._meshId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get meshIdInput() {
    return this._meshId;
  }

  // mesh_version - computed: false, optional: false, required: true
  private _meshVersion?: string; 
  public get meshVersion() {
    return this.getStringAttribute('mesh_version');
  }
  public set meshVersion(value: string) {
    this._meshVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get meshVersionInput() {
    return this._meshVersion;
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

  // config - computed: false, optional: false, required: true
  private _config = new TcmMeshConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: TcmMeshConfigA) {
    this._config.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // tag_list - computed: false, optional: true, required: false
  private _tagList = new TcmMeshTagListStructList(this, "tag_list", false);
  public get tagList() {
    return this._tagList;
  }
  public putTagList(value: TcmMeshTagListStruct[] | cdktf.IResolvable) {
    this._tagList.internalValue = value;
  }
  public resetTagList() {
    this._tagList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagListInput() {
    return this._tagList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      mesh_id: cdktf.stringToTerraform(this._meshId),
      mesh_version: cdktf.stringToTerraform(this._meshVersion),
      type: cdktf.stringToTerraform(this._type),
      config: tcmMeshConfigAToTerraform(this._config.internalValue),
      tag_list: cdktf.listMapper(tcmMeshTagListStructToTerraform, true)(this._tagList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      mesh_id: {
        value: cdktf.stringToHclTerraform(this._meshId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mesh_version: {
        value: cdktf.stringToHclTerraform(this._meshVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config: {
        value: tcmMeshConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TcmMeshConfigAList",
      },
      tag_list: {
        value: cdktf.listMapperHcl(tcmMeshTagListStructToHclTerraform, true)(this._tagList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TcmMeshTagListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
