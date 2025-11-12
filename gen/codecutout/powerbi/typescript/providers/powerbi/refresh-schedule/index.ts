// https://registry.terraform.io/providers/codecutout/powerbi/1.4.1/docs/resources/refresh_schedule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RefreshScheduleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID for the dataset that was deployed as part of the PBIX.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codecutout/powerbi/1.4.1/docs/resources/refresh_schedule#dataset_id RefreshSchedule#dataset_id}
  */
  readonly datasetId: string;
  /**
  * The list of days of the week when the schedule should refresh.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codecutout/powerbi/1.4.1/docs/resources/refresh_schedule#days RefreshSchedule#days}
  */
  readonly days: string[];
  /**
  * Determines if the scheduled refresh is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codecutout/powerbi/1.4.1/docs/resources/refresh_schedule#enabled RefreshSchedule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codecutout/powerbi/1.4.1/docs/resources/refresh_schedule#id RefreshSchedule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the timezone to use. See Name of Time Zone column in [Microsoft Time Zone Index Values](https://support.microsoft.com/en-gb/help/973627/microsoft-time-zone-index-values).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codecutout/powerbi/1.4.1/docs/resources/refresh_schedule#local_time_zone_id RefreshSchedule#local_time_zone_id}
  */
  readonly localTimeZoneId?: string;
  /**
  * The notification option when a scheduled refresh fails. Should be either `MailOnFailure` or `NoNotification`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codecutout/powerbi/1.4.1/docs/resources/refresh_schedule#notify_option RefreshSchedule#notify_option}
  */
  readonly notifyOption?: string;
  /**
  * The list of times on the day the schedule should refresh. Times should be in the format HH:00 or HH:30 i.e. Hour should be two digits and minutes must either be on the full or half hour.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codecutout/powerbi/1.4.1/docs/resources/refresh_schedule#times RefreshSchedule#times}
  */
  readonly times: string[];
  /**
  * Workspace ID in which the dataset was deployed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codecutout/powerbi/1.4.1/docs/resources/refresh_schedule#workspace_id RefreshSchedule#workspace_id}
  */
  readonly workspaceId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/codecutout/powerbi/1.4.1/docs/resources/refresh_schedule powerbi_refresh_schedule}
*/
export class RefreshSchedule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerbi_refresh_schedule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RefreshSchedule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RefreshSchedule to import
  * @param importFromId The id of the existing RefreshSchedule that should be imported. Refer to the {@link https://registry.terraform.io/providers/codecutout/powerbi/1.4.1/docs/resources/refresh_schedule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RefreshSchedule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerbi_refresh_schedule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/codecutout/powerbi/1.4.1/docs/resources/refresh_schedule powerbi_refresh_schedule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RefreshScheduleConfig
  */
  public constructor(scope: Construct, id: string, config: RefreshScheduleConfig) {
    super(scope, id, {
      terraformResourceType: 'powerbi_refresh_schedule',
      terraformGeneratorMetadata: {
        providerName: 'powerbi',
        providerVersion: '1.4.1',
        providerVersionConstraint: '1.4.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._datasetId = config.datasetId;
    this._days = config.days;
    this._enabled = config.enabled;
    this._id = config.id;
    this._localTimeZoneId = config.localTimeZoneId;
    this._notifyOption = config.notifyOption;
    this._times = config.times;
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dataset_id - computed: false, optional: false, required: true
  private _datasetId?: string; 
  public get datasetId() {
    return this.getStringAttribute('dataset_id');
  }
  public set datasetId(value: string) {
    this._datasetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetIdInput() {
    return this._datasetId;
  }

  // days - computed: false, optional: false, required: true
  private _days?: string[]; 
  public get days() {
    return this.getListAttribute('days');
  }
  public set days(value: string[]) {
    this._days = value;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }

  // enabled - computed: false, optional: true, required: false
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

  // local_time_zone_id - computed: false, optional: true, required: false
  private _localTimeZoneId?: string; 
  public get localTimeZoneId() {
    return this.getStringAttribute('local_time_zone_id');
  }
  public set localTimeZoneId(value: string) {
    this._localTimeZoneId = value;
  }
  public resetLocalTimeZoneId() {
    this._localTimeZoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localTimeZoneIdInput() {
    return this._localTimeZoneId;
  }

  // notify_option - computed: false, optional: true, required: false
  private _notifyOption?: string; 
  public get notifyOption() {
    return this.getStringAttribute('notify_option');
  }
  public set notifyOption(value: string) {
    this._notifyOption = value;
  }
  public resetNotifyOption() {
    this._notifyOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyOptionInput() {
    return this._notifyOption;
  }

  // times - computed: false, optional: false, required: true
  private _times?: string[]; 
  public get times() {
    return this.getListAttribute('times');
  }
  public set times(value: string[]) {
    this._times = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timesInput() {
    return this._times;
  }

  // workspace_id - computed: false, optional: false, required: true
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
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
      dataset_id: cdktf.stringToTerraform(this._datasetId),
      days: cdktf.listMapper(cdktf.stringToTerraform, false)(this._days),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      local_time_zone_id: cdktf.stringToTerraform(this._localTimeZoneId),
      notify_option: cdktf.stringToTerraform(this._notifyOption),
      times: cdktf.listMapper(cdktf.stringToTerraform, false)(this._times),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dataset_id: {
        value: cdktf.stringToHclTerraform(this._datasetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      days: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._days),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_time_zone_id: {
        value: cdktf.stringToHclTerraform(this._localTimeZoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notify_option: {
        value: cdktf.stringToHclTerraform(this._notifyOption),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      times: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._times),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
