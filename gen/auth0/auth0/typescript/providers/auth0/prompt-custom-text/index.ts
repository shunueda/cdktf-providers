// https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/prompt_custom_text
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PromptCustomTextConfig extends cdktf.TerraformMetaArguments {
  /**
  * JSON containing the custom texts. You can check the options for each prompt [here](https://auth0.com/docs/customize/universal-login-pages/customize-login-text-prompts#prompt-values).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/prompt_custom_text#body PromptCustomText#body}
  */
  readonly body: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/prompt_custom_text#id PromptCustomText#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Language of the custom text. Options include: `am`, `ar`, `ar-EG`, `ar-SA`, `az`, `bg`, `bn`, `bs`, `ca-ES`, `cnr`, `cs`, `cy`, `da`, `de`, `el`, `en`, `en-CA`, `es`, `es-419`, `es-AR`, `es-MX`, `et`, `eu-ES`, `fa`, `fi`, `fr`, `fr-CA`, `fr-FR`, `gl-ES`, `gu`, `he`, `hi`, `hr`, `hu`, `hy`, `id`, `is`, `it`, `ja`, `ka`, `kk`, `kn`, `ko`, `lt`, `lv`, `mk`, `ml`, `mn`, `mr`, `ms`, `my`, `nb`, `nl`, `nn`, `no`, `pa`, `pl`, `pt`, `pt-BR`, `pt-PT`, `ro`, `ru`, `sk`, `sl`, `so`, `sq`, `sr`, `sv`, `sw`, `ta`, `te`, `th`, `tl`, `tr`, `uk`, `ur`, `vi`, `zgh`, `zh-CN`, `zh-HK`, `zh-TW`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/prompt_custom_text#language PromptCustomText#language}
  */
  readonly language: string;
  /**
  * The term `prompt` is used to refer to a specific step in the login flow. Options include: `login`, `login-id`, `login-password`, `login-passwordless`, `login-email-verification`, `signup`, `signup-id`, `signup-password`, `phone-identifier-enrollment`, `phone-identifier-challenge`, `email-identifier-challenge`, `reset-password`, `custom-form`, `consent`, `customized-consent`, `logout`, `mfa-push`, `mfa-otp`, `mfa-voice`, `mfa-phone`, `mfa-webauthn`, `mfa-sms`, `mfa-email`, `mfa-recovery-code`, `mfa`, `status`, `device-flow`, `email-verification`, `email-otp-challenge`, `organizations`, `invitation`, `common`, `passkeys`, `captcha`, `brute-force-protection`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/prompt_custom_text#prompt PromptCustomText#prompt}
  */
  readonly prompt: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/prompt_custom_text auth0_prompt_custom_text}
*/
export class PromptCustomText extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "auth0_prompt_custom_text";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PromptCustomText resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PromptCustomText to import
  * @param importFromId The id of the existing PromptCustomText that should be imported. Refer to the {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/prompt_custom_text#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PromptCustomText to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "auth0_prompt_custom_text", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/prompt_custom_text auth0_prompt_custom_text} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PromptCustomTextConfig
  */
  public constructor(scope: Construct, id: string, config: PromptCustomTextConfig) {
    super(scope, id, {
      terraformResourceType: 'auth0_prompt_custom_text',
      terraformGeneratorMetadata: {
        providerName: 'auth0',
        providerVersion: '1.33.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._body = config.body;
    this._id = config.id;
    this._language = config.language;
    this._prompt = config.prompt;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // body - computed: false, optional: false, required: true
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
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

  // language - computed: false, optional: false, required: true
  private _language?: string; 
  public get language() {
    return this.getStringAttribute('language');
  }
  public set language(value: string) {
    this._language = value;
  }
  // Temporarily expose input value. Use with caution.
  public get languageInput() {
    return this._language;
  }

  // prompt - computed: false, optional: false, required: true
  private _prompt?: string; 
  public get prompt() {
    return this.getStringAttribute('prompt');
  }
  public set prompt(value: string) {
    this._prompt = value;
  }
  // Temporarily expose input value. Use with caution.
  public get promptInput() {
    return this._prompt;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      body: cdktf.stringToTerraform(this._body),
      id: cdktf.stringToTerraform(this._id),
      language: cdktf.stringToTerraform(this._language),
      prompt: cdktf.stringToTerraform(this._prompt),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      body: {
        value: cdktf.stringToHclTerraform(this._body),
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
      language: {
        value: cdktf.stringToHclTerraform(this._language),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prompt: {
        value: cdktf.stringToHclTerraform(this._prompt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
