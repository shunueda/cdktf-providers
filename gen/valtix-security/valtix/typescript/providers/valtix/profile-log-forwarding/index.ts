// https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_log_forwarding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProfileLogForwardingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_log_forwarding#auth_token ProfileLogForwarding#auth_token}
  */
  readonly authToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_log_forwarding#auth_type ProfileLogForwarding#auth_type}
  */
  readonly authType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_log_forwarding#batch_size ProfileLogForwarding#batch_size}
  */
  readonly batchSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_log_forwarding#bucket_name ProfileLogForwarding#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_log_forwarding#bucket_prefix ProfileLogForwarding#bucket_prefix}
  */
  readonly bucketPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_log_forwarding#csp_account_name ProfileLogForwarding#csp_account_name}
  */
  readonly cspAccountName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_log_forwarding#description ProfileLogForwarding#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_log_forwarding#destination ProfileLogForwarding#destination}
  */
  readonly destination?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_log_forwarding#endpoint ProfileLogForwarding#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_log_forwarding#field_name ProfileLogForwarding#field_name}
  */
  readonly fieldName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_log_forwarding#group_member_ids ProfileLogForwarding#group_member_ids}
  */
  readonly groupMemberIds?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_log_forwarding#id ProfileLogForwarding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_log_forwarding#log_analytics_log_type ProfileLogForwarding#log_analytics_log_type}
  */
  readonly logAnalyticsLogType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_log_forwarding#log_analytics_workspace_id ProfileLogForwarding#log_analytics_workspace_id}
  */
  readonly logAnalyticsWorkspaceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_log_forwarding#log_name ProfileLogForwarding#log_name}
  */
  readonly logName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_log_forwarding#name ProfileLogForwarding#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_log_forwarding#network_threat_severity ProfileLogForwarding#network_threat_severity}
  */
  readonly networkThreatSeverity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_log_forwarding#siem_vendor ProfileLogForwarding#siem_vendor}
  */
  readonly siemVendor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_log_forwarding#skip_verify ProfileLogForwarding#skip_verify}
  */
  readonly skipVerify?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_log_forwarding#splunk_index ProfileLogForwarding#splunk_index}
  */
  readonly splunkIndex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_log_forwarding#syslog_firewall_events ProfileLogForwarding#syslog_firewall_events}
  */
  readonly syslogFirewallEvents?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_log_forwarding#syslog_flow_logs ProfileLogForwarding#syslog_flow_logs}
  */
  readonly syslogFlowLogs?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_log_forwarding#syslog_https_logs ProfileLogForwarding#syslog_https_logs}
  */
  readonly syslogHttpsLogs?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_log_forwarding#syslog_port ProfileLogForwarding#syslog_port}
  */
  readonly syslogPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_log_forwarding#syslog_server_ip ProfileLogForwarding#syslog_server_ip}
  */
  readonly syslogServerIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_log_forwarding#type ProfileLogForwarding#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_log_forwarding#username ProfileLogForwarding#username}
  */
  readonly username?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_log_forwarding#web_attack_severity ProfileLogForwarding#web_attack_severity}
  */
  readonly webAttackSeverity?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_log_forwarding valtix_profile_log_forwarding}
