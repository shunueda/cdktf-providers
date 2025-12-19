// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/overlay_tunnel_vtep_remote_ipv6_address
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OverlayTunnelVtepRemoteIpv6AddressConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the class-list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/overlay_tunnel_vtep_remote_ipv6_address#class_list OverlayTunnelVtepRemoteIpv6Address#class_list}
  */
  readonly classList?: string;
  /**
  * 'vxlan': Tunnel Encapsulation Type is VXLAN;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/overlay_tunnel_vtep_remote_ipv6_address#encap OverlayTunnelVtepRemoteIpv6Address#encap}
  */
  readonly encap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/overlay_tunnel_vtep_remote_ipv6_address#id OverlayTunnelVtepRemoteIpv6Address#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Id1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/overlay_tunnel_vtep_remote_ipv6_address#id1 OverlayTunnelVtepRemoteIpv6Address#id1}
  */
  readonly id1: string;
  /**
  * IPv6 Address of the remote VTEP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/overlay_tunnel_vtep_remote_ipv6_address#ipv6_address OverlayTunnelVtepRemoteIpv6Address#ipv6_address}
  */
  readonly ipv6Address: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/overlay_tunnel_vtep_remote_ipv6_address#user_tag OverlayTunnelVtepRemoteIpv6Address#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/overlay_tunnel_vtep_remote_ipv6_address#uuid OverlayTunnelVtepRemoteIpv6Address#uuid}
  */
  readonly uuid?: string;
  /**
  * gre_keepalive block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/overlay_tunnel_vtep_remote_ipv6_address#gre_keepalive OverlayTunnelVtepRemoteIpv6Address#gre_keepalive}
  */
  readonly greKeepalive?: OverlayTunnelVtepRemoteIpv6AddressGreKeepalive;
  /**
  * use_gre_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/overlay_tunnel_vtep_remote_ipv6_address#use_gre_key OverlayTunnelVtepRemoteIpv6Address#use_gre_key}
  */
  readonly useGreKey?: OverlayTunnelVtepRemoteIpv6AddressUseGreKey;
  /**
  * use_lif block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/overlay_tunnel_vtep_remote_ipv6_address#use_lif OverlayTunnelVtepRemoteIpv6Address#use_lif}
  */
  readonly useLif?: OverlayTunnelVtepRemoteIpv6AddressUseLif;
  /**
  * vni_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/overlay_tunnel_vtep_remote_ipv6_address#vni_list OverlayTunnelVtepRemoteIpv6Address#vni_list}
  */
  readonly vniList?: OverlayTunnelVtepRemoteIpv6AddressVniListStruct[] | cdktf.IResolvable;
}
export interface OverlayTunnelVtepRemoteIpv6AddressGreKeepalive {
  /**
  * Keepalive multiplier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/overlay_tunnel_vtep_remote_ipv6_address#retry_count OverlayTunnelVtepRemoteIpv6Address#retry_count}
  */
  readonly retryCount?: number;
  /**
  * Keepalive retry interval in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/overlay_tunnel_vtep_remote_ipv6_address#retry_time OverlayTunnelVtepRemoteIpv6Address#retry_time}
  */
  readonly retryTime?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/overlay_tunnel_vtep_remote_ipv6_address#uuid OverlayTunnelVtepRemoteIpv6Address#uuid}
  */
  readonly uuid?: string;
}

