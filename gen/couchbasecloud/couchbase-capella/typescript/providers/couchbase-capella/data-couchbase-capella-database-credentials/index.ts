// https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/data-sources/database_credentials
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCouchbaseCapellaDatabaseCredentialsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/data-sources/database_credentials#cluster_id DataCouchbaseCapellaDatabaseCredentials#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/data-sources/database_credentials#organization_id DataCouchbaseCapellaDatabaseCredentials#organization_id}
  */
  readonly organizationId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/data-sources/database_credentials#project_id DataCouchbaseCapellaDatabaseCredentials#project_id}
  */
  readonly projectId: string;
}
export interface DataCouchbaseCapellaDatabaseCredentialsDataAccessResourcesBucketsScopes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/data-sources/database_credentials#collections DataCouchbaseCapellaDatabaseCredentials#collections}
  */
  readonly collections?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/data-sources/database_credentials#name DataCouchbaseCapellaDatabaseCredentials#name}
  */
  readonly name: string;
}

export function dataCouchbaseCapellaDatabaseCredentialsDataAccessResourcesBucketsScopesToTerraform(struct?: DataCouchbaseCapellaDatabaseCredentialsDataAccessResourcesBucketsScopes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collections: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.collections),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataCouchbaseCapellaDatabaseCredentialsDataAccessResourcesBucketsScopesToHclTerraform(struct?: DataCouchbaseCapellaDatabaseCredentialsDataAccessResourcesBucketsScopes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    collections: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.collections),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCouchbaseCapellaDatabaseCredentialsDataAccessResourcesBucketsScopesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCouchbaseCapellaDatabaseCredentialsDataAccessResourcesBucketsScopes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collections !== undefined) {
      hasAnyValues = true;
      internalValueResult.collections = this._collections;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCouchbaseCapellaDatabaseCredentialsDataAccessResourcesBucketsScopes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._collections = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._collections = value.collections;
      this._name = value.name;
    }
  }

  // collections - computed: true, optional: true, required: false
  private _collections?: string[]; 
  public get collections() {
    return this.getListAttribute('collections');
  }
  public set collections(value: string[]) {
    this._collections = value;
  }
  public resetCollections() {
    this._collections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionsInput() {
    return this._collections;
  }

  // name - computed: true, optional: false, required: true
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
}

export class DataCouchbaseCapellaDatabaseCredentialsDataAccessResourcesBucketsScopesList extends cdktf.ComplexList {
  public internalValue? : DataCouchbaseCapellaDatabaseCredentialsDataAccessResourcesBucketsScopes[] | cdktf.IResolvable

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
  public get(index: number): DataCouchbaseCapellaDatabaseCredentialsDataAccessResourcesBucketsScopesOutputReference {
    return new DataCouchbaseCapellaDatabaseCredentialsDataAccessResourcesBucketsScopesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCouchbaseCapellaDatabaseCredentialsDataAccessResourcesBuckets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/data-sources/database_credentials#name DataCouchbaseCapellaDatabaseCredentials#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/data-sources/database_credentials#scopes DataCouchbaseCapellaDatabaseCredentials#scopes}
  */
  readonly scopes?: DataCouchbaseCapellaDatabaseCredentialsDataAccessResourcesBucketsScopes[] | cdktf.IResolvable;
}

export function dataCouchbaseCapellaDatabaseCredentialsDataAccessResourcesBucketsToTerraform(struct?: DataCouchbaseCapellaDatabaseCredentialsDataAccessResourcesBuckets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    scopes: cdktf.listMapper(dataCouchbaseCapellaDatabaseCredentialsDataAccessResourcesBucketsScopesToTerraform, false)(struct!.scopes),
  }
}


export function dataCouchbaseCapellaDatabaseCredentialsDataAccessResourcesBucketsToHclTerraform(struct?: DataCouchbaseCapellaDatabaseCredentialsDataAccessResourcesBuckets | cdktf.IResolvable): any {
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
    scopes: {
      value: cdktf.listMapperHcl(dataCouchbaseCapellaDatabaseCredentialsDataAccessResourcesBucketsScopesToHclTerraform, false)(struct!.scopes),
      isBlock: true,
      type: "list",
      storageClassType: "DataCouchbaseCapellaDatabaseCredentialsDataAccessResourcesBucketsScopesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCouchbaseCapellaDatabaseCredentialsDataAccessResourcesBucketsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCouchbaseCapellaDatabaseCredentialsDataAccessResourcesBuckets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._scopes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCouchbaseCapellaDatabaseCredentialsDataAccessResourcesBuckets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._scopes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._scopes.internalValue = value.scopes;
    }
  }

  // name - computed: true, optional: false, required: true
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

  // scopes - computed: true, optional: true, required: false
  private _scopes = new DataCouchbaseCapellaDatabaseCredentialsDataAccessResourcesBucketsScopesList(this, "scopes", false);
  public get scopes() {
    return this._scopes;
  }
  public putScopes(value: DataCouchbaseCapellaDatabaseCredentialsDataAccessResourcesBucketsScopes[] | cdktf.IResolvable) {
    this._scopes.internalValue = value;
  }
  public resetScopes() {
    this._scopes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes.internalValue;
  }
}

