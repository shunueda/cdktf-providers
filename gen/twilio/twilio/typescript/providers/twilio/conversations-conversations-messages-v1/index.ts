// https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/conversations_conversations_messages_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConversationsConversationsMessagesV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/conversations_conversations_messages_v1#attributes ConversationsConversationsMessagesV1#attributes}
  */
  readonly attributes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/conversations_conversations_messages_v1#author ConversationsConversationsMessagesV1#author}
  */
  readonly author?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/conversations_conversations_messages_v1#body ConversationsConversationsMessagesV1#body}
  */
  readonly body?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/conversations_conversations_messages_v1#content_sid ConversationsConversationsMessagesV1#content_sid}
  */
  readonly contentSid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/conversations_conversations_messages_v1#content_variables ConversationsConversationsMessagesV1#content_variables}
  */
  readonly contentVariables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/conversations_conversations_messages_v1#conversation_sid ConversationsConversationsMessagesV1#conversation_sid}
  */
  readonly conversationSid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/conversations_conversations_messages_v1#date_created ConversationsConversationsMessagesV1#date_created}
  */
  readonly dateCreated?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/conversations_conversations_messages_v1#date_updated ConversationsConversationsMessagesV1#date_updated}
  */
  readonly dateUpdated?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/conversations_conversations_messages_v1#id ConversationsConversationsMessagesV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/conversations_conversations_messages_v1#media_sid ConversationsConversationsMessagesV1#media_sid}
  */
  readonly mediaSid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/conversations_conversations_messages_v1#subject ConversationsConversationsMessagesV1#subject}
  */
  readonly subject?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/conversations_conversations_messages_v1#x_twilio_webhook_enabled ConversationsConversationsMessagesV1#x_twilio_webhook_enabled}
  */
  readonly xTwilioWebhookEnabled?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/conversations_conversations_messages_v1 twilio_conversations_conversations_messages_v1}
