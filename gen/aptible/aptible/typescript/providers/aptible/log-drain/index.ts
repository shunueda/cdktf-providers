// https://registry.terraform.io/providers/aptible/aptible/0.9.19/docs/resources/log_drain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogDrainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.19/docs/resources/log_drain#database_id LogDrain#database_id}
  */
  readonly databaseId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.19/docs/resources/log_drain#drain_apps LogDrain#drain_apps}
  */
  readonly drainApps?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.19/docs/resources/log_drain#drain_databases LogDrain#drain_databases}
  */
  readonly drainDatabases?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.19/docs/resources/log_drain#drain_ephemeral_sessions LogDrain#drain_ephemeral_sessions}
  */
  readonly drainEphemeralSessions?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.19/docs/resources/log_drain#drain_host LogDrain#drain_host}
  */
  readonly drainHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.19/docs/resources/log_drain#drain_password LogDrain#drain_password}
  */
  readonly drainPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.19/docs/resources/log_drain#drain_port LogDrain#drain_port}
  */
  readonly drainPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.19/docs/resources/log_drain#drain_proxies LogDrain#drain_proxies}
  */
  readonly drainProxies?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.19/docs/resources/log_drain#drain_type LogDrain#drain_type}
  */
  readonly drainType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.19/docs/resources/log_drain#drain_username LogDrain#drain_username}
  */
  readonly drainUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.19/docs/resources/log_drain#env_id LogDrain#env_id}
  */
  readonly envId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.19/docs/resources/log_drain#handle LogDrain#handle}
  */
  readonly handle: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.19/docs/resources/log_drain#id LogDrain#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.19/docs/resources/log_drain#logging_token LogDrain#logging_token}
  */
  readonly loggingToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.19/docs/resources/log_drain#pipeline LogDrain#pipeline}
  */
  readonly pipeline?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.19/docs/resources/log_drain#tags LogDrain#tags}
  */
  readonly tags?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.19/docs/resources/log_drain#token LogDrain#token}
  */
  readonly token?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.19/docs/resources/log_drain#url LogDrain#url}
  */
  readonly url?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aptible/aptible/0.9.19/docs/resources/log_drain aptible_log_drain}
