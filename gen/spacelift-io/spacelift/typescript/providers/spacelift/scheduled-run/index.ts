// https://registry.terraform.io/providers/spacelift-io/spacelift/1.38.0/docs/resources/scheduled_run
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ScheduledRunConfig extends cdktf.TerraformMetaArguments {
  /**
  * Timestamp (unix timestamp) at which time the scheduled run should happen.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.38.0/docs/resources/scheduled_run#at ScheduledRun#at}
  */
  readonly at?: number;
  /**
  * List of cron schedule expressions based on which the scheduled run should be triggered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.38.0/docs/resources/scheduled_run#every ScheduledRun#every}
  */
  readonly every?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.38.0/docs/resources/scheduled_run#id ScheduledRun#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the scheduled run
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.38.0/docs/resources/scheduled_run#name ScheduledRun#name}
  */
  readonly name?: string;
  /**
  * ID of the schedule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.38.0/docs/resources/scheduled_run#schedule_id ScheduledRun#schedule_id}
  */
  readonly scheduleId?: string;
  /**
  * ID of the stack for which to set up the scheduled run
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.38.0/docs/resources/scheduled_run#stack_id ScheduledRun#stack_id}
  */
  readonly stackId: string;
  /**
  * Timezone in which the schedule is expressed. Defaults to `UTC`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.38.0/docs/resources/scheduled_run#timezone ScheduledRun#timezone}
  */
  readonly timezone?: string;
  /**
  * runtime_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.38.0/docs/resources/scheduled_run#runtime_config ScheduledRun#runtime_config}
  */
  readonly runtimeConfig?: ScheduledRunRuntimeConfig;
}
export interface ScheduledRunRuntimeConfigEnvironment {
  /**
  * Environment variable key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.38.0/docs/resources/scheduled_run#key ScheduledRun#key}
  */
  readonly key: string;
  /**
  * Environment variable value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.38.0/docs/resources/scheduled_run#value ScheduledRun#value}
  */
  readonly value: string;
}

