// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_cache_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EsaCacheRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_cache_rule#additional_cacheable_ports EsaCacheRule#additional_cacheable_ports}
  */
  readonly additionalCacheablePorts?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_cache_rule#browser_cache_mode EsaCacheRule#browser_cache_mode}
  */
  readonly browserCacheMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_cache_rule#browser_cache_ttl EsaCacheRule#browser_cache_ttl}
  */
  readonly browserCacheTtl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_cache_rule#bypass_cache EsaCacheRule#bypass_cache}
  */
  readonly bypassCache?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_cache_rule#cache_deception_armor EsaCacheRule#cache_deception_armor}
  */
  readonly cacheDeceptionArmor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_cache_rule#cache_reserve_eligibility EsaCacheRule#cache_reserve_eligibility}
  */
  readonly cacheReserveEligibility?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_cache_rule#check_presence_cookie EsaCacheRule#check_presence_cookie}
  */
  readonly checkPresenceCookie?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_cache_rule#check_presence_header EsaCacheRule#check_presence_header}
  */
  readonly checkPresenceHeader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_cache_rule#edge_cache_mode EsaCacheRule#edge_cache_mode}
  */
  readonly edgeCacheMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_cache_rule#edge_cache_ttl EsaCacheRule#edge_cache_ttl}
  */
  readonly edgeCacheTtl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_cache_rule#edge_status_code_cache_ttl EsaCacheRule#edge_status_code_cache_ttl}
  */
  readonly edgeStatusCodeCacheTtl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_cache_rule#id EsaCacheRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_cache_rule#include_cookie EsaCacheRule#include_cookie}
  */
  readonly includeCookie?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_cache_rule#include_header EsaCacheRule#include_header}
  */
  readonly includeHeader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_cache_rule#query_string EsaCacheRule#query_string}
  */
  readonly queryString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_cache_rule#query_string_mode EsaCacheRule#query_string_mode}
  */
  readonly queryStringMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_cache_rule#rule EsaCacheRule#rule}
  */
  readonly rule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_cache_rule#rule_enable EsaCacheRule#rule_enable}
  */
  readonly ruleEnable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_cache_rule#rule_name EsaCacheRule#rule_name}
  */
  readonly ruleName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_cache_rule#sequence EsaCacheRule#sequence}
  */
  readonly sequence?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_cache_rule#serve_stale EsaCacheRule#serve_stale}
  */
  readonly serveStale?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_cache_rule#site_id EsaCacheRule#site_id}
  */
  readonly siteId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_cache_rule#site_version EsaCacheRule#site_version}
  */
  readonly siteVersion?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_cache_rule#sort_query_string_for_cache EsaCacheRule#sort_query_string_for_cache}
  */
  readonly sortQueryStringForCache?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_cache_rule#user_device_type EsaCacheRule#user_device_type}
  */
  readonly userDeviceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_cache_rule#user_geo EsaCacheRule#user_geo}
  */
  readonly userGeo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_cache_rule#user_language EsaCacheRule#user_language}
  */
  readonly userLanguage?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_cache_rule#timeouts EsaCacheRule#timeouts}
  */
  readonly timeouts?: EsaCacheRuleTimeouts;
}
export interface EsaCacheRuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_cache_rule#create EsaCacheRule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_cache_rule#delete EsaCacheRule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_cache_rule#update EsaCacheRule#update}
  */
  readonly update?: string;
}

