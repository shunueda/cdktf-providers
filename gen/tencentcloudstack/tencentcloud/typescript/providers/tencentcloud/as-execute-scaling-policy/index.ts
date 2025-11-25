// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/as_execute_scaling_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AsExecuteScalingPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Auto-scaling policy ID. This parameter is not available to a target tracking policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/as_execute_scaling_policy#auto_scaling_policy_id AsExecuteScalingPolicy#auto_scaling_policy_id}
  */
  readonly autoScalingPolicyId: string;
  /**
  * Whether to check if the auto scaling group is in the cooldown period. Default value: false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/as_execute_scaling_policy#honor_cooldown AsExecuteScalingPolicy#honor_cooldown}
  */
  readonly honorCooldown?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/as_execute_scaling_policy#id AsExecuteScalingPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Source that triggers the scaling policy. Valid values: API and CLOUD_MONITOR. Default value: API. The value CLOUD_MONITOR is specific to the Cloud Monitor service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/as_execute_scaling_policy#trigger_source AsExecuteScalingPolicy#trigger_source}
  */
  readonly triggerSource?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/as_execute_scaling_policy tencentcloud_as_execute_scaling_policy}
*/
export class AsExecuteScalingPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_as_execute_scaling_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AsExecuteScalingPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AsExecuteScalingPolicy to import
  * @param importFromId The id of the existing AsExecuteScalingPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/as_execute_scaling_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AsExecuteScalingPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_as_execute_scaling_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/as_execute_scaling_policy tencentcloud_as_execute_scaling_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AsExecuteScalingPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: AsExecuteScalingPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_as_execute_scaling_policy',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.38',
        providerVersionConstraint: '1.82.38'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoScalingPolicyId = config.autoScalingPolicyId;
    this._honorCooldown = config.honorCooldown;
    this._id = config.id;
    this._triggerSource = config.triggerSource;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_scaling_policy_id - computed: false, optional: false, required: true
  private _autoScalingPolicyId?: string; 
  public get autoScalingPolicyId() {
    return this.getStringAttribute('auto_scaling_policy_id');
  }
  public set autoScalingPolicyId(value: string) {
    this._autoScalingPolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScalingPolicyIdInput() {
    return this._autoScalingPolicyId;
  }

  // honor_cooldown - computed: false, optional: true, required: false
  private _honorCooldown?: boolean | cdktf.IResolvable; 
  public get honorCooldown() {
    return this.getBooleanAttribute('honor_cooldown');
  }
  public set honorCooldown(value: boolean | cdktf.IResolvable) {
    this._honorCooldown = value;
  }
  public resetHonorCooldown() {
    this._honorCooldown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get honorCooldownInput() {
    return this._honorCooldown;
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

  // trigger_source - computed: false, optional: true, required: false
  private _triggerSource?: string; 
  public get triggerSource() {
    return this.getStringAttribute('trigger_source');
  }
  public set triggerSource(value: string) {
    this._triggerSource = value;
  }
  public resetTriggerSource() {
    this._triggerSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerSourceInput() {
    return this._triggerSource;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_scaling_policy_id: cdktf.stringToTerraform(this._autoScalingPolicyId),
      honor_cooldown: cdktf.booleanToTerraform(this._honorCooldown),
      id: cdktf.stringToTerraform(this._id),
      trigger_source: cdktf.stringToTerraform(this._triggerSource),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_scaling_policy_id: {
        value: cdktf.stringToHclTerraform(this._autoScalingPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      honor_cooldown: {
        value: cdktf.booleanToHclTerraform(this._honorCooldown),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trigger_source: {
        value: cdktf.stringToHclTerraform(this._triggerSource),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
