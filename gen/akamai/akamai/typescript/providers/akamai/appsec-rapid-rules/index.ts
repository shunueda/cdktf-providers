// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_rapid_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppsecRapidRulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Unique identifier of the security configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_rapid_rules#config_id AppsecRapidRules#config_id}
  */
  readonly configId: number;
  /**
  * Default action that applies to violations of all rapid rules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_rapid_rules#default_action AppsecRapidRules#default_action}
  */
  readonly defaultAction?: string;
  /**
  * JSON-formatted list of rule definition (ID, action, action lock and exception)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_rapid_rules#rule_definitions AppsecRapidRules#rule_definitions}
  */
  readonly ruleDefinitions?: string;
  /**
  * Unique identifier of the security policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_rapid_rules#security_policy_id AppsecRapidRules#security_policy_id}
  */
  readonly securityPolicyId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_rapid_rules akamai_appsec_rapid_rules}
*/
export class AppsecRapidRules extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_appsec_rapid_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppsecRapidRules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppsecRapidRules to import
  * @param importFromId The id of the existing AppsecRapidRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_rapid_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppsecRapidRules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_appsec_rapid_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_rapid_rules akamai_appsec_rapid_rules} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppsecRapidRulesConfig
  */
  public constructor(scope: Construct, id: string, config: AppsecRapidRulesConfig) {
    super(scope, id, {
      terraformResourceType: 'akamai_appsec_rapid_rules',
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
    this._defaultAction = config.defaultAction;
    this._ruleDefinitions = config.ruleDefinitions;
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

  // default_action - computed: true, optional: true, required: false
  private _defaultAction?: string; 
  public get defaultAction() {
    return this.getStringAttribute('default_action');
  }
  public set defaultAction(value: string) {
    this._defaultAction = value;
  }
  public resetDefaultAction() {
    this._defaultAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionInput() {
    return this._defaultAction;
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // rule_definitions - computed: true, optional: true, required: false
  private _ruleDefinitions?: string; 
  public get ruleDefinitions() {
    return this.getStringAttribute('rule_definitions');
  }
  public set ruleDefinitions(value: string) {
    this._ruleDefinitions = value;
  }
  public resetRuleDefinitions() {
    this._ruleDefinitions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleDefinitionsInput() {
    return this._ruleDefinitions;
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
      default_action: cdktf.stringToTerraform(this._defaultAction),
      rule_definitions: cdktf.stringToTerraform(this._ruleDefinitions),
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
      default_action: {
        value: cdktf.stringToHclTerraform(this._defaultAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_definitions: {
        value: cdktf.stringToHclTerraform(this._ruleDefinitions),
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
