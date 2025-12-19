// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_rate_limit_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderFwRateLimitStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_rate_limit_stats#id DataThunderFwRateLimitStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_rate_limit_stats#stats DataThunderFwRateLimitStats#stats}
  */
  readonly stats?: DataThunderFwRateLimitStatsStats;
}
export interface DataThunderFwRateLimitStatsStats {
  /**
  * Number of Rate-limit Entries Allocated Totally
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_rate_limit_stats#ratelimit_entry_count_allocated DataThunderFwRateLimitStats#ratelimit_entry_count_allocated}
  */
  readonly ratelimitEntryCountAllocated?: number;
  /**
  * Number of Rate-limit Entries Freed Totally
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_rate_limit_stats#ratelimit_entry_count_freed DataThunderFwRateLimitStats#ratelimit_entry_count_freed}
  */
  readonly ratelimitEntryCountFreed?: number;
  /**
  * Number of Rate-limit Entries with Scope Aggregate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_rate_limit_stats#ratelimit_entry_count_fw_rule_uid DataThunderFwRateLimitStats#ratelimit_entry_count_fw_rule_uid}
  */
  readonly ratelimitEntryCountFwRuleUid?: number;
  /**
  * Number of Rate-limit Entries with Scope IPv6 Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_rate_limit_stats#ratelimit_entry_count_ip6_addr DataThunderFwRateLimitStats#ratelimit_entry_count_ip6_addr}
  */
  readonly ratelimitEntryCountIp6Addr?: number;
  /**
  * Number of Rate-limit Entries with Scope IPv4 Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_rate_limit_stats#ratelimit_entry_count_ip_addr DataThunderFwRateLimitStats#ratelimit_entry_count_ip_addr}
  */
  readonly ratelimitEntryCountIpAddr?: number;
  /**
  * Number of Parent Rate-limit Entries with Scope IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_rate_limit_stats#ratelimit_entry_count_parent_ip DataThunderFwRateLimitStats#ratelimit_entry_count_parent_ip}
  */
  readonly ratelimitEntryCountParentIp?: number;
  /**
  * Number of Parent Rate-limit Entries with Scope IPv4 Prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_rate_limit_stats#ratelimit_entry_count_parent_ipv4_prefix DataThunderFwRateLimitStats#ratelimit_entry_count_parent_ipv4_prefix}
  */
  readonly ratelimitEntryCountParentIpv4Prefix?: number;
  /**
  * Number of Parent Rate-limit Entries with Scope IPv6 Prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_rate_limit_stats#ratelimit_entry_count_parent_ipv6_prefix DataThunderFwRateLimitStats#ratelimit_entry_count_parent_ipv6_prefix}
  */
  readonly ratelimitEntryCountParentIpv6Prefix?: number;
  /**
  * The total number of parent rate-limiting entries with the scope RADIUS user group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_rate_limit_stats#ratelimit_entry_count_parent_radius_usergroup DataThunderFwRateLimitStats#ratelimit_entry_count_parent_radius_usergroup}
  */
  readonly ratelimitEntryCountParentRadiusUsergroup?: number;
  /**
  * The total number of parent rate-limiting entries with the scope RADIUS user ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_rate_limit_stats#ratelimit_entry_count_parent_radius_userid DataThunderFwRateLimitStats#ratelimit_entry_count_parent_radius_userid}
  */
  readonly ratelimitEntryCountParentRadiusUserid?: number;
  /**
  * Number of Parent Rate-limit Entries with Scope Aggregate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_rate_limit_stats#ratelimit_entry_count_parent_uid DataThunderFwRateLimitStats#ratelimit_entry_count_parent_uid}
  */
  readonly ratelimitEntryCountParentUid?: number;
  /**
  * The total number of rate-limiting entries with the scope RADIUS user group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_rate_limit_stats#ratelimit_entry_count_radius_usergroup DataThunderFwRateLimitStats#ratelimit_entry_count_radius_usergroup}
  */
  readonly ratelimitEntryCountRadiusUsergroup?: number;
  /**
  * The total number of rate-limiting entries with the scope RADIUS user ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_rate_limit_stats#ratelimit_entry_count_radius_userid DataThunderFwRateLimitStats#ratelimit_entry_count_radius_userid}
  */
  readonly ratelimitEntryCountRadiusUserid?: number;
  /**
  * Number of Rate-limit Entries with Scope IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_rate_limit_stats#ratelimit_entry_count_rule_ip DataThunderFwRateLimitStats#ratelimit_entry_count_rule_ip}
  */
  readonly ratelimitEntryCountRuleIp?: number;
  /**
  * Number of Rate-limit Entries with Scope IPv4 Prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_rate_limit_stats#ratelimit_entry_count_rule_ipv4_prefix DataThunderFwRateLimitStats#ratelimit_entry_count_rule_ipv4_prefix}
  */
  readonly ratelimitEntryCountRuleIpv4Prefix?: number;
  /**
  * Number of Rate-limit Entries with Scope IPv6 Prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_rate_limit_stats#ratelimit_entry_count_rule_ipv6_prefix DataThunderFwRateLimitStats#ratelimit_entry_count_rule_ipv6_prefix}
  */
  readonly ratelimitEntryCountRuleIpv6Prefix?: number;
  /**
  * Number of Rate-limit Entries with Scope Session ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_rate_limit_stats#ratelimit_entry_count_session_id DataThunderFwRateLimitStats#ratelimit_entry_count_session_id}
  */
  readonly ratelimitEntryCountSessionId?: number;
  /**
  * Number of Total Rate-limit Entries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_rate_limit_stats#ratelimit_entry_count_t2_key DataThunderFwRateLimitStats#ratelimit_entry_count_t2_key}
  */
  readonly ratelimitEntryCountT2Key?: number;
  /**
  * Total Memory Used For Rate-limiting (bytes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_rate_limit_stats#ratelimit_used_total_mem DataThunderFwRateLimitStats#ratelimit_used_total_mem}
  */
  readonly ratelimitUsedTotalMem?: number;
}

