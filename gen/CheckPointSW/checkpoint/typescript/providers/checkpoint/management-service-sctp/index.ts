// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_service_sctp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementServiceSctpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Sets short (aggressive) timeouts for idle connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_service_sctp#aggressive_aging ManagementServiceSctp#aggressive_aging}
  */
  readonly aggressiveAging?: { [key: string]: string };
  /**
  * Color of the object. Should be one of existing colors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_service_sctp#color ManagementServiceSctp#color}
  */
  readonly color?: string;
  /**
  * Comments string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_service_sctp#comments ManagementServiceSctp#comments}
  */
  readonly comments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_service_sctp#id ManagementServiceSctp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Apply changes ignoring errors. You won't be able to publish such a changes. If ignore-warnings flag was omitted - warnings will also be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_service_sctp#ignore_errors ManagementServiceSctp#ignore_errors}
  */
  readonly ignoreErrors?: boolean | cdktf.IResolvable;
  /**
  * Apply changes ignoring warnings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_service_sctp#ignore_warnings ManagementServiceSctp#ignore_warnings}
  */
  readonly ignoreWarnings?: boolean | cdktf.IResolvable;
  /**
  * Keep connections open after policy has been installed even if they are not allowed under the new policy. This overrides the settings in the Connection Persistence page. If you change this property, the change will not affect open connections, but only future connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_service_sctp#keep_connections_open_after_policy_installation ManagementServiceSctp#keep_connections_open_after_policy_installation}
  */
  readonly keepConnectionsOpenAfterPolicyInstallation?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether this service is used when 'Any' is set as the rule's service and there are several service objects with the same source port and protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_service_sctp#match_for_any ManagementServiceSctp#match_for_any}
  */
  readonly matchForAny?: boolean | cdktf.IResolvable;
  /**
  * Object name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_service_sctp#name ManagementServiceSctp#name}
  */
  readonly name: string;
  /**
  * Port number. To specify a port range add a hyphen between the lowest and the highest port numbers, for example 44-45.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_service_sctp#port ManagementServiceSctp#port}
  */
  readonly port?: string;
  /**
  * Time (in seconds) before the session times out.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_service_sctp#session_timeout ManagementServiceSctp#session_timeout}
  */
  readonly sessionTimeout?: number;
  /**
  * Source port number. To specify a port range add a hyphen between the lowest and the highest port numbers, for example 44-45.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_service_sctp#source_port ManagementServiceSctp#source_port}
  */
  readonly sourcePort?: string;
  /**
  * Enables state-synchronized High Availability or Load Sharing on a ClusterXL or OPSEC-certified cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_service_sctp#sync_connections_on_cluster ManagementServiceSctp#sync_connections_on_cluster}
  */
  readonly syncConnectionsOnCluster?: boolean | cdktf.IResolvable;
  /**
  * Collection of tag identifiers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_service_sctp#tags ManagementServiceSctp#tags}
  */
  readonly tags?: string[];
  /**
  * Use default virtual session timeout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_service_sctp#use_default_session_timeout ManagementServiceSctp#use_default_session_timeout}
  */
  readonly useDefaultSessionTimeout?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_service_sctp checkpoint_management_service_sctp}
