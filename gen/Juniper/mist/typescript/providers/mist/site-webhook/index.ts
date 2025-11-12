// https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_webhook
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SiteWebhookConfig extends cdktf.TerraformMetaArguments {
  /**
  * Only if `type`==`asset-raw-rssi`. List of ids to associated asset filters. These filters will be applied to messages routed to a filtered-asset-rssi webhook
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_webhook#assetfilter_ids SiteWebhook#assetfilter_ids}
  */
  readonly assetfilterIds?: string[];
  /**
  * Whether webhook is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_webhook#enabled SiteWebhook#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * If `type`=`http-post`, additional custom HTTP headers to add. The headers name and value must be string, total bytes of headers name and value must be less than 1000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_webhook#headers SiteWebhook#headers}
  */
  readonly headers?: { [key: string]: string };
  /**
  * Name of the webhook
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_webhook#name SiteWebhook#name}
  */
  readonly name: string;
  /**
  * Required when `oauth2_grant_type`==`client_credentials`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_webhook#oauth2_client_id SiteWebhook#oauth2_client_id}
  */
  readonly oauth2ClientId?: string;
  /**
  * Required when `oauth2_grant_type`==`client_credentials`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_webhook#oauth2_client_secret SiteWebhook#oauth2_client_secret}
  */
  readonly oauth2ClientSecret?: string;
  /**
  * required when `type`==`oauth2`. enum: `client_credentials`, `password`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_webhook#oauth2_grant_type SiteWebhook#oauth2_grant_type}
  */
  readonly oauth2GrantType?: string;
  /**
  * Required when `oauth2_grant_type`==`password`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_webhook#oauth2_password SiteWebhook#oauth2_password}
  */
  readonly oauth2Password?: string;
  /**
  * Required when `type`==`oauth2`, if provided, will be used in the token request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_webhook#oauth2_scopes SiteWebhook#oauth2_scopes}
  */
  readonly oauth2Scopes?: string[];
  /**
  * Required when `type`==`oauth2`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_webhook#oauth2_token_url SiteWebhook#oauth2_token_url}
  */
  readonly oauth2TokenUrl?: string;
  /**
  * Required when `oauth2_grant_type`==`password`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_webhook#oauth2_username SiteWebhook#oauth2_username}
  */
  readonly oauth2Username?: string;
  /**
  * Only if `type`=`http-post` 
  * 
  * when `secret` is provided, two  HTTP headers will be added: 
  *   * X-Mist-Signature-v2: HMAC_SHA256(secret, body)
  *   * X-Mist-Signature: HMAC_SHA1(secret, body)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_webhook#secret SiteWebhook#secret}
  */
  readonly secret?: string;
  /**
  * Some solutions may not be able to parse multiple events from a single message (e.g. IBM Qradar, DSM). When set to `true`, only a single event will be sent per message. this feature is only available on certain topics (see [List Webhook Topics]($e/Constants%20Definitions/listWebhookTopics))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_webhook#single_event_per_message SiteWebhook#single_event_per_message}
  */
  readonly singleEventPerMessage?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_webhook#site_id SiteWebhook#site_id}
  */
  readonly siteId: string;
  /**
  * Required if `type`=`splunk`. If splunk_token is not defined for a type Splunk webhook, it will not send, regardless if the webhook receiver is configured to accept it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_webhook#splunk_token SiteWebhook#splunk_token}
  */
  readonly splunkToken?: string;
  /**
  * enum:  `alarms `, `asset-raw `, `asset-raw-rssi `, `audits `, `client-info `, `client-join `, `client-latency `, `client-sessions `, `device-events `, `device-updowns `, `discovered-raw-rssi `, `guest-authorizations `, `location `, `location-asset `, `location-centrak `, `location-client `, `location-sdk `, `location-unclient `, `mxedge-events `, `nac-accounting `, `nac-events `, `occupancy-alerts `, `rssizone `, `sdkclient-scan-data `, `vbeacon `, `wifi-conn-raw `, `wifi-unconn-raw `, `zone `
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_webhook#topics SiteWebhook#topics}
  */
  readonly topics: string[];
  /**
  * enum: `aws-sns`, `google-pubsub`, `http-post`, `oauth2`, `splunk`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_webhook#type SiteWebhook#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_webhook#url SiteWebhook#url}
  */
  readonly url: string;
  /**
  * When url uses HTTPS, whether to verify the certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_webhook#verify_cert SiteWebhook#verify_cert}
  */
  readonly verifyCert?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_webhook mist_site_webhook}