export function dataThunderFwRateLimitStatsStatsToTerraform(struct?: DataThunderFwRateLimitStatsStatsOutputReference | DataThunderFwRateLimitStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ratelimit_entry_count_allocated: cdktf.numberToTerraform(struct!.ratelimitEntryCountAllocated),
    ratelimit_entry_count_freed: cdktf.numberToTerraform(struct!.ratelimitEntryCountFreed),
    ratelimit_entry_count_fw_rule_uid: cdktf.numberToTerraform(struct!.ratelimitEntryCountFwRuleUid),
    ratelimit_entry_count_ip6_addr: cdktf.numberToTerraform(struct!.ratelimitEntryCountIp6Addr),
    ratelimit_entry_count_ip_addr: cdktf.numberToTerraform(struct!.ratelimitEntryCountIpAddr),
    ratelimit_entry_count_parent_ip: cdktf.numberToTerraform(struct!.ratelimitEntryCountParentIp),
    ratelimit_entry_count_parent_ipv4_prefix: cdktf.numberToTerraform(struct!.ratelimitEntryCountParentIpv4Prefix),
    ratelimit_entry_count_parent_ipv6_prefix: cdktf.numberToTerraform(struct!.ratelimitEntryCountParentIpv6Prefix),
    ratelimit_entry_count_parent_radius_usergroup: cdktf.numberToTerraform(struct!.ratelimitEntryCountParentRadiusUsergroup),
    ratelimit_entry_count_parent_radius_userid: cdktf.numberToTerraform(struct!.ratelimitEntryCountParentRadiusUserid),
    ratelimit_entry_count_parent_uid: cdktf.numberToTerraform(struct!.ratelimitEntryCountParentUid),
    ratelimit_entry_count_radius_usergroup: cdktf.numberToTerraform(struct!.ratelimitEntryCountRadiusUsergroup),
    ratelimit_entry_count_radius_userid: cdktf.numberToTerraform(struct!.ratelimitEntryCountRadiusUserid),
    ratelimit_entry_count_rule_ip: cdktf.numberToTerraform(struct!.ratelimitEntryCountRuleIp),
    ratelimit_entry_count_rule_ipv4_prefix: cdktf.numberToTerraform(struct!.ratelimitEntryCountRuleIpv4Prefix),
    ratelimit_entry_count_rule_ipv6_prefix: cdktf.numberToTerraform(struct!.ratelimitEntryCountRuleIpv6Prefix),
    ratelimit_entry_count_session_id: cdktf.numberToTerraform(struct!.ratelimitEntryCountSessionId),
    ratelimit_entry_count_t2_key: cdktf.numberToTerraform(struct!.ratelimitEntryCountT2Key),
    ratelimit_used_total_mem: cdktf.numberToTerraform(struct!.ratelimitUsedTotalMem),
  }
}


