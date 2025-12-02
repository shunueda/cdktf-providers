import * as cdktf from 'cdktf';
import { DataZedcloudProjectModulePolicyAppPolicyAppsManifestJsonInterfacesAclsActionsList,
DataZedcloudProjectModulePolicyAppPolicyAppsManifestJsonInterfacesAclsMatchesList,
DataZedcloudProjectModulePolicyAppPolicyAppsManifestJsonConfigurationList,
DataZedcloudProjectModulePolicyAppPolicyAppsManifestJsonContainerDetailList,
DataZedcloudProjectModulePolicyAppPolicyAppsManifestJsonDescList,
DataZedcloudProjectModulePolicyAppPolicyAppsManifestJsonImagesList,
DataZedcloudProjectModulePolicyAppPolicyAppsInterfacesList } from './structs400'
export interface DataZedcloudProjectModulePolicyAppPolicyAppsManifestJsonInterfacesAcls {
}

export function dataZedcloudProjectModulePolicyAppPolicyAppsManifestJsonInterfacesAclsToTerraform(struct?: DataZedcloudProjectModulePolicyAppPolicyAppsManifestJsonInterfacesAcls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyAppPolicyAppsManifestJsonInterfacesAclsToHclTerraform(struct?: DataZedcloudProjectModulePolicyAppPolicyAppsManifestJsonInterfacesAcls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyAppPolicyAppsManifestJsonInterfacesAclsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyAppPolicyAppsManifestJsonInterfacesAcls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyAppPolicyAppsManifestJsonInterfacesAcls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // actions - computed: true, optional: false, required: false
  private _actions = new DataZedcloudProjectModulePolicyAppPolicyAppsManifestJsonInterfacesAclsActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }

  // matches - computed: true, optional: false, required: false
  private _matches = new DataZedcloudProjectModulePolicyAppPolicyAppsManifestJsonInterfacesAclsMatchesList(this, "matches", false);
  public get matches() {
    return this._matches;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataZedcloudProjectModulePolicyAppPolicyAppsManifestJsonInterfacesAclsList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyAppPolicyAppsManifestJsonInterfacesAclsOutputReference {
    return new DataZedcloudProjectModulePolicyAppPolicyAppsManifestJsonInterfacesAclsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyAppPolicyAppsManifestJsonInterfaces {
}

export function dataZedcloudProjectModulePolicyAppPolicyAppsManifestJsonInterfacesToTerraform(struct?: DataZedcloudProjectModulePolicyAppPolicyAppsManifestJsonInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyAppPolicyAppsManifestJsonInterfacesToHclTerraform(struct?: DataZedcloudProjectModulePolicyAppPolicyAppsManifestJsonInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyAppPolicyAppsManifestJsonInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyAppPolicyAppsManifestJsonInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyAppPolicyAppsManifestJsonInterfaces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // acls - computed: true, optional: false, required: false
  private _acls = new DataZedcloudProjectModulePolicyAppPolicyAppsManifestJsonInterfacesAclsList(this, "acls", false);
  public get acls() {
    return this._acls;
  }

  // directattach - computed: true, optional: false, required: false
  public get directattach() {
    return this.getBooleanAttribute('directattach');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // privateip - computed: true, optional: false, required: false
  public get privateip() {
    return this.getBooleanAttribute('privateip');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataZedcloudProjectModulePolicyAppPolicyAppsManifestJsonInterfacesList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyAppPolicyAppsManifestJsonInterfacesOutputReference {
    return new DataZedcloudProjectModulePolicyAppPolicyAppsManifestJsonInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyAppPolicyAppsManifestJsonModule {
}

export function dataZedcloudProjectModulePolicyAppPolicyAppsManifestJsonModuleToTerraform(struct?: DataZedcloudProjectModulePolicyAppPolicyAppsManifestJsonModule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyAppPolicyAppsManifestJsonModuleToHclTerraform(struct?: DataZedcloudProjectModulePolicyAppPolicyAppsManifestJsonModule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyAppPolicyAppsManifestJsonModuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyAppPolicyAppsManifestJsonModule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyAppPolicyAppsManifestJsonModule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // environment - computed: true, optional: false, required: false
  private _environment = new cdktf.StringMap(this, "environment");
  public get environment() {
    return this._environment;
  }

  // module_type - computed: true, optional: false, required: false
  public get moduleType() {
    return this.getStringAttribute('module_type');
  }

  // routes - computed: true, optional: false, required: false
  private _routes = new cdktf.StringMap(this, "routes");
  public get routes() {
    return this._routes;
  }

  // twin_detail - computed: true, optional: false, required: false
  public get twinDetail() {
    return this.getStringAttribute('twin_detail');
  }
}

export class DataZedcloudProjectModulePolicyAppPolicyAppsManifestJsonModuleList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyAppPolicyAppsManifestJsonModuleOutputReference {
    return new DataZedcloudProjectModulePolicyAppPolicyAppsManifestJsonModuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyAppPolicyAppsManifestJsonOwner {
}

export function dataZedcloudProjectModulePolicyAppPolicyAppsManifestJsonOwnerToTerraform(struct?: DataZedcloudProjectModulePolicyAppPolicyAppsManifestJsonOwner): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyAppPolicyAppsManifestJsonOwnerToHclTerraform(struct?: DataZedcloudProjectModulePolicyAppPolicyAppsManifestJsonOwner): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyAppPolicyAppsManifestJsonOwnerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyAppPolicyAppsManifestJsonOwner | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyAppPolicyAppsManifestJsonOwner | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // company - computed: true, optional: false, required: false
  public get company() {
    return this.getStringAttribute('company');
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // group - computed: true, optional: false, required: false
  public get group() {
    return this.getStringAttribute('group');
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }

  // website - computed: true, optional: false, required: false
  public get website() {
    return this.getStringAttribute('website');
  }
}

export class DataZedcloudProjectModulePolicyAppPolicyAppsManifestJsonOwnerList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyAppPolicyAppsManifestJsonOwnerOutputReference {
    return new DataZedcloudProjectModulePolicyAppPolicyAppsManifestJsonOwnerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyAppPolicyAppsManifestJsonPermissions {
}

export function dataZedcloudProjectModulePolicyAppPolicyAppsManifestJsonPermissionsToTerraform(struct?: DataZedcloudProjectModulePolicyAppPolicyAppsManifestJsonPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyAppPolicyAppsManifestJsonPermissionsToHclTerraform(struct?: DataZedcloudProjectModulePolicyAppPolicyAppsManifestJsonPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyAppPolicyAppsManifestJsonPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyAppPolicyAppsManifestJsonPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyAppPolicyAppsManifestJsonPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}

export class DataZedcloudProjectModulePolicyAppPolicyAppsManifestJsonPermissionsList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyAppPolicyAppsManifestJsonPermissionsOutputReference {
    return new DataZedcloudProjectModulePolicyAppPolicyAppsManifestJsonPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyAppPolicyAppsManifestJsonResources {
}

export function dataZedcloudProjectModulePolicyAppPolicyAppsManifestJsonResourcesToTerraform(struct?: DataZedcloudProjectModulePolicyAppPolicyAppsManifestJsonResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyAppPolicyAppsManifestJsonResourcesToHclTerraform(struct?: DataZedcloudProjectModulePolicyAppPolicyAppsManifestJsonResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyAppPolicyAppsManifestJsonResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyAppPolicyAppsManifestJsonResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyAppPolicyAppsManifestJsonResources | undefined) {
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

export class DataZedcloudProjectModulePolicyAppPolicyAppsManifestJsonResourcesList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyAppPolicyAppsManifestJsonResourcesOutputReference {
    return new DataZedcloudProjectModulePolicyAppPolicyAppsManifestJsonResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyAppPolicyAppsManifestJson {
}

export function dataZedcloudProjectModulePolicyAppPolicyAppsManifestJsonToTerraform(struct?: DataZedcloudProjectModulePolicyAppPolicyAppsManifestJson): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyAppPolicyAppsManifestJsonToHclTerraform(struct?: DataZedcloudProjectModulePolicyAppPolicyAppsManifestJson): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyAppPolicyAppsManifestJsonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyAppPolicyAppsManifestJson | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyAppPolicyAppsManifestJson | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ac_kind - computed: true, optional: false, required: false
  public get acKind() {
    return this.getStringAttribute('ac_kind');
  }

  // ac_version - computed: true, optional: false, required: false
  public get acVersion() {
    return this.getStringAttribute('ac_version');
  }

  // app_type - computed: true, optional: false, required: false
  public get appType() {
    return this.getStringAttribute('app_type');
  }

  // configuration - computed: true, optional: false, required: false
  private _configuration = new DataZedcloudProjectModulePolicyAppPolicyAppsManifestJsonConfigurationList(this, "configuration", false);
  public get configuration() {
    return this._configuration;
  }

  // container_detail - computed: true, optional: false, required: false
  private _containerDetail = new DataZedcloudProjectModulePolicyAppPolicyAppsManifestJsonContainerDetailList(this, "container_detail", false);
  public get containerDetail() {
    return this._containerDetail;
  }

  // cpu_pinning_enabled - computed: true, optional: false, required: false
  public get cpuPinningEnabled() {
    return this.getBooleanAttribute('cpu_pinning_enabled');
  }

  // deployment_type - computed: true, optional: false, required: false
  public get deploymentType() {
    return this.getStringAttribute('deployment_type');
  }

  // desc - computed: true, optional: false, required: false
  private _desc = new DataZedcloudProjectModulePolicyAppPolicyAppsManifestJsonDescList(this, "desc", false);
  public get desc() {
    return this._desc;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // disable_v_t_p_m - computed: true, optional: false, required: false
  public get disableVTPM() {
    return this.getBooleanAttribute('disable_v_t_p_m');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // docker_compose_tar_image_name - computed: true, optional: false, required: false
  public get dockerComposeTarImageName() {
    return this.getStringAttribute('docker_compose_tar_image_name');
  }

  // docker_compose_yaml_text - computed: true, optional: false, required: false
  public get dockerComposeYamlText() {
    return this.getStringAttribute('docker_compose_yaml_text');
  }

  // enable_oem_win_license_key - computed: true, optional: false, required: false
  public get enableOemWinLicenseKey() {
    return this.getBooleanAttribute('enable_oem_win_license_key');
  }

  // enablevnc - computed: true, optional: false, required: false
  public get enablevnc() {
    return this.getBooleanAttribute('enablevnc');
  }

  // images - computed: true, optional: false, required: false
  private _images = new DataZedcloudProjectModulePolicyAppPolicyAppsManifestJsonImagesList(this, "images", false);
  public get images() {
    return this._images;
  }

  // interfaces - computed: true, optional: false, required: false
  private _interfaces = new DataZedcloudProjectModulePolicyAppPolicyAppsManifestJsonInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }

  // module - computed: true, optional: false, required: false
  private _module = new DataZedcloudProjectModulePolicyAppPolicyAppsManifestJsonModuleList(this, "module", false);
  public get module() {
    return this._module;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // owner - computed: true, optional: false, required: false
  private _owner = new DataZedcloudProjectModulePolicyAppPolicyAppsManifestJsonOwnerList(this, "owner", false);
  public get owner() {
    return this._owner;
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new DataZedcloudProjectModulePolicyAppPolicyAppsManifestJsonPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // persistent_runtime_size_bytes - computed: true, optional: false, required: false
  public get persistentRuntimeSizeBytes() {
    return this.getStringAttribute('persistent_runtime_size_bytes');
  }

  // resources - computed: true, optional: false, required: false
  private _resources = new DataZedcloudProjectModulePolicyAppPolicyAppsManifestJsonResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }

  // runtime_protocol_version - computed: true, optional: false, required: false
  public get runtimeProtocolVersion() {
    return this.getStringAttribute('runtime_protocol_version');
  }

  // runtime_version - computed: true, optional: false, required: false
  public get runtimeVersion() {
    return this.getStringAttribute('runtime_version');
  }

  // vmmode - computed: true, optional: false, required: false
  public get vmmode() {
    return this.getStringAttribute('vmmode');
  }
}

export class DataZedcloudProjectModulePolicyAppPolicyAppsManifestJsonList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyAppPolicyAppsManifestJsonOutputReference {
    return new DataZedcloudProjectModulePolicyAppPolicyAppsManifestJsonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyAppPolicyAppsParentDetail {
}

export function dataZedcloudProjectModulePolicyAppPolicyAppsParentDetailToTerraform(struct?: DataZedcloudProjectModulePolicyAppPolicyAppsParentDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyAppPolicyAppsParentDetailToHclTerraform(struct?: DataZedcloudProjectModulePolicyAppPolicyAppsParentDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyAppPolicyAppsParentDetailOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyAppPolicyAppsParentDetail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyAppPolicyAppsParentDetail | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id_of_parent_object - computed: true, optional: false, required: false
  public get idOfParentObject() {
    return this.getStringAttribute('id_of_parent_object');
  }

  // reference_exists - computed: true, optional: false, required: false
  public get referenceExists() {
    return this.getBooleanAttribute('reference_exists');
  }

  // update_available - computed: true, optional: false, required: false
  public get updateAvailable() {
    return this.getBooleanAttribute('update_available');
  }

  // version_of_parent_object - computed: true, optional: false, required: false
  public get versionOfParentObject() {
    return this.getNumberAttribute('version_of_parent_object');
  }
}

export class DataZedcloudProjectModulePolicyAppPolicyAppsParentDetailList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyAppPolicyAppsParentDetailOutputReference {
    return new DataZedcloudProjectModulePolicyAppPolicyAppsParentDetailOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyAppPolicyApps {
}

export function dataZedcloudProjectModulePolicyAppPolicyAppsToTerraform(struct?: DataZedcloudProjectModulePolicyAppPolicyApps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyAppPolicyAppsToHclTerraform(struct?: DataZedcloudProjectModulePolicyAppPolicyApps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyAppPolicyAppsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyAppPolicyApps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyAppPolicyApps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // app_id - computed: true, optional: false, required: false
  public get appId() {
    return this.getStringAttribute('app_id');
  }

  // app_version - computed: true, optional: false, required: false
  public get appVersion() {
    return this.getStringAttribute('app_version');
  }

  // cpus - computed: true, optional: false, required: false
  public get cpus() {
    return this.getNumberAttribute('cpus');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // drives - computed: true, optional: false, required: false
  public get drives() {
    return this.getNumberAttribute('drives');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interfaces - computed: true, optional: false, required: false
  private _interfaces = new DataZedcloudProjectModulePolicyAppPolicyAppsInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }

  // manifest_json - computed: true, optional: false, required: false
  private _manifestJson = new DataZedcloudProjectModulePolicyAppPolicyAppsManifestJsonList(this, "manifest_json", false);
  public get manifestJson() {
    return this._manifestJson;
  }

  // memory - computed: true, optional: false, required: false
  public get memory() {
    return this.getNumberAttribute('memory');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // name_app_part - computed: true, optional: false, required: false
  public get nameAppPart() {
    return this.getStringAttribute('name_app_part');
  }

  // name_project_part - computed: true, optional: false, required: false
  public get nameProjectPart() {
    return this.getStringAttribute('name_project_part');
  }

  // naming_scheme - computed: true, optional: false, required: false
  public get namingScheme() {
    return this.getStringAttribute('naming_scheme');
  }

  // networks - computed: true, optional: false, required: false
  public get networks() {
    return this.getNumberAttribute('networks');
  }

  // origin_type - computed: true, optional: false, required: false
  public get originType() {
    return this.getStringAttribute('origin_type');
  }

  // parent_detail - computed: true, optional: false, required: false
  private _parentDetail = new DataZedcloudProjectModulePolicyAppPolicyAppsParentDetailList(this, "parent_detail", false);
  public get parentDetail() {
    return this._parentDetail;
  }

  // start_delay_in_seconds - computed: true, optional: false, required: false
  public get startDelayInSeconds() {
    return this.getNumberAttribute('start_delay_in_seconds');
  }

  // storage - computed: true, optional: false, required: false
  public get storage() {
    return this.getNumberAttribute('storage');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }
}

export class DataZedcloudProjectModulePolicyAppPolicyAppsList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyAppPolicyAppsOutputReference {
    return new DataZedcloudProjectModulePolicyAppPolicyAppsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyAppPolicy {
}

export function dataZedcloudProjectModulePolicyAppPolicyToTerraform(struct?: DataZedcloudProjectModulePolicyAppPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyAppPolicyToHclTerraform(struct?: DataZedcloudProjectModulePolicyAppPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyAppPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyAppPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyAppPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // apps - computed: true, optional: false, required: false
  private _apps = new DataZedcloudProjectModulePolicyAppPolicyAppsList(this, "apps", false);
  public get apps() {
    return this._apps;
  }
}

export class DataZedcloudProjectModulePolicyAppPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyAppPolicyOutputReference {
    return new DataZedcloudProjectModulePolicyAppPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyAttestationPolicy {
}

export function dataZedcloudProjectModulePolicyAttestationPolicyToTerraform(struct?: DataZedcloudProjectModulePolicyAttestationPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyAttestationPolicyToHclTerraform(struct?: DataZedcloudProjectModulePolicyAttestationPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyAttestationPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyAttestationPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyAttestationPolicy | undefined) {
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataZedcloudProjectModulePolicyAttestationPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyAttestationPolicyOutputReference {
    return new DataZedcloudProjectModulePolicyAttestationPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollmentGroupCertificateEnrollment {
}

export function dataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollmentGroupCertificateEnrollmentToTerraform(struct?: DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollmentGroupCertificateEnrollment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollmentGroupCertificateEnrollmentToHclTerraform(struct?: DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollmentGroupCertificateEnrollment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollmentGroupCertificateEnrollmentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollmentGroupCertificateEnrollment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollmentGroupCertificateEnrollment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group_name - computed: true, optional: false, required: false
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
}

export class DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollmentGroupCertificateEnrollmentList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollmentGroupCertificateEnrollmentOutputReference {
    return new DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollmentGroupCertificateEnrollmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollment {
}

export function dataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollmentToTerraform(struct?: DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollmentToHclTerraform(struct?: DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollmentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group_certificate_enrollment - computed: true, optional: false, required: false
  private _groupCertificateEnrollment = new DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollmentGroupCertificateEnrollmentList(this, "group_certificate_enrollment", false);
  public get groupCertificateEnrollment() {
    return this._groupCertificateEnrollment;
  }

  // individual_certificate_enrollment - computed: true, optional: false, required: false
  public get individualCertificateEnrollment() {
    return this.getStringAttribute('individual_certificate_enrollment');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollmentList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollmentOutputReference {
    return new DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentGroupSymmetricKeyEnrollment {
}

export function dataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentGroupSymmetricKeyEnrollmentToTerraform(struct?: DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentGroupSymmetricKeyEnrollment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentGroupSymmetricKeyEnrollmentToHclTerraform(struct?: DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentGroupSymmetricKeyEnrollment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentGroupSymmetricKeyEnrollmentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentGroupSymmetricKeyEnrollment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentGroupSymmetricKeyEnrollment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group_name - computed: true, optional: false, required: false
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
}

export class DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentGroupSymmetricKeyEnrollmentList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentGroupSymmetricKeyEnrollmentOutputReference {
    return new DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentGroupSymmetricKeyEnrollmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentIndividualSymmetricKeyEnrollment {
}

export function dataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentIndividualSymmetricKeyEnrollmentToTerraform(struct?: DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentIndividualSymmetricKeyEnrollment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentIndividualSymmetricKeyEnrollmentToHclTerraform(struct?: DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentIndividualSymmetricKeyEnrollment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentIndividualSymmetricKeyEnrollmentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentIndividualSymmetricKeyEnrollment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentIndividualSymmetricKeyEnrollment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // registration_id - computed: true, optional: false, required: false
  public get registrationId() {
    return this.getStringAttribute('registration_id');
  }
}

export class DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentIndividualSymmetricKeyEnrollmentList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentIndividualSymmetricKeyEnrollmentOutputReference {
    return new DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentIndividualSymmetricKeyEnrollmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollment {
}

export function dataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentToTerraform(struct?: DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentToHclTerraform(struct?: DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group_symmetric_key_enrollment - computed: true, optional: false, required: false
  private _groupSymmetricKeyEnrollment = new DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentGroupSymmetricKeyEnrollmentList(this, "group_symmetric_key_enrollment", false);
  public get groupSymmetricKeyEnrollment() {
    return this._groupSymmetricKeyEnrollment;
  }

  // individual_symmetric_key_enrollment - computed: true, optional: false, required: false
  private _individualSymmetricKeyEnrollment = new DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentIndividualSymmetricKeyEnrollmentList(this, "individual_symmetric_key_enrollment", false);
  public get individualSymmetricKeyEnrollment() {
    return this._individualSymmetricKeyEnrollment;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentOutputReference {
    return new DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentTpmEnrollment {
}

export function dataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentTpmEnrollmentToTerraform(struct?: DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentTpmEnrollment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentTpmEnrollmentToHclTerraform(struct?: DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentTpmEnrollment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentTpmEnrollmentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentTpmEnrollment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentTpmEnrollment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentTpmEnrollmentList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentTpmEnrollmentOutputReference {
    return new DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentTpmEnrollmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollment {
}

export function dataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentToTerraform(struct?: DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentToHclTerraform(struct?: DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allocation_policy - computed: true, optional: false, required: false
  public get allocationPolicy() {
    return this.getStringAttribute('allocation_policy');
  }

  // attached_iot_hubs_name - computed: true, optional: false, required: false
  public get attachedIotHubsName() {
    return this.getListAttribute('attached_iot_hubs_name');
  }

  // certificate_enrollment - computed: true, optional: false, required: false
  private _certificateEnrollment = new DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollmentList(this, "certificate_enrollment", false);
  public get certificateEnrollment() {
    return this._certificateEnrollment;
  }

  // enable_iot_edge_device - computed: true, optional: false, required: false
  public get enableIotEdgeDevice() {
    return this.getBooleanAttribute('enable_iot_edge_device');
  }

  // mechanism - computed: true, optional: false, required: false
  public get mechanism() {
    return this.getStringAttribute('mechanism');
  }

  // symmetric_key_enrollment - computed: true, optional: false, required: false
  private _symmetricKeyEnrollment = new DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentList(this, "symmetric_key_enrollment", false);
  public get symmetricKeyEnrollment() {
    return this._symmetricKeyEnrollment;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // tpm_enrollment - computed: true, optional: false, required: false
  private _tpmEnrollment = new DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentTpmEnrollmentList(this, "tpm_enrollment", false);
  public get tpmEnrollment() {
    return this._tpmEnrollment;
  }
}

export class DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentOutputReference {
    return new DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetailSKU {
}

export function dataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetailSKUToTerraform(struct?: DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetailSKU): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetailSKUToHclTerraform(struct?: DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetailSKU): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetailSKUOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetailSKU | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetailSKU | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // capacity - computed: true, optional: false, required: false
  public get capacity() {
    return this.getStringAttribute('capacity');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // tier - computed: true, optional: false, required: false
  public get tier() {
    return this.getStringAttribute('tier');
  }
}

export class DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetailSKUList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetailSKUOutputReference {
    return new DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetailSKUOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetail {
}

export function dataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetailToTerraform(struct?: DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetailToHclTerraform(struct?: DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetailOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetail | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // create_by_default - computed: true, optional: false, required: false
  public get createByDefault() {
    return this.getBooleanAttribute('create_by_default');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // resource_group_name - computed: true, optional: false, required: false
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }

  // s_k_u - computed: true, optional: false, required: false
  private _sKU = new DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetailSKUList(this, "s_k_u", false);
  public get sKU() {
    return this._sKU;
  }

  // subscription_id - computed: true, optional: false, required: false
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
}

export class DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetailList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetailOutputReference {
    return new DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetailOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsService {
}

export function dataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceToTerraform(struct?: DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceToHclTerraform(struct?: DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsService | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enrollment - computed: true, optional: false, required: false
  private _enrollment = new DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentList(this, "enrollment", false);
  public get enrollment() {
    return this._enrollment;
  }

  // service_detail - computed: true, optional: false, required: false
  private _serviceDetail = new DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetailList(this, "service_detail", false);
  public get serviceDetail() {
    return this._serviceDetail;
  }
}

export class DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceOutputReference {
    return new DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetailSKU {
}

export function dataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetailSKUToTerraform(struct?: DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetailSKU): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetailSKUToHclTerraform(struct?: DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetailSKU): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetailSKUOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetailSKU | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetailSKU | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // capacity - computed: true, optional: false, required: false
  public get capacity() {
    return this.getStringAttribute('capacity');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // tier - computed: true, optional: false, required: false
  public get tier() {
    return this.getStringAttribute('tier');
  }
}

export class DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetailSKUList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetailSKUOutputReference {
    return new DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetailSKUOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetail {
}

export function dataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetailToTerraform(struct?: DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetailToHclTerraform(struct?: DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetailOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetail | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // create_by_default - computed: true, optional: false, required: false
  public get createByDefault() {
    return this.getBooleanAttribute('create_by_default');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // resource_group_name - computed: true, optional: false, required: false
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }

  // s_k_u - computed: true, optional: false, required: false
  private _sKU = new DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetailSKUList(this, "s_k_u", false);
  public get sKU() {
    return this._sKU;
  }

  // subscription_id - computed: true, optional: false, required: false
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
}

export class DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetailList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetailOutputReference {
    return new DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetailOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesIotHubService {
}

export function dataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesIotHubServiceToTerraform(struct?: DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesIotHubService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesIotHubServiceToHclTerraform(struct?: DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesIotHubService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesIotHubServiceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesIotHubService | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesIotHubService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // service_detail - computed: true, optional: false, required: false
  private _serviceDetail = new DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetailList(this, "service_detail", false);
  public get serviceDetail() {
    return this._serviceDetail;
  }
}

export class DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesIotHubServiceList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesIotHubServiceOutputReference {
    return new DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesIotHubServiceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesResourceGroup {
}

export function dataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesResourceGroupToTerraform(struct?: DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesResourceGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesResourceGroupToHclTerraform(struct?: DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesResourceGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesResourceGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesResourceGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesResourceGroup | undefined) {
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

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // subscription_id - computed: true, optional: false, required: false
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
}

export class DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesResourceGroupList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesResourceGroupOutputReference {
    return new DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesResourceGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServices {
}

export function dataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesToTerraform(struct?: DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesToHclTerraform(struct?: DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dps_service - computed: true, optional: false, required: false
  private _dpsService = new DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceList(this, "dps_service", false);
  public get dpsService() {
    return this._dpsService;
  }

  // iot_hub_service - computed: true, optional: false, required: false
  private _iotHubService = new DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesIotHubServiceList(this, "iot_hub_service", false);
  public get iotHubService() {
    return this._iotHubService;
  }

  // resource_group - computed: true, optional: false, required: false
  private _resourceGroup = new DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesResourceGroupList(this, "resource_group", false);
  public get resourceGroup() {
    return this._resourceGroup;
  }
}

export class DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesOutputReference {
    return new DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyAzurePolicyCertificateEcdsaEncryption {
}

export function dataZedcloudProjectModulePolicyAzurePolicyCertificateEcdsaEncryptionToTerraform(struct?: DataZedcloudProjectModulePolicyAzurePolicyCertificateEcdsaEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyAzurePolicyCertificateEcdsaEncryptionToHclTerraform(struct?: DataZedcloudProjectModulePolicyAzurePolicyCertificateEcdsaEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyAzurePolicyCertificateEcdsaEncryptionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyAzurePolicyCertificateEcdsaEncryption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyAzurePolicyCertificateEcdsaEncryption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // curve - computed: true, optional: false, required: false
  public get curve() {
    return this.getStringAttribute('curve');
  }
}

export class DataZedcloudProjectModulePolicyAzurePolicyCertificateEcdsaEncryptionList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyAzurePolicyCertificateEcdsaEncryptionOutputReference {
    return new DataZedcloudProjectModulePolicyAzurePolicyCertificateEcdsaEncryptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyAzurePolicyCertificateIssuer {
}

export function dataZedcloudProjectModulePolicyAzurePolicyCertificateIssuerToTerraform(struct?: DataZedcloudProjectModulePolicyAzurePolicyCertificateIssuer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyAzurePolicyCertificateIssuerToHclTerraform(struct?: DataZedcloudProjectModulePolicyAzurePolicyCertificateIssuer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyAzurePolicyCertificateIssuerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyAzurePolicyCertificateIssuer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyAzurePolicyCertificateIssuer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // common_name - computed: true, optional: false, required: false
  public get commonName() {
    return this.getStringAttribute('common_name');
  }

  // country - computed: true, optional: false, required: false
  public get country() {
    return this.getListAttribute('country');
  }

  // locality - computed: true, optional: false, required: false
  public get locality() {
    return this.getListAttribute('locality');
  }

  // organization - computed: true, optional: false, required: false
  public get organization() {
    return this.getListAttribute('organization');
  }

  // organizational_unit - computed: true, optional: false, required: false
  public get organizationalUnit() {
    return this.getListAttribute('organizational_unit');
  }

  // postal_code - computed: true, optional: false, required: false
  public get postalCode() {
    return this.getListAttribute('postal_code');
  }

  // province - computed: true, optional: false, required: false
  public get province() {
    return this.getListAttribute('province');
  }

  // serial_number - computed: true, optional: false, required: false
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }
}

export class DataZedcloudProjectModulePolicyAzurePolicyCertificateIssuerList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyAzurePolicyCertificateIssuerOutputReference {
    return new DataZedcloudProjectModulePolicyAzurePolicyCertificateIssuerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyAzurePolicyCertificateRsaEcryption {
}

export function dataZedcloudProjectModulePolicyAzurePolicyCertificateRsaEcryptionToTerraform(struct?: DataZedcloudProjectModulePolicyAzurePolicyCertificateRsaEcryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyAzurePolicyCertificateRsaEcryptionToHclTerraform(struct?: DataZedcloudProjectModulePolicyAzurePolicyCertificateRsaEcryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyAzurePolicyCertificateRsaEcryptionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyAzurePolicyCertificateRsaEcryption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyAzurePolicyCertificateRsaEcryption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // rsa_bits - computed: true, optional: false, required: false
  public get rsaBits() {
    return this.getStringAttribute('rsa_bits');
  }
}

export class DataZedcloudProjectModulePolicyAzurePolicyCertificateRsaEcryptionList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyAzurePolicyCertificateRsaEcryptionOutputReference {
    return new DataZedcloudProjectModulePolicyAzurePolicyCertificateRsaEcryptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyAzurePolicyCertificateSanValues {
}

export function dataZedcloudProjectModulePolicyAzurePolicyCertificateSanValuesToTerraform(struct?: DataZedcloudProjectModulePolicyAzurePolicyCertificateSanValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyAzurePolicyCertificateSanValuesToHclTerraform(struct?: DataZedcloudProjectModulePolicyAzurePolicyCertificateSanValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyAzurePolicyCertificateSanValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyAzurePolicyCertificateSanValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyAzurePolicyCertificateSanValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dns - computed: true, optional: false, required: false
  public get dns() {
    return this.getListAttribute('dns');
  }

  // emaild_ids - computed: true, optional: false, required: false
  public get emaildIds() {
    return this.getListAttribute('emaild_ids');
  }

  // hosts - computed: true, optional: false, required: false
  public get hosts() {
    return this.getListAttribute('hosts');
  }

  // ips - computed: true, optional: false, required: false
  public get ips() {
    return this.getListAttribute('ips');
  }

  // upns - computed: true, optional: false, required: false
  public get upns() {
    return this.getListAttribute('upns');
  }

  // uris - computed: true, optional: false, required: false
  public get uris() {
    return this.getListAttribute('uris');
  }
}

export class DataZedcloudProjectModulePolicyAzurePolicyCertificateSanValuesList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyAzurePolicyCertificateSanValuesOutputReference {
    return new DataZedcloudProjectModulePolicyAzurePolicyCertificateSanValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyAzurePolicyCertificateSubject {
}

export function dataZedcloudProjectModulePolicyAzurePolicyCertificateSubjectToTerraform(struct?: DataZedcloudProjectModulePolicyAzurePolicyCertificateSubject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyAzurePolicyCertificateSubjectToHclTerraform(struct?: DataZedcloudProjectModulePolicyAzurePolicyCertificateSubject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyAzurePolicyCertificateSubjectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyAzurePolicyCertificateSubject | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyAzurePolicyCertificateSubject | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // common_name - computed: true, optional: false, required: false
  public get commonName() {
    return this.getStringAttribute('common_name');
  }

  // country - computed: true, optional: false, required: false
  public get country() {
    return this.getListAttribute('country');
  }

  // locality - computed: true, optional: false, required: false
  public get locality() {
    return this.getListAttribute('locality');
  }

  // organization - computed: true, optional: false, required: false
  public get organization() {
    return this.getListAttribute('organization');
  }

  // organizational_unit - computed: true, optional: false, required: false
  public get organizationalUnit() {
    return this.getListAttribute('organizational_unit');
  }

  // postal_code - computed: true, optional: false, required: false
  public get postalCode() {
    return this.getListAttribute('postal_code');
  }

  // province - computed: true, optional: false, required: false
  public get province() {
    return this.getListAttribute('province');
  }

  // serial_number - computed: true, optional: false, required: false
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }
}

export class DataZedcloudProjectModulePolicyAzurePolicyCertificateSubjectList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyAzurePolicyCertificateSubjectOutputReference {
    return new DataZedcloudProjectModulePolicyAzurePolicyCertificateSubjectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyAzurePolicyCertificate {
}

export function dataZedcloudProjectModulePolicyAzurePolicyCertificateToTerraform(struct?: DataZedcloudProjectModulePolicyAzurePolicyCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyAzurePolicyCertificateToHclTerraform(struct?: DataZedcloudProjectModulePolicyAzurePolicyCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyAzurePolicyCertificateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyAzurePolicyCertificate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyAzurePolicyCertificate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // basic_contraints_valid - computed: true, optional: false, required: false
  public get basicContraintsValid() {
    return this.getBooleanAttribute('basic_contraints_valid');
  }

  // cert - computed: true, optional: false, required: false
  public get cert() {
    return this.getStringAttribute('cert');
  }

  // crypto_key - computed: true, optional: false, required: false
  public get cryptoKey() {
    return this.getStringAttribute('crypto_key');
  }

  // ecdsa_encryption - computed: true, optional: false, required: false
  private _ecdsaEncryption = new DataZedcloudProjectModulePolicyAzurePolicyCertificateEcdsaEncryptionList(this, "ecdsa_encryption", false);
  public get ecdsaEncryption() {
    return this._ecdsaEncryption;
  }

  // encrypted_secrets - computed: true, optional: false, required: false
  private _encryptedSecrets = new cdktf.StringMap(this, "encrypted_secrets");
  public get encryptedSecrets() {
    return this._encryptedSecrets;
  }

  // exportable - computed: true, optional: false, required: false
  public get exportable() {
    return this.getBooleanAttribute('exportable');
  }

  // extended_key_usage - computed: true, optional: false, required: false
  public get extendedKeyUsage() {
    return this.getListAttribute('extended_key_usage');
  }

  // issuer - computed: true, optional: false, required: false
  private _issuer = new DataZedcloudProjectModulePolicyAzurePolicyCertificateIssuerList(this, "issuer", false);
  public get issuer() {
    return this._issuer;
  }

  // key_usage - computed: true, optional: false, required: false
  public get keyUsage() {
    return this.getNumberAttribute('key_usage');
  }

  // pass_phrase - computed: true, optional: false, required: false
  public get passPhrase() {
    return this.getStringAttribute('pass_phrase');
  }

  // public_key - computed: true, optional: false, required: false
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }

  // public_key_algorithm - computed: true, optional: false, required: false
  public get publicKeyAlgorithm() {
    return this.getStringAttribute('public_key_algorithm');
  }

  // pvt_key - computed: true, optional: false, required: false
  public get pvtKey() {
    return this.getStringAttribute('pvt_key');
  }

  // reuse_key - computed: true, optional: false, required: false
  public get reuseKey() {
    return this.getBooleanAttribute('reuse_key');
  }

  // rsa_ecryption - computed: true, optional: false, required: false
  private _rsaEcryption = new DataZedcloudProjectModulePolicyAzurePolicyCertificateRsaEcryptionList(this, "rsa_ecryption", false);
  public get rsaEcryption() {
    return this._rsaEcryption;
  }

  // san_values - computed: true, optional: false, required: false
  private _sanValues = new DataZedcloudProjectModulePolicyAzurePolicyCertificateSanValuesList(this, "san_values", false);
  public get sanValues() {
    return this._sanValues;
  }

  // serial_number - computed: true, optional: false, required: false
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }

  // signature_algorithm - computed: true, optional: false, required: false
  public get signatureAlgorithm() {
    return this.getStringAttribute('signature_algorithm');
  }

  // subject - computed: true, optional: false, required: false
  private _subject = new DataZedcloudProjectModulePolicyAzurePolicyCertificateSubjectList(this, "subject", false);
  public get subject() {
    return this._subject;
  }

  // valid_from - computed: true, optional: false, required: false
  public get validFrom() {
    return this.getStringAttribute('valid_from');
  }

  // valid_till - computed: true, optional: false, required: false
  public get validTill() {
    return this.getStringAttribute('valid_till');
  }
}

export class DataZedcloudProjectModulePolicyAzurePolicyCertificateList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyAzurePolicyCertificateOutputReference {
    return new DataZedcloudProjectModulePolicyAzurePolicyCertificateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyAzurePolicy {
}

export function dataZedcloudProjectModulePolicyAzurePolicyToTerraform(struct?: DataZedcloudProjectModulePolicyAzurePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyAzurePolicyToHclTerraform(struct?: DataZedcloudProjectModulePolicyAzurePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyAzurePolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyAzurePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyAzurePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // app_id - computed: true, optional: false, required: false
  public get appId() {
    return this.getStringAttribute('app_id');
  }

  // app_password - computed: true, optional: false, required: false
  public get appPassword() {
    return this.getStringAttribute('app_password');
  }

  // azure_resource_and_services - computed: true, optional: false, required: false
  private _azureResourceAndServices = new DataZedcloudProjectModulePolicyAzurePolicyAzureResourceAndServicesList(this, "azure_resource_and_services", false);
  public get azureResourceAndServices() {
    return this._azureResourceAndServices;
  }

  // certificate - computed: true, optional: false, required: false
  private _certificate = new DataZedcloudProjectModulePolicyAzurePolicyCertificateList(this, "certificate", false);
  public get certificate() {
    return this._certificate;
  }

  // crypto_key - computed: true, optional: false, required: false
  public get cryptoKey() {
    return this.getStringAttribute('crypto_key');
  }

  // custom_deployment_managed - computed: true, optional: false, required: false
  public get customDeploymentManaged() {
    return this.getBooleanAttribute('custom_deployment_managed');
  }

  // encrypted_secrets - computed: true, optional: false, required: false
  private _encryptedSecrets = new cdktf.StringMap(this, "encrypted_secrets");
  public get encryptedSecrets() {
    return this._encryptedSecrets;
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
}

export class DataZedcloudProjectModulePolicyAzurePolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyAzurePolicyOutputReference {
    return new DataZedcloudProjectModulePolicyAzurePolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyClusterPolicyClusterConfig {
}

export function dataZedcloudProjectModulePolicyClusterPolicyClusterConfigToTerraform(struct?: DataZedcloudProjectModulePolicyClusterPolicyClusterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyClusterPolicyClusterConfigToHclTerraform(struct?: DataZedcloudProjectModulePolicyClusterPolicyClusterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyClusterPolicyClusterConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyClusterPolicyClusterConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyClusterPolicyClusterConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // min_nodes_required - computed: true, optional: false, required: false
  public get minNodesRequired() {
    return this.getNumberAttribute('min_nodes_required');
  }
}

export class DataZedcloudProjectModulePolicyClusterPolicyClusterConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyClusterPolicyClusterConfigOutputReference {
    return new DataZedcloudProjectModulePolicyClusterPolicyClusterConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyClusterPolicy {
}

export function dataZedcloudProjectModulePolicyClusterPolicyToTerraform(struct?: DataZedcloudProjectModulePolicyClusterPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyClusterPolicyToHclTerraform(struct?: DataZedcloudProjectModulePolicyClusterPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyClusterPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyClusterPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyClusterPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // app_policy_id - computed: true, optional: false, required: false
  public get appPolicyId() {
    return this.getStringAttribute('app_policy_id');
  }

  // cluster_config - computed: true, optional: false, required: false
  private _clusterConfig = new DataZedcloudProjectModulePolicyClusterPolicyClusterConfigList(this, "cluster_config", false);
  public get clusterConfig() {
    return this._clusterConfig;
  }

  // network_policy_id - computed: true, optional: false, required: false
  public get networkPolicyId() {
    return this.getStringAttribute('network_policy_id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataZedcloudProjectModulePolicyClusterPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyClusterPolicyOutputReference {
    return new DataZedcloudProjectModulePolicyClusterPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyConfigurationLockPolicy {
}

export function dataZedcloudProjectModulePolicyConfigurationLockPolicyToTerraform(struct?: DataZedcloudProjectModulePolicyConfigurationLockPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyConfigurationLockPolicyToHclTerraform(struct?: DataZedcloudProjectModulePolicyConfigurationLockPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyConfigurationLockPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyConfigurationLockPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyConfigurationLockPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // config_lock - computed: true, optional: false, required: false
  public get configLock() {
    return this.getStringAttribute('config_lock');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export class DataZedcloudProjectModulePolicyConfigurationLockPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyConfigurationLockPolicyOutputReference {
    return new DataZedcloudProjectModulePolicyConfigurationLockPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyEdgeviewPolicyEdgeviewcfgAppPolicy {
}

export function dataZedcloudProjectModulePolicyEdgeviewPolicyEdgeviewcfgAppPolicyToTerraform(struct?: DataZedcloudProjectModulePolicyEdgeviewPolicyEdgeviewcfgAppPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyEdgeviewPolicyEdgeviewcfgAppPolicyToHclTerraform(struct?: DataZedcloudProjectModulePolicyEdgeviewPolicyEdgeviewcfgAppPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyEdgeviewPolicyEdgeviewcfgAppPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyEdgeviewPolicyEdgeviewcfgAppPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyEdgeviewPolicyEdgeviewcfgAppPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_app - computed: true, optional: false, required: false
  public get allowApp() {
    return this.getBooleanAttribute('allow_app');
  }
}

export class DataZedcloudProjectModulePolicyEdgeviewPolicyEdgeviewcfgAppPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyEdgeviewPolicyEdgeviewcfgAppPolicyOutputReference {
    return new DataZedcloudProjectModulePolicyEdgeviewPolicyEdgeviewcfgAppPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyEdgeviewPolicyEdgeviewcfgDevPolicy {
}

export function dataZedcloudProjectModulePolicyEdgeviewPolicyEdgeviewcfgDevPolicyToTerraform(struct?: DataZedcloudProjectModulePolicyEdgeviewPolicyEdgeviewcfgDevPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyEdgeviewPolicyEdgeviewcfgDevPolicyToHclTerraform(struct?: DataZedcloudProjectModulePolicyEdgeviewPolicyEdgeviewcfgDevPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyEdgeviewPolicyEdgeviewcfgDevPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyEdgeviewPolicyEdgeviewcfgDevPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyEdgeviewPolicyEdgeviewcfgDevPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_dev - computed: true, optional: false, required: false
  public get allowDev() {
    return this.getBooleanAttribute('allow_dev');
  }
}

export class DataZedcloudProjectModulePolicyEdgeviewPolicyEdgeviewcfgDevPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyEdgeviewPolicyEdgeviewcfgDevPolicyOutputReference {
    return new DataZedcloudProjectModulePolicyEdgeviewPolicyEdgeviewcfgDevPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyEdgeviewPolicyEdgeviewcfgExtPolicy {
}

export function dataZedcloudProjectModulePolicyEdgeviewPolicyEdgeviewcfgExtPolicyToTerraform(struct?: DataZedcloudProjectModulePolicyEdgeviewPolicyEdgeviewcfgExtPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyEdgeviewPolicyEdgeviewcfgExtPolicyToHclTerraform(struct?: DataZedcloudProjectModulePolicyEdgeviewPolicyEdgeviewcfgExtPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyEdgeviewPolicyEdgeviewcfgExtPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyEdgeviewPolicyEdgeviewcfgExtPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyEdgeviewPolicyEdgeviewcfgExtPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_ext - computed: true, optional: false, required: false
  public get allowExt() {
    return this.getBooleanAttribute('allow_ext');
  }
}

export class DataZedcloudProjectModulePolicyEdgeviewPolicyEdgeviewcfgExtPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyEdgeviewPolicyEdgeviewcfgExtPolicyOutputReference {
    return new DataZedcloudProjectModulePolicyEdgeviewPolicyEdgeviewcfgExtPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyEdgeviewPolicyEdgeviewcfgJwtInfo {
}

export function dataZedcloudProjectModulePolicyEdgeviewPolicyEdgeviewcfgJwtInfoToTerraform(struct?: DataZedcloudProjectModulePolicyEdgeviewPolicyEdgeviewcfgJwtInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyEdgeviewPolicyEdgeviewcfgJwtInfoToHclTerraform(struct?: DataZedcloudProjectModulePolicyEdgeviewPolicyEdgeviewcfgJwtInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyEdgeviewPolicyEdgeviewcfgJwtInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyEdgeviewPolicyEdgeviewcfgJwtInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyEdgeviewPolicyEdgeviewcfgJwtInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_sec - computed: true, optional: false, required: false
  public get allowSec() {
    return this.getNumberAttribute('allow_sec');
  }

  // disp_url - computed: true, optional: false, required: false
  public get dispUrl() {
    return this.getStringAttribute('disp_url');
  }

  // encrypt - computed: true, optional: false, required: false
  public get encrypt() {
    return this.getBooleanAttribute('encrypt');
  }

  // expire_sec - computed: true, optional: false, required: false
  public get expireSec() {
    return this.getStringAttribute('expire_sec');
  }

  // num_inst - computed: true, optional: false, required: false
  public get numInst() {
    return this.getNumberAttribute('num_inst');
  }
}

export class DataZedcloudProjectModulePolicyEdgeviewPolicyEdgeviewcfgJwtInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyEdgeviewPolicyEdgeviewcfgJwtInfoOutputReference {
    return new DataZedcloudProjectModulePolicyEdgeviewPolicyEdgeviewcfgJwtInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyEdgeviewPolicyEdgeviewcfg {
}

export function dataZedcloudProjectModulePolicyEdgeviewPolicyEdgeviewcfgToTerraform(struct?: DataZedcloudProjectModulePolicyEdgeviewPolicyEdgeviewcfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyEdgeviewPolicyEdgeviewcfgToHclTerraform(struct?: DataZedcloudProjectModulePolicyEdgeviewPolicyEdgeviewcfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyEdgeviewPolicyEdgeviewcfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyEdgeviewPolicyEdgeviewcfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyEdgeviewPolicyEdgeviewcfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // app_policy - computed: true, optional: false, required: false
  private _appPolicy = new DataZedcloudProjectModulePolicyEdgeviewPolicyEdgeviewcfgAppPolicyList(this, "app_policy", false);
  public get appPolicy() {
    return this._appPolicy;
  }

  // dev_policy - computed: true, optional: false, required: false
  private _devPolicy = new DataZedcloudProjectModulePolicyEdgeviewPolicyEdgeviewcfgDevPolicyList(this, "dev_policy", false);
  public get devPolicy() {
    return this._devPolicy;
  }

  // ext_policy - computed: true, optional: false, required: false
  private _extPolicy = new DataZedcloudProjectModulePolicyEdgeviewPolicyEdgeviewcfgExtPolicyList(this, "ext_policy", false);
  public get extPolicy() {
    return this._extPolicy;
  }

  // generation_id - computed: true, optional: false, required: false
  public get generationId() {
    return this.getNumberAttribute('generation_id');
  }

  // jwt_info - computed: true, optional: false, required: false
  private _jwtInfo = new DataZedcloudProjectModulePolicyEdgeviewPolicyEdgeviewcfgJwtInfoList(this, "jwt_info", false);
  public get jwtInfo() {
    return this._jwtInfo;
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }
}

export class DataZedcloudProjectModulePolicyEdgeviewPolicyEdgeviewcfgList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyEdgeviewPolicyEdgeviewcfgOutputReference {
    return new DataZedcloudProjectModulePolicyEdgeviewPolicyEdgeviewcfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyEdgeviewPolicy {
}

export function dataZedcloudProjectModulePolicyEdgeviewPolicyToTerraform(struct?: DataZedcloudProjectModulePolicyEdgeviewPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyEdgeviewPolicyToHclTerraform(struct?: DataZedcloudProjectModulePolicyEdgeviewPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyEdgeviewPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyEdgeviewPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyEdgeviewPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_allow_change - computed: true, optional: false, required: false
  public get accessAllowChange() {
    return this.getBooleanAttribute('access_allow_change');
  }

  // edgeview_allow - computed: true, optional: false, required: false
  public get edgeviewAllow() {
    return this.getBooleanAttribute('edgeview_allow');
  }

  // edgeviewcfg - computed: true, optional: false, required: false
  private _edgeviewcfg = new DataZedcloudProjectModulePolicyEdgeviewPolicyEdgeviewcfgList(this, "edgeviewcfg", false);
  public get edgeviewcfg() {
    return this._edgeviewcfg;
  }

  // max_expire_sec - computed: true, optional: false, required: false
  public get maxExpireSec() {
    return this.getNumberAttribute('max_expire_sec');
  }

  // max_inst - computed: true, optional: false, required: false
  public get maxInst() {
    return this.getNumberAttribute('max_inst');
  }
}

export class DataZedcloudProjectModulePolicyEdgeviewPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyEdgeviewPolicyOutputReference {
    return new DataZedcloudProjectModulePolicyEdgeviewPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyLocalOperatorConsolePolicy {
}

export function dataZedcloudProjectModulePolicyLocalOperatorConsolePolicyToTerraform(struct?: DataZedcloudProjectModulePolicyLocalOperatorConsolePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyLocalOperatorConsolePolicyToHclTerraform(struct?: DataZedcloudProjectModulePolicyLocalOperatorConsolePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyLocalOperatorConsolePolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyLocalOperatorConsolePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyLocalOperatorConsolePolicy | undefined) {
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

  // loc_url - computed: true, optional: false, required: false
  public get locUrl() {
    return this.getStringAttribute('loc_url');
  }
}

export class DataZedcloudProjectModulePolicyLocalOperatorConsolePolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyLocalOperatorConsolePolicyOutputReference {
    return new DataZedcloudProjectModulePolicyLocalOperatorConsolePolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyModulePolicyAppsInterfacesAclsActionsMapparams {
}

export function dataZedcloudProjectModulePolicyModulePolicyAppsInterfacesAclsActionsMapparamsToTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAppsInterfacesAclsActionsMapparams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyModulePolicyAppsInterfacesAclsActionsMapparamsToHclTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAppsInterfacesAclsActionsMapparams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyModulePolicyAppsInterfacesAclsActionsMapparamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyModulePolicyAppsInterfacesAclsActionsMapparams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyModulePolicyAppsInterfacesAclsActionsMapparams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}

export class DataZedcloudProjectModulePolicyModulePolicyAppsInterfacesAclsActionsMapparamsList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyModulePolicyAppsInterfacesAclsActionsMapparamsOutputReference {
    return new DataZedcloudProjectModulePolicyModulePolicyAppsInterfacesAclsActionsMapparamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyModulePolicyAppsInterfacesAclsActions {
}

export function dataZedcloudProjectModulePolicyModulePolicyAppsInterfacesAclsActionsToTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAppsInterfacesAclsActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyModulePolicyAppsInterfacesAclsActionsToHclTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAppsInterfacesAclsActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyModulePolicyAppsInterfacesAclsActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyModulePolicyAppsInterfacesAclsActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyModulePolicyAppsInterfacesAclsActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // drop - computed: true, optional: false, required: false
  public get drop() {
    return this.getBooleanAttribute('drop');
  }

  // limit - computed: true, optional: false, required: false
  public get limit() {
    return this.getBooleanAttribute('limit');
  }

  // limitburst - computed: true, optional: false, required: false
  public get limitburst() {
    return this.getNumberAttribute('limitburst');
  }

  // limitrate - computed: true, optional: false, required: false
  public get limitrate() {
    return this.getNumberAttribute('limitrate');
  }

  // limitunit - computed: true, optional: false, required: false
  public get limitunit() {
    return this.getStringAttribute('limitunit');
  }

  // mapparams - computed: true, optional: false, required: false
  private _mapparams = new DataZedcloudProjectModulePolicyModulePolicyAppsInterfacesAclsActionsMapparamsList(this, "mapparams", false);
  public get mapparams() {
    return this._mapparams;
  }

  // portmap - computed: true, optional: false, required: false
  public get portmap() {
    return this.getBooleanAttribute('portmap');
  }
}

export class DataZedcloudProjectModulePolicyModulePolicyAppsInterfacesAclsActionsList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyModulePolicyAppsInterfacesAclsActionsOutputReference {
    return new DataZedcloudProjectModulePolicyModulePolicyAppsInterfacesAclsActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyModulePolicyAppsInterfacesAclsMatches {
}

export function dataZedcloudProjectModulePolicyModulePolicyAppsInterfacesAclsMatchesToTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAppsInterfacesAclsMatches): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyModulePolicyAppsInterfacesAclsMatchesToHclTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAppsInterfacesAclsMatches): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyModulePolicyAppsInterfacesAclsMatchesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyModulePolicyAppsInterfacesAclsMatches | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyModulePolicyAppsInterfacesAclsMatches | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataZedcloudProjectModulePolicyModulePolicyAppsInterfacesAclsMatchesList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyModulePolicyAppsInterfacesAclsMatchesOutputReference {
    return new DataZedcloudProjectModulePolicyModulePolicyAppsInterfacesAclsMatchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyModulePolicyAppsInterfacesAcls {
}

export function dataZedcloudProjectModulePolicyModulePolicyAppsInterfacesAclsToTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAppsInterfacesAcls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyModulePolicyAppsInterfacesAclsToHclTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAppsInterfacesAcls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyModulePolicyAppsInterfacesAclsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyModulePolicyAppsInterfacesAcls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyModulePolicyAppsInterfacesAcls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // actions - computed: true, optional: false, required: false
  private _actions = new DataZedcloudProjectModulePolicyModulePolicyAppsInterfacesAclsActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // matches - computed: true, optional: false, required: false
  private _matches = new DataZedcloudProjectModulePolicyModulePolicyAppsInterfacesAclsMatchesList(this, "matches", false);
  public get matches() {
    return this._matches;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataZedcloudProjectModulePolicyModulePolicyAppsInterfacesAclsList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyModulePolicyAppsInterfacesAclsOutputReference {
    return new DataZedcloudProjectModulePolicyModulePolicyAppsInterfacesAclsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyModulePolicyAppsInterfacesEidregisterLispMapServers {
}

export function dataZedcloudProjectModulePolicyModulePolicyAppsInterfacesEidregisterLispMapServersToTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAppsInterfacesEidregisterLispMapServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyModulePolicyAppsInterfacesEidregisterLispMapServersToHclTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAppsInterfacesEidregisterLispMapServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyModulePolicyAppsInterfacesEidregisterLispMapServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyModulePolicyAppsInterfacesEidregisterLispMapServers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyModulePolicyAppsInterfacesEidregisterLispMapServers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // credential - computed: true, optional: false, required: false
  public get credential() {
    return this.getStringAttribute('credential');
  }

  // name_or_ip - computed: true, optional: false, required: false
  public get nameOrIp() {
    return this.getStringAttribute('name_or_ip');
  }
}

export class DataZedcloudProjectModulePolicyModulePolicyAppsInterfacesEidregisterLispMapServersList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyModulePolicyAppsInterfacesEidregisterLispMapServersOutputReference {
    return new DataZedcloudProjectModulePolicyModulePolicyAppsInterfacesEidregisterLispMapServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyModulePolicyAppsInterfacesEidregister {
}

export function dataZedcloudProjectModulePolicyModulePolicyAppsInterfacesEidregisterToTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAppsInterfacesEidregister): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyModulePolicyAppsInterfacesEidregisterToHclTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAppsInterfacesEidregister): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyModulePolicyAppsInterfacesEidregisterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyModulePolicyAppsInterfacesEidregister | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyModulePolicyAppsInterfacesEidregister | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // app_cert - computed: true, optional: false, required: false
  public get appCert() {
    return this.getStringAttribute('app_cert');
  }

  // app_private_key - computed: true, optional: false, required: false
  public get appPrivateKey() {
    return this.getStringAttribute('app_private_key');
  }

  // app_public_key - computed: true, optional: false, required: false
  public get appPublicKey() {
    return this.getStringAttribute('app_public_key');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // e_id - computed: true, optional: false, required: false
  public get eId() {
    return this.getStringAttribute('e_id');
  }

  // e_id_hash_len - computed: true, optional: false, required: false
  public get eIdHashLen() {
    return this.getNumberAttribute('e_id_hash_len');
  }

  // lisp_instance - computed: true, optional: false, required: false
  public get lispInstance() {
    return this.getNumberAttribute('lisp_instance');
  }

  // lisp_map_servers - computed: true, optional: false, required: false
  private _lispMapServers = new DataZedcloudProjectModulePolicyModulePolicyAppsInterfacesEidregisterLispMapServersList(this, "lisp_map_servers", false);
  public get lispMapServers() {
    return this._lispMapServers;
  }

  // lisp_signature - computed: true, optional: false, required: false
  public get lispSignature() {
    return this.getStringAttribute('lisp_signature');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}

export class DataZedcloudProjectModulePolicyModulePolicyAppsInterfacesEidregisterList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyModulePolicyAppsInterfacesEidregisterOutputReference {
    return new DataZedcloudProjectModulePolicyModulePolicyAppsInterfacesEidregisterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyModulePolicyAppsInterfacesIo {
}

export function dataZedcloudProjectModulePolicyModulePolicyAppsInterfacesIoToTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAppsInterfacesIo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyModulePolicyAppsInterfacesIoToHclTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAppsInterfacesIo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyModulePolicyAppsInterfacesIoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyModulePolicyAppsInterfacesIo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyModulePolicyAppsInterfacesIo | undefined) {
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

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataZedcloudProjectModulePolicyModulePolicyAppsInterfacesIoList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyModulePolicyAppsInterfacesIoOutputReference {
    return new DataZedcloudProjectModulePolicyModulePolicyAppsInterfacesIoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyModulePolicyAppsInterfaces {
}

export function dataZedcloudProjectModulePolicyModulePolicyAppsInterfacesToTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAppsInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyModulePolicyAppsInterfacesToHclTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAppsInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyModulePolicyAppsInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyModulePolicyAppsInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyModulePolicyAppsInterfaces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_vlan_id - computed: true, optional: false, required: false
  public get accessVlanId() {
    return this.getNumberAttribute('access_vlan_id');
  }

  // acls - computed: true, optional: false, required: false
  private _acls = new DataZedcloudProjectModulePolicyModulePolicyAppsInterfacesAclsList(this, "acls", false);
  public get acls() {
    return this._acls;
  }

  // default_net_instance - computed: true, optional: false, required: false
  public get defaultNetInstance() {
    return this.getBooleanAttribute('default_net_instance');
  }

  // directattach - computed: true, optional: false, required: false
  public get directattach() {
    return this.getBooleanAttribute('directattach');
  }

  // eidregister - computed: true, optional: false, required: false
  private _eidregister = new DataZedcloudProjectModulePolicyModulePolicyAppsInterfacesEidregisterList(this, "eidregister", false);
  public get eidregister() {
    return this._eidregister;
  }

  // intfname - computed: true, optional: false, required: false
  public get intfname() {
    return this.getStringAttribute('intfname');
  }

  // intforder - computed: true, optional: false, required: false
  public get intforder() {
    return this.getNumberAttribute('intforder');
  }

  // io - computed: true, optional: false, required: false
  private _io = new DataZedcloudProjectModulePolicyModulePolicyAppsInterfacesIoList(this, "io", false);
  public get io() {
    return this._io;
  }

  // ipaddr - computed: true, optional: false, required: false
  public get ipaddr() {
    return this.getStringAttribute('ipaddr');
  }

  // macaddr - computed: true, optional: false, required: false
  public get macaddr() {
    return this.getStringAttribute('macaddr');
  }

  // netinstid - computed: true, optional: false, required: false
  public get netinstid() {
    return this.getStringAttribute('netinstid');
  }

  // netinstname - computed: true, optional: false, required: false
  public get netinstname() {
    return this.getStringAttribute('netinstname');
  }

  // netinsttag - computed: true, optional: false, required: false
  private _netinsttag = new cdktf.StringMap(this, "netinsttag");
  public get netinsttag() {
    return this._netinsttag;
  }

  // netname - computed: true, optional: false, required: false
  public get netname() {
    return this.getStringAttribute('netname');
  }

  // privateip - computed: true, optional: false, required: false
  public get privateip() {
    return this.getBooleanAttribute('privateip');
  }
}

export class DataZedcloudProjectModulePolicyModulePolicyAppsInterfacesList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyModulePolicyAppsInterfacesOutputReference {
    return new DataZedcloudProjectModulePolicyModulePolicyAppsInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsCondition {
}

export function dataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsConditionToTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsConditionToHclTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsCondition | undefined) {
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

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsConditionList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsConditionOutputReference {
    return new DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptions {
}

export function dataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsToTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsToHclTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsOutputReference {
    return new DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariables {
}

export function dataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesToTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesToHclTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariables | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // encode - computed: true, optional: false, required: false
  public get encode() {
    return this.getStringAttribute('encode');
  }

  // format - computed: true, optional: false, required: false
  public get format() {
    return this.getStringAttribute('format');
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // max_length - computed: true, optional: false, required: false
  public get maxLength() {
    return this.getStringAttribute('max_length');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // options - computed: true, optional: false, required: false
  private _options = new DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsList(this, "options", false);
  public get options() {
    return this._options;
  }

  // process_input - computed: true, optional: false, required: false
  public get processInput() {
    return this.getStringAttribute('process_input');
  }

  // required - computed: true, optional: false, required: false
  public get required() {
    return this.getBooleanAttribute('required');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesOutputReference {
    return new DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroups {
}

export function dataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsToTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsToHclTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // condition - computed: true, optional: false, required: false
  private _condition = new DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsConditionList(this, "condition", false);
  public get condition() {
    return this._condition;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // required - computed: true, optional: false, required: false
  public get required() {
    return this.getBooleanAttribute('required');
  }

  // variables - computed: true, optional: false, required: false
  private _variables = new DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesList(this, "variables", false);
  public get variables() {
    return this._variables;
  }
}

export class DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsOutputReference {
    return new DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfig {
}

export function dataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigToTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigToHclTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // add - computed: true, optional: false, required: false
  public get add() {
    return this.getBooleanAttribute('add');
  }

  // allow_storage_resize - computed: true, optional: false, required: false
  public get allowStorageResize() {
    return this.getBooleanAttribute('allow_storage_resize');
  }

  // field_delimiter - computed: true, optional: false, required: false
  public get fieldDelimiter() {
    return this.getStringAttribute('field_delimiter');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // override - computed: true, optional: false, required: false
  public get override() {
    return this.getBooleanAttribute('override');
  }

  // template - computed: true, optional: false, required: false
  public get template() {
    return this.getStringAttribute('template');
  }

  // variable_groups - computed: true, optional: false, required: false
  private _variableGroups = new DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsList(this, "variable_groups", false);
  public get variableGroups() {
    return this._variableGroups;
  }
}

export class DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigOutputReference {
    return new DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonConfiguration {
}

export function dataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonConfigurationToTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonConfigurationToHclTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_config - computed: true, optional: false, required: false
  private _customConfig = new DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigList(this, "custom_config", false);
  public get customConfig() {
    return this._customConfig;
  }
}

export class DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonConfigurationOutputReference {
    return new DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonContainerDetail {
}

export function dataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonContainerDetailToTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonContainerDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonContainerDetailToHclTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonContainerDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonContainerDetailOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonContainerDetail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonContainerDetail | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // container_create_option - computed: true, optional: false, required: false
  public get containerCreateOption() {
    return this.getStringAttribute('container_create_option');
  }
}

export class DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonContainerDetailList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonContainerDetailOutputReference {
    return new DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonContainerDetailOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonDesc {
}

export function dataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonDescToTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonDesc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonDescToHclTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonDesc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonDescOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonDesc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonDesc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agreement_list - computed: true, optional: false, required: false
  private _agreementList = new cdktf.StringMap(this, "agreement_list");
  public get agreementList() {
    return this._agreementList;
  }

  // app_category - computed: true, optional: false, required: false
  public get appCategory() {
    return this.getStringAttribute('app_category');
  }

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getStringAttribute('category');
  }

  // license_list - computed: true, optional: false, required: false
  private _licenseList = new cdktf.StringMap(this, "license_list");
  public get licenseList() {
    return this._licenseList;
  }

  // logo - computed: true, optional: false, required: false
  private _logo = new cdktf.StringMap(this, "logo");
  public get logo() {
    return this._logo;
  }

  // os - computed: true, optional: false, required: false
  public get os() {
    return this.getStringAttribute('os');
  }

  // screenshot_list - computed: true, optional: false, required: false
  private _screenshotList = new cdktf.StringMap(this, "screenshot_list");
  public get screenshotList() {
    return this._screenshotList;
  }

  // support - computed: true, optional: false, required: false
  public get support() {
    return this.getStringAttribute('support');
  }
}

export class DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonDescList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonDescOutputReference {
    return new DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonDescOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonImagesParams {
}

export function dataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonImagesParamsToTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonImagesParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonImagesParamsToHclTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonImagesParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonImagesParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonImagesParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonImagesParams | undefined) {
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

export class DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonImagesParamsList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonImagesParamsOutputReference {
    return new DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonImagesParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonImages {
}

export function dataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonImagesToTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonImages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonImagesToHclTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonImages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonImagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonImages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonImages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cleartext - computed: true, optional: false, required: false
  public get cleartext() {
    return this.getBooleanAttribute('cleartext');
  }

  // drvtype - computed: true, optional: false, required: false
  public get drvtype() {
    return this.getStringAttribute('drvtype');
  }

  // ignorepurge - computed: true, optional: false, required: false
  public get ignorepurge() {
    return this.getBooleanAttribute('ignorepurge');
  }

  // imageformat - computed: true, optional: false, required: false
  public get imageformat() {
    return this.getStringAttribute('imageformat');
  }

  // imageid - computed: true, optional: false, required: false
  public get imageid() {
    return this.getStringAttribute('imageid');
  }

  // imagename - computed: true, optional: false, required: false
  public get imagename() {
    return this.getStringAttribute('imagename');
  }

  // maxsize - computed: true, optional: false, required: false
  public get maxsize() {
    return this.getStringAttribute('maxsize');
  }

  // mountpath - computed: true, optional: false, required: false
  public get mountpath() {
    return this.getStringAttribute('mountpath');
  }

  // params - computed: true, optional: false, required: false
  private _params = new DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonImagesParamsList(this, "params", false);
  public get params() {
    return this._params;
  }

  // preserve - computed: true, optional: false, required: false
  public get preserve() {
    return this.getBooleanAttribute('preserve');
  }

  // readonly - computed: true, optional: false, required: false
  public get readonly() {
    return this.getBooleanAttribute('readonly');
  }

  // target - computed: true, optional: false, required: false
  public get target() {
    return this.getStringAttribute('target');
  }

  // volumelabel - computed: true, optional: false, required: false
  public get volumelabel() {
    return this.getStringAttribute('volumelabel');
  }
}

export class DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonImagesList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonImagesOutputReference {
    return new DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonImagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsActionsLimitValue {
}

export function dataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsActionsLimitValueToTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsActionsLimitValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsActionsLimitValueToHclTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsActionsLimitValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsActionsLimitValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsActionsLimitValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsActionsLimitValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // limitburst - computed: true, optional: false, required: false
  public get limitburst() {
    return this.getNumberAttribute('limitburst');
  }

  // limitrate - computed: true, optional: false, required: false
  public get limitrate() {
    return this.getNumberAttribute('limitrate');
  }

  // limitunit - computed: true, optional: false, required: false
  public get limitunit() {
    return this.getStringAttribute('limitunit');
  }
}

export class DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsActionsLimitValueList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsActionsLimitValueOutputReference {
    return new DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsActionsLimitValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsActionsPortmapto {
}

export function dataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsActionsPortmaptoToTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsActionsPortmapto): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsActionsPortmaptoToHclTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsActionsPortmapto): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsActionsPortmaptoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsActionsPortmapto | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsActionsPortmapto | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // app_port - computed: true, optional: false, required: false
  public get appPort() {
    return this.getNumberAttribute('app_port');
  }
}

export class DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsActionsPortmaptoList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsActionsPortmaptoOutputReference {
    return new DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsActionsPortmaptoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsActions {
}

export function dataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsActionsToTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsActionsToHclTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // drop - computed: true, optional: false, required: false
  public get drop() {
    return this.getBooleanAttribute('drop');
  }

  // limit - computed: true, optional: false, required: false
  public get limit() {
    return this.getBooleanAttribute('limit');
  }

  // limit_value - computed: true, optional: false, required: false
  private _limitValue = new DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsActionsLimitValueList(this, "limit_value", false);
  public get limitValue() {
    return this._limitValue;
  }

  // limitburst - computed: true, optional: false, required: false
  public get limitburst() {
    return this.getNumberAttribute('limitburst');
  }

  // limitrate - computed: true, optional: false, required: false
  public get limitrate() {
    return this.getNumberAttribute('limitrate');
  }

  // limitunit - computed: true, optional: false, required: false
  public get limitunit() {
    return this.getStringAttribute('limitunit');
  }

  // portmap - computed: true, optional: false, required: false
  public get portmap() {
    return this.getBooleanAttribute('portmap');
  }

  // portmapto - computed: true, optional: false, required: false
  private _portmapto = new DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsActionsPortmaptoList(this, "portmapto", false);
  public get portmapto() {
    return this._portmapto;
  }
}

export class DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsActionsList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsActionsOutputReference {
    return new DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsMatches {
}

export function dataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsMatchesToTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsMatches): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsMatchesToHclTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsMatches): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsMatchesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsMatches | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsMatches | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsMatchesList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsMatchesOutputReference {
    return new DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsMatchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAcls {
}

export function dataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsToTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAcls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsToHclTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAcls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAcls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAcls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // actions - computed: true, optional: false, required: false
  private _actions = new DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }

  // matches - computed: true, optional: false, required: false
  private _matches = new DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsMatchesList(this, "matches", false);
  public get matches() {
    return this._matches;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsOutputReference {
    return new DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonInterfaces {
}

export function dataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonInterfacesToTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonInterfacesToHclTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonInterfaces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // acls - computed: true, optional: false, required: false
  private _acls = new DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsList(this, "acls", false);
  public get acls() {
    return this._acls;
  }

  // directattach - computed: true, optional: false, required: false
  public get directattach() {
    return this.getBooleanAttribute('directattach');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // privateip - computed: true, optional: false, required: false
  public get privateip() {
    return this.getBooleanAttribute('privateip');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonInterfacesList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonInterfacesOutputReference {
    return new DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonModule {
}

export function dataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonModuleToTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonModule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonModuleToHclTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonModule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonModuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonModule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonModule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // environment - computed: true, optional: false, required: false
  private _environment = new cdktf.StringMap(this, "environment");
  public get environment() {
    return this._environment;
  }

  // module_type - computed: true, optional: false, required: false
  public get moduleType() {
    return this.getStringAttribute('module_type');
  }

  // routes - computed: true, optional: false, required: false
  private _routes = new cdktf.StringMap(this, "routes");
  public get routes() {
    return this._routes;
  }

  // twin_detail - computed: true, optional: false, required: false
  public get twinDetail() {
    return this.getStringAttribute('twin_detail');
  }
}

export class DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonModuleList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonModuleOutputReference {
    return new DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonModuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonOwner {
}

export function dataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonOwnerToTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonOwner): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonOwnerToHclTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonOwner): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonOwnerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonOwner | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonOwner | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // company - computed: true, optional: false, required: false
  public get company() {
    return this.getStringAttribute('company');
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // group - computed: true, optional: false, required: false
  public get group() {
    return this.getStringAttribute('group');
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }

  // website - computed: true, optional: false, required: false
  public get website() {
    return this.getStringAttribute('website');
  }
}

export class DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonOwnerList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonOwnerOutputReference {
    return new DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonOwnerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonPermissions {
}

export function dataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonPermissionsToTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonPermissionsToHclTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}

export class DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonPermissionsList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonPermissionsOutputReference {
    return new DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonResources {
}

export function dataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonResourcesToTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonResourcesToHclTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonResources | undefined) {
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

export class DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonResourcesList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonResourcesOutputReference {
    return new DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyModulePolicyAppsManifestJson {
}

export function dataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonToTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAppsManifestJson): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonToHclTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAppsManifestJson): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyModulePolicyAppsManifestJson | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyModulePolicyAppsManifestJson | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ac_kind - computed: true, optional: false, required: false
  public get acKind() {
    return this.getStringAttribute('ac_kind');
  }

  // ac_version - computed: true, optional: false, required: false
  public get acVersion() {
    return this.getStringAttribute('ac_version');
  }

  // app_type - computed: true, optional: false, required: false
  public get appType() {
    return this.getStringAttribute('app_type');
  }

  // configuration - computed: true, optional: false, required: false
  private _configuration = new DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonConfigurationList(this, "configuration", false);
  public get configuration() {
    return this._configuration;
  }

  // container_detail - computed: true, optional: false, required: false
  private _containerDetail = new DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonContainerDetailList(this, "container_detail", false);
  public get containerDetail() {
    return this._containerDetail;
  }

  // cpu_pinning_enabled - computed: true, optional: false, required: false
  public get cpuPinningEnabled() {
    return this.getBooleanAttribute('cpu_pinning_enabled');
  }

  // deployment_type - computed: true, optional: false, required: false
  public get deploymentType() {
    return this.getStringAttribute('deployment_type');
  }

  // desc - computed: true, optional: false, required: false
  private _desc = new DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonDescList(this, "desc", false);
  public get desc() {
    return this._desc;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // disable_v_t_p_m - computed: true, optional: false, required: false
  public get disableVTPM() {
    return this.getBooleanAttribute('disable_v_t_p_m');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // docker_compose_tar_image_name - computed: true, optional: false, required: false
  public get dockerComposeTarImageName() {
    return this.getStringAttribute('docker_compose_tar_image_name');
  }

  // docker_compose_yaml_text - computed: true, optional: false, required: false
  public get dockerComposeYamlText() {
    return this.getStringAttribute('docker_compose_yaml_text');
  }

  // enable_oem_win_license_key - computed: true, optional: false, required: false
  public get enableOemWinLicenseKey() {
    return this.getBooleanAttribute('enable_oem_win_license_key');
  }

  // enablevnc - computed: true, optional: false, required: false
  public get enablevnc() {
    return this.getBooleanAttribute('enablevnc');
  }

  // images - computed: true, optional: false, required: false
  private _images = new DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonImagesList(this, "images", false);
  public get images() {
    return this._images;
  }

  // interfaces - computed: true, optional: false, required: false
  private _interfaces = new DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }

  // module - computed: true, optional: false, required: false
  private _module = new DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonModuleList(this, "module", false);
  public get module() {
    return this._module;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // owner - computed: true, optional: false, required: false
  private _owner = new DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonOwnerList(this, "owner", false);
  public get owner() {
    return this._owner;
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // persistent_runtime_size_bytes - computed: true, optional: false, required: false
  public get persistentRuntimeSizeBytes() {
    return this.getStringAttribute('persistent_runtime_size_bytes');
  }

  // resources - computed: true, optional: false, required: false
  private _resources = new DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }

  // runtime_protocol_version - computed: true, optional: false, required: false
  public get runtimeProtocolVersion() {
    return this.getStringAttribute('runtime_protocol_version');
  }

  // runtime_version - computed: true, optional: false, required: false
  public get runtimeVersion() {
    return this.getStringAttribute('runtime_version');
  }

  // vmmode - computed: true, optional: false, required: false
  public get vmmode() {
    return this.getStringAttribute('vmmode');
  }
}

export class DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonOutputReference {
    return new DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyModulePolicyAppsParentDetail {
}

export function dataZedcloudProjectModulePolicyModulePolicyAppsParentDetailToTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAppsParentDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyModulePolicyAppsParentDetailToHclTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAppsParentDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyModulePolicyAppsParentDetailOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyModulePolicyAppsParentDetail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyModulePolicyAppsParentDetail | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id_of_parent_object - computed: true, optional: false, required: false
  public get idOfParentObject() {
    return this.getStringAttribute('id_of_parent_object');
  }

  // reference_exists - computed: true, optional: false, required: false
  public get referenceExists() {
    return this.getBooleanAttribute('reference_exists');
  }

  // update_available - computed: true, optional: false, required: false
  public get updateAvailable() {
    return this.getBooleanAttribute('update_available');
  }

  // version_of_parent_object - computed: true, optional: false, required: false
  public get versionOfParentObject() {
    return this.getNumberAttribute('version_of_parent_object');
  }
}

export class DataZedcloudProjectModulePolicyModulePolicyAppsParentDetailList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyModulePolicyAppsParentDetailOutputReference {
    return new DataZedcloudProjectModulePolicyModulePolicyAppsParentDetailOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyModulePolicyApps {
}

export function dataZedcloudProjectModulePolicyModulePolicyAppsToTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyApps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyModulePolicyAppsToHclTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyApps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyModulePolicyAppsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyModulePolicyApps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyModulePolicyApps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // app_id - computed: true, optional: false, required: false
  public get appId() {
    return this.getStringAttribute('app_id');
  }

  // app_version - computed: true, optional: false, required: false
  public get appVersion() {
    return this.getStringAttribute('app_version');
  }

  // cpus - computed: true, optional: false, required: false
  public get cpus() {
    return this.getNumberAttribute('cpus');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // drives - computed: true, optional: false, required: false
  public get drives() {
    return this.getNumberAttribute('drives');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interfaces - computed: true, optional: false, required: false
  private _interfaces = new DataZedcloudProjectModulePolicyModulePolicyAppsInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }

  // manifest_json - computed: true, optional: false, required: false
  private _manifestJson = new DataZedcloudProjectModulePolicyModulePolicyAppsManifestJsonList(this, "manifest_json", false);
  public get manifestJson() {
    return this._manifestJson;
  }

  // memory - computed: true, optional: false, required: false
  public get memory() {
    return this.getNumberAttribute('memory');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // name_app_part - computed: true, optional: false, required: false
  public get nameAppPart() {
    return this.getStringAttribute('name_app_part');
  }

  // name_project_part - computed: true, optional: false, required: false
  public get nameProjectPart() {
    return this.getStringAttribute('name_project_part');
  }

  // naming_scheme - computed: true, optional: false, required: false
  public get namingScheme() {
    return this.getStringAttribute('naming_scheme');
  }

  // networks - computed: true, optional: false, required: false
  public get networks() {
    return this.getNumberAttribute('networks');
  }

  // origin_type - computed: true, optional: false, required: false
  public get originType() {
    return this.getStringAttribute('origin_type');
  }

  // parent_detail - computed: true, optional: false, required: false
  private _parentDetail = new DataZedcloudProjectModulePolicyModulePolicyAppsParentDetailList(this, "parent_detail", false);
  public get parentDetail() {
    return this._parentDetail;
  }

  // start_delay_in_seconds - computed: true, optional: false, required: false
  public get startDelayInSeconds() {
    return this.getNumberAttribute('start_delay_in_seconds');
  }

  // storage - computed: true, optional: false, required: false
  public get storage() {
    return this.getNumberAttribute('storage');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }
}

export class DataZedcloudProjectModulePolicyModulePolicyAppsList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyModulePolicyAppsOutputReference {
    return new DataZedcloudProjectModulePolicyModulePolicyAppsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesAclsActionsMapparams {
}

export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesAclsActionsMapparamsToTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesAclsActionsMapparams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesAclsActionsMapparamsToHclTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesAclsActionsMapparams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesAclsActionsMapparamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesAclsActionsMapparams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesAclsActionsMapparams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesAclsActionsMapparamsList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesAclsActionsMapparamsOutputReference {
    return new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesAclsActionsMapparamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesAclsActions {
}

export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesAclsActionsToTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesAclsActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesAclsActionsToHclTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesAclsActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesAclsActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesAclsActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesAclsActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // drop - computed: true, optional: false, required: false
  public get drop() {
    return this.getBooleanAttribute('drop');
  }

  // limit - computed: true, optional: false, required: false
  public get limit() {
    return this.getBooleanAttribute('limit');
  }

  // limitburst - computed: true, optional: false, required: false
  public get limitburst() {
    return this.getNumberAttribute('limitburst');
  }

  // limitrate - computed: true, optional: false, required: false
  public get limitrate() {
    return this.getNumberAttribute('limitrate');
  }

  // limitunit - computed: true, optional: false, required: false
  public get limitunit() {
    return this.getStringAttribute('limitunit');
  }

  // mapparams - computed: true, optional: false, required: false
  private _mapparams = new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesAclsActionsMapparamsList(this, "mapparams", false);
  public get mapparams() {
    return this._mapparams;
  }

  // portmap - computed: true, optional: false, required: false
  public get portmap() {
    return this.getBooleanAttribute('portmap');
  }
}

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesAclsActionsList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesAclsActionsOutputReference {
    return new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesAclsActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesAclsMatches {
}

export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesAclsMatchesToTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesAclsMatches): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesAclsMatchesToHclTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesAclsMatches): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesAclsMatchesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesAclsMatches | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesAclsMatches | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesAclsMatchesList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesAclsMatchesOutputReference {
    return new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesAclsMatchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesAcls {
}

export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesAclsToTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesAcls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesAclsToHclTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesAcls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesAclsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesAcls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesAcls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // actions - computed: true, optional: false, required: false
  private _actions = new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesAclsActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // matches - computed: true, optional: false, required: false
  private _matches = new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesAclsMatchesList(this, "matches", false);
  public get matches() {
    return this._matches;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesAclsList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesAclsOutputReference {
    return new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesAclsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesEidregisterLispMapServers {
}

export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesEidregisterLispMapServersToTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesEidregisterLispMapServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesEidregisterLispMapServersToHclTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesEidregisterLispMapServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesEidregisterLispMapServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesEidregisterLispMapServers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesEidregisterLispMapServers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // credential - computed: true, optional: false, required: false
  public get credential() {
    return this.getStringAttribute('credential');
  }

  // name_or_ip - computed: true, optional: false, required: false
  public get nameOrIp() {
    return this.getStringAttribute('name_or_ip');
  }
}

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesEidregisterLispMapServersList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesEidregisterLispMapServersOutputReference {
    return new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesEidregisterLispMapServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesEidregister {
}

export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesEidregisterToTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesEidregister): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesEidregisterToHclTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesEidregister): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesEidregisterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesEidregister | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesEidregister | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // app_cert - computed: true, optional: false, required: false
  public get appCert() {
    return this.getStringAttribute('app_cert');
  }

  // app_private_key - computed: true, optional: false, required: false
  public get appPrivateKey() {
    return this.getStringAttribute('app_private_key');
  }

  // app_public_key - computed: true, optional: false, required: false
  public get appPublicKey() {
    return this.getStringAttribute('app_public_key');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // e_id - computed: true, optional: false, required: false
  public get eId() {
    return this.getStringAttribute('e_id');
  }

  // e_id_hash_len - computed: true, optional: false, required: false
  public get eIdHashLen() {
    return this.getNumberAttribute('e_id_hash_len');
  }

  // lisp_instance - computed: true, optional: false, required: false
  public get lispInstance() {
    return this.getNumberAttribute('lisp_instance');
  }

  // lisp_map_servers - computed: true, optional: false, required: false
  private _lispMapServers = new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesEidregisterLispMapServersList(this, "lisp_map_servers", false);
  public get lispMapServers() {
    return this._lispMapServers;
  }

  // lisp_signature - computed: true, optional: false, required: false
  public get lispSignature() {
    return this.getStringAttribute('lisp_signature');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesEidregisterList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesEidregisterOutputReference {
    return new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesEidregisterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesIo {
}

export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesIoToTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesIo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesIoToHclTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesIo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesIoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesIo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesIo | undefined) {
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

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesIoList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesIoOutputReference {
    return new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesIoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentInterfaces {
}

export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesToTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesToHclTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentInterfaces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_vlan_id - computed: true, optional: false, required: false
  public get accessVlanId() {
    return this.getNumberAttribute('access_vlan_id');
  }

  // acls - computed: true, optional: false, required: false
  private _acls = new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesAclsList(this, "acls", false);
  public get acls() {
    return this._acls;
  }

  // default_net_instance - computed: true, optional: false, required: false
  public get defaultNetInstance() {
    return this.getBooleanAttribute('default_net_instance');
  }

  // directattach - computed: true, optional: false, required: false
  public get directattach() {
    return this.getBooleanAttribute('directattach');
  }

  // eidregister - computed: true, optional: false, required: false
  private _eidregister = new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesEidregisterList(this, "eidregister", false);
  public get eidregister() {
    return this._eidregister;
  }

  // intfname - computed: true, optional: false, required: false
  public get intfname() {
    return this.getStringAttribute('intfname');
  }

  // intforder - computed: true, optional: false, required: false
  public get intforder() {
    return this.getNumberAttribute('intforder');
  }

  // io - computed: true, optional: false, required: false
  private _io = new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesIoList(this, "io", false);
  public get io() {
    return this._io;
  }

  // ipaddr - computed: true, optional: false, required: false
  public get ipaddr() {
    return this.getStringAttribute('ipaddr');
  }

  // macaddr - computed: true, optional: false, required: false
  public get macaddr() {
    return this.getStringAttribute('macaddr');
  }

  // netinstid - computed: true, optional: false, required: false
  public get netinstid() {
    return this.getStringAttribute('netinstid');
  }

  // netinstname - computed: true, optional: false, required: false
  public get netinstname() {
    return this.getStringAttribute('netinstname');
  }

  // netinsttag - computed: true, optional: false, required: false
  private _netinsttag = new cdktf.StringMap(this, "netinsttag");
  public get netinsttag() {
    return this._netinsttag;
  }

  // netname - computed: true, optional: false, required: false
  public get netname() {
    return this.getStringAttribute('netname');
  }

  // privateip - computed: true, optional: false, required: false
  public get privateip() {
    return this.getBooleanAttribute('privateip');
  }
}

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesOutputReference {
    return new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsCondition {
}

export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsConditionToTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsConditionToHclTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsCondition | undefined) {
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

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsConditionList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsConditionOutputReference {
    return new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptions {
}

export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsToTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsToHclTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsOutputReference {
    return new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsVariables {
}

export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsVariablesToTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsVariables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsVariablesToHclTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsVariables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsVariablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsVariables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsVariables | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // encode - computed: true, optional: false, required: false
  public get encode() {
    return this.getStringAttribute('encode');
  }

  // format - computed: true, optional: false, required: false
  public get format() {
    return this.getStringAttribute('format');
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // max_length - computed: true, optional: false, required: false
  public get maxLength() {
    return this.getStringAttribute('max_length');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // options - computed: true, optional: false, required: false
  private _options = new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsList(this, "options", false);
  public get options() {
    return this._options;
  }

  // process_input - computed: true, optional: false, required: false
  public get processInput() {
    return this.getStringAttribute('process_input');
  }

  // required - computed: true, optional: false, required: false
  public get required() {
    return this.getBooleanAttribute('required');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsVariablesList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsVariablesOutputReference {
    return new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroups {
}

export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsToTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsToHclTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // condition - computed: true, optional: false, required: false
  private _condition = new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsConditionList(this, "condition", false);
  public get condition() {
    return this._condition;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // required - computed: true, optional: false, required: false
  public get required() {
    return this.getBooleanAttribute('required');
  }

  // variables - computed: true, optional: false, required: false
  private _variables = new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsVariablesList(this, "variables", false);
  public get variables() {
    return this._variables;
  }
}

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsOutputReference {
    return new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfig {
}

export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigToTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigToHclTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // add - computed: true, optional: false, required: false
  public get add() {
    return this.getBooleanAttribute('add');
  }

  // allow_storage_resize - computed: true, optional: false, required: false
  public get allowStorageResize() {
    return this.getBooleanAttribute('allow_storage_resize');
  }

  // field_delimiter - computed: true, optional: false, required: false
  public get fieldDelimiter() {
    return this.getStringAttribute('field_delimiter');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // override - computed: true, optional: false, required: false
  public get override() {
    return this.getBooleanAttribute('override');
  }

  // template - computed: true, optional: false, required: false
  public get template() {
    return this.getStringAttribute('template');
  }

  // variable_groups - computed: true, optional: false, required: false
  private _variableGroups = new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsList(this, "variable_groups", false);
  public get variableGroups() {
    return this._variableGroups;
  }
}

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigOutputReference {
    return new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfiguration {
}

export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationToTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationToHclTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_config - computed: true, optional: false, required: false
  private _customConfig = new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigList(this, "custom_config", false);
  public get customConfig() {
    return this._customConfig;
  }
}

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationOutputReference {
    return new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonContainerDetail {
}

export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonContainerDetailToTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonContainerDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonContainerDetailToHclTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonContainerDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonContainerDetailOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonContainerDetail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonContainerDetail | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // container_create_option - computed: true, optional: false, required: false
  public get containerCreateOption() {
    return this.getStringAttribute('container_create_option');
  }
}

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonContainerDetailList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonContainerDetailOutputReference {
    return new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonContainerDetailOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonDesc {
}

export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonDescToTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonDesc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonDescToHclTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonDesc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonDescOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonDesc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonDesc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agreement_list - computed: true, optional: false, required: false
  private _agreementList = new cdktf.StringMap(this, "agreement_list");
  public get agreementList() {
    return this._agreementList;
  }

  // app_category - computed: true, optional: false, required: false
  public get appCategory() {
    return this.getStringAttribute('app_category');
  }

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getStringAttribute('category');
  }

  // license_list - computed: true, optional: false, required: false
  private _licenseList = new cdktf.StringMap(this, "license_list");
  public get licenseList() {
    return this._licenseList;
  }

  // logo - computed: true, optional: false, required: false
  private _logo = new cdktf.StringMap(this, "logo");
  public get logo() {
    return this._logo;
  }

  // os - computed: true, optional: false, required: false
  public get os() {
    return this.getStringAttribute('os');
  }

  // screenshot_list - computed: true, optional: false, required: false
  private _screenshotList = new cdktf.StringMap(this, "screenshot_list");
  public get screenshotList() {
    return this._screenshotList;
  }

  // support - computed: true, optional: false, required: false
  public get support() {
    return this.getStringAttribute('support');
  }
}

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonDescList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonDescOutputReference {
    return new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonDescOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonImagesParams {
}

export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonImagesParamsToTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonImagesParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonImagesParamsToHclTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonImagesParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonImagesParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonImagesParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonImagesParams | undefined) {
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

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonImagesParamsList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonImagesParamsOutputReference {
    return new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonImagesParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonImages {
}

export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonImagesToTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonImages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonImagesToHclTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonImages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonImagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonImages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonImages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cleartext - computed: true, optional: false, required: false
  public get cleartext() {
    return this.getBooleanAttribute('cleartext');
  }

  // drvtype - computed: true, optional: false, required: false
  public get drvtype() {
    return this.getStringAttribute('drvtype');
  }

  // ignorepurge - computed: true, optional: false, required: false
  public get ignorepurge() {
    return this.getBooleanAttribute('ignorepurge');
  }

  // imageformat - computed: true, optional: false, required: false
  public get imageformat() {
    return this.getStringAttribute('imageformat');
  }

  // imageid - computed: true, optional: false, required: false
  public get imageid() {
    return this.getStringAttribute('imageid');
  }

  // imagename - computed: true, optional: false, required: false
  public get imagename() {
    return this.getStringAttribute('imagename');
  }

  // maxsize - computed: true, optional: false, required: false
  public get maxsize() {
    return this.getStringAttribute('maxsize');
  }

  // mountpath - computed: true, optional: false, required: false
  public get mountpath() {
    return this.getStringAttribute('mountpath');
  }

  // params - computed: true, optional: false, required: false
  private _params = new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonImagesParamsList(this, "params", false);
  public get params() {
    return this._params;
  }

  // preserve - computed: true, optional: false, required: false
  public get preserve() {
    return this.getBooleanAttribute('preserve');
  }

  // readonly - computed: true, optional: false, required: false
  public get readonly() {
    return this.getBooleanAttribute('readonly');
  }

  // target - computed: true, optional: false, required: false
  public get target() {
    return this.getStringAttribute('target');
  }

  // volumelabel - computed: true, optional: false, required: false
  public get volumelabel() {
    return this.getStringAttribute('volumelabel');
  }
}

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonImagesList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonImagesOutputReference {
    return new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonImagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActionsLimitValue {
}

export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActionsLimitValueToTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActionsLimitValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActionsLimitValueToHclTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActionsLimitValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActionsLimitValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActionsLimitValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActionsLimitValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // limitburst - computed: true, optional: false, required: false
  public get limitburst() {
    return this.getNumberAttribute('limitburst');
  }

  // limitrate - computed: true, optional: false, required: false
  public get limitrate() {
    return this.getNumberAttribute('limitrate');
  }

  // limitunit - computed: true, optional: false, required: false
  public get limitunit() {
    return this.getStringAttribute('limitunit');
  }
}

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActionsLimitValueList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActionsLimitValueOutputReference {
    return new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActionsLimitValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActionsPortmapto {
}

export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActionsPortmaptoToTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActionsPortmapto): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActionsPortmaptoToHclTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActionsPortmapto): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActionsPortmaptoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActionsPortmapto | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActionsPortmapto | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // app_port - computed: true, optional: false, required: false
  public get appPort() {
    return this.getNumberAttribute('app_port');
  }
}

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActionsPortmaptoList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActionsPortmaptoOutputReference {
    return new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActionsPortmaptoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActions {
}

export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActionsToTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActionsToHclTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // drop - computed: true, optional: false, required: false
  public get drop() {
    return this.getBooleanAttribute('drop');
  }

  // limit - computed: true, optional: false, required: false
  public get limit() {
    return this.getBooleanAttribute('limit');
  }

  // limit_value - computed: true, optional: false, required: false
  private _limitValue = new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActionsLimitValueList(this, "limit_value", false);
  public get limitValue() {
    return this._limitValue;
  }

  // limitburst - computed: true, optional: false, required: false
  public get limitburst() {
    return this.getNumberAttribute('limitburst');
  }

  // limitrate - computed: true, optional: false, required: false
  public get limitrate() {
    return this.getNumberAttribute('limitrate');
  }

  // limitunit - computed: true, optional: false, required: false
  public get limitunit() {
    return this.getStringAttribute('limitunit');
  }

  // portmap - computed: true, optional: false, required: false
  public get portmap() {
    return this.getBooleanAttribute('portmap');
  }

  // portmapto - computed: true, optional: false, required: false
  private _portmapto = new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActionsPortmaptoList(this, "portmapto", false);
  public get portmapto() {
    return this._portmapto;
  }
}

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActionsList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActionsOutputReference {
    return new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsMatches {
}

export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsMatchesToTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsMatches): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsMatchesToHclTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsMatches): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsMatchesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsMatches | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsMatches | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsMatchesList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsMatchesOutputReference {
    return new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsMatchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAcls {
}

export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsToTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAcls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsToHclTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAcls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAcls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAcls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // actions - computed: true, optional: false, required: false
  private _actions = new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }

  // matches - computed: true, optional: false, required: false
  private _matches = new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsMatchesList(this, "matches", false);
  public get matches() {
    return this._matches;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsOutputReference {
    return new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfaces {
}

export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesToTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesToHclTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfaces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // acls - computed: true, optional: false, required: false
  private _acls = new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsList(this, "acls", false);
  public get acls() {
    return this._acls;
  }

  // directattach - computed: true, optional: false, required: false
  public get directattach() {
    return this.getBooleanAttribute('directattach');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // privateip - computed: true, optional: false, required: false
  public get privateip() {
    return this.getBooleanAttribute('privateip');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesOutputReference {
    return new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonModule {
}

export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonModuleToTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonModule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonModuleToHclTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonModule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonModuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonModule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonModule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // environment - computed: true, optional: false, required: false
  private _environment = new cdktf.StringMap(this, "environment");
  public get environment() {
    return this._environment;
  }

  // module_type - computed: true, optional: false, required: false
  public get moduleType() {
    return this.getStringAttribute('module_type');
  }

  // routes - computed: true, optional: false, required: false
  private _routes = new cdktf.StringMap(this, "routes");
  public get routes() {
    return this._routes;
  }

  // twin_detail - computed: true, optional: false, required: false
  public get twinDetail() {
    return this.getStringAttribute('twin_detail');
  }
}

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonModuleList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonModuleOutputReference {
    return new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonModuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonOwner {
}

export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonOwnerToTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonOwner): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonOwnerToHclTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonOwner): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonOwnerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonOwner | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonOwner | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // company - computed: true, optional: false, required: false
  public get company() {
    return this.getStringAttribute('company');
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // group - computed: true, optional: false, required: false
  public get group() {
    return this.getStringAttribute('group');
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }

  // website - computed: true, optional: false, required: false
  public get website() {
    return this.getStringAttribute('website');
  }
}

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonOwnerList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonOwnerOutputReference {
    return new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonOwnerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
