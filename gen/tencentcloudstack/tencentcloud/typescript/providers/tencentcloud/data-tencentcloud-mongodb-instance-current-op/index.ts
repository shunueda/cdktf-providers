// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/data-sources/mongodb_instance_current_op
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudMongodbInstanceCurrentOpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/data-sources/mongodb_instance_current_op#id DataTencentcloudMongodbInstanceCurrentOp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance ID, the format is: cmgo-9d0p6umb.Same as the instance ID displayed in the cloud database console page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/data-sources/mongodb_instance_current_op#instance_id DataTencentcloudMongodbInstanceCurrentOp#instance_id}
  */
  readonly instanceId: string;
  /**
  * Filter condition, the time that the operation has been executed (unit: millisecond),the result will return the operation that exceeds the set time, the default value is 0,and the value range is [0, 3600000].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/data-sources/mongodb_instance_current_op#millisecond_running DataTencentcloudMongodbInstanceCurrentOp#millisecond_running}
  */
  readonly millisecondRunning?: number;
  /**
  * Filter condition, the namespace namespace to which the operation belongs, in the format of db.collection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/data-sources/mongodb_instance_current_op#ns DataTencentcloudMongodbInstanceCurrentOp#ns}
  */
  readonly ns?: string;
  /**
  * Filter condition, operation type, possible values: none, update, insert, query, command, getmore,remove and killcursors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/data-sources/mongodb_instance_current_op#op DataTencentcloudMongodbInstanceCurrentOp#op}
  */
  readonly op?: string;
  /**
  * Returns the sorted field of the result set, currently supports: MicrosecsRunning/microsecsrunning,the default is ascending sort.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/data-sources/mongodb_instance_current_op#order_by DataTencentcloudMongodbInstanceCurrentOp#order_by}
  */
  readonly orderBy?: string;
  /**
  * Returns the sorting method of the result set, possible values: ASC/asc or DESC/desc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/data-sources/mongodb_instance_current_op#order_by_type DataTencentcloudMongodbInstanceCurrentOp#order_by_type}
  */
  readonly orderByType?: string;
  /**
  * filter condition, shard name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/data-sources/mongodb_instance_current_op#replica_set_name DataTencentcloudMongodbInstanceCurrentOp#replica_set_name}
  */
  readonly replicaSetName?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/data-sources/mongodb_instance_current_op#result_output_file DataTencentcloudMongodbInstanceCurrentOp#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * Filter condition, node status, possible value: primary, secondary.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/data-sources/mongodb_instance_current_op#state DataTencentcloudMongodbInstanceCurrentOp#state}
  */
  readonly state?: string;
}
export interface DataTencentcloudMongodbInstanceCurrentOpCurrentOps {
}

