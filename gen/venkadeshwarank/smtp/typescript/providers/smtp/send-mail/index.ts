// https://registry.terraform.io/providers/venkadeshwarank/smtp/0.3.1/docs/resources/send_mail
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SendMailConfig extends cdktf.TerraformMetaArguments {
  /**
  * BCC email addresses. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/venkadeshwarank/smtp/0.3.1/docs/resources/send_mail#bcc SendMail#bcc}
  */
  readonly bcc?: string[];
  /**
  * Body of the email.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/venkadeshwarank/smtp/0.3.1/docs/resources/send_mail#body SendMail#body}
  */
  readonly body: string;
  /**
  * CC email addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/venkadeshwarank/smtp/0.3.1/docs/resources/send_mail#cc SendMail#cc}
  */
  readonly cc?: string[];
  /**
  * From email address. If not provided, the username used in the smtp auth will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/venkadeshwarank/smtp/0.3.1/docs/resources/send_mail#from SendMail#from}
  */
  readonly from?: string;
  /**
  * Boolean flag is identify whether the body is html or plain text. Set this to `true` if body is a HTML content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/venkadeshwarank/smtp/0.3.1/docs/resources/send_mail#render_html SendMail#render_html}
  */
  readonly renderHtml?: boolean | cdktf.IResolvable;
  /**
  * Subject of the email.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/venkadeshwarank/smtp/0.3.1/docs/resources/send_mail#subject SendMail#subject}
  */
  readonly subject: string;
  /**
  * To email addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/venkadeshwarank/smtp/0.3.1/docs/resources/send_mail#to SendMail#to}
  */
  readonly to: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/venkadeshwarank/smtp/0.3.1/docs/resources/send_mail smtp_send_mail}
*/
export class SendMail extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "smtp_send_mail";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SendMail resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SendMail to import
  * @param importFromId The id of the existing SendMail that should be imported. Refer to the {@link https://registry.terraform.io/providers/venkadeshwarank/smtp/0.3.1/docs/resources/send_mail#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SendMail to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "smtp_send_mail", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/venkadeshwarank/smtp/0.3.1/docs/resources/send_mail smtp_send_mail} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SendMailConfig
  */
  public constructor(scope: Construct, id: string, config: SendMailConfig) {
    super(scope, id, {
      terraformResourceType: 'smtp_send_mail',
      terraformGeneratorMetadata: {
        providerName: 'smtp',
        providerVersion: '0.3.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bcc = config.bcc;
    this._body = config.body;
    this._cc = config.cc;
    this._from = config.from;
    this._renderHtml = config.renderHtml;
    this._subject = config.subject;
    this._to = config.to;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bcc - computed: false, optional: true, required: false
  private _bcc?: string[]; 
  public get bcc() {
    return this.getListAttribute('bcc');
  }
  public set bcc(value: string[]) {
    this._bcc = value;
  }
  public resetBcc() {
    this._bcc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bccInput() {
    return this._bcc;
  }

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

  // cc - computed: false, optional: true, required: false
  private _cc?: string[]; 
  public get cc() {
    return this.getListAttribute('cc');
  }
  public set cc(value: string[]) {
    this._cc = value;
  }
  public resetCc() {
    this._cc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ccInput() {
    return this._cc;
  }

  // from - computed: false, optional: true, required: false
  private _from?: string; 
  public get from() {
    return this.getStringAttribute('from');
  }
  public set from(value: string) {
    this._from = value;
  }
  public resetFrom() {
    this._from = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // render_html - computed: true, optional: true, required: false
  private _renderHtml?: boolean | cdktf.IResolvable; 
  public get renderHtml() {
    return this.getBooleanAttribute('render_html');
  }
  public set renderHtml(value: boolean | cdktf.IResolvable) {
    this._renderHtml = value;
  }
  public resetRenderHtml() {
    this._renderHtml = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renderHtmlInput() {
    return this._renderHtml;
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

  // to - computed: false, optional: false, required: true
  private _to?: string[]; 
  public get to() {
    return this.getListAttribute('to');
  }
  public set to(value: string[]) {
    this._to = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bcc: cdktf.listMapper(cdktf.stringToTerraform, false)(this._bcc),
      body: cdktf.stringToTerraform(this._body),
      cc: cdktf.listMapper(cdktf.stringToTerraform, false)(this._cc),
      from: cdktf.stringToTerraform(this._from),
      render_html: cdktf.booleanToTerraform(this._renderHtml),
      subject: cdktf.stringToTerraform(this._subject),
      to: cdktf.listMapper(cdktf.stringToTerraform, false)(this._to),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bcc: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._bcc),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      body: {
        value: cdktf.stringToHclTerraform(this._body),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cc: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._cc),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      from: {
        value: cdktf.stringToHclTerraform(this._from),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      render_html: {
        value: cdktf.booleanToHclTerraform(this._renderHtml),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      subject: {
        value: cdktf.stringToHclTerraform(this._subject),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      to: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._to),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
