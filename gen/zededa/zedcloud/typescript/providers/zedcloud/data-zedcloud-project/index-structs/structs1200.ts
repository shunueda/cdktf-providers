import * as cdktf from 'cdktf';
import { DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesList,
DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonList,
DataZedcloudProjectModulePolicyModulePolicyAppsList,
DataZedcloudProjectModulePolicyAppPolicyList,
DataZedcloudProjectModulePolicyAttestationPolicyList,
DataZedcloudProjectModulePolicyAzurePolicyList,
DataZedcloudProjectModulePolicyClusterPolicyList,
DataZedcloudProjectModulePolicyConfigurationLockPolicyList,
DataZedcloudProjectModulePolicyEdgeviewPolicyList,
DataZedcloudProjectModulePolicyLocalOperatorConsolePolicyList } from './structs800'
export interface DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentParentDetail {
}

export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentParentDetailToTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentParentDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentParentDetailToHclTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentParentDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentParentDetailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentParentDetail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentParentDetail | undefined) {
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

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentParentDetailList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentParentDetailOutputReference {
    return new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentParentDetailOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgent {
}

export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentToTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentToHclTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgent | undefined) {
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
  private _interfaces = new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }

  // manifest_json - computed: true, optional: false, required: false
  private _manifestJson = new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentManifestJsonList(this, "manifest_json", false);
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
  private _parentDetail = new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentParentDetailList(this, "parent_detail", false);
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

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentOutputReference {
    return new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubInterfacesAclsActionsMapparams {
}

export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubInterfacesAclsActionsMapparamsToTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubInterfacesAclsActionsMapparams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubInterfacesAclsActionsMapparamsToHclTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubInterfacesAclsActionsMapparams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubInterfacesAclsActionsMapparamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubInterfacesAclsActionsMapparams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubInterfacesAclsActionsMapparams | undefined) {
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

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubInterfacesAclsActionsMapparamsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubInterfacesAclsActionsMapparamsOutputReference {
    return new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubInterfacesAclsActionsMapparamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubInterfacesAclsActions {
}

export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubInterfacesAclsActionsToTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubInterfacesAclsActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubInterfacesAclsActionsToHclTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubInterfacesAclsActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubInterfacesAclsActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubInterfacesAclsActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubInterfacesAclsActions | undefined) {
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
  private _mapparams = new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubInterfacesAclsActionsMapparamsList(this, "mapparams", false);
  public get mapparams() {
    return this._mapparams;
  }

  // portmap - computed: true, optional: false, required: false
  public get portmap() {
    return this.getBooleanAttribute('portmap');
  }
}

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubInterfacesAclsActionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubInterfacesAclsActionsOutputReference {
    return new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubInterfacesAclsActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubInterfacesAclsMatches {
}

export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubInterfacesAclsMatchesToTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubInterfacesAclsMatches): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubInterfacesAclsMatchesToHclTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubInterfacesAclsMatches): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubInterfacesAclsMatchesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubInterfacesAclsMatches | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubInterfacesAclsMatches | undefined) {
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

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubInterfacesAclsMatchesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubInterfacesAclsMatchesOutputReference {
    return new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubInterfacesAclsMatchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubInterfacesAcls {
}

export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubInterfacesAclsToTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubInterfacesAcls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubInterfacesAclsToHclTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubInterfacesAcls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubInterfacesAclsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubInterfacesAcls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubInterfacesAcls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // actions - computed: true, optional: false, required: false
  private _actions = new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubInterfacesAclsActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // matches - computed: true, optional: false, required: false
  private _matches = new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubInterfacesAclsMatchesList(this, "matches", false);
  public get matches() {
    return this._matches;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubInterfacesAclsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubInterfacesAclsOutputReference {
    return new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubInterfacesAclsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubInterfacesEidregisterLispMapServers {
}

export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubInterfacesEidregisterLispMapServersToTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubInterfacesEidregisterLispMapServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubInterfacesEidregisterLispMapServersToHclTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubInterfacesEidregisterLispMapServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubInterfacesEidregisterLispMapServersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubInterfacesEidregisterLispMapServers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubInterfacesEidregisterLispMapServers | undefined) {
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

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubInterfacesEidregisterLispMapServersList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubInterfacesEidregisterLispMapServersOutputReference {
    return new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubInterfacesEidregisterLispMapServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubInterfacesEidregister {
}

export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubInterfacesEidregisterToTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubInterfacesEidregister): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubInterfacesEidregisterToHclTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubInterfacesEidregister): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubInterfacesEidregisterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubInterfacesEidregister | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubInterfacesEidregister | undefined) {
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
  private _lispMapServers = new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubInterfacesEidregisterLispMapServersList(this, "lisp_map_servers", false);
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

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubInterfacesEidregisterList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubInterfacesEidregisterOutputReference {
    return new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubInterfacesEidregisterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubInterfacesIo {
}

export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubInterfacesIoToTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubInterfacesIo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubInterfacesIoToHclTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubInterfacesIo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubInterfacesIoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubInterfacesIo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubInterfacesIo | undefined) {
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

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubInterfacesIoList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubInterfacesIoOutputReference {
    return new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubInterfacesIoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubInterfaces {
}

export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubInterfacesToTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubInterfacesToHclTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubInterfacesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubInterfaces | undefined) {
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
  private _acls = new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubInterfacesAclsList(this, "acls", false);
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
  private _eidregister = new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubInterfacesEidregisterList(this, "eidregister", false);
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
  private _io = new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubInterfacesIoList(this, "io", false);
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

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubInterfacesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubInterfacesOutputReference {
    return new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigVariableGroupsCondition {
}

export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigVariableGroupsConditionToTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigVariableGroupsCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigVariableGroupsConditionToHclTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigVariableGroupsCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigVariableGroupsConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigVariableGroupsCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigVariableGroupsCondition | undefined) {
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

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigVariableGroupsConditionList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigVariableGroupsConditionOutputReference {
    return new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigVariableGroupsConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptions {
}

export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsToTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsToHclTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptions | undefined) {
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

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsOutputReference {
    return new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigVariableGroupsVariables {
}

export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigVariableGroupsVariablesToTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigVariableGroupsVariables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigVariableGroupsVariablesToHclTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigVariableGroupsVariables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigVariableGroupsVariablesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigVariableGroupsVariables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigVariableGroupsVariables | undefined) {
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
  private _options = new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsList(this, "options", false);
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

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigVariableGroupsVariablesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigVariableGroupsVariablesOutputReference {
    return new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigVariableGroupsVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigVariableGroups {
}

export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigVariableGroupsToTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigVariableGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigVariableGroupsToHclTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigVariableGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigVariableGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigVariableGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigVariableGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // condition - computed: true, optional: false, required: false
  private _condition = new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigVariableGroupsConditionList(this, "condition", false);
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
  private _variables = new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigVariableGroupsVariablesList(this, "variables", false);
  public get variables() {
    return this._variables;
  }
}

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigVariableGroupsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigVariableGroupsOutputReference {
    return new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigVariableGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfig {
}

export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigToTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigToHclTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfig | undefined) {
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
  private _variableGroups = new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigVariableGroupsList(this, "variable_groups", false);
  public get variableGroups() {
    return this._variableGroups;
  }
}

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigOutputReference {
    return new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonConfiguration {
}

export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonConfigurationToTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonConfigurationToHclTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_config - computed: true, optional: false, required: false
  private _customConfig = new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigList(this, "custom_config", false);
  public get customConfig() {
    return this._customConfig;
  }
}

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonConfigurationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonConfigurationOutputReference {
    return new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonContainerDetail {
}

export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonContainerDetailToTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonContainerDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonContainerDetailToHclTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonContainerDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonContainerDetailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonContainerDetail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonContainerDetail | undefined) {
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

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonContainerDetailList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonContainerDetailOutputReference {
    return new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonContainerDetailOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonDesc {
}

export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonDescToTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonDesc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonDescToHclTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonDesc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonDescOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonDesc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonDesc | undefined) {
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

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonDescList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonDescOutputReference {
    return new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonDescOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonImagesParams {
}

export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonImagesParamsToTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonImagesParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonImagesParamsToHclTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonImagesParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonImagesParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonImagesParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonImagesParams | undefined) {
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

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonImagesParamsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonImagesParamsOutputReference {
    return new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonImagesParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonImages {
}

export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonImagesToTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonImages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonImagesToHclTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonImages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonImagesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonImages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonImages | undefined) {
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
  private _params = new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonImagesParamsList(this, "params", false);
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

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonImagesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonImagesOutputReference {
    return new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonImagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsActionsLimitValue {
}

export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsActionsLimitValueToTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsActionsLimitValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsActionsLimitValueToHclTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsActionsLimitValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsActionsLimitValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsActionsLimitValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsActionsLimitValue | undefined) {
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

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsActionsLimitValueList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsActionsLimitValueOutputReference {
    return new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsActionsLimitValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsActionsPortmapto {
}

export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsActionsPortmaptoToTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsActionsPortmapto): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsActionsPortmaptoToHclTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsActionsPortmapto): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsActionsPortmaptoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsActionsPortmapto | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsActionsPortmapto | undefined) {
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

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsActionsPortmaptoList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsActionsPortmaptoOutputReference {
    return new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsActionsPortmaptoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsActions {
}

export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsActionsToTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsActionsToHclTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsActions | undefined) {
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
  private _limitValue = new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsActionsLimitValueList(this, "limit_value", false);
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
  private _portmapto = new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsActionsPortmaptoList(this, "portmapto", false);
  public get portmapto() {
    return this._portmapto;
  }
}

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsActionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsActionsOutputReference {
    return new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsMatches {
}

export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsMatchesToTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsMatches): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsMatchesToHclTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsMatches): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsMatchesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsMatches | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsMatches | undefined) {
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

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsMatchesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsMatchesOutputReference {
    return new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsMatchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAcls {
}

export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsToTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAcls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsToHclTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAcls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAcls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAcls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // actions - computed: true, optional: false, required: false
  private _actions = new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }

  // matches - computed: true, optional: false, required: false
  private _matches = new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsMatchesList(this, "matches", false);
  public get matches() {
    return this._matches;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsOutputReference {
    return new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonInterfaces {
}

export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonInterfacesToTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonInterfacesToHclTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonInterfacesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonInterfaces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // acls - computed: true, optional: false, required: false
  private _acls = new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsList(this, "acls", false);
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

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonInterfacesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonInterfacesOutputReference {
    return new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonModule {
}

export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonModuleToTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonModule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonModuleToHclTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonModule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonModuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonModule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonModule | undefined) {
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

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonModuleList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonModuleOutputReference {
    return new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonModuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonOwner {
}

export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonOwnerToTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonOwner): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonOwnerToHclTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonOwner): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonOwnerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonOwner | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonOwner | undefined) {
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

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonOwnerList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonOwnerOutputReference {
    return new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonOwnerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonPermissions {
}

export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonPermissionsToTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonPermissionsToHclTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonPermissionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonPermissionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonPermissionsOutputReference {
    return new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonResources {
}

export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonResourcesToTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonResourcesToHclTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonResources | undefined) {
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

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonResourcesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonResourcesOutputReference {
    return new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJson {
}

export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonToTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJson): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonToHclTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJson): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJson | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJson | undefined) {
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
  private _configuration = new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonConfigurationList(this, "configuration", false);
  public get configuration() {
    return this._configuration;
  }

  // container_detail - computed: true, optional: false, required: false
  private _containerDetail = new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonContainerDetailList(this, "container_detail", false);
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
  private _desc = new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonDescList(this, "desc", false);
  public get desc() {
    return this._desc;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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
  private _images = new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonImagesList(this, "images", false);
  public get images() {
    return this._images;
  }

  // interfaces - computed: true, optional: false, required: false
  private _interfaces = new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }

  // module - computed: true, optional: false, required: false
  private _module = new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonModuleList(this, "module", false);
  public get module() {
    return this._module;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // owner - computed: true, optional: false, required: false
  private _owner = new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonOwnerList(this, "owner", false);
  public get owner() {
    return this._owner;
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // persistent_runtime_size_bytes - computed: true, optional: false, required: false
  public get persistentRuntimeSizeBytes() {
    return this.getStringAttribute('persistent_runtime_size_bytes');
  }

  // resources - computed: true, optional: false, required: false
  private _resources = new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonResourcesList(this, "resources", false);
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

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonOutputReference {
    return new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubParentDetail {
}

export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubParentDetailToTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubParentDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubParentDetailToHclTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubParentDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubParentDetailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubParentDetail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubParentDetail | undefined) {
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

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubParentDetailList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubParentDetailOutputReference {
    return new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubParentDetailOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHub {
}

export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubToTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHub): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubToHclTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHub): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHub | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHub | undefined) {
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
  private _interfaces = new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }

  // manifest_json - computed: true, optional: false, required: false
  private _manifestJson = new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubManifestJsonList(this, "manifest_json", false);
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
  private _parentDetail = new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubParentDetailList(this, "parent_detail", false);
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

export class DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubOutputReference {
    return new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyModulePolicyMetrics {
}

export function dataZedcloudProjectModulePolicyModulePolicyMetricsToTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyModulePolicyMetricsToHclTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicyMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyModulePolicyMetricsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataZedcloudProjectModulePolicyModulePolicyMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyModulePolicyMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // queries - computed: true, optional: false, required: false
  private _queries = new cdktf.StringMap(this, "queries");
  public get queries() {
    return this._queries;
  }

  // results - computed: true, optional: false, required: false
  private _results = new cdktf.StringMap(this, "results");
  public get results() {
    return this._results;
  }
}

export class DataZedcloudProjectModulePolicyModulePolicyMetricsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectModulePolicyModulePolicyMetricsOutputReference {
    return new DataZedcloudProjectModulePolicyModulePolicyMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyModulePolicy {
}

export function dataZedcloudProjectModulePolicyModulePolicyToTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyModulePolicyToHclTerraform(struct?: DataZedcloudProjectModulePolicyModulePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyModulePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataZedcloudProjectModulePolicyModulePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyModulePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // apps - computed: true, optional: false, required: false
  private _apps = new DataZedcloudProjectModulePolicyModulePolicyAppsList(this, "apps", false);
  public get apps() {
    return this._apps;
  }

  // azure_edge_agent - computed: true, optional: false, required: false
  private _azureEdgeAgent = new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeAgentList(this, "azure_edge_agent", false);
  public get azureEdgeAgent() {
    return this._azureEdgeAgent;
  }

  // azure_edge_hub - computed: true, optional: false, required: false
  private _azureEdgeHub = new DataZedcloudProjectModulePolicyModulePolicyAzureEdgeHubList(this, "azure_edge_hub", false);
  public get azureEdgeHub() {
    return this._azureEdgeHub;
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // metrics - computed: true, optional: false, required: false
  private _metrics = new DataZedcloudProjectModulePolicyModulePolicyMetricsList(this, "metrics", false);
  public get metrics() {
    return this._metrics;
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // routes - computed: true, optional: false, required: false
  private _routes = new cdktf.StringMap(this, "routes");
  public get routes() {
    return this._routes;
  }

  // target_condition - computed: true, optional: false, required: false
  public get targetCondition() {
    return this.getStringAttribute('target_condition');
  }

  // target_condition_new - computed: true, optional: false, required: false
  private _targetConditionNew = new cdktf.StringMap(this, "target_condition_new");
  public get targetConditionNew() {
    return this._targetConditionNew;
  }
}

export class DataZedcloudProjectModulePolicyModulePolicyList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectModulePolicyModulePolicyOutputReference {
    return new DataZedcloudProjectModulePolicyModulePolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigDnsListStruct {
}

export function dataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigDnsListStructToTerraform(struct?: DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigDnsListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigDnsListStructToHclTerraform(struct?: DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigDnsListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigDnsListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigDnsListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigDnsListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // addrs - computed: true, optional: false, required: false
  public get addrs() {
    return this.getListAttribute('addrs');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
}

export class DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigDnsListStructList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigDnsListStructOutputReference {
    return new DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigDnsListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigEdgeNodeCluster {
}

export function dataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigEdgeNodeClusterToTerraform(struct?: DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigEdgeNodeCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigEdgeNodeClusterToHclTerraform(struct?: DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigEdgeNodeCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigEdgeNodeClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigEdgeNodeCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigEdgeNodeCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // designated_node_id - computed: true, optional: false, required: false
  public get designatedNodeId() {
    return this.getStringAttribute('designated_node_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export class DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigEdgeNodeClusterList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigEdgeNodeClusterOutputReference {
    return new DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigEdgeNodeClusterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigIpDhcpRange {
}

export function dataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigIpDhcpRangeToTerraform(struct?: DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigIpDhcpRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigIpDhcpRangeToHclTerraform(struct?: DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigIpDhcpRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigIpDhcpRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigIpDhcpRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigIpDhcpRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end - computed: true, optional: false, required: false
  public get end() {
    return this.getStringAttribute('end');
  }

  // start - computed: true, optional: false, required: false
  public get start() {
    return this.getStringAttribute('start');
  }
}

export class DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigIpDhcpRangeList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigIpDhcpRangeOutputReference {
    return new DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigIpDhcpRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigIp {
}

export function dataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigIpToTerraform(struct?: DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigIpToHclTerraform(struct?: DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dhcp_range - computed: true, optional: false, required: false
  private _dhcpRange = new DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigIpDhcpRangeList(this, "dhcp_range", false);
  public get dhcpRange() {
    return this._dhcpRange;
  }

  // dns - computed: true, optional: false, required: false
  public get dns() {
    return this.getListAttribute('dns');
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // gateway - computed: true, optional: false, required: false
  public get gateway() {
    return this.getStringAttribute('gateway');
  }

  // mask - computed: true, optional: false, required: false
  public get mask() {
    return this.getStringAttribute('mask');
  }

  // ntp - computed: true, optional: false, required: false
  public get ntp() {
    return this.getStringAttribute('ntp');
  }

  // subnet - computed: true, optional: false, required: false
  public get subnet() {
    return this.getStringAttribute('subnet');
  }
}

export class DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigIpList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigIpOutputReference {
    return new DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigLispSp {
}

export function dataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigLispSpToTerraform(struct?: DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigLispSp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigLispSpToHclTerraform(struct?: DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigLispSp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigLispSpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigLispSp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigLispSp | undefined) {
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigLispSpList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigLispSpOutputReference {
    return new DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigLispSpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigLisp {
}

export function dataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigLispToTerraform(struct?: DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigLisp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigLispToHclTerraform(struct?: DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigLisp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigLispOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigLisp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigLisp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allocate - computed: true, optional: false, required: false
  public get allocate() {
    return this.getBooleanAttribute('allocate');
  }

  // allocationprefix - computed: true, optional: false, required: false
  public get allocationprefix() {
    return this.getStringAttribute('allocationprefix');
  }

  // allocationprefixlen - computed: true, optional: false, required: false
  public get allocationprefixlen() {
    return this.getNumberAttribute('allocationprefixlen');
  }

  // exportprivate - computed: true, optional: false, required: false
  public get exportprivate() {
    return this.getBooleanAttribute('exportprivate');
  }

  // lispiid - computed: true, optional: false, required: false
  public get lispiid() {
    return this.getNumberAttribute('lispiid');
  }

  // sp - computed: true, optional: false, required: false
  private _sp = new DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigLispSpList(this, "sp", false);
  public get sp() {
    return this._sp;
  }
}

export class DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigLispList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigLispOutputReference {
    return new DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigLispOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigOpaqueLispSp {
}

export function dataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigOpaqueLispSpToTerraform(struct?: DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigOpaqueLispSp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigOpaqueLispSpToHclTerraform(struct?: DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigOpaqueLispSp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigOpaqueLispSpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigOpaqueLispSp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigOpaqueLispSp | undefined) {
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigOpaqueLispSpList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigOpaqueLispSpOutputReference {
    return new DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigOpaqueLispSpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigOpaqueLisp {
}

export function dataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigOpaqueLispToTerraform(struct?: DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigOpaqueLisp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigOpaqueLispToHclTerraform(struct?: DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigOpaqueLisp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigOpaqueLispOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigOpaqueLisp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigOpaqueLisp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allocate - computed: true, optional: false, required: false
  public get allocate() {
    return this.getBooleanAttribute('allocate');
  }

  // allocationprefix - computed: true, optional: false, required: false
  public get allocationprefix() {
    return this.getStringAttribute('allocationprefix');
  }

  // allocationprefixlen - computed: true, optional: false, required: false
  public get allocationprefixlen() {
    return this.getNumberAttribute('allocationprefixlen');
  }

  // exportprivate - computed: true, optional: false, required: false
  public get exportprivate() {
    return this.getBooleanAttribute('exportprivate');
  }

  // lispiid - computed: true, optional: false, required: false
  public get lispiid() {
    return this.getNumberAttribute('lispiid');
  }

  // sp - computed: true, optional: false, required: false
  private _sp = new DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigOpaqueLispSpList(this, "sp", false);
  public get sp() {
    return this._sp;
  }
}

export class DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigOpaqueLispList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigOpaqueLispOutputReference {
    return new DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigOpaqueLispOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigOpaque {
}

export function dataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigOpaqueToTerraform(struct?: DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigOpaque): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigOpaqueToHclTerraform(struct?: DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigOpaque): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigOpaqueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigOpaque | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigOpaque | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // lisp - computed: true, optional: false, required: false
  private _lisp = new DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigOpaqueLispList(this, "lisp", false);
  public get lisp() {
    return this._lisp;
  }

  // oconfig - computed: true, optional: false, required: false
  public get oconfig() {
    return this.getStringAttribute('oconfig');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigOpaqueList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigOpaqueOutputReference {
    return new DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigOpaqueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigRevision {
}

export function dataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigRevisionToTerraform(struct?: DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigRevision): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigRevisionToHclTerraform(struct?: DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigRevision): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigRevisionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigRevision | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigRevision | undefined) {
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

  // curr - computed: true, optional: false, required: false
  public get curr() {
    return this.getStringAttribute('curr');
  }

  // prev - computed: true, optional: false, required: false
  public get prev() {
    return this.getStringAttribute('prev');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }
}

export class DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigRevisionList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigRevisionOutputReference {
    return new DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigRevisionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigStaticRoutes {
}

export function dataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigStaticRoutesToTerraform(struct?: DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigStaticRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigStaticRoutesToHclTerraform(struct?: DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigStaticRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigStaticRoutesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigStaticRoutes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigStaticRoutes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // gateway - computed: true, optional: false, required: false
  public get gateway() {
    return this.getStringAttribute('gateway');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
}

export class DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigStaticRoutesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigStaticRoutesOutputReference {
    return new DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigStaticRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfig {
}

export function dataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigToTerraform(struct?: DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigToHclTerraform(struct?: DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cluster_id - computed: true, optional: false, required: false
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // device_default - computed: true, optional: false, required: false
  public get deviceDefault() {
    return this.getBooleanAttribute('device_default');
  }

  // device_id - computed: true, optional: false, required: false
  public get deviceId() {
    return this.getStringAttribute('device_id');
  }

  // dhcp - computed: true, optional: false, required: false
  public get dhcp() {
    return this.getBooleanAttribute('dhcp');
  }

  // dns_list - computed: true, optional: false, required: false
  private _dnsList = new DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigDnsListStructList(this, "dns_list", false);
  public get dnsList() {
    return this._dnsList;
  }

  // edge_node_cluster - computed: true, optional: false, required: false
  private _edgeNodeCluster = new DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigEdgeNodeClusterList(this, "edge_node_cluster", false);
  public get edgeNodeCluster() {
    return this._edgeNodeCluster;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip - computed: true, optional: false, required: false
  private _ip = new DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigIpList(this, "ip", false);
  public get ip() {
    return this._ip;
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // lisp - computed: true, optional: false, required: false
  private _lisp = new DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigLispList(this, "lisp", false);
  public get lisp() {
    return this._lisp;
  }

  // mtu - computed: true, optional: false, required: false
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network_policy_id - computed: true, optional: false, required: false
  public get networkPolicyId() {
    return this.getStringAttribute('network_policy_id');
  }

  // oconfig - computed: true, optional: false, required: false
  public get oconfig() {
    return this.getStringAttribute('oconfig');
  }

  // opaque - computed: true, optional: false, required: false
  private _opaque = new DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigOpaqueList(this, "opaque", false);
  public get opaque() {
    return this._opaque;
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // port_tags - computed: true, optional: false, required: false
  private _portTags = new cdktf.StringMap(this, "port_tags");
  public get portTags() {
    return this._portTags;
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // propagate_connected_routes - computed: true, optional: false, required: false
  public get propagateConnectedRoutes() {
    return this.getBooleanAttribute('propagate_connected_routes');
  }

  // revision - computed: true, optional: false, required: false
  private _revision = new DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigRevisionList(this, "revision", false);
  public get revision() {
    return this._revision;
  }

  // static_routes - computed: true, optional: false, required: false
  private _staticRoutes = new DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigStaticRoutesList(this, "static_routes", false);
  public get staticRoutes() {
    return this._staticRoutes;
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigOutputReference {
    return new DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyNetworkPolicy {
}

export function dataZedcloudProjectModulePolicyNetworkPolicyToTerraform(struct?: DataZedcloudProjectModulePolicyNetworkPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyNetworkPolicyToHclTerraform(struct?: DataZedcloudProjectModulePolicyNetworkPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyNetworkPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataZedcloudProjectModulePolicyNetworkPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyNetworkPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // net_instance_config - computed: true, optional: false, required: false
  private _netInstanceConfig = new DataZedcloudProjectModulePolicyNetworkPolicyNetInstanceConfigList(this, "net_instance_config", false);
  public get netInstanceConfig() {
    return this._netInstanceConfig;
  }
}

export class DataZedcloudProjectModulePolicyNetworkPolicyList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectModulePolicyNetworkPolicyOutputReference {
    return new DataZedcloudProjectModulePolicyNetworkPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicyRevision {
}

export function dataZedcloudProjectModulePolicyRevisionToTerraform(struct?: DataZedcloudProjectModulePolicyRevision): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyRevisionToHclTerraform(struct?: DataZedcloudProjectModulePolicyRevision): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyRevisionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataZedcloudProjectModulePolicyRevision | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicyRevision | undefined) {
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

  // curr - computed: true, optional: false, required: false
  public get curr() {
    return this.getStringAttribute('curr');
  }

  // prev - computed: true, optional: false, required: false
  public get prev() {
    return this.getStringAttribute('prev');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }
}

export class DataZedcloudProjectModulePolicyRevisionList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectModulePolicyRevisionOutputReference {
    return new DataZedcloudProjectModulePolicyRevisionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectModulePolicy {
}

export function dataZedcloudProjectModulePolicyToTerraform(struct?: DataZedcloudProjectModulePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectModulePolicyToHclTerraform(struct?: DataZedcloudProjectModulePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectModulePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataZedcloudProjectModulePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectModulePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // app_policy - computed: true, optional: false, required: false
  private _appPolicy = new DataZedcloudProjectModulePolicyAppPolicyList(this, "app_policy", false);
  public get appPolicy() {
    return this._appPolicy;
  }

  // attestation_policy - computed: true, optional: false, required: false
  private _attestationPolicy = new DataZedcloudProjectModulePolicyAttestationPolicyList(this, "attestation_policy", false);
  public get attestationPolicy() {
    return this._attestationPolicy;
  }

  // attr - computed: true, optional: false, required: false
  private _attr = new cdktf.StringMap(this, "attr");
  public get attr() {
    return this._attr;
  }

  // azure_policy - computed: true, optional: false, required: false
  private _azurePolicy = new DataZedcloudProjectModulePolicyAzurePolicyList(this, "azure_policy", false);
  public get azurePolicy() {
    return this._azurePolicy;
  }

  // cluster_policy - computed: true, optional: false, required: false
  private _clusterPolicy = new DataZedcloudProjectModulePolicyClusterPolicyList(this, "cluster_policy", false);
  public get clusterPolicy() {
    return this._clusterPolicy;
  }

  // configuration_lock_policy - computed: true, optional: false, required: false
  private _configurationLockPolicy = new DataZedcloudProjectModulePolicyConfigurationLockPolicyList(this, "configuration_lock_policy", false);
  public get configurationLockPolicy() {
    return this._configurationLockPolicy;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // edgeview_policy - computed: true, optional: false, required: false
  private _edgeviewPolicy = new DataZedcloudProjectModulePolicyEdgeviewPolicyList(this, "edgeview_policy", false);
  public get edgeviewPolicy() {
    return this._edgeviewPolicy;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // local_operator_console_policy - computed: true, optional: false, required: false
  private _localOperatorConsolePolicy = new DataZedcloudProjectModulePolicyLocalOperatorConsolePolicyList(this, "local_operator_console_policy", false);
  public get localOperatorConsolePolicy() {
    return this._localOperatorConsolePolicy;
  }

  // module_policy - computed: true, optional: false, required: false
  private _modulePolicy = new DataZedcloudProjectModulePolicyModulePolicyList(this, "module_policy", false);
  public get modulePolicy() {
    return this._modulePolicy;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network_policy - computed: true, optional: false, required: false
  private _networkPolicy = new DataZedcloudProjectModulePolicyNetworkPolicyList(this, "network_policy", false);
  public get networkPolicy() {
    return this._networkPolicy;
  }

  // revision - computed: true, optional: false, required: false
  private _revision = new DataZedcloudProjectModulePolicyRevisionList(this, "revision", false);
  public get revision() {
    return this._revision;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_message - computed: true, optional: false, required: false
  public get statusMessage() {
    return this.getStringAttribute('status_message');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataZedcloudProjectModulePolicyList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectModulePolicyOutputReference {
    return new DataZedcloudProjectModulePolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectRevision {
}

export function dataZedcloudProjectRevisionToTerraform(struct?: DataZedcloudProjectRevision): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectRevisionToHclTerraform(struct?: DataZedcloudProjectRevision): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectRevisionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataZedcloudProjectRevision | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectRevision | undefined) {
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

  // curr - computed: true, optional: false, required: false
  public get curr() {
    return this.getStringAttribute('curr');
  }

  // prev - computed: true, optional: false, required: false
  public get prev() {
    return this.getStringAttribute('prev');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }
}

export class DataZedcloudProjectRevisionList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectRevisionOutputReference {
    return new DataZedcloudProjectRevisionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectAppPolicyRevision {
}

export function dataZedcloudProjectAppPolicyRevisionToTerraform(struct?: DataZedcloudProjectAppPolicyRevision): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectAppPolicyRevisionToHclTerraform(struct?: DataZedcloudProjectAppPolicyRevision): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectAppPolicyRevisionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataZedcloudProjectAppPolicyRevision | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectAppPolicyRevision | undefined) {
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

  // curr - computed: true, optional: false, required: false
  public get curr() {
    return this.getStringAttribute('curr');
  }

  // prev - computed: true, optional: false, required: false
  public get prev() {
    return this.getStringAttribute('prev');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }
}

export class DataZedcloudProjectAppPolicyRevisionList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectAppPolicyRevisionOutputReference {
    return new DataZedcloudProjectAppPolicyRevisionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesAclsActionsMapparams {
  /**
  * Application port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#port DataZedcloudProject#port}
  */
  readonly port?: number;
}

export function dataZedcloudProjectAppPolicyAppPolicyAppsInterfacesAclsActionsMapparamsToTerraform(struct?: DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesAclsActionsMapparams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function dataZedcloudProjectAppPolicyAppPolicyAppsInterfacesAclsActionsMapparamsToHclTerraform(struct?: DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesAclsActionsMapparams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesAclsActionsMapparamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesAclsActionsMapparams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesAclsActionsMapparams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
    }
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}

export class DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesAclsActionsMapparamsList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesAclsActionsMapparams[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesAclsActionsMapparamsOutputReference {
    return new DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesAclsActionsMapparamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesAclsActions {
  /**
  * ACE drop flag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#drop DataZedcloudProject#drop}
  */
  readonly drop?: boolean | cdktf.IResolvable;
  /**
  * ACE limit flag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#limit DataZedcloudProject#limit}
  */
  readonly limit?: boolean | cdktf.IResolvable;
  /**
  * ACE limit burst
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#limitburst DataZedcloudProject#limitburst}
  */
  readonly limitburst?: number;
  /**
  * ACE limit rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#limitrate DataZedcloudProject#limitrate}
  */
  readonly limitrate?: number;
  /**
  * ACE limit unit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#limitunit DataZedcloudProject#limitunit}
  */
  readonly limitunit?: string;
  /**
  * application port map flag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#portmap DataZedcloudProject#portmap}
  */
  readonly portmap?: boolean | cdktf.IResolvable;
  /**
  * mapparams block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#mapparams DataZedcloudProject#mapparams}
  */
  readonly mapparams?: DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesAclsActionsMapparams[] | cdktf.IResolvable;
}

export function dataZedcloudProjectAppPolicyAppPolicyAppsInterfacesAclsActionsToTerraform(struct?: DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesAclsActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    drop: cdktf.booleanToTerraform(struct!.drop),
    limit: cdktf.booleanToTerraform(struct!.limit),
    limitburst: cdktf.numberToTerraform(struct!.limitburst),
    limitrate: cdktf.numberToTerraform(struct!.limitrate),
    limitunit: cdktf.stringToTerraform(struct!.limitunit),
    portmap: cdktf.booleanToTerraform(struct!.portmap),
    mapparams: cdktf.listMapper(dataZedcloudProjectAppPolicyAppPolicyAppsInterfacesAclsActionsMapparamsToTerraform, true)(struct!.mapparams),
  }
}


export function dataZedcloudProjectAppPolicyAppPolicyAppsInterfacesAclsActionsToHclTerraform(struct?: DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesAclsActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    drop: {
      value: cdktf.booleanToHclTerraform(struct!.drop),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    limit: {
      value: cdktf.booleanToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    limitburst: {
      value: cdktf.numberToHclTerraform(struct!.limitburst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    limitrate: {
      value: cdktf.numberToHclTerraform(struct!.limitrate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    limitunit: {
      value: cdktf.stringToHclTerraform(struct!.limitunit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    portmap: {
      value: cdktf.booleanToHclTerraform(struct!.portmap),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mapparams: {
      value: cdktf.listMapperHcl(dataZedcloudProjectAppPolicyAppPolicyAppsInterfacesAclsActionsMapparamsToHclTerraform, true)(struct!.mapparams),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesAclsActionsMapparamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesAclsActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesAclsActions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._drop !== undefined) {
      hasAnyValues = true;
      internalValueResult.drop = this._drop;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._limitburst !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitburst = this._limitburst;
    }
    if (this._limitrate !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitrate = this._limitrate;
    }
    if (this._limitunit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitunit = this._limitunit;
    }
    if (this._portmap !== undefined) {
      hasAnyValues = true;
      internalValueResult.portmap = this._portmap;
    }
    if (this._mapparams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapparams = this._mapparams?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesAclsActions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._drop = undefined;
      this._limit = undefined;
      this._limitburst = undefined;
      this._limitrate = undefined;
      this._limitunit = undefined;
      this._portmap = undefined;
      this._mapparams.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._drop = value.drop;
      this._limit = value.limit;
      this._limitburst = value.limitburst;
      this._limitrate = value.limitrate;
      this._limitunit = value.limitunit;
      this._portmap = value.portmap;
      this._mapparams.internalValue = value.mapparams;
    }
  }

  // drop - computed: false, optional: true, required: false
  private _drop?: boolean | cdktf.IResolvable; 
  public get drop() {
    return this.getBooleanAttribute('drop');
  }
  public set drop(value: boolean | cdktf.IResolvable) {
    this._drop = value;
  }
  public resetDrop() {
    this._drop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropInput() {
    return this._drop;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: boolean | cdktf.IResolvable; 
  public get limit() {
    return this.getBooleanAttribute('limit');
  }
  public set limit(value: boolean | cdktf.IResolvable) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // limitburst - computed: false, optional: true, required: false
  private _limitburst?: number; 
  public get limitburst() {
    return this.getNumberAttribute('limitburst');
  }
  public set limitburst(value: number) {
    this._limitburst = value;
  }
  public resetLimitburst() {
    this._limitburst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitburstInput() {
    return this._limitburst;
  }

  // limitrate - computed: false, optional: true, required: false
  private _limitrate?: number; 
  public get limitrate() {
    return this.getNumberAttribute('limitrate');
  }
  public set limitrate(value: number) {
    this._limitrate = value;
  }
  public resetLimitrate() {
    this._limitrate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitrateInput() {
    return this._limitrate;
  }

  // limitunit - computed: false, optional: true, required: false
  private _limitunit?: string; 
  public get limitunit() {
    return this.getStringAttribute('limitunit');
  }
  public set limitunit(value: string) {
    this._limitunit = value;
  }
  public resetLimitunit() {
    this._limitunit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitunitInput() {
    return this._limitunit;
  }

  // portmap - computed: false, optional: true, required: false
  private _portmap?: boolean | cdktf.IResolvable; 
  public get portmap() {
    return this.getBooleanAttribute('portmap');
  }
  public set portmap(value: boolean | cdktf.IResolvable) {
    this._portmap = value;
  }
  public resetPortmap() {
    this._portmap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portmapInput() {
    return this._portmap;
  }

  // mapparams - computed: false, optional: true, required: false
  private _mapparams = new DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesAclsActionsMapparamsList(this, "mapparams", false);
  public get mapparams() {
    return this._mapparams;
  }
  public putMapparams(value: DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesAclsActionsMapparams[] | cdktf.IResolvable) {
    this._mapparams.internalValue = value;
  }
  public resetMapparams() {
    this._mapparams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapparamsInput() {
    return this._mapparams.internalValue;
  }
}

export class DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesAclsActionsList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesAclsActions[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesAclsActionsOutputReference {
    return new DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesAclsActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesAclsMatches {
  /**
  * Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#type DataZedcloudProject#type}
  */
  readonly type?: string;
  /**
  * Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#value DataZedcloudProject#value}
  */
  readonly value?: string;
}

export function dataZedcloudProjectAppPolicyAppPolicyAppsInterfacesAclsMatchesToTerraform(struct?: DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesAclsMatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataZedcloudProjectAppPolicyAppPolicyAppsInterfacesAclsMatchesToHclTerraform(struct?: DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesAclsMatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesAclsMatchesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesAclsMatches | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesAclsMatches | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesAclsMatchesList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesAclsMatches[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesAclsMatchesOutputReference {
    return new DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesAclsMatchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesAcls {
  /**
  * User defined name of the app ACE, unique across the enterprise. Once object is created, name can’t be changed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#name DataZedcloudProject#name}
  */
  readonly name?: string;
  /**
  * actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#actions DataZedcloudProject#actions}
  */
  readonly actions?: DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesAclsActions[] | cdktf.IResolvable;
  /**
  * matches block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#matches DataZedcloudProject#matches}
  */
  readonly matches?: DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesAclsMatches[] | cdktf.IResolvable;
}

export function dataZedcloudProjectAppPolicyAppPolicyAppsInterfacesAclsToTerraform(struct?: DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesAcls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    actions: cdktf.listMapper(dataZedcloudProjectAppPolicyAppPolicyAppsInterfacesAclsActionsToTerraform, true)(struct!.actions),
    matches: cdktf.listMapper(dataZedcloudProjectAppPolicyAppPolicyAppsInterfacesAclsMatchesToTerraform, true)(struct!.matches),
  }
}


export function dataZedcloudProjectAppPolicyAppPolicyAppsInterfacesAclsToHclTerraform(struct?: DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesAcls | cdktf.IResolvable): any {
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
    actions: {
      value: cdktf.listMapperHcl(dataZedcloudProjectAppPolicyAppPolicyAppsInterfacesAclsActionsToHclTerraform, true)(struct!.actions),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesAclsActionsList",
    },
    matches: {
      value: cdktf.listMapperHcl(dataZedcloudProjectAppPolicyAppPolicyAppsInterfacesAclsMatchesToHclTerraform, true)(struct!.matches),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesAclsMatchesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesAclsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesAcls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._actions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions?.internalValue;
    }
    if (this._matches?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matches = this._matches?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesAcls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._actions.internalValue = undefined;
      this._matches.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._actions.internalValue = value.actions;
      this._matches.internalValue = value.matches;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
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

  // actions - computed: false, optional: true, required: false
  private _actions = new DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesAclsActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }
  public putActions(value: DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesAclsActions[] | cdktf.IResolvable) {
    this._actions.internalValue = value;
  }
  public resetActions() {
    this._actions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }

  // matches - computed: false, optional: true, required: false
  private _matches = new DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesAclsMatchesList(this, "matches", false);
  public get matches() {
    return this._matches;
  }
  public putMatches(value: DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesAclsMatches[] | cdktf.IResolvable) {
    this._matches.internalValue = value;
  }
  public resetMatches() {
    this._matches.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchesInput() {
    return this._matches.internalValue;
  }
}

export class DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesAclsList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesAcls[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesAclsOutputReference {
    return new DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesAclsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesEidregisterLispMapServers {
  /**
  * lisp credential
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#credential DataZedcloudProject#credential}
  */
  readonly credential: string;
  /**
  * name/IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#name_or_ip DataZedcloudProject#name_or_ip}
  */
  readonly nameOrIp: string;
}

export function dataZedcloudProjectAppPolicyAppPolicyAppsInterfacesEidregisterLispMapServersToTerraform(struct?: DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesEidregisterLispMapServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credential: cdktf.stringToTerraform(struct!.credential),
    name_or_ip: cdktf.stringToTerraform(struct!.nameOrIp),
  }
}


export function dataZedcloudProjectAppPolicyAppPolicyAppsInterfacesEidregisterLispMapServersToHclTerraform(struct?: DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesEidregisterLispMapServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credential: {
      value: cdktf.stringToHclTerraform(struct!.credential),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_or_ip: {
      value: cdktf.stringToHclTerraform(struct!.nameOrIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesEidregisterLispMapServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesEidregisterLispMapServers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credential !== undefined) {
      hasAnyValues = true;
      internalValueResult.credential = this._credential;
    }
    if (this._nameOrIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameOrIp = this._nameOrIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesEidregisterLispMapServers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._credential = undefined;
      this._nameOrIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._credential = value.credential;
      this._nameOrIp = value.nameOrIp;
    }
  }

  // credential - computed: false, optional: false, required: true
  private _credential?: string; 
  public get credential() {
    return this.getStringAttribute('credential');
  }
  public set credential(value: string) {
    this._credential = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialInput() {
    return this._credential;
  }

  // name_or_ip - computed: false, optional: false, required: true
  private _nameOrIp?: string; 
  public get nameOrIp() {
    return this.getStringAttribute('name_or_ip');
  }
  public set nameOrIp(value: string) {
    this._nameOrIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameOrIpInput() {
    return this._nameOrIp;
  }
}

export class DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesEidregisterLispMapServersList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesEidregisterLispMapServers[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesEidregisterLispMapServersOutputReference {
    return new DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesEidregisterLispMapServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesEidregister {
  /**
  * Display name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#display_name DataZedcloudProject#display_name}
  */
  readonly displayName: string;
  /**
  * EID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#e_id DataZedcloudProject#e_id}
  */
  readonly eId: string;
  /**
  * EID hash length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#e_id_hash_len DataZedcloudProject#e_id_hash_len}
  */
  readonly eIdHashLen: number;
  /**
  * Lisp Instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#lisp_instance DataZedcloudProject#lisp_instance}
  */
  readonly lispInstance: number;
  /**
  * Lisp Signature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#lisp_signature DataZedcloudProject#lisp_signature}
  */
  readonly lispSignature: string;
  /**
  * UUID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#uuid DataZedcloudProject#uuid}
  */
  readonly uuid: string;
  /**
  * lisp_map_servers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#lisp_map_servers DataZedcloudProject#lisp_map_servers}
  */
  readonly lispMapServers: DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesEidregisterLispMapServers[] | cdktf.IResolvable;
}

export function dataZedcloudProjectAppPolicyAppPolicyAppsInterfacesEidregisterToTerraform(struct?: DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesEidregister | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    e_id: cdktf.stringToTerraform(struct!.eId),
    e_id_hash_len: cdktf.numberToTerraform(struct!.eIdHashLen),
    lisp_instance: cdktf.numberToTerraform(struct!.lispInstance),
    lisp_signature: cdktf.stringToTerraform(struct!.lispSignature),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    lisp_map_servers: cdktf.listMapper(dataZedcloudProjectAppPolicyAppPolicyAppsInterfacesEidregisterLispMapServersToTerraform, true)(struct!.lispMapServers),
  }
}


export function dataZedcloudProjectAppPolicyAppPolicyAppsInterfacesEidregisterToHclTerraform(struct?: DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesEidregister | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    e_id: {
      value: cdktf.stringToHclTerraform(struct!.eId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    e_id_hash_len: {
      value: cdktf.numberToHclTerraform(struct!.eIdHashLen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lisp_instance: {
      value: cdktf.numberToHclTerraform(struct!.lispInstance),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lisp_signature: {
      value: cdktf.stringToHclTerraform(struct!.lispSignature),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lisp_map_servers: {
      value: cdktf.listMapperHcl(dataZedcloudProjectAppPolicyAppPolicyAppsInterfacesEidregisterLispMapServersToHclTerraform, true)(struct!.lispMapServers),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesEidregisterLispMapServersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesEidregisterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesEidregister | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._eId !== undefined) {
      hasAnyValues = true;
      internalValueResult.eId = this._eId;
    }
    if (this._eIdHashLen !== undefined) {
      hasAnyValues = true;
      internalValueResult.eIdHashLen = this._eIdHashLen;
    }
    if (this._lispInstance !== undefined) {
      hasAnyValues = true;
      internalValueResult.lispInstance = this._lispInstance;
    }
    if (this._lispSignature !== undefined) {
      hasAnyValues = true;
      internalValueResult.lispSignature = this._lispSignature;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._lispMapServers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lispMapServers = this._lispMapServers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesEidregister | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayName = undefined;
      this._eId = undefined;
      this._eIdHashLen = undefined;
      this._lispInstance = undefined;
      this._lispSignature = undefined;
      this._uuid = undefined;
      this._lispMapServers.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayName = value.displayName;
      this._eId = value.eId;
      this._eIdHashLen = value.eIdHashLen;
      this._lispInstance = value.lispInstance;
      this._lispSignature = value.lispSignature;
      this._uuid = value.uuid;
      this._lispMapServers.internalValue = value.lispMapServers;
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

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // e_id - computed: false, optional: false, required: true
  private _eId?: string; 
  public get eId() {
    return this.getStringAttribute('e_id');
  }
  public set eId(value: string) {
    this._eId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eIdInput() {
    return this._eId;
  }

  // e_id_hash_len - computed: false, optional: false, required: true
  private _eIdHashLen?: number; 
  public get eIdHashLen() {
    return this.getNumberAttribute('e_id_hash_len');
  }
  public set eIdHashLen(value: number) {
    this._eIdHashLen = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eIdHashLenInput() {
    return this._eIdHashLen;
  }

  // lisp_instance - computed: false, optional: false, required: true
  private _lispInstance?: number; 
  public get lispInstance() {
    return this.getNumberAttribute('lisp_instance');
  }
  public set lispInstance(value: number) {
    this._lispInstance = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lispInstanceInput() {
    return this._lispInstance;
  }

  // lisp_signature - computed: false, optional: false, required: true
  private _lispSignature?: string; 
  public get lispSignature() {
    return this.getStringAttribute('lisp_signature');
  }
  public set lispSignature(value: string) {
    this._lispSignature = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lispSignatureInput() {
    return this._lispSignature;
  }

  // uuid - computed: false, optional: false, required: true
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // lisp_map_servers - computed: false, optional: false, required: true
  private _lispMapServers = new DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesEidregisterLispMapServersList(this, "lisp_map_servers", false);
  public get lispMapServers() {
    return this._lispMapServers;
  }
  public putLispMapServers(value: DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesEidregisterLispMapServers[] | cdktf.IResolvable) {
    this._lispMapServers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lispMapServersInput() {
    return this._lispMapServers.internalValue;
  }
}

export class DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesEidregisterList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesEidregister[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesEidregisterOutputReference {
    return new DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesEidregisterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesIo {
  /**
  * Physical Adapter name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#name DataZedcloudProject#name}
  */
  readonly name?: string;
  /**
  * Tags are name/value pairs that enable you to categorize resources. Tag names are case insensitive with max_length 512 and min_length 3. Tag values are case sensitive with max_length 256 and min_length 3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#tags DataZedcloudProject#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * IoType specifies the type of the Input output of the device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#type DataZedcloudProject#type}
  */
  readonly type?: string;
}

export function dataZedcloudProjectAppPolicyAppPolicyAppsInterfacesIoToTerraform(struct?: DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesIo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataZedcloudProjectAppPolicyAppPolicyAppsInterfacesIoToHclTerraform(struct?: DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesIo | cdktf.IResolvable): any {
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
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesIoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesIo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesIo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._tags = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._tags = value.tags;
      this._type = value.type;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesIoList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesIo[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesIoOutputReference {
    return new DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesIoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectAppPolicyAppPolicyAppsInterfaces {
  /**
  * access port VLAN ID, vlan id of zero will be treated as trunk port and vlan id 1 is implicitly used by linux bridges
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#access_vlan_id DataZedcloudProject#access_vlan_id}
  */
  readonly accessVlanId?: number;
  /**
  * default instance flag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#default_net_instance DataZedcloudProject#default_net_instance}
  */
  readonly defaultNetInstance?: boolean | cdktf.IResolvable;
  /**
  * direct attach flag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#directattach DataZedcloudProject#directattach}
  */
  readonly directattach?: boolean | cdktf.IResolvable;
  /**
  * intf Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#intfname DataZedcloudProject#intfname}
  */
  readonly intfname: string;
  /**
  * intforder
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#intforder DataZedcloudProject#intforder}
  */
  readonly intforder?: number;
  /**
  * IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#ipaddr DataZedcloudProject#ipaddr}
  */
  readonly ipaddr?: string;
  /**
  * MAC address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#macaddr DataZedcloudProject#macaddr}
  */
  readonly macaddr?: string;
  /**
  * Network Instance name to be matched for interface assignment. Applicable only when "direct attach" flag is false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#netinstname DataZedcloudProject#netinstname}
  */
  readonly netinstname: string;
  /**
  * Network Instance tag to be matched for interface assignment. Applicable only when "direct attach" flag is false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#netinsttag DataZedcloudProject#netinsttag}
  */
  readonly netinsttag?: { [key: string]: string };
  /**
  * network name: will be deprecated in future, use netinstname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#netname DataZedcloudProject#netname}
  */
  readonly netname?: string;
  /**
  * Private IP flag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#privateip DataZedcloudProject#privateip}
  */
  readonly privateip: boolean | cdktf.IResolvable;
  /**
  * acls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#acls DataZedcloudProject#acls}
  */
  readonly acls?: DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesAcls[] | cdktf.IResolvable;
  /**
  * eidregister block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#eidregister DataZedcloudProject#eidregister}
  */
  readonly eidregister?: DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesEidregister[] | cdktf.IResolvable;
  /**
  * io block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#io DataZedcloudProject#io}
  */
  readonly io?: DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesIo[] | cdktf.IResolvable;
}

export function dataZedcloudProjectAppPolicyAppPolicyAppsInterfacesToTerraform(struct?: DataZedcloudProjectAppPolicyAppPolicyAppsInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_vlan_id: cdktf.numberToTerraform(struct!.accessVlanId),
    default_net_instance: cdktf.booleanToTerraform(struct!.defaultNetInstance),
    directattach: cdktf.booleanToTerraform(struct!.directattach),
    intfname: cdktf.stringToTerraform(struct!.intfname),
    intforder: cdktf.numberToTerraform(struct!.intforder),
    ipaddr: cdktf.stringToTerraform(struct!.ipaddr),
    macaddr: cdktf.stringToTerraform(struct!.macaddr),
    netinstname: cdktf.stringToTerraform(struct!.netinstname),
    netinsttag: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.netinsttag),
    netname: cdktf.stringToTerraform(struct!.netname),
    privateip: cdktf.booleanToTerraform(struct!.privateip),
    acls: cdktf.listMapper(dataZedcloudProjectAppPolicyAppPolicyAppsInterfacesAclsToTerraform, true)(struct!.acls),
    eidregister: cdktf.listMapper(dataZedcloudProjectAppPolicyAppPolicyAppsInterfacesEidregisterToTerraform, true)(struct!.eidregister),
    io: cdktf.listMapper(dataZedcloudProjectAppPolicyAppPolicyAppsInterfacesIoToTerraform, true)(struct!.io),
  }
}


export function dataZedcloudProjectAppPolicyAppPolicyAppsInterfacesToHclTerraform(struct?: DataZedcloudProjectAppPolicyAppPolicyAppsInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_vlan_id: {
      value: cdktf.numberToHclTerraform(struct!.accessVlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    default_net_instance: {
      value: cdktf.booleanToHclTerraform(struct!.defaultNetInstance),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    directattach: {
      value: cdktf.booleanToHclTerraform(struct!.directattach),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    intfname: {
      value: cdktf.stringToHclTerraform(struct!.intfname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    intforder: {
      value: cdktf.numberToHclTerraform(struct!.intforder),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipaddr: {
      value: cdktf.stringToHclTerraform(struct!.ipaddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    macaddr: {
      value: cdktf.stringToHclTerraform(struct!.macaddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    netinstname: {
      value: cdktf.stringToHclTerraform(struct!.netinstname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    netinsttag: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.netinsttag),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    netname: {
      value: cdktf.stringToHclTerraform(struct!.netname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    privateip: {
      value: cdktf.booleanToHclTerraform(struct!.privateip),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    acls: {
      value: cdktf.listMapperHcl(dataZedcloudProjectAppPolicyAppPolicyAppsInterfacesAclsToHclTerraform, true)(struct!.acls),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesAclsList",
    },
    eidregister: {
      value: cdktf.listMapperHcl(dataZedcloudProjectAppPolicyAppPolicyAppsInterfacesEidregisterToHclTerraform, true)(struct!.eidregister),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesEidregisterList",
    },
    io: {
      value: cdktf.listMapperHcl(dataZedcloudProjectAppPolicyAppPolicyAppsInterfacesIoToHclTerraform, true)(struct!.io),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesIoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectAppPolicyAppPolicyAppsInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessVlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessVlanId = this._accessVlanId;
    }
    if (this._defaultNetInstance !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultNetInstance = this._defaultNetInstance;
    }
    if (this._directattach !== undefined) {
      hasAnyValues = true;
      internalValueResult.directattach = this._directattach;
    }
    if (this._intfname !== undefined) {
      hasAnyValues = true;
      internalValueResult.intfname = this._intfname;
    }
    if (this._intforder !== undefined) {
      hasAnyValues = true;
      internalValueResult.intforder = this._intforder;
    }
    if (this._ipaddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipaddr = this._ipaddr;
    }
    if (this._macaddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.macaddr = this._macaddr;
    }
    if (this._netinstname !== undefined) {
      hasAnyValues = true;
      internalValueResult.netinstname = this._netinstname;
    }
    if (this._netinsttag !== undefined) {
      hasAnyValues = true;
      internalValueResult.netinsttag = this._netinsttag;
    }
    if (this._netname !== undefined) {
      hasAnyValues = true;
      internalValueResult.netname = this._netname;
    }
    if (this._privateip !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateip = this._privateip;
    }
    if (this._acls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.acls = this._acls?.internalValue;
    }
    if (this._eidregister?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eidregister = this._eidregister?.internalValue;
    }
    if (this._io?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.io = this._io?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectAppPolicyAppPolicyAppsInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessVlanId = undefined;
      this._defaultNetInstance = undefined;
      this._directattach = undefined;
      this._intfname = undefined;
      this._intforder = undefined;
      this._ipaddr = undefined;
      this._macaddr = undefined;
      this._netinstname = undefined;
      this._netinsttag = undefined;
      this._netname = undefined;
      this._privateip = undefined;
      this._acls.internalValue = undefined;
      this._eidregister.internalValue = undefined;
      this._io.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessVlanId = value.accessVlanId;
      this._defaultNetInstance = value.defaultNetInstance;
      this._directattach = value.directattach;
      this._intfname = value.intfname;
      this._intforder = value.intforder;
      this._ipaddr = value.ipaddr;
      this._macaddr = value.macaddr;
      this._netinstname = value.netinstname;
      this._netinsttag = value.netinsttag;
      this._netname = value.netname;
      this._privateip = value.privateip;
      this._acls.internalValue = value.acls;
      this._eidregister.internalValue = value.eidregister;
      this._io.internalValue = value.io;
    }
  }

  // access_vlan_id - computed: false, optional: true, required: false
  private _accessVlanId?: number; 
  public get accessVlanId() {
    return this.getNumberAttribute('access_vlan_id');
  }
  public set accessVlanId(value: number) {
    this._accessVlanId = value;
  }
  public resetAccessVlanId() {
    this._accessVlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessVlanIdInput() {
    return this._accessVlanId;
  }

  // default_net_instance - computed: false, optional: true, required: false
  private _defaultNetInstance?: boolean | cdktf.IResolvable; 
  public get defaultNetInstance() {
    return this.getBooleanAttribute('default_net_instance');
  }
  public set defaultNetInstance(value: boolean | cdktf.IResolvable) {
    this._defaultNetInstance = value;
  }
  public resetDefaultNetInstance() {
    this._defaultNetInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultNetInstanceInput() {
    return this._defaultNetInstance;
  }

  // directattach - computed: false, optional: true, required: false
  private _directattach?: boolean | cdktf.IResolvable; 
  public get directattach() {
    return this.getBooleanAttribute('directattach');
  }
  public set directattach(value: boolean | cdktf.IResolvable) {
    this._directattach = value;
  }
  public resetDirectattach() {
    this._directattach = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directattachInput() {
    return this._directattach;
  }

  // intfname - computed: false, optional: false, required: true
  private _intfname?: string; 
  public get intfname() {
    return this.getStringAttribute('intfname');
  }
  public set intfname(value: string) {
    this._intfname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intfnameInput() {
    return this._intfname;
  }

  // intforder - computed: false, optional: true, required: false
  private _intforder?: number; 
  public get intforder() {
    return this.getNumberAttribute('intforder');
  }
  public set intforder(value: number) {
    this._intforder = value;
  }
  public resetIntforder() {
    this._intforder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intforderInput() {
    return this._intforder;
  }

  // ipaddr - computed: false, optional: true, required: false
  private _ipaddr?: string; 
  public get ipaddr() {
    return this.getStringAttribute('ipaddr');
  }
  public set ipaddr(value: string) {
    this._ipaddr = value;
  }
  public resetIpaddr() {
    this._ipaddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipaddrInput() {
    return this._ipaddr;
  }

  // macaddr - computed: false, optional: true, required: false
  private _macaddr?: string; 
  public get macaddr() {
    return this.getStringAttribute('macaddr');
  }
  public set macaddr(value: string) {
    this._macaddr = value;
  }
  public resetMacaddr() {
    this._macaddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macaddrInput() {
    return this._macaddr;
  }

  // netinstid - computed: true, optional: false, required: false
  public get netinstid() {
    return this.getStringAttribute('netinstid');
  }

  // netinstname - computed: false, optional: false, required: true
  private _netinstname?: string; 
  public get netinstname() {
    return this.getStringAttribute('netinstname');
  }
  public set netinstname(value: string) {
    this._netinstname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get netinstnameInput() {
    return this._netinstname;
  }

  // netinsttag - computed: false, optional: true, required: false
  private _netinsttag?: { [key: string]: string }; 
  public get netinsttag() {
    return this.getStringMapAttribute('netinsttag');
  }
  public set netinsttag(value: { [key: string]: string }) {
    this._netinsttag = value;
  }
  public resetNetinsttag() {
    this._netinsttag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netinsttagInput() {
    return this._netinsttag;
  }

  // netname - computed: false, optional: true, required: false
  private _netname?: string; 
  public get netname() {
    return this.getStringAttribute('netname');
  }
  public set netname(value: string) {
    this._netname = value;
  }
  public resetNetname() {
    this._netname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netnameInput() {
    return this._netname;
  }

  // privateip - computed: false, optional: false, required: true
  private _privateip?: boolean | cdktf.IResolvable; 
  public get privateip() {
    return this.getBooleanAttribute('privateip');
  }
  public set privateip(value: boolean | cdktf.IResolvable) {
    this._privateip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateipInput() {
    return this._privateip;
  }

  // acls - computed: false, optional: true, required: false
  private _acls = new DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesAclsList(this, "acls", false);
  public get acls() {
    return this._acls;
  }
  public putAcls(value: DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesAcls[] | cdktf.IResolvable) {
    this._acls.internalValue = value;
  }
  public resetAcls() {
    this._acls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclsInput() {
    return this._acls.internalValue;
  }

  // eidregister - computed: false, optional: true, required: false
  private _eidregister = new DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesEidregisterList(this, "eidregister", false);
  public get eidregister() {
    return this._eidregister;
  }
  public putEidregister(value: DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesEidregister[] | cdktf.IResolvable) {
    this._eidregister.internalValue = value;
  }
  public resetEidregister() {
    this._eidregister.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eidregisterInput() {
    return this._eidregister.internalValue;
  }

  // io - computed: false, optional: true, required: false
  private _io = new DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesIoList(this, "io", false);
  public get io() {
    return this._io;
  }
  public putIo(value: DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesIo[] | cdktf.IResolvable) {
    this._io.internalValue = value;
  }
  public resetIo() {
    this._io.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ioInput() {
    return this._io.internalValue;
  }
}

export class DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudProjectAppPolicyAppPolicyAppsInterfaces[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesOutputReference {
    return new DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#name DataZedcloudProject#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#operator DataZedcloudProject#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#value DataZedcloudProject#value}
  */
  readonly value?: string;
}

export function dataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsConditionToTerraform(struct?: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    operator: cdktf.stringToTerraform(struct!.operator),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsConditionToHclTerraform(struct?: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsCondition | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._operator = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._operator = value.operator;
      this._value = value.value;
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

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsConditionList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsCondition[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsConditionOutputReference {
    return new DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptions {
  /**
  * Display label of the key in User-Agent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#label DataZedcloudProject#label}
  */
  readonly label?: string;
  /**
  * Value of the key to be used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#value DataZedcloudProject#value}
  */
  readonly value?: string;
}

export function dataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsToTerraform(struct?: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label: cdktf.stringToTerraform(struct!.label),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsToHclTerraform(struct?: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._label = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._label = value.label;
      this._value = value.value;
    }
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptions[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsOutputReference {
    return new DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariables {
  /**
  * Default value of the variable. (Optional. Default: <Default value based on type>)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#default DataZedcloudProject#default}
  */
  readonly default?: string;
  /**
  * Encoding of file content. Applicable if format is VARIABLE_FORMAT_FILE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#encode DataZedcloudProject#encode}
  */
  readonly encode?: string;
  /**
  * Format of the user variable. (Required)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#format DataZedcloudProject#format}
  */
  readonly format: string;
  /**
  * Label for the variable (Required)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#label DataZedcloudProject#label}
  */
  readonly label: string;
  /**
  * Max length of the value of the variable(Optional. Default: 1024)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#max_length DataZedcloudProject#max_length}
  */
  readonly maxLength?: string;
  /**
  * Name of the Variable (Required)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#name DataZedcloudProject#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#process_input DataZedcloudProject#process_input}
  */
  readonly processInput?: string;
  /**
  * This variable MUST be specified when creating an App Instance. (Optional. Default: False)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#required DataZedcloudProject#required}
  */
  readonly required: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#type DataZedcloudProject#type}
  */
  readonly type?: string;
  /**
  * User-specified value of the variable.(Required if required is true. Optional otherwise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#value DataZedcloudProject#value}
  */
  readonly value?: string;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#options DataZedcloudProject#options}
  */
  readonly options?: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptions[] | cdktf.IResolvable;
}

export function dataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesToTerraform(struct?: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.stringToTerraform(struct!.default),
    encode: cdktf.stringToTerraform(struct!.encode),
    format: cdktf.stringToTerraform(struct!.format),
    label: cdktf.stringToTerraform(struct!.label),
    max_length: cdktf.stringToTerraform(struct!.maxLength),
    name: cdktf.stringToTerraform(struct!.name),
    process_input: cdktf.stringToTerraform(struct!.processInput),
    required: cdktf.booleanToTerraform(struct!.required),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
    options: cdktf.listMapper(dataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsToTerraform, true)(struct!.options),
  }
}


export function dataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesToHclTerraform(struct?: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encode: {
      value: cdktf.stringToHclTerraform(struct!.encode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_length: {
      value: cdktf.stringToHclTerraform(struct!.maxLength),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    process_input: {
      value: cdktf.stringToHclTerraform(struct!.processInput),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    options: {
      value: cdktf.listMapperHcl(dataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsToHclTerraform, true)(struct!.options),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._encode !== undefined) {
      hasAnyValues = true;
      internalValueResult.encode = this._encode;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._maxLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLength = this._maxLength;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._processInput !== undefined) {
      hasAnyValues = true;
      internalValueResult.processInput = this._processInput;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
      this._encode = undefined;
      this._format = undefined;
      this._label = undefined;
      this._maxLength = undefined;
      this._name = undefined;
      this._processInput = undefined;
      this._required = undefined;
      this._type = undefined;
      this._value = undefined;
      this._options.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default = value.default;
      this._encode = value.encode;
      this._format = value.format;
      this._label = value.label;
      this._maxLength = value.maxLength;
      this._name = value.name;
      this._processInput = value.processInput;
      this._required = value.required;
      this._type = value.type;
      this._value = value.value;
      this._options.internalValue = value.options;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // encode - computed: false, optional: true, required: false
  private _encode?: string; 
  public get encode() {
    return this.getStringAttribute('encode');
  }
  public set encode(value: string) {
    this._encode = value;
  }
  public resetEncode() {
    this._encode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodeInput() {
    return this._encode;
  }

  // format - computed: false, optional: false, required: true
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // max_length - computed: false, optional: true, required: false
  private _maxLength?: string; 
  public get maxLength() {
    return this.getStringAttribute('max_length');
  }
  public set maxLength(value: string) {
    this._maxLength = value;
  }
  public resetMaxLength() {
    this._maxLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLengthInput() {
    return this._maxLength;
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

  // process_input - computed: false, optional: true, required: false
  private _processInput?: string; 
  public get processInput() {
    return this.getStringAttribute('process_input');
  }
  public set processInput(value: string) {
    this._processInput = value;
  }
  public resetProcessInput() {
    this._processInput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processInputInput() {
    return this._processInput;
  }

  // required - computed: false, optional: false, required: true
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // options - computed: false, optional: true, required: false
  private _options = new DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsList(this, "options", false);
  public get options() {
    return this._options;
  }
  public putOptions(value: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptions[] | cdktf.IResolvable) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }
}

export class DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariables[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesOutputReference {
    return new DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroups {
  /**
  * Name of the Variable Group(Required)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#name DataZedcloudProject#name}
  */
  readonly name?: string;
  /**
  * Indicates if the variable group is required to be specified for the App Instance. (Optional. Default:False)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#required DataZedcloudProject#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#condition DataZedcloudProject#condition}
  */
  readonly condition?: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsCondition[] | cdktf.IResolvable;
  /**
  * variables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#variables DataZedcloudProject#variables}
  */
  readonly variables?: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariables[] | cdktf.IResolvable;
}

export function dataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsToTerraform(struct?: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    required: cdktf.booleanToTerraform(struct!.required),
    condition: cdktf.listMapper(dataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsConditionToTerraform, true)(struct!.condition),
    variables: cdktf.listMapper(dataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesToTerraform, true)(struct!.variables),
  }
}


export function dataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsToHclTerraform(struct?: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroups | cdktf.IResolvable): any {
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
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    condition: {
      value: cdktf.listMapperHcl(dataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsConditionToHclTerraform, true)(struct!.condition),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsConditionList",
    },
    variables: {
      value: cdktf.listMapperHcl(dataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesToHclTerraform, true)(struct!.variables),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    if (this._variables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.variables = this._variables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._required = undefined;
      this._condition.internalValue = undefined;
      this._variables.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._required = value.required;
      this._condition.internalValue = value.condition;
      this._variables.internalValue = value.variables;
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

  // required - computed: false, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // condition - computed: false, optional: true, required: false
  private _condition = new DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsConditionList(this, "condition", false);
  public get condition() {
    return this._condition;
  }
  public putCondition(value: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsCondition[] | cdktf.IResolvable) {
    this._condition.internalValue = value;
  }
  public resetCondition() {
    this._condition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }

  // variables - computed: false, optional: true, required: false
  private _variables = new DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesList(this, "variables", false);
  public get variables() {
    return this._variables;
  }
  public putVariables(value: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariables[] | cdktf.IResolvable) {
    this._variables.internalValue = value;
  }
  public resetVariables() {
    this._variables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variablesInput() {
    return this._variables.internalValue;
  }
}

export class DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroups[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsOutputReference {
    return new DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationCustomConfig {
  /**
  * Add the Custom Config to App Instance (Optional. Default: False)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#add DataZedcloudProject#add}
  */
  readonly add?: boolean | cdktf.IResolvable;
  /**
  * Allow Appinstance storage to be resized after app instance is created. (Optional. Default: False)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#allow_storage_resize DataZedcloudProject#allow_storage_resize}
  */
  readonly allowStorageResize?: boolean | cdktf.IResolvable;
  /**
  * Field delimiter used in specifying variables in template. (Required)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#field_delimiter DataZedcloudProject#field_delimiter}
  */
  readonly fieldDelimiter?: string;
  /**
  * Name of CustomConfig (Required)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#name DataZedcloudProject#name}
  */
  readonly name?: string;
  /**
  * Override existing custom config from App Bundle Manifest (Optional. Default: False)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#override DataZedcloudProject#override}
  */
  readonly override?: boolean | cdktf.IResolvable;
  /**
  * base64 encrypted template string. (Optional)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#template DataZedcloudProject#template}
  */
  readonly template?: string;
  /**
  * variable_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#variable_groups DataZedcloudProject#variable_groups}
  */
  readonly variableGroups?: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroups[] | cdktf.IResolvable;
}

export function dataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigToTerraform(struct?: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationCustomConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add: cdktf.booleanToTerraform(struct!.add),
    allow_storage_resize: cdktf.booleanToTerraform(struct!.allowStorageResize),
    field_delimiter: cdktf.stringToTerraform(struct!.fieldDelimiter),
    name: cdktf.stringToTerraform(struct!.name),
    override: cdktf.booleanToTerraform(struct!.override),
    template: cdktf.stringToTerraform(struct!.template),
    variable_groups: cdktf.listMapper(dataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsToTerraform, true)(struct!.variableGroups),
  }
}


export function dataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigToHclTerraform(struct?: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationCustomConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add: {
      value: cdktf.booleanToHclTerraform(struct!.add),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_storage_resize: {
      value: cdktf.booleanToHclTerraform(struct!.allowStorageResize),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    field_delimiter: {
      value: cdktf.stringToHclTerraform(struct!.fieldDelimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    override: {
      value: cdktf.booleanToHclTerraform(struct!.override),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    template: {
      value: cdktf.stringToHclTerraform(struct!.template),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    variable_groups: {
      value: cdktf.listMapperHcl(dataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsToHclTerraform, true)(struct!.variableGroups),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationCustomConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._add !== undefined) {
      hasAnyValues = true;
      internalValueResult.add = this._add;
    }
    if (this._allowStorageResize !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowStorageResize = this._allowStorageResize;
    }
    if (this._fieldDelimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldDelimiter = this._fieldDelimiter;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._override !== undefined) {
      hasAnyValues = true;
      internalValueResult.override = this._override;
    }
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    if (this._variableGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.variableGroups = this._variableGroups?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationCustomConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._add = undefined;
      this._allowStorageResize = undefined;
      this._fieldDelimiter = undefined;
      this._name = undefined;
      this._override = undefined;
      this._template = undefined;
      this._variableGroups.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._add = value.add;
      this._allowStorageResize = value.allowStorageResize;
      this._fieldDelimiter = value.fieldDelimiter;
      this._name = value.name;
      this._override = value.override;
      this._template = value.template;
      this._variableGroups.internalValue = value.variableGroups;
    }
  }

  // add - computed: false, optional: true, required: false
  private _add?: boolean | cdktf.IResolvable; 
  public get add() {
    return this.getBooleanAttribute('add');
  }
  public set add(value: boolean | cdktf.IResolvable) {
    this._add = value;
  }
  public resetAdd() {
    this._add = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addInput() {
    return this._add;
  }

  // allow_storage_resize - computed: false, optional: true, required: false
  private _allowStorageResize?: boolean | cdktf.IResolvable; 
  public get allowStorageResize() {
    return this.getBooleanAttribute('allow_storage_resize');
  }
  public set allowStorageResize(value: boolean | cdktf.IResolvable) {
    this._allowStorageResize = value;
  }
  public resetAllowStorageResize() {
    this._allowStorageResize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowStorageResizeInput() {
    return this._allowStorageResize;
  }

  // field_delimiter - computed: false, optional: true, required: false
  private _fieldDelimiter?: string; 
  public get fieldDelimiter() {
    return this.getStringAttribute('field_delimiter');
  }
  public set fieldDelimiter(value: string) {
    this._fieldDelimiter = value;
  }
  public resetFieldDelimiter() {
    this._fieldDelimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldDelimiterInput() {
    return this._fieldDelimiter;
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

  // override - computed: false, optional: true, required: false
  private _override?: boolean | cdktf.IResolvable; 
  public get override() {
    return this.getBooleanAttribute('override');
  }
  public set override(value: boolean | cdktf.IResolvable) {
    this._override = value;
  }
  public resetOverride() {
    this._override = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override;
  }

  // template - computed: false, optional: true, required: false
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }

  // variable_groups - computed: false, optional: true, required: false
  private _variableGroups = new DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsList(this, "variable_groups", false);
  public get variableGroups() {
    return this._variableGroups;
  }
  public putVariableGroups(value: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroups[] | cdktf.IResolvable) {
    this._variableGroups.internalValue = value;
  }
  public resetVariableGroups() {
    this._variableGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variableGroupsInput() {
    return this._variableGroups.internalValue;
  }
}

export class DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationCustomConfig[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigOutputReference {
    return new DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfiguration {
  /**
  * custom_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#custom_config DataZedcloudProject#custom_config}
  */
  readonly customConfig?: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationCustomConfig[] | cdktf.IResolvable;
}

export function dataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationToTerraform(struct?: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_config: cdktf.listMapper(dataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigToTerraform, true)(struct!.customConfig),
  }
}


export function dataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationToHclTerraform(struct?: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_config: {
      value: cdktf.listMapperHcl(dataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigToHclTerraform, true)(struct!.customConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customConfig = this._customConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customConfig.internalValue = value.customConfig;
    }
  }

  // custom_config - computed: false, optional: true, required: false
  private _customConfig = new DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigList(this, "custom_config", false);
  public get customConfig() {
    return this._customConfig;
  }
  public putCustomConfig(value: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationCustomConfig[] | cdktf.IResolvable) {
    this._customConfig.internalValue = value;
  }
  public resetCustomConfig() {
    this._customConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customConfigInput() {
    return this._customConfig.internalValue;
  }
}

export class DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfiguration[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationOutputReference {
    return new DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonContainerDetail {
  /**
  * Create options direct the creation of the Docker container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#container_create_option DataZedcloudProject#container_create_option}
  */
  readonly containerCreateOption?: string;
}

export function dataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonContainerDetailToTerraform(struct?: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonContainerDetail | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_create_option: cdktf.stringToTerraform(struct!.containerCreateOption),
  }
}


export function dataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonContainerDetailToHclTerraform(struct?: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonContainerDetail | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_create_option: {
      value: cdktf.stringToHclTerraform(struct!.containerCreateOption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonContainerDetailOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonContainerDetail | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerCreateOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerCreateOption = this._containerCreateOption;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonContainerDetail | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerCreateOption = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerCreateOption = value.containerCreateOption;
    }
  }

  // container_create_option - computed: false, optional: true, required: false
  private _containerCreateOption?: string; 
  public get containerCreateOption() {
    return this.getStringAttribute('container_create_option');
  }
  public set containerCreateOption(value: string) {
    this._containerCreateOption = value;
  }
  public resetContainerCreateOption() {
    this._containerCreateOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerCreateOptionInput() {
    return this._containerCreateOption;
  }
}

export class DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonContainerDetailList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonContainerDetail[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonContainerDetailOutputReference {
    return new DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonContainerDetailOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonDesc {
  /**
  * UI map: AppEditPage:DeveloperPane:Developer_Agreement_Field, AppDetailsPage:DeveloperPane:Developer_Agreement_Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#agreement_list DataZedcloudProject#agreement_list}
  */
  readonly agreementList?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#app_category DataZedcloudProject#app_category}
  */
  readonly appCategory: string;
  /**
  * UI map: AppMarketplacePage:AppCard:DescriptionField, AppEditPage:IdentityPane:CategoryField, AppDetailsPage:IdentityPane:CategoryField
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#category DataZedcloudProject#category}
  */
  readonly category?: string;
  /**
  * UI map: AppMarketplacePage:AppCard:License, AppEditPage:IdentityPane:License, AppDetailsPage:IdentityPane:License
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#license_list DataZedcloudProject#license_list}
  */
  readonly licenseList?: { [key: string]: string };
  /**
  * UI map: AppEditPage:IdentityPane:Logo, AppDetailsPage:IdentityPane:Logo
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#logo DataZedcloudProject#logo}
  */
  readonly logo?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#os DataZedcloudProject#os}
  */
  readonly os?: string;
  /**
  * UI map: AppEditPage:IdentityPane:Screenshot_Fields, AppDetailsPage:IdentityPane:Screenshot_Fields
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#screenshot_list DataZedcloudProject#screenshot_list}
  */
  readonly screenshotList?: { [key: string]: string };
  /**
  * UI map: AppEditPage:DeveloperPane:Support_Description_Field, AppDetailsPage:DeveloperPane:Support_Description_Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#support DataZedcloudProject#support}
  */
  readonly support?: string;
}

export function dataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonDescToTerraform(struct?: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonDesc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agreement_list: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.agreementList),
    app_category: cdktf.stringToTerraform(struct!.appCategory),
    category: cdktf.stringToTerraform(struct!.category),
    license_list: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.licenseList),
    logo: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.logo),
    os: cdktf.stringToTerraform(struct!.os),
    screenshot_list: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.screenshotList),
    support: cdktf.stringToTerraform(struct!.support),
  }
}


export function dataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonDescToHclTerraform(struct?: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonDesc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agreement_list: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.agreementList),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    app_category: {
      value: cdktf.stringToHclTerraform(struct!.appCategory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    category: {
      value: cdktf.stringToHclTerraform(struct!.category),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    license_list: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.licenseList),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    logo: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.logo),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    os: {
      value: cdktf.stringToHclTerraform(struct!.os),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    screenshot_list: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.screenshotList),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    support: {
      value: cdktf.stringToHclTerraform(struct!.support),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonDescOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonDesc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agreementList !== undefined) {
      hasAnyValues = true;
      internalValueResult.agreementList = this._agreementList;
    }
    if (this._appCategory !== undefined) {
      hasAnyValues = true;
      internalValueResult.appCategory = this._appCategory;
    }
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._licenseList !== undefined) {
      hasAnyValues = true;
      internalValueResult.licenseList = this._licenseList;
    }
    if (this._logo !== undefined) {
      hasAnyValues = true;
      internalValueResult.logo = this._logo;
    }
    if (this._os !== undefined) {
      hasAnyValues = true;
      internalValueResult.os = this._os;
    }
    if (this._screenshotList !== undefined) {
      hasAnyValues = true;
      internalValueResult.screenshotList = this._screenshotList;
    }
    if (this._support !== undefined) {
      hasAnyValues = true;
      internalValueResult.support = this._support;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonDesc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._agreementList = undefined;
      this._appCategory = undefined;
      this._category = undefined;
      this._licenseList = undefined;
      this._logo = undefined;
      this._os = undefined;
      this._screenshotList = undefined;
      this._support = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._agreementList = value.agreementList;
      this._appCategory = value.appCategory;
      this._category = value.category;
      this._licenseList = value.licenseList;
      this._logo = value.logo;
      this._os = value.os;
      this._screenshotList = value.screenshotList;
      this._support = value.support;
    }
  }

  // agreement_list - computed: false, optional: true, required: false
  private _agreementList?: { [key: string]: string }; 
  public get agreementList() {
    return this.getStringMapAttribute('agreement_list');
  }
  public set agreementList(value: { [key: string]: string }) {
    this._agreementList = value;
  }
  public resetAgreementList() {
    this._agreementList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agreementListInput() {
    return this._agreementList;
  }

  // app_category - computed: false, optional: false, required: true
  private _appCategory?: string; 
  public get appCategory() {
    return this.getStringAttribute('app_category');
  }
  public set appCategory(value: string) {
    this._appCategory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appCategoryInput() {
    return this._appCategory;
  }

  // category - computed: false, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // license_list - computed: false, optional: true, required: false
  private _licenseList?: { [key: string]: string }; 
  public get licenseList() {
    return this.getStringMapAttribute('license_list');
  }
  public set licenseList(value: { [key: string]: string }) {
    this._licenseList = value;
  }
  public resetLicenseList() {
    this._licenseList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseListInput() {
    return this._licenseList;
  }

  // logo - computed: false, optional: true, required: false
  private _logo?: { [key: string]: string }; 
  public get logo() {
    return this.getStringMapAttribute('logo');
  }
  public set logo(value: { [key: string]: string }) {
    this._logo = value;
  }
  public resetLogo() {
    this._logo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoInput() {
    return this._logo;
  }

  // os - computed: false, optional: true, required: false
  private _os?: string; 
  public get os() {
    return this.getStringAttribute('os');
  }
  public set os(value: string) {
    this._os = value;
  }
  public resetOs() {
    this._os = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osInput() {
    return this._os;
  }

  // screenshot_list - computed: false, optional: true, required: false
  private _screenshotList?: { [key: string]: string }; 
  public get screenshotList() {
    return this.getStringMapAttribute('screenshot_list');
  }
  public set screenshotList(value: { [key: string]: string }) {
    this._screenshotList = value;
  }
  public resetScreenshotList() {
    this._screenshotList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get screenshotListInput() {
    return this._screenshotList;
  }

  // support - computed: false, optional: true, required: false
  private _support?: string; 
  public get support() {
    return this.getStringAttribute('support');
  }
  public set support(value: string) {
    this._support = value;
  }
  public resetSupport() {
    this._support = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportInput() {
    return this._support;
  }
}

export class DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonDescList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonDesc[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonDescOutputReference {
    return new DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonDescOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonImagesParams {
  /**
  * Name of the Parameter (Required)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#name DataZedcloudProject#name}
  */
  readonly name?: string;
  /**
  * Value of the parameter (Required)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#value DataZedcloudProject#value}
  */
  readonly value?: string;
}

export function dataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonImagesParamsToTerraform(struct?: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonImagesParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonImagesParamsToHclTerraform(struct?: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonImagesParams | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonImagesParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonImagesParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonImagesParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonImagesParamsList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonImagesParams[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonImagesParamsOutputReference {
    return new DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonImagesParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonImages {
  /**
  * UI map: AppEditPage:DrivesPane:Cleartext, AppDetailsPage:DrivesPane:ClearText_Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#cleartext DataZedcloudProject#cleartext}
  */
  readonly cleartext?: boolean | cdktf.IResolvable;
  /**
  * UI map: AppEditPage:DrivesPane:Drive_Type_Field, AppDetailsPage:DrivesPane:Drive_Type_Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#drvtype DataZedcloudProject#drvtype}
  */
  readonly drvtype?: string;
  /**
  * UI map: AppEditPage:DrivesPane:Ignorepurge, AppDetailsPage:DrivesPane:Ignorepurgee_Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#ignorepurge DataZedcloudProject#ignorepurge}
  */
  readonly ignorepurge?: boolean | cdktf.IResolvable;
  /**
  * UI map: AppEditPage:DrivesPane:Image_Format_Field, AppDetailsPage:DrivesPane:Image_Format_Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#imageformat DataZedcloudProject#imageformat}
  */
  readonly imageformat?: string;
  /**
  * UI map: AppEditPage:DrivesPane:Image_ID_Field, AppDetailsPage:DrivesPane:Image_ID_Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#imageid DataZedcloudProject#imageid}
  */
  readonly imageid?: string;
  /**
  * UI map: AppEditPage:DrivesPane:Image_Name_Field, AppDetailsPage:DrivesPane:Image_Name_Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#imagename DataZedcloudProject#imagename}
  */
  readonly imagename?: string;
  /**
  * UI map: AppEditPage:DrivesPane:Max_Size_Field, AppDetailsPage:DrivesPane:Max_Size_Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#maxsize DataZedcloudProject#maxsize}
  */
  readonly maxsize?: string;
  /**
  * UI map: AppEditPage:DrivesPane:Mountpath, AppDetailsPage:DrivesPane:Mountpath_Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#mountpath DataZedcloudProject#mountpath}
  */
  readonly mountpath?: string;
  /**
  * UI map: AppEditPage:DrivesPane:Preserve_Field, AppDetailsPage:DrivesPane:Preserve_Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#preserve DataZedcloudProject#preserve}
  */
  readonly preserve?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#readonly DataZedcloudProject#readonly}
  */
  readonly readonly?: boolean | cdktf.IResolvable;
  /**
  * UI map: AppEditPage:DrivesPane:Target_Field, AppDetailsPage:DrivesPane:Target_Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#target DataZedcloudProject#target}
  */
  readonly target?: string;
  /**
  * UI map: AppEditPage:DrivesPane:Volume_Label, AppDetailsPage:DrivesPane:Volume_Label
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#volumelabel DataZedcloudProject#volumelabel}
  */
  readonly volumelabel?: string;
  /**
  * params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#params DataZedcloudProject#params}
  */
  readonly params?: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonImagesParams[] | cdktf.IResolvable;
}

export function dataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonImagesToTerraform(struct?: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonImages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cleartext: cdktf.booleanToTerraform(struct!.cleartext),
    drvtype: cdktf.stringToTerraform(struct!.drvtype),
    ignorepurge: cdktf.booleanToTerraform(struct!.ignorepurge),
    imageformat: cdktf.stringToTerraform(struct!.imageformat),
    imageid: cdktf.stringToTerraform(struct!.imageid),
    imagename: cdktf.stringToTerraform(struct!.imagename),
    maxsize: cdktf.stringToTerraform(struct!.maxsize),
    mountpath: cdktf.stringToTerraform(struct!.mountpath),
    preserve: cdktf.booleanToTerraform(struct!.preserve),
    readonly: cdktf.booleanToTerraform(struct!.readonly),
    target: cdktf.stringToTerraform(struct!.target),
    volumelabel: cdktf.stringToTerraform(struct!.volumelabel),
    params: cdktf.listMapper(dataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonImagesParamsToTerraform, true)(struct!.params),
  }
}


export function dataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonImagesToHclTerraform(struct?: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonImages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cleartext: {
      value: cdktf.booleanToHclTerraform(struct!.cleartext),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    drvtype: {
      value: cdktf.stringToHclTerraform(struct!.drvtype),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignorepurge: {
      value: cdktf.booleanToHclTerraform(struct!.ignorepurge),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    imageformat: {
      value: cdktf.stringToHclTerraform(struct!.imageformat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    imageid: {
      value: cdktf.stringToHclTerraform(struct!.imageid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    imagename: {
      value: cdktf.stringToHclTerraform(struct!.imagename),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maxsize: {
      value: cdktf.stringToHclTerraform(struct!.maxsize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mountpath: {
      value: cdktf.stringToHclTerraform(struct!.mountpath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preserve: {
      value: cdktf.booleanToHclTerraform(struct!.preserve),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    readonly: {
      value: cdktf.booleanToHclTerraform(struct!.readonly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volumelabel: {
      value: cdktf.stringToHclTerraform(struct!.volumelabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    params: {
      value: cdktf.listMapperHcl(dataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonImagesParamsToHclTerraform, true)(struct!.params),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonImagesParamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonImagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonImages | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cleartext !== undefined) {
      hasAnyValues = true;
      internalValueResult.cleartext = this._cleartext;
    }
    if (this._drvtype !== undefined) {
      hasAnyValues = true;
      internalValueResult.drvtype = this._drvtype;
    }
    if (this._ignorepurge !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignorepurge = this._ignorepurge;
    }
    if (this._imageformat !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageformat = this._imageformat;
    }
    if (this._imageid !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageid = this._imageid;
    }
    if (this._imagename !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagename = this._imagename;
    }
    if (this._maxsize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxsize = this._maxsize;
    }
    if (this._mountpath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountpath = this._mountpath;
    }
    if (this._preserve !== undefined) {
      hasAnyValues = true;
      internalValueResult.preserve = this._preserve;
    }
    if (this._readonly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readonly = this._readonly;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._volumelabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumelabel = this._volumelabel;
    }
    if (this._params?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.params = this._params?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonImages | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cleartext = undefined;
      this._drvtype = undefined;
      this._ignorepurge = undefined;
      this._imageformat = undefined;
      this._imageid = undefined;
      this._imagename = undefined;
      this._maxsize = undefined;
      this._mountpath = undefined;
      this._preserve = undefined;
      this._readonly = undefined;
      this._target = undefined;
      this._volumelabel = undefined;
      this._params.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cleartext = value.cleartext;
      this._drvtype = value.drvtype;
      this._ignorepurge = value.ignorepurge;
      this._imageformat = value.imageformat;
      this._imageid = value.imageid;
      this._imagename = value.imagename;
      this._maxsize = value.maxsize;
      this._mountpath = value.mountpath;
      this._preserve = value.preserve;
      this._readonly = value.readonly;
      this._target = value.target;
      this._volumelabel = value.volumelabel;
      this._params.internalValue = value.params;
    }
  }

  // cleartext - computed: false, optional: true, required: false
  private _cleartext?: boolean | cdktf.IResolvable; 
  public get cleartext() {
    return this.getBooleanAttribute('cleartext');
  }
  public set cleartext(value: boolean | cdktf.IResolvable) {
    this._cleartext = value;
  }
  public resetCleartext() {
    this._cleartext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cleartextInput() {
    return this._cleartext;
  }

  // drvtype - computed: false, optional: true, required: false
  private _drvtype?: string; 
  public get drvtype() {
    return this.getStringAttribute('drvtype');
  }
  public set drvtype(value: string) {
    this._drvtype = value;
  }
  public resetDrvtype() {
    this._drvtype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drvtypeInput() {
    return this._drvtype;
  }

  // ignorepurge - computed: false, optional: true, required: false
  private _ignorepurge?: boolean | cdktf.IResolvable; 
  public get ignorepurge() {
    return this.getBooleanAttribute('ignorepurge');
  }
  public set ignorepurge(value: boolean | cdktf.IResolvable) {
    this._ignorepurge = value;
  }
  public resetIgnorepurge() {
    this._ignorepurge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignorepurgeInput() {
    return this._ignorepurge;
  }

  // imageformat - computed: false, optional: true, required: false
  private _imageformat?: string; 
  public get imageformat() {
    return this.getStringAttribute('imageformat');
  }
  public set imageformat(value: string) {
    this._imageformat = value;
  }
  public resetImageformat() {
    this._imageformat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageformatInput() {
    return this._imageformat;
  }

  // imageid - computed: true, optional: true, required: false
  private _imageid?: string; 
  public get imageid() {
    return this.getStringAttribute('imageid');
  }
  public set imageid(value: string) {
    this._imageid = value;
  }
  public resetImageid() {
    this._imageid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageidInput() {
    return this._imageid;
  }

  // imagename - computed: false, optional: true, required: false
  private _imagename?: string; 
  public get imagename() {
    return this.getStringAttribute('imagename');
  }
  public set imagename(value: string) {
    this._imagename = value;
  }
  public resetImagename() {
    this._imagename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagenameInput() {
    return this._imagename;
  }

  // maxsize - computed: false, optional: true, required: false
  private _maxsize?: string; 
  public get maxsize() {
    return this.getStringAttribute('maxsize');
  }
  public set maxsize(value: string) {
    this._maxsize = value;
  }
  public resetMaxsize() {
    this._maxsize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxsizeInput() {
    return this._maxsize;
  }

  // mountpath - computed: false, optional: true, required: false
  private _mountpath?: string; 
  public get mountpath() {
    return this.getStringAttribute('mountpath');
  }
  public set mountpath(value: string) {
    this._mountpath = value;
  }
  public resetMountpath() {
    this._mountpath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountpathInput() {
    return this._mountpath;
  }

  // preserve - computed: false, optional: true, required: false
  private _preserve?: boolean | cdktf.IResolvable; 
  public get preserve() {
    return this.getBooleanAttribute('preserve');
  }
  public set preserve(value: boolean | cdktf.IResolvable) {
    this._preserve = value;
  }
  public resetPreserve() {
    this._preserve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveInput() {
    return this._preserve;
  }

  // readonly - computed: false, optional: true, required: false
  private _readonly?: boolean | cdktf.IResolvable; 
  public get readonly() {
    return this.getBooleanAttribute('readonly');
  }
  public set readonly(value: boolean | cdktf.IResolvable) {
    this._readonly = value;
  }
  public resetReadonly() {
    this._readonly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readonlyInput() {
    return this._readonly;
  }

  // target - computed: false, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // volumelabel - computed: false, optional: true, required: false
  private _volumelabel?: string; 
  public get volumelabel() {
    return this.getStringAttribute('volumelabel');
  }
  public set volumelabel(value: string) {
    this._volumelabel = value;
  }
  public resetVolumelabel() {
    this._volumelabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumelabelInput() {
    return this._volumelabel;
  }

  // params - computed: false, optional: true, required: false
  private _params = new DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonImagesParamsList(this, "params", false);
  public get params() {
    return this._params;
  }
  public putParams(value: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonImagesParams[] | cdktf.IResolvable) {
    this._params.internalValue = value;
  }
  public resetParams() {
    this._params.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramsInput() {
    return this._params.internalValue;
  }
}

export class DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonImagesList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonImages[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonImagesOutputReference {
    return new DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonImagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesAclsActionsLimitValue {
  /**
  * UI map: AppDetailsPage:EnvironmentsPane, AppDetailsPage:EnvironmentsPane
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#limitburst DataZedcloudProject#limitburst}
  */
  readonly limitburst?: number;
  /**
  * UI map: AppDetailsPage:EnvironmentsPane, AppDetailsPage:EnvironmentsPane
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#limitrate DataZedcloudProject#limitrate}
  */
  readonly limitrate?: number;
  /**
  * UI map: AppDetailsPage:EnvironmentsPane, AppDetailsPage:EnvironmentsPane
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#limitunit DataZedcloudProject#limitunit}
  */
  readonly limitunit?: string;
}

export function dataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesAclsActionsLimitValueToTerraform(struct?: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesAclsActionsLimitValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limitburst: cdktf.numberToTerraform(struct!.limitburst),
    limitrate: cdktf.numberToTerraform(struct!.limitrate),
    limitunit: cdktf.stringToTerraform(struct!.limitunit),
  }
}


export function dataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesAclsActionsLimitValueToHclTerraform(struct?: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesAclsActionsLimitValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limitburst: {
      value: cdktf.numberToHclTerraform(struct!.limitburst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    limitrate: {
      value: cdktf.numberToHclTerraform(struct!.limitrate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    limitunit: {
      value: cdktf.stringToHclTerraform(struct!.limitunit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesAclsActionsLimitValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesAclsActionsLimitValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limitburst !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitburst = this._limitburst;
    }
    if (this._limitrate !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitrate = this._limitrate;
    }
    if (this._limitunit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitunit = this._limitunit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesAclsActionsLimitValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limitburst = undefined;
      this._limitrate = undefined;
      this._limitunit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limitburst = value.limitburst;
      this._limitrate = value.limitrate;
      this._limitunit = value.limitunit;
    }
  }

  // limitburst - computed: false, optional: true, required: false
  private _limitburst?: number; 
  public get limitburst() {
    return this.getNumberAttribute('limitburst');
  }
  public set limitburst(value: number) {
    this._limitburst = value;
  }
  public resetLimitburst() {
    this._limitburst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitburstInput() {
    return this._limitburst;
  }

  // limitrate - computed: false, optional: true, required: false
  private _limitrate?: number; 
  public get limitrate() {
    return this.getNumberAttribute('limitrate');
  }
  public set limitrate(value: number) {
    this._limitrate = value;
  }
  public resetLimitrate() {
    this._limitrate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitrateInput() {
    return this._limitrate;
  }

  // limitunit - computed: false, optional: true, required: false
  private _limitunit?: string; 
  public get limitunit() {
    return this.getStringAttribute('limitunit');
  }
  public set limitunit(value: string) {
    this._limitunit = value;
  }
  public resetLimitunit() {
    this._limitunit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitunitInput() {
    return this._limitunit;
  }
}

export class DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesAclsActionsLimitValueList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesAclsActionsLimitValue[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesAclsActionsLimitValueOutputReference {
    return new DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesAclsActionsLimitValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesAclsActionsPortmapto {
  /**
  * Application Port value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#app_port DataZedcloudProject#app_port}
  */
  readonly appPort?: number;
}

export function dataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesAclsActionsPortmaptoToTerraform(struct?: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesAclsActionsPortmapto | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_port: cdktf.numberToTerraform(struct!.appPort),
  }
}


export function dataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesAclsActionsPortmaptoToHclTerraform(struct?: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesAclsActionsPortmapto | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_port: {
      value: cdktf.numberToHclTerraform(struct!.appPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesAclsActionsPortmaptoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesAclsActionsPortmapto | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.appPort = this._appPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesAclsActionsPortmapto | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appPort = value.appPort;
    }
  }

  // app_port - computed: false, optional: true, required: false
  private _appPort?: number; 
  public get appPort() {
    return this.getNumberAttribute('app_port');
  }
  public set appPort(value: number) {
    this._appPort = value;
  }
  public resetAppPort() {
    this._appPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appPortInput() {
    return this._appPort;
  }
}

export class DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesAclsActionsPortmaptoList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesAclsActionsPortmapto[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesAclsActionsPortmaptoOutputReference {
    return new DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesAclsActionsPortmaptoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesAclsActions {
  /**
  * Drop the packet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#drop DataZedcloudProject#drop}
  */
  readonly drop?: boolean | cdktf.IResolvable;
  /**
  * UI map: AppDetailsPage:EnvironmentsPane, AppDetailsPage:EnvironmentsPane
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#limit DataZedcloudProject#limit}
  */
  readonly limit?: boolean | cdktf.IResolvable;
  /**
  * UI map: AppDetailsPage:EnvironmentsPane, AppDetailsPage:EnvironmentsPane
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#limitburst DataZedcloudProject#limitburst}
  */
  readonly limitburst?: number;
  /**
  * UI map: AppDetailsPage:EnvironmentsPane, AppDetailsPage:EnvironmentsPane
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#limitrate DataZedcloudProject#limitrate}
  */
  readonly limitrate?: number;
  /**
  * UI map: AppDetailsPage:EnvironmentsPane, AppDetailsPage:EnvironmentsPane
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#limitunit DataZedcloudProject#limitunit}
  */
  readonly limitunit?: string;
  /**
  * UI map: AppDetailsPage:EnvironmentsPane, AppDetailsPage:EnvironmentsPane
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#portmap DataZedcloudProject#portmap}
  */
  readonly portmap?: boolean | cdktf.IResolvable;
  /**
  * limit_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#limit_value DataZedcloudProject#limit_value}
  */
  readonly limitValue?: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesAclsActionsLimitValue[] | cdktf.IResolvable;
  /**
  * portmapto block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#portmapto DataZedcloudProject#portmapto}
  */
  readonly portmapto?: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesAclsActionsPortmapto[] | cdktf.IResolvable;
}

export function dataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesAclsActionsToTerraform(struct?: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesAclsActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    drop: cdktf.booleanToTerraform(struct!.drop),
    limit: cdktf.booleanToTerraform(struct!.limit),
    limitburst: cdktf.numberToTerraform(struct!.limitburst),
    limitrate: cdktf.numberToTerraform(struct!.limitrate),
    limitunit: cdktf.stringToTerraform(struct!.limitunit),
    portmap: cdktf.booleanToTerraform(struct!.portmap),
    limit_value: cdktf.listMapper(dataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesAclsActionsLimitValueToTerraform, true)(struct!.limitValue),
    portmapto: cdktf.listMapper(dataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesAclsActionsPortmaptoToTerraform, true)(struct!.portmapto),
  }
}


export function dataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesAclsActionsToHclTerraform(struct?: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesAclsActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    drop: {
      value: cdktf.booleanToHclTerraform(struct!.drop),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    limit: {
      value: cdktf.booleanToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    limitburst: {
      value: cdktf.numberToHclTerraform(struct!.limitburst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    limitrate: {
      value: cdktf.numberToHclTerraform(struct!.limitrate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    limitunit: {
      value: cdktf.stringToHclTerraform(struct!.limitunit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    portmap: {
      value: cdktf.booleanToHclTerraform(struct!.portmap),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    limit_value: {
      value: cdktf.listMapperHcl(dataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesAclsActionsLimitValueToHclTerraform, true)(struct!.limitValue),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesAclsActionsLimitValueList",
    },
    portmapto: {
      value: cdktf.listMapperHcl(dataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesAclsActionsPortmaptoToHclTerraform, true)(struct!.portmapto),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesAclsActionsPortmaptoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesAclsActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesAclsActions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._drop !== undefined) {
      hasAnyValues = true;
      internalValueResult.drop = this._drop;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._limitburst !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitburst = this._limitburst;
    }
    if (this._limitrate !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitrate = this._limitrate;
    }
    if (this._limitunit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitunit = this._limitunit;
    }
    if (this._portmap !== undefined) {
      hasAnyValues = true;
      internalValueResult.portmap = this._portmap;
    }
    if (this._limitValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitValue = this._limitValue?.internalValue;
    }
    if (this._portmapto?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portmapto = this._portmapto?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesAclsActions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._drop = undefined;
      this._limit = undefined;
      this._limitburst = undefined;
      this._limitrate = undefined;
      this._limitunit = undefined;
      this._portmap = undefined;
      this._limitValue.internalValue = undefined;
      this._portmapto.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._drop = value.drop;
      this._limit = value.limit;
      this._limitburst = value.limitburst;
      this._limitrate = value.limitrate;
      this._limitunit = value.limitunit;
      this._portmap = value.portmap;
      this._limitValue.internalValue = value.limitValue;
      this._portmapto.internalValue = value.portmapto;
    }
  }

  // drop - computed: false, optional: true, required: false
  private _drop?: boolean | cdktf.IResolvable; 
  public get drop() {
    return this.getBooleanAttribute('drop');
  }
  public set drop(value: boolean | cdktf.IResolvable) {
    this._drop = value;
  }
  public resetDrop() {
    this._drop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropInput() {
    return this._drop;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: boolean | cdktf.IResolvable; 
  public get limit() {
    return this.getBooleanAttribute('limit');
  }
  public set limit(value: boolean | cdktf.IResolvable) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // limitburst - computed: false, optional: true, required: false
  private _limitburst?: number; 
  public get limitburst() {
    return this.getNumberAttribute('limitburst');
  }
  public set limitburst(value: number) {
    this._limitburst = value;
  }
  public resetLimitburst() {
    this._limitburst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitburstInput() {
    return this._limitburst;
  }

  // limitrate - computed: false, optional: true, required: false
  private _limitrate?: number; 
  public get limitrate() {
    return this.getNumberAttribute('limitrate');
  }
  public set limitrate(value: number) {
    this._limitrate = value;
  }
  public resetLimitrate() {
    this._limitrate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitrateInput() {
    return this._limitrate;
  }

  // limitunit - computed: false, optional: true, required: false
  private _limitunit?: string; 
  public get limitunit() {
    return this.getStringAttribute('limitunit');
  }
  public set limitunit(value: string) {
    this._limitunit = value;
  }
  public resetLimitunit() {
    this._limitunit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitunitInput() {
    return this._limitunit;
  }

  // portmap - computed: false, optional: true, required: false
  private _portmap?: boolean | cdktf.IResolvable; 
  public get portmap() {
    return this.getBooleanAttribute('portmap');
  }
  public set portmap(value: boolean | cdktf.IResolvable) {
    this._portmap = value;
  }
  public resetPortmap() {
    this._portmap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portmapInput() {
    return this._portmap;
  }

  // limit_value - computed: false, optional: true, required: false
  private _limitValue = new DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesAclsActionsLimitValueList(this, "limit_value", false);
  public get limitValue() {
    return this._limitValue;
  }
  public putLimitValue(value: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesAclsActionsLimitValue[] | cdktf.IResolvable) {
    this._limitValue.internalValue = value;
  }
  public resetLimitValue() {
    this._limitValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitValueInput() {
    return this._limitValue.internalValue;
  }

  // portmapto - computed: false, optional: true, required: false
  private _portmapto = new DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesAclsActionsPortmaptoList(this, "portmapto", false);
  public get portmapto() {
    return this._portmapto;
  }
  public putPortmapto(value: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesAclsActionsPortmapto[] | cdktf.IResolvable) {
    this._portmapto.internalValue = value;
  }
  public resetPortmapto() {
    this._portmapto.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portmaptoInput() {
    return this._portmapto.internalValue;
  }
}

export class DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesAclsActionsList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesAclsActions[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesAclsActionsOutputReference {
    return new DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesAclsActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesAclsMatches {
  /**
  * Type of Match (Required)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#type DataZedcloudProject#type}
  */
  readonly type?: string;
  /**
  * Value of match (Required)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#value DataZedcloudProject#value}
  */
  readonly value?: string;
}

export function dataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesAclsMatchesToTerraform(struct?: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesAclsMatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesAclsMatchesToHclTerraform(struct?: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesAclsMatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesAclsMatchesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesAclsMatches | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesAclsMatches | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesAclsMatchesList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesAclsMatches[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesAclsMatchesOutputReference {
    return new DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesAclsMatchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesAcls {
  /**
  * Name of the Access Control List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#name DataZedcloudProject#name}
  */
  readonly name?: string;
  /**
  * actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#actions DataZedcloudProject#actions}
  */
  readonly actions?: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesAclsActions[] | cdktf.IResolvable;
  /**
  * matches block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#matches DataZedcloudProject#matches}
  */
  readonly matches?: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesAclsMatches[] | cdktf.IResolvable;
}

export function dataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesAclsToTerraform(struct?: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesAcls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    actions: cdktf.listMapper(dataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesAclsActionsToTerraform, true)(struct!.actions),
    matches: cdktf.listMapper(dataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesAclsMatchesToTerraform, true)(struct!.matches),
  }
}


export function dataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesAclsToHclTerraform(struct?: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesAcls | cdktf.IResolvable): any {
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
    actions: {
      value: cdktf.listMapperHcl(dataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesAclsActionsToHclTerraform, true)(struct!.actions),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesAclsActionsList",
    },
    matches: {
      value: cdktf.listMapperHcl(dataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesAclsMatchesToHclTerraform, true)(struct!.matches),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesAclsMatchesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesAclsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesAcls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._actions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions?.internalValue;
    }
    if (this._matches?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matches = this._matches?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesAcls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._actions.internalValue = undefined;
      this._matches.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._actions.internalValue = value.actions;
      this._matches.internalValue = value.matches;
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

  // actions - computed: false, optional: true, required: false
  private _actions = new DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesAclsActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }
  public putActions(value: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesAclsActions[] | cdktf.IResolvable) {
    this._actions.internalValue = value;
  }
  public resetActions() {
    this._actions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }

  // matches - computed: false, optional: true, required: false
  private _matches = new DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesAclsMatchesList(this, "matches", false);
  public get matches() {
    return this._matches;
  }
  public putMatches(value: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesAclsMatches[] | cdktf.IResolvable) {
    this._matches.internalValue = value;
  }
  public resetMatches() {
    this._matches.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchesInput() {
    return this._matches.internalValue;
  }
}

export class DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesAclsList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesAcls[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesAclsOutputReference {
    return new DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesAclsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfaces {
  /**
  * If true, a physical adapter is assigned to the edge application directly. If false, a network instance is assigned to the edge application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#directattach DataZedcloudProject#directattach}
  */
  readonly directattach?: boolean | cdktf.IResolvable;
  /**
  * Interface name used by the edge application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#name DataZedcloudProject#name}
  */
  readonly name?: string;
  /**
  * Indicates if the interface is optional for edge application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#optional DataZedcloudProject#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * If true, DHCP network can't be assigned and user needs to provide a static IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#privateip DataZedcloudProject#privateip}
  */
  readonly privateip?: boolean | cdktf.IResolvable;
  /**
  * Physical Adapter type for this interface. Applicable only when "direct attach" flag is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#type DataZedcloudProject#type}
  */
  readonly type?: string;
  /**
  * acls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#acls DataZedcloudProject#acls}
  */
  readonly acls?: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesAcls[] | cdktf.IResolvable;
}

export function dataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesToTerraform(struct?: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    directattach: cdktf.booleanToTerraform(struct!.directattach),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
    privateip: cdktf.booleanToTerraform(struct!.privateip),
    type: cdktf.stringToTerraform(struct!.type),
    acls: cdktf.listMapper(dataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesAclsToTerraform, true)(struct!.acls),
  }
}


export function dataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesToHclTerraform(struct?: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    directattach: {
      value: cdktf.booleanToHclTerraform(struct!.directattach),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    privateip: {
      value: cdktf.booleanToHclTerraform(struct!.privateip),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    acls: {
      value: cdktf.listMapperHcl(dataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesAclsToHclTerraform, true)(struct!.acls),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesAclsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._directattach !== undefined) {
      hasAnyValues = true;
      internalValueResult.directattach = this._directattach;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._privateip !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateip = this._privateip;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._acls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.acls = this._acls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._directattach = undefined;
      this._name = undefined;
      this._optional = undefined;
      this._privateip = undefined;
      this._type = undefined;
      this._acls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._directattach = value.directattach;
      this._name = value.name;
      this._optional = value.optional;
      this._privateip = value.privateip;
      this._type = value.type;
      this._acls.internalValue = value.acls;
    }
  }

  // directattach - computed: false, optional: true, required: false
  private _directattach?: boolean | cdktf.IResolvable; 
  public get directattach() {
    return this.getBooleanAttribute('directattach');
  }
  public set directattach(value: boolean | cdktf.IResolvable) {
    this._directattach = value;
  }
  public resetDirectattach() {
    this._directattach = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directattachInput() {
    return this._directattach;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }

  // privateip - computed: false, optional: true, required: false
  private _privateip?: boolean | cdktf.IResolvable; 
  public get privateip() {
    return this.getBooleanAttribute('privateip');
  }
  public set privateip(value: boolean | cdktf.IResolvable) {
    this._privateip = value;
  }
  public resetPrivateip() {
    this._privateip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateipInput() {
    return this._privateip;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // acls - computed: false, optional: true, required: false
  private _acls = new DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesAclsList(this, "acls", false);
  public get acls() {
    return this._acls;
  }
  public putAcls(value: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesAcls[] | cdktf.IResolvable) {
    this._acls.internalValue = value;
  }
  public resetAcls() {
    this._acls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclsInput() {
    return this._acls.internalValue;
  }
}

export class DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfaces[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesOutputReference {
    return new DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonModule {
  /**
  * Extra information to module to make configuration easier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#environment DataZedcloudProject#environment}
  */
  readonly environment?: { [key: string]: string };
  /**
  * Type of modules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#module_type DataZedcloudProject#module_type}
  */
  readonly moduleType?: string;
  /**
  * Send messages between modules or send messages from modules to iot hub
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#routes DataZedcloudProject#routes}
  */
  readonly routes?: { [key: string]: string };
  /**
  * Base64 encoded module twin details, desired properties of the module will be updated to reflect these values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#twin_detail DataZedcloudProject#twin_detail}
  */
  readonly twinDetail?: string;
}

export function dataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonModuleToTerraform(struct?: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonModule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    environment: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.environment),
    module_type: cdktf.stringToTerraform(struct!.moduleType),
    routes: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.routes),
    twin_detail: cdktf.stringToTerraform(struct!.twinDetail),
  }
}


export function dataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonModuleToHclTerraform(struct?: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonModule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    environment: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.environment),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    module_type: {
      value: cdktf.stringToHclTerraform(struct!.moduleType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routes: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.routes),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    twin_detail: {
      value: cdktf.stringToHclTerraform(struct!.twinDetail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonModuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonModule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._environment !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment;
    }
    if (this._moduleType !== undefined) {
      hasAnyValues = true;
      internalValueResult.moduleType = this._moduleType;
    }
    if (this._routes !== undefined) {
      hasAnyValues = true;
      internalValueResult.routes = this._routes;
    }
    if (this._twinDetail !== undefined) {
      hasAnyValues = true;
      internalValueResult.twinDetail = this._twinDetail;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonModule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._environment = undefined;
      this._moduleType = undefined;
      this._routes = undefined;
      this._twinDetail = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._environment = value.environment;
      this._moduleType = value.moduleType;
      this._routes = value.routes;
      this._twinDetail = value.twinDetail;
    }
  }

  // environment - computed: false, optional: true, required: false
  private _environment?: { [key: string]: string }; 
  public get environment() {
    return this.getStringMapAttribute('environment');
  }
  public set environment(value: { [key: string]: string }) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // module_type - computed: false, optional: true, required: false
  private _moduleType?: string; 
  public get moduleType() {
    return this.getStringAttribute('module_type');
  }
  public set moduleType(value: string) {
    this._moduleType = value;
  }
  public resetModuleType() {
    this._moduleType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moduleTypeInput() {
    return this._moduleType;
  }

  // routes - computed: false, optional: true, required: false
  private _routes?: { [key: string]: string }; 
  public get routes() {
    return this.getStringMapAttribute('routes');
  }
  public set routes(value: { [key: string]: string }) {
    this._routes = value;
  }
  public resetRoutes() {
    this._routes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routesInput() {
    return this._routes;
  }

  // twin_detail - computed: false, optional: true, required: false
  private _twinDetail?: string; 
  public get twinDetail() {
    return this.getStringAttribute('twin_detail');
  }
  public set twinDetail(value: string) {
    this._twinDetail = value;
  }
  public resetTwinDetail() {
    this._twinDetail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twinDetailInput() {
    return this._twinDetail;
  }
}

export class DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonModuleList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonModule[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonModuleOutputReference {
    return new DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonModuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonOwner {
  /**
  * UI map: AppEditPage:IdentityPane:Category_Field, AppDetailsPage:IdentityPane:Category_Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#company DataZedcloudProject#company}
  */
  readonly company?: string;
  /**
  * UI map: AppEditPage:DeveloperPane:Email_Field, AppDetailsPage:DeveloperPane:Email_Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#email DataZedcloudProject#email}
  */
  readonly email?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#group DataZedcloudProject#group}
  */
  readonly group?: string;
  /**
  * UI map: AppEditPage:DeveloperPane:Name_Field, AppDetailsPage:DeveloperPane:Name_Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#user DataZedcloudProject#user}
  */
  readonly user?: string;
  /**
  * UI map: AppEditPage:DeveloperPane:Website_Field, AppDetailsPage:DeveloperPane:Website_Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#website DataZedcloudProject#website}
  */
  readonly website?: string;
}

export function dataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonOwnerToTerraform(struct?: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonOwner | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    company: cdktf.stringToTerraform(struct!.company),
    email: cdktf.stringToTerraform(struct!.email),
    group: cdktf.stringToTerraform(struct!.group),
    user: cdktf.stringToTerraform(struct!.user),
    website: cdktf.stringToTerraform(struct!.website),
  }
}


export function dataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonOwnerToHclTerraform(struct?: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonOwner | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    company: {
      value: cdktf.stringToHclTerraform(struct!.company),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    website: {
      value: cdktf.stringToHclTerraform(struct!.website),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonOwnerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonOwner | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._company !== undefined) {
      hasAnyValues = true;
      internalValueResult.company = this._company;
    }
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    if (this._website !== undefined) {
      hasAnyValues = true;
      internalValueResult.website = this._website;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonOwner | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._company = undefined;
      this._email = undefined;
      this._group = undefined;
      this._user = undefined;
      this._website = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._company = value.company;
      this._email = value.email;
      this._group = value.group;
      this._user = value.user;
      this._website = value.website;
    }
  }

  // company - computed: false, optional: true, required: false
  private _company?: string; 
  public get company() {
    return this.getStringAttribute('company');
  }
  public set company(value: string) {
    this._company = value;
  }
  public resetCompany() {
    this._company = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get companyInput() {
    return this._company;
  }

  // email - computed: false, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // website - computed: false, optional: true, required: false
  private _website?: string; 
  public get website() {
    return this.getStringAttribute('website');
  }
  public set website(value: string) {
    this._website = value;
  }
  public resetWebsite() {
    this._website = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get websiteInput() {
    return this._website;
  }
}

export class DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonOwnerList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonOwner[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonOwnerOutputReference {
    return new DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonOwnerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonPermissions {
}

export function dataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonPermissionsToTerraform(struct?: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonPermissions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonPermissionsToHclTerraform(struct?: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonPermissions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonPermissions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonPermissions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}

export class DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonPermissionsList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonPermissions[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonPermissionsOutputReference {
    return new DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonResources {
  /**
  * Name of the Resource (Required)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#name DataZedcloudProject#name}
  */
  readonly name?: string;
  /**
  * Value of Resource (Required)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#value DataZedcloudProject#value}
  */
  readonly value?: string;
}

export function dataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonResourcesToTerraform(struct?: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonResourcesToHclTerraform(struct?: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonResources | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonResourcesList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonResources[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonResourcesOutputReference {
    return new DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectAppPolicyAppPolicyAppsManifestJson {
  /**
  * UI map: N/A - not exposed to users
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#ac_kind DataZedcloudProject#ac_kind}
  */
  readonly acKind: string;
  /**
  * UI map: N/A - not exposed to users
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#ac_version DataZedcloudProject#ac_version}
  */
  readonly acVersion: string;
  /**
  * App (bundle) type. The correct values are: "APP_TYPE_UNSPECIFIED","APP_TYPE_VM","APP_TYPE_VM_RUNTIME","APP_TYPE_CONTAINER","APP_TYPE_MODULE", "APP_TYPE_DOCKER_COMPOSE".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#app_type DataZedcloudProject#app_type}
  */
  readonly appType?: string;
  /**
  * Enable CpuPinning
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#cpu_pinning_enabled DataZedcloudProject#cpu_pinning_enabled}
  */
  readonly cpuPinningEnabled?: boolean | cdktf.IResolvable;
  /**
  * Deployment type for the app. The correct values are: "DEPLOYMENT_TYPE_UNSPECIFIED","DEPLOYMENT_TYPE_STAND_ALONE","DEPLOYMENT_TYPE_AZURE","DEPLOYMENT_TYPE_K3S","DEPLOYMENT_TYPE_AWS","DEPLOYMENT_TYPE_K3S_AZURE","DEPLOYMENT_TYPE_K3S_AWS","DEPLOYMENT_TYPE_VMWARE_VCE".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#deployment_type DataZedcloudProject#deployment_type}
  */
  readonly deploymentType?: string;
  /**
  * UI map: AppDetailsPage:IdentityPane:DescriptionField, AppMarketplacePage:AppCard:DescriptionField
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#description DataZedcloudProject#description}
  */
  readonly description?: string;
  /**
  * UI map: AppEditPage:IdentityPane:Title_Field, AppDetailsPage:IdentityPane:Title_Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#display_name DataZedcloudProject#display_name}
  */
  readonly displayName?: string;
  /**
  * Docker compose tar image name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#docker_compose_tar_image_name DataZedcloudProject#docker_compose_tar_image_name}
  */
  readonly dockerComposeTarImageName?: string;
  /**
  * Docker compose base64 encoded plain text
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#docker_compose_yaml_text DataZedcloudProject#docker_compose_yaml_text}
  */
  readonly dockerComposeYamlText?: string;
  /**
  * UI map: AppEditPage:IdentityPane:ENABLEVMCONFIG_Field, AppDetailsPage:IdentityPane:ENABLEVMCONFIG_Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#enable_oem_win_license_key DataZedcloudProject#enable_oem_win_license_key}
  */
  readonly enableOemWinLicenseKey?: boolean | cdktf.IResolvable;
  /**
  * UI map: AppEditPage:IdentityPane:VNC_Field, AppDetailsPage:IdentityPane:VNC_Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#enablevnc DataZedcloudProject#enablevnc}
  */
  readonly enablevnc?: boolean | cdktf.IResolvable;
  /**
  * UI map: AppEditPage:IdentityPane:Name_Field, AppDetailsPage:IdentityPane:Name_Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#name DataZedcloudProject#name}
  */
  readonly name: string;
  /**
  * Size of persistent blank storage for runtime in bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#persistent_runtime_size_bytes DataZedcloudProject#persistent_runtime_size_bytes}
  */
  readonly persistentRuntimeSizeBytes?: string;
  /**
  * Indicates the internal communication protocol to pass configuration between Zedcloud and docker-compose runtime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#runtime_protocol_version DataZedcloudProject#runtime_protocol_version}
  */
  readonly runtimeProtocolVersion?: string;
  /**
  * Indicates the version of container orchestration software
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#runtime_version DataZedcloudProject#runtime_version}
  */
  readonly runtimeVersion?: string;
  /**
  * UI map: AppEditPage:IdentityPane:VM_Mode_Field, AppDetailsPage:IdentityPane:VM_Mode_Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#vmmode DataZedcloudProject#vmmode}
  */
  readonly vmmode?: string;
  /**
  * configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#configuration DataZedcloudProject#configuration}
  */
  readonly configuration?: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfiguration[] | cdktf.IResolvable;
  /**
  * container_detail block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#container_detail DataZedcloudProject#container_detail}
  */
  readonly containerDetail?: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonContainerDetail[] | cdktf.IResolvable;
  /**
  * desc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#desc DataZedcloudProject#desc}
  */
  readonly desc?: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonDesc[] | cdktf.IResolvable;
  /**
  * images block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#images DataZedcloudProject#images}
  */
  readonly images?: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonImages[] | cdktf.IResolvable;
  /**
  * interfaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#interfaces DataZedcloudProject#interfaces}
  */
  readonly interfaces?: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfaces[] | cdktf.IResolvable;
  /**
  * module block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#module DataZedcloudProject#module}
  */
  readonly module?: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonModule[] | cdktf.IResolvable;
  /**
  * owner block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#owner DataZedcloudProject#owner}
  */
  readonly owner?: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonOwner[] | cdktf.IResolvable;
  /**
  * permissions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#permissions DataZedcloudProject#permissions}
  */
  readonly permissions?: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonPermissions[] | cdktf.IResolvable;
  /**
  * resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#resources DataZedcloudProject#resources}
  */
  readonly resources?: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonResources[] | cdktf.IResolvable;
}

export function dataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonToTerraform(struct?: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJson | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ac_kind: cdktf.stringToTerraform(struct!.acKind),
    ac_version: cdktf.stringToTerraform(struct!.acVersion),
    app_type: cdktf.stringToTerraform(struct!.appType),
    cpu_pinning_enabled: cdktf.booleanToTerraform(struct!.cpuPinningEnabled),
    deployment_type: cdktf.stringToTerraform(struct!.deploymentType),
    description: cdktf.stringToTerraform(struct!.description),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    docker_compose_tar_image_name: cdktf.stringToTerraform(struct!.dockerComposeTarImageName),
    docker_compose_yaml_text: cdktf.stringToTerraform(struct!.dockerComposeYamlText),
    enable_oem_win_license_key: cdktf.booleanToTerraform(struct!.enableOemWinLicenseKey),
    enablevnc: cdktf.booleanToTerraform(struct!.enablevnc),
    name: cdktf.stringToTerraform(struct!.name),
    persistent_runtime_size_bytes: cdktf.stringToTerraform(struct!.persistentRuntimeSizeBytes),
    runtime_protocol_version: cdktf.stringToTerraform(struct!.runtimeProtocolVersion),
    runtime_version: cdktf.stringToTerraform(struct!.runtimeVersion),
    vmmode: cdktf.stringToTerraform(struct!.vmmode),
    configuration: cdktf.listMapper(dataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationToTerraform, true)(struct!.configuration),
    container_detail: cdktf.listMapper(dataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonContainerDetailToTerraform, true)(struct!.containerDetail),
    desc: cdktf.listMapper(dataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonDescToTerraform, true)(struct!.desc),
    images: cdktf.listMapper(dataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonImagesToTerraform, true)(struct!.images),
    interfaces: cdktf.listMapper(dataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesToTerraform, true)(struct!.interfaces),
    module: cdktf.listMapper(dataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonModuleToTerraform, true)(struct!.module),
    owner: cdktf.listMapper(dataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonOwnerToTerraform, true)(struct!.owner),
    permissions: cdktf.listMapper(dataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonPermissionsToTerraform, true)(struct!.permissions),
    resources: cdktf.listMapper(dataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonResourcesToTerraform, true)(struct!.resources),
  }
}


export function dataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonToHclTerraform(struct?: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJson | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ac_kind: {
      value: cdktf.stringToHclTerraform(struct!.acKind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ac_version: {
      value: cdktf.stringToHclTerraform(struct!.acVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_type: {
      value: cdktf.stringToHclTerraform(struct!.appType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cpu_pinning_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.cpuPinningEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    deployment_type: {
      value: cdktf.stringToHclTerraform(struct!.deploymentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    docker_compose_tar_image_name: {
      value: cdktf.stringToHclTerraform(struct!.dockerComposeTarImageName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    docker_compose_yaml_text: {
      value: cdktf.stringToHclTerraform(struct!.dockerComposeYamlText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_oem_win_license_key: {
      value: cdktf.booleanToHclTerraform(struct!.enableOemWinLicenseKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enablevnc: {
      value: cdktf.booleanToHclTerraform(struct!.enablevnc),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    persistent_runtime_size_bytes: {
      value: cdktf.stringToHclTerraform(struct!.persistentRuntimeSizeBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    runtime_protocol_version: {
      value: cdktf.stringToHclTerraform(struct!.runtimeProtocolVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    runtime_version: {
      value: cdktf.stringToHclTerraform(struct!.runtimeVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vmmode: {
      value: cdktf.stringToHclTerraform(struct!.vmmode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    configuration: {
      value: cdktf.listMapperHcl(dataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationToHclTerraform, true)(struct!.configuration),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationList",
    },
    container_detail: {
      value: cdktf.listMapperHcl(dataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonContainerDetailToHclTerraform, true)(struct!.containerDetail),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonContainerDetailList",
    },
    desc: {
      value: cdktf.listMapperHcl(dataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonDescToHclTerraform, true)(struct!.desc),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonDescList",
    },
    images: {
      value: cdktf.listMapperHcl(dataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonImagesToHclTerraform, true)(struct!.images),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonImagesList",
    },
    interfaces: {
      value: cdktf.listMapperHcl(dataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesToHclTerraform, true)(struct!.interfaces),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesList",
    },
    module: {
      value: cdktf.listMapperHcl(dataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonModuleToHclTerraform, true)(struct!.module),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonModuleList",
    },
    owner: {
      value: cdktf.listMapperHcl(dataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonOwnerToHclTerraform, true)(struct!.owner),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonOwnerList",
    },
    permissions: {
      value: cdktf.listMapperHcl(dataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonPermissionsToHclTerraform, true)(struct!.permissions),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonPermissionsList",
    },
    resources: {
      value: cdktf.listMapperHcl(dataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonResourcesToHclTerraform, true)(struct!.resources),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonResourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectAppPolicyAppPolicyAppsManifestJson | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acKind !== undefined) {
      hasAnyValues = true;
      internalValueResult.acKind = this._acKind;
    }
    if (this._acVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.acVersion = this._acVersion;
    }
    if (this._appType !== undefined) {
      hasAnyValues = true;
      internalValueResult.appType = this._appType;
    }
    if (this._cpuPinningEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuPinningEnabled = this._cpuPinningEnabled;
    }
    if (this._deploymentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentType = this._deploymentType;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._dockerComposeTarImageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerComposeTarImageName = this._dockerComposeTarImageName;
    }
    if (this._dockerComposeYamlText !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerComposeYamlText = this._dockerComposeYamlText;
    }
    if (this._enableOemWinLicenseKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableOemWinLicenseKey = this._enableOemWinLicenseKey;
    }
    if (this._enablevnc !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablevnc = this._enablevnc;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._persistentRuntimeSizeBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistentRuntimeSizeBytes = this._persistentRuntimeSizeBytes;
    }
    if (this._runtimeProtocolVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeProtocolVersion = this._runtimeProtocolVersion;
    }
    if (this._runtimeVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeVersion = this._runtimeVersion;
    }
    if (this._vmmode !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmmode = this._vmmode;
    }
    if (this._configuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration?.internalValue;
    }
    if (this._containerDetail?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerDetail = this._containerDetail?.internalValue;
    }
    if (this._desc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.desc = this._desc?.internalValue;
    }
    if (this._images?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.images = this._images?.internalValue;
    }
    if (this._interfaces?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaces = this._interfaces?.internalValue;
    }
    if (this._module?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.module = this._module?.internalValue;
    }
    if (this._owner?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.owner = this._owner?.internalValue;
    }
    if (this._permissions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissions = this._permissions?.internalValue;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJson | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acKind = undefined;
      this._acVersion = undefined;
      this._appType = undefined;
      this._cpuPinningEnabled = undefined;
      this._deploymentType = undefined;
      this._description = undefined;
      this._displayName = undefined;
      this._dockerComposeTarImageName = undefined;
      this._dockerComposeYamlText = undefined;
      this._enableOemWinLicenseKey = undefined;
      this._enablevnc = undefined;
      this._name = undefined;
      this._persistentRuntimeSizeBytes = undefined;
      this._runtimeProtocolVersion = undefined;
      this._runtimeVersion = undefined;
      this._vmmode = undefined;
      this._configuration.internalValue = undefined;
      this._containerDetail.internalValue = undefined;
      this._desc.internalValue = undefined;
      this._images.internalValue = undefined;
      this._interfaces.internalValue = undefined;
      this._module.internalValue = undefined;
      this._owner.internalValue = undefined;
      this._permissions.internalValue = undefined;
      this._resources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acKind = value.acKind;
      this._acVersion = value.acVersion;
      this._appType = value.appType;
      this._cpuPinningEnabled = value.cpuPinningEnabled;
      this._deploymentType = value.deploymentType;
      this._description = value.description;
      this._displayName = value.displayName;
      this._dockerComposeTarImageName = value.dockerComposeTarImageName;
      this._dockerComposeYamlText = value.dockerComposeYamlText;
      this._enableOemWinLicenseKey = value.enableOemWinLicenseKey;
      this._enablevnc = value.enablevnc;
      this._name = value.name;
      this._persistentRuntimeSizeBytes = value.persistentRuntimeSizeBytes;
      this._runtimeProtocolVersion = value.runtimeProtocolVersion;
      this._runtimeVersion = value.runtimeVersion;
      this._vmmode = value.vmmode;
      this._configuration.internalValue = value.configuration;
      this._containerDetail.internalValue = value.containerDetail;
      this._desc.internalValue = value.desc;
      this._images.internalValue = value.images;
      this._interfaces.internalValue = value.interfaces;
      this._module.internalValue = value.module;
      this._owner.internalValue = value.owner;
      this._permissions.internalValue = value.permissions;
      this._resources.internalValue = value.resources;
    }
  }

  // ac_kind - computed: false, optional: false, required: true
  private _acKind?: string; 
  public get acKind() {
    return this.getStringAttribute('ac_kind');
  }
  public set acKind(value: string) {
    this._acKind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get acKindInput() {
    return this._acKind;
  }

  // ac_version - computed: false, optional: false, required: true
  private _acVersion?: string; 
  public get acVersion() {
    return this.getStringAttribute('ac_version');
  }
  public set acVersion(value: string) {
    this._acVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get acVersionInput() {
    return this._acVersion;
  }

  // app_type - computed: false, optional: true, required: false
  private _appType?: string; 
  public get appType() {
    return this.getStringAttribute('app_type');
  }
  public set appType(value: string) {
    this._appType = value;
  }
  public resetAppType() {
    this._appType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appTypeInput() {
    return this._appType;
  }

  // cpu_pinning_enabled - computed: false, optional: true, required: false
  private _cpuPinningEnabled?: boolean | cdktf.IResolvable; 
  public get cpuPinningEnabled() {
    return this.getBooleanAttribute('cpu_pinning_enabled');
  }
  public set cpuPinningEnabled(value: boolean | cdktf.IResolvable) {
    this._cpuPinningEnabled = value;
  }
  public resetCpuPinningEnabled() {
    this._cpuPinningEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuPinningEnabledInput() {
    return this._cpuPinningEnabled;
  }

  // deployment_type - computed: false, optional: true, required: false
  private _deploymentType?: string; 
  public get deploymentType() {
    return this.getStringAttribute('deployment_type');
  }
  public set deploymentType(value: string) {
    this._deploymentType = value;
  }
  public resetDeploymentType() {
    this._deploymentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentTypeInput() {
    return this._deploymentType;
  }

  // description - computed: false, optional: true, required: false
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

  // docker_compose_tar_image_name - computed: false, optional: true, required: false
  private _dockerComposeTarImageName?: string; 
  public get dockerComposeTarImageName() {
    return this.getStringAttribute('docker_compose_tar_image_name');
  }
  public set dockerComposeTarImageName(value: string) {
    this._dockerComposeTarImageName = value;
  }
  public resetDockerComposeTarImageName() {
    this._dockerComposeTarImageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerComposeTarImageNameInput() {
    return this._dockerComposeTarImageName;
  }

  // docker_compose_yaml_text - computed: false, optional: true, required: false
  private _dockerComposeYamlText?: string; 
  public get dockerComposeYamlText() {
    return this.getStringAttribute('docker_compose_yaml_text');
  }
  public set dockerComposeYamlText(value: string) {
    this._dockerComposeYamlText = value;
  }
  public resetDockerComposeYamlText() {
    this._dockerComposeYamlText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerComposeYamlTextInput() {
    return this._dockerComposeYamlText;
  }

  // enable_oem_win_license_key - computed: false, optional: true, required: false
  private _enableOemWinLicenseKey?: boolean | cdktf.IResolvable; 
  public get enableOemWinLicenseKey() {
    return this.getBooleanAttribute('enable_oem_win_license_key');
  }
  public set enableOemWinLicenseKey(value: boolean | cdktf.IResolvable) {
    this._enableOemWinLicenseKey = value;
  }
  public resetEnableOemWinLicenseKey() {
    this._enableOemWinLicenseKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableOemWinLicenseKeyInput() {
    return this._enableOemWinLicenseKey;
  }

  // enablevnc - computed: false, optional: true, required: false
  private _enablevnc?: boolean | cdktf.IResolvable; 
  public get enablevnc() {
    return this.getBooleanAttribute('enablevnc');
  }
  public set enablevnc(value: boolean | cdktf.IResolvable) {
    this._enablevnc = value;
  }
  public resetEnablevnc() {
    this._enablevnc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablevncInput() {
    return this._enablevnc;
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

  // persistent_runtime_size_bytes - computed: false, optional: true, required: false
  private _persistentRuntimeSizeBytes?: string; 
  public get persistentRuntimeSizeBytes() {
    return this.getStringAttribute('persistent_runtime_size_bytes');
  }
  public set persistentRuntimeSizeBytes(value: string) {
    this._persistentRuntimeSizeBytes = value;
  }
  public resetPersistentRuntimeSizeBytes() {
    this._persistentRuntimeSizeBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentRuntimeSizeBytesInput() {
    return this._persistentRuntimeSizeBytes;
  }

  // runtime_protocol_version - computed: false, optional: true, required: false
  private _runtimeProtocolVersion?: string; 
  public get runtimeProtocolVersion() {
    return this.getStringAttribute('runtime_protocol_version');
  }
  public set runtimeProtocolVersion(value: string) {
    this._runtimeProtocolVersion = value;
  }
  public resetRuntimeProtocolVersion() {
    this._runtimeProtocolVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeProtocolVersionInput() {
    return this._runtimeProtocolVersion;
  }

  // runtime_version - computed: false, optional: true, required: false
  private _runtimeVersion?: string; 
  public get runtimeVersion() {
    return this.getStringAttribute('runtime_version');
  }
  public set runtimeVersion(value: string) {
    this._runtimeVersion = value;
  }
  public resetRuntimeVersion() {
    this._runtimeVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeVersionInput() {
    return this._runtimeVersion;
  }

  // vmmode - computed: false, optional: true, required: false
  private _vmmode?: string; 
  public get vmmode() {
    return this.getStringAttribute('vmmode');
  }
  public set vmmode(value: string) {
    this._vmmode = value;
  }
  public resetVmmode() {
    this._vmmode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmmodeInput() {
    return this._vmmode;
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration = new DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfigurationList(this, "configuration", false);
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonConfiguration[] | cdktf.IResolvable) {
    this._configuration.internalValue = value;
  }
  public resetConfiguration() {
    this._configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // container_detail - computed: false, optional: true, required: false
  private _containerDetail = new DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonContainerDetailList(this, "container_detail", false);
  public get containerDetail() {
    return this._containerDetail;
  }
  public putContainerDetail(value: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonContainerDetail[] | cdktf.IResolvable) {
    this._containerDetail.internalValue = value;
  }
  public resetContainerDetail() {
    this._containerDetail.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerDetailInput() {
    return this._containerDetail.internalValue;
  }

  // desc - computed: false, optional: true, required: false
  private _desc = new DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonDescList(this, "desc", false);
  public get desc() {
    return this._desc;
  }
  public putDesc(value: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonDesc[] | cdktf.IResolvable) {
    this._desc.internalValue = value;
  }
  public resetDesc() {
    this._desc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descInput() {
    return this._desc.internalValue;
  }

  // images - computed: false, optional: true, required: false
  private _images = new DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonImagesList(this, "images", false);
  public get images() {
    return this._images;
  }
  public putImages(value: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonImages[] | cdktf.IResolvable) {
    this._images.internalValue = value;
  }
  public resetImages() {
    this._images.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagesInput() {
    return this._images.internalValue;
  }

  // interfaces - computed: false, optional: true, required: false
  private _interfaces = new DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }
  public putInterfaces(value: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonInterfaces[] | cdktf.IResolvable) {
    this._interfaces.internalValue = value;
  }
  public resetInterfaces() {
    this._interfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces.internalValue;
  }

  // module - computed: false, optional: true, required: false
  private _module = new DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonModuleList(this, "module", false);
  public get module() {
    return this._module;
  }
  public putModule(value: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonModule[] | cdktf.IResolvable) {
    this._module.internalValue = value;
  }
  public resetModule() {
    this._module.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moduleInput() {
    return this._module.internalValue;
  }

  // owner - computed: false, optional: true, required: false
  private _owner = new DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonOwnerList(this, "owner", false);
  public get owner() {
    return this._owner;
  }
  public putOwner(value: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonOwner[] | cdktf.IResolvable) {
    this._owner.internalValue = value;
  }
  public resetOwner() {
    this._owner.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner.internalValue;
  }

  // permissions - computed: false, optional: true, required: false
  private _permissions = new DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }
  public putPermissions(value: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonPermissions[] | cdktf.IResolvable) {
    this._permissions.internalValue = value;
  }
  public resetPermissions() {
    this._permissions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonResources[] | cdktf.IResolvable) {
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

export class DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudProjectAppPolicyAppPolicyAppsManifestJson[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonOutputReference {
    return new DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectAppPolicyAppPolicyAppsParentDetail {
  /**
  * Relation with child and parent object exists or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#reference_exists DataZedcloudProject#reference_exists}
  */
  readonly referenceExists?: boolean | cdktf.IResolvable;
  /**
  * Update required flag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#update_available DataZedcloudProject#update_available}
  */
  readonly updateAvailable?: boolean | cdktf.IResolvable;
}

export function dataZedcloudProjectAppPolicyAppPolicyAppsParentDetailToTerraform(struct?: DataZedcloudProjectAppPolicyAppPolicyAppsParentDetail | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reference_exists: cdktf.booleanToTerraform(struct!.referenceExists),
    update_available: cdktf.booleanToTerraform(struct!.updateAvailable),
  }
}


export function dataZedcloudProjectAppPolicyAppPolicyAppsParentDetailToHclTerraform(struct?: DataZedcloudProjectAppPolicyAppPolicyAppsParentDetail | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    reference_exists: {
      value: cdktf.booleanToHclTerraform(struct!.referenceExists),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    update_available: {
      value: cdktf.booleanToHclTerraform(struct!.updateAvailable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudProjectAppPolicyAppPolicyAppsParentDetailOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectAppPolicyAppPolicyAppsParentDetail | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._referenceExists !== undefined) {
      hasAnyValues = true;
      internalValueResult.referenceExists = this._referenceExists;
    }
    if (this._updateAvailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateAvailable = this._updateAvailable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectAppPolicyAppPolicyAppsParentDetail | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._referenceExists = undefined;
      this._updateAvailable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._referenceExists = value.referenceExists;
      this._updateAvailable = value.updateAvailable;
    }
  }

  // id_of_parent_object - computed: true, optional: false, required: false
  public get idOfParentObject() {
    return this.getStringAttribute('id_of_parent_object');
  }

  // reference_exists - computed: false, optional: true, required: false
  private _referenceExists?: boolean | cdktf.IResolvable; 
  public get referenceExists() {
    return this.getBooleanAttribute('reference_exists');
  }
  public set referenceExists(value: boolean | cdktf.IResolvable) {
    this._referenceExists = value;
  }
  public resetReferenceExists() {
    this._referenceExists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceExistsInput() {
    return this._referenceExists;
  }

  // update_available - computed: false, optional: true, required: false
  private _updateAvailable?: boolean | cdktf.IResolvable; 
  public get updateAvailable() {
    return this.getBooleanAttribute('update_available');
  }
  public set updateAvailable(value: boolean | cdktf.IResolvable) {
    this._updateAvailable = value;
  }
  public resetUpdateAvailable() {
    this._updateAvailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateAvailableInput() {
    return this._updateAvailable;
  }

  // version_of_parent_object - computed: true, optional: false, required: false
  public get versionOfParentObject() {
    return this.getNumberAttribute('version_of_parent_object');
  }
}

export class DataZedcloudProjectAppPolicyAppPolicyAppsParentDetailList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudProjectAppPolicyAppPolicyAppsParentDetail[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectAppPolicyAppPolicyAppsParentDetailOutputReference {
    return new DataZedcloudProjectAppPolicyAppPolicyAppsParentDetailOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectAppPolicyAppPolicyApps {
  /**
  * User defined name of the edge app, unique across the enterprise. Once app name is created, name can’t be changed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#app_id DataZedcloudProject#app_id}
  */
  readonly appId?: string;
  /**
  * Current version of the attached bundle
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#app_version DataZedcloudProject#app_version}
  */
  readonly appVersion?: string;
  /**
  * user defined cpus for bundle
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#cpus DataZedcloudProject#cpus}
  */
  readonly cpus: number;
  /**
  * Detailed description of the edge application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#description DataZedcloudProject#description}
  */
  readonly description?: string;
  /**
  * user defined memory for bundle
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#memory DataZedcloudProject#memory}
  */
  readonly memory: number;
  /**
  * User defined name of the edge application, unique across the enterprise. Once object is created, name can’t be changed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#name DataZedcloudProject#name}
  */
  readonly name: string;
  /**
  * User provided name part  for the auto deployed app
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#name_app_part DataZedcloudProject#name_app_part}
  */
  readonly nameAppPart?: string;
  /**
  * User provided name part  for the auto deployed app
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#name_project_part DataZedcloudProject#name_project_part}
  */
  readonly nameProjectPart?: string;
  /**
  * app naming scheme
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#naming_scheme DataZedcloudProject#naming_scheme}
  */
  readonly namingScheme?: string;
  /**
  * user defined network options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#networks DataZedcloudProject#networks}
  */
  readonly networks: number;
  /**
  * origin of object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#origin_type DataZedcloudProject#origin_type}
  */
  readonly originType: string;
  /**
  * start delay is the time in seconds EVE should wait after boot before starting the application instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#start_delay_in_seconds DataZedcloudProject#start_delay_in_seconds}
  */
  readonly startDelayInSeconds?: number;
  /**
  * user defined storage for bundle
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#storage DataZedcloudProject#storage}
  */
  readonly storage?: number;
  /**
  * Tags are name/value pairs that enable you to categorize resources. Tag names are case insensitive with max_length 512 and min_length 3. Tag values are case sensitive with max_length 256 and min_length 3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#tags DataZedcloudProject#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * User defined title of the edge application. Title can be changed at any time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#title DataZedcloudProject#title}
  */
  readonly title: string;
  /**
  * interfaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#interfaces DataZedcloudProject#interfaces}
  */
  readonly interfaces?: DataZedcloudProjectAppPolicyAppPolicyAppsInterfaces[] | cdktf.IResolvable;
  /**
  * manifest_json block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#manifest_json DataZedcloudProject#manifest_json}
  */
  readonly manifestJson?: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJson[] | cdktf.IResolvable;
  /**
  * parent_detail block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#parent_detail DataZedcloudProject#parent_detail}
  */
  readonly parentDetail?: DataZedcloudProjectAppPolicyAppPolicyAppsParentDetail[] | cdktf.IResolvable;
}

export function dataZedcloudProjectAppPolicyAppPolicyAppsToTerraform(struct?: DataZedcloudProjectAppPolicyAppPolicyApps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_id: cdktf.stringToTerraform(struct!.appId),
    app_version: cdktf.stringToTerraform(struct!.appVersion),
    cpus: cdktf.numberToTerraform(struct!.cpus),
    description: cdktf.stringToTerraform(struct!.description),
    memory: cdktf.numberToTerraform(struct!.memory),
    name: cdktf.stringToTerraform(struct!.name),
    name_app_part: cdktf.stringToTerraform(struct!.nameAppPart),
    name_project_part: cdktf.stringToTerraform(struct!.nameProjectPart),
    naming_scheme: cdktf.stringToTerraform(struct!.namingScheme),
    networks: cdktf.numberToTerraform(struct!.networks),
    origin_type: cdktf.stringToTerraform(struct!.originType),
    start_delay_in_seconds: cdktf.numberToTerraform(struct!.startDelayInSeconds),
    storage: cdktf.numberToTerraform(struct!.storage),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    title: cdktf.stringToTerraform(struct!.title),
    interfaces: cdktf.listMapper(dataZedcloudProjectAppPolicyAppPolicyAppsInterfacesToTerraform, true)(struct!.interfaces),
    manifest_json: cdktf.listMapper(dataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonToTerraform, true)(struct!.manifestJson),
    parent_detail: cdktf.listMapper(dataZedcloudProjectAppPolicyAppPolicyAppsParentDetailToTerraform, true)(struct!.parentDetail),
  }
}


export function dataZedcloudProjectAppPolicyAppPolicyAppsToHclTerraform(struct?: DataZedcloudProjectAppPolicyAppPolicyApps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_id: {
      value: cdktf.stringToHclTerraform(struct!.appId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_version: {
      value: cdktf.stringToHclTerraform(struct!.appVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cpus: {
      value: cdktf.numberToHclTerraform(struct!.cpus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory: {
      value: cdktf.numberToHclTerraform(struct!.memory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_app_part: {
      value: cdktf.stringToHclTerraform(struct!.nameAppPart),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_project_part: {
      value: cdktf.stringToHclTerraform(struct!.nameProjectPart),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    naming_scheme: {
      value: cdktf.stringToHclTerraform(struct!.namingScheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    networks: {
      value: cdktf.numberToHclTerraform(struct!.networks),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    origin_type: {
      value: cdktf.stringToHclTerraform(struct!.originType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_delay_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.startDelayInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    storage: {
      value: cdktf.numberToHclTerraform(struct!.storage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interfaces: {
      value: cdktf.listMapperHcl(dataZedcloudProjectAppPolicyAppPolicyAppsInterfacesToHclTerraform, true)(struct!.interfaces),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesList",
    },
    manifest_json: {
      value: cdktf.listMapperHcl(dataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonToHclTerraform, true)(struct!.manifestJson),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonList",
    },
    parent_detail: {
      value: cdktf.listMapperHcl(dataZedcloudProjectAppPolicyAppPolicyAppsParentDetailToHclTerraform, true)(struct!.parentDetail),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudProjectAppPolicyAppPolicyAppsParentDetailList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudProjectAppPolicyAppPolicyAppsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectAppPolicyAppPolicyApps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appId !== undefined) {
      hasAnyValues = true;
      internalValueResult.appId = this._appId;
    }
    if (this._appVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.appVersion = this._appVersion;
    }
    if (this._cpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpus = this._cpus;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nameAppPart !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameAppPart = this._nameAppPart;
    }
    if (this._nameProjectPart !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameProjectPart = this._nameProjectPart;
    }
    if (this._namingScheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.namingScheme = this._namingScheme;
    }
    if (this._networks !== undefined) {
      hasAnyValues = true;
      internalValueResult.networks = this._networks;
    }
    if (this._originType !== undefined) {
      hasAnyValues = true;
      internalValueResult.originType = this._originType;
    }
    if (this._startDelayInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.startDelayInSeconds = this._startDelayInSeconds;
    }
    if (this._storage !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._interfaces?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaces = this._interfaces?.internalValue;
    }
    if (this._manifestJson?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.manifestJson = this._manifestJson?.internalValue;
    }
    if (this._parentDetail?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parentDetail = this._parentDetail?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectAppPolicyAppPolicyApps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appId = undefined;
      this._appVersion = undefined;
      this._cpus = undefined;
      this._description = undefined;
      this._memory = undefined;
      this._name = undefined;
      this._nameAppPart = undefined;
      this._nameProjectPart = undefined;
      this._namingScheme = undefined;
      this._networks = undefined;
      this._originType = undefined;
      this._startDelayInSeconds = undefined;
      this._storage = undefined;
      this._tags = undefined;
      this._title = undefined;
      this._interfaces.internalValue = undefined;
      this._manifestJson.internalValue = undefined;
      this._parentDetail.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appId = value.appId;
      this._appVersion = value.appVersion;
      this._cpus = value.cpus;
      this._description = value.description;
      this._memory = value.memory;
      this._name = value.name;
      this._nameAppPart = value.nameAppPart;
      this._nameProjectPart = value.nameProjectPart;
      this._namingScheme = value.namingScheme;
      this._networks = value.networks;
      this._originType = value.originType;
      this._startDelayInSeconds = value.startDelayInSeconds;
      this._storage = value.storage;
      this._tags = value.tags;
      this._title = value.title;
      this._interfaces.internalValue = value.interfaces;
      this._manifestJson.internalValue = value.manifestJson;
      this._parentDetail.internalValue = value.parentDetail;
    }
  }

  // app_id - computed: false, optional: true, required: false
  private _appId?: string; 
  public get appId() {
    return this.getStringAttribute('app_id');
  }
  public set appId(value: string) {
    this._appId = value;
  }
  public resetAppId() {
    this._appId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdInput() {
    return this._appId;
  }

  // app_version - computed: false, optional: true, required: false
  private _appVersion?: string; 
  public get appVersion() {
    return this.getStringAttribute('app_version');
  }
  public set appVersion(value: string) {
    this._appVersion = value;
  }
  public resetAppVersion() {
    this._appVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appVersionInput() {
    return this._appVersion;
  }

  // cpus - computed: false, optional: false, required: true
  private _cpus?: number; 
  public get cpus() {
    return this.getNumberAttribute('cpus');
  }
  public set cpus(value: number) {
    this._cpus = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cpusInput() {
    return this._cpus;
  }

  // description - computed: false, optional: true, required: false
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

  // drives - computed: true, optional: false, required: false
  public get drives() {
    return this.getNumberAttribute('drives');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // memory - computed: false, optional: false, required: true
  private _memory?: number; 
  public get memory() {
    return this.getNumberAttribute('memory');
  }
  public set memory(value: number) {
    this._memory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
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

  // name_app_part - computed: false, optional: true, required: false
  private _nameAppPart?: string; 
  public get nameAppPart() {
    return this.getStringAttribute('name_app_part');
  }
  public set nameAppPart(value: string) {
    this._nameAppPart = value;
  }
  public resetNameAppPart() {
    this._nameAppPart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameAppPartInput() {
    return this._nameAppPart;
  }

  // name_project_part - computed: false, optional: true, required: false
  private _nameProjectPart?: string; 
  public get nameProjectPart() {
    return this.getStringAttribute('name_project_part');
  }
  public set nameProjectPart(value: string) {
    this._nameProjectPart = value;
  }
  public resetNameProjectPart() {
    this._nameProjectPart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameProjectPartInput() {
    return this._nameProjectPart;
  }

  // naming_scheme - computed: false, optional: true, required: false
  private _namingScheme?: string; 
  public get namingScheme() {
    return this.getStringAttribute('naming_scheme');
  }
  public set namingScheme(value: string) {
    this._namingScheme = value;
  }
  public resetNamingScheme() {
    this._namingScheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namingSchemeInput() {
    return this._namingScheme;
  }

  // networks - computed: false, optional: false, required: true
  private _networks?: number; 
  public get networks() {
    return this.getNumberAttribute('networks');
  }
  public set networks(value: number) {
    this._networks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networksInput() {
    return this._networks;
  }

  // origin_type - computed: false, optional: false, required: true
  private _originType?: string; 
  public get originType() {
    return this.getStringAttribute('origin_type');
  }
  public set originType(value: string) {
    this._originType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originTypeInput() {
    return this._originType;
  }

  // start_delay_in_seconds - computed: false, optional: true, required: false
  private _startDelayInSeconds?: number; 
  public get startDelayInSeconds() {
    return this.getNumberAttribute('start_delay_in_seconds');
  }
  public set startDelayInSeconds(value: number) {
    this._startDelayInSeconds = value;
  }
  public resetStartDelayInSeconds() {
    this._startDelayInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startDelayInSecondsInput() {
    return this._startDelayInSeconds;
  }

  // storage - computed: false, optional: true, required: false
  private _storage?: number; 
  public get storage() {
    return this.getNumberAttribute('storage');
  }
  public set storage(value: number) {
    this._storage = value;
  }
  public resetStorage() {
    this._storage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // interfaces - computed: false, optional: true, required: false
  private _interfaces = new DataZedcloudProjectAppPolicyAppPolicyAppsInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }
  public putInterfaces(value: DataZedcloudProjectAppPolicyAppPolicyAppsInterfaces[] | cdktf.IResolvable) {
    this._interfaces.internalValue = value;
  }
  public resetInterfaces() {
    this._interfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces.internalValue;
  }

  // manifest_json - computed: false, optional: true, required: false
  private _manifestJson = new DataZedcloudProjectAppPolicyAppPolicyAppsManifestJsonList(this, "manifest_json", false);
  public get manifestJson() {
    return this._manifestJson;
  }
  public putManifestJson(value: DataZedcloudProjectAppPolicyAppPolicyAppsManifestJson[] | cdktf.IResolvable) {
    this._manifestJson.internalValue = value;
  }
  public resetManifestJson() {
    this._manifestJson.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manifestJsonInput() {
    return this._manifestJson.internalValue;
  }

  // parent_detail - computed: false, optional: true, required: false
  private _parentDetail = new DataZedcloudProjectAppPolicyAppPolicyAppsParentDetailList(this, "parent_detail", false);
  public get parentDetail() {
    return this._parentDetail;
  }
  public putParentDetail(value: DataZedcloudProjectAppPolicyAppPolicyAppsParentDetail[] | cdktf.IResolvable) {
    this._parentDetail.internalValue = value;
  }
  public resetParentDetail() {
    this._parentDetail.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentDetailInput() {
    return this._parentDetail.internalValue;
  }
}

export class DataZedcloudProjectAppPolicyAppPolicyAppsList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudProjectAppPolicyAppPolicyApps[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectAppPolicyAppPolicyAppsOutputReference {
    return new DataZedcloudProjectAppPolicyAppPolicyAppsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectAppPolicyAppPolicy {
  /**
  * apps block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#apps DataZedcloudProject#apps}
  */
  readonly apps: DataZedcloudProjectAppPolicyAppPolicyApps[] | cdktf.IResolvable;
}

export function dataZedcloudProjectAppPolicyAppPolicyToTerraform(struct?: DataZedcloudProjectAppPolicyAppPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apps: cdktf.listMapper(dataZedcloudProjectAppPolicyAppPolicyAppsToTerraform, true)(struct!.apps),
  }
}


export function dataZedcloudProjectAppPolicyAppPolicyToHclTerraform(struct?: DataZedcloudProjectAppPolicyAppPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    apps: {
      value: cdktf.listMapperHcl(dataZedcloudProjectAppPolicyAppPolicyAppsToHclTerraform, true)(struct!.apps),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudProjectAppPolicyAppPolicyAppsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudProjectAppPolicyAppPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectAppPolicyAppPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apps = this._apps?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectAppPolicyAppPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apps.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apps.internalValue = value.apps;
    }
  }

  // apps - computed: false, optional: false, required: true
  private _apps = new DataZedcloudProjectAppPolicyAppPolicyAppsList(this, "apps", false);
  public get apps() {
    return this._apps;
  }
  public putApps(value: DataZedcloudProjectAppPolicyAppPolicyApps[] | cdktf.IResolvable) {
    this._apps.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appsInput() {
    return this._apps.internalValue;
  }
}

export class DataZedcloudProjectAppPolicyAppPolicyList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudProjectAppPolicyAppPolicy[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectAppPolicyAppPolicyOutputReference {
    return new DataZedcloudProjectAppPolicyAppPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectAppPolicyAttestationPolicy {
  /**
  * Attestation policy type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#type DataZedcloudProject#type}
  */
  readonly type: string;
}

export function dataZedcloudProjectAppPolicyAttestationPolicyToTerraform(struct?: DataZedcloudProjectAppPolicyAttestationPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataZedcloudProjectAppPolicyAttestationPolicyToHclTerraform(struct?: DataZedcloudProjectAppPolicyAttestationPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudProjectAppPolicyAttestationPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectAppPolicyAttestationPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectAppPolicyAttestationPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class DataZedcloudProjectAppPolicyAttestationPolicyList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudProjectAppPolicyAttestationPolicy[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectAppPolicyAttestationPolicyOutputReference {
    return new DataZedcloudProjectAppPolicyAttestationPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollmentGroupCertificateEnrollment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#group_name DataZedcloudProject#group_name}
  */
  readonly groupName?: string;
}

export function dataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollmentGroupCertificateEnrollmentToTerraform(struct?: DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollmentGroupCertificateEnrollment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_name: cdktf.stringToTerraform(struct!.groupName),
  }
}


export function dataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollmentGroupCertificateEnrollmentToHclTerraform(struct?: DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollmentGroupCertificateEnrollment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_name: {
      value: cdktf.stringToHclTerraform(struct!.groupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollmentGroupCertificateEnrollmentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollmentGroupCertificateEnrollment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupName = this._groupName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollmentGroupCertificateEnrollment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupName = value.groupName;
    }
  }

  // group_name - computed: false, optional: true, required: false
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  public resetGroupName() {
    this._groupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
  }
}

export class DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollmentGroupCertificateEnrollmentList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollmentGroupCertificateEnrollment[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollmentGroupCertificateEnrollmentOutputReference {
    return new DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollmentGroupCertificateEnrollmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#individual_certificate_enrollment DataZedcloudProject#individual_certificate_enrollment}
  */
  readonly individualCertificateEnrollment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#type DataZedcloudProject#type}
  */
  readonly type?: string;
  /**
  * group_certificate_enrollment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#group_certificate_enrollment DataZedcloudProject#group_certificate_enrollment}
  */
  readonly groupCertificateEnrollment?: DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollmentGroupCertificateEnrollment[] | cdktf.IResolvable;
}

export function dataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollmentToTerraform(struct?: DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    individual_certificate_enrollment: cdktf.stringToTerraform(struct!.individualCertificateEnrollment),
    type: cdktf.stringToTerraform(struct!.type),
    group_certificate_enrollment: cdktf.listMapper(dataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollmentGroupCertificateEnrollmentToTerraform, true)(struct!.groupCertificateEnrollment),
  }
}


export function dataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollmentToHclTerraform(struct?: DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    individual_certificate_enrollment: {
      value: cdktf.stringToHclTerraform(struct!.individualCertificateEnrollment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_certificate_enrollment: {
      value: cdktf.listMapperHcl(dataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollmentGroupCertificateEnrollmentToHclTerraform, true)(struct!.groupCertificateEnrollment),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollmentGroupCertificateEnrollmentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollmentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._individualCertificateEnrollment !== undefined) {
      hasAnyValues = true;
      internalValueResult.individualCertificateEnrollment = this._individualCertificateEnrollment;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._groupCertificateEnrollment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupCertificateEnrollment = this._groupCertificateEnrollment?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._individualCertificateEnrollment = undefined;
      this._type = undefined;
      this._groupCertificateEnrollment.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._individualCertificateEnrollment = value.individualCertificateEnrollment;
      this._type = value.type;
      this._groupCertificateEnrollment.internalValue = value.groupCertificateEnrollment;
    }
  }

  // individual_certificate_enrollment - computed: false, optional: true, required: false
  private _individualCertificateEnrollment?: string; 
  public get individualCertificateEnrollment() {
    return this.getStringAttribute('individual_certificate_enrollment');
  }
  public set individualCertificateEnrollment(value: string) {
    this._individualCertificateEnrollment = value;
  }
  public resetIndividualCertificateEnrollment() {
    this._individualCertificateEnrollment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get individualCertificateEnrollmentInput() {
    return this._individualCertificateEnrollment;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // group_certificate_enrollment - computed: false, optional: true, required: false
  private _groupCertificateEnrollment = new DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollmentGroupCertificateEnrollmentList(this, "group_certificate_enrollment", false);
  public get groupCertificateEnrollment() {
    return this._groupCertificateEnrollment;
  }
  public putGroupCertificateEnrollment(value: DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollmentGroupCertificateEnrollment[] | cdktf.IResolvable) {
    this._groupCertificateEnrollment.internalValue = value;
  }
  public resetGroupCertificateEnrollment() {
    this._groupCertificateEnrollment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupCertificateEnrollmentInput() {
    return this._groupCertificateEnrollment.internalValue;
  }
}

export class DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollmentList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollment[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollmentOutputReference {
    return new DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentGroupSymmetricKeyEnrollment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#group_name DataZedcloudProject#group_name}
  */
  readonly groupName?: string;
}

export function dataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentGroupSymmetricKeyEnrollmentToTerraform(struct?: DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentGroupSymmetricKeyEnrollment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_name: cdktf.stringToTerraform(struct!.groupName),
  }
}


export function dataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentGroupSymmetricKeyEnrollmentToHclTerraform(struct?: DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentGroupSymmetricKeyEnrollment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_name: {
      value: cdktf.stringToHclTerraform(struct!.groupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentGroupSymmetricKeyEnrollmentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentGroupSymmetricKeyEnrollment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupName = this._groupName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentGroupSymmetricKeyEnrollment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupName = value.groupName;
    }
  }

  // group_name - computed: false, optional: true, required: false
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  public resetGroupName() {
    this._groupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
  }
}

export class DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentGroupSymmetricKeyEnrollmentList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentGroupSymmetricKeyEnrollment[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentGroupSymmetricKeyEnrollmentOutputReference {
    return new DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentGroupSymmetricKeyEnrollmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentIndividualSymmetricKeyEnrollment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#registration_id DataZedcloudProject#registration_id}
  */
  readonly registrationId?: string;
}

export function dataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentIndividualSymmetricKeyEnrollmentToTerraform(struct?: DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentIndividualSymmetricKeyEnrollment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    registration_id: cdktf.stringToTerraform(struct!.registrationId),
  }
}


export function dataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentIndividualSymmetricKeyEnrollmentToHclTerraform(struct?: DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentIndividualSymmetricKeyEnrollment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    registration_id: {
      value: cdktf.stringToHclTerraform(struct!.registrationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentIndividualSymmetricKeyEnrollmentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentIndividualSymmetricKeyEnrollment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._registrationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.registrationId = this._registrationId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentIndividualSymmetricKeyEnrollment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._registrationId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._registrationId = value.registrationId;
    }
  }

  // registration_id - computed: false, optional: true, required: false
  private _registrationId?: string; 
  public get registrationId() {
    return this.getStringAttribute('registration_id');
  }
  public set registrationId(value: string) {
    this._registrationId = value;
  }
  public resetRegistrationId() {
    this._registrationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registrationIdInput() {
    return this._registrationId;
  }
}

export class DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentIndividualSymmetricKeyEnrollmentList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentIndividualSymmetricKeyEnrollment[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentIndividualSymmetricKeyEnrollmentOutputReference {
    return new DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentIndividualSymmetricKeyEnrollmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#type DataZedcloudProject#type}
  */
  readonly type?: string;
  /**
  * group_symmetric_key_enrollment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#group_symmetric_key_enrollment DataZedcloudProject#group_symmetric_key_enrollment}
  */
  readonly groupSymmetricKeyEnrollment?: DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentGroupSymmetricKeyEnrollment[] | cdktf.IResolvable;
  /**
  * individual_symmetric_key_enrollment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#individual_symmetric_key_enrollment DataZedcloudProject#individual_symmetric_key_enrollment}
  */
  readonly individualSymmetricKeyEnrollment?: DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentIndividualSymmetricKeyEnrollment[] | cdktf.IResolvable;
}

export function dataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentToTerraform(struct?: DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    group_symmetric_key_enrollment: cdktf.listMapper(dataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentGroupSymmetricKeyEnrollmentToTerraform, true)(struct!.groupSymmetricKeyEnrollment),
    individual_symmetric_key_enrollment: cdktf.listMapper(dataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentIndividualSymmetricKeyEnrollmentToTerraform, true)(struct!.individualSymmetricKeyEnrollment),
  }
}


export function dataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentToHclTerraform(struct?: DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_symmetric_key_enrollment: {
      value: cdktf.listMapperHcl(dataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentGroupSymmetricKeyEnrollmentToHclTerraform, true)(struct!.groupSymmetricKeyEnrollment),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentGroupSymmetricKeyEnrollmentList",
    },
    individual_symmetric_key_enrollment: {
      value: cdktf.listMapperHcl(dataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentIndividualSymmetricKeyEnrollmentToHclTerraform, true)(struct!.individualSymmetricKeyEnrollment),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentIndividualSymmetricKeyEnrollmentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._groupSymmetricKeyEnrollment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupSymmetricKeyEnrollment = this._groupSymmetricKeyEnrollment?.internalValue;
    }
    if (this._individualSymmetricKeyEnrollment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.individualSymmetricKeyEnrollment = this._individualSymmetricKeyEnrollment?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._groupSymmetricKeyEnrollment.internalValue = undefined;
      this._individualSymmetricKeyEnrollment.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._groupSymmetricKeyEnrollment.internalValue = value.groupSymmetricKeyEnrollment;
      this._individualSymmetricKeyEnrollment.internalValue = value.individualSymmetricKeyEnrollment;
    }
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // group_symmetric_key_enrollment - computed: false, optional: true, required: false
  private _groupSymmetricKeyEnrollment = new DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentGroupSymmetricKeyEnrollmentList(this, "group_symmetric_key_enrollment", false);
  public get groupSymmetricKeyEnrollment() {
    return this._groupSymmetricKeyEnrollment;
  }
  public putGroupSymmetricKeyEnrollment(value: DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentGroupSymmetricKeyEnrollment[] | cdktf.IResolvable) {
    this._groupSymmetricKeyEnrollment.internalValue = value;
  }
  public resetGroupSymmetricKeyEnrollment() {
    this._groupSymmetricKeyEnrollment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupSymmetricKeyEnrollmentInput() {
    return this._groupSymmetricKeyEnrollment.internalValue;
  }

  // individual_symmetric_key_enrollment - computed: false, optional: true, required: false
  private _individualSymmetricKeyEnrollment = new DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentIndividualSymmetricKeyEnrollmentList(this, "individual_symmetric_key_enrollment", false);
  public get individualSymmetricKeyEnrollment() {
    return this._individualSymmetricKeyEnrollment;
  }
  public putIndividualSymmetricKeyEnrollment(value: DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentIndividualSymmetricKeyEnrollment[] | cdktf.IResolvable) {
    this._individualSymmetricKeyEnrollment.internalValue = value;
  }
  public resetIndividualSymmetricKeyEnrollment() {
    this._individualSymmetricKeyEnrollment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get individualSymmetricKeyEnrollmentInput() {
    return this._individualSymmetricKeyEnrollment.internalValue;
  }
}

export class DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollment[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentOutputReference {
    return new DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentTpmEnrollment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#type DataZedcloudProject#type}
  */
  readonly type?: string;
}

export function dataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentTpmEnrollmentToTerraform(struct?: DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentTpmEnrollment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentTpmEnrollmentToHclTerraform(struct?: DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentTpmEnrollment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentTpmEnrollmentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentTpmEnrollment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentTpmEnrollment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
    }
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentTpmEnrollmentList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentTpmEnrollment[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentTpmEnrollmentOutputReference {
    return new DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentTpmEnrollmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#allocation_policy DataZedcloudProject#allocation_policy}
  */
  readonly allocationPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#attached_iot_hubs_name DataZedcloudProject#attached_iot_hubs_name}
  */
  readonly attachedIotHubsName?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#enable_iot_edge_device DataZedcloudProject#enable_iot_edge_device}
  */
  readonly enableIotEdgeDevice?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#mechanism DataZedcloudProject#mechanism}
  */
  readonly mechanism?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#tags DataZedcloudProject#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * certificate_enrollment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#certificate_enrollment DataZedcloudProject#certificate_enrollment}
  */
  readonly certificateEnrollment?: DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollment[] | cdktf.IResolvable;
  /**
  * symmetric_key_enrollment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#symmetric_key_enrollment DataZedcloudProject#symmetric_key_enrollment}
  */
  readonly symmetricKeyEnrollment?: DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollment[] | cdktf.IResolvable;
  /**
  * tpm_enrollment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#tpm_enrollment DataZedcloudProject#tpm_enrollment}
  */
  readonly tpmEnrollment?: DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentTpmEnrollment[] | cdktf.IResolvable;
}

export function dataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentToTerraform(struct?: DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allocation_policy: cdktf.stringToTerraform(struct!.allocationPolicy),
    attached_iot_hubs_name: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.attachedIotHubsName),
    enable_iot_edge_device: cdktf.booleanToTerraform(struct!.enableIotEdgeDevice),
    mechanism: cdktf.stringToTerraform(struct!.mechanism),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    certificate_enrollment: cdktf.listMapper(dataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollmentToTerraform, true)(struct!.certificateEnrollment),
    symmetric_key_enrollment: cdktf.listMapper(dataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentToTerraform, true)(struct!.symmetricKeyEnrollment),
    tpm_enrollment: cdktf.listMapper(dataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentTpmEnrollmentToTerraform, true)(struct!.tpmEnrollment),
  }
}


export function dataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentToHclTerraform(struct?: DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allocation_policy: {
      value: cdktf.stringToHclTerraform(struct!.allocationPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attached_iot_hubs_name: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.attachedIotHubsName),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    enable_iot_edge_device: {
      value: cdktf.booleanToHclTerraform(struct!.enableIotEdgeDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mechanism: {
      value: cdktf.stringToHclTerraform(struct!.mechanism),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    certificate_enrollment: {
      value: cdktf.listMapperHcl(dataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollmentToHclTerraform, true)(struct!.certificateEnrollment),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollmentList",
    },
    symmetric_key_enrollment: {
      value: cdktf.listMapperHcl(dataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentToHclTerraform, true)(struct!.symmetricKeyEnrollment),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentList",
    },
    tpm_enrollment: {
      value: cdktf.listMapperHcl(dataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentTpmEnrollmentToHclTerraform, true)(struct!.tpmEnrollment),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentTpmEnrollmentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocationPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocationPolicy = this._allocationPolicy;
    }
    if (this._attachedIotHubsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.attachedIotHubsName = this._attachedIotHubsName;
    }
    if (this._enableIotEdgeDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableIotEdgeDevice = this._enableIotEdgeDevice;
    }
    if (this._mechanism !== undefined) {
      hasAnyValues = true;
      internalValueResult.mechanism = this._mechanism;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._certificateEnrollment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateEnrollment = this._certificateEnrollment?.internalValue;
    }
    if (this._symmetricKeyEnrollment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.symmetricKeyEnrollment = this._symmetricKeyEnrollment?.internalValue;
    }
    if (this._tpmEnrollment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tpmEnrollment = this._tpmEnrollment?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allocationPolicy = undefined;
      this._attachedIotHubsName = undefined;
      this._enableIotEdgeDevice = undefined;
      this._mechanism = undefined;
      this._tags = undefined;
      this._certificateEnrollment.internalValue = undefined;
      this._symmetricKeyEnrollment.internalValue = undefined;
      this._tpmEnrollment.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allocationPolicy = value.allocationPolicy;
      this._attachedIotHubsName = value.attachedIotHubsName;
      this._enableIotEdgeDevice = value.enableIotEdgeDevice;
      this._mechanism = value.mechanism;
      this._tags = value.tags;
      this._certificateEnrollment.internalValue = value.certificateEnrollment;
      this._symmetricKeyEnrollment.internalValue = value.symmetricKeyEnrollment;
      this._tpmEnrollment.internalValue = value.tpmEnrollment;
    }
  }

  // allocation_policy - computed: false, optional: true, required: false
  private _allocationPolicy?: string; 
  public get allocationPolicy() {
    return this.getStringAttribute('allocation_policy');
  }
  public set allocationPolicy(value: string) {
    this._allocationPolicy = value;
  }
  public resetAllocationPolicy() {
    this._allocationPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocationPolicyInput() {
    return this._allocationPolicy;
  }

  // attached_iot_hubs_name - computed: false, optional: true, required: false
  private _attachedIotHubsName?: string[]; 
  public get attachedIotHubsName() {
    return this.getListAttribute('attached_iot_hubs_name');
  }
  public set attachedIotHubsName(value: string[]) {
    this._attachedIotHubsName = value;
  }
  public resetAttachedIotHubsName() {
    this._attachedIotHubsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachedIotHubsNameInput() {
    return this._attachedIotHubsName;
  }

  // enable_iot_edge_device - computed: false, optional: true, required: false
  private _enableIotEdgeDevice?: boolean | cdktf.IResolvable; 
  public get enableIotEdgeDevice() {
    return this.getBooleanAttribute('enable_iot_edge_device');
  }
  public set enableIotEdgeDevice(value: boolean | cdktf.IResolvable) {
    this._enableIotEdgeDevice = value;
  }
  public resetEnableIotEdgeDevice() {
    this._enableIotEdgeDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIotEdgeDeviceInput() {
    return this._enableIotEdgeDevice;
  }

  // mechanism - computed: false, optional: true, required: false
  private _mechanism?: string; 
  public get mechanism() {
    return this.getStringAttribute('mechanism');
  }
  public set mechanism(value: string) {
    this._mechanism = value;
  }
  public resetMechanism() {
    this._mechanism = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mechanismInput() {
    return this._mechanism;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // certificate_enrollment - computed: false, optional: true, required: false
  private _certificateEnrollment = new DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollmentList(this, "certificate_enrollment", false);
  public get certificateEnrollment() {
    return this._certificateEnrollment;
  }
  public putCertificateEnrollment(value: DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollment[] | cdktf.IResolvable) {
    this._certificateEnrollment.internalValue = value;
  }
  public resetCertificateEnrollment() {
    this._certificateEnrollment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateEnrollmentInput() {
    return this._certificateEnrollment.internalValue;
  }

  // symmetric_key_enrollment - computed: false, optional: true, required: false
  private _symmetricKeyEnrollment = new DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentList(this, "symmetric_key_enrollment", false);
  public get symmetricKeyEnrollment() {
    return this._symmetricKeyEnrollment;
  }
  public putSymmetricKeyEnrollment(value: DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollment[] | cdktf.IResolvable) {
    this._symmetricKeyEnrollment.internalValue = value;
  }
  public resetSymmetricKeyEnrollment() {
    this._symmetricKeyEnrollment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get symmetricKeyEnrollmentInput() {
    return this._symmetricKeyEnrollment.internalValue;
  }

  // tpm_enrollment - computed: false, optional: true, required: false
  private _tpmEnrollment = new DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentTpmEnrollmentList(this, "tpm_enrollment", false);
  public get tpmEnrollment() {
    return this._tpmEnrollment;
  }
  public putTpmEnrollment(value: DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentTpmEnrollment[] | cdktf.IResolvable) {
    this._tpmEnrollment.internalValue = value;
  }
  public resetTpmEnrollment() {
    this._tpmEnrollment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tpmEnrollmentInput() {
    return this._tpmEnrollment.internalValue;
  }
}

export class DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollment[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentOutputReference {
    return new DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetailSKU {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#capacity DataZedcloudProject#capacity}
  */
  readonly capacity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#name DataZedcloudProject#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#tier DataZedcloudProject#tier}
  */
  readonly tier?: string;
}

export function dataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetailSKUToTerraform(struct?: DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetailSKU | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capacity: cdktf.stringToTerraform(struct!.capacity),
    name: cdktf.stringToTerraform(struct!.name),
    tier: cdktf.stringToTerraform(struct!.tier),
  }
}


export function dataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetailSKUToHclTerraform(struct?: DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetailSKU | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capacity: {
      value: cdktf.stringToHclTerraform(struct!.capacity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tier: {
      value: cdktf.stringToHclTerraform(struct!.tier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetailSKUOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetailSKU | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacity = this._capacity;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._tier !== undefined) {
      hasAnyValues = true;
      internalValueResult.tier = this._tier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetailSKU | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capacity = undefined;
      this._name = undefined;
      this._tier = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._capacity = value.capacity;
      this._name = value.name;
      this._tier = value.tier;
    }
  }

  // capacity - computed: false, optional: true, required: false
  private _capacity?: string; 
  public get capacity() {
    return this.getStringAttribute('capacity');
  }
  public set capacity(value: string) {
    this._capacity = value;
  }
  public resetCapacity() {
    this._capacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityInput() {
    return this._capacity;
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

  // tier - computed: false, optional: true, required: false
  private _tier?: string; 
  public get tier() {
    return this.getStringAttribute('tier');
  }
  public set tier(value: string) {
    this._tier = value;
  }
  public resetTier() {
    this._tier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tierInput() {
    return this._tier;
  }
}

export class DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetailSKUList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetailSKU[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetailSKUOutputReference {
    return new DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetailSKUOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetail {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#create_by_default DataZedcloudProject#create_by_default}
  */
  readonly createByDefault?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#name DataZedcloudProject#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#region DataZedcloudProject#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#resource_group_name DataZedcloudProject#resource_group_name}
  */
  readonly resourceGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#subscription_id DataZedcloudProject#subscription_id}
  */
  readonly subscriptionId?: string;
  /**
  * s_k_u block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#s_k_u DataZedcloudProject#s_k_u}
  */
  readonly sKU?: DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetailSKU[] | cdktf.IResolvable;
}

export function dataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetailToTerraform(struct?: DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetail | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create_by_default: cdktf.booleanToTerraform(struct!.createByDefault),
    name: cdktf.stringToTerraform(struct!.name),
    region: cdktf.stringToTerraform(struct!.region),
    resource_group_name: cdktf.stringToTerraform(struct!.resourceGroupName),
    subscription_id: cdktf.stringToTerraform(struct!.subscriptionId),
    s_k_u: cdktf.listMapper(dataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetailSKUToTerraform, true)(struct!.sKU),
  }
}


export function dataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetailToHclTerraform(struct?: DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetail | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create_by_default: {
      value: cdktf.booleanToHclTerraform(struct!.createByDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_group_name: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subscription_id: {
      value: cdktf.stringToHclTerraform(struct!.subscriptionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s_k_u: {
      value: cdktf.listMapperHcl(dataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetailSKUToHclTerraform, true)(struct!.sKU),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetailSKUList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetailOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetail | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createByDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.createByDefault = this._createByDefault;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._resourceGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroupName = this._resourceGroupName;
    }
    if (this._subscriptionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscriptionId = this._subscriptionId;
    }
    if (this._sKU?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sKU = this._sKU?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetail | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._createByDefault = undefined;
      this._name = undefined;
      this._region = undefined;
      this._resourceGroupName = undefined;
      this._subscriptionId = undefined;
      this._sKU.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._createByDefault = value.createByDefault;
      this._name = value.name;
      this._region = value.region;
      this._resourceGroupName = value.resourceGroupName;
      this._subscriptionId = value.subscriptionId;
      this._sKU.internalValue = value.sKU;
    }
  }

  // create_by_default - computed: false, optional: true, required: false
  private _createByDefault?: boolean | cdktf.IResolvable; 
  public get createByDefault() {
    return this.getBooleanAttribute('create_by_default');
  }
  public set createByDefault(value: boolean | cdktf.IResolvable) {
    this._createByDefault = value;
  }
  public resetCreateByDefault() {
    this._createByDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createByDefaultInput() {
    return this._createByDefault;
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

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // resource_group_name - computed: false, optional: true, required: false
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  public resetResourceGroupName() {
    this._resourceGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
  }

  // subscription_id - computed: false, optional: true, required: false
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  public resetSubscriptionId() {
    this._subscriptionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
  }

  // s_k_u - computed: false, optional: true, required: false
  private _sKU = new DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetailSKUList(this, "s_k_u", false);
  public get sKU() {
    return this._sKU;
  }
  public putSKU(value: DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetailSKU[] | cdktf.IResolvable) {
    this._sKU.internalValue = value;
  }
  public resetSKU() {
    this._sKU.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sKUInput() {
    return this._sKU.internalValue;
  }
}

export class DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetailList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetail[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetailOutputReference {
    return new DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetailOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsService {
  /**
  * enrollment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#enrollment DataZedcloudProject#enrollment}
  */
  readonly enrollment?: DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollment[] | cdktf.IResolvable;
  /**
  * service_detail block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#service_detail DataZedcloudProject#service_detail}
  */
  readonly serviceDetail?: DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetail[] | cdktf.IResolvable;
}

export function dataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceToTerraform(struct?: DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enrollment: cdktf.listMapper(dataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentToTerraform, true)(struct!.enrollment),
    service_detail: cdktf.listMapper(dataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetailToTerraform, true)(struct!.serviceDetail),
  }
}


export function dataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceToHclTerraform(struct?: DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enrollment: {
      value: cdktf.listMapperHcl(dataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentToHclTerraform, true)(struct!.enrollment),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentList",
    },
    service_detail: {
      value: cdktf.listMapperHcl(dataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetailToHclTerraform, true)(struct!.serviceDetail),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetailList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enrollment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enrollment = this._enrollment?.internalValue;
    }
    if (this._serviceDetail?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceDetail = this._serviceDetail?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enrollment.internalValue = undefined;
      this._serviceDetail.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enrollment.internalValue = value.enrollment;
      this._serviceDetail.internalValue = value.serviceDetail;
    }
  }

  // enrollment - computed: false, optional: true, required: false
  private _enrollment = new DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentList(this, "enrollment", false);
  public get enrollment() {
    return this._enrollment;
  }
  public putEnrollment(value: DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollment[] | cdktf.IResolvable) {
    this._enrollment.internalValue = value;
  }
  public resetEnrollment() {
    this._enrollment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enrollmentInput() {
    return this._enrollment.internalValue;
  }

  // service_detail - computed: false, optional: true, required: false
  private _serviceDetail = new DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetailList(this, "service_detail", false);
  public get serviceDetail() {
    return this._serviceDetail;
  }
  public putServiceDetail(value: DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetail[] | cdktf.IResolvable) {
    this._serviceDetail.internalValue = value;
  }
  public resetServiceDetail() {
    this._serviceDetail.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceDetailInput() {
    return this._serviceDetail.internalValue;
  }
}

export class DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsService[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceOutputReference {
    return new DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetailSKU {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#capacity DataZedcloudProject#capacity}
  */
  readonly capacity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#name DataZedcloudProject#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#tier DataZedcloudProject#tier}
  */
  readonly tier?: string;
}

export function dataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetailSKUToTerraform(struct?: DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetailSKU | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capacity: cdktf.stringToTerraform(struct!.capacity),
    name: cdktf.stringToTerraform(struct!.name),
    tier: cdktf.stringToTerraform(struct!.tier),
  }
}


export function dataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetailSKUToHclTerraform(struct?: DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetailSKU | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capacity: {
      value: cdktf.stringToHclTerraform(struct!.capacity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tier: {
      value: cdktf.stringToHclTerraform(struct!.tier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetailSKUOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetailSKU | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacity = this._capacity;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._tier !== undefined) {
      hasAnyValues = true;
      internalValueResult.tier = this._tier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetailSKU | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capacity = undefined;
      this._name = undefined;
      this._tier = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._capacity = value.capacity;
      this._name = value.name;
      this._tier = value.tier;
    }
  }

  // capacity - computed: false, optional: true, required: false
  private _capacity?: string; 
  public get capacity() {
    return this.getStringAttribute('capacity');
  }
  public set capacity(value: string) {
    this._capacity = value;
  }
  public resetCapacity() {
    this._capacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityInput() {
    return this._capacity;
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

  // tier - computed: false, optional: true, required: false
  private _tier?: string; 
  public get tier() {
    return this.getStringAttribute('tier');
  }
  public set tier(value: string) {
    this._tier = value;
  }
  public resetTier() {
    this._tier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tierInput() {
    return this._tier;
  }
}

export class DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetailSKUList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetailSKU[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetailSKUOutputReference {
    return new DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetailSKUOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetail {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#create_by_default DataZedcloudProject#create_by_default}
  */
  readonly createByDefault?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#name DataZedcloudProject#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#region DataZedcloudProject#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#resource_group_name DataZedcloudProject#resource_group_name}
  */
  readonly resourceGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#subscription_id DataZedcloudProject#subscription_id}
  */
  readonly subscriptionId?: string;
  /**
  * s_k_u block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#s_k_u DataZedcloudProject#s_k_u}
  */
  readonly sKU?: DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetailSKU[] | cdktf.IResolvable;
}

export function dataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetailToTerraform(struct?: DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetail | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create_by_default: cdktf.booleanToTerraform(struct!.createByDefault),
    name: cdktf.stringToTerraform(struct!.name),
    region: cdktf.stringToTerraform(struct!.region),
    resource_group_name: cdktf.stringToTerraform(struct!.resourceGroupName),
    subscription_id: cdktf.stringToTerraform(struct!.subscriptionId),
    s_k_u: cdktf.listMapper(dataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetailSKUToTerraform, true)(struct!.sKU),
  }
}


export function dataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetailToHclTerraform(struct?: DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetail | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create_by_default: {
      value: cdktf.booleanToHclTerraform(struct!.createByDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_group_name: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subscription_id: {
      value: cdktf.stringToHclTerraform(struct!.subscriptionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s_k_u: {
      value: cdktf.listMapperHcl(dataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetailSKUToHclTerraform, true)(struct!.sKU),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetailSKUList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetailOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetail | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createByDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.createByDefault = this._createByDefault;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._resourceGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroupName = this._resourceGroupName;
    }
    if (this._subscriptionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscriptionId = this._subscriptionId;
    }
    if (this._sKU?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sKU = this._sKU?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetail | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._createByDefault = undefined;
      this._name = undefined;
      this._region = undefined;
      this._resourceGroupName = undefined;
      this._subscriptionId = undefined;
      this._sKU.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._createByDefault = value.createByDefault;
      this._name = value.name;
      this._region = value.region;
      this._resourceGroupName = value.resourceGroupName;
      this._subscriptionId = value.subscriptionId;
      this._sKU.internalValue = value.sKU;
    }
  }

  // create_by_default - computed: false, optional: true, required: false
  private _createByDefault?: boolean | cdktf.IResolvable; 
  public get createByDefault() {
    return this.getBooleanAttribute('create_by_default');
  }
  public set createByDefault(value: boolean | cdktf.IResolvable) {
    this._createByDefault = value;
  }
  public resetCreateByDefault() {
    this._createByDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createByDefaultInput() {
    return this._createByDefault;
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

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // resource_group_name - computed: false, optional: true, required: false
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  public resetResourceGroupName() {
    this._resourceGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
  }

  // subscription_id - computed: false, optional: true, required: false
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  public resetSubscriptionId() {
    this._subscriptionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
  }

  // s_k_u - computed: false, optional: true, required: false
  private _sKU = new DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetailSKUList(this, "s_k_u", false);
  public get sKU() {
    return this._sKU;
  }
  public putSKU(value: DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetailSKU[] | cdktf.IResolvable) {
    this._sKU.internalValue = value;
  }
  public resetSKU() {
    this._sKU.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sKUInput() {
    return this._sKU.internalValue;
  }
}

export class DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetailList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetail[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetailOutputReference {
    return new DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetailOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesIotHubService {
  /**
  * service_detail block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#service_detail DataZedcloudProject#service_detail}
  */
  readonly serviceDetail?: DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetail[] | cdktf.IResolvable;
}

export function dataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesIotHubServiceToTerraform(struct?: DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesIotHubService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_detail: cdktf.listMapper(dataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetailToTerraform, true)(struct!.serviceDetail),
  }
}


export function dataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesIotHubServiceToHclTerraform(struct?: DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesIotHubService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service_detail: {
      value: cdktf.listMapperHcl(dataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetailToHclTerraform, true)(struct!.serviceDetail),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetailList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesIotHubServiceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesIotHubService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceDetail?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceDetail = this._serviceDetail?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesIotHubService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._serviceDetail.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._serviceDetail.internalValue = value.serviceDetail;
    }
  }

  // service_detail - computed: false, optional: true, required: false
  private _serviceDetail = new DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetailList(this, "service_detail", false);
  public get serviceDetail() {
    return this._serviceDetail;
  }
  public putServiceDetail(value: DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetail[] | cdktf.IResolvable) {
    this._serviceDetail.internalValue = value;
  }
  public resetServiceDetail() {
    this._serviceDetail.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceDetailInput() {
    return this._serviceDetail.internalValue;
  }
}

export class DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesIotHubServiceList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesIotHubService[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesIotHubServiceOutputReference {
    return new DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesIotHubServiceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesResourceGroup {
  /**
  * resource group name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#name DataZedcloudProject#name}
  */
  readonly name: string;
  /**
  * resource group region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#region DataZedcloudProject#region}
  */
  readonly region?: string;
  /**
  * azure subscription id to which resource group is attached
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#subscription_id DataZedcloudProject#subscription_id}
  */
  readonly subscriptionId: string;
}

export function dataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesResourceGroupToTerraform(struct?: DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesResourceGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    region: cdktf.stringToTerraform(struct!.region),
    subscription_id: cdktf.stringToTerraform(struct!.subscriptionId),
  }
}


export function dataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesResourceGroupToHclTerraform(struct?: DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesResourceGroup | cdktf.IResolvable): any {
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
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subscription_id: {
      value: cdktf.stringToHclTerraform(struct!.subscriptionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesResourceGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesResourceGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._subscriptionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscriptionId = this._subscriptionId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesResourceGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._region = undefined;
      this._subscriptionId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._region = value.region;
      this._subscriptionId = value.subscriptionId;
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

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // subscription_id - computed: false, optional: false, required: true
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
  }
}

export class DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesResourceGroupList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesResourceGroup[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesResourceGroupOutputReference {
    return new DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesResourceGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServices {
  /**
  * dps_service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#dps_service DataZedcloudProject#dps_service}
  */
  readonly dpsService: DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsService[] | cdktf.IResolvable;
  /**
  * iot_hub_service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#iot_hub_service DataZedcloudProject#iot_hub_service}
  */
  readonly iotHubService: DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesIotHubService[] | cdktf.IResolvable;
  /**
  * resource_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/project#resource_group DataZedcloudProject#resource_group}
  */
  readonly resourceGroup: DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesResourceGroup[] | cdktf.IResolvable;
}

export function dataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesToTerraform(struct?: DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dps_service: cdktf.listMapper(dataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceToTerraform, true)(struct!.dpsService),
    iot_hub_service: cdktf.listMapper(dataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesIotHubServiceToTerraform, true)(struct!.iotHubService),
    resource_group: cdktf.listMapper(dataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesResourceGroupToTerraform, true)(struct!.resourceGroup),
  }
}


export function dataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesToHclTerraform(struct?: DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dps_service: {
      value: cdktf.listMapperHcl(dataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceToHclTerraform, true)(struct!.dpsService),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceList",
    },
    iot_hub_service: {
      value: cdktf.listMapperHcl(dataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesIotHubServiceToHclTerraform, true)(struct!.iotHubService),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesIotHubServiceList",
    },
    resource_group: {
      value: cdktf.listMapperHcl(dataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesResourceGroupToHclTerraform, true)(struct!.resourceGroup),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesResourceGroupList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dpsService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dpsService = this._dpsService?.internalValue;
    }
    if (this._iotHubService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iotHubService = this._iotHubService?.internalValue;
    }
    if (this._resourceGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroup = this._resourceGroup?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dpsService.internalValue = undefined;
      this._iotHubService.internalValue = undefined;
      this._resourceGroup.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dpsService.internalValue = value.dpsService;
      this._iotHubService.internalValue = value.iotHubService;
      this._resourceGroup.internalValue = value.resourceGroup;
    }
  }

  // dps_service - computed: false, optional: false, required: true
  private _dpsService = new DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsServiceList(this, "dps_service", false);
  public get dpsService() {
    return this._dpsService;
  }
  public putDpsService(value: DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesDpsService[] | cdktf.IResolvable) {
    this._dpsService.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dpsServiceInput() {
    return this._dpsService.internalValue;
  }

  // iot_hub_service - computed: false, optional: false, required: true
  private _iotHubService = new DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesIotHubServiceList(this, "iot_hub_service", false);
  public get iotHubService() {
    return this._iotHubService;
  }
  public putIotHubService(value: DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesIotHubService[] | cdktf.IResolvable) {
    this._iotHubService.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iotHubServiceInput() {
    return this._iotHubService.internalValue;
  }

  // resource_group - computed: false, optional: false, required: true
  private _resourceGroup = new DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesResourceGroupList(this, "resource_group", false);
  public get resourceGroup() {
    return this._resourceGroup;
  }
  public putResourceGroup(value: DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesResourceGroup[] | cdktf.IResolvable) {
    this._resourceGroup.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupInput() {
    return this._resourceGroup.internalValue;
  }
}

export class DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServices[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesOutputReference {
    return new DataZedcloudProjectAppPolicyAzurePolicyAzureResourceAndServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
