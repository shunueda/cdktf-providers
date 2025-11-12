// https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/organization_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrganizationConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/organization_connection#config OrganizationConnection#config}
  */
  readonly config?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/organization_connection#config_source OrganizationConnection#config_source}
  */
  readonly configSource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/organization_connection#config_wo OrganizationConnection#config_wo}
  */
  readonly configWo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/organization_connection#config_wo_version OrganizationConnection#config_wo_version}
  */
  readonly configWoVersion?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/organization_connection#connection_id OrganizationConnection#connection_id}
  */
  readonly connectionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/organization_connection#created_by OrganizationConnection#created_by}
  */
  readonly createdBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/organization_connection#credential_source OrganizationConnection#credential_source}
  */
  readonly credentialSource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/organization_connection#handle OrganizationConnection#handle}
  */
  readonly handle: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/organization_connection#id OrganizationConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/organization_connection#last_error_at OrganizationConnection#last_error_at}
  */
  readonly lastErrorAt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/organization_connection#last_error_process_id OrganizationConnection#last_error_process_id}
  */
  readonly lastErrorProcessId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/organization_connection#last_successful_update_at OrganizationConnection#last_successful_update_at}
  */
  readonly lastSuccessfulUpdateAt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/organization_connection#last_successful_update_process_id OrganizationConnection#last_successful_update_process_id}
  */
  readonly lastSuccessfulUpdateProcessId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/organization_connection#last_update_attempted_at OrganizationConnection#last_update_attempted_at}
  */
  readonly lastUpdateAttemptedAt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/organization_connection#last_update_attempted_at_process_id OrganizationConnection#last_update_attempted_at_process_id}
  */
  readonly lastUpdateAttemptedAtProcessId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/organization_connection#organization OrganizationConnection#organization}
  */
  readonly organization: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/organization_connection#plugin OrganizationConnection#plugin}
  */
  readonly plugin: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/organization_connection#plugin_version OrganizationConnection#plugin_version}
  */
  readonly pluginVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/organization_connection#status OrganizationConnection#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/organization_connection#type OrganizationConnection#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/organization_connection#updated_by OrganizationConnection#updated_by}
  */
  readonly updatedBy?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/organization_connection pipes_organization_connection}
