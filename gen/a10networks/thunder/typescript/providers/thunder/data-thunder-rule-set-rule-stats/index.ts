// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_rule_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderRuleSetRuleStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_rule_stats#id DataThunderRuleSetRuleStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Rule name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_rule_stats#name DataThunderRuleSetRuleStats#name}
  */
  readonly name: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_rule_stats#stats DataThunderRuleSetRuleStats#stats}
  */
  readonly stats?: DataThunderRuleSetRuleStatsStats;
}
export interface DataThunderRuleSetRuleStatsStats {
  /**
  * Active ICMP session counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_rule_stats#active_session_icmp DataThunderRuleSetRuleStats#active_session_icmp}
  */
  readonly activeSessionIcmp?: number;
  /**
  * Active other protocol session counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_rule_stats#active_session_other DataThunderRuleSetRuleStats#active_session_other}
  */
  readonly activeSessionOther?: number;
  /**
  * Active SCTP session counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_rule_stats#active_session_sctp DataThunderRuleSetRuleStats#active_session_sctp}
  */
  readonly activeSessionSctp?: number;
  /**
  * Active TCP session counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_rule_stats#active_session_tcp DataThunderRuleSetRuleStats#active_session_tcp}
  */
  readonly activeSessionTcp?: number;
  /**
  * Active UDP session counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_rule_stats#active_session_udp DataThunderRuleSetRuleStats#active_session_udp}
  */
  readonly activeSessionUdp?: number;
  /**
  * Denied bytes counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_rule_stats#deny_bytes DataThunderRuleSetRuleStats#deny_bytes}
  */
  readonly denyBytes?: number;
  /**
  * Denied packets counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_rule_stats#deny_packets DataThunderRuleSetRuleStats#deny_packets}
  */
  readonly denyPackets?: number;
  /**
  * Hit counts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_rule_stats#hit_count DataThunderRuleSetRuleStats#hit_count}
  */
  readonly hitCount?: number;
  /**
  * Last hit counts timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_rule_stats#hitcount_timestamp DataThunderRuleSetRuleStats#hitcount_timestamp}
  */
  readonly hitcountTimestamp?: number;
  /**
  * Permitted bytes counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_rule_stats#permit_bytes DataThunderRuleSetRuleStats#permit_bytes}
  */
  readonly permitBytes?: number;
  /**
  * Permitted packets counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_rule_stats#permit_packets DataThunderRuleSetRuleStats#permit_packets}
  */
  readonly permitPackets?: number;
  /**
  * Rate Limit Drops
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_rule_stats#rate_limit_drops DataThunderRuleSetRuleStats#rate_limit_drops}
  */
  readonly rateLimitDrops?: number;
  /**
  * Reset bytes counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_rule_stats#reset_bytes DataThunderRuleSetRuleStats#reset_bytes}
  */
  readonly resetBytes?: number;
  /**
  * Reset packets counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_rule_stats#reset_packets DataThunderRuleSetRuleStats#reset_packets}
  */
  readonly resetPackets?: number;
  /**
  * ICMP session counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_rule_stats#session_icmp DataThunderRuleSetRuleStats#session_icmp}
  */
  readonly sessionIcmp?: number;
  /**
  * Other protocol session counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_rule_stats#session_other DataThunderRuleSetRuleStats#session_other}
  */
  readonly sessionOther?: number;
  /**
  * SCTP session counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_rule_stats#session_sctp DataThunderRuleSetRuleStats#session_sctp}
  */
  readonly sessionSctp?: number;
  /**
  * TCP session counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_rule_stats#session_tcp DataThunderRuleSetRuleStats#session_tcp}
  */
  readonly sessionTcp?: number;
  /**
  * UDP session counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_rule_stats#session_udp DataThunderRuleSetRuleStats#session_udp}
  */
  readonly sessionUdp?: number;
}

export function dataThunderRuleSetRuleStatsStatsToTerraform(struct?: DataThunderRuleSetRuleStatsStatsOutputReference | DataThunderRuleSetRuleStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_session_icmp: cdktf.numberToTerraform(struct!.activeSessionIcmp),
    active_session_other: cdktf.numberToTerraform(struct!.activeSessionOther),
    active_session_sctp: cdktf.numberToTerraform(struct!.activeSessionSctp),
    active_session_tcp: cdktf.numberToTerraform(struct!.activeSessionTcp),
    active_session_udp: cdktf.numberToTerraform(struct!.activeSessionUdp),
    deny_bytes: cdktf.numberToTerraform(struct!.denyBytes),
    deny_packets: cdktf.numberToTerraform(struct!.denyPackets),
    hit_count: cdktf.numberToTerraform(struct!.hitCount),
    hitcount_timestamp: cdktf.numberToTerraform(struct!.hitcountTimestamp),
    permit_bytes: cdktf.numberToTerraform(struct!.permitBytes),
    permit_packets: cdktf.numberToTerraform(struct!.permitPackets),
    rate_limit_drops: cdktf.numberToTerraform(struct!.rateLimitDrops),
    reset_bytes: cdktf.numberToTerraform(struct!.resetBytes),
    reset_packets: cdktf.numberToTerraform(struct!.resetPackets),
    session_icmp: cdktf.numberToTerraform(struct!.sessionIcmp),
    session_other: cdktf.numberToTerraform(struct!.sessionOther),
    session_sctp: cdktf.numberToTerraform(struct!.sessionSctp),
    session_tcp: cdktf.numberToTerraform(struct!.sessionTcp),
    session_udp: cdktf.numberToTerraform(struct!.sessionUdp),
  }
}


