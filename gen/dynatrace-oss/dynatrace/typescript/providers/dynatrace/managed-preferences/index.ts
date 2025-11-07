// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/managed_preferences
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagedPreferencesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Default: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/managed_preferences#certificate_management_enabled ManagedPreferences#certificate_management_enabled}
  */
  readonly certificateManagementEnabled?: boolean | cdktf.IResolvable;
  /**
  * Default: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/managed_preferences#certificate_management_possible ManagedPreferences#certificate_management_possible}
  */
  readonly certificateManagementPossible?: boolean | cdktf.IResolvable;
  /**
  * If true, each new user will get an invitation to set up a Dynatrace user account to access Dynatrace support resources user upon first login. Default: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/managed_preferences#community_create_user ManagedPreferences#community_create_user}
  */
  readonly communityCreateUser?: boolean | cdktf.IResolvable;
  /**
  * If true, results from Documentation are included in platform search. Default: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/managed_preferences#community_external_search ManagedPreferences#community_external_search}
  */
  readonly communityExternalSearch?: boolean | cdktf.IResolvable;
  /**
  * If true, live, in-product assistance with our Product Experts is enabled. Default: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/managed_preferences#help_chat_enabled ManagedPreferences#help_chat_enabled}
  */
  readonly helpChatEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/managed_preferences#id ManagedPreferences#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * If true, audited, read-only remote access to your Dynatrace configuration settings is allowed. Default: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/managed_preferences#read_only_remote_access_allowed ManagedPreferences#read_only_remote_access_allowed}
  */
  readonly readOnlyRemoteAccessAllowed?: boolean | cdktf.IResolvable;
  /**
  * If true, audited access to your Dynatrace cluster is allowed by approved Dynatrace employees otherwise by privileged Dynatrace employees. Default: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/managed_preferences#remote_access_on_demand_only ManagedPreferences#remote_access_on_demand_only}
  */
  readonly remoteAccessOnDemandOnly?: boolean | cdktf.IResolvable;
  /**
  * If true, Dynatrace OneAgent monitors Dynatrace. Default: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/managed_preferences#ruxit_monitors_ruxit ManagedPreferences#ruxit_monitors_ruxit}
  */
  readonly ruxitMonitorsRuxit: boolean | cdktf.IResolvable;
  /**
  * If true, audited remote-access to your Dynatrace configuration is allowed settings. Default: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/managed_preferences#support_allow_remote_access ManagedPreferences#support_allow_remote_access}
  */
  readonly supportAllowRemoteAccess?: boolean | cdktf.IResolvable;
  /**
  * If true, usage and billing information will be reported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/managed_preferences#support_send_billing ManagedPreferences#support_send_billing}
  */
  readonly supportSendBilling: boolean | cdktf.IResolvable;
  /**
  * If true, Dynatrace cluster health will be reported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/managed_preferences#support_send_cluster_health ManagedPreferences#support_send_cluster_health}
  */
  readonly supportSendClusterHealth: boolean | cdktf.IResolvable;
  /**
  * If true, Dynatrace cluster health and OneAgent events will be reported. Default: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/managed_preferences#support_send_events ManagedPreferences#support_send_events}
  */
  readonly supportSendEvents?: boolean | cdktf.IResolvable;
  /**
  * If true, usage and billing information will NOT be reported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/managed_preferences#suppress_non_billing_relevant_data ManagedPreferences#suppress_non_billing_relevant_data}
  */
  readonly suppressNonBillingRelevantData: boolean | cdktf.IResolvable;
  /**
  * Default: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/managed_preferences#telemetry_sharing ManagedPreferences#telemetry_sharing}
  */
  readonly telemetrySharing?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/managed_preferences dynatrace_managed_preferences}
