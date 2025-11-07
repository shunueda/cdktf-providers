// https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/cache_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CacheRulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Defaults to false, set it to true if you want to bypass cache.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/cache_rules#bypass_cache CacheRules#bypass_cache}
  */
  readonly bypassCache?: boolean | cdktf.IResolvable;
  /**
  * Defaults to false, set it to true if you want to skip cache control.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/cache_rules#cache_control_ignored CacheRules#cache_control_ignored}
  */
  readonly cacheControlIgnored?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/cache_rules#default CacheRules#default}
  */
  readonly default?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/cache_rules#editable CacheRules#editable}
  */
  readonly editable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/cache_rules#is_new CacheRules#is_new}
  */
  readonly isNew?: boolean | cdktf.IResolvable;
  /**
  * Name of cache rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/cache_rules#name CacheRules#name}
  */
  readonly name: string;
  /**
  * Defaults to false, set it to true if you want to share static content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/cache_rules#share_static_content CacheRules#share_static_content}
  */
  readonly shareStaticContent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/cache_rules#teamid CacheRules#teamid}
  */
  readonly teamid?: string;
  /**
  * app_domains block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/cache_rules#app_domains CacheRules#app_domains}
  */
  readonly appDomains?: CacheRulesAppDomains[] | cdktf.IResolvable;
  /**
  * bypass_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/cache_rules#bypass_info CacheRules#bypass_info}
  */
  readonly bypassInfo?: CacheRulesBypassInfo[] | cdktf.IResolvable;
  /**
  * path_patterns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/cache_rules#path_patterns CacheRules#path_patterns}
  */
  readonly pathPatterns: CacheRulesPathPatterns[] | cdktf.IResolvable;
}
export interface CacheRulesAppDomains {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/cache_rules#domain CacheRules#domain}
  */
  readonly domain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/cache_rules#id CacheRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function cacheRulesAppDomainsToTerraform(struct?: CacheRulesAppDomains | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function cacheRulesAppDomainsToHclTerraform(struct?: CacheRulesAppDomains | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CacheRulesAppDomainsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CacheRulesAppDomains | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CacheRulesAppDomains | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domain = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domain = value.domain;
      this._id = value.id;
    }
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // id - computed: false, optional: true, required: false
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
}

export class CacheRulesAppDomainsList extends cdktf.ComplexList {
  public internalValue? : CacheRulesAppDomains[] | cdktf.IResolvable

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
  public get(index: number): CacheRulesAppDomainsOutputReference {
    return new CacheRulesAppDomainsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CacheRulesBypassInfoRespHdrs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/cache_rules#content_type CacheRules#content_type}
  */
  readonly contentType?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/cache_rules#x_jenkins_session CacheRules#x_jenkins_session}
  */
  readonly xJenkinsSession?: string[];
}

export function cacheRulesBypassInfoRespHdrsToTerraform(struct?: CacheRulesBypassInfoRespHdrs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.contentType),
    x_jenkins_session: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.xJenkinsSession),
  }
}


export function cacheRulesBypassInfoRespHdrsToHclTerraform(struct?: CacheRulesBypassInfoRespHdrs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content_type: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.contentType),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    x_jenkins_session: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.xJenkinsSession),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CacheRulesBypassInfoRespHdrsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CacheRulesBypassInfoRespHdrs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._xJenkinsSession !== undefined) {
      hasAnyValues = true;
      internalValueResult.xJenkinsSession = this._xJenkinsSession;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CacheRulesBypassInfoRespHdrs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentType = undefined;
      this._xJenkinsSession = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentType = value.contentType;
      this._xJenkinsSession = value.xJenkinsSession;
    }
  }

  // content_type - computed: false, optional: true, required: false
  private _contentType?: string[]; 
  public get contentType() {
    return this.getListAttribute('content_type');
  }
  public set contentType(value: string[]) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // x_jenkins_session - computed: false, optional: true, required: false
  private _xJenkinsSession?: string[]; 
  public get xJenkinsSession() {
    return this.getListAttribute('x_jenkins_session');
  }
  public set xJenkinsSession(value: string[]) {
    this._xJenkinsSession = value;
  }
  public resetXJenkinsSession() {
    this._xJenkinsSession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xJenkinsSessionInput() {
    return this._xJenkinsSession;
  }
}

