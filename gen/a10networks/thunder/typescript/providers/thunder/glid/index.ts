// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/glid
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GlidConfig extends cdktf.TerraformMetaArguments {
  /**
  * Kibit (kibibit / 1024-bit) rate limit per rate-interval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/glid#bit_rate_limit Glid#bit_rate_limit}
  */
  readonly bitRateLimit?: number;
  /**
  * Connection Limit for the GLID (PBSLB range 1-1048575)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/glid#conn_limit Glid#conn_limit}
  */
  readonly connLimit?: number;
  /**
  * Connection rate limit per rate-interval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/glid#conn_rate_limit Glid#conn_rate_limit}
  */
  readonly connRateLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/glid#conn_rate_limit_interval Glid#conn_rate_limit_interval}
  */
  readonly connRateLimitInterval?: number;
  /**
  * Description for glid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/glid#description Glid#description}
  */
  readonly description?: string;
  /**
  * Fragmented packet rate limit per rate-interval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/glid#frag_pkt_rate_limit Glid#frag_pkt_rate_limit}
  */
  readonly fragPktRateLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/glid#id Glid#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Global Limit ID Name (PBSLB allows number only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/glid#name Glid#name}
  */
  readonly name: string;
  /**
  * Packet rate limit per rate-interval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/glid#pkt_rate_limit Glid#pkt_rate_limit}
  */
  readonly pktRateLimit?: number;
  /**
  * '1sec': 1sec for internal glid rate unit; 'system-global-setting': use global rate interval;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/glid#rate_unit Glid#rate_unit}
  */
  readonly rateUnit?: string;
  /**
  * Request limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/glid#request_limit Glid#request_limit}
  */
  readonly requestLimit?: number;
  /**
  * Request rate limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/glid#request_rate_limit Glid#request_rate_limit}
  */
  readonly requestRateLimit?: number;
  /**
  * Number of 100ms
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/glid#request_rate_limit_interval Glid#request_rate_limit_interval}
  */
  readonly requestRateLimitInterval?: number;
  /**
  * Syn Cookie threshold for the GLID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/glid#syn_cookie_thr Glid#syn_cookie_thr}
  */
  readonly synCookieThr?: number;
  /**
  * Use NAT pool specified to do reverse NAT for class list members bound to the lid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/glid#use_nat_pool Glid#use_nat_pool}
  */
  readonly useNatPool?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/glid#user_tag Glid#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/glid#uuid Glid#uuid}
  */
  readonly uuid?: string;
  /**
  * dns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/glid#dns Glid#dns}
  */
  readonly dns?: GlidDns;
  /**
  * dns64 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/glid#dns64 Glid#dns64}
  */
  readonly dns64?: GlidDns64;
  /**
  * over_limit_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/glid#over_limit_cfg Glid#over_limit_cfg}
  */
  readonly overLimitCfg?: GlidOverLimitCfg;
}
export interface GlidDns {
  /**
  * 'cache-disable': Disable dns cache; 'cache-enable': Enable dns cache;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/glid#action Glid#action}
  */
  readonly action?: string;
  /**
  * TTL for cache entry (TTL in seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/glid#ttl Glid#ttl}
  */
  readonly ttl?: number;
  /**
  * Weight for cache entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/glid#weight Glid#weight}
  */
  readonly weight?: number;
}

