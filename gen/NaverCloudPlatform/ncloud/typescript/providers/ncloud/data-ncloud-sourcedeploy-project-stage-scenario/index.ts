// https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/sourcedeploy_project_stage_scenario
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNcloudSourcedeployProjectStageScenarioConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/sourcedeploy_project_stage_scenario#id DataNcloudSourcedeployProjectStageScenario#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/sourcedeploy_project_stage_scenario#project_id DataNcloudSourcedeployProjectStageScenario#project_id}
  */
  readonly projectId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/sourcedeploy_project_stage_scenario#stage_id DataNcloudSourcedeployProjectStageScenario#stage_id}
  */
  readonly stageId: number;
}
export interface DataNcloudSourcedeployProjectStageScenarioConfigCanaryConfigAnalysisConfig {
}

export function dataNcloudSourcedeployProjectStageScenarioConfigCanaryConfigAnalysisConfigToTerraform(struct?: DataNcloudSourcedeployProjectStageScenarioConfigCanaryConfigAnalysisConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNcloudSourcedeployProjectStageScenarioConfigCanaryConfigAnalysisConfigToHclTerraform(struct?: DataNcloudSourcedeployProjectStageScenarioConfigCanaryConfigAnalysisConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNcloudSourcedeployProjectStageScenarioConfigCanaryConfigAnalysisConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataNcloudSourcedeployProjectStageScenarioConfigCanaryConfigAnalysisConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNcloudSourcedeployProjectStageScenarioConfigCanaryConfigAnalysisConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // delay - computed: true, optional: false, required: false
  public get delay() {
    return this.getNumberAttribute('delay');
  }

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getNumberAttribute('duration');
  }

  // interval - computed: true, optional: false, required: false
  public get interval() {
    return this.getNumberAttribute('interval');
  }

  // step - computed: true, optional: false, required: false
  public get step() {
    return this.getNumberAttribute('step');
  }
}

export class DataNcloudSourcedeployProjectStageScenarioConfigCanaryConfigAnalysisConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataNcloudSourcedeployProjectStageScenarioConfigCanaryConfigAnalysisConfigOutputReference {
    return new DataNcloudSourcedeployProjectStageScenarioConfigCanaryConfigAnalysisConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNcloudSourcedeployProjectStageScenarioConfigCanaryConfigEnv {
}

export function dataNcloudSourcedeployProjectStageScenarioConfigCanaryConfigEnvToTerraform(struct?: DataNcloudSourcedeployProjectStageScenarioConfigCanaryConfigEnv): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNcloudSourcedeployProjectStageScenarioConfigCanaryConfigEnvToHclTerraform(struct?: DataNcloudSourcedeployProjectStageScenarioConfigCanaryConfigEnv): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNcloudSourcedeployProjectStageScenarioConfigCanaryConfigEnvOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataNcloudSourcedeployProjectStageScenarioConfigCanaryConfigEnv | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNcloudSourcedeployProjectStageScenarioConfigCanaryConfigEnv | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // baseline - computed: true, optional: false, required: false
  public get baseline() {
    return this.getStringAttribute('baseline');
  }

  // canary - computed: true, optional: false, required: false
  public get canary() {
    return this.getStringAttribute('canary');
  }
}

