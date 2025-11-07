// generated from terraform resource schema

import { IdpSpConnectionAdditionalAllowedEntitiesConfiguration, 
idpSpConnectionAdditionalAllowedEntitiesConfigurationToTerraform, 
idpSpConnectionAdditionalAllowedEntitiesConfigurationToHclTerraform, 
IdpSpConnectionAdditionalAllowedEntitiesConfigurationOutputReference, 
IdpSpConnectionAttributeQuery, 
idpSpConnectionAttributeQueryToTerraform, 
idpSpConnectionAttributeQueryToHclTerraform, 
IdpSpConnectionAttributeQueryOutputReference, 
IdpSpConnectionContactInfo, 
idpSpConnectionContactInfoToTerraform, 
idpSpConnectionContactInfoToHclTerraform, 
IdpSpConnectionContactInfoOutputReference, 
IdpSpConnectionCredentials, 
idpSpConnectionCredentialsToTerraform, 
idpSpConnectionCredentialsToHclTerraform, 
IdpSpConnectionCredentialsOutputReference, 
IdpSpConnectionExtendedProperties, 
idpSpConnectionExtendedPropertiesToTerraform, 
idpSpConnectionExtendedPropertiesToHclTerraform, 
IdpSpConnectionExtendedPropertiesMap, 
IdpSpConnectionMetadataReloadSettings, 
idpSpConnectionMetadataReloadSettingsToTerraform, 
idpSpConnectionMetadataReloadSettingsToHclTerraform, 
IdpSpConnectionMetadataReloadSettingsOutputReference, 
IdpSpConnectionOutboundProvision, 
idpSpConnectionOutboundProvisionToTerraform, 
idpSpConnectionOutboundProvisionToHclTerraform, 
IdpSpConnectionOutboundProvisionOutputReference, 
IdpSpConnectionSpBrowserSso, 
idpSpConnectionSpBrowserSsoToTerraform, 
idpSpConnectionSpBrowserSsoToHclTerraform, 
IdpSpConnectionSpBrowserSsoOutputReference, 
IdpSpConnectionWsTrust, 
idpSpConnectionWsTrustToTerraform, 
idpSpConnectionWsTrustToHclTerraform, 
IdpSpConnectionWsTrustOutputReference} from './index-structs'
export * from './index-structs'
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IdpSpConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies whether the connection is active and ready to process incoming requests. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#active IdpSpConnection#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Additional allowed entities or issuers configuration. Currently only used in OIDC IdP (RP) connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#additional_allowed_entities_configuration IdpSpConnection#additional_allowed_entities_configuration}
  */
  readonly additionalAllowedEntitiesConfiguration?: IdpSpConnectionAdditionalAllowedEntitiesConfiguration;
  /**
  * The application icon url.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#application_icon_url IdpSpConnection#application_icon_url}
  */
  readonly applicationIconUrl?: string;
  /**
  * The application name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#application_name IdpSpConnection#application_name}
  */
  readonly applicationName?: string;
  /**
  * The attribute query profile supports SPs in requesting user attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#attribute_query IdpSpConnection#attribute_query}
  */
  readonly attributeQuery?: IdpSpConnectionAttributeQuery;
  /**
  * The fully-qualified hostname and port on which your partner's federation deployment runs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#base_url IdpSpConnection#base_url}
  */
  readonly baseUrl?: string;
  /**
  * The persistent, unique ID for the connection. It can be any combination of `[a-zA-Z0-9._-]`. This field is immutable and will trigger a replacement plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#connection_id IdpSpConnection#connection_id}
  */
  readonly connectionId: string;
  /**
  * The connection target type. This field is intended for bulk import/export usage. Changing its value may result in unexpected behavior. The default value is `STANDARD`. Options are `STANDARD`, `SALESFORCE`, `SALESFORCE_CP`, `SALESFORCE_PP`, `PINGONE_SCIM11`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#connection_target_type IdpSpConnection#connection_target_type}
  */
  readonly connectionTargetType?: string;
  /**
  * Contact information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#contact_info IdpSpConnection#contact_info}
  */
  readonly contactInfo?: IdpSpConnectionContactInfo;
  /**
  * The certificates and settings for encryption, signing, and signature verification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#credentials IdpSpConnection#credentials}
  */
  readonly credentials?: IdpSpConnectionCredentials;
  /**
  * The default alternate entity ID that identifies the local server to this partner. It is required when `virtual_entity_ids` is not empty and must be included in that list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#default_virtual_entity_id IdpSpConnection#default_virtual_entity_id}
  */
  readonly defaultVirtualEntityId?: string;
  /**
  * The partner's entity ID (connection ID) or issuer value (for OIDC Connections).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#entity_id IdpSpConnection#entity_id}
  */
  readonly entityId: string;
  /**
  * Extended Properties allows to store additional information for IdP/SP Connections. The names of these extended properties should be defined in the `pingfederate_extended_properties` resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#extended_properties IdpSpConnection#extended_properties}
  */
  readonly extendedProperties?: { [key: string]: IdpSpConnectionExtendedProperties } | cdktf.IResolvable;
  /**
  * The license connection group. If your PingFederate license is based on connection groups, each connection must be assigned to a group before it can be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#license_connection_group IdpSpConnection#license_connection_group}
  */
  readonly licenseConnectionGroup?: string;
  /**
  * The level of transaction logging applicable for this connection. Default is `STANDARD`. Options are `NONE`, `STANDARD`, `ENHANCED`, `FULL`. If the `sp_connection_transaction_logging_override` attribute is set to anything other than `DONT_OVERRIDE` in the `server_settings_general` resource, then this attribute must be set to the same value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#logging_mode IdpSpConnection#logging_mode}
  */
  readonly loggingMode?: string;
  /**
  * Configuration settings to enable automatic reload of partner's metadata.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#metadata_reload_settings IdpSpConnection#metadata_reload_settings}
  */
  readonly metadataReloadSettings?: IdpSpConnectionMetadataReloadSettings;
  /**
  * The connection name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#name IdpSpConnection#name}
  */
  readonly name: string;
  /**
  * Outbound Provisioning allows an IdP to create and maintain user accounts at standards-based partner sites using SCIM as well as select-proprietary provisioning partner sites that are protocol-enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#outbound_provision IdpSpConnection#outbound_provision}
  */
  readonly outboundProvision?: IdpSpConnectionOutboundProvision;
  /**
  * The SAML settings used to enable secure browser-based SSO to resources at your partner's site.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#sp_browser_sso IdpSpConnection#sp_browser_sso}
  */
  readonly spBrowserSso?: IdpSpConnectionSpBrowserSso;
  /**
  * List of alternate entity IDs that identifies the local server to this partner.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#virtual_entity_ids IdpSpConnection#virtual_entity_ids}
  */
  readonly virtualEntityIds?: string[];
  /**
  * Ws-Trust STS provides security-token validation and creation to extend SSO access to identity-enabled Web Services
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#ws_trust IdpSpConnection#ws_trust}
  */
  readonly wsTrust?: IdpSpConnectionWsTrust;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection pingfederate_idp_sp_connection}
