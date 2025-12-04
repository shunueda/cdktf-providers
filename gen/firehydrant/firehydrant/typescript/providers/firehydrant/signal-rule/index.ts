// https://registry.terraform.io/providers/firehydrant/firehydrant/0.15.0/docs/resources/signal_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SignalRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.15.0/docs/resources/signal_rule#create_incident_condition_when SignalRule#create_incident_condition_when}
  */
  readonly createIncidentConditionWhen?: string;
  /**
  * Duration for deduplicating similar alerts (ISO8601 duration format e.g., 'PT30M', 'PT2H', 'P1D')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.15.0/docs/resources/signal_rule#deduplication_expiry SignalRule#deduplication_expiry}
  */
  readonly deduplicationExpiry?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.15.0/docs/resources/signal_rule#expression SignalRule#expression}
  */
  readonly expression: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.15.0/docs/resources/signal_rule#id SignalRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.15.0/docs/resources/signal_rule#incident_type_id SignalRule#incident_type_id}
  */
  readonly incidentTypeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.15.0/docs/resources/signal_rule#name SignalRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.15.0/docs/resources/signal_rule#notification_priority_override SignalRule#notification_priority_override}
  */
  readonly notificationPriorityOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.15.0/docs/resources/signal_rule#target_id SignalRule#target_id}
  */
  readonly targetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.15.0/docs/resources/signal_rule#target_type SignalRule#target_type}
  */
  readonly targetType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.15.0/docs/resources/signal_rule#team_id SignalRule#team_id}
  */
  readonly teamId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.15.0/docs/resources/signal_rule firehydrant_signal_rule}
*/
export class SignalRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "firehydrant_signal_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SignalRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SignalRule to import
  * @param importFromId The id of the existing SignalRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.15.0/docs/resources/signal_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SignalRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "firehydrant_signal_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.15.0/docs/resources/signal_rule firehydrant_signal_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SignalRuleConfig
  */
  public constructor(scope: Construct, id: string, config: SignalRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'firehydrant_signal_rule',
      terraformGeneratorMetadata: {
        providerName: 'firehydrant',
        providerVersion: '0.15.0',
        providerVersionConstraint: '0.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._createIncidentConditionWhen = config.createIncidentConditionWhen;
    this._deduplicationExpiry = config.deduplicationExpiry;
    this._expression = config.expression;
    this._id = config.id;
    this._incidentTypeId = config.incidentTypeId;
    this._name = config.name;
    this._notificationPriorityOverride = config.notificationPriorityOverride;
    this._targetId = config.targetId;
    this._targetType = config.targetType;
    this._teamId = config.teamId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_incident_condition_when - computed: false, optional: true, required: false
  private _createIncidentConditionWhen?: string; 
  public get createIncidentConditionWhen() {
    return this.getStringAttribute('create_incident_condition_when');
  }
  public set createIncidentConditionWhen(value: string) {
    this._createIncidentConditionWhen = value;
  }
  public resetCreateIncidentConditionWhen() {
    this._createIncidentConditionWhen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createIncidentConditionWhenInput() {
    return this._createIncidentConditionWhen;
  }

  // deduplication_expiry - computed: false, optional: true, required: false
  private _deduplicationExpiry?: string; 
  public get deduplicationExpiry() {
    return this.getStringAttribute('deduplication_expiry');
  }
  public set deduplicationExpiry(value: string) {
    this._deduplicationExpiry = value;
  }
  public resetDeduplicationExpiry() {
    this._deduplicationExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deduplicationExpiryInput() {
    return this._deduplicationExpiry;
  }

  // expression - computed: false, optional: false, required: true
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
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

  // incident_type_id - computed: false, optional: true, required: false
  private _incidentTypeId?: string; 
  public get incidentTypeId() {
    return this.getStringAttribute('incident_type_id');
  }
  public set incidentTypeId(value: string) {
    this._incidentTypeId = value;
  }
  public resetIncidentTypeId() {
    this._incidentTypeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incidentTypeIdInput() {
    return this._incidentTypeId;
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

  // notification_priority_override - computed: false, optional: true, required: false
  private _notificationPriorityOverride?: string; 
  public get notificationPriorityOverride() {
    return this.getStringAttribute('notification_priority_override');
  }
  public set notificationPriorityOverride(value: string) {
    this._notificationPriorityOverride = value;
  }
  public resetNotificationPriorityOverride() {
    this._notificationPriorityOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationPriorityOverrideInput() {
    return this._notificationPriorityOverride;
  }

  // target_id - computed: false, optional: false, required: true
  private _targetId?: string; 
  public get targetId() {
    return this.getStringAttribute('target_id');
  }
  public set targetId(value: string) {
    this._targetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetIdInput() {
    return this._targetId;
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

  // target_type - computed: false, optional: false, required: true
  private _targetType?: string; 
  public get targetType() {
    return this.getStringAttribute('target_type');
  }
  public set targetType(value: string) {
    this._targetType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTypeInput() {
    return this._targetType;
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
      create_incident_condition_when: cdktf.stringToTerraform(this._createIncidentConditionWhen),
      deduplication_expiry: cdktf.stringToTerraform(this._deduplicationExpiry),
      expression: cdktf.stringToTerraform(this._expression),
      id: cdktf.stringToTerraform(this._id),
      incident_type_id: cdktf.stringToTerraform(this._incidentTypeId),
      name: cdktf.stringToTerraform(this._name),
      notification_priority_override: cdktf.stringToTerraform(this._notificationPriorityOverride),
      target_id: cdktf.stringToTerraform(this._targetId),
      target_type: cdktf.stringToTerraform(this._targetType),
      team_id: cdktf.stringToTerraform(this._teamId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      create_incident_condition_when: {
        value: cdktf.stringToHclTerraform(this._createIncidentConditionWhen),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deduplication_expiry: {
        value: cdktf.stringToHclTerraform(this._deduplicationExpiry),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expression: {
        value: cdktf.stringToHclTerraform(this._expression),
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
      incident_type_id: {
        value: cdktf.stringToHclTerraform(this._incidentTypeId),
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
      notification_priority_override: {
        value: cdktf.stringToHclTerraform(this._notificationPriorityOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_id: {
        value: cdktf.stringToHclTerraform(this._targetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_type: {
        value: cdktf.stringToHclTerraform(this._targetType),
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
