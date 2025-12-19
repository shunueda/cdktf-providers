// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_tunnel_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderDdosTunnelStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_tunnel_stats#id DataThunderDdosTunnelStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_tunnel_stats#stats DataThunderDdosTunnelStats#stats}
  */
  readonly stats?: DataThunderDdosTunnelStatsStats;
}
export interface DataThunderDdosTunnelStatsStats {
  /**
  * ESP V6 Tunnel Inspect
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_tunnel_stats#ip6_esp_tunnel_inspect DataThunderDdosTunnelStats#ip6_esp_tunnel_inspect}
  */
  readonly ip6EspTunnelInspect?: number;
  /**
  * ESP V6 Tunnel Inspect Fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_tunnel_stats#ip6_esp_tunnel_inspect_fail DataThunderDdosTunnelStats#ip6_esp_tunnel_inspect_fail}
  */
  readonly ip6EspTunnelInspectFail?: number;
  /**
  * ESP V6 Tunnel Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_tunnel_stats#ip6_esp_tunnel_rcvd DataThunderDdosTunnelStats#ip6_esp_tunnel_rcvd}
  */
  readonly ip6EspTunnelRcvd?: number;
  /**
  * GRE V6 Tunnel Decap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_tunnel_stats#ip6_gre_tunnel_decap DataThunderDdosTunnelStats#ip6_gre_tunnel_decap}
  */
  readonly ip6GreTunnelDecap?: number;
  /**
  * GRE V6 Tunnel Decap No Key Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_tunnel_stats#ip6_gre_tunnel_decap_drop DataThunderDdosTunnelStats#ip6_gre_tunnel_decap_drop}
  */
  readonly ip6GreTunnelDecapDrop?: number;
  /**
  * GRE V6 Tunnel Decap Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_tunnel_stats#ip6_gre_tunnel_decap_fail DataThunderDdosTunnelStats#ip6_gre_tunnel_decap_fail}
  */
  readonly ip6GreTunnelDecapFail?: number;
  /**
  * GRE V6 Tunnel Decap W/ Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_tunnel_stats#ip6_gre_tunnel_decap_key DataThunderDdosTunnelStats#ip6_gre_tunnel_decap_key}
  */
  readonly ip6GreTunnelDecapKey?: number;
  /**
  * GRE V6 Tunnel Encap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_tunnel_stats#ip6_gre_tunnel_encap DataThunderDdosTunnelStats#ip6_gre_tunnel_encap}
  */
  readonly ip6GreTunnelEncap?: number;
  /**
  * GRE V6 Tunnel Encap Received Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_tunnel_stats#ip6_gre_tunnel_encap_fail DataThunderDdosTunnelStats#ip6_gre_tunnel_encap_fail}
  */
  readonly ip6GreTunnelEncapFail?: number;
  /**
  * GRE V6 Tunnel Encap W/ Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_tunnel_stats#ip6_gre_tunnel_encap_key DataThunderDdosTunnelStats#ip6_gre_tunnel_encap_key}
  */
  readonly ip6GreTunnelEncapKey?: number;
  /**
  * GRE V6 Tunnel Rate Limit Inner Pkts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_tunnel_stats#ip6_gre_tunnel_rate_limit_inner DataThunderDdosTunnelStats#ip6_gre_tunnel_rate_limit_inner}
  */
  readonly ip6GreTunnelRateLimitInner?: number;
  /**
  * GRE V6 Tunnel Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_tunnel_stats#ip6_gre_tunnel_rcvd DataThunderDdosTunnelStats#ip6_gre_tunnel_rcvd}
  */
  readonly ip6GreTunnelRcvd?: number;
  /**
  * IPv6 Tunnel Decap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_tunnel_stats#ip6_tunnel_decap DataThunderDdosTunnelStats#ip6_tunnel_decap}
  */
  readonly ip6TunnelDecap?: number;
  /**
  * IPv6 Tunnel Decap Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_tunnel_stats#ip6_tunnel_decap_fail DataThunderDdosTunnelStats#ip6_tunnel_decap_fail}
  */
  readonly ip6TunnelDecapFail?: number;
  /**
  * IPv6 Tunnel Encap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_tunnel_stats#ip6_tunnel_encap DataThunderDdosTunnelStats#ip6_tunnel_encap}
  */
  readonly ip6TunnelEncap?: number;
  /**
  * IPv6 Tunnel Encap Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_tunnel_stats#ip6_tunnel_encap_fail DataThunderDdosTunnelStats#ip6_tunnel_encap_fail}
  */
  readonly ip6TunnelEncapFail?: number;
  /**
  * IPv6 Tunnel Rate Limit Inner Pkts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_tunnel_stats#ip6_tunnel_rate_limit_inner DataThunderDdosTunnelStats#ip6_tunnel_rate_limit_inner}
  */
  readonly ip6TunnelRateLimitInner?: number;
  /**
  * IPv6 Tunnel Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_tunnel_stats#ip6_tunnel_rcvd DataThunderDdosTunnelStats#ip6_tunnel_rcvd}
  */
  readonly ip6TunnelRcvd?: number;
  /**
  * ESP Tunnel Inspect
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_tunnel_stats#ip_esp_tunnel_inspect DataThunderDdosTunnelStats#ip_esp_tunnel_inspect}
  */
  readonly ipEspTunnelInspect?: number;
  /**
  * ESP Tunnel Inspect Fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_tunnel_stats#ip_esp_tunnel_inspect_fail DataThunderDdosTunnelStats#ip_esp_tunnel_inspect_fail}
  */
  readonly ipEspTunnelInspectFail?: number;
  /**
  * ESP Tunnel Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_tunnel_stats#ip_esp_tunnel_rcvd DataThunderDdosTunnelStats#ip_esp_tunnel_rcvd}
  */
  readonly ipEspTunnelRcvd?: number;
  /**
  * GRE Tunnel Decap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_tunnel_stats#ip_gre_tunnel_decap DataThunderDdosTunnelStats#ip_gre_tunnel_decap}
  */
  readonly ipGreTunnelDecap?: number;
  /**
  * GRE Tunnel Decap Key Mismatch Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_tunnel_stats#ip_gre_tunnel_decap_drop DataThunderDdosTunnelStats#ip_gre_tunnel_decap_drop}
  */
  readonly ipGreTunnelDecapDrop?: number;
  /**
  * GRE Tunnel Decap Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_tunnel_stats#ip_gre_tunnel_decap_fail DataThunderDdosTunnelStats#ip_gre_tunnel_decap_fail}
  */
  readonly ipGreTunnelDecapFail?: number;
  /**
  * GRE Tunnel Decap W/ Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_tunnel_stats#ip_gre_tunnel_decap_key DataThunderDdosTunnelStats#ip_gre_tunnel_decap_key}
  */
  readonly ipGreTunnelDecapKey?: number;
  /**
  * GRE Tunnel Encap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_tunnel_stats#ip_gre_tunnel_encap DataThunderDdosTunnelStats#ip_gre_tunnel_encap}
  */
  readonly ipGreTunnelEncap?: number;
  /**
  * GRE Tunnel Encap Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_tunnel_stats#ip_gre_tunnel_encap_fail DataThunderDdosTunnelStats#ip_gre_tunnel_encap_fail}
  */
  readonly ipGreTunnelEncapFail?: number;
  /**
  * GRE Tunnel Encap W/ Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_tunnel_stats#ip_gre_tunnel_encap_key DataThunderDdosTunnelStats#ip_gre_tunnel_encap_key}
  */
  readonly ipGreTunnelEncapKey?: number;
  /**
  * GRE Tunnel Keep-Alive Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_tunnel_stats#ip_gre_tunnel_keepalive_rcvd DataThunderDdosTunnelStats#ip_gre_tunnel_keepalive_rcvd}
  */
  readonly ipGreTunnelKeepaliveRcvd?: number;
  /**
  * GRE Tunnel Rate Limit Inner Pkts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_tunnel_stats#ip_gre_tunnel_rate_limit_inner DataThunderDdosTunnelStats#ip_gre_tunnel_rate_limit_inner}
  */
  readonly ipGreTunnelRateLimitInner?: number;
  /**
  * GRE Tunnel Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_tunnel_stats#ip_gre_tunnel_rcvd DataThunderDdosTunnelStats#ip_gre_tunnel_rcvd}
  */
  readonly ipGreTunnelRcvd?: number;
  /**
  * IPv4 Tunnel Decap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_tunnel_stats#ip_tunnel_decap DataThunderDdosTunnelStats#ip_tunnel_decap}
  */
  readonly ipTunnelDecap?: number;
  /**
  * IPv4 Tunnel Decap Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_tunnel_stats#ip_tunnel_decap_fail DataThunderDdosTunnelStats#ip_tunnel_decap_fail}
  */
  readonly ipTunnelDecapFail?: number;
  /**
  * IPv4 Tunnel Encap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_tunnel_stats#ip_tunnel_encap DataThunderDdosTunnelStats#ip_tunnel_encap}
  */
  readonly ipTunnelEncap?: number;
  /**
  * IPv4 Tunnel Encap Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_tunnel_stats#ip_tunnel_encap_fail DataThunderDdosTunnelStats#ip_tunnel_encap_fail}
  */
  readonly ipTunnelEncapFail?: number;
  /**
  * IPv4 Tunnel Rate Limit Inner Pkts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_tunnel_stats#ip_tunnel_rate_limit_inner DataThunderDdosTunnelStats#ip_tunnel_rate_limit_inner}
  */
  readonly ipTunnelRateLimitInner?: number;
  /**
  * IPv4 Tunnel Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_tunnel_stats#ip_tunnel_rcvd DataThunderDdosTunnelStats#ip_tunnel_rcvd}
  */
  readonly ipTunnelRcvd?: number;
  /**
  * IP VxLAN Decap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_tunnel_stats#ip_vxlan_tunnel_decap DataThunderDdosTunnelStats#ip_vxlan_tunnel_decap}
  */
  readonly ipVxlanTunnelDecap?: number;
  /**
  * IP VxLAN Decap Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_tunnel_stats#ip_vxlan_tunnel_decap_err DataThunderDdosTunnelStats#ip_vxlan_tunnel_decap_err}
  */
  readonly ipVxlanTunnelDecapErr?: number;
  /**
  * IP VxLAN Invalid VNI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_tunnel_stats#ip_vxlan_tunnel_invalid_vni DataThunderDdosTunnelStats#ip_vxlan_tunnel_invalid_vni}
  */
  readonly ipVxlanTunnelInvalidVni?: number;
  /**
  * IP VxLAN Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_tunnel_stats#ip_vxlan_tunnel_rcvd DataThunderDdosTunnelStats#ip_vxlan_tunnel_rcvd}
  */
  readonly ipVxlanTunnelRcvd?: number;
  /**
  * Jumbo Packet in Tunnel Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_tunnel_stats#jumbo_in_tunnel_drop DataThunderDdosTunnelStats#jumbo_in_tunnel_drop}
  */
  readonly jumboInTunnelDrop?: number;
}

