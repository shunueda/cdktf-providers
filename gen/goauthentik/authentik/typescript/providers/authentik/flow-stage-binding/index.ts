// https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/flow_stage_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FlowStageBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Evaluate policies during the Flow planning process. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/flow_stage_binding#evaluate_on_plan FlowStageBinding#evaluate_on_plan}
  */
  readonly evaluateOnPlan?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/flow_stage_binding#id FlowStageBinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Allowed values:
  *   - `retry`
  *   - `restart`
  *   - `restart_with_context`
  *  Defaults to `retry`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/flow_stage_binding#invalid_response_action FlowStageBinding#invalid_response_action}
  */
  readonly invalidResponseAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/flow_stage_binding#order FlowStageBinding#order}
  */
  readonly order: number;
  /**
  * Allowed values:
  *   - `all`
  *   - `any`
  *  Defaults to `any`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/flow_stage_binding#policy_engine_mode FlowStageBinding#policy_engine_mode}
  */
  readonly policyEngineMode?: string;
  /**
  * Evaluate policies when the Stage is present to the user. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/flow_stage_binding#re_evaluate_policies FlowStageBinding#re_evaluate_policies}
  */
  readonly reEvaluatePolicies?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/flow_stage_binding#stage FlowStageBinding#stage}
  */
  readonly stage: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/flow_stage_binding#target FlowStageBinding#target}
  */
  readonly target: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/flow_stage_binding authentik_flow_stage_binding}
*/
export class FlowStageBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "authentik_flow_stage_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FlowStageBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FlowStageBinding to import
  * @param importFromId The id of the existing FlowStageBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/flow_stage_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FlowStageBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "authentik_flow_stage_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/flow_stage_binding authentik_flow_stage_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FlowStageBindingConfig
  */
  public constructor(scope: Construct, id: string, config: FlowStageBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'authentik_flow_stage_binding',
      terraformGeneratorMetadata: {
        providerName: 'authentik',
        providerVersion: '2025.10.1',
        providerVersionConstraint: '2025.10.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._evaluateOnPlan = config.evaluateOnPlan;
    this._id = config.id;
    this._invalidResponseAction = config.invalidResponseAction;
    this._order = config.order;
    this._policyEngineMode = config.policyEngineMode;
    this._reEvaluatePolicies = config.reEvaluatePolicies;
    this._stage = config.stage;
    this._target = config.target;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // evaluate_on_plan - computed: false, optional: true, required: false
  private _evaluateOnPlan?: boolean | cdktf.IResolvable; 
  public get evaluateOnPlan() {
    return this.getBooleanAttribute('evaluate_on_plan');
  }
  public set evaluateOnPlan(value: boolean | cdktf.IResolvable) {
    this._evaluateOnPlan = value;
  }
  public resetEvaluateOnPlan() {
    this._evaluateOnPlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluateOnPlanInput() {
    return this._evaluateOnPlan;
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

  // invalid_response_action - computed: false, optional: true, required: false
  private _invalidResponseAction?: string; 
  public get invalidResponseAction() {
    return this.getStringAttribute('invalid_response_action');
  }
  public set invalidResponseAction(value: string) {
    this._invalidResponseAction = value;
  }
  public resetInvalidResponseAction() {
    this._invalidResponseAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidResponseActionInput() {
    return this._invalidResponseAction;
  }

  // order - computed: false, optional: false, required: true
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // policy_engine_mode - computed: false, optional: true, required: false
  private _policyEngineMode?: string; 
  public get policyEngineMode() {
    return this.getStringAttribute('policy_engine_mode');
  }
  public set policyEngineMode(value: string) {
    this._policyEngineMode = value;
  }
  public resetPolicyEngineMode() {
    this._policyEngineMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyEngineModeInput() {
    return this._policyEngineMode;
  }

  // re_evaluate_policies - computed: false, optional: true, required: false
  private _reEvaluatePolicies?: boolean | cdktf.IResolvable; 
  public get reEvaluatePolicies() {
    return this.getBooleanAttribute('re_evaluate_policies');
  }
  public set reEvaluatePolicies(value: boolean | cdktf.IResolvable) {
    this._reEvaluatePolicies = value;
  }
  public resetReEvaluatePolicies() {
    this._reEvaluatePolicies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reEvaluatePoliciesInput() {
    return this._reEvaluatePolicies;
  }

  // stage - computed: false, optional: false, required: true
  private _stage?: string; 
  public get stage() {
    return this.getStringAttribute('stage');
  }
  public set stage(value: string) {
    this._stage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stageInput() {
    return this._stage;
  }

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      evaluate_on_plan: cdktf.booleanToTerraform(this._evaluateOnPlan),
      id: cdktf.stringToTerraform(this._id),
      invalid_response_action: cdktf.stringToTerraform(this._invalidResponseAction),
      order: cdktf.numberToTerraform(this._order),
      policy_engine_mode: cdktf.stringToTerraform(this._policyEngineMode),
      re_evaluate_policies: cdktf.booleanToTerraform(this._reEvaluatePolicies),
      stage: cdktf.stringToTerraform(this._stage),
      target: cdktf.stringToTerraform(this._target),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      evaluate_on_plan: {
        value: cdktf.booleanToHclTerraform(this._evaluateOnPlan),
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
      invalid_response_action: {
        value: cdktf.stringToHclTerraform(this._invalidResponseAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      order: {
        value: cdktf.numberToHclTerraform(this._order),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      policy_engine_mode: {
        value: cdktf.stringToHclTerraform(this._policyEngineMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      re_evaluate_policies: {
        value: cdktf.booleanToHclTerraform(this._reEvaluatePolicies),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      stage: {
        value: cdktf.stringToHclTerraform(this._stage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target: {
        value: cdktf.stringToHclTerraform(this._target),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