export class DataCouchbaseCapellaDatabaseCredentialsDataAccessResourcesBucketsList extends cdktf.ComplexList {
  public internalValue? : DataCouchbaseCapellaDatabaseCredentialsDataAccessResourcesBuckets[] | cdktf.IResolvable

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
  public get(index: number): DataCouchbaseCapellaDatabaseCredentialsDataAccessResourcesBucketsOutputReference {
    return new DataCouchbaseCapellaDatabaseCredentialsDataAccessResourcesBucketsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCouchbaseCapellaDatabaseCredentialsDataAccessResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/data-sources/database_credentials#buckets DataCouchbaseCapellaDatabaseCredentials#buckets}
  */
  readonly buckets?: DataCouchbaseCapellaDatabaseCredentialsDataAccessResourcesBuckets[] | cdktf.IResolvable;
}

export function dataCouchbaseCapellaDatabaseCredentialsDataAccessResourcesToTerraform(struct?: DataCouchbaseCapellaDatabaseCredentialsDataAccessResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    buckets: cdktf.listMapper(dataCouchbaseCapellaDatabaseCredentialsDataAccessResourcesBucketsToTerraform, false)(struct!.buckets),
  }
}


export function dataCouchbaseCapellaDatabaseCredentialsDataAccessResourcesToHclTerraform(struct?: DataCouchbaseCapellaDatabaseCredentialsDataAccessResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    buckets: {
      value: cdktf.listMapperHcl(dataCouchbaseCapellaDatabaseCredentialsDataAccessResourcesBucketsToHclTerraform, false)(struct!.buckets),
      isBlock: true,
      type: "list",
      storageClassType: "DataCouchbaseCapellaDatabaseCredentialsDataAccessResourcesBucketsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCouchbaseCapellaDatabaseCredentialsDataAccessResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCouchbaseCapellaDatabaseCredentialsDataAccessResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buckets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.buckets = this._buckets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCouchbaseCapellaDatabaseCredentialsDataAccessResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._buckets.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._buckets.internalValue = value.buckets;
    }
  }

  // buckets - computed: true, optional: true, required: false
  private _buckets = new DataCouchbaseCapellaDatabaseCredentialsDataAccessResourcesBucketsList(this, "buckets", false);
  public get buckets() {
    return this._buckets;
  }
  public putBuckets(value: DataCouchbaseCapellaDatabaseCredentialsDataAccessResourcesBuckets[] | cdktf.IResolvable) {
    this._buckets.internalValue = value;
  }
  public resetBuckets() {
    this._buckets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketsInput() {
    return this._buckets.internalValue;
  }
}
export interface DataCouchbaseCapellaDatabaseCredentialsDataAccess {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/data-sources/database_credentials#privileges DataCouchbaseCapellaDatabaseCredentials#privileges}
  */
  readonly privileges: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/data-sources/database_credentials#resources DataCouchbaseCapellaDatabaseCredentials#resources}
  */
  readonly resources?: DataCouchbaseCapellaDatabaseCredentialsDataAccessResources;
}

export function dataCouchbaseCapellaDatabaseCredentialsDataAccessToTerraform(struct?: DataCouchbaseCapellaDatabaseCredentialsDataAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    privileges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.privileges),
    resources: dataCouchbaseCapellaDatabaseCredentialsDataAccessResourcesToTerraform(struct!.resources),
  }
}


export function dataCouchbaseCapellaDatabaseCredentialsDataAccessToHclTerraform(struct?: DataCouchbaseCapellaDatabaseCredentialsDataAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    privileges: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.privileges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    resources: {
      value: dataCouchbaseCapellaDatabaseCredentialsDataAccessResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataCouchbaseCapellaDatabaseCredentialsDataAccessResources",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCouchbaseCapellaDatabaseCredentialsDataAccessOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCouchbaseCapellaDatabaseCredentialsDataAccess | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._privileges !== undefined) {
      hasAnyValues = true;
      internalValueResult.privileges = this._privileges;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCouchbaseCapellaDatabaseCredentialsDataAccess | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._privileges = undefined;
      this._resources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._privileges = value.privileges;
      this._resources.internalValue = value.resources;
    }
  }

  // privileges - computed: true, optional: false, required: true
  private _privileges?: string[]; 
  public get privileges() {
    return this.getListAttribute('privileges');
  }
  public set privileges(value: string[]) {
    this._privileges = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegesInput() {
    return this._privileges;
  }

  // resources - computed: true, optional: true, required: false
  private _resources = new DataCouchbaseCapellaDatabaseCredentialsDataAccessResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataCouchbaseCapellaDatabaseCredentialsDataAccessResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }
}

