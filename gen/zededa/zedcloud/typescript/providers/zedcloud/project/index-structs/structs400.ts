import * as cdktf from 'cdktf';
import { ProjectCloudPolicyModulePolicyAzureEdgeAgentInterfacesAclsList,
ProjectCloudPolicyModulePolicyAppsList,
ProjectCloudPolicyAppPolicyList,
ProjectCloudPolicyAttestationPolicyList,
ProjectCloudPolicyAzurePolicyList,
ProjectCloudPolicyClusterPolicyList,
ProjectCloudPolicyConfigurationLockPolicyList,
ProjectCloudPolicyEdgeviewPolicyList,
ProjectCloudPolicyLocalOperatorConsolePolicyList } from './structs0'
export interface ProjectCloudPolicyModulePolicyAzureEdgeAgentInterfacesEidregisterLispMapServers {
}

export function projectCloudPolicyModulePolicyAzureEdgeAgentInterfacesEidregisterLispMapServersToTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeAgentInterfacesEidregisterLispMapServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyModulePolicyAzureEdgeAgentInterfacesEidregisterLispMapServersToHclTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeAgentInterfacesEidregisterLispMapServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyModulePolicyAzureEdgeAgentInterfacesEidregisterLispMapServersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyModulePolicyAzureEdgeAgentInterfacesEidregisterLispMapServers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyModulePolicyAzureEdgeAgentInterfacesEidregisterLispMapServers | undefined) {
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

export class ProjectCloudPolicyModulePolicyAzureEdgeAgentInterfacesEidregisterLispMapServersList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyModulePolicyAzureEdgeAgentInterfacesEidregisterLispMapServersOutputReference {
    return new ProjectCloudPolicyModulePolicyAzureEdgeAgentInterfacesEidregisterLispMapServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyModulePolicyAzureEdgeAgentInterfacesEidregister {
}

export function projectCloudPolicyModulePolicyAzureEdgeAgentInterfacesEidregisterToTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeAgentInterfacesEidregister): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyModulePolicyAzureEdgeAgentInterfacesEidregisterToHclTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeAgentInterfacesEidregister): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyModulePolicyAzureEdgeAgentInterfacesEidregisterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyModulePolicyAzureEdgeAgentInterfacesEidregister | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyModulePolicyAzureEdgeAgentInterfacesEidregister | undefined) {
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
  private _lispMapServers = new ProjectCloudPolicyModulePolicyAzureEdgeAgentInterfacesEidregisterLispMapServersList(this, "lisp_map_servers", false);
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

export class ProjectCloudPolicyModulePolicyAzureEdgeAgentInterfacesEidregisterList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyModulePolicyAzureEdgeAgentInterfacesEidregisterOutputReference {
    return new ProjectCloudPolicyModulePolicyAzureEdgeAgentInterfacesEidregisterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyModulePolicyAzureEdgeAgentInterfacesIo {
}

export function projectCloudPolicyModulePolicyAzureEdgeAgentInterfacesIoToTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeAgentInterfacesIo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyModulePolicyAzureEdgeAgentInterfacesIoToHclTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeAgentInterfacesIo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyModulePolicyAzureEdgeAgentInterfacesIoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyModulePolicyAzureEdgeAgentInterfacesIo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyModulePolicyAzureEdgeAgentInterfacesIo | undefined) {
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

export class ProjectCloudPolicyModulePolicyAzureEdgeAgentInterfacesIoList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyModulePolicyAzureEdgeAgentInterfacesIoOutputReference {
    return new ProjectCloudPolicyModulePolicyAzureEdgeAgentInterfacesIoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyModulePolicyAzureEdgeAgentInterfaces {
}

export function projectCloudPolicyModulePolicyAzureEdgeAgentInterfacesToTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeAgentInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyModulePolicyAzureEdgeAgentInterfacesToHclTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeAgentInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyModulePolicyAzureEdgeAgentInterfacesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyModulePolicyAzureEdgeAgentInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyModulePolicyAzureEdgeAgentInterfaces | undefined) {
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
  private _acls = new ProjectCloudPolicyModulePolicyAzureEdgeAgentInterfacesAclsList(this, "acls", false);
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
  private _eidregister = new ProjectCloudPolicyModulePolicyAzureEdgeAgentInterfacesEidregisterList(this, "eidregister", false);
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
  private _io = new ProjectCloudPolicyModulePolicyAzureEdgeAgentInterfacesIoList(this, "io", false);
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

export class ProjectCloudPolicyModulePolicyAzureEdgeAgentInterfacesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyModulePolicyAzureEdgeAgentInterfacesOutputReference {
    return new ProjectCloudPolicyModulePolicyAzureEdgeAgentInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsCondition {
}

export function projectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsConditionToTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsConditionToHclTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsCondition | undefined) {
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

export class ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsConditionList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsConditionOutputReference {
    return new ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptions {
}

export function projectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsToTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsToHclTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptions | undefined) {
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

export class ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsOutputReference {
    return new ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsVariables {
}

export function projectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsVariablesToTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsVariables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsVariablesToHclTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsVariables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsVariablesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsVariables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsVariables | undefined) {
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
  private _options = new ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsList(this, "options", false);
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

export class ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsVariablesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsVariablesOutputReference {
    return new ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroups {
}

export function projectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsToTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsToHclTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // condition - computed: true, optional: false, required: false
  private _condition = new ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsConditionList(this, "condition", false);
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
  private _variables = new ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsVariablesList(this, "variables", false);
  public get variables() {
    return this._variables;
  }
}

export class ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsOutputReference {
    return new ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfig {
}

export function projectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigToTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigToHclTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfig | undefined) {
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
  private _variableGroups = new ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigVariableGroupsList(this, "variable_groups", false);
  public get variableGroups() {
    return this._variableGroups;
  }
}

export class ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigOutputReference {
    return new ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonConfiguration {
}

export function projectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationToTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationToHclTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_config - computed: true, optional: false, required: false
  private _customConfig = new ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationCustomConfigList(this, "custom_config", false);
  public get customConfig() {
    return this._customConfig;
  }
}

export class ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationOutputReference {
    return new ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonContainerDetail {
}

export function projectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonContainerDetailToTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonContainerDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonContainerDetailToHclTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonContainerDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonContainerDetailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonContainerDetail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonContainerDetail | undefined) {
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

export class ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonContainerDetailList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonContainerDetailOutputReference {
    return new ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonContainerDetailOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonDesc {
}

export function projectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonDescToTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonDesc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonDescToHclTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonDesc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonDescOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonDesc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonDesc | undefined) {
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

export class ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonDescList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonDescOutputReference {
    return new ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonDescOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonImagesParams {
}

export function projectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonImagesParamsToTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonImagesParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonImagesParamsToHclTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonImagesParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonImagesParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonImagesParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonImagesParams | undefined) {
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

export class ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonImagesParamsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonImagesParamsOutputReference {
    return new ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonImagesParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonImages {
}

export function projectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonImagesToTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonImages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonImagesToHclTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonImages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonImagesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonImages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonImages | undefined) {
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
  private _params = new ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonImagesParamsList(this, "params", false);
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

export class ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonImagesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonImagesOutputReference {
    return new ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonImagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActionsLimitValue {
}

export function projectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActionsLimitValueToTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActionsLimitValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActionsLimitValueToHclTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActionsLimitValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActionsLimitValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActionsLimitValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActionsLimitValue | undefined) {
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

export class ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActionsLimitValueList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActionsLimitValueOutputReference {
    return new ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActionsLimitValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActionsPortmapto {
}

export function projectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActionsPortmaptoToTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActionsPortmapto): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActionsPortmaptoToHclTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActionsPortmapto): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActionsPortmaptoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActionsPortmapto | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActionsPortmapto | undefined) {
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

export class ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActionsPortmaptoList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActionsPortmaptoOutputReference {
    return new ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActionsPortmaptoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActions {
}

export function projectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActionsToTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActionsToHclTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActions | undefined) {
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
  private _limitValue = new ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActionsLimitValueList(this, "limit_value", false);
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
  private _portmapto = new ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActionsPortmaptoList(this, "portmapto", false);
  public get portmapto() {
    return this._portmapto;
  }
}

export class ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActionsOutputReference {
    return new ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsMatches {
}

export function projectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsMatchesToTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsMatches): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsMatchesToHclTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsMatches): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsMatchesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsMatches | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsMatches | undefined) {
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

export class ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsMatchesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsMatchesOutputReference {
    return new ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsMatchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAcls {
}

export function projectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsToTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAcls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsToHclTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAcls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAcls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAcls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // actions - computed: true, optional: false, required: false
  private _actions = new ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }

  // matches - computed: true, optional: false, required: false
  private _matches = new ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsMatchesList(this, "matches", false);
  public get matches() {
    return this._matches;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsOutputReference {
    return new ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonInterfaces {
}

export function projectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesToTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesToHclTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonInterfaces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // acls - computed: true, optional: false, required: false
  private _acls = new ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesAclsList(this, "acls", false);
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

export class ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesOutputReference {
    return new ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonModule {
}

export function projectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonModuleToTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonModule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonModuleToHclTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonModule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonModuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonModule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonModule | undefined) {
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

export class ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonModuleList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonModuleOutputReference {
    return new ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonModuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonOwner {
}

export function projectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonOwnerToTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonOwner): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonOwnerToHclTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonOwner): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonOwnerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonOwner | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonOwner | undefined) {
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

export class ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonOwnerList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonOwnerOutputReference {
    return new ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonOwnerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonPermissions {
}

export function projectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonPermissionsToTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonPermissionsToHclTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonPermissionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}

export class ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonPermissionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonPermissionsOutputReference {
    return new ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonResources {
}

export function projectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonResourcesToTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonResourcesToHclTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonResources | undefined) {
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

export class ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonResourcesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonResourcesOutputReference {
    return new ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJson {
}

export function projectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonToTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJson): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonToHclTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJson): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJson | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJson | undefined) {
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
  private _configuration = new ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonConfigurationList(this, "configuration", false);
  public get configuration() {
    return this._configuration;
  }

  // container_detail - computed: true, optional: false, required: false
  private _containerDetail = new ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonContainerDetailList(this, "container_detail", false);
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
  private _desc = new ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonDescList(this, "desc", false);
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
  private _images = new ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonImagesList(this, "images", false);
  public get images() {
    return this._images;
  }

  // interfaces - computed: true, optional: false, required: false
  private _interfaces = new ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }

  // module - computed: true, optional: false, required: false
  private _module = new ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonModuleList(this, "module", false);
  public get module() {
    return this._module;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // owner - computed: true, optional: false, required: false
  private _owner = new ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonOwnerList(this, "owner", false);
  public get owner() {
    return this._owner;
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // persistent_runtime_size_bytes - computed: true, optional: false, required: false
  public get persistentRuntimeSizeBytes() {
    return this.getStringAttribute('persistent_runtime_size_bytes');
  }

  // resources - computed: true, optional: false, required: false
  private _resources = new ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonResourcesList(this, "resources", false);
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

export class ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonOutputReference {
    return new ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyModulePolicyAzureEdgeAgentParentDetail {
}

export function projectCloudPolicyModulePolicyAzureEdgeAgentParentDetailToTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeAgentParentDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyModulePolicyAzureEdgeAgentParentDetailToHclTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeAgentParentDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyModulePolicyAzureEdgeAgentParentDetailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyModulePolicyAzureEdgeAgentParentDetail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyModulePolicyAzureEdgeAgentParentDetail | undefined) {
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

export class ProjectCloudPolicyModulePolicyAzureEdgeAgentParentDetailList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyModulePolicyAzureEdgeAgentParentDetailOutputReference {
    return new ProjectCloudPolicyModulePolicyAzureEdgeAgentParentDetailOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyModulePolicyAzureEdgeAgent {
}

export function projectCloudPolicyModulePolicyAzureEdgeAgentToTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeAgent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyModulePolicyAzureEdgeAgentToHclTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeAgent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyModulePolicyAzureEdgeAgentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyModulePolicyAzureEdgeAgent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyModulePolicyAzureEdgeAgent | undefined) {
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
  private _interfaces = new ProjectCloudPolicyModulePolicyAzureEdgeAgentInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }

  // manifest_json - computed: true, optional: false, required: false
  private _manifestJson = new ProjectCloudPolicyModulePolicyAzureEdgeAgentManifestJsonList(this, "manifest_json", false);
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
  private _parentDetail = new ProjectCloudPolicyModulePolicyAzureEdgeAgentParentDetailList(this, "parent_detail", false);
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

export class ProjectCloudPolicyModulePolicyAzureEdgeAgentList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyModulePolicyAzureEdgeAgentOutputReference {
    return new ProjectCloudPolicyModulePolicyAzureEdgeAgentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyModulePolicyAzureEdgeHubInterfacesAclsActionsMapparams {
}

export function projectCloudPolicyModulePolicyAzureEdgeHubInterfacesAclsActionsMapparamsToTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeHubInterfacesAclsActionsMapparams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyModulePolicyAzureEdgeHubInterfacesAclsActionsMapparamsToHclTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeHubInterfacesAclsActionsMapparams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyModulePolicyAzureEdgeHubInterfacesAclsActionsMapparamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyModulePolicyAzureEdgeHubInterfacesAclsActionsMapparams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyModulePolicyAzureEdgeHubInterfacesAclsActionsMapparams | undefined) {
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

export class ProjectCloudPolicyModulePolicyAzureEdgeHubInterfacesAclsActionsMapparamsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyModulePolicyAzureEdgeHubInterfacesAclsActionsMapparamsOutputReference {
    return new ProjectCloudPolicyModulePolicyAzureEdgeHubInterfacesAclsActionsMapparamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyModulePolicyAzureEdgeHubInterfacesAclsActions {
}

export function projectCloudPolicyModulePolicyAzureEdgeHubInterfacesAclsActionsToTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeHubInterfacesAclsActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyModulePolicyAzureEdgeHubInterfacesAclsActionsToHclTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeHubInterfacesAclsActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyModulePolicyAzureEdgeHubInterfacesAclsActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyModulePolicyAzureEdgeHubInterfacesAclsActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyModulePolicyAzureEdgeHubInterfacesAclsActions | undefined) {
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
  private _mapparams = new ProjectCloudPolicyModulePolicyAzureEdgeHubInterfacesAclsActionsMapparamsList(this, "mapparams", false);
  public get mapparams() {
    return this._mapparams;
  }

  // portmap - computed: true, optional: false, required: false
  public get portmap() {
    return this.getBooleanAttribute('portmap');
  }
}

export class ProjectCloudPolicyModulePolicyAzureEdgeHubInterfacesAclsActionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyModulePolicyAzureEdgeHubInterfacesAclsActionsOutputReference {
    return new ProjectCloudPolicyModulePolicyAzureEdgeHubInterfacesAclsActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyModulePolicyAzureEdgeHubInterfacesAclsMatches {
}

export function projectCloudPolicyModulePolicyAzureEdgeHubInterfacesAclsMatchesToTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeHubInterfacesAclsMatches): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyModulePolicyAzureEdgeHubInterfacesAclsMatchesToHclTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeHubInterfacesAclsMatches): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyModulePolicyAzureEdgeHubInterfacesAclsMatchesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyModulePolicyAzureEdgeHubInterfacesAclsMatches | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyModulePolicyAzureEdgeHubInterfacesAclsMatches | undefined) {
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

export class ProjectCloudPolicyModulePolicyAzureEdgeHubInterfacesAclsMatchesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyModulePolicyAzureEdgeHubInterfacesAclsMatchesOutputReference {
    return new ProjectCloudPolicyModulePolicyAzureEdgeHubInterfacesAclsMatchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyModulePolicyAzureEdgeHubInterfacesAcls {
}

export function projectCloudPolicyModulePolicyAzureEdgeHubInterfacesAclsToTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeHubInterfacesAcls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyModulePolicyAzureEdgeHubInterfacesAclsToHclTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeHubInterfacesAcls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyModulePolicyAzureEdgeHubInterfacesAclsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyModulePolicyAzureEdgeHubInterfacesAcls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyModulePolicyAzureEdgeHubInterfacesAcls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // actions - computed: true, optional: false, required: false
  private _actions = new ProjectCloudPolicyModulePolicyAzureEdgeHubInterfacesAclsActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // matches - computed: true, optional: false, required: false
  private _matches = new ProjectCloudPolicyModulePolicyAzureEdgeHubInterfacesAclsMatchesList(this, "matches", false);
  public get matches() {
    return this._matches;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class ProjectCloudPolicyModulePolicyAzureEdgeHubInterfacesAclsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyModulePolicyAzureEdgeHubInterfacesAclsOutputReference {
    return new ProjectCloudPolicyModulePolicyAzureEdgeHubInterfacesAclsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyModulePolicyAzureEdgeHubInterfacesEidregisterLispMapServers {
}

export function projectCloudPolicyModulePolicyAzureEdgeHubInterfacesEidregisterLispMapServersToTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeHubInterfacesEidregisterLispMapServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyModulePolicyAzureEdgeHubInterfacesEidregisterLispMapServersToHclTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeHubInterfacesEidregisterLispMapServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyModulePolicyAzureEdgeHubInterfacesEidregisterLispMapServersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyModulePolicyAzureEdgeHubInterfacesEidregisterLispMapServers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyModulePolicyAzureEdgeHubInterfacesEidregisterLispMapServers | undefined) {
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

export class ProjectCloudPolicyModulePolicyAzureEdgeHubInterfacesEidregisterLispMapServersList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyModulePolicyAzureEdgeHubInterfacesEidregisterLispMapServersOutputReference {
    return new ProjectCloudPolicyModulePolicyAzureEdgeHubInterfacesEidregisterLispMapServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyModulePolicyAzureEdgeHubInterfacesEidregister {
}

export function projectCloudPolicyModulePolicyAzureEdgeHubInterfacesEidregisterToTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeHubInterfacesEidregister): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyModulePolicyAzureEdgeHubInterfacesEidregisterToHclTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeHubInterfacesEidregister): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyModulePolicyAzureEdgeHubInterfacesEidregisterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyModulePolicyAzureEdgeHubInterfacesEidregister | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyModulePolicyAzureEdgeHubInterfacesEidregister | undefined) {
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
  private _lispMapServers = new ProjectCloudPolicyModulePolicyAzureEdgeHubInterfacesEidregisterLispMapServersList(this, "lisp_map_servers", false);
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

export class ProjectCloudPolicyModulePolicyAzureEdgeHubInterfacesEidregisterList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyModulePolicyAzureEdgeHubInterfacesEidregisterOutputReference {
    return new ProjectCloudPolicyModulePolicyAzureEdgeHubInterfacesEidregisterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyModulePolicyAzureEdgeHubInterfacesIo {
}

export function projectCloudPolicyModulePolicyAzureEdgeHubInterfacesIoToTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeHubInterfacesIo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyModulePolicyAzureEdgeHubInterfacesIoToHclTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeHubInterfacesIo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyModulePolicyAzureEdgeHubInterfacesIoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyModulePolicyAzureEdgeHubInterfacesIo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyModulePolicyAzureEdgeHubInterfacesIo | undefined) {
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

export class ProjectCloudPolicyModulePolicyAzureEdgeHubInterfacesIoList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyModulePolicyAzureEdgeHubInterfacesIoOutputReference {
    return new ProjectCloudPolicyModulePolicyAzureEdgeHubInterfacesIoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyModulePolicyAzureEdgeHubInterfaces {
}

export function projectCloudPolicyModulePolicyAzureEdgeHubInterfacesToTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeHubInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyModulePolicyAzureEdgeHubInterfacesToHclTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeHubInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyModulePolicyAzureEdgeHubInterfacesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyModulePolicyAzureEdgeHubInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyModulePolicyAzureEdgeHubInterfaces | undefined) {
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
  private _acls = new ProjectCloudPolicyModulePolicyAzureEdgeHubInterfacesAclsList(this, "acls", false);
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
  private _eidregister = new ProjectCloudPolicyModulePolicyAzureEdgeHubInterfacesEidregisterList(this, "eidregister", false);
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
  private _io = new ProjectCloudPolicyModulePolicyAzureEdgeHubInterfacesIoList(this, "io", false);
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

export class ProjectCloudPolicyModulePolicyAzureEdgeHubInterfacesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyModulePolicyAzureEdgeHubInterfacesOutputReference {
    return new ProjectCloudPolicyModulePolicyAzureEdgeHubInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigVariableGroupsCondition {
}

export function projectCloudPolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigVariableGroupsConditionToTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigVariableGroupsCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigVariableGroupsConditionToHclTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigVariableGroupsCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigVariableGroupsConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigVariableGroupsCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigVariableGroupsCondition | undefined) {
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

export class ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigVariableGroupsConditionList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigVariableGroupsConditionOutputReference {
    return new ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigVariableGroupsConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptions {
}

export function projectCloudPolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsToTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsToHclTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptions | undefined) {
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

export class ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsOutputReference {
    return new ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigVariableGroupsVariables {
}

export function projectCloudPolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigVariableGroupsVariablesToTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigVariableGroupsVariables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigVariableGroupsVariablesToHclTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigVariableGroupsVariables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigVariableGroupsVariablesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigVariableGroupsVariables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigVariableGroupsVariables | undefined) {
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
  private _options = new ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsList(this, "options", false);
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

export class ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigVariableGroupsVariablesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigVariableGroupsVariablesOutputReference {
    return new ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigVariableGroupsVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigVariableGroups {
}

export function projectCloudPolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigVariableGroupsToTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigVariableGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigVariableGroupsToHclTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigVariableGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigVariableGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigVariableGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigVariableGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // condition - computed: true, optional: false, required: false
  private _condition = new ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigVariableGroupsConditionList(this, "condition", false);
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
  private _variables = new ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigVariableGroupsVariablesList(this, "variables", false);
  public get variables() {
    return this._variables;
  }
}

export class ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigVariableGroupsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigVariableGroupsOutputReference {
    return new ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigVariableGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfig {
}

export function projectCloudPolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigToTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigToHclTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfig | undefined) {
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
  private _variableGroups = new ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigVariableGroupsList(this, "variable_groups", false);
  public get variableGroups() {
    return this._variableGroups;
  }
}

export class ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigOutputReference {
    return new ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonConfiguration {
}

export function projectCloudPolicyModulePolicyAzureEdgeHubManifestJsonConfigurationToTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyModulePolicyAzureEdgeHubManifestJsonConfigurationToHclTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_config - computed: true, optional: false, required: false
  private _customConfig = new ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonConfigurationCustomConfigList(this, "custom_config", false);
  public get customConfig() {
    return this._customConfig;
  }
}

export class ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonConfigurationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonConfigurationOutputReference {
    return new ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonContainerDetail {
}

export function projectCloudPolicyModulePolicyAzureEdgeHubManifestJsonContainerDetailToTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonContainerDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyModulePolicyAzureEdgeHubManifestJsonContainerDetailToHclTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonContainerDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonContainerDetailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonContainerDetail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonContainerDetail | undefined) {
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

export class ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonContainerDetailList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonContainerDetailOutputReference {
    return new ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonContainerDetailOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonDesc {
}

export function projectCloudPolicyModulePolicyAzureEdgeHubManifestJsonDescToTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonDesc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyModulePolicyAzureEdgeHubManifestJsonDescToHclTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonDesc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonDescOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonDesc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonDesc | undefined) {
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

export class ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonDescList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonDescOutputReference {
    return new ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonDescOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonImagesParams {
}

export function projectCloudPolicyModulePolicyAzureEdgeHubManifestJsonImagesParamsToTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonImagesParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyModulePolicyAzureEdgeHubManifestJsonImagesParamsToHclTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonImagesParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonImagesParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonImagesParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonImagesParams | undefined) {
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

export class ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonImagesParamsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonImagesParamsOutputReference {
    return new ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonImagesParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonImages {
}

export function projectCloudPolicyModulePolicyAzureEdgeHubManifestJsonImagesToTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonImages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyModulePolicyAzureEdgeHubManifestJsonImagesToHclTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonImages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonImagesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonImages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonImages | undefined) {
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
  private _params = new ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonImagesParamsList(this, "params", false);
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

export class ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonImagesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonImagesOutputReference {
    return new ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonImagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsActionsLimitValue {
}

export function projectCloudPolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsActionsLimitValueToTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsActionsLimitValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsActionsLimitValueToHclTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsActionsLimitValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsActionsLimitValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsActionsLimitValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsActionsLimitValue | undefined) {
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

export class ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsActionsLimitValueList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsActionsLimitValueOutputReference {
    return new ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsActionsLimitValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsActionsPortmapto {
}

export function projectCloudPolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsActionsPortmaptoToTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsActionsPortmapto): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsActionsPortmaptoToHclTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsActionsPortmapto): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsActionsPortmaptoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsActionsPortmapto | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsActionsPortmapto | undefined) {
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

export class ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsActionsPortmaptoList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsActionsPortmaptoOutputReference {
    return new ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsActionsPortmaptoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsActions {
}

export function projectCloudPolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsActionsToTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsActionsToHclTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsActions | undefined) {
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
  private _limitValue = new ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsActionsLimitValueList(this, "limit_value", false);
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
  private _portmapto = new ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsActionsPortmaptoList(this, "portmapto", false);
  public get portmapto() {
    return this._portmapto;
  }
}

export class ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsActionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsActionsOutputReference {
    return new ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsMatches {
}

export function projectCloudPolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsMatchesToTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsMatches): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsMatchesToHclTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsMatches): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsMatchesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsMatches | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsMatches | undefined) {
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

export class ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsMatchesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsMatchesOutputReference {
    return new ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsMatchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAcls {
}

export function projectCloudPolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsToTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAcls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsToHclTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAcls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAcls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAcls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // actions - computed: true, optional: false, required: false
  private _actions = new ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }

  // matches - computed: true, optional: false, required: false
  private _matches = new ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsMatchesList(this, "matches", false);
  public get matches() {
    return this._matches;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsOutputReference {
    return new ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonInterfaces {
}

export function projectCloudPolicyModulePolicyAzureEdgeHubManifestJsonInterfacesToTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyModulePolicyAzureEdgeHubManifestJsonInterfacesToHclTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonInterfacesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonInterfaces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // acls - computed: true, optional: false, required: false
  private _acls = new ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonInterfacesAclsList(this, "acls", false);
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

export class ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonInterfacesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonInterfacesOutputReference {
    return new ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonModule {
}

export function projectCloudPolicyModulePolicyAzureEdgeHubManifestJsonModuleToTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonModule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyModulePolicyAzureEdgeHubManifestJsonModuleToHclTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonModule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonModuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonModule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonModule | undefined) {
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

export class ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonModuleList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonModuleOutputReference {
    return new ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonModuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonOwner {
}

export function projectCloudPolicyModulePolicyAzureEdgeHubManifestJsonOwnerToTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonOwner): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyModulePolicyAzureEdgeHubManifestJsonOwnerToHclTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonOwner): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonOwnerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonOwner | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonOwner | undefined) {
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

export class ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonOwnerList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonOwnerOutputReference {
    return new ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonOwnerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonPermissions {
}

export function projectCloudPolicyModulePolicyAzureEdgeHubManifestJsonPermissionsToTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyModulePolicyAzureEdgeHubManifestJsonPermissionsToHclTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonPermissionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}

export class ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonPermissionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonPermissionsOutputReference {
    return new ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonResources {
}

export function projectCloudPolicyModulePolicyAzureEdgeHubManifestJsonResourcesToTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyModulePolicyAzureEdgeHubManifestJsonResourcesToHclTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonResources | undefined) {
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

export class ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonResourcesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonResourcesOutputReference {
    return new ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJson {
}

export function projectCloudPolicyModulePolicyAzureEdgeHubManifestJsonToTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJson): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyModulePolicyAzureEdgeHubManifestJsonToHclTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJson): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJson | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJson | undefined) {
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
  private _configuration = new ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonConfigurationList(this, "configuration", false);
  public get configuration() {
    return this._configuration;
  }

  // container_detail - computed: true, optional: false, required: false
  private _containerDetail = new ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonContainerDetailList(this, "container_detail", false);
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
  private _desc = new ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonDescList(this, "desc", false);
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
  private _images = new ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonImagesList(this, "images", false);
  public get images() {
    return this._images;
  }

  // interfaces - computed: true, optional: false, required: false
  private _interfaces = new ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }

  // module - computed: true, optional: false, required: false
  private _module = new ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonModuleList(this, "module", false);
  public get module() {
    return this._module;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // owner - computed: true, optional: false, required: false
  private _owner = new ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonOwnerList(this, "owner", false);
  public get owner() {
    return this._owner;
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // persistent_runtime_size_bytes - computed: true, optional: false, required: false
  public get persistentRuntimeSizeBytes() {
    return this.getStringAttribute('persistent_runtime_size_bytes');
  }

  // resources - computed: true, optional: false, required: false
  private _resources = new ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonResourcesList(this, "resources", false);
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

export class ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonOutputReference {
    return new ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyModulePolicyAzureEdgeHubParentDetail {
}

export function projectCloudPolicyModulePolicyAzureEdgeHubParentDetailToTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeHubParentDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyModulePolicyAzureEdgeHubParentDetailToHclTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeHubParentDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyModulePolicyAzureEdgeHubParentDetailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyModulePolicyAzureEdgeHubParentDetail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyModulePolicyAzureEdgeHubParentDetail | undefined) {
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

export class ProjectCloudPolicyModulePolicyAzureEdgeHubParentDetailList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyModulePolicyAzureEdgeHubParentDetailOutputReference {
    return new ProjectCloudPolicyModulePolicyAzureEdgeHubParentDetailOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyModulePolicyAzureEdgeHub {
}

export function projectCloudPolicyModulePolicyAzureEdgeHubToTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeHub): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyModulePolicyAzureEdgeHubToHclTerraform(struct?: ProjectCloudPolicyModulePolicyAzureEdgeHub): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyModulePolicyAzureEdgeHubOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyModulePolicyAzureEdgeHub | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyModulePolicyAzureEdgeHub | undefined) {
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
  private _interfaces = new ProjectCloudPolicyModulePolicyAzureEdgeHubInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }

  // manifest_json - computed: true, optional: false, required: false
  private _manifestJson = new ProjectCloudPolicyModulePolicyAzureEdgeHubManifestJsonList(this, "manifest_json", false);
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
  private _parentDetail = new ProjectCloudPolicyModulePolicyAzureEdgeHubParentDetailList(this, "parent_detail", false);
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

export class ProjectCloudPolicyModulePolicyAzureEdgeHubList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyModulePolicyAzureEdgeHubOutputReference {
    return new ProjectCloudPolicyModulePolicyAzureEdgeHubOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyModulePolicyMetrics {
}

export function projectCloudPolicyModulePolicyMetricsToTerraform(struct?: ProjectCloudPolicyModulePolicyMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyModulePolicyMetricsToHclTerraform(struct?: ProjectCloudPolicyModulePolicyMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyModulePolicyMetricsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyModulePolicyMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyModulePolicyMetrics | undefined) {
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

export class ProjectCloudPolicyModulePolicyMetricsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyModulePolicyMetricsOutputReference {
    return new ProjectCloudPolicyModulePolicyMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyModulePolicy {
}

export function projectCloudPolicyModulePolicyToTerraform(struct?: ProjectCloudPolicyModulePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyModulePolicyToHclTerraform(struct?: ProjectCloudPolicyModulePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyModulePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyModulePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyModulePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // apps - computed: true, optional: false, required: false
  private _apps = new ProjectCloudPolicyModulePolicyAppsList(this, "apps", false);
  public get apps() {
    return this._apps;
  }

  // azure_edge_agent - computed: true, optional: false, required: false
  private _azureEdgeAgent = new ProjectCloudPolicyModulePolicyAzureEdgeAgentList(this, "azure_edge_agent", false);
  public get azureEdgeAgent() {
    return this._azureEdgeAgent;
  }

  // azure_edge_hub - computed: true, optional: false, required: false
  private _azureEdgeHub = new ProjectCloudPolicyModulePolicyAzureEdgeHubList(this, "azure_edge_hub", false);
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
  private _metrics = new ProjectCloudPolicyModulePolicyMetricsList(this, "metrics", false);
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

export class ProjectCloudPolicyModulePolicyList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyModulePolicyOutputReference {
    return new ProjectCloudPolicyModulePolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyNetworkPolicyNetInstanceConfigDnsListStruct {
}

export function projectCloudPolicyNetworkPolicyNetInstanceConfigDnsListStructToTerraform(struct?: ProjectCloudPolicyNetworkPolicyNetInstanceConfigDnsListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyNetworkPolicyNetInstanceConfigDnsListStructToHclTerraform(struct?: ProjectCloudPolicyNetworkPolicyNetInstanceConfigDnsListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyNetworkPolicyNetInstanceConfigDnsListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyNetworkPolicyNetInstanceConfigDnsListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyNetworkPolicyNetInstanceConfigDnsListStruct | undefined) {
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

export class ProjectCloudPolicyNetworkPolicyNetInstanceConfigDnsListStructList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyNetworkPolicyNetInstanceConfigDnsListStructOutputReference {
    return new ProjectCloudPolicyNetworkPolicyNetInstanceConfigDnsListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyNetworkPolicyNetInstanceConfigEdgeNodeCluster {
}

export function projectCloudPolicyNetworkPolicyNetInstanceConfigEdgeNodeClusterToTerraform(struct?: ProjectCloudPolicyNetworkPolicyNetInstanceConfigEdgeNodeCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyNetworkPolicyNetInstanceConfigEdgeNodeClusterToHclTerraform(struct?: ProjectCloudPolicyNetworkPolicyNetInstanceConfigEdgeNodeCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyNetworkPolicyNetInstanceConfigEdgeNodeClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyNetworkPolicyNetInstanceConfigEdgeNodeCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyNetworkPolicyNetInstanceConfigEdgeNodeCluster | undefined) {
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

export class ProjectCloudPolicyNetworkPolicyNetInstanceConfigEdgeNodeClusterList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyNetworkPolicyNetInstanceConfigEdgeNodeClusterOutputReference {
    return new ProjectCloudPolicyNetworkPolicyNetInstanceConfigEdgeNodeClusterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyNetworkPolicyNetInstanceConfigIpDhcpRange {
}

export function projectCloudPolicyNetworkPolicyNetInstanceConfigIpDhcpRangeToTerraform(struct?: ProjectCloudPolicyNetworkPolicyNetInstanceConfigIpDhcpRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyNetworkPolicyNetInstanceConfigIpDhcpRangeToHclTerraform(struct?: ProjectCloudPolicyNetworkPolicyNetInstanceConfigIpDhcpRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyNetworkPolicyNetInstanceConfigIpDhcpRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyNetworkPolicyNetInstanceConfigIpDhcpRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyNetworkPolicyNetInstanceConfigIpDhcpRange | undefined) {
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

export class ProjectCloudPolicyNetworkPolicyNetInstanceConfigIpDhcpRangeList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyNetworkPolicyNetInstanceConfigIpDhcpRangeOutputReference {
    return new ProjectCloudPolicyNetworkPolicyNetInstanceConfigIpDhcpRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyNetworkPolicyNetInstanceConfigIp {
}

export function projectCloudPolicyNetworkPolicyNetInstanceConfigIpToTerraform(struct?: ProjectCloudPolicyNetworkPolicyNetInstanceConfigIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyNetworkPolicyNetInstanceConfigIpToHclTerraform(struct?: ProjectCloudPolicyNetworkPolicyNetInstanceConfigIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyNetworkPolicyNetInstanceConfigIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyNetworkPolicyNetInstanceConfigIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyNetworkPolicyNetInstanceConfigIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dhcp_range - computed: true, optional: false, required: false
  private _dhcpRange = new ProjectCloudPolicyNetworkPolicyNetInstanceConfigIpDhcpRangeList(this, "dhcp_range", false);
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

export class ProjectCloudPolicyNetworkPolicyNetInstanceConfigIpList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyNetworkPolicyNetInstanceConfigIpOutputReference {
    return new ProjectCloudPolicyNetworkPolicyNetInstanceConfigIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyNetworkPolicyNetInstanceConfigLispSp {
}

export function projectCloudPolicyNetworkPolicyNetInstanceConfigLispSpToTerraform(struct?: ProjectCloudPolicyNetworkPolicyNetInstanceConfigLispSp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyNetworkPolicyNetInstanceConfigLispSpToHclTerraform(struct?: ProjectCloudPolicyNetworkPolicyNetInstanceConfigLispSp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyNetworkPolicyNetInstanceConfigLispSpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyNetworkPolicyNetInstanceConfigLispSp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyNetworkPolicyNetInstanceConfigLispSp | undefined) {
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

export class ProjectCloudPolicyNetworkPolicyNetInstanceConfigLispSpList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyNetworkPolicyNetInstanceConfigLispSpOutputReference {
    return new ProjectCloudPolicyNetworkPolicyNetInstanceConfigLispSpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyNetworkPolicyNetInstanceConfigLisp {
}

export function projectCloudPolicyNetworkPolicyNetInstanceConfigLispToTerraform(struct?: ProjectCloudPolicyNetworkPolicyNetInstanceConfigLisp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyNetworkPolicyNetInstanceConfigLispToHclTerraform(struct?: ProjectCloudPolicyNetworkPolicyNetInstanceConfigLisp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyNetworkPolicyNetInstanceConfigLispOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyNetworkPolicyNetInstanceConfigLisp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyNetworkPolicyNetInstanceConfigLisp | undefined) {
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
  private _sp = new ProjectCloudPolicyNetworkPolicyNetInstanceConfigLispSpList(this, "sp", false);
  public get sp() {
    return this._sp;
  }
}

export class ProjectCloudPolicyNetworkPolicyNetInstanceConfigLispList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyNetworkPolicyNetInstanceConfigLispOutputReference {
    return new ProjectCloudPolicyNetworkPolicyNetInstanceConfigLispOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyNetworkPolicyNetInstanceConfigOpaqueLispSp {
}

export function projectCloudPolicyNetworkPolicyNetInstanceConfigOpaqueLispSpToTerraform(struct?: ProjectCloudPolicyNetworkPolicyNetInstanceConfigOpaqueLispSp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyNetworkPolicyNetInstanceConfigOpaqueLispSpToHclTerraform(struct?: ProjectCloudPolicyNetworkPolicyNetInstanceConfigOpaqueLispSp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyNetworkPolicyNetInstanceConfigOpaqueLispSpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyNetworkPolicyNetInstanceConfigOpaqueLispSp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyNetworkPolicyNetInstanceConfigOpaqueLispSp | undefined) {
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

export class ProjectCloudPolicyNetworkPolicyNetInstanceConfigOpaqueLispSpList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyNetworkPolicyNetInstanceConfigOpaqueLispSpOutputReference {
    return new ProjectCloudPolicyNetworkPolicyNetInstanceConfigOpaqueLispSpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyNetworkPolicyNetInstanceConfigOpaqueLisp {
}

export function projectCloudPolicyNetworkPolicyNetInstanceConfigOpaqueLispToTerraform(struct?: ProjectCloudPolicyNetworkPolicyNetInstanceConfigOpaqueLisp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyNetworkPolicyNetInstanceConfigOpaqueLispToHclTerraform(struct?: ProjectCloudPolicyNetworkPolicyNetInstanceConfigOpaqueLisp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyNetworkPolicyNetInstanceConfigOpaqueLispOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyNetworkPolicyNetInstanceConfigOpaqueLisp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyNetworkPolicyNetInstanceConfigOpaqueLisp | undefined) {
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
  private _sp = new ProjectCloudPolicyNetworkPolicyNetInstanceConfigOpaqueLispSpList(this, "sp", false);
  public get sp() {
    return this._sp;
  }
}

export class ProjectCloudPolicyNetworkPolicyNetInstanceConfigOpaqueLispList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyNetworkPolicyNetInstanceConfigOpaqueLispOutputReference {
    return new ProjectCloudPolicyNetworkPolicyNetInstanceConfigOpaqueLispOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyNetworkPolicyNetInstanceConfigOpaque {
}

export function projectCloudPolicyNetworkPolicyNetInstanceConfigOpaqueToTerraform(struct?: ProjectCloudPolicyNetworkPolicyNetInstanceConfigOpaque): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyNetworkPolicyNetInstanceConfigOpaqueToHclTerraform(struct?: ProjectCloudPolicyNetworkPolicyNetInstanceConfigOpaque): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyNetworkPolicyNetInstanceConfigOpaqueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyNetworkPolicyNetInstanceConfigOpaque | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyNetworkPolicyNetInstanceConfigOpaque | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // lisp - computed: true, optional: false, required: false
  private _lisp = new ProjectCloudPolicyNetworkPolicyNetInstanceConfigOpaqueLispList(this, "lisp", false);
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

export class ProjectCloudPolicyNetworkPolicyNetInstanceConfigOpaqueList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyNetworkPolicyNetInstanceConfigOpaqueOutputReference {
    return new ProjectCloudPolicyNetworkPolicyNetInstanceConfigOpaqueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyNetworkPolicyNetInstanceConfigRevision {
}

export function projectCloudPolicyNetworkPolicyNetInstanceConfigRevisionToTerraform(struct?: ProjectCloudPolicyNetworkPolicyNetInstanceConfigRevision): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyNetworkPolicyNetInstanceConfigRevisionToHclTerraform(struct?: ProjectCloudPolicyNetworkPolicyNetInstanceConfigRevision): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyNetworkPolicyNetInstanceConfigRevisionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyNetworkPolicyNetInstanceConfigRevision | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyNetworkPolicyNetInstanceConfigRevision | undefined) {
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

export class ProjectCloudPolicyNetworkPolicyNetInstanceConfigRevisionList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyNetworkPolicyNetInstanceConfigRevisionOutputReference {
    return new ProjectCloudPolicyNetworkPolicyNetInstanceConfigRevisionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyNetworkPolicyNetInstanceConfigStaticRoutesProbeConfigCustomProbeConfigProbeEndpoint {
}

export function projectCloudPolicyNetworkPolicyNetInstanceConfigStaticRoutesProbeConfigCustomProbeConfigProbeEndpointToTerraform(struct?: ProjectCloudPolicyNetworkPolicyNetInstanceConfigStaticRoutesProbeConfigCustomProbeConfigProbeEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyNetworkPolicyNetInstanceConfigStaticRoutesProbeConfigCustomProbeConfigProbeEndpointToHclTerraform(struct?: ProjectCloudPolicyNetworkPolicyNetInstanceConfigStaticRoutesProbeConfigCustomProbeConfigProbeEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyNetworkPolicyNetInstanceConfigStaticRoutesProbeConfigCustomProbeConfigProbeEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyNetworkPolicyNetInstanceConfigStaticRoutesProbeConfigCustomProbeConfigProbeEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyNetworkPolicyNetInstanceConfigStaticRoutesProbeConfigCustomProbeConfigProbeEndpoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}

export class ProjectCloudPolicyNetworkPolicyNetInstanceConfigStaticRoutesProbeConfigCustomProbeConfigProbeEndpointList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyNetworkPolicyNetInstanceConfigStaticRoutesProbeConfigCustomProbeConfigProbeEndpointOutputReference {
    return new ProjectCloudPolicyNetworkPolicyNetInstanceConfigStaticRoutesProbeConfigCustomProbeConfigProbeEndpointOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyNetworkPolicyNetInstanceConfigStaticRoutesProbeConfigCustomProbeConfig {
}

export function projectCloudPolicyNetworkPolicyNetInstanceConfigStaticRoutesProbeConfigCustomProbeConfigToTerraform(struct?: ProjectCloudPolicyNetworkPolicyNetInstanceConfigStaticRoutesProbeConfigCustomProbeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyNetworkPolicyNetInstanceConfigStaticRoutesProbeConfigCustomProbeConfigToHclTerraform(struct?: ProjectCloudPolicyNetworkPolicyNetInstanceConfigStaticRoutesProbeConfigCustomProbeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyNetworkPolicyNetInstanceConfigStaticRoutesProbeConfigCustomProbeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyNetworkPolicyNetInstanceConfigStaticRoutesProbeConfigCustomProbeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyNetworkPolicyNetInstanceConfigStaticRoutesProbeConfigCustomProbeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // probe_endpoint - computed: true, optional: false, required: false
  private _probeEndpoint = new ProjectCloudPolicyNetworkPolicyNetInstanceConfigStaticRoutesProbeConfigCustomProbeConfigProbeEndpointList(this, "probe_endpoint", false);
  public get probeEndpoint() {
    return this._probeEndpoint;
  }

  // probe_method - computed: true, optional: false, required: false
  public get probeMethod() {
    return this.getStringAttribute('probe_method');
  }
}

export class ProjectCloudPolicyNetworkPolicyNetInstanceConfigStaticRoutesProbeConfigCustomProbeConfigList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyNetworkPolicyNetInstanceConfigStaticRoutesProbeConfigCustomProbeConfigOutputReference {
    return new ProjectCloudPolicyNetworkPolicyNetInstanceConfigStaticRoutesProbeConfigCustomProbeConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyNetworkPolicyNetInstanceConfigStaticRoutesProbeConfig {
}

export function projectCloudPolicyNetworkPolicyNetInstanceConfigStaticRoutesProbeConfigToTerraform(struct?: ProjectCloudPolicyNetworkPolicyNetInstanceConfigStaticRoutesProbeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyNetworkPolicyNetInstanceConfigStaticRoutesProbeConfigToHclTerraform(struct?: ProjectCloudPolicyNetworkPolicyNetInstanceConfigStaticRoutesProbeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyNetworkPolicyNetInstanceConfigStaticRoutesProbeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyNetworkPolicyNetInstanceConfigStaticRoutesProbeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyNetworkPolicyNetInstanceConfigStaticRoutesProbeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_probe_config - computed: true, optional: false, required: false
  private _customProbeConfig = new ProjectCloudPolicyNetworkPolicyNetInstanceConfigStaticRoutesProbeConfigCustomProbeConfigList(this, "custom_probe_config", false);
  public get customProbeConfig() {
    return this._customProbeConfig;
  }

  // enable_gateway_ping - computed: true, optional: false, required: false
  public get enableGatewayPing() {
    return this.getBooleanAttribute('enable_gateway_ping');
  }

  // ping_max_cost - computed: true, optional: false, required: false
  public get pingMaxCost() {
    return this.getNumberAttribute('ping_max_cost');
  }

  // prefer_lower_cost - computed: true, optional: false, required: false
  public get preferLowerCost() {
    return this.getBooleanAttribute('prefer_lower_cost');
  }

  // prefer_stronger_wwan_signal - computed: true, optional: false, required: false
  public get preferStrongerWwanSignal() {
    return this.getBooleanAttribute('prefer_stronger_wwan_signal');
  }
}

export class ProjectCloudPolicyNetworkPolicyNetInstanceConfigStaticRoutesProbeConfigList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyNetworkPolicyNetInstanceConfigStaticRoutesProbeConfigOutputReference {
    return new ProjectCloudPolicyNetworkPolicyNetInstanceConfigStaticRoutesProbeConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyNetworkPolicyNetInstanceConfigStaticRoutes {
}

export function projectCloudPolicyNetworkPolicyNetInstanceConfigStaticRoutesToTerraform(struct?: ProjectCloudPolicyNetworkPolicyNetInstanceConfigStaticRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyNetworkPolicyNetInstanceConfigStaticRoutesToHclTerraform(struct?: ProjectCloudPolicyNetworkPolicyNetInstanceConfigStaticRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyNetworkPolicyNetInstanceConfigStaticRoutesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyNetworkPolicyNetInstanceConfigStaticRoutes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyNetworkPolicyNetInstanceConfigStaticRoutes | undefined) {
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

  // output_port - computed: true, optional: false, required: false
  public get outputPort() {
    return this.getStringAttribute('output_port');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // probe_config - computed: true, optional: false, required: false
  private _probeConfig = new ProjectCloudPolicyNetworkPolicyNetInstanceConfigStaticRoutesProbeConfigList(this, "probe_config", false);
  public get probeConfig() {
    return this._probeConfig;
  }
}

export class ProjectCloudPolicyNetworkPolicyNetInstanceConfigStaticRoutesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyNetworkPolicyNetInstanceConfigStaticRoutesOutputReference {
    return new ProjectCloudPolicyNetworkPolicyNetInstanceConfigStaticRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyNetworkPolicyNetInstanceConfig {
}

export function projectCloudPolicyNetworkPolicyNetInstanceConfigToTerraform(struct?: ProjectCloudPolicyNetworkPolicyNetInstanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyNetworkPolicyNetInstanceConfigToHclTerraform(struct?: ProjectCloudPolicyNetworkPolicyNetInstanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyNetworkPolicyNetInstanceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyNetworkPolicyNetInstanceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyNetworkPolicyNetInstanceConfig | undefined) {
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
  private _dnsList = new ProjectCloudPolicyNetworkPolicyNetInstanceConfigDnsListStructList(this, "dns_list", false);
  public get dnsList() {
    return this._dnsList;
  }

  // edge_node_cluster - computed: true, optional: false, required: false
  private _edgeNodeCluster = new ProjectCloudPolicyNetworkPolicyNetInstanceConfigEdgeNodeClusterList(this, "edge_node_cluster", false);
  public get edgeNodeCluster() {
    return this._edgeNodeCluster;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip - computed: true, optional: false, required: false
  private _ip = new ProjectCloudPolicyNetworkPolicyNetInstanceConfigIpList(this, "ip", false);
  public get ip() {
    return this._ip;
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // lisp - computed: true, optional: false, required: false
  private _lisp = new ProjectCloudPolicyNetworkPolicyNetInstanceConfigLispList(this, "lisp", false);
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
  private _opaque = new ProjectCloudPolicyNetworkPolicyNetInstanceConfigOpaqueList(this, "opaque", false);
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
  private _revision = new ProjectCloudPolicyNetworkPolicyNetInstanceConfigRevisionList(this, "revision", false);
  public get revision() {
    return this._revision;
  }

  // static_routes - computed: true, optional: false, required: false
  private _staticRoutes = new ProjectCloudPolicyNetworkPolicyNetInstanceConfigStaticRoutesList(this, "static_routes", false);
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

export class ProjectCloudPolicyNetworkPolicyNetInstanceConfigList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyNetworkPolicyNetInstanceConfigOutputReference {
    return new ProjectCloudPolicyNetworkPolicyNetInstanceConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyNetworkPolicy {
}

export function projectCloudPolicyNetworkPolicyToTerraform(struct?: ProjectCloudPolicyNetworkPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyNetworkPolicyToHclTerraform(struct?: ProjectCloudPolicyNetworkPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyNetworkPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyNetworkPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyNetworkPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // net_instance_config - computed: true, optional: false, required: false
  private _netInstanceConfig = new ProjectCloudPolicyNetworkPolicyNetInstanceConfigList(this, "net_instance_config", false);
  public get netInstanceConfig() {
    return this._netInstanceConfig;
  }
}

export class ProjectCloudPolicyNetworkPolicyList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyNetworkPolicyOutputReference {
    return new ProjectCloudPolicyNetworkPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicyRevision {
}

export function projectCloudPolicyRevisionToTerraform(struct?: ProjectCloudPolicyRevision): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyRevisionToHclTerraform(struct?: ProjectCloudPolicyRevision): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyRevisionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicyRevision | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicyRevision | undefined) {
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

export class ProjectCloudPolicyRevisionList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyRevisionOutputReference {
    return new ProjectCloudPolicyRevisionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudPolicy {
}

export function projectCloudPolicyToTerraform(struct?: ProjectCloudPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCloudPolicyToHclTerraform(struct?: ProjectCloudPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCloudPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectCloudPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // app_policy - computed: true, optional: false, required: false
  private _appPolicy = new ProjectCloudPolicyAppPolicyList(this, "app_policy", false);
  public get appPolicy() {
    return this._appPolicy;
  }

  // attestation_policy - computed: true, optional: false, required: false
  private _attestationPolicy = new ProjectCloudPolicyAttestationPolicyList(this, "attestation_policy", false);
  public get attestationPolicy() {
    return this._attestationPolicy;
  }

  // attr - computed: true, optional: false, required: false
  private _attr = new cdktf.StringMap(this, "attr");
  public get attr() {
    return this._attr;
  }

  // azure_policy - computed: true, optional: false, required: false
  private _azurePolicy = new ProjectCloudPolicyAzurePolicyList(this, "azure_policy", false);
  public get azurePolicy() {
    return this._azurePolicy;
  }

  // cluster_policy - computed: true, optional: false, required: false
  private _clusterPolicy = new ProjectCloudPolicyClusterPolicyList(this, "cluster_policy", false);
  public get clusterPolicy() {
    return this._clusterPolicy;
  }

  // configuration_lock_policy - computed: true, optional: false, required: false
  private _configurationLockPolicy = new ProjectCloudPolicyConfigurationLockPolicyList(this, "configuration_lock_policy", false);
  public get configurationLockPolicy() {
    return this._configurationLockPolicy;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // edgeview_policy - computed: true, optional: false, required: false
  private _edgeviewPolicy = new ProjectCloudPolicyEdgeviewPolicyList(this, "edgeview_policy", false);
  public get edgeviewPolicy() {
    return this._edgeviewPolicy;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // local_operator_console_policy - computed: true, optional: false, required: false
  private _localOperatorConsolePolicy = new ProjectCloudPolicyLocalOperatorConsolePolicyList(this, "local_operator_console_policy", false);
  public get localOperatorConsolePolicy() {
    return this._localOperatorConsolePolicy;
  }

  // module_policy - computed: true, optional: false, required: false
  private _modulePolicy = new ProjectCloudPolicyModulePolicyList(this, "module_policy", false);
  public get modulePolicy() {
    return this._modulePolicy;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network_policy - computed: true, optional: false, required: false
  private _networkPolicy = new ProjectCloudPolicyNetworkPolicyList(this, "network_policy", false);
  public get networkPolicy() {
    return this._networkPolicy;
  }

  // revision - computed: true, optional: false, required: false
  private _revision = new ProjectCloudPolicyRevisionList(this, "revision", false);
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

export class ProjectCloudPolicyList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectCloudPolicyOutputReference {
    return new ProjectCloudPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyAppPolicyAppsInterfacesAclsActionsMapparams {
}

export function projectModulePolicyAppPolicyAppsInterfacesAclsActionsMapparamsToTerraform(struct?: ProjectModulePolicyAppPolicyAppsInterfacesAclsActionsMapparams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyAppPolicyAppsInterfacesAclsActionsMapparamsToHclTerraform(struct?: ProjectModulePolicyAppPolicyAppsInterfacesAclsActionsMapparams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyAppPolicyAppsInterfacesAclsActionsMapparamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyAppPolicyAppsInterfacesAclsActionsMapparams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyAppPolicyAppsInterfacesAclsActionsMapparams | undefined) {
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

export class ProjectModulePolicyAppPolicyAppsInterfacesAclsActionsMapparamsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyAppPolicyAppsInterfacesAclsActionsMapparamsOutputReference {
    return new ProjectModulePolicyAppPolicyAppsInterfacesAclsActionsMapparamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyAppPolicyAppsInterfacesAclsActions {
}

export function projectModulePolicyAppPolicyAppsInterfacesAclsActionsToTerraform(struct?: ProjectModulePolicyAppPolicyAppsInterfacesAclsActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyAppPolicyAppsInterfacesAclsActionsToHclTerraform(struct?: ProjectModulePolicyAppPolicyAppsInterfacesAclsActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyAppPolicyAppsInterfacesAclsActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyAppPolicyAppsInterfacesAclsActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyAppPolicyAppsInterfacesAclsActions | undefined) {
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
  private _mapparams = new ProjectModulePolicyAppPolicyAppsInterfacesAclsActionsMapparamsList(this, "mapparams", false);
  public get mapparams() {
    return this._mapparams;
  }

  // portmap - computed: true, optional: false, required: false
  public get portmap() {
    return this.getBooleanAttribute('portmap');
  }
}

export class ProjectModulePolicyAppPolicyAppsInterfacesAclsActionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyAppPolicyAppsInterfacesAclsActionsOutputReference {
    return new ProjectModulePolicyAppPolicyAppsInterfacesAclsActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyAppPolicyAppsInterfacesAclsMatches {
}

export function projectModulePolicyAppPolicyAppsInterfacesAclsMatchesToTerraform(struct?: ProjectModulePolicyAppPolicyAppsInterfacesAclsMatches): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyAppPolicyAppsInterfacesAclsMatchesToHclTerraform(struct?: ProjectModulePolicyAppPolicyAppsInterfacesAclsMatches): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyAppPolicyAppsInterfacesAclsMatchesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyAppPolicyAppsInterfacesAclsMatches | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyAppPolicyAppsInterfacesAclsMatches | undefined) {
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

export class ProjectModulePolicyAppPolicyAppsInterfacesAclsMatchesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyAppPolicyAppsInterfacesAclsMatchesOutputReference {
    return new ProjectModulePolicyAppPolicyAppsInterfacesAclsMatchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyAppPolicyAppsInterfacesAcls {
}

export function projectModulePolicyAppPolicyAppsInterfacesAclsToTerraform(struct?: ProjectModulePolicyAppPolicyAppsInterfacesAcls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyAppPolicyAppsInterfacesAclsToHclTerraform(struct?: ProjectModulePolicyAppPolicyAppsInterfacesAcls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyAppPolicyAppsInterfacesAclsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyAppPolicyAppsInterfacesAcls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyAppPolicyAppsInterfacesAcls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // actions - computed: true, optional: false, required: false
  private _actions = new ProjectModulePolicyAppPolicyAppsInterfacesAclsActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // matches - computed: true, optional: false, required: false
  private _matches = new ProjectModulePolicyAppPolicyAppsInterfacesAclsMatchesList(this, "matches", false);
  public get matches() {
    return this._matches;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class ProjectModulePolicyAppPolicyAppsInterfacesAclsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyAppPolicyAppsInterfacesAclsOutputReference {
    return new ProjectModulePolicyAppPolicyAppsInterfacesAclsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyAppPolicyAppsInterfacesEidregisterLispMapServers {
}

export function projectModulePolicyAppPolicyAppsInterfacesEidregisterLispMapServersToTerraform(struct?: ProjectModulePolicyAppPolicyAppsInterfacesEidregisterLispMapServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyAppPolicyAppsInterfacesEidregisterLispMapServersToHclTerraform(struct?: ProjectModulePolicyAppPolicyAppsInterfacesEidregisterLispMapServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyAppPolicyAppsInterfacesEidregisterLispMapServersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyAppPolicyAppsInterfacesEidregisterLispMapServers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyAppPolicyAppsInterfacesEidregisterLispMapServers | undefined) {
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

export class ProjectModulePolicyAppPolicyAppsInterfacesEidregisterLispMapServersList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyAppPolicyAppsInterfacesEidregisterLispMapServersOutputReference {
    return new ProjectModulePolicyAppPolicyAppsInterfacesEidregisterLispMapServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyAppPolicyAppsInterfacesEidregister {
}

export function projectModulePolicyAppPolicyAppsInterfacesEidregisterToTerraform(struct?: ProjectModulePolicyAppPolicyAppsInterfacesEidregister): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyAppPolicyAppsInterfacesEidregisterToHclTerraform(struct?: ProjectModulePolicyAppPolicyAppsInterfacesEidregister): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyAppPolicyAppsInterfacesEidregisterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyAppPolicyAppsInterfacesEidregister | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyAppPolicyAppsInterfacesEidregister | undefined) {
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
  private _lispMapServers = new ProjectModulePolicyAppPolicyAppsInterfacesEidregisterLispMapServersList(this, "lisp_map_servers", false);
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

export class ProjectModulePolicyAppPolicyAppsInterfacesEidregisterList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyAppPolicyAppsInterfacesEidregisterOutputReference {
    return new ProjectModulePolicyAppPolicyAppsInterfacesEidregisterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyAppPolicyAppsInterfacesIo {
}

export function projectModulePolicyAppPolicyAppsInterfacesIoToTerraform(struct?: ProjectModulePolicyAppPolicyAppsInterfacesIo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyAppPolicyAppsInterfacesIoToHclTerraform(struct?: ProjectModulePolicyAppPolicyAppsInterfacesIo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyAppPolicyAppsInterfacesIoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyAppPolicyAppsInterfacesIo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyAppPolicyAppsInterfacesIo | undefined) {
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

export class ProjectModulePolicyAppPolicyAppsInterfacesIoList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyAppPolicyAppsInterfacesIoOutputReference {
    return new ProjectModulePolicyAppPolicyAppsInterfacesIoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyAppPolicyAppsInterfaces {
}

export function projectModulePolicyAppPolicyAppsInterfacesToTerraform(struct?: ProjectModulePolicyAppPolicyAppsInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyAppPolicyAppsInterfacesToHclTerraform(struct?: ProjectModulePolicyAppPolicyAppsInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyAppPolicyAppsInterfacesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyAppPolicyAppsInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyAppPolicyAppsInterfaces | undefined) {
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
  private _acls = new ProjectModulePolicyAppPolicyAppsInterfacesAclsList(this, "acls", false);
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
  private _eidregister = new ProjectModulePolicyAppPolicyAppsInterfacesEidregisterList(this, "eidregister", false);
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
  private _io = new ProjectModulePolicyAppPolicyAppsInterfacesIoList(this, "io", false);
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

export class ProjectModulePolicyAppPolicyAppsInterfacesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyAppPolicyAppsInterfacesOutputReference {
    return new ProjectModulePolicyAppPolicyAppsInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsCondition {
}

export function projectModulePolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsConditionToTerraform(struct?: ProjectModulePolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsConditionToHclTerraform(struct?: ProjectModulePolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsCondition | undefined) {
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

export class ProjectModulePolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsConditionList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsConditionOutputReference {
    return new ProjectModulePolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptions {
}

export function projectModulePolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsToTerraform(struct?: ProjectModulePolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsToHclTerraform(struct?: ProjectModulePolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptions | undefined) {
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

export class ProjectModulePolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsOutputReference {
    return new ProjectModulePolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariables {
}

export function projectModulePolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesToTerraform(struct?: ProjectModulePolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesToHclTerraform(struct?: ProjectModulePolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariables | undefined) {
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
  private _options = new ProjectModulePolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsList(this, "options", false);
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

export class ProjectModulePolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesOutputReference {
    return new ProjectModulePolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroups {
}

export function projectModulePolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsToTerraform(struct?: ProjectModulePolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsToHclTerraform(struct?: ProjectModulePolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // condition - computed: true, optional: false, required: false
  private _condition = new ProjectModulePolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsConditionList(this, "condition", false);
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
  private _variables = new ProjectModulePolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsVariablesList(this, "variables", false);
  public get variables() {
    return this._variables;
  }
}

export class ProjectModulePolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsOutputReference {
    return new ProjectModulePolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyAppPolicyAppsManifestJsonConfigurationCustomConfig {
}

export function projectModulePolicyAppPolicyAppsManifestJsonConfigurationCustomConfigToTerraform(struct?: ProjectModulePolicyAppPolicyAppsManifestJsonConfigurationCustomConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyAppPolicyAppsManifestJsonConfigurationCustomConfigToHclTerraform(struct?: ProjectModulePolicyAppPolicyAppsManifestJsonConfigurationCustomConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyAppPolicyAppsManifestJsonConfigurationCustomConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyAppPolicyAppsManifestJsonConfigurationCustomConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyAppPolicyAppsManifestJsonConfigurationCustomConfig | undefined) {
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
  private _variableGroups = new ProjectModulePolicyAppPolicyAppsManifestJsonConfigurationCustomConfigVariableGroupsList(this, "variable_groups", false);
  public get variableGroups() {
    return this._variableGroups;
  }
}

export class ProjectModulePolicyAppPolicyAppsManifestJsonConfigurationCustomConfigList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyAppPolicyAppsManifestJsonConfigurationCustomConfigOutputReference {
    return new ProjectModulePolicyAppPolicyAppsManifestJsonConfigurationCustomConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyAppPolicyAppsManifestJsonConfiguration {
}

export function projectModulePolicyAppPolicyAppsManifestJsonConfigurationToTerraform(struct?: ProjectModulePolicyAppPolicyAppsManifestJsonConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyAppPolicyAppsManifestJsonConfigurationToHclTerraform(struct?: ProjectModulePolicyAppPolicyAppsManifestJsonConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyAppPolicyAppsManifestJsonConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyAppPolicyAppsManifestJsonConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyAppPolicyAppsManifestJsonConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_config - computed: true, optional: false, required: false
  private _customConfig = new ProjectModulePolicyAppPolicyAppsManifestJsonConfigurationCustomConfigList(this, "custom_config", false);
  public get customConfig() {
    return this._customConfig;
  }
}

export class ProjectModulePolicyAppPolicyAppsManifestJsonConfigurationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyAppPolicyAppsManifestJsonConfigurationOutputReference {
    return new ProjectModulePolicyAppPolicyAppsManifestJsonConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyAppPolicyAppsManifestJsonContainerDetail {
}

export function projectModulePolicyAppPolicyAppsManifestJsonContainerDetailToTerraform(struct?: ProjectModulePolicyAppPolicyAppsManifestJsonContainerDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyAppPolicyAppsManifestJsonContainerDetailToHclTerraform(struct?: ProjectModulePolicyAppPolicyAppsManifestJsonContainerDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyAppPolicyAppsManifestJsonContainerDetailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyAppPolicyAppsManifestJsonContainerDetail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyAppPolicyAppsManifestJsonContainerDetail | undefined) {
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

export class ProjectModulePolicyAppPolicyAppsManifestJsonContainerDetailList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyAppPolicyAppsManifestJsonContainerDetailOutputReference {
    return new ProjectModulePolicyAppPolicyAppsManifestJsonContainerDetailOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyAppPolicyAppsManifestJsonDesc {
}

export function projectModulePolicyAppPolicyAppsManifestJsonDescToTerraform(struct?: ProjectModulePolicyAppPolicyAppsManifestJsonDesc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyAppPolicyAppsManifestJsonDescToHclTerraform(struct?: ProjectModulePolicyAppPolicyAppsManifestJsonDesc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyAppPolicyAppsManifestJsonDescOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyAppPolicyAppsManifestJsonDesc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyAppPolicyAppsManifestJsonDesc | undefined) {
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

export class ProjectModulePolicyAppPolicyAppsManifestJsonDescList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyAppPolicyAppsManifestJsonDescOutputReference {
    return new ProjectModulePolicyAppPolicyAppsManifestJsonDescOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyAppPolicyAppsManifestJsonImagesParams {
}

export function projectModulePolicyAppPolicyAppsManifestJsonImagesParamsToTerraform(struct?: ProjectModulePolicyAppPolicyAppsManifestJsonImagesParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyAppPolicyAppsManifestJsonImagesParamsToHclTerraform(struct?: ProjectModulePolicyAppPolicyAppsManifestJsonImagesParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyAppPolicyAppsManifestJsonImagesParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyAppPolicyAppsManifestJsonImagesParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyAppPolicyAppsManifestJsonImagesParams | undefined) {
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

export class ProjectModulePolicyAppPolicyAppsManifestJsonImagesParamsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyAppPolicyAppsManifestJsonImagesParamsOutputReference {
    return new ProjectModulePolicyAppPolicyAppsManifestJsonImagesParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyAppPolicyAppsManifestJsonImages {
}

export function projectModulePolicyAppPolicyAppsManifestJsonImagesToTerraform(struct?: ProjectModulePolicyAppPolicyAppsManifestJsonImages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyAppPolicyAppsManifestJsonImagesToHclTerraform(struct?: ProjectModulePolicyAppPolicyAppsManifestJsonImages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyAppPolicyAppsManifestJsonImagesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyAppPolicyAppsManifestJsonImages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyAppPolicyAppsManifestJsonImages | undefined) {
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
  private _params = new ProjectModulePolicyAppPolicyAppsManifestJsonImagesParamsList(this, "params", false);
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

export class ProjectModulePolicyAppPolicyAppsManifestJsonImagesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyAppPolicyAppsManifestJsonImagesOutputReference {
    return new ProjectModulePolicyAppPolicyAppsManifestJsonImagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyAppPolicyAppsManifestJsonInterfacesAclsActionsLimitValue {
}

export function projectModulePolicyAppPolicyAppsManifestJsonInterfacesAclsActionsLimitValueToTerraform(struct?: ProjectModulePolicyAppPolicyAppsManifestJsonInterfacesAclsActionsLimitValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyAppPolicyAppsManifestJsonInterfacesAclsActionsLimitValueToHclTerraform(struct?: ProjectModulePolicyAppPolicyAppsManifestJsonInterfacesAclsActionsLimitValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyAppPolicyAppsManifestJsonInterfacesAclsActionsLimitValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyAppPolicyAppsManifestJsonInterfacesAclsActionsLimitValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyAppPolicyAppsManifestJsonInterfacesAclsActionsLimitValue | undefined) {
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

export class ProjectModulePolicyAppPolicyAppsManifestJsonInterfacesAclsActionsLimitValueList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyAppPolicyAppsManifestJsonInterfacesAclsActionsLimitValueOutputReference {
    return new ProjectModulePolicyAppPolicyAppsManifestJsonInterfacesAclsActionsLimitValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyAppPolicyAppsManifestJsonInterfacesAclsActionsPortmapto {
}

export function projectModulePolicyAppPolicyAppsManifestJsonInterfacesAclsActionsPortmaptoToTerraform(struct?: ProjectModulePolicyAppPolicyAppsManifestJsonInterfacesAclsActionsPortmapto): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyAppPolicyAppsManifestJsonInterfacesAclsActionsPortmaptoToHclTerraform(struct?: ProjectModulePolicyAppPolicyAppsManifestJsonInterfacesAclsActionsPortmapto): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyAppPolicyAppsManifestJsonInterfacesAclsActionsPortmaptoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyAppPolicyAppsManifestJsonInterfacesAclsActionsPortmapto | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyAppPolicyAppsManifestJsonInterfacesAclsActionsPortmapto | undefined) {
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

export class ProjectModulePolicyAppPolicyAppsManifestJsonInterfacesAclsActionsPortmaptoList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyAppPolicyAppsManifestJsonInterfacesAclsActionsPortmaptoOutputReference {
    return new ProjectModulePolicyAppPolicyAppsManifestJsonInterfacesAclsActionsPortmaptoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyAppPolicyAppsManifestJsonInterfacesAclsActions {
}

export function projectModulePolicyAppPolicyAppsManifestJsonInterfacesAclsActionsToTerraform(struct?: ProjectModulePolicyAppPolicyAppsManifestJsonInterfacesAclsActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyAppPolicyAppsManifestJsonInterfacesAclsActionsToHclTerraform(struct?: ProjectModulePolicyAppPolicyAppsManifestJsonInterfacesAclsActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyAppPolicyAppsManifestJsonInterfacesAclsActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyAppPolicyAppsManifestJsonInterfacesAclsActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyAppPolicyAppsManifestJsonInterfacesAclsActions | undefined) {
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
  private _limitValue = new ProjectModulePolicyAppPolicyAppsManifestJsonInterfacesAclsActionsLimitValueList(this, "limit_value", false);
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
  private _portmapto = new ProjectModulePolicyAppPolicyAppsManifestJsonInterfacesAclsActionsPortmaptoList(this, "portmapto", false);
  public get portmapto() {
    return this._portmapto;
  }
}

export class ProjectModulePolicyAppPolicyAppsManifestJsonInterfacesAclsActionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyAppPolicyAppsManifestJsonInterfacesAclsActionsOutputReference {
    return new ProjectModulePolicyAppPolicyAppsManifestJsonInterfacesAclsActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectModulePolicyAppPolicyAppsManifestJsonInterfacesAclsMatches {
}

export function projectModulePolicyAppPolicyAppsManifestJsonInterfacesAclsMatchesToTerraform(struct?: ProjectModulePolicyAppPolicyAppsManifestJsonInterfacesAclsMatches): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectModulePolicyAppPolicyAppsManifestJsonInterfacesAclsMatchesToHclTerraform(struct?: ProjectModulePolicyAppPolicyAppsManifestJsonInterfacesAclsMatches): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectModulePolicyAppPolicyAppsManifestJsonInterfacesAclsMatchesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectModulePolicyAppPolicyAppsManifestJsonInterfacesAclsMatches | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectModulePolicyAppPolicyAppsManifestJsonInterfacesAclsMatches | undefined) {
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

export class ProjectModulePolicyAppPolicyAppsManifestJsonInterfacesAclsMatchesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectModulePolicyAppPolicyAppsManifestJsonInterfacesAclsMatchesOutputReference {
    return new ProjectModulePolicyAppPolicyAppsManifestJsonInterfacesAclsMatchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
