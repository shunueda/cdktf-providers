// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_nat_pool_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderCgnv6NatPoolOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_nat_pool_oper#id DataThunderCgnv6NatPoolOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify pool name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_nat_pool_oper#pool_name DataThunderCgnv6NatPoolOper#pool_name}
  */
  readonly poolName: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_nat_pool_oper#oper DataThunderCgnv6NatPoolOper#oper}
  */
  readonly oper?: DataThunderCgnv6NatPoolOperOper;
}
export interface DataThunderCgnv6NatPoolOperOperNatIpListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_nat_pool_oper#icmp_freed DataThunderCgnv6NatPoolOper#icmp_freed}
  */
  readonly icmpFreed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_nat_pool_oper#icmp_hit_full DataThunderCgnv6NatPoolOper#icmp_hit_full}
  */
  readonly icmpHitFull?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_nat_pool_oper#icmp_peak DataThunderCgnv6NatPoolOper#icmp_peak}
  */
  readonly icmpPeak?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_nat_pool_oper#icmp_reserved DataThunderCgnv6NatPoolOper#icmp_reserved}
  */
  readonly icmpReserved?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_nat_pool_oper#icmp_total DataThunderCgnv6NatPoolOper#icmp_total}
  */
  readonly icmpTotal?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_nat_pool_oper#icmp_used DataThunderCgnv6NatPoolOper#icmp_used}
  */
  readonly icmpUsed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_nat_pool_oper#ip_address DataThunderCgnv6NatPoolOper#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_nat_pool_oper#obsoleted DataThunderCgnv6NatPoolOper#obsoleted}
  */
  readonly obsoleted?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_nat_pool_oper#rtsp_used DataThunderCgnv6NatPoolOper#rtsp_used}
  */
  readonly rtspUsed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_nat_pool_oper#tcp_freed DataThunderCgnv6NatPoolOper#tcp_freed}
  */
  readonly tcpFreed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_nat_pool_oper#tcp_hit_full DataThunderCgnv6NatPoolOper#tcp_hit_full}
  */
  readonly tcpHitFull?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_nat_pool_oper#tcp_peak DataThunderCgnv6NatPoolOper#tcp_peak}
  */
  readonly tcpPeak?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_nat_pool_oper#tcp_port_overloaded DataThunderCgnv6NatPoolOper#tcp_port_overloaded}
  */
  readonly tcpPortOverloaded?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_nat_pool_oper#tcp_reserved DataThunderCgnv6NatPoolOper#tcp_reserved}
  */
  readonly tcpReserved?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_nat_pool_oper#tcp_total DataThunderCgnv6NatPoolOper#tcp_total}
  */
  readonly tcpTotal?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_nat_pool_oper#tcp_used DataThunderCgnv6NatPoolOper#tcp_used}
  */
  readonly tcpUsed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_nat_pool_oper#udp_freed DataThunderCgnv6NatPoolOper#udp_freed}
  */
  readonly udpFreed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_nat_pool_oper#udp_hit_full DataThunderCgnv6NatPoolOper#udp_hit_full}
  */
  readonly udpHitFull?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_nat_pool_oper#udp_peak DataThunderCgnv6NatPoolOper#udp_peak}
  */
  readonly udpPeak?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_nat_pool_oper#udp_port_overloaded DataThunderCgnv6NatPoolOper#udp_port_overloaded}
  */
  readonly udpPortOverloaded?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_nat_pool_oper#udp_reserved DataThunderCgnv6NatPoolOper#udp_reserved}
  */
  readonly udpReserved?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_nat_pool_oper#udp_total DataThunderCgnv6NatPoolOper#udp_total}
  */
  readonly udpTotal?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_nat_pool_oper#udp_used DataThunderCgnv6NatPoolOper#udp_used}
  */
  readonly udpUsed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_nat_pool_oper#users DataThunderCgnv6NatPoolOper#users}
  */
  readonly users?: number;
}

