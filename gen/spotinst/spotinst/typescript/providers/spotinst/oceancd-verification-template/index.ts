// https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_verification_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OceancdVerificationTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_verification_template#id OceancdVerificationTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_verification_template#name OceancdVerificationTemplate#name}
  */
  readonly name: string;
  /**
  * args block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_verification_template#args OceancdVerificationTemplate#args}
  */
  readonly args?: OceancdVerificationTemplateArgs[] | cdktf.IResolvable;
  /**
  * metrics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_verification_template#metrics OceancdVerificationTemplate#metrics}
  */
  readonly metrics?: OceancdVerificationTemplateMetrics[] | cdktf.IResolvable;
}
export interface OceancdVerificationTemplateArgsValueFromSecretKeyRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_verification_template#key OceancdVerificationTemplate#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_verification_template#name OceancdVerificationTemplate#name}
  */
  readonly name: string;
}

export function oceancdVerificationTemplateArgsValueFromSecretKeyRefToTerraform(struct?: OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference | OceancdVerificationTemplateArgsValueFromSecretKeyRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function oceancdVerificationTemplateArgsValueFromSecretKeyRefToHclTerraform(struct?: OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference | OceancdVerificationTemplateArgsValueFromSecretKeyRef): any {
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

export class OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceancdVerificationTemplateArgsValueFromSecretKeyRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceancdVerificationTemplateArgsValueFromSecretKeyRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._name = value.name;
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
export interface OceancdVerificationTemplateArgsValueFrom {
  /**
  * secret_key_ref block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_verification_template#secret_key_ref OceancdVerificationTemplate#secret_key_ref}
  */
  readonly secretKeyRef?: OceancdVerificationTemplateArgsValueFromSecretKeyRef;
}

export function oceancdVerificationTemplateArgsValueFromToTerraform(struct?: OceancdVerificationTemplateArgsValueFromOutputReference | OceancdVerificationTemplateArgsValueFrom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_key_ref: oceancdVerificationTemplateArgsValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function oceancdVerificationTemplateArgsValueFromToHclTerraform(struct?: OceancdVerificationTemplateArgsValueFromOutputReference | OceancdVerificationTemplateArgsValueFrom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_key_ref: {
      value: oceancdVerificationTemplateArgsValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "list",
      storageClassType: "OceancdVerificationTemplateArgsValueFromSecretKeyRefList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceancdVerificationTemplateArgsValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceancdVerificationTemplateArgsValueFrom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceancdVerificationTemplateArgsValueFrom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretKeyRef.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: OceancdVerificationTemplateArgsValueFromSecretKeyRef) {
    this._secretKeyRef.internalValue = value;
  }
  public resetSecretKeyRef() {
    this._secretKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyRefInput() {
    return this._secretKeyRef.internalValue;
  }
}
export interface OceancdVerificationTemplateArgs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_verification_template#arg_name OceancdVerificationTemplate#arg_name}
  */
  readonly argName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_verification_template#value OceancdVerificationTemplate#value}
  */
  readonly value?: string;
  /**
  * value_from block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_verification_template#value_from OceancdVerificationTemplate#value_from}
  */
  readonly valueFrom?: OceancdVerificationTemplateArgsValueFrom;
}

export function oceancdVerificationTemplateArgsToTerraform(struct?: OceancdVerificationTemplateArgs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arg_name: cdktf.stringToTerraform(struct!.argName),
    value: cdktf.stringToTerraform(struct!.value),
    value_from: oceancdVerificationTemplateArgsValueFromToTerraform(struct!.valueFrom),
  }
}


export function oceancdVerificationTemplateArgsToHclTerraform(struct?: OceancdVerificationTemplateArgs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    arg_name: {
      value: cdktf.stringToHclTerraform(struct!.argName),
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
    value_from: {
      value: oceancdVerificationTemplateArgsValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "list",
      storageClassType: "OceancdVerificationTemplateArgsValueFromList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceancdVerificationTemplateArgsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OceancdVerificationTemplateArgs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._argName !== undefined) {
      hasAnyValues = true;
      internalValueResult.argName = this._argName;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._valueFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFrom = this._valueFrom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceancdVerificationTemplateArgs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._argName = undefined;
      this._value = undefined;
      this._valueFrom.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._argName = value.argName;
      this._value = value.value;
      this._valueFrom.internalValue = value.valueFrom;
    }
  }

  // arg_name - computed: false, optional: false, required: true
  private _argName?: string; 
  public get argName() {
    return this.getStringAttribute('arg_name');
  }
  public set argName(value: string) {
    this._argName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get argNameInput() {
    return this._argName;
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

  // value_from - computed: false, optional: true, required: false
  private _valueFrom = new OceancdVerificationTemplateArgsValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: OceancdVerificationTemplateArgsValueFrom) {
    this._valueFrom.internalValue = value;
  }
  public resetValueFrom() {
    this._valueFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFromInput() {
    return this._valueFrom.internalValue;
  }
}

export class OceancdVerificationTemplateArgsList extends cdktf.ComplexList {
  public internalValue? : OceancdVerificationTemplateArgs[] | cdktf.IResolvable

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
  public get(index: number): OceancdVerificationTemplateArgsOutputReference {
    return new OceancdVerificationTemplateArgsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadog {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_verification_template#datadog_query OceancdVerificationTemplate#datadog_query}
  */
  readonly datadogQuery: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_verification_template#duration OceancdVerificationTemplate#duration}
  */
  readonly duration?: string;
}

export function oceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogToTerraform(struct?: OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference | OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datadog_query: cdktf.stringToTerraform(struct!.datadogQuery),
    duration: cdktf.stringToTerraform(struct!.duration),
  }
}


export function oceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogToHclTerraform(struct?: OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference | OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datadog_query: {
      value: cdktf.stringToHclTerraform(struct!.datadogQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datadogQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.datadogQuery = this._datadogQuery;
    }
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._datadogQuery = undefined;
      this._duration = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._datadogQuery = value.datadogQuery;
      this._duration = value.duration;
    }
  }

  // datadog_query - computed: false, optional: false, required: true
  private _datadogQuery?: string; 
  public get datadogQuery() {
    return this.getStringAttribute('datadog_query');
  }
  public set datadogQuery(value: string) {
    this._datadogQuery = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datadogQueryInput() {
    return this._datadogQuery;
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
export interface OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelic {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_verification_template#new_relic_query OceancdVerificationTemplate#new_relic_query}
  */
  readonly newRelicQuery: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_verification_template#profile OceancdVerificationTemplate#profile}
  */
  readonly profile?: string;
}

export function oceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicToTerraform(struct?: OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference | OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    new_relic_query: cdktf.stringToTerraform(struct!.newRelicQuery),
    profile: cdktf.stringToTerraform(struct!.profile),
  }
}


export function oceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicToHclTerraform(struct?: OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference | OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    new_relic_query: {
      value: cdktf.stringToHclTerraform(struct!.newRelicQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    profile: {
      value: cdktf.stringToHclTerraform(struct!.profile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._newRelicQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.newRelicQuery = this._newRelicQuery;
    }
    if (this._profile !== undefined) {
      hasAnyValues = true;
      internalValueResult.profile = this._profile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._newRelicQuery = undefined;
      this._profile = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._newRelicQuery = value.newRelicQuery;
      this._profile = value.profile;
    }
  }

  // new_relic_query - computed: false, optional: false, required: true
  private _newRelicQuery?: string; 
  public get newRelicQuery() {
    return this.getStringAttribute('new_relic_query');
  }
  public set newRelicQuery(value: string) {
    this._newRelicQuery = value;
  }
  // Temporarily expose input value. Use with caution.
  public get newRelicQueryInput() {
    return this._newRelicQuery;
  }

  // profile - computed: false, optional: true, required: false
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }
}
export interface OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheus {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_verification_template#prometheus_query OceancdVerificationTemplate#prometheus_query}
  */
  readonly prometheusQuery: string;
}

export function oceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusToTerraform(struct?: OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference | OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prometheus_query: cdktf.stringToTerraform(struct!.prometheusQuery),
  }
}


export function oceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusToHclTerraform(struct?: OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference | OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prometheus_query: {
      value: cdktf.stringToHclTerraform(struct!.prometheusQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prometheusQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.prometheusQuery = this._prometheusQuery;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._prometheusQuery = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._prometheusQuery = value.prometheusQuery;
    }
  }

  // prometheus_query - computed: false, optional: false, required: true
  private _prometheusQuery?: string; 
  public get prometheusQuery() {
    return this.getStringAttribute('prometheus_query');
  }
  public set prometheusQuery(value: string) {
    this._prometheusQuery = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prometheusQueryInput() {
    return this._prometheusQuery;
  }
}
export interface OceancdVerificationTemplateMetricsBaselineBaselineProvider {
  /**
  * datadog block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_verification_template#datadog OceancdVerificationTemplate#datadog}
  */
  readonly datadog?: OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadog;
  /**
  * new_relic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_verification_template#new_relic OceancdVerificationTemplate#new_relic}
  */
  readonly newRelic?: OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelic;
  /**
  * prometheus block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_verification_template#prometheus OceancdVerificationTemplate#prometheus}
  */
  readonly prometheus?: OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheus;
}

export function oceancdVerificationTemplateMetricsBaselineBaselineProviderToTerraform(struct?: OceancdVerificationTemplateMetricsBaselineBaselineProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datadog: oceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogToTerraform(struct!.datadog),
    new_relic: oceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicToTerraform(struct!.newRelic),
    prometheus: oceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusToTerraform(struct!.prometheus),
  }
}


export function oceancdVerificationTemplateMetricsBaselineBaselineProviderToHclTerraform(struct?: OceancdVerificationTemplateMetricsBaselineBaselineProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datadog: {
      value: oceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogToHclTerraform(struct!.datadog),
      isBlock: true,
      type: "list",
      storageClassType: "OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogList",
    },
    new_relic: {
      value: oceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicToHclTerraform(struct!.newRelic),
      isBlock: true,
      type: "list",
      storageClassType: "OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicList",
    },
    prometheus: {
      value: oceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusToHclTerraform(struct!.prometheus),
      isBlock: true,
      type: "list",
      storageClassType: "OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OceancdVerificationTemplateMetricsBaselineBaselineProvider | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datadog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.datadog = this._datadog?.internalValue;
    }
    if (this._newRelic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.newRelic = this._newRelic?.internalValue;
    }
    if (this._prometheus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prometheus = this._prometheus?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceancdVerificationTemplateMetricsBaselineBaselineProvider | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datadog.internalValue = undefined;
      this._newRelic.internalValue = undefined;
      this._prometheus.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datadog.internalValue = value.datadog;
      this._newRelic.internalValue = value.newRelic;
      this._prometheus.internalValue = value.prometheus;
    }
  }

  // datadog - computed: false, optional: true, required: false
  private _datadog = new OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference(this, "datadog");
  public get datadog() {
    return this._datadog;
  }
  public putDatadog(value: OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadog) {
    this._datadog.internalValue = value;
  }
  public resetDatadog() {
    this._datadog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datadogInput() {
    return this._datadog.internalValue;
  }

  // new_relic - computed: false, optional: true, required: false
  private _newRelic = new OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference(this, "new_relic");
  public get newRelic() {
    return this._newRelic;
  }
  public putNewRelic(value: OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelic) {
    this._newRelic.internalValue = value;
  }
  public resetNewRelic() {
    this._newRelic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newRelicInput() {
    return this._newRelic.internalValue;
  }

  // prometheus - computed: false, optional: true, required: false
  private _prometheus = new OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference(this, "prometheus");
  public get prometheus() {
    return this._prometheus;
  }
  public putPrometheus(value: OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheus) {
    this._prometheus.internalValue = value;
  }
  public resetPrometheus() {
    this._prometheus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prometheusInput() {
    return this._prometheus.internalValue;
  }
}

export class OceancdVerificationTemplateMetricsBaselineBaselineProviderList extends cdktf.ComplexList {
  public internalValue? : OceancdVerificationTemplateMetricsBaselineBaselineProvider[] | cdktf.IResolvable

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
  public get(index: number): OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference {
    return new OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OceancdVerificationTemplateMetricsBaseline {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_verification_template#max_range OceancdVerificationTemplate#max_range}
  */
  readonly maxRange?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_verification_template#min_range OceancdVerificationTemplate#min_range}
  */
  readonly minRange?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_verification_template#threshold OceancdVerificationTemplate#threshold}
  */
  readonly threshold: string;
  /**
  * baseline_provider block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_verification_template#baseline_provider OceancdVerificationTemplate#baseline_provider}
  */
  readonly baselineProvider: OceancdVerificationTemplateMetricsBaselineBaselineProvider[] | cdktf.IResolvable;
}

export function oceancdVerificationTemplateMetricsBaselineToTerraform(struct?: OceancdVerificationTemplateMetricsBaselineOutputReference | OceancdVerificationTemplateMetricsBaseline): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_range: cdktf.numberToTerraform(struct!.maxRange),
    min_range: cdktf.numberToTerraform(struct!.minRange),
    threshold: cdktf.stringToTerraform(struct!.threshold),
    baseline_provider: cdktf.listMapper(oceancdVerificationTemplateMetricsBaselineBaselineProviderToTerraform, true)(struct!.baselineProvider),
  }
}


export function oceancdVerificationTemplateMetricsBaselineToHclTerraform(struct?: OceancdVerificationTemplateMetricsBaselineOutputReference | OceancdVerificationTemplateMetricsBaseline): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_range: {
      value: cdktf.numberToHclTerraform(struct!.maxRange),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_range: {
      value: cdktf.numberToHclTerraform(struct!.minRange),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold: {
      value: cdktf.stringToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    baseline_provider: {
      value: cdktf.listMapperHcl(oceancdVerificationTemplateMetricsBaselineBaselineProviderToHclTerraform, true)(struct!.baselineProvider),
      isBlock: true,
      type: "list",
      storageClassType: "OceancdVerificationTemplateMetricsBaselineBaselineProviderList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceancdVerificationTemplateMetricsBaselineOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceancdVerificationTemplateMetricsBaseline | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRange = this._maxRange;
    }
    if (this._minRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.minRange = this._minRange;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._baselineProvider?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.baselineProvider = this._baselineProvider?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceancdVerificationTemplateMetricsBaseline | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxRange = undefined;
      this._minRange = undefined;
      this._threshold = undefined;
      this._baselineProvider.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxRange = value.maxRange;
      this._minRange = value.minRange;
      this._threshold = value.threshold;
      this._baselineProvider.internalValue = value.baselineProvider;
    }
  }

  // max_range - computed: false, optional: true, required: false
  private _maxRange?: number; 
  public get maxRange() {
    return this.getNumberAttribute('max_range');
  }
  public set maxRange(value: number) {
    this._maxRange = value;
  }
  public resetMaxRange() {
    this._maxRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRangeInput() {
    return this._maxRange;
  }

  // min_range - computed: false, optional: true, required: false
  private _minRange?: number; 
  public get minRange() {
    return this.getNumberAttribute('min_range');
  }
  public set minRange(value: number) {
    this._minRange = value;
  }
  public resetMinRange() {
    this._minRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minRangeInput() {
    return this._minRange;
  }

  // threshold - computed: false, optional: false, required: true
  private _threshold?: string; 
  public get threshold() {
    return this.getStringAttribute('threshold');
  }
  public set threshold(value: string) {
    this._threshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // baseline_provider - computed: false, optional: false, required: true
  private _baselineProvider = new OceancdVerificationTemplateMetricsBaselineBaselineProviderList(this, "baseline_provider", false);
  public get baselineProvider() {
    return this._baselineProvider;
  }
  public putBaselineProvider(value: OceancdVerificationTemplateMetricsBaselineBaselineProvider[] | cdktf.IResolvable) {
    this._baselineProvider.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baselineProviderInput() {
    return this._baselineProvider.internalValue;
  }
}
export interface OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_verification_template#dimension_name OceancdVerificationTemplate#dimension_name}
  */
  readonly dimensionName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_verification_template#dimension_value OceancdVerificationTemplate#dimension_value}
  */
  readonly dimensionValue: string;
}

export function oceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsToTerraform(struct?: OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimension_name: cdktf.stringToTerraform(struct!.dimensionName),
    dimension_value: cdktf.stringToTerraform(struct!.dimensionValue),
  }
}


export function oceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsToHclTerraform(struct?: OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimension_name: {
      value: cdktf.stringToHclTerraform(struct!.dimensionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dimension_value: {
      value: cdktf.stringToHclTerraform(struct!.dimensionValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimensionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensionName = this._dimensionName;
    }
    if (this._dimensionValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensionValue = this._dimensionValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dimensionName = undefined;
      this._dimensionValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dimensionName = value.dimensionName;
      this._dimensionValue = value.dimensionValue;
    }
  }

  // dimension_name - computed: false, optional: false, required: true
  private _dimensionName?: string; 
  public get dimensionName() {
    return this.getStringAttribute('dimension_name');
  }
  public set dimensionName(value: string) {
    this._dimensionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionNameInput() {
    return this._dimensionName;
  }

  // dimension_value - computed: false, optional: false, required: true
  private _dimensionValue?: string; 
  public get dimensionValue() {
    return this.getStringAttribute('dimension_value');
  }
  public set dimensionValue(value: string) {
    this._dimensionValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionValueInput() {
    return this._dimensionValue;
  }
}

export class OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList extends cdktf.ComplexList {
  public internalValue? : OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensions[] | cdktf.IResolvable

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
  public get(index: number): OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference {
    return new OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetric {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_verification_template#metric_name OceancdVerificationTemplate#metric_name}
  */
  readonly metricName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_verification_template#namespace OceancdVerificationTemplate#namespace}
  */
  readonly namespace?: string;
  /**
  * dimensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_verification_template#dimensions OceancdVerificationTemplate#dimensions}
  */
  readonly dimensions?: OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensions[] | cdktf.IResolvable;
}

export function oceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricToTerraform(struct?: OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference | OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    dimensions: cdktf.listMapper(oceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsToTerraform, true)(struct!.dimensions),
  }
}


export function oceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricToHclTerraform(struct?: OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference | OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric_name: {
      value: cdktf.stringToHclTerraform(struct!.metricName),
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
    dimensions: {
      value: cdktf.listMapperHcl(oceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsToHclTerraform, true)(struct!.dimensions),
      isBlock: true,
      type: "set",
      storageClassType: "OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetric | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._dimensions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensions = this._dimensions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetric | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricName = undefined;
      this._namespace = undefined;
      this._dimensions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricName = value.metricName;
      this._namespace = value.namespace;
      this._dimensions.internalValue = value.dimensions;
    }
  }

  // metric_name - computed: false, optional: false, required: true
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
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

  // dimensions - computed: false, optional: true, required: false
  private _dimensions = new OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList(this, "dimensions", true);
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensions[] | cdktf.IResolvable) {
    this._dimensions.internalValue = value;
  }
  public resetDimensions() {
    this._dimensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions.internalValue;
  }
}
export interface OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_verification_template#metric_period OceancdVerificationTemplate#metric_period}
  */
  readonly metricPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_verification_template#stat OceancdVerificationTemplate#stat}
  */
  readonly stat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_verification_template#unit OceancdVerificationTemplate#unit}
  */
  readonly unit?: string;
  /**
  * metric block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_verification_template#metric OceancdVerificationTemplate#metric}
  */
  readonly metric?: OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetric;
}

export function oceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatToTerraform(struct?: OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference | OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_period: cdktf.numberToTerraform(struct!.metricPeriod),
    stat: cdktf.stringToTerraform(struct!.stat),
    unit: cdktf.stringToTerraform(struct!.unit),
    metric: oceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricToTerraform(struct!.metric),
  }
}


export function oceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatToHclTerraform(struct?: OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference | OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric_period: {
      value: cdktf.numberToHclTerraform(struct!.metricPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stat: {
      value: cdktf.stringToHclTerraform(struct!.stat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric: {
      value: oceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricToHclTerraform(struct!.metric),
      isBlock: true,
      type: "list",
      storageClassType: "OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricPeriod = this._metricPeriod;
    }
    if (this._stat !== undefined) {
      hasAnyValues = true;
      internalValueResult.stat = this._stat;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._metric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricPeriod = undefined;
      this._stat = undefined;
      this._unit = undefined;
      this._metric.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricPeriod = value.metricPeriod;
      this._stat = value.stat;
      this._unit = value.unit;
      this._metric.internalValue = value.metric;
    }
  }

  // metric_period - computed: false, optional: true, required: false
  private _metricPeriod?: number; 
  public get metricPeriod() {
    return this.getNumberAttribute('metric_period');
  }
  public set metricPeriod(value: number) {
    this._metricPeriod = value;
  }
  public resetMetricPeriod() {
    this._metricPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricPeriodInput() {
    return this._metricPeriod;
  }

  // stat - computed: false, optional: true, required: false
  private _stat?: string; 
  public get stat() {
    return this.getStringAttribute('stat');
  }
  public set stat(value: string) {
    this._stat = value;
  }
  public resetStat() {
    this._stat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statInput() {
    return this._stat;
  }

  // unit - computed: false, optional: true, required: false
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

  // metric - computed: false, optional: true, required: false
  private _metric = new OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference(this, "metric");
  public get metric() {
    return this._metric;
  }
  public putMetric(value: OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetric) {
    this._metric.internalValue = value;
  }
  public resetMetric() {
    this._metric.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric.internalValue;
  }
}
export interface OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_verification_template#expression OceancdVerificationTemplate#expression}
  */
  readonly expression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_verification_template#id OceancdVerificationTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_verification_template#label OceancdVerificationTemplate#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_verification_template#period OceancdVerificationTemplate#period}
  */
  readonly period?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_verification_template#return_data OceancdVerificationTemplate#return_data}
  */
  readonly returnData?: boolean | cdktf.IResolvable;
  /**
  * metric_stat block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_verification_template#metric_stat OceancdVerificationTemplate#metric_stat}
  */
  readonly metricStat?: OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat;
}

export function oceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesToTerraform(struct?: OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
    id: cdktf.stringToTerraform(struct!.id),
    label: cdktf.stringToTerraform(struct!.label),
    period: cdktf.numberToTerraform(struct!.period),
    return_data: cdktf.booleanToTerraform(struct!.returnData),
    metric_stat: oceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatToTerraform(struct!.metricStat),
  }
}


export function oceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesToHclTerraform(struct?: OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
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
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    period: {
      value: cdktf.numberToHclTerraform(struct!.period),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    return_data: {
      value: cdktf.booleanToHclTerraform(struct!.returnData),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    metric_stat: {
      value: oceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatToHclTerraform(struct!.metricStat),
      isBlock: true,
      type: "list",
      storageClassType: "OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    if (this._returnData !== undefined) {
      hasAnyValues = true;
      internalValueResult.returnData = this._returnData;
    }
    if (this._metricStat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricStat = this._metricStat?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expression = undefined;
      this._id = undefined;
      this._label = undefined;
      this._period = undefined;
      this._returnData = undefined;
      this._metricStat.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expression = value.expression;
      this._id = value.id;
      this._label = value.label;
      this._period = value.period;
      this._returnData = value.returnData;
      this._metricStat.internalValue = value.metricStat;
    }
  }

  // expression - computed: false, optional: true, required: false
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  public resetExpression() {
    this._expression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
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

  // return_data - computed: false, optional: true, required: false
  private _returnData?: boolean | cdktf.IResolvable; 
  public get returnData() {
    return this.getBooleanAttribute('return_data');
  }
  public set returnData(value: boolean | cdktf.IResolvable) {
    this._returnData = value;
  }
  public resetReturnData() {
    this._returnData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnDataInput() {
    return this._returnData;
  }

  // metric_stat - computed: false, optional: true, required: false
  private _metricStat = new OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference(this, "metric_stat");
  public get metricStat() {
    return this._metricStat;
  }
  public putMetricStat(value: OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat) {
    this._metricStat.internalValue = value;
  }
  public resetMetricStat() {
    this._metricStat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricStatInput() {
    return this._metricStat.internalValue;
  }
}

export class OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList extends cdktf.ComplexList {
  public internalValue? : OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries[] | cdktf.IResolvable

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
  public get(index: number): OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference {
    return new OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OceancdVerificationTemplateMetricsProviderCloudWatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_verification_template#duration OceancdVerificationTemplate#duration}
  */
  readonly duration?: string;
  /**
  * metric_data_queries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_verification_template#metric_data_queries OceancdVerificationTemplate#metric_data_queries}
  */
  readonly metricDataQueries: OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries[] | cdktf.IResolvable;
}

export function oceancdVerificationTemplateMetricsProviderCloudWatchToTerraform(struct?: OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference | OceancdVerificationTemplateMetricsProviderCloudWatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
    metric_data_queries: cdktf.listMapper(oceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesToTerraform, true)(struct!.metricDataQueries),
  }
}


export function oceancdVerificationTemplateMetricsProviderCloudWatchToHclTerraform(struct?: OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference | OceancdVerificationTemplateMetricsProviderCloudWatch): any {
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
    metric_data_queries: {
      value: cdktf.listMapperHcl(oceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesToHclTerraform, true)(struct!.metricDataQueries),
      isBlock: true,
      type: "set",
      storageClassType: "OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceancdVerificationTemplateMetricsProviderCloudWatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._metricDataQueries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricDataQueries = this._metricDataQueries?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceancdVerificationTemplateMetricsProviderCloudWatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
      this._metricDataQueries.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
      this._metricDataQueries.internalValue = value.metricDataQueries;
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

  // metric_data_queries - computed: false, optional: false, required: true
  private _metricDataQueries = new OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList(this, "metric_data_queries", true);
  public get metricDataQueries() {
    return this._metricDataQueries;
  }
  public putMetricDataQueries(value: OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries[] | cdktf.IResolvable) {
    this._metricDataQueries.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricDataQueriesInput() {
    return this._metricDataQueries.internalValue;
  }
}
export interface OceancdVerificationTemplateMetricsProviderDatadog {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_verification_template#datadog_query OceancdVerificationTemplate#datadog_query}
  */
  readonly datadogQuery?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_verification_template#duration OceancdVerificationTemplate#duration}
  */
  readonly duration?: string;
}

export function oceancdVerificationTemplateMetricsProviderDatadogToTerraform(struct?: OceancdVerificationTemplateMetricsProviderDatadogOutputReference | OceancdVerificationTemplateMetricsProviderDatadog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datadog_query: cdktf.stringToTerraform(struct!.datadogQuery),
    duration: cdktf.stringToTerraform(struct!.duration),
  }
}


export function oceancdVerificationTemplateMetricsProviderDatadogToHclTerraform(struct?: OceancdVerificationTemplateMetricsProviderDatadogOutputReference | OceancdVerificationTemplateMetricsProviderDatadog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datadog_query: {
      value: cdktf.stringToHclTerraform(struct!.datadogQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class OceancdVerificationTemplateMetricsProviderDatadogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceancdVerificationTemplateMetricsProviderDatadog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datadogQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.datadogQuery = this._datadogQuery;
    }
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceancdVerificationTemplateMetricsProviderDatadog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._datadogQuery = undefined;
      this._duration = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._datadogQuery = value.datadogQuery;
      this._duration = value.duration;
    }
  }

  // datadog_query - computed: false, optional: true, required: false
  private _datadogQuery?: string; 
  public get datadogQuery() {
    return this.getStringAttribute('datadog_query');
  }
  public set datadogQuery(value: string) {
    this._datadogQuery = value;
  }
  public resetDatadogQuery() {
    this._datadogQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datadogQueryInput() {
    return this._datadogQuery;
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
export interface OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_verification_template#parameter_key OceancdVerificationTemplate#parameter_key}
  */
  readonly parameterKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_verification_template#parameter_value OceancdVerificationTemplate#parameter_value}
  */
  readonly parameterValue: string;
}

export function oceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersToTerraform(struct?: OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference | OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameter_key: cdktf.stringToTerraform(struct!.parameterKey),
    parameter_value: cdktf.stringToTerraform(struct!.parameterValue),
  }
}


export function oceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersToHclTerraform(struct?: OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference | OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parameter_key: {
      value: cdktf.stringToHclTerraform(struct!.parameterKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameter_value: {
      value: cdktf.stringToHclTerraform(struct!.parameterValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameterKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterKey = this._parameterKey;
    }
    if (this._parameterValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterValue = this._parameterValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._parameterKey = undefined;
      this._parameterValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._parameterKey = value.parameterKey;
      this._parameterValue = value.parameterValue;
    }
  }

  // parameter_key - computed: false, optional: false, required: true
  private _parameterKey?: string; 
  public get parameterKey() {
    return this.getStringAttribute('parameter_key');
  }
  public set parameterKey(value: string) {
    this._parameterKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterKeyInput() {
    return this._parameterKey;
  }

  // parameter_value - computed: false, optional: false, required: true
  private _parameterValue?: string; 
  public get parameterValue() {
    return this.getStringAttribute('parameter_value');
  }
  public set parameterValue(value: string) {
    this._parameterValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterValueInput() {
    return this._parameterValue;
  }
}
export interface OceancdVerificationTemplateMetricsProviderJenkins {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_verification_template#jenkins_interval OceancdVerificationTemplate#jenkins_interval}
  */
  readonly jenkinsInterval: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_verification_template#pipeline_name OceancdVerificationTemplate#pipeline_name}
  */
  readonly pipelineName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_verification_template#timeout OceancdVerificationTemplate#timeout}
  */
  readonly timeout: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_verification_template#tls_verification OceancdVerificationTemplate#tls_verification}
  */
  readonly tlsVerification?: boolean | cdktf.IResolvable;
  /**
  * jenkins_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_verification_template#jenkins_parameters OceancdVerificationTemplate#jenkins_parameters}
  */
  readonly jenkinsParameters?: OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParameters;
}

export function oceancdVerificationTemplateMetricsProviderJenkinsToTerraform(struct?: OceancdVerificationTemplateMetricsProviderJenkinsOutputReference | OceancdVerificationTemplateMetricsProviderJenkins): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jenkins_interval: cdktf.stringToTerraform(struct!.jenkinsInterval),
    pipeline_name: cdktf.stringToTerraform(struct!.pipelineName),
    timeout: cdktf.stringToTerraform(struct!.timeout),
    tls_verification: cdktf.booleanToTerraform(struct!.tlsVerification),
    jenkins_parameters: oceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersToTerraform(struct!.jenkinsParameters),
  }
}


export function oceancdVerificationTemplateMetricsProviderJenkinsToHclTerraform(struct?: OceancdVerificationTemplateMetricsProviderJenkinsOutputReference | OceancdVerificationTemplateMetricsProviderJenkins): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    jenkins_interval: {
      value: cdktf.stringToHclTerraform(struct!.jenkinsInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pipeline_name: {
      value: cdktf.stringToHclTerraform(struct!.pipelineName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_verification: {
      value: cdktf.booleanToHclTerraform(struct!.tlsVerification),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    jenkins_parameters: {
      value: oceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersToHclTerraform(struct!.jenkinsParameters),
      isBlock: true,
      type: "set",
      storageClassType: "OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceancdVerificationTemplateMetricsProviderJenkinsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceancdVerificationTemplateMetricsProviderJenkins | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jenkinsInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.jenkinsInterval = this._jenkinsInterval;
    }
    if (this._pipelineName !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipelineName = this._pipelineName;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._tlsVerification !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsVerification = this._tlsVerification;
    }
    if (this._jenkinsParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jenkinsParameters = this._jenkinsParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceancdVerificationTemplateMetricsProviderJenkins | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._jenkinsInterval = undefined;
      this._pipelineName = undefined;
      this._timeout = undefined;
      this._tlsVerification = undefined;
      this._jenkinsParameters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._jenkinsInterval = value.jenkinsInterval;
      this._pipelineName = value.pipelineName;
      this._timeout = value.timeout;
      this._tlsVerification = value.tlsVerification;
      this._jenkinsParameters.internalValue = value.jenkinsParameters;
    }
  }

  // jenkins_interval - computed: false, optional: false, required: true
  private _jenkinsInterval?: string; 
  public get jenkinsInterval() {
    return this.getStringAttribute('jenkins_interval');
  }
  public set jenkinsInterval(value: string) {
    this._jenkinsInterval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jenkinsIntervalInput() {
    return this._jenkinsInterval;
  }

  // pipeline_name - computed: false, optional: false, required: true
  private _pipelineName?: string; 
  public get pipelineName() {
    return this.getStringAttribute('pipeline_name');
  }
  public set pipelineName(value: string) {
    this._pipelineName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineNameInput() {
    return this._pipelineName;
  }

  // timeout - computed: false, optional: false, required: true
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // tls_verification - computed: false, optional: true, required: false
  private _tlsVerification?: boolean | cdktf.IResolvable; 
  public get tlsVerification() {
    return this.getBooleanAttribute('tls_verification');
  }
  public set tlsVerification(value: boolean | cdktf.IResolvable) {
    this._tlsVerification = value;
  }
  public resetTlsVerification() {
    this._tlsVerification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsVerificationInput() {
    return this._tlsVerification;
  }

  // jenkins_parameters - computed: false, optional: true, required: false
  private _jenkinsParameters = new OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference(this, "jenkins_parameters");
  public get jenkinsParameters() {
    return this._jenkinsParameters;
  }
  public putJenkinsParameters(value: OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParameters) {
    this._jenkinsParameters.internalValue = value;
  }
  public resetJenkinsParameters() {
    this._jenkinsParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jenkinsParametersInput() {
    return this._jenkinsParameters.internalValue;
  }
}
export interface OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_verification_template#command OceancdVerificationTemplate#command}
  */
  readonly command: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_verification_template#container_name OceancdVerificationTemplate#container_name}
  */
  readonly containerName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_verification_template#image OceancdVerificationTemplate#image}
  */
  readonly image: string;
}

export function oceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersToTerraform(struct?: OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
    container_name: cdktf.stringToTerraform(struct!.containerName),
    image: cdktf.stringToTerraform(struct!.image),
  }
}


export function oceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersToHclTerraform(struct?: OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    command: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    container_name: {
      value: cdktf.stringToHclTerraform(struct!.containerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._containerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerName = this._containerName;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._command = undefined;
      this._containerName = undefined;
      this._image = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._command = value.command;
      this._containerName = value.containerName;
      this._image = value.image;
    }
  }

  // command - computed: false, optional: false, required: true
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // container_name - computed: false, optional: false, required: true
  private _containerName?: string; 
  public get containerName() {
    return this.getStringAttribute('container_name');
  }
  public set containerName(value: string) {
    this._containerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNameInput() {
    return this._containerName;
  }

  // image - computed: false, optional: false, required: true
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }
}

export class OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList extends cdktf.ComplexList {
  public internalValue? : OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainers[] | cdktf.IResolvable

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
  public get(index: number): OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference {
    return new OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_verification_template#restart_policy OceancdVerificationTemplate#restart_policy}
  */
  readonly restartPolicy: string;
  /**
  * containers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_verification_template#containers OceancdVerificationTemplate#containers}
  */
  readonly containers: OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainers[] | cdktf.IResolvable;
}

export function oceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecToTerraform(struct?: OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    restart_policy: cdktf.stringToTerraform(struct!.restartPolicy),
    containers: cdktf.listMapper(oceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersToTerraform, true)(struct!.containers),
  }
}


export function oceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecToHclTerraform(struct?: OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    restart_policy: {
      value: cdktf.stringToHclTerraform(struct!.restartPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    containers: {
      value: cdktf.listMapperHcl(oceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersToHclTerraform, true)(struct!.containers),
      isBlock: true,
      type: "set",
      storageClassType: "OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._restartPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.restartPolicy = this._restartPolicy;
    }
    if (this._containers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containers = this._containers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._restartPolicy = undefined;
      this._containers.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._restartPolicy = value.restartPolicy;
      this._containers.internalValue = value.containers;
    }
  }

  // restart_policy - computed: false, optional: false, required: true
  private _restartPolicy?: string; 
  public get restartPolicy() {
    return this.getStringAttribute('restart_policy');
  }
  public set restartPolicy(value: string) {
    this._restartPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get restartPolicyInput() {
    return this._restartPolicy;
  }

  // containers - computed: false, optional: false, required: true
  private _containers = new OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList(this, "containers", true);
  public get containers() {
    return this._containers;
  }
  public putContainers(value: OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainers[] | cdktf.IResolvable) {
    this._containers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containersInput() {
    return this._containers.internalValue;
  }
}

export class OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList extends cdktf.ComplexList {
  public internalValue? : OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpec[] | cdktf.IResolvable

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
  public get(index: number): OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference {
    return new OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OceancdVerificationTemplateMetricsProviderJobSpecJobTemplate {
  /**
  * template_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_verification_template#template_spec OceancdVerificationTemplate#template_spec}
  */
  readonly templateSpec: OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpec[] | cdktf.IResolvable;
}

export function oceancdVerificationTemplateMetricsProviderJobSpecJobTemplateToTerraform(struct?: OceancdVerificationTemplateMetricsProviderJobSpecJobTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    template_spec: cdktf.listMapper(oceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecToTerraform, true)(struct!.templateSpec),
  }
}


export function oceancdVerificationTemplateMetricsProviderJobSpecJobTemplateToHclTerraform(struct?: OceancdVerificationTemplateMetricsProviderJobSpecJobTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    template_spec: {
      value: cdktf.listMapperHcl(oceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecToHclTerraform, true)(struct!.templateSpec),
      isBlock: true,
      type: "list",
      storageClassType: "OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OceancdVerificationTemplateMetricsProviderJobSpecJobTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._templateSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateSpec = this._templateSpec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceancdVerificationTemplateMetricsProviderJobSpecJobTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._templateSpec.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._templateSpec.internalValue = value.templateSpec;
    }
  }

  // template_spec - computed: false, optional: false, required: true
  private _templateSpec = new OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList(this, "template_spec", false);
  public get templateSpec() {
    return this._templateSpec;
  }
  public putTemplateSpec(value: OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpec[] | cdktf.IResolvable) {
    this._templateSpec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateSpecInput() {
    return this._templateSpec.internalValue;
  }
}

export class OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList extends cdktf.ComplexList {
  public internalValue? : OceancdVerificationTemplateMetricsProviderJobSpecJobTemplate[] | cdktf.IResolvable

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
  public get(index: number): OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference {
    return new OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OceancdVerificationTemplateMetricsProviderJobSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_verification_template#backoff_limit OceancdVerificationTemplate#backoff_limit}
  */
  readonly backoffLimit?: number;
  /**
  * job_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_verification_template#job_template OceancdVerificationTemplate#job_template}
  */
  readonly jobTemplate: OceancdVerificationTemplateMetricsProviderJobSpecJobTemplate[] | cdktf.IResolvable;
}

export function oceancdVerificationTemplateMetricsProviderJobSpecToTerraform(struct?: OceancdVerificationTemplateMetricsProviderJobSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backoff_limit: cdktf.numberToTerraform(struct!.backoffLimit),
    job_template: cdktf.listMapper(oceancdVerificationTemplateMetricsProviderJobSpecJobTemplateToTerraform, true)(struct!.jobTemplate),
  }
}


export function oceancdVerificationTemplateMetricsProviderJobSpecToHclTerraform(struct?: OceancdVerificationTemplateMetricsProviderJobSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backoff_limit: {
      value: cdktf.numberToHclTerraform(struct!.backoffLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    job_template: {
      value: cdktf.listMapperHcl(oceancdVerificationTemplateMetricsProviderJobSpecJobTemplateToHclTerraform, true)(struct!.jobTemplate),
      isBlock: true,
      type: "list",
      storageClassType: "OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceancdVerificationTemplateMetricsProviderJobSpecOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OceancdVerificationTemplateMetricsProviderJobSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backoffLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.backoffLimit = this._backoffLimit;
    }
    if (this._jobTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobTemplate = this._jobTemplate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceancdVerificationTemplateMetricsProviderJobSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backoffLimit = undefined;
      this._jobTemplate.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backoffLimit = value.backoffLimit;
      this._jobTemplate.internalValue = value.jobTemplate;
    }
  }

  // backoff_limit - computed: false, optional: true, required: false
  private _backoffLimit?: number; 
  public get backoffLimit() {
    return this.getNumberAttribute('backoff_limit');
  }
  public set backoffLimit(value: number) {
    this._backoffLimit = value;
  }
  public resetBackoffLimit() {
    this._backoffLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backoffLimitInput() {
    return this._backoffLimit;
  }

  // job_template - computed: false, optional: false, required: true
  private _jobTemplate = new OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList(this, "job_template", false);
  public get jobTemplate() {
    return this._jobTemplate;
  }
  public putJobTemplate(value: OceancdVerificationTemplateMetricsProviderJobSpecJobTemplate[] | cdktf.IResolvable) {
    this._jobTemplate.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobTemplateInput() {
    return this._jobTemplate.internalValue;
  }
}

export class OceancdVerificationTemplateMetricsProviderJobSpecList extends cdktf.ComplexList {
  public internalValue? : OceancdVerificationTemplateMetricsProviderJobSpec[] | cdktf.IResolvable

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
  public get(index: number): OceancdVerificationTemplateMetricsProviderJobSpecOutputReference {
    return new OceancdVerificationTemplateMetricsProviderJobSpecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OceancdVerificationTemplateMetricsProviderJob {
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_verification_template#spec OceancdVerificationTemplate#spec}
  */
  readonly spec: OceancdVerificationTemplateMetricsProviderJobSpec[] | cdktf.IResolvable;
}

export function oceancdVerificationTemplateMetricsProviderJobToTerraform(struct?: OceancdVerificationTemplateMetricsProviderJobOutputReference | OceancdVerificationTemplateMetricsProviderJob): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    spec: cdktf.listMapper(oceancdVerificationTemplateMetricsProviderJobSpecToTerraform, true)(struct!.spec),
  }
}


export function oceancdVerificationTemplateMetricsProviderJobToHclTerraform(struct?: OceancdVerificationTemplateMetricsProviderJobOutputReference | OceancdVerificationTemplateMetricsProviderJob): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    spec: {
      value: cdktf.listMapperHcl(oceancdVerificationTemplateMetricsProviderJobSpecToHclTerraform, true)(struct!.spec),
      isBlock: true,
      type: "list",
      storageClassType: "OceancdVerificationTemplateMetricsProviderJobSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceancdVerificationTemplateMetricsProviderJobOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceancdVerificationTemplateMetricsProviderJob | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._spec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceancdVerificationTemplateMetricsProviderJob | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._spec.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._spec.internalValue = value.spec;
    }
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new OceancdVerificationTemplateMetricsProviderJobSpecList(this, "spec", false);
  public get spec() {
    return this._spec;
  }
  public putSpec(value: OceancdVerificationTemplateMetricsProviderJobSpec[] | cdktf.IResolvable) {
    this._spec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }
}
export interface OceancdVerificationTemplateMetricsProviderNewRelic {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_verification_template#new_relic_query OceancdVerificationTemplate#new_relic_query}
  */
  readonly newRelicQuery: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_verification_template#profile OceancdVerificationTemplate#profile}
  */
  readonly profile?: string;
}

export function oceancdVerificationTemplateMetricsProviderNewRelicToTerraform(struct?: OceancdVerificationTemplateMetricsProviderNewRelicOutputReference | OceancdVerificationTemplateMetricsProviderNewRelic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    new_relic_query: cdktf.stringToTerraform(struct!.newRelicQuery),
    profile: cdktf.stringToTerraform(struct!.profile),
  }
}


export function oceancdVerificationTemplateMetricsProviderNewRelicToHclTerraform(struct?: OceancdVerificationTemplateMetricsProviderNewRelicOutputReference | OceancdVerificationTemplateMetricsProviderNewRelic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    new_relic_query: {
      value: cdktf.stringToHclTerraform(struct!.newRelicQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    profile: {
      value: cdktf.stringToHclTerraform(struct!.profile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceancdVerificationTemplateMetricsProviderNewRelicOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceancdVerificationTemplateMetricsProviderNewRelic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._newRelicQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.newRelicQuery = this._newRelicQuery;
    }
    if (this._profile !== undefined) {
      hasAnyValues = true;
      internalValueResult.profile = this._profile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceancdVerificationTemplateMetricsProviderNewRelic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._newRelicQuery = undefined;
      this._profile = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._newRelicQuery = value.newRelicQuery;
      this._profile = value.profile;
    }
  }

  // new_relic_query - computed: false, optional: false, required: true
  private _newRelicQuery?: string; 
  public get newRelicQuery() {
    return this.getStringAttribute('new_relic_query');
  }
  public set newRelicQuery(value: string) {
    this._newRelicQuery = value;
  }
  // Temporarily expose input value. Use with caution.
  public get newRelicQueryInput() {
    return this._newRelicQuery;
  }

  // profile - computed: false, optional: true, required: false
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }
}
export interface OceancdVerificationTemplateMetricsProviderPrometheus {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_verification_template#prometheus_query OceancdVerificationTemplate#prometheus_query}
  */
  readonly prometheusQuery: string;
}

export function oceancdVerificationTemplateMetricsProviderPrometheusToTerraform(struct?: OceancdVerificationTemplateMetricsProviderPrometheusOutputReference | OceancdVerificationTemplateMetricsProviderPrometheus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prometheus_query: cdktf.stringToTerraform(struct!.prometheusQuery),
  }
}


export function oceancdVerificationTemplateMetricsProviderPrometheusToHclTerraform(struct?: OceancdVerificationTemplateMetricsProviderPrometheusOutputReference | OceancdVerificationTemplateMetricsProviderPrometheus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prometheus_query: {
      value: cdktf.stringToHclTerraform(struct!.prometheusQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceancdVerificationTemplateMetricsProviderPrometheusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceancdVerificationTemplateMetricsProviderPrometheus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prometheusQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.prometheusQuery = this._prometheusQuery;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceancdVerificationTemplateMetricsProviderPrometheus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._prometheusQuery = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._prometheusQuery = value.prometheusQuery;
    }
  }

  // prometheus_query - computed: false, optional: false, required: true
  private _prometheusQuery?: string; 
  public get prometheusQuery() {
    return this.getStringAttribute('prometheus_query');
  }
  public set prometheusQuery(value: string) {
    this._prometheusQuery = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prometheusQueryInput() {
    return this._prometheusQuery;
  }
}
export interface OceancdVerificationTemplateMetricsProviderWebWebHeader {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_verification_template#web_header_key OceancdVerificationTemplate#web_header_key}
  */
  readonly webHeaderKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_verification_template#web_header_value OceancdVerificationTemplate#web_header_value}
  */
  readonly webHeaderValue: string;
}

export function oceancdVerificationTemplateMetricsProviderWebWebHeaderToTerraform(struct?: OceancdVerificationTemplateMetricsProviderWebWebHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    web_header_key: cdktf.stringToTerraform(struct!.webHeaderKey),
    web_header_value: cdktf.stringToTerraform(struct!.webHeaderValue),
  }
}


export function oceancdVerificationTemplateMetricsProviderWebWebHeaderToHclTerraform(struct?: OceancdVerificationTemplateMetricsProviderWebWebHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    web_header_key: {
      value: cdktf.stringToHclTerraform(struct!.webHeaderKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    web_header_value: {
      value: cdktf.stringToHclTerraform(struct!.webHeaderValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OceancdVerificationTemplateMetricsProviderWebWebHeader | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._webHeaderKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.webHeaderKey = this._webHeaderKey;
    }
    if (this._webHeaderValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.webHeaderValue = this._webHeaderValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceancdVerificationTemplateMetricsProviderWebWebHeader | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._webHeaderKey = undefined;
      this._webHeaderValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._webHeaderKey = value.webHeaderKey;
      this._webHeaderValue = value.webHeaderValue;
    }
  }

  // web_header_key - computed: false, optional: false, required: true
  private _webHeaderKey?: string; 
  public get webHeaderKey() {
    return this.getStringAttribute('web_header_key');
  }
  public set webHeaderKey(value: string) {
    this._webHeaderKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get webHeaderKeyInput() {
    return this._webHeaderKey;
  }

  // web_header_value - computed: false, optional: false, required: true
  private _webHeaderValue?: string; 
  public get webHeaderValue() {
    return this.getStringAttribute('web_header_value');
  }
  public set webHeaderValue(value: string) {
    this._webHeaderValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get webHeaderValueInput() {
    return this._webHeaderValue;
  }
}

export class OceancdVerificationTemplateMetricsProviderWebWebHeaderList extends cdktf.ComplexList {
  public internalValue? : OceancdVerificationTemplateMetricsProviderWebWebHeader[] | cdktf.IResolvable

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
  public get(index: number): OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference {
    return new OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OceancdVerificationTemplateMetricsProviderWeb {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_verification_template#body OceancdVerificationTemplate#body}
  */
  readonly body?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_verification_template#insecure OceancdVerificationTemplate#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_verification_template#json_path OceancdVerificationTemplate#json_path}
  */
  readonly jsonPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_verification_template#method OceancdVerificationTemplate#method}
  */
  readonly method?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_verification_template#timeout_seconds OceancdVerificationTemplate#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_verification_template#url OceancdVerificationTemplate#url}
  */
  readonly url: string;
  /**
  * web_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_verification_template#web_header OceancdVerificationTemplate#web_header}
  */
  readonly webHeader?: OceancdVerificationTemplateMetricsProviderWebWebHeader[] | cdktf.IResolvable;
}

export function oceancdVerificationTemplateMetricsProviderWebToTerraform(struct?: OceancdVerificationTemplateMetricsProviderWebOutputReference | OceancdVerificationTemplateMetricsProviderWeb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: cdktf.stringToTerraform(struct!.body),
    insecure: cdktf.booleanToTerraform(struct!.insecure),
    json_path: cdktf.stringToTerraform(struct!.jsonPath),
    method: cdktf.stringToTerraform(struct!.method),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    url: cdktf.stringToTerraform(struct!.url),
    web_header: cdktf.listMapper(oceancdVerificationTemplateMetricsProviderWebWebHeaderToTerraform, true)(struct!.webHeader),
  }
}


export function oceancdVerificationTemplateMetricsProviderWebToHclTerraform(struct?: OceancdVerificationTemplateMetricsProviderWebOutputReference | OceancdVerificationTemplateMetricsProviderWeb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body: {
      value: cdktf.stringToHclTerraform(struct!.body),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    insecure: {
      value: cdktf.booleanToHclTerraform(struct!.insecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    json_path: {
      value: cdktf.stringToHclTerraform(struct!.jsonPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    web_header: {
      value: cdktf.listMapperHcl(oceancdVerificationTemplateMetricsProviderWebWebHeaderToHclTerraform, true)(struct!.webHeader),
      isBlock: true,
      type: "set",
      storageClassType: "OceancdVerificationTemplateMetricsProviderWebWebHeaderList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceancdVerificationTemplateMetricsProviderWebOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceancdVerificationTemplateMetricsProviderWeb | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._insecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecure = this._insecure;
    }
    if (this._jsonPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonPath = this._jsonPath;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._webHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.webHeader = this._webHeader?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceancdVerificationTemplateMetricsProviderWeb | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._body = undefined;
      this._insecure = undefined;
      this._jsonPath = undefined;
      this._method = undefined;
      this._timeoutSeconds = undefined;
      this._url = undefined;
      this._webHeader.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._body = value.body;
      this._insecure = value.insecure;
      this._jsonPath = value.jsonPath;
      this._method = value.method;
      this._timeoutSeconds = value.timeoutSeconds;
      this._url = value.url;
      this._webHeader.internalValue = value.webHeader;
    }
  }

  // body - computed: false, optional: true, required: false
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // insecure - computed: false, optional: true, required: false
  private _insecure?: boolean | cdktf.IResolvable; 
  public get insecure() {
    return this.getBooleanAttribute('insecure');
  }
  public set insecure(value: boolean | cdktf.IResolvable) {
    this._insecure = value;
  }
  public resetInsecure() {
    this._insecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureInput() {
    return this._insecure;
  }

  // json_path - computed: false, optional: true, required: false
  private _jsonPath?: string; 
  public get jsonPath() {
    return this.getStringAttribute('json_path');
  }
  public set jsonPath(value: string) {
    this._jsonPath = value;
  }
  public resetJsonPath() {
    this._jsonPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonPathInput() {
    return this._jsonPath;
  }

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // timeout_seconds - computed: false, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
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

  // web_header - computed: false, optional: true, required: false
  private _webHeader = new OceancdVerificationTemplateMetricsProviderWebWebHeaderList(this, "web_header", true);
  public get webHeader() {
    return this._webHeader;
  }
  public putWebHeader(value: OceancdVerificationTemplateMetricsProviderWebWebHeader[] | cdktf.IResolvable) {
    this._webHeader.internalValue = value;
  }
  public resetWebHeader() {
    this._webHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webHeaderInput() {
    return this._webHeader.internalValue;
  }
}
export interface OceancdVerificationTemplateMetricsProvider {
  /**
  * cloud_watch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_verification_template#cloud_watch OceancdVerificationTemplate#cloud_watch}
  */
  readonly cloudWatch?: OceancdVerificationTemplateMetricsProviderCloudWatch;
  /**
  * datadog block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_verification_template#datadog OceancdVerificationTemplate#datadog}
  */
  readonly datadog?: OceancdVerificationTemplateMetricsProviderDatadog;
  /**
  * jenkins block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_verification_template#jenkins OceancdVerificationTemplate#jenkins}
  */
  readonly jenkins?: OceancdVerificationTemplateMetricsProviderJenkins;
  /**
  * job block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_verification_template#job OceancdVerificationTemplate#job}
  */
  readonly job?: OceancdVerificationTemplateMetricsProviderJob;
  /**
  * new_relic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_verification_template#new_relic OceancdVerificationTemplate#new_relic}
  */
  readonly newRelic?: OceancdVerificationTemplateMetricsProviderNewRelic;
  /**
  * prometheus block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_verification_template#prometheus OceancdVerificationTemplate#prometheus}
  */
  readonly prometheus?: OceancdVerificationTemplateMetricsProviderPrometheus;
  /**
  * web block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_verification_template#web OceancdVerificationTemplate#web}
  */
  readonly web?: OceancdVerificationTemplateMetricsProviderWeb;
}

export function oceancdVerificationTemplateMetricsProviderToTerraform(struct?: OceancdVerificationTemplateMetricsProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_watch: oceancdVerificationTemplateMetricsProviderCloudWatchToTerraform(struct!.cloudWatch),
    datadog: oceancdVerificationTemplateMetricsProviderDatadogToTerraform(struct!.datadog),
    jenkins: oceancdVerificationTemplateMetricsProviderJenkinsToTerraform(struct!.jenkins),
    job: oceancdVerificationTemplateMetricsProviderJobToTerraform(struct!.job),
    new_relic: oceancdVerificationTemplateMetricsProviderNewRelicToTerraform(struct!.newRelic),
    prometheus: oceancdVerificationTemplateMetricsProviderPrometheusToTerraform(struct!.prometheus),
    web: oceancdVerificationTemplateMetricsProviderWebToTerraform(struct!.web),
  }
}


export function oceancdVerificationTemplateMetricsProviderToHclTerraform(struct?: OceancdVerificationTemplateMetricsProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_watch: {
      value: oceancdVerificationTemplateMetricsProviderCloudWatchToHclTerraform(struct!.cloudWatch),
      isBlock: true,
      type: "list",
      storageClassType: "OceancdVerificationTemplateMetricsProviderCloudWatchList",
    },
    datadog: {
      value: oceancdVerificationTemplateMetricsProviderDatadogToHclTerraform(struct!.datadog),
      isBlock: true,
      type: "list",
      storageClassType: "OceancdVerificationTemplateMetricsProviderDatadogList",
    },
    jenkins: {
      value: oceancdVerificationTemplateMetricsProviderJenkinsToHclTerraform(struct!.jenkins),
      isBlock: true,
      type: "list",
      storageClassType: "OceancdVerificationTemplateMetricsProviderJenkinsList",
    },
    job: {
      value: oceancdVerificationTemplateMetricsProviderJobToHclTerraform(struct!.job),
      isBlock: true,
      type: "list",
      storageClassType: "OceancdVerificationTemplateMetricsProviderJobList",
    },
    new_relic: {
      value: oceancdVerificationTemplateMetricsProviderNewRelicToHclTerraform(struct!.newRelic),
      isBlock: true,
      type: "list",
      storageClassType: "OceancdVerificationTemplateMetricsProviderNewRelicList",
    },
    prometheus: {
      value: oceancdVerificationTemplateMetricsProviderPrometheusToHclTerraform(struct!.prometheus),
      isBlock: true,
      type: "list",
      storageClassType: "OceancdVerificationTemplateMetricsProviderPrometheusList",
    },
    web: {
      value: oceancdVerificationTemplateMetricsProviderWebToHclTerraform(struct!.web),
      isBlock: true,
      type: "list",
      storageClassType: "OceancdVerificationTemplateMetricsProviderWebList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceancdVerificationTemplateMetricsProviderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OceancdVerificationTemplateMetricsProvider | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudWatch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudWatch = this._cloudWatch?.internalValue;
    }
    if (this._datadog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.datadog = this._datadog?.internalValue;
    }
    if (this._jenkins?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jenkins = this._jenkins?.internalValue;
    }
    if (this._job?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.job = this._job?.internalValue;
    }
    if (this._newRelic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.newRelic = this._newRelic?.internalValue;
    }
    if (this._prometheus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prometheus = this._prometheus?.internalValue;
    }
    if (this._web?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.web = this._web?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceancdVerificationTemplateMetricsProvider | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloudWatch.internalValue = undefined;
      this._datadog.internalValue = undefined;
      this._jenkins.internalValue = undefined;
      this._job.internalValue = undefined;
      this._newRelic.internalValue = undefined;
      this._prometheus.internalValue = undefined;
      this._web.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloudWatch.internalValue = value.cloudWatch;
      this._datadog.internalValue = value.datadog;
      this._jenkins.internalValue = value.jenkins;
      this._job.internalValue = value.job;
      this._newRelic.internalValue = value.newRelic;
      this._prometheus.internalValue = value.prometheus;
      this._web.internalValue = value.web;
    }
  }

  // cloud_watch - computed: false, optional: true, required: false
  private _cloudWatch = new OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference(this, "cloud_watch");
  public get cloudWatch() {
    return this._cloudWatch;
  }
  public putCloudWatch(value: OceancdVerificationTemplateMetricsProviderCloudWatch) {
    this._cloudWatch.internalValue = value;
  }
  public resetCloudWatch() {
    this._cloudWatch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudWatchInput() {
    return this._cloudWatch.internalValue;
  }

  // datadog - computed: false, optional: true, required: false
  private _datadog = new OceancdVerificationTemplateMetricsProviderDatadogOutputReference(this, "datadog");
  public get datadog() {
    return this._datadog;
  }
  public putDatadog(value: OceancdVerificationTemplateMetricsProviderDatadog) {
    this._datadog.internalValue = value;
  }
  public resetDatadog() {
    this._datadog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datadogInput() {
    return this._datadog.internalValue;
  }

  // jenkins - computed: false, optional: true, required: false
  private _jenkins = new OceancdVerificationTemplateMetricsProviderJenkinsOutputReference(this, "jenkins");
  public get jenkins() {
    return this._jenkins;
  }
  public putJenkins(value: OceancdVerificationTemplateMetricsProviderJenkins) {
    this._jenkins.internalValue = value;
  }
  public resetJenkins() {
    this._jenkins.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jenkinsInput() {
    return this._jenkins.internalValue;
  }

  // job - computed: false, optional: true, required: false
  private _job = new OceancdVerificationTemplateMetricsProviderJobOutputReference(this, "job");
  public get job() {
    return this._job;
  }
  public putJob(value: OceancdVerificationTemplateMetricsProviderJob) {
    this._job.internalValue = value;
  }
  public resetJob() {
    this._job.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobInput() {
    return this._job.internalValue;
  }

  // new_relic - computed: false, optional: true, required: false
  private _newRelic = new OceancdVerificationTemplateMetricsProviderNewRelicOutputReference(this, "new_relic");
  public get newRelic() {
    return this._newRelic;
  }
  public putNewRelic(value: OceancdVerificationTemplateMetricsProviderNewRelic) {
    this._newRelic.internalValue = value;
  }
  public resetNewRelic() {
    this._newRelic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newRelicInput() {
    return this._newRelic.internalValue;
  }

  // prometheus - computed: false, optional: true, required: false
  private _prometheus = new OceancdVerificationTemplateMetricsProviderPrometheusOutputReference(this, "prometheus");
  public get prometheus() {
    return this._prometheus;
  }
  public putPrometheus(value: OceancdVerificationTemplateMetricsProviderPrometheus) {
    this._prometheus.internalValue = value;
  }
  public resetPrometheus() {
    this._prometheus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prometheusInput() {
    return this._prometheus.internalValue;
  }

  // web - computed: false, optional: true, required: false
  private _web = new OceancdVerificationTemplateMetricsProviderWebOutputReference(this, "web");
  public get web() {
    return this._web;
  }
  public putWeb(value: OceancdVerificationTemplateMetricsProviderWeb) {
    this._web.internalValue = value;
  }
  public resetWeb() {
    this._web.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webInput() {
    return this._web.internalValue;
  }
}

export class OceancdVerificationTemplateMetricsProviderList extends cdktf.ComplexList {
  public internalValue? : OceancdVerificationTemplateMetricsProvider[] | cdktf.IResolvable

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
  public get(index: number): OceancdVerificationTemplateMetricsProviderOutputReference {
    return new OceancdVerificationTemplateMetricsProviderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OceancdVerificationTemplateMetrics {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_verification_template#consecutive_error_limit OceancdVerificationTemplate#consecutive_error_limit}
  */
  readonly consecutiveErrorLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_verification_template#count OceancdVerificationTemplate#count}
  */
  readonly count?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_verification_template#dry_run OceancdVerificationTemplate#dry_run}
  */
  readonly dryRun?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_verification_template#failure_condition OceancdVerificationTemplate#failure_condition}
  */
  readonly failureCondition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_verification_template#failure_limit OceancdVerificationTemplate#failure_limit}
  */
  readonly failureLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_verification_template#initial_delay OceancdVerificationTemplate#initial_delay}
  */
  readonly initialDelay?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_verification_template#interval OceancdVerificationTemplate#interval}
  */
  readonly interval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_verification_template#metrics_name OceancdVerificationTemplate#metrics_name}
  */
  readonly metricsName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_verification_template#success_condition OceancdVerificationTemplate#success_condition}
  */
  readonly successCondition?: string;
  /**
  * baseline block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_verification_template#baseline OceancdVerificationTemplate#baseline}
  */
  readonly baseline?: OceancdVerificationTemplateMetricsBaseline;
  /**
  * provider block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_verification_template#provider OceancdVerificationTemplate#provider}
  */
  readonly provider: OceancdVerificationTemplateMetricsProvider[] | cdktf.IResolvable;
}

export function oceancdVerificationTemplateMetricsToTerraform(struct?: OceancdVerificationTemplateMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consecutive_error_limit: cdktf.numberToTerraform(struct!.consecutiveErrorLimit),
    count: cdktf.numberToTerraform(struct!.count),
    dry_run: cdktf.booleanToTerraform(struct!.dryRun),
    failure_condition: cdktf.stringToTerraform(struct!.failureCondition),
    failure_limit: cdktf.numberToTerraform(struct!.failureLimit),
    initial_delay: cdktf.stringToTerraform(struct!.initialDelay),
    interval: cdktf.stringToTerraform(struct!.interval),
    metrics_name: cdktf.stringToTerraform(struct!.metricsName),
    success_condition: cdktf.stringToTerraform(struct!.successCondition),
    baseline: oceancdVerificationTemplateMetricsBaselineToTerraform(struct!.baseline),
    provider: cdktf.listMapper(oceancdVerificationTemplateMetricsProviderToTerraform, true)(struct!.provider),
  }
}


export function oceancdVerificationTemplateMetricsToHclTerraform(struct?: OceancdVerificationTemplateMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    consecutive_error_limit: {
      value: cdktf.numberToHclTerraform(struct!.consecutiveErrorLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dry_run: {
      value: cdktf.booleanToHclTerraform(struct!.dryRun),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    failure_condition: {
      value: cdktf.stringToHclTerraform(struct!.failureCondition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    failure_limit: {
      value: cdktf.numberToHclTerraform(struct!.failureLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    initial_delay: {
      value: cdktf.stringToHclTerraform(struct!.initialDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metrics_name: {
      value: cdktf.stringToHclTerraform(struct!.metricsName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    success_condition: {
      value: cdktf.stringToHclTerraform(struct!.successCondition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    baseline: {
      value: oceancdVerificationTemplateMetricsBaselineToHclTerraform(struct!.baseline),
      isBlock: true,
      type: "list",
      storageClassType: "OceancdVerificationTemplateMetricsBaselineList",
    },
    provider: {
      value: cdktf.listMapperHcl(oceancdVerificationTemplateMetricsProviderToHclTerraform, true)(struct!.provider),
      isBlock: true,
      type: "list",
      storageClassType: "OceancdVerificationTemplateMetricsProviderList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceancdVerificationTemplateMetricsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OceancdVerificationTemplateMetrics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consecutiveErrorLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.consecutiveErrorLimit = this._consecutiveErrorLimit;
    }
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._dryRun !== undefined) {
      hasAnyValues = true;
      internalValueResult.dryRun = this._dryRun;
    }
    if (this._failureCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureCondition = this._failureCondition;
    }
    if (this._failureLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureLimit = this._failureLimit;
    }
    if (this._initialDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialDelay = this._initialDelay;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._metricsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsName = this._metricsName;
    }
    if (this._successCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.successCondition = this._successCondition;
    }
    if (this._baseline?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseline = this._baseline?.internalValue;
    }
    if (this._provider?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceancdVerificationTemplateMetrics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._consecutiveErrorLimit = undefined;
      this._count = undefined;
      this._dryRun = undefined;
      this._failureCondition = undefined;
      this._failureLimit = undefined;
      this._initialDelay = undefined;
      this._interval = undefined;
      this._metricsName = undefined;
      this._successCondition = undefined;
      this._baseline.internalValue = undefined;
      this._provider.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._consecutiveErrorLimit = value.consecutiveErrorLimit;
      this._count = value.count;
      this._dryRun = value.dryRun;
      this._failureCondition = value.failureCondition;
      this._failureLimit = value.failureLimit;
      this._initialDelay = value.initialDelay;
      this._interval = value.interval;
      this._metricsName = value.metricsName;
      this._successCondition = value.successCondition;
      this._baseline.internalValue = value.baseline;
      this._provider.internalValue = value.provider;
    }
  }

  // consecutive_error_limit - computed: false, optional: true, required: false
  private _consecutiveErrorLimit?: number; 
  public get consecutiveErrorLimit() {
    return this.getNumberAttribute('consecutive_error_limit');
  }
  public set consecutiveErrorLimit(value: number) {
    this._consecutiveErrorLimit = value;
  }
  public resetConsecutiveErrorLimit() {
    this._consecutiveErrorLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consecutiveErrorLimitInput() {
    return this._consecutiveErrorLimit;
  }

  // count - computed: false, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
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

  // failure_condition - computed: false, optional: true, required: false
  private _failureCondition?: string; 
  public get failureCondition() {
    return this.getStringAttribute('failure_condition');
  }
  public set failureCondition(value: string) {
    this._failureCondition = value;
  }
  public resetFailureCondition() {
    this._failureCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureConditionInput() {
    return this._failureCondition;
  }

  // failure_limit - computed: false, optional: true, required: false
  private _failureLimit?: number; 
  public get failureLimit() {
    return this.getNumberAttribute('failure_limit');
  }
  public set failureLimit(value: number) {
    this._failureLimit = value;
  }
  public resetFailureLimit() {
    this._failureLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureLimitInput() {
    return this._failureLimit;
  }

  // initial_delay - computed: false, optional: true, required: false
  private _initialDelay?: string; 
  public get initialDelay() {
    return this.getStringAttribute('initial_delay');
  }
  public set initialDelay(value: string) {
    this._initialDelay = value;
  }
  public resetInitialDelay() {
    this._initialDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialDelayInput() {
    return this._initialDelay;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // metrics_name - computed: false, optional: false, required: true
  private _metricsName?: string; 
  public get metricsName() {
    return this.getStringAttribute('metrics_name');
  }
  public set metricsName(value: string) {
    this._metricsName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsNameInput() {
    return this._metricsName;
  }

  // success_condition - computed: false, optional: true, required: false
  private _successCondition?: string; 
  public get successCondition() {
    return this.getStringAttribute('success_condition');
  }
  public set successCondition(value: string) {
    this._successCondition = value;
  }
  public resetSuccessCondition() {
    this._successCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successConditionInput() {
    return this._successCondition;
  }

  // baseline - computed: false, optional: true, required: false
  private _baseline = new OceancdVerificationTemplateMetricsBaselineOutputReference(this, "baseline");
  public get baseline() {
    return this._baseline;
  }
  public putBaseline(value: OceancdVerificationTemplateMetricsBaseline) {
    this._baseline.internalValue = value;
  }
  public resetBaseline() {
    this._baseline.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baselineInput() {
    return this._baseline.internalValue;
  }

  // provider - computed: false, optional: false, required: true
  private _provider = new OceancdVerificationTemplateMetricsProviderList(this, "provider", false);
  public get provider() {
    return this._provider;
  }
  public putProvider(value: OceancdVerificationTemplateMetricsProvider[] | cdktf.IResolvable) {
    this._provider.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider.internalValue;
  }
}

export class OceancdVerificationTemplateMetricsList extends cdktf.ComplexList {
  public internalValue? : OceancdVerificationTemplateMetrics[] | cdktf.IResolvable

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
  public get(index: number): OceancdVerificationTemplateMetricsOutputReference {
    return new OceancdVerificationTemplateMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_verification_template spotinst_oceancd_verification_template}
*/
export class OceancdVerificationTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spotinst_oceancd_verification_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OceancdVerificationTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OceancdVerificationTemplate to import
  * @param importFromId The id of the existing OceancdVerificationTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_verification_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OceancdVerificationTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "spotinst_oceancd_verification_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/oceancd_verification_template spotinst_oceancd_verification_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OceancdVerificationTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: OceancdVerificationTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'spotinst_oceancd_verification_template',
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
    this._name = config.name;
    this._args.internalValue = config.args;
    this._metrics.internalValue = config.metrics;
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

  // args - computed: false, optional: true, required: false
  private _args = new OceancdVerificationTemplateArgsList(this, "args", true);
  public get args() {
    return this._args;
  }
  public putArgs(value: OceancdVerificationTemplateArgs[] | cdktf.IResolvable) {
    this._args.internalValue = value;
  }
  public resetArgs() {
    this._args.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args.internalValue;
  }

  // metrics - computed: false, optional: true, required: false
  private _metrics = new OceancdVerificationTemplateMetricsList(this, "metrics", true);
  public get metrics() {
    return this._metrics;
  }
  public putMetrics(value: OceancdVerificationTemplateMetrics[] | cdktf.IResolvable) {
    this._metrics.internalValue = value;
  }
  public resetMetrics() {
    this._metrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsInput() {
    return this._metrics.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      args: cdktf.listMapper(oceancdVerificationTemplateArgsToTerraform, true)(this._args.internalValue),
      metrics: cdktf.listMapper(oceancdVerificationTemplateMetricsToTerraform, true)(this._metrics.internalValue),
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
      args: {
        value: cdktf.listMapperHcl(oceancdVerificationTemplateArgsToHclTerraform, true)(this._args.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OceancdVerificationTemplateArgsList",
      },
      metrics: {
        value: cdktf.listMapperHcl(oceancdVerificationTemplateMetricsToHclTerraform, true)(this._metrics.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OceancdVerificationTemplateMetricsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
