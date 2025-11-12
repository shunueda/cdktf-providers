// https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/ndb_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNutanixNdbClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/ndb_cluster#cluster_id DataNutanixNdbCluster#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/ndb_cluster#cluster_name DataNutanixNdbCluster#cluster_name}
  */
  readonly clusterName?: string;
}
export interface DataNutanixNdbClusterEntityCountsEngineCountsMariadbDatabaseProfiles {
}

export function dataNutanixNdbClusterEntityCountsEngineCountsMariadbDatabaseProfilesToTerraform(struct?: DataNutanixNdbClusterEntityCountsEngineCountsMariadbDatabaseProfiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbClusterEntityCountsEngineCountsMariadbDatabaseProfilesToHclTerraform(struct?: DataNutanixNdbClusterEntityCountsEngineCountsMariadbDatabaseProfiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbClusterEntityCountsEngineCountsMariadbDatabaseProfilesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbClusterEntityCountsEngineCountsMariadbDatabaseProfiles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbClusterEntityCountsEngineCountsMariadbDatabaseProfiles | undefined) {
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

export class DataNutanixNdbClusterEntityCountsEngineCountsMariadbDatabaseProfilesList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbClusterEntityCountsEngineCountsMariadbDatabaseProfilesOutputReference {
    return new DataNutanixNdbClusterEntityCountsEngineCountsMariadbDatabaseProfilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbClusterEntityCountsEngineCountsMariadbDatabase {
}

export function dataNutanixNdbClusterEntityCountsEngineCountsMariadbDatabaseToTerraform(struct?: DataNutanixNdbClusterEntityCountsEngineCountsMariadbDatabase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbClusterEntityCountsEngineCountsMariadbDatabaseToHclTerraform(struct?: DataNutanixNdbClusterEntityCountsEngineCountsMariadbDatabase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbClusterEntityCountsEngineCountsMariadbDatabaseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbClusterEntityCountsEngineCountsMariadbDatabase | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbClusterEntityCountsEngineCountsMariadbDatabase | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // profiles - computed: true, optional: false, required: false
  private _profiles = new DataNutanixNdbClusterEntityCountsEngineCountsMariadbDatabaseProfilesList(this, "profiles", false);
  public get profiles() {
    return this._profiles;
  }

  // time_machines - computed: true, optional: false, required: false
  public get timeMachines() {
    return this.getNumberAttribute('time_machines');
  }
}

export class DataNutanixNdbClusterEntityCountsEngineCountsMariadbDatabaseList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbClusterEntityCountsEngineCountsMariadbDatabaseOutputReference {
    return new DataNutanixNdbClusterEntityCountsEngineCountsMariadbDatabaseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbClusterEntityCountsEngineCountsMongodbDatabaseProfiles {
}

export function dataNutanixNdbClusterEntityCountsEngineCountsMongodbDatabaseProfilesToTerraform(struct?: DataNutanixNdbClusterEntityCountsEngineCountsMongodbDatabaseProfiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbClusterEntityCountsEngineCountsMongodbDatabaseProfilesToHclTerraform(struct?: DataNutanixNdbClusterEntityCountsEngineCountsMongodbDatabaseProfiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbClusterEntityCountsEngineCountsMongodbDatabaseProfilesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbClusterEntityCountsEngineCountsMongodbDatabaseProfiles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbClusterEntityCountsEngineCountsMongodbDatabaseProfiles | undefined) {
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

export class DataNutanixNdbClusterEntityCountsEngineCountsMongodbDatabaseProfilesList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbClusterEntityCountsEngineCountsMongodbDatabaseProfilesOutputReference {
    return new DataNutanixNdbClusterEntityCountsEngineCountsMongodbDatabaseProfilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbClusterEntityCountsEngineCountsMongodbDatabase {
}

export function dataNutanixNdbClusterEntityCountsEngineCountsMongodbDatabaseToTerraform(struct?: DataNutanixNdbClusterEntityCountsEngineCountsMongodbDatabase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbClusterEntityCountsEngineCountsMongodbDatabaseToHclTerraform(struct?: DataNutanixNdbClusterEntityCountsEngineCountsMongodbDatabase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbClusterEntityCountsEngineCountsMongodbDatabaseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbClusterEntityCountsEngineCountsMongodbDatabase | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbClusterEntityCountsEngineCountsMongodbDatabase | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // profiles - computed: true, optional: false, required: false
  private _profiles = new DataNutanixNdbClusterEntityCountsEngineCountsMongodbDatabaseProfilesList(this, "profiles", false);
  public get profiles() {
    return this._profiles;
  }

  // time_machines - computed: true, optional: false, required: false
  public get timeMachines() {
    return this.getNumberAttribute('time_machines');
  }
}

export class DataNutanixNdbClusterEntityCountsEngineCountsMongodbDatabaseList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbClusterEntityCountsEngineCountsMongodbDatabaseOutputReference {
    return new DataNutanixNdbClusterEntityCountsEngineCountsMongodbDatabaseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbClusterEntityCountsEngineCountsMysqlDatabaseProfiles {
}

export function dataNutanixNdbClusterEntityCountsEngineCountsMysqlDatabaseProfilesToTerraform(struct?: DataNutanixNdbClusterEntityCountsEngineCountsMysqlDatabaseProfiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbClusterEntityCountsEngineCountsMysqlDatabaseProfilesToHclTerraform(struct?: DataNutanixNdbClusterEntityCountsEngineCountsMysqlDatabaseProfiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbClusterEntityCountsEngineCountsMysqlDatabaseProfilesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbClusterEntityCountsEngineCountsMysqlDatabaseProfiles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbClusterEntityCountsEngineCountsMysqlDatabaseProfiles | undefined) {
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

export class DataNutanixNdbClusterEntityCountsEngineCountsMysqlDatabaseProfilesList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbClusterEntityCountsEngineCountsMysqlDatabaseProfilesOutputReference {
    return new DataNutanixNdbClusterEntityCountsEngineCountsMysqlDatabaseProfilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbClusterEntityCountsEngineCountsMysqlDatabase {
}

export function dataNutanixNdbClusterEntityCountsEngineCountsMysqlDatabaseToTerraform(struct?: DataNutanixNdbClusterEntityCountsEngineCountsMysqlDatabase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbClusterEntityCountsEngineCountsMysqlDatabaseToHclTerraform(struct?: DataNutanixNdbClusterEntityCountsEngineCountsMysqlDatabase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbClusterEntityCountsEngineCountsMysqlDatabaseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbClusterEntityCountsEngineCountsMysqlDatabase | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbClusterEntityCountsEngineCountsMysqlDatabase | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // profiles - computed: true, optional: false, required: false
  private _profiles = new DataNutanixNdbClusterEntityCountsEngineCountsMysqlDatabaseProfilesList(this, "profiles", false);
  public get profiles() {
    return this._profiles;
  }

  // time_machines - computed: true, optional: false, required: false
  public get timeMachines() {
    return this.getNumberAttribute('time_machines');
  }
}

export class DataNutanixNdbClusterEntityCountsEngineCountsMysqlDatabaseList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbClusterEntityCountsEngineCountsMysqlDatabaseOutputReference {
    return new DataNutanixNdbClusterEntityCountsEngineCountsMysqlDatabaseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbClusterEntityCountsEngineCountsOracleDatabaseProfiles {
}

export function dataNutanixNdbClusterEntityCountsEngineCountsOracleDatabaseProfilesToTerraform(struct?: DataNutanixNdbClusterEntityCountsEngineCountsOracleDatabaseProfiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbClusterEntityCountsEngineCountsOracleDatabaseProfilesToHclTerraform(struct?: DataNutanixNdbClusterEntityCountsEngineCountsOracleDatabaseProfiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbClusterEntityCountsEngineCountsOracleDatabaseProfilesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbClusterEntityCountsEngineCountsOracleDatabaseProfiles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbClusterEntityCountsEngineCountsOracleDatabaseProfiles | undefined) {
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

export class DataNutanixNdbClusterEntityCountsEngineCountsOracleDatabaseProfilesList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbClusterEntityCountsEngineCountsOracleDatabaseProfilesOutputReference {
    return new DataNutanixNdbClusterEntityCountsEngineCountsOracleDatabaseProfilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbClusterEntityCountsEngineCountsOracleDatabase {
}

export function dataNutanixNdbClusterEntityCountsEngineCountsOracleDatabaseToTerraform(struct?: DataNutanixNdbClusterEntityCountsEngineCountsOracleDatabase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbClusterEntityCountsEngineCountsOracleDatabaseToHclTerraform(struct?: DataNutanixNdbClusterEntityCountsEngineCountsOracleDatabase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbClusterEntityCountsEngineCountsOracleDatabaseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbClusterEntityCountsEngineCountsOracleDatabase | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbClusterEntityCountsEngineCountsOracleDatabase | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // profiles - computed: true, optional: false, required: false
  private _profiles = new DataNutanixNdbClusterEntityCountsEngineCountsOracleDatabaseProfilesList(this, "profiles", false);
  public get profiles() {
    return this._profiles;
  }

  // time_machines - computed: true, optional: false, required: false
  public get timeMachines() {
    return this.getNumberAttribute('time_machines');
  }
}

export class DataNutanixNdbClusterEntityCountsEngineCountsOracleDatabaseList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbClusterEntityCountsEngineCountsOracleDatabaseOutputReference {
    return new DataNutanixNdbClusterEntityCountsEngineCountsOracleDatabaseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbClusterEntityCountsEngineCountsPostgresDatabaseProfiles {
}

export function dataNutanixNdbClusterEntityCountsEngineCountsPostgresDatabaseProfilesToTerraform(struct?: DataNutanixNdbClusterEntityCountsEngineCountsPostgresDatabaseProfiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbClusterEntityCountsEngineCountsPostgresDatabaseProfilesToHclTerraform(struct?: DataNutanixNdbClusterEntityCountsEngineCountsPostgresDatabaseProfiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbClusterEntityCountsEngineCountsPostgresDatabaseProfilesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbClusterEntityCountsEngineCountsPostgresDatabaseProfiles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbClusterEntityCountsEngineCountsPostgresDatabaseProfiles | undefined) {
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

export class DataNutanixNdbClusterEntityCountsEngineCountsPostgresDatabaseProfilesList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbClusterEntityCountsEngineCountsPostgresDatabaseProfilesOutputReference {
    return new DataNutanixNdbClusterEntityCountsEngineCountsPostgresDatabaseProfilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbClusterEntityCountsEngineCountsPostgresDatabase {
}

export function dataNutanixNdbClusterEntityCountsEngineCountsPostgresDatabaseToTerraform(struct?: DataNutanixNdbClusterEntityCountsEngineCountsPostgresDatabase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbClusterEntityCountsEngineCountsPostgresDatabaseToHclTerraform(struct?: DataNutanixNdbClusterEntityCountsEngineCountsPostgresDatabase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbClusterEntityCountsEngineCountsPostgresDatabaseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbClusterEntityCountsEngineCountsPostgresDatabase | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbClusterEntityCountsEngineCountsPostgresDatabase | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // profiles - computed: true, optional: false, required: false
  private _profiles = new DataNutanixNdbClusterEntityCountsEngineCountsPostgresDatabaseProfilesList(this, "profiles", false);
  public get profiles() {
    return this._profiles;
  }

  // time_machines - computed: true, optional: false, required: false
  public get timeMachines() {
    return this.getNumberAttribute('time_machines');
  }
}

export class DataNutanixNdbClusterEntityCountsEngineCountsPostgresDatabaseList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbClusterEntityCountsEngineCountsPostgresDatabaseOutputReference {
    return new DataNutanixNdbClusterEntityCountsEngineCountsPostgresDatabaseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbClusterEntityCountsEngineCountsSaphanaDatabaseProfiles {
}

export function dataNutanixNdbClusterEntityCountsEngineCountsSaphanaDatabaseProfilesToTerraform(struct?: DataNutanixNdbClusterEntityCountsEngineCountsSaphanaDatabaseProfiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbClusterEntityCountsEngineCountsSaphanaDatabaseProfilesToHclTerraform(struct?: DataNutanixNdbClusterEntityCountsEngineCountsSaphanaDatabaseProfiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbClusterEntityCountsEngineCountsSaphanaDatabaseProfilesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbClusterEntityCountsEngineCountsSaphanaDatabaseProfiles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbClusterEntityCountsEngineCountsSaphanaDatabaseProfiles | undefined) {
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

export class DataNutanixNdbClusterEntityCountsEngineCountsSaphanaDatabaseProfilesList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbClusterEntityCountsEngineCountsSaphanaDatabaseProfilesOutputReference {
    return new DataNutanixNdbClusterEntityCountsEngineCountsSaphanaDatabaseProfilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbClusterEntityCountsEngineCountsSaphanaDatabase {
}

export function dataNutanixNdbClusterEntityCountsEngineCountsSaphanaDatabaseToTerraform(struct?: DataNutanixNdbClusterEntityCountsEngineCountsSaphanaDatabase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbClusterEntityCountsEngineCountsSaphanaDatabaseToHclTerraform(struct?: DataNutanixNdbClusterEntityCountsEngineCountsSaphanaDatabase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbClusterEntityCountsEngineCountsSaphanaDatabaseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbClusterEntityCountsEngineCountsSaphanaDatabase | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbClusterEntityCountsEngineCountsSaphanaDatabase | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // profiles - computed: true, optional: false, required: false
  private _profiles = new DataNutanixNdbClusterEntityCountsEngineCountsSaphanaDatabaseProfilesList(this, "profiles", false);
  public get profiles() {
    return this._profiles;
  }

  // time_machines - computed: true, optional: false, required: false
  public get timeMachines() {
    return this.getNumberAttribute('time_machines');
  }
}

export class DataNutanixNdbClusterEntityCountsEngineCountsSaphanaDatabaseList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbClusterEntityCountsEngineCountsSaphanaDatabaseOutputReference {
    return new DataNutanixNdbClusterEntityCountsEngineCountsSaphanaDatabaseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbClusterEntityCountsEngineCountsSqlserverDatabaseProfiles {
}

export function dataNutanixNdbClusterEntityCountsEngineCountsSqlserverDatabaseProfilesToTerraform(struct?: DataNutanixNdbClusterEntityCountsEngineCountsSqlserverDatabaseProfiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbClusterEntityCountsEngineCountsSqlserverDatabaseProfilesToHclTerraform(struct?: DataNutanixNdbClusterEntityCountsEngineCountsSqlserverDatabaseProfiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbClusterEntityCountsEngineCountsSqlserverDatabaseProfilesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbClusterEntityCountsEngineCountsSqlserverDatabaseProfiles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbClusterEntityCountsEngineCountsSqlserverDatabaseProfiles | undefined) {
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

export class DataNutanixNdbClusterEntityCountsEngineCountsSqlserverDatabaseProfilesList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbClusterEntityCountsEngineCountsSqlserverDatabaseProfilesOutputReference {
    return new DataNutanixNdbClusterEntityCountsEngineCountsSqlserverDatabaseProfilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbClusterEntityCountsEngineCountsSqlserverDatabase {
}

export function dataNutanixNdbClusterEntityCountsEngineCountsSqlserverDatabaseToTerraform(struct?: DataNutanixNdbClusterEntityCountsEngineCountsSqlserverDatabase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbClusterEntityCountsEngineCountsSqlserverDatabaseToHclTerraform(struct?: DataNutanixNdbClusterEntityCountsEngineCountsSqlserverDatabase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbClusterEntityCountsEngineCountsSqlserverDatabaseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbClusterEntityCountsEngineCountsSqlserverDatabase | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbClusterEntityCountsEngineCountsSqlserverDatabase | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // profiles - computed: true, optional: false, required: false
  private _profiles = new DataNutanixNdbClusterEntityCountsEngineCountsSqlserverDatabaseProfilesList(this, "profiles", false);
  public get profiles() {
    return this._profiles;
  }

  // time_machines - computed: true, optional: false, required: false
  public get timeMachines() {
    return this.getNumberAttribute('time_machines');
  }
}

export class DataNutanixNdbClusterEntityCountsEngineCountsSqlserverDatabaseList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbClusterEntityCountsEngineCountsSqlserverDatabaseOutputReference {
    return new DataNutanixNdbClusterEntityCountsEngineCountsSqlserverDatabaseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbClusterEntityCountsEngineCounts {
}

export function dataNutanixNdbClusterEntityCountsEngineCountsToTerraform(struct?: DataNutanixNdbClusterEntityCountsEngineCounts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbClusterEntityCountsEngineCountsToHclTerraform(struct?: DataNutanixNdbClusterEntityCountsEngineCounts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbClusterEntityCountsEngineCountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbClusterEntityCountsEngineCounts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbClusterEntityCountsEngineCounts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mariadb_database - computed: true, optional: false, required: false
  private _mariadbDatabase = new DataNutanixNdbClusterEntityCountsEngineCountsMariadbDatabaseList(this, "mariadb_database", false);
  public get mariadbDatabase() {
    return this._mariadbDatabase;
  }

  // mongodb_database - computed: true, optional: false, required: false
  private _mongodbDatabase = new DataNutanixNdbClusterEntityCountsEngineCountsMongodbDatabaseList(this, "mongodb_database", false);
  public get mongodbDatabase() {
    return this._mongodbDatabase;
  }

  // mysql_database - computed: true, optional: false, required: false
  private _mysqlDatabase = new DataNutanixNdbClusterEntityCountsEngineCountsMysqlDatabaseList(this, "mysql_database", false);
  public get mysqlDatabase() {
    return this._mysqlDatabase;
  }

  // oracle_database - computed: true, optional: false, required: false
  private _oracleDatabase = new DataNutanixNdbClusterEntityCountsEngineCountsOracleDatabaseList(this, "oracle_database", false);
  public get oracleDatabase() {
    return this._oracleDatabase;
  }

  // postgres_database - computed: true, optional: false, required: false
  private _postgresDatabase = new DataNutanixNdbClusterEntityCountsEngineCountsPostgresDatabaseList(this, "postgres_database", false);
  public get postgresDatabase() {
    return this._postgresDatabase;
  }

  // saphana_database - computed: true, optional: false, required: false
  private _saphanaDatabase = new DataNutanixNdbClusterEntityCountsEngineCountsSaphanaDatabaseList(this, "saphana_database", false);
  public get saphanaDatabase() {
    return this._saphanaDatabase;
  }

  // sqlserver_database - computed: true, optional: false, required: false
  private _sqlserverDatabase = new DataNutanixNdbClusterEntityCountsEngineCountsSqlserverDatabaseList(this, "sqlserver_database", false);
  public get sqlserverDatabase() {
    return this._sqlserverDatabase;
  }
}

export class DataNutanixNdbClusterEntityCountsEngineCountsList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbClusterEntityCountsEngineCountsOutputReference {
    return new DataNutanixNdbClusterEntityCountsEngineCountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbClusterEntityCounts {
}

export function dataNutanixNdbClusterEntityCountsToTerraform(struct?: DataNutanixNdbClusterEntityCounts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbClusterEntityCountsToHclTerraform(struct?: DataNutanixNdbClusterEntityCounts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbClusterEntityCountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbClusterEntityCounts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbClusterEntityCounts | undefined) {
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
  private _engineCounts = new DataNutanixNdbClusterEntityCountsEngineCountsList(this, "engine_counts", false);
  public get engineCounts() {
    return this._engineCounts;
  }
}

export class DataNutanixNdbClusterEntityCountsList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbClusterEntityCountsOutputReference {
    return new DataNutanixNdbClusterEntityCountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbClusterProperties {
}

export function dataNutanixNdbClusterPropertiesToTerraform(struct?: DataNutanixNdbClusterProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbClusterPropertiesToHclTerraform(struct?: DataNutanixNdbClusterProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbClusterPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbClusterProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbClusterProperties | undefined) {
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

export class DataNutanixNdbClusterPropertiesList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbClusterPropertiesOutputReference {
    return new DataNutanixNdbClusterPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbClusterResourceConfig {
}

export function dataNutanixNdbClusterResourceConfigToTerraform(struct?: DataNutanixNdbClusterResourceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbClusterResourceConfigToHclTerraform(struct?: DataNutanixNdbClusterResourceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbClusterResourceConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbClusterResourceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbClusterResourceConfig | undefined) {
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

export class DataNutanixNdbClusterResourceConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbClusterResourceConfigOutputReference {
    return new DataNutanixNdbClusterResourceConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/ndb_cluster nutanix_ndb_cluster}
*/
export class DataNutanixNdbCluster extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_ndb_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNutanixNdbCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNutanixNdbCluster to import
  * @param importFromId The id of the existing DataNutanixNdbCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/ndb_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNutanixNdbCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_ndb_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/ndb_cluster nutanix_ndb_cluster} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNutanixNdbClusterConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNutanixNdbClusterConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'nutanix_ndb_cluster',
      terraformGeneratorMetadata: {
        providerName: 'nutanix',
        providerVersion: '2.3.3',
        providerVersionConstraint: '2.3.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterId = config.clusterId;
    this._clusterName = config.clusterName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_info - computed: true, optional: false, required: false
  public get cloudInfo() {
    return this.getStringAttribute('cloud_info');
  }

  // cloud_type - computed: true, optional: false, required: false
  public get cloudType() {
    return this.getStringAttribute('cloud_type');
  }

  // cluster_id - computed: false, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // cluster_name - computed: false, optional: true, required: false
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  public resetClusterName() {
    this._clusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
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
  private _entityCounts = new DataNutanixNdbClusterEntityCountsList(this, "entity_counts", false);
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
  private _properties = new DataNutanixNdbClusterPropertiesList(this, "properties", false);
  public get properties() {
    return this._properties;
  }

  // reference_count - computed: true, optional: false, required: false
  public get referenceCount() {
    return this.getNumberAttribute('reference_count');
  }

  // resource_config - computed: true, optional: false, required: false
  private _resourceConfig = new DataNutanixNdbClusterResourceConfigList(this, "resource_config", false);
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      cluster_name: cdktf.stringToTerraform(this._clusterName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_name: {
        value: cdktf.stringToHclTerraform(this._clusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