export function esaCacheRuleTimeoutsToTerraform(struct?: EsaCacheRuleTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function esaCacheRuleTimeoutsToHclTerraform(struct?: EsaCacheRuleTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EsaCacheRuleTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EsaCacheRuleTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EsaCacheRuleTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_cache_rule alicloud_esa_cache_rule}
*/
export class EsaCacheRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_esa_cache_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EsaCacheRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EsaCacheRule to import
  * @param importFromId The id of the existing EsaCacheRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_cache_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EsaCacheRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_esa_cache_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_cache_rule alicloud_esa_cache_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EsaCacheRuleConfig
  */
  public constructor(scope: Construct, id: string, config: EsaCacheRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_esa_cache_rule',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.264.0',
        providerVersionConstraint: '1.264.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._additionalCacheablePorts = config.additionalCacheablePorts;
    this._browserCacheMode = config.browserCacheMode;
    this._browserCacheTtl = config.browserCacheTtl;
    this._bypassCache = config.bypassCache;
    this._cacheDeceptionArmor = config.cacheDeceptionArmor;
    this._cacheReserveEligibility = config.cacheReserveEligibility;
    this._checkPresenceCookie = config.checkPresenceCookie;
    this._checkPresenceHeader = config.checkPresenceHeader;
    this._edgeCacheMode = config.edgeCacheMode;
    this._edgeCacheTtl = config.edgeCacheTtl;
    this._edgeStatusCodeCacheTtl = config.edgeStatusCodeCacheTtl;
    this._id = config.id;
    this._includeCookie = config.includeCookie;
    this._includeHeader = config.includeHeader;
    this._queryString = config.queryString;
    this._queryStringMode = config.queryStringMode;
    this._rule = config.rule;
    this._ruleEnable = config.ruleEnable;
    this._ruleName = config.ruleName;
    this._sequence = config.sequence;
    this._serveStale = config.serveStale;
    this._siteId = config.siteId;
    this._siteVersion = config.siteVersion;
    this._sortQueryStringForCache = config.sortQueryStringForCache;
    this._userDeviceType = config.userDeviceType;
    this._userGeo = config.userGeo;
    this._userLanguage = config.userLanguage;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_cacheable_ports - computed: false, optional: true, required: false
  private _additionalCacheablePorts?: string; 
  public get additionalCacheablePorts() {
    return this.getStringAttribute('additional_cacheable_ports');
  }
  public set additionalCacheablePorts(value: string) {
    this._additionalCacheablePorts = value;
  }
  public resetAdditionalCacheablePorts() {
    this._additionalCacheablePorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalCacheablePortsInput() {
    return this._additionalCacheablePorts;
  }

  // browser_cache_mode - computed: false, optional: true, required: false
  private _browserCacheMode?: string; 
  public get browserCacheMode() {
    return this.getStringAttribute('browser_cache_mode');
  }
  public set browserCacheMode(value: string) {
    this._browserCacheMode = value;
  }
  public resetBrowserCacheMode() {
    this._browserCacheMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get browserCacheModeInput() {
    return this._browserCacheMode;
  }

  // browser_cache_ttl - computed: false, optional: true, required: false
  private _browserCacheTtl?: string; 
  public get browserCacheTtl() {
    return this.getStringAttribute('browser_cache_ttl');
  }
  public set browserCacheTtl(value: string) {
    this._browserCacheTtl = value;
  }
  public resetBrowserCacheTtl() {
    this._browserCacheTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get browserCacheTtlInput() {
    return this._browserCacheTtl;
  }

  // bypass_cache - computed: false, optional: true, required: false
  private _bypassCache?: string; 
  public get bypassCache() {
    return this.getStringAttribute('bypass_cache');
  }
  public set bypassCache(value: string) {
    this._bypassCache = value;
  }
  public resetBypassCache() {
    this._bypassCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassCacheInput() {
    return this._bypassCache;
  }

  // cache_deception_armor - computed: false, optional: true, required: false
  private _cacheDeceptionArmor?: string; 
  public get cacheDeceptionArmor() {
    return this.getStringAttribute('cache_deception_armor');
  }
  public set cacheDeceptionArmor(value: string) {
    this._cacheDeceptionArmor = value;
  }
  public resetCacheDeceptionArmor() {
    this._cacheDeceptionArmor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheDeceptionArmorInput() {
    return this._cacheDeceptionArmor;
  }

  // cache_reserve_eligibility - computed: false, optional: true, required: false
  private _cacheReserveEligibility?: string; 
  public get cacheReserveEligibility() {
    return this.getStringAttribute('cache_reserve_eligibility');
  }
  public set cacheReserveEligibility(value: string) {
    this._cacheReserveEligibility = value;
  }
  public resetCacheReserveEligibility() {
    this._cacheReserveEligibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheReserveEligibilityInput() {
    return this._cacheReserveEligibility;
  }

  // cache_rule_id - computed: true, optional: false, required: false
  public get cacheRuleId() {
    return this.getNumberAttribute('cache_rule_id');
  }

  // check_presence_cookie - computed: false, optional: true, required: false
  private _checkPresenceCookie?: string; 
  public get checkPresenceCookie() {
    return this.getStringAttribute('check_presence_cookie');
  }
  public set checkPresenceCookie(value: string) {
    this._checkPresenceCookie = value;
  }
  public resetCheckPresenceCookie() {
    this._checkPresenceCookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkPresenceCookieInput() {
    return this._checkPresenceCookie;
  }

  // check_presence_header - computed: false, optional: true, required: false
  private _checkPresenceHeader?: string; 
  public get checkPresenceHeader() {
    return this.getStringAttribute('check_presence_header');
  }
  public set checkPresenceHeader(value: string) {
    this._checkPresenceHeader = value;
  }
  public resetCheckPresenceHeader() {
    this._checkPresenceHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkPresenceHeaderInput() {
    return this._checkPresenceHeader;
  }

  // edge_cache_mode - computed: false, optional: true, required: false
  private _edgeCacheMode?: string; 
  public get edgeCacheMode() {
    return this.getStringAttribute('edge_cache_mode');
  }
  public set edgeCacheMode(value: string) {
    this._edgeCacheMode = value;
  }
  public resetEdgeCacheMode() {
    this._edgeCacheMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeCacheModeInput() {
    return this._edgeCacheMode;
  }

  // edge_cache_ttl - computed: false, optional: true, required: false
  private _edgeCacheTtl?: string; 
  public get edgeCacheTtl() {
    return this.getStringAttribute('edge_cache_ttl');
  }
  public set edgeCacheTtl(value: string) {
    this._edgeCacheTtl = value;
  }
  public resetEdgeCacheTtl() {
    this._edgeCacheTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeCacheTtlInput() {
    return this._edgeCacheTtl;
  }

  // edge_status_code_cache_ttl - computed: false, optional: true, required: false
  private _edgeStatusCodeCacheTtl?: string; 
  public get edgeStatusCodeCacheTtl() {
    return this.getStringAttribute('edge_status_code_cache_ttl');
  }
  public set edgeStatusCodeCacheTtl(value: string) {
    this._edgeStatusCodeCacheTtl = value;
  }
  public resetEdgeStatusCodeCacheTtl() {
    this._edgeStatusCodeCacheTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeStatusCodeCacheTtlInput() {
    return this._edgeStatusCodeCacheTtl;
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

  // include_cookie - computed: false, optional: true, required: false
  private _includeCookie?: string; 
  public get includeCookie() {
    return this.getStringAttribute('include_cookie');
  }
  public set includeCookie(value: string) {
    this._includeCookie = value;
  }
  public resetIncludeCookie() {
    this._includeCookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeCookieInput() {
    return this._includeCookie;
  }

  // include_header - computed: false, optional: true, required: false
  private _includeHeader?: string; 
  public get includeHeader() {
    return this.getStringAttribute('include_header');
  }
  public set includeHeader(value: string) {
    this._includeHeader = value;
  }
  public resetIncludeHeader() {
    this._includeHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeHeaderInput() {
    return this._includeHeader;
  }

  // query_string - computed: false, optional: true, required: false
  private _queryString?: string; 
  public get queryString() {
    return this.getStringAttribute('query_string');
  }
  public set queryString(value: string) {
    this._queryString = value;
  }
  public resetQueryString() {
    this._queryString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringInput() {
    return this._queryString;
  }

  // query_string_mode - computed: false, optional: true, required: false
  private _queryStringMode?: string; 
  public get queryStringMode() {
    return this.getStringAttribute('query_string_mode');
  }
  public set queryStringMode(value: string) {
    this._queryStringMode = value;
  }
  public resetQueryStringMode() {
    this._queryStringMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringModeInput() {
    return this._queryStringMode;
  }

  // rule - computed: false, optional: true, required: false
  private _rule?: string; 
  public get rule() {
    return this.getStringAttribute('rule');
  }
  public set rule(value: string) {
    this._rule = value;
  }
  public resetRule() {
    this._rule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule;
  }

  // rule_enable - computed: false, optional: true, required: false
  private _ruleEnable?: string; 
  public get ruleEnable() {
    return this.getStringAttribute('rule_enable');
  }
  public set ruleEnable(value: string) {
    this._ruleEnable = value;
  }
  public resetRuleEnable() {
    this._ruleEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleEnableInput() {
    return this._ruleEnable;
  }

  // rule_name - computed: false, optional: true, required: false
  private _ruleName?: string; 
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }
  public set ruleName(value: string) {
    this._ruleName = value;
  }
  public resetRuleName() {
    this._ruleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNameInput() {
    return this._ruleName;
  }

  // sequence - computed: true, optional: true, required: false
  private _sequence?: number; 
  public get sequence() {
    return this.getNumberAttribute('sequence');
  }
  public set sequence(value: number) {
    this._sequence = value;
  }
  public resetSequence() {
    this._sequence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sequenceInput() {
    return this._sequence;
  }

  // serve_stale - computed: false, optional: true, required: false
  private _serveStale?: string; 
  public get serveStale() {
    return this.getStringAttribute('serve_stale');
  }
  public set serveStale(value: string) {
    this._serveStale = value;
  }
  public resetServeStale() {
    this._serveStale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serveStaleInput() {
    return this._serveStale;
  }

  // site_id - computed: false, optional: false, required: true
  private _siteId?: number; 
  public get siteId() {
    return this.getNumberAttribute('site_id');
  }
  public set siteId(value: number) {
    this._siteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // site_version - computed: false, optional: true, required: false
  private _siteVersion?: number; 
  public get siteVersion() {
    return this.getNumberAttribute('site_version');
  }
  public set siteVersion(value: number) {
    this._siteVersion = value;
  }
  public resetSiteVersion() {
    this._siteVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteVersionInput() {
    return this._siteVersion;
  }

  // sort_query_string_for_cache - computed: false, optional: true, required: false
  private _sortQueryStringForCache?: string; 
  public get sortQueryStringForCache() {
    return this.getStringAttribute('sort_query_string_for_cache');
  }
  public set sortQueryStringForCache(value: string) {
    this._sortQueryStringForCache = value;
  }
  public resetSortQueryStringForCache() {
    this._sortQueryStringForCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortQueryStringForCacheInput() {
    return this._sortQueryStringForCache;
  }

  // user_device_type - computed: false, optional: true, required: false
  private _userDeviceType?: string; 
  public get userDeviceType() {
    return this.getStringAttribute('user_device_type');
  }
  public set userDeviceType(value: string) {
    this._userDeviceType = value;
  }
  public resetUserDeviceType() {
    this._userDeviceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDeviceTypeInput() {
    return this._userDeviceType;
  }

  // user_geo - computed: false, optional: true, required: false
  private _userGeo?: string; 
  public get userGeo() {
    return this.getStringAttribute('user_geo');
  }
  public set userGeo(value: string) {
    this._userGeo = value;
  }
  public resetUserGeo() {
    this._userGeo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userGeoInput() {
    return this._userGeo;
  }

  // user_language - computed: false, optional: true, required: false
  private _userLanguage?: string; 
  public get userLanguage() {
    return this.getStringAttribute('user_language');
  }
  public set userLanguage(value: string) {
    this._userLanguage = value;
  }
  public resetUserLanguage() {
    this._userLanguage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userLanguageInput() {
    return this._userLanguage;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EsaCacheRuleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EsaCacheRuleTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      additional_cacheable_ports: cdktf.stringToTerraform(this._additionalCacheablePorts),
      browser_cache_mode: cdktf.stringToTerraform(this._browserCacheMode),
      browser_cache_ttl: cdktf.stringToTerraform(this._browserCacheTtl),
      bypass_cache: cdktf.stringToTerraform(this._bypassCache),
      cache_deception_armor: cdktf.stringToTerraform(this._cacheDeceptionArmor),
      cache_reserve_eligibility: cdktf.stringToTerraform(this._cacheReserveEligibility),
      check_presence_cookie: cdktf.stringToTerraform(this._checkPresenceCookie),
      check_presence_header: cdktf.stringToTerraform(this._checkPresenceHeader),
      edge_cache_mode: cdktf.stringToTerraform(this._edgeCacheMode),
      edge_cache_ttl: cdktf.stringToTerraform(this._edgeCacheTtl),
      edge_status_code_cache_ttl: cdktf.stringToTerraform(this._edgeStatusCodeCacheTtl),
      id: cdktf.stringToTerraform(this._id),
      include_cookie: cdktf.stringToTerraform(this._includeCookie),
      include_header: cdktf.stringToTerraform(this._includeHeader),
      query_string: cdktf.stringToTerraform(this._queryString),
      query_string_mode: cdktf.stringToTerraform(this._queryStringMode),
      rule: cdktf.stringToTerraform(this._rule),
      rule_enable: cdktf.stringToTerraform(this._ruleEnable),
      rule_name: cdktf.stringToTerraform(this._ruleName),
      sequence: cdktf.numberToTerraform(this._sequence),
      serve_stale: cdktf.stringToTerraform(this._serveStale),
      site_id: cdktf.numberToTerraform(this._siteId),
      site_version: cdktf.numberToTerraform(this._siteVersion),
      sort_query_string_for_cache: cdktf.stringToTerraform(this._sortQueryStringForCache),
      user_device_type: cdktf.stringToTerraform(this._userDeviceType),
      user_geo: cdktf.stringToTerraform(this._userGeo),
      user_language: cdktf.stringToTerraform(this._userLanguage),
      timeouts: esaCacheRuleTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      additional_cacheable_ports: {
        value: cdktf.stringToHclTerraform(this._additionalCacheablePorts),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      browser_cache_mode: {
        value: cdktf.stringToHclTerraform(this._browserCacheMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      browser_cache_ttl: {
        value: cdktf.stringToHclTerraform(this._browserCacheTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bypass_cache: {
        value: cdktf.stringToHclTerraform(this._bypassCache),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cache_deception_armor: {
        value: cdktf.stringToHclTerraform(this._cacheDeceptionArmor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cache_reserve_eligibility: {
        value: cdktf.stringToHclTerraform(this._cacheReserveEligibility),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      check_presence_cookie: {
        value: cdktf.stringToHclTerraform(this._checkPresenceCookie),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      check_presence_header: {
        value: cdktf.stringToHclTerraform(this._checkPresenceHeader),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      edge_cache_mode: {
        value: cdktf.stringToHclTerraform(this._edgeCacheMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      edge_cache_ttl: {
        value: cdktf.stringToHclTerraform(this._edgeCacheTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      edge_status_code_cache_ttl: {
        value: cdktf.stringToHclTerraform(this._edgeStatusCodeCacheTtl),
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
      include_cookie: {
        value: cdktf.stringToHclTerraform(this._includeCookie),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      include_header: {
        value: cdktf.stringToHclTerraform(this._includeHeader),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query_string: {
        value: cdktf.stringToHclTerraform(this._queryString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query_string_mode: {
        value: cdktf.stringToHclTerraform(this._queryStringMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule: {
        value: cdktf.stringToHclTerraform(this._rule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_enable: {
        value: cdktf.stringToHclTerraform(this._ruleEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_name: {
        value: cdktf.stringToHclTerraform(this._ruleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sequence: {
        value: cdktf.numberToHclTerraform(this._sequence),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      serve_stale: {
        value: cdktf.stringToHclTerraform(this._serveStale),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site_id: {
        value: cdktf.numberToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      site_version: {
        value: cdktf.numberToHclTerraform(this._siteVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sort_query_string_for_cache: {
        value: cdktf.stringToHclTerraform(this._sortQueryStringForCache),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_device_type: {
        value: cdktf.stringToHclTerraform(this._userDeviceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_geo: {
        value: cdktf.stringToHclTerraform(this._userGeo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_language: {
        value: cdktf.stringToHclTerraform(this._userLanguage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: esaCacheRuleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EsaCacheRuleTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