export function glidDnsToTerraform(struct?: GlidDnsOutputReference | GlidDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    ttl: cdktf.numberToTerraform(struct!.ttl),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function glidDnsToHclTerraform(struct?: GlidDnsOutputReference | GlidDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlidDnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlidDns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlidDns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._ttl = undefined;
      this._weight = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._ttl = value.ttl;
      this._weight = value.weight;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}
export interface GlidDns64 {
  /**
  * Disable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/glid#disable Glid#disable}
  */
  readonly disable?: number;
  /**
  * Exclusive Answer in DNS Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/glid#exclusive_answer Glid#exclusive_answer}
  */
  readonly exclusiveAnswer?: number;
  /**
  * IPv6 prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/glid#prefix Glid#prefix}
  */
  readonly prefix?: string;
}

export function glidDns64ToTerraform(struct?: GlidDns64OutputReference | GlidDns64): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable: cdktf.numberToTerraform(struct!.disable),
    exclusive_answer: cdktf.numberToTerraform(struct!.exclusiveAnswer),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function glidDns64ToHclTerraform(struct?: GlidDns64OutputReference | GlidDns64): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable: {
      value: cdktf.numberToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exclusive_answer: {
      value: cdktf.numberToHclTerraform(struct!.exclusiveAnswer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlidDns64OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlidDns64 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._exclusiveAnswer !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusiveAnswer = this._exclusiveAnswer;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlidDns64 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disable = undefined;
      this._exclusiveAnswer = undefined;
      this._prefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disable = value.disable;
      this._exclusiveAnswer = value.exclusiveAnswer;
      this._prefix = value.prefix;
    }
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: number; 
  public get disable() {
    return this.getNumberAttribute('disable');
  }
  public set disable(value: number) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // exclusive_answer - computed: false, optional: true, required: false
  private _exclusiveAnswer?: number; 
  public get exclusiveAnswer() {
    return this.getNumberAttribute('exclusive_answer');
  }
  public set exclusiveAnswer(value: number) {
    this._exclusiveAnswer = value;
  }
  public resetExclusiveAnswer() {
    this._exclusiveAnswer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusiveAnswerInput() {
    return this._exclusiveAnswer;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}
export interface GlidOverLimitCfg {
  /**
  * 'drop': Silently Drop the new connection / new packet when it exceeds limit; 'blacklist-src': Black List source entry for X minutes (only applied to src and src-dst entries);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/glid#action_type Glid#action_type}
  */
  readonly actionType?: string;
  /**
  * 'drop': Silently Drop the new connection / new packet when it exceeds limit; 'dns-cache-disable': Disable dns cache when it exceeds limit; 'dns-cache-enable': Enable dns cache when it exceeds limit; 'forward': Forward the traffic even it exceeds limit; 'reset': Reset the connection when it exceeds limit;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/glid#action_value Glid#action_value}
  */
  readonly actionValue?: string;
  /**
  * Black List source entry for X minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/glid#blacklist_src_min Glid#blacklist_src_min}
  */
  readonly blacklistSrcMin?: number;
  /**
  * Don't accept any new connection for certain time (Lockout duration in minutes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/glid#lockout Glid#lockout}
  */
  readonly lockout?: number;
  /**
  * Log a message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/glid#log Glid#log}
  */
  readonly log?: number;
  /**
  * Log interval (minute, by default system will log every over limit instance)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/glid#log_interval Glid#log_interval}
  */
  readonly logInterval?: number;
  /**
  * Action to take when limit(s) exceeds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/glid#over_limit_action Glid#over_limit_action}
  */
  readonly overLimitAction?: number;
}

export function glidOverLimitCfgToTerraform(struct?: GlidOverLimitCfgOutputReference | GlidOverLimitCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_type: cdktf.stringToTerraform(struct!.actionType),
    action_value: cdktf.stringToTerraform(struct!.actionValue),
    blacklist_src_min: cdktf.numberToTerraform(struct!.blacklistSrcMin),
    lockout: cdktf.numberToTerraform(struct!.lockout),
    log: cdktf.numberToTerraform(struct!.log),
    log_interval: cdktf.numberToTerraform(struct!.logInterval),
    over_limit_action: cdktf.numberToTerraform(struct!.overLimitAction),
  }
}


export function glidOverLimitCfgToHclTerraform(struct?: GlidOverLimitCfgOutputReference | GlidOverLimitCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_type: {
      value: cdktf.stringToHclTerraform(struct!.actionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action_value: {
      value: cdktf.stringToHclTerraform(struct!.actionValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    blacklist_src_min: {
      value: cdktf.numberToHclTerraform(struct!.blacklistSrcMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lockout: {
      value: cdktf.numberToHclTerraform(struct!.lockout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log: {
      value: cdktf.numberToHclTerraform(struct!.log),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_interval: {
      value: cdktf.numberToHclTerraform(struct!.logInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    over_limit_action: {
      value: cdktf.numberToHclTerraform(struct!.overLimitAction),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlidOverLimitCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlidOverLimitCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionType = this._actionType;
    }
    if (this._actionValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionValue = this._actionValue;
    }
    if (this._blacklistSrcMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.blacklistSrcMin = this._blacklistSrcMin;
    }
    if (this._lockout !== undefined) {
      hasAnyValues = true;
      internalValueResult.lockout = this._lockout;
    }
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    if (this._logInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.logInterval = this._logInterval;
    }
    if (this._overLimitAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.overLimitAction = this._overLimitAction;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlidOverLimitCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actionType = undefined;
      this._actionValue = undefined;
      this._blacklistSrcMin = undefined;
      this._lockout = undefined;
      this._log = undefined;
      this._logInterval = undefined;
      this._overLimitAction = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actionType = value.actionType;
      this._actionValue = value.actionValue;
      this._blacklistSrcMin = value.blacklistSrcMin;
      this._lockout = value.lockout;
      this._log = value.log;
      this._logInterval = value.logInterval;
      this._overLimitAction = value.overLimitAction;
    }
  }

  // action_type - computed: false, optional: true, required: false
  private _actionType?: string; 
  public get actionType() {
    return this.getStringAttribute('action_type');
  }
  public set actionType(value: string) {
    this._actionType = value;
  }
  public resetActionType() {
    this._actionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionTypeInput() {
    return this._actionType;
  }

  // action_value - computed: false, optional: true, required: false
  private _actionValue?: string; 
  public get actionValue() {
    return this.getStringAttribute('action_value');
  }
  public set actionValue(value: string) {
    this._actionValue = value;
  }
  public resetActionValue() {
    this._actionValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionValueInput() {
    return this._actionValue;
  }

  // blacklist_src_min - computed: false, optional: true, required: false
  private _blacklistSrcMin?: number; 
  public get blacklistSrcMin() {
    return this.getNumberAttribute('blacklist_src_min');
  }
  public set blacklistSrcMin(value: number) {
    this._blacklistSrcMin = value;
  }
  public resetBlacklistSrcMin() {
    this._blacklistSrcMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blacklistSrcMinInput() {
    return this._blacklistSrcMin;
  }

  // lockout - computed: false, optional: true, required: false
  private _lockout?: number; 
  public get lockout() {
    return this.getNumberAttribute('lockout');
  }
  public set lockout(value: number) {
    this._lockout = value;
  }
  public resetLockout() {
    this._lockout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockoutInput() {
    return this._lockout;
  }

  // log - computed: false, optional: true, required: false
  private _log?: number; 
  public get log() {
    return this.getNumberAttribute('log');
  }
  public set log(value: number) {
    this._log = value;
  }
  public resetLog() {
    this._log = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log;
  }

  // log_interval - computed: false, optional: true, required: false
  private _logInterval?: number; 
  public get logInterval() {
    return this.getNumberAttribute('log_interval');
  }
  public set logInterval(value: number) {
    this._logInterval = value;
  }
  public resetLogInterval() {
    this._logInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logIntervalInput() {
    return this._logInterval;
  }

  // over_limit_action - computed: false, optional: true, required: false
  private _overLimitAction?: number; 
  public get overLimitAction() {
    return this.getNumberAttribute('over_limit_action');
  }
  public set overLimitAction(value: number) {
    this._overLimitAction = value;
  }
  public resetOverLimitAction() {
    this._overLimitAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overLimitActionInput() {
    return this._overLimitAction;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/glid thunder_glid}
*/
export class Glid extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_glid";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Glid resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Glid to import
  * @param importFromId The id of the existing Glid that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/glid#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Glid to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_glid", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/glid thunder_glid} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GlidConfig
  */
  public constructor(scope: Construct, id: string, config: GlidConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_glid',
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
    this._bitRateLimit = config.bitRateLimit;
    this._connLimit = config.connLimit;
    this._connRateLimit = config.connRateLimit;
    this._connRateLimitInterval = config.connRateLimitInterval;
    this._description = config.description;
    this._fragPktRateLimit = config.fragPktRateLimit;
    this._id = config.id;
    this._name = config.name;
    this._pktRateLimit = config.pktRateLimit;
    this._rateUnit = config.rateUnit;
    this._requestLimit = config.requestLimit;
    this._requestRateLimit = config.requestRateLimit;
    this._requestRateLimitInterval = config.requestRateLimitInterval;
    this._synCookieThr = config.synCookieThr;
    this._useNatPool = config.useNatPool;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._dns.internalValue = config.dns;
    this._dns64.internalValue = config.dns64;
    this._overLimitCfg.internalValue = config.overLimitCfg;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bit_rate_limit - computed: false, optional: true, required: false
  private _bitRateLimit?: number; 
  public get bitRateLimit() {
    return this.getNumberAttribute('bit_rate_limit');
  }
  public set bitRateLimit(value: number) {
    this._bitRateLimit = value;
  }
  public resetBitRateLimit() {
    this._bitRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bitRateLimitInput() {
    return this._bitRateLimit;
  }

  // conn_limit - computed: false, optional: true, required: false
  private _connLimit?: number; 
  public get connLimit() {
    return this.getNumberAttribute('conn_limit');
  }
  public set connLimit(value: number) {
    this._connLimit = value;
  }
  public resetConnLimit() {
    this._connLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connLimitInput() {
    return this._connLimit;
  }

  // conn_rate_limit - computed: false, optional: true, required: false
  private _connRateLimit?: number; 
  public get connRateLimit() {
    return this.getNumberAttribute('conn_rate_limit');
  }
  public set connRateLimit(value: number) {
    this._connRateLimit = value;
  }
  public resetConnRateLimit() {
    this._connRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connRateLimitInput() {
    return this._connRateLimit;
  }

  // conn_rate_limit_interval - computed: false, optional: true, required: false
  private _connRateLimitInterval?: number; 
  public get connRateLimitInterval() {
    return this.getNumberAttribute('conn_rate_limit_interval');
  }
  public set connRateLimitInterval(value: number) {
    this._connRateLimitInterval = value;
  }
  public resetConnRateLimitInterval() {
    this._connRateLimitInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connRateLimitIntervalInput() {
    return this._connRateLimitInterval;
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

  // frag_pkt_rate_limit - computed: false, optional: true, required: false
  private _fragPktRateLimit?: number; 
  public get fragPktRateLimit() {
    return this.getNumberAttribute('frag_pkt_rate_limit');
  }
  public set fragPktRateLimit(value: number) {
    this._fragPktRateLimit = value;
  }
  public resetFragPktRateLimit() {
    this._fragPktRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragPktRateLimitInput() {
    return this._fragPktRateLimit;
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

  // pkt_rate_limit - computed: false, optional: true, required: false
  private _pktRateLimit?: number; 
  public get pktRateLimit() {
    return this.getNumberAttribute('pkt_rate_limit');
  }
  public set pktRateLimit(value: number) {
    this._pktRateLimit = value;
  }
  public resetPktRateLimit() {
    this._pktRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktRateLimitInput() {
    return this._pktRateLimit;
  }

  // rate_unit - computed: false, optional: true, required: false
  private _rateUnit?: string; 
  public get rateUnit() {
    return this.getStringAttribute('rate_unit');
  }
  public set rateUnit(value: string) {
    this._rateUnit = value;
  }
  public resetRateUnit() {
    this._rateUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateUnitInput() {
    return this._rateUnit;
  }

  // request_limit - computed: false, optional: true, required: false
  private _requestLimit?: number; 
  public get requestLimit() {
    return this.getNumberAttribute('request_limit');
  }
  public set requestLimit(value: number) {
    this._requestLimit = value;
  }
  public resetRequestLimit() {
    this._requestLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestLimitInput() {
    return this._requestLimit;
  }

  // request_rate_limit - computed: false, optional: true, required: false
  private _requestRateLimit?: number; 
  public get requestRateLimit() {
    return this.getNumberAttribute('request_rate_limit');
  }
  public set requestRateLimit(value: number) {
    this._requestRateLimit = value;
  }
  public resetRequestRateLimit() {
    this._requestRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestRateLimitInput() {
    return this._requestRateLimit;
  }

  // request_rate_limit_interval - computed: false, optional: true, required: false
  private _requestRateLimitInterval?: number; 
  public get requestRateLimitInterval() {
    return this.getNumberAttribute('request_rate_limit_interval');
  }
  public set requestRateLimitInterval(value: number) {
    this._requestRateLimitInterval = value;
  }
  public resetRequestRateLimitInterval() {
    this._requestRateLimitInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestRateLimitIntervalInput() {
    return this._requestRateLimitInterval;
  }

  // syn_cookie_thr - computed: false, optional: true, required: false
  private _synCookieThr?: number; 
  public get synCookieThr() {
    return this.getNumberAttribute('syn_cookie_thr');
  }
  public set synCookieThr(value: number) {
    this._synCookieThr = value;
  }
  public resetSynCookieThr() {
    this._synCookieThr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synCookieThrInput() {
    return this._synCookieThr;
  }

  // use_nat_pool - computed: false, optional: true, required: false
  private _useNatPool?: string; 
  public get useNatPool() {
    return this.getStringAttribute('use_nat_pool');
  }
  public set useNatPool(value: string) {
    this._useNatPool = value;
  }
  public resetUseNatPool() {
    this._useNatPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useNatPoolInput() {
    return this._useNatPool;
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

  // dns - computed: false, optional: true, required: false
  private _dns = new GlidDnsOutputReference(this, "dns");
  public get dns() {
    return this._dns;
  }
  public putDns(value: GlidDns) {
    this._dns.internalValue = value;
  }
  public resetDns() {
    this._dns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns.internalValue;
  }

  // dns64 - computed: false, optional: true, required: false
  private _dns64 = new GlidDns64OutputReference(this, "dns64");
  public get dns64() {
    return this._dns64;
  }
  public putDns64(value: GlidDns64) {
    this._dns64.internalValue = value;
  }
  public resetDns64() {
    this._dns64.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dns64Input() {
    return this._dns64.internalValue;
  }

  // over_limit_cfg - computed: false, optional: true, required: false
  private _overLimitCfg = new GlidOverLimitCfgOutputReference(this, "over_limit_cfg");
  public get overLimitCfg() {
    return this._overLimitCfg;
  }
  public putOverLimitCfg(value: GlidOverLimitCfg) {
    this._overLimitCfg.internalValue = value;
  }
  public resetOverLimitCfg() {
    this._overLimitCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overLimitCfgInput() {
    return this._overLimitCfg.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bit_rate_limit: cdktf.numberToTerraform(this._bitRateLimit),
      conn_limit: cdktf.numberToTerraform(this._connLimit),
      conn_rate_limit: cdktf.numberToTerraform(this._connRateLimit),
      conn_rate_limit_interval: cdktf.numberToTerraform(this._connRateLimitInterval),
      description: cdktf.stringToTerraform(this._description),
      frag_pkt_rate_limit: cdktf.numberToTerraform(this._fragPktRateLimit),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      pkt_rate_limit: cdktf.numberToTerraform(this._pktRateLimit),
      rate_unit: cdktf.stringToTerraform(this._rateUnit),
      request_limit: cdktf.numberToTerraform(this._requestLimit),
      request_rate_limit: cdktf.numberToTerraform(this._requestRateLimit),
      request_rate_limit_interval: cdktf.numberToTerraform(this._requestRateLimitInterval),
      syn_cookie_thr: cdktf.numberToTerraform(this._synCookieThr),
      use_nat_pool: cdktf.stringToTerraform(this._useNatPool),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      dns: glidDnsToTerraform(this._dns.internalValue),
      dns64: glidDns64ToTerraform(this._dns64.internalValue),
      over_limit_cfg: glidOverLimitCfgToTerraform(this._overLimitCfg.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bit_rate_limit: {
        value: cdktf.numberToHclTerraform(this._bitRateLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      conn_limit: {
        value: cdktf.numberToHclTerraform(this._connLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      conn_rate_limit: {
        value: cdktf.numberToHclTerraform(this._connRateLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      conn_rate_limit_interval: {
        value: cdktf.numberToHclTerraform(this._connRateLimitInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      frag_pkt_rate_limit: {
        value: cdktf.numberToHclTerraform(this._fragPktRateLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
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
      pkt_rate_limit: {
        value: cdktf.numberToHclTerraform(this._pktRateLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rate_unit: {
        value: cdktf.stringToHclTerraform(this._rateUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_limit: {
        value: cdktf.numberToHclTerraform(this._requestLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      request_rate_limit: {
        value: cdktf.numberToHclTerraform(this._requestRateLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      request_rate_limit_interval: {
        value: cdktf.numberToHclTerraform(this._requestRateLimitInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      syn_cookie_thr: {
        value: cdktf.numberToHclTerraform(this._synCookieThr),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      use_nat_pool: {
        value: cdktf.stringToHclTerraform(this._useNatPool),
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
      dns: {
        value: glidDnsToHclTerraform(this._dns.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GlidDnsList",
      },
      dns64: {
        value: glidDns64ToHclTerraform(this._dns64.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GlidDns64List",
      },
      over_limit_cfg: {
        value: glidOverLimitCfgToHclTerraform(this._overLimitCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GlidOverLimitCfgList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
