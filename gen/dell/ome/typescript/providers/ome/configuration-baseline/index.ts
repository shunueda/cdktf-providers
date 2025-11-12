// https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/configuration_baseline
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConfigurationBaselineConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the Baseline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/configuration_baseline#baseline_name ConfigurationBaseline#baseline_name}
  */
  readonly baselineName: string;
  /**
  * Cron expression for notification schedule. Can be set only when both `schedule` and `notify_on_schedule` are set to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/configuration_baseline#cron ConfigurationBaseline#cron}
  */
  readonly cron?: string;
  /**
  * Description of the baseline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/configuration_baseline#description ConfigurationBaseline#description}
  */
  readonly description?: string;
  /**
  * List of the device id on which the baseline compliance needs to be run. Conflicts with `device_servicetags`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/configuration_baseline#device_ids ConfigurationBaseline#device_ids}
  */
  readonly deviceIds?: number[];
  /**
  * List of the device servicetag on which the baseline compliance needs to be run. Conflicts with `device_ids`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/configuration_baseline#device_servicetags ConfigurationBaseline#device_servicetags}
  */
  readonly deviceServicetags?: string[];
  /**
  * Email addresses for notification. Can be set only when `schedule` is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/configuration_baseline#email_addresses ConfigurationBaseline#email_addresses}
  */
  readonly emailAddresses?: string[];
  /**
  * Number of times the job has to be polled to get the final status of the resource. Default value is `30`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/configuration_baseline#job_retry_count ConfigurationBaseline#job_retry_count}
  */
  readonly jobRetryCount?: number;
  /**
  * Schedule notification via cron or any time the baseline becomes non-compliant. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/configuration_baseline#notify_on_schedule ConfigurationBaseline#notify_on_schedule}
  */
  readonly notifyOnSchedule?: boolean | cdktf.IResolvable;
  /**
  * Output format type, the input is case senitive. Valid values are `html`, `csv`, `pdf`and `xls`. Default value is `html`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/configuration_baseline#output_format ConfigurationBaseline#output_format}
  */
  readonly outputFormat?: string;
  /**
  * Reference template ID. Conflicts with `ref_template_name`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/configuration_baseline#ref_template_id ConfigurationBaseline#ref_template_id}
  */
  readonly refTemplateId?: number;
  /**
  * Reference template name. Conflicts with `ref_template_id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/configuration_baseline#ref_template_name ConfigurationBaseline#ref_template_name}
  */
  readonly refTemplateName?: string;
  /**
  * Schedule notification via email. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/configuration_baseline#schedule ConfigurationBaseline#schedule}
  */
  readonly schedule?: boolean | cdktf.IResolvable;
  /**
  * Sleep time interval for job polling in seconds. Default value is `20`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/configuration_baseline#sleep_interval ConfigurationBaseline#sleep_interval}
  */
  readonly sleepInterval?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/configuration_baseline ome_configuration_baseline}