*/
export class LogDrain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aptible_log_drain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LogDrain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogDrain to import
  * @param importFromId The id of the existing LogDrain that should be imported. Refer to the {@link https://registry.terraform.io/providers/aptible/aptible/0.9.19/docs/resources/log_drain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogDrain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aptible_log_drain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aptible/aptible/0.9.19/docs/resources/log_drain aptible_log_drain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogDrainConfig
  */
  public constructor(scope: Construct, id: string, config: LogDrainConfig) {
    super(scope, id, {
      terraformResourceType: 'aptible_log_drain',
      terraformGeneratorMetadata: {
        providerName: 'aptible',
        providerVersion: '0.9.19',
        providerVersionConstraint: '0.9.19'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._databaseId = config.databaseId;
    this._drainApps = config.drainApps;
    this._drainDatabases = config.drainDatabases;
    this._drainEphemeralSessions = config.drainEphemeralSessions;
    this._drainHost = config.drainHost;
    this._drainPassword = config.drainPassword;
    this._drainPort = config.drainPort;
    this._drainProxies = config.drainProxies;
    this._drainType = config.drainType;
    this._drainUsername = config.drainUsername;
    this._envId = config.envId;
    this._handle = config.handle;
    this._id = config.id;
    this._loggingToken = config.loggingToken;
    this._pipeline = config.pipeline;
    this._tags = config.tags;
    this._token = config.token;
    this._url = config.url;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // database_id - computed: false, optional: true, required: false
  private _databaseId?: number; 
  public get databaseId() {
    return this.getNumberAttribute('database_id');
  }
  public set databaseId(value: number) {
    this._databaseId = value;
  }
  public resetDatabaseId() {
    this._databaseId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseIdInput() {
    return this._databaseId;
  }

  // drain_apps - computed: false, optional: true, required: false
  private _drainApps?: boolean | cdktf.IResolvable; 
  public get drainApps() {
    return this.getBooleanAttribute('drain_apps');
  }
  public set drainApps(value: boolean | cdktf.IResolvable) {
    this._drainApps = value;
  }
  public resetDrainApps() {
    this._drainApps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drainAppsInput() {
    return this._drainApps;
  }

  // drain_databases - computed: false, optional: true, required: false
  private _drainDatabases?: boolean | cdktf.IResolvable; 
  public get drainDatabases() {
    return this.getBooleanAttribute('drain_databases');
  }
  public set drainDatabases(value: boolean | cdktf.IResolvable) {
    this._drainDatabases = value;
  }
  public resetDrainDatabases() {
    this._drainDatabases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drainDatabasesInput() {
    return this._drainDatabases;
  }

  // drain_ephemeral_sessions - computed: false, optional: true, required: false
  private _drainEphemeralSessions?: boolean | cdktf.IResolvable; 
  public get drainEphemeralSessions() {
    return this.getBooleanAttribute('drain_ephemeral_sessions');
  }
  public set drainEphemeralSessions(value: boolean | cdktf.IResolvable) {
    this._drainEphemeralSessions = value;
  }
  public resetDrainEphemeralSessions() {
    this._drainEphemeralSessions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drainEphemeralSessionsInput() {
    return this._drainEphemeralSessions;
  }

  // drain_host - computed: false, optional: true, required: false
  private _drainHost?: string; 
  public get drainHost() {
    return this.getStringAttribute('drain_host');
  }
  public set drainHost(value: string) {
    this._drainHost = value;
  }
  public resetDrainHost() {
    this._drainHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drainHostInput() {
    return this._drainHost;
  }

  // drain_password - computed: true, optional: true, required: false
  private _drainPassword?: string; 
  public get drainPassword() {
    return this.getStringAttribute('drain_password');
  }
  public set drainPassword(value: string) {
    this._drainPassword = value;
  }
  public resetDrainPassword() {
    this._drainPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drainPasswordInput() {
    return this._drainPassword;
  }

  // drain_port - computed: false, optional: true, required: false
  private _drainPort?: number; 
  public get drainPort() {
    return this.getNumberAttribute('drain_port');
  }
  public set drainPort(value: number) {
    this._drainPort = value;
  }
  public resetDrainPort() {
    this._drainPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drainPortInput() {
    return this._drainPort;
  }

  // drain_proxies - computed: false, optional: true, required: false
  private _drainProxies?: boolean | cdktf.IResolvable; 
  public get drainProxies() {
    return this.getBooleanAttribute('drain_proxies');
  }
  public set drainProxies(value: boolean | cdktf.IResolvable) {
    this._drainProxies = value;
  }
  public resetDrainProxies() {
    this._drainProxies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drainProxiesInput() {
    return this._drainProxies;
  }

  // drain_type - computed: false, optional: false, required: true
  private _drainType?: string; 
  public get drainType() {
    return this.getStringAttribute('drain_type');
  }
  public set drainType(value: string) {
    this._drainType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get drainTypeInput() {
    return this._drainType;
  }

  // drain_username - computed: true, optional: true, required: false
  private _drainUsername?: string; 
  public get drainUsername() {
    return this.getStringAttribute('drain_username');
  }
  public set drainUsername(value: string) {
    this._drainUsername = value;
  }
  public resetDrainUsername() {
    this._drainUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drainUsernameInput() {
    return this._drainUsername;
  }

  // env_id - computed: false, optional: false, required: true
  private _envId?: number; 
  public get envId() {
    return this.getNumberAttribute('env_id');
  }
  public set envId(value: number) {
    this._envId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get envIdInput() {
    return this._envId;
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

  // log_drain_id - computed: true, optional: false, required: false
  public get logDrainId() {
    return this.getNumberAttribute('log_drain_id');
  }

  // logging_token - computed: true, optional: true, required: false
  private _loggingToken?: string; 
  public get loggingToken() {
    return this.getStringAttribute('logging_token');
  }
  public set loggingToken(value: string) {
    this._loggingToken = value;
  }
  public resetLoggingToken() {
    this._loggingToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingTokenInput() {
    return this._loggingToken;
  }

  // pipeline - computed: false, optional: true, required: false
  private _pipeline?: string; 
  public get pipeline() {
    return this.getStringAttribute('pipeline');
  }
  public set pipeline(value: string) {
    this._pipeline = value;
  }
  public resetPipeline() {
    this._pipeline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineInput() {
    return this._pipeline;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string; 
  public get tags() {
    return this.getStringAttribute('tags');
  }
  public set tags(value: string) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      database_id: cdktf.numberToTerraform(this._databaseId),
      drain_apps: cdktf.booleanToTerraform(this._drainApps),
      drain_databases: cdktf.booleanToTerraform(this._drainDatabases),
      drain_ephemeral_sessions: cdktf.booleanToTerraform(this._drainEphemeralSessions),
      drain_host: cdktf.stringToTerraform(this._drainHost),
      drain_password: cdktf.stringToTerraform(this._drainPassword),
      drain_port: cdktf.numberToTerraform(this._drainPort),
      drain_proxies: cdktf.booleanToTerraform(this._drainProxies),
      drain_type: cdktf.stringToTerraform(this._drainType),
      drain_username: cdktf.stringToTerraform(this._drainUsername),
      env_id: cdktf.numberToTerraform(this._envId),
      handle: cdktf.stringToTerraform(this._handle),
      id: cdktf.stringToTerraform(this._id),
      logging_token: cdktf.stringToTerraform(this._loggingToken),
      pipeline: cdktf.stringToTerraform(this._pipeline),
      tags: cdktf.stringToTerraform(this._tags),
      token: cdktf.stringToTerraform(this._token),
      url: cdktf.stringToTerraform(this._url),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      database_id: {
        value: cdktf.numberToHclTerraform(this._databaseId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drain_apps: {
        value: cdktf.booleanToHclTerraform(this._drainApps),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      drain_databases: {
        value: cdktf.booleanToHclTerraform(this._drainDatabases),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      drain_ephemeral_sessions: {
        value: cdktf.booleanToHclTerraform(this._drainEphemeralSessions),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      drain_host: {
        value: cdktf.stringToHclTerraform(this._drainHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      drain_password: {
        value: cdktf.stringToHclTerraform(this._drainPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      drain_port: {
        value: cdktf.numberToHclTerraform(this._drainPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drain_proxies: {
        value: cdktf.booleanToHclTerraform(this._drainProxies),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      drain_type: {
        value: cdktf.stringToHclTerraform(this._drainType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      drain_username: {
        value: cdktf.stringToHclTerraform(this._drainUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      env_id: {
        value: cdktf.numberToHclTerraform(this._envId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      logging_token: {
        value: cdktf.stringToHclTerraform(this._loggingToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pipeline: {
        value: cdktf.stringToHclTerraform(this._pipeline),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.stringToHclTerraform(this._tags),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token: {
        value: cdktf.stringToHclTerraform(this._token),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
