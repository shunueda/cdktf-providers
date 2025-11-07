// https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_messages
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiAccountsMessagesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_messages#address_retention ApiAccountsMessages#address_retention}
  */
  readonly addressRetention?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_messages#application_sid ApiAccountsMessages#application_sid}
  */
  readonly applicationSid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_messages#attempt ApiAccountsMessages#attempt}
  */
  readonly attempt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_messages#body ApiAccountsMessages#body}
  */
  readonly body?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_messages#content_retention ApiAccountsMessages#content_retention}
  */
  readonly contentRetention?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_messages#content_sid ApiAccountsMessages#content_sid}
  */
  readonly contentSid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_messages#content_variables ApiAccountsMessages#content_variables}
  */
  readonly contentVariables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_messages#force_delivery ApiAccountsMessages#force_delivery}
  */
  readonly forceDelivery?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_messages#from ApiAccountsMessages#from}
  */
  readonly from?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_messages#id ApiAccountsMessages#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_messages#max_price ApiAccountsMessages#max_price}
  */
  readonly maxPrice?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_messages#media_url ApiAccountsMessages#media_url}
  */
  readonly mediaUrl?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_messages#messaging_service_sid ApiAccountsMessages#messaging_service_sid}
  */
  readonly messagingServiceSid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_messages#path_account_sid ApiAccountsMessages#path_account_sid}
  */
  readonly pathAccountSid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_messages#persistent_action ApiAccountsMessages#persistent_action}
  */
  readonly persistentAction?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_messages#provide_feedback ApiAccountsMessages#provide_feedback}
  */
  readonly provideFeedback?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_messages#risk_check ApiAccountsMessages#risk_check}
  */
  readonly riskCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_messages#schedule_type ApiAccountsMessages#schedule_type}
  */
  readonly scheduleType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_messages#send_as_mms ApiAccountsMessages#send_as_mms}
  */
  readonly sendAsMms?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_messages#send_at ApiAccountsMessages#send_at}
  */
  readonly sendAt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_messages#shorten_urls ApiAccountsMessages#shorten_urls}
  */
  readonly shortenUrls?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_messages#smart_encoded ApiAccountsMessages#smart_encoded}
  */
  readonly smartEncoded?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_messages#status ApiAccountsMessages#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_messages#status_callback ApiAccountsMessages#status_callback}
  */
  readonly statusCallback?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_messages#to ApiAccountsMessages#to}
  */
  readonly to: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_messages#validity_period ApiAccountsMessages#validity_period}
  */
  readonly validityPeriod?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_messages twilio_api_accounts_messages}
