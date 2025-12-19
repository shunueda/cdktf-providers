// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_common_global_dns_cache_class_list_lid
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbCommonGlobalDnsCacheClassListLidConfig extends cdktf.TerraformMetaArguments {
  /**
  * Connection rate limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_common_global_dns_cache_class_list_lid#conn_rate_limit SlbCommonGlobalDnsCacheClassListLid#conn_rate_limit}
  */
  readonly connRateLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_common_global_dns_cache_class_list_lid#id SlbCommonGlobalDnsCacheClassListLid#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify a limit ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_common_global_dns_cache_class_list_lid#lidnum SlbCommonGlobalDnsCacheClassListLid#lidnum}
  */
  readonly lidnum: number;
  /**
  * Don't accept any new connection for certain time (Lockout duration in minutes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_common_global_dns_cache_class_list_lid#lockout SlbCommonGlobalDnsCacheClassListLid#lockout}
  */
  readonly lockout?: number;
  /**
  * Log a message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_common_global_dns_cache_class_list_lid#log SlbCommonGlobalDnsCacheClassListLid#log}
  */
  readonly log?: number;
  /**
  * Log interval (minute, by default system will log every over limit instance)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_common_global_dns_cache_class_list_lid#log_interval SlbCommonGlobalDnsCacheClassListLid#log_interval}
  */
  readonly logInterval?: number;
  /**
  * 'ignore': Ignore the limit and proceed; 'drop': Drop the query when it exceeds limit;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_common_global_dns_cache_class_list_lid#over_limit_action SlbCommonGlobalDnsCacheClassListLid#over_limit_action}
  */
  readonly overLimitAction?: string;
  /**
  * Per (Number of 100ms)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_common_global_dns_cache_class_list_lid#per SlbCommonGlobalDnsCacheClassListLid#per}
  */
  readonly per?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_common_global_dns_cache_class_list_lid#user_tag SlbCommonGlobalDnsCacheClassListLid#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_common_global_dns_cache_class_list_lid#uuid SlbCommonGlobalDnsCacheClassListLid#uuid}
  */
  readonly uuid?: string;
  /**
  * dns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_common_global_dns_cache_class_list_lid#dns SlbCommonGlobalDnsCacheClassListLid#dns}
  */
  readonly dns?: SlbCommonGlobalDnsCacheClassListLidDns;
}
export interface SlbCommonGlobalDnsCacheClassListLidDns {
  /**
  * 'cache-disable': Disable dns cache; 'cache-enable': Enable dns cache;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_common_global_dns_cache_class_list_lid#cache_action SlbCommonGlobalDnsCacheClassListLid#cache_action}
  */
  readonly cacheAction?: string;
  /**
  * Honor the server response TTL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_common_global_dns_cache_class_list_lid#honor_server_response_ttl SlbCommonGlobalDnsCacheClassListLid#honor_server_response_ttl}
  */
  readonly honorServerResponseTtl?: number;
  /**
  * TTL for cache entry (TTL in seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_common_global_dns_cache_class_list_lid#ttl SlbCommonGlobalDnsCacheClassListLid#ttl}
  */
  readonly ttl?: number;
  /**
  * Weight for cache entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_common_global_dns_cache_class_list_lid#weight SlbCommonGlobalDnsCacheClassListLid#weight}
  */
  readonly weight?: number;
}

export function slbCommonGlobalDnsCacheClassListLidDnsToTerraform(struct?: SlbCommonGlobalDnsCacheClassListLidDnsOutputReference | SlbCommonGlobalDnsCacheClassListLidDns): any {
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


export function slbCommonGlobalDnsCacheClassListLidDnsToHclTerraform(struct?: SlbCommonGlobalDnsCacheClassListLidDnsOutputReference | SlbCommonGlobalDnsCacheClassListLidDns): any {
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

export class SlbCommonGlobalDnsCacheClassListLidDnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlbCommonGlobalDnsCacheClassListLidDns | undefined {
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

  public set internalValue(value: SlbCommonGlobalDnsCacheClassListLidDns | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_common_global_dns_cache_class_list_lid thunder_slb_common_global_dns_cache_class_list_lid}
*/
export class SlbCommonGlobalDnsCacheClassListLid extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_common_global_dns_cache_class_list_lid";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbCommonGlobalDnsCacheClassListLid resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbCommonGlobalDnsCacheClassListLid to import
  * @param importFromId The id of the existing SlbCommonGlobalDnsCacheClassListLid that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_common_global_dns_cache_class_list_lid#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbCommonGlobalDnsCacheClassListLid to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_common_global_dns_cache_class_list_lid", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_common_global_dns_cache_class_list_lid thunder_slb_common_global_dns_cache_class_list_lid} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbCommonGlobalDnsCacheClassListLidConfig
  */
  public constructor(scope: Construct, id: string, config: SlbCommonGlobalDnsCacheClassListLidConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_common_global_dns_cache_class_list_lid',
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
    this._connRateLimit = config.connRateLimit;
    this._id = config.id;
    this._lidnum = config.lidnum;
    this._lockout = config.lockout;
    this._log = config.log;
    this._logInterval = config.logInterval;
    this._overLimitAction = config.overLimitAction;
    this._per = config.per;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._dns.internalValue = config.dns;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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
  private _dns = new SlbCommonGlobalDnsCacheClassListLidDnsOutputReference(this, "dns");
  public get dns() {
    return this._dns;
  }
  public putDns(value: SlbCommonGlobalDnsCacheClassListLidDns) {
    this._dns.internalValue = value;
  }
  public resetDns() {
    this._dns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      conn_rate_limit: cdktf.numberToTerraform(this._connRateLimit),
      id: cdktf.stringToTerraform(this._id),
      lidnum: cdktf.numberToTerraform(this._lidnum),
      lockout: cdktf.numberToTerraform(this._lockout),
      log: cdktf.numberToTerraform(this._log),
      log_interval: cdktf.numberToTerraform(this._logInterval),
      over_limit_action: cdktf.stringToTerraform(this._overLimitAction),
      per: cdktf.numberToTerraform(this._per),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      dns: slbCommonGlobalDnsCacheClassListLidDnsToTerraform(this._dns.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      conn_rate_limit: {
        value: cdktf.numberToHclTerraform(this._connRateLimit),
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
      lidnum: {
        value: cdktf.numberToHclTerraform(this._lidnum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      lockout: {
        value: cdktf.numberToHclTerraform(this._lockout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      log: {
        value: cdktf.numberToHclTerraform(this._log),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      log_interval: {
        value: cdktf.numberToHclTerraform(this._logInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      over_limit_action: {
        value: cdktf.stringToHclTerraform(this._overLimitAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      per: {
        value: cdktf.numberToHclTerraform(this._per),
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
      dns: {
        value: slbCommonGlobalDnsCacheClassListLidDnsToHclTerraform(this._dns.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbCommonGlobalDnsCacheClassListLidDnsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
