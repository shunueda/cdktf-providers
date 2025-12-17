// https://registry.terraform.io/providers/spacelift-io/spacelift/1.41.0/docs/resources/run
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RunConfig extends cdktf.TerraformMetaArguments {
  /**
  * The commit SHA for which to trigger a run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.41.0/docs/resources/run#commit_sha Run#commit_sha}
  */
  readonly commitSha?: string;
  /**
  * Arbitrary map of values that, when changed, will trigger recreation of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.41.0/docs/resources/run#keepers Run#keepers}
  */
  readonly keepers?: { [key: string]: string };
  /**
  * Whether the run is a proposed run. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.41.0/docs/resources/run#proposed Run#proposed}
  */
  readonly proposed?: boolean | cdktf.IResolvable;
  /**
  * ID of the stack on which the run is to be triggered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.41.0/docs/resources/run#stack_id Run#stack_id}
  */
  readonly stackId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.41.0/docs/resources/run#timeouts Run#timeouts}
  */
  readonly timeouts?: RunTimeouts;
  /**
  * wait block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.41.0/docs/resources/run#wait Run#wait}
  */
  readonly wait?: RunWait;
}
export interface RunTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.41.0/docs/resources/run#create Run#create}
  */
  readonly create?: string;
}

export function runTimeoutsToTerraform(struct?: RunTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


export function runTimeoutsToHclTerraform(struct?: RunTimeouts | cdktf.IResolvable): any {
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

export class RunTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RunTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RunTimeouts | cdktf.IResolvable | undefined) {
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
export interface RunWait {
  /**
  * Continue on the specified states of a finished run. If not specified, the default is `[ 'finished' ]`. You can use following states: `applying`, `canceled`, `confirmed`, `destroying`, `discarded`, `failed`, `finished`, `initializing`, `pending_review`, `performing`, `planning`, `preparing_apply`, `preparing_replan`, `preparing`, `queued`, `ready`, `replan_requested`, `skipped`, `stopped`, `unconfirmed`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.41.0/docs/resources/run#continue_on_state Run#continue_on_state}
  */
  readonly continueOnState?: string[];
  /**
  * Continue if run timed out, i.e. did not reach any defined end state in time. Default: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.41.0/docs/resources/run#continue_on_timeout Run#continue_on_timeout}
  */
  readonly continueOnTimeout?: boolean | cdktf.IResolvable;
  /**
  * Whether waiting for a job is disabled or not. Default: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.41.0/docs/resources/run#disabled Run#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
}

export function runWaitToTerraform(struct?: RunWaitOutputReference | RunWait): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    continue_on_state: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.continueOnState),
    continue_on_timeout: cdktf.booleanToTerraform(struct!.continueOnTimeout),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
  }
}


export function runWaitToHclTerraform(struct?: RunWaitOutputReference | RunWait): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    continue_on_state: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.continueOnState),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    continue_on_timeout: {
      value: cdktf.booleanToHclTerraform(struct!.continueOnTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RunWaitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RunWait | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._continueOnState !== undefined) {
      hasAnyValues = true;
      internalValueResult.continueOnState = this._continueOnState;
    }
    if (this._continueOnTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.continueOnTimeout = this._continueOnTimeout;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RunWait | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._continueOnState = undefined;
      this._continueOnTimeout = undefined;
      this._disabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._continueOnState = value.continueOnState;
      this._continueOnTimeout = value.continueOnTimeout;
      this._disabled = value.disabled;
    }
  }

  // continue_on_state - computed: false, optional: true, required: false
  private _continueOnState?: string[]; 
  public get continueOnState() {
    return cdktf.Fn.tolist(this.getListAttribute('continue_on_state'));
  }
  public set continueOnState(value: string[]) {
    this._continueOnState = value;
  }
  public resetContinueOnState() {
    this._continueOnState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continueOnStateInput() {
    return this._continueOnState;
  }

  // continue_on_timeout - computed: false, optional: true, required: false
  private _continueOnTimeout?: boolean | cdktf.IResolvable; 
  public get continueOnTimeout() {
    return this.getBooleanAttribute('continue_on_timeout');
  }
  public set continueOnTimeout(value: boolean | cdktf.IResolvable) {
    this._continueOnTimeout = value;
  }
  public resetContinueOnTimeout() {
    this._continueOnTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continueOnTimeoutInput() {
    return this._continueOnTimeout;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.41.0/docs/resources/run spacelift_run}
*/
export class Run extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spacelift_run";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Run resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Run to import
  * @param importFromId The id of the existing Run that should be imported. Refer to the {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.41.0/docs/resources/run#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Run to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "spacelift_run", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.41.0/docs/resources/run spacelift_run} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RunConfig
  */
  public constructor(scope: Construct, id: string, config: RunConfig) {
    super(scope, id, {
      terraformResourceType: 'spacelift_run',
      terraformGeneratorMetadata: {
        providerName: 'spacelift',
        providerVersion: '1.41.0',
        providerVersionConstraint: '1.41.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._commitSha = config.commitSha;
    this._keepers = config.keepers;
    this._proposed = config.proposed;
    this._stackId = config.stackId;
    this._timeouts.internalValue = config.timeouts;
    this._wait.internalValue = config.wait;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // commit_sha - computed: false, optional: true, required: false
  private _commitSha?: string; 
  public get commitSha() {
    return this.getStringAttribute('commit_sha');
  }
  public set commitSha(value: string) {
    this._commitSha = value;
  }
  public resetCommitSha() {
    this._commitSha = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commitShaInput() {
    return this._commitSha;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // proposed - computed: false, optional: true, required: false
  private _proposed?: boolean | cdktf.IResolvable; 
  public get proposed() {
    return this.getBooleanAttribute('proposed');
  }
  public set proposed(value: boolean | cdktf.IResolvable) {
    this._proposed = value;
  }
  public resetProposed() {
    this._proposed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proposedInput() {
    return this._proposed;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new RunTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: RunTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // wait - computed: false, optional: true, required: false
  private _wait = new RunWaitOutputReference(this, "wait");
  public get wait() {
    return this._wait;
  }
  public putWait(value: RunWait) {
    this._wait.internalValue = value;
  }
  public resetWait() {
    this._wait.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitInput() {
    return this._wait.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      commit_sha: cdktf.stringToTerraform(this._commitSha),
      keepers: cdktf.hashMapper(cdktf.stringToTerraform)(this._keepers),
      proposed: cdktf.booleanToTerraform(this._proposed),
      stack_id: cdktf.stringToTerraform(this._stackId),
      timeouts: runTimeoutsToTerraform(this._timeouts.internalValue),
      wait: runWaitToTerraform(this._wait.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      commit_sha: {
        value: cdktf.stringToHclTerraform(this._commitSha),
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
      proposed: {
        value: cdktf.booleanToHclTerraform(this._proposed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      stack_id: {
        value: cdktf.stringToHclTerraform(this._stackId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: runTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RunTimeouts",
      },
      wait: {
        value: runWaitToHclTerraform(this._wait.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RunWaitList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