export function dataTencentcloudMongodbInstanceCurrentOpCurrentOpsToTerraform(struct?: DataTencentcloudMongodbInstanceCurrentOpCurrentOps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMongodbInstanceCurrentOpCurrentOpsToHclTerraform(struct?: DataTencentcloudMongodbInstanceCurrentOpCurrentOps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMongodbInstanceCurrentOpCurrentOpsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMongodbInstanceCurrentOpCurrentOps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMongodbInstanceCurrentOpCurrentOps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // microsecs_running - computed: true, optional: false, required: false
  public get microsecsRunning() {
    return this.getNumberAttribute('microsecs_running');
  }

  // node_name - computed: true, optional: false, required: false
  public get nodeName() {
    return this.getStringAttribute('node_name');
  }

  // ns - computed: true, optional: false, required: false
  public get ns() {
    return this.getStringAttribute('ns');
  }

  // op - computed: true, optional: false, required: false
  public get op() {
    return this.getStringAttribute('op');
  }

  // op_id - computed: true, optional: false, required: false
  public get opId() {
    return this.getNumberAttribute('op_id');
  }

  // operation - computed: true, optional: false, required: false
  public get operation() {
    return this.getStringAttribute('operation');
  }

  // query - computed: true, optional: false, required: false
  public get query() {
    return this.getStringAttribute('query');
  }

  // replica_set_name - computed: true, optional: false, required: false
  public get replicaSetName() {
    return this.getStringAttribute('replica_set_name');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class DataTencentcloudMongodbInstanceCurrentOpCurrentOpsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMongodbInstanceCurrentOpCurrentOpsOutputReference {
    return new DataTencentcloudMongodbInstanceCurrentOpCurrentOpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/data-sources/mongodb_instance_current_op tencentcloud_mongodb_instance_current_op}
*/
export class DataTencentcloudMongodbInstanceCurrentOp extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_mongodb_instance_current_op";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudMongodbInstanceCurrentOp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudMongodbInstanceCurrentOp to import
  * @param importFromId The id of the existing DataTencentcloudMongodbInstanceCurrentOp that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/data-sources/mongodb_instance_current_op#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudMongodbInstanceCurrentOp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_mongodb_instance_current_op", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/data-sources/mongodb_instance_current_op tencentcloud_mongodb_instance_current_op} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudMongodbInstanceCurrentOpConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudMongodbInstanceCurrentOpConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_mongodb_instance_current_op',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.45',
        providerVersionConstraint: '1.82.45'
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
    this._millisecondRunning = config.millisecondRunning;
    this._ns = config.ns;
    this._op = config.op;
    this._orderBy = config.orderBy;
    this._orderByType = config.orderByType;
    this._replicaSetName = config.replicaSetName;
    this._resultOutputFile = config.resultOutputFile;
    this._state = config.state;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // current_ops - computed: true, optional: false, required: false
  private _currentOps = new DataTencentcloudMongodbInstanceCurrentOpCurrentOpsList(this, "current_ops", false);
  public get currentOps() {
    return this._currentOps;
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

  // millisecond_running - computed: false, optional: true, required: false
  private _millisecondRunning?: number; 
  public get millisecondRunning() {
    return this.getNumberAttribute('millisecond_running');
  }
  public set millisecondRunning(value: number) {
    this._millisecondRunning = value;
  }
  public resetMillisecondRunning() {
    this._millisecondRunning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get millisecondRunningInput() {
    return this._millisecondRunning;
  }

  // ns - computed: false, optional: true, required: false
  private _ns?: string; 
  public get ns() {
    return this.getStringAttribute('ns');
  }
  public set ns(value: string) {
    this._ns = value;
  }
  public resetNs() {
    this._ns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsInput() {
    return this._ns;
  }

  // op - computed: false, optional: true, required: false
  private _op?: string; 
  public get op() {
    return this.getStringAttribute('op');
  }
  public set op(value: string) {
    this._op = value;
  }
  public resetOp() {
    this._op = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opInput() {
    return this._op;
  }

  // order_by - computed: false, optional: true, required: false
  private _orderBy?: string; 
  public get orderBy() {
    return this.getStringAttribute('order_by');
  }
  public set orderBy(value: string) {
    this._orderBy = value;
  }
  public resetOrderBy() {
    this._orderBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderByInput() {
    return this._orderBy;
  }

  // order_by_type - computed: false, optional: true, required: false
  private _orderByType?: string; 
  public get orderByType() {
    return this.getStringAttribute('order_by_type');
  }
  public set orderByType(value: string) {
    this._orderByType = value;
  }
  public resetOrderByType() {
    this._orderByType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderByTypeInput() {
    return this._orderByType;
  }

  // replica_set_name - computed: false, optional: true, required: false
  private _replicaSetName?: string; 
  public get replicaSetName() {
    return this.getStringAttribute('replica_set_name');
  }
  public set replicaSetName(value: string) {
    this._replicaSetName = value;
  }
  public resetReplicaSetName() {
    this._replicaSetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaSetNameInput() {
    return this._replicaSetName;
  }

  // result_output_file - computed: false, optional: true, required: false
  private _resultOutputFile?: string; 
  public get resultOutputFile() {
    return this.getStringAttribute('result_output_file');
  }
  public set resultOutputFile(value: string) {
    this._resultOutputFile = value;
  }
  public resetResultOutputFile() {
    this._resultOutputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultOutputFileInput() {
    return this._resultOutputFile;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      millisecond_running: cdktf.numberToTerraform(this._millisecondRunning),
      ns: cdktf.stringToTerraform(this._ns),
      op: cdktf.stringToTerraform(this._op),
      order_by: cdktf.stringToTerraform(this._orderBy),
      order_by_type: cdktf.stringToTerraform(this._orderByType),
      replica_set_name: cdktf.stringToTerraform(this._replicaSetName),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      state: cdktf.stringToTerraform(this._state),
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
      millisecond_running: {
        value: cdktf.numberToHclTerraform(this._millisecondRunning),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ns: {
        value: cdktf.stringToHclTerraform(this._ns),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      op: {
        value: cdktf.stringToHclTerraform(this._op),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      order_by: {
        value: cdktf.stringToHclTerraform(this._orderBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      order_by_type: {
        value: cdktf.stringToHclTerraform(this._orderByType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replica_set_name: {
        value: cdktf.stringToHclTerraform(this._replicaSetName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
