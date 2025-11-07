// https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/website_alert_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WebsiteAlertConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of IDs of alert channels defined in Instana.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/website_alert_config#alert_channel_ids WebsiteAlertConfig#alert_channel_ids}
  */
  readonly alertChannelIds?: string[];
  /**
  * The description text of the website alert config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/website_alert_config#description WebsiteAlertConfig#description}
  */
  readonly description: string;
  /**
  * The evaluation granularity used for detection of violations of the defined threshold. In other words, it defines the size of the tumbling window used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/website_alert_config#granularity WebsiteAlertConfig#granularity}
  */
  readonly granularity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/website_alert_config#id WebsiteAlertConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name for the website alert configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/website_alert_config#name WebsiteAlertConfig#name}
  */
  readonly name: string;
  /**
  * The severity of the alert when triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/website_alert_config#severity WebsiteAlertConfig#severity}
  */
  readonly severity: string;
  /**
  * The tag filter expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/website_alert_config#tag_filter WebsiteAlertConfig#tag_filter}
  */
  readonly tagFilter?: string;
  /**
  * Optional flag to indicate whether also an Incident is triggered or not. The default is false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/website_alert_config#triggering WebsiteAlertConfig#triggering}
  */
  readonly triggering?: boolean | cdktf.IResolvable;
  /**
  * Unique ID of the website
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/website_alert_config#website_id WebsiteAlertConfig#website_id}
  */
  readonly websiteId: string;
  /**
  * custom_payload_field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/website_alert_config#custom_payload_field WebsiteAlertConfig#custom_payload_field}
  */
  readonly customPayloadField?: WebsiteAlertConfigCustomPayloadField[] | cdktf.IResolvable;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/website_alert_config#rule WebsiteAlertConfig#rule}
  */
  readonly rule: WebsiteAlertConfigRule;
  /**
  * threshold block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/website_alert_config#threshold WebsiteAlertConfig#threshold}
  */
  readonly threshold: WebsiteAlertConfigThreshold;
  /**
  * time_threshold block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/website_alert_config#time_threshold WebsiteAlertConfig#time_threshold}
  */
  readonly timeThreshold: WebsiteAlertConfigTimeThreshold;
}
export interface WebsiteAlertConfigCustomPayloadFieldDynamicValue {
  /**
  * The key of the dynamic custom payload field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/website_alert_config#key WebsiteAlertConfig#key}
  */
  readonly key?: string;
  /**
  * The name of the tag of the dynamic custom payload field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/website_alert_config#tag_name WebsiteAlertConfig#tag_name}
  */
  readonly tagName: string;
}

export function websiteAlertConfigCustomPayloadFieldDynamicValueToTerraform(struct?: WebsiteAlertConfigCustomPayloadFieldDynamicValueOutputReference | WebsiteAlertConfigCustomPayloadFieldDynamicValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    tag_name: cdktf.stringToTerraform(struct!.tagName),
  }
}


