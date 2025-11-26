// https://registry.terraform.io/providers/spacelift-io/spacelift/1.40.0/docs/data-sources/scheduled_run
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSpaceliftScheduledRunConfig extends cdktf.TerraformMetaArguments {
  /**
  * Timestamp (unix timestamp) at which time the scheduled run should happen.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.40.0/docs/data-sources/scheduled_run#at DataSpaceliftScheduledRun#at}
  */
  readonly at?: number;
  /**
  * List of cron schedule expressions based on which the scheduled run should be triggered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.40.0/docs/data-sources/scheduled_run#every DataSpaceliftScheduledRun#every}
  */
  readonly every?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.40.0/docs/data-sources/scheduled_run#id DataSpaceliftScheduledRun#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the scheduled run
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.40.0/docs/data-sources/scheduled_run#name DataSpaceliftScheduledRun#name}
  */
  readonly name?: string;
  /**
  * ID of the scheduled run (stack_id/schedule_id)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.40.0/docs/data-sources/scheduled_run#scheduled_run_id DataSpaceliftScheduledRun#scheduled_run_id}
  */
  readonly scheduledRunId: string;
  /**
  * Timezone in which the schedule is expressed. Defaults to `UTC`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.40.0/docs/data-sources/scheduled_run#timezone DataSpaceliftScheduledRun#timezone}
  */
  readonly timezone?: string;
  /**
  * runtime_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.40.0/docs/data-sources/scheduled_run#runtime_config DataSpaceliftScheduledRun#runtime_config}
  */
  readonly runtimeConfig?: DataSpaceliftScheduledRunRuntimeConfig[] | cdktf.IResolvable;
}
export interface DataSpaceliftScheduledRunRuntimeConfigEnvironment {
}