*/
export class IdpSpConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingfederate_idp_sp_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IdpSpConnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IdpSpConnection to import
  * @param importFromId The id of the existing IdpSpConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IdpSpConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingfederate_idp_sp_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection pingfederate_idp_sp_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdpSpConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: IdpSpConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'pingfederate_idp_sp_connection',
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
    this._applicationIconUrl = config.applicationIconUrl;
    this._applicationName = config.applicationName;
    this._attributeQuery.internalValue = config.attributeQuery;
    this._baseUrl = config.baseUrl;
    this._connectionId = config.connectionId;
    this._connectionTargetType = config.connectionTargetType;
    this._contactInfo.internalValue = config.contactInfo;
    this._credentials.internalValue = config.credentials;
    this._defaultVirtualEntityId = config.defaultVirtualEntityId;
    this._entityId = config.entityId;
    this._extendedProperties.internalValue = config.extendedProperties;
    this._licenseConnectionGroup = config.licenseConnectionGroup;
    this._loggingMode = config.loggingMode;
    this._metadataReloadSettings.internalValue = config.metadataReloadSettings;
    this._name = config.name;
    this._outboundProvision.internalValue = config.outboundProvision;
    this._spBrowserSso.internalValue = config.spBrowserSso;
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

  // additional_allowed_entities_configuration - computed: false, optional: true, required: false
  private _additionalAllowedEntitiesConfiguration = new IdpSpConnectionAdditionalAllowedEntitiesConfigurationOutputReference(this, "additional_allowed_entities_configuration");
  public get additionalAllowedEntitiesConfiguration() {
    return this._additionalAllowedEntitiesConfiguration;
  }
  public putAdditionalAllowedEntitiesConfiguration(value: IdpSpConnectionAdditionalAllowedEntitiesConfiguration) {
    this._additionalAllowedEntitiesConfiguration.internalValue = value;
  }
  public resetAdditionalAllowedEntitiesConfiguration() {
    this._additionalAllowedEntitiesConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalAllowedEntitiesConfigurationInput() {
    return this._additionalAllowedEntitiesConfiguration.internalValue;
  }

  // application_icon_url - computed: false, optional: true, required: false
  private _applicationIconUrl?: string; 
  public get applicationIconUrl() {
    return this.getStringAttribute('application_icon_url');
  }
  public set applicationIconUrl(value: string) {
    this._applicationIconUrl = value;
  }
  public resetApplicationIconUrl() {
    this._applicationIconUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIconUrlInput() {
    return this._applicationIconUrl;
  }

  // application_name - computed: false, optional: true, required: false
  private _applicationName?: string; 
  public get applicationName() {
    return this.getStringAttribute('application_name');
  }
  public set applicationName(value: string) {
    this._applicationName = value;
  }
  public resetApplicationName() {
    this._applicationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationNameInput() {
    return this._applicationName;
  }

  // attribute_query - computed: false, optional: true, required: false
  private _attributeQuery = new IdpSpConnectionAttributeQueryOutputReference(this, "attribute_query");
  public get attributeQuery() {
    return this._attributeQuery;
  }
  public putAttributeQuery(value: IdpSpConnectionAttributeQuery) {
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

  // connection_id - computed: false, optional: false, required: true
  private _connectionId?: string; 
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }
  public set connectionId(value: string) {
    this._connectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionIdInput() {
    return this._connectionId;
  }

  // connection_target_type - computed: true, optional: true, required: false
  private _connectionTargetType?: string; 
  public get connectionTargetType() {
    return this.getStringAttribute('connection_target_type');
  }
  public set connectionTargetType(value: string) {
    this._connectionTargetType = value;
  }
  public resetConnectionTargetType() {
    this._connectionTargetType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionTargetTypeInput() {
    return this._connectionTargetType;
  }

  // contact_info - computed: false, optional: true, required: false
  private _contactInfo = new IdpSpConnectionContactInfoOutputReference(this, "contact_info");
  public get contactInfo() {
    return this._contactInfo;
  }
  public putContactInfo(value: IdpSpConnectionContactInfo) {
    this._contactInfo.internalValue = value;
  }
  public resetContactInfo() {
    this._contactInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactInfoInput() {
    return this._contactInfo.internalValue;
  }

  // creation_date - computed: true, optional: false, required: false
  public get creationDate() {
    return this.getStringAttribute('creation_date');
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials = new IdpSpConnectionCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: IdpSpConnectionCredentials) {
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

  // extended_properties - computed: false, optional: true, required: false
  private _extendedProperties = new IdpSpConnectionExtendedPropertiesMap(this, "extended_properties");
  public get extendedProperties() {
    return this._extendedProperties;
  }
  public putExtendedProperties(value: { [key: string]: IdpSpConnectionExtendedProperties } | cdktf.IResolvable) {
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
  private _metadataReloadSettings = new IdpSpConnectionMetadataReloadSettingsOutputReference(this, "metadata_reload_settings");
  public get metadataReloadSettings() {
    return this._metadataReloadSettings;
  }
  public putMetadataReloadSettings(value: IdpSpConnectionMetadataReloadSettings) {
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

  // outbound_provision - computed: false, optional: true, required: false
  private _outboundProvision = new IdpSpConnectionOutboundProvisionOutputReference(this, "outbound_provision");
  public get outboundProvision() {
    return this._outboundProvision;
  }
  public putOutboundProvision(value: IdpSpConnectionOutboundProvision) {
    this._outboundProvision.internalValue = value;
  }
  public resetOutboundProvision() {
    this._outboundProvision.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundProvisionInput() {
    return this._outboundProvision.internalValue;
  }

  // sp_browser_sso - computed: false, optional: true, required: false
  private _spBrowserSso = new IdpSpConnectionSpBrowserSsoOutputReference(this, "sp_browser_sso");
  public get spBrowserSso() {
    return this._spBrowserSso;
  }
  public putSpBrowserSso(value: IdpSpConnectionSpBrowserSso) {
    this._spBrowserSso.internalValue = value;
  }
  public resetSpBrowserSso() {
    this._spBrowserSso.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spBrowserSsoInput() {
    return this._spBrowserSso.internalValue;
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
  private _wsTrust = new IdpSpConnectionWsTrustOutputReference(this, "ws_trust");
  public get wsTrust() {
    return this._wsTrust;
  }
  public putWsTrust(value: IdpSpConnectionWsTrust) {
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
      additional_allowed_entities_configuration: idpSpConnectionAdditionalAllowedEntitiesConfigurationToTerraform(this._additionalAllowedEntitiesConfiguration.internalValue),
      application_icon_url: cdktf.stringToTerraform(this._applicationIconUrl),
      application_name: cdktf.stringToTerraform(this._applicationName),
      attribute_query: idpSpConnectionAttributeQueryToTerraform(this._attributeQuery.internalValue),
      base_url: cdktf.stringToTerraform(this._baseUrl),
      connection_id: cdktf.stringToTerraform(this._connectionId),
      connection_target_type: cdktf.stringToTerraform(this._connectionTargetType),
      contact_info: idpSpConnectionContactInfoToTerraform(this._contactInfo.internalValue),
      credentials: idpSpConnectionCredentialsToTerraform(this._credentials.internalValue),
      default_virtual_entity_id: cdktf.stringToTerraform(this._defaultVirtualEntityId),
      entity_id: cdktf.stringToTerraform(this._entityId),
      extended_properties: cdktf.hashMapper(idpSpConnectionExtendedPropertiesToTerraform)(this._extendedProperties.internalValue),
      license_connection_group: cdktf.stringToTerraform(this._licenseConnectionGroup),
      logging_mode: cdktf.stringToTerraform(this._loggingMode),
      metadata_reload_settings: idpSpConnectionMetadataReloadSettingsToTerraform(this._metadataReloadSettings.internalValue),
      name: cdktf.stringToTerraform(this._name),
      outbound_provision: idpSpConnectionOutboundProvisionToTerraform(this._outboundProvision.internalValue),
      sp_browser_sso: idpSpConnectionSpBrowserSsoToTerraform(this._spBrowserSso.internalValue),
      virtual_entity_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._virtualEntityIds),
      ws_trust: idpSpConnectionWsTrustToTerraform(this._wsTrust.internalValue),
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
        value: idpSpConnectionAdditionalAllowedEntitiesConfigurationToHclTerraform(this._additionalAllowedEntitiesConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IdpSpConnectionAdditionalAllowedEntitiesConfiguration",
      },
      application_icon_url: {
        value: cdktf.stringToHclTerraform(this._applicationIconUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      application_name: {
        value: cdktf.stringToHclTerraform(this._applicationName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute_query: {
        value: idpSpConnectionAttributeQueryToHclTerraform(this._attributeQuery.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IdpSpConnectionAttributeQuery",
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
      connection_target_type: {
        value: cdktf.stringToHclTerraform(this._connectionTargetType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      contact_info: {
        value: idpSpConnectionContactInfoToHclTerraform(this._contactInfo.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IdpSpConnectionContactInfo",
      },
      credentials: {
        value: idpSpConnectionCredentialsToHclTerraform(this._credentials.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IdpSpConnectionCredentials",
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
      extended_properties: {
        value: cdktf.hashMapperHcl(idpSpConnectionExtendedPropertiesToHclTerraform)(this._extendedProperties.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "IdpSpConnectionExtendedPropertiesMap",
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
        value: idpSpConnectionMetadataReloadSettingsToHclTerraform(this._metadataReloadSettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IdpSpConnectionMetadataReloadSettings",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      outbound_provision: {
        value: idpSpConnectionOutboundProvisionToHclTerraform(this._outboundProvision.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IdpSpConnectionOutboundProvision",
      },
      sp_browser_sso: {
        value: idpSpConnectionSpBrowserSsoToHclTerraform(this._spBrowserSso.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IdpSpConnectionSpBrowserSso",
      },
      virtual_entity_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._virtualEntityIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ws_trust: {
        value: idpSpConnectionWsTrustToHclTerraform(this._wsTrust.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IdpSpConnectionWsTrust",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
