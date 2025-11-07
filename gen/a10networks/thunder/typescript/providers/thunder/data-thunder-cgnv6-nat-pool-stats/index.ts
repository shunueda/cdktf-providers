// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat_pool_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderCgnv6NatPoolStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat_pool_stats#id DataThunderCgnv6NatPoolStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify pool name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat_pool_stats#pool_name DataThunderCgnv6NatPoolStats#pool_name}
  */
  readonly poolName: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat_pool_stats#stats DataThunderCgnv6NatPoolStats#stats}
  */
  readonly stats?: DataThunderCgnv6NatPoolStatsStats;
}
export interface DataThunderCgnv6NatPoolStatsStats {
  /**
  * ICMP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat_pool_stats#icmp DataThunderCgnv6NatPoolStats#icmp}
  */
  readonly icmp?: number;
  /**
  * ICMP Freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat_pool_stats#icmp_freed DataThunderCgnv6NatPoolStats#icmp_freed}
  */
  readonly icmpFreed?: number;
  /**
  * ICMP Hit Full
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat_pool_stats#icmp_hit_full DataThunderCgnv6NatPoolStats#icmp_hit_full}
  */
  readonly icmpHitFull?: number;
  /**
  * ICMP Peak
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat_pool_stats#icmp_peak DataThunderCgnv6NatPoolStats#icmp_peak}
  */
  readonly icmpPeak?: number;
  /**
  * ICMP Reserved
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat_pool_stats#icmp_rsvd DataThunderCgnv6NatPoolStats#icmp_rsvd}
  */
  readonly icmpRsvd?: number;
  /**
  * ICMP Total
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat_pool_stats#icmp_total DataThunderCgnv6NatPoolStats#icmp_total}
  */
  readonly icmpTotal?: number;
  /**
  * IP Free
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat_pool_stats#ip_free DataThunderCgnv6NatPoolStats#ip_free}
  */
  readonly ipFree?: number;
  /**
  * IP Total
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat_pool_stats#ip_total DataThunderCgnv6NatPoolStats#ip_total}
  */
  readonly ipTotal?: number;
  /**
  * IP Used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat_pool_stats#ip_used DataThunderCgnv6NatPoolStats#ip_used}
  */
  readonly ipUsed?: number;
  /**
  * TCP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat_pool_stats#tcp DataThunderCgnv6NatPoolStats#tcp}
  */
  readonly tcp?: number;
  /**
  * TCP Freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat_pool_stats#tcp_freed DataThunderCgnv6NatPoolStats#tcp_freed}
  */
  readonly tcpFreed?: number;
  /**
  * TCP Hit Full
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat_pool_stats#tcp_hit_full DataThunderCgnv6NatPoolStats#tcp_hit_full}
  */
  readonly tcpHitFull?: number;
  /**
  * TCP Peak
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat_pool_stats#tcp_peak DataThunderCgnv6NatPoolStats#tcp_peak}
  */
  readonly tcpPeak?: number;
  /**
  * TCP Port Overloading Session Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat_pool_stats#tcp_port_overload_create DataThunderCgnv6NatPoolStats#tcp_port_overload_create}
  */
  readonly tcpPortOverloadCreate?: number;
  /**
  * TCP Port Overloading Session Freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat_pool_stats#tcp_port_overload_free DataThunderCgnv6NatPoolStats#tcp_port_overload_free}
  */
  readonly tcpPortOverloadFree?: number;
  /**
  * TCP Port Overloaded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat_pool_stats#tcp_port_overloaded DataThunderCgnv6NatPoolStats#tcp_port_overloaded}
  */
  readonly tcpPortOverloaded?: number;
  /**
  * TCP Reserved
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat_pool_stats#tcp_rsvd DataThunderCgnv6NatPoolStats#tcp_rsvd}
  */
  readonly tcpRsvd?: number;
  /**
  * TCP total
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat_pool_stats#tcp_total DataThunderCgnv6NatPoolStats#tcp_total}
  */
  readonly tcpTotal?: number;
  /**
  * UDP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat_pool_stats#udp DataThunderCgnv6NatPoolStats#udp}
  */
  readonly udp?: number;
  /**
  * UDP Freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat_pool_stats#udp_freed DataThunderCgnv6NatPoolStats#udp_freed}
  */
  readonly udpFreed?: number;
  /**
  * UDP Hit Full
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat_pool_stats#udp_hit_full DataThunderCgnv6NatPoolStats#udp_hit_full}
  */
  readonly udpHitFull?: number;
  /**
  * UDP Peak
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat_pool_stats#udp_peak DataThunderCgnv6NatPoolStats#udp_peak}
  */
  readonly udpPeak?: number;
  /**
  * UDP Port Overloading Session Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat_pool_stats#udp_port_overload_create DataThunderCgnv6NatPoolStats#udp_port_overload_create}
  */
  readonly udpPortOverloadCreate?: number;
  /**
  * UDP Port Overloading Session Freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat_pool_stats#udp_port_overload_free DataThunderCgnv6NatPoolStats#udp_port_overload_free}
  */
  readonly udpPortOverloadFree?: number;
  /**
  * UDP Port Overloaded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat_pool_stats#udp_port_overloaded DataThunderCgnv6NatPoolStats#udp_port_overloaded}
  */
  readonly udpPortOverloaded?: number;
  /**
  * UDP Reserved
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat_pool_stats#udp_rsvd DataThunderCgnv6NatPoolStats#udp_rsvd}
  */
  readonly udpRsvd?: number;
  /**
  * UDP Total
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat_pool_stats#udp_total DataThunderCgnv6NatPoolStats#udp_total}
  */
  readonly udpTotal?: number;
  /**
  * Users
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat_pool_stats#users DataThunderCgnv6NatPoolStats#users}
  */
  readonly users?: number;
}