export class CacheRulesBypassInfoRespHdrsList extends cdktf.ComplexList {
  public internalValue? : CacheRulesBypassInfoRespHdrs[] | cdktf.IResolvable

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
  public get(index: number): CacheRulesBypassInfoRespHdrsOutputReference {
    return new CacheRulesBypassInfoRespHdrsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CacheRulesBypassInfo {
  /**
  * resp_hdrs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/cache_rules#resp_hdrs CacheRules#resp_hdrs}
  */
  readonly respHdrs?: CacheRulesBypassInfoRespHdrs[] | cdktf.IResolvable;
}

export function cacheRulesBypassInfoToTerraform(struct?: CacheRulesBypassInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resp_hdrs: cdktf.listMapper(cacheRulesBypassInfoRespHdrsToTerraform, true)(struct!.respHdrs),
  }
}


export function cacheRulesBypassInfoToHclTerraform(struct?: CacheRulesBypassInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resp_hdrs: {
      value: cdktf.listMapperHcl(cacheRulesBypassInfoRespHdrsToHclTerraform, true)(struct!.respHdrs),
      isBlock: true,
      type: "set",
      storageClassType: "CacheRulesBypassInfoRespHdrsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CacheRulesBypassInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CacheRulesBypassInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._respHdrs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.respHdrs = this._respHdrs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CacheRulesBypassInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._respHdrs.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._respHdrs.internalValue = value.respHdrs;
    }
  }

