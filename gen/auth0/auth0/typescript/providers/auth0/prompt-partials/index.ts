// https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/prompt_partials
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PromptPartialsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Content that goes at the end of the form.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/prompt_partials#form_content_end PromptPartials#form_content_end}
  */
  readonly formContentEnd?: string;
  /**
  * Content that goes at the start of the form.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/prompt_partials#form_content_start PromptPartials#form_content_start}
  */
  readonly formContentStart?: string;
  /**
  * Footer content for the end of the footer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/prompt_partials#form_footer_end PromptPartials#form_footer_end}
  */
  readonly formFooterEnd?: string;
  /**
  * Footer content for the start of the footer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/prompt_partials#form_footer_start PromptPartials#form_footer_start}
  */
  readonly formFooterStart?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/prompt_partials#id PromptPartials#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The prompt that you are adding partials for. Options are: `login-id`, `login`, `login-password`, `signup`, `signup-id`, `signup-password`, `login-passwordless`, `customized-consent`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/prompt_partials#prompt PromptPartials#prompt}
  */
  readonly prompt: string;
  /**
  * Actions that go at the end of secondary actions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/prompt_partials#secondary_actions_end PromptPartials#secondary_actions_end}
  */
  readonly secondaryActionsEnd?: string;
  /**
  * Actions that go at the start of secondary actions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/prompt_partials#secondary_actions_start PromptPartials#secondary_actions_start}
  */
  readonly secondaryActionsStart?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/prompt_partials auth0_prompt_partials}
*/
export class PromptPartials extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "auth0_prompt_partials";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PromptPartials resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PromptPartials to import
  * @param importFromId The id of the existing PromptPartials that should be imported. Refer to the {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/prompt_partials#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PromptPartials to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "auth0_prompt_partials", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/prompt_partials auth0_prompt_partials} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PromptPartialsConfig
  */
  public constructor(scope: Construct, id: string, config: PromptPartialsConfig) {
    super(scope, id, {
      terraformResourceType: 'auth0_prompt_partials',
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
    this._formContentEnd = config.formContentEnd;
    this._formContentStart = config.formContentStart;
    this._formFooterEnd = config.formFooterEnd;
    this._formFooterStart = config.formFooterStart;
    this._id = config.id;
    this._prompt = config.prompt;
    this._secondaryActionsEnd = config.secondaryActionsEnd;
    this._secondaryActionsStart = config.secondaryActionsStart;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // form_content_end - computed: false, optional: true, required: false
  private _formContentEnd?: string; 
  public get formContentEnd() {
    return this.getStringAttribute('form_content_end');
  }
  public set formContentEnd(value: string) {
    this._formContentEnd = value;
  }
  public resetFormContentEnd() {
    this._formContentEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formContentEndInput() {
    return this._formContentEnd;
  }

  // form_content_start - computed: false, optional: true, required: false
  private _formContentStart?: string; 
  public get formContentStart() {
    return this.getStringAttribute('form_content_start');
  }
  public set formContentStart(value: string) {
    this._formContentStart = value;
  }
  public resetFormContentStart() {
    this._formContentStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formContentStartInput() {
    return this._formContentStart;
  }

  // form_footer_end - computed: false, optional: true, required: false
  private _formFooterEnd?: string; 
  public get formFooterEnd() {
    return this.getStringAttribute('form_footer_end');
  }
  public set formFooterEnd(value: string) {
    this._formFooterEnd = value;
  }
  public resetFormFooterEnd() {
    this._formFooterEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formFooterEndInput() {
    return this._formFooterEnd;
  }

  // form_footer_start - computed: false, optional: true, required: false
  private _formFooterStart?: string; 
  public get formFooterStart() {
    return this.getStringAttribute('form_footer_start');
  }
  public set formFooterStart(value: string) {
    this._formFooterStart = value;
  }
  public resetFormFooterStart() {
    this._formFooterStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formFooterStartInput() {
    return this._formFooterStart;
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

  // secondary_actions_end - computed: false, optional: true, required: false
  private _secondaryActionsEnd?: string; 
  public get secondaryActionsEnd() {
    return this.getStringAttribute('secondary_actions_end');
  }
  public set secondaryActionsEnd(value: string) {
    this._secondaryActionsEnd = value;
  }
  public resetSecondaryActionsEnd() {
    this._secondaryActionsEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryActionsEndInput() {
    return this._secondaryActionsEnd;
  }

  // secondary_actions_start - computed: false, optional: true, required: false
  private _secondaryActionsStart?: string; 
  public get secondaryActionsStart() {
    return this.getStringAttribute('secondary_actions_start');
  }
  public set secondaryActionsStart(value: string) {
    this._secondaryActionsStart = value;
  }
  public resetSecondaryActionsStart() {
    this._secondaryActionsStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryActionsStartInput() {
    return this._secondaryActionsStart;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      form_content_end: cdktf.stringToTerraform(this._formContentEnd),
      form_content_start: cdktf.stringToTerraform(this._formContentStart),
      form_footer_end: cdktf.stringToTerraform(this._formFooterEnd),
      form_footer_start: cdktf.stringToTerraform(this._formFooterStart),
      id: cdktf.stringToTerraform(this._id),
      prompt: cdktf.stringToTerraform(this._prompt),
      secondary_actions_end: cdktf.stringToTerraform(this._secondaryActionsEnd),
      secondary_actions_start: cdktf.stringToTerraform(this._secondaryActionsStart),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      form_content_end: {
        value: cdktf.stringToHclTerraform(this._formContentEnd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      form_content_start: {
        value: cdktf.stringToHclTerraform(this._formContentStart),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      form_footer_end: {
        value: cdktf.stringToHclTerraform(this._formFooterEnd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      form_footer_start: {
        value: cdktf.stringToHclTerraform(this._formFooterStart),
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
      prompt: {
        value: cdktf.stringToHclTerraform(this._prompt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secondary_actions_end: {
        value: cdktf.stringToHclTerraform(this._secondaryActionsEnd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secondary_actions_start: {
        value: cdktf.stringToHclTerraform(this._secondaryActionsStart),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
