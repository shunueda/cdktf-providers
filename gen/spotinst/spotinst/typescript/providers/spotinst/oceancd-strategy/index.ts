// https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_strategy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OceancdStrategyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_strategy#id OceancdStrategy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_strategy#strategy_name OceancdStrategy#strategy_name}
  */
  readonly strategyName: string;
  /**
  * canary block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_strategy#canary OceancdStrategy#canary}
  */
  readonly canary?: OceancdStrategyCanary;
  /**
  * rolling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_strategy#rolling OceancdStrategy#rolling}
  */
  readonly rolling?: OceancdStrategyRolling;
}
export interface OceancdStrategyCanaryBackgroundVerification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_strategy#template_names OceancdStrategy#template_names}
  */
  readonly templateNames: string[];
}

export function oceancdStrategyCanaryBackgroundVerificationToTerraform(struct?: OceancdStrategyCanaryBackgroundVerificationOutputReference | OceancdStrategyCanaryBackgroundVerification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    template_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.templateNames),
  }
}


export function oceancdStrategyCanaryBackgroundVerificationToHclTerraform(struct?: OceancdStrategyCanaryBackgroundVerificationOutputReference | OceancdStrategyCanaryBackgroundVerification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    template_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.templateNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceancdStrategyCanaryBackgroundVerificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceancdStrategyCanaryBackgroundVerification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._templateNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateNames = this._templateNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceancdStrategyCanaryBackgroundVerification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._templateNames = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._templateNames = value.templateNames;
    }
  }

  // template_names - computed: false, optional: false, required: true
  private _templateNames?: string[]; 
  public get templateNames() {
    return this.getListAttribute('template_names');
  }
  public set templateNames(value: string[]) {
    this._templateNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateNamesInput() {
    return this._templateNames;
  }
}
export interface OceancdStrategyCanaryStepsPause {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_strategy#duration OceancdStrategy#duration}
  */
  readonly duration?: string;
}

export function oceancdStrategyCanaryStepsPauseToTerraform(struct?: OceancdStrategyCanaryStepsPauseOutputReference | OceancdStrategyCanaryStepsPause): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
  }
}


export function oceancdStrategyCanaryStepsPauseToHclTerraform(struct?: OceancdStrategyCanaryStepsPauseOutputReference | OceancdStrategyCanaryStepsPause): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceancdStrategyCanaryStepsPauseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceancdStrategyCanaryStepsPause | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceancdStrategyCanaryStepsPause | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
    }
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }
}
export interface OceancdStrategyCanaryStepsSetCanaryScale {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_strategy#match_traffic_weight OceancdStrategy#match_traffic_weight}
  */
  readonly matchTrafficWeight?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_strategy#replicas OceancdStrategy#replicas}
  */
  readonly replicas?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_strategy#weight OceancdStrategy#weight}
  */
  readonly weight?: number;
}