export function overlayTunnelVtepRemoteIpv6AddressGreKeepaliveToTerraform(struct?: OverlayTunnelVtepRemoteIpv6AddressGreKeepaliveOutputReference | OverlayTunnelVtepRemoteIpv6AddressGreKeepalive): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    retry_count: cdktf.numberToTerraform(struct!.retryCount),
    retry_time: cdktf.numberToTerraform(struct!.retryTime),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function overlayTunnelVtepRemoteIpv6AddressGreKeepaliveToHclTerraform(struct?: OverlayTunnelVtepRemoteIpv6AddressGreKeepaliveOutputReference | OverlayTunnelVtepRemoteIpv6AddressGreKeepalive): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    retry_count: {
      value: cdktf.numberToHclTerraform(struct!.retryCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retry_time: {
      value: cdktf.numberToHclTerraform(struct!.retryTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OverlayTunnelVtepRemoteIpv6AddressGreKeepaliveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OverlayTunnelVtepRemoteIpv6AddressGreKeepalive | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._retryCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryCount = this._retryCount;
    }
    if (this._retryTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryTime = this._retryTime;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OverlayTunnelVtepRemoteIpv6AddressGreKeepalive | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._retryCount = undefined;
      this._retryTime = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._retryCount = value.retryCount;
      this._retryTime = value.retryTime;
      this._uuid = value.uuid;
    }
  }

  // retry_count - computed: false, optional: true, required: false
  private _retryCount?: number; 
  public get retryCount() {
    return this.getNumberAttribute('retry_count');
  }
  public set retryCount(value: number) {
    this._retryCount = value;
  }
  public resetRetryCount() {
    this._retryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryCountInput() {
    return this._retryCount;
  }

  // retry_time - computed: false, optional: true, required: false
  private _retryTime?: number; 
  public get retryTime() {
    return this.getNumberAttribute('retry_time');
  }
  public set retryTime(value: number) {
    this._retryTime = value;
  }
  public resetRetryTime() {
    this._retryTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryTimeInput() {
    return this._retryTime;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface OverlayTunnelVtepRemoteIpv6AddressUseGreKey {
  /**
  * key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/overlay_tunnel_vtep_remote_ipv6_address#gre_key OverlayTunnelVtepRemoteIpv6Address#gre_key}
  */
  readonly greKey?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/overlay_tunnel_vtep_remote_ipv6_address#uuid OverlayTunnelVtepRemoteIpv6Address#uuid}
  */
  readonly uuid?: string;
}

export function overlayTunnelVtepRemoteIpv6AddressUseGreKeyToTerraform(struct?: OverlayTunnelVtepRemoteIpv6AddressUseGreKeyOutputReference | OverlayTunnelVtepRemoteIpv6AddressUseGreKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gre_key: cdktf.numberToTerraform(struct!.greKey),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function overlayTunnelVtepRemoteIpv6AddressUseGreKeyToHclTerraform(struct?: OverlayTunnelVtepRemoteIpv6AddressUseGreKeyOutputReference | OverlayTunnelVtepRemoteIpv6AddressUseGreKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gre_key: {
      value: cdktf.numberToHclTerraform(struct!.greKey),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OverlayTunnelVtepRemoteIpv6AddressUseGreKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OverlayTunnelVtepRemoteIpv6AddressUseGreKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._greKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.greKey = this._greKey;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OverlayTunnelVtepRemoteIpv6AddressUseGreKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._greKey = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._greKey = value.greKey;
      this._uuid = value.uuid;
    }
  }

  // gre_key - computed: false, optional: true, required: false
  private _greKey?: number; 
  public get greKey() {
    return this.getNumberAttribute('gre_key');
  }
  public set greKey(value: number) {
    this._greKey = value;
  }
  public resetGreKey() {
    this._greKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get greKeyInput() {
    return this._greKey;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface OverlayTunnelVtepRemoteIpv6AddressUseLif {
  /**
  * Logical interface (logical interface name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/overlay_tunnel_vtep_remote_ipv6_address#lif OverlayTunnelVtepRemoteIpv6Address#lif}
  */
  readonly lif?: string;
  /**
  * Name of the Partition with the L2 segment being extended (Name of the User Partition with the L2 segment being extended)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/overlay_tunnel_vtep_remote_ipv6_address#partition OverlayTunnelVtepRemoteIpv6Address#partition}
  */
  readonly partition?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/overlay_tunnel_vtep_remote_ipv6_address#uuid OverlayTunnelVtepRemoteIpv6Address#uuid}
  */
  readonly uuid?: string;
}

export function overlayTunnelVtepRemoteIpv6AddressUseLifToTerraform(struct?: OverlayTunnelVtepRemoteIpv6AddressUseLifOutputReference | OverlayTunnelVtepRemoteIpv6AddressUseLif): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lif: cdktf.stringToTerraform(struct!.lif),
    partition: cdktf.stringToTerraform(struct!.partition),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function overlayTunnelVtepRemoteIpv6AddressUseLifToHclTerraform(struct?: OverlayTunnelVtepRemoteIpv6AddressUseLifOutputReference | OverlayTunnelVtepRemoteIpv6AddressUseLif): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lif: {
      value: cdktf.stringToHclTerraform(struct!.lif),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    partition: {
      value: cdktf.stringToHclTerraform(struct!.partition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OverlayTunnelVtepRemoteIpv6AddressUseLifOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OverlayTunnelVtepRemoteIpv6AddressUseLif | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lif !== undefined) {
      hasAnyValues = true;
      internalValueResult.lif = this._lif;
    }
    if (this._partition !== undefined) {
      hasAnyValues = true;
      internalValueResult.partition = this._partition;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OverlayTunnelVtepRemoteIpv6AddressUseLif | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lif = undefined;
      this._partition = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lif = value.lif;
      this._partition = value.partition;
      this._uuid = value.uuid;
    }
  }

  // lif - computed: false, optional: true, required: false
  private _lif?: string; 
  public get lif() {
    return this.getStringAttribute('lif');
  }
  public set lif(value: string) {
    this._lif = value;
  }
  public resetLif() {
    this._lif = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifInput() {
    return this._lif;
  }

  // partition - computed: false, optional: true, required: false
  private _partition?: string; 
  public get partition() {
    return this.getStringAttribute('partition');
  }
  public set partition(value: string) {
    this._partition = value;
  }
  public resetPartition() {
    this._partition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface OverlayTunnelVtepRemoteIpv6AddressVniListStruct {
  /**
  * VNI configured for the remote VTEP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/overlay_tunnel_vtep_remote_ipv6_address#segment OverlayTunnelVtepRemoteIpv6Address#segment}
  */
  readonly segment: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/overlay_tunnel_vtep_remote_ipv6_address#uuid OverlayTunnelVtepRemoteIpv6Address#uuid}
  */
  readonly uuid?: string;
}

export function overlayTunnelVtepRemoteIpv6AddressVniListStructToTerraform(struct?: OverlayTunnelVtepRemoteIpv6AddressVniListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    segment: cdktf.numberToTerraform(struct!.segment),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function overlayTunnelVtepRemoteIpv6AddressVniListStructToHclTerraform(struct?: OverlayTunnelVtepRemoteIpv6AddressVniListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    segment: {
      value: cdktf.numberToHclTerraform(struct!.segment),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OverlayTunnelVtepRemoteIpv6AddressVniListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OverlayTunnelVtepRemoteIpv6AddressVniListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._segment !== undefined) {
      hasAnyValues = true;
      internalValueResult.segment = this._segment;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OverlayTunnelVtepRemoteIpv6AddressVniListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._segment = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._segment = value.segment;
      this._uuid = value.uuid;
    }
  }

  // segment - computed: false, optional: false, required: true
  private _segment?: number; 
  public get segment() {
    return this.getNumberAttribute('segment');
  }
  public set segment(value: number) {
    this._segment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentInput() {
    return this._segment;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}

export class OverlayTunnelVtepRemoteIpv6AddressVniListStructList extends cdktf.ComplexList {
  public internalValue? : OverlayTunnelVtepRemoteIpv6AddressVniListStruct[] | cdktf.IResolvable

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
  public get(index: number): OverlayTunnelVtepRemoteIpv6AddressVniListStructOutputReference {
    return new OverlayTunnelVtepRemoteIpv6AddressVniListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/overlay_tunnel_vtep_remote_ipv6_address thunder_overlay_tunnel_vtep_remote_ipv6_address}
*/
export class OverlayTunnelVtepRemoteIpv6Address extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_overlay_tunnel_vtep_remote_ipv6_address";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OverlayTunnelVtepRemoteIpv6Address resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OverlayTunnelVtepRemoteIpv6Address to import
  * @param importFromId The id of the existing OverlayTunnelVtepRemoteIpv6Address that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/overlay_tunnel_vtep_remote_ipv6_address#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OverlayTunnelVtepRemoteIpv6Address to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_overlay_tunnel_vtep_remote_ipv6_address", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/overlay_tunnel_vtep_remote_ipv6_address thunder_overlay_tunnel_vtep_remote_ipv6_address} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OverlayTunnelVtepRemoteIpv6AddressConfig
  */
  public constructor(scope: Construct, id: string, config: OverlayTunnelVtepRemoteIpv6AddressConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_overlay_tunnel_vtep_remote_ipv6_address',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._classList = config.classList;
    this._encap = config.encap;
    this._id = config.id;
    this._id1 = config.id1;
    this._ipv6Address = config.ipv6Address;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._greKeepalive.internalValue = config.greKeepalive;
    this._useGreKey.internalValue = config.useGreKey;
    this._useLif.internalValue = config.useLif;
    this._vniList.internalValue = config.vniList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // class_list - computed: false, optional: true, required: false
  private _classList?: string; 
  public get classList() {
    return this.getStringAttribute('class_list');
  }
  public set classList(value: string) {
    this._classList = value;
  }
  public resetClassList() {
    this._classList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classListInput() {
    return this._classList;
  }

  // encap - computed: false, optional: true, required: false
  private _encap?: string; 
  public get encap() {
    return this.getStringAttribute('encap');
  }
  public set encap(value: string) {
    this._encap = value;
  }
  public resetEncap() {
    this._encap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encapInput() {
    return this._encap;
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

  // id1 - computed: false, optional: false, required: true
  private _id1?: string; 
  public get id1() {
    return this.getStringAttribute('id1');
  }
  public set id1(value: string) {
    this._id1 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get id1Input() {
    return this._id1;
  }

  // ipv6_address - computed: false, optional: false, required: true
  private _ipv6Address?: string; 
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }
  public set ipv6Address(value: string) {
    this._ipv6Address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressInput() {
    return this._ipv6Address;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // gre_keepalive - computed: false, optional: true, required: false
  private _greKeepalive = new OverlayTunnelVtepRemoteIpv6AddressGreKeepaliveOutputReference(this, "gre_keepalive");
  public get greKeepalive() {
    return this._greKeepalive;
  }
  public putGreKeepalive(value: OverlayTunnelVtepRemoteIpv6AddressGreKeepalive) {
    this._greKeepalive.internalValue = value;
  }
  public resetGreKeepalive() {
    this._greKeepalive.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get greKeepaliveInput() {
    return this._greKeepalive.internalValue;
  }

  // use_gre_key - computed: false, optional: true, required: false
  private _useGreKey = new OverlayTunnelVtepRemoteIpv6AddressUseGreKeyOutputReference(this, "use_gre_key");
  public get useGreKey() {
    return this._useGreKey;
  }
  public putUseGreKey(value: OverlayTunnelVtepRemoteIpv6AddressUseGreKey) {
    this._useGreKey.internalValue = value;
  }
  public resetUseGreKey() {
    this._useGreKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useGreKeyInput() {
    return this._useGreKey.internalValue;
  }

  // use_lif - computed: false, optional: true, required: false
  private _useLif = new OverlayTunnelVtepRemoteIpv6AddressUseLifOutputReference(this, "use_lif");
  public get useLif() {
    return this._useLif;
  }
  public putUseLif(value: OverlayTunnelVtepRemoteIpv6AddressUseLif) {
    this._useLif.internalValue = value;
  }
  public resetUseLif() {
    this._useLif.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useLifInput() {
    return this._useLif.internalValue;
  }

  // vni_list - computed: false, optional: true, required: false
  private _vniList = new OverlayTunnelVtepRemoteIpv6AddressVniListStructList(this, "vni_list", false);
  public get vniList() {
    return this._vniList;
  }
  public putVniList(value: OverlayTunnelVtepRemoteIpv6AddressVniListStruct[] | cdktf.IResolvable) {
    this._vniList.internalValue = value;
  }
  public resetVniList() {
    this._vniList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vniListInput() {
    return this._vniList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      class_list: cdktf.stringToTerraform(this._classList),
      encap: cdktf.stringToTerraform(this._encap),
      id: cdktf.stringToTerraform(this._id),
      id1: cdktf.stringToTerraform(this._id1),
      ipv6_address: cdktf.stringToTerraform(this._ipv6Address),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      gre_keepalive: overlayTunnelVtepRemoteIpv6AddressGreKeepaliveToTerraform(this._greKeepalive.internalValue),
      use_gre_key: overlayTunnelVtepRemoteIpv6AddressUseGreKeyToTerraform(this._useGreKey.internalValue),
      use_lif: overlayTunnelVtepRemoteIpv6AddressUseLifToTerraform(this._useLif.internalValue),
      vni_list: cdktf.listMapper(overlayTunnelVtepRemoteIpv6AddressVniListStructToTerraform, true)(this._vniList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      class_list: {
        value: cdktf.stringToHclTerraform(this._classList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encap: {
        value: cdktf.stringToHclTerraform(this._encap),
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
      id1: {
        value: cdktf.stringToHclTerraform(this._id1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_address: {
        value: cdktf.stringToHclTerraform(this._ipv6Address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gre_keepalive: {
        value: overlayTunnelVtepRemoteIpv6AddressGreKeepaliveToHclTerraform(this._greKeepalive.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OverlayTunnelVtepRemoteIpv6AddressGreKeepaliveList",
      },
      use_gre_key: {
        value: overlayTunnelVtepRemoteIpv6AddressUseGreKeyToHclTerraform(this._useGreKey.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OverlayTunnelVtepRemoteIpv6AddressUseGreKeyList",
      },
      use_lif: {
        value: overlayTunnelVtepRemoteIpv6AddressUseLifToHclTerraform(this._useLif.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OverlayTunnelVtepRemoteIpv6AddressUseLifList",
      },
      vni_list: {
        value: cdktf.listMapperHcl(overlayTunnelVtepRemoteIpv6AddressVniListStructToHclTerraform, true)(this._vniList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OverlayTunnelVtepRemoteIpv6AddressVniListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
