// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/clb_target_group_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClbTargetGroupAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the CLB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/clb_target_group_attachment#clb_id ClbTargetGroupAttachment#clb_id}
  */
  readonly clbId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/clb_target_group_attachment#id ClbTargetGroupAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of the CLB listener.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/clb_target_group_attachment#listener_id ClbTargetGroupAttachment#listener_id}
  */
  readonly listenerId?: string;
  /**
  * ID of the CLB listener rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/clb_target_group_attachment#rule_id ClbTargetGroupAttachment#rule_id}
  */
  readonly ruleId?: string;
  /**
  * ID of the CLB target group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/clb_target_group_attachment#target_group_id ClbTargetGroupAttachment#target_group_id}
  */
  readonly targetGroupId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/clb_target_group_attachment tencentcloud_clb_target_group_attachment}
*/
export class ClbTargetGroupAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_clb_target_group_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClbTargetGroupAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClbTargetGroupAttachment to import
  * @param importFromId The id of the existing ClbTargetGroupAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/clb_target_group_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClbTargetGroupAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_clb_target_group_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/clb_target_group_attachment tencentcloud_clb_target_group_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClbTargetGroupAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: ClbTargetGroupAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_clb_target_group_attachment',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.49',
        providerVersionConstraint: '1.82.49'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clbId = config.clbId;
    this._id = config.id;
    this._listenerId = config.listenerId;
    this._ruleId = config.ruleId;
    this._targetGroupId = config.targetGroupId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // clb_id - computed: false, optional: false, required: true
  private _clbId?: string; 
  public get clbId() {
    return this.getStringAttribute('clb_id');
  }
  public set clbId(value: string) {
    this._clbId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clbIdInput() {
    return this._clbId;
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

  // listener_id - computed: false, optional: true, required: false
  private _listenerId?: string; 
  public get listenerId() {
    return this.getStringAttribute('listener_id');
  }
  public set listenerId(value: string) {
    this._listenerId = value;
  }
  public resetListenerId() {
    this._listenerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerIdInput() {
    return this._listenerId;
  }

  // rule_id - computed: false, optional: true, required: false
  private _ruleId?: string; 
  public get ruleId() {
    return this.getStringAttribute('rule_id');
  }
  public set ruleId(value: string) {
    this._ruleId = value;
  }
  public resetRuleId() {
    this._ruleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleIdInput() {
    return this._ruleId;
  }

  // target_group_id - computed: false, optional: false, required: true
  private _targetGroupId?: string; 
  public get targetGroupId() {
    return this.getStringAttribute('target_group_id');
  }
  public set targetGroupId(value: string) {
    this._targetGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetGroupIdInput() {
    return this._targetGroupId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      clb_id: cdktf.stringToTerraform(this._clbId),
      id: cdktf.stringToTerraform(this._id),
      listener_id: cdktf.stringToTerraform(this._listenerId),
      rule_id: cdktf.stringToTerraform(this._ruleId),
      target_group_id: cdktf.stringToTerraform(this._targetGroupId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      clb_id: {
        value: cdktf.stringToHclTerraform(this._clbId),
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
      listener_id: {
        value: cdktf.stringToHclTerraform(this._listenerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_id: {
        value: cdktf.stringToHclTerraform(this._ruleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_group_id: {
        value: cdktf.stringToHclTerraform(this._targetGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
