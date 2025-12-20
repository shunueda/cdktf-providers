// https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/data-sources/app_endpoints
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCouchbaseCapellaAppEndpointsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/data-sources/app_endpoints#app_service_id DataCouchbaseCapellaAppEndpoints#app_service_id}
  */
  readonly appServiceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/data-sources/app_endpoints#cluster_id DataCouchbaseCapellaAppEndpoints#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/data-sources/app_endpoints#organization_id DataCouchbaseCapellaAppEndpoints#organization_id}
  */
  readonly organizationId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/data-sources/app_endpoints#project_id DataCouchbaseCapellaAppEndpoints#project_id}
  */
  readonly projectId: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/data-sources/app_endpoints#filter DataCouchbaseCapellaAppEndpoints#filter}
  */
  readonly filter?: DataCouchbaseCapellaAppEndpointsFilter;
}
export interface DataCouchbaseCapellaAppEndpointsAppEndpointsCors {
}

export function dataCouchbaseCapellaAppEndpointsAppEndpointsCorsToTerraform(struct?: DataCouchbaseCapellaAppEndpointsAppEndpointsCors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCouchbaseCapellaAppEndpointsAppEndpointsCorsToHclTerraform(struct?: DataCouchbaseCapellaAppEndpointsAppEndpointsCors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCouchbaseCapellaAppEndpointsAppEndpointsCorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCouchbaseCapellaAppEndpointsAppEndpointsCors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCouchbaseCapellaAppEndpointsAppEndpointsCors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }

  // headers - computed: true, optional: false, required: false
  public get headers() {
    return cdktf.Fn.tolist(this.getListAttribute('headers'));
  }

  // login_origin - computed: true, optional: false, required: false
  public get loginOrigin() {
    return cdktf.Fn.tolist(this.getListAttribute('login_origin'));
  }

  // max_age - computed: true, optional: false, required: false
  public get maxAge() {
    return this.getNumberAttribute('max_age');
  }

  // origin - computed: true, optional: false, required: false
  public get origin() {
    return cdktf.Fn.tolist(this.getListAttribute('origin'));
  }
}
export interface DataCouchbaseCapellaAppEndpointsAppEndpointsOidc {
}

export function dataCouchbaseCapellaAppEndpointsAppEndpointsOidcToTerraform(struct?: DataCouchbaseCapellaAppEndpointsAppEndpointsOidc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCouchbaseCapellaAppEndpointsAppEndpointsOidcToHclTerraform(struct?: DataCouchbaseCapellaAppEndpointsAppEndpointsOidc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCouchbaseCapellaAppEndpointsAppEndpointsOidcOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCouchbaseCapellaAppEndpointsAppEndpointsOidc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCouchbaseCapellaAppEndpointsAppEndpointsOidc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // discovery_url - computed: true, optional: false, required: false
  public get discoveryUrl() {
    return this.getStringAttribute('discovery_url');
  }

  // is_default - computed: true, optional: false, required: false
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }

  // issuer - computed: true, optional: false, required: false
  public get issuer() {
    return this.getStringAttribute('issuer');
  }

  // provider_id - computed: true, optional: false, required: false
  public get providerId() {
    return this.getStringAttribute('provider_id');
  }

  // register - computed: true, optional: false, required: false
  public get register() {
    return this.getBooleanAttribute('register');
  }

  // roles_claim - computed: true, optional: false, required: false
  public get rolesClaim() {
    return this.getStringAttribute('roles_claim');
  }

  // user_prefix - computed: true, optional: false, required: false
  public get userPrefix() {
    return this.getStringAttribute('user_prefix');
  }

  // username_claim - computed: true, optional: false, required: false
  public get usernameClaim() {
    return this.getStringAttribute('username_claim');
  }
}

