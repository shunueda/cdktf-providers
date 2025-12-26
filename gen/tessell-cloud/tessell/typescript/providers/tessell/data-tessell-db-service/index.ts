// https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/data-sources/db_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTessellDbServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Tessell generated UUID for the DB Service. This is the unique identifier for the DB Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/data-sources/db_service#id DataTessellDbService#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataTessellDbServiceClonedFromInfo {
}

export function dataTessellDbServiceClonedFromInfoToTerraform(struct?: DataTessellDbServiceClonedFromInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServiceClonedFromInfoToHclTerraform(struct?: DataTessellDbServiceClonedFromInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServiceClonedFromInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServiceClonedFromInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServiceClonedFromInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // availability_machine - computed: true, optional: false, required: false
  public get availabilityMachine() {
    return this.getStringAttribute('availability_machine');
  }

  // availability_machine_id - computed: true, optional: false, required: false
  public get availabilityMachineId() {
    return this.getStringAttribute('availability_machine_id');
  }

  // clone_type - computed: true, optional: false, required: false
  public get cloneType() {
    return this.getStringAttribute('clone_type');
  }

  // content_type - computed: true, optional: false, required: false
  public get contentType() {
    return this.getStringAttribute('content_type');
  }

  // maximum_recoverability - computed: true, optional: false, required: false
  public get maximumRecoverability() {
    return this.getBooleanAttribute('maximum_recoverability');
  }

  // pitr_time - computed: true, optional: false, required: false
  public get pitrTime() {
    return this.getStringAttribute('pitr_time');
  }

  // snapshot_id - computed: true, optional: false, required: false
  public get snapshotId() {
    return this.getStringAttribute('snapshot_id');
  }

  // snapshot_name - computed: true, optional: false, required: false
  public get snapshotName() {
    return this.getStringAttribute('snapshot_name');
  }

  // snapshot_time - computed: true, optional: false, required: false
  public get snapshotTime() {
    return this.getStringAttribute('snapshot_time');
  }

  // storage_provider - computed: true, optional: false, required: false
  public get storageProvider() {
    return this.getStringAttribute('storage_provider');
  }

  // tessell_service - computed: true, optional: false, required: false
  public get tessellService() {
    return this.getStringAttribute('tessell_service');
  }

  // tessell_service_id - computed: true, optional: false, required: false
  public get tessellServiceId() {
    return this.getStringAttribute('tessell_service_id');
  }
}

export class DataTessellDbServiceClonedFromInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServiceClonedFromInfoOutputReference {
    return new DataTessellDbServiceClonedFromInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServiceContextInfo {
}

export function dataTessellDbServiceContextInfoToTerraform(struct?: DataTessellDbServiceContextInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServiceContextInfoToHclTerraform(struct?: DataTessellDbServiceContextInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServiceContextInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServiceContextInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServiceContextInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // sub_status - computed: true, optional: false, required: false
  public get subStatus() {
    return this.getStringAttribute('sub_status');
  }
}

export class DataTessellDbServiceContextInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServiceContextInfoOutputReference {
    return new DataTessellDbServiceContextInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServiceDatabasesClonedFromInfo {
}

export function dataTessellDbServiceDatabasesClonedFromInfoToTerraform(struct?: DataTessellDbServiceDatabasesClonedFromInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServiceDatabasesClonedFromInfoToHclTerraform(struct?: DataTessellDbServiceDatabasesClonedFromInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServiceDatabasesClonedFromInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServiceDatabasesClonedFromInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServiceDatabasesClonedFromInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // database_id - computed: true, optional: false, required: false
  public get databaseId() {
    return this.getStringAttribute('database_id');
  }
}

export class DataTessellDbServiceDatabasesClonedFromInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServiceDatabasesClonedFromInfoOutputReference {
    return new DataTessellDbServiceDatabasesClonedFromInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServiceDatabasesConnectString {
}

export function dataTessellDbServiceDatabasesConnectStringToTerraform(struct?: DataTessellDbServiceDatabasesConnectString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServiceDatabasesConnectStringToHclTerraform(struct?: DataTessellDbServiceDatabasesConnectString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServiceDatabasesConnectStringOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServiceDatabasesConnectString | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServiceDatabasesConnectString | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connect_descriptor - computed: true, optional: false, required: false
  public get connectDescriptor() {
    return this.getStringAttribute('connect_descriptor');
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // master_user - computed: true, optional: false, required: false
  public get masterUser() {
    return this.getStringAttribute('master_user');
  }

  // service_port - computed: true, optional: false, required: false
  public get servicePort() {
    return this.getStringAttribute('service_port');
  }
}

export class DataTessellDbServiceDatabasesConnectStringList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServiceDatabasesConnectStringOutputReference {
    return new DataTessellDbServiceDatabasesConnectStringOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServiceDatabasesDatabaseConfigurationMilvusConfig {
}

export function dataTessellDbServiceDatabasesDatabaseConfigurationMilvusConfigToTerraform(struct?: DataTessellDbServiceDatabasesDatabaseConfigurationMilvusConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServiceDatabasesDatabaseConfigurationMilvusConfigToHclTerraform(struct?: DataTessellDbServiceDatabasesDatabaseConfigurationMilvusConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServiceDatabasesDatabaseConfigurationMilvusConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServiceDatabasesDatabaseConfigurationMilvusConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServiceDatabasesDatabaseConfigurationMilvusConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // parameter_profile_id - computed: true, optional: false, required: false
  public get parameterProfileId() {
    return this.getStringAttribute('parameter_profile_id');
  }
}

export class DataTessellDbServiceDatabasesDatabaseConfigurationMilvusConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServiceDatabasesDatabaseConfigurationMilvusConfigOutputReference {
    return new DataTessellDbServiceDatabasesDatabaseConfigurationMilvusConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServiceDatabasesDatabaseConfigurationMongodbConfig {
}

export function dataTessellDbServiceDatabasesDatabaseConfigurationMongodbConfigToTerraform(struct?: DataTessellDbServiceDatabasesDatabaseConfigurationMongodbConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServiceDatabasesDatabaseConfigurationMongodbConfigToHclTerraform(struct?: DataTessellDbServiceDatabasesDatabaseConfigurationMongodbConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServiceDatabasesDatabaseConfigurationMongodbConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServiceDatabasesDatabaseConfigurationMongodbConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServiceDatabasesDatabaseConfigurationMongodbConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // parameter_profile_id - computed: true, optional: false, required: false
  public get parameterProfileId() {
    return this.getStringAttribute('parameter_profile_id');
  }
}

export class DataTessellDbServiceDatabasesDatabaseConfigurationMongodbConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServiceDatabasesDatabaseConfigurationMongodbConfigOutputReference {
    return new DataTessellDbServiceDatabasesDatabaseConfigurationMongodbConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServiceDatabasesDatabaseConfigurationMysqlConfig {
}

export function dataTessellDbServiceDatabasesDatabaseConfigurationMysqlConfigToTerraform(struct?: DataTessellDbServiceDatabasesDatabaseConfigurationMysqlConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServiceDatabasesDatabaseConfigurationMysqlConfigToHclTerraform(struct?: DataTessellDbServiceDatabasesDatabaseConfigurationMysqlConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServiceDatabasesDatabaseConfigurationMysqlConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServiceDatabasesDatabaseConfigurationMysqlConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServiceDatabasesDatabaseConfigurationMysqlConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // option_profile_id - computed: true, optional: false, required: false
  public get optionProfileId() {
    return this.getStringAttribute('option_profile_id');
  }

  // parameter_profile_id - computed: true, optional: false, required: false
  public get parameterProfileId() {
    return this.getStringAttribute('parameter_profile_id');
  }
}

export class DataTessellDbServiceDatabasesDatabaseConfigurationMysqlConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServiceDatabasesDatabaseConfigurationMysqlConfigOutputReference {
    return new DataTessellDbServiceDatabasesDatabaseConfigurationMysqlConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServiceDatabasesDatabaseConfigurationOracleConfig {
}

export function dataTessellDbServiceDatabasesDatabaseConfigurationOracleConfigToTerraform(struct?: DataTessellDbServiceDatabasesDatabaseConfigurationOracleConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServiceDatabasesDatabaseConfigurationOracleConfigToHclTerraform(struct?: DataTessellDbServiceDatabasesDatabaseConfigurationOracleConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServiceDatabasesDatabaseConfigurationOracleConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServiceDatabasesDatabaseConfigurationOracleConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServiceDatabasesDatabaseConfigurationOracleConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // option_profile_id - computed: true, optional: false, required: false
  public get optionProfileId() {
    return this.getStringAttribute('option_profile_id');
  }

  // options_profile - computed: true, optional: false, required: false
  public get optionsProfile() {
    return this.getStringAttribute('options_profile');
  }

  // parameter_profile_id - computed: true, optional: false, required: false
  public get parameterProfileId() {
    return this.getStringAttribute('parameter_profile_id');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataTessellDbServiceDatabasesDatabaseConfigurationOracleConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServiceDatabasesDatabaseConfigurationOracleConfigOutputReference {
    return new DataTessellDbServiceDatabasesDatabaseConfigurationOracleConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServiceDatabasesDatabaseConfigurationPostgresqlConfig {
}

export function dataTessellDbServiceDatabasesDatabaseConfigurationPostgresqlConfigToTerraform(struct?: DataTessellDbServiceDatabasesDatabaseConfigurationPostgresqlConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServiceDatabasesDatabaseConfigurationPostgresqlConfigToHclTerraform(struct?: DataTessellDbServiceDatabasesDatabaseConfigurationPostgresqlConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServiceDatabasesDatabaseConfigurationPostgresqlConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServiceDatabasesDatabaseConfigurationPostgresqlConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServiceDatabasesDatabaseConfigurationPostgresqlConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // option_profile_id - computed: true, optional: false, required: false
  public get optionProfileId() {
    return this.getStringAttribute('option_profile_id');
  }

  // parameter_profile_id - computed: true, optional: false, required: false
  public get parameterProfileId() {
    return this.getStringAttribute('parameter_profile_id');
  }
}

export class DataTessellDbServiceDatabasesDatabaseConfigurationPostgresqlConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServiceDatabasesDatabaseConfigurationPostgresqlConfigOutputReference {
    return new DataTessellDbServiceDatabasesDatabaseConfigurationPostgresqlConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServiceDatabasesDatabaseConfigurationSqlServerConfig {
}

export function dataTessellDbServiceDatabasesDatabaseConfigurationSqlServerConfigToTerraform(struct?: DataTessellDbServiceDatabasesDatabaseConfigurationSqlServerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServiceDatabasesDatabaseConfigurationSqlServerConfigToHclTerraform(struct?: DataTessellDbServiceDatabasesDatabaseConfigurationSqlServerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServiceDatabasesDatabaseConfigurationSqlServerConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServiceDatabasesDatabaseConfigurationSqlServerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServiceDatabasesDatabaseConfigurationSqlServerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // parameter_profile_id - computed: true, optional: false, required: false
  public get parameterProfileId() {
    return this.getStringAttribute('parameter_profile_id');
  }
}

export class DataTessellDbServiceDatabasesDatabaseConfigurationSqlServerConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServiceDatabasesDatabaseConfigurationSqlServerConfigOutputReference {
    return new DataTessellDbServiceDatabasesDatabaseConfigurationSqlServerConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServiceDatabasesDatabaseConfiguration {
}

export function dataTessellDbServiceDatabasesDatabaseConfigurationToTerraform(struct?: DataTessellDbServiceDatabasesDatabaseConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServiceDatabasesDatabaseConfigurationToHclTerraform(struct?: DataTessellDbServiceDatabasesDatabaseConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServiceDatabasesDatabaseConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServiceDatabasesDatabaseConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServiceDatabasesDatabaseConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // milvus_config - computed: true, optional: false, required: false
  private _milvusConfig = new DataTessellDbServiceDatabasesDatabaseConfigurationMilvusConfigList(this, "milvus_config", false);
  public get milvusConfig() {
    return this._milvusConfig;
  }

  // mongodb_config - computed: true, optional: false, required: false
  private _mongodbConfig = new DataTessellDbServiceDatabasesDatabaseConfigurationMongodbConfigList(this, "mongodb_config", false);
  public get mongodbConfig() {
    return this._mongodbConfig;
  }

  // mysql_config - computed: true, optional: false, required: false
  private _mysqlConfig = new DataTessellDbServiceDatabasesDatabaseConfigurationMysqlConfigList(this, "mysql_config", false);
  public get mysqlConfig() {
    return this._mysqlConfig;
  }

  // oracle_config - computed: true, optional: false, required: false
  private _oracleConfig = new DataTessellDbServiceDatabasesDatabaseConfigurationOracleConfigList(this, "oracle_config", false);
  public get oracleConfig() {
    return this._oracleConfig;
  }

  // postgresql_config - computed: true, optional: false, required: false
  private _postgresqlConfig = new DataTessellDbServiceDatabasesDatabaseConfigurationPostgresqlConfigList(this, "postgresql_config", false);
  public get postgresqlConfig() {
    return this._postgresqlConfig;
  }

  // sql_server_config - computed: true, optional: false, required: false
  private _sqlServerConfig = new DataTessellDbServiceDatabasesDatabaseConfigurationSqlServerConfigList(this, "sql_server_config", false);
  public get sqlServerConfig() {
    return this._sqlServerConfig;
  }
}

export class DataTessellDbServiceDatabasesDatabaseConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServiceDatabasesDatabaseConfigurationOutputReference {
    return new DataTessellDbServiceDatabasesDatabaseConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServiceDatabases {
}

export function dataTessellDbServiceDatabasesToTerraform(struct?: DataTessellDbServiceDatabases): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServiceDatabasesToHclTerraform(struct?: DataTessellDbServiceDatabases): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServiceDatabasesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServiceDatabases | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServiceDatabases | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloned_from_info - computed: true, optional: false, required: false
  private _clonedFromInfo = new DataTessellDbServiceDatabasesClonedFromInfoList(this, "cloned_from_info", false);
  public get clonedFromInfo() {
    return this._clonedFromInfo;
  }

  // connect_string - computed: true, optional: false, required: false
  private _connectString = new DataTessellDbServiceDatabasesConnectStringList(this, "connect_string", false);
  public get connectString() {
    return this._connectString;
  }

  // database_configuration - computed: true, optional: false, required: false
  private _databaseConfiguration = new DataTessellDbServiceDatabasesDatabaseConfigurationList(this, "database_configuration", false);
  public get databaseConfiguration() {
    return this._databaseConfiguration;
  }

  // database_name - computed: true, optional: false, required: false
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }

  // date_created - computed: true, optional: false, required: false
  public get dateCreated() {
    return this.getStringAttribute('date_created');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // engine_type - computed: true, optional: false, required: false
  public get engineType() {
    return this.getStringAttribute('engine_type');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tessell_created - computed: true, optional: false, required: false
  public get tessellCreated() {
    return this.getBooleanAttribute('tessell_created');
  }

  // tessell_service_id - computed: true, optional: false, required: false
  public get tessellServiceId() {
    return this.getStringAttribute('tessell_service_id');
  }
}

export class DataTessellDbServiceDatabasesList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServiceDatabasesOutputReference {
    return new DataTessellDbServiceDatabasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServiceDeletionConfig {
}

export function dataTessellDbServiceDeletionConfigToTerraform(struct?: DataTessellDbServiceDeletionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServiceDeletionConfigToHclTerraform(struct?: DataTessellDbServiceDeletionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServiceDeletionConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServiceDeletionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServiceDeletionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // retain_availability_machine - computed: true, optional: false, required: false
  public get retainAvailabilityMachine() {
    return this.getBooleanAttribute('retain_availability_machine');
  }
}

export class DataTessellDbServiceDeletionConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServiceDeletionConfigOutputReference {
    return new DataTessellDbServiceDeletionConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServiceDeletionScheduleDeletionConfig {
}

export function dataTessellDbServiceDeletionScheduleDeletionConfigToTerraform(struct?: DataTessellDbServiceDeletionScheduleDeletionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServiceDeletionScheduleDeletionConfigToHclTerraform(struct?: DataTessellDbServiceDeletionScheduleDeletionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServiceDeletionScheduleDeletionConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServiceDeletionScheduleDeletionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServiceDeletionScheduleDeletionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // retain_availability_machine - computed: true, optional: false, required: false
  public get retainAvailabilityMachine() {
    return this.getBooleanAttribute('retain_availability_machine');
  }
}

export class DataTessellDbServiceDeletionScheduleDeletionConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServiceDeletionScheduleDeletionConfigOutputReference {
    return new DataTessellDbServiceDeletionScheduleDeletionConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServiceDeletionSchedule {
}

export function dataTessellDbServiceDeletionScheduleToTerraform(struct?: DataTessellDbServiceDeletionSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServiceDeletionScheduleToHclTerraform(struct?: DataTessellDbServiceDeletionSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServiceDeletionScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServiceDeletionSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServiceDeletionSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // delete_at - computed: true, optional: false, required: false
  public get deleteAt() {
    return this.getStringAttribute('delete_at');
  }

  // deletion_config - computed: true, optional: false, required: false
  private _deletionConfig = new DataTessellDbServiceDeletionScheduleDeletionConfigList(this, "deletion_config", false);
  public get deletionConfig() {
    return this._deletionConfig;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export class DataTessellDbServiceDeletionScheduleList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServiceDeletionScheduleOutputReference {
    return new DataTessellDbServiceDeletionScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServiceEngineConfigurationApacheKafkaConfig {
}

export function dataTessellDbServiceEngineConfigurationApacheKafkaConfigToTerraform(struct?: DataTessellDbServiceEngineConfigurationApacheKafkaConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServiceEngineConfigurationApacheKafkaConfigToHclTerraform(struct?: DataTessellDbServiceEngineConfigurationApacheKafkaConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServiceEngineConfigurationApacheKafkaConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServiceEngineConfigurationApacheKafkaConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServiceEngineConfigurationApacheKafkaConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // parameter_profile_id - computed: true, optional: false, required: false
  public get parameterProfileId() {
    return this.getStringAttribute('parameter_profile_id');
  }
}

export class DataTessellDbServiceEngineConfigurationApacheKafkaConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServiceEngineConfigurationApacheKafkaConfigOutputReference {
    return new DataTessellDbServiceEngineConfigurationApacheKafkaConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServiceEngineConfigurationCollationConfig {
}

export function dataTessellDbServiceEngineConfigurationCollationConfigToTerraform(struct?: DataTessellDbServiceEngineConfigurationCollationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServiceEngineConfigurationCollationConfigToHclTerraform(struct?: DataTessellDbServiceEngineConfigurationCollationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServiceEngineConfigurationCollationConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServiceEngineConfigurationCollationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServiceEngineConfigurationCollationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // collation_name - computed: true, optional: false, required: false
  public get collationName() {
    return this.getStringAttribute('collation_name');
  }
}

export class DataTessellDbServiceEngineConfigurationCollationConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServiceEngineConfigurationCollationConfigOutputReference {
    return new DataTessellDbServiceEngineConfigurationCollationConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServiceEngineConfigurationMilvusConfig {
}

export function dataTessellDbServiceEngineConfigurationMilvusConfigToTerraform(struct?: DataTessellDbServiceEngineConfigurationMilvusConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServiceEngineConfigurationMilvusConfigToHclTerraform(struct?: DataTessellDbServiceEngineConfigurationMilvusConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServiceEngineConfigurationMilvusConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServiceEngineConfigurationMilvusConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServiceEngineConfigurationMilvusConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // parameter_profile_id - computed: true, optional: false, required: false
  public get parameterProfileId() {
    return this.getStringAttribute('parameter_profile_id');
  }
}

export class DataTessellDbServiceEngineConfigurationMilvusConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServiceEngineConfigurationMilvusConfigOutputReference {
    return new DataTessellDbServiceEngineConfigurationMilvusConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServiceEngineConfigurationMongodbConfig {
}

export function dataTessellDbServiceEngineConfigurationMongodbConfigToTerraform(struct?: DataTessellDbServiceEngineConfigurationMongodbConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServiceEngineConfigurationMongodbConfigToHclTerraform(struct?: DataTessellDbServiceEngineConfigurationMongodbConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServiceEngineConfigurationMongodbConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServiceEngineConfigurationMongodbConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServiceEngineConfigurationMongodbConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cluster_name - computed: true, optional: false, required: false
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }

  // parameter_profile_id - computed: true, optional: false, required: false
  public get parameterProfileId() {
    return this.getStringAttribute('parameter_profile_id');
  }
}

export class DataTessellDbServiceEngineConfigurationMongodbConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServiceEngineConfigurationMongodbConfigOutputReference {
    return new DataTessellDbServiceEngineConfigurationMongodbConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServiceEngineConfigurationMysqlConfig {
}

export function dataTessellDbServiceEngineConfigurationMysqlConfigToTerraform(struct?: DataTessellDbServiceEngineConfigurationMysqlConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServiceEngineConfigurationMysqlConfigToHclTerraform(struct?: DataTessellDbServiceEngineConfigurationMysqlConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServiceEngineConfigurationMysqlConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServiceEngineConfigurationMysqlConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServiceEngineConfigurationMysqlConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ad_domain_id - computed: true, optional: false, required: false
  public get adDomainId() {
    return this.getStringAttribute('ad_domain_id');
  }

  // option_profile_id - computed: true, optional: false, required: false
  public get optionProfileId() {
    return this.getStringAttribute('option_profile_id');
  }

  // parameter_profile_id - computed: true, optional: false, required: false
  public get parameterProfileId() {
    return this.getStringAttribute('parameter_profile_id');
  }
}

export class DataTessellDbServiceEngineConfigurationMysqlConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServiceEngineConfigurationMysqlConfigOutputReference {
    return new DataTessellDbServiceEngineConfigurationMysqlConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServiceEngineConfigurationOracleConfig {
}

export function dataTessellDbServiceEngineConfigurationOracleConfigToTerraform(struct?: DataTessellDbServiceEngineConfigurationOracleConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServiceEngineConfigurationOracleConfigToHclTerraform(struct?: DataTessellDbServiceEngineConfigurationOracleConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServiceEngineConfigurationOracleConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServiceEngineConfigurationOracleConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServiceEngineConfigurationOracleConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // character_set - computed: true, optional: false, required: false
  public get characterSet() {
    return this.getStringAttribute('character_set');
  }

  // enable_archive_mode - computed: true, optional: false, required: false
  public get enableArchiveMode() {
    return this.getBooleanAttribute('enable_archive_mode');
  }

  // multi_tenant - computed: true, optional: false, required: false
  public get multiTenant() {
    return this.getBooleanAttribute('multi_tenant');
  }

  // national_character_set - computed: true, optional: false, required: false
  public get nationalCharacterSet() {
    return this.getStringAttribute('national_character_set');
  }

  // option_profile_id - computed: true, optional: false, required: false
  public get optionProfileId() {
    return this.getStringAttribute('option_profile_id');
  }

  // options_profile - computed: true, optional: false, required: false
  public get optionsProfile() {
    return this.getStringAttribute('options_profile');
  }

  // parameter_profile_id - computed: true, optional: false, required: false
  public get parameterProfileId() {
    return this.getStringAttribute('parameter_profile_id');
  }

  // sid - computed: true, optional: false, required: false
  public get sid() {
    return this.getStringAttribute('sid');
  }
}

export class DataTessellDbServiceEngineConfigurationOracleConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServiceEngineConfigurationOracleConfigOutputReference {
    return new DataTessellDbServiceEngineConfigurationOracleConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServiceEngineConfigurationPostScriptInfo {
}

export function dataTessellDbServiceEngineConfigurationPostScriptInfoToTerraform(struct?: DataTessellDbServiceEngineConfigurationPostScriptInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServiceEngineConfigurationPostScriptInfoToHclTerraform(struct?: DataTessellDbServiceEngineConfigurationPostScriptInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServiceEngineConfigurationPostScriptInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServiceEngineConfigurationPostScriptInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServiceEngineConfigurationPostScriptInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // script_id - computed: true, optional: false, required: false
  public get scriptId() {
    return this.getStringAttribute('script_id');
  }

  // script_version - computed: true, optional: false, required: false
  public get scriptVersion() {
    return this.getStringAttribute('script_version');
  }
}

export class DataTessellDbServiceEngineConfigurationPostScriptInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServiceEngineConfigurationPostScriptInfoOutputReference {
    return new DataTessellDbServiceEngineConfigurationPostScriptInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServiceEngineConfigurationPostgresqlConfig {
}

export function dataTessellDbServiceEngineConfigurationPostgresqlConfigToTerraform(struct?: DataTessellDbServiceEngineConfigurationPostgresqlConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServiceEngineConfigurationPostgresqlConfigToHclTerraform(struct?: DataTessellDbServiceEngineConfigurationPostgresqlConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServiceEngineConfigurationPostgresqlConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServiceEngineConfigurationPostgresqlConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServiceEngineConfigurationPostgresqlConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ad_domain_id - computed: true, optional: false, required: false
  public get adDomainId() {
    return this.getStringAttribute('ad_domain_id');
  }

  // option_profile_id - computed: true, optional: false, required: false
  public get optionProfileId() {
    return this.getStringAttribute('option_profile_id');
  }

  // option_profile_name - computed: true, optional: false, required: false
  public get optionProfileName() {
    return this.getStringAttribute('option_profile_name');
  }

  // parameter_profile_id - computed: true, optional: false, required: false
  public get parameterProfileId() {
    return this.getStringAttribute('parameter_profile_id');
  }

  // proxy_port - computed: true, optional: false, required: false
  public get proxyPort() {
    return this.getNumberAttribute('proxy_port');
  }
}

export class DataTessellDbServiceEngineConfigurationPostgresqlConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServiceEngineConfigurationPostgresqlConfigOutputReference {
    return new DataTessellDbServiceEngineConfigurationPostgresqlConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServiceEngineConfigurationPreScriptInfo {
}

export function dataTessellDbServiceEngineConfigurationPreScriptInfoToTerraform(struct?: DataTessellDbServiceEngineConfigurationPreScriptInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServiceEngineConfigurationPreScriptInfoToHclTerraform(struct?: DataTessellDbServiceEngineConfigurationPreScriptInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServiceEngineConfigurationPreScriptInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServiceEngineConfigurationPreScriptInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServiceEngineConfigurationPreScriptInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // script_id - computed: true, optional: false, required: false
  public get scriptId() {
    return this.getStringAttribute('script_id');
  }

  // script_version - computed: true, optional: false, required: false
  public get scriptVersion() {
    return this.getStringAttribute('script_version');
  }
}

export class DataTessellDbServiceEngineConfigurationPreScriptInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServiceEngineConfigurationPreScriptInfoOutputReference {
    return new DataTessellDbServiceEngineConfigurationPreScriptInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServiceEngineConfigurationSqlServerConfig {
}

export function dataTessellDbServiceEngineConfigurationSqlServerConfigToTerraform(struct?: DataTessellDbServiceEngineConfigurationSqlServerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServiceEngineConfigurationSqlServerConfigToHclTerraform(struct?: DataTessellDbServiceEngineConfigurationSqlServerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServiceEngineConfigurationSqlServerConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServiceEngineConfigurationSqlServerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServiceEngineConfigurationSqlServerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ad_domain_id - computed: true, optional: false, required: false
  public get adDomainId() {
    return this.getStringAttribute('ad_domain_id');
  }

  // agent_service_account_user - computed: true, optional: false, required: false
  public get agentServiceAccountUser() {
    return this.getStringAttribute('agent_service_account_user');
  }

  // instance_name - computed: true, optional: false, required: false
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }

  // parameter_profile_id - computed: true, optional: false, required: false
  public get parameterProfileId() {
    return this.getStringAttribute('parameter_profile_id');
  }

  // service_account_user - computed: true, optional: false, required: false
  public get serviceAccountUser() {
    return this.getStringAttribute('service_account_user');
  }
}

export class DataTessellDbServiceEngineConfigurationSqlServerConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServiceEngineConfigurationSqlServerConfigOutputReference {
    return new DataTessellDbServiceEngineConfigurationSqlServerConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServiceEngineConfiguration {
}

export function dataTessellDbServiceEngineConfigurationToTerraform(struct?: DataTessellDbServiceEngineConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServiceEngineConfigurationToHclTerraform(struct?: DataTessellDbServiceEngineConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServiceEngineConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServiceEngineConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServiceEngineConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // apache_kafka_config - computed: true, optional: false, required: false
  private _apacheKafkaConfig = new DataTessellDbServiceEngineConfigurationApacheKafkaConfigList(this, "apache_kafka_config", false);
  public get apacheKafkaConfig() {
    return this._apacheKafkaConfig;
  }

  // backup_url - computed: true, optional: false, required: false
  public get backupUrl() {
    return this.getStringAttribute('backup_url');
  }

  // collation_config - computed: true, optional: false, required: false
  private _collationConfig = new DataTessellDbServiceEngineConfigurationCollationConfigList(this, "collation_config", false);
  public get collationConfig() {
    return this._collationConfig;
  }

  // ignore_post_script_failure - computed: true, optional: false, required: false
  public get ignorePostScriptFailure() {
    return this.getBooleanAttribute('ignore_post_script_failure');
  }

  // ignore_pre_script_failure - computed: true, optional: false, required: false
  public get ignorePreScriptFailure() {
    return this.getBooleanAttribute('ignore_pre_script_failure');
  }

  // milvus_config - computed: true, optional: false, required: false
  private _milvusConfig = new DataTessellDbServiceEngineConfigurationMilvusConfigList(this, "milvus_config", false);
  public get milvusConfig() {
    return this._milvusConfig;
  }

  // mongodb_config - computed: true, optional: false, required: false
  private _mongodbConfig = new DataTessellDbServiceEngineConfigurationMongodbConfigList(this, "mongodb_config", false);
  public get mongodbConfig() {
    return this._mongodbConfig;
  }

  // mysql_config - computed: true, optional: false, required: false
  private _mysqlConfig = new DataTessellDbServiceEngineConfigurationMysqlConfigList(this, "mysql_config", false);
  public get mysqlConfig() {
    return this._mysqlConfig;
  }

  // oracle_config - computed: true, optional: false, required: false
  private _oracleConfig = new DataTessellDbServiceEngineConfigurationOracleConfigList(this, "oracle_config", false);
  public get oracleConfig() {
    return this._oracleConfig;
  }

  // post_script_info - computed: true, optional: false, required: false
  private _postScriptInfo = new DataTessellDbServiceEngineConfigurationPostScriptInfoList(this, "post_script_info", false);
  public get postScriptInfo() {
    return this._postScriptInfo;
  }

  // postgresql_config - computed: true, optional: false, required: false
  private _postgresqlConfig = new DataTessellDbServiceEngineConfigurationPostgresqlConfigList(this, "postgresql_config", false);
  public get postgresqlConfig() {
    return this._postgresqlConfig;
  }

  // pre_script_info - computed: true, optional: false, required: false
  private _preScriptInfo = new DataTessellDbServiceEngineConfigurationPreScriptInfoList(this, "pre_script_info", false);
  public get preScriptInfo() {
    return this._preScriptInfo;
  }

  // sql_server_config - computed: true, optional: false, required: false
  private _sqlServerConfig = new DataTessellDbServiceEngineConfigurationSqlServerConfigList(this, "sql_server_config", false);
  public get sqlServerConfig() {
    return this._sqlServerConfig;
  }
}

export class DataTessellDbServiceEngineConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServiceEngineConfigurationOutputReference {
    return new DataTessellDbServiceEngineConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServiceInfrastructureArchiveStorageConfigAzureNetAppConfig {
}

export function dataTessellDbServiceInfrastructureArchiveStorageConfigAzureNetAppConfigToTerraform(struct?: DataTessellDbServiceInfrastructureArchiveStorageConfigAzureNetAppConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServiceInfrastructureArchiveStorageConfigAzureNetAppConfigToHclTerraform(struct?: DataTessellDbServiceInfrastructureArchiveStorageConfigAzureNetAppConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServiceInfrastructureArchiveStorageConfigAzureNetAppConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServiceInfrastructureArchiveStorageConfigAzureNetAppConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServiceInfrastructureArchiveStorageConfigAzureNetAppConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // service_level - computed: true, optional: false, required: false
  public get serviceLevel() {
    return this.getStringAttribute('service_level');
  }
}

export class DataTessellDbServiceInfrastructureArchiveStorageConfigAzureNetAppConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServiceInfrastructureArchiveStorageConfigAzureNetAppConfigOutputReference {
    return new DataTessellDbServiceInfrastructureArchiveStorageConfigAzureNetAppConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServiceInfrastructureArchiveStorageConfig {
}

export function dataTessellDbServiceInfrastructureArchiveStorageConfigToTerraform(struct?: DataTessellDbServiceInfrastructureArchiveStorageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServiceInfrastructureArchiveStorageConfigToHclTerraform(struct?: DataTessellDbServiceInfrastructureArchiveStorageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServiceInfrastructureArchiveStorageConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServiceInfrastructureArchiveStorageConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServiceInfrastructureArchiveStorageConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // azure_net_app_config - computed: true, optional: false, required: false
  private _azureNetAppConfig = new DataTessellDbServiceInfrastructureArchiveStorageConfigAzureNetAppConfigList(this, "azure_net_app_config", false);
  public get azureNetAppConfig() {
    return this._azureNetAppConfig;
  }

  // provider - computed: true, optional: false, required: false
  public get provider() {
    return this.getStringAttribute('provider');
  }
}

export class DataTessellDbServiceInfrastructureArchiveStorageConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServiceInfrastructureArchiveStorageConfigOutputReference {
    return new DataTessellDbServiceInfrastructureArchiveStorageConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServiceInfrastructureAwsInfraConfigAwsCpuOptions {
}

export function dataTessellDbServiceInfrastructureAwsInfraConfigAwsCpuOptionsToTerraform(struct?: DataTessellDbServiceInfrastructureAwsInfraConfigAwsCpuOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServiceInfrastructureAwsInfraConfigAwsCpuOptionsToHclTerraform(struct?: DataTessellDbServiceInfrastructureAwsInfraConfigAwsCpuOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServiceInfrastructureAwsInfraConfigAwsCpuOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServiceInfrastructureAwsInfraConfigAwsCpuOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServiceInfrastructureAwsInfraConfigAwsCpuOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // vcpus - computed: true, optional: false, required: false
  public get vcpus() {
    return this.getNumberAttribute('vcpus');
  }
}

export class DataTessellDbServiceInfrastructureAwsInfraConfigAwsCpuOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServiceInfrastructureAwsInfraConfigAwsCpuOptionsOutputReference {
    return new DataTessellDbServiceInfrastructureAwsInfraConfigAwsCpuOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServiceInfrastructureAwsInfraConfig {
}

export function dataTessellDbServiceInfrastructureAwsInfraConfigToTerraform(struct?: DataTessellDbServiceInfrastructureAwsInfraConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServiceInfrastructureAwsInfraConfigToHclTerraform(struct?: DataTessellDbServiceInfrastructureAwsInfraConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServiceInfrastructureAwsInfraConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServiceInfrastructureAwsInfraConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServiceInfrastructureAwsInfraConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aws_cpu_options - computed: true, optional: false, required: false
  private _awsCpuOptions = new DataTessellDbServiceInfrastructureAwsInfraConfigAwsCpuOptionsList(this, "aws_cpu_options", false);
  public get awsCpuOptions() {
    return this._awsCpuOptions;
  }
}

export class DataTessellDbServiceInfrastructureAwsInfraConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServiceInfrastructureAwsInfraConfigOutputReference {
    return new DataTessellDbServiceInfrastructureAwsInfraConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServiceInfrastructureCloudAvailabilityRegions {
}

export function dataTessellDbServiceInfrastructureCloudAvailabilityRegionsToTerraform(struct?: DataTessellDbServiceInfrastructureCloudAvailabilityRegions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServiceInfrastructureCloudAvailabilityRegionsToHclTerraform(struct?: DataTessellDbServiceInfrastructureCloudAvailabilityRegions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServiceInfrastructureCloudAvailabilityRegionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServiceInfrastructureCloudAvailabilityRegions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServiceInfrastructureCloudAvailabilityRegions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // availability_zones - computed: true, optional: false, required: false
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }
}

export class DataTessellDbServiceInfrastructureCloudAvailabilityRegionsList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServiceInfrastructureCloudAvailabilityRegionsOutputReference {
    return new DataTessellDbServiceInfrastructureCloudAvailabilityRegionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServiceInfrastructureCloudAvailability {
}

export function dataTessellDbServiceInfrastructureCloudAvailabilityToTerraform(struct?: DataTessellDbServiceInfrastructureCloudAvailability): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServiceInfrastructureCloudAvailabilityToHclTerraform(struct?: DataTessellDbServiceInfrastructureCloudAvailability): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServiceInfrastructureCloudAvailabilityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServiceInfrastructureCloudAvailability | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServiceInfrastructureCloudAvailability | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloud - computed: true, optional: false, required: false
  public get cloud() {
    return this.getStringAttribute('cloud');
  }

  // regions - computed: true, optional: false, required: false
  private _regions = new DataTessellDbServiceInfrastructureCloudAvailabilityRegionsList(this, "regions", false);
  public get regions() {
    return this._regions;
  }
}

export class DataTessellDbServiceInfrastructureCloudAvailabilityList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServiceInfrastructureCloudAvailabilityOutputReference {
    return new DataTessellDbServiceInfrastructureCloudAvailabilityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServiceInfrastructureStorageConfigAzureNetAppConfig {
}

export function dataTessellDbServiceInfrastructureStorageConfigAzureNetAppConfigToTerraform(struct?: DataTessellDbServiceInfrastructureStorageConfigAzureNetAppConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServiceInfrastructureStorageConfigAzureNetAppConfigToHclTerraform(struct?: DataTessellDbServiceInfrastructureStorageConfigAzureNetAppConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServiceInfrastructureStorageConfigAzureNetAppConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServiceInfrastructureStorageConfigAzureNetAppConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServiceInfrastructureStorageConfigAzureNetAppConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // service_level - computed: true, optional: false, required: false
  public get serviceLevel() {
    return this.getStringAttribute('service_level');
  }
}

export class DataTessellDbServiceInfrastructureStorageConfigAzureNetAppConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServiceInfrastructureStorageConfigAzureNetAppConfigOutputReference {
    return new DataTessellDbServiceInfrastructureStorageConfigAzureNetAppConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServiceInfrastructureStorageConfig {
}

export function dataTessellDbServiceInfrastructureStorageConfigToTerraform(struct?: DataTessellDbServiceInfrastructureStorageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServiceInfrastructureStorageConfigToHclTerraform(struct?: DataTessellDbServiceInfrastructureStorageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServiceInfrastructureStorageConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServiceInfrastructureStorageConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServiceInfrastructureStorageConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // azure_net_app_config - computed: true, optional: false, required: false
  private _azureNetAppConfig = new DataTessellDbServiceInfrastructureStorageConfigAzureNetAppConfigList(this, "azure_net_app_config", false);
  public get azureNetAppConfig() {
    return this._azureNetAppConfig;
  }

  // provider - computed: true, optional: false, required: false
  public get provider() {
    return this.getStringAttribute('provider');
  }
}

export class DataTessellDbServiceInfrastructureStorageConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServiceInfrastructureStorageConfigOutputReference {
    return new DataTessellDbServiceInfrastructureStorageConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServiceInfrastructure {
}

export function dataTessellDbServiceInfrastructureToTerraform(struct?: DataTessellDbServiceInfrastructure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServiceInfrastructureToHclTerraform(struct?: DataTessellDbServiceInfrastructure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServiceInfrastructureOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServiceInfrastructure | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServiceInfrastructure | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_storage - computed: true, optional: false, required: false
  public get additionalStorage() {
    return this.getNumberAttribute('additional_storage');
  }

  // archive_storage_config - computed: true, optional: false, required: false
  private _archiveStorageConfig = new DataTessellDbServiceInfrastructureArchiveStorageConfigList(this, "archive_storage_config", false);
  public get archiveStorageConfig() {
    return this._archiveStorageConfig;
  }

  // availability_zone - computed: true, optional: false, required: false
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }

  // aws_infra_config - computed: true, optional: false, required: false
  private _awsInfraConfig = new DataTessellDbServiceInfrastructureAwsInfraConfigList(this, "aws_infra_config", false);
  public get awsInfraConfig() {
    return this._awsInfraConfig;
  }

  // cloud - computed: true, optional: false, required: false
  public get cloud() {
    return this.getStringAttribute('cloud');
  }

  // cloud_availability - computed: true, optional: false, required: false
  private _cloudAvailability = new DataTessellDbServiceInfrastructureCloudAvailabilityList(this, "cloud_availability", false);
  public get cloudAvailability() {
    return this._cloudAvailability;
  }

  // compute_provider - computed: true, optional: false, required: false
  public get computeProvider() {
    return this.getStringAttribute('compute_provider');
  }

  // compute_type - computed: true, optional: false, required: false
  public get computeType() {
    return this.getStringAttribute('compute_type');
  }

  // enable_compute_sharing - computed: true, optional: false, required: false
  public get enableComputeSharing() {
    return this.getBooleanAttribute('enable_compute_sharing');
  }

  // enable_encryption - computed: true, optional: false, required: false
  public get enableEncryption() {
    return this.getBooleanAttribute('enable_encryption');
  }

  // encryption_key - computed: true, optional: false, required: false
  public get encryptionKey() {
    return this.getStringAttribute('encryption_key');
  }

  // iops - computed: true, optional: false, required: false
  public get iops() {
    return this.getNumberAttribute('iops');
  }

  // multi_disk - computed: true, optional: false, required: false
  public get multiDisk() {
    return this.getBooleanAttribute('multi_disk');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // storage - computed: true, optional: false, required: false
  public get storage() {
    return this.getNumberAttribute('storage');
  }

  // storage_config - computed: true, optional: false, required: false
  private _storageConfig = new DataTessellDbServiceInfrastructureStorageConfigList(this, "storage_config", false);
  public get storageConfig() {
    return this._storageConfig;
  }

  // storage_provider - computed: true, optional: false, required: false
  public get storageProvider() {
    return this.getStringAttribute('storage_provider');
  }

  // throughput - computed: true, optional: false, required: false
  public get throughput() {
    return this.getNumberAttribute('throughput');
  }

  // timezone - computed: true, optional: false, required: false
  public get timezone() {
    return this.getStringAttribute('timezone');
  }

  // vpc - computed: true, optional: false, required: false
  public get vpc() {
    return this.getStringAttribute('vpc');
  }
}

export class DataTessellDbServiceInfrastructureList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServiceInfrastructureOutputReference {
    return new DataTessellDbServiceInfrastructureOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServiceInstancesArchiveStorageConfigAzureNetAppConfigEncryptionKeyInfo {
}

export function dataTessellDbServiceInstancesArchiveStorageConfigAzureNetAppConfigEncryptionKeyInfoToTerraform(struct?: DataTessellDbServiceInstancesArchiveStorageConfigAzureNetAppConfigEncryptionKeyInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServiceInstancesArchiveStorageConfigAzureNetAppConfigEncryptionKeyInfoToHclTerraform(struct?: DataTessellDbServiceInstancesArchiveStorageConfigAzureNetAppConfigEncryptionKeyInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServiceInstancesArchiveStorageConfigAzureNetAppConfigEncryptionKeyInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServiceInstancesArchiveStorageConfigAzureNetAppConfigEncryptionKeyInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServiceInstancesArchiveStorageConfigAzureNetAppConfigEncryptionKeyInfo | undefined) {
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

  // key_source - computed: true, optional: false, required: false
  public get keySource() {
    return this.getStringAttribute('key_source');
  }

  // key_vault_cloud_resource_id - computed: true, optional: false, required: false
  public get keyVaultCloudResourceId() {
    return this.getStringAttribute('key_vault_cloud_resource_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataTessellDbServiceInstancesArchiveStorageConfigAzureNetAppConfigEncryptionKeyInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServiceInstancesArchiveStorageConfigAzureNetAppConfigEncryptionKeyInfoOutputReference {
    return new DataTessellDbServiceInstancesArchiveStorageConfigAzureNetAppConfigEncryptionKeyInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServiceInstancesArchiveStorageConfigAzureNetAppConfig {
}

export function dataTessellDbServiceInstancesArchiveStorageConfigAzureNetAppConfigToTerraform(struct?: DataTessellDbServiceInstancesArchiveStorageConfigAzureNetAppConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServiceInstancesArchiveStorageConfigAzureNetAppConfigToHclTerraform(struct?: DataTessellDbServiceInstancesArchiveStorageConfigAzureNetAppConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServiceInstancesArchiveStorageConfigAzureNetAppConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServiceInstancesArchiveStorageConfigAzureNetAppConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServiceInstancesArchiveStorageConfigAzureNetAppConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // azure_net_app_id - computed: true, optional: false, required: false
  public get azureNetAppId() {
    return this.getStringAttribute('azure_net_app_id');
  }

  // azure_net_app_name - computed: true, optional: false, required: false
  public get azureNetAppName() {
    return this.getStringAttribute('azure_net_app_name');
  }

  // capacity_pool_id - computed: true, optional: false, required: false
  public get capacityPoolId() {
    return this.getStringAttribute('capacity_pool_id');
  }

  // capacity_pool_name - computed: true, optional: false, required: false
  public get capacityPoolName() {
    return this.getStringAttribute('capacity_pool_name');
  }

  // delegated_subnet_id - computed: true, optional: false, required: false
  public get delegatedSubnetId() {
    return this.getStringAttribute('delegated_subnet_id');
  }

  // delegated_subnet_name - computed: true, optional: false, required: false
  public get delegatedSubnetName() {
    return this.getStringAttribute('delegated_subnet_name');
  }

  // encryption_key_info - computed: true, optional: false, required: false
  private _encryptionKeyInfo = new DataTessellDbServiceInstancesArchiveStorageConfigAzureNetAppConfigEncryptionKeyInfoList(this, "encryption_key_info", false);
  public get encryptionKeyInfo() {
    return this._encryptionKeyInfo;
  }

  // network_features - computed: true, optional: false, required: false
  public get networkFeatures() {
    return this.getStringAttribute('network_features');
  }

  // service_level - computed: true, optional: false, required: false
  public get serviceLevel() {
    return this.getStringAttribute('service_level');
  }

  // volume_name - computed: true, optional: false, required: false
  public get volumeName() {
    return this.getStringAttribute('volume_name');
  }
}

export class DataTessellDbServiceInstancesArchiveStorageConfigAzureNetAppConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServiceInstancesArchiveStorageConfigAzureNetAppConfigOutputReference {
    return new DataTessellDbServiceInstancesArchiveStorageConfigAzureNetAppConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServiceInstancesArchiveStorageConfigFsxNetAppConfig {
}

export function dataTessellDbServiceInstancesArchiveStorageConfigFsxNetAppConfigToTerraform(struct?: DataTessellDbServiceInstancesArchiveStorageConfigFsxNetAppConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServiceInstancesArchiveStorageConfigFsxNetAppConfigToHclTerraform(struct?: DataTessellDbServiceInstancesArchiveStorageConfigFsxNetAppConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServiceInstancesArchiveStorageConfigFsxNetAppConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServiceInstancesArchiveStorageConfigFsxNetAppConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServiceInstancesArchiveStorageConfigFsxNetAppConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // file_system_id - computed: true, optional: false, required: false
  public get fileSystemId() {
    return this.getStringAttribute('file_system_id');
  }

  // file_system_name - computed: true, optional: false, required: false
  public get fileSystemName() {
    return this.getStringAttribute('file_system_name');
  }

  // svm_id - computed: true, optional: false, required: false
  public get svmId() {
    return this.getStringAttribute('svm_id');
  }

  // svm_name - computed: true, optional: false, required: false
  public get svmName() {
    return this.getStringAttribute('svm_name');
  }

  // volume_name - computed: true, optional: false, required: false
  public get volumeName() {
    return this.getStringAttribute('volume_name');
  }
}

export class DataTessellDbServiceInstancesArchiveStorageConfigFsxNetAppConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServiceInstancesArchiveStorageConfigFsxNetAppConfigOutputReference {
    return new DataTessellDbServiceInstancesArchiveStorageConfigFsxNetAppConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServiceInstancesArchiveStorageConfig {
}

export function dataTessellDbServiceInstancesArchiveStorageConfigToTerraform(struct?: DataTessellDbServiceInstancesArchiveStorageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServiceInstancesArchiveStorageConfigToHclTerraform(struct?: DataTessellDbServiceInstancesArchiveStorageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServiceInstancesArchiveStorageConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServiceInstancesArchiveStorageConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServiceInstancesArchiveStorageConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // azure_net_app_config - computed: true, optional: false, required: false
  private _azureNetAppConfig = new DataTessellDbServiceInstancesArchiveStorageConfigAzureNetAppConfigList(this, "azure_net_app_config", false);
  public get azureNetAppConfig() {
    return this._azureNetAppConfig;
  }

  // fsx_net_app_config - computed: true, optional: false, required: false
  private _fsxNetAppConfig = new DataTessellDbServiceInstancesArchiveStorageConfigFsxNetAppConfigList(this, "fsx_net_app_config", false);
  public get fsxNetAppConfig() {
    return this._fsxNetAppConfig;
  }

  // provider - computed: true, optional: false, required: false
  public get provider() {
    return this.getStringAttribute('provider');
  }

  // volume_type - computed: true, optional: false, required: false
  public get volumeType() {
    return this.getStringAttribute('volume_type');
  }
}

export class DataTessellDbServiceInstancesArchiveStorageConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServiceInstancesArchiveStorageConfigOutputReference {
    return new DataTessellDbServiceInstancesArchiveStorageConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServiceInstancesAwsInfraConfigAwsCpuOptions {
}

export function dataTessellDbServiceInstancesAwsInfraConfigAwsCpuOptionsToTerraform(struct?: DataTessellDbServiceInstancesAwsInfraConfigAwsCpuOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServiceInstancesAwsInfraConfigAwsCpuOptionsToHclTerraform(struct?: DataTessellDbServiceInstancesAwsInfraConfigAwsCpuOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServiceInstancesAwsInfraConfigAwsCpuOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServiceInstancesAwsInfraConfigAwsCpuOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServiceInstancesAwsInfraConfigAwsCpuOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // vcpus - computed: true, optional: false, required: false
  public get vcpus() {
    return this.getNumberAttribute('vcpus');
  }
}

export class DataTessellDbServiceInstancesAwsInfraConfigAwsCpuOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServiceInstancesAwsInfraConfigAwsCpuOptionsOutputReference {
    return new DataTessellDbServiceInstancesAwsInfraConfigAwsCpuOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServiceInstancesAwsInfraConfig {
}

export function dataTessellDbServiceInstancesAwsInfraConfigToTerraform(struct?: DataTessellDbServiceInstancesAwsInfraConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServiceInstancesAwsInfraConfigToHclTerraform(struct?: DataTessellDbServiceInstancesAwsInfraConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServiceInstancesAwsInfraConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServiceInstancesAwsInfraConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServiceInstancesAwsInfraConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aws_cpu_options - computed: true, optional: false, required: false
  private _awsCpuOptions = new DataTessellDbServiceInstancesAwsInfraConfigAwsCpuOptionsList(this, "aws_cpu_options", false);
  public get awsCpuOptions() {
    return this._awsCpuOptions;
  }
}

export class DataTessellDbServiceInstancesAwsInfraConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServiceInstancesAwsInfraConfigOutputReference {
    return new DataTessellDbServiceInstancesAwsInfraConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServiceInstancesComputeConfigExadataConfig {
}

export function dataTessellDbServiceInstancesComputeConfigExadataConfigToTerraform(struct?: DataTessellDbServiceInstancesComputeConfigExadataConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServiceInstancesComputeConfigExadataConfigToHclTerraform(struct?: DataTessellDbServiceInstancesComputeConfigExadataConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServiceInstancesComputeConfigExadataConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServiceInstancesComputeConfigExadataConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServiceInstancesComputeConfigExadataConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // infrastructure_id - computed: true, optional: false, required: false
  public get infrastructureId() {
    return this.getStringAttribute('infrastructure_id');
  }

  // infrastructure_name - computed: true, optional: false, required: false
  public get infrastructureName() {
    return this.getStringAttribute('infrastructure_name');
  }

  // memory - computed: true, optional: false, required: false
  public get memory() {
    return this.getNumberAttribute('memory');
  }

  // vcpus - computed: true, optional: false, required: false
  public get vcpus() {
    return this.getNumberAttribute('vcpus');
  }

  // vm_cluster_id - computed: true, optional: false, required: false
  public get vmClusterId() {
    return this.getStringAttribute('vm_cluster_id');
  }

  // vm_cluster_name - computed: true, optional: false, required: false
  public get vmClusterName() {
    return this.getStringAttribute('vm_cluster_name');
  }
}

export class DataTessellDbServiceInstancesComputeConfigExadataConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServiceInstancesComputeConfigExadataConfigOutputReference {
    return new DataTessellDbServiceInstancesComputeConfigExadataConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServiceInstancesComputeConfig {
}

export function dataTessellDbServiceInstancesComputeConfigToTerraform(struct?: DataTessellDbServiceInstancesComputeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServiceInstancesComputeConfigToHclTerraform(struct?: DataTessellDbServiceInstancesComputeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServiceInstancesComputeConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServiceInstancesComputeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServiceInstancesComputeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // exadata_config - computed: true, optional: false, required: false
  private _exadataConfig = new DataTessellDbServiceInstancesComputeConfigExadataConfigList(this, "exadata_config", false);
  public get exadataConfig() {
    return this._exadataConfig;
  }

  // provider - computed: true, optional: false, required: false
  public get provider() {
    return this.getStringAttribute('provider');
  }
}

export class DataTessellDbServiceInstancesComputeConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServiceInstancesComputeConfigOutputReference {
    return new DataTessellDbServiceInstancesComputeConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServiceInstancesConnectString {
}

export function dataTessellDbServiceInstancesConnectStringToTerraform(struct?: DataTessellDbServiceInstancesConnectString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServiceInstancesConnectStringToHclTerraform(struct?: DataTessellDbServiceInstancesConnectString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServiceInstancesConnectStringOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServiceInstancesConnectString | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServiceInstancesConnectString | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connect_descriptor - computed: true, optional: false, required: false
  public get connectDescriptor() {
    return this.getStringAttribute('connect_descriptor');
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // master_user - computed: true, optional: false, required: false
  public get masterUser() {
    return this.getStringAttribute('master_user');
  }

  // service_port - computed: true, optional: false, required: false
  public get servicePort() {
    return this.getStringAttribute('service_port');
  }
}

export class DataTessellDbServiceInstancesConnectStringList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServiceInstancesConnectStringOutputReference {
    return new DataTessellDbServiceInstancesConnectStringOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServiceInstancesEngineConfigurationOracleConfig {
}

export function dataTessellDbServiceInstancesEngineConfigurationOracleConfigToTerraform(struct?: DataTessellDbServiceInstancesEngineConfigurationOracleConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServiceInstancesEngineConfigurationOracleConfigToHclTerraform(struct?: DataTessellDbServiceInstancesEngineConfigurationOracleConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServiceInstancesEngineConfigurationOracleConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServiceInstancesEngineConfigurationOracleConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServiceInstancesEngineConfigurationOracleConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_mode - computed: true, optional: false, required: false
  public get accessMode() {
    return this.getStringAttribute('access_mode');
  }
}

export class DataTessellDbServiceInstancesEngineConfigurationOracleConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServiceInstancesEngineConfigurationOracleConfigOutputReference {
    return new DataTessellDbServiceInstancesEngineConfigurationOracleConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServiceInstancesEngineConfiguration {
}

export function dataTessellDbServiceInstancesEngineConfigurationToTerraform(struct?: DataTessellDbServiceInstancesEngineConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServiceInstancesEngineConfigurationToHclTerraform(struct?: DataTessellDbServiceInstancesEngineConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServiceInstancesEngineConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServiceInstancesEngineConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServiceInstancesEngineConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // oracle_config - computed: true, optional: false, required: false
  private _oracleConfig = new DataTessellDbServiceInstancesEngineConfigurationOracleConfigList(this, "oracle_config", false);
  public get oracleConfig() {
    return this._oracleConfig;
  }
}

export class DataTessellDbServiceInstancesEngineConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServiceInstancesEngineConfigurationOutputReference {
    return new DataTessellDbServiceInstancesEngineConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServiceInstancesMonitoringConfigPerfInsights {
}

export function dataTessellDbServiceInstancesMonitoringConfigPerfInsightsToTerraform(struct?: DataTessellDbServiceInstancesMonitoringConfigPerfInsights): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServiceInstancesMonitoringConfigPerfInsightsToHclTerraform(struct?: DataTessellDbServiceInstancesMonitoringConfigPerfInsights): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServiceInstancesMonitoringConfigPerfInsightsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServiceInstancesMonitoringConfigPerfInsights | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServiceInstancesMonitoringConfigPerfInsights | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // monitoring_deployment_id - computed: true, optional: false, required: false
  public get monitoringDeploymentId() {
    return this.getStringAttribute('monitoring_deployment_id');
  }

  // perf_insights_enabled - computed: true, optional: false, required: false
  public get perfInsightsEnabled() {
    return this.getBooleanAttribute('perf_insights_enabled');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataTessellDbServiceInstancesMonitoringConfigPerfInsightsList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServiceInstancesMonitoringConfigPerfInsightsOutputReference {
    return new DataTessellDbServiceInstancesMonitoringConfigPerfInsightsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServiceInstancesMonitoringConfig {
}

export function dataTessellDbServiceInstancesMonitoringConfigToTerraform(struct?: DataTessellDbServiceInstancesMonitoringConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServiceInstancesMonitoringConfigToHclTerraform(struct?: DataTessellDbServiceInstancesMonitoringConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServiceInstancesMonitoringConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServiceInstancesMonitoringConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServiceInstancesMonitoringConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // perf_insights - computed: true, optional: false, required: false
  private _perfInsights = new DataTessellDbServiceInstancesMonitoringConfigPerfInsightsList(this, "perf_insights", false);
  public get perfInsights() {
    return this._perfInsights;
  }
}

export class DataTessellDbServiceInstancesMonitoringConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServiceInstancesMonitoringConfigOutputReference {
    return new DataTessellDbServiceInstancesMonitoringConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServiceInstancesOptionProfile {
}

export function dataTessellDbServiceInstancesOptionProfileToTerraform(struct?: DataTessellDbServiceInstancesOptionProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServiceInstancesOptionProfileToHclTerraform(struct?: DataTessellDbServiceInstancesOptionProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServiceInstancesOptionProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServiceInstancesOptionProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServiceInstancesOptionProfile | undefined) {
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataTessellDbServiceInstancesOptionProfileList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServiceInstancesOptionProfileOutputReference {
    return new DataTessellDbServiceInstancesOptionProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServiceInstancesParameterProfile {
}

export function dataTessellDbServiceInstancesParameterProfileToTerraform(struct?: DataTessellDbServiceInstancesParameterProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServiceInstancesParameterProfileToHclTerraform(struct?: DataTessellDbServiceInstancesParameterProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServiceInstancesParameterProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServiceInstancesParameterProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServiceInstancesParameterProfile | undefined) {
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataTessellDbServiceInstancesParameterProfileList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServiceInstancesParameterProfileOutputReference {
    return new DataTessellDbServiceInstancesParameterProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServiceInstancesPrivateLinkInfo {
}

export function dataTessellDbServiceInstancesPrivateLinkInfoToTerraform(struct?: DataTessellDbServiceInstancesPrivateLinkInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServiceInstancesPrivateLinkInfoToHclTerraform(struct?: DataTessellDbServiceInstancesPrivateLinkInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServiceInstancesPrivateLinkInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServiceInstancesPrivateLinkInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServiceInstancesPrivateLinkInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_azure_subscription_ids - computed: true, optional: false, required: false
  public get clientAzureSubscriptionIds() {
    return this.getListAttribute('client_azure_subscription_ids');
  }

  // endpoint_service_name - computed: true, optional: false, required: false
  public get endpointServiceName() {
    return this.getStringAttribute('endpoint_service_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // private_link_service_alias - computed: true, optional: false, required: false
  public get privateLinkServiceAlias() {
    return this.getStringAttribute('private_link_service_alias');
  }

  // service_principals - computed: true, optional: false, required: false
  public get servicePrincipals() {
    return this.getListAttribute('service_principals');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataTessellDbServiceInstancesPrivateLinkInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServiceInstancesPrivateLinkInfoOutputReference {
    return new DataTessellDbServiceInstancesPrivateLinkInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServiceInstancesStorageConfigAzureNetAppConfigEncryptionKeyInfo {
}

export function dataTessellDbServiceInstancesStorageConfigAzureNetAppConfigEncryptionKeyInfoToTerraform(struct?: DataTessellDbServiceInstancesStorageConfigAzureNetAppConfigEncryptionKeyInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServiceInstancesStorageConfigAzureNetAppConfigEncryptionKeyInfoToHclTerraform(struct?: DataTessellDbServiceInstancesStorageConfigAzureNetAppConfigEncryptionKeyInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServiceInstancesStorageConfigAzureNetAppConfigEncryptionKeyInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServiceInstancesStorageConfigAzureNetAppConfigEncryptionKeyInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServiceInstancesStorageConfigAzureNetAppConfigEncryptionKeyInfo | undefined) {
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

  // key_source - computed: true, optional: false, required: false
  public get keySource() {
    return this.getStringAttribute('key_source');
  }

  // key_vault_cloud_resource_id - computed: true, optional: false, required: false
  public get keyVaultCloudResourceId() {
    return this.getStringAttribute('key_vault_cloud_resource_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataTessellDbServiceInstancesStorageConfigAzureNetAppConfigEncryptionKeyInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServiceInstancesStorageConfigAzureNetAppConfigEncryptionKeyInfoOutputReference {
    return new DataTessellDbServiceInstancesStorageConfigAzureNetAppConfigEncryptionKeyInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServiceInstancesStorageConfigAzureNetAppConfig {
}

export function dataTessellDbServiceInstancesStorageConfigAzureNetAppConfigToTerraform(struct?: DataTessellDbServiceInstancesStorageConfigAzureNetAppConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServiceInstancesStorageConfigAzureNetAppConfigToHclTerraform(struct?: DataTessellDbServiceInstancesStorageConfigAzureNetAppConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServiceInstancesStorageConfigAzureNetAppConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServiceInstancesStorageConfigAzureNetAppConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServiceInstancesStorageConfigAzureNetAppConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // azure_net_app_id - computed: true, optional: false, required: false
  public get azureNetAppId() {
    return this.getStringAttribute('azure_net_app_id');
  }

  // azure_net_app_name - computed: true, optional: false, required: false
  public get azureNetAppName() {
    return this.getStringAttribute('azure_net_app_name');
  }

  // capacity_pool_id - computed: true, optional: false, required: false
  public get capacityPoolId() {
    return this.getStringAttribute('capacity_pool_id');
  }

  // capacity_pool_name - computed: true, optional: false, required: false
  public get capacityPoolName() {
    return this.getStringAttribute('capacity_pool_name');
  }

  // delegated_subnet_id - computed: true, optional: false, required: false
  public get delegatedSubnetId() {
    return this.getStringAttribute('delegated_subnet_id');
  }

  // delegated_subnet_name - computed: true, optional: false, required: false
  public get delegatedSubnetName() {
    return this.getStringAttribute('delegated_subnet_name');
  }

  // encryption_key_info - computed: true, optional: false, required: false
  private _encryptionKeyInfo = new DataTessellDbServiceInstancesStorageConfigAzureNetAppConfigEncryptionKeyInfoList(this, "encryption_key_info", false);
  public get encryptionKeyInfo() {
    return this._encryptionKeyInfo;
  }

  // network_features - computed: true, optional: false, required: false
  public get networkFeatures() {
    return this.getStringAttribute('network_features');
  }

  // service_level - computed: true, optional: false, required: false
  public get serviceLevel() {
    return this.getStringAttribute('service_level');
  }

  // volume_name - computed: true, optional: false, required: false
  public get volumeName() {
    return this.getStringAttribute('volume_name');
  }
}

export class DataTessellDbServiceInstancesStorageConfigAzureNetAppConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServiceInstancesStorageConfigAzureNetAppConfigOutputReference {
    return new DataTessellDbServiceInstancesStorageConfigAzureNetAppConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServiceInstancesStorageConfigFsxNetAppConfig {
}

export function dataTessellDbServiceInstancesStorageConfigFsxNetAppConfigToTerraform(struct?: DataTessellDbServiceInstancesStorageConfigFsxNetAppConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServiceInstancesStorageConfigFsxNetAppConfigToHclTerraform(struct?: DataTessellDbServiceInstancesStorageConfigFsxNetAppConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServiceInstancesStorageConfigFsxNetAppConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServiceInstancesStorageConfigFsxNetAppConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServiceInstancesStorageConfigFsxNetAppConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // file_system_id - computed: true, optional: false, required: false
  public get fileSystemId() {
    return this.getStringAttribute('file_system_id');
  }

  // file_system_name - computed: true, optional: false, required: false
  public get fileSystemName() {
    return this.getStringAttribute('file_system_name');
  }

  // svm_id - computed: true, optional: false, required: false
  public get svmId() {
    return this.getStringAttribute('svm_id');
  }

  // svm_name - computed: true, optional: false, required: false
  public get svmName() {
    return this.getStringAttribute('svm_name');
  }

  // volume_name - computed: true, optional: false, required: false
  public get volumeName() {
    return this.getStringAttribute('volume_name');
  }
}

export class DataTessellDbServiceInstancesStorageConfigFsxNetAppConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServiceInstancesStorageConfigFsxNetAppConfigOutputReference {
    return new DataTessellDbServiceInstancesStorageConfigFsxNetAppConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServiceInstancesStorageConfig {
}

export function dataTessellDbServiceInstancesStorageConfigToTerraform(struct?: DataTessellDbServiceInstancesStorageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServiceInstancesStorageConfigToHclTerraform(struct?: DataTessellDbServiceInstancesStorageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServiceInstancesStorageConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServiceInstancesStorageConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServiceInstancesStorageConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // azure_net_app_config - computed: true, optional: false, required: false
  private _azureNetAppConfig = new DataTessellDbServiceInstancesStorageConfigAzureNetAppConfigList(this, "azure_net_app_config", false);
  public get azureNetAppConfig() {
    return this._azureNetAppConfig;
  }

  // fsx_net_app_config - computed: true, optional: false, required: false
  private _fsxNetAppConfig = new DataTessellDbServiceInstancesStorageConfigFsxNetAppConfigList(this, "fsx_net_app_config", false);
  public get fsxNetAppConfig() {
    return this._fsxNetAppConfig;
  }

  // provider - computed: true, optional: false, required: false
  public get provider() {
    return this.getStringAttribute('provider');
  }

  // volume_type - computed: true, optional: false, required: false
  public get volumeType() {
    return this.getStringAttribute('volume_type');
  }
}

export class DataTessellDbServiceInstancesStorageConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServiceInstancesStorageConfigOutputReference {
    return new DataTessellDbServiceInstancesStorageConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServiceInstancesUpdatesInProgress {
}

export function dataTessellDbServiceInstancesUpdatesInProgressToTerraform(struct?: DataTessellDbServiceInstancesUpdatesInProgress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServiceInstancesUpdatesInProgressToHclTerraform(struct?: DataTessellDbServiceInstancesUpdatesInProgress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServiceInstancesUpdatesInProgressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServiceInstancesUpdatesInProgress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServiceInstancesUpdatesInProgress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // reference_id - computed: true, optional: false, required: false
  public get referenceId() {
    return this.getStringAttribute('reference_id');
  }

  // submitted_at - computed: true, optional: false, required: false
  public get submittedAt() {
    return this.getStringAttribute('submitted_at');
  }

  // update_info - computed: true, optional: false, required: false
  private _updateInfo = new cdktf.StringMap(this, "update_info");
  public get updateInfo() {
    return this._updateInfo;
  }

  // update_type - computed: true, optional: false, required: false
  public get updateType() {
    return this.getStringAttribute('update_type');
  }
}

export class DataTessellDbServiceInstancesUpdatesInProgressList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServiceInstancesUpdatesInProgressOutputReference {
    return new DataTessellDbServiceInstancesUpdatesInProgressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServiceInstances {
}

export function dataTessellDbServiceInstancesToTerraform(struct?: DataTessellDbServiceInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServiceInstancesToHclTerraform(struct?: DataTessellDbServiceInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServiceInstancesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServiceInstances | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServiceInstances | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // archive_storage_config - computed: true, optional: false, required: false
  private _archiveStorageConfig = new DataTessellDbServiceInstancesArchiveStorageConfigList(this, "archive_storage_config", false);
  public get archiveStorageConfig() {
    return this._archiveStorageConfig;
  }

  // availability_zone - computed: true, optional: false, required: false
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }

  // aws_infra_config - computed: true, optional: false, required: false
  private _awsInfraConfig = new DataTessellDbServiceInstancesAwsInfraConfigList(this, "aws_infra_config", false);
  public get awsInfraConfig() {
    return this._awsInfraConfig;
  }

  // cloud - computed: true, optional: false, required: false
  public get cloud() {
    return this.getStringAttribute('cloud');
  }

  // compute_config - computed: true, optional: false, required: false
  private _computeConfig = new DataTessellDbServiceInstancesComputeConfigList(this, "compute_config", false);
  public get computeConfig() {
    return this._computeConfig;
  }

  // compute_id - computed: true, optional: false, required: false
  public get computeId() {
    return this.getStringAttribute('compute_id');
  }

  // compute_name - computed: true, optional: false, required: false
  public get computeName() {
    return this.getStringAttribute('compute_name');
  }

  // compute_type - computed: true, optional: false, required: false
  public get computeType() {
    return this.getStringAttribute('compute_type');
  }

  // connect_string - computed: true, optional: false, required: false
  private _connectString = new DataTessellDbServiceInstancesConnectStringList(this, "connect_string", false);
  public get connectString() {
    return this._connectString;
  }

  // data_volume_iops - computed: true, optional: false, required: false
  public get dataVolumeIops() {
    return this.getNumberAttribute('data_volume_iops');
  }

  // date_created - computed: true, optional: false, required: false
  public get dateCreated() {
    return this.getStringAttribute('date_created');
  }

  // enable_perf_insights - computed: true, optional: false, required: false
  public get enablePerfInsights() {
    return this.getBooleanAttribute('enable_perf_insights');
  }

  // encryption_key - computed: true, optional: false, required: false
  public get encryptionKey() {
    return this.getStringAttribute('encryption_key');
  }

  // engine_configuration - computed: true, optional: false, required: false
  private _engineConfiguration = new DataTessellDbServiceInstancesEngineConfigurationList(this, "engine_configuration", false);
  public get engineConfiguration() {
    return this._engineConfiguration;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_group_id - computed: true, optional: false, required: false
  public get instanceGroupId() {
    return this.getStringAttribute('instance_group_id');
  }

  // instance_group_name - computed: true, optional: false, required: false
  public get instanceGroupName() {
    return this.getStringAttribute('instance_group_name');
  }

  // last_started_at - computed: true, optional: false, required: false
  public get lastStartedAt() {
    return this.getStringAttribute('last_started_at');
  }

  // last_stopped_at - computed: true, optional: false, required: false
  public get lastStoppedAt() {
    return this.getStringAttribute('last_stopped_at');
  }

  // monitoring_config - computed: true, optional: false, required: false
  private _monitoringConfig = new DataTessellDbServiceInstancesMonitoringConfigList(this, "monitoring_config", false);
  public get monitoringConfig() {
    return this._monitoringConfig;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // option_profile - computed: true, optional: false, required: false
  private _optionProfile = new DataTessellDbServiceInstancesOptionProfileList(this, "option_profile", false);
  public get optionProfile() {
    return this._optionProfile;
  }

  // parameter_profile - computed: true, optional: false, required: false
  private _parameterProfile = new DataTessellDbServiceInstancesParameterProfileList(this, "parameter_profile", false);
  public get parameterProfile() {
    return this._parameterProfile;
  }

  // private_link_info - computed: true, optional: false, required: false
  private _privateLinkInfo = new DataTessellDbServiceInstancesPrivateLinkInfoList(this, "private_link_info", false);
  public get privateLinkInfo() {
    return this._privateLinkInfo;
  }

  // private_subnet - computed: true, optional: false, required: false
  public get privateSubnet() {
    return this.getStringAttribute('private_subnet');
  }

  // public_subnet - computed: true, optional: false, required: false
  public get publicSubnet() {
    return this.getStringAttribute('public_subnet');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // software_image - computed: true, optional: false, required: false
  public get softwareImage() {
    return this.getStringAttribute('software_image');
  }

  // software_image_version - computed: true, optional: false, required: false
  public get softwareImageVersion() {
    return this.getStringAttribute('software_image_version');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // storage - computed: true, optional: false, required: false
  public get storage() {
    return this.getNumberAttribute('storage');
  }

  // storage_config - computed: true, optional: false, required: false
  private _storageConfig = new DataTessellDbServiceInstancesStorageConfigList(this, "storage_config", false);
  public get storageConfig() {
    return this._storageConfig;
  }

  // sync_mode - computed: true, optional: false, required: false
  public get syncMode() {
    return this.getStringAttribute('sync_mode');
  }

  // tessell_service_id - computed: true, optional: false, required: false
  public get tessellServiceId() {
    return this.getStringAttribute('tessell_service_id');
  }

  // throughput - computed: true, optional: false, required: false
  public get throughput() {
    return this.getNumberAttribute('throughput');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // updates_in_progress - computed: true, optional: false, required: false
  private _updatesInProgress = new DataTessellDbServiceInstancesUpdatesInProgressList(this, "updates_in_progress", false);
  public get updatesInProgress() {
    return this._updatesInProgress;
  }

  // vpc - computed: true, optional: false, required: false
  public get vpc() {
    return this.getStringAttribute('vpc');
  }
}

export class DataTessellDbServiceInstancesList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServiceInstancesOutputReference {
    return new DataTessellDbServiceInstancesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServiceIntegrationsConfig {
}

export function dataTessellDbServiceIntegrationsConfigToTerraform(struct?: DataTessellDbServiceIntegrationsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServiceIntegrationsConfigToHclTerraform(struct?: DataTessellDbServiceIntegrationsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServiceIntegrationsConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServiceIntegrationsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServiceIntegrationsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // integrations - computed: true, optional: false, required: false
  public get integrations() {
    return this.getListAttribute('integrations');
  }
}

export class DataTessellDbServiceIntegrationsConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServiceIntegrationsConfigOutputReference {
    return new DataTessellDbServiceIntegrationsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServiceMaintenanceWindow {
}

export function dataTessellDbServiceMaintenanceWindowToTerraform(struct?: DataTessellDbServiceMaintenanceWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServiceMaintenanceWindowToHclTerraform(struct?: DataTessellDbServiceMaintenanceWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServiceMaintenanceWindowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServiceMaintenanceWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServiceMaintenanceWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // day - computed: true, optional: false, required: false
  public get day() {
    return this.getStringAttribute('day');
  }

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getNumberAttribute('duration');
  }

  // time - computed: true, optional: false, required: false
  public get time() {
    return this.getStringAttribute('time');
  }
}

export class DataTessellDbServiceMaintenanceWindowList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServiceMaintenanceWindowOutputReference {
    return new DataTessellDbServiceMaintenanceWindowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServiceRefreshInfoScriptInfoPostScriptInfo {
}

export function dataTessellDbServiceRefreshInfoScriptInfoPostScriptInfoToTerraform(struct?: DataTessellDbServiceRefreshInfoScriptInfoPostScriptInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServiceRefreshInfoScriptInfoPostScriptInfoToHclTerraform(struct?: DataTessellDbServiceRefreshInfoScriptInfoPostScriptInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServiceRefreshInfoScriptInfoPostScriptInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServiceRefreshInfoScriptInfoPostScriptInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServiceRefreshInfoScriptInfoPostScriptInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // script_id - computed: true, optional: false, required: false
  public get scriptId() {
    return this.getStringAttribute('script_id');
  }

  // script_version - computed: true, optional: false, required: false
  public get scriptVersion() {
    return this.getStringAttribute('script_version');
  }
}

export class DataTessellDbServiceRefreshInfoScriptInfoPostScriptInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServiceRefreshInfoScriptInfoPostScriptInfoOutputReference {
    return new DataTessellDbServiceRefreshInfoScriptInfoPostScriptInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServiceRefreshInfoScriptInfoPreScriptInfo {
}

export function dataTessellDbServiceRefreshInfoScriptInfoPreScriptInfoToTerraform(struct?: DataTessellDbServiceRefreshInfoScriptInfoPreScriptInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServiceRefreshInfoScriptInfoPreScriptInfoToHclTerraform(struct?: DataTessellDbServiceRefreshInfoScriptInfoPreScriptInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServiceRefreshInfoScriptInfoPreScriptInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServiceRefreshInfoScriptInfoPreScriptInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServiceRefreshInfoScriptInfoPreScriptInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // script_id - computed: true, optional: false, required: false
  public get scriptId() {
    return this.getStringAttribute('script_id');
  }

  // script_version - computed: true, optional: false, required: false
  public get scriptVersion() {
    return this.getStringAttribute('script_version');
  }
}

export class DataTessellDbServiceRefreshInfoScriptInfoPreScriptInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServiceRefreshInfoScriptInfoPreScriptInfoOutputReference {
    return new DataTessellDbServiceRefreshInfoScriptInfoPreScriptInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServiceRefreshInfoScriptInfo {
}

export function dataTessellDbServiceRefreshInfoScriptInfoToTerraform(struct?: DataTessellDbServiceRefreshInfoScriptInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServiceRefreshInfoScriptInfoToHclTerraform(struct?: DataTessellDbServiceRefreshInfoScriptInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServiceRefreshInfoScriptInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServiceRefreshInfoScriptInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServiceRefreshInfoScriptInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // post_script_info - computed: true, optional: false, required: false
  private _postScriptInfo = new DataTessellDbServiceRefreshInfoScriptInfoPostScriptInfoList(this, "post_script_info", false);
  public get postScriptInfo() {
    return this._postScriptInfo;
  }

  // pre_script_info - computed: true, optional: false, required: false
  private _preScriptInfo = new DataTessellDbServiceRefreshInfoScriptInfoPreScriptInfoList(this, "pre_script_info", false);
  public get preScriptInfo() {
    return this._preScriptInfo;
  }
}

export class DataTessellDbServiceRefreshInfoScriptInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServiceRefreshInfoScriptInfoOutputReference {
    return new DataTessellDbServiceRefreshInfoScriptInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServiceRefreshInfo {
}

export function dataTessellDbServiceRefreshInfoToTerraform(struct?: DataTessellDbServiceRefreshInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServiceRefreshInfoToHclTerraform(struct?: DataTessellDbServiceRefreshInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServiceRefreshInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServiceRefreshInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServiceRefreshInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content_type - computed: true, optional: false, required: false
  public get contentType() {
    return this.getStringAttribute('content_type');
  }

  // last_successful_refresh_time - computed: true, optional: false, required: false
  public get lastSuccessfulRefreshTime() {
    return this.getStringAttribute('last_successful_refresh_time');
  }

  // pitr - computed: true, optional: false, required: false
  public get pitr() {
    return this.getStringAttribute('pitr');
  }

  // schedule_id - computed: true, optional: false, required: false
  public get scheduleId() {
    return this.getStringAttribute('schedule_id');
  }

  // script_info - computed: true, optional: false, required: false
  private _scriptInfo = new DataTessellDbServiceRefreshInfoScriptInfoList(this, "script_info", false);
  public get scriptInfo() {
    return this._scriptInfo;
  }

  // snapshot_name - computed: true, optional: false, required: false
  public get snapshotName() {
    return this.getStringAttribute('snapshot_name');
  }

  // snapshot_time - computed: true, optional: false, required: false
  public get snapshotTime() {
    return this.getStringAttribute('snapshot_time');
  }
}

export class DataTessellDbServiceRefreshInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServiceRefreshInfoOutputReference {
    return new DataTessellDbServiceRefreshInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServiceServiceConnectivityComputesConnectivityPortAccessConfig {
}

export function dataTessellDbServiceServiceConnectivityComputesConnectivityPortAccessConfigToTerraform(struct?: DataTessellDbServiceServiceConnectivityComputesConnectivityPortAccessConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServiceServiceConnectivityComputesConnectivityPortAccessConfigToHclTerraform(struct?: DataTessellDbServiceServiceConnectivityComputesConnectivityPortAccessConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServiceServiceConnectivityComputesConnectivityPortAccessConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServiceServiceConnectivityComputesConnectivityPortAccessConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServiceServiceConnectivityComputesConnectivityPortAccessConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_ip_addresses - computed: true, optional: false, required: false
  public get allowedIpAddresses() {
    return this.getListAttribute('allowed_ip_addresses');
  }

  // enable_public_access - computed: true, optional: false, required: false
  public get enablePublicAccess() {
    return this.getBooleanAttribute('enable_public_access');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}

export class DataTessellDbServiceServiceConnectivityComputesConnectivityPortAccessConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServiceServiceConnectivityComputesConnectivityPortAccessConfigOutputReference {
    return new DataTessellDbServiceServiceConnectivityComputesConnectivityPortAccessConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServiceServiceConnectivityComputesConnectivity {
}

export function dataTessellDbServiceServiceConnectivityComputesConnectivityToTerraform(struct?: DataTessellDbServiceServiceConnectivityComputesConnectivity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServiceServiceConnectivityComputesConnectivityToHclTerraform(struct?: DataTessellDbServiceServiceConnectivityComputesConnectivity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServiceServiceConnectivityComputesConnectivityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServiceServiceConnectivityComputesConnectivity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServiceServiceConnectivityComputesConnectivity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compute_resource_id - computed: true, optional: false, required: false
  public get computeResourceId() {
    return this.getStringAttribute('compute_resource_id');
  }

  // port_access_config - computed: true, optional: false, required: false
  private _portAccessConfig = new DataTessellDbServiceServiceConnectivityComputesConnectivityPortAccessConfigList(this, "port_access_config", false);
  public get portAccessConfig() {
    return this._portAccessConfig;
  }
}

export class DataTessellDbServiceServiceConnectivityComputesConnectivityList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServiceServiceConnectivityComputesConnectivityOutputReference {
    return new DataTessellDbServiceServiceConnectivityComputesConnectivityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServiceServiceConnectivityConnectStrings {
}

export function dataTessellDbServiceServiceConnectivityConnectStringsToTerraform(struct?: DataTessellDbServiceServiceConnectivityConnectStrings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServiceServiceConnectivityConnectStringsToHclTerraform(struct?: DataTessellDbServiceServiceConnectivityConnectStrings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServiceServiceConnectivityConnectStringsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServiceServiceConnectivityConnectStrings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServiceServiceConnectivityConnectStrings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connect_descriptor - computed: true, optional: false, required: false
  public get connectDescriptor() {
    return this.getStringAttribute('connect_descriptor');
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // master_user - computed: true, optional: false, required: false
  public get masterUser() {
    return this.getStringAttribute('master_user');
  }

  // service_port - computed: true, optional: false, required: false
  public get servicePort() {
    return this.getNumberAttribute('service_port');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // usage_type - computed: true, optional: false, required: false
  public get usageType() {
    return this.getStringAttribute('usage_type');
  }
}

export class DataTessellDbServiceServiceConnectivityConnectStringsList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServiceServiceConnectivityConnectStringsOutputReference {
    return new DataTessellDbServiceServiceConnectivityConnectStringsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServiceServiceConnectivityPrivateLink {
}

export function dataTessellDbServiceServiceConnectivityPrivateLinkToTerraform(struct?: DataTessellDbServiceServiceConnectivityPrivateLink): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServiceServiceConnectivityPrivateLinkToHclTerraform(struct?: DataTessellDbServiceServiceConnectivityPrivateLink): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServiceServiceConnectivityPrivateLinkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServiceServiceConnectivityPrivateLink | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServiceServiceConnectivityPrivateLink | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_azure_subscription_ids - computed: true, optional: false, required: false
  public get clientAzureSubscriptionIds() {
    return this.getListAttribute('client_azure_subscription_ids');
  }

  // endpoint_service_name - computed: true, optional: false, required: false
  public get endpointServiceName() {
    return this.getStringAttribute('endpoint_service_name');
  }

  // private_link_service_alias - computed: true, optional: false, required: false
  public get privateLinkServiceAlias() {
    return this.getStringAttribute('private_link_service_alias');
  }

  // service_principals - computed: true, optional: false, required: false
  public get servicePrincipals() {
    return this.getListAttribute('service_principals');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataTessellDbServiceServiceConnectivityPrivateLinkList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServiceServiceConnectivityPrivateLinkOutputReference {
    return new DataTessellDbServiceServiceConnectivityPrivateLinkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServiceServiceConnectivityUpdateInProgressInfoComputesConnectivityPortAccessConfig {
}

export function dataTessellDbServiceServiceConnectivityUpdateInProgressInfoComputesConnectivityPortAccessConfigToTerraform(struct?: DataTessellDbServiceServiceConnectivityUpdateInProgressInfoComputesConnectivityPortAccessConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServiceServiceConnectivityUpdateInProgressInfoComputesConnectivityPortAccessConfigToHclTerraform(struct?: DataTessellDbServiceServiceConnectivityUpdateInProgressInfoComputesConnectivityPortAccessConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServiceServiceConnectivityUpdateInProgressInfoComputesConnectivityPortAccessConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServiceServiceConnectivityUpdateInProgressInfoComputesConnectivityPortAccessConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServiceServiceConnectivityUpdateInProgressInfoComputesConnectivityPortAccessConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_ip_addresses - computed: true, optional: false, required: false
  public get allowedIpAddresses() {
    return this.getListAttribute('allowed_ip_addresses');
  }

  // enable_public_access - computed: true, optional: false, required: false
  public get enablePublicAccess() {
    return this.getBooleanAttribute('enable_public_access');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}

export class DataTessellDbServiceServiceConnectivityUpdateInProgressInfoComputesConnectivityPortAccessConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServiceServiceConnectivityUpdateInProgressInfoComputesConnectivityPortAccessConfigOutputReference {
    return new DataTessellDbServiceServiceConnectivityUpdateInProgressInfoComputesConnectivityPortAccessConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServiceServiceConnectivityUpdateInProgressInfoComputesConnectivity {
}

export function dataTessellDbServiceServiceConnectivityUpdateInProgressInfoComputesConnectivityToTerraform(struct?: DataTessellDbServiceServiceConnectivityUpdateInProgressInfoComputesConnectivity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServiceServiceConnectivityUpdateInProgressInfoComputesConnectivityToHclTerraform(struct?: DataTessellDbServiceServiceConnectivityUpdateInProgressInfoComputesConnectivity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServiceServiceConnectivityUpdateInProgressInfoComputesConnectivityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServiceServiceConnectivityUpdateInProgressInfoComputesConnectivity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServiceServiceConnectivityUpdateInProgressInfoComputesConnectivity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compute_resource_id - computed: true, optional: false, required: false
  public get computeResourceId() {
    return this.getStringAttribute('compute_resource_id');
  }

  // port_access_config - computed: true, optional: false, required: false
  private _portAccessConfig = new DataTessellDbServiceServiceConnectivityUpdateInProgressInfoComputesConnectivityPortAccessConfigList(this, "port_access_config", false);
  public get portAccessConfig() {
    return this._portAccessConfig;
  }
}

export class DataTessellDbServiceServiceConnectivityUpdateInProgressInfoComputesConnectivityList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServiceServiceConnectivityUpdateInProgressInfoComputesConnectivityOutputReference {
    return new DataTessellDbServiceServiceConnectivityUpdateInProgressInfoComputesConnectivityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServiceServiceConnectivityUpdateInProgressInfoPrivateLink {
}

export function dataTessellDbServiceServiceConnectivityUpdateInProgressInfoPrivateLinkToTerraform(struct?: DataTessellDbServiceServiceConnectivityUpdateInProgressInfoPrivateLink): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServiceServiceConnectivityUpdateInProgressInfoPrivateLinkToHclTerraform(struct?: DataTessellDbServiceServiceConnectivityUpdateInProgressInfoPrivateLink): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServiceServiceConnectivityUpdateInProgressInfoPrivateLinkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServiceServiceConnectivityUpdateInProgressInfoPrivateLink | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServiceServiceConnectivityUpdateInProgressInfoPrivateLink | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_azure_subscription_ids - computed: true, optional: false, required: false
  public get clientAzureSubscriptionIds() {
    return this.getListAttribute('client_azure_subscription_ids');
  }

  // service_principals - computed: true, optional: false, required: false
  public get servicePrincipals() {
    return this.getListAttribute('service_principals');
  }
}

export class DataTessellDbServiceServiceConnectivityUpdateInProgressInfoPrivateLinkList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServiceServiceConnectivityUpdateInProgressInfoPrivateLinkOutputReference {
    return new DataTessellDbServiceServiceConnectivityUpdateInProgressInfoPrivateLinkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServiceServiceConnectivityUpdateInProgressInfo {
}

export function dataTessellDbServiceServiceConnectivityUpdateInProgressInfoToTerraform(struct?: DataTessellDbServiceServiceConnectivityUpdateInProgressInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServiceServiceConnectivityUpdateInProgressInfoToHclTerraform(struct?: DataTessellDbServiceServiceConnectivityUpdateInProgressInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServiceServiceConnectivityUpdateInProgressInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServiceServiceConnectivityUpdateInProgressInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServiceServiceConnectivityUpdateInProgressInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_ip_addresses - computed: true, optional: false, required: false
  public get allowedIpAddresses() {
    return this.getListAttribute('allowed_ip_addresses');
  }

  // computes_connectivity - computed: true, optional: false, required: false
  private _computesConnectivity = new DataTessellDbServiceServiceConnectivityUpdateInProgressInfoComputesConnectivityList(this, "computes_connectivity", false);
  public get computesConnectivity() {
    return this._computesConnectivity;
  }

  // dns_prefix - computed: true, optional: false, required: false
  public get dnsPrefix() {
    return this.getStringAttribute('dns_prefix');
  }

  // enable_public_access - computed: true, optional: false, required: false
  public get enablePublicAccess() {
    return this.getBooleanAttribute('enable_public_access');
  }

  // private_link - computed: true, optional: false, required: false
  private _privateLink = new DataTessellDbServiceServiceConnectivityUpdateInProgressInfoPrivateLinkList(this, "private_link", false);
  public get privateLink() {
    return this._privateLink;
  }
}

export class DataTessellDbServiceServiceConnectivityUpdateInProgressInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServiceServiceConnectivityUpdateInProgressInfoOutputReference {
    return new DataTessellDbServiceServiceConnectivityUpdateInProgressInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServiceServiceConnectivity {
}

export function dataTessellDbServiceServiceConnectivityToTerraform(struct?: DataTessellDbServiceServiceConnectivity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServiceServiceConnectivityToHclTerraform(struct?: DataTessellDbServiceServiceConnectivity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServiceServiceConnectivityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServiceServiceConnectivity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServiceServiceConnectivity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_ip_addresses - computed: true, optional: false, required: false
  public get allowedIpAddresses() {
    return this.getListAttribute('allowed_ip_addresses');
  }

  // ca_cert_id - computed: true, optional: false, required: false
  public get caCertId() {
    return this.getStringAttribute('ca_cert_id');
  }

  // computes_connectivity - computed: true, optional: false, required: false
  private _computesConnectivity = new DataTessellDbServiceServiceConnectivityComputesConnectivityList(this, "computes_connectivity", false);
  public get computesConnectivity() {
    return this._computesConnectivity;
  }

  // connect_strings - computed: true, optional: false, required: false
  private _connectStrings = new DataTessellDbServiceServiceConnectivityConnectStringsList(this, "connect_strings", false);
  public get connectStrings() {
    return this._connectStrings;
  }

  // dns_prefix - computed: true, optional: false, required: false
  public get dnsPrefix() {
    return this.getStringAttribute('dns_prefix');
  }

  // enable_public_access - computed: true, optional: false, required: false
  public get enablePublicAccess() {
    return this.getBooleanAttribute('enable_public_access');
  }

  // enable_ssl - computed: true, optional: false, required: false
  public get enableSsl() {
    return this.getBooleanAttribute('enable_ssl');
  }

  // private_link - computed: true, optional: false, required: false
  private _privateLink = new DataTessellDbServiceServiceConnectivityPrivateLinkList(this, "private_link", false);
  public get privateLink() {
    return this._privateLink;
  }

  // service_port - computed: true, optional: false, required: false
  public get servicePort() {
    return this.getNumberAttribute('service_port');
  }

  // update_in_progress_info - computed: true, optional: false, required: false
  private _updateInProgressInfo = new DataTessellDbServiceServiceConnectivityUpdateInProgressInfoList(this, "update_in_progress_info", false);
  public get updateInProgressInfo() {
    return this._updateInProgressInfo;
  }
}

export class DataTessellDbServiceServiceConnectivityList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServiceServiceConnectivityOutputReference {
    return new DataTessellDbServiceServiceConnectivityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServiceSharedWithUsers {
}

export function dataTessellDbServiceSharedWithUsersToTerraform(struct?: DataTessellDbServiceSharedWithUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServiceSharedWithUsersToHclTerraform(struct?: DataTessellDbServiceSharedWithUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServiceSharedWithUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServiceSharedWithUsers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServiceSharedWithUsers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // email_id - computed: true, optional: false, required: false
  public get emailId() {
    return this.getStringAttribute('email_id');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }
}

export class DataTessellDbServiceSharedWithUsersList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServiceSharedWithUsersOutputReference {
    return new DataTessellDbServiceSharedWithUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServiceSharedWith {
}

export function dataTessellDbServiceSharedWithToTerraform(struct?: DataTessellDbServiceSharedWith): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServiceSharedWithToHclTerraform(struct?: DataTessellDbServiceSharedWith): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServiceSharedWithOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServiceSharedWith | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServiceSharedWith | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // users - computed: true, optional: false, required: false
  private _users = new DataTessellDbServiceSharedWithUsersList(this, "users", false);
  public get users() {
    return this._users;
  }
}

export class DataTessellDbServiceSharedWithList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServiceSharedWithOutputReference {
    return new DataTessellDbServiceSharedWithOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServiceTags {
}

export function dataTessellDbServiceTagsToTerraform(struct?: DataTessellDbServiceTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServiceTagsToHclTerraform(struct?: DataTessellDbServiceTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServiceTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServiceTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServiceTags | undefined) {
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

export class DataTessellDbServiceTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServiceTagsOutputReference {
    return new DataTessellDbServiceTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServiceUpcomingScheduledActionsDelete {
}

export function dataTessellDbServiceUpcomingScheduledActionsDeleteToTerraform(struct?: DataTessellDbServiceUpcomingScheduledActionsDelete): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServiceUpcomingScheduledActionsDeleteToHclTerraform(struct?: DataTessellDbServiceUpcomingScheduledActionsDelete): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServiceUpcomingScheduledActionsDeleteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServiceUpcomingScheduledActionsDelete | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServiceUpcomingScheduledActionsDelete | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // at - computed: true, optional: false, required: false
  public get at() {
    return this.getStringAttribute('at');
  }
}

export class DataTessellDbServiceUpcomingScheduledActionsDeleteList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServiceUpcomingScheduledActionsDeleteOutputReference {
    return new DataTessellDbServiceUpcomingScheduledActionsDeleteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServiceUpcomingScheduledActionsPatch {
}

export function dataTessellDbServiceUpcomingScheduledActionsPatchToTerraform(struct?: DataTessellDbServiceUpcomingScheduledActionsPatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServiceUpcomingScheduledActionsPatchToHclTerraform(struct?: DataTessellDbServiceUpcomingScheduledActionsPatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServiceUpcomingScheduledActionsPatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServiceUpcomingScheduledActionsPatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServiceUpcomingScheduledActionsPatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // at - computed: true, optional: false, required: false
  public get at() {
    return this.getStringAttribute('at');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }
}

export class DataTessellDbServiceUpcomingScheduledActionsPatchList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServiceUpcomingScheduledActionsPatchOutputReference {
    return new DataTessellDbServiceUpcomingScheduledActionsPatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServiceUpcomingScheduledActionsStartStop {
}

export function dataTessellDbServiceUpcomingScheduledActionsStartStopToTerraform(struct?: DataTessellDbServiceUpcomingScheduledActionsStartStop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServiceUpcomingScheduledActionsStartStopToHclTerraform(struct?: DataTessellDbServiceUpcomingScheduledActionsStartStop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServiceUpcomingScheduledActionsStartStopOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServiceUpcomingScheduledActionsStartStop | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServiceUpcomingScheduledActionsStartStop | undefined) {
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

  // at - computed: true, optional: false, required: false
  public get at() {
    return this.getStringAttribute('at');
  }
}

export class DataTessellDbServiceUpcomingScheduledActionsStartStopList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServiceUpcomingScheduledActionsStartStopOutputReference {
    return new DataTessellDbServiceUpcomingScheduledActionsStartStopOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServiceUpcomingScheduledActions {
}

export function dataTessellDbServiceUpcomingScheduledActionsToTerraform(struct?: DataTessellDbServiceUpcomingScheduledActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServiceUpcomingScheduledActionsToHclTerraform(struct?: DataTessellDbServiceUpcomingScheduledActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServiceUpcomingScheduledActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServiceUpcomingScheduledActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServiceUpcomingScheduledActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // delete - computed: true, optional: false, required: false
  private _delete = new DataTessellDbServiceUpcomingScheduledActionsDeleteList(this, "delete", false);
  public get delete() {
    return this._delete;
  }

  // patch - computed: true, optional: false, required: false
  private _patch = new DataTessellDbServiceUpcomingScheduledActionsPatchList(this, "patch", false);
  public get patch() {
    return this._patch;
  }

  // start_stop - computed: true, optional: false, required: false
  private _startStop = new DataTessellDbServiceUpcomingScheduledActionsStartStopList(this, "start_stop", false);
  public get startStop() {
    return this._startStop;
  }
}

export class DataTessellDbServiceUpcomingScheduledActionsList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServiceUpcomingScheduledActionsOutputReference {
    return new DataTessellDbServiceUpcomingScheduledActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServiceUpdatesInProgress {
}

export function dataTessellDbServiceUpdatesInProgressToTerraform(struct?: DataTessellDbServiceUpdatesInProgress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServiceUpdatesInProgressToHclTerraform(struct?: DataTessellDbServiceUpdatesInProgress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServiceUpdatesInProgressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServiceUpdatesInProgress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServiceUpdatesInProgress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // reference_id - computed: true, optional: false, required: false
  public get referenceId() {
    return this.getStringAttribute('reference_id');
  }

  // submitted_at - computed: true, optional: false, required: false
  public get submittedAt() {
    return this.getStringAttribute('submitted_at');
  }

  // update_info - computed: true, optional: false, required: false
  private _updateInfo = new cdktf.StringMap(this, "update_info");
  public get updateInfo() {
    return this._updateInfo;
  }

  // update_type - computed: true, optional: false, required: false
  public get updateType() {
    return this.getStringAttribute('update_type');
  }
}

export class DataTessellDbServiceUpdatesInProgressList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServiceUpdatesInProgressOutputReference {
    return new DataTessellDbServiceUpdatesInProgressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/data-sources/db_service tessell_db_service}
*/
export class DataTessellDbService extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tessell_db_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTessellDbService resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTessellDbService to import
  * @param importFromId The id of the existing DataTessellDbService that should be imported. Refer to the {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/data-sources/db_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTessellDbService to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tessell_db_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/data-sources/db_service tessell_db_service} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTessellDbServiceConfig
  */
  public constructor(scope: Construct, id: string, config: DataTessellDbServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'tessell_db_service',
      terraformGeneratorMetadata: {
        providerName: 'tessell',
        providerVersion: '0.0.29',
        providerVersionConstraint: '0.0.29'
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

  // auto_minor_version_update - computed: true, optional: false, required: false
  public get autoMinorVersionUpdate() {
    return this.getBooleanAttribute('auto_minor_version_update');
  }

  // availability_machine_id - computed: true, optional: false, required: false
  public get availabilityMachineId() {
    return this.getStringAttribute('availability_machine_id');
  }

  // cloned_from_info - computed: true, optional: false, required: false
  private _clonedFromInfo = new DataTessellDbServiceClonedFromInfoList(this, "cloned_from_info", false);
  public get clonedFromInfo() {
    return this._clonedFromInfo;
  }

  // context_info - computed: true, optional: false, required: false
  private _contextInfo = new DataTessellDbServiceContextInfoList(this, "context_info", false);
  public get contextInfo() {
    return this._contextInfo;
  }

  // databases - computed: true, optional: false, required: false
  private _databases = new DataTessellDbServiceDatabasesList(this, "databases", false);
  public get databases() {
    return this._databases;
  }

  // date_created - computed: true, optional: false, required: false
  public get dateCreated() {
    return this.getStringAttribute('date_created');
  }

  // deletion_config - computed: true, optional: false, required: false
  private _deletionConfig = new DataTessellDbServiceDeletionConfigList(this, "deletion_config", false);
  public get deletionConfig() {
    return this._deletionConfig;
  }

  // deletion_schedule - computed: true, optional: false, required: false
  private _deletionSchedule = new DataTessellDbServiceDeletionScheduleList(this, "deletion_schedule", false);
  public get deletionSchedule() {
    return this._deletionSchedule;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // edition - computed: true, optional: false, required: false
  public get edition() {
    return this.getStringAttribute('edition');
  }

  // enable_deletion_protection - computed: true, optional: false, required: false
  public get enableDeletionProtection() {
    return this.getBooleanAttribute('enable_deletion_protection');
  }

  // enable_perf_insights - computed: true, optional: false, required: false
  public get enablePerfInsights() {
    return this.getBooleanAttribute('enable_perf_insights');
  }

  // enable_stop_protection - computed: true, optional: false, required: false
  public get enableStopProtection() {
    return this.getBooleanAttribute('enable_stop_protection');
  }

  // engine_configuration - computed: true, optional: false, required: false
  private _engineConfiguration = new DataTessellDbServiceEngineConfigurationList(this, "engine_configuration", false);
  public get engineConfiguration() {
    return this._engineConfiguration;
  }

  // engine_type - computed: true, optional: false, required: false
  public get engineType() {
    return this.getStringAttribute('engine_type');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // infrastructure - computed: true, optional: false, required: false
  private _infrastructure = new DataTessellDbServiceInfrastructureList(this, "infrastructure", false);
  public get infrastructure() {
    return this._infrastructure;
  }

  // instances - computed: true, optional: false, required: false
  private _instances = new DataTessellDbServiceInstancesList(this, "instances", false);
  public get instances() {
    return this._instances;
  }

  // integrations_config - computed: true, optional: false, required: false
  private _integrationsConfig = new DataTessellDbServiceIntegrationsConfigList(this, "integrations_config", false);
  public get integrationsConfig() {
    return this._integrationsConfig;
  }

  // license_type - computed: true, optional: false, required: false
  public get licenseType() {
    return this.getStringAttribute('license_type');
  }

  // logged_in_user_role - computed: true, optional: false, required: false
  public get loggedInUserRole() {
    return this.getStringAttribute('logged_in_user_role');
  }

  // maintenance_window - computed: true, optional: false, required: false
  private _maintenanceWindow = new DataTessellDbServiceMaintenanceWindowList(this, "maintenance_window", false);
  public get maintenanceWindow() {
    return this._maintenanceWindow;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // num_of_instances - computed: true, optional: false, required: false
  public get numOfInstances() {
    return this.getNumberAttribute('num_of_instances');
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // refresh_info - computed: true, optional: false, required: false
  private _refreshInfo = new DataTessellDbServiceRefreshInfoList(this, "refresh_info", false);
  public get refreshInfo() {
    return this._refreshInfo;
  }

  // service_connectivity - computed: true, optional: false, required: false
  private _serviceConnectivity = new DataTessellDbServiceServiceConnectivityList(this, "service_connectivity", false);
  public get serviceConnectivity() {
    return this._serviceConnectivity;
  }

  // shared_with - computed: true, optional: false, required: false
  private _sharedWith = new DataTessellDbServiceSharedWithList(this, "shared_with", false);
  public get sharedWith() {
    return this._sharedWith;
  }

  // software_image - computed: true, optional: false, required: false
  public get softwareImage() {
    return this.getStringAttribute('software_image');
  }

  // software_image_version - computed: true, optional: false, required: false
  public get softwareImageVersion() {
    return this.getStringAttribute('software_image_version');
  }

  // software_image_version_family - computed: true, optional: false, required: false
  public get softwareImageVersionFamily() {
    return this.getStringAttribute('software_image_version_family');
  }

  // started_at - computed: true, optional: false, required: false
  public get startedAt() {
    return this.getStringAttribute('started_at');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // stopped_at - computed: true, optional: false, required: false
  public get stoppedAt() {
    return this.getStringAttribute('stopped_at');
  }

  // subscription - computed: true, optional: false, required: false
  public get subscription() {
    return this.getStringAttribute('subscription');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataTessellDbServiceTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // tessell_genie_status - computed: true, optional: false, required: false
  public get tessellGenieStatus() {
    return this.getStringAttribute('tessell_genie_status');
  }

  // topology - computed: true, optional: false, required: false
  public get topology() {
    return this.getStringAttribute('topology');
  }

  // upcoming_scheduled_actions - computed: true, optional: false, required: false
  private _upcomingScheduledActions = new DataTessellDbServiceUpcomingScheduledActionsList(this, "upcoming_scheduled_actions", false);
  public get upcomingScheduledActions() {
    return this._upcomingScheduledActions;
  }

  // updates_in_progress - computed: true, optional: false, required: false
  private _updatesInProgress = new DataTessellDbServiceUpdatesInProgressList(this, "updates_in_progress", false);
  public get updatesInProgress() {
    return this._updatesInProgress;
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
