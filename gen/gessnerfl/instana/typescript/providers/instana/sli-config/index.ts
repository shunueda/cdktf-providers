// https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/sli_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SliConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/sli_config#id SliConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Initial evaluation timestamp for the SLI config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/sli_config#initial_evaluation_timestamp SliConfig#initial_evaluation_timestamp}
  */
  readonly initialEvaluationTimestamp?: number;
  /**
  * The name of the SLI config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/sli_config#name SliConfig#name}
  */
  readonly name: string;
  /**
  * metric_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/sli_config#metric_configuration SliConfig#metric_configuration}
  */
  readonly metricConfiguration?: SliConfigMetricConfiguration;
  /**
  * sli_entity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/sli_config#sli_entity SliConfig#sli_entity}
  */
  readonly sliEntity: SliConfigSliEntity;
}
export interface SliConfigMetricConfiguration {
  /**
  * The aggregation type for the metric configuration (SUM, MEAN, MAX, MIN, P25, P50, P75, P90, P95, P98, P99, P99_9, P99_99, DISTRIBUTION, DISTINCT_COUNT, SUM_POSITIVE, PER_SECOND)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/sli_config#aggregation SliConfig#aggregation}
  */
  readonly aggregation: string;
  /**
  * The metric name for the metric configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/sli_config#metric_name SliConfig#metric_name}
  */
  readonly metricName: string;
  /**
  * The threshold for the metric configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/sli_config#threshold SliConfig#threshold}
  */
  readonly threshold: number;
}

export function sliConfigMetricConfigurationToTerraform(struct?: SliConfigMetricConfigurationOutputReference | SliConfigMetricConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    threshold: cdktf.numberToTerraform(struct!.threshold),
  }
}


export function sliConfigMetricConfigurationToHclTerraform(struct?: SliConfigMetricConfigurationOutputReference | SliConfigMetricConfiguration): any {
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
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SliConfigMetricConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SliConfigMetricConfiguration | undefined {
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
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SliConfigMetricConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregation = undefined;
      this._metricName = undefined;
      this._threshold = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregation = value.aggregation;
      this._metricName = value.metricName;
      this._threshold = value.threshold;
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

  // threshold - computed: false, optional: false, required: true
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }
}
export interface SliConfigSliEntityApplicationEventBased {
  /**
  * The application ID of the entity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/sli_config#application_id SliConfig#application_id}
  */
  readonly applicationId: string;
  /**
  * The tag filter expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/sli_config#bad_event_filter_expression SliConfig#bad_event_filter_expression}
  */
  readonly badEventFilterExpression: string;
  /**
  * The boundary scope for the entity configuration (ALL, INBOUND)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/sli_config#boundary_scope SliConfig#boundary_scope}
  */
  readonly boundaryScope: string;
  /**
  * The tag filter expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/sli_config#good_event_filter_expression SliConfig#good_event_filter_expression}
  */
  readonly goodEventFilterExpression: string;
  /**
  * Optional flag to indicate whether also internal calls are included
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/sli_config#include_internal SliConfig#include_internal}
  */
  readonly includeInternal?: boolean | cdktf.IResolvable;
  /**
  * Optional flag to indicate whether also synthetic calls are included in the scope or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/sli_config#include_synthetic SliConfig#include_synthetic}
  */
  readonly includeSynthetic?: boolean | cdktf.IResolvable;
}

export function sliConfigSliEntityApplicationEventBasedToTerraform(struct?: SliConfigSliEntityApplicationEventBasedOutputReference | SliConfigSliEntityApplicationEventBased): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_id: cdktf.stringToTerraform(struct!.applicationId),
    bad_event_filter_expression: cdktf.stringToTerraform(struct!.badEventFilterExpression),
    boundary_scope: cdktf.stringToTerraform(struct!.boundaryScope),
    good_event_filter_expression: cdktf.stringToTerraform(struct!.goodEventFilterExpression),
    include_internal: cdktf.booleanToTerraform(struct!.includeInternal),
    include_synthetic: cdktf.booleanToTerraform(struct!.includeSynthetic),
  }
}


