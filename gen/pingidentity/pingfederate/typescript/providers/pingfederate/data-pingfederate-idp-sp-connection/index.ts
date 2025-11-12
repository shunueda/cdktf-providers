// generated from terraform resource schema

import { DataPingfederateIdpSpConnectionAdditionalAllowedEntitiesConfigurationOutputReference, 
DataPingfederateIdpSpConnectionAttributeQueryOutputReference, 
DataPingfederateIdpSpConnectionContactInfoOutputReference, 
DataPingfederateIdpSpConnectionCredentialsOutputReference, 
DataPingfederateIdpSpConnectionExtendedPropertiesMap, 
DataPingfederateIdpSpConnectionMetadataReloadSettingsOutputReference, 
DataPingfederateIdpSpConnectionOutboundProvisionOutputReference, 
DataPingfederateIdpSpConnectionSpBrowserSsoOutputReference, 
DataPingfederateIdpSpConnectionWsTrustOutputReference} from './index-structs'
export * from './index-structs'
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataPingfederateIdpSpConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The persistent, unique ID for the connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/idp_sp_connection#connection_id DataPingfederateIdpSpConnection#connection_id}
  */
  readonly connectionId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/idp_sp_connection pingfederate_idp_sp_connection}
*/
export class DataPingfederateIdpSpConnection extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingfederate_idp_sp_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingfederateIdpSpConnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingfederateIdpSpConnection to import
  * @param importFromId The id of the existing DataPingfederateIdpSpConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/idp_sp_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingfederateIdpSpConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingfederate_idp_sp_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/idp_sp_connection pingfederate_idp_sp_connection} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingfederateIdpSpConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingfederateIdpSpConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'pingfederate_idp_sp_connection',
      terraformGeneratorMetadata: {
        providerName: 'pingfederate',
        providerVersion: '1.6.2',
        providerVersionConstraint: '1.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._connectionId = config.connectionId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active - computed: true, optional: false, required: false
  public get active() {
    return this.getBooleanAttribute('active');
  }

  // additional_allowed_entities_configuration - computed: true, optional: false, required: false
  private _additionalAllowedEntitiesConfiguration = new DataPingfederateIdpSpConnectionAdditionalAllowedEntitiesConfigurationOutputReference(this, "additional_allowed_entities_configuration");
  public get additionalAllowedEntitiesConfiguration() {
    return this._additionalAllowedEntitiesConfiguration;
  }

  // application_icon_url - computed: true, optional: false, required: false
  public get applicationIconUrl() {
    return this.getStringAttribute('application_icon_url');
  }

  // application_name - computed: true, optional: false, required: false
  public get applicationName() {
    return this.getStringAttribute('application_name');
  }

  // attribute_query - computed: true, optional: false, required: false
  private _attributeQuery = new DataPingfederateIdpSpConnectionAttributeQueryOutputReference(this, "attribute_query");
  public get attributeQuery() {
    return this._attributeQuery;
  }

  // base_url - computed: true, optional: false, required: false
  public get baseUrl() {
    return this.getStringAttribute('base_url');
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

  // connection_target_type - computed: true, optional: false, required: false
  public get connectionTargetType() {
    return this.getStringAttribute('connection_target_type');
  }

  // contact_info - computed: true, optional: false, required: false
  private _contactInfo = new DataPingfederateIdpSpConnectionContactInfoOutputReference(this, "contact_info");
  public get contactInfo() {
    return this._contactInfo;
  }

  // creation_date - computed: true, optional: false, required: false
  public get creationDate() {
    return this.getStringAttribute('creation_date');
  }

  // credentials - computed: true, optional: false, required: false
  private _credentials = new DataPingfederateIdpSpConnectionCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }

  // default_virtual_entity_id - computed: true, optional: false, required: false
  public get defaultVirtualEntityId() {
    return this.getStringAttribute('default_virtual_entity_id');
  }

  // entity_id - computed: true, optional: false, required: false
  public get entityId() {
    return this.getStringAttribute('entity_id');
  }

  // extended_properties - computed: true, optional: false, required: false
  private _extendedProperties = new DataPingfederateIdpSpConnectionExtendedPropertiesMap(this, "extended_properties");
  public get extendedProperties() {
    return this._extendedProperties;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // license_connection_group - computed: true, optional: false, required: false
  public get licenseConnectionGroup() {
    return this.getStringAttribute('license_connection_group');
  }

  // logging_mode - computed: true, optional: false, required: false
  public get loggingMode() {
    return this.getStringAttribute('logging_mode');
  }

  // metadata_reload_settings - computed: true, optional: false, required: false
  private _metadataReloadSettings = new DataPingfederateIdpSpConnectionMetadataReloadSettingsOutputReference(this, "metadata_reload_settings");
  public get metadataReloadSettings() {
    return this._metadataReloadSettings;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // outbound_provision - computed: true, optional: false, required: false
  private _outboundProvision = new DataPingfederateIdpSpConnectionOutboundProvisionOutputReference(this, "outbound_provision");
  public get outboundProvision() {
    return this._outboundProvision;
  }

  // sp_browser_sso - computed: true, optional: false, required: false
  private _spBrowserSso = new DataPingfederateIdpSpConnectionSpBrowserSsoOutputReference(this, "sp_browser_sso");
  public get spBrowserSso() {
    return this._spBrowserSso;
  }

  // virtual_entity_ids - computed: true, optional: false, required: false
  public get virtualEntityIds() {
    return cdktf.Fn.tolist(this.getListAttribute('virtual_entity_ids'));
  }

  // ws_trust - computed: true, optional: false, required: false
  private _wsTrust = new DataPingfederateIdpSpConnectionWsTrustOutputReference(this, "ws_trust");
  public get wsTrust() {
    return this._wsTrust;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connection_id: cdktf.stringToTerraform(this._connectionId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connection_id: {
        value: cdktf.stringToHclTerraform(this._connectionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
