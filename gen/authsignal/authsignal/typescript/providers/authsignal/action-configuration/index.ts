// https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/action_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ActionConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the action that users perform which you will track. (e.g 'login')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/action_configuration#action_code ActionConfiguration#action_code}
  */
  readonly actionCode: string;
  /**
  * The default action behavior if no rules match. Allowed values: `ALLOW`, `CHALLENGE`, `REVIEW`, `BLOCK`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/action_configuration#default_user_action_result ActionConfiguration#default_user_action_result}
  */
  readonly defaultUserActionResult: string;
  /**
  * Ignore the user's preference and choose which authenticator the Pre-built UI will present by default. Allowed values: `SMS`, `AUTHENTICATOR_APP`, `EMAIL_MAGIC_LINK`, `EMAIL_OTP`, `PUSH`, `SECURITY_KEY`, `PASSKEY`, `VERIFF`, `IPROOV`, `REDROCK`, `IDVERSE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/action_configuration#default_verification_method ActionConfiguration#default_verification_method}
  */
  readonly defaultVerificationMethod?: string;
  /**
  * Optional messaging templates to be shown in Authsignal's pre-built UI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/action_configuration#messaging_templates ActionConfiguration#messaging_templates}
  */
  readonly messagingTemplates?: string;
  /**
  * If this is set then users will be prompted to add a passkey after a challenge is completed. Allowed values: `[PASSKEY]`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/action_configuration#prompt_to_enroll_verification_methods ActionConfiguration#prompt_to_enroll_verification_methods}
  */
  readonly promptToEnrollVerificationMethods?: string[];
  /**
  * A list of permitted authenticators that can be used if the result of the action is 'CHALLENGE'. Allowed values: `SMS`, `AUTHENTICATOR_APP`, `EMAIL_MAGIC_LINK`, `EMAIL_OTP`, `PUSH`, `SECURITY_KEY`, `PASSKEY`, `VERIFF`, `IPROOV`, `REDROCK`, `IDVERSE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/action_configuration#verification_methods ActionConfiguration#verification_methods}
  */
  readonly verificationMethods?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/action_configuration authsignal_action_configuration}
*/
export class ActionConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "authsignal_action_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ActionConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ActionConfiguration to import
  * @param importFromId The id of the existing ActionConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/action_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ActionConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "authsignal_action_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/action_configuration authsignal_action_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ActionConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: ActionConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'authsignal_action_configuration',
      terraformGeneratorMetadata: {
        providerName: 'authsignal',
        providerVersion: '1.6.0',
        providerVersionConstraint: '1.6.0'
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
    this._defaultUserActionResult = config.defaultUserActionResult;
    this._defaultVerificationMethod = config.defaultVerificationMethod;
    this._messagingTemplates = config.messagingTemplates;
    this._promptToEnrollVerificationMethods = config.promptToEnrollVerificationMethods;
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

  // default_user_action_result - computed: false, optional: false, required: true
  private _defaultUserActionResult?: string; 
  public get defaultUserActionResult() {
    return this.getStringAttribute('default_user_action_result');
  }
  public set defaultUserActionResult(value: string) {
    this._defaultUserActionResult = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultUserActionResultInput() {
    return this._defaultUserActionResult;
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

  // last_action_created_at - computed: true, optional: false, required: false
  public get lastActionCreatedAt() {
    return this.getStringAttribute('last_action_created_at');
  }

  // messaging_templates - computed: false, optional: true, required: false
  private _messagingTemplates?: string; 
  public get messagingTemplates() {
    return this.getStringAttribute('messaging_templates');
  }
  public set messagingTemplates(value: string) {
    this._messagingTemplates = value;
  }
  public resetMessagingTemplates() {
    this._messagingTemplates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messagingTemplatesInput() {
    return this._messagingTemplates;
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

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
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
      default_user_action_result: cdktf.stringToTerraform(this._defaultUserActionResult),
      default_verification_method: cdktf.stringToTerraform(this._defaultVerificationMethod),
      messaging_templates: cdktf.stringToTerraform(this._messagingTemplates),
      prompt_to_enroll_verification_methods: cdktf.listMapper(cdktf.stringToTerraform, false)(this._promptToEnrollVerificationMethods),
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
      default_user_action_result: {
        value: cdktf.stringToHclTerraform(this._defaultUserActionResult),
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
      messaging_templates: {
        value: cdktf.stringToHclTerraform(this._messagingTemplates),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prompt_to_enroll_verification_methods: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._promptToEnrollVerificationMethods),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
