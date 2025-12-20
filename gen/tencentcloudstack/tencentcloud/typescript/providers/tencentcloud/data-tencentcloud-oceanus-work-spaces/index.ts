// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/oceanus_work_spaces
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudOceanusWorkSpacesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/oceanus_work_spaces#id DataTencentcloudOceanusWorkSpaces#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * 1:sort by creation time in descending order (default); 2:sort by creation time in ascending order; 3:sort by status in descending order; 4:sort by status in ascending order; default is 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/oceanus_work_spaces#order_type DataTencentcloudOceanusWorkSpaces#order_type}
  */
  readonly orderType?: number;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/oceanus_work_spaces#result_output_file DataTencentcloudOceanusWorkSpaces#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/oceanus_work_spaces#filters DataTencentcloudOceanusWorkSpaces#filters}
  */
  readonly filters?: DataTencentcloudOceanusWorkSpacesFilters[] | cdktf.IResolvable;
}
export interface DataTencentcloudOceanusWorkSpacesWorkSpaceSetItemClusterGroupSetItem {
}

export function dataTencentcloudOceanusWorkSpacesWorkSpaceSetItemClusterGroupSetItemToTerraform(struct?: DataTencentcloudOceanusWorkSpacesWorkSpaceSetItemClusterGroupSetItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudOceanusWorkSpacesWorkSpaceSetItemClusterGroupSetItemToHclTerraform(struct?: DataTencentcloudOceanusWorkSpacesWorkSpaceSetItemClusterGroupSetItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudOceanusWorkSpacesWorkSpaceSetItemClusterGroupSetItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudOceanusWorkSpacesWorkSpaceSetItemClusterGroupSetItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudOceanusWorkSpacesWorkSpaceSetItemClusterGroupSetItem | undefined) {
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

  // cluster_id - computed: true, optional: false, required: false
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // creator_uin - computed: true, optional: false, required: false
  public get creatorUin() {
    return this.getStringAttribute('creator_uin');
  }

  // cu_mem - computed: true, optional: false, required: false
  public get cuMem() {
    return this.getNumberAttribute('cu_mem');
  }

  // cu_num - computed: true, optional: false, required: false
  public get cuNum() {
    return this.getNumberAttribute('cu_num');
  }

  // free_cu - computed: true, optional: false, required: false
  public get freeCu() {
    return this.getNumberAttribute('free_cu');
  }

  // free_cu_num - computed: true, optional: false, required: false
  public get freeCuNum() {
    return this.getNumberAttribute('free_cu_num');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // net_environment_type - computed: true, optional: false, required: false
  public get netEnvironmentType() {
    return this.getNumberAttribute('net_environment_type');
  }

  // owner_uin - computed: true, optional: false, required: false
  public get ownerUin() {
    return this.getStringAttribute('owner_uin');
  }

  // pay_mode - computed: true, optional: false, required: false
  public get payMode() {
    return this.getNumberAttribute('pay_mode');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // remark - computed: true, optional: false, required: false
  public get remark() {
    return this.getStringAttribute('remark');
  }

  // running_cu - computed: true, optional: false, required: false
  public get runningCu() {
    return this.getNumberAttribute('running_cu');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // status_desc - computed: true, optional: false, required: false
  public get statusDesc() {
    return this.getStringAttribute('status_desc');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // zone - computed: true, optional: false, required: false
  public get zone() {
    return this.getStringAttribute('zone');
  }
}

export class DataTencentcloudOceanusWorkSpacesWorkSpaceSetItemClusterGroupSetItemList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudOceanusWorkSpacesWorkSpaceSetItemClusterGroupSetItemOutputReference {
    return new DataTencentcloudOceanusWorkSpacesWorkSpaceSetItemClusterGroupSetItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudOceanusWorkSpacesWorkSpaceSetItemRoleAuth {
}

export function dataTencentcloudOceanusWorkSpacesWorkSpaceSetItemRoleAuthToTerraform(struct?: DataTencentcloudOceanusWorkSpacesWorkSpaceSetItemRoleAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudOceanusWorkSpacesWorkSpaceSetItemRoleAuthToHclTerraform(struct?: DataTencentcloudOceanusWorkSpacesWorkSpaceSetItemRoleAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudOceanusWorkSpacesWorkSpaceSetItemRoleAuthOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudOceanusWorkSpacesWorkSpaceSetItemRoleAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudOceanusWorkSpacesWorkSpaceSetItemRoleAuth | undefined) {
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

  // auth_sub_account_uin - computed: true, optional: false, required: false
  public get authSubAccountUin() {
    return this.getStringAttribute('auth_sub_account_uin');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // creator_uin - computed: true, optional: false, required: false
  public get creatorUin() {
    return this.getStringAttribute('creator_uin');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // owner_uin - computed: true, optional: false, required: false
  public get ownerUin() {
    return this.getStringAttribute('owner_uin');
  }

  // permission - computed: true, optional: false, required: false
  public get permission() {
    return this.getNumberAttribute('permission');
  }

  // role_name - computed: true, optional: false, required: false
  public get roleName() {
    return this.getStringAttribute('role_name');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // work_space_id - computed: true, optional: false, required: false
  public get workSpaceId() {
    return this.getNumberAttribute('work_space_id');
  }

  // work_space_serial_id - computed: true, optional: false, required: false
  public get workSpaceSerialId() {
    return this.getStringAttribute('work_space_serial_id');
  }
}

export class DataTencentcloudOceanusWorkSpacesWorkSpaceSetItemRoleAuthList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudOceanusWorkSpacesWorkSpaceSetItemRoleAuthOutputReference {
    return new DataTencentcloudOceanusWorkSpacesWorkSpaceSetItemRoleAuthOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudOceanusWorkSpacesWorkSpaceSetItem {
}

export function dataTencentcloudOceanusWorkSpacesWorkSpaceSetItemToTerraform(struct?: DataTencentcloudOceanusWorkSpacesWorkSpaceSetItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudOceanusWorkSpacesWorkSpaceSetItemToHclTerraform(struct?: DataTencentcloudOceanusWorkSpacesWorkSpaceSetItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudOceanusWorkSpacesWorkSpaceSetItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudOceanusWorkSpacesWorkSpaceSetItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudOceanusWorkSpacesWorkSpaceSetItem | undefined) {
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

  // cluster_group_set_item - computed: true, optional: false, required: false
  private _clusterGroupSetItem = new DataTencentcloudOceanusWorkSpacesWorkSpaceSetItemClusterGroupSetItemList(this, "cluster_group_set_item", false);
  public get clusterGroupSetItem() {
    return this._clusterGroupSetItem;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // creator_uin - computed: true, optional: false, required: false
  public get creatorUin() {
    return this.getStringAttribute('creator_uin');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // jobs_count - computed: true, optional: false, required: false
  public get jobsCount() {
    return this.getNumberAttribute('jobs_count');
  }

  // owner_uin - computed: true, optional: false, required: false
  public get ownerUin() {
    return this.getStringAttribute('owner_uin');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // role_auth - computed: true, optional: false, required: false
  private _roleAuth = new DataTencentcloudOceanusWorkSpacesWorkSpaceSetItemRoleAuthList(this, "role_auth", false);
  public get roleAuth() {
    return this._roleAuth;
  }

  // role_auth_count - computed: true, optional: false, required: false
  public get roleAuthCount() {
    return this.getNumberAttribute('role_auth_count');
  }

  // serial_id - computed: true, optional: false, required: false
  public get serialId() {
    return this.getStringAttribute('serial_id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // work_space_id - computed: true, optional: false, required: false
  public get workSpaceId() {
    return this.getStringAttribute('work_space_id');
  }

  // work_space_name - computed: true, optional: false, required: false
  public get workSpaceName() {
    return this.getStringAttribute('work_space_name');
  }
}

export class DataTencentcloudOceanusWorkSpacesWorkSpaceSetItemList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudOceanusWorkSpacesWorkSpaceSetItemOutputReference {
    return new DataTencentcloudOceanusWorkSpacesWorkSpaceSetItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudOceanusWorkSpacesFilters {
  /**
  * Field to be filtered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/oceanus_work_spaces#name DataTencentcloudOceanusWorkSpaces#name}
  */
  readonly name: string;
  /**
  * Filter values for the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/oceanus_work_spaces#values DataTencentcloudOceanusWorkSpaces#values}
  */
  readonly values: string[];
}

export function dataTencentcloudOceanusWorkSpacesFiltersToTerraform(struct?: DataTencentcloudOceanusWorkSpacesFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataTencentcloudOceanusWorkSpacesFiltersToHclTerraform(struct?: DataTencentcloudOceanusWorkSpacesFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTencentcloudOceanusWorkSpacesFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudOceanusWorkSpacesFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudOceanusWorkSpacesFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._values = value.values;
    }
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataTencentcloudOceanusWorkSpacesFiltersList extends cdktf.ComplexList {
  public internalValue? : DataTencentcloudOceanusWorkSpacesFilters[] | cdktf.IResolvable

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
  public get(index: number): DataTencentcloudOceanusWorkSpacesFiltersOutputReference {
    return new DataTencentcloudOceanusWorkSpacesFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/oceanus_work_spaces tencentcloud_oceanus_work_spaces}
*/
export class DataTencentcloudOceanusWorkSpaces extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_oceanus_work_spaces";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudOceanusWorkSpaces resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudOceanusWorkSpaces to import
  * @param importFromId The id of the existing DataTencentcloudOceanusWorkSpaces that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/oceanus_work_spaces#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudOceanusWorkSpaces to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_oceanus_work_spaces", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/oceanus_work_spaces tencentcloud_oceanus_work_spaces} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudOceanusWorkSpacesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudOceanusWorkSpacesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_oceanus_work_spaces',
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
    this._id = config.id;
    this._orderType = config.orderType;
    this._resultOutputFile = config.resultOutputFile;
    this._filters.internalValue = config.filters;
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

  // order_type - computed: false, optional: true, required: false
  private _orderType?: number; 
  public get orderType() {
    return this.getNumberAttribute('order_type');
  }
  public set orderType(value: number) {
    this._orderType = value;
  }
  public resetOrderType() {
    this._orderType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderTypeInput() {
    return this._orderType;
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

  // work_space_set_item - computed: true, optional: false, required: false
  private _workSpaceSetItem = new DataTencentcloudOceanusWorkSpacesWorkSpaceSetItemList(this, "work_space_set_item", false);
  public get workSpaceSetItem() {
    return this._workSpaceSetItem;
  }

  // filters - computed: false, optional: true, required: false
  private _filters = new DataTencentcloudOceanusWorkSpacesFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: DataTencentcloudOceanusWorkSpacesFilters[] | cdktf.IResolvable) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      order_type: cdktf.numberToTerraform(this._orderType),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      filters: cdktf.listMapper(dataTencentcloudOceanusWorkSpacesFiltersToTerraform, true)(this._filters.internalValue),
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
      order_type: {
        value: cdktf.numberToHclTerraform(this._orderType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filters: {
        value: cdktf.listMapperHcl(dataTencentcloudOceanusWorkSpacesFiltersToHclTerraform, true)(this._filters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataTencentcloudOceanusWorkSpacesFiltersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
