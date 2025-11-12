// https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/domain_expiry_monitor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DomainExpiryMonitorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Action to be performed on monitor IT Automation templates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/domain_expiry_monitor#actions DomainExpiryMonitor#actions}
  */
  readonly actions?: { [key: string]: string };
  /**
  * Name for the monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/domain_expiry_monitor#display_name DomainExpiryMonitor#display_name}
  */
  readonly displayName: string;
  /**
  * Specify the name of the Whois server from where you wish to query the domain data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/domain_expiry_monitor#domain_name DomainExpiryMonitor#domain_name}
  */
  readonly domainName?: string;
  /**
  * Day threshold for domain expiry notification.Range 1 - 999
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/domain_expiry_monitor#expire_days DomainExpiryMonitor#expire_days}
  */
  readonly expireDays?: number;
  /**
  * Registered domain name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/domain_expiry_monitor#host_name DomainExpiryMonitor#host_name}
  */
  readonly hostName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/domain_expiry_monitor#id DomainExpiryMonitor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Ignores the registry expiry date and prefer registrar expiry date when notifying for domain expiry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/domain_expiry_monitor#ignore_registry_date DomainExpiryMonitor#ignore_registry_date}
  */
  readonly ignoreRegistryDate?: boolean | cdktf.IResolvable;
  /**
  * Location profile to be associated with the monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/domain_expiry_monitor#location_profile_id DomainExpiryMonitor#location_profile_id}
  */
  readonly locationProfileId?: string;
  /**
  * Name of the location profile to be associated with the monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/domain_expiry_monitor#location_profile_name DomainExpiryMonitor#location_profile_name}
  */
  readonly locationProfileName?: string;
  /**
  * Perform case sensitive keyword search or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/domain_expiry_monitor#match_case DomainExpiryMonitor#match_case}
  */
  readonly matchCase?: boolean | cdktf.IResolvable;
  /**
  * Match the regular expression in the website response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/domain_expiry_monitor#match_regex DomainExpiryMonitor#match_regex}
  */
  readonly matchRegex?: { [key: string]: string };
  /**
  * Check for the keyword in the website response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/domain_expiry_monitor#matching_keyword DomainExpiryMonitor#matching_keyword}
  */
  readonly matchingKeyword?: { [key: string]: string };
  /**
  * List of monitor groups to which the monitor has to be associated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/domain_expiry_monitor#monitor_groups DomainExpiryMonitor#monitor_groups}
  */
  readonly monitorGroups?: string[];
  /**
  * Notification profile to be associated with the monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/domain_expiry_monitor#notification_profile_id DomainExpiryMonitor#notification_profile_id}
  */
  readonly notificationProfileId?: string;
  /**
  * Name of the notification profile to be associated with the monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/domain_expiry_monitor#notification_profile_name DomainExpiryMonitor#notification_profile_name}
  */
  readonly notificationProfileName?: string;
  /**
  * A new On Call schedule to be associated with monitors when user group id  is not chosen
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/domain_expiry_monitor#on_call_schedule_id DomainExpiryMonitor#on_call_schedule_id}
  */
  readonly onCallScheduleId?: string;
  /**
  * To perform automation or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/domain_expiry_monitor#perform_automation DomainExpiryMonitor#perform_automation}
  */
  readonly performAutomation?: boolean | cdktf.IResolvable;
  /**
  * Who is Server Port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/domain_expiry_monitor#port DomainExpiryMonitor#port}
  */
  readonly port?: number;
  /**
  * List of tag IDs to be associated to the monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/domain_expiry_monitor#tag_ids DomainExpiryMonitor#tag_ids}
  */
  readonly tagIds?: string[];
  /**
  * List of tag names to be associated to the monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/domain_expiry_monitor#tag_names DomainExpiryMonitor#tag_names}
  */
  readonly tagNames?: string[];
  /**
  * List of Third Party Service IDs to be associated to the monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/domain_expiry_monitor#third_party_service_ids DomainExpiryMonitor#third_party_service_ids}
  */
  readonly thirdPartyServiceIds?: string[];
  /**
  * Timeout for connecting to website. Default value is 10. Range 1 - 45
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/domain_expiry_monitor#timeout DomainExpiryMonitor#timeout}
  */
  readonly timeout?: number;
  /**
  * Check for non existence of keyword in the website response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/domain_expiry_monitor#unmatching_keyword DomainExpiryMonitor#unmatching_keyword}
  */
  readonly unmatchingKeyword?: { [key: string]: string };
  /**
  * Monitoring is performed over IPv6 from supported locations. IPv6 locations do not fall back to IPv4 on failure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/domain_expiry_monitor#use_ipv6 DomainExpiryMonitor#use_ipv6}
  */
  readonly useIpv6?: boolean | cdktf.IResolvable;
  /**
  * List of user groups to be notified when the monitor is down
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/domain_expiry_monitor#user_group_ids DomainExpiryMonitor#user_group_ids}
  */
  readonly userGroupIds?: string[];
  /**
  * Name of the user groups to be associated with the monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/domain_expiry_monitor#user_group_names DomainExpiryMonitor#user_group_names}
  */
  readonly userGroupNames?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/domain_expiry_monitor site24x7_domain_expiry_monitor}
