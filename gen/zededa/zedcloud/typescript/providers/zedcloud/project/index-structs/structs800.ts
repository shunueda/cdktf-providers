import * as cdktf from 'cdktf';
import { ProjectModulePolicyAppPolicyAppsManifestJsonInterfacesAclsActionsList,
ProjectModulePolicyAppPolicyAppsManifestJsonInterfacesAclsMatchesList,
ProjectModulePolicyAppPolicyAppsManifestJsonConfigurationList,
ProjectModulePolicyAppPolicyAppsManifestJsonContainerDetailList,
ProjectModulePolicyAppPolicyAppsManifestJsonDescList,
ProjectModulePolicyAppPolicyAppsManifestJsonImagesList,
ProjectModulePolicyAppPolicyAppsInterfacesList } from './structs400'
export interface ProjectModulePolicyAppPolicyAppsManifestJsonInterfacesAcls {
}

export function projectModulePolicyAppPolicyAppsManifestJsonInterfacesAclsToTerraform(struct?: ProjectModulePolicyAppPolicyAppsManifestJsonInterfacesAcls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyAppPolicyAppsManifestJsonInterfacesAclsToHclTerraform(struct?: ProjectModulePolicyAppPolicyAppsManifestJsonInterfacesAcls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyAppPolicyAppsManifestJsonInterfacesAclsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyAppPolicyAppsManifestJsonInterfacesAcls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyAppPolicyAppsManifestJsonInterfacesAcls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // actions - computed: true, optional: false, required: false
  private _actions = new ProjectModulePolicyAppPolicyAppsManifestJsonInterfacesAclsActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }

  // matches - computed: true, optional: false, required: false
  private _matches = new ProjectModulePolicyAppPolicyAppsManifestJsonInterfacesAclsMatchesList(this, "matches", false);
  public get matches() {
    return this._matches;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class ProjectModulePolicyAppPolicyAppsManifestJsonInterfacesAclsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyAppPolicyAppsManifestJsonInterfacesAclsOutputReference {
    return new ProjectModulePolicyAppPolicyAppsManifestJsonInterfacesAclsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyAppPolicyAppsManifestJsonInterfaces {
}

export function projectModulePolicyAppPolicyAppsManifestJsonInterfacesToTerraform(struct?: ProjectModulePolicyAppPolicyAppsManifestJsonInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyAppPolicyAppsManifestJsonInterfacesToHclTerraform(struct?: ProjectModulePolicyAppPolicyAppsManifestJsonInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyAppPolicyAppsManifestJsonInterfacesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyAppPolicyAppsManifestJsonInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyAppPolicyAppsManifestJsonInterfaces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // acls - computed: true, optional: false, required: false
  private _acls = new ProjectModulePolicyAppPolicyAppsManifestJsonInterfacesAclsList(this, "acls", false);
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

export class ProjectModulePolicyAppPolicyAppsManifestJsonInterfacesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyAppPolicyAppsManifestJsonInterfacesOutputReference {
    return new ProjectModulePolicyAppPolicyAppsManifestJsonInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyAppPolicyAppsManifestJsonModule {
}

export function projectModulePolicyAppPolicyAppsManifestJsonModuleToTerraform(struct?: ProjectModulePolicyAppPolicyAppsManifestJsonModule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyAppPolicyAppsManifestJsonModuleToHclTerraform(struct?: ProjectModulePolicyAppPolicyAppsManifestJsonModule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyAppPolicyAppsManifestJsonModuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyAppPolicyAppsManifestJsonModule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyAppPolicyAppsManifestJsonModule | undefined) {
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

export class ProjectModulePolicyAppPolicyAppsManifestJsonModuleList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyAppPolicyAppsManifestJsonModuleOutputReference {
    return new ProjectModulePolicyAppPolicyAppsManifestJsonModuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyAppPolicyAppsManifestJsonOwner {
}

export function projectModulePolicyAppPolicyAppsManifestJsonOwnerToTerraform(struct?: ProjectModulePolicyAppPolicyAppsManifestJsonOwner): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyAppPolicyAppsManifestJsonOwnerToHclTerraform(struct?: ProjectModulePolicyAppPolicyAppsManifestJsonOwner): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyAppPolicyAppsManifestJsonOwnerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyAppPolicyAppsManifestJsonOwner | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyAppPolicyAppsManifestJsonOwner | undefined) {
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

export class ProjectModulePolicyAppPolicyAppsManifestJsonOwnerList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyAppPolicyAppsManifestJsonOwnerOutputReference {
    return new ProjectModulePolicyAppPolicyAppsManifestJsonOwnerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyAppPolicyAppsManifestJsonPermissions {
}

export function projectModulePolicyAppPolicyAppsManifestJsonPermissionsToTerraform(struct?: ProjectModulePolicyAppPolicyAppsManifestJsonPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyAppPolicyAppsManifestJsonPermissionsToHclTerraform(struct?: ProjectModulePolicyAppPolicyAppsManifestJsonPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyAppPolicyAppsManifestJsonPermissionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyAppPolicyAppsManifestJsonPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyAppPolicyAppsManifestJsonPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}

export class ProjectModulePolicyAppPolicyAppsManifestJsonPermissionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyAppPolicyAppsManifestJsonPermissionsOutputReference {
    return new ProjectModulePolicyAppPolicyAppsManifestJsonPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyAppPolicyAppsManifestJsonResources {
}

export function projectModulePolicyAppPolicyAppsManifestJsonResourcesToTerraform(struct?: ProjectModulePolicyAppPolicyAppsManifestJsonResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyAppPolicyAppsManifestJsonResourcesToHclTerraform(struct?: ProjectModulePolicyAppPolicyAppsManifestJsonResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyAppPolicyAppsManifestJsonResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyAppPolicyAppsManifestJsonResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyAppPolicyAppsManifestJsonResources | undefined) {
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

export class ProjectModulePolicyAppPolicyAppsManifestJsonResourcesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyAppPolicyAppsManifestJsonResourcesOutputReference {
    return new ProjectModulePolicyAppPolicyAppsManifestJsonResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyAppPolicyAppsManifestJson {
}

export function projectModulePolicyAppPolicyAppsManifestJsonToTerraform(struct?: ProjectModulePolicyAppPolicyAppsManifestJson): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyAppPolicyAppsManifestJsonToHclTerraform(struct?: ProjectModulePolicyAppPolicyAppsManifestJson): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyAppPolicyAppsManifestJsonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyAppPolicyAppsManifestJson | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyAppPolicyAppsManifestJson | undefined) {
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
  private _configuration = new ProjectModulePolicyAppPolicyAppsManifestJsonConfigurationList(this, "configuration", false);
  public get configuration() {
    return this._configuration;
  }

  // container_detail - computed: true, optional: false, required: false
  private _containerDetail = new ProjectModulePolicyAppPolicyAppsManifestJsonContainerDetailList(this, "container_detail", false);
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
  private _desc = new ProjectModulePolicyAppPolicyAppsManifestJsonDescList(this, "desc", false);
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
  private _images = new ProjectModulePolicyAppPolicyAppsManifestJsonImagesList(this, "images", false);
  public get images() {
    return this._images;
  }

  // interfaces - computed: true, optional: false, required: false
  private _interfaces = new ProjectModulePolicyAppPolicyAppsManifestJsonInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }

  // module - computed: true, optional: false, required: false
  private _module = new ProjectModulePolicyAppPolicyAppsManifestJsonModuleList(this, "module", false);
  public get module() {
    return this._module;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // owner - computed: true, optional: false, required: false
  private _owner = new ProjectModulePolicyAppPolicyAppsManifestJsonOwnerList(this, "owner", false);
  public get owner() {
    return this._owner;
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new ProjectModulePolicyAppPolicyAppsManifestJsonPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // persistent_runtime_size_bytes - computed: true, optional: false, required: false
  public get persistentRuntimeSizeBytes() {
    return this.getStringAttribute('persistent_runtime_size_bytes');
  }

  // resources - computed: true, optional: false, required: false
  private _resources = new ProjectModulePolicyAppPolicyAppsManifestJsonResourcesList(this, "resources", false);
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

export class ProjectModulePolicyAppPolicyAppsManifestJsonList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyAppPolicyAppsManifestJsonOutputReference {
    return new ProjectModulePolicyAppPolicyAppsManifestJsonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyAppPolicyAppsParentDetail {
}

export function projectModulePolicyAppPolicyAppsParentDetailToTerraform(struct?: ProjectModulePolicyAppPolicyAppsParentDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyAppPolicyAppsParentDetailToHclTerraform(struct?: ProjectModulePolicyAppPolicyAppsParentDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyAppPolicyAppsParentDetailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyAppPolicyAppsParentDetail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyAppPolicyAppsParentDetail | undefined) {
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

export class ProjectModulePolicyAppPolicyAppsParentDetailList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyAppPolicyAppsParentDetailOutputReference {
    return new ProjectModulePolicyAppPolicyAppsParentDetailOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyAppPolicyApps {
}

export function projectModulePolicyAppPolicyAppsToTerraform(struct?: ProjectModulePolicyAppPolicyApps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyAppPolicyAppsToHclTerraform(struct?: ProjectModulePolicyAppPolicyApps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyAppPolicyAppsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyAppPolicyApps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyAppPolicyApps | undefined) {
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
  private _interfaces = new ProjectModulePolicyAppPolicyAppsInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }

  // manifest_json - computed: true, optional: false, required: false
  private _manifestJson = new ProjectModulePolicyAppPolicyAppsManifestJsonList(this, "manifest_json", false);
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
  private _parentDetail = new ProjectModulePolicyAppPolicyAppsParentDetailList(this, "parent_detail", false);
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

export class ProjectModulePolicyAppPolicyAppsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyAppPolicyAppsOutputReference {
    return new ProjectModulePolicyAppPolicyAppsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyAppPolicy {
}

export function projectModulePolicyAppPolicyToTerraform(struct?: ProjectModulePolicyAppPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyAppPolicyToHclTerraform(struct?: ProjectModulePolicyAppPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyAppPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyAppPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyAppPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // apps - computed: true, optional: false, required: false
  private _apps = new ProjectModulePolicyAppPolicyAppsList(this, "apps", false);
  public get apps() {
    return this._apps;
  }
}

export class ProjectModulePolicyAppPolicyList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyAppPolicyOutputReference {
    return new ProjectModulePolicyAppPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyAttestationPolicy {
}

export function projectModulePolicyAttestationPolicyToTerraform(struct?: ProjectModulePolicyAttestationPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyAttestationPolicyToHclTerraform(struct?: ProjectModulePolicyAttestationPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyAttestationPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyAttestationPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyAttestationPolicy | undefined) {
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

export class ProjectModulePolicyAttestationPolicyList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyAttestationPolicyOutputReference {
    return new ProjectModulePolicyAttestationPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollmentGroupCertificateEnrollment {
}

export function projectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollmentGroupCertificateEnrollmentToTerraform(struct?: ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollmentGroupCertificateEnrollment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollmentGroupCertificateEnrollmentToHclTerraform(struct?: ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollmentGroupCertificateEnrollment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollmentGroupCertificateEnrollmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollmentGroupCertificateEnrollment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollmentGroupCertificateEnrollment | undefined) {
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

export class ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollmentGroupCertificateEnrollmentList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollmentGroupCertificateEnrollmentOutputReference {
    return new ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollmentGroupCertificateEnrollmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollment {
}

export function projectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollmentToTerraform(struct?: ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollmentToHclTerraform(struct?: ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group_certificate_enrollment - computed: true, optional: false, required: false
  private _groupCertificateEnrollment = new ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollmentGroupCertificateEnrollmentList(this, "group_certificate_enrollment", false);
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

export class ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollmentList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollmentOutputReference {
    return new ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentGroupSymmetricKeyEnrollment {
}

export function projectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentGroupSymmetricKeyEnrollmentToTerraform(struct?: ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentGroupSymmetricKeyEnrollment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentGroupSymmetricKeyEnrollmentToHclTerraform(struct?: ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentGroupSymmetricKeyEnrollment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentGroupSymmetricKeyEnrollmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentGroupSymmetricKeyEnrollment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentGroupSymmetricKeyEnrollment | undefined) {
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

export class ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentGroupSymmetricKeyEnrollmentList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentGroupSymmetricKeyEnrollmentOutputReference {
    return new ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentGroupSymmetricKeyEnrollmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentIndividualSymmetricKeyEnrollment {
}

export function projectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentIndividualSymmetricKeyEnrollmentToTerraform(struct?: ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentIndividualSymmetricKeyEnrollment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentIndividualSymmetricKeyEnrollmentToHclTerraform(struct?: ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentIndividualSymmetricKeyEnrollment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentIndividualSymmetricKeyEnrollmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentIndividualSymmetricKeyEnrollment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentIndividualSymmetricKeyEnrollment | undefined) {
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

export class ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentIndividualSymmetricKeyEnrollmentList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentIndividualSymmetricKeyEnrollmentOutputReference {
    return new ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentIndividualSymmetricKeyEnrollmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollment {
}

export function projectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentToTerraform(struct?: ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentToHclTerraform(struct?: ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group_symmetric_key_enrollment - computed: true, optional: false, required: false
  private _groupSymmetricKeyEnrollment = new ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentGroupSymmetricKeyEnrollmentList(this, "group_symmetric_key_enrollment", false);
  public get groupSymmetricKeyEnrollment() {
    return this._groupSymmetricKeyEnrollment;
  }

  // individual_symmetric_key_enrollment - computed: true, optional: false, required: false
  private _individualSymmetricKeyEnrollment = new ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentIndividualSymmetricKeyEnrollmentList(this, "individual_symmetric_key_enrollment", false);
  public get individualSymmetricKeyEnrollment() {
    return this._individualSymmetricKeyEnrollment;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentOutputReference {
    return new ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentTpmEnrollment {
}

export function projectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentTpmEnrollmentToTerraform(struct?: ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentTpmEnrollment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentTpmEnrollmentToHclTerraform(struct?: ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentTpmEnrollment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentTpmEnrollmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentTpmEnrollment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentTpmEnrollment | undefined) {
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

export class ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentTpmEnrollmentList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentTpmEnrollmentOutputReference {
    return new ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentTpmEnrollmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollment {
}

export function projectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentToTerraform(struct?: ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentToHclTerraform(struct?: ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollment | undefined) {
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
  private _certificateEnrollment = new ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollmentList(this, "certificate_enrollment", false);
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
  private _symmetricKeyEnrollment = new ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentList(this, "symmetric_key_enrollment", false);
  public get symmetricKeyEnrollment() {
    return this._symmetricKeyEnrollment;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // tpm_enrollment - computed: true, optional: false, required: false
  private _tpmEnrollment = new ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentTpmEnrollmentList(this, "tpm_enrollment", false);
  public get tpmEnrollment() {
    return this._tpmEnrollment;
  }
}

export class ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentOutputReference {
    return new ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetailSKU {
}

export function projectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetailSKUToTerraform(struct?: ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetailSKU): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetailSKUToHclTerraform(struct?: ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetailSKU): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetailSKUOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetailSKU | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetailSKU | undefined) {
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

export class ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetailSKUList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetailSKUOutputReference {
    return new ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetailSKUOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetail {
}

export function projectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetailToTerraform(struct?: ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetailToHclTerraform(struct?: ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetail | undefined) {
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
  private _sKU = new ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetailSKUList(this, "s_k_u", false);
  public get sKU() {
    return this._sKU;
  }

  // subscription_id - computed: true, optional: false, required: false
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
}

export class ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetailList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetailOutputReference {
    return new ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetailOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsService {
}

export function projectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceToTerraform(struct?: ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceToHclTerraform(struct?: ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsService | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enrollment - computed: true, optional: false, required: false
  private _enrollment = new ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentList(this, "enrollment", false);
  public get enrollment() {
    return this._enrollment;
  }

  // service_detail - computed: true, optional: false, required: false
  private _serviceDetail = new ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetailList(this, "service_detail", false);
  public get serviceDetail() {
    return this._serviceDetail;
  }
}

export class ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceOutputReference {
    return new ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetailSKU {
}

export function projectModulePolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetailSKUToTerraform(struct?: ProjectModulePolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetailSKU): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetailSKUToHclTerraform(struct?: ProjectModulePolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetailSKU): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetailSKUOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetailSKU | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetailSKU | undefined) {
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

export class ProjectModulePolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetailSKUList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetailSKUOutputReference {
    return new ProjectModulePolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetailSKUOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetail {
}

export function projectModulePolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetailToTerraform(struct?: ProjectModulePolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetailToHclTerraform(struct?: ProjectModulePolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetail | undefined) {
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
  private _sKU = new ProjectModulePolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetailSKUList(this, "s_k_u", false);
  public get sKU() {
    return this._sKU;
  }

  // subscription_id - computed: true, optional: false, required: false
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
}

export class ProjectModulePolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetailList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetailOutputReference {
    return new ProjectModulePolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetailOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyAzurePolicyAzureResourceAndServicesIotHubService {
}

export function projectModulePolicyAzurePolicyAzureResourceAndServicesIotHubServiceToTerraform(struct?: ProjectModulePolicyAzurePolicyAzureResourceAndServicesIotHubService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyAzurePolicyAzureResourceAndServicesIotHubServiceToHclTerraform(struct?: ProjectModulePolicyAzurePolicyAzureResourceAndServicesIotHubService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyAzurePolicyAzureResourceAndServicesIotHubServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyAzurePolicyAzureResourceAndServicesIotHubService | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyAzurePolicyAzureResourceAndServicesIotHubService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // service_detail - computed: true, optional: false, required: false
  private _serviceDetail = new ProjectModulePolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetailList(this, "service_detail", false);
  public get serviceDetail() {
    return this._serviceDetail;
  }
}

export class ProjectModulePolicyAzurePolicyAzureResourceAndServicesIotHubServiceList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyAzurePolicyAzureResourceAndServicesIotHubServiceOutputReference {
    return new ProjectModulePolicyAzurePolicyAzureResourceAndServicesIotHubServiceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyAzurePolicyAzureResourceAndServicesResourceGroup {
}

export function projectModulePolicyAzurePolicyAzureResourceAndServicesResourceGroupToTerraform(struct?: ProjectModulePolicyAzurePolicyAzureResourceAndServicesResourceGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyAzurePolicyAzureResourceAndServicesResourceGroupToHclTerraform(struct?: ProjectModulePolicyAzurePolicyAzureResourceAndServicesResourceGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyAzurePolicyAzureResourceAndServicesResourceGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyAzurePolicyAzureResourceAndServicesResourceGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyAzurePolicyAzureResourceAndServicesResourceGroup | undefined) {
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

export class ProjectModulePolicyAzurePolicyAzureResourceAndServicesResourceGroupList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyAzurePolicyAzureResourceAndServicesResourceGroupOutputReference {
    return new ProjectModulePolicyAzurePolicyAzureResourceAndServicesResourceGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyAzurePolicyAzureResourceAndServices {
}

export function projectModulePolicyAzurePolicyAzureResourceAndServicesToTerraform(struct?: ProjectModulePolicyAzurePolicyAzureResourceAndServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyAzurePolicyAzureResourceAndServicesToHclTerraform(struct?: ProjectModulePolicyAzurePolicyAzureResourceAndServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyAzurePolicyAzureResourceAndServicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyAzurePolicyAzureResourceAndServices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyAzurePolicyAzureResourceAndServices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dps_service - computed: true, optional: false, required: false
  private _dpsService = new ProjectModulePolicyAzurePolicyAzureResourceAndServicesDpsServiceList(this, "dps_service", false);
  public get dpsService() {
    return this._dpsService;
  }

  // iot_hub_service - computed: true, optional: false, required: false
  private _iotHubService = new ProjectModulePolicyAzurePolicyAzureResourceAndServicesIotHubServiceList(this, "iot_hub_service", false);
  public get iotHubService() {
    return this._iotHubService;
  }

  // resource_group - computed: true, optional: false, required: false
  private _resourceGroup = new ProjectModulePolicyAzurePolicyAzureResourceAndServicesResourceGroupList(this, "resource_group", false);
  public get resourceGroup() {
    return this._resourceGroup;
  }
}

export class ProjectModulePolicyAzurePolicyAzureResourceAndServicesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyAzurePolicyAzureResourceAndServicesOutputReference {
    return new ProjectModulePolicyAzurePolicyAzureResourceAndServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyAzurePolicyCertificateEcdsaEncryption {
}

export function projectModulePolicyAzurePolicyCertificateEcdsaEncryptionToTerraform(struct?: ProjectModulePolicyAzurePolicyCertificateEcdsaEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyAzurePolicyCertificateEcdsaEncryptionToHclTerraform(struct?: ProjectModulePolicyAzurePolicyCertificateEcdsaEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyAzurePolicyCertificateEcdsaEncryptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyAzurePolicyCertificateEcdsaEncryption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyAzurePolicyCertificateEcdsaEncryption | undefined) {
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

export class ProjectModulePolicyAzurePolicyCertificateEcdsaEncryptionList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyAzurePolicyCertificateEcdsaEncryptionOutputReference {
    return new ProjectModulePolicyAzurePolicyCertificateEcdsaEncryptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyAzurePolicyCertificateIssuer {
}

export function projectModulePolicyAzurePolicyCertificateIssuerToTerraform(struct?: ProjectModulePolicyAzurePolicyCertificateIssuer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyAzurePolicyCertificateIssuerToHclTerraform(struct?: ProjectModulePolicyAzurePolicyCertificateIssuer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyAzurePolicyCertificateIssuerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyAzurePolicyCertificateIssuer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyAzurePolicyCertificateIssuer | undefined) {
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

export class ProjectModulePolicyAzurePolicyCertificateIssuerList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyAzurePolicyCertificateIssuerOutputReference {
    return new ProjectModulePolicyAzurePolicyCertificateIssuerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyAzurePolicyCertificateRsaEcryption {
}

export function projectModulePolicyAzurePolicyCertificateRsaEcryptionToTerraform(struct?: ProjectModulePolicyAzurePolicyCertificateRsaEcryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyAzurePolicyCertificateRsaEcryptionToHclTerraform(struct?: ProjectModulePolicyAzurePolicyCertificateRsaEcryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyAzurePolicyCertificateRsaEcryptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyAzurePolicyCertificateRsaEcryption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyAzurePolicyCertificateRsaEcryption | undefined) {
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

export class ProjectModulePolicyAzurePolicyCertificateRsaEcryptionList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyAzurePolicyCertificateRsaEcryptionOutputReference {
    return new ProjectModulePolicyAzurePolicyCertificateRsaEcryptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyAzurePolicyCertificateSanValues {
}

export function projectModulePolicyAzurePolicyCertificateSanValuesToTerraform(struct?: ProjectModulePolicyAzurePolicyCertificateSanValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyAzurePolicyCertificateSanValuesToHclTerraform(struct?: ProjectModulePolicyAzurePolicyCertificateSanValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyAzurePolicyCertificateSanValuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyAzurePolicyCertificateSanValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyAzurePolicyCertificateSanValues | undefined) {
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

export class ProjectModulePolicyAzurePolicyCertificateSanValuesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyAzurePolicyCertificateSanValuesOutputReference {
    return new ProjectModulePolicyAzurePolicyCertificateSanValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyAzurePolicyCertificateSubject {
}

export function projectModulePolicyAzurePolicyCertificateSubjectToTerraform(struct?: ProjectModulePolicyAzurePolicyCertificateSubject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyAzurePolicyCertificateSubjectToHclTerraform(struct?: ProjectModulePolicyAzurePolicyCertificateSubject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyAzurePolicyCertificateSubjectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyAzurePolicyCertificateSubject | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyAzurePolicyCertificateSubject | undefined) {
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

export class ProjectModulePolicyAzurePolicyCertificateSubjectList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyAzurePolicyCertificateSubjectOutputReference {
    return new ProjectModulePolicyAzurePolicyCertificateSubjectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyAzurePolicyCertificate {
}

export function projectModulePolicyAzurePolicyCertificateToTerraform(struct?: ProjectModulePolicyAzurePolicyCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyAzurePolicyCertificateToHclTerraform(struct?: ProjectModulePolicyAzurePolicyCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyAzurePolicyCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyAzurePolicyCertificate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyAzurePolicyCertificate | undefined) {
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
  private _ecdsaEncryption = new ProjectModulePolicyAzurePolicyCertificateEcdsaEncryptionList(this, "ecdsa_encryption", false);
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
  private _issuer = new ProjectModulePolicyAzurePolicyCertificateIssuerList(this, "issuer", false);
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
  private _rsaEcryption = new ProjectModulePolicyAzurePolicyCertificateRsaEcryptionList(this, "rsa_ecryption", false);
  public get rsaEcryption() {
    return this._rsaEcryption;
  }

  // san_values - computed: true, optional: false, required: false
  private _sanValues = new ProjectModulePolicyAzurePolicyCertificateSanValuesList(this, "san_values", false);
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
  private _subject = new ProjectModulePolicyAzurePolicyCertificateSubjectList(this, "subject", false);
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

export class ProjectModulePolicyAzurePolicyCertificateList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyAzurePolicyCertificateOutputReference {
    return new ProjectModulePolicyAzurePolicyCertificateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyAzurePolicy {
}

export function projectModulePolicyAzurePolicyToTerraform(struct?: ProjectModulePolicyAzurePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyAzurePolicyToHclTerraform(struct?: ProjectModulePolicyAzurePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyAzurePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyAzurePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyAzurePolicy | undefined) {
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
  private _azureResourceAndServices = new ProjectModulePolicyAzurePolicyAzureResourceAndServicesList(this, "azure_resource_and_services", false);
  public get azureResourceAndServices() {
    return this._azureResourceAndServices;
  }

  // certificate - computed: true, optional: false, required: false
  private _certificate = new ProjectModulePolicyAzurePolicyCertificateList(this, "certificate", false);
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

export class ProjectModulePolicyAzurePolicyList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyAzurePolicyOutputReference {
    return new ProjectModulePolicyAzurePolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyClusterPolicyClusterConfig {
}

export function projectModulePolicyClusterPolicyClusterConfigToTerraform(struct?: ProjectModulePolicyClusterPolicyClusterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyClusterPolicyClusterConfigToHclTerraform(struct?: ProjectModulePolicyClusterPolicyClusterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyClusterPolicyClusterConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyClusterPolicyClusterConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyClusterPolicyClusterConfig | undefined) {
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

export class ProjectModulePolicyClusterPolicyClusterConfigList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyClusterPolicyClusterConfigOutputReference {
    return new ProjectModulePolicyClusterPolicyClusterConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyClusterPolicy {
}

export function projectModulePolicyClusterPolicyToTerraform(struct?: ProjectModulePolicyClusterPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyClusterPolicyToHclTerraform(struct?: ProjectModulePolicyClusterPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyClusterPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyClusterPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyClusterPolicy | undefined) {
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
  private _clusterConfig = new ProjectModulePolicyClusterPolicyClusterConfigList(this, "cluster_config", false);
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

export class ProjectModulePolicyClusterPolicyList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyClusterPolicyOutputReference {
    return new ProjectModulePolicyClusterPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyConfigurationLockPolicy {
}

export function projectModulePolicyConfigurationLockPolicyToTerraform(struct?: ProjectModulePolicyConfigurationLockPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyConfigurationLockPolicyToHclTerraform(struct?: ProjectModulePolicyConfigurationLockPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyConfigurationLockPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyConfigurationLockPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyConfigurationLockPolicy | undefined) {
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

export class ProjectModulePolicyConfigurationLockPolicyList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyConfigurationLockPolicyOutputReference {
    return new ProjectModulePolicyConfigurationLockPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyEdgeviewPolicyEdgeviewcfgAppPolicy {
}

export function projectModulePolicyEdgeviewPolicyEdgeviewcfgAppPolicyToTerraform(struct?: ProjectModulePolicyEdgeviewPolicyEdgeviewcfgAppPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyEdgeviewPolicyEdgeviewcfgAppPolicyToHclTerraform(struct?: ProjectModulePolicyEdgeviewPolicyEdgeviewcfgAppPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyEdgeviewPolicyEdgeviewcfgAppPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyEdgeviewPolicyEdgeviewcfgAppPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyEdgeviewPolicyEdgeviewcfgAppPolicy | undefined) {
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

export class ProjectModulePolicyEdgeviewPolicyEdgeviewcfgAppPolicyList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyEdgeviewPolicyEdgeviewcfgAppPolicyOutputReference {
    return new ProjectModulePolicyEdgeviewPolicyEdgeviewcfgAppPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyEdgeviewPolicyEdgeviewcfgDevPolicy {
}

export function projectModulePolicyEdgeviewPolicyEdgeviewcfgDevPolicyToTerraform(struct?: ProjectModulePolicyEdgeviewPolicyEdgeviewcfgDevPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyEdgeviewPolicyEdgeviewcfgDevPolicyToHclTerraform(struct?: ProjectModulePolicyEdgeviewPolicyEdgeviewcfgDevPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyEdgeviewPolicyEdgeviewcfgDevPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyEdgeviewPolicyEdgeviewcfgDevPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyEdgeviewPolicyEdgeviewcfgDevPolicy | undefined) {
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

export class ProjectModulePolicyEdgeviewPolicyEdgeviewcfgDevPolicyList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyEdgeviewPolicyEdgeviewcfgDevPolicyOutputReference {
    return new ProjectModulePolicyEdgeviewPolicyEdgeviewcfgDevPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyEdgeviewPolicyEdgeviewcfgExtPolicy {
}

export function projectModulePolicyEdgeviewPolicyEdgeviewcfgExtPolicyToTerraform(struct?: ProjectModulePolicyEdgeviewPolicyEdgeviewcfgExtPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyEdgeviewPolicyEdgeviewcfgExtPolicyToHclTerraform(struct?: ProjectModulePolicyEdgeviewPolicyEdgeviewcfgExtPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyEdgeviewPolicyEdgeviewcfgExtPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyEdgeviewPolicyEdgeviewcfgExtPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyEdgeviewPolicyEdgeviewcfgExtPolicy | undefined) {
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

export class ProjectModulePolicyEdgeviewPolicyEdgeviewcfgExtPolicyList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyEdgeviewPolicyEdgeviewcfgExtPolicyOutputReference {
    return new ProjectModulePolicyEdgeviewPolicyEdgeviewcfgExtPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyEdgeviewPolicyEdgeviewcfgJwtInfo {
}

export function projectModulePolicyEdgeviewPolicyEdgeviewcfgJwtInfoToTerraform(struct?: ProjectModulePolicyEdgeviewPolicyEdgeviewcfgJwtInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyEdgeviewPolicyEdgeviewcfgJwtInfoToHclTerraform(struct?: ProjectModulePolicyEdgeviewPolicyEdgeviewcfgJwtInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyEdgeviewPolicyEdgeviewcfgJwtInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyEdgeviewPolicyEdgeviewcfgJwtInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyEdgeviewPolicyEdgeviewcfgJwtInfo | undefined) {
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

export class ProjectModulePolicyEdgeviewPolicyEdgeviewcfgJwtInfoList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyEdgeviewPolicyEdgeviewcfgJwtInfoOutputReference {
    return new ProjectModulePolicyEdgeviewPolicyEdgeviewcfgJwtInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyEdgeviewPolicyEdgeviewcfg {
}

export function projectModulePolicyEdgeviewPolicyEdgeviewcfgToTerraform(struct?: ProjectModulePolicyEdgeviewPolicyEdgeviewcfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyEdgeviewPolicyEdgeviewcfgToHclTerraform(struct?: ProjectModulePolicyEdgeviewPolicyEdgeviewcfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyEdgeviewPolicyEdgeviewcfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyEdgeviewPolicyEdgeviewcfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyEdgeviewPolicyEdgeviewcfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // app_policy - computed: true, optional: false, required: false
  private _appPolicy = new ProjectModulePolicyEdgeviewPolicyEdgeviewcfgAppPolicyList(this, "app_policy", false);
  public get appPolicy() {
    return this._appPolicy;
  }

  // dev_policy - computed: true, optional: false, required: false
  private _devPolicy = new ProjectModulePolicyEdgeviewPolicyEdgeviewcfgDevPolicyList(this, "dev_policy", false);
  public get devPolicy() {
    return this._devPolicy;
  }

  // ext_policy - computed: true, optional: false, required: false
  private _extPolicy = new ProjectModulePolicyEdgeviewPolicyEdgeviewcfgExtPolicyList(this, "ext_policy", false);
  public get extPolicy() {
    return this._extPolicy;
  }

  // generation_id - computed: true, optional: false, required: false
  public get generationId() {
    return this.getNumberAttribute('generation_id');
  }

  // jwt_info - computed: true, optional: false, required: false
  private _jwtInfo = new ProjectModulePolicyEdgeviewPolicyEdgeviewcfgJwtInfoList(this, "jwt_info", false);
  public get jwtInfo() {
    return this._jwtInfo;
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }
}

export class ProjectModulePolicyEdgeviewPolicyEdgeviewcfgList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyEdgeviewPolicyEdgeviewcfgOutputReference {
    return new ProjectModulePolicyEdgeviewPolicyEdgeviewcfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyEdgeviewPolicy {
}

export function projectModulePolicyEdgeviewPolicyToTerraform(struct?: ProjectModulePolicyEdgeviewPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyEdgeviewPolicyToHclTerraform(struct?: ProjectModulePolicyEdgeviewPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyEdgeviewPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyEdgeviewPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyEdgeviewPolicy | undefined) {
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
  private _edgeviewcfg = new ProjectModulePolicyEdgeviewPolicyEdgeviewcfgList(this, "edgeviewcfg", false);
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

export class ProjectModulePolicyEdgeviewPolicyList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyEdgeviewPolicyOutputReference {
    return new ProjectModulePolicyEdgeviewPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyLocalOperatorConsolePolicy {
}

export function projectModulePolicyLocalOperatorConsolePolicyToTerraform(struct?: ProjectModulePolicyLocalOperatorConsolePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyLocalOperatorConsolePolicyToHclTerraform(struct?: ProjectModulePolicyLocalOperatorConsolePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyLocalOperatorConsolePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyLocalOperatorConsolePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyLocalOperatorConsolePolicy | undefined) {
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

export class ProjectModulePolicyLocalOperatorConsolePolicyList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyLocalOperatorConsolePolicyOutputReference {
    return new ProjectModulePolicyLocalOperatorConsolePolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyModulePolicyAppsInterfacesAclsActionsMapparams {
}

export function projectModulePolicyModulePolicyAppsInterfacesAclsActionsMapparamsToTerraform(struct?: ProjectModulePolicyModulePolicyAppsInterfacesAclsActionsMapparams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyModulePolicyAppsInterfacesAclsActionsMapparamsToHclTerraform(struct?: ProjectModulePolicyModulePolicyAppsInterfacesAclsActionsMapparams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyModulePolicyAppsInterfacesAclsActionsMapparamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyModulePolicyAppsInterfacesAclsActionsMapparams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyModulePolicyAppsInterfacesAclsActionsMapparams | undefined) {
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

export class ProjectModulePolicyModulePolicyAppsInterfacesAclsActionsMapparamsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyModulePolicyAppsInterfacesAclsActionsMapparamsOutputReference {
    return new ProjectModulePolicyModulePolicyAppsInterfacesAclsActionsMapparamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyModulePolicyAppsInterfacesAclsActions {
}

export function projectModulePolicyModulePolicyAppsInterfacesAclsActionsToTerraform(struct?: ProjectModulePolicyModulePolicyAppsInterfacesAclsActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyModulePolicyAppsInterfacesAclsActionsToHclTerraform(struct?: ProjectModulePolicyModulePolicyAppsInterfacesAclsActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyModulePolicyAppsInterfacesAclsActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyModulePolicyAppsInterfacesAclsActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyModulePolicyAppsInterfacesAclsActions | undefined) {
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
  private _mapparams = new ProjectModulePolicyModulePolicyAppsInterfacesAclsActionsMapparamsList(this, "mapparams", false);
  public get mapparams() {
    return this._mapparams;
  }

  // portmap - computed: true, optional: false, required: false
  public get portmap() {
    return this.getBooleanAttribute('portmap');
  }
}

export class ProjectModulePolicyModulePolicyAppsInterfacesAclsActionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyModulePolicyAppsInterfacesAclsActionsOutputReference {
    return new ProjectModulePolicyModulePolicyAppsInterfacesAclsActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyModulePolicyAppsInterfacesAclsMatches {
}

export function projectModulePolicyModulePolicyAppsInterfacesAclsMatchesToTerraform(struct?: ProjectModulePolicyModulePolicyAppsInterfacesAclsMatches): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyModulePolicyAppsInterfacesAclsMatchesToHclTerraform(struct?: ProjectModulePolicyModulePolicyAppsInterfacesAclsMatches): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyModulePolicyAppsInterfacesAclsMatchesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyModulePolicyAppsInterfacesAclsMatches | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyModulePolicyAppsInterfacesAclsMatches | undefined) {
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

export class ProjectModulePolicyModulePolicyAppsInterfacesAclsMatchesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyModulePolicyAppsInterfacesAclsMatchesOutputReference {
    return new ProjectModulePolicyModulePolicyAppsInterfacesAclsMatchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyModulePolicyAppsInterfacesAcls {
}

export function projectModulePolicyModulePolicyAppsInterfacesAclsToTerraform(struct?: ProjectModulePolicyModulePolicyAppsInterfacesAcls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyModulePolicyAppsInterfacesAclsToHclTerraform(struct?: ProjectModulePolicyModulePolicyAppsInterfacesAcls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyModulePolicyAppsInterfacesAclsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyModulePolicyAppsInterfacesAcls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyModulePolicyAppsInterfacesAcls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // actions - computed: true, optional: false, required: false
  private _actions = new ProjectModulePolicyModulePolicyAppsInterfacesAclsActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // matches - computed: true, optional: false, required: false
  private _matches = new ProjectModulePolicyModulePolicyAppsInterfacesAclsMatchesList(this, "matches", false);
  public get matches() {
    return this._matches;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class ProjectModulePolicyModulePolicyAppsInterfacesAclsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyModulePolicyAppsInterfacesAclsOutputReference {
    return new ProjectModulePolicyModulePolicyAppsInterfacesAclsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyModulePolicyAppsInterfacesEidregisterLispMapServers {
}

export function projectModulePolicyModulePolicyAppsInterfacesEidregisterLispMapServersToTerraform(struct?: ProjectModulePolicyModulePolicyAppsInterfacesEidregisterLispMapServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyModulePolicyAppsInterfacesEidregisterLispMapServersToHclTerraform(struct?: ProjectModulePolicyModulePolicyAppsInterfacesEidregisterLispMapServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyModulePolicyAppsInterfacesEidregisterLispMapServersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyModulePolicyAppsInterfacesEidregisterLispMapServers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyModulePolicyAppsInterfacesEidregisterLispMapServers | undefined) {
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

export class ProjectModulePolicyModulePolicyAppsInterfacesEidregisterLispMapServersList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyModulePolicyAppsInterfacesEidregisterLispMapServersOutputReference {
    return new ProjectModulePolicyModulePolicyAppsInterfacesEidregisterLispMapServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyModulePolicyAppsInterfacesEidregister {
}

export function projectModulePolicyModulePolicyAppsInterfacesEidregisterToTerraform(struct?: ProjectModulePolicyModulePolicyAppsInterfacesEidregister): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyModulePolicyAppsInterfacesEidregisterToHclTerraform(struct?: ProjectModulePolicyModulePolicyAppsInterfacesEidregister): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyModulePolicyAppsInterfacesEidregisterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyModulePolicyAppsInterfacesEidregister | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyModulePolicyAppsInterfacesEidregister | undefined) {
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
  private _lispMapServers = new ProjectModulePolicyModulePolicyAppsInterfacesEidregisterLispMapServersList(this, "lisp_map_servers", false);
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

export class ProjectModulePolicyModulePolicyAppsInterfacesEidregisterList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyModulePolicyAppsInterfacesEidregisterOutputReference {
    return new ProjectModulePolicyModulePolicyAppsInterfacesEidregisterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyModulePolicyAppsInterfacesIo {
}

export function projectModulePolicyModulePolicyAppsInterfacesIoToTerraform(struct?: ProjectModulePolicyModulePolicyAppsInterfacesIo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyModulePolicyAppsInterfacesIoToHclTerraform(struct?: ProjectModulePolicyModulePolicyAppsInterfacesIo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyModulePolicyAppsInterfacesIoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyModulePolicyAppsInterfacesIo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyModulePolicyAppsInterfacesIo | undefined) {
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

export class ProjectModulePolicyModulePolicyAppsInterfacesIoList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyModulePolicyAppsInterfacesIoOutputReference {
    return new ProjectModulePolicyModulePolicyAppsInterfacesIoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyModulePolicyAppsInterfaces {
}

export function projectModulePolicyModulePolicyAppsInterfacesToTerraform(struct?: ProjectModulePolicyModulePolicyAppsInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyModulePolicyAppsInterfacesToHclTerraform(struct?: ProjectModulePolicyModulePolicyAppsInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyModulePolicyAppsInterfacesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyModulePolicyAppsInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyModulePolicyAppsInterfaces | undefined) {
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
  private _acls = new ProjectModulePolicyModulePolicyAppsInterfacesAclsList(this, "acls", false);
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
  private _eidregister = new ProjectModulePolicyModulePolicyAppsInterfacesEidregisterList(this, "eidregister", false);
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
  private _io = new ProjectModulePolicyModulePolicyAppsInterfacesIoList(this, "io", false);
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

export class ProjectModulePolicyModulePolicyAppsInterfacesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyModulePolicyAppsInterfacesOutputReference {
    return new ProjectModulePolicyModulePolicyAppsInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsCondition {
}

export function projectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsConditionToTerraform(struct?: ProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsConditionToHclTerraform(struct?: ProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsCondition | undefined) {
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

export class ProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsConditionList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsConditionOutputReference {
    return new ProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptions {
}

export function projectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsToTerraform(struct?: ProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsToHclTerraform(struct?: ProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptions | undefined) {
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

export class ProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsOutputReference {
    return new ProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariables {
}

export function projectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesToTerraform(struct?: ProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesToHclTerraform(struct?: ProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariables | undefined) {
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
  private _options = new ProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsList(this, "options", false);
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

export class ProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesOutputReference {
    return new ProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroups {
}

export function projectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsToTerraform(struct?: ProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsToHclTerraform(struct?: ProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // condition - computed: true, optional: false, required: false
  private _condition = new ProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsConditionList(this, "condition", false);
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
  private _variables = new ProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesList(this, "variables", false);
  public get variables() {
    return this._variables;
  }
}

export class ProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsOutputReference {
    return new ProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfig {
}

export function projectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigToTerraform(struct?: ProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigToHclTerraform(struct?: ProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfig | undefined) {
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
  private _variableGroups = new ProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsList(this, "variable_groups", false);
  public get variableGroups() {
    return this._variableGroups;
  }
}

export class ProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigOutputReference {
    return new ProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyModulePolicyAppsManifestJsonConfiguration {
}

export function projectModulePolicyModulePolicyAppsManifestJsonConfigurationToTerraform(struct?: ProjectModulePolicyModulePolicyAppsManifestJsonConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyModulePolicyAppsManifestJsonConfigurationToHclTerraform(struct?: ProjectModulePolicyModulePolicyAppsManifestJsonConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyModulePolicyAppsManifestJsonConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyModulePolicyAppsManifestJsonConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyModulePolicyAppsManifestJsonConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_config - computed: true, optional: false, required: false
  private _customConfig = new ProjectModulePolicyModulePolicyAppsManifestJsonConfigurationCustomConfigList(this, "custom_config", false);
  public get customConfig() {
    return this._customConfig;
  }
}

export class ProjectModulePolicyModulePolicyAppsManifestJsonConfigurationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyModulePolicyAppsManifestJsonConfigurationOutputReference {
    return new ProjectModulePolicyModulePolicyAppsManifestJsonConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyModulePolicyAppsManifestJsonContainerDetail {
}

export function projectModulePolicyModulePolicyAppsManifestJsonContainerDetailToTerraform(struct?: ProjectModulePolicyModulePolicyAppsManifestJsonContainerDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyModulePolicyAppsManifestJsonContainerDetailToHclTerraform(struct?: ProjectModulePolicyModulePolicyAppsManifestJsonContainerDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyModulePolicyAppsManifestJsonContainerDetailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyModulePolicyAppsManifestJsonContainerDetail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyModulePolicyAppsManifestJsonContainerDetail | undefined) {
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

export class ProjectModulePolicyModulePolicyAppsManifestJsonContainerDetailList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyModulePolicyAppsManifestJsonContainerDetailOutputReference {
    return new ProjectModulePolicyModulePolicyAppsManifestJsonContainerDetailOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyModulePolicyAppsManifestJsonDesc {
}

export function projectModulePolicyModulePolicyAppsManifestJsonDescToTerraform(struct?: ProjectModulePolicyModulePolicyAppsManifestJsonDesc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyModulePolicyAppsManifestJsonDescToHclTerraform(struct?: ProjectModulePolicyModulePolicyAppsManifestJsonDesc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyModulePolicyAppsManifestJsonDescOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyModulePolicyAppsManifestJsonDesc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyModulePolicyAppsManifestJsonDesc | undefined) {
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

export class ProjectModulePolicyModulePolicyAppsManifestJsonDescList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyModulePolicyAppsManifestJsonDescOutputReference {
    return new ProjectModulePolicyModulePolicyAppsManifestJsonDescOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyModulePolicyAppsManifestJsonImagesParams {
}

export function projectModulePolicyModulePolicyAppsManifestJsonImagesParamsToTerraform(struct?: ProjectModulePolicyModulePolicyAppsManifestJsonImagesParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyModulePolicyAppsManifestJsonImagesParamsToHclTerraform(struct?: ProjectModulePolicyModulePolicyAppsManifestJsonImagesParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyModulePolicyAppsManifestJsonImagesParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyModulePolicyAppsManifestJsonImagesParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyModulePolicyAppsManifestJsonImagesParams | undefined) {
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

export class ProjectModulePolicyModulePolicyAppsManifestJsonImagesParamsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyModulePolicyAppsManifestJsonImagesParamsOutputReference {
    return new ProjectModulePolicyModulePolicyAppsManifestJsonImagesParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyModulePolicyAppsManifestJsonImages {
}

export function projectModulePolicyModulePolicyAppsManifestJsonImagesToTerraform(struct?: ProjectModulePolicyModulePolicyAppsManifestJsonImages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyModulePolicyAppsManifestJsonImagesToHclTerraform(struct?: ProjectModulePolicyModulePolicyAppsManifestJsonImages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyModulePolicyAppsManifestJsonImagesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyModulePolicyAppsManifestJsonImages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyModulePolicyAppsManifestJsonImages | undefined) {
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
  private _params = new ProjectModulePolicyModulePolicyAppsManifestJsonImagesParamsList(this, "params", false);
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

export class ProjectModulePolicyModulePolicyAppsManifestJsonImagesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyModulePolicyAppsManifestJsonImagesOutputReference {
    return new ProjectModulePolicyModulePolicyAppsManifestJsonImagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsActionsLimitValue {
}

export function projectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsActionsLimitValueToTerraform(struct?: ProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsActionsLimitValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsActionsLimitValueToHclTerraform(struct?: ProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsActionsLimitValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsActionsLimitValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsActionsLimitValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsActionsLimitValue | undefined) {
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

export class ProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsActionsLimitValueList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsActionsLimitValueOutputReference {
    return new ProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsActionsLimitValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsActionsPortmapto {
}

export function projectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsActionsPortmaptoToTerraform(struct?: ProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsActionsPortmapto): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsActionsPortmaptoToHclTerraform(struct?: ProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsActionsPortmapto): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsActionsPortmaptoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsActionsPortmapto | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsActionsPortmapto | undefined) {
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

export class ProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsActionsPortmaptoList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsActionsPortmaptoOutputReference {
    return new ProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsActionsPortmaptoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsActions {
}

export function projectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsActionsToTerraform(struct?: ProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsActionsToHclTerraform(struct?: ProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsActions | undefined) {
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
  private _limitValue = new ProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsActionsLimitValueList(this, "limit_value", false);
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
  private _portmapto = new ProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsActionsPortmaptoList(this, "portmapto", false);
  public get portmapto() {
    return this._portmapto;
  }
}

export class ProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsActionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsActionsOutputReference {
    return new ProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsMatches {
}

export function projectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsMatchesToTerraform(struct?: ProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsMatches): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsMatchesToHclTerraform(struct?: ProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsMatches): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsMatchesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsMatches | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsMatches | undefined) {
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

export class ProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsMatchesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsMatchesOutputReference {
    return new ProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsMatchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAcls {
}

export function projectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsToTerraform(struct?: ProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAcls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsToHclTerraform(struct?: ProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAcls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAcls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAcls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // actions - computed: true, optional: false, required: false
  private _actions = new ProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }

  // matches - computed: true, optional: false, required: false
  private _matches = new ProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsMatchesList(this, "matches", false);
  public get matches() {
    return this._matches;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class ProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsOutputReference {
    return new ProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyModulePolicyAppsManifestJsonInterfaces {
}

export function projectModulePolicyModulePolicyAppsManifestJsonInterfacesToTerraform(struct?: ProjectModulePolicyModulePolicyAppsManifestJsonInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyModulePolicyAppsManifestJsonInterfacesToHclTerraform(struct?: ProjectModulePolicyModulePolicyAppsManifestJsonInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyModulePolicyAppsManifestJsonInterfacesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyModulePolicyAppsManifestJsonInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyModulePolicyAppsManifestJsonInterfaces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // acls - computed: true, optional: false, required: false
  private _acls = new ProjectModulePolicyModulePolicyAppsManifestJsonInterfacesAclsList(this, "acls", false);
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

export class ProjectModulePolicyModulePolicyAppsManifestJsonInterfacesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyModulePolicyAppsManifestJsonInterfacesOutputReference {
    return new ProjectModulePolicyModulePolicyAppsManifestJsonInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyModulePolicyAppsManifestJsonModule {
}

export function projectModulePolicyModulePolicyAppsManifestJsonModuleToTerraform(struct?: ProjectModulePolicyModulePolicyAppsManifestJsonModule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyModulePolicyAppsManifestJsonModuleToHclTerraform(struct?: ProjectModulePolicyModulePolicyAppsManifestJsonModule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyModulePolicyAppsManifestJsonModuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyModulePolicyAppsManifestJsonModule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyModulePolicyAppsManifestJsonModule | undefined) {
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

export class ProjectModulePolicyModulePolicyAppsManifestJsonModuleList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyModulePolicyAppsManifestJsonModuleOutputReference {
    return new ProjectModulePolicyModulePolicyAppsManifestJsonModuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyModulePolicyAppsManifestJsonOwner {
}

export function projectModulePolicyModulePolicyAppsManifestJsonOwnerToTerraform(struct?: ProjectModulePolicyModulePolicyAppsManifestJsonOwner): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyModulePolicyAppsManifestJsonOwnerToHclTerraform(struct?: ProjectModulePolicyModulePolicyAppsManifestJsonOwner): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyModulePolicyAppsManifestJsonOwnerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyModulePolicyAppsManifestJsonOwner | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyModulePolicyAppsManifestJsonOwner | undefined) {
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

export class ProjectModulePolicyModulePolicyAppsManifestJsonOwnerList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyModulePolicyAppsManifestJsonOwnerOutputReference {
    return new ProjectModulePolicyModulePolicyAppsManifestJsonOwnerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyModulePolicyAppsManifestJsonPermissions {
}

export function projectModulePolicyModulePolicyAppsManifestJsonPermissionsToTerraform(struct?: ProjectModulePolicyModulePolicyAppsManifestJsonPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyModulePolicyAppsManifestJsonPermissionsToHclTerraform(struct?: ProjectModulePolicyModulePolicyAppsManifestJsonPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyModulePolicyAppsManifestJsonPermissionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyModulePolicyAppsManifestJsonPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyModulePolicyAppsManifestJsonPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}

export class ProjectModulePolicyModulePolicyAppsManifestJsonPermissionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyModulePolicyAppsManifestJsonPermissionsOutputReference {
    return new ProjectModulePolicyModulePolicyAppsManifestJsonPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyModulePolicyAppsManifestJsonResources {
}

export function projectModulePolicyModulePolicyAppsManifestJsonResourcesToTerraform(struct?: ProjectModulePolicyModulePolicyAppsManifestJsonResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyModulePolicyAppsManifestJsonResourcesToHclTerraform(struct?: ProjectModulePolicyModulePolicyAppsManifestJsonResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyModulePolicyAppsManifestJsonResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyModulePolicyAppsManifestJsonResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyModulePolicyAppsManifestJsonResources | undefined) {
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

export class ProjectModulePolicyModulePolicyAppsManifestJsonResourcesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyModulePolicyAppsManifestJsonResourcesOutputReference {
    return new ProjectModulePolicyModulePolicyAppsManifestJsonResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyModulePolicyAppsManifestJson {
}

export function projectModulePolicyModulePolicyAppsManifestJsonToTerraform(struct?: ProjectModulePolicyModulePolicyAppsManifestJson): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyModulePolicyAppsManifestJsonToHclTerraform(struct?: ProjectModulePolicyModulePolicyAppsManifestJson): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyModulePolicyAppsManifestJsonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyModulePolicyAppsManifestJson | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyModulePolicyAppsManifestJson | undefined) {
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
  private _configuration = new ProjectModulePolicyModulePolicyAppsManifestJsonConfigurationList(this, "configuration", false);
  public get configuration() {
    return this._configuration;
  }

  // container_detail - computed: true, optional: false, required: false
  private _containerDetail = new ProjectModulePolicyModulePolicyAppsManifestJsonContainerDetailList(this, "container_detail", false);
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
  private _desc = new ProjectModulePolicyModulePolicyAppsManifestJsonDescList(this, "desc", false);
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
  private _images = new ProjectModulePolicyModulePolicyAppsManifestJsonImagesList(this, "images", false);
  public get images() {
    return this._images;
  }

  // interfaces - computed: true, optional: false, required: false
  private _interfaces = new ProjectModulePolicyModulePolicyAppsManifestJsonInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }

  // module - computed: true, optional: false, required: false
  private _module = new ProjectModulePolicyModulePolicyAppsManifestJsonModuleList(this, "module", false);
  public get module() {
    return this._module;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // owner - computed: true, optional: false, required: false
  private _owner = new ProjectModulePolicyModulePolicyAppsManifestJsonOwnerList(this, "owner", false);
  public get owner() {
    return this._owner;
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new ProjectModulePolicyModulePolicyAppsManifestJsonPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // persistent_runtime_size_bytes - computed: true, optional: false, required: false
  public get persistentRuntimeSizeBytes() {
    return this.getStringAttribute('persistent_runtime_size_bytes');
  }

  // resources - computed: true, optional: false, required: false
  private _resources = new ProjectModulePolicyModulePolicyAppsManifestJsonResourcesList(this, "resources", false);
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

export class ProjectModulePolicyModulePolicyAppsManifestJsonList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyModulePolicyAppsManifestJsonOutputReference {
    return new ProjectModulePolicyModulePolicyAppsManifestJsonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyModulePolicyAppsParentDetail {
}

export function projectModulePolicyModulePolicyAppsParentDetailToTerraform(struct?: ProjectModulePolicyModulePolicyAppsParentDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyModulePolicyAppsParentDetailToHclTerraform(struct?: ProjectModulePolicyModulePolicyAppsParentDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyModulePolicyAppsParentDetailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyModulePolicyAppsParentDetail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyModulePolicyAppsParentDetail | undefined) {
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

export class ProjectModulePolicyModulePolicyAppsParentDetailList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyModulePolicyAppsParentDetailOutputReference {
    return new ProjectModulePolicyModulePolicyAppsParentDetailOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyModulePolicyApps {
}

export function projectModulePolicyModulePolicyAppsToTerraform(struct?: ProjectModulePolicyModulePolicyApps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyModulePolicyAppsToHclTerraform(struct?: ProjectModulePolicyModulePolicyApps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyModulePolicyAppsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyModulePolicyApps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyModulePolicyApps | undefined) {
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
  private _interfaces = new ProjectModulePolicyModulePolicyAppsInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }

  // manifest_json - computed: true, optional: false, required: false
  private _manifestJson = new ProjectModulePolicyModulePolicyAppsManifestJsonList(this, "manifest_json", false);
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
  private _parentDetail = new ProjectModulePolicyModulePolicyAppsParentDetailList(this, "parent_detail", false);
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

export class ProjectModulePolicyModulePolicyAppsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyModulePolicyAppsOutputReference {
    return new ProjectModulePolicyModulePolicyAppsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesAclsActionsMapparams {
}

export function projectModulePolicyModulePolicyAzureEdgeAgentInterfacesAclsActionsMapparamsToTerraform(struct?: ProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesAclsActionsMapparams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyModulePolicyAzureEdgeAgentInterfacesAclsActionsMapparamsToHclTerraform(struct?: ProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesAclsActionsMapparams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesAclsActionsMapparamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesAclsActionsMapparams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesAclsActionsMapparams | undefined) {
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

export class ProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesAclsActionsMapparamsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesAclsActionsMapparamsOutputReference {
    return new ProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesAclsActionsMapparamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesAclsActions {
}

export function projectModulePolicyModulePolicyAzureEdgeAgentInterfacesAclsActionsToTerraform(struct?: ProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesAclsActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyModulePolicyAzureEdgeAgentInterfacesAclsActionsToHclTerraform(struct?: ProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesAclsActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesAclsActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesAclsActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesAclsActions | undefined) {
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
  private _mapparams = new ProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesAclsActionsMapparamsList(this, "mapparams", false);
  public get mapparams() {
    return this._mapparams;
  }

  // portmap - computed: true, optional: false, required: false
  public get portmap() {
    return this.getBooleanAttribute('portmap');
  }
}

export class ProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesAclsActionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesAclsActionsOutputReference {
    return new ProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesAclsActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesAclsMatches {
}

export function projectModulePolicyModulePolicyAzureEdgeAgentInterfacesAclsMatchesToTerraform(struct?: ProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesAclsMatches): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyModulePolicyAzureEdgeAgentInterfacesAclsMatchesToHclTerraform(struct?: ProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesAclsMatches): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesAclsMatchesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesAclsMatches | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesAclsMatches | undefined) {
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

export class ProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesAclsMatchesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesAclsMatchesOutputReference {
    return new ProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesAclsMatchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesAcls {
}

export function projectModulePolicyModulePolicyAzureEdgeAgentInterfacesAclsToTerraform(struct?: ProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesAcls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyModulePolicyAzureEdgeAgentInterfacesAclsToHclTerraform(struct?: ProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesAcls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesAclsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesAcls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesAcls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // actions - computed: true, optional: false, required: false
  private _actions = new ProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesAclsActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // matches - computed: true, optional: false, required: false
  private _matches = new ProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesAclsMatchesList(this, "matches", false);
  public get matches() {
    return this._matches;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class ProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesAclsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesAclsOutputReference {
    return new ProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesAclsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesEidregisterLispMapServers {
}

export function projectModulePolicyModulePolicyAzureEdgeAgentInterfacesEidregisterLispMapServersToTerraform(struct?: ProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesEidregisterLispMapServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyModulePolicyAzureEdgeAgentInterfacesEidregisterLispMapServersToHclTerraform(struct?: ProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesEidregisterLispMapServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesEidregisterLispMapServersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesEidregisterLispMapServers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesEidregisterLispMapServers | undefined) {
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

export class ProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesEidregisterLispMapServersList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesEidregisterLispMapServersOutputReference {
    return new ProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesEidregisterLispMapServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesEidregister {
}

export function projectModulePolicyModulePolicyAzureEdgeAgentInterfacesEidregisterToTerraform(struct?: ProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesEidregister): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyModulePolicyAzureEdgeAgentInterfacesEidregisterToHclTerraform(struct?: ProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesEidregister): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesEidregisterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesEidregister | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesEidregister | undefined) {
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
  private _lispMapServers = new ProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesEidregisterLispMapServersList(this, "lisp_map_servers", false);
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

export class ProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesEidregisterList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesEidregisterOutputReference {
    return new ProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesEidregisterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesIo {
}

export function projectModulePolicyModulePolicyAzureEdgeAgentInterfacesIoToTerraform(struct?: ProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesIo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyModulePolicyAzureEdgeAgentInterfacesIoToHclTerraform(struct?: ProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesIo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesIoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesIo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesIo | undefined) {
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

export class ProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesIoList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesIoOutputReference {
    return new ProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesIoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyModulePolicyAzureEdgeAgentInterfaces {
}

export function projectModulePolicyModulePolicyAzureEdgeAgentInterfacesToTerraform(struct?: ProjectModulePolicyModulePolicyAzureEdgeAgentInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyModulePolicyAzureEdgeAgentInterfacesToHclTerraform(struct?: ProjectModulePolicyModulePolicyAzureEdgeAgentInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyModulePolicyAzureEdgeAgentInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyModulePolicyAzureEdgeAgentInterfaces | undefined) {
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
  private _acls = new ProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesAclsList(this, "acls", false);
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
  private _eidregister = new ProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesEidregisterList(this, "eidregister", false);
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
  private _io = new ProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesIoList(this, "io", false);
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

export class ProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesOutputReference {
    return new ProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsCondition {
}

export function projectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsConditionToTerraform(struct?: ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsConditionToHclTerraform(struct?: ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsCondition | undefined) {
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

export class ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsConditionList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsConditionOutputReference {
    return new ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptions {
}

export function projectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsToTerraform(struct?: ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsToHclTerraform(struct?: ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptions | undefined) {
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

export class ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsOutputReference {
    return new ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsVariables {
}

export function projectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsVariablesToTerraform(struct?: ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsVariables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsVariablesToHclTerraform(struct?: ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsVariables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsVariablesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsVariables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsVariables | undefined) {
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
  private _options = new ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsList(this, "options", false);
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

export class ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsVariablesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsVariablesOutputReference {
    return new ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroups {
}

export function projectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsToTerraform(struct?: ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsToHclTerraform(struct?: ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // condition - computed: true, optional: false, required: false
  private _condition = new ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsConditionList(this, "condition", false);
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
  private _variables = new ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsVariablesList(this, "variables", false);
  public get variables() {
    return this._variables;
  }
}

export class ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsOutputReference {
    return new ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfig {
}

export function projectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigToTerraform(struct?: ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigToHclTerraform(struct?: ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfig | undefined) {
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
  private _variableGroups = new ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsList(this, "variable_groups", false);
  public get variableGroups() {
    return this._variableGroups;
  }
}

export class ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigOutputReference {
    return new ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfiguration {
}

export function projectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationToTerraform(struct?: ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationToHclTerraform(struct?: ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_config - computed: true, optional: false, required: false
  private _customConfig = new ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigList(this, "custom_config", false);
  public get customConfig() {
    return this._customConfig;
  }
}

export class ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationOutputReference {
    return new ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonContainerDetail {
}

export function projectModulePolicyModulePolicyAzureEdgeAgentManifestJsonContainerDetailToTerraform(struct?: ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonContainerDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyModulePolicyAzureEdgeAgentManifestJsonContainerDetailToHclTerraform(struct?: ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonContainerDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonContainerDetailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonContainerDetail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonContainerDetail | undefined) {
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

export class ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonContainerDetailList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonContainerDetailOutputReference {
    return new ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonContainerDetailOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonDesc {
}

export function projectModulePolicyModulePolicyAzureEdgeAgentManifestJsonDescToTerraform(struct?: ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonDesc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyModulePolicyAzureEdgeAgentManifestJsonDescToHclTerraform(struct?: ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonDesc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonDescOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonDesc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonDesc | undefined) {
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

export class ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonDescList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonDescOutputReference {
    return new ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonDescOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonImagesParams {
}

export function projectModulePolicyModulePolicyAzureEdgeAgentManifestJsonImagesParamsToTerraform(struct?: ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonImagesParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyModulePolicyAzureEdgeAgentManifestJsonImagesParamsToHclTerraform(struct?: ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonImagesParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonImagesParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonImagesParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonImagesParams | undefined) {
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

export class ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonImagesParamsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonImagesParamsOutputReference {
    return new ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonImagesParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonImages {
}

export function projectModulePolicyModulePolicyAzureEdgeAgentManifestJsonImagesToTerraform(struct?: ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonImages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyModulePolicyAzureEdgeAgentManifestJsonImagesToHclTerraform(struct?: ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonImages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonImagesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonImages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonImages | undefined) {
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
  private _params = new ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonImagesParamsList(this, "params", false);
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

export class ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonImagesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonImagesOutputReference {
    return new ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonImagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActionsLimitValue {
}

export function projectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActionsLimitValueToTerraform(struct?: ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActionsLimitValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActionsLimitValueToHclTerraform(struct?: ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActionsLimitValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActionsLimitValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActionsLimitValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActionsLimitValue | undefined) {
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

export class ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActionsLimitValueList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActionsLimitValueOutputReference {
    return new ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActionsLimitValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActionsPortmapto {
}

export function projectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActionsPortmaptoToTerraform(struct?: ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActionsPortmapto): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActionsPortmaptoToHclTerraform(struct?: ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActionsPortmapto): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActionsPortmaptoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActionsPortmapto | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActionsPortmapto | undefined) {
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

export class ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActionsPortmaptoList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActionsPortmaptoOutputReference {
    return new ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActionsPortmaptoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActions {
}

export function projectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActionsToTerraform(struct?: ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActionsToHclTerraform(struct?: ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActions | undefined) {
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
  private _limitValue = new ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActionsLimitValueList(this, "limit_value", false);
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
  private _portmapto = new ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActionsPortmaptoList(this, "portmapto", false);
  public get portmapto() {
    return this._portmapto;
  }
}

export class ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActionsOutputReference {
    return new ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsMatches {
}

export function projectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsMatchesToTerraform(struct?: ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsMatches): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsMatchesToHclTerraform(struct?: ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsMatches): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsMatchesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsMatches | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsMatches | undefined) {
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

export class ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsMatchesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsMatchesOutputReference {
    return new ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsMatchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAcls {
}

export function projectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsToTerraform(struct?: ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAcls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsToHclTerraform(struct?: ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAcls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAcls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAcls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // actions - computed: true, optional: false, required: false
  private _actions = new ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }

  // matches - computed: true, optional: false, required: false
  private _matches = new ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsMatchesList(this, "matches", false);
  public get matches() {
    return this._matches;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsOutputReference {
    return new ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfaces {
}

export function projectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesToTerraform(struct?: ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesToHclTerraform(struct?: ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfaces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // acls - computed: true, optional: false, required: false
  private _acls = new ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsList(this, "acls", false);
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

export class ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesOutputReference {
    return new ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonModule {
}

export function projectModulePolicyModulePolicyAzureEdgeAgentManifestJsonModuleToTerraform(struct?: ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonModule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyModulePolicyAzureEdgeAgentManifestJsonModuleToHclTerraform(struct?: ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonModule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonModuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonModule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonModule | undefined) {
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

export class ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonModuleList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonModuleOutputReference {
    return new ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonModuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonOwner {
}

export function projectModulePolicyModulePolicyAzureEdgeAgentManifestJsonOwnerToTerraform(struct?: ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonOwner): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyModulePolicyAzureEdgeAgentManifestJsonOwnerToHclTerraform(struct?: ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonOwner): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonOwnerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonOwner | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonOwner | undefined) {
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

export class ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonOwnerList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonOwnerOutputReference {
    return new ProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonOwnerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
