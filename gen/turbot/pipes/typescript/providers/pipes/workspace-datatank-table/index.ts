// https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/workspace_datatank_table
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkspaceDatatankTableConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/workspace_datatank_table#datatank_handle WorkspaceDatatankTable#datatank_handle}
  */
  readonly datatankHandle: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/workspace_datatank_table#datatank_id WorkspaceDatatankTable#datatank_id}
  */
  readonly datatankId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/workspace_datatank_table#datatank_table_id WorkspaceDatatankTable#datatank_table_id}
  */
  readonly datatankTableId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/workspace_datatank_table#description WorkspaceDatatankTable#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/workspace_datatank_table#desired_state WorkspaceDatatankTable#desired_state}
  */
  readonly desiredState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/workspace_datatank_table#frequency WorkspaceDatatankTable#frequency}
  */
  readonly frequency: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/workspace_datatank_table#id WorkspaceDatatankTable#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/workspace_datatank_table#migrating_name WorkspaceDatatankTable#migrating_name}
  */
  readonly migratingName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/workspace_datatank_table#name WorkspaceDatatankTable#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/workspace_datatank_table#organization WorkspaceDatatankTable#organization}
  */
  readonly organization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/workspace_datatank_table#part_per WorkspaceDatatankTable#part_per}
  */
  readonly partPer?: string;
  /**
  * If true, skip the initial refresh after create or update. This value is write-only and not exported in state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/workspace_datatank_table#skip_initial_refresh WorkspaceDatatankTable#skip_initial_refresh}
  */
  readonly skipInitialRefresh?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/workspace_datatank_table#source_query WorkspaceDatatankTable#source_query}
  */
  readonly sourceQuery?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/workspace_datatank_table#source_schema WorkspaceDatatankTable#source_schema}
  */
  readonly sourceSchema?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/workspace_datatank_table#source_table WorkspaceDatatankTable#source_table}
  */
  readonly sourceTable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/workspace_datatank_table#state WorkspaceDatatankTable#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/workspace_datatank_table#state_reason WorkspaceDatatankTable#state_reason}
  */
  readonly stateReason?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/workspace_datatank_table#type WorkspaceDatatankTable#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/workspace_datatank_table#workspace_handle WorkspaceDatatankTable#workspace_handle}
  */
  readonly workspaceHandle: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/workspace_datatank_table pipes_workspace_datatank_table}