export function dataThunderCgnv6NatPoolStatsStatsToTerraform(struct?: DataThunderCgnv6NatPoolStatsStatsOutputReference | DataThunderCgnv6NatPoolStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    icmp: cdktf.numberToTerraform(struct!.icmp),
    icmp_freed: cdktf.numberToTerraform(struct!.icmpFreed),
    icmp_hit_full: cdktf.numberToTerraform(struct!.icmpHitFull),
    icmp_peak: cdktf.numberToTerraform(struct!.icmpPeak),
    icmp_rsvd: cdktf.numberToTerraform(struct!.icmpRsvd),
    icmp_total: cdktf.numberToTerraform(struct!.icmpTotal),
    ip_free: cdktf.numberToTerraform(struct!.ipFree),
    ip_total: cdktf.numberToTerraform(struct!.ipTotal),
    ip_used: cdktf.numberToTerraform(struct!.ipUsed),
    tcp: cdktf.numberToTerraform(struct!.tcp),
    tcp_freed: cdktf.numberToTerraform(struct!.tcpFreed),
    tcp_hit_full: cdktf.numberToTerraform(struct!.tcpHitFull),
    tcp_peak: cdktf.numberToTerraform(struct!.tcpPeak),
    tcp_port_overload_create: cdktf.numberToTerraform(struct!.tcpPortOverloadCreate),
    tcp_port_overload_free: cdktf.numberToTerraform(struct!.tcpPortOverloadFree),
    tcp_port_overloaded: cdktf.numberToTerraform(struct!.tcpPortOverloaded),
    tcp_rsvd: cdktf.numberToTerraform(struct!.tcpRsvd),
    tcp_total: cdktf.numberToTerraform(struct!.tcpTotal),
    udp: cdktf.numberToTerraform(struct!.udp),
    udp_freed: cdktf.numberToTerraform(struct!.udpFreed),
    udp_hit_full: cdktf.numberToTerraform(struct!.udpHitFull),
    udp_peak: cdktf.numberToTerraform(struct!.udpPeak),
    udp_port_overload_create: cdktf.numberToTerraform(struct!.udpPortOverloadCreate),
    udp_port_overload_free: cdktf.numberToTerraform(struct!.udpPortOverloadFree),
    udp_port_overloaded: cdktf.numberToTerraform(struct!.udpPortOverloaded),
    udp_rsvd: cdktf.numberToTerraform(struct!.udpRsvd),
    udp_total: cdktf.numberToTerraform(struct!.udpTotal),
    users: cdktf.numberToTerraform(struct!.users),
  }
}


