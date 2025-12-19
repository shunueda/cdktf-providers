// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_ssl_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderDdosL4SslStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_ssl_stats#id DataThunderDdosL4SslStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_ssl_stats#stats DataThunderDdosL4SslStats#stats}
  */
  readonly stats?: DataThunderDdosL4SslStatsStats;
}
export interface DataThunderDdosL4SslStatsStats {
  /**
  * SSL Traffic Check Bad Header Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_ssl_stats#ssl_bad_header_drop DataThunderDdosL4SslStats#ssl_bad_header_drop}
  */
  readonly sslBadHeaderDrop?: number;
  /**
  * SSL Traffic Check Bad Header Forwarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_ssl_stats#ssl_bad_header_forw DataThunderDdosL4SslStats#ssl_bad_header_forw}
  */
  readonly sslBadHeaderForw?: number;
  /**
  * SSL Header Bad Length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_ssl_stats#ssl_header_bad_len DataThunderDdosL4SslStats#ssl_header_bad_len}
  */
  readonly sslHeaderBadLen?: number;
  /**
  * SSL Header Bad Version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_ssl_stats#ssl_header_bad_ver DataThunderDdosL4SslStats#ssl_header_bad_ver}
  */
  readonly sslHeaderBadVer?: number;
  /**
  * SSL Header Invalid Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_ssl_stats#ssl_header_invalid_type DataThunderDdosL4SslStats#ssl_header_invalid_type}
  */
  readonly sslHeaderInvalidType?: number;
  /**
  * SSL Auth Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_ssl_stats#ssl_l4_auth_drop DataThunderDdosL4SslStats#ssl_l4_auth_drop}
  */
  readonly sslL4AuthDrop?: number;
  /**
  * Auth Handshake Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_ssl_stats#ssl_l4_auth_handshake_bl DataThunderDdosL4SslStats#ssl_l4_auth_handshake_bl}
  */
  readonly sslL4AuthHandshakeBl?: number;
  /**
  * Auth Handshake Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_ssl_stats#ssl_l4_auth_handshake_fail DataThunderDdosL4SslStats#ssl_l4_auth_handshake_fail}
  */
  readonly sslL4AuthHandshakeFail?: number;
  /**
  * Auth Handshake Success
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_ssl_stats#ssl_l4_auth_handshake_ok DataThunderDdosL4SslStats#ssl_l4_auth_handshake_ok}
  */
  readonly sslL4AuthHandshakeOk?: number;
  /**
  * SSL Auth Responded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_ssl_stats#ssl_l4_auth_resp DataThunderDdosL4SslStats#ssl_l4_auth_resp}
  */
  readonly sslL4AuthResp?: number;
  /**
  * Do Auth Handshake
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_ssl_stats#ssl_l4_do_auth_handshake DataThunderDdosL4SslStats#ssl_l4_do_auth_handshake}
  */
  readonly sslL4DoAuthHandshake?: number;
  /**
  * Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_ssl_stats#ssl_l4_drop_packet DataThunderDdosL4SslStats#ssl_l4_drop_packet}
  */
  readonly sslL4DropPacket?: number;
  /**
  * Error Condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_ssl_stats#ssl_l4_er_condition DataThunderDdosL4SslStats#ssl_l4_er_condition}
  */
  readonly sslL4ErCondition?: number;
  /**
  * Auth Handshake Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_ssl_stats#ssl_l4_handshake_timeout DataThunderDdosL4SslStats#ssl_l4_handshake_timeout}
  */
  readonly sslL4HandshakeTimeout?: number;
  /**
  * Dst Request Rate Exceed Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_ssl_stats#ssl_l4_is_dst_req_rate_exceed DataThunderDdosL4SslStats#ssl_l4_is_dst_req_rate_exceed}
  */
  readonly sslL4IsDstReqRateExceed?: number;
  /**
  * SSL Renegotiation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_ssl_stats#ssl_l4_is_renegotiation DataThunderDdosL4SslStats#ssl_l4_is_renegotiation}
  */
  readonly sslL4IsRenegotiation?: number;
  /**
  * Src Request Rate Exceed Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_ssl_stats#ssl_l4_is_src_req_rate_exceed DataThunderDdosL4SslStats#ssl_l4_is_src_req_rate_exceed}
  */
  readonly sslL4IsSrcReqRateExceed?: number;
  /**
  * SSL v3
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_ssl_stats#ssl_l4_is_ssl3 DataThunderDdosL4SslStats#ssl_l4_is_ssl3}
  */
  readonly sslL4IsSsl3?: number;
  /**
  * TLS v1.0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_ssl_stats#ssl_l4_is_tls1_1 DataThunderDdosL4SslStats#ssl_l4_is_tls1_1}
  */
  readonly sslL4IsTls11?: number;
  /**
  * TLS v1.1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_ssl_stats#ssl_l4_is_tls1_2 DataThunderDdosL4SslStats#ssl_l4_is_tls1_2}
  */
  readonly sslL4IsTls12?: number;
  /**
  * TLS v1.2 or higher version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_ssl_stats#ssl_l4_is_tls1_3 DataThunderDdosL4SslStats#ssl_l4_is_tls1_3}
  */
  readonly sslL4IsTls13?: number;
  /**
  * New TCP SYN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_ssl_stats#ssl_l4_new_syn DataThunderDdosL4SslStats#ssl_l4_new_syn}
  */
  readonly sslL4NewSyn?: number;
  /**
  * Policy Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_ssl_stats#ssl_l4_policy_drop DataThunderDdosL4SslStats#ssl_l4_policy_drop}
  */
  readonly sslL4PolicyDrop?: number;
  /**
  * Policy Reset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_ssl_stats#ssl_l4_policy_reset DataThunderDdosL4SslStats#ssl_l4_policy_reset}
  */
  readonly sslL4PolicyReset?: number;
  /**
  * Packets Processed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_ssl_stats#ssl_l4_processed DataThunderDdosL4SslStats#ssl_l4_processed}
  */
  readonly sslL4Processed?: number;
  /**
  * Renegotiation Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_ssl_stats#ssl_l4_renegotiation_exceed DataThunderDdosL4SslStats#ssl_l4_renegotiation_exceed}
  */
  readonly sslL4RenegotiationExceed?: number;
  /**
  * Renegotiation Incomplete
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_ssl_stats#ssl_l4_renegotiation_incomplete DataThunderDdosL4SslStats#ssl_l4_renegotiation_incomplete}
  */
  readonly sslL4RenegotiationIncomplete?: number;
  /**
  * Reset While Others in Handshake
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_ssl_stats#ssl_l4_reset_for_handshake DataThunderDdosL4SslStats#ssl_l4_reset_for_handshake}
  */
  readonly sslL4ResetForHandshake?: number;
  /**
  * SSL Non-TLS Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_ssl_stats#ssl_non_tls DataThunderDdosL4SslStats#ssl_non_tls}
  */
  readonly sslNonTls?: number;
}

