// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/bh_devices
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudBhDevicesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Cloud account ID to which the asset belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/bh_devices#account_id_set DataTencentcloudBhDevices#account_id_set}
  */
  readonly accountIdSet?: number[];
  /**
  * Region code collection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/bh_devices#ap_code_set DataTencentcloudBhDevices#ap_code_set}
  */
  readonly apCodeSet?: string[];
  /**
  * User ID collection with access to this asset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/bh_devices#authorized_user_id_set DataTencentcloudBhDevices#authorized_user_id_set}
  */
  readonly authorizedUserIdSet?: number[];
  /**
  * Synchronized cloud asset status, marking the status of synchronized assets, 0 - deleted, 1 - normal, 2 - isolated, 3 - expired.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/bh_devices#cloud_device_status_set DataTencentcloudBhDevices#cloud_device_status_set}
  */
  readonly cloudDeviceStatusSet?: number[];
  /**
  * Filter condition, can filter by department ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/bh_devices#department_id DataTencentcloudBhDevices#department_id}
  */
  readonly departmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/bh_devices#id DataTencentcloudBhDevices#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Asset ID collection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/bh_devices#id_set DataTencentcloudBhDevices#id_set}
  */
  readonly idSet?: number[];
  /**
  * Not currently used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/bh_devices#ip DataTencentcloudBhDevices#ip}
  */
  readonly ip?: string;
  /**
  * Operating system type, 1 - Linux, 2 - Windows, 3 - MySQL, 4 - SQLServer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/bh_devices#kind DataTencentcloudBhDevices#kind}
  */
  readonly kind?: number;
  /**
  * Can filter by multiple types, 1 - Linux, 2 - Windows, 3 - MySQL, 4 - SQLServer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/bh_devices#kind_set DataTencentcloudBhDevices#kind_set}
  */
  readonly kindSet?: number[];
  /**
  * Whether the asset contains managed accounts. 1, contains; 0, does not contain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/bh_devices#managed_account DataTencentcloudBhDevices#managed_account}
  */
  readonly managedAccount?: string;
  /**
  * Asset name or asset IP, fuzzy search.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/bh_devices#name DataTencentcloudBhDevices#name}
  */
  readonly name?: string;
  /**
  * Cloud provider type, 1 - Tencent Cloud, 2 - Alibaba Cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/bh_devices#provider_type_set DataTencentcloudBhDevices#provider_type_set}
  */
  readonly providerTypeSet?: number[];
  /**
  * Filter condition, asset-bound bastion host service ID collection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/bh_devices#resource_id_set DataTencentcloudBhDevices#resource_id_set}
  */
  readonly resourceIdSet?: string[];
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/bh_devices#result_output_file DataTencentcloudBhDevices#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/bh_devices#filters DataTencentcloudBhDevices#filters}
  */
  readonly filters?: DataTencentcloudBhDevicesFilters[] | cdktf.IResolvable;
  /**
  * tag_filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/bh_devices#tag_filters DataTencentcloudBhDevices#tag_filters}
  */
  readonly tagFilters?: DataTencentcloudBhDevicesTagFilters[] | cdktf.IResolvable;
}
export interface DataTencentcloudBhDevicesDeviceSetDepartmentManagerUsers {
}

