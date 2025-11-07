// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_service_other
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementServiceOtherConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies whether Other Service replies are to be accepted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_service_other#accept_replies ManagementServiceOther#accept_replies}
  */
  readonly acceptReplies?: boolean | cdktf.IResolvable;
  /**
  * Contains an INSPECT expression that defines the action to take if a rule containing this service is matched. Example: set r_mhandler &open_ssl_handler sets a handler on the connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_service_other#action ManagementServiceOther#action}
  */
  readonly action?: string;
  /**
  * Sets short (aggressive) timeouts for idle connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_service_other#aggressive_aging ManagementServiceOther#aggressive_aging}
  */
  readonly aggressiveAging?: { [key: string]: string };
  /**
  * Color of the object. Should be one of existing colors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_service_other#color ManagementServiceOther#color}
  */
  readonly color?: string;
  /**
  * Comments string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_service_other#comments ManagementServiceOther#comments}
  */
  readonly comments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_service_other#id ManagementServiceOther#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Apply changes ignoring errors. You won't be able to publish such a changes. If ignore-warnings flag was omitted - warnings will also be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_service_other#ignore_errors ManagementServiceOther#ignore_errors}
  */
  readonly ignoreErrors?: boolean | cdktf.IResolvable;
  /**
  * Apply changes ignoring warnings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_service_other#ignore_warnings ManagementServiceOther#ignore_warnings}
  */
  readonly ignoreWarnings?: boolean | cdktf.IResolvable;
  /**
  * IP protocol number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_service_other#ip_protocol ManagementServiceOther#ip_protocol}
  */
  readonly ipProtocol?: number;
  /**
  * Keep connections open after policy has been installed even if they are not allowed under the new policy. This overrides the settings in the Connection Persistence page. If you change this property, the change will not affect open connections, but only future connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_service_other#keep_connections_open_after_policy_installation ManagementServiceOther#keep_connections_open_after_policy_installation}
  */
  readonly keepConnectionsOpenAfterPolicyInstallation?: boolean | cdktf.IResolvable;
  /**
  * Contains an INSPECT expression that defines the matching criteria. The connection is examined against the expression during the first packet. Example: tcp, dport = 21, direction = 0 matches incoming FTP control connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_service_other#match ManagementServiceOther#match}
  */
  readonly match?: string;
  /**
  * Indicates whether this service is used when 'Any' is set as the rule's service and there are several service objects with the same source port and protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_service_other#match_for_any ManagementServiceOther#match_for_any}
  */
  readonly matchForAny?: boolean | cdktf.IResolvable;
  /**
  * Object name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_service_other#name ManagementServiceOther#name}
  */
  readonly name: string;
  /**
  * Indicates whether this service is a Data Domain service which has been overridden.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_service_other#override_default_settings ManagementServiceOther#override_default_settings}
  */
  readonly overrideDefaultSettings?: boolean | cdktf.IResolvable;
  /**
  * Time (in seconds) before the session times out.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_service_other#session_timeout ManagementServiceOther#session_timeout}
  */
  readonly sessionTimeout?: number;
  /**
  * Enables state-synchronized High Availability or Load Sharing on a ClusterXL or OPSEC-certified cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_service_other#sync_connections_on_cluster ManagementServiceOther#sync_connections_on_cluster}
  */
  readonly syncConnectionsOnCluster?: boolean | cdktf.IResolvable;
  /**
  * Collection of tag identifiers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_service_other#tags ManagementServiceOther#tags}
  */
  readonly tags?: string[];
  /**
  * Use default virtual session timeout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_service_other#use_default_session_timeout ManagementServiceOther#use_default_session_timeout}
  */
  readonly useDefaultSessionTimeout?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_service_other checkpoint_management_service_other}
*/
export class ManagementServiceOther extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_service_other";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementServiceOther resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementServiceOther to import
  * @param importFromId The id of the existing ManagementServiceOther that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_service_other#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementServiceOther to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_service_other", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_service_other checkpoint_management_service_other} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementServiceOtherConfig
  */
  public constructor(scope: Construct, id: string, config: ManagementServiceOtherConfig) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_service_other',
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
    this._action = config.action;
    this._aggressiveAging = config.aggressiveAging;
    this._color = config.color;
    this._comments = config.comments;
    this._id = config.id;
    this._ignoreErrors = config.ignoreErrors;
    this._ignoreWarnings = config.ignoreWarnings;
    this._ipProtocol = config.ipProtocol;
    this._keepConnectionsOpenAfterPolicyInstallation = config.keepConnectionsOpenAfterPolicyInstallation;
    this._match = config.match;
    this._matchForAny = config.matchForAny;
    this._name = config.name;
    this._overrideDefaultSettings = config.overrideDefaultSettings;
    this._sessionTimeout = config.sessionTimeout;
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

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

  // ip_protocol - computed: false, optional: true, required: false
  private _ipProtocol?: number; 
  public get ipProtocol() {
    return this.getNumberAttribute('ip_protocol');
  }
  public set ipProtocol(value: number) {
    this._ipProtocol = value;
  }
  public resetIpProtocol() {
    this._ipProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipProtocolInput() {
    return this._ipProtocol;
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

  // match - computed: false, optional: true, required: false
  private _match?: string; 
  public get match() {
    return this.getStringAttribute('match');
  }
  public set match(value: string) {
    this._match = value;
  }
  public resetMatch() {
    this._match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
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
      action: cdktf.stringToTerraform(this._action),
      aggressive_aging: cdktf.hashMapper(cdktf.stringToTerraform)(this._aggressiveAging),
      color: cdktf.stringToTerraform(this._color),
      comments: cdktf.stringToTerraform(this._comments),
      id: cdktf.stringToTerraform(this._id),
      ignore_errors: cdktf.booleanToTerraform(this._ignoreErrors),
      ignore_warnings: cdktf.booleanToTerraform(this._ignoreWarnings),
      ip_protocol: cdktf.numberToTerraform(this._ipProtocol),
      keep_connections_open_after_policy_installation: cdktf.booleanToTerraform(this._keepConnectionsOpenAfterPolicyInstallation),
      match: cdktf.stringToTerraform(this._match),
      match_for_any: cdktf.booleanToTerraform(this._matchForAny),
      name: cdktf.stringToTerraform(this._name),
      override_default_settings: cdktf.booleanToTerraform(this._overrideDefaultSettings),
      session_timeout: cdktf.numberToTerraform(this._sessionTimeout),
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
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      ip_protocol: {
        value: cdktf.numberToHclTerraform(this._ipProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      keep_connections_open_after_policy_installation: {
        value: cdktf.booleanToHclTerraform(this._keepConnectionsOpenAfterPolicyInstallation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      match: {
        value: cdktf.stringToHclTerraform(this._match),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      session_timeout: {
        value: cdktf.numberToHclTerraform(this._sessionTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
