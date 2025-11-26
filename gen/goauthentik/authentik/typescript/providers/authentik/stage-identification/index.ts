// https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/stage_identification
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StageIdentificationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/stage_identification#captcha_stage StageIdentification#captcha_stage}
  */
  readonly captchaStage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/stage_identification#case_insensitive_matching StageIdentification#case_insensitive_matching}
  */
  readonly caseInsensitiveMatching?: boolean | cdktf.IResolvable;
  /**
  * Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/stage_identification#enable_remember_me StageIdentification#enable_remember_me}
  */
  readonly enableRememberMe?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/stage_identification#enrollment_flow StageIdentification#enrollment_flow}
  */
  readonly enrollmentFlow?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/stage_identification#id StageIdentification#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/stage_identification#name StageIdentification#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/stage_identification#password_stage StageIdentification#password_stage}
  */
  readonly passwordStage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/stage_identification#passwordless_flow StageIdentification#passwordless_flow}
  */
  readonly passwordlessFlow?: string;
  /**
  * Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/stage_identification#pretend_user_exists StageIdentification#pretend_user_exists}
  */
  readonly pretendUserExists?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/stage_identification#recovery_flow StageIdentification#recovery_flow}
  */
  readonly recoveryFlow?: string;
  /**
  * Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/stage_identification#show_matched_user StageIdentification#show_matched_user}
  */
  readonly showMatchedUser?: boolean | cdktf.IResolvable;
  /**
  * Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/stage_identification#show_source_labels StageIdentification#show_source_labels}
  */
  readonly showSourceLabels?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/stage_identification#sources StageIdentification#sources}
  */
  readonly sources?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/stage_identification#user_fields StageIdentification#user_fields}
  */
  readonly userFields?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/stage_identification authentik_stage_identification}