export function dataThunderDdosL4SslStatsStatsToTerraform(struct?: DataThunderDdosL4SslStatsStatsOutputReference | DataThunderDdosL4SslStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ssl_bad_header_drop: cdktf.numberToTerraform(struct!.sslBadHeaderDrop),
    ssl_bad_header_forw: cdktf.numberToTerraform(struct!.sslBadHeaderForw),
    ssl_header_bad_len: cdktf.numberToTerraform(struct!.sslHeaderBadLen),
    ssl_header_bad_ver: cdktf.numberToTerraform(struct!.sslHeaderBadVer),
    ssl_header_invalid_type: cdktf.numberToTerraform(struct!.sslHeaderInvalidType),
    ssl_l4_auth_drop: cdktf.numberToTerraform(struct!.sslL4AuthDrop),
    ssl_l4_auth_handshake_bl: cdktf.numberToTerraform(struct!.sslL4AuthHandshakeBl),
    ssl_l4_auth_handshake_fail: cdktf.numberToTerraform(struct!.sslL4AuthHandshakeFail),
    ssl_l4_auth_handshake_ok: cdktf.numberToTerraform(struct!.sslL4AuthHandshakeOk),
    ssl_l4_auth_resp: cdktf.numberToTerraform(struct!.sslL4AuthResp),
    ssl_l4_do_auth_handshake: cdktf.numberToTerraform(struct!.sslL4DoAuthHandshake),
    ssl_l4_drop_packet: cdktf.numberToTerraform(struct!.sslL4DropPacket),
    ssl_l4_er_condition: cdktf.numberToTerraform(struct!.sslL4ErCondition),
    ssl_l4_handshake_timeout: cdktf.numberToTerraform(struct!.sslL4HandshakeTimeout),
    ssl_l4_is_dst_req_rate_exceed: cdktf.numberToTerraform(struct!.sslL4IsDstReqRateExceed),
    ssl_l4_is_renegotiation: cdktf.numberToTerraform(struct!.sslL4IsRenegotiation),
    ssl_l4_is_src_req_rate_exceed: cdktf.numberToTerraform(struct!.sslL4IsSrcReqRateExceed),
    ssl_l4_is_ssl3: cdktf.numberToTerraform(struct!.sslL4IsSsl3),
    ssl_l4_is_tls1_1: cdktf.numberToTerraform(struct!.sslL4IsTls11),
    ssl_l4_is_tls1_2: cdktf.numberToTerraform(struct!.sslL4IsTls12),
    ssl_l4_is_tls1_3: cdktf.numberToTerraform(struct!.sslL4IsTls13),
    ssl_l4_new_syn: cdktf.numberToTerraform(struct!.sslL4NewSyn),
    ssl_l4_policy_drop: cdktf.numberToTerraform(struct!.sslL4PolicyDrop),
    ssl_l4_policy_reset: cdktf.numberToTerraform(struct!.sslL4PolicyReset),
    ssl_l4_processed: cdktf.numberToTerraform(struct!.sslL4Processed),
    ssl_l4_renegotiation_exceed: cdktf.numberToTerraform(struct!.sslL4RenegotiationExceed),
    ssl_l4_renegotiation_incomplete: cdktf.numberToTerraform(struct!.sslL4RenegotiationIncomplete),
    ssl_l4_reset_for_handshake: cdktf.numberToTerraform(struct!.sslL4ResetForHandshake),
    ssl_non_tls: cdktf.numberToTerraform(struct!.sslNonTls),
  }
}


