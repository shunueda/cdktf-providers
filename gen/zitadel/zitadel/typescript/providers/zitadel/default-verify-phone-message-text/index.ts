// https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_verify_phone_message_text
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DefaultVerifyPhoneMessageTextConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_verify_phone_message_text#button_text DefaultVerifyPhoneMessageText#button_text}
  */
  readonly buttonText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_verify_phone_message_text#footer_text DefaultVerifyPhoneMessageText#footer_text}
  */
  readonly footerText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_verify_phone_message_text#greeting DefaultVerifyPhoneMessageText#greeting}
  */
  readonly greeting?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_verify_phone_message_text#language DefaultVerifyPhoneMessageText#language}
  */
  readonly language: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_verify_phone_message_text#pre_header DefaultVerifyPhoneMessageText#pre_header}
  */
  readonly preHeader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_verify_phone_message_text#subject DefaultVerifyPhoneMessageText#subject}
  */
  readonly subject?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_verify_phone_message_text#text DefaultVerifyPhoneMessageText#text}
  */
  readonly text?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_verify_phone_message_text#title DefaultVerifyPhoneMessageText#title}
  */
  readonly title?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_verify_phone_message_text zitadel_default_verify_phone_message_text}
*/
export class DefaultVerifyPhoneMessageText extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zitadel_default_verify_phone_message_text";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DefaultVerifyPhoneMessageText resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DefaultVerifyPhoneMessageText to import
  * @param importFromId The id of the existing DefaultVerifyPhoneMessageText that should be imported. Refer to the {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_verify_phone_message_text#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DefaultVerifyPhoneMessageText to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zitadel_default_verify_phone_message_text", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_verify_phone_message_text zitadel_default_verify_phone_message_text} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DefaultVerifyPhoneMessageTextConfig
  */
  public constructor(scope: Construct, id: string, config: DefaultVerifyPhoneMessageTextConfig) {
    super(scope, id, {
      terraformResourceType: 'zitadel_default_verify_phone_message_text',
      terraformGeneratorMetadata: {
        providerName: 'zitadel',
        providerVersion: '2.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._buttonText = config.buttonText;
    this._footerText = config.footerText;
    this._greeting = config.greeting;
    this._language = config.language;
    this._preHeader = config.preHeader;
    this._subject = config.subject;
    this._text = config.text;
    this._title = config.title;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // button_text - computed: false, optional: true, required: false
  private _buttonText?: string; 
  public get buttonText() {
    return this.getStringAttribute('button_text');
  }
  public set buttonText(value: string) {
    this._buttonText = value;
  }
  public resetButtonText() {
    this._buttonText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buttonTextInput() {
    return this._buttonText;
  }

  // footer_text - computed: false, optional: true, required: false
  private _footerText?: string; 
  public get footerText() {
    return this.getStringAttribute('footer_text');
  }
  public set footerText(value: string) {
    this._footerText = value;
  }
  public resetFooterText() {
    this._footerText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get footerTextInput() {
    return this._footerText;
  }

  // greeting - computed: false, optional: true, required: false
  private _greeting?: string; 
  public get greeting() {
    return this.getStringAttribute('greeting');
  }
  public set greeting(value: string) {
    this._greeting = value;
  }
  public resetGreeting() {
    this._greeting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get greetingInput() {
    return this._greeting;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // pre_header - computed: false, optional: true, required: false
  private _preHeader?: string; 
  public get preHeader() {
    return this.getStringAttribute('pre_header');
  }
  public set preHeader(value: string) {
    this._preHeader = value;
  }
  public resetPreHeader() {
    this._preHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preHeaderInput() {
    return this._preHeader;
  }

  // subject - computed: false, optional: true, required: false
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  public resetSubject() {
    this._subject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }

  // text - computed: false, optional: true, required: false
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      button_text: cdktf.stringToTerraform(this._buttonText),
      footer_text: cdktf.stringToTerraform(this._footerText),
      greeting: cdktf.stringToTerraform(this._greeting),
      language: cdktf.stringToTerraform(this._language),
      pre_header: cdktf.stringToTerraform(this._preHeader),
      subject: cdktf.stringToTerraform(this._subject),
      text: cdktf.stringToTerraform(this._text),
      title: cdktf.stringToTerraform(this._title),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      button_text: {
        value: cdktf.stringToHclTerraform(this._buttonText),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      footer_text: {
        value: cdktf.stringToHclTerraform(this._footerText),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      greeting: {
        value: cdktf.stringToHclTerraform(this._greeting),
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
      pre_header: {
        value: cdktf.stringToHclTerraform(this._preHeader),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subject: {
        value: cdktf.stringToHclTerraform(this._subject),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      text: {
        value: cdktf.stringToHclTerraform(this._text),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
