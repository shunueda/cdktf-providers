// https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/email_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EmailTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/email_template#body EmailTemplate#body}
  */
  readonly body: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/email_template#enabled EmailTemplate#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/email_template#from EmailTemplate#from}
  */
  readonly from: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/email_template#id EmailTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/email_template#result_url EmailTemplate#result_url}
  */
  readonly resultUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/email_template#subject EmailTemplate#subject}
  */
  readonly subject: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/email_template#syntax EmailTemplate#syntax}
  */
  readonly syntax: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/email_template#template EmailTemplate#template}
  */
  readonly template: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/email_template#url_lifetime_in_seconds EmailTemplate#url_lifetime_in_seconds}
  */
  readonly urlLifetimeInSeconds?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/email_template auth0_email_template}
*/
export class EmailTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "auth0_email_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EmailTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EmailTemplate to import
  * @param importFromId The id of the existing EmailTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/email_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EmailTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "auth0_email_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/email_template auth0_email_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EmailTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: EmailTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'auth0_email_template',
      terraformGeneratorMetadata: {
        providerName: 'auth0',
        providerVersion: '0.26.2'
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
    this._enabled = config.enabled;
    this._from = config.from;
    this._id = config.id;
    this._resultUrl = config.resultUrl;
    this._subject = config.subject;
    this._syntax = config.syntax;
    this._template = config.template;
    this._urlLifetimeInSeconds = config.urlLifetimeInSeconds;
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

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // from - computed: false, optional: false, required: true
  private _from?: string; 
  public get from() {
    return this.getStringAttribute('from');
  }
  public set from(value: string) {
    this._from = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
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

  // result_url - computed: false, optional: true, required: false
  private _resultUrl?: string; 
  public get resultUrl() {
    return this.getStringAttribute('result_url');
  }
  public set resultUrl(value: string) {
    this._resultUrl = value;
  }
  public resetResultUrl() {
    this._resultUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultUrlInput() {
    return this._resultUrl;
  }

  // subject - computed: false, optional: false, required: true
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }

  // syntax - computed: false, optional: false, required: true
  private _syntax?: string; 
  public get syntax() {
    return this.getStringAttribute('syntax');
  }
  public set syntax(value: string) {
    this._syntax = value;
  }
  // Temporarily expose input value. Use with caution.
  public get syntaxInput() {
    return this._syntax;
  }

  // template - computed: false, optional: false, required: true
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }

  // url_lifetime_in_seconds - computed: false, optional: true, required: false
  private _urlLifetimeInSeconds?: number; 
  public get urlLifetimeInSeconds() {
    return this.getNumberAttribute('url_lifetime_in_seconds');
  }
  public set urlLifetimeInSeconds(value: number) {
    this._urlLifetimeInSeconds = value;
  }
  public resetUrlLifetimeInSeconds() {
    this._urlLifetimeInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlLifetimeInSecondsInput() {
    return this._urlLifetimeInSeconds;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      body: cdktf.stringToTerraform(this._body),
      enabled: cdktf.booleanToTerraform(this._enabled),
      from: cdktf.stringToTerraform(this._from),
      id: cdktf.stringToTerraform(this._id),
      result_url: cdktf.stringToTerraform(this._resultUrl),
      subject: cdktf.stringToTerraform(this._subject),
      syntax: cdktf.stringToTerraform(this._syntax),
      template: cdktf.stringToTerraform(this._template),
      url_lifetime_in_seconds: cdktf.numberToTerraform(this._urlLifetimeInSeconds),
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
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      from: {
        value: cdktf.stringToHclTerraform(this._from),
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
      result_url: {
        value: cdktf.stringToHclTerraform(this._resultUrl),
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
      syntax: {
        value: cdktf.stringToHclTerraform(this._syntax),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template: {
        value: cdktf.stringToHclTerraform(this._template),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url_lifetime_in_seconds: {
        value: cdktf.numberToHclTerraform(this._urlLifetimeInSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