export class DataCouchbaseCapellaAppEndpointsAppEndpointsOidcList extends cdktf.ComplexList {

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
  public get(index: number): DataCouchbaseCapellaAppEndpointsAppEndpointsOidcOutputReference {
    return new DataCouchbaseCapellaAppEndpointsAppEndpointsOidcOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCouchbaseCapellaAppEndpointsAppEndpointsRequireResync {
}

export function dataCouchbaseCapellaAppEndpointsAppEndpointsRequireResyncToTerraform(struct?: DataCouchbaseCapellaAppEndpointsAppEndpointsRequireResync): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCouchbaseCapellaAppEndpointsAppEndpointsRequireResyncToHclTerraform(struct?: DataCouchbaseCapellaAppEndpointsAppEndpointsRequireResync): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCouchbaseCapellaAppEndpointsAppEndpointsRequireResyncOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataCouchbaseCapellaAppEndpointsAppEndpointsRequireResync | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCouchbaseCapellaAppEndpointsAppEndpointsRequireResync | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  public get items() {
    return cdktf.Fn.tolist(this.getListAttribute('items'));
  }
}

export class DataCouchbaseCapellaAppEndpointsAppEndpointsRequireResyncMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataCouchbaseCapellaAppEndpointsAppEndpointsRequireResyncOutputReference {
    return new DataCouchbaseCapellaAppEndpointsAppEndpointsRequireResyncOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataCouchbaseCapellaAppEndpointsAppEndpointsScopesCollections {
}

export function dataCouchbaseCapellaAppEndpointsAppEndpointsScopesCollectionsToTerraform(struct?: DataCouchbaseCapellaAppEndpointsAppEndpointsScopesCollections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCouchbaseCapellaAppEndpointsAppEndpointsScopesCollectionsToHclTerraform(struct?: DataCouchbaseCapellaAppEndpointsAppEndpointsScopesCollections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCouchbaseCapellaAppEndpointsAppEndpointsScopesCollectionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataCouchbaseCapellaAppEndpointsAppEndpointsScopesCollections | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCouchbaseCapellaAppEndpointsAppEndpointsScopesCollections | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_control_function - computed: true, optional: false, required: false
  public get accessControlFunction() {
    return this.getStringAttribute('access_control_function');
  }

  // import_filter - computed: true, optional: false, required: false
  public get importFilter() {
    return this.getStringAttribute('import_filter');
  }
}

export class DataCouchbaseCapellaAppEndpointsAppEndpointsScopesCollectionsMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataCouchbaseCapellaAppEndpointsAppEndpointsScopesCollectionsOutputReference {
    return new DataCouchbaseCapellaAppEndpointsAppEndpointsScopesCollectionsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataCouchbaseCapellaAppEndpointsAppEndpointsScopes {
}

export function dataCouchbaseCapellaAppEndpointsAppEndpointsScopesToTerraform(struct?: DataCouchbaseCapellaAppEndpointsAppEndpointsScopes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCouchbaseCapellaAppEndpointsAppEndpointsScopesToHclTerraform(struct?: DataCouchbaseCapellaAppEndpointsAppEndpointsScopes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCouchbaseCapellaAppEndpointsAppEndpointsScopesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataCouchbaseCapellaAppEndpointsAppEndpointsScopes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCouchbaseCapellaAppEndpointsAppEndpointsScopes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // collections - computed: true, optional: false, required: false
  private _collections = new DataCouchbaseCapellaAppEndpointsAppEndpointsScopesCollectionsMap(this, "collections");
  public get collections() {
    return this._collections;
  }
}

export class DataCouchbaseCapellaAppEndpointsAppEndpointsScopesMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataCouchbaseCapellaAppEndpointsAppEndpointsScopesOutputReference {
    return new DataCouchbaseCapellaAppEndpointsAppEndpointsScopesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataCouchbaseCapellaAppEndpointsAppEndpoints {
}

export function dataCouchbaseCapellaAppEndpointsAppEndpointsToTerraform(struct?: DataCouchbaseCapellaAppEndpointsAppEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCouchbaseCapellaAppEndpointsAppEndpointsToHclTerraform(struct?: DataCouchbaseCapellaAppEndpointsAppEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCouchbaseCapellaAppEndpointsAppEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCouchbaseCapellaAppEndpointsAppEndpoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCouchbaseCapellaAppEndpointsAppEndpoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // admin_url - computed: true, optional: false, required: false
  public get adminUrl() {
    return this.getStringAttribute('admin_url');
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // cors - computed: true, optional: false, required: false
  private _cors = new DataCouchbaseCapellaAppEndpointsAppEndpointsCorsOutputReference(this, "cors");
  public get cors() {
    return this._cors;
  }

  // delta_sync_enabled - computed: true, optional: false, required: false
  public get deltaSyncEnabled() {
    return this.getBooleanAttribute('delta_sync_enabled');
  }

  // metrics_url - computed: true, optional: false, required: false
  public get metricsUrl() {
    return this.getStringAttribute('metrics_url');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // oidc - computed: true, optional: false, required: false
  private _oidc = new DataCouchbaseCapellaAppEndpointsAppEndpointsOidcList(this, "oidc", false);
  public get oidc() {
    return this._oidc;
  }

  // public_url - computed: true, optional: false, required: false
  public get publicUrl() {
    return this.getStringAttribute('public_url');
  }

  // require_resync - computed: true, optional: false, required: false
  private _requireResync = new DataCouchbaseCapellaAppEndpointsAppEndpointsRequireResyncMap(this, "require_resync");
  public get requireResync() {
    return this._requireResync;
  }

  // scopes - computed: true, optional: false, required: false
  private _scopes = new DataCouchbaseCapellaAppEndpointsAppEndpointsScopesMap(this, "scopes");
  public get scopes() {
    return this._scopes;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // user_xattr_key - computed: true, optional: false, required: false
  public get userXattrKey() {
    return this.getStringAttribute('user_xattr_key');
  }
}

export class DataCouchbaseCapellaAppEndpointsAppEndpointsList extends cdktf.ComplexList {

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
  public get(index: number): DataCouchbaseCapellaAppEndpointsAppEndpointsOutputReference {
    return new DataCouchbaseCapellaAppEndpointsAppEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCouchbaseCapellaAppEndpointsFilter {
  /**
  * The name of the attribute to filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/data-sources/app_endpoints#name DataCouchbaseCapellaAppEndpoints#name}
  */
  readonly name?: string;
  /**
  * List of values to match against.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/data-sources/app_endpoints#values DataCouchbaseCapellaAppEndpoints#values}
  */
  readonly values?: string[];
}

export function dataCouchbaseCapellaAppEndpointsFilterToTerraform(struct?: DataCouchbaseCapellaAppEndpointsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataCouchbaseCapellaAppEndpointsFilterToHclTerraform(struct?: DataCouchbaseCapellaAppEndpointsFilter | cdktf.IResolvable): any {
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

export class DataCouchbaseCapellaAppEndpointsFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCouchbaseCapellaAppEndpointsFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataCouchbaseCapellaAppEndpointsFilter | cdktf.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/data-sources/app_endpoints couchbase-capella_app_endpoints}
*/
export class DataCouchbaseCapellaAppEndpoints extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "couchbase-capella_app_endpoints";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCouchbaseCapellaAppEndpoints resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCouchbaseCapellaAppEndpoints to import
  * @param importFromId The id of the existing DataCouchbaseCapellaAppEndpoints that should be imported. Refer to the {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/data-sources/app_endpoints#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCouchbaseCapellaAppEndpoints to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "couchbase-capella_app_endpoints", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/data-sources/app_endpoints couchbase-capella_app_endpoints} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCouchbaseCapellaAppEndpointsConfig
  */
  public constructor(scope: Construct, id: string, config: DataCouchbaseCapellaAppEndpointsConfig) {
    super(scope, id, {
      terraformResourceType: 'couchbase-capella_app_endpoints',
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
    this._appServiceId = config.appServiceId;
    this._clusterId = config.clusterId;
    this._organizationId = config.organizationId;
    this._projectId = config.projectId;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_endpoints - computed: true, optional: false, required: false
  private _appEndpoints = new DataCouchbaseCapellaAppEndpointsAppEndpointsList(this, "app_endpoints", true);
  public get appEndpoints() {
    return this._appEndpoints;
  }

  // app_service_id - computed: false, optional: false, required: true
  private _appServiceId?: string; 
  public get appServiceId() {
    return this.getStringAttribute('app_service_id');
  }
  public set appServiceId(value: string) {
    this._appServiceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appServiceIdInput() {
    return this._appServiceId;
  }

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

  // filter - computed: false, optional: true, required: false
  private _filter = new DataCouchbaseCapellaAppEndpointsFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataCouchbaseCapellaAppEndpointsFilter) {
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
      app_service_id: cdktf.stringToTerraform(this._appServiceId),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      organization_id: cdktf.stringToTerraform(this._organizationId),
      project_id: cdktf.stringToTerraform(this._projectId),
      filter: dataCouchbaseCapellaAppEndpointsFilterToTerraform(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_service_id: {
        value: cdktf.stringToHclTerraform(this._appServiceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      filter: {
        value: dataCouchbaseCapellaAppEndpointsFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataCouchbaseCapellaAppEndpointsFilter",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
