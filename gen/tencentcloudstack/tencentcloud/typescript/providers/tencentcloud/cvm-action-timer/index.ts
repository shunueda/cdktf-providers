// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/cvm_action_timer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CvmActionTimerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/cvm_action_timer#id CvmActionTimer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/cvm_action_timer#instance_id CvmActionTimer#instance_id}
  */
  readonly instanceId: string;
  /**
  * action_timer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/cvm_action_timer#action_timer CvmActionTimer#action_timer}
  */
  readonly actionTimer: CvmActionTimerActionTimer;
}
export interface CvmActionTimerActionTimer {
  /**
  * Execution time, expressed according to ISO8601 standard and using UTC time. The format is YYYY-MM-DDThh:mm:ssZ. For example, 2018-05-29T11:26:40Z, the execution time must be 5 minutes longer than the current time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/cvm_action_timer#action_time CvmActionTimer#action_time}
  */
  readonly actionTime?: string;
  /**
  * Timer action, currently only supports destroying one value: TerminateInstances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/cvm_action_timer#timer_action CvmActionTimer#timer_action}
  */
  readonly timerAction?: string;
}

export function cvmActionTimerActionTimerToTerraform(struct?: CvmActionTimerActionTimerOutputReference | CvmActionTimerActionTimer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_time: cdktf.stringToTerraform(struct!.actionTime),
    timer_action: cdktf.stringToTerraform(struct!.timerAction),
  }
}


export function cvmActionTimerActionTimerToHclTerraform(struct?: CvmActionTimerActionTimerOutputReference | CvmActionTimerActionTimer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_time: {
      value: cdktf.stringToHclTerraform(struct!.actionTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timer_action: {
      value: cdktf.stringToHclTerraform(struct!.timerAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CvmActionTimerActionTimerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CvmActionTimerActionTimer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionTime = this._actionTime;
    }
    if (this._timerAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.timerAction = this._timerAction;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CvmActionTimerActionTimer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actionTime = undefined;
      this._timerAction = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actionTime = value.actionTime;
      this._timerAction = value.timerAction;
    }
  }

  // action_time - computed: false, optional: true, required: false
  private _actionTime?: string; 
  public get actionTime() {
    return this.getStringAttribute('action_time');
  }
  public set actionTime(value: string) {
    this._actionTime = value;
  }
  public resetActionTime() {
    this._actionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionTimeInput() {
    return this._actionTime;
  }

  // timer_action - computed: false, optional: true, required: false
  private _timerAction?: string; 
  public get timerAction() {
    return this.getStringAttribute('timer_action');
  }
  public set timerAction(value: string) {
    this._timerAction = value;
  }
  public resetTimerAction() {
    this._timerAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timerActionInput() {
    return this._timerAction;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/cvm_action_timer tencentcloud_cvm_action_timer}
*/
export class CvmActionTimer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cvm_action_timer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CvmActionTimer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CvmActionTimer to import
  * @param importFromId The id of the existing CvmActionTimer that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/cvm_action_timer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CvmActionTimer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cvm_action_timer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/cvm_action_timer tencentcloud_cvm_action_timer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CvmActionTimerConfig
  */
  public constructor(scope: Construct, id: string, config: CvmActionTimerConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cvm_action_timer',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.39',
        providerVersionConstraint: '1.82.39'
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
    this._instanceId = config.instanceId;
    this._actionTimer.internalValue = config.actionTimer;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // action_timer - computed: false, optional: false, required: true
  private _actionTimer = new CvmActionTimerActionTimerOutputReference(this, "action_timer");
  public get actionTimer() {
    return this._actionTimer;
  }
  public putActionTimer(value: CvmActionTimerActionTimer) {
    this._actionTimer.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionTimerInput() {
    return this._actionTimer.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      action_timer: cvmActionTimerActionTimerToTerraform(this._actionTimer.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action_timer: {
        value: cvmActionTimerActionTimerToHclTerraform(this._actionTimer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CvmActionTimerActionTimerList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