export function oceancdStrategyCanaryStepsSetCanaryScaleToTerraform(struct?: OceancdStrategyCanaryStepsSetCanaryScaleOutputReference | OceancdStrategyCanaryStepsSetCanaryScale): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_traffic_weight: cdktf.booleanToTerraform(struct!.matchTrafficWeight),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function oceancdStrategyCanaryStepsSetCanaryScaleToHclTerraform(struct?: OceancdStrategyCanaryStepsSetCanaryScaleOutputReference | OceancdStrategyCanaryStepsSetCanaryScale): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_traffic_weight: {
      value: cdktf.booleanToHclTerraform(struct!.matchTrafficWeight),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
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

export class OceancdStrategyCanaryStepsSetCanaryScaleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceancdStrategyCanaryStepsSetCanaryScale | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchTrafficWeight !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchTrafficWeight = this._matchTrafficWeight;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceancdStrategyCanaryStepsSetCanaryScale | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchTrafficWeight = undefined;
      this._replicas = undefined;
      this._weight = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchTrafficWeight = value.matchTrafficWeight;
      this._replicas = value.replicas;
      this._weight = value.weight;
    }
  }

  // match_traffic_weight - computed: false, optional: true, required: false
  private _matchTrafficWeight?: boolean | cdktf.IResolvable; 
  public get matchTrafficWeight() {
    return this.getBooleanAttribute('match_traffic_weight');
  }
  public set matchTrafficWeight(value: boolean | cdktf.IResolvable) {
    this._matchTrafficWeight = value;
  }
  public resetMatchTrafficWeight() {
    this._matchTrafficWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTrafficWeightInput() {
    return this._matchTrafficWeight;
  }

  // replicas - computed: false, optional: true, required: false
  private _replicas?: number; 
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
  public set replicas(value: number) {
    this._replicas = value;
  }
  public resetReplicas() {
    this._replicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas;
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
export interface OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_strategy#exact OceancdStrategy#exact}
  */
  readonly exact?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_strategy#prefix OceancdStrategy#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_strategy#regex OceancdStrategy#regex}
  */
  readonly regex?: string;
}

export function oceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueToTerraform(struct?: OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference | OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact: cdktf.stringToTerraform(struct!.exact),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}


export function oceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueToHclTerraform(struct?: OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference | OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
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

export class OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
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

  public set internalValue(value: OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exact = undefined;
      this._prefix = undefined;
      this._regex = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exact = value.exact;
      this._prefix = value.prefix;
      this._regex = value.regex;
    }
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
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
export interface OceancdStrategyCanaryStepsSetHeaderRouteMatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_strategy#header_name OceancdStrategy#header_name}
  */
  readonly headerName: string;
  /**
  * header_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_strategy#header_value OceancdStrategy#header_value}
  */
  readonly headerValue: OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue;
}

export function oceancdStrategyCanaryStepsSetHeaderRouteMatchToTerraform(struct?: OceancdStrategyCanaryStepsSetHeaderRouteMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_name: cdktf.stringToTerraform(struct!.headerName),
    header_value: oceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueToTerraform(struct!.headerValue),
  }
}


export function oceancdStrategyCanaryStepsSetHeaderRouteMatchToHclTerraform(struct?: OceancdStrategyCanaryStepsSetHeaderRouteMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_name: {
      value: cdktf.stringToHclTerraform(struct!.headerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_value: {
      value: oceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueToHclTerraform(struct!.headerValue),
      isBlock: true,
      type: "list",
      storageClassType: "OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OceancdStrategyCanaryStepsSetHeaderRouteMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    if (this._headerValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerValue = this._headerValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceancdStrategyCanaryStepsSetHeaderRouteMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headerName = undefined;
      this._headerValue.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headerName = value.headerName;
      this._headerValue.internalValue = value.headerValue;
    }
  }

  // header_name - computed: false, optional: false, required: true
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
  }

  // header_value - computed: false, optional: false, required: true
  private _headerValue = new OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference(this, "header_value");
  public get headerValue() {
    return this._headerValue;
  }
  public putHeaderValue(value: OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue) {
    this._headerValue.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerValueInput() {
    return this._headerValue.internalValue;
  }
}

export class OceancdStrategyCanaryStepsSetHeaderRouteMatchList extends cdktf.ComplexList {
  public internalValue? : OceancdStrategyCanaryStepsSetHeaderRouteMatch[] | cdktf.IResolvable

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
  public get(index: number): OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference {
    return new OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OceancdStrategyCanaryStepsSetHeaderRoute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_strategy#header_route_name OceancdStrategy#header_route_name}
  */
  readonly headerRouteName: string;
  /**
  * match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_strategy#match OceancdStrategy#match}
  */
  readonly match: OceancdStrategyCanaryStepsSetHeaderRouteMatch[] | cdktf.IResolvable;
}

export function oceancdStrategyCanaryStepsSetHeaderRouteToTerraform(struct?: OceancdStrategyCanaryStepsSetHeaderRouteOutputReference | OceancdStrategyCanaryStepsSetHeaderRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_route_name: cdktf.stringToTerraform(struct!.headerRouteName),
    match: cdktf.listMapper(oceancdStrategyCanaryStepsSetHeaderRouteMatchToTerraform, true)(struct!.match),
  }
}


export function oceancdStrategyCanaryStepsSetHeaderRouteToHclTerraform(struct?: OceancdStrategyCanaryStepsSetHeaderRouteOutputReference | OceancdStrategyCanaryStepsSetHeaderRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_route_name: {
      value: cdktf.stringToHclTerraform(struct!.headerRouteName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match: {
      value: cdktf.listMapperHcl(oceancdStrategyCanaryStepsSetHeaderRouteMatchToHclTerraform, true)(struct!.match),
      isBlock: true,
      type: "list",
      storageClassType: "OceancdStrategyCanaryStepsSetHeaderRouteMatchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceancdStrategyCanaryStepsSetHeaderRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceancdStrategyCanaryStepsSetHeaderRoute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerRouteName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerRouteName = this._headerRouteName;
    }
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceancdStrategyCanaryStepsSetHeaderRoute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headerRouteName = undefined;
      this._match.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headerRouteName = value.headerRouteName;
      this._match.internalValue = value.match;
    }
  }

  // header_route_name - computed: false, optional: false, required: true
  private _headerRouteName?: string; 
  public get headerRouteName() {
    return this.getStringAttribute('header_route_name');
  }
  public set headerRouteName(value: string) {
    this._headerRouteName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerRouteNameInput() {
    return this._headerRouteName;
  }

  // match - computed: false, optional: false, required: true
  private _match = new OceancdStrategyCanaryStepsSetHeaderRouteMatchList(this, "match", false);
  public get match() {
    return this._match;
  }
  public putMatch(value: OceancdStrategyCanaryStepsSetHeaderRouteMatch[] | cdktf.IResolvable) {
    this._match.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }
}
export interface OceancdStrategyCanaryStepsVerification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_strategy#template_names OceancdStrategy#template_names}
  */
  readonly templateNames: string[];
}

export function oceancdStrategyCanaryStepsVerificationToTerraform(struct?: OceancdStrategyCanaryStepsVerificationOutputReference | OceancdStrategyCanaryStepsVerification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    template_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.templateNames),
  }
}