export function dataThunderDdosTunnelStatsStatsToTerraform(struct?: DataThunderDdosTunnelStatsStatsOutputReference | DataThunderDdosTunnelStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip6_esp_tunnel_inspect: cdktf.numberToTerraform(struct!.ip6EspTunnelInspect),
    ip6_esp_tunnel_inspect_fail: cdktf.numberToTerraform(struct!.ip6EspTunnelInspectFail),
    ip6_esp_tunnel_rcvd: cdktf.numberToTerraform(struct!.ip6EspTunnelRcvd),
    ip6_gre_tunnel_decap: cdktf.numberToTerraform(struct!.ip6GreTunnelDecap),
    ip6_gre_tunnel_decap_drop: cdktf.numberToTerraform(struct!.ip6GreTunnelDecapDrop),
    ip6_gre_tunnel_decap_fail: cdktf.numberToTerraform(struct!.ip6GreTunnelDecapFail),
    ip6_gre_tunnel_decap_key: cdktf.numberToTerraform(struct!.ip6GreTunnelDecapKey),
    ip6_gre_tunnel_encap: cdktf.numberToTerraform(struct!.ip6GreTunnelEncap),
    ip6_gre_tunnel_encap_fail: cdktf.numberToTerraform(struct!.ip6GreTunnelEncapFail),
    ip6_gre_tunnel_encap_key: cdktf.numberToTerraform(struct!.ip6GreTunnelEncapKey),
    ip6_gre_tunnel_rate_limit_inner: cdktf.numberToTerraform(struct!.ip6GreTunnelRateLimitInner),
    ip6_gre_tunnel_rcvd: cdktf.numberToTerraform(struct!.ip6GreTunnelRcvd),
    ip6_tunnel_decap: cdktf.numberToTerraform(struct!.ip6TunnelDecap),
    ip6_tunnel_decap_fail: cdktf.numberToTerraform(struct!.ip6TunnelDecapFail),
    ip6_tunnel_encap: cdktf.numberToTerraform(struct!.ip6TunnelEncap),
    ip6_tunnel_encap_fail: cdktf.numberToTerraform(struct!.ip6TunnelEncapFail),
    ip6_tunnel_rate_limit_inner: cdktf.numberToTerraform(struct!.ip6TunnelRateLimitInner),
    ip6_tunnel_rcvd: cdktf.numberToTerraform(struct!.ip6TunnelRcvd),
    ip_esp_tunnel_inspect: cdktf.numberToTerraform(struct!.ipEspTunnelInspect),
    ip_esp_tunnel_inspect_fail: cdktf.numberToTerraform(struct!.ipEspTunnelInspectFail),
    ip_esp_tunnel_rcvd: cdktf.numberToTerraform(struct!.ipEspTunnelRcvd),
    ip_gre_tunnel_decap: cdktf.numberToTerraform(struct!.ipGreTunnelDecap),
    ip_gre_tunnel_decap_drop: cdktf.numberToTerraform(struct!.ipGreTunnelDecapDrop),
    ip_gre_tunnel_decap_fail: cdktf.numberToTerraform(struct!.ipGreTunnelDecapFail),
    ip_gre_tunnel_decap_key: cdktf.numberToTerraform(struct!.ipGreTunnelDecapKey),
    ip_gre_tunnel_encap: cdktf.numberToTerraform(struct!.ipGreTunnelEncap),
    ip_gre_tunnel_encap_fail: cdktf.numberToTerraform(struct!.ipGreTunnelEncapFail),
    ip_gre_tunnel_encap_key: cdktf.numberToTerraform(struct!.ipGreTunnelEncapKey),
    ip_gre_tunnel_keepalive_rcvd: cdktf.numberToTerraform(struct!.ipGreTunnelKeepaliveRcvd),
    ip_gre_tunnel_rate_limit_inner: cdktf.numberToTerraform(struct!.ipGreTunnelRateLimitInner),
    ip_gre_tunnel_rcvd: cdktf.numberToTerraform(struct!.ipGreTunnelRcvd),
    ip_tunnel_decap: cdktf.numberToTerraform(struct!.ipTunnelDecap),
    ip_tunnel_decap_fail: cdktf.numberToTerraform(struct!.ipTunnelDecapFail),
    ip_tunnel_encap: cdktf.numberToTerraform(struct!.ipTunnelEncap),
    ip_tunnel_encap_fail: cdktf.numberToTerraform(struct!.ipTunnelEncapFail),
    ip_tunnel_rate_limit_inner: cdktf.numberToTerraform(struct!.ipTunnelRateLimitInner),
    ip_tunnel_rcvd: cdktf.numberToTerraform(struct!.ipTunnelRcvd),
    ip_vxlan_tunnel_decap: cdktf.numberToTerraform(struct!.ipVxlanTunnelDecap),
    ip_vxlan_tunnel_decap_err: cdktf.numberToTerraform(struct!.ipVxlanTunnelDecapErr),
    ip_vxlan_tunnel_invalid_vni: cdktf.numberToTerraform(struct!.ipVxlanTunnelInvalidVni),
    ip_vxlan_tunnel_rcvd: cdktf.numberToTerraform(struct!.ipVxlanTunnelRcvd),
    jumbo_in_tunnel_drop: cdktf.numberToTerraform(struct!.jumboInTunnelDrop),
  }
}


