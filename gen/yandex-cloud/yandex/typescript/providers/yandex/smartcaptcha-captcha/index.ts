// https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/smartcaptcha_captcha
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SmartcaptchaCaptchaConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of allowed host names, see [Domain validation](https://yandex.cloud/docs/smartcaptcha/concepts/domain-validation).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/smartcaptcha_captcha#allowed_sites SmartcaptchaCaptcha#allowed_sites}
  */
  readonly allowedSites?: string[];
  /**
  * Additional task type of the captcha. Possible values:
  * * `IMAGE_TEXT` - Text recognition: The user has to type a distorted text from the picture into a special field.
  * * `SILHOUETTES` - Silhouettes: The user has to mark several icons from the picture in a particular order.
  * * `KALEIDOSCOPE` - Kaleidoscope: The user has to build a picture from individual parts by shuffling them using a slider.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/smartcaptcha_captcha#challenge_type SmartcaptchaCaptcha#challenge_type}
  */
  readonly challengeType?: string;
  /**
  * The `Cloud ID` which resource belongs to. If it is not provided, the default provider `cloud-id` is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/smartcaptcha_captcha#cloud_id SmartcaptchaCaptcha#cloud_id}
  */
  readonly cloudId?: string;
  /**
  * Complexity of the captcha. Possible values:
  * * `EASY` - High chance to pass pre-check and easy advanced challenge.
  * * `MEDIUM` - Medium chance to pass pre-check and normal advanced challenge.
  * * `HARD` - Little chance to pass pre-check and hard advanced challenge.
  * * `FORCE_HARD` - Impossible to pass pre-check and hard advanced challenge.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/smartcaptcha_captcha#complexity SmartcaptchaCaptcha#complexity}
  */
  readonly complexity?: string;
  /**
  * The `true` value means that resource is protected from accidental deletion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/smartcaptcha_captcha#deletion_protection SmartcaptchaCaptcha#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktf.IResolvable;
  /**
  * The folder identifier that resource belongs to. If it is not provided, the default provider `folder-id` is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/smartcaptcha_captcha#folder_id SmartcaptchaCaptcha#folder_id}
  */
  readonly folderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/smartcaptcha_captcha#id SmartcaptchaCaptcha#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/smartcaptcha_captcha#name SmartcaptchaCaptcha#name}
  */
  readonly name?: string;
  /**
  * Basic check type of the captcha.Possible values:
  * * `CHECKBOX` - User must click the 'I am not a robot' button.
  * * `SLIDER` - User must move the slider from left to right.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/smartcaptcha_captcha#pre_check_type SmartcaptchaCaptcha#pre_check_type}
  */
  readonly preCheckType?: string;
  /**
  * JSON with variables to define the captcha appearance. For more details see generated JSON in cloud console.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/smartcaptcha_captcha#style_json SmartcaptchaCaptcha#style_json}
  */
  readonly styleJson?: string;
  /**
  * Turn off host name check, see [Domain validation](https://yandex.cloud/docs/smartcaptcha/concepts/domain-validation).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/smartcaptcha_captcha#turn_off_hostname_check SmartcaptchaCaptcha#turn_off_hostname_check}
  */
  readonly turnOffHostnameCheck?: boolean | cdktf.IResolvable;
  /**
  * override_variant block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/smartcaptcha_captcha#override_variant SmartcaptchaCaptcha#override_variant}
  */
  readonly overrideVariant?: SmartcaptchaCaptchaOverrideVariant[] | cdktf.IResolvable;
  /**
  * security_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/smartcaptcha_captcha#security_rule SmartcaptchaCaptcha#security_rule}
  */
  readonly securityRule?: SmartcaptchaCaptchaSecurityRule[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/smartcaptcha_captcha#timeouts SmartcaptchaCaptcha#timeouts}
  */
  readonly timeouts?: SmartcaptchaCaptchaTimeouts;
}
export interface SmartcaptchaCaptchaOverrideVariant {
  /**
  * Additional task type of the captcha.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/smartcaptcha_captcha#challenge_type SmartcaptchaCaptcha#challenge_type}
  */
  readonly challengeType?: string;
  /**
  * Complexity of the captcha.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/smartcaptcha_captcha#complexity SmartcaptchaCaptcha#complexity}
  */
  readonly complexity?: string;
  /**
  * Optional description of the rule. 0-512 characters long.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/smartcaptcha_captcha#description SmartcaptchaCaptcha#description}
  */
  readonly description?: string;
  /**
  * Basic check type of the captcha.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/smartcaptcha_captcha#pre_check_type SmartcaptchaCaptcha#pre_check_type}
  */
  readonly preCheckType?: string;
  /**
  * Unique identifier of the variant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/smartcaptcha_captcha#uuid SmartcaptchaCaptcha#uuid}
  */
  readonly uuid?: string;
}

export function smartcaptchaCaptchaOverrideVariantToTerraform(struct?: SmartcaptchaCaptchaOverrideVariant | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    challenge_type: cdktf.stringToTerraform(struct!.challengeType),
    complexity: cdktf.stringToTerraform(struct!.complexity),
    description: cdktf.stringToTerraform(struct!.description),
    pre_check_type: cdktf.stringToTerraform(struct!.preCheckType),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function smartcaptchaCaptchaOverrideVariantToHclTerraform(struct?: SmartcaptchaCaptchaOverrideVariant | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    challenge_type: {
      value: cdktf.stringToHclTerraform(struct!.challengeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    complexity: {
      value: cdktf.stringToHclTerraform(struct!.complexity),
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
    pre_check_type: {
      value: cdktf.stringToHclTerraform(struct!.preCheckType),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SmartcaptchaCaptchaOverrideVariantOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SmartcaptchaCaptchaOverrideVariant | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._challengeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.challengeType = this._challengeType;
    }
    if (this._complexity !== undefined) {
      hasAnyValues = true;
      internalValueResult.complexity = this._complexity;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._preCheckType !== undefined) {
      hasAnyValues = true;
      internalValueResult.preCheckType = this._preCheckType;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SmartcaptchaCaptchaOverrideVariant | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._challengeType = undefined;
      this._complexity = undefined;
      this._description = undefined;
      this._preCheckType = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._challengeType = value.challengeType;
      this._complexity = value.complexity;
      this._description = value.description;
      this._preCheckType = value.preCheckType;
      this._uuid = value.uuid;
    }
  }

  // challenge_type - computed: false, optional: true, required: false
  private _challengeType?: string; 
  public get challengeType() {
    return this.getStringAttribute('challenge_type');
  }
  public set challengeType(value: string) {
    this._challengeType = value;
  }
  public resetChallengeType() {
    this._challengeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get challengeTypeInput() {
    return this._challengeType;
  }

  // complexity - computed: false, optional: true, required: false
  private _complexity?: string; 
  public get complexity() {
    return this.getStringAttribute('complexity');
  }
  public set complexity(value: string) {
    this._complexity = value;
  }
  public resetComplexity() {
    this._complexity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get complexityInput() {
    return this._complexity;
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

  // pre_check_type - computed: false, optional: true, required: false
  private _preCheckType?: string; 
  public get preCheckType() {
    return this.getStringAttribute('pre_check_type');
  }
  public set preCheckType(value: string) {
    this._preCheckType = value;
  }
  public resetPreCheckType() {
    this._preCheckType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preCheckTypeInput() {
    return this._preCheckType;
  }

  // uuid - computed: false, optional: true, required: false
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

export class SmartcaptchaCaptchaOverrideVariantList extends cdktf.ComplexList {
  public internalValue? : SmartcaptchaCaptchaOverrideVariant[] | cdktf.IResolvable

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
  public get(index: number): SmartcaptchaCaptchaOverrideVariantOutputReference {
    return new SmartcaptchaCaptchaOverrideVariantOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SmartcaptchaCaptchaSecurityRuleConditionHeadersValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/smartcaptcha_captcha#exact_match SmartcaptchaCaptcha#exact_match}
  */
  readonly exactMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/smartcaptcha_captcha#exact_not_match SmartcaptchaCaptcha#exact_not_match}
  */
  readonly exactNotMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/smartcaptcha_captcha#pire_regex_match SmartcaptchaCaptcha#pire_regex_match}
  */
  readonly pireRegexMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/smartcaptcha_captcha#pire_regex_not_match SmartcaptchaCaptcha#pire_regex_not_match}
  */
  readonly pireRegexNotMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/smartcaptcha_captcha#prefix_match SmartcaptchaCaptcha#prefix_match}
  */
  readonly prefixMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/smartcaptcha_captcha#prefix_not_match SmartcaptchaCaptcha#prefix_not_match}
  */
  readonly prefixNotMatch?: string;
}

export function smartcaptchaCaptchaSecurityRuleConditionHeadersValueToTerraform(struct?: SmartcaptchaCaptchaSecurityRuleConditionHeadersValueOutputReference | SmartcaptchaCaptchaSecurityRuleConditionHeadersValue): any {
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


export function smartcaptchaCaptchaSecurityRuleConditionHeadersValueToHclTerraform(struct?: SmartcaptchaCaptchaSecurityRuleConditionHeadersValueOutputReference | SmartcaptchaCaptchaSecurityRuleConditionHeadersValue): any {
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

export class SmartcaptchaCaptchaSecurityRuleConditionHeadersValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SmartcaptchaCaptchaSecurityRuleConditionHeadersValue | undefined {
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

  public set internalValue(value: SmartcaptchaCaptchaSecurityRuleConditionHeadersValue | undefined) {
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
export interface SmartcaptchaCaptchaSecurityRuleConditionHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/smartcaptcha_captcha#name SmartcaptchaCaptcha#name}
  */
  readonly name?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/smartcaptcha_captcha#value SmartcaptchaCaptcha#value}
  */
  readonly value: SmartcaptchaCaptchaSecurityRuleConditionHeadersValue;
}

export function smartcaptchaCaptchaSecurityRuleConditionHeadersToTerraform(struct?: SmartcaptchaCaptchaSecurityRuleConditionHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: smartcaptchaCaptchaSecurityRuleConditionHeadersValueToTerraform(struct!.value),
  }
}


export function smartcaptchaCaptchaSecurityRuleConditionHeadersToHclTerraform(struct?: SmartcaptchaCaptchaSecurityRuleConditionHeaders | cdktf.IResolvable): any {
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
      value: smartcaptchaCaptchaSecurityRuleConditionHeadersValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "SmartcaptchaCaptchaSecurityRuleConditionHeadersValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SmartcaptchaCaptchaSecurityRuleConditionHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SmartcaptchaCaptchaSecurityRuleConditionHeaders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SmartcaptchaCaptchaSecurityRuleConditionHeaders | cdktf.IResolvable | undefined) {
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
  private _value = new SmartcaptchaCaptchaSecurityRuleConditionHeadersValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: SmartcaptchaCaptchaSecurityRuleConditionHeadersValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class SmartcaptchaCaptchaSecurityRuleConditionHeadersList extends cdktf.ComplexList {
  public internalValue? : SmartcaptchaCaptchaSecurityRuleConditionHeaders[] | cdktf.IResolvable

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
  public get(index: number): SmartcaptchaCaptchaSecurityRuleConditionHeadersOutputReference {
    return new SmartcaptchaCaptchaSecurityRuleConditionHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SmartcaptchaCaptchaSecurityRuleConditionHostHosts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/smartcaptcha_captcha#exact_match SmartcaptchaCaptcha#exact_match}
  */
  readonly exactMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/smartcaptcha_captcha#exact_not_match SmartcaptchaCaptcha#exact_not_match}
  */
  readonly exactNotMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/smartcaptcha_captcha#pire_regex_match SmartcaptchaCaptcha#pire_regex_match}
  */
  readonly pireRegexMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/smartcaptcha_captcha#pire_regex_not_match SmartcaptchaCaptcha#pire_regex_not_match}
  */
  readonly pireRegexNotMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/smartcaptcha_captcha#prefix_match SmartcaptchaCaptcha#prefix_match}
  */
  readonly prefixMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/smartcaptcha_captcha#prefix_not_match SmartcaptchaCaptcha#prefix_not_match}
  */
  readonly prefixNotMatch?: string;
}

export function smartcaptchaCaptchaSecurityRuleConditionHostHostsToTerraform(struct?: SmartcaptchaCaptchaSecurityRuleConditionHostHosts | cdktf.IResolvable): any {
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


export function smartcaptchaCaptchaSecurityRuleConditionHostHostsToHclTerraform(struct?: SmartcaptchaCaptchaSecurityRuleConditionHostHosts | cdktf.IResolvable): any {
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

export class SmartcaptchaCaptchaSecurityRuleConditionHostHostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SmartcaptchaCaptchaSecurityRuleConditionHostHosts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SmartcaptchaCaptchaSecurityRuleConditionHostHosts | cdktf.IResolvable | undefined) {
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

export class SmartcaptchaCaptchaSecurityRuleConditionHostHostsList extends cdktf.ComplexList {
  public internalValue? : SmartcaptchaCaptchaSecurityRuleConditionHostHosts[] | cdktf.IResolvable

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
  public get(index: number): SmartcaptchaCaptchaSecurityRuleConditionHostHostsOutputReference {
    return new SmartcaptchaCaptchaSecurityRuleConditionHostHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SmartcaptchaCaptchaSecurityRuleConditionHost {
  /**
  * hosts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/smartcaptcha_captcha#hosts SmartcaptchaCaptcha#hosts}
  */
  readonly hosts?: SmartcaptchaCaptchaSecurityRuleConditionHostHosts[] | cdktf.IResolvable;
}

export function smartcaptchaCaptchaSecurityRuleConditionHostToTerraform(struct?: SmartcaptchaCaptchaSecurityRuleConditionHostOutputReference | SmartcaptchaCaptchaSecurityRuleConditionHost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hosts: cdktf.listMapper(smartcaptchaCaptchaSecurityRuleConditionHostHostsToTerraform, true)(struct!.hosts),
  }
}


export function smartcaptchaCaptchaSecurityRuleConditionHostToHclTerraform(struct?: SmartcaptchaCaptchaSecurityRuleConditionHostOutputReference | SmartcaptchaCaptchaSecurityRuleConditionHost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hosts: {
      value: cdktf.listMapperHcl(smartcaptchaCaptchaSecurityRuleConditionHostHostsToHclTerraform, true)(struct!.hosts),
      isBlock: true,
      type: "list",
      storageClassType: "SmartcaptchaCaptchaSecurityRuleConditionHostHostsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SmartcaptchaCaptchaSecurityRuleConditionHostOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SmartcaptchaCaptchaSecurityRuleConditionHost | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hosts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hosts = this._hosts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SmartcaptchaCaptchaSecurityRuleConditionHost | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hosts.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hosts.internalValue = value.hosts;
    }
  }

  // hosts - computed: false, optional: true, required: false
  private _hosts = new SmartcaptchaCaptchaSecurityRuleConditionHostHostsList(this, "hosts", false);
  public get hosts() {
    return this._hosts;
  }
  public putHosts(value: SmartcaptchaCaptchaSecurityRuleConditionHostHosts[] | cdktf.IResolvable) {
    this._hosts.internalValue = value;
  }
  public resetHosts() {
    this._hosts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts.internalValue;
  }
}
export interface SmartcaptchaCaptchaSecurityRuleConditionSourceIpGeoIpMatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/smartcaptcha_captcha#locations SmartcaptchaCaptcha#locations}
  */
  readonly locations?: string[];
}

export function smartcaptchaCaptchaSecurityRuleConditionSourceIpGeoIpMatchToTerraform(struct?: SmartcaptchaCaptchaSecurityRuleConditionSourceIpGeoIpMatchOutputReference | SmartcaptchaCaptchaSecurityRuleConditionSourceIpGeoIpMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    locations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.locations),
  }
}


export function smartcaptchaCaptchaSecurityRuleConditionSourceIpGeoIpMatchToHclTerraform(struct?: SmartcaptchaCaptchaSecurityRuleConditionSourceIpGeoIpMatchOutputReference | SmartcaptchaCaptchaSecurityRuleConditionSourceIpGeoIpMatch): any {
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

export class SmartcaptchaCaptchaSecurityRuleConditionSourceIpGeoIpMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SmartcaptchaCaptchaSecurityRuleConditionSourceIpGeoIpMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._locations !== undefined) {
      hasAnyValues = true;
      internalValueResult.locations = this._locations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SmartcaptchaCaptchaSecurityRuleConditionSourceIpGeoIpMatch | undefined) {
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
export interface SmartcaptchaCaptchaSecurityRuleConditionSourceIpGeoIpNotMatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/smartcaptcha_captcha#locations SmartcaptchaCaptcha#locations}
  */
  readonly locations?: string[];
}

export function smartcaptchaCaptchaSecurityRuleConditionSourceIpGeoIpNotMatchToTerraform(struct?: SmartcaptchaCaptchaSecurityRuleConditionSourceIpGeoIpNotMatchOutputReference | SmartcaptchaCaptchaSecurityRuleConditionSourceIpGeoIpNotMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    locations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.locations),
  }
}


export function smartcaptchaCaptchaSecurityRuleConditionSourceIpGeoIpNotMatchToHclTerraform(struct?: SmartcaptchaCaptchaSecurityRuleConditionSourceIpGeoIpNotMatchOutputReference | SmartcaptchaCaptchaSecurityRuleConditionSourceIpGeoIpNotMatch): any {
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

export class SmartcaptchaCaptchaSecurityRuleConditionSourceIpGeoIpNotMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SmartcaptchaCaptchaSecurityRuleConditionSourceIpGeoIpNotMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._locations !== undefined) {
      hasAnyValues = true;
      internalValueResult.locations = this._locations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SmartcaptchaCaptchaSecurityRuleConditionSourceIpGeoIpNotMatch | undefined) {
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
export interface SmartcaptchaCaptchaSecurityRuleConditionSourceIpIpRangesMatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/smartcaptcha_captcha#ip_ranges SmartcaptchaCaptcha#ip_ranges}
  */
  readonly ipRanges?: string[];
}

export function smartcaptchaCaptchaSecurityRuleConditionSourceIpIpRangesMatchToTerraform(struct?: SmartcaptchaCaptchaSecurityRuleConditionSourceIpIpRangesMatchOutputReference | SmartcaptchaCaptchaSecurityRuleConditionSourceIpIpRangesMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipRanges),
  }
}


export function smartcaptchaCaptchaSecurityRuleConditionSourceIpIpRangesMatchToHclTerraform(struct?: SmartcaptchaCaptchaSecurityRuleConditionSourceIpIpRangesMatchOutputReference | SmartcaptchaCaptchaSecurityRuleConditionSourceIpIpRangesMatch): any {
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

export class SmartcaptchaCaptchaSecurityRuleConditionSourceIpIpRangesMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SmartcaptchaCaptchaSecurityRuleConditionSourceIpIpRangesMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRanges = this._ipRanges;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SmartcaptchaCaptchaSecurityRuleConditionSourceIpIpRangesMatch | undefined) {
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
export interface SmartcaptchaCaptchaSecurityRuleConditionSourceIpIpRangesNotMatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/smartcaptcha_captcha#ip_ranges SmartcaptchaCaptcha#ip_ranges}
  */
  readonly ipRanges?: string[];
}

export function smartcaptchaCaptchaSecurityRuleConditionSourceIpIpRangesNotMatchToTerraform(struct?: SmartcaptchaCaptchaSecurityRuleConditionSourceIpIpRangesNotMatchOutputReference | SmartcaptchaCaptchaSecurityRuleConditionSourceIpIpRangesNotMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipRanges),
  }
}


export function smartcaptchaCaptchaSecurityRuleConditionSourceIpIpRangesNotMatchToHclTerraform(struct?: SmartcaptchaCaptchaSecurityRuleConditionSourceIpIpRangesNotMatchOutputReference | SmartcaptchaCaptchaSecurityRuleConditionSourceIpIpRangesNotMatch): any {
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

export class SmartcaptchaCaptchaSecurityRuleConditionSourceIpIpRangesNotMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SmartcaptchaCaptchaSecurityRuleConditionSourceIpIpRangesNotMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRanges = this._ipRanges;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SmartcaptchaCaptchaSecurityRuleConditionSourceIpIpRangesNotMatch | undefined) {
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
export interface SmartcaptchaCaptchaSecurityRuleConditionSourceIp {
  /**
  * geo_ip_match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/smartcaptcha_captcha#geo_ip_match SmartcaptchaCaptcha#geo_ip_match}
  */
  readonly geoIpMatch?: SmartcaptchaCaptchaSecurityRuleConditionSourceIpGeoIpMatch;
  /**
  * geo_ip_not_match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/smartcaptcha_captcha#geo_ip_not_match SmartcaptchaCaptcha#geo_ip_not_match}
  */
  readonly geoIpNotMatch?: SmartcaptchaCaptchaSecurityRuleConditionSourceIpGeoIpNotMatch;
  /**
  * ip_ranges_match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/smartcaptcha_captcha#ip_ranges_match SmartcaptchaCaptcha#ip_ranges_match}
  */
  readonly ipRangesMatch?: SmartcaptchaCaptchaSecurityRuleConditionSourceIpIpRangesMatch;
  /**
  * ip_ranges_not_match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/smartcaptcha_captcha#ip_ranges_not_match SmartcaptchaCaptcha#ip_ranges_not_match}
  */
  readonly ipRangesNotMatch?: SmartcaptchaCaptchaSecurityRuleConditionSourceIpIpRangesNotMatch;
}

export function smartcaptchaCaptchaSecurityRuleConditionSourceIpToTerraform(struct?: SmartcaptchaCaptchaSecurityRuleConditionSourceIpOutputReference | SmartcaptchaCaptchaSecurityRuleConditionSourceIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    geo_ip_match: smartcaptchaCaptchaSecurityRuleConditionSourceIpGeoIpMatchToTerraform(struct!.geoIpMatch),
    geo_ip_not_match: smartcaptchaCaptchaSecurityRuleConditionSourceIpGeoIpNotMatchToTerraform(struct!.geoIpNotMatch),
    ip_ranges_match: smartcaptchaCaptchaSecurityRuleConditionSourceIpIpRangesMatchToTerraform(struct!.ipRangesMatch),
    ip_ranges_not_match: smartcaptchaCaptchaSecurityRuleConditionSourceIpIpRangesNotMatchToTerraform(struct!.ipRangesNotMatch),
  }
}


export function smartcaptchaCaptchaSecurityRuleConditionSourceIpToHclTerraform(struct?: SmartcaptchaCaptchaSecurityRuleConditionSourceIpOutputReference | SmartcaptchaCaptchaSecurityRuleConditionSourceIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    geo_ip_match: {
      value: smartcaptchaCaptchaSecurityRuleConditionSourceIpGeoIpMatchToHclTerraform(struct!.geoIpMatch),
      isBlock: true,
      type: "list",
      storageClassType: "SmartcaptchaCaptchaSecurityRuleConditionSourceIpGeoIpMatchList",
    },
    geo_ip_not_match: {
      value: smartcaptchaCaptchaSecurityRuleConditionSourceIpGeoIpNotMatchToHclTerraform(struct!.geoIpNotMatch),
      isBlock: true,
      type: "list",
      storageClassType: "SmartcaptchaCaptchaSecurityRuleConditionSourceIpGeoIpNotMatchList",
    },
    ip_ranges_match: {
      value: smartcaptchaCaptchaSecurityRuleConditionSourceIpIpRangesMatchToHclTerraform(struct!.ipRangesMatch),
      isBlock: true,
      type: "list",
      storageClassType: "SmartcaptchaCaptchaSecurityRuleConditionSourceIpIpRangesMatchList",
    },
    ip_ranges_not_match: {
      value: smartcaptchaCaptchaSecurityRuleConditionSourceIpIpRangesNotMatchToHclTerraform(struct!.ipRangesNotMatch),
      isBlock: true,
      type: "list",
      storageClassType: "SmartcaptchaCaptchaSecurityRuleConditionSourceIpIpRangesNotMatchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SmartcaptchaCaptchaSecurityRuleConditionSourceIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SmartcaptchaCaptchaSecurityRuleConditionSourceIp | undefined {
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

  public set internalValue(value: SmartcaptchaCaptchaSecurityRuleConditionSourceIp | undefined) {
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
  private _geoIpMatch = new SmartcaptchaCaptchaSecurityRuleConditionSourceIpGeoIpMatchOutputReference(this, "geo_ip_match");
  public get geoIpMatch() {
    return this._geoIpMatch;
  }
  public putGeoIpMatch(value: SmartcaptchaCaptchaSecurityRuleConditionSourceIpGeoIpMatch) {
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
  private _geoIpNotMatch = new SmartcaptchaCaptchaSecurityRuleConditionSourceIpGeoIpNotMatchOutputReference(this, "geo_ip_not_match");
  public get geoIpNotMatch() {
    return this._geoIpNotMatch;
  }
  public putGeoIpNotMatch(value: SmartcaptchaCaptchaSecurityRuleConditionSourceIpGeoIpNotMatch) {
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
  private _ipRangesMatch = new SmartcaptchaCaptchaSecurityRuleConditionSourceIpIpRangesMatchOutputReference(this, "ip_ranges_match");
  public get ipRangesMatch() {
    return this._ipRangesMatch;
  }
  public putIpRangesMatch(value: SmartcaptchaCaptchaSecurityRuleConditionSourceIpIpRangesMatch) {
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
  private _ipRangesNotMatch = new SmartcaptchaCaptchaSecurityRuleConditionSourceIpIpRangesNotMatchOutputReference(this, "ip_ranges_not_match");
  public get ipRangesNotMatch() {
    return this._ipRangesNotMatch;
  }
  public putIpRangesNotMatch(value: SmartcaptchaCaptchaSecurityRuleConditionSourceIpIpRangesNotMatch) {
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
export interface SmartcaptchaCaptchaSecurityRuleConditionUriPath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/smartcaptcha_captcha#exact_match SmartcaptchaCaptcha#exact_match}
  */
  readonly exactMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/smartcaptcha_captcha#exact_not_match SmartcaptchaCaptcha#exact_not_match}
  */
  readonly exactNotMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/smartcaptcha_captcha#pire_regex_match SmartcaptchaCaptcha#pire_regex_match}
  */
  readonly pireRegexMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/smartcaptcha_captcha#pire_regex_not_match SmartcaptchaCaptcha#pire_regex_not_match}
  */
  readonly pireRegexNotMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/smartcaptcha_captcha#prefix_match SmartcaptchaCaptcha#prefix_match}
  */
  readonly prefixMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/smartcaptcha_captcha#prefix_not_match SmartcaptchaCaptcha#prefix_not_match}
  */
  readonly prefixNotMatch?: string;
}

export function smartcaptchaCaptchaSecurityRuleConditionUriPathToTerraform(struct?: SmartcaptchaCaptchaSecurityRuleConditionUriPathOutputReference | SmartcaptchaCaptchaSecurityRuleConditionUriPath): any {
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


export function smartcaptchaCaptchaSecurityRuleConditionUriPathToHclTerraform(struct?: SmartcaptchaCaptchaSecurityRuleConditionUriPathOutputReference | SmartcaptchaCaptchaSecurityRuleConditionUriPath): any {
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

export class SmartcaptchaCaptchaSecurityRuleConditionUriPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SmartcaptchaCaptchaSecurityRuleConditionUriPath | undefined {
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

  public set internalValue(value: SmartcaptchaCaptchaSecurityRuleConditionUriPath | undefined) {
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
export interface SmartcaptchaCaptchaSecurityRuleConditionUriQueriesValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/smartcaptcha_captcha#exact_match SmartcaptchaCaptcha#exact_match}
  */
  readonly exactMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/smartcaptcha_captcha#exact_not_match SmartcaptchaCaptcha#exact_not_match}
  */
  readonly exactNotMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/smartcaptcha_captcha#pire_regex_match SmartcaptchaCaptcha#pire_regex_match}
  */
  readonly pireRegexMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/smartcaptcha_captcha#pire_regex_not_match SmartcaptchaCaptcha#pire_regex_not_match}
  */
  readonly pireRegexNotMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/smartcaptcha_captcha#prefix_match SmartcaptchaCaptcha#prefix_match}
  */
  readonly prefixMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/smartcaptcha_captcha#prefix_not_match SmartcaptchaCaptcha#prefix_not_match}
  */
  readonly prefixNotMatch?: string;
}

export function smartcaptchaCaptchaSecurityRuleConditionUriQueriesValueToTerraform(struct?: SmartcaptchaCaptchaSecurityRuleConditionUriQueriesValueOutputReference | SmartcaptchaCaptchaSecurityRuleConditionUriQueriesValue): any {
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


export function smartcaptchaCaptchaSecurityRuleConditionUriQueriesValueToHclTerraform(struct?: SmartcaptchaCaptchaSecurityRuleConditionUriQueriesValueOutputReference | SmartcaptchaCaptchaSecurityRuleConditionUriQueriesValue): any {
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

export class SmartcaptchaCaptchaSecurityRuleConditionUriQueriesValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SmartcaptchaCaptchaSecurityRuleConditionUriQueriesValue | undefined {
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

  public set internalValue(value: SmartcaptchaCaptchaSecurityRuleConditionUriQueriesValue | undefined) {
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
export interface SmartcaptchaCaptchaSecurityRuleConditionUriQueries {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/smartcaptcha_captcha#key SmartcaptchaCaptcha#key}
  */
  readonly key: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/smartcaptcha_captcha#value SmartcaptchaCaptcha#value}
  */
  readonly value: SmartcaptchaCaptchaSecurityRuleConditionUriQueriesValue;
}

export function smartcaptchaCaptchaSecurityRuleConditionUriQueriesToTerraform(struct?: SmartcaptchaCaptchaSecurityRuleConditionUriQueries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: smartcaptchaCaptchaSecurityRuleConditionUriQueriesValueToTerraform(struct!.value),
  }
}


export function smartcaptchaCaptchaSecurityRuleConditionUriQueriesToHclTerraform(struct?: SmartcaptchaCaptchaSecurityRuleConditionUriQueries | cdktf.IResolvable): any {
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
      value: smartcaptchaCaptchaSecurityRuleConditionUriQueriesValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "SmartcaptchaCaptchaSecurityRuleConditionUriQueriesValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SmartcaptchaCaptchaSecurityRuleConditionUriQueriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SmartcaptchaCaptchaSecurityRuleConditionUriQueries | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SmartcaptchaCaptchaSecurityRuleConditionUriQueries | cdktf.IResolvable | undefined) {
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
  private _value = new SmartcaptchaCaptchaSecurityRuleConditionUriQueriesValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: SmartcaptchaCaptchaSecurityRuleConditionUriQueriesValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class SmartcaptchaCaptchaSecurityRuleConditionUriQueriesList extends cdktf.ComplexList {
  public internalValue? : SmartcaptchaCaptchaSecurityRuleConditionUriQueries[] | cdktf.IResolvable

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
  public get(index: number): SmartcaptchaCaptchaSecurityRuleConditionUriQueriesOutputReference {
    return new SmartcaptchaCaptchaSecurityRuleConditionUriQueriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SmartcaptchaCaptchaSecurityRuleConditionUri {
  /**
  * path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/smartcaptcha_captcha#path SmartcaptchaCaptcha#path}
  */
  readonly path?: SmartcaptchaCaptchaSecurityRuleConditionUriPath;
  /**
  * queries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/smartcaptcha_captcha#queries SmartcaptchaCaptcha#queries}
  */
  readonly queries?: SmartcaptchaCaptchaSecurityRuleConditionUriQueries[] | cdktf.IResolvable;
}

export function smartcaptchaCaptchaSecurityRuleConditionUriToTerraform(struct?: SmartcaptchaCaptchaSecurityRuleConditionUriOutputReference | SmartcaptchaCaptchaSecurityRuleConditionUri): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: smartcaptchaCaptchaSecurityRuleConditionUriPathToTerraform(struct!.path),
    queries: cdktf.listMapper(smartcaptchaCaptchaSecurityRuleConditionUriQueriesToTerraform, true)(struct!.queries),
  }
}


export function smartcaptchaCaptchaSecurityRuleConditionUriToHclTerraform(struct?: SmartcaptchaCaptchaSecurityRuleConditionUriOutputReference | SmartcaptchaCaptchaSecurityRuleConditionUri): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: smartcaptchaCaptchaSecurityRuleConditionUriPathToHclTerraform(struct!.path),
      isBlock: true,
      type: "list",
      storageClassType: "SmartcaptchaCaptchaSecurityRuleConditionUriPathList",
    },
    queries: {
      value: cdktf.listMapperHcl(smartcaptchaCaptchaSecurityRuleConditionUriQueriesToHclTerraform, true)(struct!.queries),
      isBlock: true,
      type: "list",
      storageClassType: "SmartcaptchaCaptchaSecurityRuleConditionUriQueriesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SmartcaptchaCaptchaSecurityRuleConditionUriOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SmartcaptchaCaptchaSecurityRuleConditionUri | undefined {
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

  public set internalValue(value: SmartcaptchaCaptchaSecurityRuleConditionUri | undefined) {
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
  private _path = new SmartcaptchaCaptchaSecurityRuleConditionUriPathOutputReference(this, "path");
  public get path() {
    return this._path;
  }
  public putPath(value: SmartcaptchaCaptchaSecurityRuleConditionUriPath) {
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
  private _queries = new SmartcaptchaCaptchaSecurityRuleConditionUriQueriesList(this, "queries", false);
  public get queries() {
    return this._queries;
  }
  public putQueries(value: SmartcaptchaCaptchaSecurityRuleConditionUriQueries[] | cdktf.IResolvable) {
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
export interface SmartcaptchaCaptchaSecurityRuleCondition {
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/smartcaptcha_captcha#headers SmartcaptchaCaptcha#headers}
  */
  readonly headers?: SmartcaptchaCaptchaSecurityRuleConditionHeaders[] | cdktf.IResolvable;
  /**
  * host block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/smartcaptcha_captcha#host SmartcaptchaCaptcha#host}
  */
  readonly host?: SmartcaptchaCaptchaSecurityRuleConditionHost;
  /**
  * source_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/smartcaptcha_captcha#source_ip SmartcaptchaCaptcha#source_ip}
  */
  readonly sourceIp?: SmartcaptchaCaptchaSecurityRuleConditionSourceIp;
  /**
  * uri block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/smartcaptcha_captcha#uri SmartcaptchaCaptcha#uri}
  */
  readonly uri?: SmartcaptchaCaptchaSecurityRuleConditionUri;
}

export function smartcaptchaCaptchaSecurityRuleConditionToTerraform(struct?: SmartcaptchaCaptchaSecurityRuleConditionOutputReference | SmartcaptchaCaptchaSecurityRuleCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    headers: cdktf.listMapper(smartcaptchaCaptchaSecurityRuleConditionHeadersToTerraform, true)(struct!.headers),
    host: smartcaptchaCaptchaSecurityRuleConditionHostToTerraform(struct!.host),
    source_ip: smartcaptchaCaptchaSecurityRuleConditionSourceIpToTerraform(struct!.sourceIp),
    uri: smartcaptchaCaptchaSecurityRuleConditionUriToTerraform(struct!.uri),
  }
}


export function smartcaptchaCaptchaSecurityRuleConditionToHclTerraform(struct?: SmartcaptchaCaptchaSecurityRuleConditionOutputReference | SmartcaptchaCaptchaSecurityRuleCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    headers: {
      value: cdktf.listMapperHcl(smartcaptchaCaptchaSecurityRuleConditionHeadersToHclTerraform, true)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "SmartcaptchaCaptchaSecurityRuleConditionHeadersList",
    },
    host: {
      value: smartcaptchaCaptchaSecurityRuleConditionHostToHclTerraform(struct!.host),
      isBlock: true,
      type: "list",
      storageClassType: "SmartcaptchaCaptchaSecurityRuleConditionHostList",
    },
    source_ip: {
      value: smartcaptchaCaptchaSecurityRuleConditionSourceIpToHclTerraform(struct!.sourceIp),
      isBlock: true,
      type: "list",
      storageClassType: "SmartcaptchaCaptchaSecurityRuleConditionSourceIpList",
    },
    uri: {
      value: smartcaptchaCaptchaSecurityRuleConditionUriToHclTerraform(struct!.uri),
      isBlock: true,
      type: "list",
      storageClassType: "SmartcaptchaCaptchaSecurityRuleConditionUriList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SmartcaptchaCaptchaSecurityRuleConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SmartcaptchaCaptchaSecurityRuleCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._host?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host?.internalValue;
    }
    if (this._sourceIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIp = this._sourceIp?.internalValue;
    }
    if (this._uri?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SmartcaptchaCaptchaSecurityRuleCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headers.internalValue = undefined;
      this._host.internalValue = undefined;
      this._sourceIp.internalValue = undefined;
      this._uri.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headers.internalValue = value.headers;
      this._host.internalValue = value.host;
      this._sourceIp.internalValue = value.sourceIp;
      this._uri.internalValue = value.uri;
    }
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new SmartcaptchaCaptchaSecurityRuleConditionHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: SmartcaptchaCaptchaSecurityRuleConditionHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // host - computed: false, optional: true, required: false
  private _host = new SmartcaptchaCaptchaSecurityRuleConditionHostOutputReference(this, "host");
  public get host() {
    return this._host;
  }
  public putHost(value: SmartcaptchaCaptchaSecurityRuleConditionHost) {
    this._host.internalValue = value;
  }
  public resetHost() {
    this._host.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host.internalValue;
  }

  // source_ip - computed: false, optional: true, required: false
  private _sourceIp = new SmartcaptchaCaptchaSecurityRuleConditionSourceIpOutputReference(this, "source_ip");
  public get sourceIp() {
    return this._sourceIp;
  }
  public putSourceIp(value: SmartcaptchaCaptchaSecurityRuleConditionSourceIp) {
    this._sourceIp.internalValue = value;
  }
  public resetSourceIp() {
    this._sourceIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpInput() {
    return this._sourceIp.internalValue;
  }

  // uri - computed: false, optional: true, required: false
  private _uri = new SmartcaptchaCaptchaSecurityRuleConditionUriOutputReference(this, "uri");
  public get uri() {
    return this._uri;
  }
  public putUri(value: SmartcaptchaCaptchaSecurityRuleConditionUri) {
    this._uri.internalValue = value;
  }
  public resetUri() {
    this._uri.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri.internalValue;
  }
}
export interface SmartcaptchaCaptchaSecurityRule {
  /**
  * Description of the rule. 0-512 characters long.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/smartcaptcha_captcha#description SmartcaptchaCaptcha#description}
  */
  readonly description?: string;
  /**
  * Name of the rule. The name is unique within the captcha. 1-50 characters long.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/smartcaptcha_captcha#name SmartcaptchaCaptcha#name}
  */
  readonly name?: string;
  /**
  * Variant UUID to show in case of match the rule. Keep empty to use defaults.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/smartcaptcha_captcha#override_variant_uuid SmartcaptchaCaptcha#override_variant_uuid}
  */
  readonly overrideVariantUuid?: string;
  /**
  * Priority of the rule. Lower value means higher priority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/smartcaptcha_captcha#priority SmartcaptchaCaptcha#priority}
  */
  readonly priority?: number;
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/smartcaptcha_captcha#condition SmartcaptchaCaptcha#condition}
  */
  readonly condition?: SmartcaptchaCaptchaSecurityRuleCondition;
}

export function smartcaptchaCaptchaSecurityRuleToTerraform(struct?: SmartcaptchaCaptchaSecurityRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    override_variant_uuid: cdktf.stringToTerraform(struct!.overrideVariantUuid),
    priority: cdktf.numberToTerraform(struct!.priority),
    condition: smartcaptchaCaptchaSecurityRuleConditionToTerraform(struct!.condition),
  }
}


export function smartcaptchaCaptchaSecurityRuleToHclTerraform(struct?: SmartcaptchaCaptchaSecurityRule | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    override_variant_uuid: {
      value: cdktf.stringToHclTerraform(struct!.overrideVariantUuid),
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
    condition: {
      value: smartcaptchaCaptchaSecurityRuleConditionToHclTerraform(struct!.condition),
      isBlock: true,
      type: "list",
      storageClassType: "SmartcaptchaCaptchaSecurityRuleConditionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SmartcaptchaCaptchaSecurityRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SmartcaptchaCaptchaSecurityRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._overrideVariantUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideVariantUuid = this._overrideVariantUuid;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SmartcaptchaCaptchaSecurityRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._name = undefined;
      this._overrideVariantUuid = undefined;
      this._priority = undefined;
      this._condition.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._name = value.name;
      this._overrideVariantUuid = value.overrideVariantUuid;
      this._priority = value.priority;
      this._condition.internalValue = value.condition;
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

  // override_variant_uuid - computed: false, optional: true, required: false
  private _overrideVariantUuid?: string; 
  public get overrideVariantUuid() {
    return this.getStringAttribute('override_variant_uuid');
  }
  public set overrideVariantUuid(value: string) {
    this._overrideVariantUuid = value;
  }
  public resetOverrideVariantUuid() {
    this._overrideVariantUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideVariantUuidInput() {
    return this._overrideVariantUuid;
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

  // condition - computed: false, optional: true, required: false
  private _condition = new SmartcaptchaCaptchaSecurityRuleConditionOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }
  public putCondition(value: SmartcaptchaCaptchaSecurityRuleCondition) {
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

export class SmartcaptchaCaptchaSecurityRuleList extends cdktf.ComplexList {
  public internalValue? : SmartcaptchaCaptchaSecurityRule[] | cdktf.IResolvable

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
  public get(index: number): SmartcaptchaCaptchaSecurityRuleOutputReference {
    return new SmartcaptchaCaptchaSecurityRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SmartcaptchaCaptchaTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/smartcaptcha_captcha#create SmartcaptchaCaptcha#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/smartcaptcha_captcha#delete SmartcaptchaCaptcha#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/smartcaptcha_captcha#read SmartcaptchaCaptcha#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/smartcaptcha_captcha#update SmartcaptchaCaptcha#update}
  */
  readonly update?: string;
}

export function smartcaptchaCaptchaTimeoutsToTerraform(struct?: SmartcaptchaCaptchaTimeouts | cdktf.IResolvable): any {
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


export function smartcaptchaCaptchaTimeoutsToHclTerraform(struct?: SmartcaptchaCaptchaTimeouts | cdktf.IResolvable): any {
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

export class SmartcaptchaCaptchaTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SmartcaptchaCaptchaTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SmartcaptchaCaptchaTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/smartcaptcha_captcha yandex_smartcaptcha_captcha}
*/
export class SmartcaptchaCaptcha extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_smartcaptcha_captcha";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SmartcaptchaCaptcha resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SmartcaptchaCaptcha to import
  * @param importFromId The id of the existing SmartcaptchaCaptcha that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/smartcaptcha_captcha#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SmartcaptchaCaptcha to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_smartcaptcha_captcha", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/smartcaptcha_captcha yandex_smartcaptcha_captcha} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SmartcaptchaCaptchaConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SmartcaptchaCaptchaConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'yandex_smartcaptcha_captcha',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.176.0',
        providerVersionConstraint: '0.176.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowedSites = config.allowedSites;
    this._challengeType = config.challengeType;
    this._cloudId = config.cloudId;
    this._complexity = config.complexity;
    this._deletionProtection = config.deletionProtection;
    this._folderId = config.folderId;
    this._id = config.id;
    this._name = config.name;
    this._preCheckType = config.preCheckType;
    this._styleJson = config.styleJson;
    this._turnOffHostnameCheck = config.turnOffHostnameCheck;
    this._overrideVariant.internalValue = config.overrideVariant;
    this._securityRule.internalValue = config.securityRule;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_sites - computed: false, optional: true, required: false
  private _allowedSites?: string[]; 
  public get allowedSites() {
    return this.getListAttribute('allowed_sites');
  }
  public set allowedSites(value: string[]) {
    this._allowedSites = value;
  }
  public resetAllowedSites() {
    this._allowedSites = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedSitesInput() {
    return this._allowedSites;
  }

  // challenge_type - computed: false, optional: true, required: false
  private _challengeType?: string; 
  public get challengeType() {
    return this.getStringAttribute('challenge_type');
  }
  public set challengeType(value: string) {
    this._challengeType = value;
  }
  public resetChallengeType() {
    this._challengeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get challengeTypeInput() {
    return this._challengeType;
  }

  // client_key - computed: true, optional: false, required: false
  public get clientKey() {
    return this.getStringAttribute('client_key');
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

  // complexity - computed: false, optional: true, required: false
  private _complexity?: string; 
  public get complexity() {
    return this.getStringAttribute('complexity');
  }
  public set complexity(value: string) {
    this._complexity = value;
  }
  public resetComplexity() {
    this._complexity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get complexityInput() {
    return this._complexity;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // deletion_protection - computed: false, optional: true, required: false
  private _deletionProtection?: boolean | cdktf.IResolvable; 
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }
  public set deletionProtection(value: boolean | cdktf.IResolvable) {
    this._deletionProtection = value;
  }
  public resetDeletionProtection() {
    this._deletionProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionInput() {
    return this._deletionProtection;
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

  // pre_check_type - computed: false, optional: true, required: false
  private _preCheckType?: string; 
  public get preCheckType() {
    return this.getStringAttribute('pre_check_type');
  }
  public set preCheckType(value: string) {
    this._preCheckType = value;
  }
  public resetPreCheckType() {
    this._preCheckType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preCheckTypeInput() {
    return this._preCheckType;
  }

  // style_json - computed: false, optional: true, required: false
  private _styleJson?: string; 
  public get styleJson() {
    return this.getStringAttribute('style_json');
  }
  public set styleJson(value: string) {
    this._styleJson = value;
  }
  public resetStyleJson() {
    this._styleJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get styleJsonInput() {
    return this._styleJson;
  }

  // suspend - computed: true, optional: false, required: false
  public get suspend() {
    return this.getBooleanAttribute('suspend');
  }

  // turn_off_hostname_check - computed: false, optional: true, required: false
  private _turnOffHostnameCheck?: boolean | cdktf.IResolvable; 
  public get turnOffHostnameCheck() {
    return this.getBooleanAttribute('turn_off_hostname_check');
  }
  public set turnOffHostnameCheck(value: boolean | cdktf.IResolvable) {
    this._turnOffHostnameCheck = value;
  }
  public resetTurnOffHostnameCheck() {
    this._turnOffHostnameCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get turnOffHostnameCheckInput() {
    return this._turnOffHostnameCheck;
  }

  // override_variant - computed: false, optional: true, required: false
  private _overrideVariant = new SmartcaptchaCaptchaOverrideVariantList(this, "override_variant", false);
  public get overrideVariant() {
    return this._overrideVariant;
  }
  public putOverrideVariant(value: SmartcaptchaCaptchaOverrideVariant[] | cdktf.IResolvable) {
    this._overrideVariant.internalValue = value;
  }
  public resetOverrideVariant() {
    this._overrideVariant.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideVariantInput() {
    return this._overrideVariant.internalValue;
  }

  // security_rule - computed: false, optional: true, required: false
  private _securityRule = new SmartcaptchaCaptchaSecurityRuleList(this, "security_rule", false);
  public get securityRule() {
    return this._securityRule;
  }
  public putSecurityRule(value: SmartcaptchaCaptchaSecurityRule[] | cdktf.IResolvable) {
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
  private _timeouts = new SmartcaptchaCaptchaTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SmartcaptchaCaptchaTimeouts) {
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
      allowed_sites: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedSites),
      challenge_type: cdktf.stringToTerraform(this._challengeType),
      cloud_id: cdktf.stringToTerraform(this._cloudId),
      complexity: cdktf.stringToTerraform(this._complexity),
      deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
      folder_id: cdktf.stringToTerraform(this._folderId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      pre_check_type: cdktf.stringToTerraform(this._preCheckType),
      style_json: cdktf.stringToTerraform(this._styleJson),
      turn_off_hostname_check: cdktf.booleanToTerraform(this._turnOffHostnameCheck),
      override_variant: cdktf.listMapper(smartcaptchaCaptchaOverrideVariantToTerraform, true)(this._overrideVariant.internalValue),
      security_rule: cdktf.listMapper(smartcaptchaCaptchaSecurityRuleToTerraform, true)(this._securityRule.internalValue),
      timeouts: smartcaptchaCaptchaTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed_sites: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedSites),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      challenge_type: {
        value: cdktf.stringToHclTerraform(this._challengeType),
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
      complexity: {
        value: cdktf.stringToHclTerraform(this._complexity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deletion_protection: {
        value: cdktf.booleanToHclTerraform(this._deletionProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pre_check_type: {
        value: cdktf.stringToHclTerraform(this._preCheckType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      style_json: {
        value: cdktf.stringToHclTerraform(this._styleJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      turn_off_hostname_check: {
        value: cdktf.booleanToHclTerraform(this._turnOffHostnameCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      override_variant: {
        value: cdktf.listMapperHcl(smartcaptchaCaptchaOverrideVariantToHclTerraform, true)(this._overrideVariant.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SmartcaptchaCaptchaOverrideVariantList",
      },
      security_rule: {
        value: cdktf.listMapperHcl(smartcaptchaCaptchaSecurityRuleToHclTerraform, true)(this._securityRule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SmartcaptchaCaptchaSecurityRuleList",
      },
      timeouts: {
        value: smartcaptchaCaptchaTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SmartcaptchaCaptchaTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
