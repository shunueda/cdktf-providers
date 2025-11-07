// https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/webhook
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WebhookConfig extends cdktf.TerraformMetaArguments {
  /**
  * A boolean that specifies whether a created or updated webhook should be active or suspended. A suspended state (`"enabled":false`) accumulates all matched events, but these events are not delivered until the webhook becomes active again (`"enabled":true`). For suspended webhooks, events accumulate for a maximum of two weeks. Events older than two weeks are deleted. Restarted webhooks receive the saved events (up to two weeks from the restart date).  Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/webhook#enabled Webhook#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The ID of the environment to create the webhook in.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/webhook#environment_id Webhook#environment_id}
  */
  readonly environmentId: string;
  /**
  * A single object that specifies the PingOne platform event filters to be included to trigger this webhook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/webhook#filter_options Webhook#filter_options}
  */
  readonly filterOptions: WebhookFilterOptions;
  /**
  * A string that specifies one of the supported webhook formats.  Options are `ACTIVITY`, `NEWRELIC`, `SPLUNK`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/webhook#format Webhook#format}
  */
  readonly format: string;
  /**
  * A map that specifies the headers applied to the outbound request (for example, `Authorization` `Basic usernamepassword`. The purpose of these headers is for the HTTPS endpoint to authenticate the PingOne service, ensuring that the information from PingOne is from a trusted source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/webhook#http_endpoint_headers Webhook#http_endpoint_headers}
  */
  readonly httpEndpointHeaders?: { [key: string]: string };
  /**
  * A string that specifies a valid HTTPS URL to which event messages are sent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/webhook#http_endpoint_url Webhook#http_endpoint_url}
  */
  readonly httpEndpointUrl: string;
  /**
  * A string that specifies the webhook name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/webhook#name Webhook#name}
  */
  readonly name: string;
  /**
  * A string that specifies the PingOne resource ID of a key to be used for outbound mutual TLS (mTLS) authentication.  This key is used as a client credential to authenticate the webhook.  When using the `pingone_key` resource, the key must have a `usage_type` of `OUTBOUND_MTLS`.  If this property is set, `verify_tls_certificates` must be set to `true`.  Value must be a valid PingOne resource ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/webhook#tls_client_auth_key_pair_id Webhook#tls_client_auth_key_pair_id}
  */
  readonly tlsClientAuthKeyPairId?: string;
  /**
  * A boolean that specifies whether a certificates should be verified. If this property's value is set to `false`, then all certificates are trusted. (Setting this property's value to false introduces a security risk.).  Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/webhook#verify_tls_certificates Webhook#verify_tls_certificates}
  */
  readonly verifyTlsCertificates?: boolean | cdktf.IResolvable;
}
export interface WebhookFilterOptions {
  /**
  * A non-empty list that specifies the list of action types that should be matched for the webhook.
  * 
  * Refer to the [PingOne API Reference - Subscription Action Types](https://apidocs.pingidentity.com/pingone/platform/v1/api/#subscription-action-types) documentation for a full list of configurable action types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/webhook#included_action_types Webhook#included_action_types}
  */
  readonly includedActionTypes: string[];
  /**
  * An array that specifies the list of applications (by ID) whose events are monitored by the webhook (maximum of 10 IDs in the array). If a list of applications is not provided, events are monitored for all applications in the environment.  Values must be valid PingOne resource IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/webhook#included_application_ids Webhook#included_application_ids}
  */
  readonly includedApplicationIds?: string[];
  /**
  * An array that specifies the list of populations (by ID) whose events are monitored by the webhook (maximum of 10 IDs in the array). This property matches events for users in the specified populations, as opposed to events generated in which the user in one of the populations is the actor.  Values must be valid PingOne resource IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/webhook#included_population_ids Webhook#included_population_ids}
  */
  readonly includedPopulationIds?: string[];
  /**
  * An array of tags that events must have to be monitored by the webhook. If tags are not specified, all events are monitored.  Options are `adminIdentityEvent` (Identifies the event as the action of an administrator on other administrators).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/webhook#included_tags Webhook#included_tags}
  */
  readonly includedTags?: string[];
  /**
  * A boolean that specifies whether the IP address of an actor should be present in the source section of the event.  Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/webhook#ip_address_exposed Webhook#ip_address_exposed}
  */
  readonly ipAddressExposed?: boolean | cdktf.IResolvable;
  /**
  * A boolean that specifies whether the User-Agent HTTP header of an event should be present in the source section of the event.  Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/webhook#useragent_exposed Webhook#useragent_exposed}
  */
  readonly useragentExposed?: boolean | cdktf.IResolvable;
}

