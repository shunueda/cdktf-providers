// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/pts_cron_job
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PtsCronJobConfig extends cdktf.TerraformMetaArguments {
  /**
  * Cron expression, When setting cron_expression at that time, frequency_type must be greater than 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/pts_cron_job#cron_expression PtsCronJob#cron_expression}
  */
  readonly cronExpression: string;
  /**
  * End Time; type: Timestamp ISO8601.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/pts_cron_job#end_time PtsCronJob#end_time}
  */
  readonly endTime?: string;
  /**
  * Execution frequency type, `1`: execute only once; `2`: daily granularity; `3`: weekly granularity; `4`: advanced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/pts_cron_job#frequency_type PtsCronJob#frequency_type}
  */
  readonly frequencyType: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/pts_cron_job#id PtsCronJob#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Job Owner.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/pts_cron_job#job_owner PtsCronJob#job_owner}
  */
  readonly jobOwner: string;
  /**
  * Cron Job Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/pts_cron_job#name PtsCronJob#name}
  */
  readonly name: string;
  /**
  * Note.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/pts_cron_job#note PtsCronJob#note}
  */
  readonly note?: string;
  /**
  * Notice ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/pts_cron_job#notice_id PtsCronJob#notice_id}
  */
  readonly noticeId?: string;
  /**
  * Project Id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/pts_cron_job#project_id PtsCronJob#project_id}
  */
  readonly projectId: string;
  /**
  * Scenario Id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/pts_cron_job#scenario_id PtsCronJob#scenario_id}
  */
  readonly scenarioId: string;
  /**
  * Scenario Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/pts_cron_job#scenario_name PtsCronJob#scenario_name}
  */
  readonly scenarioName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/pts_cron_job tencentcloud_pts_cron_job}
*/
export class PtsCronJob extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_pts_cron_job";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PtsCronJob resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PtsCronJob to import
  * @param importFromId The id of the existing PtsCronJob that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/pts_cron_job#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PtsCronJob to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_pts_cron_job", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/pts_cron_job tencentcloud_pts_cron_job} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PtsCronJobConfig
  */
  public constructor(scope: Construct, id: string, config: PtsCronJobConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_pts_cron_job',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.41',
        providerVersionConstraint: '1.82.41'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cronExpression = config.cronExpression;
    this._endTime = config.endTime;
    this._frequencyType = config.frequencyType;
    this._id = config.id;
    this._jobOwner = config.jobOwner;
    this._name = config.name;
    this._note = config.note;
    this._noticeId = config.noticeId;
    this._projectId = config.projectId;
    this._scenarioId = config.scenarioId;
    this._scenarioName = config.scenarioName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // abort_reason - computed: true, optional: false, required: false
  public get abortReason() {
    return this.getNumberAttribute('abort_reason');
  }

  // app_id - computed: true, optional: false, required: false
  public get appId() {
    return this.getNumberAttribute('app_id');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // cron_expression - computed: false, optional: false, required: true
  private _cronExpression?: string; 
  public get cronExpression() {
    return this.getStringAttribute('cron_expression');
  }
  public set cronExpression(value: string) {
    this._cronExpression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cronExpressionInput() {
    return this._cronExpression;
  }

  // cron_job_id - computed: true, optional: false, required: false
  public get cronJobId() {
    return this.getStringAttribute('cron_job_id');
  }

  // end_time - computed: false, optional: true, required: false
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // frequency_type - computed: false, optional: false, required: true
  private _frequencyType?: number; 
  public get frequencyType() {
    return this.getNumberAttribute('frequency_type');
  }
  public set frequencyType(value: number) {
    this._frequencyType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyTypeInput() {
    return this._frequencyType;
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

  // job_owner - computed: false, optional: false, required: true
  private _jobOwner?: string; 
  public get jobOwner() {
    return this.getStringAttribute('job_owner');
  }
  public set jobOwner(value: string) {
    this._jobOwner = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobOwnerInput() {
    return this._jobOwner;
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

  // note - computed: false, optional: true, required: false
  private _note?: string; 
  public get note() {
    return this.getStringAttribute('note');
  }
  public set note(value: string) {
    this._note = value;
  }
  public resetNote() {
    this._note = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noteInput() {
    return this._note;
  }

  // notice_id - computed: false, optional: true, required: false
  private _noticeId?: string; 
  public get noticeId() {
    return this.getStringAttribute('notice_id');
  }
  public set noticeId(value: string) {
    this._noticeId = value;
  }
  public resetNoticeId() {
    this._noticeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noticeIdInput() {
    return this._noticeId;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // scenario_id - computed: false, optional: false, required: true
  private _scenarioId?: string; 
  public get scenarioId() {
    return this.getStringAttribute('scenario_id');
  }
  public set scenarioId(value: string) {
    this._scenarioId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scenarioIdInput() {
    return this._scenarioId;
  }

  // scenario_name - computed: false, optional: false, required: true
  private _scenarioName?: string; 
  public get scenarioName() {
    return this.getStringAttribute('scenario_name');
  }
  public set scenarioName(value: string) {
    this._scenarioName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scenarioNameInput() {
    return this._scenarioName;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // sub_account_uin - computed: true, optional: false, required: false
  public get subAccountUin() {
    return this.getStringAttribute('sub_account_uin');
  }

  // uin - computed: true, optional: false, required: false
  public get uin() {
    return this.getStringAttribute('uin');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cron_expression: cdktf.stringToTerraform(this._cronExpression),
      end_time: cdktf.stringToTerraform(this._endTime),
      frequency_type: cdktf.numberToTerraform(this._frequencyType),
      id: cdktf.stringToTerraform(this._id),
      job_owner: cdktf.stringToTerraform(this._jobOwner),
      name: cdktf.stringToTerraform(this._name),
      note: cdktf.stringToTerraform(this._note),
      notice_id: cdktf.stringToTerraform(this._noticeId),
      project_id: cdktf.stringToTerraform(this._projectId),
      scenario_id: cdktf.stringToTerraform(this._scenarioId),
      scenario_name: cdktf.stringToTerraform(this._scenarioName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cron_expression: {
        value: cdktf.stringToHclTerraform(this._cronExpression),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      end_time: {
        value: cdktf.stringToHclTerraform(this._endTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      frequency_type: {
        value: cdktf.numberToHclTerraform(this._frequencyType),
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
      job_owner: {
        value: cdktf.stringToHclTerraform(this._jobOwner),
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
      note: {
        value: cdktf.stringToHclTerraform(this._note),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notice_id: {
        value: cdktf.stringToHclTerraform(this._noticeId),
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
      scenario_id: {
        value: cdktf.stringToHclTerraform(this._scenarioId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scenario_name: {
        value: cdktf.stringToHclTerraform(this._scenarioName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
