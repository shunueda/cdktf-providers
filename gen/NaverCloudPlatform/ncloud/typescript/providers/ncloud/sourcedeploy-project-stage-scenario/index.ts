// https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcedeploy_project_stage_scenario
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SourcedeployProjectStageScenarioConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcedeploy_project_stage_scenario#description SourcedeployProjectStageScenario#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcedeploy_project_stage_scenario#id SourcedeployProjectStageScenario#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcedeploy_project_stage_scenario#name SourcedeployProjectStageScenario#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcedeploy_project_stage_scenario#project_id SourcedeployProjectStageScenario#project_id}
  */
  readonly projectId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcedeploy_project_stage_scenario#stage_id SourcedeployProjectStageScenario#stage_id}
  */
  readonly stageId: number;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcedeploy_project_stage_scenario#config SourcedeployProjectStageScenario#config}
  */
  readonly config: SourcedeployProjectStageScenarioConfigA;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcedeploy_project_stage_scenario#timeouts SourcedeployProjectStageScenario#timeouts}
  */
  readonly timeouts?: SourcedeployProjectStageScenarioTimeouts;
}
export interface SourcedeployProjectStageScenarioConfigCanaryConfigAnalysisConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcedeploy_project_stage_scenario#delay SourcedeployProjectStageScenario#delay}
  */
  readonly delay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcedeploy_project_stage_scenario#duration SourcedeployProjectStageScenario#duration}
  */
  readonly duration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcedeploy_project_stage_scenario#interval SourcedeployProjectStageScenario#interval}
  */
  readonly interval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcedeploy_project_stage_scenario#step SourcedeployProjectStageScenario#step}
  */
  readonly step?: number;
}

export function sourcedeployProjectStageScenarioConfigCanaryConfigAnalysisConfigToTerraform(struct?: SourcedeployProjectStageScenarioConfigCanaryConfigAnalysisConfigOutputReference | SourcedeployProjectStageScenarioConfigCanaryConfigAnalysisConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delay: cdktf.numberToTerraform(struct!.delay),
    duration: cdktf.numberToTerraform(struct!.duration),
    interval: cdktf.numberToTerraform(struct!.interval),
    step: cdktf.numberToTerraform(struct!.step),
  }
}