*/
export class WorkspaceDatatankTable extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pipes_workspace_datatank_table";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WorkspaceDatatankTable resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkspaceDatatankTable to import
  * @param importFromId The id of the existing WorkspaceDatatankTable that should be imported. Refer to the {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/workspace_datatank_table#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkspaceDatatankTable to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pipes_workspace_datatank_table", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/workspace_datatank_table pipes_workspace_datatank_table} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkspaceDatatankTableConfig
  */
  public constructor(scope: Construct, id: string, config: WorkspaceDatatankTableConfig) {
    super(scope, id, {
      terraformResourceType: 'pipes_workspace_datatank_table',
      terraformGeneratorMetadata: {
        providerName: 'pipes',
        providerVersion: '0.17.0',
        providerVersionConstraint: '0.17.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._datatankHandle = config.datatankHandle;
    this._datatankId = config.datatankId;
    this._datatankTableId = config.datatankTableId;
    this._description = config.description;
    this._desiredState = config.desiredState;
    this._frequency = config.frequency;
    this._id = config.id;
    this._migratingName = config.migratingName;
    this._name = config.name;
    this._organization = config.organization;
    this._partPer = config.partPer;
    this._skipInitialRefresh = config.skipInitialRefresh;
    this._sourceQuery = config.sourceQuery;
    this._sourceSchema = config.sourceSchema;
    this._sourceTable = config.sourceTable;
    this._state = config.state;
    this._stateReason = config.stateReason;
    this._type = config.type;
    this._workspaceHandle = config.workspaceHandle;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // datatank_handle - computed: false, optional: false, required: true
  private _datatankHandle?: string; 
  public get datatankHandle() {
    return this.getStringAttribute('datatank_handle');
  }
  public set datatankHandle(value: string) {
    this._datatankHandle = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datatankHandleInput() {
    return this._datatankHandle;
  }

  // datatank_id - computed: true, optional: true, required: false
  private _datatankId?: string; 
  public get datatankId() {
    return this.getStringAttribute('datatank_id');
  }
  public set datatankId(value: string) {
    this._datatankId = value;
  }
  public resetDatatankId() {
    this._datatankId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datatankIdInput() {
    return this._datatankId;
  }

  // datatank_table_id - computed: true, optional: true, required: false
  private _datatankTableId?: string; 
  public get datatankTableId() {
    return this.getStringAttribute('datatank_table_id');
  }
  public set datatankTableId(value: string) {
    this._datatankTableId = value;
  }
  public resetDatatankTableId() {
    this._datatankTableId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datatankTableIdInput() {
    return this._datatankTableId;
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

  // desired_state - computed: true, optional: true, required: false
  private _desiredState?: string; 
  public get desiredState() {
    return this.getStringAttribute('desired_state');
  }
  public set desiredState(value: string) {
    this._desiredState = value;
  }
  public resetDesiredState() {
    this._desiredState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredStateInput() {
    return this._desiredState;
  }

  // frequency - computed: false, optional: false, required: true
  private _frequency?: string; 
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }

  // freshness - computed: true, optional: false, required: false
  public get freshness() {
    return this.getStringAttribute('freshness');
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

  // migrating_freshness - computed: true, optional: false, required: false
  public get migratingFreshness() {
    return this.getStringAttribute('migrating_freshness');
  }

  // migrating_name - computed: true, optional: true, required: false
  private _migratingName?: string; 
  public get migratingName() {
    return this.getStringAttribute('migrating_name');
  }
  public set migratingName(value: string) {
    this._migratingName = value;
  }
  public resetMigratingName() {
    this._migratingName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get migratingNameInput() {
    return this._migratingName;
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

  // organization - computed: true, optional: true, required: false
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  public resetOrganization() {
    this._organization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
  }

  // part_per - computed: false, optional: true, required: false
  private _partPer?: string; 
  public get partPer() {
    return this.getStringAttribute('part_per');
  }
  public set partPer(value: string) {
    this._partPer = value;
  }
  public resetPartPer() {
    this._partPer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partPerInput() {
    return this._partPer;
  }

  // skip_initial_refresh - computed: false, optional: true, required: false
  private _skipInitialRefresh?: boolean | cdktf.IResolvable; 
  public get skipInitialRefresh() {
    return this.getBooleanAttribute('skip_initial_refresh');
  }
  public set skipInitialRefresh(value: boolean | cdktf.IResolvable) {
    this._skipInitialRefresh = value;
  }
  public resetSkipInitialRefresh() {
    this._skipInitialRefresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipInitialRefreshInput() {
    return this._skipInitialRefresh;
  }

  // source_query - computed: false, optional: true, required: false
  private _sourceQuery?: string; 
  public get sourceQuery() {
    return this.getStringAttribute('source_query');
  }
  public set sourceQuery(value: string) {
    this._sourceQuery = value;
  }
  public resetSourceQuery() {
    this._sourceQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceQueryInput() {
    return this._sourceQuery;
  }

  // source_schema - computed: false, optional: true, required: false
  private _sourceSchema?: string; 
  public get sourceSchema() {
    return this.getStringAttribute('source_schema');
  }
  public set sourceSchema(value: string) {
    this._sourceSchema = value;
  }
  public resetSourceSchema() {
    this._sourceSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceSchemaInput() {
    return this._sourceSchema;
  }

  // source_table - computed: false, optional: true, required: false
  private _sourceTable?: string; 
  public get sourceTable() {
    return this.getStringAttribute('source_table');
  }
  public set sourceTable(value: string) {
    this._sourceTable = value;
  }
  public resetSourceTable() {
    this._sourceTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTableInput() {
    return this._sourceTable;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // state_reason - computed: true, optional: true, required: false
  private _stateReason?: string; 
  public get stateReason() {
    return this.getStringAttribute('state_reason');
  }
  public set stateReason(value: string) {
    this._stateReason = value;
  }
  public resetStateReason() {
    this._stateReason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateReasonInput() {
    return this._stateReason;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }

  // version_id - computed: true, optional: false, required: false
  public get versionId() {
    return this.getNumberAttribute('version_id');
  }

  // workspace_handle - computed: false, optional: false, required: true
  private _workspaceHandle?: string; 
  public get workspaceHandle() {
    return this.getStringAttribute('workspace_handle');
  }
  public set workspaceHandle(value: string) {
    this._workspaceHandle = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceHandleInput() {
    return this._workspaceHandle;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      datatank_handle: cdktf.stringToTerraform(this._datatankHandle),
      datatank_id: cdktf.stringToTerraform(this._datatankId),
      datatank_table_id: cdktf.stringToTerraform(this._datatankTableId),
      description: cdktf.stringToTerraform(this._description),
      desired_state: cdktf.stringToTerraform(this._desiredState),
      frequency: cdktf.stringToTerraform(this._frequency),
      id: cdktf.stringToTerraform(this._id),
      migrating_name: cdktf.stringToTerraform(this._migratingName),
      name: cdktf.stringToTerraform(this._name),
      organization: cdktf.stringToTerraform(this._organization),
      part_per: cdktf.stringToTerraform(this._partPer),
      skip_initial_refresh: cdktf.booleanToTerraform(this._skipInitialRefresh),
      source_query: cdktf.stringToTerraform(this._sourceQuery),
      source_schema: cdktf.stringToTerraform(this._sourceSchema),
      source_table: cdktf.stringToTerraform(this._sourceTable),
      state: cdktf.stringToTerraform(this._state),
      state_reason: cdktf.stringToTerraform(this._stateReason),
      type: cdktf.stringToTerraform(this._type),
      workspace_handle: cdktf.stringToTerraform(this._workspaceHandle),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      datatank_handle: {
        value: cdktf.stringToHclTerraform(this._datatankHandle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      datatank_id: {
        value: cdktf.stringToHclTerraform(this._datatankId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      datatank_table_id: {
        value: cdktf.stringToHclTerraform(this._datatankTableId),
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
      desired_state: {
        value: cdktf.stringToHclTerraform(this._desiredState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      frequency: {
        value: cdktf.stringToHclTerraform(this._frequency),
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
      migrating_name: {
        value: cdktf.stringToHclTerraform(this._migratingName),
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
      organization: {
        value: cdktf.stringToHclTerraform(this._organization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      part_per: {
        value: cdktf.stringToHclTerraform(this._partPer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip_initial_refresh: {
        value: cdktf.booleanToHclTerraform(this._skipInitialRefresh),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      source_query: {
        value: cdktf.stringToHclTerraform(this._sourceQuery),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_schema: {
        value: cdktf.stringToHclTerraform(this._sourceSchema),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_table: {
        value: cdktf.stringToHclTerraform(this._sourceTable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state_reason: {
        value: cdktf.stringToHclTerraform(this._stateReason),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workspace_handle: {
        value: cdktf.stringToHclTerraform(this._workspaceHandle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
