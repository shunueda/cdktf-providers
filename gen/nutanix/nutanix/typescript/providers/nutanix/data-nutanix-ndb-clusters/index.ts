// https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/ndb_clusters
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNutanixNdbClustersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/ndb_clusters#id DataNutanixNdbClusters#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataNutanixNdbClustersClustersEntityCountsEngineCountsMariadbDatabaseProfiles {
}

export function dataNutanixNdbClustersClustersEntityCountsEngineCountsMariadbDatabaseProfilesToTerraform(struct?: DataNutanixNdbClustersClustersEntityCountsEngineCountsMariadbDatabaseProfiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbClustersClustersEntityCountsEngineCountsMariadbDatabaseProfilesToHclTerraform(struct?: DataNutanixNdbClustersClustersEntityCountsEngineCountsMariadbDatabaseProfiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbClustersClustersEntityCountsEngineCountsMariadbDatabaseProfilesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbClustersClustersEntityCountsEngineCountsMariadbDatabaseProfiles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbClustersClustersEntityCountsEngineCountsMariadbDatabaseProfiles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compute - computed: true, optional: false, required: false
  public get compute() {
    return this.getNumberAttribute('compute');
  }

  // database_parameter - computed: true, optional: false, required: false
  public get databaseParameter() {
    return this.getNumberAttribute('database_parameter');
  }

  // network - computed: true, optional: false, required: false
  public get network() {
    return this.getNumberAttribute('network');
  }

  // software - computed: true, optional: false, required: false
  public get softwareAttribute() {
    return this.getNumberAttribute('software');
  }

  // storage - computed: true, optional: false, required: false
  public get storage() {
    return this.getNumberAttribute('storage');
  }

  // windows_domain - computed: true, optional: false, required: false
  public get windowsDomain() {
    return this.getNumberAttribute('windows_domain');
  }
}

export class DataNutanixNdbClustersClustersEntityCountsEngineCountsMariadbDatabaseProfilesList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbClustersClustersEntityCountsEngineCountsMariadbDatabaseProfilesOutputReference {
    return new DataNutanixNdbClustersClustersEntityCountsEngineCountsMariadbDatabaseProfilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbClustersClustersEntityCountsEngineCountsMariadbDatabase {
}

export function dataNutanixNdbClustersClustersEntityCountsEngineCountsMariadbDatabaseToTerraform(struct?: DataNutanixNdbClustersClustersEntityCountsEngineCountsMariadbDatabase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbClustersClustersEntityCountsEngineCountsMariadbDatabaseToHclTerraform(struct?: DataNutanixNdbClustersClustersEntityCountsEngineCountsMariadbDatabase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbClustersClustersEntityCountsEngineCountsMariadbDatabaseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbClustersClustersEntityCountsEngineCountsMariadbDatabase | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbClustersClustersEntityCountsEngineCountsMariadbDatabase | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // profiles - computed: true, optional: false, required: false
  private _profiles = new DataNutanixNdbClustersClustersEntityCountsEngineCountsMariadbDatabaseProfilesList(this, "profiles", false);
  public get profiles() {
    return this._profiles;
  }

  // time_machines - computed: true, optional: false, required: false
  public get timeMachines() {
    return this.getNumberAttribute('time_machines');
  }
}

export class DataNutanixNdbClustersClustersEntityCountsEngineCountsMariadbDatabaseList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbClustersClustersEntityCountsEngineCountsMariadbDatabaseOutputReference {
    return new DataNutanixNdbClustersClustersEntityCountsEngineCountsMariadbDatabaseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbClustersClustersEntityCountsEngineCountsMongodbDatabaseProfiles {
}

export function dataNutanixNdbClustersClustersEntityCountsEngineCountsMongodbDatabaseProfilesToTerraform(struct?: DataNutanixNdbClustersClustersEntityCountsEngineCountsMongodbDatabaseProfiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbClustersClustersEntityCountsEngineCountsMongodbDatabaseProfilesToHclTerraform(struct?: DataNutanixNdbClustersClustersEntityCountsEngineCountsMongodbDatabaseProfiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbClustersClustersEntityCountsEngineCountsMongodbDatabaseProfilesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbClustersClustersEntityCountsEngineCountsMongodbDatabaseProfiles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbClustersClustersEntityCountsEngineCountsMongodbDatabaseProfiles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compute - computed: true, optional: false, required: false
  public get compute() {
    return this.getNumberAttribute('compute');
  }

  // database_parameter - computed: true, optional: false, required: false
  public get databaseParameter() {
    return this.getNumberAttribute('database_parameter');
  }

  // network - computed: true, optional: false, required: false
  public get network() {
    return this.getNumberAttribute('network');
  }

  // software - computed: true, optional: false, required: false
  public get softwareAttribute() {
    return this.getNumberAttribute('software');
  }

  // storage - computed: true, optional: false, required: false
  public get storage() {
    return this.getNumberAttribute('storage');
  }

  // windows_domain - computed: true, optional: false, required: false
  public get windowsDomain() {
    return this.getNumberAttribute('windows_domain');
  }
}

export class DataNutanixNdbClustersClustersEntityCountsEngineCountsMongodbDatabaseProfilesList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbClustersClustersEntityCountsEngineCountsMongodbDatabaseProfilesOutputReference {
    return new DataNutanixNdbClustersClustersEntityCountsEngineCountsMongodbDatabaseProfilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbClustersClustersEntityCountsEngineCountsMongodbDatabase {
}

export function dataNutanixNdbClustersClustersEntityCountsEngineCountsMongodbDatabaseToTerraform(struct?: DataNutanixNdbClustersClustersEntityCountsEngineCountsMongodbDatabase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbClustersClustersEntityCountsEngineCountsMongodbDatabaseToHclTerraform(struct?: DataNutanixNdbClustersClustersEntityCountsEngineCountsMongodbDatabase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbClustersClustersEntityCountsEngineCountsMongodbDatabaseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbClustersClustersEntityCountsEngineCountsMongodbDatabase | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbClustersClustersEntityCountsEngineCountsMongodbDatabase | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // profiles - computed: true, optional: false, required: false
  private _profiles = new DataNutanixNdbClustersClustersEntityCountsEngineCountsMongodbDatabaseProfilesList(this, "profiles", false);
  public get profiles() {
    return this._profiles;
  }

  // time_machines - computed: true, optional: false, required: false
  public get timeMachines() {
    return this.getNumberAttribute('time_machines');
  }
}

export class DataNutanixNdbClustersClustersEntityCountsEngineCountsMongodbDatabaseList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbClustersClustersEntityCountsEngineCountsMongodbDatabaseOutputReference {
    return new DataNutanixNdbClustersClustersEntityCountsEngineCountsMongodbDatabaseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbClustersClustersEntityCountsEngineCountsMysqlDatabaseProfiles {
}

export function dataNutanixNdbClustersClustersEntityCountsEngineCountsMysqlDatabaseProfilesToTerraform(struct?: DataNutanixNdbClustersClustersEntityCountsEngineCountsMysqlDatabaseProfiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbClustersClustersEntityCountsEngineCountsMysqlDatabaseProfilesToHclTerraform(struct?: DataNutanixNdbClustersClustersEntityCountsEngineCountsMysqlDatabaseProfiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbClustersClustersEntityCountsEngineCountsMysqlDatabaseProfilesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbClustersClustersEntityCountsEngineCountsMysqlDatabaseProfiles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbClustersClustersEntityCountsEngineCountsMysqlDatabaseProfiles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compute - computed: true, optional: false, required: false
  public get compute() {
    return this.getNumberAttribute('compute');
  }

  // database_parameter - computed: true, optional: false, required: false
  public get databaseParameter() {
    return this.getNumberAttribute('database_parameter');
  }

  // network - computed: true, optional: false, required: false
  public get network() {
    return this.getNumberAttribute('network');
  }

  // software - computed: true, optional: false, required: false
  public get softwareAttribute() {
    return this.getNumberAttribute('software');
  }

  // storage - computed: true, optional: false, required: false
  public get storage() {
    return this.getNumberAttribute('storage');
  }

  // windows_domain - computed: true, optional: false, required: false
  public get windowsDomain() {
    return this.getNumberAttribute('windows_domain');
  }
}

export class DataNutanixNdbClustersClustersEntityCountsEngineCountsMysqlDatabaseProfilesList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbClustersClustersEntityCountsEngineCountsMysqlDatabaseProfilesOutputReference {
    return new DataNutanixNdbClustersClustersEntityCountsEngineCountsMysqlDatabaseProfilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbClustersClustersEntityCountsEngineCountsMysqlDatabase {
}

export function dataNutanixNdbClustersClustersEntityCountsEngineCountsMysqlDatabaseToTerraform(struct?: DataNutanixNdbClustersClustersEntityCountsEngineCountsMysqlDatabase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbClustersClustersEntityCountsEngineCountsMysqlDatabaseToHclTerraform(struct?: DataNutanixNdbClustersClustersEntityCountsEngineCountsMysqlDatabase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbClustersClustersEntityCountsEngineCountsMysqlDatabaseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbClustersClustersEntityCountsEngineCountsMysqlDatabase | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbClustersClustersEntityCountsEngineCountsMysqlDatabase | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // profiles - computed: true, optional: false, required: false
  private _profiles = new DataNutanixNdbClustersClustersEntityCountsEngineCountsMysqlDatabaseProfilesList(this, "profiles", false);
  public get profiles() {
    return this._profiles;
  }

  // time_machines - computed: true, optional: false, required: false
  public get timeMachines() {
    return this.getNumberAttribute('time_machines');
  }
}

export class DataNutanixNdbClustersClustersEntityCountsEngineCountsMysqlDatabaseList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbClustersClustersEntityCountsEngineCountsMysqlDatabaseOutputReference {
    return new DataNutanixNdbClustersClustersEntityCountsEngineCountsMysqlDatabaseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbClustersClustersEntityCountsEngineCountsOracleDatabaseProfiles {
}

export function dataNutanixNdbClustersClustersEntityCountsEngineCountsOracleDatabaseProfilesToTerraform(struct?: DataNutanixNdbClustersClustersEntityCountsEngineCountsOracleDatabaseProfiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbClustersClustersEntityCountsEngineCountsOracleDatabaseProfilesToHclTerraform(struct?: DataNutanixNdbClustersClustersEntityCountsEngineCountsOracleDatabaseProfiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbClustersClustersEntityCountsEngineCountsOracleDatabaseProfilesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbClustersClustersEntityCountsEngineCountsOracleDatabaseProfiles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbClustersClustersEntityCountsEngineCountsOracleDatabaseProfiles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compute - computed: true, optional: false, required: false
  public get compute() {
    return this.getNumberAttribute('compute');
  }

  // database_parameter - computed: true, optional: false, required: false
  public get databaseParameter() {
    return this.getNumberAttribute('database_parameter');
  }

  // network - computed: true, optional: false, required: false
  public get network() {
    return this.getNumberAttribute('network');
  }

  // software - computed: true, optional: false, required: false
  public get softwareAttribute() {
    return this.getNumberAttribute('software');
  }

  // storage - computed: true, optional: false, required: false
  public get storage() {
    return this.getNumberAttribute('storage');
  }

  // windows_domain - computed: true, optional: false, required: false
  public get windowsDomain() {
    return this.getNumberAttribute('windows_domain');
  }
}

export class DataNutanixNdbClustersClustersEntityCountsEngineCountsOracleDatabaseProfilesList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbClustersClustersEntityCountsEngineCountsOracleDatabaseProfilesOutputReference {
    return new DataNutanixNdbClustersClustersEntityCountsEngineCountsOracleDatabaseProfilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbClustersClustersEntityCountsEngineCountsOracleDatabase {
}

export function dataNutanixNdbClustersClustersEntityCountsEngineCountsOracleDatabaseToTerraform(struct?: DataNutanixNdbClustersClustersEntityCountsEngineCountsOracleDatabase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbClustersClustersEntityCountsEngineCountsOracleDatabaseToHclTerraform(struct?: DataNutanixNdbClustersClustersEntityCountsEngineCountsOracleDatabase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbClustersClustersEntityCountsEngineCountsOracleDatabaseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbClustersClustersEntityCountsEngineCountsOracleDatabase | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbClustersClustersEntityCountsEngineCountsOracleDatabase | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // profiles - computed: true, optional: false, required: false
  private _profiles = new DataNutanixNdbClustersClustersEntityCountsEngineCountsOracleDatabaseProfilesList(this, "profiles", false);
  public get profiles() {
    return this._profiles;
  }

  // time_machines - computed: true, optional: false, required: false
  public get timeMachines() {
    return this.getNumberAttribute('time_machines');
  }
}

export class DataNutanixNdbClustersClustersEntityCountsEngineCountsOracleDatabaseList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbClustersClustersEntityCountsEngineCountsOracleDatabaseOutputReference {
    return new DataNutanixNdbClustersClustersEntityCountsEngineCountsOracleDatabaseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbClustersClustersEntityCountsEngineCountsPostgresDatabaseProfiles {
}

export function dataNutanixNdbClustersClustersEntityCountsEngineCountsPostgresDatabaseProfilesToTerraform(struct?: DataNutanixNdbClustersClustersEntityCountsEngineCountsPostgresDatabaseProfiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbClustersClustersEntityCountsEngineCountsPostgresDatabaseProfilesToHclTerraform(struct?: DataNutanixNdbClustersClustersEntityCountsEngineCountsPostgresDatabaseProfiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbClustersClustersEntityCountsEngineCountsPostgresDatabaseProfilesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbClustersClustersEntityCountsEngineCountsPostgresDatabaseProfiles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbClustersClustersEntityCountsEngineCountsPostgresDatabaseProfiles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compute - computed: true, optional: false, required: false
  public get compute() {
    return this.getNumberAttribute('compute');
  }

  // database_parameter - computed: true, optional: false, required: false
  public get databaseParameter() {
    return this.getNumberAttribute('database_parameter');
  }

  // network - computed: true, optional: false, required: false
  public get network() {
    return this.getNumberAttribute('network');
  }

  // software - computed: true, optional: false, required: false
  public get softwareAttribute() {
    return this.getNumberAttribute('software');
  }

  // storage - computed: true, optional: false, required: false
  public get storage() {
    return this.getNumberAttribute('storage');
  }

  // windows_domain - computed: true, optional: false, required: false
  public get windowsDomain() {
    return this.getNumberAttribute('windows_domain');
  }
}

export class DataNutanixNdbClustersClustersEntityCountsEngineCountsPostgresDatabaseProfilesList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbClustersClustersEntityCountsEngineCountsPostgresDatabaseProfilesOutputReference {
    return new DataNutanixNdbClustersClustersEntityCountsEngineCountsPostgresDatabaseProfilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbClustersClustersEntityCountsEngineCountsPostgresDatabase {
}

export function dataNutanixNdbClustersClustersEntityCountsEngineCountsPostgresDatabaseToTerraform(struct?: DataNutanixNdbClustersClustersEntityCountsEngineCountsPostgresDatabase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbClustersClustersEntityCountsEngineCountsPostgresDatabaseToHclTerraform(struct?: DataNutanixNdbClustersClustersEntityCountsEngineCountsPostgresDatabase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbClustersClustersEntityCountsEngineCountsPostgresDatabaseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbClustersClustersEntityCountsEngineCountsPostgresDatabase | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbClustersClustersEntityCountsEngineCountsPostgresDatabase | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // profiles - computed: true, optional: false, required: false
  private _profiles = new DataNutanixNdbClustersClustersEntityCountsEngineCountsPostgresDatabaseProfilesList(this, "profiles", false);
  public get profiles() {
    return this._profiles;
  }

  // time_machines - computed: true, optional: false, required: false
  public get timeMachines() {
    return this.getNumberAttribute('time_machines');
  }
}

export class DataNutanixNdbClustersClustersEntityCountsEngineCountsPostgresDatabaseList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbClustersClustersEntityCountsEngineCountsPostgresDatabaseOutputReference {
    return new DataNutanixNdbClustersClustersEntityCountsEngineCountsPostgresDatabaseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbClustersClustersEntityCountsEngineCountsSaphanaDatabaseProfiles {
}

export function dataNutanixNdbClustersClustersEntityCountsEngineCountsSaphanaDatabaseProfilesToTerraform(struct?: DataNutanixNdbClustersClustersEntityCountsEngineCountsSaphanaDatabaseProfiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbClustersClustersEntityCountsEngineCountsSaphanaDatabaseProfilesToHclTerraform(struct?: DataNutanixNdbClustersClustersEntityCountsEngineCountsSaphanaDatabaseProfiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbClustersClustersEntityCountsEngineCountsSaphanaDatabaseProfilesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbClustersClustersEntityCountsEngineCountsSaphanaDatabaseProfiles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbClustersClustersEntityCountsEngineCountsSaphanaDatabaseProfiles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compute - computed: true, optional: false, required: false
  public get compute() {
    return this.getNumberAttribute('compute');
  }

  // database_parameter - computed: true, optional: false, required: false
  public get databaseParameter() {
    return this.getNumberAttribute('database_parameter');
  }

  // network - computed: true, optional: false, required: false
  public get network() {
    return this.getNumberAttribute('network');
  }

  // software - computed: true, optional: false, required: false
  public get softwareAttribute() {
    return this.getNumberAttribute('software');
  }

  // storage - computed: true, optional: false, required: false
  public get storage() {
    return this.getNumberAttribute('storage');
  }

  // windows_domain - computed: true, optional: false, required: false
  public get windowsDomain() {
    return this.getNumberAttribute('windows_domain');
  }
}

export class DataNutanixNdbClustersClustersEntityCountsEngineCountsSaphanaDatabaseProfilesList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbClustersClustersEntityCountsEngineCountsSaphanaDatabaseProfilesOutputReference {
    return new DataNutanixNdbClustersClustersEntityCountsEngineCountsSaphanaDatabaseProfilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbClustersClustersEntityCountsEngineCountsSaphanaDatabase {
}

export function dataNutanixNdbClustersClustersEntityCountsEngineCountsSaphanaDatabaseToTerraform(struct?: DataNutanixNdbClustersClustersEntityCountsEngineCountsSaphanaDatabase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbClustersClustersEntityCountsEngineCountsSaphanaDatabaseToHclTerraform(struct?: DataNutanixNdbClustersClustersEntityCountsEngineCountsSaphanaDatabase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbClustersClustersEntityCountsEngineCountsSaphanaDatabaseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbClustersClustersEntityCountsEngineCountsSaphanaDatabase | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbClustersClustersEntityCountsEngineCountsSaphanaDatabase | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // profiles - computed: true, optional: false, required: false
  private _profiles = new DataNutanixNdbClustersClustersEntityCountsEngineCountsSaphanaDatabaseProfilesList(this, "profiles", false);
  public get profiles() {
    return this._profiles;
  }

  // time_machines - computed: true, optional: false, required: false
  public get timeMachines() {
    return this.getNumberAttribute('time_machines');
  }
}

export class DataNutanixNdbClustersClustersEntityCountsEngineCountsSaphanaDatabaseList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbClustersClustersEntityCountsEngineCountsSaphanaDatabaseOutputReference {
    return new DataNutanixNdbClustersClustersEntityCountsEngineCountsSaphanaDatabaseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbClustersClustersEntityCountsEngineCountsSqlserverDatabaseProfiles {
}

export function dataNutanixNdbClustersClustersEntityCountsEngineCountsSqlserverDatabaseProfilesToTerraform(struct?: DataNutanixNdbClustersClustersEntityCountsEngineCountsSqlserverDatabaseProfiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbClustersClustersEntityCountsEngineCountsSqlserverDatabaseProfilesToHclTerraform(struct?: DataNutanixNdbClustersClustersEntityCountsEngineCountsSqlserverDatabaseProfiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbClustersClustersEntityCountsEngineCountsSqlserverDatabaseProfilesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbClustersClustersEntityCountsEngineCountsSqlserverDatabaseProfiles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbClustersClustersEntityCountsEngineCountsSqlserverDatabaseProfiles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compute - computed: true, optional: false, required: false
  public get compute() {
    return this.getNumberAttribute('compute');
  }

  // database_parameter - computed: true, optional: false, required: false
  public get databaseParameter() {
    return this.getNumberAttribute('database_parameter');
  }

  // network - computed: true, optional: false, required: false
  public get network() {
    return this.getNumberAttribute('network');
  }

  // software - computed: true, optional: false, required: false
  public get softwareAttribute() {
    return this.getNumberAttribute('software');
  }

  // storage - computed: true, optional: false, required: false
  public get storage() {
    return this.getNumberAttribute('storage');
  }

  // windows_domain - computed: true, optional: false, required: false
  public get windowsDomain() {
    return this.getNumberAttribute('windows_domain');
  }
}

export class DataNutanixNdbClustersClustersEntityCountsEngineCountsSqlserverDatabaseProfilesList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbClustersClustersEntityCountsEngineCountsSqlserverDatabaseProfilesOutputReference {
    return new DataNutanixNdbClustersClustersEntityCountsEngineCountsSqlserverDatabaseProfilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbClustersClustersEntityCountsEngineCountsSqlserverDatabase {
}

export function dataNutanixNdbClustersClustersEntityCountsEngineCountsSqlserverDatabaseToTerraform(struct?: DataNutanixNdbClustersClustersEntityCountsEngineCountsSqlserverDatabase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbClustersClustersEntityCountsEngineCountsSqlserverDatabaseToHclTerraform(struct?: DataNutanixNdbClustersClustersEntityCountsEngineCountsSqlserverDatabase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbClustersClustersEntityCountsEngineCountsSqlserverDatabaseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbClustersClustersEntityCountsEngineCountsSqlserverDatabase | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbClustersClustersEntityCountsEngineCountsSqlserverDatabase | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // profiles - computed: true, optional: false, required: false
  private _profiles = new DataNutanixNdbClustersClustersEntityCountsEngineCountsSqlserverDatabaseProfilesList(this, "profiles", false);
  public get profiles() {
    return this._profiles;
  }

  // time_machines - computed: true, optional: false, required: false
  public get timeMachines() {
    return this.getNumberAttribute('time_machines');
  }
}

export class DataNutanixNdbClustersClustersEntityCountsEngineCountsSqlserverDatabaseList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbClustersClustersEntityCountsEngineCountsSqlserverDatabaseOutputReference {
    return new DataNutanixNdbClustersClustersEntityCountsEngineCountsSqlserverDatabaseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbClustersClustersEntityCountsEngineCounts {
}

export function dataNutanixNdbClustersClustersEntityCountsEngineCountsToTerraform(struct?: DataNutanixNdbClustersClustersEntityCountsEngineCounts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbClustersClustersEntityCountsEngineCountsToHclTerraform(struct?: DataNutanixNdbClustersClustersEntityCountsEngineCounts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbClustersClustersEntityCountsEngineCountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbClustersClustersEntityCountsEngineCounts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbClustersClustersEntityCountsEngineCounts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mariadb_database - computed: true, optional: false, required: false
  private _mariadbDatabase = new DataNutanixNdbClustersClustersEntityCountsEngineCountsMariadbDatabaseList(this, "mariadb_database", false);
  public get mariadbDatabase() {
    return this._mariadbDatabase;
  }

  // mongodb_database - computed: true, optional: false, required: false
  private _mongodbDatabase = new DataNutanixNdbClustersClustersEntityCountsEngineCountsMongodbDatabaseList(this, "mongodb_database", false);
  public get mongodbDatabase() {
    return this._mongodbDatabase;
  }

  // mysql_database - computed: true, optional: false, required: false
  private _mysqlDatabase = new DataNutanixNdbClustersClustersEntityCountsEngineCountsMysqlDatabaseList(this, "mysql_database", false);
  public get mysqlDatabase() {
    return this._mysqlDatabase;
  }

  // oracle_database - computed: true, optional: false, required: false
  private _oracleDatabase = new DataNutanixNdbClustersClustersEntityCountsEngineCountsOracleDatabaseList(this, "oracle_database", false);
  public get oracleDatabase() {
    return this._oracleDatabase;
  }

  // postgres_database - computed: true, optional: false, required: false
  private _postgresDatabase = new DataNutanixNdbClustersClustersEntityCountsEngineCountsPostgresDatabaseList(this, "postgres_database", false);
  public get postgresDatabase() {
    return this._postgresDatabase;
  }

  // saphana_database - computed: true, optional: false, required: false
  private _saphanaDatabase = new DataNutanixNdbClustersClustersEntityCountsEngineCountsSaphanaDatabaseList(this, "saphana_database", false);
  public get saphanaDatabase() {
    return this._saphanaDatabase;
  }

  // sqlserver_database - computed: true, optional: false, required: false
  private _sqlserverDatabase = new DataNutanixNdbClustersClustersEntityCountsEngineCountsSqlserverDatabaseList(this, "sqlserver_database", false);
  public get sqlserverDatabase() {
    return this._sqlserverDatabase;
  }
}

export class DataNutanixNdbClustersClustersEntityCountsEngineCountsList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbClustersClustersEntityCountsEngineCountsOutputReference {
    return new DataNutanixNdbClustersClustersEntityCountsEngineCountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbClustersClustersEntityCounts {
}

export function dataNutanixNdbClustersClustersEntityCountsToTerraform(struct?: DataNutanixNdbClustersClustersEntityCounts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbClustersClustersEntityCountsToHclTerraform(struct?: DataNutanixNdbClustersClustersEntityCounts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbClustersClustersEntityCountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbClustersClustersEntityCounts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbClustersClustersEntityCounts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // db_servers - computed: true, optional: false, required: false
  public get dbServers() {
    return this.getNumberAttribute('db_servers');
  }

  // engine_counts - computed: true, optional: false, required: false
  private _engineCounts = new DataNutanixNdbClustersClustersEntityCountsEngineCountsList(this, "engine_counts", false);
  public get engineCounts() {
    return this._engineCounts;
  }
}

export class DataNutanixNdbClustersClustersEntityCountsList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbClustersClustersEntityCountsOutputReference {
    return new DataNutanixNdbClustersClustersEntityCountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbClustersClustersProperties {
}

export function dataNutanixNdbClustersClustersPropertiesToTerraform(struct?: DataNutanixNdbClustersClustersProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbClustersClustersPropertiesToHclTerraform(struct?: DataNutanixNdbClustersClustersProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbClustersClustersPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbClustersClustersProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbClustersClustersProperties | undefined) {
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // ref_id - computed: true, optional: false, required: false
  public get refId() {
    return this.getStringAttribute('ref_id');
  }

  // secure - computed: true, optional: false, required: false
  public get secure() {
    return this.getBooleanAttribute('secure');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataNutanixNdbClustersClustersPropertiesList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbClustersClustersPropertiesOutputReference {
    return new DataNutanixNdbClustersClustersPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbClustersClustersResourceConfig {
}

export function dataNutanixNdbClustersClustersResourceConfigToTerraform(struct?: DataNutanixNdbClustersClustersResourceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbClustersClustersResourceConfigToHclTerraform(struct?: DataNutanixNdbClustersClustersResourceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbClustersClustersResourceConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbClustersClustersResourceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbClustersClustersResourceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // memory_threshold_percentage - computed: true, optional: false, required: false
  public get memoryThresholdPercentage() {
    return this.getNumberAttribute('memory_threshold_percentage');
  }

  // storage_threshold_percentage - computed: true, optional: false, required: false
  public get storageThresholdPercentage() {
    return this.getNumberAttribute('storage_threshold_percentage');
  }
}

export class DataNutanixNdbClustersClustersResourceConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbClustersClustersResourceConfigOutputReference {
    return new DataNutanixNdbClustersClustersResourceConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbClustersClusters {
}

export function dataNutanixNdbClustersClustersToTerraform(struct?: DataNutanixNdbClustersClusters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbClustersClustersToHclTerraform(struct?: DataNutanixNdbClustersClusters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbClustersClustersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbClustersClusters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbClustersClusters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloud_info - computed: true, optional: false, required: false
  public get cloudInfo() {
    return this.getStringAttribute('cloud_info');
  }

  // cloud_type - computed: true, optional: false, required: false
  public get cloudType() {
    return this.getStringAttribute('cloud_type');
  }

  // date_created - computed: true, optional: false, required: false
  public get dateCreated() {
    return this.getStringAttribute('date_created');
  }

  // date_modified - computed: true, optional: false, required: false
  public get dateModified() {
    return this.getStringAttribute('date_modified');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // entity_counts - computed: true, optional: false, required: false
  private _entityCounts = new DataNutanixNdbClustersClustersEntityCountsList(this, "entity_counts", false);
  public get entityCounts() {
    return this._entityCounts;
  }

  // fqdns - computed: true, optional: false, required: false
  public get fqdns() {
    return this.getStringAttribute('fqdns');
  }

  // healthy - computed: true, optional: false, required: false
  public get healthy() {
    return this.getBooleanAttribute('healthy');
  }

  // hypervisor_type - computed: true, optional: false, required: false
  public get hypervisorType() {
    return this.getStringAttribute('hypervisor_type');
  }

  // hypervisor_version - computed: true, optional: false, required: false
  public get hypervisorVersion() {
    return this.getStringAttribute('hypervisor_version');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_addresses - computed: true, optional: false, required: false
  public get ipAddresses() {
    return this.getListAttribute('ip_addresses');
  }

  // management_server_info - computed: true, optional: false, required: false
  public get managementServerInfo() {
    return this.getStringAttribute('management_server_info');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // nx_cluster_uuid - computed: true, optional: false, required: false
  public get nxClusterUuid() {
    return this.getStringAttribute('nx_cluster_uuid');
  }

  // owner_id - computed: true, optional: false, required: false
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // properties - computed: true, optional: false, required: false
  private _properties = new DataNutanixNdbClustersClustersPropertiesList(this, "properties", false);
  public get properties() {
    return this._properties;
  }

  // reference_count - computed: true, optional: false, required: false
  public get referenceCount() {
    return this.getNumberAttribute('reference_count');
  }

  // resource_config - computed: true, optional: false, required: false
  private _resourceConfig = new DataNutanixNdbClustersClustersResourceConfigList(this, "resource_config", false);
  public get resourceConfig() {
    return this._resourceConfig;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // unique_name - computed: true, optional: false, required: false
  public get uniqueName() {
    return this.getStringAttribute('unique_name');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataNutanixNdbClustersClustersList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbClustersClustersOutputReference {
    return new DataNutanixNdbClustersClustersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/ndb_clusters nutanix_ndb_clusters}
*/
export class DataNutanixNdbClusters extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_ndb_clusters";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNutanixNdbClusters resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNutanixNdbClusters to import
  * @param importFromId The id of the existing DataNutanixNdbClusters that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/ndb_clusters#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNutanixNdbClusters to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_ndb_clusters", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/ndb_clusters nutanix_ndb_clusters} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNutanixNdbClustersConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNutanixNdbClustersConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'nutanix_ndb_clusters',
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

  // clusters - computed: true, optional: false, required: false
  private _clusters = new DataNutanixNdbClustersClustersList(this, "clusters", false);
  public get clusters() {
    return this._clusters;
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
