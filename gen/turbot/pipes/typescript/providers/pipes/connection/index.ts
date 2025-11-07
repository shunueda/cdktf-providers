// https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/connection#config Connection#config}
  */
  readonly config?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/connection#config_wo Connection#config_wo}
  */
  readonly configWo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/connection#config_wo_version Connection#config_wo_version}
  */
  readonly configWoVersion?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/connection#connection_id Connection#connection_id}
  */
  readonly connectionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/connection#created_by Connection#created_by}
  */
  readonly createdBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/connection#handle Connection#handle}
  */
  readonly handle: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/connection#id Connection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/connection#identity_id Connection#identity_id}
  */
  readonly identityId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/connection#last_error_at Connection#last_error_at}
  */
  readonly lastErrorAt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/connection#last_error_process_id Connection#last_error_process_id}
  */
  readonly lastErrorProcessId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/connection#last_successful_update_at Connection#last_successful_update_at}
  */
  readonly lastSuccessfulUpdateAt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/connection#last_successful_update_process_id Connection#last_successful_update_process_id}
  */
  readonly lastSuccessfulUpdateProcessId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/connection#last_update_attempt_at Connection#last_update_attempt_at}
  */
  readonly lastUpdateAttemptAt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/connection#last_update_attempt_process_id Connection#last_update_attempt_process_id}
  */
  readonly lastUpdateAttemptProcessId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/connection#organization Connection#organization}
  */
  readonly organization: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/connection#plugin Connection#plugin}
  */
  readonly plugin: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/connection#plugin_version Connection#plugin_version}
  */
  readonly pluginVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/connection#status Connection#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/connection#type Connection#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/connection#updated_by Connection#updated_by}
  */
  readonly updatedBy?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/connection pipes_connection}
*/
export class Connection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pipes_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Connection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Connection to import
  * @param importFromId The id of the existing Connection that should be imported. Refer to the {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Connection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pipes_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/connection pipes_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: ConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'pipes_connection',
      terraformGeneratorMetadata: {
        providerName: 'pipes',
        providerVersion: '0.17.0'
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
    this._configWo = config.configWo;
    this._configWoVersion = config.configWoVersion;
    this._connectionId = config.connectionId;
    this._createdBy = config.createdBy;
    this._handle = config.handle;
    this._id = config.id;
    this._identityId = config.identityId;
    this._lastErrorAt = config.lastErrorAt;
    this._lastErrorProcessId = config.lastErrorProcessId;
    this._lastSuccessfulUpdateAt = config.lastSuccessfulUpdateAt;
    this._lastSuccessfulUpdateProcessId = config.lastSuccessfulUpdateProcessId;
    this._lastUpdateAttemptAt = config.lastUpdateAttemptAt;
    this._lastUpdateAttemptProcessId = config.lastUpdateAttemptProcessId;
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

  // identity_id - computed: true, optional: true, required: false
  private _identityId?: string; 
  public get identityId() {
    return this.getStringAttribute('identity_id');
  }
  public set identityId(value: string) {
    this._identityId = value;
  }
  public resetIdentityId() {
    this._identityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityIdInput() {
    return this._identityId;
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

  // last_update_attempt_at - computed: true, optional: true, required: false
  private _lastUpdateAttemptAt?: string; 
  public get lastUpdateAttemptAt() {
    return this.getStringAttribute('last_update_attempt_at');
  }
  public set lastUpdateAttemptAt(value: string) {
    this._lastUpdateAttemptAt = value;
  }
  public resetLastUpdateAttemptAt() {
    this._lastUpdateAttemptAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastUpdateAttemptAtInput() {
    return this._lastUpdateAttemptAt;
  }

  // last_update_attempt_process_id - computed: true, optional: true, required: false
  private _lastUpdateAttemptProcessId?: string; 
  public get lastUpdateAttemptProcessId() {
    return this.getStringAttribute('last_update_attempt_process_id');
  }
  public set lastUpdateAttemptProcessId(value: string) {
    this._lastUpdateAttemptProcessId = value;
  }
  public resetLastUpdateAttemptProcessId() {
    this._lastUpdateAttemptProcessId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastUpdateAttemptProcessIdInput() {
    return this._lastUpdateAttemptProcessId;
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
      config_wo: cdktf.stringToTerraform(this._configWo),
      config_wo_version: cdktf.numberToTerraform(this._configWoVersion),
      connection_id: cdktf.stringToTerraform(this._connectionId),
      created_by: cdktf.stringToTerraform(this._createdBy),
      handle: cdktf.stringToTerraform(this._handle),
      id: cdktf.stringToTerraform(this._id),
      identity_id: cdktf.stringToTerraform(this._identityId),
      last_error_at: cdktf.stringToTerraform(this._lastErrorAt),
      last_error_process_id: cdktf.stringToTerraform(this._lastErrorProcessId),
      last_successful_update_at: cdktf.stringToTerraform(this._lastSuccessfulUpdateAt),
      last_successful_update_process_id: cdktf.stringToTerraform(this._lastSuccessfulUpdateProcessId),
      last_update_attempt_at: cdktf.stringToTerraform(this._lastUpdateAttemptAt),
      last_update_attempt_process_id: cdktf.stringToTerraform(this._lastUpdateAttemptProcessId),
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
      identity_id: {
        value: cdktf.stringToHclTerraform(this._identityId),
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
      last_update_attempt_at: {
        value: cdktf.stringToHclTerraform(this._lastUpdateAttemptAt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      last_update_attempt_process_id: {
        value: cdktf.stringToHclTerraform(this._lastUpdateAttemptProcessId),
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
