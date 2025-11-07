// generated from terraform resource schema

import { SpIdpConnectionAdditionalAllowedEntitiesConfiguration, 
spIdpConnectionAdditionalAllowedEntitiesConfigurationToTerraform, 
spIdpConnectionAdditionalAllowedEntitiesConfigurationToHclTerraform, 
SpIdpConnectionAdditionalAllowedEntitiesConfigurationOutputReference, 
SpIdpConnectionAttributeQuery, 
spIdpConnectionAttributeQueryToTerraform, 
spIdpConnectionAttributeQueryToHclTerraform, 
SpIdpConnectionAttributeQueryOutputReference, 
SpIdpConnectionContactInfo, 
spIdpConnectionContactInfoToTerraform, 
spIdpConnectionContactInfoToHclTerraform, 
SpIdpConnectionContactInfoOutputReference, 
SpIdpConnectionCredentials, 
spIdpConnectionCredentialsToTerraform, 
spIdpConnectionCredentialsToHclTerraform, 
SpIdpConnectionCredentialsOutputReference, 
SpIdpConnectionExtendedProperties, 
spIdpConnectionExtendedPropertiesToTerraform, 
spIdpConnectionExtendedPropertiesToHclTerraform, 
SpIdpConnectionExtendedPropertiesMap, 
SpIdpConnectionIdpBrowserSso, 
spIdpConnectionIdpBrowserSsoToTerraform, 
spIdpConnectionIdpBrowserSsoToHclTerraform, 
SpIdpConnectionIdpBrowserSsoOutputReference, 
SpIdpConnectionIdpOauthGrantAttributeMapping, 
spIdpConnectionIdpOauthGrantAttributeMappingToTerraform, 
spIdpConnectionIdpOauthGrantAttributeMappingToHclTerraform, 
SpIdpConnectionIdpOauthGrantAttributeMappingOutputReference, 
SpIdpConnectionInboundProvisioning, 
spIdpConnectionInboundProvisioningToTerraform, 
spIdpConnectionInboundProvisioningToHclTerraform, 
SpIdpConnectionInboundProvisioningOutputReference, 
SpIdpConnectionMetadataReloadSettings, 
spIdpConnectionMetadataReloadSettingsToTerraform, 
spIdpConnectionMetadataReloadSettingsToHclTerraform, 
SpIdpConnectionMetadataReloadSettingsOutputReference, 
SpIdpConnectionOidcClientCredentials, 
spIdpConnectionOidcClientCredentialsToTerraform, 
spIdpConnectionOidcClientCredentialsToHclTerraform, 
SpIdpConnectionOidcClientCredentialsOutputReference, 
SpIdpConnectionWsTrust, 
spIdpConnectionWsTrustToTerraform, 
spIdpConnectionWsTrustToHclTerraform, 
SpIdpConnectionWsTrustOutputReference} from './index-structs'
export * from './index-structs'
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SpIdpConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies whether the connection is active and ready to process incoming requests. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#active SpIdpConnection#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Additional allowed entities or issuers configuration. Currently only used in OIDC IdP (RP) connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#additional_allowed_entities_configuration SpIdpConnection#additional_allowed_entities_configuration}
  */
  readonly additionalAllowedEntitiesConfiguration?: SpIdpConnectionAdditionalAllowedEntitiesConfiguration;
  /**
  * The attribute query profile supports local applications in requesting user attributes from an attribute authority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#attribute_query SpIdpConnection#attribute_query}
  */
  readonly attributeQuery?: SpIdpConnectionAttributeQuery;
  /**
  * The fully-qualified hostname and port on which your partner's federation deployment runs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#base_url SpIdpConnection#base_url}
  */
  readonly baseUrl?: string;
  /**
  * The persistent, unique ID for the connection. It can be any combination of `[a-zA-Z0-9._-]`. This property is system-assigned if not specified. This field is immutable and will trigger a replacement plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#connection_id SpIdpConnection#connection_id}
  */
  readonly connectionId?: string;
  /**
  * Contact information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#contact_info SpIdpConnection#contact_info}
  */
  readonly contactInfo?: SpIdpConnectionContactInfo;
  /**
  * The certificates and settings for encryption, signing, and signature verification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#credentials SpIdpConnection#credentials}
  */
  readonly credentials?: SpIdpConnectionCredentials;
  /**
  * The default alternate entity ID that identifies the local server to this partner. It is required when `virtual_entity_ids` is not empty and must be included in that list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#default_virtual_entity_id SpIdpConnection#default_virtual_entity_id}
  */
  readonly defaultVirtualEntityId?: string;
  /**
  * The partner's entity ID (connection ID) or issuer value (for OIDC Connections).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#entity_id SpIdpConnection#entity_id}
  */
  readonly entityId: string;
  /**
  * Identifier that specifies the message displayed on a user-facing error page. Defaults to `errorDetail.spSsoFailure` for browser SSO connections, null otherwise.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#error_page_msg_id SpIdpConnection#error_page_msg_id}
  */
  readonly errorPageMsgId?: string;
  /**
  * Extended Properties allows to store additional information for IdP/SP Connections. The names of these extended properties should be defined in /extendedProperties.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#extended_properties SpIdpConnection#extended_properties}
  */
  readonly extendedProperties?: { [key: string]: SpIdpConnectionExtendedProperties } | cdktf.IResolvable;
  /**
  * The settings used to enable secure browser-based SSO to resources at your site.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#idp_browser_sso SpIdpConnection#idp_browser_sso}
  */
  readonly idpBrowserSso?: SpIdpConnectionIdpBrowserSso;
  /**
  * The OAuth Assertion Grant settings used to map from your IdP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#idp_oauth_grant_attribute_mapping SpIdpConnection#idp_oauth_grant_attribute_mapping}
  */
  readonly idpOauthGrantAttributeMapping?: SpIdpConnectionIdpOauthGrantAttributeMapping;
  /**
  * SCIM Inbound Provisioning specifies how and when to provision user accounts and groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#inbound_provisioning SpIdpConnection#inbound_provisioning}
  */
  readonly inboundProvisioning?: SpIdpConnectionInboundProvisioning;
  /**
  * The license connection group. If your PingFederate license is based on connection groups, each connection must be assigned to a group before it can be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#license_connection_group SpIdpConnection#license_connection_group}
  */
  readonly licenseConnectionGroup?: string;
  /**
  * The level of transaction logging applicable for this connection. Default is `STANDARD`. Options are `ENHANCED`, `FULL`, `NONE`, `STANDARD`. If the `idp_connection_transaction_logging_override` attribute is set to anything other than `DONT_OVERRIDE` in the `server_settings_general` resource, then this attribute must be set to the same value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#logging_mode SpIdpConnection#logging_mode}
  */
  readonly loggingMode?: string;
  /**
  * Configuration settings to enable automatic reload of partner's metadata.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#metadata_reload_settings SpIdpConnection#metadata_reload_settings}
  */
  readonly metadataReloadSettings?: SpIdpConnectionMetadataReloadSettings;
  /**
  * The connection name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#name SpIdpConnection#name}
  */
  readonly name: string;
  /**
  * The OpenID Connect Client Credentials settings. This is required for an OIDC Connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#oidc_client_credentials SpIdpConnection#oidc_client_credentials}
  */
  readonly oidcClientCredentials?: SpIdpConnectionOidcClientCredentials;
  /**
  * List of alternate entity IDs that identifies the local server to this partner.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#virtual_entity_ids SpIdpConnection#virtual_entity_ids}
  */
  readonly virtualEntityIds?: string[];
  /**
  * Ws-Trust STS provides validation of incoming tokens which enable SSO access to Web Services. It also allows generation of local tokens for Web Services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#ws_trust SpIdpConnection#ws_trust}
  */
  readonly wsTrust?: SpIdpConnectionWsTrust;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection pingfederate_sp_idp_connection}
