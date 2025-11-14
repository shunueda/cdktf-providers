// https://registry.terraform.io/providers/prefecthq/prefect/2.90.1/docs/resources/deployment_schedule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DeploymentScheduleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Account ID (UUID)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.1/docs/resources/deployment_schedule#account_id DeploymentSchedule#account_id}
  */
  readonly accountId?: string;
  /**
  * Whether or not the schedule is active.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.1/docs/resources/deployment_schedule#active DeploymentSchedule#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * The anchor date of the schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.1/docs/resources/deployment_schedule#anchor_date DeploymentSchedule#anchor_date}
  */
  readonly anchorDate?: string;
  /**
  * (Cloud only) Whether or not a worker should catch up on Late runs for the schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.1/docs/resources/deployment_schedule#catchup DeploymentSchedule#catchup}
  */
  readonly catchup?: boolean | cdktf.IResolvable;
  /**
  * The cron expression of the schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.1/docs/resources/deployment_schedule#cron DeploymentSchedule#cron}
  */
  readonly cron?: string;
  /**
  * Control croniter behavior for handling day and day_of_week entries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.1/docs/resources/deployment_schedule#day_or DeploymentSchedule#day_or}
  */
  readonly dayOr?: boolean | cdktf.IResolvable;
  /**
  * Deployment ID (UUID)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.1/docs/resources/deployment_schedule#deployment_id DeploymentSchedule#deployment_id}
  */
  readonly deploymentId: string;
  /**
  * Deployment Schedule ID (UUID)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.1/docs/resources/deployment_schedule#id DeploymentSchedule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The interval of the schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.1/docs/resources/deployment_schedule#interval DeploymentSchedule#interval}
  */
  readonly interval?: number;
  /**
  * (Cloud only) The maximum number of active runs for the schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.1/docs/resources/deployment_schedule#max_active_runs DeploymentSchedule#max_active_runs}
  */
  readonly maxActiveRuns?: number;
  /**
  * The maximum number of scheduled runs for the schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.1/docs/resources/deployment_schedule#max_scheduled_runs DeploymentSchedule#max_scheduled_runs}
  */
  readonly maxScheduledRuns?: number;
  /**
  * Parameters for flow runs scheduled by the deployment schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.1/docs/resources/deployment_schedule#parameters DeploymentSchedule#parameters}
  */
  readonly parameters?: string;
  /**
  * The rrule expression of the schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.1/docs/resources/deployment_schedule#rrule DeploymentSchedule#rrule}
  */
  readonly rrule?: string;
  /**
  * An optional unique identifier for the schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.1/docs/resources/deployment_schedule#slug DeploymentSchedule#slug}
  */
  readonly slug?: string;
  /**
  * The timezone of the schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.1/docs/resources/deployment_schedule#timezone DeploymentSchedule#timezone}
  */
  readonly timezone?: string;
  /**
  * Workspace ID (UUID)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.1/docs/resources/deployment_schedule#workspace_id DeploymentSchedule#workspace_id}
  */
  readonly workspaceId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.1/docs/resources/deployment_schedule prefect_deployment_schedule}
