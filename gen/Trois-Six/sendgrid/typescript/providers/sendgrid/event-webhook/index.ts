// https://registry.terraform.io/providers/trois-six/sendgrid/0.2.1/docs/resources/event_webhook
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EventWebhookConfig extends cdktf.TerraformMetaArguments {
  /**
  * Receiving server could not or would not accept message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/trois-six/sendgrid/0.2.1/docs/resources/event_webhook#bounce EventWebhook#bounce}
  */
  readonly bounce?: boolean | cdktf.IResolvable;
  /**
  * Recipient clicked on a link within the message. You need to enable Click Tracking for getting this type of event.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/trois-six/sendgrid/0.2.1/docs/resources/event_webhook#click EventWebhook#click}
  */
  readonly click?: boolean | cdktf.IResolvable;
  /**
  * Recipient's email server temporarily rejected message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/trois-six/sendgrid/0.2.1/docs/resources/event_webhook#deferred EventWebhook#deferred}
  */
  readonly deferred?: boolean | cdktf.IResolvable;
  /**
  * Message has been successfully delivered to the receiving server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/trois-six/sendgrid/0.2.1/docs/resources/event_webhook#delivered EventWebhook#delivered}
  */
  readonly delivered?: boolean | cdktf.IResolvable;
  /**
  * You may see the following drop reasons: Invalid SMTPAPI header, Spam Content (if spam checker app enabled), Unsubscribed Address, Bounced Address, Spam Reporting Address, Invalid, Recipient List over Package Quota.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/trois-six/sendgrid/0.2.1/docs/resources/event_webhook#dropped EventWebhook#dropped}
  */
  readonly dropped?: boolean | cdktf.IResolvable;
  /**
  * Indicates if the event webhook is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/trois-six/sendgrid/0.2.1/docs/resources/event_webhook#enabled EventWebhook#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Recipient resubscribes to specific group by updating preferences. You need to enable Subscription Tracking for getting this type of event.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/trois-six/sendgrid/0.2.1/docs/resources/event_webhook#group_resubscribe EventWebhook#group_resubscribe}
  */
  readonly groupResubscribe?: boolean | cdktf.IResolvable;
  /**
  * Recipient unsubscribe from specific group, by either direct link or updating preferences. You need to enable Subscription Tracking for getting this type of event.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/trois-six/sendgrid/0.2.1/docs/resources/event_webhook#group_unsubscribe EventWebhook#group_unsubscribe}
  */
  readonly groupUnsubscribe?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/trois-six/sendgrid/0.2.1/docs/resources/event_webhook#id EventWebhook#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The client ID Twilio SendGrid sends to your OAuth server or service provider to generate an OAuth access token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/trois-six/sendgrid/0.2.1/docs/resources/event_webhook#oauth_client_id EventWebhook#oauth_client_id}
  */
  readonly oauthClientId?: string;
  /**
  * This secret is needed only once to create an access token. SendGrid will store this secret, allowing you to update your Client ID and Token URL without passing the secret to SendGrid again. When passing data in this field, you must also include the oauth_client_id and oauth_token_url fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/trois-six/sendgrid/0.2.1/docs/resources/event_webhook#oauth_client_secret EventWebhook#oauth_client_secret}
  */
  readonly oauthClientSecret?: string;
  /**
  * The URL where Twilio SendGrid sends the Client ID and Client Secret to generate an access token. This should be your OAuth server or service provider. When passing data in this field, you must also include the oauth_client_id field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/trois-six/sendgrid/0.2.1/docs/resources/event_webhook#oauth_token_url EventWebhook#oauth_token_url}
  */
  readonly oauthTokenUrl?: string;
  /**
  * Recipient has opened the HTML message. You need to enable Open Tracking for getting this type of event.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/trois-six/sendgrid/0.2.1/docs/resources/event_webhook#open EventWebhook#open}
  */
  readonly open?: boolean | cdktf.IResolvable;
  /**
  * Message has been received and is ready to be delivered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/trois-six/sendgrid/0.2.1/docs/resources/event_webhook#processed EventWebhook#processed}
  */
  readonly processed?: boolean | cdktf.IResolvable;
  /**
  * Should the event webhook use signing?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/trois-six/sendgrid/0.2.1/docs/resources/event_webhook#signed EventWebhook#signed}
  */
  readonly signed?: boolean | cdktf.IResolvable;
  /**
  * Recipient marked a message as spam.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/trois-six/sendgrid/0.2.1/docs/resources/event_webhook#spam_report EventWebhook#spam_report}
  */
  readonly spamReport?: boolean | cdktf.IResolvable;
  /**
  * Recipient clicked on message's subscription management link. You need to enable Subscription Tracking for getting this type of event.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/trois-six/sendgrid/0.2.1/docs/resources/event_webhook#unsubscribe EventWebhook#unsubscribe}
  */
  readonly unsubscribe?: boolean | cdktf.IResolvable;
  /**
  * The public URL where you would like SendGrid to POST the data events from your email. Any emails sent with the given hostname provided (whose MX records have been updated to point to SendGrid) will be eventd and POSTed to this URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/trois-six/sendgrid/0.2.1/docs/resources/event_webhook#url EventWebhook#url}
  */
  readonly url: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/trois-six/sendgrid/0.2.1/docs/resources/event_webhook sendgrid_event_webhook}
