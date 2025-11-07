// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_eval_penalty_box
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppsecEvalPenaltyBoxConfig extends cdktf.TerraformMetaArguments {
  /**
  * Unique identifier of the security configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_eval_penalty_box#config_id AppsecEvalPenaltyBox#config_id}
  */
  readonly configId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_eval_penalty_box#id AppsecEvalPenaltyBox#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Action applied to requests from clients in the penalty box
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_eval_penalty_box#penalty_box_action AppsecEvalPenaltyBox#penalty_box_action}
  */
  readonly penaltyBoxAction: string;
  /**
  * Whether to enable the penalty box for the specified security policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_eval_penalty_box#penalty_box_protection AppsecEvalPenaltyBox#penalty_box_protection}
  */
  readonly penaltyBoxProtection: boolean | cdktf.IResolvable;
  /**
  * Unique identifier of the security policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_eval_penalty_box#security_policy_id AppsecEvalPenaltyBox#security_policy_id}
  */
  readonly securityPolicyId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_eval_penalty_box akamai_appsec_eval_penalty_box}
*/
export class AppsecEvalPenaltyBox extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_appsec_eval_penalty_box";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppsecEvalPenaltyBox resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppsecEvalPenaltyBox to import
  * @param importFromId The id of the existing AppsecEvalPenaltyBox that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_eval_penalty_box#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppsecEvalPenaltyBox to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_appsec_eval_penalty_box", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_eval_penalty_box akamai_appsec_eval_penalty_box} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppsecEvalPenaltyBoxConfig
  */
  public constructor(scope: Construct, id: string, config: AppsecEvalPenaltyBoxConfig) {
    super(scope, id, {
      terraformResourceType: 'akamai_appsec_eval_penalty_box',
      terraformGeneratorMetadata: {
        providerName: 'akamai',
        providerVersion: '9.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._configId = config.configId;
    this._id = config.id;
    this._penaltyBoxAction = config.penaltyBoxAction;
    this._penaltyBoxProtection = config.penaltyBoxProtection;
    this._securityPolicyId = config.securityPolicyId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config_id - computed: false, optional: false, required: true
  private _configId?: number; 
  public get configId() {
    return this.getNumberAttribute('config_id');
  }
  public set configId(value: number) {
    this._configId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configIdInput() {
    return this._configId;
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

  // penalty_box_action - computed: false, optional: false, required: true
  private _penaltyBoxAction?: string; 
  public get penaltyBoxAction() {
    return this.getStringAttribute('penalty_box_action');
  }
  public set penaltyBoxAction(value: string) {
    this._penaltyBoxAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get penaltyBoxActionInput() {
    return this._penaltyBoxAction;
  }

  // penalty_box_protection - computed: false, optional: false, required: true
  private _penaltyBoxProtection?: boolean | cdktf.IResolvable; 
  public get penaltyBoxProtection() {
    return this.getBooleanAttribute('penalty_box_protection');
  }
  public set penaltyBoxProtection(value: boolean | cdktf.IResolvable) {
    this._penaltyBoxProtection = value;
  }
  // Temporarily expose input value. Use with caution.
  public get penaltyBoxProtectionInput() {
    return this._penaltyBoxProtection;
  }

  // security_policy_id - computed: false, optional: false, required: true
  private _securityPolicyId?: string; 
  public get securityPolicyId() {
    return this.getStringAttribute('security_policy_id');
  }
  public set securityPolicyId(value: string) {
    this._securityPolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityPolicyIdInput() {
    return this._securityPolicyId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config_id: cdktf.numberToTerraform(this._configId),
      id: cdktf.stringToTerraform(this._id),
      penalty_box_action: cdktf.stringToTerraform(this._penaltyBoxAction),
      penalty_box_protection: cdktf.booleanToTerraform(this._penaltyBoxProtection),
      security_policy_id: cdktf.stringToTerraform(this._securityPolicyId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config_id: {
        value: cdktf.numberToHclTerraform(this._configId),
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
      penalty_box_action: {
        value: cdktf.stringToHclTerraform(this._penaltyBoxAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      penalty_box_protection: {
        value: cdktf.booleanToHclTerraform(this._penaltyBoxProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      security_policy_id: {
        value: cdktf.stringToHclTerraform(this._securityPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
