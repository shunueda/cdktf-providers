// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/autoscaling_scalingrule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AutoscalingScalingruleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/autoscaling_scalingrule#adjustment_type AutoscalingScalingrule#adjustment_type}
  */
  readonly adjustmentType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/autoscaling_scalingrule#adjustment_value AutoscalingScalingrule#adjustment_value}
  */
  readonly adjustmentValue: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/autoscaling_scalingrule#cooldown AutoscalingScalingrule#cooldown}
  */
  readonly cooldown?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/autoscaling_scalingrule#id AutoscalingScalingrule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/autoscaling_scalingrule#scaling_group_id AutoscalingScalingrule#scaling_group_id}
  */
  readonly scalingGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/autoscaling_scalingrule#scaling_rule_name AutoscalingScalingrule#scaling_rule_name}
  */
  readonly scalingRuleName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/autoscaling_scalingrule alibabacloudstack_autoscaling_scalingrule}
*/
export class AutoscalingScalingrule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_autoscaling_scalingrule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AutoscalingScalingrule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AutoscalingScalingrule to import
  * @param importFromId The id of the existing AutoscalingScalingrule that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/autoscaling_scalingrule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AutoscalingScalingrule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_autoscaling_scalingrule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/autoscaling_scalingrule alibabacloudstack_autoscaling_scalingrule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AutoscalingScalingruleConfig
  */
  public constructor(scope: Construct, id: string, config: AutoscalingScalingruleConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_autoscaling_scalingrule',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.19'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adjustmentType = config.adjustmentType;
    this._adjustmentValue = config.adjustmentValue;
    this._cooldown = config.cooldown;
    this._id = config.id;
    this._scalingGroupId = config.scalingGroupId;
    this._scalingRuleName = config.scalingRuleName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adjustment_type - computed: false, optional: false, required: true
  private _adjustmentType?: string; 
  public get adjustmentType() {
    return this.getStringAttribute('adjustment_type');
  }
  public set adjustmentType(value: string) {
    this._adjustmentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adjustmentTypeInput() {
    return this._adjustmentType;
  }

  // adjustment_value - computed: false, optional: false, required: true
  private _adjustmentValue?: number; 
  public get adjustmentValue() {
    return this.getNumberAttribute('adjustment_value');
  }
  public set adjustmentValue(value: number) {
    this._adjustmentValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adjustmentValueInput() {
    return this._adjustmentValue;
  }

  // ari - computed: true, optional: false, required: false
  public get ari() {
    return this.getStringAttribute('ari');
  }

  // cooldown - computed: false, optional: true, required: false
  private _cooldown?: number; 
  public get cooldown() {
    return this.getNumberAttribute('cooldown');
  }
  public set cooldown(value: number) {
    this._cooldown = value;
  }
  public resetCooldown() {
    this._cooldown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cooldownInput() {
    return this._cooldown;
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

  // scaling_rule_aris - computed: true, optional: false, required: false
  public get scalingRuleAris() {
    return this.getStringAttribute('scaling_rule_aris');
  }

  // scaling_rule_name - computed: true, optional: true, required: false
  private _scalingRuleName?: string; 
  public get scalingRuleName() {
    return this.getStringAttribute('scaling_rule_name');
  }
  public set scalingRuleName(value: string) {
    this._scalingRuleName = value;
  }
  public resetScalingRuleName() {
    this._scalingRuleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingRuleNameInput() {
    return this._scalingRuleName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adjustment_type: cdktf.stringToTerraform(this._adjustmentType),
      adjustment_value: cdktf.numberToTerraform(this._adjustmentValue),
      cooldown: cdktf.numberToTerraform(this._cooldown),
      id: cdktf.stringToTerraform(this._id),
      scaling_group_id: cdktf.stringToTerraform(this._scalingGroupId),
      scaling_rule_name: cdktf.stringToTerraform(this._scalingRuleName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adjustment_type: {
        value: cdktf.stringToHclTerraform(this._adjustmentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      adjustment_value: {
        value: cdktf.numberToHclTerraform(this._adjustmentValue),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cooldown: {
        value: cdktf.numberToHclTerraform(this._cooldown),
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
      scaling_group_id: {
        value: cdktf.stringToHclTerraform(this._scalingGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scaling_rule_name: {
        value: cdktf.stringToHclTerraform(this._scalingRuleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