export function scheduledRunRuntimeConfigEnvironmentToTerraform(struct?: ScheduledRunRuntimeConfigEnvironment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function scheduledRunRuntimeConfigEnvironmentToHclTerraform(struct?: ScheduledRunRuntimeConfigEnvironment | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScheduledRunRuntimeConfigEnvironmentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ScheduledRunRuntimeConfigEnvironment | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScheduledRunRuntimeConfigEnvironment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
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

export class ScheduledRunRuntimeConfigEnvironmentList extends cdktf.ComplexList {
  public internalValue? : ScheduledRunRuntimeConfigEnvironment[] | cdktf.IResolvable

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
  public get(index: number): ScheduledRunRuntimeConfigEnvironmentOutputReference {
    return new ScheduledRunRuntimeConfigEnvironmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ScheduledRunRuntimeConfig {
  /**
  * List of after-apply scripts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.38.0/docs/resources/scheduled_run#after_apply ScheduledRun#after_apply}
  */
  readonly afterApply?: string[];
  /**
  * List of after-destroy scripts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.38.0/docs/resources/scheduled_run#after_destroy ScheduledRun#after_destroy}
  */
  readonly afterDestroy?: string[];
  /**
  * List of after-init scripts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.38.0/docs/resources/scheduled_run#after_init ScheduledRun#after_init}
  */
  readonly afterInit?: string[];
  /**
  * List of after-perform scripts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.38.0/docs/resources/scheduled_run#after_perform ScheduledRun#after_perform}
  */
  readonly afterPerform?: string[];
  /**
  * List of after-plan scripts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.38.0/docs/resources/scheduled_run#after_plan ScheduledRun#after_plan}
  */
  readonly afterPlan?: string[];
  /**
  * List of after-run scripts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.38.0/docs/resources/scheduled_run#after_run ScheduledRun#after_run}
  */
  readonly afterRun?: string[];
  /**
  * List of before-apply scripts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.38.0/docs/resources/scheduled_run#before_apply ScheduledRun#before_apply}
  */
  readonly beforeApply?: string[];
  /**
  * List of before-destroy scripts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.38.0/docs/resources/scheduled_run#before_destroy ScheduledRun#before_destroy}
  */
  readonly beforeDestroy?: string[];
  /**
  * List of before-init scripts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.38.0/docs/resources/scheduled_run#before_init ScheduledRun#before_init}
  */
  readonly beforeInit?: string[];
  /**
  * List of before-perform scripts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.38.0/docs/resources/scheduled_run#before_perform ScheduledRun#before_perform}
  */
  readonly beforePerform?: string[];
  /**
  * List of before-plan scripts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.38.0/docs/resources/scheduled_run#before_plan ScheduledRun#before_plan}
  */
  readonly beforePlan?: string[];
  /**
  * Project root is the optional directory relative to the workspace root containing the entrypoint to the Stack.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.38.0/docs/resources/scheduled_run#project_root ScheduledRun#project_root}
  */
  readonly projectRoot?: string;
  /**
  * Name of the Docker image used to process Runs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.38.0/docs/resources/scheduled_run#runner_image ScheduledRun#runner_image}
  */
  readonly runnerImage?: string;
  /**
  * environment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.38.0/docs/resources/scheduled_run#environment ScheduledRun#environment}
  */
  readonly environment?: ScheduledRunRuntimeConfigEnvironment[] | cdktf.IResolvable;
}

export function scheduledRunRuntimeConfigToTerraform(struct?: ScheduledRunRuntimeConfigOutputReference | ScheduledRunRuntimeConfig): any {
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
    environment: cdktf.listMapper(scheduledRunRuntimeConfigEnvironmentToTerraform, true)(struct!.environment),
  }
}


export function scheduledRunRuntimeConfigToHclTerraform(struct?: ScheduledRunRuntimeConfigOutputReference | ScheduledRunRuntimeConfig): any {
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
      value: cdktf.listMapperHcl(scheduledRunRuntimeConfigEnvironmentToHclTerraform, true)(struct!.environment),
      isBlock: true,
      type: "set",
      storageClassType: "ScheduledRunRuntimeConfigEnvironmentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScheduledRunRuntimeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ScheduledRunRuntimeConfig | undefined {
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

  public set internalValue(value: ScheduledRunRuntimeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
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
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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

  // after_apply - computed: false, optional: true, required: false
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

  // after_destroy - computed: false, optional: true, required: false
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

  // after_init - computed: false, optional: true, required: false
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

  // after_perform - computed: false, optional: true, required: false
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

  // after_plan - computed: false, optional: true, required: false
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

  // after_run - computed: false, optional: true, required: false
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

  // before_apply - computed: false, optional: true, required: false
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

  // before_destroy - computed: false, optional: true, required: false
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

  // before_init - computed: false, optional: true, required: false
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

  // before_perform - computed: false, optional: true, required: false
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

  // before_plan - computed: false, optional: true, required: false
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

  // project_root - computed: false, optional: true, required: false
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

  // runner_image - computed: false, optional: true, required: false
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
  private _environment = new ScheduledRunRuntimeConfigEnvironmentList(this, "environment", true);
  public get environment() {
    return this._environment;
  }
  public putEnvironment(value: ScheduledRunRuntimeConfigEnvironment[] | cdktf.IResolvable) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.38.0/docs/resources/scheduled_run spacelift_scheduled_run}
*/
export class ScheduledRun extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spacelift_scheduled_run";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ScheduledRun resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ScheduledRun to import
  * @param importFromId The id of the existing ScheduledRun that should be imported. Refer to the {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.38.0/docs/resources/scheduled_run#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ScheduledRun to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "spacelift_scheduled_run", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.38.0/docs/resources/scheduled_run spacelift_scheduled_run} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ScheduledRunConfig
  */
  public constructor(scope: Construct, id: string, config: ScheduledRunConfig) {
    super(scope, id, {
      terraformResourceType: 'spacelift_scheduled_run',
      terraformGeneratorMetadata: {
        providerName: 'spacelift',
        providerVersion: '1.38.0',
        providerVersionConstraint: '1.38.0'
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
    this._scheduleId = config.scheduleId;
    this._stackId = config.stackId;
    this._timezone = config.timezone;
    this._runtimeConfig.internalValue = config.runtimeConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // at - computed: false, optional: true, required: false
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

  // every - computed: false, optional: true, required: false
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

  // next_schedule - computed: true, optional: false, required: false
  public get nextSchedule() {
    return this.getNumberAttribute('next_schedule');
  }

  // schedule_id - computed: true, optional: true, required: false
  private _scheduleId?: string; 
  public get scheduleId() {
    return this.getStringAttribute('schedule_id');
  }
  public set scheduleId(value: string) {
    this._scheduleId = value;
  }
  public resetScheduleId() {
    this._scheduleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleIdInput() {
    return this._scheduleId;
  }

  // stack_id - computed: false, optional: false, required: true
  private _stackId?: string; 
  public get stackId() {
    return this.getStringAttribute('stack_id');
  }
  public set stackId(value: string) {
    this._stackId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stackIdInput() {
    return this._stackId;
  }

  // timezone - computed: false, optional: true, required: false
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
  private _runtimeConfig = new ScheduledRunRuntimeConfigOutputReference(this, "runtime_config");
  public get runtimeConfig() {
    return this._runtimeConfig;
  }
  public putRuntimeConfig(value: ScheduledRunRuntimeConfig) {
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
      schedule_id: cdktf.stringToTerraform(this._scheduleId),
      stack_id: cdktf.stringToTerraform(this._stackId),
      timezone: cdktf.stringToTerraform(this._timezone),
      runtime_config: scheduledRunRuntimeConfigToTerraform(this._runtimeConfig.internalValue),
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
      schedule_id: {
        value: cdktf.stringToHclTerraform(this._scheduleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stack_id: {
        value: cdktf.stringToHclTerraform(this._stackId),
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
        value: scheduledRunRuntimeConfigToHclTerraform(this._runtimeConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ScheduledRunRuntimeConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