*/
export class ConfigurationBaseline extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ome_configuration_baseline";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConfigurationBaseline resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConfigurationBaseline to import
  * @param importFromId The id of the existing ConfigurationBaseline that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/configuration_baseline#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConfigurationBaseline to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ome_configuration_baseline", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/configuration_baseline ome_configuration_baseline} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConfigurationBaselineConfig
  */
  public constructor(scope: Construct, id: string, config: ConfigurationBaselineConfig) {
    super(scope, id, {
      terraformResourceType: 'ome_configuration_baseline',
      terraformGeneratorMetadata: {
        providerName: 'ome',
        providerVersion: '1.2.3',
        providerVersionConstraint: '1.2.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._baselineName = config.baselineName;
    this._cron = config.cron;
    this._description = config.description;
    this._deviceIds = config.deviceIds;
    this._deviceServicetags = config.deviceServicetags;
    this._emailAddresses = config.emailAddresses;
    this._jobRetryCount = config.jobRetryCount;
    this._notifyOnSchedule = config.notifyOnSchedule;
    this._outputFormat = config.outputFormat;
    this._refTemplateId = config.refTemplateId;
    this._refTemplateName = config.refTemplateName;
    this._schedule = config.schedule;
    this._sleepInterval = config.sleepInterval;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // baseline_name - computed: false, optional: false, required: true
  private _baselineName?: string; 
  public get baselineName() {
    return this.getStringAttribute('baseline_name');
  }
  public set baselineName(value: string) {
    this._baselineName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baselineNameInput() {
    return this._baselineName;
  }

  // cron - computed: false, optional: true, required: false
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

  // device_ids - computed: false, optional: true, required: false
  private _deviceIds?: number[]; 
  public get deviceIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('device_ids')));
  }
  public set deviceIds(value: number[]) {
    this._deviceIds = value;
  }
  public resetDeviceIds() {
    this._deviceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdsInput() {
    return this._deviceIds;
  }

  // device_servicetags - computed: false, optional: true, required: false
  private _deviceServicetags?: string[]; 
  public get deviceServicetags() {
    return cdktf.Fn.tolist(this.getListAttribute('device_servicetags'));
  }
  public set deviceServicetags(value: string[]) {
    this._deviceServicetags = value;
  }
  public resetDeviceServicetags() {
    this._deviceServicetags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceServicetagsInput() {
    return this._deviceServicetags;
  }

  // email_addresses - computed: false, optional: true, required: false
  private _emailAddresses?: string[]; 
  public get emailAddresses() {
    return cdktf.Fn.tolist(this.getListAttribute('email_addresses'));
  }
  public set emailAddresses(value: string[]) {
    this._emailAddresses = value;
  }
  public resetEmailAddresses() {
    this._emailAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAddressesInput() {
    return this._emailAddresses;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // job_retry_count - computed: true, optional: true, required: false
  private _jobRetryCount?: number; 
  public get jobRetryCount() {
    return this.getNumberAttribute('job_retry_count');
  }
  public set jobRetryCount(value: number) {
    this._jobRetryCount = value;
  }
  public resetJobRetryCount() {
    this._jobRetryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobRetryCountInput() {
    return this._jobRetryCount;
  }

  // notify_on_schedule - computed: true, optional: true, required: false
  private _notifyOnSchedule?: boolean | cdktf.IResolvable; 
  public get notifyOnSchedule() {
    return this.getBooleanAttribute('notify_on_schedule');
  }
  public set notifyOnSchedule(value: boolean | cdktf.IResolvable) {
    this._notifyOnSchedule = value;
  }
  public resetNotifyOnSchedule() {
    this._notifyOnSchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyOnScheduleInput() {
    return this._notifyOnSchedule;
  }

  // output_format - computed: true, optional: true, required: false
  private _outputFormat?: string; 
  public get outputFormat() {
    return this.getStringAttribute('output_format');
  }
  public set outputFormat(value: string) {
    this._outputFormat = value;
  }
  public resetOutputFormat() {
    this._outputFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFormatInput() {
    return this._outputFormat;
  }

  // ref_template_id - computed: true, optional: true, required: false
  private _refTemplateId?: number; 
  public get refTemplateId() {
    return this.getNumberAttribute('ref_template_id');
  }
  public set refTemplateId(value: number) {
    this._refTemplateId = value;
  }
  public resetRefTemplateId() {
    this._refTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refTemplateIdInput() {
    return this._refTemplateId;
  }

  // ref_template_name - computed: true, optional: true, required: false
  private _refTemplateName?: string; 
  public get refTemplateName() {
    return this.getStringAttribute('ref_template_name');
  }
  public set refTemplateName(value: string) {
    this._refTemplateName = value;
  }
  public resetRefTemplateName() {
    this._refTemplateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refTemplateNameInput() {
    return this._refTemplateName;
  }

  // schedule - computed: true, optional: true, required: false
  private _schedule?: boolean | cdktf.IResolvable; 
  public get schedule() {
    return this.getBooleanAttribute('schedule');
  }
  public set schedule(value: boolean | cdktf.IResolvable) {
    this._schedule = value;
  }
  public resetSchedule() {
    this._schedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
  }

  // sleep_interval - computed: true, optional: true, required: false
  private _sleepInterval?: number; 
  public get sleepInterval() {
    return this.getNumberAttribute('sleep_interval');
  }
  public set sleepInterval(value: number) {
    this._sleepInterval = value;
  }
  public resetSleepInterval() {
    this._sleepInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sleepIntervalInput() {
    return this._sleepInterval;
  }

  // task_id - computed: true, optional: false, required: false
  public get taskId() {
    return this.getNumberAttribute('task_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      baseline_name: cdktf.stringToTerraform(this._baselineName),
      cron: cdktf.stringToTerraform(this._cron),
      description: cdktf.stringToTerraform(this._description),
      device_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._deviceIds),
      device_servicetags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._deviceServicetags),
      email_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._emailAddresses),
      job_retry_count: cdktf.numberToTerraform(this._jobRetryCount),
      notify_on_schedule: cdktf.booleanToTerraform(this._notifyOnSchedule),
      output_format: cdktf.stringToTerraform(this._outputFormat),
      ref_template_id: cdktf.numberToTerraform(this._refTemplateId),
      ref_template_name: cdktf.stringToTerraform(this._refTemplateName),
      schedule: cdktf.booleanToTerraform(this._schedule),
      sleep_interval: cdktf.numberToTerraform(this._sleepInterval),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      baseline_name: {
        value: cdktf.stringToHclTerraform(this._baselineName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cron: {
        value: cdktf.stringToHclTerraform(this._cron),
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
      device_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._deviceIds),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      device_servicetags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._deviceServicetags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      email_addresses: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._emailAddresses),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      job_retry_count: {
        value: cdktf.numberToHclTerraform(this._jobRetryCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      notify_on_schedule: {
        value: cdktf.booleanToHclTerraform(this._notifyOnSchedule),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      output_format: {
        value: cdktf.stringToHclTerraform(this._outputFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ref_template_id: {
        value: cdktf.numberToHclTerraform(this._refTemplateId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ref_template_name: {
        value: cdktf.stringToHclTerraform(this._refTemplateName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule: {
        value: cdktf.booleanToHclTerraform(this._schedule),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sleep_interval: {
        value: cdktf.numberToHclTerraform(this._sleepInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
