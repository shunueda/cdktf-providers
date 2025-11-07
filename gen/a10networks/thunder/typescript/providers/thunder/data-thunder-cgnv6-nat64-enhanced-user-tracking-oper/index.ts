// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat64_enhanced_user_tracking_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderCgnv6Nat64EnhancedUserTrackingOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat64_enhanced_user_tracking_oper#id DataThunderCgnv6Nat64EnhancedUserTrackingOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat64_enhanced_user_tracking_oper#oper DataThunderCgnv6Nat64EnhancedUserTrackingOper#oper}
  */
  readonly oper?: DataThunderCgnv6Nat64EnhancedUserTrackingOperOper;
}
export interface DataThunderCgnv6Nat64EnhancedUserTrackingOperOperUserListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat64_enhanced_user_tracking_oper#dwl_bytes DataThunderCgnv6Nat64EnhancedUserTrackingOper#dwl_bytes}
  */
  readonly dwlBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat64_enhanced_user_tracking_oper#dwl_packets DataThunderCgnv6Nat64EnhancedUserTrackingOper#dwl_packets}
  */
  readonly dwlPackets?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat64_enhanced_user_tracking_oper#icmp_peak DataThunderCgnv6Nat64EnhancedUserTrackingOper#icmp_peak}
  */
  readonly icmpPeak?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat64_enhanced_user_tracking_oper#icmp_quota DataThunderCgnv6Nat64EnhancedUserTrackingOper#icmp_quota}
  */
  readonly icmpQuota?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat64_enhanced_user_tracking_oper#inside_address DataThunderCgnv6Nat64EnhancedUserTrackingOper#inside_address}
  */
  readonly insideAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat64_enhanced_user_tracking_oper#nat_address DataThunderCgnv6Nat64EnhancedUserTrackingOper#nat_address}
  */
  readonly natAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat64_enhanced_user_tracking_oper#nat_pool_name DataThunderCgnv6Nat64EnhancedUserTrackingOper#nat_pool_name}
  */
  readonly natPoolName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat64_enhanced_user_tracking_oper#prefix_len DataThunderCgnv6Nat64EnhancedUserTrackingOper#prefix_len}
  */
  readonly prefixLen?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat64_enhanced_user_tracking_oper#session_count DataThunderCgnv6Nat64EnhancedUserTrackingOper#session_count}
  */
  readonly sessionCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat64_enhanced_user_tracking_oper#session_peak DataThunderCgnv6Nat64EnhancedUserTrackingOper#session_peak}
  */
  readonly sessionPeak?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat64_enhanced_user_tracking_oper#tcp_peak DataThunderCgnv6Nat64EnhancedUserTrackingOper#tcp_peak}
  */
  readonly tcpPeak?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat64_enhanced_user_tracking_oper#tcp_quota DataThunderCgnv6Nat64EnhancedUserTrackingOper#tcp_quota}
  */
  readonly tcpQuota?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat64_enhanced_user_tracking_oper#total_session_count DataThunderCgnv6Nat64EnhancedUserTrackingOper#total_session_count}
  */
  readonly totalSessionCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat64_enhanced_user_tracking_oper#udp_peak DataThunderCgnv6Nat64EnhancedUserTrackingOper#udp_peak}
  */
  readonly udpPeak?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat64_enhanced_user_tracking_oper#udp_quota DataThunderCgnv6Nat64EnhancedUserTrackingOper#udp_quota}
  */
  readonly udpQuota?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat64_enhanced_user_tracking_oper#upl_bytes DataThunderCgnv6Nat64EnhancedUserTrackingOper#upl_bytes}
  */
  readonly uplBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat64_enhanced_user_tracking_oper#upl_packets DataThunderCgnv6Nat64EnhancedUserTrackingOper#upl_packets}
  */
  readonly uplPackets?: number;
}

