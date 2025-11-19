// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/aws_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AwsServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * the ID of the AWS credentials this supported service belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/aws_service#credentials_id AwsService#credentials_id}
  */
  readonly credentialsId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/aws_service#id AwsService#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the supporting service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/aws_service#name AwsService#name}
  */
  readonly name?: string;
  /**
  * If `true` Terraform will negotiate with the Dynatrace API about the recommended/enforced metrics to be applied. Any `metric` specified will be therefore ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/aws_service#use_recommended_metrics AwsService#use_recommended_metrics}
  */
  readonly useRecommendedMetrics?: boolean | cdktf.IResolvable;
  /**
  * metric block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/aws_service#metric AwsService#metric}
  */
  readonly metric?: AwsServiceMetric[] | cdktf.IResolvable;
}
export interface AwsServiceMetric {
  /**
  * a list of metric's dimensions names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/aws_service#dimensions AwsService#dimensions}
  */
  readonly dimensions: string[];
  /**
  * the name of the metric of the supporting service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/aws_service#name AwsService#name}
  */
  readonly name: string;
  /**
  * Possible values are `AVERAGE`, `AVG_MIN_MAX`, `MAXIMUM`, `MINIMUM`, `SAMPLE_COUNT` and `SUM`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/aws_service#statistic AwsService#statistic}
  */
  readonly statistic: string;
}

export function awsServiceMetricToTerraform(struct?: AwsServiceMetric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimensions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dimensions),
    name: cdktf.stringToTerraform(struct!.name),
    statistic: cdktf.stringToTerraform(struct!.statistic),
  }
}


export function awsServiceMetricToHclTerraform(struct?: AwsServiceMetric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimensions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dimensions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    statistic: {
      value: cdktf.stringToHclTerraform(struct!.statistic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsServiceMetricOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AwsServiceMetric | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimensions !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensions = this._dimensions;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._statistic !== undefined) {
      hasAnyValues = true;
      internalValueResult.statistic = this._statistic;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsServiceMetric | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dimensions = undefined;
      this._name = undefined;
      this._statistic = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dimensions = value.dimensions;
      this._name = value.name;
      this._statistic = value.statistic;
    }
  }

  // dimensions - computed: false, optional: false, required: true
  private _dimensions?: string[]; 
  public get dimensions() {
    return this.getListAttribute('dimensions');
  }
  public set dimensions(value: string[]) {
    this._dimensions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions;
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

  // statistic - computed: false, optional: false, required: true
  private _statistic?: string; 
  public get statistic() {
    return this.getStringAttribute('statistic');
  }
  public set statistic(value: string) {
    this._statistic = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statisticInput() {
    return this._statistic;
  }
}

export class AwsServiceMetricList extends cdktf.ComplexList {
  public internalValue? : AwsServiceMetric[] | cdktf.IResolvable

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
  public get(index: number): AwsServiceMetricOutputReference {
    return new AwsServiceMetricOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/aws_service dynatrace_aws_service}
*/
export class AwsService extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_aws_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AwsService resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsService to import
  * @param importFromId The id of the existing AwsService that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/aws_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsService to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_aws_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/aws_service dynatrace_aws_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsServiceConfig
  */
  public constructor(scope: Construct, id: string, config: AwsServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_aws_service',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.88.0',
        providerVersionConstraint: '1.88.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._credentialsId = config.credentialsId;
    this._id = config.id;
    this._name = config.name;
    this._useRecommendedMetrics = config.useRecommendedMetrics;
    this._metric.internalValue = config.metric;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // built_in - computed: true, optional: false, required: false
  public get builtIn() {
    return this.getBooleanAttribute('built_in');
  }

  // credentials_id - computed: false, optional: false, required: true
  private _credentialsId?: string; 
  public get credentialsId() {
    return this.getStringAttribute('credentials_id');
  }
  public set credentialsId(value: string) {
    this._credentialsId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsIdInput() {
    return this._credentialsId;
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

  // required_metrics - computed: true, optional: false, required: false
  public get requiredMetrics() {
    return this.getStringAttribute('required_metrics');
  }

  // use_recommended_metrics - computed: false, optional: true, required: false
  private _useRecommendedMetrics?: boolean | cdktf.IResolvable; 
  public get useRecommendedMetrics() {
    return this.getBooleanAttribute('use_recommended_metrics');
  }
  public set useRecommendedMetrics(value: boolean | cdktf.IResolvable) {
    this._useRecommendedMetrics = value;
  }
  public resetUseRecommendedMetrics() {
    this._useRecommendedMetrics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useRecommendedMetricsInput() {
    return this._useRecommendedMetrics;
  }

  // metric - computed: false, optional: true, required: false
  private _metric = new AwsServiceMetricList(this, "metric", true);
  public get metric() {
    return this._metric;
  }
  public putMetric(value: AwsServiceMetric[] | cdktf.IResolvable) {
    this._metric.internalValue = value;
  }
  public resetMetric() {
    this._metric.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      credentials_id: cdktf.stringToTerraform(this._credentialsId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      use_recommended_metrics: cdktf.booleanToTerraform(this._useRecommendedMetrics),
      metric: cdktf.listMapper(awsServiceMetricToTerraform, true)(this._metric.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      credentials_id: {
        value: cdktf.stringToHclTerraform(this._credentialsId),
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
      use_recommended_metrics: {
        value: cdktf.booleanToHclTerraform(this._useRecommendedMetrics),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      metric: {
        value: cdktf.listMapperHcl(awsServiceMetricToHclTerraform, true)(this._metric.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AwsServiceMetricList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
