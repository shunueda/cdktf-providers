// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/botman_content_protection_javascript_injection_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BotmanContentProtectionJavascriptInjectionRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Unique identifier of the security configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/botman_content_protection_javascript_injection_rule#config_id BotmanContentProtectionJavascriptInjectionRule#config_id}
  */
  readonly configId: number;
  /**
  * The content protection JavaScript injection rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/botman_content_protection_javascript_injection_rule#content_protection_javascript_injection_rule BotmanContentProtectionJavascriptInjectionRule#content_protection_javascript_injection_rule}
  */
  readonly contentProtectionJavascriptInjectionRule: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/botman_content_protection_javascript_injection_rule#id BotmanContentProtectionJavascriptInjectionRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Unique identifier of the security policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/botman_content_protection_javascript_injection_rule#security_policy_id BotmanContentProtectionJavascriptInjectionRule#security_policy_id}
  */
  readonly securityPolicyId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/botman_content_protection_javascript_injection_rule akamai_botman_content_protection_javascript_injection_rule}
*/
export class BotmanContentProtectionJavascriptInjectionRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_botman_content_protection_javascript_injection_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BotmanContentProtectionJavascriptInjectionRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BotmanContentProtectionJavascriptInjectionRule to import
  * @param importFromId The id of the existing BotmanContentProtectionJavascriptInjectionRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/botman_content_protection_javascript_injection_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BotmanContentProtectionJavascriptInjectionRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_botman_content_protection_javascript_injection_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/botman_content_protection_javascript_injection_rule akamai_botman_content_protection_javascript_injection_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BotmanContentProtectionJavascriptInjectionRuleConfig
  */
  public constructor(scope: Construct, id: string, config: BotmanContentProtectionJavascriptInjectionRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'akamai_botman_content_protection_javascript_injection_rule',
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
    this._contentProtectionJavascriptInjectionRule = config.contentProtectionJavascriptInjectionRule;
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

  // content_protection_javascript_injection_rule - computed: false, optional: false, required: true
  private _contentProtectionJavascriptInjectionRule?: string; 
  public get contentProtectionJavascriptInjectionRule() {
    return this.getStringAttribute('content_protection_javascript_injection_rule');
  }
  public set contentProtectionJavascriptInjectionRule(value: string) {
    this._contentProtectionJavascriptInjectionRule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentProtectionJavascriptInjectionRuleInput() {
    return this._contentProtectionJavascriptInjectionRule;
  }

  // content_protection_javascript_injection_rule_id - computed: true, optional: false, required: false
  public get contentProtectionJavascriptInjectionRuleId() {
    return this.getStringAttribute('content_protection_javascript_injection_rule_id');
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
      content_protection_javascript_injection_rule: cdktf.stringToTerraform(this._contentProtectionJavascriptInjectionRule),
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
      content_protection_javascript_injection_rule: {
        value: cdktf.stringToHclTerraform(this._contentProtectionJavascriptInjectionRule),
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