export function dataThunderCgnv6Nat64EnhancedUserTrackingOperOperUserListStructToTerraform(struct?: DataThunderCgnv6Nat64EnhancedUserTrackingOperOperUserListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dwl_bytes: cdktf.numberToTerraform(struct!.dwlBytes),
    dwl_packets: cdktf.numberToTerraform(struct!.dwlPackets),
    icmp_peak: cdktf.numberToTerraform(struct!.icmpPeak),
    icmp_quota: cdktf.numberToTerraform(struct!.icmpQuota),
    inside_address: cdktf.stringToTerraform(struct!.insideAddress),
    nat_address: cdktf.stringToTerraform(struct!.natAddress),
    nat_pool_name: cdktf.stringToTerraform(struct!.natPoolName),
    prefix_len: cdktf.numberToTerraform(struct!.prefixLen),
    session_count: cdktf.numberToTerraform(struct!.sessionCount),
    session_peak: cdktf.numberToTerraform(struct!.sessionPeak),
    tcp_peak: cdktf.numberToTerraform(struct!.tcpPeak),
    tcp_quota: cdktf.numberToTerraform(struct!.tcpQuota),
    total_session_count: cdktf.numberToTerraform(struct!.totalSessionCount),
    udp_peak: cdktf.numberToTerraform(struct!.udpPeak),
    udp_quota: cdktf.numberToTerraform(struct!.udpQuota),
    upl_bytes: cdktf.numberToTerraform(struct!.uplBytes),
    upl_packets: cdktf.numberToTerraform(struct!.uplPackets),
  }
}