export function sliConfigSliEntityApplicationEventBasedToHclTerraform(struct?: SliConfigSliEntityApplicationEventBasedOutputReference | SliConfigSliEntityApplicationEventBased): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_id: {
      value: cdktf.stringToHclTerraform(struct!.applicationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bad_event_filter_expression: {
      value: cdktf.stringToHclTerraform(struct!.badEventFilterExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    boundary_scope: {
      value: cdktf.stringToHclTerraform(struct!.boundaryScope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    good_event_filter_expression: {
      value: cdktf.stringToHclTerraform(struct!.goodEventFilterExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include_internal: {
      value: cdktf.booleanToHclTerraform(struct!.includeInternal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_synthetic: {
      value: cdktf.booleanToHclTerraform(struct!.includeSynthetic),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SliConfigSliEntityApplicationEventBasedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SliConfigSliEntityApplicationEventBased | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationId = this._applicationId;
    }
    if (this._badEventFilterExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.badEventFilterExpression = this._badEventFilterExpression;
    }
    if (this._boundaryScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.boundaryScope = this._boundaryScope;
    }
    if (this._goodEventFilterExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.goodEventFilterExpression = this._goodEventFilterExpression;
    }
    if (this._includeInternal !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeInternal = this._includeInternal;
    }
    if (this._includeSynthetic !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeSynthetic = this._includeSynthetic;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SliConfigSliEntityApplicationEventBased | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._applicationId = undefined;
      this._badEventFilterExpression = undefined;
      this._boundaryScope = undefined;
      this._goodEventFilterExpression = undefined;
      this._includeInternal = undefined;
      this._includeSynthetic = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._applicationId = value.applicationId;
      this._badEventFilterExpression = value.badEventFilterExpression;
      this._boundaryScope = value.boundaryScope;
      this._goodEventFilterExpression = value.goodEventFilterExpression;
      this._includeInternal = value.includeInternal;
      this._includeSynthetic = value.includeSynthetic;
    }
  }

  // application_id - computed: false, optional: false, required: true
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // bad_event_filter_expression - computed: false, optional: false, required: true
  private _badEventFilterExpression?: string; 
  public get badEventFilterExpression() {
    return this.getStringAttribute('bad_event_filter_expression');
  }
  public set badEventFilterExpression(value: string) {
    this._badEventFilterExpression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get badEventFilterExpressionInput() {
    return this._badEventFilterExpression;
  }

  // boundary_scope - computed: false, optional: false, required: true
  private _boundaryScope?: string; 
  public get boundaryScope() {
    return this.getStringAttribute('boundary_scope');
  }
  public set boundaryScope(value: string) {
    this._boundaryScope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get boundaryScopeInput() {
    return this._boundaryScope;
  }

  // good_event_filter_expression - computed: false, optional: false, required: true
  private _goodEventFilterExpression?: string; 
  public get goodEventFilterExpression() {
    return this.getStringAttribute('good_event_filter_expression');
  }
  public set goodEventFilterExpression(value: string) {
    this._goodEventFilterExpression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get goodEventFilterExpressionInput() {
    return this._goodEventFilterExpression;
  }

  // include_internal - computed: false, optional: true, required: false
  private _includeInternal?: boolean | cdktf.IResolvable; 
  public get includeInternal() {
    return this.getBooleanAttribute('include_internal');
  }
  public set includeInternal(value: boolean | cdktf.IResolvable) {
    this._includeInternal = value;
  }
  public resetIncludeInternal() {
    this._includeInternal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInternalInput() {
    return this._includeInternal;
  }

  // include_synthetic - computed: false, optional: true, required: false
  private _includeSynthetic?: boolean | cdktf.IResolvable; 
  public get includeSynthetic() {
    return this.getBooleanAttribute('include_synthetic');
  }
  public set includeSynthetic(value: boolean | cdktf.IResolvable) {
    this._includeSynthetic = value;
  }
  public resetIncludeSynthetic() {
    this._includeSynthetic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeSyntheticInput() {
    return this._includeSynthetic;
  }
}
export interface SliConfigSliEntityApplicationTimeBased {
  /**
  * The application ID of the entity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/sli_config#application_id SliConfig#application_id}
  */
  readonly applicationId: string;
  /**
  * The boundary scope for the entity configuration (ALL, INBOUND)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/sli_config#boundary_scope SliConfig#boundary_scope}
  */
  readonly boundaryScope: string;
  /**
  * The endpoint ID of the entity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/sli_config#endpoint_id SliConfig#endpoint_id}
  */
  readonly endpointId?: string;
  /**
  * The service ID of the entity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/sli_config#service_id SliConfig#service_id}
  */
  readonly serviceId?: string;
}

export function sliConfigSliEntityApplicationTimeBasedToTerraform(struct?: SliConfigSliEntityApplicationTimeBasedOutputReference | SliConfigSliEntityApplicationTimeBased): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_id: cdktf.stringToTerraform(struct!.applicationId),
    boundary_scope: cdktf.stringToTerraform(struct!.boundaryScope),
    endpoint_id: cdktf.stringToTerraform(struct!.endpointId),
    service_id: cdktf.stringToTerraform(struct!.serviceId),
  }
}


export function sliConfigSliEntityApplicationTimeBasedToHclTerraform(struct?: SliConfigSliEntityApplicationTimeBasedOutputReference | SliConfigSliEntityApplicationTimeBased): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_id: {
      value: cdktf.stringToHclTerraform(struct!.applicationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    boundary_scope: {
      value: cdktf.stringToHclTerraform(struct!.boundaryScope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint_id: {
      value: cdktf.stringToHclTerraform(struct!.endpointId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_id: {
      value: cdktf.stringToHclTerraform(struct!.serviceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SliConfigSliEntityApplicationTimeBasedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SliConfigSliEntityApplicationTimeBased | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationId = this._applicationId;
    }
    if (this._boundaryScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.boundaryScope = this._boundaryScope;
    }
    if (this._endpointId !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointId = this._endpointId;
    }
    if (this._serviceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceId = this._serviceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SliConfigSliEntityApplicationTimeBased | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._applicationId = undefined;
      this._boundaryScope = undefined;
      this._endpointId = undefined;
      this._serviceId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._applicationId = value.applicationId;
      this._boundaryScope = value.boundaryScope;
      this._endpointId = value.endpointId;
      this._serviceId = value.serviceId;
    }
  }

  // application_id - computed: false, optional: false, required: true
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // boundary_scope - computed: false, optional: false, required: true
  private _boundaryScope?: string; 
  public get boundaryScope() {
    return this.getStringAttribute('boundary_scope');
  }
  public set boundaryScope(value: string) {
    this._boundaryScope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get boundaryScopeInput() {
    return this._boundaryScope;
  }

  // endpoint_id - computed: false, optional: true, required: false
  private _endpointId?: string; 
  public get endpointId() {
    return this.getStringAttribute('endpoint_id');
  }
  public set endpointId(value: string) {
    this._endpointId = value;
  }
  public resetEndpointId() {
    this._endpointId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointIdInput() {
    return this._endpointId;
  }

  // service_id - computed: false, optional: true, required: false
  private _serviceId?: string; 
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }
  public set serviceId(value: string) {
    this._serviceId = value;
  }
  public resetServiceId() {
    this._serviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdInput() {
    return this._serviceId;
  }
}
export interface SliConfigSliEntityWebsiteEventBased {
  /**
  * The tag filter expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/sli_config#bad_event_filter_expression SliConfig#bad_event_filter_expression}
  */
  readonly badEventFilterExpression: string;
  /**
  * The beacon type for the entity configuration (pageLoad, resourceLoad, httpRequest, error, custom, pageChange)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/sli_config#beacon_type SliConfig#beacon_type}
  */
  readonly beaconType: string;
  /**
  * The tag filter expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/sli_config#good_event_filter_expression SliConfig#good_event_filter_expression}
  */
  readonly goodEventFilterExpression: string;
  /**
  * The website ID of the entity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/sli_config#website_id SliConfig#website_id}
  */
  readonly websiteId: string;
}

export function sliConfigSliEntityWebsiteEventBasedToTerraform(struct?: SliConfigSliEntityWebsiteEventBasedOutputReference | SliConfigSliEntityWebsiteEventBased): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bad_event_filter_expression: cdktf.stringToTerraform(struct!.badEventFilterExpression),
    beacon_type: cdktf.stringToTerraform(struct!.beaconType),
    good_event_filter_expression: cdktf.stringToTerraform(struct!.goodEventFilterExpression),
    website_id: cdktf.stringToTerraform(struct!.websiteId),
  }
}


export function sliConfigSliEntityWebsiteEventBasedToHclTerraform(struct?: SliConfigSliEntityWebsiteEventBasedOutputReference | SliConfigSliEntityWebsiteEventBased): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bad_event_filter_expression: {
      value: cdktf.stringToHclTerraform(struct!.badEventFilterExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    beacon_type: {
      value: cdktf.stringToHclTerraform(struct!.beaconType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    good_event_filter_expression: {
      value: cdktf.stringToHclTerraform(struct!.goodEventFilterExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    website_id: {
      value: cdktf.stringToHclTerraform(struct!.websiteId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SliConfigSliEntityWebsiteEventBasedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SliConfigSliEntityWebsiteEventBased | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._badEventFilterExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.badEventFilterExpression = this._badEventFilterExpression;
    }
    if (this._beaconType !== undefined) {
      hasAnyValues = true;
      internalValueResult.beaconType = this._beaconType;
    }
    if (this._goodEventFilterExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.goodEventFilterExpression = this._goodEventFilterExpression;
    }
    if (this._websiteId !== undefined) {
      hasAnyValues = true;
      internalValueResult.websiteId = this._websiteId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SliConfigSliEntityWebsiteEventBased | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._badEventFilterExpression = undefined;
      this._beaconType = undefined;
      this._goodEventFilterExpression = undefined;
      this._websiteId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._badEventFilterExpression = value.badEventFilterExpression;
      this._beaconType = value.beaconType;
      this._goodEventFilterExpression = value.goodEventFilterExpression;
      this._websiteId = value.websiteId;
    }
  }

  // bad_event_filter_expression - computed: false, optional: false, required: true
  private _badEventFilterExpression?: string; 
  public get badEventFilterExpression() {
    return this.getStringAttribute('bad_event_filter_expression');
  }
  public set badEventFilterExpression(value: string) {
    this._badEventFilterExpression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get badEventFilterExpressionInput() {
    return this._badEventFilterExpression;
  }

  // beacon_type - computed: false, optional: false, required: true
  private _beaconType?: string; 
  public get beaconType() {
    return this.getStringAttribute('beacon_type');
  }
  public set beaconType(value: string) {
    this._beaconType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get beaconTypeInput() {
    return this._beaconType;
  }

  // good_event_filter_expression - computed: false, optional: false, required: true
  private _goodEventFilterExpression?: string; 
  public get goodEventFilterExpression() {
    return this.getStringAttribute('good_event_filter_expression');
  }
  public set goodEventFilterExpression(value: string) {
    this._goodEventFilterExpression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get goodEventFilterExpressionInput() {
    return this._goodEventFilterExpression;
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
}
export interface SliConfigSliEntityWebsiteTimeBased {
  /**
  * The beacon type for the entity configuration (pageLoad, resourceLoad, httpRequest, error, custom, pageChange)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/sli_config#beacon_type SliConfig#beacon_type}
  */
  readonly beaconType: string;
  /**
  * The tag filter expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/sli_config#filter_expression SliConfig#filter_expression}
  */
  readonly filterExpression?: string;
  /**
  * The website ID of the entity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/sli_config#website_id SliConfig#website_id}
  */
  readonly websiteId: string;
}

export function sliConfigSliEntityWebsiteTimeBasedToTerraform(struct?: SliConfigSliEntityWebsiteTimeBasedOutputReference | SliConfigSliEntityWebsiteTimeBased): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    beacon_type: cdktf.stringToTerraform(struct!.beaconType),
    filter_expression: cdktf.stringToTerraform(struct!.filterExpression),
    website_id: cdktf.stringToTerraform(struct!.websiteId),
  }
}


export function sliConfigSliEntityWebsiteTimeBasedToHclTerraform(struct?: SliConfigSliEntityWebsiteTimeBasedOutputReference | SliConfigSliEntityWebsiteTimeBased): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    beacon_type: {
      value: cdktf.stringToHclTerraform(struct!.beaconType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_expression: {
      value: cdktf.stringToHclTerraform(struct!.filterExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    website_id: {
      value: cdktf.stringToHclTerraform(struct!.websiteId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SliConfigSliEntityWebsiteTimeBasedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SliConfigSliEntityWebsiteTimeBased | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._beaconType !== undefined) {
      hasAnyValues = true;
      internalValueResult.beaconType = this._beaconType;
    }
    if (this._filterExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterExpression = this._filterExpression;
    }
    if (this._websiteId !== undefined) {
      hasAnyValues = true;
      internalValueResult.websiteId = this._websiteId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SliConfigSliEntityWebsiteTimeBased | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._beaconType = undefined;
      this._filterExpression = undefined;
      this._websiteId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._beaconType = value.beaconType;
      this._filterExpression = value.filterExpression;
      this._websiteId = value.websiteId;
    }
  }

  // beacon_type - computed: false, optional: false, required: true
  private _beaconType?: string; 
  public get beaconType() {
    return this.getStringAttribute('beacon_type');
  }
  public set beaconType(value: string) {
    this._beaconType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get beaconTypeInput() {
    return this._beaconType;
  }

  // filter_expression - computed: false, optional: true, required: false
  private _filterExpression?: string; 
  public get filterExpression() {
    return this.getStringAttribute('filter_expression');
  }
  public set filterExpression(value: string) {
    this._filterExpression = value;
  }
  public resetFilterExpression() {
    this._filterExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterExpressionInput() {
    return this._filterExpression;
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
}
export interface SliConfigSliEntity {
  /**
  * application_event_based block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/sli_config#application_event_based SliConfig#application_event_based}
  */
  readonly applicationEventBased?: SliConfigSliEntityApplicationEventBased;
  /**
  * application_time_based block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/sli_config#application_time_based SliConfig#application_time_based}
  */
  readonly applicationTimeBased?: SliConfigSliEntityApplicationTimeBased;
  /**
  * website_event_based block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/sli_config#website_event_based SliConfig#website_event_based}
  */
  readonly websiteEventBased?: SliConfigSliEntityWebsiteEventBased;
  /**
  * website_time_based block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/sli_config#website_time_based SliConfig#website_time_based}
  */
  readonly websiteTimeBased?: SliConfigSliEntityWebsiteTimeBased;
}

export function sliConfigSliEntityToTerraform(struct?: SliConfigSliEntityOutputReference | SliConfigSliEntity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_event_based: sliConfigSliEntityApplicationEventBasedToTerraform(struct!.applicationEventBased),
    application_time_based: sliConfigSliEntityApplicationTimeBasedToTerraform(struct!.applicationTimeBased),
    website_event_based: sliConfigSliEntityWebsiteEventBasedToTerraform(struct!.websiteEventBased),
    website_time_based: sliConfigSliEntityWebsiteTimeBasedToTerraform(struct!.websiteTimeBased),
  }
}


export function sliConfigSliEntityToHclTerraform(struct?: SliConfigSliEntityOutputReference | SliConfigSliEntity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_event_based: {
      value: sliConfigSliEntityApplicationEventBasedToHclTerraform(struct!.applicationEventBased),
      isBlock: true,
      type: "list",
      storageClassType: "SliConfigSliEntityApplicationEventBasedList",
    },
    application_time_based: {
      value: sliConfigSliEntityApplicationTimeBasedToHclTerraform(struct!.applicationTimeBased),
      isBlock: true,
      type: "list",
      storageClassType: "SliConfigSliEntityApplicationTimeBasedList",
    },
    website_event_based: {
      value: sliConfigSliEntityWebsiteEventBasedToHclTerraform(struct!.websiteEventBased),
      isBlock: true,
      type: "list",
      storageClassType: "SliConfigSliEntityWebsiteEventBasedList",
    },
    website_time_based: {
      value: sliConfigSliEntityWebsiteTimeBasedToHclTerraform(struct!.websiteTimeBased),
      isBlock: true,
      type: "list",
      storageClassType: "SliConfigSliEntityWebsiteTimeBasedList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SliConfigSliEntityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SliConfigSliEntity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationEventBased?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationEventBased = this._applicationEventBased?.internalValue;
    }
    if (this._applicationTimeBased?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationTimeBased = this._applicationTimeBased?.internalValue;
    }
    if (this._websiteEventBased?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.websiteEventBased = this._websiteEventBased?.internalValue;
    }
    if (this._websiteTimeBased?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.websiteTimeBased = this._websiteTimeBased?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SliConfigSliEntity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._applicationEventBased.internalValue = undefined;
      this._applicationTimeBased.internalValue = undefined;
      this._websiteEventBased.internalValue = undefined;
      this._websiteTimeBased.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._applicationEventBased.internalValue = value.applicationEventBased;
      this._applicationTimeBased.internalValue = value.applicationTimeBased;
      this._websiteEventBased.internalValue = value.websiteEventBased;
      this._websiteTimeBased.internalValue = value.websiteTimeBased;
    }
  }

  // application_event_based - computed: false, optional: true, required: false
  private _applicationEventBased = new SliConfigSliEntityApplicationEventBasedOutputReference(this, "application_event_based");
  public get applicationEventBased() {
    return this._applicationEventBased;
  }
  public putApplicationEventBased(value: SliConfigSliEntityApplicationEventBased) {
    this._applicationEventBased.internalValue = value;
  }
  public resetApplicationEventBased() {
    this._applicationEventBased.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationEventBasedInput() {
    return this._applicationEventBased.internalValue;
  }

  // application_time_based - computed: false, optional: true, required: false
  private _applicationTimeBased = new SliConfigSliEntityApplicationTimeBasedOutputReference(this, "application_time_based");
  public get applicationTimeBased() {
    return this._applicationTimeBased;
  }
  public putApplicationTimeBased(value: SliConfigSliEntityApplicationTimeBased) {
    this._applicationTimeBased.internalValue = value;
  }
  public resetApplicationTimeBased() {
    this._applicationTimeBased.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationTimeBasedInput() {
    return this._applicationTimeBased.internalValue;
  }

  // website_event_based - computed: false, optional: true, required: false
  private _websiteEventBased = new SliConfigSliEntityWebsiteEventBasedOutputReference(this, "website_event_based");
  public get websiteEventBased() {
    return this._websiteEventBased;
  }
  public putWebsiteEventBased(value: SliConfigSliEntityWebsiteEventBased) {
    this._websiteEventBased.internalValue = value;
  }
  public resetWebsiteEventBased() {
    this._websiteEventBased.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get websiteEventBasedInput() {
    return this._websiteEventBased.internalValue;
  }

  // website_time_based - computed: false, optional: true, required: false
  private _websiteTimeBased = new SliConfigSliEntityWebsiteTimeBasedOutputReference(this, "website_time_based");
  public get websiteTimeBased() {
    return this._websiteTimeBased;
  }
  public putWebsiteTimeBased(value: SliConfigSliEntityWebsiteTimeBased) {
    this._websiteTimeBased.internalValue = value;
  }
  public resetWebsiteTimeBased() {
    this._websiteTimeBased.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get websiteTimeBasedInput() {
    return this._websiteTimeBased.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/sli_config instana_sli_config}
*/
export class SliConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "instana_sli_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SliConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SliConfig to import
  * @param importFromId The id of the existing SliConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/sli_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SliConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "instana_sli_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/sli_config instana_sli_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SliConfigConfig
  */
  public constructor(scope: Construct, id: string, config: SliConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'instana_sli_config',
      terraformGeneratorMetadata: {
        providerName: 'instana',
        providerVersion: '3.0.0',
        providerVersionConstraint: '3.0.0'
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
    this._initialEvaluationTimestamp = config.initialEvaluationTimestamp;
    this._name = config.name;
    this._metricConfiguration.internalValue = config.metricConfiguration;
    this._sliEntity.internalValue = config.sliEntity;
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

  // initial_evaluation_timestamp - computed: false, optional: true, required: false
  private _initialEvaluationTimestamp?: number; 
  public get initialEvaluationTimestamp() {
    return this.getNumberAttribute('initial_evaluation_timestamp');
  }
  public set initialEvaluationTimestamp(value: number) {
    this._initialEvaluationTimestamp = value;
  }
  public resetInitialEvaluationTimestamp() {
    this._initialEvaluationTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialEvaluationTimestampInput() {
    return this._initialEvaluationTimestamp;
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

  // metric_configuration - computed: false, optional: true, required: false
  private _metricConfiguration = new SliConfigMetricConfigurationOutputReference(this, "metric_configuration");
  public get metricConfiguration() {
    return this._metricConfiguration;
  }
  public putMetricConfiguration(value: SliConfigMetricConfiguration) {
    this._metricConfiguration.internalValue = value;
  }
  public resetMetricConfiguration() {
    this._metricConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricConfigurationInput() {
    return this._metricConfiguration.internalValue;
  }

  // sli_entity - computed: false, optional: false, required: true
  private _sliEntity = new SliConfigSliEntityOutputReference(this, "sli_entity");
  public get sliEntity() {
    return this._sliEntity;
  }
  public putSliEntity(value: SliConfigSliEntity) {
    this._sliEntity.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sliEntityInput() {
    return this._sliEntity.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      initial_evaluation_timestamp: cdktf.numberToTerraform(this._initialEvaluationTimestamp),
      name: cdktf.stringToTerraform(this._name),
      metric_configuration: sliConfigMetricConfigurationToTerraform(this._metricConfiguration.internalValue),
      sli_entity: sliConfigSliEntityToTerraform(this._sliEntity.internalValue),
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
      initial_evaluation_timestamp: {
        value: cdktf.numberToHclTerraform(this._initialEvaluationTimestamp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metric_configuration: {
        value: sliConfigMetricConfigurationToHclTerraform(this._metricConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SliConfigMetricConfigurationList",
      },
      sli_entity: {
        value: sliConfigSliEntityToHclTerraform(this._sliEntity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SliConfigSliEntityList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
