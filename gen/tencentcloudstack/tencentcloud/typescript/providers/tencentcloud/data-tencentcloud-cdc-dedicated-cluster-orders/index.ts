// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/cdc_dedicated_cluster_orders
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudCdcDedicatedClusterOrdersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Filter by Dedicated Cluster Order Action Type. Allow filter value: CREATE, EXTEND.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/cdc_dedicated_cluster_orders#action_type DataTencentcloudCdcDedicatedClusterOrders#action_type}
  */
  readonly actionType?: string;
  /**
  * Filter by Dedicated Cluster ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/cdc_dedicated_cluster_orders#dedicated_cluster_ids DataTencentcloudCdcDedicatedClusterOrders#dedicated_cluster_ids}
  */
  readonly dedicatedClusterIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/cdc_dedicated_cluster_orders#id DataTencentcloudCdcDedicatedClusterOrders#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/cdc_dedicated_cluster_orders#result_output_file DataTencentcloudCdcDedicatedClusterOrders#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * Filter by Dedicated Cluster Order Status. Allow filter value: PENDING, INCONSTRUCTION, DELIVERING, DELIVERED, EXPIRED, CANCELLED, OFFLINE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/cdc_dedicated_cluster_orders#status DataTencentcloudCdcDedicatedClusterOrders#status}
  */
  readonly status?: string;
}
export interface DataTencentcloudCdcDedicatedClusterOrdersDedicatedClusterOrderSetDedicatedClusterOrderItems {
}

export function dataTencentcloudCdcDedicatedClusterOrdersDedicatedClusterOrderSetDedicatedClusterOrderItemsToTerraform(struct?: DataTencentcloudCdcDedicatedClusterOrdersDedicatedClusterOrderSetDedicatedClusterOrderItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCdcDedicatedClusterOrdersDedicatedClusterOrderSetDedicatedClusterOrderItemsToHclTerraform(struct?: DataTencentcloudCdcDedicatedClusterOrdersDedicatedClusterOrderSetDedicatedClusterOrderItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCdcDedicatedClusterOrdersDedicatedClusterOrderSetDedicatedClusterOrderItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCdcDedicatedClusterOrdersDedicatedClusterOrderSetDedicatedClusterOrderItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCdcDedicatedClusterOrdersDedicatedClusterOrderSetDedicatedClusterOrderItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compute_format - computed: true, optional: false, required: false
  public get computeFormat() {
    return this.getStringAttribute('compute_format');
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // dedicated_cluster_type_id - computed: true, optional: false, required: false
  public get dedicatedClusterTypeId() {
    return this.getStringAttribute('dedicated_cluster_type_id');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // power_draw - computed: true, optional: false, required: false
  public get powerDraw() {
    return this.getNumberAttribute('power_draw');
  }

  // sub_order_id - computed: true, optional: false, required: false
  public get subOrderId() {
    return this.getStringAttribute('sub_order_id');
  }

  // sub_order_pay_status - computed: true, optional: false, required: false
  public get subOrderPayStatus() {
    return this.getNumberAttribute('sub_order_pay_status');
  }

  // sub_order_status - computed: true, optional: false, required: false
  public get subOrderStatus() {
    return this.getStringAttribute('sub_order_status');
  }

  // supported_instance_family - computed: true, optional: false, required: false
  public get supportedInstanceFamily() {
    return cdktf.Fn.tolist(this.getListAttribute('supported_instance_family'));
  }

  // supported_storage_type - computed: true, optional: false, required: false
  public get supportedStorageType() {
    return cdktf.Fn.tolist(this.getListAttribute('supported_storage_type'));
  }

  // supported_uplink_speed - computed: true, optional: false, required: false
  public get supportedUplinkSpeed() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('supported_uplink_speed')));
  }

  // total_cpu - computed: true, optional: false, required: false
  public get totalCpu() {
    return this.getNumberAttribute('total_cpu');
  }

  // total_gpu - computed: true, optional: false, required: false
  public get totalGpu() {
    return this.getNumberAttribute('total_gpu');
  }

  // total_mem - computed: true, optional: false, required: false
  public get totalMem() {
    return this.getNumberAttribute('total_mem');
  }

  // type_family - computed: true, optional: false, required: false
  public get typeFamily() {
    return this.getStringAttribute('type_family');
  }

  // type_name - computed: true, optional: false, required: false
  public get typeName() {
    return this.getStringAttribute('type_name');
  }

  // weight - computed: true, optional: false, required: false
  public get weight() {
    return this.getNumberAttribute('weight');
  }
}

