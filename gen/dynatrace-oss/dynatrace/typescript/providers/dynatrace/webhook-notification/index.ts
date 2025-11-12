// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/webhook_notification
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WebhookNotificationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The configuration is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/webhook_notification#active WebhookNotification#active}
  */
  readonly active: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/webhook_notification#id WebhookNotification#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Accept any, including self-signed and invalid, SSL certificate (`true`) or only trusted (`false`) certificates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/webhook_notification#insecure WebhookNotification#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * The ID of these settings when referred to from resources requiring the REST API V1 keys
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/webhook_notification#legacy_id WebhookNotification#legacy_id}
  */
  readonly legacyId?: string;
  /**
  * The name of the notification configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/webhook_notification#name WebhookNotification#name}
  */
  readonly name: string;
  /**
  * Send email if problem is closed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/webhook_notification#notify_closed_problems WebhookNotification#notify_closed_problems}
  */
  readonly notifyClosedProblems?: boolean | cdktf.IResolvable;
  /**
  * Call webhook if new events merge into existing problems
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/webhook_notification#notify_event_merges WebhookNotification#notify_event_merges}
  */
  readonly notifyEventMerges?: boolean | cdktf.IResolvable;
  /**
  * The content of the notification message. You can use the following placeholders:  * `{ImpactedEntities}`: Details about the entities impacted by the problem in form of a JSON array.  * `{ImpactedEntity}`: The entity impacted by the problem or *X* impacted entities.  * `{PID}`: The ID of the reported problem.  * `{ProblemDetailsHTML}`: All problem event details, including root cause, as an HTML-formatted string.  * `{ProblemDetailsJSON}`: All problem event details, including root cause, as a JSON object.  * `{ProblemDetailsMarkdown}`: All problem event details, including root cause, as a [Markdown-formatted](https://www.markdownguide.org/cheat-sheet/) string.  * `{ProblemDetailsText}`: All problem event details, including root cause, as a text-formatted string.  * `{ProblemID}`: The display number of the reported problem.  * `{ProblemImpact}`: The [impact level](https://www.dynatrace.com/support/help/shortlink/impact-analysis) of the problem. Possible values are `APPLICATION`, `SERVICE`, and `INFRASTRUCTURE`.  * `{ProblemSeverity}`: The [severity level](https://www.dynatrace.com/support/help/shortlink/event-types) of the problem. Possible values are `AVAILABILITY`, `ERROR`, `PERFORMANCE`, `RESOURCE_CONTENTION`, and `CUSTOM_ALERT`.  * `{ProblemTitle}`: A short description of the problem.  * `{ProblemURL}`: The URL of the problem within Dynatrace.  * `{State}`: The state of the problem. Possible values are `OPEN` and `RESOLVED`.  * `{Tags}`: The list of tags that are defined for all impacted entities, separated by commas
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/webhook_notification#payload WebhookNotification#payload}
  */
  readonly payload: string;
  /**
  * The ID of the associated alerting profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/webhook_notification#profile WebhookNotification#profile}
  */
  readonly profile: string;
  /**
  * The secret URL of the webhook endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/webhook_notification#secret_url WebhookNotification#secret_url}
  */
  readonly secretUrl?: string;
  /**
  * The URL of the WebHook endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/webhook_notification#url WebhookNotification#url}
  */
  readonly url?: string;
  /**
  * Secret webhook URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/webhook_notification#url_contains_secret WebhookNotification#url_contains_secret}
  */
  readonly urlContainsSecret?: boolean | cdktf.IResolvable;
  /**
  * Use OAuth 2.0 for authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/webhook_notification#use_oauth_2 WebhookNotification#use_oauth_2}
  */
  readonly useOauth2?: boolean | cdktf.IResolvable;
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/webhook_notification#headers WebhookNotification#headers}
  */
  readonly headers?: WebhookNotificationHeaders;
  /**
  * oauth_2_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/webhook_notification#oauth_2_credentials WebhookNotification#oauth_2_credentials}
  */
  readonly oauth2Credentials?: WebhookNotificationOauth2Credentials;
}
export interface WebhookNotificationHeadersHeader {
  /**
  * The name of the HTTP header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/webhook_notification#name WebhookNotification#name}
  */
  readonly name: string;
  /**
  * The value of the HTTP header as a sensitive property. May contain an empty value. `secret_value` and `value` are mutually exclusive. Only one of those two is allowed to be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/webhook_notification#secret_value WebhookNotification#secret_value}
  */
  readonly secretValue?: string;
  /**
  * The value of the HTTP header. May contain an empty value. `secret_value` and `value` are mutually exclusive. Only one of those two is allowed to be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/webhook_notification#value WebhookNotification#value}
  */
  readonly value?: string;
}

