// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/clb_redirection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClbRedirectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of CLB instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/clb_redirection#clb_id ClbRedirection#clb_id}
  */
  readonly clbId: string;
  /**
  * Indicates whether delete all auto redirection. Default is `false`. It will take effect only when this redirection is auto-rewrite and this auto-rewrite auto redirected more than one rules. All the auto-rewrite relations will be deleted when this parameter set true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/clb_redirection#delete_all_auto_rewrite ClbRedirection#delete_all_auto_rewrite}
  */
  readonly deleteAllAutoRewrite?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/clb_redirection#id ClbRedirection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Indicates whether automatic forwarding is enable, default is `false`. If enabled, the source listener and location should be empty, the target listener must be https protocol and port is 443.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/clb_redirection#is_auto_rewrite ClbRedirection#is_auto_rewrite}
  */
  readonly isAutoRewrite?: boolean | cdktf.IResolvable;
  /**
  * ID of source listener.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/clb_redirection#source_listener_id ClbRedirection#source_listener_id}
  */
  readonly sourceListenerId?: string;
  /**
  * Rule ID of source listener.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/clb_redirection#source_rule_id ClbRedirection#source_rule_id}
  */
  readonly sourceRuleId?: string;
  /**
  * ID of source listener.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/clb_redirection#target_listener_id ClbRedirection#target_listener_id}
  */
  readonly targetListenerId: string;
  /**
  * Rule ID of target listener.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/clb_redirection#target_rule_id ClbRedirection#target_rule_id}
  */
  readonly targetRuleId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/clb_redirection tencentcloud_clb_redirection}
*/
export class ClbRedirection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_clb_redirection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClbRedirection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClbRedirection to import
  * @param importFromId The id of the existing ClbRedirection that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/clb_redirection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClbRedirection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_clb_redirection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/clb_redirection tencentcloud_clb_redirection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClbRedirectionConfig
  */
  public constructor(scope: Construct, id: string, config: ClbRedirectionConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_clb_redirection',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.46',
        providerVersionConstraint: '1.82.46'
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
    this._deleteAllAutoRewrite = config.deleteAllAutoRewrite;
    this._id = config.id;
    this._isAutoRewrite = config.isAutoRewrite;
    this._sourceListenerId = config.sourceListenerId;
    this._sourceRuleId = config.sourceRuleId;
    this._targetListenerId = config.targetListenerId;
    this._targetRuleId = config.targetRuleId;
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

  // delete_all_auto_rewrite - computed: false, optional: true, required: false
  private _deleteAllAutoRewrite?: boolean | cdktf.IResolvable; 
  public get deleteAllAutoRewrite() {
    return this.getBooleanAttribute('delete_all_auto_rewrite');
  }
  public set deleteAllAutoRewrite(value: boolean | cdktf.IResolvable) {
    this._deleteAllAutoRewrite = value;
  }
  public resetDeleteAllAutoRewrite() {
    this._deleteAllAutoRewrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteAllAutoRewriteInput() {
    return this._deleteAllAutoRewrite;
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

  // is_auto_rewrite - computed: false, optional: true, required: false
  private _isAutoRewrite?: boolean | cdktf.IResolvable; 
  public get isAutoRewrite() {
    return this.getBooleanAttribute('is_auto_rewrite');
  }
  public set isAutoRewrite(value: boolean | cdktf.IResolvable) {
    this._isAutoRewrite = value;
  }
  public resetIsAutoRewrite() {
    this._isAutoRewrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAutoRewriteInput() {
    return this._isAutoRewrite;
  }

  // source_listener_id - computed: true, optional: true, required: false
  private _sourceListenerId?: string; 
  public get sourceListenerId() {
    return this.getStringAttribute('source_listener_id');
  }
  public set sourceListenerId(value: string) {
    this._sourceListenerId = value;
  }
  public resetSourceListenerId() {
    this._sourceListenerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceListenerIdInput() {
    return this._sourceListenerId;
  }

  // source_rule_id - computed: true, optional: true, required: false
  private _sourceRuleId?: string; 
  public get sourceRuleId() {
    return this.getStringAttribute('source_rule_id');
  }
  public set sourceRuleId(value: string) {
    this._sourceRuleId = value;
  }
  public resetSourceRuleId() {
    this._sourceRuleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceRuleIdInput() {
    return this._sourceRuleId;
  }

  // target_listener_id - computed: false, optional: false, required: true
  private _targetListenerId?: string; 
  public get targetListenerId() {
    return this.getStringAttribute('target_listener_id');
  }
  public set targetListenerId(value: string) {
    this._targetListenerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetListenerIdInput() {
    return this._targetListenerId;
  }

  // target_rule_id - computed: false, optional: false, required: true
  private _targetRuleId?: string; 
  public get targetRuleId() {
    return this.getStringAttribute('target_rule_id');
  }
  public set targetRuleId(value: string) {
    this._targetRuleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRuleIdInput() {
    return this._targetRuleId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      clb_id: cdktf.stringToTerraform(this._clbId),
      delete_all_auto_rewrite: cdktf.booleanToTerraform(this._deleteAllAutoRewrite),
      id: cdktf.stringToTerraform(this._id),
      is_auto_rewrite: cdktf.booleanToTerraform(this._isAutoRewrite),
      source_listener_id: cdktf.stringToTerraform(this._sourceListenerId),
      source_rule_id: cdktf.stringToTerraform(this._sourceRuleId),
      target_listener_id: cdktf.stringToTerraform(this._targetListenerId),
      target_rule_id: cdktf.stringToTerraform(this._targetRuleId),
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
      delete_all_auto_rewrite: {
        value: cdktf.booleanToHclTerraform(this._deleteAllAutoRewrite),
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
      is_auto_rewrite: {
        value: cdktf.booleanToHclTerraform(this._isAutoRewrite),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      source_listener_id: {
        value: cdktf.stringToHclTerraform(this._sourceListenerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_rule_id: {
        value: cdktf.stringToHclTerraform(this._sourceRuleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_listener_id: {
        value: cdktf.stringToHclTerraform(this._targetListenerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_rule_id: {
        value: cdktf.stringToHclTerraform(this._targetRuleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
