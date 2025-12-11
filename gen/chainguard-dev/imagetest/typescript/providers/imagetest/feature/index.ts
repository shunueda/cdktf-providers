// https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs/resources/feature
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FeatureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Actions to run againast the harness after the core steps have run OR after a step has failed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs/resources/feature#after Feature#after}
  */
  readonly after?: FeatureAfter[] | cdktf.IResolvable;
  /**
  * Actions to run against the harness before the core feature steps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs/resources/feature#before Feature#before}
  */
  readonly before?: FeatureBefore[] | cdktf.IResolvable;
  /**
  * A descriptor of the feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs/resources/feature#description Feature#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs/resources/feature#harness Feature#harness}
  */
  readonly harness: FeatureHarness;
  /**
  * A set of labels used to optionally filter execution of the feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs/resources/feature#labels Feature#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The name of the feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs/resources/feature#name Feature#name}
  */
  readonly name: string;
  /**
  * Actions to run against the harness.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs/resources/feature#steps Feature#steps}
  */
  readonly steps?: FeatureSteps[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs/resources/feature#timeouts Feature#timeouts}
  */
  readonly timeouts?: FeatureTimeouts;
  /**
  * Whether to warn on failure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs/resources/feature#warn_on_failure Feature#warn_on_failure}
  */
  readonly warnOnFailure?: boolean | cdktf.IResolvable;
}
export interface FeatureAfterRetry {
  /**
  * The maximum number of attempts to retry the step.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs/resources/feature#attempts Feature#attempts}
  */
  readonly attempts: number;
  /**
  * The delay to wait before retrying. Defaults to immediately retrying (0s).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs/resources/feature#delay Feature#delay}
  */
  readonly delay?: string;
  /**
  * The factor to multiply the delay by on each retry. The default value of 1.0 means no delay increase per retry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs/resources/feature#factor Feature#factor}
  */
  readonly factor?: number;
}

export function featureAfterRetryToTerraform(struct?: FeatureAfterRetry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attempts: cdktf.numberToTerraform(struct!.attempts),
    delay: cdktf.stringToTerraform(struct!.delay),
    factor: cdktf.numberToTerraform(struct!.factor),
  }
}


