// https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/agreement_localization
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AgreementLocalizationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the agreement to associate the agreement localization with.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/agreement_localization#agreement_id AgreementLocalization#agreement_id}
  */
  readonly agreementId: string;
  /**
  * A string used as the title of the agreement for the language presented to the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/agreement_localization#display_name AgreementLocalization#display_name}
  */
  readonly displayName: string;
  /**
  * The ID of the environment to associate the agreement localization with.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/agreement_localization#environment_id AgreementLocalization#environment_id}
  */
  readonly environmentId: string;
  /**
  * The ID of the language in the PingOne environment that the localization applies to.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/agreement_localization#language_id AgreementLocalization#language_id}
  */
  readonly languageId: string;
  /**
  * A string that specifies the text next to the "continue" button in the end user interface. Accepted character are unicode letters, combining marks, numeric characters, whitespace, and punctuation characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/agreement_localization#text_button_continue AgreementLocalization#text_button_continue}
  */
  readonly textButtonContinue?: string;
  /**
  * A string that specifies the text next to the "decline" button in the end user interface. Accepted character are unicode letters, combining marks, numeric characters, whitespace, and punctuation characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/agreement_localization#text_button_decline AgreementLocalization#text_button_decline}
  */
  readonly textButtonDecline?: string;
  /**
  * A string that specifies the text next to the "accept" checkbox in the end user interface. Accepted character are unicode letters, combining marks, numeric characters, whitespace, and punctuation characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/agreement_localization#text_checkbox_accept AgreementLocalization#text_checkbox_accept}
  */
  readonly textCheckboxAccept?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/agreement_localization pingone_agreement_localization}
*/
export class AgreementLocalization extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingone_agreement_localization";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AgreementLocalization resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AgreementLocalization to import
  * @param importFromId The id of the existing AgreementLocalization that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/agreement_localization#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AgreementLocalization to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingone_agreement_localization", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/agreement_localization pingone_agreement_localization} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AgreementLocalizationConfig
  */
  public constructor(scope: Construct, id: string, config: AgreementLocalizationConfig) {
    super(scope, id, {
      terraformResourceType: 'pingone_agreement_localization',
      terraformGeneratorMetadata: {
        providerName: 'pingone',
        providerVersion: '1.14.0',
        providerVersionConstraint: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._agreementId = config.agreementId;
    this._displayName = config.displayName;
    this._environmentId = config.environmentId;
    this._languageId = config.languageId;
    this._textButtonContinue = config.textButtonContinue;
    this._textButtonDecline = config.textButtonDecline;
    this._textCheckboxAccept = config.textCheckboxAccept;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agreement_id - computed: false, optional: false, required: true
  private _agreementId?: string; 
  public get agreementId() {
    return this.getStringAttribute('agreement_id');
  }
  public set agreementId(value: string) {
    this._agreementId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agreementIdInput() {
    return this._agreementId;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // environment_id - computed: false, optional: false, required: true
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // language_id - computed: false, optional: false, required: true
  private _languageId?: string; 
  public get languageId() {
    return this.getStringAttribute('language_id');
  }
  public set languageId(value: string) {
    this._languageId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get languageIdInput() {
    return this._languageId;
  }

  // locale - computed: true, optional: false, required: false
  public get locale() {
    return this.getStringAttribute('locale');
  }

  // text_button_continue - computed: false, optional: true, required: false
  private _textButtonContinue?: string; 
  public get textButtonContinue() {
    return this.getStringAttribute('text_button_continue');
  }
  public set textButtonContinue(value: string) {
    this._textButtonContinue = value;
  }
  public resetTextButtonContinue() {
    this._textButtonContinue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textButtonContinueInput() {
    return this._textButtonContinue;
  }

  // text_button_decline - computed: false, optional: true, required: false
  private _textButtonDecline?: string; 
  public get textButtonDecline() {
    return this.getStringAttribute('text_button_decline');
  }
  public set textButtonDecline(value: string) {
    this._textButtonDecline = value;
  }
  public resetTextButtonDecline() {
    this._textButtonDecline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textButtonDeclineInput() {
    return this._textButtonDecline;
  }

  // text_checkbox_accept - computed: false, optional: true, required: false
  private _textCheckboxAccept?: string; 
  public get textCheckboxAccept() {
    return this.getStringAttribute('text_checkbox_accept');
  }
  public set textCheckboxAccept(value: string) {
    this._textCheckboxAccept = value;
  }
  public resetTextCheckboxAccept() {
    this._textCheckboxAccept = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textCheckboxAcceptInput() {
    return this._textCheckboxAccept;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      agreement_id: cdktf.stringToTerraform(this._agreementId),
      display_name: cdktf.stringToTerraform(this._displayName),
      environment_id: cdktf.stringToTerraform(this._environmentId),
      language_id: cdktf.stringToTerraform(this._languageId),
      text_button_continue: cdktf.stringToTerraform(this._textButtonContinue),
      text_button_decline: cdktf.stringToTerraform(this._textButtonDecline),
      text_checkbox_accept: cdktf.stringToTerraform(this._textCheckboxAccept),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      agreement_id: {
        value: cdktf.stringToHclTerraform(this._agreementId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      language_id: {
        value: cdktf.stringToHclTerraform(this._languageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      text_button_continue: {
        value: cdktf.stringToHclTerraform(this._textButtonContinue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      text_button_decline: {
        value: cdktf.stringToHclTerraform(this._textButtonDecline),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      text_checkbox_accept: {
        value: cdktf.stringToHclTerraform(this._textCheckboxAccept),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
