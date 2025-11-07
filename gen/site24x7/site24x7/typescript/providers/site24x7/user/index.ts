// https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Define a time window so you can receive Voice/SMS status alerts during this period alone. You can't define this window for email or IM based notifications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/user#alerting_period_end_time User#alerting_period_end_time}
  */
  readonly alertingPeriodEndTime?: string;
  /**
  * Define a time window so you can receive Voice/SMS status alerts during this period alone. You can't define this window for email or IM based notifications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/user#alerting_period_start_time User#alerting_period_start_time}
  */
  readonly alertingPeriodStartTime?: string;
  /**
  * Role assigned to the user for accessing CloudSpend. Role will be updated only after the user accepts the invitation. Refer https://www.site24x7.com/help/api/#site24x7_user_constants
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/user#cloudspend_role User#cloudspend_role}
  */
  readonly cloudspendRole?: number;
  /**
  * The third-party providers we use to send SMS and voice alerts will process the data outside the EU region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/user#consent_for_non_eu_alerts User#consent_for_non_eu_alerts}
  */
  readonly consentForNonEuAlerts?: boolean | cdktf.IResolvable;
  /**
  * Medium through which you’d wish to receive the Critical alerts. Default value is 1. '1' denotes 'Email', '2' denotes 'SMS', '3' denotes 'Voice Call'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/user#critical_notification_medium User#critical_notification_medium}
  */
  readonly criticalNotificationMedium: number[];
  /**
  * Name of the User.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/user#display_name User#display_name}
  */
  readonly displayName: string;
  /**
  * Medium through which you’d wish to receive the Down alerts. Default value is 1. '1' denotes 'Email', '2' denotes 'SMS', '3' denotes 'Voice Call'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/user#down_notification_medium User#down_notification_medium}
  */
  readonly downNotificationMedium: number[];
  /**
  * Email address of the user. Email verification has to be done manually.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/user#email_address User#email_address}
  */
  readonly emailAddress: string;
  /**
  * Denotes the email format. '0' - Text, '1' - HTML
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/user#email_format User#email_format}
  */
  readonly emailFormat?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/user#id User#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Provide your job title to be added in Site24x7. Refer https://www.site24x7.com/help/api/#job_title
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/user#job_title User#job_title}
  */
  readonly jobTitle?: number;
  /**
  * Phone number configurations to receive alerts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/user#mobile_settings User#mobile_settings}
  */
  readonly mobileSettings?: { [key: string]: string };
  /**
  * List of monitor groups to which the user has access to. 'monitor_groups' attribute is mandatory when the 'selection_type' is '1'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/user#monitor_groups User#monitor_groups}
  */
  readonly monitorGroups?: string[];
  /**
  * Medium through which you’d wish to receive the notifications. Default value is 1. '1' denotes 'Email', '2' denotes 'SMS', '3' denotes 'Voice Call'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/user#notification_medium User#notification_medium}
  */
  readonly notificationMedium: number[];
  /**
  * Resource type associated to this user. Default value is '0'. Can take values 0|1. '0' denotes 'All Monitors', '1' denotes 'Monitor Group'. 'monitor_groups' attribute is mandatory when the 'selection_type' is '1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/user#selection_type User#selection_type}
  */
  readonly selectionType?: number;
  /**
  * Role assigned to the user for accessing StatusIQ.. Role will be updated only after the user accepts the invitation. Refer https://www.site24x7.com/help/api/#site24x7_user_constants
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/user#statusiq_role User#statusiq_role}
  */
  readonly statusiqRole?: number;
  /**
  * Medium through which you’d wish to receive the Trouble alerts. Default value is 1. '1' denotes 'Email', '2' denotes 'SMS', '3' denotes 'Voice Call'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/user#trouble_notification_medium User#trouble_notification_medium}
  */
  readonly troubleNotificationMedium: number[];
  /**
  * Medium through which you’d wish to receive the Up alerts. Default value is 1. '1' denotes 'Email', '2' denotes 'SMS', '3' denotes 'Voice Call'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/user#up_notification_medium User#up_notification_medium}
  */
  readonly upNotificationMedium: number[];
  /**
  * List of groups to be associated for the user for receiving alerts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/user#user_group_ids User#user_group_ids}
  */
  readonly userGroupIds?: string[];
  /**
  * Role assigned to the user for accessing Site24x7. Role will be updated only after the user accepts the invitation. Refer https://www.site24x7.com/help/api/#site24x7_user_constants
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/user#user_role User#user_role}
  */
  readonly userRole: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/user site24x7_user}