export function featureAfterRetryToHclTerraform(struct?: FeatureAfterRetry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attempts: {
      value: cdktf.numberToHclTerraform(struct!.attempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    delay: {
      value: cdktf.stringToHclTerraform(struct!.delay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    factor: {
      value: cdktf.numberToHclTerraform(struct!.factor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FeatureAfterRetryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FeatureAfterRetry | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.attempts = this._attempts;
    }
    if (this._delay !== undefined) {
      hasAnyValues = true;
      internalValueResult.delay = this._delay;
    }
    if (this._factor !== undefined) {
      hasAnyValues = true;
      internalValueResult.factor = this._factor;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FeatureAfterRetry | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attempts = undefined;
      this._delay = undefined;
      this._factor = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attempts = value.attempts;
      this._delay = value.delay;
      this._factor = value.factor;
    }
  }

  // attempts - computed: false, optional: false, required: true
  private _attempts?: number; 
  public get attempts() {
    return this.getNumberAttribute('attempts');
  }
  public set attempts(value: number) {
    this._attempts = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attemptsInput() {
    return this._attempts;
  }

  // delay - computed: true, optional: true, required: false
  private _delay?: string; 
  public get delay() {
    return this.getStringAttribute('delay');
  }
  public set delay(value: string) {
    this._delay = value;
  }
  public resetDelay() {
    this._delay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayInput() {
    return this._delay;
  }

  // factor - computed: true, optional: true, required: false
  private _factor?: number; 
  public get factor() {
    return this.getNumberAttribute('factor');
  }
  public set factor(value: number) {
    this._factor = value;
  }
  public resetFactor() {
    this._factor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get factorInput() {
    return this._factor;
  }
}
export interface FeatureAfter {
  /**
  * The command or set of commands that should be run at this step
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs/resources/feature#cmd Feature#cmd}
  */
  readonly cmd: string;
  /**
  * An identifying name for this step
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs/resources/feature#name Feature#name}
  */
  readonly name?: string;
  /**
  * Optional retry configuration for the step
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs/resources/feature#retry Feature#retry}
  */
  readonly retry?: FeatureAfterRetry;
  /**
  * An optional working directory for the step to run in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs/resources/feature#workdir Feature#workdir}
  */
  readonly workdir?: string;
}

export function featureAfterToTerraform(struct?: FeatureAfter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cmd: cdktf.stringToTerraform(struct!.cmd),
    name: cdktf.stringToTerraform(struct!.name),
    retry: featureAfterRetryToTerraform(struct!.retry),
    workdir: cdktf.stringToTerraform(struct!.workdir),
  }
}


export function featureAfterToHclTerraform(struct?: FeatureAfter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cmd: {
      value: cdktf.stringToHclTerraform(struct!.cmd),
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
    retry: {
      value: featureAfterRetryToHclTerraform(struct!.retry),
      isBlock: true,
      type: "struct",
      storageClassType: "FeatureAfterRetry",
    },
    workdir: {
      value: cdktf.stringToHclTerraform(struct!.workdir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FeatureAfterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FeatureAfter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cmd !== undefined) {
      hasAnyValues = true;
      internalValueResult.cmd = this._cmd;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._retry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retry = this._retry?.internalValue;
    }
    if (this._workdir !== undefined) {
      hasAnyValues = true;
      internalValueResult.workdir = this._workdir;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FeatureAfter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cmd = undefined;
      this._name = undefined;
      this._retry.internalValue = undefined;
      this._workdir = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cmd = value.cmd;
      this._name = value.name;
      this._retry.internalValue = value.retry;
      this._workdir = value.workdir;
    }
  }

  // cmd - computed: false, optional: false, required: true
  private _cmd?: string; 
  public get cmd() {
    return this.getStringAttribute('cmd');
  }
  public set cmd(value: string) {
    this._cmd = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cmdInput() {
    return this._cmd;
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

  // retry - computed: false, optional: true, required: false
  private _retry = new FeatureAfterRetryOutputReference(this, "retry");
  public get retry() {
    return this._retry;
  }
  public putRetry(value: FeatureAfterRetry) {
    this._retry.internalValue = value;
  }
  public resetRetry() {
    this._retry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryInput() {
    return this._retry.internalValue;
  }

  // workdir - computed: false, optional: true, required: false
  private _workdir?: string; 
  public get workdir() {
    return this.getStringAttribute('workdir');
  }
  public set workdir(value: string) {
    this._workdir = value;
  }
  public resetWorkdir() {
    this._workdir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workdirInput() {
    return this._workdir;
  }
}

export class FeatureAfterList extends cdktf.ComplexList {
  public internalValue? : FeatureAfter[] | cdktf.IResolvable

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
  public get(index: number): FeatureAfterOutputReference {
    return new FeatureAfterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FeatureBeforeRetry {
  /**
  * The maximum number of attempts to retry the step.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs/resources/feature#attempts Feature#attempts}
  */
  readonly attempts: number;
  /**
  * The delay to wait before retrying. Defaults to immediately retrying (0s).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs/resources/feature#delay Feature#delay}
  */
  readonly delay?: string;
  /**
  * The factor to multiply the delay by on each retry. The default value of 1.0 means no delay increase per retry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs/resources/feature#factor Feature#factor}
  */
  readonly factor?: number;
}

export function featureBeforeRetryToTerraform(struct?: FeatureBeforeRetry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attempts: cdktf.numberToTerraform(struct!.attempts),
    delay: cdktf.stringToTerraform(struct!.delay),
    factor: cdktf.numberToTerraform(struct!.factor),
  }
}


export function featureBeforeRetryToHclTerraform(struct?: FeatureBeforeRetry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attempts: {
      value: cdktf.numberToHclTerraform(struct!.attempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    delay: {
      value: cdktf.stringToHclTerraform(struct!.delay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    factor: {
      value: cdktf.numberToHclTerraform(struct!.factor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FeatureBeforeRetryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FeatureBeforeRetry | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.attempts = this._attempts;
    }
    if (this._delay !== undefined) {
      hasAnyValues = true;
      internalValueResult.delay = this._delay;
    }
    if (this._factor !== undefined) {
      hasAnyValues = true;
      internalValueResult.factor = this._factor;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FeatureBeforeRetry | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attempts = undefined;
      this._delay = undefined;
      this._factor = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attempts = value.attempts;
      this._delay = value.delay;
      this._factor = value.factor;
    }
  }

  // attempts - computed: false, optional: false, required: true
  private _attempts?: number; 
  public get attempts() {
    return this.getNumberAttribute('attempts');
  }
  public set attempts(value: number) {
    this._attempts = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attemptsInput() {
    return this._attempts;
  }

  // delay - computed: true, optional: true, required: false
  private _delay?: string; 
  public get delay() {
    return this.getStringAttribute('delay');
  }
  public set delay(value: string) {
    this._delay = value;
  }
  public resetDelay() {
    this._delay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayInput() {
    return this._delay;
  }

  // factor - computed: true, optional: true, required: false
  private _factor?: number; 
  public get factor() {
    return this.getNumberAttribute('factor');
  }
  public set factor(value: number) {
    this._factor = value;
  }
  public resetFactor() {
    this._factor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get factorInput() {
    return this._factor;
  }
}
export interface FeatureBefore {
  /**
  * The command or set of commands that should be run at this step
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs/resources/feature#cmd Feature#cmd}
  */
  readonly cmd: string;
  /**
  * An identifying name for this step
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs/resources/feature#name Feature#name}
  */
  readonly name?: string;
  /**
  * Optional retry configuration for the step
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs/resources/feature#retry Feature#retry}
  */
  readonly retry?: FeatureBeforeRetry;
  /**
  * An optional working directory for the step to run in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs/resources/feature#workdir Feature#workdir}
  */
  readonly workdir?: string;
}

export function featureBeforeToTerraform(struct?: FeatureBefore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cmd: cdktf.stringToTerraform(struct!.cmd),
    name: cdktf.stringToTerraform(struct!.name),
    retry: featureBeforeRetryToTerraform(struct!.retry),
    workdir: cdktf.stringToTerraform(struct!.workdir),
  }
}


export function featureBeforeToHclTerraform(struct?: FeatureBefore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cmd: {
      value: cdktf.stringToHclTerraform(struct!.cmd),
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
    retry: {
      value: featureBeforeRetryToHclTerraform(struct!.retry),
      isBlock: true,
      type: "struct",
      storageClassType: "FeatureBeforeRetry",
    },
    workdir: {
      value: cdktf.stringToHclTerraform(struct!.workdir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FeatureBeforeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FeatureBefore | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cmd !== undefined) {
      hasAnyValues = true;
      internalValueResult.cmd = this._cmd;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._retry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retry = this._retry?.internalValue;
    }
    if (this._workdir !== undefined) {
      hasAnyValues = true;
      internalValueResult.workdir = this._workdir;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FeatureBefore | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cmd = undefined;
      this._name = undefined;
      this._retry.internalValue = undefined;
      this._workdir = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cmd = value.cmd;
      this._name = value.name;
      this._retry.internalValue = value.retry;
      this._workdir = value.workdir;
    }
  }

  // cmd - computed: false, optional: false, required: true
  private _cmd?: string; 
  public get cmd() {
    return this.getStringAttribute('cmd');
  }
  public set cmd(value: string) {
    this._cmd = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cmdInput() {
    return this._cmd;
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

  // retry - computed: false, optional: true, required: false
  private _retry = new FeatureBeforeRetryOutputReference(this, "retry");
  public get retry() {
    return this._retry;
  }
  public putRetry(value: FeatureBeforeRetry) {
    this._retry.internalValue = value;
  }
  public resetRetry() {
    this._retry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryInput() {
    return this._retry.internalValue;
  }

  // workdir - computed: false, optional: true, required: false
  private _workdir?: string; 
  public get workdir() {
    return this.getStringAttribute('workdir');
  }
  public set workdir(value: string) {
    this._workdir = value;
  }
  public resetWorkdir() {
    this._workdir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workdirInput() {
    return this._workdir;
  }
}

export class FeatureBeforeList extends cdktf.ComplexList {
  public internalValue? : FeatureBefore[] | cdktf.IResolvable

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
  public get(index: number): FeatureBeforeOutputReference {
    return new FeatureBeforeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FeatureHarnessInventory {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs/resources/feature#seed Feature#seed}
  */
  readonly seed: string;
}

export function featureHarnessInventoryToTerraform(struct?: FeatureHarnessInventory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    seed: cdktf.stringToTerraform(struct!.seed),
  }
}


export function featureHarnessInventoryToHclTerraform(struct?: FeatureHarnessInventory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    seed: {
      value: cdktf.stringToHclTerraform(struct!.seed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FeatureHarnessInventoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FeatureHarnessInventory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._seed !== undefined) {
      hasAnyValues = true;
      internalValueResult.seed = this._seed;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FeatureHarnessInventory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._seed = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._seed = value.seed;
    }
  }

  // seed - computed: false, optional: false, required: true
  private _seed?: string; 
  public get seed() {
    return this.getStringAttribute('seed');
  }
  public set seed(value: string) {
    this._seed = value;
  }
  // Temporarily expose input value. Use with caution.
  public get seedInput() {
    return this._seed;
  }
}
export interface FeatureHarness {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs/resources/feature#id Feature#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs/resources/feature#inventory Feature#inventory}
  */
  readonly inventory: FeatureHarnessInventory;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs/resources/feature#name Feature#name}
  */
  readonly name: string;
}

export function featureHarnessToTerraform(struct?: FeatureHarness | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    inventory: featureHarnessInventoryToTerraform(struct!.inventory),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function featureHarnessToHclTerraform(struct?: FeatureHarness | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inventory: {
      value: featureHarnessInventoryToHclTerraform(struct!.inventory),
      isBlock: true,
      type: "struct",
      storageClassType: "FeatureHarnessInventory",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FeatureHarnessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FeatureHarness | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._inventory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inventory = this._inventory?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FeatureHarness | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._inventory.internalValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._inventory.internalValue = value.inventory;
      this._name = value.name;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // inventory - computed: false, optional: false, required: true
  private _inventory = new FeatureHarnessInventoryOutputReference(this, "inventory");
  public get inventory() {
    return this._inventory;
  }
  public putInventory(value: FeatureHarnessInventory) {
    this._inventory.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inventoryInput() {
    return this._inventory.internalValue;
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
}
export interface FeatureStepsRetry {
  /**
  * The maximum number of attempts to retry the step.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs/resources/feature#attempts Feature#attempts}
  */
  readonly attempts: number;
  /**
  * The delay to wait before retrying. Defaults to immediately retrying (0s).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs/resources/feature#delay Feature#delay}
  */
  readonly delay?: string;
  /**
  * The factor to multiply the delay by on each retry. The default value of 1.0 means no delay increase per retry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs/resources/feature#factor Feature#factor}
  */
  readonly factor?: number;
}

export function featureStepsRetryToTerraform(struct?: FeatureStepsRetry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attempts: cdktf.numberToTerraform(struct!.attempts),
    delay: cdktf.stringToTerraform(struct!.delay),
    factor: cdktf.numberToTerraform(struct!.factor),
  }
}


export function featureStepsRetryToHclTerraform(struct?: FeatureStepsRetry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attempts: {
      value: cdktf.numberToHclTerraform(struct!.attempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    delay: {
      value: cdktf.stringToHclTerraform(struct!.delay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    factor: {
      value: cdktf.numberToHclTerraform(struct!.factor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FeatureStepsRetryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FeatureStepsRetry | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.attempts = this._attempts;
    }
    if (this._delay !== undefined) {
      hasAnyValues = true;
      internalValueResult.delay = this._delay;
    }
    if (this._factor !== undefined) {
      hasAnyValues = true;
      internalValueResult.factor = this._factor;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FeatureStepsRetry | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attempts = undefined;
      this._delay = undefined;
      this._factor = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attempts = value.attempts;
      this._delay = value.delay;
      this._factor = value.factor;
    }
  }

  // attempts - computed: false, optional: false, required: true
  private _attempts?: number; 
  public get attempts() {
    return this.getNumberAttribute('attempts');
  }
  public set attempts(value: number) {
    this._attempts = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attemptsInput() {
    return this._attempts;
  }

  // delay - computed: true, optional: true, required: false
  private _delay?: string; 
  public get delay() {
    return this.getStringAttribute('delay');
  }
  public set delay(value: string) {
    this._delay = value;
  }
  public resetDelay() {
    this._delay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayInput() {
    return this._delay;
  }

  // factor - computed: true, optional: true, required: false
  private _factor?: number; 
  public get factor() {
    return this.getNumberAttribute('factor');
  }
  public set factor(value: number) {
    this._factor = value;
  }
  public resetFactor() {
    this._factor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get factorInput() {
    return this._factor;
  }
}
export interface FeatureSteps {
  /**
  * The command or set of commands that should be run at this step
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs/resources/feature#cmd Feature#cmd}
  */
  readonly cmd: string;
  /**
  * An identifying name for this step
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs/resources/feature#name Feature#name}
  */
  readonly name?: string;
  /**
  * Optional retry configuration for the step
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs/resources/feature#retry Feature#retry}
  */
  readonly retry?: FeatureStepsRetry;
  /**
  * An optional working directory for the step to run in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs/resources/feature#workdir Feature#workdir}
  */
  readonly workdir?: string;
}

export function featureStepsToTerraform(struct?: FeatureSteps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cmd: cdktf.stringToTerraform(struct!.cmd),
    name: cdktf.stringToTerraform(struct!.name),
    retry: featureStepsRetryToTerraform(struct!.retry),
    workdir: cdktf.stringToTerraform(struct!.workdir),
  }
}


export function featureStepsToHclTerraform(struct?: FeatureSteps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cmd: {
      value: cdktf.stringToHclTerraform(struct!.cmd),
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
    retry: {
      value: featureStepsRetryToHclTerraform(struct!.retry),
      isBlock: true,
      type: "struct",
      storageClassType: "FeatureStepsRetry",
    },
    workdir: {
      value: cdktf.stringToHclTerraform(struct!.workdir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FeatureStepsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FeatureSteps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cmd !== undefined) {
      hasAnyValues = true;
      internalValueResult.cmd = this._cmd;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._retry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retry = this._retry?.internalValue;
    }
    if (this._workdir !== undefined) {
      hasAnyValues = true;
      internalValueResult.workdir = this._workdir;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FeatureSteps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cmd = undefined;
      this._name = undefined;
      this._retry.internalValue = undefined;
      this._workdir = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cmd = value.cmd;
      this._name = value.name;
      this._retry.internalValue = value.retry;
      this._workdir = value.workdir;
    }
  }

  // cmd - computed: false, optional: false, required: true
  private _cmd?: string; 
  public get cmd() {
    return this.getStringAttribute('cmd');
  }
  public set cmd(value: string) {
    this._cmd = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cmdInput() {
    return this._cmd;
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

  // retry - computed: false, optional: true, required: false
  private _retry = new FeatureStepsRetryOutputReference(this, "retry");
  public get retry() {
    return this._retry;
  }
  public putRetry(value: FeatureStepsRetry) {
    this._retry.internalValue = value;
  }
  public resetRetry() {
    this._retry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryInput() {
    return this._retry.internalValue;
  }

  // workdir - computed: false, optional: true, required: false
  private _workdir?: string; 
  public get workdir() {
    return this.getStringAttribute('workdir');
  }
  public set workdir(value: string) {
    this._workdir = value;
  }
  public resetWorkdir() {
    this._workdir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workdirInput() {
    return this._workdir;
  }
}

export class FeatureStepsList extends cdktf.ComplexList {
  public internalValue? : FeatureSteps[] | cdktf.IResolvable

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
  public get(index: number): FeatureStepsOutputReference {
    return new FeatureStepsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FeatureTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs/resources/feature#create Feature#create}
  */
  readonly create?: string;
}

export function featureTimeoutsToTerraform(struct?: FeatureTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


export function featureTimeoutsToHclTerraform(struct?: FeatureTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FeatureTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FeatureTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FeatureTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs/resources/feature imagetest_feature}
*/
export class Feature extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "imagetest_feature";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Feature resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Feature to import
  * @param importFromId The id of the existing Feature that should be imported. Refer to the {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs/resources/feature#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Feature to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "imagetest_feature", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs/resources/feature imagetest_feature} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FeatureConfig
  */
  public constructor(scope: Construct, id: string, config: FeatureConfig) {
    super(scope, id, {
      terraformResourceType: 'imagetest_feature',
      terraformGeneratorMetadata: {
        providerName: 'imagetest',
        providerVersion: '0.0.107',
        providerVersionConstraint: '0.0.107'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._after.internalValue = config.after;
    this._before.internalValue = config.before;
    this._description = config.description;
    this._harness.internalValue = config.harness;
    this._labels = config.labels;
    this._name = config.name;
    this._steps.internalValue = config.steps;
    this._timeouts.internalValue = config.timeouts;
    this._warnOnFailure = config.warnOnFailure;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // after - computed: false, optional: true, required: false
  private _after = new FeatureAfterList(this, "after", false);
  public get after() {
    return this._after;
  }
  public putAfter(value: FeatureAfter[] | cdktf.IResolvable) {
    this._after.internalValue = value;
  }
  public resetAfter() {
    this._after.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get afterInput() {
    return this._after.internalValue;
  }

  // before - computed: false, optional: true, required: false
  private _before = new FeatureBeforeList(this, "before", false);
  public get before() {
    return this._before;
  }
  public putBefore(value: FeatureBefore[] | cdktf.IResolvable) {
    this._before.internalValue = value;
  }
  public resetBefore() {
    this._before.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beforeInput() {
    return this._before.internalValue;
  }

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

  // harness - computed: false, optional: false, required: true
  private _harness = new FeatureHarnessOutputReference(this, "harness");
  public get harness() {
    return this._harness;
  }
  public putHarness(value: FeatureHarness) {
    this._harness.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get harnessInput() {
    return this._harness.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // skipped - computed: true, optional: false, required: false
  public get skipped() {
    return this.getStringAttribute('skipped');
  }

  // steps - computed: false, optional: true, required: false
  private _steps = new FeatureStepsList(this, "steps", false);
  public get steps() {
    return this._steps;
  }
  public putSteps(value: FeatureSteps[] | cdktf.IResolvable) {
    this._steps.internalValue = value;
  }
  public resetSteps() {
    this._steps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepsInput() {
    return this._steps.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new FeatureTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: FeatureTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // warn_on_failure - computed: true, optional: true, required: false
  private _warnOnFailure?: boolean | cdktf.IResolvable; 
  public get warnOnFailure() {
    return this.getBooleanAttribute('warn_on_failure');
  }
  public set warnOnFailure(value: boolean | cdktf.IResolvable) {
    this._warnOnFailure = value;
  }
  public resetWarnOnFailure() {
    this._warnOnFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warnOnFailureInput() {
    return this._warnOnFailure;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      after: cdktf.listMapper(featureAfterToTerraform, false)(this._after.internalValue),
      before: cdktf.listMapper(featureBeforeToTerraform, false)(this._before.internalValue),
      description: cdktf.stringToTerraform(this._description),
      harness: featureHarnessToTerraform(this._harness.internalValue),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      steps: cdktf.listMapper(featureStepsToTerraform, false)(this._steps.internalValue),
      timeouts: featureTimeoutsToTerraform(this._timeouts.internalValue),
      warn_on_failure: cdktf.booleanToTerraform(this._warnOnFailure),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      after: {
        value: cdktf.listMapperHcl(featureAfterToHclTerraform, false)(this._after.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FeatureAfterList",
      },
      before: {
        value: cdktf.listMapperHcl(featureBeforeToHclTerraform, false)(this._before.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FeatureBeforeList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      harness: {
        value: featureHarnessToHclTerraform(this._harness.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FeatureHarness",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      steps: {
        value: cdktf.listMapperHcl(featureStepsToHclTerraform, false)(this._steps.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FeatureStepsList",
      },
      timeouts: {
        value: featureTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FeatureTimeouts",
      },
      warn_on_failure: {
        value: cdktf.booleanToHclTerraform(this._warnOnFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