*/
export class DeploymentSchedule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prefect_deployment_schedule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DeploymentSchedule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DeploymentSchedule to import
  * @param importFromId The id of the existing DeploymentSchedule that should be imported. Refer to the {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.1/docs/resources/deployment_schedule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DeploymentSchedule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prefect_deployment_schedule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.1/docs/resources/deployment_schedule prefect_deployment_schedule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DeploymentScheduleConfig
  */
  public constructor(scope: Construct, id: string, config: DeploymentScheduleConfig) {
    super(scope, id, {
      terraformResourceType: 'prefect_deployment_schedule',
      terraformGeneratorMetadata: {
        providerName: 'prefect',
        providerVersion: '2.90.1',
        providerVersionConstraint: '2.90.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._active = config.active;
    this._anchorDate = config.anchorDate;
    this._catchup = config.catchup;
    this._cron = config.cron;
    this._dayOr = config.dayOr;
    this._deploymentId = config.deploymentId;
    this._id = config.id;
    this._interval = config.interval;
    this._maxActiveRuns = config.maxActiveRuns;
    this._maxScheduledRuns = config.maxScheduledRuns;
    this._parameters = config.parameters;
    this._rrule = config.rrule;
    this._slug = config.slug;
    this._timezone = config.timezone;
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // active - computed: true, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // anchor_date - computed: true, optional: true, required: false
  private _anchorDate?: string; 
  public get anchorDate() {
    return this.getStringAttribute('anchor_date');
  }
  public set anchorDate(value: string) {
    this._anchorDate = value;
  }
  public resetAnchorDate() {
    this._anchorDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anchorDateInput() {
    return this._anchorDate;
  }

  // catchup - computed: false, optional: true, required: false
  private _catchup?: boolean | cdktf.IResolvable; 
  public get catchup() {
    return this.getBooleanAttribute('catchup');
  }
  public set catchup(value: boolean | cdktf.IResolvable) {
    this._catchup = value;
  }
  public resetCatchup() {
    this._catchup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catchupInput() {
    return this._catchup;
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // cron - computed: true, optional: true, required: false
  private _cron?: string; 
  public get cron() {
    return this.getStringAttribute('cron');
  }
  public set cron(value: string) {
    this._cron = value;
  }
  public resetCron() {
    this._cron = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cronInput() {
    return this._cron;
  }

  // day_or - computed: true, optional: true, required: false
  private _dayOr?: boolean | cdktf.IResolvable; 
  public get dayOr() {
    return this.getBooleanAttribute('day_or');
  }
  public set dayOr(value: boolean | cdktf.IResolvable) {
    this._dayOr = value;
  }
  public resetDayOr() {
    this._dayOr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOrInput() {
    return this._dayOr;
  }

  // deployment_id - computed: false, optional: false, required: true
  private _deploymentId?: string; 
  public get deploymentId() {
    return this.getStringAttribute('deployment_id');
  }
  public set deploymentId(value: string) {
    this._deploymentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentIdInput() {
    return this._deploymentId;
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

  // interval - computed: true, optional: true, required: false
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

  // max_active_runs - computed: false, optional: true, required: false
  private _maxActiveRuns?: number; 
  public get maxActiveRuns() {
    return this.getNumberAttribute('max_active_runs');
  }
  public set maxActiveRuns(value: number) {
    this._maxActiveRuns = value;
  }
  public resetMaxActiveRuns() {
    this._maxActiveRuns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxActiveRunsInput() {
    return this._maxActiveRuns;
  }

  // max_scheduled_runs - computed: true, optional: true, required: false
  private _maxScheduledRuns?: number; 
  public get maxScheduledRuns() {
    return this.getNumberAttribute('max_scheduled_runs');
  }
  public set maxScheduledRuns(value: number) {
    this._maxScheduledRuns = value;
  }
  public resetMaxScheduledRuns() {
    this._maxScheduledRuns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxScheduledRunsInput() {
    return this._maxScheduledRuns;
  }

  // parameters - computed: true, optional: true, required: false
  private _parameters?: string; 
  public get parameters() {
    return this.getStringAttribute('parameters');
  }
  public set parameters(value: string) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // rrule - computed: true, optional: true, required: false
  private _rrule?: string; 
  public get rrule() {
    return this.getStringAttribute('rrule');
  }
  public set rrule(value: string) {
    this._rrule = value;
  }
  public resetRrule() {
    this._rrule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rruleInput() {
    return this._rrule;
  }

  // slug - computed: true, optional: true, required: false
  private _slug?: string; 
  public get slug() {
    return this.getStringAttribute('slug');
  }
  public set slug(value: string) {
    this._slug = value;
  }
  public resetSlug() {
    this._slug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slugInput() {
    return this._slug;
  }

  // timezone - computed: true, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // updated - computed: true, optional: false, required: false
  public get updated() {
    return this.getStringAttribute('updated');
  }

  // workspace_id - computed: false, optional: true, required: false
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  public resetWorkspaceId() {
    this._workspaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      active: cdktf.booleanToTerraform(this._active),
      anchor_date: cdktf.stringToTerraform(this._anchorDate),
      catchup: cdktf.booleanToTerraform(this._catchup),
      cron: cdktf.stringToTerraform(this._cron),
      day_or: cdktf.booleanToTerraform(this._dayOr),
      deployment_id: cdktf.stringToTerraform(this._deploymentId),
      id: cdktf.stringToTerraform(this._id),
      interval: cdktf.numberToTerraform(this._interval),
      max_active_runs: cdktf.numberToTerraform(this._maxActiveRuns),
      max_scheduled_runs: cdktf.numberToTerraform(this._maxScheduledRuns),
      parameters: cdktf.stringToTerraform(this._parameters),
      rrule: cdktf.stringToTerraform(this._rrule),
      slug: cdktf.stringToTerraform(this._slug),
      timezone: cdktf.stringToTerraform(this._timezone),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      active: {
        value: cdktf.booleanToHclTerraform(this._active),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      anchor_date: {
        value: cdktf.stringToHclTerraform(this._anchorDate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      catchup: {
        value: cdktf.booleanToHclTerraform(this._catchup),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cron: {
        value: cdktf.stringToHclTerraform(this._cron),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      day_or: {
        value: cdktf.booleanToHclTerraform(this._dayOr),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      deployment_id: {
        value: cdktf.stringToHclTerraform(this._deploymentId),
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
      interval: {
        value: cdktf.numberToHclTerraform(this._interval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_active_runs: {
        value: cdktf.numberToHclTerraform(this._maxActiveRuns),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_scheduled_runs: {
        value: cdktf.numberToHclTerraform(this._maxScheduledRuns),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      parameters: {
        value: cdktf.stringToHclTerraform(this._parameters),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rrule: {
        value: cdktf.stringToHclTerraform(this._rrule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slug: {
        value: cdktf.stringToHclTerraform(this._slug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timezone: {
        value: cdktf.stringToHclTerraform(this._timezone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workspace_id: {
        value: cdktf.stringToHclTerraform(this._workspaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
