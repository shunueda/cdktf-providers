// https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/webhook
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WebhookConfig extends cdktf.TerraformMetaArguments {
  /**
  * The URL to which the webhook will send requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/webhook#callout_url Webhook#callout_url}
  */
  readonly calloutUrl: string;
  /**
  * Description of the webhook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/webhook#description Webhook#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/webhook#id Webhook#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the webhook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/webhook#name Webhook#name}
  */
  readonly name: string;
  /**
  * Set of user group IDs that own the webhook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/webhook#owner_user_group_ids Webhook#owner_user_group_ids}
  */
  readonly ownerUserGroupIds?: number[];
  /**
  * Set of user IDs that own the webhook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/webhook#owner_user_ids Webhook#owner_user_ids}
  */
  readonly ownerUserIds?: number[];
  /**
  * The request body to be sent with the webhook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/webhook#request_body Webhook#request_body}
  */
  readonly requestBody?: string;
  /**
  * HTTP headers to use when the webhook is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/webhook#request_headers Webhook#request_headers}
  */
  readonly requestHeaders?: string;
  /**
  * HTTP method to be used for the webhook (GET, POST, etc.).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/webhook#request_method Webhook#request_method}
  */
  readonly requestMethod: string;
  /**
  * Whether the webhook should send secure information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/webhook#should_send_secure_info Webhook#should_send_secure_info}
  */
  readonly shouldSendSecureInfo?: boolean | cdktf.IResolvable;
  /**
  * Whether to skip SSL verification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/webhook#skip_ssl Webhook#skip_ssl}
  */
  readonly skipSsl?: boolean | cdktf.IResolvable;
  /**
  * The number of seconds the application will wait before considering the webhook 'timed out'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/webhook#timeout_in_seconds Webhook#timeout_in_seconds}
  */
  readonly timeoutInSeconds: number;
  /**
  * Whether to use request headers in the webhook request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/webhook#use_request_headers Webhook#use_request_headers}
  */
  readonly useRequestHeaders?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/webhook kion_webhook}
