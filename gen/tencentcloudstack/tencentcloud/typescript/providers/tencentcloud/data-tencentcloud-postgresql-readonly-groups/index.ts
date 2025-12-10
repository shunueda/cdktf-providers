// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/postgresql_readonly_groups
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudPostgresqlReadonlyGroupsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/postgresql_readonly_groups#id DataTencentcloudPostgresqlReadonlyGroups#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Sorting criterion. Valid values:ROGroupId, CreateTime, Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/postgresql_readonly_groups#order_by DataTencentcloudPostgresqlReadonlyGroups#order_by}
  */
  readonly orderBy?: string;
  /**
  * Sorting order. Valid values:desc, asc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/postgresql_readonly_groups#order_by_type DataTencentcloudPostgresqlReadonlyGroups#order_by_type}
  */
  readonly orderByType?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/postgresql_readonly_groups#result_output_file DataTencentcloudPostgresqlReadonlyGroups#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/postgresql_readonly_groups#filters DataTencentcloudPostgresqlReadonlyGroups#filters}
  */
  readonly filters?: DataTencentcloudPostgresqlReadonlyGroupsFilters[] | cdktf.IResolvable;
}
export interface DataTencentcloudPostgresqlReadonlyGroupsReadOnlyGroupListDbInstanceNetInfo {
}