export function dataSpaceliftScheduledRunRuntimeConfigEnvironmentToTerraform(struct?: DataSpaceliftScheduledRunRuntimeConfigEnvironment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSpaceliftScheduledRunRuntimeConfigEnvironmentToHclTerraform(struct?: DataSpaceliftScheduledRunRuntimeConfigEnvironment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSpaceliftScheduledRunRuntimeConfigEnvironmentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSpaceliftScheduledRunRuntimeConfigEnvironment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSpaceliftScheduledRunRuntimeConfigEnvironment | cdktf.IResolvable | undefined) {
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

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataSpaceliftScheduledRunRuntimeConfigEnvironmentList extends cdktf.ComplexList {
  public internalValue? : DataSpaceliftScheduledRunRuntimeConfigEnvironment[] | cdktf.IResolvable

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
  public get(index: number): DataSpaceliftScheduledRunRuntimeConfigEnvironmentOutputReference {
    return new DataSpaceliftScheduledRunRuntimeConfigEnvironmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSpaceliftScheduledRunRuntimeConfig {
  /**
  * List of after-apply scripts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.40.0/docs/data-sources/scheduled_run#after_apply DataSpaceliftScheduledRun#after_apply}
  */
  readonly afterApply?: string[];
  /**
  * List of after-destroy scripts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.40.0/docs/data-sources/scheduled_run#after_destroy DataSpaceliftScheduledRun#after_destroy}
  */
  readonly afterDestroy?: string[];
  /**
  * List of after-init scripts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.40.0/docs/data-sources/scheduled_run#after_init DataSpaceliftScheduledRun#after_init}
  */
  readonly afterInit?: string[];
  /**
  * List of after-perform scripts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.40.0/docs/data-sources/scheduled_run#after_perform DataSpaceliftScheduledRun#after_perform}
  */
  readonly afterPerform?: string[];
  /**
  * List of after-plan scripts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.40.0/docs/data-sources/scheduled_run#after_plan DataSpaceliftScheduledRun#after_plan}
  */
  readonly afterPlan?: string[];
  /**
  * List of after-run scripts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.40.0/docs/data-sources/scheduled_run#after_run DataSpaceliftScheduledRun#after_run}
  */
  readonly afterRun?: string[];
  /**
  * List of before-apply scripts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.40.0/docs/data-sources/scheduled_run#before_apply DataSpaceliftScheduledRun#before_apply}
  */
  readonly beforeApply?: string[];
  /**
  * List of before-destroy scripts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.40.0/docs/data-sources/scheduled_run#before_destroy DataSpaceliftScheduledRun#before_destroy}
  */
  readonly beforeDestroy?: string[];
  /**
  * List of before-init scripts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.40.0/docs/data-sources/scheduled_run#before_init DataSpaceliftScheduledRun#before_init}
  */
  readonly beforeInit?: string[];
  /**
  * List of before-perform scripts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.40.0/docs/data-sources/scheduled_run#before_perform DataSpaceliftScheduledRun#before_perform}
  */
  readonly beforePerform?: string[];
  /**
  * List of before-plan scripts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.40.0/docs/data-sources/scheduled_run#before_plan DataSpaceliftScheduledRun#before_plan}
  */
  readonly beforePlan?: string[];
  /**
  * Project root is the optional directory relative to the workspace root containing the entrypoint to the Stack.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.40.0/docs/data-sources/scheduled_run#project_root DataSpaceliftScheduledRun#project_root}
  */
  readonly projectRoot?: string;
  /**
  * Name of the Docker image used to process Runs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.40.0/docs/data-sources/scheduled_run#runner_image DataSpaceliftScheduledRun#runner_image}
  */
  readonly runnerImage?: string;
  /**
  * environment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.40.0/docs/data-sources/scheduled_run#environment DataSpaceliftScheduledRun#environment}
  */
  readonly environment?: DataSpaceliftScheduledRunRuntimeConfigEnvironment[] | cdktf.IResolvable;
}

export function dataSpaceliftScheduledRunRuntimeConfigToTerraform(struct?: DataSpaceliftScheduledRunRuntimeConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    after_apply: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.afterApply),
    after_destroy: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.afterDestroy),
    after_init: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.afterInit),
    after_perform: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.afterPerform),
    after_plan: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.afterPlan),
    after_run: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.afterRun),
    before_apply: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.beforeApply),
    before_destroy: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.beforeDestroy),
    before_init: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.beforeInit),
    before_perform: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.beforePerform),
    before_plan: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.beforePlan),
    project_root: cdktf.stringToTerraform(struct!.projectRoot),
    runner_image: cdktf.stringToTerraform(struct!.runnerImage),
    environment: cdktf.listMapper(dataSpaceliftScheduledRunRuntimeConfigEnvironmentToTerraform, true)(struct!.environment),
  }
}


