// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_dns
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Cgnv6TemplateDnsConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'nocache': Cache disable; 'cache': Cache enable;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_dns#default_policy Cgnv6TemplateDns#default_policy}
  */
  readonly defaultPolicy?: string;
  /**
  * Disable DNS template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_dns#disable_dns_template Cgnv6TemplateDns#disable_dns_template}
  */
  readonly disableDnsTemplate?: number;
  /**
  * Drop the malformed query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_dns#drop Cgnv6TemplateDns#drop}
  */
  readonly drop?: number;
  /**
  * Forward to service group (Service group name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_dns#forward Cgnv6TemplateDns#forward}
  */
  readonly forward?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_dns#id Cgnv6TemplateDns#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Define maximum cache size (Maximum cache entry per VIP)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_dns#max_cache_size Cgnv6TemplateDns#max_cache_size}
  */
  readonly maxCacheSize?: number;
  /**
  * DNS Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_dns#name Cgnv6TemplateDns#name}
  */
  readonly name: string;
  /**
  * Period in minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_dns#period Cgnv6TemplateDns#period}
  */
  readonly period?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_dns#user_tag Cgnv6TemplateDns#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_dns#uuid Cgnv6TemplateDns#uuid}
  */
  readonly uuid?: string;
  /**
  * class_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_dns#class_list Cgnv6TemplateDns#class_list}
  */
  readonly classList?: Cgnv6TemplateDnsClassListStruct;
  /**
  * dns64 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_dns#dns64 Cgnv6TemplateDns#dns64}
  */
  readonly dns64?: Cgnv6TemplateDnsDns64;
}
export interface Cgnv6TemplateDnsClassListLidListDns {
  /**
  * 'cache-disable': Disable dns cache; 'cache-enable': Enable dns cache;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_dns#cache_action Cgnv6TemplateDns#cache_action}
  */
  readonly cacheAction?: string;
  /**
  * TTL for cache entry (TTL in seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_dns#ttl Cgnv6TemplateDns#ttl}
  */
  readonly ttl?: number;
  /**
  * Weight for cache entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_dns#weight Cgnv6TemplateDns#weight}
  */
  readonly weight?: number;
}

