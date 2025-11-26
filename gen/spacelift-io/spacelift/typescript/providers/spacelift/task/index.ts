// https://registry.terraform.io/providers/spacelift-io/spacelift/1.40.0/docs/resources/task
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TaskConfig extends cdktf.TerraformMetaArguments {
  /**
  * Command that will be run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.40.0/docs/resources/task#command Task#command}
  */
  readonly command: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.40.0/docs/resources/task#id Task#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether to initialize the stack or not. Default: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.40.0/docs/resources/task#init Task#init}
  */
  readonly init?: boolean | cdktf.IResolvable;
  /**
  * Arbitrary map of values that, when changed, will trigger recreation of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.40.0/docs/resources/task#keepers Task#keepers}
  */
  readonly keepers?: { [key: string]: string };
  /**
  * ID of the stack for which to run the task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.40.0/docs/resources/task#stack_id Task#stack_id}
  */
  readonly stackId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.40.0/docs/resources/task#timeouts Task#timeouts}
  */
  readonly timeouts?: TaskTimeouts;
  /**
  * wait block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.40.0/docs/resources/task#wait Task#wait}
  */
  readonly wait?: TaskWait;
}
export interface TaskTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.40.0/docs/resources/task#create Task#create}
  */
  readonly create?: string;
}

export function taskTimeoutsToTerraform(struct?: TaskTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


export function taskTimeoutsToHclTerraform(struct?: TaskTimeouts | cdktf.IResolvable): any {
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

export class TaskTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TaskTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: TaskTimeouts | cdktf.IResolvable | undefined) {
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
export interface TaskWait {
  /**
  * Continue on the specified states of a finished run. If not specified, the default is `[ 'finished' ]`. You can use following states: `applying`, `canceled`, `confirmed`, `destroying`, `discarded`, `failed`, `finished`, `initializing`, `pending_review`, `performing`, `planning`, `preparing_apply`, `preparing_replan`, `preparing`, `queued`, `ready`, `replan_requested`, `skipped`, `stopped`, `unconfirmed`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.40.0/docs/resources/task#continue_on_state Task#continue_on_state}
  */
  readonly continueOnState?: string[];
  /**
  * Continue if task timed out, i.e. did not reach any defined end state in time. Default: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.40.0/docs/resources/task#continue_on_timeout Task#continue_on_timeout}
  */
  readonly continueOnTimeout?: boolean | cdktf.IResolvable;
  /**
  * Whether waiting for the task is disabled or not. Default: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.40.0/docs/resources/task#disabled Task#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
}

export function taskWaitToTerraform(struct?: TaskWaitOutputReference | TaskWait): any {
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


export function taskWaitToHclTerraform(struct?: TaskWaitOutputReference | TaskWait): any {
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

export class TaskWaitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TaskWait | undefined {
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

  public set internalValue(value: TaskWait | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.40.0/docs/resources/task spacelift_task}
*/
export class Task extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spacelift_task";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Task resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Task to import
  * @param importFromId The id of the existing Task that should be imported. Refer to the {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.40.0/docs/resources/task#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Task to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "spacelift_task", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.40.0/docs/resources/task spacelift_task} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TaskConfig
  */
  public constructor(scope: Construct, id: string, config: TaskConfig) {
    super(scope, id, {
      terraformResourceType: 'spacelift_task',
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
    this._command = config.command;
    this._id = config.id;
    this._init = config.init;
    this._keepers = config.keepers;
    this._stackId = config.stackId;
    this._timeouts.internalValue = config.timeouts;
    this._wait.internalValue = config.wait;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // command - computed: false, optional: false, required: true
  private _command?: string; 
  public get command() {
    return this.getStringAttribute('command');
  }
  public set command(value: string) {
    this._command = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
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

  // init - computed: false, optional: true, required: false
  private _init?: boolean | cdktf.IResolvable; 
  public get init() {
    return this.getBooleanAttribute('init');
  }
  public set init(value: boolean | cdktf.IResolvable) {
    this._init = value;
  }
  public resetInit() {
    this._init = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initInput() {
    return this._init;
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
  private _timeouts = new TaskTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: TaskTimeouts) {
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
  private _wait = new TaskWaitOutputReference(this, "wait");
  public get wait() {
    return this._wait;
  }
  public putWait(value: TaskWait) {
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
      command: cdktf.stringToTerraform(this._command),
      id: cdktf.stringToTerraform(this._id),
      init: cdktf.booleanToTerraform(this._init),
      keepers: cdktf.hashMapper(cdktf.stringToTerraform)(this._keepers),
      stack_id: cdktf.stringToTerraform(this._stackId),
      timeouts: taskTimeoutsToTerraform(this._timeouts.internalValue),
      wait: taskWaitToTerraform(this._wait.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      command: {
        value: cdktf.stringToHclTerraform(this._command),
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
      init: {
        value: cdktf.booleanToHclTerraform(this._init),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      keepers: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._keepers),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      stack_id: {
        value: cdktf.stringToHclTerraform(this._stackId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: taskTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TaskTimeouts",
      },
      wait: {
        value: taskWaitToHclTerraform(this._wait.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TaskWaitList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
