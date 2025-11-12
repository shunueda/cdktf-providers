// https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.27/docs/data-sources/db_services
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTessellDbServicesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the Availability Machine from which the services are cloned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.27/docs/data-sources/db_services#cloned_from_availability_machine_id DataTessellDbServices#cloned_from_availability_machine_id}
  */
  readonly clonedFromAvailabilityMachineId?: string;
  /**
  * The ID of the DB Service from which the services are cloned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.27/docs/data-sources/db_services#cloned_from_service_id DataTessellDbServices#cloned_from_service_id}
  */
  readonly clonedFromServiceId?: string;
  /**
  * DB Service's engine-types
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.27/docs/data-sources/db_services#engine_types DataTessellDbServices#engine_types}
  */
  readonly engineTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.27/docs/data-sources/db_services#id DataTessellDbServices#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Load ACL information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.27/docs/data-sources/db_services#load_acls DataTessellDbServices#load_acls}
  */
  readonly loadAcls?: boolean | cdktf.IResolvable;
  /**
  * Load the databases that are part of the DB Service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.27/docs/data-sources/db_services#load_databases DataTessellDbServices#load_databases}
  */
  readonly loadDatabases?: boolean | cdktf.IResolvable;
  /**
  * Load the instances that are part of the DB Service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.27/docs/data-sources/db_services#load_instances DataTessellDbServices#load_instances}
  */
  readonly loadInstances?: boolean | cdktf.IResolvable;
  /**
  * Name of the DB Service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.27/docs/data-sources/db_services#name DataTessellDbServices#name}
  */
  readonly name?: string;
  /**
  * List of Email Addresses for entity or resource owners
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.27/docs/data-sources/db_services#owners DataTessellDbServices#owners}
  */
  readonly owners?: string[];
  /**
  * statuses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.27/docs/data-sources/db_services#statuses DataTessellDbServices#statuses}
  */
  readonly statuses?: string[];
}
export interface DataTessellDbServicesDbServicesClonedFromInfo {
}