export function cgnv6TemplateDnsClassListLidListDnsToTerraform(struct?: Cgnv6TemplateDnsClassListLidListDnsOutputReference | Cgnv6TemplateDnsClassListLidListDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_action: cdktf.stringToTerraform(struct!.cacheAction),
    ttl: cdktf.numberToTerraform(struct!.ttl),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function cgnv6TemplateDnsClassListLidListDnsToHclTerraform(struct?: Cgnv6TemplateDnsClassListLidListDnsOutputReference | Cgnv6TemplateDnsClassListLidListDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_action: {
      value: cdktf.stringToHclTerraform(struct!.cacheAction),
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

export class Cgnv6TemplateDnsClassListLidListDnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cgnv6TemplateDnsClassListLidListDns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheAction = this._cacheAction;
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

  public set internalValue(value: Cgnv6TemplateDnsClassListLidListDns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cacheAction = undefined;
      this._ttl = undefined;
      this._weight = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cacheAction = value.cacheAction;
      this._ttl = value.ttl;
      this._weight = value.weight;
    }
  }

  // cache_action - computed: false, optional: true, required: false
  private _cacheAction?: string; 
  public get cacheAction() {
    return this.getStringAttribute('cache_action');
  }
  public set cacheAction(value: string) {
    this._cacheAction = value;
  }
  public resetCacheAction() {
    this._cacheAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheActionInput() {
    return this._cacheAction;
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
export interface Cgnv6TemplateDnsClassListLidListStruct {
  /**
  * 'dns-cache-disable': Disable DNS cache when it exceeds limit; 'dns-cache-enable': Enable DNS cache when it exceeds limit; 'forward': Forward the traffic even it exceeds limit;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_dns#action_value Cgnv6TemplateDns#action_value}
  */
  readonly actionValue?: string;
  /**
  * Connection rate limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_dns#conn_rate_limit Cgnv6TemplateDns#conn_rate_limit}
  */
  readonly connRateLimit?: number;
  /**
  * Specify a limit ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_dns#lidnum Cgnv6TemplateDns#lidnum}
  */
  readonly lidnum: number;
  /**
  * Don't accept any new connection for certain time (Lockout duration in minutes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_dns#lockout Cgnv6TemplateDns#lockout}
  */
  readonly lockout?: number;
  /**
  * Log a message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_dns#log Cgnv6TemplateDns#log}
  */
  readonly log?: number;
  /**
  * Log interval (minute, by default system will log every over limit instance)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_dns#log_interval Cgnv6TemplateDns#log_interval}
  */
  readonly logInterval?: number;
  /**
  * Action when exceeds limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_dns#over_limit_action Cgnv6TemplateDns#over_limit_action}
  */
  readonly overLimitAction?: number;
  /**
  * Per (Number of 100ms)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_dns#per Cgnv6TemplateDns#per}
  */
  readonly per?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_dns#user_tag Cgnv6TemplateDns#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_dns#uuid Cgnv6TemplateDns#uuid}
  */
  readonly uuid?: string;
  /**
  * dns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_dns#dns Cgnv6TemplateDns#dns}
  */
  readonly dns?: Cgnv6TemplateDnsClassListLidListDns;
}

export function cgnv6TemplateDnsClassListLidListStructToTerraform(struct?: Cgnv6TemplateDnsClassListLidListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_value: cdktf.stringToTerraform(struct!.actionValue),
    conn_rate_limit: cdktf.numberToTerraform(struct!.connRateLimit),
    lidnum: cdktf.numberToTerraform(struct!.lidnum),
    lockout: cdktf.numberToTerraform(struct!.lockout),
    log: cdktf.numberToTerraform(struct!.log),
    log_interval: cdktf.numberToTerraform(struct!.logInterval),
    over_limit_action: cdktf.numberToTerraform(struct!.overLimitAction),
    per: cdktf.numberToTerraform(struct!.per),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    dns: cgnv6TemplateDnsClassListLidListDnsToTerraform(struct!.dns),
  }
}


export function cgnv6TemplateDnsClassListLidListStructToHclTerraform(struct?: Cgnv6TemplateDnsClassListLidListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_value: {
      value: cdktf.stringToHclTerraform(struct!.actionValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    conn_rate_limit: {
      value: cdktf.numberToHclTerraform(struct!.connRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lidnum: {
      value: cdktf.numberToHclTerraform(struct!.lidnum),
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
    per: {
      value: cdktf.numberToHclTerraform(struct!.per),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_tag: {
      value: cdktf.stringToHclTerraform(struct!.userTag),
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
    dns: {
      value: cgnv6TemplateDnsClassListLidListDnsToHclTerraform(struct!.dns),
      isBlock: true,
      type: "list",
      storageClassType: "Cgnv6TemplateDnsClassListLidListDnsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6TemplateDnsClassListLidListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Cgnv6TemplateDnsClassListLidListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionValue = this._actionValue;
    }
    if (this._connRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.connRateLimit = this._connRateLimit;
    }
    if (this._lidnum !== undefined) {
      hasAnyValues = true;
      internalValueResult.lidnum = this._lidnum;
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
    if (this._per !== undefined) {
      hasAnyValues = true;
      internalValueResult.per = this._per;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._dns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dns = this._dns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6TemplateDnsClassListLidListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionValue = undefined;
      this._connRateLimit = undefined;
      this._lidnum = undefined;
      this._lockout = undefined;
      this._log = undefined;
      this._logInterval = undefined;
      this._overLimitAction = undefined;
      this._per = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._dns.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionValue = value.actionValue;
      this._connRateLimit = value.connRateLimit;
      this._lidnum = value.lidnum;
      this._lockout = value.lockout;
      this._log = value.log;
      this._logInterval = value.logInterval;
      this._overLimitAction = value.overLimitAction;
      this._per = value.per;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._dns.internalValue = value.dns;
    }
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

  // lidnum - computed: false, optional: false, required: true
  private _lidnum?: number; 
  public get lidnum() {
    return this.getNumberAttribute('lidnum');
  }
  public set lidnum(value: number) {
    this._lidnum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lidnumInput() {
    return this._lidnum;
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

  // per - computed: false, optional: true, required: false
  private _per?: number; 
  public get per() {
    return this.getNumberAttribute('per');
  }
  public set per(value: number) {
    this._per = value;
  }
  public resetPer() {
    this._per = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perInput() {
    return this._per;
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
  private _dns = new Cgnv6TemplateDnsClassListLidListDnsOutputReference(this, "dns");
  public get dns() {
    return this._dns;
  }
  public putDns(value: Cgnv6TemplateDnsClassListLidListDns) {
    this._dns.internalValue = value;
  }
  public resetDns() {
    this._dns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns.internalValue;
  }
}

export class Cgnv6TemplateDnsClassListLidListStructList extends cdktf.ComplexList {
  public internalValue? : Cgnv6TemplateDnsClassListLidListStruct[] | cdktf.IResolvable

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
  public get(index: number): Cgnv6TemplateDnsClassListLidListStructOutputReference {
    return new Cgnv6TemplateDnsClassListLidListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Cgnv6TemplateDnsClassListStruct {
  /**
  * Specify a class list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_dns#name Cgnv6TemplateDns#name}
  */
  readonly name?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_dns#uuid Cgnv6TemplateDns#uuid}
  */
  readonly uuid?: string;
  /**
  * lid_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_dns#lid_list Cgnv6TemplateDns#lid_list}
  */
  readonly lidList?: Cgnv6TemplateDnsClassListLidListStruct[] | cdktf.IResolvable;
}

export function cgnv6TemplateDnsClassListStructToTerraform(struct?: Cgnv6TemplateDnsClassListStructOutputReference | Cgnv6TemplateDnsClassListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    lid_list: cdktf.listMapper(cgnv6TemplateDnsClassListLidListStructToTerraform, true)(struct!.lidList),
  }
}


export function cgnv6TemplateDnsClassListStructToHclTerraform(struct?: Cgnv6TemplateDnsClassListStructOutputReference | Cgnv6TemplateDnsClassListStruct): any {
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
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lid_list: {
      value: cdktf.listMapperHcl(cgnv6TemplateDnsClassListLidListStructToHclTerraform, true)(struct!.lidList),
      isBlock: true,
      type: "list",
      storageClassType: "Cgnv6TemplateDnsClassListLidListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6TemplateDnsClassListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cgnv6TemplateDnsClassListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._lidList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lidList = this._lidList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6TemplateDnsClassListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._uuid = undefined;
      this._lidList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._uuid = value.uuid;
      this._lidList.internalValue = value.lidList;
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

  // lid_list - computed: false, optional: true, required: false
  private _lidList = new Cgnv6TemplateDnsClassListLidListStructList(this, "lid_list", false);
  public get lidList() {
    return this._lidList;
  }
  public putLidList(value: Cgnv6TemplateDnsClassListLidListStruct[] | cdktf.IResolvable) {
    this._lidList.internalValue = value;
  }
  public resetLidList() {
    this._lidList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lidListInput() {
    return this._lidList.internalValue;
  }
}
export interface Cgnv6TemplateDnsDns64 {
  /**
  * Disable Only translate the Answer Section
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_dns#answer_only_disable Cgnv6TemplateDns#answer_only_disable}
  */
  readonly answerOnlyDisable?: number;
  /**
  * Set AA flag in DNS Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_dns#auth_data Cgnv6TemplateDns#auth_data}
  */
  readonly authData?: number;
  /**
  * Use a cached A-query response to provide AAAA query responses for the same hostname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_dns#cache Cgnv6TemplateDns#cache}
  */
  readonly cache?: number;
  /**
  * Always change incoming AAAA DNS Query to A
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_dns#change_query Cgnv6TemplateDns#change_query}
  */
  readonly changeQuery?: number;
  /**
  * Disable Always try DNS Compression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_dns#compress_disable Cgnv6TemplateDns#compress_disable}
  */
  readonly compressDisable?: number;
  /**
  * Check DNS Question Record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_dns#deep_check_qr Cgnv6TemplateDns#deep_check_qr}
  */
  readonly deepCheckQr?: number;
  /**
  * Disable Check DNS Response Records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_dns#deep_check_rr_disable Cgnv6TemplateDns#deep_check_rr_disable}
  */
  readonly deepCheckRrDisable?: number;
  /**
  * Disable Drop DNS CNAME Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_dns#drop_cname_disable Cgnv6TemplateDns#drop_cname_disable}
  */
  readonly dropCnameDisable?: number;
  /**
  * Append EDNS Record when send A Query to server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_dns#edns_append Cgnv6TemplateDns#edns_append}
  */
  readonly ednsAppend?: number;
  /**
  * Enable DNS64 (Need to config this option before config any other dns64 options)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_dns#enable Cgnv6TemplateDns#enable}
  */
  readonly enable?: number;
  /**
  * Append translated Records when original Response only has Answer Section
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_dns#fast_append Cgnv6TemplateDns#fast_append}
  */
  readonly fastAppend?: number;
  /**
  * Disable Ignore DNS error Response with rcode 3
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_dns#ignore_rcode3_disable Cgnv6TemplateDns#ignore_rcode3_disable}
  */
  readonly ignoreRcode3Disable?: number;
  /**
  * Max Question Record Length, default is 128
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_dns#max_qr_length Cgnv6TemplateDns#max_qr_length}
  */
  readonly maxQrLength?: number;
  /**
  * Forward AAAA Query & generate A Query in parallel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_dns#parallel_query Cgnv6TemplateDns#parallel_query}
  */
  readonly parallelQuery?: number;
  /**
  * Disable Generate A query upon empty or error Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_dns#passive_query_disable Cgnv6TemplateDns#passive_query_disable}
  */
  readonly passiveQueryDisable?: number;
  /**
  * Retry count, default is 3 (Retry Number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_dns#retry Cgnv6TemplateDns#retry}
  */
  readonly retry?: number;
  /**
  * Disable Single Response which is used to avoid ambiguity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_dns#single_response_disable Cgnv6TemplateDns#single_response_disable}
  */
  readonly singleResponseDisable?: number;
  /**
  * Timeout to send additional Queries, unit: second, default is 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_dns#timeout Cgnv6TemplateDns#timeout}
  */
  readonly timeout?: number;
  /**
  * Translate DNS PTR Records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_dns#trans_ptr Cgnv6TemplateDns#trans_ptr}
  */
  readonly transPtr?: number;
  /**
  * Translate DNS PTR Query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_dns#trans_ptr_query Cgnv6TemplateDns#trans_ptr_query}
  */
  readonly transPtrQuery?: number;
  /**
  * Specify Max TTL in DNS Response, unit: second
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_dns#ttl Cgnv6TemplateDns#ttl}
  */
  readonly ttl?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_dns#uuid Cgnv6TemplateDns#uuid}
  */
  readonly uuid?: string;
}

export function cgnv6TemplateDnsDns64ToTerraform(struct?: Cgnv6TemplateDnsDns64OutputReference | Cgnv6TemplateDnsDns64): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    answer_only_disable: cdktf.numberToTerraform(struct!.answerOnlyDisable),
    auth_data: cdktf.numberToTerraform(struct!.authData),
    cache: cdktf.numberToTerraform(struct!.cache),
    change_query: cdktf.numberToTerraform(struct!.changeQuery),
    compress_disable: cdktf.numberToTerraform(struct!.compressDisable),
    deep_check_qr: cdktf.numberToTerraform(struct!.deepCheckQr),
    deep_check_rr_disable: cdktf.numberToTerraform(struct!.deepCheckRrDisable),
    drop_cname_disable: cdktf.numberToTerraform(struct!.dropCnameDisable),
    edns_append: cdktf.numberToTerraform(struct!.ednsAppend),
    enable: cdktf.numberToTerraform(struct!.enable),
    fast_append: cdktf.numberToTerraform(struct!.fastAppend),
    ignore_rcode3_disable: cdktf.numberToTerraform(struct!.ignoreRcode3Disable),
    max_qr_length: cdktf.numberToTerraform(struct!.maxQrLength),
    parallel_query: cdktf.numberToTerraform(struct!.parallelQuery),
    passive_query_disable: cdktf.numberToTerraform(struct!.passiveQueryDisable),
    retry: cdktf.numberToTerraform(struct!.retry),
    single_response_disable: cdktf.numberToTerraform(struct!.singleResponseDisable),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    trans_ptr: cdktf.numberToTerraform(struct!.transPtr),
    trans_ptr_query: cdktf.numberToTerraform(struct!.transPtrQuery),
    ttl: cdktf.numberToTerraform(struct!.ttl),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function cgnv6TemplateDnsDns64ToHclTerraform(struct?: Cgnv6TemplateDnsDns64OutputReference | Cgnv6TemplateDnsDns64): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    answer_only_disable: {
      value: cdktf.numberToHclTerraform(struct!.answerOnlyDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auth_data: {
      value: cdktf.numberToHclTerraform(struct!.authData),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cache: {
      value: cdktf.numberToHclTerraform(struct!.cache),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    change_query: {
      value: cdktf.numberToHclTerraform(struct!.changeQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    compress_disable: {
      value: cdktf.numberToHclTerraform(struct!.compressDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    deep_check_qr: {
      value: cdktf.numberToHclTerraform(struct!.deepCheckQr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    deep_check_rr_disable: {
      value: cdktf.numberToHclTerraform(struct!.deepCheckRrDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_cname_disable: {
      value: cdktf.numberToHclTerraform(struct!.dropCnameDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    edns_append: {
      value: cdktf.numberToHclTerraform(struct!.ednsAppend),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable: {
      value: cdktf.numberToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fast_append: {
      value: cdktf.numberToHclTerraform(struct!.fastAppend),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ignore_rcode3_disable: {
      value: cdktf.numberToHclTerraform(struct!.ignoreRcode3Disable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_qr_length: {
      value: cdktf.numberToHclTerraform(struct!.maxQrLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    parallel_query: {
      value: cdktf.numberToHclTerraform(struct!.parallelQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    passive_query_disable: {
      value: cdktf.numberToHclTerraform(struct!.passiveQueryDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retry: {
      value: cdktf.numberToHclTerraform(struct!.retry),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    single_response_disable: {
      value: cdktf.numberToHclTerraform(struct!.singleResponseDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    trans_ptr: {
      value: cdktf.numberToHclTerraform(struct!.transPtr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    trans_ptr_query: {
      value: cdktf.numberToHclTerraform(struct!.transPtrQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
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

export class Cgnv6TemplateDnsDns64OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cgnv6TemplateDnsDns64 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._answerOnlyDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.answerOnlyDisable = this._answerOnlyDisable;
    }
    if (this._authData !== undefined) {
      hasAnyValues = true;
      internalValueResult.authData = this._authData;
    }
    if (this._cache !== undefined) {
      hasAnyValues = true;
      internalValueResult.cache = this._cache;
    }
    if (this._changeQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.changeQuery = this._changeQuery;
    }
    if (this._compressDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressDisable = this._compressDisable;
    }
    if (this._deepCheckQr !== undefined) {
      hasAnyValues = true;
      internalValueResult.deepCheckQr = this._deepCheckQr;
    }
    if (this._deepCheckRrDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.deepCheckRrDisable = this._deepCheckRrDisable;
    }
    if (this._dropCnameDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropCnameDisable = this._dropCnameDisable;
    }
    if (this._ednsAppend !== undefined) {
      hasAnyValues = true;
      internalValueResult.ednsAppend = this._ednsAppend;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._fastAppend !== undefined) {
      hasAnyValues = true;
      internalValueResult.fastAppend = this._fastAppend;
    }
    if (this._ignoreRcode3Disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreRcode3Disable = this._ignoreRcode3Disable;
    }
    if (this._maxQrLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxQrLength = this._maxQrLength;
    }
    if (this._parallelQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.parallelQuery = this._parallelQuery;
    }
    if (this._passiveQueryDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.passiveQueryDisable = this._passiveQueryDisable;
    }
    if (this._retry !== undefined) {
      hasAnyValues = true;
      internalValueResult.retry = this._retry;
    }
    if (this._singleResponseDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.singleResponseDisable = this._singleResponseDisable;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._transPtr !== undefined) {
      hasAnyValues = true;
      internalValueResult.transPtr = this._transPtr;
    }
    if (this._transPtrQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.transPtrQuery = this._transPtrQuery;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6TemplateDnsDns64 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._answerOnlyDisable = undefined;
      this._authData = undefined;
      this._cache = undefined;
      this._changeQuery = undefined;
      this._compressDisable = undefined;
      this._deepCheckQr = undefined;
      this._deepCheckRrDisable = undefined;
      this._dropCnameDisable = undefined;
      this._ednsAppend = undefined;
      this._enable = undefined;
      this._fastAppend = undefined;
      this._ignoreRcode3Disable = undefined;
      this._maxQrLength = undefined;
      this._parallelQuery = undefined;
      this._passiveQueryDisable = undefined;
      this._retry = undefined;
      this._singleResponseDisable = undefined;
      this._timeout = undefined;
      this._transPtr = undefined;
      this._transPtrQuery = undefined;
      this._ttl = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._answerOnlyDisable = value.answerOnlyDisable;
      this._authData = value.authData;
      this._cache = value.cache;
      this._changeQuery = value.changeQuery;
      this._compressDisable = value.compressDisable;
      this._deepCheckQr = value.deepCheckQr;
      this._deepCheckRrDisable = value.deepCheckRrDisable;
      this._dropCnameDisable = value.dropCnameDisable;
      this._ednsAppend = value.ednsAppend;
      this._enable = value.enable;
      this._fastAppend = value.fastAppend;
      this._ignoreRcode3Disable = value.ignoreRcode3Disable;
      this._maxQrLength = value.maxQrLength;
      this._parallelQuery = value.parallelQuery;
      this._passiveQueryDisable = value.passiveQueryDisable;
      this._retry = value.retry;
      this._singleResponseDisable = value.singleResponseDisable;
      this._timeout = value.timeout;
      this._transPtr = value.transPtr;
      this._transPtrQuery = value.transPtrQuery;
      this._ttl = value.ttl;
      this._uuid = value.uuid;
    }
  }

  // answer_only_disable - computed: false, optional: true, required: false
  private _answerOnlyDisable?: number; 
  public get answerOnlyDisable() {
    return this.getNumberAttribute('answer_only_disable');
  }
  public set answerOnlyDisable(value: number) {
    this._answerOnlyDisable = value;
  }
  public resetAnswerOnlyDisable() {
    this._answerOnlyDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get answerOnlyDisableInput() {
    return this._answerOnlyDisable;
  }

  // auth_data - computed: false, optional: true, required: false
  private _authData?: number; 
  public get authData() {
    return this.getNumberAttribute('auth_data');
  }
  public set authData(value: number) {
    this._authData = value;
  }
  public resetAuthData() {
    this._authData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authDataInput() {
    return this._authData;
  }

  // cache - computed: false, optional: true, required: false
  private _cache?: number; 
  public get cache() {
    return this.getNumberAttribute('cache');
  }
  public set cache(value: number) {
    this._cache = value;
  }
  public resetCache() {
    this._cache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheInput() {
    return this._cache;
  }

  // change_query - computed: false, optional: true, required: false
  private _changeQuery?: number; 
  public get changeQuery() {
    return this.getNumberAttribute('change_query');
  }
  public set changeQuery(value: number) {
    this._changeQuery = value;
  }
  public resetChangeQuery() {
    this._changeQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changeQueryInput() {
    return this._changeQuery;
  }

  // compress_disable - computed: false, optional: true, required: false
  private _compressDisable?: number; 
  public get compressDisable() {
    return this.getNumberAttribute('compress_disable');
  }
  public set compressDisable(value: number) {
    this._compressDisable = value;
  }
  public resetCompressDisable() {
    this._compressDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressDisableInput() {
    return this._compressDisable;
  }

  // deep_check_qr - computed: false, optional: true, required: false
  private _deepCheckQr?: number; 
  public get deepCheckQr() {
    return this.getNumberAttribute('deep_check_qr');
  }
  public set deepCheckQr(value: number) {
    this._deepCheckQr = value;
  }
  public resetDeepCheckQr() {
    this._deepCheckQr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deepCheckQrInput() {
    return this._deepCheckQr;
  }

  // deep_check_rr_disable - computed: false, optional: true, required: false
  private _deepCheckRrDisable?: number; 
  public get deepCheckRrDisable() {
    return this.getNumberAttribute('deep_check_rr_disable');
  }
  public set deepCheckRrDisable(value: number) {
    this._deepCheckRrDisable = value;
  }
  public resetDeepCheckRrDisable() {
    this._deepCheckRrDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deepCheckRrDisableInput() {
    return this._deepCheckRrDisable;
  }

  // drop_cname_disable - computed: false, optional: true, required: false
  private _dropCnameDisable?: number; 
  public get dropCnameDisable() {
    return this.getNumberAttribute('drop_cname_disable');
  }
  public set dropCnameDisable(value: number) {
    this._dropCnameDisable = value;
  }
  public resetDropCnameDisable() {
    this._dropCnameDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropCnameDisableInput() {
    return this._dropCnameDisable;
  }

  // edns_append - computed: false, optional: true, required: false
  private _ednsAppend?: number; 
  public get ednsAppend() {
    return this.getNumberAttribute('edns_append');
  }
  public set ednsAppend(value: number) {
    this._ednsAppend = value;
  }
  public resetEdnsAppend() {
    this._ednsAppend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ednsAppendInput() {
    return this._ednsAppend;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: number; 
  public get enable() {
    return this.getNumberAttribute('enable');
  }
  public set enable(value: number) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // fast_append - computed: false, optional: true, required: false
  private _fastAppend?: number; 
  public get fastAppend() {
    return this.getNumberAttribute('fast_append');
  }
  public set fastAppend(value: number) {
    this._fastAppend = value;
  }
  public resetFastAppend() {
    this._fastAppend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastAppendInput() {
    return this._fastAppend;
  }

  // ignore_rcode3_disable - computed: false, optional: true, required: false
  private _ignoreRcode3Disable?: number; 
  public get ignoreRcode3Disable() {
    return this.getNumberAttribute('ignore_rcode3_disable');
  }
  public set ignoreRcode3Disable(value: number) {
    this._ignoreRcode3Disable = value;
  }
  public resetIgnoreRcode3Disable() {
    this._ignoreRcode3Disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreRcode3DisableInput() {
    return this._ignoreRcode3Disable;
  }

  // max_qr_length - computed: false, optional: true, required: false
  private _maxQrLength?: number; 
  public get maxQrLength() {
    return this.getNumberAttribute('max_qr_length');
  }
  public set maxQrLength(value: number) {
    this._maxQrLength = value;
  }
  public resetMaxQrLength() {
    this._maxQrLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxQrLengthInput() {
    return this._maxQrLength;
  }

  // parallel_query - computed: false, optional: true, required: false
  private _parallelQuery?: number; 
  public get parallelQuery() {
    return this.getNumberAttribute('parallel_query');
  }
  public set parallelQuery(value: number) {
    this._parallelQuery = value;
  }
  public resetParallelQuery() {
    this._parallelQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parallelQueryInput() {
    return this._parallelQuery;
  }

  // passive_query_disable - computed: false, optional: true, required: false
  private _passiveQueryDisable?: number; 
  public get passiveQueryDisable() {
    return this.getNumberAttribute('passive_query_disable');
  }
  public set passiveQueryDisable(value: number) {
    this._passiveQueryDisable = value;
  }
  public resetPassiveQueryDisable() {
    this._passiveQueryDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passiveQueryDisableInput() {
    return this._passiveQueryDisable;
  }

  // retry - computed: false, optional: true, required: false
  private _retry?: number; 
  public get retry() {
    return this.getNumberAttribute('retry');
  }
  public set retry(value: number) {
    this._retry = value;
  }
  public resetRetry() {
    this._retry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryInput() {
    return this._retry;
  }

  // single_response_disable - computed: false, optional: true, required: false
  private _singleResponseDisable?: number; 
  public get singleResponseDisable() {
    return this.getNumberAttribute('single_response_disable');
  }
  public set singleResponseDisable(value: number) {
    this._singleResponseDisable = value;
  }
  public resetSingleResponseDisable() {
    this._singleResponseDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleResponseDisableInput() {
    return this._singleResponseDisable;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // trans_ptr - computed: false, optional: true, required: false
  private _transPtr?: number; 
  public get transPtr() {
    return this.getNumberAttribute('trans_ptr');
  }
  public set transPtr(value: number) {
    this._transPtr = value;
  }
  public resetTransPtr() {
    this._transPtr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transPtrInput() {
    return this._transPtr;
  }

  // trans_ptr_query - computed: false, optional: true, required: false
  private _transPtrQuery?: number; 
  public get transPtrQuery() {
    return this.getNumberAttribute('trans_ptr_query');
  }
  public set transPtrQuery(value: number) {
    this._transPtrQuery = value;
  }
  public resetTransPtrQuery() {
    this._transPtrQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transPtrQueryInput() {
    return this._transPtrQuery;
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

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_dns thunder_cgnv6_template_dns}
*/
export class Cgnv6TemplateDns extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_template_dns";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cgnv6TemplateDns resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cgnv6TemplateDns to import
  * @param importFromId The id of the existing Cgnv6TemplateDns that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_dns#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cgnv6TemplateDns to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_template_dns", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_dns thunder_cgnv6_template_dns} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Cgnv6TemplateDnsConfig
  */
  public constructor(scope: Construct, id: string, config: Cgnv6TemplateDnsConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_template_dns',
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
    this._defaultPolicy = config.defaultPolicy;
    this._disableDnsTemplate = config.disableDnsTemplate;
    this._drop = config.drop;
    this._forward = config.forward;
    this._id = config.id;
    this._maxCacheSize = config.maxCacheSize;
    this._name = config.name;
    this._period = config.period;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._classList.internalValue = config.classList;
    this._dns64.internalValue = config.dns64;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_policy - computed: false, optional: true, required: false
  private _defaultPolicy?: string; 
  public get defaultPolicy() {
    return this.getStringAttribute('default_policy');
  }
  public set defaultPolicy(value: string) {
    this._defaultPolicy = value;
  }
  public resetDefaultPolicy() {
    this._defaultPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPolicyInput() {
    return this._defaultPolicy;
  }

  // disable_dns_template - computed: false, optional: true, required: false
  private _disableDnsTemplate?: number; 
  public get disableDnsTemplate() {
    return this.getNumberAttribute('disable_dns_template');
  }
  public set disableDnsTemplate(value: number) {
    this._disableDnsTemplate = value;
  }
  public resetDisableDnsTemplate() {
    this._disableDnsTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableDnsTemplateInput() {
    return this._disableDnsTemplate;
  }

  // drop - computed: false, optional: true, required: false
  private _drop?: number; 
  public get drop() {
    return this.getNumberAttribute('drop');
  }
  public set drop(value: number) {
    this._drop = value;
  }
  public resetDrop() {
    this._drop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropInput() {
    return this._drop;
  }

  // forward - computed: false, optional: true, required: false
  private _forward?: string; 
  public get forward() {
    return this.getStringAttribute('forward');
  }
  public set forward(value: string) {
    this._forward = value;
  }
  public resetForward() {
    this._forward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardInput() {
    return this._forward;
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

  // max_cache_size - computed: false, optional: true, required: false
  private _maxCacheSize?: number; 
  public get maxCacheSize() {
    return this.getNumberAttribute('max_cache_size');
  }
  public set maxCacheSize(value: number) {
    this._maxCacheSize = value;
  }
  public resetMaxCacheSize() {
    this._maxCacheSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCacheSizeInput() {
    return this._maxCacheSize;
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

  // period - computed: false, optional: true, required: false
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
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

  // class_list - computed: false, optional: true, required: false
  private _classList = new Cgnv6TemplateDnsClassListStructOutputReference(this, "class_list");
  public get classList() {
    return this._classList;
  }
  public putClassList(value: Cgnv6TemplateDnsClassListStruct) {
    this._classList.internalValue = value;
  }
  public resetClassList() {
    this._classList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classListInput() {
    return this._classList.internalValue;
  }

  // dns64 - computed: false, optional: true, required: false
  private _dns64 = new Cgnv6TemplateDnsDns64OutputReference(this, "dns64");
  public get dns64() {
    return this._dns64;
  }
  public putDns64(value: Cgnv6TemplateDnsDns64) {
    this._dns64.internalValue = value;
  }
  public resetDns64() {
    this._dns64.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dns64Input() {
    return this._dns64.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_policy: cdktf.stringToTerraform(this._defaultPolicy),
      disable_dns_template: cdktf.numberToTerraform(this._disableDnsTemplate),
      drop: cdktf.numberToTerraform(this._drop),
      forward: cdktf.stringToTerraform(this._forward),
      id: cdktf.stringToTerraform(this._id),
      max_cache_size: cdktf.numberToTerraform(this._maxCacheSize),
      name: cdktf.stringToTerraform(this._name),
      period: cdktf.numberToTerraform(this._period),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      class_list: cgnv6TemplateDnsClassListStructToTerraform(this._classList.internalValue),
      dns64: cgnv6TemplateDnsDns64ToTerraform(this._dns64.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_policy: {
        value: cdktf.stringToHclTerraform(this._defaultPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_dns_template: {
        value: cdktf.numberToHclTerraform(this._disableDnsTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drop: {
        value: cdktf.numberToHclTerraform(this._drop),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      forward: {
        value: cdktf.stringToHclTerraform(this._forward),
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
      max_cache_size: {
        value: cdktf.numberToHclTerraform(this._maxCacheSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      period: {
        value: cdktf.numberToHclTerraform(this._period),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      class_list: {
        value: cgnv6TemplateDnsClassListStructToHclTerraform(this._classList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Cgnv6TemplateDnsClassListStructList",
      },
      dns64: {
        value: cgnv6TemplateDnsDns64ToHclTerraform(this._dns64.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Cgnv6TemplateDnsDns64List",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