*/
export class User extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "site24x7_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a User resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the User to import
  * @param importFromId The id of the existing User that should be imported. Refer to the {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the User to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "site24x7_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/user site24x7_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserConfig
  */
  public constructor(scope: Construct, id: string, config: UserConfig) {
    super(scope, id, {
      terraformResourceType: 'site24x7_user',
      terraformGeneratorMetadata: {
        providerName: 'site24x7',
        providerVersion: '2.0.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alertingPeriodEndTime = config.alertingPeriodEndTime;
    this._alertingPeriodStartTime = config.alertingPeriodStartTime;
    this._cloudspendRole = config.cloudspendRole;
    this._consentForNonEuAlerts = config.consentForNonEuAlerts;
    this._criticalNotificationMedium = config.criticalNotificationMedium;
    this._displayName = config.displayName;
    this._downNotificationMedium = config.downNotificationMedium;
    this._emailAddress = config.emailAddress;
    this._emailFormat = config.emailFormat;
    this._id = config.id;
    this._jobTitle = config.jobTitle;
    this._mobileSettings = config.mobileSettings;
    this._monitorGroups = config.monitorGroups;
    this._notificationMedium = config.notificationMedium;
    this._selectionType = config.selectionType;
    this._statusiqRole = config.statusiqRole;
    this._troubleNotificationMedium = config.troubleNotificationMedium;
    this._upNotificationMedium = config.upNotificationMedium;
    this._userGroupIds = config.userGroupIds;
    this._userRole = config.userRole;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alerting_period_end_time - computed: false, optional: true, required: false
  private _alertingPeriodEndTime?: string; 
  public get alertingPeriodEndTime() {
    return this.getStringAttribute('alerting_period_end_time');
  }
  public set alertingPeriodEndTime(value: string) {
    this._alertingPeriodEndTime = value;
  }
  public resetAlertingPeriodEndTime() {
    this._alertingPeriodEndTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertingPeriodEndTimeInput() {
    return this._alertingPeriodEndTime;
  }

  // alerting_period_start_time - computed: false, optional: true, required: false
  private _alertingPeriodStartTime?: string; 
  public get alertingPeriodStartTime() {
    return this.getStringAttribute('alerting_period_start_time');
  }
  public set alertingPeriodStartTime(value: string) {
    this._alertingPeriodStartTime = value;
  }
  public resetAlertingPeriodStartTime() {
    this._alertingPeriodStartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertingPeriodStartTimeInput() {
    return this._alertingPeriodStartTime;
  }

  // cloudspend_role - computed: false, optional: true, required: false
  private _cloudspendRole?: number; 
  public get cloudspendRole() {
    return this.getNumberAttribute('cloudspend_role');
  }
  public set cloudspendRole(value: number) {
    this._cloudspendRole = value;
  }
  public resetCloudspendRole() {
    this._cloudspendRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudspendRoleInput() {
    return this._cloudspendRole;
  }

  // consent_for_non_eu_alerts - computed: false, optional: true, required: false
  private _consentForNonEuAlerts?: boolean | cdktf.IResolvable; 
  public get consentForNonEuAlerts() {
    return this.getBooleanAttribute('consent_for_non_eu_alerts');
  }
  public set consentForNonEuAlerts(value: boolean | cdktf.IResolvable) {
    this._consentForNonEuAlerts = value;
  }
  public resetConsentForNonEuAlerts() {
    this._consentForNonEuAlerts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consentForNonEuAlertsInput() {
    return this._consentForNonEuAlerts;
  }

  // critical_notification_medium - computed: false, optional: false, required: true
  private _criticalNotificationMedium?: number[]; 
  public get criticalNotificationMedium() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('critical_notification_medium')));
  }
  public set criticalNotificationMedium(value: number[]) {
    this._criticalNotificationMedium = value;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalNotificationMediumInput() {
    return this._criticalNotificationMedium;
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

  // down_notification_medium - computed: false, optional: false, required: true
  private _downNotificationMedium?: number[]; 
  public get downNotificationMedium() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('down_notification_medium')));
  }
  public set downNotificationMedium(value: number[]) {
    this._downNotificationMedium = value;
  }
  // Temporarily expose input value. Use with caution.
  public get downNotificationMediumInput() {
    return this._downNotificationMedium;
  }

  // email_address - computed: false, optional: false, required: true
  private _emailAddress?: string; 
  public get emailAddress() {
    return this.getStringAttribute('email_address');
  }
  public set emailAddress(value: string) {
    this._emailAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAddressInput() {
    return this._emailAddress;
  }

  // email_format - computed: false, optional: true, required: false
  private _emailFormat?: number; 
  public get emailFormat() {
    return this.getNumberAttribute('email_format');
  }
  public set emailFormat(value: number) {
    this._emailFormat = value;
  }
  public resetEmailFormat() {
    this._emailFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailFormatInput() {
    return this._emailFormat;
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

  // job_title - computed: false, optional: true, required: false
  private _jobTitle?: number; 
  public get jobTitle() {
    return this.getNumberAttribute('job_title');
  }
  public set jobTitle(value: number) {
    this._jobTitle = value;
  }
  public resetJobTitle() {
    this._jobTitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobTitleInput() {
    return this._jobTitle;
  }

  // mobile_settings - computed: false, optional: true, required: false
  private _mobileSettings?: { [key: string]: string }; 
  public get mobileSettings() {
    return this.getStringMapAttribute('mobile_settings');
  }
  public set mobileSettings(value: { [key: string]: string }) {
    this._mobileSettings = value;
  }
  public resetMobileSettings() {
    this._mobileSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mobileSettingsInput() {
    return this._mobileSettings;
  }

  // monitor_groups - computed: true, optional: true, required: false
  private _monitorGroups?: string[]; 
  public get monitorGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('monitor_groups'));
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

  // notification_medium - computed: false, optional: false, required: true
  private _notificationMedium?: number[]; 
  public get notificationMedium() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('notification_medium')));
  }
  public set notificationMedium(value: number[]) {
    this._notificationMedium = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationMediumInput() {
    return this._notificationMedium;
  }

  // selection_type - computed: false, optional: true, required: false
  private _selectionType?: number; 
  public get selectionType() {
    return this.getNumberAttribute('selection_type');
  }
  public set selectionType(value: number) {
    this._selectionType = value;
  }
  public resetSelectionType() {
    this._selectionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectionTypeInput() {
    return this._selectionType;
  }

  // statusiq_role - computed: false, optional: true, required: false
  private _statusiqRole?: number; 
  public get statusiqRole() {
    return this.getNumberAttribute('statusiq_role');
  }
  public set statusiqRole(value: number) {
    this._statusiqRole = value;
  }
  public resetStatusiqRole() {
    this._statusiqRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusiqRoleInput() {
    return this._statusiqRole;
  }

  // trouble_notification_medium - computed: false, optional: false, required: true
  private _troubleNotificationMedium?: number[]; 
  public get troubleNotificationMedium() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('trouble_notification_medium')));
  }
  public set troubleNotificationMedium(value: number[]) {
    this._troubleNotificationMedium = value;
  }
  // Temporarily expose input value. Use with caution.
  public get troubleNotificationMediumInput() {
    return this._troubleNotificationMedium;
  }

  // up_notification_medium - computed: false, optional: false, required: true
  private _upNotificationMedium?: number[]; 
  public get upNotificationMedium() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('up_notification_medium')));
  }
  public set upNotificationMedium(value: number[]) {
    this._upNotificationMedium = value;
  }
  // Temporarily expose input value. Use with caution.
  public get upNotificationMediumInput() {
    return this._upNotificationMedium;
  }

  // user_group_ids - computed: true, optional: true, required: false
  private _userGroupIds?: string[]; 
  public get userGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('user_group_ids'));
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

  // user_role - computed: false, optional: false, required: true
  private _userRole?: number; 
  public get userRole() {
    return this.getNumberAttribute('user_role');
  }
  public set userRole(value: number) {
    this._userRole = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userRoleInput() {
    return this._userRole;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alerting_period_end_time: cdktf.stringToTerraform(this._alertingPeriodEndTime),
      alerting_period_start_time: cdktf.stringToTerraform(this._alertingPeriodStartTime),
      cloudspend_role: cdktf.numberToTerraform(this._cloudspendRole),
      consent_for_non_eu_alerts: cdktf.booleanToTerraform(this._consentForNonEuAlerts),
      critical_notification_medium: cdktf.listMapper(cdktf.numberToTerraform, false)(this._criticalNotificationMedium),
      display_name: cdktf.stringToTerraform(this._displayName),
      down_notification_medium: cdktf.listMapper(cdktf.numberToTerraform, false)(this._downNotificationMedium),
      email_address: cdktf.stringToTerraform(this._emailAddress),
      email_format: cdktf.numberToTerraform(this._emailFormat),
      id: cdktf.stringToTerraform(this._id),
      job_title: cdktf.numberToTerraform(this._jobTitle),
      mobile_settings: cdktf.hashMapper(cdktf.stringToTerraform)(this._mobileSettings),
      monitor_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._monitorGroups),
      notification_medium: cdktf.listMapper(cdktf.numberToTerraform, false)(this._notificationMedium),
      selection_type: cdktf.numberToTerraform(this._selectionType),
      statusiq_role: cdktf.numberToTerraform(this._statusiqRole),
      trouble_notification_medium: cdktf.listMapper(cdktf.numberToTerraform, false)(this._troubleNotificationMedium),
      up_notification_medium: cdktf.listMapper(cdktf.numberToTerraform, false)(this._upNotificationMedium),
      user_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._userGroupIds),
      user_role: cdktf.numberToTerraform(this._userRole),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alerting_period_end_time: {
        value: cdktf.stringToHclTerraform(this._alertingPeriodEndTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alerting_period_start_time: {
        value: cdktf.stringToHclTerraform(this._alertingPeriodStartTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloudspend_role: {
        value: cdktf.numberToHclTerraform(this._cloudspendRole),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      consent_for_non_eu_alerts: {
        value: cdktf.booleanToHclTerraform(this._consentForNonEuAlerts),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      critical_notification_medium: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._criticalNotificationMedium),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      down_notification_medium: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._downNotificationMedium),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      email_address: {
        value: cdktf.stringToHclTerraform(this._emailAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email_format: {
        value: cdktf.numberToHclTerraform(this._emailFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      job_title: {
        value: cdktf.numberToHclTerraform(this._jobTitle),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mobile_settings: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._mobileSettings),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      monitor_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._monitorGroups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      notification_medium: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._notificationMedium),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      selection_type: {
        value: cdktf.numberToHclTerraform(this._selectionType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      statusiq_role: {
        value: cdktf.numberToHclTerraform(this._statusiqRole),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      trouble_notification_medium: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._troubleNotificationMedium),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      up_notification_medium: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._upNotificationMedium),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      user_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._userGroupIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      user_role: {
        value: cdktf.numberToHclTerraform(this._userRole),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
