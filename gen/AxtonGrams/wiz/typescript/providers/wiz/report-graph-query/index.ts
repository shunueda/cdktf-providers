// https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/report_graph_query
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ReportGraphQueryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/report_graph_query#id ReportGraphQuery#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the Report.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/report_graph_query#name ReportGraphQuery#name}
  */
  readonly name: string;
  /**
  * The ID of the project that this report belongs to (changing this requires re-creatting the report). Defaults to all projects.
  *     - Defaults to `*`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/report_graph_query#project_id ReportGraphQuery#project_id}
  */
  readonly projectId?: string;
  /**
  * The query that the report will run. Required by the GRAPH_QUERY report type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/report_graph_query#query ReportGraphQuery#query}
  */
  readonly query: string;
  /**
  * Run interval for scheduled reports (in hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/report_graph_query#run_interval_hours ReportGraphQuery#run_interval_hours}
  */
  readonly runIntervalHours?: number;
  /**
  * String representing the time and date when the scheduling should start (required when run_interval_hours is set). Must be in the following format: 2006-01-02 15:04:05 +0000 UTC. Also, Wiz will always round this down by the hour.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/report_graph_query#run_starts_at ReportGraphQuery#run_starts_at}
  */
  readonly runStartsAt?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/report_graph_query wiz_report_graph_query}
*/
export class ReportGraphQuery extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "wiz_report_graph_query";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ReportGraphQuery resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ReportGraphQuery to import
  * @param importFromId The id of the existing ReportGraphQuery that should be imported. Refer to the {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/report_graph_query#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ReportGraphQuery to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "wiz_report_graph_query", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/report_graph_query wiz_report_graph_query} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ReportGraphQueryConfig
  */
  public constructor(scope: Construct, id: string, config: ReportGraphQueryConfig) {
    super(scope, id, {
      terraformResourceType: 'wiz_report_graph_query',
      terraformGeneratorMetadata: {
        providerName: 'wiz',
        providerVersion: '1.2.5',
        providerVersionConstraint: '1.2.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
    this._projectId = config.projectId;
    this._query = config.query;
    this._runIntervalHours = config.runIntervalHours;
    this._runStartsAt = config.runStartsAt;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // run_interval_hours - computed: false, optional: true, required: false
  private _runIntervalHours?: number; 
  public get runIntervalHours() {
    return this.getNumberAttribute('run_interval_hours');
  }
  public set runIntervalHours(value: number) {
    this._runIntervalHours = value;
  }
  public resetRunIntervalHours() {
    this._runIntervalHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runIntervalHoursInput() {
    return this._runIntervalHours;
  }

  // run_starts_at - computed: false, optional: true, required: false
  private _runStartsAt?: string; 
  public get runStartsAt() {
    return this.getStringAttribute('run_starts_at');
  }
  public set runStartsAt(value: string) {
    this._runStartsAt = value;
  }
  public resetRunStartsAt() {
    this._runStartsAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runStartsAtInput() {
    return this._runStartsAt;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
      query: cdktf.stringToTerraform(this._query),
      run_interval_hours: cdktf.numberToTerraform(this._runIntervalHours),
      run_starts_at: cdktf.stringToTerraform(this._runStartsAt),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query: {
        value: cdktf.stringToHclTerraform(this._query),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      run_interval_hours: {
        value: cdktf.numberToHclTerraform(this._runIntervalHours),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      run_starts_at: {
        value: cdktf.stringToHclTerraform(this._runStartsAt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
