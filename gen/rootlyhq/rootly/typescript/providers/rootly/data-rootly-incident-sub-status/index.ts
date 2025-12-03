// https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/data-sources/incident_sub_status
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataRootlyIncidentSubStatusConfig extends cdktf.TerraformMetaArguments {
  /**
  * Filter by date range using 'lt' and 'gt'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/data-sources/incident_sub_status#assigned_at DataRootlyIncidentSubStatus#assigned_at}
  */
  readonly assignedAt?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/data-sources/incident_sub_status#sub_status_id DataRootlyIncidentSubStatus#sub_status_id}
  */
  readonly subStatusId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/data-sources/incident_sub_status rootly_incident_sub_status}
*/
export class DataRootlyIncidentSubStatus extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rootly_incident_sub_status";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataRootlyIncidentSubStatus resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataRootlyIncidentSubStatus to import
  * @param importFromId The id of the existing DataRootlyIncidentSubStatus that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/data-sources/incident_sub_status#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataRootlyIncidentSubStatus to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_incident_sub_status", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/data-sources/incident_sub_status rootly_incident_sub_status} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataRootlyIncidentSubStatusConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataRootlyIncidentSubStatusConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'rootly_incident_sub_status',
      terraformGeneratorMetadata: {
        providerName: 'rootly',
        providerVersion: '4.3.10',
        providerVersionConstraint: '4.3.10'
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
    this._subStatusId = config.subStatusId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assigned_at - computed: false, optional: true, required: false
  private _assignedAt?: { [key: string]: string }; 
  public get assignedAt() {
    return this.getStringMapAttribute('assigned_at');
  }
  public set assignedAt(value: { [key: string]: string }) {
    this._assignedAt = value;
  }
  public resetAssignedAt() {
    this._assignedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignedAtInput() {
    return this._assignedAt;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // sub_status_id - computed: true, optional: true, required: false
  private _subStatusId?: string; 
  public get subStatusId() {
    return this.getStringAttribute('sub_status_id');
  }
  public set subStatusId(value: string) {
    this._subStatusId = value;
  }
  public resetSubStatusId() {
    this._subStatusId = undefined;
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
      assigned_at: cdktf.hashMapper(cdktf.stringToTerraform)(this._assignedAt),
      sub_status_id: cdktf.stringToTerraform(this._subStatusId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      assigned_at: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._assignedAt),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
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