export function sourcedeployProjectStageScenarioConfigCanaryConfigAnalysisConfigToHclTerraform(struct?: SourcedeployProjectStageScenarioConfigCanaryConfigAnalysisConfigOutputReference | SourcedeployProjectStageScenarioConfigCanaryConfigAnalysisConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delay: {
      value: cdktf.numberToHclTerraform(struct!.delay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    step: {
      value: cdktf.numberToHclTerraform(struct!.step),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourcedeployProjectStageScenarioConfigCanaryConfigAnalysisConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SourcedeployProjectStageScenarioConfigCanaryConfigAnalysisConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delay !== undefined) {
      hasAnyValues = true;
      internalValueResult.delay = this._delay;
    }
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._step !== undefined) {
      hasAnyValues = true;
      internalValueResult.step = this._step;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourcedeployProjectStageScenarioConfigCanaryConfigAnalysisConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._delay = undefined;
      this._duration = undefined;
      this._interval = undefined;
      this._step = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._delay = value.delay;
      this._duration = value.duration;
      this._interval = value.interval;
      this._step = value.step;
    }
  }

  // delay - computed: false, optional: true, required: false
  private _delay?: number; 
  public get delay() {
    return this.getNumberAttribute('delay');
  }
  public set delay(value: number) {
    this._delay = value;
  }
  public resetDelay() {
    this._delay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayInput() {
    return this._delay;
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // step - computed: false, optional: true, required: false
  private _step?: number; 
  public get step() {
    return this.getNumberAttribute('step');
  }
  public set step(value: number) {
    this._step = value;
  }
  public resetStep() {
    this._step = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepInput() {
    return this._step;
  }
}
export interface SourcedeployProjectStageScenarioConfigCanaryConfigEnv {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcedeploy_project_stage_scenario#baseline SourcedeployProjectStageScenario#baseline}
  */
  readonly baseline?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcedeploy_project_stage_scenario#canary SourcedeployProjectStageScenario#canary}
  */
  readonly canary?: string;
}

export function sourcedeployProjectStageScenarioConfigCanaryConfigEnvToTerraform(struct?: SourcedeployProjectStageScenarioConfigCanaryConfigEnvOutputReference | SourcedeployProjectStageScenarioConfigCanaryConfigEnv): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    baseline: cdktf.stringToTerraform(struct!.baseline),
    canary: cdktf.stringToTerraform(struct!.canary),
  }
}


export function sourcedeployProjectStageScenarioConfigCanaryConfigEnvToHclTerraform(struct?: SourcedeployProjectStageScenarioConfigCanaryConfigEnvOutputReference | SourcedeployProjectStageScenarioConfigCanaryConfigEnv): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    baseline: {
      value: cdktf.stringToHclTerraform(struct!.baseline),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    canary: {
      value: cdktf.stringToHclTerraform(struct!.canary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourcedeployProjectStageScenarioConfigCanaryConfigEnvOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SourcedeployProjectStageScenarioConfigCanaryConfigEnv | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseline !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseline = this._baseline;
    }
    if (this._canary !== undefined) {
      hasAnyValues = true;
      internalValueResult.canary = this._canary;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourcedeployProjectStageScenarioConfigCanaryConfigEnv | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._baseline = undefined;
      this._canary = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._baseline = value.baseline;
      this._canary = value.canary;
    }
  }

  // baseline - computed: false, optional: true, required: false
  private _baseline?: string; 
  public get baseline() {
    return this.getStringAttribute('baseline');
  }
  public set baseline(value: string) {
    this._baseline = value;
  }
  public resetBaseline() {
    this._baseline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baselineInput() {
    return this._baseline;
  }

  // canary - computed: false, optional: true, required: false
  private _canary?: string; 
  public get canary() {
    return this.getStringAttribute('canary');
  }
  public set canary(value: string) {
    this._canary = value;
  }
  public resetCanary() {
    this._canary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canaryInput() {
    return this._canary;
  }
}
export interface SourcedeployProjectStageScenarioConfigCanaryConfigMetrics {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcedeploy_project_stage_scenario#filter SourcedeployProjectStageScenario#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcedeploy_project_stage_scenario#metric SourcedeployProjectStageScenario#metric}
  */
  readonly metric?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcedeploy_project_stage_scenario#name SourcedeployProjectStageScenario#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcedeploy_project_stage_scenario#query SourcedeployProjectStageScenario#query}
  */
  readonly query?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcedeploy_project_stage_scenario#query_type SourcedeployProjectStageScenario#query_type}
  */
  readonly queryType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcedeploy_project_stage_scenario#success_criteria SourcedeployProjectStageScenario#success_criteria}
  */
  readonly successCriteria?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcedeploy_project_stage_scenario#weight SourcedeployProjectStageScenario#weight}
  */
  readonly weight?: number;
}

export function sourcedeployProjectStageScenarioConfigCanaryConfigMetricsToTerraform(struct?: SourcedeployProjectStageScenarioConfigCanaryConfigMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter: cdktf.stringToTerraform(struct!.filter),
    metric: cdktf.stringToTerraform(struct!.metric),
    name: cdktf.stringToTerraform(struct!.name),
    query: cdktf.stringToTerraform(struct!.query),
    query_type: cdktf.stringToTerraform(struct!.queryType),
    success_criteria: cdktf.stringToTerraform(struct!.successCriteria),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function sourcedeployProjectStageScenarioConfigCanaryConfigMetricsToHclTerraform(struct?: SourcedeployProjectStageScenarioConfigCanaryConfigMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric: {
      value: cdktf.stringToHclTerraform(struct!.metric),
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
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_type: {
      value: cdktf.stringToHclTerraform(struct!.queryType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    success_criteria: {
      value: cdktf.stringToHclTerraform(struct!.successCriteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class SourcedeployProjectStageScenarioConfigCanaryConfigMetricsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SourcedeployProjectStageScenarioConfigCanaryConfigMetrics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._queryType !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryType = this._queryType;
    }
    if (this._successCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.successCriteria = this._successCriteria;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourcedeployProjectStageScenarioConfigCanaryConfigMetrics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filter = undefined;
      this._metric = undefined;
      this._name = undefined;
      this._query = undefined;
      this._queryType = undefined;
      this._successCriteria = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filter = value.filter;
      this._metric = value.metric;
      this._name = value.name;
      this._query = value.query;
      this._queryType = value.queryType;
      this._successCriteria = value.successCriteria;
      this._weight = value.weight;
    }
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // metric - computed: false, optional: true, required: false
  private _metric?: string; 
  public get metric() {
    return this.getStringAttribute('metric');
  }
  public set metric(value: string) {
    this._metric = value;
  }
  public resetMetric() {
    this._metric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
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

  // query - computed: false, optional: true, required: false
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  public resetQuery() {
    this._query = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // query_type - computed: false, optional: true, required: false
  private _queryType?: string; 
  public get queryType() {
    return this.getStringAttribute('query_type');
  }
  public set queryType(value: string) {
    this._queryType = value;
  }
  public resetQueryType() {
    this._queryType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryTypeInput() {
    return this._queryType;
  }

  // success_criteria - computed: false, optional: true, required: false
  private _successCriteria?: string; 
  public get successCriteria() {
    return this.getStringAttribute('success_criteria');
  }
  public set successCriteria(value: string) {
    this._successCriteria = value;
  }
  public resetSuccessCriteria() {
    this._successCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successCriteriaInput() {
    return this._successCriteria;
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

export class SourcedeployProjectStageScenarioConfigCanaryConfigMetricsList extends cdktf.ComplexList {
  public internalValue? : SourcedeployProjectStageScenarioConfigCanaryConfigMetrics[] | cdktf.IResolvable

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
  public get(index: number): SourcedeployProjectStageScenarioConfigCanaryConfigMetricsOutputReference {
    return new SourcedeployProjectStageScenarioConfigCanaryConfigMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SourcedeployProjectStageScenarioConfigCanaryConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcedeploy_project_stage_scenario#analysis_type SourcedeployProjectStageScenario#analysis_type}
  */
  readonly analysisType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcedeploy_project_stage_scenario#canary_count SourcedeployProjectStageScenario#canary_count}
  */
  readonly canaryCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcedeploy_project_stage_scenario#pass_score SourcedeployProjectStageScenario#pass_score}
  */
  readonly passScore?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcedeploy_project_stage_scenario#prometheus SourcedeployProjectStageScenario#prometheus}
  */
  readonly prometheus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcedeploy_project_stage_scenario#timeout SourcedeployProjectStageScenario#timeout}
  */
  readonly timeout?: number;
  /**
  * analysis_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcedeploy_project_stage_scenario#analysis_config SourcedeployProjectStageScenario#analysis_config}
  */
  readonly analysisConfig?: SourcedeployProjectStageScenarioConfigCanaryConfigAnalysisConfig;
  /**
  * env block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcedeploy_project_stage_scenario#env SourcedeployProjectStageScenario#env}
  */
  readonly env?: SourcedeployProjectStageScenarioConfigCanaryConfigEnv;
  /**
  * metrics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcedeploy_project_stage_scenario#metrics SourcedeployProjectStageScenario#metrics}
  */
  readonly metrics?: SourcedeployProjectStageScenarioConfigCanaryConfigMetrics[] | cdktf.IResolvable;
}

export function sourcedeployProjectStageScenarioConfigCanaryConfigToTerraform(struct?: SourcedeployProjectStageScenarioConfigCanaryConfigOutputReference | SourcedeployProjectStageScenarioConfigCanaryConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    analysis_type: cdktf.stringToTerraform(struct!.analysisType),
    canary_count: cdktf.numberToTerraform(struct!.canaryCount),
    pass_score: cdktf.numberToTerraform(struct!.passScore),
    prometheus: cdktf.stringToTerraform(struct!.prometheus),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    analysis_config: sourcedeployProjectStageScenarioConfigCanaryConfigAnalysisConfigToTerraform(struct!.analysisConfig),
    env: sourcedeployProjectStageScenarioConfigCanaryConfigEnvToTerraform(struct!.env),
    metrics: cdktf.listMapper(sourcedeployProjectStageScenarioConfigCanaryConfigMetricsToTerraform, true)(struct!.metrics),
  }
}


export function sourcedeployProjectStageScenarioConfigCanaryConfigToHclTerraform(struct?: SourcedeployProjectStageScenarioConfigCanaryConfigOutputReference | SourcedeployProjectStageScenarioConfigCanaryConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    analysis_type: {
      value: cdktf.stringToHclTerraform(struct!.analysisType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    canary_count: {
      value: cdktf.numberToHclTerraform(struct!.canaryCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pass_score: {
      value: cdktf.numberToHclTerraform(struct!.passScore),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prometheus: {
      value: cdktf.stringToHclTerraform(struct!.prometheus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    analysis_config: {
      value: sourcedeployProjectStageScenarioConfigCanaryConfigAnalysisConfigToHclTerraform(struct!.analysisConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SourcedeployProjectStageScenarioConfigCanaryConfigAnalysisConfigList",
    },
    env: {
      value: sourcedeployProjectStageScenarioConfigCanaryConfigEnvToHclTerraform(struct!.env),
      isBlock: true,
      type: "list",
      storageClassType: "SourcedeployProjectStageScenarioConfigCanaryConfigEnvList",
    },
    metrics: {
      value: cdktf.listMapperHcl(sourcedeployProjectStageScenarioConfigCanaryConfigMetricsToHclTerraform, true)(struct!.metrics),
      isBlock: true,
      type: "list",
      storageClassType: "SourcedeployProjectStageScenarioConfigCanaryConfigMetricsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourcedeployProjectStageScenarioConfigCanaryConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SourcedeployProjectStageScenarioConfigCanaryConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._analysisType !== undefined) {
      hasAnyValues = true;
      internalValueResult.analysisType = this._analysisType;
    }
    if (this._canaryCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.canaryCount = this._canaryCount;
    }
    if (this._passScore !== undefined) {
      hasAnyValues = true;
      internalValueResult.passScore = this._passScore;
    }
    if (this._prometheus !== undefined) {
      hasAnyValues = true;
      internalValueResult.prometheus = this._prometheus;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._analysisConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.analysisConfig = this._analysisConfig?.internalValue;
    }
    if (this._env?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env?.internalValue;
    }
    if (this._metrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metrics = this._metrics?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourcedeployProjectStageScenarioConfigCanaryConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._analysisType = undefined;
      this._canaryCount = undefined;
      this._passScore = undefined;
      this._prometheus = undefined;
      this._timeout = undefined;
      this._analysisConfig.internalValue = undefined;
      this._env.internalValue = undefined;
      this._metrics.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._analysisType = value.analysisType;
      this._canaryCount = value.canaryCount;
      this._passScore = value.passScore;
      this._prometheus = value.prometheus;
      this._timeout = value.timeout;
      this._analysisConfig.internalValue = value.analysisConfig;
      this._env.internalValue = value.env;
      this._metrics.internalValue = value.metrics;
    }
  }

  // analysis_type - computed: false, optional: true, required: false
  private _analysisType?: string; 
  public get analysisType() {
    return this.getStringAttribute('analysis_type');
  }
  public set analysisType(value: string) {
    this._analysisType = value;
  }
  public resetAnalysisType() {
    this._analysisType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analysisTypeInput() {
    return this._analysisType;
  }

  // canary_count - computed: false, optional: true, required: false
  private _canaryCount?: number; 
  public get canaryCount() {
    return this.getNumberAttribute('canary_count');
  }
  public set canaryCount(value: number) {
    this._canaryCount = value;
  }
  public resetCanaryCount() {
    this._canaryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canaryCountInput() {
    return this._canaryCount;
  }

  // pass_score - computed: false, optional: true, required: false
  private _passScore?: number; 
  public get passScore() {
    return this.getNumberAttribute('pass_score');
  }
  public set passScore(value: number) {
    this._passScore = value;
  }
  public resetPassScore() {
    this._passScore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passScoreInput() {
    return this._passScore;
  }

  // prometheus - computed: false, optional: true, required: false
  private _prometheus?: string; 
  public get prometheus() {
    return this.getStringAttribute('prometheus');
  }
  public set prometheus(value: string) {
    this._prometheus = value;
  }
  public resetPrometheus() {
    this._prometheus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prometheusInput() {
    return this._prometheus;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // analysis_config - computed: false, optional: true, required: false
  private _analysisConfig = new SourcedeployProjectStageScenarioConfigCanaryConfigAnalysisConfigOutputReference(this, "analysis_config");
  public get analysisConfig() {
    return this._analysisConfig;
  }
  public putAnalysisConfig(value: SourcedeployProjectStageScenarioConfigCanaryConfigAnalysisConfig) {
    this._analysisConfig.internalValue = value;
  }
  public resetAnalysisConfig() {
    this._analysisConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analysisConfigInput() {
    return this._analysisConfig.internalValue;
  }

  // env - computed: false, optional: true, required: false
  private _env = new SourcedeployProjectStageScenarioConfigCanaryConfigEnvOutputReference(this, "env");
  public get env() {
    return this._env;
  }
  public putEnv(value: SourcedeployProjectStageScenarioConfigCanaryConfigEnv) {
    this._env.internalValue = value;
  }
  public resetEnv() {
    this._env.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env.internalValue;
  }

  // metrics - computed: false, optional: true, required: false
  private _metrics = new SourcedeployProjectStageScenarioConfigCanaryConfigMetricsList(this, "metrics", false);
  public get metrics() {
    return this._metrics;
  }
  public putMetrics(value: SourcedeployProjectStageScenarioConfigCanaryConfigMetrics[] | cdktf.IResolvable) {
    this._metrics.internalValue = value;
  }
  public resetMetrics() {
    this._metrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsInput() {
    return this._metrics.internalValue;
  }
}
export interface SourcedeployProjectStageScenarioConfigDeployCommandPath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcedeploy_project_stage_scenario#deploy_path SourcedeployProjectStageScenario#deploy_path}
  */
  readonly deployPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcedeploy_project_stage_scenario#source_path SourcedeployProjectStageScenario#source_path}
  */
  readonly sourcePath?: string;
}

export function sourcedeployProjectStageScenarioConfigDeployCommandPathToTerraform(struct?: SourcedeployProjectStageScenarioConfigDeployCommandPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deploy_path: cdktf.stringToTerraform(struct!.deployPath),
    source_path: cdktf.stringToTerraform(struct!.sourcePath),
  }
}


export function sourcedeployProjectStageScenarioConfigDeployCommandPathToHclTerraform(struct?: SourcedeployProjectStageScenarioConfigDeployCommandPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deploy_path: {
      value: cdktf.stringToHclTerraform(struct!.deployPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_path: {
      value: cdktf.stringToHclTerraform(struct!.sourcePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourcedeployProjectStageScenarioConfigDeployCommandPathOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SourcedeployProjectStageScenarioConfigDeployCommandPath | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deployPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.deployPath = this._deployPath;
    }
    if (this._sourcePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePath = this._sourcePath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourcedeployProjectStageScenarioConfigDeployCommandPath | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deployPath = undefined;
      this._sourcePath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deployPath = value.deployPath;
      this._sourcePath = value.sourcePath;
    }
  }

  // deploy_path - computed: false, optional: true, required: false
  private _deployPath?: string; 
  public get deployPath() {
    return this.getStringAttribute('deploy_path');
  }
  public set deployPath(value: string) {
    this._deployPath = value;
  }
  public resetDeployPath() {
    this._deployPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployPathInput() {
    return this._deployPath;
  }

  // source_path - computed: false, optional: true, required: false
  private _sourcePath?: string; 
  public get sourcePath() {
    return this.getStringAttribute('source_path');
  }
  public set sourcePath(value: string) {
    this._sourcePath = value;
  }
  public resetSourcePath() {
    this._sourcePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePathInput() {
    return this._sourcePath;
  }
}

export class SourcedeployProjectStageScenarioConfigDeployCommandPathList extends cdktf.ComplexList {
  public internalValue? : SourcedeployProjectStageScenarioConfigDeployCommandPath[] | cdktf.IResolvable

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
  public get(index: number): SourcedeployProjectStageScenarioConfigDeployCommandPathOutputReference {
    return new SourcedeployProjectStageScenarioConfigDeployCommandPathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SourcedeployProjectStageScenarioConfigDeployCommandPostDeploy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcedeploy_project_stage_scenario#command SourcedeployProjectStageScenario#command}
  */
  readonly command?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcedeploy_project_stage_scenario#user SourcedeployProjectStageScenario#user}
  */
  readonly user?: string;
}

export function sourcedeployProjectStageScenarioConfigDeployCommandPostDeployToTerraform(struct?: SourcedeployProjectStageScenarioConfigDeployCommandPostDeploy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.stringToTerraform(struct!.command),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function sourcedeployProjectStageScenarioConfigDeployCommandPostDeployToHclTerraform(struct?: SourcedeployProjectStageScenarioConfigDeployCommandPostDeploy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    command: {
      value: cdktf.stringToHclTerraform(struct!.command),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourcedeployProjectStageScenarioConfigDeployCommandPostDeployOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SourcedeployProjectStageScenarioConfigDeployCommandPostDeploy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourcedeployProjectStageScenarioConfigDeployCommandPostDeploy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._command = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._command = value.command;
      this._user = value.user;
    }
  }

  // command - computed: false, optional: true, required: false
  private _command?: string; 
  public get command() {
    return this.getStringAttribute('command');
  }
  public set command(value: string) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}

export class SourcedeployProjectStageScenarioConfigDeployCommandPostDeployList extends cdktf.ComplexList {
  public internalValue? : SourcedeployProjectStageScenarioConfigDeployCommandPostDeploy[] | cdktf.IResolvable

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
  public get(index: number): SourcedeployProjectStageScenarioConfigDeployCommandPostDeployOutputReference {
    return new SourcedeployProjectStageScenarioConfigDeployCommandPostDeployOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SourcedeployProjectStageScenarioConfigDeployCommandPreDeploy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcedeploy_project_stage_scenario#command SourcedeployProjectStageScenario#command}
  */
  readonly command?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcedeploy_project_stage_scenario#user SourcedeployProjectStageScenario#user}
  */
  readonly user?: string;
}

export function sourcedeployProjectStageScenarioConfigDeployCommandPreDeployToTerraform(struct?: SourcedeployProjectStageScenarioConfigDeployCommandPreDeploy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.stringToTerraform(struct!.command),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function sourcedeployProjectStageScenarioConfigDeployCommandPreDeployToHclTerraform(struct?: SourcedeployProjectStageScenarioConfigDeployCommandPreDeploy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    command: {
      value: cdktf.stringToHclTerraform(struct!.command),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourcedeployProjectStageScenarioConfigDeployCommandPreDeployOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SourcedeployProjectStageScenarioConfigDeployCommandPreDeploy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourcedeployProjectStageScenarioConfigDeployCommandPreDeploy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._command = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._command = value.command;
      this._user = value.user;
    }
  }

  // command - computed: false, optional: true, required: false
  private _command?: string; 
  public get command() {
    return this.getStringAttribute('command');
  }
  public set command(value: string) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}

export class SourcedeployProjectStageScenarioConfigDeployCommandPreDeployList extends cdktf.ComplexList {
  public internalValue? : SourcedeployProjectStageScenarioConfigDeployCommandPreDeploy[] | cdktf.IResolvable

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
  public get(index: number): SourcedeployProjectStageScenarioConfigDeployCommandPreDeployOutputReference {
    return new SourcedeployProjectStageScenarioConfigDeployCommandPreDeployOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SourcedeployProjectStageScenarioConfigDeployCommand {
  /**
  * path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcedeploy_project_stage_scenario#path SourcedeployProjectStageScenario#path}
  */
  readonly path?: SourcedeployProjectStageScenarioConfigDeployCommandPath[] | cdktf.IResolvable;
  /**
  * post_deploy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcedeploy_project_stage_scenario#post_deploy SourcedeployProjectStageScenario#post_deploy}
  */
  readonly postDeploy?: SourcedeployProjectStageScenarioConfigDeployCommandPostDeploy[] | cdktf.IResolvable;
  /**
  * pre_deploy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcedeploy_project_stage_scenario#pre_deploy SourcedeployProjectStageScenario#pre_deploy}
  */
  readonly preDeploy?: SourcedeployProjectStageScenarioConfigDeployCommandPreDeploy[] | cdktf.IResolvable;
}

export function sourcedeployProjectStageScenarioConfigDeployCommandToTerraform(struct?: SourcedeployProjectStageScenarioConfigDeployCommandOutputReference | SourcedeployProjectStageScenarioConfigDeployCommand): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.listMapper(sourcedeployProjectStageScenarioConfigDeployCommandPathToTerraform, true)(struct!.path),
    post_deploy: cdktf.listMapper(sourcedeployProjectStageScenarioConfigDeployCommandPostDeployToTerraform, true)(struct!.postDeploy),
    pre_deploy: cdktf.listMapper(sourcedeployProjectStageScenarioConfigDeployCommandPreDeployToTerraform, true)(struct!.preDeploy),
  }
}


export function sourcedeployProjectStageScenarioConfigDeployCommandToHclTerraform(struct?: SourcedeployProjectStageScenarioConfigDeployCommandOutputReference | SourcedeployProjectStageScenarioConfigDeployCommand): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.listMapperHcl(sourcedeployProjectStageScenarioConfigDeployCommandPathToHclTerraform, true)(struct!.path),
      isBlock: true,
      type: "list",
      storageClassType: "SourcedeployProjectStageScenarioConfigDeployCommandPathList",
    },
    post_deploy: {
      value: cdktf.listMapperHcl(sourcedeployProjectStageScenarioConfigDeployCommandPostDeployToHclTerraform, true)(struct!.postDeploy),
      isBlock: true,
      type: "list",
      storageClassType: "SourcedeployProjectStageScenarioConfigDeployCommandPostDeployList",
    },
    pre_deploy: {
      value: cdktf.listMapperHcl(sourcedeployProjectStageScenarioConfigDeployCommandPreDeployToHclTerraform, true)(struct!.preDeploy),
      isBlock: true,
      type: "list",
      storageClassType: "SourcedeployProjectStageScenarioConfigDeployCommandPreDeployList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourcedeployProjectStageScenarioConfigDeployCommandOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SourcedeployProjectStageScenarioConfigDeployCommand | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path?.internalValue;
    }
    if (this._postDeploy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postDeploy = this._postDeploy?.internalValue;
    }
    if (this._preDeploy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preDeploy = this._preDeploy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourcedeployProjectStageScenarioConfigDeployCommand | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._path.internalValue = undefined;
      this._postDeploy.internalValue = undefined;
      this._preDeploy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._path.internalValue = value.path;
      this._postDeploy.internalValue = value.postDeploy;
      this._preDeploy.internalValue = value.preDeploy;
    }
  }

  // path - computed: false, optional: true, required: false
  private _path = new SourcedeployProjectStageScenarioConfigDeployCommandPathList(this, "path", false);
  public get path() {
    return this._path;
  }
  public putPath(value: SourcedeployProjectStageScenarioConfigDeployCommandPath[] | cdktf.IResolvable) {
    this._path.internalValue = value;
  }
  public resetPath() {
    this._path.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path.internalValue;
  }

  // post_deploy - computed: false, optional: true, required: false
  private _postDeploy = new SourcedeployProjectStageScenarioConfigDeployCommandPostDeployList(this, "post_deploy", false);
  public get postDeploy() {
    return this._postDeploy;
  }
  public putPostDeploy(value: SourcedeployProjectStageScenarioConfigDeployCommandPostDeploy[] | cdktf.IResolvable) {
    this._postDeploy.internalValue = value;
  }
  public resetPostDeploy() {
    this._postDeploy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postDeployInput() {
    return this._postDeploy.internalValue;
  }

  // pre_deploy - computed: false, optional: true, required: false
  private _preDeploy = new SourcedeployProjectStageScenarioConfigDeployCommandPreDeployList(this, "pre_deploy", false);
  public get preDeploy() {
    return this._preDeploy;
  }
  public putPreDeploy(value: SourcedeployProjectStageScenarioConfigDeployCommandPreDeploy[] | cdktf.IResolvable) {
    this._preDeploy.internalValue = value;
  }
  public resetPreDeploy() {
    this._preDeploy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preDeployInput() {
    return this._preDeploy.internalValue;
  }
}
export interface SourcedeployProjectStageScenarioConfigFileObjectStorage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcedeploy_project_stage_scenario#bucket SourcedeployProjectStageScenario#bucket}
  */
  readonly bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcedeploy_project_stage_scenario#object SourcedeployProjectStageScenario#object}
  */
  readonly object?: string;
}

export function sourcedeployProjectStageScenarioConfigFileObjectStorageToTerraform(struct?: SourcedeployProjectStageScenarioConfigFileObjectStorageOutputReference | SourcedeployProjectStageScenarioConfigFileObjectStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    object: cdktf.stringToTerraform(struct!.object),
  }
}


export function sourcedeployProjectStageScenarioConfigFileObjectStorageToHclTerraform(struct?: SourcedeployProjectStageScenarioConfigFileObjectStorageOutputReference | SourcedeployProjectStageScenarioConfigFileObjectStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object: {
      value: cdktf.stringToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourcedeployProjectStageScenarioConfigFileObjectStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SourcedeployProjectStageScenarioConfigFileObjectStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourcedeployProjectStageScenarioConfigFileObjectStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._object = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._object = value.object;
    }
  }

  // bucket - computed: false, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // object - computed: false, optional: true, required: false
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  public resetObject() {
    this._object = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }
}
export interface SourcedeployProjectStageScenarioConfigFileSourceBuild {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcedeploy_project_stage_scenario#id SourcedeployProjectStageScenario#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function sourcedeployProjectStageScenarioConfigFileSourceBuildToTerraform(struct?: SourcedeployProjectStageScenarioConfigFileSourceBuildOutputReference | SourcedeployProjectStageScenarioConfigFileSourceBuild): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function sourcedeployProjectStageScenarioConfigFileSourceBuildToHclTerraform(struct?: SourcedeployProjectStageScenarioConfigFileSourceBuildOutputReference | SourcedeployProjectStageScenarioConfigFileSourceBuild): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourcedeployProjectStageScenarioConfigFileSourceBuildOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SourcedeployProjectStageScenarioConfigFileSourceBuild | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourcedeployProjectStageScenarioConfigFileSourceBuild | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface SourcedeployProjectStageScenarioConfigFile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcedeploy_project_stage_scenario#type SourcedeployProjectStageScenario#type}
  */
  readonly type?: string;
  /**
  * object_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcedeploy_project_stage_scenario#object_storage SourcedeployProjectStageScenario#object_storage}
  */
  readonly objectStorage?: SourcedeployProjectStageScenarioConfigFileObjectStorage;
  /**
  * source_build block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcedeploy_project_stage_scenario#source_build SourcedeployProjectStageScenario#source_build}
  */
  readonly sourceBuild?: SourcedeployProjectStageScenarioConfigFileSourceBuild;
}

export function sourcedeployProjectStageScenarioConfigFileToTerraform(struct?: SourcedeployProjectStageScenarioConfigFileOutputReference | SourcedeployProjectStageScenarioConfigFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    object_storage: sourcedeployProjectStageScenarioConfigFileObjectStorageToTerraform(struct!.objectStorage),
    source_build: sourcedeployProjectStageScenarioConfigFileSourceBuildToTerraform(struct!.sourceBuild),
  }
}


export function sourcedeployProjectStageScenarioConfigFileToHclTerraform(struct?: SourcedeployProjectStageScenarioConfigFileOutputReference | SourcedeployProjectStageScenarioConfigFile): any {
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
    object_storage: {
      value: sourcedeployProjectStageScenarioConfigFileObjectStorageToHclTerraform(struct!.objectStorage),
      isBlock: true,
      type: "list",
      storageClassType: "SourcedeployProjectStageScenarioConfigFileObjectStorageList",
    },
    source_build: {
      value: sourcedeployProjectStageScenarioConfigFileSourceBuildToHclTerraform(struct!.sourceBuild),
      isBlock: true,
      type: "list",
      storageClassType: "SourcedeployProjectStageScenarioConfigFileSourceBuildList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourcedeployProjectStageScenarioConfigFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SourcedeployProjectStageScenarioConfigFile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._objectStorage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectStorage = this._objectStorage?.internalValue;
    }
    if (this._sourceBuild?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceBuild = this._sourceBuild?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourcedeployProjectStageScenarioConfigFile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._objectStorage.internalValue = undefined;
      this._sourceBuild.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._objectStorage.internalValue = value.objectStorage;
      this._sourceBuild.internalValue = value.sourceBuild;
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

  // object_storage - computed: false, optional: true, required: false
  private _objectStorage = new SourcedeployProjectStageScenarioConfigFileObjectStorageOutputReference(this, "object_storage");
  public get objectStorage() {
    return this._objectStorage;
  }
  public putObjectStorage(value: SourcedeployProjectStageScenarioConfigFileObjectStorage) {
    this._objectStorage.internalValue = value;
  }
  public resetObjectStorage() {
    this._objectStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectStorageInput() {
    return this._objectStorage.internalValue;
  }

  // source_build - computed: false, optional: true, required: false
  private _sourceBuild = new SourcedeployProjectStageScenarioConfigFileSourceBuildOutputReference(this, "source_build");
  public get sourceBuild() {
    return this._sourceBuild;
  }
  public putSourceBuild(value: SourcedeployProjectStageScenarioConfigFileSourceBuild) {
    this._sourceBuild.internalValue = value;
  }
  public resetSourceBuild() {
    this._sourceBuild.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceBuildInput() {
    return this._sourceBuild.internalValue;
  }
}
export interface SourcedeployProjectStageScenarioConfigLoadBalancer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcedeploy_project_stage_scenario#delete_server SourcedeployProjectStageScenario#delete_server}
  */
  readonly deleteServer?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcedeploy_project_stage_scenario#load_balancer_target_group_no SourcedeployProjectStageScenario#load_balancer_target_group_no}
  */
  readonly loadBalancerTargetGroupNo?: number;
}

export function sourcedeployProjectStageScenarioConfigLoadBalancerToTerraform(struct?: SourcedeployProjectStageScenarioConfigLoadBalancerOutputReference | SourcedeployProjectStageScenarioConfigLoadBalancer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete_server: cdktf.booleanToTerraform(struct!.deleteServer),
    load_balancer_target_group_no: cdktf.numberToTerraform(struct!.loadBalancerTargetGroupNo),
  }
}


export function sourcedeployProjectStageScenarioConfigLoadBalancerToHclTerraform(struct?: SourcedeployProjectStageScenarioConfigLoadBalancerOutputReference | SourcedeployProjectStageScenarioConfigLoadBalancer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delete_server: {
      value: cdktf.booleanToHclTerraform(struct!.deleteServer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    load_balancer_target_group_no: {
      value: cdktf.numberToHclTerraform(struct!.loadBalancerTargetGroupNo),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourcedeployProjectStageScenarioConfigLoadBalancerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SourcedeployProjectStageScenarioConfigLoadBalancer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deleteServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteServer = this._deleteServer;
    }
    if (this._loadBalancerTargetGroupNo !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancerTargetGroupNo = this._loadBalancerTargetGroupNo;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourcedeployProjectStageScenarioConfigLoadBalancer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deleteServer = undefined;
      this._loadBalancerTargetGroupNo = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deleteServer = value.deleteServer;
      this._loadBalancerTargetGroupNo = value.loadBalancerTargetGroupNo;
    }
  }

  // delete_server - computed: false, optional: true, required: false
  private _deleteServer?: boolean | cdktf.IResolvable; 
  public get deleteServer() {
    return this.getBooleanAttribute('delete_server');
  }
  public set deleteServer(value: boolean | cdktf.IResolvable) {
    this._deleteServer = value;
  }
  public resetDeleteServer() {
    this._deleteServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteServerInput() {
    return this._deleteServer;
  }

  // load_balancer_target_group_name - computed: true, optional: false, required: false
  public get loadBalancerTargetGroupName() {
    return this.getStringAttribute('load_balancer_target_group_name');
  }

  // load_balancer_target_group_no - computed: false, optional: true, required: false
  private _loadBalancerTargetGroupNo?: number; 
  public get loadBalancerTargetGroupNo() {
    return this.getNumberAttribute('load_balancer_target_group_no');
  }
  public set loadBalancerTargetGroupNo(value: number) {
    this._loadBalancerTargetGroupNo = value;
  }
  public resetLoadBalancerTargetGroupNo() {
    this._loadBalancerTargetGroupNo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerTargetGroupNoInput() {
    return this._loadBalancerTargetGroupNo;
  }
}
export interface SourcedeployProjectStageScenarioConfigManifest {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcedeploy_project_stage_scenario#branch SourcedeployProjectStageScenario#branch}
  */
  readonly branch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcedeploy_project_stage_scenario#path SourcedeployProjectStageScenario#path}
  */
  readonly path?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcedeploy_project_stage_scenario#repository_name SourcedeployProjectStageScenario#repository_name}
  */
  readonly repositoryName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcedeploy_project_stage_scenario#type SourcedeployProjectStageScenario#type}
  */
  readonly type?: string;
}

export function sourcedeployProjectStageScenarioConfigManifestToTerraform(struct?: SourcedeployProjectStageScenarioConfigManifestOutputReference | SourcedeployProjectStageScenarioConfigManifest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    branch: cdktf.stringToTerraform(struct!.branch),
    path: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.path),
    repository_name: cdktf.stringToTerraform(struct!.repositoryName),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function sourcedeployProjectStageScenarioConfigManifestToHclTerraform(struct?: SourcedeployProjectStageScenarioConfigManifestOutputReference | SourcedeployProjectStageScenarioConfigManifest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    branch: {
      value: cdktf.stringToHclTerraform(struct!.branch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.path),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    repository_name: {
      value: cdktf.stringToHclTerraform(struct!.repositoryName),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourcedeployProjectStageScenarioConfigManifestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SourcedeployProjectStageScenarioConfigManifest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._branch !== undefined) {
      hasAnyValues = true;
      internalValueResult.branch = this._branch;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._repositoryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryName = this._repositoryName;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourcedeployProjectStageScenarioConfigManifest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._branch = undefined;
      this._path = undefined;
      this._repositoryName = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._branch = value.branch;
      this._path = value.path;
      this._repositoryName = value.repositoryName;
      this._type = value.type;
    }
  }

  // branch - computed: false, optional: true, required: false
  private _branch?: string; 
  public get branch() {
    return this.getStringAttribute('branch');
  }
  public set branch(value: string) {
    this._branch = value;
  }
  public resetBranch() {
    this._branch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchInput() {
    return this._branch;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string[]; 
  public get path() {
    return this.getListAttribute('path');
  }
  public set path(value: string[]) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // repository_name - computed: false, optional: true, required: false
  private _repositoryName?: string; 
  public get repositoryName() {
    return this.getStringAttribute('repository_name');
  }
  public set repositoryName(value: string) {
    this._repositoryName = value;
  }
  public resetRepositoryName() {
    this._repositoryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryNameInput() {
    return this._repositoryName;
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
export interface SourcedeployProjectStageScenarioConfigPath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcedeploy_project_stage_scenario#deploy_path SourcedeployProjectStageScenario#deploy_path}
  */
  readonly deployPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcedeploy_project_stage_scenario#source_path SourcedeployProjectStageScenario#source_path}
  */
  readonly sourcePath?: string;
}

export function sourcedeployProjectStageScenarioConfigPathToTerraform(struct?: SourcedeployProjectStageScenarioConfigPathOutputReference | SourcedeployProjectStageScenarioConfigPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deploy_path: cdktf.stringToTerraform(struct!.deployPath),
    source_path: cdktf.stringToTerraform(struct!.sourcePath),
  }
}


export function sourcedeployProjectStageScenarioConfigPathToHclTerraform(struct?: SourcedeployProjectStageScenarioConfigPathOutputReference | SourcedeployProjectStageScenarioConfigPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deploy_path: {
      value: cdktf.stringToHclTerraform(struct!.deployPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_path: {
      value: cdktf.stringToHclTerraform(struct!.sourcePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourcedeployProjectStageScenarioConfigPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SourcedeployProjectStageScenarioConfigPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deployPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.deployPath = this._deployPath;
    }
    if (this._sourcePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePath = this._sourcePath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourcedeployProjectStageScenarioConfigPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deployPath = undefined;
      this._sourcePath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deployPath = value.deployPath;
      this._sourcePath = value.sourcePath;
    }
  }

  // deploy_path - computed: false, optional: true, required: false
  private _deployPath?: string; 
  public get deployPath() {
    return this.getStringAttribute('deploy_path');
  }
  public set deployPath(value: string) {
    this._deployPath = value;
  }
  public resetDeployPath() {
    this._deployPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployPathInput() {
    return this._deployPath;
  }

  // source_path - computed: false, optional: true, required: false
  private _sourcePath?: string; 
  public get sourcePath() {
    return this.getStringAttribute('source_path');
  }
  public set sourcePath(value: string) {
    this._sourcePath = value;
  }
  public resetSourcePath() {
    this._sourcePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePathInput() {
    return this._sourcePath;
  }
}
export interface SourcedeployProjectStageScenarioConfigA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcedeploy_project_stage_scenario#rollback SourcedeployProjectStageScenario#rollback}
  */
  readonly rollback?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcedeploy_project_stage_scenario#strategy SourcedeployProjectStageScenario#strategy}
  */
  readonly strategy?: string;
  /**
  * canary_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcedeploy_project_stage_scenario#canary_config SourcedeployProjectStageScenario#canary_config}
  */
  readonly canaryConfig?: SourcedeployProjectStageScenarioConfigCanaryConfig;
  /**
  * deploy_command block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcedeploy_project_stage_scenario#deploy_command SourcedeployProjectStageScenario#deploy_command}
  */
  readonly deployCommand?: SourcedeployProjectStageScenarioConfigDeployCommand;
  /**
  * file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcedeploy_project_stage_scenario#file SourcedeployProjectStageScenario#file}
  */
  readonly file?: SourcedeployProjectStageScenarioConfigFile;
  /**
  * load_balancer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcedeploy_project_stage_scenario#load_balancer SourcedeployProjectStageScenario#load_balancer}
  */
  readonly loadBalancer?: SourcedeployProjectStageScenarioConfigLoadBalancer;
  /**
  * manifest block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcedeploy_project_stage_scenario#manifest SourcedeployProjectStageScenario#manifest}
  */
  readonly manifest?: SourcedeployProjectStageScenarioConfigManifest;
  /**
  * path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcedeploy_project_stage_scenario#path SourcedeployProjectStageScenario#path}
  */
  readonly path?: SourcedeployProjectStageScenarioConfigPath;
}

export function sourcedeployProjectStageScenarioConfigAToTerraform(struct?: SourcedeployProjectStageScenarioConfigAOutputReference | SourcedeployProjectStageScenarioConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rollback: cdktf.booleanToTerraform(struct!.rollback),
    strategy: cdktf.stringToTerraform(struct!.strategy),
    canary_config: sourcedeployProjectStageScenarioConfigCanaryConfigToTerraform(struct!.canaryConfig),
    deploy_command: sourcedeployProjectStageScenarioConfigDeployCommandToTerraform(struct!.deployCommand),
    file: sourcedeployProjectStageScenarioConfigFileToTerraform(struct!.file),
    load_balancer: sourcedeployProjectStageScenarioConfigLoadBalancerToTerraform(struct!.loadBalancer),
    manifest: sourcedeployProjectStageScenarioConfigManifestToTerraform(struct!.manifest),
    path: sourcedeployProjectStageScenarioConfigPathToTerraform(struct!.path),
  }
}


export function sourcedeployProjectStageScenarioConfigAToHclTerraform(struct?: SourcedeployProjectStageScenarioConfigAOutputReference | SourcedeployProjectStageScenarioConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rollback: {
      value: cdktf.booleanToHclTerraform(struct!.rollback),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    strategy: {
      value: cdktf.stringToHclTerraform(struct!.strategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    canary_config: {
      value: sourcedeployProjectStageScenarioConfigCanaryConfigToHclTerraform(struct!.canaryConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SourcedeployProjectStageScenarioConfigCanaryConfigList",
    },
    deploy_command: {
      value: sourcedeployProjectStageScenarioConfigDeployCommandToHclTerraform(struct!.deployCommand),
      isBlock: true,
      type: "list",
      storageClassType: "SourcedeployProjectStageScenarioConfigDeployCommandList",
    },
    file: {
      value: sourcedeployProjectStageScenarioConfigFileToHclTerraform(struct!.file),
      isBlock: true,
      type: "list",
      storageClassType: "SourcedeployProjectStageScenarioConfigFileList",
    },
    load_balancer: {
      value: sourcedeployProjectStageScenarioConfigLoadBalancerToHclTerraform(struct!.loadBalancer),
      isBlock: true,
      type: "list",
      storageClassType: "SourcedeployProjectStageScenarioConfigLoadBalancerList",
    },
    manifest: {
      value: sourcedeployProjectStageScenarioConfigManifestToHclTerraform(struct!.manifest),
      isBlock: true,
      type: "list",
      storageClassType: "SourcedeployProjectStageScenarioConfigManifestList",
    },
    path: {
      value: sourcedeployProjectStageScenarioConfigPathToHclTerraform(struct!.path),
      isBlock: true,
      type: "list",
      storageClassType: "SourcedeployProjectStageScenarioConfigPathList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourcedeployProjectStageScenarioConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SourcedeployProjectStageScenarioConfigA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rollback !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollback = this._rollback;
    }
    if (this._strategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy;
    }
    if (this._canaryConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.canaryConfig = this._canaryConfig?.internalValue;
    }
    if (this._deployCommand?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deployCommand = this._deployCommand?.internalValue;
    }
    if (this._file?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file?.internalValue;
    }
    if (this._loadBalancer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancer = this._loadBalancer?.internalValue;
    }
    if (this._manifest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.manifest = this._manifest?.internalValue;
    }
    if (this._path?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourcedeployProjectStageScenarioConfigA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rollback = undefined;
      this._strategy = undefined;
      this._canaryConfig.internalValue = undefined;
      this._deployCommand.internalValue = undefined;
      this._file.internalValue = undefined;
      this._loadBalancer.internalValue = undefined;
      this._manifest.internalValue = undefined;
      this._path.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rollback = value.rollback;
      this._strategy = value.strategy;
      this._canaryConfig.internalValue = value.canaryConfig;
      this._deployCommand.internalValue = value.deployCommand;
      this._file.internalValue = value.file;
      this._loadBalancer.internalValue = value.loadBalancer;
      this._manifest.internalValue = value.manifest;
      this._path.internalValue = value.path;
    }
  }

  // rollback - computed: false, optional: true, required: false
  private _rollback?: boolean | cdktf.IResolvable; 
  public get rollback() {
    return this.getBooleanAttribute('rollback');
  }
  public set rollback(value: boolean | cdktf.IResolvable) {
    this._rollback = value;
  }
  public resetRollback() {
    this._rollback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollbackInput() {
    return this._rollback;
  }

  // strategy - computed: false, optional: true, required: false
  private _strategy?: string; 
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
  public set strategy(value: string) {
    this._strategy = value;
  }
  public resetStrategy() {
    this._strategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy;
  }

  // canary_config - computed: false, optional: true, required: false
  private _canaryConfig = new SourcedeployProjectStageScenarioConfigCanaryConfigOutputReference(this, "canary_config");
  public get canaryConfig() {
    return this._canaryConfig;
  }
  public putCanaryConfig(value: SourcedeployProjectStageScenarioConfigCanaryConfig) {
    this._canaryConfig.internalValue = value;
  }
  public resetCanaryConfig() {
    this._canaryConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canaryConfigInput() {
    return this._canaryConfig.internalValue;
  }

  // deploy_command - computed: false, optional: true, required: false
  private _deployCommand = new SourcedeployProjectStageScenarioConfigDeployCommandOutputReference(this, "deploy_command");
  public get deployCommand() {
    return this._deployCommand;
  }
  public putDeployCommand(value: SourcedeployProjectStageScenarioConfigDeployCommand) {
    this._deployCommand.internalValue = value;
  }
  public resetDeployCommand() {
    this._deployCommand.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployCommandInput() {
    return this._deployCommand.internalValue;
  }

  // file - computed: false, optional: true, required: false
  private _file = new SourcedeployProjectStageScenarioConfigFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: SourcedeployProjectStageScenarioConfigFile) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }

  // load_balancer - computed: false, optional: true, required: false
  private _loadBalancer = new SourcedeployProjectStageScenarioConfigLoadBalancerOutputReference(this, "load_balancer");
  public get loadBalancer() {
    return this._loadBalancer;
  }
  public putLoadBalancer(value: SourcedeployProjectStageScenarioConfigLoadBalancer) {
    this._loadBalancer.internalValue = value;
  }
  public resetLoadBalancer() {
    this._loadBalancer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerInput() {
    return this._loadBalancer.internalValue;
  }

  // manifest - computed: false, optional: true, required: false
  private _manifest = new SourcedeployProjectStageScenarioConfigManifestOutputReference(this, "manifest");
  public get manifest() {
    return this._manifest;
  }
  public putManifest(value: SourcedeployProjectStageScenarioConfigManifest) {
    this._manifest.internalValue = value;
  }
  public resetManifest() {
    this._manifest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manifestInput() {
    return this._manifest.internalValue;
  }

  // path - computed: false, optional: true, required: false
  private _path = new SourcedeployProjectStageScenarioConfigPathOutputReference(this, "path");
  public get path() {
    return this._path;
  }
  public putPath(value: SourcedeployProjectStageScenarioConfigPath) {
    this._path.internalValue = value;
  }
  public resetPath() {
    this._path.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path.internalValue;
  }
}
export interface SourcedeployProjectStageScenarioTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcedeploy_project_stage_scenario#create SourcedeployProjectStageScenario#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcedeploy_project_stage_scenario#delete SourcedeployProjectStageScenario#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcedeploy_project_stage_scenario#read SourcedeployProjectStageScenario#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcedeploy_project_stage_scenario#update SourcedeployProjectStageScenario#update}
  */
  readonly update?: string;
}

export function sourcedeployProjectStageScenarioTimeoutsToTerraform(struct?: SourcedeployProjectStageScenarioTimeouts | cdktf.IResolvable): any {
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


export function sourcedeployProjectStageScenarioTimeoutsToHclTerraform(struct?: SourcedeployProjectStageScenarioTimeouts | cdktf.IResolvable): any {
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

export class SourcedeployProjectStageScenarioTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourcedeployProjectStageScenarioTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SourcedeployProjectStageScenarioTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcedeploy_project_stage_scenario ncloud_sourcedeploy_project_stage_scenario}
*/
export class SourcedeployProjectStageScenario extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ncloud_sourcedeploy_project_stage_scenario";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SourcedeployProjectStageScenario resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SourcedeployProjectStageScenario to import
  * @param importFromId The id of the existing SourcedeployProjectStageScenario that should be imported. Refer to the {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcedeploy_project_stage_scenario#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SourcedeployProjectStageScenario to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ncloud_sourcedeploy_project_stage_scenario", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcedeploy_project_stage_scenario ncloud_sourcedeploy_project_stage_scenario} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SourcedeployProjectStageScenarioConfig
  */
  public constructor(scope: Construct, id: string, config: SourcedeployProjectStageScenarioConfig) {
    super(scope, id, {
      terraformResourceType: 'ncloud_sourcedeploy_project_stage_scenario',
      terraformGeneratorMetadata: {
        providerName: 'ncloud',
        providerVersion: '4.0.4',
        providerVersionConstraint: '4.0.4'
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
    this._name = config.name;
    this._projectId = config.projectId;
    this._stageId = config.stageId;
    this._config.internalValue = config.config;
    this._timeouts.internalValue = config.timeouts;
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

  // project_id - computed: false, optional: false, required: true
  private _projectId?: number; 
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }
  public set projectId(value: number) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // stage_id - computed: false, optional: false, required: true
  private _stageId?: number; 
  public get stageId() {
    return this.getNumberAttribute('stage_id');
  }
  public set stageId(value: number) {
    this._stageId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stageIdInput() {
    return this._stageId;
  }

  // config - computed: false, optional: false, required: true
  private _config = new SourcedeployProjectStageScenarioConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: SourcedeployProjectStageScenarioConfigA) {
    this._config.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SourcedeployProjectStageScenarioTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SourcedeployProjectStageScenarioTimeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.numberToTerraform(this._projectId),
      stage_id: cdktf.numberToTerraform(this._stageId),
      config: sourcedeployProjectStageScenarioConfigAToTerraform(this._config.internalValue),
      timeouts: sourcedeployProjectStageScenarioTimeoutsToTerraform(this._timeouts.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.numberToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      stage_id: {
        value: cdktf.numberToHclTerraform(this._stageId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      config: {
        value: sourcedeployProjectStageScenarioConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SourcedeployProjectStageScenarioConfigAList",
      },
      timeouts: {
        value: sourcedeployProjectStageScenarioTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SourcedeployProjectStageScenarioTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