export function dataThunderCgnv6NatPoolStatsStatsToHclTerraform(struct?: DataThunderCgnv6NatPoolStatsStatsOutputReference | DataThunderCgnv6NatPoolStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    icmp: {
      value: cdktf.numberToHclTerraform(struct!.icmp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
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
    icmp_rsvd: {
      value: cdktf.numberToHclTerraform(struct!.icmpRsvd),
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
    ip_free: {
      value: cdktf.numberToHclTerraform(struct!.ipFree),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_total: {
      value: cdktf.numberToHclTerraform(struct!.ipTotal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_used: {
      value: cdktf.numberToHclTerraform(struct!.ipUsed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp: {
      value: cdktf.numberToHclTerraform(struct!.tcp),
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
    tcp_port_overload_create: {
      value: cdktf.numberToHclTerraform(struct!.tcpPortOverloadCreate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_port_overload_free: {
      value: cdktf.numberToHclTerraform(struct!.tcpPortOverloadFree),
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
    tcp_rsvd: {
      value: cdktf.numberToHclTerraform(struct!.tcpRsvd),
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
    udp: {
      value: cdktf.numberToHclTerraform(struct!.udp),
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
    udp_port_overload_create: {
      value: cdktf.numberToHclTerraform(struct!.udpPortOverloadCreate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_port_overload_free: {
      value: cdktf.numberToHclTerraform(struct!.udpPortOverloadFree),
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
    udp_rsvd: {
      value: cdktf.numberToHclTerraform(struct!.udpRsvd),
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

export class DataThunderCgnv6NatPoolStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderCgnv6NatPoolStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._icmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmp = this._icmp;
    }
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
    if (this._icmpRsvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpRsvd = this._icmpRsvd;
    }
    if (this._icmpTotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpTotal = this._icmpTotal;
    }
    if (this._ipFree !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFree = this._ipFree;
    }
    if (this._ipTotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipTotal = this._ipTotal;
    }
    if (this._ipUsed !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipUsed = this._ipUsed;
    }
    if (this._tcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcp = this._tcp;
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
    if (this._tcpPortOverloadCreate !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpPortOverloadCreate = this._tcpPortOverloadCreate;
    }
    if (this._tcpPortOverloadFree !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpPortOverloadFree = this._tcpPortOverloadFree;
    }
    if (this._tcpPortOverloaded !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpPortOverloaded = this._tcpPortOverloaded;
    }
    if (this._tcpRsvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpRsvd = this._tcpRsvd;
    }
    if (this._tcpTotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpTotal = this._tcpTotal;
    }
    if (this._udp !== undefined) {
      hasAnyValues = true;
      internalValueResult.udp = this._udp;
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
    if (this._udpPortOverloadCreate !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpPortOverloadCreate = this._udpPortOverloadCreate;
    }
    if (this._udpPortOverloadFree !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpPortOverloadFree = this._udpPortOverloadFree;
    }
    if (this._udpPortOverloaded !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpPortOverloaded = this._udpPortOverloaded;
    }
    if (this._udpRsvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpRsvd = this._udpRsvd;
    }
    if (this._udpTotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpTotal = this._udpTotal;
    }
    if (this._users !== undefined) {
      hasAnyValues = true;
      internalValueResult.users = this._users;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6NatPoolStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._icmp = undefined;
      this._icmpFreed = undefined;
      this._icmpHitFull = undefined;
      this._icmpPeak = undefined;
      this._icmpRsvd = undefined;
      this._icmpTotal = undefined;
      this._ipFree = undefined;
      this._ipTotal = undefined;
      this._ipUsed = undefined;
      this._tcp = undefined;
      this._tcpFreed = undefined;
      this._tcpHitFull = undefined;
      this._tcpPeak = undefined;
      this._tcpPortOverloadCreate = undefined;
      this._tcpPortOverloadFree = undefined;
      this._tcpPortOverloaded = undefined;
      this._tcpRsvd = undefined;
      this._tcpTotal = undefined;
      this._udp = undefined;
      this._udpFreed = undefined;
      this._udpHitFull = undefined;
      this._udpPeak = undefined;
      this._udpPortOverloadCreate = undefined;
      this._udpPortOverloadFree = undefined;
      this._udpPortOverloaded = undefined;
      this._udpRsvd = undefined;
      this._udpTotal = undefined;
      this._users = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._icmp = value.icmp;
      this._icmpFreed = value.icmpFreed;
      this._icmpHitFull = value.icmpHitFull;
      this._icmpPeak = value.icmpPeak;
      this._icmpRsvd = value.icmpRsvd;
      this._icmpTotal = value.icmpTotal;
      this._ipFree = value.ipFree;
      this._ipTotal = value.ipTotal;
      this._ipUsed = value.ipUsed;
      this._tcp = value.tcp;
      this._tcpFreed = value.tcpFreed;
      this._tcpHitFull = value.tcpHitFull;
      this._tcpPeak = value.tcpPeak;
      this._tcpPortOverloadCreate = value.tcpPortOverloadCreate;
      this._tcpPortOverloadFree = value.tcpPortOverloadFree;
      this._tcpPortOverloaded = value.tcpPortOverloaded;
      this._tcpRsvd = value.tcpRsvd;
      this._tcpTotal = value.tcpTotal;
      this._udp = value.udp;
      this._udpFreed = value.udpFreed;
      this._udpHitFull = value.udpHitFull;
      this._udpPeak = value.udpPeak;
      this._udpPortOverloadCreate = value.udpPortOverloadCreate;
      this._udpPortOverloadFree = value.udpPortOverloadFree;
      this._udpPortOverloaded = value.udpPortOverloaded;
      this._udpRsvd = value.udpRsvd;
      this._udpTotal = value.udpTotal;
      this._users = value.users;
    }
  }

  // icmp - computed: false, optional: true, required: false
  private _icmp?: number; 
  public get icmp() {
    return this.getNumberAttribute('icmp');
  }
  public set icmp(value: number) {
    this._icmp = value;
  }
  public resetIcmp() {
    this._icmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpInput() {
    return this._icmp;
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

  // icmp_rsvd - computed: false, optional: true, required: false
  private _icmpRsvd?: number; 
  public get icmpRsvd() {
    return this.getNumberAttribute('icmp_rsvd');
  }
  public set icmpRsvd(value: number) {
    this._icmpRsvd = value;
  }
  public resetIcmpRsvd() {
    this._icmpRsvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpRsvdInput() {
    return this._icmpRsvd;
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

  // ip_free - computed: false, optional: true, required: false
  private _ipFree?: number; 
  public get ipFree() {
    return this.getNumberAttribute('ip_free');
  }
  public set ipFree(value: number) {
    this._ipFree = value;
  }
  public resetIpFree() {
    this._ipFree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFreeInput() {
    return this._ipFree;
  }

  // ip_total - computed: false, optional: true, required: false
  private _ipTotal?: number; 
  public get ipTotal() {
    return this.getNumberAttribute('ip_total');
  }
  public set ipTotal(value: number) {
    this._ipTotal = value;
  }
  public resetIpTotal() {
    this._ipTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipTotalInput() {
    return this._ipTotal;
  }

  // ip_used - computed: false, optional: true, required: false
  private _ipUsed?: number; 
  public get ipUsed() {
    return this.getNumberAttribute('ip_used');
  }
  public set ipUsed(value: number) {
    this._ipUsed = value;
  }
  public resetIpUsed() {
    this._ipUsed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipUsedInput() {
    return this._ipUsed;
  }

  // tcp - computed: false, optional: true, required: false
  private _tcp?: number; 
  public get tcp() {
    return this.getNumberAttribute('tcp');
  }
  public set tcp(value: number) {
    this._tcp = value;
  }
  public resetTcp() {
    this._tcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpInput() {
    return this._tcp;
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

  // tcp_port_overload_create - computed: false, optional: true, required: false
  private _tcpPortOverloadCreate?: number; 
  public get tcpPortOverloadCreate() {
    return this.getNumberAttribute('tcp_port_overload_create');
  }
  public set tcpPortOverloadCreate(value: number) {
    this._tcpPortOverloadCreate = value;
  }
  public resetTcpPortOverloadCreate() {
    this._tcpPortOverloadCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpPortOverloadCreateInput() {
    return this._tcpPortOverloadCreate;
  }

  // tcp_port_overload_free - computed: false, optional: true, required: false
  private _tcpPortOverloadFree?: number; 
  public get tcpPortOverloadFree() {
    return this.getNumberAttribute('tcp_port_overload_free');
  }
  public set tcpPortOverloadFree(value: number) {
    this._tcpPortOverloadFree = value;
  }
  public resetTcpPortOverloadFree() {
    this._tcpPortOverloadFree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpPortOverloadFreeInput() {
    return this._tcpPortOverloadFree;
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

  // tcp_rsvd - computed: false, optional: true, required: false
  private _tcpRsvd?: number; 
  public get tcpRsvd() {
    return this.getNumberAttribute('tcp_rsvd');
  }
  public set tcpRsvd(value: number) {
    this._tcpRsvd = value;
  }
  public resetTcpRsvd() {
    this._tcpRsvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpRsvdInput() {
    return this._tcpRsvd;
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

  // udp - computed: false, optional: true, required: false
  private _udp?: number; 
  public get udp() {
    return this.getNumberAttribute('udp');
  }
  public set udp(value: number) {
    this._udp = value;
  }
  public resetUdp() {
    this._udp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpInput() {
    return this._udp;
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

  // udp_port_overload_create - computed: false, optional: true, required: false
  private _udpPortOverloadCreate?: number; 
  public get udpPortOverloadCreate() {
    return this.getNumberAttribute('udp_port_overload_create');
  }
  public set udpPortOverloadCreate(value: number) {
    this._udpPortOverloadCreate = value;
  }
  public resetUdpPortOverloadCreate() {
    this._udpPortOverloadCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpPortOverloadCreateInput() {
    return this._udpPortOverloadCreate;
  }

  // udp_port_overload_free - computed: false, optional: true, required: false
  private _udpPortOverloadFree?: number; 
  public get udpPortOverloadFree() {
    return this.getNumberAttribute('udp_port_overload_free');
  }
  public set udpPortOverloadFree(value: number) {
    this._udpPortOverloadFree = value;
  }
  public resetUdpPortOverloadFree() {
    this._udpPortOverloadFree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpPortOverloadFreeInput() {
    return this._udpPortOverloadFree;
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

  // udp_rsvd - computed: false, optional: true, required: false
  private _udpRsvd?: number; 
  public get udpRsvd() {
    return this.getNumberAttribute('udp_rsvd');
  }
  public set udpRsvd(value: number) {
    this._udpRsvd = value;
  }
  public resetUdpRsvd() {
    this._udpRsvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpRsvdInput() {
    return this._udpRsvd;
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

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat_pool_stats thunder_cgnv6_nat_pool_stats}
*/
export class DataThunderCgnv6NatPoolStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_nat_pool_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderCgnv6NatPoolStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderCgnv6NatPoolStats to import
  * @param importFromId The id of the existing DataThunderCgnv6NatPoolStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat_pool_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderCgnv6NatPoolStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_nat_pool_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat_pool_stats thunder_cgnv6_nat_pool_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderCgnv6NatPoolStatsConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderCgnv6NatPoolStatsConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_nat_pool_stats',
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
    this._poolName = config.poolName;
    this._stats.internalValue = config.stats;
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

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderCgnv6NatPoolStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderCgnv6NatPoolStatsStats) {
    this._stats.internalValue = value;
  }
  public resetStats() {
    this._stats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsInput() {
    return this._stats.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      pool_name: cdktf.stringToTerraform(this._poolName),
      stats: dataThunderCgnv6NatPoolStatsStatsToTerraform(this._stats.internalValue),
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
      stats: {
        value: dataThunderCgnv6NatPoolStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderCgnv6NatPoolStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
