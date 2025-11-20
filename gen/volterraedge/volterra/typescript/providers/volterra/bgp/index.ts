// https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BgpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#annotations Bgp#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#description Bgp#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#disable Bgp#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#id Bgp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#labels Bgp#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#name Bgp#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#namespace Bgp#namespace}
  */
  readonly namespace: string;
  /**
  * bgp_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#bgp_parameters Bgp#bgp_parameters}
  */
  readonly bgpParameters: BgpBgpParameters;
  /**
  * peers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#peers Bgp#peers}
  */
  readonly peers: BgpPeers[] | cdktf.IResolvable;
  /**
  * where block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#where Bgp#where}
  */
  readonly where: BgpWhere;
}
export interface BgpBgpParametersBgpRouterIdIpv4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#addr Bgp#addr}
  */
  readonly addr?: string;
}

export function bgpBgpParametersBgpRouterIdIpv4ToTerraform(struct?: BgpBgpParametersBgpRouterIdIpv4OutputReference | BgpBgpParametersBgpRouterIdIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
  }
}


export function bgpBgpParametersBgpRouterIdIpv4ToHclTerraform(struct?: BgpBgpParametersBgpRouterIdIpv4OutputReference | BgpBgpParametersBgpRouterIdIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpBgpParametersBgpRouterIdIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BgpBgpParametersBgpRouterIdIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpBgpParametersBgpRouterIdIpv4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addr = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addr = value.addr;
    }
  }

  // addr - computed: false, optional: true, required: false
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  public resetAddr() {
    this._addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }
}
export interface BgpBgpParametersBgpRouterIdIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#addr Bgp#addr}
  */
  readonly addr?: string;
}

export function bgpBgpParametersBgpRouterIdIpv6ToTerraform(struct?: BgpBgpParametersBgpRouterIdIpv6OutputReference | BgpBgpParametersBgpRouterIdIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
  }
}


export function bgpBgpParametersBgpRouterIdIpv6ToHclTerraform(struct?: BgpBgpParametersBgpRouterIdIpv6OutputReference | BgpBgpParametersBgpRouterIdIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpBgpParametersBgpRouterIdIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BgpBgpParametersBgpRouterIdIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpBgpParametersBgpRouterIdIpv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addr = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addr = value.addr;
    }
  }

  // addr - computed: false, optional: true, required: false
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  public resetAddr() {
    this._addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }
}
export interface BgpBgpParametersBgpRouterId {
  /**
  * ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#ipv4 Bgp#ipv4}
  */
  readonly ipv4?: BgpBgpParametersBgpRouterIdIpv4;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#ipv6 Bgp#ipv6}
  */
  readonly ipv6?: BgpBgpParametersBgpRouterIdIpv6;
}

export function bgpBgpParametersBgpRouterIdToTerraform(struct?: BgpBgpParametersBgpRouterIdOutputReference | BgpBgpParametersBgpRouterId): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: bgpBgpParametersBgpRouterIdIpv4ToTerraform(struct!.ipv4),
    ipv6: bgpBgpParametersBgpRouterIdIpv6ToTerraform(struct!.ipv6),
  }
}


export function bgpBgpParametersBgpRouterIdToHclTerraform(struct?: BgpBgpParametersBgpRouterIdOutputReference | BgpBgpParametersBgpRouterId): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: bgpBgpParametersBgpRouterIdIpv4ToHclTerraform(struct!.ipv4),
      isBlock: true,
      type: "list",
      storageClassType: "BgpBgpParametersBgpRouterIdIpv4List",
    },
    ipv6: {
      value: bgpBgpParametersBgpRouterIdIpv6ToHclTerraform(struct!.ipv6),
      isBlock: true,
      type: "list",
      storageClassType: "BgpBgpParametersBgpRouterIdIpv6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpBgpParametersBgpRouterIdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BgpBgpParametersBgpRouterId | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4?.internalValue;
    }
    if (this._ipv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpBgpParametersBgpRouterId | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv4.internalValue = undefined;
      this._ipv6.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv4.internalValue = value.ipv4;
      this._ipv6.internalValue = value.ipv6;
    }
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4 = new BgpBgpParametersBgpRouterIdIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: BgpBgpParametersBgpRouterIdIpv4) {
    this._ipv4.internalValue = value;
  }
  public resetIpv4() {
    this._ipv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4.internalValue;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6 = new BgpBgpParametersBgpRouterIdIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: BgpBgpParametersBgpRouterIdIpv6) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }
}
export interface BgpBgpParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#asn Bgp#asn}
  */
  readonly asn: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#bgp_router_id_key Bgp#bgp_router_id_key}
  */
  readonly bgpRouterIdKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#bgp_router_id_type Bgp#bgp_router_id_type}
  */
  readonly bgpRouterIdType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#from_site Bgp#from_site}
  */
  readonly fromSite?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#ip_address Bgp#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#local_address Bgp#local_address}
  */
  readonly localAddress?: boolean | cdktf.IResolvable;
  /**
  * bgp_router_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#bgp_router_id Bgp#bgp_router_id}
  */
  readonly bgpRouterId?: BgpBgpParametersBgpRouterId;
}

export function bgpBgpParametersToTerraform(struct?: BgpBgpParametersOutputReference | BgpBgpParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asn: cdktf.numberToTerraform(struct!.asn),
    bgp_router_id_key: cdktf.stringToTerraform(struct!.bgpRouterIdKey),
    bgp_router_id_type: cdktf.stringToTerraform(struct!.bgpRouterIdType),
    from_site: cdktf.booleanToTerraform(struct!.fromSite),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    local_address: cdktf.booleanToTerraform(struct!.localAddress),
    bgp_router_id: bgpBgpParametersBgpRouterIdToTerraform(struct!.bgpRouterId),
  }
}


