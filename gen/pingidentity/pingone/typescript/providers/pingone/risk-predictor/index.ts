// https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_predictor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RiskPredictorConfig extends cdktf.TerraformMetaArguments {
  /**
  * A string that specifies the unique name for the predictor for use in risk evaluation request/response payloads. The value must be alpha-numeric, with no special characters or spaces. This name is used in the API both for policy configuration, and in the Risk Evaluation response (under `details`).  If the value used for `compact_name` relates to a built-in predictor (a predictor that cannot be deleted), then this resource will attempt to overwrite the predictor's configuration.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_predictor#compact_name RiskPredictor#compact_name}
  */
  readonly compactName: string;
  /**
  * A single nested object that specifies the default configuration values for the risk predictor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_predictor#default RiskPredictor#default}
  */
  readonly default?: RiskPredictorDefault;
  /**
  * A string that specifies the description of the risk predictor. Maximum length is 1024 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_predictor#description RiskPredictor#description}
  */
  readonly description?: string;
  /**
  * The ID of the environment to configure the risk predictor in.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_predictor#environment_id RiskPredictor#environment_id}
  */
  readonly environmentId: string;
  /**
  * A string that specifies the unique, friendly name for the predictor. This name is displayed in the Risk Policies UI, when the admin is asked to define the overrides and weights in policy configuration and is unique per environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_predictor#name RiskPredictor#name}
  */
  readonly name: string;
  /**
  * A single nested object that specifies options for the Adversary-In-The-Middle (AitM) predictor.  Exactly one of the following must be defined: `predictor_adversary_in_the_middle`, `predictor_anonymous_network`, `predictor_bot_detection`, `predictor_composite`, `predictor_custom_map`, `predictor_device`, `predictor_email_reputation`, `predictor_geovelocity`, `predictor_ip_reputation`, `predictor_traffic_anomaly`, `predictor_user_location_anomaly`, `predictor_user_risk_behavior`, `predictor_velocity`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_predictor#predictor_adversary_in_the_middle RiskPredictor#predictor_adversary_in_the_middle}
  */
  readonly predictorAdversaryInTheMiddle?: RiskPredictorPredictorAdversaryInTheMiddle;
  /**
  * A single nested object that specifies options for the Anonymous Network predictor.  Exactly one of the following must be defined: `predictor_adversary_in_the_middle`, `predictor_anonymous_network`, `predictor_bot_detection`, `predictor_composite`, `predictor_custom_map`, `predictor_device`, `predictor_email_reputation`, `predictor_geovelocity`, `predictor_ip_reputation`, `predictor_traffic_anomaly`, `predictor_user_location_anomaly`, `predictor_user_risk_behavior`, `predictor_velocity`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_predictor#predictor_anonymous_network RiskPredictor#predictor_anonymous_network}
  */
  readonly predictorAnonymousNetwork?: RiskPredictorPredictorAnonymousNetwork;
  /**
  * A single nested object that specifies options for the Bot Detection predictor.  Exactly one of the following must be defined: `predictor_adversary_in_the_middle`, `predictor_anonymous_network`, `predictor_bot_detection`, `predictor_composite`, `predictor_custom_map`, `predictor_device`, `predictor_email_reputation`, `predictor_geovelocity`, `predictor_ip_reputation`, `predictor_traffic_anomaly`, `predictor_user_location_anomaly`, `predictor_user_risk_behavior`, `predictor_velocity`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_predictor#predictor_bot_detection RiskPredictor#predictor_bot_detection}
  */
  readonly predictorBotDetection?: RiskPredictorPredictorBotDetection;
  /**
  * A single nested object that specifies options for the Composite predictor.  Exactly one of the following must be defined: `predictor_adversary_in_the_middle`, `predictor_anonymous_network`, `predictor_bot_detection`, `predictor_composite`, `predictor_custom_map`, `predictor_device`, `predictor_email_reputation`, `predictor_geovelocity`, `predictor_ip_reputation`, `predictor_traffic_anomaly`, `predictor_user_location_anomaly`, `predictor_user_risk_behavior`, `predictor_velocity`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_predictor#predictor_composite RiskPredictor#predictor_composite}
  */
  readonly predictorComposite?: RiskPredictorPredictorComposite;
  /**
  * A single nested object that specifies options for the Custom Map predictor.  Exactly one of the following must be defined: `predictor_adversary_in_the_middle`, `predictor_anonymous_network`, `predictor_bot_detection`, `predictor_composite`, `predictor_custom_map`, `predictor_device`, `predictor_email_reputation`, `predictor_geovelocity`, `predictor_ip_reputation`, `predictor_traffic_anomaly`, `predictor_user_location_anomaly`, `predictor_user_risk_behavior`, `predictor_velocity`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_predictor#predictor_custom_map RiskPredictor#predictor_custom_map}
  */
  readonly predictorCustomMap?: RiskPredictorPredictorCustomMap;
  /**
  * A single nested object that specifies options for the Device predictor.  Exactly one of the following must be defined: `predictor_adversary_in_the_middle`, `predictor_anonymous_network`, `predictor_bot_detection`, `predictor_composite`, `predictor_custom_map`, `predictor_device`, `predictor_email_reputation`, `predictor_geovelocity`, `predictor_ip_reputation`, `predictor_traffic_anomaly`, `predictor_user_location_anomaly`, `predictor_user_risk_behavior`, `predictor_velocity`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_predictor#predictor_device RiskPredictor#predictor_device}
  */
  readonly predictorDevice?: RiskPredictorPredictorDevice;
  /**
  * A single nested object that specifies options for the Email reputation predictor.  Exactly one of the following must be defined: `predictor_adversary_in_the_middle`, `predictor_anonymous_network`, `predictor_bot_detection`, `predictor_composite`, `predictor_custom_map`, `predictor_device`, `predictor_email_reputation`, `predictor_geovelocity`, `predictor_ip_reputation`, `predictor_traffic_anomaly`, `predictor_user_location_anomaly`, `predictor_user_risk_behavior`, `predictor_velocity`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_predictor#predictor_email_reputation RiskPredictor#predictor_email_reputation}
  */
  readonly predictorEmailReputation?: RiskPredictorPredictorEmailReputation;
  /**
  * A single nested object that specifies options for the Geovelocity predictor.  Exactly one of the following must be defined: `predictor_adversary_in_the_middle`, `predictor_anonymous_network`, `predictor_bot_detection`, `predictor_composite`, `predictor_custom_map`, `predictor_device`, `predictor_email_reputation`, `predictor_geovelocity`, `predictor_ip_reputation`, `predictor_traffic_anomaly`, `predictor_user_location_anomaly`, `predictor_user_risk_behavior`, `predictor_velocity`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_predictor#predictor_geovelocity RiskPredictor#predictor_geovelocity}
  */
  readonly predictorGeovelocity?: RiskPredictorPredictorGeovelocity;
  /**
  * A single nested object that specifies options for the IP reputation predictor.  Exactly one of the following must be defined: `predictor_adversary_in_the_middle`, `predictor_anonymous_network`, `predictor_bot_detection`, `predictor_composite`, `predictor_custom_map`, `predictor_device`, `predictor_email_reputation`, `predictor_geovelocity`, `predictor_ip_reputation`, `predictor_traffic_anomaly`, `predictor_user_location_anomaly`, `predictor_user_risk_behavior`, `predictor_velocity`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_predictor#predictor_ip_reputation RiskPredictor#predictor_ip_reputation}
  */
  readonly predictorIpReputation?: RiskPredictorPredictorIpReputation;
  /**
  * A single nested object that specifies options for the Traffic Anomaly predictor.  Exactly one of the following must be defined: `predictor_adversary_in_the_middle`, `predictor_anonymous_network`, `predictor_bot_detection`, `predictor_composite`, `predictor_custom_map`, `predictor_device`, `predictor_email_reputation`, `predictor_geovelocity`, `predictor_ip_reputation`, `predictor_traffic_anomaly`, `predictor_user_location_anomaly`, `predictor_user_risk_behavior`, `predictor_velocity`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_predictor#predictor_traffic_anomaly RiskPredictor#predictor_traffic_anomaly}
  */
  readonly predictorTrafficAnomaly?: RiskPredictorPredictorTrafficAnomaly;
  /**
  * A single nested object that specifies options for the User Location Anomaly predictor.  Exactly one of the following must be defined: `predictor_adversary_in_the_middle`, `predictor_anonymous_network`, `predictor_bot_detection`, `predictor_composite`, `predictor_custom_map`, `predictor_device`, `predictor_email_reputation`, `predictor_geovelocity`, `predictor_ip_reputation`, `predictor_traffic_anomaly`, `predictor_user_location_anomaly`, `predictor_user_risk_behavior`, `predictor_velocity`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_predictor#predictor_user_location_anomaly RiskPredictor#predictor_user_location_anomaly}
  */
  readonly predictorUserLocationAnomaly?: RiskPredictorPredictorUserLocationAnomaly;
  /**
  * A single nested object that specifies options for the User Risk Behavior predictor.  Exactly one of the following must be defined: `predictor_adversary_in_the_middle`, `predictor_anonymous_network`, `predictor_bot_detection`, `predictor_composite`, `predictor_custom_map`, `predictor_device`, `predictor_email_reputation`, `predictor_geovelocity`, `predictor_ip_reputation`, `predictor_traffic_anomaly`, `predictor_user_location_anomaly`, `predictor_user_risk_behavior`, `predictor_velocity`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_predictor#predictor_user_risk_behavior RiskPredictor#predictor_user_risk_behavior}
  */
  readonly predictorUserRiskBehavior?: RiskPredictorPredictorUserRiskBehavior;
  /**
  * A single nested object that specifies options for the Velocity predictor.  Exactly one of the following must be defined: `predictor_adversary_in_the_middle`, `predictor_anonymous_network`, `predictor_bot_detection`, `predictor_composite`, `predictor_custom_map`, `predictor_device`, `predictor_email_reputation`, `predictor_geovelocity`, `predictor_ip_reputation`, `predictor_traffic_anomaly`, `predictor_user_location_anomaly`, `predictor_user_risk_behavior`, `predictor_velocity`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_predictor#predictor_velocity RiskPredictor#predictor_velocity}
  */
  readonly predictorVelocity?: RiskPredictorPredictorVelocity;
}
export interface RiskPredictorDefaultResult {
  /**
  * The default result level.  Options are `HIGH`, `LOW`, `MEDIUM`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_predictor#level RiskPredictor#level}
  */
  readonly level?: string;
}

export function riskPredictorDefaultResultToTerraform(struct?: RiskPredictorDefaultResult | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function riskPredictorDefaultResultToHclTerraform(struct?: RiskPredictorDefaultResult | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RiskPredictorDefaultResultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RiskPredictorDefaultResult | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RiskPredictorDefaultResult | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
    }
  }

  // level - computed: true, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface RiskPredictorDefault {
  /**
  * A single nested object that contains the result assigned to the predictor if the predictor could not be calculated during the risk evaluation. If this field is not provided, and the predictor could not be calculated during risk evaluation, the behavior is: 1) If the predictor is used in an override, the override is skipped; 2) In the weighted policy, the predictor will have a `weight` of `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_predictor#result RiskPredictor#result}
  */
  readonly result?: RiskPredictorDefaultResult;
  /**
  * A number that specifies the default weight for the risk predictor. This value is used when the risk predictor is not explicitly configured in a policy.  Defaults to `5`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_predictor#weight RiskPredictor#weight}
  */
  readonly weight?: number;
}

