// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/mysql_audit_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MysqlAuditServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Audit type. Valid values: true: Record all; false: Record by rules (default value).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/mysql_audit_service#audit_all MysqlAuditService#audit_all}
  */
  readonly auditAll?: boolean | cdktf.IResolvable;
  /**
  * Retention period of high-frequency audit logs. Valid values:  `7` (one week), `30` (one month).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/mysql_audit_service#high_log_expire_day MysqlAuditService#high_log_expire_day}
  */
  readonly highLogExpireDay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/mysql_audit_service#id MysqlAuditService#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * TencentDB for MySQL instance ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/mysql_audit_service#instance_id MysqlAuditService#instance_id}
  */
  readonly instanceId: string;
  /**
  * Retention period of the audit log. Valid values:  `7` (one week), `30` (one month), `90` (three months), `180` (six months), `365` (one year), `1095` (three years), `1825` (five years).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/mysql_audit_service#log_expire_day MysqlAuditService#log_expire_day}
  */
  readonly logExpireDay: number;
  /**
  * Rule template ID. If both this parameter and AuditRuleFilters are not specified, all SQL statements will be recorded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/mysql_audit_service#rule_template_ids MysqlAuditService#rule_template_ids}
  */
  readonly ruleTemplateIds?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/mysql_audit_service tencentcloud_mysql_audit_service}
*/
export class MysqlAuditService extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_mysql_audit_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MysqlAuditService resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MysqlAuditService to import
  * @param importFromId The id of the existing MysqlAuditService that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/mysql_audit_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MysqlAuditService to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_mysql_audit_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/mysql_audit_service tencentcloud_mysql_audit_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MysqlAuditServiceConfig
  */
  public constructor(scope: Construct, id: string, config: MysqlAuditServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_mysql_audit_service',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.47',
        providerVersionConstraint: '1.82.47'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._auditAll = config.auditAll;
    this._highLogExpireDay = config.highLogExpireDay;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._logExpireDay = config.logExpireDay;
    this._ruleTemplateIds = config.ruleTemplateIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // audit_all - computed: true, optional: true, required: false
  private _auditAll?: boolean | cdktf.IResolvable; 
  public get auditAll() {
    return this.getBooleanAttribute('audit_all');
  }
  public set auditAll(value: boolean | cdktf.IResolvable) {
    this._auditAll = value;
  }
  public resetAuditAll() {
    this._auditAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditAllInput() {
    return this._auditAll;
  }

  // high_log_expire_day - computed: true, optional: true, required: false
  private _highLogExpireDay?: number; 
  public get highLogExpireDay() {
    return this.getNumberAttribute('high_log_expire_day');
  }
  public set highLogExpireDay(value: number) {
    this._highLogExpireDay = value;
  }
  public resetHighLogExpireDay() {
    this._highLogExpireDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highLogExpireDayInput() {
    return this._highLogExpireDay;
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

  // log_expire_day - computed: false, optional: false, required: true
  private _logExpireDay?: number; 
  public get logExpireDay() {
    return this.getNumberAttribute('log_expire_day');
  }
  public set logExpireDay(value: number) {
    this._logExpireDay = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logExpireDayInput() {
    return this._logExpireDay;
  }

  // rule_template_ids - computed: false, optional: true, required: false
  private _ruleTemplateIds?: string[]; 
  public get ruleTemplateIds() {
    return cdktf.Fn.tolist(this.getListAttribute('rule_template_ids'));
  }
  public set ruleTemplateIds(value: string[]) {
    this._ruleTemplateIds = value;
  }
  public resetRuleTemplateIds() {
    this._ruleTemplateIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleTemplateIdsInput() {
    return this._ruleTemplateIds;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      audit_all: cdktf.booleanToTerraform(this._auditAll),
      high_log_expire_day: cdktf.numberToTerraform(this._highLogExpireDay),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      log_expire_day: cdktf.numberToTerraform(this._logExpireDay),
      rule_template_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ruleTemplateIds),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      audit_all: {
        value: cdktf.booleanToHclTerraform(this._auditAll),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      high_log_expire_day: {
        value: cdktf.numberToHclTerraform(this._highLogExpireDay),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_expire_day: {
        value: cdktf.numberToHclTerraform(this._logExpireDay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rule_template_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ruleTemplateIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
