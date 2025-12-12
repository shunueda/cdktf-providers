// https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwsWafProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * The `Cloud ID` which resource belongs to. If it is not provided, the default provider `cloud-id` is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#cloud_id SwsWafProfile#cloud_id}
  */
  readonly cloudId?: string;
  /**
  * The resource description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#description SwsWafProfile#description}
  */
  readonly description?: string;
  /**
  * The folder identifier that resource belongs to. If it is not provided, the default provider `folder-id` is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#folder_id SwsWafProfile#folder_id}
  */
  readonly folderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#id SwsWafProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A set of key/value label pairs which assigned to resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#labels SwsWafProfile#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#match_all_rule_sets SwsWafProfile#match_all_rule_sets}
  */
  readonly matchAllRuleSets?: boolean | cdktf.IResolvable;
  /**
  * The resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#name SwsWafProfile#name}
  */
  readonly name?: string;
  /**
  * analyze_request_body block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#analyze_request_body SwsWafProfile#analyze_request_body}
  */
  readonly analyzeRequestBody?: SwsWafProfileAnalyzeRequestBody;
  /**
  * core_rule_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#core_rule_set SwsWafProfile#core_rule_set}
  */
  readonly coreRuleSet?: SwsWafProfileCoreRuleSet;
  /**
  * exclusion_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#exclusion_rule SwsWafProfile#exclusion_rule}
  */
  readonly exclusionRule?: SwsWafProfileExclusionRule[] | cdktf.IResolvable;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#rule SwsWafProfile#rule}
  */
  readonly rule?: SwsWafProfileRule[] | cdktf.IResolvable;
  /**
  * rule_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#rule_set SwsWafProfile#rule_set}
  */
  readonly ruleSet?: SwsWafProfileRuleSet[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#timeouts SwsWafProfile#timeouts}
  */
  readonly timeouts?: SwsWafProfileTimeouts;
}
export interface SwsWafProfileAnalyzeRequestBody {
  /**
  * Possible to turn analyzer on and turn if off.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#is_enabled SwsWafProfile#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Maximum size of body to pass to analyzer. In kilobytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#size_limit SwsWafProfile#size_limit}
  */
  readonly sizeLimit?: number;
  /**
  * Action to perform if maximum size of body exceeded. Possible values: `IGNORE` and `DENY`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#size_limit_action SwsWafProfile#size_limit_action}
  */
  readonly sizeLimitAction?: string;
}

export function swsWafProfileAnalyzeRequestBodyToTerraform(struct?: SwsWafProfileAnalyzeRequestBodyOutputReference | SwsWafProfileAnalyzeRequestBody): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    size_limit: cdktf.numberToTerraform(struct!.sizeLimit),
    size_limit_action: cdktf.stringToTerraform(struct!.sizeLimitAction),
  }
}


export function swsWafProfileAnalyzeRequestBodyToHclTerraform(struct?: SwsWafProfileAnalyzeRequestBodyOutputReference | SwsWafProfileAnalyzeRequestBody): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
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

export class SwsWafProfileAnalyzeRequestBodyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwsWafProfileAnalyzeRequestBody | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
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

  public set internalValue(value: SwsWafProfileAnalyzeRequestBody | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isEnabled = undefined;
      this._sizeLimit = undefined;
      this._sizeLimitAction = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isEnabled = value.isEnabled;
      this._sizeLimit = value.sizeLimit;
      this._sizeLimitAction = value.sizeLimitAction;
    }
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
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
export interface SwsWafProfileCoreRuleSetRuleSet {
  /**
  * Id of the rule set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#id SwsWafProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the rule set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#name SwsWafProfile#name}
  */
  readonly name?: string;
  /**
  * Type of the rule set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#type SwsWafProfile#type}
  */
  readonly type?: string;
  /**
  * Version of the rule set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#version SwsWafProfile#version}
  */
  readonly version: string;
}

export function swsWafProfileCoreRuleSetRuleSetToTerraform(struct?: SwsWafProfileCoreRuleSetRuleSetOutputReference | SwsWafProfileCoreRuleSetRuleSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function swsWafProfileCoreRuleSetRuleSetToHclTerraform(struct?: SwsWafProfileCoreRuleSetRuleSetOutputReference | SwsWafProfileCoreRuleSetRuleSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwsWafProfileCoreRuleSetRuleSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwsWafProfileCoreRuleSetRuleSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwsWafProfileCoreRuleSetRuleSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._name = undefined;
      this._type = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._name = value.name;
      this._type = value.type;
      this._version = value.version;
    }
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

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface SwsWafProfileCoreRuleSet {
  /**
  * Anomaly score. Enter an integer within the range of 2 and 10000. The higher this value, the more likely it is that the request that satisfies the rule is an attack. See [Rules](https://yandex.cloud/en/docs/smartwebsecurity/concepts/waf#anomaly) for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#inbound_anomaly_score SwsWafProfile#inbound_anomaly_score}
  */
  readonly inboundAnomalyScore?: number;
  /**
  * Paranoia level. Enter an integer within the range of 1 and 4. Paranoia level classifies rules according to their aggression. The higher the paranoia level, the better your protection, but also the higher the probability of WAF false positives. See [Rules](https://yandex.cloud/en/docs/smartwebsecurity/concepts/waf#paranoia) for more details. NOTE: this option has no effect on enabling or disabling rules, it is used only as recommendation for user to enable all rules with paranoia_level <= this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#paranoia_level SwsWafProfile#paranoia_level}
  */
  readonly paranoiaLevel?: number;
  /**
  * rule_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#rule_set SwsWafProfile#rule_set}
  */
  readonly ruleSet: SwsWafProfileCoreRuleSetRuleSet;
}

export function swsWafProfileCoreRuleSetToTerraform(struct?: SwsWafProfileCoreRuleSetOutputReference | SwsWafProfileCoreRuleSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inbound_anomaly_score: cdktf.numberToTerraform(struct!.inboundAnomalyScore),
    paranoia_level: cdktf.numberToTerraform(struct!.paranoiaLevel),
    rule_set: swsWafProfileCoreRuleSetRuleSetToTerraform(struct!.ruleSet),
  }
}