export function riskPredictorDefaultToTerraform(struct?: RiskPredictorDefault | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    result: riskPredictorDefaultResultToTerraform(struct!.result),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function riskPredictorDefaultToHclTerraform(struct?: RiskPredictorDefault | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    result: {
      value: riskPredictorDefaultResultToHclTerraform(struct!.result),
      isBlock: true,
      type: "struct",
      storageClassType: "RiskPredictorDefaultResult",
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

export class RiskPredictorDefaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RiskPredictorDefault | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._result?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.result = this._result?.internalValue;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RiskPredictorDefault | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._result.internalValue = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._result.internalValue = value.result;
      this._weight = value.weight;
    }
  }

  // result - computed: true, optional: true, required: false
  private _result = new RiskPredictorDefaultResultOutputReference(this, "result");
  public get result() {
    return this._result;
  }
  public putResult(value: RiskPredictorDefaultResult) {
    this._result.internalValue = value;
  }
  public resetResult() {
    this._result.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultInput() {
    return this._result.internalValue;
  }

  // weight - computed: true, optional: true, required: false
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
export interface RiskPredictorPredictorAdversaryInTheMiddle {
  /**
  * A set of domains that are ignored for the predictor results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_predictor#allowed_domain_list RiskPredictor#allowed_domain_list}
  */
  readonly allowedDomainList?: string[];
}

export function riskPredictorPredictorAdversaryInTheMiddleToTerraform(struct?: RiskPredictorPredictorAdversaryInTheMiddle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_domain_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedDomainList),
  }
}


export function riskPredictorPredictorAdversaryInTheMiddleToHclTerraform(struct?: RiskPredictorPredictorAdversaryInTheMiddle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_domain_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedDomainList),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RiskPredictorPredictorAdversaryInTheMiddleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RiskPredictorPredictorAdversaryInTheMiddle | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedDomainList !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedDomainList = this._allowedDomainList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RiskPredictorPredictorAdversaryInTheMiddle | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedDomainList = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedDomainList = value.allowedDomainList;
    }
  }

  // allowed_domain_list - computed: true, optional: true, required: false
  private _allowedDomainList?: string[]; 
  public get allowedDomainList() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_domain_list'));
  }
  public set allowedDomainList(value: string[]) {
    this._allowedDomainList = value;
  }
  public resetAllowedDomainList() {
    this._allowedDomainList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedDomainListInput() {
    return this._allowedDomainList;
  }
}
export interface RiskPredictorPredictorAnonymousNetwork {
  /**
  * A set of IP addresses (CIDRs) that are ignored for the predictor results. The list can include IPs in IPv4 format and IPs in IPv6 format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_predictor#allowed_cidr_list RiskPredictor#allowed_cidr_list}
  */
  readonly allowedCidrList?: string[];
}

export function riskPredictorPredictorAnonymousNetworkToTerraform(struct?: RiskPredictorPredictorAnonymousNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_cidr_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedCidrList),
  }
}


export function riskPredictorPredictorAnonymousNetworkToHclTerraform(struct?: RiskPredictorPredictorAnonymousNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_cidr_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedCidrList),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RiskPredictorPredictorAnonymousNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RiskPredictorPredictorAnonymousNetwork | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedCidrList !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedCidrList = this._allowedCidrList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RiskPredictorPredictorAnonymousNetwork | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedCidrList = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedCidrList = value.allowedCidrList;
    }
  }

  // allowed_cidr_list - computed: true, optional: true, required: false
  private _allowedCidrList?: string[]; 
  public get allowedCidrList() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_cidr_list'));
  }
  public set allowedCidrList(value: string[]) {
    this._allowedCidrList = value;
  }
  public resetAllowedCidrList() {
    this._allowedCidrList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedCidrListInput() {
    return this._allowedCidrList;
  }
}
export interface RiskPredictorPredictorBotDetection {
  /**
  * A boolean that specifies whether to expand the range of bot activity that PingOne Protect can detect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_predictor#include_repeated_events_without_sdk RiskPredictor#include_repeated_events_without_sdk}
  */
  readonly includeRepeatedEventsWithoutSdk?: boolean | cdktf.IResolvable;
}

export function riskPredictorPredictorBotDetectionToTerraform(struct?: RiskPredictorPredictorBotDetection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    include_repeated_events_without_sdk: cdktf.booleanToTerraform(struct!.includeRepeatedEventsWithoutSdk),
  }
}


export function riskPredictorPredictorBotDetectionToHclTerraform(struct?: RiskPredictorPredictorBotDetection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    include_repeated_events_without_sdk: {
      value: cdktf.booleanToHclTerraform(struct!.includeRepeatedEventsWithoutSdk),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RiskPredictorPredictorBotDetectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RiskPredictorPredictorBotDetection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeRepeatedEventsWithoutSdk !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeRepeatedEventsWithoutSdk = this._includeRepeatedEventsWithoutSdk;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RiskPredictorPredictorBotDetection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._includeRepeatedEventsWithoutSdk = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._includeRepeatedEventsWithoutSdk = value.includeRepeatedEventsWithoutSdk;
    }
  }

  // include_repeated_events_without_sdk - computed: false, optional: true, required: false
  private _includeRepeatedEventsWithoutSdk?: boolean | cdktf.IResolvable; 
  public get includeRepeatedEventsWithoutSdk() {
    return this.getBooleanAttribute('include_repeated_events_without_sdk');
  }
  public set includeRepeatedEventsWithoutSdk(value: boolean | cdktf.IResolvable) {
    this._includeRepeatedEventsWithoutSdk = value;
  }
  public resetIncludeRepeatedEventsWithoutSdk() {
    this._includeRepeatedEventsWithoutSdk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeRepeatedEventsWithoutSdkInput() {
    return this._includeRepeatedEventsWithoutSdk;
  }
}
export interface RiskPredictorPredictorCompositeCompositions {
  /**
  * A string that specifies the condition logic for the composite risk predictor. The value must be a valid JSON string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_predictor#condition_json RiskPredictor#condition_json}
  */
  readonly conditionJson: string;
  /**
  * A string that specifies the risk level for the composite risk predictor.  Options are `HIGH`, `LOW`, `MEDIUM`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_predictor#level RiskPredictor#level}
  */
  readonly level: string;
}

export function riskPredictorPredictorCompositeCompositionsToTerraform(struct?: RiskPredictorPredictorCompositeCompositions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition_json: cdktf.stringToTerraform(struct!.conditionJson),
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function riskPredictorPredictorCompositeCompositionsToHclTerraform(struct?: RiskPredictorPredictorCompositeCompositions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition_json: {
      value: cdktf.stringToHclTerraform(struct!.conditionJson),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RiskPredictorPredictorCompositeCompositionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RiskPredictorPredictorCompositeCompositions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditionJson !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionJson = this._conditionJson;
    }
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RiskPredictorPredictorCompositeCompositions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditionJson = undefined;
      this._level = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditionJson = value.conditionJson;
      this._level = value.level;
    }
  }

  // condition - computed: true, optional: false, required: false
  public get condition() {
    return this.getStringAttribute('condition');
  }

  // condition_json - computed: false, optional: false, required: true
  private _conditionJson?: string; 
  public get conditionJson() {
    return this.getStringAttribute('condition_json');
  }
  public set conditionJson(value: string) {
    this._conditionJson = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionJsonInput() {
    return this._conditionJson;
  }

  // level - computed: false, optional: false, required: true
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }
}

export class RiskPredictorPredictorCompositeCompositionsList extends cdktf.ComplexList {
  public internalValue? : RiskPredictorPredictorCompositeCompositions[] | cdktf.IResolvable

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
  public get(index: number): RiskPredictorPredictorCompositeCompositionsOutputReference {
    return new RiskPredictorPredictorCompositeCompositionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RiskPredictorPredictorComposite {
  /**
  * A list of compositions of risk factors you want to use, and the condition logic that determines when or whether a risk factor is applied.  The minimum number of compositions is 1 and the maximum number of compositions is 3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_predictor#compositions RiskPredictor#compositions}
  */
  readonly compositions: RiskPredictorPredictorCompositeCompositions[] | cdktf.IResolvable;
}

export function riskPredictorPredictorCompositeToTerraform(struct?: RiskPredictorPredictorComposite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compositions: cdktf.listMapper(riskPredictorPredictorCompositeCompositionsToTerraform, false)(struct!.compositions),
  }
}


export function riskPredictorPredictorCompositeToHclTerraform(struct?: RiskPredictorPredictorComposite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compositions: {
      value: cdktf.listMapperHcl(riskPredictorPredictorCompositeCompositionsToHclTerraform, false)(struct!.compositions),
      isBlock: true,
      type: "list",
      storageClassType: "RiskPredictorPredictorCompositeCompositionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RiskPredictorPredictorCompositeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RiskPredictorPredictorComposite | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compositions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.compositions = this._compositions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RiskPredictorPredictorComposite | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compositions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compositions.internalValue = value.compositions;
    }
  }

  // compositions - computed: false, optional: false, required: true
  private _compositions = new RiskPredictorPredictorCompositeCompositionsList(this, "compositions", false);
  public get compositions() {
    return this._compositions;
  }
  public putCompositions(value: RiskPredictorPredictorCompositeCompositions[] | cdktf.IResolvable) {
    this._compositions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compositionsInput() {
    return this._compositions.internalValue;
  }
}
export interface RiskPredictorPredictorCustomMapBetweenRangesHigh {
  /**
  * A number that specifies the minimum value of the attribute named in `predictor_custom_map.contains`.  This represents the lower bound of this risk result range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_predictor#max_value RiskPredictor#max_value}
  */
  readonly maxValue: number;
  /**
  * A number that specifies the minimum value of the attribute named in `predictor_custom_map.contains`.  This represents the lower bound of this risk result range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_predictor#min_value RiskPredictor#min_value}
  */
  readonly minValue: number;
}

export function riskPredictorPredictorCustomMapBetweenRangesHighToTerraform(struct?: RiskPredictorPredictorCustomMapBetweenRangesHigh | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_value: cdktf.numberToTerraform(struct!.maxValue),
    min_value: cdktf.numberToTerraform(struct!.minValue),
  }
}


