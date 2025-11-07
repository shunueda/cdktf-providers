// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_service_udp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementServiceUdpConfig extends cdktf.TerraformMetaArguments {
  /**
  * N/A
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_service_udp#accept_replies ManagementServiceUdp#accept_replies}
  */
  readonly acceptReplies?: boolean | cdktf.IResolvable;
  /**
  * Sets short (aggressive) timeouts for idle connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_service_udp#aggressive_aging ManagementServiceUdp#aggressive_aging}
  */
  readonly aggressiveAging?: { [key: string]: string };
  /**
  * Color of the object. Should be one of existing colors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_service_udp#color ManagementServiceUdp#color}
  */
  readonly color?: string;
  /**
  * Comments string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_service_udp#comments ManagementServiceUdp#comments}
  */
  readonly comments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_service_udp#id ManagementServiceUdp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Apply changes ignoring errors. You won't be able to publish such a changes. If ignore-warnings flag was omitted - warnings will also be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_service_udp#ignore_errors ManagementServiceUdp#ignore_errors}
  */
  readonly ignoreErrors?: boolean | cdktf.IResolvable;
  /**
  * Apply changes ignoring warnings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_service_udp#ignore_warnings ManagementServiceUdp#ignore_warnings}
  */
  readonly ignoreWarnings?: boolean | cdktf.IResolvable;
  /**
  * Keep connections open after policy has been installed even if they are not allowed under the new policy. This overrides the settings in the Connection Persistence page. If you change this property, the change will not affect open connections, but only future connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_service_udp#keep_connections_open_after_policy_installation ManagementServiceUdp#keep_connections_open_after_policy_installation}
  */
  readonly keepConnectionsOpenAfterPolicyInstallation?: boolean | cdktf.IResolvable;
  /**
  * A value of true enables matching by the selected protocol's signature - the signature identifies the protocol as genuine. Select this option to limit the port to the specified protocol. If the selected protocol does not support matching by signature, this field cannot be set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_service_udp#match_by_protocol_signature ManagementServiceUdp#match_by_protocol_signature}
  */
  readonly matchByProtocolSignature?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether this service is used when 'Any' is set as the rule's service and there are several service objects with the same source port and protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_service_udp#match_for_any ManagementServiceUdp#match_for_any}
  */
  readonly matchForAny?: boolean | cdktf.IResolvable;
  /**
  * Object name. Should be unique in the domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_service_udp#name ManagementServiceUdp#name}
  */
  readonly name: string;
  /**
  * Indicates whether this service is a Data Domain service which has been overridden.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_service_udp#override_default_settings ManagementServiceUdp#override_default_settings}
  */
  readonly overrideDefaultSettings?: boolean | cdktf.IResolvable;
  /**
  * The number of the port used to provide this service. To specify a port range, place a hyphen between the lowest and highest port numbers, for example 44-55.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_service_udp#port ManagementServiceUdp#port}
  */
  readonly port?: string;
  /**
  * Select the protocol type associated with the service, and by implication, the management server (if any) that enforces Content Security and Authentication for the service. Selecting a Protocol Type invokes the specific protocol handlers for each protocol type, thus enabling higher level of security by parsing the protocol, and higher level of connectivity by tracking dynamic actions (such as opening of ports).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_service_udp#protocol ManagementServiceUdp#protocol}
  */
  readonly protocol?: string;
  /**
  * Time (in seconds) before the session times out.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_service_udp#session_timeout ManagementServiceUdp#session_timeout}
  */
  readonly sessionTimeout?: number;
  /**
  * Port number for the client side service. If specified, only those Source port Numbers will be Accepted, Dropped, or Rejected during packet inspection. Otherwise, the source port is not inspected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_service_udp#source_port ManagementServiceUdp#source_port}
  */
  readonly sourcePort?: string;
  /**
  * Enables state-synchronized High Availability or Load Sharing on a ClusterXL or OPSEC-certified cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_service_udp#sync_connections_on_cluster ManagementServiceUdp#sync_connections_on_cluster}
  */
  readonly syncConnectionsOnCluster?: boolean | cdktf.IResolvable;
  /**
  * Collection of tag identifiers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_service_udp#tags ManagementServiceUdp#tags}
  */
  readonly tags?: string[];
  /**
  * Use default virtual session timeout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_service_udp#use_default_session_timeout ManagementServiceUdp#use_default_session_timeout}
  */
  readonly useDefaultSessionTimeout?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_service_udp checkpoint_management_service_udp}
