// https://registry.terraform.io/providers/buildkite/buildkite/1.27.1/docs/resources/pipeline_schedule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PipelineScheduleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The branch that the schedule should run on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.27.1/docs/resources/pipeline_schedule#branch PipelineSchedule#branch}
  */
  readonly branch: string;
  /**
  * The commit that the schedule should run on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.27.1/docs/resources/pipeline_schedule#commit PipelineSchedule#commit}
  */
  readonly commit?: string;
  /**
  * The cronline that describes when the schedule should run. See[here](https://buildkite.com/docs/pipelines/scheduled-builds#schedule-intervals) for supported syntax.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.27.1/docs/resources/pipeline_schedule#cronline PipelineSchedule#cronline}
  */
  readonly cronline: string;
  /**
  * Whether the schedule is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.27.1/docs/resources/pipeline_schedule#enabled PipelineSchedule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The environment variables that scheduled builds should use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.27.1/docs/resources/pipeline_schedule#env PipelineSchedule#env}
  */
  readonly env?: { [key: string]: string };
  /**
  * A label to describe the schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.27.1/docs/resources/pipeline_schedule#label PipelineSchedule#label}
  */
  readonly label: string;
  /**
  * The message the builds show for builds created by this schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.27.1/docs/resources/pipeline_schedule#message PipelineSchedule#message}
  */
  readonly message?: string;
  /**
  * The GraphQL ID of the pipeline that this schedule belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.27.1/docs/resources/pipeline_schedule#pipeline_id PipelineSchedule#pipeline_id}
  */
  readonly pipelineId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/buildkite/buildkite/1.27.1/docs/resources/pipeline_schedule buildkite_pipeline_schedule}
*/
export class PipelineSchedule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "buildkite_pipeline_schedule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PipelineSchedule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PipelineSchedule to import
  * @param importFromId The id of the existing PipelineSchedule that should be imported. Refer to the {@link https://registry.terraform.io/providers/buildkite/buildkite/1.27.1/docs/resources/pipeline_schedule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PipelineSchedule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "buildkite_pipeline_schedule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/buildkite/buildkite/1.27.1/docs/resources/pipeline_schedule buildkite_pipeline_schedule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PipelineScheduleConfig
  */
  public constructor(scope: Construct, id: string, config: PipelineScheduleConfig) {
    super(scope, id, {
      terraformResourceType: 'buildkite_pipeline_schedule',
      terraformGeneratorMetadata: {
        providerName: 'buildkite',
        providerVersion: '1.27.1',
        providerVersionConstraint: '1.27.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._branch = config.branch;
    this._commit = config.commit;
    this._cronline = config.cronline;
    this._enabled = config.enabled;
    this._env = config.env;
    this._label = config.label;
    this._message = config.message;
    this._pipelineId = config.pipelineId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // branch - computed: false, optional: false, required: true
  private _branch?: string; 
  public get branch() {
    return this.getStringAttribute('branch');
  }
  public set branch(value: string) {
    this._branch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get branchInput() {
    return this._branch;
  }

  // commit - computed: true, optional: true, required: false
  private _commit?: string; 
  public get commit() {
    return this.getStringAttribute('commit');
  }
  public set commit(value: string) {
    this._commit = value;
  }
  public resetCommit() {
    this._commit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commitInput() {
    return this._commit;
  }

  // cronline - computed: false, optional: false, required: true
  private _cronline?: string; 
  public get cronline() {
    return this.getStringAttribute('cronline');
  }
  public set cronline(value: string) {
    this._cronline = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cronlineInput() {
    return this._cronline;
  }

  // enabled - computed: true, optional: true, required: false
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

  // env - computed: false, optional: true, required: false
  private _env?: { [key: string]: string }; 
  public get env() {
    return this.getStringMapAttribute('env');
  }
  public set env(value: { [key: string]: string }) {
    this._env = value;
  }
  public resetEnv() {
    this._env = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // pipeline_id - computed: false, optional: false, required: true
  private _pipelineId?: string; 
  public get pipelineId() {
    return this.getStringAttribute('pipeline_id');
  }
  public set pipelineId(value: string) {
    this._pipelineId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineIdInput() {
    return this._pipelineId;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      branch: cdktf.stringToTerraform(this._branch),
      commit: cdktf.stringToTerraform(this._commit),
      cronline: cdktf.stringToTerraform(this._cronline),
      enabled: cdktf.booleanToTerraform(this._enabled),
      env: cdktf.hashMapper(cdktf.stringToTerraform)(this._env),
      label: cdktf.stringToTerraform(this._label),
      message: cdktf.stringToTerraform(this._message),
      pipeline_id: cdktf.stringToTerraform(this._pipelineId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      branch: {
        value: cdktf.stringToHclTerraform(this._branch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      commit: {
        value: cdktf.stringToHclTerraform(this._commit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cronline: {
        value: cdktf.stringToHclTerraform(this._cronline),
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
      env: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._env),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      label: {
        value: cdktf.stringToHclTerraform(this._label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      message: {
        value: cdktf.stringToHclTerraform(this._message),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pipeline_id: {
        value: cdktf.stringToHclTerraform(this._pipelineId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
