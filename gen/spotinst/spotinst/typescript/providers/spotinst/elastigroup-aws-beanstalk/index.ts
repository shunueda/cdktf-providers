// https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_aws_beanstalk
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ElastigroupAwsBeanstalkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_aws_beanstalk#beanstalk_environment_id ElastigroupAwsBeanstalk#beanstalk_environment_id}
  */
  readonly beanstalkEnvironmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_aws_beanstalk#beanstalk_environment_name ElastigroupAwsBeanstalk#beanstalk_environment_name}
  */
  readonly beanstalkEnvironmentName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_aws_beanstalk#desired_capacity ElastigroupAwsBeanstalk#desired_capacity}
  */
  readonly desiredCapacity: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_aws_beanstalk#id ElastigroupAwsBeanstalk#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_aws_beanstalk#instance_types_spot ElastigroupAwsBeanstalk#instance_types_spot}
  */
  readonly instanceTypesSpot: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_aws_beanstalk#maintenance ElastigroupAwsBeanstalk#maintenance}
  */
  readonly maintenance?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_aws_beanstalk#max_size ElastigroupAwsBeanstalk#max_size}
  */
  readonly maxSize: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_aws_beanstalk#min_size ElastigroupAwsBeanstalk#min_size}
  */
  readonly minSize: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_aws_beanstalk#name ElastigroupAwsBeanstalk#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_aws_beanstalk#product ElastigroupAwsBeanstalk#product}
  */
  readonly product: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_aws_beanstalk#region ElastigroupAwsBeanstalk#region}
  */
  readonly region: string;
  /**
  * deployment_preferences block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_aws_beanstalk#deployment_preferences ElastigroupAwsBeanstalk#deployment_preferences}
  */
  readonly deploymentPreferences?: ElastigroupAwsBeanstalkDeploymentPreferences;
  /**
  * managed_actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_aws_beanstalk#managed_actions ElastigroupAwsBeanstalk#managed_actions}
  */
  readonly managedActions?: ElastigroupAwsBeanstalkManagedActions;
  /**
  * scheduled_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_aws_beanstalk#scheduled_task ElastigroupAwsBeanstalk#scheduled_task}
  */
  readonly scheduledTask?: ElastigroupAwsBeanstalkScheduledTask[] | cdktf.IResolvable;
}
export interface ElastigroupAwsBeanstalkDeploymentPreferencesStrategy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_aws_beanstalk#action ElastigroupAwsBeanstalk#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_aws_beanstalk#should_drain_instances ElastigroupAwsBeanstalk#should_drain_instances}
  */
  readonly shouldDrainInstances?: boolean | cdktf.IResolvable;
}

export function elastigroupAwsBeanstalkDeploymentPreferencesStrategyToTerraform(struct?: ElastigroupAwsBeanstalkDeploymentPreferencesStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    should_drain_instances: cdktf.booleanToTerraform(struct!.shouldDrainInstances),
  }
}