*/
export class Webhook extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kion_webhook";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Webhook resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Webhook to import
  * @param importFromId The id of the existing Webhook that should be imported. Refer to the {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/webhook#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Webhook to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "kion_webhook", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/webhook kion_webhook} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WebhookConfig
  */
  public constructor(scope: Construct, id: string, config: WebhookConfig) {
    super(scope, id, {
      terraformResourceType: 'kion_webhook',
      terraformGeneratorMetadata: {
        providerName: 'kion',
        providerVersion: '0.3.29'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._calloutUrl = config.calloutUrl;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._ownerUserGroupIds = config.ownerUserGroupIds;
    this._ownerUserIds = config.ownerUserIds;
    this._requestBody = config.requestBody;
    this._requestHeaders = config.requestHeaders;
    this._requestMethod = config.requestMethod;
    this._shouldSendSecureInfo = config.shouldSendSecureInfo;
    this._skipSsl = config.skipSsl;
    this._timeoutInSeconds = config.timeoutInSeconds;
    this._useRequestHeaders = config.useRequestHeaders;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // callout_url - computed: false, optional: false, required: true
  private _calloutUrl?: string; 
  public get calloutUrl() {
    return this.getStringAttribute('callout_url');
  }
  public set calloutUrl(value: string) {
    this._calloutUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get calloutUrlInput() {
    return this._calloutUrl;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // owner_user_group_ids - computed: false, optional: true, required: false
  private _ownerUserGroupIds?: number[]; 
  public get ownerUserGroupIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('owner_user_group_ids')));
  }
  public set ownerUserGroupIds(value: number[]) {
    this._ownerUserGroupIds = value;
  }
  public resetOwnerUserGroupIds() {
    this._ownerUserGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerUserGroupIdsInput() {
    return this._ownerUserGroupIds;
  }

  // owner_user_ids - computed: false, optional: true, required: false
  private _ownerUserIds?: number[]; 
  public get ownerUserIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('owner_user_ids')));
  }
  public set ownerUserIds(value: number[]) {
    this._ownerUserIds = value;
  }
  public resetOwnerUserIds() {
    this._ownerUserIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerUserIdsInput() {
    return this._ownerUserIds;
  }

  // request_body - computed: false, optional: true, required: false
  private _requestBody?: string; 
  public get requestBody() {
    return this.getStringAttribute('request_body');
  }
  public set requestBody(value: string) {
    this._requestBody = value;
  }
  public resetRequestBody() {
    this._requestBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestBodyInput() {
    return this._requestBody;
  }

  // request_headers - computed: false, optional: true, required: false
  private _requestHeaders?: string; 
  public get requestHeaders() {
    return this.getStringAttribute('request_headers');
  }
  public set requestHeaders(value: string) {
    this._requestHeaders = value;
  }
  public resetRequestHeaders() {
    this._requestHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersInput() {
    return this._requestHeaders;
  }

  // request_method - computed: false, optional: false, required: true
  private _requestMethod?: string; 
  public get requestMethod() {
    return this.getStringAttribute('request_method');
  }
  public set requestMethod(value: string) {
    this._requestMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMethodInput() {
    return this._requestMethod;
  }

  // should_send_secure_info - computed: false, optional: true, required: false
  private _shouldSendSecureInfo?: boolean | cdktf.IResolvable; 
  public get shouldSendSecureInfo() {
    return this.getBooleanAttribute('should_send_secure_info');
  }
  public set shouldSendSecureInfo(value: boolean | cdktf.IResolvable) {
    this._shouldSendSecureInfo = value;
  }
  public resetShouldSendSecureInfo() {
    this._shouldSendSecureInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldSendSecureInfoInput() {
    return this._shouldSendSecureInfo;
  }

  // skip_ssl - computed: false, optional: true, required: false
  private _skipSsl?: boolean | cdktf.IResolvable; 
  public get skipSsl() {
    return this.getBooleanAttribute('skip_ssl');
  }
  public set skipSsl(value: boolean | cdktf.IResolvable) {
    this._skipSsl = value;
  }
  public resetSkipSsl() {
    this._skipSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipSslInput() {
    return this._skipSsl;
  }

  // timeout_in_seconds - computed: false, optional: false, required: true
  private _timeoutInSeconds?: number; 
  public get timeoutInSeconds() {
    return this.getNumberAttribute('timeout_in_seconds');
  }
  public set timeoutInSeconds(value: number) {
    this._timeoutInSeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInSecondsInput() {
    return this._timeoutInSeconds;
  }

  // use_request_headers - computed: false, optional: true, required: false
  private _useRequestHeaders?: boolean | cdktf.IResolvable; 
  public get useRequestHeaders() {
    return this.getBooleanAttribute('use_request_headers');
  }
  public set useRequestHeaders(value: boolean | cdktf.IResolvable) {
    this._useRequestHeaders = value;
  }
  public resetUseRequestHeaders() {
    this._useRequestHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useRequestHeadersInput() {
    return this._useRequestHeaders;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      callout_url: cdktf.stringToTerraform(this._calloutUrl),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      owner_user_group_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._ownerUserGroupIds),
      owner_user_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._ownerUserIds),
      request_body: cdktf.stringToTerraform(this._requestBody),
      request_headers: cdktf.stringToTerraform(this._requestHeaders),
      request_method: cdktf.stringToTerraform(this._requestMethod),
      should_send_secure_info: cdktf.booleanToTerraform(this._shouldSendSecureInfo),
      skip_ssl: cdktf.booleanToTerraform(this._skipSsl),
      timeout_in_seconds: cdktf.numberToTerraform(this._timeoutInSeconds),
      use_request_headers: cdktf.booleanToTerraform(this._useRequestHeaders),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      callout_url: {
        value: cdktf.stringToHclTerraform(this._calloutUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owner_user_group_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._ownerUserGroupIds),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      owner_user_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._ownerUserIds),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      request_body: {
        value: cdktf.stringToHclTerraform(this._requestBody),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_headers: {
        value: cdktf.stringToHclTerraform(this._requestHeaders),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_method: {
        value: cdktf.stringToHclTerraform(this._requestMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      should_send_secure_info: {
        value: cdktf.booleanToHclTerraform(this._shouldSendSecureInfo),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      skip_ssl: {
        value: cdktf.booleanToHclTerraform(this._skipSsl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timeout_in_seconds: {
        value: cdktf.numberToHclTerraform(this._timeoutInSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      use_request_headers: {
        value: cdktf.booleanToHclTerraform(this._useRequestHeaders),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
