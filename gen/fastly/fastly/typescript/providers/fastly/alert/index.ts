// https://registry.terraform.io/providers/fastly/fastly/8.5.0/docs/resources/alert
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AlertConfig extends cdktf.TerraformMetaArguments {
  /**
  * Additional text that is included in the alert notification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.5.0/docs/resources/alert#description Alert#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.5.0/docs/resources/alert#id Alert#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * List of integrations used to notify when alert fires.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.5.0/docs/resources/alert#integration_ids Alert#integration_ids}
  */
  readonly integrationIds?: string[];
  /**
  * The metric name to alert on for a specific source: [domains](https://developer.fastly.com/reference/api/metrics-stats/domain-inspector/historical), [origins](https://developer.fastly.com/reference/api/metrics-stats/origin-inspector/historical), or [stats](https://developer.fastly.com/reference/api/metrics-stats/historical-stats).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.5.0/docs/resources/alert#metric Alert#metric}
  */
  readonly metric: string;
  /**
  * The name of the alert.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.5.0/docs/resources/alert#name Alert#name}
  */
  readonly name: string;
  /**
  * The service which the alert monitors. Optional when using `stats` as the `source`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.5.0/docs/resources/alert#service_id Alert#service_id}
  */
  readonly serviceId?: string;
  /**
  * The source where the metric comes from. One of: `domains`, `origins`, `stats`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.5.0/docs/resources/alert#source Alert#source}
  */
  readonly source: string;
  /**
  * dimensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.5.0/docs/resources/alert#dimensions Alert#dimensions}
  */
  readonly dimensions?: AlertDimensions;
  /**
  * evaluation_strategy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.5.0/docs/resources/alert#evaluation_strategy Alert#evaluation_strategy}
  */
  readonly evaluationStrategy: AlertEvaluationStrategy;
}
export interface AlertDimensions {
  /**
  * Names of a subset of domains that the alert monitors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.5.0/docs/resources/alert#domains Alert#domains}
  */
  readonly domains?: string[];
  /**
  * Addresses of a subset of backends that the alert monitors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.5.0/docs/resources/alert#origins Alert#origins}
  */
  readonly origins?: string[];
}

export function alertDimensionsToTerraform(struct?: AlertDimensionsOutputReference | AlertDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domains: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.domains),
    origins: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.origins),
  }
}


