// https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/dlp_notification_templates
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DlpNotificationTemplatesConfig extends cdktf.TerraformMetaArguments {
  /**
  * f set to true, the content that is violation is attached to the DLP notification email
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/dlp_notification_templates#attach_content DlpNotificationTemplates#attach_content}
  */
  readonly attachContent?: boolean | cdktf.IResolvable;
  /**
  * The template for the HTML message body that must be displayed in the DLP notification email
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/dlp_notification_templates#html_message DlpNotificationTemplates#html_message}
  */
  readonly htmlMessage: string;
  /**
  * The DLP notification template name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/dlp_notification_templates#name DlpNotificationTemplates#name}
  */
  readonly name: string;
  /**
  * The template for the plain text UTF-8 message body that must be displayed in the DLP notification email
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/dlp_notification_templates#plain_text_message DlpNotificationTemplates#plain_text_message}
  */
  readonly plainTextMessage: string;
  /**
  * The Subject line that is displayed within the DLP notification email
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/dlp_notification_templates#subject DlpNotificationTemplates#subject}
  */
  readonly subject: string;
  /**
  * If set to true, TLS will be enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/dlp_notification_templates#tls_enabled DlpNotificationTemplates#tls_enabled}
  */
  readonly tlsEnabled?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/dlp_notification_templates zia_dlp_notification_templates}
*/
export class DlpNotificationTemplates extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zia_dlp_notification_templates";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DlpNotificationTemplates resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DlpNotificationTemplates to import
  * @param importFromId The id of the existing DlpNotificationTemplates that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/dlp_notification_templates#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DlpNotificationTemplates to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zia_dlp_notification_templates", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/dlp_notification_templates zia_dlp_notification_templates} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DlpNotificationTemplatesConfig
  */
  public constructor(scope: Construct, id: string, config: DlpNotificationTemplatesConfig) {
    super(scope, id, {
      terraformResourceType: 'zia_dlp_notification_templates',
      terraformGeneratorMetadata: {
        providerName: 'zia',
        providerVersion: '4.6.4',
        providerVersionConstraint: '4.6.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._attachContent = config.attachContent;
    this._htmlMessage = config.htmlMessage;
    this._name = config.name;
    this._plainTextMessage = config.plainTextMessage;
    this._subject = config.subject;
    this._tlsEnabled = config.tlsEnabled;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attach_content - computed: false, optional: true, required: false
  private _attachContent?: boolean | cdktf.IResolvable; 
  public get attachContent() {
    return this.getBooleanAttribute('attach_content');
  }
  public set attachContent(value: boolean | cdktf.IResolvable) {
    this._attachContent = value;
  }
  public resetAttachContent() {
    this._attachContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachContentInput() {
    return this._attachContent;
  }

  // html_message - computed: false, optional: false, required: true
  private _htmlMessage?: string; 
  public get htmlMessage() {
    return this.getStringAttribute('html_message');
  }
  public set htmlMessage(value: string) {
    this._htmlMessage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get htmlMessageInput() {
    return this._htmlMessage;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // plain_text_message - computed: false, optional: false, required: true
  private _plainTextMessage?: string; 
  public get plainTextMessage() {
    return this.getStringAttribute('plain_text_message');
  }
  public set plainTextMessage(value: string) {
    this._plainTextMessage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get plainTextMessageInput() {
    return this._plainTextMessage;
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

  // template_id - computed: true, optional: false, required: false
  public get templateId() {
    return this.getNumberAttribute('template_id');
  }

  // tls_enabled - computed: false, optional: true, required: false
  private _tlsEnabled?: boolean | cdktf.IResolvable; 
  public get tlsEnabled() {
    return this.getBooleanAttribute('tls_enabled');
  }
  public set tlsEnabled(value: boolean | cdktf.IResolvable) {
    this._tlsEnabled = value;
  }
  public resetTlsEnabled() {
    this._tlsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsEnabledInput() {
    return this._tlsEnabled;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attach_content: cdktf.booleanToTerraform(this._attachContent),
      html_message: cdktf.stringToTerraform(this._htmlMessage),
      name: cdktf.stringToTerraform(this._name),
      plain_text_message: cdktf.stringToTerraform(this._plainTextMessage),
      subject: cdktf.stringToTerraform(this._subject),
      tls_enabled: cdktf.booleanToTerraform(this._tlsEnabled),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attach_content: {
        value: cdktf.booleanToHclTerraform(this._attachContent),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      html_message: {
        value: cdktf.stringToHclTerraform(this._htmlMessage),
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
      plain_text_message: {
        value: cdktf.stringToHclTerraform(this._plainTextMessage),
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
      tls_enabled: {
        value: cdktf.booleanToHclTerraform(this._tlsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