export function dataTencentcloudBhDevicesDeviceSetDepartmentManagerUsersToTerraform(struct?: DataTencentcloudBhDevicesDeviceSetDepartmentManagerUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudBhDevicesDeviceSetDepartmentManagerUsersToHclTerraform(struct?: DataTencentcloudBhDevicesDeviceSetDepartmentManagerUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudBhDevicesDeviceSetDepartmentManagerUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudBhDevicesDeviceSetDepartmentManagerUsers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudBhDevicesDeviceSetDepartmentManagerUsers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // manager_id - computed: true, optional: false, required: false
  public get managerId() {
    return this.getStringAttribute('manager_id');
  }

  // manager_name - computed: true, optional: false, required: false
  public get managerName() {
    return this.getStringAttribute('manager_name');
  }
}

export class DataTencentcloudBhDevicesDeviceSetDepartmentManagerUsersList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudBhDevicesDeviceSetDepartmentManagerUsersOutputReference {
    return new DataTencentcloudBhDevicesDeviceSetDepartmentManagerUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudBhDevicesDeviceSetDepartment {
}

export function dataTencentcloudBhDevicesDeviceSetDepartmentToTerraform(struct?: DataTencentcloudBhDevicesDeviceSetDepartment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudBhDevicesDeviceSetDepartmentToHclTerraform(struct?: DataTencentcloudBhDevicesDeviceSetDepartment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudBhDevicesDeviceSetDepartmentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudBhDevicesDeviceSetDepartment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudBhDevicesDeviceSetDepartment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // manager_users - computed: true, optional: false, required: false
  private _managerUsers = new DataTencentcloudBhDevicesDeviceSetDepartmentManagerUsersList(this, "manager_users", false);
  public get managerUsers() {
    return this._managerUsers;
  }

  // managers - computed: true, optional: false, required: false
  public get managers() {
    return cdktf.Fn.tolist(this.getListAttribute('managers'));
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataTencentcloudBhDevicesDeviceSetDepartmentList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudBhDevicesDeviceSetDepartmentOutputReference {
    return new DataTencentcloudBhDevicesDeviceSetDepartmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudBhDevicesDeviceSetGroupSetDepartmentManagerUsers {
}

export function dataTencentcloudBhDevicesDeviceSetGroupSetDepartmentManagerUsersToTerraform(struct?: DataTencentcloudBhDevicesDeviceSetGroupSetDepartmentManagerUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudBhDevicesDeviceSetGroupSetDepartmentManagerUsersToHclTerraform(struct?: DataTencentcloudBhDevicesDeviceSetGroupSetDepartmentManagerUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudBhDevicesDeviceSetGroupSetDepartmentManagerUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudBhDevicesDeviceSetGroupSetDepartmentManagerUsers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudBhDevicesDeviceSetGroupSetDepartmentManagerUsers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // manager_id - computed: true, optional: false, required: false
  public get managerId() {
    return this.getStringAttribute('manager_id');
  }

  // manager_name - computed: true, optional: false, required: false
  public get managerName() {
    return this.getStringAttribute('manager_name');
  }
}

export class DataTencentcloudBhDevicesDeviceSetGroupSetDepartmentManagerUsersList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudBhDevicesDeviceSetGroupSetDepartmentManagerUsersOutputReference {
    return new DataTencentcloudBhDevicesDeviceSetGroupSetDepartmentManagerUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudBhDevicesDeviceSetGroupSetDepartment {
}

export function dataTencentcloudBhDevicesDeviceSetGroupSetDepartmentToTerraform(struct?: DataTencentcloudBhDevicesDeviceSetGroupSetDepartment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudBhDevicesDeviceSetGroupSetDepartmentToHclTerraform(struct?: DataTencentcloudBhDevicesDeviceSetGroupSetDepartment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudBhDevicesDeviceSetGroupSetDepartmentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudBhDevicesDeviceSetGroupSetDepartment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudBhDevicesDeviceSetGroupSetDepartment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // manager_users - computed: true, optional: false, required: false
  private _managerUsers = new DataTencentcloudBhDevicesDeviceSetGroupSetDepartmentManagerUsersList(this, "manager_users", false);
  public get managerUsers() {
    return this._managerUsers;
  }

  // managers - computed: true, optional: false, required: false
  public get managers() {
    return cdktf.Fn.tolist(this.getListAttribute('managers'));
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataTencentcloudBhDevicesDeviceSetGroupSetDepartmentList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudBhDevicesDeviceSetGroupSetDepartmentOutputReference {
    return new DataTencentcloudBhDevicesDeviceSetGroupSetDepartmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudBhDevicesDeviceSetGroupSet {
}

export function dataTencentcloudBhDevicesDeviceSetGroupSetToTerraform(struct?: DataTencentcloudBhDevicesDeviceSetGroupSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudBhDevicesDeviceSetGroupSetToHclTerraform(struct?: DataTencentcloudBhDevicesDeviceSetGroupSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudBhDevicesDeviceSetGroupSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudBhDevicesDeviceSetGroupSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudBhDevicesDeviceSetGroupSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }

  // department - computed: true, optional: false, required: false
  private _department = new DataTencentcloudBhDevicesDeviceSetGroupSetDepartmentList(this, "department", false);
  public get department() {
    return this._department;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataTencentcloudBhDevicesDeviceSetGroupSetList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudBhDevicesDeviceSetGroupSetOutputReference {
    return new DataTencentcloudBhDevicesDeviceSetGroupSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudBhDevicesDeviceSetResourceClbSet {
}

export function dataTencentcloudBhDevicesDeviceSetResourceClbSetToTerraform(struct?: DataTencentcloudBhDevicesDeviceSetResourceClbSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudBhDevicesDeviceSetResourceClbSetToHclTerraform(struct?: DataTencentcloudBhDevicesDeviceSetResourceClbSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudBhDevicesDeviceSetResourceClbSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudBhDevicesDeviceSetResourceClbSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudBhDevicesDeviceSetResourceClbSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // clb_ip - computed: true, optional: false, required: false
  public get clbIp() {
    return this.getStringAttribute('clb_ip');
  }
}

export class DataTencentcloudBhDevicesDeviceSetResourceClbSetList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudBhDevicesDeviceSetResourceClbSetOutputReference {
    return new DataTencentcloudBhDevicesDeviceSetResourceClbSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudBhDevicesDeviceSetResource {
}

export function dataTencentcloudBhDevicesDeviceSetResourceToTerraform(struct?: DataTencentcloudBhDevicesDeviceSetResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudBhDevicesDeviceSetResourceToHclTerraform(struct?: DataTencentcloudBhDevicesDeviceSetResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudBhDevicesDeviceSetResourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudBhDevicesDeviceSetResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudBhDevicesDeviceSetResource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ap_code - computed: true, optional: false, required: false
  public get apCode() {
    return this.getStringAttribute('ap_code');
  }

  // cdc_cluster_id - computed: true, optional: false, required: false
  public get cdcClusterId() {
    return this.getStringAttribute('cdc_cluster_id');
  }

  // cidr_block - computed: true, optional: false, required: false
  public get cidrBlock() {
    return this.getStringAttribute('cidr_block');
  }

  // clb_set - computed: true, optional: false, required: false
  private _clbSet = new DataTencentcloudBhDevicesDeviceSetResourceClbSetList(this, "clb_set", false);
  public get clbSet() {
    return this._clbSet;
  }

  // client_access - computed: true, optional: false, required: false
  public get clientAccess() {
    return this.getNumberAttribute('client_access');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // deploy_model - computed: true, optional: false, required: false
  public get deployModel() {
    return this.getNumberAttribute('deploy_model');
  }

  // deployed - computed: true, optional: false, required: false
  public get deployed() {
    return this.getBooleanAttribute('deployed');
  }

  // domain_count - computed: true, optional: false, required: false
  public get domainCount() {
    return this.getNumberAttribute('domain_count');
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // expire_time - computed: true, optional: false, required: false
  public get expireTime() {
    return this.getStringAttribute('expire_time');
  }

  // expired - computed: true, optional: false, required: false
  public get expired() {
    return this.getBooleanAttribute('expired');
  }

  // extend_points - computed: true, optional: false, required: false
  public get extendPoints() {
    return this.getNumberAttribute('extend_points');
  }

  // external_access - computed: true, optional: false, required: false
  public get externalAccess() {
    return this.getNumberAttribute('external_access');
  }

  // intranet_access - computed: true, optional: false, required: false
  public get intranetAccess() {
    return this.getNumberAttribute('intranet_access');
  }

  // intranet_private_ip_set - computed: true, optional: false, required: false
  public get intranetPrivateIpSet() {
    return cdktf.Fn.tolist(this.getListAttribute('intranet_private_ip_set'));
  }

  // intranet_subnet_id - computed: true, optional: false, required: false
  public get intranetSubnetId() {
    return this.getStringAttribute('intranet_subnet_id');
  }

  // intranet_vpc_cidr - computed: true, optional: false, required: false
  public get intranetVpcCidr() {
    return this.getStringAttribute('intranet_vpc_cidr');
  }

  // intranet_vpc_id - computed: true, optional: false, required: false
  public get intranetVpcId() {
    return this.getStringAttribute('intranet_vpc_id');
  }

  // ioa_resource - computed: true, optional: false, required: false
  public get ioaResource() {
    return this.getNumberAttribute('ioa_resource');
  }

  // ioa_resource_id - computed: true, optional: false, required: false
  public get ioaResourceId() {
    return this.getStringAttribute('ioa_resource_id');
  }

  // lb_vip_isp - computed: true, optional: false, required: false
  public get lbVipIsp() {
    return this.getStringAttribute('lb_vip_isp');
  }

  // log_delivery - computed: true, optional: false, required: false
  public get logDelivery() {
    return this.getStringAttribute('log_delivery');
  }

  // log_delivery_args - computed: true, optional: false, required: false
  public get logDeliveryArgs() {
    return this.getStringAttribute('log_delivery_args');
  }

  // module_set - computed: true, optional: false, required: false
  public get moduleSet() {
    return cdktf.Fn.tolist(this.getListAttribute('module_set'));
  }

  // nodes - computed: true, optional: false, required: false
  public get nodes() {
    return this.getNumberAttribute('nodes');
  }

  // open_clb_id - computed: true, optional: false, required: false
  public get openClbId() {
    return this.getStringAttribute('open_clb_id');
  }

  // package_bandwidth - computed: true, optional: false, required: false
  public get packageBandwidth() {
    return this.getNumberAttribute('package_bandwidth');
  }

  // package_ioa_bandwidth - computed: true, optional: false, required: false
  public get packageIoaBandwidth() {
    return this.getNumberAttribute('package_ioa_bandwidth');
  }

  // package_ioa_user_count - computed: true, optional: false, required: false
  public get packageIoaUserCount() {
    return this.getNumberAttribute('package_ioa_user_count');
  }

  // package_node - computed: true, optional: false, required: false
  public get packageNode() {
    return this.getNumberAttribute('package_node');
  }

  // pid - computed: true, optional: false, required: false
  public get pid() {
    return this.getNumberAttribute('pid');
  }

  // private_ip_set - computed: true, optional: false, required: false
  public get privateIpSet() {
    return cdktf.Fn.tolist(this.getListAttribute('private_ip_set'));
  }

  // product_code - computed: true, optional: false, required: false
  public get productCode() {
    return this.getStringAttribute('product_code');
  }

  // public_ip_set - computed: true, optional: false, required: false
  public get publicIpSet() {
    return cdktf.Fn.tolist(this.getListAttribute('public_ip_set'));
  }

  // renew_flag - computed: true, optional: false, required: false
  public get renewFlag() {
    return this.getNumberAttribute('renew_flag');
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // resource_name - computed: true, optional: false, required: false
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }

  // share_clb - computed: true, optional: false, required: false
  public get shareClb() {
    return this.getBooleanAttribute('share_clb');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // sub_product_code - computed: true, optional: false, required: false
  public get subProductCode() {
    return this.getStringAttribute('sub_product_code');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // subnet_name - computed: true, optional: false, required: false
  public get subnetName() {
    return this.getStringAttribute('subnet_name');
  }

  // sv_args - computed: true, optional: false, required: false
  public get svArgs() {
    return this.getStringAttribute('sv_args');
  }

  // trial - computed: true, optional: false, required: false
  public get trial() {
    return this.getNumberAttribute('trial');
  }

  // tui_cmd_port - computed: true, optional: false, required: false
  public get tuiCmdPort() {
    return this.getNumberAttribute('tui_cmd_port');
  }

  // tui_direct_port - computed: true, optional: false, required: false
  public get tuiDirectPort() {
    return this.getNumberAttribute('tui_direct_port');
  }

  // used_domain_count - computed: true, optional: false, required: false
  public get usedDomainCount() {
    return this.getNumberAttribute('used_domain_count');
  }

  // used_nodes - computed: true, optional: false, required: false
  public get usedNodes() {
    return this.getNumberAttribute('used_nodes');
  }

  // vpc_cidr_block - computed: true, optional: false, required: false
  public get vpcCidrBlock() {
    return this.getStringAttribute('vpc_cidr_block');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // vpc_name - computed: true, optional: false, required: false
  public get vpcName() {
    return this.getStringAttribute('vpc_name');
  }

  // web_access - computed: true, optional: false, required: false
  public get webAccess() {
    return this.getNumberAttribute('web_access');
  }

  // zone - computed: true, optional: false, required: false
  public get zone() {
    return this.getStringAttribute('zone');
  }
}

export class DataTencentcloudBhDevicesDeviceSetResourceList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudBhDevicesDeviceSetResourceOutputReference {
    return new DataTencentcloudBhDevicesDeviceSetResourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudBhDevicesDeviceSet {
}

export function dataTencentcloudBhDevicesDeviceSetToTerraform(struct?: DataTencentcloudBhDevicesDeviceSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudBhDevicesDeviceSetToHclTerraform(struct?: DataTencentcloudBhDevicesDeviceSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudBhDevicesDeviceSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudBhDevicesDeviceSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudBhDevicesDeviceSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_count - computed: true, optional: false, required: false
  public get accountCount() {
    return this.getNumberAttribute('account_count');
  }

  // ap_code - computed: true, optional: false, required: false
  public get apCode() {
    return this.getStringAttribute('ap_code');
  }

  // ap_name - computed: true, optional: false, required: false
  public get apName() {
    return this.getStringAttribute('ap_name');
  }

  // cloud_account_id - computed: true, optional: false, required: false
  public get cloudAccountId() {
    return this.getNumberAttribute('cloud_account_id');
  }

  // cloud_account_name - computed: true, optional: false, required: false
  public get cloudAccountName() {
    return this.getStringAttribute('cloud_account_name');
  }

  // department - computed: true, optional: false, required: false
  private _department = new DataTencentcloudBhDevicesDeviceSetDepartmentList(this, "department", false);
  public get department() {
    return this._department;
  }

  // domain_id - computed: true, optional: false, required: false
  public get domainId() {
    return this.getStringAttribute('domain_id');
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // enable_ssl - computed: true, optional: false, required: false
  public get enableSsl() {
    return this.getNumberAttribute('enable_ssl');
  }

  // group_set - computed: true, optional: false, required: false
  private _groupSet = new DataTencentcloudBhDevicesDeviceSetGroupSetList(this, "group_set", false);
  public get groupSet() {
    return this._groupSet;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // ioa_id - computed: true, optional: false, required: false
  public get ioaId() {
    return this.getNumberAttribute('ioa_id');
  }

  // ip_port_set - computed: true, optional: false, required: false
  public get ipPortSet() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_port_set'));
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getNumberAttribute('kind');
  }

  // manage_account_id - computed: true, optional: false, required: false
  public get manageAccountId() {
    return this.getNumberAttribute('manage_account_id');
  }

  // manage_dimension - computed: true, optional: false, required: false
  public get manageDimension() {
    return this.getNumberAttribute('manage_dimension');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // os_name - computed: true, optional: false, required: false
  public get osName() {
    return this.getStringAttribute('os_name');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // private_ip - computed: true, optional: false, required: false
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }

  // provider_name - computed: true, optional: false, required: false
  public get providerName() {
    return this.getStringAttribute('provider_name');
  }

  // provider_type - computed: true, optional: false, required: false
  public get providerType() {
    return this.getNumberAttribute('provider_type');
  }

  // public_ip - computed: true, optional: false, required: false
  public get publicIp() {
    return this.getStringAttribute('public_ip');
  }

  // resource - computed: true, optional: false, required: false
  private _resource = new DataTencentcloudBhDevicesDeviceSetResourceList(this, "resource", false);
  public get resource() {
    return this._resource;
  }

  // ssl_cert_name - computed: true, optional: false, required: false
  public get sslCertName() {
    return this.getStringAttribute('ssl_cert_name');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // sync_cloud_device_status - computed: true, optional: false, required: false
  public get syncCloudDeviceStatus() {
    return this.getNumberAttribute('sync_cloud_device_status');
  }

  // sync_pod_count - computed: true, optional: false, required: false
  public get syncPodCount() {
    return this.getNumberAttribute('sync_pod_count');
  }

  // total_pod_count - computed: true, optional: false, required: false
  public get totalPodCount() {
    return this.getNumberAttribute('total_pod_count');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // workload - computed: true, optional: false, required: false
  public get workload() {
    return this.getStringAttribute('workload');
  }
}

export class DataTencentcloudBhDevicesDeviceSetList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudBhDevicesDeviceSetOutputReference {
    return new DataTencentcloudBhDevicesDeviceSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudBhDevicesFilters {
  /**
  * Field to filter. Support: BindingStatus, InstanceId, DeviceAccount, VpcId, DomainId, ResourceId, Name, Ip, ManageDimension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/bh_devices#name DataTencentcloudBhDevices#name}
  */
  readonly name: string;
  /**
  * Filter values for the field. 
  * If multiple Filters exist, the relationship between Filters is logical AND. 
  * If multiple Values exist for the same Filter, the relationship between Values under the same Filter is logical OR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/bh_devices#values DataTencentcloudBhDevices#values}
  */
  readonly values: string[];
}

export function dataTencentcloudBhDevicesFiltersToTerraform(struct?: DataTencentcloudBhDevicesFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataTencentcloudBhDevicesFiltersToHclTerraform(struct?: DataTencentcloudBhDevicesFilters | cdktf.IResolvable): any {
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

export class DataTencentcloudBhDevicesFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudBhDevicesFilters | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataTencentcloudBhDevicesFilters | cdktf.IResolvable | undefined) {
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

export class DataTencentcloudBhDevicesFiltersList extends cdktf.ComplexList {
  public internalValue? : DataTencentcloudBhDevicesFilters[] | cdktf.IResolvable

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
  public get(index: number): DataTencentcloudBhDevicesFiltersOutputReference {
    return new DataTencentcloudBhDevicesFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudBhDevicesTagFilters {
  /**
  * Tag key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/bh_devices#tag_key DataTencentcloudBhDevices#tag_key}
  */
  readonly tagKey: string;
  /**
  * Tag value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/bh_devices#tag_value DataTencentcloudBhDevices#tag_value}
  */
  readonly tagValue?: string[];
}

export function dataTencentcloudBhDevicesTagFiltersToTerraform(struct?: DataTencentcloudBhDevicesTagFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tag_key: cdktf.stringToTerraform(struct!.tagKey),
    tag_value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tagValue),
  }
}


export function dataTencentcloudBhDevicesTagFiltersToHclTerraform(struct?: DataTencentcloudBhDevicesTagFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tag_key: {
      value: cdktf.stringToHclTerraform(struct!.tagKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_value: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tagValue),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTencentcloudBhDevicesTagFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudBhDevicesTagFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tagKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagKey = this._tagKey;
    }
    if (this._tagValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagValue = this._tagValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudBhDevicesTagFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tagKey = undefined;
      this._tagValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tagKey = value.tagKey;
      this._tagValue = value.tagValue;
    }
  }

  // tag_key - computed: false, optional: false, required: true
  private _tagKey?: string; 
  public get tagKey() {
    return this.getStringAttribute('tag_key');
  }
  public set tagKey(value: string) {
    this._tagKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagKeyInput() {
    return this._tagKey;
  }

  // tag_value - computed: false, optional: true, required: false
  private _tagValue?: string[]; 
  public get tagValue() {
    return cdktf.Fn.tolist(this.getListAttribute('tag_value'));
  }
  public set tagValue(value: string[]) {
    this._tagValue = value;
  }
  public resetTagValue() {
    this._tagValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagValueInput() {
    return this._tagValue;
  }
}

export class DataTencentcloudBhDevicesTagFiltersList extends cdktf.ComplexList {
  public internalValue? : DataTencentcloudBhDevicesTagFilters[] | cdktf.IResolvable

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
  public get(index: number): DataTencentcloudBhDevicesTagFiltersOutputReference {
    return new DataTencentcloudBhDevicesTagFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/bh_devices tencentcloud_bh_devices}
*/
export class DataTencentcloudBhDevices extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_bh_devices";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudBhDevices resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudBhDevices to import
  * @param importFromId The id of the existing DataTencentcloudBhDevices that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/bh_devices#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudBhDevices to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_bh_devices", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/bh_devices tencentcloud_bh_devices} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudBhDevicesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudBhDevicesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_bh_devices',
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
    this._accountIdSet = config.accountIdSet;
    this._apCodeSet = config.apCodeSet;
    this._authorizedUserIdSet = config.authorizedUserIdSet;
    this._cloudDeviceStatusSet = config.cloudDeviceStatusSet;
    this._departmentId = config.departmentId;
    this._id = config.id;
    this._idSet = config.idSet;
    this._ip = config.ip;
    this._kind = config.kind;
    this._kindSet = config.kindSet;
    this._managedAccount = config.managedAccount;
    this._name = config.name;
    this._providerTypeSet = config.providerTypeSet;
    this._resourceIdSet = config.resourceIdSet;
    this._resultOutputFile = config.resultOutputFile;
    this._filters.internalValue = config.filters;
    this._tagFilters.internalValue = config.tagFilters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id_set - computed: false, optional: true, required: false
  private _accountIdSet?: number[]; 
  public get accountIdSet() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('account_id_set')));
  }
  public set accountIdSet(value: number[]) {
    this._accountIdSet = value;
  }
  public resetAccountIdSet() {
    this._accountIdSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdSetInput() {
    return this._accountIdSet;
  }

  // ap_code_set - computed: false, optional: true, required: false
  private _apCodeSet?: string[]; 
  public get apCodeSet() {
    return cdktf.Fn.tolist(this.getListAttribute('ap_code_set'));
  }
  public set apCodeSet(value: string[]) {
    this._apCodeSet = value;
  }
  public resetApCodeSet() {
    this._apCodeSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apCodeSetInput() {
    return this._apCodeSet;
  }

  // authorized_user_id_set - computed: false, optional: true, required: false
  private _authorizedUserIdSet?: number[]; 
  public get authorizedUserIdSet() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('authorized_user_id_set')));
  }
  public set authorizedUserIdSet(value: number[]) {
    this._authorizedUserIdSet = value;
  }
  public resetAuthorizedUserIdSet() {
    this._authorizedUserIdSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizedUserIdSetInput() {
    return this._authorizedUserIdSet;
  }

  // cloud_device_status_set - computed: false, optional: true, required: false
  private _cloudDeviceStatusSet?: number[]; 
  public get cloudDeviceStatusSet() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('cloud_device_status_set')));
  }
  public set cloudDeviceStatusSet(value: number[]) {
    this._cloudDeviceStatusSet = value;
  }
  public resetCloudDeviceStatusSet() {
    this._cloudDeviceStatusSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudDeviceStatusSetInput() {
    return this._cloudDeviceStatusSet;
  }

  // department_id - computed: false, optional: true, required: false
  private _departmentId?: string; 
  public get departmentId() {
    return this.getStringAttribute('department_id');
  }
  public set departmentId(value: string) {
    this._departmentId = value;
  }
  public resetDepartmentId() {
    this._departmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get departmentIdInput() {
    return this._departmentId;
  }

  // device_set - computed: true, optional: false, required: false
  private _deviceSet = new DataTencentcloudBhDevicesDeviceSetList(this, "device_set", false);
  public get deviceSet() {
    return this._deviceSet;
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

  // id_set - computed: false, optional: true, required: false
  private _idSet?: number[]; 
  public get idSet() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('id_set')));
  }
  public set idSet(value: number[]) {
    this._idSet = value;
  }
  public resetIdSet() {
    this._idSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idSetInput() {
    return this._idSet;
  }

  // ip - computed: false, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: number; 
  public get kind() {
    return this.getNumberAttribute('kind');
  }
  public set kind(value: number) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // kind_set - computed: false, optional: true, required: false
  private _kindSet?: number[]; 
  public get kindSet() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('kind_set')));
  }
  public set kindSet(value: number[]) {
    this._kindSet = value;
  }
  public resetKindSet() {
    this._kindSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindSetInput() {
    return this._kindSet;
  }

  // managed_account - computed: false, optional: true, required: false
  private _managedAccount?: string; 
  public get managedAccount() {
    return this.getStringAttribute('managed_account');
  }
  public set managedAccount(value: string) {
    this._managedAccount = value;
  }
  public resetManagedAccount() {
    this._managedAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedAccountInput() {
    return this._managedAccount;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // provider_type_set - computed: false, optional: true, required: false
  private _providerTypeSet?: number[]; 
  public get providerTypeSet() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('provider_type_set')));
  }
  public set providerTypeSet(value: number[]) {
    this._providerTypeSet = value;
  }
  public resetProviderTypeSet() {
    this._providerTypeSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerTypeSetInput() {
    return this._providerTypeSet;
  }

  // resource_id_set - computed: false, optional: true, required: false
  private _resourceIdSet?: string[]; 
  public get resourceIdSet() {
    return cdktf.Fn.tolist(this.getListAttribute('resource_id_set'));
  }
  public set resourceIdSet(value: string[]) {
    this._resourceIdSet = value;
  }
  public resetResourceIdSet() {
    this._resourceIdSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdSetInput() {
    return this._resourceIdSet;
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

  // filters - computed: false, optional: true, required: false
  private _filters = new DataTencentcloudBhDevicesFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: DataTencentcloudBhDevicesFilters[] | cdktf.IResolvable) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }

  // tag_filters - computed: false, optional: true, required: false
  private _tagFilters = new DataTencentcloudBhDevicesTagFiltersList(this, "tag_filters", false);
  public get tagFilters() {
    return this._tagFilters;
  }
  public putTagFilters(value: DataTencentcloudBhDevicesTagFilters[] | cdktf.IResolvable) {
    this._tagFilters.internalValue = value;
  }
  public resetTagFilters() {
    this._tagFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagFiltersInput() {
    return this._tagFilters.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id_set: cdktf.listMapper(cdktf.numberToTerraform, false)(this._accountIdSet),
      ap_code_set: cdktf.listMapper(cdktf.stringToTerraform, false)(this._apCodeSet),
      authorized_user_id_set: cdktf.listMapper(cdktf.numberToTerraform, false)(this._authorizedUserIdSet),
      cloud_device_status_set: cdktf.listMapper(cdktf.numberToTerraform, false)(this._cloudDeviceStatusSet),
      department_id: cdktf.stringToTerraform(this._departmentId),
      id: cdktf.stringToTerraform(this._id),
      id_set: cdktf.listMapper(cdktf.numberToTerraform, false)(this._idSet),
      ip: cdktf.stringToTerraform(this._ip),
      kind: cdktf.numberToTerraform(this._kind),
      kind_set: cdktf.listMapper(cdktf.numberToTerraform, false)(this._kindSet),
      managed_account: cdktf.stringToTerraform(this._managedAccount),
      name: cdktf.stringToTerraform(this._name),
      provider_type_set: cdktf.listMapper(cdktf.numberToTerraform, false)(this._providerTypeSet),
      resource_id_set: cdktf.listMapper(cdktf.stringToTerraform, false)(this._resourceIdSet),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      filters: cdktf.listMapper(dataTencentcloudBhDevicesFiltersToTerraform, true)(this._filters.internalValue),
      tag_filters: cdktf.listMapper(dataTencentcloudBhDevicesTagFiltersToTerraform, true)(this._tagFilters.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id_set: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._accountIdSet),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      ap_code_set: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._apCodeSet),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      authorized_user_id_set: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._authorizedUserIdSet),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      cloud_device_status_set: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._cloudDeviceStatusSet),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      department_id: {
        value: cdktf.stringToHclTerraform(this._departmentId),
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
      id_set: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._idSet),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      ip: {
        value: cdktf.stringToHclTerraform(this._ip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kind: {
        value: cdktf.numberToHclTerraform(this._kind),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      kind_set: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._kindSet),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      managed_account: {
        value: cdktf.stringToHclTerraform(this._managedAccount),
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
      provider_type_set: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._providerTypeSet),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      resource_id_set: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._resourceIdSet),
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
      filters: {
        value: cdktf.listMapperHcl(dataTencentcloudBhDevicesFiltersToHclTerraform, true)(this._filters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataTencentcloudBhDevicesFiltersList",
      },
      tag_filters: {
        value: cdktf.listMapperHcl(dataTencentcloudBhDevicesTagFiltersToHclTerraform, true)(this._tagFilters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataTencentcloudBhDevicesTagFiltersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
