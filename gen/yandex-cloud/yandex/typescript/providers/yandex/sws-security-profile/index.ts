// https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwsSecurityProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Advanced rate limiter profile ID to use with this security profile. Set empty to use default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#advanced_rate_limiter_profile_id SwsSecurityProfile#advanced_rate_limiter_profile_id}
  */
  readonly advancedRateLimiterProfileId?: string;
  /**
  * Captcha ID to use with this security profile. Set empty to use default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#captcha_id SwsSecurityProfile#captcha_id}
  */
  readonly captchaId?: string;
  /**
  * The `Cloud ID` which resource belongs to. If it is not provided, the default provider `cloud-id` is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#cloud_id SwsSecurityProfile#cloud_id}
  */
  readonly cloudId?: string;
  /**
  * Action to perform if none of rules matched. Possible values: `ALLOW` or `DENY`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#default_action SwsSecurityProfile#default_action}
  */
  readonly defaultAction?: string;
  /**
  * The resource description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#description SwsSecurityProfile#description}
  */
  readonly description?: string;
  /**
  * The folder identifier that resource belongs to. If it is not provided, the default provider `folder-id` is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#folder_id SwsSecurityProfile#folder_id}
  */
  readonly folderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#id SwsSecurityProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A set of key/value label pairs which assigned to resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#labels SwsSecurityProfile#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#name SwsSecurityProfile#name}
  */
  readonly name?: string;
  /**
  * analyze_request_body block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#analyze_request_body SwsSecurityProfile#analyze_request_body}
  */
  readonly analyzeRequestBody?: SwsSecurityProfileAnalyzeRequestBody;
  /**
  * security_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#security_rule SwsSecurityProfile#security_rule}
  */
  readonly securityRule?: SwsSecurityProfileSecurityRule[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#timeouts SwsSecurityProfile#timeouts}
  */
  readonly timeouts?: SwsSecurityProfileTimeouts;
}
export interface SwsSecurityProfileAnalyzeRequestBody {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#size_limit SwsSecurityProfile#size_limit}
  */
  readonly sizeLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#size_limit_action SwsSecurityProfile#size_limit_action}
  */
  readonly sizeLimitAction?: string;
}

export function swsSecurityProfileAnalyzeRequestBodyToTerraform(struct?: SwsSecurityProfileAnalyzeRequestBodyOutputReference | SwsSecurityProfileAnalyzeRequestBody): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    size_limit: cdktf.numberToTerraform(struct!.sizeLimit),
    size_limit_action: cdktf.stringToTerraform(struct!.sizeLimitAction),
  }
}


