// https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/data-sources/alb_http_router
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataYandexAlbHttpRouterConfig extends cdktf.TerraformMetaArguments {
  /**
  * The resource description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/data-sources/alb_http_router#description DataYandexAlbHttpRouter#description}
  */
  readonly description?: string;
  /**
  * The folder identifier that resource belongs to. If it is not provided, the default provider `folder-id` is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/data-sources/alb_http_router#folder_id DataYandexAlbHttpRouter#folder_id}
  */
  readonly folderId?: string;
  /**
  * HTTP Router ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/data-sources/alb_http_router#http_router_id DataYandexAlbHttpRouter#http_router_id}
  */
  readonly httpRouterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/data-sources/alb_http_router#id DataYandexAlbHttpRouter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/data-sources/alb_http_router#name DataYandexAlbHttpRouter#name}
  */
  readonly name?: string;
}
export interface DataYandexAlbHttpRouterRouteOptionsRbacPrincipalsAndPrincipalsHeadersValue {
}

export function dataYandexAlbHttpRouterRouteOptionsRbacPrincipalsAndPrincipalsHeadersValueToTerraform(struct?: DataYandexAlbHttpRouterRouteOptionsRbacPrincipalsAndPrincipalsHeadersValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexAlbHttpRouterRouteOptionsRbacPrincipalsAndPrincipalsHeadersValueToHclTerraform(struct?: DataYandexAlbHttpRouterRouteOptionsRbacPrincipalsAndPrincipalsHeadersValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexAlbHttpRouterRouteOptionsRbacPrincipalsAndPrincipalsHeadersValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexAlbHttpRouterRouteOptionsRbacPrincipalsAndPrincipalsHeadersValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbHttpRouterRouteOptionsRbacPrincipalsAndPrincipalsHeadersValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // exact - computed: true, optional: false, required: false
  public get exact() {
    return this.getStringAttribute('exact');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // regex - computed: true, optional: false, required: false
  public get regex() {
    return this.getStringAttribute('regex');
  }
}

export class DataYandexAlbHttpRouterRouteOptionsRbacPrincipalsAndPrincipalsHeadersValueList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexAlbHttpRouterRouteOptionsRbacPrincipalsAndPrincipalsHeadersValueOutputReference {
    return new DataYandexAlbHttpRouterRouteOptionsRbacPrincipalsAndPrincipalsHeadersValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexAlbHttpRouterRouteOptionsRbacPrincipalsAndPrincipalsHeaders {
}

export function dataYandexAlbHttpRouterRouteOptionsRbacPrincipalsAndPrincipalsHeadersToTerraform(struct?: DataYandexAlbHttpRouterRouteOptionsRbacPrincipalsAndPrincipalsHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexAlbHttpRouterRouteOptionsRbacPrincipalsAndPrincipalsHeadersToHclTerraform(struct?: DataYandexAlbHttpRouterRouteOptionsRbacPrincipalsAndPrincipalsHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexAlbHttpRouterRouteOptionsRbacPrincipalsAndPrincipalsHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexAlbHttpRouterRouteOptionsRbacPrincipalsAndPrincipalsHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbHttpRouterRouteOptionsRbacPrincipalsAndPrincipalsHeaders | undefined) {
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
  private _value = new DataYandexAlbHttpRouterRouteOptionsRbacPrincipalsAndPrincipalsHeadersValueList(this, "value", false);
  public get value() {
    return this._value;
  }
}

export class DataYandexAlbHttpRouterRouteOptionsRbacPrincipalsAndPrincipalsHeadersList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexAlbHttpRouterRouteOptionsRbacPrincipalsAndPrincipalsHeadersOutputReference {
    return new DataYandexAlbHttpRouterRouteOptionsRbacPrincipalsAndPrincipalsHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexAlbHttpRouterRouteOptionsRbacPrincipalsAndPrincipals {
}

export function dataYandexAlbHttpRouterRouteOptionsRbacPrincipalsAndPrincipalsToTerraform(struct?: DataYandexAlbHttpRouterRouteOptionsRbacPrincipalsAndPrincipals): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexAlbHttpRouterRouteOptionsRbacPrincipalsAndPrincipalsToHclTerraform(struct?: DataYandexAlbHttpRouterRouteOptionsRbacPrincipalsAndPrincipals): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexAlbHttpRouterRouteOptionsRbacPrincipalsAndPrincipalsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexAlbHttpRouterRouteOptionsRbacPrincipalsAndPrincipals | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbHttpRouterRouteOptionsRbacPrincipalsAndPrincipals | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // any - computed: true, optional: false, required: false
  public get any() {
    return this.getBooleanAttribute('any');
  }

  // headers - computed: true, optional: false, required: false
  private _headers = new DataYandexAlbHttpRouterRouteOptionsRbacPrincipalsAndPrincipalsHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }

  // remote_ip - computed: true, optional: false, required: false
  public get remoteIp() {
    return this.getStringAttribute('remote_ip');
  }
}

export class DataYandexAlbHttpRouterRouteOptionsRbacPrincipalsAndPrincipalsList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexAlbHttpRouterRouteOptionsRbacPrincipalsAndPrincipalsOutputReference {
    return new DataYandexAlbHttpRouterRouteOptionsRbacPrincipalsAndPrincipalsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexAlbHttpRouterRouteOptionsRbacPrincipals {
}

export function dataYandexAlbHttpRouterRouteOptionsRbacPrincipalsToTerraform(struct?: DataYandexAlbHttpRouterRouteOptionsRbacPrincipals): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexAlbHttpRouterRouteOptionsRbacPrincipalsToHclTerraform(struct?: DataYandexAlbHttpRouterRouteOptionsRbacPrincipals): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexAlbHttpRouterRouteOptionsRbacPrincipalsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexAlbHttpRouterRouteOptionsRbacPrincipals | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbHttpRouterRouteOptionsRbacPrincipals | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // and_principals - computed: true, optional: false, required: false
  private _andPrincipals = new DataYandexAlbHttpRouterRouteOptionsRbacPrincipalsAndPrincipalsList(this, "and_principals", false);
  public get andPrincipals() {
    return this._andPrincipals;
  }
}

export class DataYandexAlbHttpRouterRouteOptionsRbacPrincipalsList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexAlbHttpRouterRouteOptionsRbacPrincipalsOutputReference {
    return new DataYandexAlbHttpRouterRouteOptionsRbacPrincipalsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexAlbHttpRouterRouteOptionsRbac {
}

export function dataYandexAlbHttpRouterRouteOptionsRbacToTerraform(struct?: DataYandexAlbHttpRouterRouteOptionsRbac): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexAlbHttpRouterRouteOptionsRbacToHclTerraform(struct?: DataYandexAlbHttpRouterRouteOptionsRbac): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexAlbHttpRouterRouteOptionsRbacOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexAlbHttpRouterRouteOptionsRbac | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbHttpRouterRouteOptionsRbac | undefined) {
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

  // principals - computed: true, optional: false, required: false
  private _principals = new DataYandexAlbHttpRouterRouteOptionsRbacPrincipalsList(this, "principals", false);
  public get principals() {
    return this._principals;
  }
}

export class DataYandexAlbHttpRouterRouteOptionsRbacList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexAlbHttpRouterRouteOptionsRbacOutputReference {
    return new DataYandexAlbHttpRouterRouteOptionsRbacOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexAlbHttpRouterRouteOptions {
}

export function dataYandexAlbHttpRouterRouteOptionsToTerraform(struct?: DataYandexAlbHttpRouterRouteOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexAlbHttpRouterRouteOptionsToHclTerraform(struct?: DataYandexAlbHttpRouterRouteOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexAlbHttpRouterRouteOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexAlbHttpRouterRouteOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbHttpRouterRouteOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // rbac - computed: true, optional: false, required: false
  private _rbac = new DataYandexAlbHttpRouterRouteOptionsRbacList(this, "rbac", false);
  public get rbac() {
    return this._rbac;
  }

  // security_profile_id - computed: true, optional: false, required: false
  public get securityProfileId() {
    return this.getStringAttribute('security_profile_id');
  }
}

export class DataYandexAlbHttpRouterRouteOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexAlbHttpRouterRouteOptionsOutputReference {
    return new DataYandexAlbHttpRouterRouteOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/data-sources/alb_http_router yandex_alb_http_router}
*/
export class DataYandexAlbHttpRouter extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_alb_http_router";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataYandexAlbHttpRouter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataYandexAlbHttpRouter to import
  * @param importFromId The id of the existing DataYandexAlbHttpRouter that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/data-sources/alb_http_router#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataYandexAlbHttpRouter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_alb_http_router", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/data-sources/alb_http_router yandex_alb_http_router} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataYandexAlbHttpRouterConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataYandexAlbHttpRouterConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'yandex_alb_http_router',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.175.0',
        providerVersionConstraint: '0.175.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._folderId = config.folderId;
    this._httpRouterId = config.httpRouterId;
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // folder_id - computed: true, optional: true, required: false
  private _folderId?: string; 
  public get folderId() {
    return this.getStringAttribute('folder_id');
  }
  public set folderId(value: string) {
    this._folderId = value;
  }
  public resetFolderId() {
    this._folderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderIdInput() {
    return this._folderId;
  }

  // http_router_id - computed: true, optional: true, required: false
  private _httpRouterId?: string; 
  public get httpRouterId() {
    return this.getStringAttribute('http_router_id');
  }
  public set httpRouterId(value: string) {
    this._httpRouterId = value;
  }
  public resetHttpRouterId() {
    this._httpRouterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRouterIdInput() {
    return this._httpRouterId;
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

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // name - computed: true, optional: true, required: false
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

  // route_options - computed: true, optional: false, required: false
  private _routeOptions = new DataYandexAlbHttpRouterRouteOptionsList(this, "route_options", false);
  public get routeOptions() {
    return this._routeOptions;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      folder_id: cdktf.stringToTerraform(this._folderId),
      http_router_id: cdktf.stringToTerraform(this._httpRouterId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder_id: {
        value: cdktf.stringToHclTerraform(this._folderId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_router_id: {
        value: cdktf.stringToHclTerraform(this._httpRouterId),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
