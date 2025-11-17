// https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwsAdvancedRateLimiterProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * The `Cloud ID` which resource belongs to. If it is not provided, the default provider `cloud-id` is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#cloud_id SwsAdvancedRateLimiterProfile#cloud_id}
  */
  readonly cloudId?: string;
  /**
  * The resource description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#description SwsAdvancedRateLimiterProfile#description}
  */
  readonly description?: string;
  /**
  * The folder identifier that resource belongs to. If it is not provided, the default provider `folder-id` is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#folder_id SwsAdvancedRateLimiterProfile#folder_id}
  */
  readonly folderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#id SwsAdvancedRateLimiterProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A set of key/value label pairs which assigned to resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#labels SwsAdvancedRateLimiterProfile#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#name SwsAdvancedRateLimiterProfile#name}
  */
  readonly name?: string;
  /**
  * advanced_rate_limiter_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#advanced_rate_limiter_rule SwsAdvancedRateLimiterProfile#advanced_rate_limiter_rule}
  */
  readonly advancedRateLimiterRule?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRule[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#timeouts SwsAdvancedRateLimiterProfile#timeouts}
  */
  readonly timeouts?: SwsAdvancedRateLimiterProfileTimeouts;
}
export interface SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaCharacteristicKeyCharacteristic {
  /**
  * Type of key characteristic. Possible values: `COOKIE_KEY`, `HEADER_KEY`, `QUERY_KEY`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#type SwsAdvancedRateLimiterProfile#type}
  */
  readonly type?: string;
  /**
  * String value of the key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#value SwsAdvancedRateLimiterProfile#value}
  */
  readonly value?: string;
}

