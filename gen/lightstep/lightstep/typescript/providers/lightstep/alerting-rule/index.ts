// https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/alerting_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AlertingRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/alerting_rule#condition_id AlertingRule#condition_id}
  */
  readonly conditionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/alerting_rule#destination_id AlertingRule#destination_id}
  */
  readonly destinationId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/alerting_rule#id AlertingRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/alerting_rule#project_name AlertingRule#project_name}
  */
  readonly projectName: string;
  /**
  * Represents the frequency at which to re-send an alert notification if an alert remains in a triggered state. By default, notifications will only be sent when the alert status changes.Values should be expressed as a duration (example: "2d").
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/alerting_rule#update_interval AlertingRule#update_interval}
  */
  readonly updateInterval: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/alerting_rule lightstep_alerting_rule}
*/
export class AlertingRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "lightstep_alerting_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AlertingRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AlertingRule to import
  * @param importFromId The id of the existing AlertingRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/alerting_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AlertingRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "lightstep_alerting_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/alerting_rule lightstep_alerting_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AlertingRuleConfig
  */
  public constructor(scope: Construct, id: string, config: AlertingRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'lightstep_alerting_rule',
      terraformGeneratorMetadata: {
        providerName: 'lightstep',
        providerVersion: '1.98.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._conditionId = config.conditionId;
    this._destinationId = config.destinationId;
    this._id = config.id;
    this._projectName = config.projectName;
    this._updateInterval = config.updateInterval;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // condition_id - computed: false, optional: false, required: true
  private _conditionId?: string; 
  public get conditionId() {
    return this.getStringAttribute('condition_id');
  }
  public set conditionId(value: string) {
    this._conditionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionIdInput() {
    return this._conditionId;
  }

  // destination_id - computed: false, optional: false, required: true
  private _destinationId?: string; 
  public get destinationId() {
    return this.getStringAttribute('destination_id');
  }
  public set destinationId(value: string) {
    this._destinationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationIdInput() {
    return this._destinationId;
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

  // project_name - computed: false, optional: false, required: true
  private _projectName?: string; 
  public get projectName() {
    return this.getStringAttribute('project_name');
  }
  public set projectName(value: string) {
    this._projectName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName;
  }

  // update_interval - computed: false, optional: false, required: true
  private _updateInterval?: string; 
  public get updateInterval() {
    return this.getStringAttribute('update_interval');
  }
  public set updateInterval(value: string) {
    this._updateInterval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get updateIntervalInput() {
    return this._updateInterval;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      condition_id: cdktf.stringToTerraform(this._conditionId),
      destination_id: cdktf.stringToTerraform(this._destinationId),
      id: cdktf.stringToTerraform(this._id),
      project_name: cdktf.stringToTerraform(this._projectName),
      update_interval: cdktf.stringToTerraform(this._updateInterval),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      condition_id: {
        value: cdktf.stringToHclTerraform(this._conditionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_id: {
        value: cdktf.stringToHclTerraform(this._destinationId),
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
      project_name: {
        value: cdktf.stringToHclTerraform(this._projectName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_interval: {
        value: cdktf.stringToHclTerraform(this._updateInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