export function dataTessellDbServicesDbServicesClonedFromInfoToTerraform(struct?: DataTessellDbServicesDbServicesClonedFromInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServicesDbServicesClonedFromInfoToHclTerraform(struct?: DataTessellDbServicesDbServicesClonedFromInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServicesDbServicesClonedFromInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServicesDbServicesClonedFromInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServicesDbServicesClonedFromInfo | undefined) {
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

  // tessell_service - computed: true, optional: false, required: false
  public get tessellService() {
    return this.getStringAttribute('tessell_service');
  }

  // tessell_service_id - computed: true, optional: false, required: false
  public get tessellServiceId() {
    return this.getStringAttribute('tessell_service_id');
  }
}

export class DataTessellDbServicesDbServicesClonedFromInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServicesDbServicesClonedFromInfoOutputReference {
    return new DataTessellDbServicesDbServicesClonedFromInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServicesDbServicesContextInfo {
}

export function dataTessellDbServicesDbServicesContextInfoToTerraform(struct?: DataTessellDbServicesDbServicesContextInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServicesDbServicesContextInfoToHclTerraform(struct?: DataTessellDbServicesDbServicesContextInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServicesDbServicesContextInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServicesDbServicesContextInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServicesDbServicesContextInfo | undefined) {
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

export class DataTessellDbServicesDbServicesContextInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServicesDbServicesContextInfoOutputReference {
    return new DataTessellDbServicesDbServicesContextInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServicesDbServicesDatabasesClonedFromInfo {
}

export function dataTessellDbServicesDbServicesDatabasesClonedFromInfoToTerraform(struct?: DataTessellDbServicesDbServicesDatabasesClonedFromInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServicesDbServicesDatabasesClonedFromInfoToHclTerraform(struct?: DataTessellDbServicesDbServicesDatabasesClonedFromInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServicesDbServicesDatabasesClonedFromInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServicesDbServicesDatabasesClonedFromInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServicesDbServicesDatabasesClonedFromInfo | undefined) {
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

export class DataTessellDbServicesDbServicesDatabasesClonedFromInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServicesDbServicesDatabasesClonedFromInfoOutputReference {
    return new DataTessellDbServicesDbServicesDatabasesClonedFromInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServicesDbServicesDatabasesConnectString {
}

export function dataTessellDbServicesDbServicesDatabasesConnectStringToTerraform(struct?: DataTessellDbServicesDbServicesDatabasesConnectString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServicesDbServicesDatabasesConnectStringToHclTerraform(struct?: DataTessellDbServicesDbServicesDatabasesConnectString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServicesDbServicesDatabasesConnectStringOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServicesDbServicesDatabasesConnectString | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServicesDbServicesDatabasesConnectString | undefined) {
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

export class DataTessellDbServicesDbServicesDatabasesConnectStringList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServicesDbServicesDatabasesConnectStringOutputReference {
    return new DataTessellDbServicesDbServicesDatabasesConnectStringOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServicesDbServicesDatabasesDatabaseConfigurationMilvusConfig {
}

export function dataTessellDbServicesDbServicesDatabasesDatabaseConfigurationMilvusConfigToTerraform(struct?: DataTessellDbServicesDbServicesDatabasesDatabaseConfigurationMilvusConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServicesDbServicesDatabasesDatabaseConfigurationMilvusConfigToHclTerraform(struct?: DataTessellDbServicesDbServicesDatabasesDatabaseConfigurationMilvusConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServicesDbServicesDatabasesDatabaseConfigurationMilvusConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServicesDbServicesDatabasesDatabaseConfigurationMilvusConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServicesDbServicesDatabasesDatabaseConfigurationMilvusConfig | undefined) {
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

export class DataTessellDbServicesDbServicesDatabasesDatabaseConfigurationMilvusConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServicesDbServicesDatabasesDatabaseConfigurationMilvusConfigOutputReference {
    return new DataTessellDbServicesDbServicesDatabasesDatabaseConfigurationMilvusConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServicesDbServicesDatabasesDatabaseConfigurationMongodbConfig {
}

export function dataTessellDbServicesDbServicesDatabasesDatabaseConfigurationMongodbConfigToTerraform(struct?: DataTessellDbServicesDbServicesDatabasesDatabaseConfigurationMongodbConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServicesDbServicesDatabasesDatabaseConfigurationMongodbConfigToHclTerraform(struct?: DataTessellDbServicesDbServicesDatabasesDatabaseConfigurationMongodbConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServicesDbServicesDatabasesDatabaseConfigurationMongodbConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServicesDbServicesDatabasesDatabaseConfigurationMongodbConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServicesDbServicesDatabasesDatabaseConfigurationMongodbConfig | undefined) {
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

export class DataTessellDbServicesDbServicesDatabasesDatabaseConfigurationMongodbConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServicesDbServicesDatabasesDatabaseConfigurationMongodbConfigOutputReference {
    return new DataTessellDbServicesDbServicesDatabasesDatabaseConfigurationMongodbConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServicesDbServicesDatabasesDatabaseConfigurationMysqlConfig {
}

export function dataTessellDbServicesDbServicesDatabasesDatabaseConfigurationMysqlConfigToTerraform(struct?: DataTessellDbServicesDbServicesDatabasesDatabaseConfigurationMysqlConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServicesDbServicesDatabasesDatabaseConfigurationMysqlConfigToHclTerraform(struct?: DataTessellDbServicesDbServicesDatabasesDatabaseConfigurationMysqlConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServicesDbServicesDatabasesDatabaseConfigurationMysqlConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServicesDbServicesDatabasesDatabaseConfigurationMysqlConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServicesDbServicesDatabasesDatabaseConfigurationMysqlConfig | undefined) {
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

export class DataTessellDbServicesDbServicesDatabasesDatabaseConfigurationMysqlConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServicesDbServicesDatabasesDatabaseConfigurationMysqlConfigOutputReference {
    return new DataTessellDbServicesDbServicesDatabasesDatabaseConfigurationMysqlConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServicesDbServicesDatabasesDatabaseConfigurationOracleConfig {
}

export function dataTessellDbServicesDbServicesDatabasesDatabaseConfigurationOracleConfigToTerraform(struct?: DataTessellDbServicesDbServicesDatabasesDatabaseConfigurationOracleConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServicesDbServicesDatabasesDatabaseConfigurationOracleConfigToHclTerraform(struct?: DataTessellDbServicesDbServicesDatabasesDatabaseConfigurationOracleConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServicesDbServicesDatabasesDatabaseConfigurationOracleConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServicesDbServicesDatabasesDatabaseConfigurationOracleConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServicesDbServicesDatabasesDatabaseConfigurationOracleConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
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

export class DataTessellDbServicesDbServicesDatabasesDatabaseConfigurationOracleConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServicesDbServicesDatabasesDatabaseConfigurationOracleConfigOutputReference {
    return new DataTessellDbServicesDbServicesDatabasesDatabaseConfigurationOracleConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServicesDbServicesDatabasesDatabaseConfigurationPostgresqlConfig {
}

export function dataTessellDbServicesDbServicesDatabasesDatabaseConfigurationPostgresqlConfigToTerraform(struct?: DataTessellDbServicesDbServicesDatabasesDatabaseConfigurationPostgresqlConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServicesDbServicesDatabasesDatabaseConfigurationPostgresqlConfigToHclTerraform(struct?: DataTessellDbServicesDbServicesDatabasesDatabaseConfigurationPostgresqlConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServicesDbServicesDatabasesDatabaseConfigurationPostgresqlConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServicesDbServicesDatabasesDatabaseConfigurationPostgresqlConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServicesDbServicesDatabasesDatabaseConfigurationPostgresqlConfig | undefined) {
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

export class DataTessellDbServicesDbServicesDatabasesDatabaseConfigurationPostgresqlConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServicesDbServicesDatabasesDatabaseConfigurationPostgresqlConfigOutputReference {
    return new DataTessellDbServicesDbServicesDatabasesDatabaseConfigurationPostgresqlConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServicesDbServicesDatabasesDatabaseConfigurationSqlServerConfig {
}

export function dataTessellDbServicesDbServicesDatabasesDatabaseConfigurationSqlServerConfigToTerraform(struct?: DataTessellDbServicesDbServicesDatabasesDatabaseConfigurationSqlServerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServicesDbServicesDatabasesDatabaseConfigurationSqlServerConfigToHclTerraform(struct?: DataTessellDbServicesDbServicesDatabasesDatabaseConfigurationSqlServerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServicesDbServicesDatabasesDatabaseConfigurationSqlServerConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServicesDbServicesDatabasesDatabaseConfigurationSqlServerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServicesDbServicesDatabasesDatabaseConfigurationSqlServerConfig | undefined) {
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

export class DataTessellDbServicesDbServicesDatabasesDatabaseConfigurationSqlServerConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServicesDbServicesDatabasesDatabaseConfigurationSqlServerConfigOutputReference {
    return new DataTessellDbServicesDbServicesDatabasesDatabaseConfigurationSqlServerConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServicesDbServicesDatabasesDatabaseConfiguration {
}

export function dataTessellDbServicesDbServicesDatabasesDatabaseConfigurationToTerraform(struct?: DataTessellDbServicesDbServicesDatabasesDatabaseConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServicesDbServicesDatabasesDatabaseConfigurationToHclTerraform(struct?: DataTessellDbServicesDbServicesDatabasesDatabaseConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServicesDbServicesDatabasesDatabaseConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServicesDbServicesDatabasesDatabaseConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServicesDbServicesDatabasesDatabaseConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // milvus_config - computed: true, optional: false, required: false
  private _milvusConfig = new DataTessellDbServicesDbServicesDatabasesDatabaseConfigurationMilvusConfigList(this, "milvus_config", false);
  public get milvusConfig() {
    return this._milvusConfig;
  }

  // mongodb_config - computed: true, optional: false, required: false
  private _mongodbConfig = new DataTessellDbServicesDbServicesDatabasesDatabaseConfigurationMongodbConfigList(this, "mongodb_config", false);
  public get mongodbConfig() {
    return this._mongodbConfig;
  }

  // mysql_config - computed: true, optional: false, required: false
  private _mysqlConfig = new DataTessellDbServicesDbServicesDatabasesDatabaseConfigurationMysqlConfigList(this, "mysql_config", false);
  public get mysqlConfig() {
    return this._mysqlConfig;
  }

  // oracle_config - computed: true, optional: false, required: false
  private _oracleConfig = new DataTessellDbServicesDbServicesDatabasesDatabaseConfigurationOracleConfigList(this, "oracle_config", false);
  public get oracleConfig() {
    return this._oracleConfig;
  }

  // postgresql_config - computed: true, optional: false, required: false
  private _postgresqlConfig = new DataTessellDbServicesDbServicesDatabasesDatabaseConfigurationPostgresqlConfigList(this, "postgresql_config", false);
  public get postgresqlConfig() {
    return this._postgresqlConfig;
  }

  // sql_server_config - computed: true, optional: false, required: false
  private _sqlServerConfig = new DataTessellDbServicesDbServicesDatabasesDatabaseConfigurationSqlServerConfigList(this, "sql_server_config", false);
  public get sqlServerConfig() {
    return this._sqlServerConfig;
  }
}

export class DataTessellDbServicesDbServicesDatabasesDatabaseConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServicesDbServicesDatabasesDatabaseConfigurationOutputReference {
    return new DataTessellDbServicesDbServicesDatabasesDatabaseConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServicesDbServicesDatabases {
}

export function dataTessellDbServicesDbServicesDatabasesToTerraform(struct?: DataTessellDbServicesDbServicesDatabases): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServicesDbServicesDatabasesToHclTerraform(struct?: DataTessellDbServicesDbServicesDatabases): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServicesDbServicesDatabasesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServicesDbServicesDatabases | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServicesDbServicesDatabases | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloned_from_info - computed: true, optional: false, required: false
  private _clonedFromInfo = new DataTessellDbServicesDbServicesDatabasesClonedFromInfoList(this, "cloned_from_info", false);
  public get clonedFromInfo() {
    return this._clonedFromInfo;
  }

  // connect_string - computed: true, optional: false, required: false
  private _connectString = new DataTessellDbServicesDbServicesDatabasesConnectStringList(this, "connect_string", false);
  public get connectString() {
    return this._connectString;
  }

  // database_configuration - computed: true, optional: false, required: false
  private _databaseConfiguration = new DataTessellDbServicesDbServicesDatabasesDatabaseConfigurationList(this, "database_configuration", false);
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

export class DataTessellDbServicesDbServicesDatabasesList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServicesDbServicesDatabasesOutputReference {
    return new DataTessellDbServicesDbServicesDatabasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServicesDbServicesDeletionConfig {
}

export function dataTessellDbServicesDbServicesDeletionConfigToTerraform(struct?: DataTessellDbServicesDbServicesDeletionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServicesDbServicesDeletionConfigToHclTerraform(struct?: DataTessellDbServicesDbServicesDeletionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServicesDbServicesDeletionConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServicesDbServicesDeletionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServicesDbServicesDeletionConfig | undefined) {
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

export class DataTessellDbServicesDbServicesDeletionConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServicesDbServicesDeletionConfigOutputReference {
    return new DataTessellDbServicesDbServicesDeletionConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServicesDbServicesDeletionScheduleDeletionConfig {
}

export function dataTessellDbServicesDbServicesDeletionScheduleDeletionConfigToTerraform(struct?: DataTessellDbServicesDbServicesDeletionScheduleDeletionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServicesDbServicesDeletionScheduleDeletionConfigToHclTerraform(struct?: DataTessellDbServicesDbServicesDeletionScheduleDeletionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServicesDbServicesDeletionScheduleDeletionConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServicesDbServicesDeletionScheduleDeletionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServicesDbServicesDeletionScheduleDeletionConfig | undefined) {
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

export class DataTessellDbServicesDbServicesDeletionScheduleDeletionConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServicesDbServicesDeletionScheduleDeletionConfigOutputReference {
    return new DataTessellDbServicesDbServicesDeletionScheduleDeletionConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServicesDbServicesDeletionSchedule {
}

export function dataTessellDbServicesDbServicesDeletionScheduleToTerraform(struct?: DataTessellDbServicesDbServicesDeletionSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServicesDbServicesDeletionScheduleToHclTerraform(struct?: DataTessellDbServicesDbServicesDeletionSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServicesDbServicesDeletionScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServicesDbServicesDeletionSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServicesDbServicesDeletionSchedule | undefined) {
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
  private _deletionConfig = new DataTessellDbServicesDbServicesDeletionScheduleDeletionConfigList(this, "deletion_config", false);
  public get deletionConfig() {
    return this._deletionConfig;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export class DataTessellDbServicesDbServicesDeletionScheduleList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServicesDbServicesDeletionScheduleOutputReference {
    return new DataTessellDbServicesDbServicesDeletionScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServicesDbServicesEngineConfigurationApacheKafkaConfig {
}

export function dataTessellDbServicesDbServicesEngineConfigurationApacheKafkaConfigToTerraform(struct?: DataTessellDbServicesDbServicesEngineConfigurationApacheKafkaConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServicesDbServicesEngineConfigurationApacheKafkaConfigToHclTerraform(struct?: DataTessellDbServicesDbServicesEngineConfigurationApacheKafkaConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServicesDbServicesEngineConfigurationApacheKafkaConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServicesDbServicesEngineConfigurationApacheKafkaConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServicesDbServicesEngineConfigurationApacheKafkaConfig | undefined) {
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

export class DataTessellDbServicesDbServicesEngineConfigurationApacheKafkaConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServicesDbServicesEngineConfigurationApacheKafkaConfigOutputReference {
    return new DataTessellDbServicesDbServicesEngineConfigurationApacheKafkaConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServicesDbServicesEngineConfigurationCollationConfig {
}

export function dataTessellDbServicesDbServicesEngineConfigurationCollationConfigToTerraform(struct?: DataTessellDbServicesDbServicesEngineConfigurationCollationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServicesDbServicesEngineConfigurationCollationConfigToHclTerraform(struct?: DataTessellDbServicesDbServicesEngineConfigurationCollationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServicesDbServicesEngineConfigurationCollationConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServicesDbServicesEngineConfigurationCollationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServicesDbServicesEngineConfigurationCollationConfig | undefined) {
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

export class DataTessellDbServicesDbServicesEngineConfigurationCollationConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServicesDbServicesEngineConfigurationCollationConfigOutputReference {
    return new DataTessellDbServicesDbServicesEngineConfigurationCollationConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServicesDbServicesEngineConfigurationMilvusConfig {
}

export function dataTessellDbServicesDbServicesEngineConfigurationMilvusConfigToTerraform(struct?: DataTessellDbServicesDbServicesEngineConfigurationMilvusConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServicesDbServicesEngineConfigurationMilvusConfigToHclTerraform(struct?: DataTessellDbServicesDbServicesEngineConfigurationMilvusConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServicesDbServicesEngineConfigurationMilvusConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServicesDbServicesEngineConfigurationMilvusConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServicesDbServicesEngineConfigurationMilvusConfig | undefined) {
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

export class DataTessellDbServicesDbServicesEngineConfigurationMilvusConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServicesDbServicesEngineConfigurationMilvusConfigOutputReference {
    return new DataTessellDbServicesDbServicesEngineConfigurationMilvusConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServicesDbServicesEngineConfigurationMongodbConfig {
}

export function dataTessellDbServicesDbServicesEngineConfigurationMongodbConfigToTerraform(struct?: DataTessellDbServicesDbServicesEngineConfigurationMongodbConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServicesDbServicesEngineConfigurationMongodbConfigToHclTerraform(struct?: DataTessellDbServicesDbServicesEngineConfigurationMongodbConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServicesDbServicesEngineConfigurationMongodbConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServicesDbServicesEngineConfigurationMongodbConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServicesDbServicesEngineConfigurationMongodbConfig | undefined) {
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

export class DataTessellDbServicesDbServicesEngineConfigurationMongodbConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServicesDbServicesEngineConfigurationMongodbConfigOutputReference {
    return new DataTessellDbServicesDbServicesEngineConfigurationMongodbConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServicesDbServicesEngineConfigurationMysqlConfig {
}

export function dataTessellDbServicesDbServicesEngineConfigurationMysqlConfigToTerraform(struct?: DataTessellDbServicesDbServicesEngineConfigurationMysqlConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServicesDbServicesEngineConfigurationMysqlConfigToHclTerraform(struct?: DataTessellDbServicesDbServicesEngineConfigurationMysqlConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServicesDbServicesEngineConfigurationMysqlConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServicesDbServicesEngineConfigurationMysqlConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServicesDbServicesEngineConfigurationMysqlConfig | undefined) {
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

  // parameter_profile_id - computed: true, optional: false, required: false
  public get parameterProfileId() {
    return this.getStringAttribute('parameter_profile_id');
  }
}

export class DataTessellDbServicesDbServicesEngineConfigurationMysqlConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServicesDbServicesEngineConfigurationMysqlConfigOutputReference {
    return new DataTessellDbServicesDbServicesEngineConfigurationMysqlConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServicesDbServicesEngineConfigurationOracleConfig {
}

export function dataTessellDbServicesDbServicesEngineConfigurationOracleConfigToTerraform(struct?: DataTessellDbServicesDbServicesEngineConfigurationOracleConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServicesDbServicesEngineConfigurationOracleConfigToHclTerraform(struct?: DataTessellDbServicesDbServicesEngineConfigurationOracleConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServicesDbServicesEngineConfigurationOracleConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServicesDbServicesEngineConfigurationOracleConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServicesDbServicesEngineConfigurationOracleConfig | undefined) {
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

export class DataTessellDbServicesDbServicesEngineConfigurationOracleConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServicesDbServicesEngineConfigurationOracleConfigOutputReference {
    return new DataTessellDbServicesDbServicesEngineConfigurationOracleConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServicesDbServicesEngineConfigurationPostScriptInfo {
}

export function dataTessellDbServicesDbServicesEngineConfigurationPostScriptInfoToTerraform(struct?: DataTessellDbServicesDbServicesEngineConfigurationPostScriptInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServicesDbServicesEngineConfigurationPostScriptInfoToHclTerraform(struct?: DataTessellDbServicesDbServicesEngineConfigurationPostScriptInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServicesDbServicesEngineConfigurationPostScriptInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServicesDbServicesEngineConfigurationPostScriptInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServicesDbServicesEngineConfigurationPostScriptInfo | undefined) {
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

export class DataTessellDbServicesDbServicesEngineConfigurationPostScriptInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServicesDbServicesEngineConfigurationPostScriptInfoOutputReference {
    return new DataTessellDbServicesDbServicesEngineConfigurationPostScriptInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServicesDbServicesEngineConfigurationPostgresqlConfig {
}

export function dataTessellDbServicesDbServicesEngineConfigurationPostgresqlConfigToTerraform(struct?: DataTessellDbServicesDbServicesEngineConfigurationPostgresqlConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServicesDbServicesEngineConfigurationPostgresqlConfigToHclTerraform(struct?: DataTessellDbServicesDbServicesEngineConfigurationPostgresqlConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServicesDbServicesEngineConfigurationPostgresqlConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServicesDbServicesEngineConfigurationPostgresqlConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServicesDbServicesEngineConfigurationPostgresqlConfig | undefined) {
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

  // options_profile - computed: true, optional: false, required: false
  public get optionsProfile() {
    return this.getStringAttribute('options_profile');
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

export class DataTessellDbServicesDbServicesEngineConfigurationPostgresqlConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServicesDbServicesEngineConfigurationPostgresqlConfigOutputReference {
    return new DataTessellDbServicesDbServicesEngineConfigurationPostgresqlConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServicesDbServicesEngineConfigurationPreScriptInfo {
}

export function dataTessellDbServicesDbServicesEngineConfigurationPreScriptInfoToTerraform(struct?: DataTessellDbServicesDbServicesEngineConfigurationPreScriptInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServicesDbServicesEngineConfigurationPreScriptInfoToHclTerraform(struct?: DataTessellDbServicesDbServicesEngineConfigurationPreScriptInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServicesDbServicesEngineConfigurationPreScriptInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServicesDbServicesEngineConfigurationPreScriptInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServicesDbServicesEngineConfigurationPreScriptInfo | undefined) {
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

export class DataTessellDbServicesDbServicesEngineConfigurationPreScriptInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServicesDbServicesEngineConfigurationPreScriptInfoOutputReference {
    return new DataTessellDbServicesDbServicesEngineConfigurationPreScriptInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServicesDbServicesEngineConfigurationSqlServerConfig {
}

export function dataTessellDbServicesDbServicesEngineConfigurationSqlServerConfigToTerraform(struct?: DataTessellDbServicesDbServicesEngineConfigurationSqlServerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServicesDbServicesEngineConfigurationSqlServerConfigToHclTerraform(struct?: DataTessellDbServicesDbServicesEngineConfigurationSqlServerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServicesDbServicesEngineConfigurationSqlServerConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServicesDbServicesEngineConfigurationSqlServerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServicesDbServicesEngineConfigurationSqlServerConfig | undefined) {
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

  // parameter_profile_id - computed: true, optional: false, required: false
  public get parameterProfileId() {
    return this.getStringAttribute('parameter_profile_id');
  }

  // service_account_user - computed: true, optional: false, required: false
  public get serviceAccountUser() {
    return this.getStringAttribute('service_account_user');
  }
}

export class DataTessellDbServicesDbServicesEngineConfigurationSqlServerConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServicesDbServicesEngineConfigurationSqlServerConfigOutputReference {
    return new DataTessellDbServicesDbServicesEngineConfigurationSqlServerConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServicesDbServicesEngineConfiguration {
}

export function dataTessellDbServicesDbServicesEngineConfigurationToTerraform(struct?: DataTessellDbServicesDbServicesEngineConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServicesDbServicesEngineConfigurationToHclTerraform(struct?: DataTessellDbServicesDbServicesEngineConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServicesDbServicesEngineConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServicesDbServicesEngineConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServicesDbServicesEngineConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // apache_kafka_config - computed: true, optional: false, required: false
  private _apacheKafkaConfig = new DataTessellDbServicesDbServicesEngineConfigurationApacheKafkaConfigList(this, "apache_kafka_config", false);
  public get apacheKafkaConfig() {
    return this._apacheKafkaConfig;
  }

  // collation_config - computed: true, optional: false, required: false
  private _collationConfig = new DataTessellDbServicesDbServicesEngineConfigurationCollationConfigList(this, "collation_config", false);
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
  private _milvusConfig = new DataTessellDbServicesDbServicesEngineConfigurationMilvusConfigList(this, "milvus_config", false);
  public get milvusConfig() {
    return this._milvusConfig;
  }

  // mongodb_config - computed: true, optional: false, required: false
  private _mongodbConfig = new DataTessellDbServicesDbServicesEngineConfigurationMongodbConfigList(this, "mongodb_config", false);
  public get mongodbConfig() {
    return this._mongodbConfig;
  }

  // mysql_config - computed: true, optional: false, required: false
  private _mysqlConfig = new DataTessellDbServicesDbServicesEngineConfigurationMysqlConfigList(this, "mysql_config", false);
  public get mysqlConfig() {
    return this._mysqlConfig;
  }

  // oracle_config - computed: true, optional: false, required: false
  private _oracleConfig = new DataTessellDbServicesDbServicesEngineConfigurationOracleConfigList(this, "oracle_config", false);
  public get oracleConfig() {
    return this._oracleConfig;
  }

  // post_script_info - computed: true, optional: false, required: false
  private _postScriptInfo = new DataTessellDbServicesDbServicesEngineConfigurationPostScriptInfoList(this, "post_script_info", false);
  public get postScriptInfo() {
    return this._postScriptInfo;
  }

  // postgresql_config - computed: true, optional: false, required: false
  private _postgresqlConfig = new DataTessellDbServicesDbServicesEngineConfigurationPostgresqlConfigList(this, "postgresql_config", false);
  public get postgresqlConfig() {
    return this._postgresqlConfig;
  }

  // pre_script_info - computed: true, optional: false, required: false
  private _preScriptInfo = new DataTessellDbServicesDbServicesEngineConfigurationPreScriptInfoList(this, "pre_script_info", false);
  public get preScriptInfo() {
    return this._preScriptInfo;
  }

  // sql_server_config - computed: true, optional: false, required: false
  private _sqlServerConfig = new DataTessellDbServicesDbServicesEngineConfigurationSqlServerConfigList(this, "sql_server_config", false);
  public get sqlServerConfig() {
    return this._sqlServerConfig;
  }
}

export class DataTessellDbServicesDbServicesEngineConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServicesDbServicesEngineConfigurationOutputReference {
    return new DataTessellDbServicesDbServicesEngineConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServicesDbServicesInfrastructureArchiveStorageConfigAzureNetAppConfig {
}

export function dataTessellDbServicesDbServicesInfrastructureArchiveStorageConfigAzureNetAppConfigToTerraform(struct?: DataTessellDbServicesDbServicesInfrastructureArchiveStorageConfigAzureNetAppConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServicesDbServicesInfrastructureArchiveStorageConfigAzureNetAppConfigToHclTerraform(struct?: DataTessellDbServicesDbServicesInfrastructureArchiveStorageConfigAzureNetAppConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServicesDbServicesInfrastructureArchiveStorageConfigAzureNetAppConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServicesDbServicesInfrastructureArchiveStorageConfigAzureNetAppConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServicesDbServicesInfrastructureArchiveStorageConfigAzureNetAppConfig | undefined) {
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

export class DataTessellDbServicesDbServicesInfrastructureArchiveStorageConfigAzureNetAppConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServicesDbServicesInfrastructureArchiveStorageConfigAzureNetAppConfigOutputReference {
    return new DataTessellDbServicesDbServicesInfrastructureArchiveStorageConfigAzureNetAppConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServicesDbServicesInfrastructureArchiveStorageConfig {
}

export function dataTessellDbServicesDbServicesInfrastructureArchiveStorageConfigToTerraform(struct?: DataTessellDbServicesDbServicesInfrastructureArchiveStorageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServicesDbServicesInfrastructureArchiveStorageConfigToHclTerraform(struct?: DataTessellDbServicesDbServicesInfrastructureArchiveStorageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServicesDbServicesInfrastructureArchiveStorageConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServicesDbServicesInfrastructureArchiveStorageConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServicesDbServicesInfrastructureArchiveStorageConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // azure_net_app_config - computed: true, optional: false, required: false
  private _azureNetAppConfig = new DataTessellDbServicesDbServicesInfrastructureArchiveStorageConfigAzureNetAppConfigList(this, "azure_net_app_config", false);
  public get azureNetAppConfig() {
    return this._azureNetAppConfig;
  }

  // provider - computed: true, optional: false, required: false
  public get provider() {
    return this.getStringAttribute('provider');
  }
}

export class DataTessellDbServicesDbServicesInfrastructureArchiveStorageConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServicesDbServicesInfrastructureArchiveStorageConfigOutputReference {
    return new DataTessellDbServicesDbServicesInfrastructureArchiveStorageConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServicesDbServicesInfrastructureAwsInfraConfigAwsCpuOptions {
}

export function dataTessellDbServicesDbServicesInfrastructureAwsInfraConfigAwsCpuOptionsToTerraform(struct?: DataTessellDbServicesDbServicesInfrastructureAwsInfraConfigAwsCpuOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServicesDbServicesInfrastructureAwsInfraConfigAwsCpuOptionsToHclTerraform(struct?: DataTessellDbServicesDbServicesInfrastructureAwsInfraConfigAwsCpuOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServicesDbServicesInfrastructureAwsInfraConfigAwsCpuOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServicesDbServicesInfrastructureAwsInfraConfigAwsCpuOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServicesDbServicesInfrastructureAwsInfraConfigAwsCpuOptions | undefined) {
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

export class DataTessellDbServicesDbServicesInfrastructureAwsInfraConfigAwsCpuOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServicesDbServicesInfrastructureAwsInfraConfigAwsCpuOptionsOutputReference {
    return new DataTessellDbServicesDbServicesInfrastructureAwsInfraConfigAwsCpuOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServicesDbServicesInfrastructureAwsInfraConfig {
}

export function dataTessellDbServicesDbServicesInfrastructureAwsInfraConfigToTerraform(struct?: DataTessellDbServicesDbServicesInfrastructureAwsInfraConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServicesDbServicesInfrastructureAwsInfraConfigToHclTerraform(struct?: DataTessellDbServicesDbServicesInfrastructureAwsInfraConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServicesDbServicesInfrastructureAwsInfraConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServicesDbServicesInfrastructureAwsInfraConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServicesDbServicesInfrastructureAwsInfraConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aws_cpu_options - computed: true, optional: false, required: false
  private _awsCpuOptions = new DataTessellDbServicesDbServicesInfrastructureAwsInfraConfigAwsCpuOptionsList(this, "aws_cpu_options", false);
  public get awsCpuOptions() {
    return this._awsCpuOptions;
  }
}

export class DataTessellDbServicesDbServicesInfrastructureAwsInfraConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServicesDbServicesInfrastructureAwsInfraConfigOutputReference {
    return new DataTessellDbServicesDbServicesInfrastructureAwsInfraConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServicesDbServicesInfrastructureCloudAvailabilityRegions {
}

export function dataTessellDbServicesDbServicesInfrastructureCloudAvailabilityRegionsToTerraform(struct?: DataTessellDbServicesDbServicesInfrastructureCloudAvailabilityRegions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServicesDbServicesInfrastructureCloudAvailabilityRegionsToHclTerraform(struct?: DataTessellDbServicesDbServicesInfrastructureCloudAvailabilityRegions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServicesDbServicesInfrastructureCloudAvailabilityRegionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServicesDbServicesInfrastructureCloudAvailabilityRegions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServicesDbServicesInfrastructureCloudAvailabilityRegions | undefined) {
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

export class DataTessellDbServicesDbServicesInfrastructureCloudAvailabilityRegionsList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServicesDbServicesInfrastructureCloudAvailabilityRegionsOutputReference {
    return new DataTessellDbServicesDbServicesInfrastructureCloudAvailabilityRegionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServicesDbServicesInfrastructureCloudAvailability {
}

export function dataTessellDbServicesDbServicesInfrastructureCloudAvailabilityToTerraform(struct?: DataTessellDbServicesDbServicesInfrastructureCloudAvailability): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServicesDbServicesInfrastructureCloudAvailabilityToHclTerraform(struct?: DataTessellDbServicesDbServicesInfrastructureCloudAvailability): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServicesDbServicesInfrastructureCloudAvailabilityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServicesDbServicesInfrastructureCloudAvailability | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServicesDbServicesInfrastructureCloudAvailability | undefined) {
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
  private _regions = new DataTessellDbServicesDbServicesInfrastructureCloudAvailabilityRegionsList(this, "regions", false);
  public get regions() {
    return this._regions;
  }
}

export class DataTessellDbServicesDbServicesInfrastructureCloudAvailabilityList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServicesDbServicesInfrastructureCloudAvailabilityOutputReference {
    return new DataTessellDbServicesDbServicesInfrastructureCloudAvailabilityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServicesDbServicesInfrastructureStorageConfigAzureNetAppConfig {
}

export function dataTessellDbServicesDbServicesInfrastructureStorageConfigAzureNetAppConfigToTerraform(struct?: DataTessellDbServicesDbServicesInfrastructureStorageConfigAzureNetAppConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServicesDbServicesInfrastructureStorageConfigAzureNetAppConfigToHclTerraform(struct?: DataTessellDbServicesDbServicesInfrastructureStorageConfigAzureNetAppConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServicesDbServicesInfrastructureStorageConfigAzureNetAppConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServicesDbServicesInfrastructureStorageConfigAzureNetAppConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServicesDbServicesInfrastructureStorageConfigAzureNetAppConfig | undefined) {
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

export class DataTessellDbServicesDbServicesInfrastructureStorageConfigAzureNetAppConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServicesDbServicesInfrastructureStorageConfigAzureNetAppConfigOutputReference {
    return new DataTessellDbServicesDbServicesInfrastructureStorageConfigAzureNetAppConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServicesDbServicesInfrastructureStorageConfig {
}

export function dataTessellDbServicesDbServicesInfrastructureStorageConfigToTerraform(struct?: DataTessellDbServicesDbServicesInfrastructureStorageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServicesDbServicesInfrastructureStorageConfigToHclTerraform(struct?: DataTessellDbServicesDbServicesInfrastructureStorageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServicesDbServicesInfrastructureStorageConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServicesDbServicesInfrastructureStorageConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServicesDbServicesInfrastructureStorageConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // azure_net_app_config - computed: true, optional: false, required: false
  private _azureNetAppConfig = new DataTessellDbServicesDbServicesInfrastructureStorageConfigAzureNetAppConfigList(this, "azure_net_app_config", false);
  public get azureNetAppConfig() {
    return this._azureNetAppConfig;
  }

  // provider - computed: true, optional: false, required: false
  public get provider() {
    return this.getStringAttribute('provider');
  }
}

export class DataTessellDbServicesDbServicesInfrastructureStorageConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServicesDbServicesInfrastructureStorageConfigOutputReference {
    return new DataTessellDbServicesDbServicesInfrastructureStorageConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServicesDbServicesInfrastructure {
}

export function dataTessellDbServicesDbServicesInfrastructureToTerraform(struct?: DataTessellDbServicesDbServicesInfrastructure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServicesDbServicesInfrastructureToHclTerraform(struct?: DataTessellDbServicesDbServicesInfrastructure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServicesDbServicesInfrastructureOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServicesDbServicesInfrastructure | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServicesDbServicesInfrastructure | undefined) {
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
  private _archiveStorageConfig = new DataTessellDbServicesDbServicesInfrastructureArchiveStorageConfigList(this, "archive_storage_config", false);
  public get archiveStorageConfig() {
    return this._archiveStorageConfig;
  }

  // availability_zone - computed: true, optional: false, required: false
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }

  // aws_infra_config - computed: true, optional: false, required: false
  private _awsInfraConfig = new DataTessellDbServicesDbServicesInfrastructureAwsInfraConfigList(this, "aws_infra_config", false);
  public get awsInfraConfig() {
    return this._awsInfraConfig;
  }

  // cloud - computed: true, optional: false, required: false
  public get cloud() {
    return this.getStringAttribute('cloud');
  }

  // cloud_availability - computed: true, optional: false, required: false
  private _cloudAvailability = new DataTessellDbServicesDbServicesInfrastructureCloudAvailabilityList(this, "cloud_availability", false);
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
  private _storageConfig = new DataTessellDbServicesDbServicesInfrastructureStorageConfigList(this, "storage_config", false);
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

export class DataTessellDbServicesDbServicesInfrastructureList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServicesDbServicesInfrastructureOutputReference {
    return new DataTessellDbServicesDbServicesInfrastructureOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServicesDbServicesInstancesArchiveStorageConfigAzureNetAppConfigEncryptionKeyInfo {
}

export function dataTessellDbServicesDbServicesInstancesArchiveStorageConfigAzureNetAppConfigEncryptionKeyInfoToTerraform(struct?: DataTessellDbServicesDbServicesInstancesArchiveStorageConfigAzureNetAppConfigEncryptionKeyInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServicesDbServicesInstancesArchiveStorageConfigAzureNetAppConfigEncryptionKeyInfoToHclTerraform(struct?: DataTessellDbServicesDbServicesInstancesArchiveStorageConfigAzureNetAppConfigEncryptionKeyInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServicesDbServicesInstancesArchiveStorageConfigAzureNetAppConfigEncryptionKeyInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServicesDbServicesInstancesArchiveStorageConfigAzureNetAppConfigEncryptionKeyInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServicesDbServicesInstancesArchiveStorageConfigAzureNetAppConfigEncryptionKeyInfo | undefined) {
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

export class DataTessellDbServicesDbServicesInstancesArchiveStorageConfigAzureNetAppConfigEncryptionKeyInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServicesDbServicesInstancesArchiveStorageConfigAzureNetAppConfigEncryptionKeyInfoOutputReference {
    return new DataTessellDbServicesDbServicesInstancesArchiveStorageConfigAzureNetAppConfigEncryptionKeyInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServicesDbServicesInstancesArchiveStorageConfigAzureNetAppConfig {
}

export function dataTessellDbServicesDbServicesInstancesArchiveStorageConfigAzureNetAppConfigToTerraform(struct?: DataTessellDbServicesDbServicesInstancesArchiveStorageConfigAzureNetAppConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServicesDbServicesInstancesArchiveStorageConfigAzureNetAppConfigToHclTerraform(struct?: DataTessellDbServicesDbServicesInstancesArchiveStorageConfigAzureNetAppConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServicesDbServicesInstancesArchiveStorageConfigAzureNetAppConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServicesDbServicesInstancesArchiveStorageConfigAzureNetAppConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServicesDbServicesInstancesArchiveStorageConfigAzureNetAppConfig | undefined) {
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
  private _encryptionKeyInfo = new DataTessellDbServicesDbServicesInstancesArchiveStorageConfigAzureNetAppConfigEncryptionKeyInfoList(this, "encryption_key_info", false);
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

export class DataTessellDbServicesDbServicesInstancesArchiveStorageConfigAzureNetAppConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServicesDbServicesInstancesArchiveStorageConfigAzureNetAppConfigOutputReference {
    return new DataTessellDbServicesDbServicesInstancesArchiveStorageConfigAzureNetAppConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServicesDbServicesInstancesArchiveStorageConfigFsxNetAppConfig {
}

export function dataTessellDbServicesDbServicesInstancesArchiveStorageConfigFsxNetAppConfigToTerraform(struct?: DataTessellDbServicesDbServicesInstancesArchiveStorageConfigFsxNetAppConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServicesDbServicesInstancesArchiveStorageConfigFsxNetAppConfigToHclTerraform(struct?: DataTessellDbServicesDbServicesInstancesArchiveStorageConfigFsxNetAppConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServicesDbServicesInstancesArchiveStorageConfigFsxNetAppConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServicesDbServicesInstancesArchiveStorageConfigFsxNetAppConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServicesDbServicesInstancesArchiveStorageConfigFsxNetAppConfig | undefined) {
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

export class DataTessellDbServicesDbServicesInstancesArchiveStorageConfigFsxNetAppConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServicesDbServicesInstancesArchiveStorageConfigFsxNetAppConfigOutputReference {
    return new DataTessellDbServicesDbServicesInstancesArchiveStorageConfigFsxNetAppConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServicesDbServicesInstancesArchiveStorageConfig {
}

export function dataTessellDbServicesDbServicesInstancesArchiveStorageConfigToTerraform(struct?: DataTessellDbServicesDbServicesInstancesArchiveStorageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServicesDbServicesInstancesArchiveStorageConfigToHclTerraform(struct?: DataTessellDbServicesDbServicesInstancesArchiveStorageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServicesDbServicesInstancesArchiveStorageConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServicesDbServicesInstancesArchiveStorageConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServicesDbServicesInstancesArchiveStorageConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // azure_net_app_config - computed: true, optional: false, required: false
  private _azureNetAppConfig = new DataTessellDbServicesDbServicesInstancesArchiveStorageConfigAzureNetAppConfigList(this, "azure_net_app_config", false);
  public get azureNetAppConfig() {
    return this._azureNetAppConfig;
  }

  // fsx_net_app_config - computed: true, optional: false, required: false
  private _fsxNetAppConfig = new DataTessellDbServicesDbServicesInstancesArchiveStorageConfigFsxNetAppConfigList(this, "fsx_net_app_config", false);
  public get fsxNetAppConfig() {
    return this._fsxNetAppConfig;
  }

  // provider - computed: true, optional: false, required: false
  public get provider() {
    return this.getStringAttribute('provider');
  }
}

export class DataTessellDbServicesDbServicesInstancesArchiveStorageConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServicesDbServicesInstancesArchiveStorageConfigOutputReference {
    return new DataTessellDbServicesDbServicesInstancesArchiveStorageConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServicesDbServicesInstancesAwsInfraConfigAwsCpuOptions {
}

export function dataTessellDbServicesDbServicesInstancesAwsInfraConfigAwsCpuOptionsToTerraform(struct?: DataTessellDbServicesDbServicesInstancesAwsInfraConfigAwsCpuOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServicesDbServicesInstancesAwsInfraConfigAwsCpuOptionsToHclTerraform(struct?: DataTessellDbServicesDbServicesInstancesAwsInfraConfigAwsCpuOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServicesDbServicesInstancesAwsInfraConfigAwsCpuOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServicesDbServicesInstancesAwsInfraConfigAwsCpuOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServicesDbServicesInstancesAwsInfraConfigAwsCpuOptions | undefined) {
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

export class DataTessellDbServicesDbServicesInstancesAwsInfraConfigAwsCpuOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServicesDbServicesInstancesAwsInfraConfigAwsCpuOptionsOutputReference {
    return new DataTessellDbServicesDbServicesInstancesAwsInfraConfigAwsCpuOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServicesDbServicesInstancesAwsInfraConfig {
}

export function dataTessellDbServicesDbServicesInstancesAwsInfraConfigToTerraform(struct?: DataTessellDbServicesDbServicesInstancesAwsInfraConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServicesDbServicesInstancesAwsInfraConfigToHclTerraform(struct?: DataTessellDbServicesDbServicesInstancesAwsInfraConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServicesDbServicesInstancesAwsInfraConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServicesDbServicesInstancesAwsInfraConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServicesDbServicesInstancesAwsInfraConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aws_cpu_options - computed: true, optional: false, required: false
  private _awsCpuOptions = new DataTessellDbServicesDbServicesInstancesAwsInfraConfigAwsCpuOptionsList(this, "aws_cpu_options", false);
  public get awsCpuOptions() {
    return this._awsCpuOptions;
  }
}

export class DataTessellDbServicesDbServicesInstancesAwsInfraConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServicesDbServicesInstancesAwsInfraConfigOutputReference {
    return new DataTessellDbServicesDbServicesInstancesAwsInfraConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServicesDbServicesInstancesComputeConfigExadataConfig {
}

export function dataTessellDbServicesDbServicesInstancesComputeConfigExadataConfigToTerraform(struct?: DataTessellDbServicesDbServicesInstancesComputeConfigExadataConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServicesDbServicesInstancesComputeConfigExadataConfigToHclTerraform(struct?: DataTessellDbServicesDbServicesInstancesComputeConfigExadataConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServicesDbServicesInstancesComputeConfigExadataConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServicesDbServicesInstancesComputeConfigExadataConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServicesDbServicesInstancesComputeConfigExadataConfig | undefined) {
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

export class DataTessellDbServicesDbServicesInstancesComputeConfigExadataConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServicesDbServicesInstancesComputeConfigExadataConfigOutputReference {
    return new DataTessellDbServicesDbServicesInstancesComputeConfigExadataConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServicesDbServicesInstancesComputeConfig {
}

export function dataTessellDbServicesDbServicesInstancesComputeConfigToTerraform(struct?: DataTessellDbServicesDbServicesInstancesComputeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServicesDbServicesInstancesComputeConfigToHclTerraform(struct?: DataTessellDbServicesDbServicesInstancesComputeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServicesDbServicesInstancesComputeConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServicesDbServicesInstancesComputeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServicesDbServicesInstancesComputeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // exadata_config - computed: true, optional: false, required: false
  private _exadataConfig = new DataTessellDbServicesDbServicesInstancesComputeConfigExadataConfigList(this, "exadata_config", false);
  public get exadataConfig() {
    return this._exadataConfig;
  }

  // provider - computed: true, optional: false, required: false
  public get provider() {
    return this.getStringAttribute('provider');
  }
}

export class DataTessellDbServicesDbServicesInstancesComputeConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServicesDbServicesInstancesComputeConfigOutputReference {
    return new DataTessellDbServicesDbServicesInstancesComputeConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServicesDbServicesInstancesConnectString {
}

export function dataTessellDbServicesDbServicesInstancesConnectStringToTerraform(struct?: DataTessellDbServicesDbServicesInstancesConnectString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServicesDbServicesInstancesConnectStringToHclTerraform(struct?: DataTessellDbServicesDbServicesInstancesConnectString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServicesDbServicesInstancesConnectStringOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServicesDbServicesInstancesConnectString | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServicesDbServicesInstancesConnectString | undefined) {
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

export class DataTessellDbServicesDbServicesInstancesConnectStringList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServicesDbServicesInstancesConnectStringOutputReference {
    return new DataTessellDbServicesDbServicesInstancesConnectStringOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServicesDbServicesInstancesEngineConfigurationOracleConfig {
}

export function dataTessellDbServicesDbServicesInstancesEngineConfigurationOracleConfigToTerraform(struct?: DataTessellDbServicesDbServicesInstancesEngineConfigurationOracleConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServicesDbServicesInstancesEngineConfigurationOracleConfigToHclTerraform(struct?: DataTessellDbServicesDbServicesInstancesEngineConfigurationOracleConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServicesDbServicesInstancesEngineConfigurationOracleConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServicesDbServicesInstancesEngineConfigurationOracleConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServicesDbServicesInstancesEngineConfigurationOracleConfig | undefined) {
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

export class DataTessellDbServicesDbServicesInstancesEngineConfigurationOracleConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServicesDbServicesInstancesEngineConfigurationOracleConfigOutputReference {
    return new DataTessellDbServicesDbServicesInstancesEngineConfigurationOracleConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServicesDbServicesInstancesEngineConfiguration {
}

export function dataTessellDbServicesDbServicesInstancesEngineConfigurationToTerraform(struct?: DataTessellDbServicesDbServicesInstancesEngineConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServicesDbServicesInstancesEngineConfigurationToHclTerraform(struct?: DataTessellDbServicesDbServicesInstancesEngineConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServicesDbServicesInstancesEngineConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServicesDbServicesInstancesEngineConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServicesDbServicesInstancesEngineConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // oracle_config - computed: true, optional: false, required: false
  private _oracleConfig = new DataTessellDbServicesDbServicesInstancesEngineConfigurationOracleConfigList(this, "oracle_config", false);
  public get oracleConfig() {
    return this._oracleConfig;
  }
}

export class DataTessellDbServicesDbServicesInstancesEngineConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServicesDbServicesInstancesEngineConfigurationOutputReference {
    return new DataTessellDbServicesDbServicesInstancesEngineConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServicesDbServicesInstancesMonitoringConfigPerfInsights {
}

export function dataTessellDbServicesDbServicesInstancesMonitoringConfigPerfInsightsToTerraform(struct?: DataTessellDbServicesDbServicesInstancesMonitoringConfigPerfInsights): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServicesDbServicesInstancesMonitoringConfigPerfInsightsToHclTerraform(struct?: DataTessellDbServicesDbServicesInstancesMonitoringConfigPerfInsights): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServicesDbServicesInstancesMonitoringConfigPerfInsightsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServicesDbServicesInstancesMonitoringConfigPerfInsights | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServicesDbServicesInstancesMonitoringConfigPerfInsights | undefined) {
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

export class DataTessellDbServicesDbServicesInstancesMonitoringConfigPerfInsightsList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServicesDbServicesInstancesMonitoringConfigPerfInsightsOutputReference {
    return new DataTessellDbServicesDbServicesInstancesMonitoringConfigPerfInsightsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServicesDbServicesInstancesMonitoringConfig {
}

export function dataTessellDbServicesDbServicesInstancesMonitoringConfigToTerraform(struct?: DataTessellDbServicesDbServicesInstancesMonitoringConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServicesDbServicesInstancesMonitoringConfigToHclTerraform(struct?: DataTessellDbServicesDbServicesInstancesMonitoringConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServicesDbServicesInstancesMonitoringConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServicesDbServicesInstancesMonitoringConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServicesDbServicesInstancesMonitoringConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // perf_insights - computed: true, optional: false, required: false
  private _perfInsights = new DataTessellDbServicesDbServicesInstancesMonitoringConfigPerfInsightsList(this, "perf_insights", false);
  public get perfInsights() {
    return this._perfInsights;
  }
}

export class DataTessellDbServicesDbServicesInstancesMonitoringConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServicesDbServicesInstancesMonitoringConfigOutputReference {
    return new DataTessellDbServicesDbServicesInstancesMonitoringConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServicesDbServicesInstancesParameterProfile {
}

export function dataTessellDbServicesDbServicesInstancesParameterProfileToTerraform(struct?: DataTessellDbServicesDbServicesInstancesParameterProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServicesDbServicesInstancesParameterProfileToHclTerraform(struct?: DataTessellDbServicesDbServicesInstancesParameterProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServicesDbServicesInstancesParameterProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServicesDbServicesInstancesParameterProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServicesDbServicesInstancesParameterProfile | undefined) {
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

export class DataTessellDbServicesDbServicesInstancesParameterProfileList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServicesDbServicesInstancesParameterProfileOutputReference {
    return new DataTessellDbServicesDbServicesInstancesParameterProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServicesDbServicesInstancesStorageConfigAzureNetAppConfigEncryptionKeyInfo {
}

export function dataTessellDbServicesDbServicesInstancesStorageConfigAzureNetAppConfigEncryptionKeyInfoToTerraform(struct?: DataTessellDbServicesDbServicesInstancesStorageConfigAzureNetAppConfigEncryptionKeyInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServicesDbServicesInstancesStorageConfigAzureNetAppConfigEncryptionKeyInfoToHclTerraform(struct?: DataTessellDbServicesDbServicesInstancesStorageConfigAzureNetAppConfigEncryptionKeyInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServicesDbServicesInstancesStorageConfigAzureNetAppConfigEncryptionKeyInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServicesDbServicesInstancesStorageConfigAzureNetAppConfigEncryptionKeyInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServicesDbServicesInstancesStorageConfigAzureNetAppConfigEncryptionKeyInfo | undefined) {
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

export class DataTessellDbServicesDbServicesInstancesStorageConfigAzureNetAppConfigEncryptionKeyInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServicesDbServicesInstancesStorageConfigAzureNetAppConfigEncryptionKeyInfoOutputReference {
    return new DataTessellDbServicesDbServicesInstancesStorageConfigAzureNetAppConfigEncryptionKeyInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServicesDbServicesInstancesStorageConfigAzureNetAppConfig {
}

export function dataTessellDbServicesDbServicesInstancesStorageConfigAzureNetAppConfigToTerraform(struct?: DataTessellDbServicesDbServicesInstancesStorageConfigAzureNetAppConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServicesDbServicesInstancesStorageConfigAzureNetAppConfigToHclTerraform(struct?: DataTessellDbServicesDbServicesInstancesStorageConfigAzureNetAppConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServicesDbServicesInstancesStorageConfigAzureNetAppConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServicesDbServicesInstancesStorageConfigAzureNetAppConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServicesDbServicesInstancesStorageConfigAzureNetAppConfig | undefined) {
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
  private _encryptionKeyInfo = new DataTessellDbServicesDbServicesInstancesStorageConfigAzureNetAppConfigEncryptionKeyInfoList(this, "encryption_key_info", false);
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

export class DataTessellDbServicesDbServicesInstancesStorageConfigAzureNetAppConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServicesDbServicesInstancesStorageConfigAzureNetAppConfigOutputReference {
    return new DataTessellDbServicesDbServicesInstancesStorageConfigAzureNetAppConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServicesDbServicesInstancesStorageConfigFsxNetAppConfig {
}

export function dataTessellDbServicesDbServicesInstancesStorageConfigFsxNetAppConfigToTerraform(struct?: DataTessellDbServicesDbServicesInstancesStorageConfigFsxNetAppConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServicesDbServicesInstancesStorageConfigFsxNetAppConfigToHclTerraform(struct?: DataTessellDbServicesDbServicesInstancesStorageConfigFsxNetAppConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServicesDbServicesInstancesStorageConfigFsxNetAppConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServicesDbServicesInstancesStorageConfigFsxNetAppConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServicesDbServicesInstancesStorageConfigFsxNetAppConfig | undefined) {
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

export class DataTessellDbServicesDbServicesInstancesStorageConfigFsxNetAppConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServicesDbServicesInstancesStorageConfigFsxNetAppConfigOutputReference {
    return new DataTessellDbServicesDbServicesInstancesStorageConfigFsxNetAppConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServicesDbServicesInstancesStorageConfig {
}

export function dataTessellDbServicesDbServicesInstancesStorageConfigToTerraform(struct?: DataTessellDbServicesDbServicesInstancesStorageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServicesDbServicesInstancesStorageConfigToHclTerraform(struct?: DataTessellDbServicesDbServicesInstancesStorageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServicesDbServicesInstancesStorageConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServicesDbServicesInstancesStorageConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServicesDbServicesInstancesStorageConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // azure_net_app_config - computed: true, optional: false, required: false
  private _azureNetAppConfig = new DataTessellDbServicesDbServicesInstancesStorageConfigAzureNetAppConfigList(this, "azure_net_app_config", false);
  public get azureNetAppConfig() {
    return this._azureNetAppConfig;
  }

  // fsx_net_app_config - computed: true, optional: false, required: false
  private _fsxNetAppConfig = new DataTessellDbServicesDbServicesInstancesStorageConfigFsxNetAppConfigList(this, "fsx_net_app_config", false);
  public get fsxNetAppConfig() {
    return this._fsxNetAppConfig;
  }

  // provider - computed: true, optional: false, required: false
  public get provider() {
    return this.getStringAttribute('provider');
  }
}

export class DataTessellDbServicesDbServicesInstancesStorageConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServicesDbServicesInstancesStorageConfigOutputReference {
    return new DataTessellDbServicesDbServicesInstancesStorageConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServicesDbServicesInstancesUpdatesInProgress {
}

export function dataTessellDbServicesDbServicesInstancesUpdatesInProgressToTerraform(struct?: DataTessellDbServicesDbServicesInstancesUpdatesInProgress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServicesDbServicesInstancesUpdatesInProgressToHclTerraform(struct?: DataTessellDbServicesDbServicesInstancesUpdatesInProgress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServicesDbServicesInstancesUpdatesInProgressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServicesDbServicesInstancesUpdatesInProgress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServicesDbServicesInstancesUpdatesInProgress | undefined) {
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

export class DataTessellDbServicesDbServicesInstancesUpdatesInProgressList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServicesDbServicesInstancesUpdatesInProgressOutputReference {
    return new DataTessellDbServicesDbServicesInstancesUpdatesInProgressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServicesDbServicesInstances {
}

export function dataTessellDbServicesDbServicesInstancesToTerraform(struct?: DataTessellDbServicesDbServicesInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServicesDbServicesInstancesToHclTerraform(struct?: DataTessellDbServicesDbServicesInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServicesDbServicesInstancesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServicesDbServicesInstances | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServicesDbServicesInstances | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // archive_storage_config - computed: true, optional: false, required: false
  private _archiveStorageConfig = new DataTessellDbServicesDbServicesInstancesArchiveStorageConfigList(this, "archive_storage_config", false);
  public get archiveStorageConfig() {
    return this._archiveStorageConfig;
  }

  // availability_zone - computed: true, optional: false, required: false
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }

  // aws_infra_config - computed: true, optional: false, required: false
  private _awsInfraConfig = new DataTessellDbServicesDbServicesInstancesAwsInfraConfigList(this, "aws_infra_config", false);
  public get awsInfraConfig() {
    return this._awsInfraConfig;
  }

  // cloud - computed: true, optional: false, required: false
  public get cloud() {
    return this.getStringAttribute('cloud');
  }

  // compute_config - computed: true, optional: false, required: false
  private _computeConfig = new DataTessellDbServicesDbServicesInstancesComputeConfigList(this, "compute_config", false);
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
  private _connectString = new DataTessellDbServicesDbServicesInstancesConnectStringList(this, "connect_string", false);
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
  private _engineConfiguration = new DataTessellDbServicesDbServicesInstancesEngineConfigurationList(this, "engine_configuration", false);
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
  private _monitoringConfig = new DataTessellDbServicesDbServicesInstancesMonitoringConfigList(this, "monitoring_config", false);
  public get monitoringConfig() {
    return this._monitoringConfig;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parameter_profile - computed: true, optional: false, required: false
  private _parameterProfile = new DataTessellDbServicesDbServicesInstancesParameterProfileList(this, "parameter_profile", false);
  public get parameterProfile() {
    return this._parameterProfile;
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
  private _storageConfig = new DataTessellDbServicesDbServicesInstancesStorageConfigList(this, "storage_config", false);
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
  private _updatesInProgress = new DataTessellDbServicesDbServicesInstancesUpdatesInProgressList(this, "updates_in_progress", false);
  public get updatesInProgress() {
    return this._updatesInProgress;
  }

  // vpc - computed: true, optional: false, required: false
  public get vpc() {
    return this.getStringAttribute('vpc');
  }
}

export class DataTessellDbServicesDbServicesInstancesList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServicesDbServicesInstancesOutputReference {
    return new DataTessellDbServicesDbServicesInstancesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServicesDbServicesIntegrationsConfig {
}

export function dataTessellDbServicesDbServicesIntegrationsConfigToTerraform(struct?: DataTessellDbServicesDbServicesIntegrationsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServicesDbServicesIntegrationsConfigToHclTerraform(struct?: DataTessellDbServicesDbServicesIntegrationsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServicesDbServicesIntegrationsConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServicesDbServicesIntegrationsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServicesDbServicesIntegrationsConfig | undefined) {
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

export class DataTessellDbServicesDbServicesIntegrationsConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServicesDbServicesIntegrationsConfigOutputReference {
    return new DataTessellDbServicesDbServicesIntegrationsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServicesDbServicesMaintenanceWindow {
}

export function dataTessellDbServicesDbServicesMaintenanceWindowToTerraform(struct?: DataTessellDbServicesDbServicesMaintenanceWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServicesDbServicesMaintenanceWindowToHclTerraform(struct?: DataTessellDbServicesDbServicesMaintenanceWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServicesDbServicesMaintenanceWindowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServicesDbServicesMaintenanceWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServicesDbServicesMaintenanceWindow | undefined) {
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

export class DataTessellDbServicesDbServicesMaintenanceWindowList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServicesDbServicesMaintenanceWindowOutputReference {
    return new DataTessellDbServicesDbServicesMaintenanceWindowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServicesDbServicesRefreshInfoScriptInfoPostScriptInfo {
}

export function dataTessellDbServicesDbServicesRefreshInfoScriptInfoPostScriptInfoToTerraform(struct?: DataTessellDbServicesDbServicesRefreshInfoScriptInfoPostScriptInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServicesDbServicesRefreshInfoScriptInfoPostScriptInfoToHclTerraform(struct?: DataTessellDbServicesDbServicesRefreshInfoScriptInfoPostScriptInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServicesDbServicesRefreshInfoScriptInfoPostScriptInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServicesDbServicesRefreshInfoScriptInfoPostScriptInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServicesDbServicesRefreshInfoScriptInfoPostScriptInfo | undefined) {
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

export class DataTessellDbServicesDbServicesRefreshInfoScriptInfoPostScriptInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServicesDbServicesRefreshInfoScriptInfoPostScriptInfoOutputReference {
    return new DataTessellDbServicesDbServicesRefreshInfoScriptInfoPostScriptInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServicesDbServicesRefreshInfoScriptInfoPreScriptInfo {
}

export function dataTessellDbServicesDbServicesRefreshInfoScriptInfoPreScriptInfoToTerraform(struct?: DataTessellDbServicesDbServicesRefreshInfoScriptInfoPreScriptInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServicesDbServicesRefreshInfoScriptInfoPreScriptInfoToHclTerraform(struct?: DataTessellDbServicesDbServicesRefreshInfoScriptInfoPreScriptInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServicesDbServicesRefreshInfoScriptInfoPreScriptInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServicesDbServicesRefreshInfoScriptInfoPreScriptInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServicesDbServicesRefreshInfoScriptInfoPreScriptInfo | undefined) {
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

export class DataTessellDbServicesDbServicesRefreshInfoScriptInfoPreScriptInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServicesDbServicesRefreshInfoScriptInfoPreScriptInfoOutputReference {
    return new DataTessellDbServicesDbServicesRefreshInfoScriptInfoPreScriptInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServicesDbServicesRefreshInfoScriptInfo {
}

export function dataTessellDbServicesDbServicesRefreshInfoScriptInfoToTerraform(struct?: DataTessellDbServicesDbServicesRefreshInfoScriptInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServicesDbServicesRefreshInfoScriptInfoToHclTerraform(struct?: DataTessellDbServicesDbServicesRefreshInfoScriptInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServicesDbServicesRefreshInfoScriptInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServicesDbServicesRefreshInfoScriptInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServicesDbServicesRefreshInfoScriptInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // post_script_info - computed: true, optional: false, required: false
  private _postScriptInfo = new DataTessellDbServicesDbServicesRefreshInfoScriptInfoPostScriptInfoList(this, "post_script_info", false);
  public get postScriptInfo() {
    return this._postScriptInfo;
  }

  // pre_script_info - computed: true, optional: false, required: false
  private _preScriptInfo = new DataTessellDbServicesDbServicesRefreshInfoScriptInfoPreScriptInfoList(this, "pre_script_info", false);
  public get preScriptInfo() {
    return this._preScriptInfo;
  }
}

export class DataTessellDbServicesDbServicesRefreshInfoScriptInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServicesDbServicesRefreshInfoScriptInfoOutputReference {
    return new DataTessellDbServicesDbServicesRefreshInfoScriptInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServicesDbServicesRefreshInfo {
}

export function dataTessellDbServicesDbServicesRefreshInfoToTerraform(struct?: DataTessellDbServicesDbServicesRefreshInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServicesDbServicesRefreshInfoToHclTerraform(struct?: DataTessellDbServicesDbServicesRefreshInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServicesDbServicesRefreshInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServicesDbServicesRefreshInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServicesDbServicesRefreshInfo | undefined) {
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
  private _scriptInfo = new DataTessellDbServicesDbServicesRefreshInfoScriptInfoList(this, "script_info", false);
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

export class DataTessellDbServicesDbServicesRefreshInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServicesDbServicesRefreshInfoOutputReference {
    return new DataTessellDbServicesDbServicesRefreshInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServicesDbServicesServiceConnectivityComputesConnectivityPortAccessConfig {
}

export function dataTessellDbServicesDbServicesServiceConnectivityComputesConnectivityPortAccessConfigToTerraform(struct?: DataTessellDbServicesDbServicesServiceConnectivityComputesConnectivityPortAccessConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServicesDbServicesServiceConnectivityComputesConnectivityPortAccessConfigToHclTerraform(struct?: DataTessellDbServicesDbServicesServiceConnectivityComputesConnectivityPortAccessConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServicesDbServicesServiceConnectivityComputesConnectivityPortAccessConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServicesDbServicesServiceConnectivityComputesConnectivityPortAccessConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServicesDbServicesServiceConnectivityComputesConnectivityPortAccessConfig | undefined) {
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

export class DataTessellDbServicesDbServicesServiceConnectivityComputesConnectivityPortAccessConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServicesDbServicesServiceConnectivityComputesConnectivityPortAccessConfigOutputReference {
    return new DataTessellDbServicesDbServicesServiceConnectivityComputesConnectivityPortAccessConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServicesDbServicesServiceConnectivityComputesConnectivity {
}

export function dataTessellDbServicesDbServicesServiceConnectivityComputesConnectivityToTerraform(struct?: DataTessellDbServicesDbServicesServiceConnectivityComputesConnectivity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServicesDbServicesServiceConnectivityComputesConnectivityToHclTerraform(struct?: DataTessellDbServicesDbServicesServiceConnectivityComputesConnectivity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServicesDbServicesServiceConnectivityComputesConnectivityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServicesDbServicesServiceConnectivityComputesConnectivity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServicesDbServicesServiceConnectivityComputesConnectivity | undefined) {
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
  private _portAccessConfig = new DataTessellDbServicesDbServicesServiceConnectivityComputesConnectivityPortAccessConfigList(this, "port_access_config", false);
  public get portAccessConfig() {
    return this._portAccessConfig;
  }
}

export class DataTessellDbServicesDbServicesServiceConnectivityComputesConnectivityList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServicesDbServicesServiceConnectivityComputesConnectivityOutputReference {
    return new DataTessellDbServicesDbServicesServiceConnectivityComputesConnectivityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServicesDbServicesServiceConnectivityConnectStrings {
}

export function dataTessellDbServicesDbServicesServiceConnectivityConnectStringsToTerraform(struct?: DataTessellDbServicesDbServicesServiceConnectivityConnectStrings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServicesDbServicesServiceConnectivityConnectStringsToHclTerraform(struct?: DataTessellDbServicesDbServicesServiceConnectivityConnectStrings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServicesDbServicesServiceConnectivityConnectStringsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServicesDbServicesServiceConnectivityConnectStrings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServicesDbServicesServiceConnectivityConnectStrings | undefined) {
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

export class DataTessellDbServicesDbServicesServiceConnectivityConnectStringsList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServicesDbServicesServiceConnectivityConnectStringsOutputReference {
    return new DataTessellDbServicesDbServicesServiceConnectivityConnectStringsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServicesDbServicesServiceConnectivityPrivateLink {
}

export function dataTessellDbServicesDbServicesServiceConnectivityPrivateLinkToTerraform(struct?: DataTessellDbServicesDbServicesServiceConnectivityPrivateLink): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServicesDbServicesServiceConnectivityPrivateLinkToHclTerraform(struct?: DataTessellDbServicesDbServicesServiceConnectivityPrivateLink): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServicesDbServicesServiceConnectivityPrivateLinkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServicesDbServicesServiceConnectivityPrivateLink | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServicesDbServicesServiceConnectivityPrivateLink | undefined) {
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

export class DataTessellDbServicesDbServicesServiceConnectivityPrivateLinkList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServicesDbServicesServiceConnectivityPrivateLinkOutputReference {
    return new DataTessellDbServicesDbServicesServiceConnectivityPrivateLinkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServicesDbServicesServiceConnectivityUpdateInProgressInfoComputesConnectivityPortAccessConfig {
}

export function dataTessellDbServicesDbServicesServiceConnectivityUpdateInProgressInfoComputesConnectivityPortAccessConfigToTerraform(struct?: DataTessellDbServicesDbServicesServiceConnectivityUpdateInProgressInfoComputesConnectivityPortAccessConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServicesDbServicesServiceConnectivityUpdateInProgressInfoComputesConnectivityPortAccessConfigToHclTerraform(struct?: DataTessellDbServicesDbServicesServiceConnectivityUpdateInProgressInfoComputesConnectivityPortAccessConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServicesDbServicesServiceConnectivityUpdateInProgressInfoComputesConnectivityPortAccessConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServicesDbServicesServiceConnectivityUpdateInProgressInfoComputesConnectivityPortAccessConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServicesDbServicesServiceConnectivityUpdateInProgressInfoComputesConnectivityPortAccessConfig | undefined) {
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

export class DataTessellDbServicesDbServicesServiceConnectivityUpdateInProgressInfoComputesConnectivityPortAccessConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServicesDbServicesServiceConnectivityUpdateInProgressInfoComputesConnectivityPortAccessConfigOutputReference {
    return new DataTessellDbServicesDbServicesServiceConnectivityUpdateInProgressInfoComputesConnectivityPortAccessConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServicesDbServicesServiceConnectivityUpdateInProgressInfoComputesConnectivity {
}

export function dataTessellDbServicesDbServicesServiceConnectivityUpdateInProgressInfoComputesConnectivityToTerraform(struct?: DataTessellDbServicesDbServicesServiceConnectivityUpdateInProgressInfoComputesConnectivity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServicesDbServicesServiceConnectivityUpdateInProgressInfoComputesConnectivityToHclTerraform(struct?: DataTessellDbServicesDbServicesServiceConnectivityUpdateInProgressInfoComputesConnectivity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServicesDbServicesServiceConnectivityUpdateInProgressInfoComputesConnectivityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServicesDbServicesServiceConnectivityUpdateInProgressInfoComputesConnectivity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServicesDbServicesServiceConnectivityUpdateInProgressInfoComputesConnectivity | undefined) {
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
  private _portAccessConfig = new DataTessellDbServicesDbServicesServiceConnectivityUpdateInProgressInfoComputesConnectivityPortAccessConfigList(this, "port_access_config", false);
  public get portAccessConfig() {
    return this._portAccessConfig;
  }
}

export class DataTessellDbServicesDbServicesServiceConnectivityUpdateInProgressInfoComputesConnectivityList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServicesDbServicesServiceConnectivityUpdateInProgressInfoComputesConnectivityOutputReference {
    return new DataTessellDbServicesDbServicesServiceConnectivityUpdateInProgressInfoComputesConnectivityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServicesDbServicesServiceConnectivityUpdateInProgressInfoPrivateLink {
}

export function dataTessellDbServicesDbServicesServiceConnectivityUpdateInProgressInfoPrivateLinkToTerraform(struct?: DataTessellDbServicesDbServicesServiceConnectivityUpdateInProgressInfoPrivateLink): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServicesDbServicesServiceConnectivityUpdateInProgressInfoPrivateLinkToHclTerraform(struct?: DataTessellDbServicesDbServicesServiceConnectivityUpdateInProgressInfoPrivateLink): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServicesDbServicesServiceConnectivityUpdateInProgressInfoPrivateLinkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServicesDbServicesServiceConnectivityUpdateInProgressInfoPrivateLink | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServicesDbServicesServiceConnectivityUpdateInProgressInfoPrivateLink | undefined) {
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

export class DataTessellDbServicesDbServicesServiceConnectivityUpdateInProgressInfoPrivateLinkList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServicesDbServicesServiceConnectivityUpdateInProgressInfoPrivateLinkOutputReference {
    return new DataTessellDbServicesDbServicesServiceConnectivityUpdateInProgressInfoPrivateLinkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServicesDbServicesServiceConnectivityUpdateInProgressInfo {
}

export function dataTessellDbServicesDbServicesServiceConnectivityUpdateInProgressInfoToTerraform(struct?: DataTessellDbServicesDbServicesServiceConnectivityUpdateInProgressInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServicesDbServicesServiceConnectivityUpdateInProgressInfoToHclTerraform(struct?: DataTessellDbServicesDbServicesServiceConnectivityUpdateInProgressInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServicesDbServicesServiceConnectivityUpdateInProgressInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServicesDbServicesServiceConnectivityUpdateInProgressInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServicesDbServicesServiceConnectivityUpdateInProgressInfo | undefined) {
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
  private _computesConnectivity = new DataTessellDbServicesDbServicesServiceConnectivityUpdateInProgressInfoComputesConnectivityList(this, "computes_connectivity", false);
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
  private _privateLink = new DataTessellDbServicesDbServicesServiceConnectivityUpdateInProgressInfoPrivateLinkList(this, "private_link", false);
  public get privateLink() {
    return this._privateLink;
  }
}

export class DataTessellDbServicesDbServicesServiceConnectivityUpdateInProgressInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServicesDbServicesServiceConnectivityUpdateInProgressInfoOutputReference {
    return new DataTessellDbServicesDbServicesServiceConnectivityUpdateInProgressInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServicesDbServicesServiceConnectivity {
}

export function dataTessellDbServicesDbServicesServiceConnectivityToTerraform(struct?: DataTessellDbServicesDbServicesServiceConnectivity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServicesDbServicesServiceConnectivityToHclTerraform(struct?: DataTessellDbServicesDbServicesServiceConnectivity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServicesDbServicesServiceConnectivityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServicesDbServicesServiceConnectivity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServicesDbServicesServiceConnectivity | undefined) {
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
  private _computesConnectivity = new DataTessellDbServicesDbServicesServiceConnectivityComputesConnectivityList(this, "computes_connectivity", false);
  public get computesConnectivity() {
    return this._computesConnectivity;
  }

  // connect_strings - computed: true, optional: false, required: false
  private _connectStrings = new DataTessellDbServicesDbServicesServiceConnectivityConnectStringsList(this, "connect_strings", false);
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
  private _privateLink = new DataTessellDbServicesDbServicesServiceConnectivityPrivateLinkList(this, "private_link", false);
  public get privateLink() {
    return this._privateLink;
  }

  // service_port - computed: true, optional: false, required: false
  public get servicePort() {
    return this.getNumberAttribute('service_port');
  }

  // update_in_progress_info - computed: true, optional: false, required: false
  private _updateInProgressInfo = new DataTessellDbServicesDbServicesServiceConnectivityUpdateInProgressInfoList(this, "update_in_progress_info", false);
  public get updateInProgressInfo() {
    return this._updateInProgressInfo;
  }
}

export class DataTessellDbServicesDbServicesServiceConnectivityList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServicesDbServicesServiceConnectivityOutputReference {
    return new DataTessellDbServicesDbServicesServiceConnectivityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServicesDbServicesSharedWithUsers {
}

export function dataTessellDbServicesDbServicesSharedWithUsersToTerraform(struct?: DataTessellDbServicesDbServicesSharedWithUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServicesDbServicesSharedWithUsersToHclTerraform(struct?: DataTessellDbServicesDbServicesSharedWithUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServicesDbServicesSharedWithUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServicesDbServicesSharedWithUsers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServicesDbServicesSharedWithUsers | undefined) {
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

export class DataTessellDbServicesDbServicesSharedWithUsersList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServicesDbServicesSharedWithUsersOutputReference {
    return new DataTessellDbServicesDbServicesSharedWithUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServicesDbServicesSharedWith {
}

export function dataTessellDbServicesDbServicesSharedWithToTerraform(struct?: DataTessellDbServicesDbServicesSharedWith): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServicesDbServicesSharedWithToHclTerraform(struct?: DataTessellDbServicesDbServicesSharedWith): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServicesDbServicesSharedWithOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServicesDbServicesSharedWith | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServicesDbServicesSharedWith | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // users - computed: true, optional: false, required: false
  private _users = new DataTessellDbServicesDbServicesSharedWithUsersList(this, "users", false);
  public get users() {
    return this._users;
  }
}

export class DataTessellDbServicesDbServicesSharedWithList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServicesDbServicesSharedWithOutputReference {
    return new DataTessellDbServicesDbServicesSharedWithOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServicesDbServicesTags {
}

export function dataTessellDbServicesDbServicesTagsToTerraform(struct?: DataTessellDbServicesDbServicesTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServicesDbServicesTagsToHclTerraform(struct?: DataTessellDbServicesDbServicesTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServicesDbServicesTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServicesDbServicesTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServicesDbServicesTags | undefined) {
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

export class DataTessellDbServicesDbServicesTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServicesDbServicesTagsOutputReference {
    return new DataTessellDbServicesDbServicesTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServicesDbServicesUpcomingScheduledActionsDelete {
}

export function dataTessellDbServicesDbServicesUpcomingScheduledActionsDeleteToTerraform(struct?: DataTessellDbServicesDbServicesUpcomingScheduledActionsDelete): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServicesDbServicesUpcomingScheduledActionsDeleteToHclTerraform(struct?: DataTessellDbServicesDbServicesUpcomingScheduledActionsDelete): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServicesDbServicesUpcomingScheduledActionsDeleteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServicesDbServicesUpcomingScheduledActionsDelete | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServicesDbServicesUpcomingScheduledActionsDelete | undefined) {
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

export class DataTessellDbServicesDbServicesUpcomingScheduledActionsDeleteList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServicesDbServicesUpcomingScheduledActionsDeleteOutputReference {
    return new DataTessellDbServicesDbServicesUpcomingScheduledActionsDeleteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServicesDbServicesUpcomingScheduledActionsPatch {
}

export function dataTessellDbServicesDbServicesUpcomingScheduledActionsPatchToTerraform(struct?: DataTessellDbServicesDbServicesUpcomingScheduledActionsPatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServicesDbServicesUpcomingScheduledActionsPatchToHclTerraform(struct?: DataTessellDbServicesDbServicesUpcomingScheduledActionsPatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServicesDbServicesUpcomingScheduledActionsPatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServicesDbServicesUpcomingScheduledActionsPatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServicesDbServicesUpcomingScheduledActionsPatch | undefined) {
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

export class DataTessellDbServicesDbServicesUpcomingScheduledActionsPatchList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServicesDbServicesUpcomingScheduledActionsPatchOutputReference {
    return new DataTessellDbServicesDbServicesUpcomingScheduledActionsPatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServicesDbServicesUpcomingScheduledActionsStartStop {
}

export function dataTessellDbServicesDbServicesUpcomingScheduledActionsStartStopToTerraform(struct?: DataTessellDbServicesDbServicesUpcomingScheduledActionsStartStop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServicesDbServicesUpcomingScheduledActionsStartStopToHclTerraform(struct?: DataTessellDbServicesDbServicesUpcomingScheduledActionsStartStop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServicesDbServicesUpcomingScheduledActionsStartStopOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServicesDbServicesUpcomingScheduledActionsStartStop | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServicesDbServicesUpcomingScheduledActionsStartStop | undefined) {
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

export class DataTessellDbServicesDbServicesUpcomingScheduledActionsStartStopList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServicesDbServicesUpcomingScheduledActionsStartStopOutputReference {
    return new DataTessellDbServicesDbServicesUpcomingScheduledActionsStartStopOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServicesDbServicesUpcomingScheduledActions {
}

export function dataTessellDbServicesDbServicesUpcomingScheduledActionsToTerraform(struct?: DataTessellDbServicesDbServicesUpcomingScheduledActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServicesDbServicesUpcomingScheduledActionsToHclTerraform(struct?: DataTessellDbServicesDbServicesUpcomingScheduledActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServicesDbServicesUpcomingScheduledActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServicesDbServicesUpcomingScheduledActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServicesDbServicesUpcomingScheduledActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // delete - computed: true, optional: false, required: false
  private _delete = new DataTessellDbServicesDbServicesUpcomingScheduledActionsDeleteList(this, "delete", false);
  public get delete() {
    return this._delete;
  }

  // patch - computed: true, optional: false, required: false
  private _patch = new DataTessellDbServicesDbServicesUpcomingScheduledActionsPatchList(this, "patch", false);
  public get patch() {
    return this._patch;
  }

  // start_stop - computed: true, optional: false, required: false
  private _startStop = new DataTessellDbServicesDbServicesUpcomingScheduledActionsStartStopList(this, "start_stop", false);
  public get startStop() {
    return this._startStop;
  }
}

export class DataTessellDbServicesDbServicesUpcomingScheduledActionsList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServicesDbServicesUpcomingScheduledActionsOutputReference {
    return new DataTessellDbServicesDbServicesUpcomingScheduledActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServicesDbServicesUpdatesInProgress {
}

export function dataTessellDbServicesDbServicesUpdatesInProgressToTerraform(struct?: DataTessellDbServicesDbServicesUpdatesInProgress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServicesDbServicesUpdatesInProgressToHclTerraform(struct?: DataTessellDbServicesDbServicesUpdatesInProgress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServicesDbServicesUpdatesInProgressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServicesDbServicesUpdatesInProgress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServicesDbServicesUpdatesInProgress | undefined) {
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

export class DataTessellDbServicesDbServicesUpdatesInProgressList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServicesDbServicesUpdatesInProgressOutputReference {
    return new DataTessellDbServicesDbServicesUpdatesInProgressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellDbServicesDbServices {
}

export function dataTessellDbServicesDbServicesToTerraform(struct?: DataTessellDbServicesDbServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellDbServicesDbServicesToHclTerraform(struct?: DataTessellDbServicesDbServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellDbServicesDbServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellDbServicesDbServices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellDbServicesDbServices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_minor_version_update - computed: true, optional: false, required: false
  public get autoMinorVersionUpdate() {
    return this.getBooleanAttribute('auto_minor_version_update');
  }

  // availability_machine_id - computed: true, optional: false, required: false
  public get availabilityMachineId() {
    return this.getStringAttribute('availability_machine_id');
  }

  // cloned_from_info - computed: true, optional: false, required: false
  private _clonedFromInfo = new DataTessellDbServicesDbServicesClonedFromInfoList(this, "cloned_from_info", false);
  public get clonedFromInfo() {
    return this._clonedFromInfo;
  }

  // context_info - computed: true, optional: false, required: false
  private _contextInfo = new DataTessellDbServicesDbServicesContextInfoList(this, "context_info", false);
  public get contextInfo() {
    return this._contextInfo;
  }

  // databases - computed: true, optional: false, required: false
  private _databases = new DataTessellDbServicesDbServicesDatabasesList(this, "databases", false);
  public get databases() {
    return this._databases;
  }

  // date_created - computed: true, optional: false, required: false
  public get dateCreated() {
    return this.getStringAttribute('date_created');
  }

  // deletion_config - computed: true, optional: false, required: false
  private _deletionConfig = new DataTessellDbServicesDbServicesDeletionConfigList(this, "deletion_config", false);
  public get deletionConfig() {
    return this._deletionConfig;
  }

  // deletion_schedule - computed: true, optional: false, required: false
  private _deletionSchedule = new DataTessellDbServicesDbServicesDeletionScheduleList(this, "deletion_schedule", false);
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
  private _engineConfiguration = new DataTessellDbServicesDbServicesEngineConfigurationList(this, "engine_configuration", false);
  public get engineConfiguration() {
    return this._engineConfiguration;
  }

  // engine_type - computed: true, optional: false, required: false
  public get engineType() {
    return this.getStringAttribute('engine_type');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // infrastructure - computed: true, optional: false, required: false
  private _infrastructure = new DataTessellDbServicesDbServicesInfrastructureList(this, "infrastructure", false);
  public get infrastructure() {
    return this._infrastructure;
  }

  // instances - computed: true, optional: false, required: false
  private _instances = new DataTessellDbServicesDbServicesInstancesList(this, "instances", false);
  public get instances() {
    return this._instances;
  }

  // integrations_config - computed: true, optional: false, required: false
  private _integrationsConfig = new DataTessellDbServicesDbServicesIntegrationsConfigList(this, "integrations_config", false);
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
  private _maintenanceWindow = new DataTessellDbServicesDbServicesMaintenanceWindowList(this, "maintenance_window", false);
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
  private _refreshInfo = new DataTessellDbServicesDbServicesRefreshInfoList(this, "refresh_info", false);
  public get refreshInfo() {
    return this._refreshInfo;
  }

  // service_connectivity - computed: true, optional: false, required: false
  private _serviceConnectivity = new DataTessellDbServicesDbServicesServiceConnectivityList(this, "service_connectivity", false);
  public get serviceConnectivity() {
    return this._serviceConnectivity;
  }

  // shared_with - computed: true, optional: false, required: false
  private _sharedWith = new DataTessellDbServicesDbServicesSharedWithList(this, "shared_with", false);
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
  private _tags = new DataTessellDbServicesDbServicesTagsList(this, "tags", false);
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
  private _upcomingScheduledActions = new DataTessellDbServicesDbServicesUpcomingScheduledActionsList(this, "upcoming_scheduled_actions", false);
  public get upcomingScheduledActions() {
    return this._upcomingScheduledActions;
  }

  // updates_in_progress - computed: true, optional: false, required: false
  private _updatesInProgress = new DataTessellDbServicesDbServicesUpdatesInProgressList(this, "updates_in_progress", false);
  public get updatesInProgress() {
    return this._updatesInProgress;
  }
}

export class DataTessellDbServicesDbServicesList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellDbServicesDbServicesOutputReference {
    return new DataTessellDbServicesDbServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.27/docs/data-sources/db_services tessell_db_services}
*/
export class DataTessellDbServices extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tessell_db_services";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTessellDbServices resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTessellDbServices to import
  * @param importFromId The id of the existing DataTessellDbServices that should be imported. Refer to the {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.27/docs/data-sources/db_services#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTessellDbServices to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tessell_db_services", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.27/docs/data-sources/db_services tessell_db_services} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTessellDbServicesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTessellDbServicesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tessell_db_services',
      terraformGeneratorMetadata: {
        providerName: 'tessell',
        providerVersion: '0.0.27',
        providerVersionConstraint: '0.0.27'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clonedFromAvailabilityMachineId = config.clonedFromAvailabilityMachineId;
    this._clonedFromServiceId = config.clonedFromServiceId;
    this._engineTypes = config.engineTypes;
    this._id = config.id;
    this._loadAcls = config.loadAcls;
    this._loadDatabases = config.loadDatabases;
    this._loadInstances = config.loadInstances;
    this._name = config.name;
    this._owners = config.owners;
    this._statuses = config.statuses;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloned_from_availability_machine_id - computed: false, optional: true, required: false
  private _clonedFromAvailabilityMachineId?: string; 
  public get clonedFromAvailabilityMachineId() {
    return this.getStringAttribute('cloned_from_availability_machine_id');
  }
  public set clonedFromAvailabilityMachineId(value: string) {
    this._clonedFromAvailabilityMachineId = value;
  }
  public resetClonedFromAvailabilityMachineId() {
    this._clonedFromAvailabilityMachineId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clonedFromAvailabilityMachineIdInput() {
    return this._clonedFromAvailabilityMachineId;
  }

  // cloned_from_service_id - computed: false, optional: true, required: false
  private _clonedFromServiceId?: string; 
  public get clonedFromServiceId() {
    return this.getStringAttribute('cloned_from_service_id');
  }
  public set clonedFromServiceId(value: string) {
    this._clonedFromServiceId = value;
  }
  public resetClonedFromServiceId() {
    this._clonedFromServiceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clonedFromServiceIdInput() {
    return this._clonedFromServiceId;
  }

  // db_services - computed: true, optional: false, required: false
  private _dbServices = new DataTessellDbServicesDbServicesList(this, "db_services", false);
  public get dbServices() {
    return this._dbServices;
  }

  // engine_types - computed: false, optional: true, required: false
  private _engineTypes?: string[]; 
  public get engineTypes() {
    return this.getListAttribute('engine_types');
  }
  public set engineTypes(value: string[]) {
    this._engineTypes = value;
  }
  public resetEngineTypes() {
    this._engineTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineTypesInput() {
    return this._engineTypes;
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

  // load_acls - computed: false, optional: true, required: false
  private _loadAcls?: boolean | cdktf.IResolvable; 
  public get loadAcls() {
    return this.getBooleanAttribute('load_acls');
  }
  public set loadAcls(value: boolean | cdktf.IResolvable) {
    this._loadAcls = value;
  }
  public resetLoadAcls() {
    this._loadAcls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadAclsInput() {
    return this._loadAcls;
  }

  // load_databases - computed: false, optional: true, required: false
  private _loadDatabases?: boolean | cdktf.IResolvable; 
  public get loadDatabases() {
    return this.getBooleanAttribute('load_databases');
  }
  public set loadDatabases(value: boolean | cdktf.IResolvable) {
    this._loadDatabases = value;
  }
  public resetLoadDatabases() {
    this._loadDatabases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadDatabasesInput() {
    return this._loadDatabases;
  }

  // load_instances - computed: false, optional: true, required: false
  private _loadInstances?: boolean | cdktf.IResolvable; 
  public get loadInstances() {
    return this.getBooleanAttribute('load_instances');
  }
  public set loadInstances(value: boolean | cdktf.IResolvable) {
    this._loadInstances = value;
  }
  public resetLoadInstances() {
    this._loadInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadInstancesInput() {
    return this._loadInstances;
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

  // owners - computed: false, optional: true, required: false
  private _owners?: string[]; 
  public get owners() {
    return this.getListAttribute('owners');
  }
  public set owners(value: string[]) {
    this._owners = value;
  }
  public resetOwners() {
    this._owners = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownersInput() {
    return this._owners;
  }

  // statuses - computed: false, optional: true, required: false
  private _statuses?: string[]; 
  public get statuses() {
    return this.getListAttribute('statuses');
  }
  public set statuses(value: string[]) {
    this._statuses = value;
  }
  public resetStatuses() {
    this._statuses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusesInput() {
    return this._statuses;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloned_from_availability_machine_id: cdktf.stringToTerraform(this._clonedFromAvailabilityMachineId),
      cloned_from_service_id: cdktf.stringToTerraform(this._clonedFromServiceId),
      engine_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._engineTypes),
      id: cdktf.stringToTerraform(this._id),
      load_acls: cdktf.booleanToTerraform(this._loadAcls),
      load_databases: cdktf.booleanToTerraform(this._loadDatabases),
      load_instances: cdktf.booleanToTerraform(this._loadInstances),
      name: cdktf.stringToTerraform(this._name),
      owners: cdktf.listMapper(cdktf.stringToTerraform, false)(this._owners),
      statuses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._statuses),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloned_from_availability_machine_id: {
        value: cdktf.stringToHclTerraform(this._clonedFromAvailabilityMachineId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloned_from_service_id: {
        value: cdktf.stringToHclTerraform(this._clonedFromServiceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      engine_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._engineTypes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      load_acls: {
        value: cdktf.booleanToHclTerraform(this._loadAcls),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      load_databases: {
        value: cdktf.booleanToHclTerraform(this._loadDatabases),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      load_instances: {
        value: cdktf.booleanToHclTerraform(this._loadInstances),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owners: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._owners),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      statuses: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._statuses),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