export function swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaCharacteristicKeyCharacteristicToTerraform(struct?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaCharacteristicKeyCharacteristicOutputReference | SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaCharacteristicKeyCharacteristic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaCharacteristicKeyCharacteristicToHclTerraform(struct?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaCharacteristicKeyCharacteristicOutputReference | SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaCharacteristicKeyCharacteristic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaCharacteristicKeyCharacteristicOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaCharacteristicKeyCharacteristic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaCharacteristicKeyCharacteristic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaCharacteristicSimpleCharacteristic {
  /**
  * Type of simple characteristic. Possible values: `REQUEST_PATH`, `HTTP_METHOD`, `IP`, `GEO`, `HOST`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#type SwsAdvancedRateLimiterProfile#type}
  */
  readonly type?: string;
}

export function swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaCharacteristicSimpleCharacteristicToTerraform(struct?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaCharacteristicSimpleCharacteristicOutputReference | SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaCharacteristicSimpleCharacteristic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaCharacteristicSimpleCharacteristicToHclTerraform(struct?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaCharacteristicSimpleCharacteristicOutputReference | SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaCharacteristicSimpleCharacteristic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaCharacteristicSimpleCharacteristicOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaCharacteristicSimpleCharacteristic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaCharacteristicSimpleCharacteristic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
    }
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaCharacteristic {
  /**
  * Determines case-sensitive or case-insensitive keys matching.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#case_insensitive SwsAdvancedRateLimiterProfile#case_insensitive}
  */
  readonly caseInsensitive?: boolean | cdktf.IResolvable;
  /**
  * key_characteristic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#key_characteristic SwsAdvancedRateLimiterProfile#key_characteristic}
  */
  readonly keyCharacteristic?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaCharacteristicKeyCharacteristic;
  /**
  * simple_characteristic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#simple_characteristic SwsAdvancedRateLimiterProfile#simple_characteristic}
  */
  readonly simpleCharacteristic?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaCharacteristicSimpleCharacteristic;
}

export function swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaCharacteristicToTerraform(struct?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaCharacteristic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    case_insensitive: cdktf.booleanToTerraform(struct!.caseInsensitive),
    key_characteristic: swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaCharacteristicKeyCharacteristicToTerraform(struct!.keyCharacteristic),
    simple_characteristic: swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaCharacteristicSimpleCharacteristicToTerraform(struct!.simpleCharacteristic),
  }
}


export function swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaCharacteristicToHclTerraform(struct?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaCharacteristic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    case_insensitive: {
      value: cdktf.booleanToHclTerraform(struct!.caseInsensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key_characteristic: {
      value: swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaCharacteristicKeyCharacteristicToHclTerraform(struct!.keyCharacteristic),
      isBlock: true,
      type: "list",
      storageClassType: "SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaCharacteristicKeyCharacteristicList",
    },
    simple_characteristic: {
      value: swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaCharacteristicSimpleCharacteristicToHclTerraform(struct!.simpleCharacteristic),
      isBlock: true,
      type: "list",
      storageClassType: "SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaCharacteristicSimpleCharacteristicList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaCharacteristicOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaCharacteristic | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caseInsensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseInsensitive = this._caseInsensitive;
    }
    if (this._keyCharacteristic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyCharacteristic = this._keyCharacteristic?.internalValue;
    }
    if (this._simpleCharacteristic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.simpleCharacteristic = this._simpleCharacteristic?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaCharacteristic | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caseInsensitive = undefined;
      this._keyCharacteristic.internalValue = undefined;
      this._simpleCharacteristic.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caseInsensitive = value.caseInsensitive;
      this._keyCharacteristic.internalValue = value.keyCharacteristic;
      this._simpleCharacteristic.internalValue = value.simpleCharacteristic;
    }
  }

  // case_insensitive - computed: false, optional: true, required: false
  private _caseInsensitive?: boolean | cdktf.IResolvable; 
  public get caseInsensitive() {
    return this.getBooleanAttribute('case_insensitive');
  }
  public set caseInsensitive(value: boolean | cdktf.IResolvable) {
    this._caseInsensitive = value;
  }
  public resetCaseInsensitive() {
    this._caseInsensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseInsensitiveInput() {
    return this._caseInsensitive;
  }

  // key_characteristic - computed: false, optional: true, required: false
  private _keyCharacteristic = new SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaCharacteristicKeyCharacteristicOutputReference(this, "key_characteristic");
  public get keyCharacteristic() {
    return this._keyCharacteristic;
  }
  public putKeyCharacteristic(value: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaCharacteristicKeyCharacteristic) {
    this._keyCharacteristic.internalValue = value;
  }
  public resetKeyCharacteristic() {
    this._keyCharacteristic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyCharacteristicInput() {
    return this._keyCharacteristic.internalValue;
  }

  // simple_characteristic - computed: false, optional: true, required: false
  private _simpleCharacteristic = new SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaCharacteristicSimpleCharacteristicOutputReference(this, "simple_characteristic");
  public get simpleCharacteristic() {
    return this._simpleCharacteristic;
  }
  public putSimpleCharacteristic(value: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaCharacteristicSimpleCharacteristic) {
    this._simpleCharacteristic.internalValue = value;
  }
  public resetSimpleCharacteristic() {
    this._simpleCharacteristic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simpleCharacteristicInput() {
    return this._simpleCharacteristic.internalValue;
  }
}

export class SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaCharacteristicList extends cdktf.ComplexList {
  public internalValue? : SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaCharacteristic[] | cdktf.IResolvable

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
  public get(index: number): SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaCharacteristicOutputReference {
    return new SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaCharacteristicOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionAuthorityAuthorities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#exact_match SwsAdvancedRateLimiterProfile#exact_match}
  */
  readonly exactMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#exact_not_match SwsAdvancedRateLimiterProfile#exact_not_match}
  */
  readonly exactNotMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#pire_regex_match SwsAdvancedRateLimiterProfile#pire_regex_match}
  */
  readonly pireRegexMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#pire_regex_not_match SwsAdvancedRateLimiterProfile#pire_regex_not_match}
  */
  readonly pireRegexNotMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#prefix_match SwsAdvancedRateLimiterProfile#prefix_match}
  */
  readonly prefixMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#prefix_not_match SwsAdvancedRateLimiterProfile#prefix_not_match}
  */
  readonly prefixNotMatch?: string;
}

export function swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionAuthorityAuthoritiesToTerraform(struct?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionAuthorityAuthorities | cdktf.IResolvable): any {
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


export function swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionAuthorityAuthoritiesToHclTerraform(struct?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionAuthorityAuthorities | cdktf.IResolvable): any {
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

export class SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionAuthorityAuthoritiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionAuthorityAuthorities | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionAuthorityAuthorities | cdktf.IResolvable | undefined) {
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

export class SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionAuthorityAuthoritiesList extends cdktf.ComplexList {
  public internalValue? : SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionAuthorityAuthorities[] | cdktf.IResolvable

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
  public get(index: number): SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionAuthorityAuthoritiesOutputReference {
    return new SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionAuthorityAuthoritiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionAuthority {
  /**
  * authorities block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#authorities SwsAdvancedRateLimiterProfile#authorities}
  */
  readonly authorities?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionAuthorityAuthorities[] | cdktf.IResolvable;
}

export function swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionAuthorityToTerraform(struct?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionAuthorityOutputReference | SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionAuthority): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authorities: cdktf.listMapper(swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionAuthorityAuthoritiesToTerraform, true)(struct!.authorities),
  }
}


export function swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionAuthorityToHclTerraform(struct?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionAuthorityOutputReference | SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionAuthority): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authorities: {
      value: cdktf.listMapperHcl(swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionAuthorityAuthoritiesToHclTerraform, true)(struct!.authorities),
      isBlock: true,
      type: "list",
      storageClassType: "SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionAuthorityAuthoritiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionAuthorityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionAuthority | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorities = this._authorities?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionAuthority | undefined) {
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
  private _authorities = new SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionAuthorityAuthoritiesList(this, "authorities", false);
  public get authorities() {
    return this._authorities;
  }
  public putAuthorities(value: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionAuthorityAuthorities[] | cdktf.IResolvable) {
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
export interface SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHeadersValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#exact_match SwsAdvancedRateLimiterProfile#exact_match}
  */
  readonly exactMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#exact_not_match SwsAdvancedRateLimiterProfile#exact_not_match}
  */
  readonly exactNotMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#pire_regex_match SwsAdvancedRateLimiterProfile#pire_regex_match}
  */
  readonly pireRegexMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#pire_regex_not_match SwsAdvancedRateLimiterProfile#pire_regex_not_match}
  */
  readonly pireRegexNotMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#prefix_match SwsAdvancedRateLimiterProfile#prefix_match}
  */
  readonly prefixMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#prefix_not_match SwsAdvancedRateLimiterProfile#prefix_not_match}
  */
  readonly prefixNotMatch?: string;
}

export function swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHeadersValueToTerraform(struct?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHeadersValueOutputReference | SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHeadersValue): any {
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


export function swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHeadersValueToHclTerraform(struct?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHeadersValueOutputReference | SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHeadersValue): any {
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

export class SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHeadersValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHeadersValue | undefined {
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

  public set internalValue(value: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHeadersValue | undefined) {
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
export interface SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#name SwsAdvancedRateLimiterProfile#name}
  */
  readonly name?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#value SwsAdvancedRateLimiterProfile#value}
  */
  readonly value: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHeadersValue;
}

export function swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHeadersToTerraform(struct?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHeadersValueToTerraform(struct!.value),
  }
}


export function swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHeadersToHclTerraform(struct?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHeaders | cdktf.IResolvable): any {
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
      value: swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHeadersValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHeadersValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHeaders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHeaders | cdktf.IResolvable | undefined) {
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
  private _value = new SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHeadersValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHeadersValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHeadersList extends cdktf.ComplexList {
  public internalValue? : SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHeaders[] | cdktf.IResolvable

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
  public get(index: number): SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHeadersOutputReference {
    return new SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHttpMethodHttpMethods {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#exact_match SwsAdvancedRateLimiterProfile#exact_match}
  */
  readonly exactMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#exact_not_match SwsAdvancedRateLimiterProfile#exact_not_match}
  */
  readonly exactNotMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#pire_regex_match SwsAdvancedRateLimiterProfile#pire_regex_match}
  */
  readonly pireRegexMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#pire_regex_not_match SwsAdvancedRateLimiterProfile#pire_regex_not_match}
  */
  readonly pireRegexNotMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#prefix_match SwsAdvancedRateLimiterProfile#prefix_match}
  */
  readonly prefixMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#prefix_not_match SwsAdvancedRateLimiterProfile#prefix_not_match}
  */
  readonly prefixNotMatch?: string;
}

export function swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHttpMethodHttpMethodsToTerraform(struct?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHttpMethodHttpMethods | cdktf.IResolvable): any {
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


export function swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHttpMethodHttpMethodsToHclTerraform(struct?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHttpMethodHttpMethods | cdktf.IResolvable): any {
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

export class SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHttpMethodHttpMethodsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHttpMethodHttpMethods | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHttpMethodHttpMethods | cdktf.IResolvable | undefined) {
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

export class SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHttpMethodHttpMethodsList extends cdktf.ComplexList {
  public internalValue? : SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHttpMethodHttpMethods[] | cdktf.IResolvable

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
  public get(index: number): SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHttpMethodHttpMethodsOutputReference {
    return new SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHttpMethodHttpMethodsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHttpMethod {
  /**
  * http_methods block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#http_methods SwsAdvancedRateLimiterProfile#http_methods}
  */
  readonly httpMethods?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHttpMethodHttpMethods[] | cdktf.IResolvable;
}

export function swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHttpMethodToTerraform(struct?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHttpMethodOutputReference | SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHttpMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_methods: cdktf.listMapper(swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHttpMethodHttpMethodsToTerraform, true)(struct!.httpMethods),
  }
}


export function swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHttpMethodToHclTerraform(struct?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHttpMethodOutputReference | SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHttpMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_methods: {
      value: cdktf.listMapperHcl(swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHttpMethodHttpMethodsToHclTerraform, true)(struct!.httpMethods),
      isBlock: true,
      type: "list",
      storageClassType: "SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHttpMethodHttpMethodsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHttpMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHttpMethod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpMethods?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpMethods = this._httpMethods?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHttpMethod | undefined) {
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
  private _httpMethods = new SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHttpMethodHttpMethodsList(this, "http_methods", false);
  public get httpMethods() {
    return this._httpMethods;
  }
  public putHttpMethods(value: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHttpMethodHttpMethods[] | cdktf.IResolvable) {
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
export interface SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriPath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#exact_match SwsAdvancedRateLimiterProfile#exact_match}
  */
  readonly exactMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#exact_not_match SwsAdvancedRateLimiterProfile#exact_not_match}
  */
  readonly exactNotMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#pire_regex_match SwsAdvancedRateLimiterProfile#pire_regex_match}
  */
  readonly pireRegexMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#pire_regex_not_match SwsAdvancedRateLimiterProfile#pire_regex_not_match}
  */
  readonly pireRegexNotMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#prefix_match SwsAdvancedRateLimiterProfile#prefix_match}
  */
  readonly prefixMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#prefix_not_match SwsAdvancedRateLimiterProfile#prefix_not_match}
  */
  readonly prefixNotMatch?: string;
}

export function swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriPathToTerraform(struct?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriPathOutputReference | SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriPath): any {
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


export function swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriPathToHclTerraform(struct?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriPathOutputReference | SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriPath): any {
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

export class SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriPath | undefined {
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

  public set internalValue(value: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriPath | undefined) {
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
export interface SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriQueriesValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#exact_match SwsAdvancedRateLimiterProfile#exact_match}
  */
  readonly exactMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#exact_not_match SwsAdvancedRateLimiterProfile#exact_not_match}
  */
  readonly exactNotMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#pire_regex_match SwsAdvancedRateLimiterProfile#pire_regex_match}
  */
  readonly pireRegexMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#pire_regex_not_match SwsAdvancedRateLimiterProfile#pire_regex_not_match}
  */
  readonly pireRegexNotMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#prefix_match SwsAdvancedRateLimiterProfile#prefix_match}
  */
  readonly prefixMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#prefix_not_match SwsAdvancedRateLimiterProfile#prefix_not_match}
  */
  readonly prefixNotMatch?: string;
}

export function swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriQueriesValueToTerraform(struct?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriQueriesValueOutputReference | SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriQueriesValue): any {
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


export function swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriQueriesValueToHclTerraform(struct?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriQueriesValueOutputReference | SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriQueriesValue): any {
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

export class SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriQueriesValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriQueriesValue | undefined {
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

  public set internalValue(value: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriQueriesValue | undefined) {
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
export interface SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriQueries {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#key SwsAdvancedRateLimiterProfile#key}
  */
  readonly key: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#value SwsAdvancedRateLimiterProfile#value}
  */
  readonly value: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriQueriesValue;
}

export function swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriQueriesToTerraform(struct?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriQueries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriQueriesValueToTerraform(struct!.value),
  }
}


export function swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriQueriesToHclTerraform(struct?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriQueries | cdktf.IResolvable): any {
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
      value: swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriQueriesValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriQueriesValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriQueriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriQueries | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriQueries | cdktf.IResolvable | undefined) {
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
  private _value = new SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriQueriesValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriQueriesValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriQueriesList extends cdktf.ComplexList {
  public internalValue? : SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriQueries[] | cdktf.IResolvable

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
  public get(index: number): SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriQueriesOutputReference {
    return new SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriQueriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUri {
  /**
  * path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#path SwsAdvancedRateLimiterProfile#path}
  */
  readonly path?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriPath;
  /**
  * queries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#queries SwsAdvancedRateLimiterProfile#queries}
  */
  readonly queries?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriQueries[] | cdktf.IResolvable;
}

export function swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriToTerraform(struct?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriOutputReference | SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUri): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriPathToTerraform(struct!.path),
    queries: cdktf.listMapper(swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriQueriesToTerraform, true)(struct!.queries),
  }
}


export function swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriToHclTerraform(struct?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriOutputReference | SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUri): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriPathToHclTerraform(struct!.path),
      isBlock: true,
      type: "list",
      storageClassType: "SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriPathList",
    },
    queries: {
      value: cdktf.listMapperHcl(swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriQueriesToHclTerraform, true)(struct!.queries),
      isBlock: true,
      type: "list",
      storageClassType: "SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriQueriesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUri | undefined {
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

  public set internalValue(value: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUri | undefined) {
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
  private _path = new SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriPathOutputReference(this, "path");
  public get path() {
    return this._path;
  }
  public putPath(value: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriPath) {
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
  private _queries = new SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriQueriesList(this, "queries", false);
  public get queries() {
    return this._queries;
  }
  public putQueries(value: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriQueries[] | cdktf.IResolvable) {
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
export interface SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpGeoIpMatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#locations SwsAdvancedRateLimiterProfile#locations}
  */
  readonly locations?: string[];
}

export function swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpGeoIpMatchToTerraform(struct?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpGeoIpMatchOutputReference | SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpGeoIpMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    locations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.locations),
  }
}


export function swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpGeoIpMatchToHclTerraform(struct?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpGeoIpMatchOutputReference | SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpGeoIpMatch): any {
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

export class SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpGeoIpMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpGeoIpMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._locations !== undefined) {
      hasAnyValues = true;
      internalValueResult.locations = this._locations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpGeoIpMatch | undefined) {
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
export interface SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpGeoIpNotMatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#locations SwsAdvancedRateLimiterProfile#locations}
  */
  readonly locations?: string[];
}

export function swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpGeoIpNotMatchToTerraform(struct?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpGeoIpNotMatchOutputReference | SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpGeoIpNotMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    locations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.locations),
  }
}


export function swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpGeoIpNotMatchToHclTerraform(struct?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpGeoIpNotMatchOutputReference | SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpGeoIpNotMatch): any {
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

export class SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpGeoIpNotMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpGeoIpNotMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._locations !== undefined) {
      hasAnyValues = true;
      internalValueResult.locations = this._locations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpGeoIpNotMatch | undefined) {
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
export interface SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpIpRangesMatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#ip_ranges SwsAdvancedRateLimiterProfile#ip_ranges}
  */
  readonly ipRanges?: string[];
}

export function swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpIpRangesMatchToTerraform(struct?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpIpRangesMatchOutputReference | SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpIpRangesMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipRanges),
  }
}


export function swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpIpRangesMatchToHclTerraform(struct?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpIpRangesMatchOutputReference | SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpIpRangesMatch): any {
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

export class SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpIpRangesMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpIpRangesMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRanges = this._ipRanges;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpIpRangesMatch | undefined) {
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
export interface SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpIpRangesNotMatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#ip_ranges SwsAdvancedRateLimiterProfile#ip_ranges}
  */
  readonly ipRanges?: string[];
}

export function swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpIpRangesNotMatchToTerraform(struct?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpIpRangesNotMatchOutputReference | SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpIpRangesNotMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipRanges),
  }
}


export function swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpIpRangesNotMatchToHclTerraform(struct?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpIpRangesNotMatchOutputReference | SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpIpRangesNotMatch): any {
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

export class SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpIpRangesNotMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpIpRangesNotMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRanges = this._ipRanges;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpIpRangesNotMatch | undefined) {
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
export interface SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIp {
  /**
  * geo_ip_match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#geo_ip_match SwsAdvancedRateLimiterProfile#geo_ip_match}
  */
  readonly geoIpMatch?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpGeoIpMatch;
  /**
  * geo_ip_not_match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#geo_ip_not_match SwsAdvancedRateLimiterProfile#geo_ip_not_match}
  */
  readonly geoIpNotMatch?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpGeoIpNotMatch;
  /**
  * ip_ranges_match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#ip_ranges_match SwsAdvancedRateLimiterProfile#ip_ranges_match}
  */
  readonly ipRangesMatch?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpIpRangesMatch;
  /**
  * ip_ranges_not_match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#ip_ranges_not_match SwsAdvancedRateLimiterProfile#ip_ranges_not_match}
  */
  readonly ipRangesNotMatch?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpIpRangesNotMatch;
}

export function swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpToTerraform(struct?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpOutputReference | SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    geo_ip_match: swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpGeoIpMatchToTerraform(struct!.geoIpMatch),
    geo_ip_not_match: swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpGeoIpNotMatchToTerraform(struct!.geoIpNotMatch),
    ip_ranges_match: swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpIpRangesMatchToTerraform(struct!.ipRangesMatch),
    ip_ranges_not_match: swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpIpRangesNotMatchToTerraform(struct!.ipRangesNotMatch),
  }
}


export function swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpToHclTerraform(struct?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpOutputReference | SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    geo_ip_match: {
      value: swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpGeoIpMatchToHclTerraform(struct!.geoIpMatch),
      isBlock: true,
      type: "list",
      storageClassType: "SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpGeoIpMatchList",
    },
    geo_ip_not_match: {
      value: swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpGeoIpNotMatchToHclTerraform(struct!.geoIpNotMatch),
      isBlock: true,
      type: "list",
      storageClassType: "SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpGeoIpNotMatchList",
    },
    ip_ranges_match: {
      value: swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpIpRangesMatchToHclTerraform(struct!.ipRangesMatch),
      isBlock: true,
      type: "list",
      storageClassType: "SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpIpRangesMatchList",
    },
    ip_ranges_not_match: {
      value: swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpIpRangesNotMatchToHclTerraform(struct!.ipRangesNotMatch),
      isBlock: true,
      type: "list",
      storageClassType: "SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpIpRangesNotMatchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIp | undefined {
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

  public set internalValue(value: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIp | undefined) {
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
  private _geoIpMatch = new SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpGeoIpMatchOutputReference(this, "geo_ip_match");
  public get geoIpMatch() {
    return this._geoIpMatch;
  }
  public putGeoIpMatch(value: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpGeoIpMatch) {
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
  private _geoIpNotMatch = new SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpGeoIpNotMatchOutputReference(this, "geo_ip_not_match");
  public get geoIpNotMatch() {
    return this._geoIpNotMatch;
  }
  public putGeoIpNotMatch(value: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpGeoIpNotMatch) {
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
  private _ipRangesMatch = new SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpIpRangesMatchOutputReference(this, "ip_ranges_match");
  public get ipRangesMatch() {
    return this._ipRangesMatch;
  }
  public putIpRangesMatch(value: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpIpRangesMatch) {
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
  private _ipRangesNotMatch = new SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpIpRangesNotMatchOutputReference(this, "ip_ranges_not_match");
  public get ipRangesNotMatch() {
    return this._ipRangesNotMatch;
  }
  public putIpRangesNotMatch(value: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpIpRangesNotMatch) {
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
export interface SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaCondition {
  /**
  * authority block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#authority SwsAdvancedRateLimiterProfile#authority}
  */
  readonly authority?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionAuthority;
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#headers SwsAdvancedRateLimiterProfile#headers}
  */
  readonly headers?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHeaders[] | cdktf.IResolvable;
  /**
  * http_method block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#http_method SwsAdvancedRateLimiterProfile#http_method}
  */
  readonly httpMethod?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHttpMethod;
  /**
  * request_uri block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#request_uri SwsAdvancedRateLimiterProfile#request_uri}
  */
  readonly requestUri?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUri;
  /**
  * source_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#source_ip SwsAdvancedRateLimiterProfile#source_ip}
  */
  readonly sourceIp?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIp;
}

export function swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionToTerraform(struct?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionOutputReference | SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authority: swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionAuthorityToTerraform(struct!.authority),
    headers: cdktf.listMapper(swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHeadersToTerraform, true)(struct!.headers),
    http_method: swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHttpMethodToTerraform(struct!.httpMethod),
    request_uri: swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriToTerraform(struct!.requestUri),
    source_ip: swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpToTerraform(struct!.sourceIp),
  }
}


export function swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionToHclTerraform(struct?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionOutputReference | SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authority: {
      value: swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionAuthorityToHclTerraform(struct!.authority),
      isBlock: true,
      type: "list",
      storageClassType: "SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionAuthorityList",
    },
    headers: {
      value: cdktf.listMapperHcl(swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHeadersToHclTerraform, true)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHeadersList",
    },
    http_method: {
      value: swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHttpMethodToHclTerraform(struct!.httpMethod),
      isBlock: true,
      type: "list",
      storageClassType: "SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHttpMethodList",
    },
    request_uri: {
      value: swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriToHclTerraform(struct!.requestUri),
      isBlock: true,
      type: "list",
      storageClassType: "SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriList",
    },
    source_ip: {
      value: swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpToHclTerraform(struct!.sourceIp),
      isBlock: true,
      type: "list",
      storageClassType: "SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaCondition | undefined {
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

  public set internalValue(value: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaCondition | undefined) {
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
  private _authority = new SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionAuthorityOutputReference(this, "authority");
  public get authority() {
    return this._authority;
  }
  public putAuthority(value: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionAuthority) {
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
  private _headers = new SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHeaders[] | cdktf.IResolvable) {
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
  private _httpMethod = new SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHttpMethodOutputReference(this, "http_method");
  public get httpMethod() {
    return this._httpMethod;
  }
  public putHttpMethod(value: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHttpMethod) {
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
  private _requestUri = new SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriOutputReference(this, "request_uri");
  public get requestUri() {
    return this._requestUri;
  }
  public putRequestUri(value: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUri) {
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
  private _sourceIp = new SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpOutputReference(this, "source_ip");
  public get sourceIp() {
    return this._sourceIp;
  }
  public putSourceIp(value: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIp) {
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
export interface SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuota {
  /**
  * Action in case of exceeding this quota. Possible values: `DENY`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#action SwsAdvancedRateLimiterProfile#action}
  */
  readonly action?: string;
  /**
  * Desired maximum number of requests per period.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#limit SwsAdvancedRateLimiterProfile#limit}
  */
  readonly limit?: number;
  /**
  * Period of time in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#period SwsAdvancedRateLimiterProfile#period}
  */
  readonly period?: number;
  /**
  * characteristic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#characteristic SwsAdvancedRateLimiterProfile#characteristic}
  */
  readonly characteristic?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaCharacteristic[] | cdktf.IResolvable;
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#condition SwsAdvancedRateLimiterProfile#condition}
  */
  readonly condition?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaCondition;
}

export function swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaToTerraform(struct?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaOutputReference | SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuota): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    limit: cdktf.numberToTerraform(struct!.limit),
    period: cdktf.numberToTerraform(struct!.period),
    characteristic: cdktf.listMapper(swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaCharacteristicToTerraform, true)(struct!.characteristic),
    condition: swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionToTerraform(struct!.condition),
  }
}


export function swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaToHclTerraform(struct?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaOutputReference | SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuota): any {
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
    limit: {
      value: cdktf.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    period: {
      value: cdktf.numberToHclTerraform(struct!.period),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    characteristic: {
      value: cdktf.listMapperHcl(swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaCharacteristicToHclTerraform, true)(struct!.characteristic),
      isBlock: true,
      type: "list",
      storageClassType: "SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaCharacteristicList",
    },
    condition: {
      value: swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionToHclTerraform(struct!.condition),
      isBlock: true,
      type: "list",
      storageClassType: "SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuota | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    if (this._characteristic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.characteristic = this._characteristic?.internalValue;
    }
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuota | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._limit = undefined;
      this._period = undefined;
      this._characteristic.internalValue = undefined;
      this._condition.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._limit = value.limit;
      this._period = value.period;
      this._characteristic.internalValue = value.characteristic;
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

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
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

  // characteristic - computed: false, optional: true, required: false
  private _characteristic = new SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaCharacteristicList(this, "characteristic", false);
  public get characteristic() {
    return this._characteristic;
  }
  public putCharacteristic(value: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaCharacteristic[] | cdktf.IResolvable) {
    this._characteristic.internalValue = value;
  }
  public resetCharacteristic() {
    this._characteristic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get characteristicInput() {
    return this._characteristic.internalValue;
  }

  // condition - computed: false, optional: true, required: false
  private _condition = new SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }
  public putCondition(value: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaCondition) {
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
export interface SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionAuthorityAuthorities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#exact_match SwsAdvancedRateLimiterProfile#exact_match}
  */
  readonly exactMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#exact_not_match SwsAdvancedRateLimiterProfile#exact_not_match}
  */
  readonly exactNotMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#pire_regex_match SwsAdvancedRateLimiterProfile#pire_regex_match}
  */
  readonly pireRegexMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#pire_regex_not_match SwsAdvancedRateLimiterProfile#pire_regex_not_match}
  */
  readonly pireRegexNotMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#prefix_match SwsAdvancedRateLimiterProfile#prefix_match}
  */
  readonly prefixMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#prefix_not_match SwsAdvancedRateLimiterProfile#prefix_not_match}
  */
  readonly prefixNotMatch?: string;
}

export function swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionAuthorityAuthoritiesToTerraform(struct?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionAuthorityAuthorities | cdktf.IResolvable): any {
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


export function swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionAuthorityAuthoritiesToHclTerraform(struct?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionAuthorityAuthorities | cdktf.IResolvable): any {
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

export class SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionAuthorityAuthoritiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionAuthorityAuthorities | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionAuthorityAuthorities | cdktf.IResolvable | undefined) {
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

export class SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionAuthorityAuthoritiesList extends cdktf.ComplexList {
  public internalValue? : SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionAuthorityAuthorities[] | cdktf.IResolvable

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
  public get(index: number): SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionAuthorityAuthoritiesOutputReference {
    return new SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionAuthorityAuthoritiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionAuthority {
  /**
  * authorities block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#authorities SwsAdvancedRateLimiterProfile#authorities}
  */
  readonly authorities?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionAuthorityAuthorities[] | cdktf.IResolvable;
}

export function swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionAuthorityToTerraform(struct?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionAuthorityOutputReference | SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionAuthority): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authorities: cdktf.listMapper(swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionAuthorityAuthoritiesToTerraform, true)(struct!.authorities),
  }
}


export function swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionAuthorityToHclTerraform(struct?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionAuthorityOutputReference | SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionAuthority): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authorities: {
      value: cdktf.listMapperHcl(swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionAuthorityAuthoritiesToHclTerraform, true)(struct!.authorities),
      isBlock: true,
      type: "list",
      storageClassType: "SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionAuthorityAuthoritiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionAuthorityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionAuthority | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorities = this._authorities?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionAuthority | undefined) {
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
  private _authorities = new SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionAuthorityAuthoritiesList(this, "authorities", false);
  public get authorities() {
    return this._authorities;
  }
  public putAuthorities(value: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionAuthorityAuthorities[] | cdktf.IResolvable) {
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
export interface SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHeadersValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#exact_match SwsAdvancedRateLimiterProfile#exact_match}
  */
  readonly exactMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#exact_not_match SwsAdvancedRateLimiterProfile#exact_not_match}
  */
  readonly exactNotMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#pire_regex_match SwsAdvancedRateLimiterProfile#pire_regex_match}
  */
  readonly pireRegexMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#pire_regex_not_match SwsAdvancedRateLimiterProfile#pire_regex_not_match}
  */
  readonly pireRegexNotMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#prefix_match SwsAdvancedRateLimiterProfile#prefix_match}
  */
  readonly prefixMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#prefix_not_match SwsAdvancedRateLimiterProfile#prefix_not_match}
  */
  readonly prefixNotMatch?: string;
}

export function swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHeadersValueToTerraform(struct?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHeadersValueOutputReference | SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHeadersValue): any {
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


export function swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHeadersValueToHclTerraform(struct?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHeadersValueOutputReference | SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHeadersValue): any {
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

export class SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHeadersValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHeadersValue | undefined {
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

  public set internalValue(value: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHeadersValue | undefined) {
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
export interface SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#name SwsAdvancedRateLimiterProfile#name}
  */
  readonly name?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#value SwsAdvancedRateLimiterProfile#value}
  */
  readonly value: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHeadersValue;
}

export function swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHeadersToTerraform(struct?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHeadersValueToTerraform(struct!.value),
  }
}


export function swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHeadersToHclTerraform(struct?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHeaders | cdktf.IResolvable): any {
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
      value: swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHeadersValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHeadersValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHeaders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHeaders | cdktf.IResolvable | undefined) {
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
  private _value = new SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHeadersValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHeadersValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHeadersList extends cdktf.ComplexList {
  public internalValue? : SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHeaders[] | cdktf.IResolvable

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
  public get(index: number): SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHeadersOutputReference {
    return new SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHttpMethodHttpMethods {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#exact_match SwsAdvancedRateLimiterProfile#exact_match}
  */
  readonly exactMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#exact_not_match SwsAdvancedRateLimiterProfile#exact_not_match}
  */
  readonly exactNotMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#pire_regex_match SwsAdvancedRateLimiterProfile#pire_regex_match}
  */
  readonly pireRegexMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#pire_regex_not_match SwsAdvancedRateLimiterProfile#pire_regex_not_match}
  */
  readonly pireRegexNotMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#prefix_match SwsAdvancedRateLimiterProfile#prefix_match}
  */
  readonly prefixMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#prefix_not_match SwsAdvancedRateLimiterProfile#prefix_not_match}
  */
  readonly prefixNotMatch?: string;
}

export function swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHttpMethodHttpMethodsToTerraform(struct?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHttpMethodHttpMethods | cdktf.IResolvable): any {
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


export function swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHttpMethodHttpMethodsToHclTerraform(struct?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHttpMethodHttpMethods | cdktf.IResolvable): any {
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

export class SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHttpMethodHttpMethodsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHttpMethodHttpMethods | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHttpMethodHttpMethods | cdktf.IResolvable | undefined) {
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

export class SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHttpMethodHttpMethodsList extends cdktf.ComplexList {
  public internalValue? : SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHttpMethodHttpMethods[] | cdktf.IResolvable

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
  public get(index: number): SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHttpMethodHttpMethodsOutputReference {
    return new SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHttpMethodHttpMethodsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHttpMethod {
  /**
  * http_methods block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#http_methods SwsAdvancedRateLimiterProfile#http_methods}
  */
  readonly httpMethods?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHttpMethodHttpMethods[] | cdktf.IResolvable;
}

export function swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHttpMethodToTerraform(struct?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHttpMethodOutputReference | SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHttpMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_methods: cdktf.listMapper(swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHttpMethodHttpMethodsToTerraform, true)(struct!.httpMethods),
  }
}


export function swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHttpMethodToHclTerraform(struct?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHttpMethodOutputReference | SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHttpMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_methods: {
      value: cdktf.listMapperHcl(swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHttpMethodHttpMethodsToHclTerraform, true)(struct!.httpMethods),
      isBlock: true,
      type: "list",
      storageClassType: "SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHttpMethodHttpMethodsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHttpMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHttpMethod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpMethods?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpMethods = this._httpMethods?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHttpMethod | undefined) {
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
  private _httpMethods = new SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHttpMethodHttpMethodsList(this, "http_methods", false);
  public get httpMethods() {
    return this._httpMethods;
  }
  public putHttpMethods(value: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHttpMethodHttpMethods[] | cdktf.IResolvable) {
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
export interface SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriPath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#exact_match SwsAdvancedRateLimiterProfile#exact_match}
  */
  readonly exactMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#exact_not_match SwsAdvancedRateLimiterProfile#exact_not_match}
  */
  readonly exactNotMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#pire_regex_match SwsAdvancedRateLimiterProfile#pire_regex_match}
  */
  readonly pireRegexMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#pire_regex_not_match SwsAdvancedRateLimiterProfile#pire_regex_not_match}
  */
  readonly pireRegexNotMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#prefix_match SwsAdvancedRateLimiterProfile#prefix_match}
  */
  readonly prefixMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#prefix_not_match SwsAdvancedRateLimiterProfile#prefix_not_match}
  */
  readonly prefixNotMatch?: string;
}

export function swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriPathToTerraform(struct?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriPathOutputReference | SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriPath): any {
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


export function swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriPathToHclTerraform(struct?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriPathOutputReference | SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriPath): any {
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

export class SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriPath | undefined {
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

  public set internalValue(value: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriPath | undefined) {
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
export interface SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriQueriesValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#exact_match SwsAdvancedRateLimiterProfile#exact_match}
  */
  readonly exactMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#exact_not_match SwsAdvancedRateLimiterProfile#exact_not_match}
  */
  readonly exactNotMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#pire_regex_match SwsAdvancedRateLimiterProfile#pire_regex_match}
  */
  readonly pireRegexMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#pire_regex_not_match SwsAdvancedRateLimiterProfile#pire_regex_not_match}
  */
  readonly pireRegexNotMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#prefix_match SwsAdvancedRateLimiterProfile#prefix_match}
  */
  readonly prefixMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#prefix_not_match SwsAdvancedRateLimiterProfile#prefix_not_match}
  */
  readonly prefixNotMatch?: string;
}

export function swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriQueriesValueToTerraform(struct?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriQueriesValueOutputReference | SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriQueriesValue): any {
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


export function swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriQueriesValueToHclTerraform(struct?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriQueriesValueOutputReference | SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriQueriesValue): any {
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

export class SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriQueriesValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriQueriesValue | undefined {
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

  public set internalValue(value: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriQueriesValue | undefined) {
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
export interface SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriQueries {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#key SwsAdvancedRateLimiterProfile#key}
  */
  readonly key: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#value SwsAdvancedRateLimiterProfile#value}
  */
  readonly value: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriQueriesValue;
}

export function swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriQueriesToTerraform(struct?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriQueries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriQueriesValueToTerraform(struct!.value),
  }
}


export function swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriQueriesToHclTerraform(struct?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriQueries | cdktf.IResolvable): any {
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
      value: swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriQueriesValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriQueriesValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriQueriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriQueries | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriQueries | cdktf.IResolvable | undefined) {
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
  private _value = new SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriQueriesValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriQueriesValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriQueriesList extends cdktf.ComplexList {
  public internalValue? : SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriQueries[] | cdktf.IResolvable

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
  public get(index: number): SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriQueriesOutputReference {
    return new SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriQueriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUri {
  /**
  * path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#path SwsAdvancedRateLimiterProfile#path}
  */
  readonly path?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriPath;
  /**
  * queries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#queries SwsAdvancedRateLimiterProfile#queries}
  */
  readonly queries?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriQueries[] | cdktf.IResolvable;
}

export function swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriToTerraform(struct?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriOutputReference | SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUri): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriPathToTerraform(struct!.path),
    queries: cdktf.listMapper(swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriQueriesToTerraform, true)(struct!.queries),
  }
}


export function swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriToHclTerraform(struct?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriOutputReference | SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUri): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriPathToHclTerraform(struct!.path),
      isBlock: true,
      type: "list",
      storageClassType: "SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriPathList",
    },
    queries: {
      value: cdktf.listMapperHcl(swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriQueriesToHclTerraform, true)(struct!.queries),
      isBlock: true,
      type: "list",
      storageClassType: "SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriQueriesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUri | undefined {
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

  public set internalValue(value: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUri | undefined) {
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
  private _path = new SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriPathOutputReference(this, "path");
  public get path() {
    return this._path;
  }
  public putPath(value: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriPath) {
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
  private _queries = new SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriQueriesList(this, "queries", false);
  public get queries() {
    return this._queries;
  }
  public putQueries(value: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriQueries[] | cdktf.IResolvable) {
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
export interface SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpGeoIpMatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#locations SwsAdvancedRateLimiterProfile#locations}
  */
  readonly locations?: string[];
}

export function swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpGeoIpMatchToTerraform(struct?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpGeoIpMatchOutputReference | SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpGeoIpMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    locations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.locations),
  }
}


export function swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpGeoIpMatchToHclTerraform(struct?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpGeoIpMatchOutputReference | SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpGeoIpMatch): any {
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

export class SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpGeoIpMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpGeoIpMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._locations !== undefined) {
      hasAnyValues = true;
      internalValueResult.locations = this._locations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpGeoIpMatch | undefined) {
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
export interface SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpGeoIpNotMatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#locations SwsAdvancedRateLimiterProfile#locations}
  */
  readonly locations?: string[];
}

export function swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpGeoIpNotMatchToTerraform(struct?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpGeoIpNotMatchOutputReference | SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpGeoIpNotMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    locations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.locations),
  }
}


export function swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpGeoIpNotMatchToHclTerraform(struct?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpGeoIpNotMatchOutputReference | SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpGeoIpNotMatch): any {
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

export class SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpGeoIpNotMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpGeoIpNotMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._locations !== undefined) {
      hasAnyValues = true;
      internalValueResult.locations = this._locations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpGeoIpNotMatch | undefined) {
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
export interface SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpIpRangesMatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#ip_ranges SwsAdvancedRateLimiterProfile#ip_ranges}
  */
  readonly ipRanges?: string[];
}

export function swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpIpRangesMatchToTerraform(struct?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpIpRangesMatchOutputReference | SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpIpRangesMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipRanges),
  }
}


export function swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpIpRangesMatchToHclTerraform(struct?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpIpRangesMatchOutputReference | SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpIpRangesMatch): any {
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

export class SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpIpRangesMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpIpRangesMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRanges = this._ipRanges;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpIpRangesMatch | undefined) {
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
export interface SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpIpRangesNotMatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#ip_ranges SwsAdvancedRateLimiterProfile#ip_ranges}
  */
  readonly ipRanges?: string[];
}

export function swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpIpRangesNotMatchToTerraform(struct?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpIpRangesNotMatchOutputReference | SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpIpRangesNotMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipRanges),
  }
}


export function swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpIpRangesNotMatchToHclTerraform(struct?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpIpRangesNotMatchOutputReference | SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpIpRangesNotMatch): any {
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

export class SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpIpRangesNotMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpIpRangesNotMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRanges = this._ipRanges;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpIpRangesNotMatch | undefined) {
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
export interface SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIp {
  /**
  * geo_ip_match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#geo_ip_match SwsAdvancedRateLimiterProfile#geo_ip_match}
  */
  readonly geoIpMatch?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpGeoIpMatch;
  /**
  * geo_ip_not_match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#geo_ip_not_match SwsAdvancedRateLimiterProfile#geo_ip_not_match}
  */
  readonly geoIpNotMatch?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpGeoIpNotMatch;
  /**
  * ip_ranges_match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#ip_ranges_match SwsAdvancedRateLimiterProfile#ip_ranges_match}
  */
  readonly ipRangesMatch?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpIpRangesMatch;
  /**
  * ip_ranges_not_match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#ip_ranges_not_match SwsAdvancedRateLimiterProfile#ip_ranges_not_match}
  */
  readonly ipRangesNotMatch?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpIpRangesNotMatch;
}

export function swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpToTerraform(struct?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpOutputReference | SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    geo_ip_match: swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpGeoIpMatchToTerraform(struct!.geoIpMatch),
    geo_ip_not_match: swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpGeoIpNotMatchToTerraform(struct!.geoIpNotMatch),
    ip_ranges_match: swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpIpRangesMatchToTerraform(struct!.ipRangesMatch),
    ip_ranges_not_match: swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpIpRangesNotMatchToTerraform(struct!.ipRangesNotMatch),
  }
}


export function swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpToHclTerraform(struct?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpOutputReference | SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    geo_ip_match: {
      value: swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpGeoIpMatchToHclTerraform(struct!.geoIpMatch),
      isBlock: true,
      type: "list",
      storageClassType: "SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpGeoIpMatchList",
    },
    geo_ip_not_match: {
      value: swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpGeoIpNotMatchToHclTerraform(struct!.geoIpNotMatch),
      isBlock: true,
      type: "list",
      storageClassType: "SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpGeoIpNotMatchList",
    },
    ip_ranges_match: {
      value: swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpIpRangesMatchToHclTerraform(struct!.ipRangesMatch),
      isBlock: true,
      type: "list",
      storageClassType: "SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpIpRangesMatchList",
    },
    ip_ranges_not_match: {
      value: swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpIpRangesNotMatchToHclTerraform(struct!.ipRangesNotMatch),
      isBlock: true,
      type: "list",
      storageClassType: "SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpIpRangesNotMatchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIp | undefined {
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

  public set internalValue(value: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIp | undefined) {
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
  private _geoIpMatch = new SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpGeoIpMatchOutputReference(this, "geo_ip_match");
  public get geoIpMatch() {
    return this._geoIpMatch;
  }
  public putGeoIpMatch(value: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpGeoIpMatch) {
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
  private _geoIpNotMatch = new SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpGeoIpNotMatchOutputReference(this, "geo_ip_not_match");
  public get geoIpNotMatch() {
    return this._geoIpNotMatch;
  }
  public putGeoIpNotMatch(value: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpGeoIpNotMatch) {
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
  private _ipRangesMatch = new SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpIpRangesMatchOutputReference(this, "ip_ranges_match");
  public get ipRangesMatch() {
    return this._ipRangesMatch;
  }
  public putIpRangesMatch(value: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpIpRangesMatch) {
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
  private _ipRangesNotMatch = new SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpIpRangesNotMatchOutputReference(this, "ip_ranges_not_match");
  public get ipRangesNotMatch() {
    return this._ipRangesNotMatch;
  }
  public putIpRangesNotMatch(value: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpIpRangesNotMatch) {
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
export interface SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaCondition {
  /**
  * authority block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#authority SwsAdvancedRateLimiterProfile#authority}
  */
  readonly authority?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionAuthority;
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#headers SwsAdvancedRateLimiterProfile#headers}
  */
  readonly headers?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHeaders[] | cdktf.IResolvable;
  /**
  * http_method block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#http_method SwsAdvancedRateLimiterProfile#http_method}
  */
  readonly httpMethod?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHttpMethod;
  /**
  * request_uri block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#request_uri SwsAdvancedRateLimiterProfile#request_uri}
  */
  readonly requestUri?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUri;
  /**
  * source_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#source_ip SwsAdvancedRateLimiterProfile#source_ip}
  */
  readonly sourceIp?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIp;
}

export function swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionToTerraform(struct?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionOutputReference | SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authority: swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionAuthorityToTerraform(struct!.authority),
    headers: cdktf.listMapper(swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHeadersToTerraform, true)(struct!.headers),
    http_method: swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHttpMethodToTerraform(struct!.httpMethod),
    request_uri: swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriToTerraform(struct!.requestUri),
    source_ip: swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpToTerraform(struct!.sourceIp),
  }
}


export function swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionToHclTerraform(struct?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionOutputReference | SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authority: {
      value: swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionAuthorityToHclTerraform(struct!.authority),
      isBlock: true,
      type: "list",
      storageClassType: "SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionAuthorityList",
    },
    headers: {
      value: cdktf.listMapperHcl(swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHeadersToHclTerraform, true)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHeadersList",
    },
    http_method: {
      value: swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHttpMethodToHclTerraform(struct!.httpMethod),
      isBlock: true,
      type: "list",
      storageClassType: "SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHttpMethodList",
    },
    request_uri: {
      value: swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriToHclTerraform(struct!.requestUri),
      isBlock: true,
      type: "list",
      storageClassType: "SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriList",
    },
    source_ip: {
      value: swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpToHclTerraform(struct!.sourceIp),
      isBlock: true,
      type: "list",
      storageClassType: "SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaCondition | undefined {
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

  public set internalValue(value: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaCondition | undefined) {
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
  private _authority = new SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionAuthorityOutputReference(this, "authority");
  public get authority() {
    return this._authority;
  }
  public putAuthority(value: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionAuthority) {
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
  private _headers = new SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHeaders[] | cdktf.IResolvable) {
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
  private _httpMethod = new SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHttpMethodOutputReference(this, "http_method");
  public get httpMethod() {
    return this._httpMethod;
  }
  public putHttpMethod(value: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHttpMethod) {
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
  private _requestUri = new SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriOutputReference(this, "request_uri");
  public get requestUri() {
    return this._requestUri;
  }
  public putRequestUri(value: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUri) {
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
  private _sourceIp = new SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpOutputReference(this, "source_ip");
  public get sourceIp() {
    return this._sourceIp;
  }
  public putSourceIp(value: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIp) {
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
export interface SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuota {
  /**
  * Action in case of exceeding this quota. Possible values: `DENY`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#action SwsAdvancedRateLimiterProfile#action}
  */
  readonly action?: string;
  /**
  * Desired maximum number of requests per period.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#limit SwsAdvancedRateLimiterProfile#limit}
  */
  readonly limit?: number;
  /**
  * Period of time in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#period SwsAdvancedRateLimiterProfile#period}
  */
  readonly period?: number;
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#condition SwsAdvancedRateLimiterProfile#condition}
  */
  readonly condition?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaCondition;
}

export function swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaToTerraform(struct?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaOutputReference | SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuota): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    limit: cdktf.numberToTerraform(struct!.limit),
    period: cdktf.numberToTerraform(struct!.period),
    condition: swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionToTerraform(struct!.condition),
  }
}


export function swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaToHclTerraform(struct?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaOutputReference | SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuota): any {
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
    limit: {
      value: cdktf.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    period: {
      value: cdktf.numberToHclTerraform(struct!.period),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    condition: {
      value: swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionToHclTerraform(struct!.condition),
      isBlock: true,
      type: "list",
      storageClassType: "SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuota | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuota | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._limit = undefined;
      this._period = undefined;
      this._condition.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._limit = value.limit;
      this._period = value.period;
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

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
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

  // condition - computed: false, optional: true, required: false
  private _condition = new SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }
  public putCondition(value: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaCondition) {
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
export interface SwsAdvancedRateLimiterProfileAdvancedRateLimiterRule {
  /**
  * Description of the rule. 0-512 characters long.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#description SwsAdvancedRateLimiterProfile#description}
  */
  readonly description?: string;
  /**
  * This allows you to evaluate backend capabilities and find the optimum limit values. Requests will not be blocked in this mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#dry_run SwsAdvancedRateLimiterProfile#dry_run}
  */
  readonly dryRun?: boolean | cdktf.IResolvable;
  /**
  * Name of the rule. The name is unique within the ARL profile. 1-50 characters long.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#name SwsAdvancedRateLimiterProfile#name}
  */
  readonly name?: string;
  /**
  * Determines the priority in case there are several matched rules. Enter an integer within the range of 1 and 999999. The rule priority must be unique within the entire ARL profile. A lower numeric value means a higher priority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#priority SwsAdvancedRateLimiterProfile#priority}
  */
  readonly priority?: number;
  /**
  * dynamic_quota block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#dynamic_quota SwsAdvancedRateLimiterProfile#dynamic_quota}
  */
  readonly dynamicQuota?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuota;
  /**
  * static_quota block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#static_quota SwsAdvancedRateLimiterProfile#static_quota}
  */
  readonly staticQuota?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuota;
}

export function swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleToTerraform(struct?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    dry_run: cdktf.booleanToTerraform(struct!.dryRun),
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
    dynamic_quota: swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaToTerraform(struct!.dynamicQuota),
    static_quota: swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaToTerraform(struct!.staticQuota),
  }
}


export function swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleToHclTerraform(struct?: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRule | cdktf.IResolvable): any {
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
    dynamic_quota: {
      value: swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaToHclTerraform(struct!.dynamicQuota),
      isBlock: true,
      type: "list",
      storageClassType: "SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaList",
    },
    static_quota: {
      value: swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaToHclTerraform(struct!.staticQuota),
      isBlock: true,
      type: "list",
      storageClassType: "SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwsAdvancedRateLimiterProfileAdvancedRateLimiterRule | cdktf.IResolvable | undefined {
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
    if (this._dynamicQuota?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicQuota = this._dynamicQuota?.internalValue;
    }
    if (this._staticQuota?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticQuota = this._staticQuota?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._dryRun = undefined;
      this._name = undefined;
      this._priority = undefined;
      this._dynamicQuota.internalValue = undefined;
      this._staticQuota.internalValue = undefined;
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
      this._dynamicQuota.internalValue = value.dynamicQuota;
      this._staticQuota.internalValue = value.staticQuota;
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

  // dynamic_quota - computed: false, optional: true, required: false
  private _dynamicQuota = new SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaOutputReference(this, "dynamic_quota");
  public get dynamicQuota() {
    return this._dynamicQuota;
  }
  public putDynamicQuota(value: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuota) {
    this._dynamicQuota.internalValue = value;
  }
  public resetDynamicQuota() {
    this._dynamicQuota.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicQuotaInput() {
    return this._dynamicQuota.internalValue;
  }

  // static_quota - computed: false, optional: true, required: false
  private _staticQuota = new SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaOutputReference(this, "static_quota");
  public get staticQuota() {
    return this._staticQuota;
  }
  public putStaticQuota(value: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuota) {
    this._staticQuota.internalValue = value;
  }
  public resetStaticQuota() {
    this._staticQuota.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticQuotaInput() {
    return this._staticQuota.internalValue;
  }
}

export class SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleList extends cdktf.ComplexList {
  public internalValue? : SwsAdvancedRateLimiterProfileAdvancedRateLimiterRule[] | cdktf.IResolvable

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
  public get(index: number): SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleOutputReference {
    return new SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwsAdvancedRateLimiterProfileTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#create SwsAdvancedRateLimiterProfile#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#delete SwsAdvancedRateLimiterProfile#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#read SwsAdvancedRateLimiterProfile#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#update SwsAdvancedRateLimiterProfile#update}
  */
  readonly update?: string;
}

export function swsAdvancedRateLimiterProfileTimeoutsToTerraform(struct?: SwsAdvancedRateLimiterProfileTimeouts | cdktf.IResolvable): any {
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


export function swsAdvancedRateLimiterProfileTimeoutsToHclTerraform(struct?: SwsAdvancedRateLimiterProfileTimeouts | cdktf.IResolvable): any {
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

export class SwsAdvancedRateLimiterProfileTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SwsAdvancedRateLimiterProfileTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SwsAdvancedRateLimiterProfileTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile yandex_sws_advanced_rate_limiter_profile}
*/
export class SwsAdvancedRateLimiterProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_sws_advanced_rate_limiter_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwsAdvancedRateLimiterProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwsAdvancedRateLimiterProfile to import
  * @param importFromId The id of the existing SwsAdvancedRateLimiterProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwsAdvancedRateLimiterProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_sws_advanced_rate_limiter_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/sws_advanced_rate_limiter_profile yandex_sws_advanced_rate_limiter_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwsAdvancedRateLimiterProfileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SwsAdvancedRateLimiterProfileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'yandex_sws_advanced_rate_limiter_profile',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.171.0',
        providerVersionConstraint: '0.171.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cloudId = config.cloudId;
    this._description = config.description;
    this._folderId = config.folderId;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._advancedRateLimiterRule.internalValue = config.advancedRateLimiterRule;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // advanced_rate_limiter_rule - computed: false, optional: true, required: false
  private _advancedRateLimiterRule = new SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleList(this, "advanced_rate_limiter_rule", false);
  public get advancedRateLimiterRule() {
    return this._advancedRateLimiterRule;
  }
  public putAdvancedRateLimiterRule(value: SwsAdvancedRateLimiterProfileAdvancedRateLimiterRule[] | cdktf.IResolvable) {
    this._advancedRateLimiterRule.internalValue = value;
  }
  public resetAdvancedRateLimiterRule() {
    this._advancedRateLimiterRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedRateLimiterRuleInput() {
    return this._advancedRateLimiterRule.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SwsAdvancedRateLimiterProfileTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SwsAdvancedRateLimiterProfileTimeouts) {
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
      cloud_id: cdktf.stringToTerraform(this._cloudId),
      description: cdktf.stringToTerraform(this._description),
      folder_id: cdktf.stringToTerraform(this._folderId),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      advanced_rate_limiter_rule: cdktf.listMapper(swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleToTerraform, true)(this._advancedRateLimiterRule.internalValue),
      timeouts: swsAdvancedRateLimiterProfileTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_id: {
        value: cdktf.stringToHclTerraform(this._cloudId),
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
      advanced_rate_limiter_rule: {
        value: cdktf.listMapperHcl(swsAdvancedRateLimiterProfileAdvancedRateLimiterRuleToHclTerraform, true)(this._advancedRateLimiterRule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleList",
      },
      timeouts: {
        value: swsAdvancedRateLimiterProfileTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SwsAdvancedRateLimiterProfileTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