export function webhookNotificationHeadersHeaderToTerraform(struct?: WebhookNotificationHeadersHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    secret_value: cdktf.stringToTerraform(struct!.secretValue),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function webhookNotificationHeadersHeaderToHclTerraform(struct?: WebhookNotificationHeadersHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_value: {
      value: cdktf.stringToHclTerraform(struct!.secretValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebhookNotificationHeadersHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): WebhookNotificationHeadersHeader | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._secretValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretValue = this._secretValue;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebhookNotificationHeadersHeader | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._secretValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._secretValue = value.secretValue;
      this._value = value.value;
    }
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

  // secret_value - computed: false, optional: true, required: false
  private _secretValue?: string; 
  public get secretValue() {
    return this.getStringAttribute('secret_value');
  }
  public set secretValue(value: string) {
    this._secretValue = value;
  }
  public resetSecretValue() {
    this._secretValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretValueInput() {
    return this._secretValue;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class WebhookNotificationHeadersHeaderList extends cdktf.ComplexList {
  public internalValue? : WebhookNotificationHeadersHeader[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): WebhookNotificationHeadersHeaderOutputReference {
    return new WebhookNotificationHeadersHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebhookNotificationHeaders {
  /**
  * header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/webhook_notification#header WebhookNotification#header}
  */
  readonly header: WebhookNotificationHeadersHeader[] | cdktf.IResolvable;
}

export function webhookNotificationHeadersToTerraform(struct?: WebhookNotificationHeadersOutputReference | WebhookNotificationHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header: cdktf.listMapper(webhookNotificationHeadersHeaderToTerraform, true)(struct!.header),
  }
}


export function webhookNotificationHeadersToHclTerraform(struct?: WebhookNotificationHeadersOutputReference | WebhookNotificationHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header: {
      value: cdktf.listMapperHcl(webhookNotificationHeadersHeaderToHclTerraform, true)(struct!.header),
      isBlock: true,
      type: "set",
      storageClassType: "WebhookNotificationHeadersHeaderList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebhookNotificationHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebhookNotificationHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._header?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebhookNotificationHeaders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._header.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._header.internalValue = value.header;
    }
  }

  // header - computed: false, optional: false, required: true
  private _header = new WebhookNotificationHeadersHeaderList(this, "header", true);
  public get header() {
    return this._header;
  }
  public putHeader(value: WebhookNotificationHeadersHeader[] | cdktf.IResolvable) {
    this._header.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header.internalValue;
  }
}
export interface WebhookNotificationOauth2Credentials {
  /**
  * Access token URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/webhook_notification#access_token_url WebhookNotification#access_token_url}
  */
  readonly accessTokenUrl: string;
  /**
  * If false, the client credentials are included in the HTTP request body.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/webhook_notification#authenticate_via_request_header WebhookNotification#authenticate_via_request_header}
  */
  readonly authenticateViaRequestHeader?: boolean | cdktf.IResolvable;
  /**
  * Client ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/webhook_notification#client_id WebhookNotification#client_id}
  */
  readonly clientId: string;
  /**
  * Client secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/webhook_notification#client_secret WebhookNotification#client_secret}
  */
  readonly clientSecret: string;
  /**
  * The scope of access you are requesting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/webhook_notification#scope WebhookNotification#scope}
  */
  readonly scope?: string;
}

export function webhookNotificationOauth2CredentialsToTerraform(struct?: WebhookNotificationOauth2CredentialsOutputReference | WebhookNotificationOauth2Credentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_token_url: cdktf.stringToTerraform(struct!.accessTokenUrl),
    authenticate_via_request_header: cdktf.booleanToTerraform(struct!.authenticateViaRequestHeader),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    scope: cdktf.stringToTerraform(struct!.scope),
  }
}


export function webhookNotificationOauth2CredentialsToHclTerraform(struct?: WebhookNotificationOauth2CredentialsOutputReference | WebhookNotificationOauth2Credentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_token_url: {
      value: cdktf.stringToHclTerraform(struct!.accessTokenUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authenticate_via_request_header: {
      value: cdktf.booleanToHclTerraform(struct!.authenticateViaRequestHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebhookNotificationOauth2CredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebhookNotificationOauth2Credentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessTokenUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessTokenUrl = this._accessTokenUrl;
    }
    if (this._authenticateViaRequestHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticateViaRequestHeader = this._authenticateViaRequestHeader;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebhookNotificationOauth2Credentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessTokenUrl = undefined;
      this._authenticateViaRequestHeader = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._scope = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessTokenUrl = value.accessTokenUrl;
      this._authenticateViaRequestHeader = value.authenticateViaRequestHeader;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._scope = value.scope;
    }
  }

  // access_token_url - computed: false, optional: false, required: true
  private _accessTokenUrl?: string; 
  public get accessTokenUrl() {
    return this.getStringAttribute('access_token_url');
  }
  public set accessTokenUrl(value: string) {
    this._accessTokenUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenUrlInput() {
    return this._accessTokenUrl;
  }

  // authenticate_via_request_header - computed: false, optional: true, required: false
  private _authenticateViaRequestHeader?: boolean | cdktf.IResolvable; 
  public get authenticateViaRequestHeader() {
    return this.getBooleanAttribute('authenticate_via_request_header');
  }
  public set authenticateViaRequestHeader(value: boolean | cdktf.IResolvable) {
    this._authenticateViaRequestHeader = value;
  }
  public resetAuthenticateViaRequestHeader() {
    this._authenticateViaRequestHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticateViaRequestHeaderInput() {
    return this._authenticateViaRequestHeader;
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: false, required: true
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/webhook_notification dynatrace_webhook_notification}
*/
export class WebhookNotification extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_webhook_notification";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WebhookNotification resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WebhookNotification to import
  * @param importFromId The id of the existing WebhookNotification that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/webhook_notification#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WebhookNotification to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_webhook_notification", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/webhook_notification dynatrace_webhook_notification} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WebhookNotificationConfig
  */
  public constructor(scope: Construct, id: string, config: WebhookNotificationConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_webhook_notification',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.87.1',
        providerVersionConstraint: '1.87.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._active = config.active;
    this._id = config.id;
    this._insecure = config.insecure;
    this._legacyId = config.legacyId;
    this._name = config.name;
    this._notifyClosedProblems = config.notifyClosedProblems;
    this._notifyEventMerges = config.notifyEventMerges;
    this._payload = config.payload;
    this._profile = config.profile;
    this._secretUrl = config.secretUrl;
    this._url = config.url;
    this._urlContainsSecret = config.urlContainsSecret;
    this._useOauth2 = config.useOauth2;
    this._headers.internalValue = config.headers;
    this._oauth2Credentials.internalValue = config.oauth2Credentials;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active - computed: false, optional: false, required: true
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
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

  // insecure - computed: false, optional: true, required: false
  private _insecure?: boolean | cdktf.IResolvable; 
  public get insecure() {
    return this.getBooleanAttribute('insecure');
  }
  public set insecure(value: boolean | cdktf.IResolvable) {
    this._insecure = value;
  }
  public resetInsecure() {
    this._insecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureInput() {
    return this._insecure;
  }

  // legacy_id - computed: true, optional: true, required: false
  private _legacyId?: string; 
  public get legacyId() {
    return this.getStringAttribute('legacy_id');
  }
  public set legacyId(value: string) {
    this._legacyId = value;
  }
  public resetLegacyId() {
    this._legacyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get legacyIdInput() {
    return this._legacyId;
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

  // notify_closed_problems - computed: false, optional: true, required: false
  private _notifyClosedProblems?: boolean | cdktf.IResolvable; 
  public get notifyClosedProblems() {
    return this.getBooleanAttribute('notify_closed_problems');
  }
  public set notifyClosedProblems(value: boolean | cdktf.IResolvable) {
    this._notifyClosedProblems = value;
  }
  public resetNotifyClosedProblems() {
    this._notifyClosedProblems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyClosedProblemsInput() {
    return this._notifyClosedProblems;
  }

  // notify_event_merges - computed: false, optional: true, required: false
  private _notifyEventMerges?: boolean | cdktf.IResolvable; 
  public get notifyEventMerges() {
    return this.getBooleanAttribute('notify_event_merges');
  }
  public set notifyEventMerges(value: boolean | cdktf.IResolvable) {
    this._notifyEventMerges = value;
  }
  public resetNotifyEventMerges() {
    this._notifyEventMerges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyEventMergesInput() {
    return this._notifyEventMerges;
  }

  // payload - computed: false, optional: false, required: true
  private _payload?: string; 
  public get payload() {
    return this.getStringAttribute('payload');
  }
  public set payload(value: string) {
    this._payload = value;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadInput() {
    return this._payload;
  }

  // profile - computed: false, optional: false, required: true
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }

  // secret_url - computed: false, optional: true, required: false
  private _secretUrl?: string; 
  public get secretUrl() {
    return this.getStringAttribute('secret_url');
  }
  public set secretUrl(value: string) {
    this._secretUrl = value;
  }
  public resetSecretUrl() {
    this._secretUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretUrlInput() {
    return this._secretUrl;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // url_contains_secret - computed: false, optional: true, required: false
  private _urlContainsSecret?: boolean | cdktf.IResolvable; 
  public get urlContainsSecret() {
    return this.getBooleanAttribute('url_contains_secret');
  }
  public set urlContainsSecret(value: boolean | cdktf.IResolvable) {
    this._urlContainsSecret = value;
  }
  public resetUrlContainsSecret() {
    this._urlContainsSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlContainsSecretInput() {
    return this._urlContainsSecret;
  }

  // use_oauth_2 - computed: false, optional: true, required: false
  private _useOauth2?: boolean | cdktf.IResolvable; 
  public get useOauth2() {
    return this.getBooleanAttribute('use_oauth_2');
  }
  public set useOauth2(value: boolean | cdktf.IResolvable) {
    this._useOauth2 = value;
  }
  public resetUseOauth2() {
    this._useOauth2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useOauth2Input() {
    return this._useOauth2;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new WebhookNotificationHeadersOutputReference(this, "headers");
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: WebhookNotificationHeaders) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // oauth_2_credentials - computed: false, optional: true, required: false
  private _oauth2Credentials = new WebhookNotificationOauth2CredentialsOutputReference(this, "oauth_2_credentials");
  public get oauth2Credentials() {
    return this._oauth2Credentials;
  }
  public putOauth2Credentials(value: WebhookNotificationOauth2Credentials) {
    this._oauth2Credentials.internalValue = value;
  }
  public resetOauth2Credentials() {
    this._oauth2Credentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2CredentialsInput() {
    return this._oauth2Credentials.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active: cdktf.booleanToTerraform(this._active),
      id: cdktf.stringToTerraform(this._id),
      insecure: cdktf.booleanToTerraform(this._insecure),
      legacy_id: cdktf.stringToTerraform(this._legacyId),
      name: cdktf.stringToTerraform(this._name),
      notify_closed_problems: cdktf.booleanToTerraform(this._notifyClosedProblems),
      notify_event_merges: cdktf.booleanToTerraform(this._notifyEventMerges),
      payload: cdktf.stringToTerraform(this._payload),
      profile: cdktf.stringToTerraform(this._profile),
      secret_url: cdktf.stringToTerraform(this._secretUrl),
      url: cdktf.stringToTerraform(this._url),
      url_contains_secret: cdktf.booleanToTerraform(this._urlContainsSecret),
      use_oauth_2: cdktf.booleanToTerraform(this._useOauth2),
      headers: webhookNotificationHeadersToTerraform(this._headers.internalValue),
      oauth_2_credentials: webhookNotificationOauth2CredentialsToTerraform(this._oauth2Credentials.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active: {
        value: cdktf.booleanToHclTerraform(this._active),
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
      insecure: {
        value: cdktf.booleanToHclTerraform(this._insecure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      legacy_id: {
        value: cdktf.stringToHclTerraform(this._legacyId),
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
      notify_closed_problems: {
        value: cdktf.booleanToHclTerraform(this._notifyClosedProblems),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      notify_event_merges: {
        value: cdktf.booleanToHclTerraform(this._notifyEventMerges),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      payload: {
        value: cdktf.stringToHclTerraform(this._payload),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profile: {
        value: cdktf.stringToHclTerraform(this._profile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_url: {
        value: cdktf.stringToHclTerraform(this._secretUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url_contains_secret: {
        value: cdktf.booleanToHclTerraform(this._urlContainsSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_oauth_2: {
        value: cdktf.booleanToHclTerraform(this._useOauth2),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      headers: {
        value: webhookNotificationHeadersToHclTerraform(this._headers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WebhookNotificationHeadersList",
      },
      oauth_2_credentials: {
        value: webhookNotificationOauth2CredentialsToHclTerraform(this._oauth2Credentials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WebhookNotificationOauth2CredentialsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
