// https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_severity
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BetteruptimeSeverityConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether to call when a new incident is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_severity#call BetteruptimeSeverity#call}
  */
  readonly call?: boolean | cdktf.IResolvable;
  /**
  * Whether to send a critical push notification that ignores the mute switch and Do not Disturb mode when a new incident is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_severity#critical_alert BetteruptimeSeverity#critical_alert}
  */
  readonly criticalAlert?: boolean | cdktf.IResolvable;
  /**
  * Whether to send an email when a new incident is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_severity#email BetteruptimeSeverity#email}
  */
  readonly email?: boolean | cdktf.IResolvable;
  /**
  * The name of this Severity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_severity#name BetteruptimeSeverity#name}
  */
  readonly name: string;
  /**
  * Whether to send a push notification when a new incident is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_severity#push BetteruptimeSeverity#push}
  */
  readonly push?: boolean | cdktf.IResolvable;
  /**
  * Set this attribute if you want to add this severity to a severity group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_severity#severity_group_id BetteruptimeSeverity#severity_group_id}
  */
  readonly severityGroupId?: number;
  /**
  * Whether to send an SMS when a new incident is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_severity#sms BetteruptimeSeverity#sms}
  */
  readonly sms?: boolean | cdktf.IResolvable;
  /**
  * Used to specify the team the resource should be created in when using global tokens.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_severity#team_name BetteruptimeSeverity#team_name}
  */
  readonly teamName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_severity betteruptime_severity}
*/
export class BetteruptimeSeverity extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "betteruptime_severity";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BetteruptimeSeverity resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BetteruptimeSeverity to import
  * @param importFromId The id of the existing BetteruptimeSeverity that should be imported. Refer to the {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_severity#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BetteruptimeSeverity to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "betteruptime_severity", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_severity betteruptime_severity} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BetteruptimeSeverityConfig
  */
  public constructor(scope: Construct, id: string, config: BetteruptimeSeverityConfig) {
    super(scope, id, {
      terraformResourceType: 'betteruptime_severity',
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
    this._name = config.name;
    this._push = config.push;
    this._severityGroupId = config.severityGroupId;
    this._sms = config.sms;
    this._teamName = config.teamName;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // severity_group_id - computed: true, optional: true, required: false
  private _severityGroupId?: number; 
  public get severityGroupId() {
    return this.getNumberAttribute('severity_group_id');
  }
  public set severityGroupId(value: number) {
    this._severityGroupId = value;
  }
  public resetSeverityGroupId() {
    this._severityGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityGroupIdInput() {
    return this._severityGroupId;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      call: cdktf.booleanToTerraform(this._call),
      critical_alert: cdktf.booleanToTerraform(this._criticalAlert),
      email: cdktf.booleanToTerraform(this._email),
      name: cdktf.stringToTerraform(this._name),
      push: cdktf.booleanToTerraform(this._push),
      severity_group_id: cdktf.numberToTerraform(this._severityGroupId),
      sms: cdktf.booleanToTerraform(this._sms),
      team_name: cdktf.stringToTerraform(this._teamName),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      severity_group_id: {
        value: cdktf.numberToHclTerraform(this._severityGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sms: {
        value: cdktf.booleanToHclTerraform(this._sms),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      team_name: {
        value: cdktf.stringToHclTerraform(this._teamName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