export function dataThunderCgnv6NatPoolOperOperNatIpListStructToTerraform(struct?: DataThunderCgnv6NatPoolOperOperNatIpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    icmp_freed: cdktf.numberToTerraform(struct!.icmpFreed),
    icmp_hit_full: cdktf.numberToTerraform(struct!.icmpHitFull),
    icmp_peak: cdktf.numberToTerraform(struct!.icmpPeak),
    icmp_reserved: cdktf.numberToTerraform(struct!.icmpReserved),
    icmp_total: cdktf.numberToTerraform(struct!.icmpTotal),
    icmp_used: cdktf.numberToTerraform(struct!.icmpUsed),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    obsoleted: cdktf.numberToTerraform(struct!.obsoleted),
    rtsp_used: cdktf.numberToTerraform(struct!.rtspUsed),
    tcp_freed: cdktf.numberToTerraform(struct!.tcpFreed),
    tcp_hit_full: cdktf.numberToTerraform(struct!.tcpHitFull),
    tcp_peak: cdktf.numberToTerraform(struct!.tcpPeak),
    tcp_port_overloaded: cdktf.numberToTerraform(struct!.tcpPortOverloaded),
    tcp_reserved: cdktf.numberToTerraform(struct!.tcpReserved),
    tcp_total: cdktf.numberToTerraform(struct!.tcpTotal),
    tcp_used: cdktf.numberToTerraform(struct!.tcpUsed),
    udp_freed: cdktf.numberToTerraform(struct!.udpFreed),
    udp_hit_full: cdktf.numberToTerraform(struct!.udpHitFull),
    udp_peak: cdktf.numberToTerraform(struct!.udpPeak),
    udp_port_overloaded: cdktf.numberToTerraform(struct!.udpPortOverloaded),
    udp_reserved: cdktf.numberToTerraform(struct!.udpReserved),
    udp_total: cdktf.numberToTerraform(struct!.udpTotal),
    udp_used: cdktf.numberToTerraform(struct!.udpUsed),
    users: cdktf.numberToTerraform(struct!.users),
  }
}