export class DataNcloudSourcedeployProjectStageScenarioConfigCanaryConfigEnvList extends cdktf.ComplexList {

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
  public get(index: number): DataNcloudSourcedeployProjectStageScenarioConfigCanaryConfigEnvOutputReference {
    return new DataNcloudSourcedeployProjectStageScenarioConfigCanaryConfigEnvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNcloudSourcedeployProjectStageScenarioConfigCanaryConfigMetrics {
}

export function dataNcloudSourcedeployProjectStageScenarioConfigCanaryConfigMetricsToTerraform(struct?: DataNcloudSourcedeployProjectStageScenarioConfigCanaryConfigMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNcloudSourcedeployProjectStageScenarioConfigCanaryConfigMetricsToHclTerraform(struct?: DataNcloudSourcedeployProjectStageScenarioConfigCanaryConfigMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNcloudSourcedeployProjectStageScenarioConfigCanaryConfigMetricsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataNcloudSourcedeployProjectStageScenarioConfigCanaryConfigMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNcloudSourcedeployProjectStageScenarioConfigCanaryConfigMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // filter - computed: true, optional: false, required: false
  public get filter() {
    return this.getStringAttribute('filter');
  }

  // metric - computed: true, optional: false, required: false
  public get metric() {
    return this.getStringAttribute('metric');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // query - computed: true, optional: false, required: false
  public get query() {
    return this.getStringAttribute('query');
  }

  // query_type - computed: true, optional: false, required: false
  public get queryType() {
    return this.getStringAttribute('query_type');
  }

  // success_criteria - computed: true, optional: false, required: false
  public get successCriteria() {
    return this.getStringAttribute('success_criteria');
  }

  // weight - computed: true, optional: false, required: false
  public get weight() {
    return this.getNumberAttribute('weight');
  }
}

export class DataNcloudSourcedeployProjectStageScenarioConfigCanaryConfigMetricsList extends cdktf.ComplexList {

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
  public get(index: number): DataNcloudSourcedeployProjectStageScenarioConfigCanaryConfigMetricsOutputReference {
    return new DataNcloudSourcedeployProjectStageScenarioConfigCanaryConfigMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNcloudSourcedeployProjectStageScenarioConfigCanaryConfig {
}

export function dataNcloudSourcedeployProjectStageScenarioConfigCanaryConfigToTerraform(struct?: DataNcloudSourcedeployProjectStageScenarioConfigCanaryConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNcloudSourcedeployProjectStageScenarioConfigCanaryConfigToHclTerraform(struct?: DataNcloudSourcedeployProjectStageScenarioConfigCanaryConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNcloudSourcedeployProjectStageScenarioConfigCanaryConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataNcloudSourcedeployProjectStageScenarioConfigCanaryConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNcloudSourcedeployProjectStageScenarioConfigCanaryConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // analysis_config - computed: true, optional: false, required: false
  private _analysisConfig = new DataNcloudSourcedeployProjectStageScenarioConfigCanaryConfigAnalysisConfigList(this, "analysis_config", false);
  public get analysisConfig() {
    return this._analysisConfig;
  }

  // analysis_type - computed: true, optional: false, required: false
  public get analysisType() {
    return this.getStringAttribute('analysis_type');
  }

  // canary_count - computed: true, optional: false, required: false
  public get canaryCount() {
    return this.getNumberAttribute('canary_count');
  }

  // env - computed: true, optional: false, required: false
  private _env = new DataNcloudSourcedeployProjectStageScenarioConfigCanaryConfigEnvList(this, "env", false);
  public get env() {
    return this._env;
  }

  // metrics - computed: true, optional: false, required: false
  private _metrics = new DataNcloudSourcedeployProjectStageScenarioConfigCanaryConfigMetricsList(this, "metrics", false);
  public get metrics() {
    return this._metrics;
  }

  // pass_score - computed: true, optional: false, required: false
  public get passScore() {
    return this.getNumberAttribute('pass_score');
  }

  // prometheus - computed: true, optional: false, required: false
  public get prometheus() {
    return this.getStringAttribute('prometheus');
  }

  // timeout - computed: true, optional: false, required: false
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
}

export class DataNcloudSourcedeployProjectStageScenarioConfigCanaryConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataNcloudSourcedeployProjectStageScenarioConfigCanaryConfigOutputReference {
    return new DataNcloudSourcedeployProjectStageScenarioConfigCanaryConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNcloudSourcedeployProjectStageScenarioConfigDeployCommandPath {
}

export function dataNcloudSourcedeployProjectStageScenarioConfigDeployCommandPathToTerraform(struct?: DataNcloudSourcedeployProjectStageScenarioConfigDeployCommandPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNcloudSourcedeployProjectStageScenarioConfigDeployCommandPathToHclTerraform(struct?: DataNcloudSourcedeployProjectStageScenarioConfigDeployCommandPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNcloudSourcedeployProjectStageScenarioConfigDeployCommandPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataNcloudSourcedeployProjectStageScenarioConfigDeployCommandPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNcloudSourcedeployProjectStageScenarioConfigDeployCommandPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // deploy_path - computed: true, optional: false, required: false
  public get deployPath() {
    return this.getStringAttribute('deploy_path');
  }

  // source_path - computed: true, optional: false, required: false
  public get sourcePath() {
    return this.getStringAttribute('source_path');
  }
}

export class DataNcloudSourcedeployProjectStageScenarioConfigDeployCommandPathList extends cdktf.ComplexList {

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
  public get(index: number): DataNcloudSourcedeployProjectStageScenarioConfigDeployCommandPathOutputReference {
    return new DataNcloudSourcedeployProjectStageScenarioConfigDeployCommandPathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNcloudSourcedeployProjectStageScenarioConfigDeployCommandPostDeploy {
}

export function dataNcloudSourcedeployProjectStageScenarioConfigDeployCommandPostDeployToTerraform(struct?: DataNcloudSourcedeployProjectStageScenarioConfigDeployCommandPostDeploy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNcloudSourcedeployProjectStageScenarioConfigDeployCommandPostDeployToHclTerraform(struct?: DataNcloudSourcedeployProjectStageScenarioConfigDeployCommandPostDeploy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNcloudSourcedeployProjectStageScenarioConfigDeployCommandPostDeployOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataNcloudSourcedeployProjectStageScenarioConfigDeployCommandPostDeploy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNcloudSourcedeployProjectStageScenarioConfigDeployCommandPostDeploy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // command - computed: true, optional: false, required: false
  public get command() {
    return this.getStringAttribute('command');
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }
}

export class DataNcloudSourcedeployProjectStageScenarioConfigDeployCommandPostDeployList extends cdktf.ComplexList {

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
  public get(index: number): DataNcloudSourcedeployProjectStageScenarioConfigDeployCommandPostDeployOutputReference {
    return new DataNcloudSourcedeployProjectStageScenarioConfigDeployCommandPostDeployOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNcloudSourcedeployProjectStageScenarioConfigDeployCommandPreDeploy {
}

export function dataNcloudSourcedeployProjectStageScenarioConfigDeployCommandPreDeployToTerraform(struct?: DataNcloudSourcedeployProjectStageScenarioConfigDeployCommandPreDeploy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNcloudSourcedeployProjectStageScenarioConfigDeployCommandPreDeployToHclTerraform(struct?: DataNcloudSourcedeployProjectStageScenarioConfigDeployCommandPreDeploy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNcloudSourcedeployProjectStageScenarioConfigDeployCommandPreDeployOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataNcloudSourcedeployProjectStageScenarioConfigDeployCommandPreDeploy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNcloudSourcedeployProjectStageScenarioConfigDeployCommandPreDeploy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // command - computed: true, optional: false, required: false
  public get command() {
    return this.getStringAttribute('command');
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }
}

export class DataNcloudSourcedeployProjectStageScenarioConfigDeployCommandPreDeployList extends cdktf.ComplexList {

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
  public get(index: number): DataNcloudSourcedeployProjectStageScenarioConfigDeployCommandPreDeployOutputReference {
    return new DataNcloudSourcedeployProjectStageScenarioConfigDeployCommandPreDeployOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNcloudSourcedeployProjectStageScenarioConfigDeployCommand {
}

export function dataNcloudSourcedeployProjectStageScenarioConfigDeployCommandToTerraform(struct?: DataNcloudSourcedeployProjectStageScenarioConfigDeployCommand): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNcloudSourcedeployProjectStageScenarioConfigDeployCommandToHclTerraform(struct?: DataNcloudSourcedeployProjectStageScenarioConfigDeployCommand): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNcloudSourcedeployProjectStageScenarioConfigDeployCommandOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataNcloudSourcedeployProjectStageScenarioConfigDeployCommand | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNcloudSourcedeployProjectStageScenarioConfigDeployCommand | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // path - computed: true, optional: false, required: false
  private _path = new DataNcloudSourcedeployProjectStageScenarioConfigDeployCommandPathList(this, "path", false);
  public get path() {
    return this._path;
  }

  // post_deploy - computed: true, optional: false, required: false
  private _postDeploy = new DataNcloudSourcedeployProjectStageScenarioConfigDeployCommandPostDeployList(this, "post_deploy", false);
  public get postDeploy() {
    return this._postDeploy;
  }

  // pre_deploy - computed: true, optional: false, required: false
  private _preDeploy = new DataNcloudSourcedeployProjectStageScenarioConfigDeployCommandPreDeployList(this, "pre_deploy", false);
  public get preDeploy() {
    return this._preDeploy;
  }
}

export class DataNcloudSourcedeployProjectStageScenarioConfigDeployCommandList extends cdktf.ComplexList {

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
  public get(index: number): DataNcloudSourcedeployProjectStageScenarioConfigDeployCommandOutputReference {
    return new DataNcloudSourcedeployProjectStageScenarioConfigDeployCommandOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNcloudSourcedeployProjectStageScenarioConfigFileObjectStorage {
}

export function dataNcloudSourcedeployProjectStageScenarioConfigFileObjectStorageToTerraform(struct?: DataNcloudSourcedeployProjectStageScenarioConfigFileObjectStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNcloudSourcedeployProjectStageScenarioConfigFileObjectStorageToHclTerraform(struct?: DataNcloudSourcedeployProjectStageScenarioConfigFileObjectStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNcloudSourcedeployProjectStageScenarioConfigFileObjectStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataNcloudSourcedeployProjectStageScenarioConfigFileObjectStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNcloudSourcedeployProjectStageScenarioConfigFileObjectStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // object - computed: true, optional: false, required: false
  public get object() {
    return this.getStringAttribute('object');
  }
}

export class DataNcloudSourcedeployProjectStageScenarioConfigFileObjectStorageList extends cdktf.ComplexList {

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
  public get(index: number): DataNcloudSourcedeployProjectStageScenarioConfigFileObjectStorageOutputReference {
    return new DataNcloudSourcedeployProjectStageScenarioConfigFileObjectStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNcloudSourcedeployProjectStageScenarioConfigFileSourceBuild {
}

export function dataNcloudSourcedeployProjectStageScenarioConfigFileSourceBuildToTerraform(struct?: DataNcloudSourcedeployProjectStageScenarioConfigFileSourceBuild): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNcloudSourcedeployProjectStageScenarioConfigFileSourceBuildToHclTerraform(struct?: DataNcloudSourcedeployProjectStageScenarioConfigFileSourceBuild): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNcloudSourcedeployProjectStageScenarioConfigFileSourceBuildOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataNcloudSourcedeployProjectStageScenarioConfigFileSourceBuild | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNcloudSourcedeployProjectStageScenarioConfigFileSourceBuild | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataNcloudSourcedeployProjectStageScenarioConfigFileSourceBuildList extends cdktf.ComplexList {

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
  public get(index: number): DataNcloudSourcedeployProjectStageScenarioConfigFileSourceBuildOutputReference {
    return new DataNcloudSourcedeployProjectStageScenarioConfigFileSourceBuildOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNcloudSourcedeployProjectStageScenarioConfigFile {
}

export function dataNcloudSourcedeployProjectStageScenarioConfigFileToTerraform(struct?: DataNcloudSourcedeployProjectStageScenarioConfigFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNcloudSourcedeployProjectStageScenarioConfigFileToHclTerraform(struct?: DataNcloudSourcedeployProjectStageScenarioConfigFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNcloudSourcedeployProjectStageScenarioConfigFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataNcloudSourcedeployProjectStageScenarioConfigFile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNcloudSourcedeployProjectStageScenarioConfigFile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // object_storage - computed: true, optional: false, required: false
  private _objectStorage = new DataNcloudSourcedeployProjectStageScenarioConfigFileObjectStorageList(this, "object_storage", false);
  public get objectStorage() {
    return this._objectStorage;
  }

  // source_build - computed: true, optional: false, required: false
  private _sourceBuild = new DataNcloudSourcedeployProjectStageScenarioConfigFileSourceBuildList(this, "source_build", false);
  public get sourceBuild() {
    return this._sourceBuild;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataNcloudSourcedeployProjectStageScenarioConfigFileList extends cdktf.ComplexList {

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
  public get(index: number): DataNcloudSourcedeployProjectStageScenarioConfigFileOutputReference {
    return new DataNcloudSourcedeployProjectStageScenarioConfigFileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNcloudSourcedeployProjectStageScenarioConfigLoadBalancer {
}

export function dataNcloudSourcedeployProjectStageScenarioConfigLoadBalancerToTerraform(struct?: DataNcloudSourcedeployProjectStageScenarioConfigLoadBalancer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNcloudSourcedeployProjectStageScenarioConfigLoadBalancerToHclTerraform(struct?: DataNcloudSourcedeployProjectStageScenarioConfigLoadBalancer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNcloudSourcedeployProjectStageScenarioConfigLoadBalancerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataNcloudSourcedeployProjectStageScenarioConfigLoadBalancer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNcloudSourcedeployProjectStageScenarioConfigLoadBalancer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // delete_server - computed: true, optional: false, required: false
  public get deleteServer() {
    return this.getBooleanAttribute('delete_server');
  }

  // load_balancer_target_group_name - computed: true, optional: false, required: false
  public get loadBalancerTargetGroupName() {
    return this.getStringAttribute('load_balancer_target_group_name');
  }

  // load_balancer_target_group_no - computed: true, optional: false, required: false
  public get loadBalancerTargetGroupNo() {
    return this.getNumberAttribute('load_balancer_target_group_no');
  }
}

export class DataNcloudSourcedeployProjectStageScenarioConfigLoadBalancerList extends cdktf.ComplexList {

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
  public get(index: number): DataNcloudSourcedeployProjectStageScenarioConfigLoadBalancerOutputReference {
    return new DataNcloudSourcedeployProjectStageScenarioConfigLoadBalancerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNcloudSourcedeployProjectStageScenarioConfigManifest {
}

export function dataNcloudSourcedeployProjectStageScenarioConfigManifestToTerraform(struct?: DataNcloudSourcedeployProjectStageScenarioConfigManifest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNcloudSourcedeployProjectStageScenarioConfigManifestToHclTerraform(struct?: DataNcloudSourcedeployProjectStageScenarioConfigManifest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNcloudSourcedeployProjectStageScenarioConfigManifestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataNcloudSourcedeployProjectStageScenarioConfigManifest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNcloudSourcedeployProjectStageScenarioConfigManifest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // branch - computed: true, optional: false, required: false
  public get branch() {
    return this.getStringAttribute('branch');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getListAttribute('path');
  }

  // repository_name - computed: true, optional: false, required: false
  public get repositoryName() {
    return this.getStringAttribute('repository_name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataNcloudSourcedeployProjectStageScenarioConfigManifestList extends cdktf.ComplexList {

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
  public get(index: number): DataNcloudSourcedeployProjectStageScenarioConfigManifestOutputReference {
    return new DataNcloudSourcedeployProjectStageScenarioConfigManifestOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNcloudSourcedeployProjectStageScenarioConfigPath {
}

export function dataNcloudSourcedeployProjectStageScenarioConfigPathToTerraform(struct?: DataNcloudSourcedeployProjectStageScenarioConfigPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNcloudSourcedeployProjectStageScenarioConfigPathToHclTerraform(struct?: DataNcloudSourcedeployProjectStageScenarioConfigPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNcloudSourcedeployProjectStageScenarioConfigPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataNcloudSourcedeployProjectStageScenarioConfigPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNcloudSourcedeployProjectStageScenarioConfigPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // deploy_path - computed: true, optional: false, required: false
  public get deployPath() {
    return this.getListAttribute('deploy_path');
  }

  // source_path - computed: true, optional: false, required: false
  public get sourcePath() {
    return this.getListAttribute('source_path');
  }
}

export class DataNcloudSourcedeployProjectStageScenarioConfigPathList extends cdktf.ComplexList {

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
  public get(index: number): DataNcloudSourcedeployProjectStageScenarioConfigPathOutputReference {
    return new DataNcloudSourcedeployProjectStageScenarioConfigPathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNcloudSourcedeployProjectStageScenarioConfigA {
}

export function dataNcloudSourcedeployProjectStageScenarioConfigAToTerraform(struct?: DataNcloudSourcedeployProjectStageScenarioConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNcloudSourcedeployProjectStageScenarioConfigAToHclTerraform(struct?: DataNcloudSourcedeployProjectStageScenarioConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNcloudSourcedeployProjectStageScenarioConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataNcloudSourcedeployProjectStageScenarioConfigA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNcloudSourcedeployProjectStageScenarioConfigA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // canary_config - computed: true, optional: false, required: false
  private _canaryConfig = new DataNcloudSourcedeployProjectStageScenarioConfigCanaryConfigList(this, "canary_config", false);
  public get canaryConfig() {
    return this._canaryConfig;
  }

  // deploy_command - computed: true, optional: false, required: false
  private _deployCommand = new DataNcloudSourcedeployProjectStageScenarioConfigDeployCommandList(this, "deploy_command", false);
  public get deployCommand() {
    return this._deployCommand;
  }

  // file - computed: true, optional: false, required: false
  private _file = new DataNcloudSourcedeployProjectStageScenarioConfigFileList(this, "file", false);
  public get file() {
    return this._file;
  }

  // load_balancer - computed: true, optional: false, required: false
  private _loadBalancer = new DataNcloudSourcedeployProjectStageScenarioConfigLoadBalancerList(this, "load_balancer", false);
  public get loadBalancer() {
    return this._loadBalancer;
  }

  // manifest - computed: true, optional: false, required: false
  private _manifest = new DataNcloudSourcedeployProjectStageScenarioConfigManifestList(this, "manifest", false);
  public get manifest() {
    return this._manifest;
  }

  // path - computed: true, optional: false, required: false
  private _path = new DataNcloudSourcedeployProjectStageScenarioConfigPathList(this, "path", false);
  public get path() {
    return this._path;
  }

  // rollback - computed: true, optional: false, required: false
  public get rollback() {
    return this.getBooleanAttribute('rollback');
  }

  // strategy - computed: true, optional: false, required: false
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
}

export class DataNcloudSourcedeployProjectStageScenarioConfigAList extends cdktf.ComplexList {

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
  public get(index: number): DataNcloudSourcedeployProjectStageScenarioConfigAOutputReference {
    return new DataNcloudSourcedeployProjectStageScenarioConfigAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/sourcedeploy_project_stage_scenario ncloud_sourcedeploy_project_stage_scenario}
*/
export class DataNcloudSourcedeployProjectStageScenario extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ncloud_sourcedeploy_project_stage_scenario";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNcloudSourcedeployProjectStageScenario resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNcloudSourcedeployProjectStageScenario to import
  * @param importFromId The id of the existing DataNcloudSourcedeployProjectStageScenario that should be imported. Refer to the {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/sourcedeploy_project_stage_scenario#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNcloudSourcedeployProjectStageScenario to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ncloud_sourcedeploy_project_stage_scenario", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/sourcedeploy_project_stage_scenario ncloud_sourcedeploy_project_stage_scenario} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNcloudSourcedeployProjectStageScenarioConfig
  */
  public constructor(scope: Construct, id: string, config: DataNcloudSourcedeployProjectStageScenarioConfig) {
    super(scope, id, {
      terraformResourceType: 'ncloud_sourcedeploy_project_stage_scenario',
      terraformGeneratorMetadata: {
        providerName: 'ncloud',
        providerVersion: '4.0.4'
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
    this._projectId = config.projectId;
    this._stageId = config.stageId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config - computed: true, optional: false, required: false
  private _config = new DataNcloudSourcedeployProjectStageScenarioConfigAList(this, "config", false);
  public get config() {
    return this._config;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.numberToTerraform(this._id),
      project_id: cdktf.numberToTerraform(this._projectId),
      stage_id: cdktf.numberToTerraform(this._stageId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.numberToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