export function dataThunderCgnv6Nat64EnhancedUserTrackingOperOperUserListStructToHclTerraform(struct?: DataThunderCgnv6Nat64EnhancedUserTrackingOperOperUserListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dwl_bytes: {
      value: cdktf.numberToHclTerraform(struct!.dwlBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dwl_packets: {
      value: cdktf.numberToHclTerraform(struct!.dwlPackets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_peak: {
      value: cdktf.numberToHclTerraform(struct!.icmpPeak),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_quota: {
      value: cdktf.numberToHclTerraform(struct!.icmpQuota),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inside_address: {
      value: cdktf.stringToHclTerraform(struct!.insideAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nat_address: {
      value: cdktf.stringToHclTerraform(struct!.natAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nat_pool_name: {
      value: cdktf.stringToHclTerraform(struct!.natPoolName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_len: {
      value: cdktf.numberToHclTerraform(struct!.prefixLen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_count: {
      value: cdktf.numberToHclTerraform(struct!.sessionCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_peak: {
      value: cdktf.numberToHclTerraform(struct!.sessionPeak),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_peak: {
      value: cdktf.numberToHclTerraform(struct!.tcpPeak),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_quota: {
      value: cdktf.numberToHclTerraform(struct!.tcpQuota),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_session_count: {
      value: cdktf.numberToHclTerraform(struct!.totalSessionCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_peak: {
      value: cdktf.numberToHclTerraform(struct!.udpPeak),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_quota: {
      value: cdktf.numberToHclTerraform(struct!.udpQuota),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    upl_bytes: {
      value: cdktf.numberToHclTerraform(struct!.uplBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    upl_packets: {
      value: cdktf.numberToHclTerraform(struct!.uplPackets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6Nat64EnhancedUserTrackingOperOperUserListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderCgnv6Nat64EnhancedUserTrackingOperOperUserListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dwlBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.dwlBytes = this._dwlBytes;
    }
    if (this._dwlPackets !== undefined) {
      hasAnyValues = true;
      internalValueResult.dwlPackets = this._dwlPackets;
    }
    if (this._icmpPeak !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpPeak = this._icmpPeak;
    }
    if (this._icmpQuota !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpQuota = this._icmpQuota;
    }
    if (this._insideAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.insideAddress = this._insideAddress;
    }
    if (this._natAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.natAddress = this._natAddress;
    }
    if (this._natPoolName !== undefined) {
      hasAnyValues = true;
      internalValueResult.natPoolName = this._natPoolName;
    }
    if (this._prefixLen !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLen = this._prefixLen;
    }
    if (this._sessionCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionCount = this._sessionCount;
    }
    if (this._sessionPeak !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionPeak = this._sessionPeak;
    }
    if (this._tcpPeak !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpPeak = this._tcpPeak;
    }
    if (this._tcpQuota !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpQuota = this._tcpQuota;
    }
    if (this._totalSessionCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalSessionCount = this._totalSessionCount;
    }
    if (this._udpPeak !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpPeak = this._udpPeak;
    }
    if (this._udpQuota !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpQuota = this._udpQuota;
    }
    if (this._uplBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.uplBytes = this._uplBytes;
    }
    if (this._uplPackets !== undefined) {
      hasAnyValues = true;
      internalValueResult.uplPackets = this._uplPackets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6Nat64EnhancedUserTrackingOperOperUserListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dwlBytes = undefined;
      this._dwlPackets = undefined;
      this._icmpPeak = undefined;
      this._icmpQuota = undefined;
      this._insideAddress = undefined;
      this._natAddress = undefined;
      this._natPoolName = undefined;
      this._prefixLen = undefined;
      this._sessionCount = undefined;
      this._sessionPeak = undefined;
      this._tcpPeak = undefined;
      this._tcpQuota = undefined;
      this._totalSessionCount = undefined;
      this._udpPeak = undefined;
      this._udpQuota = undefined;
      this._uplBytes = undefined;
      this._uplPackets = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dwlBytes = value.dwlBytes;
      this._dwlPackets = value.dwlPackets;
      this._icmpPeak = value.icmpPeak;
      this._icmpQuota = value.icmpQuota;
      this._insideAddress = value.insideAddress;
      this._natAddress = value.natAddress;
      this._natPoolName = value.natPoolName;
      this._prefixLen = value.prefixLen;
      this._sessionCount = value.sessionCount;
      this._sessionPeak = value.sessionPeak;
      this._tcpPeak = value.tcpPeak;
      this._tcpQuota = value.tcpQuota;
      this._totalSessionCount = value.totalSessionCount;
      this._udpPeak = value.udpPeak;
      this._udpQuota = value.udpQuota;
      this._uplBytes = value.uplBytes;
      this._uplPackets = value.uplPackets;
    }
  }

  // dwl_bytes - computed: false, optional: true, required: false
  private _dwlBytes?: number; 
  public get dwlBytes() {
    return this.getNumberAttribute('dwl_bytes');
  }
  public set dwlBytes(value: number) {
    this._dwlBytes = value;
  }
  public resetDwlBytes() {
    this._dwlBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dwlBytesInput() {
    return this._dwlBytes;
  }

  // dwl_packets - computed: false, optional: true, required: false
  private _dwlPackets?: number; 
  public get dwlPackets() {
    return this.getNumberAttribute('dwl_packets');
  }
  public set dwlPackets(value: number) {
    this._dwlPackets = value;
  }
  public resetDwlPackets() {
    this._dwlPackets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dwlPacketsInput() {
    return this._dwlPackets;
  }

  // icmp_peak - computed: false, optional: true, required: false
  private _icmpPeak?: number; 
  public get icmpPeak() {
    return this.getNumberAttribute('icmp_peak');
  }
  public set icmpPeak(value: number) {
    this._icmpPeak = value;
  }
  public resetIcmpPeak() {
    this._icmpPeak = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpPeakInput() {
    return this._icmpPeak;
  }

  // icmp_quota - computed: false, optional: true, required: false
  private _icmpQuota?: number; 
  public get icmpQuota() {
    return this.getNumberAttribute('icmp_quota');
  }
  public set icmpQuota(value: number) {
    this._icmpQuota = value;
  }
  public resetIcmpQuota() {
    this._icmpQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpQuotaInput() {
    return this._icmpQuota;
  }

  // inside_address - computed: false, optional: true, required: false
  private _insideAddress?: string; 
  public get insideAddress() {
    return this.getStringAttribute('inside_address');
  }
  public set insideAddress(value: string) {
    this._insideAddress = value;
  }
  public resetInsideAddress() {
    this._insideAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideAddressInput() {
    return this._insideAddress;
  }

  // nat_address - computed: false, optional: true, required: false
  private _natAddress?: string; 
  public get natAddress() {
    return this.getStringAttribute('nat_address');
  }
  public set natAddress(value: string) {
    this._natAddress = value;
  }
  public resetNatAddress() {
    this._natAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natAddressInput() {
    return this._natAddress;
  }

  // nat_pool_name - computed: false, optional: true, required: false
  private _natPoolName?: string; 
  public get natPoolName() {
    return this.getStringAttribute('nat_pool_name');
  }
  public set natPoolName(value: string) {
    this._natPoolName = value;
  }
  public resetNatPoolName() {
    this._natPoolName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natPoolNameInput() {
    return this._natPoolName;
  }

  // prefix_len - computed: false, optional: true, required: false
  private _prefixLen?: number; 
  public get prefixLen() {
    return this.getNumberAttribute('prefix_len');
  }
  public set prefixLen(value: number) {
    this._prefixLen = value;
  }
  public resetPrefixLen() {
    this._prefixLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLenInput() {
    return this._prefixLen;
  }

  // session_count - computed: false, optional: true, required: false
  private _sessionCount?: number; 
  public get sessionCount() {
    return this.getNumberAttribute('session_count');
  }
  public set sessionCount(value: number) {
    this._sessionCount = value;
  }
  public resetSessionCount() {
    this._sessionCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionCountInput() {
    return this._sessionCount;
  }

  // session_peak - computed: false, optional: true, required: false
  private _sessionPeak?: number; 
  public get sessionPeak() {
    return this.getNumberAttribute('session_peak');
  }
  public set sessionPeak(value: number) {
    this._sessionPeak = value;
  }
  public resetSessionPeak() {
    this._sessionPeak = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionPeakInput() {
    return this._sessionPeak;
  }

  // tcp_peak - computed: false, optional: true, required: false
  private _tcpPeak?: number; 
  public get tcpPeak() {
    return this.getNumberAttribute('tcp_peak');
  }
  public set tcpPeak(value: number) {
    this._tcpPeak = value;
  }
  public resetTcpPeak() {
    this._tcpPeak = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpPeakInput() {
    return this._tcpPeak;
  }

  // tcp_quota - computed: false, optional: true, required: false
  private _tcpQuota?: number; 
  public get tcpQuota() {
    return this.getNumberAttribute('tcp_quota');
  }
  public set tcpQuota(value: number) {
    this._tcpQuota = value;
  }
  public resetTcpQuota() {
    this._tcpQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpQuotaInput() {
    return this._tcpQuota;
  }

  // total_session_count - computed: false, optional: true, required: false
  private _totalSessionCount?: number; 
  public get totalSessionCount() {
    return this.getNumberAttribute('total_session_count');
  }
  public set totalSessionCount(value: number) {
    this._totalSessionCount = value;
  }
  public resetTotalSessionCount() {
    this._totalSessionCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalSessionCountInput() {
    return this._totalSessionCount;
  }

  // udp_peak - computed: false, optional: true, required: false
  private _udpPeak?: number; 
  public get udpPeak() {
    return this.getNumberAttribute('udp_peak');
  }
  public set udpPeak(value: number) {
    this._udpPeak = value;
  }
  public resetUdpPeak() {
    this._udpPeak = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpPeakInput() {
    return this._udpPeak;
  }

  // udp_quota - computed: false, optional: true, required: false
  private _udpQuota?: number; 
  public get udpQuota() {
    return this.getNumberAttribute('udp_quota');
  }
  public set udpQuota(value: number) {
    this._udpQuota = value;
  }
  public resetUdpQuota() {
    this._udpQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpQuotaInput() {
    return this._udpQuota;
  }

  // upl_bytes - computed: false, optional: true, required: false
  private _uplBytes?: number; 
  public get uplBytes() {
    return this.getNumberAttribute('upl_bytes');
  }
  public set uplBytes(value: number) {
    this._uplBytes = value;
  }
  public resetUplBytes() {
    this._uplBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uplBytesInput() {
    return this._uplBytes;
  }

  // upl_packets - computed: false, optional: true, required: false
  private _uplPackets?: number; 
  public get uplPackets() {
    return this.getNumberAttribute('upl_packets');
  }
  public set uplPackets(value: number) {
    this._uplPackets = value;
  }
  public resetUplPackets() {
    this._uplPackets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uplPacketsInput() {
    return this._uplPackets;
  }
}

export class DataThunderCgnv6Nat64EnhancedUserTrackingOperOperUserListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderCgnv6Nat64EnhancedUserTrackingOperOperUserListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderCgnv6Nat64EnhancedUserTrackingOperOperUserListStructOutputReference {
    return new DataThunderCgnv6Nat64EnhancedUserTrackingOperOperUserListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderCgnv6Nat64EnhancedUserTrackingOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat64_enhanced_user_tracking_oper#all_partitions DataThunderCgnv6Nat64EnhancedUserTrackingOper#all_partitions}
  */
  readonly allPartitions?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat64_enhanced_user_tracking_oper#inside_addr_v6 DataThunderCgnv6Nat64EnhancedUserTrackingOper#inside_addr_v6}
  */
  readonly insideAddrV6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat64_enhanced_user_tracking_oper#nat_pool_name DataThunderCgnv6Nat64EnhancedUserTrackingOper#nat_pool_name}
  */
  readonly natPoolName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat64_enhanced_user_tracking_oper#partition_name DataThunderCgnv6Nat64EnhancedUserTrackingOper#partition_name}
  */
  readonly partitionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat64_enhanced_user_tracking_oper#pool_shared DataThunderCgnv6Nat64EnhancedUserTrackingOper#pool_shared}
  */
  readonly poolShared?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat64_enhanced_user_tracking_oper#prefix_filter DataThunderCgnv6Nat64EnhancedUserTrackingOper#prefix_filter}
  */
  readonly prefixFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat64_enhanced_user_tracking_oper#shared_partition DataThunderCgnv6Nat64EnhancedUserTrackingOper#shared_partition}
  */
  readonly sharedPartition?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat64_enhanced_user_tracking_oper#user_count DataThunderCgnv6Nat64EnhancedUserTrackingOper#user_count}
  */
  readonly userCount?: number;
  /**
  * user_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat64_enhanced_user_tracking_oper#user_list DataThunderCgnv6Nat64EnhancedUserTrackingOper#user_list}
  */
  readonly userList?: DataThunderCgnv6Nat64EnhancedUserTrackingOperOperUserListStruct[] | cdktf.IResolvable;
}

export function dataThunderCgnv6Nat64EnhancedUserTrackingOperOperToTerraform(struct?: DataThunderCgnv6Nat64EnhancedUserTrackingOperOperOutputReference | DataThunderCgnv6Nat64EnhancedUserTrackingOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_partitions: cdktf.numberToTerraform(struct!.allPartitions),
    inside_addr_v6: cdktf.stringToTerraform(struct!.insideAddrV6),
    nat_pool_name: cdktf.stringToTerraform(struct!.natPoolName),
    partition_name: cdktf.stringToTerraform(struct!.partitionName),
    pool_shared: cdktf.numberToTerraform(struct!.poolShared),
    prefix_filter: cdktf.stringToTerraform(struct!.prefixFilter),
    shared_partition: cdktf.numberToTerraform(struct!.sharedPartition),
    user_count: cdktf.numberToTerraform(struct!.userCount),
    user_list: cdktf.listMapper(dataThunderCgnv6Nat64EnhancedUserTrackingOperOperUserListStructToTerraform, true)(struct!.userList),
  }
}


export function dataThunderCgnv6Nat64EnhancedUserTrackingOperOperToHclTerraform(struct?: DataThunderCgnv6Nat64EnhancedUserTrackingOperOperOutputReference | DataThunderCgnv6Nat64EnhancedUserTrackingOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_partitions: {
      value: cdktf.numberToHclTerraform(struct!.allPartitions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inside_addr_v6: {
      value: cdktf.stringToHclTerraform(struct!.insideAddrV6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nat_pool_name: {
      value: cdktf.stringToHclTerraform(struct!.natPoolName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    partition_name: {
      value: cdktf.stringToHclTerraform(struct!.partitionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pool_shared: {
      value: cdktf.numberToHclTerraform(struct!.poolShared),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix_filter: {
      value: cdktf.stringToHclTerraform(struct!.prefixFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shared_partition: {
      value: cdktf.numberToHclTerraform(struct!.sharedPartition),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_count: {
      value: cdktf.numberToHclTerraform(struct!.userCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_list: {
      value: cdktf.listMapperHcl(dataThunderCgnv6Nat64EnhancedUserTrackingOperOperUserListStructToHclTerraform, true)(struct!.userList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderCgnv6Nat64EnhancedUserTrackingOperOperUserListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6Nat64EnhancedUserTrackingOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderCgnv6Nat64EnhancedUserTrackingOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allPartitions !== undefined) {
      hasAnyValues = true;
      internalValueResult.allPartitions = this._allPartitions;
    }
    if (this._insideAddrV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.insideAddrV6 = this._insideAddrV6;
    }
    if (this._natPoolName !== undefined) {
      hasAnyValues = true;
      internalValueResult.natPoolName = this._natPoolName;
    }
    if (this._partitionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitionName = this._partitionName;
    }
    if (this._poolShared !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolShared = this._poolShared;
    }
    if (this._prefixFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixFilter = this._prefixFilter;
    }
    if (this._sharedPartition !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedPartition = this._sharedPartition;
    }
    if (this._userCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.userCount = this._userCount;
    }
    if (this._userList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userList = this._userList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6Nat64EnhancedUserTrackingOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allPartitions = undefined;
      this._insideAddrV6 = undefined;
      this._natPoolName = undefined;
      this._partitionName = undefined;
      this._poolShared = undefined;
      this._prefixFilter = undefined;
      this._sharedPartition = undefined;
      this._userCount = undefined;
      this._userList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allPartitions = value.allPartitions;
      this._insideAddrV6 = value.insideAddrV6;
      this._natPoolName = value.natPoolName;
      this._partitionName = value.partitionName;
      this._poolShared = value.poolShared;
      this._prefixFilter = value.prefixFilter;
      this._sharedPartition = value.sharedPartition;
      this._userCount = value.userCount;
      this._userList.internalValue = value.userList;
    }
  }

  // all_partitions - computed: false, optional: true, required: false
  private _allPartitions?: number; 
  public get allPartitions() {
    return this.getNumberAttribute('all_partitions');
  }
  public set allPartitions(value: number) {
    this._allPartitions = value;
  }
  public resetAllPartitions() {
    this._allPartitions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allPartitionsInput() {
    return this._allPartitions;
  }

  // inside_addr_v6 - computed: false, optional: true, required: false
  private _insideAddrV6?: string; 
  public get insideAddrV6() {
    return this.getStringAttribute('inside_addr_v6');
  }
  public set insideAddrV6(value: string) {
    this._insideAddrV6 = value;
  }
  public resetInsideAddrV6() {
    this._insideAddrV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideAddrV6Input() {
    return this._insideAddrV6;
  }

  // nat_pool_name - computed: false, optional: true, required: false
  private _natPoolName?: string; 
  public get natPoolName() {
    return this.getStringAttribute('nat_pool_name');
  }
  public set natPoolName(value: string) {
    this._natPoolName = value;
  }
  public resetNatPoolName() {
    this._natPoolName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natPoolNameInput() {
    return this._natPoolName;
  }

  // partition_name - computed: false, optional: true, required: false
  private _partitionName?: string; 
  public get partitionName() {
    return this.getStringAttribute('partition_name');
  }
  public set partitionName(value: string) {
    this._partitionName = value;
  }
  public resetPartitionName() {
    this._partitionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionNameInput() {
    return this._partitionName;
  }

  // pool_shared - computed: false, optional: true, required: false
  private _poolShared?: number; 
  public get poolShared() {
    return this.getNumberAttribute('pool_shared');
  }
  public set poolShared(value: number) {
    this._poolShared = value;
  }
  public resetPoolShared() {
    this._poolShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolSharedInput() {
    return this._poolShared;
  }

  // prefix_filter - computed: false, optional: true, required: false
  private _prefixFilter?: string; 
  public get prefixFilter() {
    return this.getStringAttribute('prefix_filter');
  }
  public set prefixFilter(value: string) {
    this._prefixFilter = value;
  }
  public resetPrefixFilter() {
    this._prefixFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixFilterInput() {
    return this._prefixFilter;
  }

  // shared_partition - computed: false, optional: true, required: false
  private _sharedPartition?: number; 
  public get sharedPartition() {
    return this.getNumberAttribute('shared_partition');
  }
  public set sharedPartition(value: number) {
    this._sharedPartition = value;
  }
  public resetSharedPartition() {
    this._sharedPartition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedPartitionInput() {
    return this._sharedPartition;
  }

  // user_count - computed: false, optional: true, required: false
  private _userCount?: number; 
  public get userCount() {
    return this.getNumberAttribute('user_count');
  }
  public set userCount(value: number) {
    this._userCount = value;
  }
  public resetUserCount() {
    this._userCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userCountInput() {
    return this._userCount;
  }

  // user_list - computed: false, optional: true, required: false
  private _userList = new DataThunderCgnv6Nat64EnhancedUserTrackingOperOperUserListStructList(this, "user_list", false);
  public get userList() {
    return this._userList;
  }
  public putUserList(value: DataThunderCgnv6Nat64EnhancedUserTrackingOperOperUserListStruct[] | cdktf.IResolvable) {
    this._userList.internalValue = value;
  }
  public resetUserList() {
    this._userList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userListInput() {
    return this._userList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat64_enhanced_user_tracking_oper thunder_cgnv6_nat64_enhanced_user_tracking_oper}
*/
export class DataThunderCgnv6Nat64EnhancedUserTrackingOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_nat64_enhanced_user_tracking_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderCgnv6Nat64EnhancedUserTrackingOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderCgnv6Nat64EnhancedUserTrackingOper to import
  * @param importFromId The id of the existing DataThunderCgnv6Nat64EnhancedUserTrackingOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat64_enhanced_user_tracking_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderCgnv6Nat64EnhancedUserTrackingOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_nat64_enhanced_user_tracking_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat64_enhanced_user_tracking_oper thunder_cgnv6_nat64_enhanced_user_tracking_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderCgnv6Nat64EnhancedUserTrackingOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderCgnv6Nat64EnhancedUserTrackingOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_nat64_enhanced_user_tracking_oper',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
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
    this._oper.internalValue = config.oper;
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

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderCgnv6Nat64EnhancedUserTrackingOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderCgnv6Nat64EnhancedUserTrackingOperOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      oper: dataThunderCgnv6Nat64EnhancedUserTrackingOperOperToTerraform(this._oper.internalValue),
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
      oper: {
        value: dataThunderCgnv6Nat64EnhancedUserTrackingOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderCgnv6Nat64EnhancedUserTrackingOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