export class DataCouchbaseCapellaDatabaseCredentialsDataAccessList extends cdktf.ComplexList {
  public internalValue? : DataCouchbaseCapellaDatabaseCredentialsDataAccess[] | cdktf.IResolvable

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
  public get(index: number): DataCouchbaseCapellaDatabaseCredentialsDataAccessOutputReference {
    return new DataCouchbaseCapellaDatabaseCredentialsDataAccessOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCouchbaseCapellaDatabaseCredentialsDataAudit {
}

export function dataCouchbaseCapellaDatabaseCredentialsDataAuditToTerraform(struct?: DataCouchbaseCapellaDatabaseCredentialsDataAudit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCouchbaseCapellaDatabaseCredentialsDataAuditToHclTerraform(struct?: DataCouchbaseCapellaDatabaseCredentialsDataAudit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCouchbaseCapellaDatabaseCredentialsDataAuditOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCouchbaseCapellaDatabaseCredentialsDataAudit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCouchbaseCapellaDatabaseCredentialsDataAudit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // modified_at - computed: true, optional: false, required: false
  public get modifiedAt() {
    return this.getStringAttribute('modified_at');
  }

  // modified_by - computed: true, optional: false, required: false
  public get modifiedBy() {
    return this.getStringAttribute('modified_by');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }
}
export interface DataCouchbaseCapellaDatabaseCredentialsData {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/data-sources/database_credentials#access DataCouchbaseCapellaDatabaseCredentials#access}
  */
  readonly access?: DataCouchbaseCapellaDatabaseCredentialsDataAccess[] | cdktf.IResolvable;
}

export function dataCouchbaseCapellaDatabaseCredentialsDataToTerraform(struct?: DataCouchbaseCapellaDatabaseCredentialsData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.listMapper(dataCouchbaseCapellaDatabaseCredentialsDataAccessToTerraform, false)(struct!.access),
  }
}


export function dataCouchbaseCapellaDatabaseCredentialsDataToHclTerraform(struct?: DataCouchbaseCapellaDatabaseCredentialsData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access: {
      value: cdktf.listMapperHcl(dataCouchbaseCapellaDatabaseCredentialsDataAccessToHclTerraform, false)(struct!.access),
      isBlock: true,
      type: "list",
      storageClassType: "DataCouchbaseCapellaDatabaseCredentialsDataAccessList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCouchbaseCapellaDatabaseCredentialsDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCouchbaseCapellaDatabaseCredentialsData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._access?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.access = this._access?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCouchbaseCapellaDatabaseCredentialsData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._access.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._access.internalValue = value.access;
    }
  }

  // access - computed: true, optional: true, required: false
  private _access = new DataCouchbaseCapellaDatabaseCredentialsDataAccessList(this, "access", false);
  public get access() {
    return this._access;
  }
  public putAccess(value: DataCouchbaseCapellaDatabaseCredentialsDataAccess[] | cdktf.IResolvable) {
    this._access.internalValue = value;
  }
  public resetAccess() {
    this._access.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access.internalValue;
  }

  // audit - computed: true, optional: false, required: false
  private _audit = new DataCouchbaseCapellaDatabaseCredentialsDataAuditOutputReference(this, "audit");
  public get audit() {
    return this._audit;
  }

  // cluster_id - computed: true, optional: false, required: false
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // organization_id - computed: true, optional: false, required: false
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
}

export class DataCouchbaseCapellaDatabaseCredentialsDataList extends cdktf.ComplexList {
  public internalValue? : DataCouchbaseCapellaDatabaseCredentialsData[] | cdktf.IResolvable

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
  public get(index: number): DataCouchbaseCapellaDatabaseCredentialsDataOutputReference {
    return new DataCouchbaseCapellaDatabaseCredentialsDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/data-sources/database_credentials couchbase-capella_database_credentials}
*/
export class DataCouchbaseCapellaDatabaseCredentials extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "couchbase-capella_database_credentials";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCouchbaseCapellaDatabaseCredentials resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCouchbaseCapellaDatabaseCredentials to import
  * @param importFromId The id of the existing DataCouchbaseCapellaDatabaseCredentials that should be imported. Refer to the {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/data-sources/database_credentials#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCouchbaseCapellaDatabaseCredentials to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "couchbase-capella_database_credentials", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/data-sources/database_credentials couchbase-capella_database_credentials} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCouchbaseCapellaDatabaseCredentialsConfig
  */
  public constructor(scope: Construct, id: string, config: DataCouchbaseCapellaDatabaseCredentialsConfig) {
    super(scope, id, {
      terraformResourceType: 'couchbase-capella_database_credentials',
      terraformGeneratorMetadata: {
        providerName: 'couchbase-capella',
        providerVersion: '1.7.0',
        providerVersionConstraint: '1.7.0'
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
    this._organizationId = config.organizationId;
    this._projectId = config.projectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // data - computed: true, optional: false, required: false
  private _data = new DataCouchbaseCapellaDatabaseCredentialsDataList(this, "data", false);
  public get data() {
    return this._data;
  }

  // organization_id - computed: false, optional: false, required: true
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      organization_id: cdktf.stringToTerraform(this._organizationId),
      project_id: cdktf.stringToTerraform(this._projectId),
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
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
