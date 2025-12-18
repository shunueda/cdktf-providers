// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/psql_db_systems
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciPsqlDbSystemsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/psql_db_systems#compartment_id DataOciPsqlDbSystems#compartment_id}
  */
  readonly compartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/psql_db_systems#display_name DataOciPsqlDbSystems#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/psql_db_systems#id DataOciPsqlDbSystems#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/psql_db_systems#state DataOciPsqlDbSystems#state}
  */
  readonly state?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/psql_db_systems#filter DataOciPsqlDbSystems#filter}
  */
  readonly filter?: DataOciPsqlDbSystemsFilter[] | cdktf.IResolvable;
}
export interface DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetails {
}

export function dataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsToTerraform(struct?: DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsToHclTerraform(struct?: DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // password_type - computed: true, optional: false, required: false
  public get passwordType() {
    return this.getStringAttribute('password_type');
  }

  // secret_id - computed: true, optional: false, required: false
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }

  // secret_version - computed: true, optional: false, required: false
  public get secretVersion() {
    return this.getStringAttribute('secret_version');
  }
}

export class DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference {
    return new DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciPsqlDbSystemsDbSystemCollectionItemsCredentials {
}

export function dataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsToTerraform(struct?: DataOciPsqlDbSystemsDbSystemCollectionItemsCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsToHclTerraform(struct?: DataOciPsqlDbSystemsDbSystemCollectionItemsCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciPsqlDbSystemsDbSystemCollectionItemsCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciPsqlDbSystemsDbSystemCollectionItemsCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // password_details - computed: true, optional: false, required: false
  private _passwordDetails = new DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList(this, "password_details", false);
  public get passwordDetails() {
    return this._passwordDetails;
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference {
    return new DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciPsqlDbSystemsDbSystemCollectionItemsInstances {
}

export function dataOciPsqlDbSystemsDbSystemCollectionItemsInstancesToTerraform(struct?: DataOciPsqlDbSystemsDbSystemCollectionItemsInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciPsqlDbSystemsDbSystemCollectionItemsInstancesToHclTerraform(struct?: DataOciPsqlDbSystemsDbSystemCollectionItemsInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciPsqlDbSystemsDbSystemCollectionItemsInstances | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciPsqlDbSystemsDbSystemCollectionItemsInstances | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // availability_domain - computed: true, optional: false, required: false
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }
}

export class DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference {
    return new DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetails {
}

export function dataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsToTerraform(struct?: DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsToHclTerraform(struct?: DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetails | undefined) {
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

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // private_ip - computed: true, optional: false, required: false
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }
}

export class DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference {
    return new DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyCopyPolicy {
}

export function dataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyCopyPolicyToTerraform(struct?: DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyCopyPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyCopyPolicyToHclTerraform(struct?: DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyCopyPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyCopyPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyCopyPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyCopyPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // regions - computed: true, optional: false, required: false
  public get regions() {
    return this.getListAttribute('regions');
  }

  // retention_period - computed: true, optional: false, required: false
  public get retentionPeriod() {
    return this.getNumberAttribute('retention_period');
  }
}

export class DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyCopyPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyCopyPolicyOutputReference {
    return new DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyCopyPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicy {
}

export function dataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyToTerraform(struct?: DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyToHclTerraform(struct?: DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backup_start - computed: true, optional: false, required: false
  public get backupStart() {
    return this.getStringAttribute('backup_start');
  }

  // copy_policy - computed: true, optional: false, required: false
  private _copyPolicy = new DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyCopyPolicyList(this, "copy_policy", false);
  public get copyPolicy() {
    return this._copyPolicy;
  }

  // days_of_the_month - computed: true, optional: false, required: false
  public get daysOfTheMonth() {
    return this.getNumberListAttribute('days_of_the_month');
  }

  // days_of_the_week - computed: true, optional: false, required: false
  public get daysOfTheWeek() {
    return this.getListAttribute('days_of_the_week');
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // retention_days - computed: true, optional: false, required: false
  public get retentionDays() {
    return this.getNumberAttribute('retention_days');
  }
}

export class DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference {
    return new DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicy {
}

export function dataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyToTerraform(struct?: DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyToHclTerraform(struct?: DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backup_policy - computed: true, optional: false, required: false
  private _backupPolicy = new DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList(this, "backup_policy", false);
  public get backupPolicy() {
    return this._backupPolicy;
  }

  // maintenance_window_start - computed: true, optional: false, required: false
  public get maintenanceWindowStart() {
    return this.getStringAttribute('maintenance_window_start');
  }
}

export class DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference {
    return new DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetails {
}

export function dataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsToTerraform(struct?: DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsToHclTerraform(struct?: DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_reader_endpoint_enabled - computed: true, optional: false, required: false
  public get isReaderEndpointEnabled() {
    return this.getBooleanAttribute('is_reader_endpoint_enabled');
  }

  // nsg_ids - computed: true, optional: false, required: false
  public get nsgIds() {
    return this.getListAttribute('nsg_ids');
  }

  // primary_db_endpoint_private_ip - computed: true, optional: false, required: false
  public get primaryDbEndpointPrivateIp() {
    return this.getStringAttribute('primary_db_endpoint_private_ip');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}

export class DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference {
    return new DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperations {
}

export function dataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsToTerraform(struct?: DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsToHclTerraform(struct?: DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // from - computed: true, optional: false, required: false
  public get from() {
    return this.getStringAttribute('from');
  }

  // operation - computed: true, optional: false, required: false
  public get operation() {
    return this.getStringAttribute('operation');
  }

  // position - computed: true, optional: false, required: false
  public get position() {
    return this.getStringAttribute('position');
  }

  // selected_item - computed: true, optional: false, required: false
  public get selectedItem() {
    return this.getStringAttribute('selected_item');
  }

  // selection - computed: true, optional: false, required: false
  public get selection() {
    return this.getStringAttribute('selection');
  }

  // value - computed: true, optional: false, required: false
  private _value = new cdktf.StringMap(this, "value");
  public get value() {
    return this._value;
  }
}

export class DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference {
    return new DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciPsqlDbSystemsDbSystemCollectionItemsSource {
}

export function dataOciPsqlDbSystemsDbSystemCollectionItemsSourceToTerraform(struct?: DataOciPsqlDbSystemsDbSystemCollectionItemsSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciPsqlDbSystemsDbSystemCollectionItemsSourceToHclTerraform(struct?: DataOciPsqlDbSystemsDbSystemCollectionItemsSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciPsqlDbSystemsDbSystemCollectionItemsSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciPsqlDbSystemsDbSystemCollectionItemsSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backup_id - computed: true, optional: false, required: false
  public get backupId() {
    return this.getStringAttribute('backup_id');
  }

  // is_having_restore_config_overrides - computed: true, optional: false, required: false
  public get isHavingRestoreConfigOverrides() {
    return this.getBooleanAttribute('is_having_restore_config_overrides');
  }

  // source_type - computed: true, optional: false, required: false
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
}

export class DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList extends cdktf.ComplexList {

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
  public get(index: number): DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference {
    return new DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetails {
}

export function dataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsToTerraform(struct?: DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsToHclTerraform(struct?: DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // availability_domain - computed: true, optional: false, required: false
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // iops - computed: true, optional: false, required: false
  public get iops() {
    return this.getStringAttribute('iops');
  }

  // is_regionally_durable - computed: true, optional: false, required: false
  public get isRegionallyDurable() {
    return this.getBooleanAttribute('is_regionally_durable');
  }

  // system_type - computed: true, optional: false, required: false
  public get systemType() {
    return this.getStringAttribute('system_type');
  }
}

export class DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference {
    return new DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciPsqlDbSystemsDbSystemCollectionItems {
}

export function dataOciPsqlDbSystemsDbSystemCollectionItemsToTerraform(struct?: DataOciPsqlDbSystemsDbSystemCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciPsqlDbSystemsDbSystemCollectionItemsToHclTerraform(struct?: DataOciPsqlDbSystemsDbSystemCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciPsqlDbSystemsDbSystemCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciPsqlDbSystemsDbSystemCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // admin_username - computed: true, optional: false, required: false
  public get adminUsername() {
    return this.getStringAttribute('admin_username');
  }

  // apply_config - computed: true, optional: false, required: false
  public get applyConfig() {
    return this.getStringAttribute('apply_config');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // config_id - computed: true, optional: false, required: false
  public get configId() {
    return this.getStringAttribute('config_id');
  }

  // credentials - computed: true, optional: false, required: false
  private _credentials = new DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList(this, "credentials", false);
  public get credentials() {
    return this._credentials;
  }

  // db_version - computed: true, optional: false, required: false
  public get dbVersion() {
    return this.getStringAttribute('db_version');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_count - computed: true, optional: false, required: false
  public get instanceCount() {
    return this.getNumberAttribute('instance_count');
  }

  // instance_memory_size_in_gbs - computed: true, optional: false, required: false
  public get instanceMemorySizeInGbs() {
    return this.getNumberAttribute('instance_memory_size_in_gbs');
  }

  // instance_ocpu_count - computed: true, optional: false, required: false
  public get instanceOcpuCount() {
    return this.getNumberAttribute('instance_ocpu_count');
  }

  // instances - computed: true, optional: false, required: false
  private _instances = new DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList(this, "instances", false);
  public get instances() {
    return this._instances;
  }

  // instances_details - computed: true, optional: false, required: false
  private _instancesDetails = new DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList(this, "instances_details", false);
  public get instancesDetails() {
    return this._instancesDetails;
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // management_policy - computed: true, optional: false, required: false
  private _managementPolicy = new DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList(this, "management_policy", false);
  public get managementPolicy() {
    return this._managementPolicy;
  }

  // network_details - computed: true, optional: false, required: false
  private _networkDetails = new DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList(this, "network_details", false);
  public get networkDetails() {
    return this._networkDetails;
  }

  // patch_operations - computed: true, optional: false, required: false
  private _patchOperations = new DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList(this, "patch_operations", false);
  public get patchOperations() {
    return this._patchOperations;
  }

  // shape - computed: true, optional: false, required: false
  public get shape() {
    return this.getStringAttribute('shape');
  }

  // source - computed: true, optional: false, required: false
  private _source = new DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList(this, "source", false);
  public get source() {
    return this._source;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // storage_details - computed: true, optional: false, required: false
  private _storageDetails = new DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList(this, "storage_details", false);
  public get storageDetails() {
    return this._storageDetails;
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // system_type - computed: true, optional: false, required: false
  public get systemType() {
    return this.getStringAttribute('system_type');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }
}

export class DataOciPsqlDbSystemsDbSystemCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference {
    return new DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciPsqlDbSystemsDbSystemCollection {
}

export function dataOciPsqlDbSystemsDbSystemCollectionToTerraform(struct?: DataOciPsqlDbSystemsDbSystemCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciPsqlDbSystemsDbSystemCollectionToHclTerraform(struct?: DataOciPsqlDbSystemsDbSystemCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciPsqlDbSystemsDbSystemCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciPsqlDbSystemsDbSystemCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciPsqlDbSystemsDbSystemCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciPsqlDbSystemsDbSystemCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciPsqlDbSystemsDbSystemCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciPsqlDbSystemsDbSystemCollectionOutputReference {
    return new DataOciPsqlDbSystemsDbSystemCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciPsqlDbSystemsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/psql_db_systems#name DataOciPsqlDbSystems#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/psql_db_systems#regex DataOciPsqlDbSystems#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/psql_db_systems#values DataOciPsqlDbSystems#values}
  */
  readonly values: string[];
}

export function dataOciPsqlDbSystemsFilterToTerraform(struct?: DataOciPsqlDbSystemsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    regex: cdktf.booleanToTerraform(struct!.regex),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataOciPsqlDbSystemsFilterToHclTerraform(struct?: DataOciPsqlDbSystemsFilter | cdktf.IResolvable): any {
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
    regex: {
      value: cdktf.booleanToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOciPsqlDbSystemsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciPsqlDbSystemsFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciPsqlDbSystemsFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._regex = undefined;
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
      this._regex = value.regex;
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

  // regex - computed: false, optional: true, required: false
  private _regex?: boolean | cdktf.IResolvable; 
  public get regex() {
    return this.getBooleanAttribute('regex');
  }
  public set regex(value: boolean | cdktf.IResolvable) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataOciPsqlDbSystemsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciPsqlDbSystemsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciPsqlDbSystemsFilterOutputReference {
    return new DataOciPsqlDbSystemsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/psql_db_systems oci_psql_db_systems}
*/
export class DataOciPsqlDbSystems extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_psql_db_systems";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciPsqlDbSystems resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciPsqlDbSystems to import
  * @param importFromId The id of the existing DataOciPsqlDbSystems that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/psql_db_systems#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciPsqlDbSystems to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_psql_db_systems", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/psql_db_systems oci_psql_db_systems} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciPsqlDbSystemsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOciPsqlDbSystemsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'oci_psql_db_systems',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compartmentId = config.compartmentId;
    this._displayName = config.displayName;
    this._id = config.id;
    this._state = config.state;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: true, required: false
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  public resetCompartmentId() {
    this._compartmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // db_system_collection - computed: true, optional: false, required: false
  private _dbSystemCollection = new DataOciPsqlDbSystemsDbSystemCollectionList(this, "db_system_collection", false);
  public get dbSystemCollection() {
    return this._dbSystemCollection;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // id - computed: false, optional: true, required: false
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

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciPsqlDbSystemsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciPsqlDbSystemsFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      state: cdktf.stringToTerraform(this._state),
      filter: cdktf.listMapper(dataOciPsqlDbSystemsFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciPsqlDbSystemsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciPsqlDbSystemsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
