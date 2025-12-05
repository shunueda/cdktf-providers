// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/dbbrain_db_diag_report_task
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DbbrainDbDiagReportTaskConfig extends cdktf.TerraformMetaArguments {
  /**
  * An array of contact group IDs to receive mail from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/dbbrain_db_diag_report_task#contact_group DbbrainDbDiagReportTask#contact_group}
  */
  readonly contactGroup?: number[];
  /**
  * An array of contact IDs to receive emails from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/dbbrain_db_diag_report_task#contact_person DbbrainDbDiagReportTask#contact_person}
  */
  readonly contactPerson?: number[];
  /**
  * End time, such as 2020-11-09T14:00:00+08:00.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/dbbrain_db_diag_report_task#end_time DbbrainDbDiagReportTask#end_time}
  */
  readonly endTime: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/dbbrain_db_diag_report_task#id DbbrainDbDiagReportTask#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * instance id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/dbbrain_db_diag_report_task#instance_id DbbrainDbDiagReportTask#instance_id}
  */
  readonly instanceId: string;
  /**
  * Service product type, supported values include: mysql - cloud database MySQL, cynosdb - cloud database CynosDB for MySQL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/dbbrain_db_diag_report_task#product DbbrainDbDiagReportTask#product}
  */
  readonly product: string;
  /**
  * Whether to send mail: 0 - no, 1 - yes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/dbbrain_db_diag_report_task#send_mail_flag DbbrainDbDiagReportTask#send_mail_flag}
  */
  readonly sendMailFlag: number;
  /**
  * Start time, such as 2020-11-08T14:00:00+08:00.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/dbbrain_db_diag_report_task#start_time DbbrainDbDiagReportTask#start_time}
  */
  readonly startTime: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/dbbrain_db_diag_report_task tencentcloud_dbbrain_db_diag_report_task}
*/
export class DbbrainDbDiagReportTask extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_dbbrain_db_diag_report_task";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DbbrainDbDiagReportTask resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DbbrainDbDiagReportTask to import
  * @param importFromId The id of the existing DbbrainDbDiagReportTask that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/dbbrain_db_diag_report_task#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DbbrainDbDiagReportTask to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_dbbrain_db_diag_report_task", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/dbbrain_db_diag_report_task tencentcloud_dbbrain_db_diag_report_task} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DbbrainDbDiagReportTaskConfig
  */
  public constructor(scope: Construct, id: string, config: DbbrainDbDiagReportTaskConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_dbbrain_db_diag_report_task',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.42',
        providerVersionConstraint: '1.82.42'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._contactGroup = config.contactGroup;
    this._contactPerson = config.contactPerson;
    this._endTime = config.endTime;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._product = config.product;
    this._sendMailFlag = config.sendMailFlag;
    this._startTime = config.startTime;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // contact_group - computed: false, optional: true, required: false
  private _contactGroup?: number[]; 
  public get contactGroup() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('contact_group')));
  }
  public set contactGroup(value: number[]) {
    this._contactGroup = value;
  }
  public resetContactGroup() {
    this._contactGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactGroupInput() {
    return this._contactGroup;
  }

  // contact_person - computed: false, optional: true, required: false
  private _contactPerson?: number[]; 
  public get contactPerson() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('contact_person')));
  }
  public set contactPerson(value: number[]) {
    this._contactPerson = value;
  }
  public resetContactPerson() {
    this._contactPerson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactPersonInput() {
    return this._contactPerson;
  }

  // end_time - computed: false, optional: false, required: true
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // product - computed: false, optional: false, required: true
  private _product?: string; 
  public get product() {
    return this.getStringAttribute('product');
  }
  public set product(value: string) {
    this._product = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productInput() {
    return this._product;
  }

  // send_mail_flag - computed: false, optional: false, required: true
  private _sendMailFlag?: number; 
  public get sendMailFlag() {
    return this.getNumberAttribute('send_mail_flag');
  }
  public set sendMailFlag(value: number) {
    this._sendMailFlag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sendMailFlagInput() {
    return this._sendMailFlag;
  }

  // start_time - computed: false, optional: false, required: true
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      contact_group: cdktf.listMapper(cdktf.numberToTerraform, false)(this._contactGroup),
      contact_person: cdktf.listMapper(cdktf.numberToTerraform, false)(this._contactPerson),
      end_time: cdktf.stringToTerraform(this._endTime),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      product: cdktf.stringToTerraform(this._product),
      send_mail_flag: cdktf.numberToTerraform(this._sendMailFlag),
      start_time: cdktf.stringToTerraform(this._startTime),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      contact_group: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._contactGroup),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      contact_person: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._contactPerson),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      end_time: {
        value: cdktf.stringToHclTerraform(this._endTime),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      product: {
        value: cdktf.stringToHclTerraform(this._product),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      send_mail_flag: {
        value: cdktf.numberToHclTerraform(this._sendMailFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      start_time: {
        value: cdktf.stringToHclTerraform(this._startTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
