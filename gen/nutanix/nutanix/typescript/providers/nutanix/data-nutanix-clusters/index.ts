// https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/clusters
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNutanixClustersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/clusters#id DataNutanixClusters#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataNutanixClustersEntitiesAuthorizedPublicKeyListStruct {
}

export function dataNutanixClustersEntitiesAuthorizedPublicKeyListStructToTerraform(struct?: DataNutanixClustersEntitiesAuthorizedPublicKeyListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixClustersEntitiesAuthorizedPublicKeyListStructToHclTerraform(struct?: DataNutanixClustersEntitiesAuthorizedPublicKeyListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixClustersEntitiesAuthorizedPublicKeyListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixClustersEntitiesAuthorizedPublicKeyListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixClustersEntitiesAuthorizedPublicKeyListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataNutanixClustersEntitiesAuthorizedPublicKeyListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixClustersEntitiesAuthorizedPublicKeyListStructOutputReference {
    return new DataNutanixClustersEntitiesAuthorizedPublicKeyListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixClustersEntitiesCaCertificateListStruct {
}

export function dataNutanixClustersEntitiesCaCertificateListStructToTerraform(struct?: DataNutanixClustersEntitiesCaCertificateListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixClustersEntitiesCaCertificateListStructToHclTerraform(struct?: DataNutanixClustersEntitiesCaCertificateListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixClustersEntitiesCaCertificateListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixClustersEntitiesCaCertificateListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixClustersEntitiesCaCertificateListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ca_name - computed: true, optional: false, required: false
  public get caName() {
    return this.getStringAttribute('ca_name');
  }

  // certificate - computed: true, optional: false, required: false
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
}

export class DataNutanixClustersEntitiesCaCertificateListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixClustersEntitiesCaCertificateListStructOutputReference {
    return new DataNutanixClustersEntitiesCaCertificateListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixClustersEntitiesCategories {
}

export function dataNutanixClustersEntitiesCategoriesToTerraform(struct?: DataNutanixClustersEntitiesCategories): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixClustersEntitiesCategoriesToHclTerraform(struct?: DataNutanixClustersEntitiesCategories): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixClustersEntitiesCategoriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixClustersEntitiesCategories | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixClustersEntitiesCategories | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataNutanixClustersEntitiesCategoriesList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixClustersEntitiesCategoriesOutputReference {
    return new DataNutanixClustersEntitiesCategoriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixClustersEntitiesHttpProxyListStruct {
}

export function dataNutanixClustersEntitiesHttpProxyListStructToTerraform(struct?: DataNutanixClustersEntitiesHttpProxyListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixClustersEntitiesHttpProxyListStructToHclTerraform(struct?: DataNutanixClustersEntitiesHttpProxyListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixClustersEntitiesHttpProxyListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixClustersEntitiesHttpProxyListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixClustersEntitiesHttpProxyListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  private _address = new cdktf.StringMap(this, "address");
  public get address() {
    return this._address;
  }

  // credentials - computed: true, optional: false, required: false
  private _credentials = new cdktf.StringMap(this, "credentials");
  public get credentials() {
    return this._credentials;
  }

  // proxy_type_list - computed: true, optional: false, required: false
  public get proxyTypeList() {
    return this.getListAttribute('proxy_type_list');
  }
}

export class DataNutanixClustersEntitiesHttpProxyListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixClustersEntitiesHttpProxyListStructOutputReference {
    return new DataNutanixClustersEntitiesHttpProxyListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixClustersEntitiesHttpProxyWhitelistStruct {
}

export function dataNutanixClustersEntitiesHttpProxyWhitelistStructToTerraform(struct?: DataNutanixClustersEntitiesHttpProxyWhitelistStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixClustersEntitiesHttpProxyWhitelistStructToHclTerraform(struct?: DataNutanixClustersEntitiesHttpProxyWhitelistStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixClustersEntitiesHttpProxyWhitelistStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixClustersEntitiesHttpProxyWhitelistStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixClustersEntitiesHttpProxyWhitelistStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // target - computed: true, optional: false, required: false
  public get target() {
    return this.getStringAttribute('target');
  }

  // target_type - computed: true, optional: false, required: false
  public get targetType() {
    return this.getStringAttribute('target_type');
  }
}

export class DataNutanixClustersEntitiesHttpProxyWhitelistStructList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixClustersEntitiesHttpProxyWhitelistStructOutputReference {
    return new DataNutanixClustersEntitiesHttpProxyWhitelistStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixClustersEntitiesManagementServerListStruct {
}

export function dataNutanixClustersEntitiesManagementServerListStructToTerraform(struct?: DataNutanixClustersEntitiesManagementServerListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixClustersEntitiesManagementServerListStructToHclTerraform(struct?: DataNutanixClustersEntitiesManagementServerListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixClustersEntitiesManagementServerListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixClustersEntitiesManagementServerListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixClustersEntitiesManagementServerListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // drs_enabled - computed: true, optional: false, required: false
  public get drsEnabled() {
    return this.getBooleanAttribute('drs_enabled');
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // status_list - computed: true, optional: false, required: false
  public get statusList() {
    return this.getListAttribute('status_list');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataNutanixClustersEntitiesManagementServerListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixClustersEntitiesManagementServerListStructOutputReference {
    return new DataNutanixClustersEntitiesManagementServerListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixClustersEntitiesNodes {
}

export function dataNutanixClustersEntitiesNodesToTerraform(struct?: DataNutanixClustersEntitiesNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixClustersEntitiesNodesToHclTerraform(struct?: DataNutanixClustersEntitiesNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixClustersEntitiesNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixClustersEntitiesNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixClustersEntitiesNodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataNutanixClustersEntitiesNodesList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixClustersEntitiesNodesOutputReference {
    return new DataNutanixClustersEntitiesNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixClustersEntities {
}

export function dataNutanixClustersEntitiesToTerraform(struct?: DataNutanixClustersEntities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixClustersEntitiesToHclTerraform(struct?: DataNutanixClustersEntities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixClustersEntitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixClustersEntities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixClustersEntities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // analysis_vm_efficiency_map - computed: true, optional: false, required: false
  private _analysisVmEfficiencyMap = new cdktf.StringMap(this, "analysis_vm_efficiency_map");
  public get analysisVmEfficiencyMap() {
    return this._analysisVmEfficiencyMap;
  }

  // api_version - computed: true, optional: false, required: false
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }

  // authorized_public_key_list - computed: true, optional: false, required: false
  private _authorizedPublicKeyList = new DataNutanixClustersEntitiesAuthorizedPublicKeyListStructList(this, "authorized_public_key_list", false);
  public get authorizedPublicKeyList() {
    return this._authorizedPublicKeyList;
  }

  // build - computed: true, optional: false, required: false
  private _build = new cdktf.StringMap(this, "build");
  public get buildAttribute() {
    return this._build;
  }

  // ca_certificate_list - computed: true, optional: false, required: false
  private _caCertificateList = new DataNutanixClustersEntitiesCaCertificateListStructList(this, "ca_certificate_list", false);
  public get caCertificateList() {
    return this._caCertificateList;
  }

  // categories - computed: true, optional: false, required: false
  private _categories = new DataNutanixClustersEntitiesCategoriesList(this, "categories", true);
  public get categories() {
    return this._categories;
  }

  // certification_signing_info - computed: true, optional: false, required: false
  private _certificationSigningInfo = new cdktf.StringMap(this, "certification_signing_info");
  public get certificationSigningInfo() {
    return this._certificationSigningInfo;
  }

  // client_auth - computed: true, optional: false, required: false
  private _clientAuth = new cdktf.StringMap(this, "client_auth");
  public get clientAuth() {
    return this._clientAuth;
  }

  // cluster_arch - computed: true, optional: false, required: false
  public get clusterArch() {
    return this.getStringAttribute('cluster_arch');
  }

  // domain_server_credentials - computed: true, optional: false, required: false
  private _domainServerCredentials = new cdktf.StringMap(this, "domain_server_credentials");
  public get domainServerCredentials() {
    return this._domainServerCredentials;
  }

  // domain_server_name - computed: true, optional: false, required: false
  public get domainServerName() {
    return this.getStringAttribute('domain_server_name');
  }

  // domain_server_nameserver - computed: true, optional: false, required: false
  public get domainServerNameserver() {
    return this.getStringAttribute('domain_server_nameserver');
  }

  // enabled_feature_list - computed: true, optional: false, required: false
  public get enabledFeatureList() {
    return this.getListAttribute('enabled_feature_list');
  }

  // encryption_status - computed: true, optional: false, required: false
  public get encryptionStatus() {
    return this.getStringAttribute('encryption_status');
  }

  // external_data_services_ip - computed: true, optional: false, required: false
  public get externalDataServicesIp() {
    return this.getStringAttribute('external_data_services_ip');
  }

  // external_ip - computed: true, optional: false, required: false
  public get externalIp() {
    return this.getStringAttribute('external_ip');
  }

  // external_subnet - computed: true, optional: false, required: false
  public get externalSubnet() {
    return this.getStringAttribute('external_subnet');
  }

  // gpu_driver_version - computed: true, optional: false, required: false
  public get gpuDriverVersion() {
    return this.getStringAttribute('gpu_driver_version');
  }

  // http_proxy_list - computed: true, optional: false, required: false
  private _httpProxyList = new DataNutanixClustersEntitiesHttpProxyListStructList(this, "http_proxy_list", false);
  public get httpProxyList() {
    return this._httpProxyList;
  }

  // http_proxy_whitelist - computed: true, optional: false, required: false
  private _httpProxyWhitelist = new DataNutanixClustersEntitiesHttpProxyWhitelistStructList(this, "http_proxy_whitelist", false);
  public get httpProxyWhitelist() {
    return this._httpProxyWhitelist;
  }

  // internal_subnet - computed: true, optional: false, required: false
  public get internalSubnet() {
    return this.getStringAttribute('internal_subnet');
  }

  // is_available - computed: true, optional: false, required: false
  public get isAvailable() {
    return this.getBooleanAttribute('is_available');
  }

  // management_server_list - computed: true, optional: false, required: false
  private _managementServerList = new DataNutanixClustersEntitiesManagementServerListStructList(this, "management_server_list", false);
  public get managementServerList() {
    return this._managementServerList;
  }

  // masquerading_ip - computed: true, optional: false, required: false
  public get masqueradingIp() {
    return this.getStringAttribute('masquerading_ip');
  }

  // masquerading_port - computed: true, optional: false, required: false
  public get masqueradingPort() {
    return this.getNumberAttribute('masquerading_port');
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new cdktf.StringMap(this, "metadata");
  public get metadata() {
    return this._metadata;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // name_server_ip_list - computed: true, optional: false, required: false
  public get nameServerIpList() {
    return this.getListAttribute('name_server_ip_list');
  }

  // nfs_subnet_whitelist - computed: true, optional: false, required: false
  public get nfsSubnetWhitelist() {
    return this.getListAttribute('nfs_subnet_whitelist');
  }

  // nodes - computed: true, optional: false, required: false
  private _nodes = new DataNutanixClustersEntitiesNodesList(this, "nodes", false);
  public get nodes() {
    return this._nodes;
  }

  // ntp_server_ip_list - computed: true, optional: false, required: false
  public get ntpServerIpList() {
    return this.getListAttribute('ntp_server_ip_list');
  }

  // operation_mode - computed: true, optional: false, required: false
  public get operationMode() {
    return this.getStringAttribute('operation_mode');
  }

  // owner_reference - computed: true, optional: false, required: false
  private _ownerReference = new cdktf.StringMap(this, "owner_reference");
  public get ownerReference() {
    return this._ownerReference;
  }

  // project_reference - computed: true, optional: false, required: false
  private _projectReference = new cdktf.StringMap(this, "project_reference");
  public get projectReference() {
    return this._projectReference;
  }

  // service_list - computed: true, optional: false, required: false
  public get serviceList() {
    return this.getListAttribute('service_list');
  }

  // smtp_server_address - computed: true, optional: false, required: false
  private _smtpServerAddress = new cdktf.StringMap(this, "smtp_server_address");
  public get smtpServerAddress() {
    return this._smtpServerAddress;
  }

  // smtp_server_credentials - computed: true, optional: false, required: false
  private _smtpServerCredentials = new cdktf.StringMap(this, "smtp_server_credentials");
  public get smtpServerCredentials() {
    return this._smtpServerCredentials;
  }

  // smtp_server_email_address - computed: true, optional: false, required: false
  public get smtpServerEmailAddress() {
    return this.getStringAttribute('smtp_server_email_address');
  }

  // smtp_server_proxy_type_list - computed: true, optional: false, required: false
  public get smtpServerProxyTypeList() {
    return this.getListAttribute('smtp_server_proxy_type_list');
  }

  // smtp_server_type - computed: true, optional: false, required: false
  public get smtpServerType() {
    return this.getStringAttribute('smtp_server_type');
  }

  // software_map_ncc - computed: true, optional: false, required: false
  private _softwareMapNcc = new cdktf.StringMap(this, "software_map_ncc");
  public get softwareMapNcc() {
    return this._softwareMapNcc;
  }

  // software_map_nos - computed: true, optional: false, required: false
  private _softwareMapNos = new cdktf.StringMap(this, "software_map_nos");
  public get softwareMapNos() {
    return this._softwareMapNos;
  }

  // ssl_key_expire_datetime - computed: true, optional: false, required: false
  public get sslKeyExpireDatetime() {
    return this.getStringAttribute('ssl_key_expire_datetime');
  }

  // ssl_key_name - computed: true, optional: false, required: false
  public get sslKeyName() {
    return this.getStringAttribute('ssl_key_name');
  }

  // ssl_key_signing_info - computed: true, optional: false, required: false
  private _sslKeySigningInfo = new cdktf.StringMap(this, "ssl_key_signing_info");
  public get sslKeySigningInfo() {
    return this._sslKeySigningInfo;
  }

  // ssl_key_type - computed: true, optional: false, required: false
  public get sslKeyType() {
    return this.getStringAttribute('ssl_key_type');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // supported_information_verbosity - computed: true, optional: false, required: false
  public get supportedInformationVerbosity() {
    return this.getStringAttribute('supported_information_verbosity');
  }

  // timezone - computed: true, optional: false, required: false
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
}

export class DataNutanixClustersEntitiesList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixClustersEntitiesOutputReference {
    return new DataNutanixClustersEntitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/clusters nutanix_clusters}
*/
export class DataNutanixClusters extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_clusters";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNutanixClusters resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNutanixClusters to import
  * @param importFromId The id of the existing DataNutanixClusters that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/clusters#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNutanixClusters to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_clusters", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/clusters nutanix_clusters} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNutanixClustersConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNutanixClustersConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'nutanix_clusters',
      terraformGeneratorMetadata: {
        providerName: 'nutanix',
        providerVersion: '2.3.3'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_version - computed: true, optional: false, required: false
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }

  // entities - computed: true, optional: false, required: false
  private _entities = new DataNutanixClustersEntitiesList(this, "entities", false);
  public get entities() {
    return this._entities;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
