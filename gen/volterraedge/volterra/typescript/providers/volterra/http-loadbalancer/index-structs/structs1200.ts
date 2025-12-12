import * as cdktf from 'cdktf';
import { HttpLoadbalancerCachingPolicyCustomCacheRule,
httpLoadbalancerCachingPolicyCustomCacheRuleToTerraform,
httpLoadbalancerCachingPolicyCustomCacheRuleToHclTerraform,
HttpLoadbalancerCachingPolicyCustomCacheRuleOutputReference,
HttpLoadbalancerCachingPolicyDefaultCacheAction,
httpLoadbalancerCachingPolicyDefaultCacheActionToTerraform,
httpLoadbalancerCachingPolicyDefaultCacheActionToHclTerraform,
HttpLoadbalancerCachingPolicyDefaultCacheActionOutputReference } from './structs800'
export interface HttpLoadbalancerCachingPolicy {
  /**
  * custom_cache_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#custom_cache_rule HttpLoadbalancer#custom_cache_rule}
  */
  readonly customCacheRule?: HttpLoadbalancerCachingPolicyCustomCacheRule;
  /**
  * default_cache_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#default_cache_action HttpLoadbalancer#default_cache_action}
  */
  readonly defaultCacheAction?: HttpLoadbalancerCachingPolicyDefaultCacheAction;
}

export function httpLoadbalancerCachingPolicyToTerraform(struct?: HttpLoadbalancerCachingPolicyOutputReference | HttpLoadbalancerCachingPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_cache_rule: httpLoadbalancerCachingPolicyCustomCacheRuleToTerraform(struct!.customCacheRule),
    default_cache_action: httpLoadbalancerCachingPolicyDefaultCacheActionToTerraform(struct!.defaultCacheAction),
  }
}


export function httpLoadbalancerCachingPolicyToHclTerraform(struct?: HttpLoadbalancerCachingPolicyOutputReference | HttpLoadbalancerCachingPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_cache_rule: {
      value: httpLoadbalancerCachingPolicyCustomCacheRuleToHclTerraform(struct!.customCacheRule),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerCachingPolicyCustomCacheRuleList",
    },
    default_cache_action: {
      value: httpLoadbalancerCachingPolicyDefaultCacheActionToHclTerraform(struct!.defaultCacheAction),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerCachingPolicyDefaultCacheActionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerCachingPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerCachingPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customCacheRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customCacheRule = this._customCacheRule?.internalValue;
    }
    if (this._defaultCacheAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultCacheAction = this._defaultCacheAction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerCachingPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customCacheRule.internalValue = undefined;
      this._defaultCacheAction.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customCacheRule.internalValue = value.customCacheRule;
      this._defaultCacheAction.internalValue = value.defaultCacheAction;
    }
  }

  // custom_cache_rule - computed: false, optional: true, required: false
  private _customCacheRule = new HttpLoadbalancerCachingPolicyCustomCacheRuleOutputReference(this, "custom_cache_rule");
  public get customCacheRule() {
    return this._customCacheRule;
  }
  public putCustomCacheRule(value: HttpLoadbalancerCachingPolicyCustomCacheRule) {
    this._customCacheRule.internalValue = value;
  }
  public resetCustomCacheRule() {
    this._customCacheRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customCacheRuleInput() {
    return this._customCacheRule.internalValue;
  }

  // default_cache_action - computed: false, optional: true, required: false
  private _defaultCacheAction = new HttpLoadbalancerCachingPolicyDefaultCacheActionOutputReference(this, "default_cache_action");
  public get defaultCacheAction() {
    return this._defaultCacheAction;
  }
  public putDefaultCacheAction(value: HttpLoadbalancerCachingPolicyDefaultCacheAction) {
    this._defaultCacheAction.internalValue = value;
  }
  public resetDefaultCacheAction() {
    this._defaultCacheAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultCacheActionInput() {
    return this._defaultCacheAction.internalValue;
  }
}
export interface HttpLoadbalancerCaptchaChallenge {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#cookie_expiry HttpLoadbalancer#cookie_expiry}
  */
  readonly cookieExpiry?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#custom_page HttpLoadbalancer#custom_page}
  */
  readonly customPage?: string;
}

export function httpLoadbalancerCaptchaChallengeToTerraform(struct?: HttpLoadbalancerCaptchaChallengeOutputReference | HttpLoadbalancerCaptchaChallenge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie_expiry: cdktf.numberToTerraform(struct!.cookieExpiry),
    custom_page: cdktf.stringToTerraform(struct!.customPage),
  }
}


export function httpLoadbalancerCaptchaChallengeToHclTerraform(struct?: HttpLoadbalancerCaptchaChallengeOutputReference | HttpLoadbalancerCaptchaChallenge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookie_expiry: {
      value: cdktf.numberToHclTerraform(struct!.cookieExpiry),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_page: {
      value: cdktf.stringToHclTerraform(struct!.customPage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerCaptchaChallengeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerCaptchaChallenge | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookieExpiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieExpiry = this._cookieExpiry;
    }
    if (this._customPage !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPage = this._customPage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerCaptchaChallenge | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cookieExpiry = undefined;
      this._customPage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cookieExpiry = value.cookieExpiry;
      this._customPage = value.customPage;
    }
  }

  // cookie_expiry - computed: false, optional: true, required: false
  private _cookieExpiry?: number; 
  public get cookieExpiry() {
    return this.getNumberAttribute('cookie_expiry');
  }
  public set cookieExpiry(value: number) {
    this._cookieExpiry = value;
  }
  public resetCookieExpiry() {
    this._cookieExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieExpiryInput() {
    return this._cookieExpiry;
  }

  // custom_page - computed: false, optional: true, required: false
  private _customPage?: string; 
  public get customPage() {
    return this.getStringAttribute('custom_page');
  }
  public set customPage(value: string) {
    this._customPage = value;
  }
  public resetCustomPage() {
    this._customPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPageInput() {
    return this._customPage;
  }
}
export interface HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListDomain {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#exact_value HttpLoadbalancer#exact_value}
  */
  readonly exactValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#regex_value HttpLoadbalancer#regex_value}
  */
  readonly regexValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#suffix_value HttpLoadbalancer#suffix_value}
  */
  readonly suffixValue?: string;
}

export function httpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListDomainToTerraform(struct?: HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListDomainOutputReference | HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListDomain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_value: cdktf.stringToTerraform(struct!.exactValue),
    regex_value: cdktf.stringToTerraform(struct!.regexValue),
    suffix_value: cdktf.stringToTerraform(struct!.suffixValue),
  }
}


export function httpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListDomainToHclTerraform(struct?: HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListDomainOutputReference | HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListDomain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_value: {
      value: cdktf.stringToHclTerraform(struct!.exactValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex_value: {
      value: cdktf.stringToHclTerraform(struct!.regexValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suffix_value: {
      value: cdktf.stringToHclTerraform(struct!.suffixValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListDomainOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListDomain | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValue = this._exactValue;
    }
    if (this._regexValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValue = this._regexValue;
    }
    if (this._suffixValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffixValue = this._suffixValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListDomain | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValue = undefined;
      this._regexValue = undefined;
      this._suffixValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValue = value.exactValue;
      this._regexValue = value.regexValue;
      this._suffixValue = value.suffixValue;
    }
  }

  // exact_value - computed: false, optional: true, required: false
  private _exactValue?: string; 
  public get exactValue() {
    return this.getStringAttribute('exact_value');
  }
  public set exactValue(value: string) {
    this._exactValue = value;
  }
  public resetExactValue() {
    this._exactValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValueInput() {
    return this._exactValue;
  }

  // regex_value - computed: false, optional: true, required: false
  private _regexValue?: string; 
  public get regexValue() {
    return this.getStringAttribute('regex_value');
  }
  public set regexValue(value: string) {
    this._regexValue = value;
  }
  public resetRegexValue() {
    this._regexValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValueInput() {
    return this._regexValue;
  }

  // suffix_value - computed: false, optional: true, required: false
  private _suffixValue?: string; 
  public get suffixValue() {
    return this.getStringAttribute('suffix_value');
  }
  public set suffixValue(value: string) {
    this._suffixValue = value;
  }
  public resetSuffixValue() {
    this._suffixValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixValueInput() {
    return this._suffixValue;
  }
}
export interface HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#description HttpLoadbalancer#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#disable HttpLoadbalancer#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name: string;
}

export function httpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListMetadataToTerraform(struct?: HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListMetadataOutputReference | HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    disable: cdktf.booleanToTerraform(struct!.disable),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function httpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListMetadataToHclTerraform(struct?: HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListMetadataOutputReference | HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._disable = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._disable = value.disable;
      this._name = value.name;
    }
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

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
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
}
export interface HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListPath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#path HttpLoadbalancer#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#prefix HttpLoadbalancer#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#regex HttpLoadbalancer#regex}
  */
  readonly regex?: string;
}

export function httpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListPathToTerraform(struct?: HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListPathOutputReference | HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}


export function httpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListPathToHclTerraform(struct?: HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListPathOutputReference | HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._path = undefined;
      this._prefix = undefined;
      this._regex = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._path = value.path;
      this._prefix = value.prefix;
      this._regex = value.regex;
    }
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
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

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }
}
export interface HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#any_domain HttpLoadbalancer#any_domain}
  */
  readonly anyDomain?: boolean | cdktf.IResolvable;
  /**
  * domain block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#domain HttpLoadbalancer#domain}
  */
  readonly domain?: HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListDomain;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#metadata HttpLoadbalancer#metadata}
  */
  readonly metadata: HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListMetadata;
  /**
  * path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#path HttpLoadbalancer#path}
  */
  readonly path: HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListPath;
}

export function httpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListStructToTerraform(struct?: HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_domain: cdktf.booleanToTerraform(struct!.anyDomain),
    domain: httpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListDomainToTerraform(struct!.domain),
    metadata: httpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListMetadataToTerraform(struct!.metadata),
    path: httpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListPathToTerraform(struct!.path),
  }
}


export function httpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListStructToHclTerraform(struct?: HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    any_domain: {
      value: cdktf.booleanToHclTerraform(struct!.anyDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    domain: {
      value: httpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListDomainToHclTerraform(struct!.domain),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListDomainList",
    },
    metadata: {
      value: httpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListMetadataList",
    },
    path: {
      value: httpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListPathToHclTerraform(struct!.path),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListPathList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyDomain = this._anyDomain;
    }
    if (this._domain?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._path?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anyDomain = undefined;
      this._domain.internalValue = undefined;
      this._metadata.internalValue = undefined;
      this._path.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._anyDomain = value.anyDomain;
      this._domain.internalValue = value.domain;
      this._metadata.internalValue = value.metadata;
      this._path.internalValue = value.path;
    }
  }

  // any_domain - computed: false, optional: true, required: false
  private _anyDomain?: boolean | cdktf.IResolvable; 
  public get anyDomain() {
    return this.getBooleanAttribute('any_domain');
  }
  public set anyDomain(value: boolean | cdktf.IResolvable) {
    this._anyDomain = value;
  }
  public resetAnyDomain() {
    this._anyDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyDomainInput() {
    return this._anyDomain;
  }

  // domain - computed: false, optional: true, required: false
  private _domain = new HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListDomainOutputReference(this, "domain");
  public get domain() {
    return this._domain;
  }
  public putDomain(value: HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListDomain) {
    this._domain.internalValue = value;
  }
  public resetDomain() {
    this._domain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain.internalValue;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // path - computed: false, optional: false, required: true
  private _path = new HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListPathOutputReference(this, "path");
  public get path() {
    return this._path;
  }
  public putPath(value: HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListPath) {
    this._path.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path.internalValue;
  }
}

export class HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListStructList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListStruct[] | cdktf.IResolvable

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
  public get(index: number): HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListStructOutputReference {
    return new HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExcept {
  /**
  * exclude_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#exclude_list HttpLoadbalancer#exclude_list}
  */
  readonly excludeList?: HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListStruct[] | cdktf.IResolvable;
}

export function httpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptToTerraform(struct?: HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptOutputReference | HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExcept): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_list: cdktf.listMapper(httpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListStructToTerraform, true)(struct!.excludeList),
  }
}


export function httpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptToHclTerraform(struct?: HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptOutputReference | HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExcept): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_list: {
      value: cdktf.listMapperHcl(httpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListStructToHclTerraform, true)(struct!.excludeList),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExcept | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludeList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeList = this._excludeList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExcept | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludeList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludeList.internalValue = value.excludeList;
    }
  }

  // exclude_list - computed: false, optional: true, required: false
  private _excludeList = new HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListStructList(this, "exclude_list", false);
  public get excludeList() {
    return this._excludeList;
  }
  public putExcludeList(value: HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListStruct[] | cdktf.IResolvable) {
    this._excludeList.internalValue = value;
  }
  public resetExcludeList() {
    this._excludeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeListInput() {
    return this._excludeList.internalValue;
  }
}
export interface HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListDomain {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#exact_value HttpLoadbalancer#exact_value}
  */
  readonly exactValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#regex_value HttpLoadbalancer#regex_value}
  */
  readonly regexValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#suffix_value HttpLoadbalancer#suffix_value}
  */
  readonly suffixValue?: string;
}

export function httpLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListDomainToTerraform(struct?: HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListDomainOutputReference | HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListDomain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_value: cdktf.stringToTerraform(struct!.exactValue),
    regex_value: cdktf.stringToTerraform(struct!.regexValue),
    suffix_value: cdktf.stringToTerraform(struct!.suffixValue),
  }
}


export function httpLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListDomainToHclTerraform(struct?: HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListDomainOutputReference | HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListDomain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_value: {
      value: cdktf.stringToHclTerraform(struct!.exactValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex_value: {
      value: cdktf.stringToHclTerraform(struct!.regexValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suffix_value: {
      value: cdktf.stringToHclTerraform(struct!.suffixValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListDomainOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListDomain | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValue = this._exactValue;
    }
    if (this._regexValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValue = this._regexValue;
    }
    if (this._suffixValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffixValue = this._suffixValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListDomain | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValue = undefined;
      this._regexValue = undefined;
      this._suffixValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValue = value.exactValue;
      this._regexValue = value.regexValue;
      this._suffixValue = value.suffixValue;
    }
  }

  // exact_value - computed: false, optional: true, required: false
  private _exactValue?: string; 
  public get exactValue() {
    return this.getStringAttribute('exact_value');
  }
  public set exactValue(value: string) {
    this._exactValue = value;
  }
  public resetExactValue() {
    this._exactValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValueInput() {
    return this._exactValue;
  }

  // regex_value - computed: false, optional: true, required: false
  private _regexValue?: string; 
  public get regexValue() {
    return this.getStringAttribute('regex_value');
  }
  public set regexValue(value: string) {
    this._regexValue = value;
  }
  public resetRegexValue() {
    this._regexValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValueInput() {
    return this._regexValue;
  }

  // suffix_value - computed: false, optional: true, required: false
  private _suffixValue?: string; 
  public get suffixValue() {
    return this.getStringAttribute('suffix_value');
  }
  public set suffixValue(value: string) {
    this._suffixValue = value;
  }
  public resetSuffixValue() {
    this._suffixValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixValueInput() {
    return this._suffixValue;
  }
}
export interface HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#description HttpLoadbalancer#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#disable HttpLoadbalancer#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name: string;
}

export function httpLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListMetadataToTerraform(struct?: HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListMetadataOutputReference | HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    disable: cdktf.booleanToTerraform(struct!.disable),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function httpLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListMetadataToHclTerraform(struct?: HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListMetadataOutputReference | HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._disable = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._disable = value.disable;
      this._name = value.name;
    }
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

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
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
}
export interface HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListPath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#path HttpLoadbalancer#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#prefix HttpLoadbalancer#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#regex HttpLoadbalancer#regex}
  */
  readonly regex?: string;
}

export function httpLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListPathToTerraform(struct?: HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListPathOutputReference | HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}


export function httpLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListPathToHclTerraform(struct?: HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListPathOutputReference | HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._path = undefined;
      this._prefix = undefined;
      this._regex = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._path = value.path;
      this._prefix = value.prefix;
      this._regex = value.regex;
    }
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
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

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }
}
export interface HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#any_domain HttpLoadbalancer#any_domain}
  */
  readonly anyDomain?: boolean | cdktf.IResolvable;
  /**
  * domain block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#domain HttpLoadbalancer#domain}
  */
  readonly domain?: HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListDomain;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#metadata HttpLoadbalancer#metadata}
  */
  readonly metadata: HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListMetadata;
  /**
  * path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#path HttpLoadbalancer#path}
  */
  readonly path: HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListPath;
}

export function httpLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListStructToTerraform(struct?: HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_domain: cdktf.booleanToTerraform(struct!.anyDomain),
    domain: httpLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListDomainToTerraform(struct!.domain),
    metadata: httpLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListMetadataToTerraform(struct!.metadata),
    path: httpLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListPathToTerraform(struct!.path),
  }
}


export function httpLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListStructToHclTerraform(struct?: HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    any_domain: {
      value: cdktf.booleanToHclTerraform(struct!.anyDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    domain: {
      value: httpLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListDomainToHclTerraform(struct!.domain),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListDomainList",
    },
    metadata: {
      value: httpLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListMetadataList",
    },
    path: {
      value: httpLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListPathToHclTerraform(struct!.path),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListPathList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyDomain = this._anyDomain;
    }
    if (this._domain?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._path?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anyDomain = undefined;
      this._domain.internalValue = undefined;
      this._metadata.internalValue = undefined;
      this._path.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._anyDomain = value.anyDomain;
      this._domain.internalValue = value.domain;
      this._metadata.internalValue = value.metadata;
      this._path.internalValue = value.path;
    }
  }

  // any_domain - computed: false, optional: true, required: false
  private _anyDomain?: boolean | cdktf.IResolvable; 
  public get anyDomain() {
    return this.getBooleanAttribute('any_domain');
  }
  public set anyDomain(value: boolean | cdktf.IResolvable) {
    this._anyDomain = value;
  }
  public resetAnyDomain() {
    this._anyDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyDomainInput() {
    return this._anyDomain;
  }

  // domain - computed: false, optional: true, required: false
  private _domain = new HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListDomainOutputReference(this, "domain");
  public get domain() {
    return this._domain;
  }
  public putDomain(value: HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListDomain) {
    this._domain.internalValue = value;
  }
  public resetDomain() {
    this._domain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain.internalValue;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // path - computed: false, optional: false, required: true
  private _path = new HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListPathOutputReference(this, "path");
  public get path() {
    return this._path;
  }
  public putPath(value: HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListPath) {
    this._path.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path.internalValue;
  }
}

export class HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListStructList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListStruct[] | cdktf.IResolvable

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
  public get(index: number): HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListStructOutputReference {
    return new HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesDomain {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#exact_value HttpLoadbalancer#exact_value}
  */
  readonly exactValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#regex_value HttpLoadbalancer#regex_value}
  */
  readonly regexValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#suffix_value HttpLoadbalancer#suffix_value}
  */
  readonly suffixValue?: string;
}

export function httpLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesDomainToTerraform(struct?: HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesDomainOutputReference | HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesDomain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_value: cdktf.stringToTerraform(struct!.exactValue),
    regex_value: cdktf.stringToTerraform(struct!.regexValue),
    suffix_value: cdktf.stringToTerraform(struct!.suffixValue),
  }
}


export function httpLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesDomainToHclTerraform(struct?: HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesDomainOutputReference | HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesDomain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_value: {
      value: cdktf.stringToHclTerraform(struct!.exactValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex_value: {
      value: cdktf.stringToHclTerraform(struct!.regexValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suffix_value: {
      value: cdktf.stringToHclTerraform(struct!.suffixValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesDomainOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesDomain | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValue = this._exactValue;
    }
    if (this._regexValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValue = this._regexValue;
    }
    if (this._suffixValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffixValue = this._suffixValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesDomain | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValue = undefined;
      this._regexValue = undefined;
      this._suffixValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValue = value.exactValue;
      this._regexValue = value.regexValue;
      this._suffixValue = value.suffixValue;
    }
  }

  // exact_value - computed: false, optional: true, required: false
  private _exactValue?: string; 
  public get exactValue() {
    return this.getStringAttribute('exact_value');
  }
  public set exactValue(value: string) {
    this._exactValue = value;
  }
  public resetExactValue() {
    this._exactValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValueInput() {
    return this._exactValue;
  }

  // regex_value - computed: false, optional: true, required: false
  private _regexValue?: string; 
  public get regexValue() {
    return this.getStringAttribute('regex_value');
  }
  public set regexValue(value: string) {
    this._regexValue = value;
  }
  public resetRegexValue() {
    this._regexValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValueInput() {
    return this._regexValue;
  }

  // suffix_value - computed: false, optional: true, required: false
  private _suffixValue?: string; 
  public get suffixValue() {
    return this.getStringAttribute('suffix_value');
  }
  public set suffixValue(value: string) {
    this._suffixValue = value;
  }
  public resetSuffixValue() {
    this._suffixValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixValueInput() {
    return this._suffixValue;
  }
}
export interface HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#description HttpLoadbalancer#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#disable HttpLoadbalancer#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name: string;
}

export function httpLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesMetadataToTerraform(struct?: HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesMetadataOutputReference | HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    disable: cdktf.booleanToTerraform(struct!.disable),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function httpLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesMetadataToHclTerraform(struct?: HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesMetadataOutputReference | HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._disable = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._disable = value.disable;
      this._name = value.name;
    }
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

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
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
}
export interface HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesPath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#path HttpLoadbalancer#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#prefix HttpLoadbalancer#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#regex HttpLoadbalancer#regex}
  */
  readonly regex?: string;
}

export function httpLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesPathToTerraform(struct?: HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesPathOutputReference | HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}


export function httpLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesPathToHclTerraform(struct?: HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesPathOutputReference | HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._path = undefined;
      this._prefix = undefined;
      this._regex = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._path = value.path;
      this._prefix = value.prefix;
      this._regex = value.regex;
    }
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
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

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }
}
export interface HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#any_domain HttpLoadbalancer#any_domain}
  */
  readonly anyDomain?: boolean | cdktf.IResolvable;
  /**
  * domain block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#domain HttpLoadbalancer#domain}
  */
  readonly domain?: HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesDomain;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#metadata HttpLoadbalancer#metadata}
  */
  readonly metadata: HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesMetadata;
  /**
  * path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#path HttpLoadbalancer#path}
  */
  readonly path: HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesPath;
}

export function httpLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesToTerraform(struct?: HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_domain: cdktf.booleanToTerraform(struct!.anyDomain),
    domain: httpLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesDomainToTerraform(struct!.domain),
    metadata: httpLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesMetadataToTerraform(struct!.metadata),
    path: httpLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesPathToTerraform(struct!.path),
  }
}


export function httpLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesToHclTerraform(struct?: HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    any_domain: {
      value: cdktf.booleanToHclTerraform(struct!.anyDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    domain: {
      value: httpLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesDomainToHclTerraform(struct!.domain),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesDomainList",
    },
    metadata: {
      value: httpLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesMetadataList",
    },
    path: {
      value: httpLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesPathToHclTerraform(struct!.path),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesPathList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyDomain = this._anyDomain;
    }
    if (this._domain?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._path?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anyDomain = undefined;
      this._domain.internalValue = undefined;
      this._metadata.internalValue = undefined;
      this._path.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._anyDomain = value.anyDomain;
      this._domain.internalValue = value.domain;
      this._metadata.internalValue = value.metadata;
      this._path.internalValue = value.path;
    }
  }

  // any_domain - computed: false, optional: true, required: false
  private _anyDomain?: boolean | cdktf.IResolvable; 
  public get anyDomain() {
    return this.getBooleanAttribute('any_domain');
  }
  public set anyDomain(value: boolean | cdktf.IResolvable) {
    this._anyDomain = value;
  }
  public resetAnyDomain() {
    this._anyDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyDomainInput() {
    return this._anyDomain;
  }

  // domain - computed: false, optional: true, required: false
  private _domain = new HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesDomainOutputReference(this, "domain");
  public get domain() {
    return this._domain;
  }
  public putDomain(value: HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesDomain) {
    this._domain.internalValue = value;
  }
  public resetDomain() {
    this._domain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain.internalValue;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // path - computed: false, optional: false, required: true
  private _path = new HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesPathOutputReference(this, "path");
  public get path() {
    return this._path;
  }
  public putPath(value: HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesPath) {
    this._path.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path.internalValue;
  }
}

export class HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesRules[] | cdktf.IResolvable

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
  public get(index: number): HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesOutputReference {
    return new HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerClientSideDefensePolicyJsInsertionRules {
  /**
  * exclude_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#exclude_list HttpLoadbalancer#exclude_list}
  */
  readonly excludeList?: HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListStruct[] | cdktf.IResolvable;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#rules HttpLoadbalancer#rules}
  */
  readonly rules: HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesRules[] | cdktf.IResolvable;
}

export function httpLoadbalancerClientSideDefensePolicyJsInsertionRulesToTerraform(struct?: HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesOutputReference | HttpLoadbalancerClientSideDefensePolicyJsInsertionRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_list: cdktf.listMapper(httpLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListStructToTerraform, true)(struct!.excludeList),
    rules: cdktf.listMapper(httpLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesToTerraform, true)(struct!.rules),
  }
}


export function httpLoadbalancerClientSideDefensePolicyJsInsertionRulesToHclTerraform(struct?: HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesOutputReference | HttpLoadbalancerClientSideDefensePolicyJsInsertionRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_list: {
      value: cdktf.listMapperHcl(httpLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListStructToHclTerraform, true)(struct!.excludeList),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListStructList",
    },
    rules: {
      value: cdktf.listMapperHcl(httpLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesToHclTerraform, true)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerClientSideDefensePolicyJsInsertionRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludeList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeList = this._excludeList?.internalValue;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerClientSideDefensePolicyJsInsertionRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludeList.internalValue = undefined;
      this._rules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludeList.internalValue = value.excludeList;
      this._rules.internalValue = value.rules;
    }
  }

  // exclude_list - computed: false, optional: true, required: false
  private _excludeList = new HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListStructList(this, "exclude_list", false);
  public get excludeList() {
    return this._excludeList;
  }
  public putExcludeList(value: HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListStruct[] | cdktf.IResolvable) {
    this._excludeList.internalValue = value;
  }
  public resetExcludeList() {
    this._excludeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeListInput() {
    return this._excludeList.internalValue;
  }

  // rules - computed: false, optional: false, required: true
  private _rules = new HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}
export interface HttpLoadbalancerClientSideDefensePolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#disable_js_insert HttpLoadbalancer#disable_js_insert}
  */
  readonly disableJsInsert?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#js_insert_all_pages HttpLoadbalancer#js_insert_all_pages}
  */
  readonly jsInsertAllPages?: boolean | cdktf.IResolvable;
  /**
  * js_insert_all_pages_except block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#js_insert_all_pages_except HttpLoadbalancer#js_insert_all_pages_except}
  */
  readonly jsInsertAllPagesExcept?: HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExcept;
  /**
  * js_insertion_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#js_insertion_rules HttpLoadbalancer#js_insertion_rules}
  */
  readonly jsInsertionRules?: HttpLoadbalancerClientSideDefensePolicyJsInsertionRules;
}

export function httpLoadbalancerClientSideDefensePolicyToTerraform(struct?: HttpLoadbalancerClientSideDefensePolicyOutputReference | HttpLoadbalancerClientSideDefensePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_js_insert: cdktf.booleanToTerraform(struct!.disableJsInsert),
    js_insert_all_pages: cdktf.booleanToTerraform(struct!.jsInsertAllPages),
    js_insert_all_pages_except: httpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptToTerraform(struct!.jsInsertAllPagesExcept),
    js_insertion_rules: httpLoadbalancerClientSideDefensePolicyJsInsertionRulesToTerraform(struct!.jsInsertionRules),
  }
}


export function httpLoadbalancerClientSideDefensePolicyToHclTerraform(struct?: HttpLoadbalancerClientSideDefensePolicyOutputReference | HttpLoadbalancerClientSideDefensePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_js_insert: {
      value: cdktf.booleanToHclTerraform(struct!.disableJsInsert),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    js_insert_all_pages: {
      value: cdktf.booleanToHclTerraform(struct!.jsInsertAllPages),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    js_insert_all_pages_except: {
      value: httpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptToHclTerraform(struct!.jsInsertAllPagesExcept),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptList",
    },
    js_insertion_rules: {
      value: httpLoadbalancerClientSideDefensePolicyJsInsertionRulesToHclTerraform(struct!.jsInsertionRules),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerClientSideDefensePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerClientSideDefensePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableJsInsert !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableJsInsert = this._disableJsInsert;
    }
    if (this._jsInsertAllPages !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsInsertAllPages = this._jsInsertAllPages;
    }
    if (this._jsInsertAllPagesExcept?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsInsertAllPagesExcept = this._jsInsertAllPagesExcept?.internalValue;
    }
    if (this._jsInsertionRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsInsertionRules = this._jsInsertionRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerClientSideDefensePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableJsInsert = undefined;
      this._jsInsertAllPages = undefined;
      this._jsInsertAllPagesExcept.internalValue = undefined;
      this._jsInsertionRules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableJsInsert = value.disableJsInsert;
      this._jsInsertAllPages = value.jsInsertAllPages;
      this._jsInsertAllPagesExcept.internalValue = value.jsInsertAllPagesExcept;
      this._jsInsertionRules.internalValue = value.jsInsertionRules;
    }
  }

  // disable_js_insert - computed: false, optional: true, required: false
  private _disableJsInsert?: boolean | cdktf.IResolvable; 
  public get disableJsInsert() {
    return this.getBooleanAttribute('disable_js_insert');
  }
  public set disableJsInsert(value: boolean | cdktf.IResolvable) {
    this._disableJsInsert = value;
  }
  public resetDisableJsInsert() {
    this._disableJsInsert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableJsInsertInput() {
    return this._disableJsInsert;
  }

  // js_insert_all_pages - computed: false, optional: true, required: false
  private _jsInsertAllPages?: boolean | cdktf.IResolvable; 
  public get jsInsertAllPages() {
    return this.getBooleanAttribute('js_insert_all_pages');
  }
  public set jsInsertAllPages(value: boolean | cdktf.IResolvable) {
    this._jsInsertAllPages = value;
  }
  public resetJsInsertAllPages() {
    this._jsInsertAllPages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsInsertAllPagesInput() {
    return this._jsInsertAllPages;
  }

  // js_insert_all_pages_except - computed: false, optional: true, required: false
  private _jsInsertAllPagesExcept = new HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptOutputReference(this, "js_insert_all_pages_except");
  public get jsInsertAllPagesExcept() {
    return this._jsInsertAllPagesExcept;
  }
  public putJsInsertAllPagesExcept(value: HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExcept) {
    this._jsInsertAllPagesExcept.internalValue = value;
  }
  public resetJsInsertAllPagesExcept() {
    this._jsInsertAllPagesExcept.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsInsertAllPagesExceptInput() {
    return this._jsInsertAllPagesExcept.internalValue;
  }

  // js_insertion_rules - computed: false, optional: true, required: false
  private _jsInsertionRules = new HttpLoadbalancerClientSideDefensePolicyJsInsertionRulesOutputReference(this, "js_insertion_rules");
  public get jsInsertionRules() {
    return this._jsInsertionRules;
  }
  public putJsInsertionRules(value: HttpLoadbalancerClientSideDefensePolicyJsInsertionRules) {
    this._jsInsertionRules.internalValue = value;
  }
  public resetJsInsertionRules() {
    this._jsInsertionRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsInsertionRulesInput() {
    return this._jsInsertionRules.internalValue;
  }
}
export interface HttpLoadbalancerClientSideDefense {
  /**
  * policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#policy HttpLoadbalancer#policy}
  */
  readonly policy: HttpLoadbalancerClientSideDefensePolicy;
}

export function httpLoadbalancerClientSideDefenseToTerraform(struct?: HttpLoadbalancerClientSideDefenseOutputReference | HttpLoadbalancerClientSideDefense): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policy: httpLoadbalancerClientSideDefensePolicyToTerraform(struct!.policy),
  }
}


export function httpLoadbalancerClientSideDefenseToHclTerraform(struct?: HttpLoadbalancerClientSideDefenseOutputReference | HttpLoadbalancerClientSideDefense): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    policy: {
      value: httpLoadbalancerClientSideDefensePolicyToHclTerraform(struct!.policy),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerClientSideDefensePolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerClientSideDefenseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerClientSideDefense | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerClientSideDefense | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._policy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._policy.internalValue = value.policy;
    }
  }

  // policy - computed: false, optional: false, required: true
  private _policy = new HttpLoadbalancerClientSideDefensePolicyOutputReference(this, "policy");
  public get policy() {
    return this._policy;
  }
  public putPolicy(value: HttpLoadbalancerClientSideDefensePolicy) {
    this._policy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy.internalValue;
  }
}
export interface HttpLoadbalancerCookieStickiness {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#add_httponly HttpLoadbalancer#add_httponly}
  */
  readonly addHttponly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#add_secure HttpLoadbalancer#add_secure}
  */
  readonly addSecure?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#ignore_httponly HttpLoadbalancer#ignore_httponly}
  */
  readonly ignoreHttponly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#ignore_samesite HttpLoadbalancer#ignore_samesite}
  */
  readonly ignoreSamesite?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#ignore_secure HttpLoadbalancer#ignore_secure}
  */
  readonly ignoreSecure?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#path HttpLoadbalancer#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#samesite_lax HttpLoadbalancer#samesite_lax}
  */
  readonly samesiteLax?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#samesite_none HttpLoadbalancer#samesite_none}
  */
  readonly samesiteNone?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#samesite_strict HttpLoadbalancer#samesite_strict}
  */
  readonly samesiteStrict?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#ttl HttpLoadbalancer#ttl}
  */
  readonly ttl?: number;
}

export function httpLoadbalancerCookieStickinessToTerraform(struct?: HttpLoadbalancerCookieStickinessOutputReference | HttpLoadbalancerCookieStickiness): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_httponly: cdktf.booleanToTerraform(struct!.addHttponly),
    add_secure: cdktf.booleanToTerraform(struct!.addSecure),
    ignore_httponly: cdktf.booleanToTerraform(struct!.ignoreHttponly),
    ignore_samesite: cdktf.booleanToTerraform(struct!.ignoreSamesite),
    ignore_secure: cdktf.booleanToTerraform(struct!.ignoreSecure),
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
    samesite_lax: cdktf.booleanToTerraform(struct!.samesiteLax),
    samesite_none: cdktf.booleanToTerraform(struct!.samesiteNone),
    samesite_strict: cdktf.booleanToTerraform(struct!.samesiteStrict),
    ttl: cdktf.numberToTerraform(struct!.ttl),
  }
}


export function httpLoadbalancerCookieStickinessToHclTerraform(struct?: HttpLoadbalancerCookieStickinessOutputReference | HttpLoadbalancerCookieStickiness): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_httponly: {
      value: cdktf.booleanToHclTerraform(struct!.addHttponly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    add_secure: {
      value: cdktf.booleanToHclTerraform(struct!.addSecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_httponly: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreHttponly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_samesite: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreSamesite),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_secure: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreSecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    samesite_lax: {
      value: cdktf.booleanToHclTerraform(struct!.samesiteLax),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    samesite_none: {
      value: cdktf.booleanToHclTerraform(struct!.samesiteNone),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    samesite_strict: {
      value: cdktf.booleanToHclTerraform(struct!.samesiteStrict),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerCookieStickinessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerCookieStickiness | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addHttponly !== undefined) {
      hasAnyValues = true;
      internalValueResult.addHttponly = this._addHttponly;
    }
    if (this._addSecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.addSecure = this._addSecure;
    }
    if (this._ignoreHttponly !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreHttponly = this._ignoreHttponly;
    }
    if (this._ignoreSamesite !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreSamesite = this._ignoreSamesite;
    }
    if (this._ignoreSecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreSecure = this._ignoreSecure;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._samesiteLax !== undefined) {
      hasAnyValues = true;
      internalValueResult.samesiteLax = this._samesiteLax;
    }
    if (this._samesiteNone !== undefined) {
      hasAnyValues = true;
      internalValueResult.samesiteNone = this._samesiteNone;
    }
    if (this._samesiteStrict !== undefined) {
      hasAnyValues = true;
      internalValueResult.samesiteStrict = this._samesiteStrict;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerCookieStickiness | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addHttponly = undefined;
      this._addSecure = undefined;
      this._ignoreHttponly = undefined;
      this._ignoreSamesite = undefined;
      this._ignoreSecure = undefined;
      this._name = undefined;
      this._path = undefined;
      this._samesiteLax = undefined;
      this._samesiteNone = undefined;
      this._samesiteStrict = undefined;
      this._ttl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addHttponly = value.addHttponly;
      this._addSecure = value.addSecure;
      this._ignoreHttponly = value.ignoreHttponly;
      this._ignoreSamesite = value.ignoreSamesite;
      this._ignoreSecure = value.ignoreSecure;
      this._name = value.name;
      this._path = value.path;
      this._samesiteLax = value.samesiteLax;
      this._samesiteNone = value.samesiteNone;
      this._samesiteStrict = value.samesiteStrict;
      this._ttl = value.ttl;
    }
  }

  // add_httponly - computed: false, optional: true, required: false
  private _addHttponly?: boolean | cdktf.IResolvable; 
  public get addHttponly() {
    return this.getBooleanAttribute('add_httponly');
  }
  public set addHttponly(value: boolean | cdktf.IResolvable) {
    this._addHttponly = value;
  }
  public resetAddHttponly() {
    this._addHttponly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addHttponlyInput() {
    return this._addHttponly;
  }

  // add_secure - computed: false, optional: true, required: false
  private _addSecure?: boolean | cdktf.IResolvable; 
  public get addSecure() {
    return this.getBooleanAttribute('add_secure');
  }
  public set addSecure(value: boolean | cdktf.IResolvable) {
    this._addSecure = value;
  }
  public resetAddSecure() {
    this._addSecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addSecureInput() {
    return this._addSecure;
  }

  // ignore_httponly - computed: false, optional: true, required: false
  private _ignoreHttponly?: boolean | cdktf.IResolvable; 
  public get ignoreHttponly() {
    return this.getBooleanAttribute('ignore_httponly');
  }
  public set ignoreHttponly(value: boolean | cdktf.IResolvable) {
    this._ignoreHttponly = value;
  }
  public resetIgnoreHttponly() {
    this._ignoreHttponly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreHttponlyInput() {
    return this._ignoreHttponly;
  }

  // ignore_samesite - computed: false, optional: true, required: false
  private _ignoreSamesite?: boolean | cdktf.IResolvable; 
  public get ignoreSamesite() {
    return this.getBooleanAttribute('ignore_samesite');
  }
  public set ignoreSamesite(value: boolean | cdktf.IResolvable) {
    this._ignoreSamesite = value;
  }
  public resetIgnoreSamesite() {
    this._ignoreSamesite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreSamesiteInput() {
    return this._ignoreSamesite;
  }

  // ignore_secure - computed: false, optional: true, required: false
  private _ignoreSecure?: boolean | cdktf.IResolvable; 
  public get ignoreSecure() {
    return this.getBooleanAttribute('ignore_secure');
  }
  public set ignoreSecure(value: boolean | cdktf.IResolvable) {
    this._ignoreSecure = value;
  }
  public resetIgnoreSecure() {
    this._ignoreSecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreSecureInput() {
    return this._ignoreSecure;
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

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // samesite_lax - computed: false, optional: true, required: false
  private _samesiteLax?: boolean | cdktf.IResolvable; 
  public get samesiteLax() {
    return this.getBooleanAttribute('samesite_lax');
  }
  public set samesiteLax(value: boolean | cdktf.IResolvable) {
    this._samesiteLax = value;
  }
  public resetSamesiteLax() {
    this._samesiteLax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samesiteLaxInput() {
    return this._samesiteLax;
  }

  // samesite_none - computed: false, optional: true, required: false
  private _samesiteNone?: boolean | cdktf.IResolvable; 
  public get samesiteNone() {
    return this.getBooleanAttribute('samesite_none');
  }
  public set samesiteNone(value: boolean | cdktf.IResolvable) {
    this._samesiteNone = value;
  }
  public resetSamesiteNone() {
    this._samesiteNone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samesiteNoneInput() {
    return this._samesiteNone;
  }

  // samesite_strict - computed: false, optional: true, required: false
  private _samesiteStrict?: boolean | cdktf.IResolvable; 
  public get samesiteStrict() {
    return this.getBooleanAttribute('samesite_strict');
  }
  public set samesiteStrict(value: boolean | cdktf.IResolvable) {
    this._samesiteStrict = value;
  }
  public resetSamesiteStrict() {
    this._samesiteStrict = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samesiteStrictInput() {
    return this._samesiteStrict;
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
}
export interface HttpLoadbalancerCorsPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#allow_credentials HttpLoadbalancer#allow_credentials}
  */
  readonly allowCredentials?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#allow_headers HttpLoadbalancer#allow_headers}
  */
  readonly allowHeaders?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#allow_methods HttpLoadbalancer#allow_methods}
  */
  readonly allowMethods?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#allow_origin HttpLoadbalancer#allow_origin}
  */
  readonly allowOrigin?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#allow_origin_regex HttpLoadbalancer#allow_origin_regex}
  */
  readonly allowOriginRegex?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#disabled HttpLoadbalancer#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#expose_headers HttpLoadbalancer#expose_headers}
  */
  readonly exposeHeaders?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#max_age HttpLoadbalancer#max_age}
  */
  readonly maxAge?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#maximum_age HttpLoadbalancer#maximum_age}
  */
  readonly maximumAge?: number;
}

export function httpLoadbalancerCorsPolicyToTerraform(struct?: HttpLoadbalancerCorsPolicyOutputReference | HttpLoadbalancerCorsPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_credentials: cdktf.booleanToTerraform(struct!.allowCredentials),
    allow_headers: cdktf.stringToTerraform(struct!.allowHeaders),
    allow_methods: cdktf.stringToTerraform(struct!.allowMethods),
    allow_origin: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowOrigin),
    allow_origin_regex: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowOriginRegex),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    expose_headers: cdktf.stringToTerraform(struct!.exposeHeaders),
    max_age: cdktf.stringToTerraform(struct!.maxAge),
    maximum_age: cdktf.numberToTerraform(struct!.maximumAge),
  }
}


export function httpLoadbalancerCorsPolicyToHclTerraform(struct?: HttpLoadbalancerCorsPolicyOutputReference | HttpLoadbalancerCorsPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_credentials: {
      value: cdktf.booleanToHclTerraform(struct!.allowCredentials),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_headers: {
      value: cdktf.stringToHclTerraform(struct!.allowHeaders),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allow_methods: {
      value: cdktf.stringToHclTerraform(struct!.allowMethods),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allow_origin: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowOrigin),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allow_origin_regex: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowOriginRegex),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    expose_headers: {
      value: cdktf.stringToHclTerraform(struct!.exposeHeaders),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_age: {
      value: cdktf.stringToHclTerraform(struct!.maxAge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maximum_age: {
      value: cdktf.numberToHclTerraform(struct!.maximumAge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerCorsPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerCorsPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowCredentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowCredentials = this._allowCredentials;
    }
    if (this._allowHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowHeaders = this._allowHeaders;
    }
    if (this._allowMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowMethods = this._allowMethods;
    }
    if (this._allowOrigin !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowOrigin = this._allowOrigin;
    }
    if (this._allowOriginRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowOriginRegex = this._allowOriginRegex;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._exposeHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.exposeHeaders = this._exposeHeaders;
    }
    if (this._maxAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAge = this._maxAge;
    }
    if (this._maximumAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumAge = this._maximumAge;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerCorsPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowCredentials = undefined;
      this._allowHeaders = undefined;
      this._allowMethods = undefined;
      this._allowOrigin = undefined;
      this._allowOriginRegex = undefined;
      this._disabled = undefined;
      this._exposeHeaders = undefined;
      this._maxAge = undefined;
      this._maximumAge = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowCredentials = value.allowCredentials;
      this._allowHeaders = value.allowHeaders;
      this._allowMethods = value.allowMethods;
      this._allowOrigin = value.allowOrigin;
      this._allowOriginRegex = value.allowOriginRegex;
      this._disabled = value.disabled;
      this._exposeHeaders = value.exposeHeaders;
      this._maxAge = value.maxAge;
      this._maximumAge = value.maximumAge;
    }
  }

  // allow_credentials - computed: false, optional: true, required: false
  private _allowCredentials?: boolean | cdktf.IResolvable; 
  public get allowCredentials() {
    return this.getBooleanAttribute('allow_credentials');
  }
  public set allowCredentials(value: boolean | cdktf.IResolvable) {
    this._allowCredentials = value;
  }
  public resetAllowCredentials() {
    this._allowCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowCredentialsInput() {
    return this._allowCredentials;
  }

  // allow_headers - computed: false, optional: true, required: false
  private _allowHeaders?: string; 
  public get allowHeaders() {
    return this.getStringAttribute('allow_headers');
  }
  public set allowHeaders(value: string) {
    this._allowHeaders = value;
  }
  public resetAllowHeaders() {
    this._allowHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowHeadersInput() {
    return this._allowHeaders;
  }

  // allow_methods - computed: false, optional: true, required: false
  private _allowMethods?: string; 
  public get allowMethods() {
    return this.getStringAttribute('allow_methods');
  }
  public set allowMethods(value: string) {
    this._allowMethods = value;
  }
  public resetAllowMethods() {
    this._allowMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowMethodsInput() {
    return this._allowMethods;
  }

  // allow_origin - computed: false, optional: true, required: false
  private _allowOrigin?: string[]; 
  public get allowOrigin() {
    return this.getListAttribute('allow_origin');
  }
  public set allowOrigin(value: string[]) {
    this._allowOrigin = value;
  }
  public resetAllowOrigin() {
    this._allowOrigin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowOriginInput() {
    return this._allowOrigin;
  }

  // allow_origin_regex - computed: false, optional: true, required: false
  private _allowOriginRegex?: string[]; 
  public get allowOriginRegex() {
    return this.getListAttribute('allow_origin_regex');
  }
  public set allowOriginRegex(value: string[]) {
    this._allowOriginRegex = value;
  }
  public resetAllowOriginRegex() {
    this._allowOriginRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowOriginRegexInput() {
    return this._allowOriginRegex;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // expose_headers - computed: false, optional: true, required: false
  private _exposeHeaders?: string; 
  public get exposeHeaders() {
    return this.getStringAttribute('expose_headers');
  }
  public set exposeHeaders(value: string) {
    this._exposeHeaders = value;
  }
  public resetExposeHeaders() {
    this._exposeHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exposeHeadersInput() {
    return this._exposeHeaders;
  }

  // max_age - computed: false, optional: true, required: false
  private _maxAge?: string; 
  public get maxAge() {
    return this.getStringAttribute('max_age');
  }
  public set maxAge(value: string) {
    this._maxAge = value;
  }
  public resetMaxAge() {
    this._maxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeInput() {
    return this._maxAge;
  }

  // maximum_age - computed: false, optional: true, required: false
  private _maximumAge?: number; 
  public get maximumAge() {
    return this.getNumberAttribute('maximum_age');
  }
  public set maximumAge(value: number) {
    this._maximumAge = value;
  }
  public resetMaximumAge() {
    this._maximumAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumAgeInput() {
    return this._maximumAge;
  }
}
export interface HttpLoadbalancerCsrfPolicyCustomDomainListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#domains HttpLoadbalancer#domains}
  */
  readonly domains: string[];
}

export function httpLoadbalancerCsrfPolicyCustomDomainListStructToTerraform(struct?: HttpLoadbalancerCsrfPolicyCustomDomainListStructOutputReference | HttpLoadbalancerCsrfPolicyCustomDomainListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domains: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.domains),
  }
}


export function httpLoadbalancerCsrfPolicyCustomDomainListStructToHclTerraform(struct?: HttpLoadbalancerCsrfPolicyCustomDomainListStructOutputReference | HttpLoadbalancerCsrfPolicyCustomDomainListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domains: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.domains),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerCsrfPolicyCustomDomainListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerCsrfPolicyCustomDomainListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domains !== undefined) {
      hasAnyValues = true;
      internalValueResult.domains = this._domains;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerCsrfPolicyCustomDomainListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._domains = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._domains = value.domains;
    }
  }

  // domains - computed: false, optional: false, required: true
  private _domains?: string[]; 
  public get domains() {
    return this.getListAttribute('domains');
  }
  public set domains(value: string[]) {
    this._domains = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainsInput() {
    return this._domains;
  }
}
export interface HttpLoadbalancerCsrfPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#all_load_balancer_domains HttpLoadbalancer#all_load_balancer_domains}
  */
  readonly allLoadBalancerDomains?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#disabled HttpLoadbalancer#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * custom_domain_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#custom_domain_list HttpLoadbalancer#custom_domain_list}
  */
  readonly customDomainList?: HttpLoadbalancerCsrfPolicyCustomDomainListStruct;
}

export function httpLoadbalancerCsrfPolicyToTerraform(struct?: HttpLoadbalancerCsrfPolicyOutputReference | HttpLoadbalancerCsrfPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_load_balancer_domains: cdktf.booleanToTerraform(struct!.allLoadBalancerDomains),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    custom_domain_list: httpLoadbalancerCsrfPolicyCustomDomainListStructToTerraform(struct!.customDomainList),
  }
}


export function httpLoadbalancerCsrfPolicyToHclTerraform(struct?: HttpLoadbalancerCsrfPolicyOutputReference | HttpLoadbalancerCsrfPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_load_balancer_domains: {
      value: cdktf.booleanToHclTerraform(struct!.allLoadBalancerDomains),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    custom_domain_list: {
      value: httpLoadbalancerCsrfPolicyCustomDomainListStructToHclTerraform(struct!.customDomainList),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerCsrfPolicyCustomDomainListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerCsrfPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerCsrfPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allLoadBalancerDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.allLoadBalancerDomains = this._allLoadBalancerDomains;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._customDomainList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customDomainList = this._customDomainList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerCsrfPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allLoadBalancerDomains = undefined;
      this._disabled = undefined;
      this._customDomainList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allLoadBalancerDomains = value.allLoadBalancerDomains;
      this._disabled = value.disabled;
      this._customDomainList.internalValue = value.customDomainList;
    }
  }

  // all_load_balancer_domains - computed: false, optional: true, required: false
  private _allLoadBalancerDomains?: boolean | cdktf.IResolvable; 
  public get allLoadBalancerDomains() {
    return this.getBooleanAttribute('all_load_balancer_domains');
  }
  public set allLoadBalancerDomains(value: boolean | cdktf.IResolvable) {
    this._allLoadBalancerDomains = value;
  }
  public resetAllLoadBalancerDomains() {
    this._allLoadBalancerDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allLoadBalancerDomainsInput() {
    return this._allLoadBalancerDomains;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // custom_domain_list - computed: false, optional: true, required: false
  private _customDomainList = new HttpLoadbalancerCsrfPolicyCustomDomainListStructOutputReference(this, "custom_domain_list");
  public get customDomainList() {
    return this._customDomainList;
  }
  public putCustomDomainList(value: HttpLoadbalancerCsrfPolicyCustomDomainListStruct) {
    this._customDomainList.internalValue = value;
  }
  public resetCustomDomainList() {
    this._customDomainList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDomainListInput() {
    return this._customDomainList.internalValue;
  }
}
export interface HttpLoadbalancerDataGuardRulesMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#description HttpLoadbalancer#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#disable HttpLoadbalancer#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name: string;
}

export function httpLoadbalancerDataGuardRulesMetadataToTerraform(struct?: HttpLoadbalancerDataGuardRulesMetadataOutputReference | HttpLoadbalancerDataGuardRulesMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    disable: cdktf.booleanToTerraform(struct!.disable),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function httpLoadbalancerDataGuardRulesMetadataToHclTerraform(struct?: HttpLoadbalancerDataGuardRulesMetadataOutputReference | HttpLoadbalancerDataGuardRulesMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerDataGuardRulesMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerDataGuardRulesMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerDataGuardRulesMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._disable = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._disable = value.disable;
      this._name = value.name;
    }
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

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
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
}
export interface HttpLoadbalancerDataGuardRulesPath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#path HttpLoadbalancer#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#prefix HttpLoadbalancer#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#regex HttpLoadbalancer#regex}
  */
  readonly regex?: string;
}

export function httpLoadbalancerDataGuardRulesPathToTerraform(struct?: HttpLoadbalancerDataGuardRulesPathOutputReference | HttpLoadbalancerDataGuardRulesPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}


export function httpLoadbalancerDataGuardRulesPathToHclTerraform(struct?: HttpLoadbalancerDataGuardRulesPathOutputReference | HttpLoadbalancerDataGuardRulesPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerDataGuardRulesPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerDataGuardRulesPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerDataGuardRulesPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._path = undefined;
      this._prefix = undefined;
      this._regex = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._path = value.path;
      this._prefix = value.prefix;
      this._regex = value.regex;
    }
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
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

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }
}
export interface HttpLoadbalancerDataGuardRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#any_domain HttpLoadbalancer#any_domain}
  */
  readonly anyDomain?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#apply_data_guard HttpLoadbalancer#apply_data_guard}
  */
  readonly applyDataGuard?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#exact_value HttpLoadbalancer#exact_value}
  */
  readonly exactValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#skip_data_guard HttpLoadbalancer#skip_data_guard}
  */
  readonly skipDataGuard?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#suffix_value HttpLoadbalancer#suffix_value}
  */
  readonly suffixValue?: string;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#metadata HttpLoadbalancer#metadata}
  */
  readonly metadata: HttpLoadbalancerDataGuardRulesMetadata;
  /**
  * path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#path HttpLoadbalancer#path}
  */
  readonly path: HttpLoadbalancerDataGuardRulesPath;
}

export function httpLoadbalancerDataGuardRulesToTerraform(struct?: HttpLoadbalancerDataGuardRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_domain: cdktf.booleanToTerraform(struct!.anyDomain),
    apply_data_guard: cdktf.booleanToTerraform(struct!.applyDataGuard),
    exact_value: cdktf.stringToTerraform(struct!.exactValue),
    skip_data_guard: cdktf.booleanToTerraform(struct!.skipDataGuard),
    suffix_value: cdktf.stringToTerraform(struct!.suffixValue),
    metadata: httpLoadbalancerDataGuardRulesMetadataToTerraform(struct!.metadata),
    path: httpLoadbalancerDataGuardRulesPathToTerraform(struct!.path),
  }
}


export function httpLoadbalancerDataGuardRulesToHclTerraform(struct?: HttpLoadbalancerDataGuardRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    any_domain: {
      value: cdktf.booleanToHclTerraform(struct!.anyDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    apply_data_guard: {
      value: cdktf.booleanToHclTerraform(struct!.applyDataGuard),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exact_value: {
      value: cdktf.stringToHclTerraform(struct!.exactValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skip_data_guard: {
      value: cdktf.booleanToHclTerraform(struct!.skipDataGuard),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    suffix_value: {
      value: cdktf.stringToHclTerraform(struct!.suffixValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata: {
      value: httpLoadbalancerDataGuardRulesMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerDataGuardRulesMetadataList",
    },
    path: {
      value: httpLoadbalancerDataGuardRulesPathToHclTerraform(struct!.path),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerDataGuardRulesPathList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerDataGuardRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttpLoadbalancerDataGuardRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyDomain = this._anyDomain;
    }
    if (this._applyDataGuard !== undefined) {
      hasAnyValues = true;
      internalValueResult.applyDataGuard = this._applyDataGuard;
    }
    if (this._exactValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValue = this._exactValue;
    }
    if (this._skipDataGuard !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipDataGuard = this._skipDataGuard;
    }
    if (this._suffixValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffixValue = this._suffixValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._path?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerDataGuardRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anyDomain = undefined;
      this._applyDataGuard = undefined;
      this._exactValue = undefined;
      this._skipDataGuard = undefined;
      this._suffixValue = undefined;
      this._metadata.internalValue = undefined;
      this._path.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._anyDomain = value.anyDomain;
      this._applyDataGuard = value.applyDataGuard;
      this._exactValue = value.exactValue;
      this._skipDataGuard = value.skipDataGuard;
      this._suffixValue = value.suffixValue;
      this._metadata.internalValue = value.metadata;
      this._path.internalValue = value.path;
    }
  }

  // any_domain - computed: false, optional: true, required: false
  private _anyDomain?: boolean | cdktf.IResolvable; 
  public get anyDomain() {
    return this.getBooleanAttribute('any_domain');
  }
  public set anyDomain(value: boolean | cdktf.IResolvable) {
    this._anyDomain = value;
  }
  public resetAnyDomain() {
    this._anyDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyDomainInput() {
    return this._anyDomain;
  }

  // apply_data_guard - computed: false, optional: true, required: false
  private _applyDataGuard?: boolean | cdktf.IResolvable; 
  public get applyDataGuard() {
    return this.getBooleanAttribute('apply_data_guard');
  }
  public set applyDataGuard(value: boolean | cdktf.IResolvable) {
    this._applyDataGuard = value;
  }
  public resetApplyDataGuard() {
    this._applyDataGuard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyDataGuardInput() {
    return this._applyDataGuard;
  }

  // exact_value - computed: false, optional: true, required: false
  private _exactValue?: string; 
  public get exactValue() {
    return this.getStringAttribute('exact_value');
  }
  public set exactValue(value: string) {
    this._exactValue = value;
  }
  public resetExactValue() {
    this._exactValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValueInput() {
    return this._exactValue;
  }

  // skip_data_guard - computed: false, optional: true, required: false
  private _skipDataGuard?: boolean | cdktf.IResolvable; 
  public get skipDataGuard() {
    return this.getBooleanAttribute('skip_data_guard');
  }
  public set skipDataGuard(value: boolean | cdktf.IResolvable) {
    this._skipDataGuard = value;
  }
  public resetSkipDataGuard() {
    this._skipDataGuard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipDataGuardInput() {
    return this._skipDataGuard;
  }

  // suffix_value - computed: false, optional: true, required: false
  private _suffixValue?: string; 
  public get suffixValue() {
    return this.getStringAttribute('suffix_value');
  }
  public set suffixValue(value: string) {
    this._suffixValue = value;
  }
  public resetSuffixValue() {
    this._suffixValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixValueInput() {
    return this._suffixValue;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new HttpLoadbalancerDataGuardRulesMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: HttpLoadbalancerDataGuardRulesMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // path - computed: false, optional: false, required: true
  private _path = new HttpLoadbalancerDataGuardRulesPathOutputReference(this, "path");
  public get path() {
    return this._path;
  }
  public putPath(value: HttpLoadbalancerDataGuardRulesPath) {
    this._path.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path.internalValue;
  }
}

export class HttpLoadbalancerDataGuardRulesList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerDataGuardRules[] | cdktf.IResolvable

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
  public get(index: number): HttpLoadbalancerDataGuardRulesOutputReference {
    return new HttpLoadbalancerDataGuardRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerDdosMitigationRulesDdosClientSourceAsnListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#as_numbers HttpLoadbalancer#as_numbers}
  */
  readonly asNumbers: number[];
}

export function httpLoadbalancerDdosMitigationRulesDdosClientSourceAsnListStructToTerraform(struct?: HttpLoadbalancerDdosMitigationRulesDdosClientSourceAsnListStructOutputReference | HttpLoadbalancerDdosMitigationRulesDdosClientSourceAsnListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    as_numbers: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.asNumbers),
  }
}


export function httpLoadbalancerDdosMitigationRulesDdosClientSourceAsnListStructToHclTerraform(struct?: HttpLoadbalancerDdosMitigationRulesDdosClientSourceAsnListStructOutputReference | HttpLoadbalancerDdosMitigationRulesDdosClientSourceAsnListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    as_numbers: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.asNumbers),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerDdosMitigationRulesDdosClientSourceAsnListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerDdosMitigationRulesDdosClientSourceAsnListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asNumbers !== undefined) {
      hasAnyValues = true;
      internalValueResult.asNumbers = this._asNumbers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerDdosMitigationRulesDdosClientSourceAsnListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._asNumbers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._asNumbers = value.asNumbers;
    }
  }

  // as_numbers - computed: false, optional: false, required: true
  private _asNumbers?: number[]; 
  public get asNumbers() {
    return this.getNumberListAttribute('as_numbers');
  }
  public set asNumbers(value: number[]) {
    this._asNumbers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asNumbersInput() {
    return this._asNumbers;
  }
}
export interface HttpLoadbalancerDdosMitigationRulesDdosClientSourceJa4TlsFingerprintMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#exact_values HttpLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
}

export function httpLoadbalancerDdosMitigationRulesDdosClientSourceJa4TlsFingerprintMatcherToTerraform(struct?: HttpLoadbalancerDdosMitigationRulesDdosClientSourceJa4TlsFingerprintMatcherOutputReference | HttpLoadbalancerDdosMitigationRulesDdosClientSourceJa4TlsFingerprintMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exactValues),
  }
}


export function httpLoadbalancerDdosMitigationRulesDdosClientSourceJa4TlsFingerprintMatcherToHclTerraform(struct?: HttpLoadbalancerDdosMitigationRulesDdosClientSourceJa4TlsFingerprintMatcherOutputReference | HttpLoadbalancerDdosMitigationRulesDdosClientSourceJa4TlsFingerprintMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exactValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerDdosMitigationRulesDdosClientSourceJa4TlsFingerprintMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerDdosMitigationRulesDdosClientSourceJa4TlsFingerprintMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValues = this._exactValues;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerDdosMitigationRulesDdosClientSourceJa4TlsFingerprintMatcher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValues = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValues = value.exactValues;
    }
  }

  // exact_values - computed: false, optional: true, required: false
  private _exactValues?: string[]; 
  public get exactValues() {
    return this.getListAttribute('exact_values');
  }
  public set exactValues(value: string[]) {
    this._exactValues = value;
  }
  public resetExactValues() {
    this._exactValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValuesInput() {
    return this._exactValues;
  }
}
export interface HttpLoadbalancerDdosMitigationRulesDdosClientSourceTlsFingerprintMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#classes HttpLoadbalancer#classes}
  */
  readonly classes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#exact_values HttpLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#excluded_values HttpLoadbalancer#excluded_values}
  */
  readonly excludedValues?: string[];
}

export function httpLoadbalancerDdosMitigationRulesDdosClientSourceTlsFingerprintMatcherToTerraform(struct?: HttpLoadbalancerDdosMitigationRulesDdosClientSourceTlsFingerprintMatcherOutputReference | HttpLoadbalancerDdosMitigationRulesDdosClientSourceTlsFingerprintMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    classes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.classes),
    exact_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exactValues),
    excluded_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedValues),
  }
}


export function httpLoadbalancerDdosMitigationRulesDdosClientSourceTlsFingerprintMatcherToHclTerraform(struct?: HttpLoadbalancerDdosMitigationRulesDdosClientSourceTlsFingerprintMatcherOutputReference | HttpLoadbalancerDdosMitigationRulesDdosClientSourceTlsFingerprintMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    classes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.classes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    exact_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exactValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    excluded_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerDdosMitigationRulesDdosClientSourceTlsFingerprintMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerDdosMitigationRulesDdosClientSourceTlsFingerprintMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._classes !== undefined) {
      hasAnyValues = true;
      internalValueResult.classes = this._classes;
    }
    if (this._exactValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValues = this._exactValues;
    }
    if (this._excludedValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedValues = this._excludedValues;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerDdosMitigationRulesDdosClientSourceTlsFingerprintMatcher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._classes = undefined;
      this._exactValues = undefined;
      this._excludedValues = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._classes = value.classes;
      this._exactValues = value.exactValues;
      this._excludedValues = value.excludedValues;
    }
  }

  // classes - computed: false, optional: true, required: false
  private _classes?: string[]; 
  public get classes() {
    return this.getListAttribute('classes');
  }
  public set classes(value: string[]) {
    this._classes = value;
  }
  public resetClasses() {
    this._classes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classesInput() {
    return this._classes;
  }

  // exact_values - computed: false, optional: true, required: false
  private _exactValues?: string[]; 
  public get exactValues() {
    return this.getListAttribute('exact_values');
  }
  public set exactValues(value: string[]) {
    this._exactValues = value;
  }
  public resetExactValues() {
    this._exactValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValuesInput() {
    return this._exactValues;
  }

  // excluded_values - computed: false, optional: true, required: false
  private _excludedValues?: string[]; 
  public get excludedValues() {
    return this.getListAttribute('excluded_values');
  }
  public set excludedValues(value: string[]) {
    this._excludedValues = value;
  }
  public resetExcludedValues() {
    this._excludedValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedValuesInput() {
    return this._excludedValues;
  }
}
export interface HttpLoadbalancerDdosMitigationRulesDdosClientSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#country_list HttpLoadbalancer#country_list}
  */
  readonly countryList?: string[];
  /**
  * asn_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#asn_list HttpLoadbalancer#asn_list}
  */
  readonly asnList?: HttpLoadbalancerDdosMitigationRulesDdosClientSourceAsnListStruct;
  /**
  * ja4_tls_fingerprint_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#ja4_tls_fingerprint_matcher HttpLoadbalancer#ja4_tls_fingerprint_matcher}
  */
  readonly ja4TlsFingerprintMatcher?: HttpLoadbalancerDdosMitigationRulesDdosClientSourceJa4TlsFingerprintMatcher;
  /**
  * tls_fingerprint_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#tls_fingerprint_matcher HttpLoadbalancer#tls_fingerprint_matcher}
  */
  readonly tlsFingerprintMatcher?: HttpLoadbalancerDdosMitigationRulesDdosClientSourceTlsFingerprintMatcher;
}

export function httpLoadbalancerDdosMitigationRulesDdosClientSourceToTerraform(struct?: HttpLoadbalancerDdosMitigationRulesDdosClientSourceOutputReference | HttpLoadbalancerDdosMitigationRulesDdosClientSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    country_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.countryList),
    asn_list: httpLoadbalancerDdosMitigationRulesDdosClientSourceAsnListStructToTerraform(struct!.asnList),
    ja4_tls_fingerprint_matcher: httpLoadbalancerDdosMitigationRulesDdosClientSourceJa4TlsFingerprintMatcherToTerraform(struct!.ja4TlsFingerprintMatcher),
    tls_fingerprint_matcher: httpLoadbalancerDdosMitigationRulesDdosClientSourceTlsFingerprintMatcherToTerraform(struct!.tlsFingerprintMatcher),
  }
}


export function httpLoadbalancerDdosMitigationRulesDdosClientSourceToHclTerraform(struct?: HttpLoadbalancerDdosMitigationRulesDdosClientSourceOutputReference | HttpLoadbalancerDdosMitigationRulesDdosClientSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    country_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.countryList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    asn_list: {
      value: httpLoadbalancerDdosMitigationRulesDdosClientSourceAsnListStructToHclTerraform(struct!.asnList),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerDdosMitigationRulesDdosClientSourceAsnListStructList",
    },
    ja4_tls_fingerprint_matcher: {
      value: httpLoadbalancerDdosMitigationRulesDdosClientSourceJa4TlsFingerprintMatcherToHclTerraform(struct!.ja4TlsFingerprintMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerDdosMitigationRulesDdosClientSourceJa4TlsFingerprintMatcherList",
    },
    tls_fingerprint_matcher: {
      value: httpLoadbalancerDdosMitigationRulesDdosClientSourceTlsFingerprintMatcherToHclTerraform(struct!.tlsFingerprintMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerDdosMitigationRulesDdosClientSourceTlsFingerprintMatcherList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerDdosMitigationRulesDdosClientSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerDdosMitigationRulesDdosClientSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._countryList !== undefined) {
      hasAnyValues = true;
      internalValueResult.countryList = this._countryList;
    }
    if (this._asnList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asnList = this._asnList?.internalValue;
    }
    if (this._ja4TlsFingerprintMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ja4TlsFingerprintMatcher = this._ja4TlsFingerprintMatcher?.internalValue;
    }
    if (this._tlsFingerprintMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsFingerprintMatcher = this._tlsFingerprintMatcher?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerDdosMitigationRulesDdosClientSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._countryList = undefined;
      this._asnList.internalValue = undefined;
      this._ja4TlsFingerprintMatcher.internalValue = undefined;
      this._tlsFingerprintMatcher.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._countryList = value.countryList;
      this._asnList.internalValue = value.asnList;
      this._ja4TlsFingerprintMatcher.internalValue = value.ja4TlsFingerprintMatcher;
      this._tlsFingerprintMatcher.internalValue = value.tlsFingerprintMatcher;
    }
  }

  // country_list - computed: false, optional: true, required: false
  private _countryList?: string[]; 
  public get countryList() {
    return this.getListAttribute('country_list');
  }
  public set countryList(value: string[]) {
    this._countryList = value;
  }
  public resetCountryList() {
    this._countryList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryListInput() {
    return this._countryList;
  }

  // asn_list - computed: false, optional: true, required: false
  private _asnList = new HttpLoadbalancerDdosMitigationRulesDdosClientSourceAsnListStructOutputReference(this, "asn_list");
  public get asnList() {
    return this._asnList;
  }
  public putAsnList(value: HttpLoadbalancerDdosMitigationRulesDdosClientSourceAsnListStruct) {
    this._asnList.internalValue = value;
  }
  public resetAsnList() {
    this._asnList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asnListInput() {
    return this._asnList.internalValue;
  }

  // ja4_tls_fingerprint_matcher - computed: false, optional: true, required: false
  private _ja4TlsFingerprintMatcher = new HttpLoadbalancerDdosMitigationRulesDdosClientSourceJa4TlsFingerprintMatcherOutputReference(this, "ja4_tls_fingerprint_matcher");
  public get ja4TlsFingerprintMatcher() {
    return this._ja4TlsFingerprintMatcher;
  }
  public putJa4TlsFingerprintMatcher(value: HttpLoadbalancerDdosMitigationRulesDdosClientSourceJa4TlsFingerprintMatcher) {
    this._ja4TlsFingerprintMatcher.internalValue = value;
  }
  public resetJa4TlsFingerprintMatcher() {
    this._ja4TlsFingerprintMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ja4TlsFingerprintMatcherInput() {
    return this._ja4TlsFingerprintMatcher.internalValue;
  }

  // tls_fingerprint_matcher - computed: false, optional: true, required: false
  private _tlsFingerprintMatcher = new HttpLoadbalancerDdosMitigationRulesDdosClientSourceTlsFingerprintMatcherOutputReference(this, "tls_fingerprint_matcher");
  public get tlsFingerprintMatcher() {
    return this._tlsFingerprintMatcher;
  }
  public putTlsFingerprintMatcher(value: HttpLoadbalancerDdosMitigationRulesDdosClientSourceTlsFingerprintMatcher) {
    this._tlsFingerprintMatcher.internalValue = value;
  }
  public resetTlsFingerprintMatcher() {
    this._tlsFingerprintMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsFingerprintMatcherInput() {
    return this._tlsFingerprintMatcher.internalValue;
  }
}
export interface HttpLoadbalancerDdosMitigationRulesIpPrefixListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#invert_match HttpLoadbalancer#invert_match}
  */
  readonly invertMatch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#ip_prefixes HttpLoadbalancer#ip_prefixes}
  */
  readonly ipPrefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#ipv6_prefixes HttpLoadbalancer#ipv6_prefixes}
  */
  readonly ipv6Prefixes?: string[];
}

export function httpLoadbalancerDdosMitigationRulesIpPrefixListStructToTerraform(struct?: HttpLoadbalancerDdosMitigationRulesIpPrefixListStructOutputReference | HttpLoadbalancerDdosMitigationRulesIpPrefixListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invert_match: cdktf.booleanToTerraform(struct!.invertMatch),
    ip_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipPrefixes),
    ipv6_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipv6Prefixes),
  }
}


export function httpLoadbalancerDdosMitigationRulesIpPrefixListStructToHclTerraform(struct?: HttpLoadbalancerDdosMitigationRulesIpPrefixListStructOutputReference | HttpLoadbalancerDdosMitigationRulesIpPrefixListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    invert_match: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipPrefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ipv6_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipv6Prefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerDdosMitigationRulesIpPrefixListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerDdosMitigationRulesIpPrefixListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invertMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatch = this._invertMatch;
    }
    if (this._ipPrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPrefixes = this._ipPrefixes;
    }
    if (this._ipv6Prefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Prefixes = this._ipv6Prefixes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerDdosMitigationRulesIpPrefixListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._invertMatch = undefined;
      this._ipPrefixes = undefined;
      this._ipv6Prefixes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._invertMatch = value.invertMatch;
      this._ipPrefixes = value.ipPrefixes;
      this._ipv6Prefixes = value.ipv6Prefixes;
    }
  }

  // invert_match - computed: false, optional: true, required: false
  private _invertMatch?: boolean | cdktf.IResolvable; 
  public get invertMatch() {
    return this.getBooleanAttribute('invert_match');
  }
  public set invertMatch(value: boolean | cdktf.IResolvable) {
    this._invertMatch = value;
  }
  public resetInvertMatch() {
    this._invertMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatchInput() {
    return this._invertMatch;
  }

  // ip_prefixes - computed: false, optional: true, required: false
  private _ipPrefixes?: string[]; 
  public get ipPrefixes() {
    return this.getListAttribute('ip_prefixes');
  }
  public set ipPrefixes(value: string[]) {
    this._ipPrefixes = value;
  }
  public resetIpPrefixes() {
    this._ipPrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPrefixesInput() {
    return this._ipPrefixes;
  }

  // ipv6_prefixes - computed: false, optional: true, required: false
  private _ipv6Prefixes?: string[]; 
  public get ipv6Prefixes() {
    return this.getListAttribute('ipv6_prefixes');
  }
  public set ipv6Prefixes(value: string[]) {
    this._ipv6Prefixes = value;
  }
  public resetIpv6Prefixes() {
    this._ipv6Prefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PrefixesInput() {
    return this._ipv6Prefixes;
  }
}
export interface HttpLoadbalancerDdosMitigationRulesMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#description HttpLoadbalancer#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#disable HttpLoadbalancer#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name: string;
}

export function httpLoadbalancerDdosMitigationRulesMetadataToTerraform(struct?: HttpLoadbalancerDdosMitigationRulesMetadataOutputReference | HttpLoadbalancerDdosMitigationRulesMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    disable: cdktf.booleanToTerraform(struct!.disable),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function httpLoadbalancerDdosMitigationRulesMetadataToHclTerraform(struct?: HttpLoadbalancerDdosMitigationRulesMetadataOutputReference | HttpLoadbalancerDdosMitigationRulesMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerDdosMitigationRulesMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerDdosMitigationRulesMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerDdosMitigationRulesMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._disable = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._disable = value.disable;
      this._name = value.name;
    }
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

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
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
}
export interface HttpLoadbalancerDdosMitigationRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#block HttpLoadbalancer#block}
  */
  readonly block?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#expiration_timestamp HttpLoadbalancer#expiration_timestamp}
  */
  readonly expirationTimestamp?: string;
  /**
  * ddos_client_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#ddos_client_source HttpLoadbalancer#ddos_client_source}
  */
  readonly ddosClientSource?: HttpLoadbalancerDdosMitigationRulesDdosClientSource;
  /**
  * ip_prefix_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#ip_prefix_list HttpLoadbalancer#ip_prefix_list}
  */
  readonly ipPrefixList?: HttpLoadbalancerDdosMitigationRulesIpPrefixListStruct;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#metadata HttpLoadbalancer#metadata}
  */
  readonly metadata: HttpLoadbalancerDdosMitigationRulesMetadata;
}

export function httpLoadbalancerDdosMitigationRulesToTerraform(struct?: HttpLoadbalancerDdosMitigationRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block: cdktf.booleanToTerraform(struct!.block),
    expiration_timestamp: cdktf.stringToTerraform(struct!.expirationTimestamp),
    ddos_client_source: httpLoadbalancerDdosMitigationRulesDdosClientSourceToTerraform(struct!.ddosClientSource),
    ip_prefix_list: httpLoadbalancerDdosMitigationRulesIpPrefixListStructToTerraform(struct!.ipPrefixList),
    metadata: httpLoadbalancerDdosMitigationRulesMetadataToTerraform(struct!.metadata),
  }
}


export function httpLoadbalancerDdosMitigationRulesToHclTerraform(struct?: HttpLoadbalancerDdosMitigationRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block: {
      value: cdktf.booleanToHclTerraform(struct!.block),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    expiration_timestamp: {
      value: cdktf.stringToHclTerraform(struct!.expirationTimestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ddos_client_source: {
      value: httpLoadbalancerDdosMitigationRulesDdosClientSourceToHclTerraform(struct!.ddosClientSource),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerDdosMitigationRulesDdosClientSourceList",
    },
    ip_prefix_list: {
      value: httpLoadbalancerDdosMitigationRulesIpPrefixListStructToHclTerraform(struct!.ipPrefixList),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerDdosMitigationRulesIpPrefixListStructList",
    },
    metadata: {
      value: httpLoadbalancerDdosMitigationRulesMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerDdosMitigationRulesMetadataList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerDdosMitigationRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttpLoadbalancerDdosMitigationRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._block !== undefined) {
      hasAnyValues = true;
      internalValueResult.block = this._block;
    }
    if (this._expirationTimestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.expirationTimestamp = this._expirationTimestamp;
    }
    if (this._ddosClientSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddosClientSource = this._ddosClientSource?.internalValue;
    }
    if (this._ipPrefixList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPrefixList = this._ipPrefixList?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerDdosMitigationRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._block = undefined;
      this._expirationTimestamp = undefined;
      this._ddosClientSource.internalValue = undefined;
      this._ipPrefixList.internalValue = undefined;
      this._metadata.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._block = value.block;
      this._expirationTimestamp = value.expirationTimestamp;
      this._ddosClientSource.internalValue = value.ddosClientSource;
      this._ipPrefixList.internalValue = value.ipPrefixList;
      this._metadata.internalValue = value.metadata;
    }
  }

  // block - computed: false, optional: true, required: false
  private _block?: boolean | cdktf.IResolvable; 
  public get block() {
    return this.getBooleanAttribute('block');
  }
  public set block(value: boolean | cdktf.IResolvable) {
    this._block = value;
  }
  public resetBlock() {
    this._block = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockInput() {
    return this._block;
  }

  // expiration_timestamp - computed: false, optional: true, required: false
  private _expirationTimestamp?: string; 
  public get expirationTimestamp() {
    return this.getStringAttribute('expiration_timestamp');
  }
  public set expirationTimestamp(value: string) {
    this._expirationTimestamp = value;
  }
  public resetExpirationTimestamp() {
    this._expirationTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationTimestampInput() {
    return this._expirationTimestamp;
  }

  // ddos_client_source - computed: false, optional: true, required: false
  private _ddosClientSource = new HttpLoadbalancerDdosMitigationRulesDdosClientSourceOutputReference(this, "ddos_client_source");
  public get ddosClientSource() {
    return this._ddosClientSource;
  }
  public putDdosClientSource(value: HttpLoadbalancerDdosMitigationRulesDdosClientSource) {
    this._ddosClientSource.internalValue = value;
  }
  public resetDdosClientSource() {
    this._ddosClientSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddosClientSourceInput() {
    return this._ddosClientSource.internalValue;
  }

  // ip_prefix_list - computed: false, optional: true, required: false
  private _ipPrefixList = new HttpLoadbalancerDdosMitigationRulesIpPrefixListStructOutputReference(this, "ip_prefix_list");
  public get ipPrefixList() {
    return this._ipPrefixList;
  }
  public putIpPrefixList(value: HttpLoadbalancerDdosMitigationRulesIpPrefixListStruct) {
    this._ipPrefixList.internalValue = value;
  }
  public resetIpPrefixList() {
    this._ipPrefixList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPrefixListInput() {
    return this._ipPrefixList.internalValue;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new HttpLoadbalancerDdosMitigationRulesMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: HttpLoadbalancerDdosMitigationRulesMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }
}

export class HttpLoadbalancerDdosMitigationRulesList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerDdosMitigationRules[] | cdktf.IResolvable

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
  public get(index: number): HttpLoadbalancerDdosMitigationRulesOutputReference {
    return new HttpLoadbalancerDdosMitigationRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerDefaultPoolAdvancedOptionsCircuitBreaker {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#connection_limit HttpLoadbalancer#connection_limit}
  */
  readonly connectionLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#max_requests HttpLoadbalancer#max_requests}
  */
  readonly maxRequests?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#pending_requests HttpLoadbalancer#pending_requests}
  */
  readonly pendingRequests?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#priority HttpLoadbalancer#priority}
  */
  readonly priority?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#retries HttpLoadbalancer#retries}
  */
  readonly retries?: number;
}

export function httpLoadbalancerDefaultPoolAdvancedOptionsCircuitBreakerToTerraform(struct?: HttpLoadbalancerDefaultPoolAdvancedOptionsCircuitBreakerOutputReference | HttpLoadbalancerDefaultPoolAdvancedOptionsCircuitBreaker): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_limit: cdktf.numberToTerraform(struct!.connectionLimit),
    max_requests: cdktf.numberToTerraform(struct!.maxRequests),
    pending_requests: cdktf.numberToTerraform(struct!.pendingRequests),
    priority: cdktf.stringToTerraform(struct!.priority),
    retries: cdktf.numberToTerraform(struct!.retries),
  }
}


export function httpLoadbalancerDefaultPoolAdvancedOptionsCircuitBreakerToHclTerraform(struct?: HttpLoadbalancerDefaultPoolAdvancedOptionsCircuitBreakerOutputReference | HttpLoadbalancerDefaultPoolAdvancedOptionsCircuitBreaker): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_limit: {
      value: cdktf.numberToHclTerraform(struct!.connectionLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_requests: {
      value: cdktf.numberToHclTerraform(struct!.maxRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pending_requests: {
      value: cdktf.numberToHclTerraform(struct!.pendingRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority: {
      value: cdktf.stringToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retries: {
      value: cdktf.numberToHclTerraform(struct!.retries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerDefaultPoolAdvancedOptionsCircuitBreakerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerDefaultPoolAdvancedOptionsCircuitBreaker | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionLimit = this._connectionLimit;
    }
    if (this._maxRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRequests = this._maxRequests;
    }
    if (this._pendingRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.pendingRequests = this._pendingRequests;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._retries !== undefined) {
      hasAnyValues = true;
      internalValueResult.retries = this._retries;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerDefaultPoolAdvancedOptionsCircuitBreaker | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectionLimit = undefined;
      this._maxRequests = undefined;
      this._pendingRequests = undefined;
      this._priority = undefined;
      this._retries = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectionLimit = value.connectionLimit;
      this._maxRequests = value.maxRequests;
      this._pendingRequests = value.pendingRequests;
      this._priority = value.priority;
      this._retries = value.retries;
    }
  }

  // connection_limit - computed: false, optional: true, required: false
  private _connectionLimit?: number; 
  public get connectionLimit() {
    return this.getNumberAttribute('connection_limit');
  }
  public set connectionLimit(value: number) {
    this._connectionLimit = value;
  }
  public resetConnectionLimit() {
    this._connectionLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionLimitInput() {
    return this._connectionLimit;
  }

  // max_requests - computed: false, optional: true, required: false
  private _maxRequests?: number; 
  public get maxRequests() {
    return this.getNumberAttribute('max_requests');
  }
  public set maxRequests(value: number) {
    this._maxRequests = value;
  }
  public resetMaxRequests() {
    this._maxRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRequestsInput() {
    return this._maxRequests;
  }

  // pending_requests - computed: false, optional: true, required: false
  private _pendingRequests?: number; 
  public get pendingRequests() {
    return this.getNumberAttribute('pending_requests');
  }
  public set pendingRequests(value: number) {
    this._pendingRequests = value;
  }
  public resetPendingRequests() {
    this._pendingRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pendingRequestsInput() {
    return this._pendingRequests;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // retries - computed: false, optional: true, required: false
  private _retries?: number; 
  public get retries() {
    return this.getNumberAttribute('retries');
  }
  public set retries(value: number) {
    this._retries = value;
  }
  public resetRetries() {
    this._retries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retriesInput() {
    return this._retries;
  }
}
export interface HttpLoadbalancerDefaultPoolAdvancedOptionsEnableSubsetsDefaultSubset {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#default_subset HttpLoadbalancer#default_subset}
  */
  readonly defaultSubset?: { [key: string]: string };
}

export function httpLoadbalancerDefaultPoolAdvancedOptionsEnableSubsetsDefaultSubsetToTerraform(struct?: HttpLoadbalancerDefaultPoolAdvancedOptionsEnableSubsetsDefaultSubsetOutputReference | HttpLoadbalancerDefaultPoolAdvancedOptionsEnableSubsetsDefaultSubset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_subset: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.defaultSubset),
  }
}


export function httpLoadbalancerDefaultPoolAdvancedOptionsEnableSubsetsDefaultSubsetToHclTerraform(struct?: HttpLoadbalancerDefaultPoolAdvancedOptionsEnableSubsetsDefaultSubsetOutputReference | HttpLoadbalancerDefaultPoolAdvancedOptionsEnableSubsetsDefaultSubset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_subset: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.defaultSubset),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerDefaultPoolAdvancedOptionsEnableSubsetsDefaultSubsetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerDefaultPoolAdvancedOptionsEnableSubsetsDefaultSubset | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultSubset !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultSubset = this._defaultSubset;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerDefaultPoolAdvancedOptionsEnableSubsetsDefaultSubset | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultSubset = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultSubset = value.defaultSubset;
    }
  }

  // default_subset - computed: false, optional: true, required: false
  private _defaultSubset?: { [key: string]: string }; 
  public get defaultSubset() {
    return this.getStringMapAttribute('default_subset');
  }
  public set defaultSubset(value: { [key: string]: string }) {
    this._defaultSubset = value;
  }
  public resetDefaultSubset() {
    this._defaultSubset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSubsetInput() {
    return this._defaultSubset;
  }
}
export interface HttpLoadbalancerDefaultPoolAdvancedOptionsEnableSubsetsEndpointSubsets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#keys HttpLoadbalancer#keys}
  */
  readonly keys: string[];
}

export function httpLoadbalancerDefaultPoolAdvancedOptionsEnableSubsetsEndpointSubsetsToTerraform(struct?: HttpLoadbalancerDefaultPoolAdvancedOptionsEnableSubsetsEndpointSubsets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.keys),
  }
}


export function httpLoadbalancerDefaultPoolAdvancedOptionsEnableSubsetsEndpointSubsetsToHclTerraform(struct?: HttpLoadbalancerDefaultPoolAdvancedOptionsEnableSubsetsEndpointSubsets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.keys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerDefaultPoolAdvancedOptionsEnableSubsetsEndpointSubsetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttpLoadbalancerDefaultPoolAdvancedOptionsEnableSubsetsEndpointSubsets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keys !== undefined) {
      hasAnyValues = true;
      internalValueResult.keys = this._keys;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerDefaultPoolAdvancedOptionsEnableSubsetsEndpointSubsets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keys = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keys = value.keys;
    }
  }

  // keys - computed: false, optional: false, required: true
  private _keys?: string[]; 
  public get keys() {
    return this.getListAttribute('keys');
  }
  public set keys(value: string[]) {
    this._keys = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keysInput() {
    return this._keys;
  }
}

export class HttpLoadbalancerDefaultPoolAdvancedOptionsEnableSubsetsEndpointSubsetsList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerDefaultPoolAdvancedOptionsEnableSubsetsEndpointSubsets[] | cdktf.IResolvable

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
  public get(index: number): HttpLoadbalancerDefaultPoolAdvancedOptionsEnableSubsetsEndpointSubsetsOutputReference {
    return new HttpLoadbalancerDefaultPoolAdvancedOptionsEnableSubsetsEndpointSubsetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerDefaultPoolAdvancedOptionsEnableSubsets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#any_endpoint HttpLoadbalancer#any_endpoint}
  */
  readonly anyEndpoint?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#fail_request HttpLoadbalancer#fail_request}
  */
  readonly failRequest?: boolean | cdktf.IResolvable;
  /**
  * default_subset block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#default_subset HttpLoadbalancer#default_subset}
  */
  readonly defaultSubset?: HttpLoadbalancerDefaultPoolAdvancedOptionsEnableSubsetsDefaultSubset;
  /**
  * endpoint_subsets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#endpoint_subsets HttpLoadbalancer#endpoint_subsets}
  */
  readonly endpointSubsets: HttpLoadbalancerDefaultPoolAdvancedOptionsEnableSubsetsEndpointSubsets[] | cdktf.IResolvable;
}

export function httpLoadbalancerDefaultPoolAdvancedOptionsEnableSubsetsToTerraform(struct?: HttpLoadbalancerDefaultPoolAdvancedOptionsEnableSubsetsOutputReference | HttpLoadbalancerDefaultPoolAdvancedOptionsEnableSubsets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_endpoint: cdktf.booleanToTerraform(struct!.anyEndpoint),
    fail_request: cdktf.booleanToTerraform(struct!.failRequest),
    default_subset: httpLoadbalancerDefaultPoolAdvancedOptionsEnableSubsetsDefaultSubsetToTerraform(struct!.defaultSubset),
    endpoint_subsets: cdktf.listMapper(httpLoadbalancerDefaultPoolAdvancedOptionsEnableSubsetsEndpointSubsetsToTerraform, true)(struct!.endpointSubsets),
  }
}


export function httpLoadbalancerDefaultPoolAdvancedOptionsEnableSubsetsToHclTerraform(struct?: HttpLoadbalancerDefaultPoolAdvancedOptionsEnableSubsetsOutputReference | HttpLoadbalancerDefaultPoolAdvancedOptionsEnableSubsets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    any_endpoint: {
      value: cdktf.booleanToHclTerraform(struct!.anyEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fail_request: {
      value: cdktf.booleanToHclTerraform(struct!.failRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_subset: {
      value: httpLoadbalancerDefaultPoolAdvancedOptionsEnableSubsetsDefaultSubsetToHclTerraform(struct!.defaultSubset),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerDefaultPoolAdvancedOptionsEnableSubsetsDefaultSubsetList",
    },
    endpoint_subsets: {
      value: cdktf.listMapperHcl(httpLoadbalancerDefaultPoolAdvancedOptionsEnableSubsetsEndpointSubsetsToHclTerraform, true)(struct!.endpointSubsets),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerDefaultPoolAdvancedOptionsEnableSubsetsEndpointSubsetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerDefaultPoolAdvancedOptionsEnableSubsetsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerDefaultPoolAdvancedOptionsEnableSubsets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyEndpoint = this._anyEndpoint;
    }
    if (this._failRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.failRequest = this._failRequest;
    }
    if (this._defaultSubset?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultSubset = this._defaultSubset?.internalValue;
    }
    if (this._endpointSubsets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointSubsets = this._endpointSubsets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerDefaultPoolAdvancedOptionsEnableSubsets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._anyEndpoint = undefined;
      this._failRequest = undefined;
      this._defaultSubset.internalValue = undefined;
      this._endpointSubsets.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._anyEndpoint = value.anyEndpoint;
      this._failRequest = value.failRequest;
      this._defaultSubset.internalValue = value.defaultSubset;
      this._endpointSubsets.internalValue = value.endpointSubsets;
    }
  }

  // any_endpoint - computed: false, optional: true, required: false
  private _anyEndpoint?: boolean | cdktf.IResolvable; 
  public get anyEndpoint() {
    return this.getBooleanAttribute('any_endpoint');
  }
  public set anyEndpoint(value: boolean | cdktf.IResolvable) {
    this._anyEndpoint = value;
  }
  public resetAnyEndpoint() {
    this._anyEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyEndpointInput() {
    return this._anyEndpoint;
  }

  // fail_request - computed: false, optional: true, required: false
  private _failRequest?: boolean | cdktf.IResolvable; 
  public get failRequest() {
    return this.getBooleanAttribute('fail_request');
  }
  public set failRequest(value: boolean | cdktf.IResolvable) {
    this._failRequest = value;
  }
  public resetFailRequest() {
    this._failRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failRequestInput() {
    return this._failRequest;
  }

  // default_subset - computed: false, optional: true, required: false
  private _defaultSubset = new HttpLoadbalancerDefaultPoolAdvancedOptionsEnableSubsetsDefaultSubsetOutputReference(this, "default_subset");
  public get defaultSubset() {
    return this._defaultSubset;
  }
  public putDefaultSubset(value: HttpLoadbalancerDefaultPoolAdvancedOptionsEnableSubsetsDefaultSubset) {
    this._defaultSubset.internalValue = value;
  }
  public resetDefaultSubset() {
    this._defaultSubset.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSubsetInput() {
    return this._defaultSubset.internalValue;
  }

  // endpoint_subsets - computed: false, optional: false, required: true
  private _endpointSubsets = new HttpLoadbalancerDefaultPoolAdvancedOptionsEnableSubsetsEndpointSubsetsList(this, "endpoint_subsets", false);
  public get endpointSubsets() {
    return this._endpointSubsets;
  }
  public putEndpointSubsets(value: HttpLoadbalancerDefaultPoolAdvancedOptionsEnableSubsetsEndpointSubsets[] | cdktf.IResolvable) {
    this._endpointSubsets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointSubsetsInput() {
    return this._endpointSubsets.internalValue;
  }
}
export interface HttpLoadbalancerDefaultPoolAdvancedOptionsHeaderTransformationType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#default_header_transformation HttpLoadbalancer#default_header_transformation}
  */
  readonly defaultHeaderTransformation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#legacy_header_transformation HttpLoadbalancer#legacy_header_transformation}
  */
  readonly legacyHeaderTransformation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#preserve_case_header_transformation HttpLoadbalancer#preserve_case_header_transformation}
  */
  readonly preserveCaseHeaderTransformation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#proper_case_header_transformation HttpLoadbalancer#proper_case_header_transformation}
  */
  readonly properCaseHeaderTransformation?: boolean | cdktf.IResolvable;
}

export function httpLoadbalancerDefaultPoolAdvancedOptionsHeaderTransformationTypeToTerraform(struct?: HttpLoadbalancerDefaultPoolAdvancedOptionsHeaderTransformationTypeOutputReference | HttpLoadbalancerDefaultPoolAdvancedOptionsHeaderTransformationType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_header_transformation: cdktf.booleanToTerraform(struct!.defaultHeaderTransformation),
    legacy_header_transformation: cdktf.booleanToTerraform(struct!.legacyHeaderTransformation),
    preserve_case_header_transformation: cdktf.booleanToTerraform(struct!.preserveCaseHeaderTransformation),
    proper_case_header_transformation: cdktf.booleanToTerraform(struct!.properCaseHeaderTransformation),
  }
}


export function httpLoadbalancerDefaultPoolAdvancedOptionsHeaderTransformationTypeToHclTerraform(struct?: HttpLoadbalancerDefaultPoolAdvancedOptionsHeaderTransformationTypeOutputReference | HttpLoadbalancerDefaultPoolAdvancedOptionsHeaderTransformationType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_header_transformation: {
      value: cdktf.booleanToHclTerraform(struct!.defaultHeaderTransformation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    legacy_header_transformation: {
      value: cdktf.booleanToHclTerraform(struct!.legacyHeaderTransformation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    preserve_case_header_transformation: {
      value: cdktf.booleanToHclTerraform(struct!.preserveCaseHeaderTransformation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    proper_case_header_transformation: {
      value: cdktf.booleanToHclTerraform(struct!.properCaseHeaderTransformation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerDefaultPoolAdvancedOptionsHeaderTransformationTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerDefaultPoolAdvancedOptionsHeaderTransformationType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultHeaderTransformation !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultHeaderTransformation = this._defaultHeaderTransformation;
    }
    if (this._legacyHeaderTransformation !== undefined) {
      hasAnyValues = true;
      internalValueResult.legacyHeaderTransformation = this._legacyHeaderTransformation;
    }
    if (this._preserveCaseHeaderTransformation !== undefined) {
      hasAnyValues = true;
      internalValueResult.preserveCaseHeaderTransformation = this._preserveCaseHeaderTransformation;
    }
    if (this._properCaseHeaderTransformation !== undefined) {
      hasAnyValues = true;
      internalValueResult.properCaseHeaderTransformation = this._properCaseHeaderTransformation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerDefaultPoolAdvancedOptionsHeaderTransformationType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultHeaderTransformation = undefined;
      this._legacyHeaderTransformation = undefined;
      this._preserveCaseHeaderTransformation = undefined;
      this._properCaseHeaderTransformation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultHeaderTransformation = value.defaultHeaderTransformation;
      this._legacyHeaderTransformation = value.legacyHeaderTransformation;
      this._preserveCaseHeaderTransformation = value.preserveCaseHeaderTransformation;
      this._properCaseHeaderTransformation = value.properCaseHeaderTransformation;
    }
  }

  // default_header_transformation - computed: false, optional: true, required: false
  private _defaultHeaderTransformation?: boolean | cdktf.IResolvable; 
  public get defaultHeaderTransformation() {
    return this.getBooleanAttribute('default_header_transformation');
  }
  public set defaultHeaderTransformation(value: boolean | cdktf.IResolvable) {
    this._defaultHeaderTransformation = value;
  }
  public resetDefaultHeaderTransformation() {
    this._defaultHeaderTransformation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultHeaderTransformationInput() {
    return this._defaultHeaderTransformation;
  }

  // legacy_header_transformation - computed: false, optional: true, required: false
  private _legacyHeaderTransformation?: boolean | cdktf.IResolvable; 
  public get legacyHeaderTransformation() {
    return this.getBooleanAttribute('legacy_header_transformation');
  }
  public set legacyHeaderTransformation(value: boolean | cdktf.IResolvable) {
    this._legacyHeaderTransformation = value;
  }
  public resetLegacyHeaderTransformation() {
    this._legacyHeaderTransformation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get legacyHeaderTransformationInput() {
    return this._legacyHeaderTransformation;
  }

  // preserve_case_header_transformation - computed: false, optional: true, required: false
  private _preserveCaseHeaderTransformation?: boolean | cdktf.IResolvable; 
  public get preserveCaseHeaderTransformation() {
    return this.getBooleanAttribute('preserve_case_header_transformation');
  }
  public set preserveCaseHeaderTransformation(value: boolean | cdktf.IResolvable) {
    this._preserveCaseHeaderTransformation = value;
  }
  public resetPreserveCaseHeaderTransformation() {
    this._preserveCaseHeaderTransformation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveCaseHeaderTransformationInput() {
    return this._preserveCaseHeaderTransformation;
  }

  // proper_case_header_transformation - computed: false, optional: true, required: false
  private _properCaseHeaderTransformation?: boolean | cdktf.IResolvable; 
  public get properCaseHeaderTransformation() {
    return this.getBooleanAttribute('proper_case_header_transformation');
  }
  public set properCaseHeaderTransformation(value: boolean | cdktf.IResolvable) {
    this._properCaseHeaderTransformation = value;
  }
  public resetProperCaseHeaderTransformation() {
    this._properCaseHeaderTransformation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get properCaseHeaderTransformationInput() {
    return this._properCaseHeaderTransformation;
  }
}
export interface HttpLoadbalancerDefaultPoolAdvancedOptionsHttp1ConfigHeaderTransformation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#default_header_transformation HttpLoadbalancer#default_header_transformation}
  */
  readonly defaultHeaderTransformation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#legacy_header_transformation HttpLoadbalancer#legacy_header_transformation}
  */
  readonly legacyHeaderTransformation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#preserve_case_header_transformation HttpLoadbalancer#preserve_case_header_transformation}
  */
  readonly preserveCaseHeaderTransformation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#proper_case_header_transformation HttpLoadbalancer#proper_case_header_transformation}
  */
  readonly properCaseHeaderTransformation?: boolean | cdktf.IResolvable;
}

export function httpLoadbalancerDefaultPoolAdvancedOptionsHttp1ConfigHeaderTransformationToTerraform(struct?: HttpLoadbalancerDefaultPoolAdvancedOptionsHttp1ConfigHeaderTransformationOutputReference | HttpLoadbalancerDefaultPoolAdvancedOptionsHttp1ConfigHeaderTransformation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_header_transformation: cdktf.booleanToTerraform(struct!.defaultHeaderTransformation),
    legacy_header_transformation: cdktf.booleanToTerraform(struct!.legacyHeaderTransformation),
    preserve_case_header_transformation: cdktf.booleanToTerraform(struct!.preserveCaseHeaderTransformation),
    proper_case_header_transformation: cdktf.booleanToTerraform(struct!.properCaseHeaderTransformation),
  }
}


export function httpLoadbalancerDefaultPoolAdvancedOptionsHttp1ConfigHeaderTransformationToHclTerraform(struct?: HttpLoadbalancerDefaultPoolAdvancedOptionsHttp1ConfigHeaderTransformationOutputReference | HttpLoadbalancerDefaultPoolAdvancedOptionsHttp1ConfigHeaderTransformation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_header_transformation: {
      value: cdktf.booleanToHclTerraform(struct!.defaultHeaderTransformation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    legacy_header_transformation: {
      value: cdktf.booleanToHclTerraform(struct!.legacyHeaderTransformation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    preserve_case_header_transformation: {
      value: cdktf.booleanToHclTerraform(struct!.preserveCaseHeaderTransformation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    proper_case_header_transformation: {
      value: cdktf.booleanToHclTerraform(struct!.properCaseHeaderTransformation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerDefaultPoolAdvancedOptionsHttp1ConfigHeaderTransformationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerDefaultPoolAdvancedOptionsHttp1ConfigHeaderTransformation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultHeaderTransformation !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultHeaderTransformation = this._defaultHeaderTransformation;
    }
    if (this._legacyHeaderTransformation !== undefined) {
      hasAnyValues = true;
      internalValueResult.legacyHeaderTransformation = this._legacyHeaderTransformation;
    }
    if (this._preserveCaseHeaderTransformation !== undefined) {
      hasAnyValues = true;
      internalValueResult.preserveCaseHeaderTransformation = this._preserveCaseHeaderTransformation;
    }
    if (this._properCaseHeaderTransformation !== undefined) {
      hasAnyValues = true;
      internalValueResult.properCaseHeaderTransformation = this._properCaseHeaderTransformation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerDefaultPoolAdvancedOptionsHttp1ConfigHeaderTransformation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultHeaderTransformation = undefined;
      this._legacyHeaderTransformation = undefined;
      this._preserveCaseHeaderTransformation = undefined;
      this._properCaseHeaderTransformation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultHeaderTransformation = value.defaultHeaderTransformation;
      this._legacyHeaderTransformation = value.legacyHeaderTransformation;
      this._preserveCaseHeaderTransformation = value.preserveCaseHeaderTransformation;
      this._properCaseHeaderTransformation = value.properCaseHeaderTransformation;
    }
  }

  // default_header_transformation - computed: false, optional: true, required: false
  private _defaultHeaderTransformation?: boolean | cdktf.IResolvable; 
  public get defaultHeaderTransformation() {
    return this.getBooleanAttribute('default_header_transformation');
  }
  public set defaultHeaderTransformation(value: boolean | cdktf.IResolvable) {
    this._defaultHeaderTransformation = value;
  }
  public resetDefaultHeaderTransformation() {
    this._defaultHeaderTransformation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultHeaderTransformationInput() {
    return this._defaultHeaderTransformation;
  }

  // legacy_header_transformation - computed: false, optional: true, required: false
  private _legacyHeaderTransformation?: boolean | cdktf.IResolvable; 
  public get legacyHeaderTransformation() {
    return this.getBooleanAttribute('legacy_header_transformation');
  }
  public set legacyHeaderTransformation(value: boolean | cdktf.IResolvable) {
    this._legacyHeaderTransformation = value;
  }
  public resetLegacyHeaderTransformation() {
    this._legacyHeaderTransformation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get legacyHeaderTransformationInput() {
    return this._legacyHeaderTransformation;
  }

  // preserve_case_header_transformation - computed: false, optional: true, required: false
  private _preserveCaseHeaderTransformation?: boolean | cdktf.IResolvable; 
  public get preserveCaseHeaderTransformation() {
    return this.getBooleanAttribute('preserve_case_header_transformation');
  }
  public set preserveCaseHeaderTransformation(value: boolean | cdktf.IResolvable) {
    this._preserveCaseHeaderTransformation = value;
  }
  public resetPreserveCaseHeaderTransformation() {
    this._preserveCaseHeaderTransformation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveCaseHeaderTransformationInput() {
    return this._preserveCaseHeaderTransformation;
  }

  // proper_case_header_transformation - computed: false, optional: true, required: false
  private _properCaseHeaderTransformation?: boolean | cdktf.IResolvable; 
  public get properCaseHeaderTransformation() {
    return this.getBooleanAttribute('proper_case_header_transformation');
  }
  public set properCaseHeaderTransformation(value: boolean | cdktf.IResolvable) {
    this._properCaseHeaderTransformation = value;
  }
  public resetProperCaseHeaderTransformation() {
    this._properCaseHeaderTransformation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get properCaseHeaderTransformationInput() {
    return this._properCaseHeaderTransformation;
  }
}
export interface HttpLoadbalancerDefaultPoolAdvancedOptionsHttp1Config {
  /**
  * header_transformation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#header_transformation HttpLoadbalancer#header_transformation}
  */
  readonly headerTransformation?: HttpLoadbalancerDefaultPoolAdvancedOptionsHttp1ConfigHeaderTransformation;
}

export function httpLoadbalancerDefaultPoolAdvancedOptionsHttp1ConfigToTerraform(struct?: HttpLoadbalancerDefaultPoolAdvancedOptionsHttp1ConfigOutputReference | HttpLoadbalancerDefaultPoolAdvancedOptionsHttp1Config): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_transformation: httpLoadbalancerDefaultPoolAdvancedOptionsHttp1ConfigHeaderTransformationToTerraform(struct!.headerTransformation),
  }
}


export function httpLoadbalancerDefaultPoolAdvancedOptionsHttp1ConfigToHclTerraform(struct?: HttpLoadbalancerDefaultPoolAdvancedOptionsHttp1ConfigOutputReference | HttpLoadbalancerDefaultPoolAdvancedOptionsHttp1Config): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_transformation: {
      value: httpLoadbalancerDefaultPoolAdvancedOptionsHttp1ConfigHeaderTransformationToHclTerraform(struct!.headerTransformation),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerDefaultPoolAdvancedOptionsHttp1ConfigHeaderTransformationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerDefaultPoolAdvancedOptionsHttp1ConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerDefaultPoolAdvancedOptionsHttp1Config | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerTransformation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerTransformation = this._headerTransformation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerDefaultPoolAdvancedOptionsHttp1Config | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headerTransformation.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headerTransformation.internalValue = value.headerTransformation;
    }
  }

  // header_transformation - computed: false, optional: true, required: false
  private _headerTransformation = new HttpLoadbalancerDefaultPoolAdvancedOptionsHttp1ConfigHeaderTransformationOutputReference(this, "header_transformation");
  public get headerTransformation() {
    return this._headerTransformation;
  }
  public putHeaderTransformation(value: HttpLoadbalancerDefaultPoolAdvancedOptionsHttp1ConfigHeaderTransformation) {
    this._headerTransformation.internalValue = value;
  }
  public resetHeaderTransformation() {
    this._headerTransformation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerTransformationInput() {
    return this._headerTransformation.internalValue;
  }
}
export interface HttpLoadbalancerDefaultPoolAdvancedOptionsHttp2Options {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#enabled HttpLoadbalancer#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function httpLoadbalancerDefaultPoolAdvancedOptionsHttp2OptionsToTerraform(struct?: HttpLoadbalancerDefaultPoolAdvancedOptionsHttp2OptionsOutputReference | HttpLoadbalancerDefaultPoolAdvancedOptionsHttp2Options): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function httpLoadbalancerDefaultPoolAdvancedOptionsHttp2OptionsToHclTerraform(struct?: HttpLoadbalancerDefaultPoolAdvancedOptionsHttp2OptionsOutputReference | HttpLoadbalancerDefaultPoolAdvancedOptionsHttp2Options): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerDefaultPoolAdvancedOptionsHttp2OptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerDefaultPoolAdvancedOptionsHttp2Options | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerDefaultPoolAdvancedOptionsHttp2Options | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface HttpLoadbalancerDefaultPoolAdvancedOptionsOutlierDetection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#base_ejection_time HttpLoadbalancer#base_ejection_time}
  */
  readonly baseEjectionTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#consecutive_5xx HttpLoadbalancer#consecutive_5xx}
  */
  readonly consecutive5Xx?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#consecutive_gateway_failure HttpLoadbalancer#consecutive_gateway_failure}
  */
  readonly consecutiveGatewayFailure?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#interval HttpLoadbalancer#interval}
  */
  readonly interval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#max_ejection_percent HttpLoadbalancer#max_ejection_percent}
  */
  readonly maxEjectionPercent?: number;
}

export function httpLoadbalancerDefaultPoolAdvancedOptionsOutlierDetectionToTerraform(struct?: HttpLoadbalancerDefaultPoolAdvancedOptionsOutlierDetectionOutputReference | HttpLoadbalancerDefaultPoolAdvancedOptionsOutlierDetection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_ejection_time: cdktf.numberToTerraform(struct!.baseEjectionTime),
    consecutive_5xx: cdktf.numberToTerraform(struct!.consecutive5Xx),
    consecutive_gateway_failure: cdktf.numberToTerraform(struct!.consecutiveGatewayFailure),
    interval: cdktf.numberToTerraform(struct!.interval),
    max_ejection_percent: cdktf.numberToTerraform(struct!.maxEjectionPercent),
  }
}


export function httpLoadbalancerDefaultPoolAdvancedOptionsOutlierDetectionToHclTerraform(struct?: HttpLoadbalancerDefaultPoolAdvancedOptionsOutlierDetectionOutputReference | HttpLoadbalancerDefaultPoolAdvancedOptionsOutlierDetection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_ejection_time: {
      value: cdktf.numberToHclTerraform(struct!.baseEjectionTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    consecutive_5xx: {
      value: cdktf.numberToHclTerraform(struct!.consecutive5Xx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    consecutive_gateway_failure: {
      value: cdktf.numberToHclTerraform(struct!.consecutiveGatewayFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_ejection_percent: {
      value: cdktf.numberToHclTerraform(struct!.maxEjectionPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerDefaultPoolAdvancedOptionsOutlierDetectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerDefaultPoolAdvancedOptionsOutlierDetection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseEjectionTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseEjectionTime = this._baseEjectionTime;
    }
    if (this._consecutive5Xx !== undefined) {
      hasAnyValues = true;
      internalValueResult.consecutive5Xx = this._consecutive5Xx;
    }
    if (this._consecutiveGatewayFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.consecutiveGatewayFailure = this._consecutiveGatewayFailure;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._maxEjectionPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxEjectionPercent = this._maxEjectionPercent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerDefaultPoolAdvancedOptionsOutlierDetection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._baseEjectionTime = undefined;
      this._consecutive5Xx = undefined;
      this._consecutiveGatewayFailure = undefined;
      this._interval = undefined;
      this._maxEjectionPercent = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._baseEjectionTime = value.baseEjectionTime;
      this._consecutive5Xx = value.consecutive5Xx;
      this._consecutiveGatewayFailure = value.consecutiveGatewayFailure;
      this._interval = value.interval;
      this._maxEjectionPercent = value.maxEjectionPercent;
    }
  }

  // base_ejection_time - computed: false, optional: true, required: false
  private _baseEjectionTime?: number; 
  public get baseEjectionTime() {
    return this.getNumberAttribute('base_ejection_time');
  }
  public set baseEjectionTime(value: number) {
    this._baseEjectionTime = value;
  }
  public resetBaseEjectionTime() {
    this._baseEjectionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseEjectionTimeInput() {
    return this._baseEjectionTime;
  }

  // consecutive_5xx - computed: false, optional: true, required: false
  private _consecutive5Xx?: number; 
  public get consecutive5Xx() {
    return this.getNumberAttribute('consecutive_5xx');
  }
  public set consecutive5Xx(value: number) {
    this._consecutive5Xx = value;
  }
  public resetConsecutive5Xx() {
    this._consecutive5Xx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consecutive5XxInput() {
    return this._consecutive5Xx;
  }

  // consecutive_gateway_failure - computed: false, optional: true, required: false
  private _consecutiveGatewayFailure?: number; 
  public get consecutiveGatewayFailure() {
    return this.getNumberAttribute('consecutive_gateway_failure');
  }
  public set consecutiveGatewayFailure(value: number) {
    this._consecutiveGatewayFailure = value;
  }
  public resetConsecutiveGatewayFailure() {
    this._consecutiveGatewayFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consecutiveGatewayFailureInput() {
    return this._consecutiveGatewayFailure;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // max_ejection_percent - computed: false, optional: true, required: false
  private _maxEjectionPercent?: number; 
  public get maxEjectionPercent() {
    return this.getNumberAttribute('max_ejection_percent');
  }
  public set maxEjectionPercent(value: number) {
    this._maxEjectionPercent = value;
  }
  public resetMaxEjectionPercent() {
    this._maxEjectionPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEjectionPercentInput() {
    return this._maxEjectionPercent;
  }
}
export interface HttpLoadbalancerDefaultPoolAdvancedOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#auto_http_config HttpLoadbalancer#auto_http_config}
  */
  readonly autoHttpConfig?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#connection_timeout HttpLoadbalancer#connection_timeout}
  */
  readonly connectionTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#default_circuit_breaker HttpLoadbalancer#default_circuit_breaker}
  */
  readonly defaultCircuitBreaker?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#disable_circuit_breaker HttpLoadbalancer#disable_circuit_breaker}
  */
  readonly disableCircuitBreaker?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#disable_lb_source_ip_persistance HttpLoadbalancer#disable_lb_source_ip_persistance}
  */
  readonly disableLbSourceIpPersistance?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#disable_outlier_detection HttpLoadbalancer#disable_outlier_detection}
  */
  readonly disableOutlierDetection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#disable_proxy_protocol HttpLoadbalancer#disable_proxy_protocol}
  */
  readonly disableProxyProtocol?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#disable_subsets HttpLoadbalancer#disable_subsets}
  */
  readonly disableSubsets?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#enable_lb_source_ip_persistance HttpLoadbalancer#enable_lb_source_ip_persistance}
  */
  readonly enableLbSourceIpPersistance?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#http_idle_timeout HttpLoadbalancer#http_idle_timeout}
  */
  readonly httpIdleTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#no_panic_threshold HttpLoadbalancer#no_panic_threshold}
  */
  readonly noPanicThreshold?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#panic_threshold HttpLoadbalancer#panic_threshold}
  */
  readonly panicThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#proxy_protocol_v1 HttpLoadbalancer#proxy_protocol_v1}
  */
  readonly proxyProtocolV1?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#proxy_protocol_v2 HttpLoadbalancer#proxy_protocol_v2}
  */
  readonly proxyProtocolV2?: boolean | cdktf.IResolvable;
  /**
  * circuit_breaker block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#circuit_breaker HttpLoadbalancer#circuit_breaker}
  */
  readonly circuitBreaker?: HttpLoadbalancerDefaultPoolAdvancedOptionsCircuitBreaker;
  /**
  * enable_subsets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#enable_subsets HttpLoadbalancer#enable_subsets}
  */
  readonly enableSubsets?: HttpLoadbalancerDefaultPoolAdvancedOptionsEnableSubsets;
  /**
  * header_transformation_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#header_transformation_type HttpLoadbalancer#header_transformation_type}
  */
  readonly headerTransformationType?: HttpLoadbalancerDefaultPoolAdvancedOptionsHeaderTransformationType;
  /**
  * http1_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#http1_config HttpLoadbalancer#http1_config}
  */
  readonly http1Config?: HttpLoadbalancerDefaultPoolAdvancedOptionsHttp1Config;
  /**
  * http2_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#http2_options HttpLoadbalancer#http2_options}
  */
  readonly http2Options?: HttpLoadbalancerDefaultPoolAdvancedOptionsHttp2Options;
  /**
  * outlier_detection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#outlier_detection HttpLoadbalancer#outlier_detection}
  */
  readonly outlierDetection?: HttpLoadbalancerDefaultPoolAdvancedOptionsOutlierDetection;
}

export function httpLoadbalancerDefaultPoolAdvancedOptionsToTerraform(struct?: HttpLoadbalancerDefaultPoolAdvancedOptionsOutputReference | HttpLoadbalancerDefaultPoolAdvancedOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_http_config: cdktf.booleanToTerraform(struct!.autoHttpConfig),
    connection_timeout: cdktf.numberToTerraform(struct!.connectionTimeout),
    default_circuit_breaker: cdktf.booleanToTerraform(struct!.defaultCircuitBreaker),
    disable_circuit_breaker: cdktf.booleanToTerraform(struct!.disableCircuitBreaker),
    disable_lb_source_ip_persistance: cdktf.booleanToTerraform(struct!.disableLbSourceIpPersistance),
    disable_outlier_detection: cdktf.booleanToTerraform(struct!.disableOutlierDetection),
    disable_proxy_protocol: cdktf.booleanToTerraform(struct!.disableProxyProtocol),
    disable_subsets: cdktf.booleanToTerraform(struct!.disableSubsets),
    enable_lb_source_ip_persistance: cdktf.booleanToTerraform(struct!.enableLbSourceIpPersistance),
    http_idle_timeout: cdktf.numberToTerraform(struct!.httpIdleTimeout),
    no_panic_threshold: cdktf.booleanToTerraform(struct!.noPanicThreshold),
    panic_threshold: cdktf.numberToTerraform(struct!.panicThreshold),
    proxy_protocol_v1: cdktf.booleanToTerraform(struct!.proxyProtocolV1),
    proxy_protocol_v2: cdktf.booleanToTerraform(struct!.proxyProtocolV2),
    circuit_breaker: httpLoadbalancerDefaultPoolAdvancedOptionsCircuitBreakerToTerraform(struct!.circuitBreaker),
    enable_subsets: httpLoadbalancerDefaultPoolAdvancedOptionsEnableSubsetsToTerraform(struct!.enableSubsets),
    header_transformation_type: httpLoadbalancerDefaultPoolAdvancedOptionsHeaderTransformationTypeToTerraform(struct!.headerTransformationType),
    http1_config: httpLoadbalancerDefaultPoolAdvancedOptionsHttp1ConfigToTerraform(struct!.http1Config),
    http2_options: httpLoadbalancerDefaultPoolAdvancedOptionsHttp2OptionsToTerraform(struct!.http2Options),
    outlier_detection: httpLoadbalancerDefaultPoolAdvancedOptionsOutlierDetectionToTerraform(struct!.outlierDetection),
  }
}


export function httpLoadbalancerDefaultPoolAdvancedOptionsToHclTerraform(struct?: HttpLoadbalancerDefaultPoolAdvancedOptionsOutputReference | HttpLoadbalancerDefaultPoolAdvancedOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_http_config: {
      value: cdktf.booleanToHclTerraform(struct!.autoHttpConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    connection_timeout: {
      value: cdktf.numberToHclTerraform(struct!.connectionTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    default_circuit_breaker: {
      value: cdktf.booleanToHclTerraform(struct!.defaultCircuitBreaker),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_circuit_breaker: {
      value: cdktf.booleanToHclTerraform(struct!.disableCircuitBreaker),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_lb_source_ip_persistance: {
      value: cdktf.booleanToHclTerraform(struct!.disableLbSourceIpPersistance),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_outlier_detection: {
      value: cdktf.booleanToHclTerraform(struct!.disableOutlierDetection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_proxy_protocol: {
      value: cdktf.booleanToHclTerraform(struct!.disableProxyProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_subsets: {
      value: cdktf.booleanToHclTerraform(struct!.disableSubsets),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_lb_source_ip_persistance: {
      value: cdktf.booleanToHclTerraform(struct!.enableLbSourceIpPersistance),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    http_idle_timeout: {
      value: cdktf.numberToHclTerraform(struct!.httpIdleTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_panic_threshold: {
      value: cdktf.booleanToHclTerraform(struct!.noPanicThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    panic_threshold: {
      value: cdktf.numberToHclTerraform(struct!.panicThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    proxy_protocol_v1: {
      value: cdktf.booleanToHclTerraform(struct!.proxyProtocolV1),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    proxy_protocol_v2: {
      value: cdktf.booleanToHclTerraform(struct!.proxyProtocolV2),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    circuit_breaker: {
      value: httpLoadbalancerDefaultPoolAdvancedOptionsCircuitBreakerToHclTerraform(struct!.circuitBreaker),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerDefaultPoolAdvancedOptionsCircuitBreakerList",
    },
    enable_subsets: {
      value: httpLoadbalancerDefaultPoolAdvancedOptionsEnableSubsetsToHclTerraform(struct!.enableSubsets),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerDefaultPoolAdvancedOptionsEnableSubsetsList",
    },
    header_transformation_type: {
      value: httpLoadbalancerDefaultPoolAdvancedOptionsHeaderTransformationTypeToHclTerraform(struct!.headerTransformationType),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerDefaultPoolAdvancedOptionsHeaderTransformationTypeList",
    },
    http1_config: {
      value: httpLoadbalancerDefaultPoolAdvancedOptionsHttp1ConfigToHclTerraform(struct!.http1Config),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerDefaultPoolAdvancedOptionsHttp1ConfigList",
    },
    http2_options: {
      value: httpLoadbalancerDefaultPoolAdvancedOptionsHttp2OptionsToHclTerraform(struct!.http2Options),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerDefaultPoolAdvancedOptionsHttp2OptionsList",
    },
    outlier_detection: {
      value: httpLoadbalancerDefaultPoolAdvancedOptionsOutlierDetectionToHclTerraform(struct!.outlierDetection),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerDefaultPoolAdvancedOptionsOutlierDetectionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerDefaultPoolAdvancedOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerDefaultPoolAdvancedOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoHttpConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoHttpConfig = this._autoHttpConfig;
    }
    if (this._connectionTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionTimeout = this._connectionTimeout;
    }
    if (this._defaultCircuitBreaker !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultCircuitBreaker = this._defaultCircuitBreaker;
    }
    if (this._disableCircuitBreaker !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableCircuitBreaker = this._disableCircuitBreaker;
    }
    if (this._disableLbSourceIpPersistance !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableLbSourceIpPersistance = this._disableLbSourceIpPersistance;
    }
    if (this._disableOutlierDetection !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableOutlierDetection = this._disableOutlierDetection;
    }
    if (this._disableProxyProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableProxyProtocol = this._disableProxyProtocol;
    }
    if (this._disableSubsets !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableSubsets = this._disableSubsets;
    }
    if (this._enableLbSourceIpPersistance !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableLbSourceIpPersistance = this._enableLbSourceIpPersistance;
    }
    if (this._httpIdleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpIdleTimeout = this._httpIdleTimeout;
    }
    if (this._noPanicThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.noPanicThreshold = this._noPanicThreshold;
    }
    if (this._panicThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.panicThreshold = this._panicThreshold;
    }
    if (this._proxyProtocolV1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyProtocolV1 = this._proxyProtocolV1;
    }
    if (this._proxyProtocolV2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyProtocolV2 = this._proxyProtocolV2;
    }
    if (this._circuitBreaker?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.circuitBreaker = this._circuitBreaker?.internalValue;
    }
    if (this._enableSubsets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSubsets = this._enableSubsets?.internalValue;
    }
    if (this._headerTransformationType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerTransformationType = this._headerTransformationType?.internalValue;
    }
    if (this._http1Config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.http1Config = this._http1Config?.internalValue;
    }
    if (this._http2Options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.http2Options = this._http2Options?.internalValue;
    }
    if (this._outlierDetection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outlierDetection = this._outlierDetection?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerDefaultPoolAdvancedOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoHttpConfig = undefined;
      this._connectionTimeout = undefined;
      this._defaultCircuitBreaker = undefined;
      this._disableCircuitBreaker = undefined;
      this._disableLbSourceIpPersistance = undefined;
      this._disableOutlierDetection = undefined;
      this._disableProxyProtocol = undefined;
      this._disableSubsets = undefined;
      this._enableLbSourceIpPersistance = undefined;
      this._httpIdleTimeout = undefined;
      this._noPanicThreshold = undefined;
      this._panicThreshold = undefined;
      this._proxyProtocolV1 = undefined;
      this._proxyProtocolV2 = undefined;
      this._circuitBreaker.internalValue = undefined;
      this._enableSubsets.internalValue = undefined;
      this._headerTransformationType.internalValue = undefined;
      this._http1Config.internalValue = undefined;
      this._http2Options.internalValue = undefined;
      this._outlierDetection.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoHttpConfig = value.autoHttpConfig;
      this._connectionTimeout = value.connectionTimeout;
      this._defaultCircuitBreaker = value.defaultCircuitBreaker;
      this._disableCircuitBreaker = value.disableCircuitBreaker;
      this._disableLbSourceIpPersistance = value.disableLbSourceIpPersistance;
      this._disableOutlierDetection = value.disableOutlierDetection;
      this._disableProxyProtocol = value.disableProxyProtocol;
      this._disableSubsets = value.disableSubsets;
      this._enableLbSourceIpPersistance = value.enableLbSourceIpPersistance;
      this._httpIdleTimeout = value.httpIdleTimeout;
      this._noPanicThreshold = value.noPanicThreshold;
      this._panicThreshold = value.panicThreshold;
      this._proxyProtocolV1 = value.proxyProtocolV1;
      this._proxyProtocolV2 = value.proxyProtocolV2;
      this._circuitBreaker.internalValue = value.circuitBreaker;
      this._enableSubsets.internalValue = value.enableSubsets;
      this._headerTransformationType.internalValue = value.headerTransformationType;
      this._http1Config.internalValue = value.http1Config;
      this._http2Options.internalValue = value.http2Options;
      this._outlierDetection.internalValue = value.outlierDetection;
    }
  }

  // auto_http_config - computed: false, optional: true, required: false
  private _autoHttpConfig?: boolean | cdktf.IResolvable; 
  public get autoHttpConfig() {
    return this.getBooleanAttribute('auto_http_config');
  }
  public set autoHttpConfig(value: boolean | cdktf.IResolvable) {
    this._autoHttpConfig = value;
  }
  public resetAutoHttpConfig() {
    this._autoHttpConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoHttpConfigInput() {
    return this._autoHttpConfig;
  }

  // connection_timeout - computed: false, optional: true, required: false
  private _connectionTimeout?: number; 
  public get connectionTimeout() {
    return this.getNumberAttribute('connection_timeout');
  }
  public set connectionTimeout(value: number) {
    this._connectionTimeout = value;
  }
  public resetConnectionTimeout() {
    this._connectionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionTimeoutInput() {
    return this._connectionTimeout;
  }

  // default_circuit_breaker - computed: false, optional: true, required: false
  private _defaultCircuitBreaker?: boolean | cdktf.IResolvable; 
  public get defaultCircuitBreaker() {
    return this.getBooleanAttribute('default_circuit_breaker');
  }
  public set defaultCircuitBreaker(value: boolean | cdktf.IResolvable) {
    this._defaultCircuitBreaker = value;
  }
  public resetDefaultCircuitBreaker() {
    this._defaultCircuitBreaker = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultCircuitBreakerInput() {
    return this._defaultCircuitBreaker;
  }

  // disable_circuit_breaker - computed: false, optional: true, required: false
  private _disableCircuitBreaker?: boolean | cdktf.IResolvable; 
  public get disableCircuitBreaker() {
    return this.getBooleanAttribute('disable_circuit_breaker');
  }
  public set disableCircuitBreaker(value: boolean | cdktf.IResolvable) {
    this._disableCircuitBreaker = value;
  }
  public resetDisableCircuitBreaker() {
    this._disableCircuitBreaker = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableCircuitBreakerInput() {
    return this._disableCircuitBreaker;
  }

  // disable_lb_source_ip_persistance - computed: false, optional: true, required: false
  private _disableLbSourceIpPersistance?: boolean | cdktf.IResolvable; 
  public get disableLbSourceIpPersistance() {
    return this.getBooleanAttribute('disable_lb_source_ip_persistance');
  }
  public set disableLbSourceIpPersistance(value: boolean | cdktf.IResolvable) {
    this._disableLbSourceIpPersistance = value;
  }
  public resetDisableLbSourceIpPersistance() {
    this._disableLbSourceIpPersistance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableLbSourceIpPersistanceInput() {
    return this._disableLbSourceIpPersistance;
  }

  // disable_outlier_detection - computed: false, optional: true, required: false
  private _disableOutlierDetection?: boolean | cdktf.IResolvable; 
  public get disableOutlierDetection() {
    return this.getBooleanAttribute('disable_outlier_detection');
  }
  public set disableOutlierDetection(value: boolean | cdktf.IResolvable) {
    this._disableOutlierDetection = value;
  }
  public resetDisableOutlierDetection() {
    this._disableOutlierDetection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableOutlierDetectionInput() {
    return this._disableOutlierDetection;
  }

  // disable_proxy_protocol - computed: false, optional: true, required: false
  private _disableProxyProtocol?: boolean | cdktf.IResolvable; 
  public get disableProxyProtocol() {
    return this.getBooleanAttribute('disable_proxy_protocol');
  }
  public set disableProxyProtocol(value: boolean | cdktf.IResolvable) {
    this._disableProxyProtocol = value;
  }
  public resetDisableProxyProtocol() {
    this._disableProxyProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableProxyProtocolInput() {
    return this._disableProxyProtocol;
  }

  // disable_subsets - computed: false, optional: true, required: false
  private _disableSubsets?: boolean | cdktf.IResolvable; 
  public get disableSubsets() {
    return this.getBooleanAttribute('disable_subsets');
  }
  public set disableSubsets(value: boolean | cdktf.IResolvable) {
    this._disableSubsets = value;
  }
  public resetDisableSubsets() {
    this._disableSubsets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableSubsetsInput() {
    return this._disableSubsets;
  }

  // enable_lb_source_ip_persistance - computed: false, optional: true, required: false
  private _enableLbSourceIpPersistance?: boolean | cdktf.IResolvable; 
  public get enableLbSourceIpPersistance() {
    return this.getBooleanAttribute('enable_lb_source_ip_persistance');
  }
  public set enableLbSourceIpPersistance(value: boolean | cdktf.IResolvable) {
    this._enableLbSourceIpPersistance = value;
  }
  public resetEnableLbSourceIpPersistance() {
    this._enableLbSourceIpPersistance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLbSourceIpPersistanceInput() {
    return this._enableLbSourceIpPersistance;
  }

  // http_idle_timeout - computed: false, optional: true, required: false
  private _httpIdleTimeout?: number; 
  public get httpIdleTimeout() {
    return this.getNumberAttribute('http_idle_timeout');
  }
  public set httpIdleTimeout(value: number) {
    this._httpIdleTimeout = value;
  }
  public resetHttpIdleTimeout() {
    this._httpIdleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpIdleTimeoutInput() {
    return this._httpIdleTimeout;
  }

  // no_panic_threshold - computed: false, optional: true, required: false
  private _noPanicThreshold?: boolean | cdktf.IResolvable; 
  public get noPanicThreshold() {
    return this.getBooleanAttribute('no_panic_threshold');
  }
  public set noPanicThreshold(value: boolean | cdktf.IResolvable) {
    this._noPanicThreshold = value;
  }
  public resetNoPanicThreshold() {
    this._noPanicThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noPanicThresholdInput() {
    return this._noPanicThreshold;
  }

  // panic_threshold - computed: false, optional: true, required: false
  private _panicThreshold?: number; 
  public get panicThreshold() {
    return this.getNumberAttribute('panic_threshold');
  }
  public set panicThreshold(value: number) {
    this._panicThreshold = value;
  }
  public resetPanicThreshold() {
    this._panicThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get panicThresholdInput() {
    return this._panicThreshold;
  }

  // proxy_protocol_v1 - computed: false, optional: true, required: false
  private _proxyProtocolV1?: boolean | cdktf.IResolvable; 
  public get proxyProtocolV1() {
    return this.getBooleanAttribute('proxy_protocol_v1');
  }
  public set proxyProtocolV1(value: boolean | cdktf.IResolvable) {
    this._proxyProtocolV1 = value;
  }
  public resetProxyProtocolV1() {
    this._proxyProtocolV1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyProtocolV1Input() {
    return this._proxyProtocolV1;
  }

  // proxy_protocol_v2 - computed: false, optional: true, required: false
  private _proxyProtocolV2?: boolean | cdktf.IResolvable; 
  public get proxyProtocolV2() {
    return this.getBooleanAttribute('proxy_protocol_v2');
  }
  public set proxyProtocolV2(value: boolean | cdktf.IResolvable) {
    this._proxyProtocolV2 = value;
  }
  public resetProxyProtocolV2() {
    this._proxyProtocolV2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyProtocolV2Input() {
    return this._proxyProtocolV2;
  }

  // circuit_breaker - computed: false, optional: true, required: false
  private _circuitBreaker = new HttpLoadbalancerDefaultPoolAdvancedOptionsCircuitBreakerOutputReference(this, "circuit_breaker");
  public get circuitBreaker() {
    return this._circuitBreaker;
  }
  public putCircuitBreaker(value: HttpLoadbalancerDefaultPoolAdvancedOptionsCircuitBreaker) {
    this._circuitBreaker.internalValue = value;
  }
  public resetCircuitBreaker() {
    this._circuitBreaker.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get circuitBreakerInput() {
    return this._circuitBreaker.internalValue;
  }

  // enable_subsets - computed: false, optional: true, required: false
  private _enableSubsets = new HttpLoadbalancerDefaultPoolAdvancedOptionsEnableSubsetsOutputReference(this, "enable_subsets");
  public get enableSubsets() {
    return this._enableSubsets;
  }
  public putEnableSubsets(value: HttpLoadbalancerDefaultPoolAdvancedOptionsEnableSubsets) {
    this._enableSubsets.internalValue = value;
  }
  public resetEnableSubsets() {
    this._enableSubsets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSubsetsInput() {
    return this._enableSubsets.internalValue;
  }

  // header_transformation_type - computed: false, optional: true, required: false
  private _headerTransformationType = new HttpLoadbalancerDefaultPoolAdvancedOptionsHeaderTransformationTypeOutputReference(this, "header_transformation_type");
  public get headerTransformationType() {
    return this._headerTransformationType;
  }
  public putHeaderTransformationType(value: HttpLoadbalancerDefaultPoolAdvancedOptionsHeaderTransformationType) {
    this._headerTransformationType.internalValue = value;
  }
  public resetHeaderTransformationType() {
    this._headerTransformationType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerTransformationTypeInput() {
    return this._headerTransformationType.internalValue;
  }

  // http1_config - computed: false, optional: true, required: false
  private _http1Config = new HttpLoadbalancerDefaultPoolAdvancedOptionsHttp1ConfigOutputReference(this, "http1_config");
  public get http1Config() {
    return this._http1Config;
  }
  public putHttp1Config(value: HttpLoadbalancerDefaultPoolAdvancedOptionsHttp1Config) {
    this._http1Config.internalValue = value;
  }
  public resetHttp1Config() {
    this._http1Config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http1ConfigInput() {
    return this._http1Config.internalValue;
  }

  // http2_options - computed: false, optional: true, required: false
  private _http2Options = new HttpLoadbalancerDefaultPoolAdvancedOptionsHttp2OptionsOutputReference(this, "http2_options");
  public get http2Options() {
    return this._http2Options;
  }
  public putHttp2Options(value: HttpLoadbalancerDefaultPoolAdvancedOptionsHttp2Options) {
    this._http2Options.internalValue = value;
  }
  public resetHttp2Options() {
    this._http2Options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2OptionsInput() {
    return this._http2Options.internalValue;
  }

  // outlier_detection - computed: false, optional: true, required: false
  private _outlierDetection = new HttpLoadbalancerDefaultPoolAdvancedOptionsOutlierDetectionOutputReference(this, "outlier_detection");
  public get outlierDetection() {
    return this._outlierDetection;
  }
  public putOutlierDetection(value: HttpLoadbalancerDefaultPoolAdvancedOptionsOutlierDetection) {
    this._outlierDetection.internalValue = value;
  }
  public resetOutlierDetection() {
    this._outlierDetection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outlierDetectionInput() {
    return this._outlierDetection.internalValue;
  }
}
export interface HttpLoadbalancerDefaultPoolHealthcheck {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerDefaultPoolHealthcheckToTerraform(struct?: HttpLoadbalancerDefaultPoolHealthcheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function httpLoadbalancerDefaultPoolHealthcheckToHclTerraform(struct?: HttpLoadbalancerDefaultPoolHealthcheck | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerDefaultPoolHealthcheckOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttpLoadbalancerDefaultPoolHealthcheck | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerDefaultPoolHealthcheck | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class HttpLoadbalancerDefaultPoolHealthcheckList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerDefaultPoolHealthcheck[] | cdktf.IResolvable

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
  public get(index: number): HttpLoadbalancerDefaultPoolHealthcheckOutputReference {
    return new HttpLoadbalancerDefaultPoolHealthcheckOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerDefaultPoolOriginServersCbipService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#service_name HttpLoadbalancer#service_name}
  */
  readonly serviceName: string;
}

export function httpLoadbalancerDefaultPoolOriginServersCbipServiceToTerraform(struct?: HttpLoadbalancerDefaultPoolOriginServersCbipServiceOutputReference | HttpLoadbalancerDefaultPoolOriginServersCbipService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_name: cdktf.stringToTerraform(struct!.serviceName),
  }
}


export function httpLoadbalancerDefaultPoolOriginServersCbipServiceToHclTerraform(struct?: HttpLoadbalancerDefaultPoolOriginServersCbipServiceOutputReference | HttpLoadbalancerDefaultPoolOriginServersCbipService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerDefaultPoolOriginServersCbipServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerDefaultPoolOriginServersCbipService | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerDefaultPoolOriginServersCbipService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._serviceName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._serviceName = value.serviceName;
    }
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }
}
export interface HttpLoadbalancerDefaultPoolOriginServersConsulServiceSiteLocatorSite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerDefaultPoolOriginServersConsulServiceSiteLocatorSiteToTerraform(struct?: HttpLoadbalancerDefaultPoolOriginServersConsulServiceSiteLocatorSiteOutputReference | HttpLoadbalancerDefaultPoolOriginServersConsulServiceSiteLocatorSite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function httpLoadbalancerDefaultPoolOriginServersConsulServiceSiteLocatorSiteToHclTerraform(struct?: HttpLoadbalancerDefaultPoolOriginServersConsulServiceSiteLocatorSiteOutputReference | HttpLoadbalancerDefaultPoolOriginServersConsulServiceSiteLocatorSite): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerDefaultPoolOriginServersConsulServiceSiteLocatorSiteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerDefaultPoolOriginServersConsulServiceSiteLocatorSite | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerDefaultPoolOriginServersConsulServiceSiteLocatorSite | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface HttpLoadbalancerDefaultPoolOriginServersConsulServiceSiteLocatorVirtualSite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerDefaultPoolOriginServersConsulServiceSiteLocatorVirtualSiteToTerraform(struct?: HttpLoadbalancerDefaultPoolOriginServersConsulServiceSiteLocatorVirtualSiteOutputReference | HttpLoadbalancerDefaultPoolOriginServersConsulServiceSiteLocatorVirtualSite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function httpLoadbalancerDefaultPoolOriginServersConsulServiceSiteLocatorVirtualSiteToHclTerraform(struct?: HttpLoadbalancerDefaultPoolOriginServersConsulServiceSiteLocatorVirtualSiteOutputReference | HttpLoadbalancerDefaultPoolOriginServersConsulServiceSiteLocatorVirtualSite): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerDefaultPoolOriginServersConsulServiceSiteLocatorVirtualSiteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerDefaultPoolOriginServersConsulServiceSiteLocatorVirtualSite | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerDefaultPoolOriginServersConsulServiceSiteLocatorVirtualSite | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface HttpLoadbalancerDefaultPoolOriginServersConsulServiceSiteLocator {
  /**
  * site block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#site HttpLoadbalancer#site}
  */
  readonly site?: HttpLoadbalancerDefaultPoolOriginServersConsulServiceSiteLocatorSite;
  /**
  * virtual_site block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#virtual_site HttpLoadbalancer#virtual_site}
  */
  readonly virtualSite?: HttpLoadbalancerDefaultPoolOriginServersConsulServiceSiteLocatorVirtualSite;
}

export function httpLoadbalancerDefaultPoolOriginServersConsulServiceSiteLocatorToTerraform(struct?: HttpLoadbalancerDefaultPoolOriginServersConsulServiceSiteLocatorOutputReference | HttpLoadbalancerDefaultPoolOriginServersConsulServiceSiteLocator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    site: httpLoadbalancerDefaultPoolOriginServersConsulServiceSiteLocatorSiteToTerraform(struct!.site),
    virtual_site: httpLoadbalancerDefaultPoolOriginServersConsulServiceSiteLocatorVirtualSiteToTerraform(struct!.virtualSite),
  }
}


export function httpLoadbalancerDefaultPoolOriginServersConsulServiceSiteLocatorToHclTerraform(struct?: HttpLoadbalancerDefaultPoolOriginServersConsulServiceSiteLocatorOutputReference | HttpLoadbalancerDefaultPoolOriginServersConsulServiceSiteLocator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    site: {
      value: httpLoadbalancerDefaultPoolOriginServersConsulServiceSiteLocatorSiteToHclTerraform(struct!.site),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerDefaultPoolOriginServersConsulServiceSiteLocatorSiteList",
    },
    virtual_site: {
      value: httpLoadbalancerDefaultPoolOriginServersConsulServiceSiteLocatorVirtualSiteToHclTerraform(struct!.virtualSite),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerDefaultPoolOriginServersConsulServiceSiteLocatorVirtualSiteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerDefaultPoolOriginServersConsulServiceSiteLocatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerDefaultPoolOriginServersConsulServiceSiteLocator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._site?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.site = this._site?.internalValue;
    }
    if (this._virtualSite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualSite = this._virtualSite?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerDefaultPoolOriginServersConsulServiceSiteLocator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._site.internalValue = undefined;
      this._virtualSite.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._site.internalValue = value.site;
      this._virtualSite.internalValue = value.virtualSite;
    }
  }

  // site - computed: false, optional: true, required: false
  private _site = new HttpLoadbalancerDefaultPoolOriginServersConsulServiceSiteLocatorSiteOutputReference(this, "site");
  public get site() {
    return this._site;
  }
  public putSite(value: HttpLoadbalancerDefaultPoolOriginServersConsulServiceSiteLocatorSite) {
    this._site.internalValue = value;
  }
  public resetSite() {
    this._site.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteInput() {
    return this._site.internalValue;
  }

  // virtual_site - computed: false, optional: true, required: false
  private _virtualSite = new HttpLoadbalancerDefaultPoolOriginServersConsulServiceSiteLocatorVirtualSiteOutputReference(this, "virtual_site");
  public get virtualSite() {
    return this._virtualSite;
  }
  public putVirtualSite(value: HttpLoadbalancerDefaultPoolOriginServersConsulServiceSiteLocatorVirtualSite) {
    this._virtualSite.internalValue = value;
  }
  public resetVirtualSite() {
    this._virtualSite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualSiteInput() {
    return this._virtualSite.internalValue;
  }
}
export interface HttpLoadbalancerDefaultPoolOriginServersConsulServiceSnatPoolSnatPool {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#ipv6_prefixes HttpLoadbalancer#ipv6_prefixes}
  */
  readonly ipv6Prefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#prefixes HttpLoadbalancer#prefixes}
  */
  readonly prefixes?: string[];
}

export function httpLoadbalancerDefaultPoolOriginServersConsulServiceSnatPoolSnatPoolToTerraform(struct?: HttpLoadbalancerDefaultPoolOriginServersConsulServiceSnatPoolSnatPoolOutputReference | HttpLoadbalancerDefaultPoolOriginServersConsulServiceSnatPoolSnatPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipv6Prefixes),
    prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prefixes),
  }
}


export function httpLoadbalancerDefaultPoolOriginServersConsulServiceSnatPoolSnatPoolToHclTerraform(struct?: HttpLoadbalancerDefaultPoolOriginServersConsulServiceSnatPoolSnatPoolOutputReference | HttpLoadbalancerDefaultPoolOriginServersConsulServiceSnatPoolSnatPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv6_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipv6Prefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.prefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerDefaultPoolOriginServersConsulServiceSnatPoolSnatPoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerDefaultPoolOriginServersConsulServiceSnatPoolSnatPool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv6Prefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Prefixes = this._ipv6Prefixes;
    }
    if (this._prefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixes = this._prefixes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerDefaultPoolOriginServersConsulServiceSnatPoolSnatPool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv6Prefixes = undefined;
      this._prefixes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv6Prefixes = value.ipv6Prefixes;
      this._prefixes = value.prefixes;
    }
  }

  // ipv6_prefixes - computed: false, optional: true, required: false
  private _ipv6Prefixes?: string[]; 
  public get ipv6Prefixes() {
    return this.getListAttribute('ipv6_prefixes');
  }
  public set ipv6Prefixes(value: string[]) {
    this._ipv6Prefixes = value;
  }
  public resetIpv6Prefixes() {
    this._ipv6Prefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PrefixesInput() {
    return this._ipv6Prefixes;
  }

  // prefixes - computed: false, optional: true, required: false
  private _prefixes?: string[]; 
  public get prefixes() {
    return this.getListAttribute('prefixes');
  }
  public set prefixes(value: string[]) {
    this._prefixes = value;
  }
  public resetPrefixes() {
    this._prefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixesInput() {
    return this._prefixes;
  }
}
export interface HttpLoadbalancerDefaultPoolOriginServersConsulServiceSnatPool {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#no_snat_pool HttpLoadbalancer#no_snat_pool}
  */
  readonly noSnatPool?: boolean | cdktf.IResolvable;
  /**
  * snat_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#snat_pool HttpLoadbalancer#snat_pool}
  */
  readonly snatPool?: HttpLoadbalancerDefaultPoolOriginServersConsulServiceSnatPoolSnatPool;
}

export function httpLoadbalancerDefaultPoolOriginServersConsulServiceSnatPoolToTerraform(struct?: HttpLoadbalancerDefaultPoolOriginServersConsulServiceSnatPoolOutputReference | HttpLoadbalancerDefaultPoolOriginServersConsulServiceSnatPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    no_snat_pool: cdktf.booleanToTerraform(struct!.noSnatPool),
    snat_pool: httpLoadbalancerDefaultPoolOriginServersConsulServiceSnatPoolSnatPoolToTerraform(struct!.snatPool),
  }
}


export function httpLoadbalancerDefaultPoolOriginServersConsulServiceSnatPoolToHclTerraform(struct?: HttpLoadbalancerDefaultPoolOriginServersConsulServiceSnatPoolOutputReference | HttpLoadbalancerDefaultPoolOriginServersConsulServiceSnatPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    no_snat_pool: {
      value: cdktf.booleanToHclTerraform(struct!.noSnatPool),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    snat_pool: {
      value: httpLoadbalancerDefaultPoolOriginServersConsulServiceSnatPoolSnatPoolToHclTerraform(struct!.snatPool),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerDefaultPoolOriginServersConsulServiceSnatPoolSnatPoolList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerDefaultPoolOriginServersConsulServiceSnatPoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerDefaultPoolOriginServersConsulServiceSnatPool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._noSnatPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.noSnatPool = this._noSnatPool;
    }
    if (this._snatPool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snatPool = this._snatPool?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerDefaultPoolOriginServersConsulServiceSnatPool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._noSnatPool = undefined;
      this._snatPool.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._noSnatPool = value.noSnatPool;
      this._snatPool.internalValue = value.snatPool;
    }
  }

  // no_snat_pool - computed: false, optional: true, required: false
  private _noSnatPool?: boolean | cdktf.IResolvable; 
  public get noSnatPool() {
    return this.getBooleanAttribute('no_snat_pool');
  }
  public set noSnatPool(value: boolean | cdktf.IResolvable) {
    this._noSnatPool = value;
  }
  public resetNoSnatPool() {
    this._noSnatPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noSnatPoolInput() {
    return this._noSnatPool;
  }

  // snat_pool - computed: false, optional: true, required: false
  private _snatPool = new HttpLoadbalancerDefaultPoolOriginServersConsulServiceSnatPoolSnatPoolOutputReference(this, "snat_pool");
  public get snatPool() {
    return this._snatPool;
  }
  public putSnatPool(value: HttpLoadbalancerDefaultPoolOriginServersConsulServiceSnatPoolSnatPool) {
    this._snatPool.internalValue = value;
  }
  public resetSnatPool() {
    this._snatPool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snatPoolInput() {
    return this._snatPool.internalValue;
  }
}
export interface HttpLoadbalancerDefaultPoolOriginServersConsulService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#inside_network HttpLoadbalancer#inside_network}
  */
  readonly insideNetwork?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#outside_network HttpLoadbalancer#outside_network}
  */
  readonly outsideNetwork?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#service_name HttpLoadbalancer#service_name}
  */
  readonly serviceName: string;
  /**
  * site_locator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#site_locator HttpLoadbalancer#site_locator}
  */
  readonly siteLocator: HttpLoadbalancerDefaultPoolOriginServersConsulServiceSiteLocator;
  /**
  * snat_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#snat_pool HttpLoadbalancer#snat_pool}
  */
  readonly snatPool?: HttpLoadbalancerDefaultPoolOriginServersConsulServiceSnatPool;
}

export function httpLoadbalancerDefaultPoolOriginServersConsulServiceToTerraform(struct?: HttpLoadbalancerDefaultPoolOriginServersConsulServiceOutputReference | HttpLoadbalancerDefaultPoolOriginServersConsulService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inside_network: cdktf.booleanToTerraform(struct!.insideNetwork),
    outside_network: cdktf.booleanToTerraform(struct!.outsideNetwork),
    service_name: cdktf.stringToTerraform(struct!.serviceName),
    site_locator: httpLoadbalancerDefaultPoolOriginServersConsulServiceSiteLocatorToTerraform(struct!.siteLocator),
    snat_pool: httpLoadbalancerDefaultPoolOriginServersConsulServiceSnatPoolToTerraform(struct!.snatPool),
  }
}


export function httpLoadbalancerDefaultPoolOriginServersConsulServiceToHclTerraform(struct?: HttpLoadbalancerDefaultPoolOriginServersConsulServiceOutputReference | HttpLoadbalancerDefaultPoolOriginServersConsulService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inside_network: {
      value: cdktf.booleanToHclTerraform(struct!.insideNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    outside_network: {
      value: cdktf.booleanToHclTerraform(struct!.outsideNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    service_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    site_locator: {
      value: httpLoadbalancerDefaultPoolOriginServersConsulServiceSiteLocatorToHclTerraform(struct!.siteLocator),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerDefaultPoolOriginServersConsulServiceSiteLocatorList",
    },
    snat_pool: {
      value: httpLoadbalancerDefaultPoolOriginServersConsulServiceSnatPoolToHclTerraform(struct!.snatPool),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerDefaultPoolOriginServersConsulServiceSnatPoolList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerDefaultPoolOriginServersConsulServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerDefaultPoolOriginServersConsulService | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._insideNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.insideNetwork = this._insideNetwork;
    }
    if (this._outsideNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.outsideNetwork = this._outsideNetwork;
    }
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    if (this._siteLocator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteLocator = this._siteLocator?.internalValue;
    }
    if (this._snatPool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snatPool = this._snatPool?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerDefaultPoolOriginServersConsulService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._insideNetwork = undefined;
      this._outsideNetwork = undefined;
      this._serviceName = undefined;
      this._siteLocator.internalValue = undefined;
      this._snatPool.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._insideNetwork = value.insideNetwork;
      this._outsideNetwork = value.outsideNetwork;
      this._serviceName = value.serviceName;
      this._siteLocator.internalValue = value.siteLocator;
      this._snatPool.internalValue = value.snatPool;
    }
  }

  // inside_network - computed: false, optional: true, required: false
  private _insideNetwork?: boolean | cdktf.IResolvable; 
  public get insideNetwork() {
    return this.getBooleanAttribute('inside_network');
  }
  public set insideNetwork(value: boolean | cdktf.IResolvable) {
    this._insideNetwork = value;
  }
  public resetInsideNetwork() {
    this._insideNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideNetworkInput() {
    return this._insideNetwork;
  }

  // outside_network - computed: false, optional: true, required: false
  private _outsideNetwork?: boolean | cdktf.IResolvable; 
  public get outsideNetwork() {
    return this.getBooleanAttribute('outside_network');
  }
  public set outsideNetwork(value: boolean | cdktf.IResolvable) {
    this._outsideNetwork = value;
  }
  public resetOutsideNetwork() {
    this._outsideNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outsideNetworkInput() {
    return this._outsideNetwork;
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // site_locator - computed: false, optional: false, required: true
  private _siteLocator = new HttpLoadbalancerDefaultPoolOriginServersConsulServiceSiteLocatorOutputReference(this, "site_locator");
  public get siteLocator() {
    return this._siteLocator;
  }
  public putSiteLocator(value: HttpLoadbalancerDefaultPoolOriginServersConsulServiceSiteLocator) {
    this._siteLocator.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteLocatorInput() {
    return this._siteLocator.internalValue;
  }

  // snat_pool - computed: false, optional: true, required: false
  private _snatPool = new HttpLoadbalancerDefaultPoolOriginServersConsulServiceSnatPoolOutputReference(this, "snat_pool");
  public get snatPool() {
    return this._snatPool;
  }
  public putSnatPool(value: HttpLoadbalancerDefaultPoolOriginServersConsulServiceSnatPool) {
    this._snatPool.internalValue = value;
  }
  public resetSnatPool() {
    this._snatPool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snatPoolInput() {
    return this._snatPool.internalValue;
  }
}
export interface HttpLoadbalancerDefaultPoolOriginServersCustomEndpointObjectEndpoint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerDefaultPoolOriginServersCustomEndpointObjectEndpointToTerraform(struct?: HttpLoadbalancerDefaultPoolOriginServersCustomEndpointObjectEndpointOutputReference | HttpLoadbalancerDefaultPoolOriginServersCustomEndpointObjectEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function httpLoadbalancerDefaultPoolOriginServersCustomEndpointObjectEndpointToHclTerraform(struct?: HttpLoadbalancerDefaultPoolOriginServersCustomEndpointObjectEndpointOutputReference | HttpLoadbalancerDefaultPoolOriginServersCustomEndpointObjectEndpoint): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerDefaultPoolOriginServersCustomEndpointObjectEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerDefaultPoolOriginServersCustomEndpointObjectEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerDefaultPoolOriginServersCustomEndpointObjectEndpoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface HttpLoadbalancerDefaultPoolOriginServersCustomEndpointObject {
  /**
  * endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#endpoint HttpLoadbalancer#endpoint}
  */
  readonly endpoint: HttpLoadbalancerDefaultPoolOriginServersCustomEndpointObjectEndpoint;
}

export function httpLoadbalancerDefaultPoolOriginServersCustomEndpointObjectToTerraform(struct?: HttpLoadbalancerDefaultPoolOriginServersCustomEndpointObjectOutputReference | HttpLoadbalancerDefaultPoolOriginServersCustomEndpointObject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint: httpLoadbalancerDefaultPoolOriginServersCustomEndpointObjectEndpointToTerraform(struct!.endpoint),
  }
}


export function httpLoadbalancerDefaultPoolOriginServersCustomEndpointObjectToHclTerraform(struct?: HttpLoadbalancerDefaultPoolOriginServersCustomEndpointObjectOutputReference | HttpLoadbalancerDefaultPoolOriginServersCustomEndpointObject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoint: {
      value: httpLoadbalancerDefaultPoolOriginServersCustomEndpointObjectEndpointToHclTerraform(struct!.endpoint),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerDefaultPoolOriginServersCustomEndpointObjectEndpointList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerDefaultPoolOriginServersCustomEndpointObjectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerDefaultPoolOriginServersCustomEndpointObject | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerDefaultPoolOriginServersCustomEndpointObject | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endpoint.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endpoint.internalValue = value.endpoint;
    }
  }

  // endpoint - computed: false, optional: false, required: true
  private _endpoint = new HttpLoadbalancerDefaultPoolOriginServersCustomEndpointObjectEndpointOutputReference(this, "endpoint");
  public get endpoint() {
    return this._endpoint;
  }
  public putEndpoint(value: HttpLoadbalancerDefaultPoolOriginServersCustomEndpointObjectEndpoint) {
    this._endpoint.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint.internalValue;
  }
}
export interface HttpLoadbalancerDefaultPoolOriginServersK8SServiceServiceSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#expressions HttpLoadbalancer#expressions}
  */
  readonly expressions: string[];
}

export function httpLoadbalancerDefaultPoolOriginServersK8SServiceServiceSelectorToTerraform(struct?: HttpLoadbalancerDefaultPoolOriginServersK8SServiceServiceSelectorOutputReference | HttpLoadbalancerDefaultPoolOriginServersK8SServiceServiceSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expressions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.expressions),
  }
}


export function httpLoadbalancerDefaultPoolOriginServersK8SServiceServiceSelectorToHclTerraform(struct?: HttpLoadbalancerDefaultPoolOriginServersK8SServiceServiceSelectorOutputReference | HttpLoadbalancerDefaultPoolOriginServersK8SServiceServiceSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expressions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.expressions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerDefaultPoolOriginServersK8SServiceServiceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerDefaultPoolOriginServersK8SServiceServiceSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expressions !== undefined) {
      hasAnyValues = true;
      internalValueResult.expressions = this._expressions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerDefaultPoolOriginServersK8SServiceServiceSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expressions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expressions = value.expressions;
    }
  }

  // expressions - computed: false, optional: false, required: true
  private _expressions?: string[]; 
  public get expressions() {
    return this.getListAttribute('expressions');
  }
  public set expressions(value: string[]) {
    this._expressions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionsInput() {
    return this._expressions;
  }
}
export interface HttpLoadbalancerDefaultPoolOriginServersK8SServiceSiteLocatorSite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerDefaultPoolOriginServersK8SServiceSiteLocatorSiteToTerraform(struct?: HttpLoadbalancerDefaultPoolOriginServersK8SServiceSiteLocatorSiteOutputReference | HttpLoadbalancerDefaultPoolOriginServersK8SServiceSiteLocatorSite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function httpLoadbalancerDefaultPoolOriginServersK8SServiceSiteLocatorSiteToHclTerraform(struct?: HttpLoadbalancerDefaultPoolOriginServersK8SServiceSiteLocatorSiteOutputReference | HttpLoadbalancerDefaultPoolOriginServersK8SServiceSiteLocatorSite): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerDefaultPoolOriginServersK8SServiceSiteLocatorSiteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerDefaultPoolOriginServersK8SServiceSiteLocatorSite | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerDefaultPoolOriginServersK8SServiceSiteLocatorSite | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface HttpLoadbalancerDefaultPoolOriginServersK8SServiceSiteLocatorVirtualSite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerDefaultPoolOriginServersK8SServiceSiteLocatorVirtualSiteToTerraform(struct?: HttpLoadbalancerDefaultPoolOriginServersK8SServiceSiteLocatorVirtualSiteOutputReference | HttpLoadbalancerDefaultPoolOriginServersK8SServiceSiteLocatorVirtualSite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function httpLoadbalancerDefaultPoolOriginServersK8SServiceSiteLocatorVirtualSiteToHclTerraform(struct?: HttpLoadbalancerDefaultPoolOriginServersK8SServiceSiteLocatorVirtualSiteOutputReference | HttpLoadbalancerDefaultPoolOriginServersK8SServiceSiteLocatorVirtualSite): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerDefaultPoolOriginServersK8SServiceSiteLocatorVirtualSiteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerDefaultPoolOriginServersK8SServiceSiteLocatorVirtualSite | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerDefaultPoolOriginServersK8SServiceSiteLocatorVirtualSite | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface HttpLoadbalancerDefaultPoolOriginServersK8SServiceSiteLocator {
  /**
  * site block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#site HttpLoadbalancer#site}
  */
  readonly site?: HttpLoadbalancerDefaultPoolOriginServersK8SServiceSiteLocatorSite;
  /**
  * virtual_site block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#virtual_site HttpLoadbalancer#virtual_site}
  */
  readonly virtualSite?: HttpLoadbalancerDefaultPoolOriginServersK8SServiceSiteLocatorVirtualSite;
}

export function httpLoadbalancerDefaultPoolOriginServersK8SServiceSiteLocatorToTerraform(struct?: HttpLoadbalancerDefaultPoolOriginServersK8SServiceSiteLocatorOutputReference | HttpLoadbalancerDefaultPoolOriginServersK8SServiceSiteLocator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    site: httpLoadbalancerDefaultPoolOriginServersK8SServiceSiteLocatorSiteToTerraform(struct!.site),
    virtual_site: httpLoadbalancerDefaultPoolOriginServersK8SServiceSiteLocatorVirtualSiteToTerraform(struct!.virtualSite),
  }
}


export function httpLoadbalancerDefaultPoolOriginServersK8SServiceSiteLocatorToHclTerraform(struct?: HttpLoadbalancerDefaultPoolOriginServersK8SServiceSiteLocatorOutputReference | HttpLoadbalancerDefaultPoolOriginServersK8SServiceSiteLocator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    site: {
      value: httpLoadbalancerDefaultPoolOriginServersK8SServiceSiteLocatorSiteToHclTerraform(struct!.site),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerDefaultPoolOriginServersK8SServiceSiteLocatorSiteList",
    },
    virtual_site: {
      value: httpLoadbalancerDefaultPoolOriginServersK8SServiceSiteLocatorVirtualSiteToHclTerraform(struct!.virtualSite),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerDefaultPoolOriginServersK8SServiceSiteLocatorVirtualSiteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerDefaultPoolOriginServersK8SServiceSiteLocatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerDefaultPoolOriginServersK8SServiceSiteLocator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._site?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.site = this._site?.internalValue;
    }
    if (this._virtualSite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualSite = this._virtualSite?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerDefaultPoolOriginServersK8SServiceSiteLocator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._site.internalValue = undefined;
      this._virtualSite.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._site.internalValue = value.site;
      this._virtualSite.internalValue = value.virtualSite;
    }
  }

  // site - computed: false, optional: true, required: false
  private _site = new HttpLoadbalancerDefaultPoolOriginServersK8SServiceSiteLocatorSiteOutputReference(this, "site");
  public get site() {
    return this._site;
  }
  public putSite(value: HttpLoadbalancerDefaultPoolOriginServersK8SServiceSiteLocatorSite) {
    this._site.internalValue = value;
  }
  public resetSite() {
    this._site.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteInput() {
    return this._site.internalValue;
  }

  // virtual_site - computed: false, optional: true, required: false
  private _virtualSite = new HttpLoadbalancerDefaultPoolOriginServersK8SServiceSiteLocatorVirtualSiteOutputReference(this, "virtual_site");
  public get virtualSite() {
    return this._virtualSite;
  }
  public putVirtualSite(value: HttpLoadbalancerDefaultPoolOriginServersK8SServiceSiteLocatorVirtualSite) {
    this._virtualSite.internalValue = value;
  }
  public resetVirtualSite() {
    this._virtualSite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualSiteInput() {
    return this._virtualSite.internalValue;
  }
}
export interface HttpLoadbalancerDefaultPoolOriginServersK8SServiceSnatPoolSnatPool {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#ipv6_prefixes HttpLoadbalancer#ipv6_prefixes}
  */
  readonly ipv6Prefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#prefixes HttpLoadbalancer#prefixes}
  */
  readonly prefixes?: string[];
}

export function httpLoadbalancerDefaultPoolOriginServersK8SServiceSnatPoolSnatPoolToTerraform(struct?: HttpLoadbalancerDefaultPoolOriginServersK8SServiceSnatPoolSnatPoolOutputReference | HttpLoadbalancerDefaultPoolOriginServersK8SServiceSnatPoolSnatPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipv6Prefixes),
    prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prefixes),
  }
}


export function httpLoadbalancerDefaultPoolOriginServersK8SServiceSnatPoolSnatPoolToHclTerraform(struct?: HttpLoadbalancerDefaultPoolOriginServersK8SServiceSnatPoolSnatPoolOutputReference | HttpLoadbalancerDefaultPoolOriginServersK8SServiceSnatPoolSnatPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv6_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipv6Prefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.prefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerDefaultPoolOriginServersK8SServiceSnatPoolSnatPoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerDefaultPoolOriginServersK8SServiceSnatPoolSnatPool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv6Prefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Prefixes = this._ipv6Prefixes;
    }
    if (this._prefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixes = this._prefixes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerDefaultPoolOriginServersK8SServiceSnatPoolSnatPool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv6Prefixes = undefined;
      this._prefixes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv6Prefixes = value.ipv6Prefixes;
      this._prefixes = value.prefixes;
    }
  }

  // ipv6_prefixes - computed: false, optional: true, required: false
  private _ipv6Prefixes?: string[]; 
  public get ipv6Prefixes() {
    return this.getListAttribute('ipv6_prefixes');
  }
  public set ipv6Prefixes(value: string[]) {
    this._ipv6Prefixes = value;
  }
  public resetIpv6Prefixes() {
    this._ipv6Prefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PrefixesInput() {
    return this._ipv6Prefixes;
  }

  // prefixes - computed: false, optional: true, required: false
  private _prefixes?: string[]; 
  public get prefixes() {
    return this.getListAttribute('prefixes');
  }
  public set prefixes(value: string[]) {
    this._prefixes = value;
  }
  public resetPrefixes() {
    this._prefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixesInput() {
    return this._prefixes;
  }
}
export interface HttpLoadbalancerDefaultPoolOriginServersK8SServiceSnatPool {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#no_snat_pool HttpLoadbalancer#no_snat_pool}
  */
  readonly noSnatPool?: boolean | cdktf.IResolvable;
  /**
  * snat_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#snat_pool HttpLoadbalancer#snat_pool}
  */
  readonly snatPool?: HttpLoadbalancerDefaultPoolOriginServersK8SServiceSnatPoolSnatPool;
}

export function httpLoadbalancerDefaultPoolOriginServersK8SServiceSnatPoolToTerraform(struct?: HttpLoadbalancerDefaultPoolOriginServersK8SServiceSnatPoolOutputReference | HttpLoadbalancerDefaultPoolOriginServersK8SServiceSnatPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    no_snat_pool: cdktf.booleanToTerraform(struct!.noSnatPool),
    snat_pool: httpLoadbalancerDefaultPoolOriginServersK8SServiceSnatPoolSnatPoolToTerraform(struct!.snatPool),
  }
}


export function httpLoadbalancerDefaultPoolOriginServersK8SServiceSnatPoolToHclTerraform(struct?: HttpLoadbalancerDefaultPoolOriginServersK8SServiceSnatPoolOutputReference | HttpLoadbalancerDefaultPoolOriginServersK8SServiceSnatPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    no_snat_pool: {
      value: cdktf.booleanToHclTerraform(struct!.noSnatPool),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    snat_pool: {
      value: httpLoadbalancerDefaultPoolOriginServersK8SServiceSnatPoolSnatPoolToHclTerraform(struct!.snatPool),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerDefaultPoolOriginServersK8SServiceSnatPoolSnatPoolList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerDefaultPoolOriginServersK8SServiceSnatPoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerDefaultPoolOriginServersK8SServiceSnatPool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._noSnatPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.noSnatPool = this._noSnatPool;
    }
    if (this._snatPool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snatPool = this._snatPool?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerDefaultPoolOriginServersK8SServiceSnatPool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._noSnatPool = undefined;
      this._snatPool.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._noSnatPool = value.noSnatPool;
      this._snatPool.internalValue = value.snatPool;
    }
  }

  // no_snat_pool - computed: false, optional: true, required: false
  private _noSnatPool?: boolean | cdktf.IResolvable; 
  public get noSnatPool() {
    return this.getBooleanAttribute('no_snat_pool');
  }
  public set noSnatPool(value: boolean | cdktf.IResolvable) {
    this._noSnatPool = value;
  }
  public resetNoSnatPool() {
    this._noSnatPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noSnatPoolInput() {
    return this._noSnatPool;
  }

  // snat_pool - computed: false, optional: true, required: false
  private _snatPool = new HttpLoadbalancerDefaultPoolOriginServersK8SServiceSnatPoolSnatPoolOutputReference(this, "snat_pool");
  public get snatPool() {
    return this._snatPool;
  }
  public putSnatPool(value: HttpLoadbalancerDefaultPoolOriginServersK8SServiceSnatPoolSnatPool) {
    this._snatPool.internalValue = value;
  }
  public resetSnatPool() {
    this._snatPool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snatPoolInput() {
    return this._snatPool.internalValue;
  }
}
export interface HttpLoadbalancerDefaultPoolOriginServersK8SService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#inside_network HttpLoadbalancer#inside_network}
  */
  readonly insideNetwork?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#outside_network HttpLoadbalancer#outside_network}
  */
  readonly outsideNetwork?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#protocol HttpLoadbalancer#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#service_name HttpLoadbalancer#service_name}
  */
  readonly serviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#vk8s_networks HttpLoadbalancer#vk8s_networks}
  */
  readonly vk8SNetworks?: boolean | cdktf.IResolvable;
  /**
  * service_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#service_selector HttpLoadbalancer#service_selector}
  */
  readonly serviceSelector?: HttpLoadbalancerDefaultPoolOriginServersK8SServiceServiceSelector;
  /**
  * site_locator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#site_locator HttpLoadbalancer#site_locator}
  */
  readonly siteLocator: HttpLoadbalancerDefaultPoolOriginServersK8SServiceSiteLocator;
  /**
  * snat_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#snat_pool HttpLoadbalancer#snat_pool}
  */
  readonly snatPool?: HttpLoadbalancerDefaultPoolOriginServersK8SServiceSnatPool;
}

export function httpLoadbalancerDefaultPoolOriginServersK8SServiceToTerraform(struct?: HttpLoadbalancerDefaultPoolOriginServersK8SServiceOutputReference | HttpLoadbalancerDefaultPoolOriginServersK8SService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inside_network: cdktf.booleanToTerraform(struct!.insideNetwork),
    outside_network: cdktf.booleanToTerraform(struct!.outsideNetwork),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    service_name: cdktf.stringToTerraform(struct!.serviceName),
    vk8s_networks: cdktf.booleanToTerraform(struct!.vk8SNetworks),
    service_selector: httpLoadbalancerDefaultPoolOriginServersK8SServiceServiceSelectorToTerraform(struct!.serviceSelector),
    site_locator: httpLoadbalancerDefaultPoolOriginServersK8SServiceSiteLocatorToTerraform(struct!.siteLocator),
    snat_pool: httpLoadbalancerDefaultPoolOriginServersK8SServiceSnatPoolToTerraform(struct!.snatPool),
  }
}


export function httpLoadbalancerDefaultPoolOriginServersK8SServiceToHclTerraform(struct?: HttpLoadbalancerDefaultPoolOriginServersK8SServiceOutputReference | HttpLoadbalancerDefaultPoolOriginServersK8SService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inside_network: {
      value: cdktf.booleanToHclTerraform(struct!.insideNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    outside_network: {
      value: cdktf.booleanToHclTerraform(struct!.outsideNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vk8s_networks: {
      value: cdktf.booleanToHclTerraform(struct!.vk8SNetworks),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    service_selector: {
      value: httpLoadbalancerDefaultPoolOriginServersK8SServiceServiceSelectorToHclTerraform(struct!.serviceSelector),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerDefaultPoolOriginServersK8SServiceServiceSelectorList",
    },
    site_locator: {
      value: httpLoadbalancerDefaultPoolOriginServersK8SServiceSiteLocatorToHclTerraform(struct!.siteLocator),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerDefaultPoolOriginServersK8SServiceSiteLocatorList",
    },
    snat_pool: {
      value: httpLoadbalancerDefaultPoolOriginServersK8SServiceSnatPoolToHclTerraform(struct!.snatPool),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerDefaultPoolOriginServersK8SServiceSnatPoolList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerDefaultPoolOriginServersK8SServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerDefaultPoolOriginServersK8SService | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._insideNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.insideNetwork = this._insideNetwork;
    }
    if (this._outsideNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.outsideNetwork = this._outsideNetwork;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    if (this._vk8SNetworks !== undefined) {
      hasAnyValues = true;
      internalValueResult.vk8SNetworks = this._vk8SNetworks;
    }
    if (this._serviceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceSelector = this._serviceSelector?.internalValue;
    }
    if (this._siteLocator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteLocator = this._siteLocator?.internalValue;
    }
    if (this._snatPool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snatPool = this._snatPool?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerDefaultPoolOriginServersK8SService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._insideNetwork = undefined;
      this._outsideNetwork = undefined;
      this._protocol = undefined;
      this._serviceName = undefined;
      this._vk8SNetworks = undefined;
      this._serviceSelector.internalValue = undefined;
      this._siteLocator.internalValue = undefined;
      this._snatPool.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._insideNetwork = value.insideNetwork;
      this._outsideNetwork = value.outsideNetwork;
      this._protocol = value.protocol;
      this._serviceName = value.serviceName;
      this._vk8SNetworks = value.vk8SNetworks;
      this._serviceSelector.internalValue = value.serviceSelector;
      this._siteLocator.internalValue = value.siteLocator;
      this._snatPool.internalValue = value.snatPool;
    }
  }

  // inside_network - computed: false, optional: true, required: false
  private _insideNetwork?: boolean | cdktf.IResolvable; 
  public get insideNetwork() {
    return this.getBooleanAttribute('inside_network');
  }
  public set insideNetwork(value: boolean | cdktf.IResolvable) {
    this._insideNetwork = value;
  }
  public resetInsideNetwork() {
    this._insideNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideNetworkInput() {
    return this._insideNetwork;
  }

  // outside_network - computed: false, optional: true, required: false
  private _outsideNetwork?: boolean | cdktf.IResolvable; 
  public get outsideNetwork() {
    return this.getBooleanAttribute('outside_network');
  }
  public set outsideNetwork(value: boolean | cdktf.IResolvable) {
    this._outsideNetwork = value;
  }
  public resetOutsideNetwork() {
    this._outsideNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outsideNetworkInput() {
    return this._outsideNetwork;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // service_name - computed: false, optional: true, required: false
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  public resetServiceName() {
    this._serviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // vk8s_networks - computed: false, optional: true, required: false
  private _vk8SNetworks?: boolean | cdktf.IResolvable; 
  public get vk8SNetworks() {
    return this.getBooleanAttribute('vk8s_networks');
  }
  public set vk8SNetworks(value: boolean | cdktf.IResolvable) {
    this._vk8SNetworks = value;
  }
  public resetVk8SNetworks() {
    this._vk8SNetworks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vk8SNetworksInput() {
    return this._vk8SNetworks;
  }

  // service_selector - computed: false, optional: true, required: false
  private _serviceSelector = new HttpLoadbalancerDefaultPoolOriginServersK8SServiceServiceSelectorOutputReference(this, "service_selector");
  public get serviceSelector() {
    return this._serviceSelector;
  }
  public putServiceSelector(value: HttpLoadbalancerDefaultPoolOriginServersK8SServiceServiceSelector) {
    this._serviceSelector.internalValue = value;
  }
  public resetServiceSelector() {
    this._serviceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceSelectorInput() {
    return this._serviceSelector.internalValue;
  }

  // site_locator - computed: false, optional: false, required: true
  private _siteLocator = new HttpLoadbalancerDefaultPoolOriginServersK8SServiceSiteLocatorOutputReference(this, "site_locator");
  public get siteLocator() {
    return this._siteLocator;
  }
  public putSiteLocator(value: HttpLoadbalancerDefaultPoolOriginServersK8SServiceSiteLocator) {
    this._siteLocator.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteLocatorInput() {
    return this._siteLocator.internalValue;
  }

  // snat_pool - computed: false, optional: true, required: false
  private _snatPool = new HttpLoadbalancerDefaultPoolOriginServersK8SServiceSnatPoolOutputReference(this, "snat_pool");
  public get snatPool() {
    return this._snatPool;
  }
  public putSnatPool(value: HttpLoadbalancerDefaultPoolOriginServersK8SServiceSnatPool) {
    this._snatPool.internalValue = value;
  }
  public resetSnatPool() {
    this._snatPool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snatPoolInput() {
    return this._snatPool.internalValue;
  }
}
export interface HttpLoadbalancerDefaultPoolOriginServersPrivateIpSegment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerDefaultPoolOriginServersPrivateIpSegmentToTerraform(struct?: HttpLoadbalancerDefaultPoolOriginServersPrivateIpSegmentOutputReference | HttpLoadbalancerDefaultPoolOriginServersPrivateIpSegment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function httpLoadbalancerDefaultPoolOriginServersPrivateIpSegmentToHclTerraform(struct?: HttpLoadbalancerDefaultPoolOriginServersPrivateIpSegmentOutputReference | HttpLoadbalancerDefaultPoolOriginServersPrivateIpSegment): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerDefaultPoolOriginServersPrivateIpSegmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerDefaultPoolOriginServersPrivateIpSegment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerDefaultPoolOriginServersPrivateIpSegment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface HttpLoadbalancerDefaultPoolOriginServersPrivateIpSiteLocatorSite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerDefaultPoolOriginServersPrivateIpSiteLocatorSiteToTerraform(struct?: HttpLoadbalancerDefaultPoolOriginServersPrivateIpSiteLocatorSiteOutputReference | HttpLoadbalancerDefaultPoolOriginServersPrivateIpSiteLocatorSite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function httpLoadbalancerDefaultPoolOriginServersPrivateIpSiteLocatorSiteToHclTerraform(struct?: HttpLoadbalancerDefaultPoolOriginServersPrivateIpSiteLocatorSiteOutputReference | HttpLoadbalancerDefaultPoolOriginServersPrivateIpSiteLocatorSite): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerDefaultPoolOriginServersPrivateIpSiteLocatorSiteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerDefaultPoolOriginServersPrivateIpSiteLocatorSite | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerDefaultPoolOriginServersPrivateIpSiteLocatorSite | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface HttpLoadbalancerDefaultPoolOriginServersPrivateIpSiteLocatorVirtualSite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerDefaultPoolOriginServersPrivateIpSiteLocatorVirtualSiteToTerraform(struct?: HttpLoadbalancerDefaultPoolOriginServersPrivateIpSiteLocatorVirtualSiteOutputReference | HttpLoadbalancerDefaultPoolOriginServersPrivateIpSiteLocatorVirtualSite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function httpLoadbalancerDefaultPoolOriginServersPrivateIpSiteLocatorVirtualSiteToHclTerraform(struct?: HttpLoadbalancerDefaultPoolOriginServersPrivateIpSiteLocatorVirtualSiteOutputReference | HttpLoadbalancerDefaultPoolOriginServersPrivateIpSiteLocatorVirtualSite): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerDefaultPoolOriginServersPrivateIpSiteLocatorVirtualSiteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerDefaultPoolOriginServersPrivateIpSiteLocatorVirtualSite | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerDefaultPoolOriginServersPrivateIpSiteLocatorVirtualSite | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface HttpLoadbalancerDefaultPoolOriginServersPrivateIpSiteLocator {
  /**
  * site block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#site HttpLoadbalancer#site}
  */
  readonly site?: HttpLoadbalancerDefaultPoolOriginServersPrivateIpSiteLocatorSite;
  /**
  * virtual_site block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#virtual_site HttpLoadbalancer#virtual_site}
  */
  readonly virtualSite?: HttpLoadbalancerDefaultPoolOriginServersPrivateIpSiteLocatorVirtualSite;
}

export function httpLoadbalancerDefaultPoolOriginServersPrivateIpSiteLocatorToTerraform(struct?: HttpLoadbalancerDefaultPoolOriginServersPrivateIpSiteLocatorOutputReference | HttpLoadbalancerDefaultPoolOriginServersPrivateIpSiteLocator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    site: httpLoadbalancerDefaultPoolOriginServersPrivateIpSiteLocatorSiteToTerraform(struct!.site),
    virtual_site: httpLoadbalancerDefaultPoolOriginServersPrivateIpSiteLocatorVirtualSiteToTerraform(struct!.virtualSite),
  }
}


export function httpLoadbalancerDefaultPoolOriginServersPrivateIpSiteLocatorToHclTerraform(struct?: HttpLoadbalancerDefaultPoolOriginServersPrivateIpSiteLocatorOutputReference | HttpLoadbalancerDefaultPoolOriginServersPrivateIpSiteLocator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    site: {
      value: httpLoadbalancerDefaultPoolOriginServersPrivateIpSiteLocatorSiteToHclTerraform(struct!.site),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerDefaultPoolOriginServersPrivateIpSiteLocatorSiteList",
    },
    virtual_site: {
      value: httpLoadbalancerDefaultPoolOriginServersPrivateIpSiteLocatorVirtualSiteToHclTerraform(struct!.virtualSite),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerDefaultPoolOriginServersPrivateIpSiteLocatorVirtualSiteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerDefaultPoolOriginServersPrivateIpSiteLocatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerDefaultPoolOriginServersPrivateIpSiteLocator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._site?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.site = this._site?.internalValue;
    }
    if (this._virtualSite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualSite = this._virtualSite?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerDefaultPoolOriginServersPrivateIpSiteLocator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._site.internalValue = undefined;
      this._virtualSite.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._site.internalValue = value.site;
      this._virtualSite.internalValue = value.virtualSite;
    }
  }

  // site - computed: false, optional: true, required: false
  private _site = new HttpLoadbalancerDefaultPoolOriginServersPrivateIpSiteLocatorSiteOutputReference(this, "site");
  public get site() {
    return this._site;
  }
  public putSite(value: HttpLoadbalancerDefaultPoolOriginServersPrivateIpSiteLocatorSite) {
    this._site.internalValue = value;
  }
  public resetSite() {
    this._site.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteInput() {
    return this._site.internalValue;
  }

  // virtual_site - computed: false, optional: true, required: false
  private _virtualSite = new HttpLoadbalancerDefaultPoolOriginServersPrivateIpSiteLocatorVirtualSiteOutputReference(this, "virtual_site");
  public get virtualSite() {
    return this._virtualSite;
  }
  public putVirtualSite(value: HttpLoadbalancerDefaultPoolOriginServersPrivateIpSiteLocatorVirtualSite) {
    this._virtualSite.internalValue = value;
  }
  public resetVirtualSite() {
    this._virtualSite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualSiteInput() {
    return this._virtualSite.internalValue;
  }
}
export interface HttpLoadbalancerDefaultPoolOriginServersPrivateIpSnatPoolSnatPool {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#ipv6_prefixes HttpLoadbalancer#ipv6_prefixes}
  */
  readonly ipv6Prefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#prefixes HttpLoadbalancer#prefixes}
  */
  readonly prefixes?: string[];
}

export function httpLoadbalancerDefaultPoolOriginServersPrivateIpSnatPoolSnatPoolToTerraform(struct?: HttpLoadbalancerDefaultPoolOriginServersPrivateIpSnatPoolSnatPoolOutputReference | HttpLoadbalancerDefaultPoolOriginServersPrivateIpSnatPoolSnatPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipv6Prefixes),
    prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prefixes),
  }
}


export function httpLoadbalancerDefaultPoolOriginServersPrivateIpSnatPoolSnatPoolToHclTerraform(struct?: HttpLoadbalancerDefaultPoolOriginServersPrivateIpSnatPoolSnatPoolOutputReference | HttpLoadbalancerDefaultPoolOriginServersPrivateIpSnatPoolSnatPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv6_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipv6Prefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.prefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerDefaultPoolOriginServersPrivateIpSnatPoolSnatPoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerDefaultPoolOriginServersPrivateIpSnatPoolSnatPool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv6Prefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Prefixes = this._ipv6Prefixes;
    }
    if (this._prefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixes = this._prefixes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerDefaultPoolOriginServersPrivateIpSnatPoolSnatPool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv6Prefixes = undefined;
      this._prefixes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv6Prefixes = value.ipv6Prefixes;
      this._prefixes = value.prefixes;
    }
  }

  // ipv6_prefixes - computed: false, optional: true, required: false
  private _ipv6Prefixes?: string[]; 
  public get ipv6Prefixes() {
    return this.getListAttribute('ipv6_prefixes');
  }
  public set ipv6Prefixes(value: string[]) {
    this._ipv6Prefixes = value;
  }
  public resetIpv6Prefixes() {
    this._ipv6Prefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PrefixesInput() {
    return this._ipv6Prefixes;
  }

  // prefixes - computed: false, optional: true, required: false
  private _prefixes?: string[]; 
  public get prefixes() {
    return this.getListAttribute('prefixes');
  }
  public set prefixes(value: string[]) {
    this._prefixes = value;
  }
  public resetPrefixes() {
    this._prefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixesInput() {
    return this._prefixes;
  }
}
export interface HttpLoadbalancerDefaultPoolOriginServersPrivateIpSnatPool {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#no_snat_pool HttpLoadbalancer#no_snat_pool}
  */
  readonly noSnatPool?: boolean | cdktf.IResolvable;
  /**
  * snat_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#snat_pool HttpLoadbalancer#snat_pool}
  */
  readonly snatPool?: HttpLoadbalancerDefaultPoolOriginServersPrivateIpSnatPoolSnatPool;
}

export function httpLoadbalancerDefaultPoolOriginServersPrivateIpSnatPoolToTerraform(struct?: HttpLoadbalancerDefaultPoolOriginServersPrivateIpSnatPoolOutputReference | HttpLoadbalancerDefaultPoolOriginServersPrivateIpSnatPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    no_snat_pool: cdktf.booleanToTerraform(struct!.noSnatPool),
    snat_pool: httpLoadbalancerDefaultPoolOriginServersPrivateIpSnatPoolSnatPoolToTerraform(struct!.snatPool),
  }
}


export function httpLoadbalancerDefaultPoolOriginServersPrivateIpSnatPoolToHclTerraform(struct?: HttpLoadbalancerDefaultPoolOriginServersPrivateIpSnatPoolOutputReference | HttpLoadbalancerDefaultPoolOriginServersPrivateIpSnatPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    no_snat_pool: {
      value: cdktf.booleanToHclTerraform(struct!.noSnatPool),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    snat_pool: {
      value: httpLoadbalancerDefaultPoolOriginServersPrivateIpSnatPoolSnatPoolToHclTerraform(struct!.snatPool),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerDefaultPoolOriginServersPrivateIpSnatPoolSnatPoolList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerDefaultPoolOriginServersPrivateIpSnatPoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerDefaultPoolOriginServersPrivateIpSnatPool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._noSnatPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.noSnatPool = this._noSnatPool;
    }
    if (this._snatPool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snatPool = this._snatPool?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerDefaultPoolOriginServersPrivateIpSnatPool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._noSnatPool = undefined;
      this._snatPool.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._noSnatPool = value.noSnatPool;
      this._snatPool.internalValue = value.snatPool;
    }
  }

  // no_snat_pool - computed: false, optional: true, required: false
  private _noSnatPool?: boolean | cdktf.IResolvable; 
  public get noSnatPool() {
    return this.getBooleanAttribute('no_snat_pool');
  }
  public set noSnatPool(value: boolean | cdktf.IResolvable) {
    this._noSnatPool = value;
  }
  public resetNoSnatPool() {
    this._noSnatPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noSnatPoolInput() {
    return this._noSnatPool;
  }

  // snat_pool - computed: false, optional: true, required: false
  private _snatPool = new HttpLoadbalancerDefaultPoolOriginServersPrivateIpSnatPoolSnatPoolOutputReference(this, "snat_pool");
  public get snatPool() {
    return this._snatPool;
  }
  public putSnatPool(value: HttpLoadbalancerDefaultPoolOriginServersPrivateIpSnatPoolSnatPool) {
    this._snatPool.internalValue = value;
  }
  public resetSnatPool() {
    this._snatPool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snatPoolInput() {
    return this._snatPool.internalValue;
  }
}
export interface HttpLoadbalancerDefaultPoolOriginServersPrivateIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#inside_network HttpLoadbalancer#inside_network}
  */
  readonly insideNetwork?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#ip HttpLoadbalancer#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#ipv6 HttpLoadbalancer#ipv6}
  */
  readonly ipv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#outside_network HttpLoadbalancer#outside_network}
  */
  readonly outsideNetwork?: boolean | cdktf.IResolvable;
  /**
  * segment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#segment HttpLoadbalancer#segment}
  */
  readonly segment?: HttpLoadbalancerDefaultPoolOriginServersPrivateIpSegment;
  /**
  * site_locator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#site_locator HttpLoadbalancer#site_locator}
  */
  readonly siteLocator: HttpLoadbalancerDefaultPoolOriginServersPrivateIpSiteLocator;
  /**
  * snat_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#snat_pool HttpLoadbalancer#snat_pool}
  */
  readonly snatPool?: HttpLoadbalancerDefaultPoolOriginServersPrivateIpSnatPool;
}

export function httpLoadbalancerDefaultPoolOriginServersPrivateIpToTerraform(struct?: HttpLoadbalancerDefaultPoolOriginServersPrivateIpOutputReference | HttpLoadbalancerDefaultPoolOriginServersPrivateIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inside_network: cdktf.booleanToTerraform(struct!.insideNetwork),
    ip: cdktf.stringToTerraform(struct!.ip),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
    outside_network: cdktf.booleanToTerraform(struct!.outsideNetwork),
    segment: httpLoadbalancerDefaultPoolOriginServersPrivateIpSegmentToTerraform(struct!.segment),
    site_locator: httpLoadbalancerDefaultPoolOriginServersPrivateIpSiteLocatorToTerraform(struct!.siteLocator),
    snat_pool: httpLoadbalancerDefaultPoolOriginServersPrivateIpSnatPoolToTerraform(struct!.snatPool),
  }
}


export function httpLoadbalancerDefaultPoolOriginServersPrivateIpToHclTerraform(struct?: HttpLoadbalancerDefaultPoolOriginServersPrivateIpOutputReference | HttpLoadbalancerDefaultPoolOriginServersPrivateIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inside_network: {
      value: cdktf.booleanToHclTerraform(struct!.insideNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6: {
      value: cdktf.stringToHclTerraform(struct!.ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    outside_network: {
      value: cdktf.booleanToHclTerraform(struct!.outsideNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    segment: {
      value: httpLoadbalancerDefaultPoolOriginServersPrivateIpSegmentToHclTerraform(struct!.segment),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerDefaultPoolOriginServersPrivateIpSegmentList",
    },
    site_locator: {
      value: httpLoadbalancerDefaultPoolOriginServersPrivateIpSiteLocatorToHclTerraform(struct!.siteLocator),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerDefaultPoolOriginServersPrivateIpSiteLocatorList",
    },
    snat_pool: {
      value: httpLoadbalancerDefaultPoolOriginServersPrivateIpSnatPoolToHclTerraform(struct!.snatPool),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerDefaultPoolOriginServersPrivateIpSnatPoolList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerDefaultPoolOriginServersPrivateIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerDefaultPoolOriginServersPrivateIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._insideNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.insideNetwork = this._insideNetwork;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    if (this._outsideNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.outsideNetwork = this._outsideNetwork;
    }
    if (this._segment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.segment = this._segment?.internalValue;
    }
    if (this._siteLocator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteLocator = this._siteLocator?.internalValue;
    }
    if (this._snatPool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snatPool = this._snatPool?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerDefaultPoolOriginServersPrivateIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._insideNetwork = undefined;
      this._ip = undefined;
      this._ipv6 = undefined;
      this._outsideNetwork = undefined;
      this._segment.internalValue = undefined;
      this._siteLocator.internalValue = undefined;
      this._snatPool.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._insideNetwork = value.insideNetwork;
      this._ip = value.ip;
      this._ipv6 = value.ipv6;
      this._outsideNetwork = value.outsideNetwork;
      this._segment.internalValue = value.segment;
      this._siteLocator.internalValue = value.siteLocator;
      this._snatPool.internalValue = value.snatPool;
    }
  }

  // inside_network - computed: false, optional: true, required: false
  private _insideNetwork?: boolean | cdktf.IResolvable; 
  public get insideNetwork() {
    return this.getBooleanAttribute('inside_network');
  }
  public set insideNetwork(value: boolean | cdktf.IResolvable) {
    this._insideNetwork = value;
  }
  public resetInsideNetwork() {
    this._insideNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideNetworkInput() {
    return this._insideNetwork;
  }

  // ip - computed: false, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6?: string; 
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }
  public set ipv6(value: string) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }

  // outside_network - computed: false, optional: true, required: false
  private _outsideNetwork?: boolean | cdktf.IResolvable; 
  public get outsideNetwork() {
    return this.getBooleanAttribute('outside_network');
  }
  public set outsideNetwork(value: boolean | cdktf.IResolvable) {
    this._outsideNetwork = value;
  }
  public resetOutsideNetwork() {
    this._outsideNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outsideNetworkInput() {
    return this._outsideNetwork;
  }

  // segment - computed: false, optional: true, required: false
  private _segment = new HttpLoadbalancerDefaultPoolOriginServersPrivateIpSegmentOutputReference(this, "segment");
  public get segment() {
    return this._segment;
  }
  public putSegment(value: HttpLoadbalancerDefaultPoolOriginServersPrivateIpSegment) {
    this._segment.internalValue = value;
  }
  public resetSegment() {
    this._segment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentInput() {
    return this._segment.internalValue;
  }

  // site_locator - computed: false, optional: false, required: true
  private _siteLocator = new HttpLoadbalancerDefaultPoolOriginServersPrivateIpSiteLocatorOutputReference(this, "site_locator");
  public get siteLocator() {
    return this._siteLocator;
  }
  public putSiteLocator(value: HttpLoadbalancerDefaultPoolOriginServersPrivateIpSiteLocator) {
    this._siteLocator.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteLocatorInput() {
    return this._siteLocator.internalValue;
  }

  // snat_pool - computed: false, optional: true, required: false
  private _snatPool = new HttpLoadbalancerDefaultPoolOriginServersPrivateIpSnatPoolOutputReference(this, "snat_pool");
  public get snatPool() {
    return this._snatPool;
  }
  public putSnatPool(value: HttpLoadbalancerDefaultPoolOriginServersPrivateIpSnatPool) {
    this._snatPool.internalValue = value;
  }
  public resetSnatPool() {
    this._snatPool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snatPoolInput() {
    return this._snatPool.internalValue;
  }
}
export interface HttpLoadbalancerDefaultPoolOriginServersPrivateNameSegment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerDefaultPoolOriginServersPrivateNameSegmentToTerraform(struct?: HttpLoadbalancerDefaultPoolOriginServersPrivateNameSegmentOutputReference | HttpLoadbalancerDefaultPoolOriginServersPrivateNameSegment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function httpLoadbalancerDefaultPoolOriginServersPrivateNameSegmentToHclTerraform(struct?: HttpLoadbalancerDefaultPoolOriginServersPrivateNameSegmentOutputReference | HttpLoadbalancerDefaultPoolOriginServersPrivateNameSegment): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerDefaultPoolOriginServersPrivateNameSegmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerDefaultPoolOriginServersPrivateNameSegment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerDefaultPoolOriginServersPrivateNameSegment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface HttpLoadbalancerDefaultPoolOriginServersPrivateNameSiteLocatorSite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerDefaultPoolOriginServersPrivateNameSiteLocatorSiteToTerraform(struct?: HttpLoadbalancerDefaultPoolOriginServersPrivateNameSiteLocatorSiteOutputReference | HttpLoadbalancerDefaultPoolOriginServersPrivateNameSiteLocatorSite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function httpLoadbalancerDefaultPoolOriginServersPrivateNameSiteLocatorSiteToHclTerraform(struct?: HttpLoadbalancerDefaultPoolOriginServersPrivateNameSiteLocatorSiteOutputReference | HttpLoadbalancerDefaultPoolOriginServersPrivateNameSiteLocatorSite): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerDefaultPoolOriginServersPrivateNameSiteLocatorSiteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerDefaultPoolOriginServersPrivateNameSiteLocatorSite | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerDefaultPoolOriginServersPrivateNameSiteLocatorSite | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface HttpLoadbalancerDefaultPoolOriginServersPrivateNameSiteLocatorVirtualSite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerDefaultPoolOriginServersPrivateNameSiteLocatorVirtualSiteToTerraform(struct?: HttpLoadbalancerDefaultPoolOriginServersPrivateNameSiteLocatorVirtualSiteOutputReference | HttpLoadbalancerDefaultPoolOriginServersPrivateNameSiteLocatorVirtualSite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function httpLoadbalancerDefaultPoolOriginServersPrivateNameSiteLocatorVirtualSiteToHclTerraform(struct?: HttpLoadbalancerDefaultPoolOriginServersPrivateNameSiteLocatorVirtualSiteOutputReference | HttpLoadbalancerDefaultPoolOriginServersPrivateNameSiteLocatorVirtualSite): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerDefaultPoolOriginServersPrivateNameSiteLocatorVirtualSiteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerDefaultPoolOriginServersPrivateNameSiteLocatorVirtualSite | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerDefaultPoolOriginServersPrivateNameSiteLocatorVirtualSite | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface HttpLoadbalancerDefaultPoolOriginServersPrivateNameSiteLocator {
  /**
  * site block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#site HttpLoadbalancer#site}
  */
  readonly site?: HttpLoadbalancerDefaultPoolOriginServersPrivateNameSiteLocatorSite;
  /**
  * virtual_site block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#virtual_site HttpLoadbalancer#virtual_site}
  */
  readonly virtualSite?: HttpLoadbalancerDefaultPoolOriginServersPrivateNameSiteLocatorVirtualSite;
}

export function httpLoadbalancerDefaultPoolOriginServersPrivateNameSiteLocatorToTerraform(struct?: HttpLoadbalancerDefaultPoolOriginServersPrivateNameSiteLocatorOutputReference | HttpLoadbalancerDefaultPoolOriginServersPrivateNameSiteLocator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    site: httpLoadbalancerDefaultPoolOriginServersPrivateNameSiteLocatorSiteToTerraform(struct!.site),
    virtual_site: httpLoadbalancerDefaultPoolOriginServersPrivateNameSiteLocatorVirtualSiteToTerraform(struct!.virtualSite),
  }
}


export function httpLoadbalancerDefaultPoolOriginServersPrivateNameSiteLocatorToHclTerraform(struct?: HttpLoadbalancerDefaultPoolOriginServersPrivateNameSiteLocatorOutputReference | HttpLoadbalancerDefaultPoolOriginServersPrivateNameSiteLocator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    site: {
      value: httpLoadbalancerDefaultPoolOriginServersPrivateNameSiteLocatorSiteToHclTerraform(struct!.site),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerDefaultPoolOriginServersPrivateNameSiteLocatorSiteList",
    },
    virtual_site: {
      value: httpLoadbalancerDefaultPoolOriginServersPrivateNameSiteLocatorVirtualSiteToHclTerraform(struct!.virtualSite),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerDefaultPoolOriginServersPrivateNameSiteLocatorVirtualSiteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerDefaultPoolOriginServersPrivateNameSiteLocatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerDefaultPoolOriginServersPrivateNameSiteLocator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._site?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.site = this._site?.internalValue;
    }
    if (this._virtualSite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualSite = this._virtualSite?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerDefaultPoolOriginServersPrivateNameSiteLocator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._site.internalValue = undefined;
      this._virtualSite.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._site.internalValue = value.site;
      this._virtualSite.internalValue = value.virtualSite;
    }
  }

  // site - computed: false, optional: true, required: false
  private _site = new HttpLoadbalancerDefaultPoolOriginServersPrivateNameSiteLocatorSiteOutputReference(this, "site");
  public get site() {
    return this._site;
  }
  public putSite(value: HttpLoadbalancerDefaultPoolOriginServersPrivateNameSiteLocatorSite) {
    this._site.internalValue = value;
  }
  public resetSite() {
    this._site.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteInput() {
    return this._site.internalValue;
  }

  // virtual_site - computed: false, optional: true, required: false
  private _virtualSite = new HttpLoadbalancerDefaultPoolOriginServersPrivateNameSiteLocatorVirtualSiteOutputReference(this, "virtual_site");
  public get virtualSite() {
    return this._virtualSite;
  }
  public putVirtualSite(value: HttpLoadbalancerDefaultPoolOriginServersPrivateNameSiteLocatorVirtualSite) {
    this._virtualSite.internalValue = value;
  }
  public resetVirtualSite() {
    this._virtualSite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualSiteInput() {
    return this._virtualSite.internalValue;
  }
}
export interface HttpLoadbalancerDefaultPoolOriginServersPrivateNameSnatPoolSnatPool {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#ipv6_prefixes HttpLoadbalancer#ipv6_prefixes}
  */
  readonly ipv6Prefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#prefixes HttpLoadbalancer#prefixes}
  */
  readonly prefixes?: string[];
}

export function httpLoadbalancerDefaultPoolOriginServersPrivateNameSnatPoolSnatPoolToTerraform(struct?: HttpLoadbalancerDefaultPoolOriginServersPrivateNameSnatPoolSnatPoolOutputReference | HttpLoadbalancerDefaultPoolOriginServersPrivateNameSnatPoolSnatPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipv6Prefixes),
    prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prefixes),
  }
}


export function httpLoadbalancerDefaultPoolOriginServersPrivateNameSnatPoolSnatPoolToHclTerraform(struct?: HttpLoadbalancerDefaultPoolOriginServersPrivateNameSnatPoolSnatPoolOutputReference | HttpLoadbalancerDefaultPoolOriginServersPrivateNameSnatPoolSnatPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv6_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipv6Prefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.prefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerDefaultPoolOriginServersPrivateNameSnatPoolSnatPoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerDefaultPoolOriginServersPrivateNameSnatPoolSnatPool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv6Prefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Prefixes = this._ipv6Prefixes;
    }
    if (this._prefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixes = this._prefixes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerDefaultPoolOriginServersPrivateNameSnatPoolSnatPool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv6Prefixes = undefined;
      this._prefixes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv6Prefixes = value.ipv6Prefixes;
      this._prefixes = value.prefixes;
    }
  }

  // ipv6_prefixes - computed: false, optional: true, required: false
  private _ipv6Prefixes?: string[]; 
  public get ipv6Prefixes() {
    return this.getListAttribute('ipv6_prefixes');
  }
  public set ipv6Prefixes(value: string[]) {
    this._ipv6Prefixes = value;
  }
  public resetIpv6Prefixes() {
    this._ipv6Prefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PrefixesInput() {
    return this._ipv6Prefixes;
  }

  // prefixes - computed: false, optional: true, required: false
  private _prefixes?: string[]; 
  public get prefixes() {
    return this.getListAttribute('prefixes');
  }
  public set prefixes(value: string[]) {
    this._prefixes = value;
  }
  public resetPrefixes() {
    this._prefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixesInput() {
    return this._prefixes;
  }
}
export interface HttpLoadbalancerDefaultPoolOriginServersPrivateNameSnatPool {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#no_snat_pool HttpLoadbalancer#no_snat_pool}
  */
  readonly noSnatPool?: boolean | cdktf.IResolvable;
  /**
  * snat_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#snat_pool HttpLoadbalancer#snat_pool}
  */
  readonly snatPool?: HttpLoadbalancerDefaultPoolOriginServersPrivateNameSnatPoolSnatPool;
}

export function httpLoadbalancerDefaultPoolOriginServersPrivateNameSnatPoolToTerraform(struct?: HttpLoadbalancerDefaultPoolOriginServersPrivateNameSnatPoolOutputReference | HttpLoadbalancerDefaultPoolOriginServersPrivateNameSnatPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    no_snat_pool: cdktf.booleanToTerraform(struct!.noSnatPool),
    snat_pool: httpLoadbalancerDefaultPoolOriginServersPrivateNameSnatPoolSnatPoolToTerraform(struct!.snatPool),
  }
}


export function httpLoadbalancerDefaultPoolOriginServersPrivateNameSnatPoolToHclTerraform(struct?: HttpLoadbalancerDefaultPoolOriginServersPrivateNameSnatPoolOutputReference | HttpLoadbalancerDefaultPoolOriginServersPrivateNameSnatPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    no_snat_pool: {
      value: cdktf.booleanToHclTerraform(struct!.noSnatPool),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    snat_pool: {
      value: httpLoadbalancerDefaultPoolOriginServersPrivateNameSnatPoolSnatPoolToHclTerraform(struct!.snatPool),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerDefaultPoolOriginServersPrivateNameSnatPoolSnatPoolList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerDefaultPoolOriginServersPrivateNameSnatPoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerDefaultPoolOriginServersPrivateNameSnatPool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._noSnatPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.noSnatPool = this._noSnatPool;
    }
    if (this._snatPool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snatPool = this._snatPool?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerDefaultPoolOriginServersPrivateNameSnatPool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._noSnatPool = undefined;
      this._snatPool.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._noSnatPool = value.noSnatPool;
      this._snatPool.internalValue = value.snatPool;
    }
  }

  // no_snat_pool - computed: false, optional: true, required: false
  private _noSnatPool?: boolean | cdktf.IResolvable; 
  public get noSnatPool() {
    return this.getBooleanAttribute('no_snat_pool');
  }
  public set noSnatPool(value: boolean | cdktf.IResolvable) {
    this._noSnatPool = value;
  }
  public resetNoSnatPool() {
    this._noSnatPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noSnatPoolInput() {
    return this._noSnatPool;
  }

  // snat_pool - computed: false, optional: true, required: false
  private _snatPool = new HttpLoadbalancerDefaultPoolOriginServersPrivateNameSnatPoolSnatPoolOutputReference(this, "snat_pool");
  public get snatPool() {
    return this._snatPool;
  }
  public putSnatPool(value: HttpLoadbalancerDefaultPoolOriginServersPrivateNameSnatPoolSnatPool) {
    this._snatPool.internalValue = value;
  }
  public resetSnatPool() {
    this._snatPool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snatPoolInput() {
    return this._snatPool.internalValue;
  }
}
export interface HttpLoadbalancerDefaultPoolOriginServersPrivateName {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#dns_name HttpLoadbalancer#dns_name}
  */
  readonly dnsName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#inside_network HttpLoadbalancer#inside_network}
  */
  readonly insideNetwork?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#outside_network HttpLoadbalancer#outside_network}
  */
  readonly outsideNetwork?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#refresh_interval HttpLoadbalancer#refresh_interval}
  */
  readonly refreshInterval?: number;
  /**
  * segment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#segment HttpLoadbalancer#segment}
  */
  readonly segment?: HttpLoadbalancerDefaultPoolOriginServersPrivateNameSegment;
  /**
  * site_locator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#site_locator HttpLoadbalancer#site_locator}
  */
  readonly siteLocator: HttpLoadbalancerDefaultPoolOriginServersPrivateNameSiteLocator;
  /**
  * snat_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#snat_pool HttpLoadbalancer#snat_pool}
  */
  readonly snatPool?: HttpLoadbalancerDefaultPoolOriginServersPrivateNameSnatPool;
}

export function httpLoadbalancerDefaultPoolOriginServersPrivateNameToTerraform(struct?: HttpLoadbalancerDefaultPoolOriginServersPrivateNameOutputReference | HttpLoadbalancerDefaultPoolOriginServersPrivateName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_name: cdktf.stringToTerraform(struct!.dnsName),
    inside_network: cdktf.booleanToTerraform(struct!.insideNetwork),
    outside_network: cdktf.booleanToTerraform(struct!.outsideNetwork),
    refresh_interval: cdktf.numberToTerraform(struct!.refreshInterval),
    segment: httpLoadbalancerDefaultPoolOriginServersPrivateNameSegmentToTerraform(struct!.segment),
    site_locator: httpLoadbalancerDefaultPoolOriginServersPrivateNameSiteLocatorToTerraform(struct!.siteLocator),
    snat_pool: httpLoadbalancerDefaultPoolOriginServersPrivateNameSnatPoolToTerraform(struct!.snatPool),
  }
}


export function httpLoadbalancerDefaultPoolOriginServersPrivateNameToHclTerraform(struct?: HttpLoadbalancerDefaultPoolOriginServersPrivateNameOutputReference | HttpLoadbalancerDefaultPoolOriginServersPrivateName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_name: {
      value: cdktf.stringToHclTerraform(struct!.dnsName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inside_network: {
      value: cdktf.booleanToHclTerraform(struct!.insideNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    outside_network: {
      value: cdktf.booleanToHclTerraform(struct!.outsideNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    refresh_interval: {
      value: cdktf.numberToHclTerraform(struct!.refreshInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    segment: {
      value: httpLoadbalancerDefaultPoolOriginServersPrivateNameSegmentToHclTerraform(struct!.segment),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerDefaultPoolOriginServersPrivateNameSegmentList",
    },
    site_locator: {
      value: httpLoadbalancerDefaultPoolOriginServersPrivateNameSiteLocatorToHclTerraform(struct!.siteLocator),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerDefaultPoolOriginServersPrivateNameSiteLocatorList",
    },
    snat_pool: {
      value: httpLoadbalancerDefaultPoolOriginServersPrivateNameSnatPoolToHclTerraform(struct!.snatPool),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerDefaultPoolOriginServersPrivateNameSnatPoolList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerDefaultPoolOriginServersPrivateNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerDefaultPoolOriginServersPrivateName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsName = this._dnsName;
    }
    if (this._insideNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.insideNetwork = this._insideNetwork;
    }
    if (this._outsideNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.outsideNetwork = this._outsideNetwork;
    }
    if (this._refreshInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshInterval = this._refreshInterval;
    }
    if (this._segment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.segment = this._segment?.internalValue;
    }
    if (this._siteLocator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteLocator = this._siteLocator?.internalValue;
    }
    if (this._snatPool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snatPool = this._snatPool?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerDefaultPoolOriginServersPrivateName | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dnsName = undefined;
      this._insideNetwork = undefined;
      this._outsideNetwork = undefined;
      this._refreshInterval = undefined;
      this._segment.internalValue = undefined;
      this._siteLocator.internalValue = undefined;
      this._snatPool.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dnsName = value.dnsName;
      this._insideNetwork = value.insideNetwork;
      this._outsideNetwork = value.outsideNetwork;
      this._refreshInterval = value.refreshInterval;
      this._segment.internalValue = value.segment;
      this._siteLocator.internalValue = value.siteLocator;
      this._snatPool.internalValue = value.snatPool;
    }
  }

  // dns_name - computed: false, optional: false, required: true
  private _dnsName?: string; 
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }
  public set dnsName(value: string) {
    this._dnsName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNameInput() {
    return this._dnsName;
  }

  // inside_network - computed: false, optional: true, required: false
  private _insideNetwork?: boolean | cdktf.IResolvable; 
  public get insideNetwork() {
    return this.getBooleanAttribute('inside_network');
  }
  public set insideNetwork(value: boolean | cdktf.IResolvable) {
    this._insideNetwork = value;
  }
  public resetInsideNetwork() {
    this._insideNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideNetworkInput() {
    return this._insideNetwork;
  }

  // outside_network - computed: false, optional: true, required: false
  private _outsideNetwork?: boolean | cdktf.IResolvable; 
  public get outsideNetwork() {
    return this.getBooleanAttribute('outside_network');
  }
  public set outsideNetwork(value: boolean | cdktf.IResolvable) {
    this._outsideNetwork = value;
  }
  public resetOutsideNetwork() {
    this._outsideNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outsideNetworkInput() {
    return this._outsideNetwork;
  }

  // refresh_interval - computed: false, optional: true, required: false
  private _refreshInterval?: number; 
  public get refreshInterval() {
    return this.getNumberAttribute('refresh_interval');
  }
  public set refreshInterval(value: number) {
    this._refreshInterval = value;
  }
  public resetRefreshInterval() {
    this._refreshInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshIntervalInput() {
    return this._refreshInterval;
  }

  // segment - computed: false, optional: true, required: false
  private _segment = new HttpLoadbalancerDefaultPoolOriginServersPrivateNameSegmentOutputReference(this, "segment");
  public get segment() {
    return this._segment;
  }
  public putSegment(value: HttpLoadbalancerDefaultPoolOriginServersPrivateNameSegment) {
    this._segment.internalValue = value;
  }
  public resetSegment() {
    this._segment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentInput() {
    return this._segment.internalValue;
  }

  // site_locator - computed: false, optional: false, required: true
  private _siteLocator = new HttpLoadbalancerDefaultPoolOriginServersPrivateNameSiteLocatorOutputReference(this, "site_locator");
  public get siteLocator() {
    return this._siteLocator;
  }
  public putSiteLocator(value: HttpLoadbalancerDefaultPoolOriginServersPrivateNameSiteLocator) {
    this._siteLocator.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteLocatorInput() {
    return this._siteLocator.internalValue;
  }

  // snat_pool - computed: false, optional: true, required: false
  private _snatPool = new HttpLoadbalancerDefaultPoolOriginServersPrivateNameSnatPoolOutputReference(this, "snat_pool");
  public get snatPool() {
    return this._snatPool;
  }
  public putSnatPool(value: HttpLoadbalancerDefaultPoolOriginServersPrivateNameSnatPool) {
    this._snatPool.internalValue = value;
  }
  public resetSnatPool() {
    this._snatPool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snatPoolInput() {
    return this._snatPool.internalValue;
  }
}
export interface HttpLoadbalancerDefaultPoolOriginServersPublicIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#ip HttpLoadbalancer#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#ipv6 HttpLoadbalancer#ipv6}
  */
  readonly ipv6?: string;
}

export function httpLoadbalancerDefaultPoolOriginServersPublicIpToTerraform(struct?: HttpLoadbalancerDefaultPoolOriginServersPublicIpOutputReference | HttpLoadbalancerDefaultPoolOriginServersPublicIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
  }
}


export function httpLoadbalancerDefaultPoolOriginServersPublicIpToHclTerraform(struct?: HttpLoadbalancerDefaultPoolOriginServersPublicIpOutputReference | HttpLoadbalancerDefaultPoolOriginServersPublicIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6: {
      value: cdktf.stringToHclTerraform(struct!.ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerDefaultPoolOriginServersPublicIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerDefaultPoolOriginServersPublicIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerDefaultPoolOriginServersPublicIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ip = undefined;
      this._ipv6 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ip = value.ip;
      this._ipv6 = value.ipv6;
    }
  }

  // ip - computed: false, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6?: string; 
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }
  public set ipv6(value: string) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }
}
export interface HttpLoadbalancerDefaultPoolOriginServersPublicName {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#dns_name HttpLoadbalancer#dns_name}
  */
  readonly dnsName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#refresh_interval HttpLoadbalancer#refresh_interval}
  */
  readonly refreshInterval?: number;
}

export function httpLoadbalancerDefaultPoolOriginServersPublicNameToTerraform(struct?: HttpLoadbalancerDefaultPoolOriginServersPublicNameOutputReference | HttpLoadbalancerDefaultPoolOriginServersPublicName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_name: cdktf.stringToTerraform(struct!.dnsName),
    refresh_interval: cdktf.numberToTerraform(struct!.refreshInterval),
  }
}


export function httpLoadbalancerDefaultPoolOriginServersPublicNameToHclTerraform(struct?: HttpLoadbalancerDefaultPoolOriginServersPublicNameOutputReference | HttpLoadbalancerDefaultPoolOriginServersPublicName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_name: {
      value: cdktf.stringToHclTerraform(struct!.dnsName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    refresh_interval: {
      value: cdktf.numberToHclTerraform(struct!.refreshInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerDefaultPoolOriginServersPublicNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerDefaultPoolOriginServersPublicName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsName = this._dnsName;
    }
    if (this._refreshInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshInterval = this._refreshInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerDefaultPoolOriginServersPublicName | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dnsName = undefined;
      this._refreshInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dnsName = value.dnsName;
      this._refreshInterval = value.refreshInterval;
    }
  }

  // dns_name - computed: false, optional: false, required: true
  private _dnsName?: string; 
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }
  public set dnsName(value: string) {
    this._dnsName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNameInput() {
    return this._dnsName;
  }

  // refresh_interval - computed: false, optional: true, required: false
  private _refreshInterval?: number; 
  public get refreshInterval() {
    return this.getNumberAttribute('refresh_interval');
  }
  public set refreshInterval(value: number) {
    this._refreshInterval = value;
  }
  public resetRefreshInterval() {
    this._refreshInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshIntervalInput() {
    return this._refreshInterval;
  }
}
export interface HttpLoadbalancerDefaultPoolOriginServersVnPrivateIpVirtualNetwork {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerDefaultPoolOriginServersVnPrivateIpVirtualNetworkToTerraform(struct?: HttpLoadbalancerDefaultPoolOriginServersVnPrivateIpVirtualNetworkOutputReference | HttpLoadbalancerDefaultPoolOriginServersVnPrivateIpVirtualNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function httpLoadbalancerDefaultPoolOriginServersVnPrivateIpVirtualNetworkToHclTerraform(struct?: HttpLoadbalancerDefaultPoolOriginServersVnPrivateIpVirtualNetworkOutputReference | HttpLoadbalancerDefaultPoolOriginServersVnPrivateIpVirtualNetwork): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerDefaultPoolOriginServersVnPrivateIpVirtualNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerDefaultPoolOriginServersVnPrivateIpVirtualNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerDefaultPoolOriginServersVnPrivateIpVirtualNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface HttpLoadbalancerDefaultPoolOriginServersVnPrivateIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#ip HttpLoadbalancer#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#ipv6 HttpLoadbalancer#ipv6}
  */
  readonly ipv6?: string;
  /**
  * virtual_network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#virtual_network HttpLoadbalancer#virtual_network}
  */
  readonly virtualNetwork: HttpLoadbalancerDefaultPoolOriginServersVnPrivateIpVirtualNetwork;
}

export function httpLoadbalancerDefaultPoolOriginServersVnPrivateIpToTerraform(struct?: HttpLoadbalancerDefaultPoolOriginServersVnPrivateIpOutputReference | HttpLoadbalancerDefaultPoolOriginServersVnPrivateIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
    virtual_network: httpLoadbalancerDefaultPoolOriginServersVnPrivateIpVirtualNetworkToTerraform(struct!.virtualNetwork),
  }
}


export function httpLoadbalancerDefaultPoolOriginServersVnPrivateIpToHclTerraform(struct?: HttpLoadbalancerDefaultPoolOriginServersVnPrivateIpOutputReference | HttpLoadbalancerDefaultPoolOriginServersVnPrivateIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6: {
      value: cdktf.stringToHclTerraform(struct!.ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_network: {
      value: httpLoadbalancerDefaultPoolOriginServersVnPrivateIpVirtualNetworkToHclTerraform(struct!.virtualNetwork),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerDefaultPoolOriginServersVnPrivateIpVirtualNetworkList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerDefaultPoolOriginServersVnPrivateIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerDefaultPoolOriginServersVnPrivateIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    if (this._virtualNetwork?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualNetwork = this._virtualNetwork?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerDefaultPoolOriginServersVnPrivateIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ip = undefined;
      this._ipv6 = undefined;
      this._virtualNetwork.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ip = value.ip;
      this._ipv6 = value.ipv6;
      this._virtualNetwork.internalValue = value.virtualNetwork;
    }
  }

  // ip - computed: false, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6?: string; 
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }
  public set ipv6(value: string) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }

  // virtual_network - computed: false, optional: false, required: true
  private _virtualNetwork = new HttpLoadbalancerDefaultPoolOriginServersVnPrivateIpVirtualNetworkOutputReference(this, "virtual_network");
  public get virtualNetwork() {
    return this._virtualNetwork;
  }
  public putVirtualNetwork(value: HttpLoadbalancerDefaultPoolOriginServersVnPrivateIpVirtualNetwork) {
    this._virtualNetwork.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkInput() {
    return this._virtualNetwork.internalValue;
  }
}
export interface HttpLoadbalancerDefaultPoolOriginServersVnPrivateNamePrivateNetwork {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerDefaultPoolOriginServersVnPrivateNamePrivateNetworkToTerraform(struct?: HttpLoadbalancerDefaultPoolOriginServersVnPrivateNamePrivateNetworkOutputReference | HttpLoadbalancerDefaultPoolOriginServersVnPrivateNamePrivateNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function httpLoadbalancerDefaultPoolOriginServersVnPrivateNamePrivateNetworkToHclTerraform(struct?: HttpLoadbalancerDefaultPoolOriginServersVnPrivateNamePrivateNetworkOutputReference | HttpLoadbalancerDefaultPoolOriginServersVnPrivateNamePrivateNetwork): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerDefaultPoolOriginServersVnPrivateNamePrivateNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerDefaultPoolOriginServersVnPrivateNamePrivateNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerDefaultPoolOriginServersVnPrivateNamePrivateNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface HttpLoadbalancerDefaultPoolOriginServersVnPrivateName {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#dns_name HttpLoadbalancer#dns_name}
  */
  readonly dnsName: string;
  /**
  * private_network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#private_network HttpLoadbalancer#private_network}
  */
  readonly privateNetwork: HttpLoadbalancerDefaultPoolOriginServersVnPrivateNamePrivateNetwork;
}

export function httpLoadbalancerDefaultPoolOriginServersVnPrivateNameToTerraform(struct?: HttpLoadbalancerDefaultPoolOriginServersVnPrivateNameOutputReference | HttpLoadbalancerDefaultPoolOriginServersVnPrivateName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_name: cdktf.stringToTerraform(struct!.dnsName),
    private_network: httpLoadbalancerDefaultPoolOriginServersVnPrivateNamePrivateNetworkToTerraform(struct!.privateNetwork),
  }
}


export function httpLoadbalancerDefaultPoolOriginServersVnPrivateNameToHclTerraform(struct?: HttpLoadbalancerDefaultPoolOriginServersVnPrivateNameOutputReference | HttpLoadbalancerDefaultPoolOriginServersVnPrivateName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_name: {
      value: cdktf.stringToHclTerraform(struct!.dnsName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_network: {
      value: httpLoadbalancerDefaultPoolOriginServersVnPrivateNamePrivateNetworkToHclTerraform(struct!.privateNetwork),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerDefaultPoolOriginServersVnPrivateNamePrivateNetworkList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerDefaultPoolOriginServersVnPrivateNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerDefaultPoolOriginServersVnPrivateName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsName = this._dnsName;
    }
    if (this._privateNetwork?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateNetwork = this._privateNetwork?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerDefaultPoolOriginServersVnPrivateName | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dnsName = undefined;
      this._privateNetwork.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dnsName = value.dnsName;
      this._privateNetwork.internalValue = value.privateNetwork;
    }
  }

  // dns_name - computed: false, optional: false, required: true
  private _dnsName?: string; 
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }
  public set dnsName(value: string) {
    this._dnsName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNameInput() {
    return this._dnsName;
  }

  // private_network - computed: false, optional: false, required: true
  private _privateNetwork = new HttpLoadbalancerDefaultPoolOriginServersVnPrivateNamePrivateNetworkOutputReference(this, "private_network");
  public get privateNetwork() {
    return this._privateNetwork;
  }
  public putPrivateNetwork(value: HttpLoadbalancerDefaultPoolOriginServersVnPrivateNamePrivateNetwork) {
    this._privateNetwork.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateNetworkInput() {
    return this._privateNetwork.internalValue;
  }
}
export interface HttpLoadbalancerDefaultPoolOriginServers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#labels HttpLoadbalancer#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * cbip_service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#cbip_service HttpLoadbalancer#cbip_service}
  */
  readonly cbipService?: HttpLoadbalancerDefaultPoolOriginServersCbipService;
  /**
  * consul_service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#consul_service HttpLoadbalancer#consul_service}
  */
  readonly consulService?: HttpLoadbalancerDefaultPoolOriginServersConsulService;
  /**
  * custom_endpoint_object block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#custom_endpoint_object HttpLoadbalancer#custom_endpoint_object}
  */
  readonly customEndpointObject?: HttpLoadbalancerDefaultPoolOriginServersCustomEndpointObject;
  /**
  * k8s_service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#k8s_service HttpLoadbalancer#k8s_service}
  */
  readonly k8SService?: HttpLoadbalancerDefaultPoolOriginServersK8SService;
  /**
  * private_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#private_ip HttpLoadbalancer#private_ip}
  */
  readonly privateIp?: HttpLoadbalancerDefaultPoolOriginServersPrivateIp;
  /**
  * private_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#private_name HttpLoadbalancer#private_name}
  */
  readonly privateName?: HttpLoadbalancerDefaultPoolOriginServersPrivateName;
  /**
  * public_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#public_ip HttpLoadbalancer#public_ip}
  */
  readonly publicIp?: HttpLoadbalancerDefaultPoolOriginServersPublicIp;
  /**
  * public_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#public_name HttpLoadbalancer#public_name}
  */
  readonly publicName?: HttpLoadbalancerDefaultPoolOriginServersPublicName;
  /**
  * vn_private_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#vn_private_ip HttpLoadbalancer#vn_private_ip}
  */
  readonly vnPrivateIp?: HttpLoadbalancerDefaultPoolOriginServersVnPrivateIp;
  /**
  * vn_private_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#vn_private_name HttpLoadbalancer#vn_private_name}
  */
  readonly vnPrivateName?: HttpLoadbalancerDefaultPoolOriginServersVnPrivateName;
}

export function httpLoadbalancerDefaultPoolOriginServersToTerraform(struct?: HttpLoadbalancerDefaultPoolOriginServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    cbip_service: httpLoadbalancerDefaultPoolOriginServersCbipServiceToTerraform(struct!.cbipService),
    consul_service: httpLoadbalancerDefaultPoolOriginServersConsulServiceToTerraform(struct!.consulService),
    custom_endpoint_object: httpLoadbalancerDefaultPoolOriginServersCustomEndpointObjectToTerraform(struct!.customEndpointObject),
    k8s_service: httpLoadbalancerDefaultPoolOriginServersK8SServiceToTerraform(struct!.k8SService),
    private_ip: httpLoadbalancerDefaultPoolOriginServersPrivateIpToTerraform(struct!.privateIp),
    private_name: httpLoadbalancerDefaultPoolOriginServersPrivateNameToTerraform(struct!.privateName),
    public_ip: httpLoadbalancerDefaultPoolOriginServersPublicIpToTerraform(struct!.publicIp),
    public_name: httpLoadbalancerDefaultPoolOriginServersPublicNameToTerraform(struct!.publicName),
    vn_private_ip: httpLoadbalancerDefaultPoolOriginServersVnPrivateIpToTerraform(struct!.vnPrivateIp),
    vn_private_name: httpLoadbalancerDefaultPoolOriginServersVnPrivateNameToTerraform(struct!.vnPrivateName),
  }
}


export function httpLoadbalancerDefaultPoolOriginServersToHclTerraform(struct?: HttpLoadbalancerDefaultPoolOriginServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    cbip_service: {
      value: httpLoadbalancerDefaultPoolOriginServersCbipServiceToHclTerraform(struct!.cbipService),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerDefaultPoolOriginServersCbipServiceList",
    },
    consul_service: {
      value: httpLoadbalancerDefaultPoolOriginServersConsulServiceToHclTerraform(struct!.consulService),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerDefaultPoolOriginServersConsulServiceList",
    },
    custom_endpoint_object: {
      value: httpLoadbalancerDefaultPoolOriginServersCustomEndpointObjectToHclTerraform(struct!.customEndpointObject),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerDefaultPoolOriginServersCustomEndpointObjectList",
    },
    k8s_service: {
      value: httpLoadbalancerDefaultPoolOriginServersK8SServiceToHclTerraform(struct!.k8SService),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerDefaultPoolOriginServersK8SServiceList",
    },
    private_ip: {
      value: httpLoadbalancerDefaultPoolOriginServersPrivateIpToHclTerraform(struct!.privateIp),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerDefaultPoolOriginServersPrivateIpList",
    },
    private_name: {
      value: httpLoadbalancerDefaultPoolOriginServersPrivateNameToHclTerraform(struct!.privateName),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerDefaultPoolOriginServersPrivateNameList",
    },
    public_ip: {
      value: httpLoadbalancerDefaultPoolOriginServersPublicIpToHclTerraform(struct!.publicIp),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerDefaultPoolOriginServersPublicIpList",
    },
    public_name: {
      value: httpLoadbalancerDefaultPoolOriginServersPublicNameToHclTerraform(struct!.publicName),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerDefaultPoolOriginServersPublicNameList",
    },
    vn_private_ip: {
      value: httpLoadbalancerDefaultPoolOriginServersVnPrivateIpToHclTerraform(struct!.vnPrivateIp),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerDefaultPoolOriginServersVnPrivateIpList",
    },
    vn_private_name: {
      value: httpLoadbalancerDefaultPoolOriginServersVnPrivateNameToHclTerraform(struct!.vnPrivateName),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerDefaultPoolOriginServersVnPrivateNameList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerDefaultPoolOriginServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttpLoadbalancerDefaultPoolOriginServers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._cbipService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cbipService = this._cbipService?.internalValue;
    }
    if (this._consulService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.consulService = this._consulService?.internalValue;
    }
    if (this._customEndpointObject?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customEndpointObject = this._customEndpointObject?.internalValue;
    }
    if (this._k8SService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.k8SService = this._k8SService?.internalValue;
    }
    if (this._privateIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateIp = this._privateIp?.internalValue;
    }
    if (this._privateName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateName = this._privateName?.internalValue;
    }
    if (this._publicIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicIp = this._publicIp?.internalValue;
    }
    if (this._publicName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicName = this._publicName?.internalValue;
    }
    if (this._vnPrivateIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vnPrivateIp = this._vnPrivateIp?.internalValue;
    }
    if (this._vnPrivateName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vnPrivateName = this._vnPrivateName?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerDefaultPoolOriginServers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labels = undefined;
      this._cbipService.internalValue = undefined;
      this._consulService.internalValue = undefined;
      this._customEndpointObject.internalValue = undefined;
      this._k8SService.internalValue = undefined;
      this._privateIp.internalValue = undefined;
      this._privateName.internalValue = undefined;
      this._publicIp.internalValue = undefined;
      this._publicName.internalValue = undefined;
      this._vnPrivateIp.internalValue = undefined;
      this._vnPrivateName.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labels = value.labels;
      this._cbipService.internalValue = value.cbipService;
      this._consulService.internalValue = value.consulService;
      this._customEndpointObject.internalValue = value.customEndpointObject;
      this._k8SService.internalValue = value.k8SService;
      this._privateIp.internalValue = value.privateIp;
      this._privateName.internalValue = value.privateName;
      this._publicIp.internalValue = value.publicIp;
      this._publicName.internalValue = value.publicName;
      this._vnPrivateIp.internalValue = value.vnPrivateIp;
      this._vnPrivateName.internalValue = value.vnPrivateName;
    }
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // cbip_service - computed: false, optional: true, required: false
  private _cbipService = new HttpLoadbalancerDefaultPoolOriginServersCbipServiceOutputReference(this, "cbip_service");
  public get cbipService() {
    return this._cbipService;
  }
  public putCbipService(value: HttpLoadbalancerDefaultPoolOriginServersCbipService) {
    this._cbipService.internalValue = value;
  }
  public resetCbipService() {
    this._cbipService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cbipServiceInput() {
    return this._cbipService.internalValue;
  }

  // consul_service - computed: false, optional: true, required: false
  private _consulService = new HttpLoadbalancerDefaultPoolOriginServersConsulServiceOutputReference(this, "consul_service");
  public get consulService() {
    return this._consulService;
  }
  public putConsulService(value: HttpLoadbalancerDefaultPoolOriginServersConsulService) {
    this._consulService.internalValue = value;
  }
  public resetConsulService() {
    this._consulService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consulServiceInput() {
    return this._consulService.internalValue;
  }

  // custom_endpoint_object - computed: false, optional: true, required: false
  private _customEndpointObject = new HttpLoadbalancerDefaultPoolOriginServersCustomEndpointObjectOutputReference(this, "custom_endpoint_object");
  public get customEndpointObject() {
    return this._customEndpointObject;
  }
  public putCustomEndpointObject(value: HttpLoadbalancerDefaultPoolOriginServersCustomEndpointObject) {
    this._customEndpointObject.internalValue = value;
  }
  public resetCustomEndpointObject() {
    this._customEndpointObject.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customEndpointObjectInput() {
    return this._customEndpointObject.internalValue;
  }

  // k8s_service - computed: false, optional: true, required: false
  private _k8SService = new HttpLoadbalancerDefaultPoolOriginServersK8SServiceOutputReference(this, "k8s_service");
  public get k8SService() {
    return this._k8SService;
  }
  public putK8SService(value: HttpLoadbalancerDefaultPoolOriginServersK8SService) {
    this._k8SService.internalValue = value;
  }
  public resetK8SService() {
    this._k8SService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get k8SServiceInput() {
    return this._k8SService.internalValue;
  }

  // private_ip - computed: false, optional: true, required: false
  private _privateIp = new HttpLoadbalancerDefaultPoolOriginServersPrivateIpOutputReference(this, "private_ip");
  public get privateIp() {
    return this._privateIp;
  }
  public putPrivateIp(value: HttpLoadbalancerDefaultPoolOriginServersPrivateIp) {
    this._privateIp.internalValue = value;
  }
  public resetPrivateIp() {
    this._privateIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpInput() {
    return this._privateIp.internalValue;
  }

  // private_name - computed: false, optional: true, required: false
  private _privateName = new HttpLoadbalancerDefaultPoolOriginServersPrivateNameOutputReference(this, "private_name");
  public get privateName() {
    return this._privateName;
  }
  public putPrivateName(value: HttpLoadbalancerDefaultPoolOriginServersPrivateName) {
    this._privateName.internalValue = value;
  }
  public resetPrivateName() {
    this._privateName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateNameInput() {
    return this._privateName.internalValue;
  }

  // public_ip - computed: false, optional: true, required: false
  private _publicIp = new HttpLoadbalancerDefaultPoolOriginServersPublicIpOutputReference(this, "public_ip");
  public get publicIp() {
    return this._publicIp;
  }
  public putPublicIp(value: HttpLoadbalancerDefaultPoolOriginServersPublicIp) {
    this._publicIp.internalValue = value;
  }
  public resetPublicIp() {
    this._publicIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpInput() {
    return this._publicIp.internalValue;
  }

  // public_name - computed: false, optional: true, required: false
  private _publicName = new HttpLoadbalancerDefaultPoolOriginServersPublicNameOutputReference(this, "public_name");
  public get publicName() {
    return this._publicName;
  }
  public putPublicName(value: HttpLoadbalancerDefaultPoolOriginServersPublicName) {
    this._publicName.internalValue = value;
  }
  public resetPublicName() {
    this._publicName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicNameInput() {
    return this._publicName.internalValue;
  }

  // vn_private_ip - computed: false, optional: true, required: false
  private _vnPrivateIp = new HttpLoadbalancerDefaultPoolOriginServersVnPrivateIpOutputReference(this, "vn_private_ip");
  public get vnPrivateIp() {
    return this._vnPrivateIp;
  }
  public putVnPrivateIp(value: HttpLoadbalancerDefaultPoolOriginServersVnPrivateIp) {
    this._vnPrivateIp.internalValue = value;
  }
  public resetVnPrivateIp() {
    this._vnPrivateIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnPrivateIpInput() {
    return this._vnPrivateIp.internalValue;
  }

  // vn_private_name - computed: false, optional: true, required: false
  private _vnPrivateName = new HttpLoadbalancerDefaultPoolOriginServersVnPrivateNameOutputReference(this, "vn_private_name");
  public get vnPrivateName() {
    return this._vnPrivateName;
  }
  public putVnPrivateName(value: HttpLoadbalancerDefaultPoolOriginServersVnPrivateName) {
    this._vnPrivateName.internalValue = value;
  }
  public resetVnPrivateName() {
    this._vnPrivateName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnPrivateNameInput() {
    return this._vnPrivateName.internalValue;
  }
}

export class HttpLoadbalancerDefaultPoolOriginServersList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerDefaultPoolOriginServers[] | cdktf.IResolvable

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
  public get(index: number): HttpLoadbalancerDefaultPoolOriginServersOutputReference {
    return new HttpLoadbalancerDefaultPoolOriginServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerDefaultPoolUpstreamConnPoolReuseType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#disable_conn_pool_reuse HttpLoadbalancer#disable_conn_pool_reuse}
  */
  readonly disableConnPoolReuse?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#enable_conn_pool_reuse HttpLoadbalancer#enable_conn_pool_reuse}
  */
  readonly enableConnPoolReuse?: boolean | cdktf.IResolvable;
}

export function httpLoadbalancerDefaultPoolUpstreamConnPoolReuseTypeToTerraform(struct?: HttpLoadbalancerDefaultPoolUpstreamConnPoolReuseTypeOutputReference | HttpLoadbalancerDefaultPoolUpstreamConnPoolReuseType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_conn_pool_reuse: cdktf.booleanToTerraform(struct!.disableConnPoolReuse),
    enable_conn_pool_reuse: cdktf.booleanToTerraform(struct!.enableConnPoolReuse),
  }
}


export function httpLoadbalancerDefaultPoolUpstreamConnPoolReuseTypeToHclTerraform(struct?: HttpLoadbalancerDefaultPoolUpstreamConnPoolReuseTypeOutputReference | HttpLoadbalancerDefaultPoolUpstreamConnPoolReuseType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_conn_pool_reuse: {
      value: cdktf.booleanToHclTerraform(struct!.disableConnPoolReuse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_conn_pool_reuse: {
      value: cdktf.booleanToHclTerraform(struct!.enableConnPoolReuse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerDefaultPoolUpstreamConnPoolReuseTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerDefaultPoolUpstreamConnPoolReuseType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableConnPoolReuse !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableConnPoolReuse = this._disableConnPoolReuse;
    }
    if (this._enableConnPoolReuse !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableConnPoolReuse = this._enableConnPoolReuse;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerDefaultPoolUpstreamConnPoolReuseType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableConnPoolReuse = undefined;
      this._enableConnPoolReuse = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableConnPoolReuse = value.disableConnPoolReuse;
      this._enableConnPoolReuse = value.enableConnPoolReuse;
    }
  }

  // disable_conn_pool_reuse - computed: false, optional: true, required: false
  private _disableConnPoolReuse?: boolean | cdktf.IResolvable; 
  public get disableConnPoolReuse() {
    return this.getBooleanAttribute('disable_conn_pool_reuse');
  }
  public set disableConnPoolReuse(value: boolean | cdktf.IResolvable) {
    this._disableConnPoolReuse = value;
  }
  public resetDisableConnPoolReuse() {
    this._disableConnPoolReuse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableConnPoolReuseInput() {
    return this._disableConnPoolReuse;
  }

  // enable_conn_pool_reuse - computed: false, optional: true, required: false
  private _enableConnPoolReuse?: boolean | cdktf.IResolvable; 
  public get enableConnPoolReuse() {
    return this.getBooleanAttribute('enable_conn_pool_reuse');
  }
  public set enableConnPoolReuse(value: boolean | cdktf.IResolvable) {
    this._enableConnPoolReuse = value;
  }
  public resetEnableConnPoolReuse() {
    this._enableConnPoolReuse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableConnPoolReuseInput() {
    return this._enableConnPoolReuse;
  }
}
export interface HttpLoadbalancerDefaultPoolUseTlsTlsConfigCustomSecurity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#cipher_suites HttpLoadbalancer#cipher_suites}
  */
  readonly cipherSuites: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#max_version HttpLoadbalancer#max_version}
  */
  readonly maxVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#min_version HttpLoadbalancer#min_version}
  */
  readonly minVersion?: string;
}

export function httpLoadbalancerDefaultPoolUseTlsTlsConfigCustomSecurityToTerraform(struct?: HttpLoadbalancerDefaultPoolUseTlsTlsConfigCustomSecurityOutputReference | HttpLoadbalancerDefaultPoolUseTlsTlsConfigCustomSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cipher_suites: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cipherSuites),
    max_version: cdktf.stringToTerraform(struct!.maxVersion),
    min_version: cdktf.stringToTerraform(struct!.minVersion),
  }
}


export function httpLoadbalancerDefaultPoolUseTlsTlsConfigCustomSecurityToHclTerraform(struct?: HttpLoadbalancerDefaultPoolUseTlsTlsConfigCustomSecurityOutputReference | HttpLoadbalancerDefaultPoolUseTlsTlsConfigCustomSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cipher_suites: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cipherSuites),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    max_version: {
      value: cdktf.stringToHclTerraform(struct!.maxVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_version: {
      value: cdktf.stringToHclTerraform(struct!.minVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerDefaultPoolUseTlsTlsConfigCustomSecurityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerDefaultPoolUseTlsTlsConfigCustomSecurity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cipherSuites !== undefined) {
      hasAnyValues = true;
      internalValueResult.cipherSuites = this._cipherSuites;
    }
    if (this._maxVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxVersion = this._maxVersion;
    }
    if (this._minVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.minVersion = this._minVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerDefaultPoolUseTlsTlsConfigCustomSecurity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cipherSuites = undefined;
      this._maxVersion = undefined;
      this._minVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cipherSuites = value.cipherSuites;
      this._maxVersion = value.maxVersion;
      this._minVersion = value.minVersion;
    }
  }

  // cipher_suites - computed: false, optional: false, required: true
  private _cipherSuites?: string[]; 
  public get cipherSuites() {
    return this.getListAttribute('cipher_suites');
  }
  public set cipherSuites(value: string[]) {
    this._cipherSuites = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherSuitesInput() {
    return this._cipherSuites;
  }

  // max_version - computed: false, optional: true, required: false
  private _maxVersion?: string; 
  public get maxVersion() {
    return this.getStringAttribute('max_version');
  }
  public set maxVersion(value: string) {
    this._maxVersion = value;
  }
  public resetMaxVersion() {
    this._maxVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxVersionInput() {
    return this._maxVersion;
  }

  // min_version - computed: false, optional: true, required: false
  private _minVersion?: string; 
  public get minVersion() {
    return this.getStringAttribute('min_version');
  }
  public set minVersion(value: string) {
    this._minVersion = value;
  }
  public resetMinVersion() {
    this._minVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minVersionInput() {
    return this._minVersion;
  }
}
export interface HttpLoadbalancerDefaultPoolUseTlsTlsConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#default_security HttpLoadbalancer#default_security}
  */
  readonly defaultSecurity?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#low_security HttpLoadbalancer#low_security}
  */
  readonly lowSecurity?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#medium_security HttpLoadbalancer#medium_security}
  */
  readonly mediumSecurity?: boolean | cdktf.IResolvable;
  /**
  * custom_security block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#custom_security HttpLoadbalancer#custom_security}
  */
  readonly customSecurity?: HttpLoadbalancerDefaultPoolUseTlsTlsConfigCustomSecurity;
}

export function httpLoadbalancerDefaultPoolUseTlsTlsConfigToTerraform(struct?: HttpLoadbalancerDefaultPoolUseTlsTlsConfigOutputReference | HttpLoadbalancerDefaultPoolUseTlsTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_security: cdktf.booleanToTerraform(struct!.defaultSecurity),
    low_security: cdktf.booleanToTerraform(struct!.lowSecurity),
    medium_security: cdktf.booleanToTerraform(struct!.mediumSecurity),
    custom_security: httpLoadbalancerDefaultPoolUseTlsTlsConfigCustomSecurityToTerraform(struct!.customSecurity),
  }
}


export function httpLoadbalancerDefaultPoolUseTlsTlsConfigToHclTerraform(struct?: HttpLoadbalancerDefaultPoolUseTlsTlsConfigOutputReference | HttpLoadbalancerDefaultPoolUseTlsTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_security: {
      value: cdktf.booleanToHclTerraform(struct!.defaultSecurity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    low_security: {
      value: cdktf.booleanToHclTerraform(struct!.lowSecurity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    medium_security: {
      value: cdktf.booleanToHclTerraform(struct!.mediumSecurity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    custom_security: {
      value: httpLoadbalancerDefaultPoolUseTlsTlsConfigCustomSecurityToHclTerraform(struct!.customSecurity),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerDefaultPoolUseTlsTlsConfigCustomSecurityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerDefaultPoolUseTlsTlsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerDefaultPoolUseTlsTlsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultSecurity !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultSecurity = this._defaultSecurity;
    }
    if (this._lowSecurity !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowSecurity = this._lowSecurity;
    }
    if (this._mediumSecurity !== undefined) {
      hasAnyValues = true;
      internalValueResult.mediumSecurity = this._mediumSecurity;
    }
    if (this._customSecurity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSecurity = this._customSecurity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerDefaultPoolUseTlsTlsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultSecurity = undefined;
      this._lowSecurity = undefined;
      this._mediumSecurity = undefined;
      this._customSecurity.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultSecurity = value.defaultSecurity;
      this._lowSecurity = value.lowSecurity;
      this._mediumSecurity = value.mediumSecurity;
      this._customSecurity.internalValue = value.customSecurity;
    }
  }

  // default_security - computed: false, optional: true, required: false
  private _defaultSecurity?: boolean | cdktf.IResolvable; 
  public get defaultSecurity() {
    return this.getBooleanAttribute('default_security');
  }
  public set defaultSecurity(value: boolean | cdktf.IResolvable) {
    this._defaultSecurity = value;
  }
  public resetDefaultSecurity() {
    this._defaultSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSecurityInput() {
    return this._defaultSecurity;
  }

  // low_security - computed: false, optional: true, required: false
  private _lowSecurity?: boolean | cdktf.IResolvable; 
  public get lowSecurity() {
    return this.getBooleanAttribute('low_security');
  }
  public set lowSecurity(value: boolean | cdktf.IResolvable) {
    this._lowSecurity = value;
  }
  public resetLowSecurity() {
    this._lowSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowSecurityInput() {
    return this._lowSecurity;
  }

  // medium_security - computed: false, optional: true, required: false
  private _mediumSecurity?: boolean | cdktf.IResolvable; 
  public get mediumSecurity() {
    return this.getBooleanAttribute('medium_security');
  }
  public set mediumSecurity(value: boolean | cdktf.IResolvable) {
    this._mediumSecurity = value;
  }
  public resetMediumSecurity() {
    this._mediumSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediumSecurityInput() {
    return this._mediumSecurity;
  }

  // custom_security - computed: false, optional: true, required: false
  private _customSecurity = new HttpLoadbalancerDefaultPoolUseTlsTlsConfigCustomSecurityOutputReference(this, "custom_security");
  public get customSecurity() {
    return this._customSecurity;
  }
  public putCustomSecurity(value: HttpLoadbalancerDefaultPoolUseTlsTlsConfigCustomSecurity) {
    this._customSecurity.internalValue = value;
  }
  public resetCustomSecurity() {
    this._customSecurity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSecurityInput() {
    return this._customSecurity.internalValue;
  }
}
export interface HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesCustomHashAlgorithms {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#hash_algorithms HttpLoadbalancer#hash_algorithms}
  */
  readonly hashAlgorithms: string[];
}

export function httpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesCustomHashAlgorithmsToTerraform(struct?: HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesCustomHashAlgorithmsOutputReference | HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesCustomHashAlgorithms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hash_algorithms: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hashAlgorithms),
  }
}


export function httpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesCustomHashAlgorithmsToHclTerraform(struct?: HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesCustomHashAlgorithmsOutputReference | HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesCustomHashAlgorithms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hash_algorithms: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hashAlgorithms),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesCustomHashAlgorithmsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesCustomHashAlgorithms | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hashAlgorithms !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashAlgorithms = this._hashAlgorithms;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesCustomHashAlgorithms | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hashAlgorithms = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hashAlgorithms = value.hashAlgorithms;
    }
  }

  // hash_algorithms - computed: false, optional: false, required: true
  private _hashAlgorithms?: string[]; 
  public get hashAlgorithms() {
    return this.getListAttribute('hash_algorithms');
  }
  public set hashAlgorithms(value: string[]) {
    this._hashAlgorithms = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hashAlgorithmsInput() {
    return this._hashAlgorithms;
  }
}
export interface HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesDisableOcspStapling {
}

export function httpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesDisableOcspStaplingToTerraform(struct?: HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesDisableOcspStaplingOutputReference | HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesDisableOcspStapling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function httpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesDisableOcspStaplingToHclTerraform(struct?: HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesDisableOcspStaplingOutputReference | HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesDisableOcspStapling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesDisableOcspStaplingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesDisableOcspStapling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesDisableOcspStapling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesPrivateKeyBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#decryption_provider HttpLoadbalancer#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#location HttpLoadbalancer#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#store_provider HttpLoadbalancer#store_provider}
  */
  readonly storeProvider?: string;
}

export function httpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesPrivateKeyBlindfoldSecretInfoToTerraform(struct?: HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesPrivateKeyBlindfoldSecretInfoOutputReference | HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesPrivateKeyBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function httpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesPrivateKeyBlindfoldSecretInfoToHclTerraform(struct?: HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesPrivateKeyBlindfoldSecretInfoOutputReference | HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesPrivateKeyBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesPrivateKeyBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesPrivateKeyBlindfoldSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesPrivateKeyBlindfoldSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesPrivateKeyBlindfoldSecretInfoInternal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#decryption_provider HttpLoadbalancer#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#location HttpLoadbalancer#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#store_provider HttpLoadbalancer#store_provider}
  */
  readonly storeProvider?: string;
}

export function httpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesPrivateKeyBlindfoldSecretInfoInternalToTerraform(struct?: HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesPrivateKeyBlindfoldSecretInfoInternalOutputReference | HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesPrivateKeyBlindfoldSecretInfoInternal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function httpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesPrivateKeyBlindfoldSecretInfoInternalToHclTerraform(struct?: HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesPrivateKeyBlindfoldSecretInfoInternalOutputReference | HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesPrivateKeyBlindfoldSecretInfoInternal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesPrivateKeyBlindfoldSecretInfoInternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesPrivateKeyBlindfoldSecretInfoInternal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesPrivateKeyBlindfoldSecretInfoInternal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesPrivateKeyClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#provider HttpLoadbalancer#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#url HttpLoadbalancer#url}
  */
  readonly url: string;
}

export function httpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesPrivateKeyClearSecretInfoToTerraform(struct?: HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesPrivateKeyClearSecretInfoOutputReference | HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesPrivateKeyClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function httpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesPrivateKeyClearSecretInfoToHclTerraform(struct?: HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesPrivateKeyClearSecretInfoOutputReference | HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesPrivateKeyClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesPrivateKeyClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesPrivateKeyClearSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesPrivateKeyClearSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._provider = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._provider = value.provider;
      this._url = value.url;
    }
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesPrivateKeyVaultSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#key HttpLoadbalancer#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#location HttpLoadbalancer#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#provider HttpLoadbalancer#provider}
  */
  readonly provider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#secret_encoding HttpLoadbalancer#secret_encoding}
  */
  readonly secretEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#version HttpLoadbalancer#version}
  */
  readonly version?: number;
}

export function httpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesPrivateKeyVaultSecretInfoToTerraform(struct?: HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesPrivateKeyVaultSecretInfoOutputReference | HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesPrivateKeyVaultSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    location: cdktf.stringToTerraform(struct!.location),
    provider: cdktf.stringToTerraform(struct!.provider),
    secret_encoding: cdktf.stringToTerraform(struct!.secretEncoding),
    version: cdktf.numberToTerraform(struct!.version),
  }
}


export function httpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesPrivateKeyVaultSecretInfoToHclTerraform(struct?: HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesPrivateKeyVaultSecretInfoOutputReference | HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesPrivateKeyVaultSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_encoding: {
      value: cdktf.stringToHclTerraform(struct!.secretEncoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.numberToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesPrivateKeyVaultSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesPrivateKeyVaultSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._secretEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEncoding = this._secretEncoding;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesPrivateKeyVaultSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._location = undefined;
      this._provider = undefined;
      this._secretEncoding = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._location = value.location;
      this._provider = value.provider;
      this._secretEncoding = value.secretEncoding;
      this._version = value.version;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // provider - computed: false, optional: false, required: true
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // secret_encoding - computed: false, optional: true, required: false
  private _secretEncoding?: string; 
  public get secretEncoding() {
    return this.getStringAttribute('secret_encoding');
  }
  public set secretEncoding(value: string) {
    this._secretEncoding = value;
  }
  public resetSecretEncoding() {
    this._secretEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEncodingInput() {
    return this._secretEncoding;
  }

  // version - computed: false, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesPrivateKeyWingmanSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name: string;
}

export function httpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesPrivateKeyWingmanSecretInfoToTerraform(struct?: HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesPrivateKeyWingmanSecretInfoOutputReference | HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesPrivateKeyWingmanSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function httpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesPrivateKeyWingmanSecretInfoToHclTerraform(struct?: HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesPrivateKeyWingmanSecretInfoOutputReference | HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesPrivateKeyWingmanSecretInfo): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesPrivateKeyWingmanSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesPrivateKeyWingmanSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesPrivateKeyWingmanSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
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
}
export interface HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesPrivateKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#secret_encoding_type HttpLoadbalancer#secret_encoding_type}
  */
  readonly secretEncodingType?: string;
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#blindfold_secret_info HttpLoadbalancer#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesPrivateKeyBlindfoldSecretInfo;
  /**
  * blindfold_secret_info_internal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#blindfold_secret_info_internal HttpLoadbalancer#blindfold_secret_info_internal}
  */
  readonly blindfoldSecretInfoInternal?: HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesPrivateKeyBlindfoldSecretInfoInternal;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#clear_secret_info HttpLoadbalancer#clear_secret_info}
  */
  readonly clearSecretInfo?: HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesPrivateKeyClearSecretInfo;
  /**
  * vault_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#vault_secret_info HttpLoadbalancer#vault_secret_info}
  */
  readonly vaultSecretInfo?: HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesPrivateKeyVaultSecretInfo;
  /**
  * wingman_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#wingman_secret_info HttpLoadbalancer#wingman_secret_info}
  */
  readonly wingmanSecretInfo?: HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesPrivateKeyWingmanSecretInfo;
}

export function httpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesPrivateKeyToTerraform(struct?: HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesPrivateKeyOutputReference | HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesPrivateKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_encoding_type: cdktf.stringToTerraform(struct!.secretEncodingType),
    blindfold_secret_info: httpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesPrivateKeyBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    blindfold_secret_info_internal: httpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesPrivateKeyBlindfoldSecretInfoInternalToTerraform(struct!.blindfoldSecretInfoInternal),
    clear_secret_info: httpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesPrivateKeyClearSecretInfoToTerraform(struct!.clearSecretInfo),
    vault_secret_info: httpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesPrivateKeyVaultSecretInfoToTerraform(struct!.vaultSecretInfo),
    wingman_secret_info: httpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesPrivateKeyWingmanSecretInfoToTerraform(struct!.wingmanSecretInfo),
  }
}


export function httpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesPrivateKeyToHclTerraform(struct?: HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesPrivateKeyOutputReference | HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesPrivateKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_encoding_type: {
      value: cdktf.stringToHclTerraform(struct!.secretEncodingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    blindfold_secret_info: {
      value: httpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesPrivateKeyBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesPrivateKeyBlindfoldSecretInfoList",
    },
    blindfold_secret_info_internal: {
      value: httpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesPrivateKeyBlindfoldSecretInfoInternalToHclTerraform(struct!.blindfoldSecretInfoInternal),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesPrivateKeyBlindfoldSecretInfoInternalList",
    },
    clear_secret_info: {
      value: httpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesPrivateKeyClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesPrivateKeyClearSecretInfoList",
    },
    vault_secret_info: {
      value: httpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesPrivateKeyVaultSecretInfoToHclTerraform(struct!.vaultSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesPrivateKeyVaultSecretInfoList",
    },
    wingman_secret_info: {
      value: httpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesPrivateKeyWingmanSecretInfoToHclTerraform(struct!.wingmanSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesPrivateKeyWingmanSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesPrivateKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesPrivateKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretEncodingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEncodingType = this._secretEncodingType;
    }
    if (this._blindfoldSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfo = this._blindfoldSecretInfo?.internalValue;
    }
    if (this._blindfoldSecretInfoInternal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfoInternal = this._blindfoldSecretInfoInternal?.internalValue;
    }
    if (this._clearSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSecretInfo = this._clearSecretInfo?.internalValue;
    }
    if (this._vaultSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultSecretInfo = this._vaultSecretInfo?.internalValue;
    }
    if (this._wingmanSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wingmanSecretInfo = this._wingmanSecretInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesPrivateKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretEncodingType = undefined;
      this._blindfoldSecretInfo.internalValue = undefined;
      this._blindfoldSecretInfoInternal.internalValue = undefined;
      this._clearSecretInfo.internalValue = undefined;
      this._vaultSecretInfo.internalValue = undefined;
      this._wingmanSecretInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretEncodingType = value.secretEncodingType;
      this._blindfoldSecretInfo.internalValue = value.blindfoldSecretInfo;
      this._blindfoldSecretInfoInternal.internalValue = value.blindfoldSecretInfoInternal;
      this._clearSecretInfo.internalValue = value.clearSecretInfo;
      this._vaultSecretInfo.internalValue = value.vaultSecretInfo;
      this._wingmanSecretInfo.internalValue = value.wingmanSecretInfo;
    }
  }

  // secret_encoding_type - computed: false, optional: true, required: false
  private _secretEncodingType?: string; 
  public get secretEncodingType() {
    return this.getStringAttribute('secret_encoding_type');
  }
  public set secretEncodingType(value: string) {
    this._secretEncodingType = value;
  }
  public resetSecretEncodingType() {
    this._secretEncodingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEncodingTypeInput() {
    return this._secretEncodingType;
  }

  // blindfold_secret_info - computed: false, optional: true, required: false
  private _blindfoldSecretInfo = new HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesPrivateKeyBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesPrivateKeyBlindfoldSecretInfo) {
    this._blindfoldSecretInfo.internalValue = value;
  }
  public resetBlindfoldSecretInfo() {
    this._blindfoldSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInput() {
    return this._blindfoldSecretInfo.internalValue;
  }

  // blindfold_secret_info_internal - computed: false, optional: true, required: false
  private _blindfoldSecretInfoInternal = new HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesPrivateKeyBlindfoldSecretInfoInternalOutputReference(this, "blindfold_secret_info_internal");
  public get blindfoldSecretInfoInternal() {
    return this._blindfoldSecretInfoInternal;
  }
  public putBlindfoldSecretInfoInternal(value: HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesPrivateKeyBlindfoldSecretInfoInternal) {
    this._blindfoldSecretInfoInternal.internalValue = value;
  }
  public resetBlindfoldSecretInfoInternal() {
    this._blindfoldSecretInfoInternal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInternalInput() {
    return this._blindfoldSecretInfoInternal.internalValue;
  }

  // clear_secret_info - computed: false, optional: true, required: false
  private _clearSecretInfo = new HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesPrivateKeyClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesPrivateKeyClearSecretInfo) {
    this._clearSecretInfo.internalValue = value;
  }
  public resetClearSecretInfo() {
    this._clearSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearSecretInfoInput() {
    return this._clearSecretInfo.internalValue;
  }

  // vault_secret_info - computed: false, optional: true, required: false
  private _vaultSecretInfo = new HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesPrivateKeyVaultSecretInfoOutputReference(this, "vault_secret_info");
  public get vaultSecretInfo() {
    return this._vaultSecretInfo;
  }
  public putVaultSecretInfo(value: HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesPrivateKeyVaultSecretInfo) {
    this._vaultSecretInfo.internalValue = value;
  }
  public resetVaultSecretInfo() {
    this._vaultSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultSecretInfoInput() {
    return this._vaultSecretInfo.internalValue;
  }

  // wingman_secret_info - computed: false, optional: true, required: false
  private _wingmanSecretInfo = new HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesPrivateKeyWingmanSecretInfoOutputReference(this, "wingman_secret_info");
  public get wingmanSecretInfo() {
    return this._wingmanSecretInfo;
  }
  public putWingmanSecretInfo(value: HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesPrivateKeyWingmanSecretInfo) {
    this._wingmanSecretInfo.internalValue = value;
  }
  public resetWingmanSecretInfo() {
    this._wingmanSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wingmanSecretInfoInput() {
    return this._wingmanSecretInfo.internalValue;
  }
}
export interface HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesUseSystemDefaults {
}

export function httpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesUseSystemDefaultsToTerraform(struct?: HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesUseSystemDefaultsOutputReference | HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesUseSystemDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function httpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesUseSystemDefaultsToHclTerraform(struct?: HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesUseSystemDefaultsOutputReference | HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesUseSystemDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesUseSystemDefaultsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesUseSystemDefaults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesUseSystemDefaults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificates {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#certificate_url HttpLoadbalancer#certificate_url}
  */
  readonly certificateUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#description HttpLoadbalancer#description}
  */
  readonly description?: string;
  /**
  * custom_hash_algorithms block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#custom_hash_algorithms HttpLoadbalancer#custom_hash_algorithms}
  */
  readonly customHashAlgorithms?: HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesCustomHashAlgorithms;
  /**
  * disable_ocsp_stapling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#disable_ocsp_stapling HttpLoadbalancer#disable_ocsp_stapling}
  */
  readonly disableOcspStapling?: HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesDisableOcspStapling;
  /**
  * private_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#private_key HttpLoadbalancer#private_key}
  */
  readonly privateKey: HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesPrivateKey;
  /**
  * use_system_defaults block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#use_system_defaults HttpLoadbalancer#use_system_defaults}
  */
  readonly useSystemDefaults?: HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesUseSystemDefaults;
}

export function httpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesToTerraform(struct?: HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_url: cdktf.stringToTerraform(struct!.certificateUrl),
    description: cdktf.stringToTerraform(struct!.description),
    custom_hash_algorithms: httpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesCustomHashAlgorithmsToTerraform(struct!.customHashAlgorithms),
    disable_ocsp_stapling: httpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesDisableOcspStaplingToTerraform(struct!.disableOcspStapling),
    private_key: httpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesPrivateKeyToTerraform(struct!.privateKey),
    use_system_defaults: httpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesUseSystemDefaultsToTerraform(struct!.useSystemDefaults),
  }
}


export function httpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesToHclTerraform(struct?: HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_url: {
      value: cdktf.stringToHclTerraform(struct!.certificateUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_hash_algorithms: {
      value: httpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesCustomHashAlgorithmsToHclTerraform(struct!.customHashAlgorithms),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesCustomHashAlgorithmsList",
    },
    disable_ocsp_stapling: {
      value: httpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesDisableOcspStaplingToHclTerraform(struct!.disableOcspStapling),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesDisableOcspStaplingList",
    },
    private_key: {
      value: httpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesPrivateKeyToHclTerraform(struct!.privateKey),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesPrivateKeyList",
    },
    use_system_defaults: {
      value: httpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesUseSystemDefaultsToHclTerraform(struct!.useSystemDefaults),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesUseSystemDefaultsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateUrl = this._certificateUrl;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._customHashAlgorithms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customHashAlgorithms = this._customHashAlgorithms?.internalValue;
    }
    if (this._disableOcspStapling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableOcspStapling = this._disableOcspStapling?.internalValue;
    }
    if (this._privateKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey?.internalValue;
    }
    if (this._useSystemDefaults?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.useSystemDefaults = this._useSystemDefaults?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateUrl = undefined;
      this._description = undefined;
      this._customHashAlgorithms.internalValue = undefined;
      this._disableOcspStapling.internalValue = undefined;
      this._privateKey.internalValue = undefined;
      this._useSystemDefaults.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateUrl = value.certificateUrl;
      this._description = value.description;
      this._customHashAlgorithms.internalValue = value.customHashAlgorithms;
      this._disableOcspStapling.internalValue = value.disableOcspStapling;
      this._privateKey.internalValue = value.privateKey;
      this._useSystemDefaults.internalValue = value.useSystemDefaults;
    }
  }

  // certificate_url - computed: false, optional: false, required: true
  private _certificateUrl?: string; 
  public get certificateUrl() {
    return this.getStringAttribute('certificate_url');
  }
  public set certificateUrl(value: string) {
    this._certificateUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateUrlInput() {
    return this._certificateUrl;
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

  // custom_hash_algorithms - computed: false, optional: true, required: false
  private _customHashAlgorithms = new HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesCustomHashAlgorithmsOutputReference(this, "custom_hash_algorithms");
  public get customHashAlgorithms() {
    return this._customHashAlgorithms;
  }
  public putCustomHashAlgorithms(value: HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesCustomHashAlgorithms) {
    this._customHashAlgorithms.internalValue = value;
  }
  public resetCustomHashAlgorithms() {
    this._customHashAlgorithms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHashAlgorithmsInput() {
    return this._customHashAlgorithms.internalValue;
  }

  // disable_ocsp_stapling - computed: false, optional: true, required: false
  private _disableOcspStapling = new HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesDisableOcspStaplingOutputReference(this, "disable_ocsp_stapling");
  public get disableOcspStapling() {
    return this._disableOcspStapling;
  }
  public putDisableOcspStapling(value: HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesDisableOcspStapling) {
    this._disableOcspStapling.internalValue = value;
  }
  public resetDisableOcspStapling() {
    this._disableOcspStapling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableOcspStaplingInput() {
    return this._disableOcspStapling.internalValue;
  }

  // private_key - computed: false, optional: false, required: true
  private _privateKey = new HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesPrivateKeyOutputReference(this, "private_key");
  public get privateKey() {
    return this._privateKey;
  }
  public putPrivateKey(value: HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesPrivateKey) {
    this._privateKey.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey.internalValue;
  }

  // use_system_defaults - computed: false, optional: true, required: false
  private _useSystemDefaults = new HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesUseSystemDefaultsOutputReference(this, "use_system_defaults");
  public get useSystemDefaults() {
    return this._useSystemDefaults;
  }
  public putUseSystemDefaults(value: HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesUseSystemDefaults) {
    this._useSystemDefaults.internalValue = value;
  }
  public resetUseSystemDefaults() {
    this._useSystemDefaults.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSystemDefaultsInput() {
    return this._useSystemDefaults.internalValue;
  }
}

export class HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificates[] | cdktf.IResolvable

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
  public get(index: number): HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesOutputReference {
    return new HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerDefaultPoolUseTlsUseMtls {
  /**
  * tls_certificates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#tls_certificates HttpLoadbalancer#tls_certificates}
  */
  readonly tlsCertificates: HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificates[] | cdktf.IResolvable;
}

export function httpLoadbalancerDefaultPoolUseTlsUseMtlsToTerraform(struct?: HttpLoadbalancerDefaultPoolUseTlsUseMtlsOutputReference | HttpLoadbalancerDefaultPoolUseTlsUseMtls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tls_certificates: cdktf.listMapper(httpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesToTerraform, true)(struct!.tlsCertificates),
  }
}


export function httpLoadbalancerDefaultPoolUseTlsUseMtlsToHclTerraform(struct?: HttpLoadbalancerDefaultPoolUseTlsUseMtlsOutputReference | HttpLoadbalancerDefaultPoolUseTlsUseMtls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tls_certificates: {
      value: cdktf.listMapperHcl(httpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesToHclTerraform, true)(struct!.tlsCertificates),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerDefaultPoolUseTlsUseMtlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerDefaultPoolUseTlsUseMtls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tlsCertificates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsCertificates = this._tlsCertificates?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerDefaultPoolUseTlsUseMtls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tlsCertificates.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tlsCertificates.internalValue = value.tlsCertificates;
    }
  }

  // tls_certificates - computed: false, optional: false, required: true
  private _tlsCertificates = new HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificatesList(this, "tls_certificates", false);
  public get tlsCertificates() {
    return this._tlsCertificates;
  }
  public putTlsCertificates(value: HttpLoadbalancerDefaultPoolUseTlsUseMtlsTlsCertificates[] | cdktf.IResolvable) {
    this._tlsCertificates.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCertificatesInput() {
    return this._tlsCertificates.internalValue;
  }
}
export interface HttpLoadbalancerDefaultPoolUseTlsUseMtlsObj {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerDefaultPoolUseTlsUseMtlsObjToTerraform(struct?: HttpLoadbalancerDefaultPoolUseTlsUseMtlsObjOutputReference | HttpLoadbalancerDefaultPoolUseTlsUseMtlsObj): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function httpLoadbalancerDefaultPoolUseTlsUseMtlsObjToHclTerraform(struct?: HttpLoadbalancerDefaultPoolUseTlsUseMtlsObjOutputReference | HttpLoadbalancerDefaultPoolUseTlsUseMtlsObj): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerDefaultPoolUseTlsUseMtlsObjOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerDefaultPoolUseTlsUseMtlsObj | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerDefaultPoolUseTlsUseMtlsObj | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface HttpLoadbalancerDefaultPoolUseTlsUseServerVerificationTrustedCa {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerDefaultPoolUseTlsUseServerVerificationTrustedCaToTerraform(struct?: HttpLoadbalancerDefaultPoolUseTlsUseServerVerificationTrustedCaOutputReference | HttpLoadbalancerDefaultPoolUseTlsUseServerVerificationTrustedCa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function httpLoadbalancerDefaultPoolUseTlsUseServerVerificationTrustedCaToHclTerraform(struct?: HttpLoadbalancerDefaultPoolUseTlsUseServerVerificationTrustedCaOutputReference | HttpLoadbalancerDefaultPoolUseTlsUseServerVerificationTrustedCa): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerDefaultPoolUseTlsUseServerVerificationTrustedCaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerDefaultPoolUseTlsUseServerVerificationTrustedCa | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerDefaultPoolUseTlsUseServerVerificationTrustedCa | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface HttpLoadbalancerDefaultPoolUseTlsUseServerVerification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#trusted_ca_url HttpLoadbalancer#trusted_ca_url}
  */
  readonly trustedCaUrl?: string;
  /**
  * trusted_ca block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#trusted_ca HttpLoadbalancer#trusted_ca}
  */
  readonly trustedCa?: HttpLoadbalancerDefaultPoolUseTlsUseServerVerificationTrustedCa;
}

export function httpLoadbalancerDefaultPoolUseTlsUseServerVerificationToTerraform(struct?: HttpLoadbalancerDefaultPoolUseTlsUseServerVerificationOutputReference | HttpLoadbalancerDefaultPoolUseTlsUseServerVerification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    trusted_ca_url: cdktf.stringToTerraform(struct!.trustedCaUrl),
    trusted_ca: httpLoadbalancerDefaultPoolUseTlsUseServerVerificationTrustedCaToTerraform(struct!.trustedCa),
  }
}


export function httpLoadbalancerDefaultPoolUseTlsUseServerVerificationToHclTerraform(struct?: HttpLoadbalancerDefaultPoolUseTlsUseServerVerificationOutputReference | HttpLoadbalancerDefaultPoolUseTlsUseServerVerification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    trusted_ca_url: {
      value: cdktf.stringToHclTerraform(struct!.trustedCaUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trusted_ca: {
      value: httpLoadbalancerDefaultPoolUseTlsUseServerVerificationTrustedCaToHclTerraform(struct!.trustedCa),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerDefaultPoolUseTlsUseServerVerificationTrustedCaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerDefaultPoolUseTlsUseServerVerificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerDefaultPoolUseTlsUseServerVerification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._trustedCaUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCaUrl = this._trustedCaUrl;
    }
    if (this._trustedCa?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCa = this._trustedCa?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerDefaultPoolUseTlsUseServerVerification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._trustedCaUrl = undefined;
      this._trustedCa.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._trustedCaUrl = value.trustedCaUrl;
      this._trustedCa.internalValue = value.trustedCa;
    }
  }

  // trusted_ca_url - computed: false, optional: true, required: false
  private _trustedCaUrl?: string; 
  public get trustedCaUrl() {
    return this.getStringAttribute('trusted_ca_url');
  }
  public set trustedCaUrl(value: string) {
    this._trustedCaUrl = value;
  }
  public resetTrustedCaUrl() {
    this._trustedCaUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedCaUrlInput() {
    return this._trustedCaUrl;
  }

  // trusted_ca - computed: false, optional: true, required: false
  private _trustedCa = new HttpLoadbalancerDefaultPoolUseTlsUseServerVerificationTrustedCaOutputReference(this, "trusted_ca");
  public get trustedCa() {
    return this._trustedCa;
  }
  public putTrustedCa(value: HttpLoadbalancerDefaultPoolUseTlsUseServerVerificationTrustedCa) {
    this._trustedCa.internalValue = value;
  }
  public resetTrustedCa() {
    this._trustedCa.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedCaInput() {
    return this._trustedCa.internalValue;
  }
}
export interface HttpLoadbalancerDefaultPoolUseTls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#default_session_key_caching HttpLoadbalancer#default_session_key_caching}
  */
  readonly defaultSessionKeyCaching?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#disable_session_key_caching HttpLoadbalancer#disable_session_key_caching}
  */
  readonly disableSessionKeyCaching?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#disable_sni HttpLoadbalancer#disable_sni}
  */
  readonly disableSni?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#max_session_keys HttpLoadbalancer#max_session_keys}
  */
  readonly maxSessionKeys?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#no_mtls HttpLoadbalancer#no_mtls}
  */
  readonly noMtls?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#skip_server_verification HttpLoadbalancer#skip_server_verification}
  */
  readonly skipServerVerification?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#sni HttpLoadbalancer#sni}
  */
  readonly sni?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#use_host_header_as_sni HttpLoadbalancer#use_host_header_as_sni}
  */
  readonly useHostHeaderAsSni?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#volterra_trusted_ca HttpLoadbalancer#volterra_trusted_ca}
  */
  readonly volterraTrustedCa?: boolean | cdktf.IResolvable;
  /**
  * tls_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#tls_config HttpLoadbalancer#tls_config}
  */
  readonly tlsConfig: HttpLoadbalancerDefaultPoolUseTlsTlsConfig;
  /**
  * use_mtls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#use_mtls HttpLoadbalancer#use_mtls}
  */
  readonly useMtls?: HttpLoadbalancerDefaultPoolUseTlsUseMtls;
  /**
  * use_mtls_obj block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#use_mtls_obj HttpLoadbalancer#use_mtls_obj}
  */
  readonly useMtlsObj?: HttpLoadbalancerDefaultPoolUseTlsUseMtlsObj;
  /**
  * use_server_verification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#use_server_verification HttpLoadbalancer#use_server_verification}
  */
  readonly useServerVerification?: HttpLoadbalancerDefaultPoolUseTlsUseServerVerification;
}

export function httpLoadbalancerDefaultPoolUseTlsToTerraform(struct?: HttpLoadbalancerDefaultPoolUseTlsOutputReference | HttpLoadbalancerDefaultPoolUseTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_session_key_caching: cdktf.booleanToTerraform(struct!.defaultSessionKeyCaching),
    disable_session_key_caching: cdktf.booleanToTerraform(struct!.disableSessionKeyCaching),
    disable_sni: cdktf.booleanToTerraform(struct!.disableSni),
    max_session_keys: cdktf.numberToTerraform(struct!.maxSessionKeys),
    no_mtls: cdktf.booleanToTerraform(struct!.noMtls),
    skip_server_verification: cdktf.booleanToTerraform(struct!.skipServerVerification),
    sni: cdktf.stringToTerraform(struct!.sni),
    use_host_header_as_sni: cdktf.booleanToTerraform(struct!.useHostHeaderAsSni),
    volterra_trusted_ca: cdktf.booleanToTerraform(struct!.volterraTrustedCa),
    tls_config: httpLoadbalancerDefaultPoolUseTlsTlsConfigToTerraform(struct!.tlsConfig),
    use_mtls: httpLoadbalancerDefaultPoolUseTlsUseMtlsToTerraform(struct!.useMtls),
    use_mtls_obj: httpLoadbalancerDefaultPoolUseTlsUseMtlsObjToTerraform(struct!.useMtlsObj),
    use_server_verification: httpLoadbalancerDefaultPoolUseTlsUseServerVerificationToTerraform(struct!.useServerVerification),
  }
}


export function httpLoadbalancerDefaultPoolUseTlsToHclTerraform(struct?: HttpLoadbalancerDefaultPoolUseTlsOutputReference | HttpLoadbalancerDefaultPoolUseTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_session_key_caching: {
      value: cdktf.booleanToHclTerraform(struct!.defaultSessionKeyCaching),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_session_key_caching: {
      value: cdktf.booleanToHclTerraform(struct!.disableSessionKeyCaching),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_sni: {
      value: cdktf.booleanToHclTerraform(struct!.disableSni),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_session_keys: {
      value: cdktf.numberToHclTerraform(struct!.maxSessionKeys),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_mtls: {
      value: cdktf.booleanToHclTerraform(struct!.noMtls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    skip_server_verification: {
      value: cdktf.booleanToHclTerraform(struct!.skipServerVerification),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sni: {
      value: cdktf.stringToHclTerraform(struct!.sni),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_host_header_as_sni: {
      value: cdktf.booleanToHclTerraform(struct!.useHostHeaderAsSni),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    volterra_trusted_ca: {
      value: cdktf.booleanToHclTerraform(struct!.volterraTrustedCa),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tls_config: {
      value: httpLoadbalancerDefaultPoolUseTlsTlsConfigToHclTerraform(struct!.tlsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerDefaultPoolUseTlsTlsConfigList",
    },
    use_mtls: {
      value: httpLoadbalancerDefaultPoolUseTlsUseMtlsToHclTerraform(struct!.useMtls),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerDefaultPoolUseTlsUseMtlsList",
    },
    use_mtls_obj: {
      value: httpLoadbalancerDefaultPoolUseTlsUseMtlsObjToHclTerraform(struct!.useMtlsObj),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerDefaultPoolUseTlsUseMtlsObjList",
    },
    use_server_verification: {
      value: httpLoadbalancerDefaultPoolUseTlsUseServerVerificationToHclTerraform(struct!.useServerVerification),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerDefaultPoolUseTlsUseServerVerificationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerDefaultPoolUseTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerDefaultPoolUseTls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultSessionKeyCaching !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultSessionKeyCaching = this._defaultSessionKeyCaching;
    }
    if (this._disableSessionKeyCaching !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableSessionKeyCaching = this._disableSessionKeyCaching;
    }
    if (this._disableSni !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableSni = this._disableSni;
    }
    if (this._maxSessionKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSessionKeys = this._maxSessionKeys;
    }
    if (this._noMtls !== undefined) {
      hasAnyValues = true;
      internalValueResult.noMtls = this._noMtls;
    }
    if (this._skipServerVerification !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipServerVerification = this._skipServerVerification;
    }
    if (this._sni !== undefined) {
      hasAnyValues = true;
      internalValueResult.sni = this._sni;
    }
    if (this._useHostHeaderAsSni !== undefined) {
      hasAnyValues = true;
      internalValueResult.useHostHeaderAsSni = this._useHostHeaderAsSni;
    }
    if (this._volterraTrustedCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.volterraTrustedCa = this._volterraTrustedCa;
    }
    if (this._tlsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsConfig = this._tlsConfig?.internalValue;
    }
    if (this._useMtls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.useMtls = this._useMtls?.internalValue;
    }
    if (this._useMtlsObj?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.useMtlsObj = this._useMtlsObj?.internalValue;
    }
    if (this._useServerVerification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.useServerVerification = this._useServerVerification?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerDefaultPoolUseTls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultSessionKeyCaching = undefined;
      this._disableSessionKeyCaching = undefined;
      this._disableSni = undefined;
      this._maxSessionKeys = undefined;
      this._noMtls = undefined;
      this._skipServerVerification = undefined;
      this._sni = undefined;
      this._useHostHeaderAsSni = undefined;
      this._volterraTrustedCa = undefined;
      this._tlsConfig.internalValue = undefined;
      this._useMtls.internalValue = undefined;
      this._useMtlsObj.internalValue = undefined;
      this._useServerVerification.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultSessionKeyCaching = value.defaultSessionKeyCaching;
      this._disableSessionKeyCaching = value.disableSessionKeyCaching;
      this._disableSni = value.disableSni;
      this._maxSessionKeys = value.maxSessionKeys;
      this._noMtls = value.noMtls;
      this._skipServerVerification = value.skipServerVerification;
      this._sni = value.sni;
      this._useHostHeaderAsSni = value.useHostHeaderAsSni;
      this._volterraTrustedCa = value.volterraTrustedCa;
      this._tlsConfig.internalValue = value.tlsConfig;
      this._useMtls.internalValue = value.useMtls;
      this._useMtlsObj.internalValue = value.useMtlsObj;
      this._useServerVerification.internalValue = value.useServerVerification;
    }
  }

  // default_session_key_caching - computed: false, optional: true, required: false
  private _defaultSessionKeyCaching?: boolean | cdktf.IResolvable; 
  public get defaultSessionKeyCaching() {
    return this.getBooleanAttribute('default_session_key_caching');
  }
  public set defaultSessionKeyCaching(value: boolean | cdktf.IResolvable) {
    this._defaultSessionKeyCaching = value;
  }
  public resetDefaultSessionKeyCaching() {
    this._defaultSessionKeyCaching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSessionKeyCachingInput() {
    return this._defaultSessionKeyCaching;
  }

  // disable_session_key_caching - computed: false, optional: true, required: false
  private _disableSessionKeyCaching?: boolean | cdktf.IResolvable; 
  public get disableSessionKeyCaching() {
    return this.getBooleanAttribute('disable_session_key_caching');
  }
  public set disableSessionKeyCaching(value: boolean | cdktf.IResolvable) {
    this._disableSessionKeyCaching = value;
  }
  public resetDisableSessionKeyCaching() {
    this._disableSessionKeyCaching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableSessionKeyCachingInput() {
    return this._disableSessionKeyCaching;
  }

  // disable_sni - computed: false, optional: true, required: false
  private _disableSni?: boolean | cdktf.IResolvable; 
  public get disableSni() {
    return this.getBooleanAttribute('disable_sni');
  }
  public set disableSni(value: boolean | cdktf.IResolvable) {
    this._disableSni = value;
  }
  public resetDisableSni() {
    this._disableSni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableSniInput() {
    return this._disableSni;
  }

  // max_session_keys - computed: false, optional: true, required: false
  private _maxSessionKeys?: number; 
  public get maxSessionKeys() {
    return this.getNumberAttribute('max_session_keys');
  }
  public set maxSessionKeys(value: number) {
    this._maxSessionKeys = value;
  }
  public resetMaxSessionKeys() {
    this._maxSessionKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSessionKeysInput() {
    return this._maxSessionKeys;
  }

  // no_mtls - computed: false, optional: true, required: false
  private _noMtls?: boolean | cdktf.IResolvable; 
  public get noMtls() {
    return this.getBooleanAttribute('no_mtls');
  }
  public set noMtls(value: boolean | cdktf.IResolvable) {
    this._noMtls = value;
  }
  public resetNoMtls() {
    this._noMtls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noMtlsInput() {
    return this._noMtls;
  }

  // skip_server_verification - computed: false, optional: true, required: false
  private _skipServerVerification?: boolean | cdktf.IResolvable; 
  public get skipServerVerification() {
    return this.getBooleanAttribute('skip_server_verification');
  }
  public set skipServerVerification(value: boolean | cdktf.IResolvable) {
    this._skipServerVerification = value;
  }
  public resetSkipServerVerification() {
    this._skipServerVerification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipServerVerificationInput() {
    return this._skipServerVerification;
  }

  // sni - computed: false, optional: true, required: false
  private _sni?: string; 
  public get sni() {
    return this.getStringAttribute('sni');
  }
  public set sni(value: string) {
    this._sni = value;
  }
  public resetSni() {
    this._sni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sniInput() {
    return this._sni;
  }

  // use_host_header_as_sni - computed: false, optional: true, required: false
  private _useHostHeaderAsSni?: boolean | cdktf.IResolvable; 
  public get useHostHeaderAsSni() {
    return this.getBooleanAttribute('use_host_header_as_sni');
  }
  public set useHostHeaderAsSni(value: boolean | cdktf.IResolvable) {
    this._useHostHeaderAsSni = value;
  }
  public resetUseHostHeaderAsSni() {
    this._useHostHeaderAsSni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useHostHeaderAsSniInput() {
    return this._useHostHeaderAsSni;
  }

  // volterra_trusted_ca - computed: false, optional: true, required: false
  private _volterraTrustedCa?: boolean | cdktf.IResolvable; 
  public get volterraTrustedCa() {
    return this.getBooleanAttribute('volterra_trusted_ca');
  }
  public set volterraTrustedCa(value: boolean | cdktf.IResolvable) {
    this._volterraTrustedCa = value;
  }
  public resetVolterraTrustedCa() {
    this._volterraTrustedCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volterraTrustedCaInput() {
    return this._volterraTrustedCa;
  }

  // tls_config - computed: false, optional: false, required: true
  private _tlsConfig = new HttpLoadbalancerDefaultPoolUseTlsTlsConfigOutputReference(this, "tls_config");
  public get tlsConfig() {
    return this._tlsConfig;
  }
  public putTlsConfig(value: HttpLoadbalancerDefaultPoolUseTlsTlsConfig) {
    this._tlsConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsConfigInput() {
    return this._tlsConfig.internalValue;
  }

  // use_mtls - computed: false, optional: true, required: false
  private _useMtls = new HttpLoadbalancerDefaultPoolUseTlsUseMtlsOutputReference(this, "use_mtls");
  public get useMtls() {
    return this._useMtls;
  }
  public putUseMtls(value: HttpLoadbalancerDefaultPoolUseTlsUseMtls) {
    this._useMtls.internalValue = value;
  }
  public resetUseMtls() {
    this._useMtls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMtlsInput() {
    return this._useMtls.internalValue;
  }

  // use_mtls_obj - computed: false, optional: true, required: false
  private _useMtlsObj = new HttpLoadbalancerDefaultPoolUseTlsUseMtlsObjOutputReference(this, "use_mtls_obj");
  public get useMtlsObj() {
    return this._useMtlsObj;
  }
  public putUseMtlsObj(value: HttpLoadbalancerDefaultPoolUseTlsUseMtlsObj) {
    this._useMtlsObj.internalValue = value;
  }
  public resetUseMtlsObj() {
    this._useMtlsObj.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMtlsObjInput() {
    return this._useMtlsObj.internalValue;
  }

  // use_server_verification - computed: false, optional: true, required: false
  private _useServerVerification = new HttpLoadbalancerDefaultPoolUseTlsUseServerVerificationOutputReference(this, "use_server_verification");
  public get useServerVerification() {
    return this._useServerVerification;
  }
  public putUseServerVerification(value: HttpLoadbalancerDefaultPoolUseTlsUseServerVerification) {
    this._useServerVerification.internalValue = value;
  }
  public resetUseServerVerification() {
    this._useServerVerification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useServerVerificationInput() {
    return this._useServerVerification.internalValue;
  }
}
export interface HttpLoadbalancerDefaultPoolViewInternal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerDefaultPoolViewInternalToTerraform(struct?: HttpLoadbalancerDefaultPoolViewInternalOutputReference | HttpLoadbalancerDefaultPoolViewInternal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function httpLoadbalancerDefaultPoolViewInternalToHclTerraform(struct?: HttpLoadbalancerDefaultPoolViewInternalOutputReference | HttpLoadbalancerDefaultPoolViewInternal): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerDefaultPoolViewInternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerDefaultPoolViewInternal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerDefaultPoolViewInternal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface HttpLoadbalancerDefaultPool {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#automatic_port HttpLoadbalancer#automatic_port}
  */
  readonly automaticPort?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#endpoint_selection HttpLoadbalancer#endpoint_selection}
  */
  readonly endpointSelection: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#health_check_port HttpLoadbalancer#health_check_port}
  */
  readonly healthCheckPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#lb_port HttpLoadbalancer#lb_port}
  */
  readonly lbPort?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#loadbalancer_algorithm HttpLoadbalancer#loadbalancer_algorithm}
  */
  readonly loadbalancerAlgorithm: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#no_tls HttpLoadbalancer#no_tls}
  */
  readonly noTls?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#port HttpLoadbalancer#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#same_as_endpoint_port HttpLoadbalancer#same_as_endpoint_port}
  */
  readonly sameAsEndpointPort?: boolean | cdktf.IResolvable;
  /**
  * advanced_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#advanced_options HttpLoadbalancer#advanced_options}
  */
  readonly advancedOptions?: HttpLoadbalancerDefaultPoolAdvancedOptions;
  /**
  * healthcheck block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#healthcheck HttpLoadbalancer#healthcheck}
  */
  readonly healthcheck?: HttpLoadbalancerDefaultPoolHealthcheck[] | cdktf.IResolvable;
  /**
  * origin_servers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#origin_servers HttpLoadbalancer#origin_servers}
  */
  readonly originServers: HttpLoadbalancerDefaultPoolOriginServers[] | cdktf.IResolvable;
  /**
  * upstream_conn_pool_reuse_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#upstream_conn_pool_reuse_type HttpLoadbalancer#upstream_conn_pool_reuse_type}
  */
  readonly upstreamConnPoolReuseType?: HttpLoadbalancerDefaultPoolUpstreamConnPoolReuseType;
  /**
  * use_tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#use_tls HttpLoadbalancer#use_tls}
  */
  readonly useTls?: HttpLoadbalancerDefaultPoolUseTls;
  /**
  * view_internal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#view_internal HttpLoadbalancer#view_internal}
  */
  readonly viewInternal?: HttpLoadbalancerDefaultPoolViewInternal;
}

export function httpLoadbalancerDefaultPoolToTerraform(struct?: HttpLoadbalancerDefaultPoolOutputReference | HttpLoadbalancerDefaultPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    automatic_port: cdktf.booleanToTerraform(struct!.automaticPort),
    endpoint_selection: cdktf.stringToTerraform(struct!.endpointSelection),
    health_check_port: cdktf.numberToTerraform(struct!.healthCheckPort),
    lb_port: cdktf.booleanToTerraform(struct!.lbPort),
    loadbalancer_algorithm: cdktf.stringToTerraform(struct!.loadbalancerAlgorithm),
    no_tls: cdktf.booleanToTerraform(struct!.noTls),
    port: cdktf.numberToTerraform(struct!.port),
    same_as_endpoint_port: cdktf.booleanToTerraform(struct!.sameAsEndpointPort),
    advanced_options: httpLoadbalancerDefaultPoolAdvancedOptionsToTerraform(struct!.advancedOptions),
    healthcheck: cdktf.listMapper(httpLoadbalancerDefaultPoolHealthcheckToTerraform, true)(struct!.healthcheck),
    origin_servers: cdktf.listMapper(httpLoadbalancerDefaultPoolOriginServersToTerraform, true)(struct!.originServers),
    upstream_conn_pool_reuse_type: httpLoadbalancerDefaultPoolUpstreamConnPoolReuseTypeToTerraform(struct!.upstreamConnPoolReuseType),
    use_tls: httpLoadbalancerDefaultPoolUseTlsToTerraform(struct!.useTls),
    view_internal: httpLoadbalancerDefaultPoolViewInternalToTerraform(struct!.viewInternal),
  }
}


export function httpLoadbalancerDefaultPoolToHclTerraform(struct?: HttpLoadbalancerDefaultPoolOutputReference | HttpLoadbalancerDefaultPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    automatic_port: {
      value: cdktf.booleanToHclTerraform(struct!.automaticPort),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    endpoint_selection: {
      value: cdktf.stringToHclTerraform(struct!.endpointSelection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    health_check_port: {
      value: cdktf.numberToHclTerraform(struct!.healthCheckPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lb_port: {
      value: cdktf.booleanToHclTerraform(struct!.lbPort),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    loadbalancer_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.loadbalancerAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_tls: {
      value: cdktf.booleanToHclTerraform(struct!.noTls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    same_as_endpoint_port: {
      value: cdktf.booleanToHclTerraform(struct!.sameAsEndpointPort),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    advanced_options: {
      value: httpLoadbalancerDefaultPoolAdvancedOptionsToHclTerraform(struct!.advancedOptions),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerDefaultPoolAdvancedOptionsList",
    },
    healthcheck: {
      value: cdktf.listMapperHcl(httpLoadbalancerDefaultPoolHealthcheckToHclTerraform, true)(struct!.healthcheck),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerDefaultPoolHealthcheckList",
    },
    origin_servers: {
      value: cdktf.listMapperHcl(httpLoadbalancerDefaultPoolOriginServersToHclTerraform, true)(struct!.originServers),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerDefaultPoolOriginServersList",
    },
    upstream_conn_pool_reuse_type: {
      value: httpLoadbalancerDefaultPoolUpstreamConnPoolReuseTypeToHclTerraform(struct!.upstreamConnPoolReuseType),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerDefaultPoolUpstreamConnPoolReuseTypeList",
    },
    use_tls: {
      value: httpLoadbalancerDefaultPoolUseTlsToHclTerraform(struct!.useTls),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerDefaultPoolUseTlsList",
    },
    view_internal: {
      value: httpLoadbalancerDefaultPoolViewInternalToHclTerraform(struct!.viewInternal),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerDefaultPoolViewInternalList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerDefaultPoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerDefaultPool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._automaticPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.automaticPort = this._automaticPort;
    }
    if (this._endpointSelection !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointSelection = this._endpointSelection;
    }
    if (this._healthCheckPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckPort = this._healthCheckPort;
    }
    if (this._lbPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.lbPort = this._lbPort;
    }
    if (this._loadbalancerAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadbalancerAlgorithm = this._loadbalancerAlgorithm;
    }
    if (this._noTls !== undefined) {
      hasAnyValues = true;
      internalValueResult.noTls = this._noTls;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._sameAsEndpointPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.sameAsEndpointPort = this._sameAsEndpointPort;
    }
    if (this._advancedOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedOptions = this._advancedOptions?.internalValue;
    }
    if (this._healthcheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthcheck = this._healthcheck?.internalValue;
    }
    if (this._originServers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.originServers = this._originServers?.internalValue;
    }
    if (this._upstreamConnPoolReuseType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.upstreamConnPoolReuseType = this._upstreamConnPoolReuseType?.internalValue;
    }
    if (this._useTls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.useTls = this._useTls?.internalValue;
    }
    if (this._viewInternal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.viewInternal = this._viewInternal?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerDefaultPool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._automaticPort = undefined;
      this._endpointSelection = undefined;
      this._healthCheckPort = undefined;
      this._lbPort = undefined;
      this._loadbalancerAlgorithm = undefined;
      this._noTls = undefined;
      this._port = undefined;
      this._sameAsEndpointPort = undefined;
      this._advancedOptions.internalValue = undefined;
      this._healthcheck.internalValue = undefined;
      this._originServers.internalValue = undefined;
      this._upstreamConnPoolReuseType.internalValue = undefined;
      this._useTls.internalValue = undefined;
      this._viewInternal.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._automaticPort = value.automaticPort;
      this._endpointSelection = value.endpointSelection;
      this._healthCheckPort = value.healthCheckPort;
      this._lbPort = value.lbPort;
      this._loadbalancerAlgorithm = value.loadbalancerAlgorithm;
      this._noTls = value.noTls;
      this._port = value.port;
      this._sameAsEndpointPort = value.sameAsEndpointPort;
      this._advancedOptions.internalValue = value.advancedOptions;
      this._healthcheck.internalValue = value.healthcheck;
      this._originServers.internalValue = value.originServers;
      this._upstreamConnPoolReuseType.internalValue = value.upstreamConnPoolReuseType;
      this._useTls.internalValue = value.useTls;
      this._viewInternal.internalValue = value.viewInternal;
    }
  }

  // automatic_port - computed: false, optional: true, required: false
  private _automaticPort?: boolean | cdktf.IResolvable; 
  public get automaticPort() {
    return this.getBooleanAttribute('automatic_port');
  }
  public set automaticPort(value: boolean | cdktf.IResolvable) {
    this._automaticPort = value;
  }
  public resetAutomaticPort() {
    this._automaticPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticPortInput() {
    return this._automaticPort;
  }

  // endpoint_selection - computed: false, optional: false, required: true
  private _endpointSelection?: string; 
  public get endpointSelection() {
    return this.getStringAttribute('endpoint_selection');
  }
  public set endpointSelection(value: string) {
    this._endpointSelection = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointSelectionInput() {
    return this._endpointSelection;
  }

  // health_check_port - computed: false, optional: true, required: false
  private _healthCheckPort?: number; 
  public get healthCheckPort() {
    return this.getNumberAttribute('health_check_port');
  }
  public set healthCheckPort(value: number) {
    this._healthCheckPort = value;
  }
  public resetHealthCheckPort() {
    this._healthCheckPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckPortInput() {
    return this._healthCheckPort;
  }

  // lb_port - computed: false, optional: true, required: false
  private _lbPort?: boolean | cdktf.IResolvable; 
  public get lbPort() {
    return this.getBooleanAttribute('lb_port');
  }
  public set lbPort(value: boolean | cdktf.IResolvable) {
    this._lbPort = value;
  }
  public resetLbPort() {
    this._lbPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lbPortInput() {
    return this._lbPort;
  }

  // loadbalancer_algorithm - computed: false, optional: false, required: true
  private _loadbalancerAlgorithm?: string; 
  public get loadbalancerAlgorithm() {
    return this.getStringAttribute('loadbalancer_algorithm');
  }
  public set loadbalancerAlgorithm(value: string) {
    this._loadbalancerAlgorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadbalancerAlgorithmInput() {
    return this._loadbalancerAlgorithm;
  }

  // no_tls - computed: false, optional: true, required: false
  private _noTls?: boolean | cdktf.IResolvable; 
  public get noTls() {
    return this.getBooleanAttribute('no_tls');
  }
  public set noTls(value: boolean | cdktf.IResolvable) {
    this._noTls = value;
  }
  public resetNoTls() {
    this._noTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noTlsInput() {
    return this._noTls;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // same_as_endpoint_port - computed: false, optional: true, required: false
  private _sameAsEndpointPort?: boolean | cdktf.IResolvable; 
  public get sameAsEndpointPort() {
    return this.getBooleanAttribute('same_as_endpoint_port');
  }
  public set sameAsEndpointPort(value: boolean | cdktf.IResolvable) {
    this._sameAsEndpointPort = value;
  }
  public resetSameAsEndpointPort() {
    this._sameAsEndpointPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sameAsEndpointPortInput() {
    return this._sameAsEndpointPort;
  }

  // advanced_options - computed: false, optional: true, required: false
  private _advancedOptions = new HttpLoadbalancerDefaultPoolAdvancedOptionsOutputReference(this, "advanced_options");
  public get advancedOptions() {
    return this._advancedOptions;
  }
  public putAdvancedOptions(value: HttpLoadbalancerDefaultPoolAdvancedOptions) {
    this._advancedOptions.internalValue = value;
  }
  public resetAdvancedOptions() {
    this._advancedOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedOptionsInput() {
    return this._advancedOptions.internalValue;
  }

  // healthcheck - computed: false, optional: true, required: false
  private _healthcheck = new HttpLoadbalancerDefaultPoolHealthcheckList(this, "healthcheck", false);
  public get healthcheck() {
    return this._healthcheck;
  }
  public putHealthcheck(value: HttpLoadbalancerDefaultPoolHealthcheck[] | cdktf.IResolvable) {
    this._healthcheck.internalValue = value;
  }
  public resetHealthcheck() {
    this._healthcheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthcheckInput() {
    return this._healthcheck.internalValue;
  }

  // origin_servers - computed: false, optional: false, required: true
  private _originServers = new HttpLoadbalancerDefaultPoolOriginServersList(this, "origin_servers", false);
  public get originServers() {
    return this._originServers;
  }
  public putOriginServers(value: HttpLoadbalancerDefaultPoolOriginServers[] | cdktf.IResolvable) {
    this._originServers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originServersInput() {
    return this._originServers.internalValue;
  }

  // upstream_conn_pool_reuse_type - computed: false, optional: true, required: false
  private _upstreamConnPoolReuseType = new HttpLoadbalancerDefaultPoolUpstreamConnPoolReuseTypeOutputReference(this, "upstream_conn_pool_reuse_type");
  public get upstreamConnPoolReuseType() {
    return this._upstreamConnPoolReuseType;
  }
  public putUpstreamConnPoolReuseType(value: HttpLoadbalancerDefaultPoolUpstreamConnPoolReuseType) {
    this._upstreamConnPoolReuseType.internalValue = value;
  }
  public resetUpstreamConnPoolReuseType() {
    this._upstreamConnPoolReuseType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamConnPoolReuseTypeInput() {
    return this._upstreamConnPoolReuseType.internalValue;
  }

  // use_tls - computed: false, optional: true, required: false
  private _useTls = new HttpLoadbalancerDefaultPoolUseTlsOutputReference(this, "use_tls");
  public get useTls() {
    return this._useTls;
  }
  public putUseTls(value: HttpLoadbalancerDefaultPoolUseTls) {
    this._useTls.internalValue = value;
  }
  public resetUseTls() {
    this._useTls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useTlsInput() {
    return this._useTls.internalValue;
  }

  // view_internal - computed: false, optional: true, required: false
  private _viewInternal = new HttpLoadbalancerDefaultPoolViewInternalOutputReference(this, "view_internal");
  public get viewInternal() {
    return this._viewInternal;
  }
  public putViewInternal(value: HttpLoadbalancerDefaultPoolViewInternal) {
    this._viewInternal.internalValue = value;
  }
  public resetViewInternal() {
    this._viewInternal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewInternalInput() {
    return this._viewInternal.internalValue;
  }
}
export interface HttpLoadbalancerDefaultPoolListPoolsCluster {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerDefaultPoolListPoolsClusterToTerraform(struct?: HttpLoadbalancerDefaultPoolListPoolsClusterOutputReference | HttpLoadbalancerDefaultPoolListPoolsCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function httpLoadbalancerDefaultPoolListPoolsClusterToHclTerraform(struct?: HttpLoadbalancerDefaultPoolListPoolsClusterOutputReference | HttpLoadbalancerDefaultPoolListPoolsCluster): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerDefaultPoolListPoolsClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerDefaultPoolListPoolsCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerDefaultPoolListPoolsCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface HttpLoadbalancerDefaultPoolListPoolsPool {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerDefaultPoolListPoolsPoolToTerraform(struct?: HttpLoadbalancerDefaultPoolListPoolsPoolOutputReference | HttpLoadbalancerDefaultPoolListPoolsPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function httpLoadbalancerDefaultPoolListPoolsPoolToHclTerraform(struct?: HttpLoadbalancerDefaultPoolListPoolsPoolOutputReference | HttpLoadbalancerDefaultPoolListPoolsPool): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerDefaultPoolListPoolsPoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerDefaultPoolListPoolsPool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerDefaultPoolListPoolsPool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface HttpLoadbalancerDefaultPoolListPools {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#endpoint_subsets HttpLoadbalancer#endpoint_subsets}
  */
  readonly endpointSubsets?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#priority HttpLoadbalancer#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#weight HttpLoadbalancer#weight}
  */
  readonly weight?: number;
  /**
  * cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#cluster HttpLoadbalancer#cluster}
  */
  readonly cluster?: HttpLoadbalancerDefaultPoolListPoolsCluster;
  /**
  * pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#pool HttpLoadbalancer#pool}
  */
  readonly pool?: HttpLoadbalancerDefaultPoolListPoolsPool;
}

export function httpLoadbalancerDefaultPoolListPoolsToTerraform(struct?: HttpLoadbalancerDefaultPoolListPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint_subsets: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.endpointSubsets),
    priority: cdktf.numberToTerraform(struct!.priority),
    weight: cdktf.numberToTerraform(struct!.weight),
    cluster: httpLoadbalancerDefaultPoolListPoolsClusterToTerraform(struct!.cluster),
    pool: httpLoadbalancerDefaultPoolListPoolsPoolToTerraform(struct!.pool),
  }
}


export function httpLoadbalancerDefaultPoolListPoolsToHclTerraform(struct?: HttpLoadbalancerDefaultPoolListPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoint_subsets: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.endpointSubsets),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
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
    cluster: {
      value: httpLoadbalancerDefaultPoolListPoolsClusterToHclTerraform(struct!.cluster),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerDefaultPoolListPoolsClusterList",
    },
    pool: {
      value: httpLoadbalancerDefaultPoolListPoolsPoolToHclTerraform(struct!.pool),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerDefaultPoolListPoolsPoolList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerDefaultPoolListPoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttpLoadbalancerDefaultPoolListPools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpointSubsets !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointSubsets = this._endpointSubsets;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    if (this._cluster?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster?.internalValue;
    }
    if (this._pool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pool = this._pool?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerDefaultPoolListPools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpointSubsets = undefined;
      this._priority = undefined;
      this._weight = undefined;
      this._cluster.internalValue = undefined;
      this._pool.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpointSubsets = value.endpointSubsets;
      this._priority = value.priority;
      this._weight = value.weight;
      this._cluster.internalValue = value.cluster;
      this._pool.internalValue = value.pool;
    }
  }

  // endpoint_subsets - computed: false, optional: true, required: false
  private _endpointSubsets?: { [key: string]: string }; 
  public get endpointSubsets() {
    return this.getStringMapAttribute('endpoint_subsets');
  }
  public set endpointSubsets(value: { [key: string]: string }) {
    this._endpointSubsets = value;
  }
  public resetEndpointSubsets() {
    this._endpointSubsets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointSubsetsInput() {
    return this._endpointSubsets;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
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

  // cluster - computed: false, optional: true, required: false
  private _cluster = new HttpLoadbalancerDefaultPoolListPoolsClusterOutputReference(this, "cluster");
  public get cluster() {
    return this._cluster;
  }
  public putCluster(value: HttpLoadbalancerDefaultPoolListPoolsCluster) {
    this._cluster.internalValue = value;
  }
  public resetCluster() {
    this._cluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster.internalValue;
  }

  // pool - computed: false, optional: true, required: false
  private _pool = new HttpLoadbalancerDefaultPoolListPoolsPoolOutputReference(this, "pool");
  public get pool() {
    return this._pool;
  }
  public putPool(value: HttpLoadbalancerDefaultPoolListPoolsPool) {
    this._pool.internalValue = value;
  }
  public resetPool() {
    this._pool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolInput() {
    return this._pool.internalValue;
  }
}

export class HttpLoadbalancerDefaultPoolListPoolsList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerDefaultPoolListPools[] | cdktf.IResolvable

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
  public get(index: number): HttpLoadbalancerDefaultPoolListPoolsOutputReference {
    return new HttpLoadbalancerDefaultPoolListPoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerDefaultPoolListStruct {
  /**
  * pools block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#pools HttpLoadbalancer#pools}
  */
  readonly pools?: HttpLoadbalancerDefaultPoolListPools[] | cdktf.IResolvable;
}

export function httpLoadbalancerDefaultPoolListStructToTerraform(struct?: HttpLoadbalancerDefaultPoolListStructOutputReference | HttpLoadbalancerDefaultPoolListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pools: cdktf.listMapper(httpLoadbalancerDefaultPoolListPoolsToTerraform, true)(struct!.pools),
  }
}


export function httpLoadbalancerDefaultPoolListStructToHclTerraform(struct?: HttpLoadbalancerDefaultPoolListStructOutputReference | HttpLoadbalancerDefaultPoolListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pools: {
      value: cdktf.listMapperHcl(httpLoadbalancerDefaultPoolListPoolsToHclTerraform, true)(struct!.pools),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerDefaultPoolListPoolsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerDefaultPoolListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerDefaultPoolListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pools?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pools = this._pools?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerDefaultPoolListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pools.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pools.internalValue = value.pools;
    }
  }

  // pools - computed: false, optional: true, required: false
  private _pools = new HttpLoadbalancerDefaultPoolListPoolsList(this, "pools", false);
  public get pools() {
    return this._pools;
  }
  public putPools(value: HttpLoadbalancerDefaultPoolListPools[] | cdktf.IResolvable) {
    this._pools.internalValue = value;
  }
  public resetPools() {
    this._pools.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolsInput() {
    return this._pools.internalValue;
  }
}
export interface HttpLoadbalancerDefaultRoutePoolsCluster {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerDefaultRoutePoolsClusterToTerraform(struct?: HttpLoadbalancerDefaultRoutePoolsClusterOutputReference | HttpLoadbalancerDefaultRoutePoolsCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function httpLoadbalancerDefaultRoutePoolsClusterToHclTerraform(struct?: HttpLoadbalancerDefaultRoutePoolsClusterOutputReference | HttpLoadbalancerDefaultRoutePoolsCluster): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerDefaultRoutePoolsClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerDefaultRoutePoolsCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerDefaultRoutePoolsCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface HttpLoadbalancerDefaultRoutePoolsPool {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerDefaultRoutePoolsPoolToTerraform(struct?: HttpLoadbalancerDefaultRoutePoolsPoolOutputReference | HttpLoadbalancerDefaultRoutePoolsPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function httpLoadbalancerDefaultRoutePoolsPoolToHclTerraform(struct?: HttpLoadbalancerDefaultRoutePoolsPoolOutputReference | HttpLoadbalancerDefaultRoutePoolsPool): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerDefaultRoutePoolsPoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerDefaultRoutePoolsPool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerDefaultRoutePoolsPool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface HttpLoadbalancerDefaultRoutePools {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#endpoint_subsets HttpLoadbalancer#endpoint_subsets}
  */
  readonly endpointSubsets?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#priority HttpLoadbalancer#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#weight HttpLoadbalancer#weight}
  */
  readonly weight?: number;
  /**
  * cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#cluster HttpLoadbalancer#cluster}
  */
  readonly cluster?: HttpLoadbalancerDefaultRoutePoolsCluster;
  /**
  * pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#pool HttpLoadbalancer#pool}
  */
  readonly pool?: HttpLoadbalancerDefaultRoutePoolsPool;
}

export function httpLoadbalancerDefaultRoutePoolsToTerraform(struct?: HttpLoadbalancerDefaultRoutePools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint_subsets: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.endpointSubsets),
    priority: cdktf.numberToTerraform(struct!.priority),
    weight: cdktf.numberToTerraform(struct!.weight),
    cluster: httpLoadbalancerDefaultRoutePoolsClusterToTerraform(struct!.cluster),
    pool: httpLoadbalancerDefaultRoutePoolsPoolToTerraform(struct!.pool),
  }
}


export function httpLoadbalancerDefaultRoutePoolsToHclTerraform(struct?: HttpLoadbalancerDefaultRoutePools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoint_subsets: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.endpointSubsets),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
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
    cluster: {
      value: httpLoadbalancerDefaultRoutePoolsClusterToHclTerraform(struct!.cluster),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerDefaultRoutePoolsClusterList",
    },
    pool: {
      value: httpLoadbalancerDefaultRoutePoolsPoolToHclTerraform(struct!.pool),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerDefaultRoutePoolsPoolList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerDefaultRoutePoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttpLoadbalancerDefaultRoutePools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpointSubsets !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointSubsets = this._endpointSubsets;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    if (this._cluster?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster?.internalValue;
    }
    if (this._pool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pool = this._pool?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerDefaultRoutePools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpointSubsets = undefined;
      this._priority = undefined;
      this._weight = undefined;
      this._cluster.internalValue = undefined;
      this._pool.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpointSubsets = value.endpointSubsets;
      this._priority = value.priority;
      this._weight = value.weight;
      this._cluster.internalValue = value.cluster;
      this._pool.internalValue = value.pool;
    }
  }

  // endpoint_subsets - computed: false, optional: true, required: false
  private _endpointSubsets?: { [key: string]: string }; 
  public get endpointSubsets() {
    return this.getStringMapAttribute('endpoint_subsets');
  }
  public set endpointSubsets(value: { [key: string]: string }) {
    this._endpointSubsets = value;
  }
  public resetEndpointSubsets() {
    this._endpointSubsets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointSubsetsInput() {
    return this._endpointSubsets;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
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

  // cluster - computed: false, optional: true, required: false
  private _cluster = new HttpLoadbalancerDefaultRoutePoolsClusterOutputReference(this, "cluster");
  public get cluster() {
    return this._cluster;
  }
  public putCluster(value: HttpLoadbalancerDefaultRoutePoolsCluster) {
    this._cluster.internalValue = value;
  }
  public resetCluster() {
    this._cluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster.internalValue;
  }

  // pool - computed: false, optional: true, required: false
  private _pool = new HttpLoadbalancerDefaultRoutePoolsPoolOutputReference(this, "pool");
  public get pool() {
    return this._pool;
  }
  public putPool(value: HttpLoadbalancerDefaultRoutePoolsPool) {
    this._pool.internalValue = value;
  }
  public resetPool() {
    this._pool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolInput() {
    return this._pool.internalValue;
  }
}

export class HttpLoadbalancerDefaultRoutePoolsList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerDefaultRoutePools[] | cdktf.IResolvable

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
  public get(index: number): HttpLoadbalancerDefaultRoutePoolsOutputReference {
    return new HttpLoadbalancerDefaultRoutePoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#decryption_provider HttpLoadbalancer#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#location HttpLoadbalancer#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#store_provider HttpLoadbalancer#store_provider}
  */
  readonly storeProvider?: string;
}

export function httpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoToTerraform(struct?: HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoOutputReference | HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function httpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoToHclTerraform(struct?: HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoOutputReference | HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoInternal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#decryption_provider HttpLoadbalancer#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#location HttpLoadbalancer#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#store_provider HttpLoadbalancer#store_provider}
  */
  readonly storeProvider?: string;
}

export function httpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoInternalToTerraform(struct?: HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoInternalOutputReference | HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoInternal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function httpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoInternalToHclTerraform(struct?: HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoInternalOutputReference | HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoInternal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoInternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoInternal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoInternal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#provider HttpLoadbalancer#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#url HttpLoadbalancer#url}
  */
  readonly url: string;
}

export function httpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordClearSecretInfoToTerraform(struct?: HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordClearSecretInfoOutputReference | HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function httpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordClearSecretInfoToHclTerraform(struct?: HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordClearSecretInfoOutputReference | HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordClearSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordClearSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._provider = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._provider = value.provider;
      this._url = value.url;
    }
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordVaultSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#key HttpLoadbalancer#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#location HttpLoadbalancer#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#provider HttpLoadbalancer#provider}
  */
  readonly provider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#secret_encoding HttpLoadbalancer#secret_encoding}
  */
  readonly secretEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#version HttpLoadbalancer#version}
  */
  readonly version?: number;
}

export function httpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordVaultSecretInfoToTerraform(struct?: HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordVaultSecretInfoOutputReference | HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordVaultSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    location: cdktf.stringToTerraform(struct!.location),
    provider: cdktf.stringToTerraform(struct!.provider),
    secret_encoding: cdktf.stringToTerraform(struct!.secretEncoding),
    version: cdktf.numberToTerraform(struct!.version),
  }
}


export function httpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordVaultSecretInfoToHclTerraform(struct?: HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordVaultSecretInfoOutputReference | HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordVaultSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_encoding: {
      value: cdktf.stringToHclTerraform(struct!.secretEncoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.numberToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordVaultSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordVaultSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._secretEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEncoding = this._secretEncoding;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordVaultSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._location = undefined;
      this._provider = undefined;
      this._secretEncoding = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._location = value.location;
      this._provider = value.provider;
      this._secretEncoding = value.secretEncoding;
      this._version = value.version;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // provider - computed: false, optional: false, required: true
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // secret_encoding - computed: false, optional: true, required: false
  private _secretEncoding?: string; 
  public get secretEncoding() {
    return this.getStringAttribute('secret_encoding');
  }
  public set secretEncoding(value: string) {
    this._secretEncoding = value;
  }
  public resetSecretEncoding() {
    this._secretEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEncodingInput() {
    return this._secretEncoding;
  }

  // version - computed: false, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordWingmanSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name: string;
}

export function httpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordWingmanSecretInfoToTerraform(struct?: HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordWingmanSecretInfoOutputReference | HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordWingmanSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function httpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordWingmanSecretInfoToHclTerraform(struct?: HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordWingmanSecretInfoOutputReference | HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordWingmanSecretInfo): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordWingmanSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordWingmanSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordWingmanSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
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
}
export interface HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPassword {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#secret_encoding_type HttpLoadbalancer#secret_encoding_type}
  */
  readonly secretEncodingType?: string;
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#blindfold_secret_info HttpLoadbalancer#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfo;
  /**
  * blindfold_secret_info_internal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#blindfold_secret_info_internal HttpLoadbalancer#blindfold_secret_info_internal}
  */
  readonly blindfoldSecretInfoInternal?: HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoInternal;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#clear_secret_info HttpLoadbalancer#clear_secret_info}
  */
  readonly clearSecretInfo?: HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordClearSecretInfo;
  /**
  * vault_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#vault_secret_info HttpLoadbalancer#vault_secret_info}
  */
  readonly vaultSecretInfo?: HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordVaultSecretInfo;
  /**
  * wingman_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#wingman_secret_info HttpLoadbalancer#wingman_secret_info}
  */
  readonly wingmanSecretInfo?: HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordWingmanSecretInfo;
}

export function httpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordToTerraform(struct?: HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordOutputReference | HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_encoding_type: cdktf.stringToTerraform(struct!.secretEncodingType),
    blindfold_secret_info: httpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    blindfold_secret_info_internal: httpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoInternalToTerraform(struct!.blindfoldSecretInfoInternal),
    clear_secret_info: httpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordClearSecretInfoToTerraform(struct!.clearSecretInfo),
    vault_secret_info: httpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordVaultSecretInfoToTerraform(struct!.vaultSecretInfo),
    wingman_secret_info: httpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordWingmanSecretInfoToTerraform(struct!.wingmanSecretInfo),
  }
}


export function httpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordToHclTerraform(struct?: HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordOutputReference | HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_encoding_type: {
      value: cdktf.stringToHclTerraform(struct!.secretEncodingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    blindfold_secret_info: {
      value: httpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoList",
    },
    blindfold_secret_info_internal: {
      value: httpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoInternalToHclTerraform(struct!.blindfoldSecretInfoInternal),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoInternalList",
    },
    clear_secret_info: {
      value: httpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordClearSecretInfoList",
    },
    vault_secret_info: {
      value: httpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordVaultSecretInfoToHclTerraform(struct!.vaultSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordVaultSecretInfoList",
    },
    wingman_secret_info: {
      value: httpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordWingmanSecretInfoToHclTerraform(struct!.wingmanSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordWingmanSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretEncodingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEncodingType = this._secretEncodingType;
    }
    if (this._blindfoldSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfo = this._blindfoldSecretInfo?.internalValue;
    }
    if (this._blindfoldSecretInfoInternal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfoInternal = this._blindfoldSecretInfoInternal?.internalValue;
    }
    if (this._clearSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSecretInfo = this._clearSecretInfo?.internalValue;
    }
    if (this._vaultSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultSecretInfo = this._vaultSecretInfo?.internalValue;
    }
    if (this._wingmanSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wingmanSecretInfo = this._wingmanSecretInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretEncodingType = undefined;
      this._blindfoldSecretInfo.internalValue = undefined;
      this._blindfoldSecretInfoInternal.internalValue = undefined;
      this._clearSecretInfo.internalValue = undefined;
      this._vaultSecretInfo.internalValue = undefined;
      this._wingmanSecretInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretEncodingType = value.secretEncodingType;
      this._blindfoldSecretInfo.internalValue = value.blindfoldSecretInfo;
      this._blindfoldSecretInfoInternal.internalValue = value.blindfoldSecretInfoInternal;
      this._clearSecretInfo.internalValue = value.clearSecretInfo;
      this._vaultSecretInfo.internalValue = value.vaultSecretInfo;
      this._wingmanSecretInfo.internalValue = value.wingmanSecretInfo;
    }
  }

  // secret_encoding_type - computed: false, optional: true, required: false
  private _secretEncodingType?: string; 
  public get secretEncodingType() {
    return this.getStringAttribute('secret_encoding_type');
  }
  public set secretEncodingType(value: string) {
    this._secretEncodingType = value;
  }
  public resetSecretEncodingType() {
    this._secretEncodingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEncodingTypeInput() {
    return this._secretEncodingType;
  }

  // blindfold_secret_info - computed: false, optional: true, required: false
  private _blindfoldSecretInfo = new HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfo) {
    this._blindfoldSecretInfo.internalValue = value;
  }
  public resetBlindfoldSecretInfo() {
    this._blindfoldSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInput() {
    return this._blindfoldSecretInfo.internalValue;
  }

  // blindfold_secret_info_internal - computed: false, optional: true, required: false
  private _blindfoldSecretInfoInternal = new HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoInternalOutputReference(this, "blindfold_secret_info_internal");
  public get blindfoldSecretInfoInternal() {
    return this._blindfoldSecretInfoInternal;
  }
  public putBlindfoldSecretInfoInternal(value: HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoInternal) {
    this._blindfoldSecretInfoInternal.internalValue = value;
  }
  public resetBlindfoldSecretInfoInternal() {
    this._blindfoldSecretInfoInternal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInternalInput() {
    return this._blindfoldSecretInfoInternal.internalValue;
  }

  // clear_secret_info - computed: false, optional: true, required: false
  private _clearSecretInfo = new HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordClearSecretInfo) {
    this._clearSecretInfo.internalValue = value;
  }
  public resetClearSecretInfo() {
    this._clearSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearSecretInfoInput() {
    return this._clearSecretInfo.internalValue;
  }

  // vault_secret_info - computed: false, optional: true, required: false
  private _vaultSecretInfo = new HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordVaultSecretInfoOutputReference(this, "vault_secret_info");
  public get vaultSecretInfo() {
    return this._vaultSecretInfo;
  }
  public putVaultSecretInfo(value: HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordVaultSecretInfo) {
    this._vaultSecretInfo.internalValue = value;
  }
  public resetVaultSecretInfo() {
    this._vaultSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultSecretInfoInput() {
    return this._vaultSecretInfo.internalValue;
  }

  // wingman_secret_info - computed: false, optional: true, required: false
  private _wingmanSecretInfo = new HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordWingmanSecretInfoOutputReference(this, "wingman_secret_info");
  public get wingmanSecretInfo() {
    return this._wingmanSecretInfo;
  }
  public putWingmanSecretInfo(value: HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordWingmanSecretInfo) {
    this._wingmanSecretInfo.internalValue = value;
  }
  public resetWingmanSecretInfo() {
    this._wingmanSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wingmanSecretInfoInput() {
    return this._wingmanSecretInfo.internalValue;
  }
}
export interface HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLogin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#user HttpLoadbalancer#user}
  */
  readonly user?: string;
  /**
  * password block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#password HttpLoadbalancer#password}
  */
  readonly password?: HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPassword;
}

export function httpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginToTerraform(struct?: HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginOutputReference | HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLogin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    user: cdktf.stringToTerraform(struct!.user),
    password: httpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordToTerraform(struct!.password),
  }
}


export function httpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginToHclTerraform(struct?: HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginOutputReference | HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLogin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: httpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordToHclTerraform(struct!.password),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLogin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    if (this._password?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLogin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._user = undefined;
      this._password.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._user = value.user;
      this._password.internalValue = value.password;
    }
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // password - computed: false, optional: true, required: false
  private _password = new HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPassword) {
    this._password.internalValue = value;
  }
  public resetPassword() {
    this._password.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password.internalValue;
  }
}
export interface HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomains {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#domain HttpLoadbalancer#domain}
  */
  readonly domain: string;
  /**
  * simple_login block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#simple_login HttpLoadbalancer#simple_login}
  */
  readonly simpleLogin?: HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLogin;
}

export function httpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsToTerraform(struct?: HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomains | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
    simple_login: httpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginToTerraform(struct!.simpleLogin),
  }
}


export function httpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsToHclTerraform(struct?: HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomains | cdktf.IResolvable): any {
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
    simple_login: {
      value: httpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginToHclTerraform(struct!.simpleLogin),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomains | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._simpleLogin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.simpleLogin = this._simpleLogin?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomains | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domain = undefined;
      this._simpleLogin.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domain = value.domain;
      this._simpleLogin.internalValue = value.simpleLogin;
    }
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // simple_login - computed: false, optional: true, required: false
  private _simpleLogin = new HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginOutputReference(this, "simple_login");
  public get simpleLogin() {
    return this._simpleLogin;
  }
  public putSimpleLogin(value: HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLogin) {
    this._simpleLogin.internalValue = value;
  }
  public resetSimpleLogin() {
    this._simpleLogin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simpleLoginInput() {
    return this._simpleLogin.internalValue;
  }
}

export class HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomains[] | cdktf.IResolvable

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
  public get(index: number): HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsOutputReference {
    return new HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfig {
  /**
  * domains block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#domains HttpLoadbalancer#domains}
  */
  readonly domains: HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomains[] | cdktf.IResolvable;
}

export function httpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigToTerraform(struct?: HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigOutputReference | HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domains: cdktf.listMapper(httpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsToTerraform, true)(struct!.domains),
  }
}


export function httpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigToHclTerraform(struct?: HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigOutputReference | HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domains: {
      value: cdktf.listMapperHcl(httpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsToHclTerraform, true)(struct!.domains),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domains?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.domains = this._domains?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._domains.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._domains.internalValue = value.domains;
    }
  }

  // domains - computed: false, optional: false, required: true
  private _domains = new HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsList(this, "domains", false);
  public get domains() {
    return this._domains;
  }
  public putDomains(value: HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomains[] | cdktf.IResolvable) {
    this._domains.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainsInput() {
    return this._domains.internalValue;
  }
}
export interface HttpLoadbalancerEnableApiDiscoveryApiCrawler {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#disable_api_crawler HttpLoadbalancer#disable_api_crawler}
  */
  readonly disableApiCrawler?: boolean | cdktf.IResolvable;
  /**
  * api_crawler_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#api_crawler_config HttpLoadbalancer#api_crawler_config}
  */
  readonly apiCrawlerConfig?: HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfig;
}

export function httpLoadbalancerEnableApiDiscoveryApiCrawlerToTerraform(struct?: HttpLoadbalancerEnableApiDiscoveryApiCrawlerOutputReference | HttpLoadbalancerEnableApiDiscoveryApiCrawler): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_api_crawler: cdktf.booleanToTerraform(struct!.disableApiCrawler),
    api_crawler_config: httpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigToTerraform(struct!.apiCrawlerConfig),
  }
}


export function httpLoadbalancerEnableApiDiscoveryApiCrawlerToHclTerraform(struct?: HttpLoadbalancerEnableApiDiscoveryApiCrawlerOutputReference | HttpLoadbalancerEnableApiDiscoveryApiCrawler): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_api_crawler: {
      value: cdktf.booleanToHclTerraform(struct!.disableApiCrawler),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    api_crawler_config: {
      value: httpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigToHclTerraform(struct!.apiCrawlerConfig),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerEnableApiDiscoveryApiCrawlerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerEnableApiDiscoveryApiCrawler | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableApiCrawler !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableApiCrawler = this._disableApiCrawler;
    }
    if (this._apiCrawlerConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiCrawlerConfig = this._apiCrawlerConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerEnableApiDiscoveryApiCrawler | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableApiCrawler = undefined;
      this._apiCrawlerConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableApiCrawler = value.disableApiCrawler;
      this._apiCrawlerConfig.internalValue = value.apiCrawlerConfig;
    }
  }

  // disable_api_crawler - computed: false, optional: true, required: false
  private _disableApiCrawler?: boolean | cdktf.IResolvable; 
  public get disableApiCrawler() {
    return this.getBooleanAttribute('disable_api_crawler');
  }
  public set disableApiCrawler(value: boolean | cdktf.IResolvable) {
    this._disableApiCrawler = value;
  }
  public resetDisableApiCrawler() {
    this._disableApiCrawler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableApiCrawlerInput() {
    return this._disableApiCrawler;
  }

  // api_crawler_config - computed: false, optional: true, required: false
  private _apiCrawlerConfig = new HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigOutputReference(this, "api_crawler_config");
  public get apiCrawlerConfig() {
    return this._apiCrawlerConfig;
  }
  public putApiCrawlerConfig(value: HttpLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfig) {
    this._apiCrawlerConfig.internalValue = value;
  }
  public resetApiCrawlerConfig() {
    this._apiCrawlerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiCrawlerConfigInput() {
    return this._apiCrawlerConfig.internalValue;
  }
}
export interface HttpLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsCodeBaseIntegration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsCodeBaseIntegrationToTerraform(struct?: HttpLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsCodeBaseIntegrationOutputReference | HttpLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsCodeBaseIntegration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function httpLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsCodeBaseIntegrationToHclTerraform(struct?: HttpLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsCodeBaseIntegrationOutputReference | HttpLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsCodeBaseIntegration): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsCodeBaseIntegrationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsCodeBaseIntegration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsCodeBaseIntegration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface HttpLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsSelectedRepos {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#api_code_repo HttpLoadbalancer#api_code_repo}
  */
  readonly apiCodeRepo: string[];
}

export function httpLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsSelectedReposToTerraform(struct?: HttpLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsSelectedReposOutputReference | HttpLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsSelectedRepos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_code_repo: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.apiCodeRepo),
  }
}


export function httpLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsSelectedReposToHclTerraform(struct?: HttpLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsSelectedReposOutputReference | HttpLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsSelectedRepos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_code_repo: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.apiCodeRepo),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsSelectedReposOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsSelectedRepos | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiCodeRepo !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiCodeRepo = this._apiCodeRepo;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsSelectedRepos | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiCodeRepo = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiCodeRepo = value.apiCodeRepo;
    }
  }

  // api_code_repo - computed: false, optional: false, required: true
  private _apiCodeRepo?: string[]; 
  public get apiCodeRepo() {
    return this.getListAttribute('api_code_repo');
  }
  public set apiCodeRepo(value: string[]) {
    this._apiCodeRepo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiCodeRepoInput() {
    return this._apiCodeRepo;
  }
}
export interface HttpLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#all_repos HttpLoadbalancer#all_repos}
  */
  readonly allRepos?: boolean | cdktf.IResolvable;
  /**
  * code_base_integration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#code_base_integration HttpLoadbalancer#code_base_integration}
  */
  readonly codeBaseIntegration: HttpLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsCodeBaseIntegration;
  /**
  * selected_repos block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#selected_repos HttpLoadbalancer#selected_repos}
  */
  readonly selectedRepos?: HttpLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsSelectedRepos;
}

export function httpLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsToTerraform(struct?: HttpLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_repos: cdktf.booleanToTerraform(struct!.allRepos),
    code_base_integration: httpLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsCodeBaseIntegrationToTerraform(struct!.codeBaseIntegration),
    selected_repos: httpLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsSelectedReposToTerraform(struct!.selectedRepos),
  }
}


export function httpLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsToHclTerraform(struct?: HttpLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_repos: {
      value: cdktf.booleanToHclTerraform(struct!.allRepos),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    code_base_integration: {
      value: httpLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsCodeBaseIntegrationToHclTerraform(struct!.codeBaseIntegration),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsCodeBaseIntegrationList",
    },
    selected_repos: {
      value: httpLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsSelectedReposToHclTerraform(struct!.selectedRepos),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsSelectedReposList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttpLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allRepos !== undefined) {
      hasAnyValues = true;
      internalValueResult.allRepos = this._allRepos;
    }
    if (this._codeBaseIntegration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeBaseIntegration = this._codeBaseIntegration?.internalValue;
    }
    if (this._selectedRepos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectedRepos = this._selectedRepos?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allRepos = undefined;
      this._codeBaseIntegration.internalValue = undefined;
      this._selectedRepos.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allRepos = value.allRepos;
      this._codeBaseIntegration.internalValue = value.codeBaseIntegration;
      this._selectedRepos.internalValue = value.selectedRepos;
    }
  }

  // all_repos - computed: false, optional: true, required: false
  private _allRepos?: boolean | cdktf.IResolvable; 
  public get allRepos() {
    return this.getBooleanAttribute('all_repos');
  }
  public set allRepos(value: boolean | cdktf.IResolvable) {
    this._allRepos = value;
  }
  public resetAllRepos() {
    this._allRepos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allReposInput() {
    return this._allRepos;
  }

  // code_base_integration - computed: false, optional: false, required: true
  private _codeBaseIntegration = new HttpLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsCodeBaseIntegrationOutputReference(this, "code_base_integration");
  public get codeBaseIntegration() {
    return this._codeBaseIntegration;
  }
  public putCodeBaseIntegration(value: HttpLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsCodeBaseIntegration) {
    this._codeBaseIntegration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get codeBaseIntegrationInput() {
    return this._codeBaseIntegration.internalValue;
  }

  // selected_repos - computed: false, optional: true, required: false
  private _selectedRepos = new HttpLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsSelectedReposOutputReference(this, "selected_repos");
  public get selectedRepos() {
    return this._selectedRepos;
  }
  public putSelectedRepos(value: HttpLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsSelectedRepos) {
    this._selectedRepos.internalValue = value;
  }
  public resetSelectedRepos() {
    this._selectedRepos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedReposInput() {
    return this._selectedRepos.internalValue;
  }
}

export class HttpLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrations[] | cdktf.IResolvable

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
  public get(index: number): HttpLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsOutputReference {
    return new HttpLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScan {
  /**
  * code_base_integrations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#code_base_integrations HttpLoadbalancer#code_base_integrations}
  */
  readonly codeBaseIntegrations: HttpLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrations[] | cdktf.IResolvable;
}

export function httpLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanToTerraform(struct?: HttpLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanOutputReference | HttpLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code_base_integrations: cdktf.listMapper(httpLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsToTerraform, true)(struct!.codeBaseIntegrations),
  }
}


export function httpLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanToHclTerraform(struct?: HttpLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanOutputReference | HttpLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code_base_integrations: {
      value: cdktf.listMapperHcl(httpLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsToHclTerraform, true)(struct!.codeBaseIntegrations),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScan | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._codeBaseIntegrations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeBaseIntegrations = this._codeBaseIntegrations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScan | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._codeBaseIntegrations.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._codeBaseIntegrations.internalValue = value.codeBaseIntegrations;
    }
  }

  // code_base_integrations - computed: false, optional: false, required: true
  private _codeBaseIntegrations = new HttpLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsList(this, "code_base_integrations", false);
  public get codeBaseIntegrations() {
    return this._codeBaseIntegrations;
  }
  public putCodeBaseIntegrations(value: HttpLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrations[] | cdktf.IResolvable) {
    this._codeBaseIntegrations.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get codeBaseIntegrationsInput() {
    return this._codeBaseIntegrations.internalValue;
  }
}
export interface HttpLoadbalancerEnableApiDiscoveryCustomApiAuthDiscoveryApiDiscoveryRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerEnableApiDiscoveryCustomApiAuthDiscoveryApiDiscoveryRefToTerraform(struct?: HttpLoadbalancerEnableApiDiscoveryCustomApiAuthDiscoveryApiDiscoveryRefOutputReference | HttpLoadbalancerEnableApiDiscoveryCustomApiAuthDiscoveryApiDiscoveryRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function httpLoadbalancerEnableApiDiscoveryCustomApiAuthDiscoveryApiDiscoveryRefToHclTerraform(struct?: HttpLoadbalancerEnableApiDiscoveryCustomApiAuthDiscoveryApiDiscoveryRefOutputReference | HttpLoadbalancerEnableApiDiscoveryCustomApiAuthDiscoveryApiDiscoveryRef): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerEnableApiDiscoveryCustomApiAuthDiscoveryApiDiscoveryRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerEnableApiDiscoveryCustomApiAuthDiscoveryApiDiscoveryRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerEnableApiDiscoveryCustomApiAuthDiscoveryApiDiscoveryRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface HttpLoadbalancerEnableApiDiscoveryCustomApiAuthDiscovery {
  /**
  * api_discovery_ref block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#api_discovery_ref HttpLoadbalancer#api_discovery_ref}
  */
  readonly apiDiscoveryRef: HttpLoadbalancerEnableApiDiscoveryCustomApiAuthDiscoveryApiDiscoveryRef;
}

export function httpLoadbalancerEnableApiDiscoveryCustomApiAuthDiscoveryToTerraform(struct?: HttpLoadbalancerEnableApiDiscoveryCustomApiAuthDiscoveryOutputReference | HttpLoadbalancerEnableApiDiscoveryCustomApiAuthDiscovery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_discovery_ref: httpLoadbalancerEnableApiDiscoveryCustomApiAuthDiscoveryApiDiscoveryRefToTerraform(struct!.apiDiscoveryRef),
  }
}


export function httpLoadbalancerEnableApiDiscoveryCustomApiAuthDiscoveryToHclTerraform(struct?: HttpLoadbalancerEnableApiDiscoveryCustomApiAuthDiscoveryOutputReference | HttpLoadbalancerEnableApiDiscoveryCustomApiAuthDiscovery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_discovery_ref: {
      value: httpLoadbalancerEnableApiDiscoveryCustomApiAuthDiscoveryApiDiscoveryRefToHclTerraform(struct!.apiDiscoveryRef),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerEnableApiDiscoveryCustomApiAuthDiscoveryApiDiscoveryRefList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerEnableApiDiscoveryCustomApiAuthDiscoveryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerEnableApiDiscoveryCustomApiAuthDiscovery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiDiscoveryRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiDiscoveryRef = this._apiDiscoveryRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerEnableApiDiscoveryCustomApiAuthDiscovery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiDiscoveryRef.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiDiscoveryRef.internalValue = value.apiDiscoveryRef;
    }
  }

  // api_discovery_ref - computed: false, optional: false, required: true
  private _apiDiscoveryRef = new HttpLoadbalancerEnableApiDiscoveryCustomApiAuthDiscoveryApiDiscoveryRefOutputReference(this, "api_discovery_ref");
  public get apiDiscoveryRef() {
    return this._apiDiscoveryRef;
  }
  public putApiDiscoveryRef(value: HttpLoadbalancerEnableApiDiscoveryCustomApiAuthDiscoveryApiDiscoveryRef) {
    this._apiDiscoveryRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiDiscoveryRefInput() {
    return this._apiDiscoveryRef.internalValue;
  }
}
export interface HttpLoadbalancerEnableApiDiscoveryDiscoveredApiSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#purge_duration_for_inactive_discovered_apis HttpLoadbalancer#purge_duration_for_inactive_discovered_apis}
  */
  readonly purgeDurationForInactiveDiscoveredApis?: number;
}

export function httpLoadbalancerEnableApiDiscoveryDiscoveredApiSettingsToTerraform(struct?: HttpLoadbalancerEnableApiDiscoveryDiscoveredApiSettingsOutputReference | HttpLoadbalancerEnableApiDiscoveryDiscoveredApiSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    purge_duration_for_inactive_discovered_apis: cdktf.numberToTerraform(struct!.purgeDurationForInactiveDiscoveredApis),
  }
}


export function httpLoadbalancerEnableApiDiscoveryDiscoveredApiSettingsToHclTerraform(struct?: HttpLoadbalancerEnableApiDiscoveryDiscoveredApiSettingsOutputReference | HttpLoadbalancerEnableApiDiscoveryDiscoveredApiSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    purge_duration_for_inactive_discovered_apis: {
      value: cdktf.numberToHclTerraform(struct!.purgeDurationForInactiveDiscoveredApis),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerEnableApiDiscoveryDiscoveredApiSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerEnableApiDiscoveryDiscoveredApiSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._purgeDurationForInactiveDiscoveredApis !== undefined) {
      hasAnyValues = true;
      internalValueResult.purgeDurationForInactiveDiscoveredApis = this._purgeDurationForInactiveDiscoveredApis;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerEnableApiDiscoveryDiscoveredApiSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._purgeDurationForInactiveDiscoveredApis = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._purgeDurationForInactiveDiscoveredApis = value.purgeDurationForInactiveDiscoveredApis;
    }
  }

  // purge_duration_for_inactive_discovered_apis - computed: false, optional: true, required: false
  private _purgeDurationForInactiveDiscoveredApis?: number; 
  public get purgeDurationForInactiveDiscoveredApis() {
    return this.getNumberAttribute('purge_duration_for_inactive_discovered_apis');
  }
  public set purgeDurationForInactiveDiscoveredApis(value: number) {
    this._purgeDurationForInactiveDiscoveredApis = value;
  }
  public resetPurgeDurationForInactiveDiscoveredApis() {
    this._purgeDurationForInactiveDiscoveredApis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get purgeDurationForInactiveDiscoveredApisInput() {
    return this._purgeDurationForInactiveDiscoveredApis;
  }
}
export interface HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#description HttpLoadbalancer#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#disable HttpLoadbalancer#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name: string;
}

export function httpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadataToTerraform(struct?: HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadataOutputReference | HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    disable: cdktf.booleanToTerraform(struct!.disable),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function httpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadataToHclTerraform(struct?: HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadataOutputReference | HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._disable = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._disable = value.disable;
      this._name = value.name;
    }
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

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
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
}
export interface HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#api_endpoint_path HttpLoadbalancer#api_endpoint_path}
  */
  readonly apiEndpointPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#methods HttpLoadbalancer#methods}
  */
  readonly methods: string[];
}

export function httpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTargetToTerraform(struct?: HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTargetOutputReference | HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_endpoint_path: cdktf.stringToTerraform(struct!.apiEndpointPath),
    methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.methods),
  }
}


export function httpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTargetToHclTerraform(struct?: HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTargetOutputReference | HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_endpoint_path: {
      value: cdktf.stringToHclTerraform(struct!.apiEndpointPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.methods),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiEndpointPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiEndpointPath = this._apiEndpointPath;
    }
    if (this._methods !== undefined) {
      hasAnyValues = true;
      internalValueResult.methods = this._methods;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiEndpointPath = undefined;
      this._methods = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiEndpointPath = value.apiEndpointPath;
      this._methods = value.methods;
    }
  }

  // api_endpoint_path - computed: false, optional: false, required: true
  private _apiEndpointPath?: string; 
  public get apiEndpointPath() {
    return this.getStringAttribute('api_endpoint_path');
  }
  public set apiEndpointPath(value: string) {
    this._apiEndpointPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiEndpointPathInput() {
    return this._apiEndpointPath;
  }

  // methods - computed: false, optional: false, required: true
  private _methods?: string[]; 
  public get methods() {
    return this.getListAttribute('methods');
  }
  public set methods(value: string[]) {
    this._methods = value;
  }
  // Temporarily expose input value. Use with caution.
  public get methodsInput() {
    return this._methods;
  }
}
export interface HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSections {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#custom_sections HttpLoadbalancer#custom_sections}
  */
  readonly customSections: string[];
}

export function httpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSectionsToTerraform(struct?: HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSectionsOutputReference | HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_sections: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.customSections),
  }
}


export function httpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSectionsToHclTerraform(struct?: HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSectionsOutputReference | HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_sections: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.customSections),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSectionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSections | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customSections !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSections = this._customSections;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSections | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customSections = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customSections = value.customSections;
    }
  }

  // custom_sections - computed: false, optional: false, required: true
  private _customSections?: string[]; 
  public get customSections() {
    return this.getListAttribute('custom_sections');
  }
  public set customSections(value: string[]) {
    this._customSections = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customSectionsInput() {
    return this._customSections;
  }
}
export interface HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPattern {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#exact_value HttpLoadbalancer#exact_value}
  */
  readonly exactValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#regex_value HttpLoadbalancer#regex_value}
  */
  readonly regexValue?: string;
}

export function httpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPatternToTerraform(struct?: HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPatternOutputReference | HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_value: cdktf.stringToTerraform(struct!.exactValue),
    regex_value: cdktf.stringToTerraform(struct!.regexValue),
  }
}


export function httpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPatternToHclTerraform(struct?: HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPatternOutputReference | HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_value: {
      value: cdktf.stringToHclTerraform(struct!.exactValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex_value: {
      value: cdktf.stringToHclTerraform(struct!.regexValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPatternOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPattern | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValue = this._exactValue;
    }
    if (this._regexValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValue = this._regexValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPattern | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValue = undefined;
      this._regexValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValue = value.exactValue;
      this._regexValue = value.regexValue;
    }
  }

  // exact_value - computed: false, optional: true, required: false
  private _exactValue?: string; 
  public get exactValue() {
    return this.getStringAttribute('exact_value');
  }
  public set exactValue(value: string) {
    this._exactValue = value;
  }
  public resetExactValue() {
    this._exactValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValueInput() {
    return this._exactValue;
  }

  // regex_value - computed: false, optional: true, required: false
  private _regexValue?: string; 
  public get regexValue() {
    return this.getStringAttribute('regex_value');
  }
  public set regexValue(value: string) {
    this._regexValue = value;
  }
  public resetRegexValue() {
    this._regexValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValueInput() {
    return this._regexValue;
  }
}
export interface HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPattern {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#exact_value HttpLoadbalancer#exact_value}
  */
  readonly exactValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#regex_value HttpLoadbalancer#regex_value}
  */
  readonly regexValue?: string;
}

export function httpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPatternToTerraform(struct?: HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPatternOutputReference | HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_value: cdktf.stringToTerraform(struct!.exactValue),
    regex_value: cdktf.stringToTerraform(struct!.regexValue),
  }
}


export function httpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPatternToHclTerraform(struct?: HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPatternOutputReference | HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_value: {
      value: cdktf.stringToHclTerraform(struct!.exactValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex_value: {
      value: cdktf.stringToHclTerraform(struct!.regexValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPatternOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPattern | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValue = this._exactValue;
    }
    if (this._regexValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValue = this._regexValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPattern | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValue = undefined;
      this._regexValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValue = value.exactValue;
      this._regexValue = value.regexValue;
    }
  }

  // exact_value - computed: false, optional: true, required: false
  private _exactValue?: string; 
  public get exactValue() {
    return this.getStringAttribute('exact_value');
  }
  public set exactValue(value: string) {
    this._exactValue = value;
  }
  public resetExactValue() {
    this._exactValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValueInput() {
    return this._exactValue;
  }

  // regex_value - computed: false, optional: true, required: false
  private _regexValue?: string; 
  public get regexValue() {
    return this.getStringAttribute('regex_value');
  }
  public set regexValue(value: string) {
    this._regexValue = value;
  }
  public resetRegexValue() {
    this._regexValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValueInput() {
    return this._regexValue;
  }
}
