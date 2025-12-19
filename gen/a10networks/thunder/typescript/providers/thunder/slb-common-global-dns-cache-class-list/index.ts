// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_common_global_dns_cache_class_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbCommonGlobalDnsCacheClassListConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_common_global_dns_cache_class_list#id SlbCommonGlobalDnsCacheClassList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify a class list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_common_global_dns_cache_class_list#name SlbCommonGlobalDnsCacheClassList#name}
  */
  readonly name: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_common_global_dns_cache_class_list#uuid SlbCommonGlobalDnsCacheClassList#uuid}
  */
  readonly uuid?: string;
  /**
  * lid_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_common_global_dns_cache_class_list#lid_list SlbCommonGlobalDnsCacheClassList#lid_list}
  */
  readonly lidList?: SlbCommonGlobalDnsCacheClassListLidListStructA[] | cdktf.IResolvable;
}
export interface SlbCommonGlobalDnsCacheClassListLidListDnsA {
  /**
  * 'cache-disable': Disable dns cache; 'cache-enable': Enable dns cache;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_common_global_dns_cache_class_list#cache_action SlbCommonGlobalDnsCacheClassList#cache_action}
  */
  readonly cacheAction?: string;
  /**
  * Honor the server response TTL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_common_global_dns_cache_class_list#honor_server_response_ttl SlbCommonGlobalDnsCacheClassList#honor_server_response_ttl}
  */
  readonly honorServerResponseTtl?: number;
  /**
  * TTL for cache entry (TTL in seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_common_global_dns_cache_class_list#ttl SlbCommonGlobalDnsCacheClassList#ttl}
  */
  readonly ttl?: number;
  /**
  * Weight for cache entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_common_global_dns_cache_class_list#weight SlbCommonGlobalDnsCacheClassList#weight}
  */
  readonly weight?: number;
}

