// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/dbbrain_security_audit_log_export_task
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DbbrainSecurityAuditLogExportTaskConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of log risk levels, supported values include: 0 no risk; 1 low risk; 2 medium risk; 3 high risk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/dbbrain_security_audit_log_export_task#danger_levels DbbrainSecurityAuditLogExportTask#danger_levels}
  */
  readonly dangerLevels?: number[];
  /**
  * end time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/dbbrain_security_audit_log_export_task#end_time DbbrainSecurityAuditLogExportTask#end_time}
  */
  readonly endTime: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/dbbrain_security_audit_log_export_task#id DbbrainSecurityAuditLogExportTask#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * product, optional value is mysql.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/dbbrain_security_audit_log_export_task#product DbbrainSecurityAuditLogExportTask#product}
  */
  readonly product: string;
  /**
  * security audit group id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/dbbrain_security_audit_log_export_task#sec_audit_group_id DbbrainSecurityAuditLogExportTask#sec_audit_group_id}
  */
  readonly secAuditGroupId: string;
  /**
  * start time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/dbbrain_security_audit_log_export_task#start_time DbbrainSecurityAuditLogExportTask#start_time}
  */
  readonly startTime: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/dbbrain_security_audit_log_export_task tencentcloud_dbbrain_security_audit_log_export_task}
*/
export class DbbrainSecurityAuditLogExportTask extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_dbbrain_security_audit_log_export_task";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DbbrainSecurityAuditLogExportTask resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DbbrainSecurityAuditLogExportTask to import
  * @param importFromId The id of the existing DbbrainSecurityAuditLogExportTask that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/dbbrain_security_audit_log_export_task#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DbbrainSecurityAuditLogExportTask to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_dbbrain_security_audit_log_export_task", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/dbbrain_security_audit_log_export_task tencentcloud_dbbrain_security_audit_log_export_task} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DbbrainSecurityAuditLogExportTaskConfig
  */
  public constructor(scope: Construct, id: string, config: DbbrainSecurityAuditLogExportTaskConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_dbbrain_security_audit_log_export_task',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.37',
        providerVersionConstraint: '1.82.37'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dangerLevels = config.dangerLevels;
    this._endTime = config.endTime;
    this._id = config.id;
    this._product = config.product;
    this._secAuditGroupId = config.secAuditGroupId;
    this._startTime = config.startTime;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // async_request_id - computed: true, optional: false, required: false
  public get asyncRequestId() {
    return this.getNumberAttribute('async_request_id');
  }

  // danger_levels - computed: false, optional: true, required: false
  private _dangerLevels?: number[]; 
  public get dangerLevels() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('danger_levels')));
  }
  public set dangerLevels(value: number[]) {
    this._dangerLevels = value;
  }
  public resetDangerLevels() {
    this._dangerLevels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dangerLevelsInput() {
    return this._dangerLevels;
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

  // sec_audit_group_id - computed: false, optional: false, required: true
  private _secAuditGroupId?: string; 
  public get secAuditGroupId() {
    return this.getStringAttribute('sec_audit_group_id');
  }
  public set secAuditGroupId(value: string) {
    this._secAuditGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secAuditGroupIdInput() {
    return this._secAuditGroupId;
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
      danger_levels: cdktf.listMapper(cdktf.numberToTerraform, false)(this._dangerLevels),
      end_time: cdktf.stringToTerraform(this._endTime),
      id: cdktf.stringToTerraform(this._id),
      product: cdktf.stringToTerraform(this._product),
      sec_audit_group_id: cdktf.stringToTerraform(this._secAuditGroupId),
      start_time: cdktf.stringToTerraform(this._startTime),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      danger_levels: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._dangerLevels),
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
      product: {
        value: cdktf.stringToHclTerraform(this._product),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sec_audit_group_id: {
        value: cdktf.stringToHclTerraform(this._secAuditGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
