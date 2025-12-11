// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/as_complete_lifecycle
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AsCompleteLifecycleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/as_complete_lifecycle#id AsCompleteLifecycle#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance ID. Either InstanceId or LifecycleActionToken must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/as_complete_lifecycle#instance_id AsCompleteLifecycle#instance_id}
  */
  readonly instanceId?: string;
  /**
  * Result of the lifecycle action. Value range: `CONTINUE`, `ABANDON`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/as_complete_lifecycle#lifecycle_action_result AsCompleteLifecycle#lifecycle_action_result}
  */
  readonly lifecycleActionResult: string;
  /**
  * Either InstanceId or LifecycleActionToken must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/as_complete_lifecycle#lifecycle_action_token AsCompleteLifecycle#lifecycle_action_token}
  */
  readonly lifecycleActionToken?: string;
  /**
  * Lifecycle hook ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/as_complete_lifecycle#lifecycle_hook_id AsCompleteLifecycle#lifecycle_hook_id}
  */
  readonly lifecycleHookId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/as_complete_lifecycle tencentcloud_as_complete_lifecycle}
*/
export class AsCompleteLifecycle extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_as_complete_lifecycle";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AsCompleteLifecycle resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AsCompleteLifecycle to import
  * @param importFromId The id of the existing AsCompleteLifecycle that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/as_complete_lifecycle#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AsCompleteLifecycle to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_as_complete_lifecycle", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/as_complete_lifecycle tencentcloud_as_complete_lifecycle} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AsCompleteLifecycleConfig
  */
  public constructor(scope: Construct, id: string, config: AsCompleteLifecycleConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_as_complete_lifecycle',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.44',
        providerVersionConstraint: '1.82.44'
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
    this._lifecycleActionResult = config.lifecycleActionResult;
    this._lifecycleActionToken = config.lifecycleActionToken;
    this._lifecycleHookId = config.lifecycleHookId;
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

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // lifecycle_action_result - computed: false, optional: false, required: true
  private _lifecycleActionResult?: string; 
  public get lifecycleActionResult() {
    return this.getStringAttribute('lifecycle_action_result');
  }
  public set lifecycleActionResult(value: string) {
    this._lifecycleActionResult = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleActionResultInput() {
    return this._lifecycleActionResult;
  }

  // lifecycle_action_token - computed: false, optional: true, required: false
  private _lifecycleActionToken?: string; 
  public get lifecycleActionToken() {
    return this.getStringAttribute('lifecycle_action_token');
  }
  public set lifecycleActionToken(value: string) {
    this._lifecycleActionToken = value;
  }
  public resetLifecycleActionToken() {
    this._lifecycleActionToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleActionTokenInput() {
    return this._lifecycleActionToken;
  }

  // lifecycle_hook_id - computed: false, optional: false, required: true
  private _lifecycleHookId?: string; 
  public get lifecycleHookId() {
    return this.getStringAttribute('lifecycle_hook_id');
  }
  public set lifecycleHookId(value: string) {
    this._lifecycleHookId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleHookIdInput() {
    return this._lifecycleHookId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      lifecycle_action_result: cdktf.stringToTerraform(this._lifecycleActionResult),
      lifecycle_action_token: cdktf.stringToTerraform(this._lifecycleActionToken),
      lifecycle_hook_id: cdktf.stringToTerraform(this._lifecycleHookId),
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
      lifecycle_action_result: {
        value: cdktf.stringToHclTerraform(this._lifecycleActionResult),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lifecycle_action_token: {
        value: cdktf.stringToHclTerraform(this._lifecycleActionToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lifecycle_hook_id: {
        value: cdktf.stringToHclTerraform(this._lifecycleHookId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
