// https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster_updater
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClusterUpdaterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster_updater#cluster_name ClusterUpdater#cluster_name}
  */
  readonly clusterName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster_updater#id ClusterUpdater#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster_updater#keepers ClusterUpdater#keepers}
  */
  readonly keepers?: { [key: string]: string };
  /**
  * apply block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster_updater#apply ClusterUpdater#apply}
  */
  readonly apply?: ClusterUpdaterApply;
  /**
  * rolling_update block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster_updater#rolling_update ClusterUpdater#rolling_update}
  */
  readonly rollingUpdate?: ClusterUpdaterRollingUpdate;
  /**
  * validate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster_updater#validate ClusterUpdater#validate}
  */
  readonly validate?: ClusterUpdaterValidate;
}
export interface ClusterUpdaterApply {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster_updater#allow_kops_downgrade ClusterUpdater#allow_kops_downgrade}
  */
  readonly allowKopsDowngrade?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster_updater#lifecycle_overrides ClusterUpdater#lifecycle_overrides}
  */
  readonly lifecycleOverrides?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster_updater#skip ClusterUpdater#skip}
  */
  readonly skip?: boolean | cdktf.IResolvable;
}

export function clusterUpdaterApplyToTerraform(struct?: ClusterUpdaterApplyOutputReference | ClusterUpdaterApply): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_kops_downgrade: cdktf.booleanToTerraform(struct!.allowKopsDowngrade),
    lifecycle_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.lifecycleOverrides),
    skip: cdktf.booleanToTerraform(struct!.skip),
  }
}


export function clusterUpdaterApplyToHclTerraform(struct?: ClusterUpdaterApplyOutputReference | ClusterUpdaterApply): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_kops_downgrade: {
      value: cdktf.booleanToHclTerraform(struct!.allowKopsDowngrade),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    lifecycle_overrides: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.lifecycleOverrides),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    skip: {
      value: cdktf.booleanToHclTerraform(struct!.skip),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterUpdaterApplyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterUpdaterApply | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowKopsDowngrade !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowKopsDowngrade = this._allowKopsDowngrade;
    }
    if (this._lifecycleOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleOverrides = this._lifecycleOverrides;
    }
    if (this._skip !== undefined) {
      hasAnyValues = true;
      internalValueResult.skip = this._skip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterUpdaterApply | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowKopsDowngrade = undefined;
      this._lifecycleOverrides = undefined;
      this._skip = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowKopsDowngrade = value.allowKopsDowngrade;
      this._lifecycleOverrides = value.lifecycleOverrides;
      this._skip = value.skip;
    }
  }

  // allow_kops_downgrade - computed: false, optional: true, required: false
  private _allowKopsDowngrade?: boolean | cdktf.IResolvable; 
  public get allowKopsDowngrade() {
    return this.getBooleanAttribute('allow_kops_downgrade');
  }
  public set allowKopsDowngrade(value: boolean | cdktf.IResolvable) {
    this._allowKopsDowngrade = value;
  }
  public resetAllowKopsDowngrade() {
    this._allowKopsDowngrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowKopsDowngradeInput() {
    return this._allowKopsDowngrade;
  }

  // lifecycle_overrides - computed: false, optional: true, required: false
  private _lifecycleOverrides?: { [key: string]: string }; 
  public get lifecycleOverrides() {
    return this.getStringMapAttribute('lifecycle_overrides');
  }
  public set lifecycleOverrides(value: { [key: string]: string }) {
    this._lifecycleOverrides = value;
  }
  public resetLifecycleOverrides() {
    this._lifecycleOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleOverridesInput() {
    return this._lifecycleOverrides;
  }

  // skip - computed: false, optional: true, required: false
  private _skip?: boolean | cdktf.IResolvable; 
  public get skip() {
    return this.getBooleanAttribute('skip');
  }
  public set skip(value: boolean | cdktf.IResolvable) {
    this._skip = value;
  }
  public resetSkip() {
    this._skip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipInput() {
    return this._skip;
  }
}
export interface ClusterUpdaterRollingUpdate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster_updater#bastion_interval ClusterUpdater#bastion_interval}
  */
  readonly bastionInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster_updater#cloud_only ClusterUpdater#cloud_only}
  */
  readonly cloudOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster_updater#fail_on_drain_error ClusterUpdater#fail_on_drain_error}
  */
  readonly failOnDrainError?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster_updater#fail_on_validate ClusterUpdater#fail_on_validate}
  */
  readonly failOnValidate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster_updater#force ClusterUpdater#force}
  */
  readonly force?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster_updater#master_interval ClusterUpdater#master_interval}
  */
  readonly masterInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster_updater#node_interval ClusterUpdater#node_interval}
  */
  readonly nodeInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster_updater#post_drain_delay ClusterUpdater#post_drain_delay}
  */
  readonly postDrainDelay?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster_updater#skip ClusterUpdater#skip}
  */
  readonly skip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster_updater#validate_count ClusterUpdater#validate_count}
  */
  readonly validateCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster_updater#validation_timeout ClusterUpdater#validation_timeout}
  */
  readonly validationTimeout?: string;
}

export function clusterUpdaterRollingUpdateToTerraform(struct?: ClusterUpdaterRollingUpdateOutputReference | ClusterUpdaterRollingUpdate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bastion_interval: cdktf.stringToTerraform(struct!.bastionInterval),
    cloud_only: cdktf.booleanToTerraform(struct!.cloudOnly),
    fail_on_drain_error: cdktf.booleanToTerraform(struct!.failOnDrainError),
    fail_on_validate: cdktf.booleanToTerraform(struct!.failOnValidate),
    force: cdktf.booleanToTerraform(struct!.force),
    master_interval: cdktf.stringToTerraform(struct!.masterInterval),
    node_interval: cdktf.stringToTerraform(struct!.nodeInterval),
    post_drain_delay: cdktf.stringToTerraform(struct!.postDrainDelay),
    skip: cdktf.booleanToTerraform(struct!.skip),
    validate_count: cdktf.numberToTerraform(struct!.validateCount),
    validation_timeout: cdktf.stringToTerraform(struct!.validationTimeout),
  }
}