*/
export class StageIdentification extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "authentik_stage_identification";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StageIdentification resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StageIdentification to import
  * @param importFromId The id of the existing StageIdentification that should be imported. Refer to the {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/stage_identification#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StageIdentification to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "authentik_stage_identification", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/stage_identification authentik_stage_identification} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StageIdentificationConfig
  */
  public constructor(scope: Construct, id: string, config: StageIdentificationConfig) {
    super(scope, id, {
      terraformResourceType: 'authentik_stage_identification',
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
    this._captchaStage = config.captchaStage;
    this._caseInsensitiveMatching = config.caseInsensitiveMatching;
    this._enableRememberMe = config.enableRememberMe;
    this._enrollmentFlow = config.enrollmentFlow;
    this._id = config.id;
    this._name = config.name;
    this._passwordStage = config.passwordStage;
    this._passwordlessFlow = config.passwordlessFlow;
    this._pretendUserExists = config.pretendUserExists;
    this._recoveryFlow = config.recoveryFlow;
    this._showMatchedUser = config.showMatchedUser;
    this._showSourceLabels = config.showSourceLabels;
    this._sources = config.sources;
    this._userFields = config.userFields;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // captcha_stage - computed: false, optional: true, required: false
  private _captchaStage?: string; 
  public get captchaStage() {
    return this.getStringAttribute('captcha_stage');
  }
  public set captchaStage(value: string) {
    this._captchaStage = value;
  }
  public resetCaptchaStage() {
    this._captchaStage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captchaStageInput() {
    return this._captchaStage;
  }

  // case_insensitive_matching - computed: false, optional: true, required: false
  private _caseInsensitiveMatching?: boolean | cdktf.IResolvable; 
  public get caseInsensitiveMatching() {
    return this.getBooleanAttribute('case_insensitive_matching');
  }
  public set caseInsensitiveMatching(value: boolean | cdktf.IResolvable) {
    this._caseInsensitiveMatching = value;
  }
  public resetCaseInsensitiveMatching() {
    this._caseInsensitiveMatching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseInsensitiveMatchingInput() {
    return this._caseInsensitiveMatching;
  }

  // enable_remember_me - computed: false, optional: true, required: false
  private _enableRememberMe?: boolean | cdktf.IResolvable; 
  public get enableRememberMe() {
    return this.getBooleanAttribute('enable_remember_me');
  }
  public set enableRememberMe(value: boolean | cdktf.IResolvable) {
    this._enableRememberMe = value;
  }
  public resetEnableRememberMe() {
    this._enableRememberMe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRememberMeInput() {
    return this._enableRememberMe;
  }

  // enrollment_flow - computed: false, optional: true, required: false
  private _enrollmentFlow?: string; 
  public get enrollmentFlow() {
    return this.getStringAttribute('enrollment_flow');
  }
  public set enrollmentFlow(value: string) {
    this._enrollmentFlow = value;
  }
  public resetEnrollmentFlow() {
    this._enrollmentFlow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enrollmentFlowInput() {
    return this._enrollmentFlow;
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

  // password_stage - computed: false, optional: true, required: false
  private _passwordStage?: string; 
  public get passwordStage() {
    return this.getStringAttribute('password_stage');
  }
  public set passwordStage(value: string) {
    this._passwordStage = value;
  }
  public resetPasswordStage() {
    this._passwordStage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordStageInput() {
    return this._passwordStage;
  }

  // passwordless_flow - computed: false, optional: true, required: false
  private _passwordlessFlow?: string; 
  public get passwordlessFlow() {
    return this.getStringAttribute('passwordless_flow');
  }
  public set passwordlessFlow(value: string) {
    this._passwordlessFlow = value;
  }
  public resetPasswordlessFlow() {
    this._passwordlessFlow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordlessFlowInput() {
    return this._passwordlessFlow;
  }

  // pretend_user_exists - computed: false, optional: true, required: false
  private _pretendUserExists?: boolean | cdktf.IResolvable; 
  public get pretendUserExists() {
    return this.getBooleanAttribute('pretend_user_exists');
  }
  public set pretendUserExists(value: boolean | cdktf.IResolvable) {
    this._pretendUserExists = value;
  }
  public resetPretendUserExists() {
    this._pretendUserExists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pretendUserExistsInput() {
    return this._pretendUserExists;
  }

  // recovery_flow - computed: false, optional: true, required: false
  private _recoveryFlow?: string; 
  public get recoveryFlow() {
    return this.getStringAttribute('recovery_flow');
  }
  public set recoveryFlow(value: string) {
    this._recoveryFlow = value;
  }
  public resetRecoveryFlow() {
    this._recoveryFlow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryFlowInput() {
    return this._recoveryFlow;
  }

  // show_matched_user - computed: false, optional: true, required: false
  private _showMatchedUser?: boolean | cdktf.IResolvable; 
  public get showMatchedUser() {
    return this.getBooleanAttribute('show_matched_user');
  }
  public set showMatchedUser(value: boolean | cdktf.IResolvable) {
    this._showMatchedUser = value;
  }
  public resetShowMatchedUser() {
    this._showMatchedUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showMatchedUserInput() {
    return this._showMatchedUser;
  }

  // show_source_labels - computed: false, optional: true, required: false
  private _showSourceLabels?: boolean | cdktf.IResolvable; 
  public get showSourceLabels() {
    return this.getBooleanAttribute('show_source_labels');
  }
  public set showSourceLabels(value: boolean | cdktf.IResolvable) {
    this._showSourceLabels = value;
  }
  public resetShowSourceLabels() {
    this._showSourceLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showSourceLabelsInput() {
    return this._showSourceLabels;
  }

  // sources - computed: false, optional: true, required: false
  private _sources?: string[]; 
  public get sources() {
    return this.getListAttribute('sources');
  }
  public set sources(value: string[]) {
    this._sources = value;
  }
  public resetSources() {
    this._sources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources;
  }

  // user_fields - computed: false, optional: true, required: false
  private _userFields?: string[]; 
  public get userFields() {
    return this.getListAttribute('user_fields');
  }
  public set userFields(value: string[]) {
    this._userFields = value;
  }
  public resetUserFields() {
    this._userFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userFieldsInput() {
    return this._userFields;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      captcha_stage: cdktf.stringToTerraform(this._captchaStage),
      case_insensitive_matching: cdktf.booleanToTerraform(this._caseInsensitiveMatching),
      enable_remember_me: cdktf.booleanToTerraform(this._enableRememberMe),
      enrollment_flow: cdktf.stringToTerraform(this._enrollmentFlow),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      password_stage: cdktf.stringToTerraform(this._passwordStage),
      passwordless_flow: cdktf.stringToTerraform(this._passwordlessFlow),
      pretend_user_exists: cdktf.booleanToTerraform(this._pretendUserExists),
      recovery_flow: cdktf.stringToTerraform(this._recoveryFlow),
      show_matched_user: cdktf.booleanToTerraform(this._showMatchedUser),
      show_source_labels: cdktf.booleanToTerraform(this._showSourceLabels),
      sources: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sources),
      user_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(this._userFields),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      captcha_stage: {
        value: cdktf.stringToHclTerraform(this._captchaStage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      case_insensitive_matching: {
        value: cdktf.booleanToHclTerraform(this._caseInsensitiveMatching),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_remember_me: {
        value: cdktf.booleanToHclTerraform(this._enableRememberMe),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enrollment_flow: {
        value: cdktf.stringToHclTerraform(this._enrollmentFlow),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_stage: {
        value: cdktf.stringToHclTerraform(this._passwordStage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      passwordless_flow: {
        value: cdktf.stringToHclTerraform(this._passwordlessFlow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pretend_user_exists: {
        value: cdktf.booleanToHclTerraform(this._pretendUserExists),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      recovery_flow: {
        value: cdktf.stringToHclTerraform(this._recoveryFlow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      show_matched_user: {
        value: cdktf.booleanToHclTerraform(this._showMatchedUser),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      show_source_labels: {
        value: cdktf.booleanToHclTerraform(this._showSourceLabels),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sources: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sources),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      user_fields: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._userFields),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
