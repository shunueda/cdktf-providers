// https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/incident_sub_status
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IncidentSubStatusConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/incident_sub_status#assigned_at IncidentSubStatus#assigned_at}
  */
  readonly assignedAt: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/incident_sub_status#assigned_by_user_id IncidentSubStatus#assigned_by_user_id}
  */
  readonly assignedByUserId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/incident_sub_status#id IncidentSubStatus#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/incident_sub_status#incident_id IncidentSubStatus#incident_id}
  */
  readonly incidentId?: string;
  /**
  * Note: To change an incident's sub-status, use the PATCH /incidents/:id endpoint and set the sub_status_id attribute. This endpoint is for modifying the timestamp of when an incident's sub-status was assigned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/incident_sub_status#sub_status_id IncidentSubStatus#sub_status_id}
  */
  readonly subStatusId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/incident_sub_status rootly_incident_sub_status}
*/
export class IncidentSubStatus extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rootly_incident_sub_status";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IncidentSubStatus resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IncidentSubStatus to import
  * @param importFromId The id of the existing IncidentSubStatus that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/incident_sub_status#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IncidentSubStatus to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_incident_sub_status", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/incident_sub_status rootly_incident_sub_status} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IncidentSubStatusConfig
  */
  public constructor(scope: Construct, id: string, config: IncidentSubStatusConfig) {
    super(scope, id, {
      terraformResourceType: 'rootly_incident_sub_status',
      terraformGeneratorMetadata: {
        providerName: 'rootly',
        providerVersion: '4.3.11',
        providerVersionConstraint: '4.3.11'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._assignedAt = config.assignedAt;
    this._assignedByUserId = config.assignedByUserId;
    this._id = config.id;
    this._incidentId = config.incidentId;
    this._subStatusId = config.subStatusId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assigned_at - computed: false, optional: false, required: true
  private _assignedAt?: string; 
  public get assignedAt() {
    return this.getStringAttribute('assigned_at');
  }
  public set assignedAt(value: string) {
    this._assignedAt = value;
  }
  // Temporarily expose input value. Use with caution.
  public get assignedAtInput() {
    return this._assignedAt;
  }

  // assigned_by_user_id - computed: true, optional: true, required: false
  private _assignedByUserId?: number; 
  public get assignedByUserId() {
    return this.getNumberAttribute('assigned_by_user_id');
  }
  public set assignedByUserId(value: number) {
    this._assignedByUserId = value;
  }
  public resetAssignedByUserId() {
    this._assignedByUserId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignedByUserIdInput() {
    return this._assignedByUserId;
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

  // incident_id - computed: true, optional: true, required: false
  private _incidentId?: string; 
  public get incidentId() {
    return this.getStringAttribute('incident_id');
  }
  public set incidentId(value: string) {
    this._incidentId = value;
  }
  public resetIncidentId() {
    this._incidentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incidentIdInput() {
    return this._incidentId;
  }

  // sub_status_id - computed: false, optional: false, required: true
  private _subStatusId?: string; 
  public get subStatusId() {
    return this.getStringAttribute('sub_status_id');
  }
  public set subStatusId(value: string) {
    this._subStatusId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subStatusIdInput() {
    return this._subStatusId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      assigned_at: cdktf.stringToTerraform(this._assignedAt),
      assigned_by_user_id: cdktf.numberToTerraform(this._assignedByUserId),
      id: cdktf.stringToTerraform(this._id),
      incident_id: cdktf.stringToTerraform(this._incidentId),
      sub_status_id: cdktf.stringToTerraform(this._subStatusId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      assigned_at: {
        value: cdktf.stringToHclTerraform(this._assignedAt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      assigned_by_user_id: {
        value: cdktf.numberToHclTerraform(this._assignedByUserId),
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
      incident_id: {
        value: cdktf.stringToHclTerraform(this._incidentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sub_status_id: {
        value: cdktf.stringToHclTerraform(this._subStatusId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
