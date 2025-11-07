// https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the action that users perform which you will track. (e.g 'login')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/rule#action_code Rule#action_code}
  */
  readonly actionCode: string;
  /**
  * The logical conditions to match tracked actions against. If the conditions are met then the rule's type will be returned in the track action response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/rule#conditions Rule#conditions}
  */
  readonly conditions: string;
  /**
  * Ignore the user's preference and choose which authenticator the Pre-built UI will present by default. Allowed values: `SMS`, `AUTHENTICATOR_APP`, `EMAIL_MAGIC_LINK`, `EMAIL_OTP`, `PUSH`, `SECURITY_KEY`, `PASSKEY`, `VERIFF`, `IPROOV`, `REDROCK`, `IDVERSE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/rule#default_verification_method Rule#default_verification_method}
  */
  readonly defaultVerificationMethod?: string;
  /**
  * A description of the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/rule#description Rule#description}
  */
  readonly description?: string;
  /**
  * Toggles whether or not the rule is actively applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/rule#is_active Rule#is_active}
  */
  readonly isActive: boolean | cdktf.IResolvable;
  /**
  * A string used to name the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/rule#name Rule#name}
  */
  readonly name: string;
  /**
  * Determines the order which the rules are applied in, where 0 is applied first, 1 is applied second...
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/rule#priority Rule#priority}
  */
  readonly priority: number;
  /**
  * If this is set then users will be prompted to add a passkey after a challenge is completed. Allowed values: `[PASSKEY]`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/rule#prompt_to_enroll_verification_methods Rule#prompt_to_enroll_verification_methods}
  */
  readonly promptToEnrollVerificationMethods?: string[];
  /**
  * The result that the rule should return when the conditions are met. Allowed values: `ALLOW`, `CHALLENGE`, `REVIEW`, `BLOCK`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/rule#type Rule#type}
  */
  readonly type: string;
  /**
  * A list of permitted authenticators that can be used if the type of the rule is 'CHALLENGE'. Allowed values: `SMS`, `AUTHENTICATOR_APP`, `EMAIL_MAGIC_LINK`, `EMAIL_OTP`, `PUSH`, `SECURITY_KEY`, `PASSKEY`, `VERIFF`, `IPROOV`, `REDROCK`, `IDVERSE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/rule#verification_methods Rule#verification_methods}
  */
  readonly verificationMethods?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/rule authsignal_rule}
*/
export class Rule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "authsignal_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Rule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Rule to import
  * @param importFromId The id of the existing Rule that should be imported. Refer to the {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Rule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "authsignal_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/rule authsignal_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RuleConfig
  */
  public constructor(scope: Construct, id: string, config: RuleConfig) {
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
    this._conditions = config.conditions;
    this._defaultVerificationMethod = config.defaultVerificationMethod;
    this._description = config.description;
    this._isActive = config.isActive;
    this._name = config.name;
    this._priority = config.priority;
    this._promptToEnrollVerificationMethods = config.promptToEnrollVerificationMethods;
    this._type = config.type;
    this._verificationMethods = config.verificationMethods;
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

  // conditions - computed: false, optional: false, required: true
  private _conditions?: string; 
  public get conditions() {
    return this.getStringAttribute('conditions');
  }
  public set conditions(value: string) {
    this._conditions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions;
  }

  // default_verification_method - computed: false, optional: true, required: false
  private _defaultVerificationMethod?: string; 
  public get defaultVerificationMethod() {
    return this.getStringAttribute('default_verification_method');
  }
  public set defaultVerificationMethod(value: string) {
    this._defaultVerificationMethod = value;
  }
  public resetDefaultVerificationMethod() {
    this._defaultVerificationMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultVerificationMethodInput() {
    return this._defaultVerificationMethod;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // is_active - computed: false, optional: false, required: true
  private _isActive?: boolean | cdktf.IResolvable; 
  public get isActive() {
    return this.getBooleanAttribute('is_active');
  }
  public set isActive(value: boolean | cdktf.IResolvable) {
    this._isActive = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isActiveInput() {
    return this._isActive;
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

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // prompt_to_enroll_verification_methods - computed: false, optional: true, required: false
  private _promptToEnrollVerificationMethods?: string[]; 
  public get promptToEnrollVerificationMethods() {
    return this.getListAttribute('prompt_to_enroll_verification_methods');
  }
  public set promptToEnrollVerificationMethods(value: string[]) {
    this._promptToEnrollVerificationMethods = value;
  }
  public resetPromptToEnrollVerificationMethods() {
    this._promptToEnrollVerificationMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promptToEnrollVerificationMethodsInput() {
    return this._promptToEnrollVerificationMethods;
  }

  // rule_id - computed: true, optional: false, required: false
  public get ruleId() {
    return this.getStringAttribute('rule_id');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // verification_methods - computed: false, optional: true, required: false
  private _verificationMethods?: string[]; 
  public get verificationMethods() {
    return this.getListAttribute('verification_methods');
  }
  public set verificationMethods(value: string[]) {
    this._verificationMethods = value;
  }
  public resetVerificationMethods() {
    this._verificationMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verificationMethodsInput() {
    return this._verificationMethods;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action_code: cdktf.stringToTerraform(this._actionCode),
      conditions: cdktf.stringToTerraform(this._conditions),
      default_verification_method: cdktf.stringToTerraform(this._defaultVerificationMethod),
      description: cdktf.stringToTerraform(this._description),
      is_active: cdktf.booleanToTerraform(this._isActive),
      name: cdktf.stringToTerraform(this._name),
      priority: cdktf.numberToTerraform(this._priority),
      prompt_to_enroll_verification_methods: cdktf.listMapper(cdktf.stringToTerraform, false)(this._promptToEnrollVerificationMethods),
      type: cdktf.stringToTerraform(this._type),
      verification_methods: cdktf.listMapper(cdktf.stringToTerraform, false)(this._verificationMethods),
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
      conditions: {
        value: cdktf.stringToHclTerraform(this._conditions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_verification_method: {
        value: cdktf.stringToHclTerraform(this._defaultVerificationMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_active: {
        value: cdktf.booleanToHclTerraform(this._isActive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      prompt_to_enroll_verification_methods: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._promptToEnrollVerificationMethods),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      verification_methods: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._verificationMethods),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