*/
export class OrganizationConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pipes_organization_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrganizationConnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrganizationConnection to import
  * @param importFromId The id of the existing OrganizationConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/organization_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrganizationConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pipes_organization_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/organization_connection pipes_organization_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrganizationConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: OrganizationConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'pipes_organization_connection',
      terraformGeneratorMetadata: {
        providerName: 'pipes',
        providerVersion: '0.17.0',
        providerVersionConstraint: '0.17.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._config = config.config;
    this._configSource = config.configSource;
    this._configWo = config.configWo;
    this._configWoVersion = config.configWoVersion;
    this._connectionId = config.connectionId;
    this._createdBy = config.createdBy;
    this._credentialSource = config.credentialSource;
    this._handle = config.handle;
    this._id = config.id;
    this._lastErrorAt = config.lastErrorAt;
    this._lastErrorProcessId = config.lastErrorProcessId;
    this._lastSuccessfulUpdateAt = config.lastSuccessfulUpdateAt;
    this._lastSuccessfulUpdateProcessId = config.lastSuccessfulUpdateProcessId;
    this._lastUpdateAttemptedAt = config.lastUpdateAttemptedAt;
    this._lastUpdateAttemptedAtProcessId = config.lastUpdateAttemptedAtProcessId;
    this._organization = config.organization;
    this._plugin = config.plugin;
    this._pluginVersion = config.pluginVersion;
    this._status = config.status;
    this._type = config.type;
    this._updatedBy = config.updatedBy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config - computed: false, optional: true, required: false
  private _config?: string; 
  public get config() {
    return this.getStringAttribute('config');
  }
  public set config(value: string) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }

  // config_source - computed: true, optional: true, required: false
  private _configSource?: string; 
  public get configSource() {
    return this.getStringAttribute('config_source');
  }
  public set configSource(value: string) {
    this._configSource = value;
  }
  public resetConfigSource() {
    this._configSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configSourceInput() {
    return this._configSource;
  }

  // config_wo - computed: false, optional: true, required: false
  private _configWo?: string; 
  public get configWo() {
    return this.getStringAttribute('config_wo');
  }
  public set configWo(value: string) {
    this._configWo = value;
  }
  public resetConfigWo() {
    this._configWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configWoInput() {
    return this._configWo;
  }

  // config_wo_version - computed: false, optional: true, required: false
  private _configWoVersion?: number; 
  public get configWoVersion() {
    return this.getNumberAttribute('config_wo_version');
  }
  public set configWoVersion(value: number) {
    this._configWoVersion = value;
  }
  public resetConfigWoVersion() {
    this._configWoVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configWoVersionInput() {
    return this._configWoVersion;
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

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: true, required: false
  private _createdBy?: string; 
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }
  public set createdBy(value: string) {
    this._createdBy = value;
  }
  public resetCreatedBy() {
    this._createdBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdByInput() {
    return this._createdBy;
  }

  // credential_source - computed: true, optional: true, required: false
  private _credentialSource?: string; 
  public get credentialSource() {
    return this.getStringAttribute('credential_source');
  }
  public set credentialSource(value: string) {
    this._credentialSource = value;
  }
  public resetCredentialSource() {
    this._credentialSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialSourceInput() {
    return this._credentialSource;
  }

  // handle - computed: false, optional: false, required: true
  private _handle?: string; 
  public get handle() {
    return this.getStringAttribute('handle');
  }
  public set handle(value: string) {
    this._handle = value;
  }
  // Temporarily expose input value. Use with caution.
  public get handleInput() {
    return this._handle;
  }

  // handle_dynamic - computed: true, optional: false, required: false
  public get handleDynamic() {
    return this.getStringAttribute('handle_dynamic');
  }

  // handle_mode - computed: true, optional: false, required: false
  public get handleMode() {
    return this.getStringAttribute('handle_mode');
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

  // integration_resource_identifier - computed: true, optional: false, required: false
  public get integrationResourceIdentifier() {
    return this.getStringAttribute('integration_resource_identifier');
  }

  // integration_resource_name - computed: true, optional: false, required: false
  public get integrationResourceName() {
    return this.getStringAttribute('integration_resource_name');
  }

  // integration_resource_path - computed: true, optional: false, required: false
  public get integrationResourcePath() {
    return this.getStringAttribute('integration_resource_path');
  }

  // integration_resource_type - computed: true, optional: false, required: false
  public get integrationResourceType() {
    return this.getStringAttribute('integration_resource_type');
  }

  // last_error_at - computed: true, optional: true, required: false
  private _lastErrorAt?: string; 
  public get lastErrorAt() {
    return this.getStringAttribute('last_error_at');
  }
  public set lastErrorAt(value: string) {
    this._lastErrorAt = value;
  }
  public resetLastErrorAt() {
    this._lastErrorAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastErrorAtInput() {
    return this._lastErrorAt;
  }

  // last_error_process_id - computed: true, optional: true, required: false
  private _lastErrorProcessId?: string; 
  public get lastErrorProcessId() {
    return this.getStringAttribute('last_error_process_id');
  }
  public set lastErrorProcessId(value: string) {
    this._lastErrorProcessId = value;
  }
  public resetLastErrorProcessId() {
    this._lastErrorProcessId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastErrorProcessIdInput() {
    return this._lastErrorProcessId;
  }

  // last_successful_update_at - computed: true, optional: true, required: false
  private _lastSuccessfulUpdateAt?: string; 
  public get lastSuccessfulUpdateAt() {
    return this.getStringAttribute('last_successful_update_at');
  }
  public set lastSuccessfulUpdateAt(value: string) {
    this._lastSuccessfulUpdateAt = value;
  }
  public resetLastSuccessfulUpdateAt() {
    this._lastSuccessfulUpdateAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastSuccessfulUpdateAtInput() {
    return this._lastSuccessfulUpdateAt;
  }

  // last_successful_update_process_id - computed: true, optional: true, required: false
  private _lastSuccessfulUpdateProcessId?: string; 
  public get lastSuccessfulUpdateProcessId() {
    return this.getStringAttribute('last_successful_update_process_id');
  }
  public set lastSuccessfulUpdateProcessId(value: string) {
    this._lastSuccessfulUpdateProcessId = value;
  }
  public resetLastSuccessfulUpdateProcessId() {
    this._lastSuccessfulUpdateProcessId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastSuccessfulUpdateProcessIdInput() {
    return this._lastSuccessfulUpdateProcessId;
  }

  // last_update_attempted_at - computed: true, optional: true, required: false
  private _lastUpdateAttemptedAt?: string; 
  public get lastUpdateAttemptedAt() {
    return this.getStringAttribute('last_update_attempted_at');
  }
  public set lastUpdateAttemptedAt(value: string) {
    this._lastUpdateAttemptedAt = value;
  }
  public resetLastUpdateAttemptedAt() {
    this._lastUpdateAttemptedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastUpdateAttemptedAtInput() {
    return this._lastUpdateAttemptedAt;
  }

  // last_update_attempted_at_process_id - computed: true, optional: true, required: false
  private _lastUpdateAttemptedAtProcessId?: string; 
  public get lastUpdateAttemptedAtProcessId() {
    return this.getStringAttribute('last_update_attempted_at_process_id');
  }
  public set lastUpdateAttemptedAtProcessId(value: string) {
    this._lastUpdateAttemptedAtProcessId = value;
  }
  public resetLastUpdateAttemptedAtProcessId() {
    this._lastUpdateAttemptedAtProcessId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastUpdateAttemptedAtProcessIdInput() {
    return this._lastUpdateAttemptedAtProcessId;
  }

  // managed_by_id - computed: true, optional: false, required: false
  public get managedById() {
    return this.getStringAttribute('managed_by_id');
  }

  // organization - computed: false, optional: false, required: true
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
  }

  // organization_id - computed: true, optional: false, required: false
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }

  // parent_id - computed: true, optional: false, required: false
  public get parentId() {
    return this.getStringAttribute('parent_id');
  }

  // plugin - computed: false, optional: false, required: true
  private _plugin?: string; 
  public get plugin() {
    return this.getStringAttribute('plugin');
  }
  public set plugin(value: string) {
    this._plugin = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginInput() {
    return this._plugin;
  }

  // plugin_version - computed: true, optional: true, required: false
  private _pluginVersion?: string; 
  public get pluginVersion() {
    return this.getStringAttribute('plugin_version');
  }
  public set pluginVersion(value: string) {
    this._pluginVersion = value;
  }
  public resetPluginVersion() {
    this._pluginVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginVersionInput() {
    return this._pluginVersion;
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

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // trunk - computed: true, optional: false, required: false
  private _trunk = new cdktf.StringMapList(this, "trunk", false);
  public get trunk() {
    return this._trunk;
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

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // updated_by - computed: true, optional: true, required: false
  private _updatedBy?: string; 
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }
  public set updatedBy(value: string) {
    this._updatedBy = value;
  }
  public resetUpdatedBy() {
    this._updatedBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedByInput() {
    return this._updatedBy;
  }

  // version_id - computed: true, optional: false, required: false
  public get versionId() {
    return this.getNumberAttribute('version_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config: cdktf.stringToTerraform(this._config),
      config_source: cdktf.stringToTerraform(this._configSource),
      config_wo: cdktf.stringToTerraform(this._configWo),
      config_wo_version: cdktf.numberToTerraform(this._configWoVersion),
      connection_id: cdktf.stringToTerraform(this._connectionId),
      created_by: cdktf.stringToTerraform(this._createdBy),
      credential_source: cdktf.stringToTerraform(this._credentialSource),
      handle: cdktf.stringToTerraform(this._handle),
      id: cdktf.stringToTerraform(this._id),
      last_error_at: cdktf.stringToTerraform(this._lastErrorAt),
      last_error_process_id: cdktf.stringToTerraform(this._lastErrorProcessId),
      last_successful_update_at: cdktf.stringToTerraform(this._lastSuccessfulUpdateAt),
      last_successful_update_process_id: cdktf.stringToTerraform(this._lastSuccessfulUpdateProcessId),
      last_update_attempted_at: cdktf.stringToTerraform(this._lastUpdateAttemptedAt),
      last_update_attempted_at_process_id: cdktf.stringToTerraform(this._lastUpdateAttemptedAtProcessId),
      organization: cdktf.stringToTerraform(this._organization),
      plugin: cdktf.stringToTerraform(this._plugin),
      plugin_version: cdktf.stringToTerraform(this._pluginVersion),
      status: cdktf.stringToTerraform(this._status),
      type: cdktf.stringToTerraform(this._type),
      updated_by: cdktf.stringToTerraform(this._updatedBy),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config: {
        value: cdktf.stringToHclTerraform(this._config),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_source: {
        value: cdktf.stringToHclTerraform(this._configSource),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_wo: {
        value: cdktf.stringToHclTerraform(this._configWo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_wo_version: {
        value: cdktf.numberToHclTerraform(this._configWoVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      connection_id: {
        value: cdktf.stringToHclTerraform(this._connectionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      created_by: {
        value: cdktf.stringToHclTerraform(this._createdBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      credential_source: {
        value: cdktf.stringToHclTerraform(this._credentialSource),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      handle: {
        value: cdktf.stringToHclTerraform(this._handle),
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
      last_error_at: {
        value: cdktf.stringToHclTerraform(this._lastErrorAt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      last_error_process_id: {
        value: cdktf.stringToHclTerraform(this._lastErrorProcessId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      last_successful_update_at: {
        value: cdktf.stringToHclTerraform(this._lastSuccessfulUpdateAt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      last_successful_update_process_id: {
        value: cdktf.stringToHclTerraform(this._lastSuccessfulUpdateProcessId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      last_update_attempted_at: {
        value: cdktf.stringToHclTerraform(this._lastUpdateAttemptedAt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      last_update_attempted_at_process_id: {
        value: cdktf.stringToHclTerraform(this._lastUpdateAttemptedAtProcessId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization: {
        value: cdktf.stringToHclTerraform(this._organization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plugin: {
        value: cdktf.stringToHclTerraform(this._plugin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plugin_version: {
        value: cdktf.stringToHclTerraform(this._pluginVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      updated_by: {
        value: cdktf.stringToHclTerraform(this._updatedBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
