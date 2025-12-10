// https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/realm_assignment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RealmAssignmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Condition expression for the Realm Assignment in Okta Expression Language. Example: `user.profile.role =="Manager"` or `user.profile.state.contains("example")`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/realm_assignment#condition_expression RealmAssignment#condition_expression}
  */
  readonly conditionExpression?: string;
  /**
  * The name of the Okta Realm Assignment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/realm_assignment#name RealmAssignment#name}
  */
  readonly name: string;
  /**
  * The Priority of the Realm Assignment. The lower the number, the higher the priority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/realm_assignment#priority RealmAssignment#priority}
  */
  readonly priority?: number;
  /**
  * The ID of the Profile Source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/realm_assignment#profile_source_id RealmAssignment#profile_source_id}
  */
  readonly profileSourceId: string;
  /**
  * The ID of the Realm asscociated with the Realm Assignment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/realm_assignment#realm_id RealmAssignment#realm_id}
  */
  readonly realmId: string;
  /**
  * Defines whether the Realm Assignment is active or not. Valid values: `ACTIVE` and `INACTIVE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/realm_assignment#status RealmAssignment#status}
  */
  readonly status?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/realm_assignment okta_realm_assignment}
*/
export class RealmAssignment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_realm_assignment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RealmAssignment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RealmAssignment to import
  * @param importFromId The id of the existing RealmAssignment that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/realm_assignment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RealmAssignment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "okta_realm_assignment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/realm_assignment okta_realm_assignment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RealmAssignmentConfig
  */
  public constructor(scope: Construct, id: string, config: RealmAssignmentConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_realm_assignment',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '6.5.2',
        providerVersionConstraint: '6.5.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._conditionExpression = config.conditionExpression;
    this._name = config.name;
    this._priority = config.priority;
    this._profileSourceId = config.profileSourceId;
    this._realmId = config.realmId;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // condition_expression - computed: false, optional: true, required: false
  private _conditionExpression?: string; 
  public get conditionExpression() {
    return this.getStringAttribute('condition_expression');
  }
  public set conditionExpression(value: string) {
    this._conditionExpression = value;
  }
  public resetConditionExpression() {
    this._conditionExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionExpressionInput() {
    return this._conditionExpression;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_default - computed: true, optional: false, required: false
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
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

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // profile_source_id - computed: false, optional: false, required: true
  private _profileSourceId?: string; 
  public get profileSourceId() {
    return this.getStringAttribute('profile_source_id');
  }
  public set profileSourceId(value: string) {
    this._profileSourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profileSourceIdInput() {
    return this._profileSourceId;
  }

  // realm_id - computed: false, optional: false, required: true
  private _realmId?: string; 
  public get realmId() {
    return this.getStringAttribute('realm_id');
  }
  public set realmId(value: string) {
    this._realmId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get realmIdInput() {
    return this._realmId;
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
      condition_expression: cdktf.stringToTerraform(this._conditionExpression),
      name: cdktf.stringToTerraform(this._name),
      priority: cdktf.numberToTerraform(this._priority),
      profile_source_id: cdktf.stringToTerraform(this._profileSourceId),
      realm_id: cdktf.stringToTerraform(this._realmId),
      status: cdktf.stringToTerraform(this._status),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      condition_expression: {
        value: cdktf.stringToHclTerraform(this._conditionExpression),
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
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      profile_source_id: {
        value: cdktf.stringToHclTerraform(this._profileSourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      realm_id: {
        value: cdktf.stringToHclTerraform(this._realmId),
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