export function webhookFilterOptionsToTerraform(struct?: WebhookFilterOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    included_action_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includedActionTypes),
    included_application_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includedApplicationIds),
    included_population_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includedPopulationIds),
    included_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includedTags),
    ip_address_exposed: cdktf.booleanToTerraform(struct!.ipAddressExposed),
    useragent_exposed: cdktf.booleanToTerraform(struct!.useragentExposed),
  }
}


export function webhookFilterOptionsToHclTerraform(struct?: WebhookFilterOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    included_action_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includedActionTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    included_application_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includedApplicationIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    included_population_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includedPopulationIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    included_tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includedTags),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    ip_address_exposed: {
      value: cdktf.booleanToHclTerraform(struct!.ipAddressExposed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    useragent_exposed: {
      value: cdktf.booleanToHclTerraform(struct!.useragentExposed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebhookFilterOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WebhookFilterOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includedActionTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedActionTypes = this._includedActionTypes;
    }
    if (this._includedApplicationIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedApplicationIds = this._includedApplicationIds;
    }
    if (this._includedPopulationIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedPopulationIds = this._includedPopulationIds;
    }
    if (this._includedTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedTags = this._includedTags;
    }
    if (this._ipAddressExposed !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddressExposed = this._ipAddressExposed;
    }
    if (this._useragentExposed !== undefined) {
      hasAnyValues = true;
      internalValueResult.useragentExposed = this._useragentExposed;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebhookFilterOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._includedActionTypes = undefined;
      this._includedApplicationIds = undefined;
      this._includedPopulationIds = undefined;
      this._includedTags = undefined;
      this._ipAddressExposed = undefined;
      this._useragentExposed = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._includedActionTypes = value.includedActionTypes;
      this._includedApplicationIds = value.includedApplicationIds;
      this._includedPopulationIds = value.includedPopulationIds;
      this._includedTags = value.includedTags;
      this._ipAddressExposed = value.ipAddressExposed;
      this._useragentExposed = value.useragentExposed;
    }
  }

  // included_action_types - computed: false, optional: false, required: true
  private _includedActionTypes?: string[]; 
  public get includedActionTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('included_action_types'));
  }
  public set includedActionTypes(value: string[]) {
    this._includedActionTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get includedActionTypesInput() {
    return this._includedActionTypes;
  }

  // included_application_ids - computed: false, optional: true, required: false
  private _includedApplicationIds?: string[]; 
  public get includedApplicationIds() {
    return cdktf.Fn.tolist(this.getListAttribute('included_application_ids'));
  }
  public set includedApplicationIds(value: string[]) {
    this._includedApplicationIds = value;
  }
  public resetIncludedApplicationIds() {
    this._includedApplicationIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedApplicationIdsInput() {
    return this._includedApplicationIds;
  }

  // included_population_ids - computed: false, optional: true, required: false
  private _includedPopulationIds?: string[]; 
  public get includedPopulationIds() {
    return cdktf.Fn.tolist(this.getListAttribute('included_population_ids'));
  }
  public set includedPopulationIds(value: string[]) {
    this._includedPopulationIds = value;
  }
  public resetIncludedPopulationIds() {
    this._includedPopulationIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedPopulationIdsInput() {
    return this._includedPopulationIds;
  }

  // included_tags - computed: false, optional: true, required: false
  private _includedTags?: string[]; 
  public get includedTags() {
    return cdktf.Fn.tolist(this.getListAttribute('included_tags'));
  }
  public set includedTags(value: string[]) {
    this._includedTags = value;
  }
  public resetIncludedTags() {
    this._includedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedTagsInput() {
    return this._includedTags;
  }

  // ip_address_exposed - computed: true, optional: true, required: false
  private _ipAddressExposed?: boolean | cdktf.IResolvable; 
  public get ipAddressExposed() {
    return this.getBooleanAttribute('ip_address_exposed');
  }
  public set ipAddressExposed(value: boolean | cdktf.IResolvable) {
    this._ipAddressExposed = value;
  }
  public resetIpAddressExposed() {
    this._ipAddressExposed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressExposedInput() {
    return this._ipAddressExposed;
  }

  // useragent_exposed - computed: true, optional: true, required: false
  private _useragentExposed?: boolean | cdktf.IResolvable; 
  public get useragentExposed() {
    return this.getBooleanAttribute('useragent_exposed');
  }
  public set useragentExposed(value: boolean | cdktf.IResolvable) {
    this._useragentExposed = value;
  }
  public resetUseragentExposed() {
    this._useragentExposed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useragentExposedInput() {
    return this._useragentExposed;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/webhook pingone_webhook}
*/
export class Webhook extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingone_webhook";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Webhook resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Webhook to import
  * @param importFromId The id of the existing Webhook that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/webhook#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Webhook to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingone_webhook", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/webhook pingone_webhook} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WebhookConfig
  */
  public constructor(scope: Construct, id: string, config: WebhookConfig) {
    super(scope, id, {
      terraformResourceType: 'pingone_webhook',
      terraformGeneratorMetadata: {
        providerName: 'pingone',
        providerVersion: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enabled = config.enabled;
    this._environmentId = config.environmentId;
    this._filterOptions.internalValue = config.filterOptions;
    this._format = config.format;
    this._httpEndpointHeaders = config.httpEndpointHeaders;
    this._httpEndpointUrl = config.httpEndpointUrl;
    this._name = config.name;
    this._tlsClientAuthKeyPairId = config.tlsClientAuthKeyPairId;
    this._verifyTlsCertificates = config.verifyTlsCertificates;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // environment_id - computed: false, optional: false, required: true
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
  }

  // filter_options - computed: false, optional: false, required: true
  private _filterOptions = new WebhookFilterOptionsOutputReference(this, "filter_options");
  public get filterOptions() {
    return this._filterOptions;
  }
  public putFilterOptions(value: WebhookFilterOptions) {
    this._filterOptions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterOptionsInput() {
    return this._filterOptions.internalValue;
  }

  // format - computed: false, optional: false, required: true
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // http_endpoint_headers - computed: false, optional: true, required: false
  private _httpEndpointHeaders?: { [key: string]: string }; 
  public get httpEndpointHeaders() {
    return this.getStringMapAttribute('http_endpoint_headers');
  }
  public set httpEndpointHeaders(value: { [key: string]: string }) {
    this._httpEndpointHeaders = value;
  }
  public resetHttpEndpointHeaders() {
    this._httpEndpointHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpEndpointHeadersInput() {
    return this._httpEndpointHeaders;
  }

  // http_endpoint_url - computed: false, optional: false, required: true
  private _httpEndpointUrl?: string; 
  public get httpEndpointUrl() {
    return this.getStringAttribute('http_endpoint_url');
  }
  public set httpEndpointUrl(value: string) {
    this._httpEndpointUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpEndpointUrlInput() {
    return this._httpEndpointUrl;
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

  // tls_client_auth_key_pair_id - computed: false, optional: true, required: false
  private _tlsClientAuthKeyPairId?: string; 
  public get tlsClientAuthKeyPairId() {
    return this.getStringAttribute('tls_client_auth_key_pair_id');
  }
  public set tlsClientAuthKeyPairId(value: string) {
    this._tlsClientAuthKeyPairId = value;
  }
  public resetTlsClientAuthKeyPairId() {
    this._tlsClientAuthKeyPairId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsClientAuthKeyPairIdInput() {
    return this._tlsClientAuthKeyPairId;
  }

  // verify_tls_certificates - computed: true, optional: true, required: false
  private _verifyTlsCertificates?: boolean | cdktf.IResolvable; 
  public get verifyTlsCertificates() {
    return this.getBooleanAttribute('verify_tls_certificates');
  }
  public set verifyTlsCertificates(value: boolean | cdktf.IResolvable) {
    this._verifyTlsCertificates = value;
  }
  public resetVerifyTlsCertificates() {
    this._verifyTlsCertificates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyTlsCertificatesInput() {
    return this._verifyTlsCertificates;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      environment_id: cdktf.stringToTerraform(this._environmentId),
      filter_options: webhookFilterOptionsToTerraform(this._filterOptions.internalValue),
      format: cdktf.stringToTerraform(this._format),
      http_endpoint_headers: cdktf.hashMapper(cdktf.stringToTerraform)(this._httpEndpointHeaders),
      http_endpoint_url: cdktf.stringToTerraform(this._httpEndpointUrl),
      name: cdktf.stringToTerraform(this._name),
      tls_client_auth_key_pair_id: cdktf.stringToTerraform(this._tlsClientAuthKeyPairId),
      verify_tls_certificates: cdktf.booleanToTerraform(this._verifyTlsCertificates),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_options: {
        value: webhookFilterOptionsToHclTerraform(this._filterOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WebhookFilterOptions",
      },
      format: {
        value: cdktf.stringToHclTerraform(this._format),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_endpoint_headers: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._httpEndpointHeaders),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      http_endpoint_url: {
        value: cdktf.stringToHclTerraform(this._httpEndpointUrl),
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
      tls_client_auth_key_pair_id: {
        value: cdktf.stringToHclTerraform(this._tlsClientAuthKeyPairId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      verify_tls_certificates: {
        value: cdktf.booleanToHclTerraform(this._verifyTlsCertificates),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