export function oceancdStrategyCanaryStepsVerificationToHclTerraform(struct?: OceancdStrategyCanaryStepsVerificationOutputReference | OceancdStrategyCanaryStepsVerification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    template_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.templateNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceancdStrategyCanaryStepsVerificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceancdStrategyCanaryStepsVerification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._templateNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateNames = this._templateNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceancdStrategyCanaryStepsVerification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._templateNames = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._templateNames = value.templateNames;
    }
  }

  // template_names - computed: false, optional: false, required: true
  private _templateNames?: string[]; 
  public get templateNames() {
    return this.getListAttribute('template_names');
  }
  public set templateNames(value: string[]) {
    this._templateNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateNamesInput() {
    return this._templateNames;
  }
}
export interface OceancdStrategyCanarySteps {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_strategy#set_weight OceancdStrategy#set_weight}
  */
  readonly setWeight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_strategy#step_name OceancdStrategy#step_name}
  */
  readonly stepName?: string;
  /**
  * pause block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_strategy#pause OceancdStrategy#pause}
  */
  readonly pause?: OceancdStrategyCanaryStepsPause;
  /**
  * set_canary_scale block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_strategy#set_canary_scale OceancdStrategy#set_canary_scale}
  */
  readonly setCanaryScale?: OceancdStrategyCanaryStepsSetCanaryScale;
  /**
  * set_header_route block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_strategy#set_header_route OceancdStrategy#set_header_route}
  */
  readonly setHeaderRoute?: OceancdStrategyCanaryStepsSetHeaderRoute;
  /**
  * verification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_strategy#verification OceancdStrategy#verification}
  */
  readonly verification?: OceancdStrategyCanaryStepsVerification;
}

export function oceancdStrategyCanaryStepsToTerraform(struct?: OceancdStrategyCanarySteps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    set_weight: cdktf.numberToTerraform(struct!.setWeight),
    step_name: cdktf.stringToTerraform(struct!.stepName),
    pause: oceancdStrategyCanaryStepsPauseToTerraform(struct!.pause),
    set_canary_scale: oceancdStrategyCanaryStepsSetCanaryScaleToTerraform(struct!.setCanaryScale),
    set_header_route: oceancdStrategyCanaryStepsSetHeaderRouteToTerraform(struct!.setHeaderRoute),
    verification: oceancdStrategyCanaryStepsVerificationToTerraform(struct!.verification),
  }
}