export class DataTencentcloudCdcDedicatedClusterOrdersDedicatedClusterOrderSetDedicatedClusterOrderItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCdcDedicatedClusterOrdersDedicatedClusterOrderSetDedicatedClusterOrderItemsOutputReference {
    return new DataTencentcloudCdcDedicatedClusterOrdersDedicatedClusterOrderSetDedicatedClusterOrderItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCdcDedicatedClusterOrdersDedicatedClusterOrderSet {
}

export function dataTencentcloudCdcDedicatedClusterOrdersDedicatedClusterOrderSetToTerraform(struct?: DataTencentcloudCdcDedicatedClusterOrdersDedicatedClusterOrderSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCdcDedicatedClusterOrdersDedicatedClusterOrderSetToHclTerraform(struct?: DataTencentcloudCdcDedicatedClusterOrdersDedicatedClusterOrderSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCdcDedicatedClusterOrdersDedicatedClusterOrderSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCdcDedicatedClusterOrdersDedicatedClusterOrderSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCdcDedicatedClusterOrdersDedicatedClusterOrderSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // cpu - computed: true, optional: false, required: false
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // dedicated_cluster_id - computed: true, optional: false, required: false
  public get dedicatedClusterId() {
    return this.getStringAttribute('dedicated_cluster_id');
  }

  // dedicated_cluster_order_id - computed: true, optional: false, required: false
  public get dedicatedClusterOrderId() {
    return this.getStringAttribute('dedicated_cluster_order_id');
  }

  // dedicated_cluster_order_items - computed: true, optional: false, required: false
  private _dedicatedClusterOrderItems = new DataTencentcloudCdcDedicatedClusterOrdersDedicatedClusterOrderSetDedicatedClusterOrderItemsList(this, "dedicated_cluster_order_items", false);
  public get dedicatedClusterOrderItems() {
    return this._dedicatedClusterOrderItems;
  }

  // dedicated_cluster_type_id - computed: true, optional: false, required: false
  public get dedicatedClusterTypeId() {
    return this.getStringAttribute('dedicated_cluster_type_id');
  }

  // gpu - computed: true, optional: false, required: false
  public get gpu() {
    return this.getNumberAttribute('gpu');
  }

  // mem - computed: true, optional: false, required: false
  public get mem() {
    return this.getNumberAttribute('mem');
  }

  // order_status - computed: true, optional: false, required: false
  public get orderStatus() {
    return this.getStringAttribute('order_status');
  }

  // order_type - computed: true, optional: false, required: false
  public get orderType() {
    return this.getStringAttribute('order_type');
  }

  // pay_status - computed: true, optional: false, required: false
  public get payStatus() {
    return this.getNumberAttribute('pay_status');
  }

  // pay_type - computed: true, optional: false, required: false
  public get payType() {
    return this.getStringAttribute('pay_type');
  }

  // power_draw - computed: true, optional: false, required: false
  public get powerDraw() {
    return this.getNumberAttribute('power_draw');
  }

  // supported_instance_family - computed: true, optional: false, required: false
  public get supportedInstanceFamily() {
    return cdktf.Fn.tolist(this.getListAttribute('supported_instance_family'));
  }

  // supported_storage_type - computed: true, optional: false, required: false
  public get supportedStorageType() {
    return cdktf.Fn.tolist(this.getListAttribute('supported_storage_type'));
  }

  // supported_uplink_speed - computed: true, optional: false, required: false
  public get supportedUplinkSpeed() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('supported_uplink_speed')));
  }

  // time_span - computed: true, optional: false, required: false
  public get timeSpan() {
    return this.getNumberAttribute('time_span');
  }

  // time_unit - computed: true, optional: false, required: false
  public get timeUnit() {
    return this.getStringAttribute('time_unit');
  }

  // weight - computed: true, optional: false, required: false
  public get weight() {
    return this.getNumberAttribute('weight');
  }
}

export class DataTencentcloudCdcDedicatedClusterOrdersDedicatedClusterOrderSetList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCdcDedicatedClusterOrdersDedicatedClusterOrderSetOutputReference {
    return new DataTencentcloudCdcDedicatedClusterOrdersDedicatedClusterOrderSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/cdc_dedicated_cluster_orders tencentcloud_cdc_dedicated_cluster_orders}
*/
export class DataTencentcloudCdcDedicatedClusterOrders extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cdc_dedicated_cluster_orders";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudCdcDedicatedClusterOrders resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudCdcDedicatedClusterOrders to import
  * @param importFromId The id of the existing DataTencentcloudCdcDedicatedClusterOrders that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/cdc_dedicated_cluster_orders#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudCdcDedicatedClusterOrders to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cdc_dedicated_cluster_orders", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/cdc_dedicated_cluster_orders tencentcloud_cdc_dedicated_cluster_orders} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudCdcDedicatedClusterOrdersConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudCdcDedicatedClusterOrdersConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cdc_dedicated_cluster_orders',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.49',
        providerVersionConstraint: '1.82.49'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._actionType = config.actionType;
    this._dedicatedClusterIds = config.dedicatedClusterIds;
    this._id = config.id;
    this._resultOutputFile = config.resultOutputFile;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action_type - computed: false, optional: true, required: false
  private _actionType?: string; 
  public get actionType() {
    return this.getStringAttribute('action_type');
  }
  public set actionType(value: string) {
    this._actionType = value;
  }
  public resetActionType() {
    this._actionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionTypeInput() {
    return this._actionType;
  }

  // dedicated_cluster_ids - computed: false, optional: true, required: false
  private _dedicatedClusterIds?: string[]; 
  public get dedicatedClusterIds() {
    return cdktf.Fn.tolist(this.getListAttribute('dedicated_cluster_ids'));
  }
  public set dedicatedClusterIds(value: string[]) {
    this._dedicatedClusterIds = value;
  }
  public resetDedicatedClusterIds() {
    this._dedicatedClusterIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedClusterIdsInput() {
    return this._dedicatedClusterIds;
  }

  // dedicated_cluster_order_set - computed: true, optional: false, required: false
  private _dedicatedClusterOrderSet = new DataTencentcloudCdcDedicatedClusterOrdersDedicatedClusterOrderSetList(this, "dedicated_cluster_order_set", false);
  public get dedicatedClusterOrderSet() {
    return this._dedicatedClusterOrderSet;
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

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action_type: cdktf.stringToTerraform(this._actionType),
      dedicated_cluster_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dedicatedClusterIds),
      id: cdktf.stringToTerraform(this._id),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      status: cdktf.stringToTerraform(this._status),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action_type: {
        value: cdktf.stringToHclTerraform(this._actionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dedicated_cluster_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dedicatedClusterIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
