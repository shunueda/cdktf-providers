// https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_heartbeat
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BetteruptimeHeartbeatConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether to call when a new incident is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_heartbeat#call BetteruptimeHeartbeat#call}
  */
  readonly call?: boolean | cdktf.IResolvable;
  /**
  * Whether to send a critical push notification that ignores the mute switch and Do not Disturb mode when a new incident is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_heartbeat#critical_alert BetteruptimeHeartbeat#critical_alert}
  */
  readonly criticalAlert?: boolean | cdktf.IResolvable;
  /**
  * Whether to send an email when a new incident is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_heartbeat#email BetteruptimeHeartbeat#email}
  */
  readonly email?: boolean | cdktf.IResolvable;
  /**
  * Heartbeats can fluctuate; specify this value to control what is still acceptable. Minimum value: 0 seconds. We recommend setting this to approx. 20% of period
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_heartbeat#grace BetteruptimeHeartbeat#grace}
  */
  readonly grace: number;
  /**
  * Set this attribute if you want to add this heartbeat to a heartbeat group..
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_heartbeat#heartbeat_group_id BetteruptimeHeartbeat#heartbeat_group_id}
  */
  readonly heartbeatGroupId?: number;
  /**
  * An array of maintenance days to set. If a maintenance window is overnight both affected days should be set. Allowed values are ["mon", "tue", "wed", "thu", "fri", "sat", "sun"] or any subset of these days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_heartbeat#maintenance_days BetteruptimeHeartbeat#maintenance_days}
  */
  readonly maintenanceDays?: string[];
  /**
  * Start of the maintenance window each day. We won't create incidents during this window. Example: "01:00:00"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_heartbeat#maintenance_from BetteruptimeHeartbeat#maintenance_from}
  */
  readonly maintenanceFrom?: string;
  /**
  * The timezone to use for the maintenance window each day. Defaults to UTC. The accepted values can be found in the Rails TimeZone documentation. https://api.rubyonrails.org/classes/ActiveSupport/TimeZone.html
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_heartbeat#maintenance_timezone BetteruptimeHeartbeat#maintenance_timezone}
  */
  readonly maintenanceTimezone?: string;
  /**
  * End of the maintenance window each day. Example: "03:00:00"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_heartbeat#maintenance_to BetteruptimeHeartbeat#maintenance_to}
  */
  readonly maintenanceTo?: string;
  /**
  * A name of the service for this heartbeat.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_heartbeat#name BetteruptimeHeartbeat#name}
  */
  readonly name: string;
  /**
  * Set to true to pause monitoring — we won't notify you about downtime. Set to false to resume monitoring.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_heartbeat#paused BetteruptimeHeartbeat#paused}
  */
  readonly paused?: boolean | cdktf.IResolvable;
  /**
  * How often should we expect this heartbeat? In seconds. Minimum value: 30 seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_heartbeat#period BetteruptimeHeartbeat#period}
  */
  readonly period: number;
  /**
  * Set the escalation policy for the heartbeat.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_heartbeat#policy_id BetteruptimeHeartbeat#policy_id}
  */
  readonly policyId?: string;
  /**
  * Whether to send a push notification when a new incident is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_heartbeat#push BetteruptimeHeartbeat#push}
  */
  readonly push?: boolean | cdktf.IResolvable;
  /**
  * Whether to send an SMS when a new incident is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_heartbeat#sms BetteruptimeHeartbeat#sms}
  */
  readonly sms?: boolean | cdktf.IResolvable;
  /**
  * An index controlling the position of a heartbeat in the heartbeat group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_heartbeat#sort_index BetteruptimeHeartbeat#sort_index}
  */
  readonly sortIndex?: number;
  /**
  * Used to specify the team the resource should be created in when using global tokens.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_heartbeat#team_name BetteruptimeHeartbeat#team_name}
  */
  readonly teamName?: string;
  /**
  * How long to wait before escalating the incident alert to the team. Leave blank to disable escalating to the entire team.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_heartbeat#team_wait BetteruptimeHeartbeat#team_wait}
  */
  readonly teamWait?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_heartbeat betteruptime_heartbeat}