*/
export class EventWebhook extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sendgrid_event_webhook";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EventWebhook resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EventWebhook to import
  * @param importFromId The id of the existing EventWebhook that should be imported. Refer to the {@link https://registry.terraform.io/providers/trois-six/sendgrid/0.2.1/docs/resources/event_webhook#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EventWebhook to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sendgrid_event_webhook", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/trois-six/sendgrid/0.2.1/docs/resources/event_webhook sendgrid_event_webhook} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EventWebhookConfig
  */
  public constructor(scope: Construct, id: string, config: EventWebhookConfig) {
    super(scope, id, {
      terraformResourceType: 'sendgrid_event_webhook',
      terraformGeneratorMetadata: {
        providerName: 'sendgrid',
        providerVersion: '0.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bounce = config.bounce;
    this._click = config.click;
    this._deferred = config.deferred;
    this._delivered = config.delivered;
    this._dropped = config.dropped;
    this._enabled = config.enabled;
    this._groupResubscribe = config.groupResubscribe;
    this._groupUnsubscribe = config.groupUnsubscribe;
    this._id = config.id;
    this._oauthClientId = config.oauthClientId;
    this._oauthClientSecret = config.oauthClientSecret;
    this._oauthTokenUrl = config.oauthTokenUrl;
    this._open = config.open;
    this._processed = config.processed;
    this._signed = config.signed;
    this._spamReport = config.spamReport;
    this._unsubscribe = config.unsubscribe;
    this._url = config.url;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bounce - computed: false, optional: true, required: false
  private _bounce?: boolean | cdktf.IResolvable; 
  public get bounce() {
    return this.getBooleanAttribute('bounce');
  }
  public set bounce(value: boolean | cdktf.IResolvable) {
    this._bounce = value;
  }
  public resetBounce() {
    this._bounce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bounceInput() {
    return this._bounce;
  }

  // click - computed: false, optional: true, required: false
  private _click?: boolean | cdktf.IResolvable; 
  public get click() {
    return this.getBooleanAttribute('click');
  }
  public set click(value: boolean | cdktf.IResolvable) {
    this._click = value;
  }
  public resetClick() {
    this._click = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clickInput() {
    return this._click;
  }

  // deferred - computed: false, optional: true, required: false
  private _deferred?: boolean | cdktf.IResolvable; 
  public get deferred() {
    return this.getBooleanAttribute('deferred');
  }
  public set deferred(value: boolean | cdktf.IResolvable) {
    this._deferred = value;
  }
  public resetDeferred() {
    this._deferred = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deferredInput() {
    return this._deferred;
  }

  // delivered - computed: false, optional: true, required: false
  private _delivered?: boolean | cdktf.IResolvable; 
  public get delivered() {
    return this.getBooleanAttribute('delivered');
  }
  public set delivered(value: boolean | cdktf.IResolvable) {
    this._delivered = value;
  }
  public resetDelivered() {
    this._delivered = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveredInput() {
    return this._delivered;
  }

  // dropped - computed: false, optional: true, required: false
  private _dropped?: boolean | cdktf.IResolvable; 
  public get dropped() {
    return this.getBooleanAttribute('dropped');
  }
  public set dropped(value: boolean | cdktf.IResolvable) {
    this._dropped = value;
  }
  public resetDropped() {
    this._dropped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get droppedInput() {
    return this._dropped;
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

  // group_resubscribe - computed: false, optional: true, required: false
  private _groupResubscribe?: boolean | cdktf.IResolvable; 
  public get groupResubscribe() {
    return this.getBooleanAttribute('group_resubscribe');
  }
  public set groupResubscribe(value: boolean | cdktf.IResolvable) {
    this._groupResubscribe = value;
  }
  public resetGroupResubscribe() {
    this._groupResubscribe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupResubscribeInput() {
    return this._groupResubscribe;
  }

  // group_unsubscribe - computed: false, optional: true, required: false
  private _groupUnsubscribe?: boolean | cdktf.IResolvable; 
  public get groupUnsubscribe() {
    return this.getBooleanAttribute('group_unsubscribe');
  }
  public set groupUnsubscribe(value: boolean | cdktf.IResolvable) {
    this._groupUnsubscribe = value;
  }
  public resetGroupUnsubscribe() {
    this._groupUnsubscribe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupUnsubscribeInput() {
    return this._groupUnsubscribe;
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

  // oauth_client_id - computed: false, optional: true, required: false
  private _oauthClientId?: string; 
  public get oauthClientId() {
    return this.getStringAttribute('oauth_client_id');
  }
  public set oauthClientId(value: string) {
    this._oauthClientId = value;
  }
  public resetOauthClientId() {
    this._oauthClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthClientIdInput() {
    return this._oauthClientId;
  }

  // oauth_client_secret - computed: false, optional: true, required: false
  private _oauthClientSecret?: string; 
  public get oauthClientSecret() {
    return this.getStringAttribute('oauth_client_secret');
  }
  public set oauthClientSecret(value: string) {
    this._oauthClientSecret = value;
  }
  public resetOauthClientSecret() {
    this._oauthClientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthClientSecretInput() {
    return this._oauthClientSecret;
  }

  // oauth_token_url - computed: false, optional: true, required: false
  private _oauthTokenUrl?: string; 
  public get oauthTokenUrl() {
    return this.getStringAttribute('oauth_token_url');
  }
  public set oauthTokenUrl(value: string) {
    this._oauthTokenUrl = value;
  }
  public resetOauthTokenUrl() {
    this._oauthTokenUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthTokenUrlInput() {
    return this._oauthTokenUrl;
  }

  // open - computed: false, optional: true, required: false
  private _open?: boolean | cdktf.IResolvable; 
  public get open() {
    return this.getBooleanAttribute('open');
  }
  public set open(value: boolean | cdktf.IResolvable) {
    this._open = value;
  }
  public resetOpen() {
    this._open = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openInput() {
    return this._open;
  }

  // processed - computed: false, optional: true, required: false
  private _processed?: boolean | cdktf.IResolvable; 
  public get processed() {
    return this.getBooleanAttribute('processed');
  }
  public set processed(value: boolean | cdktf.IResolvable) {
    this._processed = value;
  }
  public resetProcessed() {
    this._processed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processedInput() {
    return this._processed;
  }

  // public_key - computed: true, optional: false, required: false
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }

  // signed - computed: false, optional: true, required: false
  private _signed?: boolean | cdktf.IResolvable; 
  public get signed() {
    return this.getBooleanAttribute('signed');
  }
  public set signed(value: boolean | cdktf.IResolvable) {
    this._signed = value;
  }
  public resetSigned() {
    this._signed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signedInput() {
    return this._signed;
  }

  // spam_report - computed: false, optional: true, required: false
  private _spamReport?: boolean | cdktf.IResolvable; 
  public get spamReport() {
    return this.getBooleanAttribute('spam_report');
  }
  public set spamReport(value: boolean | cdktf.IResolvable) {
    this._spamReport = value;
  }
  public resetSpamReport() {
    this._spamReport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spamReportInput() {
    return this._spamReport;
  }

  // unsubscribe - computed: false, optional: true, required: false
  private _unsubscribe?: boolean | cdktf.IResolvable; 
  public get unsubscribe() {
    return this.getBooleanAttribute('unsubscribe');
  }
  public set unsubscribe(value: boolean | cdktf.IResolvable) {
    this._unsubscribe = value;
  }
  public resetUnsubscribe() {
    this._unsubscribe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsubscribeInput() {
    return this._unsubscribe;
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
      bounce: cdktf.booleanToTerraform(this._bounce),
      click: cdktf.booleanToTerraform(this._click),
      deferred: cdktf.booleanToTerraform(this._deferred),
      delivered: cdktf.booleanToTerraform(this._delivered),
      dropped: cdktf.booleanToTerraform(this._dropped),
      enabled: cdktf.booleanToTerraform(this._enabled),
      group_resubscribe: cdktf.booleanToTerraform(this._groupResubscribe),
      group_unsubscribe: cdktf.booleanToTerraform(this._groupUnsubscribe),
      id: cdktf.stringToTerraform(this._id),
      oauth_client_id: cdktf.stringToTerraform(this._oauthClientId),
      oauth_client_secret: cdktf.stringToTerraform(this._oauthClientSecret),
      oauth_token_url: cdktf.stringToTerraform(this._oauthTokenUrl),
      open: cdktf.booleanToTerraform(this._open),
      processed: cdktf.booleanToTerraform(this._processed),
      signed: cdktf.booleanToTerraform(this._signed),
      spam_report: cdktf.booleanToTerraform(this._spamReport),
      unsubscribe: cdktf.booleanToTerraform(this._unsubscribe),
      url: cdktf.stringToTerraform(this._url),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bounce: {
        value: cdktf.booleanToHclTerraform(this._bounce),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      click: {
        value: cdktf.booleanToHclTerraform(this._click),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      deferred: {
        value: cdktf.booleanToHclTerraform(this._deferred),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      delivered: {
        value: cdktf.booleanToHclTerraform(this._delivered),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dropped: {
        value: cdktf.booleanToHclTerraform(this._dropped),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      group_resubscribe: {
        value: cdktf.booleanToHclTerraform(this._groupResubscribe),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      group_unsubscribe: {
        value: cdktf.booleanToHclTerraform(this._groupUnsubscribe),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth_client_id: {
        value: cdktf.stringToHclTerraform(this._oauthClientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth_client_secret: {
        value: cdktf.stringToHclTerraform(this._oauthClientSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth_token_url: {
        value: cdktf.stringToHclTerraform(this._oauthTokenUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      open: {
        value: cdktf.booleanToHclTerraform(this._open),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      processed: {
        value: cdktf.booleanToHclTerraform(this._processed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      signed: {
        value: cdktf.booleanToHclTerraform(this._signed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      spam_report: {
        value: cdktf.booleanToHclTerraform(this._spamReport),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      unsubscribe: {
        value: cdktf.booleanToHclTerraform(this._unsubscribe),
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