export function swsSecurityProfileAnalyzeRequestBodyToHclTerraform(struct?: SwsSecurityProfileAnalyzeRequestBodyOutputReference | SwsSecurityProfileAnalyzeRequestBody): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    size_limit: {
      value: cdktf.numberToHclTerraform(struct!.sizeLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    size_limit_action: {
      value: cdktf.stringToHclTerraform(struct!.sizeLimitAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwsSecurityProfileAnalyzeRequestBodyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwsSecurityProfileAnalyzeRequestBody | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sizeLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeLimit = this._sizeLimit;
    }
    if (this._sizeLimitAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeLimitAction = this._sizeLimitAction;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwsSecurityProfileAnalyzeRequestBody | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sizeLimit = undefined;
      this._sizeLimitAction = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sizeLimit = value.sizeLimit;
      this._sizeLimitAction = value.sizeLimitAction;
    }
  }

  // size_limit - computed: false, optional: true, required: false
  private _sizeLimit?: number; 
  public get sizeLimit() {
    return this.getNumberAttribute('size_limit');
  }
  public set sizeLimit(value: number) {
    this._sizeLimit = value;
  }
  public resetSizeLimit() {
    this._sizeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeLimitInput() {
    return this._sizeLimit;
  }

  // size_limit_action - computed: false, optional: true, required: false
  private _sizeLimitAction?: string; 
  public get sizeLimitAction() {
    return this.getStringAttribute('size_limit_action');
  }
  public set sizeLimitAction(value: string) {
    this._sizeLimitAction = value;
  }
  public resetSizeLimitAction() {
    this._sizeLimitAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeLimitActionInput() {
    return this._sizeLimitAction;
  }
}
export interface SwsSecurityProfileSecurityRuleRuleConditionConditionAuthorityAuthorities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#exact_match SwsSecurityProfile#exact_match}
  */
  readonly exactMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#exact_not_match SwsSecurityProfile#exact_not_match}
  */
  readonly exactNotMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#pire_regex_match SwsSecurityProfile#pire_regex_match}
  */
  readonly pireRegexMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#pire_regex_not_match SwsSecurityProfile#pire_regex_not_match}
  */
  readonly pireRegexNotMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#prefix_match SwsSecurityProfile#prefix_match}
  */
  readonly prefixMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#prefix_not_match SwsSecurityProfile#prefix_not_match}
  */
  readonly prefixNotMatch?: string;
}

export function swsSecurityProfileSecurityRuleRuleConditionConditionAuthorityAuthoritiesToTerraform(struct?: SwsSecurityProfileSecurityRuleRuleConditionConditionAuthorityAuthorities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_match: cdktf.stringToTerraform(struct!.exactMatch),
    exact_not_match: cdktf.stringToTerraform(struct!.exactNotMatch),
    pire_regex_match: cdktf.stringToTerraform(struct!.pireRegexMatch),
    pire_regex_not_match: cdktf.stringToTerraform(struct!.pireRegexNotMatch),
    prefix_match: cdktf.stringToTerraform(struct!.prefixMatch),
    prefix_not_match: cdktf.stringToTerraform(struct!.prefixNotMatch),
  }
}


export function swsSecurityProfileSecurityRuleRuleConditionConditionAuthorityAuthoritiesToHclTerraform(struct?: SwsSecurityProfileSecurityRuleRuleConditionConditionAuthorityAuthorities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_match: {
      value: cdktf.stringToHclTerraform(struct!.exactMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exact_not_match: {
      value: cdktf.stringToHclTerraform(struct!.exactNotMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pire_regex_match: {
      value: cdktf.stringToHclTerraform(struct!.pireRegexMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pire_regex_not_match: {
      value: cdktf.stringToHclTerraform(struct!.pireRegexNotMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_match: {
      value: cdktf.stringToHclTerraform(struct!.prefixMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_not_match: {
      value: cdktf.stringToHclTerraform(struct!.prefixNotMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwsSecurityProfileSecurityRuleRuleConditionConditionAuthorityAuthoritiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwsSecurityProfileSecurityRuleRuleConditionConditionAuthorityAuthorities | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactMatch = this._exactMatch;
    }
    if (this._exactNotMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactNotMatch = this._exactNotMatch;
    }
    if (this._pireRegexMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.pireRegexMatch = this._pireRegexMatch;
    }
    if (this._pireRegexNotMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.pireRegexNotMatch = this._pireRegexNotMatch;
    }
    if (this._prefixMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixMatch = this._prefixMatch;
    }
    if (this._prefixNotMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixNotMatch = this._prefixNotMatch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwsSecurityProfileSecurityRuleRuleConditionConditionAuthorityAuthorities | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exactMatch = undefined;
      this._exactNotMatch = undefined;
      this._pireRegexMatch = undefined;
      this._pireRegexNotMatch = undefined;
      this._prefixMatch = undefined;
      this._prefixNotMatch = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exactMatch = value.exactMatch;
      this._exactNotMatch = value.exactNotMatch;
      this._pireRegexMatch = value.pireRegexMatch;
      this._pireRegexNotMatch = value.pireRegexNotMatch;
      this._prefixMatch = value.prefixMatch;
      this._prefixNotMatch = value.prefixNotMatch;
    }
  }

  // exact_match - computed: false, optional: true, required: false
  private _exactMatch?: string; 
  public get exactMatch() {
    return this.getStringAttribute('exact_match');
  }
  public set exactMatch(value: string) {
    this._exactMatch = value;
  }
  public resetExactMatch() {
    this._exactMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactMatchInput() {
    return this._exactMatch;
  }

  // exact_not_match - computed: false, optional: true, required: false
  private _exactNotMatch?: string; 
  public get exactNotMatch() {
    return this.getStringAttribute('exact_not_match');
  }
  public set exactNotMatch(value: string) {
    this._exactNotMatch = value;
  }
  public resetExactNotMatch() {
    this._exactNotMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactNotMatchInput() {
    return this._exactNotMatch;
  }

  // pire_regex_match - computed: false, optional: true, required: false
  private _pireRegexMatch?: string; 
  public get pireRegexMatch() {
    return this.getStringAttribute('pire_regex_match');
  }
  public set pireRegexMatch(value: string) {
    this._pireRegexMatch = value;
  }
  public resetPireRegexMatch() {
    this._pireRegexMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pireRegexMatchInput() {
    return this._pireRegexMatch;
  }

  // pire_regex_not_match - computed: false, optional: true, required: false
  private _pireRegexNotMatch?: string; 
  public get pireRegexNotMatch() {
    return this.getStringAttribute('pire_regex_not_match');
  }
  public set pireRegexNotMatch(value: string) {
    this._pireRegexNotMatch = value;
  }
  public resetPireRegexNotMatch() {
    this._pireRegexNotMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pireRegexNotMatchInput() {
    return this._pireRegexNotMatch;
  }

  // prefix_match - computed: false, optional: true, required: false
  private _prefixMatch?: string; 
  public get prefixMatch() {
    return this.getStringAttribute('prefix_match');
  }
  public set prefixMatch(value: string) {
    this._prefixMatch = value;
  }
  public resetPrefixMatch() {
    this._prefixMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixMatchInput() {
    return this._prefixMatch;
  }

  // prefix_not_match - computed: false, optional: true, required: false
  private _prefixNotMatch?: string; 
  public get prefixNotMatch() {
    return this.getStringAttribute('prefix_not_match');
  }
  public set prefixNotMatch(value: string) {
    this._prefixNotMatch = value;
  }
  public resetPrefixNotMatch() {
    this._prefixNotMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixNotMatchInput() {
    return this._prefixNotMatch;
  }
}

export class SwsSecurityProfileSecurityRuleRuleConditionConditionAuthorityAuthoritiesList extends cdktf.ComplexList {
  public internalValue? : SwsSecurityProfileSecurityRuleRuleConditionConditionAuthorityAuthorities[] | cdktf.IResolvable

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
  public get(index: number): SwsSecurityProfileSecurityRuleRuleConditionConditionAuthorityAuthoritiesOutputReference {
    return new SwsSecurityProfileSecurityRuleRuleConditionConditionAuthorityAuthoritiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwsSecurityProfileSecurityRuleRuleConditionConditionAuthority {
  /**
  * authorities block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#authorities SwsSecurityProfile#authorities}
  */
  readonly authorities?: SwsSecurityProfileSecurityRuleRuleConditionConditionAuthorityAuthorities[] | cdktf.IResolvable;
}

export function swsSecurityProfileSecurityRuleRuleConditionConditionAuthorityToTerraform(struct?: SwsSecurityProfileSecurityRuleRuleConditionConditionAuthorityOutputReference | SwsSecurityProfileSecurityRuleRuleConditionConditionAuthority): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authorities: cdktf.listMapper(swsSecurityProfileSecurityRuleRuleConditionConditionAuthorityAuthoritiesToTerraform, true)(struct!.authorities),
  }
}


export function swsSecurityProfileSecurityRuleRuleConditionConditionAuthorityToHclTerraform(struct?: SwsSecurityProfileSecurityRuleRuleConditionConditionAuthorityOutputReference | SwsSecurityProfileSecurityRuleRuleConditionConditionAuthority): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authorities: {
      value: cdktf.listMapperHcl(swsSecurityProfileSecurityRuleRuleConditionConditionAuthorityAuthoritiesToHclTerraform, true)(struct!.authorities),
      isBlock: true,
      type: "list",
      storageClassType: "SwsSecurityProfileSecurityRuleRuleConditionConditionAuthorityAuthoritiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwsSecurityProfileSecurityRuleRuleConditionConditionAuthorityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwsSecurityProfileSecurityRuleRuleConditionConditionAuthority | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorities = this._authorities?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwsSecurityProfileSecurityRuleRuleConditionConditionAuthority | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authorities.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authorities.internalValue = value.authorities;
    }
  }

  // authorities - computed: false, optional: true, required: false
  private _authorities = new SwsSecurityProfileSecurityRuleRuleConditionConditionAuthorityAuthoritiesList(this, "authorities", false);
  public get authorities() {
    return this._authorities;
  }
  public putAuthorities(value: SwsSecurityProfileSecurityRuleRuleConditionConditionAuthorityAuthorities[] | cdktf.IResolvable) {
    this._authorities.internalValue = value;
  }
  public resetAuthorities() {
    this._authorities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authoritiesInput() {
    return this._authorities.internalValue;
  }
}
export interface SwsSecurityProfileSecurityRuleRuleConditionConditionHeadersValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#exact_match SwsSecurityProfile#exact_match}
  */
  readonly exactMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#exact_not_match SwsSecurityProfile#exact_not_match}
  */
  readonly exactNotMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#pire_regex_match SwsSecurityProfile#pire_regex_match}
  */
  readonly pireRegexMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#pire_regex_not_match SwsSecurityProfile#pire_regex_not_match}
  */
  readonly pireRegexNotMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#prefix_match SwsSecurityProfile#prefix_match}
  */
  readonly prefixMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#prefix_not_match SwsSecurityProfile#prefix_not_match}
  */
  readonly prefixNotMatch?: string;
}

export function swsSecurityProfileSecurityRuleRuleConditionConditionHeadersValueToTerraform(struct?: SwsSecurityProfileSecurityRuleRuleConditionConditionHeadersValueOutputReference | SwsSecurityProfileSecurityRuleRuleConditionConditionHeadersValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_match: cdktf.stringToTerraform(struct!.exactMatch),
    exact_not_match: cdktf.stringToTerraform(struct!.exactNotMatch),
    pire_regex_match: cdktf.stringToTerraform(struct!.pireRegexMatch),
    pire_regex_not_match: cdktf.stringToTerraform(struct!.pireRegexNotMatch),
    prefix_match: cdktf.stringToTerraform(struct!.prefixMatch),
    prefix_not_match: cdktf.stringToTerraform(struct!.prefixNotMatch),
  }
}


export function swsSecurityProfileSecurityRuleRuleConditionConditionHeadersValueToHclTerraform(struct?: SwsSecurityProfileSecurityRuleRuleConditionConditionHeadersValueOutputReference | SwsSecurityProfileSecurityRuleRuleConditionConditionHeadersValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_match: {
      value: cdktf.stringToHclTerraform(struct!.exactMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exact_not_match: {
      value: cdktf.stringToHclTerraform(struct!.exactNotMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pire_regex_match: {
      value: cdktf.stringToHclTerraform(struct!.pireRegexMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pire_regex_not_match: {
      value: cdktf.stringToHclTerraform(struct!.pireRegexNotMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_match: {
      value: cdktf.stringToHclTerraform(struct!.prefixMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_not_match: {
      value: cdktf.stringToHclTerraform(struct!.prefixNotMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwsSecurityProfileSecurityRuleRuleConditionConditionHeadersValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwsSecurityProfileSecurityRuleRuleConditionConditionHeadersValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactMatch = this._exactMatch;
    }
    if (this._exactNotMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactNotMatch = this._exactNotMatch;
    }
    if (this._pireRegexMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.pireRegexMatch = this._pireRegexMatch;
    }
    if (this._pireRegexNotMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.pireRegexNotMatch = this._pireRegexNotMatch;
    }
    if (this._prefixMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixMatch = this._prefixMatch;
    }
    if (this._prefixNotMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixNotMatch = this._prefixNotMatch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwsSecurityProfileSecurityRuleRuleConditionConditionHeadersValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactMatch = undefined;
      this._exactNotMatch = undefined;
      this._pireRegexMatch = undefined;
      this._pireRegexNotMatch = undefined;
      this._prefixMatch = undefined;
      this._prefixNotMatch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactMatch = value.exactMatch;
      this._exactNotMatch = value.exactNotMatch;
      this._pireRegexMatch = value.pireRegexMatch;
      this._pireRegexNotMatch = value.pireRegexNotMatch;
      this._prefixMatch = value.prefixMatch;
      this._prefixNotMatch = value.prefixNotMatch;
    }
  }

  // exact_match - computed: false, optional: true, required: false
  private _exactMatch?: string; 
  public get exactMatch() {
    return this.getStringAttribute('exact_match');
  }
  public set exactMatch(value: string) {
    this._exactMatch = value;
  }
  public resetExactMatch() {
    this._exactMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactMatchInput() {
    return this._exactMatch;
  }

  // exact_not_match - computed: false, optional: true, required: false
  private _exactNotMatch?: string; 
  public get exactNotMatch() {
    return this.getStringAttribute('exact_not_match');
  }
  public set exactNotMatch(value: string) {
    this._exactNotMatch = value;
  }
  public resetExactNotMatch() {
    this._exactNotMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactNotMatchInput() {
    return this._exactNotMatch;
  }

  // pire_regex_match - computed: false, optional: true, required: false
  private _pireRegexMatch?: string; 
  public get pireRegexMatch() {
    return this.getStringAttribute('pire_regex_match');
  }
  public set pireRegexMatch(value: string) {
    this._pireRegexMatch = value;
  }
  public resetPireRegexMatch() {
    this._pireRegexMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pireRegexMatchInput() {
    return this._pireRegexMatch;
  }

  // pire_regex_not_match - computed: false, optional: true, required: false
  private _pireRegexNotMatch?: string; 
  public get pireRegexNotMatch() {
    return this.getStringAttribute('pire_regex_not_match');
  }
  public set pireRegexNotMatch(value: string) {
    this._pireRegexNotMatch = value;
  }
  public resetPireRegexNotMatch() {
    this._pireRegexNotMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pireRegexNotMatchInput() {
    return this._pireRegexNotMatch;
  }

  // prefix_match - computed: false, optional: true, required: false
  private _prefixMatch?: string; 
  public get prefixMatch() {
    return this.getStringAttribute('prefix_match');
  }
  public set prefixMatch(value: string) {
    this._prefixMatch = value;
  }
  public resetPrefixMatch() {
    this._prefixMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixMatchInput() {
    return this._prefixMatch;
  }

  // prefix_not_match - computed: false, optional: true, required: false
  private _prefixNotMatch?: string; 
  public get prefixNotMatch() {
    return this.getStringAttribute('prefix_not_match');
  }
  public set prefixNotMatch(value: string) {
    this._prefixNotMatch = value;
  }
  public resetPrefixNotMatch() {
    this._prefixNotMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixNotMatchInput() {
    return this._prefixNotMatch;
  }
}
export interface SwsSecurityProfileSecurityRuleRuleConditionConditionHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#name SwsSecurityProfile#name}
  */
  readonly name?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#value SwsSecurityProfile#value}
  */
  readonly value: SwsSecurityProfileSecurityRuleRuleConditionConditionHeadersValue;
}

export function swsSecurityProfileSecurityRuleRuleConditionConditionHeadersToTerraform(struct?: SwsSecurityProfileSecurityRuleRuleConditionConditionHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: swsSecurityProfileSecurityRuleRuleConditionConditionHeadersValueToTerraform(struct!.value),
  }
}


export function swsSecurityProfileSecurityRuleRuleConditionConditionHeadersToHclTerraform(struct?: SwsSecurityProfileSecurityRuleRuleConditionConditionHeaders | cdktf.IResolvable): any {
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
    value: {
      value: swsSecurityProfileSecurityRuleRuleConditionConditionHeadersValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "SwsSecurityProfileSecurityRuleRuleConditionConditionHeadersValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwsSecurityProfileSecurityRuleRuleConditionConditionHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwsSecurityProfileSecurityRuleRuleConditionConditionHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwsSecurityProfileSecurityRuleRuleConditionConditionHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value.internalValue = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value = new SwsSecurityProfileSecurityRuleRuleConditionConditionHeadersValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: SwsSecurityProfileSecurityRuleRuleConditionConditionHeadersValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class SwsSecurityProfileSecurityRuleRuleConditionConditionHeadersList extends cdktf.ComplexList {
  public internalValue? : SwsSecurityProfileSecurityRuleRuleConditionConditionHeaders[] | cdktf.IResolvable

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
  public get(index: number): SwsSecurityProfileSecurityRuleRuleConditionConditionHeadersOutputReference {
    return new SwsSecurityProfileSecurityRuleRuleConditionConditionHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwsSecurityProfileSecurityRuleRuleConditionConditionHttpMethodHttpMethods {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#exact_match SwsSecurityProfile#exact_match}
  */
  readonly exactMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#exact_not_match SwsSecurityProfile#exact_not_match}
  */
  readonly exactNotMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#pire_regex_match SwsSecurityProfile#pire_regex_match}
  */
  readonly pireRegexMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#pire_regex_not_match SwsSecurityProfile#pire_regex_not_match}
  */
  readonly pireRegexNotMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#prefix_match SwsSecurityProfile#prefix_match}
  */
  readonly prefixMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#prefix_not_match SwsSecurityProfile#prefix_not_match}
  */
  readonly prefixNotMatch?: string;
}

export function swsSecurityProfileSecurityRuleRuleConditionConditionHttpMethodHttpMethodsToTerraform(struct?: SwsSecurityProfileSecurityRuleRuleConditionConditionHttpMethodHttpMethods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_match: cdktf.stringToTerraform(struct!.exactMatch),
    exact_not_match: cdktf.stringToTerraform(struct!.exactNotMatch),
    pire_regex_match: cdktf.stringToTerraform(struct!.pireRegexMatch),
    pire_regex_not_match: cdktf.stringToTerraform(struct!.pireRegexNotMatch),
    prefix_match: cdktf.stringToTerraform(struct!.prefixMatch),
    prefix_not_match: cdktf.stringToTerraform(struct!.prefixNotMatch),
  }
}


export function swsSecurityProfileSecurityRuleRuleConditionConditionHttpMethodHttpMethodsToHclTerraform(struct?: SwsSecurityProfileSecurityRuleRuleConditionConditionHttpMethodHttpMethods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_match: {
      value: cdktf.stringToHclTerraform(struct!.exactMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exact_not_match: {
      value: cdktf.stringToHclTerraform(struct!.exactNotMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pire_regex_match: {
      value: cdktf.stringToHclTerraform(struct!.pireRegexMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pire_regex_not_match: {
      value: cdktf.stringToHclTerraform(struct!.pireRegexNotMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_match: {
      value: cdktf.stringToHclTerraform(struct!.prefixMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_not_match: {
      value: cdktf.stringToHclTerraform(struct!.prefixNotMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwsSecurityProfileSecurityRuleRuleConditionConditionHttpMethodHttpMethodsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwsSecurityProfileSecurityRuleRuleConditionConditionHttpMethodHttpMethods | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactMatch = this._exactMatch;
    }
    if (this._exactNotMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactNotMatch = this._exactNotMatch;
    }
    if (this._pireRegexMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.pireRegexMatch = this._pireRegexMatch;
    }
    if (this._pireRegexNotMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.pireRegexNotMatch = this._pireRegexNotMatch;
    }
    if (this._prefixMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixMatch = this._prefixMatch;
    }
    if (this._prefixNotMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixNotMatch = this._prefixNotMatch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwsSecurityProfileSecurityRuleRuleConditionConditionHttpMethodHttpMethods | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exactMatch = undefined;
      this._exactNotMatch = undefined;
      this._pireRegexMatch = undefined;
      this._pireRegexNotMatch = undefined;
      this._prefixMatch = undefined;
      this._prefixNotMatch = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exactMatch = value.exactMatch;
      this._exactNotMatch = value.exactNotMatch;
      this._pireRegexMatch = value.pireRegexMatch;
      this._pireRegexNotMatch = value.pireRegexNotMatch;
      this._prefixMatch = value.prefixMatch;
      this._prefixNotMatch = value.prefixNotMatch;
    }
  }

  // exact_match - computed: false, optional: true, required: false
  private _exactMatch?: string; 
  public get exactMatch() {
    return this.getStringAttribute('exact_match');
  }
  public set exactMatch(value: string) {
    this._exactMatch = value;
  }
  public resetExactMatch() {
    this._exactMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactMatchInput() {
    return this._exactMatch;
  }

  // exact_not_match - computed: false, optional: true, required: false
  private _exactNotMatch?: string; 
  public get exactNotMatch() {
    return this.getStringAttribute('exact_not_match');
  }
  public set exactNotMatch(value: string) {
    this._exactNotMatch = value;
  }
  public resetExactNotMatch() {
    this._exactNotMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactNotMatchInput() {
    return this._exactNotMatch;
  }

  // pire_regex_match - computed: false, optional: true, required: false
  private _pireRegexMatch?: string; 
  public get pireRegexMatch() {
    return this.getStringAttribute('pire_regex_match');
  }
  public set pireRegexMatch(value: string) {
    this._pireRegexMatch = value;
  }
  public resetPireRegexMatch() {
    this._pireRegexMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pireRegexMatchInput() {
    return this._pireRegexMatch;
  }

  // pire_regex_not_match - computed: false, optional: true, required: false
  private _pireRegexNotMatch?: string; 
  public get pireRegexNotMatch() {
    return this.getStringAttribute('pire_regex_not_match');
  }
  public set pireRegexNotMatch(value: string) {
    this._pireRegexNotMatch = value;
  }
  public resetPireRegexNotMatch() {
    this._pireRegexNotMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pireRegexNotMatchInput() {
    return this._pireRegexNotMatch;
  }

  // prefix_match - computed: false, optional: true, required: false
  private _prefixMatch?: string; 
  public get prefixMatch() {
    return this.getStringAttribute('prefix_match');
  }
  public set prefixMatch(value: string) {
    this._prefixMatch = value;
  }
  public resetPrefixMatch() {
    this._prefixMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixMatchInput() {
    return this._prefixMatch;
  }

  // prefix_not_match - computed: false, optional: true, required: false
  private _prefixNotMatch?: string; 
  public get prefixNotMatch() {
    return this.getStringAttribute('prefix_not_match');
  }
  public set prefixNotMatch(value: string) {
    this._prefixNotMatch = value;
  }
  public resetPrefixNotMatch() {
    this._prefixNotMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixNotMatchInput() {
    return this._prefixNotMatch;
  }
}

export class SwsSecurityProfileSecurityRuleRuleConditionConditionHttpMethodHttpMethodsList extends cdktf.ComplexList {
  public internalValue? : SwsSecurityProfileSecurityRuleRuleConditionConditionHttpMethodHttpMethods[] | cdktf.IResolvable

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
  public get(index: number): SwsSecurityProfileSecurityRuleRuleConditionConditionHttpMethodHttpMethodsOutputReference {
    return new SwsSecurityProfileSecurityRuleRuleConditionConditionHttpMethodHttpMethodsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwsSecurityProfileSecurityRuleRuleConditionConditionHttpMethod {
  /**
  * http_methods block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#http_methods SwsSecurityProfile#http_methods}
  */
  readonly httpMethods?: SwsSecurityProfileSecurityRuleRuleConditionConditionHttpMethodHttpMethods[] | cdktf.IResolvable;
}

export function swsSecurityProfileSecurityRuleRuleConditionConditionHttpMethodToTerraform(struct?: SwsSecurityProfileSecurityRuleRuleConditionConditionHttpMethodOutputReference | SwsSecurityProfileSecurityRuleRuleConditionConditionHttpMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_methods: cdktf.listMapper(swsSecurityProfileSecurityRuleRuleConditionConditionHttpMethodHttpMethodsToTerraform, true)(struct!.httpMethods),
  }
}


export function swsSecurityProfileSecurityRuleRuleConditionConditionHttpMethodToHclTerraform(struct?: SwsSecurityProfileSecurityRuleRuleConditionConditionHttpMethodOutputReference | SwsSecurityProfileSecurityRuleRuleConditionConditionHttpMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_methods: {
      value: cdktf.listMapperHcl(swsSecurityProfileSecurityRuleRuleConditionConditionHttpMethodHttpMethodsToHclTerraform, true)(struct!.httpMethods),
      isBlock: true,
      type: "list",
      storageClassType: "SwsSecurityProfileSecurityRuleRuleConditionConditionHttpMethodHttpMethodsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwsSecurityProfileSecurityRuleRuleConditionConditionHttpMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwsSecurityProfileSecurityRuleRuleConditionConditionHttpMethod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpMethods?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpMethods = this._httpMethods?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwsSecurityProfileSecurityRuleRuleConditionConditionHttpMethod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._httpMethods.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._httpMethods.internalValue = value.httpMethods;
    }
  }

  // http_methods - computed: false, optional: true, required: false
  private _httpMethods = new SwsSecurityProfileSecurityRuleRuleConditionConditionHttpMethodHttpMethodsList(this, "http_methods", false);
  public get httpMethods() {
    return this._httpMethods;
  }
  public putHttpMethods(value: SwsSecurityProfileSecurityRuleRuleConditionConditionHttpMethodHttpMethods[] | cdktf.IResolvable) {
    this._httpMethods.internalValue = value;
  }
  public resetHttpMethods() {
    this._httpMethods.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMethodsInput() {
    return this._httpMethods.internalValue;
  }
}
export interface SwsSecurityProfileSecurityRuleRuleConditionConditionRequestUriPath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#exact_match SwsSecurityProfile#exact_match}
  */
  readonly exactMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#exact_not_match SwsSecurityProfile#exact_not_match}
  */
  readonly exactNotMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#pire_regex_match SwsSecurityProfile#pire_regex_match}
  */
  readonly pireRegexMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#pire_regex_not_match SwsSecurityProfile#pire_regex_not_match}
  */
  readonly pireRegexNotMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#prefix_match SwsSecurityProfile#prefix_match}
  */
  readonly prefixMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#prefix_not_match SwsSecurityProfile#prefix_not_match}
  */
  readonly prefixNotMatch?: string;
}

export function swsSecurityProfileSecurityRuleRuleConditionConditionRequestUriPathToTerraform(struct?: SwsSecurityProfileSecurityRuleRuleConditionConditionRequestUriPathOutputReference | SwsSecurityProfileSecurityRuleRuleConditionConditionRequestUriPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_match: cdktf.stringToTerraform(struct!.exactMatch),
    exact_not_match: cdktf.stringToTerraform(struct!.exactNotMatch),
    pire_regex_match: cdktf.stringToTerraform(struct!.pireRegexMatch),
    pire_regex_not_match: cdktf.stringToTerraform(struct!.pireRegexNotMatch),
    prefix_match: cdktf.stringToTerraform(struct!.prefixMatch),
    prefix_not_match: cdktf.stringToTerraform(struct!.prefixNotMatch),
  }
}


export function swsSecurityProfileSecurityRuleRuleConditionConditionRequestUriPathToHclTerraform(struct?: SwsSecurityProfileSecurityRuleRuleConditionConditionRequestUriPathOutputReference | SwsSecurityProfileSecurityRuleRuleConditionConditionRequestUriPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_match: {
      value: cdktf.stringToHclTerraform(struct!.exactMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exact_not_match: {
      value: cdktf.stringToHclTerraform(struct!.exactNotMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pire_regex_match: {
      value: cdktf.stringToHclTerraform(struct!.pireRegexMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pire_regex_not_match: {
      value: cdktf.stringToHclTerraform(struct!.pireRegexNotMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_match: {
      value: cdktf.stringToHclTerraform(struct!.prefixMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_not_match: {
      value: cdktf.stringToHclTerraform(struct!.prefixNotMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwsSecurityProfileSecurityRuleRuleConditionConditionRequestUriPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwsSecurityProfileSecurityRuleRuleConditionConditionRequestUriPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactMatch = this._exactMatch;
    }
    if (this._exactNotMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactNotMatch = this._exactNotMatch;
    }
    if (this._pireRegexMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.pireRegexMatch = this._pireRegexMatch;
    }
    if (this._pireRegexNotMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.pireRegexNotMatch = this._pireRegexNotMatch;
    }
    if (this._prefixMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixMatch = this._prefixMatch;
    }
    if (this._prefixNotMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixNotMatch = this._prefixNotMatch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwsSecurityProfileSecurityRuleRuleConditionConditionRequestUriPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactMatch = undefined;
      this._exactNotMatch = undefined;
      this._pireRegexMatch = undefined;
      this._pireRegexNotMatch = undefined;
      this._prefixMatch = undefined;
      this._prefixNotMatch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactMatch = value.exactMatch;
      this._exactNotMatch = value.exactNotMatch;
      this._pireRegexMatch = value.pireRegexMatch;
      this._pireRegexNotMatch = value.pireRegexNotMatch;
      this._prefixMatch = value.prefixMatch;
      this._prefixNotMatch = value.prefixNotMatch;
    }
  }

  // exact_match - computed: false, optional: true, required: false
  private _exactMatch?: string; 
  public get exactMatch() {
    return this.getStringAttribute('exact_match');
  }
  public set exactMatch(value: string) {
    this._exactMatch = value;
  }
  public resetExactMatch() {
    this._exactMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactMatchInput() {
    return this._exactMatch;
  }

  // exact_not_match - computed: false, optional: true, required: false
  private _exactNotMatch?: string; 
  public get exactNotMatch() {
    return this.getStringAttribute('exact_not_match');
  }
  public set exactNotMatch(value: string) {
    this._exactNotMatch = value;
  }
  public resetExactNotMatch() {
    this._exactNotMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactNotMatchInput() {
    return this._exactNotMatch;
  }

  // pire_regex_match - computed: false, optional: true, required: false
  private _pireRegexMatch?: string; 
  public get pireRegexMatch() {
    return this.getStringAttribute('pire_regex_match');
  }
  public set pireRegexMatch(value: string) {
    this._pireRegexMatch = value;
  }
  public resetPireRegexMatch() {
    this._pireRegexMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pireRegexMatchInput() {
    return this._pireRegexMatch;
  }

  // pire_regex_not_match - computed: false, optional: true, required: false
  private _pireRegexNotMatch?: string; 
  public get pireRegexNotMatch() {
    return this.getStringAttribute('pire_regex_not_match');
  }
  public set pireRegexNotMatch(value: string) {
    this._pireRegexNotMatch = value;
  }
  public resetPireRegexNotMatch() {
    this._pireRegexNotMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pireRegexNotMatchInput() {
    return this._pireRegexNotMatch;
  }

  // prefix_match - computed: false, optional: true, required: false
  private _prefixMatch?: string; 
  public get prefixMatch() {
    return this.getStringAttribute('prefix_match');
  }
  public set prefixMatch(value: string) {
    this._prefixMatch = value;
  }
  public resetPrefixMatch() {
    this._prefixMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixMatchInput() {
    return this._prefixMatch;
  }

  // prefix_not_match - computed: false, optional: true, required: false
  private _prefixNotMatch?: string; 
  public get prefixNotMatch() {
    return this.getStringAttribute('prefix_not_match');
  }
  public set prefixNotMatch(value: string) {
    this._prefixNotMatch = value;
  }
  public resetPrefixNotMatch() {
    this._prefixNotMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixNotMatchInput() {
    return this._prefixNotMatch;
  }
}
export interface SwsSecurityProfileSecurityRuleRuleConditionConditionRequestUriQueriesValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#exact_match SwsSecurityProfile#exact_match}
  */
  readonly exactMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#exact_not_match SwsSecurityProfile#exact_not_match}
  */
  readonly exactNotMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#pire_regex_match SwsSecurityProfile#pire_regex_match}
  */
  readonly pireRegexMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#pire_regex_not_match SwsSecurityProfile#pire_regex_not_match}
  */
  readonly pireRegexNotMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#prefix_match SwsSecurityProfile#prefix_match}
  */
  readonly prefixMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#prefix_not_match SwsSecurityProfile#prefix_not_match}
  */
  readonly prefixNotMatch?: string;
}

export function swsSecurityProfileSecurityRuleRuleConditionConditionRequestUriQueriesValueToTerraform(struct?: SwsSecurityProfileSecurityRuleRuleConditionConditionRequestUriQueriesValueOutputReference | SwsSecurityProfileSecurityRuleRuleConditionConditionRequestUriQueriesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_match: cdktf.stringToTerraform(struct!.exactMatch),
    exact_not_match: cdktf.stringToTerraform(struct!.exactNotMatch),
    pire_regex_match: cdktf.stringToTerraform(struct!.pireRegexMatch),
    pire_regex_not_match: cdktf.stringToTerraform(struct!.pireRegexNotMatch),
    prefix_match: cdktf.stringToTerraform(struct!.prefixMatch),
    prefix_not_match: cdktf.stringToTerraform(struct!.prefixNotMatch),
  }
}


export function swsSecurityProfileSecurityRuleRuleConditionConditionRequestUriQueriesValueToHclTerraform(struct?: SwsSecurityProfileSecurityRuleRuleConditionConditionRequestUriQueriesValueOutputReference | SwsSecurityProfileSecurityRuleRuleConditionConditionRequestUriQueriesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_match: {
      value: cdktf.stringToHclTerraform(struct!.exactMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exact_not_match: {
      value: cdktf.stringToHclTerraform(struct!.exactNotMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pire_regex_match: {
      value: cdktf.stringToHclTerraform(struct!.pireRegexMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pire_regex_not_match: {
      value: cdktf.stringToHclTerraform(struct!.pireRegexNotMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_match: {
      value: cdktf.stringToHclTerraform(struct!.prefixMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_not_match: {
      value: cdktf.stringToHclTerraform(struct!.prefixNotMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwsSecurityProfileSecurityRuleRuleConditionConditionRequestUriQueriesValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwsSecurityProfileSecurityRuleRuleConditionConditionRequestUriQueriesValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactMatch = this._exactMatch;
    }
    if (this._exactNotMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactNotMatch = this._exactNotMatch;
    }
    if (this._pireRegexMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.pireRegexMatch = this._pireRegexMatch;
    }
    if (this._pireRegexNotMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.pireRegexNotMatch = this._pireRegexNotMatch;
    }
    if (this._prefixMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixMatch = this._prefixMatch;
    }
    if (this._prefixNotMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixNotMatch = this._prefixNotMatch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwsSecurityProfileSecurityRuleRuleConditionConditionRequestUriQueriesValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactMatch = undefined;
      this._exactNotMatch = undefined;
      this._pireRegexMatch = undefined;
      this._pireRegexNotMatch = undefined;
      this._prefixMatch = undefined;
      this._prefixNotMatch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactMatch = value.exactMatch;
      this._exactNotMatch = value.exactNotMatch;
      this._pireRegexMatch = value.pireRegexMatch;
      this._pireRegexNotMatch = value.pireRegexNotMatch;
      this._prefixMatch = value.prefixMatch;
      this._prefixNotMatch = value.prefixNotMatch;
    }
  }

  // exact_match - computed: false, optional: true, required: false
  private _exactMatch?: string; 
  public get exactMatch() {
    return this.getStringAttribute('exact_match');
  }
  public set exactMatch(value: string) {
    this._exactMatch = value;
  }
  public resetExactMatch() {
    this._exactMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactMatchInput() {
    return this._exactMatch;
  }

  // exact_not_match - computed: false, optional: true, required: false
  private _exactNotMatch?: string; 
  public get exactNotMatch() {
    return this.getStringAttribute('exact_not_match');
  }
  public set exactNotMatch(value: string) {
    this._exactNotMatch = value;
  }
  public resetExactNotMatch() {
    this._exactNotMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactNotMatchInput() {
    return this._exactNotMatch;
  }

  // pire_regex_match - computed: false, optional: true, required: false
  private _pireRegexMatch?: string; 
  public get pireRegexMatch() {
    return this.getStringAttribute('pire_regex_match');
  }
  public set pireRegexMatch(value: string) {
    this._pireRegexMatch = value;
  }
  public resetPireRegexMatch() {
    this._pireRegexMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pireRegexMatchInput() {
    return this._pireRegexMatch;
  }

  // pire_regex_not_match - computed: false, optional: true, required: false
  private _pireRegexNotMatch?: string; 
  public get pireRegexNotMatch() {
    return this.getStringAttribute('pire_regex_not_match');
  }
  public set pireRegexNotMatch(value: string) {
    this._pireRegexNotMatch = value;
  }
  public resetPireRegexNotMatch() {
    this._pireRegexNotMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pireRegexNotMatchInput() {
    return this._pireRegexNotMatch;
  }

  // prefix_match - computed: false, optional: true, required: false
  private _prefixMatch?: string; 
  public get prefixMatch() {
    return this.getStringAttribute('prefix_match');
  }
  public set prefixMatch(value: string) {
    this._prefixMatch = value;
  }
  public resetPrefixMatch() {
    this._prefixMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixMatchInput() {
    return this._prefixMatch;
  }

  // prefix_not_match - computed: false, optional: true, required: false
  private _prefixNotMatch?: string; 
  public get prefixNotMatch() {
    return this.getStringAttribute('prefix_not_match');
  }
  public set prefixNotMatch(value: string) {
    this._prefixNotMatch = value;
  }
  public resetPrefixNotMatch() {
    this._prefixNotMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixNotMatchInput() {
    return this._prefixNotMatch;
  }
}
export interface SwsSecurityProfileSecurityRuleRuleConditionConditionRequestUriQueries {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#key SwsSecurityProfile#key}
  */
  readonly key: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#value SwsSecurityProfile#value}
  */
  readonly value: SwsSecurityProfileSecurityRuleRuleConditionConditionRequestUriQueriesValue;
}

export function swsSecurityProfileSecurityRuleRuleConditionConditionRequestUriQueriesToTerraform(struct?: SwsSecurityProfileSecurityRuleRuleConditionConditionRequestUriQueries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: swsSecurityProfileSecurityRuleRuleConditionConditionRequestUriQueriesValueToTerraform(struct!.value),
  }
}


export function swsSecurityProfileSecurityRuleRuleConditionConditionRequestUriQueriesToHclTerraform(struct?: SwsSecurityProfileSecurityRuleRuleConditionConditionRequestUriQueries | cdktf.IResolvable): any {
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
    value: {
      value: swsSecurityProfileSecurityRuleRuleConditionConditionRequestUriQueriesValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "SwsSecurityProfileSecurityRuleRuleConditionConditionRequestUriQueriesValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwsSecurityProfileSecurityRuleRuleConditionConditionRequestUriQueriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwsSecurityProfileSecurityRuleRuleConditionConditionRequestUriQueries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwsSecurityProfileSecurityRuleRuleConditionConditionRequestUriQueries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value.internalValue = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value = new SwsSecurityProfileSecurityRuleRuleConditionConditionRequestUriQueriesValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: SwsSecurityProfileSecurityRuleRuleConditionConditionRequestUriQueriesValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class SwsSecurityProfileSecurityRuleRuleConditionConditionRequestUriQueriesList extends cdktf.ComplexList {
  public internalValue? : SwsSecurityProfileSecurityRuleRuleConditionConditionRequestUriQueries[] | cdktf.IResolvable

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
  public get(index: number): SwsSecurityProfileSecurityRuleRuleConditionConditionRequestUriQueriesOutputReference {
    return new SwsSecurityProfileSecurityRuleRuleConditionConditionRequestUriQueriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwsSecurityProfileSecurityRuleRuleConditionConditionRequestUri {
  /**
  * path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#path SwsSecurityProfile#path}
  */
  readonly path?: SwsSecurityProfileSecurityRuleRuleConditionConditionRequestUriPath;
  /**
  * queries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#queries SwsSecurityProfile#queries}
  */
  readonly queries?: SwsSecurityProfileSecurityRuleRuleConditionConditionRequestUriQueries[] | cdktf.IResolvable;
}

export function swsSecurityProfileSecurityRuleRuleConditionConditionRequestUriToTerraform(struct?: SwsSecurityProfileSecurityRuleRuleConditionConditionRequestUriOutputReference | SwsSecurityProfileSecurityRuleRuleConditionConditionRequestUri): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: swsSecurityProfileSecurityRuleRuleConditionConditionRequestUriPathToTerraform(struct!.path),
    queries: cdktf.listMapper(swsSecurityProfileSecurityRuleRuleConditionConditionRequestUriQueriesToTerraform, true)(struct!.queries),
  }
}


export function swsSecurityProfileSecurityRuleRuleConditionConditionRequestUriToHclTerraform(struct?: SwsSecurityProfileSecurityRuleRuleConditionConditionRequestUriOutputReference | SwsSecurityProfileSecurityRuleRuleConditionConditionRequestUri): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: swsSecurityProfileSecurityRuleRuleConditionConditionRequestUriPathToHclTerraform(struct!.path),
      isBlock: true,
      type: "list",
      storageClassType: "SwsSecurityProfileSecurityRuleRuleConditionConditionRequestUriPathList",
    },
    queries: {
      value: cdktf.listMapperHcl(swsSecurityProfileSecurityRuleRuleConditionConditionRequestUriQueriesToHclTerraform, true)(struct!.queries),
      isBlock: true,
      type: "list",
      storageClassType: "SwsSecurityProfileSecurityRuleRuleConditionConditionRequestUriQueriesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwsSecurityProfileSecurityRuleRuleConditionConditionRequestUriOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwsSecurityProfileSecurityRuleRuleConditionConditionRequestUri | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path?.internalValue;
    }
    if (this._queries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queries = this._queries?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwsSecurityProfileSecurityRuleRuleConditionConditionRequestUri | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._path.internalValue = undefined;
      this._queries.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._path.internalValue = value.path;
      this._queries.internalValue = value.queries;
    }
  }

  // path - computed: false, optional: true, required: false
  private _path = new SwsSecurityProfileSecurityRuleRuleConditionConditionRequestUriPathOutputReference(this, "path");
  public get path() {
    return this._path;
  }
  public putPath(value: SwsSecurityProfileSecurityRuleRuleConditionConditionRequestUriPath) {
    this._path.internalValue = value;
  }
  public resetPath() {
    this._path.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path.internalValue;
  }

  // queries - computed: false, optional: true, required: false
  private _queries = new SwsSecurityProfileSecurityRuleRuleConditionConditionRequestUriQueriesList(this, "queries", false);
  public get queries() {
    return this._queries;
  }
  public putQueries(value: SwsSecurityProfileSecurityRuleRuleConditionConditionRequestUriQueries[] | cdktf.IResolvable) {
    this._queries.internalValue = value;
  }
  public resetQueries() {
    this._queries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queriesInput() {
    return this._queries.internalValue;
  }
}
export interface SwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpGeoIpMatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#locations SwsSecurityProfile#locations}
  */
  readonly locations?: string[];
}

export function swsSecurityProfileSecurityRuleRuleConditionConditionSourceIpGeoIpMatchToTerraform(struct?: SwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpGeoIpMatchOutputReference | SwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpGeoIpMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    locations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.locations),
  }
}


export function swsSecurityProfileSecurityRuleRuleConditionConditionSourceIpGeoIpMatchToHclTerraform(struct?: SwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpGeoIpMatchOutputReference | SwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpGeoIpMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    locations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.locations),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpGeoIpMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpGeoIpMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._locations !== undefined) {
      hasAnyValues = true;
      internalValueResult.locations = this._locations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpGeoIpMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._locations = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._locations = value.locations;
    }
  }

  // locations - computed: false, optional: true, required: false
  private _locations?: string[]; 
  public get locations() {
    return this.getListAttribute('locations');
  }
  public set locations(value: string[]) {
    this._locations = value;
  }
  public resetLocations() {
    this._locations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationsInput() {
    return this._locations;
  }
}
export interface SwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpGeoIpNotMatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#locations SwsSecurityProfile#locations}
  */
  readonly locations?: string[];
}

export function swsSecurityProfileSecurityRuleRuleConditionConditionSourceIpGeoIpNotMatchToTerraform(struct?: SwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpGeoIpNotMatchOutputReference | SwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpGeoIpNotMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    locations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.locations),
  }
}


export function swsSecurityProfileSecurityRuleRuleConditionConditionSourceIpGeoIpNotMatchToHclTerraform(struct?: SwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpGeoIpNotMatchOutputReference | SwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpGeoIpNotMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    locations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.locations),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpGeoIpNotMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpGeoIpNotMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._locations !== undefined) {
      hasAnyValues = true;
      internalValueResult.locations = this._locations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpGeoIpNotMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._locations = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._locations = value.locations;
    }
  }

  // locations - computed: false, optional: true, required: false
  private _locations?: string[]; 
  public get locations() {
    return this.getListAttribute('locations');
  }
  public set locations(value: string[]) {
    this._locations = value;
  }
  public resetLocations() {
    this._locations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationsInput() {
    return this._locations;
  }
}
export interface SwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpIpRangesMatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#ip_ranges SwsSecurityProfile#ip_ranges}
  */
  readonly ipRanges?: string[];
}

export function swsSecurityProfileSecurityRuleRuleConditionConditionSourceIpIpRangesMatchToTerraform(struct?: SwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpIpRangesMatchOutputReference | SwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpIpRangesMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipRanges),
  }
}


export function swsSecurityProfileSecurityRuleRuleConditionConditionSourceIpIpRangesMatchToHclTerraform(struct?: SwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpIpRangesMatchOutputReference | SwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpIpRangesMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_ranges: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipRanges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpIpRangesMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpIpRangesMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRanges = this._ipRanges;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpIpRangesMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipRanges = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipRanges = value.ipRanges;
    }
  }

  // ip_ranges - computed: false, optional: true, required: false
  private _ipRanges?: string[]; 
  public get ipRanges() {
    return this.getListAttribute('ip_ranges');
  }
  public set ipRanges(value: string[]) {
    this._ipRanges = value;
  }
  public resetIpRanges() {
    this._ipRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRangesInput() {
    return this._ipRanges;
  }
}
export interface SwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpIpRangesNotMatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#ip_ranges SwsSecurityProfile#ip_ranges}
  */
  readonly ipRanges?: string[];
}

export function swsSecurityProfileSecurityRuleRuleConditionConditionSourceIpIpRangesNotMatchToTerraform(struct?: SwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpIpRangesNotMatchOutputReference | SwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpIpRangesNotMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipRanges),
  }
}


export function swsSecurityProfileSecurityRuleRuleConditionConditionSourceIpIpRangesNotMatchToHclTerraform(struct?: SwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpIpRangesNotMatchOutputReference | SwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpIpRangesNotMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_ranges: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipRanges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpIpRangesNotMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpIpRangesNotMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRanges = this._ipRanges;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpIpRangesNotMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipRanges = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipRanges = value.ipRanges;
    }
  }

  // ip_ranges - computed: false, optional: true, required: false
  private _ipRanges?: string[]; 
  public get ipRanges() {
    return this.getListAttribute('ip_ranges');
  }
  public set ipRanges(value: string[]) {
    this._ipRanges = value;
  }
  public resetIpRanges() {
    this._ipRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRangesInput() {
    return this._ipRanges;
  }
}
export interface SwsSecurityProfileSecurityRuleRuleConditionConditionSourceIp {
  /**
  * geo_ip_match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#geo_ip_match SwsSecurityProfile#geo_ip_match}
  */
  readonly geoIpMatch?: SwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpGeoIpMatch;
  /**
  * geo_ip_not_match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#geo_ip_not_match SwsSecurityProfile#geo_ip_not_match}
  */
  readonly geoIpNotMatch?: SwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpGeoIpNotMatch;
  /**
  * ip_ranges_match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#ip_ranges_match SwsSecurityProfile#ip_ranges_match}
  */
  readonly ipRangesMatch?: SwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpIpRangesMatch;
  /**
  * ip_ranges_not_match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#ip_ranges_not_match SwsSecurityProfile#ip_ranges_not_match}
  */
  readonly ipRangesNotMatch?: SwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpIpRangesNotMatch;
}

export function swsSecurityProfileSecurityRuleRuleConditionConditionSourceIpToTerraform(struct?: SwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpOutputReference | SwsSecurityProfileSecurityRuleRuleConditionConditionSourceIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    geo_ip_match: swsSecurityProfileSecurityRuleRuleConditionConditionSourceIpGeoIpMatchToTerraform(struct!.geoIpMatch),
    geo_ip_not_match: swsSecurityProfileSecurityRuleRuleConditionConditionSourceIpGeoIpNotMatchToTerraform(struct!.geoIpNotMatch),
    ip_ranges_match: swsSecurityProfileSecurityRuleRuleConditionConditionSourceIpIpRangesMatchToTerraform(struct!.ipRangesMatch),
    ip_ranges_not_match: swsSecurityProfileSecurityRuleRuleConditionConditionSourceIpIpRangesNotMatchToTerraform(struct!.ipRangesNotMatch),
  }
}


export function swsSecurityProfileSecurityRuleRuleConditionConditionSourceIpToHclTerraform(struct?: SwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpOutputReference | SwsSecurityProfileSecurityRuleRuleConditionConditionSourceIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    geo_ip_match: {
      value: swsSecurityProfileSecurityRuleRuleConditionConditionSourceIpGeoIpMatchToHclTerraform(struct!.geoIpMatch),
      isBlock: true,
      type: "list",
      storageClassType: "SwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpGeoIpMatchList",
    },
    geo_ip_not_match: {
      value: swsSecurityProfileSecurityRuleRuleConditionConditionSourceIpGeoIpNotMatchToHclTerraform(struct!.geoIpNotMatch),
      isBlock: true,
      type: "list",
      storageClassType: "SwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpGeoIpNotMatchList",
    },
    ip_ranges_match: {
      value: swsSecurityProfileSecurityRuleRuleConditionConditionSourceIpIpRangesMatchToHclTerraform(struct!.ipRangesMatch),
      isBlock: true,
      type: "list",
      storageClassType: "SwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpIpRangesMatchList",
    },
    ip_ranges_not_match: {
      value: swsSecurityProfileSecurityRuleRuleConditionConditionSourceIpIpRangesNotMatchToHclTerraform(struct!.ipRangesNotMatch),
      isBlock: true,
      type: "list",
      storageClassType: "SwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpIpRangesNotMatchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwsSecurityProfileSecurityRuleRuleConditionConditionSourceIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._geoIpMatch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoIpMatch = this._geoIpMatch?.internalValue;
    }
    if (this._geoIpNotMatch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoIpNotMatch = this._geoIpNotMatch?.internalValue;
    }
    if (this._ipRangesMatch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRangesMatch = this._ipRangesMatch?.internalValue;
    }
    if (this._ipRangesNotMatch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRangesNotMatch = this._ipRangesNotMatch?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwsSecurityProfileSecurityRuleRuleConditionConditionSourceIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._geoIpMatch.internalValue = undefined;
      this._geoIpNotMatch.internalValue = undefined;
      this._ipRangesMatch.internalValue = undefined;
      this._ipRangesNotMatch.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._geoIpMatch.internalValue = value.geoIpMatch;
      this._geoIpNotMatch.internalValue = value.geoIpNotMatch;
      this._ipRangesMatch.internalValue = value.ipRangesMatch;
      this._ipRangesNotMatch.internalValue = value.ipRangesNotMatch;
    }
  }

  // geo_ip_match - computed: false, optional: true, required: false
  private _geoIpMatch = new SwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpGeoIpMatchOutputReference(this, "geo_ip_match");
  public get geoIpMatch() {
    return this._geoIpMatch;
  }
  public putGeoIpMatch(value: SwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpGeoIpMatch) {
    this._geoIpMatch.internalValue = value;
  }
  public resetGeoIpMatch() {
    this._geoIpMatch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoIpMatchInput() {
    return this._geoIpMatch.internalValue;
  }

  // geo_ip_not_match - computed: false, optional: true, required: false
  private _geoIpNotMatch = new SwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpGeoIpNotMatchOutputReference(this, "geo_ip_not_match");
  public get geoIpNotMatch() {
    return this._geoIpNotMatch;
  }
  public putGeoIpNotMatch(value: SwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpGeoIpNotMatch) {
    this._geoIpNotMatch.internalValue = value;
  }
  public resetGeoIpNotMatch() {
    this._geoIpNotMatch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoIpNotMatchInput() {
    return this._geoIpNotMatch.internalValue;
  }

  // ip_ranges_match - computed: false, optional: true, required: false
  private _ipRangesMatch = new SwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpIpRangesMatchOutputReference(this, "ip_ranges_match");
  public get ipRangesMatch() {
    return this._ipRangesMatch;
  }
  public putIpRangesMatch(value: SwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpIpRangesMatch) {
    this._ipRangesMatch.internalValue = value;
  }
  public resetIpRangesMatch() {
    this._ipRangesMatch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRangesMatchInput() {
    return this._ipRangesMatch.internalValue;
  }

  // ip_ranges_not_match - computed: false, optional: true, required: false
  private _ipRangesNotMatch = new SwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpIpRangesNotMatchOutputReference(this, "ip_ranges_not_match");
  public get ipRangesNotMatch() {
    return this._ipRangesNotMatch;
  }
  public putIpRangesNotMatch(value: SwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpIpRangesNotMatch) {
    this._ipRangesNotMatch.internalValue = value;
  }
  public resetIpRangesNotMatch() {
    this._ipRangesNotMatch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRangesNotMatchInput() {
    return this._ipRangesNotMatch.internalValue;
  }
}
export interface SwsSecurityProfileSecurityRuleRuleConditionCondition {
  /**
  * authority block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#authority SwsSecurityProfile#authority}
  */
  readonly authority?: SwsSecurityProfileSecurityRuleRuleConditionConditionAuthority;
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#headers SwsSecurityProfile#headers}
  */
  readonly headers?: SwsSecurityProfileSecurityRuleRuleConditionConditionHeaders[] | cdktf.IResolvable;
  /**
  * http_method block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#http_method SwsSecurityProfile#http_method}
  */
  readonly httpMethod?: SwsSecurityProfileSecurityRuleRuleConditionConditionHttpMethod;
  /**
  * request_uri block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#request_uri SwsSecurityProfile#request_uri}
  */
  readonly requestUri?: SwsSecurityProfileSecurityRuleRuleConditionConditionRequestUri;
  /**
  * source_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#source_ip SwsSecurityProfile#source_ip}
  */
  readonly sourceIp?: SwsSecurityProfileSecurityRuleRuleConditionConditionSourceIp;
}

export function swsSecurityProfileSecurityRuleRuleConditionConditionToTerraform(struct?: SwsSecurityProfileSecurityRuleRuleConditionConditionOutputReference | SwsSecurityProfileSecurityRuleRuleConditionCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authority: swsSecurityProfileSecurityRuleRuleConditionConditionAuthorityToTerraform(struct!.authority),
    headers: cdktf.listMapper(swsSecurityProfileSecurityRuleRuleConditionConditionHeadersToTerraform, true)(struct!.headers),
    http_method: swsSecurityProfileSecurityRuleRuleConditionConditionHttpMethodToTerraform(struct!.httpMethod),
    request_uri: swsSecurityProfileSecurityRuleRuleConditionConditionRequestUriToTerraform(struct!.requestUri),
    source_ip: swsSecurityProfileSecurityRuleRuleConditionConditionSourceIpToTerraform(struct!.sourceIp),
  }
}


export function swsSecurityProfileSecurityRuleRuleConditionConditionToHclTerraform(struct?: SwsSecurityProfileSecurityRuleRuleConditionConditionOutputReference | SwsSecurityProfileSecurityRuleRuleConditionCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authority: {
      value: swsSecurityProfileSecurityRuleRuleConditionConditionAuthorityToHclTerraform(struct!.authority),
      isBlock: true,
      type: "list",
      storageClassType: "SwsSecurityProfileSecurityRuleRuleConditionConditionAuthorityList",
    },
    headers: {
      value: cdktf.listMapperHcl(swsSecurityProfileSecurityRuleRuleConditionConditionHeadersToHclTerraform, true)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "SwsSecurityProfileSecurityRuleRuleConditionConditionHeadersList",
    },
    http_method: {
      value: swsSecurityProfileSecurityRuleRuleConditionConditionHttpMethodToHclTerraform(struct!.httpMethod),
      isBlock: true,
      type: "list",
      storageClassType: "SwsSecurityProfileSecurityRuleRuleConditionConditionHttpMethodList",
    },
    request_uri: {
      value: swsSecurityProfileSecurityRuleRuleConditionConditionRequestUriToHclTerraform(struct!.requestUri),
      isBlock: true,
      type: "list",
      storageClassType: "SwsSecurityProfileSecurityRuleRuleConditionConditionRequestUriList",
    },
    source_ip: {
      value: swsSecurityProfileSecurityRuleRuleConditionConditionSourceIpToHclTerraform(struct!.sourceIp),
      isBlock: true,
      type: "list",
      storageClassType: "SwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwsSecurityProfileSecurityRuleRuleConditionConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwsSecurityProfileSecurityRuleRuleConditionCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authority?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authority = this._authority?.internalValue;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._httpMethod?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpMethod = this._httpMethod?.internalValue;
    }
    if (this._requestUri?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestUri = this._requestUri?.internalValue;
    }
    if (this._sourceIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIp = this._sourceIp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwsSecurityProfileSecurityRuleRuleConditionCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authority.internalValue = undefined;
      this._headers.internalValue = undefined;
      this._httpMethod.internalValue = undefined;
      this._requestUri.internalValue = undefined;
      this._sourceIp.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authority.internalValue = value.authority;
      this._headers.internalValue = value.headers;
      this._httpMethod.internalValue = value.httpMethod;
      this._requestUri.internalValue = value.requestUri;
      this._sourceIp.internalValue = value.sourceIp;
    }
  }

  // authority - computed: false, optional: true, required: false
  private _authority = new SwsSecurityProfileSecurityRuleRuleConditionConditionAuthorityOutputReference(this, "authority");
  public get authority() {
    return this._authority;
  }
  public putAuthority(value: SwsSecurityProfileSecurityRuleRuleConditionConditionAuthority) {
    this._authority.internalValue = value;
  }
  public resetAuthority() {
    this._authority.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorityInput() {
    return this._authority.internalValue;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new SwsSecurityProfileSecurityRuleRuleConditionConditionHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: SwsSecurityProfileSecurityRuleRuleConditionConditionHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // http_method - computed: false, optional: true, required: false
  private _httpMethod = new SwsSecurityProfileSecurityRuleRuleConditionConditionHttpMethodOutputReference(this, "http_method");
  public get httpMethod() {
    return this._httpMethod;
  }
  public putHttpMethod(value: SwsSecurityProfileSecurityRuleRuleConditionConditionHttpMethod) {
    this._httpMethod.internalValue = value;
  }
  public resetHttpMethod() {
    this._httpMethod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMethodInput() {
    return this._httpMethod.internalValue;
  }

  // request_uri - computed: false, optional: true, required: false
  private _requestUri = new SwsSecurityProfileSecurityRuleRuleConditionConditionRequestUriOutputReference(this, "request_uri");
  public get requestUri() {
    return this._requestUri;
  }
  public putRequestUri(value: SwsSecurityProfileSecurityRuleRuleConditionConditionRequestUri) {
    this._requestUri.internalValue = value;
  }
  public resetRequestUri() {
    this._requestUri.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestUriInput() {
    return this._requestUri.internalValue;
  }

  // source_ip - computed: false, optional: true, required: false
  private _sourceIp = new SwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpOutputReference(this, "source_ip");
  public get sourceIp() {
    return this._sourceIp;
  }
  public putSourceIp(value: SwsSecurityProfileSecurityRuleRuleConditionConditionSourceIp) {
    this._sourceIp.internalValue = value;
  }
  public resetSourceIp() {
    this._sourceIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpInput() {
    return this._sourceIp.internalValue;
  }
}
export interface SwsSecurityProfileSecurityRuleRuleCondition {
  /**
  * Action to perform if this rule matched. Possible values: `ALLOW` or `DENY`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#action SwsSecurityProfile#action}
  */
  readonly action?: string;
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#condition SwsSecurityProfile#condition}
  */
  readonly condition?: SwsSecurityProfileSecurityRuleRuleConditionCondition;
}

export function swsSecurityProfileSecurityRuleRuleConditionToTerraform(struct?: SwsSecurityProfileSecurityRuleRuleConditionOutputReference | SwsSecurityProfileSecurityRuleRuleCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    condition: swsSecurityProfileSecurityRuleRuleConditionConditionToTerraform(struct!.condition),
  }
}


export function swsSecurityProfileSecurityRuleRuleConditionToHclTerraform(struct?: SwsSecurityProfileSecurityRuleRuleConditionOutputReference | SwsSecurityProfileSecurityRuleRuleCondition): any {
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
    condition: {
      value: swsSecurityProfileSecurityRuleRuleConditionConditionToHclTerraform(struct!.condition),
      isBlock: true,
      type: "list",
      storageClassType: "SwsSecurityProfileSecurityRuleRuleConditionConditionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwsSecurityProfileSecurityRuleRuleConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwsSecurityProfileSecurityRuleRuleCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwsSecurityProfileSecurityRuleRuleCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._condition.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._condition.internalValue = value.condition;
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

  // condition - computed: false, optional: true, required: false
  private _condition = new SwsSecurityProfileSecurityRuleRuleConditionConditionOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }
  public putCondition(value: SwsSecurityProfileSecurityRuleRuleConditionCondition) {
    this._condition.internalValue = value;
  }
  public resetCondition() {
    this._condition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }
}
export interface SwsSecurityProfileSecurityRuleSmartProtectionConditionAuthorityAuthorities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#exact_match SwsSecurityProfile#exact_match}
  */
  readonly exactMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#exact_not_match SwsSecurityProfile#exact_not_match}
  */
  readonly exactNotMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#pire_regex_match SwsSecurityProfile#pire_regex_match}
  */
  readonly pireRegexMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#pire_regex_not_match SwsSecurityProfile#pire_regex_not_match}
  */
  readonly pireRegexNotMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#prefix_match SwsSecurityProfile#prefix_match}
  */
  readonly prefixMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#prefix_not_match SwsSecurityProfile#prefix_not_match}
  */
  readonly prefixNotMatch?: string;
}

export function swsSecurityProfileSecurityRuleSmartProtectionConditionAuthorityAuthoritiesToTerraform(struct?: SwsSecurityProfileSecurityRuleSmartProtectionConditionAuthorityAuthorities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_match: cdktf.stringToTerraform(struct!.exactMatch),
    exact_not_match: cdktf.stringToTerraform(struct!.exactNotMatch),
    pire_regex_match: cdktf.stringToTerraform(struct!.pireRegexMatch),
    pire_regex_not_match: cdktf.stringToTerraform(struct!.pireRegexNotMatch),
    prefix_match: cdktf.stringToTerraform(struct!.prefixMatch),
    prefix_not_match: cdktf.stringToTerraform(struct!.prefixNotMatch),
  }
}


export function swsSecurityProfileSecurityRuleSmartProtectionConditionAuthorityAuthoritiesToHclTerraform(struct?: SwsSecurityProfileSecurityRuleSmartProtectionConditionAuthorityAuthorities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_match: {
      value: cdktf.stringToHclTerraform(struct!.exactMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exact_not_match: {
      value: cdktf.stringToHclTerraform(struct!.exactNotMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pire_regex_match: {
      value: cdktf.stringToHclTerraform(struct!.pireRegexMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pire_regex_not_match: {
      value: cdktf.stringToHclTerraform(struct!.pireRegexNotMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_match: {
      value: cdktf.stringToHclTerraform(struct!.prefixMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_not_match: {
      value: cdktf.stringToHclTerraform(struct!.prefixNotMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwsSecurityProfileSecurityRuleSmartProtectionConditionAuthorityAuthoritiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwsSecurityProfileSecurityRuleSmartProtectionConditionAuthorityAuthorities | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactMatch = this._exactMatch;
    }
    if (this._exactNotMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactNotMatch = this._exactNotMatch;
    }
    if (this._pireRegexMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.pireRegexMatch = this._pireRegexMatch;
    }
    if (this._pireRegexNotMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.pireRegexNotMatch = this._pireRegexNotMatch;
    }
    if (this._prefixMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixMatch = this._prefixMatch;
    }
    if (this._prefixNotMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixNotMatch = this._prefixNotMatch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwsSecurityProfileSecurityRuleSmartProtectionConditionAuthorityAuthorities | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exactMatch = undefined;
      this._exactNotMatch = undefined;
      this._pireRegexMatch = undefined;
      this._pireRegexNotMatch = undefined;
      this._prefixMatch = undefined;
      this._prefixNotMatch = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exactMatch = value.exactMatch;
      this._exactNotMatch = value.exactNotMatch;
      this._pireRegexMatch = value.pireRegexMatch;
      this._pireRegexNotMatch = value.pireRegexNotMatch;
      this._prefixMatch = value.prefixMatch;
      this._prefixNotMatch = value.prefixNotMatch;
    }
  }

  // exact_match - computed: false, optional: true, required: false
  private _exactMatch?: string; 
  public get exactMatch() {
    return this.getStringAttribute('exact_match');
  }
  public set exactMatch(value: string) {
    this._exactMatch = value;
  }
  public resetExactMatch() {
    this._exactMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactMatchInput() {
    return this._exactMatch;
  }

  // exact_not_match - computed: false, optional: true, required: false
  private _exactNotMatch?: string; 
  public get exactNotMatch() {
    return this.getStringAttribute('exact_not_match');
  }
  public set exactNotMatch(value: string) {
    this._exactNotMatch = value;
  }
  public resetExactNotMatch() {
    this._exactNotMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactNotMatchInput() {
    return this._exactNotMatch;
  }

  // pire_regex_match - computed: false, optional: true, required: false
  private _pireRegexMatch?: string; 
  public get pireRegexMatch() {
    return this.getStringAttribute('pire_regex_match');
  }
  public set pireRegexMatch(value: string) {
    this._pireRegexMatch = value;
  }
  public resetPireRegexMatch() {
    this._pireRegexMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pireRegexMatchInput() {
    return this._pireRegexMatch;
  }

  // pire_regex_not_match - computed: false, optional: true, required: false
  private _pireRegexNotMatch?: string; 
  public get pireRegexNotMatch() {
    return this.getStringAttribute('pire_regex_not_match');
  }
  public set pireRegexNotMatch(value: string) {
    this._pireRegexNotMatch = value;
  }
  public resetPireRegexNotMatch() {
    this._pireRegexNotMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pireRegexNotMatchInput() {
    return this._pireRegexNotMatch;
  }

  // prefix_match - computed: false, optional: true, required: false
  private _prefixMatch?: string; 
  public get prefixMatch() {
    return this.getStringAttribute('prefix_match');
  }
  public set prefixMatch(value: string) {
    this._prefixMatch = value;
  }
  public resetPrefixMatch() {
    this._prefixMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixMatchInput() {
    return this._prefixMatch;
  }

  // prefix_not_match - computed: false, optional: true, required: false
  private _prefixNotMatch?: string; 
  public get prefixNotMatch() {
    return this.getStringAttribute('prefix_not_match');
  }
  public set prefixNotMatch(value: string) {
    this._prefixNotMatch = value;
  }
  public resetPrefixNotMatch() {
    this._prefixNotMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixNotMatchInput() {
    return this._prefixNotMatch;
  }
}

export class SwsSecurityProfileSecurityRuleSmartProtectionConditionAuthorityAuthoritiesList extends cdktf.ComplexList {
  public internalValue? : SwsSecurityProfileSecurityRuleSmartProtectionConditionAuthorityAuthorities[] | cdktf.IResolvable

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
  public get(index: number): SwsSecurityProfileSecurityRuleSmartProtectionConditionAuthorityAuthoritiesOutputReference {
    return new SwsSecurityProfileSecurityRuleSmartProtectionConditionAuthorityAuthoritiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwsSecurityProfileSecurityRuleSmartProtectionConditionAuthority {
  /**
  * authorities block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#authorities SwsSecurityProfile#authorities}
  */
  readonly authorities?: SwsSecurityProfileSecurityRuleSmartProtectionConditionAuthorityAuthorities[] | cdktf.IResolvable;
}

export function swsSecurityProfileSecurityRuleSmartProtectionConditionAuthorityToTerraform(struct?: SwsSecurityProfileSecurityRuleSmartProtectionConditionAuthorityOutputReference | SwsSecurityProfileSecurityRuleSmartProtectionConditionAuthority): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authorities: cdktf.listMapper(swsSecurityProfileSecurityRuleSmartProtectionConditionAuthorityAuthoritiesToTerraform, true)(struct!.authorities),
  }
}


export function swsSecurityProfileSecurityRuleSmartProtectionConditionAuthorityToHclTerraform(struct?: SwsSecurityProfileSecurityRuleSmartProtectionConditionAuthorityOutputReference | SwsSecurityProfileSecurityRuleSmartProtectionConditionAuthority): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authorities: {
      value: cdktf.listMapperHcl(swsSecurityProfileSecurityRuleSmartProtectionConditionAuthorityAuthoritiesToHclTerraform, true)(struct!.authorities),
      isBlock: true,
      type: "list",
      storageClassType: "SwsSecurityProfileSecurityRuleSmartProtectionConditionAuthorityAuthoritiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwsSecurityProfileSecurityRuleSmartProtectionConditionAuthorityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwsSecurityProfileSecurityRuleSmartProtectionConditionAuthority | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorities = this._authorities?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwsSecurityProfileSecurityRuleSmartProtectionConditionAuthority | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authorities.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authorities.internalValue = value.authorities;
    }
  }

  // authorities - computed: false, optional: true, required: false
  private _authorities = new SwsSecurityProfileSecurityRuleSmartProtectionConditionAuthorityAuthoritiesList(this, "authorities", false);
  public get authorities() {
    return this._authorities;
  }
  public putAuthorities(value: SwsSecurityProfileSecurityRuleSmartProtectionConditionAuthorityAuthorities[] | cdktf.IResolvable) {
    this._authorities.internalValue = value;
  }
  public resetAuthorities() {
    this._authorities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authoritiesInput() {
    return this._authorities.internalValue;
  }
}
export interface SwsSecurityProfileSecurityRuleSmartProtectionConditionHeadersValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#exact_match SwsSecurityProfile#exact_match}
  */
  readonly exactMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#exact_not_match SwsSecurityProfile#exact_not_match}
  */
  readonly exactNotMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#pire_regex_match SwsSecurityProfile#pire_regex_match}
  */
  readonly pireRegexMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#pire_regex_not_match SwsSecurityProfile#pire_regex_not_match}
  */
  readonly pireRegexNotMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#prefix_match SwsSecurityProfile#prefix_match}
  */
  readonly prefixMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#prefix_not_match SwsSecurityProfile#prefix_not_match}
  */
  readonly prefixNotMatch?: string;
}

export function swsSecurityProfileSecurityRuleSmartProtectionConditionHeadersValueToTerraform(struct?: SwsSecurityProfileSecurityRuleSmartProtectionConditionHeadersValueOutputReference | SwsSecurityProfileSecurityRuleSmartProtectionConditionHeadersValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_match: cdktf.stringToTerraform(struct!.exactMatch),
    exact_not_match: cdktf.stringToTerraform(struct!.exactNotMatch),
    pire_regex_match: cdktf.stringToTerraform(struct!.pireRegexMatch),
    pire_regex_not_match: cdktf.stringToTerraform(struct!.pireRegexNotMatch),
    prefix_match: cdktf.stringToTerraform(struct!.prefixMatch),
    prefix_not_match: cdktf.stringToTerraform(struct!.prefixNotMatch),
  }
}


export function swsSecurityProfileSecurityRuleSmartProtectionConditionHeadersValueToHclTerraform(struct?: SwsSecurityProfileSecurityRuleSmartProtectionConditionHeadersValueOutputReference | SwsSecurityProfileSecurityRuleSmartProtectionConditionHeadersValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_match: {
      value: cdktf.stringToHclTerraform(struct!.exactMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exact_not_match: {
      value: cdktf.stringToHclTerraform(struct!.exactNotMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pire_regex_match: {
      value: cdktf.stringToHclTerraform(struct!.pireRegexMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pire_regex_not_match: {
      value: cdktf.stringToHclTerraform(struct!.pireRegexNotMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_match: {
      value: cdktf.stringToHclTerraform(struct!.prefixMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_not_match: {
      value: cdktf.stringToHclTerraform(struct!.prefixNotMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwsSecurityProfileSecurityRuleSmartProtectionConditionHeadersValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwsSecurityProfileSecurityRuleSmartProtectionConditionHeadersValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactMatch = this._exactMatch;
    }
    if (this._exactNotMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactNotMatch = this._exactNotMatch;
    }
    if (this._pireRegexMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.pireRegexMatch = this._pireRegexMatch;
    }
    if (this._pireRegexNotMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.pireRegexNotMatch = this._pireRegexNotMatch;
    }
    if (this._prefixMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixMatch = this._prefixMatch;
    }
    if (this._prefixNotMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixNotMatch = this._prefixNotMatch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwsSecurityProfileSecurityRuleSmartProtectionConditionHeadersValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactMatch = undefined;
      this._exactNotMatch = undefined;
      this._pireRegexMatch = undefined;
      this._pireRegexNotMatch = undefined;
      this._prefixMatch = undefined;
      this._prefixNotMatch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactMatch = value.exactMatch;
      this._exactNotMatch = value.exactNotMatch;
      this._pireRegexMatch = value.pireRegexMatch;
      this._pireRegexNotMatch = value.pireRegexNotMatch;
      this._prefixMatch = value.prefixMatch;
      this._prefixNotMatch = value.prefixNotMatch;
    }
  }

  // exact_match - computed: false, optional: true, required: false
  private _exactMatch?: string; 
  public get exactMatch() {
    return this.getStringAttribute('exact_match');
  }
  public set exactMatch(value: string) {
    this._exactMatch = value;
  }
  public resetExactMatch() {
    this._exactMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactMatchInput() {
    return this._exactMatch;
  }

  // exact_not_match - computed: false, optional: true, required: false
  private _exactNotMatch?: string; 
  public get exactNotMatch() {
    return this.getStringAttribute('exact_not_match');
  }
  public set exactNotMatch(value: string) {
    this._exactNotMatch = value;
  }
  public resetExactNotMatch() {
    this._exactNotMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactNotMatchInput() {
    return this._exactNotMatch;
  }

  // pire_regex_match - computed: false, optional: true, required: false
  private _pireRegexMatch?: string; 
  public get pireRegexMatch() {
    return this.getStringAttribute('pire_regex_match');
  }
  public set pireRegexMatch(value: string) {
    this._pireRegexMatch = value;
  }
  public resetPireRegexMatch() {
    this._pireRegexMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pireRegexMatchInput() {
    return this._pireRegexMatch;
  }

  // pire_regex_not_match - computed: false, optional: true, required: false
  private _pireRegexNotMatch?: string; 
  public get pireRegexNotMatch() {
    return this.getStringAttribute('pire_regex_not_match');
  }
  public set pireRegexNotMatch(value: string) {
    this._pireRegexNotMatch = value;
  }
  public resetPireRegexNotMatch() {
    this._pireRegexNotMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pireRegexNotMatchInput() {
    return this._pireRegexNotMatch;
  }

  // prefix_match - computed: false, optional: true, required: false
  private _prefixMatch?: string; 
  public get prefixMatch() {
    return this.getStringAttribute('prefix_match');
  }
  public set prefixMatch(value: string) {
    this._prefixMatch = value;
  }
  public resetPrefixMatch() {
    this._prefixMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixMatchInput() {
    return this._prefixMatch;
  }

  // prefix_not_match - computed: false, optional: true, required: false
  private _prefixNotMatch?: string; 
  public get prefixNotMatch() {
    return this.getStringAttribute('prefix_not_match');
  }
  public set prefixNotMatch(value: string) {
    this._prefixNotMatch = value;
  }
  public resetPrefixNotMatch() {
    this._prefixNotMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixNotMatchInput() {
    return this._prefixNotMatch;
  }
}
export interface SwsSecurityProfileSecurityRuleSmartProtectionConditionHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#name SwsSecurityProfile#name}
  */
  readonly name?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#value SwsSecurityProfile#value}
  */
  readonly value: SwsSecurityProfileSecurityRuleSmartProtectionConditionHeadersValue;
}

export function swsSecurityProfileSecurityRuleSmartProtectionConditionHeadersToTerraform(struct?: SwsSecurityProfileSecurityRuleSmartProtectionConditionHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: swsSecurityProfileSecurityRuleSmartProtectionConditionHeadersValueToTerraform(struct!.value),
  }
}


export function swsSecurityProfileSecurityRuleSmartProtectionConditionHeadersToHclTerraform(struct?: SwsSecurityProfileSecurityRuleSmartProtectionConditionHeaders | cdktf.IResolvable): any {
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
    value: {
      value: swsSecurityProfileSecurityRuleSmartProtectionConditionHeadersValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "SwsSecurityProfileSecurityRuleSmartProtectionConditionHeadersValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwsSecurityProfileSecurityRuleSmartProtectionConditionHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwsSecurityProfileSecurityRuleSmartProtectionConditionHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwsSecurityProfileSecurityRuleSmartProtectionConditionHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value.internalValue = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value = new SwsSecurityProfileSecurityRuleSmartProtectionConditionHeadersValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: SwsSecurityProfileSecurityRuleSmartProtectionConditionHeadersValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class SwsSecurityProfileSecurityRuleSmartProtectionConditionHeadersList extends cdktf.ComplexList {
  public internalValue? : SwsSecurityProfileSecurityRuleSmartProtectionConditionHeaders[] | cdktf.IResolvable

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
  public get(index: number): SwsSecurityProfileSecurityRuleSmartProtectionConditionHeadersOutputReference {
    return new SwsSecurityProfileSecurityRuleSmartProtectionConditionHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwsSecurityProfileSecurityRuleSmartProtectionConditionHttpMethodHttpMethods {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#exact_match SwsSecurityProfile#exact_match}
  */
  readonly exactMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#exact_not_match SwsSecurityProfile#exact_not_match}
  */
  readonly exactNotMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#pire_regex_match SwsSecurityProfile#pire_regex_match}
  */
  readonly pireRegexMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#pire_regex_not_match SwsSecurityProfile#pire_regex_not_match}
  */
  readonly pireRegexNotMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#prefix_match SwsSecurityProfile#prefix_match}
  */
  readonly prefixMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#prefix_not_match SwsSecurityProfile#prefix_not_match}
  */
  readonly prefixNotMatch?: string;
}

export function swsSecurityProfileSecurityRuleSmartProtectionConditionHttpMethodHttpMethodsToTerraform(struct?: SwsSecurityProfileSecurityRuleSmartProtectionConditionHttpMethodHttpMethods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_match: cdktf.stringToTerraform(struct!.exactMatch),
    exact_not_match: cdktf.stringToTerraform(struct!.exactNotMatch),
    pire_regex_match: cdktf.stringToTerraform(struct!.pireRegexMatch),
    pire_regex_not_match: cdktf.stringToTerraform(struct!.pireRegexNotMatch),
    prefix_match: cdktf.stringToTerraform(struct!.prefixMatch),
    prefix_not_match: cdktf.stringToTerraform(struct!.prefixNotMatch),
  }
}


export function swsSecurityProfileSecurityRuleSmartProtectionConditionHttpMethodHttpMethodsToHclTerraform(struct?: SwsSecurityProfileSecurityRuleSmartProtectionConditionHttpMethodHttpMethods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_match: {
      value: cdktf.stringToHclTerraform(struct!.exactMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exact_not_match: {
      value: cdktf.stringToHclTerraform(struct!.exactNotMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pire_regex_match: {
      value: cdktf.stringToHclTerraform(struct!.pireRegexMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pire_regex_not_match: {
      value: cdktf.stringToHclTerraform(struct!.pireRegexNotMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_match: {
      value: cdktf.stringToHclTerraform(struct!.prefixMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_not_match: {
      value: cdktf.stringToHclTerraform(struct!.prefixNotMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwsSecurityProfileSecurityRuleSmartProtectionConditionHttpMethodHttpMethodsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwsSecurityProfileSecurityRuleSmartProtectionConditionHttpMethodHttpMethods | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactMatch = this._exactMatch;
    }
    if (this._exactNotMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactNotMatch = this._exactNotMatch;
    }
    if (this._pireRegexMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.pireRegexMatch = this._pireRegexMatch;
    }
    if (this._pireRegexNotMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.pireRegexNotMatch = this._pireRegexNotMatch;
    }
    if (this._prefixMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixMatch = this._prefixMatch;
    }
    if (this._prefixNotMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixNotMatch = this._prefixNotMatch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwsSecurityProfileSecurityRuleSmartProtectionConditionHttpMethodHttpMethods | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exactMatch = undefined;
      this._exactNotMatch = undefined;
      this._pireRegexMatch = undefined;
      this._pireRegexNotMatch = undefined;
      this._prefixMatch = undefined;
      this._prefixNotMatch = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exactMatch = value.exactMatch;
      this._exactNotMatch = value.exactNotMatch;
      this._pireRegexMatch = value.pireRegexMatch;
      this._pireRegexNotMatch = value.pireRegexNotMatch;
      this._prefixMatch = value.prefixMatch;
      this._prefixNotMatch = value.prefixNotMatch;
    }
  }

  // exact_match - computed: false, optional: true, required: false
  private _exactMatch?: string; 
  public get exactMatch() {
    return this.getStringAttribute('exact_match');
  }
  public set exactMatch(value: string) {
    this._exactMatch = value;
  }
  public resetExactMatch() {
    this._exactMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactMatchInput() {
    return this._exactMatch;
  }

  // exact_not_match - computed: false, optional: true, required: false
  private _exactNotMatch?: string; 
  public get exactNotMatch() {
    return this.getStringAttribute('exact_not_match');
  }
  public set exactNotMatch(value: string) {
    this._exactNotMatch = value;
  }
  public resetExactNotMatch() {
    this._exactNotMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactNotMatchInput() {
    return this._exactNotMatch;
  }

  // pire_regex_match - computed: false, optional: true, required: false
  private _pireRegexMatch?: string; 
  public get pireRegexMatch() {
    return this.getStringAttribute('pire_regex_match');
  }
  public set pireRegexMatch(value: string) {
    this._pireRegexMatch = value;
  }
  public resetPireRegexMatch() {
    this._pireRegexMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pireRegexMatchInput() {
    return this._pireRegexMatch;
  }

  // pire_regex_not_match - computed: false, optional: true, required: false
  private _pireRegexNotMatch?: string; 
  public get pireRegexNotMatch() {
    return this.getStringAttribute('pire_regex_not_match');
  }
  public set pireRegexNotMatch(value: string) {
    this._pireRegexNotMatch = value;
  }
  public resetPireRegexNotMatch() {
    this._pireRegexNotMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pireRegexNotMatchInput() {
    return this._pireRegexNotMatch;
  }

  // prefix_match - computed: false, optional: true, required: false
  private _prefixMatch?: string; 
  public get prefixMatch() {
    return this.getStringAttribute('prefix_match');
  }
  public set prefixMatch(value: string) {
    this._prefixMatch = value;
  }
  public resetPrefixMatch() {
    this._prefixMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixMatchInput() {
    return this._prefixMatch;
  }

  // prefix_not_match - computed: false, optional: true, required: false
  private _prefixNotMatch?: string; 
  public get prefixNotMatch() {
    return this.getStringAttribute('prefix_not_match');
  }
  public set prefixNotMatch(value: string) {
    this._prefixNotMatch = value;
  }
  public resetPrefixNotMatch() {
    this._prefixNotMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixNotMatchInput() {
    return this._prefixNotMatch;
  }
}

export class SwsSecurityProfileSecurityRuleSmartProtectionConditionHttpMethodHttpMethodsList extends cdktf.ComplexList {
  public internalValue? : SwsSecurityProfileSecurityRuleSmartProtectionConditionHttpMethodHttpMethods[] | cdktf.IResolvable

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
  public get(index: number): SwsSecurityProfileSecurityRuleSmartProtectionConditionHttpMethodHttpMethodsOutputReference {
    return new SwsSecurityProfileSecurityRuleSmartProtectionConditionHttpMethodHttpMethodsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwsSecurityProfileSecurityRuleSmartProtectionConditionHttpMethod {
  /**
  * http_methods block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#http_methods SwsSecurityProfile#http_methods}
  */
  readonly httpMethods?: SwsSecurityProfileSecurityRuleSmartProtectionConditionHttpMethodHttpMethods[] | cdktf.IResolvable;
}

export function swsSecurityProfileSecurityRuleSmartProtectionConditionHttpMethodToTerraform(struct?: SwsSecurityProfileSecurityRuleSmartProtectionConditionHttpMethodOutputReference | SwsSecurityProfileSecurityRuleSmartProtectionConditionHttpMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_methods: cdktf.listMapper(swsSecurityProfileSecurityRuleSmartProtectionConditionHttpMethodHttpMethodsToTerraform, true)(struct!.httpMethods),
  }
}


export function swsSecurityProfileSecurityRuleSmartProtectionConditionHttpMethodToHclTerraform(struct?: SwsSecurityProfileSecurityRuleSmartProtectionConditionHttpMethodOutputReference | SwsSecurityProfileSecurityRuleSmartProtectionConditionHttpMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_methods: {
      value: cdktf.listMapperHcl(swsSecurityProfileSecurityRuleSmartProtectionConditionHttpMethodHttpMethodsToHclTerraform, true)(struct!.httpMethods),
      isBlock: true,
      type: "list",
      storageClassType: "SwsSecurityProfileSecurityRuleSmartProtectionConditionHttpMethodHttpMethodsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwsSecurityProfileSecurityRuleSmartProtectionConditionHttpMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwsSecurityProfileSecurityRuleSmartProtectionConditionHttpMethod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpMethods?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpMethods = this._httpMethods?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwsSecurityProfileSecurityRuleSmartProtectionConditionHttpMethod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._httpMethods.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._httpMethods.internalValue = value.httpMethods;
    }
  }

  // http_methods - computed: false, optional: true, required: false
  private _httpMethods = new SwsSecurityProfileSecurityRuleSmartProtectionConditionHttpMethodHttpMethodsList(this, "http_methods", false);
  public get httpMethods() {
    return this._httpMethods;
  }
  public putHttpMethods(value: SwsSecurityProfileSecurityRuleSmartProtectionConditionHttpMethodHttpMethods[] | cdktf.IResolvable) {
    this._httpMethods.internalValue = value;
  }
  public resetHttpMethods() {
    this._httpMethods.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMethodsInput() {
    return this._httpMethods.internalValue;
  }
}
export interface SwsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriPath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#exact_match SwsSecurityProfile#exact_match}
  */
  readonly exactMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#exact_not_match SwsSecurityProfile#exact_not_match}
  */
  readonly exactNotMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#pire_regex_match SwsSecurityProfile#pire_regex_match}
  */
  readonly pireRegexMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#pire_regex_not_match SwsSecurityProfile#pire_regex_not_match}
  */
  readonly pireRegexNotMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#prefix_match SwsSecurityProfile#prefix_match}
  */
  readonly prefixMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#prefix_not_match SwsSecurityProfile#prefix_not_match}
  */
  readonly prefixNotMatch?: string;
}

export function swsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriPathToTerraform(struct?: SwsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriPathOutputReference | SwsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_match: cdktf.stringToTerraform(struct!.exactMatch),
    exact_not_match: cdktf.stringToTerraform(struct!.exactNotMatch),
    pire_regex_match: cdktf.stringToTerraform(struct!.pireRegexMatch),
    pire_regex_not_match: cdktf.stringToTerraform(struct!.pireRegexNotMatch),
    prefix_match: cdktf.stringToTerraform(struct!.prefixMatch),
    prefix_not_match: cdktf.stringToTerraform(struct!.prefixNotMatch),
  }
}


export function swsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriPathToHclTerraform(struct?: SwsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriPathOutputReference | SwsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_match: {
      value: cdktf.stringToHclTerraform(struct!.exactMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exact_not_match: {
      value: cdktf.stringToHclTerraform(struct!.exactNotMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pire_regex_match: {
      value: cdktf.stringToHclTerraform(struct!.pireRegexMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pire_regex_not_match: {
      value: cdktf.stringToHclTerraform(struct!.pireRegexNotMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_match: {
      value: cdktf.stringToHclTerraform(struct!.prefixMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_not_match: {
      value: cdktf.stringToHclTerraform(struct!.prefixNotMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactMatch = this._exactMatch;
    }
    if (this._exactNotMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactNotMatch = this._exactNotMatch;
    }
    if (this._pireRegexMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.pireRegexMatch = this._pireRegexMatch;
    }
    if (this._pireRegexNotMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.pireRegexNotMatch = this._pireRegexNotMatch;
    }
    if (this._prefixMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixMatch = this._prefixMatch;
    }
    if (this._prefixNotMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixNotMatch = this._prefixNotMatch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactMatch = undefined;
      this._exactNotMatch = undefined;
      this._pireRegexMatch = undefined;
      this._pireRegexNotMatch = undefined;
      this._prefixMatch = undefined;
      this._prefixNotMatch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactMatch = value.exactMatch;
      this._exactNotMatch = value.exactNotMatch;
      this._pireRegexMatch = value.pireRegexMatch;
      this._pireRegexNotMatch = value.pireRegexNotMatch;
      this._prefixMatch = value.prefixMatch;
      this._prefixNotMatch = value.prefixNotMatch;
    }
  }

  // exact_match - computed: false, optional: true, required: false
  private _exactMatch?: string; 
  public get exactMatch() {
    return this.getStringAttribute('exact_match');
  }
  public set exactMatch(value: string) {
    this._exactMatch = value;
  }
  public resetExactMatch() {
    this._exactMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactMatchInput() {
    return this._exactMatch;
  }

  // exact_not_match - computed: false, optional: true, required: false
  private _exactNotMatch?: string; 
  public get exactNotMatch() {
    return this.getStringAttribute('exact_not_match');
  }
  public set exactNotMatch(value: string) {
    this._exactNotMatch = value;
  }
  public resetExactNotMatch() {
    this._exactNotMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactNotMatchInput() {
    return this._exactNotMatch;
  }

  // pire_regex_match - computed: false, optional: true, required: false
  private _pireRegexMatch?: string; 
  public get pireRegexMatch() {
    return this.getStringAttribute('pire_regex_match');
  }
  public set pireRegexMatch(value: string) {
    this._pireRegexMatch = value;
  }
  public resetPireRegexMatch() {
    this._pireRegexMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pireRegexMatchInput() {
    return this._pireRegexMatch;
  }

  // pire_regex_not_match - computed: false, optional: true, required: false
  private _pireRegexNotMatch?: string; 
  public get pireRegexNotMatch() {
    return this.getStringAttribute('pire_regex_not_match');
  }
  public set pireRegexNotMatch(value: string) {
    this._pireRegexNotMatch = value;
  }
  public resetPireRegexNotMatch() {
    this._pireRegexNotMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pireRegexNotMatchInput() {
    return this._pireRegexNotMatch;
  }

  // prefix_match - computed: false, optional: true, required: false
  private _prefixMatch?: string; 
  public get prefixMatch() {
    return this.getStringAttribute('prefix_match');
  }
  public set prefixMatch(value: string) {
    this._prefixMatch = value;
  }
  public resetPrefixMatch() {
    this._prefixMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixMatchInput() {
    return this._prefixMatch;
  }

  // prefix_not_match - computed: false, optional: true, required: false
  private _prefixNotMatch?: string; 
  public get prefixNotMatch() {
    return this.getStringAttribute('prefix_not_match');
  }
  public set prefixNotMatch(value: string) {
    this._prefixNotMatch = value;
  }
  public resetPrefixNotMatch() {
    this._prefixNotMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixNotMatchInput() {
    return this._prefixNotMatch;
  }
}
export interface SwsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriQueriesValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#exact_match SwsSecurityProfile#exact_match}
  */
  readonly exactMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#exact_not_match SwsSecurityProfile#exact_not_match}
  */
  readonly exactNotMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#pire_regex_match SwsSecurityProfile#pire_regex_match}
  */
  readonly pireRegexMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#pire_regex_not_match SwsSecurityProfile#pire_regex_not_match}
  */
  readonly pireRegexNotMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#prefix_match SwsSecurityProfile#prefix_match}
  */
  readonly prefixMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#prefix_not_match SwsSecurityProfile#prefix_not_match}
  */
  readonly prefixNotMatch?: string;
}

export function swsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriQueriesValueToTerraform(struct?: SwsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriQueriesValueOutputReference | SwsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriQueriesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_match: cdktf.stringToTerraform(struct!.exactMatch),
    exact_not_match: cdktf.stringToTerraform(struct!.exactNotMatch),
    pire_regex_match: cdktf.stringToTerraform(struct!.pireRegexMatch),
    pire_regex_not_match: cdktf.stringToTerraform(struct!.pireRegexNotMatch),
    prefix_match: cdktf.stringToTerraform(struct!.prefixMatch),
    prefix_not_match: cdktf.stringToTerraform(struct!.prefixNotMatch),
  }
}


export function swsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriQueriesValueToHclTerraform(struct?: SwsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriQueriesValueOutputReference | SwsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriQueriesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_match: {
      value: cdktf.stringToHclTerraform(struct!.exactMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exact_not_match: {
      value: cdktf.stringToHclTerraform(struct!.exactNotMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pire_regex_match: {
      value: cdktf.stringToHclTerraform(struct!.pireRegexMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pire_regex_not_match: {
      value: cdktf.stringToHclTerraform(struct!.pireRegexNotMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_match: {
      value: cdktf.stringToHclTerraform(struct!.prefixMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_not_match: {
      value: cdktf.stringToHclTerraform(struct!.prefixNotMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriQueriesValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriQueriesValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactMatch = this._exactMatch;
    }
    if (this._exactNotMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactNotMatch = this._exactNotMatch;
    }
    if (this._pireRegexMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.pireRegexMatch = this._pireRegexMatch;
    }
    if (this._pireRegexNotMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.pireRegexNotMatch = this._pireRegexNotMatch;
    }
    if (this._prefixMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixMatch = this._prefixMatch;
    }
    if (this._prefixNotMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixNotMatch = this._prefixNotMatch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriQueriesValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactMatch = undefined;
      this._exactNotMatch = undefined;
      this._pireRegexMatch = undefined;
      this._pireRegexNotMatch = undefined;
      this._prefixMatch = undefined;
      this._prefixNotMatch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactMatch = value.exactMatch;
      this._exactNotMatch = value.exactNotMatch;
      this._pireRegexMatch = value.pireRegexMatch;
      this._pireRegexNotMatch = value.pireRegexNotMatch;
      this._prefixMatch = value.prefixMatch;
      this._prefixNotMatch = value.prefixNotMatch;
    }
  }

  // exact_match - computed: false, optional: true, required: false
  private _exactMatch?: string; 
  public get exactMatch() {
    return this.getStringAttribute('exact_match');
  }
  public set exactMatch(value: string) {
    this._exactMatch = value;
  }
  public resetExactMatch() {
    this._exactMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactMatchInput() {
    return this._exactMatch;
  }

  // exact_not_match - computed: false, optional: true, required: false
  private _exactNotMatch?: string; 
  public get exactNotMatch() {
    return this.getStringAttribute('exact_not_match');
  }
  public set exactNotMatch(value: string) {
    this._exactNotMatch = value;
  }
  public resetExactNotMatch() {
    this._exactNotMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactNotMatchInput() {
    return this._exactNotMatch;
  }

  // pire_regex_match - computed: false, optional: true, required: false
  private _pireRegexMatch?: string; 
  public get pireRegexMatch() {
    return this.getStringAttribute('pire_regex_match');
  }
  public set pireRegexMatch(value: string) {
    this._pireRegexMatch = value;
  }
  public resetPireRegexMatch() {
    this._pireRegexMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pireRegexMatchInput() {
    return this._pireRegexMatch;
  }

  // pire_regex_not_match - computed: false, optional: true, required: false
  private _pireRegexNotMatch?: string; 
  public get pireRegexNotMatch() {
    return this.getStringAttribute('pire_regex_not_match');
  }
  public set pireRegexNotMatch(value: string) {
    this._pireRegexNotMatch = value;
  }
  public resetPireRegexNotMatch() {
    this._pireRegexNotMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pireRegexNotMatchInput() {
    return this._pireRegexNotMatch;
  }

  // prefix_match - computed: false, optional: true, required: false
  private _prefixMatch?: string; 
  public get prefixMatch() {
    return this.getStringAttribute('prefix_match');
  }
  public set prefixMatch(value: string) {
    this._prefixMatch = value;
  }
  public resetPrefixMatch() {
    this._prefixMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixMatchInput() {
    return this._prefixMatch;
  }

  // prefix_not_match - computed: false, optional: true, required: false
  private _prefixNotMatch?: string; 
  public get prefixNotMatch() {
    return this.getStringAttribute('prefix_not_match');
  }
  public set prefixNotMatch(value: string) {
    this._prefixNotMatch = value;
  }
  public resetPrefixNotMatch() {
    this._prefixNotMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixNotMatchInput() {
    return this._prefixNotMatch;
  }
}
export interface SwsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriQueries {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#key SwsSecurityProfile#key}
  */
  readonly key: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#value SwsSecurityProfile#value}
  */
  readonly value: SwsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriQueriesValue;
}

export function swsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriQueriesToTerraform(struct?: SwsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriQueries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: swsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriQueriesValueToTerraform(struct!.value),
  }
}


export function swsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriQueriesToHclTerraform(struct?: SwsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriQueries | cdktf.IResolvable): any {
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
    value: {
      value: swsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriQueriesValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "SwsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriQueriesValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriQueriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriQueries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriQueries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value.internalValue = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value = new SwsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriQueriesValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: SwsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriQueriesValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class SwsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriQueriesList extends cdktf.ComplexList {
  public internalValue? : SwsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriQueries[] | cdktf.IResolvable

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
  public get(index: number): SwsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriQueriesOutputReference {
    return new SwsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriQueriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwsSecurityProfileSecurityRuleSmartProtectionConditionRequestUri {
  /**
  * path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#path SwsSecurityProfile#path}
  */
  readonly path?: SwsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriPath;
  /**
  * queries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#queries SwsSecurityProfile#queries}
  */
  readonly queries?: SwsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriQueries[] | cdktf.IResolvable;
}

export function swsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriToTerraform(struct?: SwsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriOutputReference | SwsSecurityProfileSecurityRuleSmartProtectionConditionRequestUri): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: swsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriPathToTerraform(struct!.path),
    queries: cdktf.listMapper(swsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriQueriesToTerraform, true)(struct!.queries),
  }
}


export function swsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriToHclTerraform(struct?: SwsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriOutputReference | SwsSecurityProfileSecurityRuleSmartProtectionConditionRequestUri): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: swsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriPathToHclTerraform(struct!.path),
      isBlock: true,
      type: "list",
      storageClassType: "SwsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriPathList",
    },
    queries: {
      value: cdktf.listMapperHcl(swsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriQueriesToHclTerraform, true)(struct!.queries),
      isBlock: true,
      type: "list",
      storageClassType: "SwsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriQueriesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwsSecurityProfileSecurityRuleSmartProtectionConditionRequestUri | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path?.internalValue;
    }
    if (this._queries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queries = this._queries?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwsSecurityProfileSecurityRuleSmartProtectionConditionRequestUri | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._path.internalValue = undefined;
      this._queries.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._path.internalValue = value.path;
      this._queries.internalValue = value.queries;
    }
  }

  // path - computed: false, optional: true, required: false
  private _path = new SwsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriPathOutputReference(this, "path");
  public get path() {
    return this._path;
  }
  public putPath(value: SwsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriPath) {
    this._path.internalValue = value;
  }
  public resetPath() {
    this._path.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path.internalValue;
  }

  // queries - computed: false, optional: true, required: false
  private _queries = new SwsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriQueriesList(this, "queries", false);
  public get queries() {
    return this._queries;
  }
  public putQueries(value: SwsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriQueries[] | cdktf.IResolvable) {
    this._queries.internalValue = value;
  }
  public resetQueries() {
    this._queries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queriesInput() {
    return this._queries.internalValue;
  }
}
export interface SwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpGeoIpMatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#locations SwsSecurityProfile#locations}
  */
  readonly locations?: string[];
}

export function swsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpGeoIpMatchToTerraform(struct?: SwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpGeoIpMatchOutputReference | SwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpGeoIpMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    locations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.locations),
  }
}


export function swsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpGeoIpMatchToHclTerraform(struct?: SwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpGeoIpMatchOutputReference | SwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpGeoIpMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    locations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.locations),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpGeoIpMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpGeoIpMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._locations !== undefined) {
      hasAnyValues = true;
      internalValueResult.locations = this._locations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpGeoIpMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._locations = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._locations = value.locations;
    }
  }

  // locations - computed: false, optional: true, required: false
  private _locations?: string[]; 
  public get locations() {
    return this.getListAttribute('locations');
  }
  public set locations(value: string[]) {
    this._locations = value;
  }
  public resetLocations() {
    this._locations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationsInput() {
    return this._locations;
  }
}
export interface SwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpGeoIpNotMatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#locations SwsSecurityProfile#locations}
  */
  readonly locations?: string[];
}

export function swsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpGeoIpNotMatchToTerraform(struct?: SwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpGeoIpNotMatchOutputReference | SwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpGeoIpNotMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    locations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.locations),
  }
}


export function swsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpGeoIpNotMatchToHclTerraform(struct?: SwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpGeoIpNotMatchOutputReference | SwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpGeoIpNotMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    locations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.locations),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpGeoIpNotMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpGeoIpNotMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._locations !== undefined) {
      hasAnyValues = true;
      internalValueResult.locations = this._locations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpGeoIpNotMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._locations = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._locations = value.locations;
    }
  }

  // locations - computed: false, optional: true, required: false
  private _locations?: string[]; 
  public get locations() {
    return this.getListAttribute('locations');
  }
  public set locations(value: string[]) {
    this._locations = value;
  }
  public resetLocations() {
    this._locations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationsInput() {
    return this._locations;
  }
}
export interface SwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpIpRangesMatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#ip_ranges SwsSecurityProfile#ip_ranges}
  */
  readonly ipRanges?: string[];
}

export function swsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpIpRangesMatchToTerraform(struct?: SwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpIpRangesMatchOutputReference | SwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpIpRangesMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipRanges),
  }
}


export function swsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpIpRangesMatchToHclTerraform(struct?: SwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpIpRangesMatchOutputReference | SwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpIpRangesMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_ranges: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipRanges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpIpRangesMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpIpRangesMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRanges = this._ipRanges;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpIpRangesMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipRanges = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipRanges = value.ipRanges;
    }
  }

  // ip_ranges - computed: false, optional: true, required: false
  private _ipRanges?: string[]; 
  public get ipRanges() {
    return this.getListAttribute('ip_ranges');
  }
  public set ipRanges(value: string[]) {
    this._ipRanges = value;
  }
  public resetIpRanges() {
    this._ipRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRangesInput() {
    return this._ipRanges;
  }
}
export interface SwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpIpRangesNotMatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#ip_ranges SwsSecurityProfile#ip_ranges}
  */
  readonly ipRanges?: string[];
}

export function swsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpIpRangesNotMatchToTerraform(struct?: SwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpIpRangesNotMatchOutputReference | SwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpIpRangesNotMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipRanges),
  }
}


export function swsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpIpRangesNotMatchToHclTerraform(struct?: SwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpIpRangesNotMatchOutputReference | SwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpIpRangesNotMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_ranges: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipRanges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpIpRangesNotMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpIpRangesNotMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRanges = this._ipRanges;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpIpRangesNotMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipRanges = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipRanges = value.ipRanges;
    }
  }

  // ip_ranges - computed: false, optional: true, required: false
  private _ipRanges?: string[]; 
  public get ipRanges() {
    return this.getListAttribute('ip_ranges');
  }
  public set ipRanges(value: string[]) {
    this._ipRanges = value;
  }
  public resetIpRanges() {
    this._ipRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRangesInput() {
    return this._ipRanges;
  }
}
export interface SwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIp {
  /**
  * geo_ip_match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#geo_ip_match SwsSecurityProfile#geo_ip_match}
  */
  readonly geoIpMatch?: SwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpGeoIpMatch;
  /**
  * geo_ip_not_match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#geo_ip_not_match SwsSecurityProfile#geo_ip_not_match}
  */
  readonly geoIpNotMatch?: SwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpGeoIpNotMatch;
  /**
  * ip_ranges_match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#ip_ranges_match SwsSecurityProfile#ip_ranges_match}
  */
  readonly ipRangesMatch?: SwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpIpRangesMatch;
  /**
  * ip_ranges_not_match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#ip_ranges_not_match SwsSecurityProfile#ip_ranges_not_match}
  */
  readonly ipRangesNotMatch?: SwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpIpRangesNotMatch;
}

export function swsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpToTerraform(struct?: SwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpOutputReference | SwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    geo_ip_match: swsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpGeoIpMatchToTerraform(struct!.geoIpMatch),
    geo_ip_not_match: swsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpGeoIpNotMatchToTerraform(struct!.geoIpNotMatch),
    ip_ranges_match: swsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpIpRangesMatchToTerraform(struct!.ipRangesMatch),
    ip_ranges_not_match: swsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpIpRangesNotMatchToTerraform(struct!.ipRangesNotMatch),
  }
}


export function swsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpToHclTerraform(struct?: SwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpOutputReference | SwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    geo_ip_match: {
      value: swsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpGeoIpMatchToHclTerraform(struct!.geoIpMatch),
      isBlock: true,
      type: "list",
      storageClassType: "SwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpGeoIpMatchList",
    },
    geo_ip_not_match: {
      value: swsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpGeoIpNotMatchToHclTerraform(struct!.geoIpNotMatch),
      isBlock: true,
      type: "list",
      storageClassType: "SwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpGeoIpNotMatchList",
    },
    ip_ranges_match: {
      value: swsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpIpRangesMatchToHclTerraform(struct!.ipRangesMatch),
      isBlock: true,
      type: "list",
      storageClassType: "SwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpIpRangesMatchList",
    },
    ip_ranges_not_match: {
      value: swsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpIpRangesNotMatchToHclTerraform(struct!.ipRangesNotMatch),
      isBlock: true,
      type: "list",
      storageClassType: "SwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpIpRangesNotMatchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._geoIpMatch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoIpMatch = this._geoIpMatch?.internalValue;
    }
    if (this._geoIpNotMatch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoIpNotMatch = this._geoIpNotMatch?.internalValue;
    }
    if (this._ipRangesMatch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRangesMatch = this._ipRangesMatch?.internalValue;
    }
    if (this._ipRangesNotMatch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRangesNotMatch = this._ipRangesNotMatch?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._geoIpMatch.internalValue = undefined;
      this._geoIpNotMatch.internalValue = undefined;
      this._ipRangesMatch.internalValue = undefined;
      this._ipRangesNotMatch.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._geoIpMatch.internalValue = value.geoIpMatch;
      this._geoIpNotMatch.internalValue = value.geoIpNotMatch;
      this._ipRangesMatch.internalValue = value.ipRangesMatch;
      this._ipRangesNotMatch.internalValue = value.ipRangesNotMatch;
    }
  }

  // geo_ip_match - computed: false, optional: true, required: false
  private _geoIpMatch = new SwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpGeoIpMatchOutputReference(this, "geo_ip_match");
  public get geoIpMatch() {
    return this._geoIpMatch;
  }
  public putGeoIpMatch(value: SwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpGeoIpMatch) {
    this._geoIpMatch.internalValue = value;
  }
  public resetGeoIpMatch() {
    this._geoIpMatch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoIpMatchInput() {
    return this._geoIpMatch.internalValue;
  }

  // geo_ip_not_match - computed: false, optional: true, required: false
  private _geoIpNotMatch = new SwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpGeoIpNotMatchOutputReference(this, "geo_ip_not_match");
  public get geoIpNotMatch() {
    return this._geoIpNotMatch;
  }
  public putGeoIpNotMatch(value: SwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpGeoIpNotMatch) {
    this._geoIpNotMatch.internalValue = value;
  }
  public resetGeoIpNotMatch() {
    this._geoIpNotMatch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoIpNotMatchInput() {
    return this._geoIpNotMatch.internalValue;
  }

  // ip_ranges_match - computed: false, optional: true, required: false
  private _ipRangesMatch = new SwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpIpRangesMatchOutputReference(this, "ip_ranges_match");
  public get ipRangesMatch() {
    return this._ipRangesMatch;
  }
  public putIpRangesMatch(value: SwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpIpRangesMatch) {
    this._ipRangesMatch.internalValue = value;
  }
  public resetIpRangesMatch() {
    this._ipRangesMatch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRangesMatchInput() {
    return this._ipRangesMatch.internalValue;
  }

  // ip_ranges_not_match - computed: false, optional: true, required: false
  private _ipRangesNotMatch = new SwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpIpRangesNotMatchOutputReference(this, "ip_ranges_not_match");
  public get ipRangesNotMatch() {
    return this._ipRangesNotMatch;
  }
  public putIpRangesNotMatch(value: SwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpIpRangesNotMatch) {
    this._ipRangesNotMatch.internalValue = value;
  }
  public resetIpRangesNotMatch() {
    this._ipRangesNotMatch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRangesNotMatchInput() {
    return this._ipRangesNotMatch.internalValue;
  }
}
export interface SwsSecurityProfileSecurityRuleSmartProtectionCondition {
  /**
  * authority block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#authority SwsSecurityProfile#authority}
  */
  readonly authority?: SwsSecurityProfileSecurityRuleSmartProtectionConditionAuthority;
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#headers SwsSecurityProfile#headers}
  */
  readonly headers?: SwsSecurityProfileSecurityRuleSmartProtectionConditionHeaders[] | cdktf.IResolvable;
  /**
  * http_method block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#http_method SwsSecurityProfile#http_method}
  */
  readonly httpMethod?: SwsSecurityProfileSecurityRuleSmartProtectionConditionHttpMethod;
  /**
  * request_uri block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#request_uri SwsSecurityProfile#request_uri}
  */
  readonly requestUri?: SwsSecurityProfileSecurityRuleSmartProtectionConditionRequestUri;
  /**
  * source_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#source_ip SwsSecurityProfile#source_ip}
  */
  readonly sourceIp?: SwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIp;
}

export function swsSecurityProfileSecurityRuleSmartProtectionConditionToTerraform(struct?: SwsSecurityProfileSecurityRuleSmartProtectionConditionOutputReference | SwsSecurityProfileSecurityRuleSmartProtectionCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authority: swsSecurityProfileSecurityRuleSmartProtectionConditionAuthorityToTerraform(struct!.authority),
    headers: cdktf.listMapper(swsSecurityProfileSecurityRuleSmartProtectionConditionHeadersToTerraform, true)(struct!.headers),
    http_method: swsSecurityProfileSecurityRuleSmartProtectionConditionHttpMethodToTerraform(struct!.httpMethod),
    request_uri: swsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriToTerraform(struct!.requestUri),
    source_ip: swsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpToTerraform(struct!.sourceIp),
  }
}


export function swsSecurityProfileSecurityRuleSmartProtectionConditionToHclTerraform(struct?: SwsSecurityProfileSecurityRuleSmartProtectionConditionOutputReference | SwsSecurityProfileSecurityRuleSmartProtectionCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authority: {
      value: swsSecurityProfileSecurityRuleSmartProtectionConditionAuthorityToHclTerraform(struct!.authority),
      isBlock: true,
      type: "list",
      storageClassType: "SwsSecurityProfileSecurityRuleSmartProtectionConditionAuthorityList",
    },
    headers: {
      value: cdktf.listMapperHcl(swsSecurityProfileSecurityRuleSmartProtectionConditionHeadersToHclTerraform, true)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "SwsSecurityProfileSecurityRuleSmartProtectionConditionHeadersList",
    },
    http_method: {
      value: swsSecurityProfileSecurityRuleSmartProtectionConditionHttpMethodToHclTerraform(struct!.httpMethod),
      isBlock: true,
      type: "list",
      storageClassType: "SwsSecurityProfileSecurityRuleSmartProtectionConditionHttpMethodList",
    },
    request_uri: {
      value: swsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriToHclTerraform(struct!.requestUri),
      isBlock: true,
      type: "list",
      storageClassType: "SwsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriList",
    },
    source_ip: {
      value: swsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpToHclTerraform(struct!.sourceIp),
      isBlock: true,
      type: "list",
      storageClassType: "SwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwsSecurityProfileSecurityRuleSmartProtectionConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwsSecurityProfileSecurityRuleSmartProtectionCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authority?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authority = this._authority?.internalValue;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._httpMethod?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpMethod = this._httpMethod?.internalValue;
    }
    if (this._requestUri?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestUri = this._requestUri?.internalValue;
    }
    if (this._sourceIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIp = this._sourceIp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwsSecurityProfileSecurityRuleSmartProtectionCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authority.internalValue = undefined;
      this._headers.internalValue = undefined;
      this._httpMethod.internalValue = undefined;
      this._requestUri.internalValue = undefined;
      this._sourceIp.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authority.internalValue = value.authority;
      this._headers.internalValue = value.headers;
      this._httpMethod.internalValue = value.httpMethod;
      this._requestUri.internalValue = value.requestUri;
      this._sourceIp.internalValue = value.sourceIp;
    }
  }

  // authority - computed: false, optional: true, required: false
  private _authority = new SwsSecurityProfileSecurityRuleSmartProtectionConditionAuthorityOutputReference(this, "authority");
  public get authority() {
    return this._authority;
  }
  public putAuthority(value: SwsSecurityProfileSecurityRuleSmartProtectionConditionAuthority) {
    this._authority.internalValue = value;
  }
  public resetAuthority() {
    this._authority.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorityInput() {
    return this._authority.internalValue;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new SwsSecurityProfileSecurityRuleSmartProtectionConditionHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: SwsSecurityProfileSecurityRuleSmartProtectionConditionHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // http_method - computed: false, optional: true, required: false
  private _httpMethod = new SwsSecurityProfileSecurityRuleSmartProtectionConditionHttpMethodOutputReference(this, "http_method");
  public get httpMethod() {
    return this._httpMethod;
  }
  public putHttpMethod(value: SwsSecurityProfileSecurityRuleSmartProtectionConditionHttpMethod) {
    this._httpMethod.internalValue = value;
  }
  public resetHttpMethod() {
    this._httpMethod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMethodInput() {
    return this._httpMethod.internalValue;
  }

  // request_uri - computed: false, optional: true, required: false
  private _requestUri = new SwsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriOutputReference(this, "request_uri");
  public get requestUri() {
    return this._requestUri;
  }
  public putRequestUri(value: SwsSecurityProfileSecurityRuleSmartProtectionConditionRequestUri) {
    this._requestUri.internalValue = value;
  }
  public resetRequestUri() {
    this._requestUri.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestUriInput() {
    return this._requestUri.internalValue;
  }

  // source_ip - computed: false, optional: true, required: false
  private _sourceIp = new SwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpOutputReference(this, "source_ip");
  public get sourceIp() {
    return this._sourceIp;
  }
  public putSourceIp(value: SwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIp) {
    this._sourceIp.internalValue = value;
  }
  public resetSourceIp() {
    this._sourceIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpInput() {
    return this._sourceIp.internalValue;
  }
}
export interface SwsSecurityProfileSecurityRuleSmartProtection {
  /**
  * Mode of protection. Possible values: `FULL` (full protection means that the traffic will be checked based on ML models and behavioral analysis, with suspicious requests being sent to SmartCaptcha) or `API` (API protection means checking the traffic based on ML models and behavioral analysis without sending suspicious requests to SmartCaptcha. The suspicious requests will be blocked).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#mode SwsSecurityProfile#mode}
  */
  readonly mode?: string;
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#condition SwsSecurityProfile#condition}
  */
  readonly condition?: SwsSecurityProfileSecurityRuleSmartProtectionCondition;
}

export function swsSecurityProfileSecurityRuleSmartProtectionToTerraform(struct?: SwsSecurityProfileSecurityRuleSmartProtectionOutputReference | SwsSecurityProfileSecurityRuleSmartProtection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    condition: swsSecurityProfileSecurityRuleSmartProtectionConditionToTerraform(struct!.condition),
  }
}


export function swsSecurityProfileSecurityRuleSmartProtectionToHclTerraform(struct?: SwsSecurityProfileSecurityRuleSmartProtectionOutputReference | SwsSecurityProfileSecurityRuleSmartProtection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    condition: {
      value: swsSecurityProfileSecurityRuleSmartProtectionConditionToHclTerraform(struct!.condition),
      isBlock: true,
      type: "list",
      storageClassType: "SwsSecurityProfileSecurityRuleSmartProtectionConditionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwsSecurityProfileSecurityRuleSmartProtectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwsSecurityProfileSecurityRuleSmartProtection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwsSecurityProfileSecurityRuleSmartProtection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mode = undefined;
      this._condition.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mode = value.mode;
      this._condition.internalValue = value.condition;
    }
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // condition - computed: false, optional: true, required: false
  private _condition = new SwsSecurityProfileSecurityRuleSmartProtectionConditionOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }
  public putCondition(value: SwsSecurityProfileSecurityRuleSmartProtectionCondition) {
    this._condition.internalValue = value;
  }
  public resetCondition() {
    this._condition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }
}
export interface SwsSecurityProfileSecurityRuleWafConditionAuthorityAuthorities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#exact_match SwsSecurityProfile#exact_match}
  */
  readonly exactMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#exact_not_match SwsSecurityProfile#exact_not_match}
  */
  readonly exactNotMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#pire_regex_match SwsSecurityProfile#pire_regex_match}
  */
  readonly pireRegexMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#pire_regex_not_match SwsSecurityProfile#pire_regex_not_match}
  */
  readonly pireRegexNotMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#prefix_match SwsSecurityProfile#prefix_match}
  */
  readonly prefixMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#prefix_not_match SwsSecurityProfile#prefix_not_match}
  */
  readonly prefixNotMatch?: string;
}

export function swsSecurityProfileSecurityRuleWafConditionAuthorityAuthoritiesToTerraform(struct?: SwsSecurityProfileSecurityRuleWafConditionAuthorityAuthorities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_match: cdktf.stringToTerraform(struct!.exactMatch),
    exact_not_match: cdktf.stringToTerraform(struct!.exactNotMatch),
    pire_regex_match: cdktf.stringToTerraform(struct!.pireRegexMatch),
    pire_regex_not_match: cdktf.stringToTerraform(struct!.pireRegexNotMatch),
    prefix_match: cdktf.stringToTerraform(struct!.prefixMatch),
    prefix_not_match: cdktf.stringToTerraform(struct!.prefixNotMatch),
  }
}


export function swsSecurityProfileSecurityRuleWafConditionAuthorityAuthoritiesToHclTerraform(struct?: SwsSecurityProfileSecurityRuleWafConditionAuthorityAuthorities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_match: {
      value: cdktf.stringToHclTerraform(struct!.exactMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exact_not_match: {
      value: cdktf.stringToHclTerraform(struct!.exactNotMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pire_regex_match: {
      value: cdktf.stringToHclTerraform(struct!.pireRegexMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pire_regex_not_match: {
      value: cdktf.stringToHclTerraform(struct!.pireRegexNotMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_match: {
      value: cdktf.stringToHclTerraform(struct!.prefixMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_not_match: {
      value: cdktf.stringToHclTerraform(struct!.prefixNotMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwsSecurityProfileSecurityRuleWafConditionAuthorityAuthoritiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwsSecurityProfileSecurityRuleWafConditionAuthorityAuthorities | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactMatch = this._exactMatch;
    }
    if (this._exactNotMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactNotMatch = this._exactNotMatch;
    }
    if (this._pireRegexMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.pireRegexMatch = this._pireRegexMatch;
    }
    if (this._pireRegexNotMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.pireRegexNotMatch = this._pireRegexNotMatch;
    }
    if (this._prefixMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixMatch = this._prefixMatch;
    }
    if (this._prefixNotMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixNotMatch = this._prefixNotMatch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwsSecurityProfileSecurityRuleWafConditionAuthorityAuthorities | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exactMatch = undefined;
      this._exactNotMatch = undefined;
      this._pireRegexMatch = undefined;
      this._pireRegexNotMatch = undefined;
      this._prefixMatch = undefined;
      this._prefixNotMatch = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exactMatch = value.exactMatch;
      this._exactNotMatch = value.exactNotMatch;
      this._pireRegexMatch = value.pireRegexMatch;
      this._pireRegexNotMatch = value.pireRegexNotMatch;
      this._prefixMatch = value.prefixMatch;
      this._prefixNotMatch = value.prefixNotMatch;
    }
  }

  // exact_match - computed: false, optional: true, required: false
  private _exactMatch?: string; 
  public get exactMatch() {
    return this.getStringAttribute('exact_match');
  }
  public set exactMatch(value: string) {
    this._exactMatch = value;
  }
  public resetExactMatch() {
    this._exactMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactMatchInput() {
    return this._exactMatch;
  }

  // exact_not_match - computed: false, optional: true, required: false
  private _exactNotMatch?: string; 
  public get exactNotMatch() {
    return this.getStringAttribute('exact_not_match');
  }
  public set exactNotMatch(value: string) {
    this._exactNotMatch = value;
  }
  public resetExactNotMatch() {
    this._exactNotMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactNotMatchInput() {
    return this._exactNotMatch;
  }

  // pire_regex_match - computed: false, optional: true, required: false
  private _pireRegexMatch?: string; 
  public get pireRegexMatch() {
    return this.getStringAttribute('pire_regex_match');
  }
  public set pireRegexMatch(value: string) {
    this._pireRegexMatch = value;
  }
  public resetPireRegexMatch() {
    this._pireRegexMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pireRegexMatchInput() {
    return this._pireRegexMatch;
  }

  // pire_regex_not_match - computed: false, optional: true, required: false
  private _pireRegexNotMatch?: string; 
  public get pireRegexNotMatch() {
    return this.getStringAttribute('pire_regex_not_match');
  }
  public set pireRegexNotMatch(value: string) {
    this._pireRegexNotMatch = value;
  }
  public resetPireRegexNotMatch() {
    this._pireRegexNotMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pireRegexNotMatchInput() {
    return this._pireRegexNotMatch;
  }

  // prefix_match - computed: false, optional: true, required: false
  private _prefixMatch?: string; 
  public get prefixMatch() {
    return this.getStringAttribute('prefix_match');
  }
  public set prefixMatch(value: string) {
    this._prefixMatch = value;
  }
  public resetPrefixMatch() {
    this._prefixMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixMatchInput() {
    return this._prefixMatch;
  }

  // prefix_not_match - computed: false, optional: true, required: false
  private _prefixNotMatch?: string; 
  public get prefixNotMatch() {
    return this.getStringAttribute('prefix_not_match');
  }
  public set prefixNotMatch(value: string) {
    this._prefixNotMatch = value;
  }
  public resetPrefixNotMatch() {
    this._prefixNotMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixNotMatchInput() {
    return this._prefixNotMatch;
  }
}

export class SwsSecurityProfileSecurityRuleWafConditionAuthorityAuthoritiesList extends cdktf.ComplexList {
  public internalValue? : SwsSecurityProfileSecurityRuleWafConditionAuthorityAuthorities[] | cdktf.IResolvable

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
  public get(index: number): SwsSecurityProfileSecurityRuleWafConditionAuthorityAuthoritiesOutputReference {
    return new SwsSecurityProfileSecurityRuleWafConditionAuthorityAuthoritiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwsSecurityProfileSecurityRuleWafConditionAuthority {
  /**
  * authorities block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#authorities SwsSecurityProfile#authorities}
  */
  readonly authorities?: SwsSecurityProfileSecurityRuleWafConditionAuthorityAuthorities[] | cdktf.IResolvable;
}

export function swsSecurityProfileSecurityRuleWafConditionAuthorityToTerraform(struct?: SwsSecurityProfileSecurityRuleWafConditionAuthorityOutputReference | SwsSecurityProfileSecurityRuleWafConditionAuthority): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authorities: cdktf.listMapper(swsSecurityProfileSecurityRuleWafConditionAuthorityAuthoritiesToTerraform, true)(struct!.authorities),
  }
}


export function swsSecurityProfileSecurityRuleWafConditionAuthorityToHclTerraform(struct?: SwsSecurityProfileSecurityRuleWafConditionAuthorityOutputReference | SwsSecurityProfileSecurityRuleWafConditionAuthority): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authorities: {
      value: cdktf.listMapperHcl(swsSecurityProfileSecurityRuleWafConditionAuthorityAuthoritiesToHclTerraform, true)(struct!.authorities),
      isBlock: true,
      type: "list",
      storageClassType: "SwsSecurityProfileSecurityRuleWafConditionAuthorityAuthoritiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwsSecurityProfileSecurityRuleWafConditionAuthorityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwsSecurityProfileSecurityRuleWafConditionAuthority | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorities = this._authorities?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwsSecurityProfileSecurityRuleWafConditionAuthority | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authorities.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authorities.internalValue = value.authorities;
    }
  }

  // authorities - computed: false, optional: true, required: false
  private _authorities = new SwsSecurityProfileSecurityRuleWafConditionAuthorityAuthoritiesList(this, "authorities", false);
  public get authorities() {
    return this._authorities;
  }
  public putAuthorities(value: SwsSecurityProfileSecurityRuleWafConditionAuthorityAuthorities[] | cdktf.IResolvable) {
    this._authorities.internalValue = value;
  }
  public resetAuthorities() {
    this._authorities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authoritiesInput() {
    return this._authorities.internalValue;
  }
}
export interface SwsSecurityProfileSecurityRuleWafConditionHeadersValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#exact_match SwsSecurityProfile#exact_match}
  */
  readonly exactMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#exact_not_match SwsSecurityProfile#exact_not_match}
  */
  readonly exactNotMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#pire_regex_match SwsSecurityProfile#pire_regex_match}
  */
  readonly pireRegexMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#pire_regex_not_match SwsSecurityProfile#pire_regex_not_match}
  */
  readonly pireRegexNotMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#prefix_match SwsSecurityProfile#prefix_match}
  */
  readonly prefixMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#prefix_not_match SwsSecurityProfile#prefix_not_match}
  */
  readonly prefixNotMatch?: string;
}

export function swsSecurityProfileSecurityRuleWafConditionHeadersValueToTerraform(struct?: SwsSecurityProfileSecurityRuleWafConditionHeadersValueOutputReference | SwsSecurityProfileSecurityRuleWafConditionHeadersValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_match: cdktf.stringToTerraform(struct!.exactMatch),
    exact_not_match: cdktf.stringToTerraform(struct!.exactNotMatch),
    pire_regex_match: cdktf.stringToTerraform(struct!.pireRegexMatch),
    pire_regex_not_match: cdktf.stringToTerraform(struct!.pireRegexNotMatch),
    prefix_match: cdktf.stringToTerraform(struct!.prefixMatch),
    prefix_not_match: cdktf.stringToTerraform(struct!.prefixNotMatch),
  }
}


export function swsSecurityProfileSecurityRuleWafConditionHeadersValueToHclTerraform(struct?: SwsSecurityProfileSecurityRuleWafConditionHeadersValueOutputReference | SwsSecurityProfileSecurityRuleWafConditionHeadersValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_match: {
      value: cdktf.stringToHclTerraform(struct!.exactMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exact_not_match: {
      value: cdktf.stringToHclTerraform(struct!.exactNotMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pire_regex_match: {
      value: cdktf.stringToHclTerraform(struct!.pireRegexMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pire_regex_not_match: {
      value: cdktf.stringToHclTerraform(struct!.pireRegexNotMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_match: {
      value: cdktf.stringToHclTerraform(struct!.prefixMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_not_match: {
      value: cdktf.stringToHclTerraform(struct!.prefixNotMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwsSecurityProfileSecurityRuleWafConditionHeadersValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwsSecurityProfileSecurityRuleWafConditionHeadersValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactMatch = this._exactMatch;
    }
    if (this._exactNotMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactNotMatch = this._exactNotMatch;
    }
    if (this._pireRegexMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.pireRegexMatch = this._pireRegexMatch;
    }
    if (this._pireRegexNotMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.pireRegexNotMatch = this._pireRegexNotMatch;
    }
    if (this._prefixMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixMatch = this._prefixMatch;
    }
    if (this._prefixNotMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixNotMatch = this._prefixNotMatch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwsSecurityProfileSecurityRuleWafConditionHeadersValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactMatch = undefined;
      this._exactNotMatch = undefined;
      this._pireRegexMatch = undefined;
      this._pireRegexNotMatch = undefined;
      this._prefixMatch = undefined;
      this._prefixNotMatch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactMatch = value.exactMatch;
      this._exactNotMatch = value.exactNotMatch;
      this._pireRegexMatch = value.pireRegexMatch;
      this._pireRegexNotMatch = value.pireRegexNotMatch;
      this._prefixMatch = value.prefixMatch;
      this._prefixNotMatch = value.prefixNotMatch;
    }
  }

  // exact_match - computed: false, optional: true, required: false
  private _exactMatch?: string; 
  public get exactMatch() {
    return this.getStringAttribute('exact_match');
  }
  public set exactMatch(value: string) {
    this._exactMatch = value;
  }
  public resetExactMatch() {
    this._exactMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactMatchInput() {
    return this._exactMatch;
  }

  // exact_not_match - computed: false, optional: true, required: false
  private _exactNotMatch?: string; 
  public get exactNotMatch() {
    return this.getStringAttribute('exact_not_match');
  }
  public set exactNotMatch(value: string) {
    this._exactNotMatch = value;
  }
  public resetExactNotMatch() {
    this._exactNotMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactNotMatchInput() {
    return this._exactNotMatch;
  }

  // pire_regex_match - computed: false, optional: true, required: false
  private _pireRegexMatch?: string; 
  public get pireRegexMatch() {
    return this.getStringAttribute('pire_regex_match');
  }
  public set pireRegexMatch(value: string) {
    this._pireRegexMatch = value;
  }
  public resetPireRegexMatch() {
    this._pireRegexMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pireRegexMatchInput() {
    return this._pireRegexMatch;
  }

  // pire_regex_not_match - computed: false, optional: true, required: false
  private _pireRegexNotMatch?: string; 
  public get pireRegexNotMatch() {
    return this.getStringAttribute('pire_regex_not_match');
  }
  public set pireRegexNotMatch(value: string) {
    this._pireRegexNotMatch = value;
  }
  public resetPireRegexNotMatch() {
    this._pireRegexNotMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pireRegexNotMatchInput() {
    return this._pireRegexNotMatch;
  }

  // prefix_match - computed: false, optional: true, required: false
  private _prefixMatch?: string; 
  public get prefixMatch() {
    return this.getStringAttribute('prefix_match');
  }
  public set prefixMatch(value: string) {
    this._prefixMatch = value;
  }
  public resetPrefixMatch() {
    this._prefixMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixMatchInput() {
    return this._prefixMatch;
  }

  // prefix_not_match - computed: false, optional: true, required: false
  private _prefixNotMatch?: string; 
  public get prefixNotMatch() {
    return this.getStringAttribute('prefix_not_match');
  }
  public set prefixNotMatch(value: string) {
    this._prefixNotMatch = value;
  }
  public resetPrefixNotMatch() {
    this._prefixNotMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixNotMatchInput() {
    return this._prefixNotMatch;
  }
}
export interface SwsSecurityProfileSecurityRuleWafConditionHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#name SwsSecurityProfile#name}
  */
  readonly name?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#value SwsSecurityProfile#value}
  */
  readonly value: SwsSecurityProfileSecurityRuleWafConditionHeadersValue;
}

export function swsSecurityProfileSecurityRuleWafConditionHeadersToTerraform(struct?: SwsSecurityProfileSecurityRuleWafConditionHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: swsSecurityProfileSecurityRuleWafConditionHeadersValueToTerraform(struct!.value),
  }
}


export function swsSecurityProfileSecurityRuleWafConditionHeadersToHclTerraform(struct?: SwsSecurityProfileSecurityRuleWafConditionHeaders | cdktf.IResolvable): any {
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
    value: {
      value: swsSecurityProfileSecurityRuleWafConditionHeadersValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "SwsSecurityProfileSecurityRuleWafConditionHeadersValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwsSecurityProfileSecurityRuleWafConditionHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwsSecurityProfileSecurityRuleWafConditionHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwsSecurityProfileSecurityRuleWafConditionHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value.internalValue = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value = new SwsSecurityProfileSecurityRuleWafConditionHeadersValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: SwsSecurityProfileSecurityRuleWafConditionHeadersValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class SwsSecurityProfileSecurityRuleWafConditionHeadersList extends cdktf.ComplexList {
  public internalValue? : SwsSecurityProfileSecurityRuleWafConditionHeaders[] | cdktf.IResolvable

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
  public get(index: number): SwsSecurityProfileSecurityRuleWafConditionHeadersOutputReference {
    return new SwsSecurityProfileSecurityRuleWafConditionHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwsSecurityProfileSecurityRuleWafConditionHttpMethodHttpMethods {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#exact_match SwsSecurityProfile#exact_match}
  */
  readonly exactMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#exact_not_match SwsSecurityProfile#exact_not_match}
  */
  readonly exactNotMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#pire_regex_match SwsSecurityProfile#pire_regex_match}
  */
  readonly pireRegexMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#pire_regex_not_match SwsSecurityProfile#pire_regex_not_match}
  */
  readonly pireRegexNotMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#prefix_match SwsSecurityProfile#prefix_match}
  */
  readonly prefixMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#prefix_not_match SwsSecurityProfile#prefix_not_match}
  */
  readonly prefixNotMatch?: string;
}

export function swsSecurityProfileSecurityRuleWafConditionHttpMethodHttpMethodsToTerraform(struct?: SwsSecurityProfileSecurityRuleWafConditionHttpMethodHttpMethods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_match: cdktf.stringToTerraform(struct!.exactMatch),
    exact_not_match: cdktf.stringToTerraform(struct!.exactNotMatch),
    pire_regex_match: cdktf.stringToTerraform(struct!.pireRegexMatch),
    pire_regex_not_match: cdktf.stringToTerraform(struct!.pireRegexNotMatch),
    prefix_match: cdktf.stringToTerraform(struct!.prefixMatch),
    prefix_not_match: cdktf.stringToTerraform(struct!.prefixNotMatch),
  }
}


export function swsSecurityProfileSecurityRuleWafConditionHttpMethodHttpMethodsToHclTerraform(struct?: SwsSecurityProfileSecurityRuleWafConditionHttpMethodHttpMethods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_match: {
      value: cdktf.stringToHclTerraform(struct!.exactMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exact_not_match: {
      value: cdktf.stringToHclTerraform(struct!.exactNotMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pire_regex_match: {
      value: cdktf.stringToHclTerraform(struct!.pireRegexMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pire_regex_not_match: {
      value: cdktf.stringToHclTerraform(struct!.pireRegexNotMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_match: {
      value: cdktf.stringToHclTerraform(struct!.prefixMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_not_match: {
      value: cdktf.stringToHclTerraform(struct!.prefixNotMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwsSecurityProfileSecurityRuleWafConditionHttpMethodHttpMethodsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwsSecurityProfileSecurityRuleWafConditionHttpMethodHttpMethods | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactMatch = this._exactMatch;
    }
    if (this._exactNotMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactNotMatch = this._exactNotMatch;
    }
    if (this._pireRegexMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.pireRegexMatch = this._pireRegexMatch;
    }
    if (this._pireRegexNotMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.pireRegexNotMatch = this._pireRegexNotMatch;
    }
    if (this._prefixMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixMatch = this._prefixMatch;
    }
    if (this._prefixNotMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixNotMatch = this._prefixNotMatch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwsSecurityProfileSecurityRuleWafConditionHttpMethodHttpMethods | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exactMatch = undefined;
      this._exactNotMatch = undefined;
      this._pireRegexMatch = undefined;
      this._pireRegexNotMatch = undefined;
      this._prefixMatch = undefined;
      this._prefixNotMatch = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exactMatch = value.exactMatch;
      this._exactNotMatch = value.exactNotMatch;
      this._pireRegexMatch = value.pireRegexMatch;
      this._pireRegexNotMatch = value.pireRegexNotMatch;
      this._prefixMatch = value.prefixMatch;
      this._prefixNotMatch = value.prefixNotMatch;
    }
  }

  // exact_match - computed: false, optional: true, required: false
  private _exactMatch?: string; 
  public get exactMatch() {
    return this.getStringAttribute('exact_match');
  }
  public set exactMatch(value: string) {
    this._exactMatch = value;
  }
  public resetExactMatch() {
    this._exactMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactMatchInput() {
    return this._exactMatch;
  }

  // exact_not_match - computed: false, optional: true, required: false
  private _exactNotMatch?: string; 
  public get exactNotMatch() {
    return this.getStringAttribute('exact_not_match');
  }
  public set exactNotMatch(value: string) {
    this._exactNotMatch = value;
  }
  public resetExactNotMatch() {
    this._exactNotMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactNotMatchInput() {
    return this._exactNotMatch;
  }

  // pire_regex_match - computed: false, optional: true, required: false
  private _pireRegexMatch?: string; 
  public get pireRegexMatch() {
    return this.getStringAttribute('pire_regex_match');
  }
  public set pireRegexMatch(value: string) {
    this._pireRegexMatch = value;
  }
  public resetPireRegexMatch() {
    this._pireRegexMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pireRegexMatchInput() {
    return this._pireRegexMatch;
  }

  // pire_regex_not_match - computed: false, optional: true, required: false
  private _pireRegexNotMatch?: string; 
  public get pireRegexNotMatch() {
    return this.getStringAttribute('pire_regex_not_match');
  }
  public set pireRegexNotMatch(value: string) {
    this._pireRegexNotMatch = value;
  }
  public resetPireRegexNotMatch() {
    this._pireRegexNotMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pireRegexNotMatchInput() {
    return this._pireRegexNotMatch;
  }

  // prefix_match - computed: false, optional: true, required: false
  private _prefixMatch?: string; 
  public get prefixMatch() {
    return this.getStringAttribute('prefix_match');
  }
  public set prefixMatch(value: string) {
    this._prefixMatch = value;
  }
  public resetPrefixMatch() {
    this._prefixMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixMatchInput() {
    return this._prefixMatch;
  }

  // prefix_not_match - computed: false, optional: true, required: false
  private _prefixNotMatch?: string; 
  public get prefixNotMatch() {
    return this.getStringAttribute('prefix_not_match');
  }
  public set prefixNotMatch(value: string) {
    this._prefixNotMatch = value;
  }
  public resetPrefixNotMatch() {
    this._prefixNotMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixNotMatchInput() {
    return this._prefixNotMatch;
  }
}

export class SwsSecurityProfileSecurityRuleWafConditionHttpMethodHttpMethodsList extends cdktf.ComplexList {
  public internalValue? : SwsSecurityProfileSecurityRuleWafConditionHttpMethodHttpMethods[] | cdktf.IResolvable

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
  public get(index: number): SwsSecurityProfileSecurityRuleWafConditionHttpMethodHttpMethodsOutputReference {
    return new SwsSecurityProfileSecurityRuleWafConditionHttpMethodHttpMethodsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwsSecurityProfileSecurityRuleWafConditionHttpMethod {
  /**
  * http_methods block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#http_methods SwsSecurityProfile#http_methods}
  */
  readonly httpMethods?: SwsSecurityProfileSecurityRuleWafConditionHttpMethodHttpMethods[] | cdktf.IResolvable;
}

export function swsSecurityProfileSecurityRuleWafConditionHttpMethodToTerraform(struct?: SwsSecurityProfileSecurityRuleWafConditionHttpMethodOutputReference | SwsSecurityProfileSecurityRuleWafConditionHttpMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_methods: cdktf.listMapper(swsSecurityProfileSecurityRuleWafConditionHttpMethodHttpMethodsToTerraform, true)(struct!.httpMethods),
  }
}


export function swsSecurityProfileSecurityRuleWafConditionHttpMethodToHclTerraform(struct?: SwsSecurityProfileSecurityRuleWafConditionHttpMethodOutputReference | SwsSecurityProfileSecurityRuleWafConditionHttpMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_methods: {
      value: cdktf.listMapperHcl(swsSecurityProfileSecurityRuleWafConditionHttpMethodHttpMethodsToHclTerraform, true)(struct!.httpMethods),
      isBlock: true,
      type: "list",
      storageClassType: "SwsSecurityProfileSecurityRuleWafConditionHttpMethodHttpMethodsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwsSecurityProfileSecurityRuleWafConditionHttpMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwsSecurityProfileSecurityRuleWafConditionHttpMethod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpMethods?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpMethods = this._httpMethods?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwsSecurityProfileSecurityRuleWafConditionHttpMethod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._httpMethods.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._httpMethods.internalValue = value.httpMethods;
    }
  }

  // http_methods - computed: false, optional: true, required: false
  private _httpMethods = new SwsSecurityProfileSecurityRuleWafConditionHttpMethodHttpMethodsList(this, "http_methods", false);
  public get httpMethods() {
    return this._httpMethods;
  }
  public putHttpMethods(value: SwsSecurityProfileSecurityRuleWafConditionHttpMethodHttpMethods[] | cdktf.IResolvable) {
    this._httpMethods.internalValue = value;
  }
  public resetHttpMethods() {
    this._httpMethods.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMethodsInput() {
    return this._httpMethods.internalValue;
  }
}
export interface SwsSecurityProfileSecurityRuleWafConditionRequestUriPath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#exact_match SwsSecurityProfile#exact_match}
  */
  readonly exactMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#exact_not_match SwsSecurityProfile#exact_not_match}
  */
  readonly exactNotMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#pire_regex_match SwsSecurityProfile#pire_regex_match}
  */
  readonly pireRegexMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#pire_regex_not_match SwsSecurityProfile#pire_regex_not_match}
  */
  readonly pireRegexNotMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#prefix_match SwsSecurityProfile#prefix_match}
  */
  readonly prefixMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#prefix_not_match SwsSecurityProfile#prefix_not_match}
  */
  readonly prefixNotMatch?: string;
}

export function swsSecurityProfileSecurityRuleWafConditionRequestUriPathToTerraform(struct?: SwsSecurityProfileSecurityRuleWafConditionRequestUriPathOutputReference | SwsSecurityProfileSecurityRuleWafConditionRequestUriPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_match: cdktf.stringToTerraform(struct!.exactMatch),
    exact_not_match: cdktf.stringToTerraform(struct!.exactNotMatch),
    pire_regex_match: cdktf.stringToTerraform(struct!.pireRegexMatch),
    pire_regex_not_match: cdktf.stringToTerraform(struct!.pireRegexNotMatch),
    prefix_match: cdktf.stringToTerraform(struct!.prefixMatch),
    prefix_not_match: cdktf.stringToTerraform(struct!.prefixNotMatch),
  }
}


export function swsSecurityProfileSecurityRuleWafConditionRequestUriPathToHclTerraform(struct?: SwsSecurityProfileSecurityRuleWafConditionRequestUriPathOutputReference | SwsSecurityProfileSecurityRuleWafConditionRequestUriPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_match: {
      value: cdktf.stringToHclTerraform(struct!.exactMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exact_not_match: {
      value: cdktf.stringToHclTerraform(struct!.exactNotMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pire_regex_match: {
      value: cdktf.stringToHclTerraform(struct!.pireRegexMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pire_regex_not_match: {
      value: cdktf.stringToHclTerraform(struct!.pireRegexNotMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_match: {
      value: cdktf.stringToHclTerraform(struct!.prefixMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_not_match: {
      value: cdktf.stringToHclTerraform(struct!.prefixNotMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwsSecurityProfileSecurityRuleWafConditionRequestUriPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwsSecurityProfileSecurityRuleWafConditionRequestUriPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactMatch = this._exactMatch;
    }
    if (this._exactNotMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactNotMatch = this._exactNotMatch;
    }
    if (this._pireRegexMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.pireRegexMatch = this._pireRegexMatch;
    }
    if (this._pireRegexNotMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.pireRegexNotMatch = this._pireRegexNotMatch;
    }
    if (this._prefixMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixMatch = this._prefixMatch;
    }
    if (this._prefixNotMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixNotMatch = this._prefixNotMatch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwsSecurityProfileSecurityRuleWafConditionRequestUriPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactMatch = undefined;
      this._exactNotMatch = undefined;
      this._pireRegexMatch = undefined;
      this._pireRegexNotMatch = undefined;
      this._prefixMatch = undefined;
      this._prefixNotMatch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactMatch = value.exactMatch;
      this._exactNotMatch = value.exactNotMatch;
      this._pireRegexMatch = value.pireRegexMatch;
      this._pireRegexNotMatch = value.pireRegexNotMatch;
      this._prefixMatch = value.prefixMatch;
      this._prefixNotMatch = value.prefixNotMatch;
    }
  }

  // exact_match - computed: false, optional: true, required: false
  private _exactMatch?: string; 
  public get exactMatch() {
    return this.getStringAttribute('exact_match');
  }
  public set exactMatch(value: string) {
    this._exactMatch = value;
  }
  public resetExactMatch() {
    this._exactMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactMatchInput() {
    return this._exactMatch;
  }

  // exact_not_match - computed: false, optional: true, required: false
  private _exactNotMatch?: string; 
  public get exactNotMatch() {
    return this.getStringAttribute('exact_not_match');
  }
  public set exactNotMatch(value: string) {
    this._exactNotMatch = value;
  }
  public resetExactNotMatch() {
    this._exactNotMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactNotMatchInput() {
    return this._exactNotMatch;
  }

  // pire_regex_match - computed: false, optional: true, required: false
  private _pireRegexMatch?: string; 
  public get pireRegexMatch() {
    return this.getStringAttribute('pire_regex_match');
  }
  public set pireRegexMatch(value: string) {
    this._pireRegexMatch = value;
  }
  public resetPireRegexMatch() {
    this._pireRegexMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pireRegexMatchInput() {
    return this._pireRegexMatch;
  }

  // pire_regex_not_match - computed: false, optional: true, required: false
  private _pireRegexNotMatch?: string; 
  public get pireRegexNotMatch() {
    return this.getStringAttribute('pire_regex_not_match');
  }
  public set pireRegexNotMatch(value: string) {
    this._pireRegexNotMatch = value;
  }
  public resetPireRegexNotMatch() {
    this._pireRegexNotMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pireRegexNotMatchInput() {
    return this._pireRegexNotMatch;
  }

  // prefix_match - computed: false, optional: true, required: false
  private _prefixMatch?: string; 
  public get prefixMatch() {
    return this.getStringAttribute('prefix_match');
  }
  public set prefixMatch(value: string) {
    this._prefixMatch = value;
  }
  public resetPrefixMatch() {
    this._prefixMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixMatchInput() {
    return this._prefixMatch;
  }

  // prefix_not_match - computed: false, optional: true, required: false
  private _prefixNotMatch?: string; 
  public get prefixNotMatch() {
    return this.getStringAttribute('prefix_not_match');
  }
  public set prefixNotMatch(value: string) {
    this._prefixNotMatch = value;
  }
  public resetPrefixNotMatch() {
    this._prefixNotMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixNotMatchInput() {
    return this._prefixNotMatch;
  }
}
export interface SwsSecurityProfileSecurityRuleWafConditionRequestUriQueriesValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#exact_match SwsSecurityProfile#exact_match}
  */
  readonly exactMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#exact_not_match SwsSecurityProfile#exact_not_match}
  */
  readonly exactNotMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#pire_regex_match SwsSecurityProfile#pire_regex_match}
  */
  readonly pireRegexMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#pire_regex_not_match SwsSecurityProfile#pire_regex_not_match}
  */
  readonly pireRegexNotMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#prefix_match SwsSecurityProfile#prefix_match}
  */
  readonly prefixMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#prefix_not_match SwsSecurityProfile#prefix_not_match}
  */
  readonly prefixNotMatch?: string;
}

export function swsSecurityProfileSecurityRuleWafConditionRequestUriQueriesValueToTerraform(struct?: SwsSecurityProfileSecurityRuleWafConditionRequestUriQueriesValueOutputReference | SwsSecurityProfileSecurityRuleWafConditionRequestUriQueriesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_match: cdktf.stringToTerraform(struct!.exactMatch),
    exact_not_match: cdktf.stringToTerraform(struct!.exactNotMatch),
    pire_regex_match: cdktf.stringToTerraform(struct!.pireRegexMatch),
    pire_regex_not_match: cdktf.stringToTerraform(struct!.pireRegexNotMatch),
    prefix_match: cdktf.stringToTerraform(struct!.prefixMatch),
    prefix_not_match: cdktf.stringToTerraform(struct!.prefixNotMatch),
  }
}


export function swsSecurityProfileSecurityRuleWafConditionRequestUriQueriesValueToHclTerraform(struct?: SwsSecurityProfileSecurityRuleWafConditionRequestUriQueriesValueOutputReference | SwsSecurityProfileSecurityRuleWafConditionRequestUriQueriesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_match: {
      value: cdktf.stringToHclTerraform(struct!.exactMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exact_not_match: {
      value: cdktf.stringToHclTerraform(struct!.exactNotMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pire_regex_match: {
      value: cdktf.stringToHclTerraform(struct!.pireRegexMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pire_regex_not_match: {
      value: cdktf.stringToHclTerraform(struct!.pireRegexNotMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_match: {
      value: cdktf.stringToHclTerraform(struct!.prefixMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_not_match: {
      value: cdktf.stringToHclTerraform(struct!.prefixNotMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwsSecurityProfileSecurityRuleWafConditionRequestUriQueriesValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwsSecurityProfileSecurityRuleWafConditionRequestUriQueriesValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactMatch = this._exactMatch;
    }
    if (this._exactNotMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactNotMatch = this._exactNotMatch;
    }
    if (this._pireRegexMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.pireRegexMatch = this._pireRegexMatch;
    }
    if (this._pireRegexNotMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.pireRegexNotMatch = this._pireRegexNotMatch;
    }
    if (this._prefixMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixMatch = this._prefixMatch;
    }
    if (this._prefixNotMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixNotMatch = this._prefixNotMatch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwsSecurityProfileSecurityRuleWafConditionRequestUriQueriesValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactMatch = undefined;
      this._exactNotMatch = undefined;
      this._pireRegexMatch = undefined;
      this._pireRegexNotMatch = undefined;
      this._prefixMatch = undefined;
      this._prefixNotMatch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactMatch = value.exactMatch;
      this._exactNotMatch = value.exactNotMatch;
      this._pireRegexMatch = value.pireRegexMatch;
      this._pireRegexNotMatch = value.pireRegexNotMatch;
      this._prefixMatch = value.prefixMatch;
      this._prefixNotMatch = value.prefixNotMatch;
    }
  }

  // exact_match - computed: false, optional: true, required: false
  private _exactMatch?: string; 
  public get exactMatch() {
    return this.getStringAttribute('exact_match');
  }
  public set exactMatch(value: string) {
    this._exactMatch = value;
  }
  public resetExactMatch() {
    this._exactMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactMatchInput() {
    return this._exactMatch;
  }

  // exact_not_match - computed: false, optional: true, required: false
  private _exactNotMatch?: string; 
  public get exactNotMatch() {
    return this.getStringAttribute('exact_not_match');
  }
  public set exactNotMatch(value: string) {
    this._exactNotMatch = value;
  }
  public resetExactNotMatch() {
    this._exactNotMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactNotMatchInput() {
    return this._exactNotMatch;
  }

  // pire_regex_match - computed: false, optional: true, required: false
  private _pireRegexMatch?: string; 
  public get pireRegexMatch() {
    return this.getStringAttribute('pire_regex_match');
  }
  public set pireRegexMatch(value: string) {
    this._pireRegexMatch = value;
  }
  public resetPireRegexMatch() {
    this._pireRegexMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pireRegexMatchInput() {
    return this._pireRegexMatch;
  }

  // pire_regex_not_match - computed: false, optional: true, required: false
  private _pireRegexNotMatch?: string; 
  public get pireRegexNotMatch() {
    return this.getStringAttribute('pire_regex_not_match');
  }
  public set pireRegexNotMatch(value: string) {
    this._pireRegexNotMatch = value;
  }
  public resetPireRegexNotMatch() {
    this._pireRegexNotMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pireRegexNotMatchInput() {
    return this._pireRegexNotMatch;
  }

  // prefix_match - computed: false, optional: true, required: false
  private _prefixMatch?: string; 
  public get prefixMatch() {
    return this.getStringAttribute('prefix_match');
  }
  public set prefixMatch(value: string) {
    this._prefixMatch = value;
  }
  public resetPrefixMatch() {
    this._prefixMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixMatchInput() {
    return this._prefixMatch;
  }

  // prefix_not_match - computed: false, optional: true, required: false
  private _prefixNotMatch?: string; 
  public get prefixNotMatch() {
    return this.getStringAttribute('prefix_not_match');
  }
  public set prefixNotMatch(value: string) {
    this._prefixNotMatch = value;
  }
  public resetPrefixNotMatch() {
    this._prefixNotMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixNotMatchInput() {
    return this._prefixNotMatch;
  }
}
export interface SwsSecurityProfileSecurityRuleWafConditionRequestUriQueries {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#key SwsSecurityProfile#key}
  */
  readonly key: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#value SwsSecurityProfile#value}
  */
  readonly value: SwsSecurityProfileSecurityRuleWafConditionRequestUriQueriesValue;
}

export function swsSecurityProfileSecurityRuleWafConditionRequestUriQueriesToTerraform(struct?: SwsSecurityProfileSecurityRuleWafConditionRequestUriQueries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: swsSecurityProfileSecurityRuleWafConditionRequestUriQueriesValueToTerraform(struct!.value),
  }
}


export function swsSecurityProfileSecurityRuleWafConditionRequestUriQueriesToHclTerraform(struct?: SwsSecurityProfileSecurityRuleWafConditionRequestUriQueries | cdktf.IResolvable): any {
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
    value: {
      value: swsSecurityProfileSecurityRuleWafConditionRequestUriQueriesValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "SwsSecurityProfileSecurityRuleWafConditionRequestUriQueriesValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwsSecurityProfileSecurityRuleWafConditionRequestUriQueriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwsSecurityProfileSecurityRuleWafConditionRequestUriQueries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwsSecurityProfileSecurityRuleWafConditionRequestUriQueries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value.internalValue = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value = new SwsSecurityProfileSecurityRuleWafConditionRequestUriQueriesValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: SwsSecurityProfileSecurityRuleWafConditionRequestUriQueriesValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class SwsSecurityProfileSecurityRuleWafConditionRequestUriQueriesList extends cdktf.ComplexList {
  public internalValue? : SwsSecurityProfileSecurityRuleWafConditionRequestUriQueries[] | cdktf.IResolvable

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
  public get(index: number): SwsSecurityProfileSecurityRuleWafConditionRequestUriQueriesOutputReference {
    return new SwsSecurityProfileSecurityRuleWafConditionRequestUriQueriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwsSecurityProfileSecurityRuleWafConditionRequestUri {
  /**
  * path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#path SwsSecurityProfile#path}
  */
  readonly path?: SwsSecurityProfileSecurityRuleWafConditionRequestUriPath;
  /**
  * queries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#queries SwsSecurityProfile#queries}
  */
  readonly queries?: SwsSecurityProfileSecurityRuleWafConditionRequestUriQueries[] | cdktf.IResolvable;
}

export function swsSecurityProfileSecurityRuleWafConditionRequestUriToTerraform(struct?: SwsSecurityProfileSecurityRuleWafConditionRequestUriOutputReference | SwsSecurityProfileSecurityRuleWafConditionRequestUri): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: swsSecurityProfileSecurityRuleWafConditionRequestUriPathToTerraform(struct!.path),
    queries: cdktf.listMapper(swsSecurityProfileSecurityRuleWafConditionRequestUriQueriesToTerraform, true)(struct!.queries),
  }
}


export function swsSecurityProfileSecurityRuleWafConditionRequestUriToHclTerraform(struct?: SwsSecurityProfileSecurityRuleWafConditionRequestUriOutputReference | SwsSecurityProfileSecurityRuleWafConditionRequestUri): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: swsSecurityProfileSecurityRuleWafConditionRequestUriPathToHclTerraform(struct!.path),
      isBlock: true,
      type: "list",
      storageClassType: "SwsSecurityProfileSecurityRuleWafConditionRequestUriPathList",
    },
    queries: {
      value: cdktf.listMapperHcl(swsSecurityProfileSecurityRuleWafConditionRequestUriQueriesToHclTerraform, true)(struct!.queries),
      isBlock: true,
      type: "list",
      storageClassType: "SwsSecurityProfileSecurityRuleWafConditionRequestUriQueriesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwsSecurityProfileSecurityRuleWafConditionRequestUriOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwsSecurityProfileSecurityRuleWafConditionRequestUri | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path?.internalValue;
    }
    if (this._queries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queries = this._queries?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwsSecurityProfileSecurityRuleWafConditionRequestUri | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._path.internalValue = undefined;
      this._queries.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._path.internalValue = value.path;
      this._queries.internalValue = value.queries;
    }
  }

  // path - computed: false, optional: true, required: false
  private _path = new SwsSecurityProfileSecurityRuleWafConditionRequestUriPathOutputReference(this, "path");
  public get path() {
    return this._path;
  }
  public putPath(value: SwsSecurityProfileSecurityRuleWafConditionRequestUriPath) {
    this._path.internalValue = value;
  }
  public resetPath() {
    this._path.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path.internalValue;
  }

  // queries - computed: false, optional: true, required: false
  private _queries = new SwsSecurityProfileSecurityRuleWafConditionRequestUriQueriesList(this, "queries", false);
  public get queries() {
    return this._queries;
  }
  public putQueries(value: SwsSecurityProfileSecurityRuleWafConditionRequestUriQueries[] | cdktf.IResolvable) {
    this._queries.internalValue = value;
  }
  public resetQueries() {
    this._queries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queriesInput() {
    return this._queries.internalValue;
  }
}
export interface SwsSecurityProfileSecurityRuleWafConditionSourceIpGeoIpMatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#locations SwsSecurityProfile#locations}
  */
  readonly locations?: string[];
}

export function swsSecurityProfileSecurityRuleWafConditionSourceIpGeoIpMatchToTerraform(struct?: SwsSecurityProfileSecurityRuleWafConditionSourceIpGeoIpMatchOutputReference | SwsSecurityProfileSecurityRuleWafConditionSourceIpGeoIpMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    locations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.locations),
  }
}


export function swsSecurityProfileSecurityRuleWafConditionSourceIpGeoIpMatchToHclTerraform(struct?: SwsSecurityProfileSecurityRuleWafConditionSourceIpGeoIpMatchOutputReference | SwsSecurityProfileSecurityRuleWafConditionSourceIpGeoIpMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    locations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.locations),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwsSecurityProfileSecurityRuleWafConditionSourceIpGeoIpMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwsSecurityProfileSecurityRuleWafConditionSourceIpGeoIpMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._locations !== undefined) {
      hasAnyValues = true;
      internalValueResult.locations = this._locations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwsSecurityProfileSecurityRuleWafConditionSourceIpGeoIpMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._locations = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._locations = value.locations;
    }
  }

  // locations - computed: false, optional: true, required: false
  private _locations?: string[]; 
  public get locations() {
    return this.getListAttribute('locations');
  }
  public set locations(value: string[]) {
    this._locations = value;
  }
  public resetLocations() {
    this._locations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationsInput() {
    return this._locations;
  }
}
export interface SwsSecurityProfileSecurityRuleWafConditionSourceIpGeoIpNotMatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#locations SwsSecurityProfile#locations}
  */
  readonly locations?: string[];
}

export function swsSecurityProfileSecurityRuleWafConditionSourceIpGeoIpNotMatchToTerraform(struct?: SwsSecurityProfileSecurityRuleWafConditionSourceIpGeoIpNotMatchOutputReference | SwsSecurityProfileSecurityRuleWafConditionSourceIpGeoIpNotMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    locations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.locations),
  }
}


export function swsSecurityProfileSecurityRuleWafConditionSourceIpGeoIpNotMatchToHclTerraform(struct?: SwsSecurityProfileSecurityRuleWafConditionSourceIpGeoIpNotMatchOutputReference | SwsSecurityProfileSecurityRuleWafConditionSourceIpGeoIpNotMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    locations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.locations),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwsSecurityProfileSecurityRuleWafConditionSourceIpGeoIpNotMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwsSecurityProfileSecurityRuleWafConditionSourceIpGeoIpNotMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._locations !== undefined) {
      hasAnyValues = true;
      internalValueResult.locations = this._locations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwsSecurityProfileSecurityRuleWafConditionSourceIpGeoIpNotMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._locations = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._locations = value.locations;
    }
  }

  // locations - computed: false, optional: true, required: false
  private _locations?: string[]; 
  public get locations() {
    return this.getListAttribute('locations');
  }
  public set locations(value: string[]) {
    this._locations = value;
  }
  public resetLocations() {
    this._locations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationsInput() {
    return this._locations;
  }
}
export interface SwsSecurityProfileSecurityRuleWafConditionSourceIpIpRangesMatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#ip_ranges SwsSecurityProfile#ip_ranges}
  */
  readonly ipRanges?: string[];
}

export function swsSecurityProfileSecurityRuleWafConditionSourceIpIpRangesMatchToTerraform(struct?: SwsSecurityProfileSecurityRuleWafConditionSourceIpIpRangesMatchOutputReference | SwsSecurityProfileSecurityRuleWafConditionSourceIpIpRangesMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipRanges),
  }
}


export function swsSecurityProfileSecurityRuleWafConditionSourceIpIpRangesMatchToHclTerraform(struct?: SwsSecurityProfileSecurityRuleWafConditionSourceIpIpRangesMatchOutputReference | SwsSecurityProfileSecurityRuleWafConditionSourceIpIpRangesMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_ranges: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipRanges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwsSecurityProfileSecurityRuleWafConditionSourceIpIpRangesMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwsSecurityProfileSecurityRuleWafConditionSourceIpIpRangesMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRanges = this._ipRanges;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwsSecurityProfileSecurityRuleWafConditionSourceIpIpRangesMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipRanges = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipRanges = value.ipRanges;
    }
  }

  // ip_ranges - computed: false, optional: true, required: false
  private _ipRanges?: string[]; 
  public get ipRanges() {
    return this.getListAttribute('ip_ranges');
  }
  public set ipRanges(value: string[]) {
    this._ipRanges = value;
  }
  public resetIpRanges() {
    this._ipRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRangesInput() {
    return this._ipRanges;
  }
}
export interface SwsSecurityProfileSecurityRuleWafConditionSourceIpIpRangesNotMatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#ip_ranges SwsSecurityProfile#ip_ranges}
  */
  readonly ipRanges?: string[];
}

export function swsSecurityProfileSecurityRuleWafConditionSourceIpIpRangesNotMatchToTerraform(struct?: SwsSecurityProfileSecurityRuleWafConditionSourceIpIpRangesNotMatchOutputReference | SwsSecurityProfileSecurityRuleWafConditionSourceIpIpRangesNotMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipRanges),
  }
}


export function swsSecurityProfileSecurityRuleWafConditionSourceIpIpRangesNotMatchToHclTerraform(struct?: SwsSecurityProfileSecurityRuleWafConditionSourceIpIpRangesNotMatchOutputReference | SwsSecurityProfileSecurityRuleWafConditionSourceIpIpRangesNotMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_ranges: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipRanges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwsSecurityProfileSecurityRuleWafConditionSourceIpIpRangesNotMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwsSecurityProfileSecurityRuleWafConditionSourceIpIpRangesNotMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRanges = this._ipRanges;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwsSecurityProfileSecurityRuleWafConditionSourceIpIpRangesNotMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipRanges = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipRanges = value.ipRanges;
    }
  }

  // ip_ranges - computed: false, optional: true, required: false
  private _ipRanges?: string[]; 
  public get ipRanges() {
    return this.getListAttribute('ip_ranges');
  }
  public set ipRanges(value: string[]) {
    this._ipRanges = value;
  }
  public resetIpRanges() {
    this._ipRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRangesInput() {
    return this._ipRanges;
  }
}
export interface SwsSecurityProfileSecurityRuleWafConditionSourceIp {
  /**
  * geo_ip_match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#geo_ip_match SwsSecurityProfile#geo_ip_match}
  */
  readonly geoIpMatch?: SwsSecurityProfileSecurityRuleWafConditionSourceIpGeoIpMatch;
  /**
  * geo_ip_not_match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#geo_ip_not_match SwsSecurityProfile#geo_ip_not_match}
  */
  readonly geoIpNotMatch?: SwsSecurityProfileSecurityRuleWafConditionSourceIpGeoIpNotMatch;
  /**
  * ip_ranges_match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#ip_ranges_match SwsSecurityProfile#ip_ranges_match}
  */
  readonly ipRangesMatch?: SwsSecurityProfileSecurityRuleWafConditionSourceIpIpRangesMatch;
  /**
  * ip_ranges_not_match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#ip_ranges_not_match SwsSecurityProfile#ip_ranges_not_match}
  */
  readonly ipRangesNotMatch?: SwsSecurityProfileSecurityRuleWafConditionSourceIpIpRangesNotMatch;
}

export function swsSecurityProfileSecurityRuleWafConditionSourceIpToTerraform(struct?: SwsSecurityProfileSecurityRuleWafConditionSourceIpOutputReference | SwsSecurityProfileSecurityRuleWafConditionSourceIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    geo_ip_match: swsSecurityProfileSecurityRuleWafConditionSourceIpGeoIpMatchToTerraform(struct!.geoIpMatch),
    geo_ip_not_match: swsSecurityProfileSecurityRuleWafConditionSourceIpGeoIpNotMatchToTerraform(struct!.geoIpNotMatch),
    ip_ranges_match: swsSecurityProfileSecurityRuleWafConditionSourceIpIpRangesMatchToTerraform(struct!.ipRangesMatch),
    ip_ranges_not_match: swsSecurityProfileSecurityRuleWafConditionSourceIpIpRangesNotMatchToTerraform(struct!.ipRangesNotMatch),
  }
}


export function swsSecurityProfileSecurityRuleWafConditionSourceIpToHclTerraform(struct?: SwsSecurityProfileSecurityRuleWafConditionSourceIpOutputReference | SwsSecurityProfileSecurityRuleWafConditionSourceIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    geo_ip_match: {
      value: swsSecurityProfileSecurityRuleWafConditionSourceIpGeoIpMatchToHclTerraform(struct!.geoIpMatch),
      isBlock: true,
      type: "list",
      storageClassType: "SwsSecurityProfileSecurityRuleWafConditionSourceIpGeoIpMatchList",
    },
    geo_ip_not_match: {
      value: swsSecurityProfileSecurityRuleWafConditionSourceIpGeoIpNotMatchToHclTerraform(struct!.geoIpNotMatch),
      isBlock: true,
      type: "list",
      storageClassType: "SwsSecurityProfileSecurityRuleWafConditionSourceIpGeoIpNotMatchList",
    },
    ip_ranges_match: {
      value: swsSecurityProfileSecurityRuleWafConditionSourceIpIpRangesMatchToHclTerraform(struct!.ipRangesMatch),
      isBlock: true,
      type: "list",
      storageClassType: "SwsSecurityProfileSecurityRuleWafConditionSourceIpIpRangesMatchList",
    },
    ip_ranges_not_match: {
      value: swsSecurityProfileSecurityRuleWafConditionSourceIpIpRangesNotMatchToHclTerraform(struct!.ipRangesNotMatch),
      isBlock: true,
      type: "list",
      storageClassType: "SwsSecurityProfileSecurityRuleWafConditionSourceIpIpRangesNotMatchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwsSecurityProfileSecurityRuleWafConditionSourceIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwsSecurityProfileSecurityRuleWafConditionSourceIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._geoIpMatch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoIpMatch = this._geoIpMatch?.internalValue;
    }
    if (this._geoIpNotMatch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoIpNotMatch = this._geoIpNotMatch?.internalValue;
    }
    if (this._ipRangesMatch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRangesMatch = this._ipRangesMatch?.internalValue;
    }
    if (this._ipRangesNotMatch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRangesNotMatch = this._ipRangesNotMatch?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwsSecurityProfileSecurityRuleWafConditionSourceIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._geoIpMatch.internalValue = undefined;
      this._geoIpNotMatch.internalValue = undefined;
      this._ipRangesMatch.internalValue = undefined;
      this._ipRangesNotMatch.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._geoIpMatch.internalValue = value.geoIpMatch;
      this._geoIpNotMatch.internalValue = value.geoIpNotMatch;
      this._ipRangesMatch.internalValue = value.ipRangesMatch;
      this._ipRangesNotMatch.internalValue = value.ipRangesNotMatch;
    }
  }

  // geo_ip_match - computed: false, optional: true, required: false
  private _geoIpMatch = new SwsSecurityProfileSecurityRuleWafConditionSourceIpGeoIpMatchOutputReference(this, "geo_ip_match");
  public get geoIpMatch() {
    return this._geoIpMatch;
  }
  public putGeoIpMatch(value: SwsSecurityProfileSecurityRuleWafConditionSourceIpGeoIpMatch) {
    this._geoIpMatch.internalValue = value;
  }
  public resetGeoIpMatch() {
    this._geoIpMatch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoIpMatchInput() {
    return this._geoIpMatch.internalValue;
  }

  // geo_ip_not_match - computed: false, optional: true, required: false
  private _geoIpNotMatch = new SwsSecurityProfileSecurityRuleWafConditionSourceIpGeoIpNotMatchOutputReference(this, "geo_ip_not_match");
  public get geoIpNotMatch() {
    return this._geoIpNotMatch;
  }
  public putGeoIpNotMatch(value: SwsSecurityProfileSecurityRuleWafConditionSourceIpGeoIpNotMatch) {
    this._geoIpNotMatch.internalValue = value;
  }
  public resetGeoIpNotMatch() {
    this._geoIpNotMatch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoIpNotMatchInput() {
    return this._geoIpNotMatch.internalValue;
  }

  // ip_ranges_match - computed: false, optional: true, required: false
  private _ipRangesMatch = new SwsSecurityProfileSecurityRuleWafConditionSourceIpIpRangesMatchOutputReference(this, "ip_ranges_match");
  public get ipRangesMatch() {
    return this._ipRangesMatch;
  }
  public putIpRangesMatch(value: SwsSecurityProfileSecurityRuleWafConditionSourceIpIpRangesMatch) {
    this._ipRangesMatch.internalValue = value;
  }
  public resetIpRangesMatch() {
    this._ipRangesMatch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRangesMatchInput() {
    return this._ipRangesMatch.internalValue;
  }

  // ip_ranges_not_match - computed: false, optional: true, required: false
  private _ipRangesNotMatch = new SwsSecurityProfileSecurityRuleWafConditionSourceIpIpRangesNotMatchOutputReference(this, "ip_ranges_not_match");
  public get ipRangesNotMatch() {
    return this._ipRangesNotMatch;
  }
  public putIpRangesNotMatch(value: SwsSecurityProfileSecurityRuleWafConditionSourceIpIpRangesNotMatch) {
    this._ipRangesNotMatch.internalValue = value;
  }
  public resetIpRangesNotMatch() {
    this._ipRangesNotMatch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRangesNotMatchInput() {
    return this._ipRangesNotMatch.internalValue;
  }
}
export interface SwsSecurityProfileSecurityRuleWafCondition {
  /**
  * authority block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#authority SwsSecurityProfile#authority}
  */
  readonly authority?: SwsSecurityProfileSecurityRuleWafConditionAuthority;
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#headers SwsSecurityProfile#headers}
  */
  readonly headers?: SwsSecurityProfileSecurityRuleWafConditionHeaders[] | cdktf.IResolvable;
  /**
  * http_method block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#http_method SwsSecurityProfile#http_method}
  */
  readonly httpMethod?: SwsSecurityProfileSecurityRuleWafConditionHttpMethod;
  /**
  * request_uri block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#request_uri SwsSecurityProfile#request_uri}
  */
  readonly requestUri?: SwsSecurityProfileSecurityRuleWafConditionRequestUri;
  /**
  * source_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#source_ip SwsSecurityProfile#source_ip}
  */
  readonly sourceIp?: SwsSecurityProfileSecurityRuleWafConditionSourceIp;
}

export function swsSecurityProfileSecurityRuleWafConditionToTerraform(struct?: SwsSecurityProfileSecurityRuleWafConditionOutputReference | SwsSecurityProfileSecurityRuleWafCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authority: swsSecurityProfileSecurityRuleWafConditionAuthorityToTerraform(struct!.authority),
    headers: cdktf.listMapper(swsSecurityProfileSecurityRuleWafConditionHeadersToTerraform, true)(struct!.headers),
    http_method: swsSecurityProfileSecurityRuleWafConditionHttpMethodToTerraform(struct!.httpMethod),
    request_uri: swsSecurityProfileSecurityRuleWafConditionRequestUriToTerraform(struct!.requestUri),
    source_ip: swsSecurityProfileSecurityRuleWafConditionSourceIpToTerraform(struct!.sourceIp),
  }
}


export function swsSecurityProfileSecurityRuleWafConditionToHclTerraform(struct?: SwsSecurityProfileSecurityRuleWafConditionOutputReference | SwsSecurityProfileSecurityRuleWafCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authority: {
      value: swsSecurityProfileSecurityRuleWafConditionAuthorityToHclTerraform(struct!.authority),
      isBlock: true,
      type: "list",
      storageClassType: "SwsSecurityProfileSecurityRuleWafConditionAuthorityList",
    },
    headers: {
      value: cdktf.listMapperHcl(swsSecurityProfileSecurityRuleWafConditionHeadersToHclTerraform, true)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "SwsSecurityProfileSecurityRuleWafConditionHeadersList",
    },
    http_method: {
      value: swsSecurityProfileSecurityRuleWafConditionHttpMethodToHclTerraform(struct!.httpMethod),
      isBlock: true,
      type: "list",
      storageClassType: "SwsSecurityProfileSecurityRuleWafConditionHttpMethodList",
    },
    request_uri: {
      value: swsSecurityProfileSecurityRuleWafConditionRequestUriToHclTerraform(struct!.requestUri),
      isBlock: true,
      type: "list",
      storageClassType: "SwsSecurityProfileSecurityRuleWafConditionRequestUriList",
    },
    source_ip: {
      value: swsSecurityProfileSecurityRuleWafConditionSourceIpToHclTerraform(struct!.sourceIp),
      isBlock: true,
      type: "list",
      storageClassType: "SwsSecurityProfileSecurityRuleWafConditionSourceIpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwsSecurityProfileSecurityRuleWafConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwsSecurityProfileSecurityRuleWafCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authority?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authority = this._authority?.internalValue;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._httpMethod?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpMethod = this._httpMethod?.internalValue;
    }
    if (this._requestUri?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestUri = this._requestUri?.internalValue;
    }
    if (this._sourceIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIp = this._sourceIp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwsSecurityProfileSecurityRuleWafCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authority.internalValue = undefined;
      this._headers.internalValue = undefined;
      this._httpMethod.internalValue = undefined;
      this._requestUri.internalValue = undefined;
      this._sourceIp.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authority.internalValue = value.authority;
      this._headers.internalValue = value.headers;
      this._httpMethod.internalValue = value.httpMethod;
      this._requestUri.internalValue = value.requestUri;
      this._sourceIp.internalValue = value.sourceIp;
    }
  }

  // authority - computed: false, optional: true, required: false
  private _authority = new SwsSecurityProfileSecurityRuleWafConditionAuthorityOutputReference(this, "authority");
  public get authority() {
    return this._authority;
  }
  public putAuthority(value: SwsSecurityProfileSecurityRuleWafConditionAuthority) {
    this._authority.internalValue = value;
  }
  public resetAuthority() {
    this._authority.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorityInput() {
    return this._authority.internalValue;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new SwsSecurityProfileSecurityRuleWafConditionHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: SwsSecurityProfileSecurityRuleWafConditionHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // http_method - computed: false, optional: true, required: false
  private _httpMethod = new SwsSecurityProfileSecurityRuleWafConditionHttpMethodOutputReference(this, "http_method");
  public get httpMethod() {
    return this._httpMethod;
  }
  public putHttpMethod(value: SwsSecurityProfileSecurityRuleWafConditionHttpMethod) {
    this._httpMethod.internalValue = value;
  }
  public resetHttpMethod() {
    this._httpMethod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMethodInput() {
    return this._httpMethod.internalValue;
  }

  // request_uri - computed: false, optional: true, required: false
  private _requestUri = new SwsSecurityProfileSecurityRuleWafConditionRequestUriOutputReference(this, "request_uri");
  public get requestUri() {
    return this._requestUri;
  }
  public putRequestUri(value: SwsSecurityProfileSecurityRuleWafConditionRequestUri) {
    this._requestUri.internalValue = value;
  }
  public resetRequestUri() {
    this._requestUri.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestUriInput() {
    return this._requestUri.internalValue;
  }

  // source_ip - computed: false, optional: true, required: false
  private _sourceIp = new SwsSecurityProfileSecurityRuleWafConditionSourceIpOutputReference(this, "source_ip");
  public get sourceIp() {
    return this._sourceIp;
  }
  public putSourceIp(value: SwsSecurityProfileSecurityRuleWafConditionSourceIp) {
    this._sourceIp.internalValue = value;
  }
  public resetSourceIp() {
    this._sourceIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpInput() {
    return this._sourceIp.internalValue;
  }
}
export interface SwsSecurityProfileSecurityRuleWaf {
  /**
  * Mode of protection. Possible values: `FULL` (full protection means that the traffic will be checked based on ML models and behavioral analysis, with suspicious requests being sent to SmartCaptcha) or `API` (API protection means checking the traffic based on ML models and behavioral analysis without sending suspicious requests to SmartCaptcha. The suspicious requests will be blocked).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#mode SwsSecurityProfile#mode}
  */
  readonly mode?: string;
  /**
  * ID of WAF profile to use in this rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#waf_profile_id SwsSecurityProfile#waf_profile_id}
  */
  readonly wafProfileId: string;
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#condition SwsSecurityProfile#condition}
  */
  readonly condition?: SwsSecurityProfileSecurityRuleWafCondition;
}

export function swsSecurityProfileSecurityRuleWafToTerraform(struct?: SwsSecurityProfileSecurityRuleWafOutputReference | SwsSecurityProfileSecurityRuleWaf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    waf_profile_id: cdktf.stringToTerraform(struct!.wafProfileId),
    condition: swsSecurityProfileSecurityRuleWafConditionToTerraform(struct!.condition),
  }
}


export function swsSecurityProfileSecurityRuleWafToHclTerraform(struct?: SwsSecurityProfileSecurityRuleWafOutputReference | SwsSecurityProfileSecurityRuleWaf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    waf_profile_id: {
      value: cdktf.stringToHclTerraform(struct!.wafProfileId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    condition: {
      value: swsSecurityProfileSecurityRuleWafConditionToHclTerraform(struct!.condition),
      isBlock: true,
      type: "list",
      storageClassType: "SwsSecurityProfileSecurityRuleWafConditionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwsSecurityProfileSecurityRuleWafOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwsSecurityProfileSecurityRuleWaf | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._wafProfileId !== undefined) {
      hasAnyValues = true;
      internalValueResult.wafProfileId = this._wafProfileId;
    }
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwsSecurityProfileSecurityRuleWaf | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mode = undefined;
      this._wafProfileId = undefined;
      this._condition.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mode = value.mode;
      this._wafProfileId = value.wafProfileId;
      this._condition.internalValue = value.condition;
    }
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // waf_profile_id - computed: false, optional: false, required: true
  private _wafProfileId?: string; 
  public get wafProfileId() {
    return this.getStringAttribute('waf_profile_id');
  }
  public set wafProfileId(value: string) {
    this._wafProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wafProfileIdInput() {
    return this._wafProfileId;
  }

  // condition - computed: false, optional: true, required: false
  private _condition = new SwsSecurityProfileSecurityRuleWafConditionOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }
  public putCondition(value: SwsSecurityProfileSecurityRuleWafCondition) {
    this._condition.internalValue = value;
  }
  public resetCondition() {
    this._condition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }
}
export interface SwsSecurityProfileSecurityRule {
  /**
  * Optional description of the rule. 0-512 characters long.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#description SwsSecurityProfile#description}
  */
  readonly description?: string;
  /**
  * This mode allows you to test your security profile or a single rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#dry_run SwsSecurityProfile#dry_run}
  */
  readonly dryRun?: boolean | cdktf.IResolvable;
  /**
  * Name of the rule. The name is unique within the security profile. 1-50 characters long.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#name SwsSecurityProfile#name}
  */
  readonly name?: string;
  /**
  * Determines the priority for checking the incoming traffic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#priority SwsSecurityProfile#priority}
  */
  readonly priority?: number;
  /**
  * rule_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#rule_condition SwsSecurityProfile#rule_condition}
  */
  readonly ruleCondition?: SwsSecurityProfileSecurityRuleRuleCondition;
  /**
  * smart_protection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#smart_protection SwsSecurityProfile#smart_protection}
  */
  readonly smartProtection?: SwsSecurityProfileSecurityRuleSmartProtection;
  /**
  * waf block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#waf SwsSecurityProfile#waf}
  */
  readonly waf?: SwsSecurityProfileSecurityRuleWaf;
}

export function swsSecurityProfileSecurityRuleToTerraform(struct?: SwsSecurityProfileSecurityRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    dry_run: cdktf.booleanToTerraform(struct!.dryRun),
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
    rule_condition: swsSecurityProfileSecurityRuleRuleConditionToTerraform(struct!.ruleCondition),
    smart_protection: swsSecurityProfileSecurityRuleSmartProtectionToTerraform(struct!.smartProtection),
    waf: swsSecurityProfileSecurityRuleWafToTerraform(struct!.waf),
  }
}


export function swsSecurityProfileSecurityRuleToHclTerraform(struct?: SwsSecurityProfileSecurityRule | cdktf.IResolvable): any {
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
    dry_run: {
      value: cdktf.booleanToHclTerraform(struct!.dryRun),
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
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rule_condition: {
      value: swsSecurityProfileSecurityRuleRuleConditionToHclTerraform(struct!.ruleCondition),
      isBlock: true,
      type: "list",
      storageClassType: "SwsSecurityProfileSecurityRuleRuleConditionList",
    },
    smart_protection: {
      value: swsSecurityProfileSecurityRuleSmartProtectionToHclTerraform(struct!.smartProtection),
      isBlock: true,
      type: "list",
      storageClassType: "SwsSecurityProfileSecurityRuleSmartProtectionList",
    },
    waf: {
      value: swsSecurityProfileSecurityRuleWafToHclTerraform(struct!.waf),
      isBlock: true,
      type: "list",
      storageClassType: "SwsSecurityProfileSecurityRuleWafList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwsSecurityProfileSecurityRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwsSecurityProfileSecurityRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._dryRun !== undefined) {
      hasAnyValues = true;
      internalValueResult.dryRun = this._dryRun;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._ruleCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleCondition = this._ruleCondition?.internalValue;
    }
    if (this._smartProtection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.smartProtection = this._smartProtection?.internalValue;
    }
    if (this._waf?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.waf = this._waf?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwsSecurityProfileSecurityRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._dryRun = undefined;
      this._name = undefined;
      this._priority = undefined;
      this._ruleCondition.internalValue = undefined;
      this._smartProtection.internalValue = undefined;
      this._waf.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._dryRun = value.dryRun;
      this._name = value.name;
      this._priority = value.priority;
      this._ruleCondition.internalValue = value.ruleCondition;
      this._smartProtection.internalValue = value.smartProtection;
      this._waf.internalValue = value.waf;
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

  // dry_run - computed: false, optional: true, required: false
  private _dryRun?: boolean | cdktf.IResolvable; 
  public get dryRun() {
    return this.getBooleanAttribute('dry_run');
  }
  public set dryRun(value: boolean | cdktf.IResolvable) {
    this._dryRun = value;
  }
  public resetDryRun() {
    this._dryRun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dryRunInput() {
    return this._dryRun;
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

  // rule_condition - computed: false, optional: true, required: false
  private _ruleCondition = new SwsSecurityProfileSecurityRuleRuleConditionOutputReference(this, "rule_condition");
  public get ruleCondition() {
    return this._ruleCondition;
  }
  public putRuleCondition(value: SwsSecurityProfileSecurityRuleRuleCondition) {
    this._ruleCondition.internalValue = value;
  }
  public resetRuleCondition() {
    this._ruleCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleConditionInput() {
    return this._ruleCondition.internalValue;
  }

  // smart_protection - computed: false, optional: true, required: false
  private _smartProtection = new SwsSecurityProfileSecurityRuleSmartProtectionOutputReference(this, "smart_protection");
  public get smartProtection() {
    return this._smartProtection;
  }
  public putSmartProtection(value: SwsSecurityProfileSecurityRuleSmartProtection) {
    this._smartProtection.internalValue = value;
  }
  public resetSmartProtection() {
    this._smartProtection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smartProtectionInput() {
    return this._smartProtection.internalValue;
  }

  // waf - computed: false, optional: true, required: false
  private _waf = new SwsSecurityProfileSecurityRuleWafOutputReference(this, "waf");
  public get waf() {
    return this._waf;
  }
  public putWaf(value: SwsSecurityProfileSecurityRuleWaf) {
    this._waf.internalValue = value;
  }
  public resetWaf() {
    this._waf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wafInput() {
    return this._waf.internalValue;
  }
}

export class SwsSecurityProfileSecurityRuleList extends cdktf.ComplexList {
  public internalValue? : SwsSecurityProfileSecurityRule[] | cdktf.IResolvable

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
  public get(index: number): SwsSecurityProfileSecurityRuleOutputReference {
    return new SwsSecurityProfileSecurityRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwsSecurityProfileTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#create SwsSecurityProfile#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#delete SwsSecurityProfile#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#read SwsSecurityProfile#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#update SwsSecurityProfile#update}
  */
  readonly update?: string;
}

export function swsSecurityProfileTimeoutsToTerraform(struct?: SwsSecurityProfileTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function swsSecurityProfileTimeoutsToHclTerraform(struct?: SwsSecurityProfileTimeouts | cdktf.IResolvable): any {
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
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
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

export class SwsSecurityProfileTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SwsSecurityProfileTimeouts | cdktf.IResolvable | undefined {
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
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwsSecurityProfileTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
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
      this._read = value.read;
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

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
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
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile yandex_sws_security_profile}
*/
export class SwsSecurityProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_sws_security_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwsSecurityProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwsSecurityProfile to import
  * @param importFromId The id of the existing SwsSecurityProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwsSecurityProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_sws_security_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/sws_security_profile yandex_sws_security_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwsSecurityProfileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SwsSecurityProfileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'yandex_sws_security_profile',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.169.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._advancedRateLimiterProfileId = config.advancedRateLimiterProfileId;
    this._captchaId = config.captchaId;
    this._cloudId = config.cloudId;
    this._defaultAction = config.defaultAction;
    this._description = config.description;
    this._folderId = config.folderId;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._analyzeRequestBody.internalValue = config.analyzeRequestBody;
    this._securityRule.internalValue = config.securityRule;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // advanced_rate_limiter_profile_id - computed: false, optional: true, required: false
  private _advancedRateLimiterProfileId?: string; 
  public get advancedRateLimiterProfileId() {
    return this.getStringAttribute('advanced_rate_limiter_profile_id');
  }
  public set advancedRateLimiterProfileId(value: string) {
    this._advancedRateLimiterProfileId = value;
  }
  public resetAdvancedRateLimiterProfileId() {
    this._advancedRateLimiterProfileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedRateLimiterProfileIdInput() {
    return this._advancedRateLimiterProfileId;
  }

  // captcha_id - computed: false, optional: true, required: false
  private _captchaId?: string; 
  public get captchaId() {
    return this.getStringAttribute('captcha_id');
  }
  public set captchaId(value: string) {
    this._captchaId = value;
  }
  public resetCaptchaId() {
    this._captchaId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captchaIdInput() {
    return this._captchaId;
  }

  // cloud_id - computed: true, optional: true, required: false
  private _cloudId?: string; 
  public get cloudId() {
    return this.getStringAttribute('cloud_id');
  }
  public set cloudId(value: string) {
    this._cloudId = value;
  }
  public resetCloudId() {
    this._cloudId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudIdInput() {
    return this._cloudId;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // default_action - computed: false, optional: true, required: false
  private _defaultAction?: string; 
  public get defaultAction() {
    return this.getStringAttribute('default_action');
  }
  public set defaultAction(value: string) {
    this._defaultAction = value;
  }
  public resetDefaultAction() {
    this._defaultAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionInput() {
    return this._defaultAction;
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

  // folder_id - computed: true, optional: true, required: false
  private _folderId?: string; 
  public get folderId() {
    return this.getStringAttribute('folder_id');
  }
  public set folderId(value: string) {
    this._folderId = value;
  }
  public resetFolderId() {
    this._folderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderIdInput() {
    return this._folderId;
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

  // analyze_request_body - computed: false, optional: true, required: false
  private _analyzeRequestBody = new SwsSecurityProfileAnalyzeRequestBodyOutputReference(this, "analyze_request_body");
  public get analyzeRequestBody() {
    return this._analyzeRequestBody;
  }
  public putAnalyzeRequestBody(value: SwsSecurityProfileAnalyzeRequestBody) {
    this._analyzeRequestBody.internalValue = value;
  }
  public resetAnalyzeRequestBody() {
    this._analyzeRequestBody.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analyzeRequestBodyInput() {
    return this._analyzeRequestBody.internalValue;
  }

  // security_rule - computed: false, optional: true, required: false
  private _securityRule = new SwsSecurityProfileSecurityRuleList(this, "security_rule", false);
  public get securityRule() {
    return this._securityRule;
  }
  public putSecurityRule(value: SwsSecurityProfileSecurityRule[] | cdktf.IResolvable) {
    this._securityRule.internalValue = value;
  }
  public resetSecurityRule() {
    this._securityRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityRuleInput() {
    return this._securityRule.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SwsSecurityProfileTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SwsSecurityProfileTimeouts) {
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
      advanced_rate_limiter_profile_id: cdktf.stringToTerraform(this._advancedRateLimiterProfileId),
      captcha_id: cdktf.stringToTerraform(this._captchaId),
      cloud_id: cdktf.stringToTerraform(this._cloudId),
      default_action: cdktf.stringToTerraform(this._defaultAction),
      description: cdktf.stringToTerraform(this._description),
      folder_id: cdktf.stringToTerraform(this._folderId),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      analyze_request_body: swsSecurityProfileAnalyzeRequestBodyToTerraform(this._analyzeRequestBody.internalValue),
      security_rule: cdktf.listMapper(swsSecurityProfileSecurityRuleToTerraform, true)(this._securityRule.internalValue),
      timeouts: swsSecurityProfileTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      advanced_rate_limiter_profile_id: {
        value: cdktf.stringToHclTerraform(this._advancedRateLimiterProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      captcha_id: {
        value: cdktf.stringToHclTerraform(this._captchaId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_id: {
        value: cdktf.stringToHclTerraform(this._cloudId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_action: {
        value: cdktf.stringToHclTerraform(this._defaultAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder_id: {
        value: cdktf.stringToHclTerraform(this._folderId),
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
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      analyze_request_body: {
        value: swsSecurityProfileAnalyzeRequestBodyToHclTerraform(this._analyzeRequestBody.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwsSecurityProfileAnalyzeRequestBodyList",
      },
      security_rule: {
        value: cdktf.listMapperHcl(swsSecurityProfileSecurityRuleToHclTerraform, true)(this._securityRule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwsSecurityProfileSecurityRuleList",
      },
      timeouts: {
        value: swsSecurityProfileTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SwsSecurityProfileTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
