// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/web_category_reputation_scope
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WebCategoryReputationScopeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/web_category_reputation_scope#id WebCategoryReputationScope#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Reputation Scope name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/web_category_reputation_scope#name WebCategoryReputationScope#name}
  */
  readonly name: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/web_category_reputation_scope#user_tag WebCategoryReputationScope#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/web_category_reputation_scope#uuid WebCategoryReputationScope#uuid}
  */
  readonly uuid?: string;
  /**
  * greater_than block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/web_category_reputation_scope#greater_than WebCategoryReputationScope#greater_than}
  */
  readonly greaterThan?: WebCategoryReputationScopeGreaterThan;
  /**
  * less_than block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/web_category_reputation_scope#less_than WebCategoryReputationScope#less_than}
  */
  readonly lessThan?: WebCategoryReputationScopeLessThan;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/web_category_reputation_scope#sampling_enable WebCategoryReputationScope#sampling_enable}
  */
  readonly samplingEnable?: WebCategoryReputationScopeSamplingEnable[] | cdktf.IResolvable;
}
export interface WebCategoryReputationScopeGreaterThan {
  /**
  * Reputation score is greater than or equal to 61
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/web_category_reputation_scope#greater_low_risk WebCategoryReputationScope#greater_low_risk}
  */
  readonly greaterLowRisk?: number;
  /**
  * Reputation score is greater than or equal to 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/web_category_reputation_scope#greater_malicious WebCategoryReputationScope#greater_malicious}
  */
  readonly greaterMalicious?: number;
  /**
  * Reputation score is greater than or equal to 41
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/web_category_reputation_scope#greater_moderate_risk WebCategoryReputationScope#greater_moderate_risk}
  */
  readonly greaterModerateRisk?: number;
  /**
  * Reputation score is greater than or equal to 21
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/web_category_reputation_scope#greater_suspicious WebCategoryReputationScope#greater_suspicious}
  */
  readonly greaterSuspicious?: number;
  /**
  * Reputation score is greater than or equal to the customized score (1-100)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/web_category_reputation_scope#greater_threshold WebCategoryReputationScope#greater_threshold}
  */
  readonly greaterThreshold?: number;
  /**
  * Reputation score is greater than or equal to 81
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/web_category_reputation_scope#greater_trustworthy WebCategoryReputationScope#greater_trustworthy}
  */
  readonly greaterTrustworthy?: number;
}

export function webCategoryReputationScopeGreaterThanToTerraform(struct?: WebCategoryReputationScopeGreaterThanOutputReference | WebCategoryReputationScopeGreaterThan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    greater_low_risk: cdktf.numberToTerraform(struct!.greaterLowRisk),
    greater_malicious: cdktf.numberToTerraform(struct!.greaterMalicious),
    greater_moderate_risk: cdktf.numberToTerraform(struct!.greaterModerateRisk),
    greater_suspicious: cdktf.numberToTerraform(struct!.greaterSuspicious),
    greater_threshold: cdktf.numberToTerraform(struct!.greaterThreshold),
    greater_trustworthy: cdktf.numberToTerraform(struct!.greaterTrustworthy),
  }
}


