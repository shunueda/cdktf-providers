// https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/heartbeat
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HeartbeatConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of alerts triggered when heartbeat expires.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/heartbeat#alert_description Heartbeat#alert_description}
  */
  readonly alertDescription?: string;
  /**
  * Summary of alerts triggered when heartbeat expires.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/heartbeat#alert_summary Heartbeat#alert_summary}
  */
  readonly alertSummary: string;
  /**
  * Urgency of alerts triggered when heartbeat expires.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/heartbeat#alert_urgency_id Heartbeat#alert_urgency_id}
  */
  readonly alertUrgencyId?: string;
  /**
  * The description of the heartbeat
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/heartbeat#description Heartbeat#description}
  */
  readonly description?: string;
  /**
  * Email address to receive heartbeat pings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/heartbeat#email_address Heartbeat#email_address}
  */
  readonly emailAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/heartbeat#enabled Heartbeat#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * When heartbeat expires
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/heartbeat#expires_at Heartbeat#expires_at}
  */
  readonly expiresAt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/heartbeat#id Heartbeat#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/heartbeat#interval Heartbeat#interval}
  */
  readonly interval: number;
  /**
  * Value must be one of `seconds`, `minutes`, `hours`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/heartbeat#interval_unit Heartbeat#interval_unit}
  */
  readonly intervalUnit?: string;
  /**
  * When the heartbeat was last pinged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/heartbeat#last_pinged_at Heartbeat#last_pinged_at}
  */
  readonly lastPingedAt?: string;
  /**
  * The name of the heartbeat
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/heartbeat#name Heartbeat#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/heartbeat#notification_target_id Heartbeat#notification_target_id}
  */
  readonly notificationTargetId: string;
  /**
  * Value must be one of `User`, `Group`, `Service`, `EscalationPolicy`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/heartbeat#notification_target_type Heartbeat#notification_target_type}
  */
  readonly notificationTargetType?: string;
  /**
  * URL to receive heartbeat pings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/heartbeat#ping_url Heartbeat#ping_url}
  */
  readonly pingUrl?: string;
  /**
  * Secret used as bearer token when pinging heartbeat.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/heartbeat#secret Heartbeat#secret}
  */
  readonly secret?: string;
  /**
  * Value must be one of `waiting`, `active`, `expired`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/heartbeat#status Heartbeat#status}
  */
  readonly status?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/heartbeat rootly_heartbeat}