export function riskPredictorPredictorCustomMapBetweenRangesHighToHclTerraform(struct?: RiskPredictorPredictorCustomMapBetweenRangesHigh | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_value: {
      value: cdktf.numberToHclTerraform(struct!.maxValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_value: {
      value: cdktf.numberToHclTerraform(struct!.minValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RiskPredictorPredictorCustomMapBetweenRangesHighOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RiskPredictorPredictorCustomMapBetweenRangesHigh | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxValue = this._maxValue;
    }
    if (this._minValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.minValue = this._minValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RiskPredictorPredictorCustomMapBetweenRangesHigh | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxValue = undefined;
      this._minValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxValue = value.maxValue;
      this._minValue = value.minValue;
    }
  }

  // max_value - computed: false, optional: false, required: true
  private _maxValue?: number; 
  public get maxValue() {
    return this.getNumberAttribute('max_value');
  }
  public set maxValue(value: number) {
    this._maxValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxValueInput() {
    return this._maxValue;
  }

  // min_value - computed: false, optional: false, required: true
  private _minValue?: number; 
  public get minValue() {
    return this.getNumberAttribute('min_value');
  }
  public set minValue(value: number) {
    this._minValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minValueInput() {
    return this._minValue;
  }
}
export interface RiskPredictorPredictorCustomMapBetweenRangesLow {
  /**
  * A number that specifies the minimum value of the attribute named in `predictor_custom_map.contains`.  This represents the lower bound of this risk result range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_predictor#max_value RiskPredictor#max_value}
  */
  readonly maxValue: number;
  /**
  * A number that specifies the minimum value of the attribute named in `predictor_custom_map.contains`.  This represents the lower bound of this risk result range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_predictor#min_value RiskPredictor#min_value}
  */
  readonly minValue: number;
}

export function riskPredictorPredictorCustomMapBetweenRangesLowToTerraform(struct?: RiskPredictorPredictorCustomMapBetweenRangesLow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_value: cdktf.numberToTerraform(struct!.maxValue),
    min_value: cdktf.numberToTerraform(struct!.minValue),
  }
}


export function riskPredictorPredictorCustomMapBetweenRangesLowToHclTerraform(struct?: RiskPredictorPredictorCustomMapBetweenRangesLow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_value: {
      value: cdktf.numberToHclTerraform(struct!.maxValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_value: {
      value: cdktf.numberToHclTerraform(struct!.minValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RiskPredictorPredictorCustomMapBetweenRangesLowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RiskPredictorPredictorCustomMapBetweenRangesLow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxValue = this._maxValue;
    }
    if (this._minValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.minValue = this._minValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RiskPredictorPredictorCustomMapBetweenRangesLow | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxValue = undefined;
      this._minValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxValue = value.maxValue;
      this._minValue = value.minValue;
    }
  }

  // max_value - computed: false, optional: false, required: true
  private _maxValue?: number; 
  public get maxValue() {
    return this.getNumberAttribute('max_value');
  }
  public set maxValue(value: number) {
    this._maxValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxValueInput() {
    return this._maxValue;
  }

  // min_value - computed: false, optional: false, required: true
  private _minValue?: number; 
  public get minValue() {
    return this.getNumberAttribute('min_value');
  }
  public set minValue(value: number) {
    this._minValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minValueInput() {
    return this._minValue;
  }
}
export interface RiskPredictorPredictorCustomMapBetweenRangesMedium {
  /**
  * A number that specifies the minimum value of the attribute named in `predictor_custom_map.contains`.  This represents the lower bound of this risk result range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_predictor#max_value RiskPredictor#max_value}
  */
  readonly maxValue: number;
  /**
  * A number that specifies the minimum value of the attribute named in `predictor_custom_map.contains`.  This represents the lower bound of this risk result range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_predictor#min_value RiskPredictor#min_value}
  */
  readonly minValue: number;
}

export function riskPredictorPredictorCustomMapBetweenRangesMediumToTerraform(struct?: RiskPredictorPredictorCustomMapBetweenRangesMedium | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_value: cdktf.numberToTerraform(struct!.maxValue),
    min_value: cdktf.numberToTerraform(struct!.minValue),
  }
}


export function riskPredictorPredictorCustomMapBetweenRangesMediumToHclTerraform(struct?: RiskPredictorPredictorCustomMapBetweenRangesMedium | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_value: {
      value: cdktf.numberToHclTerraform(struct!.maxValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_value: {
      value: cdktf.numberToHclTerraform(struct!.minValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RiskPredictorPredictorCustomMapBetweenRangesMediumOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RiskPredictorPredictorCustomMapBetweenRangesMedium | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxValue = this._maxValue;
    }
    if (this._minValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.minValue = this._minValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RiskPredictorPredictorCustomMapBetweenRangesMedium | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxValue = undefined;
      this._minValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxValue = value.maxValue;
      this._minValue = value.minValue;
    }
  }

  // max_value - computed: false, optional: false, required: true
  private _maxValue?: number; 
  public get maxValue() {
    return this.getNumberAttribute('max_value');
  }
  public set maxValue(value: number) {
    this._maxValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxValueInput() {
    return this._maxValue;
  }

  // min_value - computed: false, optional: false, required: true
  private _minValue?: number; 
  public get minValue() {
    return this.getNumberAttribute('min_value');
  }
  public set minValue(value: number) {
    this._minValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minValueInput() {
    return this._minValue;
  }
}
export interface RiskPredictorPredictorCustomMapBetweenRanges {
  /**
  * A single nested object that describes the upper and lower bounds of ranges that map to a high risk result.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_predictor#high RiskPredictor#high}
  */
  readonly high?: RiskPredictorPredictorCustomMapBetweenRangesHigh;
  /**
  * A single nested object that describes the upper and lower bounds of ranges that map to a low risk result.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_predictor#low RiskPredictor#low}
  */
  readonly low?: RiskPredictorPredictorCustomMapBetweenRangesLow;
  /**
  * A single nested object that describes the upper and lower bounds of ranges that map to a medium risk result.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_predictor#medium RiskPredictor#medium}
  */
  readonly medium?: RiskPredictorPredictorCustomMapBetweenRangesMedium;
}

export function riskPredictorPredictorCustomMapBetweenRangesToTerraform(struct?: RiskPredictorPredictorCustomMapBetweenRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    high: riskPredictorPredictorCustomMapBetweenRangesHighToTerraform(struct!.high),
    low: riskPredictorPredictorCustomMapBetweenRangesLowToTerraform(struct!.low),
    medium: riskPredictorPredictorCustomMapBetweenRangesMediumToTerraform(struct!.medium),
  }
}


export function riskPredictorPredictorCustomMapBetweenRangesToHclTerraform(struct?: RiskPredictorPredictorCustomMapBetweenRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    high: {
      value: riskPredictorPredictorCustomMapBetweenRangesHighToHclTerraform(struct!.high),
      isBlock: true,
      type: "struct",
      storageClassType: "RiskPredictorPredictorCustomMapBetweenRangesHigh",
    },
    low: {
      value: riskPredictorPredictorCustomMapBetweenRangesLowToHclTerraform(struct!.low),
      isBlock: true,
      type: "struct",
      storageClassType: "RiskPredictorPredictorCustomMapBetweenRangesLow",
    },
    medium: {
      value: riskPredictorPredictorCustomMapBetweenRangesMediumToHclTerraform(struct!.medium),
      isBlock: true,
      type: "struct",
      storageClassType: "RiskPredictorPredictorCustomMapBetweenRangesMedium",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RiskPredictorPredictorCustomMapBetweenRangesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RiskPredictorPredictorCustomMapBetweenRanges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._high?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.high = this._high?.internalValue;
    }
    if (this._low?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.low = this._low?.internalValue;
    }
    if (this._medium?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.medium = this._medium?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RiskPredictorPredictorCustomMapBetweenRanges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._high.internalValue = undefined;
      this._low.internalValue = undefined;
      this._medium.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._high.internalValue = value.high;
      this._low.internalValue = value.low;
      this._medium.internalValue = value.medium;
    }
  }

  // high - computed: false, optional: true, required: false
  private _high = new RiskPredictorPredictorCustomMapBetweenRangesHighOutputReference(this, "high");
  public get high() {
    return this._high;
  }
  public putHigh(value: RiskPredictorPredictorCustomMapBetweenRangesHigh) {
    this._high.internalValue = value;
  }
  public resetHigh() {
    this._high.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highInput() {
    return this._high.internalValue;
  }

  // low - computed: false, optional: true, required: false
  private _low = new RiskPredictorPredictorCustomMapBetweenRangesLowOutputReference(this, "low");
  public get low() {
    return this._low;
  }
  public putLow(value: RiskPredictorPredictorCustomMapBetweenRangesLow) {
    this._low.internalValue = value;
  }
  public resetLow() {
    this._low.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowInput() {
    return this._low.internalValue;
  }

  // medium - computed: false, optional: true, required: false
  private _medium = new RiskPredictorPredictorCustomMapBetweenRangesMediumOutputReference(this, "medium");
  public get medium() {
    return this._medium;
  }
  public putMedium(value: RiskPredictorPredictorCustomMapBetweenRangesMedium) {
    this._medium.internalValue = value;
  }
  public resetMedium() {
    this._medium.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediumInput() {
    return this._medium.internalValue;
  }
}
export interface RiskPredictorPredictorCustomMapIpRangesHigh {
  /**
  * A set of strings, in CIDR format, that describe the CIDR ranges that should evaluate against the value of the attribute named in `predictor_custom_map.contains` for this risk result.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_predictor#values RiskPredictor#values}
  */
  readonly values?: string[];
}

export function riskPredictorPredictorCustomMapIpRangesHighToTerraform(struct?: RiskPredictorPredictorCustomMapIpRangesHigh | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function riskPredictorPredictorCustomMapIpRangesHighToHclTerraform(struct?: RiskPredictorPredictorCustomMapIpRangesHigh | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RiskPredictorPredictorCustomMapIpRangesHighOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RiskPredictorPredictorCustomMapIpRangesHigh | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RiskPredictorPredictorCustomMapIpRangesHigh | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._values = value.values;
    }
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface RiskPredictorPredictorCustomMapIpRangesLow {
  /**
  * A set of strings, in CIDR format, that describe the CIDR ranges that should evaluate against the value of the attribute named in `predictor_custom_map.contains` for this risk result.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_predictor#values RiskPredictor#values}
  */
  readonly values?: string[];
}

export function riskPredictorPredictorCustomMapIpRangesLowToTerraform(struct?: RiskPredictorPredictorCustomMapIpRangesLow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function riskPredictorPredictorCustomMapIpRangesLowToHclTerraform(struct?: RiskPredictorPredictorCustomMapIpRangesLow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RiskPredictorPredictorCustomMapIpRangesLowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RiskPredictorPredictorCustomMapIpRangesLow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RiskPredictorPredictorCustomMapIpRangesLow | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._values = value.values;
    }
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface RiskPredictorPredictorCustomMapIpRangesMedium {
  /**
  * A set of strings, in CIDR format, that describe the CIDR ranges that should evaluate against the value of the attribute named in `predictor_custom_map.contains` for this risk result.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_predictor#values RiskPredictor#values}
  */
  readonly values?: string[];
}

export function riskPredictorPredictorCustomMapIpRangesMediumToTerraform(struct?: RiskPredictorPredictorCustomMapIpRangesMedium | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function riskPredictorPredictorCustomMapIpRangesMediumToHclTerraform(struct?: RiskPredictorPredictorCustomMapIpRangesMedium | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RiskPredictorPredictorCustomMapIpRangesMediumOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RiskPredictorPredictorCustomMapIpRangesMedium | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RiskPredictorPredictorCustomMapIpRangesMedium | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._values = value.values;
    }
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface RiskPredictorPredictorCustomMapIpRanges {
  /**
  * A single nested object that describes the IP CIDR ranges that map to a high risk result.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_predictor#high RiskPredictor#high}
  */
  readonly high?: RiskPredictorPredictorCustomMapIpRangesHigh;
  /**
  * A single nested object that describes the IP CIDR ranges that map to a low risk result.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_predictor#low RiskPredictor#low}
  */
  readonly low?: RiskPredictorPredictorCustomMapIpRangesLow;
  /**
  * A single nested object that describes the IP CIDR ranges that map to a medium risk result.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_predictor#medium RiskPredictor#medium}
  */
  readonly medium?: RiskPredictorPredictorCustomMapIpRangesMedium;
}

export function riskPredictorPredictorCustomMapIpRangesToTerraform(struct?: RiskPredictorPredictorCustomMapIpRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    high: riskPredictorPredictorCustomMapIpRangesHighToTerraform(struct!.high),
    low: riskPredictorPredictorCustomMapIpRangesLowToTerraform(struct!.low),
    medium: riskPredictorPredictorCustomMapIpRangesMediumToTerraform(struct!.medium),
  }
}


export function riskPredictorPredictorCustomMapIpRangesToHclTerraform(struct?: RiskPredictorPredictorCustomMapIpRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    high: {
      value: riskPredictorPredictorCustomMapIpRangesHighToHclTerraform(struct!.high),
      isBlock: true,
      type: "struct",
      storageClassType: "RiskPredictorPredictorCustomMapIpRangesHigh",
    },
    low: {
      value: riskPredictorPredictorCustomMapIpRangesLowToHclTerraform(struct!.low),
      isBlock: true,
      type: "struct",
      storageClassType: "RiskPredictorPredictorCustomMapIpRangesLow",
    },
    medium: {
      value: riskPredictorPredictorCustomMapIpRangesMediumToHclTerraform(struct!.medium),
      isBlock: true,
      type: "struct",
      storageClassType: "RiskPredictorPredictorCustomMapIpRangesMedium",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RiskPredictorPredictorCustomMapIpRangesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RiskPredictorPredictorCustomMapIpRanges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._high?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.high = this._high?.internalValue;
    }
    if (this._low?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.low = this._low?.internalValue;
    }
    if (this._medium?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.medium = this._medium?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RiskPredictorPredictorCustomMapIpRanges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._high.internalValue = undefined;
      this._low.internalValue = undefined;
      this._medium.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._high.internalValue = value.high;
      this._low.internalValue = value.low;
      this._medium.internalValue = value.medium;
    }
  }

  // high - computed: false, optional: true, required: false
  private _high = new RiskPredictorPredictorCustomMapIpRangesHighOutputReference(this, "high");
  public get high() {
    return this._high;
  }
  public putHigh(value: RiskPredictorPredictorCustomMapIpRangesHigh) {
    this._high.internalValue = value;
  }
  public resetHigh() {
    this._high.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highInput() {
    return this._high.internalValue;
  }

  // low - computed: false, optional: true, required: false
  private _low = new RiskPredictorPredictorCustomMapIpRangesLowOutputReference(this, "low");
  public get low() {
    return this._low;
  }
  public putLow(value: RiskPredictorPredictorCustomMapIpRangesLow) {
    this._low.internalValue = value;
  }
  public resetLow() {
    this._low.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowInput() {
    return this._low.internalValue;
  }

  // medium - computed: false, optional: true, required: false
  private _medium = new RiskPredictorPredictorCustomMapIpRangesMediumOutputReference(this, "medium");
  public get medium() {
    return this._medium;
  }
  public putMedium(value: RiskPredictorPredictorCustomMapIpRangesMedium) {
    this._medium.internalValue = value;
  }
  public resetMedium() {
    this._medium.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediumInput() {
    return this._medium.internalValue;
  }
}
export interface RiskPredictorPredictorCustomMapStringListHigh {
  /**
  * A set of strings that should evaluate against the value of the attribute named in `predictor_custom_map.contains` for this risk result.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_predictor#values RiskPredictor#values}
  */
  readonly values?: string[];
}

export function riskPredictorPredictorCustomMapStringListHighToTerraform(struct?: RiskPredictorPredictorCustomMapStringListHigh | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function riskPredictorPredictorCustomMapStringListHighToHclTerraform(struct?: RiskPredictorPredictorCustomMapStringListHigh | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RiskPredictorPredictorCustomMapStringListHighOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RiskPredictorPredictorCustomMapStringListHigh | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RiskPredictorPredictorCustomMapStringListHigh | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._values = value.values;
    }
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface RiskPredictorPredictorCustomMapStringListLow {
  /**
  * A set of strings that should evaluate against the value of the attribute named in `predictor_custom_map.contains` for this risk result.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_predictor#values RiskPredictor#values}
  */
  readonly values?: string[];
}

export function riskPredictorPredictorCustomMapStringListLowToTerraform(struct?: RiskPredictorPredictorCustomMapStringListLow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function riskPredictorPredictorCustomMapStringListLowToHclTerraform(struct?: RiskPredictorPredictorCustomMapStringListLow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RiskPredictorPredictorCustomMapStringListLowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RiskPredictorPredictorCustomMapStringListLow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RiskPredictorPredictorCustomMapStringListLow | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._values = value.values;
    }
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface RiskPredictorPredictorCustomMapStringListMedium {
  /**
  * A set of strings that should evaluate against the value of the attribute named in `predictor_custom_map.contains` for this risk result.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_predictor#values RiskPredictor#values}
  */
  readonly values?: string[];
}

export function riskPredictorPredictorCustomMapStringListMediumToTerraform(struct?: RiskPredictorPredictorCustomMapStringListMedium | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function riskPredictorPredictorCustomMapStringListMediumToHclTerraform(struct?: RiskPredictorPredictorCustomMapStringListMedium | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RiskPredictorPredictorCustomMapStringListMediumOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RiskPredictorPredictorCustomMapStringListMedium | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RiskPredictorPredictorCustomMapStringListMedium | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._values = value.values;
    }
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface RiskPredictorPredictorCustomMapStringListStruct {
  /**
  * A single nested object that describes the string values that map to a high risk result.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_predictor#high RiskPredictor#high}
  */
  readonly high?: RiskPredictorPredictorCustomMapStringListHigh;
  /**
  * A single nested object that describes the string values that map to a low risk result.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_predictor#low RiskPredictor#low}
  */
  readonly low?: RiskPredictorPredictorCustomMapStringListLow;
  /**
  * A single nested object that describes the string values that map to a medium risk result.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_predictor#medium RiskPredictor#medium}
  */
  readonly medium?: RiskPredictorPredictorCustomMapStringListMedium;
}

export function riskPredictorPredictorCustomMapStringListStructToTerraform(struct?: RiskPredictorPredictorCustomMapStringListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    high: riskPredictorPredictorCustomMapStringListHighToTerraform(struct!.high),
    low: riskPredictorPredictorCustomMapStringListLowToTerraform(struct!.low),
    medium: riskPredictorPredictorCustomMapStringListMediumToTerraform(struct!.medium),
  }
}


export function riskPredictorPredictorCustomMapStringListStructToHclTerraform(struct?: RiskPredictorPredictorCustomMapStringListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    high: {
      value: riskPredictorPredictorCustomMapStringListHighToHclTerraform(struct!.high),
      isBlock: true,
      type: "struct",
      storageClassType: "RiskPredictorPredictorCustomMapStringListHigh",
    },
    low: {
      value: riskPredictorPredictorCustomMapStringListLowToHclTerraform(struct!.low),
      isBlock: true,
      type: "struct",
      storageClassType: "RiskPredictorPredictorCustomMapStringListLow",
    },
    medium: {
      value: riskPredictorPredictorCustomMapStringListMediumToHclTerraform(struct!.medium),
      isBlock: true,
      type: "struct",
      storageClassType: "RiskPredictorPredictorCustomMapStringListMedium",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RiskPredictorPredictorCustomMapStringListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RiskPredictorPredictorCustomMapStringListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._high?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.high = this._high?.internalValue;
    }
    if (this._low?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.low = this._low?.internalValue;
    }
    if (this._medium?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.medium = this._medium?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RiskPredictorPredictorCustomMapStringListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._high.internalValue = undefined;
      this._low.internalValue = undefined;
      this._medium.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._high.internalValue = value.high;
      this._low.internalValue = value.low;
      this._medium.internalValue = value.medium;
    }
  }

  // high - computed: false, optional: true, required: false
  private _high = new RiskPredictorPredictorCustomMapStringListHighOutputReference(this, "high");
  public get high() {
    return this._high;
  }
  public putHigh(value: RiskPredictorPredictorCustomMapStringListHigh) {
    this._high.internalValue = value;
  }
  public resetHigh() {
    this._high.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highInput() {
    return this._high.internalValue;
  }

  // low - computed: false, optional: true, required: false
  private _low = new RiskPredictorPredictorCustomMapStringListLowOutputReference(this, "low");
  public get low() {
    return this._low;
  }
  public putLow(value: RiskPredictorPredictorCustomMapStringListLow) {
    this._low.internalValue = value;
  }
  public resetLow() {
    this._low.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowInput() {
    return this._low.internalValue;
  }

  // medium - computed: false, optional: true, required: false
  private _medium = new RiskPredictorPredictorCustomMapStringListMediumOutputReference(this, "medium");
  public get medium() {
    return this._medium;
  }
  public putMedium(value: RiskPredictorPredictorCustomMapStringListMedium) {
    this._medium.internalValue = value;
  }
  public resetMedium() {
    this._medium.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediumInput() {
    return this._medium.internalValue;
  }
}
export interface RiskPredictorPredictorCustomMap {
  /**
  * A single nested object that describes the upper and lower bounds of ranges of values that apply to the attribute reference in `predictor_custom_map.contains`, that map to high, medium or low risk results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_predictor#between_ranges RiskPredictor#between_ranges}
  */
  readonly betweenRanges?: RiskPredictorPredictorCustomMapBetweenRanges;
  /**
  * A string that specifies the attribute reference that contains the value to match in the custom map.  The attribute reference should come from either the incoming event (`${event.*}`) or the evaluation details (`${details.*}`).  When defining attribute references in Terraform, the leading `$` needs to be escaped with an additional `$` character, e.g. `contains = "$${event.myattribute}"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_predictor#contains RiskPredictor#contains}
  */
  readonly contains: string;
  /**
  * A single nested object that describes IP CIDR ranges of values that apply to the attribute reference in `predictor_custom_map.contains`, that map to high, medium or low risk results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_predictor#ip_ranges RiskPredictor#ip_ranges}
  */
  readonly ipRanges?: RiskPredictorPredictorCustomMapIpRanges;
  /**
  * A single nested object that describes the string values that apply to the attribute reference in `predictor_custom_map.contains`, that map to high, medium or low risk results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_predictor#string_list RiskPredictor#string_list}
  */
  readonly stringList?: RiskPredictorPredictorCustomMapStringListStruct;
}

export function riskPredictorPredictorCustomMapToTerraform(struct?: RiskPredictorPredictorCustomMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    between_ranges: riskPredictorPredictorCustomMapBetweenRangesToTerraform(struct!.betweenRanges),
    contains: cdktf.stringToTerraform(struct!.contains),
    ip_ranges: riskPredictorPredictorCustomMapIpRangesToTerraform(struct!.ipRanges),
    string_list: riskPredictorPredictorCustomMapStringListStructToTerraform(struct!.stringList),
  }
}


export function riskPredictorPredictorCustomMapToHclTerraform(struct?: RiskPredictorPredictorCustomMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    between_ranges: {
      value: riskPredictorPredictorCustomMapBetweenRangesToHclTerraform(struct!.betweenRanges),
      isBlock: true,
      type: "struct",
      storageClassType: "RiskPredictorPredictorCustomMapBetweenRanges",
    },
    contains: {
      value: cdktf.stringToHclTerraform(struct!.contains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_ranges: {
      value: riskPredictorPredictorCustomMapIpRangesToHclTerraform(struct!.ipRanges),
      isBlock: true,
      type: "struct",
      storageClassType: "RiskPredictorPredictorCustomMapIpRanges",
    },
    string_list: {
      value: riskPredictorPredictorCustomMapStringListStructToHclTerraform(struct!.stringList),
      isBlock: true,
      type: "struct",
      storageClassType: "RiskPredictorPredictorCustomMapStringListStruct",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RiskPredictorPredictorCustomMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RiskPredictorPredictorCustomMap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._betweenRanges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.betweenRanges = this._betweenRanges?.internalValue;
    }
    if (this._contains !== undefined) {
      hasAnyValues = true;
      internalValueResult.contains = this._contains;
    }
    if (this._ipRanges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRanges = this._ipRanges?.internalValue;
    }
    if (this._stringList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringList = this._stringList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RiskPredictorPredictorCustomMap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._betweenRanges.internalValue = undefined;
      this._contains = undefined;
      this._ipRanges.internalValue = undefined;
      this._stringList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._betweenRanges.internalValue = value.betweenRanges;
      this._contains = value.contains;
      this._ipRanges.internalValue = value.ipRanges;
      this._stringList.internalValue = value.stringList;
    }
  }

  // between_ranges - computed: false, optional: true, required: false
  private _betweenRanges = new RiskPredictorPredictorCustomMapBetweenRangesOutputReference(this, "between_ranges");
  public get betweenRanges() {
    return this._betweenRanges;
  }
  public putBetweenRanges(value: RiskPredictorPredictorCustomMapBetweenRanges) {
    this._betweenRanges.internalValue = value;
  }
  public resetBetweenRanges() {
    this._betweenRanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get betweenRangesInput() {
    return this._betweenRanges.internalValue;
  }

  // contains - computed: false, optional: false, required: true
  private _contains?: string; 
  public get contains() {
    return this.getStringAttribute('contains');
  }
  public set contains(value: string) {
    this._contains = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containsInput() {
    return this._contains;
  }

  // ip_ranges - computed: false, optional: true, required: false
  private _ipRanges = new RiskPredictorPredictorCustomMapIpRangesOutputReference(this, "ip_ranges");
  public get ipRanges() {
    return this._ipRanges;
  }
  public putIpRanges(value: RiskPredictorPredictorCustomMapIpRanges) {
    this._ipRanges.internalValue = value;
  }
  public resetIpRanges() {
    this._ipRanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRangesInput() {
    return this._ipRanges.internalValue;
  }

  // string_list - computed: false, optional: true, required: false
  private _stringList = new RiskPredictorPredictorCustomMapStringListStructOutputReference(this, "string_list");
  public get stringList() {
    return this._stringList;
  }
  public putStringList(value: RiskPredictorPredictorCustomMapStringListStruct) {
    this._stringList.internalValue = value;
  }
  public resetStringList() {
    this._stringList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringListInput() {
    return this._stringList.internalValue;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface RiskPredictorPredictorDevice {
  /**
  * A string that represents a date on which the learning process for the device predictor should be restarted.  Can only be configured where the `detect` parameter is `NEW_DEVICE`. This can be used in conjunction with the fallback setting (`default.result.level`) to force strong authentication when moving the predictor to production. The date should be in an RFC3339 format. Note that activation date uses UTC time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_predictor#activation_at RiskPredictor#activation_at}
  */
  readonly activationAt?: string;
  /**
  * A string that represents the type of device detection to use.  Options are `NEW_DEVICE` (to configure a model based on new devices), `SUSPICIOUS_DEVICE` (to configure a model based on detection of suspicious devices).  Defaults to `NEW_DEVICE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_predictor#detect RiskPredictor#detect}
  */
  readonly detect?: string;
  /**
  * Relevant only for Suspicious Device predictors. A boolean that, if set to `true`, then any risk policies that include this predictor will require that the Signals SDK payload be provided as a signed JWT whose signature will be verified before proceeding with risk evaluation. You instruct the Signals SDK to provide the payload as a signed JWT by using the `universalDeviceIdentification` flag during initialization of the SDK, or by selecting the relevant setting for the `skrisk` component in DaVinci flows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_predictor#should_validate_payload_signature RiskPredictor#should_validate_payload_signature}
  */
  readonly shouldValidatePayloadSignature?: boolean | cdktf.IResolvable;
}

export function riskPredictorPredictorDeviceToTerraform(struct?: RiskPredictorPredictorDevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    activation_at: cdktf.stringToTerraform(struct!.activationAt),
    detect: cdktf.stringToTerraform(struct!.detect),
    should_validate_payload_signature: cdktf.booleanToTerraform(struct!.shouldValidatePayloadSignature),
  }
}


export function riskPredictorPredictorDeviceToHclTerraform(struct?: RiskPredictorPredictorDevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    activation_at: {
      value: cdktf.stringToHclTerraform(struct!.activationAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    detect: {
      value: cdktf.stringToHclTerraform(struct!.detect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    should_validate_payload_signature: {
      value: cdktf.booleanToHclTerraform(struct!.shouldValidatePayloadSignature),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RiskPredictorPredictorDeviceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RiskPredictorPredictorDevice | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activationAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.activationAt = this._activationAt;
    }
    if (this._detect !== undefined) {
      hasAnyValues = true;
      internalValueResult.detect = this._detect;
    }
    if (this._shouldValidatePayloadSignature !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldValidatePayloadSignature = this._shouldValidatePayloadSignature;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RiskPredictorPredictorDevice | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activationAt = undefined;
      this._detect = undefined;
      this._shouldValidatePayloadSignature = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activationAt = value.activationAt;
      this._detect = value.detect;
      this._shouldValidatePayloadSignature = value.shouldValidatePayloadSignature;
    }
  }

  // activation_at - computed: false, optional: true, required: false
  private _activationAt?: string; 
  public get activationAt() {
    return this.getStringAttribute('activation_at');
  }
  public set activationAt(value: string) {
    this._activationAt = value;
  }
  public resetActivationAt() {
    this._activationAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activationAtInput() {
    return this._activationAt;
  }

  // detect - computed: true, optional: true, required: false
  private _detect?: string; 
  public get detect() {
    return this.getStringAttribute('detect');
  }
  public set detect(value: string) {
    this._detect = value;
  }
  public resetDetect() {
    this._detect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectInput() {
    return this._detect;
  }

  // should_validate_payload_signature - computed: false, optional: true, required: false
  private _shouldValidatePayloadSignature?: boolean | cdktf.IResolvable; 
  public get shouldValidatePayloadSignature() {
    return this.getBooleanAttribute('should_validate_payload_signature');
  }
  public set shouldValidatePayloadSignature(value: boolean | cdktf.IResolvable) {
    this._shouldValidatePayloadSignature = value;
  }
  public resetShouldValidatePayloadSignature() {
    this._shouldValidatePayloadSignature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldValidatePayloadSignatureInput() {
    return this._shouldValidatePayloadSignature;
  }
}
export interface RiskPredictorPredictorEmailReputation {
}

export function riskPredictorPredictorEmailReputationToTerraform(struct?: RiskPredictorPredictorEmailReputation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function riskPredictorPredictorEmailReputationToHclTerraform(struct?: RiskPredictorPredictorEmailReputation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class RiskPredictorPredictorEmailReputationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RiskPredictorPredictorEmailReputation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RiskPredictorPredictorEmailReputation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface RiskPredictorPredictorGeovelocity {
  /**
  * A set of IP addresses (CIDRs) that are ignored for the predictor results. The list can include IPs in IPv4 format and IPs in IPv6 format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_predictor#allowed_cidr_list RiskPredictor#allowed_cidr_list}
  */
  readonly allowedCidrList?: string[];
}

export function riskPredictorPredictorGeovelocityToTerraform(struct?: RiskPredictorPredictorGeovelocity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_cidr_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedCidrList),
  }
}


export function riskPredictorPredictorGeovelocityToHclTerraform(struct?: RiskPredictorPredictorGeovelocity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_cidr_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedCidrList),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RiskPredictorPredictorGeovelocityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RiskPredictorPredictorGeovelocity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedCidrList !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedCidrList = this._allowedCidrList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RiskPredictorPredictorGeovelocity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedCidrList = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedCidrList = value.allowedCidrList;
    }
  }

  // allowed_cidr_list - computed: true, optional: true, required: false
  private _allowedCidrList?: string[]; 
  public get allowedCidrList() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_cidr_list'));
  }
  public set allowedCidrList(value: string[]) {
    this._allowedCidrList = value;
  }
  public resetAllowedCidrList() {
    this._allowedCidrList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedCidrListInput() {
    return this._allowedCidrList;
  }
}
export interface RiskPredictorPredictorIpReputation {
  /**
  * A set of IP addresses (CIDRs) that are ignored for the predictor results. The list can include IPs in IPv4 format and IPs in IPv6 format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_predictor#allowed_cidr_list RiskPredictor#allowed_cidr_list}
  */
  readonly allowedCidrList?: string[];
}

export function riskPredictorPredictorIpReputationToTerraform(struct?: RiskPredictorPredictorIpReputation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_cidr_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedCidrList),
  }
}


export function riskPredictorPredictorIpReputationToHclTerraform(struct?: RiskPredictorPredictorIpReputation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_cidr_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedCidrList),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RiskPredictorPredictorIpReputationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RiskPredictorPredictorIpReputation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedCidrList !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedCidrList = this._allowedCidrList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RiskPredictorPredictorIpReputation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedCidrList = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedCidrList = value.allowedCidrList;
    }
  }

  // allowed_cidr_list - computed: true, optional: true, required: false
  private _allowedCidrList?: string[]; 
  public get allowedCidrList() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_cidr_list'));
  }
  public set allowedCidrList(value: string[]) {
    this._allowedCidrList = value;
  }
  public resetAllowedCidrList() {
    this._allowedCidrList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedCidrListInput() {
    return this._allowedCidrList;
  }
}
export interface RiskPredictorPredictorTrafficAnomalyRulesInterval {
  /**
  * An integer that specifies the number of days or hours for the timeframe for tracking number of users on the device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_predictor#quantity RiskPredictor#quantity}
  */
  readonly quantity: number;
  /**
  * A string that specifies time unit for defining the timeframe for tracking number of users on the device.  Options are `DAY`, `HOUR`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_predictor#unit RiskPredictor#unit}
  */
  readonly unit: string;
}

export function riskPredictorPredictorTrafficAnomalyRulesIntervalToTerraform(struct?: RiskPredictorPredictorTrafficAnomalyRulesInterval | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    quantity: cdktf.numberToTerraform(struct!.quantity),
    unit: cdktf.stringToTerraform(struct!.unit),
  }
}


export function riskPredictorPredictorTrafficAnomalyRulesIntervalToHclTerraform(struct?: RiskPredictorPredictorTrafficAnomalyRulesInterval | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    quantity: {
      value: cdktf.numberToHclTerraform(struct!.quantity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RiskPredictorPredictorTrafficAnomalyRulesIntervalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RiskPredictorPredictorTrafficAnomalyRulesInterval | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._quantity !== undefined) {
      hasAnyValues = true;
      internalValueResult.quantity = this._quantity;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RiskPredictorPredictorTrafficAnomalyRulesInterval | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._quantity = undefined;
      this._unit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._quantity = value.quantity;
      this._unit = value.unit;
    }
  }

  // quantity - computed: false, optional: false, required: true
  private _quantity?: number; 
  public get quantity() {
    return this.getNumberAttribute('quantity');
  }
  public set quantity(value: number) {
    this._quantity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get quantityInput() {
    return this._quantity;
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }
}
export interface RiskPredictorPredictorTrafficAnomalyRulesThreshold {
  /**
  * A float that specifies the number of users during the defined timeframe that will be considered High risk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_predictor#high RiskPredictor#high}
  */
  readonly high: number;
  /**
  * A float that specifies the number of users during the defined timeframe that will be considered Medium risk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_predictor#medium RiskPredictor#medium}
  */
  readonly medium: number;
}

export function riskPredictorPredictorTrafficAnomalyRulesThresholdToTerraform(struct?: RiskPredictorPredictorTrafficAnomalyRulesThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    high: cdktf.numberToTerraform(struct!.high),
    medium: cdktf.numberToTerraform(struct!.medium),
  }
}


export function riskPredictorPredictorTrafficAnomalyRulesThresholdToHclTerraform(struct?: RiskPredictorPredictorTrafficAnomalyRulesThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    high: {
      value: cdktf.numberToHclTerraform(struct!.high),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    medium: {
      value: cdktf.numberToHclTerraform(struct!.medium),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RiskPredictorPredictorTrafficAnomalyRulesThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RiskPredictorPredictorTrafficAnomalyRulesThreshold | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._high !== undefined) {
      hasAnyValues = true;
      internalValueResult.high = this._high;
    }
    if (this._medium !== undefined) {
      hasAnyValues = true;
      internalValueResult.medium = this._medium;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RiskPredictorPredictorTrafficAnomalyRulesThreshold | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._high = undefined;
      this._medium = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._high = value.high;
      this._medium = value.medium;
    }
  }

  // high - computed: false, optional: false, required: true
  private _high?: number; 
  public get high() {
    return this.getNumberAttribute('high');
  }
  public set high(value: number) {
    this._high = value;
  }
  // Temporarily expose input value. Use with caution.
  public get highInput() {
    return this._high;
  }

  // medium - computed: false, optional: false, required: true
  private _medium?: number; 
  public get medium() {
    return this.getNumberAttribute('medium');
  }
  public set medium(value: number) {
    this._medium = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mediumInput() {
    return this._medium;
  }
}
export interface RiskPredictorPredictorTrafficAnomalyRules {
  /**
  * A boolean to use the defined rule in the predictor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_predictor#enabled RiskPredictor#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * A single nested object that contains the fields used to define the timeframe to consider. The timeframe can be between 1 hour and 14 days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_predictor#interval RiskPredictor#interval}
  */
  readonly interval: RiskPredictorPredictorTrafficAnomalyRulesInterval;
  /**
  * A single nested object that contains the fields used to define the risk thresholds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_predictor#threshold RiskPredictor#threshold}
  */
  readonly threshold: RiskPredictorPredictorTrafficAnomalyRulesThreshold;
  /**
  * A string that specifies the type of velocity algorithm to use.  Options are `UNIQUE_USERS_PER_DEVICE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_predictor#type RiskPredictor#type}
  */
  readonly type: string;
}

export function riskPredictorPredictorTrafficAnomalyRulesToTerraform(struct?: RiskPredictorPredictorTrafficAnomalyRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    interval: riskPredictorPredictorTrafficAnomalyRulesIntervalToTerraform(struct!.interval),
    threshold: riskPredictorPredictorTrafficAnomalyRulesThresholdToTerraform(struct!.threshold),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function riskPredictorPredictorTrafficAnomalyRulesToHclTerraform(struct?: RiskPredictorPredictorTrafficAnomalyRules | cdktf.IResolvable): any {
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
    interval: {
      value: riskPredictorPredictorTrafficAnomalyRulesIntervalToHclTerraform(struct!.interval),
      isBlock: true,
      type: "struct",
      storageClassType: "RiskPredictorPredictorTrafficAnomalyRulesInterval",
    },
    threshold: {
      value: riskPredictorPredictorTrafficAnomalyRulesThresholdToHclTerraform(struct!.threshold),
      isBlock: true,
      type: "struct",
      storageClassType: "RiskPredictorPredictorTrafficAnomalyRulesThreshold",
    },
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

export class RiskPredictorPredictorTrafficAnomalyRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RiskPredictorPredictorTrafficAnomalyRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._interval?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval?.internalValue;
    }
    if (this._threshold?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RiskPredictorPredictorTrafficAnomalyRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._interval.internalValue = undefined;
      this._threshold.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._interval.internalValue = value.interval;
      this._threshold.internalValue = value.threshold;
      this._type = value.type;
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

  // interval - computed: false, optional: false, required: true
  private _interval = new RiskPredictorPredictorTrafficAnomalyRulesIntervalOutputReference(this, "interval");
  public get interval() {
    return this._interval;
  }
  public putInterval(value: RiskPredictorPredictorTrafficAnomalyRulesInterval) {
    this._interval.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval.internalValue;
  }

  // threshold - computed: false, optional: false, required: true
  private _threshold = new RiskPredictorPredictorTrafficAnomalyRulesThresholdOutputReference(this, "threshold");
  public get threshold() {
    return this._threshold;
  }
  public putThreshold(value: RiskPredictorPredictorTrafficAnomalyRulesThreshold) {
    this._threshold.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold.internalValue;
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
}

export class RiskPredictorPredictorTrafficAnomalyRulesList extends cdktf.ComplexList {
  public internalValue? : RiskPredictorPredictorTrafficAnomalyRules[] | cdktf.IResolvable

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
  public get(index: number): RiskPredictorPredictorTrafficAnomalyRulesOutputReference {
    return new RiskPredictorPredictorTrafficAnomalyRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RiskPredictorPredictorTrafficAnomaly {
  /**
  * A collection with a single rule to use for this traffic anomaly predictor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_predictor#rules RiskPredictor#rules}
  */
  readonly rules: RiskPredictorPredictorTrafficAnomalyRules[] | cdktf.IResolvable;
}

export function riskPredictorPredictorTrafficAnomalyToTerraform(struct?: RiskPredictorPredictorTrafficAnomaly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rules: cdktf.listMapper(riskPredictorPredictorTrafficAnomalyRulesToTerraform, false)(struct!.rules),
  }
}


export function riskPredictorPredictorTrafficAnomalyToHclTerraform(struct?: RiskPredictorPredictorTrafficAnomaly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rules: {
      value: cdktf.listMapperHcl(riskPredictorPredictorTrafficAnomalyRulesToHclTerraform, false)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "RiskPredictorPredictorTrafficAnomalyRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RiskPredictorPredictorTrafficAnomalyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RiskPredictorPredictorTrafficAnomaly | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RiskPredictorPredictorTrafficAnomaly | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rules.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rules.internalValue = value.rules;
    }
  }

  // rules - computed: false, optional: false, required: true
  private _rules = new RiskPredictorPredictorTrafficAnomalyRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: RiskPredictorPredictorTrafficAnomalyRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}
export interface RiskPredictorPredictorUserLocationAnomalyRadius {
  /**
  * An integer that specifies the distance to apply to the predictor evaluation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_predictor#distance RiskPredictor#distance}
  */
  readonly distance: number;
  /**
  * A string that specifies the unit of distance to apply to the predictor distance.  Options are `kilometers`, `miles`.  Defaults to `kilometers`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_predictor#unit RiskPredictor#unit}
  */
  readonly unit?: string;
}

export function riskPredictorPredictorUserLocationAnomalyRadiusToTerraform(struct?: RiskPredictorPredictorUserLocationAnomalyRadius | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    distance: cdktf.numberToTerraform(struct!.distance),
    unit: cdktf.stringToTerraform(struct!.unit),
  }
}


export function riskPredictorPredictorUserLocationAnomalyRadiusToHclTerraform(struct?: RiskPredictorPredictorUserLocationAnomalyRadius | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    distance: {
      value: cdktf.numberToHclTerraform(struct!.distance),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RiskPredictorPredictorUserLocationAnomalyRadiusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RiskPredictorPredictorUserLocationAnomalyRadius | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._distance !== undefined) {
      hasAnyValues = true;
      internalValueResult.distance = this._distance;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RiskPredictorPredictorUserLocationAnomalyRadius | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._distance = undefined;
      this._unit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._distance = value.distance;
      this._unit = value.unit;
    }
  }

  // distance - computed: false, optional: false, required: true
  private _distance?: number; 
  public get distance() {
    return this.getNumberAttribute('distance');
  }
  public set distance(value: number) {
    this._distance = value;
  }
  // Temporarily expose input value. Use with caution.
  public get distanceInput() {
    return this._distance;
  }

  // unit - computed: true, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }
}
export interface RiskPredictorPredictorUserLocationAnomaly {
  /**
  * A single nested object that specifies options for the radius to apply to the predictor evaluation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_predictor#radius RiskPredictor#radius}
  */
  readonly radius?: RiskPredictorPredictorUserLocationAnomalyRadius;
}

export function riskPredictorPredictorUserLocationAnomalyToTerraform(struct?: RiskPredictorPredictorUserLocationAnomaly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    radius: riskPredictorPredictorUserLocationAnomalyRadiusToTerraform(struct!.radius),
  }
}


export function riskPredictorPredictorUserLocationAnomalyToHclTerraform(struct?: RiskPredictorPredictorUserLocationAnomaly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    radius: {
      value: riskPredictorPredictorUserLocationAnomalyRadiusToHclTerraform(struct!.radius),
      isBlock: true,
      type: "struct",
      storageClassType: "RiskPredictorPredictorUserLocationAnomalyRadius",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RiskPredictorPredictorUserLocationAnomalyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RiskPredictorPredictorUserLocationAnomaly | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._radius?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.radius = this._radius?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RiskPredictorPredictorUserLocationAnomaly | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._radius.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._radius.internalValue = value.radius;
    }
  }

  // days - computed: true, optional: false, required: false
  public get days() {
    return this.getNumberAttribute('days');
  }

  // radius - computed: false, optional: true, required: false
  private _radius = new RiskPredictorPredictorUserLocationAnomalyRadiusOutputReference(this, "radius");
  public get radius() {
    return this._radius;
  }
  public putRadius(value: RiskPredictorPredictorUserLocationAnomalyRadius) {
    this._radius.internalValue = value;
  }
  public resetRadius() {
    this._radius.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusInput() {
    return this._radius.internalValue;
  }
}
export interface RiskPredictorPredictorUserRiskBehaviorPredictionModel {
  /**
  * A string that specifies the name of the prediction model to apply to the predictor evaluation.  Options are `login_anomaly_statistic` (to configure the organisation based risk model), `points` (to configure the user-based risk model).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_predictor#name RiskPredictor#name}
  */
  readonly name: string;
}

export function riskPredictorPredictorUserRiskBehaviorPredictionModelToTerraform(struct?: RiskPredictorPredictorUserRiskBehaviorPredictionModel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function riskPredictorPredictorUserRiskBehaviorPredictionModelToHclTerraform(struct?: RiskPredictorPredictorUserRiskBehaviorPredictionModel | cdktf.IResolvable): any {
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

export class RiskPredictorPredictorUserRiskBehaviorPredictionModelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RiskPredictorPredictorUserRiskBehaviorPredictionModel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RiskPredictorPredictorUserRiskBehaviorPredictionModel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
export interface RiskPredictorPredictorUserRiskBehavior {
  /**
  * A single nested object that specifies options for the prediction model to apply to the predictor evaluation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_predictor#prediction_model RiskPredictor#prediction_model}
  */
  readonly predictionModel: RiskPredictorPredictorUserRiskBehaviorPredictionModel;
}

export function riskPredictorPredictorUserRiskBehaviorToTerraform(struct?: RiskPredictorPredictorUserRiskBehavior | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prediction_model: riskPredictorPredictorUserRiskBehaviorPredictionModelToTerraform(struct!.predictionModel),
  }
}


export function riskPredictorPredictorUserRiskBehaviorToHclTerraform(struct?: RiskPredictorPredictorUserRiskBehavior | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prediction_model: {
      value: riskPredictorPredictorUserRiskBehaviorPredictionModelToHclTerraform(struct!.predictionModel),
      isBlock: true,
      type: "struct",
      storageClassType: "RiskPredictorPredictorUserRiskBehaviorPredictionModel",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RiskPredictorPredictorUserRiskBehaviorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RiskPredictorPredictorUserRiskBehavior | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._predictionModel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.predictionModel = this._predictionModel?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RiskPredictorPredictorUserRiskBehavior | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._predictionModel.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._predictionModel.internalValue = value.predictionModel;
    }
  }

  // prediction_model - computed: false, optional: false, required: true
  private _predictionModel = new RiskPredictorPredictorUserRiskBehaviorPredictionModelOutputReference(this, "prediction_model");
  public get predictionModel() {
    return this._predictionModel;
  }
  public putPredictionModel(value: RiskPredictorPredictorUserRiskBehaviorPredictionModel) {
    this._predictionModel.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get predictionModelInput() {
    return this._predictionModel.internalValue;
  }
}
export interface RiskPredictorPredictorVelocityEvery {
}

export function riskPredictorPredictorVelocityEveryToTerraform(struct?: RiskPredictorPredictorVelocityEvery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function riskPredictorPredictorVelocityEveryToHclTerraform(struct?: RiskPredictorPredictorVelocityEvery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class RiskPredictorPredictorVelocityEveryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RiskPredictorPredictorVelocityEvery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RiskPredictorPredictorVelocityEvery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // min_sample - computed: true, optional: false, required: false
  public get minSample() {
    return this.getNumberAttribute('min_sample');
  }

  // quantity - computed: true, optional: false, required: false
  public get quantity() {
    return this.getNumberAttribute('quantity');
  }

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }
}
export interface RiskPredictorPredictorVelocityFallback {
}

export function riskPredictorPredictorVelocityFallbackToTerraform(struct?: RiskPredictorPredictorVelocityFallback): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function riskPredictorPredictorVelocityFallbackToHclTerraform(struct?: RiskPredictorPredictorVelocityFallback): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class RiskPredictorPredictorVelocityFallbackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RiskPredictorPredictorVelocityFallback | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RiskPredictorPredictorVelocityFallback | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // high - computed: true, optional: false, required: false
  public get high() {
    return this.getNumberAttribute('high');
  }

  // medium - computed: true, optional: false, required: false
  public get medium() {
    return this.getNumberAttribute('medium');
  }

  // strategy - computed: true, optional: false, required: false
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
}
export interface RiskPredictorPredictorVelocitySlidingWindow {
}

export function riskPredictorPredictorVelocitySlidingWindowToTerraform(struct?: RiskPredictorPredictorVelocitySlidingWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function riskPredictorPredictorVelocitySlidingWindowToHclTerraform(struct?: RiskPredictorPredictorVelocitySlidingWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class RiskPredictorPredictorVelocitySlidingWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RiskPredictorPredictorVelocitySlidingWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RiskPredictorPredictorVelocitySlidingWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // min_sample - computed: true, optional: false, required: false
  public get minSample() {
    return this.getNumberAttribute('min_sample');
  }

  // quantity - computed: true, optional: false, required: false
  public get quantity() {
    return this.getNumberAttribute('quantity');
  }

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }
}
export interface RiskPredictorPredictorVelocityUse {
}

export function riskPredictorPredictorVelocityUseToTerraform(struct?: RiskPredictorPredictorVelocityUse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function riskPredictorPredictorVelocityUseToHclTerraform(struct?: RiskPredictorPredictorVelocityUse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class RiskPredictorPredictorVelocityUseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RiskPredictorPredictorVelocityUse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RiskPredictorPredictorVelocityUse | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // high - computed: true, optional: false, required: false
  public get high() {
    return this.getNumberAttribute('high');
  }

  // medium - computed: true, optional: false, required: false
  public get medium() {
    return this.getNumberAttribute('medium');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface RiskPredictorPredictorVelocity {
  /**
  * A string value that specifies the type of measure to use for the predictor.  Options are `DISTINCT_COUNT`.  Defaults to `DISTINCT_COUNT`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_predictor#measure RiskPredictor#measure}
  */
  readonly measure?: string;
  /**
  * A string value that specifies the attribute reference for the value to aggregate when calculating velocity metrics.  Options are `${event.ip}` (to configure IP address velocity by user ID), `${event.user.id}` (to configure user velocity by IP address).  When defining attribute references in Terraform, the leading `$` needs to be escaped with an additional `$` character, e.g. `of = "$${event.ip}"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_predictor#of RiskPredictor#of}
  */
  readonly of: string;
}

export function riskPredictorPredictorVelocityToTerraform(struct?: RiskPredictorPredictorVelocity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    measure: cdktf.stringToTerraform(struct!.measure),
    of: cdktf.stringToTerraform(struct!.of),
  }
}


export function riskPredictorPredictorVelocityToHclTerraform(struct?: RiskPredictorPredictorVelocity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    measure: {
      value: cdktf.stringToHclTerraform(struct!.measure),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    of: {
      value: cdktf.stringToHclTerraform(struct!.of),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RiskPredictorPredictorVelocityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RiskPredictorPredictorVelocity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._measure !== undefined) {
      hasAnyValues = true;
      internalValueResult.measure = this._measure;
    }
    if (this._of !== undefined) {
      hasAnyValues = true;
      internalValueResult.of = this._of;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RiskPredictorPredictorVelocity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._measure = undefined;
      this._of = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._measure = value.measure;
      this._of = value.of;
    }
  }

  // by - computed: true, optional: false, required: false
  public get by() {
    return cdktf.Fn.tolist(this.getListAttribute('by'));
  }

  // every - computed: true, optional: false, required: false
  private _every = new RiskPredictorPredictorVelocityEveryOutputReference(this, "every");
  public get every() {
    return this._every;
  }

  // fallback - computed: true, optional: false, required: false
  private _fallback = new RiskPredictorPredictorVelocityFallbackOutputReference(this, "fallback");
  public get fallback() {
    return this._fallback;
  }

  // measure - computed: true, optional: true, required: false
  private _measure?: string; 
  public get measure() {
    return this.getStringAttribute('measure');
  }
  public set measure(value: string) {
    this._measure = value;
  }
  public resetMeasure() {
    this._measure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get measureInput() {
    return this._measure;
  }

  // of - computed: false, optional: false, required: true
  private _of?: string; 
  public get of() {
    return this.getStringAttribute('of');
  }
  public set of(value: string) {
    this._of = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ofInput() {
    return this._of;
  }

  // sliding_window - computed: true, optional: false, required: false
  private _slidingWindow = new RiskPredictorPredictorVelocitySlidingWindowOutputReference(this, "sliding_window");
  public get slidingWindow() {
    return this._slidingWindow;
  }

  // use - computed: true, optional: false, required: false
  private _use = new RiskPredictorPredictorVelocityUseOutputReference(this, "use");
  public get use() {
    return this._use;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_predictor pingone_risk_predictor}
*/
export class RiskPredictor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingone_risk_predictor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RiskPredictor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RiskPredictor to import
  * @param importFromId The id of the existing RiskPredictor that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_predictor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RiskPredictor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingone_risk_predictor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_predictor pingone_risk_predictor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RiskPredictorConfig
  */
  public constructor(scope: Construct, id: string, config: RiskPredictorConfig) {
    super(scope, id, {
      terraformResourceType: 'pingone_risk_predictor',
      terraformGeneratorMetadata: {
        providerName: 'pingone',
        providerVersion: '1.14.0',
        providerVersionConstraint: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compactName = config.compactName;
    this._default.internalValue = config.default;
    this._description = config.description;
    this._environmentId = config.environmentId;
    this._name = config.name;
    this._predictorAdversaryInTheMiddle.internalValue = config.predictorAdversaryInTheMiddle;
    this._predictorAnonymousNetwork.internalValue = config.predictorAnonymousNetwork;
    this._predictorBotDetection.internalValue = config.predictorBotDetection;
    this._predictorComposite.internalValue = config.predictorComposite;
    this._predictorCustomMap.internalValue = config.predictorCustomMap;
    this._predictorDevice.internalValue = config.predictorDevice;
    this._predictorEmailReputation.internalValue = config.predictorEmailReputation;
    this._predictorGeovelocity.internalValue = config.predictorGeovelocity;
    this._predictorIpReputation.internalValue = config.predictorIpReputation;
    this._predictorTrafficAnomaly.internalValue = config.predictorTrafficAnomaly;
    this._predictorUserLocationAnomaly.internalValue = config.predictorUserLocationAnomaly;
    this._predictorUserRiskBehavior.internalValue = config.predictorUserRiskBehavior;
    this._predictorVelocity.internalValue = config.predictorVelocity;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compact_name - computed: false, optional: false, required: true
  private _compactName?: string; 
  public get compactName() {
    return this.getStringAttribute('compact_name');
  }
  public set compactName(value: string) {
    this._compactName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compactNameInput() {
    return this._compactName;
  }

  // default - computed: true, optional: true, required: false
  private _default = new RiskPredictorDefaultOutputReference(this, "default");
  public get default() {
    return this._default;
  }
  public putDefault(value: RiskPredictorDefault) {
    this._default.internalValue = value;
  }
  public resetDefault() {
    this._default.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default.internalValue;
  }

  // deletable - computed: true, optional: false, required: false
  public get deletable() {
    return this.getBooleanAttribute('deletable');
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

  // environment_id - computed: false, optional: false, required: true
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // licensed - computed: true, optional: false, required: false
  public get licensed() {
    return this.getBooleanAttribute('licensed');
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

  // predictor_adversary_in_the_middle - computed: false, optional: true, required: false
  private _predictorAdversaryInTheMiddle = new RiskPredictorPredictorAdversaryInTheMiddleOutputReference(this, "predictor_adversary_in_the_middle");
  public get predictorAdversaryInTheMiddle() {
    return this._predictorAdversaryInTheMiddle;
  }
  public putPredictorAdversaryInTheMiddle(value: RiskPredictorPredictorAdversaryInTheMiddle) {
    this._predictorAdversaryInTheMiddle.internalValue = value;
  }
  public resetPredictorAdversaryInTheMiddle() {
    this._predictorAdversaryInTheMiddle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predictorAdversaryInTheMiddleInput() {
    return this._predictorAdversaryInTheMiddle.internalValue;
  }

  // predictor_anonymous_network - computed: false, optional: true, required: false
  private _predictorAnonymousNetwork = new RiskPredictorPredictorAnonymousNetworkOutputReference(this, "predictor_anonymous_network");
  public get predictorAnonymousNetwork() {
    return this._predictorAnonymousNetwork;
  }
  public putPredictorAnonymousNetwork(value: RiskPredictorPredictorAnonymousNetwork) {
    this._predictorAnonymousNetwork.internalValue = value;
  }
  public resetPredictorAnonymousNetwork() {
    this._predictorAnonymousNetwork.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predictorAnonymousNetworkInput() {
    return this._predictorAnonymousNetwork.internalValue;
  }

  // predictor_bot_detection - computed: false, optional: true, required: false
  private _predictorBotDetection = new RiskPredictorPredictorBotDetectionOutputReference(this, "predictor_bot_detection");
  public get predictorBotDetection() {
    return this._predictorBotDetection;
  }
  public putPredictorBotDetection(value: RiskPredictorPredictorBotDetection) {
    this._predictorBotDetection.internalValue = value;
  }
  public resetPredictorBotDetection() {
    this._predictorBotDetection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predictorBotDetectionInput() {
    return this._predictorBotDetection.internalValue;
  }

  // predictor_composite - computed: false, optional: true, required: false
  private _predictorComposite = new RiskPredictorPredictorCompositeOutputReference(this, "predictor_composite");
  public get predictorComposite() {
    return this._predictorComposite;
  }
  public putPredictorComposite(value: RiskPredictorPredictorComposite) {
    this._predictorComposite.internalValue = value;
  }
  public resetPredictorComposite() {
    this._predictorComposite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predictorCompositeInput() {
    return this._predictorComposite.internalValue;
  }

  // predictor_custom_map - computed: false, optional: true, required: false
  private _predictorCustomMap = new RiskPredictorPredictorCustomMapOutputReference(this, "predictor_custom_map");
  public get predictorCustomMap() {
    return this._predictorCustomMap;
  }
  public putPredictorCustomMap(value: RiskPredictorPredictorCustomMap) {
    this._predictorCustomMap.internalValue = value;
  }
  public resetPredictorCustomMap() {
    this._predictorCustomMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predictorCustomMapInput() {
    return this._predictorCustomMap.internalValue;
  }

  // predictor_device - computed: false, optional: true, required: false
  private _predictorDevice = new RiskPredictorPredictorDeviceOutputReference(this, "predictor_device");
  public get predictorDevice() {
    return this._predictorDevice;
  }
  public putPredictorDevice(value: RiskPredictorPredictorDevice) {
    this._predictorDevice.internalValue = value;
  }
  public resetPredictorDevice() {
    this._predictorDevice.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predictorDeviceInput() {
    return this._predictorDevice.internalValue;
  }

  // predictor_email_reputation - computed: false, optional: true, required: false
  private _predictorEmailReputation = new RiskPredictorPredictorEmailReputationOutputReference(this, "predictor_email_reputation");
  public get predictorEmailReputation() {
    return this._predictorEmailReputation;
  }
  public putPredictorEmailReputation(value: RiskPredictorPredictorEmailReputation) {
    this._predictorEmailReputation.internalValue = value;
  }
  public resetPredictorEmailReputation() {
    this._predictorEmailReputation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predictorEmailReputationInput() {
    return this._predictorEmailReputation.internalValue;
  }

  // predictor_geovelocity - computed: false, optional: true, required: false
  private _predictorGeovelocity = new RiskPredictorPredictorGeovelocityOutputReference(this, "predictor_geovelocity");
  public get predictorGeovelocity() {
    return this._predictorGeovelocity;
  }
  public putPredictorGeovelocity(value: RiskPredictorPredictorGeovelocity) {
    this._predictorGeovelocity.internalValue = value;
  }
  public resetPredictorGeovelocity() {
    this._predictorGeovelocity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predictorGeovelocityInput() {
    return this._predictorGeovelocity.internalValue;
  }

  // predictor_ip_reputation - computed: false, optional: true, required: false
  private _predictorIpReputation = new RiskPredictorPredictorIpReputationOutputReference(this, "predictor_ip_reputation");
  public get predictorIpReputation() {
    return this._predictorIpReputation;
  }
  public putPredictorIpReputation(value: RiskPredictorPredictorIpReputation) {
    this._predictorIpReputation.internalValue = value;
  }
  public resetPredictorIpReputation() {
    this._predictorIpReputation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predictorIpReputationInput() {
    return this._predictorIpReputation.internalValue;
  }

  // predictor_traffic_anomaly - computed: false, optional: true, required: false
  private _predictorTrafficAnomaly = new RiskPredictorPredictorTrafficAnomalyOutputReference(this, "predictor_traffic_anomaly");
  public get predictorTrafficAnomaly() {
    return this._predictorTrafficAnomaly;
  }
  public putPredictorTrafficAnomaly(value: RiskPredictorPredictorTrafficAnomaly) {
    this._predictorTrafficAnomaly.internalValue = value;
  }
  public resetPredictorTrafficAnomaly() {
    this._predictorTrafficAnomaly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predictorTrafficAnomalyInput() {
    return this._predictorTrafficAnomaly.internalValue;
  }

  // predictor_user_location_anomaly - computed: false, optional: true, required: false
  private _predictorUserLocationAnomaly = new RiskPredictorPredictorUserLocationAnomalyOutputReference(this, "predictor_user_location_anomaly");
  public get predictorUserLocationAnomaly() {
    return this._predictorUserLocationAnomaly;
  }
  public putPredictorUserLocationAnomaly(value: RiskPredictorPredictorUserLocationAnomaly) {
    this._predictorUserLocationAnomaly.internalValue = value;
  }
  public resetPredictorUserLocationAnomaly() {
    this._predictorUserLocationAnomaly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predictorUserLocationAnomalyInput() {
    return this._predictorUserLocationAnomaly.internalValue;
  }

  // predictor_user_risk_behavior - computed: false, optional: true, required: false
  private _predictorUserRiskBehavior = new RiskPredictorPredictorUserRiskBehaviorOutputReference(this, "predictor_user_risk_behavior");
  public get predictorUserRiskBehavior() {
    return this._predictorUserRiskBehavior;
  }
  public putPredictorUserRiskBehavior(value: RiskPredictorPredictorUserRiskBehavior) {
    this._predictorUserRiskBehavior.internalValue = value;
  }
  public resetPredictorUserRiskBehavior() {
    this._predictorUserRiskBehavior.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predictorUserRiskBehaviorInput() {
    return this._predictorUserRiskBehavior.internalValue;
  }

  // predictor_velocity - computed: false, optional: true, required: false
  private _predictorVelocity = new RiskPredictorPredictorVelocityOutputReference(this, "predictor_velocity");
  public get predictorVelocity() {
    return this._predictorVelocity;
  }
  public putPredictorVelocity(value: RiskPredictorPredictorVelocity) {
    this._predictorVelocity.internalValue = value;
  }
  public resetPredictorVelocity() {
    this._predictorVelocity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predictorVelocityInput() {
    return this._predictorVelocity.internalValue;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compact_name: cdktf.stringToTerraform(this._compactName),
      default: riskPredictorDefaultToTerraform(this._default.internalValue),
      description: cdktf.stringToTerraform(this._description),
      environment_id: cdktf.stringToTerraform(this._environmentId),
      name: cdktf.stringToTerraform(this._name),
      predictor_adversary_in_the_middle: riskPredictorPredictorAdversaryInTheMiddleToTerraform(this._predictorAdversaryInTheMiddle.internalValue),
      predictor_anonymous_network: riskPredictorPredictorAnonymousNetworkToTerraform(this._predictorAnonymousNetwork.internalValue),
      predictor_bot_detection: riskPredictorPredictorBotDetectionToTerraform(this._predictorBotDetection.internalValue),
      predictor_composite: riskPredictorPredictorCompositeToTerraform(this._predictorComposite.internalValue),
      predictor_custom_map: riskPredictorPredictorCustomMapToTerraform(this._predictorCustomMap.internalValue),
      predictor_device: riskPredictorPredictorDeviceToTerraform(this._predictorDevice.internalValue),
      predictor_email_reputation: riskPredictorPredictorEmailReputationToTerraform(this._predictorEmailReputation.internalValue),
      predictor_geovelocity: riskPredictorPredictorGeovelocityToTerraform(this._predictorGeovelocity.internalValue),
      predictor_ip_reputation: riskPredictorPredictorIpReputationToTerraform(this._predictorIpReputation.internalValue),
      predictor_traffic_anomaly: riskPredictorPredictorTrafficAnomalyToTerraform(this._predictorTrafficAnomaly.internalValue),
      predictor_user_location_anomaly: riskPredictorPredictorUserLocationAnomalyToTerraform(this._predictorUserLocationAnomaly.internalValue),
      predictor_user_risk_behavior: riskPredictorPredictorUserRiskBehaviorToTerraform(this._predictorUserRiskBehavior.internalValue),
      predictor_velocity: riskPredictorPredictorVelocityToTerraform(this._predictorVelocity.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compact_name: {
        value: cdktf.stringToHclTerraform(this._compactName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default: {
        value: riskPredictorDefaultToHclTerraform(this._default.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RiskPredictorDefault",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
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
      predictor_adversary_in_the_middle: {
        value: riskPredictorPredictorAdversaryInTheMiddleToHclTerraform(this._predictorAdversaryInTheMiddle.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RiskPredictorPredictorAdversaryInTheMiddle",
      },
      predictor_anonymous_network: {
        value: riskPredictorPredictorAnonymousNetworkToHclTerraform(this._predictorAnonymousNetwork.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RiskPredictorPredictorAnonymousNetwork",
      },
      predictor_bot_detection: {
        value: riskPredictorPredictorBotDetectionToHclTerraform(this._predictorBotDetection.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RiskPredictorPredictorBotDetection",
      },
      predictor_composite: {
        value: riskPredictorPredictorCompositeToHclTerraform(this._predictorComposite.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RiskPredictorPredictorComposite",
      },
      predictor_custom_map: {
        value: riskPredictorPredictorCustomMapToHclTerraform(this._predictorCustomMap.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RiskPredictorPredictorCustomMap",
      },
      predictor_device: {
        value: riskPredictorPredictorDeviceToHclTerraform(this._predictorDevice.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RiskPredictorPredictorDevice",
      },
      predictor_email_reputation: {
        value: riskPredictorPredictorEmailReputationToHclTerraform(this._predictorEmailReputation.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RiskPredictorPredictorEmailReputation",
      },
      predictor_geovelocity: {
        value: riskPredictorPredictorGeovelocityToHclTerraform(this._predictorGeovelocity.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RiskPredictorPredictorGeovelocity",
      },
      predictor_ip_reputation: {
        value: riskPredictorPredictorIpReputationToHclTerraform(this._predictorIpReputation.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RiskPredictorPredictorIpReputation",
      },
      predictor_traffic_anomaly: {
        value: riskPredictorPredictorTrafficAnomalyToHclTerraform(this._predictorTrafficAnomaly.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RiskPredictorPredictorTrafficAnomaly",
      },
      predictor_user_location_anomaly: {
        value: riskPredictorPredictorUserLocationAnomalyToHclTerraform(this._predictorUserLocationAnomaly.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RiskPredictorPredictorUserLocationAnomaly",
      },
      predictor_user_risk_behavior: {
        value: riskPredictorPredictorUserRiskBehaviorToHclTerraform(this._predictorUserRiskBehavior.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RiskPredictorPredictorUserRiskBehavior",
      },
      predictor_velocity: {
        value: riskPredictorPredictorVelocityToHclTerraform(this._predictorVelocity.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RiskPredictorPredictorVelocity",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
