import * as cdktf from 'cdktf';
export interface ProjectCloudPolicyAppPolicyAppsInterfacesAclsActionsMapparams {
}

export function projectCloudPolicyAppPolicyAppsInterfacesAclsActionsMapparamsToTerraform(struct?: ProjectCloudPolicyAppPolicyAppsInterfacesAclsActionsMapparams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyAppPolicyAppsInterfacesAclsActionsMapparamsToHclTerraform(struct?: ProjectCloudPolicyAppPolicyAppsInterfacesAclsActionsMapparams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyAppPolicyAppsInterfacesAclsActionsMapparamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyAppPolicyAppsInterfacesAclsActionsMapparams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyAppPolicyAppsInterfacesAclsActionsMapparams | undefined) {
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

export class ProjectCloudPolicyAppPolicyAppsInterfacesAclsActionsMapparamsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyAppPolicyAppsInterfacesAclsActionsMapparamsOutputReference {
    return new ProjectCloudPolicyAppPolicyAppsInterfacesAclsActionsMapparamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyAppPolicyAppsInterfacesAclsActions {
}

export function projectCloudPolicyAppPolicyAppsInterfacesAclsActionsToTerraform(struct?: ProjectCloudPolicyAppPolicyAppsInterfacesAclsActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyAppPolicyAppsInterfacesAclsActionsToHclTerraform(struct?: ProjectCloudPolicyAppPolicyAppsInterfacesAclsActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyAppPolicyAppsInterfacesAclsActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyAppPolicyAppsInterfacesAclsActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyAppPolicyAppsInterfacesAclsActions | undefined) {
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
  private _mapparams = new ProjectCloudPolicyAppPolicyAppsInterfacesAclsActionsMapparamsList(this, "mapparams", false);
  public get mapparams() {
    return this._mapparams;
  }

  // portmap - computed: true, optional: false, required: false
  public get portmap() {
    return this.getBooleanAttribute('portmap');
  }
}

export class ProjectCloudPolicyAppPolicyAppsInterfacesAclsActionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyAppPolicyAppsInterfacesAclsActionsOutputReference {
    return new ProjectCloudPolicyAppPolicyAppsInterfacesAclsActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyAppPolicyAppsInterfacesAclsMatches {
}

export function projectCloudPolicyAppPolicyAppsInterfacesAclsMatchesToTerraform(struct?: ProjectCloudPolicyAppPolicyAppsInterfacesAclsMatches): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyAppPolicyAppsInterfacesAclsMatchesToHclTerraform(struct?: ProjectCloudPolicyAppPolicyAppsInterfacesAclsMatches): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyAppPolicyAppsInterfacesAclsMatchesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyAppPolicyAppsInterfacesAclsMatches | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyAppPolicyAppsInterfacesAclsMatches | undefined) {
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

export class ProjectCloudPolicyAppPolicyAppsInterfacesAclsMatchesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyAppPolicyAppsInterfacesAclsMatchesOutputReference {
    return new ProjectCloudPolicyAppPolicyAppsInterfacesAclsMatchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyAppPolicyAppsInterfacesAcls {
}

export function projectCloudPolicyAppPolicyAppsInterfacesAclsToTerraform(struct?: ProjectCloudPolicyAppPolicyAppsInterfacesAcls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyAppPolicyAppsInterfacesAclsToHclTerraform(struct?: ProjectCloudPolicyAppPolicyAppsInterfacesAcls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyAppPolicyAppsInterfacesAclsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyAppPolicyAppsInterfacesAcls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyAppPolicyAppsInterfacesAcls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // actions - computed: true, optional: false, required: false
  private _actions = new ProjectCloudPolicyAppPolicyAppsInterfacesAclsActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // matches - computed: true, optional: false, required: false
  private _matches = new ProjectCloudPolicyAppPolicyAppsInterfacesAclsMatchesList(this, "matches", false);
  public get matches() {
    return this._matches;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class ProjectCloudPolicyAppPolicyAppsInterfacesAclsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyAppPolicyAppsInterfacesAclsOutputReference {
    return new ProjectCloudPolicyAppPolicyAppsInterfacesAclsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyAppPolicyAppsInterfacesEidregisterLispMapServers {
}

export function projectCloudPolicyAppPolicyAppsInterfacesEidregisterLispMapServersToTerraform(struct?: ProjectCloudPolicyAppPolicyAppsInterfacesEidregisterLispMapServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyAppPolicyAppsInterfacesEidregisterLispMapServersToHclTerraform(struct?: ProjectCloudPolicyAppPolicyAppsInterfacesEidregisterLispMapServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyAppPolicyAppsInterfacesEidregisterLispMapServersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyAppPolicyAppsInterfacesEidregisterLispMapServers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyAppPolicyAppsInterfacesEidregisterLispMapServers | undefined) {
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

export class ProjectCloudPolicyAppPolicyAppsInterfacesEidregisterLispMapServersList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyAppPolicyAppsInterfacesEidregisterLispMapServersOutputReference {
    return new ProjectCloudPolicyAppPolicyAppsInterfacesEidregisterLispMapServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyAppPolicyAppsInterfacesEidregister {
}

export function projectCloudPolicyAppPolicyAppsInterfacesEidregisterToTerraform(struct?: ProjectCloudPolicyAppPolicyAppsInterfacesEidregister): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyAppPolicyAppsInterfacesEidregisterToHclTerraform(struct?: ProjectCloudPolicyAppPolicyAppsInterfacesEidregister): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyAppPolicyAppsInterfacesEidregisterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyAppPolicyAppsInterfacesEidregister | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyAppPolicyAppsInterfacesEidregister | undefined) {
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
  private _lispMapServers = new ProjectCloudPolicyAppPolicyAppsInterfacesEidregisterLispMapServersList(this, "lisp_map_servers", false);
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

export class ProjectCloudPolicyAppPolicyAppsInterfacesEidregisterList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyAppPolicyAppsInterfacesEidregisterOutputReference {
    return new ProjectCloudPolicyAppPolicyAppsInterfacesEidregisterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyAppPolicyAppsInterfacesIo {
}

export function projectCloudPolicyAppPolicyAppsInterfacesIoToTerraform(struct?: ProjectCloudPolicyAppPolicyAppsInterfacesIo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyAppPolicyAppsInterfacesIoToHclTerraform(struct?: ProjectCloudPolicyAppPolicyAppsInterfacesIo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyAppPolicyAppsInterfacesIoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyAppPolicyAppsInterfacesIo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyAppPolicyAppsInterfacesIo | undefined) {
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

export class ProjectCloudPolicyAppPolicyAppsInterfacesIoList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyAppPolicyAppsInterfacesIoOutputReference {
    return new ProjectCloudPolicyAppPolicyAppsInterfacesIoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyAppPolicyAppsInterfaces {
}

export function projectCloudPolicyAppPolicyAppsInterfacesToTerraform(struct?: ProjectCloudPolicyAppPolicyAppsInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyAppPolicyAppsInterfacesToHclTerraform(struct?: ProjectCloudPolicyAppPolicyAppsInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyAppPolicyAppsInterfacesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyAppPolicyAppsInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyAppPolicyAppsInterfaces | undefined) {
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
  private _acls = new ProjectCloudPolicyAppPolicyAppsInterfacesAclsList(this, "acls", false);
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
  private _eidregister = new ProjectCloudPolicyAppPolicyAppsInterfacesEidregisterList(this, "eidregister", false);
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
  private _io = new ProjectCloudPolicyAppPolicyAppsInterfacesIoList(this, "io", false);
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

export class ProjectCloudPolicyAppPolicyAppsInterfacesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyAppPolicyAppsInterfacesOutputReference {
    return new ProjectCloudPolicyAppPolicyAppsInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsCondition {
}

export function projectCloudPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsConditionToTerraform(struct?: ProjectCloudPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsConditionToHclTerraform(struct?: ProjectCloudPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsCondition | undefined) {
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

export class ProjectCloudPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsConditionList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsConditionOutputReference {
    return new ProjectCloudPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptions {
}

export function projectCloudPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsToTerraform(struct?: ProjectCloudPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsToHclTerraform(struct?: ProjectCloudPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptions | undefined) {
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

export class ProjectCloudPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsOutputReference {
    return new ProjectCloudPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariables {
}

export function projectCloudPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesToTerraform(struct?: ProjectCloudPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesToHclTerraform(struct?: ProjectCloudPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariables | undefined) {
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
  private _options = new ProjectCloudPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsList(this, "options", false);
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

export class ProjectCloudPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesOutputReference {
    return new ProjectCloudPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroups {
}

export function projectCloudPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsToTerraform(struct?: ProjectCloudPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsToHclTerraform(struct?: ProjectCloudPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // condition - computed: true, optional: false, required: false
  private _condition = new ProjectCloudPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsConditionList(this, "condition", false);
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
  private _variables = new ProjectCloudPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesList(this, "variables", false);
  public get variables() {
    return this._variables;
  }
}

export class ProjectCloudPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsOutputReference {
    return new ProjectCloudPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyAppPolicyAppsManifestJsonConfigurationCustomConfig {
}

export function projectCloudPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigToTerraform(struct?: ProjectCloudPolicyAppPolicyAppsManifestJsonConfigurationCustomConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigToHclTerraform(struct?: ProjectCloudPolicyAppPolicyAppsManifestJsonConfigurationCustomConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyAppPolicyAppsManifestJsonConfigurationCustomConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyAppPolicyAppsManifestJsonConfigurationCustomConfig | undefined) {
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
  private _variableGroups = new ProjectCloudPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsList(this, "variable_groups", false);
  public get variableGroups() {
    return this._variableGroups;
  }
}

export class ProjectCloudPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigOutputReference {
    return new ProjectCloudPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyAppPolicyAppsManifestJsonConfiguration {
}

export function projectCloudPolicyAppPolicyAppsManifestJsonConfigurationToTerraform(struct?: ProjectCloudPolicyAppPolicyAppsManifestJsonConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyAppPolicyAppsManifestJsonConfigurationToHclTerraform(struct?: ProjectCloudPolicyAppPolicyAppsManifestJsonConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyAppPolicyAppsManifestJsonConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyAppPolicyAppsManifestJsonConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyAppPolicyAppsManifestJsonConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_config - computed: true, optional: false, required: false
  private _customConfig = new ProjectCloudPolicyAppPolicyAppsManifestJsonConfigurationCustomConfigList(this, "custom_config", false);
  public get customConfig() {
    return this._customConfig;
  }
}

export class ProjectCloudPolicyAppPolicyAppsManifestJsonConfigurationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyAppPolicyAppsManifestJsonConfigurationOutputReference {
    return new ProjectCloudPolicyAppPolicyAppsManifestJsonConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyAppPolicyAppsManifestJsonContainerDetail {
}

export function projectCloudPolicyAppPolicyAppsManifestJsonContainerDetailToTerraform(struct?: ProjectCloudPolicyAppPolicyAppsManifestJsonContainerDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyAppPolicyAppsManifestJsonContainerDetailToHclTerraform(struct?: ProjectCloudPolicyAppPolicyAppsManifestJsonContainerDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyAppPolicyAppsManifestJsonContainerDetailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyAppPolicyAppsManifestJsonContainerDetail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyAppPolicyAppsManifestJsonContainerDetail | undefined) {
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

export class ProjectCloudPolicyAppPolicyAppsManifestJsonContainerDetailList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyAppPolicyAppsManifestJsonContainerDetailOutputReference {
    return new ProjectCloudPolicyAppPolicyAppsManifestJsonContainerDetailOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyAppPolicyAppsManifestJsonDesc {
}

export function projectCloudPolicyAppPolicyAppsManifestJsonDescToTerraform(struct?: ProjectCloudPolicyAppPolicyAppsManifestJsonDesc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyAppPolicyAppsManifestJsonDescToHclTerraform(struct?: ProjectCloudPolicyAppPolicyAppsManifestJsonDesc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyAppPolicyAppsManifestJsonDescOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyAppPolicyAppsManifestJsonDesc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyAppPolicyAppsManifestJsonDesc | undefined) {
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

export class ProjectCloudPolicyAppPolicyAppsManifestJsonDescList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyAppPolicyAppsManifestJsonDescOutputReference {
    return new ProjectCloudPolicyAppPolicyAppsManifestJsonDescOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyAppPolicyAppsManifestJsonImagesParams {
}

export function projectCloudPolicyAppPolicyAppsManifestJsonImagesParamsToTerraform(struct?: ProjectCloudPolicyAppPolicyAppsManifestJsonImagesParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyAppPolicyAppsManifestJsonImagesParamsToHclTerraform(struct?: ProjectCloudPolicyAppPolicyAppsManifestJsonImagesParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyAppPolicyAppsManifestJsonImagesParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyAppPolicyAppsManifestJsonImagesParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyAppPolicyAppsManifestJsonImagesParams | undefined) {
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

export class ProjectCloudPolicyAppPolicyAppsManifestJsonImagesParamsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyAppPolicyAppsManifestJsonImagesParamsOutputReference {
    return new ProjectCloudPolicyAppPolicyAppsManifestJsonImagesParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyAppPolicyAppsManifestJsonImages {
}

export function projectCloudPolicyAppPolicyAppsManifestJsonImagesToTerraform(struct?: ProjectCloudPolicyAppPolicyAppsManifestJsonImages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyAppPolicyAppsManifestJsonImagesToHclTerraform(struct?: ProjectCloudPolicyAppPolicyAppsManifestJsonImages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyAppPolicyAppsManifestJsonImagesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyAppPolicyAppsManifestJsonImages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyAppPolicyAppsManifestJsonImages | undefined) {
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
  private _params = new ProjectCloudPolicyAppPolicyAppsManifestJsonImagesParamsList(this, "params", false);
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

export class ProjectCloudPolicyAppPolicyAppsManifestJsonImagesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyAppPolicyAppsManifestJsonImagesOutputReference {
    return new ProjectCloudPolicyAppPolicyAppsManifestJsonImagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyAppPolicyAppsManifestJsonInterfacesAclsActionsLimitValue {
}

export function projectCloudPolicyAppPolicyAppsManifestJsonInterfacesAclsActionsLimitValueToTerraform(struct?: ProjectCloudPolicyAppPolicyAppsManifestJsonInterfacesAclsActionsLimitValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyAppPolicyAppsManifestJsonInterfacesAclsActionsLimitValueToHclTerraform(struct?: ProjectCloudPolicyAppPolicyAppsManifestJsonInterfacesAclsActionsLimitValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyAppPolicyAppsManifestJsonInterfacesAclsActionsLimitValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyAppPolicyAppsManifestJsonInterfacesAclsActionsLimitValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyAppPolicyAppsManifestJsonInterfacesAclsActionsLimitValue | undefined) {
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

export class ProjectCloudPolicyAppPolicyAppsManifestJsonInterfacesAclsActionsLimitValueList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyAppPolicyAppsManifestJsonInterfacesAclsActionsLimitValueOutputReference {
    return new ProjectCloudPolicyAppPolicyAppsManifestJsonInterfacesAclsActionsLimitValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyAppPolicyAppsManifestJsonInterfacesAclsActionsPortmapto {
}

export function projectCloudPolicyAppPolicyAppsManifestJsonInterfacesAclsActionsPortmaptoToTerraform(struct?: ProjectCloudPolicyAppPolicyAppsManifestJsonInterfacesAclsActionsPortmapto): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyAppPolicyAppsManifestJsonInterfacesAclsActionsPortmaptoToHclTerraform(struct?: ProjectCloudPolicyAppPolicyAppsManifestJsonInterfacesAclsActionsPortmapto): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyAppPolicyAppsManifestJsonInterfacesAclsActionsPortmaptoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyAppPolicyAppsManifestJsonInterfacesAclsActionsPortmapto | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyAppPolicyAppsManifestJsonInterfacesAclsActionsPortmapto | undefined) {
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

export class ProjectCloudPolicyAppPolicyAppsManifestJsonInterfacesAclsActionsPortmaptoList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyAppPolicyAppsManifestJsonInterfacesAclsActionsPortmaptoOutputReference {
    return new ProjectCloudPolicyAppPolicyAppsManifestJsonInterfacesAclsActionsPortmaptoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyAppPolicyAppsManifestJsonInterfacesAclsActions {
}

export function projectCloudPolicyAppPolicyAppsManifestJsonInterfacesAclsActionsToTerraform(struct?: ProjectCloudPolicyAppPolicyAppsManifestJsonInterfacesAclsActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyAppPolicyAppsManifestJsonInterfacesAclsActionsToHclTerraform(struct?: ProjectCloudPolicyAppPolicyAppsManifestJsonInterfacesAclsActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyAppPolicyAppsManifestJsonInterfacesAclsActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyAppPolicyAppsManifestJsonInterfacesAclsActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyAppPolicyAppsManifestJsonInterfacesAclsActions | undefined) {
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
  private _limitValue = new ProjectCloudPolicyAppPolicyAppsManifestJsonInterfacesAclsActionsLimitValueList(this, "limit_value", false);
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
  private _portmapto = new ProjectCloudPolicyAppPolicyAppsManifestJsonInterfacesAclsActionsPortmaptoList(this, "portmapto", false);
  public get portmapto() {
    return this._portmapto;
  }
}

export class ProjectCloudPolicyAppPolicyAppsManifestJsonInterfacesAclsActionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyAppPolicyAppsManifestJsonInterfacesAclsActionsOutputReference {
    return new ProjectCloudPolicyAppPolicyAppsManifestJsonInterfacesAclsActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyAppPolicyAppsManifestJsonInterfacesAclsMatches {
}

export function projectCloudPolicyAppPolicyAppsManifestJsonInterfacesAclsMatchesToTerraform(struct?: ProjectCloudPolicyAppPolicyAppsManifestJsonInterfacesAclsMatches): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyAppPolicyAppsManifestJsonInterfacesAclsMatchesToHclTerraform(struct?: ProjectCloudPolicyAppPolicyAppsManifestJsonInterfacesAclsMatches): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyAppPolicyAppsManifestJsonInterfacesAclsMatchesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyAppPolicyAppsManifestJsonInterfacesAclsMatches | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyAppPolicyAppsManifestJsonInterfacesAclsMatches | undefined) {
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

export class ProjectCloudPolicyAppPolicyAppsManifestJsonInterfacesAclsMatchesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyAppPolicyAppsManifestJsonInterfacesAclsMatchesOutputReference {
    return new ProjectCloudPolicyAppPolicyAppsManifestJsonInterfacesAclsMatchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyAppPolicyAppsManifestJsonInterfacesAcls {
}

export function projectCloudPolicyAppPolicyAppsManifestJsonInterfacesAclsToTerraform(struct?: ProjectCloudPolicyAppPolicyAppsManifestJsonInterfacesAcls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyAppPolicyAppsManifestJsonInterfacesAclsToHclTerraform(struct?: ProjectCloudPolicyAppPolicyAppsManifestJsonInterfacesAcls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyAppPolicyAppsManifestJsonInterfacesAclsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyAppPolicyAppsManifestJsonInterfacesAcls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyAppPolicyAppsManifestJsonInterfacesAcls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // actions - computed: true, optional: false, required: false
  private _actions = new ProjectCloudPolicyAppPolicyAppsManifestJsonInterfacesAclsActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }

  // matches - computed: true, optional: false, required: false
  private _matches = new ProjectCloudPolicyAppPolicyAppsManifestJsonInterfacesAclsMatchesList(this, "matches", false);
  public get matches() {
    return this._matches;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class ProjectCloudPolicyAppPolicyAppsManifestJsonInterfacesAclsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyAppPolicyAppsManifestJsonInterfacesAclsOutputReference {
    return new ProjectCloudPolicyAppPolicyAppsManifestJsonInterfacesAclsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyAppPolicyAppsManifestJsonInterfaces {
}

export function projectCloudPolicyAppPolicyAppsManifestJsonInterfacesToTerraform(struct?: ProjectCloudPolicyAppPolicyAppsManifestJsonInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyAppPolicyAppsManifestJsonInterfacesToHclTerraform(struct?: ProjectCloudPolicyAppPolicyAppsManifestJsonInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyAppPolicyAppsManifestJsonInterfacesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyAppPolicyAppsManifestJsonInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyAppPolicyAppsManifestJsonInterfaces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // acls - computed: true, optional: false, required: false
  private _acls = new ProjectCloudPolicyAppPolicyAppsManifestJsonInterfacesAclsList(this, "acls", false);
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

export class ProjectCloudPolicyAppPolicyAppsManifestJsonInterfacesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyAppPolicyAppsManifestJsonInterfacesOutputReference {
    return new ProjectCloudPolicyAppPolicyAppsManifestJsonInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyAppPolicyAppsManifestJsonModule {
}

export function projectCloudPolicyAppPolicyAppsManifestJsonModuleToTerraform(struct?: ProjectCloudPolicyAppPolicyAppsManifestJsonModule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyAppPolicyAppsManifestJsonModuleToHclTerraform(struct?: ProjectCloudPolicyAppPolicyAppsManifestJsonModule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyAppPolicyAppsManifestJsonModuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyAppPolicyAppsManifestJsonModule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyAppPolicyAppsManifestJsonModule | undefined) {
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

export class ProjectCloudPolicyAppPolicyAppsManifestJsonModuleList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyAppPolicyAppsManifestJsonModuleOutputReference {
    return new ProjectCloudPolicyAppPolicyAppsManifestJsonModuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyAppPolicyAppsManifestJsonOwner {
}

export function projectCloudPolicyAppPolicyAppsManifestJsonOwnerToTerraform(struct?: ProjectCloudPolicyAppPolicyAppsManifestJsonOwner): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyAppPolicyAppsManifestJsonOwnerToHclTerraform(struct?: ProjectCloudPolicyAppPolicyAppsManifestJsonOwner): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyAppPolicyAppsManifestJsonOwnerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyAppPolicyAppsManifestJsonOwner | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyAppPolicyAppsManifestJsonOwner | undefined) {
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

export class ProjectCloudPolicyAppPolicyAppsManifestJsonOwnerList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyAppPolicyAppsManifestJsonOwnerOutputReference {
    return new ProjectCloudPolicyAppPolicyAppsManifestJsonOwnerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyAppPolicyAppsManifestJsonPermissions {
}

export function projectCloudPolicyAppPolicyAppsManifestJsonPermissionsToTerraform(struct?: ProjectCloudPolicyAppPolicyAppsManifestJsonPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyAppPolicyAppsManifestJsonPermissionsToHclTerraform(struct?: ProjectCloudPolicyAppPolicyAppsManifestJsonPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyAppPolicyAppsManifestJsonPermissionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyAppPolicyAppsManifestJsonPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyAppPolicyAppsManifestJsonPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}

export class ProjectCloudPolicyAppPolicyAppsManifestJsonPermissionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyAppPolicyAppsManifestJsonPermissionsOutputReference {
    return new ProjectCloudPolicyAppPolicyAppsManifestJsonPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyAppPolicyAppsManifestJsonResources {
}

export function projectCloudPolicyAppPolicyAppsManifestJsonResourcesToTerraform(struct?: ProjectCloudPolicyAppPolicyAppsManifestJsonResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyAppPolicyAppsManifestJsonResourcesToHclTerraform(struct?: ProjectCloudPolicyAppPolicyAppsManifestJsonResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyAppPolicyAppsManifestJsonResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyAppPolicyAppsManifestJsonResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyAppPolicyAppsManifestJsonResources | undefined) {
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

export class ProjectCloudPolicyAppPolicyAppsManifestJsonResourcesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyAppPolicyAppsManifestJsonResourcesOutputReference {
    return new ProjectCloudPolicyAppPolicyAppsManifestJsonResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyAppPolicyAppsManifestJson {
}

export function projectCloudPolicyAppPolicyAppsManifestJsonToTerraform(struct?: ProjectCloudPolicyAppPolicyAppsManifestJson): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyAppPolicyAppsManifestJsonToHclTerraform(struct?: ProjectCloudPolicyAppPolicyAppsManifestJson): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyAppPolicyAppsManifestJsonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyAppPolicyAppsManifestJson | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyAppPolicyAppsManifestJson | undefined) {
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
  private _configuration = new ProjectCloudPolicyAppPolicyAppsManifestJsonConfigurationList(this, "configuration", false);
  public get configuration() {
    return this._configuration;
  }

  // container_detail - computed: true, optional: false, required: false
  private _containerDetail = new ProjectCloudPolicyAppPolicyAppsManifestJsonContainerDetailList(this, "container_detail", false);
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
  private _desc = new ProjectCloudPolicyAppPolicyAppsManifestJsonDescList(this, "desc", false);
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
  private _images = new ProjectCloudPolicyAppPolicyAppsManifestJsonImagesList(this, "images", false);
  public get images() {
    return this._images;
  }

  // interfaces - computed: true, optional: false, required: false
  private _interfaces = new ProjectCloudPolicyAppPolicyAppsManifestJsonInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }

  // module - computed: true, optional: false, required: false
  private _module = new ProjectCloudPolicyAppPolicyAppsManifestJsonModuleList(this, "module", false);
  public get module() {
    return this._module;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // owner - computed: true, optional: false, required: false
  private _owner = new ProjectCloudPolicyAppPolicyAppsManifestJsonOwnerList(this, "owner", false);
  public get owner() {
    return this._owner;
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new ProjectCloudPolicyAppPolicyAppsManifestJsonPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // persistent_runtime_size_bytes - computed: true, optional: false, required: false
  public get persistentRuntimeSizeBytes() {
    return this.getStringAttribute('persistent_runtime_size_bytes');
  }

  // resources - computed: true, optional: false, required: false
  private _resources = new ProjectCloudPolicyAppPolicyAppsManifestJsonResourcesList(this, "resources", false);
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

export class ProjectCloudPolicyAppPolicyAppsManifestJsonList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyAppPolicyAppsManifestJsonOutputReference {
    return new ProjectCloudPolicyAppPolicyAppsManifestJsonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyAppPolicyAppsParentDetail {
}

export function projectCloudPolicyAppPolicyAppsParentDetailToTerraform(struct?: ProjectCloudPolicyAppPolicyAppsParentDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyAppPolicyAppsParentDetailToHclTerraform(struct?: ProjectCloudPolicyAppPolicyAppsParentDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyAppPolicyAppsParentDetailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyAppPolicyAppsParentDetail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyAppPolicyAppsParentDetail | undefined) {
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

export class ProjectCloudPolicyAppPolicyAppsParentDetailList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyAppPolicyAppsParentDetailOutputReference {
    return new ProjectCloudPolicyAppPolicyAppsParentDetailOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyAppPolicyApps {
}

export function projectCloudPolicyAppPolicyAppsToTerraform(struct?: ProjectCloudPolicyAppPolicyApps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyAppPolicyAppsToHclTerraform(struct?: ProjectCloudPolicyAppPolicyApps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyAppPolicyAppsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyAppPolicyApps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyAppPolicyApps | undefined) {
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
  private _interfaces = new ProjectCloudPolicyAppPolicyAppsInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }

  // manifest_json - computed: true, optional: false, required: false
  private _manifestJson = new ProjectCloudPolicyAppPolicyAppsManifestJsonList(this, "manifest_json", false);
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
  private _parentDetail = new ProjectCloudPolicyAppPolicyAppsParentDetailList(this, "parent_detail", false);
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

export class ProjectCloudPolicyAppPolicyAppsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyAppPolicyAppsOutputReference {
    return new ProjectCloudPolicyAppPolicyAppsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyAppPolicy {
}

export function projectCloudPolicyAppPolicyToTerraform(struct?: ProjectCloudPolicyAppPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyAppPolicyToHclTerraform(struct?: ProjectCloudPolicyAppPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyAppPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyAppPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyAppPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // apps - computed: true, optional: false, required: false
  private _apps = new ProjectCloudPolicyAppPolicyAppsList(this, "apps", false);
  public get apps() {
    return this._apps;
  }
}

export class ProjectCloudPolicyAppPolicyList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyAppPolicyOutputReference {
    return new ProjectCloudPolicyAppPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyAttestationPolicy {
}

export function projectCloudPolicyAttestationPolicyToTerraform(struct?: ProjectCloudPolicyAttestationPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyAttestationPolicyToHclTerraform(struct?: ProjectCloudPolicyAttestationPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyAttestationPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyAttestationPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyAttestationPolicy | undefined) {
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

export class ProjectCloudPolicyAttestationPolicyList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyAttestationPolicyOutputReference {
    return new ProjectCloudPolicyAttestationPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollmentGroupCertificateEnrollment {
}

export function projectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollmentGroupCertificateEnrollmentToTerraform(struct?: ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollmentGroupCertificateEnrollment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollmentGroupCertificateEnrollmentToHclTerraform(struct?: ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollmentGroupCertificateEnrollment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollmentGroupCertificateEnrollmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollmentGroupCertificateEnrollment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollmentGroupCertificateEnrollment | undefined) {
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

export class ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollmentGroupCertificateEnrollmentList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollmentGroupCertificateEnrollmentOutputReference {
    return new ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollmentGroupCertificateEnrollmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollment {
}

export function projectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollmentToTerraform(struct?: ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollmentToHclTerraform(struct?: ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group_certificate_enrollment - computed: true, optional: false, required: false
  private _groupCertificateEnrollment = new ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollmentGroupCertificateEnrollmentList(this, "group_certificate_enrollment", false);
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

export class ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollmentList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollmentOutputReference {
    return new ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentGroupSymmetricKeyEnrollment {
}

export function projectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentGroupSymmetricKeyEnrollmentToTerraform(struct?: ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentGroupSymmetricKeyEnrollment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentGroupSymmetricKeyEnrollmentToHclTerraform(struct?: ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentGroupSymmetricKeyEnrollment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentGroupSymmetricKeyEnrollmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentGroupSymmetricKeyEnrollment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentGroupSymmetricKeyEnrollment | undefined) {
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

export class ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentGroupSymmetricKeyEnrollmentList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentGroupSymmetricKeyEnrollmentOutputReference {
    return new ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentGroupSymmetricKeyEnrollmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentIndividualSymmetricKeyEnrollment {
}

export function projectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentIndividualSymmetricKeyEnrollmentToTerraform(struct?: ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentIndividualSymmetricKeyEnrollment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentIndividualSymmetricKeyEnrollmentToHclTerraform(struct?: ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentIndividualSymmetricKeyEnrollment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentIndividualSymmetricKeyEnrollmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentIndividualSymmetricKeyEnrollment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentIndividualSymmetricKeyEnrollment | undefined) {
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

export class ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentIndividualSymmetricKeyEnrollmentList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentIndividualSymmetricKeyEnrollmentOutputReference {
    return new ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentIndividualSymmetricKeyEnrollmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollment {
}

export function projectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentToTerraform(struct?: ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentToHclTerraform(struct?: ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group_symmetric_key_enrollment - computed: true, optional: false, required: false
  private _groupSymmetricKeyEnrollment = new ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentGroupSymmetricKeyEnrollmentList(this, "group_symmetric_key_enrollment", false);
  public get groupSymmetricKeyEnrollment() {
    return this._groupSymmetricKeyEnrollment;
  }

  // individual_symmetric_key_enrollment - computed: true, optional: false, required: false
  private _individualSymmetricKeyEnrollment = new ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentIndividualSymmetricKeyEnrollmentList(this, "individual_symmetric_key_enrollment", false);
  public get individualSymmetricKeyEnrollment() {
    return this._individualSymmetricKeyEnrollment;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentOutputReference {
    return new ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentTpmEnrollment {
}

export function projectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentTpmEnrollmentToTerraform(struct?: ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentTpmEnrollment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentTpmEnrollmentToHclTerraform(struct?: ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentTpmEnrollment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentTpmEnrollmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentTpmEnrollment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentTpmEnrollment | undefined) {
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

export class ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentTpmEnrollmentList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentTpmEnrollmentOutputReference {
    return new ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentTpmEnrollmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollment {
}

export function projectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentToTerraform(struct?: ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentToHclTerraform(struct?: ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollment | undefined) {
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
  private _certificateEnrollment = new ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentCertificateEnrollmentList(this, "certificate_enrollment", false);
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
  private _symmetricKeyEnrollment = new ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentSymmetricKeyEnrollmentList(this, "symmetric_key_enrollment", false);
  public get symmetricKeyEnrollment() {
    return this._symmetricKeyEnrollment;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // tpm_enrollment - computed: true, optional: false, required: false
  private _tpmEnrollment = new ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentTpmEnrollmentList(this, "tpm_enrollment", false);
  public get tpmEnrollment() {
    return this._tpmEnrollment;
  }
}

export class ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentOutputReference {
    return new ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetailSKU {
}

export function projectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetailSKUToTerraform(struct?: ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetailSKU): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetailSKUToHclTerraform(struct?: ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetailSKU): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetailSKUOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetailSKU | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetailSKU | undefined) {
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

export class ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetailSKUList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetailSKUOutputReference {
    return new ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetailSKUOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetail {
}

export function projectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetailToTerraform(struct?: ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetailToHclTerraform(struct?: ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetail | undefined) {
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
  private _sKU = new ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetailSKUList(this, "s_k_u", false);
  public get sKU() {
    return this._sKU;
  }

  // subscription_id - computed: true, optional: false, required: false
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
}

export class ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetailList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetailOutputReference {
    return new ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetailOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsService {
}

export function projectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceToTerraform(struct?: ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceToHclTerraform(struct?: ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsService | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enrollment - computed: true, optional: false, required: false
  private _enrollment = new ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceEnrollmentList(this, "enrollment", false);
  public get enrollment() {
    return this._enrollment;
  }

  // service_detail - computed: true, optional: false, required: false
  private _serviceDetail = new ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceServiceDetailList(this, "service_detail", false);
  public get serviceDetail() {
    return this._serviceDetail;
  }
}

export class ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceOutputReference {
    return new ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetailSKU {
}

export function projectCloudPolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetailSKUToTerraform(struct?: ProjectCloudPolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetailSKU): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetailSKUToHclTerraform(struct?: ProjectCloudPolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetailSKU): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetailSKUOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetailSKU | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetailSKU | undefined) {
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

export class ProjectCloudPolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetailSKUList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetailSKUOutputReference {
    return new ProjectCloudPolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetailSKUOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetail {
}

export function projectCloudPolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetailToTerraform(struct?: ProjectCloudPolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetailToHclTerraform(struct?: ProjectCloudPolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetail | undefined) {
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
  private _sKU = new ProjectCloudPolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetailSKUList(this, "s_k_u", false);
  public get sKU() {
    return this._sKU;
  }

  // subscription_id - computed: true, optional: false, required: false
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
}

export class ProjectCloudPolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetailList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetailOutputReference {
    return new ProjectCloudPolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetailOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyAzurePolicyAzureResourceAndServicesIotHubService {
}

export function projectCloudPolicyAzurePolicyAzureResourceAndServicesIotHubServiceToTerraform(struct?: ProjectCloudPolicyAzurePolicyAzureResourceAndServicesIotHubService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyAzurePolicyAzureResourceAndServicesIotHubServiceToHclTerraform(struct?: ProjectCloudPolicyAzurePolicyAzureResourceAndServicesIotHubService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyAzurePolicyAzureResourceAndServicesIotHubServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyAzurePolicyAzureResourceAndServicesIotHubService | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyAzurePolicyAzureResourceAndServicesIotHubService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // service_detail - computed: true, optional: false, required: false
  private _serviceDetail = new ProjectCloudPolicyAzurePolicyAzureResourceAndServicesIotHubServiceServiceDetailList(this, "service_detail", false);
  public get serviceDetail() {
    return this._serviceDetail;
  }
}

export class ProjectCloudPolicyAzurePolicyAzureResourceAndServicesIotHubServiceList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyAzurePolicyAzureResourceAndServicesIotHubServiceOutputReference {
    return new ProjectCloudPolicyAzurePolicyAzureResourceAndServicesIotHubServiceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyAzurePolicyAzureResourceAndServicesResourceGroup {
}

export function projectCloudPolicyAzurePolicyAzureResourceAndServicesResourceGroupToTerraform(struct?: ProjectCloudPolicyAzurePolicyAzureResourceAndServicesResourceGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyAzurePolicyAzureResourceAndServicesResourceGroupToHclTerraform(struct?: ProjectCloudPolicyAzurePolicyAzureResourceAndServicesResourceGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyAzurePolicyAzureResourceAndServicesResourceGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyAzurePolicyAzureResourceAndServicesResourceGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyAzurePolicyAzureResourceAndServicesResourceGroup | undefined) {
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

export class ProjectCloudPolicyAzurePolicyAzureResourceAndServicesResourceGroupList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyAzurePolicyAzureResourceAndServicesResourceGroupOutputReference {
    return new ProjectCloudPolicyAzurePolicyAzureResourceAndServicesResourceGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyAzurePolicyAzureResourceAndServices {
}

export function projectCloudPolicyAzurePolicyAzureResourceAndServicesToTerraform(struct?: ProjectCloudPolicyAzurePolicyAzureResourceAndServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyAzurePolicyAzureResourceAndServicesToHclTerraform(struct?: ProjectCloudPolicyAzurePolicyAzureResourceAndServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyAzurePolicyAzureResourceAndServicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyAzurePolicyAzureResourceAndServices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyAzurePolicyAzureResourceAndServices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dps_service - computed: true, optional: false, required: false
  private _dpsService = new ProjectCloudPolicyAzurePolicyAzureResourceAndServicesDpsServiceList(this, "dps_service", false);
  public get dpsService() {
    return this._dpsService;
  }

  // iot_hub_service - computed: true, optional: false, required: false
  private _iotHubService = new ProjectCloudPolicyAzurePolicyAzureResourceAndServicesIotHubServiceList(this, "iot_hub_service", false);
  public get iotHubService() {
    return this._iotHubService;
  }

  // resource_group - computed: true, optional: false, required: false
  private _resourceGroup = new ProjectCloudPolicyAzurePolicyAzureResourceAndServicesResourceGroupList(this, "resource_group", false);
  public get resourceGroup() {
    return this._resourceGroup;
  }
}

export class ProjectCloudPolicyAzurePolicyAzureResourceAndServicesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyAzurePolicyAzureResourceAndServicesOutputReference {
    return new ProjectCloudPolicyAzurePolicyAzureResourceAndServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyAzurePolicyCertificateEcdsaEncryption {
}

export function projectCloudPolicyAzurePolicyCertificateEcdsaEncryptionToTerraform(struct?: ProjectCloudPolicyAzurePolicyCertificateEcdsaEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyAzurePolicyCertificateEcdsaEncryptionToHclTerraform(struct?: ProjectCloudPolicyAzurePolicyCertificateEcdsaEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyAzurePolicyCertificateEcdsaEncryptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyAzurePolicyCertificateEcdsaEncryption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyAzurePolicyCertificateEcdsaEncryption | undefined) {
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

export class ProjectCloudPolicyAzurePolicyCertificateEcdsaEncryptionList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyAzurePolicyCertificateEcdsaEncryptionOutputReference {
    return new ProjectCloudPolicyAzurePolicyCertificateEcdsaEncryptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyAzurePolicyCertificateIssuer {
}

export function projectCloudPolicyAzurePolicyCertificateIssuerToTerraform(struct?: ProjectCloudPolicyAzurePolicyCertificateIssuer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyAzurePolicyCertificateIssuerToHclTerraform(struct?: ProjectCloudPolicyAzurePolicyCertificateIssuer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyAzurePolicyCertificateIssuerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyAzurePolicyCertificateIssuer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyAzurePolicyCertificateIssuer | undefined) {
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

export class ProjectCloudPolicyAzurePolicyCertificateIssuerList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyAzurePolicyCertificateIssuerOutputReference {
    return new ProjectCloudPolicyAzurePolicyCertificateIssuerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyAzurePolicyCertificateRsaEcryption {
}

export function projectCloudPolicyAzurePolicyCertificateRsaEcryptionToTerraform(struct?: ProjectCloudPolicyAzurePolicyCertificateRsaEcryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyAzurePolicyCertificateRsaEcryptionToHclTerraform(struct?: ProjectCloudPolicyAzurePolicyCertificateRsaEcryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyAzurePolicyCertificateRsaEcryptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyAzurePolicyCertificateRsaEcryption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyAzurePolicyCertificateRsaEcryption | undefined) {
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

export class ProjectCloudPolicyAzurePolicyCertificateRsaEcryptionList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyAzurePolicyCertificateRsaEcryptionOutputReference {
    return new ProjectCloudPolicyAzurePolicyCertificateRsaEcryptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyAzurePolicyCertificateSanValues {
}

export function projectCloudPolicyAzurePolicyCertificateSanValuesToTerraform(struct?: ProjectCloudPolicyAzurePolicyCertificateSanValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyAzurePolicyCertificateSanValuesToHclTerraform(struct?: ProjectCloudPolicyAzurePolicyCertificateSanValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyAzurePolicyCertificateSanValuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyAzurePolicyCertificateSanValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyAzurePolicyCertificateSanValues | undefined) {
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

export class ProjectCloudPolicyAzurePolicyCertificateSanValuesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyAzurePolicyCertificateSanValuesOutputReference {
    return new ProjectCloudPolicyAzurePolicyCertificateSanValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyAzurePolicyCertificateSubject {
}

export function projectCloudPolicyAzurePolicyCertificateSubjectToTerraform(struct?: ProjectCloudPolicyAzurePolicyCertificateSubject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyAzurePolicyCertificateSubjectToHclTerraform(struct?: ProjectCloudPolicyAzurePolicyCertificateSubject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyAzurePolicyCertificateSubjectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyAzurePolicyCertificateSubject | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyAzurePolicyCertificateSubject | undefined) {
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

export class ProjectCloudPolicyAzurePolicyCertificateSubjectList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyAzurePolicyCertificateSubjectOutputReference {
    return new ProjectCloudPolicyAzurePolicyCertificateSubjectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyAzurePolicyCertificate {
}

export function projectCloudPolicyAzurePolicyCertificateToTerraform(struct?: ProjectCloudPolicyAzurePolicyCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyAzurePolicyCertificateToHclTerraform(struct?: ProjectCloudPolicyAzurePolicyCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyAzurePolicyCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyAzurePolicyCertificate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyAzurePolicyCertificate | undefined) {
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
  private _ecdsaEncryption = new ProjectCloudPolicyAzurePolicyCertificateEcdsaEncryptionList(this, "ecdsa_encryption", false);
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
  private _issuer = new ProjectCloudPolicyAzurePolicyCertificateIssuerList(this, "issuer", false);
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
  private _rsaEcryption = new ProjectCloudPolicyAzurePolicyCertificateRsaEcryptionList(this, "rsa_ecryption", false);
  public get rsaEcryption() {
    return this._rsaEcryption;
  }

  // san_values - computed: true, optional: false, required: false
  private _sanValues = new ProjectCloudPolicyAzurePolicyCertificateSanValuesList(this, "san_values", false);
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
  private _subject = new ProjectCloudPolicyAzurePolicyCertificateSubjectList(this, "subject", false);
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

export class ProjectCloudPolicyAzurePolicyCertificateList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyAzurePolicyCertificateOutputReference {
    return new ProjectCloudPolicyAzurePolicyCertificateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyAzurePolicy {
}

export function projectCloudPolicyAzurePolicyToTerraform(struct?: ProjectCloudPolicyAzurePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyAzurePolicyToHclTerraform(struct?: ProjectCloudPolicyAzurePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyAzurePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyAzurePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyAzurePolicy | undefined) {
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
  private _azureResourceAndServices = new ProjectCloudPolicyAzurePolicyAzureResourceAndServicesList(this, "azure_resource_and_services", false);
  public get azureResourceAndServices() {
    return this._azureResourceAndServices;
  }

  // certificate - computed: true, optional: false, required: false
  private _certificate = new ProjectCloudPolicyAzurePolicyCertificateList(this, "certificate", false);
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

export class ProjectCloudPolicyAzurePolicyList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyAzurePolicyOutputReference {
    return new ProjectCloudPolicyAzurePolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyClusterPolicyClusterConfig {
}

export function projectCloudPolicyClusterPolicyClusterConfigToTerraform(struct?: ProjectCloudPolicyClusterPolicyClusterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyClusterPolicyClusterConfigToHclTerraform(struct?: ProjectCloudPolicyClusterPolicyClusterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyClusterPolicyClusterConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyClusterPolicyClusterConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyClusterPolicyClusterConfig | undefined) {
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

export class ProjectCloudPolicyClusterPolicyClusterConfigList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyClusterPolicyClusterConfigOutputReference {
    return new ProjectCloudPolicyClusterPolicyClusterConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyClusterPolicy {
}

export function projectCloudPolicyClusterPolicyToTerraform(struct?: ProjectCloudPolicyClusterPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyClusterPolicyToHclTerraform(struct?: ProjectCloudPolicyClusterPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyClusterPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyClusterPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyClusterPolicy | undefined) {
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
  private _clusterConfig = new ProjectCloudPolicyClusterPolicyClusterConfigList(this, "cluster_config", false);
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

export class ProjectCloudPolicyClusterPolicyList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyClusterPolicyOutputReference {
    return new ProjectCloudPolicyClusterPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyConfigurationLockPolicy {
}

export function projectCloudPolicyConfigurationLockPolicyToTerraform(struct?: ProjectCloudPolicyConfigurationLockPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyConfigurationLockPolicyToHclTerraform(struct?: ProjectCloudPolicyConfigurationLockPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyConfigurationLockPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyConfigurationLockPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyConfigurationLockPolicy | undefined) {
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

export class ProjectCloudPolicyConfigurationLockPolicyList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyConfigurationLockPolicyOutputReference {
    return new ProjectCloudPolicyConfigurationLockPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyEdgeviewPolicyEdgeviewcfgAppPolicy {
}

export function projectCloudPolicyEdgeviewPolicyEdgeviewcfgAppPolicyToTerraform(struct?: ProjectCloudPolicyEdgeviewPolicyEdgeviewcfgAppPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyEdgeviewPolicyEdgeviewcfgAppPolicyToHclTerraform(struct?: ProjectCloudPolicyEdgeviewPolicyEdgeviewcfgAppPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyEdgeviewPolicyEdgeviewcfgAppPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyEdgeviewPolicyEdgeviewcfgAppPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyEdgeviewPolicyEdgeviewcfgAppPolicy | undefined) {
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

export class ProjectCloudPolicyEdgeviewPolicyEdgeviewcfgAppPolicyList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyEdgeviewPolicyEdgeviewcfgAppPolicyOutputReference {
    return new ProjectCloudPolicyEdgeviewPolicyEdgeviewcfgAppPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyEdgeviewPolicyEdgeviewcfgDevPolicy {
}

export function projectCloudPolicyEdgeviewPolicyEdgeviewcfgDevPolicyToTerraform(struct?: ProjectCloudPolicyEdgeviewPolicyEdgeviewcfgDevPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyEdgeviewPolicyEdgeviewcfgDevPolicyToHclTerraform(struct?: ProjectCloudPolicyEdgeviewPolicyEdgeviewcfgDevPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyEdgeviewPolicyEdgeviewcfgDevPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyEdgeviewPolicyEdgeviewcfgDevPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyEdgeviewPolicyEdgeviewcfgDevPolicy | undefined) {
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

export class ProjectCloudPolicyEdgeviewPolicyEdgeviewcfgDevPolicyList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyEdgeviewPolicyEdgeviewcfgDevPolicyOutputReference {
    return new ProjectCloudPolicyEdgeviewPolicyEdgeviewcfgDevPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyEdgeviewPolicyEdgeviewcfgExtPolicy {
}

export function projectCloudPolicyEdgeviewPolicyEdgeviewcfgExtPolicyToTerraform(struct?: ProjectCloudPolicyEdgeviewPolicyEdgeviewcfgExtPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyEdgeviewPolicyEdgeviewcfgExtPolicyToHclTerraform(struct?: ProjectCloudPolicyEdgeviewPolicyEdgeviewcfgExtPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyEdgeviewPolicyEdgeviewcfgExtPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyEdgeviewPolicyEdgeviewcfgExtPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyEdgeviewPolicyEdgeviewcfgExtPolicy | undefined) {
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

export class ProjectCloudPolicyEdgeviewPolicyEdgeviewcfgExtPolicyList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyEdgeviewPolicyEdgeviewcfgExtPolicyOutputReference {
    return new ProjectCloudPolicyEdgeviewPolicyEdgeviewcfgExtPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyEdgeviewPolicyEdgeviewcfgJwtInfo {
}

export function projectCloudPolicyEdgeviewPolicyEdgeviewcfgJwtInfoToTerraform(struct?: ProjectCloudPolicyEdgeviewPolicyEdgeviewcfgJwtInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyEdgeviewPolicyEdgeviewcfgJwtInfoToHclTerraform(struct?: ProjectCloudPolicyEdgeviewPolicyEdgeviewcfgJwtInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyEdgeviewPolicyEdgeviewcfgJwtInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyEdgeviewPolicyEdgeviewcfgJwtInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyEdgeviewPolicyEdgeviewcfgJwtInfo | undefined) {
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

export class ProjectCloudPolicyEdgeviewPolicyEdgeviewcfgJwtInfoList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyEdgeviewPolicyEdgeviewcfgJwtInfoOutputReference {
    return new ProjectCloudPolicyEdgeviewPolicyEdgeviewcfgJwtInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyEdgeviewPolicyEdgeviewcfg {
}

export function projectCloudPolicyEdgeviewPolicyEdgeviewcfgToTerraform(struct?: ProjectCloudPolicyEdgeviewPolicyEdgeviewcfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyEdgeviewPolicyEdgeviewcfgToHclTerraform(struct?: ProjectCloudPolicyEdgeviewPolicyEdgeviewcfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyEdgeviewPolicyEdgeviewcfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyEdgeviewPolicyEdgeviewcfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyEdgeviewPolicyEdgeviewcfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // app_policy - computed: true, optional: false, required: false
  private _appPolicy = new ProjectCloudPolicyEdgeviewPolicyEdgeviewcfgAppPolicyList(this, "app_policy", false);
  public get appPolicy() {
    return this._appPolicy;
  }

  // dev_policy - computed: true, optional: false, required: false
  private _devPolicy = new ProjectCloudPolicyEdgeviewPolicyEdgeviewcfgDevPolicyList(this, "dev_policy", false);
  public get devPolicy() {
    return this._devPolicy;
  }

  // ext_policy - computed: true, optional: false, required: false
  private _extPolicy = new ProjectCloudPolicyEdgeviewPolicyEdgeviewcfgExtPolicyList(this, "ext_policy", false);
  public get extPolicy() {
    return this._extPolicy;
  }

  // generation_id - computed: true, optional: false, required: false
  public get generationId() {
    return this.getNumberAttribute('generation_id');
  }

  // jwt_info - computed: true, optional: false, required: false
  private _jwtInfo = new ProjectCloudPolicyEdgeviewPolicyEdgeviewcfgJwtInfoList(this, "jwt_info", false);
  public get jwtInfo() {
    return this._jwtInfo;
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }
}

export class ProjectCloudPolicyEdgeviewPolicyEdgeviewcfgList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyEdgeviewPolicyEdgeviewcfgOutputReference {
    return new ProjectCloudPolicyEdgeviewPolicyEdgeviewcfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyEdgeviewPolicy {
}

export function projectCloudPolicyEdgeviewPolicyToTerraform(struct?: ProjectCloudPolicyEdgeviewPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyEdgeviewPolicyToHclTerraform(struct?: ProjectCloudPolicyEdgeviewPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyEdgeviewPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyEdgeviewPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyEdgeviewPolicy | undefined) {
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
  private _edgeviewcfg = new ProjectCloudPolicyEdgeviewPolicyEdgeviewcfgList(this, "edgeviewcfg", false);
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

export class ProjectCloudPolicyEdgeviewPolicyList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyEdgeviewPolicyOutputReference {
    return new ProjectCloudPolicyEdgeviewPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyLocalOperatorConsolePolicy {
}

export function projectCloudPolicyLocalOperatorConsolePolicyToTerraform(struct?: ProjectCloudPolicyLocalOperatorConsolePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyLocalOperatorConsolePolicyToHclTerraform(struct?: ProjectCloudPolicyLocalOperatorConsolePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyLocalOperatorConsolePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyLocalOperatorConsolePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyLocalOperatorConsolePolicy | undefined) {
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

export class ProjectCloudPolicyLocalOperatorConsolePolicyList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyLocalOperatorConsolePolicyOutputReference {
    return new ProjectCloudPolicyLocalOperatorConsolePolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyModulePolicyAppsInterfacesAclsActionsMapparams {
}

export function projectCloudPolicyModulePolicyAppsInterfacesAclsActionsMapparamsToTerraform(struct?: ProjectCloudPolicyModulePolicyAppsInterfacesAclsActionsMapparams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyModulePolicyAppsInterfacesAclsActionsMapparamsToHclTerraform(struct?: ProjectCloudPolicyModulePolicyAppsInterfacesAclsActionsMapparams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyModulePolicyAppsInterfacesAclsActionsMapparamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyModulePolicyAppsInterfacesAclsActionsMapparams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyModulePolicyAppsInterfacesAclsActionsMapparams | undefined) {
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

export class ProjectCloudPolicyModulePolicyAppsInterfacesAclsActionsMapparamsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyModulePolicyAppsInterfacesAclsActionsMapparamsOutputReference {
    return new ProjectCloudPolicyModulePolicyAppsInterfacesAclsActionsMapparamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyModulePolicyAppsInterfacesAclsActions {
}

export function projectCloudPolicyModulePolicyAppsInterfacesAclsActionsToTerraform(struct?: ProjectCloudPolicyModulePolicyAppsInterfacesAclsActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyModulePolicyAppsInterfacesAclsActionsToHclTerraform(struct?: ProjectCloudPolicyModulePolicyAppsInterfacesAclsActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyModulePolicyAppsInterfacesAclsActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyModulePolicyAppsInterfacesAclsActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyModulePolicyAppsInterfacesAclsActions | undefined) {
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
  private _mapparams = new ProjectCloudPolicyModulePolicyAppsInterfacesAclsActionsMapparamsList(this, "mapparams", false);
  public get mapparams() {
    return this._mapparams;
  }

  // portmap - computed: true, optional: false, required: false
  public get portmap() {
    return this.getBooleanAttribute('portmap');
  }
}

export class ProjectCloudPolicyModulePolicyAppsInterfacesAclsActionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyModulePolicyAppsInterfacesAclsActionsOutputReference {
    return new ProjectCloudPolicyModulePolicyAppsInterfacesAclsActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyModulePolicyAppsInterfacesAclsMatches {
}

export function projectCloudPolicyModulePolicyAppsInterfacesAclsMatchesToTerraform(struct?: ProjectCloudPolicyModulePolicyAppsInterfacesAclsMatches): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyModulePolicyAppsInterfacesAclsMatchesToHclTerraform(struct?: ProjectCloudPolicyModulePolicyAppsInterfacesAclsMatches): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyModulePolicyAppsInterfacesAclsMatchesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyModulePolicyAppsInterfacesAclsMatches | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyModulePolicyAppsInterfacesAclsMatches | undefined) {
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

export class ProjectCloudPolicyModulePolicyAppsInterfacesAclsMatchesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyModulePolicyAppsInterfacesAclsMatchesOutputReference {
    return new ProjectCloudPolicyModulePolicyAppsInterfacesAclsMatchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyModulePolicyAppsInterfacesAcls {
}

export function projectCloudPolicyModulePolicyAppsInterfacesAclsToTerraform(struct?: ProjectCloudPolicyModulePolicyAppsInterfacesAcls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyModulePolicyAppsInterfacesAclsToHclTerraform(struct?: ProjectCloudPolicyModulePolicyAppsInterfacesAcls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyModulePolicyAppsInterfacesAclsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyModulePolicyAppsInterfacesAcls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyModulePolicyAppsInterfacesAcls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // actions - computed: true, optional: false, required: false
  private _actions = new ProjectCloudPolicyModulePolicyAppsInterfacesAclsActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // matches - computed: true, optional: false, required: false
  private _matches = new ProjectCloudPolicyModulePolicyAppsInterfacesAclsMatchesList(this, "matches", false);
  public get matches() {
    return this._matches;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class ProjectCloudPolicyModulePolicyAppsInterfacesAclsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyModulePolicyAppsInterfacesAclsOutputReference {
    return new ProjectCloudPolicyModulePolicyAppsInterfacesAclsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyModulePolicyAppsInterfacesEidregisterLispMapServers {
}

export function projectCloudPolicyModulePolicyAppsInterfacesEidregisterLispMapServersToTerraform(struct?: ProjectCloudPolicyModulePolicyAppsInterfacesEidregisterLispMapServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyModulePolicyAppsInterfacesEidregisterLispMapServersToHclTerraform(struct?: ProjectCloudPolicyModulePolicyAppsInterfacesEidregisterLispMapServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyModulePolicyAppsInterfacesEidregisterLispMapServersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyModulePolicyAppsInterfacesEidregisterLispMapServers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyModulePolicyAppsInterfacesEidregisterLispMapServers | undefined) {
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

export class ProjectCloudPolicyModulePolicyAppsInterfacesEidregisterLispMapServersList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyModulePolicyAppsInterfacesEidregisterLispMapServersOutputReference {
    return new ProjectCloudPolicyModulePolicyAppsInterfacesEidregisterLispMapServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyModulePolicyAppsInterfacesEidregister {
}

export function projectCloudPolicyModulePolicyAppsInterfacesEidregisterToTerraform(struct?: ProjectCloudPolicyModulePolicyAppsInterfacesEidregister): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyModulePolicyAppsInterfacesEidregisterToHclTerraform(struct?: ProjectCloudPolicyModulePolicyAppsInterfacesEidregister): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyModulePolicyAppsInterfacesEidregisterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyModulePolicyAppsInterfacesEidregister | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyModulePolicyAppsInterfacesEidregister | undefined) {
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
  private _lispMapServers = new ProjectCloudPolicyModulePolicyAppsInterfacesEidregisterLispMapServersList(this, "lisp_map_servers", false);
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

export class ProjectCloudPolicyModulePolicyAppsInterfacesEidregisterList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyModulePolicyAppsInterfacesEidregisterOutputReference {
    return new ProjectCloudPolicyModulePolicyAppsInterfacesEidregisterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyModulePolicyAppsInterfacesIo {
}

export function projectCloudPolicyModulePolicyAppsInterfacesIoToTerraform(struct?: ProjectCloudPolicyModulePolicyAppsInterfacesIo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyModulePolicyAppsInterfacesIoToHclTerraform(struct?: ProjectCloudPolicyModulePolicyAppsInterfacesIo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyModulePolicyAppsInterfacesIoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyModulePolicyAppsInterfacesIo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyModulePolicyAppsInterfacesIo | undefined) {
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

export class ProjectCloudPolicyModulePolicyAppsInterfacesIoList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyModulePolicyAppsInterfacesIoOutputReference {
    return new ProjectCloudPolicyModulePolicyAppsInterfacesIoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyModulePolicyAppsInterfaces {
}

export function projectCloudPolicyModulePolicyAppsInterfacesToTerraform(struct?: ProjectCloudPolicyModulePolicyAppsInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyModulePolicyAppsInterfacesToHclTerraform(struct?: ProjectCloudPolicyModulePolicyAppsInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyModulePolicyAppsInterfacesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyModulePolicyAppsInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyModulePolicyAppsInterfaces | undefined) {
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
  private _acls = new ProjectCloudPolicyModulePolicyAppsInterfacesAclsList(this, "acls", false);
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
  private _eidregister = new ProjectCloudPolicyModulePolicyAppsInterfacesEidregisterList(this, "eidregister", false);
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
  private _io = new ProjectCloudPolicyModulePolicyAppsInterfacesIoList(this, "io", false);
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

export class ProjectCloudPolicyModulePolicyAppsInterfacesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyModulePolicyAppsInterfacesOutputReference {
    return new ProjectCloudPolicyModulePolicyAppsInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsCondition {
}

export function projectCloudPolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsConditionToTerraform(struct?: ProjectCloudPolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsConditionToHclTerraform(struct?: ProjectCloudPolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsCondition | undefined) {
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

export class ProjectCloudPolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsConditionList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsConditionOutputReference {
    return new ProjectCloudPolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptions {
}

export function projectCloudPolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsToTerraform(struct?: ProjectCloudPolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsToHclTerraform(struct?: ProjectCloudPolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptions | undefined) {
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

export class ProjectCloudPolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsOutputReference {
    return new ProjectCloudPolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariables {
}

export function projectCloudPolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesToTerraform(struct?: ProjectCloudPolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesToHclTerraform(struct?: ProjectCloudPolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariables | undefined) {
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
  private _options = new ProjectCloudPolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsList(this, "options", false);
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

export class ProjectCloudPolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesOutputReference {
    return new ProjectCloudPolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroups {
}

export function projectCloudPolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsToTerraform(struct?: ProjectCloudPolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsToHclTerraform(struct?: ProjectCloudPolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // condition - computed: true, optional: false, required: false
  private _condition = new ProjectCloudPolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsConditionList(this, "condition", false);
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
  private _variables = new ProjectCloudPolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesList(this, "variables", false);
  public get variables() {
    return this._variables;
  }
}

export class ProjectCloudPolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsOutputReference {
    return new ProjectCloudPolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyModulePolicyAppsManifestJsonConfigurationCustomConfig {
}

export function projectCloudPolicyModulePolicyAppsManifestJsonConfigurationCustomConfigToTerraform(struct?: ProjectCloudPolicyModulePolicyAppsManifestJsonConfigurationCustomConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyModulePolicyAppsManifestJsonConfigurationCustomConfigToHclTerraform(struct?: ProjectCloudPolicyModulePolicyAppsManifestJsonConfigurationCustomConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyModulePolicyAppsManifestJsonConfigurationCustomConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyModulePolicyAppsManifestJsonConfigurationCustomConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyModulePolicyAppsManifestJsonConfigurationCustomConfig | undefined) {
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
  private _variableGroups = new ProjectCloudPolicyModulePolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsList(this, "variable_groups", false);
  public get variableGroups() {
    return this._variableGroups;
  }
}

export class ProjectCloudPolicyModulePolicyAppsManifestJsonConfigurationCustomConfigList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyModulePolicyAppsManifestJsonConfigurationCustomConfigOutputReference {
    return new ProjectCloudPolicyModulePolicyAppsManifestJsonConfigurationCustomConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyModulePolicyAppsManifestJsonConfiguration {
}

export function projectCloudPolicyModulePolicyAppsManifestJsonConfigurationToTerraform(struct?: ProjectCloudPolicyModulePolicyAppsManifestJsonConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyModulePolicyAppsManifestJsonConfigurationToHclTerraform(struct?: ProjectCloudPolicyModulePolicyAppsManifestJsonConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyModulePolicyAppsManifestJsonConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyModulePolicyAppsManifestJsonConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyModulePolicyAppsManifestJsonConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_config - computed: true, optional: false, required: false
  private _customConfig = new ProjectCloudPolicyModulePolicyAppsManifestJsonConfigurationCustomConfigList(this, "custom_config", false);
  public get customConfig() {
    return this._customConfig;
  }
}

export class ProjectCloudPolicyModulePolicyAppsManifestJsonConfigurationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyModulePolicyAppsManifestJsonConfigurationOutputReference {
    return new ProjectCloudPolicyModulePolicyAppsManifestJsonConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyModulePolicyAppsManifestJsonContainerDetail {
}

export function projectCloudPolicyModulePolicyAppsManifestJsonContainerDetailToTerraform(struct?: ProjectCloudPolicyModulePolicyAppsManifestJsonContainerDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyModulePolicyAppsManifestJsonContainerDetailToHclTerraform(struct?: ProjectCloudPolicyModulePolicyAppsManifestJsonContainerDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyModulePolicyAppsManifestJsonContainerDetailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyModulePolicyAppsManifestJsonContainerDetail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyModulePolicyAppsManifestJsonContainerDetail | undefined) {
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

export class ProjectCloudPolicyModulePolicyAppsManifestJsonContainerDetailList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyModulePolicyAppsManifestJsonContainerDetailOutputReference {
    return new ProjectCloudPolicyModulePolicyAppsManifestJsonContainerDetailOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyModulePolicyAppsManifestJsonDesc {
}

export function projectCloudPolicyModulePolicyAppsManifestJsonDescToTerraform(struct?: ProjectCloudPolicyModulePolicyAppsManifestJsonDesc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyModulePolicyAppsManifestJsonDescToHclTerraform(struct?: ProjectCloudPolicyModulePolicyAppsManifestJsonDesc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyModulePolicyAppsManifestJsonDescOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyModulePolicyAppsManifestJsonDesc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyModulePolicyAppsManifestJsonDesc | undefined) {
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

export class ProjectCloudPolicyModulePolicyAppsManifestJsonDescList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyModulePolicyAppsManifestJsonDescOutputReference {
    return new ProjectCloudPolicyModulePolicyAppsManifestJsonDescOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyModulePolicyAppsManifestJsonImagesParams {
}

export function projectCloudPolicyModulePolicyAppsManifestJsonImagesParamsToTerraform(struct?: ProjectCloudPolicyModulePolicyAppsManifestJsonImagesParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyModulePolicyAppsManifestJsonImagesParamsToHclTerraform(struct?: ProjectCloudPolicyModulePolicyAppsManifestJsonImagesParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyModulePolicyAppsManifestJsonImagesParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyModulePolicyAppsManifestJsonImagesParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyModulePolicyAppsManifestJsonImagesParams | undefined) {
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

export class ProjectCloudPolicyModulePolicyAppsManifestJsonImagesParamsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyModulePolicyAppsManifestJsonImagesParamsOutputReference {
    return new ProjectCloudPolicyModulePolicyAppsManifestJsonImagesParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyModulePolicyAppsManifestJsonImages {
}

export function projectCloudPolicyModulePolicyAppsManifestJsonImagesToTerraform(struct?: ProjectCloudPolicyModulePolicyAppsManifestJsonImages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyModulePolicyAppsManifestJsonImagesToHclTerraform(struct?: ProjectCloudPolicyModulePolicyAppsManifestJsonImages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyModulePolicyAppsManifestJsonImagesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyModulePolicyAppsManifestJsonImages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyModulePolicyAppsManifestJsonImages | undefined) {
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
  private _params = new ProjectCloudPolicyModulePolicyAppsManifestJsonImagesParamsList(this, "params", false);
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

export class ProjectCloudPolicyModulePolicyAppsManifestJsonImagesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyModulePolicyAppsManifestJsonImagesOutputReference {
    return new ProjectCloudPolicyModulePolicyAppsManifestJsonImagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyModulePolicyAppsManifestJsonInterfacesAclsActionsLimitValue {
}

export function projectCloudPolicyModulePolicyAppsManifestJsonInterfacesAclsActionsLimitValueToTerraform(struct?: ProjectCloudPolicyModulePolicyAppsManifestJsonInterfacesAclsActionsLimitValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyModulePolicyAppsManifestJsonInterfacesAclsActionsLimitValueToHclTerraform(struct?: ProjectCloudPolicyModulePolicyAppsManifestJsonInterfacesAclsActionsLimitValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyModulePolicyAppsManifestJsonInterfacesAclsActionsLimitValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyModulePolicyAppsManifestJsonInterfacesAclsActionsLimitValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyModulePolicyAppsManifestJsonInterfacesAclsActionsLimitValue | undefined) {
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

export class ProjectCloudPolicyModulePolicyAppsManifestJsonInterfacesAclsActionsLimitValueList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyModulePolicyAppsManifestJsonInterfacesAclsActionsLimitValueOutputReference {
    return new ProjectCloudPolicyModulePolicyAppsManifestJsonInterfacesAclsActionsLimitValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyModulePolicyAppsManifestJsonInterfacesAclsActionsPortmapto {
}

export function projectCloudPolicyModulePolicyAppsManifestJsonInterfacesAclsActionsPortmaptoToTerraform(struct?: ProjectCloudPolicyModulePolicyAppsManifestJsonInterfacesAclsActionsPortmapto): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyModulePolicyAppsManifestJsonInterfacesAclsActionsPortmaptoToHclTerraform(struct?: ProjectCloudPolicyModulePolicyAppsManifestJsonInterfacesAclsActionsPortmapto): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyModulePolicyAppsManifestJsonInterfacesAclsActionsPortmaptoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyModulePolicyAppsManifestJsonInterfacesAclsActionsPortmapto | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyModulePolicyAppsManifestJsonInterfacesAclsActionsPortmapto | undefined) {
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

export class ProjectCloudPolicyModulePolicyAppsManifestJsonInterfacesAclsActionsPortmaptoList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyModulePolicyAppsManifestJsonInterfacesAclsActionsPortmaptoOutputReference {
    return new ProjectCloudPolicyModulePolicyAppsManifestJsonInterfacesAclsActionsPortmaptoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyModulePolicyAppsManifestJsonInterfacesAclsActions {
}

export function projectCloudPolicyModulePolicyAppsManifestJsonInterfacesAclsActionsToTerraform(struct?: ProjectCloudPolicyModulePolicyAppsManifestJsonInterfacesAclsActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyModulePolicyAppsManifestJsonInterfacesAclsActionsToHclTerraform(struct?: ProjectCloudPolicyModulePolicyAppsManifestJsonInterfacesAclsActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyModulePolicyAppsManifestJsonInterfacesAclsActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyModulePolicyAppsManifestJsonInterfacesAclsActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyModulePolicyAppsManifestJsonInterfacesAclsActions | undefined) {
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
  private _limitValue = new ProjectCloudPolicyModulePolicyAppsManifestJsonInterfacesAclsActionsLimitValueList(this, "limit_value", false);
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
  private _portmapto = new ProjectCloudPolicyModulePolicyAppsManifestJsonInterfacesAclsActionsPortmaptoList(this, "portmapto", false);
  public get portmapto() {
    return this._portmapto;
  }
}

export class ProjectCloudPolicyModulePolicyAppsManifestJsonInterfacesAclsActionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyModulePolicyAppsManifestJsonInterfacesAclsActionsOutputReference {
    return new ProjectCloudPolicyModulePolicyAppsManifestJsonInterfacesAclsActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyModulePolicyAppsManifestJsonInterfacesAclsMatches {
}

export function projectCloudPolicyModulePolicyAppsManifestJsonInterfacesAclsMatchesToTerraform(struct?: ProjectCloudPolicyModulePolicyAppsManifestJsonInterfacesAclsMatches): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyModulePolicyAppsManifestJsonInterfacesAclsMatchesToHclTerraform(struct?: ProjectCloudPolicyModulePolicyAppsManifestJsonInterfacesAclsMatches): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyModulePolicyAppsManifestJsonInterfacesAclsMatchesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyModulePolicyAppsManifestJsonInterfacesAclsMatches | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyModulePolicyAppsManifestJsonInterfacesAclsMatches | undefined) {
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

export class ProjectCloudPolicyModulePolicyAppsManifestJsonInterfacesAclsMatchesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyModulePolicyAppsManifestJsonInterfacesAclsMatchesOutputReference {
    return new ProjectCloudPolicyModulePolicyAppsManifestJsonInterfacesAclsMatchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyModulePolicyAppsManifestJsonInterfacesAcls {
}

export function projectCloudPolicyModulePolicyAppsManifestJsonInterfacesAclsToTerraform(struct?: ProjectCloudPolicyModulePolicyAppsManifestJsonInterfacesAcls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyModulePolicyAppsManifestJsonInterfacesAclsToHclTerraform(struct?: ProjectCloudPolicyModulePolicyAppsManifestJsonInterfacesAcls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyModulePolicyAppsManifestJsonInterfacesAclsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyModulePolicyAppsManifestJsonInterfacesAcls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyModulePolicyAppsManifestJsonInterfacesAcls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // actions - computed: true, optional: false, required: false
  private _actions = new ProjectCloudPolicyModulePolicyAppsManifestJsonInterfacesAclsActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }

  // matches - computed: true, optional: false, required: false
  private _matches = new ProjectCloudPolicyModulePolicyAppsManifestJsonInterfacesAclsMatchesList(this, "matches", false);
  public get matches() {
    return this._matches;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class ProjectCloudPolicyModulePolicyAppsManifestJsonInterfacesAclsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyModulePolicyAppsManifestJsonInterfacesAclsOutputReference {
    return new ProjectCloudPolicyModulePolicyAppsManifestJsonInterfacesAclsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyModulePolicyAppsManifestJsonInterfaces {
}

export function projectCloudPolicyModulePolicyAppsManifestJsonInterfacesToTerraform(struct?: ProjectCloudPolicyModulePolicyAppsManifestJsonInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyModulePolicyAppsManifestJsonInterfacesToHclTerraform(struct?: ProjectCloudPolicyModulePolicyAppsManifestJsonInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyModulePolicyAppsManifestJsonInterfacesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyModulePolicyAppsManifestJsonInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyModulePolicyAppsManifestJsonInterfaces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // acls - computed: true, optional: false, required: false
  private _acls = new ProjectCloudPolicyModulePolicyAppsManifestJsonInterfacesAclsList(this, "acls", false);
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

export class ProjectCloudPolicyModulePolicyAppsManifestJsonInterfacesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyModulePolicyAppsManifestJsonInterfacesOutputReference {
    return new ProjectCloudPolicyModulePolicyAppsManifestJsonInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyModulePolicyAppsManifestJsonModule {
}

export function projectCloudPolicyModulePolicyAppsManifestJsonModuleToTerraform(struct?: ProjectCloudPolicyModulePolicyAppsManifestJsonModule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyModulePolicyAppsManifestJsonModuleToHclTerraform(struct?: ProjectCloudPolicyModulePolicyAppsManifestJsonModule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyModulePolicyAppsManifestJsonModuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyModulePolicyAppsManifestJsonModule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyModulePolicyAppsManifestJsonModule | undefined) {
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

export class ProjectCloudPolicyModulePolicyAppsManifestJsonModuleList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyModulePolicyAppsManifestJsonModuleOutputReference {
    return new ProjectCloudPolicyModulePolicyAppsManifestJsonModuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyModulePolicyAppsManifestJsonOwner {
}

export function projectCloudPolicyModulePolicyAppsManifestJsonOwnerToTerraform(struct?: ProjectCloudPolicyModulePolicyAppsManifestJsonOwner): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyModulePolicyAppsManifestJsonOwnerToHclTerraform(struct?: ProjectCloudPolicyModulePolicyAppsManifestJsonOwner): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyModulePolicyAppsManifestJsonOwnerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyModulePolicyAppsManifestJsonOwner | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyModulePolicyAppsManifestJsonOwner | undefined) {
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

export class ProjectCloudPolicyModulePolicyAppsManifestJsonOwnerList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyModulePolicyAppsManifestJsonOwnerOutputReference {
    return new ProjectCloudPolicyModulePolicyAppsManifestJsonOwnerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyModulePolicyAppsManifestJsonPermissions {
}

export function projectCloudPolicyModulePolicyAppsManifestJsonPermissionsToTerraform(struct?: ProjectCloudPolicyModulePolicyAppsManifestJsonPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyModulePolicyAppsManifestJsonPermissionsToHclTerraform(struct?: ProjectCloudPolicyModulePolicyAppsManifestJsonPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyModulePolicyAppsManifestJsonPermissionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyModulePolicyAppsManifestJsonPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyModulePolicyAppsManifestJsonPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}

export class ProjectCloudPolicyModulePolicyAppsManifestJsonPermissionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyModulePolicyAppsManifestJsonPermissionsOutputReference {
    return new ProjectCloudPolicyModulePolicyAppsManifestJsonPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyModulePolicyAppsManifestJsonResources {
}

export function projectCloudPolicyModulePolicyAppsManifestJsonResourcesToTerraform(struct?: ProjectCloudPolicyModulePolicyAppsManifestJsonResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyModulePolicyAppsManifestJsonResourcesToHclTerraform(struct?: ProjectCloudPolicyModulePolicyAppsManifestJsonResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyModulePolicyAppsManifestJsonResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyModulePolicyAppsManifestJsonResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyModulePolicyAppsManifestJsonResources | undefined) {
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

export class ProjectCloudPolicyModulePolicyAppsManifestJsonResourcesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyModulePolicyAppsManifestJsonResourcesOutputReference {
    return new ProjectCloudPolicyModulePolicyAppsManifestJsonResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyModulePolicyAppsManifestJson {
}

export function projectCloudPolicyModulePolicyAppsManifestJsonToTerraform(struct?: ProjectCloudPolicyModulePolicyAppsManifestJson): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyModulePolicyAppsManifestJsonToHclTerraform(struct?: ProjectCloudPolicyModulePolicyAppsManifestJson): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyModulePolicyAppsManifestJsonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyModulePolicyAppsManifestJson | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyModulePolicyAppsManifestJson | undefined) {
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
  private _configuration = new ProjectCloudPolicyModulePolicyAppsManifestJsonConfigurationList(this, "configuration", false);
  public get configuration() {
    return this._configuration;
  }

  // container_detail - computed: true, optional: false, required: false
  private _containerDetail = new ProjectCloudPolicyModulePolicyAppsManifestJsonContainerDetailList(this, "container_detail", false);
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
  private _desc = new ProjectCloudPolicyModulePolicyAppsManifestJsonDescList(this, "desc", false);
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
  private _images = new ProjectCloudPolicyModulePolicyAppsManifestJsonImagesList(this, "images", false);
  public get images() {
    return this._images;
  }

  // interfaces - computed: true, optional: false, required: false
  private _interfaces = new ProjectCloudPolicyModulePolicyAppsManifestJsonInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }

  // module - computed: true, optional: false, required: false
  private _module = new ProjectCloudPolicyModulePolicyAppsManifestJsonModuleList(this, "module", false);
  public get module() {
    return this._module;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // owner - computed: true, optional: false, required: false
  private _owner = new ProjectCloudPolicyModulePolicyAppsManifestJsonOwnerList(this, "owner", false);
  public get owner() {
    return this._owner;
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new ProjectCloudPolicyModulePolicyAppsManifestJsonPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // persistent_runtime_size_bytes - computed: true, optional: false, required: false
  public get persistentRuntimeSizeBytes() {
    return this.getStringAttribute('persistent_runtime_size_bytes');
  }

  // resources - computed: true, optional: false, required: false
  private _resources = new ProjectCloudPolicyModulePolicyAppsManifestJsonResourcesList(this, "resources", false);
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

export class ProjectCloudPolicyModulePolicyAppsManifestJsonList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyModulePolicyAppsManifestJsonOutputReference {
    return new ProjectCloudPolicyModulePolicyAppsManifestJsonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyModulePolicyAppsParentDetail {
}

export function projectCloudPolicyModulePolicyAppsParentDetailToTerraform(struct?: ProjectCloudPolicyModulePolicyAppsParentDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyModulePolicyAppsParentDetailToHclTerraform(struct?: ProjectCloudPolicyModulePolicyAppsParentDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyModulePolicyAppsParentDetailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyModulePolicyAppsParentDetail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyModulePolicyAppsParentDetail | undefined) {
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

export class ProjectCloudPolicyModulePolicyAppsParentDetailList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyModulePolicyAppsParentDetailOutputReference {
    return new ProjectCloudPolicyModulePolicyAppsParentDetailOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyModulePolicyApps {
}

export function projectCloudPolicyModulePolicyAppsToTerraform(struct?: ProjectCloudPolicyModulePolicyApps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyModulePolicyAppsToHclTerraform(struct?: ProjectCloudPolicyModulePolicyApps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyModulePolicyAppsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyModulePolicyApps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyModulePolicyApps | undefined) {
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
  private _interfaces = new ProjectCloudPolicyModulePolicyAppsInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }

  // manifest_json - computed: true, optional: false, required: false
  private _manifestJson = new ProjectCloudPolicyModulePolicyAppsManifestJsonList(this, "manifest_json", false);
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
  private _parentDetail = new ProjectCloudPolicyModulePolicyAppsParentDetailList(this, "parent_detail", false);
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

export class ProjectCloudPolicyModulePolicyAppsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyModulePolicyAppsOutputReference {
    return new ProjectCloudPolicyModulePolicyAppsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyModulePolicyAzureEdgeAgentInterfacesAclsActionsMapparams {
}

export function projectCloudPolicyModulePolicyAzureEdgeAgentInterfacesAclsActionsMapparamsToTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeAgentInterfacesAclsActionsMapparams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyModulePolicyAzureEdgeAgentInterfacesAclsActionsMapparamsToHclTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeAgentInterfacesAclsActionsMapparams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyModulePolicyAzureEdgeAgentInterfacesAclsActionsMapparamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyModulePolicyAzureEdgeAgentInterfacesAclsActionsMapparams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyModulePolicyAzureEdgeAgentInterfacesAclsActionsMapparams | undefined) {
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

export class ProjectCloudPolicyModulePolicyAzureEdgeAgentInterfacesAclsActionsMapparamsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyModulePolicyAzureEdgeAgentInterfacesAclsActionsMapparamsOutputReference {
    return new ProjectCloudPolicyModulePolicyAzureEdgeAgentInterfacesAclsActionsMapparamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyModulePolicyAzureEdgeAgentInterfacesAclsActions {
}

export function projectCloudPolicyModulePolicyAzureEdgeAgentInterfacesAclsActionsToTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeAgentInterfacesAclsActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyModulePolicyAzureEdgeAgentInterfacesAclsActionsToHclTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeAgentInterfacesAclsActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyModulePolicyAzureEdgeAgentInterfacesAclsActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyModulePolicyAzureEdgeAgentInterfacesAclsActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyModulePolicyAzureEdgeAgentInterfacesAclsActions | undefined) {
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
  private _mapparams = new ProjectCloudPolicyModulePolicyAzureEdgeAgentInterfacesAclsActionsMapparamsList(this, "mapparams", false);
  public get mapparams() {
    return this._mapparams;
  }

  // portmap - computed: true, optional: false, required: false
  public get portmap() {
    return this.getBooleanAttribute('portmap');
  }
}

export class ProjectCloudPolicyModulePolicyAzureEdgeAgentInterfacesAclsActionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyModulePolicyAzureEdgeAgentInterfacesAclsActionsOutputReference {
    return new ProjectCloudPolicyModulePolicyAzureEdgeAgentInterfacesAclsActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyModulePolicyAzureEdgeAgentInterfacesAclsMatches {
}

export function projectCloudPolicyModulePolicyAzureEdgeAgentInterfacesAclsMatchesToTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeAgentInterfacesAclsMatches): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyModulePolicyAzureEdgeAgentInterfacesAclsMatchesToHclTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeAgentInterfacesAclsMatches): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyModulePolicyAzureEdgeAgentInterfacesAclsMatchesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyModulePolicyAzureEdgeAgentInterfacesAclsMatches | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyModulePolicyAzureEdgeAgentInterfacesAclsMatches | undefined) {
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

export class ProjectCloudPolicyModulePolicyAzureEdgeAgentInterfacesAclsMatchesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyModulePolicyAzureEdgeAgentInterfacesAclsMatchesOutputReference {
    return new ProjectCloudPolicyModulePolicyAzureEdgeAgentInterfacesAclsMatchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyModulePolicyAzureEdgeAgentInterfacesAcls {
}

export function projectCloudPolicyModulePolicyAzureEdgeAgentInterfacesAclsToTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeAgentInterfacesAcls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyModulePolicyAzureEdgeAgentInterfacesAclsToHclTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeAgentInterfacesAcls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyModulePolicyAzureEdgeAgentInterfacesAclsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyModulePolicyAzureEdgeAgentInterfacesAcls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyModulePolicyAzureEdgeAgentInterfacesAcls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // actions - computed: true, optional: false, required: false
  private _actions = new ProjectCloudPolicyModulePolicyAzureEdgeAgentInterfacesAclsActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // matches - computed: true, optional: false, required: false
  private _matches = new ProjectCloudPolicyModulePolicyAzureEdgeAgentInterfacesAclsMatchesList(this, "matches", false);
  public get matches() {
    return this._matches;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class ProjectCloudPolicyModulePolicyAzureEdgeAgentInterfacesAclsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyModulePolicyAzureEdgeAgentInterfacesAclsOutputReference {
    return new ProjectCloudPolicyModulePolicyAzureEdgeAgentInterfacesAclsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