export function webCategoryReputationScopeGreaterThanToHclTerraform(struct?: WebCategoryReputationScopeGreaterThanOutputReference | WebCategoryReputationScopeGreaterThan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    greater_low_risk: {
      value: cdktf.numberToHclTerraform(struct!.greaterLowRisk),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    greater_malicious: {
      value: cdktf.numberToHclTerraform(struct!.greaterMalicious),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    greater_moderate_risk: {
      value: cdktf.numberToHclTerraform(struct!.greaterModerateRisk),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    greater_suspicious: {
      value: cdktf.numberToHclTerraform(struct!.greaterSuspicious),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    greater_threshold: {
      value: cdktf.numberToHclTerraform(struct!.greaterThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    greater_trustworthy: {
      value: cdktf.numberToHclTerraform(struct!.greaterTrustworthy),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebCategoryReputationScopeGreaterThanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebCategoryReputationScopeGreaterThan | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._greaterLowRisk !== undefined) {
      hasAnyValues = true;
      internalValueResult.greaterLowRisk = this._greaterLowRisk;
    }
    if (this._greaterMalicious !== undefined) {
      hasAnyValues = true;
      internalValueResult.greaterMalicious = this._greaterMalicious;
    }
    if (this._greaterModerateRisk !== undefined) {
      hasAnyValues = true;
      internalValueResult.greaterModerateRisk = this._greaterModerateRisk;
    }
    if (this._greaterSuspicious !== undefined) {
      hasAnyValues = true;
      internalValueResult.greaterSuspicious = this._greaterSuspicious;
    }
    if (this._greaterThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.greaterThreshold = this._greaterThreshold;
    }
    if (this._greaterTrustworthy !== undefined) {
      hasAnyValues = true;
      internalValueResult.greaterTrustworthy = this._greaterTrustworthy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebCategoryReputationScopeGreaterThan | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._greaterLowRisk = undefined;
      this._greaterMalicious = undefined;
      this._greaterModerateRisk = undefined;
      this._greaterSuspicious = undefined;
      this._greaterThreshold = undefined;
      this._greaterTrustworthy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._greaterLowRisk = value.greaterLowRisk;
      this._greaterMalicious = value.greaterMalicious;
      this._greaterModerateRisk = value.greaterModerateRisk;
      this._greaterSuspicious = value.greaterSuspicious;
      this._greaterThreshold = value.greaterThreshold;
      this._greaterTrustworthy = value.greaterTrustworthy;
    }
  }

  // greater_low_risk - computed: false, optional: true, required: false
  private _greaterLowRisk?: number; 
  public get greaterLowRisk() {
    return this.getNumberAttribute('greater_low_risk');
  }
  public set greaterLowRisk(value: number) {
    this._greaterLowRisk = value;
  }
  public resetGreaterLowRisk() {
    this._greaterLowRisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get greaterLowRiskInput() {
    return this._greaterLowRisk;
  }

  // greater_malicious - computed: false, optional: true, required: false
  private _greaterMalicious?: number; 
  public get greaterMalicious() {
    return this.getNumberAttribute('greater_malicious');
  }
  public set greaterMalicious(value: number) {
    this._greaterMalicious = value;
  }
  public resetGreaterMalicious() {
    this._greaterMalicious = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get greaterMaliciousInput() {
    return this._greaterMalicious;
  }

  // greater_moderate_risk - computed: false, optional: true, required: false
  private _greaterModerateRisk?: number; 
  public get greaterModerateRisk() {
    return this.getNumberAttribute('greater_moderate_risk');
  }
  public set greaterModerateRisk(value: number) {
    this._greaterModerateRisk = value;
  }
  public resetGreaterModerateRisk() {
    this._greaterModerateRisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get greaterModerateRiskInput() {
    return this._greaterModerateRisk;
  }

  // greater_suspicious - computed: false, optional: true, required: false
  private _greaterSuspicious?: number; 
  public get greaterSuspicious() {
    return this.getNumberAttribute('greater_suspicious');
  }
  public set greaterSuspicious(value: number) {
    this._greaterSuspicious = value;
  }
  public resetGreaterSuspicious() {
    this._greaterSuspicious = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get greaterSuspiciousInput() {
    return this._greaterSuspicious;
  }

  // greater_threshold - computed: false, optional: true, required: false
  private _greaterThreshold?: number; 
  public get greaterThreshold() {
    return this.getNumberAttribute('greater_threshold');
  }
  public set greaterThreshold(value: number) {
    this._greaterThreshold = value;
  }
  public resetGreaterThreshold() {
    this._greaterThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get greaterThresholdInput() {
    return this._greaterThreshold;
  }

  // greater_trustworthy - computed: false, optional: true, required: false
  private _greaterTrustworthy?: number; 
  public get greaterTrustworthy() {
    return this.getNumberAttribute('greater_trustworthy');
  }
  public set greaterTrustworthy(value: number) {
    this._greaterTrustworthy = value;
  }
  public resetGreaterTrustworthy() {
    this._greaterTrustworthy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get greaterTrustworthyInput() {
    return this._greaterTrustworthy;
  }
}
export interface WebCategoryReputationScopeLessThan {
  /**
  * Reputation score is less than or equal to 80
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/web_category_reputation_scope#less_low_risk WebCategoryReputationScope#less_low_risk}
  */
  readonly lessLowRisk?: number;
  /**
  * Reputation score is less than or equal to 20
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/web_category_reputation_scope#less_malicious WebCategoryReputationScope#less_malicious}
  */
  readonly lessMalicious?: number;
  /**
  * Reputation score is less than or equal to 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/web_category_reputation_scope#less_moderate_risk WebCategoryReputationScope#less_moderate_risk}
  */
  readonly lessModerateRisk?: number;
  /**
  * Reputation score is less than or equal to 40
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/web_category_reputation_scope#less_suspicious WebCategoryReputationScope#less_suspicious}
  */
  readonly lessSuspicious?: number;
  /**
  * Reputation score is less than or equal to a customized value (1-100)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/web_category_reputation_scope#less_threshold WebCategoryReputationScope#less_threshold}
  */
  readonly lessThreshold?: number;
  /**
  * Reputation score is less than or equal to 100
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/web_category_reputation_scope#less_trustworthy WebCategoryReputationScope#less_trustworthy}
  */
  readonly lessTrustworthy?: number;
}

export function webCategoryReputationScopeLessThanToTerraform(struct?: WebCategoryReputationScopeLessThanOutputReference | WebCategoryReputationScopeLessThan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    less_low_risk: cdktf.numberToTerraform(struct!.lessLowRisk),
    less_malicious: cdktf.numberToTerraform(struct!.lessMalicious),
    less_moderate_risk: cdktf.numberToTerraform(struct!.lessModerateRisk),
    less_suspicious: cdktf.numberToTerraform(struct!.lessSuspicious),
    less_threshold: cdktf.numberToTerraform(struct!.lessThreshold),
    less_trustworthy: cdktf.numberToTerraform(struct!.lessTrustworthy),
  }
}


export function webCategoryReputationScopeLessThanToHclTerraform(struct?: WebCategoryReputationScopeLessThanOutputReference | WebCategoryReputationScopeLessThan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    less_low_risk: {
      value: cdktf.numberToHclTerraform(struct!.lessLowRisk),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    less_malicious: {
      value: cdktf.numberToHclTerraform(struct!.lessMalicious),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    less_moderate_risk: {
      value: cdktf.numberToHclTerraform(struct!.lessModerateRisk),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    less_suspicious: {
      value: cdktf.numberToHclTerraform(struct!.lessSuspicious),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    less_threshold: {
      value: cdktf.numberToHclTerraform(struct!.lessThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    less_trustworthy: {
      value: cdktf.numberToHclTerraform(struct!.lessTrustworthy),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebCategoryReputationScopeLessThanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebCategoryReputationScopeLessThan | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lessLowRisk !== undefined) {
      hasAnyValues = true;
      internalValueResult.lessLowRisk = this._lessLowRisk;
    }
    if (this._lessMalicious !== undefined) {
      hasAnyValues = true;
      internalValueResult.lessMalicious = this._lessMalicious;
    }
    if (this._lessModerateRisk !== undefined) {
      hasAnyValues = true;
      internalValueResult.lessModerateRisk = this._lessModerateRisk;
    }
    if (this._lessSuspicious !== undefined) {
      hasAnyValues = true;
      internalValueResult.lessSuspicious = this._lessSuspicious;
    }
    if (this._lessThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.lessThreshold = this._lessThreshold;
    }
    if (this._lessTrustworthy !== undefined) {
      hasAnyValues = true;
      internalValueResult.lessTrustworthy = this._lessTrustworthy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebCategoryReputationScopeLessThan | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lessLowRisk = undefined;
      this._lessMalicious = undefined;
      this._lessModerateRisk = undefined;
      this._lessSuspicious = undefined;
      this._lessThreshold = undefined;
      this._lessTrustworthy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lessLowRisk = value.lessLowRisk;
      this._lessMalicious = value.lessMalicious;
      this._lessModerateRisk = value.lessModerateRisk;
      this._lessSuspicious = value.lessSuspicious;
      this._lessThreshold = value.lessThreshold;
      this._lessTrustworthy = value.lessTrustworthy;
    }
  }

  // less_low_risk - computed: false, optional: true, required: false
  private _lessLowRisk?: number; 
  public get lessLowRisk() {
    return this.getNumberAttribute('less_low_risk');
  }
  public set lessLowRisk(value: number) {
    this._lessLowRisk = value;
  }
  public resetLessLowRisk() {
    this._lessLowRisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lessLowRiskInput() {
    return this._lessLowRisk;
  }

  // less_malicious - computed: false, optional: true, required: false
  private _lessMalicious?: number; 
  public get lessMalicious() {
    return this.getNumberAttribute('less_malicious');
  }
  public set lessMalicious(value: number) {
    this._lessMalicious = value;
  }
  public resetLessMalicious() {
    this._lessMalicious = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lessMaliciousInput() {
    return this._lessMalicious;
  }

  // less_moderate_risk - computed: false, optional: true, required: false
  private _lessModerateRisk?: number; 
  public get lessModerateRisk() {
    return this.getNumberAttribute('less_moderate_risk');
  }
  public set lessModerateRisk(value: number) {
    this._lessModerateRisk = value;
  }
  public resetLessModerateRisk() {
    this._lessModerateRisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lessModerateRiskInput() {
    return this._lessModerateRisk;
  }

  // less_suspicious - computed: false, optional: true, required: false
  private _lessSuspicious?: number; 
  public get lessSuspicious() {
    return this.getNumberAttribute('less_suspicious');
  }
  public set lessSuspicious(value: number) {
    this._lessSuspicious = value;
  }
  public resetLessSuspicious() {
    this._lessSuspicious = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lessSuspiciousInput() {
    return this._lessSuspicious;
  }

  // less_threshold - computed: false, optional: true, required: false
  private _lessThreshold?: number; 
  public get lessThreshold() {
    return this.getNumberAttribute('less_threshold');
  }
  public set lessThreshold(value: number) {
    this._lessThreshold = value;
  }
  public resetLessThreshold() {
    this._lessThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lessThresholdInput() {
    return this._lessThreshold;
  }

  // less_trustworthy - computed: false, optional: true, required: false
  private _lessTrustworthy?: number; 
  public get lessTrustworthy() {
    return this.getNumberAttribute('less_trustworthy');
  }
  public set lessTrustworthy(value: number) {
    this._lessTrustworthy = value;
  }
  public resetLessTrustworthy() {
    this._lessTrustworthy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lessTrustworthyInput() {
    return this._lessTrustworthy;
  }
}
export interface WebCategoryReputationScopeSamplingEnable {
  /**
  * 'all': all; 'trustworthy': Trustworthy level(81-100); 'low-risk': Low-risk level(61-80); 'moderate-risk': Moderate-risk level(41-60); 'suspicious': Suspicious level(21-40); 'malicious': Malicious level(1-20);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/web_category_reputation_scope#counters1 WebCategoryReputationScope#counters1}
  */
  readonly counters1?: string;
}

export function webCategoryReputationScopeSamplingEnableToTerraform(struct?: WebCategoryReputationScopeSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function webCategoryReputationScopeSamplingEnableToHclTerraform(struct?: WebCategoryReputationScopeSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebCategoryReputationScopeSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebCategoryReputationScopeSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebCategoryReputationScopeSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class WebCategoryReputationScopeSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : WebCategoryReputationScopeSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): WebCategoryReputationScopeSamplingEnableOutputReference {
    return new WebCategoryReputationScopeSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/web_category_reputation_scope thunder_web_category_reputation_scope}
*/
export class WebCategoryReputationScope extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_web_category_reputation_scope";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WebCategoryReputationScope resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WebCategoryReputationScope to import
  * @param importFromId The id of the existing WebCategoryReputationScope that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/web_category_reputation_scope#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WebCategoryReputationScope to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_web_category_reputation_scope", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/web_category_reputation_scope thunder_web_category_reputation_scope} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WebCategoryReputationScopeConfig
  */
  public constructor(scope: Construct, id: string, config: WebCategoryReputationScopeConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_web_category_reputation_scope',
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
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._greaterThan.internalValue = config.greaterThan;
    this._lessThan.internalValue = config.lessThan;
    this._samplingEnable.internalValue = config.samplingEnable;
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

  // greater_than - computed: false, optional: true, required: false
  private _greaterThan = new WebCategoryReputationScopeGreaterThanOutputReference(this, "greater_than");
  public get greaterThan() {
    return this._greaterThan;
  }
  public putGreaterThan(value: WebCategoryReputationScopeGreaterThan) {
    this._greaterThan.internalValue = value;
  }
  public resetGreaterThan() {
    this._greaterThan.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get greaterThanInput() {
    return this._greaterThan.internalValue;
  }

  // less_than - computed: false, optional: true, required: false
  private _lessThan = new WebCategoryReputationScopeLessThanOutputReference(this, "less_than");
  public get lessThan() {
    return this._lessThan;
  }
  public putLessThan(value: WebCategoryReputationScopeLessThan) {
    this._lessThan.internalValue = value;
  }
  public resetLessThan() {
    this._lessThan.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lessThanInput() {
    return this._lessThan.internalValue;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new WebCategoryReputationScopeSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: WebCategoryReputationScopeSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      greater_than: webCategoryReputationScopeGreaterThanToTerraform(this._greaterThan.internalValue),
      less_than: webCategoryReputationScopeLessThanToTerraform(this._lessThan.internalValue),
      sampling_enable: cdktf.listMapper(webCategoryReputationScopeSamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
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
      greater_than: {
        value: webCategoryReputationScopeGreaterThanToHclTerraform(this._greaterThan.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WebCategoryReputationScopeGreaterThanList",
      },
      less_than: {
        value: webCategoryReputationScopeLessThanToHclTerraform(this._lessThan.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WebCategoryReputationScopeLessThanList",
      },
      sampling_enable: {
        value: cdktf.listMapperHcl(webCategoryReputationScopeSamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WebCategoryReputationScopeSamplingEnableList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
