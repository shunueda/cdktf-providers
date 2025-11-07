// https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/auto_scaling_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AutoScalingPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/auto_scaling_policy#adjustment_type_code AutoScalingPolicy#adjustment_type_code}
  */
  readonly adjustmentTypeCode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/auto_scaling_policy#auto_scaling_group_no AutoScalingPolicy#auto_scaling_group_no}
  */
  readonly autoScalingGroupNo: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/auto_scaling_policy#cooldown AutoScalingPolicy#cooldown}
  */
  readonly cooldown?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/auto_scaling_policy#id AutoScalingPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/auto_scaling_policy#min_adjustment_step AutoScalingPolicy#min_adjustment_step}
  */
  readonly minAdjustmentStep?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/auto_scaling_policy#name AutoScalingPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/auto_scaling_policy#scaling_adjustment AutoScalingPolicy#scaling_adjustment}
  */
  readonly scalingAdjustment: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/auto_scaling_policy ncloud_auto_scaling_policy}
*/
export class AutoScalingPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ncloud_auto_scaling_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AutoScalingPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AutoScalingPolicy to import
  * @param importFromId The id of the existing AutoScalingPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/auto_scaling_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AutoScalingPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ncloud_auto_scaling_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/auto_scaling_policy ncloud_auto_scaling_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AutoScalingPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: AutoScalingPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'ncloud_auto_scaling_policy',
      terraformGeneratorMetadata: {
        providerName: 'ncloud',
        providerVersion: '4.0.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adjustmentTypeCode = config.adjustmentTypeCode;
    this._autoScalingGroupNo = config.autoScalingGroupNo;
    this._cooldown = config.cooldown;
    this._id = config.id;
    this._minAdjustmentStep = config.minAdjustmentStep;
    this._name = config.name;
    this._scalingAdjustment = config.scalingAdjustment;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adjustment_type_code - computed: false, optional: false, required: true
  private _adjustmentTypeCode?: string; 
  public get adjustmentTypeCode() {
    return this.getStringAttribute('adjustment_type_code');
  }
  public set adjustmentTypeCode(value: string) {
    this._adjustmentTypeCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adjustmentTypeCodeInput() {
    return this._adjustmentTypeCode;
  }

  // auto_scaling_group_no - computed: false, optional: false, required: true
  private _autoScalingGroupNo?: string; 
  public get autoScalingGroupNo() {
    return this.getStringAttribute('auto_scaling_group_no');
  }
  public set autoScalingGroupNo(value: string) {
    this._autoScalingGroupNo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScalingGroupNoInput() {
    return this._autoScalingGroupNo;
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

  // min_adjustment_step - computed: false, optional: true, required: false
  private _minAdjustmentStep?: number; 
  public get minAdjustmentStep() {
    return this.getNumberAttribute('min_adjustment_step');
  }
  public set minAdjustmentStep(value: number) {
    this._minAdjustmentStep = value;
  }
  public resetMinAdjustmentStep() {
    this._minAdjustmentStep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minAdjustmentStepInput() {
    return this._minAdjustmentStep;
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

  // scaling_adjustment - computed: false, optional: false, required: true
  private _scalingAdjustment?: number; 
  public get scalingAdjustment() {
    return this.getNumberAttribute('scaling_adjustment');
  }
  public set scalingAdjustment(value: number) {
    this._scalingAdjustment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingAdjustmentInput() {
    return this._scalingAdjustment;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adjustment_type_code: cdktf.stringToTerraform(this._adjustmentTypeCode),
      auto_scaling_group_no: cdktf.stringToTerraform(this._autoScalingGroupNo),
      cooldown: cdktf.numberToTerraform(this._cooldown),
      id: cdktf.stringToTerraform(this._id),
      min_adjustment_step: cdktf.numberToTerraform(this._minAdjustmentStep),
      name: cdktf.stringToTerraform(this._name),
      scaling_adjustment: cdktf.numberToTerraform(this._scalingAdjustment),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adjustment_type_code: {
        value: cdktf.stringToHclTerraform(this._adjustmentTypeCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_scaling_group_no: {
        value: cdktf.stringToHclTerraform(this._autoScalingGroupNo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      min_adjustment_step: {
        value: cdktf.numberToHclTerraform(this._minAdjustmentStep),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scaling_adjustment: {
        value: cdktf.numberToHclTerraform(this._scalingAdjustment),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
