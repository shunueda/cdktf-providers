// https://registry.terraform.io/providers/anna-money/sendgrid/1.1.2/docs/resources/parse_webhook
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ParseWebhookConfig extends cdktf.TerraformMetaArguments {
  /**
  * A specific and unique domain or subdomain that you have created to use exclusively to parse your incoming email. For example, parse.yourdomain.com.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anna-money/sendgrid/1.1.2/docs/resources/parse_webhook#hostname ParseWebhook#hostname}
  */
  readonly hostname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anna-money/sendgrid/1.1.2/docs/resources/parse_webhook#id ParseWebhook#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Indicates if you would like SendGrid to post the original MIME-type content of your parsed email. When this parameter is set to "true", SendGrid will send a JSON payload of the content of your email.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anna-money/sendgrid/1.1.2/docs/resources/parse_webhook#send_raw ParseWebhook#send_raw}
  */
  readonly sendRaw?: boolean | cdktf.IResolvable;
  /**
  * Indicates if you would like SendGrid to check the content parsed from your emails for spam before POSTing them to your domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anna-money/sendgrid/1.1.2/docs/resources/parse_webhook#spam_check ParseWebhook#spam_check}
  */
  readonly spamCheck?: boolean | cdktf.IResolvable;
  /**
  * The public URL where you would like SendGrid to POST the data parsed from your email. Any emails sent with the given hostname provided (whose MX records have been updated to point to SendGrid) will be parsed and POSTed to this URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anna-money/sendgrid/1.1.2/docs/resources/parse_webhook#url ParseWebhook#url}
  */
  readonly url: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/anna-money/sendgrid/1.1.2/docs/resources/parse_webhook sendgrid_parse_webhook}
*/
export class ParseWebhook extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sendgrid_parse_webhook";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ParseWebhook resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ParseWebhook to import
  * @param importFromId The id of the existing ParseWebhook that should be imported. Refer to the {@link https://registry.terraform.io/providers/anna-money/sendgrid/1.1.2/docs/resources/parse_webhook#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ParseWebhook to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sendgrid_parse_webhook", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/anna-money/sendgrid/1.1.2/docs/resources/parse_webhook sendgrid_parse_webhook} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ParseWebhookConfig
  */
  public constructor(scope: Construct, id: string, config: ParseWebhookConfig) {
    super(scope, id, {
      terraformResourceType: 'sendgrid_parse_webhook',
      terraformGeneratorMetadata: {
        providerName: 'sendgrid',
        providerVersion: '1.1.2',
        providerVersionConstraint: '1.1.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._hostname = config.hostname;
    this._id = config.id;
    this._sendRaw = config.sendRaw;
    this._spamCheck = config.spamCheck;
    this._url = config.url;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
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

  // send_raw - computed: false, optional: true, required: false
  private _sendRaw?: boolean | cdktf.IResolvable; 
  public get sendRaw() {
    return this.getBooleanAttribute('send_raw');
  }
  public set sendRaw(value: boolean | cdktf.IResolvable) {
    this._sendRaw = value;
  }
  public resetSendRaw() {
    this._sendRaw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendRawInput() {
    return this._sendRaw;
  }

  // spam_check - computed: false, optional: true, required: false
  private _spamCheck?: boolean | cdktf.IResolvable; 
  public get spamCheck() {
    return this.getBooleanAttribute('spam_check');
  }
  public set spamCheck(value: boolean | cdktf.IResolvable) {
    this._spamCheck = value;
  }
  public resetSpamCheck() {
    this._spamCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spamCheckInput() {
    return this._spamCheck;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      hostname: cdktf.stringToTerraform(this._hostname),
      id: cdktf.stringToTerraform(this._id),
      send_raw: cdktf.booleanToTerraform(this._sendRaw),
      spam_check: cdktf.booleanToTerraform(this._spamCheck),
      url: cdktf.stringToTerraform(this._url),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
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
      send_raw: {
        value: cdktf.booleanToHclTerraform(this._sendRaw),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      spam_check: {
        value: cdktf.booleanToHclTerraform(this._spamCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
