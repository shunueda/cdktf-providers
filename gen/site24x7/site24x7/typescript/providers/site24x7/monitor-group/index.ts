// https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/monitor_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MonitorGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * DEPRECATED: Use alert settings in the notification profile instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/monitor_group#alert_frequency MonitorGroup#alert_frequency}
  */
  readonly alertFrequency?: number;
  /**
  * DEPRECATED: Use periodic alerting via notification profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/monitor_group#alert_periodically MonitorGroup#alert_periodically}
  */
  readonly alertPeriodically?: boolean | cdktf.IResolvable;
  /**
  * List of dependent resource IDs. Suppress alert when dependent monitor(s) is down.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/monitor_group#dependency_resource_ids MonitorGroup#dependency_resource_ids}
  */
  readonly dependencyResourceIds?: string[];
  /**
  * Description for the Monitor Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/monitor_group#description MonitorGroup#description}
  */
  readonly description?: string;
  /**
  * Display Name for the Monitor Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/monitor_group#display_name MonitorGroup#display_name}
  */
  readonly displayName: string;
  /**
  * Enable incident management. Default value is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/monitor_group#enable_incident_management MonitorGroup#enable_incident_management}
  */
  readonly enableIncidentManagement?: boolean | cdktf.IResolvable;
  /**
  * DEPRECATED: This field is no longer needed for alert configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/monitor_group#healing_period MonitorGroup#healing_period}
  */
  readonly healingPeriod?: number;
  /**
  * Number of monitors' health that decide the group status. ‘0’ implies that all the monitors are considered for determining the group status. Default value is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/monitor_group#health_threshold_count MonitorGroup#health_threshold_count}
  */
  readonly healthThresholdCount?: number;
  /**
  * Health check profile to be associated with the monitor group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/monitor_group#healthcheck_profile_id MonitorGroup#healthcheck_profile_id}
  */
  readonly healthcheckProfileId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/monitor_group#id MonitorGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Notification profile to be associated with the monitor group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/monitor_group#notification_profile_id MonitorGroup#notification_profile_id}
  */
  readonly notificationProfileId?: string;
  /**
  * Boolean value indicating whether to suppress alert when the dependent monitor is down. Setting suppress_alert = true with an empty dependency_resource_id is meaningless.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/monitor_group#suppress_alert MonitorGroup#suppress_alert}
  */
  readonly suppressAlert?: boolean | cdktf.IResolvable;
  /**
  * List of tag IDs to be associated to the monitor group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/monitor_group#tag_ids MonitorGroup#tag_ids}
  */
  readonly tagIds?: string[];
  /**
  * List of Third Party Service IDs to be associated to the monitor group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/monitor_group#third_party_service_ids MonitorGroup#third_party_service_ids}
  */
  readonly thirdPartyServiceIds?: string[];
  /**
  * List of user groups to be notified when the monitor group is down.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/monitor_group#user_group_ids MonitorGroup#user_group_ids}
  */
  readonly userGroupIds?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/monitor_group site24x7_monitor_group}