*/
export class SiteWebhook extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mist_site_webhook";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SiteWebhook resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SiteWebhook to import
  * @param importFromId The id of the existing SiteWebhook that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_webhook#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SiteWebhook to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mist_site_webhook", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_webhook mist_site_webhook} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SiteWebhookConfig
  */
  public constructor(scope: Construct, id: string, config: SiteWebhookConfig) {
    super(scope, id, {
      terraformResourceType: 'mist_site_webhook',
      terraformGeneratorMetadata: {
        providerName: 'mist',
        providerVersion: '0.6.0',
        providerVersionConstraint: '0.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._assetfilterIds = config.assetfilterIds;
    this._enabled = config.enabled;
    this._headers = config.headers;
    this._name = config.name;
    this._oauth2ClientId = config.oauth2ClientId;
    this._oauth2ClientSecret = config.oauth2ClientSecret;
    this._oauth2GrantType = config.oauth2GrantType;
    this._oauth2Password = config.oauth2Password;
    this._oauth2Scopes = config.oauth2Scopes;
    this._oauth2TokenUrl = config.oauth2TokenUrl;
    this._oauth2Username = config.oauth2Username;
    this._secret = config.secret;
    this._singleEventPerMessage = config.singleEventPerMessage;
    this._siteId = config.siteId;
    this._splunkToken = config.splunkToken;
    this._topics = config.topics;
    this._type = config.type;
    this._url = config.url;
    this._verifyCert = config.verifyCert;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assetfilter_ids - computed: false, optional: true, required: false
  private _assetfilterIds?: string[]; 
  public get assetfilterIds() {
    return this.getListAttribute('assetfilter_ids');
  }
  public set assetfilterIds(value: string[]) {
    this._assetfilterIds = value;
  }
  public resetAssetfilterIds() {
    this._assetfilterIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assetfilterIdsInput() {
    return this._assetfilterIds;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: { [key: string]: string }; 
  public get headers() {
    return this.getStringMapAttribute('headers');
  }
  public set headers(value: { [key: string]: string }) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
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

  // oauth2_client_id - computed: false, optional: true, required: false
  private _oauth2ClientId?: string; 
  public get oauth2ClientId() {
    return this.getStringAttribute('oauth2_client_id');
  }
  public set oauth2ClientId(value: string) {
    this._oauth2ClientId = value;
  }
  public resetOauth2ClientId() {
    this._oauth2ClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2ClientIdInput() {
    return this._oauth2ClientId;
  }

  // oauth2_client_secret - computed: false, optional: true, required: false
  private _oauth2ClientSecret?: string; 
  public get oauth2ClientSecret() {
    return this.getStringAttribute('oauth2_client_secret');
  }
  public set oauth2ClientSecret(value: string) {
    this._oauth2ClientSecret = value;
  }
  public resetOauth2ClientSecret() {
    this._oauth2ClientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2ClientSecretInput() {
    return this._oauth2ClientSecret;
  }

  // oauth2_grant_type - computed: false, optional: true, required: false
  private _oauth2GrantType?: string; 
  public get oauth2GrantType() {
    return this.getStringAttribute('oauth2_grant_type');
  }
  public set oauth2GrantType(value: string) {
    this._oauth2GrantType = value;
  }
  public resetOauth2GrantType() {
    this._oauth2GrantType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2GrantTypeInput() {
    return this._oauth2GrantType;
  }

  // oauth2_password - computed: false, optional: true, required: false
  private _oauth2Password?: string; 
  public get oauth2Password() {
    return this.getStringAttribute('oauth2_password');
  }
  public set oauth2Password(value: string) {
    this._oauth2Password = value;
  }
  public resetOauth2Password() {
    this._oauth2Password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2PasswordInput() {
    return this._oauth2Password;
  }

  // oauth2_scopes - computed: false, optional: true, required: false
  private _oauth2Scopes?: string[]; 
  public get oauth2Scopes() {
    return this.getListAttribute('oauth2_scopes');
  }
  public set oauth2Scopes(value: string[]) {
    this._oauth2Scopes = value;
  }
  public resetOauth2Scopes() {
    this._oauth2Scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2ScopesInput() {
    return this._oauth2Scopes;
  }

  // oauth2_token_url - computed: false, optional: true, required: false
  private _oauth2TokenUrl?: string; 
  public get oauth2TokenUrl() {
    return this.getStringAttribute('oauth2_token_url');
  }
  public set oauth2TokenUrl(value: string) {
    this._oauth2TokenUrl = value;
  }
  public resetOauth2TokenUrl() {
    this._oauth2TokenUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2TokenUrlInput() {
    return this._oauth2TokenUrl;
  }

  // oauth2_username - computed: false, optional: true, required: false
  private _oauth2Username?: string; 
  public get oauth2Username() {
    return this.getStringAttribute('oauth2_username');
  }
  public set oauth2Username(value: string) {
    this._oauth2Username = value;
  }
  public resetOauth2Username() {
    this._oauth2Username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2UsernameInput() {
    return this._oauth2Username;
  }

  // org_id - computed: true, optional: false, required: false
  public get orgId() {
    return this.getStringAttribute('org_id');
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // single_event_per_message - computed: false, optional: true, required: false
  private _singleEventPerMessage?: boolean | cdktf.IResolvable; 
  public get singleEventPerMessage() {
    return this.getBooleanAttribute('single_event_per_message');
  }
  public set singleEventPerMessage(value: boolean | cdktf.IResolvable) {
    this._singleEventPerMessage = value;
  }
  public resetSingleEventPerMessage() {
    this._singleEventPerMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleEventPerMessageInput() {
    return this._singleEventPerMessage;
  }

  // site_id - computed: false, optional: false, required: true
  private _siteId?: string; 
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
  public set siteId(value: string) {
    this._siteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // splunk_token - computed: false, optional: true, required: false
  private _splunkToken?: string; 
  public get splunkToken() {
    return this.getStringAttribute('splunk_token');
  }
  public set splunkToken(value: string) {
    this._splunkToken = value;
  }
  public resetSplunkToken() {
    this._splunkToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splunkTokenInput() {
    return this._splunkToken;
  }

  // topics - computed: false, optional: false, required: true
  private _topics?: string[]; 
  public get topics() {
    return this.getListAttribute('topics');
  }
  public set topics(value: string[]) {
    this._topics = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicsInput() {
    return this._topics;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
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

  // verify_cert - computed: true, optional: true, required: false
  private _verifyCert?: boolean | cdktf.IResolvable; 
  public get verifyCert() {
    return this.getBooleanAttribute('verify_cert');
  }
  public set verifyCert(value: boolean | cdktf.IResolvable) {
    this._verifyCert = value;
  }
  public resetVerifyCert() {
    this._verifyCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyCertInput() {
    return this._verifyCert;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      assetfilter_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._assetfilterIds),
      enabled: cdktf.booleanToTerraform(this._enabled),
      headers: cdktf.hashMapper(cdktf.stringToTerraform)(this._headers),
      name: cdktf.stringToTerraform(this._name),
      oauth2_client_id: cdktf.stringToTerraform(this._oauth2ClientId),
      oauth2_client_secret: cdktf.stringToTerraform(this._oauth2ClientSecret),
      oauth2_grant_type: cdktf.stringToTerraform(this._oauth2GrantType),
      oauth2_password: cdktf.stringToTerraform(this._oauth2Password),
      oauth2_scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._oauth2Scopes),
      oauth2_token_url: cdktf.stringToTerraform(this._oauth2TokenUrl),
      oauth2_username: cdktf.stringToTerraform(this._oauth2Username),
      secret: cdktf.stringToTerraform(this._secret),
      single_event_per_message: cdktf.booleanToTerraform(this._singleEventPerMessage),
      site_id: cdktf.stringToTerraform(this._siteId),
      splunk_token: cdktf.stringToTerraform(this._splunkToken),
      topics: cdktf.listMapper(cdktf.stringToTerraform, false)(this._topics),
      type: cdktf.stringToTerraform(this._type),
      url: cdktf.stringToTerraform(this._url),
      verify_cert: cdktf.booleanToTerraform(this._verifyCert),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      assetfilter_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._assetfilterIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      headers: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._headers),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth2_client_id: {
        value: cdktf.stringToHclTerraform(this._oauth2ClientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth2_client_secret: {
        value: cdktf.stringToHclTerraform(this._oauth2ClientSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth2_grant_type: {
        value: cdktf.stringToHclTerraform(this._oauth2GrantType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth2_password: {
        value: cdktf.stringToHclTerraform(this._oauth2Password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth2_scopes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._oauth2Scopes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      oauth2_token_url: {
        value: cdktf.stringToHclTerraform(this._oauth2TokenUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth2_username: {
        value: cdktf.stringToHclTerraform(this._oauth2Username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret: {
        value: cdktf.stringToHclTerraform(this._secret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      single_event_per_message: {
        value: cdktf.booleanToHclTerraform(this._singleEventPerMessage),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      site_id: {
        value: cdktf.stringToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      splunk_token: {
        value: cdktf.stringToHclTerraform(this._splunkToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      topics: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._topics),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
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
      verify_cert: {
        value: cdktf.booleanToHclTerraform(this._verifyCert),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