export function alertDimensionsToHclTerraform(struct?: AlertDimensionsOutputReference | AlertDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domains: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.domains),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    origins: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.origins),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertDimensionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertDimensions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domains !== undefined) {
      hasAnyValues = true;
      internalValueResult.domains = this._domains;
    }
    if (this._origins !== undefined) {
      hasAnyValues = true;
      internalValueResult.origins = this._origins;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertDimensions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._domains = undefined;
      this._origins = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._domains = value.domains;
      this._origins = value.origins;
    }
  }

  // domains - computed: false, optional: true, required: false
  private _domains?: string[]; 
  public get domains() {
    return cdktf.Fn.tolist(this.getListAttribute('domains'));
  }
  public set domains(value: string[]) {
    this._domains = value;
  }
  public resetDomains() {
    this._domains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainsInput() {
    return this._domains;
  }

  // origins - computed: false, optional: true, required: false
  private _origins?: string[]; 
  public get origins() {
    return cdktf.Fn.tolist(this.getListAttribute('origins'));
  }
  public set origins(value: string[]) {
    this._origins = value;
  }
  public resetOrigins() {
    this._origins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originsInput() {
    return this._origins;
  }
}
export interface AlertEvaluationStrategy {
  /**
  * Threshold for the denominator value used in evaluations that calculate a rate or ratio. Usually used to filter out noise.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.5.0/docs/resources/alert#ignore_below Alert#ignore_below}
  */
  readonly ignoreBelow?: number;
  /**
  * The length of time to evaluate whether the conditions have been met. The data is polled every minute. One of: `2m`, `3m`, `5m`, `15m`, `30m`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.5.0/docs/resources/alert#period Alert#period}
  */
  readonly period: string;
  /**
  * Threshold used to alert.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.5.0/docs/resources/alert#threshold Alert#threshold}
  */
  readonly threshold: number;
  /**
  * Type of strategy to use to evaluate. One of: `above_threshold`, `all_above_threshold`, `below_threshold`, `percent_absolute`, `percent_decrease`, `percent_increase`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.5.0/docs/resources/alert#type Alert#type}
  */
  readonly type: string;
}

export function alertEvaluationStrategyToTerraform(struct?: AlertEvaluationStrategyOutputReference | AlertEvaluationStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ignore_below: cdktf.numberToTerraform(struct!.ignoreBelow),
    period: cdktf.stringToTerraform(struct!.period),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function alertEvaluationStrategyToHclTerraform(struct?: AlertEvaluationStrategyOutputReference | AlertEvaluationStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ignore_below: {
      value: cdktf.numberToHclTerraform(struct!.ignoreBelow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    period: {
      value: cdktf.stringToHclTerraform(struct!.period),
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

export class AlertEvaluationStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertEvaluationStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ignoreBelow !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreBelow = this._ignoreBelow;
    }
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertEvaluationStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ignoreBelow = undefined;
      this._period = undefined;
      this._threshold = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ignoreBelow = value.ignoreBelow;
      this._period = value.period;
      this._threshold = value.threshold;
      this._type = value.type;
    }
  }

  // ignore_below - computed: false, optional: true, required: false
  private _ignoreBelow?: number; 
  public get ignoreBelow() {
    return this.getNumberAttribute('ignore_below');
  }
  public set ignoreBelow(value: number) {
    this._ignoreBelow = value;
  }
  public resetIgnoreBelow() {
    this._ignoreBelow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreBelowInput() {
    return this._ignoreBelow;
  }

  // period - computed: false, optional: false, required: true
  private _period?: string; 
  public get period() {
    return this.getStringAttribute('period');
  }
  public set period(value: string) {
    this._period = value;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
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

/**
* Represents a {@link https://registry.terraform.io/providers/fastly/fastly/8.5.0/docs/resources/alert fastly_alert}
*/
export class Alert extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fastly_alert";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Alert resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Alert to import
  * @param importFromId The id of the existing Alert that should be imported. Refer to the {@link https://registry.terraform.io/providers/fastly/fastly/8.5.0/docs/resources/alert#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Alert to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fastly_alert", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fastly/fastly/8.5.0/docs/resources/alert fastly_alert} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AlertConfig
  */
  public constructor(scope: Construct, id: string, config: AlertConfig) {
    super(scope, id, {
      terraformResourceType: 'fastly_alert',
      terraformGeneratorMetadata: {
        providerName: 'fastly',
        providerVersion: '8.5.0',
        providerVersionConstraint: '8.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._integrationIds = config.integrationIds;
    this._metric = config.metric;
    this._name = config.name;
    this._serviceId = config.serviceId;
    this._source = config.source;
    this._dimensions.internalValue = config.dimensions;
    this._evaluationStrategy.internalValue = config.evaluationStrategy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // integration_ids - computed: false, optional: true, required: false
  private _integrationIds?: string[]; 
  public get integrationIds() {
    return cdktf.Fn.tolist(this.getListAttribute('integration_ids'));
  }
  public set integrationIds(value: string[]) {
    this._integrationIds = value;
  }
  public resetIntegrationIds() {
    this._integrationIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationIdsInput() {
    return this._integrationIds;
  }

  // metric - computed: false, optional: false, required: true
  private _metric?: string; 
  public get metric() {
    return this.getStringAttribute('metric');
  }
  public set metric(value: string) {
    this._metric = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
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

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // dimensions - computed: false, optional: true, required: false
  private _dimensions = new AlertDimensionsOutputReference(this, "dimensions");
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: AlertDimensions) {
    this._dimensions.internalValue = value;
  }
  public resetDimensions() {
    this._dimensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions.internalValue;
  }

  // evaluation_strategy - computed: false, optional: false, required: true
  private _evaluationStrategy = new AlertEvaluationStrategyOutputReference(this, "evaluation_strategy");
  public get evaluationStrategy() {
    return this._evaluationStrategy;
  }
  public putEvaluationStrategy(value: AlertEvaluationStrategy) {
    this._evaluationStrategy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationStrategyInput() {
    return this._evaluationStrategy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      integration_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._integrationIds),
      metric: cdktf.stringToTerraform(this._metric),
      name: cdktf.stringToTerraform(this._name),
      service_id: cdktf.stringToTerraform(this._serviceId),
      source: cdktf.stringToTerraform(this._source),
      dimensions: alertDimensionsToTerraform(this._dimensions.internalValue),
      evaluation_strategy: alertEvaluationStrategyToTerraform(this._evaluationStrategy.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      integration_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._integrationIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      metric: {
        value: cdktf.stringToHclTerraform(this._metric),
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
      service_id: {
        value: cdktf.stringToHclTerraform(this._serviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source: {
        value: cdktf.stringToHclTerraform(this._source),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dimensions: {
        value: alertDimensionsToHclTerraform(this._dimensions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlertDimensionsList",
      },
      evaluation_strategy: {
        value: alertEvaluationStrategyToHclTerraform(this._evaluationStrategy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlertEvaluationStrategyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
