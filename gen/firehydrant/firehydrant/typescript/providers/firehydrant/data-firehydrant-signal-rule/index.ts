// https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.12/docs/data-sources/signal_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFirehydrantSignalRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.12/docs/data-sources/signal_rule#name DataFirehydrantSignalRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.12/docs/data-sources/signal_rule#team_id DataFirehydrantSignalRule#team_id}
  */
  readonly teamId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.12/docs/data-sources/signal_rule firehydrant_signal_rule}
*/
export class DataFirehydrantSignalRule extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "firehydrant_signal_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFirehydrantSignalRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFirehydrantSignalRule to import
  * @param importFromId The id of the existing DataFirehydrantSignalRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.12/docs/data-sources/signal_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFirehydrantSignalRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "firehydrant_signal_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.12/docs/data-sources/signal_rule firehydrant_signal_rule} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFirehydrantSignalRuleConfig
  */
  public constructor(scope: Construct, id: string, config: DataFirehydrantSignalRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'firehydrant_signal_rule',
      terraformGeneratorMetadata: {
        providerName: 'firehydrant',
        providerVersion: '0.14.12',
        providerVersionConstraint: '0.14.12'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._teamId = config.teamId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_incident_condition_when - computed: true, optional: false, required: false
  public get createIncidentConditionWhen() {
    return this.getStringAttribute('create_incident_condition_when');
  }

  // deduplication_expiry - computed: true, optional: false, required: false
  public get deduplicationExpiry() {
    return this.getStringAttribute('deduplication_expiry');
  }

  // expression - computed: true, optional: false, required: false
  public get expression() {
    return this.getStringAttribute('expression');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // incident_type_id - computed: true, optional: false, required: false
  public get incidentTypeId() {
    return this.getStringAttribute('incident_type_id');
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

  // notification_priority_override - computed: true, optional: false, required: false
  public get notificationPriorityOverride() {
    return this.getStringAttribute('notification_priority_override');
  }

  // target_id - computed: true, optional: false, required: false
  public get targetId() {
    return this.getStringAttribute('target_id');
  }

  // target_is_pageable - computed: true, optional: false, required: false
  public get targetIsPageable() {
    return this.getBooleanAttribute('target_is_pageable');
  }

  // target_name - computed: true, optional: false, required: false
  public get targetName() {
    return this.getStringAttribute('target_name');
  }

  // target_team_id - computed: true, optional: false, required: false
  public get targetTeamId() {
    return this.getStringAttribute('target_team_id');
  }

  // target_type - computed: true, optional: false, required: false
  public get targetType() {
    return this.getStringAttribute('target_type');
  }

  // team_id - computed: false, optional: false, required: true
  private _teamId?: string; 
  public get teamId() {
    return this.getStringAttribute('team_id');
  }
  public set teamId(value: string) {
    this._teamId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get teamIdInput() {
    return this._teamId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      team_id: cdktf.stringToTerraform(this._teamId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      team_id: {
        value: cdktf.stringToHclTerraform(this._teamId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