*/
export class DomainExpiryMonitor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "site24x7_domain_expiry_monitor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DomainExpiryMonitor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DomainExpiryMonitor to import
  * @param importFromId The id of the existing DomainExpiryMonitor that should be imported. Refer to the {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/domain_expiry_monitor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DomainExpiryMonitor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "site24x7_domain_expiry_monitor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/domain_expiry_monitor site24x7_domain_expiry_monitor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DomainExpiryMonitorConfig
  */
  public constructor(scope: Construct, id: string, config: DomainExpiryMonitorConfig) {
    super(scope, id, {
      terraformResourceType: 'site24x7_domain_expiry_monitor',
      terraformGeneratorMetadata: {
        providerName: 'site24x7',
        providerVersion: '2.0.3',
        providerVersionConstraint: '2.0.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._actions = config.actions;
    this._displayName = config.displayName;
    this._domainName = config.domainName;
    this._expireDays = config.expireDays;
    this._hostName = config.hostName;
    this._id = config.id;
    this._ignoreRegistryDate = config.ignoreRegistryDate;
    this._locationProfileId = config.locationProfileId;
    this._locationProfileName = config.locationProfileName;
    this._matchCase = config.matchCase;
    this._matchRegex = config.matchRegex;
    this._matchingKeyword = config.matchingKeyword;
    this._monitorGroups = config.monitorGroups;
    this._notificationProfileId = config.notificationProfileId;
    this._notificationProfileName = config.notificationProfileName;
    this._onCallScheduleId = config.onCallScheduleId;
    this._performAutomation = config.performAutomation;
    this._port = config.port;
    this._tagIds = config.tagIds;
    this._tagNames = config.tagNames;
    this._thirdPartyServiceIds = config.thirdPartyServiceIds;
    this._timeout = config.timeout;
    this._unmatchingKeyword = config.unmatchingKeyword;
    this._useIpv6 = config.useIpv6;
    this._userGroupIds = config.userGroupIds;
    this._userGroupNames = config.userGroupNames;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // actions - computed: false, optional: true, required: false
  private _actions?: { [key: string]: string }; 
  public get actions() {
    return this.getStringMapAttribute('actions');
  }
  public set actions(value: { [key: string]: string }) {
    this._actions = value;
  }
  public resetActions() {
    this._actions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // domain_name - computed: false, optional: true, required: false
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  public resetDomainName() {
    this._domainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // expire_days - computed: false, optional: true, required: false
  private _expireDays?: number; 
  public get expireDays() {
    return this.getNumberAttribute('expire_days');
  }
  public set expireDays(value: number) {
    this._expireDays = value;
  }
  public resetExpireDays() {
    this._expireDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expireDaysInput() {
    return this._expireDays;
  }

  // host_name - computed: false, optional: false, required: true
  private _hostName?: string; 
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
  public set hostName(value: string) {
    this._hostName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
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

  // ignore_registry_date - computed: false, optional: true, required: false
  private _ignoreRegistryDate?: boolean | cdktf.IResolvable; 
  public get ignoreRegistryDate() {
    return this.getBooleanAttribute('ignore_registry_date');
  }
  public set ignoreRegistryDate(value: boolean | cdktf.IResolvable) {
    this._ignoreRegistryDate = value;
  }
  public resetIgnoreRegistryDate() {
    this._ignoreRegistryDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreRegistryDateInput() {
    return this._ignoreRegistryDate;
  }

  // location_profile_id - computed: true, optional: true, required: false
  private _locationProfileId?: string; 
  public get locationProfileId() {
    return this.getStringAttribute('location_profile_id');
  }
  public set locationProfileId(value: string) {
    this._locationProfileId = value;
  }
  public resetLocationProfileId() {
    this._locationProfileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationProfileIdInput() {
    return this._locationProfileId;
  }

  // location_profile_name - computed: true, optional: true, required: false
  private _locationProfileName?: string; 
  public get locationProfileName() {
    return this.getStringAttribute('location_profile_name');
  }
  public set locationProfileName(value: string) {
    this._locationProfileName = value;
  }
  public resetLocationProfileName() {
    this._locationProfileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationProfileNameInput() {
    return this._locationProfileName;
  }

  // match_case - computed: false, optional: true, required: false
  private _matchCase?: boolean | cdktf.IResolvable; 
  public get matchCase() {
    return this.getBooleanAttribute('match_case');
  }
  public set matchCase(value: boolean | cdktf.IResolvable) {
    this._matchCase = value;
  }
  public resetMatchCase() {
    this._matchCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCaseInput() {
    return this._matchCase;
  }

  // match_regex - computed: false, optional: true, required: false
  private _matchRegex?: { [key: string]: string }; 
  public get matchRegex() {
    return this.getStringMapAttribute('match_regex');
  }
  public set matchRegex(value: { [key: string]: string }) {
    this._matchRegex = value;
  }
  public resetMatchRegex() {
    this._matchRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchRegexInput() {
    return this._matchRegex;
  }

  // matching_keyword - computed: false, optional: true, required: false
  private _matchingKeyword?: { [key: string]: string }; 
  public get matchingKeyword() {
    return this.getStringMapAttribute('matching_keyword');
  }
  public set matchingKeyword(value: { [key: string]: string }) {
    this._matchingKeyword = value;
  }
  public resetMatchingKeyword() {
    this._matchingKeyword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchingKeywordInput() {
    return this._matchingKeyword;
  }

  // monitor_groups - computed: false, optional: true, required: false
  private _monitorGroups?: string[]; 
  public get monitorGroups() {
    return this.getListAttribute('monitor_groups');
  }
  public set monitorGroups(value: string[]) {
    this._monitorGroups = value;
  }
  public resetMonitorGroups() {
    this._monitorGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorGroupsInput() {
    return this._monitorGroups;
  }

  // notification_profile_id - computed: true, optional: true, required: false
  private _notificationProfileId?: string; 
  public get notificationProfileId() {
    return this.getStringAttribute('notification_profile_id');
  }
  public set notificationProfileId(value: string) {
    this._notificationProfileId = value;
  }
  public resetNotificationProfileId() {
    this._notificationProfileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationProfileIdInput() {
    return this._notificationProfileId;
  }

  // notification_profile_name - computed: false, optional: true, required: false
  private _notificationProfileName?: string; 
  public get notificationProfileName() {
    return this.getStringAttribute('notification_profile_name');
  }
  public set notificationProfileName(value: string) {
    this._notificationProfileName = value;
  }
  public resetNotificationProfileName() {
    this._notificationProfileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationProfileNameInput() {
    return this._notificationProfileName;
  }

  // on_call_schedule_id - computed: false, optional: true, required: false
  private _onCallScheduleId?: string; 
  public get onCallScheduleId() {
    return this.getStringAttribute('on_call_schedule_id');
  }
  public set onCallScheduleId(value: string) {
    this._onCallScheduleId = value;
  }
  public resetOnCallScheduleId() {
    this._onCallScheduleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onCallScheduleIdInput() {
    return this._onCallScheduleId;
  }

  // perform_automation - computed: false, optional: true, required: false
  private _performAutomation?: boolean | cdktf.IResolvable; 
  public get performAutomation() {
    return this.getBooleanAttribute('perform_automation');
  }
  public set performAutomation(value: boolean | cdktf.IResolvable) {
    this._performAutomation = value;
  }
  public resetPerformAutomation() {
    this._performAutomation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performAutomationInput() {
    return this._performAutomation;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // tag_ids - computed: true, optional: true, required: false
  private _tagIds?: string[]; 
  public get tagIds() {
    return cdktf.Fn.tolist(this.getListAttribute('tag_ids'));
  }
  public set tagIds(value: string[]) {
    this._tagIds = value;
  }
  public resetTagIds() {
    this._tagIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagIdsInput() {
    return this._tagIds;
  }

  // tag_names - computed: false, optional: true, required: false
  private _tagNames?: string[]; 
  public get tagNames() {
    return this.getListAttribute('tag_names');
  }
  public set tagNames(value: string[]) {
    this._tagNames = value;
  }
  public resetTagNames() {
    this._tagNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagNamesInput() {
    return this._tagNames;
  }

  // third_party_service_ids - computed: false, optional: true, required: false
  private _thirdPartyServiceIds?: string[]; 
  public get thirdPartyServiceIds() {
    return this.getListAttribute('third_party_service_ids');
  }
  public set thirdPartyServiceIds(value: string[]) {
    this._thirdPartyServiceIds = value;
  }
  public resetThirdPartyServiceIds() {
    this._thirdPartyServiceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thirdPartyServiceIdsInput() {
    return this._thirdPartyServiceIds;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // unmatching_keyword - computed: false, optional: true, required: false
  private _unmatchingKeyword?: { [key: string]: string }; 
  public get unmatchingKeyword() {
    return this.getStringMapAttribute('unmatching_keyword');
  }
  public set unmatchingKeyword(value: { [key: string]: string }) {
    this._unmatchingKeyword = value;
  }
  public resetUnmatchingKeyword() {
    this._unmatchingKeyword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unmatchingKeywordInput() {
    return this._unmatchingKeyword;
  }

  // use_ipv6 - computed: false, optional: true, required: false
  private _useIpv6?: boolean | cdktf.IResolvable; 
  public get useIpv6() {
    return this.getBooleanAttribute('use_ipv6');
  }
  public set useIpv6(value: boolean | cdktf.IResolvable) {
    this._useIpv6 = value;
  }
  public resetUseIpv6() {
    this._useIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useIpv6Input() {
    return this._useIpv6;
  }

  // user_group_ids - computed: true, optional: true, required: false
  private _userGroupIds?: string[]; 
  public get userGroupIds() {
    return this.getListAttribute('user_group_ids');
  }
  public set userGroupIds(value: string[]) {
    this._userGroupIds = value;
  }
  public resetUserGroupIds() {
    this._userGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupIdsInput() {
    return this._userGroupIds;
  }

  // user_group_names - computed: false, optional: true, required: false
  private _userGroupNames?: string[]; 
  public get userGroupNames() {
    return this.getListAttribute('user_group_names');
  }
  public set userGroupNames(value: string[]) {
    this._userGroupNames = value;
  }
  public resetUserGroupNames() {
    this._userGroupNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupNamesInput() {
    return this._userGroupNames;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      actions: cdktf.hashMapper(cdktf.stringToTerraform)(this._actions),
      display_name: cdktf.stringToTerraform(this._displayName),
      domain_name: cdktf.stringToTerraform(this._domainName),
      expire_days: cdktf.numberToTerraform(this._expireDays),
      host_name: cdktf.stringToTerraform(this._hostName),
      id: cdktf.stringToTerraform(this._id),
      ignore_registry_date: cdktf.booleanToTerraform(this._ignoreRegistryDate),
      location_profile_id: cdktf.stringToTerraform(this._locationProfileId),
      location_profile_name: cdktf.stringToTerraform(this._locationProfileName),
      match_case: cdktf.booleanToTerraform(this._matchCase),
      match_regex: cdktf.hashMapper(cdktf.stringToTerraform)(this._matchRegex),
      matching_keyword: cdktf.hashMapper(cdktf.stringToTerraform)(this._matchingKeyword),
      monitor_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._monitorGroups),
      notification_profile_id: cdktf.stringToTerraform(this._notificationProfileId),
      notification_profile_name: cdktf.stringToTerraform(this._notificationProfileName),
      on_call_schedule_id: cdktf.stringToTerraform(this._onCallScheduleId),
      perform_automation: cdktf.booleanToTerraform(this._performAutomation),
      port: cdktf.numberToTerraform(this._port),
      tag_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tagIds),
      tag_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tagNames),
      third_party_service_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._thirdPartyServiceIds),
      timeout: cdktf.numberToTerraform(this._timeout),
      unmatching_keyword: cdktf.hashMapper(cdktf.stringToTerraform)(this._unmatchingKeyword),
      use_ipv6: cdktf.booleanToTerraform(this._useIpv6),
      user_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._userGroupIds),
      user_group_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._userGroupNames),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      actions: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._actions),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_name: {
        value: cdktf.stringToHclTerraform(this._domainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expire_days: {
        value: cdktf.numberToHclTerraform(this._expireDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      host_name: {
        value: cdktf.stringToHclTerraform(this._hostName),
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
      ignore_registry_date: {
        value: cdktf.booleanToHclTerraform(this._ignoreRegistryDate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      location_profile_id: {
        value: cdktf.stringToHclTerraform(this._locationProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location_profile_name: {
        value: cdktf.stringToHclTerraform(this._locationProfileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_case: {
        value: cdktf.booleanToHclTerraform(this._matchCase),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      match_regex: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._matchRegex),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      matching_keyword: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._matchingKeyword),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      monitor_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._monitorGroups),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      notification_profile_id: {
        value: cdktf.stringToHclTerraform(this._notificationProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notification_profile_name: {
        value: cdktf.stringToHclTerraform(this._notificationProfileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      on_call_schedule_id: {
        value: cdktf.stringToHclTerraform(this._onCallScheduleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      perform_automation: {
        value: cdktf.booleanToHclTerraform(this._performAutomation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tag_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tagIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tag_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tagNames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      third_party_service_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._thirdPartyServiceIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      unmatching_keyword: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._unmatchingKeyword),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      use_ipv6: {
        value: cdktf.booleanToHclTerraform(this._useIpv6),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      user_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._userGroupIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      user_group_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._userGroupNames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
