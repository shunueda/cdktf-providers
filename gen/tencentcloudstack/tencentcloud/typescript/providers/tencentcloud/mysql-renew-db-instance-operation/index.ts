// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mysql_renew_db_instance_operation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MysqlRenewDbInstanceOperationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mysql_renew_db_instance_operation#id MysqlRenewDbInstanceOperation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The instance ID to be renewed, the format is: cdb-c1nl9rpv, which is the same as the instance ID displayed on the cloud database console page, you can use [Query Instance List](https://cloud.tencent.com/document/api/236/ 15872).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mysql_renew_db_instance_operation#instance_id MysqlRenewDbInstanceOperation#instance_id}
  */
  readonly instanceId: string;
  /**
  * If you need to renew the Pay-As-You-Go instance to a Subscription instance, the value of this input parameter needs to be specified as `PREPAID`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mysql_renew_db_instance_operation#modify_pay_type MysqlRenewDbInstanceOperation#modify_pay_type}
  */
  readonly modifyPayType?: string;
  /**
  * Renewal duration, unit: month, optional values include [1,2,3,4,5,6,7,8,9,10,11,12,24,36].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mysql_renew_db_instance_operation#time_span MysqlRenewDbInstanceOperation#time_span}
  */
  readonly timeSpan: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mysql_renew_db_instance_operation tencentcloud_mysql_renew_db_instance_operation}
*/
export class MysqlRenewDbInstanceOperation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_mysql_renew_db_instance_operation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MysqlRenewDbInstanceOperation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MysqlRenewDbInstanceOperation to import
  * @param importFromId The id of the existing MysqlRenewDbInstanceOperation that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mysql_renew_db_instance_operation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MysqlRenewDbInstanceOperation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_mysql_renew_db_instance_operation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mysql_renew_db_instance_operation tencentcloud_mysql_renew_db_instance_operation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MysqlRenewDbInstanceOperationConfig
  */
  public constructor(scope: Construct, id: string, config: MysqlRenewDbInstanceOperationConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_mysql_renew_db_instance_operation',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.38',
        providerVersionConstraint: '1.82.38'
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
    this._instanceId = config.instanceId;
    this._modifyPayType = config.modifyPayType;
    this._timeSpan = config.timeSpan;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // deadline_time - computed: true, optional: false, required: false
  public get deadlineTime() {
    return this.getStringAttribute('deadline_time');
  }

  // deal_id - computed: true, optional: false, required: false
  public get dealId() {
    return this.getStringAttribute('deal_id');
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

  // modify_pay_type - computed: false, optional: true, required: false
  private _modifyPayType?: string; 
  public get modifyPayType() {
    return this.getStringAttribute('modify_pay_type');
  }
  public set modifyPayType(value: string) {
    this._modifyPayType = value;
  }
  public resetModifyPayType() {
    this._modifyPayType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifyPayTypeInput() {
    return this._modifyPayType;
  }

  // time_span - computed: false, optional: false, required: true
  private _timeSpan?: number; 
  public get timeSpan() {
    return this.getNumberAttribute('time_span');
  }
  public set timeSpan(value: number) {
    this._timeSpan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeSpanInput() {
    return this._timeSpan;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      modify_pay_type: cdktf.stringToTerraform(this._modifyPayType),
      time_span: cdktf.numberToTerraform(this._timeSpan),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      modify_pay_type: {
        value: cdktf.stringToHclTerraform(this._modifyPayType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_span: {
        value: cdktf.numberToHclTerraform(this._timeSpan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