export function websiteAlertConfigCustomPayloadFieldDynamicValueToHclTerraform(struct?: WebsiteAlertConfigCustomPayloadFieldDynamicValueOutputReference | WebsiteAlertConfigCustomPayloadFieldDynamicValue): any {
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
    tag_name: {
      value: cdktf.stringToHclTerraform(struct!.tagName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebsiteAlertConfigCustomPayloadFieldDynamicValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebsiteAlertConfigCustomPayloadFieldDynamicValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._tagName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagName = this._tagName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebsiteAlertConfigCustomPayloadFieldDynamicValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._tagName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._tagName = value.tagName;
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

  // tag_name - computed: false, optional: false, required: true
  private _tagName?: string; 
  public get tagName() {
    return this.getStringAttribute('tag_name');
  }
  public set tagName(value: string) {
    this._tagName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagNameInput() {
    return this._tagName;
  }
}
export interface WebsiteAlertConfigCustomPayloadField {
  /**
  * The key of the custom payload field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/website_alert_config#key WebsiteAlertConfig#key}
  */
  readonly key: string;
  /**
  * The value of a static string custom payload field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/website_alert_config#value WebsiteAlertConfig#value}
  */
  readonly value?: string;
  /**
  * dynamic_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/website_alert_config#dynamic_value WebsiteAlertConfig#dynamic_value}
  */
  readonly dynamicValue?: WebsiteAlertConfigCustomPayloadFieldDynamicValue;
}

export function websiteAlertConfigCustomPayloadFieldToTerraform(struct?: WebsiteAlertConfigCustomPayloadField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
    dynamic_value: websiteAlertConfigCustomPayloadFieldDynamicValueToTerraform(struct!.dynamicValue),
  }
}


export function websiteAlertConfigCustomPayloadFieldToHclTerraform(struct?: WebsiteAlertConfigCustomPayloadField | cdktf.IResolvable): any {
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
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dynamic_value: {
      value: websiteAlertConfigCustomPayloadFieldDynamicValueToHclTerraform(struct!.dynamicValue),
      isBlock: true,
      type: "list",
      storageClassType: "WebsiteAlertConfigCustomPayloadFieldDynamicValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebsiteAlertConfigCustomPayloadFieldOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebsiteAlertConfigCustomPayloadField | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._dynamicValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicValue = this._dynamicValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebsiteAlertConfigCustomPayloadField | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
      this._dynamicValue.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
      this._dynamicValue.internalValue = value.dynamicValue;
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

  // dynamic_value - computed: false, optional: true, required: false
  private _dynamicValue = new WebsiteAlertConfigCustomPayloadFieldDynamicValueOutputReference(this, "dynamic_value");
  public get dynamicValue() {
    return this._dynamicValue;
  }
  public putDynamicValue(value: WebsiteAlertConfigCustomPayloadFieldDynamicValue) {
    this._dynamicValue.internalValue = value;
  }
  public resetDynamicValue() {
    this._dynamicValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicValueInput() {
    return this._dynamicValue.internalValue;
  }
}

export class WebsiteAlertConfigCustomPayloadFieldList extends cdktf.ComplexList {
  public internalValue? : WebsiteAlertConfigCustomPayloadField[] | cdktf.IResolvable

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
  public get(index: number): WebsiteAlertConfigCustomPayloadFieldOutputReference {
    return new WebsiteAlertConfigCustomPayloadFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebsiteAlertConfigRuleSlowness {
  /**
  * The aggregation function of the website alert rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/website_alert_config#aggregation WebsiteAlertConfig#aggregation}
  */
  readonly aggregation: string;
  /**
  * The metric name of the website alert rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/website_alert_config#metric_name WebsiteAlertConfig#metric_name}
  */
  readonly metricName: string;
}

export function websiteAlertConfigRuleSlownessToTerraform(struct?: WebsiteAlertConfigRuleSlownessOutputReference | WebsiteAlertConfigRuleSlowness): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    metric_name: cdktf.stringToTerraform(struct!.metricName),
  }
}


export function websiteAlertConfigRuleSlownessToHclTerraform(struct?: WebsiteAlertConfigRuleSlownessOutputReference | WebsiteAlertConfigRuleSlowness): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregation: {
      value: cdktf.stringToHclTerraform(struct!.aggregation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_name: {
      value: cdktf.stringToHclTerraform(struct!.metricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebsiteAlertConfigRuleSlownessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebsiteAlertConfigRuleSlowness | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebsiteAlertConfigRuleSlowness | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregation = undefined;
      this._metricName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregation = value.aggregation;
      this._metricName = value.metricName;
    }
  }

  // aggregation - computed: false, optional: false, required: true
  private _aggregation?: string; 
  public get aggregation() {
    return this.getStringAttribute('aggregation');
  }
  public set aggregation(value: string) {
    this._aggregation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationInput() {
    return this._aggregation;
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
}
export interface WebsiteAlertConfigRuleSpecificJsError {
  /**
  * The aggregation function of the website alert rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/website_alert_config#aggregation WebsiteAlertConfig#aggregation}
  */
  readonly aggregation?: string;
  /**
  * The metric name of the website alert rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/website_alert_config#metric_name WebsiteAlertConfig#metric_name}
  */
  readonly metricName: string;
  /**
  * The operator which will be applied to evaluate this rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/website_alert_config#operator WebsiteAlertConfig#operator}
  */
  readonly operator: string;
  /**
  * The value identify the specific javascript error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/website_alert_config#value WebsiteAlertConfig#value}
  */
  readonly value?: string;
}

export function websiteAlertConfigRuleSpecificJsErrorToTerraform(struct?: WebsiteAlertConfigRuleSpecificJsErrorOutputReference | WebsiteAlertConfigRuleSpecificJsError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    operator: cdktf.stringToTerraform(struct!.operator),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function websiteAlertConfigRuleSpecificJsErrorToHclTerraform(struct?: WebsiteAlertConfigRuleSpecificJsErrorOutputReference | WebsiteAlertConfigRuleSpecificJsError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregation: {
      value: cdktf.stringToHclTerraform(struct!.aggregation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_name: {
      value: cdktf.stringToHclTerraform(struct!.metricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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

export class WebsiteAlertConfigRuleSpecificJsErrorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebsiteAlertConfigRuleSpecificJsError | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebsiteAlertConfigRuleSpecificJsError | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregation = undefined;
      this._metricName = undefined;
      this._operator = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregation = value.aggregation;
      this._metricName = value.metricName;
      this._operator = value.operator;
      this._value = value.value;
    }
  }

  // aggregation - computed: false, optional: true, required: false
  private _aggregation?: string; 
  public get aggregation() {
    return this.getStringAttribute('aggregation');
  }
  public set aggregation(value: string) {
    this._aggregation = value;
  }
  public resetAggregation() {
    this._aggregation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationInput() {
    return this._aggregation;
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
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
export interface WebsiteAlertConfigRuleStatusCode {
  /**
  * The aggregation function of the website alert rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/website_alert_config#aggregation WebsiteAlertConfig#aggregation}
  */
  readonly aggregation?: string;
  /**
  * The metric name of the website alert rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/website_alert_config#metric_name WebsiteAlertConfig#metric_name}
  */
  readonly metricName: string;
  /**
  * The operator which will be applied to evaluate this rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/website_alert_config#operator WebsiteAlertConfig#operator}
  */
  readonly operator: string;
  /**
  * The value identify the specific http status code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/website_alert_config#value WebsiteAlertConfig#value}
  */
  readonly value: string;
}

export function websiteAlertConfigRuleStatusCodeToTerraform(struct?: WebsiteAlertConfigRuleStatusCodeOutputReference | WebsiteAlertConfigRuleStatusCode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    operator: cdktf.stringToTerraform(struct!.operator),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function websiteAlertConfigRuleStatusCodeToHclTerraform(struct?: WebsiteAlertConfigRuleStatusCodeOutputReference | WebsiteAlertConfigRuleStatusCode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregation: {
      value: cdktf.stringToHclTerraform(struct!.aggregation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_name: {
      value: cdktf.stringToHclTerraform(struct!.metricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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

export class WebsiteAlertConfigRuleStatusCodeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebsiteAlertConfigRuleStatusCode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebsiteAlertConfigRuleStatusCode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregation = undefined;
      this._metricName = undefined;
      this._operator = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregation = value.aggregation;
      this._metricName = value.metricName;
      this._operator = value.operator;
      this._value = value.value;
    }
  }

  // aggregation - computed: false, optional: true, required: false
  private _aggregation?: string; 
  public get aggregation() {
    return this.getStringAttribute('aggregation');
  }
  public set aggregation(value: string) {
    this._aggregation = value;
  }
  public resetAggregation() {
    this._aggregation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationInput() {
    return this._aggregation;
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface WebsiteAlertConfigRuleThroughput {
  /**
  * The aggregation function of the website alert rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/website_alert_config#aggregation WebsiteAlertConfig#aggregation}
  */
  readonly aggregation?: string;
  /**
  * The metric name of the website alert rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/website_alert_config#metric_name WebsiteAlertConfig#metric_name}
  */
  readonly metricName: string;
}

export function websiteAlertConfigRuleThroughputToTerraform(struct?: WebsiteAlertConfigRuleThroughputOutputReference | WebsiteAlertConfigRuleThroughput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    metric_name: cdktf.stringToTerraform(struct!.metricName),
  }
}


export function websiteAlertConfigRuleThroughputToHclTerraform(struct?: WebsiteAlertConfigRuleThroughputOutputReference | WebsiteAlertConfigRuleThroughput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregation: {
      value: cdktf.stringToHclTerraform(struct!.aggregation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_name: {
      value: cdktf.stringToHclTerraform(struct!.metricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebsiteAlertConfigRuleThroughputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebsiteAlertConfigRuleThroughput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebsiteAlertConfigRuleThroughput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregation = undefined;
      this._metricName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregation = value.aggregation;
      this._metricName = value.metricName;
    }
  }

  // aggregation - computed: false, optional: true, required: false
  private _aggregation?: string; 
  public get aggregation() {
    return this.getStringAttribute('aggregation');
  }
  public set aggregation(value: string) {
    this._aggregation = value;
  }
  public resetAggregation() {
    this._aggregation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationInput() {
    return this._aggregation;
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
}
export interface WebsiteAlertConfigRule {
  /**
  * slowness block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/website_alert_config#slowness WebsiteAlertConfig#slowness}
  */
  readonly slowness?: WebsiteAlertConfigRuleSlowness;
  /**
  * specific_js_error block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/website_alert_config#specific_js_error WebsiteAlertConfig#specific_js_error}
  */
  readonly specificJsError?: WebsiteAlertConfigRuleSpecificJsError;
  /**
  * status_code block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/website_alert_config#status_code WebsiteAlertConfig#status_code}
  */
  readonly statusCode?: WebsiteAlertConfigRuleStatusCode;
  /**
  * throughput block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/website_alert_config#throughput WebsiteAlertConfig#throughput}
  */
  readonly throughput?: WebsiteAlertConfigRuleThroughput;
}

export function websiteAlertConfigRuleToTerraform(struct?: WebsiteAlertConfigRuleOutputReference | WebsiteAlertConfigRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    slowness: websiteAlertConfigRuleSlownessToTerraform(struct!.slowness),
    specific_js_error: websiteAlertConfigRuleSpecificJsErrorToTerraform(struct!.specificJsError),
    status_code: websiteAlertConfigRuleStatusCodeToTerraform(struct!.statusCode),
    throughput: websiteAlertConfigRuleThroughputToTerraform(struct!.throughput),
  }
}


export function websiteAlertConfigRuleToHclTerraform(struct?: WebsiteAlertConfigRuleOutputReference | WebsiteAlertConfigRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    slowness: {
      value: websiteAlertConfigRuleSlownessToHclTerraform(struct!.slowness),
      isBlock: true,
      type: "list",
      storageClassType: "WebsiteAlertConfigRuleSlownessList",
    },
    specific_js_error: {
      value: websiteAlertConfigRuleSpecificJsErrorToHclTerraform(struct!.specificJsError),
      isBlock: true,
      type: "list",
      storageClassType: "WebsiteAlertConfigRuleSpecificJsErrorList",
    },
    status_code: {
      value: websiteAlertConfigRuleStatusCodeToHclTerraform(struct!.statusCode),
      isBlock: true,
      type: "list",
      storageClassType: "WebsiteAlertConfigRuleStatusCodeList",
    },
    throughput: {
      value: websiteAlertConfigRuleThroughputToHclTerraform(struct!.throughput),
      isBlock: true,
      type: "list",
      storageClassType: "WebsiteAlertConfigRuleThroughputList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebsiteAlertConfigRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebsiteAlertConfigRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._slowness?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.slowness = this._slowness?.internalValue;
    }
    if (this._specificJsError?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.specificJsError = this._specificJsError?.internalValue;
    }
    if (this._statusCode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode?.internalValue;
    }
    if (this._throughput?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.throughput = this._throughput?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebsiteAlertConfigRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._slowness.internalValue = undefined;
      this._specificJsError.internalValue = undefined;
      this._statusCode.internalValue = undefined;
      this._throughput.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._slowness.internalValue = value.slowness;
      this._specificJsError.internalValue = value.specificJsError;
      this._statusCode.internalValue = value.statusCode;
      this._throughput.internalValue = value.throughput;
    }
  }

  // slowness - computed: false, optional: true, required: false
  private _slowness = new WebsiteAlertConfigRuleSlownessOutputReference(this, "slowness");
  public get slowness() {
    return this._slowness;
  }
  public putSlowness(value: WebsiteAlertConfigRuleSlowness) {
    this._slowness.internalValue = value;
  }
  public resetSlowness() {
    this._slowness.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slownessInput() {
    return this._slowness.internalValue;
  }

  // specific_js_error - computed: false, optional: true, required: false
  private _specificJsError = new WebsiteAlertConfigRuleSpecificJsErrorOutputReference(this, "specific_js_error");
  public get specificJsError() {
    return this._specificJsError;
  }
  public putSpecificJsError(value: WebsiteAlertConfigRuleSpecificJsError) {
    this._specificJsError.internalValue = value;
  }
  public resetSpecificJsError() {
    this._specificJsError.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specificJsErrorInput() {
    return this._specificJsError.internalValue;
  }

  // status_code - computed: false, optional: true, required: false
  private _statusCode = new WebsiteAlertConfigRuleStatusCodeOutputReference(this, "status_code");
  public get statusCode() {
    return this._statusCode;
  }
  public putStatusCode(value: WebsiteAlertConfigRuleStatusCode) {
    this._statusCode.internalValue = value;
  }
  public resetStatusCode() {
    this._statusCode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodeInput() {
    return this._statusCode.internalValue;
  }

  // throughput - computed: false, optional: true, required: false
  private _throughput = new WebsiteAlertConfigRuleThroughputOutputReference(this, "throughput");
  public get throughput() {
    return this._throughput;
  }
  public putThroughput(value: WebsiteAlertConfigRuleThroughput) {
    this._throughput.internalValue = value;
  }
  public resetThroughput() {
    this._throughput.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throughputInput() {
    return this._throughput.internalValue;
  }
}
export interface WebsiteAlertConfigThresholdHistoricBaseline {
  /**
  * The baseline of the historic baseline threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/website_alert_config#baseline WebsiteAlertConfig#baseline}
  */
  readonly baseline?: number[][] | cdktf.IResolvable;
  /**
  * The baseline of the historic baseline threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/website_alert_config#deviation_factor WebsiteAlertConfig#deviation_factor}
  */
  readonly deviationFactor?: number;
  /**
  * The last updated value of the threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/website_alert_config#last_updated WebsiteAlertConfig#last_updated}
  */
  readonly lastUpdated?: number;
  /**
  * The operator which will be applied to evaluate the threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/website_alert_config#operator WebsiteAlertConfig#operator}
  */
  readonly operator: string;
  /**
  * The seasonality of the historic baseline threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/website_alert_config#seasonality WebsiteAlertConfig#seasonality}
  */
  readonly seasonality: string;
}

export function websiteAlertConfigThresholdHistoricBaselineToTerraform(struct?: WebsiteAlertConfigThresholdHistoricBaselineOutputReference | WebsiteAlertConfigThresholdHistoricBaseline): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    baseline: cdktf.listMapper(cdktf.listMapper(cdktf.numberToTerraform, false), false)(struct!.baseline),
    deviation_factor: cdktf.numberToTerraform(struct!.deviationFactor),
    last_updated: cdktf.numberToTerraform(struct!.lastUpdated),
    operator: cdktf.stringToTerraform(struct!.operator),
    seasonality: cdktf.stringToTerraform(struct!.seasonality),
  }
}


export function websiteAlertConfigThresholdHistoricBaselineToHclTerraform(struct?: WebsiteAlertConfigThresholdHistoricBaselineOutputReference | WebsiteAlertConfigThresholdHistoricBaseline): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    baseline: {
      value: cdktf.listMapperHcl(cdktf.listMapperHcl(cdktf.numberToHclTerraform, false), false)(struct!.baseline),
      isBlock: false,
      type: "set",
      storageClassType: "numberListList",
    },
    deviation_factor: {
      value: cdktf.numberToHclTerraform(struct!.deviationFactor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    last_updated: {
      value: cdktf.numberToHclTerraform(struct!.lastUpdated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    seasonality: {
      value: cdktf.stringToHclTerraform(struct!.seasonality),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebsiteAlertConfigThresholdHistoricBaselineOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebsiteAlertConfigThresholdHistoricBaseline | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseline !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseline = this._baseline;
    }
    if (this._deviationFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviationFactor = this._deviationFactor;
    }
    if (this._lastUpdated !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastUpdated = this._lastUpdated;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._seasonality !== undefined) {
      hasAnyValues = true;
      internalValueResult.seasonality = this._seasonality;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebsiteAlertConfigThresholdHistoricBaseline | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._baseline = undefined;
      this._deviationFactor = undefined;
      this._lastUpdated = undefined;
      this._operator = undefined;
      this._seasonality = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._baseline = value.baseline;
      this._deviationFactor = value.deviationFactor;
      this._lastUpdated = value.lastUpdated;
      this._operator = value.operator;
      this._seasonality = value.seasonality;
    }
  }

  // baseline - computed: false, optional: true, required: false
  private _baseline?: number[][] | cdktf.IResolvable; 
  public get baseline() {
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('baseline')));
  }
  public set baseline(value: number[][] | cdktf.IResolvable) {
    this._baseline = value;
  }
  public resetBaseline() {
    this._baseline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baselineInput() {
    return this._baseline;
  }

  // deviation_factor - computed: false, optional: true, required: false
  private _deviationFactor?: number; 
  public get deviationFactor() {
    return this.getNumberAttribute('deviation_factor');
  }
  public set deviationFactor(value: number) {
    this._deviationFactor = value;
  }
  public resetDeviationFactor() {
    this._deviationFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviationFactorInput() {
    return this._deviationFactor;
  }

  // last_updated - computed: false, optional: true, required: false
  private _lastUpdated?: number; 
  public get lastUpdated() {
    return this.getNumberAttribute('last_updated');
  }
  public set lastUpdated(value: number) {
    this._lastUpdated = value;
  }
  public resetLastUpdated() {
    this._lastUpdated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastUpdatedInput() {
    return this._lastUpdated;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // seasonality - computed: false, optional: false, required: true
  private _seasonality?: string; 
  public get seasonality() {
    return this.getStringAttribute('seasonality');
  }
  public set seasonality(value: string) {
    this._seasonality = value;
  }
  // Temporarily expose input value. Use with caution.
  public get seasonalityInput() {
    return this._seasonality;
  }
}
export interface WebsiteAlertConfigThresholdStatic {
  /**
  * The last updated value of the threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/website_alert_config#last_updated WebsiteAlertConfig#last_updated}
  */
  readonly lastUpdated?: number;
  /**
  * The operator which will be applied to evaluate the threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/website_alert_config#operator WebsiteAlertConfig#operator}
  */
  readonly operator: string;
  /**
  * The value of the static threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/website_alert_config#value WebsiteAlertConfig#value}
  */
  readonly value?: number;
}

export function websiteAlertConfigThresholdStaticToTerraform(struct?: WebsiteAlertConfigThresholdStaticOutputReference | WebsiteAlertConfigThresholdStatic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    last_updated: cdktf.numberToTerraform(struct!.lastUpdated),
    operator: cdktf.stringToTerraform(struct!.operator),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function websiteAlertConfigThresholdStaticToHclTerraform(struct?: WebsiteAlertConfigThresholdStaticOutputReference | WebsiteAlertConfigThresholdStatic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    last_updated: {
      value: cdktf.numberToHclTerraform(struct!.lastUpdated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebsiteAlertConfigThresholdStaticOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebsiteAlertConfigThresholdStatic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lastUpdated !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastUpdated = this._lastUpdated;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebsiteAlertConfigThresholdStatic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lastUpdated = undefined;
      this._operator = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lastUpdated = value.lastUpdated;
      this._operator = value.operator;
      this._value = value.value;
    }
  }

  // last_updated - computed: false, optional: true, required: false
  private _lastUpdated?: number; 
  public get lastUpdated() {
    return this.getNumberAttribute('last_updated');
  }
  public set lastUpdated(value: number) {
    this._lastUpdated = value;
  }
  public resetLastUpdated() {
    this._lastUpdated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastUpdatedInput() {
    return this._lastUpdated;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
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
export interface WebsiteAlertConfigThreshold {
  /**
  * historic_baseline block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/website_alert_config#historic_baseline WebsiteAlertConfig#historic_baseline}
  */
  readonly historicBaseline?: WebsiteAlertConfigThresholdHistoricBaseline;
  /**
  * static block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/website_alert_config#static WebsiteAlertConfig#static}
  */
  readonly static?: WebsiteAlertConfigThresholdStatic;
}

export function websiteAlertConfigThresholdToTerraform(struct?: WebsiteAlertConfigThresholdOutputReference | WebsiteAlertConfigThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    historic_baseline: websiteAlertConfigThresholdHistoricBaselineToTerraform(struct!.historicBaseline),
    static: websiteAlertConfigThresholdStaticToTerraform(struct!.static),
  }
}


export function websiteAlertConfigThresholdToHclTerraform(struct?: WebsiteAlertConfigThresholdOutputReference | WebsiteAlertConfigThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    historic_baseline: {
      value: websiteAlertConfigThresholdHistoricBaselineToHclTerraform(struct!.historicBaseline),
      isBlock: true,
      type: "list",
      storageClassType: "WebsiteAlertConfigThresholdHistoricBaselineList",
    },
    static: {
      value: websiteAlertConfigThresholdStaticToHclTerraform(struct!.static),
      isBlock: true,
      type: "list",
      storageClassType: "WebsiteAlertConfigThresholdStaticList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebsiteAlertConfigThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebsiteAlertConfigThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._historicBaseline?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.historicBaseline = this._historicBaseline?.internalValue;
    }
    if (this._static?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.static = this._static?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebsiteAlertConfigThreshold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._historicBaseline.internalValue = undefined;
      this._static.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._historicBaseline.internalValue = value.historicBaseline;
      this._static.internalValue = value.static;
    }
  }

  // historic_baseline - computed: false, optional: true, required: false
  private _historicBaseline = new WebsiteAlertConfigThresholdHistoricBaselineOutputReference(this, "historic_baseline");
  public get historicBaseline() {
    return this._historicBaseline;
  }
  public putHistoricBaseline(value: WebsiteAlertConfigThresholdHistoricBaseline) {
    this._historicBaseline.internalValue = value;
  }
  public resetHistoricBaseline() {
    this._historicBaseline.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get historicBaselineInput() {
    return this._historicBaseline.internalValue;
  }

  // static - computed: false, optional: true, required: false
  private _static = new WebsiteAlertConfigThresholdStaticOutputReference(this, "static");
  public get static() {
    return this._static;
  }
  public putStatic(value: WebsiteAlertConfigThresholdStatic) {
    this._static.internalValue = value;
  }
  public resetStatic() {
    this._static.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticInput() {
    return this._static.internalValue;
  }
}
export interface WebsiteAlertConfigTimeThresholdUserImpactOfViolationsInSequence {
  /**
  * The impact method of the time threshold based on user impact of violations in sequence
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/website_alert_config#impact_measurement_method WebsiteAlertConfig#impact_measurement_method}
  */
  readonly impactMeasurementMethod: string;
  /**
  * The time window if the time threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/website_alert_config#time_window WebsiteAlertConfig#time_window}
  */
  readonly timeWindow?: number;
  /**
  * The percentage of impacted users of the time threshold based on user impact of violations in sequence
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/website_alert_config#user_percentage WebsiteAlertConfig#user_percentage}
  */
  readonly userPercentage?: number;
  /**
  * The number of impacted users of the time threshold based on user impact of violations in sequence
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/website_alert_config#users WebsiteAlertConfig#users}
  */
  readonly users?: number;
}

export function websiteAlertConfigTimeThresholdUserImpactOfViolationsInSequenceToTerraform(struct?: WebsiteAlertConfigTimeThresholdUserImpactOfViolationsInSequenceOutputReference | WebsiteAlertConfigTimeThresholdUserImpactOfViolationsInSequence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    impact_measurement_method: cdktf.stringToTerraform(struct!.impactMeasurementMethod),
    time_window: cdktf.numberToTerraform(struct!.timeWindow),
    user_percentage: cdktf.numberToTerraform(struct!.userPercentage),
    users: cdktf.numberToTerraform(struct!.users),
  }
}


export function websiteAlertConfigTimeThresholdUserImpactOfViolationsInSequenceToHclTerraform(struct?: WebsiteAlertConfigTimeThresholdUserImpactOfViolationsInSequenceOutputReference | WebsiteAlertConfigTimeThresholdUserImpactOfViolationsInSequence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    impact_measurement_method: {
      value: cdktf.stringToHclTerraform(struct!.impactMeasurementMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_window: {
      value: cdktf.numberToHclTerraform(struct!.timeWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_percentage: {
      value: cdktf.numberToHclTerraform(struct!.userPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    users: {
      value: cdktf.numberToHclTerraform(struct!.users),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebsiteAlertConfigTimeThresholdUserImpactOfViolationsInSequenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebsiteAlertConfigTimeThresholdUserImpactOfViolationsInSequence | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._impactMeasurementMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.impactMeasurementMethod = this._impactMeasurementMethod;
    }
    if (this._timeWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeWindow = this._timeWindow;
    }
    if (this._userPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.userPercentage = this._userPercentage;
    }
    if (this._users !== undefined) {
      hasAnyValues = true;
      internalValueResult.users = this._users;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebsiteAlertConfigTimeThresholdUserImpactOfViolationsInSequence | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._impactMeasurementMethod = undefined;
      this._timeWindow = undefined;
      this._userPercentage = undefined;
      this._users = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._impactMeasurementMethod = value.impactMeasurementMethod;
      this._timeWindow = value.timeWindow;
      this._userPercentage = value.userPercentage;
      this._users = value.users;
    }
  }

  // impact_measurement_method - computed: false, optional: false, required: true
  private _impactMeasurementMethod?: string; 
  public get impactMeasurementMethod() {
    return this.getStringAttribute('impact_measurement_method');
  }
  public set impactMeasurementMethod(value: string) {
    this._impactMeasurementMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get impactMeasurementMethodInput() {
    return this._impactMeasurementMethod;
  }

  // time_window - computed: false, optional: true, required: false
  private _timeWindow?: number; 
  public get timeWindow() {
    return this.getNumberAttribute('time_window');
  }
  public set timeWindow(value: number) {
    this._timeWindow = value;
  }
  public resetTimeWindow() {
    this._timeWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeWindowInput() {
    return this._timeWindow;
  }

  // user_percentage - computed: false, optional: true, required: false
  private _userPercentage?: number; 
  public get userPercentage() {
    return this.getNumberAttribute('user_percentage');
  }
  public set userPercentage(value: number) {
    this._userPercentage = value;
  }
  public resetUserPercentage() {
    this._userPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPercentageInput() {
    return this._userPercentage;
  }

  // users - computed: false, optional: true, required: false
  private _users?: number; 
  public get users() {
    return this.getNumberAttribute('users');
  }
  public set users(value: number) {
    this._users = value;
  }
  public resetUsers() {
    this._users = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users;
  }
}
export interface WebsiteAlertConfigTimeThresholdViolationsInPeriod {
  /**
  * The time window if the time threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/website_alert_config#time_window WebsiteAlertConfig#time_window}
  */
  readonly timeWindow?: number;
  /**
  * The violations appeared in the period
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/website_alert_config#violations WebsiteAlertConfig#violations}
  */
  readonly violations?: number;
}

export function websiteAlertConfigTimeThresholdViolationsInPeriodToTerraform(struct?: WebsiteAlertConfigTimeThresholdViolationsInPeriodOutputReference | WebsiteAlertConfigTimeThresholdViolationsInPeriod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    time_window: cdktf.numberToTerraform(struct!.timeWindow),
    violations: cdktf.numberToTerraform(struct!.violations),
  }
}


export function websiteAlertConfigTimeThresholdViolationsInPeriodToHclTerraform(struct?: WebsiteAlertConfigTimeThresholdViolationsInPeriodOutputReference | WebsiteAlertConfigTimeThresholdViolationsInPeriod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    time_window: {
      value: cdktf.numberToHclTerraform(struct!.timeWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    violations: {
      value: cdktf.numberToHclTerraform(struct!.violations),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebsiteAlertConfigTimeThresholdViolationsInPeriodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebsiteAlertConfigTimeThresholdViolationsInPeriod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timeWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeWindow = this._timeWindow;
    }
    if (this._violations !== undefined) {
      hasAnyValues = true;
      internalValueResult.violations = this._violations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebsiteAlertConfigTimeThresholdViolationsInPeriod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._timeWindow = undefined;
      this._violations = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._timeWindow = value.timeWindow;
      this._violations = value.violations;
    }
  }

  // time_window - computed: false, optional: true, required: false
  private _timeWindow?: number; 
  public get timeWindow() {
    return this.getNumberAttribute('time_window');
  }
  public set timeWindow(value: number) {
    this._timeWindow = value;
  }
  public resetTimeWindow() {
    this._timeWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeWindowInput() {
    return this._timeWindow;
  }

  // violations - computed: false, optional: true, required: false
  private _violations?: number; 
  public get violations() {
    return this.getNumberAttribute('violations');
  }
  public set violations(value: number) {
    this._violations = value;
  }
  public resetViolations() {
    this._violations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get violationsInput() {
    return this._violations;
  }
}
export interface WebsiteAlertConfigTimeThresholdViolationsInSequence {
  /**
  * The time window if the time threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/website_alert_config#time_window WebsiteAlertConfig#time_window}
  */
  readonly timeWindow?: number;
}

export function websiteAlertConfigTimeThresholdViolationsInSequenceToTerraform(struct?: WebsiteAlertConfigTimeThresholdViolationsInSequenceOutputReference | WebsiteAlertConfigTimeThresholdViolationsInSequence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    time_window: cdktf.numberToTerraform(struct!.timeWindow),
  }
}


export function websiteAlertConfigTimeThresholdViolationsInSequenceToHclTerraform(struct?: WebsiteAlertConfigTimeThresholdViolationsInSequenceOutputReference | WebsiteAlertConfigTimeThresholdViolationsInSequence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    time_window: {
      value: cdktf.numberToHclTerraform(struct!.timeWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebsiteAlertConfigTimeThresholdViolationsInSequenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebsiteAlertConfigTimeThresholdViolationsInSequence | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timeWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeWindow = this._timeWindow;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebsiteAlertConfigTimeThresholdViolationsInSequence | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._timeWindow = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._timeWindow = value.timeWindow;
    }
  }

  // time_window - computed: false, optional: true, required: false
  private _timeWindow?: number; 
  public get timeWindow() {
    return this.getNumberAttribute('time_window');
  }
  public set timeWindow(value: number) {
    this._timeWindow = value;
  }
  public resetTimeWindow() {
    this._timeWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeWindowInput() {
    return this._timeWindow;
  }
}
export interface WebsiteAlertConfigTimeThreshold {
  /**
  * user_impact_of_violations_in_sequence block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/website_alert_config#user_impact_of_violations_in_sequence WebsiteAlertConfig#user_impact_of_violations_in_sequence}
  */
  readonly userImpactOfViolationsInSequence?: WebsiteAlertConfigTimeThresholdUserImpactOfViolationsInSequence;
  /**
  * violations_in_period block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/website_alert_config#violations_in_period WebsiteAlertConfig#violations_in_period}
  */
  readonly violationsInPeriod?: WebsiteAlertConfigTimeThresholdViolationsInPeriod;
  /**
  * violations_in_sequence block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/website_alert_config#violations_in_sequence WebsiteAlertConfig#violations_in_sequence}
  */
  readonly violationsInSequence?: WebsiteAlertConfigTimeThresholdViolationsInSequence;
}

export function websiteAlertConfigTimeThresholdToTerraform(struct?: WebsiteAlertConfigTimeThresholdOutputReference | WebsiteAlertConfigTimeThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    user_impact_of_violations_in_sequence: websiteAlertConfigTimeThresholdUserImpactOfViolationsInSequenceToTerraform(struct!.userImpactOfViolationsInSequence),
    violations_in_period: websiteAlertConfigTimeThresholdViolationsInPeriodToTerraform(struct!.violationsInPeriod),
    violations_in_sequence: websiteAlertConfigTimeThresholdViolationsInSequenceToTerraform(struct!.violationsInSequence),
  }
}


export function websiteAlertConfigTimeThresholdToHclTerraform(struct?: WebsiteAlertConfigTimeThresholdOutputReference | WebsiteAlertConfigTimeThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    user_impact_of_violations_in_sequence: {
      value: websiteAlertConfigTimeThresholdUserImpactOfViolationsInSequenceToHclTerraform(struct!.userImpactOfViolationsInSequence),
      isBlock: true,
      type: "list",
      storageClassType: "WebsiteAlertConfigTimeThresholdUserImpactOfViolationsInSequenceList",
    },
    violations_in_period: {
      value: websiteAlertConfigTimeThresholdViolationsInPeriodToHclTerraform(struct!.violationsInPeriod),
      isBlock: true,
      type: "list",
      storageClassType: "WebsiteAlertConfigTimeThresholdViolationsInPeriodList",
    },
    violations_in_sequence: {
      value: websiteAlertConfigTimeThresholdViolationsInSequenceToHclTerraform(struct!.violationsInSequence),
      isBlock: true,
      type: "list",
      storageClassType: "WebsiteAlertConfigTimeThresholdViolationsInSequenceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebsiteAlertConfigTimeThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebsiteAlertConfigTimeThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._userImpactOfViolationsInSequence?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userImpactOfViolationsInSequence = this._userImpactOfViolationsInSequence?.internalValue;
    }
    if (this._violationsInPeriod?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.violationsInPeriod = this._violationsInPeriod?.internalValue;
    }
    if (this._violationsInSequence?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.violationsInSequence = this._violationsInSequence?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebsiteAlertConfigTimeThreshold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._userImpactOfViolationsInSequence.internalValue = undefined;
      this._violationsInPeriod.internalValue = undefined;
      this._violationsInSequence.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._userImpactOfViolationsInSequence.internalValue = value.userImpactOfViolationsInSequence;
      this._violationsInPeriod.internalValue = value.violationsInPeriod;
      this._violationsInSequence.internalValue = value.violationsInSequence;
    }
  }

  // user_impact_of_violations_in_sequence - computed: false, optional: true, required: false
  private _userImpactOfViolationsInSequence = new WebsiteAlertConfigTimeThresholdUserImpactOfViolationsInSequenceOutputReference(this, "user_impact_of_violations_in_sequence");
  public get userImpactOfViolationsInSequence() {
    return this._userImpactOfViolationsInSequence;
  }
  public putUserImpactOfViolationsInSequence(value: WebsiteAlertConfigTimeThresholdUserImpactOfViolationsInSequence) {
    this._userImpactOfViolationsInSequence.internalValue = value;
  }
  public resetUserImpactOfViolationsInSequence() {
    this._userImpactOfViolationsInSequence.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userImpactOfViolationsInSequenceInput() {
    return this._userImpactOfViolationsInSequence.internalValue;
  }

  // violations_in_period - computed: false, optional: true, required: false
  private _violationsInPeriod = new WebsiteAlertConfigTimeThresholdViolationsInPeriodOutputReference(this, "violations_in_period");
  public get violationsInPeriod() {
    return this._violationsInPeriod;
  }
  public putViolationsInPeriod(value: WebsiteAlertConfigTimeThresholdViolationsInPeriod) {
    this._violationsInPeriod.internalValue = value;
  }
  public resetViolationsInPeriod() {
    this._violationsInPeriod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get violationsInPeriodInput() {
    return this._violationsInPeriod.internalValue;
  }

  // violations_in_sequence - computed: false, optional: true, required: false
  private _violationsInSequence = new WebsiteAlertConfigTimeThresholdViolationsInSequenceOutputReference(this, "violations_in_sequence");
  public get violationsInSequence() {
    return this._violationsInSequence;
  }
  public putViolationsInSequence(value: WebsiteAlertConfigTimeThresholdViolationsInSequence) {
    this._violationsInSequence.internalValue = value;
  }
  public resetViolationsInSequence() {
    this._violationsInSequence.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get violationsInSequenceInput() {
    return this._violationsInSequence.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/website_alert_config instana_website_alert_config}
*/
export class WebsiteAlertConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "instana_website_alert_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WebsiteAlertConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WebsiteAlertConfig to import
  * @param importFromId The id of the existing WebsiteAlertConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/website_alert_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WebsiteAlertConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "instana_website_alert_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/website_alert_config instana_website_alert_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WebsiteAlertConfigConfig
  */
  public constructor(scope: Construct, id: string, config: WebsiteAlertConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'instana_website_alert_config',
      terraformGeneratorMetadata: {
        providerName: 'instana',
        providerVersion: '3.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alertChannelIds = config.alertChannelIds;
    this._description = config.description;
    this._granularity = config.granularity;
    this._id = config.id;
    this._name = config.name;
    this._severity = config.severity;
    this._tagFilter = config.tagFilter;
    this._triggering = config.triggering;
    this._websiteId = config.websiteId;
    this._customPayloadField.internalValue = config.customPayloadField;
    this._rule.internalValue = config.rule;
    this._threshold.internalValue = config.threshold;
    this._timeThreshold.internalValue = config.timeThreshold;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alert_channel_ids - computed: false, optional: true, required: false
  private _alertChannelIds?: string[]; 
  public get alertChannelIds() {
    return cdktf.Fn.tolist(this.getListAttribute('alert_channel_ids'));
  }
  public set alertChannelIds(value: string[]) {
    this._alertChannelIds = value;
  }
  public resetAlertChannelIds() {
    this._alertChannelIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertChannelIdsInput() {
    return this._alertChannelIds;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // granularity - computed: false, optional: true, required: false
  private _granularity?: number; 
  public get granularity() {
    return this.getNumberAttribute('granularity');
  }
  public set granularity(value: number) {
    this._granularity = value;
  }
  public resetGranularity() {
    this._granularity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get granularityInput() {
    return this._granularity;
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

  // severity - computed: false, optional: false, required: true
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // tag_filter - computed: false, optional: true, required: false
  private _tagFilter?: string; 
  public get tagFilter() {
    return this.getStringAttribute('tag_filter');
  }
  public set tagFilter(value: string) {
    this._tagFilter = value;
  }
  public resetTagFilter() {
    this._tagFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagFilterInput() {
    return this._tagFilter;
  }

  // triggering - computed: false, optional: true, required: false
  private _triggering?: boolean | cdktf.IResolvable; 
  public get triggering() {
    return this.getBooleanAttribute('triggering');
  }
  public set triggering(value: boolean | cdktf.IResolvable) {
    this._triggering = value;
  }
  public resetTriggering() {
    this._triggering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggeringInput() {
    return this._triggering;
  }

  // website_id - computed: false, optional: false, required: true
  private _websiteId?: string; 
  public get websiteId() {
    return this.getStringAttribute('website_id');
  }
  public set websiteId(value: string) {
    this._websiteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get websiteIdInput() {
    return this._websiteId;
  }

  // custom_payload_field - computed: false, optional: true, required: false
  private _customPayloadField = new WebsiteAlertConfigCustomPayloadFieldList(this, "custom_payload_field", true);
  public get customPayloadField() {
    return this._customPayloadField;
  }
  public putCustomPayloadField(value: WebsiteAlertConfigCustomPayloadField[] | cdktf.IResolvable) {
    this._customPayloadField.internalValue = value;
  }
  public resetCustomPayloadField() {
    this._customPayloadField.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPayloadFieldInput() {
    return this._customPayloadField.internalValue;
  }

  // rule - computed: false, optional: false, required: true
  private _rule = new WebsiteAlertConfigRuleOutputReference(this, "rule");
  public get rule() {
    return this._rule;
  }
  public putRule(value: WebsiteAlertConfigRule) {
    this._rule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }

  // threshold - computed: false, optional: false, required: true
  private _threshold = new WebsiteAlertConfigThresholdOutputReference(this, "threshold");
  public get threshold() {
    return this._threshold;
  }
  public putThreshold(value: WebsiteAlertConfigThreshold) {
    this._threshold.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold.internalValue;
  }

  // time_threshold - computed: false, optional: false, required: true
  private _timeThreshold = new WebsiteAlertConfigTimeThresholdOutputReference(this, "time_threshold");
  public get timeThreshold() {
    return this._timeThreshold;
  }
  public putTimeThreshold(value: WebsiteAlertConfigTimeThreshold) {
    this._timeThreshold.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeThresholdInput() {
    return this._timeThreshold.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alert_channel_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._alertChannelIds),
      description: cdktf.stringToTerraform(this._description),
      granularity: cdktf.numberToTerraform(this._granularity),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      severity: cdktf.stringToTerraform(this._severity),
      tag_filter: cdktf.stringToTerraform(this._tagFilter),
      triggering: cdktf.booleanToTerraform(this._triggering),
      website_id: cdktf.stringToTerraform(this._websiteId),
      custom_payload_field: cdktf.listMapper(websiteAlertConfigCustomPayloadFieldToTerraform, true)(this._customPayloadField.internalValue),
      rule: websiteAlertConfigRuleToTerraform(this._rule.internalValue),
      threshold: websiteAlertConfigThresholdToTerraform(this._threshold.internalValue),
      time_threshold: websiteAlertConfigTimeThresholdToTerraform(this._timeThreshold.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alert_channel_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._alertChannelIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      granularity: {
        value: cdktf.numberToHclTerraform(this._granularity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      severity: {
        value: cdktf.stringToHclTerraform(this._severity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag_filter: {
        value: cdktf.stringToHclTerraform(this._tagFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      triggering: {
        value: cdktf.booleanToHclTerraform(this._triggering),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      website_id: {
        value: cdktf.stringToHclTerraform(this._websiteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_payload_field: {
        value: cdktf.listMapperHcl(websiteAlertConfigCustomPayloadFieldToHclTerraform, true)(this._customPayloadField.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WebsiteAlertConfigCustomPayloadFieldList",
      },
      rule: {
        value: websiteAlertConfigRuleToHclTerraform(this._rule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WebsiteAlertConfigRuleList",
      },
      threshold: {
        value: websiteAlertConfigThresholdToHclTerraform(this._threshold.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WebsiteAlertConfigThresholdList",
      },
      time_threshold: {
        value: websiteAlertConfigTimeThresholdToHclTerraform(this._timeThreshold.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WebsiteAlertConfigTimeThresholdList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