export function oceancdStrategyCanaryStepsToHclTerraform(struct?: OceancdStrategyCanarySteps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    set_weight: {
      value: cdktf.numberToHclTerraform(struct!.setWeight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    step_name: {
      value: cdktf.stringToHclTerraform(struct!.stepName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pause: {
      value: oceancdStrategyCanaryStepsPauseToHclTerraform(struct!.pause),
      isBlock: true,
      type: "list",
      storageClassType: "OceancdStrategyCanaryStepsPauseList",
    },
    set_canary_scale: {
      value: oceancdStrategyCanaryStepsSetCanaryScaleToHclTerraform(struct!.setCanaryScale),
      isBlock: true,
      type: "list",
      storageClassType: "OceancdStrategyCanaryStepsSetCanaryScaleList",
    },
    set_header_route: {
      value: oceancdStrategyCanaryStepsSetHeaderRouteToHclTerraform(struct!.setHeaderRoute),
      isBlock: true,
      type: "list",
      storageClassType: "OceancdStrategyCanaryStepsSetHeaderRouteList",
    },
    verification: {
      value: oceancdStrategyCanaryStepsVerificationToHclTerraform(struct!.verification),
      isBlock: true,
      type: "list",
      storageClassType: "OceancdStrategyCanaryStepsVerificationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceancdStrategyCanaryStepsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OceancdStrategyCanarySteps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._setWeight !== undefined) {
      hasAnyValues = true;
      internalValueResult.setWeight = this._setWeight;
    }
    if (this._stepName !== undefined) {
      hasAnyValues = true;
      internalValueResult.stepName = this._stepName;
    }
    if (this._pause?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pause = this._pause?.internalValue;
    }
    if (this._setCanaryScale?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.setCanaryScale = this._setCanaryScale?.internalValue;
    }
    if (this._setHeaderRoute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.setHeaderRoute = this._setHeaderRoute?.internalValue;
    }
    if (this._verification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.verification = this._verification?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceancdStrategyCanarySteps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._setWeight = undefined;
      this._stepName = undefined;
      this._pause.internalValue = undefined;
      this._setCanaryScale.internalValue = undefined;
      this._setHeaderRoute.internalValue = undefined;
      this._verification.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._setWeight = value.setWeight;
      this._stepName = value.stepName;
      this._pause.internalValue = value.pause;
      this._setCanaryScale.internalValue = value.setCanaryScale;
      this._setHeaderRoute.internalValue = value.setHeaderRoute;
      this._verification.internalValue = value.verification;
    }
  }

  // set_weight - computed: false, optional: true, required: false
  private _setWeight?: number; 
  public get setWeight() {
    return this.getNumberAttribute('set_weight');
  }
  public set setWeight(value: number) {
    this._setWeight = value;
  }
  public resetSetWeight() {
    this._setWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setWeightInput() {
    return this._setWeight;
  }

  // step_name - computed: false, optional: true, required: false
  private _stepName?: string; 
  public get stepName() {
    return this.getStringAttribute('step_name');
  }
  public set stepName(value: string) {
    this._stepName = value;
  }
  public resetStepName() {
    this._stepName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepNameInput() {
    return this._stepName;
  }

  // pause - computed: false, optional: true, required: false
  private _pause = new OceancdStrategyCanaryStepsPauseOutputReference(this, "pause");
  public get pause() {
    return this._pause;
  }
  public putPause(value: OceancdStrategyCanaryStepsPause) {
    this._pause.internalValue = value;
  }
  public resetPause() {
    this._pause.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pauseInput() {
    return this._pause.internalValue;
  }

  // set_canary_scale - computed: false, optional: true, required: false
  private _setCanaryScale = new OceancdStrategyCanaryStepsSetCanaryScaleOutputReference(this, "set_canary_scale");
  public get setCanaryScale() {
    return this._setCanaryScale;
  }
  public putSetCanaryScale(value: OceancdStrategyCanaryStepsSetCanaryScale) {
    this._setCanaryScale.internalValue = value;
  }
  public resetSetCanaryScale() {
    this._setCanaryScale.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setCanaryScaleInput() {
    return this._setCanaryScale.internalValue;
  }

  // set_header_route - computed: false, optional: true, required: false
  private _setHeaderRoute = new OceancdStrategyCanaryStepsSetHeaderRouteOutputReference(this, "set_header_route");
  public get setHeaderRoute() {
    return this._setHeaderRoute;
  }
  public putSetHeaderRoute(value: OceancdStrategyCanaryStepsSetHeaderRoute) {
    this._setHeaderRoute.internalValue = value;
  }
  public resetSetHeaderRoute() {
    this._setHeaderRoute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setHeaderRouteInput() {
    return this._setHeaderRoute.internalValue;
  }

  // verification - computed: false, optional: true, required: false
  private _verification = new OceancdStrategyCanaryStepsVerificationOutputReference(this, "verification");
  public get verification() {
    return this._verification;
  }
  public putVerification(value: OceancdStrategyCanaryStepsVerification) {
    this._verification.internalValue = value;
  }
  public resetVerification() {
    this._verification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verificationInput() {
    return this._verification.internalValue;
  }
}

export class OceancdStrategyCanaryStepsList extends cdktf.ComplexList {
  public internalValue? : OceancdStrategyCanarySteps[] | cdktf.IResolvable

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
  public get(index: number): OceancdStrategyCanaryStepsOutputReference {
    return new OceancdStrategyCanaryStepsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OceancdStrategyCanary {
  /**
  * background_verification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_strategy#background_verification OceancdStrategy#background_verification}
  */
  readonly backgroundVerification?: OceancdStrategyCanaryBackgroundVerification;
  /**
  * steps block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_strategy#steps OceancdStrategy#steps}
  */
  readonly steps: OceancdStrategyCanarySteps[] | cdktf.IResolvable;
}

export function oceancdStrategyCanaryToTerraform(struct?: OceancdStrategyCanaryOutputReference | OceancdStrategyCanary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    background_verification: oceancdStrategyCanaryBackgroundVerificationToTerraform(struct!.backgroundVerification),
    steps: cdktf.listMapper(oceancdStrategyCanaryStepsToTerraform, true)(struct!.steps),
  }
}


export function oceancdStrategyCanaryToHclTerraform(struct?: OceancdStrategyCanaryOutputReference | OceancdStrategyCanary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    background_verification: {
      value: oceancdStrategyCanaryBackgroundVerificationToHclTerraform(struct!.backgroundVerification),
      isBlock: true,
      type: "list",
      storageClassType: "OceancdStrategyCanaryBackgroundVerificationList",
    },
    steps: {
      value: cdktf.listMapperHcl(oceancdStrategyCanaryStepsToHclTerraform, true)(struct!.steps),
      isBlock: true,
      type: "list",
      storageClassType: "OceancdStrategyCanaryStepsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceancdStrategyCanaryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceancdStrategyCanary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backgroundVerification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backgroundVerification = this._backgroundVerification?.internalValue;
    }
    if (this._steps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.steps = this._steps?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceancdStrategyCanary | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backgroundVerification.internalValue = undefined;
      this._steps.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backgroundVerification.internalValue = value.backgroundVerification;
      this._steps.internalValue = value.steps;
    }
  }

  // background_verification - computed: false, optional: true, required: false
  private _backgroundVerification = new OceancdStrategyCanaryBackgroundVerificationOutputReference(this, "background_verification");
  public get backgroundVerification() {
    return this._backgroundVerification;
  }
  public putBackgroundVerification(value: OceancdStrategyCanaryBackgroundVerification) {
    this._backgroundVerification.internalValue = value;
  }
  public resetBackgroundVerification() {
    this._backgroundVerification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundVerificationInput() {
    return this._backgroundVerification.internalValue;
  }

  // steps - computed: false, optional: false, required: true
  private _steps = new OceancdStrategyCanaryStepsList(this, "steps", false);
  public get steps() {
    return this._steps;
  }
  public putSteps(value: OceancdStrategyCanarySteps[] | cdktf.IResolvable) {
    this._steps.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stepsInput() {
    return this._steps.internalValue;
  }
}
export interface OceancdStrategyRollingStepsPause {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_strategy#duration OceancdStrategy#duration}
  */
  readonly duration?: string;
}

export function oceancdStrategyRollingStepsPauseToTerraform(struct?: OceancdStrategyRollingStepsPauseOutputReference | OceancdStrategyRollingStepsPause): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
  }
}


export function oceancdStrategyRollingStepsPauseToHclTerraform(struct?: OceancdStrategyRollingStepsPauseOutputReference | OceancdStrategyRollingStepsPause): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceancdStrategyRollingStepsPauseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceancdStrategyRollingStepsPause | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceancdStrategyRollingStepsPause | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
    }
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }
}
export interface OceancdStrategyRollingStepsVerification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_strategy#template_names OceancdStrategy#template_names}
  */
  readonly templateNames: string[];
}

export function oceancdStrategyRollingStepsVerificationToTerraform(struct?: OceancdStrategyRollingStepsVerificationOutputReference | OceancdStrategyRollingStepsVerification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    template_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.templateNames),
  }
}


export function oceancdStrategyRollingStepsVerificationToHclTerraform(struct?: OceancdStrategyRollingStepsVerificationOutputReference | OceancdStrategyRollingStepsVerification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    template_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.templateNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceancdStrategyRollingStepsVerificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceancdStrategyRollingStepsVerification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._templateNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateNames = this._templateNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceancdStrategyRollingStepsVerification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._templateNames = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._templateNames = value.templateNames;
    }
  }

  // template_names - computed: false, optional: false, required: true
  private _templateNames?: string[]; 
  public get templateNames() {
    return this.getListAttribute('template_names');
  }
  public set templateNames(value: string[]) {
    this._templateNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateNamesInput() {
    return this._templateNames;
  }
}
export interface OceancdStrategyRollingSteps {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_strategy#steps_name OceancdStrategy#steps_name}
  */
  readonly stepsName?: string;
  /**
  * pause block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_strategy#pause OceancdStrategy#pause}
  */
  readonly pause?: OceancdStrategyRollingStepsPause;
  /**
  * verification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_strategy#verification OceancdStrategy#verification}
  */
  readonly verification?: OceancdStrategyRollingStepsVerification;
}

export function oceancdStrategyRollingStepsToTerraform(struct?: OceancdStrategyRollingSteps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    steps_name: cdktf.stringToTerraform(struct!.stepsName),
    pause: oceancdStrategyRollingStepsPauseToTerraform(struct!.pause),
    verification: oceancdStrategyRollingStepsVerificationToTerraform(struct!.verification),
  }
}


export function oceancdStrategyRollingStepsToHclTerraform(struct?: OceancdStrategyRollingSteps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    steps_name: {
      value: cdktf.stringToHclTerraform(struct!.stepsName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pause: {
      value: oceancdStrategyRollingStepsPauseToHclTerraform(struct!.pause),
      isBlock: true,
      type: "list",
      storageClassType: "OceancdStrategyRollingStepsPauseList",
    },
    verification: {
      value: oceancdStrategyRollingStepsVerificationToHclTerraform(struct!.verification),
      isBlock: true,
      type: "list",
      storageClassType: "OceancdStrategyRollingStepsVerificationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceancdStrategyRollingStepsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OceancdStrategyRollingSteps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stepsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.stepsName = this._stepsName;
    }
    if (this._pause?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pause = this._pause?.internalValue;
    }
    if (this._verification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.verification = this._verification?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceancdStrategyRollingSteps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._stepsName = undefined;
      this._pause.internalValue = undefined;
      this._verification.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._stepsName = value.stepsName;
      this._pause.internalValue = value.pause;
      this._verification.internalValue = value.verification;
    }
  }

  // steps_name - computed: false, optional: true, required: false
  private _stepsName?: string; 
  public get stepsName() {
    return this.getStringAttribute('steps_name');
  }
  public set stepsName(value: string) {
    this._stepsName = value;
  }
  public resetStepsName() {
    this._stepsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepsNameInput() {
    return this._stepsName;
  }

  // pause - computed: false, optional: true, required: false
  private _pause = new OceancdStrategyRollingStepsPauseOutputReference(this, "pause");
  public get pause() {
    return this._pause;
  }
  public putPause(value: OceancdStrategyRollingStepsPause) {
    this._pause.internalValue = value;
  }
  public resetPause() {
    this._pause.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pauseInput() {
    return this._pause.internalValue;
  }

  // verification - computed: false, optional: true, required: false
  private _verification = new OceancdStrategyRollingStepsVerificationOutputReference(this, "verification");
  public get verification() {
    return this._verification;
  }
  public putVerification(value: OceancdStrategyRollingStepsVerification) {
    this._verification.internalValue = value;
  }
  public resetVerification() {
    this._verification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verificationInput() {
    return this._verification.internalValue;
  }
}

export class OceancdStrategyRollingStepsList extends cdktf.ComplexList {
  public internalValue? : OceancdStrategyRollingSteps[] | cdktf.IResolvable

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
  public get(index: number): OceancdStrategyRollingStepsOutputReference {
    return new OceancdStrategyRollingStepsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OceancdStrategyRolling {
  /**
  * steps block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_strategy#steps OceancdStrategy#steps}
  */
  readonly steps: OceancdStrategyRollingSteps[] | cdktf.IResolvable;
}

export function oceancdStrategyRollingToTerraform(struct?: OceancdStrategyRollingOutputReference | OceancdStrategyRolling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    steps: cdktf.listMapper(oceancdStrategyRollingStepsToTerraform, true)(struct!.steps),
  }
}


export function oceancdStrategyRollingToHclTerraform(struct?: OceancdStrategyRollingOutputReference | OceancdStrategyRolling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    steps: {
      value: cdktf.listMapperHcl(oceancdStrategyRollingStepsToHclTerraform, true)(struct!.steps),
      isBlock: true,
      type: "list",
      storageClassType: "OceancdStrategyRollingStepsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceancdStrategyRollingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceancdStrategyRolling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._steps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.steps = this._steps?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceancdStrategyRolling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._steps.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._steps.internalValue = value.steps;
    }
  }

  // steps - computed: false, optional: false, required: true
  private _steps = new OceancdStrategyRollingStepsList(this, "steps", false);
  public get steps() {
    return this._steps;
  }
  public putSteps(value: OceancdStrategyRollingSteps[] | cdktf.IResolvable) {
    this._steps.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stepsInput() {
    return this._steps.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_strategy spotinst_oceancd_strategy}
*/
export class OceancdStrategy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spotinst_oceancd_strategy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OceancdStrategy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OceancdStrategy to import
  * @param importFromId The id of the existing OceancdStrategy that should be imported. Refer to the {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_strategy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OceancdStrategy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "spotinst_oceancd_strategy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_strategy spotinst_oceancd_strategy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OceancdStrategyConfig
  */
  public constructor(scope: Construct, id: string, config: OceancdStrategyConfig) {
    super(scope, id, {
      terraformResourceType: 'spotinst_oceancd_strategy',
      terraformGeneratorMetadata: {
        providerName: 'spotinst',
        providerVersion: '1.231.0',
        providerVersionConstraint: '1.231.0'
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
    this._strategyName = config.strategyName;
    this._canary.internalValue = config.canary;
    this._rolling.internalValue = config.rolling;
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

  // strategy_name - computed: false, optional: false, required: true
  private _strategyName?: string; 
  public get strategyName() {
    return this.getStringAttribute('strategy_name');
  }
  public set strategyName(value: string) {
    this._strategyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyNameInput() {
    return this._strategyName;
  }

  // canary - computed: false, optional: true, required: false
  private _canary = new OceancdStrategyCanaryOutputReference(this, "canary");
  public get canary() {
    return this._canary;
  }
  public putCanary(value: OceancdStrategyCanary) {
    this._canary.internalValue = value;
  }
  public resetCanary() {
    this._canary.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canaryInput() {
    return this._canary.internalValue;
  }

  // rolling - computed: false, optional: true, required: false
  private _rolling = new OceancdStrategyRollingOutputReference(this, "rolling");
  public get rolling() {
    return this._rolling;
  }
  public putRolling(value: OceancdStrategyRolling) {
    this._rolling.internalValue = value;
  }
  public resetRolling() {
    this._rolling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollingInput() {
    return this._rolling.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      strategy_name: cdktf.stringToTerraform(this._strategyName),
      canary: oceancdStrategyCanaryToTerraform(this._canary.internalValue),
      rolling: oceancdStrategyRollingToTerraform(this._rolling.internalValue),
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
      strategy_name: {
        value: cdktf.stringToHclTerraform(this._strategyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      canary: {
        value: oceancdStrategyCanaryToHclTerraform(this._canary.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OceancdStrategyCanaryList",
      },
      rolling: {
        value: oceancdStrategyRollingToHclTerraform(this._rolling.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OceancdStrategyRollingList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