export function dataSpaceliftScheduledRunRuntimeConfigToHclTerraform(struct?: DataSpaceliftScheduledRunRuntimeConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    after_apply: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.afterApply),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    after_destroy: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.afterDestroy),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    after_init: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.afterInit),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    after_perform: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.afterPerform),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    after_plan: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.afterPlan),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    after_run: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.afterRun),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    before_apply: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.beforeApply),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    before_destroy: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.beforeDestroy),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    before_init: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.beforeInit),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    before_perform: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.beforePerform),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    before_plan: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.beforePlan),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    project_root: {
      value: cdktf.stringToHclTerraform(struct!.projectRoot),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    runner_image: {
      value: cdktf.stringToHclTerraform(struct!.runnerImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    environment: {
      value: cdktf.listMapperHcl(dataSpaceliftScheduledRunRuntimeConfigEnvironmentToHclTerraform, true)(struct!.environment),
      isBlock: true,
      type: "set",
      storageClassType: "DataSpaceliftScheduledRunRuntimeConfigEnvironmentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSpaceliftScheduledRunRuntimeConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSpaceliftScheduledRunRuntimeConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._afterApply !== undefined) {
      hasAnyValues = true;
      internalValueResult.afterApply = this._afterApply;
    }
    if (this._afterDestroy !== undefined) {
      hasAnyValues = true;
      internalValueResult.afterDestroy = this._afterDestroy;
    }
    if (this._afterInit !== undefined) {
      hasAnyValues = true;
      internalValueResult.afterInit = this._afterInit;
    }
    if (this._afterPerform !== undefined) {
      hasAnyValues = true;
      internalValueResult.afterPerform = this._afterPerform;
    }
    if (this._afterPlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.afterPlan = this._afterPlan;
    }
    if (this._afterRun !== undefined) {
      hasAnyValues = true;
      internalValueResult.afterRun = this._afterRun;
    }
    if (this._beforeApply !== undefined) {
      hasAnyValues = true;
      internalValueResult.beforeApply = this._beforeApply;
    }
    if (this._beforeDestroy !== undefined) {
      hasAnyValues = true;
      internalValueResult.beforeDestroy = this._beforeDestroy;
    }
    if (this._beforeInit !== undefined) {
      hasAnyValues = true;
      internalValueResult.beforeInit = this._beforeInit;
    }
    if (this._beforePerform !== undefined) {
      hasAnyValues = true;
      internalValueResult.beforePerform = this._beforePerform;
    }
    if (this._beforePlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.beforePlan = this._beforePlan;
    }
    if (this._projectRoot !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectRoot = this._projectRoot;
    }
    if (this._runnerImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.runnerImage = this._runnerImage;
    }
    if (this._environment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSpaceliftScheduledRunRuntimeConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._afterApply = undefined;
      this._afterDestroy = undefined;
      this._afterInit = undefined;
      this._afterPerform = undefined;
      this._afterPlan = undefined;
      this._afterRun = undefined;
      this._beforeApply = undefined;
      this._beforeDestroy = undefined;
      this._beforeInit = undefined;
      this._beforePerform = undefined;
      this._beforePlan = undefined;
      this._projectRoot = undefined;
      this._runnerImage = undefined;
      this._environment.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._afterApply = value.afterApply;
      this._afterDestroy = value.afterDestroy;
      this._afterInit = value.afterInit;
      this._afterPerform = value.afterPerform;
      this._afterPlan = value.afterPlan;
      this._afterRun = value.afterRun;
      this._beforeApply = value.beforeApply;
      this._beforeDestroy = value.beforeDestroy;
      this._beforeInit = value.beforeInit;
      this._beforePerform = value.beforePerform;
      this._beforePlan = value.beforePlan;
      this._projectRoot = value.projectRoot;
      this._runnerImage = value.runnerImage;
      this._environment.internalValue = value.environment;
    }
  }

  // after_apply - computed: true, optional: true, required: false
  private _afterApply?: string[]; 
  public get afterApply() {
    return this.getListAttribute('after_apply');
  }
  public set afterApply(value: string[]) {
    this._afterApply = value;
  }
  public resetAfterApply() {
    this._afterApply = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get afterApplyInput() {
    return this._afterApply;
  }

  // after_destroy - computed: true, optional: true, required: false
  private _afterDestroy?: string[]; 
  public get afterDestroy() {
    return this.getListAttribute('after_destroy');
  }
  public set afterDestroy(value: string[]) {
    this._afterDestroy = value;
  }
  public resetAfterDestroy() {
    this._afterDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get afterDestroyInput() {
    return this._afterDestroy;
  }

  // after_init - computed: true, optional: true, required: false
  private _afterInit?: string[]; 
  public get afterInit() {
    return this.getListAttribute('after_init');
  }
  public set afterInit(value: string[]) {
    this._afterInit = value;
  }
  public resetAfterInit() {
    this._afterInit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get afterInitInput() {
    return this._afterInit;
  }

  // after_perform - computed: true, optional: true, required: false
  private _afterPerform?: string[]; 
  public get afterPerform() {
    return this.getListAttribute('after_perform');
  }
  public set afterPerform(value: string[]) {
    this._afterPerform = value;
  }
  public resetAfterPerform() {
    this._afterPerform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get afterPerformInput() {
    return this._afterPerform;
  }

  // after_plan - computed: true, optional: true, required: false
  private _afterPlan?: string[]; 
  public get afterPlan() {
    return this.getListAttribute('after_plan');
  }
  public set afterPlan(value: string[]) {
    this._afterPlan = value;
  }
  public resetAfterPlan() {
    this._afterPlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get afterPlanInput() {
    return this._afterPlan;
  }

  // after_run - computed: true, optional: true, required: false
  private _afterRun?: string[]; 
  public get afterRun() {
    return this.getListAttribute('after_run');
  }
  public set afterRun(value: string[]) {
    this._afterRun = value;
  }
  public resetAfterRun() {
    this._afterRun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get afterRunInput() {
    return this._afterRun;
  }

  // before_apply - computed: true, optional: true, required: false
  private _beforeApply?: string[]; 
  public get beforeApply() {
    return this.getListAttribute('before_apply');
  }
  public set beforeApply(value: string[]) {
    this._beforeApply = value;
  }
  public resetBeforeApply() {
    this._beforeApply = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beforeApplyInput() {
    return this._beforeApply;
  }

  // before_destroy - computed: true, optional: true, required: false
  private _beforeDestroy?: string[]; 
  public get beforeDestroy() {
    return this.getListAttribute('before_destroy');
  }
  public set beforeDestroy(value: string[]) {
    this._beforeDestroy = value;
  }
  public resetBeforeDestroy() {
    this._beforeDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beforeDestroyInput() {
    return this._beforeDestroy;
  }

  // before_init - computed: true, optional: true, required: false
  private _beforeInit?: string[]; 
  public get beforeInit() {
    return this.getListAttribute('before_init');
  }
  public set beforeInit(value: string[]) {
    this._beforeInit = value;
  }
  public resetBeforeInit() {
    this._beforeInit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beforeInitInput() {
    return this._beforeInit;
  }

  // before_perform - computed: true, optional: true, required: false
  private _beforePerform?: string[]; 
  public get beforePerform() {
    return this.getListAttribute('before_perform');
  }
  public set beforePerform(value: string[]) {
    this._beforePerform = value;
  }
  public resetBeforePerform() {
    this._beforePerform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beforePerformInput() {
    return this._beforePerform;
  }

  // before_plan - computed: true, optional: true, required: false
  private _beforePlan?: string[]; 
  public get beforePlan() {
    return this.getListAttribute('before_plan');
  }
  public set beforePlan(value: string[]) {
    this._beforePlan = value;
  }
  public resetBeforePlan() {
    this._beforePlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beforePlanInput() {
    return this._beforePlan;
  }

  // project_root - computed: true, optional: true, required: false
  private _projectRoot?: string; 
  public get projectRoot() {
    return this.getStringAttribute('project_root');
  }
  public set projectRoot(value: string) {
    this._projectRoot = value;
  }
  public resetProjectRoot() {
    this._projectRoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectRootInput() {
    return this._projectRoot;
  }

  // runner_image - computed: true, optional: true, required: false
  private _runnerImage?: string; 
  public get runnerImage() {
    return this.getStringAttribute('runner_image');
  }
  public set runnerImage(value: string) {
    this._runnerImage = value;
  }
  public resetRunnerImage() {
    this._runnerImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runnerImageInput() {
    return this._runnerImage;
  }

  // terraform_version - computed: true, optional: false, required: false
  public get terraformVersion() {
    return this.getStringAttribute('terraform_version');
  }

  // terraform_workflow_tool - computed: true, optional: false, required: false
  public get terraformWorkflowTool() {
    return this.getStringAttribute('terraform_workflow_tool');
  }

  // environment - computed: false, optional: true, required: false
  private _environment = new DataSpaceliftScheduledRunRuntimeConfigEnvironmentList(this, "environment", true);
  public get environment() {
    return this._environment;
  }
  public putEnvironment(value: DataSpaceliftScheduledRunRuntimeConfigEnvironment[] | cdktf.IResolvable) {
    this._environment.internalValue = value;
  }
  public resetEnvironment() {
    this._environment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment.internalValue;
  }
}

export class DataSpaceliftScheduledRunRuntimeConfigList extends cdktf.ComplexList {
  public internalValue? : DataSpaceliftScheduledRunRuntimeConfig[] | cdktf.IResolvable

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
  public get(index: number): DataSpaceliftScheduledRunRuntimeConfigOutputReference {
    return new DataSpaceliftScheduledRunRuntimeConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.40.0/docs/data-sources/scheduled_run spacelift_scheduled_run}
*/
export class DataSpaceliftScheduledRun extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spacelift_scheduled_run";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSpaceliftScheduledRun resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSpaceliftScheduledRun to import
  * @param importFromId The id of the existing DataSpaceliftScheduledRun that should be imported. Refer to the {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.40.0/docs/data-sources/scheduled_run#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSpaceliftScheduledRun to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "spacelift_scheduled_run", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.40.0/docs/data-sources/scheduled_run spacelift_scheduled_run} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSpaceliftScheduledRunConfig
  */
  public constructor(scope: Construct, id: string, config: DataSpaceliftScheduledRunConfig) {
    super(scope, id, {
      terraformResourceType: 'spacelift_scheduled_run',
      terraformGeneratorMetadata: {
        providerName: 'spacelift',
        providerVersion: '1.40.0',
        providerVersionConstraint: '1.40.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._at = config.at;
    this._every = config.every;
    this._id = config.id;
    this._name = config.name;
    this._scheduledRunId = config.scheduledRunId;
    this._timezone = config.timezone;
    this._runtimeConfig.internalValue = config.runtimeConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // at - computed: true, optional: true, required: false
  private _at?: number; 
  public get at() {
    return this.getNumberAttribute('at');
  }
  public set at(value: number) {
    this._at = value;
  }
  public resetAt() {
    this._at = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atInput() {
    return this._at;
  }

  // every - computed: true, optional: true, required: false
  private _every?: string[]; 
  public get every() {
    return this.getListAttribute('every');
  }
  public set every(value: string[]) {
    this._every = value;
  }
  public resetEvery() {
    this._every = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get everyInput() {
    return this._every;
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

  // name - computed: true, optional: true, required: false
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

  // next_schedule - computed: true, optional: false, required: false
  public get nextSchedule() {
    return this.getNumberAttribute('next_schedule');
  }

  // schedule_id - computed: true, optional: false, required: false
  public get scheduleId() {
    return this.getStringAttribute('schedule_id');
  }

  // scheduled_run_id - computed: false, optional: false, required: true
  private _scheduledRunId?: string; 
  public get scheduledRunId() {
    return this.getStringAttribute('scheduled_run_id');
  }
  public set scheduledRunId(value: string) {
    this._scheduledRunId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledRunIdInput() {
    return this._scheduledRunId;
  }

  // stack_id - computed: true, optional: false, required: false
  public get stackId() {
    return this.getStringAttribute('stack_id');
  }

  // timezone - computed: true, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // runtime_config - computed: false, optional: true, required: false
  private _runtimeConfig = new DataSpaceliftScheduledRunRuntimeConfigList(this, "runtime_config", false);
  public get runtimeConfig() {
    return this._runtimeConfig;
  }
  public putRuntimeConfig(value: DataSpaceliftScheduledRunRuntimeConfig[] | cdktf.IResolvable) {
    this._runtimeConfig.internalValue = value;
  }
  public resetRuntimeConfig() {
    this._runtimeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeConfigInput() {
    return this._runtimeConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      at: cdktf.numberToTerraform(this._at),
      every: cdktf.listMapper(cdktf.stringToTerraform, false)(this._every),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      scheduled_run_id: cdktf.stringToTerraform(this._scheduledRunId),
      timezone: cdktf.stringToTerraform(this._timezone),
      runtime_config: cdktf.listMapper(dataSpaceliftScheduledRunRuntimeConfigToTerraform, true)(this._runtimeConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      at: {
        value: cdktf.numberToHclTerraform(this._at),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      every: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._every),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
      scheduled_run_id: {
        value: cdktf.stringToHclTerraform(this._scheduledRunId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timezone: {
        value: cdktf.stringToHclTerraform(this._timezone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      runtime_config: {
        value: cdktf.listMapperHcl(dataSpaceliftScheduledRunRuntimeConfigToHclTerraform, true)(this._runtimeConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataSpaceliftScheduledRunRuntimeConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