export function dataThunderCgnv6NatPoolOperOperNatIpListStructToHclTerraform(struct?: DataThunderCgnv6NatPoolOperOperNatIpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    icmp_freed: {
      value: cdktf.numberToHclTerraform(struct!.icmpFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_hit_full: {
      value: cdktf.numberToHclTerraform(struct!.icmpHitFull),
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
    icmp_reserved: {
      value: cdktf.numberToHclTerraform(struct!.icmpReserved),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_total: {
      value: cdktf.numberToHclTerraform(struct!.icmpTotal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_used: {
      value: cdktf.numberToHclTerraform(struct!.icmpUsed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    obsoleted: {
      value: cdktf.numberToHclTerraform(struct!.obsoleted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rtsp_used: {
      value: cdktf.numberToHclTerraform(struct!.rtspUsed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_freed: {
      value: cdktf.numberToHclTerraform(struct!.tcpFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_hit_full: {
      value: cdktf.numberToHclTerraform(struct!.tcpHitFull),
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
    tcp_port_overloaded: {
      value: cdktf.numberToHclTerraform(struct!.tcpPortOverloaded),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_reserved: {
      value: cdktf.numberToHclTerraform(struct!.tcpReserved),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_total: {
      value: cdktf.numberToHclTerraform(struct!.tcpTotal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_used: {
      value: cdktf.numberToHclTerraform(struct!.tcpUsed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_freed: {
      value: cdktf.numberToHclTerraform(struct!.udpFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_hit_full: {
      value: cdktf.numberToHclTerraform(struct!.udpHitFull),
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
    udp_port_overloaded: {
      value: cdktf.numberToHclTerraform(struct!.udpPortOverloaded),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_reserved: {
      value: cdktf.numberToHclTerraform(struct!.udpReserved),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_total: {
      value: cdktf.numberToHclTerraform(struct!.udpTotal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_used: {
      value: cdktf.numberToHclTerraform(struct!.udpUsed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    users: {
      value: cdktf.numberToHclTerraform(struct!.users),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6NatPoolOperOperNatIpListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderCgnv6NatPoolOperOperNatIpListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._icmpFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpFreed = this._icmpFreed;
    }
    if (this._icmpHitFull !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpHitFull = this._icmpHitFull;
    }
    if (this._icmpPeak !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpPeak = this._icmpPeak;
    }
    if (this._icmpReserved !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpReserved = this._icmpReserved;
    }
    if (this._icmpTotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpTotal = this._icmpTotal;
    }
    if (this._icmpUsed !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpUsed = this._icmpUsed;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._obsoleted !== undefined) {
      hasAnyValues = true;
      internalValueResult.obsoleted = this._obsoleted;
    }
    if (this._rtspUsed !== undefined) {
      hasAnyValues = true;
      internalValueResult.rtspUsed = this._rtspUsed;
    }
    if (this._tcpFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFreed = this._tcpFreed;
    }
    if (this._tcpHitFull !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpHitFull = this._tcpHitFull;
    }
    if (this._tcpPeak !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpPeak = this._tcpPeak;
    }
    if (this._tcpPortOverloaded !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpPortOverloaded = this._tcpPortOverloaded;
    }
    if (this._tcpReserved !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpReserved = this._tcpReserved;
    }
    if (this._tcpTotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpTotal = this._tcpTotal;
    }
    if (this._tcpUsed !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpUsed = this._tcpUsed;
    }
    if (this._udpFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpFreed = this._udpFreed;
    }
    if (this._udpHitFull !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpHitFull = this._udpHitFull;
    }
    if (this._udpPeak !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpPeak = this._udpPeak;
    }
    if (this._udpPortOverloaded !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpPortOverloaded = this._udpPortOverloaded;
    }
    if (this._udpReserved !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpReserved = this._udpReserved;
    }
    if (this._udpTotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpTotal = this._udpTotal;
    }
    if (this._udpUsed !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpUsed = this._udpUsed;
    }
    if (this._users !== undefined) {
      hasAnyValues = true;
      internalValueResult.users = this._users;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6NatPoolOperOperNatIpListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._icmpFreed = undefined;
      this._icmpHitFull = undefined;
      this._icmpPeak = undefined;
      this._icmpReserved = undefined;
      this._icmpTotal = undefined;
      this._icmpUsed = undefined;
      this._ipAddress = undefined;
      this._obsoleted = undefined;
      this._rtspUsed = undefined;
      this._tcpFreed = undefined;
      this._tcpHitFull = undefined;
      this._tcpPeak = undefined;
      this._tcpPortOverloaded = undefined;
      this._tcpReserved = undefined;
      this._tcpTotal = undefined;
      this._tcpUsed = undefined;
      this._udpFreed = undefined;
      this._udpHitFull = undefined;
      this._udpPeak = undefined;
      this._udpPortOverloaded = undefined;
      this._udpReserved = undefined;
      this._udpTotal = undefined;
      this._udpUsed = undefined;
      this._users = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._icmpFreed = value.icmpFreed;
      this._icmpHitFull = value.icmpHitFull;
      this._icmpPeak = value.icmpPeak;
      this._icmpReserved = value.icmpReserved;
      this._icmpTotal = value.icmpTotal;
      this._icmpUsed = value.icmpUsed;
      this._ipAddress = value.ipAddress;
      this._obsoleted = value.obsoleted;
      this._rtspUsed = value.rtspUsed;
      this._tcpFreed = value.tcpFreed;
      this._tcpHitFull = value.tcpHitFull;
      this._tcpPeak = value.tcpPeak;
      this._tcpPortOverloaded = value.tcpPortOverloaded;
      this._tcpReserved = value.tcpReserved;
      this._tcpTotal = value.tcpTotal;
      this._tcpUsed = value.tcpUsed;
      this._udpFreed = value.udpFreed;
      this._udpHitFull = value.udpHitFull;
      this._udpPeak = value.udpPeak;
      this._udpPortOverloaded = value.udpPortOverloaded;
      this._udpReserved = value.udpReserved;
      this._udpTotal = value.udpTotal;
      this._udpUsed = value.udpUsed;
      this._users = value.users;
    }
  }

  // icmp_freed - computed: false, optional: true, required: false
  private _icmpFreed?: number; 
  public get icmpFreed() {
    return this.getNumberAttribute('icmp_freed');
  }
  public set icmpFreed(value: number) {
    this._icmpFreed = value;
  }
  public resetIcmpFreed() {
    this._icmpFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpFreedInput() {
    return this._icmpFreed;
  }

  // icmp_hit_full - computed: false, optional: true, required: false
  private _icmpHitFull?: number; 
  public get icmpHitFull() {
    return this.getNumberAttribute('icmp_hit_full');
  }
  public set icmpHitFull(value: number) {
    this._icmpHitFull = value;
  }
  public resetIcmpHitFull() {
    this._icmpHitFull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpHitFullInput() {
    return this._icmpHitFull;
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

  // icmp_reserved - computed: false, optional: true, required: false
  private _icmpReserved?: number; 
  public get icmpReserved() {
    return this.getNumberAttribute('icmp_reserved');
  }
  public set icmpReserved(value: number) {
    this._icmpReserved = value;
  }
  public resetIcmpReserved() {
    this._icmpReserved = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpReservedInput() {
    return this._icmpReserved;
  }

  // icmp_total - computed: false, optional: true, required: false
  private _icmpTotal?: number; 
  public get icmpTotal() {
    return this.getNumberAttribute('icmp_total');
  }
  public set icmpTotal(value: number) {
    this._icmpTotal = value;
  }
  public resetIcmpTotal() {
    this._icmpTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpTotalInput() {
    return this._icmpTotal;
  }

  // icmp_used - computed: false, optional: true, required: false
  private _icmpUsed?: number; 
  public get icmpUsed() {
    return this.getNumberAttribute('icmp_used');
  }
  public set icmpUsed(value: number) {
    this._icmpUsed = value;
  }
  public resetIcmpUsed() {
    this._icmpUsed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpUsedInput() {
    return this._icmpUsed;
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

  // obsoleted - computed: false, optional: true, required: false
  private _obsoleted?: number; 
  public get obsoleted() {
    return this.getNumberAttribute('obsoleted');
  }
  public set obsoleted(value: number) {
    this._obsoleted = value;
  }
  public resetObsoleted() {
    this._obsoleted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get obsoletedInput() {
    return this._obsoleted;
  }

  // rtsp_used - computed: false, optional: true, required: false
  private _rtspUsed?: number; 
  public get rtspUsed() {
    return this.getNumberAttribute('rtsp_used');
  }
  public set rtspUsed(value: number) {
    this._rtspUsed = value;
  }
  public resetRtspUsed() {
    this._rtspUsed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rtspUsedInput() {
    return this._rtspUsed;
  }

  // tcp_freed - computed: false, optional: true, required: false
  private _tcpFreed?: number; 
  public get tcpFreed() {
    return this.getNumberAttribute('tcp_freed');
  }
  public set tcpFreed(value: number) {
    this._tcpFreed = value;
  }
  public resetTcpFreed() {
    this._tcpFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFreedInput() {
    return this._tcpFreed;
  }

  // tcp_hit_full - computed: false, optional: true, required: false
  private _tcpHitFull?: number; 
  public get tcpHitFull() {
    return this.getNumberAttribute('tcp_hit_full');
  }
  public set tcpHitFull(value: number) {
    this._tcpHitFull = value;
  }
  public resetTcpHitFull() {
    this._tcpHitFull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpHitFullInput() {
    return this._tcpHitFull;
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

  // tcp_port_overloaded - computed: false, optional: true, required: false
  private _tcpPortOverloaded?: number; 
  public get tcpPortOverloaded() {
    return this.getNumberAttribute('tcp_port_overloaded');
  }
  public set tcpPortOverloaded(value: number) {
    this._tcpPortOverloaded = value;
  }
  public resetTcpPortOverloaded() {
    this._tcpPortOverloaded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpPortOverloadedInput() {
    return this._tcpPortOverloaded;
  }

  // tcp_reserved - computed: false, optional: true, required: false
  private _tcpReserved?: number; 
  public get tcpReserved() {
    return this.getNumberAttribute('tcp_reserved');
  }
  public set tcpReserved(value: number) {
    this._tcpReserved = value;
  }
  public resetTcpReserved() {
    this._tcpReserved = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpReservedInput() {
    return this._tcpReserved;
  }

  // tcp_total - computed: false, optional: true, required: false
  private _tcpTotal?: number; 
  public get tcpTotal() {
    return this.getNumberAttribute('tcp_total');
  }
  public set tcpTotal(value: number) {
    this._tcpTotal = value;
  }
  public resetTcpTotal() {
    this._tcpTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpTotalInput() {
    return this._tcpTotal;
  }

  // tcp_used - computed: false, optional: true, required: false
  private _tcpUsed?: number; 
  public get tcpUsed() {
    return this.getNumberAttribute('tcp_used');
  }
  public set tcpUsed(value: number) {
    this._tcpUsed = value;
  }
  public resetTcpUsed() {
    this._tcpUsed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpUsedInput() {
    return this._tcpUsed;
  }

  // udp_freed - computed: false, optional: true, required: false
  private _udpFreed?: number; 
  public get udpFreed() {
    return this.getNumberAttribute('udp_freed');
  }
  public set udpFreed(value: number) {
    this._udpFreed = value;
  }
  public resetUdpFreed() {
    this._udpFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpFreedInput() {
    return this._udpFreed;
  }

  // udp_hit_full - computed: false, optional: true, required: false
  private _udpHitFull?: number; 
  public get udpHitFull() {
    return this.getNumberAttribute('udp_hit_full');
  }
  public set udpHitFull(value: number) {
    this._udpHitFull = value;
  }
  public resetUdpHitFull() {
    this._udpHitFull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpHitFullInput() {
    return this._udpHitFull;
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

  // udp_port_overloaded - computed: false, optional: true, required: false
  private _udpPortOverloaded?: number; 
  public get udpPortOverloaded() {
    return this.getNumberAttribute('udp_port_overloaded');
  }
  public set udpPortOverloaded(value: number) {
    this._udpPortOverloaded = value;
  }
  public resetUdpPortOverloaded() {
    this._udpPortOverloaded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpPortOverloadedInput() {
    return this._udpPortOverloaded;
  }

  // udp_reserved - computed: false, optional: true, required: false
  private _udpReserved?: number; 
  public get udpReserved() {
    return this.getNumberAttribute('udp_reserved');
  }
  public set udpReserved(value: number) {
    this._udpReserved = value;
  }
  public resetUdpReserved() {
    this._udpReserved = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpReservedInput() {
    return this._udpReserved;
  }

  // udp_total - computed: false, optional: true, required: false
  private _udpTotal?: number; 
  public get udpTotal() {
    return this.getNumberAttribute('udp_total');
  }
  public set udpTotal(value: number) {
    this._udpTotal = value;
  }
  public resetUdpTotal() {
    this._udpTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpTotalInput() {
    return this._udpTotal;
  }

  // udp_used - computed: false, optional: true, required: false
  private _udpUsed?: number; 
  public get udpUsed() {
    return this.getNumberAttribute('udp_used');
  }
  public set udpUsed(value: number) {
    this._udpUsed = value;
  }
  public resetUdpUsed() {
    this._udpUsed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpUsedInput() {
    return this._udpUsed;
  }

  // users - computed: false, optional: true, required: false
  private _users?: number; 
  public get users() {
    return this.getNumberAttribute('users');
  }
  public set users(value: number) {
    this._users = value;
  }
  public resetUsers() {
    this._users = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users;
  }
}

export class DataThunderCgnv6NatPoolOperOperNatIpListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderCgnv6NatPoolOperOperNatIpListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderCgnv6NatPoolOperOperNatIpListStructOutputReference {
    return new DataThunderCgnv6NatPoolOperOperNatIpListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderCgnv6NatPoolOperOper {
  /**
  * nat_ip_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_nat_pool_oper#nat_ip_list DataThunderCgnv6NatPoolOper#nat_ip_list}
  */
  readonly natIpList?: DataThunderCgnv6NatPoolOperOperNatIpListStruct[] | cdktf.IResolvable;
}

export function dataThunderCgnv6NatPoolOperOperToTerraform(struct?: DataThunderCgnv6NatPoolOperOperOutputReference | DataThunderCgnv6NatPoolOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nat_ip_list: cdktf.listMapper(dataThunderCgnv6NatPoolOperOperNatIpListStructToTerraform, true)(struct!.natIpList),
  }
}


export function dataThunderCgnv6NatPoolOperOperToHclTerraform(struct?: DataThunderCgnv6NatPoolOperOperOutputReference | DataThunderCgnv6NatPoolOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nat_ip_list: {
      value: cdktf.listMapperHcl(dataThunderCgnv6NatPoolOperOperNatIpListStructToHclTerraform, true)(struct!.natIpList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderCgnv6NatPoolOperOperNatIpListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6NatPoolOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderCgnv6NatPoolOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._natIpList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.natIpList = this._natIpList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6NatPoolOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._natIpList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._natIpList.internalValue = value.natIpList;
    }
  }

  // nat_ip_list - computed: false, optional: true, required: false
  private _natIpList = new DataThunderCgnv6NatPoolOperOperNatIpListStructList(this, "nat_ip_list", false);
  public get natIpList() {
    return this._natIpList;
  }
  public putNatIpList(value: DataThunderCgnv6NatPoolOperOperNatIpListStruct[] | cdktf.IResolvable) {
    this._natIpList.internalValue = value;
  }
  public resetNatIpList() {
    this._natIpList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natIpListInput() {
    return this._natIpList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_nat_pool_oper thunder_cgnv6_nat_pool_oper}
*/
export class DataThunderCgnv6NatPoolOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_nat_pool_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderCgnv6NatPoolOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderCgnv6NatPoolOper to import
  * @param importFromId The id of the existing DataThunderCgnv6NatPoolOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_nat_pool_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderCgnv6NatPoolOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_nat_pool_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_nat_pool_oper thunder_cgnv6_nat_pool_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderCgnv6NatPoolOperConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderCgnv6NatPoolOperConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_nat_pool_oper',
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
    this._id = config.id;
    this._poolName = config.poolName;
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

  // pool_name - computed: false, optional: false, required: true
  private _poolName?: string; 
  public get poolName() {
    return this.getStringAttribute('pool_name');
  }
  public set poolName(value: string) {
    this._poolName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get poolNameInput() {
    return this._poolName;
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderCgnv6NatPoolOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderCgnv6NatPoolOperOper) {
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
      pool_name: cdktf.stringToTerraform(this._poolName),
      oper: dataThunderCgnv6NatPoolOperOperToTerraform(this._oper.internalValue),
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
      pool_name: {
        value: cdktf.stringToHclTerraform(this._poolName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oper: {
        value: dataThunderCgnv6NatPoolOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderCgnv6NatPoolOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
