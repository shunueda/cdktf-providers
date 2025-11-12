// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_eval
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppsecEvalConfig extends cdktf.TerraformMetaArguments {
  /**
  * Unique identifier of the security configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_eval#config_id AppsecEval#config_id}
  */
  readonly configId: number;
  /**
  * Evaluation mode (ASE_AUTO or ASE_MANUAL)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_eval#eval_mode AppsecEval#eval_mode}
  */
  readonly evalMode?: string;
  /**
  * Evaluation mode operation (START, STOP, RESTART, UPDATE or COMPLETE)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_eval#eval_operation AppsecEval#eval_operation}
  */
  readonly evalOperation: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_eval#id AppsecEval#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Unique identifier of the security policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_eval#security_policy_id AppsecEval#security_policy_id}
  */
  readonly securityPolicyId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_eval akamai_appsec_eval}
*/
export class AppsecEval extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_appsec_eval";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppsecEval resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppsecEval to import
  * @param importFromId The id of the existing AppsecEval that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_eval#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppsecEval to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_appsec_eval", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_eval akamai_appsec_eval} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppsecEvalConfig
  */
  public constructor(scope: Construct, id: string, config: AppsecEvalConfig) {
    super(scope, id, {
      terraformResourceType: 'akamai_appsec_eval',
      terraformGeneratorMetadata: {
        providerName: 'akamai',
        providerVersion: '9.1.0',
        providerVersionConstraint: '9.1.0'
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
    this._evalMode = config.evalMode;
    this._evalOperation = config.evalOperation;
    this._id = config.id;
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

  // current_ruleset - computed: true, optional: false, required: false
  public get currentRuleset() {
    return this.getStringAttribute('current_ruleset');
  }

  // eval_mode - computed: false, optional: true, required: false
  private _evalMode?: string; 
  public get evalMode() {
    return this.getStringAttribute('eval_mode');
  }
  public set evalMode(value: string) {
    this._evalMode = value;
  }
  public resetEvalMode() {
    this._evalMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evalModeInput() {
    return this._evalMode;
  }

  // eval_operation - computed: false, optional: false, required: true
  private _evalOperation?: string; 
  public get evalOperation() {
    return this.getStringAttribute('eval_operation');
  }
  public set evalOperation(value: string) {
    this._evalOperation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get evalOperationInput() {
    return this._evalOperation;
  }

  // eval_status - computed: true, optional: false, required: false
  public get evalStatus() {
    return this.getStringAttribute('eval_status');
  }

  // evaluating_ruleset - computed: true, optional: false, required: false
  public get evaluatingRuleset() {
    return this.getStringAttribute('evaluating_ruleset');
  }

  // expiration_date - computed: true, optional: false, required: false
  public get expirationDate() {
    return this.getStringAttribute('expiration_date');
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
      eval_mode: cdktf.stringToTerraform(this._evalMode),
      eval_operation: cdktf.stringToTerraform(this._evalOperation),
      id: cdktf.stringToTerraform(this._id),
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
      eval_mode: {
        value: cdktf.stringToHclTerraform(this._evalMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eval_operation: {
        value: cdktf.stringToHclTerraform(this._evalOperation),
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