export function dataThunderFwRateLimitStatsStatsToHclTerraform(struct?: DataThunderFwRateLimitStatsStatsOutputReference | DataThunderFwRateLimitStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ratelimit_entry_count_allocated: {
      value: cdktf.numberToHclTerraform(struct!.ratelimitEntryCountAllocated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ratelimit_entry_count_freed: {
      value: cdktf.numberToHclTerraform(struct!.ratelimitEntryCountFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ratelimit_entry_count_fw_rule_uid: {
      value: cdktf.numberToHclTerraform(struct!.ratelimitEntryCountFwRuleUid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ratelimit_entry_count_ip6_addr: {
      value: cdktf.numberToHclTerraform(struct!.ratelimitEntryCountIp6Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ratelimit_entry_count_ip_addr: {
      value: cdktf.numberToHclTerraform(struct!.ratelimitEntryCountIpAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ratelimit_entry_count_parent_ip: {
      value: cdktf.numberToHclTerraform(struct!.ratelimitEntryCountParentIp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ratelimit_entry_count_parent_ipv4_prefix: {
      value: cdktf.numberToHclTerraform(struct!.ratelimitEntryCountParentIpv4Prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ratelimit_entry_count_parent_ipv6_prefix: {
      value: cdktf.numberToHclTerraform(struct!.ratelimitEntryCountParentIpv6Prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ratelimit_entry_count_parent_radius_usergroup: {
      value: cdktf.numberToHclTerraform(struct!.ratelimitEntryCountParentRadiusUsergroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ratelimit_entry_count_parent_radius_userid: {
      value: cdktf.numberToHclTerraform(struct!.ratelimitEntryCountParentRadiusUserid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ratelimit_entry_count_parent_uid: {
      value: cdktf.numberToHclTerraform(struct!.ratelimitEntryCountParentUid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ratelimit_entry_count_radius_usergroup: {
      value: cdktf.numberToHclTerraform(struct!.ratelimitEntryCountRadiusUsergroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ratelimit_entry_count_radius_userid: {
      value: cdktf.numberToHclTerraform(struct!.ratelimitEntryCountRadiusUserid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ratelimit_entry_count_rule_ip: {
      value: cdktf.numberToHclTerraform(struct!.ratelimitEntryCountRuleIp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ratelimit_entry_count_rule_ipv4_prefix: {
      value: cdktf.numberToHclTerraform(struct!.ratelimitEntryCountRuleIpv4Prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ratelimit_entry_count_rule_ipv6_prefix: {
      value: cdktf.numberToHclTerraform(struct!.ratelimitEntryCountRuleIpv6Prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ratelimit_entry_count_session_id: {
      value: cdktf.numberToHclTerraform(struct!.ratelimitEntryCountSessionId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ratelimit_entry_count_t2_key: {
      value: cdktf.numberToHclTerraform(struct!.ratelimitEntryCountT2Key),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ratelimit_used_total_mem: {
      value: cdktf.numberToHclTerraform(struct!.ratelimitUsedTotalMem),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderFwRateLimitStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderFwRateLimitStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ratelimitEntryCountAllocated !== undefined) {
      hasAnyValues = true;
      internalValueResult.ratelimitEntryCountAllocated = this._ratelimitEntryCountAllocated;
    }
    if (this._ratelimitEntryCountFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.ratelimitEntryCountFreed = this._ratelimitEntryCountFreed;
    }
    if (this._ratelimitEntryCountFwRuleUid !== undefined) {
      hasAnyValues = true;
      internalValueResult.ratelimitEntryCountFwRuleUid = this._ratelimitEntryCountFwRuleUid;
    }
    if (this._ratelimitEntryCountIp6Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ratelimitEntryCountIp6Addr = this._ratelimitEntryCountIp6Addr;
    }
    if (this._ratelimitEntryCountIpAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ratelimitEntryCountIpAddr = this._ratelimitEntryCountIpAddr;
    }
    if (this._ratelimitEntryCountParentIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.ratelimitEntryCountParentIp = this._ratelimitEntryCountParentIp;
    }
    if (this._ratelimitEntryCountParentIpv4Prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.ratelimitEntryCountParentIpv4Prefix = this._ratelimitEntryCountParentIpv4Prefix;
    }
    if (this._ratelimitEntryCountParentIpv6Prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.ratelimitEntryCountParentIpv6Prefix = this._ratelimitEntryCountParentIpv6Prefix;
    }
    if (this._ratelimitEntryCountParentRadiusUsergroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.ratelimitEntryCountParentRadiusUsergroup = this._ratelimitEntryCountParentRadiusUsergroup;
    }
    if (this._ratelimitEntryCountParentRadiusUserid !== undefined) {
      hasAnyValues = true;
      internalValueResult.ratelimitEntryCountParentRadiusUserid = this._ratelimitEntryCountParentRadiusUserid;
    }
    if (this._ratelimitEntryCountParentUid !== undefined) {
      hasAnyValues = true;
      internalValueResult.ratelimitEntryCountParentUid = this._ratelimitEntryCountParentUid;
    }
    if (this._ratelimitEntryCountRadiusUsergroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.ratelimitEntryCountRadiusUsergroup = this._ratelimitEntryCountRadiusUsergroup;
    }
    if (this._ratelimitEntryCountRadiusUserid !== undefined) {
      hasAnyValues = true;
      internalValueResult.ratelimitEntryCountRadiusUserid = this._ratelimitEntryCountRadiusUserid;
    }
    if (this._ratelimitEntryCountRuleIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.ratelimitEntryCountRuleIp = this._ratelimitEntryCountRuleIp;
    }
    if (this._ratelimitEntryCountRuleIpv4Prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.ratelimitEntryCountRuleIpv4Prefix = this._ratelimitEntryCountRuleIpv4Prefix;
    }
    if (this._ratelimitEntryCountRuleIpv6Prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.ratelimitEntryCountRuleIpv6Prefix = this._ratelimitEntryCountRuleIpv6Prefix;
    }
    if (this._ratelimitEntryCountSessionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ratelimitEntryCountSessionId = this._ratelimitEntryCountSessionId;
    }
    if (this._ratelimitEntryCountT2Key !== undefined) {
      hasAnyValues = true;
      internalValueResult.ratelimitEntryCountT2Key = this._ratelimitEntryCountT2Key;
    }
    if (this._ratelimitUsedTotalMem !== undefined) {
      hasAnyValues = true;
      internalValueResult.ratelimitUsedTotalMem = this._ratelimitUsedTotalMem;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderFwRateLimitStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ratelimitEntryCountAllocated = undefined;
      this._ratelimitEntryCountFreed = undefined;
      this._ratelimitEntryCountFwRuleUid = undefined;
      this._ratelimitEntryCountIp6Addr = undefined;
      this._ratelimitEntryCountIpAddr = undefined;
      this._ratelimitEntryCountParentIp = undefined;
      this._ratelimitEntryCountParentIpv4Prefix = undefined;
      this._ratelimitEntryCountParentIpv6Prefix = undefined;
      this._ratelimitEntryCountParentRadiusUsergroup = undefined;
      this._ratelimitEntryCountParentRadiusUserid = undefined;
      this._ratelimitEntryCountParentUid = undefined;
      this._ratelimitEntryCountRadiusUsergroup = undefined;
      this._ratelimitEntryCountRadiusUserid = undefined;
      this._ratelimitEntryCountRuleIp = undefined;
      this._ratelimitEntryCountRuleIpv4Prefix = undefined;
      this._ratelimitEntryCountRuleIpv6Prefix = undefined;
      this._ratelimitEntryCountSessionId = undefined;
      this._ratelimitEntryCountT2Key = undefined;
      this._ratelimitUsedTotalMem = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ratelimitEntryCountAllocated = value.ratelimitEntryCountAllocated;
      this._ratelimitEntryCountFreed = value.ratelimitEntryCountFreed;
      this._ratelimitEntryCountFwRuleUid = value.ratelimitEntryCountFwRuleUid;
      this._ratelimitEntryCountIp6Addr = value.ratelimitEntryCountIp6Addr;
      this._ratelimitEntryCountIpAddr = value.ratelimitEntryCountIpAddr;
      this._ratelimitEntryCountParentIp = value.ratelimitEntryCountParentIp;
      this._ratelimitEntryCountParentIpv4Prefix = value.ratelimitEntryCountParentIpv4Prefix;
      this._ratelimitEntryCountParentIpv6Prefix = value.ratelimitEntryCountParentIpv6Prefix;
      this._ratelimitEntryCountParentRadiusUsergroup = value.ratelimitEntryCountParentRadiusUsergroup;
      this._ratelimitEntryCountParentRadiusUserid = value.ratelimitEntryCountParentRadiusUserid;
      this._ratelimitEntryCountParentUid = value.ratelimitEntryCountParentUid;
      this._ratelimitEntryCountRadiusUsergroup = value.ratelimitEntryCountRadiusUsergroup;
      this._ratelimitEntryCountRadiusUserid = value.ratelimitEntryCountRadiusUserid;
      this._ratelimitEntryCountRuleIp = value.ratelimitEntryCountRuleIp;
      this._ratelimitEntryCountRuleIpv4Prefix = value.ratelimitEntryCountRuleIpv4Prefix;
      this._ratelimitEntryCountRuleIpv6Prefix = value.ratelimitEntryCountRuleIpv6Prefix;
      this._ratelimitEntryCountSessionId = value.ratelimitEntryCountSessionId;
      this._ratelimitEntryCountT2Key = value.ratelimitEntryCountT2Key;
      this._ratelimitUsedTotalMem = value.ratelimitUsedTotalMem;
    }
  }

  // ratelimit_entry_count_allocated - computed: false, optional: true, required: false
  private _ratelimitEntryCountAllocated?: number; 
  public get ratelimitEntryCountAllocated() {
    return this.getNumberAttribute('ratelimit_entry_count_allocated');
  }
  public set ratelimitEntryCountAllocated(value: number) {
    this._ratelimitEntryCountAllocated = value;
  }
  public resetRatelimitEntryCountAllocated() {
    this._ratelimitEntryCountAllocated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratelimitEntryCountAllocatedInput() {
    return this._ratelimitEntryCountAllocated;
  }

  // ratelimit_entry_count_freed - computed: false, optional: true, required: false
  private _ratelimitEntryCountFreed?: number; 
  public get ratelimitEntryCountFreed() {
    return this.getNumberAttribute('ratelimit_entry_count_freed');
  }
  public set ratelimitEntryCountFreed(value: number) {
    this._ratelimitEntryCountFreed = value;
  }
  public resetRatelimitEntryCountFreed() {
    this._ratelimitEntryCountFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratelimitEntryCountFreedInput() {
    return this._ratelimitEntryCountFreed;
  }

  // ratelimit_entry_count_fw_rule_uid - computed: false, optional: true, required: false
  private _ratelimitEntryCountFwRuleUid?: number; 
  public get ratelimitEntryCountFwRuleUid() {
    return this.getNumberAttribute('ratelimit_entry_count_fw_rule_uid');
  }
  public set ratelimitEntryCountFwRuleUid(value: number) {
    this._ratelimitEntryCountFwRuleUid = value;
  }
  public resetRatelimitEntryCountFwRuleUid() {
    this._ratelimitEntryCountFwRuleUid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratelimitEntryCountFwRuleUidInput() {
    return this._ratelimitEntryCountFwRuleUid;
  }

  // ratelimit_entry_count_ip6_addr - computed: false, optional: true, required: false
  private _ratelimitEntryCountIp6Addr?: number; 
  public get ratelimitEntryCountIp6Addr() {
    return this.getNumberAttribute('ratelimit_entry_count_ip6_addr');
  }
  public set ratelimitEntryCountIp6Addr(value: number) {
    this._ratelimitEntryCountIp6Addr = value;
  }
  public resetRatelimitEntryCountIp6Addr() {
    this._ratelimitEntryCountIp6Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratelimitEntryCountIp6AddrInput() {
    return this._ratelimitEntryCountIp6Addr;
  }

  // ratelimit_entry_count_ip_addr - computed: false, optional: true, required: false
  private _ratelimitEntryCountIpAddr?: number; 
  public get ratelimitEntryCountIpAddr() {
    return this.getNumberAttribute('ratelimit_entry_count_ip_addr');
  }
  public set ratelimitEntryCountIpAddr(value: number) {
    this._ratelimitEntryCountIpAddr = value;
  }
  public resetRatelimitEntryCountIpAddr() {
    this._ratelimitEntryCountIpAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratelimitEntryCountIpAddrInput() {
    return this._ratelimitEntryCountIpAddr;
  }

  // ratelimit_entry_count_parent_ip - computed: false, optional: true, required: false
  private _ratelimitEntryCountParentIp?: number; 
  public get ratelimitEntryCountParentIp() {
    return this.getNumberAttribute('ratelimit_entry_count_parent_ip');
  }
  public set ratelimitEntryCountParentIp(value: number) {
    this._ratelimitEntryCountParentIp = value;
  }
  public resetRatelimitEntryCountParentIp() {
    this._ratelimitEntryCountParentIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratelimitEntryCountParentIpInput() {
    return this._ratelimitEntryCountParentIp;
  }

  // ratelimit_entry_count_parent_ipv4_prefix - computed: false, optional: true, required: false
  private _ratelimitEntryCountParentIpv4Prefix?: number; 
  public get ratelimitEntryCountParentIpv4Prefix() {
    return this.getNumberAttribute('ratelimit_entry_count_parent_ipv4_prefix');
  }
  public set ratelimitEntryCountParentIpv4Prefix(value: number) {
    this._ratelimitEntryCountParentIpv4Prefix = value;
  }
  public resetRatelimitEntryCountParentIpv4Prefix() {
    this._ratelimitEntryCountParentIpv4Prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratelimitEntryCountParentIpv4PrefixInput() {
    return this._ratelimitEntryCountParentIpv4Prefix;
  }

  // ratelimit_entry_count_parent_ipv6_prefix - computed: false, optional: true, required: false
  private _ratelimitEntryCountParentIpv6Prefix?: number; 
  public get ratelimitEntryCountParentIpv6Prefix() {
    return this.getNumberAttribute('ratelimit_entry_count_parent_ipv6_prefix');
  }
  public set ratelimitEntryCountParentIpv6Prefix(value: number) {
    this._ratelimitEntryCountParentIpv6Prefix = value;
  }
  public resetRatelimitEntryCountParentIpv6Prefix() {
    this._ratelimitEntryCountParentIpv6Prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratelimitEntryCountParentIpv6PrefixInput() {
    return this._ratelimitEntryCountParentIpv6Prefix;
  }

  // ratelimit_entry_count_parent_radius_usergroup - computed: false, optional: true, required: false
  private _ratelimitEntryCountParentRadiusUsergroup?: number; 
  public get ratelimitEntryCountParentRadiusUsergroup() {
    return this.getNumberAttribute('ratelimit_entry_count_parent_radius_usergroup');
  }
  public set ratelimitEntryCountParentRadiusUsergroup(value: number) {
    this._ratelimitEntryCountParentRadiusUsergroup = value;
  }
  public resetRatelimitEntryCountParentRadiusUsergroup() {
    this._ratelimitEntryCountParentRadiusUsergroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratelimitEntryCountParentRadiusUsergroupInput() {
    return this._ratelimitEntryCountParentRadiusUsergroup;
  }

  // ratelimit_entry_count_parent_radius_userid - computed: false, optional: true, required: false
  private _ratelimitEntryCountParentRadiusUserid?: number; 
  public get ratelimitEntryCountParentRadiusUserid() {
    return this.getNumberAttribute('ratelimit_entry_count_parent_radius_userid');
  }
  public set ratelimitEntryCountParentRadiusUserid(value: number) {
    this._ratelimitEntryCountParentRadiusUserid = value;
  }
  public resetRatelimitEntryCountParentRadiusUserid() {
    this._ratelimitEntryCountParentRadiusUserid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratelimitEntryCountParentRadiusUseridInput() {
    return this._ratelimitEntryCountParentRadiusUserid;
  }

  // ratelimit_entry_count_parent_uid - computed: false, optional: true, required: false
  private _ratelimitEntryCountParentUid?: number; 
  public get ratelimitEntryCountParentUid() {
    return this.getNumberAttribute('ratelimit_entry_count_parent_uid');
  }
  public set ratelimitEntryCountParentUid(value: number) {
    this._ratelimitEntryCountParentUid = value;
  }
  public resetRatelimitEntryCountParentUid() {
    this._ratelimitEntryCountParentUid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratelimitEntryCountParentUidInput() {
    return this._ratelimitEntryCountParentUid;
  }

  // ratelimit_entry_count_radius_usergroup - computed: false, optional: true, required: false
  private _ratelimitEntryCountRadiusUsergroup?: number; 
  public get ratelimitEntryCountRadiusUsergroup() {
    return this.getNumberAttribute('ratelimit_entry_count_radius_usergroup');
  }
  public set ratelimitEntryCountRadiusUsergroup(value: number) {
    this._ratelimitEntryCountRadiusUsergroup = value;
  }
  public resetRatelimitEntryCountRadiusUsergroup() {
    this._ratelimitEntryCountRadiusUsergroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratelimitEntryCountRadiusUsergroupInput() {
    return this._ratelimitEntryCountRadiusUsergroup;
  }

  // ratelimit_entry_count_radius_userid - computed: false, optional: true, required: false
  private _ratelimitEntryCountRadiusUserid?: number; 
  public get ratelimitEntryCountRadiusUserid() {
    return this.getNumberAttribute('ratelimit_entry_count_radius_userid');
  }
  public set ratelimitEntryCountRadiusUserid(value: number) {
    this._ratelimitEntryCountRadiusUserid = value;
  }
  public resetRatelimitEntryCountRadiusUserid() {
    this._ratelimitEntryCountRadiusUserid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratelimitEntryCountRadiusUseridInput() {
    return this._ratelimitEntryCountRadiusUserid;
  }

  // ratelimit_entry_count_rule_ip - computed: false, optional: true, required: false
  private _ratelimitEntryCountRuleIp?: number; 
  public get ratelimitEntryCountRuleIp() {
    return this.getNumberAttribute('ratelimit_entry_count_rule_ip');
  }
  public set ratelimitEntryCountRuleIp(value: number) {
    this._ratelimitEntryCountRuleIp = value;
  }
  public resetRatelimitEntryCountRuleIp() {
    this._ratelimitEntryCountRuleIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratelimitEntryCountRuleIpInput() {
    return this._ratelimitEntryCountRuleIp;
  }

  // ratelimit_entry_count_rule_ipv4_prefix - computed: false, optional: true, required: false
  private _ratelimitEntryCountRuleIpv4Prefix?: number; 
  public get ratelimitEntryCountRuleIpv4Prefix() {
    return this.getNumberAttribute('ratelimit_entry_count_rule_ipv4_prefix');
  }
  public set ratelimitEntryCountRuleIpv4Prefix(value: number) {
    this._ratelimitEntryCountRuleIpv4Prefix = value;
  }
  public resetRatelimitEntryCountRuleIpv4Prefix() {
    this._ratelimitEntryCountRuleIpv4Prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratelimitEntryCountRuleIpv4PrefixInput() {
    return this._ratelimitEntryCountRuleIpv4Prefix;
  }

  // ratelimit_entry_count_rule_ipv6_prefix - computed: false, optional: true, required: false
  private _ratelimitEntryCountRuleIpv6Prefix?: number; 
  public get ratelimitEntryCountRuleIpv6Prefix() {
    return this.getNumberAttribute('ratelimit_entry_count_rule_ipv6_prefix');
  }
  public set ratelimitEntryCountRuleIpv6Prefix(value: number) {
    this._ratelimitEntryCountRuleIpv6Prefix = value;
  }
  public resetRatelimitEntryCountRuleIpv6Prefix() {
    this._ratelimitEntryCountRuleIpv6Prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratelimitEntryCountRuleIpv6PrefixInput() {
    return this._ratelimitEntryCountRuleIpv6Prefix;
  }

  // ratelimit_entry_count_session_id - computed: false, optional: true, required: false
  private _ratelimitEntryCountSessionId?: number; 
  public get ratelimitEntryCountSessionId() {
    return this.getNumberAttribute('ratelimit_entry_count_session_id');
  }
  public set ratelimitEntryCountSessionId(value: number) {
    this._ratelimitEntryCountSessionId = value;
  }
  public resetRatelimitEntryCountSessionId() {
    this._ratelimitEntryCountSessionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratelimitEntryCountSessionIdInput() {
    return this._ratelimitEntryCountSessionId;
  }

  // ratelimit_entry_count_t2_key - computed: false, optional: true, required: false
  private _ratelimitEntryCountT2Key?: number; 
  public get ratelimitEntryCountT2Key() {
    return this.getNumberAttribute('ratelimit_entry_count_t2_key');
  }
  public set ratelimitEntryCountT2Key(value: number) {
    this._ratelimitEntryCountT2Key = value;
  }
  public resetRatelimitEntryCountT2Key() {
    this._ratelimitEntryCountT2Key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratelimitEntryCountT2KeyInput() {
    return this._ratelimitEntryCountT2Key;
  }

  // ratelimit_used_total_mem - computed: false, optional: true, required: false
  private _ratelimitUsedTotalMem?: number; 
  public get ratelimitUsedTotalMem() {
    return this.getNumberAttribute('ratelimit_used_total_mem');
  }
  public set ratelimitUsedTotalMem(value: number) {
    this._ratelimitUsedTotalMem = value;
  }
  public resetRatelimitUsedTotalMem() {
    this._ratelimitUsedTotalMem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratelimitUsedTotalMemInput() {
    return this._ratelimitUsedTotalMem;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_rate_limit_stats thunder_fw_rate_limit_stats}
*/
export class DataThunderFwRateLimitStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_fw_rate_limit_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderFwRateLimitStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderFwRateLimitStats to import
  * @param importFromId The id of the existing DataThunderFwRateLimitStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_rate_limit_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderFwRateLimitStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_fw_rate_limit_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_rate_limit_stats thunder_fw_rate_limit_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderFwRateLimitStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderFwRateLimitStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_fw_rate_limit_stats',
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
  private _stats = new DataThunderFwRateLimitStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderFwRateLimitStatsStats) {
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
      stats: dataThunderFwRateLimitStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderFwRateLimitStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderFwRateLimitStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