*/
export class ManagedPreferences extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_managed_preferences";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagedPreferences resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagedPreferences to import
  * @param importFromId The id of the existing ManagedPreferences that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/managed_preferences#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagedPreferences to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_managed_preferences", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/managed_preferences dynatrace_managed_preferences} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagedPreferencesConfig
  */
  public constructor(scope: Construct, id: string, config: ManagedPreferencesConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_managed_preferences',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.87.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._certificateManagementEnabled = config.certificateManagementEnabled;
    this._certificateManagementPossible = config.certificateManagementPossible;
    this._communityCreateUser = config.communityCreateUser;
    this._communityExternalSearch = config.communityExternalSearch;
    this._helpChatEnabled = config.helpChatEnabled;
    this._id = config.id;
    this._readOnlyRemoteAccessAllowed = config.readOnlyRemoteAccessAllowed;
    this._remoteAccessOnDemandOnly = config.remoteAccessOnDemandOnly;
    this._ruxitMonitorsRuxit = config.ruxitMonitorsRuxit;
    this._supportAllowRemoteAccess = config.supportAllowRemoteAccess;
    this._supportSendBilling = config.supportSendBilling;
    this._supportSendClusterHealth = config.supportSendClusterHealth;
    this._supportSendEvents = config.supportSendEvents;
    this._suppressNonBillingRelevantData = config.suppressNonBillingRelevantData;
    this._telemetrySharing = config.telemetrySharing;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate_management_enabled - computed: false, optional: true, required: false
  private _certificateManagementEnabled?: boolean | cdktf.IResolvable; 
  public get certificateManagementEnabled() {
    return this.getBooleanAttribute('certificate_management_enabled');
  }
  public set certificateManagementEnabled(value: boolean | cdktf.IResolvable) {
    this._certificateManagementEnabled = value;
  }
  public resetCertificateManagementEnabled() {
    this._certificateManagementEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateManagementEnabledInput() {
    return this._certificateManagementEnabled;
  }

  // certificate_management_possible - computed: false, optional: true, required: false
  private _certificateManagementPossible?: boolean | cdktf.IResolvable; 
  public get certificateManagementPossible() {
    return this.getBooleanAttribute('certificate_management_possible');
  }
  public set certificateManagementPossible(value: boolean | cdktf.IResolvable) {
    this._certificateManagementPossible = value;
  }
  public resetCertificateManagementPossible() {
    this._certificateManagementPossible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateManagementPossibleInput() {
    return this._certificateManagementPossible;
  }

  // community_create_user - computed: false, optional: true, required: false
  private _communityCreateUser?: boolean | cdktf.IResolvable; 
  public get communityCreateUser() {
    return this.getBooleanAttribute('community_create_user');
  }
  public set communityCreateUser(value: boolean | cdktf.IResolvable) {
    this._communityCreateUser = value;
  }
  public resetCommunityCreateUser() {
    this._communityCreateUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communityCreateUserInput() {
    return this._communityCreateUser;
  }

  // community_external_search - computed: false, optional: true, required: false
  private _communityExternalSearch?: boolean | cdktf.IResolvable; 
  public get communityExternalSearch() {
    return this.getBooleanAttribute('community_external_search');
  }
  public set communityExternalSearch(value: boolean | cdktf.IResolvable) {
    this._communityExternalSearch = value;
  }
  public resetCommunityExternalSearch() {
    this._communityExternalSearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communityExternalSearchInput() {
    return this._communityExternalSearch;
  }

  // help_chat_enabled - computed: false, optional: true, required: false
  private _helpChatEnabled?: boolean | cdktf.IResolvable; 
  public get helpChatEnabled() {
    return this.getBooleanAttribute('help_chat_enabled');
  }
  public set helpChatEnabled(value: boolean | cdktf.IResolvable) {
    this._helpChatEnabled = value;
  }
  public resetHelpChatEnabled() {
    this._helpChatEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helpChatEnabledInput() {
    return this._helpChatEnabled;
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

  // read_only_remote_access_allowed - computed: false, optional: true, required: false
  private _readOnlyRemoteAccessAllowed?: boolean | cdktf.IResolvable; 
  public get readOnlyRemoteAccessAllowed() {
    return this.getBooleanAttribute('read_only_remote_access_allowed');
  }
  public set readOnlyRemoteAccessAllowed(value: boolean | cdktf.IResolvable) {
    this._readOnlyRemoteAccessAllowed = value;
  }
  public resetReadOnlyRemoteAccessAllowed() {
    this._readOnlyRemoteAccessAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyRemoteAccessAllowedInput() {
    return this._readOnlyRemoteAccessAllowed;
  }

  // remote_access_on_demand_only - computed: false, optional: true, required: false
  private _remoteAccessOnDemandOnly?: boolean | cdktf.IResolvable; 
  public get remoteAccessOnDemandOnly() {
    return this.getBooleanAttribute('remote_access_on_demand_only');
  }
  public set remoteAccessOnDemandOnly(value: boolean | cdktf.IResolvable) {
    this._remoteAccessOnDemandOnly = value;
  }
  public resetRemoteAccessOnDemandOnly() {
    this._remoteAccessOnDemandOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteAccessOnDemandOnlyInput() {
    return this._remoteAccessOnDemandOnly;
  }

  // ruxit_monitors_ruxit - computed: false, optional: false, required: true
  private _ruxitMonitorsRuxit?: boolean | cdktf.IResolvable; 
  public get ruxitMonitorsRuxit() {
    return this.getBooleanAttribute('ruxit_monitors_ruxit');
  }
  public set ruxitMonitorsRuxit(value: boolean | cdktf.IResolvable) {
    this._ruxitMonitorsRuxit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruxitMonitorsRuxitInput() {
    return this._ruxitMonitorsRuxit;
  }

  // support_allow_remote_access - computed: false, optional: true, required: false
  private _supportAllowRemoteAccess?: boolean | cdktf.IResolvable; 
  public get supportAllowRemoteAccess() {
    return this.getBooleanAttribute('support_allow_remote_access');
  }
  public set supportAllowRemoteAccess(value: boolean | cdktf.IResolvable) {
    this._supportAllowRemoteAccess = value;
  }
  public resetSupportAllowRemoteAccess() {
    this._supportAllowRemoteAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportAllowRemoteAccessInput() {
    return this._supportAllowRemoteAccess;
  }

  // support_send_billing - computed: false, optional: false, required: true
  private _supportSendBilling?: boolean | cdktf.IResolvable; 
  public get supportSendBilling() {
    return this.getBooleanAttribute('support_send_billing');
  }
  public set supportSendBilling(value: boolean | cdktf.IResolvable) {
    this._supportSendBilling = value;
  }
  // Temporarily expose input value. Use with caution.
  public get supportSendBillingInput() {
    return this._supportSendBilling;
  }

  // support_send_cluster_health - computed: false, optional: false, required: true
  private _supportSendClusterHealth?: boolean | cdktf.IResolvable; 
  public get supportSendClusterHealth() {
    return this.getBooleanAttribute('support_send_cluster_health');
  }
  public set supportSendClusterHealth(value: boolean | cdktf.IResolvable) {
    this._supportSendClusterHealth = value;
  }
  // Temporarily expose input value. Use with caution.
  public get supportSendClusterHealthInput() {
    return this._supportSendClusterHealth;
  }

  // support_send_events - computed: false, optional: true, required: false
  private _supportSendEvents?: boolean | cdktf.IResolvable; 
  public get supportSendEvents() {
    return this.getBooleanAttribute('support_send_events');
  }
  public set supportSendEvents(value: boolean | cdktf.IResolvable) {
    this._supportSendEvents = value;
  }
  public resetSupportSendEvents() {
    this._supportSendEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportSendEventsInput() {
    return this._supportSendEvents;
  }

  // suppress_non_billing_relevant_data - computed: false, optional: false, required: true
  private _suppressNonBillingRelevantData?: boolean | cdktf.IResolvable; 
  public get suppressNonBillingRelevantData() {
    return this.getBooleanAttribute('suppress_non_billing_relevant_data');
  }
  public set suppressNonBillingRelevantData(value: boolean | cdktf.IResolvable) {
    this._suppressNonBillingRelevantData = value;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressNonBillingRelevantDataInput() {
    return this._suppressNonBillingRelevantData;
  }

  // telemetry_sharing - computed: false, optional: true, required: false
  private _telemetrySharing?: boolean | cdktf.IResolvable; 
  public get telemetrySharing() {
    return this.getBooleanAttribute('telemetry_sharing');
  }
  public set telemetrySharing(value: boolean | cdktf.IResolvable) {
    this._telemetrySharing = value;
  }
  public resetTelemetrySharing() {
    this._telemetrySharing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get telemetrySharingInput() {
    return this._telemetrySharing;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      certificate_management_enabled: cdktf.booleanToTerraform(this._certificateManagementEnabled),
      certificate_management_possible: cdktf.booleanToTerraform(this._certificateManagementPossible),
      community_create_user: cdktf.booleanToTerraform(this._communityCreateUser),
      community_external_search: cdktf.booleanToTerraform(this._communityExternalSearch),
      help_chat_enabled: cdktf.booleanToTerraform(this._helpChatEnabled),
      id: cdktf.stringToTerraform(this._id),
      read_only_remote_access_allowed: cdktf.booleanToTerraform(this._readOnlyRemoteAccessAllowed),
      remote_access_on_demand_only: cdktf.booleanToTerraform(this._remoteAccessOnDemandOnly),
      ruxit_monitors_ruxit: cdktf.booleanToTerraform(this._ruxitMonitorsRuxit),
      support_allow_remote_access: cdktf.booleanToTerraform(this._supportAllowRemoteAccess),
      support_send_billing: cdktf.booleanToTerraform(this._supportSendBilling),
      support_send_cluster_health: cdktf.booleanToTerraform(this._supportSendClusterHealth),
      support_send_events: cdktf.booleanToTerraform(this._supportSendEvents),
      suppress_non_billing_relevant_data: cdktf.booleanToTerraform(this._suppressNonBillingRelevantData),
      telemetry_sharing: cdktf.booleanToTerraform(this._telemetrySharing),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      certificate_management_enabled: {
        value: cdktf.booleanToHclTerraform(this._certificateManagementEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      certificate_management_possible: {
        value: cdktf.booleanToHclTerraform(this._certificateManagementPossible),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      community_create_user: {
        value: cdktf.booleanToHclTerraform(this._communityCreateUser),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      community_external_search: {
        value: cdktf.booleanToHclTerraform(this._communityExternalSearch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      help_chat_enabled: {
        value: cdktf.booleanToHclTerraform(this._helpChatEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      read_only_remote_access_allowed: {
        value: cdktf.booleanToHclTerraform(this._readOnlyRemoteAccessAllowed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      remote_access_on_demand_only: {
        value: cdktf.booleanToHclTerraform(this._remoteAccessOnDemandOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ruxit_monitors_ruxit: {
        value: cdktf.booleanToHclTerraform(this._ruxitMonitorsRuxit),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      support_allow_remote_access: {
        value: cdktf.booleanToHclTerraform(this._supportAllowRemoteAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      support_send_billing: {
        value: cdktf.booleanToHclTerraform(this._supportSendBilling),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      support_send_cluster_health: {
        value: cdktf.booleanToHclTerraform(this._supportSendClusterHealth),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      support_send_events: {
        value: cdktf.booleanToHclTerraform(this._supportSendEvents),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      suppress_non_billing_relevant_data: {
        value: cdktf.booleanToHclTerraform(this._suppressNonBillingRelevantData),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      telemetry_sharing: {
        value: cdktf.booleanToHclTerraform(this._telemetrySharing),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