*/
export class Heartbeat extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rootly_heartbeat";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Heartbeat resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Heartbeat to import
  * @param importFromId The id of the existing Heartbeat that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/heartbeat#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Heartbeat to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_heartbeat", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/heartbeat rootly_heartbeat} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HeartbeatConfig
  */
  public constructor(scope: Construct, id: string, config: HeartbeatConfig) {
    super(scope, id, {
      terraformResourceType: 'rootly_heartbeat',
      terraformGeneratorMetadata: {
        providerName: 'rootly',
        providerVersion: '5.0.0',
        providerVersionConstraint: '5.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alertDescription = config.alertDescription;
    this._alertSummary = config.alertSummary;
    this._alertUrgencyId = config.alertUrgencyId;
    this._description = config.description;
    this._emailAddress = config.emailAddress;
    this._enabled = config.enabled;
    this._expiresAt = config.expiresAt;
    this._id = config.id;
    this._interval = config.interval;
    this._intervalUnit = config.intervalUnit;
    this._lastPingedAt = config.lastPingedAt;
    this._name = config.name;
    this._notificationTargetId = config.notificationTargetId;
    this._notificationTargetType = config.notificationTargetType;
    this._pingUrl = config.pingUrl;
    this._secret = config.secret;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alert_description - computed: true, optional: true, required: false
  private _alertDescription?: string; 
  public get alertDescription() {
    return this.getStringAttribute('alert_description');
  }
  public set alertDescription(value: string) {
    this._alertDescription = value;
  }
  public resetAlertDescription() {
    this._alertDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertDescriptionInput() {
    return this._alertDescription;
  }

  // alert_summary - computed: false, optional: false, required: true
  private _alertSummary?: string; 
  public get alertSummary() {
    return this.getStringAttribute('alert_summary');
  }
  public set alertSummary(value: string) {
    this._alertSummary = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alertSummaryInput() {
    return this._alertSummary;
  }

  // alert_urgency_id - computed: true, optional: true, required: false
  private _alertUrgencyId?: string; 
  public get alertUrgencyId() {
    return this.getStringAttribute('alert_urgency_id');
  }
  public set alertUrgencyId(value: string) {
    this._alertUrgencyId = value;
  }
  public resetAlertUrgencyId() {
    this._alertUrgencyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertUrgencyIdInput() {
    return this._alertUrgencyId;
  }

  // description - computed: true, optional: true, required: false
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

  // email_address - computed: true, optional: true, required: false
  private _emailAddress?: string; 
  public get emailAddress() {
    return this.getStringAttribute('email_address');
  }
  public set emailAddress(value: string) {
    this._emailAddress = value;
  }
  public resetEmailAddress() {
    this._emailAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAddressInput() {
    return this._emailAddress;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // expires_at - computed: true, optional: true, required: false
  private _expiresAt?: string; 
  public get expiresAt() {
    return this.getStringAttribute('expires_at');
  }
  public set expiresAt(value: string) {
    this._expiresAt = value;
  }
  public resetExpiresAt() {
    this._expiresAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiresAtInput() {
    return this._expiresAt;
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

  // interval - computed: false, optional: false, required: true
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // interval_unit - computed: false, optional: true, required: false
  private _intervalUnit?: string; 
  public get intervalUnit() {
    return this.getStringAttribute('interval_unit');
  }
  public set intervalUnit(value: string) {
    this._intervalUnit = value;
  }
  public resetIntervalUnit() {
    this._intervalUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalUnitInput() {
    return this._intervalUnit;
  }

  // last_pinged_at - computed: true, optional: true, required: false
  private _lastPingedAt?: string; 
  public get lastPingedAt() {
    return this.getStringAttribute('last_pinged_at');
  }
  public set lastPingedAt(value: string) {
    this._lastPingedAt = value;
  }
  public resetLastPingedAt() {
    this._lastPingedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastPingedAtInput() {
    return this._lastPingedAt;
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

  // notification_target_id - computed: false, optional: false, required: true
  private _notificationTargetId?: string; 
  public get notificationTargetId() {
    return this.getStringAttribute('notification_target_id');
  }
  public set notificationTargetId(value: string) {
    this._notificationTargetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationTargetIdInput() {
    return this._notificationTargetId;
  }

  // notification_target_type - computed: false, optional: true, required: false
  private _notificationTargetType?: string; 
  public get notificationTargetType() {
    return this.getStringAttribute('notification_target_type');
  }
  public set notificationTargetType(value: string) {
    this._notificationTargetType = value;
  }
  public resetNotificationTargetType() {
    this._notificationTargetType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationTargetTypeInput() {
    return this._notificationTargetType;
  }

  // ping_url - computed: true, optional: true, required: false
  private _pingUrl?: string; 
  public get pingUrl() {
    return this.getStringAttribute('ping_url');
  }
  public set pingUrl(value: string) {
    this._pingUrl = value;
  }
  public resetPingUrl() {
    this._pingUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pingUrlInput() {
    return this._pingUrl;
  }

  // secret - computed: true, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alert_description: cdktf.stringToTerraform(this._alertDescription),
      alert_summary: cdktf.stringToTerraform(this._alertSummary),
      alert_urgency_id: cdktf.stringToTerraform(this._alertUrgencyId),
      description: cdktf.stringToTerraform(this._description),
      email_address: cdktf.stringToTerraform(this._emailAddress),
      enabled: cdktf.booleanToTerraform(this._enabled),
      expires_at: cdktf.stringToTerraform(this._expiresAt),
      id: cdktf.stringToTerraform(this._id),
      interval: cdktf.numberToTerraform(this._interval),
      interval_unit: cdktf.stringToTerraform(this._intervalUnit),
      last_pinged_at: cdktf.stringToTerraform(this._lastPingedAt),
      name: cdktf.stringToTerraform(this._name),
      notification_target_id: cdktf.stringToTerraform(this._notificationTargetId),
      notification_target_type: cdktf.stringToTerraform(this._notificationTargetType),
      ping_url: cdktf.stringToTerraform(this._pingUrl),
      secret: cdktf.stringToTerraform(this._secret),
      status: cdktf.stringToTerraform(this._status),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alert_description: {
        value: cdktf.stringToHclTerraform(this._alertDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alert_summary: {
        value: cdktf.stringToHclTerraform(this._alertSummary),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alert_urgency_id: {
        value: cdktf.stringToHclTerraform(this._alertUrgencyId),
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
      email_address: {
        value: cdktf.stringToHclTerraform(this._emailAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      expires_at: {
        value: cdktf.stringToHclTerraform(this._expiresAt),
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
      interval: {
        value: cdktf.numberToHclTerraform(this._interval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      interval_unit: {
        value: cdktf.stringToHclTerraform(this._intervalUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      last_pinged_at: {
        value: cdktf.stringToHclTerraform(this._lastPingedAt),
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
      notification_target_id: {
        value: cdktf.stringToHclTerraform(this._notificationTargetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notification_target_type: {
        value: cdktf.stringToHclTerraform(this._notificationTargetType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ping_url: {
        value: cdktf.stringToHclTerraform(this._pingUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret: {
        value: cdktf.stringToHclTerraform(this._secret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