*/
export class ManagementServiceUdp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_service_udp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementServiceUdp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementServiceUdp to import
  * @param importFromId The id of the existing ManagementServiceUdp that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_service_udp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementServiceUdp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_service_udp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_service_udp checkpoint_management_service_udp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementServiceUdpConfig
  */
  public constructor(scope: Construct, id: string, config: ManagementServiceUdpConfig) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_service_udp',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._acceptReplies = config.acceptReplies;
    this._aggressiveAging = config.aggressiveAging;
    this._color = config.color;
    this._comments = config.comments;
    this._id = config.id;
    this._ignoreErrors = config.ignoreErrors;
    this._ignoreWarnings = config.ignoreWarnings;
    this._keepConnectionsOpenAfterPolicyInstallation = config.keepConnectionsOpenAfterPolicyInstallation;
    this._matchByProtocolSignature = config.matchByProtocolSignature;
    this._matchForAny = config.matchForAny;
    this._name = config.name;
    this._overrideDefaultSettings = config.overrideDefaultSettings;
    this._port = config.port;
    this._protocol = config.protocol;
    this._sessionTimeout = config.sessionTimeout;
    this._sourcePort = config.sourcePort;
    this._syncConnectionsOnCluster = config.syncConnectionsOnCluster;
    this._tags = config.tags;
    this._useDefaultSessionTimeout = config.useDefaultSessionTimeout;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accept_replies - computed: false, optional: true, required: false
  private _acceptReplies?: boolean | cdktf.IResolvable; 
  public get acceptReplies() {
    return this.getBooleanAttribute('accept_replies');
  }
  public set acceptReplies(value: boolean | cdktf.IResolvable) {
    this._acceptReplies = value;
  }
  public resetAcceptReplies() {
    this._acceptReplies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptRepliesInput() {
    return this._acceptReplies;
  }

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

  // match_by_protocol_signature - computed: false, optional: true, required: false
  private _matchByProtocolSignature?: boolean | cdktf.IResolvable; 
  public get matchByProtocolSignature() {
    return this.getBooleanAttribute('match_by_protocol_signature');
  }
  public set matchByProtocolSignature(value: boolean | cdktf.IResolvable) {
    this._matchByProtocolSignature = value;
  }
  public resetMatchByProtocolSignature() {
    this._matchByProtocolSignature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchByProtocolSignatureInput() {
    return this._matchByProtocolSignature;
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

  // override_default_settings - computed: false, optional: true, required: false
  private _overrideDefaultSettings?: boolean | cdktf.IResolvable; 
  public get overrideDefaultSettings() {
    return this.getBooleanAttribute('override_default_settings');
  }
  public set overrideDefaultSettings(value: boolean | cdktf.IResolvable) {
    this._overrideDefaultSettings = value;
  }
  public resetOverrideDefaultSettings() {
    this._overrideDefaultSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideDefaultSettingsInput() {
    return this._overrideDefaultSettings;
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

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
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
      accept_replies: cdktf.booleanToTerraform(this._acceptReplies),
      aggressive_aging: cdktf.hashMapper(cdktf.stringToTerraform)(this._aggressiveAging),
      color: cdktf.stringToTerraform(this._color),
      comments: cdktf.stringToTerraform(this._comments),
      id: cdktf.stringToTerraform(this._id),
      ignore_errors: cdktf.booleanToTerraform(this._ignoreErrors),
      ignore_warnings: cdktf.booleanToTerraform(this._ignoreWarnings),
      keep_connections_open_after_policy_installation: cdktf.booleanToTerraform(this._keepConnectionsOpenAfterPolicyInstallation),
      match_by_protocol_signature: cdktf.booleanToTerraform(this._matchByProtocolSignature),
      match_for_any: cdktf.booleanToTerraform(this._matchForAny),
      name: cdktf.stringToTerraform(this._name),
      override_default_settings: cdktf.booleanToTerraform(this._overrideDefaultSettings),
      port: cdktf.stringToTerraform(this._port),
      protocol: cdktf.stringToTerraform(this._protocol),
      session_timeout: cdktf.numberToTerraform(this._sessionTimeout),
      source_port: cdktf.stringToTerraform(this._sourcePort),
      sync_connections_on_cluster: cdktf.booleanToTerraform(this._syncConnectionsOnCluster),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      use_default_session_timeout: cdktf.booleanToTerraform(this._useDefaultSessionTimeout),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accept_replies: {
        value: cdktf.booleanToHclTerraform(this._acceptReplies),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
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
      match_by_protocol_signature: {
        value: cdktf.booleanToHclTerraform(this._matchByProtocolSignature),
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
      override_default_settings: {
        value: cdktf.booleanToHclTerraform(this._overrideDefaultSettings),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      port: {
        value: cdktf.stringToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
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