export function clusterUpdaterRollingUpdateToHclTerraform(struct?: ClusterUpdaterRollingUpdateOutputReference | ClusterUpdaterRollingUpdate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bastion_interval: {
      value: cdktf.stringToHclTerraform(struct!.bastionInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloud_only: {
      value: cdktf.booleanToHclTerraform(struct!.cloudOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fail_on_drain_error: {
      value: cdktf.booleanToHclTerraform(struct!.failOnDrainError),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fail_on_validate: {
      value: cdktf.booleanToHclTerraform(struct!.failOnValidate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    force: {
      value: cdktf.booleanToHclTerraform(struct!.force),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    master_interval: {
      value: cdktf.stringToHclTerraform(struct!.masterInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_interval: {
      value: cdktf.stringToHclTerraform(struct!.nodeInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    post_drain_delay: {
      value: cdktf.stringToHclTerraform(struct!.postDrainDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skip: {
      value: cdktf.booleanToHclTerraform(struct!.skip),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    validate_count: {
      value: cdktf.numberToHclTerraform(struct!.validateCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    validation_timeout: {
      value: cdktf.stringToHclTerraform(struct!.validationTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterUpdaterRollingUpdateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterUpdaterRollingUpdate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bastionInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.bastionInterval = this._bastionInterval;
    }
    if (this._cloudOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudOnly = this._cloudOnly;
    }
    if (this._failOnDrainError !== undefined) {
      hasAnyValues = true;
      internalValueResult.failOnDrainError = this._failOnDrainError;
    }
    if (this._failOnValidate !== undefined) {
      hasAnyValues = true;
      internalValueResult.failOnValidate = this._failOnValidate;
    }
    if (this._force !== undefined) {
      hasAnyValues = true;
      internalValueResult.force = this._force;
    }
    if (this._masterInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterInterval = this._masterInterval;
    }
    if (this._nodeInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeInterval = this._nodeInterval;
    }
    if (this._postDrainDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.postDrainDelay = this._postDrainDelay;
    }
    if (this._skip !== undefined) {
      hasAnyValues = true;
      internalValueResult.skip = this._skip;
    }
    if (this._validateCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.validateCount = this._validateCount;
    }
    if (this._validationTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.validationTimeout = this._validationTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterUpdaterRollingUpdate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bastionInterval = undefined;
      this._cloudOnly = undefined;
      this._failOnDrainError = undefined;
      this._failOnValidate = undefined;
      this._force = undefined;
      this._masterInterval = undefined;
      this._nodeInterval = undefined;
      this._postDrainDelay = undefined;
      this._skip = undefined;
      this._validateCount = undefined;
      this._validationTimeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bastionInterval = value.bastionInterval;
      this._cloudOnly = value.cloudOnly;
      this._failOnDrainError = value.failOnDrainError;
      this._failOnValidate = value.failOnValidate;
      this._force = value.force;
      this._masterInterval = value.masterInterval;
      this._nodeInterval = value.nodeInterval;
      this._postDrainDelay = value.postDrainDelay;
      this._skip = value.skip;
      this._validateCount = value.validateCount;
      this._validationTimeout = value.validationTimeout;
    }
  }

  // bastion_interval - computed: false, optional: true, required: false
  private _bastionInterval?: string; 
  public get bastionInterval() {
    return this.getStringAttribute('bastion_interval');
  }
  public set bastionInterval(value: string) {
    this._bastionInterval = value;
  }
  public resetBastionInterval() {
    this._bastionInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bastionIntervalInput() {
    return this._bastionInterval;
  }

  // cloud_only - computed: false, optional: true, required: false
  private _cloudOnly?: boolean | cdktf.IResolvable; 
  public get cloudOnly() {
    return this.getBooleanAttribute('cloud_only');
  }
  public set cloudOnly(value: boolean | cdktf.IResolvable) {
    this._cloudOnly = value;
  }
  public resetCloudOnly() {
    this._cloudOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudOnlyInput() {
    return this._cloudOnly;
  }

  // fail_on_drain_error - computed: false, optional: true, required: false
  private _failOnDrainError?: boolean | cdktf.IResolvable; 
  public get failOnDrainError() {
    return this.getBooleanAttribute('fail_on_drain_error');
  }
  public set failOnDrainError(value: boolean | cdktf.IResolvable) {
    this._failOnDrainError = value;
  }
  public resetFailOnDrainError() {
    this._failOnDrainError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failOnDrainErrorInput() {
    return this._failOnDrainError;
  }

  // fail_on_validate - computed: false, optional: true, required: false
  private _failOnValidate?: boolean | cdktf.IResolvable; 
  public get failOnValidate() {
    return this.getBooleanAttribute('fail_on_validate');
  }
  public set failOnValidate(value: boolean | cdktf.IResolvable) {
    this._failOnValidate = value;
  }
  public resetFailOnValidate() {
    this._failOnValidate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failOnValidateInput() {
    return this._failOnValidate;
  }

  // force - computed: false, optional: true, required: false
  private _force?: boolean | cdktf.IResolvable; 
  public get force() {
    return this.getBooleanAttribute('force');
  }
  public set force(value: boolean | cdktf.IResolvable) {
    this._force = value;
  }
  public resetForce() {
    this._force = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceInput() {
    return this._force;
  }

  // master_interval - computed: false, optional: true, required: false
  private _masterInterval?: string; 
  public get masterInterval() {
    return this.getStringAttribute('master_interval');
  }
  public set masterInterval(value: string) {
    this._masterInterval = value;
  }
  public resetMasterInterval() {
    this._masterInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterIntervalInput() {
    return this._masterInterval;
  }

  // node_interval - computed: false, optional: true, required: false
  private _nodeInterval?: string; 
  public get nodeInterval() {
    return this.getStringAttribute('node_interval');
  }
  public set nodeInterval(value: string) {
    this._nodeInterval = value;
  }
  public resetNodeInterval() {
    this._nodeInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeIntervalInput() {
    return this._nodeInterval;
  }

  // post_drain_delay - computed: false, optional: true, required: false
  private _postDrainDelay?: string; 
  public get postDrainDelay() {
    return this.getStringAttribute('post_drain_delay');
  }
  public set postDrainDelay(value: string) {
    this._postDrainDelay = value;
  }
  public resetPostDrainDelay() {
    this._postDrainDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postDrainDelayInput() {
    return this._postDrainDelay;
  }

  // skip - computed: false, optional: true, required: false
  private _skip?: boolean | cdktf.IResolvable; 
  public get skip() {
    return this.getBooleanAttribute('skip');
  }
  public set skip(value: boolean | cdktf.IResolvable) {
    this._skip = value;
  }
  public resetSkip() {
    this._skip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipInput() {
    return this._skip;
  }

  // validate_count - computed: false, optional: true, required: false
  private _validateCount?: number; 
  public get validateCount() {
    return this.getNumberAttribute('validate_count');
  }
  public set validateCount(value: number) {
    this._validateCount = value;
  }
  public resetValidateCount() {
    this._validateCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateCountInput() {
    return this._validateCount;
  }

  // validation_timeout - computed: false, optional: true, required: false
  private _validationTimeout?: string; 
  public get validationTimeout() {
    return this.getStringAttribute('validation_timeout');
  }
  public set validationTimeout(value: string) {
    this._validationTimeout = value;
  }
  public resetValidationTimeout() {
    this._validationTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationTimeoutInput() {
    return this._validationTimeout;
  }
}
export interface ClusterUpdaterValidate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster_updater#poll_interval ClusterUpdater#poll_interval}
  */
  readonly pollInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster_updater#skip ClusterUpdater#skip}
  */
  readonly skip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster_updater#timeout ClusterUpdater#timeout}
  */
  readonly timeout?: string;
}

export function clusterUpdaterValidateToTerraform(struct?: ClusterUpdaterValidateOutputReference | ClusterUpdaterValidate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    poll_interval: cdktf.stringToTerraform(struct!.pollInterval),
    skip: cdktf.booleanToTerraform(struct!.skip),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function clusterUpdaterValidateToHclTerraform(struct?: ClusterUpdaterValidateOutputReference | ClusterUpdaterValidate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    poll_interval: {
      value: cdktf.stringToHclTerraform(struct!.pollInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skip: {
      value: cdktf.booleanToHclTerraform(struct!.skip),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterUpdaterValidateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterUpdaterValidate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pollInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.pollInterval = this._pollInterval;
    }
    if (this._skip !== undefined) {
      hasAnyValues = true;
      internalValueResult.skip = this._skip;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterUpdaterValidate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pollInterval = undefined;
      this._skip = undefined;
      this._timeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pollInterval = value.pollInterval;
      this._skip = value.skip;
      this._timeout = value.timeout;
    }
  }

  // poll_interval - computed: false, optional: true, required: false
  private _pollInterval?: string; 
  public get pollInterval() {
    return this.getStringAttribute('poll_interval');
  }
  public set pollInterval(value: string) {
    this._pollInterval = value;
  }
  public resetPollInterval() {
    this._pollInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollIntervalInput() {
    return this._pollInterval;
  }

  // skip - computed: false, optional: true, required: false
  private _skip?: boolean | cdktf.IResolvable; 
  public get skip() {
    return this.getBooleanAttribute('skip');
  }
  public set skip(value: boolean | cdktf.IResolvable) {
    this._skip = value;
  }
  public resetSkip() {
    this._skip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipInput() {
    return this._skip;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster_updater kops_cluster_updater}
*/
export class ClusterUpdater extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kops_cluster_updater";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClusterUpdater resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClusterUpdater to import
  * @param importFromId The id of the existing ClusterUpdater that should be imported. Refer to the {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster_updater#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClusterUpdater to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "kops_cluster_updater", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster_updater kops_cluster_updater} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClusterUpdaterConfig
  */
  public constructor(scope: Construct, id: string, config: ClusterUpdaterConfig) {
    super(scope, id, {
      terraformResourceType: 'kops_cluster_updater',
      terraformGeneratorMetadata: {
        providerName: 'kops',
        providerVersion: '1.25.4',
        providerVersionConstraint: '1.25.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterName = config.clusterName;
    this._id = config.id;
    this._keepers = config.keepers;
    this._apply.internalValue = config.apply;
    this._rollingUpdate.internalValue = config.rollingUpdate;
    this._validate.internalValue = config.validate;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_name - computed: false, optional: false, required: true
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
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

  // keepers - computed: false, optional: true, required: false
  private _keepers?: { [key: string]: string }; 
  public get keepers() {
    return this.getStringMapAttribute('keepers');
  }
  public set keepers(value: { [key: string]: string }) {
    this._keepers = value;
  }
  public resetKeepers() {
    this._keepers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepersInput() {
    return this._keepers;
  }

  // provider_version - computed: true, optional: false, required: false
  public get providerVersion() {
    return this.getStringAttribute('provider_version');
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getNumberAttribute('revision');
  }

  // apply - computed: false, optional: true, required: false
  private _apply = new ClusterUpdaterApplyOutputReference(this, "apply");
  public get apply() {
    return this._apply;
  }
  public putApply(value: ClusterUpdaterApply) {
    this._apply.internalValue = value;
  }
  public resetApply() {
    this._apply.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyInput() {
    return this._apply.internalValue;
  }

  // rolling_update - computed: false, optional: true, required: false
  private _rollingUpdate = new ClusterUpdaterRollingUpdateOutputReference(this, "rolling_update");
  public get rollingUpdate() {
    return this._rollingUpdate;
  }
  public putRollingUpdate(value: ClusterUpdaterRollingUpdate) {
    this._rollingUpdate.internalValue = value;
  }
  public resetRollingUpdate() {
    this._rollingUpdate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollingUpdateInput() {
    return this._rollingUpdate.internalValue;
  }

  // validate - computed: false, optional: true, required: false
  private _validate = new ClusterUpdaterValidateOutputReference(this, "validate");
  public get validate() {
    return this._validate;
  }
  public putValidate(value: ClusterUpdaterValidate) {
    this._validate.internalValue = value;
  }
  public resetValidate() {
    this._validate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateInput() {
    return this._validate.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      id: cdktf.stringToTerraform(this._id),
      keepers: cdktf.hashMapper(cdktf.stringToTerraform)(this._keepers),
      apply: clusterUpdaterApplyToTerraform(this._apply.internalValue),
      rolling_update: clusterUpdaterRollingUpdateToTerraform(this._rollingUpdate.internalValue),
      validate: clusterUpdaterValidateToTerraform(this._validate.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_name: {
        value: cdktf.stringToHclTerraform(this._clusterName),
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
      keepers: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._keepers),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      apply: {
        value: clusterUpdaterApplyToHclTerraform(this._apply.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterUpdaterApplyList",
      },
      rolling_update: {
        value: clusterUpdaterRollingUpdateToHclTerraform(this._rollingUpdate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterUpdaterRollingUpdateList",
      },
      validate: {
        value: clusterUpdaterValidateToHclTerraform(this._validate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterUpdaterValidateList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
