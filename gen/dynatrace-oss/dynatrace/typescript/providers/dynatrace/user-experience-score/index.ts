// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/user_experience_score
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserExperienceScoreConfig extends cdktf.TerraformMetaArguments {
  /**
  * If last user action in a session is classified as Frustrating, classify the entire session as Frustrating
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/user_experience_score#consider_last_action UserExperienceScore#consider_last_action}
  */
  readonly considerLastAction: boolean | cdktf.IResolvable;
  /**
  * Consider rage clicks / rage taps in score calculation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/user_experience_score#consider_rage_click UserExperienceScore#consider_rage_click}
  */
  readonly considerRageClick: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/user_experience_score#id UserExperienceScore#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * User experience is considered Frustrating when the selected percentage or more of the user actions in a session are rated as Frustrating.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/user_experience_score#max_frustrated_user_actions_threshold UserExperienceScore#max_frustrated_user_actions_threshold}
  */
  readonly maxFrustratedUserActionsThreshold: number;
  /**
  * User experience is considered Satisfying when at least the selected percentage of the user actions in a session are rated as Satisfying.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/user_experience_score#min_satisfied_user_actions_threshold UserExperienceScore#min_satisfied_user_actions_threshold}
  */
  readonly minSatisfiedUserActionsThreshold: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/user_experience_score dynatrace_user_experience_score}
*/
export class UserExperienceScore extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_user_experience_score";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UserExperienceScore resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UserExperienceScore to import
  * @param importFromId The id of the existing UserExperienceScore that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/user_experience_score#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UserExperienceScore to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_user_experience_score", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/user_experience_score dynatrace_user_experience_score} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserExperienceScoreConfig
  */
  public constructor(scope: Construct, id: string, config: UserExperienceScoreConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_user_experience_score',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.87.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._considerLastAction = config.considerLastAction;
    this._considerRageClick = config.considerRageClick;
    this._id = config.id;
    this._maxFrustratedUserActionsThreshold = config.maxFrustratedUserActionsThreshold;
    this._minSatisfiedUserActionsThreshold = config.minSatisfiedUserActionsThreshold;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // consider_last_action - computed: false, optional: false, required: true
  private _considerLastAction?: boolean | cdktf.IResolvable; 
  public get considerLastAction() {
    return this.getBooleanAttribute('consider_last_action');
  }
  public set considerLastAction(value: boolean | cdktf.IResolvable) {
    this._considerLastAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get considerLastActionInput() {
    return this._considerLastAction;
  }

  // consider_rage_click - computed: false, optional: false, required: true
  private _considerRageClick?: boolean | cdktf.IResolvable; 
  public get considerRageClick() {
    return this.getBooleanAttribute('consider_rage_click');
  }
  public set considerRageClick(value: boolean | cdktf.IResolvable) {
    this._considerRageClick = value;
  }
  // Temporarily expose input value. Use with caution.
  public get considerRageClickInput() {
    return this._considerRageClick;
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

  // max_frustrated_user_actions_threshold - computed: false, optional: false, required: true
  private _maxFrustratedUserActionsThreshold?: number; 
  public get maxFrustratedUserActionsThreshold() {
    return this.getNumberAttribute('max_frustrated_user_actions_threshold');
  }
  public set maxFrustratedUserActionsThreshold(value: number) {
    this._maxFrustratedUserActionsThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxFrustratedUserActionsThresholdInput() {
    return this._maxFrustratedUserActionsThreshold;
  }

  // min_satisfied_user_actions_threshold - computed: false, optional: false, required: true
  private _minSatisfiedUserActionsThreshold?: number; 
  public get minSatisfiedUserActionsThreshold() {
    return this.getNumberAttribute('min_satisfied_user_actions_threshold');
  }
  public set minSatisfiedUserActionsThreshold(value: number) {
    this._minSatisfiedUserActionsThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minSatisfiedUserActionsThresholdInput() {
    return this._minSatisfiedUserActionsThreshold;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      consider_last_action: cdktf.booleanToTerraform(this._considerLastAction),
      consider_rage_click: cdktf.booleanToTerraform(this._considerRageClick),
      id: cdktf.stringToTerraform(this._id),
      max_frustrated_user_actions_threshold: cdktf.numberToTerraform(this._maxFrustratedUserActionsThreshold),
      min_satisfied_user_actions_threshold: cdktf.numberToTerraform(this._minSatisfiedUserActionsThreshold),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      consider_last_action: {
        value: cdktf.booleanToHclTerraform(this._considerLastAction),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      consider_rage_click: {
        value: cdktf.booleanToHclTerraform(this._considerRageClick),
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
      max_frustrated_user_actions_threshold: {
        value: cdktf.numberToHclTerraform(this._maxFrustratedUserActionsThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_satisfied_user_actions_threshold: {
        value: cdktf.numberToHclTerraform(this._minSatisfiedUserActionsThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