export function dataThunderRuleSetRuleStatsStatsToHclTerraform(struct?: DataThunderRuleSetRuleStatsStatsOutputReference | DataThunderRuleSetRuleStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active_session_icmp: {
      value: cdktf.numberToHclTerraform(struct!.activeSessionIcmp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    active_session_other: {
      value: cdktf.numberToHclTerraform(struct!.activeSessionOther),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    active_session_sctp: {
      value: cdktf.numberToHclTerraform(struct!.activeSessionSctp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    active_session_tcp: {
      value: cdktf.numberToHclTerraform(struct!.activeSessionTcp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    active_session_udp: {
      value: cdktf.numberToHclTerraform(struct!.activeSessionUdp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    deny_bytes: {
      value: cdktf.numberToHclTerraform(struct!.denyBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    deny_packets: {
      value: cdktf.numberToHclTerraform(struct!.denyPackets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hit_count: {
      value: cdktf.numberToHclTerraform(struct!.hitCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hitcount_timestamp: {
      value: cdktf.numberToHclTerraform(struct!.hitcountTimestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    permit_bytes: {
      value: cdktf.numberToHclTerraform(struct!.permitBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    permit_packets: {
      value: cdktf.numberToHclTerraform(struct!.permitPackets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rate_limit_drops: {
      value: cdktf.numberToHclTerraform(struct!.rateLimitDrops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reset_bytes: {
      value: cdktf.numberToHclTerraform(struct!.resetBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reset_packets: {
      value: cdktf.numberToHclTerraform(struct!.resetPackets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_icmp: {
      value: cdktf.numberToHclTerraform(struct!.sessionIcmp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_other: {
      value: cdktf.numberToHclTerraform(struct!.sessionOther),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_sctp: {
      value: cdktf.numberToHclTerraform(struct!.sessionSctp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_tcp: {
      value: cdktf.numberToHclTerraform(struct!.sessionTcp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_udp: {
      value: cdktf.numberToHclTerraform(struct!.sessionUdp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderRuleSetRuleStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderRuleSetRuleStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeSessionIcmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeSessionIcmp = this._activeSessionIcmp;
    }
    if (this._activeSessionOther !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeSessionOther = this._activeSessionOther;
    }
    if (this._activeSessionSctp !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeSessionSctp = this._activeSessionSctp;
    }
    if (this._activeSessionTcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeSessionTcp = this._activeSessionTcp;
    }
    if (this._activeSessionUdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeSessionUdp = this._activeSessionUdp;
    }
    if (this._denyBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyBytes = this._denyBytes;
    }
    if (this._denyPackets !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyPackets = this._denyPackets;
    }
    if (this._hitCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.hitCount = this._hitCount;
    }
    if (this._hitcountTimestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.hitcountTimestamp = this._hitcountTimestamp;
    }
    if (this._permitBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitBytes = this._permitBytes;
    }
    if (this._permitPackets !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitPackets = this._permitPackets;
    }
    if (this._rateLimitDrops !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimitDrops = this._rateLimitDrops;
    }
    if (this._resetBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.resetBytes = this._resetBytes;
    }
    if (this._resetPackets !== undefined) {
      hasAnyValues = true;
      internalValueResult.resetPackets = this._resetPackets;
    }
    if (this._sessionIcmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionIcmp = this._sessionIcmp;
    }
    if (this._sessionOther !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionOther = this._sessionOther;
    }
    if (this._sessionSctp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionSctp = this._sessionSctp;
    }
    if (this._sessionTcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionTcp = this._sessionTcp;
    }
    if (this._sessionUdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionUdp = this._sessionUdp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderRuleSetRuleStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._activeSessionIcmp = undefined;
      this._activeSessionOther = undefined;
      this._activeSessionSctp = undefined;
      this._activeSessionTcp = undefined;
      this._activeSessionUdp = undefined;
      this._denyBytes = undefined;
      this._denyPackets = undefined;
      this._hitCount = undefined;
      this._hitcountTimestamp = undefined;
      this._permitBytes = undefined;
      this._permitPackets = undefined;
      this._rateLimitDrops = undefined;
      this._resetBytes = undefined;
      this._resetPackets = undefined;
      this._sessionIcmp = undefined;
      this._sessionOther = undefined;
      this._sessionSctp = undefined;
      this._sessionTcp = undefined;
      this._sessionUdp = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._activeSessionIcmp = value.activeSessionIcmp;
      this._activeSessionOther = value.activeSessionOther;
      this._activeSessionSctp = value.activeSessionSctp;
      this._activeSessionTcp = value.activeSessionTcp;
      this._activeSessionUdp = value.activeSessionUdp;
      this._denyBytes = value.denyBytes;
      this._denyPackets = value.denyPackets;
      this._hitCount = value.hitCount;
      this._hitcountTimestamp = value.hitcountTimestamp;
      this._permitBytes = value.permitBytes;
      this._permitPackets = value.permitPackets;
      this._rateLimitDrops = value.rateLimitDrops;
      this._resetBytes = value.resetBytes;
      this._resetPackets = value.resetPackets;
      this._sessionIcmp = value.sessionIcmp;
      this._sessionOther = value.sessionOther;
      this._sessionSctp = value.sessionSctp;
      this._sessionTcp = value.sessionTcp;
      this._sessionUdp = value.sessionUdp;
    }
  }

  // active_session_icmp - computed: false, optional: true, required: false
  private _activeSessionIcmp?: number; 
  public get activeSessionIcmp() {
    return this.getNumberAttribute('active_session_icmp');
  }
  public set activeSessionIcmp(value: number) {
    this._activeSessionIcmp = value;
  }
  public resetActiveSessionIcmp() {
    this._activeSessionIcmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeSessionIcmpInput() {
    return this._activeSessionIcmp;
  }

  // active_session_other - computed: false, optional: true, required: false
  private _activeSessionOther?: number; 
  public get activeSessionOther() {
    return this.getNumberAttribute('active_session_other');
  }
  public set activeSessionOther(value: number) {
    this._activeSessionOther = value;
  }
  public resetActiveSessionOther() {
    this._activeSessionOther = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeSessionOtherInput() {
    return this._activeSessionOther;
  }

  // active_session_sctp - computed: false, optional: true, required: false
  private _activeSessionSctp?: number; 
  public get activeSessionSctp() {
    return this.getNumberAttribute('active_session_sctp');
  }
  public set activeSessionSctp(value: number) {
    this._activeSessionSctp = value;
  }
  public resetActiveSessionSctp() {
    this._activeSessionSctp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeSessionSctpInput() {
    return this._activeSessionSctp;
  }

  // active_session_tcp - computed: false, optional: true, required: false
  private _activeSessionTcp?: number; 
  public get activeSessionTcp() {
    return this.getNumberAttribute('active_session_tcp');
  }
  public set activeSessionTcp(value: number) {
    this._activeSessionTcp = value;
  }
  public resetActiveSessionTcp() {
    this._activeSessionTcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeSessionTcpInput() {
    return this._activeSessionTcp;
  }

  // active_session_udp - computed: false, optional: true, required: false
  private _activeSessionUdp?: number; 
  public get activeSessionUdp() {
    return this.getNumberAttribute('active_session_udp');
  }
  public set activeSessionUdp(value: number) {
    this._activeSessionUdp = value;
  }
  public resetActiveSessionUdp() {
    this._activeSessionUdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeSessionUdpInput() {
    return this._activeSessionUdp;
  }

  // deny_bytes - computed: false, optional: true, required: false
  private _denyBytes?: number; 
  public get denyBytes() {
    return this.getNumberAttribute('deny_bytes');
  }
  public set denyBytes(value: number) {
    this._denyBytes = value;
  }
  public resetDenyBytes() {
    this._denyBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyBytesInput() {
    return this._denyBytes;
  }

  // deny_packets - computed: false, optional: true, required: false
  private _denyPackets?: number; 
  public get denyPackets() {
    return this.getNumberAttribute('deny_packets');
  }
  public set denyPackets(value: number) {
    this._denyPackets = value;
  }
  public resetDenyPackets() {
    this._denyPackets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyPacketsInput() {
    return this._denyPackets;
  }

  // hit_count - computed: false, optional: true, required: false
  private _hitCount?: number; 
  public get hitCount() {
    return this.getNumberAttribute('hit_count');
  }
  public set hitCount(value: number) {
    this._hitCount = value;
  }
  public resetHitCount() {
    this._hitCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hitCountInput() {
    return this._hitCount;
  }

  // hitcount_timestamp - computed: false, optional: true, required: false
  private _hitcountTimestamp?: number; 
  public get hitcountTimestamp() {
    return this.getNumberAttribute('hitcount_timestamp');
  }
  public set hitcountTimestamp(value: number) {
    this._hitcountTimestamp = value;
  }
  public resetHitcountTimestamp() {
    this._hitcountTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hitcountTimestampInput() {
    return this._hitcountTimestamp;
  }

  // permit_bytes - computed: false, optional: true, required: false
  private _permitBytes?: number; 
  public get permitBytes() {
    return this.getNumberAttribute('permit_bytes');
  }
  public set permitBytes(value: number) {
    this._permitBytes = value;
  }
  public resetPermitBytes() {
    this._permitBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitBytesInput() {
    return this._permitBytes;
  }

  // permit_packets - computed: false, optional: true, required: false
  private _permitPackets?: number; 
  public get permitPackets() {
    return this.getNumberAttribute('permit_packets');
  }
  public set permitPackets(value: number) {
    this._permitPackets = value;
  }
  public resetPermitPackets() {
    this._permitPackets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitPacketsInput() {
    return this._permitPackets;
  }

  // rate_limit_drops - computed: false, optional: true, required: false
  private _rateLimitDrops?: number; 
  public get rateLimitDrops() {
    return this.getNumberAttribute('rate_limit_drops');
  }
  public set rateLimitDrops(value: number) {
    this._rateLimitDrops = value;
  }
  public resetRateLimitDrops() {
    this._rateLimitDrops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitDropsInput() {
    return this._rateLimitDrops;
  }

  // reset_bytes - computed: false, optional: true, required: false
  private _resetBytes?: number; 
  public get resetBytes() {
    return this.getNumberAttribute('reset_bytes');
  }
  public set resetBytes(value: number) {
    this._resetBytes = value;
  }
  public resetResetBytes() {
    this._resetBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetBytesInput() {
    return this._resetBytes;
  }

  // reset_packets - computed: false, optional: true, required: false
  private _resetPackets?: number; 
  public get resetPackets() {
    return this.getNumberAttribute('reset_packets');
  }
  public set resetPackets(value: number) {
    this._resetPackets = value;
  }
  public resetResetPackets() {
    this._resetPackets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetPacketsInput() {
    return this._resetPackets;
  }

  // session_icmp - computed: false, optional: true, required: false
  private _sessionIcmp?: number; 
  public get sessionIcmp() {
    return this.getNumberAttribute('session_icmp');
  }
  public set sessionIcmp(value: number) {
    this._sessionIcmp = value;
  }
  public resetSessionIcmp() {
    this._sessionIcmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionIcmpInput() {
    return this._sessionIcmp;
  }

  // session_other - computed: false, optional: true, required: false
  private _sessionOther?: number; 
  public get sessionOther() {
    return this.getNumberAttribute('session_other');
  }
  public set sessionOther(value: number) {
    this._sessionOther = value;
  }
  public resetSessionOther() {
    this._sessionOther = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionOtherInput() {
    return this._sessionOther;
  }

  // session_sctp - computed: false, optional: true, required: false
  private _sessionSctp?: number; 
  public get sessionSctp() {
    return this.getNumberAttribute('session_sctp');
  }
  public set sessionSctp(value: number) {
    this._sessionSctp = value;
  }
  public resetSessionSctp() {
    this._sessionSctp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionSctpInput() {
    return this._sessionSctp;
  }

  // session_tcp - computed: false, optional: true, required: false
  private _sessionTcp?: number; 
  public get sessionTcp() {
    return this.getNumberAttribute('session_tcp');
  }
  public set sessionTcp(value: number) {
    this._sessionTcp = value;
  }
  public resetSessionTcp() {
    this._sessionTcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionTcpInput() {
    return this._sessionTcp;
  }

  // session_udp - computed: false, optional: true, required: false
  private _sessionUdp?: number; 
  public get sessionUdp() {
    return this.getNumberAttribute('session_udp');
  }
  public set sessionUdp(value: number) {
    this._sessionUdp = value;
  }
  public resetSessionUdp() {
    this._sessionUdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionUdpInput() {
    return this._sessionUdp;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_rule_stats thunder_rule_set_rule_stats}
*/
export class DataThunderRuleSetRuleStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_rule_set_rule_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderRuleSetRuleStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderRuleSetRuleStats to import
  * @param importFromId The id of the existing DataThunderRuleSetRuleStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_rule_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderRuleSetRuleStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_rule_set_rule_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_rule_stats thunder_rule_set_rule_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderRuleSetRuleStatsConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderRuleSetRuleStatsConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_rule_set_rule_stats',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
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
    this._name = config.name;
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

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderRuleSetRuleStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderRuleSetRuleStatsStats) {
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
      name: cdktf.stringToTerraform(this._name),
      stats: dataThunderRuleSetRuleStatsStatsToTerraform(this._stats.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stats: {
        value: dataThunderRuleSetRuleStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderRuleSetRuleStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