*/
export class ManagementServiceSctp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_service_sctp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementServiceSctp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementServiceSctp to import
  * @param importFromId The id of the existing ManagementServiceSctp that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_service_sctp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementServiceSctp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_service_sctp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_service_sctp checkpoint_management_service_sctp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementServiceSctpConfig
  */
  public constructor(scope: Construct, id: string, config: ManagementServiceSctpConfig) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_service_sctp',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.12.0',
        providerVersionConstraint: '2.12.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aggressiveAging = config.aggressiveAging;
    this._color = config.color;
    this._comments = config.comments;
    this._id = config.id;
    this._ignoreErrors = config.ignoreErrors;
    this._ignoreWarnings = config.ignoreWarnings;
    this._keepConnectionsOpenAfterPolicyInstallation = config.keepConnectionsOpenAfterPolicyInstallation;
    this._matchForAny = config.matchForAny;
    this._name = config.name;
    this._port = config.port;
    this._sessionTimeout = config.sessionTimeout;
    this._sourcePort = config.sourcePort;
    this._syncConnectionsOnCluster = config.syncConnectionsOnCluster;
    this._tags = config.tags;
    this._useDefaultSessionTimeout = config.useDefaultSessionTimeout;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aggressive_aging - computed: false, optional: true, required: false
  private _aggressiveAging?: { [key: string]: string }; 
  public get aggressiveAging() {
    return this.getStringMapAttribute('aggressive_aging');
  }
  public set aggressiveAging(value: { [key: string]: string }) {
    this._aggressiveAging = value;
  }
  public resetAggressiveAging() {
    this._aggressiveAging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggressiveAgingInput() {
    return this._aggressiveAging;
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
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

  // ignore_errors - computed: false, optional: true, required: false
  private _ignoreErrors?: boolean | cdktf.IResolvable; 
  public get ignoreErrors() {
    return this.getBooleanAttribute('ignore_errors');
  }
  public set ignoreErrors(value: boolean | cdktf.IResolvable) {
    this._ignoreErrors = value;
  }
  public resetIgnoreErrors() {
    this._ignoreErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreErrorsInput() {
    return this._ignoreErrors;
  }

  // ignore_warnings - computed: false, optional: true, required: false
  private _ignoreWarnings?: boolean | cdktf.IResolvable; 
  public get ignoreWarnings() {
    return this.getBooleanAttribute('ignore_warnings');
  }
  public set ignoreWarnings(value: boolean | cdktf.IResolvable) {
    this._ignoreWarnings = value;
  }
  public resetIgnoreWarnings() {
    this._ignoreWarnings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreWarningsInput() {
    return this._ignoreWarnings;
  }

  // keep_connections_open_after_policy_installation - computed: false, optional: true, required: false
  private _keepConnectionsOpenAfterPolicyInstallation?: boolean | cdktf.IResolvable; 
  public get keepConnectionsOpenAfterPolicyInstallation() {
    return this.getBooleanAttribute('keep_connections_open_after_policy_installation');
  }
  public set keepConnectionsOpenAfterPolicyInstallation(value: boolean | cdktf.IResolvable) {
    this._keepConnectionsOpenAfterPolicyInstallation = value;
  }
  public resetKeepConnectionsOpenAfterPolicyInstallation() {
    this._keepConnectionsOpenAfterPolicyInstallation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepConnectionsOpenAfterPolicyInstallationInput() {
    return this._keepConnectionsOpenAfterPolicyInstallation;
  }

  // match_for_any - computed: false, optional: true, required: false
  private _matchForAny?: boolean | cdktf.IResolvable; 
  public get matchForAny() {
    return this.getBooleanAttribute('match_for_any');
  }
  public set matchForAny(value: boolean | cdktf.IResolvable) {
    this._matchForAny = value;
  }
  public resetMatchForAny() {
    this._matchForAny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchForAnyInput() {
    return this._matchForAny;
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

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // session_timeout - computed: false, optional: true, required: false
  private _sessionTimeout?: number; 
  public get sessionTimeout() {
    return this.getNumberAttribute('session_timeout');
  }
  public set sessionTimeout(value: number) {
    this._sessionTimeout = value;
  }
  public resetSessionTimeout() {
    this._sessionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionTimeoutInput() {
    return this._sessionTimeout;
  }

  // source_port - computed: false, optional: true, required: false
  private _sourcePort?: string; 
  public get sourcePort() {
    return this.getStringAttribute('source_port');
  }
  public set sourcePort(value: string) {
    this._sourcePort = value;
  }
  public resetSourcePort() {
    this._sourcePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortInput() {
    return this._sourcePort;
  }

  // sync_connections_on_cluster - computed: false, optional: true, required: false
  private _syncConnectionsOnCluster?: boolean | cdktf.IResolvable; 
  public get syncConnectionsOnCluster() {
    return this.getBooleanAttribute('sync_connections_on_cluster');
  }
  public set syncConnectionsOnCluster(value: boolean | cdktf.IResolvable) {
    this._syncConnectionsOnCluster = value;
  }
  public resetSyncConnectionsOnCluster() {
    this._syncConnectionsOnCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncConnectionsOnClusterInput() {
    return this._syncConnectionsOnCluster;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // use_default_session_timeout - computed: false, optional: true, required: false
  private _useDefaultSessionTimeout?: boolean | cdktf.IResolvable; 
  public get useDefaultSessionTimeout() {
    return this.getBooleanAttribute('use_default_session_timeout');
  }
  public set useDefaultSessionTimeout(value: boolean | cdktf.IResolvable) {
    this._useDefaultSessionTimeout = value;
  }
  public resetUseDefaultSessionTimeout() {
    this._useDefaultSessionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDefaultSessionTimeoutInput() {
    return this._useDefaultSessionTimeout;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aggressive_aging: cdktf.hashMapper(cdktf.stringToTerraform)(this._aggressiveAging),
      color: cdktf.stringToTerraform(this._color),
      comments: cdktf.stringToTerraform(this._comments),
      id: cdktf.stringToTerraform(this._id),
      ignore_errors: cdktf.booleanToTerraform(this._ignoreErrors),
      ignore_warnings: cdktf.booleanToTerraform(this._ignoreWarnings),
      keep_connections_open_after_policy_installation: cdktf.booleanToTerraform(this._keepConnectionsOpenAfterPolicyInstallation),
      match_for_any: cdktf.booleanToTerraform(this._matchForAny),
      name: cdktf.stringToTerraform(this._name),
      port: cdktf.stringToTerraform(this._port),
      session_timeout: cdktf.numberToTerraform(this._sessionTimeout),
      source_port: cdktf.stringToTerraform(this._sourcePort),
      sync_connections_on_cluster: cdktf.booleanToTerraform(this._syncConnectionsOnCluster),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      use_default_session_timeout: cdktf.booleanToTerraform(this._useDefaultSessionTimeout),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aggressive_aging: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._aggressiveAging),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      color: {
        value: cdktf.stringToHclTerraform(this._color),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
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
      ignore_errors: {
        value: cdktf.booleanToHclTerraform(this._ignoreErrors),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ignore_warnings: {
        value: cdktf.booleanToHclTerraform(this._ignoreWarnings),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      keep_connections_open_after_policy_installation: {
        value: cdktf.booleanToHclTerraform(this._keepConnectionsOpenAfterPolicyInstallation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      match_for_any: {
        value: cdktf.booleanToHclTerraform(this._matchForAny),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.stringToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      session_timeout: {
        value: cdktf.numberToHclTerraform(this._sessionTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      source_port: {
        value: cdktf.stringToHclTerraform(this._sourcePort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sync_connections_on_cluster: {
        value: cdktf.booleanToHclTerraform(this._syncConnectionsOnCluster),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      use_default_session_timeout: {
        value: cdktf.booleanToHclTerraform(this._useDefaultSessionTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
