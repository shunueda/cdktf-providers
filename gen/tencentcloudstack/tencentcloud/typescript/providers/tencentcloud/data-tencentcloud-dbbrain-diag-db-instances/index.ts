// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/data-sources/dbbrain_diag_db_instances
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudDbbrainDiagDbInstancesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/data-sources/dbbrain_diag_db_instances#id DataTencentcloudDbbrainDiagDbInstances#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * query based on the instance ID condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/data-sources/dbbrain_diag_db_instances#instance_ids DataTencentcloudDbbrainDiagDbInstances#instance_ids}
  */
  readonly instanceIds?: string[];
  /**
  * query based on the instance name condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/data-sources/dbbrain_diag_db_instances#instance_names DataTencentcloudDbbrainDiagDbInstances#instance_names}
  */
  readonly instanceNames?: string[];
  /**
  * whether it is an instance supported by DBbrain, always pass `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/data-sources/dbbrain_diag_db_instances#is_supported DataTencentcloudDbbrainDiagDbInstances#is_supported}
  */
  readonly isSupported: boolean | cdktf.IResolvable;
  /**
  * service product type, supported values include: `mysql` - cloud database MySQL, `cynosdb` - cloud database TDSQL-C for MySQL, the default is `mysql`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/data-sources/dbbrain_diag_db_instances#product DataTencentcloudDbbrainDiagDbInstances#product}
  */
  readonly product: string;
  /**
  * query based on geographical conditions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/data-sources/dbbrain_diag_db_instances#regions DataTencentcloudDbbrainDiagDbInstances#regions}
  */
  readonly regions?: string[];
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/data-sources/dbbrain_diag_db_instances#result_output_file DataTencentcloudDbbrainDiagDbInstances#result_output_file}
  */
  readonly resultOutputFile?: string;
}
export interface DataTencentcloudDbbrainDiagDbInstancesItemsInstanceConf {
}

