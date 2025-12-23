// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/cynosdb_resource_package_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudCynosdbResourcePackageListConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/cynosdb_resource_package_list#id DataTencentcloudCynosdbResourcePackageList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Sorting conditions supported: startTime - effective time, expireTime - expiration time, packageUsedSpec - usage capacity, and packageTotalSpec - total storage capacity. Arrange in array order;.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/cynosdb_resource_package_list#order_by DataTencentcloudCynosdbResourcePackageList#order_by}
  */
  readonly orderBy?: string[];
  /**
  * Sort by, DESC Descending, ASC Ascending.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/cynosdb_resource_package_list#order_direction DataTencentcloudCynosdbResourcePackageList#order_direction}
  */
  readonly orderDirection?: string;
  /**
  * Resource Package Unique ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/cynosdb_resource_package_list#package_id DataTencentcloudCynosdbResourcePackageList#package_id}
  */
  readonly packageId?: string[];
  /**
  * Resource Package Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/cynosdb_resource_package_list#package_name DataTencentcloudCynosdbResourcePackageList#package_name}
  */
  readonly packageName?: string[];
  /**
  * Resource package usage region China - common in mainland China, overseas - common in Hong Kong, Macao, Taiwan, and overseas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/cynosdb_resource_package_list#package_region DataTencentcloudCynosdbResourcePackageList#package_region}
  */
  readonly packageRegion?: string[];
  /**
  * Resource package type CCU - Compute resource package, DISK - Storage resource package.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/cynosdb_resource_package_list#package_type DataTencentcloudCynosdbResourcePackageList#package_type}
  */
  readonly packageType?: string[];
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/cynosdb_resource_package_list#result_output_file DataTencentcloudCynosdbResourcePackageList#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * Resource package status creating - creating; Using - In use; Expired - has expired; Normal_ Finish - used up; Apply_ Refund - Applying for a refund; Refund - The fee has been refunded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/cynosdb_resource_package_list#status DataTencentcloudCynosdbResourcePackageList#status}
  */
  readonly status?: string[];
}
export interface DataTencentcloudCynosdbResourcePackageListResourcePackageListBindInstanceInfos {
}