export function dataTencentcloudPostgresqlReadonlyGroupsReadOnlyGroupListDbInstanceNetInfoToTerraform(struct?: DataTencentcloudPostgresqlReadonlyGroupsReadOnlyGroupListDbInstanceNetInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudPostgresqlReadonlyGroupsReadOnlyGroupListDbInstanceNetInfoToHclTerraform(struct?: DataTencentcloudPostgresqlReadonlyGroupsReadOnlyGroupListDbInstanceNetInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudPostgresqlReadonlyGroupsReadOnlyGroupListDbInstanceNetInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudPostgresqlReadonlyGroupsReadOnlyGroupListDbInstanceNetInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudPostgresqlReadonlyGroupsReadOnlyGroupListDbInstanceNetInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // net_type - computed: true, optional: false, required: false
  public get netType() {
    return this.getStringAttribute('net_type');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // protocol_type - computed: true, optional: false, required: false
  public get protocolType() {
    return this.getStringAttribute('protocol_type');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
}

export class DataTencentcloudPostgresqlReadonlyGroupsReadOnlyGroupListDbInstanceNetInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudPostgresqlReadonlyGroupsReadOnlyGroupListDbInstanceNetInfoOutputReference {
    return new DataTencentcloudPostgresqlReadonlyGroupsReadOnlyGroupListDbInstanceNetInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudPostgresqlReadonlyGroupsReadOnlyGroupListNetworkAccessListStruct {
}

export function dataTencentcloudPostgresqlReadonlyGroupsReadOnlyGroupListNetworkAccessListStructToTerraform(struct?: DataTencentcloudPostgresqlReadonlyGroupsReadOnlyGroupListNetworkAccessListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudPostgresqlReadonlyGroupsReadOnlyGroupListNetworkAccessListStructToHclTerraform(struct?: DataTencentcloudPostgresqlReadonlyGroupsReadOnlyGroupListNetworkAccessListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudPostgresqlReadonlyGroupsReadOnlyGroupListNetworkAccessListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudPostgresqlReadonlyGroupsReadOnlyGroupListNetworkAccessListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudPostgresqlReadonlyGroupsReadOnlyGroupListNetworkAccessListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getNumberAttribute('resource_type');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // vip - computed: true, optional: false, required: false
  public get vip() {
    return this.getStringAttribute('vip');
  }

  // vip6 - computed: true, optional: false, required: false
  public get vip6() {
    return this.getStringAttribute('vip6');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // vpc_status - computed: true, optional: false, required: false
  public get vpcStatus() {
    return this.getNumberAttribute('vpc_status');
  }

  // vport - computed: true, optional: false, required: false
  public get vport() {
    return this.getNumberAttribute('vport');
  }
}

export class DataTencentcloudPostgresqlReadonlyGroupsReadOnlyGroupListNetworkAccessListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudPostgresqlReadonlyGroupsReadOnlyGroupListNetworkAccessListStructOutputReference {
    return new DataTencentcloudPostgresqlReadonlyGroupsReadOnlyGroupListNetworkAccessListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudPostgresqlReadonlyGroupsReadOnlyGroupListReadOnlyDbInstanceListDbInstanceNetInfo {
}

export function dataTencentcloudPostgresqlReadonlyGroupsReadOnlyGroupListReadOnlyDbInstanceListDbInstanceNetInfoToTerraform(struct?: DataTencentcloudPostgresqlReadonlyGroupsReadOnlyGroupListReadOnlyDbInstanceListDbInstanceNetInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudPostgresqlReadonlyGroupsReadOnlyGroupListReadOnlyDbInstanceListDbInstanceNetInfoToHclTerraform(struct?: DataTencentcloudPostgresqlReadonlyGroupsReadOnlyGroupListReadOnlyDbInstanceListDbInstanceNetInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudPostgresqlReadonlyGroupsReadOnlyGroupListReadOnlyDbInstanceListDbInstanceNetInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudPostgresqlReadonlyGroupsReadOnlyGroupListReadOnlyDbInstanceListDbInstanceNetInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudPostgresqlReadonlyGroupsReadOnlyGroupListReadOnlyDbInstanceListDbInstanceNetInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // net_type - computed: true, optional: false, required: false
  public get netType() {
    return this.getStringAttribute('net_type');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // protocol_type - computed: true, optional: false, required: false
  public get protocolType() {
    return this.getStringAttribute('protocol_type');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
}

export class DataTencentcloudPostgresqlReadonlyGroupsReadOnlyGroupListReadOnlyDbInstanceListDbInstanceNetInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudPostgresqlReadonlyGroupsReadOnlyGroupListReadOnlyDbInstanceListDbInstanceNetInfoOutputReference {
    return new DataTencentcloudPostgresqlReadonlyGroupsReadOnlyGroupListReadOnlyDbInstanceListDbInstanceNetInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudPostgresqlReadonlyGroupsReadOnlyGroupListReadOnlyDbInstanceListDbNodeSet {
}

export function dataTencentcloudPostgresqlReadonlyGroupsReadOnlyGroupListReadOnlyDbInstanceListDbNodeSetToTerraform(struct?: DataTencentcloudPostgresqlReadonlyGroupsReadOnlyGroupListReadOnlyDbInstanceListDbNodeSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudPostgresqlReadonlyGroupsReadOnlyGroupListReadOnlyDbInstanceListDbNodeSetToHclTerraform(struct?: DataTencentcloudPostgresqlReadonlyGroupsReadOnlyGroupListReadOnlyDbInstanceListDbNodeSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudPostgresqlReadonlyGroupsReadOnlyGroupListReadOnlyDbInstanceListDbNodeSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudPostgresqlReadonlyGroupsReadOnlyGroupListReadOnlyDbInstanceListDbNodeSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudPostgresqlReadonlyGroupsReadOnlyGroupListReadOnlyDbInstanceListDbNodeSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // zone - computed: true, optional: false, required: false
  public get zone() {
    return this.getStringAttribute('zone');
  }
}

export class DataTencentcloudPostgresqlReadonlyGroupsReadOnlyGroupListReadOnlyDbInstanceListDbNodeSetList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudPostgresqlReadonlyGroupsReadOnlyGroupListReadOnlyDbInstanceListDbNodeSetOutputReference {
    return new DataTencentcloudPostgresqlReadonlyGroupsReadOnlyGroupListReadOnlyDbInstanceListDbNodeSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudPostgresqlReadonlyGroupsReadOnlyGroupListReadOnlyDbInstanceListNetworkAccessListStruct {
}

export function dataTencentcloudPostgresqlReadonlyGroupsReadOnlyGroupListReadOnlyDbInstanceListNetworkAccessListStructToTerraform(struct?: DataTencentcloudPostgresqlReadonlyGroupsReadOnlyGroupListReadOnlyDbInstanceListNetworkAccessListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudPostgresqlReadonlyGroupsReadOnlyGroupListReadOnlyDbInstanceListNetworkAccessListStructToHclTerraform(struct?: DataTencentcloudPostgresqlReadonlyGroupsReadOnlyGroupListReadOnlyDbInstanceListNetworkAccessListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudPostgresqlReadonlyGroupsReadOnlyGroupListReadOnlyDbInstanceListNetworkAccessListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudPostgresqlReadonlyGroupsReadOnlyGroupListReadOnlyDbInstanceListNetworkAccessListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudPostgresqlReadonlyGroupsReadOnlyGroupListReadOnlyDbInstanceListNetworkAccessListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getNumberAttribute('resource_type');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // vip - computed: true, optional: false, required: false
  public get vip() {
    return this.getStringAttribute('vip');
  }

  // vip6 - computed: true, optional: false, required: false
  public get vip6() {
    return this.getStringAttribute('vip6');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // vpc_status - computed: true, optional: false, required: false
  public get vpcStatus() {
    return this.getNumberAttribute('vpc_status');
  }

  // vport - computed: true, optional: false, required: false
  public get vport() {
    return this.getNumberAttribute('vport');
  }
}

export class DataTencentcloudPostgresqlReadonlyGroupsReadOnlyGroupListReadOnlyDbInstanceListNetworkAccessListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudPostgresqlReadonlyGroupsReadOnlyGroupListReadOnlyDbInstanceListNetworkAccessListStructOutputReference {
    return new DataTencentcloudPostgresqlReadonlyGroupsReadOnlyGroupListReadOnlyDbInstanceListNetworkAccessListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudPostgresqlReadonlyGroupsReadOnlyGroupListReadOnlyDbInstanceListTagListStruct {
}

export function dataTencentcloudPostgresqlReadonlyGroupsReadOnlyGroupListReadOnlyDbInstanceListTagListStructToTerraform(struct?: DataTencentcloudPostgresqlReadonlyGroupsReadOnlyGroupListReadOnlyDbInstanceListTagListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudPostgresqlReadonlyGroupsReadOnlyGroupListReadOnlyDbInstanceListTagListStructToHclTerraform(struct?: DataTencentcloudPostgresqlReadonlyGroupsReadOnlyGroupListReadOnlyDbInstanceListTagListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudPostgresqlReadonlyGroupsReadOnlyGroupListReadOnlyDbInstanceListTagListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudPostgresqlReadonlyGroupsReadOnlyGroupListReadOnlyDbInstanceListTagListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudPostgresqlReadonlyGroupsReadOnlyGroupListReadOnlyDbInstanceListTagListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // tag_key - computed: true, optional: false, required: false
  public get tagKey() {
    return this.getStringAttribute('tag_key');
  }

  // tag_value - computed: true, optional: false, required: false
  public get tagValue() {
    return this.getStringAttribute('tag_value');
  }
}

export class DataTencentcloudPostgresqlReadonlyGroupsReadOnlyGroupListReadOnlyDbInstanceListTagListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudPostgresqlReadonlyGroupsReadOnlyGroupListReadOnlyDbInstanceListTagListStructOutputReference {
    return new DataTencentcloudPostgresqlReadonlyGroupsReadOnlyGroupListReadOnlyDbInstanceListTagListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudPostgresqlReadonlyGroupsReadOnlyGroupListReadOnlyDbInstanceListStruct {
}

export function dataTencentcloudPostgresqlReadonlyGroupsReadOnlyGroupListReadOnlyDbInstanceListStructToTerraform(struct?: DataTencentcloudPostgresqlReadonlyGroupsReadOnlyGroupListReadOnlyDbInstanceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudPostgresqlReadonlyGroupsReadOnlyGroupListReadOnlyDbInstanceListStructToHclTerraform(struct?: DataTencentcloudPostgresqlReadonlyGroupsReadOnlyGroupListReadOnlyDbInstanceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudPostgresqlReadonlyGroupsReadOnlyGroupListReadOnlyDbInstanceListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudPostgresqlReadonlyGroupsReadOnlyGroupListReadOnlyDbInstanceListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudPostgresqlReadonlyGroupsReadOnlyGroupListReadOnlyDbInstanceListStruct | undefined) {
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

  // auto_renew - computed: true, optional: false, required: false
  public get autoRenew() {
    return this.getNumberAttribute('auto_renew');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // db_charset - computed: true, optional: false, required: false
  public get dbCharset() {
    return this.getStringAttribute('db_charset');
  }

  // db_engine - computed: true, optional: false, required: false
  public get dbEngine() {
    return this.getStringAttribute('db_engine');
  }

  // db_engine_config - computed: true, optional: false, required: false
  public get dbEngineConfig() {
    return this.getStringAttribute('db_engine_config');
  }

  // db_instance_class - computed: true, optional: false, required: false
  public get dbInstanceClass() {
    return this.getStringAttribute('db_instance_class');
  }

  // db_instance_cpu - computed: true, optional: false, required: false
  public get dbInstanceCpu() {
    return this.getNumberAttribute('db_instance_cpu');
  }

  // db_instance_id - computed: true, optional: false, required: false
  public get dbInstanceId() {
    return this.getStringAttribute('db_instance_id');
  }

  // db_instance_memory - computed: true, optional: false, required: false
  public get dbInstanceMemory() {
    return this.getNumberAttribute('db_instance_memory');
  }

  // db_instance_name - computed: true, optional: false, required: false
  public get dbInstanceName() {
    return this.getStringAttribute('db_instance_name');
  }

  // db_instance_net_info - computed: true, optional: false, required: false
  private _dbInstanceNetInfo = new DataTencentcloudPostgresqlReadonlyGroupsReadOnlyGroupListReadOnlyDbInstanceListDbInstanceNetInfoList(this, "db_instance_net_info", false);
  public get dbInstanceNetInfo() {
    return this._dbInstanceNetInfo;
  }

  // db_instance_status - computed: true, optional: false, required: false
  public get dbInstanceStatus() {
    return this.getStringAttribute('db_instance_status');
  }

  // db_instance_storage - computed: true, optional: false, required: false
  public get dbInstanceStorage() {
    return this.getNumberAttribute('db_instance_storage');
  }

  // db_instance_type - computed: true, optional: false, required: false
  public get dbInstanceType() {
    return this.getStringAttribute('db_instance_type');
  }

  // db_instance_version - computed: true, optional: false, required: false
  public get dbInstanceVersion() {
    return this.getStringAttribute('db_instance_version');
  }

  // db_kernel_version - computed: true, optional: false, required: false
  public get dbKernelVersion() {
    return this.getStringAttribute('db_kernel_version');
  }

  // db_major_version - computed: true, optional: false, required: false
  public get dbMajorVersion() {
    return this.getStringAttribute('db_major_version');
  }

  // db_node_set - computed: true, optional: false, required: false
  private _dbNodeSet = new DataTencentcloudPostgresqlReadonlyGroupsReadOnlyGroupListReadOnlyDbInstanceListDbNodeSetList(this, "db_node_set", false);
  public get dbNodeSet() {
    return this._dbNodeSet;
  }

  // db_version - computed: true, optional: false, required: false
  public get dbVersion() {
    return this.getStringAttribute('db_version');
  }

  // expire_time - computed: true, optional: false, required: false
  public get expireTime() {
    return this.getStringAttribute('expire_time');
  }

  // is_support_t_d_e - computed: true, optional: false, required: false
  public get isSupportTDE() {
    return this.getNumberAttribute('is_support_t_d_e');
  }

  // isolated_time - computed: true, optional: false, required: false
  public get isolatedTime() {
    return this.getStringAttribute('isolated_time');
  }

  // master_db_instance_id - computed: true, optional: false, required: false
  public get masterDbInstanceId() {
    return this.getStringAttribute('master_db_instance_id');
  }

  // network_access_list - computed: true, optional: false, required: false
  private _networkAccessList = new DataTencentcloudPostgresqlReadonlyGroupsReadOnlyGroupListReadOnlyDbInstanceListNetworkAccessListStructList(this, "network_access_list", false);
  public get networkAccessList() {
    return this._networkAccessList;
  }

  // offline_time - computed: true, optional: false, required: false
  public get offlineTime() {
    return this.getStringAttribute('offline_time');
  }

  // pay_type - computed: true, optional: false, required: false
  public get payType() {
    return this.getStringAttribute('pay_type');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }

  // read_only_instance_num - computed: true, optional: false, required: false
  public get readOnlyInstanceNum() {
    return this.getNumberAttribute('read_only_instance_num');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // status_in_readonly_group - computed: true, optional: false, required: false
  public get statusInReadonlyGroup() {
    return this.getStringAttribute('status_in_readonly_group');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // support_ipv6 - computed: true, optional: false, required: false
  public get supportIpv6() {
    return this.getNumberAttribute('support_ipv6');
  }

  // tag_list - computed: true, optional: false, required: false
  private _tagList = new DataTencentcloudPostgresqlReadonlyGroupsReadOnlyGroupListReadOnlyDbInstanceListTagListStructList(this, "tag_list", false);
  public get tagList() {
    return this._tagList;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getNumberAttribute('uid');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // zone - computed: true, optional: false, required: false
  public get zone() {
    return this.getStringAttribute('zone');
  }
}

export class DataTencentcloudPostgresqlReadonlyGroupsReadOnlyGroupListReadOnlyDbInstanceListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudPostgresqlReadonlyGroupsReadOnlyGroupListReadOnlyDbInstanceListStructOutputReference {
    return new DataTencentcloudPostgresqlReadonlyGroupsReadOnlyGroupListReadOnlyDbInstanceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudPostgresqlReadonlyGroupsReadOnlyGroupListStruct {
}

export function dataTencentcloudPostgresqlReadonlyGroupsReadOnlyGroupListStructToTerraform(struct?: DataTencentcloudPostgresqlReadonlyGroupsReadOnlyGroupListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudPostgresqlReadonlyGroupsReadOnlyGroupListStructToHclTerraform(struct?: DataTencentcloudPostgresqlReadonlyGroupsReadOnlyGroupListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudPostgresqlReadonlyGroupsReadOnlyGroupListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudPostgresqlReadonlyGroupsReadOnlyGroupListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudPostgresqlReadonlyGroupsReadOnlyGroupListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // db_instance_net_info - computed: true, optional: false, required: false
  private _dbInstanceNetInfo = new DataTencentcloudPostgresqlReadonlyGroupsReadOnlyGroupListDbInstanceNetInfoList(this, "db_instance_net_info", false);
  public get dbInstanceNetInfo() {
    return this._dbInstanceNetInfo;
  }

  // master_db_instance_id - computed: true, optional: false, required: false
  public get masterDbInstanceId() {
    return this.getStringAttribute('master_db_instance_id');
  }

  // max_replay_lag - computed: true, optional: false, required: false
  public get maxReplayLag() {
    return this.getNumberAttribute('max_replay_lag');
  }

  // max_replay_latency - computed: true, optional: false, required: false
  public get maxReplayLatency() {
    return this.getNumberAttribute('max_replay_latency');
  }

  // min_delay_eliminate_reserve - computed: true, optional: false, required: false
  public get minDelayEliminateReserve() {
    return this.getNumberAttribute('min_delay_eliminate_reserve');
  }

  // network_access_list - computed: true, optional: false, required: false
  private _networkAccessList = new DataTencentcloudPostgresqlReadonlyGroupsReadOnlyGroupListNetworkAccessListStructList(this, "network_access_list", false);
  public get networkAccessList() {
    return this._networkAccessList;
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }

  // read_only_db_instance_list - computed: true, optional: false, required: false
  private _readOnlyDbInstanceList = new DataTencentcloudPostgresqlReadonlyGroupsReadOnlyGroupListReadOnlyDbInstanceListStructList(this, "read_only_db_instance_list", false);
  public get readOnlyDbInstanceList() {
    return this._readOnlyDbInstanceList;
  }

  // read_only_group_id - computed: true, optional: false, required: false
  public get readOnlyGroupId() {
    return this.getStringAttribute('read_only_group_id');
  }

  // read_only_group_name - computed: true, optional: false, required: false
  public get readOnlyGroupName() {
    return this.getStringAttribute('read_only_group_name');
  }

  // rebalance - computed: true, optional: false, required: false
  public get rebalance() {
    return this.getNumberAttribute('rebalance');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // replay_lag_eliminate - computed: true, optional: false, required: false
  public get replayLagEliminate() {
    return this.getNumberAttribute('replay_lag_eliminate');
  }

  // replay_latency_eliminate - computed: true, optional: false, required: false
  public get replayLatencyEliminate() {
    return this.getNumberAttribute('replay_latency_eliminate');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // zone - computed: true, optional: false, required: false
  public get zone() {
    return this.getStringAttribute('zone');
  }
}

export class DataTencentcloudPostgresqlReadonlyGroupsReadOnlyGroupListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudPostgresqlReadonlyGroupsReadOnlyGroupListStructOutputReference {
    return new DataTencentcloudPostgresqlReadonlyGroupsReadOnlyGroupListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudPostgresqlReadonlyGroupsFilters {
  /**
  * Filter name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/postgresql_readonly_groups#name DataTencentcloudPostgresqlReadonlyGroups#name}
  */
  readonly name?: string;
  /**
  * One or more filter values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/postgresql_readonly_groups#values DataTencentcloudPostgresqlReadonlyGroups#values}
  */
  readonly values?: string[];
}

export function dataTencentcloudPostgresqlReadonlyGroupsFiltersToTerraform(struct?: DataTencentcloudPostgresqlReadonlyGroupsFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataTencentcloudPostgresqlReadonlyGroupsFiltersToHclTerraform(struct?: DataTencentcloudPostgresqlReadonlyGroupsFilters | cdktf.IResolvable): any {
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

export class DataTencentcloudPostgresqlReadonlyGroupsFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudPostgresqlReadonlyGroupsFilters | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataTencentcloudPostgresqlReadonlyGroupsFilters | cdktf.IResolvable | undefined) {
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

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataTencentcloudPostgresqlReadonlyGroupsFiltersList extends cdktf.ComplexList {
  public internalValue? : DataTencentcloudPostgresqlReadonlyGroupsFilters[] | cdktf.IResolvable

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
  public get(index: number): DataTencentcloudPostgresqlReadonlyGroupsFiltersOutputReference {
    return new DataTencentcloudPostgresqlReadonlyGroupsFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/postgresql_readonly_groups tencentcloud_postgresql_readonly_groups}
*/
export class DataTencentcloudPostgresqlReadonlyGroups extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_postgresql_readonly_groups";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudPostgresqlReadonlyGroups resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudPostgresqlReadonlyGroups to import
  * @param importFromId The id of the existing DataTencentcloudPostgresqlReadonlyGroups that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/postgresql_readonly_groups#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudPostgresqlReadonlyGroups to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_postgresql_readonly_groups", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/postgresql_readonly_groups tencentcloud_postgresql_readonly_groups} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudPostgresqlReadonlyGroupsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudPostgresqlReadonlyGroupsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_postgresql_readonly_groups',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.43',
        providerVersionConstraint: '1.82.43'
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
    this._orderByType = config.orderByType;
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

  // read_only_group_list - computed: true, optional: false, required: false
  private _readOnlyGroupList = new DataTencentcloudPostgresqlReadonlyGroupsReadOnlyGroupListStructList(this, "read_only_group_list", false);
  public get readOnlyGroupList() {
    return this._readOnlyGroupList;
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
  private _filters = new DataTencentcloudPostgresqlReadonlyGroupsFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: DataTencentcloudPostgresqlReadonlyGroupsFilters[] | cdktf.IResolvable) {
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
      order_by: cdktf.stringToTerraform(this._orderBy),
      order_by_type: cdktf.stringToTerraform(this._orderByType),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      filters: cdktf.listMapper(dataTencentcloudPostgresqlReadonlyGroupsFiltersToTerraform, true)(this._filters.internalValue),
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
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filters: {
        value: cdktf.listMapperHcl(dataTencentcloudPostgresqlReadonlyGroupsFiltersToHclTerraform, true)(this._filters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataTencentcloudPostgresqlReadonlyGroupsFiltersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