export function bgpBgpParametersToHclTerraform(struct?: BgpBgpParametersOutputReference | BgpBgpParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asn: {
      value: cdktf.numberToHclTerraform(struct!.asn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bgp_router_id_key: {
      value: cdktf.stringToHclTerraform(struct!.bgpRouterIdKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bgp_router_id_type: {
      value: cdktf.stringToHclTerraform(struct!.bgpRouterIdType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    from_site: {
      value: cdktf.booleanToHclTerraform(struct!.fromSite),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_address: {
      value: cdktf.booleanToHclTerraform(struct!.localAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    bgp_router_id: {
      value: bgpBgpParametersBgpRouterIdToHclTerraform(struct!.bgpRouterId),
      isBlock: true,
      type: "list",
      storageClassType: "BgpBgpParametersBgpRouterIdList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpBgpParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BgpBgpParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asn !== undefined) {
      hasAnyValues = true;
      internalValueResult.asn = this._asn;
    }
    if (this._bgpRouterIdKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpRouterIdKey = this._bgpRouterIdKey;
    }
    if (this._bgpRouterIdType !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpRouterIdType = this._bgpRouterIdType;
    }
    if (this._fromSite !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromSite = this._fromSite;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._localAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.localAddress = this._localAddress;
    }
    if (this._bgpRouterId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpRouterId = this._bgpRouterId?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpBgpParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._asn = undefined;
      this._bgpRouterIdKey = undefined;
      this._bgpRouterIdType = undefined;
      this._fromSite = undefined;
      this._ipAddress = undefined;
      this._localAddress = undefined;
      this._bgpRouterId.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._asn = value.asn;
      this._bgpRouterIdKey = value.bgpRouterIdKey;
      this._bgpRouterIdType = value.bgpRouterIdType;
      this._fromSite = value.fromSite;
      this._ipAddress = value.ipAddress;
      this._localAddress = value.localAddress;
      this._bgpRouterId.internalValue = value.bgpRouterId;
    }
  }

  // asn - computed: false, optional: false, required: true
  private _asn?: number; 
  public get asn() {
    return this.getNumberAttribute('asn');
  }
  public set asn(value: number) {
    this._asn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asnInput() {
    return this._asn;
  }

  // bgp_router_id_key - computed: false, optional: true, required: false
  private _bgpRouterIdKey?: string; 
  public get bgpRouterIdKey() {
    return this.getStringAttribute('bgp_router_id_key');
  }
  public set bgpRouterIdKey(value: string) {
    this._bgpRouterIdKey = value;
  }
  public resetBgpRouterIdKey() {
    this._bgpRouterIdKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpRouterIdKeyInput() {
    return this._bgpRouterIdKey;
  }

  // bgp_router_id_type - computed: false, optional: true, required: false
  private _bgpRouterIdType?: string; 
  public get bgpRouterIdType() {
    return this.getStringAttribute('bgp_router_id_type');
  }
  public set bgpRouterIdType(value: string) {
    this._bgpRouterIdType = value;
  }
  public resetBgpRouterIdType() {
    this._bgpRouterIdType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpRouterIdTypeInput() {
    return this._bgpRouterIdType;
  }

  // from_site - computed: false, optional: true, required: false
  private _fromSite?: boolean | cdktf.IResolvable; 
  public get fromSite() {
    return this.getBooleanAttribute('from_site');
  }
  public set fromSite(value: boolean | cdktf.IResolvable) {
    this._fromSite = value;
  }
  public resetFromSite() {
    this._fromSite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromSiteInput() {
    return this._fromSite;
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // local_address - computed: false, optional: true, required: false
  private _localAddress?: boolean | cdktf.IResolvable; 
  public get localAddress() {
    return this.getBooleanAttribute('local_address');
  }
  public set localAddress(value: boolean | cdktf.IResolvable) {
    this._localAddress = value;
  }
  public resetLocalAddress() {
    this._localAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAddressInput() {
    return this._localAddress;
  }

  // bgp_router_id - computed: false, optional: true, required: false
  private _bgpRouterId = new BgpBgpParametersBgpRouterIdOutputReference(this, "bgp_router_id");
  public get bgpRouterId() {
    return this._bgpRouterId;
  }
  public putBgpRouterId(value: BgpBgpParametersBgpRouterId) {
    this._bgpRouterId.internalValue = value;
  }
  public resetBgpRouterId() {
    this._bgpRouterId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpRouterIdInput() {
    return this._bgpRouterId.internalValue;
  }
}
export interface BgpPeersBfdEnabled {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#multiplier Bgp#multiplier}
  */
  readonly multiplier: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#receive_interval_milliseconds Bgp#receive_interval_milliseconds}
  */
  readonly receiveIntervalMilliseconds: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#transmit_interval_milliseconds Bgp#transmit_interval_milliseconds}
  */
  readonly transmitIntervalMilliseconds: number;
}

export function bgpPeersBfdEnabledToTerraform(struct?: BgpPeersBfdEnabledOutputReference | BgpPeersBfdEnabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    multiplier: cdktf.numberToTerraform(struct!.multiplier),
    receive_interval_milliseconds: cdktf.numberToTerraform(struct!.receiveIntervalMilliseconds),
    transmit_interval_milliseconds: cdktf.numberToTerraform(struct!.transmitIntervalMilliseconds),
  }
}


export function bgpPeersBfdEnabledToHclTerraform(struct?: BgpPeersBfdEnabledOutputReference | BgpPeersBfdEnabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    multiplier: {
      value: cdktf.numberToHclTerraform(struct!.multiplier),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    receive_interval_milliseconds: {
      value: cdktf.numberToHclTerraform(struct!.receiveIntervalMilliseconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    transmit_interval_milliseconds: {
      value: cdktf.numberToHclTerraform(struct!.transmitIntervalMilliseconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpPeersBfdEnabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BgpPeersBfdEnabled | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._multiplier !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiplier = this._multiplier;
    }
    if (this._receiveIntervalMilliseconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.receiveIntervalMilliseconds = this._receiveIntervalMilliseconds;
    }
    if (this._transmitIntervalMilliseconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.transmitIntervalMilliseconds = this._transmitIntervalMilliseconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpPeersBfdEnabled | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._multiplier = undefined;
      this._receiveIntervalMilliseconds = undefined;
      this._transmitIntervalMilliseconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._multiplier = value.multiplier;
      this._receiveIntervalMilliseconds = value.receiveIntervalMilliseconds;
      this._transmitIntervalMilliseconds = value.transmitIntervalMilliseconds;
    }
  }

  // multiplier - computed: false, optional: false, required: true
  private _multiplier?: number; 
  public get multiplier() {
    return this.getNumberAttribute('multiplier');
  }
  public set multiplier(value: number) {
    this._multiplier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get multiplierInput() {
    return this._multiplier;
  }

  // receive_interval_milliseconds - computed: false, optional: false, required: true
  private _receiveIntervalMilliseconds?: number; 
  public get receiveIntervalMilliseconds() {
    return this.getNumberAttribute('receive_interval_milliseconds');
  }
  public set receiveIntervalMilliseconds(value: number) {
    this._receiveIntervalMilliseconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get receiveIntervalMillisecondsInput() {
    return this._receiveIntervalMilliseconds;
  }

  // transmit_interval_milliseconds - computed: false, optional: false, required: true
  private _transmitIntervalMilliseconds?: number; 
  public get transmitIntervalMilliseconds() {
    return this.getNumberAttribute('transmit_interval_milliseconds');
  }
  public set transmitIntervalMilliseconds(value: number) {
    this._transmitIntervalMilliseconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transmitIntervalMillisecondsInput() {
    return this._transmitIntervalMilliseconds;
  }
}
export interface BgpPeersExternalFamilyInet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#disable Bgp#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#enable Bgp#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
}

export function bgpPeersExternalFamilyInetToTerraform(struct?: BgpPeersExternalFamilyInetOutputReference | BgpPeersExternalFamilyInet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable: cdktf.booleanToTerraform(struct!.disable),
    enable: cdktf.booleanToTerraform(struct!.enable),
  }
}


export function bgpPeersExternalFamilyInetToHclTerraform(struct?: BgpPeersExternalFamilyInetOutputReference | BgpPeersExternalFamilyInet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class BgpPeersExternalFamilyInetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BgpPeersExternalFamilyInet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpPeersExternalFamilyInet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disable = undefined;
      this._enable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disable = value.disable;
      this._enable = value.enable;
    }
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
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
export interface BgpPeersExternalFamilyInetV6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#disable Bgp#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#enable Bgp#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
}

export function bgpPeersExternalFamilyInetV6ToTerraform(struct?: BgpPeersExternalFamilyInetV6OutputReference | BgpPeersExternalFamilyInetV6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable: cdktf.booleanToTerraform(struct!.disable),
    enable: cdktf.booleanToTerraform(struct!.enable),
  }
}


export function bgpPeersExternalFamilyInetV6ToHclTerraform(struct?: BgpPeersExternalFamilyInetV6OutputReference | BgpPeersExternalFamilyInetV6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class BgpPeersExternalFamilyInetV6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BgpPeersExternalFamilyInetV6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpPeersExternalFamilyInetV6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disable = undefined;
      this._enable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disable = value.disable;
      this._enable = value.enable;
    }
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
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
export interface BgpPeersExternalInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#name Bgp#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#namespace Bgp#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#tenant Bgp#tenant}
  */
  readonly tenant?: string;
}

export function bgpPeersExternalInterfaceToTerraform(struct?: BgpPeersExternalInterfaceOutputReference | BgpPeersExternalInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function bgpPeersExternalInterfaceToHclTerraform(struct?: BgpPeersExternalInterfaceOutputReference | BgpPeersExternalInterface): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpPeersExternalInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BgpPeersExternalInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpPeersExternalInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface BgpPeersExternalInterfaceListInterfaces {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#name Bgp#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#namespace Bgp#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#tenant Bgp#tenant}
  */
  readonly tenant?: string;
}

export function bgpPeersExternalInterfaceListInterfacesToTerraform(struct?: BgpPeersExternalInterfaceListInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function bgpPeersExternalInterfaceListInterfacesToHclTerraform(struct?: BgpPeersExternalInterfaceListInterfaces | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpPeersExternalInterfaceListInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BgpPeersExternalInterfaceListInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpPeersExternalInterfaceListInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class BgpPeersExternalInterfaceListInterfacesList extends cdktf.ComplexList {
  public internalValue? : BgpPeersExternalInterfaceListInterfaces[] | cdktf.IResolvable

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
  public get(index: number): BgpPeersExternalInterfaceListInterfacesOutputReference {
    return new BgpPeersExternalInterfaceListInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BgpPeersExternalInterfaceListStruct {
  /**
  * interfaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#interfaces Bgp#interfaces}
  */
  readonly interfaces: BgpPeersExternalInterfaceListInterfaces[] | cdktf.IResolvable;
}

export function bgpPeersExternalInterfaceListStructToTerraform(struct?: BgpPeersExternalInterfaceListStructOutputReference | BgpPeersExternalInterfaceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interfaces: cdktf.listMapper(bgpPeersExternalInterfaceListInterfacesToTerraform, true)(struct!.interfaces),
  }
}


export function bgpPeersExternalInterfaceListStructToHclTerraform(struct?: BgpPeersExternalInterfaceListStructOutputReference | BgpPeersExternalInterfaceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interfaces: {
      value: cdktf.listMapperHcl(bgpPeersExternalInterfaceListInterfacesToHclTerraform, true)(struct!.interfaces),
      isBlock: true,
      type: "list",
      storageClassType: "BgpPeersExternalInterfaceListInterfacesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpPeersExternalInterfaceListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BgpPeersExternalInterfaceListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaces?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaces = this._interfaces?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpPeersExternalInterfaceListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interfaces.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interfaces.internalValue = value.interfaces;
    }
  }

  // interfaces - computed: false, optional: false, required: true
  private _interfaces = new BgpPeersExternalInterfaceListInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }
  public putInterfaces(value: BgpPeersExternalInterfaceListInterfaces[] | cdktf.IResolvable) {
    this._interfaces.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces.internalValue;
  }
}
export interface BgpPeersExternal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#address Bgp#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#address_ipv6 Bgp#address_ipv6}
  */
  readonly addressIpv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#asn Bgp#asn}
  */
  readonly asn: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#default_gateway Bgp#default_gateway}
  */
  readonly defaultGateway?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#default_gateway_v6 Bgp#default_gateway_v6}
  */
  readonly defaultGatewayV6?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#disable Bgp#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#disable_v6 Bgp#disable_v6}
  */
  readonly disableV6?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#external_connector Bgp#external_connector}
  */
  readonly externalConnector?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#from_site Bgp#from_site}
  */
  readonly fromSite?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#from_site_v6 Bgp#from_site_v6}
  */
  readonly fromSiteV6?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#inside_interfaces Bgp#inside_interfaces}
  */
  readonly insideInterfaces?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#md5_auth_key Bgp#md5_auth_key}
  */
  readonly md5AuthKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#no_authentication Bgp#no_authentication}
  */
  readonly noAuthentication?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#outside_interfaces Bgp#outside_interfaces}
  */
  readonly outsideInterfaces?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#port Bgp#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#subnet_begin_offset Bgp#subnet_begin_offset}
  */
  readonly subnetBeginOffset?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#subnet_begin_offset_v6 Bgp#subnet_begin_offset_v6}
  */
  readonly subnetBeginOffsetV6?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#subnet_end_offset Bgp#subnet_end_offset}
  */
  readonly subnetEndOffset?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#subnet_end_offset_v6 Bgp#subnet_end_offset_v6}
  */
  readonly subnetEndOffsetV6?: number;
  /**
  * family_inet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#family_inet Bgp#family_inet}
  */
  readonly familyInet?: BgpPeersExternalFamilyInet;
  /**
  * family_inet_v6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#family_inet_v6 Bgp#family_inet_v6}
  */
  readonly familyInetV6?: BgpPeersExternalFamilyInetV6;
  /**
  * interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#interface Bgp#interface}
  */
  readonly interface?: BgpPeersExternalInterface;
  /**
  * interface_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#interface_list Bgp#interface_list}
  */
  readonly interfaceList?: BgpPeersExternalInterfaceListStruct;
}

export function bgpPeersExternalToTerraform(struct?: BgpPeersExternalOutputReference | BgpPeersExternal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    address_ipv6: cdktf.stringToTerraform(struct!.addressIpv6),
    asn: cdktf.numberToTerraform(struct!.asn),
    default_gateway: cdktf.booleanToTerraform(struct!.defaultGateway),
    default_gateway_v6: cdktf.booleanToTerraform(struct!.defaultGatewayV6),
    disable: cdktf.booleanToTerraform(struct!.disable),
    disable_v6: cdktf.booleanToTerraform(struct!.disableV6),
    external_connector: cdktf.booleanToTerraform(struct!.externalConnector),
    from_site: cdktf.booleanToTerraform(struct!.fromSite),
    from_site_v6: cdktf.booleanToTerraform(struct!.fromSiteV6),
    inside_interfaces: cdktf.booleanToTerraform(struct!.insideInterfaces),
    md5_auth_key: cdktf.stringToTerraform(struct!.md5AuthKey),
    no_authentication: cdktf.booleanToTerraform(struct!.noAuthentication),
    outside_interfaces: cdktf.booleanToTerraform(struct!.outsideInterfaces),
    port: cdktf.numberToTerraform(struct!.port),
    subnet_begin_offset: cdktf.numberToTerraform(struct!.subnetBeginOffset),
    subnet_begin_offset_v6: cdktf.numberToTerraform(struct!.subnetBeginOffsetV6),
    subnet_end_offset: cdktf.numberToTerraform(struct!.subnetEndOffset),
    subnet_end_offset_v6: cdktf.numberToTerraform(struct!.subnetEndOffsetV6),
    family_inet: bgpPeersExternalFamilyInetToTerraform(struct!.familyInet),
    family_inet_v6: bgpPeersExternalFamilyInetV6ToTerraform(struct!.familyInetV6),
    interface: bgpPeersExternalInterfaceToTerraform(struct!.interface),
    interface_list: bgpPeersExternalInterfaceListStructToTerraform(struct!.interfaceList),
  }
}


export function bgpPeersExternalToHclTerraform(struct?: BgpPeersExternalOutputReference | BgpPeersExternal): any {
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
    address_ipv6: {
      value: cdktf.stringToHclTerraform(struct!.addressIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    asn: {
      value: cdktf.numberToHclTerraform(struct!.asn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    default_gateway: {
      value: cdktf.booleanToHclTerraform(struct!.defaultGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_gateway_v6: {
      value: cdktf.booleanToHclTerraform(struct!.defaultGatewayV6),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_v6: {
      value: cdktf.booleanToHclTerraform(struct!.disableV6),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    external_connector: {
      value: cdktf.booleanToHclTerraform(struct!.externalConnector),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    from_site: {
      value: cdktf.booleanToHclTerraform(struct!.fromSite),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    from_site_v6: {
      value: cdktf.booleanToHclTerraform(struct!.fromSiteV6),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    inside_interfaces: {
      value: cdktf.booleanToHclTerraform(struct!.insideInterfaces),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    md5_auth_key: {
      value: cdktf.stringToHclTerraform(struct!.md5AuthKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_authentication: {
      value: cdktf.booleanToHclTerraform(struct!.noAuthentication),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    outside_interfaces: {
      value: cdktf.booleanToHclTerraform(struct!.outsideInterfaces),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    subnet_begin_offset: {
      value: cdktf.numberToHclTerraform(struct!.subnetBeginOffset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    subnet_begin_offset_v6: {
      value: cdktf.numberToHclTerraform(struct!.subnetBeginOffsetV6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    subnet_end_offset: {
      value: cdktf.numberToHclTerraform(struct!.subnetEndOffset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    subnet_end_offset_v6: {
      value: cdktf.numberToHclTerraform(struct!.subnetEndOffsetV6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    family_inet: {
      value: bgpPeersExternalFamilyInetToHclTerraform(struct!.familyInet),
      isBlock: true,
      type: "list",
      storageClassType: "BgpPeersExternalFamilyInetList",
    },
    family_inet_v6: {
      value: bgpPeersExternalFamilyInetV6ToHclTerraform(struct!.familyInetV6),
      isBlock: true,
      type: "list",
      storageClassType: "BgpPeersExternalFamilyInetV6List",
    },
    interface: {
      value: bgpPeersExternalInterfaceToHclTerraform(struct!.interface),
      isBlock: true,
      type: "list",
      storageClassType: "BgpPeersExternalInterfaceList",
    },
    interface_list: {
      value: bgpPeersExternalInterfaceListStructToHclTerraform(struct!.interfaceList),
      isBlock: true,
      type: "list",
      storageClassType: "BgpPeersExternalInterfaceListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpPeersExternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BgpPeersExternal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._addressIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressIpv6 = this._addressIpv6;
    }
    if (this._asn !== undefined) {
      hasAnyValues = true;
      internalValueResult.asn = this._asn;
    }
    if (this._defaultGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGateway = this._defaultGateway;
    }
    if (this._defaultGatewayV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGatewayV6 = this._defaultGatewayV6;
    }
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._disableV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableV6 = this._disableV6;
    }
    if (this._externalConnector !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalConnector = this._externalConnector;
    }
    if (this._fromSite !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromSite = this._fromSite;
    }
    if (this._fromSiteV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromSiteV6 = this._fromSiteV6;
    }
    if (this._insideInterfaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.insideInterfaces = this._insideInterfaces;
    }
    if (this._md5AuthKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.md5AuthKey = this._md5AuthKey;
    }
    if (this._noAuthentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.noAuthentication = this._noAuthentication;
    }
    if (this._outsideInterfaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.outsideInterfaces = this._outsideInterfaces;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._subnetBeginOffset !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetBeginOffset = this._subnetBeginOffset;
    }
    if (this._subnetBeginOffsetV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetBeginOffsetV6 = this._subnetBeginOffsetV6;
    }
    if (this._subnetEndOffset !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetEndOffset = this._subnetEndOffset;
    }
    if (this._subnetEndOffsetV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetEndOffsetV6 = this._subnetEndOffsetV6;
    }
    if (this._familyInet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.familyInet = this._familyInet?.internalValue;
    }
    if (this._familyInetV6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.familyInetV6 = this._familyInetV6?.internalValue;
    }
    if (this._interface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface?.internalValue;
    }
    if (this._interfaceList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceList = this._interfaceList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpPeersExternal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._address = undefined;
      this._addressIpv6 = undefined;
      this._asn = undefined;
      this._defaultGateway = undefined;
      this._defaultGatewayV6 = undefined;
      this._disable = undefined;
      this._disableV6 = undefined;
      this._externalConnector = undefined;
      this._fromSite = undefined;
      this._fromSiteV6 = undefined;
      this._insideInterfaces = undefined;
      this._md5AuthKey = undefined;
      this._noAuthentication = undefined;
      this._outsideInterfaces = undefined;
      this._port = undefined;
      this._subnetBeginOffset = undefined;
      this._subnetBeginOffsetV6 = undefined;
      this._subnetEndOffset = undefined;
      this._subnetEndOffsetV6 = undefined;
      this._familyInet.internalValue = undefined;
      this._familyInetV6.internalValue = undefined;
      this._interface.internalValue = undefined;
      this._interfaceList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._address = value.address;
      this._addressIpv6 = value.addressIpv6;
      this._asn = value.asn;
      this._defaultGateway = value.defaultGateway;
      this._defaultGatewayV6 = value.defaultGatewayV6;
      this._disable = value.disable;
      this._disableV6 = value.disableV6;
      this._externalConnector = value.externalConnector;
      this._fromSite = value.fromSite;
      this._fromSiteV6 = value.fromSiteV6;
      this._insideInterfaces = value.insideInterfaces;
      this._md5AuthKey = value.md5AuthKey;
      this._noAuthentication = value.noAuthentication;
      this._outsideInterfaces = value.outsideInterfaces;
      this._port = value.port;
      this._subnetBeginOffset = value.subnetBeginOffset;
      this._subnetBeginOffsetV6 = value.subnetBeginOffsetV6;
      this._subnetEndOffset = value.subnetEndOffset;
      this._subnetEndOffsetV6 = value.subnetEndOffsetV6;
      this._familyInet.internalValue = value.familyInet;
      this._familyInetV6.internalValue = value.familyInetV6;
      this._interface.internalValue = value.interface;
      this._interfaceList.internalValue = value.interfaceList;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // address_ipv6 - computed: false, optional: true, required: false
  private _addressIpv6?: string; 
  public get addressIpv6() {
    return this.getStringAttribute('address_ipv6');
  }
  public set addressIpv6(value: string) {
    this._addressIpv6 = value;
  }
  public resetAddressIpv6() {
    this._addressIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressIpv6Input() {
    return this._addressIpv6;
  }

  // asn - computed: false, optional: false, required: true
  private _asn?: number; 
  public get asn() {
    return this.getNumberAttribute('asn');
  }
  public set asn(value: number) {
    this._asn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asnInput() {
    return this._asn;
  }

  // default_gateway - computed: false, optional: true, required: false
  private _defaultGateway?: boolean | cdktf.IResolvable; 
  public get defaultGateway() {
    return this.getBooleanAttribute('default_gateway');
  }
  public set defaultGateway(value: boolean | cdktf.IResolvable) {
    this._defaultGateway = value;
  }
  public resetDefaultGateway() {
    this._defaultGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGatewayInput() {
    return this._defaultGateway;
  }

  // default_gateway_v6 - computed: false, optional: true, required: false
  private _defaultGatewayV6?: boolean | cdktf.IResolvable; 
  public get defaultGatewayV6() {
    return this.getBooleanAttribute('default_gateway_v6');
  }
  public set defaultGatewayV6(value: boolean | cdktf.IResolvable) {
    this._defaultGatewayV6 = value;
  }
  public resetDefaultGatewayV6() {
    this._defaultGatewayV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGatewayV6Input() {
    return this._defaultGatewayV6;
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // disable_v6 - computed: false, optional: true, required: false
  private _disableV6?: boolean | cdktf.IResolvable; 
  public get disableV6() {
    return this.getBooleanAttribute('disable_v6');
  }
  public set disableV6(value: boolean | cdktf.IResolvable) {
    this._disableV6 = value;
  }
  public resetDisableV6() {
    this._disableV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableV6Input() {
    return this._disableV6;
  }

  // external_connector - computed: false, optional: true, required: false
  private _externalConnector?: boolean | cdktf.IResolvable; 
  public get externalConnector() {
    return this.getBooleanAttribute('external_connector');
  }
  public set externalConnector(value: boolean | cdktf.IResolvable) {
    this._externalConnector = value;
  }
  public resetExternalConnector() {
    this._externalConnector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalConnectorInput() {
    return this._externalConnector;
  }

  // from_site - computed: false, optional: true, required: false
  private _fromSite?: boolean | cdktf.IResolvable; 
  public get fromSite() {
    return this.getBooleanAttribute('from_site');
  }
  public set fromSite(value: boolean | cdktf.IResolvable) {
    this._fromSite = value;
  }
  public resetFromSite() {
    this._fromSite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromSiteInput() {
    return this._fromSite;
  }

  // from_site_v6 - computed: false, optional: true, required: false
  private _fromSiteV6?: boolean | cdktf.IResolvable; 
  public get fromSiteV6() {
    return this.getBooleanAttribute('from_site_v6');
  }
  public set fromSiteV6(value: boolean | cdktf.IResolvable) {
    this._fromSiteV6 = value;
  }
  public resetFromSiteV6() {
    this._fromSiteV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromSiteV6Input() {
    return this._fromSiteV6;
  }

  // inside_interfaces - computed: false, optional: true, required: false
  private _insideInterfaces?: boolean | cdktf.IResolvable; 
  public get insideInterfaces() {
    return this.getBooleanAttribute('inside_interfaces');
  }
  public set insideInterfaces(value: boolean | cdktf.IResolvable) {
    this._insideInterfaces = value;
  }
  public resetInsideInterfaces() {
    this._insideInterfaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideInterfacesInput() {
    return this._insideInterfaces;
  }

  // md5_auth_key - computed: false, optional: true, required: false
  private _md5AuthKey?: string; 
  public get md5AuthKey() {
    return this.getStringAttribute('md5_auth_key');
  }
  public set md5AuthKey(value: string) {
    this._md5AuthKey = value;
  }
  public resetMd5AuthKey() {
    this._md5AuthKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get md5AuthKeyInput() {
    return this._md5AuthKey;
  }

  // no_authentication - computed: false, optional: true, required: false
  private _noAuthentication?: boolean | cdktf.IResolvable; 
  public get noAuthentication() {
    return this.getBooleanAttribute('no_authentication');
  }
  public set noAuthentication(value: boolean | cdktf.IResolvable) {
    this._noAuthentication = value;
  }
  public resetNoAuthentication() {
    this._noAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noAuthenticationInput() {
    return this._noAuthentication;
  }

  // outside_interfaces - computed: false, optional: true, required: false
  private _outsideInterfaces?: boolean | cdktf.IResolvable; 
  public get outsideInterfaces() {
    return this.getBooleanAttribute('outside_interfaces');
  }
  public set outsideInterfaces(value: boolean | cdktf.IResolvable) {
    this._outsideInterfaces = value;
  }
  public resetOutsideInterfaces() {
    this._outsideInterfaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outsideInterfacesInput() {
    return this._outsideInterfaces;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // subnet_begin_offset - computed: false, optional: true, required: false
  private _subnetBeginOffset?: number; 
  public get subnetBeginOffset() {
    return this.getNumberAttribute('subnet_begin_offset');
  }
  public set subnetBeginOffset(value: number) {
    this._subnetBeginOffset = value;
  }
  public resetSubnetBeginOffset() {
    this._subnetBeginOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetBeginOffsetInput() {
    return this._subnetBeginOffset;
  }

  // subnet_begin_offset_v6 - computed: false, optional: true, required: false
  private _subnetBeginOffsetV6?: number; 
  public get subnetBeginOffsetV6() {
    return this.getNumberAttribute('subnet_begin_offset_v6');
  }
  public set subnetBeginOffsetV6(value: number) {
    this._subnetBeginOffsetV6 = value;
  }
  public resetSubnetBeginOffsetV6() {
    this._subnetBeginOffsetV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetBeginOffsetV6Input() {
    return this._subnetBeginOffsetV6;
  }

  // subnet_end_offset - computed: false, optional: true, required: false
  private _subnetEndOffset?: number; 
  public get subnetEndOffset() {
    return this.getNumberAttribute('subnet_end_offset');
  }
  public set subnetEndOffset(value: number) {
    this._subnetEndOffset = value;
  }
  public resetSubnetEndOffset() {
    this._subnetEndOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetEndOffsetInput() {
    return this._subnetEndOffset;
  }

  // subnet_end_offset_v6 - computed: false, optional: true, required: false
  private _subnetEndOffsetV6?: number; 
  public get subnetEndOffsetV6() {
    return this.getNumberAttribute('subnet_end_offset_v6');
  }
  public set subnetEndOffsetV6(value: number) {
    this._subnetEndOffsetV6 = value;
  }
  public resetSubnetEndOffsetV6() {
    this._subnetEndOffsetV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetEndOffsetV6Input() {
    return this._subnetEndOffsetV6;
  }

  // family_inet - computed: false, optional: true, required: false
  private _familyInet = new BgpPeersExternalFamilyInetOutputReference(this, "family_inet");
  public get familyInet() {
    return this._familyInet;
  }
  public putFamilyInet(value: BgpPeersExternalFamilyInet) {
    this._familyInet.internalValue = value;
  }
  public resetFamilyInet() {
    this._familyInet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get familyInetInput() {
    return this._familyInet.internalValue;
  }

  // family_inet_v6 - computed: false, optional: true, required: false
  private _familyInetV6 = new BgpPeersExternalFamilyInetV6OutputReference(this, "family_inet_v6");
  public get familyInetV6() {
    return this._familyInetV6;
  }
  public putFamilyInetV6(value: BgpPeersExternalFamilyInetV6) {
    this._familyInetV6.internalValue = value;
  }
  public resetFamilyInetV6() {
    this._familyInetV6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get familyInetV6Input() {
    return this._familyInetV6.internalValue;
  }

  // interface - computed: false, optional: true, required: false
  private _interface = new BgpPeersExternalInterfaceOutputReference(this, "interface");
  public get interface() {
    return this._interface;
  }
  public putInterface(value: BgpPeersExternalInterface) {
    this._interface.internalValue = value;
  }
  public resetInterface() {
    this._interface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface.internalValue;
  }

  // interface_list - computed: false, optional: true, required: false
  private _interfaceList = new BgpPeersExternalInterfaceListStructOutputReference(this, "interface_list");
  public get interfaceList() {
    return this._interfaceList;
  }
  public putInterfaceList(value: BgpPeersExternalInterfaceListStruct) {
    this._interfaceList.internalValue = value;
  }
  public resetInterfaceList() {
    this._interfaceList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceListInput() {
    return this._interfaceList.internalValue;
  }
}
export interface BgpPeersInternalFamilyInet6Vpn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#disable Bgp#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#enable Bgp#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
}

export function bgpPeersInternalFamilyInet6VpnToTerraform(struct?: BgpPeersInternalFamilyInet6VpnOutputReference | BgpPeersInternalFamilyInet6Vpn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable: cdktf.booleanToTerraform(struct!.disable),
    enable: cdktf.booleanToTerraform(struct!.enable),
  }
}


export function bgpPeersInternalFamilyInet6VpnToHclTerraform(struct?: BgpPeersInternalFamilyInet6VpnOutputReference | BgpPeersInternalFamilyInet6Vpn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class BgpPeersInternalFamilyInet6VpnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BgpPeersInternalFamilyInet6Vpn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpPeersInternalFamilyInet6Vpn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disable = undefined;
      this._enable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disable = value.disable;
      this._enable = value.enable;
    }
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
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
export interface BgpPeersInternalFamilyInetvpnEnable {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#disable Bgp#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#enable Bgp#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
}

export function bgpPeersInternalFamilyInetvpnEnableToTerraform(struct?: BgpPeersInternalFamilyInetvpnEnableOutputReference | BgpPeersInternalFamilyInetvpnEnable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable: cdktf.booleanToTerraform(struct!.disable),
    enable: cdktf.booleanToTerraform(struct!.enable),
  }
}


export function bgpPeersInternalFamilyInetvpnEnableToHclTerraform(struct?: BgpPeersInternalFamilyInetvpnEnableOutputReference | BgpPeersInternalFamilyInetvpnEnable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class BgpPeersInternalFamilyInetvpnEnableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BgpPeersInternalFamilyInetvpnEnable | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpPeersInternalFamilyInetvpnEnable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disable = undefined;
      this._enable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disable = value.disable;
      this._enable = value.enable;
    }
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
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
export interface BgpPeersInternalFamilyInetvpn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#disable Bgp#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#enable Bgp#enable}
  */
  readonly enable?: BgpPeersInternalFamilyInetvpnEnable;
}

export function bgpPeersInternalFamilyInetvpnToTerraform(struct?: BgpPeersInternalFamilyInetvpnOutputReference | BgpPeersInternalFamilyInetvpn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable: cdktf.booleanToTerraform(struct!.disable),
    enable: bgpPeersInternalFamilyInetvpnEnableToTerraform(struct!.enable),
  }
}


export function bgpPeersInternalFamilyInetvpnToHclTerraform(struct?: BgpPeersInternalFamilyInetvpnOutputReference | BgpPeersInternalFamilyInetvpn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable: {
      value: bgpPeersInternalFamilyInetvpnEnableToHclTerraform(struct!.enable),
      isBlock: true,
      type: "list",
      storageClassType: "BgpPeersInternalFamilyInetvpnEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpPeersInternalFamilyInetvpnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BgpPeersInternalFamilyInetvpn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._enable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpPeersInternalFamilyInetvpn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disable = undefined;
      this._enable.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disable = value.disable;
      this._enable.internalValue = value.enable;
    }
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // enable - computed: false, optional: true, required: false
  private _enable = new BgpPeersInternalFamilyInetvpnEnableOutputReference(this, "enable");
  public get enable() {
    return this._enable;
  }
  public putEnable(value: BgpPeersInternalFamilyInetvpnEnable) {
    this._enable.internalValue = value;
  }
  public resetEnable() {
    this._enable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable.internalValue;
  }
}
export interface BgpPeersInternalFamilyRtarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#disable Bgp#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#enable Bgp#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
}

export function bgpPeersInternalFamilyRtargetToTerraform(struct?: BgpPeersInternalFamilyRtargetOutputReference | BgpPeersInternalFamilyRtarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable: cdktf.booleanToTerraform(struct!.disable),
    enable: cdktf.booleanToTerraform(struct!.enable),
  }
}


export function bgpPeersInternalFamilyRtargetToHclTerraform(struct?: BgpPeersInternalFamilyRtargetOutputReference | BgpPeersInternalFamilyRtarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class BgpPeersInternalFamilyRtargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BgpPeersInternalFamilyRtarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpPeersInternalFamilyRtarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disable = undefined;
      this._enable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disable = value.disable;
      this._enable = value.enable;
    }
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
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
export interface BgpPeersInternalFamilyUuidvpn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#disable Bgp#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#enable Bgp#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
}

export function bgpPeersInternalFamilyUuidvpnToTerraform(struct?: BgpPeersInternalFamilyUuidvpnOutputReference | BgpPeersInternalFamilyUuidvpn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable: cdktf.booleanToTerraform(struct!.disable),
    enable: cdktf.booleanToTerraform(struct!.enable),
  }
}


export function bgpPeersInternalFamilyUuidvpnToHclTerraform(struct?: BgpPeersInternalFamilyUuidvpnOutputReference | BgpPeersInternalFamilyUuidvpn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class BgpPeersInternalFamilyUuidvpnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BgpPeersInternalFamilyUuidvpn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpPeersInternalFamilyUuidvpn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disable = undefined;
      this._enable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disable = value.disable;
      this._enable = value.enable;
    }
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
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
export interface BgpPeersInternal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#address Bgp#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#disable_mtls Bgp#disable_mtls}
  */
  readonly disableMtls?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#dns_name Bgp#dns_name}
  */
  readonly dnsName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#enable_mtls Bgp#enable_mtls}
  */
  readonly enableMtls?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#from_site Bgp#from_site}
  */
  readonly fromSite?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#port Bgp#port}
  */
  readonly port?: number;
  /**
  * family_inet6vpn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#family_inet6vpn Bgp#family_inet6vpn}
  */
  readonly familyInet6Vpn?: BgpPeersInternalFamilyInet6Vpn;
  /**
  * family_inetvpn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#family_inetvpn Bgp#family_inetvpn}
  */
  readonly familyInetvpn?: BgpPeersInternalFamilyInetvpn;
  /**
  * family_rtarget block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#family_rtarget Bgp#family_rtarget}
  */
  readonly familyRtarget?: BgpPeersInternalFamilyRtarget;
  /**
  * family_uuidvpn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#family_uuidvpn Bgp#family_uuidvpn}
  */
  readonly familyUuidvpn?: BgpPeersInternalFamilyUuidvpn;
}

export function bgpPeersInternalToTerraform(struct?: BgpPeersInternalOutputReference | BgpPeersInternal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    disable_mtls: cdktf.booleanToTerraform(struct!.disableMtls),
    dns_name: cdktf.stringToTerraform(struct!.dnsName),
    enable_mtls: cdktf.booleanToTerraform(struct!.enableMtls),
    from_site: cdktf.booleanToTerraform(struct!.fromSite),
    port: cdktf.numberToTerraform(struct!.port),
    family_inet6vpn: bgpPeersInternalFamilyInet6VpnToTerraform(struct!.familyInet6Vpn),
    family_inetvpn: bgpPeersInternalFamilyInetvpnToTerraform(struct!.familyInetvpn),
    family_rtarget: bgpPeersInternalFamilyRtargetToTerraform(struct!.familyRtarget),
    family_uuidvpn: bgpPeersInternalFamilyUuidvpnToTerraform(struct!.familyUuidvpn),
  }
}


export function bgpPeersInternalToHclTerraform(struct?: BgpPeersInternalOutputReference | BgpPeersInternal): any {
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
    disable_mtls: {
      value: cdktf.booleanToHclTerraform(struct!.disableMtls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dns_name: {
      value: cdktf.stringToHclTerraform(struct!.dnsName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_mtls: {
      value: cdktf.booleanToHclTerraform(struct!.enableMtls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    from_site: {
      value: cdktf.booleanToHclTerraform(struct!.fromSite),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    family_inet6vpn: {
      value: bgpPeersInternalFamilyInet6VpnToHclTerraform(struct!.familyInet6Vpn),
      isBlock: true,
      type: "list",
      storageClassType: "BgpPeersInternalFamilyInet6VpnList",
    },
    family_inetvpn: {
      value: bgpPeersInternalFamilyInetvpnToHclTerraform(struct!.familyInetvpn),
      isBlock: true,
      type: "list",
      storageClassType: "BgpPeersInternalFamilyInetvpnList",
    },
    family_rtarget: {
      value: bgpPeersInternalFamilyRtargetToHclTerraform(struct!.familyRtarget),
      isBlock: true,
      type: "list",
      storageClassType: "BgpPeersInternalFamilyRtargetList",
    },
    family_uuidvpn: {
      value: bgpPeersInternalFamilyUuidvpnToHclTerraform(struct!.familyUuidvpn),
      isBlock: true,
      type: "list",
      storageClassType: "BgpPeersInternalFamilyUuidvpnList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpPeersInternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BgpPeersInternal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._disableMtls !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableMtls = this._disableMtls;
    }
    if (this._dnsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsName = this._dnsName;
    }
    if (this._enableMtls !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableMtls = this._enableMtls;
    }
    if (this._fromSite !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromSite = this._fromSite;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._familyInet6Vpn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.familyInet6Vpn = this._familyInet6Vpn?.internalValue;
    }
    if (this._familyInetvpn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.familyInetvpn = this._familyInetvpn?.internalValue;
    }
    if (this._familyRtarget?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.familyRtarget = this._familyRtarget?.internalValue;
    }
    if (this._familyUuidvpn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.familyUuidvpn = this._familyUuidvpn?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpPeersInternal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._address = undefined;
      this._disableMtls = undefined;
      this._dnsName = undefined;
      this._enableMtls = undefined;
      this._fromSite = undefined;
      this._port = undefined;
      this._familyInet6Vpn.internalValue = undefined;
      this._familyInetvpn.internalValue = undefined;
      this._familyRtarget.internalValue = undefined;
      this._familyUuidvpn.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._address = value.address;
      this._disableMtls = value.disableMtls;
      this._dnsName = value.dnsName;
      this._enableMtls = value.enableMtls;
      this._fromSite = value.fromSite;
      this._port = value.port;
      this._familyInet6Vpn.internalValue = value.familyInet6Vpn;
      this._familyInetvpn.internalValue = value.familyInetvpn;
      this._familyRtarget.internalValue = value.familyRtarget;
      this._familyUuidvpn.internalValue = value.familyUuidvpn;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // disable_mtls - computed: false, optional: true, required: false
  private _disableMtls?: boolean | cdktf.IResolvable; 
  public get disableMtls() {
    return this.getBooleanAttribute('disable_mtls');
  }
  public set disableMtls(value: boolean | cdktf.IResolvable) {
    this._disableMtls = value;
  }
  public resetDisableMtls() {
    this._disableMtls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableMtlsInput() {
    return this._disableMtls;
  }

  // dns_name - computed: false, optional: true, required: false
  private _dnsName?: string; 
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }
  public set dnsName(value: string) {
    this._dnsName = value;
  }
  public resetDnsName() {
    this._dnsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNameInput() {
    return this._dnsName;
  }

  // enable_mtls - computed: false, optional: true, required: false
  private _enableMtls?: boolean | cdktf.IResolvable; 
  public get enableMtls() {
    return this.getBooleanAttribute('enable_mtls');
  }
  public set enableMtls(value: boolean | cdktf.IResolvable) {
    this._enableMtls = value;
  }
  public resetEnableMtls() {
    this._enableMtls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableMtlsInput() {
    return this._enableMtls;
  }

  // from_site - computed: false, optional: true, required: false
  private _fromSite?: boolean | cdktf.IResolvable; 
  public get fromSite() {
    return this.getBooleanAttribute('from_site');
  }
  public set fromSite(value: boolean | cdktf.IResolvable) {
    this._fromSite = value;
  }
  public resetFromSite() {
    this._fromSite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromSiteInput() {
    return this._fromSite;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // family_inet6vpn - computed: false, optional: true, required: false
  private _familyInet6Vpn = new BgpPeersInternalFamilyInet6VpnOutputReference(this, "family_inet6vpn");
  public get familyInet6Vpn() {
    return this._familyInet6Vpn;
  }
  public putFamilyInet6Vpn(value: BgpPeersInternalFamilyInet6Vpn) {
    this._familyInet6Vpn.internalValue = value;
  }
  public resetFamilyInet6Vpn() {
    this._familyInet6Vpn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get familyInet6VpnInput() {
    return this._familyInet6Vpn.internalValue;
  }

  // family_inetvpn - computed: false, optional: true, required: false
  private _familyInetvpn = new BgpPeersInternalFamilyInetvpnOutputReference(this, "family_inetvpn");
  public get familyInetvpn() {
    return this._familyInetvpn;
  }
  public putFamilyInetvpn(value: BgpPeersInternalFamilyInetvpn) {
    this._familyInetvpn.internalValue = value;
  }
  public resetFamilyInetvpn() {
    this._familyInetvpn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get familyInetvpnInput() {
    return this._familyInetvpn.internalValue;
  }

  // family_rtarget - computed: false, optional: true, required: false
  private _familyRtarget = new BgpPeersInternalFamilyRtargetOutputReference(this, "family_rtarget");
  public get familyRtarget() {
    return this._familyRtarget;
  }
  public putFamilyRtarget(value: BgpPeersInternalFamilyRtarget) {
    this._familyRtarget.internalValue = value;
  }
  public resetFamilyRtarget() {
    this._familyRtarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get familyRtargetInput() {
    return this._familyRtarget.internalValue;
  }

  // family_uuidvpn - computed: false, optional: true, required: false
  private _familyUuidvpn = new BgpPeersInternalFamilyUuidvpnOutputReference(this, "family_uuidvpn");
  public get familyUuidvpn() {
    return this._familyUuidvpn;
  }
  public putFamilyUuidvpn(value: BgpPeersInternalFamilyUuidvpn) {
    this._familyUuidvpn.internalValue = value;
  }
  public resetFamilyUuidvpn() {
    this._familyUuidvpn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get familyUuidvpnInput() {
    return this._familyUuidvpn.internalValue;
  }
}
export interface BgpPeersMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#description Bgp#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#disable Bgp#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#name Bgp#name}
  */
  readonly name: string;
}

export function bgpPeersMetadataToTerraform(struct?: BgpPeersMetadataOutputReference | BgpPeersMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    disable: cdktf.booleanToTerraform(struct!.disable),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function bgpPeersMetadataToHclTerraform(struct?: BgpPeersMetadataOutputReference | BgpPeersMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpPeersMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BgpPeersMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpPeersMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._disable = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._disable = value.disable;
      this._name = value.name;
    }
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

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
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
}
export interface BgpPeersRoutingPoliciesRoutePolicyNodeName {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#node Bgp#node}
  */
  readonly nodeAttribute?: string[];
}

export function bgpPeersRoutingPoliciesRoutePolicyNodeNameToTerraform(struct?: BgpPeersRoutingPoliciesRoutePolicyNodeNameOutputReference | BgpPeersRoutingPoliciesRoutePolicyNodeName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nodeAttribute),
  }
}


export function bgpPeersRoutingPoliciesRoutePolicyNodeNameToHclTerraform(struct?: BgpPeersRoutingPoliciesRoutePolicyNodeNameOutputReference | BgpPeersRoutingPoliciesRoutePolicyNodeName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nodeAttribute),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpPeersRoutingPoliciesRoutePolicyNodeNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BgpPeersRoutingPoliciesRoutePolicyNodeName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._node !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAttribute = this._node;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpPeersRoutingPoliciesRoutePolicyNodeName | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._node = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._node = value.nodeAttribute;
    }
  }

  // node - computed: false, optional: true, required: false
  private _node?: string[]; 
  public get nodeAttribute() {
    return this.getListAttribute('node');
  }
  public set nodeAttribute(value: string[]) {
    this._node = value;
  }
  public resetNodeAttribute() {
    this._node = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAttributeInput() {
    return this._node;
  }
}
export interface BgpPeersRoutingPoliciesRoutePolicyObjectRefs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#name Bgp#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#namespace Bgp#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#tenant Bgp#tenant}
  */
  readonly tenant?: string;
}

export function bgpPeersRoutingPoliciesRoutePolicyObjectRefsToTerraform(struct?: BgpPeersRoutingPoliciesRoutePolicyObjectRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function bgpPeersRoutingPoliciesRoutePolicyObjectRefsToHclTerraform(struct?: BgpPeersRoutingPoliciesRoutePolicyObjectRefs | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpPeersRoutingPoliciesRoutePolicyObjectRefsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BgpPeersRoutingPoliciesRoutePolicyObjectRefs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpPeersRoutingPoliciesRoutePolicyObjectRefs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class BgpPeersRoutingPoliciesRoutePolicyObjectRefsList extends cdktf.ComplexList {
  public internalValue? : BgpPeersRoutingPoliciesRoutePolicyObjectRefs[] | cdktf.IResolvable

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
  public get(index: number): BgpPeersRoutingPoliciesRoutePolicyObjectRefsOutputReference {
    return new BgpPeersRoutingPoliciesRoutePolicyObjectRefsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BgpPeersRoutingPoliciesRoutePolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#all_nodes Bgp#all_nodes}
  */
  readonly allNodes?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#inbound Bgp#inbound}
  */
  readonly inbound?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#outbound Bgp#outbound}
  */
  readonly outbound?: boolean | cdktf.IResolvable;
  /**
  * node_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#node_name Bgp#node_name}
  */
  readonly nodeName?: BgpPeersRoutingPoliciesRoutePolicyNodeName;
  /**
  * object_refs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#object_refs Bgp#object_refs}
  */
  readonly objectRefs: BgpPeersRoutingPoliciesRoutePolicyObjectRefs[] | cdktf.IResolvable;
}

export function bgpPeersRoutingPoliciesRoutePolicyToTerraform(struct?: BgpPeersRoutingPoliciesRoutePolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_nodes: cdktf.booleanToTerraform(struct!.allNodes),
    inbound: cdktf.booleanToTerraform(struct!.inbound),
    outbound: cdktf.booleanToTerraform(struct!.outbound),
    node_name: bgpPeersRoutingPoliciesRoutePolicyNodeNameToTerraform(struct!.nodeName),
    object_refs: cdktf.listMapper(bgpPeersRoutingPoliciesRoutePolicyObjectRefsToTerraform, true)(struct!.objectRefs),
  }
}


export function bgpPeersRoutingPoliciesRoutePolicyToHclTerraform(struct?: BgpPeersRoutingPoliciesRoutePolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_nodes: {
      value: cdktf.booleanToHclTerraform(struct!.allNodes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    inbound: {
      value: cdktf.booleanToHclTerraform(struct!.inbound),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    outbound: {
      value: cdktf.booleanToHclTerraform(struct!.outbound),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    node_name: {
      value: bgpPeersRoutingPoliciesRoutePolicyNodeNameToHclTerraform(struct!.nodeName),
      isBlock: true,
      type: "list",
      storageClassType: "BgpPeersRoutingPoliciesRoutePolicyNodeNameList",
    },
    object_refs: {
      value: cdktf.listMapperHcl(bgpPeersRoutingPoliciesRoutePolicyObjectRefsToHclTerraform, true)(struct!.objectRefs),
      isBlock: true,
      type: "list",
      storageClassType: "BgpPeersRoutingPoliciesRoutePolicyObjectRefsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpPeersRoutingPoliciesRoutePolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BgpPeersRoutingPoliciesRoutePolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allNodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.allNodes = this._allNodes;
    }
    if (this._inbound !== undefined) {
      hasAnyValues = true;
      internalValueResult.inbound = this._inbound;
    }
    if (this._outbound !== undefined) {
      hasAnyValues = true;
      internalValueResult.outbound = this._outbound;
    }
    if (this._nodeName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeName = this._nodeName?.internalValue;
    }
    if (this._objectRefs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectRefs = this._objectRefs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpPeersRoutingPoliciesRoutePolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allNodes = undefined;
      this._inbound = undefined;
      this._outbound = undefined;
      this._nodeName.internalValue = undefined;
      this._objectRefs.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allNodes = value.allNodes;
      this._inbound = value.inbound;
      this._outbound = value.outbound;
      this._nodeName.internalValue = value.nodeName;
      this._objectRefs.internalValue = value.objectRefs;
    }
  }

  // all_nodes - computed: false, optional: true, required: false
  private _allNodes?: boolean | cdktf.IResolvable; 
  public get allNodes() {
    return this.getBooleanAttribute('all_nodes');
  }
  public set allNodes(value: boolean | cdktf.IResolvable) {
    this._allNodes = value;
  }
  public resetAllNodes() {
    this._allNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allNodesInput() {
    return this._allNodes;
  }

  // inbound - computed: false, optional: true, required: false
  private _inbound?: boolean | cdktf.IResolvable; 
  public get inbound() {
    return this.getBooleanAttribute('inbound');
  }
  public set inbound(value: boolean | cdktf.IResolvable) {
    this._inbound = value;
  }
  public resetInbound() {
    this._inbound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundInput() {
    return this._inbound;
  }

  // outbound - computed: false, optional: true, required: false
  private _outbound?: boolean | cdktf.IResolvable; 
  public get outbound() {
    return this.getBooleanAttribute('outbound');
  }
  public set outbound(value: boolean | cdktf.IResolvable) {
    this._outbound = value;
  }
  public resetOutbound() {
    this._outbound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundInput() {
    return this._outbound;
  }

  // node_name - computed: false, optional: true, required: false
  private _nodeName = new BgpPeersRoutingPoliciesRoutePolicyNodeNameOutputReference(this, "node_name");
  public get nodeName() {
    return this._nodeName;
  }
  public putNodeName(value: BgpPeersRoutingPoliciesRoutePolicyNodeName) {
    this._nodeName.internalValue = value;
  }
  public resetNodeName() {
    this._nodeName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeNameInput() {
    return this._nodeName.internalValue;
  }

  // object_refs - computed: false, optional: false, required: true
  private _objectRefs = new BgpPeersRoutingPoliciesRoutePolicyObjectRefsList(this, "object_refs", false);
  public get objectRefs() {
    return this._objectRefs;
  }
  public putObjectRefs(value: BgpPeersRoutingPoliciesRoutePolicyObjectRefs[] | cdktf.IResolvable) {
    this._objectRefs.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectRefsInput() {
    return this._objectRefs.internalValue;
  }
}

export class BgpPeersRoutingPoliciesRoutePolicyList extends cdktf.ComplexList {
  public internalValue? : BgpPeersRoutingPoliciesRoutePolicy[] | cdktf.IResolvable

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
  public get(index: number): BgpPeersRoutingPoliciesRoutePolicyOutputReference {
    return new BgpPeersRoutingPoliciesRoutePolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BgpPeersRoutingPolicies {
  /**
  * route_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#route_policy Bgp#route_policy}
  */
  readonly routePolicy?: BgpPeersRoutingPoliciesRoutePolicy[] | cdktf.IResolvable;
}

export function bgpPeersRoutingPoliciesToTerraform(struct?: BgpPeersRoutingPoliciesOutputReference | BgpPeersRoutingPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    route_policy: cdktf.listMapper(bgpPeersRoutingPoliciesRoutePolicyToTerraform, true)(struct!.routePolicy),
  }
}


export function bgpPeersRoutingPoliciesToHclTerraform(struct?: BgpPeersRoutingPoliciesOutputReference | BgpPeersRoutingPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    route_policy: {
      value: cdktf.listMapperHcl(bgpPeersRoutingPoliciesRoutePolicyToHclTerraform, true)(struct!.routePolicy),
      isBlock: true,
      type: "list",
      storageClassType: "BgpPeersRoutingPoliciesRoutePolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpPeersRoutingPoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BgpPeersRoutingPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._routePolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routePolicy = this._routePolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpPeersRoutingPolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._routePolicy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._routePolicy.internalValue = value.routePolicy;
    }
  }

  // route_policy - computed: false, optional: true, required: false
  private _routePolicy = new BgpPeersRoutingPoliciesRoutePolicyList(this, "route_policy", false);
  public get routePolicy() {
    return this._routePolicy;
  }
  public putRoutePolicy(value: BgpPeersRoutingPoliciesRoutePolicy[] | cdktf.IResolvable) {
    this._routePolicy.internalValue = value;
  }
  public resetRoutePolicy() {
    this._routePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routePolicyInput() {
    return this._routePolicy.internalValue;
  }
}
export interface BgpPeers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#bfd_disabled Bgp#bfd_disabled}
  */
  readonly bfdDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#disable Bgp#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#label Bgp#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#passive_mode_disabled Bgp#passive_mode_disabled}
  */
  readonly passiveModeDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#passive_mode_enabled Bgp#passive_mode_enabled}
  */
  readonly passiveModeEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#target_service Bgp#target_service}
  */
  readonly targetService?: string;
  /**
  * bfd_enabled block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#bfd_enabled Bgp#bfd_enabled}
  */
  readonly bfdEnabled?: BgpPeersBfdEnabled;
  /**
  * external block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#external Bgp#external}
  */
  readonly external?: BgpPeersExternal;
  /**
  * internal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#internal Bgp#internal}
  */
  readonly internal?: BgpPeersInternal;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#metadata Bgp#metadata}
  */
  readonly metadata: BgpPeersMetadata;
  /**
  * routing_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#routing_policies Bgp#routing_policies}
  */
  readonly routingPolicies?: BgpPeersRoutingPolicies;
}

export function bgpPeersToTerraform(struct?: BgpPeers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bfd_disabled: cdktf.booleanToTerraform(struct!.bfdDisabled),
    disable: cdktf.booleanToTerraform(struct!.disable),
    label: cdktf.stringToTerraform(struct!.label),
    passive_mode_disabled: cdktf.booleanToTerraform(struct!.passiveModeDisabled),
    passive_mode_enabled: cdktf.booleanToTerraform(struct!.passiveModeEnabled),
    target_service: cdktf.stringToTerraform(struct!.targetService),
    bfd_enabled: bgpPeersBfdEnabledToTerraform(struct!.bfdEnabled),
    external: bgpPeersExternalToTerraform(struct!.external),
    internal: bgpPeersInternalToTerraform(struct!.internal),
    metadata: bgpPeersMetadataToTerraform(struct!.metadata),
    routing_policies: bgpPeersRoutingPoliciesToTerraform(struct!.routingPolicies),
  }
}


export function bgpPeersToHclTerraform(struct?: BgpPeers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bfd_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.bfdDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    passive_mode_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.passiveModeDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    passive_mode_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.passiveModeEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    target_service: {
      value: cdktf.stringToHclTerraform(struct!.targetService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bfd_enabled: {
      value: bgpPeersBfdEnabledToHclTerraform(struct!.bfdEnabled),
      isBlock: true,
      type: "list",
      storageClassType: "BgpPeersBfdEnabledList",
    },
    external: {
      value: bgpPeersExternalToHclTerraform(struct!.external),
      isBlock: true,
      type: "list",
      storageClassType: "BgpPeersExternalList",
    },
    internal: {
      value: bgpPeersInternalToHclTerraform(struct!.internal),
      isBlock: true,
      type: "list",
      storageClassType: "BgpPeersInternalList",
    },
    metadata: {
      value: bgpPeersMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "BgpPeersMetadataList",
    },
    routing_policies: {
      value: bgpPeersRoutingPoliciesToHclTerraform(struct!.routingPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "BgpPeersRoutingPoliciesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpPeersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BgpPeers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bfdDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfdDisabled = this._bfdDisabled;
    }
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._passiveModeDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.passiveModeDisabled = this._passiveModeDisabled;
    }
    if (this._passiveModeEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.passiveModeEnabled = this._passiveModeEnabled;
    }
    if (this._targetService !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetService = this._targetService;
    }
    if (this._bfdEnabled?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfdEnabled = this._bfdEnabled?.internalValue;
    }
    if (this._external?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.external = this._external?.internalValue;
    }
    if (this._internal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.internal = this._internal?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._routingPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingPolicies = this._routingPolicies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpPeers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bfdDisabled = undefined;
      this._disable = undefined;
      this._label = undefined;
      this._passiveModeDisabled = undefined;
      this._passiveModeEnabled = undefined;
      this._targetService = undefined;
      this._bfdEnabled.internalValue = undefined;
      this._external.internalValue = undefined;
      this._internal.internalValue = undefined;
      this._metadata.internalValue = undefined;
      this._routingPolicies.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bfdDisabled = value.bfdDisabled;
      this._disable = value.disable;
      this._label = value.label;
      this._passiveModeDisabled = value.passiveModeDisabled;
      this._passiveModeEnabled = value.passiveModeEnabled;
      this._targetService = value.targetService;
      this._bfdEnabled.internalValue = value.bfdEnabled;
      this._external.internalValue = value.external;
      this._internal.internalValue = value.internal;
      this._metadata.internalValue = value.metadata;
      this._routingPolicies.internalValue = value.routingPolicies;
    }
  }

  // bfd_disabled - computed: false, optional: true, required: false
  private _bfdDisabled?: boolean | cdktf.IResolvable; 
  public get bfdDisabled() {
    return this.getBooleanAttribute('bfd_disabled');
  }
  public set bfdDisabled(value: boolean | cdktf.IResolvable) {
    this._bfdDisabled = value;
  }
  public resetBfdDisabled() {
    this._bfdDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdDisabledInput() {
    return this._bfdDisabled;
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // passive_mode_disabled - computed: false, optional: true, required: false
  private _passiveModeDisabled?: boolean | cdktf.IResolvable; 
  public get passiveModeDisabled() {
    return this.getBooleanAttribute('passive_mode_disabled');
  }
  public set passiveModeDisabled(value: boolean | cdktf.IResolvable) {
    this._passiveModeDisabled = value;
  }
  public resetPassiveModeDisabled() {
    this._passiveModeDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passiveModeDisabledInput() {
    return this._passiveModeDisabled;
  }

  // passive_mode_enabled - computed: false, optional: true, required: false
  private _passiveModeEnabled?: boolean | cdktf.IResolvable; 
  public get passiveModeEnabled() {
    return this.getBooleanAttribute('passive_mode_enabled');
  }
  public set passiveModeEnabled(value: boolean | cdktf.IResolvable) {
    this._passiveModeEnabled = value;
  }
  public resetPassiveModeEnabled() {
    this._passiveModeEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passiveModeEnabledInput() {
    return this._passiveModeEnabled;
  }

  // target_service - computed: false, optional: true, required: false
  private _targetService?: string; 
  public get targetService() {
    return this.getStringAttribute('target_service');
  }
  public set targetService(value: string) {
    this._targetService = value;
  }
  public resetTargetService() {
    this._targetService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetServiceInput() {
    return this._targetService;
  }

  // bfd_enabled - computed: false, optional: true, required: false
  private _bfdEnabled = new BgpPeersBfdEnabledOutputReference(this, "bfd_enabled");
  public get bfdEnabled() {
    return this._bfdEnabled;
  }
  public putBfdEnabled(value: BgpPeersBfdEnabled) {
    this._bfdEnabled.internalValue = value;
  }
  public resetBfdEnabled() {
    this._bfdEnabled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdEnabledInput() {
    return this._bfdEnabled.internalValue;
  }

  // external - computed: false, optional: true, required: false
  private _external = new BgpPeersExternalOutputReference(this, "external");
  public get external() {
    return this._external;
  }
  public putExternal(value: BgpPeersExternal) {
    this._external.internalValue = value;
  }
  public resetExternal() {
    this._external.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalInput() {
    return this._external.internalValue;
  }

  // internal - computed: false, optional: true, required: false
  private _internal = new BgpPeersInternalOutputReference(this, "internal");
  public get internal() {
    return this._internal;
  }
  public putInternal(value: BgpPeersInternal) {
    this._internal.internalValue = value;
  }
  public resetInternal() {
    this._internal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalInput() {
    return this._internal.internalValue;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new BgpPeersMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: BgpPeersMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // routing_policies - computed: false, optional: true, required: false
  private _routingPolicies = new BgpPeersRoutingPoliciesOutputReference(this, "routing_policies");
  public get routingPolicies() {
    return this._routingPolicies;
  }
  public putRoutingPolicies(value: BgpPeersRoutingPolicies) {
    this._routingPolicies.internalValue = value;
  }
  public resetRoutingPolicies() {
    this._routingPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingPoliciesInput() {
    return this._routingPolicies.internalValue;
  }
}

export class BgpPeersList extends cdktf.ComplexList {
  public internalValue? : BgpPeers[] | cdktf.IResolvable

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
  public get(index: number): BgpPeersOutputReference {
    return new BgpPeersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BgpWhereSiteRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#name Bgp#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#namespace Bgp#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#tenant Bgp#tenant}
  */
  readonly tenant?: string;
}

export function bgpWhereSiteRefToTerraform(struct?: BgpWhereSiteRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function bgpWhereSiteRefToHclTerraform(struct?: BgpWhereSiteRef | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpWhereSiteRefOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BgpWhereSiteRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpWhereSiteRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class BgpWhereSiteRefList extends cdktf.ComplexList {
  public internalValue? : BgpWhereSiteRef[] | cdktf.IResolvable

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
  public get(index: number): BgpWhereSiteRefOutputReference {
    return new BgpWhereSiteRefOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BgpWhereSiteRefs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#name Bgp#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#namespace Bgp#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#tenant Bgp#tenant}
  */
  readonly tenant?: string;
}

export function bgpWhereSiteRefsToTerraform(struct?: BgpWhereSiteRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function bgpWhereSiteRefsToHclTerraform(struct?: BgpWhereSiteRefs | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpWhereSiteRefsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BgpWhereSiteRefs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpWhereSiteRefs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class BgpWhereSiteRefsList extends cdktf.ComplexList {
  public internalValue? : BgpWhereSiteRefs[] | cdktf.IResolvable

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
  public get(index: number): BgpWhereSiteRefsOutputReference {
    return new BgpWhereSiteRefsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BgpWhereSite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#disable_internet_vip Bgp#disable_internet_vip}
  */
  readonly disableInternetVip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#enable_internet_vip Bgp#enable_internet_vip}
  */
  readonly enableInternetVip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#network_type Bgp#network_type}
  */
  readonly networkType?: string;
  /**
  * ref block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#ref Bgp#ref}
  */
  readonly ref: BgpWhereSiteRef[] | cdktf.IResolvable;
  /**
  * refs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#refs Bgp#refs}
  */
  readonly refs?: BgpWhereSiteRefs[] | cdktf.IResolvable;
}

export function bgpWhereSiteToTerraform(struct?: BgpWhereSiteOutputReference | BgpWhereSite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_internet_vip: cdktf.booleanToTerraform(struct!.disableInternetVip),
    enable_internet_vip: cdktf.booleanToTerraform(struct!.enableInternetVip),
    network_type: cdktf.stringToTerraform(struct!.networkType),
    ref: cdktf.listMapper(bgpWhereSiteRefToTerraform, true)(struct!.ref),
    refs: cdktf.listMapper(bgpWhereSiteRefsToTerraform, true)(struct!.refs),
  }
}


export function bgpWhereSiteToHclTerraform(struct?: BgpWhereSiteOutputReference | BgpWhereSite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_internet_vip: {
      value: cdktf.booleanToHclTerraform(struct!.disableInternetVip),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_internet_vip: {
      value: cdktf.booleanToHclTerraform(struct!.enableInternetVip),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    network_type: {
      value: cdktf.stringToHclTerraform(struct!.networkType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ref: {
      value: cdktf.listMapperHcl(bgpWhereSiteRefToHclTerraform, true)(struct!.ref),
      isBlock: true,
      type: "list",
      storageClassType: "BgpWhereSiteRefList",
    },
    refs: {
      value: cdktf.listMapperHcl(bgpWhereSiteRefsToHclTerraform, true)(struct!.refs),
      isBlock: true,
      type: "list",
      storageClassType: "BgpWhereSiteRefsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpWhereSiteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BgpWhereSite | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableInternetVip !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableInternetVip = this._disableInternetVip;
    }
    if (this._enableInternetVip !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableInternetVip = this._enableInternetVip;
    }
    if (this._networkType !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkType = this._networkType;
    }
    if (this._ref?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ref = this._ref?.internalValue;
    }
    if (this._refs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.refs = this._refs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpWhereSite | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableInternetVip = undefined;
      this._enableInternetVip = undefined;
      this._networkType = undefined;
      this._ref.internalValue = undefined;
      this._refs.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableInternetVip = value.disableInternetVip;
      this._enableInternetVip = value.enableInternetVip;
      this._networkType = value.networkType;
      this._ref.internalValue = value.ref;
      this._refs.internalValue = value.refs;
    }
  }

  // disable_internet_vip - computed: false, optional: true, required: false
  private _disableInternetVip?: boolean | cdktf.IResolvable; 
  public get disableInternetVip() {
    return this.getBooleanAttribute('disable_internet_vip');
  }
  public set disableInternetVip(value: boolean | cdktf.IResolvable) {
    this._disableInternetVip = value;
  }
  public resetDisableInternetVip() {
    this._disableInternetVip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInternetVipInput() {
    return this._disableInternetVip;
  }

  // enable_internet_vip - computed: false, optional: true, required: false
  private _enableInternetVip?: boolean | cdktf.IResolvable; 
  public get enableInternetVip() {
    return this.getBooleanAttribute('enable_internet_vip');
  }
  public set enableInternetVip(value: boolean | cdktf.IResolvable) {
    this._enableInternetVip = value;
  }
  public resetEnableInternetVip() {
    this._enableInternetVip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInternetVipInput() {
    return this._enableInternetVip;
  }

  // network_type - computed: false, optional: true, required: false
  private _networkType?: string; 
  public get networkType() {
    return this.getStringAttribute('network_type');
  }
  public set networkType(value: string) {
    this._networkType = value;
  }
  public resetNetworkType() {
    this._networkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTypeInput() {
    return this._networkType;
  }

  // ref - computed: false, optional: false, required: true
  private _ref = new BgpWhereSiteRefList(this, "ref", false);
  public get ref() {
    return this._ref;
  }
  public putRef(value: BgpWhereSiteRef[] | cdktf.IResolvable) {
    this._ref.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get refInput() {
    return this._ref.internalValue;
  }

  // refs - computed: false, optional: true, required: false
  private _refs = new BgpWhereSiteRefsList(this, "refs", false);
  public get refs() {
    return this._refs;
  }
  public putRefs(value: BgpWhereSiteRefs[] | cdktf.IResolvable) {
    this._refs.internalValue = value;
  }
  public resetRefs() {
    this._refs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refsInput() {
    return this._refs.internalValue;
  }
}
export interface BgpWhereVirtualSiteRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#name Bgp#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#namespace Bgp#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#tenant Bgp#tenant}
  */
  readonly tenant?: string;
}

export function bgpWhereVirtualSiteRefToTerraform(struct?: BgpWhereVirtualSiteRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function bgpWhereVirtualSiteRefToHclTerraform(struct?: BgpWhereVirtualSiteRef | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpWhereVirtualSiteRefOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BgpWhereVirtualSiteRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpWhereVirtualSiteRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class BgpWhereVirtualSiteRefList extends cdktf.ComplexList {
  public internalValue? : BgpWhereVirtualSiteRef[] | cdktf.IResolvable

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
  public get(index: number): BgpWhereVirtualSiteRefOutputReference {
    return new BgpWhereVirtualSiteRefOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BgpWhereVirtualSiteRefs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#name Bgp#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#namespace Bgp#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#tenant Bgp#tenant}
  */
  readonly tenant?: string;
}

export function bgpWhereVirtualSiteRefsToTerraform(struct?: BgpWhereVirtualSiteRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function bgpWhereVirtualSiteRefsToHclTerraform(struct?: BgpWhereVirtualSiteRefs | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpWhereVirtualSiteRefsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BgpWhereVirtualSiteRefs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpWhereVirtualSiteRefs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class BgpWhereVirtualSiteRefsList extends cdktf.ComplexList {
  public internalValue? : BgpWhereVirtualSiteRefs[] | cdktf.IResolvable

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
  public get(index: number): BgpWhereVirtualSiteRefsOutputReference {
    return new BgpWhereVirtualSiteRefsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BgpWhereVirtualSite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#disable_internet_vip Bgp#disable_internet_vip}
  */
  readonly disableInternetVip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#enable_internet_vip Bgp#enable_internet_vip}
  */
  readonly enableInternetVip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#network_type Bgp#network_type}
  */
  readonly networkType?: string;
  /**
  * ref block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#ref Bgp#ref}
  */
  readonly ref: BgpWhereVirtualSiteRef[] | cdktf.IResolvable;
  /**
  * refs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#refs Bgp#refs}
  */
  readonly refs?: BgpWhereVirtualSiteRefs[] | cdktf.IResolvable;
}

export function bgpWhereVirtualSiteToTerraform(struct?: BgpWhereVirtualSiteOutputReference | BgpWhereVirtualSite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_internet_vip: cdktf.booleanToTerraform(struct!.disableInternetVip),
    enable_internet_vip: cdktf.booleanToTerraform(struct!.enableInternetVip),
    network_type: cdktf.stringToTerraform(struct!.networkType),
    ref: cdktf.listMapper(bgpWhereVirtualSiteRefToTerraform, true)(struct!.ref),
    refs: cdktf.listMapper(bgpWhereVirtualSiteRefsToTerraform, true)(struct!.refs),
  }
}


export function bgpWhereVirtualSiteToHclTerraform(struct?: BgpWhereVirtualSiteOutputReference | BgpWhereVirtualSite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_internet_vip: {
      value: cdktf.booleanToHclTerraform(struct!.disableInternetVip),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_internet_vip: {
      value: cdktf.booleanToHclTerraform(struct!.enableInternetVip),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    network_type: {
      value: cdktf.stringToHclTerraform(struct!.networkType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ref: {
      value: cdktf.listMapperHcl(bgpWhereVirtualSiteRefToHclTerraform, true)(struct!.ref),
      isBlock: true,
      type: "list",
      storageClassType: "BgpWhereVirtualSiteRefList",
    },
    refs: {
      value: cdktf.listMapperHcl(bgpWhereVirtualSiteRefsToHclTerraform, true)(struct!.refs),
      isBlock: true,
      type: "list",
      storageClassType: "BgpWhereVirtualSiteRefsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpWhereVirtualSiteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BgpWhereVirtualSite | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableInternetVip !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableInternetVip = this._disableInternetVip;
    }
    if (this._enableInternetVip !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableInternetVip = this._enableInternetVip;
    }
    if (this._networkType !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkType = this._networkType;
    }
    if (this._ref?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ref = this._ref?.internalValue;
    }
    if (this._refs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.refs = this._refs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpWhereVirtualSite | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableInternetVip = undefined;
      this._enableInternetVip = undefined;
      this._networkType = undefined;
      this._ref.internalValue = undefined;
      this._refs.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableInternetVip = value.disableInternetVip;
      this._enableInternetVip = value.enableInternetVip;
      this._networkType = value.networkType;
      this._ref.internalValue = value.ref;
      this._refs.internalValue = value.refs;
    }
  }

  // disable_internet_vip - computed: false, optional: true, required: false
  private _disableInternetVip?: boolean | cdktf.IResolvable; 
  public get disableInternetVip() {
    return this.getBooleanAttribute('disable_internet_vip');
  }
  public set disableInternetVip(value: boolean | cdktf.IResolvable) {
    this._disableInternetVip = value;
  }
  public resetDisableInternetVip() {
    this._disableInternetVip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInternetVipInput() {
    return this._disableInternetVip;
  }

  // enable_internet_vip - computed: false, optional: true, required: false
  private _enableInternetVip?: boolean | cdktf.IResolvable; 
  public get enableInternetVip() {
    return this.getBooleanAttribute('enable_internet_vip');
  }
  public set enableInternetVip(value: boolean | cdktf.IResolvable) {
    this._enableInternetVip = value;
  }
  public resetEnableInternetVip() {
    this._enableInternetVip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInternetVipInput() {
    return this._enableInternetVip;
  }

  // network_type - computed: false, optional: true, required: false
  private _networkType?: string; 
  public get networkType() {
    return this.getStringAttribute('network_type');
  }
  public set networkType(value: string) {
    this._networkType = value;
  }
  public resetNetworkType() {
    this._networkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTypeInput() {
    return this._networkType;
  }

  // ref - computed: false, optional: false, required: true
  private _ref = new BgpWhereVirtualSiteRefList(this, "ref", false);
  public get ref() {
    return this._ref;
  }
  public putRef(value: BgpWhereVirtualSiteRef[] | cdktf.IResolvable) {
    this._ref.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get refInput() {
    return this._ref.internalValue;
  }

  // refs - computed: false, optional: true, required: false
  private _refs = new BgpWhereVirtualSiteRefsList(this, "refs", false);
  public get refs() {
    return this._refs;
  }
  public putRefs(value: BgpWhereVirtualSiteRefs[] | cdktf.IResolvable) {
    this._refs.internalValue = value;
  }
  public resetRefs() {
    this._refs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refsInput() {
    return this._refs.internalValue;
  }
}
export interface BgpWhere {
  /**
  * site block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#site Bgp#site}
  */
  readonly site?: BgpWhereSite;
  /**
  * virtual_site block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#virtual_site Bgp#virtual_site}
  */
  readonly virtualSite?: BgpWhereVirtualSite;
}

export function bgpWhereToTerraform(struct?: BgpWhereOutputReference | BgpWhere): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    site: bgpWhereSiteToTerraform(struct!.site),
    virtual_site: bgpWhereVirtualSiteToTerraform(struct!.virtualSite),
  }
}


export function bgpWhereToHclTerraform(struct?: BgpWhereOutputReference | BgpWhere): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    site: {
      value: bgpWhereSiteToHclTerraform(struct!.site),
      isBlock: true,
      type: "list",
      storageClassType: "BgpWhereSiteList",
    },
    virtual_site: {
      value: bgpWhereVirtualSiteToHclTerraform(struct!.virtualSite),
      isBlock: true,
      type: "list",
      storageClassType: "BgpWhereVirtualSiteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpWhereOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BgpWhere | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._site?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.site = this._site?.internalValue;
    }
    if (this._virtualSite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualSite = this._virtualSite?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpWhere | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._site.internalValue = undefined;
      this._virtualSite.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._site.internalValue = value.site;
      this._virtualSite.internalValue = value.virtualSite;
    }
  }

  // site - computed: false, optional: true, required: false
  private _site = new BgpWhereSiteOutputReference(this, "site");
  public get site() {
    return this._site;
  }
  public putSite(value: BgpWhereSite) {
    this._site.internalValue = value;
  }
  public resetSite() {
    this._site.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteInput() {
    return this._site.internalValue;
  }

  // virtual_site - computed: false, optional: true, required: false
  private _virtualSite = new BgpWhereVirtualSiteOutputReference(this, "virtual_site");
  public get virtualSite() {
    return this._virtualSite;
  }
  public putVirtualSite(value: BgpWhereVirtualSite) {
    this._virtualSite.internalValue = value;
  }
  public resetVirtualSite() {
    this._virtualSite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualSiteInput() {
    return this._virtualSite.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp volterra_bgp}
*/
export class Bgp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "volterra_bgp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Bgp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Bgp to import
  * @param importFromId The id of the existing Bgp that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Bgp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra_bgp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/bgp volterra_bgp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BgpConfig
  */
  public constructor(scope: Construct, id: string, config: BgpConfig) {
    super(scope, id, {
      terraformResourceType: 'volterra_bgp',
      terraformGeneratorMetadata: {
        providerName: 'volterra',
        providerVersion: '0.11.45',
        providerVersionConstraint: '0.11.45'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotations = config.annotations;
    this._description = config.description;
    this._disable = config.disable;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._namespace = config.namespace;
    this._bgpParameters.internalValue = config.bgpParameters;
    this._peers.internalValue = config.peers;
    this._where.internalValue = config.where;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
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

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // bgp_parameters - computed: false, optional: false, required: true
  private _bgpParameters = new BgpBgpParametersOutputReference(this, "bgp_parameters");
  public get bgpParameters() {
    return this._bgpParameters;
  }
  public putBgpParameters(value: BgpBgpParameters) {
    this._bgpParameters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpParametersInput() {
    return this._bgpParameters.internalValue;
  }

  // peers - computed: false, optional: false, required: true
  private _peers = new BgpPeersList(this, "peers", false);
  public get peers() {
    return this._peers;
  }
  public putPeers(value: BgpPeers[] | cdktf.IResolvable) {
    this._peers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peersInput() {
    return this._peers.internalValue;
  }

  // where - computed: false, optional: false, required: true
  private _where = new BgpWhereOutputReference(this, "where");
  public get where() {
    return this._where;
  }
  public putWhere(value: BgpWhere) {
    this._where.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get whereInput() {
    return this._where.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      description: cdktf.stringToTerraform(this._description),
      disable: cdktf.booleanToTerraform(this._disable),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      bgp_parameters: bgpBgpParametersToTerraform(this._bgpParameters.internalValue),
      peers: cdktf.listMapper(bgpPeersToTerraform, true)(this._peers.internalValue),
      where: bgpWhereToTerraform(this._where.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable: {
        value: cdktf.booleanToHclTerraform(this._disable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bgp_parameters: {
        value: bgpBgpParametersToHclTerraform(this._bgpParameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BgpBgpParametersList",
      },
      peers: {
        value: cdktf.listMapperHcl(bgpPeersToHclTerraform, true)(this._peers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BgpPeersList",
      },
      where: {
        value: bgpWhereToHclTerraform(this._where.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BgpWhereList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
