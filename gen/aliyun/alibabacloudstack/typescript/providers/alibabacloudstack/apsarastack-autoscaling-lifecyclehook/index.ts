// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_autoscaling_lifecyclehook
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApsarastackAutoscalingLifecyclehookConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_autoscaling_lifecyclehook#default_result ApsarastackAutoscalingLifecyclehook#default_result}
  */
  readonly defaultResult?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_autoscaling_lifecyclehook#heartbeat_timeout ApsarastackAutoscalingLifecyclehook#heartbeat_timeout}
  */
  readonly heartbeatTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_autoscaling_lifecyclehook#id ApsarastackAutoscalingLifecyclehook#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_autoscaling_lifecyclehook#lifecycle_hook_name ApsarastackAutoscalingLifecyclehook#lifecycle_hook_name}
  */
  readonly lifecycleHookName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_autoscaling_lifecyclehook#lifecycle_transition ApsarastackAutoscalingLifecyclehook#lifecycle_transition}
  */
  readonly lifecycleTransition: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_autoscaling_lifecyclehook#name ApsarastackAutoscalingLifecyclehook#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_autoscaling_lifecyclehook#notification_arn ApsarastackAutoscalingLifecyclehook#notification_arn}
  */
  readonly notificationArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_autoscaling_lifecyclehook#notification_metadata ApsarastackAutoscalingLifecyclehook#notification_metadata}
  */
  readonly notificationMetadata?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_autoscaling_lifecyclehook#scaling_group_id ApsarastackAutoscalingLifecyclehook#scaling_group_id}
  */
  readonly scalingGroupId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_autoscaling_lifecyclehook apsarastack_autoscaling_lifecyclehook}
*/
export class ApsarastackAutoscalingLifecyclehook extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apsarastack_autoscaling_lifecyclehook";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApsarastackAutoscalingLifecyclehook resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApsarastackAutoscalingLifecyclehook to import
  * @param importFromId The id of the existing ApsarastackAutoscalingLifecyclehook that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_autoscaling_lifecyclehook#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApsarastackAutoscalingLifecyclehook to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apsarastack_autoscaling_lifecyclehook", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_autoscaling_lifecyclehook apsarastack_autoscaling_lifecyclehook} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApsarastackAutoscalingLifecyclehookConfig
  */
  public constructor(scope: Construct, id: string, config: ApsarastackAutoscalingLifecyclehookConfig) {
    super(scope, id, {
      terraformResourceType: 'apsarastack_autoscaling_lifecyclehook',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.21',
        providerVersionConstraint: '3.18.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultResult = config.defaultResult;
    this._heartbeatTimeout = config.heartbeatTimeout;
    this._id = config.id;
    this._lifecycleHookName = config.lifecycleHookName;
    this._lifecycleTransition = config.lifecycleTransition;
    this._name = config.name;
    this._notificationArn = config.notificationArn;
    this._notificationMetadata = config.notificationMetadata;
    this._scalingGroupId = config.scalingGroupId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_result - computed: false, optional: true, required: false
  private _defaultResult?: string; 
  public get defaultResult() {
    return this.getStringAttribute('default_result');
  }
  public set defaultResult(value: string) {
    this._defaultResult = value;
  }
  public resetDefaultResult() {
    this._defaultResult = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultResultInput() {
    return this._defaultResult;
  }

  // heartbeat_timeout - computed: false, optional: true, required: false
  private _heartbeatTimeout?: number; 
  public get heartbeatTimeout() {
    return this.getNumberAttribute('heartbeat_timeout');
  }
  public set heartbeatTimeout(value: number) {
    this._heartbeatTimeout = value;
  }
  public resetHeartbeatTimeout() {
    this._heartbeatTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heartbeatTimeoutInput() {
    return this._heartbeatTimeout;
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

  // lifecycle_hook_name - computed: true, optional: true, required: false
  private _lifecycleHookName?: string; 
  public get lifecycleHookName() {
    return this.getStringAttribute('lifecycle_hook_name');
  }
  public set lifecycleHookName(value: string) {
    this._lifecycleHookName = value;
  }
  public resetLifecycleHookName() {
    this._lifecycleHookName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleHookNameInput() {
    return this._lifecycleHookName;
  }

  // lifecycle_transition - computed: false, optional: false, required: true
  private _lifecycleTransition?: string; 
  public get lifecycleTransition() {
    return this.getStringAttribute('lifecycle_transition');
  }
  public set lifecycleTransition(value: string) {
    this._lifecycleTransition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleTransitionInput() {
    return this._lifecycleTransition;
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

  // notification_arn - computed: true, optional: true, required: false
  private _notificationArn?: string; 
  public get notificationArn() {
    return this.getStringAttribute('notification_arn');
  }
  public set notificationArn(value: string) {
    this._notificationArn = value;
  }
  public resetNotificationArn() {
    this._notificationArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationArnInput() {
    return this._notificationArn;
  }

  // notification_metadata - computed: true, optional: true, required: false
  private _notificationMetadata?: string; 
  public get notificationMetadata() {
    return this.getStringAttribute('notification_metadata');
  }
  public set notificationMetadata(value: string) {
    this._notificationMetadata = value;
  }
  public resetNotificationMetadata() {
    this._notificationMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationMetadataInput() {
    return this._notificationMetadata;
  }

  // scaling_group_id - computed: false, optional: false, required: true
  private _scalingGroupId?: string; 
  public get scalingGroupId() {
    return this.getStringAttribute('scaling_group_id');
  }
  public set scalingGroupId(value: string) {
    this._scalingGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingGroupIdInput() {
    return this._scalingGroupId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_result: cdktf.stringToTerraform(this._defaultResult),
      heartbeat_timeout: cdktf.numberToTerraform(this._heartbeatTimeout),
      id: cdktf.stringToTerraform(this._id),
      lifecycle_hook_name: cdktf.stringToTerraform(this._lifecycleHookName),
      lifecycle_transition: cdktf.stringToTerraform(this._lifecycleTransition),
      name: cdktf.stringToTerraform(this._name),
      notification_arn: cdktf.stringToTerraform(this._notificationArn),
      notification_metadata: cdktf.stringToTerraform(this._notificationMetadata),
      scaling_group_id: cdktf.stringToTerraform(this._scalingGroupId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_result: {
        value: cdktf.stringToHclTerraform(this._defaultResult),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      heartbeat_timeout: {
        value: cdktf.numberToHclTerraform(this._heartbeatTimeout),
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
      lifecycle_hook_name: {
        value: cdktf.stringToHclTerraform(this._lifecycleHookName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lifecycle_transition: {
        value: cdktf.stringToHclTerraform(this._lifecycleTransition),
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
      notification_arn: {
        value: cdktf.stringToHclTerraform(this._notificationArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notification_metadata: {
        value: cdktf.stringToHclTerraform(this._notificationMetadata),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scaling_group_id: {
        value: cdktf.stringToHclTerraform(this._scalingGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