  // resp_hdrs - computed: false, optional: true, required: false
  private _respHdrs = new CacheRulesBypassInfoRespHdrsList(this, "resp_hdrs", true);
  public get respHdrs() {
    return this._respHdrs;
  }
  public putRespHdrs(value: CacheRulesBypassInfoRespHdrs[] | cdktf.IResolvable) {
    this._respHdrs.internalValue = value;
  }
  public resetRespHdrs() {
    this._respHdrs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get respHdrsInput() {
    return this._respHdrs.internalValue;
  }
}

export class CacheRulesBypassInfoList extends cdktf.ComplexList {
  public internalValue? : CacheRulesBypassInfo[] | cdktf.IResolvable

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
  public get(index: number): CacheRulesBypassInfoOutputReference {
    return new CacheRulesBypassInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CacheRulesPathPatternsSettingsTtl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/cache_rules#enabled CacheRules#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/cache_rules#time CacheRules#time}
  */
  readonly time: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/cache_rules#time_unit CacheRules#time_unit}
  */
  readonly timeUnit: string;
}

export function cacheRulesPathPatternsSettingsTtlToTerraform(struct?: CacheRulesPathPatternsSettingsTtl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    time: cdktf.numberToTerraform(struct!.time),
    time_unit: cdktf.stringToTerraform(struct!.timeUnit),
  }
}


export function cacheRulesPathPatternsSettingsTtlToHclTerraform(struct?: CacheRulesPathPatternsSettingsTtl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    time: {
      value: cdktf.numberToHclTerraform(struct!.time),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_unit: {
      value: cdktf.stringToHclTerraform(struct!.timeUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CacheRulesPathPatternsSettingsTtlOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CacheRulesPathPatternsSettingsTtl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._time !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time;
    }
    if (this._timeUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeUnit = this._timeUnit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CacheRulesPathPatternsSettingsTtl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._time = undefined;
      this._timeUnit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._time = value.time;
      this._timeUnit = value.timeUnit;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // time - computed: false, optional: false, required: true
  private _time?: number; 
  public get time() {
    return this.getNumberAttribute('time');
  }
  public set time(value: number) {
    this._time = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time;
  }

  // time_unit - computed: false, optional: false, required: true
  private _timeUnit?: string; 
  public get timeUnit() {
    return this.getStringAttribute('time_unit');
  }
  public set timeUnit(value: string) {
    this._timeUnit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeUnitInput() {
    return this._timeUnit;
  }
}

export class CacheRulesPathPatternsSettingsTtlList extends cdktf.ComplexList {
  public internalValue? : CacheRulesPathPatternsSettingsTtl[] | cdktf.IResolvable

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
  public get(index: number): CacheRulesPathPatternsSettingsTtlOutputReference {
    return new CacheRulesPathPatternsSettingsTtlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CacheRulesPathPatternsSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/cache_rules#cache_control_ignored CacheRules#cache_control_ignored}
  */
  readonly cacheControlIgnored: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/cache_rules#cookie_ignored CacheRules#cookie_ignored}
  */
  readonly cookieIgnored: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/cache_rules#query_parameter_ignored CacheRules#query_parameter_ignored}
  */
  readonly queryParameterIgnored: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/cache_rules#type CacheRules#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/cache_rules#user_id_ignored CacheRules#user_id_ignored}
  */
  readonly userIdIgnored: boolean | cdktf.IResolvable;
  /**
  * ttl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/cache_rules#ttl CacheRules#ttl}
  */
  readonly ttl: CacheRulesPathPatternsSettingsTtl[] | cdktf.IResolvable;
}

export function cacheRulesPathPatternsSettingsToTerraform(struct?: CacheRulesPathPatternsSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_control_ignored: cdktf.booleanToTerraform(struct!.cacheControlIgnored),
    cookie_ignored: cdktf.booleanToTerraform(struct!.cookieIgnored),
    query_parameter_ignored: cdktf.booleanToTerraform(struct!.queryParameterIgnored),
    type: cdktf.stringToTerraform(struct!.type),
    user_id_ignored: cdktf.booleanToTerraform(struct!.userIdIgnored),
    ttl: cdktf.listMapper(cacheRulesPathPatternsSettingsTtlToTerraform, true)(struct!.ttl),
  }
}


export function cacheRulesPathPatternsSettingsToHclTerraform(struct?: CacheRulesPathPatternsSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_control_ignored: {
      value: cdktf.booleanToHclTerraform(struct!.cacheControlIgnored),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cookie_ignored: {
      value: cdktf.booleanToHclTerraform(struct!.cookieIgnored),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    query_parameter_ignored: {
      value: cdktf.booleanToHclTerraform(struct!.queryParameterIgnored),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_id_ignored: {
      value: cdktf.booleanToHclTerraform(struct!.userIdIgnored),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ttl: {
      value: cdktf.listMapperHcl(cacheRulesPathPatternsSettingsTtlToHclTerraform, true)(struct!.ttl),
      isBlock: true,
      type: "set",
      storageClassType: "CacheRulesPathPatternsSettingsTtlList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CacheRulesPathPatternsSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CacheRulesPathPatternsSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheControlIgnored !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheControlIgnored = this._cacheControlIgnored;
    }
    if (this._cookieIgnored !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieIgnored = this._cookieIgnored;
    }
    if (this._queryParameterIgnored !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParameterIgnored = this._queryParameterIgnored;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._userIdIgnored !== undefined) {
      hasAnyValues = true;
      internalValueResult.userIdIgnored = this._userIdIgnored;
    }
    if (this._ttl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CacheRulesPathPatternsSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cacheControlIgnored = undefined;
      this._cookieIgnored = undefined;
      this._queryParameterIgnored = undefined;
      this._type = undefined;
      this._userIdIgnored = undefined;
      this._ttl.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cacheControlIgnored = value.cacheControlIgnored;
      this._cookieIgnored = value.cookieIgnored;
      this._queryParameterIgnored = value.queryParameterIgnored;
      this._type = value.type;
      this._userIdIgnored = value.userIdIgnored;
      this._ttl.internalValue = value.ttl;
    }
  }

  // cache_control_ignored - computed: false, optional: false, required: true
  private _cacheControlIgnored?: boolean | cdktf.IResolvable; 
  public get cacheControlIgnored() {
    return this.getBooleanAttribute('cache_control_ignored');
  }
  public set cacheControlIgnored(value: boolean | cdktf.IResolvable) {
    this._cacheControlIgnored = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheControlIgnoredInput() {
    return this._cacheControlIgnored;
  }

  // cookie_ignored - computed: false, optional: false, required: true
  private _cookieIgnored?: boolean | cdktf.IResolvable; 
  public get cookieIgnored() {
    return this.getBooleanAttribute('cookie_ignored');
  }
  public set cookieIgnored(value: boolean | cdktf.IResolvable) {
    this._cookieIgnored = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieIgnoredInput() {
    return this._cookieIgnored;
  }

  // query_parameter_ignored - computed: false, optional: false, required: true
  private _queryParameterIgnored?: boolean | cdktf.IResolvable; 
  public get queryParameterIgnored() {
    return this.getBooleanAttribute('query_parameter_ignored');
  }
  public set queryParameterIgnored(value: boolean | cdktf.IResolvable) {
    this._queryParameterIgnored = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParameterIgnoredInput() {
    return this._queryParameterIgnored;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // user_id_ignored - computed: false, optional: false, required: true
  private _userIdIgnored?: boolean | cdktf.IResolvable; 
  public get userIdIgnored() {
    return this.getBooleanAttribute('user_id_ignored');
  }
  public set userIdIgnored(value: boolean | cdktf.IResolvable) {
    this._userIdIgnored = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdIgnoredInput() {
    return this._userIdIgnored;
  }

  // ttl - computed: false, optional: false, required: true
  private _ttl = new CacheRulesPathPatternsSettingsTtlList(this, "ttl", true);
  public get ttl() {
    return this._ttl;
  }
  public putTtl(value: CacheRulesPathPatternsSettingsTtl[] | cdktf.IResolvable) {
    this._ttl.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl.internalValue;
  }
}

export class CacheRulesPathPatternsSettingsList extends cdktf.ComplexList {
  public internalValue? : CacheRulesPathPatternsSettings[] | cdktf.IResolvable

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
  public get(index: number): CacheRulesPathPatternsSettingsOutputReference {
    return new CacheRulesPathPatternsSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CacheRulesPathPatterns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/cache_rules#bypass_uri CacheRules#bypass_uri}
  */
  readonly bypassUri: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/cache_rules#is_default CacheRules#is_default}
  */
  readonly isDefault: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/cache_rules#is_new_path CacheRules#is_new_path}
  */
  readonly isNewPath: boolean | cdktf.IResolvable;
  /**
  * Path to store cache
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/cache_rules#path CacheRules#path}
  */
  readonly path: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/cache_rules#status CacheRules#status}
  */
  readonly status: string;
  /**
  * settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/cache_rules#settings CacheRules#settings}
  */
  readonly settings: CacheRulesPathPatternsSettings[] | cdktf.IResolvable;
}

export function cacheRulesPathPatternsToTerraform(struct?: CacheRulesPathPatterns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bypass_uri: cdktf.booleanToTerraform(struct!.bypassUri),
    is_default: cdktf.booleanToTerraform(struct!.isDefault),
    is_new_path: cdktf.booleanToTerraform(struct!.isNewPath),
    path: cdktf.stringToTerraform(struct!.path),
    status: cdktf.stringToTerraform(struct!.status),
    settings: cdktf.listMapper(cacheRulesPathPatternsSettingsToTerraform, true)(struct!.settings),
  }
}


export function cacheRulesPathPatternsToHclTerraform(struct?: CacheRulesPathPatterns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bypass_uri: {
      value: cdktf.booleanToHclTerraform(struct!.bypassUri),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_default: {
      value: cdktf.booleanToHclTerraform(struct!.isDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_new_path: {
      value: cdktf.booleanToHclTerraform(struct!.isNewPath),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    settings: {
      value: cdktf.listMapperHcl(cacheRulesPathPatternsSettingsToHclTerraform, true)(struct!.settings),
      isBlock: true,
      type: "set",
      storageClassType: "CacheRulesPathPatternsSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CacheRulesPathPatternsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CacheRulesPathPatterns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bypassUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypassUri = this._bypassUri;
    }
    if (this._isDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.isDefault = this._isDefault;
    }
    if (this._isNewPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.isNewPath = this._isNewPath;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CacheRulesPathPatterns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bypassUri = undefined;
      this._isDefault = undefined;
      this._isNewPath = undefined;
      this._path = undefined;
      this._status = undefined;
      this._settings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bypassUri = value.bypassUri;
      this._isDefault = value.isDefault;
      this._isNewPath = value.isNewPath;
      this._path = value.path;
      this._status = value.status;
      this._settings.internalValue = value.settings;
    }
  }

  // bypass_uri - computed: false, optional: false, required: true
  private _bypassUri?: boolean | cdktf.IResolvable; 
  public get bypassUri() {
    return this.getBooleanAttribute('bypass_uri');
  }
  public set bypassUri(value: boolean | cdktf.IResolvable) {
    this._bypassUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassUriInput() {
    return this._bypassUri;
  }

  // is_default - computed: false, optional: false, required: true
  private _isDefault?: boolean | cdktf.IResolvable; 
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }
  public set isDefault(value: boolean | cdktf.IResolvable) {
    this._isDefault = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isDefaultInput() {
    return this._isDefault;
  }

  // is_new_path - computed: false, optional: false, required: true
  private _isNewPath?: boolean | cdktf.IResolvable; 
  public get isNewPath() {
    return this.getBooleanAttribute('is_new_path');
  }
  public set isNewPath(value: boolean | cdktf.IResolvable) {
    this._isNewPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isNewPathInput() {
    return this._isNewPath;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // settings - computed: false, optional: false, required: true
  private _settings = new CacheRulesPathPatternsSettingsList(this, "settings", true);
  public get settings() {
    return this._settings;
  }
  public putSettings(value: CacheRulesPathPatternsSettings[] | cdktf.IResolvable) {
    this._settings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }
}

export class CacheRulesPathPatternsList extends cdktf.ComplexList {
  public internalValue? : CacheRulesPathPatterns[] | cdktf.IResolvable

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
  public get(index: number): CacheRulesPathPatternsOutputReference {
    return new CacheRulesPathPatternsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/cache_rules prosimo_cache_rules}
*/
export class CacheRules extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prosimo_cache_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CacheRules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CacheRules to import
  * @param importFromId The id of the existing CacheRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/cache_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CacheRules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prosimo_cache_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/cache_rules prosimo_cache_rules} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CacheRulesConfig
  */
  public constructor(scope: Construct, id: string, config: CacheRulesConfig) {
    super(scope, id, {
      terraformResourceType: 'prosimo_cache_rules',
      terraformGeneratorMetadata: {
        providerName: 'prosimo',
        providerVersion: '4.5.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bypassCache = config.bypassCache;
    this._cacheControlIgnored = config.cacheControlIgnored;
    this._default = config.default;
    this._editable = config.editable;
    this._isNew = config.isNew;
    this._name = config.name;
    this._shareStaticContent = config.shareStaticContent;
    this._teamid = config.teamid;
    this._appDomains.internalValue = config.appDomains;
    this._bypassInfo.internalValue = config.bypassInfo;
    this._pathPatterns.internalValue = config.pathPatterns;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bypass_cache - computed: false, optional: true, required: false
  private _bypassCache?: boolean | cdktf.IResolvable; 
  public get bypassCache() {
    return this.getBooleanAttribute('bypass_cache');
  }
  public set bypassCache(value: boolean | cdktf.IResolvable) {
    this._bypassCache = value;
  }
  public resetBypassCache() {
    this._bypassCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassCacheInput() {
    return this._bypassCache;
  }

  // cache_control_ignored - computed: false, optional: true, required: false
  private _cacheControlIgnored?: boolean | cdktf.IResolvable; 
  public get cacheControlIgnored() {
    return this.getBooleanAttribute('cache_control_ignored');
  }
  public set cacheControlIgnored(value: boolean | cdktf.IResolvable) {
    this._cacheControlIgnored = value;
  }
  public resetCacheControlIgnored() {
    this._cacheControlIgnored = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheControlIgnoredInput() {
    return this._cacheControlIgnored;
  }

  // default - computed: false, optional: true, required: false
  private _default?: boolean | cdktf.IResolvable; 
  public get default() {
    return this.getBooleanAttribute('default');
  }
  public set default(value: boolean | cdktf.IResolvable) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // editable - computed: false, optional: true, required: false
  private _editable?: boolean | cdktf.IResolvable; 
  public get editable() {
    return this.getBooleanAttribute('editable');
  }
  public set editable(value: boolean | cdktf.IResolvable) {
    this._editable = value;
  }
  public resetEditable() {
    this._editable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get editableInput() {
    return this._editable;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_new - computed: false, optional: true, required: false
  private _isNew?: boolean | cdktf.IResolvable; 
  public get isNew() {
    return this.getBooleanAttribute('is_new');
  }
  public set isNew(value: boolean | cdktf.IResolvable) {
    this._isNew = value;
  }
  public resetIsNew() {
    this._isNew = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isNewInput() {
    return this._isNew;
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
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

  // share_static_content - computed: false, optional: true, required: false
  private _shareStaticContent?: boolean | cdktf.IResolvable; 
  public get shareStaticContent() {
    return this.getBooleanAttribute('share_static_content');
  }
  public set shareStaticContent(value: boolean | cdktf.IResolvable) {
    this._shareStaticContent = value;
  }
  public resetShareStaticContent() {
    this._shareStaticContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shareStaticContentInput() {
    return this._shareStaticContent;
  }

  // teamid - computed: false, optional: true, required: false
  private _teamid?: string; 
  public get teamid() {
    return this.getStringAttribute('teamid');
  }
  public set teamid(value: string) {
    this._teamid = value;
  }
  public resetTeamid() {
    this._teamid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamidInput() {
    return this._teamid;
  }

  // app_domains - computed: false, optional: true, required: false
  private _appDomains = new CacheRulesAppDomainsList(this, "app_domains", false);
  public get appDomains() {
    return this._appDomains;
  }
  public putAppDomains(value: CacheRulesAppDomains[] | cdktf.IResolvable) {
    this._appDomains.internalValue = value;
  }
  public resetAppDomains() {
    this._appDomains.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appDomainsInput() {
    return this._appDomains.internalValue;
  }

  // bypass_info - computed: false, optional: true, required: false
  private _bypassInfo = new CacheRulesBypassInfoList(this, "bypass_info", true);
  public get bypassInfo() {
    return this._bypassInfo;
  }
  public putBypassInfo(value: CacheRulesBypassInfo[] | cdktf.IResolvable) {
    this._bypassInfo.internalValue = value;
  }
  public resetBypassInfo() {
    this._bypassInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassInfoInput() {
    return this._bypassInfo.internalValue;
  }

  // path_patterns - computed: false, optional: false, required: true
  private _pathPatterns = new CacheRulesPathPatternsList(this, "path_patterns", false);
  public get pathPatterns() {
    return this._pathPatterns;
  }
  public putPathPatterns(value: CacheRulesPathPatterns[] | cdktf.IResolvable) {
    this._pathPatterns.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathPatternsInput() {
    return this._pathPatterns.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bypass_cache: cdktf.booleanToTerraform(this._bypassCache),
      cache_control_ignored: cdktf.booleanToTerraform(this._cacheControlIgnored),
      default: cdktf.booleanToTerraform(this._default),
      editable: cdktf.booleanToTerraform(this._editable),
      is_new: cdktf.booleanToTerraform(this._isNew),
      name: cdktf.stringToTerraform(this._name),
      share_static_content: cdktf.booleanToTerraform(this._shareStaticContent),
      teamid: cdktf.stringToTerraform(this._teamid),
      app_domains: cdktf.listMapper(cacheRulesAppDomainsToTerraform, true)(this._appDomains.internalValue),
      bypass_info: cdktf.listMapper(cacheRulesBypassInfoToTerraform, true)(this._bypassInfo.internalValue),
      path_patterns: cdktf.listMapper(cacheRulesPathPatternsToTerraform, true)(this._pathPatterns.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bypass_cache: {
        value: cdktf.booleanToHclTerraform(this._bypassCache),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cache_control_ignored: {
        value: cdktf.booleanToHclTerraform(this._cacheControlIgnored),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      default: {
        value: cdktf.booleanToHclTerraform(this._default),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      editable: {
        value: cdktf.booleanToHclTerraform(this._editable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_new: {
        value: cdktf.booleanToHclTerraform(this._isNew),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      share_static_content: {
        value: cdktf.booleanToHclTerraform(this._shareStaticContent),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      teamid: {
        value: cdktf.stringToHclTerraform(this._teamid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_domains: {
        value: cdktf.listMapperHcl(cacheRulesAppDomainsToHclTerraform, true)(this._appDomains.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CacheRulesAppDomainsList",
      },
      bypass_info: {
        value: cdktf.listMapperHcl(cacheRulesBypassInfoToHclTerraform, true)(this._bypassInfo.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CacheRulesBypassInfoList",
      },
      path_patterns: {
        value: cdktf.listMapperHcl(cacheRulesPathPatternsToHclTerraform, true)(this._pathPatterns.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CacheRulesPathPatternsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
