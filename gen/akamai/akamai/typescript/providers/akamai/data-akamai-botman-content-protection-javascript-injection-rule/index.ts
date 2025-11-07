// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/botman_content_protection_javascript_injection_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAkamaiBotmanContentProtectionJavascriptInjectionRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Unique identifier of the security configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/botman_content_protection_javascript_injection_rule#config_id DataAkamaiBotmanContentProtectionJavascriptInjectionRule#config_id}
  */
  readonly configId: number;
  /**
  * Unique identifier of a content protection JavaScript injection rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/botman_content_protection_javascript_injection_rule#content_protection_javascript_injection_rule_id DataAkamaiBotmanContentProtectionJavascriptInjectionRule#content_protection_javascript_injection_rule_id}
  */
  readonly contentProtectionJavascriptInjectionRuleId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/botman_content_protection_javascript_injection_rule#id DataAkamaiBotmanContentProtectionJavascriptInjectionRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Unique identifier of the security policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/botman_content_protection_javascript_injection_rule#security_policy_id DataAkamaiBotmanContentProtectionJavascriptInjectionRule#security_policy_id}
  */
  readonly securityPolicyId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/botman_content_protection_javascript_injection_rule akamai_botman_content_protection_javascript_injection_rule}
*/
export class DataAkamaiBotmanContentProtectionJavascriptInjectionRule extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_botman_content_protection_javascript_injection_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAkamaiBotmanContentProtectionJavascriptInjectionRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAkamaiBotmanContentProtectionJavascriptInjectionRule to import
  * @param importFromId The id of the existing DataAkamaiBotmanContentProtectionJavascriptInjectionRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/botman_content_protection_javascript_injection_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAkamaiBotmanContentProtectionJavascriptInjectionRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_botman_content_protection_javascript_injection_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/botman_content_protection_javascript_injection_rule akamai_botman_content_protection_javascript_injection_rule} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAkamaiBotmanContentProtectionJavascriptInjectionRuleConfig
  */
  public constructor(scope: Construct, id: string, config: DataAkamaiBotmanContentProtectionJavascriptInjectionRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'akamai_botman_content_protection_javascript_injection_rule',
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
    this._contentProtectionJavascriptInjectionRuleId = config.contentProtectionJavascriptInjectionRuleId;
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

  // content_protection_javascript_injection_rule_id - computed: false, optional: true, required: false
  private _contentProtectionJavascriptInjectionRuleId?: string; 
  public get contentProtectionJavascriptInjectionRuleId() {
    return this.getStringAttribute('content_protection_javascript_injection_rule_id');
  }
  public set contentProtectionJavascriptInjectionRuleId(value: string) {
    this._contentProtectionJavascriptInjectionRuleId = value;
  }
  public resetContentProtectionJavascriptInjectionRuleId() {
    this._contentProtectionJavascriptInjectionRuleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentProtectionJavascriptInjectionRuleIdInput() {
    return this._contentProtectionJavascriptInjectionRuleId;
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

  // json - computed: true, optional: false, required: false
  public get json() {
    return this.getStringAttribute('json');
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
      content_protection_javascript_injection_rule_id: cdktf.stringToTerraform(this._contentProtectionJavascriptInjectionRuleId),
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
      content_protection_javascript_injection_rule_id: {
        value: cdktf.stringToHclTerraform(this._contentProtectionJavascriptInjectionRuleId),
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