*/
export class SpIdpConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingfederate_sp_idp_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SpIdpConnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SpIdpConnection to import
  * @param importFromId The id of the existing SpIdpConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SpIdpConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingfederate_sp_idp_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection pingfederate_sp_idp_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SpIdpConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: SpIdpConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'pingfederate_sp_idp_connection',
      terraformGeneratorMetadata: {
        providerName: 'pingfederate',
        providerVersion: '1.6.2'
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
    this._additionalAllowedEntitiesConfiguration.internalValue = config.additionalAllowedEntitiesConfiguration;
    this._attributeQuery.internalValue = config.attributeQuery;
    this._baseUrl = config.baseUrl;
    this._connectionId = config.connectionId;
    this._contactInfo.internalValue = config.contactInfo;
    this._credentials.internalValue = config.credentials;
    this._defaultVirtualEntityId = config.defaultVirtualEntityId;
    this._entityId = config.entityId;
    this._errorPageMsgId = config.errorPageMsgId;
    this._extendedProperties.internalValue = config.extendedProperties;
    this._idpBrowserSso.internalValue = config.idpBrowserSso;
    this._idpOauthGrantAttributeMapping.internalValue = config.idpOauthGrantAttributeMapping;
    this._inboundProvisioning.internalValue = config.inboundProvisioning;
    this._licenseConnectionGroup = config.licenseConnectionGroup;
    this._loggingMode = config.loggingMode;
    this._metadataReloadSettings.internalValue = config.metadataReloadSettings;
    this._name = config.name;
    this._oidcClientCredentials.internalValue = config.oidcClientCredentials;
    this._virtualEntityIds = config.virtualEntityIds;
    this._wsTrust.internalValue = config.wsTrust;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active - computed: true, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // additional_allowed_entities_configuration - computed: true, optional: true, required: false
  private _additionalAllowedEntitiesConfiguration = new SpIdpConnectionAdditionalAllowedEntitiesConfigurationOutputReference(this, "additional_allowed_entities_configuration");
  public get additionalAllowedEntitiesConfiguration() {
    return this._additionalAllowedEntitiesConfiguration;
  }
  public putAdditionalAllowedEntitiesConfiguration(value: SpIdpConnectionAdditionalAllowedEntitiesConfiguration) {
    this._additionalAllowedEntitiesConfiguration.internalValue = value;
  }
  public resetAdditionalAllowedEntitiesConfiguration() {
    this._additionalAllowedEntitiesConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalAllowedEntitiesConfigurationInput() {
    return this._additionalAllowedEntitiesConfiguration.internalValue;
  }

  // attribute_query - computed: false, optional: true, required: false
  private _attributeQuery = new SpIdpConnectionAttributeQueryOutputReference(this, "attribute_query");
  public get attributeQuery() {
    return this._attributeQuery;
  }
  public putAttributeQuery(value: SpIdpConnectionAttributeQuery) {
    this._attributeQuery.internalValue = value;
  }
  public resetAttributeQuery() {
    this._attributeQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeQueryInput() {
    return this._attributeQuery.internalValue;
  }

  // base_url - computed: false, optional: true, required: false
  private _baseUrl?: string; 
  public get baseUrl() {
    return this.getStringAttribute('base_url');
  }
  public set baseUrl(value: string) {
    this._baseUrl = value;
  }
  public resetBaseUrl() {
    this._baseUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseUrlInput() {
    return this._baseUrl;
  }

  // connection_id - computed: true, optional: true, required: false
  private _connectionId?: string; 
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }
  public set connectionId(value: string) {
    this._connectionId = value;
  }
  public resetConnectionId() {
    this._connectionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionIdInput() {
    return this._connectionId;
  }

  // contact_info - computed: false, optional: true, required: false
  private _contactInfo = new SpIdpConnectionContactInfoOutputReference(this, "contact_info");
  public get contactInfo() {
    return this._contactInfo;
  }
  public putContactInfo(value: SpIdpConnectionContactInfo) {
    this._contactInfo.internalValue = value;
  }
  public resetContactInfo() {
    this._contactInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactInfoInput() {
    return this._contactInfo.internalValue;
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials = new SpIdpConnectionCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: SpIdpConnectionCredentials) {
    this._credentials.internalValue = value;
  }
  public resetCredentials() {
    this._credentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // default_virtual_entity_id - computed: false, optional: true, required: false
  private _defaultVirtualEntityId?: string; 
  public get defaultVirtualEntityId() {
    return this.getStringAttribute('default_virtual_entity_id');
  }
  public set defaultVirtualEntityId(value: string) {
    this._defaultVirtualEntityId = value;
  }
  public resetDefaultVirtualEntityId() {
    this._defaultVirtualEntityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultVirtualEntityIdInput() {
    return this._defaultVirtualEntityId;
  }

  // entity_id - computed: false, optional: false, required: true
  private _entityId?: string; 
  public get entityId() {
    return this.getStringAttribute('entity_id');
  }
  public set entityId(value: string) {
    this._entityId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityIdInput() {
    return this._entityId;
  }

  // error_page_msg_id - computed: true, optional: true, required: false
  private _errorPageMsgId?: string; 
  public get errorPageMsgId() {
    return this.getStringAttribute('error_page_msg_id');
  }
  public set errorPageMsgId(value: string) {
    this._errorPageMsgId = value;
  }
  public resetErrorPageMsgId() {
    this._errorPageMsgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorPageMsgIdInput() {
    return this._errorPageMsgId;
  }

  // extended_properties - computed: false, optional: true, required: false
  private _extendedProperties = new SpIdpConnectionExtendedPropertiesMap(this, "extended_properties");
  public get extendedProperties() {
    return this._extendedProperties;
  }
  public putExtendedProperties(value: { [key: string]: SpIdpConnectionExtendedProperties } | cdktf.IResolvable) {
    this._extendedProperties.internalValue = value;
  }
  public resetExtendedProperties() {
    this._extendedProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedPropertiesInput() {
    return this._extendedProperties.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idp_browser_sso - computed: false, optional: true, required: false
  private _idpBrowserSso = new SpIdpConnectionIdpBrowserSsoOutputReference(this, "idp_browser_sso");
  public get idpBrowserSso() {
    return this._idpBrowserSso;
  }
  public putIdpBrowserSso(value: SpIdpConnectionIdpBrowserSso) {
    this._idpBrowserSso.internalValue = value;
  }
  public resetIdpBrowserSso() {
    this._idpBrowserSso.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpBrowserSsoInput() {
    return this._idpBrowserSso.internalValue;
  }

  // idp_oauth_grant_attribute_mapping - computed: false, optional: true, required: false
  private _idpOauthGrantAttributeMapping = new SpIdpConnectionIdpOauthGrantAttributeMappingOutputReference(this, "idp_oauth_grant_attribute_mapping");
  public get idpOauthGrantAttributeMapping() {
    return this._idpOauthGrantAttributeMapping;
  }
  public putIdpOauthGrantAttributeMapping(value: SpIdpConnectionIdpOauthGrantAttributeMapping) {
    this._idpOauthGrantAttributeMapping.internalValue = value;
  }
  public resetIdpOauthGrantAttributeMapping() {
    this._idpOauthGrantAttributeMapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpOauthGrantAttributeMappingInput() {
    return this._idpOauthGrantAttributeMapping.internalValue;
  }

  // inbound_provisioning - computed: false, optional: true, required: false
  private _inboundProvisioning = new SpIdpConnectionInboundProvisioningOutputReference(this, "inbound_provisioning");
  public get inboundProvisioning() {
    return this._inboundProvisioning;
  }
  public putInboundProvisioning(value: SpIdpConnectionInboundProvisioning) {
    this._inboundProvisioning.internalValue = value;
  }
  public resetInboundProvisioning() {
    this._inboundProvisioning.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundProvisioningInput() {
    return this._inboundProvisioning.internalValue;
  }

  // license_connection_group - computed: false, optional: true, required: false
  private _licenseConnectionGroup?: string; 
  public get licenseConnectionGroup() {
    return this.getStringAttribute('license_connection_group');
  }
  public set licenseConnectionGroup(value: string) {
    this._licenseConnectionGroup = value;
  }
  public resetLicenseConnectionGroup() {
    this._licenseConnectionGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseConnectionGroupInput() {
    return this._licenseConnectionGroup;
  }

  // logging_mode - computed: true, optional: true, required: false
  private _loggingMode?: string; 
  public get loggingMode() {
    return this.getStringAttribute('logging_mode');
  }
  public set loggingMode(value: string) {
    this._loggingMode = value;
  }
  public resetLoggingMode() {
    this._loggingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingModeInput() {
    return this._loggingMode;
  }

  // metadata_reload_settings - computed: false, optional: true, required: false
  private _metadataReloadSettings = new SpIdpConnectionMetadataReloadSettingsOutputReference(this, "metadata_reload_settings");
  public get metadataReloadSettings() {
    return this._metadataReloadSettings;
  }
  public putMetadataReloadSettings(value: SpIdpConnectionMetadataReloadSettings) {
    this._metadataReloadSettings.internalValue = value;
  }
  public resetMetadataReloadSettings() {
    this._metadataReloadSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataReloadSettingsInput() {
    return this._metadataReloadSettings.internalValue;
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

  // oidc_client_credentials - computed: false, optional: true, required: false
  private _oidcClientCredentials = new SpIdpConnectionOidcClientCredentialsOutputReference(this, "oidc_client_credentials");
  public get oidcClientCredentials() {
    return this._oidcClientCredentials;
  }
  public putOidcClientCredentials(value: SpIdpConnectionOidcClientCredentials) {
    this._oidcClientCredentials.internalValue = value;
  }
  public resetOidcClientCredentials() {
    this._oidcClientCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcClientCredentialsInput() {
    return this._oidcClientCredentials.internalValue;
  }

  // virtual_entity_ids - computed: true, optional: true, required: false
  private _virtualEntityIds?: string[]; 
  public get virtualEntityIds() {
    return cdktf.Fn.tolist(this.getListAttribute('virtual_entity_ids'));
  }
  public set virtualEntityIds(value: string[]) {
    this._virtualEntityIds = value;
  }
  public resetVirtualEntityIds() {
    this._virtualEntityIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualEntityIdsInput() {
    return this._virtualEntityIds;
  }

  // ws_trust - computed: false, optional: true, required: false
  private _wsTrust = new SpIdpConnectionWsTrustOutputReference(this, "ws_trust");
  public get wsTrust() {
    return this._wsTrust;
  }
  public putWsTrust(value: SpIdpConnectionWsTrust) {
    this._wsTrust.internalValue = value;
  }
  public resetWsTrust() {
    this._wsTrust.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wsTrustInput() {
    return this._wsTrust.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active: cdktf.booleanToTerraform(this._active),
      additional_allowed_entities_configuration: spIdpConnectionAdditionalAllowedEntitiesConfigurationToTerraform(this._additionalAllowedEntitiesConfiguration.internalValue),
      attribute_query: spIdpConnectionAttributeQueryToTerraform(this._attributeQuery.internalValue),
      base_url: cdktf.stringToTerraform(this._baseUrl),
      connection_id: cdktf.stringToTerraform(this._connectionId),
      contact_info: spIdpConnectionContactInfoToTerraform(this._contactInfo.internalValue),
      credentials: spIdpConnectionCredentialsToTerraform(this._credentials.internalValue),
      default_virtual_entity_id: cdktf.stringToTerraform(this._defaultVirtualEntityId),
      entity_id: cdktf.stringToTerraform(this._entityId),
      error_page_msg_id: cdktf.stringToTerraform(this._errorPageMsgId),
      extended_properties: cdktf.hashMapper(spIdpConnectionExtendedPropertiesToTerraform)(this._extendedProperties.internalValue),
      idp_browser_sso: spIdpConnectionIdpBrowserSsoToTerraform(this._idpBrowserSso.internalValue),
      idp_oauth_grant_attribute_mapping: spIdpConnectionIdpOauthGrantAttributeMappingToTerraform(this._idpOauthGrantAttributeMapping.internalValue),
      inbound_provisioning: spIdpConnectionInboundProvisioningToTerraform(this._inboundProvisioning.internalValue),
      license_connection_group: cdktf.stringToTerraform(this._licenseConnectionGroup),
      logging_mode: cdktf.stringToTerraform(this._loggingMode),
      metadata_reload_settings: spIdpConnectionMetadataReloadSettingsToTerraform(this._metadataReloadSettings.internalValue),
      name: cdktf.stringToTerraform(this._name),
      oidc_client_credentials: spIdpConnectionOidcClientCredentialsToTerraform(this._oidcClientCredentials.internalValue),
      virtual_entity_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._virtualEntityIds),
      ws_trust: spIdpConnectionWsTrustToTerraform(this._wsTrust.internalValue),
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
      additional_allowed_entities_configuration: {
        value: spIdpConnectionAdditionalAllowedEntitiesConfigurationToHclTerraform(this._additionalAllowedEntitiesConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SpIdpConnectionAdditionalAllowedEntitiesConfiguration",
      },
      attribute_query: {
        value: spIdpConnectionAttributeQueryToHclTerraform(this._attributeQuery.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SpIdpConnectionAttributeQuery",
      },
      base_url: {
        value: cdktf.stringToHclTerraform(this._baseUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_id: {
        value: cdktf.stringToHclTerraform(this._connectionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      contact_info: {
        value: spIdpConnectionContactInfoToHclTerraform(this._contactInfo.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SpIdpConnectionContactInfo",
      },
      credentials: {
        value: spIdpConnectionCredentialsToHclTerraform(this._credentials.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SpIdpConnectionCredentials",
      },
      default_virtual_entity_id: {
        value: cdktf.stringToHclTerraform(this._defaultVirtualEntityId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entity_id: {
        value: cdktf.stringToHclTerraform(this._entityId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      error_page_msg_id: {
        value: cdktf.stringToHclTerraform(this._errorPageMsgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extended_properties: {
        value: cdktf.hashMapperHcl(spIdpConnectionExtendedPropertiesToHclTerraform)(this._extendedProperties.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "SpIdpConnectionExtendedPropertiesMap",
      },
      idp_browser_sso: {
        value: spIdpConnectionIdpBrowserSsoToHclTerraform(this._idpBrowserSso.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SpIdpConnectionIdpBrowserSso",
      },
      idp_oauth_grant_attribute_mapping: {
        value: spIdpConnectionIdpOauthGrantAttributeMappingToHclTerraform(this._idpOauthGrantAttributeMapping.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SpIdpConnectionIdpOauthGrantAttributeMapping",
      },
      inbound_provisioning: {
        value: spIdpConnectionInboundProvisioningToHclTerraform(this._inboundProvisioning.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SpIdpConnectionInboundProvisioning",
      },
      license_connection_group: {
        value: cdktf.stringToHclTerraform(this._licenseConnectionGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logging_mode: {
        value: cdktf.stringToHclTerraform(this._loggingMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metadata_reload_settings: {
        value: spIdpConnectionMetadataReloadSettingsToHclTerraform(this._metadataReloadSettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SpIdpConnectionMetadataReloadSettings",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oidc_client_credentials: {
        value: spIdpConnectionOidcClientCredentialsToHclTerraform(this._oidcClientCredentials.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SpIdpConnectionOidcClientCredentials",
      },
      virtual_entity_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._virtualEntityIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ws_trust: {
        value: spIdpConnectionWsTrustToHclTerraform(this._wsTrust.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SpIdpConnectionWsTrust",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