export function dataTencentcloudCynosdbResourcePackageListResourcePackageListBindInstanceInfosToTerraform(struct?: DataTencentcloudCynosdbResourcePackageListResourcePackageListBindInstanceInfos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCynosdbResourcePackageListResourcePackageListBindInstanceInfosToHclTerraform(struct?: DataTencentcloudCynosdbResourcePackageListResourcePackageListBindInstanceInfos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCynosdbResourcePackageListResourcePackageListBindInstanceInfosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCynosdbResourcePackageListResourcePackageListBindInstanceInfos | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCynosdbResourcePackageListResourcePackageListBindInstanceInfos | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // instance_region - computed: true, optional: false, required: false
  public get instanceRegion() {
    return this.getStringAttribute('instance_region');
  }

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
}

export class DataTencentcloudCynosdbResourcePackageListResourcePackageListBindInstanceInfosList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCynosdbResourcePackageListResourcePackageListBindInstanceInfosOutputReference {
    return new DataTencentcloudCynosdbResourcePackageListResourcePackageListBindInstanceInfosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCynosdbResourcePackageListResourcePackageListStruct {
}

export function dataTencentcloudCynosdbResourcePackageListResourcePackageListStructToTerraform(struct?: DataTencentcloudCynosdbResourcePackageListResourcePackageListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCynosdbResourcePackageListResourcePackageListStructToHclTerraform(struct?: DataTencentcloudCynosdbResourcePackageListResourcePackageListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCynosdbResourcePackageListResourcePackageListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCynosdbResourcePackageListResourcePackageListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCynosdbResourcePackageListResourcePackageListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // app_id - computed: true, optional: false, required: false
  public get appId() {
    return this.getNumberAttribute('app_id');
  }

  // bind_instance_infos - computed: true, optional: false, required: false
  private _bindInstanceInfos = new DataTencentcloudCynosdbResourcePackageListResourcePackageListBindInstanceInfosList(this, "bind_instance_infos", false);
  public get bindInstanceInfos() {
    return this._bindInstanceInfos;
  }

  // expire_time - computed: true, optional: false, required: false
  public get expireTime() {
    return this.getStringAttribute('expire_time');
  }

  // has_quota - computed: true, optional: false, required: false
  public get hasQuota() {
    return this.getBooleanAttribute('has_quota');
  }

  // package_id - computed: true, optional: false, required: false
  public get packageId() {
    return this.getStringAttribute('package_id');
  }

  // package_name - computed: true, optional: false, required: false
  public get packageName() {
    return this.getStringAttribute('package_name');
  }

  // package_region - computed: true, optional: false, required: false
  public get packageRegion() {
    return this.getStringAttribute('package_region');
  }

  // package_total_spec - computed: true, optional: false, required: false
  public get packageTotalSpec() {
    return this.getNumberAttribute('package_total_spec');
  }

  // package_type - computed: true, optional: false, required: false
  public get packageType() {
    return this.getStringAttribute('package_type');
  }

  // package_used_spec - computed: true, optional: false, required: false
  public get packageUsedSpec() {
    return this.getNumberAttribute('package_used_spec');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataTencentcloudCynosdbResourcePackageListResourcePackageListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCynosdbResourcePackageListResourcePackageListStructOutputReference {
    return new DataTencentcloudCynosdbResourcePackageListResourcePackageListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/cynosdb_resource_package_list tencentcloud_cynosdb_resource_package_list}
*/
export class DataTencentcloudCynosdbResourcePackageList extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cynosdb_resource_package_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudCynosdbResourcePackageList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudCynosdbResourcePackageList to import
  * @param importFromId The id of the existing DataTencentcloudCynosdbResourcePackageList that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/cynosdb_resource_package_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudCynosdbResourcePackageList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cynosdb_resource_package_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/cynosdb_resource_package_list tencentcloud_cynosdb_resource_package_list} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudCynosdbResourcePackageListConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudCynosdbResourcePackageListConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cynosdb_resource_package_list',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.48',
        providerVersionConstraint: '1.82.48'
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
    this._orderBy = config.orderBy;
    this._orderDirection = config.orderDirection;
    this._packageId = config.packageId;
    this._packageName = config.packageName;
    this._packageRegion = config.packageRegion;
    this._packageType = config.packageType;
    this._resultOutputFile = config.resultOutputFile;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // order_by - computed: false, optional: true, required: false
  private _orderBy?: string[]; 
  public get orderBy() {
    return cdktf.Fn.tolist(this.getListAttribute('order_by'));
  }
  public set orderBy(value: string[]) {
    this._orderBy = value;
  }
  public resetOrderBy() {
    this._orderBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderByInput() {
    return this._orderBy;
  }

  // order_direction - computed: false, optional: true, required: false
  private _orderDirection?: string; 
  public get orderDirection() {
    return this.getStringAttribute('order_direction');
  }
  public set orderDirection(value: string) {
    this._orderDirection = value;
  }
  public resetOrderDirection() {
    this._orderDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderDirectionInput() {
    return this._orderDirection;
  }

  // package_id - computed: false, optional: true, required: false
  private _packageId?: string[]; 
  public get packageId() {
    return cdktf.Fn.tolist(this.getListAttribute('package_id'));
  }
  public set packageId(value: string[]) {
    this._packageId = value;
  }
  public resetPackageId() {
    this._packageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageIdInput() {
    return this._packageId;
  }

  // package_name - computed: false, optional: true, required: false
  private _packageName?: string[]; 
  public get packageName() {
    return cdktf.Fn.tolist(this.getListAttribute('package_name'));
  }
  public set packageName(value: string[]) {
    this._packageName = value;
  }
  public resetPackageName() {
    this._packageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageNameInput() {
    return this._packageName;
  }

  // package_region - computed: false, optional: true, required: false
  private _packageRegion?: string[]; 
  public get packageRegion() {
    return cdktf.Fn.tolist(this.getListAttribute('package_region'));
  }
  public set packageRegion(value: string[]) {
    this._packageRegion = value;
  }
  public resetPackageRegion() {
    this._packageRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageRegionInput() {
    return this._packageRegion;
  }

  // package_type - computed: false, optional: true, required: false
  private _packageType?: string[]; 
  public get packageType() {
    return cdktf.Fn.tolist(this.getListAttribute('package_type'));
  }
  public set packageType(value: string[]) {
    this._packageType = value;
  }
  public resetPackageType() {
    this._packageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageTypeInput() {
    return this._packageType;
  }

  // resource_package_list - computed: true, optional: false, required: false
  private _resourcePackageList = new DataTencentcloudCynosdbResourcePackageListResourcePackageListStructList(this, "resource_package_list", false);
  public get resourcePackageList() {
    return this._resourcePackageList;
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
  private _status?: string[]; 
  public get status() {
    return cdktf.Fn.tolist(this.getListAttribute('status'));
  }
  public set status(value: string[]) {
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
      id: cdktf.stringToTerraform(this._id),
      order_by: cdktf.listMapper(cdktf.stringToTerraform, false)(this._orderBy),
      order_direction: cdktf.stringToTerraform(this._orderDirection),
      package_id: cdktf.listMapper(cdktf.stringToTerraform, false)(this._packageId),
      package_name: cdktf.listMapper(cdktf.stringToTerraform, false)(this._packageName),
      package_region: cdktf.listMapper(cdktf.stringToTerraform, false)(this._packageRegion),
      package_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._packageType),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      status: cdktf.listMapper(cdktf.stringToTerraform, false)(this._status),
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
      order_by: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._orderBy),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      order_direction: {
        value: cdktf.stringToHclTerraform(this._orderDirection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      package_id: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._packageId),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      package_name: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._packageName),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      package_region: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._packageRegion),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      package_type: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._packageType),
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
      status: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._status),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