*/
export class ConversationsConversationsMessagesV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twilio_conversations_conversations_messages_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConversationsConversationsMessagesV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConversationsConversationsMessagesV1 to import
  * @param importFromId The id of the existing ConversationsConversationsMessagesV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/conversations_conversations_messages_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConversationsConversationsMessagesV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twilio_conversations_conversations_messages_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/conversations_conversations_messages_v1 twilio_conversations_conversations_messages_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConversationsConversationsMessagesV1Config
  */
  public constructor(scope: Construct, id: string, config: ConversationsConversationsMessagesV1Config) {
    super(scope, id, {
      terraformResourceType: 'twilio_conversations_conversations_messages_v1',
      terraformGeneratorMetadata: {
        providerName: 'twilio',
        providerVersion: '0.18.46'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._attributes = config.attributes;
    this._author = config.author;
    this._body = config.body;
    this._contentSid = config.contentSid;
    this._contentVariables = config.contentVariables;
    this._conversationSid = config.conversationSid;
    this._dateCreated = config.dateCreated;
    this._dateUpdated = config.dateUpdated;
    this._id = config.id;
    this._mediaSid = config.mediaSid;
    this._subject = config.subject;
    this._xTwilioWebhookEnabled = config.xTwilioWebhookEnabled;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attributes - computed: true, optional: true, required: false
  private _attributes?: string; 
  public get attributes() {
    return this.getStringAttribute('attributes');
  }
  public set attributes(value: string) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes;
  }

  // author - computed: true, optional: true, required: false
  private _author?: string; 
  public get author() {
    return this.getStringAttribute('author');
  }
  public set author(value: string) {
    this._author = value;
  }
  public resetAuthor() {
    this._author = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorInput() {
    return this._author;
  }

  // body - computed: true, optional: true, required: false
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // content_sid - computed: true, optional: true, required: false
  private _contentSid?: string; 
  public get contentSid() {
    return this.getStringAttribute('content_sid');
  }
  public set contentSid(value: string) {
    this._contentSid = value;
  }
  public resetContentSid() {
    this._contentSid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentSidInput() {
    return this._contentSid;
  }

  // content_variables - computed: true, optional: true, required: false
  private _contentVariables?: string; 
  public get contentVariables() {
    return this.getStringAttribute('content_variables');
  }
  public set contentVariables(value: string) {
    this._contentVariables = value;
  }
  public resetContentVariables() {
    this._contentVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentVariablesInput() {
    return this._contentVariables;
  }

  // conversation_sid - computed: false, optional: false, required: true
  private _conversationSid?: string; 
  public get conversationSid() {
    return this.getStringAttribute('conversation_sid');
  }
  public set conversationSid(value: string) {
    this._conversationSid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conversationSidInput() {
    return this._conversationSid;
  }

  // date_created - computed: true, optional: true, required: false
  private _dateCreated?: string; 
  public get dateCreated() {
    return this.getStringAttribute('date_created');
  }
  public set dateCreated(value: string) {
    this._dateCreated = value;
  }
  public resetDateCreated() {
    this._dateCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateCreatedInput() {
    return this._dateCreated;
  }

  // date_updated - computed: true, optional: true, required: false
  private _dateUpdated?: string; 
  public get dateUpdated() {
    return this.getStringAttribute('date_updated');
  }
  public set dateUpdated(value: string) {
    this._dateUpdated = value;
  }
  public resetDateUpdated() {
    this._dateUpdated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateUpdatedInput() {
    return this._dateUpdated;
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

  // media_sid - computed: true, optional: true, required: false
  private _mediaSid?: string; 
  public get mediaSid() {
    return this.getStringAttribute('media_sid');
  }
  public set mediaSid(value: string) {
    this._mediaSid = value;
  }
  public resetMediaSid() {
    this._mediaSid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaSidInput() {
    return this._mediaSid;
  }

  // sid - computed: true, optional: false, required: false
  public get sid() {
    return this.getStringAttribute('sid');
  }

  // subject - computed: true, optional: true, required: false
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

  // x_twilio_webhook_enabled - computed: true, optional: true, required: false
  private _xTwilioWebhookEnabled?: string; 
  public get xTwilioWebhookEnabled() {
    return this.getStringAttribute('x_twilio_webhook_enabled');
  }
  public set xTwilioWebhookEnabled(value: string) {
    this._xTwilioWebhookEnabled = value;
  }
  public resetXTwilioWebhookEnabled() {
    this._xTwilioWebhookEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xTwilioWebhookEnabledInput() {
    return this._xTwilioWebhookEnabled;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attributes: cdktf.stringToTerraform(this._attributes),
      author: cdktf.stringToTerraform(this._author),
      body: cdktf.stringToTerraform(this._body),
      content_sid: cdktf.stringToTerraform(this._contentSid),
      content_variables: cdktf.stringToTerraform(this._contentVariables),
      conversation_sid: cdktf.stringToTerraform(this._conversationSid),
      date_created: cdktf.stringToTerraform(this._dateCreated),
      date_updated: cdktf.stringToTerraform(this._dateUpdated),
      id: cdktf.stringToTerraform(this._id),
      media_sid: cdktf.stringToTerraform(this._mediaSid),
      subject: cdktf.stringToTerraform(this._subject),
      x_twilio_webhook_enabled: cdktf.stringToTerraform(this._xTwilioWebhookEnabled),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attributes: {
        value: cdktf.stringToHclTerraform(this._attributes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      author: {
        value: cdktf.stringToHclTerraform(this._author),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      body: {
        value: cdktf.stringToHclTerraform(this._body),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content_sid: {
        value: cdktf.stringToHclTerraform(this._contentSid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content_variables: {
        value: cdktf.stringToHclTerraform(this._contentVariables),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      conversation_sid: {
        value: cdktf.stringToHclTerraform(this._conversationSid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      date_created: {
        value: cdktf.stringToHclTerraform(this._dateCreated),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      date_updated: {
        value: cdktf.stringToHclTerraform(this._dateUpdated),
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
      media_sid: {
        value: cdktf.stringToHclTerraform(this._mediaSid),
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
      x_twilio_webhook_enabled: {
        value: cdktf.stringToHclTerraform(this._xTwilioWebhookEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