export function slbCommonGlobalDnsCacheClassListLidListDnsAToTerraform(struct?: SlbCommonGlobalDnsCacheClassListLidListDnsAOutputReference | SlbCommonGlobalDnsCacheClassListLidListDnsA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_action: cdktf.stringToTerraform(struct!.cacheAction),
    honor_server_response_ttl: cdktf.numberToTerraform(struct!.honorServerResponseTtl),
    ttl: cdktf.numberToTerraform(struct!.ttl),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function slbCommonGlobalDnsCacheClassListLidListDnsAToHclTerraform(struct?: SlbCommonGlobalDnsCacheClassListLidListDnsAOutputReference | SlbCommonGlobalDnsCacheClassListLidListDnsA): any {
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
    honor_server_response_ttl: {
      value: cdktf.numberToHclTerraform(struct!.honorServerResponseTtl),
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

export class SlbCommonGlobalDnsCacheClassListLidListDnsAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlbCommonGlobalDnsCacheClassListLidListDnsA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheAction = this._cacheAction;
    }
    if (this._honorServerResponseTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.honorServerResponseTtl = this._honorServerResponseTtl;
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

  public set internalValue(value: SlbCommonGlobalDnsCacheClassListLidListDnsA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cacheAction = undefined;
      this._honorServerResponseTtl = undefined;
      this._ttl = undefined;
      this._weight = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cacheAction = value.cacheAction;
      this._honorServerResponseTtl = value.honorServerResponseTtl;
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

  // honor_server_response_ttl - computed: false, optional: true, required: false
  private _honorServerResponseTtl?: number; 
  public get honorServerResponseTtl() {
    return this.getNumberAttribute('honor_server_response_ttl');
  }
  public set honorServerResponseTtl(value: number) {
    this._honorServerResponseTtl = value;
  }
  public resetHonorServerResponseTtl() {
    this._honorServerResponseTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get honorServerResponseTtlInput() {
    return this._honorServerResponseTtl;
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
export interface SlbCommonGlobalDnsCacheClassListLidListStructA {
  /**
  * Connection rate limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_common_global_dns_cache_class_list#conn_rate_limit SlbCommonGlobalDnsCacheClassList#conn_rate_limit}
  */
  readonly connRateLimit?: number;
  /**
  * Specify a limit ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_common_global_dns_cache_class_list#lidnum SlbCommonGlobalDnsCacheClassList#lidnum}
  */
  readonly lidnum: number;
  /**
  * Don't accept any new connection for certain time (Lockout duration in minutes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_common_global_dns_cache_class_list#lockout SlbCommonGlobalDnsCacheClassList#lockout}
  */
  readonly lockout?: number;
  /**
  * Log a message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_common_global_dns_cache_class_list#log SlbCommonGlobalDnsCacheClassList#log}
  */
  readonly log?: number;
  /**
  * Log interval (minute, by default system will log every over limit instance)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_common_global_dns_cache_class_list#log_interval SlbCommonGlobalDnsCacheClassList#log_interval}
  */
  readonly logInterval?: number;
  /**
  * 'ignore': Ignore the limit and proceed; 'drop': Drop the query when it exceeds limit;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_common_global_dns_cache_class_list#over_limit_action SlbCommonGlobalDnsCacheClassList#over_limit_action}
  */
  readonly overLimitAction?: string;
  /**
  * Per (Number of 100ms)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_common_global_dns_cache_class_list#per SlbCommonGlobalDnsCacheClassList#per}
  */
  readonly per?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_common_global_dns_cache_class_list#user_tag SlbCommonGlobalDnsCacheClassList#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_common_global_dns_cache_class_list#uuid SlbCommonGlobalDnsCacheClassList#uuid}
  */
  readonly uuid?: string;
  /**
  * dns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_common_global_dns_cache_class_list#dns SlbCommonGlobalDnsCacheClassList#dns}
  */
  readonly dns?: SlbCommonGlobalDnsCacheClassListLidListDnsA;
}

export function slbCommonGlobalDnsCacheClassListLidListStructAToTerraform(struct?: SlbCommonGlobalDnsCacheClassListLidListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conn_rate_limit: cdktf.numberToTerraform(struct!.connRateLimit),
    lidnum: cdktf.numberToTerraform(struct!.lidnum),
    lockout: cdktf.numberToTerraform(struct!.lockout),
    log: cdktf.numberToTerraform(struct!.log),
    log_interval: cdktf.numberToTerraform(struct!.logInterval),
    over_limit_action: cdktf.stringToTerraform(struct!.overLimitAction),
    per: cdktf.numberToTerraform(struct!.per),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    dns: slbCommonGlobalDnsCacheClassListLidListDnsAToTerraform(struct!.dns),
  }
}


export function slbCommonGlobalDnsCacheClassListLidListStructAToHclTerraform(struct?: SlbCommonGlobalDnsCacheClassListLidListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
      value: cdktf.stringToHclTerraform(struct!.overLimitAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
      value: slbCommonGlobalDnsCacheClassListLidListDnsAToHclTerraform(struct!.dns),
      isBlock: true,
      type: "list",
      storageClassType: "SlbCommonGlobalDnsCacheClassListLidListDnsAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbCommonGlobalDnsCacheClassListLidListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbCommonGlobalDnsCacheClassListLidListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: SlbCommonGlobalDnsCacheClassListLidListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
  private _overLimitAction?: string; 
  public get overLimitAction() {
    return this.getStringAttribute('over_limit_action');
  }
  public set overLimitAction(value: string) {
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
  private _dns = new SlbCommonGlobalDnsCacheClassListLidListDnsAOutputReference(this, "dns");
  public get dns() {
    return this._dns;
  }
  public putDns(value: SlbCommonGlobalDnsCacheClassListLidListDnsA) {
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

export class SlbCommonGlobalDnsCacheClassListLidListStructAList extends cdktf.ComplexList {
  public internalValue? : SlbCommonGlobalDnsCacheClassListLidListStructA[] | cdktf.IResolvable

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
  public get(index: number): SlbCommonGlobalDnsCacheClassListLidListStructAOutputReference {
    return new SlbCommonGlobalDnsCacheClassListLidListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_common_global_dns_cache_class_list thunder_slb_common_global_dns_cache_class_list}
*/
export class SlbCommonGlobalDnsCacheClassList extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_common_global_dns_cache_class_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbCommonGlobalDnsCacheClassList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbCommonGlobalDnsCacheClassList to import
  * @param importFromId The id of the existing SlbCommonGlobalDnsCacheClassList that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_common_global_dns_cache_class_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbCommonGlobalDnsCacheClassList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_common_global_dns_cache_class_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_common_global_dns_cache_class_list thunder_slb_common_global_dns_cache_class_list} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbCommonGlobalDnsCacheClassListConfig
  */
  public constructor(scope: Construct, id: string, config: SlbCommonGlobalDnsCacheClassListConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_common_global_dns_cache_class_list',
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
    this._name = config.name;
    this._uuid = config.uuid;
    this._lidList.internalValue = config.lidList;
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
  private _lidList = new SlbCommonGlobalDnsCacheClassListLidListStructAList(this, "lid_list", false);
  public get lidList() {
    return this._lidList;
  }
  public putLidList(value: SlbCommonGlobalDnsCacheClassListLidListStructA[] | cdktf.IResolvable) {
    this._lidList.internalValue = value;
  }
  public resetLidList() {
    this._lidList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lidListInput() {
    return this._lidList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      uuid: cdktf.stringToTerraform(this._uuid),
      lid_list: cdktf.listMapper(slbCommonGlobalDnsCacheClassListLidListStructAToTerraform, true)(this._lidList.internalValue),
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
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lid_list: {
        value: cdktf.listMapperHcl(slbCommonGlobalDnsCacheClassListLidListStructAToHclTerraform, true)(this._lidList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbCommonGlobalDnsCacheClassListLidListStructAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