*/
export class ApiAccountsMessages extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twilio_api_accounts_messages";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApiAccountsMessages resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiAccountsMessages to import
  * @param importFromId The id of the existing ApiAccountsMessages that should be imported. Refer to the {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_messages#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiAccountsMessages to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twilio_api_accounts_messages", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_messages twilio_api_accounts_messages} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiAccountsMessagesConfig
  */
  public constructor(scope: Construct, id: string, config: ApiAccountsMessagesConfig) {
    super(scope, id, {
      terraformResourceType: 'twilio_api_accounts_messages',
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
    this._addressRetention = config.addressRetention;
    this._applicationSid = config.applicationSid;
    this._attempt = config.attempt;
    this._body = config.body;
    this._contentRetention = config.contentRetention;
    this._contentSid = config.contentSid;
    this._contentVariables = config.contentVariables;
    this._forceDelivery = config.forceDelivery;
    this._from = config.from;
    this._id = config.id;
    this._maxPrice = config.maxPrice;
    this._mediaUrl = config.mediaUrl;
    this._messagingServiceSid = config.messagingServiceSid;
    this._pathAccountSid = config.pathAccountSid;
    this._persistentAction = config.persistentAction;
    this._provideFeedback = config.provideFeedback;
    this._riskCheck = config.riskCheck;
    this._scheduleType = config.scheduleType;
    this._sendAsMms = config.sendAsMms;
    this._sendAt = config.sendAt;
    this._shortenUrls = config.shortenUrls;
    this._smartEncoded = config.smartEncoded;
    this._status = config.status;
    this._statusCallback = config.statusCallback;
    this._to = config.to;
    this._validityPeriod = config.validityPeriod;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_retention - computed: true, optional: true, required: false
  private _addressRetention?: string; 
  public get addressRetention() {
    return this.getStringAttribute('address_retention');
  }
  public set addressRetention(value: string) {
    this._addressRetention = value;
  }
  public resetAddressRetention() {
    this._addressRetention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressRetentionInput() {
    return this._addressRetention;
  }

  // application_sid - computed: true, optional: true, required: false
  private _applicationSid?: string; 
  public get applicationSid() {
    return this.getStringAttribute('application_sid');
  }
  public set applicationSid(value: string) {
    this._applicationSid = value;
  }
  public resetApplicationSid() {
    this._applicationSid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationSidInput() {
    return this._applicationSid;
  }

  // attempt - computed: true, optional: true, required: false
  private _attempt?: number; 
  public get attempt() {
    return this.getNumberAttribute('attempt');
  }
  public set attempt(value: number) {
    this._attempt = value;
  }
  public resetAttempt() {
    this._attempt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attemptInput() {
    return this._attempt;
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

  // content_retention - computed: true, optional: true, required: false
  private _contentRetention?: string; 
  public get contentRetention() {
    return this.getStringAttribute('content_retention');
  }
  public set contentRetention(value: string) {
    this._contentRetention = value;
  }
  public resetContentRetention() {
    this._contentRetention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentRetentionInput() {
    return this._contentRetention;
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

  // force_delivery - computed: true, optional: true, required: false
  private _forceDelivery?: boolean | cdktf.IResolvable; 
  public get forceDelivery() {
    return this.getBooleanAttribute('force_delivery');
  }
  public set forceDelivery(value: boolean | cdktf.IResolvable) {
    this._forceDelivery = value;
  }
  public resetForceDelivery() {
    this._forceDelivery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDeliveryInput() {
    return this._forceDelivery;
  }

  // from - computed: true, optional: true, required: false
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

  // max_price - computed: true, optional: true, required: false
  private _maxPrice?: number; 
  public get maxPrice() {
    return this.getNumberAttribute('max_price');
  }
  public set maxPrice(value: number) {
    this._maxPrice = value;
  }
  public resetMaxPrice() {
    this._maxPrice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPriceInput() {
    return this._maxPrice;
  }

  // media_url - computed: true, optional: true, required: false
  private _mediaUrl?: string[]; 
  public get mediaUrl() {
    return this.getListAttribute('media_url');
  }
  public set mediaUrl(value: string[]) {
    this._mediaUrl = value;
  }
  public resetMediaUrl() {
    this._mediaUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaUrlInput() {
    return this._mediaUrl;
  }

  // messaging_service_sid - computed: true, optional: true, required: false
  private _messagingServiceSid?: string; 
  public get messagingServiceSid() {
    return this.getStringAttribute('messaging_service_sid');
  }
  public set messagingServiceSid(value: string) {
    this._messagingServiceSid = value;
  }
  public resetMessagingServiceSid() {
    this._messagingServiceSid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messagingServiceSidInput() {
    return this._messagingServiceSid;
  }

  // path_account_sid - computed: true, optional: true, required: false
  private _pathAccountSid?: string; 
  public get pathAccountSid() {
    return this.getStringAttribute('path_account_sid');
  }
  public set pathAccountSid(value: string) {
    this._pathAccountSid = value;
  }
  public resetPathAccountSid() {
    this._pathAccountSid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathAccountSidInput() {
    return this._pathAccountSid;
  }

  // persistent_action - computed: true, optional: true, required: false
  private _persistentAction?: string[]; 
  public get persistentAction() {
    return this.getListAttribute('persistent_action');
  }
  public set persistentAction(value: string[]) {
    this._persistentAction = value;
  }
  public resetPersistentAction() {
    this._persistentAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentActionInput() {
    return this._persistentAction;
  }

  // provide_feedback - computed: true, optional: true, required: false
  private _provideFeedback?: boolean | cdktf.IResolvable; 
  public get provideFeedback() {
    return this.getBooleanAttribute('provide_feedback');
  }
  public set provideFeedback(value: boolean | cdktf.IResolvable) {
    this._provideFeedback = value;
  }
  public resetProvideFeedback() {
    this._provideFeedback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provideFeedbackInput() {
    return this._provideFeedback;
  }

  // risk_check - computed: true, optional: true, required: false
  private _riskCheck?: string; 
  public get riskCheck() {
    return this.getStringAttribute('risk_check');
  }
  public set riskCheck(value: string) {
    this._riskCheck = value;
  }
  public resetRiskCheck() {
    this._riskCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get riskCheckInput() {
    return this._riskCheck;
  }

  // schedule_type - computed: true, optional: true, required: false
  private _scheduleType?: string; 
  public get scheduleType() {
    return this.getStringAttribute('schedule_type');
  }
  public set scheduleType(value: string) {
    this._scheduleType = value;
  }
  public resetScheduleType() {
    this._scheduleType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleTypeInput() {
    return this._scheduleType;
  }

  // send_as_mms - computed: true, optional: true, required: false
  private _sendAsMms?: boolean | cdktf.IResolvable; 
  public get sendAsMms() {
    return this.getBooleanAttribute('send_as_mms');
  }
  public set sendAsMms(value: boolean | cdktf.IResolvable) {
    this._sendAsMms = value;
  }
  public resetSendAsMms() {
    this._sendAsMms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendAsMmsInput() {
    return this._sendAsMms;
  }

  // send_at - computed: true, optional: true, required: false
  private _sendAt?: string; 
  public get sendAt() {
    return this.getStringAttribute('send_at');
  }
  public set sendAt(value: string) {
    this._sendAt = value;
  }
  public resetSendAt() {
    this._sendAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendAtInput() {
    return this._sendAt;
  }

  // shorten_urls - computed: true, optional: true, required: false
  private _shortenUrls?: boolean | cdktf.IResolvable; 
  public get shortenUrls() {
    return this.getBooleanAttribute('shorten_urls');
  }
  public set shortenUrls(value: boolean | cdktf.IResolvable) {
    this._shortenUrls = value;
  }
  public resetShortenUrls() {
    this._shortenUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shortenUrlsInput() {
    return this._shortenUrls;
  }

  // sid - computed: true, optional: false, required: false
  public get sid() {
    return this.getStringAttribute('sid');
  }

  // smart_encoded - computed: true, optional: true, required: false
  private _smartEncoded?: boolean | cdktf.IResolvable; 
  public get smartEncoded() {
    return this.getBooleanAttribute('smart_encoded');
  }
  public set smartEncoded(value: boolean | cdktf.IResolvable) {
    this._smartEncoded = value;
  }
  public resetSmartEncoded() {
    this._smartEncoded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smartEncodedInput() {
    return this._smartEncoded;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // status_callback - computed: true, optional: true, required: false
  private _statusCallback?: string; 
  public get statusCallback() {
    return this.getStringAttribute('status_callback');
  }
  public set statusCallback(value: string) {
    this._statusCallback = value;
  }
  public resetStatusCallback() {
    this._statusCallback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCallbackInput() {
    return this._statusCallback;
  }

  // to - computed: false, optional: false, required: true
  private _to?: string; 
  public get to() {
    return this.getStringAttribute('to');
  }
  public set to(value: string) {
    this._to = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to;
  }

  // validity_period - computed: true, optional: true, required: false
  private _validityPeriod?: number; 
  public get validityPeriod() {
    return this.getNumberAttribute('validity_period');
  }
  public set validityPeriod(value: number) {
    this._validityPeriod = value;
  }
  public resetValidityPeriod() {
    this._validityPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validityPeriodInput() {
    return this._validityPeriod;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address_retention: cdktf.stringToTerraform(this._addressRetention),
      application_sid: cdktf.stringToTerraform(this._applicationSid),
      attempt: cdktf.numberToTerraform(this._attempt),
      body: cdktf.stringToTerraform(this._body),
      content_retention: cdktf.stringToTerraform(this._contentRetention),
      content_sid: cdktf.stringToTerraform(this._contentSid),
      content_variables: cdktf.stringToTerraform(this._contentVariables),
      force_delivery: cdktf.booleanToTerraform(this._forceDelivery),
      from: cdktf.stringToTerraform(this._from),
      id: cdktf.stringToTerraform(this._id),
      max_price: cdktf.numberToTerraform(this._maxPrice),
      media_url: cdktf.listMapper(cdktf.stringToTerraform, false)(this._mediaUrl),
      messaging_service_sid: cdktf.stringToTerraform(this._messagingServiceSid),
      path_account_sid: cdktf.stringToTerraform(this._pathAccountSid),
      persistent_action: cdktf.listMapper(cdktf.stringToTerraform, false)(this._persistentAction),
      provide_feedback: cdktf.booleanToTerraform(this._provideFeedback),
      risk_check: cdktf.stringToTerraform(this._riskCheck),
      schedule_type: cdktf.stringToTerraform(this._scheduleType),
      send_as_mms: cdktf.booleanToTerraform(this._sendAsMms),
      send_at: cdktf.stringToTerraform(this._sendAt),
      shorten_urls: cdktf.booleanToTerraform(this._shortenUrls),
      smart_encoded: cdktf.booleanToTerraform(this._smartEncoded),
      status: cdktf.stringToTerraform(this._status),
      status_callback: cdktf.stringToTerraform(this._statusCallback),
      to: cdktf.stringToTerraform(this._to),
      validity_period: cdktf.numberToTerraform(this._validityPeriod),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address_retention: {
        value: cdktf.stringToHclTerraform(this._addressRetention),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      application_sid: {
        value: cdktf.stringToHclTerraform(this._applicationSid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attempt: {
        value: cdktf.numberToHclTerraform(this._attempt),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      body: {
        value: cdktf.stringToHclTerraform(this._body),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content_retention: {
        value: cdktf.stringToHclTerraform(this._contentRetention),
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
      force_delivery: {
        value: cdktf.booleanToHclTerraform(this._forceDelivery),
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
      max_price: {
        value: cdktf.numberToHclTerraform(this._maxPrice),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      media_url: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._mediaUrl),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      messaging_service_sid: {
        value: cdktf.stringToHclTerraform(this._messagingServiceSid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      path_account_sid: {
        value: cdktf.stringToHclTerraform(this._pathAccountSid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      persistent_action: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._persistentAction),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      provide_feedback: {
        value: cdktf.booleanToHclTerraform(this._provideFeedback),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      risk_check: {
        value: cdktf.stringToHclTerraform(this._riskCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule_type: {
        value: cdktf.stringToHclTerraform(this._scheduleType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      send_as_mms: {
        value: cdktf.booleanToHclTerraform(this._sendAsMms),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      send_at: {
        value: cdktf.stringToHclTerraform(this._sendAt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shorten_urls: {
        value: cdktf.booleanToHclTerraform(this._shortenUrls),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      smart_encoded: {
        value: cdktf.booleanToHclTerraform(this._smartEncoded),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status_callback: {
        value: cdktf.stringToHclTerraform(this._statusCallback),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      to: {
        value: cdktf.stringToHclTerraform(this._to),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      validity_period: {
        value: cdktf.numberToHclTerraform(this._validityPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