*/
export class ProfileLogForwarding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "valtix_profile_log_forwarding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProfileLogForwarding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProfileLogForwarding to import
  * @param importFromId The id of the existing ProfileLogForwarding that should be imported. Refer to the {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_log_forwarding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProfileLogForwarding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "valtix_profile_log_forwarding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_log_forwarding valtix_profile_log_forwarding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProfileLogForwardingConfig
  */
  public constructor(scope: Construct, id: string, config: ProfileLogForwardingConfig) {
    super(scope, id, {
      terraformResourceType: 'valtix_profile_log_forwarding',
      terraformGeneratorMetadata: {
        providerName: 'valtix',
        providerVersion: '25.9.2',
        providerVersionConstraint: '25.9.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authToken = config.authToken;
    this._authType = config.authType;
    this._batchSize = config.batchSize;
    this._bucketName = config.bucketName;
    this._bucketPrefix = config.bucketPrefix;
    this._cspAccountName = config.cspAccountName;
    this._description = config.description;
    this._destination = config.destination;
    this._endpoint = config.endpoint;
    this._fieldName = config.fieldName;
    this._groupMemberIds = config.groupMemberIds;
    this._id = config.id;
    this._logAnalyticsLogType = config.logAnalyticsLogType;
    this._logAnalyticsWorkspaceId = config.logAnalyticsWorkspaceId;
    this._logName = config.logName;
    this._name = config.name;
    this._networkThreatSeverity = config.networkThreatSeverity;
    this._siemVendor = config.siemVendor;
    this._skipVerify = config.skipVerify;
    this._splunkIndex = config.splunkIndex;
    this._syslogFirewallEvents = config.syslogFirewallEvents;
    this._syslogFlowLogs = config.syslogFlowLogs;
    this._syslogHttpsLogs = config.syslogHttpsLogs;
    this._syslogPort = config.syslogPort;
    this._syslogServerIp = config.syslogServerIp;
    this._type = config.type;
    this._username = config.username;
    this._webAttackSeverity = config.webAttackSeverity;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_token - computed: false, optional: true, required: false
  private _authToken?: string; 
  public get authToken() {
    return this.getStringAttribute('auth_token');
  }
  public set authToken(value: string) {
    this._authToken = value;
  }
  public resetAuthToken() {
    this._authToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTokenInput() {
    return this._authToken;
  }

  // auth_type - computed: false, optional: true, required: false
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  public resetAuthType() {
    this._authType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // batch_size - computed: false, optional: true, required: false
  private _batchSize?: number; 
  public get batchSize() {
    return this.getNumberAttribute('batch_size');
  }
  public set batchSize(value: number) {
    this._batchSize = value;
  }
  public resetBatchSize() {
    this._batchSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchSizeInput() {
    return this._batchSize;
  }

  // bucket_name - computed: false, optional: true, required: false
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  public resetBucketName() {
    this._bucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // bucket_prefix - computed: false, optional: true, required: false
  private _bucketPrefix?: string; 
  public get bucketPrefix() {
    return this.getStringAttribute('bucket_prefix');
  }
  public set bucketPrefix(value: string) {
    this._bucketPrefix = value;
  }
  public resetBucketPrefix() {
    this._bucketPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketPrefixInput() {
    return this._bucketPrefix;
  }

  // csp_account_name - computed: false, optional: true, required: false
  private _cspAccountName?: string; 
  public get cspAccountName() {
    return this.getStringAttribute('csp_account_name');
  }
  public set cspAccountName(value: string) {
    this._cspAccountName = value;
  }
  public resetCspAccountName() {
    this._cspAccountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cspAccountNameInput() {
    return this._cspAccountName;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // destination - computed: false, optional: true, required: false
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  public resetDestination() {
    this._destination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // field_name - computed: false, optional: true, required: false
  private _fieldName?: string; 
  public get fieldName() {
    return this.getStringAttribute('field_name');
  }
  public set fieldName(value: string) {
    this._fieldName = value;
  }
  public resetFieldName() {
    this._fieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldNameInput() {
    return this._fieldName;
  }

  // group_member_ids - computed: false, optional: true, required: false
  private _groupMemberIds?: number[]; 
  public get groupMemberIds() {
    return this.getNumberListAttribute('group_member_ids');
  }
  public set groupMemberIds(value: number[]) {
    this._groupMemberIds = value;
  }
  public resetGroupMemberIds() {
    this._groupMemberIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupMemberIdsInput() {
    return this._groupMemberIds;
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

  // log_analytics_log_type - computed: false, optional: true, required: false
  private _logAnalyticsLogType?: string; 
  public get logAnalyticsLogType() {
    return this.getStringAttribute('log_analytics_log_type');
  }
  public set logAnalyticsLogType(value: string) {
    this._logAnalyticsLogType = value;
  }
  public resetLogAnalyticsLogType() {
    this._logAnalyticsLogType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAnalyticsLogTypeInput() {
    return this._logAnalyticsLogType;
  }

  // log_analytics_workspace_id - computed: false, optional: true, required: false
  private _logAnalyticsWorkspaceId?: string; 
  public get logAnalyticsWorkspaceId() {
    return this.getStringAttribute('log_analytics_workspace_id');
  }
  public set logAnalyticsWorkspaceId(value: string) {
    this._logAnalyticsWorkspaceId = value;
  }
  public resetLogAnalyticsWorkspaceId() {
    this._logAnalyticsWorkspaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAnalyticsWorkspaceIdInput() {
    return this._logAnalyticsWorkspaceId;
  }

  // log_name - computed: false, optional: true, required: false
  private _logName?: string; 
  public get logName() {
    return this.getStringAttribute('log_name');
  }
  public set logName(value: string) {
    this._logName = value;
  }
  public resetLogName() {
    this._logName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logNameInput() {
    return this._logName;
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

  // network_threat_severity - computed: false, optional: true, required: false
  private _networkThreatSeverity?: string; 
  public get networkThreatSeverity() {
    return this.getStringAttribute('network_threat_severity');
  }
  public set networkThreatSeverity(value: string) {
    this._networkThreatSeverity = value;
  }
  public resetNetworkThreatSeverity() {
    this._networkThreatSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkThreatSeverityInput() {
    return this._networkThreatSeverity;
  }

  // profile_id - computed: true, optional: false, required: false
  public get profileId() {
    return this.getNumberAttribute('profile_id');
  }

  // siem_vendor - computed: false, optional: true, required: false
  private _siemVendor?: string; 
  public get siemVendor() {
    return this.getStringAttribute('siem_vendor');
  }
  public set siemVendor(value: string) {
    this._siemVendor = value;
  }
  public resetSiemVendor() {
    this._siemVendor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siemVendorInput() {
    return this._siemVendor;
  }

  // skip_verify - computed: false, optional: true, required: false
  private _skipVerify?: boolean | cdktf.IResolvable; 
  public get skipVerify() {
    return this.getBooleanAttribute('skip_verify');
  }
  public set skipVerify(value: boolean | cdktf.IResolvable) {
    this._skipVerify = value;
  }
  public resetSkipVerify() {
    this._skipVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipVerifyInput() {
    return this._skipVerify;
  }

  // splunk_index - computed: false, optional: true, required: false
  private _splunkIndex?: string; 
  public get splunkIndex() {
    return this.getStringAttribute('splunk_index');
  }
  public set splunkIndex(value: string) {
    this._splunkIndex = value;
  }
  public resetSplunkIndex() {
    this._splunkIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splunkIndexInput() {
    return this._splunkIndex;
  }

  // syslog_firewall_events - computed: false, optional: true, required: false
  private _syslogFirewallEvents?: boolean | cdktf.IResolvable; 
  public get syslogFirewallEvents() {
    return this.getBooleanAttribute('syslog_firewall_events');
  }
  public set syslogFirewallEvents(value: boolean | cdktf.IResolvable) {
    this._syslogFirewallEvents = value;
  }
  public resetSyslogFirewallEvents() {
    this._syslogFirewallEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syslogFirewallEventsInput() {
    return this._syslogFirewallEvents;
  }

  // syslog_flow_logs - computed: false, optional: true, required: false
  private _syslogFlowLogs?: boolean | cdktf.IResolvable; 
  public get syslogFlowLogs() {
    return this.getBooleanAttribute('syslog_flow_logs');
  }
  public set syslogFlowLogs(value: boolean | cdktf.IResolvable) {
    this._syslogFlowLogs = value;
  }
  public resetSyslogFlowLogs() {
    this._syslogFlowLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syslogFlowLogsInput() {
    return this._syslogFlowLogs;
  }

  // syslog_https_logs - computed: false, optional: true, required: false
  private _syslogHttpsLogs?: boolean | cdktf.IResolvable; 
  public get syslogHttpsLogs() {
    return this.getBooleanAttribute('syslog_https_logs');
  }
  public set syslogHttpsLogs(value: boolean | cdktf.IResolvable) {
    this._syslogHttpsLogs = value;
  }
  public resetSyslogHttpsLogs() {
    this._syslogHttpsLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syslogHttpsLogsInput() {
    return this._syslogHttpsLogs;
  }

  // syslog_port - computed: false, optional: true, required: false
  private _syslogPort?: string; 
  public get syslogPort() {
    return this.getStringAttribute('syslog_port');
  }
  public set syslogPort(value: string) {
    this._syslogPort = value;
  }
  public resetSyslogPort() {
    this._syslogPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syslogPortInput() {
    return this._syslogPort;
  }

  // syslog_server_ip - computed: false, optional: true, required: false
  private _syslogServerIp?: string; 
  public get syslogServerIp() {
    return this.getStringAttribute('syslog_server_ip');
  }
  public set syslogServerIp(value: string) {
    this._syslogServerIp = value;
  }
  public resetSyslogServerIp() {
    this._syslogServerIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syslogServerIpInput() {
    return this._syslogServerIp;
  }

  // type - computed: false, optional: true, required: false
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

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // web_attack_severity - computed: false, optional: true, required: false
  private _webAttackSeverity?: string; 
  public get webAttackSeverity() {
    return this.getStringAttribute('web_attack_severity');
  }
  public set webAttackSeverity(value: string) {
    this._webAttackSeverity = value;
  }
  public resetWebAttackSeverity() {
    this._webAttackSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webAttackSeverityInput() {
    return this._webAttackSeverity;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_token: cdktf.stringToTerraform(this._authToken),
      auth_type: cdktf.stringToTerraform(this._authType),
      batch_size: cdktf.numberToTerraform(this._batchSize),
      bucket_name: cdktf.stringToTerraform(this._bucketName),
      bucket_prefix: cdktf.stringToTerraform(this._bucketPrefix),
      csp_account_name: cdktf.stringToTerraform(this._cspAccountName),
      description: cdktf.stringToTerraform(this._description),
      destination: cdktf.stringToTerraform(this._destination),
      endpoint: cdktf.stringToTerraform(this._endpoint),
      field_name: cdktf.stringToTerraform(this._fieldName),
      group_member_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._groupMemberIds),
      id: cdktf.stringToTerraform(this._id),
      log_analytics_log_type: cdktf.stringToTerraform(this._logAnalyticsLogType),
      log_analytics_workspace_id: cdktf.stringToTerraform(this._logAnalyticsWorkspaceId),
      log_name: cdktf.stringToTerraform(this._logName),
      name: cdktf.stringToTerraform(this._name),
      network_threat_severity: cdktf.stringToTerraform(this._networkThreatSeverity),
      siem_vendor: cdktf.stringToTerraform(this._siemVendor),
      skip_verify: cdktf.booleanToTerraform(this._skipVerify),
      splunk_index: cdktf.stringToTerraform(this._splunkIndex),
      syslog_firewall_events: cdktf.booleanToTerraform(this._syslogFirewallEvents),
      syslog_flow_logs: cdktf.booleanToTerraform(this._syslogFlowLogs),
      syslog_https_logs: cdktf.booleanToTerraform(this._syslogHttpsLogs),
      syslog_port: cdktf.stringToTerraform(this._syslogPort),
      syslog_server_ip: cdktf.stringToTerraform(this._syslogServerIp),
      type: cdktf.stringToTerraform(this._type),
      username: cdktf.stringToTerraform(this._username),
      web_attack_severity: cdktf.stringToTerraform(this._webAttackSeverity),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_token: {
        value: cdktf.stringToHclTerraform(this._authToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_type: {
        value: cdktf.stringToHclTerraform(this._authType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      batch_size: {
        value: cdktf.numberToHclTerraform(this._batchSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bucket_name: {
        value: cdktf.stringToHclTerraform(this._bucketName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bucket_prefix: {
        value: cdktf.stringToHclTerraform(this._bucketPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      csp_account_name: {
        value: cdktf.stringToHclTerraform(this._cspAccountName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination: {
        value: cdktf.stringToHclTerraform(this._destination),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint: {
        value: cdktf.stringToHclTerraform(this._endpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      field_name: {
        value: cdktf.stringToHclTerraform(this._fieldName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_member_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._groupMemberIds),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_analytics_log_type: {
        value: cdktf.stringToHclTerraform(this._logAnalyticsLogType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_analytics_workspace_id: {
        value: cdktf.stringToHclTerraform(this._logAnalyticsWorkspaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_name: {
        value: cdktf.stringToHclTerraform(this._logName),
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
      network_threat_severity: {
        value: cdktf.stringToHclTerraform(this._networkThreatSeverity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      siem_vendor: {
        value: cdktf.stringToHclTerraform(this._siemVendor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip_verify: {
        value: cdktf.booleanToHclTerraform(this._skipVerify),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      splunk_index: {
        value: cdktf.stringToHclTerraform(this._splunkIndex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      syslog_firewall_events: {
        value: cdktf.booleanToHclTerraform(this._syslogFirewallEvents),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      syslog_flow_logs: {
        value: cdktf.booleanToHclTerraform(this._syslogFlowLogs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      syslog_https_logs: {
        value: cdktf.booleanToHclTerraform(this._syslogHttpsLogs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      syslog_port: {
        value: cdktf.stringToHclTerraform(this._syslogPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      syslog_server_ip: {
        value: cdktf.stringToHclTerraform(this._syslogServerIp),
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
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      web_attack_severity: {
        value: cdktf.stringToHclTerraform(this._webAttackSeverity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