*/
export class BetteruptimeHeartbeat extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "betteruptime_heartbeat";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BetteruptimeHeartbeat resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BetteruptimeHeartbeat to import
  * @param importFromId The id of the existing BetteruptimeHeartbeat that should be imported. Refer to the {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_heartbeat#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BetteruptimeHeartbeat to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "betteruptime_heartbeat", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_heartbeat betteruptime_heartbeat} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BetteruptimeHeartbeatConfig
  */
  public constructor(scope: Construct, id: string, config: BetteruptimeHeartbeatConfig) {
    super(scope, id, {
      terraformResourceType: 'betteruptime_heartbeat',
      terraformGeneratorMetadata: {
        providerName: 'better-uptime',
        providerVersion: '0.20.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._call = config.call;
    this._criticalAlert = config.criticalAlert;
    this._email = config.email;
    this._grace = config.grace;
    this._heartbeatGroupId = config.heartbeatGroupId;
    this._maintenanceDays = config.maintenanceDays;
    this._maintenanceFrom = config.maintenanceFrom;
    this._maintenanceTimezone = config.maintenanceTimezone;
    this._maintenanceTo = config.maintenanceTo;
    this._name = config.name;
    this._paused = config.paused;
    this._period = config.period;
    this._policyId = config.policyId;
    this._push = config.push;
    this._sms = config.sms;
    this._sortIndex = config.sortIndex;
    this._teamName = config.teamName;
    this._teamWait = config.teamWait;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // call - computed: true, optional: true, required: false
  private _call?: boolean | cdktf.IResolvable; 
  public get call() {
    return this.getBooleanAttribute('call');
  }
  public set call(value: boolean | cdktf.IResolvable) {
    this._call = value;
  }
  public resetCall() {
    this._call = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callInput() {
    return this._call;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // critical_alert - computed: true, optional: true, required: false
  private _criticalAlert?: boolean | cdktf.IResolvable; 
  public get criticalAlert() {
    return this.getBooleanAttribute('critical_alert');
  }
  public set criticalAlert(value: boolean | cdktf.IResolvable) {
    this._criticalAlert = value;
  }
  public resetCriticalAlert() {
    this._criticalAlert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalAlertInput() {
    return this._criticalAlert;
  }

  // email - computed: true, optional: true, required: false
  private _email?: boolean | cdktf.IResolvable; 
  public get email() {
    return this.getBooleanAttribute('email');
  }
  public set email(value: boolean | cdktf.IResolvable) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // grace - computed: false, optional: false, required: true
  private _grace?: number; 
  public get grace() {
    return this.getNumberAttribute('grace');
  }
  public set grace(value: number) {
    this._grace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get graceInput() {
    return this._grace;
  }

  // heartbeat_group_id - computed: true, optional: true, required: false
  private _heartbeatGroupId?: number; 
  public get heartbeatGroupId() {
    return this.getNumberAttribute('heartbeat_group_id');
  }
  public set heartbeatGroupId(value: number) {
    this._heartbeatGroupId = value;
  }
  public resetHeartbeatGroupId() {
    this._heartbeatGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heartbeatGroupIdInput() {
    return this._heartbeatGroupId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // maintenance_days - computed: true, optional: true, required: false
  private _maintenanceDays?: string[]; 
  public get maintenanceDays() {
    return this.getListAttribute('maintenance_days');
  }
  public set maintenanceDays(value: string[]) {
    this._maintenanceDays = value;
  }
  public resetMaintenanceDays() {
    this._maintenanceDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceDaysInput() {
    return this._maintenanceDays;
  }

  // maintenance_from - computed: true, optional: true, required: false
  private _maintenanceFrom?: string; 
  public get maintenanceFrom() {
    return this.getStringAttribute('maintenance_from');
  }
  public set maintenanceFrom(value: string) {
    this._maintenanceFrom = value;
  }
  public resetMaintenanceFrom() {
    this._maintenanceFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceFromInput() {
    return this._maintenanceFrom;
  }

  // maintenance_timezone - computed: true, optional: true, required: false
  private _maintenanceTimezone?: string; 
  public get maintenanceTimezone() {
    return this.getStringAttribute('maintenance_timezone');
  }
  public set maintenanceTimezone(value: string) {
    this._maintenanceTimezone = value;
  }
  public resetMaintenanceTimezone() {
    this._maintenanceTimezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceTimezoneInput() {
    return this._maintenanceTimezone;
  }

  // maintenance_to - computed: true, optional: true, required: false
  private _maintenanceTo?: string; 
  public get maintenanceTo() {
    return this.getStringAttribute('maintenance_to');
  }
  public set maintenanceTo(value: string) {
    this._maintenanceTo = value;
  }
  public resetMaintenanceTo() {
    this._maintenanceTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceToInput() {
    return this._maintenanceTo;
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

  // paused - computed: true, optional: true, required: false
  private _paused?: boolean | cdktf.IResolvable; 
  public get paused() {
    return this.getBooleanAttribute('paused');
  }
  public set paused(value: boolean | cdktf.IResolvable) {
    this._paused = value;
  }
  public resetPaused() {
    this._paused = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pausedInput() {
    return this._paused;
  }

  // paused_at - computed: true, optional: false, required: false
  public get pausedAt() {
    return this.getStringAttribute('paused_at');
  }

  // period - computed: false, optional: false, required: true
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // policy_id - computed: false, optional: true, required: false
  private _policyId?: string; 
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }
  public set policyId(value: string) {
    this._policyId = value;
  }
  public resetPolicyId() {
    this._policyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdInput() {
    return this._policyId;
  }

  // push - computed: true, optional: true, required: false
  private _push?: boolean | cdktf.IResolvable; 
  public get push() {
    return this.getBooleanAttribute('push');
  }
  public set push(value: boolean | cdktf.IResolvable) {
    this._push = value;
  }
  public resetPush() {
    this._push = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pushInput() {
    return this._push;
  }

  // sms - computed: true, optional: true, required: false
  private _sms?: boolean | cdktf.IResolvable; 
  public get sms() {
    return this.getBooleanAttribute('sms');
  }
  public set sms(value: boolean | cdktf.IResolvable) {
    this._sms = value;
  }
  public resetSms() {
    this._sms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsInput() {
    return this._sms;
  }

  // sort_index - computed: true, optional: true, required: false
  private _sortIndex?: number; 
  public get sortIndex() {
    return this.getNumberAttribute('sort_index');
  }
  public set sortIndex(value: number) {
    this._sortIndex = value;
  }
  public resetSortIndex() {
    this._sortIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortIndexInput() {
    return this._sortIndex;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // team_name - computed: false, optional: true, required: false
  private _teamName?: string; 
  public get teamName() {
    return this.getStringAttribute('team_name');
  }
  public set teamName(value: string) {
    this._teamName = value;
  }
  public resetTeamName() {
    this._teamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamNameInput() {
    return this._teamName;
  }

  // team_wait - computed: true, optional: true, required: false
  private _teamWait?: number; 
  public get teamWait() {
    return this.getNumberAttribute('team_wait');
  }
  public set teamWait(value: number) {
    this._teamWait = value;
  }
  public resetTeamWait() {
    this._teamWait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamWaitInput() {
    return this._teamWait;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      call: cdktf.booleanToTerraform(this._call),
      critical_alert: cdktf.booleanToTerraform(this._criticalAlert),
      email: cdktf.booleanToTerraform(this._email),
      grace: cdktf.numberToTerraform(this._grace),
      heartbeat_group_id: cdktf.numberToTerraform(this._heartbeatGroupId),
      maintenance_days: cdktf.listMapper(cdktf.stringToTerraform, false)(this._maintenanceDays),
      maintenance_from: cdktf.stringToTerraform(this._maintenanceFrom),
      maintenance_timezone: cdktf.stringToTerraform(this._maintenanceTimezone),
      maintenance_to: cdktf.stringToTerraform(this._maintenanceTo),
      name: cdktf.stringToTerraform(this._name),
      paused: cdktf.booleanToTerraform(this._paused),
      period: cdktf.numberToTerraform(this._period),
      policy_id: cdktf.stringToTerraform(this._policyId),
      push: cdktf.booleanToTerraform(this._push),
      sms: cdktf.booleanToTerraform(this._sms),
      sort_index: cdktf.numberToTerraform(this._sortIndex),
      team_name: cdktf.stringToTerraform(this._teamName),
      team_wait: cdktf.numberToTerraform(this._teamWait),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      call: {
        value: cdktf.booleanToHclTerraform(this._call),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      critical_alert: {
        value: cdktf.booleanToHclTerraform(this._criticalAlert),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      email: {
        value: cdktf.booleanToHclTerraform(this._email),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      grace: {
        value: cdktf.numberToHclTerraform(this._grace),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      heartbeat_group_id: {
        value: cdktf.numberToHclTerraform(this._heartbeatGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maintenance_days: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._maintenanceDays),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      maintenance_from: {
        value: cdktf.stringToHclTerraform(this._maintenanceFrom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maintenance_timezone: {
        value: cdktf.stringToHclTerraform(this._maintenanceTimezone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maintenance_to: {
        value: cdktf.stringToHclTerraform(this._maintenanceTo),
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
      paused: {
        value: cdktf.booleanToHclTerraform(this._paused),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      period: {
        value: cdktf.numberToHclTerraform(this._period),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      policy_id: {
        value: cdktf.stringToHclTerraform(this._policyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      push: {
        value: cdktf.booleanToHclTerraform(this._push),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sms: {
        value: cdktf.booleanToHclTerraform(this._sms),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sort_index: {
        value: cdktf.numberToHclTerraform(this._sortIndex),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      team_name: {
        value: cdktf.stringToHclTerraform(this._teamName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      team_wait: {
        value: cdktf.numberToHclTerraform(this._teamWait),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
