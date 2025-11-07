// https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/data-sources/heartbeat
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpsgenieHeartbeatConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/data-sources/heartbeat#alert_message DataOpsgenieHeartbeat#alert_message}
  */
  readonly alertMessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/data-sources/heartbeat#alert_priority DataOpsgenieHeartbeat#alert_priority}
  */
  readonly alertPriority?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/data-sources/heartbeat#alert_tags DataOpsgenieHeartbeat#alert_tags}
  */
  readonly alertTags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/data-sources/heartbeat#description DataOpsgenieHeartbeat#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/data-sources/heartbeat#enabled DataOpsgenieHeartbeat#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/data-sources/heartbeat#id DataOpsgenieHeartbeat#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/data-sources/heartbeat#interval DataOpsgenieHeartbeat#interval}
  */
  readonly interval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/data-sources/heartbeat#interval_unit DataOpsgenieHeartbeat#interval_unit}
  */
  readonly intervalUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/data-sources/heartbeat#name DataOpsgenieHeartbeat#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/data-sources/heartbeat#owner_team_id DataOpsgenieHeartbeat#owner_team_id}
  */
  readonly ownerTeamId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/data-sources/heartbeat opsgenie_heartbeat}
*/
export class DataOpsgenieHeartbeat extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opsgenie_heartbeat";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOpsgenieHeartbeat resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOpsgenieHeartbeat to import
  * @param importFromId The id of the existing DataOpsgenieHeartbeat that should be imported. Refer to the {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/data-sources/heartbeat#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOpsgenieHeartbeat to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opsgenie_heartbeat", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/data-sources/heartbeat opsgenie_heartbeat} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpsgenieHeartbeatConfig
  */
  public constructor(scope: Construct, id: string, config: DataOpsgenieHeartbeatConfig) {
    super(scope, id, {
      terraformResourceType: 'opsgenie_heartbeat',
      terraformGeneratorMetadata: {
        providerName: 'opsgenie',
        providerVersion: '0.6.40'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alertMessage = config.alertMessage;
    this._alertPriority = config.alertPriority;
    this._alertTags = config.alertTags;
    this._description = config.description;
    this._enabled = config.enabled;
    this._id = config.id;
    this._interval = config.interval;
    this._intervalUnit = config.intervalUnit;
    this._name = config.name;
    this._ownerTeamId = config.ownerTeamId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alert_message - computed: false, optional: true, required: false
  private _alertMessage?: string; 
  public get alertMessage() {
    return this.getStringAttribute('alert_message');
  }
  public set alertMessage(value: string) {
    this._alertMessage = value;
  }
  public resetAlertMessage() {
    this._alertMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertMessageInput() {
    return this._alertMessage;
  }

  // alert_priority - computed: false, optional: true, required: false
  private _alertPriority?: string; 
  public get alertPriority() {
    return this.getStringAttribute('alert_priority');
  }
  public set alertPriority(value: string) {
    this._alertPriority = value;
  }
  public resetAlertPriority() {
    this._alertPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertPriorityInput() {
    return this._alertPriority;
  }

  // alert_tags - computed: false, optional: true, required: false
  private _alertTags?: string[]; 
  public get alertTags() {
    return cdktf.Fn.tolist(this.getListAttribute('alert_tags'));
  }
  public set alertTags(value: string[]) {
    this._alertTags = value;
  }
  public resetAlertTags() {
    this._alertTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertTagsInput() {
    return this._alertTags;
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

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
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

  // owner_team_id - computed: false, optional: true, required: false
  private _ownerTeamId?: string; 
  public get ownerTeamId() {
    return this.getStringAttribute('owner_team_id');
  }
  public set ownerTeamId(value: string) {
    this._ownerTeamId = value;
  }
  public resetOwnerTeamId() {
    this._ownerTeamId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerTeamIdInput() {
    return this._ownerTeamId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alert_message: cdktf.stringToTerraform(this._alertMessage),
      alert_priority: cdktf.stringToTerraform(this._alertPriority),
      alert_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._alertTags),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      interval: cdktf.numberToTerraform(this._interval),
      interval_unit: cdktf.stringToTerraform(this._intervalUnit),
      name: cdktf.stringToTerraform(this._name),
      owner_team_id: cdktf.stringToTerraform(this._ownerTeamId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alert_message: {
        value: cdktf.stringToHclTerraform(this._alertMessage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alert_priority: {
        value: cdktf.stringToHclTerraform(this._alertPriority),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alert_tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._alertTags),
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
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owner_team_id: {
        value: cdktf.stringToHclTerraform(this._ownerTeamId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