export function dataThunderDdosL4SslStatsStatsToHclTerraform(struct?: DataThunderDdosL4SslStatsStatsOutputReference | DataThunderDdosL4SslStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ssl_bad_header_drop: {
      value: cdktf.numberToHclTerraform(struct!.sslBadHeaderDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_bad_header_forw: {
      value: cdktf.numberToHclTerraform(struct!.sslBadHeaderForw),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_header_bad_len: {
      value: cdktf.numberToHclTerraform(struct!.sslHeaderBadLen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_header_bad_ver: {
      value: cdktf.numberToHclTerraform(struct!.sslHeaderBadVer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_header_invalid_type: {
      value: cdktf.numberToHclTerraform(struct!.sslHeaderInvalidType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_l4_auth_drop: {
      value: cdktf.numberToHclTerraform(struct!.sslL4AuthDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_l4_auth_handshake_bl: {
      value: cdktf.numberToHclTerraform(struct!.sslL4AuthHandshakeBl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_l4_auth_handshake_fail: {
      value: cdktf.numberToHclTerraform(struct!.sslL4AuthHandshakeFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_l4_auth_handshake_ok: {
      value: cdktf.numberToHclTerraform(struct!.sslL4AuthHandshakeOk),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_l4_auth_resp: {
      value: cdktf.numberToHclTerraform(struct!.sslL4AuthResp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_l4_do_auth_handshake: {
      value: cdktf.numberToHclTerraform(struct!.sslL4DoAuthHandshake),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_l4_drop_packet: {
      value: cdktf.numberToHclTerraform(struct!.sslL4DropPacket),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_l4_er_condition: {
      value: cdktf.numberToHclTerraform(struct!.sslL4ErCondition),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_l4_handshake_timeout: {
      value: cdktf.numberToHclTerraform(struct!.sslL4HandshakeTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_l4_is_dst_req_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.sslL4IsDstReqRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_l4_is_renegotiation: {
      value: cdktf.numberToHclTerraform(struct!.sslL4IsRenegotiation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_l4_is_src_req_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.sslL4IsSrcReqRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_l4_is_ssl3: {
      value: cdktf.numberToHclTerraform(struct!.sslL4IsSsl3),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_l4_is_tls1_1: {
      value: cdktf.numberToHclTerraform(struct!.sslL4IsTls11),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_l4_is_tls1_2: {
      value: cdktf.numberToHclTerraform(struct!.sslL4IsTls12),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_l4_is_tls1_3: {
      value: cdktf.numberToHclTerraform(struct!.sslL4IsTls13),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_l4_new_syn: {
      value: cdktf.numberToHclTerraform(struct!.sslL4NewSyn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_l4_policy_drop: {
      value: cdktf.numberToHclTerraform(struct!.sslL4PolicyDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_l4_policy_reset: {
      value: cdktf.numberToHclTerraform(struct!.sslL4PolicyReset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_l4_processed: {
      value: cdktf.numberToHclTerraform(struct!.sslL4Processed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_l4_renegotiation_exceed: {
      value: cdktf.numberToHclTerraform(struct!.sslL4RenegotiationExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_l4_renegotiation_incomplete: {
      value: cdktf.numberToHclTerraform(struct!.sslL4RenegotiationIncomplete),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_l4_reset_for_handshake: {
      value: cdktf.numberToHclTerraform(struct!.sslL4ResetForHandshake),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_non_tls: {
      value: cdktf.numberToHclTerraform(struct!.sslNonTls),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosL4SslStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosL4SslStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sslBadHeaderDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslBadHeaderDrop = this._sslBadHeaderDrop;
    }
    if (this._sslBadHeaderForw !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslBadHeaderForw = this._sslBadHeaderForw;
    }
    if (this._sslHeaderBadLen !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslHeaderBadLen = this._sslHeaderBadLen;
    }
    if (this._sslHeaderBadVer !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslHeaderBadVer = this._sslHeaderBadVer;
    }
    if (this._sslHeaderInvalidType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslHeaderInvalidType = this._sslHeaderInvalidType;
    }
    if (this._sslL4AuthDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslL4AuthDrop = this._sslL4AuthDrop;
    }
    if (this._sslL4AuthHandshakeBl !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslL4AuthHandshakeBl = this._sslL4AuthHandshakeBl;
    }
    if (this._sslL4AuthHandshakeFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslL4AuthHandshakeFail = this._sslL4AuthHandshakeFail;
    }
    if (this._sslL4AuthHandshakeOk !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslL4AuthHandshakeOk = this._sslL4AuthHandshakeOk;
    }
    if (this._sslL4AuthResp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslL4AuthResp = this._sslL4AuthResp;
    }
    if (this._sslL4DoAuthHandshake !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslL4DoAuthHandshake = this._sslL4DoAuthHandshake;
    }
    if (this._sslL4DropPacket !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslL4DropPacket = this._sslL4DropPacket;
    }
    if (this._sslL4ErCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslL4ErCondition = this._sslL4ErCondition;
    }
    if (this._sslL4HandshakeTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslL4HandshakeTimeout = this._sslL4HandshakeTimeout;
    }
    if (this._sslL4IsDstReqRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslL4IsDstReqRateExceed = this._sslL4IsDstReqRateExceed;
    }
    if (this._sslL4IsRenegotiation !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslL4IsRenegotiation = this._sslL4IsRenegotiation;
    }
    if (this._sslL4IsSrcReqRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslL4IsSrcReqRateExceed = this._sslL4IsSrcReqRateExceed;
    }
    if (this._sslL4IsSsl3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslL4IsSsl3 = this._sslL4IsSsl3;
    }
    if (this._sslL4IsTls11 !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslL4IsTls11 = this._sslL4IsTls11;
    }
    if (this._sslL4IsTls12 !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslL4IsTls12 = this._sslL4IsTls12;
    }
    if (this._sslL4IsTls13 !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslL4IsTls13 = this._sslL4IsTls13;
    }
    if (this._sslL4NewSyn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslL4NewSyn = this._sslL4NewSyn;
    }
    if (this._sslL4PolicyDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslL4PolicyDrop = this._sslL4PolicyDrop;
    }
    if (this._sslL4PolicyReset !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslL4PolicyReset = this._sslL4PolicyReset;
    }
    if (this._sslL4Processed !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslL4Processed = this._sslL4Processed;
    }
    if (this._sslL4RenegotiationExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslL4RenegotiationExceed = this._sslL4RenegotiationExceed;
    }
    if (this._sslL4RenegotiationIncomplete !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslL4RenegotiationIncomplete = this._sslL4RenegotiationIncomplete;
    }
    if (this._sslL4ResetForHandshake !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslL4ResetForHandshake = this._sslL4ResetForHandshake;
    }
    if (this._sslNonTls !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslNonTls = this._sslNonTls;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosL4SslStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sslBadHeaderDrop = undefined;
      this._sslBadHeaderForw = undefined;
      this._sslHeaderBadLen = undefined;
      this._sslHeaderBadVer = undefined;
      this._sslHeaderInvalidType = undefined;
      this._sslL4AuthDrop = undefined;
      this._sslL4AuthHandshakeBl = undefined;
      this._sslL4AuthHandshakeFail = undefined;
      this._sslL4AuthHandshakeOk = undefined;
      this._sslL4AuthResp = undefined;
      this._sslL4DoAuthHandshake = undefined;
      this._sslL4DropPacket = undefined;
      this._sslL4ErCondition = undefined;
      this._sslL4HandshakeTimeout = undefined;
      this._sslL4IsDstReqRateExceed = undefined;
      this._sslL4IsRenegotiation = undefined;
      this._sslL4IsSrcReqRateExceed = undefined;
      this._sslL4IsSsl3 = undefined;
      this._sslL4IsTls11 = undefined;
      this._sslL4IsTls12 = undefined;
      this._sslL4IsTls13 = undefined;
      this._sslL4NewSyn = undefined;
      this._sslL4PolicyDrop = undefined;
      this._sslL4PolicyReset = undefined;
      this._sslL4Processed = undefined;
      this._sslL4RenegotiationExceed = undefined;
      this._sslL4RenegotiationIncomplete = undefined;
      this._sslL4ResetForHandshake = undefined;
      this._sslNonTls = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sslBadHeaderDrop = value.sslBadHeaderDrop;
      this._sslBadHeaderForw = value.sslBadHeaderForw;
      this._sslHeaderBadLen = value.sslHeaderBadLen;
      this._sslHeaderBadVer = value.sslHeaderBadVer;
      this._sslHeaderInvalidType = value.sslHeaderInvalidType;
      this._sslL4AuthDrop = value.sslL4AuthDrop;
      this._sslL4AuthHandshakeBl = value.sslL4AuthHandshakeBl;
      this._sslL4AuthHandshakeFail = value.sslL4AuthHandshakeFail;
      this._sslL4AuthHandshakeOk = value.sslL4AuthHandshakeOk;
      this._sslL4AuthResp = value.sslL4AuthResp;
      this._sslL4DoAuthHandshake = value.sslL4DoAuthHandshake;
      this._sslL4DropPacket = value.sslL4DropPacket;
      this._sslL4ErCondition = value.sslL4ErCondition;
      this._sslL4HandshakeTimeout = value.sslL4HandshakeTimeout;
      this._sslL4IsDstReqRateExceed = value.sslL4IsDstReqRateExceed;
      this._sslL4IsRenegotiation = value.sslL4IsRenegotiation;
      this._sslL4IsSrcReqRateExceed = value.sslL4IsSrcReqRateExceed;
      this._sslL4IsSsl3 = value.sslL4IsSsl3;
      this._sslL4IsTls11 = value.sslL4IsTls11;
      this._sslL4IsTls12 = value.sslL4IsTls12;
      this._sslL4IsTls13 = value.sslL4IsTls13;
      this._sslL4NewSyn = value.sslL4NewSyn;
      this._sslL4PolicyDrop = value.sslL4PolicyDrop;
      this._sslL4PolicyReset = value.sslL4PolicyReset;
      this._sslL4Processed = value.sslL4Processed;
      this._sslL4RenegotiationExceed = value.sslL4RenegotiationExceed;
      this._sslL4RenegotiationIncomplete = value.sslL4RenegotiationIncomplete;
      this._sslL4ResetForHandshake = value.sslL4ResetForHandshake;
      this._sslNonTls = value.sslNonTls;
    }
  }

  // ssl_bad_header_drop - computed: false, optional: true, required: false
  private _sslBadHeaderDrop?: number; 
  public get sslBadHeaderDrop() {
    return this.getNumberAttribute('ssl_bad_header_drop');
  }
  public set sslBadHeaderDrop(value: number) {
    this._sslBadHeaderDrop = value;
  }
  public resetSslBadHeaderDrop() {
    this._sslBadHeaderDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslBadHeaderDropInput() {
    return this._sslBadHeaderDrop;
  }

  // ssl_bad_header_forw - computed: false, optional: true, required: false
  private _sslBadHeaderForw?: number; 
  public get sslBadHeaderForw() {
    return this.getNumberAttribute('ssl_bad_header_forw');
  }
  public set sslBadHeaderForw(value: number) {
    this._sslBadHeaderForw = value;
  }
  public resetSslBadHeaderForw() {
    this._sslBadHeaderForw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslBadHeaderForwInput() {
    return this._sslBadHeaderForw;
  }

  // ssl_header_bad_len - computed: false, optional: true, required: false
  private _sslHeaderBadLen?: number; 
  public get sslHeaderBadLen() {
    return this.getNumberAttribute('ssl_header_bad_len');
  }
  public set sslHeaderBadLen(value: number) {
    this._sslHeaderBadLen = value;
  }
  public resetSslHeaderBadLen() {
    this._sslHeaderBadLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslHeaderBadLenInput() {
    return this._sslHeaderBadLen;
  }

  // ssl_header_bad_ver - computed: false, optional: true, required: false
  private _sslHeaderBadVer?: number; 
  public get sslHeaderBadVer() {
    return this.getNumberAttribute('ssl_header_bad_ver');
  }
  public set sslHeaderBadVer(value: number) {
    this._sslHeaderBadVer = value;
  }
  public resetSslHeaderBadVer() {
    this._sslHeaderBadVer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslHeaderBadVerInput() {
    return this._sslHeaderBadVer;
  }

  // ssl_header_invalid_type - computed: false, optional: true, required: false
  private _sslHeaderInvalidType?: number; 
  public get sslHeaderInvalidType() {
    return this.getNumberAttribute('ssl_header_invalid_type');
  }
  public set sslHeaderInvalidType(value: number) {
    this._sslHeaderInvalidType = value;
  }
  public resetSslHeaderInvalidType() {
    this._sslHeaderInvalidType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslHeaderInvalidTypeInput() {
    return this._sslHeaderInvalidType;
  }

  // ssl_l4_auth_drop - computed: false, optional: true, required: false
  private _sslL4AuthDrop?: number; 
  public get sslL4AuthDrop() {
    return this.getNumberAttribute('ssl_l4_auth_drop');
  }
  public set sslL4AuthDrop(value: number) {
    this._sslL4AuthDrop = value;
  }
  public resetSslL4AuthDrop() {
    this._sslL4AuthDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslL4AuthDropInput() {
    return this._sslL4AuthDrop;
  }

  // ssl_l4_auth_handshake_bl - computed: false, optional: true, required: false
  private _sslL4AuthHandshakeBl?: number; 
  public get sslL4AuthHandshakeBl() {
    return this.getNumberAttribute('ssl_l4_auth_handshake_bl');
  }
  public set sslL4AuthHandshakeBl(value: number) {
    this._sslL4AuthHandshakeBl = value;
  }
  public resetSslL4AuthHandshakeBl() {
    this._sslL4AuthHandshakeBl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslL4AuthHandshakeBlInput() {
    return this._sslL4AuthHandshakeBl;
  }

  // ssl_l4_auth_handshake_fail - computed: false, optional: true, required: false
  private _sslL4AuthHandshakeFail?: number; 
  public get sslL4AuthHandshakeFail() {
    return this.getNumberAttribute('ssl_l4_auth_handshake_fail');
  }
  public set sslL4AuthHandshakeFail(value: number) {
    this._sslL4AuthHandshakeFail = value;
  }
  public resetSslL4AuthHandshakeFail() {
    this._sslL4AuthHandshakeFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslL4AuthHandshakeFailInput() {
    return this._sslL4AuthHandshakeFail;
  }

  // ssl_l4_auth_handshake_ok - computed: false, optional: true, required: false
  private _sslL4AuthHandshakeOk?: number; 
  public get sslL4AuthHandshakeOk() {
    return this.getNumberAttribute('ssl_l4_auth_handshake_ok');
  }
  public set sslL4AuthHandshakeOk(value: number) {
    this._sslL4AuthHandshakeOk = value;
  }
  public resetSslL4AuthHandshakeOk() {
    this._sslL4AuthHandshakeOk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslL4AuthHandshakeOkInput() {
    return this._sslL4AuthHandshakeOk;
  }

  // ssl_l4_auth_resp - computed: false, optional: true, required: false
  private _sslL4AuthResp?: number; 
  public get sslL4AuthResp() {
    return this.getNumberAttribute('ssl_l4_auth_resp');
  }
  public set sslL4AuthResp(value: number) {
    this._sslL4AuthResp = value;
  }
  public resetSslL4AuthResp() {
    this._sslL4AuthResp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslL4AuthRespInput() {
    return this._sslL4AuthResp;
  }

  // ssl_l4_do_auth_handshake - computed: false, optional: true, required: false
  private _sslL4DoAuthHandshake?: number; 
  public get sslL4DoAuthHandshake() {
    return this.getNumberAttribute('ssl_l4_do_auth_handshake');
  }
  public set sslL4DoAuthHandshake(value: number) {
    this._sslL4DoAuthHandshake = value;
  }
  public resetSslL4DoAuthHandshake() {
    this._sslL4DoAuthHandshake = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslL4DoAuthHandshakeInput() {
    return this._sslL4DoAuthHandshake;
  }

  // ssl_l4_drop_packet - computed: false, optional: true, required: false
  private _sslL4DropPacket?: number; 
  public get sslL4DropPacket() {
    return this.getNumberAttribute('ssl_l4_drop_packet');
  }
  public set sslL4DropPacket(value: number) {
    this._sslL4DropPacket = value;
  }
  public resetSslL4DropPacket() {
    this._sslL4DropPacket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslL4DropPacketInput() {
    return this._sslL4DropPacket;
  }

  // ssl_l4_er_condition - computed: false, optional: true, required: false
  private _sslL4ErCondition?: number; 
  public get sslL4ErCondition() {
    return this.getNumberAttribute('ssl_l4_er_condition');
  }
  public set sslL4ErCondition(value: number) {
    this._sslL4ErCondition = value;
  }
  public resetSslL4ErCondition() {
    this._sslL4ErCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslL4ErConditionInput() {
    return this._sslL4ErCondition;
  }

  // ssl_l4_handshake_timeout - computed: false, optional: true, required: false
  private _sslL4HandshakeTimeout?: number; 
  public get sslL4HandshakeTimeout() {
    return this.getNumberAttribute('ssl_l4_handshake_timeout');
  }
  public set sslL4HandshakeTimeout(value: number) {
    this._sslL4HandshakeTimeout = value;
  }
  public resetSslL4HandshakeTimeout() {
    this._sslL4HandshakeTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslL4HandshakeTimeoutInput() {
    return this._sslL4HandshakeTimeout;
  }

  // ssl_l4_is_dst_req_rate_exceed - computed: false, optional: true, required: false
  private _sslL4IsDstReqRateExceed?: number; 
  public get sslL4IsDstReqRateExceed() {
    return this.getNumberAttribute('ssl_l4_is_dst_req_rate_exceed');
  }
  public set sslL4IsDstReqRateExceed(value: number) {
    this._sslL4IsDstReqRateExceed = value;
  }
  public resetSslL4IsDstReqRateExceed() {
    this._sslL4IsDstReqRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslL4IsDstReqRateExceedInput() {
    return this._sslL4IsDstReqRateExceed;
  }

  // ssl_l4_is_renegotiation - computed: false, optional: true, required: false
  private _sslL4IsRenegotiation?: number; 
  public get sslL4IsRenegotiation() {
    return this.getNumberAttribute('ssl_l4_is_renegotiation');
  }
  public set sslL4IsRenegotiation(value: number) {
    this._sslL4IsRenegotiation = value;
  }
  public resetSslL4IsRenegotiation() {
    this._sslL4IsRenegotiation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslL4IsRenegotiationInput() {
    return this._sslL4IsRenegotiation;
  }

  // ssl_l4_is_src_req_rate_exceed - computed: false, optional: true, required: false
  private _sslL4IsSrcReqRateExceed?: number; 
  public get sslL4IsSrcReqRateExceed() {
    return this.getNumberAttribute('ssl_l4_is_src_req_rate_exceed');
  }
  public set sslL4IsSrcReqRateExceed(value: number) {
    this._sslL4IsSrcReqRateExceed = value;
  }
  public resetSslL4IsSrcReqRateExceed() {
    this._sslL4IsSrcReqRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslL4IsSrcReqRateExceedInput() {
    return this._sslL4IsSrcReqRateExceed;
  }

  // ssl_l4_is_ssl3 - computed: false, optional: true, required: false
  private _sslL4IsSsl3?: number; 
  public get sslL4IsSsl3() {
    return this.getNumberAttribute('ssl_l4_is_ssl3');
  }
  public set sslL4IsSsl3(value: number) {
    this._sslL4IsSsl3 = value;
  }
  public resetSslL4IsSsl3() {
    this._sslL4IsSsl3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslL4IsSsl3Input() {
    return this._sslL4IsSsl3;
  }

  // ssl_l4_is_tls1_1 - computed: false, optional: true, required: false
  private _sslL4IsTls11?: number; 
  public get sslL4IsTls11() {
    return this.getNumberAttribute('ssl_l4_is_tls1_1');
  }
  public set sslL4IsTls11(value: number) {
    this._sslL4IsTls11 = value;
  }
  public resetSslL4IsTls11() {
    this._sslL4IsTls11 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslL4IsTls11Input() {
    return this._sslL4IsTls11;
  }

  // ssl_l4_is_tls1_2 - computed: false, optional: true, required: false
  private _sslL4IsTls12?: number; 
  public get sslL4IsTls12() {
    return this.getNumberAttribute('ssl_l4_is_tls1_2');
  }
  public set sslL4IsTls12(value: number) {
    this._sslL4IsTls12 = value;
  }
  public resetSslL4IsTls12() {
    this._sslL4IsTls12 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslL4IsTls12Input() {
    return this._sslL4IsTls12;
  }

  // ssl_l4_is_tls1_3 - computed: false, optional: true, required: false
  private _sslL4IsTls13?: number; 
  public get sslL4IsTls13() {
    return this.getNumberAttribute('ssl_l4_is_tls1_3');
  }
  public set sslL4IsTls13(value: number) {
    this._sslL4IsTls13 = value;
  }
  public resetSslL4IsTls13() {
    this._sslL4IsTls13 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslL4IsTls13Input() {
    return this._sslL4IsTls13;
  }

  // ssl_l4_new_syn - computed: false, optional: true, required: false
  private _sslL4NewSyn?: number; 
  public get sslL4NewSyn() {
    return this.getNumberAttribute('ssl_l4_new_syn');
  }
  public set sslL4NewSyn(value: number) {
    this._sslL4NewSyn = value;
  }
  public resetSslL4NewSyn() {
    this._sslL4NewSyn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslL4NewSynInput() {
    return this._sslL4NewSyn;
  }

  // ssl_l4_policy_drop - computed: false, optional: true, required: false
  private _sslL4PolicyDrop?: number; 
  public get sslL4PolicyDrop() {
    return this.getNumberAttribute('ssl_l4_policy_drop');
  }
  public set sslL4PolicyDrop(value: number) {
    this._sslL4PolicyDrop = value;
  }
  public resetSslL4PolicyDrop() {
    this._sslL4PolicyDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslL4PolicyDropInput() {
    return this._sslL4PolicyDrop;
  }

  // ssl_l4_policy_reset - computed: false, optional: true, required: false
  private _sslL4PolicyReset?: number; 
  public get sslL4PolicyReset() {
    return this.getNumberAttribute('ssl_l4_policy_reset');
  }
  public set sslL4PolicyReset(value: number) {
    this._sslL4PolicyReset = value;
  }
  public resetSslL4PolicyReset() {
    this._sslL4PolicyReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslL4PolicyResetInput() {
    return this._sslL4PolicyReset;
  }

  // ssl_l4_processed - computed: false, optional: true, required: false
  private _sslL4Processed?: number; 
  public get sslL4Processed() {
    return this.getNumberAttribute('ssl_l4_processed');
  }
  public set sslL4Processed(value: number) {
    this._sslL4Processed = value;
  }
  public resetSslL4Processed() {
    this._sslL4Processed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslL4ProcessedInput() {
    return this._sslL4Processed;
  }

  // ssl_l4_renegotiation_exceed - computed: false, optional: true, required: false
  private _sslL4RenegotiationExceed?: number; 
  public get sslL4RenegotiationExceed() {
    return this.getNumberAttribute('ssl_l4_renegotiation_exceed');
  }
  public set sslL4RenegotiationExceed(value: number) {
    this._sslL4RenegotiationExceed = value;
  }
  public resetSslL4RenegotiationExceed() {
    this._sslL4RenegotiationExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslL4RenegotiationExceedInput() {
    return this._sslL4RenegotiationExceed;
  }

  // ssl_l4_renegotiation_incomplete - computed: false, optional: true, required: false
  private _sslL4RenegotiationIncomplete?: number; 
  public get sslL4RenegotiationIncomplete() {
    return this.getNumberAttribute('ssl_l4_renegotiation_incomplete');
  }
  public set sslL4RenegotiationIncomplete(value: number) {
    this._sslL4RenegotiationIncomplete = value;
  }
  public resetSslL4RenegotiationIncomplete() {
    this._sslL4RenegotiationIncomplete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslL4RenegotiationIncompleteInput() {
    return this._sslL4RenegotiationIncomplete;
  }

  // ssl_l4_reset_for_handshake - computed: false, optional: true, required: false
  private _sslL4ResetForHandshake?: number; 
  public get sslL4ResetForHandshake() {
    return this.getNumberAttribute('ssl_l4_reset_for_handshake');
  }
  public set sslL4ResetForHandshake(value: number) {
    this._sslL4ResetForHandshake = value;
  }
  public resetSslL4ResetForHandshake() {
    this._sslL4ResetForHandshake = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslL4ResetForHandshakeInput() {
    return this._sslL4ResetForHandshake;
  }

  // ssl_non_tls - computed: false, optional: true, required: false
  private _sslNonTls?: number; 
  public get sslNonTls() {
    return this.getNumberAttribute('ssl_non_tls');
  }
  public set sslNonTls(value: number) {
    this._sslNonTls = value;
  }
  public resetSslNonTls() {
    this._sslNonTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslNonTlsInput() {
    return this._sslNonTls;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_ssl_stats thunder_ddos_l4_ssl_stats}
*/
export class DataThunderDdosL4SslStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_l4_ssl_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderDdosL4SslStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderDdosL4SslStats to import
  * @param importFromId The id of the existing DataThunderDdosL4SslStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_ssl_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderDdosL4SslStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_l4_ssl_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_ssl_stats thunder_ddos_l4_ssl_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderDdosL4SslStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderDdosL4SslStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_l4_ssl_stats',
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
  private _stats = new DataThunderDdosL4SslStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderDdosL4SslStatsStats) {
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
      stats: dataThunderDdosL4SslStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderDdosL4SslStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosL4SslStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