export function dataThunderDdosTunnelStatsStatsToHclTerraform(struct?: DataThunderDdosTunnelStatsStatsOutputReference | DataThunderDdosTunnelStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip6_esp_tunnel_inspect: {
      value: cdktf.numberToHclTerraform(struct!.ip6EspTunnelInspect),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip6_esp_tunnel_inspect_fail: {
      value: cdktf.numberToHclTerraform(struct!.ip6EspTunnelInspectFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip6_esp_tunnel_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.ip6EspTunnelRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip6_gre_tunnel_decap: {
      value: cdktf.numberToHclTerraform(struct!.ip6GreTunnelDecap),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip6_gre_tunnel_decap_drop: {
      value: cdktf.numberToHclTerraform(struct!.ip6GreTunnelDecapDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip6_gre_tunnel_decap_fail: {
      value: cdktf.numberToHclTerraform(struct!.ip6GreTunnelDecapFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip6_gre_tunnel_decap_key: {
      value: cdktf.numberToHclTerraform(struct!.ip6GreTunnelDecapKey),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip6_gre_tunnel_encap: {
      value: cdktf.numberToHclTerraform(struct!.ip6GreTunnelEncap),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip6_gre_tunnel_encap_fail: {
      value: cdktf.numberToHclTerraform(struct!.ip6GreTunnelEncapFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip6_gre_tunnel_encap_key: {
      value: cdktf.numberToHclTerraform(struct!.ip6GreTunnelEncapKey),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip6_gre_tunnel_rate_limit_inner: {
      value: cdktf.numberToHclTerraform(struct!.ip6GreTunnelRateLimitInner),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip6_gre_tunnel_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.ip6GreTunnelRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip6_tunnel_decap: {
      value: cdktf.numberToHclTerraform(struct!.ip6TunnelDecap),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip6_tunnel_decap_fail: {
      value: cdktf.numberToHclTerraform(struct!.ip6TunnelDecapFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip6_tunnel_encap: {
      value: cdktf.numberToHclTerraform(struct!.ip6TunnelEncap),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip6_tunnel_encap_fail: {
      value: cdktf.numberToHclTerraform(struct!.ip6TunnelEncapFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip6_tunnel_rate_limit_inner: {
      value: cdktf.numberToHclTerraform(struct!.ip6TunnelRateLimitInner),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip6_tunnel_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.ip6TunnelRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_esp_tunnel_inspect: {
      value: cdktf.numberToHclTerraform(struct!.ipEspTunnelInspect),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_esp_tunnel_inspect_fail: {
      value: cdktf.numberToHclTerraform(struct!.ipEspTunnelInspectFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_esp_tunnel_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.ipEspTunnelRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_gre_tunnel_decap: {
      value: cdktf.numberToHclTerraform(struct!.ipGreTunnelDecap),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_gre_tunnel_decap_drop: {
      value: cdktf.numberToHclTerraform(struct!.ipGreTunnelDecapDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_gre_tunnel_decap_fail: {
      value: cdktf.numberToHclTerraform(struct!.ipGreTunnelDecapFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_gre_tunnel_decap_key: {
      value: cdktf.numberToHclTerraform(struct!.ipGreTunnelDecapKey),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_gre_tunnel_encap: {
      value: cdktf.numberToHclTerraform(struct!.ipGreTunnelEncap),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_gre_tunnel_encap_fail: {
      value: cdktf.numberToHclTerraform(struct!.ipGreTunnelEncapFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_gre_tunnel_encap_key: {
      value: cdktf.numberToHclTerraform(struct!.ipGreTunnelEncapKey),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_gre_tunnel_keepalive_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.ipGreTunnelKeepaliveRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_gre_tunnel_rate_limit_inner: {
      value: cdktf.numberToHclTerraform(struct!.ipGreTunnelRateLimitInner),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_gre_tunnel_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.ipGreTunnelRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_tunnel_decap: {
      value: cdktf.numberToHclTerraform(struct!.ipTunnelDecap),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_tunnel_decap_fail: {
      value: cdktf.numberToHclTerraform(struct!.ipTunnelDecapFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_tunnel_encap: {
      value: cdktf.numberToHclTerraform(struct!.ipTunnelEncap),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_tunnel_encap_fail: {
      value: cdktf.numberToHclTerraform(struct!.ipTunnelEncapFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_tunnel_rate_limit_inner: {
      value: cdktf.numberToHclTerraform(struct!.ipTunnelRateLimitInner),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_tunnel_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.ipTunnelRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_vxlan_tunnel_decap: {
      value: cdktf.numberToHclTerraform(struct!.ipVxlanTunnelDecap),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_vxlan_tunnel_decap_err: {
      value: cdktf.numberToHclTerraform(struct!.ipVxlanTunnelDecapErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_vxlan_tunnel_invalid_vni: {
      value: cdktf.numberToHclTerraform(struct!.ipVxlanTunnelInvalidVni),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_vxlan_tunnel_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.ipVxlanTunnelRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    jumbo_in_tunnel_drop: {
      value: cdktf.numberToHclTerraform(struct!.jumboInTunnelDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosTunnelStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosTunnelStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip6EspTunnelInspect !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6EspTunnelInspect = this._ip6EspTunnelInspect;
    }
    if (this._ip6EspTunnelInspectFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6EspTunnelInspectFail = this._ip6EspTunnelInspectFail;
    }
    if (this._ip6EspTunnelRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6EspTunnelRcvd = this._ip6EspTunnelRcvd;
    }
    if (this._ip6GreTunnelDecap !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6GreTunnelDecap = this._ip6GreTunnelDecap;
    }
    if (this._ip6GreTunnelDecapDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6GreTunnelDecapDrop = this._ip6GreTunnelDecapDrop;
    }
    if (this._ip6GreTunnelDecapFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6GreTunnelDecapFail = this._ip6GreTunnelDecapFail;
    }
    if (this._ip6GreTunnelDecapKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6GreTunnelDecapKey = this._ip6GreTunnelDecapKey;
    }
    if (this._ip6GreTunnelEncap !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6GreTunnelEncap = this._ip6GreTunnelEncap;
    }
    if (this._ip6GreTunnelEncapFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6GreTunnelEncapFail = this._ip6GreTunnelEncapFail;
    }
    if (this._ip6GreTunnelEncapKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6GreTunnelEncapKey = this._ip6GreTunnelEncapKey;
    }
    if (this._ip6GreTunnelRateLimitInner !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6GreTunnelRateLimitInner = this._ip6GreTunnelRateLimitInner;
    }
    if (this._ip6GreTunnelRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6GreTunnelRcvd = this._ip6GreTunnelRcvd;
    }
    if (this._ip6TunnelDecap !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6TunnelDecap = this._ip6TunnelDecap;
    }
    if (this._ip6TunnelDecapFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6TunnelDecapFail = this._ip6TunnelDecapFail;
    }
    if (this._ip6TunnelEncap !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6TunnelEncap = this._ip6TunnelEncap;
    }
    if (this._ip6TunnelEncapFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6TunnelEncapFail = this._ip6TunnelEncapFail;
    }
    if (this._ip6TunnelRateLimitInner !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6TunnelRateLimitInner = this._ip6TunnelRateLimitInner;
    }
    if (this._ip6TunnelRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6TunnelRcvd = this._ip6TunnelRcvd;
    }
    if (this._ipEspTunnelInspect !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipEspTunnelInspect = this._ipEspTunnelInspect;
    }
    if (this._ipEspTunnelInspectFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipEspTunnelInspectFail = this._ipEspTunnelInspectFail;
    }
    if (this._ipEspTunnelRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipEspTunnelRcvd = this._ipEspTunnelRcvd;
    }
    if (this._ipGreTunnelDecap !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipGreTunnelDecap = this._ipGreTunnelDecap;
    }
    if (this._ipGreTunnelDecapDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipGreTunnelDecapDrop = this._ipGreTunnelDecapDrop;
    }
    if (this._ipGreTunnelDecapFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipGreTunnelDecapFail = this._ipGreTunnelDecapFail;
    }
    if (this._ipGreTunnelDecapKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipGreTunnelDecapKey = this._ipGreTunnelDecapKey;
    }
    if (this._ipGreTunnelEncap !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipGreTunnelEncap = this._ipGreTunnelEncap;
    }
    if (this._ipGreTunnelEncapFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipGreTunnelEncapFail = this._ipGreTunnelEncapFail;
    }
    if (this._ipGreTunnelEncapKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipGreTunnelEncapKey = this._ipGreTunnelEncapKey;
    }
    if (this._ipGreTunnelKeepaliveRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipGreTunnelKeepaliveRcvd = this._ipGreTunnelKeepaliveRcvd;
    }
    if (this._ipGreTunnelRateLimitInner !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipGreTunnelRateLimitInner = this._ipGreTunnelRateLimitInner;
    }
    if (this._ipGreTunnelRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipGreTunnelRcvd = this._ipGreTunnelRcvd;
    }
    if (this._ipTunnelDecap !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipTunnelDecap = this._ipTunnelDecap;
    }
    if (this._ipTunnelDecapFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipTunnelDecapFail = this._ipTunnelDecapFail;
    }
    if (this._ipTunnelEncap !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipTunnelEncap = this._ipTunnelEncap;
    }
    if (this._ipTunnelEncapFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipTunnelEncapFail = this._ipTunnelEncapFail;
    }
    if (this._ipTunnelRateLimitInner !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipTunnelRateLimitInner = this._ipTunnelRateLimitInner;
    }
    if (this._ipTunnelRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipTunnelRcvd = this._ipTunnelRcvd;
    }
    if (this._ipVxlanTunnelDecap !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipVxlanTunnelDecap = this._ipVxlanTunnelDecap;
    }
    if (this._ipVxlanTunnelDecapErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipVxlanTunnelDecapErr = this._ipVxlanTunnelDecapErr;
    }
    if (this._ipVxlanTunnelInvalidVni !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipVxlanTunnelInvalidVni = this._ipVxlanTunnelInvalidVni;
    }
    if (this._ipVxlanTunnelRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipVxlanTunnelRcvd = this._ipVxlanTunnelRcvd;
    }
    if (this._jumboInTunnelDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.jumboInTunnelDrop = this._jumboInTunnelDrop;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosTunnelStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ip6EspTunnelInspect = undefined;
      this._ip6EspTunnelInspectFail = undefined;
      this._ip6EspTunnelRcvd = undefined;
      this._ip6GreTunnelDecap = undefined;
      this._ip6GreTunnelDecapDrop = undefined;
      this._ip6GreTunnelDecapFail = undefined;
      this._ip6GreTunnelDecapKey = undefined;
      this._ip6GreTunnelEncap = undefined;
      this._ip6GreTunnelEncapFail = undefined;
      this._ip6GreTunnelEncapKey = undefined;
      this._ip6GreTunnelRateLimitInner = undefined;
      this._ip6GreTunnelRcvd = undefined;
      this._ip6TunnelDecap = undefined;
      this._ip6TunnelDecapFail = undefined;
      this._ip6TunnelEncap = undefined;
      this._ip6TunnelEncapFail = undefined;
      this._ip6TunnelRateLimitInner = undefined;
      this._ip6TunnelRcvd = undefined;
      this._ipEspTunnelInspect = undefined;
      this._ipEspTunnelInspectFail = undefined;
      this._ipEspTunnelRcvd = undefined;
      this._ipGreTunnelDecap = undefined;
      this._ipGreTunnelDecapDrop = undefined;
      this._ipGreTunnelDecapFail = undefined;
      this._ipGreTunnelDecapKey = undefined;
      this._ipGreTunnelEncap = undefined;
      this._ipGreTunnelEncapFail = undefined;
      this._ipGreTunnelEncapKey = undefined;
      this._ipGreTunnelKeepaliveRcvd = undefined;
      this._ipGreTunnelRateLimitInner = undefined;
      this._ipGreTunnelRcvd = undefined;
      this._ipTunnelDecap = undefined;
      this._ipTunnelDecapFail = undefined;
      this._ipTunnelEncap = undefined;
      this._ipTunnelEncapFail = undefined;
      this._ipTunnelRateLimitInner = undefined;
      this._ipTunnelRcvd = undefined;
      this._ipVxlanTunnelDecap = undefined;
      this._ipVxlanTunnelDecapErr = undefined;
      this._ipVxlanTunnelInvalidVni = undefined;
      this._ipVxlanTunnelRcvd = undefined;
      this._jumboInTunnelDrop = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ip6EspTunnelInspect = value.ip6EspTunnelInspect;
      this._ip6EspTunnelInspectFail = value.ip6EspTunnelInspectFail;
      this._ip6EspTunnelRcvd = value.ip6EspTunnelRcvd;
      this._ip6GreTunnelDecap = value.ip6GreTunnelDecap;
      this._ip6GreTunnelDecapDrop = value.ip6GreTunnelDecapDrop;
      this._ip6GreTunnelDecapFail = value.ip6GreTunnelDecapFail;
      this._ip6GreTunnelDecapKey = value.ip6GreTunnelDecapKey;
      this._ip6GreTunnelEncap = value.ip6GreTunnelEncap;
      this._ip6GreTunnelEncapFail = value.ip6GreTunnelEncapFail;
      this._ip6GreTunnelEncapKey = value.ip6GreTunnelEncapKey;
      this._ip6GreTunnelRateLimitInner = value.ip6GreTunnelRateLimitInner;
      this._ip6GreTunnelRcvd = value.ip6GreTunnelRcvd;
      this._ip6TunnelDecap = value.ip6TunnelDecap;
      this._ip6TunnelDecapFail = value.ip6TunnelDecapFail;
      this._ip6TunnelEncap = value.ip6TunnelEncap;
      this._ip6TunnelEncapFail = value.ip6TunnelEncapFail;
      this._ip6TunnelRateLimitInner = value.ip6TunnelRateLimitInner;
      this._ip6TunnelRcvd = value.ip6TunnelRcvd;
      this._ipEspTunnelInspect = value.ipEspTunnelInspect;
      this._ipEspTunnelInspectFail = value.ipEspTunnelInspectFail;
      this._ipEspTunnelRcvd = value.ipEspTunnelRcvd;
      this._ipGreTunnelDecap = value.ipGreTunnelDecap;
      this._ipGreTunnelDecapDrop = value.ipGreTunnelDecapDrop;
      this._ipGreTunnelDecapFail = value.ipGreTunnelDecapFail;
      this._ipGreTunnelDecapKey = value.ipGreTunnelDecapKey;
      this._ipGreTunnelEncap = value.ipGreTunnelEncap;
      this._ipGreTunnelEncapFail = value.ipGreTunnelEncapFail;
      this._ipGreTunnelEncapKey = value.ipGreTunnelEncapKey;
      this._ipGreTunnelKeepaliveRcvd = value.ipGreTunnelKeepaliveRcvd;
      this._ipGreTunnelRateLimitInner = value.ipGreTunnelRateLimitInner;
      this._ipGreTunnelRcvd = value.ipGreTunnelRcvd;
      this._ipTunnelDecap = value.ipTunnelDecap;
      this._ipTunnelDecapFail = value.ipTunnelDecapFail;
      this._ipTunnelEncap = value.ipTunnelEncap;
      this._ipTunnelEncapFail = value.ipTunnelEncapFail;
      this._ipTunnelRateLimitInner = value.ipTunnelRateLimitInner;
      this._ipTunnelRcvd = value.ipTunnelRcvd;
      this._ipVxlanTunnelDecap = value.ipVxlanTunnelDecap;
      this._ipVxlanTunnelDecapErr = value.ipVxlanTunnelDecapErr;
      this._ipVxlanTunnelInvalidVni = value.ipVxlanTunnelInvalidVni;
      this._ipVxlanTunnelRcvd = value.ipVxlanTunnelRcvd;
      this._jumboInTunnelDrop = value.jumboInTunnelDrop;
    }
  }

  // ip6_esp_tunnel_inspect - computed: false, optional: true, required: false
  private _ip6EspTunnelInspect?: number; 
  public get ip6EspTunnelInspect() {
    return this.getNumberAttribute('ip6_esp_tunnel_inspect');
  }
  public set ip6EspTunnelInspect(value: number) {
    this._ip6EspTunnelInspect = value;
  }
  public resetIp6EspTunnelInspect() {
    this._ip6EspTunnelInspect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6EspTunnelInspectInput() {
    return this._ip6EspTunnelInspect;
  }

  // ip6_esp_tunnel_inspect_fail - computed: false, optional: true, required: false
  private _ip6EspTunnelInspectFail?: number; 
  public get ip6EspTunnelInspectFail() {
    return this.getNumberAttribute('ip6_esp_tunnel_inspect_fail');
  }
  public set ip6EspTunnelInspectFail(value: number) {
    this._ip6EspTunnelInspectFail = value;
  }
  public resetIp6EspTunnelInspectFail() {
    this._ip6EspTunnelInspectFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6EspTunnelInspectFailInput() {
    return this._ip6EspTunnelInspectFail;
  }

  // ip6_esp_tunnel_rcvd - computed: false, optional: true, required: false
  private _ip6EspTunnelRcvd?: number; 
  public get ip6EspTunnelRcvd() {
    return this.getNumberAttribute('ip6_esp_tunnel_rcvd');
  }
  public set ip6EspTunnelRcvd(value: number) {
    this._ip6EspTunnelRcvd = value;
  }
  public resetIp6EspTunnelRcvd() {
    this._ip6EspTunnelRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6EspTunnelRcvdInput() {
    return this._ip6EspTunnelRcvd;
  }

  // ip6_gre_tunnel_decap - computed: false, optional: true, required: false
  private _ip6GreTunnelDecap?: number; 
  public get ip6GreTunnelDecap() {
    return this.getNumberAttribute('ip6_gre_tunnel_decap');
  }
  public set ip6GreTunnelDecap(value: number) {
    this._ip6GreTunnelDecap = value;
  }
  public resetIp6GreTunnelDecap() {
    this._ip6GreTunnelDecap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6GreTunnelDecapInput() {
    return this._ip6GreTunnelDecap;
  }

  // ip6_gre_tunnel_decap_drop - computed: false, optional: true, required: false
  private _ip6GreTunnelDecapDrop?: number; 
  public get ip6GreTunnelDecapDrop() {
    return this.getNumberAttribute('ip6_gre_tunnel_decap_drop');
  }
  public set ip6GreTunnelDecapDrop(value: number) {
    this._ip6GreTunnelDecapDrop = value;
  }
  public resetIp6GreTunnelDecapDrop() {
    this._ip6GreTunnelDecapDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6GreTunnelDecapDropInput() {
    return this._ip6GreTunnelDecapDrop;
  }

  // ip6_gre_tunnel_decap_fail - computed: false, optional: true, required: false
  private _ip6GreTunnelDecapFail?: number; 
  public get ip6GreTunnelDecapFail() {
    return this.getNumberAttribute('ip6_gre_tunnel_decap_fail');
  }
  public set ip6GreTunnelDecapFail(value: number) {
    this._ip6GreTunnelDecapFail = value;
  }
  public resetIp6GreTunnelDecapFail() {
    this._ip6GreTunnelDecapFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6GreTunnelDecapFailInput() {
    return this._ip6GreTunnelDecapFail;
  }

  // ip6_gre_tunnel_decap_key - computed: false, optional: true, required: false
  private _ip6GreTunnelDecapKey?: number; 
  public get ip6GreTunnelDecapKey() {
    return this.getNumberAttribute('ip6_gre_tunnel_decap_key');
  }
  public set ip6GreTunnelDecapKey(value: number) {
    this._ip6GreTunnelDecapKey = value;
  }
  public resetIp6GreTunnelDecapKey() {
    this._ip6GreTunnelDecapKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6GreTunnelDecapKeyInput() {
    return this._ip6GreTunnelDecapKey;
  }

  // ip6_gre_tunnel_encap - computed: false, optional: true, required: false
  private _ip6GreTunnelEncap?: number; 
  public get ip6GreTunnelEncap() {
    return this.getNumberAttribute('ip6_gre_tunnel_encap');
  }
  public set ip6GreTunnelEncap(value: number) {
    this._ip6GreTunnelEncap = value;
  }
  public resetIp6GreTunnelEncap() {
    this._ip6GreTunnelEncap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6GreTunnelEncapInput() {
    return this._ip6GreTunnelEncap;
  }

  // ip6_gre_tunnel_encap_fail - computed: false, optional: true, required: false
  private _ip6GreTunnelEncapFail?: number; 
  public get ip6GreTunnelEncapFail() {
    return this.getNumberAttribute('ip6_gre_tunnel_encap_fail');
  }
  public set ip6GreTunnelEncapFail(value: number) {
    this._ip6GreTunnelEncapFail = value;
  }
  public resetIp6GreTunnelEncapFail() {
    this._ip6GreTunnelEncapFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6GreTunnelEncapFailInput() {
    return this._ip6GreTunnelEncapFail;
  }

  // ip6_gre_tunnel_encap_key - computed: false, optional: true, required: false
  private _ip6GreTunnelEncapKey?: number; 
  public get ip6GreTunnelEncapKey() {
    return this.getNumberAttribute('ip6_gre_tunnel_encap_key');
  }
  public set ip6GreTunnelEncapKey(value: number) {
    this._ip6GreTunnelEncapKey = value;
  }
  public resetIp6GreTunnelEncapKey() {
    this._ip6GreTunnelEncapKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6GreTunnelEncapKeyInput() {
    return this._ip6GreTunnelEncapKey;
  }

  // ip6_gre_tunnel_rate_limit_inner - computed: false, optional: true, required: false
  private _ip6GreTunnelRateLimitInner?: number; 
  public get ip6GreTunnelRateLimitInner() {
    return this.getNumberAttribute('ip6_gre_tunnel_rate_limit_inner');
  }
  public set ip6GreTunnelRateLimitInner(value: number) {
    this._ip6GreTunnelRateLimitInner = value;
  }
  public resetIp6GreTunnelRateLimitInner() {
    this._ip6GreTunnelRateLimitInner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6GreTunnelRateLimitInnerInput() {
    return this._ip6GreTunnelRateLimitInner;
  }

  // ip6_gre_tunnel_rcvd - computed: false, optional: true, required: false
  private _ip6GreTunnelRcvd?: number; 
  public get ip6GreTunnelRcvd() {
    return this.getNumberAttribute('ip6_gre_tunnel_rcvd');
  }
  public set ip6GreTunnelRcvd(value: number) {
    this._ip6GreTunnelRcvd = value;
  }
  public resetIp6GreTunnelRcvd() {
    this._ip6GreTunnelRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6GreTunnelRcvdInput() {
    return this._ip6GreTunnelRcvd;
  }

  // ip6_tunnel_decap - computed: false, optional: true, required: false
  private _ip6TunnelDecap?: number; 
  public get ip6TunnelDecap() {
    return this.getNumberAttribute('ip6_tunnel_decap');
  }
  public set ip6TunnelDecap(value: number) {
    this._ip6TunnelDecap = value;
  }
  public resetIp6TunnelDecap() {
    this._ip6TunnelDecap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6TunnelDecapInput() {
    return this._ip6TunnelDecap;
  }

  // ip6_tunnel_decap_fail - computed: false, optional: true, required: false
  private _ip6TunnelDecapFail?: number; 
  public get ip6TunnelDecapFail() {
    return this.getNumberAttribute('ip6_tunnel_decap_fail');
  }
  public set ip6TunnelDecapFail(value: number) {
    this._ip6TunnelDecapFail = value;
  }
  public resetIp6TunnelDecapFail() {
    this._ip6TunnelDecapFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6TunnelDecapFailInput() {
    return this._ip6TunnelDecapFail;
  }

  // ip6_tunnel_encap - computed: false, optional: true, required: false
  private _ip6TunnelEncap?: number; 
  public get ip6TunnelEncap() {
    return this.getNumberAttribute('ip6_tunnel_encap');
  }
  public set ip6TunnelEncap(value: number) {
    this._ip6TunnelEncap = value;
  }
  public resetIp6TunnelEncap() {
    this._ip6TunnelEncap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6TunnelEncapInput() {
    return this._ip6TunnelEncap;
  }

  // ip6_tunnel_encap_fail - computed: false, optional: true, required: false
  private _ip6TunnelEncapFail?: number; 
  public get ip6TunnelEncapFail() {
    return this.getNumberAttribute('ip6_tunnel_encap_fail');
  }
  public set ip6TunnelEncapFail(value: number) {
    this._ip6TunnelEncapFail = value;
  }
  public resetIp6TunnelEncapFail() {
    this._ip6TunnelEncapFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6TunnelEncapFailInput() {
    return this._ip6TunnelEncapFail;
  }

  // ip6_tunnel_rate_limit_inner - computed: false, optional: true, required: false
  private _ip6TunnelRateLimitInner?: number; 
  public get ip6TunnelRateLimitInner() {
    return this.getNumberAttribute('ip6_tunnel_rate_limit_inner');
  }
  public set ip6TunnelRateLimitInner(value: number) {
    this._ip6TunnelRateLimitInner = value;
  }
  public resetIp6TunnelRateLimitInner() {
    this._ip6TunnelRateLimitInner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6TunnelRateLimitInnerInput() {
    return this._ip6TunnelRateLimitInner;
  }

  // ip6_tunnel_rcvd - computed: false, optional: true, required: false
  private _ip6TunnelRcvd?: number; 
  public get ip6TunnelRcvd() {
    return this.getNumberAttribute('ip6_tunnel_rcvd');
  }
  public set ip6TunnelRcvd(value: number) {
    this._ip6TunnelRcvd = value;
  }
  public resetIp6TunnelRcvd() {
    this._ip6TunnelRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6TunnelRcvdInput() {
    return this._ip6TunnelRcvd;
  }

  // ip_esp_tunnel_inspect - computed: false, optional: true, required: false
  private _ipEspTunnelInspect?: number; 
  public get ipEspTunnelInspect() {
    return this.getNumberAttribute('ip_esp_tunnel_inspect');
  }
  public set ipEspTunnelInspect(value: number) {
    this._ipEspTunnelInspect = value;
  }
  public resetIpEspTunnelInspect() {
    this._ipEspTunnelInspect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipEspTunnelInspectInput() {
    return this._ipEspTunnelInspect;
  }

  // ip_esp_tunnel_inspect_fail - computed: false, optional: true, required: false
  private _ipEspTunnelInspectFail?: number; 
  public get ipEspTunnelInspectFail() {
    return this.getNumberAttribute('ip_esp_tunnel_inspect_fail');
  }
  public set ipEspTunnelInspectFail(value: number) {
    this._ipEspTunnelInspectFail = value;
  }
  public resetIpEspTunnelInspectFail() {
    this._ipEspTunnelInspectFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipEspTunnelInspectFailInput() {
    return this._ipEspTunnelInspectFail;
  }

  // ip_esp_tunnel_rcvd - computed: false, optional: true, required: false
  private _ipEspTunnelRcvd?: number; 
  public get ipEspTunnelRcvd() {
    return this.getNumberAttribute('ip_esp_tunnel_rcvd');
  }
  public set ipEspTunnelRcvd(value: number) {
    this._ipEspTunnelRcvd = value;
  }
  public resetIpEspTunnelRcvd() {
    this._ipEspTunnelRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipEspTunnelRcvdInput() {
    return this._ipEspTunnelRcvd;
  }

  // ip_gre_tunnel_decap - computed: false, optional: true, required: false
  private _ipGreTunnelDecap?: number; 
  public get ipGreTunnelDecap() {
    return this.getNumberAttribute('ip_gre_tunnel_decap');
  }
  public set ipGreTunnelDecap(value: number) {
    this._ipGreTunnelDecap = value;
  }
  public resetIpGreTunnelDecap() {
    this._ipGreTunnelDecap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipGreTunnelDecapInput() {
    return this._ipGreTunnelDecap;
  }

  // ip_gre_tunnel_decap_drop - computed: false, optional: true, required: false
  private _ipGreTunnelDecapDrop?: number; 
  public get ipGreTunnelDecapDrop() {
    return this.getNumberAttribute('ip_gre_tunnel_decap_drop');
  }
  public set ipGreTunnelDecapDrop(value: number) {
    this._ipGreTunnelDecapDrop = value;
  }
  public resetIpGreTunnelDecapDrop() {
    this._ipGreTunnelDecapDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipGreTunnelDecapDropInput() {
    return this._ipGreTunnelDecapDrop;
  }

  // ip_gre_tunnel_decap_fail - computed: false, optional: true, required: false
  private _ipGreTunnelDecapFail?: number; 
  public get ipGreTunnelDecapFail() {
    return this.getNumberAttribute('ip_gre_tunnel_decap_fail');
  }
  public set ipGreTunnelDecapFail(value: number) {
    this._ipGreTunnelDecapFail = value;
  }
  public resetIpGreTunnelDecapFail() {
    this._ipGreTunnelDecapFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipGreTunnelDecapFailInput() {
    return this._ipGreTunnelDecapFail;
  }

  // ip_gre_tunnel_decap_key - computed: false, optional: true, required: false
  private _ipGreTunnelDecapKey?: number; 
  public get ipGreTunnelDecapKey() {
    return this.getNumberAttribute('ip_gre_tunnel_decap_key');
  }
  public set ipGreTunnelDecapKey(value: number) {
    this._ipGreTunnelDecapKey = value;
  }
  public resetIpGreTunnelDecapKey() {
    this._ipGreTunnelDecapKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipGreTunnelDecapKeyInput() {
    return this._ipGreTunnelDecapKey;
  }

  // ip_gre_tunnel_encap - computed: false, optional: true, required: false
  private _ipGreTunnelEncap?: number; 
  public get ipGreTunnelEncap() {
    return this.getNumberAttribute('ip_gre_tunnel_encap');
  }
  public set ipGreTunnelEncap(value: number) {
    this._ipGreTunnelEncap = value;
  }
  public resetIpGreTunnelEncap() {
    this._ipGreTunnelEncap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipGreTunnelEncapInput() {
    return this._ipGreTunnelEncap;
  }

  // ip_gre_tunnel_encap_fail - computed: false, optional: true, required: false
  private _ipGreTunnelEncapFail?: number; 
  public get ipGreTunnelEncapFail() {
    return this.getNumberAttribute('ip_gre_tunnel_encap_fail');
  }
  public set ipGreTunnelEncapFail(value: number) {
    this._ipGreTunnelEncapFail = value;
  }
  public resetIpGreTunnelEncapFail() {
    this._ipGreTunnelEncapFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipGreTunnelEncapFailInput() {
    return this._ipGreTunnelEncapFail;
  }

  // ip_gre_tunnel_encap_key - computed: false, optional: true, required: false
  private _ipGreTunnelEncapKey?: number; 
  public get ipGreTunnelEncapKey() {
    return this.getNumberAttribute('ip_gre_tunnel_encap_key');
  }
  public set ipGreTunnelEncapKey(value: number) {
    this._ipGreTunnelEncapKey = value;
  }
  public resetIpGreTunnelEncapKey() {
    this._ipGreTunnelEncapKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipGreTunnelEncapKeyInput() {
    return this._ipGreTunnelEncapKey;
  }

  // ip_gre_tunnel_keepalive_rcvd - computed: false, optional: true, required: false
  private _ipGreTunnelKeepaliveRcvd?: number; 
  public get ipGreTunnelKeepaliveRcvd() {
    return this.getNumberAttribute('ip_gre_tunnel_keepalive_rcvd');
  }
  public set ipGreTunnelKeepaliveRcvd(value: number) {
    this._ipGreTunnelKeepaliveRcvd = value;
  }
  public resetIpGreTunnelKeepaliveRcvd() {
    this._ipGreTunnelKeepaliveRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipGreTunnelKeepaliveRcvdInput() {
    return this._ipGreTunnelKeepaliveRcvd;
  }

  // ip_gre_tunnel_rate_limit_inner - computed: false, optional: true, required: false
  private _ipGreTunnelRateLimitInner?: number; 
  public get ipGreTunnelRateLimitInner() {
    return this.getNumberAttribute('ip_gre_tunnel_rate_limit_inner');
  }
  public set ipGreTunnelRateLimitInner(value: number) {
    this._ipGreTunnelRateLimitInner = value;
  }
  public resetIpGreTunnelRateLimitInner() {
    this._ipGreTunnelRateLimitInner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipGreTunnelRateLimitInnerInput() {
    return this._ipGreTunnelRateLimitInner;
  }

  // ip_gre_tunnel_rcvd - computed: false, optional: true, required: false
  private _ipGreTunnelRcvd?: number; 
  public get ipGreTunnelRcvd() {
    return this.getNumberAttribute('ip_gre_tunnel_rcvd');
  }
  public set ipGreTunnelRcvd(value: number) {
    this._ipGreTunnelRcvd = value;
  }
  public resetIpGreTunnelRcvd() {
    this._ipGreTunnelRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipGreTunnelRcvdInput() {
    return this._ipGreTunnelRcvd;
  }

  // ip_tunnel_decap - computed: false, optional: true, required: false
  private _ipTunnelDecap?: number; 
  public get ipTunnelDecap() {
    return this.getNumberAttribute('ip_tunnel_decap');
  }
  public set ipTunnelDecap(value: number) {
    this._ipTunnelDecap = value;
  }
  public resetIpTunnelDecap() {
    this._ipTunnelDecap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipTunnelDecapInput() {
    return this._ipTunnelDecap;
  }

  // ip_tunnel_decap_fail - computed: false, optional: true, required: false
  private _ipTunnelDecapFail?: number; 
  public get ipTunnelDecapFail() {
    return this.getNumberAttribute('ip_tunnel_decap_fail');
  }
  public set ipTunnelDecapFail(value: number) {
    this._ipTunnelDecapFail = value;
  }
  public resetIpTunnelDecapFail() {
    this._ipTunnelDecapFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipTunnelDecapFailInput() {
    return this._ipTunnelDecapFail;
  }

  // ip_tunnel_encap - computed: false, optional: true, required: false
  private _ipTunnelEncap?: number; 
  public get ipTunnelEncap() {
    return this.getNumberAttribute('ip_tunnel_encap');
  }
  public set ipTunnelEncap(value: number) {
    this._ipTunnelEncap = value;
  }
  public resetIpTunnelEncap() {
    this._ipTunnelEncap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipTunnelEncapInput() {
    return this._ipTunnelEncap;
  }

  // ip_tunnel_encap_fail - computed: false, optional: true, required: false
  private _ipTunnelEncapFail?: number; 
  public get ipTunnelEncapFail() {
    return this.getNumberAttribute('ip_tunnel_encap_fail');
  }
  public set ipTunnelEncapFail(value: number) {
    this._ipTunnelEncapFail = value;
  }
  public resetIpTunnelEncapFail() {
    this._ipTunnelEncapFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipTunnelEncapFailInput() {
    return this._ipTunnelEncapFail;
  }

  // ip_tunnel_rate_limit_inner - computed: false, optional: true, required: false
  private _ipTunnelRateLimitInner?: number; 
  public get ipTunnelRateLimitInner() {
    return this.getNumberAttribute('ip_tunnel_rate_limit_inner');
  }
  public set ipTunnelRateLimitInner(value: number) {
    this._ipTunnelRateLimitInner = value;
  }
  public resetIpTunnelRateLimitInner() {
    this._ipTunnelRateLimitInner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipTunnelRateLimitInnerInput() {
    return this._ipTunnelRateLimitInner;
  }

  // ip_tunnel_rcvd - computed: false, optional: true, required: false
  private _ipTunnelRcvd?: number; 
  public get ipTunnelRcvd() {
    return this.getNumberAttribute('ip_tunnel_rcvd');
  }
  public set ipTunnelRcvd(value: number) {
    this._ipTunnelRcvd = value;
  }
  public resetIpTunnelRcvd() {
    this._ipTunnelRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipTunnelRcvdInput() {
    return this._ipTunnelRcvd;
  }

  // ip_vxlan_tunnel_decap - computed: false, optional: true, required: false
  private _ipVxlanTunnelDecap?: number; 
  public get ipVxlanTunnelDecap() {
    return this.getNumberAttribute('ip_vxlan_tunnel_decap');
  }
  public set ipVxlanTunnelDecap(value: number) {
    this._ipVxlanTunnelDecap = value;
  }
  public resetIpVxlanTunnelDecap() {
    this._ipVxlanTunnelDecap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipVxlanTunnelDecapInput() {
    return this._ipVxlanTunnelDecap;
  }

  // ip_vxlan_tunnel_decap_err - computed: false, optional: true, required: false
  private _ipVxlanTunnelDecapErr?: number; 
  public get ipVxlanTunnelDecapErr() {
    return this.getNumberAttribute('ip_vxlan_tunnel_decap_err');
  }
  public set ipVxlanTunnelDecapErr(value: number) {
    this._ipVxlanTunnelDecapErr = value;
  }
  public resetIpVxlanTunnelDecapErr() {
    this._ipVxlanTunnelDecapErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipVxlanTunnelDecapErrInput() {
    return this._ipVxlanTunnelDecapErr;
  }

  // ip_vxlan_tunnel_invalid_vni - computed: false, optional: true, required: false
  private _ipVxlanTunnelInvalidVni?: number; 
  public get ipVxlanTunnelInvalidVni() {
    return this.getNumberAttribute('ip_vxlan_tunnel_invalid_vni');
  }
  public set ipVxlanTunnelInvalidVni(value: number) {
    this._ipVxlanTunnelInvalidVni = value;
  }
  public resetIpVxlanTunnelInvalidVni() {
    this._ipVxlanTunnelInvalidVni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipVxlanTunnelInvalidVniInput() {
    return this._ipVxlanTunnelInvalidVni;
  }

  // ip_vxlan_tunnel_rcvd - computed: false, optional: true, required: false
  private _ipVxlanTunnelRcvd?: number; 
  public get ipVxlanTunnelRcvd() {
    return this.getNumberAttribute('ip_vxlan_tunnel_rcvd');
  }
  public set ipVxlanTunnelRcvd(value: number) {
    this._ipVxlanTunnelRcvd = value;
  }
  public resetIpVxlanTunnelRcvd() {
    this._ipVxlanTunnelRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipVxlanTunnelRcvdInput() {
    return this._ipVxlanTunnelRcvd;
  }

  // jumbo_in_tunnel_drop - computed: false, optional: true, required: false
  private _jumboInTunnelDrop?: number; 
  public get jumboInTunnelDrop() {
    return this.getNumberAttribute('jumbo_in_tunnel_drop');
  }
  public set jumboInTunnelDrop(value: number) {
    this._jumboInTunnelDrop = value;
  }
  public resetJumboInTunnelDrop() {
    this._jumboInTunnelDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jumboInTunnelDropInput() {
    return this._jumboInTunnelDrop;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_tunnel_stats thunder_ddos_tunnel_stats}
*/
export class DataThunderDdosTunnelStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_tunnel_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderDdosTunnelStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderDdosTunnelStats to import
  * @param importFromId The id of the existing DataThunderDdosTunnelStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_tunnel_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderDdosTunnelStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_tunnel_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_tunnel_stats thunder_ddos_tunnel_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderDdosTunnelStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderDdosTunnelStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_tunnel_stats',
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

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderDdosTunnelStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderDdosTunnelStatsStats) {
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
      stats: dataThunderDdosTunnelStatsStatsToTerraform(this._stats.internalValue),
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
      stats: {
        value: dataThunderDdosTunnelStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosTunnelStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