*/
export class MonitorGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "site24x7_monitor_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MonitorGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MonitorGroup to import
  * @param importFromId The id of the existing MonitorGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/monitor_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MonitorGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "site24x7_monitor_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/monitor_group site24x7_monitor_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MonitorGroupConfig
  */
  public constructor(scope: Construct, id: string, config: MonitorGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'site24x7_monitor_group',
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
    this._alertFrequency = config.alertFrequency;
    this._alertPeriodically = config.alertPeriodically;
    this._dependencyResourceIds = config.dependencyResourceIds;
    this._description = config.description;
    this._displayName = config.displayName;
    this._enableIncidentManagement = config.enableIncidentManagement;
    this._healingPeriod = config.healingPeriod;
    this._healthThresholdCount = config.healthThresholdCount;
    this._healthcheckProfileId = config.healthcheckProfileId;
    this._id = config.id;
    this._notificationProfileId = config.notificationProfileId;
    this._suppressAlert = config.suppressAlert;
    this._tagIds = config.tagIds;
    this._thirdPartyServiceIds = config.thirdPartyServiceIds;
    this._userGroupIds = config.userGroupIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alert_frequency - computed: false, optional: true, required: false
  private _alertFrequency?: number; 
  public get alertFrequency() {
    return this.getNumberAttribute('alert_frequency');
  }
  public set alertFrequency(value: number) {
    this._alertFrequency = value;
  }
  public resetAlertFrequency() {
    this._alertFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertFrequencyInput() {
    return this._alertFrequency;
  }

  // alert_periodically - computed: false, optional: true, required: false
  private _alertPeriodically?: boolean | cdktf.IResolvable; 
  public get alertPeriodically() {
    return this.getBooleanAttribute('alert_periodically');
  }
  public set alertPeriodically(value: boolean | cdktf.IResolvable) {
    this._alertPeriodically = value;
  }
  public resetAlertPeriodically() {
    this._alertPeriodically = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertPeriodicallyInput() {
    return this._alertPeriodically;
  }

  // dependency_resource_ids - computed: false, optional: true, required: false
  private _dependencyResourceIds?: string[]; 
  public get dependencyResourceIds() {
    return cdktf.Fn.tolist(this.getListAttribute('dependency_resource_ids'));
  }
  public set dependencyResourceIds(value: string[]) {
    this._dependencyResourceIds = value;
  }
  public resetDependencyResourceIds() {
    this._dependencyResourceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependencyResourceIdsInput() {
    return this._dependencyResourceIds;
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

  // enable_incident_management - computed: false, optional: true, required: false
  private _enableIncidentManagement?: boolean | cdktf.IResolvable; 
  public get enableIncidentManagement() {
    return this.getBooleanAttribute('enable_incident_management');
  }
  public set enableIncidentManagement(value: boolean | cdktf.IResolvable) {
    this._enableIncidentManagement = value;
  }
  public resetEnableIncidentManagement() {
    this._enableIncidentManagement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIncidentManagementInput() {
    return this._enableIncidentManagement;
  }

  // healing_period - computed: false, optional: true, required: false
  private _healingPeriod?: number; 
  public get healingPeriod() {
    return this.getNumberAttribute('healing_period');
  }
  public set healingPeriod(value: number) {
    this._healingPeriod = value;
  }
  public resetHealingPeriod() {
    this._healingPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healingPeriodInput() {
    return this._healingPeriod;
  }

  // health_threshold_count - computed: false, optional: true, required: false
  private _healthThresholdCount?: number; 
  public get healthThresholdCount() {
    return this.getNumberAttribute('health_threshold_count');
  }
  public set healthThresholdCount(value: number) {
    this._healthThresholdCount = value;
  }
  public resetHealthThresholdCount() {
    this._healthThresholdCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthThresholdCountInput() {
    return this._healthThresholdCount;
  }

  // healthcheck_profile_id - computed: true, optional: true, required: false
  private _healthcheckProfileId?: string; 
  public get healthcheckProfileId() {
    return this.getStringAttribute('healthcheck_profile_id');
  }
  public set healthcheckProfileId(value: string) {
    this._healthcheckProfileId = value;
  }
  public resetHealthcheckProfileId() {
    this._healthcheckProfileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthcheckProfileIdInput() {
    return this._healthcheckProfileId;
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

  // suppress_alert - computed: false, optional: true, required: false
  private _suppressAlert?: boolean | cdktf.IResolvable; 
  public get suppressAlert() {
    return this.getBooleanAttribute('suppress_alert');
  }
  public set suppressAlert(value: boolean | cdktf.IResolvable) {
    this._suppressAlert = value;
  }
  public resetSuppressAlert() {
    this._suppressAlert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressAlertInput() {
    return this._suppressAlert;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alert_frequency: cdktf.numberToTerraform(this._alertFrequency),
      alert_periodically: cdktf.booleanToTerraform(this._alertPeriodically),
      dependency_resource_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dependencyResourceIds),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      enable_incident_management: cdktf.booleanToTerraform(this._enableIncidentManagement),
      healing_period: cdktf.numberToTerraform(this._healingPeriod),
      health_threshold_count: cdktf.numberToTerraform(this._healthThresholdCount),
      healthcheck_profile_id: cdktf.stringToTerraform(this._healthcheckProfileId),
      id: cdktf.stringToTerraform(this._id),
      notification_profile_id: cdktf.stringToTerraform(this._notificationProfileId),
      suppress_alert: cdktf.booleanToTerraform(this._suppressAlert),
      tag_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tagIds),
      third_party_service_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._thirdPartyServiceIds),
      user_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._userGroupIds),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alert_frequency: {
        value: cdktf.numberToHclTerraform(this._alertFrequency),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      alert_periodically: {
        value: cdktf.booleanToHclTerraform(this._alertPeriodically),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dependency_resource_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dependencyResourceIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_incident_management: {
        value: cdktf.booleanToHclTerraform(this._enableIncidentManagement),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      healing_period: {
        value: cdktf.numberToHclTerraform(this._healingPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      health_threshold_count: {
        value: cdktf.numberToHclTerraform(this._healthThresholdCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      healthcheck_profile_id: {
        value: cdktf.stringToHclTerraform(this._healthcheckProfileId),
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
      notification_profile_id: {
        value: cdktf.stringToHclTerraform(this._notificationProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      suppress_alert: {
        value: cdktf.booleanToHclTerraform(this._suppressAlert),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tag_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tagIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      third_party_service_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._thirdPartyServiceIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      user_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._userGroupIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