export function dataTencentcloudDbbrainDiagDbInstancesItemsInstanceConfToTerraform(struct?: DataTencentcloudDbbrainDiagDbInstancesItemsInstanceConf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudDbbrainDiagDbInstancesItemsInstanceConfToHclTerraform(struct?: DataTencentcloudDbbrainDiagDbInstancesItemsInstanceConf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudDbbrainDiagDbInstancesItemsInstanceConfOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudDbbrainDiagDbInstancesItemsInstanceConf | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudDbbrainDiagDbInstancesItemsInstanceConf | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // daily_inspection - computed: true, optional: false, required: false
  public get dailyInspection() {
    return this.getStringAttribute('daily_inspection');
  }

  // key_delimiters - computed: true, optional: false, required: false
  public get keyDelimiters() {
    return cdktf.Fn.tolist(this.getListAttribute('key_delimiters'));
  }

  // overview_display - computed: true, optional: false, required: false
  public get overviewDisplay() {
    return this.getStringAttribute('overview_display');
  }
}

export class DataTencentcloudDbbrainDiagDbInstancesItemsInstanceConfList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudDbbrainDiagDbInstancesItemsInstanceConfOutputReference {
    return new DataTencentcloudDbbrainDiagDbInstancesItemsInstanceConfOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudDbbrainDiagDbInstancesItems {
}

export function dataTencentcloudDbbrainDiagDbInstancesItemsToTerraform(struct?: DataTencentcloudDbbrainDiagDbInstancesItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudDbbrainDiagDbInstancesItemsToHclTerraform(struct?: DataTencentcloudDbbrainDiagDbInstancesItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudDbbrainDiagDbInstancesItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudDbbrainDiagDbInstancesItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudDbbrainDiagDbInstancesItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // audit_policy_status - computed: true, optional: false, required: false
  public get auditPolicyStatus() {
    return this.getStringAttribute('audit_policy_status');
  }

  // audit_running_status - computed: true, optional: false, required: false
  public get auditRunningStatus() {
    return this.getStringAttribute('audit_running_status');
  }

  // cpu - computed: true, optional: false, required: false
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // deadline_time - computed: true, optional: false, required: false
  public get deadlineTime() {
    return this.getStringAttribute('deadline_time');
  }

  // deploy_mode - computed: true, optional: false, required: false
  public get deployMode() {
    return this.getStringAttribute('deploy_mode');
  }

  // engine_version - computed: true, optional: false, required: false
  public get engineVersion() {
    return this.getStringAttribute('engine_version');
  }

  // event_count - computed: true, optional: false, required: false
  public get eventCount() {
    return this.getNumberAttribute('event_count');
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getStringAttribute('group_id');
  }

  // group_name - computed: true, optional: false, required: false
  public get groupName() {
    return this.getStringAttribute('group_name');
  }

  // health_score - computed: true, optional: false, required: false
  public get healthScore() {
    return this.getNumberAttribute('health_score');
  }

  // init_flag - computed: true, optional: false, required: false
  public get initFlag() {
    return this.getNumberAttribute('init_flag');
  }

  // instance_conf - computed: true, optional: false, required: false
  private _instanceConf = new DataTencentcloudDbbrainDiagDbInstancesItemsInstanceConfList(this, "instance_conf", false);
  public get instanceConf() {
    return this._instanceConf;
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // instance_name - computed: true, optional: false, required: false
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getNumberAttribute('instance_type');
  }

  // internal_vip - computed: true, optional: false, required: false
  public get internalVip() {
    return this.getStringAttribute('internal_vip');
  }

  // internal_vport - computed: true, optional: false, required: false
  public get internalVport() {
    return this.getNumberAttribute('internal_vport');
  }

  // is_supported - computed: true, optional: false, required: false
  public get isSupported() {
    return this.getBooleanAttribute('is_supported');
  }

  // memory - computed: true, optional: false, required: false
  public get memory() {
    return this.getNumberAttribute('memory');
  }

  // product - computed: true, optional: false, required: false
  public get product() {
    return this.getStringAttribute('product');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // sec_audit_status - computed: true, optional: false, required: false
  public get secAuditStatus() {
    return this.getStringAttribute('sec_audit_status');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // task_status - computed: true, optional: false, required: false
  public get taskStatus() {
    return this.getNumberAttribute('task_status');
  }

  // uniq_subnet_id - computed: true, optional: false, required: false
  public get uniqSubnetId() {
    return this.getStringAttribute('uniq_subnet_id');
  }

  // uniq_vpc_id - computed: true, optional: false, required: false
  public get uniqVpcId() {
    return this.getStringAttribute('uniq_vpc_id');
  }

  // vip - computed: true, optional: false, required: false
  public get vip() {
    return this.getStringAttribute('vip');
  }

  // volume - computed: true, optional: false, required: false
  public get volume() {
    return this.getNumberAttribute('volume');
  }

  // vport - computed: true, optional: false, required: false
  public get vport() {
    return this.getNumberAttribute('vport');
  }
}

export class DataTencentcloudDbbrainDiagDbInstancesItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudDbbrainDiagDbInstancesItemsOutputReference {
    return new DataTencentcloudDbbrainDiagDbInstancesItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/data-sources/dbbrain_diag_db_instances tencentcloud_dbbrain_diag_db_instances}
*/
export class DataTencentcloudDbbrainDiagDbInstances extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_dbbrain_diag_db_instances";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudDbbrainDiagDbInstances resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudDbbrainDiagDbInstances to import
  * @param importFromId The id of the existing DataTencentcloudDbbrainDiagDbInstances that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/data-sources/dbbrain_diag_db_instances#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudDbbrainDiagDbInstances to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_dbbrain_diag_db_instances", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/data-sources/dbbrain_diag_db_instances tencentcloud_dbbrain_diag_db_instances} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudDbbrainDiagDbInstancesConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudDbbrainDiagDbInstancesConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_dbbrain_diag_db_instances',
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
    this._id = config.id;
    this._instanceIds = config.instanceIds;
    this._instanceNames = config.instanceNames;
    this._isSupported = config.isSupported;
    this._product = config.product;
    this._regions = config.regions;
    this._resultOutputFile = config.resultOutputFile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // db_scan_status - computed: true, optional: false, required: false
  public get dbScanStatus() {
    return this.getNumberAttribute('db_scan_status');
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

  // instance_ids - computed: false, optional: true, required: false
  private _instanceIds?: string[]; 
  public get instanceIds() {
    return cdktf.Fn.tolist(this.getListAttribute('instance_ids'));
  }
  public set instanceIds(value: string[]) {
    this._instanceIds = value;
  }
  public resetInstanceIds() {
    this._instanceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdsInput() {
    return this._instanceIds;
  }

  // instance_names - computed: false, optional: true, required: false
  private _instanceNames?: string[]; 
  public get instanceNames() {
    return cdktf.Fn.tolist(this.getListAttribute('instance_names'));
  }
  public set instanceNames(value: string[]) {
    this._instanceNames = value;
  }
  public resetInstanceNames() {
    this._instanceNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNamesInput() {
    return this._instanceNames;
  }

  // is_supported - computed: false, optional: false, required: true
  private _isSupported?: boolean | cdktf.IResolvable; 
  public get isSupported() {
    return this.getBooleanAttribute('is_supported');
  }
  public set isSupported(value: boolean | cdktf.IResolvable) {
    this._isSupported = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isSupportedInput() {
    return this._isSupported;
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataTencentcloudDbbrainDiagDbInstancesItemsList(this, "items", false);
  public get items() {
    return this._items;
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

  // regions - computed: false, optional: true, required: false
  private _regions?: string[]; 
  public get regions() {
    return cdktf.Fn.tolist(this.getListAttribute('regions'));
  }
  public set regions(value: string[]) {
    this._regions = value;
  }
  public resetRegions() {
    this._regions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      instance_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._instanceIds),
      instance_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._instanceNames),
      is_supported: cdktf.booleanToTerraform(this._isSupported),
      product: cdktf.stringToTerraform(this._product),
      regions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._regions),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
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
      instance_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._instanceIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      instance_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._instanceNames),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      is_supported: {
        value: cdktf.booleanToHclTerraform(this._isSupported),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      product: {
        value: cdktf.stringToHclTerraform(this._product),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      regions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._regions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