export function elastigroupAwsBeanstalkDeploymentPreferencesStrategyToHclTerraform(struct?: ElastigroupAwsBeanstalkDeploymentPreferencesStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    should_drain_instances: {
      value: cdktf.booleanToHclTerraform(struct!.shouldDrainInstances),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElastigroupAwsBeanstalkDeploymentPreferencesStrategy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._shouldDrainInstances !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldDrainInstances = this._shouldDrainInstances;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsBeanstalkDeploymentPreferencesStrategy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._shouldDrainInstances = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._shouldDrainInstances = value.shouldDrainInstances;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // should_drain_instances - computed: false, optional: true, required: false
  private _shouldDrainInstances?: boolean | cdktf.IResolvable; 
  public get shouldDrainInstances() {
    return this.getBooleanAttribute('should_drain_instances');
  }
  public set shouldDrainInstances(value: boolean | cdktf.IResolvable) {
    this._shouldDrainInstances = value;
  }
  public resetShouldDrainInstances() {
    this._shouldDrainInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldDrainInstancesInput() {
    return this._shouldDrainInstances;
  }
}

export class ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList extends cdktf.ComplexList {
  public internalValue? : ElastigroupAwsBeanstalkDeploymentPreferencesStrategy[] | cdktf.IResolvable

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
  public get(index: number): ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference {
    return new ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElastigroupAwsBeanstalkDeploymentPreferences {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_aws_beanstalk#automatic_roll ElastigroupAwsBeanstalk#automatic_roll}
  */
  readonly automaticRoll?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_aws_beanstalk#batch_size_percentage ElastigroupAwsBeanstalk#batch_size_percentage}
  */
  readonly batchSizePercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_aws_beanstalk#grace_period ElastigroupAwsBeanstalk#grace_period}
  */
  readonly gracePeriod?: number;
  /**
  * strategy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_aws_beanstalk#strategy ElastigroupAwsBeanstalk#strategy}
  */
  readonly strategy?: ElastigroupAwsBeanstalkDeploymentPreferencesStrategy[] | cdktf.IResolvable;
}

export function elastigroupAwsBeanstalkDeploymentPreferencesToTerraform(struct?: ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference | ElastigroupAwsBeanstalkDeploymentPreferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    automatic_roll: cdktf.booleanToTerraform(struct!.automaticRoll),
    batch_size_percentage: cdktf.numberToTerraform(struct!.batchSizePercentage),
    grace_period: cdktf.numberToTerraform(struct!.gracePeriod),
    strategy: cdktf.listMapper(elastigroupAwsBeanstalkDeploymentPreferencesStrategyToTerraform, true)(struct!.strategy),
  }
}


export function elastigroupAwsBeanstalkDeploymentPreferencesToHclTerraform(struct?: ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference | ElastigroupAwsBeanstalkDeploymentPreferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    automatic_roll: {
      value: cdktf.booleanToHclTerraform(struct!.automaticRoll),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    batch_size_percentage: {
      value: cdktf.numberToHclTerraform(struct!.batchSizePercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    grace_period: {
      value: cdktf.numberToHclTerraform(struct!.gracePeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    strategy: {
      value: cdktf.listMapperHcl(elastigroupAwsBeanstalkDeploymentPreferencesStrategyToHclTerraform, true)(struct!.strategy),
      isBlock: true,
      type: "list",
      storageClassType: "ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAwsBeanstalkDeploymentPreferences | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._automaticRoll !== undefined) {
      hasAnyValues = true;
      internalValueResult.automaticRoll = this._automaticRoll;
    }
    if (this._batchSizePercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchSizePercentage = this._batchSizePercentage;
    }
    if (this._gracePeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.gracePeriod = this._gracePeriod;
    }
    if (this._strategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsBeanstalkDeploymentPreferences | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._automaticRoll = undefined;
      this._batchSizePercentage = undefined;
      this._gracePeriod = undefined;
      this._strategy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._automaticRoll = value.automaticRoll;
      this._batchSizePercentage = value.batchSizePercentage;
      this._gracePeriod = value.gracePeriod;
      this._strategy.internalValue = value.strategy;
    }
  }

  // automatic_roll - computed: false, optional: true, required: false
  private _automaticRoll?: boolean | cdktf.IResolvable; 
  public get automaticRoll() {
    return this.getBooleanAttribute('automatic_roll');
  }
  public set automaticRoll(value: boolean | cdktf.IResolvable) {
    this._automaticRoll = value;
  }
  public resetAutomaticRoll() {
    this._automaticRoll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticRollInput() {
    return this._automaticRoll;
  }

  // batch_size_percentage - computed: false, optional: true, required: false
  private _batchSizePercentage?: number; 
  public get batchSizePercentage() {
    return this.getNumberAttribute('batch_size_percentage');
  }
  public set batchSizePercentage(value: number) {
    this._batchSizePercentage = value;
  }
  public resetBatchSizePercentage() {
    this._batchSizePercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchSizePercentageInput() {
    return this._batchSizePercentage;
  }

  // grace_period - computed: false, optional: true, required: false
  private _gracePeriod?: number; 
  public get gracePeriod() {
    return this.getNumberAttribute('grace_period');
  }
  public set gracePeriod(value: number) {
    this._gracePeriod = value;
  }
  public resetGracePeriod() {
    this._gracePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracePeriodInput() {
    return this._gracePeriod;
  }

  // strategy - computed: false, optional: true, required: false
  private _strategy = new ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList(this, "strategy", false);
  public get strategy() {
    return this._strategy;
  }
  public putStrategy(value: ElastigroupAwsBeanstalkDeploymentPreferencesStrategy[] | cdktf.IResolvable) {
    this._strategy.internalValue = value;
  }
  public resetStrategy() {
    this._strategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy.internalValue;
  }
}
export interface ElastigroupAwsBeanstalkManagedActionsPlatformUpdate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_aws_beanstalk#perform_at ElastigroupAwsBeanstalk#perform_at}
  */
  readonly performAt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_aws_beanstalk#time_window ElastigroupAwsBeanstalk#time_window}
  */
  readonly timeWindow?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_aws_beanstalk#update_level ElastigroupAwsBeanstalk#update_level}
  */
  readonly updateLevel?: string;
}

export function elastigroupAwsBeanstalkManagedActionsPlatformUpdateToTerraform(struct?: ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference | ElastigroupAwsBeanstalkManagedActionsPlatformUpdate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    perform_at: cdktf.stringToTerraform(struct!.performAt),
    time_window: cdktf.stringToTerraform(struct!.timeWindow),
    update_level: cdktf.stringToTerraform(struct!.updateLevel),
  }
}


export function elastigroupAwsBeanstalkManagedActionsPlatformUpdateToHclTerraform(struct?: ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference | ElastigroupAwsBeanstalkManagedActionsPlatformUpdate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    perform_at: {
      value: cdktf.stringToHclTerraform(struct!.performAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_window: {
      value: cdktf.stringToHclTerraform(struct!.timeWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update_level: {
      value: cdktf.stringToHclTerraform(struct!.updateLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAwsBeanstalkManagedActionsPlatformUpdate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._performAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.performAt = this._performAt;
    }
    if (this._timeWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeWindow = this._timeWindow;
    }
    if (this._updateLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateLevel = this._updateLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsBeanstalkManagedActionsPlatformUpdate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._performAt = undefined;
      this._timeWindow = undefined;
      this._updateLevel = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._performAt = value.performAt;
      this._timeWindow = value.timeWindow;
      this._updateLevel = value.updateLevel;
    }
  }

  // perform_at - computed: false, optional: true, required: false
  private _performAt?: string; 
  public get performAt() {
    return this.getStringAttribute('perform_at');
  }
  public set performAt(value: string) {
    this._performAt = value;
  }
  public resetPerformAt() {
    this._performAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performAtInput() {
    return this._performAt;
  }

  // time_window - computed: false, optional: true, required: false
  private _timeWindow?: string; 
  public get timeWindow() {
    return this.getStringAttribute('time_window');
  }
  public set timeWindow(value: string) {
    this._timeWindow = value;
  }
  public resetTimeWindow() {
    this._timeWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeWindowInput() {
    return this._timeWindow;
  }

  // update_level - computed: false, optional: true, required: false
  private _updateLevel?: string; 
  public get updateLevel() {
    return this.getStringAttribute('update_level');
  }
  public set updateLevel(value: string) {
    this._updateLevel = value;
  }
  public resetUpdateLevel() {
    this._updateLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateLevelInput() {
    return this._updateLevel;
  }
}
export interface ElastigroupAwsBeanstalkManagedActions {
  /**
  * platform_update block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_aws_beanstalk#platform_update ElastigroupAwsBeanstalk#platform_update}
  */
  readonly platformUpdate?: ElastigroupAwsBeanstalkManagedActionsPlatformUpdate;
}

export function elastigroupAwsBeanstalkManagedActionsToTerraform(struct?: ElastigroupAwsBeanstalkManagedActionsOutputReference | ElastigroupAwsBeanstalkManagedActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    platform_update: elastigroupAwsBeanstalkManagedActionsPlatformUpdateToTerraform(struct!.platformUpdate),
  }
}


export function elastigroupAwsBeanstalkManagedActionsToHclTerraform(struct?: ElastigroupAwsBeanstalkManagedActionsOutputReference | ElastigroupAwsBeanstalkManagedActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    platform_update: {
      value: elastigroupAwsBeanstalkManagedActionsPlatformUpdateToHclTerraform(struct!.platformUpdate),
      isBlock: true,
      type: "list",
      storageClassType: "ElastigroupAwsBeanstalkManagedActionsPlatformUpdateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupAwsBeanstalkManagedActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAwsBeanstalkManagedActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._platformUpdate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.platformUpdate = this._platformUpdate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsBeanstalkManagedActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._platformUpdate.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._platformUpdate.internalValue = value.platformUpdate;
    }
  }

  // platform_update - computed: false, optional: true, required: false
  private _platformUpdate = new ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference(this, "platform_update");
  public get platformUpdate() {
    return this._platformUpdate;
  }
  public putPlatformUpdate(value: ElastigroupAwsBeanstalkManagedActionsPlatformUpdate) {
    this._platformUpdate.internalValue = value;
  }
  public resetPlatformUpdate() {
    this._platformUpdate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformUpdateInput() {
    return this._platformUpdate.internalValue;
  }
}
export interface ElastigroupAwsBeanstalkScheduledTask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_aws_beanstalk#adjustment ElastigroupAwsBeanstalk#adjustment}
  */
  readonly adjustment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_aws_beanstalk#adjustment_percentage ElastigroupAwsBeanstalk#adjustment_percentage}
  */
  readonly adjustmentPercentage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_aws_beanstalk#batch_size_percentage ElastigroupAwsBeanstalk#batch_size_percentage}
  */
  readonly batchSizePercentage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_aws_beanstalk#cron_expression ElastigroupAwsBeanstalk#cron_expression}
  */
  readonly cronExpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_aws_beanstalk#frequency ElastigroupAwsBeanstalk#frequency}
  */
  readonly frequency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_aws_beanstalk#grace_period ElastigroupAwsBeanstalk#grace_period}
  */
  readonly gracePeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_aws_beanstalk#is_enabled ElastigroupAwsBeanstalk#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_aws_beanstalk#max_capacity ElastigroupAwsBeanstalk#max_capacity}
  */
  readonly maxCapacity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_aws_beanstalk#min_capacity ElastigroupAwsBeanstalk#min_capacity}
  */
  readonly minCapacity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_aws_beanstalk#scale_max_capacity ElastigroupAwsBeanstalk#scale_max_capacity}
  */
  readonly scaleMaxCapacity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_aws_beanstalk#scale_min_capacity ElastigroupAwsBeanstalk#scale_min_capacity}
  */
  readonly scaleMinCapacity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_aws_beanstalk#scale_target_capacity ElastigroupAwsBeanstalk#scale_target_capacity}
  */
  readonly scaleTargetCapacity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_aws_beanstalk#start_time ElastigroupAwsBeanstalk#start_time}
  */
  readonly startTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_aws_beanstalk#target_capacity ElastigroupAwsBeanstalk#target_capacity}
  */
  readonly targetCapacity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_aws_beanstalk#task_type ElastigroupAwsBeanstalk#task_type}
  */
  readonly taskType: string;
}

export function elastigroupAwsBeanstalkScheduledTaskToTerraform(struct?: ElastigroupAwsBeanstalkScheduledTask | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    adjustment: cdktf.stringToTerraform(struct!.adjustment),
    adjustment_percentage: cdktf.stringToTerraform(struct!.adjustmentPercentage),
    batch_size_percentage: cdktf.stringToTerraform(struct!.batchSizePercentage),
    cron_expression: cdktf.stringToTerraform(struct!.cronExpression),
    frequency: cdktf.stringToTerraform(struct!.frequency),
    grace_period: cdktf.stringToTerraform(struct!.gracePeriod),
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    max_capacity: cdktf.stringToTerraform(struct!.maxCapacity),
    min_capacity: cdktf.stringToTerraform(struct!.minCapacity),
    scale_max_capacity: cdktf.stringToTerraform(struct!.scaleMaxCapacity),
    scale_min_capacity: cdktf.stringToTerraform(struct!.scaleMinCapacity),
    scale_target_capacity: cdktf.stringToTerraform(struct!.scaleTargetCapacity),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    target_capacity: cdktf.stringToTerraform(struct!.targetCapacity),
    task_type: cdktf.stringToTerraform(struct!.taskType),
  }
}


export function elastigroupAwsBeanstalkScheduledTaskToHclTerraform(struct?: ElastigroupAwsBeanstalkScheduledTask | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    adjustment: {
      value: cdktf.stringToHclTerraform(struct!.adjustment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    adjustment_percentage: {
      value: cdktf.stringToHclTerraform(struct!.adjustmentPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    batch_size_percentage: {
      value: cdktf.stringToHclTerraform(struct!.batchSizePercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cron_expression: {
      value: cdktf.stringToHclTerraform(struct!.cronExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    frequency: {
      value: cdktf.stringToHclTerraform(struct!.frequency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grace_period: {
      value: cdktf.stringToHclTerraform(struct!.gracePeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_capacity: {
      value: cdktf.stringToHclTerraform(struct!.maxCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_capacity: {
      value: cdktf.stringToHclTerraform(struct!.minCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scale_max_capacity: {
      value: cdktf.stringToHclTerraform(struct!.scaleMaxCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scale_min_capacity: {
      value: cdktf.stringToHclTerraform(struct!.scaleMinCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scale_target_capacity: {
      value: cdktf.stringToHclTerraform(struct!.scaleTargetCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_capacity: {
      value: cdktf.stringToHclTerraform(struct!.targetCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    task_type: {
      value: cdktf.stringToHclTerraform(struct!.taskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupAwsBeanstalkScheduledTaskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElastigroupAwsBeanstalkScheduledTask | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adjustment !== undefined) {
      hasAnyValues = true;
      internalValueResult.adjustment = this._adjustment;
    }
    if (this._adjustmentPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.adjustmentPercentage = this._adjustmentPercentage;
    }
    if (this._batchSizePercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchSizePercentage = this._batchSizePercentage;
    }
    if (this._cronExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.cronExpression = this._cronExpression;
    }
    if (this._frequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency;
    }
    if (this._gracePeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.gracePeriod = this._gracePeriod;
    }
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._maxCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCapacity = this._maxCapacity;
    }
    if (this._minCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCapacity = this._minCapacity;
    }
    if (this._scaleMaxCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleMaxCapacity = this._scaleMaxCapacity;
    }
    if (this._scaleMinCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleMinCapacity = this._scaleMinCapacity;
    }
    if (this._scaleTargetCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleTargetCapacity = this._scaleTargetCapacity;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._targetCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetCapacity = this._targetCapacity;
    }
    if (this._taskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskType = this._taskType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsBeanstalkScheduledTask | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adjustment = undefined;
      this._adjustmentPercentage = undefined;
      this._batchSizePercentage = undefined;
      this._cronExpression = undefined;
      this._frequency = undefined;
      this._gracePeriod = undefined;
      this._isEnabled = undefined;
      this._maxCapacity = undefined;
      this._minCapacity = undefined;
      this._scaleMaxCapacity = undefined;
      this._scaleMinCapacity = undefined;
      this._scaleTargetCapacity = undefined;
      this._startTime = undefined;
      this._targetCapacity = undefined;
      this._taskType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adjustment = value.adjustment;
      this._adjustmentPercentage = value.adjustmentPercentage;
      this._batchSizePercentage = value.batchSizePercentage;
      this._cronExpression = value.cronExpression;
      this._frequency = value.frequency;
      this._gracePeriod = value.gracePeriod;
      this._isEnabled = value.isEnabled;
      this._maxCapacity = value.maxCapacity;
      this._minCapacity = value.minCapacity;
      this._scaleMaxCapacity = value.scaleMaxCapacity;
      this._scaleMinCapacity = value.scaleMinCapacity;
      this._scaleTargetCapacity = value.scaleTargetCapacity;
      this._startTime = value.startTime;
      this._targetCapacity = value.targetCapacity;
      this._taskType = value.taskType;
    }
  }

  // adjustment - computed: false, optional: true, required: false
  private _adjustment?: string; 
  public get adjustment() {
    return this.getStringAttribute('adjustment');
  }
  public set adjustment(value: string) {
    this._adjustment = value;
  }
  public resetAdjustment() {
    this._adjustment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adjustmentInput() {
    return this._adjustment;
  }

  // adjustment_percentage - computed: false, optional: true, required: false
  private _adjustmentPercentage?: string; 
  public get adjustmentPercentage() {
    return this.getStringAttribute('adjustment_percentage');
  }
  public set adjustmentPercentage(value: string) {
    this._adjustmentPercentage = value;
  }
  public resetAdjustmentPercentage() {
    this._adjustmentPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adjustmentPercentageInput() {
    return this._adjustmentPercentage;
  }

  // batch_size_percentage - computed: false, optional: true, required: false
  private _batchSizePercentage?: string; 
  public get batchSizePercentage() {
    return this.getStringAttribute('batch_size_percentage');
  }
  public set batchSizePercentage(value: string) {
    this._batchSizePercentage = value;
  }
  public resetBatchSizePercentage() {
    this._batchSizePercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchSizePercentageInput() {
    return this._batchSizePercentage;
  }

  // cron_expression - computed: false, optional: true, required: false
  private _cronExpression?: string; 
  public get cronExpression() {
    return this.getStringAttribute('cron_expression');
  }
  public set cronExpression(value: string) {
    this._cronExpression = value;
  }
  public resetCronExpression() {
    this._cronExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cronExpressionInput() {
    return this._cronExpression;
  }

  // frequency - computed: false, optional: true, required: false
  private _frequency?: string; 
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  public resetFrequency() {
    this._frequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }

  // grace_period - computed: false, optional: true, required: false
  private _gracePeriod?: string; 
  public get gracePeriod() {
    return this.getStringAttribute('grace_period');
  }
  public set gracePeriod(value: string) {
    this._gracePeriod = value;
  }
  public resetGracePeriod() {
    this._gracePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracePeriodInput() {
    return this._gracePeriod;
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // max_capacity - computed: false, optional: true, required: false
  private _maxCapacity?: string; 
  public get maxCapacity() {
    return this.getStringAttribute('max_capacity');
  }
  public set maxCapacity(value: string) {
    this._maxCapacity = value;
  }
  public resetMaxCapacity() {
    this._maxCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCapacityInput() {
    return this._maxCapacity;
  }

  // min_capacity - computed: false, optional: true, required: false
  private _minCapacity?: string; 
  public get minCapacity() {
    return this.getStringAttribute('min_capacity');
  }
  public set minCapacity(value: string) {
    this._minCapacity = value;
  }
  public resetMinCapacity() {
    this._minCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCapacityInput() {
    return this._minCapacity;
  }

  // scale_max_capacity - computed: false, optional: true, required: false
  private _scaleMaxCapacity?: string; 
  public get scaleMaxCapacity() {
    return this.getStringAttribute('scale_max_capacity');
  }
  public set scaleMaxCapacity(value: string) {
    this._scaleMaxCapacity = value;
  }
  public resetScaleMaxCapacity() {
    this._scaleMaxCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleMaxCapacityInput() {
    return this._scaleMaxCapacity;
  }

  // scale_min_capacity - computed: false, optional: true, required: false
  private _scaleMinCapacity?: string; 
  public get scaleMinCapacity() {
    return this.getStringAttribute('scale_min_capacity');
  }
  public set scaleMinCapacity(value: string) {
    this._scaleMinCapacity = value;
  }
  public resetScaleMinCapacity() {
    this._scaleMinCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleMinCapacityInput() {
    return this._scaleMinCapacity;
  }

  // scale_target_capacity - computed: false, optional: true, required: false
  private _scaleTargetCapacity?: string; 
  public get scaleTargetCapacity() {
    return this.getStringAttribute('scale_target_capacity');
  }
  public set scaleTargetCapacity(value: string) {
    this._scaleTargetCapacity = value;
  }
  public resetScaleTargetCapacity() {
    this._scaleTargetCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleTargetCapacityInput() {
    return this._scaleTargetCapacity;
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // target_capacity - computed: false, optional: true, required: false
  private _targetCapacity?: string; 
  public get targetCapacity() {
    return this.getStringAttribute('target_capacity');
  }
  public set targetCapacity(value: string) {
    this._targetCapacity = value;
  }
  public resetTargetCapacity() {
    this._targetCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetCapacityInput() {
    return this._targetCapacity;
  }

  // task_type - computed: false, optional: false, required: true
  private _taskType?: string; 
  public get taskType() {
    return this.getStringAttribute('task_type');
  }
  public set taskType(value: string) {
    this._taskType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskTypeInput() {
    return this._taskType;
  }
}

export class ElastigroupAwsBeanstalkScheduledTaskList extends cdktf.ComplexList {
  public internalValue? : ElastigroupAwsBeanstalkScheduledTask[] | cdktf.IResolvable

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
  public get(index: number): ElastigroupAwsBeanstalkScheduledTaskOutputReference {
    return new ElastigroupAwsBeanstalkScheduledTaskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_aws_beanstalk spotinst_elastigroup_aws_beanstalk}
*/
export class ElastigroupAwsBeanstalk extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spotinst_elastigroup_aws_beanstalk";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ElastigroupAwsBeanstalk resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ElastigroupAwsBeanstalk to import
  * @param importFromId The id of the existing ElastigroupAwsBeanstalk that should be imported. Refer to the {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_aws_beanstalk#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ElastigroupAwsBeanstalk to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "spotinst_elastigroup_aws_beanstalk", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_aws_beanstalk spotinst_elastigroup_aws_beanstalk} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ElastigroupAwsBeanstalkConfig
  */
  public constructor(scope: Construct, id: string, config: ElastigroupAwsBeanstalkConfig) {
    super(scope, id, {
      terraformResourceType: 'spotinst_elastigroup_aws_beanstalk',
      terraformGeneratorMetadata: {
        providerName: 'spotinst',
        providerVersion: '1.230.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._beanstalkEnvironmentId = config.beanstalkEnvironmentId;
    this._beanstalkEnvironmentName = config.beanstalkEnvironmentName;
    this._desiredCapacity = config.desiredCapacity;
    this._id = config.id;
    this._instanceTypesSpot = config.instanceTypesSpot;
    this._maintenance = config.maintenance;
    this._maxSize = config.maxSize;
    this._minSize = config.minSize;
    this._name = config.name;
    this._product = config.product;
    this._region = config.region;
    this._deploymentPreferences.internalValue = config.deploymentPreferences;
    this._managedActions.internalValue = config.managedActions;
    this._scheduledTask.internalValue = config.scheduledTask;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // beanstalk_environment_id - computed: false, optional: true, required: false
  private _beanstalkEnvironmentId?: string; 
  public get beanstalkEnvironmentId() {
    return this.getStringAttribute('beanstalk_environment_id');
  }
  public set beanstalkEnvironmentId(value: string) {
    this._beanstalkEnvironmentId = value;
  }
  public resetBeanstalkEnvironmentId() {
    this._beanstalkEnvironmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beanstalkEnvironmentIdInput() {
    return this._beanstalkEnvironmentId;
  }

  // beanstalk_environment_name - computed: false, optional: true, required: false
  private _beanstalkEnvironmentName?: string; 
  public get beanstalkEnvironmentName() {
    return this.getStringAttribute('beanstalk_environment_name');
  }
  public set beanstalkEnvironmentName(value: string) {
    this._beanstalkEnvironmentName = value;
  }
  public resetBeanstalkEnvironmentName() {
    this._beanstalkEnvironmentName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beanstalkEnvironmentNameInput() {
    return this._beanstalkEnvironmentName;
  }

  // desired_capacity - computed: false, optional: false, required: true
  private _desiredCapacity?: number; 
  public get desiredCapacity() {
    return this.getNumberAttribute('desired_capacity');
  }
  public set desiredCapacity(value: number) {
    this._desiredCapacity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredCapacityInput() {
    return this._desiredCapacity;
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

  // instance_types_spot - computed: false, optional: false, required: true
  private _instanceTypesSpot?: string[]; 
  public get instanceTypesSpot() {
    return this.getListAttribute('instance_types_spot');
  }
  public set instanceTypesSpot(value: string[]) {
    this._instanceTypesSpot = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypesSpotInput() {
    return this._instanceTypesSpot;
  }

  // maintenance - computed: false, optional: true, required: false
  private _maintenance?: string; 
  public get maintenance() {
    return this.getStringAttribute('maintenance');
  }
  public set maintenance(value: string) {
    this._maintenance = value;
  }
  public resetMaintenance() {
    this._maintenance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceInput() {
    return this._maintenance;
  }

  // max_size - computed: false, optional: false, required: true
  private _maxSize?: number; 
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }
  public set maxSize(value: number) {
    this._maxSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInput() {
    return this._maxSize;
  }

  // min_size - computed: false, optional: false, required: true
  private _minSize?: number; 
  public get minSize() {
    return this.getNumberAttribute('min_size');
  }
  public set minSize(value: number) {
    this._minSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minSizeInput() {
    return this._minSize;
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

  // product - computed: false, optional: false, required: true
  private _product?: string; 
  public get product() {
    return this.getStringAttribute('product');
  }
  public set product(value: string) {
    this._product = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productInput() {
    return this._product;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // deployment_preferences - computed: false, optional: true, required: false
  private _deploymentPreferences = new ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference(this, "deployment_preferences");
  public get deploymentPreferences() {
    return this._deploymentPreferences;
  }
  public putDeploymentPreferences(value: ElastigroupAwsBeanstalkDeploymentPreferences) {
    this._deploymentPreferences.internalValue = value;
  }
  public resetDeploymentPreferences() {
    this._deploymentPreferences.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentPreferencesInput() {
    return this._deploymentPreferences.internalValue;
  }

  // managed_actions - computed: false, optional: true, required: false
  private _managedActions = new ElastigroupAwsBeanstalkManagedActionsOutputReference(this, "managed_actions");
  public get managedActions() {
    return this._managedActions;
  }
  public putManagedActions(value: ElastigroupAwsBeanstalkManagedActions) {
    this._managedActions.internalValue = value;
  }
  public resetManagedActions() {
    this._managedActions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedActionsInput() {
    return this._managedActions.internalValue;
  }

  // scheduled_task - computed: false, optional: true, required: false
  private _scheduledTask = new ElastigroupAwsBeanstalkScheduledTaskList(this, "scheduled_task", true);
  public get scheduledTask() {
    return this._scheduledTask;
  }
  public putScheduledTask(value: ElastigroupAwsBeanstalkScheduledTask[] | cdktf.IResolvable) {
    this._scheduledTask.internalValue = value;
  }
  public resetScheduledTask() {
    this._scheduledTask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledTaskInput() {
    return this._scheduledTask.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      beanstalk_environment_id: cdktf.stringToTerraform(this._beanstalkEnvironmentId),
      beanstalk_environment_name: cdktf.stringToTerraform(this._beanstalkEnvironmentName),
      desired_capacity: cdktf.numberToTerraform(this._desiredCapacity),
      id: cdktf.stringToTerraform(this._id),
      instance_types_spot: cdktf.listMapper(cdktf.stringToTerraform, false)(this._instanceTypesSpot),
      maintenance: cdktf.stringToTerraform(this._maintenance),
      max_size: cdktf.numberToTerraform(this._maxSize),
      min_size: cdktf.numberToTerraform(this._minSize),
      name: cdktf.stringToTerraform(this._name),
      product: cdktf.stringToTerraform(this._product),
      region: cdktf.stringToTerraform(this._region),
      deployment_preferences: elastigroupAwsBeanstalkDeploymentPreferencesToTerraform(this._deploymentPreferences.internalValue),
      managed_actions: elastigroupAwsBeanstalkManagedActionsToTerraform(this._managedActions.internalValue),
      scheduled_task: cdktf.listMapper(elastigroupAwsBeanstalkScheduledTaskToTerraform, true)(this._scheduledTask.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      beanstalk_environment_id: {
        value: cdktf.stringToHclTerraform(this._beanstalkEnvironmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      beanstalk_environment_name: {
        value: cdktf.stringToHclTerraform(this._beanstalkEnvironmentName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      desired_capacity: {
        value: cdktf.numberToHclTerraform(this._desiredCapacity),
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
      instance_types_spot: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._instanceTypesSpot),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      maintenance: {
        value: cdktf.stringToHclTerraform(this._maintenance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_size: {
        value: cdktf.numberToHclTerraform(this._maxSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_size: {
        value: cdktf.numberToHclTerraform(this._minSize),
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
      product: {
        value: cdktf.stringToHclTerraform(this._product),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deployment_preferences: {
        value: elastigroupAwsBeanstalkDeploymentPreferencesToHclTerraform(this._deploymentPreferences.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ElastigroupAwsBeanstalkDeploymentPreferencesList",
      },
      managed_actions: {
        value: elastigroupAwsBeanstalkManagedActionsToHclTerraform(this._managedActions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ElastigroupAwsBeanstalkManagedActionsList",
      },
      scheduled_task: {
        value: cdktf.listMapperHcl(elastigroupAwsBeanstalkScheduledTaskToHclTerraform, true)(this._scheduledTask.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ElastigroupAwsBeanstalkScheduledTaskList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
