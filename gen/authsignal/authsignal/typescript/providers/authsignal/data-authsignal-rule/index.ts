// https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/data-sources/rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAuthsignalRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the action that users perform which you will track. (e.g 'login')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/data-sources/rule#action_code DataAuthsignalRule#action_code}
  */
  readonly actionCode: string;
  /**
  * The ID of the rule. This can be obtained from the Authsignal portal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/data-sources/rule#rule_id DataAuthsignalRule#rule_id}
  */
  readonly ruleId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/data-sources/rule authsignal_rule}
*/
export class DataAuthsignalRule extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "authsignal_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAuthsignalRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAuthsignalRule to import
  * @param importFromId The id of the existing DataAuthsignalRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/data-sources/rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAuthsignalRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "authsignal_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/data-sources/rule authsignal_rule} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAuthsignalRuleConfig
  */
  public constructor(scope: Construct, id: string, config: DataAuthsignalRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'authsignal_rule',
      terraformGeneratorMetadata: {
        providerName: 'authsignal',
        providerVersion: '1.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._actionCode = config.actionCode;
    this._ruleId = config.ruleId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action_code - computed: false, optional: false, required: true
  private _actionCode?: string; 
  public get actionCode() {
    return this.getStringAttribute('action_code');
  }
  public set actionCode(value: string) {
    this._actionCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionCodeInput() {
    return this._actionCode;
  }

  // conditions - computed: true, optional: false, required: false
  public get conditions() {
    return this.getStringAttribute('conditions');
  }

  // default_verification_method - computed: true, optional: false, required: false
  public get defaultVerificationMethod() {
    return this.getStringAttribute('default_verification_method');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // is_active - computed: true, optional: false, required: false
  public get isActive() {
    return this.getBooleanAttribute('is_active');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // prompt_to_enroll_verification_methods - computed: true, optional: false, required: false
  public get promptToEnrollVerificationMethods() {
    return this.getListAttribute('prompt_to_enroll_verification_methods');
  }

  // rule_id - computed: false, optional: false, required: true
  private _ruleId?: string; 
  public get ruleId() {
    return this.getStringAttribute('rule_id');
  }
  public set ruleId(value: string) {
    this._ruleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleIdInput() {
    return this._ruleId;
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // verification_methods - computed: true, optional: false, required: false
  public get verificationMethods() {
    return this.getListAttribute('verification_methods');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action_code: cdktf.stringToTerraform(this._actionCode),
      rule_id: cdktf.stringToTerraform(this._ruleId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action_code: {
        value: cdktf.stringToHclTerraform(this._actionCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_id: {
        value: cdktf.stringToHclTerraform(this._ruleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