export function swsWafProfileCoreRuleSetToHclTerraform(struct?: SwsWafProfileCoreRuleSetOutputReference | SwsWafProfileCoreRuleSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inbound_anomaly_score: {
      value: cdktf.numberToHclTerraform(struct!.inboundAnomalyScore),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    paranoia_level: {
      value: cdktf.numberToHclTerraform(struct!.paranoiaLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rule_set: {
      value: swsWafProfileCoreRuleSetRuleSetToHclTerraform(struct!.ruleSet),
      isBlock: true,
      type: "list",
      storageClassType: "SwsWafProfileCoreRuleSetRuleSetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwsWafProfileCoreRuleSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwsWafProfileCoreRuleSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inboundAnomalyScore !== undefined) {
      hasAnyValues = true;
      internalValueResult.inboundAnomalyScore = this._inboundAnomalyScore;
    }
    if (this._paranoiaLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.paranoiaLevel = this._paranoiaLevel;
    }
    if (this._ruleSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleSet = this._ruleSet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwsWafProfileCoreRuleSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inboundAnomalyScore = undefined;
      this._paranoiaLevel = undefined;
      this._ruleSet.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inboundAnomalyScore = value.inboundAnomalyScore;
      this._paranoiaLevel = value.paranoiaLevel;
      this._ruleSet.internalValue = value.ruleSet;
    }
  }

  // inbound_anomaly_score - computed: false, optional: true, required: false
  private _inboundAnomalyScore?: number; 
  public get inboundAnomalyScore() {
    return this.getNumberAttribute('inbound_anomaly_score');
  }
  public set inboundAnomalyScore(value: number) {
    this._inboundAnomalyScore = value;
  }
  public resetInboundAnomalyScore() {
    this._inboundAnomalyScore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundAnomalyScoreInput() {
    return this._inboundAnomalyScore;
  }

  // paranoia_level - computed: false, optional: true, required: false
  private _paranoiaLevel?: number; 
  public get paranoiaLevel() {
    return this.getNumberAttribute('paranoia_level');
  }
  public set paranoiaLevel(value: number) {
    this._paranoiaLevel = value;
  }
  public resetParanoiaLevel() {
    this._paranoiaLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paranoiaLevelInput() {
    return this._paranoiaLevel;
  }

  // rule_set - computed: false, optional: false, required: true
  private _ruleSet = new SwsWafProfileCoreRuleSetRuleSetOutputReference(this, "rule_set");
  public get ruleSet() {
    return this._ruleSet;
  }
  public putRuleSet(value: SwsWafProfileCoreRuleSetRuleSet) {
    this._ruleSet.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleSetInput() {
    return this._ruleSet.internalValue;
  }
}
export interface SwsWafProfileExclusionRuleConditionAuthorityAuthorities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#exact_match SwsWafProfile#exact_match}
  */
  readonly exactMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#exact_not_match SwsWafProfile#exact_not_match}
  */
  readonly exactNotMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#pire_regex_match SwsWafProfile#pire_regex_match}
  */
  readonly pireRegexMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#pire_regex_not_match SwsWafProfile#pire_regex_not_match}
  */
  readonly pireRegexNotMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#prefix_match SwsWafProfile#prefix_match}
  */
  readonly prefixMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#prefix_not_match SwsWafProfile#prefix_not_match}
  */
  readonly prefixNotMatch?: string;
}

export function swsWafProfileExclusionRuleConditionAuthorityAuthoritiesToTerraform(struct?: SwsWafProfileExclusionRuleConditionAuthorityAuthorities | cdktf.IResolvable): any {
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


export function swsWafProfileExclusionRuleConditionAuthorityAuthoritiesToHclTerraform(struct?: SwsWafProfileExclusionRuleConditionAuthorityAuthorities | cdktf.IResolvable): any {
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

export class SwsWafProfileExclusionRuleConditionAuthorityAuthoritiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwsWafProfileExclusionRuleConditionAuthorityAuthorities | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SwsWafProfileExclusionRuleConditionAuthorityAuthorities | cdktf.IResolvable | undefined) {
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

export class SwsWafProfileExclusionRuleConditionAuthorityAuthoritiesList extends cdktf.ComplexList {
  public internalValue? : SwsWafProfileExclusionRuleConditionAuthorityAuthorities[] | cdktf.IResolvable

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
  public get(index: number): SwsWafProfileExclusionRuleConditionAuthorityAuthoritiesOutputReference {
    return new SwsWafProfileExclusionRuleConditionAuthorityAuthoritiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwsWafProfileExclusionRuleConditionAuthority {
  /**
  * authorities block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#authorities SwsWafProfile#authorities}
  */
  readonly authorities?: SwsWafProfileExclusionRuleConditionAuthorityAuthorities[] | cdktf.IResolvable;
}

export function swsWafProfileExclusionRuleConditionAuthorityToTerraform(struct?: SwsWafProfileExclusionRuleConditionAuthorityOutputReference | SwsWafProfileExclusionRuleConditionAuthority): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authorities: cdktf.listMapper(swsWafProfileExclusionRuleConditionAuthorityAuthoritiesToTerraform, true)(struct!.authorities),
  }
}


export function swsWafProfileExclusionRuleConditionAuthorityToHclTerraform(struct?: SwsWafProfileExclusionRuleConditionAuthorityOutputReference | SwsWafProfileExclusionRuleConditionAuthority): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authorities: {
      value: cdktf.listMapperHcl(swsWafProfileExclusionRuleConditionAuthorityAuthoritiesToHclTerraform, true)(struct!.authorities),
      isBlock: true,
      type: "list",
      storageClassType: "SwsWafProfileExclusionRuleConditionAuthorityAuthoritiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwsWafProfileExclusionRuleConditionAuthorityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwsWafProfileExclusionRuleConditionAuthority | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorities = this._authorities?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwsWafProfileExclusionRuleConditionAuthority | undefined) {
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
  private _authorities = new SwsWafProfileExclusionRuleConditionAuthorityAuthoritiesList(this, "authorities", false);
  public get authorities() {
    return this._authorities;
  }
  public putAuthorities(value: SwsWafProfileExclusionRuleConditionAuthorityAuthorities[] | cdktf.IResolvable) {
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
export interface SwsWafProfileExclusionRuleConditionHeadersValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#exact_match SwsWafProfile#exact_match}
  */
  readonly exactMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#exact_not_match SwsWafProfile#exact_not_match}
  */
  readonly exactNotMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#pire_regex_match SwsWafProfile#pire_regex_match}
  */
  readonly pireRegexMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#pire_regex_not_match SwsWafProfile#pire_regex_not_match}
  */
  readonly pireRegexNotMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#prefix_match SwsWafProfile#prefix_match}
  */
  readonly prefixMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#prefix_not_match SwsWafProfile#prefix_not_match}
  */
  readonly prefixNotMatch?: string;
}

export function swsWafProfileExclusionRuleConditionHeadersValueToTerraform(struct?: SwsWafProfileExclusionRuleConditionHeadersValueOutputReference | SwsWafProfileExclusionRuleConditionHeadersValue): any {
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


export function swsWafProfileExclusionRuleConditionHeadersValueToHclTerraform(struct?: SwsWafProfileExclusionRuleConditionHeadersValueOutputReference | SwsWafProfileExclusionRuleConditionHeadersValue): any {
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

export class SwsWafProfileExclusionRuleConditionHeadersValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwsWafProfileExclusionRuleConditionHeadersValue | undefined {
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

  public set internalValue(value: SwsWafProfileExclusionRuleConditionHeadersValue | undefined) {
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
export interface SwsWafProfileExclusionRuleConditionHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#name SwsWafProfile#name}
  */
  readonly name?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#value SwsWafProfile#value}
  */
  readonly value: SwsWafProfileExclusionRuleConditionHeadersValue;
}

export function swsWafProfileExclusionRuleConditionHeadersToTerraform(struct?: SwsWafProfileExclusionRuleConditionHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: swsWafProfileExclusionRuleConditionHeadersValueToTerraform(struct!.value),
  }
}


export function swsWafProfileExclusionRuleConditionHeadersToHclTerraform(struct?: SwsWafProfileExclusionRuleConditionHeaders | cdktf.IResolvable): any {
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
      value: swsWafProfileExclusionRuleConditionHeadersValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "SwsWafProfileExclusionRuleConditionHeadersValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwsWafProfileExclusionRuleConditionHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwsWafProfileExclusionRuleConditionHeaders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SwsWafProfileExclusionRuleConditionHeaders | cdktf.IResolvable | undefined) {
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
  private _value = new SwsWafProfileExclusionRuleConditionHeadersValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: SwsWafProfileExclusionRuleConditionHeadersValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class SwsWafProfileExclusionRuleConditionHeadersList extends cdktf.ComplexList {
  public internalValue? : SwsWafProfileExclusionRuleConditionHeaders[] | cdktf.IResolvable

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
  public get(index: number): SwsWafProfileExclusionRuleConditionHeadersOutputReference {
    return new SwsWafProfileExclusionRuleConditionHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwsWafProfileExclusionRuleConditionHttpMethodHttpMethods {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#exact_match SwsWafProfile#exact_match}
  */
  readonly exactMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#exact_not_match SwsWafProfile#exact_not_match}
  */
  readonly exactNotMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#pire_regex_match SwsWafProfile#pire_regex_match}
  */
  readonly pireRegexMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#pire_regex_not_match SwsWafProfile#pire_regex_not_match}
  */
  readonly pireRegexNotMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#prefix_match SwsWafProfile#prefix_match}
  */
  readonly prefixMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#prefix_not_match SwsWafProfile#prefix_not_match}
  */
  readonly prefixNotMatch?: string;
}

export function swsWafProfileExclusionRuleConditionHttpMethodHttpMethodsToTerraform(struct?: SwsWafProfileExclusionRuleConditionHttpMethodHttpMethods | cdktf.IResolvable): any {
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


export function swsWafProfileExclusionRuleConditionHttpMethodHttpMethodsToHclTerraform(struct?: SwsWafProfileExclusionRuleConditionHttpMethodHttpMethods | cdktf.IResolvable): any {
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

export class SwsWafProfileExclusionRuleConditionHttpMethodHttpMethodsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwsWafProfileExclusionRuleConditionHttpMethodHttpMethods | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SwsWafProfileExclusionRuleConditionHttpMethodHttpMethods | cdktf.IResolvable | undefined) {
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

export class SwsWafProfileExclusionRuleConditionHttpMethodHttpMethodsList extends cdktf.ComplexList {
  public internalValue? : SwsWafProfileExclusionRuleConditionHttpMethodHttpMethods[] | cdktf.IResolvable

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
  public get(index: number): SwsWafProfileExclusionRuleConditionHttpMethodHttpMethodsOutputReference {
    return new SwsWafProfileExclusionRuleConditionHttpMethodHttpMethodsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwsWafProfileExclusionRuleConditionHttpMethod {
  /**
  * http_methods block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#http_methods SwsWafProfile#http_methods}
  */
  readonly httpMethods?: SwsWafProfileExclusionRuleConditionHttpMethodHttpMethods[] | cdktf.IResolvable;
}

export function swsWafProfileExclusionRuleConditionHttpMethodToTerraform(struct?: SwsWafProfileExclusionRuleConditionHttpMethodOutputReference | SwsWafProfileExclusionRuleConditionHttpMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_methods: cdktf.listMapper(swsWafProfileExclusionRuleConditionHttpMethodHttpMethodsToTerraform, true)(struct!.httpMethods),
  }
}


export function swsWafProfileExclusionRuleConditionHttpMethodToHclTerraform(struct?: SwsWafProfileExclusionRuleConditionHttpMethodOutputReference | SwsWafProfileExclusionRuleConditionHttpMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_methods: {
      value: cdktf.listMapperHcl(swsWafProfileExclusionRuleConditionHttpMethodHttpMethodsToHclTerraform, true)(struct!.httpMethods),
      isBlock: true,
      type: "list",
      storageClassType: "SwsWafProfileExclusionRuleConditionHttpMethodHttpMethodsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwsWafProfileExclusionRuleConditionHttpMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwsWafProfileExclusionRuleConditionHttpMethod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpMethods?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpMethods = this._httpMethods?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwsWafProfileExclusionRuleConditionHttpMethod | undefined) {
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
  private _httpMethods = new SwsWafProfileExclusionRuleConditionHttpMethodHttpMethodsList(this, "http_methods", false);
  public get httpMethods() {
    return this._httpMethods;
  }
  public putHttpMethods(value: SwsWafProfileExclusionRuleConditionHttpMethodHttpMethods[] | cdktf.IResolvable) {
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
export interface SwsWafProfileExclusionRuleConditionRequestUriPath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#exact_match SwsWafProfile#exact_match}
  */
  readonly exactMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#exact_not_match SwsWafProfile#exact_not_match}
  */
  readonly exactNotMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#pire_regex_match SwsWafProfile#pire_regex_match}
  */
  readonly pireRegexMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#pire_regex_not_match SwsWafProfile#pire_regex_not_match}
  */
  readonly pireRegexNotMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#prefix_match SwsWafProfile#prefix_match}
  */
  readonly prefixMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#prefix_not_match SwsWafProfile#prefix_not_match}
  */
  readonly prefixNotMatch?: string;
}

export function swsWafProfileExclusionRuleConditionRequestUriPathToTerraform(struct?: SwsWafProfileExclusionRuleConditionRequestUriPathOutputReference | SwsWafProfileExclusionRuleConditionRequestUriPath): any {
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


export function swsWafProfileExclusionRuleConditionRequestUriPathToHclTerraform(struct?: SwsWafProfileExclusionRuleConditionRequestUriPathOutputReference | SwsWafProfileExclusionRuleConditionRequestUriPath): any {
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

export class SwsWafProfileExclusionRuleConditionRequestUriPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwsWafProfileExclusionRuleConditionRequestUriPath | undefined {
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

  public set internalValue(value: SwsWafProfileExclusionRuleConditionRequestUriPath | undefined) {
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
export interface SwsWafProfileExclusionRuleConditionRequestUriQueriesValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#exact_match SwsWafProfile#exact_match}
  */
  readonly exactMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#exact_not_match SwsWafProfile#exact_not_match}
  */
  readonly exactNotMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#pire_regex_match SwsWafProfile#pire_regex_match}
  */
  readonly pireRegexMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#pire_regex_not_match SwsWafProfile#pire_regex_not_match}
  */
  readonly pireRegexNotMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#prefix_match SwsWafProfile#prefix_match}
  */
  readonly prefixMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#prefix_not_match SwsWafProfile#prefix_not_match}
  */
  readonly prefixNotMatch?: string;
}

export function swsWafProfileExclusionRuleConditionRequestUriQueriesValueToTerraform(struct?: SwsWafProfileExclusionRuleConditionRequestUriQueriesValueOutputReference | SwsWafProfileExclusionRuleConditionRequestUriQueriesValue): any {
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


export function swsWafProfileExclusionRuleConditionRequestUriQueriesValueToHclTerraform(struct?: SwsWafProfileExclusionRuleConditionRequestUriQueriesValueOutputReference | SwsWafProfileExclusionRuleConditionRequestUriQueriesValue): any {
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

export class SwsWafProfileExclusionRuleConditionRequestUriQueriesValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwsWafProfileExclusionRuleConditionRequestUriQueriesValue | undefined {
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

  public set internalValue(value: SwsWafProfileExclusionRuleConditionRequestUriQueriesValue | undefined) {
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
export interface SwsWafProfileExclusionRuleConditionRequestUriQueries {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#key SwsWafProfile#key}
  */
  readonly key: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#value SwsWafProfile#value}
  */
  readonly value: SwsWafProfileExclusionRuleConditionRequestUriQueriesValue;
}

export function swsWafProfileExclusionRuleConditionRequestUriQueriesToTerraform(struct?: SwsWafProfileExclusionRuleConditionRequestUriQueries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: swsWafProfileExclusionRuleConditionRequestUriQueriesValueToTerraform(struct!.value),
  }
}


export function swsWafProfileExclusionRuleConditionRequestUriQueriesToHclTerraform(struct?: SwsWafProfileExclusionRuleConditionRequestUriQueries | cdktf.IResolvable): any {
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
      value: swsWafProfileExclusionRuleConditionRequestUriQueriesValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "SwsWafProfileExclusionRuleConditionRequestUriQueriesValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwsWafProfileExclusionRuleConditionRequestUriQueriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwsWafProfileExclusionRuleConditionRequestUriQueries | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SwsWafProfileExclusionRuleConditionRequestUriQueries | cdktf.IResolvable | undefined) {
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
  private _value = new SwsWafProfileExclusionRuleConditionRequestUriQueriesValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: SwsWafProfileExclusionRuleConditionRequestUriQueriesValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class SwsWafProfileExclusionRuleConditionRequestUriQueriesList extends cdktf.ComplexList {
  public internalValue? : SwsWafProfileExclusionRuleConditionRequestUriQueries[] | cdktf.IResolvable

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
  public get(index: number): SwsWafProfileExclusionRuleConditionRequestUriQueriesOutputReference {
    return new SwsWafProfileExclusionRuleConditionRequestUriQueriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwsWafProfileExclusionRuleConditionRequestUri {
  /**
  * path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#path SwsWafProfile#path}
  */
  readonly path?: SwsWafProfileExclusionRuleConditionRequestUriPath;
  /**
  * queries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#queries SwsWafProfile#queries}
  */
  readonly queries?: SwsWafProfileExclusionRuleConditionRequestUriQueries[] | cdktf.IResolvable;
}

export function swsWafProfileExclusionRuleConditionRequestUriToTerraform(struct?: SwsWafProfileExclusionRuleConditionRequestUriOutputReference | SwsWafProfileExclusionRuleConditionRequestUri): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: swsWafProfileExclusionRuleConditionRequestUriPathToTerraform(struct!.path),
    queries: cdktf.listMapper(swsWafProfileExclusionRuleConditionRequestUriQueriesToTerraform, true)(struct!.queries),
  }
}


export function swsWafProfileExclusionRuleConditionRequestUriToHclTerraform(struct?: SwsWafProfileExclusionRuleConditionRequestUriOutputReference | SwsWafProfileExclusionRuleConditionRequestUri): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: swsWafProfileExclusionRuleConditionRequestUriPathToHclTerraform(struct!.path),
      isBlock: true,
      type: "list",
      storageClassType: "SwsWafProfileExclusionRuleConditionRequestUriPathList",
    },
    queries: {
      value: cdktf.listMapperHcl(swsWafProfileExclusionRuleConditionRequestUriQueriesToHclTerraform, true)(struct!.queries),
      isBlock: true,
      type: "list",
      storageClassType: "SwsWafProfileExclusionRuleConditionRequestUriQueriesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwsWafProfileExclusionRuleConditionRequestUriOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwsWafProfileExclusionRuleConditionRequestUri | undefined {
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

  public set internalValue(value: SwsWafProfileExclusionRuleConditionRequestUri | undefined) {
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
  private _path = new SwsWafProfileExclusionRuleConditionRequestUriPathOutputReference(this, "path");
  public get path() {
    return this._path;
  }
  public putPath(value: SwsWafProfileExclusionRuleConditionRequestUriPath) {
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
  private _queries = new SwsWafProfileExclusionRuleConditionRequestUriQueriesList(this, "queries", false);
  public get queries() {
    return this._queries;
  }
  public putQueries(value: SwsWafProfileExclusionRuleConditionRequestUriQueries[] | cdktf.IResolvable) {
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
export interface SwsWafProfileExclusionRuleConditionSourceIpGeoIpMatch {
  /**
  * Locations to include.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#locations SwsWafProfile#locations}
  */
  readonly locations?: string[];
}

export function swsWafProfileExclusionRuleConditionSourceIpGeoIpMatchToTerraform(struct?: SwsWafProfileExclusionRuleConditionSourceIpGeoIpMatchOutputReference | SwsWafProfileExclusionRuleConditionSourceIpGeoIpMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    locations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.locations),
  }
}


export function swsWafProfileExclusionRuleConditionSourceIpGeoIpMatchToHclTerraform(struct?: SwsWafProfileExclusionRuleConditionSourceIpGeoIpMatchOutputReference | SwsWafProfileExclusionRuleConditionSourceIpGeoIpMatch): any {
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

export class SwsWafProfileExclusionRuleConditionSourceIpGeoIpMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwsWafProfileExclusionRuleConditionSourceIpGeoIpMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._locations !== undefined) {
      hasAnyValues = true;
      internalValueResult.locations = this._locations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwsWafProfileExclusionRuleConditionSourceIpGeoIpMatch | undefined) {
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
export interface SwsWafProfileExclusionRuleConditionSourceIpGeoIpNotMatch {
  /**
  * Locations to exclude.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#locations SwsWafProfile#locations}
  */
  readonly locations?: string[];
}

export function swsWafProfileExclusionRuleConditionSourceIpGeoIpNotMatchToTerraform(struct?: SwsWafProfileExclusionRuleConditionSourceIpGeoIpNotMatchOutputReference | SwsWafProfileExclusionRuleConditionSourceIpGeoIpNotMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    locations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.locations),
  }
}


export function swsWafProfileExclusionRuleConditionSourceIpGeoIpNotMatchToHclTerraform(struct?: SwsWafProfileExclusionRuleConditionSourceIpGeoIpNotMatchOutputReference | SwsWafProfileExclusionRuleConditionSourceIpGeoIpNotMatch): any {
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

export class SwsWafProfileExclusionRuleConditionSourceIpGeoIpNotMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwsWafProfileExclusionRuleConditionSourceIpGeoIpNotMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._locations !== undefined) {
      hasAnyValues = true;
      internalValueResult.locations = this._locations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwsWafProfileExclusionRuleConditionSourceIpGeoIpNotMatch | undefined) {
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
export interface SwsWafProfileExclusionRuleConditionSourceIpIpRangesMatch {
  /**
  * IP ranges to include.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#ip_ranges SwsWafProfile#ip_ranges}
  */
  readonly ipRanges?: string[];
}

export function swsWafProfileExclusionRuleConditionSourceIpIpRangesMatchToTerraform(struct?: SwsWafProfileExclusionRuleConditionSourceIpIpRangesMatchOutputReference | SwsWafProfileExclusionRuleConditionSourceIpIpRangesMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipRanges),
  }
}


export function swsWafProfileExclusionRuleConditionSourceIpIpRangesMatchToHclTerraform(struct?: SwsWafProfileExclusionRuleConditionSourceIpIpRangesMatchOutputReference | SwsWafProfileExclusionRuleConditionSourceIpIpRangesMatch): any {
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

export class SwsWafProfileExclusionRuleConditionSourceIpIpRangesMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwsWafProfileExclusionRuleConditionSourceIpIpRangesMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRanges = this._ipRanges;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwsWafProfileExclusionRuleConditionSourceIpIpRangesMatch | undefined) {
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
export interface SwsWafProfileExclusionRuleConditionSourceIpIpRangesNotMatch {
  /**
  * IP ranges to exclude.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#ip_ranges SwsWafProfile#ip_ranges}
  */
  readonly ipRanges?: string[];
}

export function swsWafProfileExclusionRuleConditionSourceIpIpRangesNotMatchToTerraform(struct?: SwsWafProfileExclusionRuleConditionSourceIpIpRangesNotMatchOutputReference | SwsWafProfileExclusionRuleConditionSourceIpIpRangesNotMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipRanges),
  }
}


export function swsWafProfileExclusionRuleConditionSourceIpIpRangesNotMatchToHclTerraform(struct?: SwsWafProfileExclusionRuleConditionSourceIpIpRangesNotMatchOutputReference | SwsWafProfileExclusionRuleConditionSourceIpIpRangesNotMatch): any {
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

export class SwsWafProfileExclusionRuleConditionSourceIpIpRangesNotMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwsWafProfileExclusionRuleConditionSourceIpIpRangesNotMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRanges = this._ipRanges;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwsWafProfileExclusionRuleConditionSourceIpIpRangesNotMatch | undefined) {
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
export interface SwsWafProfileExclusionRuleConditionSourceIp {
  /**
  * geo_ip_match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#geo_ip_match SwsWafProfile#geo_ip_match}
  */
  readonly geoIpMatch?: SwsWafProfileExclusionRuleConditionSourceIpGeoIpMatch;
  /**
  * geo_ip_not_match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#geo_ip_not_match SwsWafProfile#geo_ip_not_match}
  */
  readonly geoIpNotMatch?: SwsWafProfileExclusionRuleConditionSourceIpGeoIpNotMatch;
  /**
  * ip_ranges_match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#ip_ranges_match SwsWafProfile#ip_ranges_match}
  */
  readonly ipRangesMatch?: SwsWafProfileExclusionRuleConditionSourceIpIpRangesMatch;
  /**
  * ip_ranges_not_match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#ip_ranges_not_match SwsWafProfile#ip_ranges_not_match}
  */
  readonly ipRangesNotMatch?: SwsWafProfileExclusionRuleConditionSourceIpIpRangesNotMatch;
}

export function swsWafProfileExclusionRuleConditionSourceIpToTerraform(struct?: SwsWafProfileExclusionRuleConditionSourceIpOutputReference | SwsWafProfileExclusionRuleConditionSourceIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    geo_ip_match: swsWafProfileExclusionRuleConditionSourceIpGeoIpMatchToTerraform(struct!.geoIpMatch),
    geo_ip_not_match: swsWafProfileExclusionRuleConditionSourceIpGeoIpNotMatchToTerraform(struct!.geoIpNotMatch),
    ip_ranges_match: swsWafProfileExclusionRuleConditionSourceIpIpRangesMatchToTerraform(struct!.ipRangesMatch),
    ip_ranges_not_match: swsWafProfileExclusionRuleConditionSourceIpIpRangesNotMatchToTerraform(struct!.ipRangesNotMatch),
  }
}


export function swsWafProfileExclusionRuleConditionSourceIpToHclTerraform(struct?: SwsWafProfileExclusionRuleConditionSourceIpOutputReference | SwsWafProfileExclusionRuleConditionSourceIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    geo_ip_match: {
      value: swsWafProfileExclusionRuleConditionSourceIpGeoIpMatchToHclTerraform(struct!.geoIpMatch),
      isBlock: true,
      type: "list",
      storageClassType: "SwsWafProfileExclusionRuleConditionSourceIpGeoIpMatchList",
    },
    geo_ip_not_match: {
      value: swsWafProfileExclusionRuleConditionSourceIpGeoIpNotMatchToHclTerraform(struct!.geoIpNotMatch),
      isBlock: true,
      type: "list",
      storageClassType: "SwsWafProfileExclusionRuleConditionSourceIpGeoIpNotMatchList",
    },
    ip_ranges_match: {
      value: swsWafProfileExclusionRuleConditionSourceIpIpRangesMatchToHclTerraform(struct!.ipRangesMatch),
      isBlock: true,
      type: "list",
      storageClassType: "SwsWafProfileExclusionRuleConditionSourceIpIpRangesMatchList",
    },
    ip_ranges_not_match: {
      value: swsWafProfileExclusionRuleConditionSourceIpIpRangesNotMatchToHclTerraform(struct!.ipRangesNotMatch),
      isBlock: true,
      type: "list",
      storageClassType: "SwsWafProfileExclusionRuleConditionSourceIpIpRangesNotMatchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwsWafProfileExclusionRuleConditionSourceIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwsWafProfileExclusionRuleConditionSourceIp | undefined {
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

  public set internalValue(value: SwsWafProfileExclusionRuleConditionSourceIp | undefined) {
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
  private _geoIpMatch = new SwsWafProfileExclusionRuleConditionSourceIpGeoIpMatchOutputReference(this, "geo_ip_match");
  public get geoIpMatch() {
    return this._geoIpMatch;
  }
  public putGeoIpMatch(value: SwsWafProfileExclusionRuleConditionSourceIpGeoIpMatch) {
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
  private _geoIpNotMatch = new SwsWafProfileExclusionRuleConditionSourceIpGeoIpNotMatchOutputReference(this, "geo_ip_not_match");
  public get geoIpNotMatch() {
    return this._geoIpNotMatch;
  }
  public putGeoIpNotMatch(value: SwsWafProfileExclusionRuleConditionSourceIpGeoIpNotMatch) {
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
  private _ipRangesMatch = new SwsWafProfileExclusionRuleConditionSourceIpIpRangesMatchOutputReference(this, "ip_ranges_match");
  public get ipRangesMatch() {
    return this._ipRangesMatch;
  }
  public putIpRangesMatch(value: SwsWafProfileExclusionRuleConditionSourceIpIpRangesMatch) {
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
  private _ipRangesNotMatch = new SwsWafProfileExclusionRuleConditionSourceIpIpRangesNotMatchOutputReference(this, "ip_ranges_not_match");
  public get ipRangesNotMatch() {
    return this._ipRangesNotMatch;
  }
  public putIpRangesNotMatch(value: SwsWafProfileExclusionRuleConditionSourceIpIpRangesNotMatch) {
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
export interface SwsWafProfileExclusionRuleCondition {
  /**
  * authority block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#authority SwsWafProfile#authority}
  */
  readonly authority?: SwsWafProfileExclusionRuleConditionAuthority;
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#headers SwsWafProfile#headers}
  */
  readonly headers?: SwsWafProfileExclusionRuleConditionHeaders[] | cdktf.IResolvable;
  /**
  * http_method block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#http_method SwsWafProfile#http_method}
  */
  readonly httpMethod?: SwsWafProfileExclusionRuleConditionHttpMethod;
  /**
  * request_uri block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#request_uri SwsWafProfile#request_uri}
  */
  readonly requestUri?: SwsWafProfileExclusionRuleConditionRequestUri;
  /**
  * source_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#source_ip SwsWafProfile#source_ip}
  */
  readonly sourceIp?: SwsWafProfileExclusionRuleConditionSourceIp;
}

export function swsWafProfileExclusionRuleConditionToTerraform(struct?: SwsWafProfileExclusionRuleConditionOutputReference | SwsWafProfileExclusionRuleCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authority: swsWafProfileExclusionRuleConditionAuthorityToTerraform(struct!.authority),
    headers: cdktf.listMapper(swsWafProfileExclusionRuleConditionHeadersToTerraform, true)(struct!.headers),
    http_method: swsWafProfileExclusionRuleConditionHttpMethodToTerraform(struct!.httpMethod),
    request_uri: swsWafProfileExclusionRuleConditionRequestUriToTerraform(struct!.requestUri),
    source_ip: swsWafProfileExclusionRuleConditionSourceIpToTerraform(struct!.sourceIp),
  }
}


export function swsWafProfileExclusionRuleConditionToHclTerraform(struct?: SwsWafProfileExclusionRuleConditionOutputReference | SwsWafProfileExclusionRuleCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authority: {
      value: swsWafProfileExclusionRuleConditionAuthorityToHclTerraform(struct!.authority),
      isBlock: true,
      type: "list",
      storageClassType: "SwsWafProfileExclusionRuleConditionAuthorityList",
    },
    headers: {
      value: cdktf.listMapperHcl(swsWafProfileExclusionRuleConditionHeadersToHclTerraform, true)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "SwsWafProfileExclusionRuleConditionHeadersList",
    },
    http_method: {
      value: swsWafProfileExclusionRuleConditionHttpMethodToHclTerraform(struct!.httpMethod),
      isBlock: true,
      type: "list",
      storageClassType: "SwsWafProfileExclusionRuleConditionHttpMethodList",
    },
    request_uri: {
      value: swsWafProfileExclusionRuleConditionRequestUriToHclTerraform(struct!.requestUri),
      isBlock: true,
      type: "list",
      storageClassType: "SwsWafProfileExclusionRuleConditionRequestUriList",
    },
    source_ip: {
      value: swsWafProfileExclusionRuleConditionSourceIpToHclTerraform(struct!.sourceIp),
      isBlock: true,
      type: "list",
      storageClassType: "SwsWafProfileExclusionRuleConditionSourceIpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwsWafProfileExclusionRuleConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwsWafProfileExclusionRuleCondition | undefined {
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

  public set internalValue(value: SwsWafProfileExclusionRuleCondition | undefined) {
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
  private _authority = new SwsWafProfileExclusionRuleConditionAuthorityOutputReference(this, "authority");
  public get authority() {
    return this._authority;
  }
  public putAuthority(value: SwsWafProfileExclusionRuleConditionAuthority) {
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
  private _headers = new SwsWafProfileExclusionRuleConditionHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: SwsWafProfileExclusionRuleConditionHeaders[] | cdktf.IResolvable) {
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
  private _httpMethod = new SwsWafProfileExclusionRuleConditionHttpMethodOutputReference(this, "http_method");
  public get httpMethod() {
    return this._httpMethod;
  }
  public putHttpMethod(value: SwsWafProfileExclusionRuleConditionHttpMethod) {
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
  private _requestUri = new SwsWafProfileExclusionRuleConditionRequestUriOutputReference(this, "request_uri");
  public get requestUri() {
    return this._requestUri;
  }
  public putRequestUri(value: SwsWafProfileExclusionRuleConditionRequestUri) {
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
  private _sourceIp = new SwsWafProfileExclusionRuleConditionSourceIpOutputReference(this, "source_ip");
  public get sourceIp() {
    return this._sourceIp;
  }
  public putSourceIp(value: SwsWafProfileExclusionRuleConditionSourceIp) {
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
export interface SwsWafProfileExclusionRuleExcludeRules {
  /**
  * Set this option true to exclude all rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#exclude_all SwsWafProfile#exclude_all}
  */
  readonly excludeAll?: boolean | cdktf.IResolvable;
  /**
  * List of rules to exclude.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#rule_ids SwsWafProfile#rule_ids}
  */
  readonly ruleIds?: string[];
}

export function swsWafProfileExclusionRuleExcludeRulesToTerraform(struct?: SwsWafProfileExclusionRuleExcludeRulesOutputReference | SwsWafProfileExclusionRuleExcludeRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_all: cdktf.booleanToTerraform(struct!.excludeAll),
    rule_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ruleIds),
  }
}


export function swsWafProfileExclusionRuleExcludeRulesToHclTerraform(struct?: SwsWafProfileExclusionRuleExcludeRulesOutputReference | SwsWafProfileExclusionRuleExcludeRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_all: {
      value: cdktf.booleanToHclTerraform(struct!.excludeAll),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rule_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ruleIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwsWafProfileExclusionRuleExcludeRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwsWafProfileExclusionRuleExcludeRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludeAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeAll = this._excludeAll;
    }
    if (this._ruleIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleIds = this._ruleIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwsWafProfileExclusionRuleExcludeRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludeAll = undefined;
      this._ruleIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludeAll = value.excludeAll;
      this._ruleIds = value.ruleIds;
    }
  }

  // exclude_all - computed: false, optional: true, required: false
  private _excludeAll?: boolean | cdktf.IResolvable; 
  public get excludeAll() {
    return this.getBooleanAttribute('exclude_all');
  }
  public set excludeAll(value: boolean | cdktf.IResolvable) {
    this._excludeAll = value;
  }
  public resetExcludeAll() {
    this._excludeAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeAllInput() {
    return this._excludeAll;
  }

  // rule_ids - computed: false, optional: true, required: false
  private _ruleIds?: string[]; 
  public get ruleIds() {
    return this.getListAttribute('rule_ids');
  }
  public set ruleIds(value: string[]) {
    this._ruleIds = value;
  }
  public resetRuleIds() {
    this._ruleIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleIdsInput() {
    return this._ruleIds;
  }
}
export interface SwsWafProfileExclusionRule {
  /**
  * Description of the rule. 0-512 characters long.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#description SwsWafProfile#description}
  */
  readonly description?: string;
  /**
  * Records the fact that an exception rule is triggered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#log_excluded SwsWafProfile#log_excluded}
  */
  readonly logExcluded?: boolean | cdktf.IResolvable;
  /**
  * Name of exclusion rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#name SwsWafProfile#name}
  */
  readonly name?: string;
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#condition SwsWafProfile#condition}
  */
  readonly condition?: SwsWafProfileExclusionRuleCondition;
  /**
  * exclude_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#exclude_rules SwsWafProfile#exclude_rules}
  */
  readonly excludeRules: SwsWafProfileExclusionRuleExcludeRules;
}

export function swsWafProfileExclusionRuleToTerraform(struct?: SwsWafProfileExclusionRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    log_excluded: cdktf.booleanToTerraform(struct!.logExcluded),
    name: cdktf.stringToTerraform(struct!.name),
    condition: swsWafProfileExclusionRuleConditionToTerraform(struct!.condition),
    exclude_rules: swsWafProfileExclusionRuleExcludeRulesToTerraform(struct!.excludeRules),
  }
}


export function swsWafProfileExclusionRuleToHclTerraform(struct?: SwsWafProfileExclusionRule | cdktf.IResolvable): any {
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
    log_excluded: {
      value: cdktf.booleanToHclTerraform(struct!.logExcluded),
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
    condition: {
      value: swsWafProfileExclusionRuleConditionToHclTerraform(struct!.condition),
      isBlock: true,
      type: "list",
      storageClassType: "SwsWafProfileExclusionRuleConditionList",
    },
    exclude_rules: {
      value: swsWafProfileExclusionRuleExcludeRulesToHclTerraform(struct!.excludeRules),
      isBlock: true,
      type: "list",
      storageClassType: "SwsWafProfileExclusionRuleExcludeRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwsWafProfileExclusionRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwsWafProfileExclusionRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._logExcluded !== undefined) {
      hasAnyValues = true;
      internalValueResult.logExcluded = this._logExcluded;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    if (this._excludeRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeRules = this._excludeRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwsWafProfileExclusionRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._logExcluded = undefined;
      this._name = undefined;
      this._condition.internalValue = undefined;
      this._excludeRules.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._logExcluded = value.logExcluded;
      this._name = value.name;
      this._condition.internalValue = value.condition;
      this._excludeRules.internalValue = value.excludeRules;
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

  // log_excluded - computed: false, optional: true, required: false
  private _logExcluded?: boolean | cdktf.IResolvable; 
  public get logExcluded() {
    return this.getBooleanAttribute('log_excluded');
  }
  public set logExcluded(value: boolean | cdktf.IResolvable) {
    this._logExcluded = value;
  }
  public resetLogExcluded() {
    this._logExcluded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logExcludedInput() {
    return this._logExcluded;
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

  // condition - computed: false, optional: true, required: false
  private _condition = new SwsWafProfileExclusionRuleConditionOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }
  public putCondition(value: SwsWafProfileExclusionRuleCondition) {
    this._condition.internalValue = value;
  }
  public resetCondition() {
    this._condition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }

  // exclude_rules - computed: false, optional: false, required: true
  private _excludeRules = new SwsWafProfileExclusionRuleExcludeRulesOutputReference(this, "exclude_rules");
  public get excludeRules() {
    return this._excludeRules;
  }
  public putExcludeRules(value: SwsWafProfileExclusionRuleExcludeRules) {
    this._excludeRules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeRulesInput() {
    return this._excludeRules.internalValue;
  }
}

export class SwsWafProfileExclusionRuleList extends cdktf.ComplexList {
  public internalValue? : SwsWafProfileExclusionRule[] | cdktf.IResolvable

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
  public get(index: number): SwsWafProfileExclusionRuleOutputReference {
    return new SwsWafProfileExclusionRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwsWafProfileRule {
  /**
  * Determines is it rule blocking or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#is_blocking SwsWafProfile#is_blocking}
  */
  readonly isBlocking?: boolean | cdktf.IResolvable;
  /**
  * Determines is it rule enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#is_enabled SwsWafProfile#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Rule ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#rule_id SwsWafProfile#rule_id}
  */
  readonly ruleId: string;
}

export function swsWafProfileRuleToTerraform(struct?: SwsWafProfileRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_blocking: cdktf.booleanToTerraform(struct!.isBlocking),
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    rule_id: cdktf.stringToTerraform(struct!.ruleId),
  }
}


export function swsWafProfileRuleToHclTerraform(struct?: SwsWafProfileRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_blocking: {
      value: cdktf.booleanToHclTerraform(struct!.isBlocking),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rule_id: {
      value: cdktf.stringToHclTerraform(struct!.ruleId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwsWafProfileRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwsWafProfileRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isBlocking !== undefined) {
      hasAnyValues = true;
      internalValueResult.isBlocking = this._isBlocking;
    }
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._ruleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleId = this._ruleId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwsWafProfileRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isBlocking = undefined;
      this._isEnabled = undefined;
      this._ruleId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isBlocking = value.isBlocking;
      this._isEnabled = value.isEnabled;
      this._ruleId = value.ruleId;
    }
  }

  // is_blocking - computed: false, optional: true, required: false
  private _isBlocking?: boolean | cdktf.IResolvable; 
  public get isBlocking() {
    return this.getBooleanAttribute('is_blocking');
  }
  public set isBlocking(value: boolean | cdktf.IResolvable) {
    this._isBlocking = value;
  }
  public resetIsBlocking() {
    this._isBlocking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isBlockingInput() {
    return this._isBlocking;
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // rule_id - computed: false, optional: false, required: true
  private _ruleId?: string; 
  public get ruleId() {
    return this.getStringAttribute('rule_id');
  }
  public set ruleId(value: string) {
    this._ruleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleIdInput() {
    return this._ruleId;
  }
}

export class SwsWafProfileRuleList extends cdktf.ComplexList {
  public internalValue? : SwsWafProfileRule[] | cdktf.IResolvable

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
  public get(index: number): SwsWafProfileRuleOutputReference {
    return new SwsWafProfileRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwsWafProfileRuleSetCoreRuleSetRuleSet {
  /**
  * ID of the rule set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#id SwsWafProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the rule set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#name SwsWafProfile#name}
  */
  readonly name?: string;
  /**
  * Type of the rule set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#type SwsWafProfile#type}
  */
  readonly type?: string;
  /**
  * Version of the rule set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#version SwsWafProfile#version}
  */
  readonly version: string;
}

export function swsWafProfileRuleSetCoreRuleSetRuleSetToTerraform(struct?: SwsWafProfileRuleSetCoreRuleSetRuleSetOutputReference | SwsWafProfileRuleSetCoreRuleSetRuleSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function swsWafProfileRuleSetCoreRuleSetRuleSetToHclTerraform(struct?: SwsWafProfileRuleSetCoreRuleSetRuleSetOutputReference | SwsWafProfileRuleSetCoreRuleSetRuleSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwsWafProfileRuleSetCoreRuleSetRuleSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwsWafProfileRuleSetCoreRuleSetRuleSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwsWafProfileRuleSetCoreRuleSetRuleSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._name = undefined;
      this._type = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._name = value.name;
      this._type = value.type;
      this._version = value.version;
    }
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

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface SwsWafProfileRuleSetCoreRuleSet {
  /**
  * Inbound anomaly score of the rule set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#inbound_anomaly_score SwsWafProfile#inbound_anomaly_score}
  */
  readonly inboundAnomalyScore?: number;
  /**
  * Paranoia level of the rule set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#paranoia_level SwsWafProfile#paranoia_level}
  */
  readonly paranoiaLevel?: number;
  /**
  * rule_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#rule_set SwsWafProfile#rule_set}
  */
  readonly ruleSet: SwsWafProfileRuleSetCoreRuleSetRuleSet;
}

export function swsWafProfileRuleSetCoreRuleSetToTerraform(struct?: SwsWafProfileRuleSetCoreRuleSetOutputReference | SwsWafProfileRuleSetCoreRuleSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inbound_anomaly_score: cdktf.numberToTerraform(struct!.inboundAnomalyScore),
    paranoia_level: cdktf.numberToTerraform(struct!.paranoiaLevel),
    rule_set: swsWafProfileRuleSetCoreRuleSetRuleSetToTerraform(struct!.ruleSet),
  }
}


export function swsWafProfileRuleSetCoreRuleSetToHclTerraform(struct?: SwsWafProfileRuleSetCoreRuleSetOutputReference | SwsWafProfileRuleSetCoreRuleSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inbound_anomaly_score: {
      value: cdktf.numberToHclTerraform(struct!.inboundAnomalyScore),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    paranoia_level: {
      value: cdktf.numberToHclTerraform(struct!.paranoiaLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rule_set: {
      value: swsWafProfileRuleSetCoreRuleSetRuleSetToHclTerraform(struct!.ruleSet),
      isBlock: true,
      type: "list",
      storageClassType: "SwsWafProfileRuleSetCoreRuleSetRuleSetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwsWafProfileRuleSetCoreRuleSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwsWafProfileRuleSetCoreRuleSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inboundAnomalyScore !== undefined) {
      hasAnyValues = true;
      internalValueResult.inboundAnomalyScore = this._inboundAnomalyScore;
    }
    if (this._paranoiaLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.paranoiaLevel = this._paranoiaLevel;
    }
    if (this._ruleSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleSet = this._ruleSet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwsWafProfileRuleSetCoreRuleSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inboundAnomalyScore = undefined;
      this._paranoiaLevel = undefined;
      this._ruleSet.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inboundAnomalyScore = value.inboundAnomalyScore;
      this._paranoiaLevel = value.paranoiaLevel;
      this._ruleSet.internalValue = value.ruleSet;
    }
  }

  // inbound_anomaly_score - computed: false, optional: true, required: false
  private _inboundAnomalyScore?: number; 
  public get inboundAnomalyScore() {
    return this.getNumberAttribute('inbound_anomaly_score');
  }
  public set inboundAnomalyScore(value: number) {
    this._inboundAnomalyScore = value;
  }
  public resetInboundAnomalyScore() {
    this._inboundAnomalyScore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundAnomalyScoreInput() {
    return this._inboundAnomalyScore;
  }

  // paranoia_level - computed: false, optional: true, required: false
  private _paranoiaLevel?: number; 
  public get paranoiaLevel() {
    return this.getNumberAttribute('paranoia_level');
  }
  public set paranoiaLevel(value: number) {
    this._paranoiaLevel = value;
  }
  public resetParanoiaLevel() {
    this._paranoiaLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paranoiaLevelInput() {
    return this._paranoiaLevel;
  }

  // rule_set - computed: false, optional: false, required: true
  private _ruleSet = new SwsWafProfileRuleSetCoreRuleSetRuleSetOutputReference(this, "rule_set");
  public get ruleSet() {
    return this._ruleSet;
  }
  public putRuleSet(value: SwsWafProfileRuleSetCoreRuleSetRuleSet) {
    this._ruleSet.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleSetInput() {
    return this._ruleSet.internalValue;
  }
}
export interface SwsWafProfileRuleSetMlRuleSetRuleGroup {
  /**
  * Action of the rule group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#action SwsWafProfile#action}
  */
  readonly action?: string;
  /**
  * ID of the rule group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#id SwsWafProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Inbound anomaly score.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#inbound_anomaly_score SwsWafProfile#inbound_anomaly_score}
  */
  readonly inboundAnomalyScore?: number;
  /**
  * Is the rule group enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#is_enabled SwsWafProfile#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
}

export function swsWafProfileRuleSetMlRuleSetRuleGroupToTerraform(struct?: SwsWafProfileRuleSetMlRuleSetRuleGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    id: cdktf.stringToTerraform(struct!.id),
    inbound_anomaly_score: cdktf.numberToTerraform(struct!.inboundAnomalyScore),
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
  }
}


export function swsWafProfileRuleSetMlRuleSetRuleGroupToHclTerraform(struct?: SwsWafProfileRuleSetMlRuleSetRuleGroup | cdktf.IResolvable): any {
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
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inbound_anomaly_score: {
      value: cdktf.numberToHclTerraform(struct!.inboundAnomalyScore),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwsWafProfileRuleSetMlRuleSetRuleGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwsWafProfileRuleSetMlRuleSetRuleGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._inboundAnomalyScore !== undefined) {
      hasAnyValues = true;
      internalValueResult.inboundAnomalyScore = this._inboundAnomalyScore;
    }
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwsWafProfileRuleSetMlRuleSetRuleGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._id = undefined;
      this._inboundAnomalyScore = undefined;
      this._isEnabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._id = value.id;
      this._inboundAnomalyScore = value.inboundAnomalyScore;
      this._isEnabled = value.isEnabled;
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

  // inbound_anomaly_score - computed: false, optional: true, required: false
  private _inboundAnomalyScore?: number; 
  public get inboundAnomalyScore() {
    return this.getNumberAttribute('inbound_anomaly_score');
  }
  public set inboundAnomalyScore(value: number) {
    this._inboundAnomalyScore = value;
  }
  public resetInboundAnomalyScore() {
    this._inboundAnomalyScore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundAnomalyScoreInput() {
    return this._inboundAnomalyScore;
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }
}

export class SwsWafProfileRuleSetMlRuleSetRuleGroupList extends cdktf.ComplexList {
  public internalValue? : SwsWafProfileRuleSetMlRuleSetRuleGroup[] | cdktf.IResolvable

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
  public get(index: number): SwsWafProfileRuleSetMlRuleSetRuleGroupOutputReference {
    return new SwsWafProfileRuleSetMlRuleSetRuleGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwsWafProfileRuleSetMlRuleSetRuleSet {
  /**
  * ID of the rule set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#id SwsWafProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the rule set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#name SwsWafProfile#name}
  */
  readonly name?: string;
  /**
  * Type of the rule set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#type SwsWafProfile#type}
  */
  readonly type?: string;
  /**
  * Version of the rule set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#version SwsWafProfile#version}
  */
  readonly version: string;
}

export function swsWafProfileRuleSetMlRuleSetRuleSetToTerraform(struct?: SwsWafProfileRuleSetMlRuleSetRuleSetOutputReference | SwsWafProfileRuleSetMlRuleSetRuleSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function swsWafProfileRuleSetMlRuleSetRuleSetToHclTerraform(struct?: SwsWafProfileRuleSetMlRuleSetRuleSetOutputReference | SwsWafProfileRuleSetMlRuleSetRuleSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwsWafProfileRuleSetMlRuleSetRuleSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwsWafProfileRuleSetMlRuleSetRuleSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwsWafProfileRuleSetMlRuleSetRuleSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._name = undefined;
      this._type = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._name = value.name;
      this._type = value.type;
      this._version = value.version;
    }
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

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface SwsWafProfileRuleSetMlRuleSet {
  /**
  * rule_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#rule_group SwsWafProfile#rule_group}
  */
  readonly ruleGroup?: SwsWafProfileRuleSetMlRuleSetRuleGroup[] | cdktf.IResolvable;
  /**
  * rule_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#rule_set SwsWafProfile#rule_set}
  */
  readonly ruleSet: SwsWafProfileRuleSetMlRuleSetRuleSet;
}

export function swsWafProfileRuleSetMlRuleSetToTerraform(struct?: SwsWafProfileRuleSetMlRuleSetOutputReference | SwsWafProfileRuleSetMlRuleSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rule_group: cdktf.listMapper(swsWafProfileRuleSetMlRuleSetRuleGroupToTerraform, true)(struct!.ruleGroup),
    rule_set: swsWafProfileRuleSetMlRuleSetRuleSetToTerraform(struct!.ruleSet),
  }
}


export function swsWafProfileRuleSetMlRuleSetToHclTerraform(struct?: SwsWafProfileRuleSetMlRuleSetOutputReference | SwsWafProfileRuleSetMlRuleSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rule_group: {
      value: cdktf.listMapperHcl(swsWafProfileRuleSetMlRuleSetRuleGroupToHclTerraform, true)(struct!.ruleGroup),
      isBlock: true,
      type: "list",
      storageClassType: "SwsWafProfileRuleSetMlRuleSetRuleGroupList",
    },
    rule_set: {
      value: swsWafProfileRuleSetMlRuleSetRuleSetToHclTerraform(struct!.ruleSet),
      isBlock: true,
      type: "list",
      storageClassType: "SwsWafProfileRuleSetMlRuleSetRuleSetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwsWafProfileRuleSetMlRuleSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwsWafProfileRuleSetMlRuleSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ruleGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleGroup = this._ruleGroup?.internalValue;
    }
    if (this._ruleSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleSet = this._ruleSet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwsWafProfileRuleSetMlRuleSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ruleGroup.internalValue = undefined;
      this._ruleSet.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ruleGroup.internalValue = value.ruleGroup;
      this._ruleSet.internalValue = value.ruleSet;
    }
  }

  // rule_group - computed: false, optional: true, required: false
  private _ruleGroup = new SwsWafProfileRuleSetMlRuleSetRuleGroupList(this, "rule_group", false);
  public get ruleGroup() {
    return this._ruleGroup;
  }
  public putRuleGroup(value: SwsWafProfileRuleSetMlRuleSetRuleGroup[] | cdktf.IResolvable) {
    this._ruleGroup.internalValue = value;
  }
  public resetRuleGroup() {
    this._ruleGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleGroupInput() {
    return this._ruleGroup.internalValue;
  }

  // rule_set - computed: false, optional: false, required: true
  private _ruleSet = new SwsWafProfileRuleSetMlRuleSetRuleSetOutputReference(this, "rule_set");
  public get ruleSet() {
    return this._ruleSet;
  }
  public putRuleSet(value: SwsWafProfileRuleSetMlRuleSetRuleSet) {
    this._ruleSet.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleSetInput() {
    return this._ruleSet.internalValue;
  }
}
export interface SwsWafProfileRuleSetYaRuleSetRuleGroup {
  /**
  * Action of the rule group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#action SwsWafProfile#action}
  */
  readonly action?: string;
  /**
  * ID of the rule group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#id SwsWafProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Inbound anomaly score.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#inbound_anomaly_score SwsWafProfile#inbound_anomaly_score}
  */
  readonly inboundAnomalyScore?: number;
  /**
  * Is the rule group enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#is_enabled SwsWafProfile#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
}

export function swsWafProfileRuleSetYaRuleSetRuleGroupToTerraform(struct?: SwsWafProfileRuleSetYaRuleSetRuleGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    id: cdktf.stringToTerraform(struct!.id),
    inbound_anomaly_score: cdktf.numberToTerraform(struct!.inboundAnomalyScore),
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
  }
}


export function swsWafProfileRuleSetYaRuleSetRuleGroupToHclTerraform(struct?: SwsWafProfileRuleSetYaRuleSetRuleGroup | cdktf.IResolvable): any {
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
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inbound_anomaly_score: {
      value: cdktf.numberToHclTerraform(struct!.inboundAnomalyScore),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwsWafProfileRuleSetYaRuleSetRuleGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwsWafProfileRuleSetYaRuleSetRuleGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._inboundAnomalyScore !== undefined) {
      hasAnyValues = true;
      internalValueResult.inboundAnomalyScore = this._inboundAnomalyScore;
    }
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwsWafProfileRuleSetYaRuleSetRuleGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._id = undefined;
      this._inboundAnomalyScore = undefined;
      this._isEnabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._id = value.id;
      this._inboundAnomalyScore = value.inboundAnomalyScore;
      this._isEnabled = value.isEnabled;
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

  // inbound_anomaly_score - computed: false, optional: true, required: false
  private _inboundAnomalyScore?: number; 
  public get inboundAnomalyScore() {
    return this.getNumberAttribute('inbound_anomaly_score');
  }
  public set inboundAnomalyScore(value: number) {
    this._inboundAnomalyScore = value;
  }
  public resetInboundAnomalyScore() {
    this._inboundAnomalyScore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundAnomalyScoreInput() {
    return this._inboundAnomalyScore;
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }
}

export class SwsWafProfileRuleSetYaRuleSetRuleGroupList extends cdktf.ComplexList {
  public internalValue? : SwsWafProfileRuleSetYaRuleSetRuleGroup[] | cdktf.IResolvable

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
  public get(index: number): SwsWafProfileRuleSetYaRuleSetRuleGroupOutputReference {
    return new SwsWafProfileRuleSetYaRuleSetRuleGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwsWafProfileRuleSetYaRuleSetRuleSet {
  /**
  * ID of the rule set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#id SwsWafProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the rule set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#name SwsWafProfile#name}
  */
  readonly name?: string;
  /**
  * Type of the rule set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#type SwsWafProfile#type}
  */
  readonly type?: string;
  /**
  * Version of the rule set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#version SwsWafProfile#version}
  */
  readonly version: string;
}

export function swsWafProfileRuleSetYaRuleSetRuleSetToTerraform(struct?: SwsWafProfileRuleSetYaRuleSetRuleSetOutputReference | SwsWafProfileRuleSetYaRuleSetRuleSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function swsWafProfileRuleSetYaRuleSetRuleSetToHclTerraform(struct?: SwsWafProfileRuleSetYaRuleSetRuleSetOutputReference | SwsWafProfileRuleSetYaRuleSetRuleSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwsWafProfileRuleSetYaRuleSetRuleSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwsWafProfileRuleSetYaRuleSetRuleSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwsWafProfileRuleSetYaRuleSetRuleSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._name = undefined;
      this._type = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._name = value.name;
      this._type = value.type;
      this._version = value.version;
    }
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

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface SwsWafProfileRuleSetYaRuleSet {
  /**
  * rule_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#rule_group SwsWafProfile#rule_group}
  */
  readonly ruleGroup?: SwsWafProfileRuleSetYaRuleSetRuleGroup[] | cdktf.IResolvable;
  /**
  * rule_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#rule_set SwsWafProfile#rule_set}
  */
  readonly ruleSet: SwsWafProfileRuleSetYaRuleSetRuleSet;
}

export function swsWafProfileRuleSetYaRuleSetToTerraform(struct?: SwsWafProfileRuleSetYaRuleSetOutputReference | SwsWafProfileRuleSetYaRuleSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rule_group: cdktf.listMapper(swsWafProfileRuleSetYaRuleSetRuleGroupToTerraform, true)(struct!.ruleGroup),
    rule_set: swsWafProfileRuleSetYaRuleSetRuleSetToTerraform(struct!.ruleSet),
  }
}


export function swsWafProfileRuleSetYaRuleSetToHclTerraform(struct?: SwsWafProfileRuleSetYaRuleSetOutputReference | SwsWafProfileRuleSetYaRuleSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rule_group: {
      value: cdktf.listMapperHcl(swsWafProfileRuleSetYaRuleSetRuleGroupToHclTerraform, true)(struct!.ruleGroup),
      isBlock: true,
      type: "list",
      storageClassType: "SwsWafProfileRuleSetYaRuleSetRuleGroupList",
    },
    rule_set: {
      value: swsWafProfileRuleSetYaRuleSetRuleSetToHclTerraform(struct!.ruleSet),
      isBlock: true,
      type: "list",
      storageClassType: "SwsWafProfileRuleSetYaRuleSetRuleSetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwsWafProfileRuleSetYaRuleSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwsWafProfileRuleSetYaRuleSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ruleGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleGroup = this._ruleGroup?.internalValue;
    }
    if (this._ruleSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleSet = this._ruleSet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwsWafProfileRuleSetYaRuleSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ruleGroup.internalValue = undefined;
      this._ruleSet.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ruleGroup.internalValue = value.ruleGroup;
      this._ruleSet.internalValue = value.ruleSet;
    }
  }

  // rule_group - computed: false, optional: true, required: false
  private _ruleGroup = new SwsWafProfileRuleSetYaRuleSetRuleGroupList(this, "rule_group", false);
  public get ruleGroup() {
    return this._ruleGroup;
  }
  public putRuleGroup(value: SwsWafProfileRuleSetYaRuleSetRuleGroup[] | cdktf.IResolvable) {
    this._ruleGroup.internalValue = value;
  }
  public resetRuleGroup() {
    this._ruleGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleGroupInput() {
    return this._ruleGroup.internalValue;
  }

  // rule_set - computed: false, optional: false, required: true
  private _ruleSet = new SwsWafProfileRuleSetYaRuleSetRuleSetOutputReference(this, "rule_set");
  public get ruleSet() {
    return this._ruleSet;
  }
  public putRuleSet(value: SwsWafProfileRuleSetYaRuleSetRuleSet) {
    this._ruleSet.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleSetInput() {
    return this._ruleSet.internalValue;
  }
}
export interface SwsWafProfileRuleSet {
  /**
  * Action of the rule set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#action SwsWafProfile#action}
  */
  readonly action?: string;
  /**
  * Determines is it rule set enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#is_enabled SwsWafProfile#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Priority of the rule set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#priority SwsWafProfile#priority}
  */
  readonly priority?: number;
  /**
  * core_rule_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#core_rule_set SwsWafProfile#core_rule_set}
  */
  readonly coreRuleSet?: SwsWafProfileRuleSetCoreRuleSet;
  /**
  * ml_rule_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#ml_rule_set SwsWafProfile#ml_rule_set}
  */
  readonly mlRuleSet?: SwsWafProfileRuleSetMlRuleSet;
  /**
  * ya_rule_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#ya_rule_set SwsWafProfile#ya_rule_set}
  */
  readonly yaRuleSet?: SwsWafProfileRuleSetYaRuleSet;
}

export function swsWafProfileRuleSetToTerraform(struct?: SwsWafProfileRuleSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    priority: cdktf.numberToTerraform(struct!.priority),
    core_rule_set: swsWafProfileRuleSetCoreRuleSetToTerraform(struct!.coreRuleSet),
    ml_rule_set: swsWafProfileRuleSetMlRuleSetToTerraform(struct!.mlRuleSet),
    ya_rule_set: swsWafProfileRuleSetYaRuleSetToTerraform(struct!.yaRuleSet),
  }
}


export function swsWafProfileRuleSetToHclTerraform(struct?: SwsWafProfileRuleSet | cdktf.IResolvable): any {
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
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    core_rule_set: {
      value: swsWafProfileRuleSetCoreRuleSetToHclTerraform(struct!.coreRuleSet),
      isBlock: true,
      type: "list",
      storageClassType: "SwsWafProfileRuleSetCoreRuleSetList",
    },
    ml_rule_set: {
      value: swsWafProfileRuleSetMlRuleSetToHclTerraform(struct!.mlRuleSet),
      isBlock: true,
      type: "list",
      storageClassType: "SwsWafProfileRuleSetMlRuleSetList",
    },
    ya_rule_set: {
      value: swsWafProfileRuleSetYaRuleSetToHclTerraform(struct!.yaRuleSet),
      isBlock: true,
      type: "list",
      storageClassType: "SwsWafProfileRuleSetYaRuleSetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwsWafProfileRuleSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwsWafProfileRuleSet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._coreRuleSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.coreRuleSet = this._coreRuleSet?.internalValue;
    }
    if (this._mlRuleSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mlRuleSet = this._mlRuleSet?.internalValue;
    }
    if (this._yaRuleSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.yaRuleSet = this._yaRuleSet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwsWafProfileRuleSet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._isEnabled = undefined;
      this._priority = undefined;
      this._coreRuleSet.internalValue = undefined;
      this._mlRuleSet.internalValue = undefined;
      this._yaRuleSet.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._isEnabled = value.isEnabled;
      this._priority = value.priority;
      this._coreRuleSet.internalValue = value.coreRuleSet;
      this._mlRuleSet.internalValue = value.mlRuleSet;
      this._yaRuleSet.internalValue = value.yaRuleSet;
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

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
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

  // core_rule_set - computed: false, optional: true, required: false
  private _coreRuleSet = new SwsWafProfileRuleSetCoreRuleSetOutputReference(this, "core_rule_set");
  public get coreRuleSet() {
    return this._coreRuleSet;
  }
  public putCoreRuleSet(value: SwsWafProfileRuleSetCoreRuleSet) {
    this._coreRuleSet.internalValue = value;
  }
  public resetCoreRuleSet() {
    this._coreRuleSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreRuleSetInput() {
    return this._coreRuleSet.internalValue;
  }

  // ml_rule_set - computed: false, optional: true, required: false
  private _mlRuleSet = new SwsWafProfileRuleSetMlRuleSetOutputReference(this, "ml_rule_set");
  public get mlRuleSet() {
    return this._mlRuleSet;
  }
  public putMlRuleSet(value: SwsWafProfileRuleSetMlRuleSet) {
    this._mlRuleSet.internalValue = value;
  }
  public resetMlRuleSet() {
    this._mlRuleSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mlRuleSetInput() {
    return this._mlRuleSet.internalValue;
  }

  // ya_rule_set - computed: false, optional: true, required: false
  private _yaRuleSet = new SwsWafProfileRuleSetYaRuleSetOutputReference(this, "ya_rule_set");
  public get yaRuleSet() {
    return this._yaRuleSet;
  }
  public putYaRuleSet(value: SwsWafProfileRuleSetYaRuleSet) {
    this._yaRuleSet.internalValue = value;
  }
  public resetYaRuleSet() {
    this._yaRuleSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yaRuleSetInput() {
    return this._yaRuleSet.internalValue;
  }
}

export class SwsWafProfileRuleSetList extends cdktf.ComplexList {
  public internalValue? : SwsWafProfileRuleSet[] | cdktf.IResolvable

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
  public get(index: number): SwsWafProfileRuleSetOutputReference {
    return new SwsWafProfileRuleSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwsWafProfileTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#create SwsWafProfile#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#delete SwsWafProfile#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#read SwsWafProfile#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#update SwsWafProfile#update}
  */
  readonly update?: string;
}

export function swsWafProfileTimeoutsToTerraform(struct?: SwsWafProfileTimeouts | cdktf.IResolvable): any {
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


export function swsWafProfileTimeoutsToHclTerraform(struct?: SwsWafProfileTimeouts | cdktf.IResolvable): any {
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

export class SwsWafProfileTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SwsWafProfileTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SwsWafProfileTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile yandex_sws_waf_profile}
*/
export class SwsWafProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_sws_waf_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwsWafProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwsWafProfile to import
  * @param importFromId The id of the existing SwsWafProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwsWafProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_sws_waf_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/sws_waf_profile yandex_sws_waf_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwsWafProfileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SwsWafProfileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'yandex_sws_waf_profile',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.175.0',
        providerVersionConstraint: '0.175.0'
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
    this._matchAllRuleSets = config.matchAllRuleSets;
    this._name = config.name;
    this._analyzeRequestBody.internalValue = config.analyzeRequestBody;
    this._coreRuleSet.internalValue = config.coreRuleSet;
    this._exclusionRule.internalValue = config.exclusionRule;
    this._rule.internalValue = config.rule;
    this._ruleSet.internalValue = config.ruleSet;
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

  // match_all_rule_sets - computed: false, optional: true, required: false
  private _matchAllRuleSets?: boolean | cdktf.IResolvable; 
  public get matchAllRuleSets() {
    return this.getBooleanAttribute('match_all_rule_sets');
  }
  public set matchAllRuleSets(value: boolean | cdktf.IResolvable) {
    this._matchAllRuleSets = value;
  }
  public resetMatchAllRuleSets() {
    this._matchAllRuleSets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchAllRuleSetsInput() {
    return this._matchAllRuleSets;
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
  private _analyzeRequestBody = new SwsWafProfileAnalyzeRequestBodyOutputReference(this, "analyze_request_body");
  public get analyzeRequestBody() {
    return this._analyzeRequestBody;
  }
  public putAnalyzeRequestBody(value: SwsWafProfileAnalyzeRequestBody) {
    this._analyzeRequestBody.internalValue = value;
  }
  public resetAnalyzeRequestBody() {
    this._analyzeRequestBody.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analyzeRequestBodyInput() {
    return this._analyzeRequestBody.internalValue;
  }

  // core_rule_set - computed: false, optional: true, required: false
  private _coreRuleSet = new SwsWafProfileCoreRuleSetOutputReference(this, "core_rule_set");
  public get coreRuleSet() {
    return this._coreRuleSet;
  }
  public putCoreRuleSet(value: SwsWafProfileCoreRuleSet) {
    this._coreRuleSet.internalValue = value;
  }
  public resetCoreRuleSet() {
    this._coreRuleSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreRuleSetInput() {
    return this._coreRuleSet.internalValue;
  }

  // exclusion_rule - computed: false, optional: true, required: false
  private _exclusionRule = new SwsWafProfileExclusionRuleList(this, "exclusion_rule", false);
  public get exclusionRule() {
    return this._exclusionRule;
  }
  public putExclusionRule(value: SwsWafProfileExclusionRule[] | cdktf.IResolvable) {
    this._exclusionRule.internalValue = value;
  }
  public resetExclusionRule() {
    this._exclusionRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionRuleInput() {
    return this._exclusionRule.internalValue;
  }

  // rule - computed: false, optional: true, required: false
  private _rule = new SwsWafProfileRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: SwsWafProfileRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
  }
  public resetRule() {
    this._rule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }

  // rule_set - computed: false, optional: true, required: false
  private _ruleSet = new SwsWafProfileRuleSetList(this, "rule_set", false);
  public get ruleSet() {
    return this._ruleSet;
  }
  public putRuleSet(value: SwsWafProfileRuleSet[] | cdktf.IResolvable) {
    this._ruleSet.internalValue = value;
  }
  public resetRuleSet() {
    this._ruleSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleSetInput() {
    return this._ruleSet.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SwsWafProfileTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SwsWafProfileTimeouts) {
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
      match_all_rule_sets: cdktf.booleanToTerraform(this._matchAllRuleSets),
      name: cdktf.stringToTerraform(this._name),
      analyze_request_body: swsWafProfileAnalyzeRequestBodyToTerraform(this._analyzeRequestBody.internalValue),
      core_rule_set: swsWafProfileCoreRuleSetToTerraform(this._coreRuleSet.internalValue),
      exclusion_rule: cdktf.listMapper(swsWafProfileExclusionRuleToTerraform, true)(this._exclusionRule.internalValue),
      rule: cdktf.listMapper(swsWafProfileRuleToTerraform, true)(this._rule.internalValue),
      rule_set: cdktf.listMapper(swsWafProfileRuleSetToTerraform, true)(this._ruleSet.internalValue),
      timeouts: swsWafProfileTimeoutsToTerraform(this._timeouts.internalValue),
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
      match_all_rule_sets: {
        value: cdktf.booleanToHclTerraform(this._matchAllRuleSets),
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
      analyze_request_body: {
        value: swsWafProfileAnalyzeRequestBodyToHclTerraform(this._analyzeRequestBody.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwsWafProfileAnalyzeRequestBodyList",
      },
      core_rule_set: {
        value: swsWafProfileCoreRuleSetToHclTerraform(this._coreRuleSet.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwsWafProfileCoreRuleSetList",
      },
      exclusion_rule: {
        value: cdktf.listMapperHcl(swsWafProfileExclusionRuleToHclTerraform, true)(this._exclusionRule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwsWafProfileExclusionRuleList",
      },
      rule: {
        value: cdktf.listMapperHcl(swsWafProfileRuleToHclTerraform, true)(this._rule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwsWafProfileRuleList",
      },
      rule_set: {
        value: cdktf.listMapperHcl(swsWafProfileRuleSetToHclTerraform, true)(this._ruleSet.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwsWafProfileRuleSetList",
      },
      timeouts: {
        value: swsWafProfileTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SwsWafProfileTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
